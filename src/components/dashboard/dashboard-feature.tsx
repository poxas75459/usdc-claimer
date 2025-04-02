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
    "4EGYpFFNQLp4frAgWQeJT8DJgqBRH1PQqT9HkuawhU2JSt581jRRTWchBForHdTafNLfKNSqcFsDsRNfTnqvMBQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcVPfxuZephSmestdQDDdMLpvmPCWxMXgToyqpsTuaHxCEjtUZ3hqR1vYju4QRpsksv67APtSpMvRKMziTb8N7Z",
  "key1": "2zWZJTb22b8T2ASWnrwGisSTicekuKtMB6egn79H4ZP2UVrHF2rcPMEnUDQdZAhbdhanU4a9eViWeexJX7oHuzvA",
  "key2": "27iDQ3Ci6Zgt4qxhGWsoQXkGvnv56opaa44vtgNqWnoNDyLu7u5x7UG8BgXYbPucx91xV8zCYP96adUY3qguoCgp",
  "key3": "qk1SyVznt1fSckKRAnBS5xCDG7DGoQ6FBG3dWkzZ1bdm2kfnjUZmhhAm9UuTdojAywveGeGPFyLmtXM12Y95vrU",
  "key4": "2XAxncVttePpCumJDVT73dyLvTsrtx1x1uSm8V8NH9HFWuQparR2AszJwmwNjAWBi7TJ2GHSRdCdGHvQ2EB1DWS3",
  "key5": "5FEZohM8UV3mLR4tj5pXsqZ3TgZcW4eUJ33fxZFTP7KbbuRpqFSrQT2rciGVcrA8WXcmNCFx91v8thvqHpEFU62a",
  "key6": "3b5NtKwjuZBmzX67xJpEyhRCCCa8KytwUv9dTxxugHwHnR5dt7TwpCde9DGEiJsMf4qHp9pLsMUDFbGxH5t6nDcs",
  "key7": "4rjqR1ALkL5PWsgVc9kfgwHGzzLLUHcadWbCrWyTWPnkdjhSHiMyHdhJpKDCWdUXwEpeXH4GGPmC1MJKvwFDdVF1",
  "key8": "39S9pXMoegVa5rTvn4A4oZ6qi89fatRiEczhw9aKABQucZnmT9gupiz7KBNQUmddgmVbxw945dgYos99JA8TAoRx",
  "key9": "ibqaBAaFuzCRZ73orJqjUBFBpDmCCjj4gHg97r9uC9FzscmHnv7Joo96YrSNRS5hkLNJHxL97aDLvCsLFCNVYPv",
  "key10": "3ZNDWVe2U9Msa8ae6RoPECopUt7Dzg4QKSHm43tYdKhLC8DR2CQ7jSo5poVTCy3yoenfqrfVmShi5cXiUiEhxFvL",
  "key11": "3zNWZcLVpVYhBqhFmFQRefH4qC2CbFEGq59tkbcdTH3Xo8J3WMWE5MRLvetwpgHvsZ1ip9DTJdza7dK6MWRPGnzX",
  "key12": "4fsZpx919dZeWMJgwZZmerDEYESGQCo2pNxBbJkwD1Zcv27fgpiujSXr5nFZecw3VdF4suievFz75gRbVpnKomk1",
  "key13": "5feedLsarPssA7PFn3sMAGXzYNotvNnWiCUHtCra16qgxbkRP61cyASweNDBjQqyp1ADeBTRXKQDQvJPS5tLFjGw",
  "key14": "61qwD9jGQMaXxGseE8NGAYoTMobsGj9VDnQYViEfvAHVVVXRugeRXveoEDik9vQYerPpyETRe7pvDSC7kbj9Pski",
  "key15": "3cu1BJ5MaQxLyEEiB8meANKpcEcBKusgKsC1wXysDtBLvkVzSz9dGmwBYkBXtsnfyZkeZ2v9KCMLCauLythaPFJH",
  "key16": "t3ZLhtQvqMZpd7W8ZZ5yHbe2CcWprZi2uURoFcuCoJd8H4uSWCp3HjqBosmQhnHWkUiEPBKHDEfkU25vABGC4AT",
  "key17": "38HYfRTQvwQkuieYh67cpe58ubsXdRAnhjFzjNpAFFW5XiFzdvYPVqzXFubqh7fsp7VBREmtyCJd2nvNZryiuGEX",
  "key18": "4dkJZS2dDsM11appa33k5EuYyBBUtbgBLadvAGGpDt6hu26yFcjekeGUz3KJh9fbaAVFUSH2VY5yUFD5wzDSbkpZ",
  "key19": "2vnbFCoym4hZE6FgprxGSzUgpXE9jTJTuwHn7c9xM3H3kC5upGhq8GsoowACJNHmgJ9E6PfwZTvKJDuEmnkiQq4t",
  "key20": "DS7nvNK2csjsqNmBpw344JXMqq9MGHgozmwYnoKnnaNxJE5bKCTdWhXZrNYAB8DBSwPgMuv7n6MrzcLu4qNEc6u",
  "key21": "gd3qLfrk2h1TUD5AXkuABtsSCxpAzjf1U8XPDAbdjC4df6pohsfWdvx5z3vdtzSxYLVjXJNqQFXcQLCzJrcY6jY",
  "key22": "4i6EQ5GhQ2XJXExZkGQJbrZQqPb1Yjw9ovPt8TiSpT5CtWqawgv16uupugs4qNmxLMwwkrLc4ADv3bh2vx3YvBQM",
  "key23": "fbcV5iho43eFF7V4XsozWTG7aD2VGkNhGX8G4bmtfqSk9i9EBLuu2ErJcmqXQivDzuJQVAMQ8VtzTEGPeMKhyVB",
  "key24": "5HF8Wxmzeo2g7HDjEVLdX1Nauu8CnFMfucQcC6GKwiJnJaSaENXdW2Ao252kX2NEt8X97Ju2zRkAvhL5Gu9xyYS2",
  "key25": "5oGS3J6ak452SVjWiaZCWLzi37SqoKAM6VKAdcqEoY8YyRq5qJSfn9icc93Va8CzGP3ffdRheSb7rpeNiMCpdVP1",
  "key26": "5naHb6iPpW4p7yajpNn8ocqjFfhqbpxk6h8SWgyRVFTCPVQd5Y3ErPAnCoPYNTG823wVdEkWgLkZBRiza7pwJzsR",
  "key27": "56kvZJYy9LkyJLD3x6bp73PyCnrSGNBypRmiybxAZ8h4m7AR3isrNwNCqEzac1GKiXQo9j9YVZi4RNgyxACdHKzn",
  "key28": "3ZsDjTpQfa85eD7ra6GDkzVjtozVkzEpKRkmZEk9sn4aneH2rkra3sVqZjDfbveNQ4ASdA9YTR1zS1m6EwjyMWkH",
  "key29": "2V1Q4Q75iqvgHUfzPDkRf6HKQUkYv1esPxaU5R4k6A5FnRgDTVmMYG26Mor1XqGrqzKvjaxd3BqCw9t1VgKMWkQK",
  "key30": "4CmqDewS2h7bP5v4HQNpWRfDjHYwBxyMppxsg2RpcucQye5niY1n95HsFSxceRSt1wWjMK7faGgfNufoeTtXx84h",
  "key31": "26nRGhSeEWcefwx5ETeSVhQpcJJ8g4di3XTYNKbfAUbpSBC9i3zDLTmZ8eKwzC3DqebMUnc4A2t2zNUwycDqRMAi",
  "key32": "5qhiyhnPX8hrNbud61Dwcx3Jq5gcjYB8C58LHj5zfGEosH6n5VJTUVH2PnkJmGrk6fYcAuAe56CUGAEHB1pXKTjN",
  "key33": "3hDoB5YuY4fi5eU1yoP5YKagcZZeJwFGscrDsYas5Qu8ivQJpFJKH4FTGT2swt3C5W8ZTT3DKrH9UzcwB9LWLREH",
  "key34": "5Z3FnQJbqUFo2txqxQAbhYws7yY1ho2HkcnmveHPQNqNNMxADcy8fMg92GNCwK7NHBz159efZ5PnFasseruatU9e",
  "key35": "5DwuKAMH6fmM7R5cbdM1uSXiLQPYurRdefQQ5LrN2QQKwcY5kTmQsUpeGDWNDbizYxbKZD2mpaiATTofTTkwPuMu",
  "key36": "2S9BLoGoQz5ufK7caA7nK93xapjvNqmQVg463QGafRmZtjoNVBYXTyBCQcG94C33DDnnrYW2FwTPa9sdhUVyk1VN",
  "key37": "457NXNZNWp44GqLxrC1oMfmvN5c8nwr5AJzzf9Fk6hr1NJziUuaVT1k7RitnYC2fAFhDrfwuBeHKyA2UhouSTyDd",
  "key38": "8H2TxS7myTXKgWUFXW8M2BiVN93y76H5hKQrcrK5TjqXXnFdNRbDg2Qz9eQ4QPaheL2DcA6CaeHPKajC2rHRd8i",
  "key39": "w9YukzpNHdxMgikBvMScw6219GPko3yUkAHsgMXCzc8rwy3HMoUJNpQjpyakgwjCR9CV41oLV61rx82Frurrswh",
  "key40": "PWm9Z4DhCLGzTnFnxQPNfnhYSyWBxeK36Et1bkuZeamt2yr3fGXjQWSmJKdZ9T6JsbB448tLpKR5vTAhD3GZwJk",
  "key41": "45PPWEXH2eXF5rtGHMWZStTxRBmNwJpJvPN6J8GC3WrQPpNCdKZhXKGDbHR81KHmr8kLZkEiNgEKEF7uA3QPD1wF",
  "key42": "4iwoMx5X7jfvD3Jpum7tKMKjoksi9rmTLFWfZNP1BSANKyYcTGh4Ndywef7kZh9mNqDJTyLKNRqBC1DowTWyMEjf",
  "key43": "5KYzWm6TA6ZgDTU8ESpd5t8m9dDfLp3H1eUCXVhkASyARv9Rn7LAgSboYqE75rprzQn18WJ7yzVEFoi553VXposF"
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
