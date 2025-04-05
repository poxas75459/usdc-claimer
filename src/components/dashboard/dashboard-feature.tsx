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
    "25vzcqfu7vFZsn7pLny9xvUu6DCDwjx3L3uSeZGtV4GZgenCbaEZTdi4BFgpaSSGpKcfoG4VXoBz9GgYH5arhx6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8sCNzdJcsmYkuz6MYckj8YCErTVJC8CoADmaN31H5S1EXAXUn4JgGnTFuG5AqbG9fyPwBTnjfuKJfzkv2mWX7A",
  "key1": "4rx2zhvdcorCQCqVANqaH7j9Q7WWfDeJBccuWoHXFk2mNqTtxH7CaXArgNZ9XGXTmHc7oFQ6NAtFzbHU3FdFKwJu",
  "key2": "gXhnzNwFY9pAyTRtDvbS1gr4jK5E61shWHhDxdphsCWZmgfwtgTYAVykakS8g2jPLPnHtmJoXj7U9Q3sYXrvrCQ",
  "key3": "4J6cs9TUWhvpeKPJw2UPKUBodg3K3XfxKMJK1UZqtYknLKJJHtHEQXDgBsrEqDLYgfd3pZSHz7jA3a2t1Yuwe4Kr",
  "key4": "4HvrhdqbxYptTEQR2wLewxBradKdQyaYGpA2n2tcGWyc45RykSDsgNVDHeCg5VHLkwiQ6CyVm9sA9b3kmC7qskoR",
  "key5": "3Azuk4AvL55Tn2WPPgz1w1wLmXs623L3x7hy2M1Bp7RCZe4vY5ALbQTiT6hXET1txvVa9rH9f9Rr9zBaBf2eYXB4",
  "key6": "2QpSGtPoCjf9wu19KsdX2jsTw2NQmT5S1vbM3pLd8BeZZV2DoX51JyukKzUqWELGpjBnGibwX4GmLbNgC6qmwZEK",
  "key7": "2JJg54kY1bkvKuXTpy4B2vYcDxD9L46vhRmABZTnpK3czEHvykHvL4W8nyD6hyHbKcy5g1e1GQSfEzXEbnTLkkcu",
  "key8": "6241hhsxhzrqEkwfeo9WS4mAp5oosp3xnNA5uecwmuhM54TH7gJAmVnuk97xknSBDBb3MzPjDcLgFf7be3tdBRLS",
  "key9": "2fcKB8UieK78BhA7NeagjLjYibEX2whvigvQiWVPLtT6gdtvxiAuGhEjRBbBcf6ZUGkrCXQxts4V1oUdqLAXiV1J",
  "key10": "4z2ub5Regfg2j2U8w1bb4nCveza4eQm2HYi2b8NAWskXj5dRGhnQcwX4phDRbWdcHgEnMyLeWVSshLmnbPzy53nj",
  "key11": "4vTEbZWKbUWLDWxpzA7WcN3bX8HQjg8wzMyy5oNofdZ11G87788ztZLQeoN5FkjH6YRBBAPKMjaBbPBLJDaQPoym",
  "key12": "2NDazWsoRYec2Q4r1F3bGC5UDhf3rDiccQ1ae2ntkNNKJL4L1pVbQHduDUpNNa6cX4ozpCHEb9rubcw2rBkq8S4j",
  "key13": "3LBUqxMeWmrzj2fRsGv142e6RVyjsVoNAAWgrAb7L4YFsJkWoum58yq4Uc2MViPpeyCxokJTMwfv6GtWmYWi1bhg",
  "key14": "5K6dW7RdBpv2c2b3b4zigfwqg7TLdyLbHfvMXgwTFp4gKvYJLDRA9NeTrAA6EfVaMeryPs6dnHojM2DDwwTBLVnQ",
  "key15": "59uqRxyB8K9KYd5fpDuAsV6A2k978CqZWaFyKXagzy9b3XpiNEBeRvdKb8d1EpWeDnBpMFKXnudE1sy9Bat4C7N7",
  "key16": "3oEK1oCTCaGGsk3xsfUTYCMn1rfijkHHDEc8hgAnPmHFz549x8KH2bttAtgrn2F1bqLPq2uTJhekrXTeDMbo8MFg",
  "key17": "2XsuTtCpu4iWRxjZ6iZKG2ag2sDN3A2a6CPexGKvYNLWMWjW2N6y5igrx2JPYPZJLgvCqtb21pCoDZpbRVUwN73h",
  "key18": "3sYCq7Cmadqsfy4CPaUWEPq5ga4LPpaiJRGvKnMAzssZP77NxtacCC2jJutHiCG7nixXoymbfF4uQ6n8f6hNrhcV",
  "key19": "3RTa5eyN35UNGc8vkmNpUioFwVGpkvdYaDviLV9sAbpsUMD4swQYxRQpbaxsB98oUY4erYL1EChQXe6VQogE2Sca",
  "key20": "5z43mkWo3ZWUUY2BQkGd7HtNL2Zw48RLZTBLXTR8GVUi6o9EU727DyL9T7QF1Mi2pJVJvxPa572ZZcSL41ACsT34",
  "key21": "cgLm4ZgSpV5w9Cknk2HinJm4Gkk3RLpDHzvf9TCpi74zcGNUdpprUQc87njnQwzgxuw5zWi1X3XJ5tfa5bsUVbH",
  "key22": "buHfcsUs4kqb66dqgcHEk4JGt8iWFrjg7RkPcBnWHGozqdTciSqvbgWXZFqjaaksLmoSbnk1V8YhNURukA8Br5Q",
  "key23": "w2NUkjTWfaNVjb89Ra2eutgrpdiQ6o5hs5UK7HnDi9co7aaMAChU53sAUXYK4BJXXBeZQWWJoaQzHifUhi3YPcx",
  "key24": "ZLpCGctsRS34UPPa1r3cguszMAVzud1dMKkgWDThfTqpiYWT1y68vqyDGXsbHvWDstgGK2BuphgcAcyDg5H7doT",
  "key25": "3TsPN2R8gq6gfcQ33Umfyfn2s9R1tjseyms4D4ouTM6x64v8PEUeLJQ9nzp6PR7tNDBrSk2bSckgQkz31ZcRt8vK",
  "key26": "5Juwvk4XKsxV1QYzsY6YcbfXg8RhZswxmC6jtZE7LvUbMeGcKyhf6nP9k9xiRs7yfczab4HMTmz4NQpTVfwxN6Uy",
  "key27": "31CCnbEqM3Wbyhw9Uc4wqGTPUxyBvX8Yc1ziWoQGm2xHN2WwAnqxkuqLoFewVFd78NLAVCYocd71X4F6qEp3YFnk",
  "key28": "4My8nfb3wAe7zGQSN2xQu8MX2RDaTk99g3yEw8xY24fTozVYzUQoGuU7yRd5nHiAQgK6FM76T1r6BLTgxnSXYrjr",
  "key29": "2JHVQFnv899N6gcYTXUZKokwJhSjDLWwugWZqUusJWAq6DBuiX7ZA5NKFanP8rGK9AictoKtSCjHU6CVKnMQA7wu",
  "key30": "32UfB4gZFmJBs2a8GHVsHwgrj1MgwUYsVPSs4nF4yPi5NZXtyuiK6yTp6qhX6drMgKRFciu1ChLepfbcH8BYi4qr",
  "key31": "2TntLFGFCUZ63Gti6K8K2UHkPh4bnXYzh6jqvFkxPEgdUiGAtGKxZL5aDisP2aF2bAGx5dxfztMFr3FXGsHgvGi9",
  "key32": "61pGW7epbMuJvBuvEbxdYxR4UumKHqrGnSqTc4A3nhgzquTEx2yLNPVd4AGh9DB2sDKUr9rRaj97SPJ9s5b3dFay",
  "key33": "422v6iuoHWKz1cthBUoxWKSpPokahVhYE9U82ysm7D3X24eYtgjHtb1z96SZ7hpzzrvJXW7vyt1p3Q4AE4S9bnF1",
  "key34": "5kFNJcjNqGKz9zav7MH15F7NqN33vvzBpNxQMss3AkXyu1dfJexsPrPkoAxGnpNasHkTWJ9UJ2FQdoZ1yD1xQr8U",
  "key35": "4aRNCgm6KWHN9CC48jG7dCG7kXNzCHvt9FoLMMiuDYFVcvM4HHjZDZg9XBcceSNYCh1y1wzKoz37U3fasxFm5Qbg",
  "key36": "47L3sW1VjymoGd2DB5GkyCEaKGSZDoEwTazHAx58odbCezZZwNukzAquRQddpu6namNoonXX4Gk9oMfZUbPrhgRd",
  "key37": "4wqcmiDYPqtrSUB2dmPX4yMJ9yD2etQR7WJ8YHfnRqe4oV5rFaca7oxCK2WTVQwn1Lu1cjQnKbNBT9rpk9eEZA7A"
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
