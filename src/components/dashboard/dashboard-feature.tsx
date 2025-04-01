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
    "2ViVWguELmgqfXRepVXXF4La7LYHa2nPKUfbkchnD4JaZNJtvZjoYh1ea6JvNvyBDupmTucDiV1Zm1ty992BzYwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TowptmFkw1CE2vjMQfeyZvyP66TyDaRBpYfoZGSJoy7MPUKquYJWFXUGTAUo44JCWzJQryUn3YSrDgLXHhUEx4W",
  "key1": "5cV5kVQfJzDpp1rGz4U467f9ohpq6hM9ga67dFw4owRQEMjR6XTJ44YCB85WQuJ1Qq6Wh6a7KmuH3xXRiCL5maTq",
  "key2": "4bfw8Zd3gZ5ck6SRCDmgLwkC2tRkpDHJxcEjHHiZYtGJvTb9oCNvTLsPKeCVPXi9kzydj3rPPXEq12oZyPHr5fDj",
  "key3": "2rYVLRrqNFX3WZBWe2o98bpbfWeuCqEL89Uu9yVDMu4p45ox8A1HX3v7xxR5A2CzfzaSC9YD6WwXLm4Kugf1v3Eo",
  "key4": "5GmACRofBdJnXxD4TVyiRgKGE4aTnnq1YM1n3xPXqmQHELrmDR2wqUd19Py1F6DkuvftU7hnRbjZaF9hpuB4G7dL",
  "key5": "5hcDgVDUdiK4wxFsGYe3htUKr1DaZxB5DCGf5jpHVfBxotVtpsYUKQP6Sx9zTsvJRyvUj6dMCizCpDnd8YE74acB",
  "key6": "3vTMvfTp4D9NEJLinBBQRdcBdq6dyxgXew3DG1qfQUWMnqpjJHXkAvckDYN8HmXXVBvMQMjpQbusC7kvA2fPXE7y",
  "key7": "4YHdBC9CWoyfocZ49Apu5qZyayabVHojRBb9PxLD1wQStbbCxxBDndmbRxfBS8H2fL1AaakmBHgBpxwpiruJCeq8",
  "key8": "4erYi41XaDGKs21a3tY4JXwM22yB4TUdrP9agxLV3rCbkoY5CRDPwA7SWDpw3EHmLQ1kTV4kaT4kk58enzNzgTT1",
  "key9": "2h2xveiiGpkC6EpmVcgoStGCDmvzH4ukbbXRb8p1d5MgjJoUnF9GevA2osCSXUAMCBVYXRMLFsHwDEZLKmmvKMSG",
  "key10": "48fG67AvoCCqqzLnD2WCUsgjKknGZbsamDiQobcoEMeB7oUMZyDApxyPeqqynGS2SxDyrKM4UTumygQTL4pGamJC",
  "key11": "MGeshznkoqwTcm9xkasMxAdKGxkCus22Hr8sFCDabeyaonYusogfdWnT67qcUdxLJfgjWYYcK44xdHCXaLenv8o",
  "key12": "DvLpZjdFfvGJxik5hJ1Rj5hibghcpbRS1uWPyAMFBqTgU68QgBidtPX4FfYfMJkxJAyU4Fdpf2QPG88z9jdjQqb",
  "key13": "396gNse1K52uYR49T1ZetGc15nmBoLkjvYyoAD9yLoKfcrdbSwnmf238edCj3NEVMacAsLWejpB6t17KeNWUe6jA",
  "key14": "wpCP2mz4uNaAoY2az3Q8zZcatS2b9fcj6WZycHKuBneGuoHpArVeZNcJMzAJo9Z16XqPv1Zcp43qhe2EW6LBtE9",
  "key15": "2SiF8AzNx8GjLpi84PV9TCJ8c75KfhQAZ38qdWdypwi78TtTtpntWgHREuzySkWbtXXphgCDzetf1CBFVaV2aup8",
  "key16": "3p5dxruTYHufxUdwq8aW4PcW15LDQ8WrPPV44Re78EsprQATLLASK8Z5E1RXg5iJS5LkXa4msTFYLQiGaTxrUUWF",
  "key17": "vGQpLiPfmGTApENgWjWABhYVUJ4R2FPF4ZvLqkx3w4JkWsWbHpkyCNoxEGXucjSLtBYxz2yRKmrsTZGSnhiHRxx",
  "key18": "61GhNyXiveA6JGytHsB3nK8J3kuwRGv9BHomMWCnasi3c4XuLk9iDMCSzj6fu6kma68FHiNzEfGVRokYDjR2Qg1Y",
  "key19": "3Ba8QvQLZqEN2jGkZjAEAZC9rdeTGQrrpuzvVZqB2ABEBpSeEhTa4u2kE5Yj8pCoNeve6BdqpsBk3m4f9EJYxnEs",
  "key20": "2bqEJz2zaLgeNnP2eFGvwcW8WLRMwVeg9dPZwSx6qq2p8vdM1T95cz6DED4HfzkdiMVy6jTQgXFVhAM1sFUkUSYo",
  "key21": "5kuQWtGpnFGwikCbcgyTZbdVk2np3fAzPeXxSTDEqnSqaG18UPxLxQAY9yksRZpezDYZsajFWtuGrXtqdpeVBA72",
  "key22": "3mzHj3Ts6HAp5TmCPHM3HxDWcT3tvjZECWUZonHUAmVRsPbxkmq5whF3VWBvbi6HArWiJYygkhZJ4axviLwJvvtD",
  "key23": "3wnBUMtrqJAmTM8PxZXHnM4G1G2Ysv8TYmWEMLyzhygTe16GSJGU6SqH92VbKNMSRK7rMeVj13y8kYqBDTtmdsoX",
  "key24": "2Dyt4GDTVWE4xR4nMrUL7GibGfsPwDafAUc13MpDW51i9BUyXdBiWPUx7UGEAgcrggFYXZbKXrbaoQixBRZkHxL9",
  "key25": "4JiAz2JiAaEHLAqrsih6VpGzu29ZXhpVio1WRssvvCNUtLYayvdYmVaZr4yEVZFvYjnLVjru79ybQF9mTkGo1ch",
  "key26": "258XZQ2DhPdBgV6RZvo6rXsnmqHqRvDpqovWFt4xsBZjthQ1zvu849ZSQqrY8wcCwF2divahKf3yiFSmAiRV3xLr",
  "key27": "4EYdGi9wYa42FMBsAvZmmr65RX4D1CztQw174cwFEDfsuxutud1mkG7r3XCDnn1EHmm7WpB3xsMbgL696f12ps9U",
  "key28": "3V6eJpsrdyv4ncnQKkcjwjtXMZGf9bPnxbSxmupDPYRLBPqYvSukZehACHCJuHVQhqKyjp69nsB24NSnGzf9aCDX",
  "key29": "2Wq9v74eH21rvzi3WsNwnS2Gb9YRuCokeeE31AvSpfMtWm9n5YCqBTsgXZEVTZ7JEwW3diGzGKckUbpVDdjifK8Y",
  "key30": "3LCZ5yXWfWfGJEN5nNop4aKN153kJYuhGcB82ZcDkYHrb7NsuJ7bCktUBTdTW3N8iJvK1PgRtbvah1TDAd9XFRxy",
  "key31": "tHnqahenxa2iyZtFCsajU2xNZMmSAJJghevQ6cbR3DVVhx826XBNuvQ3VziS3Yiof7iwUruJhSom6E81TcxvsUY"
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
