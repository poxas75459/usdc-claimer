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
    "53rgWn8DvCyHi2ixL6EwbNjLfrzwTyGwhZDGU4eT9piJr7ozzgawLwW6R13mzX2PRPedNZZoSA1DzRjp8guRAAbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coYrVAm6s3QUu1S2NSQ9MgWgfUpBgfp6wo2GgBUNPGCtMhmyf88NHvBa1kudeWJgiwSJK7ypTY1JNQ4LLMZGmWH",
  "key1": "4W1iVqBkBD4xGQqCSCqeS1zukKMN8qURJkzkScZ2yx8FQDnu2JLLRZeK2nDR2Dmw6shQBwz42qkk6vkPdJnPbJW7",
  "key2": "bvCp5sJFHtACzQ9wHKHKJTwYQUYWUohj5rKAqLaXP4XH9FXcRsnsitVAQ8iAt94G5b1w6TS8Q9VHMzdUVUE7fXm",
  "key3": "39p2XkGS957DUoNFSbtKCi6BdXq3hpHVheFymy28DN4rQjTF149MS6za5GqLcH2SQPgV1f9EfX6vgiWoTozWwBaA",
  "key4": "4PBe92ZpHptg8ynk5Li5MJ5uuY3Mp15AR3QdqTcxSn79dhZwtQS6bhHqBiFnRzr99xD8mmkdRkL7AhfwzC2HSTji",
  "key5": "2ymKNrp7XjfsecaewRH9gSY4zFPGDvNdqx5mva2hMDhmWnFrc8qZGBrpCnZuFfC5Sv9Vob7zmo4NeTAPMemuQ3fA",
  "key6": "5nuXZAUreQ4sNqjmfdsuUHgHMHN9S5qafG14hqXQgUfrV8iB127mJEatAucChFa1hhn8UcWsWcXVed6ShQU6aJb8",
  "key7": "617vzxfE1h5PCAbyxbxdYnGwciH6NPEubyTqs49gpRRzg1suJxPQHQTN5wG78xgvRe6guxGBKy6j569WavC4y1Zk",
  "key8": "3Zx2oDNfBiFmsUg9G5NTRSaDD7JHb4h1HVfJEzQMsprfgov57T3dGcoUvTX38aNnDkrQqqdpJs22N5Ucq2gkxrFh",
  "key9": "45YBTcrV4rj5tWYxCtVTp6TUDfQJT6YBwcNpVy16xdyYvwcejRSXTERedcLskHWjAaKqguVrAa7bKfT76c2BJPdq",
  "key10": "MowVwACPnK4HHDZzGSBe36owRVWLaC1mK8yAii26G416gAvzJ6pBMAV2ifRSvrjkKQmWiuDUsghCGmATrgsYMdh",
  "key11": "7BLcTbTKCf9dUH792DqTkWQAqQtnKZo8iiAdXQBFmFZRR64N4oyzRnRyyKpm8aduwregZfvA8synh7QM38GV14i",
  "key12": "24cdQ73gAYE6yqBVyBaAZ1oxr6H7hnQJADww7qNq81gDrsmudzyt8GbbE6JD8fpbaRifLQSZENCLqcitWpDXPiGA",
  "key13": "2Zw313ALzUMZcR4UjJWnnSmuz2MEMTWZ9Wgg5hp4kui2xjRjGKywcCjQoAKLW4ycWzsp8hig4KwkAw2Zu9gD1Wwc",
  "key14": "2C9ofTgkv3VNtnXMLEPEvFMV3uoSXAyuTM82jUvcwtxVkcBPRkBycbV4raGjnCWDtY7ZXabKsY8ttGMDGr2UQkox",
  "key15": "5LLMC7ohV3LckxyT6SsmCRBSf8fQ7iWuWck54eJc91D6519TTD2mZqiUztJJ3rKc6L9rrKwEXo3i9XaabBE7YEwT",
  "key16": "42ZrpMHVwQdQ2qL9jrkpYaA1qESwbT1AXVMTJgRxhfNPg6Et7TYBZZ9RsdgE1GCSDRC1iTERq6b5zhdx7ts6Lveg",
  "key17": "2HQUAFLiAtQ3B4tjBJkZ1vAgoWReFaxBtze4YoHfzyXFzTAbfzGrqbEBm7WVgcnufUMuyfNzfixcqhFDNBPRAQmb",
  "key18": "4su6kF2c5mkuVxMbt289jLDnTtagFTUavGtg9zSrXa7F9JqtWrSp2Nm6d4CGNRameYmmc9BG4EbrpCNTByuPgQiT",
  "key19": "Mj4i6mXgfpjU4HmqmiHR5EE2qRdKEoYWtYJn9DFdWYmqBDpzLWz66AFKwy6GAhvCRRAoqbfGHMKaFTw8Xy8Dpt2",
  "key20": "59Gz7fmWEEf8KAESdSbk1q6pk9K5dUt5m3demDySiLQ9fEk33i1BxpUy892jZa2JCX8Xu6VmpzmgGJtmZLdNEAmp",
  "key21": "4b8W8Ncvr7JSiFvJiDKTC28Zc1Sz8bdgUeod1HrUWSF22ibSiHm6u29tkPtPU6VY35iRJk8CHNkWTrvJwmP1Uu2i",
  "key22": "5H5TYXwLrR2Tuyusp1SBAYBE3r8cju2JoN5XKeWWdkvoXYodJf1ab4KQiT8LS7uMNVnP4ahp5C6R5rTUBG5Ngpvn",
  "key23": "4Pf8xwU1fdipwTP8BBBtyuWxXh4dk23W8PoBpPnSVdv461eVe77neGUyBjSoHba9aGgt5WUFRgzjQm8zZusw7PdM",
  "key24": "5eidLiQke26wVYZ7EJ8FjoPGGHBGt9GgThjehSLFyCjCA5J2386LxN9hG8RqS5zeFrkz3unV89Jw1oHgK6BmYtJi",
  "key25": "E2KvQwjKXdb9GoSchcm4ah6tssCbtMWJFA8Xq76jH25GU4vH8o3oizu9ZBYdbCK1jviCF3KcVBb9pviXpwB5SEm",
  "key26": "2Rmjo9Lh6SXGFiXgAUPojfFuVm4NNS8GGgq6G5Qgpcyt5izLt282Q5rX56McZGWVukfemMvA1NMY3ZN1Sd5X1fU6",
  "key27": "4NvCiM8d9zmcsHAnfmn2QSKvdZ2GGBsaJapxCgfs9xQkYazCrFPbJSmGephhqQG2p7gbcd3BA833q5nBkGLbAXUq",
  "key28": "dZeEohniuqKqRT7MU5wXzKcgxutSgjhvRhcuZTfQax2HpFu2MwXK5qynbLH2W7ngX7LBY22Ws59dtYfpZDTuM6B",
  "key29": "5wSwk4KLkYszLZnp6yCjAhQvVqV3BoxV6ShV2AH2eMFotyME1VYpEzngRq9veZsc5wxBebWMA8SwGeqLJJaXBNWr",
  "key30": "3wmJqHFNhm4Yd9EX5He8RzQmqqUNbCw9LrFc8K5BmanhxRY7XmKPY3b1t9JEUdAPLEmJPrSj6nZpydSxft6hnDGE"
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
