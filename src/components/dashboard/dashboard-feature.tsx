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
    "4esCAkBt2zPXx6haKk7HnGzR9MWsS6KJfSp89dY17A9jazGJoiA7DjwbX4o5Bc3kG2QhhU8ww4dZXghgoWuTQJfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FiStLseuxrRUNcMvun3rSuihndu5sKFxMr8wt6SEUcSvdVJxniJufH9cR5GLz8Y4DmScnQdvv7NTBumSzJygy1",
  "key1": "5xPaXPBHPq3stP44ghtS8pTHvEVPHr6CZm5QY5LrytPqPTKmRdBxZKm1qg8DNA9crHpimgLsQpuhVNCkjpL39pzV",
  "key2": "kSbg2yfwyRi38GTP6c1NdV1fWRStfWB3UE5p2NkLbtzVvNdiRxU5bfvQiTcYKo5q82MJKC2xF5DJW8MMi1JeDuC",
  "key3": "4yCMCcjzezg15X1dUAbuXYkNvsWzpWsubod4uca91zvkqvF3W8WTvzDNMAgQjGsRHBoHTPv5zsaheStv99Hi9ey6",
  "key4": "ssKqCtdkwq7KGkctx23FTJcq6eUPTD3VGAo7FXzvuyJhjV6fiU5A5LnKoeBu8biLwkiCfu7oFwLt55Vu3jnkKSA",
  "key5": "VFmUWReTfSoW9shd9DQtyQusBA8wgPur36DR9MsrLk8mh9f3QaZzrHaPDKnXJw8dg8wAJT7oRvV3H5CptDwtUSd",
  "key6": "2Y2s1oSGnG5YhLvX3Beq8smEp8guGu9jDxzxYqdnS6xpUe4AWoYJeRAEPzqQd8thtPfbigfifgnVptu28n2Lkm4h",
  "key7": "5yygEpvxVfyH4fTdf7w1HYmAqiDFJbHZ7rCHABUnEZ35P2skwGFReei3NWkFqy81UmdRGiQDgdjvQ13EoNFf1yao",
  "key8": "5V6q9KtJNWT4cH76cCFkDPVfdT5VjjwkuZTVfhQzPr57PRv9s7vZsr1d3W7sv9rP6sVp3sfqfZbSvmFR65h5CSb9",
  "key9": "3F6mPaiAm7zL4n7BGeB5KW2WhRB7fKkQW8kinyBsZdjzdM6PCL6fJve6fdJxVA6yPzRZ3HcsGzBouvZQLAedMPty",
  "key10": "3dTNZXbGxDZ93YKqtqqdRXk24w9S7bjKZp8imKQKsyVyziyZZAzkeGBEp3w1gYquRwLcuKonAK3H3wx8u7sBGgqE",
  "key11": "52iC4RRk9WaezKBRQyr6kEGDrywSUkxNuoBtfNANaJi9ifdRmtYbLkKkDzrMUwG7f8Rf1FXaZruPB1AKbea4JBBB",
  "key12": "VgovaPd6TSN3VfjQdKjNeUnQG88LkoU8kGepLac7qAaqDbaGoZifhFSJL9Vw2Sz9tnXJ66e8XwFrjKtNfUxLJVa",
  "key13": "2LEpE2X1unUSaCunR3tDuiGBGa2iJVJwg8gJWLZhjXVppYensbSCEMD4T8Kpcu9u77tk9g35PinGYYjjebrji5YF",
  "key14": "4vNxEDao4hEt7t2yzaPnbEvFEG5jwTBv3y6hamRy6LPvV8YgjSkEPN9mYArWzjn3SjBbrjw3ttafrDFnd7rYGUXB",
  "key15": "23o5k3TELGxgSfG9CHEKXogVDwedkqkzxu7qDybobd66wFCW3sQefQKmYqqdMaDm2j8A6WhcUbbVWdcyF1qZ84yG",
  "key16": "65mKCzp7A9xqqxwHGrZmDFqQb7fVRJgZhyfU21mfdCieeb7H1AtWKRW5S1prpP97uVJ4hnPbH2x5zGB1UAMybvXf",
  "key17": "6LnNbtLt8UC5xfB4Pdz4dGaUsRsZjAfSb946kUUEGwWtqGmAYyEaWEX3ahsRmDGTVFRZjh7RpjSU7LTMy7AHur7",
  "key18": "3hatesHDxzpUUejJabm5LtcdQ672bFDTrWfNfoDKh2irWgn5wnHTnJdgZYsgswBZ58bFHYktdSYofyHWoMyHkeDq",
  "key19": "3m6Yv6mvVT7XphFfThDQLYHZSMH3HyBwpkoZKArfyyF4Le4MSsnx8Sx6bA5FYXrPp42szW2xNtAKv1gSHPDaZbpE",
  "key20": "5dErLY8tsZqA2W3HqTVexmvdSmev8D9TjZXwPnZNiZftLj6sz7urD4UBEDHpakgVKHT3tmjxuezqGhJ8PBpzeZEo",
  "key21": "49BAzru8qN4RE6HGFo8qJQ6footZXCZrEyaeQ9nR8835sJbyxQgTod15i9S7F647g4qrEk4og9sW17sUi3cmr9qL",
  "key22": "3fS6t9qD45bQTTE9k23AntD45mqWjzSjAMCh9rGJgQ1hLtn2zLhvL9sF2itAL6WTbmQpucb5PGLPo7dsiGe3TLdy",
  "key23": "2ajgypc8ZtGbjVCgw8Y7rAs4aH8LnL4wrSqpDwqW7ph5gR29kpgKCYDeiVJq4YUDzQdvw5SXtdJZCnV5nhmtQhqK",
  "key24": "5gaAgevBTaXWepNam1EkLm88WsYGF81EqmY4LC2vqRDoZhm5qSUEicwRbB5wWx5NKApjFNr76tpMX1KrZiUUNEv3",
  "key25": "3HjcxRNBipgEY4itnbbiknvWgiXty5Ee1PqS7xkwt8hy6zT8Ztof9g56HAJNdiJXMvAbq3dndjoYnAxMPjodiKys",
  "key26": "6gaPc5zMquqeZDBiY3GHvYj1KVBYptRPbfbYgn8wM1232qAv3bcN1L2duvPK8LJVeXRi9Ae76CQozZp7SQocf1u"
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
