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
    "4fqFCVbdH18DqFW5FsgwvGUCrQrBPBKT3yD4vBhQuxVem4kWXMHqUstQrmuirnL7JNjkMkkBwh4Ns1xny8LZqda6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQMHC5QR7PPLt6RusP9Q3C5YApRdi48hujTK9V5gKZ8RXDLyuXQfh7dW3RgccX1H5GbNtX1eyZrPWPi3ozyM1zP",
  "key1": "2NmwD4fka7kBefSSVH6QtddfQXKw6e1n3QVGvoojnAgD6GqnkB1tW2yBe6S5G5yX6UhRn4jFfL4i5dHycHPus1hu",
  "key2": "2W2SeVJxCrc52YPzkrXqf7engh4pNakRqr8hwTwuST5VizBcbfawo2K6auzwf45gvuU3Z3gWq14zv4iFjgCfPZQV",
  "key3": "2JugV8AXHRPhxwBNiATynAjp39LGHXD4QPi9LS5pSSg9eVDx5pFj3QiXgPDPrSnom4dFiUD7XNJdvaMTTbV3nNpu",
  "key4": "3HsyktxiXojtuBHR8zNKHwxmvq7FBY37SZu8Q42w5suJgBToEBqLfFX23Ubw9XRiWaCBiUgqAXnT7vvQLBb9KDxi",
  "key5": "2q6E87s98XCstzuu58xDcokweGKzSSb9iWbWujM962F1i6xpJzFaqHHHgBBcrbJ9YULhJmu2RrFWXuaR3Qe9HCQ5",
  "key6": "2fR7vUhTJKL3gsxeKQiCX7CT9zPXANCYyT1ZZ9iHbQXPZt3SieKSTfr1TLZdA8m9bioAestN4xFor37GUnsSzyoB",
  "key7": "2CZkGKw37YyEnduzjgahZ7UWKigfkcRVGzRhH597SESFqYfireua1X57JuwUjLBiJJ447BkCLtPizniMgSZnnxsC",
  "key8": "KsWiTbLGPkUeUoKrddUog3TkfdUZiLZznpyTGZ5WHSdMdWgW4nsPDZjsZLCV1g7LMEVsZDzkvGBbDFMVosAurVZ",
  "key9": "5vm8676B3dsXHxCuxsSpd39yHqe5Lyh9LDSoKQE3mHGEsWyKdmYJkUesFm4KdCaCRuUjNexTUdSd4Hcr8YCbEg5h",
  "key10": "2fethJNdytsmzxh9bNRY5N5iMmzeSrNahRANSjYzTye2yzZX4eSFbacC6xVPiLDicDMMjkbj35BMqVgo8XaLF64a",
  "key11": "4PR3LrRFhnXj5csrZTLWsG7ik8gt7BPRjwA9Sa1nxBoFXtahJJ798y3zhP6A2CvKWNE6jop57YZgEajbjuMKRMMy",
  "key12": "4RimLn5MHEAGjj7BEe9urgfCWsCCE8XiS4LDDytHyJpgTqDuVMRxBDCs2JfaLbM1Ab8o4nX37oHuLEHwVHwJL1JD",
  "key13": "eXNKrGRew4mvB33swzUmpxubsPoTXqQDewjcPD9quUrVvzoYHFpw4DwkD9C8xL7D5vjVvCg9ekQ4bUPUBSEHtb1",
  "key14": "49AyDrtCNNS4ve1pG5x4FsfQUG2QnYHGLi2ASijctmEe6vctinSeek2aiuYWoA3z94AwygosAy98rUvwzcFKLGRk",
  "key15": "ELV6m9jgb8CSDKJE67YzrZu2r2nkrqcPKBo3ioBnUEmwJv8tHwTRFEwonuNVMKX2bqiws5UABgpQxa5gyCBSvpT",
  "key16": "28uQM21Zzr2GdBPHdaz3kQ2to6YBnk3RAAEQTkeVx7R8TSmUZKp9Udy8nPerpjiYc6vxUgZ9wD4wszorEWYYLk9D",
  "key17": "2eNXwXoopQE78hdJf8Wv7mLS9reggh67sY43JMT35iJKXjzXLcRa6ZxnrkcaRffDQdoHXJbpDKJBbFEKVT1NzRrr",
  "key18": "5GJ2xCwz33xxwyUyaYsXGtdFVgafKbnQD4qoA7Yj8m3bhRcaLqMhLujdxKubjXPQY3EUqvvwqCpxDmsiQBnVZuXS",
  "key19": "5zQLFRThaE8vjWSYEXXfE81CxuR2NYmUvq1ZTbSv54Ays2Ndu6C4X7ZSj6S13ZaJtqX2wpXLBxB4Neu6vx1ge6ju",
  "key20": "2jj1oLaLuFyCVX2QCSJVV6CU54wMkusb3ASLUsNyQU1Sw5zN9gneXdEMRGDZ2ofuSLmBSfkdP7DAApbnVKjDT94f",
  "key21": "2Asw4Sd6pdHFzJuH7SGVfqpuxWQYLYHe8L8aSH4RNrgmRGhqdd7WLKqsJsfcGJ9q18EDYjP28yvntHnnGKFuJ1r2",
  "key22": "21aq4GpeTwBhiYvCmrvJPkcq9JPaPLu7kPRzETVxjgiDxcqrxhAPzJ5GkbmnPiBZyyrjdwQb83TxRknJgCMuhAUA",
  "key23": "5KVHTN7Vzw1BzLBDXcQuMZP95py5RBnhsjAbPrdvyRJgcQKLz2XogXtKWS9HpuJzbcmuBikjAgSZNjsgEy4MyLBy",
  "key24": "4VQrXJfvsU5QcxPLkCdoACrovfdbpCfF39MGxgBSrTzhCh5hpMJgCQvrRdynnbKTsxvDX2Jw7B8Ftg57dw61wLVW",
  "key25": "39fjKqr7M3ofzihftRMqMEAGkXhpe9gmRXgwbzY1cUfDshijpksaQzYT7UQjpqfVZn3xUnCGFmvC2u2DDTKHH42r"
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
