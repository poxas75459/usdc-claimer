/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "KdaQWjaQ5eRwUnshexhESi1usqwCtE9gcWLBL9yHj9bCLYwo5LmmmvFJ8bEpJMWoJJQ5reqjwkiZX9iV1pq1Xqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62G1SDqTYzhVHFsPDAiy97zrNPg99fzLfnpDFmvaKNUBpkBuHgXK82P4uWYPh7rmjZyyZwXqV9K87JdHYSGUtDUa",
  "key1": "5yDmqAV5bR5r59G1XzXUXxZWYxwj3kKo75CLKJDEC5MzApvGXXWRhcmGVVuaSriTXfDBo5WBRnXguRLTbcBUth5x",
  "key2": "4wFabL9nAUhTZYeGYAqkuxUd1gqz5DWF6cBsdXud4Yt7qEzvgRRfkbsQy4dWTLjkyKPLEfEBqprs2hkb5C1r3BLm",
  "key3": "4QRXFT1K2SKwRCBWYkQGVtUT81wfxVSJS7WiYvHwwthFSX2FasCeCnmXk8v3AfEeQuDvQZ3ah7LdWm512VgVQ5dj",
  "key4": "E96XyJtQ27Gukf9tcvK1hBbbFwK7Xf5gbCZ1RA6NwyNUNJC3yn5z8852Rn76jWukiY4W5QNm5f8FMFeHY4fFmZL",
  "key5": "4B2JaurEK4YyMxtC63xJbZ6TBC8uRqwsqSVRQs75qmgu6DQGre6H4yoYt1qeXGjUHcPrjUhsanxV75Sdb4RbB4Xo",
  "key6": "3xD9RxeEWBsnc24ejCPrXB3NjZPMFTLFMofqWu2SeQnctKMeZQpbEeMDvzNgjirrTU4oJ1QsnJ2Yqvmwdw8bQ37U",
  "key7": "xLVQNwprjieXHLPe9TwzXCTEUaWfzBZiDKDgAxVAiwHD8WWcdWMQShH3n4zwND2cq9KfNobuVf8s8uvW7dQTMRc",
  "key8": "3oguPnL6hKFWjCJQLe9AHpmeoV43btxJD48E5p2NXPCQaXQ8g8PgWVquAJ3GzYGXc9PXfdEnpDkdBboFrJTKLKMR",
  "key9": "5n9jLe668812GxfnQDwW9ATDb9Ucv8jTPo1frifyiuyiYx9pX8C4XckrBEBCiYGuoAsznGi9GLLLCdc81Zrgp2UQ",
  "key10": "5xxuhAmJfXf739hdSLLd1LMKePnY7WuBWyPzmQKhV7vCFqPfDXZKgHTqZi1rFj8MnwyFfSQd4SurURkVNamy9LVb",
  "key11": "4iRDVTn3jfF9mtUXBV6DnGoytAiF7EHUb2Nud8FLJeN56nsbePGZD7a7fGeHADNW9UqE4gNec6H798f5WtLscngu",
  "key12": "vF3L6ASDEXe6x5Bo2r9rXjpJzPU5yBVy9yoq7FUx24odHjjdTsPCxjpgisC2Nrmn2fzm3Cr19ziYcmqFoU2G6xi",
  "key13": "4gAGdGRF66DxVmB9PoycjKSajzRc2n53FtfrjHd6UpbExxsSvpGYW34ufSMAcNadpUkBJMcoFcaJowvyvJV4rW64",
  "key14": "j7vt4tErnZ7j8C8CJea46Gpiq4zzuykS3R16qiKsUMckftkhJjUJbYtiaNkFxk27TGrY11ii8S42mrrJNrWibEB",
  "key15": "36puZzk7cgYsnw8UFs7A2Wcshz8boUv9twpt7Co5MSuRgNgFQLm1Xm65GGLtNxHuiE6YYafoNhPWtUE9aLCmxbrM",
  "key16": "4ixCUVxVgwZ6fiB4op9sgdYHXJxnqfVMS73KNUqmaezRjFQc3gW4haQer6jcQfmK9186GuxkTujAoec3dD4QX6Mn",
  "key17": "4XtTv8U95gXoxGCjSV35B3aRiZNgRrQmnZvGZR5n3nrPqCnxsd2V4RAiMN74y2a2LZHamCActjncGpVm7B9NPhXE",
  "key18": "4BSoAkGe2VT1iBJbmoa9G6WgzTkX7eNkgyNft1FxknbDhV2epQVbbsrbURjHMWtFAB2dtBUdF7b6kssiu4WD499W",
  "key19": "SZRnvYwN4eHucR3sHe9BcDpfpMkhMRg3AgGAfXBR3usJwbsxrabpahgwKhEbGTkmZzzAqUYiG6tsVuiCKJ47yP4",
  "key20": "41bkFXyXydyyM8cwix4PhHVK3U9aAWKPbRcKuS1yxGZUG8CLT96XU2xfFVrWewkNuCA1CiysuRbPbQBfveuy2ZNn",
  "key21": "5TZigUrUhMW4iKxy7paVwMtaawXizwCh64gzPNnsnywrBuLGCS2QuPSVgBDJo96aiv1VmrMj24bVjm2dEa5vCYdp",
  "key22": "2J7H52QdUAwYLxyzR3nupxLmKcxKTWCvJaFHFhYE8vsuumxDKeiXdgikBuxCn2EZKggHeQxpjob7QN5LSrPTDzFA",
  "key23": "64emtzv8vLSPpB5PjQ2PKE4MCR5o9YY6dNesTtd7BZU8SK3f6CAFomrzTqzHM98zPCcYJcXhHqrNEb2bMPNAb8cc",
  "key24": "5vQQhncZe6mU4fu3AT1ZqkutQZtYiRCBLHb9wXcqvMgrKbHgcSviLpc5UVWqRyn1RrGJ4xzWQW9CGMVCQc8QSrzN",
  "key25": "cY73ey7dfCapwJhQrw94GfhL5rxcq1r2daWeH53iTK6o76eCc2nUGCsvFJozanHTjzA2JB6gQDNKyy8mPtpNdTs",
  "key26": "3pAhWDwjTUxaHw634RLSu9aY5inLNapxYt9J5vaLmN878NM9vB3YHArixfKPMXwXSp3jrYK9Qo9K1mBTJ8v3PZhg",
  "key27": "4PyghyvW7owFv6UFirhHwwSkfdiEsZgJS7ombBuJsenPas7aK5TBEmUqJ72ey2ZEhb7sCSB1N4ZEeppwRQkLsGtA",
  "key28": "4uDW4PRPAXGp4nQVh3RwM52cJzs4JC4F7HfPDFniV5tNKRUFtWfitG3kie8iRpZ5sGJ6Jsa6ZqJpv4zQ8wuRRKn3",
  "key29": "2XTT7kgnneb5Kc62VsiyGJnrgWinYZMSufsYfY1biSmUZdRkZ4rtbwGnN89b7T4Ng7eY6PFo2iFkyq6fxxBL5w4o",
  "key30": "4RJFnbWsTPPjWe2ReZLa6SayKqMJ43UT5pWL4z5xkjVgUixgX87P24yeM3k1TgZfSEsWkcht4ctcdaqV354onv1S",
  "key31": "2aaUY9q2ro1LNFprAJEPVvFCKm3FaTmu4PQ7LUEvSDi4JLJzivStERRT7jweaJc8Rs7AsMxpFsERcH7RVxtwmuTt"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
