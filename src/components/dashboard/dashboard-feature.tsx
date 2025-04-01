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
    "2U4FobpPwZQetycGRW7N6cFV9CFrQZ6zihzX4Ps7J4FUm8YscWeYAWDfkaeYz5DeXevQ552mQJVww34QnedDdwvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToWg3dYTmsGbE9xPLNJwhNWtaz6Z4Js1ugxXugWy8xsR7qrKttNq3NDQi6QUrrY9Q9FZ1d7z7Jht2R5ytChyRjs",
  "key1": "v4dqux1q8uRsVeMieCQoJgmP7DtqcMMFC6Fd74RB3EvRimFpfHhtL1wTZs3wpbKUXNnRjw4DcBr3KAhpNPzQn1o",
  "key2": "62N8Wfd9bw9cXerx3N92YkBLFMAuEjBj519r99TWRcK8NPHo8mkUinqqQvLqRg7ztaVhxYibXRGP9ztDPFi6QDx9",
  "key3": "26gLFNbxkHpKi4FERyxdJSijjuRkn8j8DTPQSbe3gUjVmMwBgbTcgKZLdRzUd1XkWV4Ff1yERGAsPsJ6wRoe1Xus",
  "key4": "E7N324VPN76DdjJf93WkDt77Pa7NAFqeB4ka5NkrDqK5K8vVUGbs3KUdXke8ZjQG4VBoNDJ2fkqMpb3zQkKFcUH",
  "key5": "2k1M3BPYgHpxHpubwNZWamyafT1tjv9vudzTHvGxEJtfJ4Wno5BBLCiEiyDZvsrJtMMzdZ7Whk8W5Ef8FGVvWCAi",
  "key6": "55cTmfSMPufv1pXnKVQ7EJy4Th1AoXjfg9LXVAih1MYSujDMR7ALLvQxbBBM4xKVq7fc8Rcbz5eCbeMZT4NDbzL8",
  "key7": "3jqbgHWeJTqPUVBHeABeSmzqfG3DnaVXFuiAcn6mMtWphXWX6WX1ZpDj8yCuuoHdGLu37e3DfxP2VvXqGakvXcgg",
  "key8": "56tW86bSW5fr7XktJpy1LM3SS8qFBj1PzGzar6De3GFF2XnNPG9zMPnytuS1ST1mZGWUmH9J5HJUFGxZQgY4YGAJ",
  "key9": "5PFHPPjT9vR5m8AsLc9UosEq1ypacc5DNkWXxSgENDEUXVWsHvZAV7yMwF4CesVC1wwH8Uv5Gj1odGZtxrrXTaqE",
  "key10": "3GmWerjFiMkEUQrVSH5VKKK62aCcsxkppsudWWoMkWG1iDckxzPyQsFUYDe13b6T2jbcRKi3oSwgAvkm6mx8TVXd",
  "key11": "4CEh5vFqTcNsWLuD6Ga67UNAhDQrgMGAAnCpMyJpxqo9Pi7a4qRTTu8Nz7z56bybTXsCP7bmPDcr8QyrXt7PdWng",
  "key12": "5dQt2qUwSchAALrh1Eq8rdY5EqLBYgLPWV6w8fg4VLT91PCNKujwmPiHjxv6oRcVe4F7KfWYdasTRcTaYzPxRx2B",
  "key13": "41E4Fbufe5NSvHFm6magmvEY5nTgNmPzCMhczSjeHyK2NrEG16YvxLWhv2X7Xgwab5wbUpY4WGMoSGgauxY6v2P8",
  "key14": "3Wm6X9nURZ7XEvitEN1KghjX9mRQ6L21YZYesMiEwofVHXmPT9HStM3h55T5sx3UaNXB3igpd1TmCHLz6WKkgZEv",
  "key15": "2Aat4uZQwGV4HjqbCtroQeRktmpt63j1cosEZgJtnD4AvyxNfMTdTP7nLQ8dzhYi4poD2yPb6m3pxXa9WQtu9GER",
  "key16": "WaQqvYB9CsLoSFkvhqeYCWLwkYdrEk7W8YUt728osfSdZg8HGCH8KJ7piruEhwR9SYUo1mBLYG58JM5ZGXfndWs",
  "key17": "5oyV3YBTwdqpiL42Fi8w8qnFabRw4Bj4DHrN1VqcbMQDyo7upz8FkeNuoarKwFdrnNT6ChKaBph2NUELMu8Ub17q",
  "key18": "59s22z4wdrxUqtHjUoNqmoX725fiVJNQkpzvP9WHJR7nQrvGdLkMk8xsHKeGAYhdB3p58c1YQxh416ajDM4nTA6H",
  "key19": "49aZjxuqousiSX4hA6KVLEN1AstqVkPTSYVNJ25qmKEGebnjfJRTFBZZDjx3cWeD4xGKwVH3XYcrpS2ai5e3mdS7",
  "key20": "5LQejPJQbyGsiQ8sVhFwAxKrhqnYdavm9d7y9Vb7bVod7XdVCNHjwWytYLFTKxuEmZ9mPgyYJeyQ4YDofv7JcgPM",
  "key21": "5E5W3CBxMia4Z1xe122RZSzsGSSD1KkqFTVw5ZWbEW1ExptS6wsorUakjiY4RFXuAhqx8v2xLxxM6inZsweFuC2J",
  "key22": "4sBmYjaPQUTMWPcHes9KEzbJmFQPkGtbmn6opkArp6JUfY5edFvSL7chMNP17kupz6v1FuxjjVH3NNwDb6bmcxco",
  "key23": "5pnumc3HqMm58Wkxpc7vLgCgeRcWYqqro9GaVarFrMRRNv1XB3P4Z7MX7S1igSu5HUbXMWGXqZ7Lkbzbmrbo1FMc",
  "key24": "3zBNuUW5zieYG2t6Vnn5aAMab8Keom5NsXso9qoAuJb3siMTwbALoKVjaDiwkL6dE4H1LD1VtQCrC79zgC37QyBW",
  "key25": "4xRtCNr5FeQ8VK4eu3ktY5XbKDVBEDbZY7y6y21zSmb54NoUADdUsW5qEn3avqHfVYWk42us4syoSkAsSLdke5Ud",
  "key26": "5Rtw1nKekbxZ95U6LnjPwuuqRxRcQiPYCRmQg4YYb9m3GeivFVCXjsW5fEWGAPywytGWK9bofkFeAgvB4Svmvi31",
  "key27": "5ufyBMa1Ky9X7H4zYZkZkdBcZzK4B8QykBLmxbwp7qNkUPtLBPoB5JLAmZQMJBM34A9mk4CYJfubL7XgGjAk7ogL",
  "key28": "5quP3FHQwwk8JG6Z9uZZQJU31dNAUBPy83pqo6znQPfBuPep3jk5op8skytbzRhMDJh128Sy93gYpKP3jytHSuLJ",
  "key29": "2bz7yR6WrszQwoWPZJXETvRmpzfiRjcpg7NgtMWSYAQHP6R38Bkip6gfVvY6x6tjt9HKhMwvRDjV179k6FsHaq7v",
  "key30": "2jLc48dmVwQy2f6S5r1h1HQ4g14ZvHuuBJnERDh25KTJ9KKmDoDWH7QUbqcFoyHHyfkSjXXQDJ7MrHBf4uAihTya",
  "key31": "35t5JAGTCZw9k3ABABPpthZLxykbSUKRr7WF6CqTvCnYvNyVmLLUMFcufRT7cs2Si1pkybWePnSaXRn4TrCAicsA",
  "key32": "24xBGKngDRq8qUZ1jN4AcJJoFgcmTGhsK8oCf9ncj1hrYeJZJvPtMeLNCryjBtxLygf96MagWxBJnv7ferEHNX6G",
  "key33": "4nJXM4iJWbiLk1STZHJXjtFh75oYzph8cKunzzEdyvvXWnnmMQGvyjPGJukQcEgeNLMuxkNj18ACaE3bCLU6iwXb",
  "key34": "EAVAKNGgMEZsaRcQtt98VP5T3VJnWVh5vgKFqJLrrwiQYiRbM1FAEzyZ3DRzGy7t7ar4AJ89x45NR2pqBb24Tgt",
  "key35": "28pS2ndyfLv24n87HRzLQwhtfcg3jXAPVznmDJGQFnyv7XNP9j3fyXiBrbYpzoTLTiom8nUESNBD9gmhAnysuwCK",
  "key36": "28CuSfiky8bt9uJwVUrEPuEc6ue87K8AfJhLSLJYcL26JRF6WN2UvhX4M1bUTW9NAvzP5cjXQFB76h2n5K6iKmxt",
  "key37": "5NP6EjYeMsxpNWUWsy5f2RkjKDrpfbmh7Qnj9dj5jXNFs2sRJcqujkqhnSRAVAJXuHcdH2USw7zeXZRC3WKMKaWi",
  "key38": "3MkV9jDupEkE1t3mi4c3Yo9srYP31HUZGrMswJvpM1u8KGGSBfeKqAFb3DEArLoP8yB5LjC6jRkmBaTPi3HyWvRF",
  "key39": "4LMUCiE5v3NtiBZp79V7YKdC5gbQ25qKzW4gnZUNi76WbwhxWG4ymbf5BDqw3oJrkpJkQaFi9XBPEynD9zQcRMKc",
  "key40": "4xSPBnG2HLvXmHi9GhsXKTURPEwVUhgNTvCQQ1xvneZXaLg3FCZjLPrdi2hReT9ZSC8cQyx7QXeAfeSEnaVHK1j6",
  "key41": "Go97YH6twthupKhvKuT8CV3SLNMuxwiXBuWiG5u5hfyxb48hPb4a3J2p3XHcp9JaUKgkpt3qLBmxSfdkLfmP5fa",
  "key42": "2VMm6yewduJZirxpvmrxNpJmLvD41qLbL63Z9BKYWttURfoiFohjyaMdLCyaZ64kmF3mFFDAV4pM8eEm6JiDseyt",
  "key43": "3kMh8XzXEQzSeXMdc3udSc3noopvP95DHCskrM5uiq7vuVStfkuj3dZPWFfpiszH6okPt9ABxpRjdCdXHjncDChF"
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
