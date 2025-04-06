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
    "2Nsa1Va7VHuh8CWJF1QQXgAqhDBMJYCYkxe6vFKf5oXrJJzabtfRiPkTGujTxfhDTb47tp4gyTQQDfwp1GVJVqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uwNRfvDgU7HMrqdkDqAZpgqsZDNwhod4XGWraY9Pnhrii8uMfi2dacYxfJndbtufzMSfhSRrZeHhL6LMV1Qij5h",
  "key1": "4fg1Bdf4bTTwZziPQRS2FLGyULmKiPYzBe1komTzGFPxPYYq7ffVtrsuybrLq6yz76gGdiJ39rvQSsgwQMXp2ETA",
  "key2": "5mPR7iJY1km6v4XF2fbq2dxStiWxmtPCYn6inn88Zo9ACozjcE51TaSn4v2gFeFQuE5gQzgZXbiPRZ221j4ZVYot",
  "key3": "weznVtCfgfq5UAiUznU2UxQ1QKZD4pp55BUQUy1MCbEJFGtYkfVq8CKfMMv7PzW4H1QGouZAAUpkWkcdSsqYKhz",
  "key4": "73JFns4FmovUzWkG6faE1jnuMYFmP9vGwfDPmi7oaiuas4P47wtfTHwxkRUt8TotRhsgi5b9P4ZyZ3Cte5GNgeV",
  "key5": "3jami7z223469KCYYUvUTTH7fHQPMUgnfuXhWeY7ZSXX37oZJa384SdpMBs59WjDomu4fWZnka61LnyDADj5q5hH",
  "key6": "51Cvcmac2NqWjAeZhxwf8TjtDMtCSgYxjhATkqrGXCVv8YHxDqp2U8TPGXJEujqewFwUMGWN3ZCwnSjToNM7dx3Q",
  "key7": "LRaM7AAZyzcS4VSVJEaN1oaWubovrug3ajx9DBAY7T8pAoyNRcntyqczEMGHroWXh2yG5qECTyos3rgrAX3u69W",
  "key8": "oYTgmjjBg2QnZEykz9XthR6Zhadaaq64B8MeXdpDY6Becsm8ehe8xCLc2kNZQVAcVPkxNHVrYow3KtVeNb2TZUT",
  "key9": "5hB3Ro59RyDhU6G5GRkr3SFrxqiwLeAb7FdSzdxbzgUPUFpqZfVEXfd1jHtBYGnUaBBHWLd8bdo7ABZendyQhGGS",
  "key10": "48ChtMwe4MWr5scZ1A97L6x1dbYJtqKam95gQxeGpbxjmSjibp2f64dWPv3W6CUe9VReymSmLCN6P6Bzq55oYWjb",
  "key11": "2PjZEMthuBXkgAqGeAeLBNi1TcW4u5UHtLhCsdwpWBidc5eQsJi4eddGbLHorUEgq6jkwQWzZVwdDGS5DTtG9H5R",
  "key12": "2RHBtdzDqooMASpnEbsMBEjfeSanwUFCGuPXx9LJsRWquMNUd8sdTyPf8uNCWe4WmrXHvq4ku8moa7GoZctxvPET",
  "key13": "4myJr1mnuijtqYMo6J38puz5QUjmg8VPywLod8Dkzhqp3Vna5XMctuevRXbJfBDb9PaKgv1qUewxLohx4Hdkp77E",
  "key14": "21ezCyyNAAS7FrF5qFErRydYYUJkE5f1RGqm3wP8oPiwy6vS22v3bW4vBU7Vf8Lg5fH89TJanVkbvTjJRivAiJ6v",
  "key15": "3cZxxftgpHAYEY6LJfFSAevp5xskuxrKuxmnWpg4e776MSottXocbvnfG3qQ4F4WoYVfqVXSWX45c4e1fdRpa7bP",
  "key16": "4NN9Xt2eKJqcbZRGLskQKwoKTfz1dNteGmwtCrqLmxo4zoHhYpi7VgF8NC9unf8wSAtBXWRfWwx5MEJYd8zdmqnJ",
  "key17": "5GWhxUuE8cJWS2DiC6tsyL8ZuHN5wUZayKVPHoubAaYDL1sEvm5FMdkCRErBBaguAysxi2neNVi6ALGXWLG4GAWM",
  "key18": "3Zwp4Eydvj7cYFkTENd2WZhLpwKSvFN1GLtg3SjxuT3gu6gCshVFvX8nGALkMF9LQrGE6tJkSe4QmuzRWNFk6rUS",
  "key19": "2ihydL13s1pmv2w58gh6HZBJpcfPu1LRPnxedMt1RbbwYSAucrU9fdxaFAB3TDzspMM3YFSrM6T4qwk3W3PgPHsj",
  "key20": "4ivCHeBejhCdyVySWPvUgqLmCSoUa1u2Z3RyNYG6xrskY8ERBAbSvhfcsD1UEQf7tQxwGVFZb6ysE9amaqipjw6U",
  "key21": "2gRBVwkemhSRnniHQ5xg4sfTKrkh5zCTPUjCgteFXD3DWxYQ91Nku6Kf6WuhrZafNweHsaMYPWMc2GcixybbJLiK",
  "key22": "sywSwt7hCxH1uGkyjmzzFF7qmQC73jsxGbAHcrvcQkkQdw4UC9iJduaRT6CQgaXgAuYf7A3tnrkN5CJ8a5Bzy34",
  "key23": "4RCgUJXFZHMfbCkze3imwhJaqzk9rrTFhHWzsJeyWSshB3LUE9sR7Ug5d1LspcU7zM3m7StP8vofSPe91qi2yXLZ",
  "key24": "59ssg1kNNJZqXhxFM4JqE3WmNCkyGeXRYLNaogwcdWBAkDKAPF2Jfvo4BgAbfRQa1GTWmJxyAiRVjRtvyspAfEEb",
  "key25": "5qGGWu1gu6pxSZKNXEHpn7DgrfsECDBNJDCswW1SZxA4RvZJGsQB1Nj2T42vNfvTyu87Enz5dfSee82Huro4Fbmn",
  "key26": "21Y9jA9jsd8o8KPAqyXG4FoCJxAo4iZyU5sZSbVge5GBSAyfM4kpzmx7TaXMU1tK3zRnWPNSUo3XQ218wpYYcmAQ",
  "key27": "2txseTMDJT4Xo9SYTQnUwon7srorFYV7uChAVE35GNq3qNK18TtXWSexBL78zeNG2A6zTpNydBuLKgV6WeXhcPAE",
  "key28": "2SpAfWsQfBFEus9fREZ1pMgCepiKCXnEyS8H3m4i27YmYuND8Hu1YTTTBddiue6ecyY58gGHA9EvZ4WdqBCs5wL3",
  "key29": "uF1zMaMLuuw25Dy2fgrST7GLw9SPYfTt41tMb2aXUmUjukq72KMty345uo9btw6MatpqDkuzwPY4gjRQAX3RrBf",
  "key30": "3TxABE6vgfhnjzkB4mF4Njwf3AVXLG24zKDZ9WmBSYzyYNJroovJhvdW6sC9mhxs36WA5tQH65aDUQfvpJ17eVYm",
  "key31": "vz8Hfby4t4aFKJQgWBsMrJrkBZhVb2Md3jCdmbY82ZxV8d9qxMFvYk6BDUe5intWMPb66jAxzEhBREuTXTwnbWX",
  "key32": "vMZCBP5s4quecJhKDY7HDYFdLPDAJUbjzKHVFoVDgsF9Um1tzt6xjZ6BAdEWYYjBvudszVPf1sXRpxS54DUfca5",
  "key33": "28teaKabmo3WsFP3wKx8zRMU1DD23UgPASt7kA3ctxHp4UFW1Ew6Jp4PiMCZCVDREGxrHD4jFUuJEQfwbefnDXE8",
  "key34": "5QtmnaiJiJfdrfzAMGdUkbFDbjMCkinMge41enUs8ZnMvJ3DRupi8QKavsSESExFjdFQ26rLGfnyQPfxF6hM1tgf",
  "key35": "3VCN5DacMHpuA1q1wHtWGNK7hsksD5YsBGJPhU2ZpgZy8XKr82hVDoWHkPTDXjZERizaN3FcJ9LToCvBCxg7WKXV",
  "key36": "2hAzbPmyChrXN1dWPjYCFoexEg2rjK4e2P1LNmGHAaRDZsLgQw25rvCGhxYk6ajXJb58zrGdPnchigtobp73GY7G",
  "key37": "5BSzhgrQPbVRmEwHaFaSWbrpBEa59FQGHetZksNt39Kt3i7kT8R6vB7QudYWoejzzjUSiHp8t8CokMhrqPdVdU5Y",
  "key38": "5m9jQkjAMJSibnvESD7FjLgxEsXKsPRwb3X4sdkPgfqxa586uP6SR7sZp4uBFTaJ8Uq1VkKLh97hTPqwhrEUcH7c",
  "key39": "RwhsXCTH2fVo4qy8kN4MATSrBRhsqT5BDAVsWH6bwFuGs14Z1u9BDbnmJGLqKkS3LuNatDmAKbpboVYaa6zK9vk",
  "key40": "3NdYKvAjQFJA5ktr2skmzMZrAKDvDR1S4P9aNXuDSTAbkBnhZVNzAscELgTD6zNzzgg3HHCVZnt4nJWcA57mn8mM",
  "key41": "4aZouKBB4aiobB3pxrCVjviaRza9Vk5QmiSrMXwj9LWQ6bxxJLYfBctsuPsvEWXRLhuEsDWhcPYrt1DPxb3XP8UC",
  "key42": "3oQMPVbPft9pXj9gUibhEBU43wJBZRFh5JJ41xomXxY4kM4SgyPnip2kNg3y4m8PbHJQeDaXXbF4TAxJzqYWfvsF",
  "key43": "2LJ5H6RHjzXW2hoVEd8j65ki5W6yiPGBUuhXM2Ta7V2fZKf1bp1PhLtkupB2jLp9KPYsUMR7Pk984ihDz5z88Nxh",
  "key44": "2dpmHUxjV9Sc7Ukhm4QTmVSGZaTHZrxx8gPZs3UoSindPM4mKLhhtgEauxcCyACWbPHrF1XP4KUFc1VRLwV6PZQw",
  "key45": "1JX9saAFcgPJ7M8VYfvubTPoNn2pGbm7CaXQSgSnQEkY5M9UjPWkBAgSDUvVkYxSayzZ4S5PhB2ooAU3vmYhaiY",
  "key46": "57oHcTbTWdwpPSwFdc2Twb5MMPPAeHh7JyHUNPLHBfSRqgNMCxrGSa3N6iJfX81oGgP5J5Dccg4ooGF6K8a6dkhN",
  "key47": "3Rei9atxUz5CFZGmmSPvJTA8wbNDHfCycD68kohch3Nzm9W1CawzywBPpZy1KndsFVEVSSCGUTaE1YVnqHiNHu6a",
  "key48": "4PDsEESNmFyDYQtr8STPk7ij3MdqE4rJSWztx2rsWqkr1phMdRg7okmpfRXpQhReEfNAeQK6jYGAPftH4tb5LEUw"
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
