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
    "3WjNZd2mpc6biMNEvKk4CwQuxbyhrHMfX2K7i4KcdcBdMsseZbNXpzN2W7BSydM6oKHJCtKKZotiS58oB3UkC45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4Enrr93JuVv3WmMZHC26qEmXBNXTHPx8EAZzYBJpmgxQy7CwLPYBrDW9tdf7RgVm9eJMrnd7ojBjipoKULxr8R",
  "key1": "2JaY1FtrJMTCKNhiUMKFk5nu9EHXc83J84r7GxEhz7t5nYGXrpANVGB8Rkh8NaLFXvJfqDdSraKXNwiN3NghehY9",
  "key2": "3jcsxgPbjKQj8ZPVpLZiAJ8qC16ks4cb54LpT3moQmwHh7RFiXAMa2KLZFBJX7NWN2q4rBaPYfnKthTFqyrb9T1K",
  "key3": "3Fz1RZDMPzvmfpaoAcXBjcnpNJvReSkAw4GzdBh597D278o3nFr1cJXB3AKiSLMYVR4sSx321pDFDBztnxsibKXG",
  "key4": "2LmupGWgnWhaNiV21p1JCbKuMZbtEbp4gGXBR2kV8LzkFdfgR7aJqquq96sqCThk8vpdcUn81XF7zfjcS27fzJKo",
  "key5": "3xjpYpW3LPCpgUHojx7PFYC6XpH12nVcAEQYyX7FL4RREBH85yAQL1HmY8pxManfFg37avztD3iAVhCZvwXoNewj",
  "key6": "5sbuqfApPDz47AUm4mxwJxS8uaYuuAVib1BtZKbUmU7dDMABhARb5dtfXSAXxyCLPHvd1S7ibZeiPruzMnL53KRQ",
  "key7": "4Hp1HoZwqnW5C1q1TzJ3xteZ15mgs3ahp6KHJ8Q3k24DWN5T77dLPMEm5c1jiauZ68nDzDycTQM6j2mQ333THn7A",
  "key8": "3HKwd1FaatJhV2YLyP9Kwof1kh5RXoCTQ1qG9ixr29iMbQT9nR1cm4fwP72xitDUbRvr9i2T4Z1WGZn7yV9n8phC",
  "key9": "2sgaYGc4ZyykTugzxD3VcVBprZtQiyk7RZJ81rexy7k5BfYWkjfRJrMT6dMMLhokZaTo2H3BXyAFiqDA23D4YZrP",
  "key10": "5uvYajX2ykou12uMaAsJca1cnUqSgFMKpfRnNFuq1RFtNtG2W3L5sgJDP2HmxBHMMKwwmt3jB43X2gZedCv4ueXX",
  "key11": "3S4qLcWJm7W9U13JXfJxfUmWeVrB2oGWctiazuaHGg6caXrCtDbS5k82y5336rhFbjtpKg5TZTJpT2TGxuq1vcZp",
  "key12": "ipMZEf1VQpR56Kjtu6gdRPkz4w4axCBMCeie7MRif2P2ks3pkFtX6fkhn9RBVzrBuNZ9YLvzTh4f7HV3LDGn3e3",
  "key13": "3EpBmSpjsiipQmTqQMm9S13iXWeHWv747qKbPktJy8PghU1rKi3ZK1YmXNcupkS8rtxKsn9SebvSFUMUavhbvpUL",
  "key14": "24TjkNBewFu4WXjJ8AsBWwKei32ZqsoQxkS1A3Srb7hGKPAbx9ms9g3bwchtXtN9oq6UXdLkKAxjj87DqscTZf5d",
  "key15": "2Go3gGy3fdF2YXGLM5y5xyGjA2zkGobzwJdbMhEKT4tvJejVEe1jVa1Rk7B3djHhBJvAcdQYhvBNrNSwQtLi1YnX",
  "key16": "3Mb2pKUp6rs2ELacDL5x5gS8ypkGCP2HrT8hAHAFE42L2gdokQGAXwKbnQUBoRvpsiEospCLkaaPQBFsrv5jErAT",
  "key17": "3gbyLGJdR4wE7AyakRQSUAPKAAHR9ZrenadBLojamEioN358M6GbZy3dimm7dtc6DL19xXtzuQxxgxttsC4TP22b",
  "key18": "5H7KBmNMgATdyWsiZwRFP8ma9zZXbuav4beKytrnhF9udSt4cJWAh1FNchPG3j5zXV4M65yEAA2Mr1hvY5kSyWxm",
  "key19": "qPZS6rUSRNenakphCMfAonqvpuwBnEz4kN8vyFBpJ1BaP36u36DGfBG5vTdDMKgqBcbEnsDVFZogVvHvBbhZ3DZ",
  "key20": "3APf7R3BMqXPDtJRJ1uxiCNdWGrdxY2effzFUZ67dqca2WpJvTX7Czb6Et4HHTGAAuNpG2cej2ogcf3yfWnSKwmP",
  "key21": "5pHS5byJQQVtpBjXLkfu9bYSybAZuCafQsmdcgLyt1srmrojoSRvWBNP9S5XpJ6GVhiPm9EBLXzRhZt61UbJ3oqP",
  "key22": "4RJ6TtUz1Sm3xVoMuDFqiTbnFdCrRxUoWqknNkZfdTgRcSEbPiaXSES6AUyXdFpoHFTCDHYgpUwnqXj96bZzAADT",
  "key23": "Ub7Mf7jFf6EpVgnRU9fMv3JYS7T5k566MvXZizyRCjStKvK5dcaoqy9D9tr32q413bQRfK5McoKx2dXCWEA6eFY",
  "key24": "4RY2gXb6918zuYmZYhs4ASgLmcJaDpK3c2NmCSujQJSL8VN3Q5BMXuMddPyvsxe1YzrDBWKFHUai1kmGsdkGagn4",
  "key25": "5DxsoF9pATybdEuA4gbnfcGTwyJYTfnMviLimd7F4YJ9ocVKpEcqYvV4jBtXtqmCwbfiCe8yVQfRxPAViwX6qvpM",
  "key26": "5jcMFT2tQuYouvSEZfvT3RXXW3KMTFx2P8qvXPF1D6E3QcVDuiQEqoXiMdN83CC21C4oS8TwJGjs84XTyb9Un69t",
  "key27": "djywVhPRjbjF9aCqLpuSGCRUcitefGaA5SxFh1GhrtaCqD1Eatdey6PzVaeKiH3aynZGbcJoEhG2DJFeqMJVYy7",
  "key28": "2RVRaDqRSzZEQWNS75yFR6b1AWorN2zJ2m1XqBvJk374yNvaJq8Kpoqnm8uHGwwvB9TCdf4fiyA2a7i8GNf8GFjK",
  "key29": "5haWeWucNuZZVh9CHwdXyuuCiSJLfNUAEgHMmXKtVW24aarhNT98meafhtXkYvD5oALm7cEUZA9k72G3s9dCUc61",
  "key30": "5SQ6uGDWYhpR3QykfeWfifetxGqAohx6ggdHdkqC5zRQMaJHipkQ7fbPYyioeFd77JruuGp5fntSouyqqCYNDu7K"
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
