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
    "3dqgrvWgc9rPjRdv79z4akzwVViZ439Zws9LF8TMjMuFYCTA1LLMMRP9J1tH2Q6sEytoqx5Zu5tacZvbPR6STKvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PY1kTRMGSeisVyzwSjRFHW89AtSj1YAgLLq4r8qNXLpDUAaAmXQW1Nzsj5nESmxkT2Esmdf1P4PN8LGkqaPtMQ7",
  "key1": "4EotvC2LuxdRZYgBs9VbAShcB1VpkSDKdVoxAf9kemuDuf5KQupaHSHV9aXWAwAoPobTCxWNFKw1TWtvTpHtxF3",
  "key2": "deHyzdC4evJ2ppYvPyJdXvJtrU4EbBdhkSLQpNQtRTBHo53t1LW158pGRK5oknuFxHYjU5nZsok8Uyr8ymNPjyy",
  "key3": "2ufxYJDn8zVfKxRRUMX1CM7TrjQqMxvdVAG8HLBozyr7no7pcLT6ZMp9L8otR2FnFWkJQKDix1Uvi3pDPCSZoTSN",
  "key4": "jhCLsr41BiXZMHzxkF2SpgXnNoZj5GaJDthUJ8777DxYxziL9bG5dbCW2L9H5jXeqGxSRKcjnwUdXUu4wDwuA4Q",
  "key5": "35fuf7gj8Jdh6ReBs7aLVtvfYBoJLoFiHSYB6uahBmyDKfAUDkdcPiawDDtWnaaFCx4jDyyYoKhyb2379kfzAJ1k",
  "key6": "5oLarYQ3TvvWfpPrqmaLm7G7zurxJujEZ4MbvgMQQmJ9gMKH2THRbAQtiN2wnMC5LxXr6rXzjgLUDZTCHw46arii",
  "key7": "GjKRJ1w7eGPFUN9c7imAE76aZL18RSFN6XL9fHRHzVshPd9p1qhTBREjwfue2tLZBeWd8RnHUtdUtNb2Euqefs2",
  "key8": "2yyCJb27s16SjPaykQAfnHGVf1DjguA2eQDxxZLRT4H6bEenX6TYKt6Z32Dw95TcpLP5JRSt3vDMnMGpdDQ8ZJWb",
  "key9": "4wfwbAq95CmkSgYAqtxr1oqAyq3TycimsyyRhwj2hFGHsY6BTmjgurTKi977NXwBLfg9QDxAB7LoFzXixZBXcBZF",
  "key10": "4YYUFrNo5CHqAMMZt6s14Rd2r4fGEjhPzrKzdDyhH5ZSxUjVHkZkKhy3jtdbEcExfiV9njM6tZqUU7zo6C1kahjh",
  "key11": "4Bw444G9u9eytqkKrgBfyXrabBuh79afKzEgzdJnGtfwG4sPmXoEavi1E32SE4uLi8fxzTXNQAueXVb8MGmjQuwz",
  "key12": "4D4H9MDuHpk21e8NNNNsHSDgd55CqQguktJNXFM3ksYTcQV5RMV3kH7NjTd2pC1EcsGw6Rd1Z3KL7twZvnke5SQR",
  "key13": "4Sw3BnNYkxC8BQGLUiMggH9SK38QsaXpBivY8oMdvYb1vz4ouhVfLGn8Z2hirgEPqRSrgmMmccomX6XJqYJ5fJyq",
  "key14": "631X4fpScuUgvCx7QhpkqEGmqQeSMngEwMiW7XRj8vZF9SSd4T8cKZVf552FFJT7WAJFsMQF5j53E6tu6aVr7sVt",
  "key15": "2A6vhVmYWFVuDudtY3gYEJze66ZyDhatxbJP66xfzNC3ZJdTdPZwtrJUTdFdjrna7D8NGWVphrYBB6rT9LYttLoa",
  "key16": "2en1i2d2x1PbzXhkjW8dUUvCQ4A6WZpQvgVeq63REh87y74k4wh91vCeLTipDPgZrGA7dS2cNA792dvVwtwwLGDY",
  "key17": "xW8R8jdNzZTKzvy6wYmxZn2wcYKs6LcHUCBsHWQwXPFc7qvbJufba8p3C9NcA1gsceJa7Cz9rftcfVdjNnMaHR5",
  "key18": "3HYHvsrwiHuRo99HchcvtRaR7BBTKkUH6XJkwZMygKPmfiWvsvtY3h8syDHtm6tKgha2kAcK7Cd9bwPK1vJdciS8",
  "key19": "28REyo3Ep1i9G9gBdH92i1aDTEkBgm5GMt89Xz3xiSZx9aoAAoZdrARNfK3oP6KjQZkU45zcotWrFZAMYNrA855V",
  "key20": "4ZpsD5CuuirAuJKKEswgQKs74X9oPPLFzdDDxdznYHBVzDtC2sAWyo8MZPpKmXbPcZFfJsegAs9Vk48JPM2Q4PEL",
  "key21": "PsGHuv69eP1jwXs88LAxYNRiRxQpFEu9khJrDrbS7DZuAVrqybjChsPHSw2iKuV5R9cYqkiJ6B13h5LB2JBvNw4",
  "key22": "5obp3BJbABT9oTXeGe3zfTng5r9mLYzuLhAXJv6rRKV3XtFTVSDvXxvfjBboD4jN5Z8oYD1ScS9ektAaSGkMUw9D",
  "key23": "5YUP2KaPZdnF1ny8NsevttgQVkmWYGcfQuw5rkahi8eQcUsoLsdvHxXiRmECmrhUzKR7ur2eCKMPGKM2JnBuRpBq",
  "key24": "482wTNJFNTnDAtWXH411W7CRwwc8rjU9eyhRftmhTpR4FETQSsfcHUEQRrTBdpPn3YN9kV93UKXgTbRHbkXQESmU",
  "key25": "3yZNFHpHCdDKLgyQirBmpVGnSVpqBx1Q9bRASMr5bBY1wqhXERKCWRdoDbo9bLqM3B1Fs7fbYoNkvHY7n9cwwc4e",
  "key26": "27TCFBrKMnPSgmdxv4UAcxPmgzPqumstY4Wr7TvAq2FkQJz49REok7DwSqw4GjPQPgt3xLZaGTs6Hemntz11WD7H"
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
