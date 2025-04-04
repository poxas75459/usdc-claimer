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
    "4qJQFBQ6xjo54pyPvNASjL7gdWB8ieVvQYYTEgVzcm2NoeiybKPzWgydbFBLjxgqNCcya69jKsYcrhBtfKoJTecc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26oyEqE4sPXziJwNrkpXVDTMRv3cfNmA75ru45hh3Xfp8pR624Xgt1YVyPqF8PJQsHmHePGV6qfFJrc9gre1o1GM",
  "key1": "4qHZPrDmrEeTkZW8DtJhh2oyLUWyG8nLALL9pvpHfg92qFSkTWmnokkUYMLwnjYyKBruybPeruoKKBHv3SjdV3km",
  "key2": "51ss3cQPqYDezKA1ECeC7UjHgzAYP32PYCG2jqUsQWT68cud31ZF66UkKDXLEbW6fd4JLKRgd7cpptP6hwLnQjzU",
  "key3": "Sneo7r2SQHdVVUcjUxq8oUjKPTVT8D7mENXA4s9zA7bHW4LLEEkNDCHmLzqcxgkmSp1A7ewhZKBf2Z1vSYkSZhS",
  "key4": "4Q2d6nUooNRKBVhSaJAqViTT7sZfddhMZHj2gNyvEvUEvURQqDvFZVgJ4QFa9ffxYoiYRnABxUAeSkWoPMFLUd1T",
  "key5": "PyX22BN4sgrbJF35hzdyoSet7NR11jkWHmAQwVdZHJv7nUSnLHCXNkMsqZz9XVynvXo1cWasxRgzUbT3QS4u2b1",
  "key6": "4fUEfgJ6DKvVTV6ozBscQ5W5ANLa1ekZDK9RfXNwZcqqnsSxMCqpGTjWcLqb6iCXTcmwrhnsq6QbpkrVCgBrLCHH",
  "key7": "7o8wW9RBiwuXSgxzdc1Fmg7WggzgPh4nhWdbkAmLxqE9J5SU69D5SbqZzdW956S7Qf2FFP4Zk376pWDrXUoWt9K",
  "key8": "2nCV7wi8KLZ2rHBZL7D3eq1E6p168E7vnLW4BQzaRf5PrZtwqCHsMKtRnfshu3sTmoqktqrc57ZY2MzbycsBcstx",
  "key9": "5gdKzif3zWA6RsuYNEZXm1dU2pmErSVKtqYVskgcQWQ6vr1Rry8A9Ps9PFtFCLE4TepG73X9pWazi5BbfmKpyq5d",
  "key10": "UEby81CGKXKVvYSSch6CuKN6cBJ3tKPu2gccZ8tuB6MZ4tSqHN9B8zQtMHiVq7aqF2pXHovTUoTyfiGvLcHCY1G",
  "key11": "4zKsQ3VYvtVeprcHoW2QWeXd6V2f6gCkdotS3Xvq5mxr4ei7z3Er59785UnS3TMt3pzc2i9pi4bjqE6Fti6e3c7Q",
  "key12": "3ihppcK2uLKqWb8HbUB8VEtbHJL2antodWWb5WgLAoJaALQ8hvbpVWaMwfdwmmYgP5CETLvQSfwbwud1JRX5zSTa",
  "key13": "4SdAMusQVsMmqfBotsACBG1U3xUSWvnuWiYKF7B3xLMgrgtvsvayVXzSus9jwcqBnxsSirxG5Rde5Nmj1G5fv7k8",
  "key14": "bm4kM5vFfFCqVMArme3V94Amm16pevLsks8HWsVpkkXffWS8bYUa5361iUvXP1wy8vTVCJtGsju4ZdbErY1Qnmh",
  "key15": "51xmJ8D4PXwQcrZEiEQCD5ywVDC2VQy4XbP1tXNB4FvHaJcHz3bJuqixY2UgBnX8QQnvoa835yRoSVYH1AfLz5ZX",
  "key16": "2bD9efAmG1vaFzBTKuiw37kDYBVUmkYaNhzz6CeXVUVchPE1nSMQJqwJu4C4kaXhSHkLn1Ga7ixwrZfpqguxTQhv",
  "key17": "2DoBbYCwfuW1TqHxiVL85KjvZzvHeWwsdvptAKYrXXAK99b53wkawjyYSPHPE6o5T4FQxWh9hSxDvT7nMRYsNsU6",
  "key18": "4aPiDKfbAtPUubPGkFpfmiJ5PxUnKgd2rCyU8NhEwJ8yfzHaNaMwXxeTHsx161qJtGb8chDaHv5xU9rDvJRxd6tY",
  "key19": "5Bas2Dh5LcE1GmyygTrP9NxCQJHdPQCBirJK9fhz33BcxAjCmKKMcc1cDRPwxEK8e3CeuVFqknWRcaerzM8aLYzq",
  "key20": "3NNsKNBUN1nfGHc4Gp4cADicNnYJxFbxgq7ofMKXR41PtXkhBgnoXAQf1E98pLGiBKmYsmKQWacjzfdrecmCMCgc",
  "key21": "4sSmBKn4CCaZffmjqc6285kKVTtVqzcuRgFxrnazH14qYac3pFdKMzCsogv967Mjk9tcdebt2ru41xxun2AwjGa3",
  "key22": "21djUdXWXfVLGiBBxD8ySaJ57qGQBsqcSyabPmDZbngUXdNKzAgzuW1F6M4fwXXedvp73PKZXHgke6yKhcTva1Cy",
  "key23": "3eyMjufDMiv5hsxMaKJ4urVTHxVkatDz9mYCqcaeq1EZov6wF3qiMyH1tiDetzt1Lzhy78BYmTr1RjxkjwE3QCsd",
  "key24": "4KGvSexbBsKQFLHudeoYs5Lf8eSTUKAXUcVhwbTboQim9x2ecbcP1LAe5N5QTboyMVsiiwiJ6AiaH9Tig9XNXG2G",
  "key25": "5jcn1xxivyuc8vjvzUXRzswz3TXKYCGEdJhFMzmrDH24gCHz1tS16DJP62rd3AuExdS1xCq8gesycVknUDVi9zeD",
  "key26": "4Nx1KaDpjUJpFaZaycsqz3Mxv1ag5wKamJ5T6BnJaCaXSZfs3U3fQRaTZrfiv2Gntd9EhzuZKL2FR3LaFawEBiWf",
  "key27": "4NEWwUvY9j6yLyRR4u84xZTc12WivYaGpoKq1hfLGcc8cyq6uUCCx87Pm6ZQKxhnMyYSfGLvHcHVAVkvnc8ASBz7",
  "key28": "szv7znGEpafqyMpzxUYLmJHZSLZVwVDuSG5Kfzhy5Dv2hatZE8f18TepjNstJ79gk8hoZLz4zFMUiytJwR5FrcB",
  "key29": "4yj5qTLA9iEZx1aRbioLpYRQVY1H8XfXBzBUTvNnM6ojg3YUwQagDvo3fpoJUyGym3pxSwom8o2nkp7aUZFpRUoP",
  "key30": "3SHxoSkFfxdsjbwR1gWeapiMEmDyFcd2M4Qv88vD7k5nBFZBHycW13AcDSwZVtTYwkgmPCCiSMgsgz6JththXfdx"
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
