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
    "4pYGhUBLg6CpDp6qXmRu282hkYfYy5UBJcs4bUytyko28YGqP7wU6QYK6GaXR4TcixMY7ADESurW5CfbK9T8HMn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YmeXPRPXjvLCTmJPZnUuRigXqg5Euu34H8DAezKnig5kN1rsSCnx4sbxi7n7HjhAsMoY9dQCJppmhk9cx5QaQWa",
  "key1": "2rEUu214wgFsEqY4nAxuc8A9TYp7VAUPuaL6j45SWS9rDC7qS6bhoW9pqSMC84112ADmxanPiRXhuUe2aR81MXX3",
  "key2": "4DxKXAdABBM9SHs8YagfpCLGRXdXhxudCCo6FvwC2tGFPJNJc623xYdmb3Fb58sNYS7RLdiQgk7BZ58xmWidtnD3",
  "key3": "21PKD93RRSgbjU5sDKw6pog3SB6jLTRKVDusdgKSYeVBQpx1vjuBuoPJg4nwE7Nvnj64rgSrSHCMCohn6frxqDVn",
  "key4": "3YTCzggVGGA9secfYjftbtttuaR48wCPupJjEMgvcysXJeX1BPKKqpXbiHw4Vr1aLyYBfsrdxcdo1nzvUH2xwGnF",
  "key5": "4FQJM61Y9hXSg6zzL7nuQXfXYu2UZY6JrTbrXK6U1KXDf9tDCt3UQMLnQjawty9D7EYTZwVbSj9hSJa1K3fwVxba",
  "key6": "4dmYLEUcAeNwEbphQe1rHEkQ4rhStJ91iac3VSyRKfiyewrx7gFGtYfjH9Lmyfr8xMT4cVQAEf5DRXxduC6Sp42f",
  "key7": "243NU52fWmcxqYyQF7Zhz8gAgouAwxc56AYSAxrk7PJdTu3BWQ4mXGMi4Xtao6Nm4XM5MVTkd92pncRP2oV5Jw1L",
  "key8": "4Q7o3zoXh2psDDKxNjWgBEnsAiF3e6QVJ6H9amyRdajGo7ivF4yyoj2atz2LwTXQ33VNa9pTErYeCaZv36pdca5T",
  "key9": "3jcBL7WmvDgGCDKsBK7Vy7V4BD4fPMcZrE6fkmN4TqE4AWDHj6otaBYZDBVPHcH95pQw9yPopkR4H1XzhF48vQNf",
  "key10": "3rD1KoKjqCkQztjTPngrmPyxUgHpsnR3paspeRhiFz3fmH4pZZd9UZ5yEw6Y3qV42c3vLwX3nYcdyNtCogx2ZX1q",
  "key11": "54hAX9RQVNcBCChXePJFMAw5aztRiP44JSJuY5FbouuWrW1xP4fsGgWfPvv4fnnNyhG9GakiQCAkj2EVDcH7Vxnb",
  "key12": "61rJdPkppJMWGQwF5otNoZQgJyrQBonZtHVeYhEu2Sxa2ayxtQee5xcu3Ni5KsySqjAiovwpzqjHYwj56eSx9sdy",
  "key13": "5wFdaGvqsKePZ96aDSSxMfjyaxTEPKH8Q5H6xBFrUSFtqrjXhMDErifJYQsKWraBDB36nxhZk8ygUMJ4GbNiRYzC",
  "key14": "5YwVDK1f5pkdncWdH29i1yf72NgEJbCJ4yRhTzsu3a7oWdEaHfLt1kGP6U7mcs2e9qwYyQ8axWHwFwVavcRZYtHw",
  "key15": "34zAW5sRYqz6J47DsRHcZQyJ7eEGtkRhkrNJUFbhP6ofjG9CtLivCgtZLgjoQtKApV1wbuTZ5mfQHhskJUzcZ595",
  "key16": "3vMwH2R6U7qViuzwmKeXSQZeWGEfzrZrQQVGDF1ihBEFxq9FbKVhQbcNNgxiNuBvfaqSUQwoKPTiKfQzg9gzYCbZ",
  "key17": "532kdZATMQeHUDrRnXxXd6GFHwxDUUNKfbwmLAhi3WYjmDtAD9bPdNHF2Yup9ewpwzhTDGbsydkmFDsnBQbNa6Li",
  "key18": "23mEMcdwhZcFbBbxbaAaK3AFzHGsJSp4YEmP7vnt1JpiZG2Wjt6Exb1XJs1TrcVcmECJVkSSPSrTbFarxxA6JETW",
  "key19": "5aruvbyhYmoQWGVkXmNCDgb8Bb4KDkkVRBtgi4bfZCABV2iKLBy9q9LNt98LR3ZyraWC34FBTfk7nX8d6Sas3DzK",
  "key20": "282gxPiYaNCKvU3TbDPVyWzEJZs9BjxNhwNUdR2tir6NsYH2HuRqtcysQoJNwgH6TwPQTKtSuqQKJ5bWhy1Fbbn8",
  "key21": "rdAKc981PbGDPh9A7hx7PmPSmWwYNP7jbppUNqiHeFxMFssCX6VF91hfirji3eB1XoxqPsHZKDYTY66doZzdzpH",
  "key22": "29JffRtYBEL1EweZp6UUFiaKfr3EabyTufuWXHyZZdtjQZ9S8EBmdWKu8FYdcJ5aJ1stjcA1QoY4dfzmkJrmjCX6",
  "key23": "3KbjgtESDexstLCPrKmhARGtXkKC8sea6PnrodzthoaCrNfpgqrZfBd8cKXhYD8cUNkqLCsJsPaE3M6LEXTPFTnr",
  "key24": "577B2a8bgYxF5o7LLfAqKH5T9WBx6CAbCJZjHkV4aPnCu9CbQkAgAakqQPamJDQDr4h1VQpcy7bCrXjaCqS8mnug",
  "key25": "2B1GDDBokuyc3WaWvKWmXhDM7u1XhJzAvYHyWs3vip9iWohRgxwaTFhuEwyGMZeQW1etD7b846F3hi8hnNTKBFYV",
  "key26": "2CHnfx2CrCbhBRDaUPGQyxFtjncDXbPgh9xT896if3CBkRToXqWMnBVW34cq5QCeYEeqeb4X6gtdBymkvdDC74cJ",
  "key27": "5DrN2T8JkdX3YP2TbKW9T9tfRhqgVMMep7HFQNJRzgubHZegBK5sa4qum1BsM697bHErSGGygc7CeYfFJ5ErB4fe",
  "key28": "qvX8mFqJtAZkh8HQ8G6H7hw2M3jKDLguRAiREAn8QwS4n3rLsDTVwPcMhUqB2bDqFgvvdNvmTA9eKwt9Su4xrac",
  "key29": "2BRadzrdDEsNaYjLeiC8NV57sSG1Tnm61M4JtWq56iNpAS1KkZcwEEmj6iAMrmqq1MKL8nsabKJWYAFVewC2KBso",
  "key30": "3SPWigXTgipM9rvdJvVZDR5QWgcFGD6yfDfyuS23xc16igw59Yy3U2afdigj3yEU6cZpgJ9C3xFsGunnTNVdyGio",
  "key31": "3CCfg59wCfZuCywg89h8PfHwmfU3f4gh1isTDEfBu3hZPwZwecX8mnSgDRmmxeKdPYEGYs1asYfAsKvnJiRkDwgo",
  "key32": "4Ryb9k5Q5DxGr5aAyDuayzexrLJ7UmkdvzqNqvk7BChPvbDddMctss3ciQWtjywkcAKDTHmZuMHGURLPykEx8LLJ",
  "key33": "4kpEjv5yAgxoEiBxCN9Wzgj93WmBmqD9jUpy1AceJ4nZNyesDb6fD9i1m9mL5rT3n5TvJMXyJYxpnX9XfDELmYDN",
  "key34": "4Ym6BkPYwsJywWQ2TiS462hQKNzvBTqfoBuQEZ2SzVyefJD4sa8R6mPj3h7SecCRummnkCHzCfWwb4u7jyzVndSq",
  "key35": "3F66aNJpmiwkVNRYn4k7ZpLxM5iNfzSgNgZnjJpUXQgCUGxS9HAAS2c7DfzkY8KcjQBr1xCnidyLRBpGBVFVzods",
  "key36": "2YAA8mCgrKq64zjYB4GG882CHzkD53rmvQA8bExFftjC3JpGgUULCgB1GtUwwRkS7Zu5dKFpRJbrrGa4958WPuX3",
  "key37": "2tq3zSYWzSr5oJuZM24Qs9GXyBrrLVfg86qWVJryfdtKhEBJTxSoJQycFqUXuYco6ALdHCk6Eg1VHMrN3a5pzgKS",
  "key38": "2AhQdguxN1NVBpbT4cLHkfoqNRXeuJAsuqwhozPDLZYVdhDf4HhFEBaGejJMNhDkeqjmDJFNCAMdqbzxseVgy2ro"
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
