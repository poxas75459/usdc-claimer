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
    "3821c1rbgVsnjzGQAL2GCCcR4ZWBJAFdy8sxcz4t2ggEviQqHz6FUZXYcPLEQyk45X3KT1G1bpQNh7reMW8X7xEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMNB4dS4eHxmAwgsJ3KmoccMA7f84M96TSsyTVWUEucT41kh1oDvd6ZxRWKr1Z5k8V6AxxWMvASQLrs9PniYtST",
  "key1": "5KM7QED5HLzbKwsRcvWUSaUqhyWxcfXLwsj3DJokXHMD2yxPCVEB2yPhwgPKDqCg57FQTwW3BGut6CeVjpVK3SeH",
  "key2": "5kSW7MXJrJ3EzecEkQ9DkJhpJKCJWDHkLpsdhgrthyXBaoUZGW5wcfvC1JZzW7sZemEPiSZW4odXCW7dSFVqWtyj",
  "key3": "5hZcxbcSdLYaSjpmhW9cTwhuyaeCSZRdfcfSLuSrTuXAoCrhVGdMgYNvv1UwRGPackM5T5WgNJo8kfBBXGpwK45M",
  "key4": "5ygdhwg6hhuyQhfvaAUEoEmWS16tNZvGnBkEvizPPcs3RnqDwGiAPS64fjeWi8Tu75XwBHB7aVeZAD4ykKqYqCb5",
  "key5": "3fsoYkKAtxwLBnFXuR2GgkLwFEgSvL1exLYkrR9sexCEsLk9nzLC1gYm6qqRHkvcBpnKDxXgy2Gx69dJeVyzjFbp",
  "key6": "49UeVJ7SPp3RuuqMyunsD7ugG3oUiitaHGxHG2czumnwNmnP8iw1S44Pqok6qp4RVCTpx2SCa1dSKgDyKqRfZZCB",
  "key7": "3UU396Sf4gvWh1xFJZ168mQXsCAA2BLKULcnxa7PP74JGELHCVG6LdvQ5gtu2BZtbngXU1NjTxA2SLBzKnGrvV3Z",
  "key8": "5D15HB1xVHfX1ULodk9Z52RcVDHGt3M53MKFGsTxUzVZauiKcW9T2mozXBEBAuZnspgpr6FmWQeTUv9StDmM3DAm",
  "key9": "62WscRXWTWKobw95teVQhiUgnK1VxT3EnxCttSBHvtuUxRHRLaaanwpY5PmN6FmLGYEPPsjQjEGHwD7rhUKBX8Cb",
  "key10": "3ACjYxbCQNRPfKfbgxs4WiJL2LbYTtqqmaFmZj1aZs5kcyaTAkq1Ms35uKqvQi7GrL1TMmS3X7NxGr7xtze1dQ6S",
  "key11": "3krWiaf54gKrqyrtZ8GW3mbAYKKSR5Rk4wWPYqM9k9kGPvRDS2qAP23X4E9zFsn6caoygkU1nfUmzFWfuFRW1ivA",
  "key12": "HED1EQPP4qXsYPcMY733oGA9NYaVmMCaWD4CWiBosEpUpTxwXeUKmFauQfH7nZu55EfTnHaRDvQykVgjCT8Nv5c",
  "key13": "4jycV6hLPvGXW6QVz2iYR6zqGGdKXJwEABXqZgy56SLMWuUjqicG8JTVbWMpBYUZ69ghmGsHRxrHJ1tJZDcVbRY1",
  "key14": "i2f3MqpqV3cGTR6zrhbDrKcJhDvUrqhJajKggf6LT7T1JiK5FPfLVRMaZhKraaXC8zg1PnDynVycHs3UzG4wDia",
  "key15": "3dkaQsYYFpy97QT3Y3pLShv2SKwNjJxxcGroRmjes9KSUsmqGvGaX7Sv17H99aFySa22WewuA7362fU6nbfZhGaQ",
  "key16": "36kX1FKRRT8fmhFLddQ6dAQuzWZtfnjHHeBzTrJPBvf7hsxrqPN6T6U3AXeroG94X1oCRNno19q9ivkcct6beov8",
  "key17": "bKvRZDQWDBpiRotPmXmZ4ZBcENjDejAhXdu52yRf7fzPVo6PJvzhPtyYKgZ1ecsyGZZ6cqryJBj5RYnzkHiED6a",
  "key18": "3HtnjDgPmPRSErZqK9VnGepBeRZuijwuunTG6XwSjFC8eZNeX24QfAR83Cs1Ba2ZozWuPmPhd9xQUS9DrbdCnXt8",
  "key19": "3VYw923NF2QtmjR3HxBMS3V7zskTeY3TXryFdcuSbXrBX1yemQvwSWT3Rw4DCxCjB8ZTxCVct4DLfQKC7f3pjJwv",
  "key20": "2jgZKUbRE5uaEUbLpBiUuwfBqBioVNpJ6X9z9MRdiawg8gtDhRxpi9tycTbkHVqp9gEEmZb2MT65b8enRw2DovaJ",
  "key21": "4vkoM49nw6oG3qF839oXTbvspJcaqmm79FDSf1SkpHLnCmaCw75CuVkoUcVazjmFoj1FyHfVYP7UVhL7L2qCrhd",
  "key22": "2dCcvtSSySW5rjX4GMS19tdhAj25ynFt7tffa3GTcYmyMKSzHDT7FLzikirK9WySpVZ6spvVxXyq1iKbgsymD7KY",
  "key23": "R2WQnGqMSdSfsWU9VXxxaVU7sQ5pz11tifjsGraokuJDk5LHRkb9yrEJS1Dd2nfzX4svGJ4SHnX1NaF9Ty5icXM",
  "key24": "3BEXJdvb7H1yZXDp1JizECVhcP14Gp2h3TxfPs9XCWqNtKqpZdKzYBtK7nrHw1Q4rTrjbwLBUb79fM6AUSm6Rnej",
  "key25": "539VZegufC7F6ShGoMf1Bi2psfp5bMqdZWPQZfUm9yZRheqF6gyKCnYt9bXPo6h5gYzpE2mjEQvJkgjj94kwQguY",
  "key26": "2bBZSxwFFn29AttrCzSLg94hgJnsQDCtq3psMqTj8v1yd5YXFoHBWRXCLmanT6D8EQehf4p4uKyLheKem1KaUMRZ",
  "key27": "4JXYPqBVxSgqoJgougApNU7QHMnkd2RC8WFMEREko37PEr43S6pmEikfQjNb7XaqaLBtZQJ3UGVkAfcGm6GFBJJD",
  "key28": "4SGzHdYRju3cbGFwZuTkadtMqQfshcEujQcZafk3aqnn31f5LHWdAr3etdwHQ9mhNXsFsR6mjdsx56VdSTKFr6eP",
  "key29": "5eQsMD2KYuMZ48d4mnmg4nwWCcorytY4A8E54yFnEt8kkA5yyXHUHufDnqVNABkUFTMWEqfuenmVWtczgZsCSSDT",
  "key30": "5uiy1koWy8YnF3YVTwsNTt4H779B1RzX3gfzUMXp8qWjdKCL4rdCdvPPAvFhFmb3s3vE64SkVnUYmd4cmmhH9YF9",
  "key31": "7q2w9ZnJxxmewcTmtCjBooMvfvfuPPiTBNzKSNobV2pCqUueeE9R7idNyWMq4RVkvQYaC3QqwAyPFWWg61DSMCD",
  "key32": "3uT1j4nB3EdKRLUKUjitejr19jt3DHCpuXaWmb3afjFLWmhBDvhbAtCYxLAQQ8ZSGAUCaGm94u2TXN1sHynuvqx",
  "key33": "26JNkwvc6vsMY7oegcisiB9XqosEjjjLKES3rC2ea5x7gvijBFwDwuJdroquRYaWYysF3Vvjj8qhrkVBxLoTS6pE",
  "key34": "5eRXjfe8Hfb6aDSTeCydB8hW5ByAp2LR3PhmFtsPmStf7b4KMTyyQ453Sq4yY5VhwuUuD4qe6eo1MQbiGiB5gLUA",
  "key35": "3K3N1YKtwWroGCZSX38ReYPgyueA4F9Uhd36D6q499VHmrzjcRNkXUk3ghS1BNLMsxMogHnh98LtAWF94sXEXdpB",
  "key36": "2onAYQyDcGENhCzdKRWnrvgKZ4ScsozCfebqHrLL72WhjCLx72LxWHKb97n378e51vU9LG3P3PdVxVx1sHWt31F7",
  "key37": "5XuBcVQiNvaRf9k2iePtmfCVGBVG1CzzthxeFc1a8msQtv92Gj5FUMdEnRm2rhbts7wGUXrFaTzfvbPjCznE1zyV",
  "key38": "348BRQ5AZkmhumjQFCdam5WcYDaLqoLvhN2MvujR9ExP1amXtozQoRW2Uv4qq8WN6MWTXH7jx8mzCKNxivgoajpG",
  "key39": "XAVzh8s1jXuLAi5fuK4zvASe2cTpwRBtueGkGnYAQVcxxYLEs3cFsJKqtWahQtjNKSLsh9tW2fNFTprgjxWaXyb",
  "key40": "zNqfYdLgtiz8LE8WjfQt7vY3wC6LPry6PoNTqmmYrF3UpVbBgbJgf6NMo4mn5bbNP8HgZ6yY4RWMZpwYUkg5cFk",
  "key41": "Q3JfzKWPihFFD9EzCYFQyUNYT3pXMdXfDp7t62jnv9PUo2HEpLxVR1pu7LTtVETaJBiD6cbzNxMVibUgHfr85Js",
  "key42": "5QFHBEGUV3NExRFskSuuk3ZMaB3Mvfva8NQsyqdJ839G8H7PnKwZHKmdaBFRJRoSi4PH3VRY6SF4psH7AQybq6BR",
  "key43": "gvnxBqX3h62QeRQC1MFnEtbCiqv8D9a6TeEzFA248XMRKzpNnRyhS5EUYvFKE2mX1cCu6To9dfNqZPHeQ5Vn57B",
  "key44": "5TVeB4Ct9mhwoAEahDAUHxow1PQUEzWmYQQqRZmjXpazZD9VLgWd2UMsu8LqJbAGB4qDny93ZLvvUvhyiUKaUhGD"
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
