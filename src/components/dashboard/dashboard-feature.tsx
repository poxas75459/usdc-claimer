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
    "73Hn3b1FuhawLqwH4Ev2b9TTf3oU9mtfcirLGNq8jpC95En7e1yd2fQ9QT7ztSycFvvdXuaurs5NFe9wYCiGL99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxfHLT38rFCHs28u9hK8yD1gY7ezbhdq4VgC6ytKYVJjbnDBqwNN3nuiuEmwR1aHWxSDAfUtcdgCXFZMzf3AZL8",
  "key1": "U7ECH5crQgNyNaKzbhJhEdEwnpuPuJySVYb8qSMPWvRbnxfFtBmSfQ2R1VJF5ttz8Qg8hevnwSpZJCc5TMyjzot",
  "key2": "5JoZif37hUv7arfvYAMJs2Uc7wbEHLVzAwXZWQ8NnzAAExDChC9E5XqHpRkrw1cpMqt4oEXEWyxn41A4Bx7KvmEH",
  "key3": "47mEDcmisYwKy5scY7unefU55MqybkgPJCkQ3NocovmNAG793cSTYyVnou1kKF658PMABup5WFcpG5Yc1TR1dAxz",
  "key4": "xhpwXyGDRfiD2CiMufhouVfEyYAz3ivW6zz2TYyYaDjve8HSwGMwwW74JptjPJp6UqqxA5BDg7rRQBmeoW31HkC",
  "key5": "2gyyfPBVJ6MHoWX4bZbhNJK5i4FUSDyHMvKoyjwuxEpi7wunZWtqiAQf8Z5jR5hHQLg3aV4yShLjpFybxipsKYLP",
  "key6": "4Cm8m7bvQvSG9UAPu9C1cXMGz4MexTsQkjRuas8NgouTZekPpPjgcfArDHdmKb7KHv7TePfQdv94gY2ahxibmg29",
  "key7": "6CTAvYqYaJnCLG71YNPsEfacBB2iUNRc26pgxrgfnmJ7JsKq5Pa6RzHAzWkAhU4NxAnb5PuryzoXqebVbBd85vo",
  "key8": "44BfBLisHwB8ynoge3pr1j3C1AmvUSvNSqADD5m6XnETZERsSzFPVSY4zSq455ST8nuPKVvEBKs9zdmYzvkWfYWG",
  "key9": "4BMjjNTm3HCygbn9dhARhjwxngFCt3UXArnEnizF6TdJBvKFrExdQwKwv5GBarXNiagz6q1mixt8JYxrEYvxUDw9",
  "key10": "55efgVo7kd4DRKMsyCJUnjSwBaSuP4DfJuuC6ih5jmWCUWoGRxN4MB7MhYHwum4BKxcavp2v1mKcuYx1wcs7NiMo",
  "key11": "4jEgbSwyY5N6NjnKfL5Gmf4TFUzP6vCDxJuxBaAQJLfwUpXu2hMMYoY4wzeqQk9dafZk876eE9V4aJbjYUMZLoRk",
  "key12": "5qQaCQFgsJ89FPWU92LkfRSDptU9BFjSgpKgQtvC9k7BohWtRcgnLsuMqS1K69u8EMHXXKGGmFvZkF6ZM5dQPHN5",
  "key13": "3iQ8rxb71rkSwHTbRk5ZWJukV9V8hpo9pkHcLTp9UyKZhNhQEPyreq93vsydMYRPTwSDj7pvpocbwFo5VuRwixQM",
  "key14": "3Us4Zq11da77MYZYnUuUWEg2qgZJm9AA4X4BFe7huVR74uH1XooRDqHsUGLPvwZhZn5di39TpvdLbB8AwpSTJ9GG",
  "key15": "4dWbytEWwabTsvyhFEKXh5R4KXByTLZQEBFJwXEsm1E3DVGzF72btSVQyn5TU5DqhJrzXKyFWTNhaFDzENB1JcHs",
  "key16": "3222y8Y5eYwnR1ifrPXaVMZUwAkFE5Gu3S8jJAajYvr3LQgfmcZeKkmACtwiwxzxyvC8m2kRckB6JomV9m9yepQv",
  "key17": "4XkbvjXgGVrDmkoWVh2gm4Sh42jMfv8iGCJVLSYiPGxxFNdt5sNRSyDuQdWobxRntTEY6aijQfi4Fmzw184qrSEB",
  "key18": "57eRqkPCoDS4ADiGsXZVquSqDZ8iwhtxXhoELkcCHHfue7jKxnNmvXkL6SB1CH6XHA73zc8R9vYiUseDdxbiYeoC",
  "key19": "4gxg2gGi4VCqJ7gkv2b5DNA8SnJGDk4m1HAJLXnPkV4ZQrmJVmsNN1eFdqfHmnKt3Srvu93T1obXoemYmZe3NJxv",
  "key20": "5RuzH9nvnGEq7GZjF26obhdK7XhnZ8yVQNLMMHRL9srpdNJSGRS2W2bFCt79vi3iYwFqMKau3dRFmoiSie4xnWTB",
  "key21": "FX2JHqDfzqN6UyWdZwws8m5hqx8aXnUEFVRK7Um93zfoT6PssVq5LHh9NWnxLQsvUctWTVUWQqg8G9trnzfmvzQ",
  "key22": "2w2gVbwuUrVBbqJz5zjihmuk2gcq8AmFL75yhqD3Nw7oDtUrWkG3HvcPJtXgVL6dkfaHYusZbHn9TPRNaCikdcJw",
  "key23": "5HGFHgoEFyAGY2zxVvZTYfJA1fHHQ22Lx6iiyorndZXYoe7dqpKPhXPpfVjN2yNuF8AQAkromPBQj8hABNsUxDNg",
  "key24": "kjAi3qJsjLxtwDYr6wVCfvCt4ZWtcJkoZ5m1Z4Pa9Tt3gLj1apvGV5QQvBKC8W3i8sL7pPB9YUPgW1dpJkAYwzh",
  "key25": "rjWmFrcLD5qELdNm1r1gNLaYGBtK3PCPrDUV2Xp2xkbaXDEqMrwVXeGszbUWMbvRGGbLV9741RxK59s59T8stUt",
  "key26": "5DBiEvqBQpprRNvoN3YuxKQX9MVNRkibhsYcEPwCxpAjB7XQLfpd6hZXDGHsgQJs6GCZzfrmmEZxSyECHZnHRAFX",
  "key27": "4wJpZvUXz25WQdXFMpKnWe1QPt5QGYsehYcLdCt7ESrkXRFe5dN3fcd5PQC64CvvrLtE2jYEYvAXi5w5sACK2y6L",
  "key28": "V56Fw5j6FfG8GpPFeMouJt6BAVyMpFPZrMzV5fGB72CYhVbTFxMdS14G6H99cF3YR5EfzQiFuPZdZ9Enezjiuzc",
  "key29": "cqu4ShzLmRb8oF1JW9UMyR3chkwevYV4noL4uGL5iYnFvKSVePH6FgjEd9nKqfqkFMNWtoGTEibDdftDCEWzpot",
  "key30": "2bbtUZ9ceuGZX6UHSCtjUzPwFKw9cAFBc6hBzwU7gJZ8Nq13pUNJpfMjpCgViuQZVv4Cm3qm5ViJJk6QzyGomgR6",
  "key31": "5XtA2gBCELxd1H7Ei69WrSdoDSwomXESKEpb2BSVdRyzS9ivexUpBYkkk8pUM9RtKrD9s64qnbyDgbxfE7r5sQH1",
  "key32": "2Xjth38WE5WdwzqYD2jbhDyjrw5x1bhzC9C8cgWj5oUHD2864bxy5iovP1uZDfu3N4nvDQwHGHHXq7oK3BrgQp6U",
  "key33": "5qkn67odKFBtHCVfMaMQ9dCDRkGMzKLEVPV5LuTm5o57BAc5Vz8bFwwHtUy9EssXkNPW72FubozrkhFRjksJg56c",
  "key34": "5TEQ2FeDw7G8QmhJAo61Zg2qoFCabtAQdpiyehzRtkFJ6cRLwbJ5v1DKryJQ3WMs1N4m27VzWQucAyTmXoc16mYB",
  "key35": "gszcoUcgJWSKyGjgTEqdDju7ovZxWDprDM12721yddUismQ9qqLW3yFT3cReMcpV6bTeqMaZTpfiEo76xwbqPyH",
  "key36": "3HHcNNGyM3MrgMQ7a2Wqpbxu1u7BCoPBMWDbqSM1zR9BPMH2Wcq9bRyscsGDHRnjNtRnAjUZ5voXhts9Pd9C7gMf",
  "key37": "3b1MsW7TXbF1kyjH7xFxULK2HGQJ6dvvyDMPYqvH13Lw2BWJaSqXTQGhSbwee4mT7rikfuqYVpjwMHzztgtxWmBy",
  "key38": "2A5THc6nNwacvnn5QttWvEQSXeH4LRBxdRVLz8vepLRGzKKPereokUxenJi8ZiP2pPBjPUdji5h1Kx8Lwa1NwSed",
  "key39": "4tSESkhDMCvRgqm86hHn2m7shVTXnBAUTYmadmBGDp58LMfejfm9iESs2G11pQ1WDeuKTrKm8kGXRwfhDLL1wGA3",
  "key40": "pgCLxFzFbzq8sb9MeT3JiUYnNVjXV8hEVY9nenDBVVcnPN1p9t6bLScZCKqe7NqbpZc53BsPZtvuMJQgDx6CHut",
  "key41": "Brz75vvz6ZbB9KTD5muHZRpKeSyg1KF37GarhFdYH3DHdNGVHTR8dCByCZPu1YPf9zyQ3QBjefDRZCxeZCWAvLo",
  "key42": "34bRXLvaZQuuptfgcB4aQGhZELDTmmUoiMZ6rD6435SFeoLaKcoSC6Qfp9kKC4nabQPH5QZdwoMJKfVtMrH9Ume9",
  "key43": "5UbqANxAha2ShEEJDr5kTSdBYWBhyzJVMavtWRfa5tiPbsUq3vXEwbvfE7KhbvX3aSr6ZBhoFQQWFecgoe4agptm"
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
