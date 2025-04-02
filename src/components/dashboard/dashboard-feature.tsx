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
    "5FFf1JhnxDxPt68xDrhXdYxzwpjkiUVJFEMFHuE8TwCMbSZ8vPpARvJkRjvxuZXYmX4sjgUqucpTC8XQeWRCoKWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LJi7QVgYDEyxPYXVHxdtwgggMgVVnyGbuDfeBsCZ8WPW5KNEq2SXD6j7neSrnpJTeQyQGtVvGtAC6VHvUoP5xPd",
  "key1": "5fKKCx1P1WbvvReHY68ttSq7mtUgwspAyVKpDkimjv3uC7tMnoYLKVfafdRXZrFehkDevFbe8UbkBbcLWQa4bWuC",
  "key2": "3s3k61j3AgWrfNPZHiFBHCmEYwSknN2QGfGU3i7Mnpsyadb3K25B8jattWvpWTcxXkEu5h36GHVcQJgDZx5HZLUK",
  "key3": "4WD18JHkDBQsnXKFFE9CAJV9yD4UuSgL9TWA2K1tgGHr9NwbbuFtqh81dSGiv9Lb4Y7YG68CRxrXks3mG8W8RuYk",
  "key4": "5PCWv6apYY8KB2RJiUySgVtD7mVUnXGeVqt2f3W6iAzMTDKLMJd5emJHwjKMjsoVoaMiFhb4iBVVREqzFbduxMgX",
  "key5": "5YELWEBGqwCJrqbmedHdMGYR9QtpBYbCkKvxEh7RtvmMgTebynYrtax6ebjrTDnEJp6ZeFS6Fz7gv6dSv6j8fe5k",
  "key6": "2J1K8eurALtv4sad6H7qyGHhG9CXYZdM5uDtS3fWtW8JuVsH1Fj2usTyDPpmB756Pt1QjKaV4k26yamhbxX8mUXv",
  "key7": "JTf2aR4dRVhiNW1X6ojYquqhCNi1Hg7zbRey3ZSHpymjv9Az2onKYaVviyhZreQ1FwLQhnu8GnV9Epe4PsqG93m",
  "key8": "4U2CBjshhf1CDVZ69gA5XKAErDmEbpyVMRgiUPLkW84v23dx9WqLMzi3EHUHY7hcjnoMzw48a1r7AajGtjQcJ8Jv",
  "key9": "4eWqkjSPAVRnCU3EiEdFco4wre6B1ZZvhwLDHfGyY1emaLdr6AvrW8c621Gf2oKiAEzcQ5P8zZf3BatugAkYhcPN",
  "key10": "2gpNfrkwtgSy9gVbu3KkD1rCLQ4dyYPEXtJYd2zjr4wz9Schf5X2reweJYZsvAryBHaY3nnFaAtqLzZGvNpdwxcJ",
  "key11": "22DV26qybRe8GUS4fYaJjQx4HBrzDjRL9LpkjzeS2nkvndSv3qfqn5phqSYY3NxcAnXqihQZiJ9dAJsSmtXT6TxX",
  "key12": "q6RoKCQN2U1aRV36cggmSZpmhimuRejewvHoRzkePXcEuyXhLs5fJnfgAdY13f1BmirP7GXvfLyWG3osVehuD5F",
  "key13": "RkHysquYsZKnhinKMQ7dCXExHGLMPPxt6FYxzsxMf5pDkQe77EGSiqfspGD3sRBb57md9mfFmLtGoHyoPzmh13B",
  "key14": "2S5phXRLAUdZTQzGs632FjfEBYawmvqqr77ZuKKbuWrVm8p23zYB1L19G6RfKiA3qtiqNvB1HH7LPVBNyRnqtDWN",
  "key15": "4jcL2uYgHps1aMPQK4qw7yKrWfmZ452de4uQQJLLuLvnERPuPeqyt1HrYjiiWoCAa6NNBL1VMisA7dLJG8CHfBxL",
  "key16": "3dTMoZ3MpT4uSYgy8pYedyZ6iLEz4BcfuYBNd2ihTvF4ogL4P1wLnx213pPihNi2v6uYtgz4dipYoiYrDsGVV5oS",
  "key17": "QnD8X92gwAugV6pKSocMQZRCAwPCxuQ2orDSeB5mGE47dGMx16qoeCHSuuCrVisEsijD595XxwauTdgS2auXg4A",
  "key18": "2ZZm8xMgwUobFrrN7dMtCWqVm5zt8uJw8H2chb41kunKiKY2vyqfa1P8Vut1sptaN3p29xuVm4NwRKKgD9STdsca",
  "key19": "4URBEWeN3jFxkRo4E8A2VhzXD2ripc58ceDM9RrKXyW7BnGXefKiPS7ihppgvvfN5sYnUS9T6SMUueKAnJNybtRL",
  "key20": "4krLmX88bxryxZULfoT97Yh6ZtrmXR1cTyK3q3pqkZ7RUWZFh57HU4hjtC3Jm1Avuj1mS1irzrEJWFr987sn1Es8",
  "key21": "2zh2MhxT7kkDoEB8hKL1M4A2p659sodK69BBYmoFXYSDXXqqMNjpwEn61iCrrFvHdG7AKxyipBVuwJkbbqmPv1WM",
  "key22": "giy8yaU4YheykzwVQacAycU6ZLysFFH8eRU7cNZoGkhxHt1wVQcgLeTKPtmV3j7Yuok5gLSjSP1ZWC9y4xX2hTz",
  "key23": "36HS5KqE6RcHVyoAQ7vaYtxW7HSkNCS1hLDzNXWvG9ejtTJD5iEt9hewCoXDEaN2ja43htp3TbYbRzfQfZhPiXCc",
  "key24": "2GG4HhT1BfyyiLGHPRJ3TpHi4mPTcMFdU6mQsweBW9ykB5Tb5nfpBqdSr2jbDrhnEe2wV4dnaMkie4FNKwKRNAhe",
  "key25": "zKLBiSYo5UifW8hopytsm29JrcuxTFL25ojotpmdDr8PyFcaY4z8rvvBGe2jPjD2mmmrKztqGKixP43TnZ2b7AU",
  "key26": "5EBrfhUJrCjAq7zsb6TWprbJLyummpZmSx4TRVUnCuNsBajeZACvYJSJnBvUZYZUDd2qdKs9zatfS5pyjim2EgdD",
  "key27": "NDAndEU747QX8Uhtgt6o2GdMLs1PmPFyyBhxGWtASvT38QFGxEHREmHYBhPUMhoSo851Uvg9BNT3pu4hjGHWAzh",
  "key28": "4JevmaNTaHBH7MGjXPABrbpJb4L6ChBfwfrZoGC98Y4ZMCzMKuTPei4S2MBfDnNU2aoqBUdJPTkzSmQgb79Ep6ry",
  "key29": "3CM4a9g6Jy79KRiv45hUveF8zF3okQF1djiT5Q8xU2EUHXBqtAy98EtdWLsA4bmWfBTLqbxYshstxJ1GgvJ8bMA3",
  "key30": "4RN7qWm4LXntksT8xSfken4MmuQgoGNyA2ZWEQB9mpvUuoSczDc6eyDaQ48hE4na6CyKXRvGz93z7Cr7GRTkDGsN",
  "key31": "31zGe2i3TyDY9AE1zHwEsm1SE7DJvjDeVWCR6PepQroWJTuT18dfjbVpr7ko4V4J6nHicAgkxuGbCB8KS82zb3Tj",
  "key32": "2qbKoagwZjL1dkvVRdiHy92R94BVxqPeUvyppDgVxzNKRiWgKnexU3D5astJtD2dmcZdtu3VtNPDMYY3fgSQhCAr",
  "key33": "4pxzbCg8n1FKE7JYg86iQtsGfhZZy4zn5VQmWJddcsjU8wKxxUyLNHS87iMsDifEuXJiZkbwpoLr8zgFguR2sMpD",
  "key34": "3pMV6vDYRFnWKUuWsuW2Byc8N4iQtU2v4c63zxrWMEaDvBhHYvgwLuykXcmC5BXWxyhJuTzqfKTtMN5FhYsCgEV6",
  "key35": "KQM5o8a61aMVdKeWKrjJV9nSx1jSY1vifEJatFtKSvhTEmQmHpkLrovChnUXordzcoe6FnY6jEJK5yZsqPjB91p",
  "key36": "3SMCS1SL7rri3qzABdjd1jcNkDaaki6JLRzz5tEVEg9dUhMrFr4oHkoeeEmmq48B54hvx76B2tNzGzsebdG96jTW",
  "key37": "zmMHtg53xvyxfSdeEYbPZS5gj3FTQXyYB6S4V5LEeLhDvDP9B1HnMuoXqkdxt3F4f2RVLYrVAgcqENYUpZ2ijz3",
  "key38": "nmCU896VDm9myegqKroP7TzYSw1tW9j6WbJAEdgmXbavL7zLirmhvd5HgqZ6e38pxDCuYwLeHZ113GAD4Eigc3N",
  "key39": "DpFW9jEdQf4DoBQxnNrMmBriZFyJ1mYzgy8Pokf2yqJ8Bcbq4nbT55Jh2ugYno1AoWfwXjjXi1t4x9h5Br2wqqU",
  "key40": "2dognoaUw4jBwB8cbaMpneNbqZpffusBH8Z8drgMATrwQeMQUaetx82aWgCwwiE1CRqSekpxMi85uu4ppV6BMoZw",
  "key41": "2veotrQ1tD2W7zBjZcEES9oxZ8mJsdGig8CStQGUmctL2FgAV3oci4AtHJEPxhrZq5jhXKGPMjZ9UuRtjwUceyLu",
  "key42": "W45FE4grwxzZ1g9eGL9gBvTsLMWKiWBXSBWzdVoYfH4QbqHdsigz5CCrkb7k1Vqq8ST8GgJgSaZrKAgSGrr5W4u",
  "key43": "3mAtahbHFrfJ72CQWNgQJaphX5Zpagpb6qKg7fk2oLDczK6tTXL5db3ipgyTAUzYwLjZ7XdwMCg3QWMiKSx7MGZY"
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
