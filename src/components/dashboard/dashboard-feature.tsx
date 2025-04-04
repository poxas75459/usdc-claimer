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
    "3L8Zeq1EXq4vWVAXTuAsug6CxBo6QSHdngFsSKGmBGTRoCnyT63ibHVprwKk94h762omehY4kLNran2z6M5VhsQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227kYuHrUyUcstHoCtsa3UNbxUgpb55TkBK3c9YPpTrGNQ6GBDTteh9bahwb5L12tMtA4Eczpuu61RHAh3vLgwv2",
  "key1": "65m6aXDr1Wa1QE3UGWvExCJsmHJysmjb1Q48J5PtEgsVEdCskdiCD5qistyTnutpqf3HTtVuCJHjSPxyp93gFcQM",
  "key2": "3yXAzWLSMuPK9PfdFWDbSMXYvQuWz1iAaM3rhRFjFjc93FutqnUG5M4ona8Kfaxt88Fg1j6bDYBGbt1S1W2rpLop",
  "key3": "5kCc3EyjsZKmfgCj5uW7ESq9vPwXveWMT8qqpyvKf4poX7nJfGk6iKBFYhfgdodu6qBxTMfZQqMKJJpyECbUvJUs",
  "key4": "2zR3fWdBZpWuDkY3QY9LYB67awuyDuPcSPRPmzZDUC5RJuKEjNgwZ36c6gqdMwKmnxQxKrjKZ326rZ7NMv9w9WSS",
  "key5": "jtryvc7cndYwYWfEbEQ3UAsGid1ALbUBnhRtC3cjNkcR8yeGwcvGrL93dVo2ooqBFAdsLB1kmBALXB6FD7tkLxS",
  "key6": "xcfc7Y3wpaQDePkoaQ9HF4t3hdVQMc7t5sS2V7SnWfs5kk3eg32cnWt2VdzaTjEE5CTHBELW84wou3PWaKRDo8N",
  "key7": "4JUpVtEyxGbXWF8ak43e848nPJtLfWeYdnScSEw6ZmYdNx7hAJ8SvWqK8KMVpi2L3n8odR97S1yRhAHoetsPsXkP",
  "key8": "9fpxjWHBf69uG5U4EZvPV3sNAeRSwJSiUHgugdm4cUpgGdxHN6DqbCBcg6eviZ5av8QHmQ85wzQHDsych6UFjdG",
  "key9": "2D6WqpdfRaJt5b98NSRvLikEJynydXHw4LWfNN67ykhF1ioBjbjQ4cS3su3pCCNc4a5gbLWqs6tqxN7Kbto9woDC",
  "key10": "37syv5DZds9EAYBV3hEqJVc1qjMz7E1MbnwFeuyUsBYGyrH6eiwVqaw3xU23UCWrKSF4xZSMJLNUUmoTg3zCEAe7",
  "key11": "2LJzw7DiZq9wzf2sJFhCvo7yCyB25hUPmNfqBqBvGbMd5ae8bscKSsHUrtFWDAfbNffYCxd64nxcavM4EfkZGAKq",
  "key12": "Sb4rS2243JyM9YpyNxXnRLG4Ng18iGReosuUk78B7GN4JcRre45wk61y6mtRxzxvVWgroWWww8SaJvoA7iMFkt7",
  "key13": "Mrv3dn7oxaULQtnX7WvUdiwWVUChkjhHc4pcJ3MHYNVVp2oj8c7wMbLNUTkrZLXYLvSrk8eYwVVUSSCuk9izgWL",
  "key14": "5CviBdbXMxr8W9sX1mSbdS2PSAQsWFRAsR1PYS5F1qLWCKzW53M5T2vrHF13eWbnmRztk4M6QoyVVpefA1w5ok34",
  "key15": "66ZEcqDq6Sp68z4GjLvysxcAYGdjwrNnTyiUe6JqA4oVY9mvCX25rj1YVHjWT1MVpi1C1Vs5RoFoMetTcPam6SM",
  "key16": "2tS4HqNaWyGN5byZ1af1NbBC9ndEpnLKAnzDxp3cGZGkrQxPYxkHfypnqLJisTrzq5NeKKt8Ng8AwuVEp74C3f2Y",
  "key17": "2bsJB7oeyEQiTivJgcSBqER4nS61DreSgWWEpa6qeWyMKTcxxMTWwEMs6MNdoB4Y9mMGuhdtwnPpm5mrJk1JKd4a",
  "key18": "3wXP94ZNKVLu5wgZ4AmsQeznoU9TtmCZkmwP4ju1EwbYg8UJzR5EWTfThjt1SWXWtpXTRj3qQbDkp5552JHkTwm9",
  "key19": "5FFZR1Hbk6jvj81SZ3qyiw5yxf21wDXw7vzDLuMDt7iX9AoarqSR1XxH9GXgVb2n7mn54s3YYe8TDQLCBgr4SKV2",
  "key20": "HaPvBFZQvHTiKHoQU6BLNbUaEFSzUfvNms141He5Kmysam5MPUiwNCUv4EqhTSJATbopYM3F5ZFwZJbKBueReFP",
  "key21": "4dgR2GuzbDtTcWmMpE43SftkpgMukNzWCojG1ccWUMCE5Crr7yV2uWVQYf25tW7KARzGF1VfrvQfUhtVQuCYGkY",
  "key22": "3FKqEWyqVEydARAcsMQBCKL4BcNDrgwMoyVdK67oAeLUzAHMvibDFAyDytfv5z12FSartagzjCYcUoRsWBm83kiv",
  "key23": "5TGRAjyRNUGmEtZwg21J9X3D4b27GBnjq7UDFXYb2GUFjsxxuFxSRNYhtPzaUqWYgP2QUH6VNatXEeV84wNMoY1i",
  "key24": "37CPtsbtv6a1LFbyhLAx3GVm1WZhCvi23Ai7CLKNBy9ZkPW7naeTYtA4RsekNAYKMvii12129fWuWf94RYieAF4y",
  "key25": "24N4y7NhMcbyhrPRbMsR1YXUMh8xN6cMrK2aEsQgavNX8wJQqK2kcipixVSBvsGvJz2S5RpJL6MTiM2AzfX66js9",
  "key26": "3ZNgcBfUGgrFEftbtJQQf3vdM5iDgsfKsztkmaefUM7RqGkCUJYh4TjSfXpfMPXrWDf6gsv7EJBw6jSvo78isFub",
  "key27": "5Jxqpb2kqz15CyRXXRu2MubCgSw4ofWPdgwm5B4WCbMsRUYaoocx6f2b3ikM5Rpp7oDkmkov2qKW3wk5q5DCXJYn",
  "key28": "2rG1m2sJu7LvqPT49gV3UM9Gn7fk7Rha3VMgRuxvHAPjQZZhPxaXqVH3uiEXRiqVhwcyW2P7qpJ7SUceehNh5y4p",
  "key29": "5rVSvaxymFebsFXoLQgveksWZQQbWgkRHHDWM3o36FkqQVTAWSzhsy9FmAZ3r4QBGzp5fBugnYwWc5pL6Baa2npC",
  "key30": "5PzJUrxBSekUz2jTQq8SLxqELBTur8LwBtNkb89thvm95MRmyu56MzopzwQd4t3ayEai1oRnrQVNFKBsYoa7No3W",
  "key31": "2X9V7BfLd3PE1sWDiPRfEGJXbobef1BNuduzZqsxg7aw5FGPyx9mcA4xH6hPfssPJySoLuL6QzY4wT8T6j1Q7tjQ",
  "key32": "4S8GdLJHhZ68AeoVwpoa7Kcp9bdtmDZX96XW1L7USxph8NDmpeZuUwUbmznB6EJB7cYoKPdx2gaviFGLnKYeUK7Y"
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
