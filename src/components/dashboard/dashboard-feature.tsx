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
    "iJrWm7wf1y6b1MtSY66p8VLuM15anuie15EZg23RUAhG26XYPCiUYKm7RquN44mpLqU1mQkerC6ZnJdrRzayhE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WFP8BdMVsnGQDEWbMKqkmtSEXh7aYLCJJpZdqPJHmoEPBctMZkvwDFeBoYSh2RxzrMpoCJfwvqXN8KRhgj2AJPk",
  "key1": "2QWsCbARuwPN4owHWn9oC7ZnUcKmwwvHqJepCfhXrBYrnuuKogTnGvEZEd5JoTSPT6FxVM6cGzYzft42zkN3W7N9",
  "key2": "5ss1rpnavSjoFgbZwmYvnscDpbqEHUBXkJ3wPgfYVaWbURWjY2vEAnuZAZFZ55WNJzm4zsX8UhzgiHokifUMZbh",
  "key3": "nTmEYen7wsfyktr4Jose5U8pi11CdpjQ42k8aLRGZyrLTwkaa8Fk4QvvwUP8S5dyMFiWzaBVsCDpUWzWPLt7G63",
  "key4": "625hQFynxck99F3tfeRGtC6VtsH8aYLYWouqfpSGvB943hDc1bCK2WStpCSMDpwjiToaHjdttHeMBrGDp7HC6NN2",
  "key5": "5hSiue8J4hXWRosXUctkBUfJY6AhT5imeAmDYQwe2Egytmfcn9b2u5XTH61AtuQZBPEiFUsPciVniG4ABobrdJqq",
  "key6": "5pRwSzsYebW3LbZqgvjHJcTbmEMpFo4gC5vXftwPPh4rfndJ4DSQnNkaHuai1nD7ivYrsoQMZEE6NQNAbztPJsv1",
  "key7": "2Km9EVw5Na58NWN8ab1N9tPAoGuGmyoEMEYao8dJTrrYiAU26Afms7u3nwtFLpZDFfLquxSt5vsEHPMp9zvZHEKz",
  "key8": "WZT4vhKaLSt8Da2AqtHzPXr7jH5zgVzz1f6myFs5dvwmbe6vJie1GNtEq9k356fzNbw8LHyGQE9oHgTR7YrzU1x",
  "key9": "5UKbQjKdcAPSJf9yqKWJmrDyeiFw77bnpMAKTbLm9eottCwmEhcssH9CwBgyuT2WARCcq3dXRzP1VUCmK7XKgPag",
  "key10": "3SDCTRQubnFm3P1SzUhCMVDmfU1nxuMJbCihTKiPJgREm8cHxS3BXi6xbPNEMyYGGi5sYyrWtJrAjGRrMdvoZUW9",
  "key11": "36pU2Yj2bSx4DqNfS1ZZ6NQauK5srw7HruHndKH1gHcNsn3duPvqNi2VDH8Q3NBXuem8eq9BvBPrK9hNoF5MXe7o",
  "key12": "2WzaLHksiZg3hKVceKUSQbD76MuCyaBW2MVVWKwVgiwH8VgJfquh7vF9boJatnUtsAqYVNuhcZ1SyHjfvmR4bUWz",
  "key13": "2FW3ByVQAsgn1cEzRHjWvMJtJigKJvuu2jRZn3NDdxxZtQRw3UyypfBd9LrGnzxAKboANsY2KBdBQSx7iGbaUiD9",
  "key14": "3ZvvZcg1rQx4CaJYofE2kNLqP3PaGHi221fTTRdGujbEQ8znwt7iozov91HeJvN3CzJPMSiGQDb31fUqqRPS5GbU",
  "key15": "3KGZfz9fiB6T33fLUEob3PwzD8yKt9kPV3ypSiqoWyvwJrxhfysHi9CaU2gdtnmR6QxjqB8BHfK2Hri8Cy9irW8a",
  "key16": "3WVGarkvcPeMkHAHVYzPAjVwBHqvmmqwYCVE2fSgFzMXbqb3VEowHdHqoqfTDr7yfT8nQUWzZ3igwjDDPoJioJmF",
  "key17": "4WngDeRaU86T1otPR9PB9dPMUgtasTfCcpxDfo1RBFjE8Rb5Bp9MXCcozTtrd5Z3ozmsbMRc8WzKzhQP1rHSQDzM",
  "key18": "2aW9AdVXvRMrjZR6nwEKe5yaf4Gc7qQSBrGBx3K6cZkG4oSY8k1yqmMBw7Yvd2XYEAWb7pSYnm4w1JWE1BdWqdq",
  "key19": "5fwF6GRbzb4zZ5qnWfrGd96MtLJKfbCMvRc2UgqYDavfweuxz5V3ZfXKMBbBmyjF6eAxR7pvC4u9XGHHGw53WqdY",
  "key20": "36q8gKmh3ABsrfjBEKAeoNy1fLYfr2kDfKPBJ8SouWGnp9U7XmbVQyyFo14LTDNpMXUxmkyKE1ZKSFkgjzNJ4kU4",
  "key21": "4Feuf2FEwW4tbAoQMXprjfJw7viwv2uz1FxMQJwwCsntQ6HoYagHn5ZATAqMmAuX9VgVkcfRyKPh6suj5pEGsN39",
  "key22": "5pTMNuVa9MUaZuYiSA6ot3qKgB7uw4F5kCM8zDyNm9WMEmQx3cuZgCB4FS5VXRrZBCm4eMzXdXKbLk4F9KAn4v7n",
  "key23": "41JY5N3yv4AFUg51yKAuxcY9QDyKvFFvtvRugJoq1GJKSozzfiTBup5LKYoAmAZ9Rm9LyPxvG31BbAgfR63r6w9f",
  "key24": "2nRiQSMiUMU54fedhk4Z34JeXWjx6hGzjoX16qdactuKVV9ovSFWFeJ19BhPEWs2hsBLfLsyssdv3bUAiG2352cT",
  "key25": "5wptVuKd5vZ5Lq3DSYZowtfdThCZ46VxSc9GmmWiRenGoNobeSW8KVHpiwapTBbW7V57R4JVFCeWDQfx1bPY4r9h",
  "key26": "38Dc6P8xkGptvTiEfsNWRdbwpi5K2t5UFz5SoASj2XAkgtGuWQ4VzRgsTZ2VPYpvjeVkTJHjieetgNtd9QoQMk98",
  "key27": "2WkWJYZJH83ut5jiCDuGqkJyAbwPVCTDMK9RPttwhs9P2rg6LL3prduLmoKPCrvYb2GY3YipAG4adDrt4mWAYmq2"
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
