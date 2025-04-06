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
    "5i7VDrQFMET913uG2cG4KrezviaYZKWG33JxmZZVa4hbnRZbeBqeM1j4d1KLFXnQ5yadPc5AiV97gVqjaQoz2JaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxiVMRAECdURPvGP8aHDeNiDwFUvMEXq3gURVeuf1ZyaKHqQJbhTpma6D8iYkeoQXtnZd92Tv8oMiEAAdUQBJKP",
  "key1": "52ZS7h8guJwFKAuZJnEXXwBAbzm8qC9JQdNzhfdNS72ZRtbpfJ4VFDHdh1LTa2hh9KAteCkYahGjmnG4DLP5eazE",
  "key2": "3WWwvw1T88U979uCVuifXMkWuTNAKtw2nkHYkUFDyqmgXmoJVz2ywVM6ACx6A1bmochmcnRC6co4oiqC2wQoPfSJ",
  "key3": "jDAXBeGT9aZXgpXCw6p9euto3whfmwreaUfW9FFGG3DzvXRx7WWwcZ72er1km9DBqHcmhaT6gg3GAUWrxaEBxLF",
  "key4": "2WeXTUNy62eGBMmshpXiqWznnuYjyJojgEvuRPEMazDnksqCvJHEMzifWWYQm2zmxM3PtKuC1Rba1pgGjfwjbA6j",
  "key5": "36WNDDzgjqyC6FsTe42rPydY93mny8Agi5e26QMzREAqdVCbiEb5m1nhkYU1aFXr9k2Dgy1urF3Wkpqa4fjU7S24",
  "key6": "4K9nBCGq3RUUzEwFs6mmZfnpW8KdHFDGneGDmuMe2dtsTxDxhBc7Dx8duwpYH7Gwq6YLiGscgSYiL8tJzJsT3Agv",
  "key7": "49LhBcHmwtdV2i19jk9w3yZWW5C43UFEipPgNpTT4RPE1a94q87LsJWjSau6PRwZGxqCMt36BuHHh6absKoF5vNL",
  "key8": "4LSKBMi5hVE5x9pgTM3qGZwTPP9TWCR6uG1211a554jgUNAxbcXpcxcBbnv2EjTf1TdA1yqVXaCN7Ufdc9gKri8D",
  "key9": "5iWXVz9hoS3D3VzDjDZPxXCDtVASGaXW49ARnonSSx5gFNDpX37xzvZ1gbegq6f2s21Ujzfikv7yAn8eCE8xwUAh",
  "key10": "3rs4Dea3Gv4tyywVveYxsoRRS1yUHrg4dCdEANejH7PpmmVzdnffsZJCvecqz5m8ZbAcgMUrtBryHCXpEaDk6bNN",
  "key11": "3RqYTR383AD1u7nFBPcAfumMkQNCqo3U2reRHaDmqFSyB8vbHMHo768Fi1ZqESMyCTPNmTg4K7wNXbmDdAB5qigN",
  "key12": "3CS8XGtE9HgxEA9QMoV5fM9mJR8zUUCKUaha216mifpCV2AqBoV3H9YvfFrAFJYVdxBNHxvRfitWyEXk9EVBoUpx",
  "key13": "3sJ1yAPbVK8a8FRYu7hBJCngm9nv3gm6WtwCVt2H2gM5AL1ikCx8yhZSAfzyUGED82ASCYGTgf7CeDiFrz3hnky2",
  "key14": "EyqSncPuZzNRynY19xmWB6mj4Se6M17EYHBPkxCNBf6wHfh1d3GL2bJRXhk51koDVZf58MdDTRzw4YnYv5xEmEL",
  "key15": "4r29xvgtPiaobo9oUMcDwzg9LMYBKX3gNJpETmuCfsMHFMraUBpEcXPG2emZKzWP8kPcj93Pj7UHUSGTxJgMDjgB",
  "key16": "3nKNYiSxaXejdDwYeW8KUKJC9RqyXZnt9HWBzyn8FReyCwYKnTkFNp1QFhVAqQL3m4wFgX3hhR6VxDzu3WTY8HFH",
  "key17": "2k9XRijUFETLZQGMg8Su54DUVyT2sskjRzziAufDvFqGceqHCeZyoK2RrUxupWuLoT99EfBazZQTGE4h56b5itQf",
  "key18": "4JsgeQ8qEE5qkSdeEejYaoTuC2Zp2epy6PLHwDbD9NrPsMZbKDwcjbKJaUkQCMBhSZxhFTT1rNHUvmWXGP9HjWja",
  "key19": "SduoWHTNYnjPJweBQBKCK3vgwGAGxhibytHue8m2kWcjGtbcidTyBSNVzxD2ct9ZXRnT2h9VjMqpwcn1BQvDARP",
  "key20": "5Hc9YrT1j2cUkbjeY67YPiNwAH2dnkoF37ySUZmb3swrxEhokd5LGpPRzLMW5TtZVNykMPbQskv7pX6tYL9PqR5R",
  "key21": "51cS3wr2hAQvPjdNRoJfFoU4UhGXB1XubVqCz2wUewUjW4wCMCAZ69xmdxTPz6vjrYVXNNgNKf5wZVbtyjnBZd2B",
  "key22": "3SqsLzpyoxX4CMuL11u7eQ9BkHn6U9ytxWxrZzFW6vKnJq7mjuo2T7egEEQKU2UKfZyrhKVY1GhmMBKHEFqFsdZT",
  "key23": "5gwz7Fwc2d3nrs4bwGztxDyQQmZ41vq5VZqZq1pAhVbvYMvsxFD7iwN8EcbteivwTgjPTXyb7NF8DTH9G2ejnHwV",
  "key24": "HWk8s31YD9Q1KCfBGF8eDUFpAuaMsm4jqWVKyTJkSjMgsow7uzTs35oDaaYz4ffKcw23bFN3QQ6vKEJP2etP3jg",
  "key25": "uv4gZjxCqdntcsSFTEgTVFmBjwtiGfufUsGXrxz4WVk72nGiqaqQmQ2LFCheWouEPeGgdn47H1XGap5NDffg5WC",
  "key26": "2tYGenJTRCQazJGWoGxXJk6bAzT7GiYKsmBiVikFK2qiaE82WycoEJ6axmpsi8nMU5W2WWPh8RW5KZKcg4u6KF1T",
  "key27": "CQpmPvu4MH3XVwYhtBKGUYveeb6yV5u4rLaaV4aK3hCvAErn8NwyuoAxpHhfoB7tsbNRJWqkP4qXMHFPX6wfo6H",
  "key28": "2jGwWiGfue8bjQAQXRb3KDw9GqoA8DBov9Sgu6fPfzei2tCzPucvaELkKG3Jhn5JUck85JvacCbHRMYYYKtzhQiQ",
  "key29": "4XXyK56oyKUvnoUJNmPF4pL8ivijz7wcYgS16pfuxRhbpqjWeiYPYdKU84b1cTPGuSovFcVGThbmTE9UEW8FzPz9",
  "key30": "MH3GjwXcn5WJsJ1tKa4xW5DciWqF44sgjkna31qjqB7XM9mqoiPVctXLHpSkAgs4XcVa2Uuu5PP6rFVY5jCbc9B",
  "key31": "3dgei96wqvgYFi1qaoUMtR5W4oUSaEkFNcMNc5GAPbLWqfSyexK91mHjQaqdDemjGnLofDbGD6rGXUmkkVhQzMux",
  "key32": "2WGErdhLPdeZVrq7EmkXHoZMKngU1u2KZypWza3MR9Y8nXGskTiP6R2PXrjSWxmJ3HTjpBxJPMtAFUGNUD8mzcuh",
  "key33": "4ke7VszBZA4wHVnqyPgr6418T8Q74CQntd7fnjDEKF5XKCqV7PyZVx7T7fq1WZP6npa7QSBsEasoCSyz8vR7qhdo",
  "key34": "5P1J2VsC2u8ptXdyAd2jFFq7D8JAmR1auJHQXqjEKzmAttrUmKtLdCCx99wqBMFpEarmW3hmo32NAoRNphNmozYn",
  "key35": "5UbhaM33aYhb1H5PVzTvzc6HXrRzJSfg8jG5rHBmDLdUTwAfeuLqWDxL7dDYQbgGw8MWABTLH4tWMKjzcSUP9i9o",
  "key36": "2kBB9dzp7uhFgqikWXFvWDD386dNUKrjtAqm7LhTYCgdgPTyhd8t1bZFL4HKzpapiPQZtTmvpegDUeUGiWBtfkom",
  "key37": "5NFS2CMkpWpZuRmfz6QBGqsnw2yjn6a3qejAYD2ZU2NNXzVPZja5SjGwLbK6yNzyurdMWY1AcUwgk3FPmGw9EERh",
  "key38": "5hPno39iCxQAVcLHi7o3GiTJTzmoYBPDHNPXHLNufsYGb6k5mLp347DBh845guFyCBo46hnxW49iBc3r4TQSt6nS",
  "key39": "3kriqhXDtQTKndXQs3TsqtuA6PG3S2XjpBHVesK19kXnDdRw81aQrdREN3bDAxyJDvr2jTSPrUP3dz3jxA5M7Psy",
  "key40": "4qZgYi2uSBqQHJydXrykP6hJdGEcAaWmKMMrsyvbDJZ1WWxFSCswhZNreWww3vkNJC8zYgdHCMjkPpyJqyr5PNSN",
  "key41": "2sSRS8EDMbkmwX3r5feAsE8ZAFBgSP7NeQFkWKyMY5Yow8q9NFUKrnxyB9TeV8aMUoe4JBeADQVbFNAVSRJ3hAfG",
  "key42": "5ju8iiyndWHJh5WuMmnhxZg3UajzBCQaonxnC5FnqfnBa2kEfH2mwMe6QvzowZd9WCnwEmaJ7MhyAn4SE4N2Gakg",
  "key43": "3mo24RZxGwsatiSYNvUERKiXGURSbcfKbz7xgA675c5cfiJVkPTfDtUUHGqr8yeR7MUuzBE3U4KoGCMmipUdNc98",
  "key44": "3hcwZbsL18u8t9ibEMjBt751jjZmKZRfqTeaU4uH6aKagBMpxLVPP9WNmur7CD5eoNuN29QV99iKjJNJSY4Z41pv",
  "key45": "3rk5D9zX4gGc1h4nXP4rMyDWiwTiuNk1ApbmYUdKyrarfTFwAvhjEhUjTeab6S5JZFZXr5i33uUh25sxYtw6ouWH"
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
