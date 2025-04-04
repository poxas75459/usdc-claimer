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
    "3MhonA7TaqMF5WuxrTc9ZWgPcFkcDSY7EAv5ma7ETXRunKTfXqu3PBCACP86JhKazUvtM81ivJ11oLuWhUnhs3bH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEqsN4tRU4YDgenwP1X5UPmJY895VMR561QzbndYobFNSMxYWCtiux5DZuhG9saemaJ2pwHMbz2PVMbu3M457tZ",
  "key1": "5fKQKWAZACVL4LmCLKEXRrj8nE7kmy2mqnq6r5fMJfr6nMfh9fm6cEp3jf6Z3WeuFydB6DFxB9sdiqoH3jphAUNX",
  "key2": "4BwReUwpLCrPV1ir7cTLX3hEjQWNhtNuoSnV3qDoZhpNaCTvbCFU2gwErHBhBQ2ArX2k6VLK6tfirG4KH69HXzZE",
  "key3": "ozbeU6T5LmNkWDHBNbt2n2ujjusSefC4VkQAots9K8Pw9LRtbgmaVQG2Q5Gey8hKB7eV3EvgAQdk8dghGaykr9v",
  "key4": "4JTLx9B1JqzVioRs8gartn8t4K88iragM1W4xYVzSNMDy5XvbhZQUbvyfgLwt3bwArHCzdQxp9HDsebMr1R7s2EA",
  "key5": "3F6zuvjDcRJdkd63mSRcgmcQtEcbFdFUsdL39vhvydJp6t1M832vBeHqP4jdvJ4mpf8jDnvHAaewysRB6GjQyrBX",
  "key6": "2djFosFBkfh6MNdRCexMwGNuBRdHSCvMHaeR8h7BoPpxXDEzms16YiEb4wmoNyKdZqv4HK5CJUR6ha1oWVVffrmn",
  "key7": "5TSLSbnjg8Bzhp4eecRtSb1iq4h7c19Wcry9wFaFddA3Wsk6kNWRFQDixe92XkX9u9iiXUQdTLojPnh6Z9FZZ2XC",
  "key8": "2uhQHAhYrBfT2SrujQzm4rDCzfdjFmMYsFjzbMhs38PHLgigpZHU6sqkZVBoDBMVDAvuQdDMY6WK2dbZkwNsfEPe",
  "key9": "57Tn3pS5kHzP933d94y2XU137q7xjC8WzzAfro947W56WQcKjRogn7aV643hjL5g86udna48dcMGhXWNFb2MwXx4",
  "key10": "64GHyHAcr9jZW8EcuK5KPcv5xQzgPnr2VBHX8DYAsXf28tkJZRXn6V95Nuf7GuSMyjXhCe8PZbx3MWVSfJ6MkiBc",
  "key11": "64rXskTzhucDo5MjvB3ocvmVFNQp5M4W5epFqtKcjCrbmtUbdGL82oZfg4ugdmbKcxggiGE4M4RyJE9yBw5nysfg",
  "key12": "2rfSiHJ5mQ6yYgJmPUbTBkWAo3qeeAUXMdYZtvoHRfU3B4sg9QUbhvezYz8jcb2vRo8FFeLChfEJDxuQVbKpsJMA",
  "key13": "3Gob8FqnMtVG1L37vtQyE1yz7m2vcZqYnrstSg5WvjC6Nf85Lecs7m8qirmdEne2P7G2LpQxjmK7nLbj6L8ZB5dA",
  "key14": "x1kcP2L4jCCLNrHPavYxASPRqRZLhbiNEEnHfagbS9DTN4vGSed5cmUZ4FcKMhe7Hw4zPfFnU8RE3M9gHgi4sgS",
  "key15": "2Rvt9bckx1WZVstefgCqUUwLbuUmBJEyVRE1kTQbZASJzQw4GGBmGRggQTohh1nZFaRXtUcQMKXuVgohQ8YJQvLD",
  "key16": "2rabVgJs611UsQ3SpqXLQfLt6WcbbjEHwj4EtnNFe2cWNfqhuCXMdhZQvJiV7sKFDmrddThmAn9jhEmQbk2yuhs2",
  "key17": "3FCiyd6bo6HCqMkJNBbb8wh8wbjkroU2u1VmjUCdeKvQXwxbuBdx5HEX4wT9XqhAUWUL3wha3vB67HSJfsaTvHCt",
  "key18": "55QRUA9Wp2fjkdqDMfg5e3DNrzbY4qbASfxvYtdZpzsdETzaVb6oKqSyQgeCFqkJ9ziLifCNc4BipuzygFV8Nhig",
  "key19": "GomDYK4y4H8XBwfqryodn5Knhd3SUPJySgXR7nBKDgYHFHRPUETGu5f66LGGGkbMbiRKk9GmrE3kUkrhyKnBXpd",
  "key20": "af95T5K32uQUyZgCdAPy1E2HUMso9Dej3L6kAejXN2dKHn3T7D7R1MQCH3fc1xjAELD5MmKhxt9yA6c8ujmD13C",
  "key21": "2hnLiXPS7bSSgAo5SkhGHARkBVmnkmyfF7iKz5BVaWSFc6we2qKofiCBuYynXoSWBLsESKvWwYvxEHjmwTJKZ5yA",
  "key22": "3qnvVXj38oxmZq4EQacxzfDPANbSGP9bdhwdei1nytm7WYR6YxEzo9Hmz2TS5XXuTBEacSuSMqdPMwwpVrKjr2Xi",
  "key23": "4YVvs2Y1kGZpKxh2Dp8LXyYzj6ZfzQDq4J2oav6onbMeBnWFcRxpyFuLHgfJZxzsnxHbthWPqgtM4UhwxRg4EXH",
  "key24": "5XGkoSZtMT7LVbtCrifVhCpp3ba7APr9bfek85kXZvHGL71XRwzcDWRsrV82a1vVjZ795uF77EGLLBbe3gdFAU5k",
  "key25": "2h7Gmt7KpK2ZDkmh9XudoXg2ir2b9goA3FWTNA2kBRsDyWa85f6EqCu9sKWgU92T1XZ5yWYngjgRmLfttaCEjGxF",
  "key26": "2j3Rk519XsCxsPha6YJaKsxFX15Bsxh6tqD8xgy7dJ9Hxz1PPU5tGdWUaLCdBTq1Qz2vDRJhY99WE1PjynyHQKmR",
  "key27": "o42uSp8eG7ZK4gaMwaHTBtwK46xax7eb6heSoexoBB4nnaCnpMH3byDTJomZrPMWnuaxSNSud55Y11sCPreTH9u",
  "key28": "WEZMebARnTULMAw63HiMBvHt2wFcxyEqX1C3tBKZgEefUYuDBwgmho7PbXTkUg2HdvWRYZchc6wjgY8DqVeGbo2",
  "key29": "VGJxt7Ls3iqFz74VQioqt5Fg8oXEHadC8H5ZBE43pfakCSj657jbkq77ZmuBJakx4BabsLFEnWPHURatmerCCST",
  "key30": "2jneth7CoPUMHVExPan1cjYTNbGAbTnkZ59zjFCBx93T54CBATsrUX3nXmzzgLtDmLeEJwtcvsEdv4yqpsKycLmF",
  "key31": "ksmBwoHBsvvrcxgUNphoupvtrji1z5TiRRZgKHC2odcaVc9QJWf3WRna4TEiEuwW8HENvrce1jXnkv9eUQK4GmY",
  "key32": "2oWc7mE8VHJC1Bv1BETN77JBe7AW8SuHNijfLvZbcJcnxRMFYwFPyvtQT8o6uuGgxjamigXpt9tVP8SKzYdHNdBL",
  "key33": "5LDNKsZ4FZobNFinnyzfrUhQbL2zuMfaN8k8LHXVSzk3aWQLaztLT5xYjXUiPb8wBk1L1Xv6qKebArVr6VxUdW3h",
  "key34": "2k9b6ohkQXiGkhLbfPrXr2iXeqcqodi2VVxxwG9Ep97EYGSvas3bGGSHesy6b2GwQLRHoicgknUdXttbHVw1E8Wy",
  "key35": "5T2GmPZC9ztfC1snDom8TYsArax31Ci6VsbPeKAWiaX2cHHLDDQXgL77YK53UmXYxECeM2jkimKQ6AQht7ZT7NDS",
  "key36": "4iRFuAcHKBK45xBFbugakYQadw6wXEMUxDLf14SvToty3DLH3gxiY4HEoCDcjDN77TNtrZNcHEkFgHBj1gzuwkzV"
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
