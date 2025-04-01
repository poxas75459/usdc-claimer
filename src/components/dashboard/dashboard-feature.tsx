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
    "Lv69Fyfb4mJknv8gAYCGJKQk8SojAppPNLN8wUeCYfgkVAcNW9s6KjuiXmD6UYoP3oxH3J2CazMyrQAQiGwFmsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ksb5FoGqLqZzdaxPS4DJU6gtgaEGoeukB5TpRZee4J32Wko9YkDAxTQJ8dfN1wnk7iz7xV3AfHtnbMhwneRoD2F",
  "key1": "31PhdomzDMYSwBVMzTWQuhPejivnYAZpK9Sq5fdj26zqPjHqDeSyt17cC6dDtb3kB6i7V6QK29K8MJ9mevX6CpN9",
  "key2": "5XwwkNmFH6rPmHr8fTxQDHU5VnKtJ6Ze6hUCDz9DfXAp3Vj3ZM8CpNrDnnseEapVqaN8rkzACoMZQCW2t8D6Y1vU",
  "key3": "3yi6ZmWKCL9Taz5xyjNHbe4qXhSgJyifRSSnaHU6SHmTav8MTYsCKzAHZx5as6knkSxmKthYSumdPoMoWTm32Aws",
  "key4": "4iYs9Sbgenom69DWFWzJCp5Zdtgw1JjCWL8aX5Jisj1Y4vyPepJRXmEnQBA93RzBZXjnVEk6rMcFeddwcX3UqhjF",
  "key5": "3Mqb7bLEcisTsVPjJv8zPUSdFwTWcfxY2nEcHVB3tEEzRVRaeiAdCaTmUU6a3iqAVduppHEr8EiWSAyzuFQHLnZY",
  "key6": "4zUDkAzYZEDy3Dz4qkmbgiXocpzPrS9oVnVPcUnstKZczawJpH9o2kvS8CXNQg1wsBAQmQgVT2cAqUp5YNuJ3Ukr",
  "key7": "3TDAD25bscPRsvRJetG8MoNK8EqabiskiXqNqN6qrcuMRuiGDX6uQnAM3B4ennDZ6UQgAtsiMxdDsW2NUYHHZfnK",
  "key8": "2NrZh3bGjVJyyY2NiuAweAhgk7Ko7VfAuZ4inkNdDmf17bdzxJGVJ8CAHjf9RohdragCaK6ymqtSJUvZ8eTpGtwm",
  "key9": "nZCGfa5PK7gofzMAEWskagFj8bfsiuDwEcxTEYdiSQqmvN4tAn6rhNdY62mXkgU7NxAbXdrco8n9bqHMqhiD8zD",
  "key10": "oJHoABNBcEeWUyz6Mcv6J6tuGqvAdDC45RwKTEtmDipvj3zLFXgBVoDhmV4pUYFDvXmr3YvWhvKyg2PNJPL5TXH",
  "key11": "bPzrzCDjTm56TvQkbyEQqm5CSdHRvLTQHs6jzgWgEMLwKbgE4swEqaakgYZPhwZD4PjKNoioAqo5LvGo8B5mpJf",
  "key12": "5yqCHhP5joDoPKhitYELrpMYTtHWs5zduceoXYNQdZtf7xiYBjtxVkb1CZL2ufjJjxNqqRm7JKCBnJd1MV8V2wov",
  "key13": "aoeXcNuKx1SVS2DMtZYW1Mu8L3oPhzQqPyBMLczccoHuFWAoU6WNSd5ftrh283Uj4q1SXQ8Zpr1br1e4PtQAVGP",
  "key14": "3noTgkDsJL9hSigDsjSKMmEvFU1qiqet17fcT87jNfsMrW4nv2ZKmffhkXZmk2fXz6qkmwisfeRm6PTF5AxncXi6",
  "key15": "4LV2dr7YSnAuh6fPQukuV5itGYZ1GE45eRFm5dQVJ8XaQScZJgEVDVbdCmJCHcwbFZPY7Fc8U8MCAWhARaHJnTY9",
  "key16": "39bzrkNoC9Vnnx4mqDvMcowXeECEYD3Dd8rC9hCKAzR4cGwC22PDW3MBL3f5p1zZQi3ZH5HD4XAo6TpWkYUC4Hef",
  "key17": "33XhWcW15dYbeF2drX4VSVPq1fi51VEGA3xstr1WTwagq95NBzrnED5zBbTEMcBtqLkzYKKYyaWHhmparAGXDeD7",
  "key18": "3pGb6ZWbXFJcZeoPp1mZ9YeTLvf7zUoKQAMcTHwgMCF3B7VpjejM7agW2GG7rKqdjA5fPV1J7ANUV19GUKyoQvfd",
  "key19": "4oN7aL9ScQGrxyWWp3tF9vKnFr4K92XuhoPZxSuyvRgr3gfxLMeeyEmb9FGBncK5p3cyYwkGN3B7rBRPJ2BFbMdG",
  "key20": "Lxq51W12ZfJLmh43R7XD83CnN9JqUJ68Uo3ZsKuFEzwJZcj4BNGhLtG7K4ipkaJ7TeLsg4nAPmuLogjtottyPhg",
  "key21": "2R5GZjHn39VUnDHhhz6Y9HB9CSr9pJcLHLETVkPUyMmpfgnjR4FmkxL6zHyskzKe2LfVV6nU6MpghXPRMWCpiJFm",
  "key22": "5U68RtZQebRCohZiaXC5QfPLy218RumhxmXyJDTxiC1makRtqNk7UFuHTqgwgkaUzXUgEsDt82RQ8qyV9iYaM8De",
  "key23": "3wURVwksAs38dEjRxaPgekanW5MTn52xtvM7HnD56HVkfaGK3V6M8Zk8u7cAypyGbBVPDABWAWdTxEEvPuHRNoSH",
  "key24": "3gJDPVmAAwj2MQWVFNrVGAJkRXu5z6J7bUEM7GZYwdNnKcmHMhBf3B8iyxAUewvFc21ZVc7cyifYXFWvcb57ZuHb",
  "key25": "2taCsPueBvt8nudtKq4Vujsox8EoqySkEV9mPtd8bX49RjepBgTLiA8LiQEAveaff9MQtkD9xHmfe3StvUrMp7iH",
  "key26": "588wAnksBVpeWb7FBx6fSBV8TmWzQwkEGkivRQgoVTRcGUrN8wwJ5KyokDRUM894twYc7Lm8aocYJSaFybxBayeF",
  "key27": "4QaQnkzWTwPsFUyqUEQrdBwaujyjFvedd5AefQKLXLoKyG5weZmAT19EVGHtUmBKgcoWQcRAKJ8ekto7updDkRFK",
  "key28": "EcQGbF62AJK7q5kFgXhmP8PbjqtRq1q333mfC3mxSrrBfJzgqAC136BEXoDxiNQvhLoKU5Mfyo7KkTMAYS8VpQ1",
  "key29": "3yX6ZYowQjU2abZx1UBdSUPtefjLoPdU4Xk5bEdN3WsW4CMhabncSj9hR4hLPhsMwBJ7DmMRsAFFDK8MxaEBjZYn",
  "key30": "2nni8GkrJQ38evMyff2DY531JjLsy9VUZfpJydRbp822kxGKwzFeDPYbaBHA4JWiRuFznF2wc5fm6fWnaqznFBoQ",
  "key31": "2GKuguimgFmVoA5xMGNmNA1XMj5KMDjQ5P6urQgMnukAPTmzE92AJkVjaMUdjXEa1nC3WawoWmYVGZhL1VYgeS5i",
  "key32": "2fWdPF6xWWhowbnYL3tiZ9W3CjmM3nXiErmgtTiKvo5NZxgR2SjyjAgnFbtawDuxpxxRo3NCq3Qc2dF1Qu3MDYTz",
  "key33": "xXRu5J83ELj8TbLd3bPRZiHgkNbt6A1fbFGmcJjoHXN1hVJdWmtp1oJLqtNVRXxEndM6qXM93Y2zA3tUNhNYRET",
  "key34": "3TaT9nE5Z8e3koVcV9fS6vpewAB1U3kVSfkrZ3TRgf8gEzosKj8fFw24FCrD3JXW9KgpnajLAVg5SMuEGuQhxBPL",
  "key35": "4qzo8VinrBG86yV9zgsxLgEbVDCqj4TuoYaBHpyDcDFw1pmnyDfptNae59kvJ2vAKFxFBBHCLxj7UPxfNw8UGq5F",
  "key36": "5JGknPCx5Doz1BmuLcAEoLBVw8jKpcQTi7kT1pMETd4NqiJUpzLXCx6WPMVM29XZrZeBdXoCc3SvK1Zbi4fypE5b",
  "key37": "5YcVqc2PK2nKF9wuVe3wr5UiDjawGevFGyDQtedExDbEed7BZSHnmUx4qpPj8MvcHHQdGMWJMGWsUnjtEryLvF24",
  "key38": "4oUjWGMKTRuoob3XWo2UCwaaYT9ASoYE2L7paVguMfXesBAuFyNx4THsbJCA3nSok3jJoJPwDgCrtNJuH9c4omDa",
  "key39": "4QKVpaUKbeqV727eGc9zHSgniNvYagDDNE2MTjzssgqMyZ9YvrRGjPdx7uzAJbpHxpMJgeNhar7qpt6p21skfwRt",
  "key40": "2dCQ9vwqk5hhNUNpZb3Bx2dcLb6hyXKa7oyJrnW1gowDd766746dhBuCKdxCyeCnirW9gHxCUdEmNmJyWPrnYXGc",
  "key41": "47u4xNVD5nuSgS2TbtC151sm8GDnyWbWiMziUWRGQWFH8RPWmP7Ly1yMhhbyCaCA3ukv2BWZou2nExSLgLYPHsRx",
  "key42": "2468W4MGZdzB1JJmj9T66jZAJ7m22qytvrxNyT8EF6NxVzcKHpi6yEwVxjwF6k99BVbXgm14oDvNpoT95kqDvPqc",
  "key43": "sQ2yfo2cLN2ZQHnxJyYdKhjAnStjjo5vbYp8EUVFL328NptqfAcrWiAgoVLQyt2mAfqJVb9KnHYsVsokaXpsFb9",
  "key44": "4CnBSELeqkBvAjGdnjW7xpU1Pyb2MYuGmY5h1RWV4Nf34rKRdQCWrsr8fSiaMahaJ9jqaGYS73nANaNzgXKRRxTC",
  "key45": "2WvWSVGHQmhUoNCPFWJGLRgXZkKUntDL5zuWuXkBwLjYs9ZSd4Yu6cnMiVGj4jd5EcQsQ4JBuiA8nk8torRqfMxS"
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
