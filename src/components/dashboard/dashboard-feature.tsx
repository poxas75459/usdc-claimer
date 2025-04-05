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
    "2py2sPMTfwHvPc2efCuSwaxhYLxQEZAM7LUdwfUqA6JMDebzw5nNL9h8v25PE7cc9U1uJxtsoH156ZBeiS1Dap7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZpoU3uHZbbLWrKWWHZPD6xxnxemKjdq6w99Rd1FwMmhs7r5UB9upNZNK9VvXmjqxiwjSucHNTdASUJXAdaZjj5X",
  "key1": "3qApAWPDrQMGw18SQcA7orJSEFCdRagLfTQDrhMb7MCJpaSfSnqigQGMbmQepXxWLvy2qgUnBhZqFYKj4MZRLm88",
  "key2": "2qf367YnZRCKkdtCVsi8hMruyQ4s8Q139iagMf4WiRGAKVKFRApQyRnHP7wSataGECSwHri2VWeQWzPp9VtKZ11x",
  "key3": "2NkQ6df893YFhhuGYuS1ZgqvmSn2SFonCBjuq2Jm2vCpC87R4qvLufJr9K7DAh3FiRUJrNWk14q8US2GHpDV8PVR",
  "key4": "4J65WekXM2gA7KkZyhkC5YDykwiBu7hZeMG72URHncB9Q2HNzXbfhvQ6Df1jpeKWwrd1uzHqHrUKGxCN7G1ZiVsf",
  "key5": "3jYvBAJQRQ63RkMGWYYMPciDLptAtpnWLWrAQGyaDP2Vs5JsGrpipTiERhqkAUDW6wejHQFzpBgaf1eX3EvzzFx6",
  "key6": "4X4UZxRHa9zXY3Ec3UjeBd6S52tPWAMerqn5wQN92zaVfAauN4ATmAdGosTigALsaCXnfRoBkczQ2afV6HCommXt",
  "key7": "35q3iTZpGQHQs4MRYMvL9DufXU92SDA4Ak6SPMUGMi9nwjdKHWiEozCxwiEATMMysfRdLh41NpEcjsaqWyu2P2qS",
  "key8": "5oyqdfwbwsL4Nr7QYk3BEZBWjhmVeLhaPBkbakLYmFvPkRKjDyfUHZcJtPvyDTD68B7aYvbu6vQC6Es5Krvmuzmk",
  "key9": "2m2h8yDLLmKNvGiTeBZtQrQenwbxZVMDgWFxdVab2t515mx1WMkksFf6utq1ymJT4WZqxE9TYyzS39EaZho4Lrq1",
  "key10": "4HQCkrHwyAoGkYg432NLGZnnR2uNMFRwNe65cHwc4wz2V5UFN2QGxAXoZxieRb7SwuoUT3GPdtbPk6S2MvK8X3BH",
  "key11": "fPxaBFK7Zb725UadcdtqpMRC3CZmNRbA1TrSdGJbbRYGDKrTGqgMeoDK7w8HR6DUwkZvrTMao7vAzvBJDMtM56b",
  "key12": "5begWtQ5jMAF4PiCRxFVKWAopKTgYS3G5AwMP5RdUsoDpBXrLsayqo61Fx8pSb5srCb9oaJGSqiBzhYiBnE4kVo1",
  "key13": "bwLqQPmnuopmRXw3wGP9ihFXbDZZEH8z2rqCUnympBAapkPoYsK8RXu9AC8qo1vP3FJhg6fd8EEcpa7bx3gGvWE",
  "key14": "2QVP7169QTiPsWy6bCEpEgU3UJag9KDyLZcoSe5G1pAm1CtMPepb6ckhK9esjCdqwiX3dgGT762biGsPD8eX51BM",
  "key15": "2juLyziSZ9NRrdPRdcnS8sTULCK5QhaNgiPKdAGcZjsFFDttAmakdeHwnCJo4e9LvBiNxa4AGV6aP4RYUkWqVj2U",
  "key16": "5xGpRf8EiwRhJoAD8wCgn3euymQnFXYXSq3i1qpanDwenB7PfX3tWMKQfyV263MABppBPta2JJ1ZmAhtpn5ebqn9",
  "key17": "4z8NTK2bEkC2VPQ9CaeHNtbcNopPyaTNW4o3w2jusa2UmN3ZEvci4HNaPxCv8SDBWjhk9Dyu92avxZG1Ki8ukyfR",
  "key18": "3Gihemhp5N3R4jWewT4BvagGzB6E4ACmpeVmoFuq2iWxumqNLTB6AJ4cmE3nW11LeA1ABQ9YiwTD3HWu9nM7v2ma",
  "key19": "4agnK5jGuXhwTjwdsCtQxxbKWEC7Mpz26iRzfLFapW1nQHtZE8gShD83qJhnZduKbRPgYdQusXpARB4kFP1Q8iZT",
  "key20": "5DYB7TezGucfT2FiJ5nYxvy3tTPmhvdRMZyuTTGVC7wJK8hpvP7pixTHG4tab3TTFFjBGbqrTtCr5L1zQkT1kgSM",
  "key21": "5fkuzYJUWk2RjQBs2NNdH8J2SM5ncqa9AohvmMehbBAgh747WwAHavr9qxcK97zoFdTHrUdM6HfyQAorTQdRLH9E",
  "key22": "2WJieTfX2sMPpwR5ZssopxbstFhZmxCtN5cV7EChdtys3di8m69pUXKFvxd11Zo1KWaj7QcoKhfm7BV6q1MuNgSk",
  "key23": "3jwT5pKaaEa9RTgazewk4FdFPFVcEuabD2SvMX79et7tUyAtPmDSXq5j9STThcgFRjkAqHtN32nX4W4MM9VQN9Ew",
  "key24": "3RV7bnLBMJZYvowsyrAsHpJfVefA1xAaZdye78i96FtSNrhzyzKtC3rh377Mm4KgYLhvfBgAw8FspULu5cK21sQj",
  "key25": "4amfijQwXazKhZ7MDiPd2tJzT8HA6PTvEzgVsw5WFXzrRfsMTwePQXGy9yjoGCThyQCUKUyNrVbBvAzExQtY9Kzi",
  "key26": "p7SZiq4SBDjsdFjW928GaceW4YMFxsignKetur6QN8EvHKJUHBQcaWtix9RRENUuBtr7YDgxhutbFy6hhWzmPch",
  "key27": "34URVnSvm8g3HnzQTXLdRMxksmXPxqaRR7HEQ32vNKbm1qq6Pbr4BQY9ajbcFogLoJkCsLr5PG3h6b3N67w5zg42",
  "key28": "oQCAnpwtLYmHXT6Z6oDHvVAY1JYUz6RYDLUJbhHNntC5RJ7LMEUyuJT5Z1XLoZUF75biKt2L9sKBKZ9bBroAT1o",
  "key29": "2rgAJiCrMaMARtEi3iKca94ay4Ss4VLU5YKVbpe2ZB6XmigCaQ3PBc4C5Ez9SZjMCzxYe42ekdLgHutQYj4dzjN8",
  "key30": "4mtJPJJvYsdTMNasSUMK6eUWcig93pCPBq4b76sQ5UBcSXL68rd1LKzXvSA5ZcfFcdP9Zh7Zy6bv9Vuweq2fae3M"
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
