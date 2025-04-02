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
    "21g97NSXrikHNZpKTRzUqhc54NMs4H7hUqpUkXvawHbhg7AjAnNgWMwJ4WbVX4q5T25xptRGUpJrWgEv3oNWgchK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avnGkicKko2HrtRG9ygSiZvwCRUG3sjHaWphNe8wywE6SjsrpwLA2cbeyQHwFoqBDUTU17QSfJMtAQoP4NP4Hy8",
  "key1": "5zptwjXxFsEYTN27MGFbaN83UcP246P5CJ6QD5YdtDs3nGRvbrgbBLL219jQMNXKe5d94uWHReYhET5w299sUN3z",
  "key2": "ZkuyRNNtqe3ncBf6aWZZeUjnNwrezREVeu32yA6q6B7Zncdhukhfne9wpW1cPe7tu1V29AdftZprcoKXzyQR41D",
  "key3": "63NungV8B5QBuDhzh6D8UiJK59AoTSJUtvctM2sPSk4hwM2187ajUAHvJ2swYHwHetkenMYGRcFUg94JGZS8aPgA",
  "key4": "WYcgN6pxsqvuHjBAK3XUMbAzGt7jmyX6C6Tye8WaA2ahrU1shA5A2GTqQSQyBKYLMxXdb43gBajBCsvCgFetN1o",
  "key5": "3EDDC5ZVLrXSJy8smqU7nMzLU8m54ASvGFN3nQJymfARWPpoVW3SH6qHSZdzVbqDgqGX3rDijU2qv8nZr6Soig88",
  "key6": "SNhLdxbJFAsDbNercbcX6uj2qkUq2xu6wGtEnCzzEGdhsUddcqJ4GgHUDBecej5eDT5cwYSG5JijiCsLYtFikEY",
  "key7": "3rsZxv1qyFtEk1D5dgizf1zt2FSXmboX5gU8JH5UDmZi9fQZnXNCde3R73gbyNXpwNMPEbTsmgfgQdHBe88AD5qc",
  "key8": "Aq6aDTzeXN7bxv3XvMLwiSWM7Y45p3W62yoTs7kvZxDowS75yYJY3hPLQ8KPpbe8NSHZhBCWXaEHh8vnZLKyAkW",
  "key9": "5MK8mdG3zEXHXKmnzBUnxd1315uffFyXxReZuimxDi2ZxQJQRUPkLQZphTgBTBThKBsRzqMqtASmKXskV8u1vHq6",
  "key10": "4RhEo4K7rM4uYiTAqTypYU29K2UBBY3guGX2eBAks8CiqrrTPUX8j1UKjRAUMF69YHxUYtBW6XL5TYyLXW4cv525",
  "key11": "4vgnPwAZQNY67Jy2tQjNBRogakMroBrNsAqDVRVhycAr8Wf9dNKMgJZ6HtiDpvh9GBn9QFgQ37pwSFX4gviQwM91",
  "key12": "3f7m369WczoUZcHtxyfgXKtRzFyACpJvrSbeC9WNCi8VQactdnsHcFtVYz4v6gUEPgmrTFFYnG5p7hCZ4J4VjiCY",
  "key13": "5exgd7nVE3AePfVneUC79FHWwCPMtpWrASdcyiWwgTKE3tq6c4KVKqjnAdwa3w44vy93mkbqinUmwqTxCFCsmbpH",
  "key14": "9JJ56d2mL7VLrC1h5PmM53hULr9wP7i44eCK6gqHb8cZUQRFsYdyuBc1t5eFsDzehxvsJWSCeVKchQ2LLu2EJ7C",
  "key15": "3DcrfNCU41kVhCPof9DTLiu3MNsRQtFi8DaXtBUkYfusXFjLVKmy9PF6bBZ4fyMt2Fg58kvYr4UG5uBgGMp1egRt",
  "key16": "3ZPFSW6gv77AgBayvKT7AkDT5BdhBYiWX9cYi4MHkmxjCaMr3eoaFxmYDYVdXs3t8iiKJ64DU24VtAgnCpr4jgB1",
  "key17": "UknsYxuPNMYgkqcKGotJECy9BesCvX2S6i7n95CD4c6UyFSCmT6WwSkgASL8TdtZx6u2JykNCtDHa1WTKDJh2e8",
  "key18": "3PR17b2gUHJM3QjjhzzbidU4cAK8xjkER2a2Cf58MxKkL2e9nCU7mnFa1xiG9uAtugSScU75T24kGRcmG6YZkC1d",
  "key19": "5NvvkevDAX8AAhpRNNpaZYCaEqM6EyCJ1uLJXZk4smumUy1WAMZZxTwfmSEyRMdEywF6Eq8xcZyvaGwLj5HYzCv7",
  "key20": "3W3vdGtSdmaUXzZALmy5G1hBS79wgRHqJvtW3QRnQqrhb9uCePhVRorxg9MsDjUSM5XRrXSPwPHb14V4pPQF1pbz",
  "key21": "38maXx118MrRCNc2ZzCAe3RdUJ1n92hnSyaxZYLAYkBvtgWMaxasCH1h6QMKx5KVPoRcAbiKERyu3nnsKmGaJbzP",
  "key22": "3Qwnq45iPNez588FfW5m8GVVX5BpAy2paaGeD77ctUfoWeHiRDm4d86QmzChWX7ei46Ca4DzdByaZkZwiap5n9aC",
  "key23": "DuJvBsWnE8oHuVoPDkXntZQMAJZW5wSEwiZbhAgD9sdCQ61FnuWY5fbyJ7z9LXeA8mdwVGGFcdxBWPSZ8y3kgjA",
  "key24": "4fbtJXuaXznCsgTEDNHPuR6mP4LgAeEG7UXp7M4pWfErMKnyC56toje46jnbLFVidMBvvLU4DMxDp7Wjto4qyBhn",
  "key25": "2JV836JXkuVgSRe5Xboa5yfSMnZgmA5AcmTeKMcPq1mZf9XxrRHbMaSHSjLNJpHffFPo6ayZne5TGQbN6nR3bSgn",
  "key26": "3b75Jr1sA4R9CqMbiBeQdASENjH1kWRwufYYRGTFQ9yjgjNyP7MLXGmUdXXfV8ZJ5VkL5cPYifNtaqEjo35minRv",
  "key27": "42KWyHF5QogfiVvsEARuCND6FgRj716aaEJvBSd1ppU9xqk6BBGAJwPGeC7xAQaux6pMofdR3prvCJA9K6B2d8cn",
  "key28": "43bzsCkvvnsDPLE7gJnuttBTB5U5G66h9ou48BAzKx1DMUgEGn8mC6wA5nyktBv4Ch135zCRv9uhRyDjnKV9AYZL",
  "key29": "21h1VWK4uJdnUwMjgCbtF2wVZt7LkLBk7hZM12h2VXrUHVwi8bbT9e5yd46fNz2epRtZY3zF2tvD6tTYo7L1H7Yn",
  "key30": "fELWsWop4uUthPEeqiEbmkxrRsz7mJjsRiDksL4L1y6BbqdNS4vKLhjewMxr2ufrBLtD36Fi8iVGojPmxYgnBnP",
  "key31": "4qZvESu1dVPcUi3udKv36mXhKbb8mr48ERQrfauz5ssastCbFC6CK85Z3DQTCHXqYxi92NxBzN2eK61MfaNHPesS",
  "key32": "4aKamW6qRi9W48qRDNaeSvdHxbAA58xCMX6XRbnmbN9TXK9wjr4LePQ5uvZdb1Ri1U4bYnXep2oUzfhu8DDeKCUn",
  "key33": "57kNESgdoHDg9icdnci4P549ixB8yYGoTatBZ8tgfMu4sxYYHof3tj25TY1jfkcUdbZjHvPqyQ7HRYVsgTEi91gk",
  "key34": "5KZqxqiVFNozbiJgiG9mpzJaxSQmDei6rgio9wTZmY2vzHais4UUF35fPFpucZujoitFdu6bF5vAUybszN1nGw7H",
  "key35": "uFANDv615BiF8puBZK2HVM242RBFTLmxcjtZhwKRugGwYyYXESUCGJpgzaUzhWatrynLPsLLUtYmUc8dEqvGyqU",
  "key36": "iRv4tfNKCNhLore2CEShHoyTBAyPqGbXs83QwAbedbUaBMMwzJWbWf6mHbNEA3pjLMk6xKuTYuke3Bh6WBkCcCm",
  "key37": "2KGqhjQmE3gzYXtpj38Zx7po73bt1eogQuYJhAXH74wDqUJ4eCzw5kJj9K64Kh7RHMBT8k3hTRMU1y1VtdeeSLeg",
  "key38": "2DPxzQYsFdVuTJEm2MTRPLCNiaCR1BK9YLcSa8YoRvKCUZN2ZE7UEvi4AeLKwfo5Xu4JxiHud51ABx79wmSyNFE",
  "key39": "5NvH3NRau2Mwr24Ttx1ANQoixc8n464JxNYGLLJGuborxGoZ7CRZ5Dt35yxJTijzFTtajjm2nE3jNsfeKxN2Ti9e",
  "key40": "AXLFqLyPBznRCMkeaG6oFh6FMn5qyaDUvUHSMHXfH5Jn4hEpwMULTAiriLJhWevVW9GP17SdFcZGq9u62LVfTeL",
  "key41": "42x6XQgQu5npCMeec9w8MAQ3hhQtud7KrZZxFDuWLaqgP1fqP4xLMwzbF8JPrUbwm1qDv2g9NBwLTdMPCLUKT2Ea",
  "key42": "3D2whYBK5i14BWZVR7qhCTFmYhwHbn4ZnbyDZ7d2URT3fqnSzK8fv6dvRod9RVKULysSjh9J9m7HivSMTz8ZQyUF",
  "key43": "2vXbHPxLsoxesaz1D7ZhoUDQwTAhotL2ezXGwuZt3ocmzms4gHBiHL2s8LyeJ1wixs9EgRnxNYffe3TkHctnse2c",
  "key44": "xgYerZxEL1zEDiVcP9ZFN8vdfEQuz7ve44v7rZ3yzy4UhSUWFepifw1Wvyx29j31UJANfZuyWWNH3ZXCm4cknV7",
  "key45": "5aovCaD6Pj57eAWaWkr9kXHqfXuMEgLQyqb3n62Y4Xsc6V7TExWt7RUmwrkVophpujiqp12Fif8EpnzpkJW7FsxJ",
  "key46": "3WmnCjvSy6gSFcwVRpBPyppXxJP9MBxh45SPEuusCRdT3JA44rm9MQiCpMLhuff1FD9yDeGYQxR3mnAXfN55x4Uu",
  "key47": "41H14HJwzdEVnoVYno2fpRcvYS8Pzr5qNkAN9tU6pHWosWZXAcWfm3MDwBXSk23VmRMUumVRmZ7hQznDrKcq46HR",
  "key48": "8y21L1v55C3rEzezNqm6hTqGosAvb9KnNwQQYZchKEuxGxktLBRgp9gtyhduEW17PqhbQuTU2xUziZS39bsEknK",
  "key49": "5oNd28Uh87sfnF8CeqRWnZdj9EDbiDcUWHcEHLt3Ly2PG3TAt46CMgLpQMfyKFELQEtqyV9mSQJdJqvhcMHZCDgq"
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
