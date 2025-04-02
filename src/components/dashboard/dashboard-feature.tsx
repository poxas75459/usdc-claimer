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
    "aQWQH32d7Qa3f7P2JyaUodNF8Z93bu5AsG4c3qnKuRaZamsC5LvVDkN8wzaAxLXe6A3sF9pC2B86NFC69TKwHYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bj1mnChbJzeRVVPio1Way8FZ1QtzBvYpHADXaM9PcSGW8nxjsz47LoPcGZ5u3BZ9v1VAJjT8K5f51pgYXuiDh6L",
  "key1": "7HxCW2hR572uEs9iMM36tgDJEEzMWbsMfUQZ6ivdxuxzcvgctWrQQx44h6NsqSnNdyedcwL9g57cF9mh4ySMAn9",
  "key2": "5cHMMELeR2oQvAKR6qF35YPjLDuesPftZTAt11ywCk32paAk4NqpSHKjpCyui2jBWDMRqsSKn1fqG5sTNvy9fcDn",
  "key3": "JhdtifdV1T6D6FrU4w8Lpqay6TkpyyCaNRoH5nEacXxU5KXSrmLjZB2829GgE38JEqeHfFbB9acu6tMW9GMzuL8",
  "key4": "2fRZsg6oD3XU8AhH75tKBweLCjkWYd16qemapD1V6q7WZYEENJzasW4kUAkChJBGrrFsbF2FNVeB4WewmWWkwHte",
  "key5": "4y4cSmFdQN4XHE8xQxSarmQ9Cq4UzJUAeKU1bzirNwDwYw9ovMSw95Lxk4vgHDiomjW1NYaRJwUGYdrgpZB1VNsE",
  "key6": "QuVXKvVxZo6KsifTu1whsxFardRXpprninLCCDF8SwygH723CDJztq9a3FCtq5FVdBhLAsuziszyUrb16uvuS3L",
  "key7": "5c3C7a3iPFkddpLgeVjejDBaHsEGpzTbbzHf4fM7DXkKsZqDWNR5jWhRPNyMxkyVgQNNk1XQmrLYgbuXV6BzEp4o",
  "key8": "5sFWxBKJHTErTQWbvywrmVUvrDQccPwztkQNvbfNVW2yh3UELKS5taMbin4cS7xMV3uaqNxTiBAhZB1mBct1DAXc",
  "key9": "3a6JYcUkE977EUqC5CCe9rgU1FdTW99M7n4Pp8s4r4DUggJzXvwLy1VUdDLBsCkWgTEu4DwG91heUp2aicZkJs9o",
  "key10": "m1zM8oLS4j1hCczwaZdduCweETCxHmJpRJ1tG14ofULBmw4su6CwPoh1cy8VkwKep2ZHvKdATsCE89PFNnGJmqY",
  "key11": "RRX54TJQ4sJjjdZQYyFC2YqRNB2XfCsUkjP6BKmQWY6pC1moYeFKyTqswGyErMCFWwq7vK389F7c714k8PCthC5",
  "key12": "DEh4FxdMDrTpD5kqYyk7LfS8fyR9ASVMvc3qfmTV4LoC9hcL57T13Go1ZkTGzH5R43boj57qjE6npNEw2tiC2N6",
  "key13": "2QZ5awNC6Afb4BznqbYGTFVrTgmf6u3gTezuS6yHM8dFWrTKQFJ57RAFB5mv2i7si84kgZ8BJujDGXorNqqKitrQ",
  "key14": "5q6ND17PqNS8qr7sYDCnLGkXcoUiW42qPpmZt4Fk9Dx6BfQngqQ4LRWPzwX21vthKNNaeHBmq63z16vk6gnwV1EH",
  "key15": "qb6KmxsvBG3saSLBLxkBsVNhR8hXZtZrGsJ2eguS4F4BGiRbp3UGQwKTtibk5gdtZ11J1CwU1joFPLSyk7tM4au",
  "key16": "4253yGTXhtq9ovTBTveYqXnyp2VT1wvXnoSJsQxUo1zCQqw5d6LJxNm9nD8h3kHEPVXfgDSvPG5dJUDUBe7VykN8",
  "key17": "29UUkZ5U6NJVBbmi2vXXSuWDyw6KSwNVPnHLhrk81it2tBLqV6Lysr2Nq3PrHkUqdqfGUcVcbRq4MWCJCVStVVfA",
  "key18": "4AyzFFncmKWUdEXEvxt9iETbPu4HA79H8N4GvjnZiVLZRyaztjRFiEzLfp9zqJfjJf7veMYzABTEujfp9VmXtzxw",
  "key19": "4Kxhy8Y5Zx8G86QCXtD9CUbKQd81fWimZqnTLZcUJatZuXGnJtnAgdyhbRutFGJEAjx5xoKWMFN7w4q7omH3Bzjx",
  "key20": "veJKF2RVjjMHPoU9YuSViRui8Vfb5JpW5R1p75fkXypmmrgQGHn2UDrfvkry3ReBM8r67EYRhYd3EcwYZVAFKoZ",
  "key21": "43ufJ263L72kbbnG14iiEKuDeYb6di3VoBqUKk3Tt2vua7xkKZqNaLnCetCGH99Jw5pSugTeZqruFBEJRGne4DYQ",
  "key22": "5AJBZ7J8gJk1ko4zU4b85bawV35hzCkM9LokPGcz4YS2WuzLSk57wm3f5jGH3tuzQqdsXPsrSajPc2VAeBisxaXv",
  "key23": "39fGDhMLV1FBmj5pSMVS1ysGnhkRo1CHLYC6Qm1agLawGPi1NNRjpndMoWwCu6rDarMBbUwFsBnFnJTRfawYxCwr",
  "key24": "4rpbqjByvN7AnuyhRUXsWgpRR6rdjsC53CsoiFR62ZST8wuWvGAExAEd9oyGZUeCnQXJjoDM5MQQA3VevF2HvZts",
  "key25": "4bsYg4GyrrjYLLcXv24cVErXjv7ZUDMcUgN3aURopEpgngmhT5c6x7g4QkbfuUvcakP71QvCuKW5kSjBRZRLwidG",
  "key26": "sM3SzuKM3xgqBuMLvRPec1m7xuo8BtfJU435TH4EPzxdbBSkaiAfboHdPsPpyzqqM5heRK9AfQRGhJsJAC42hsM",
  "key27": "3nJ5nVnGnSqQgKx7SBywodYQzrFZVzkhttdnAvgjvMbnGRsef1APdaBRfqnHYT4ZPQXrWQBmGSTfE16TCSCxmf6x",
  "key28": "5cZzwL4Zk9TUCvkYNprG494tfTo79Bqf9T1s2zUsyb7FjQTvmckaNb1dbC49YdLP4WPANNrFaW2FKiSW5Ano3TLP",
  "key29": "5zHd9jNy4SpvvMTXnzoBaW9ixd8LjFAMHxtNFXFpdfy8kvGmW8XgXH4qjXdNgVmuJTNH5TppDkPy1iFQ4TGk9b3D"
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
