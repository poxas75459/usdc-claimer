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
    "dzkNrS8x3H4XJKxVxbmafrWzAV2hcNxdtfZomfYpMGz1VcQTcFQTv4vtc5q7idiehdoXJ6hohq5bGjLmbkwGb8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dq7VMyWx7F6QGpywmTE371GvYPc7rWaQbYWnqgFa44WeePEoS7JWaZ4N7PZyXbfw8DSWn5wtQPC7yv8aBgDTBtQ",
  "key1": "3Bz5FC5EALW8Z8AB95VeRmkTbF6q2owb12oDLNz1cs1R5gxQo9WQn3riY7cAHtGp48RCBimsu9vktsKKkvxvvQNw",
  "key2": "2oE2NDKZbyeJqVtnEtGm6tp7SruU7gKEuguox1cqfTn9kiYyMgj36X3JjhA9Y2JfJtZ24ajS7sMn9tkw1SZ5d2yG",
  "key3": "5775GQZ3V6zLawaM2ESKK4cKF2zQuvLMJ4StJsXPwNr9X28MvjZ3ZNAAzEGnTQvCEvUd1UYtQ1rYQ9T5MGjBRqJ",
  "key4": "5rcpu8Mr4PCwPSGh4VZiqkd5iQvZFFDp5xFZJGoFcfED3FciuFT2hviW3Yx73fnys1DgbGBbEmeCJARorsdgenaE",
  "key5": "2iFsHSrsBWuSZB1PK2tfN8hhHprHXV5CyBgDzwe1hCHRmCh8n2zjJoF1fN2rnyTy9NvTxYnSgCNVkud2Q8sTbG2W",
  "key6": "2d6FMNETgG59pYDrYfhhKKGwuR1FaqpmbTDeNc9dgPRs75xN18Q9yPcaPfyNT2mhvz5P9q1t4pcV8hm3JULvTp85",
  "key7": "2s5VcbffADmf1S4XbejHDfT4WZmjK5uBj7tBVJqXqcbSzW5fcaxHZJaZHC6GxzA57JVokmxcWQupVuLuKRg9NLQq",
  "key8": "63YwZpYU3czQSeQyatWos1rPThEKSiwvgxCHy3Fu2RoC6XEKm9QjpegiUvL5Zi4ZrtUwwLmno4X7kLPEw64Jo9rG",
  "key9": "2wKzFdomxeJ25XtmbcesUEQajAkWeJWXLTyytgiUxfC73WPrNtnapx1Ns5G8agM8ooHvCN6etmQGPN9HtddFRW3u",
  "key10": "5UbDSJ3Ljv3RqXbveWteDnN5CdbSrRmyfDsTmyezFfq7gd2vnKrQqUUcFTqgcokohqKGTv9GTXZVVdBTUWWPpcc8",
  "key11": "3kLg9Z9YhaVHNCiTsExUuUqKyPoCB1nmryv8SRYmZvQu8T3aERSyDg7ENWJjFLDumy1hpUHkVMddPVHxAwgNC1Zc",
  "key12": "QNNhmgBYtMj6xcen7R6kzXjfHnaKzAyZWpmLDWZBJberajfXTTzsY65hiFZXDYqDzuC7qGoSAD3HoQXNJzav9uD",
  "key13": "5XdipAG1w2KyiUP6jqfoGxQu9now63MPTGhxCH5mYkLeBs6vRpyc8nMY5L83WQaWNM9uDJuByee78rysnT12v5bZ",
  "key14": "52GCESgbYNiroq8VpBiJQvW8abuvhr9VRVbry38wtC4ZKPgvAfaycuLmjLC9XuEcrizC3xYY9sYb1W2A5hHVPB1d",
  "key15": "39yGZxTnvH6doVBLcmBRjYfNUunXC9YFSBqZVRqw2B7Qi69WRWc5yWAC76gwHKvD4L3dmZswuKLn6WxeuqM7osAw",
  "key16": "5o7iKqBLvcTkgdLjvEQcJMtjrgsHvdXFyPyGNav8RL6fYrKBhfKchkhSjG1MC24B2ycH5W42BB7w7cTNTvTgzhc8",
  "key17": "5fwSQz1eKh14mtPZWYTxponfWKSfMkJxeH6u3FaufmDppAyJTaKufQ3pdjE3k5soP6k6XijvrTQbcinK9Nmc9e3o",
  "key18": "3PWcpZDfhzVauLBKt9zUUS378GNEtgUWLNCgKZEWwMjmsJwd7edUaAdLpwVVJzb8sGYnYXu1RRkuq2LX1SCjDekK",
  "key19": "4DT1H4pCZzQ3A1GQc6GokzeuG3kVJmLN6kBnDTra82JHYm632mthfYdLHWGGMpZNubVf3xtWsnzwo68AFMGN4sYA",
  "key20": "2PVTfK9h6Wj3tZawqTnmpQoWPXMGiLVqAb5cHsBP8oiaXKg1kk2Hj5VhqhKhMeErb1yQGmVCr8C1mVgsa4PM6Kwg",
  "key21": "76foAReepgE363QLLeJNjwke1tovwkKKiM1zU7gyRtn4hJ2GzT7Q2uDYira4PVePvRSNVHG5uCPaFJBfvrKSgjm",
  "key22": "2xhvqdN9yPsMiF4oQyd1ojsALbWCyBFtUatr3dq8dzj9b6PPVrUMiJVfaqH9P32SPmPKZMfoASc4f6K4o3SULoWE",
  "key23": "4FBoNN3WZVzkoBKjoS89jB94bu1WbGhb8ug2MLAFi8b6TdkY3QGUhw7Y45u4zfqoucFBoLHCvzmGSJUmiSDiHw3r",
  "key24": "5MkARmwWqMYztqscj4L11Vs6RrHGMibysB5yvgohv48dMBgqeqWzY76YgKuzKDgdmHkTgMyhSy3AoR2eCqPrCvaT",
  "key25": "59ToLU3WTkg4Y8abgCoQtjTBX7BkuEnKcUdAoPTj1tDhtu7i96Q6G9SmepuehGy9A5aZzNauLWsXp4ZScNuc8ZBJ",
  "key26": "23LaxXEFFDC9NDs6jM72N1Z8mxrF1kxNCeJGxareb42hnuvWGFChMBU94M1gmumedY9WnDfCEqKoPCjtzXW5DGt6",
  "key27": "N5rDCEmWLqcUvLyX5UbjHBDe6m8vBrfU8fTBb3n7K1WyPpn3muVVQjC2oQwqbd1ECLXgprgXzggu9JCXG8ETruu",
  "key28": "3h8nirrmA68o9nDzP6EH6MUbSaJSGD8iSwvHw9BxEJWm2L3NbLN8M9i4QBz7fBW2VLKEFe4foy2V5h5x4wGQHYs",
  "key29": "3opZALnqWLMXVcEAQevzJwpoYRQn9tLGHvi1gKFN4GiT5RHgfdR6yS9cGdWggwWPqJYuv5bsvSRwF3HSYsBynMvg",
  "key30": "5XgR9k4AFYcoVEMXd1u3158NsSbSmrBNJe6e9mGdLnm2hitgQ3Go73ErHfaGK1zxbhzyq44tkEanq3wPjtPKFqoc",
  "key31": "5fXPJmNQUVN9bAiNyR56WpSoejGTVTRs7oYYwNs4Tecv4DGEUojghNZNn7hjC4t5vavRzydh5NN3c8Aj5cee76wB",
  "key32": "3Txfvu8UGFH6vFqJHkDRt2yfAMyS2P5XbWkEX5GraT5sADrnXQ7o8eXNEuZY962R3Gu6DNCjiqMszjPhAvwgTxnk",
  "key33": "wUxqVyFT6RkvvA3W7tADAwjygHL8tK9CkCVX673LquoPFgz4XXEWZHHuSSQSCrWTJYi23wanPAdrtNvqe8uVKaj",
  "key34": "4uVvhvK223nHLtPAExVdWuPwNM8HszE1xLGCqE9o1K3qYzpTY6qUTpnqQbj79AHtBvHPXdzGoDBsF1LwbHFi15nB",
  "key35": "5WY5mviQUC25RqpzV3xmGbM6A4byc5i7ySqr6ynYLWnCEGnRacoXEa1vLZu6woqKWtTuWNTdoSzCfqi6TZyJokSH",
  "key36": "2Vfb1DRa2FKLpNrYkbYJGJ3jMNPWZsv1Fa2vQaUTrH2PgemxTvn4jEFhjebNzB2SC15mjBxxGkJDUQt9sxtAKrTo",
  "key37": "57PvNWuPeh3vKqzDjdpfRE1W7ar2SZFep3HqhcFhFD3QGRXkJ3awQciQA1NnC3TvhLzQHeHxz1TUjiNVAZkRfoKK",
  "key38": "5LySyAoEv2CCQ5S2MZzhamicxVTmmnkeJZFycL6G63pJPbozUA4or5mA4TFB2BpsEyckCDTDEvMCwfWme7D5Juox",
  "key39": "3XTJhFSTytN77q2iy1DSsi5QKpAEq9VAWzWnNtqzgksFiMfg7LVRpF1Mg2Efxm2PipgbpeVzfeR6jzhobjYpXFG5",
  "key40": "3bspWLsc7WeDuQAxEBCDsksFCxbGnNq5m2QF1vedrFFuejaqoNyKeqmTHhzAo9SgG3rsnU6f2FgYKrGX44CzESaR",
  "key41": "36iMWrL4AaGR3ZPmjSkfYXgHYcadooMkr7iGDyMNHrJR8pbyBzJGkAYMUeM6CWZGW5CJeaRtGrneGg1oA5VsqZvF"
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
