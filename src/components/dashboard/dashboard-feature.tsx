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
    "4SMTftxpbVAYrszjG6k7pWNHDvigcgCT3XxffWAM8y2qTD7kFVChsyanwhFjUCxHXNtLP3Z5UaMTnGcnk9epibC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6vgmtkTC7JiK4vX7N7Q6HTM3Fbw1zNK22KnyKVTfuC3vouawhNuXSVVARgRRkh2fWhPmbHDWVYAjN4y23YVWuG",
  "key1": "Kc144xe31kWVVJr9cQzuP1NHeQhDCyqmh61VybDVbvCCZLEArptsSS2TuegFJq9FpLd9KcDGuf9qvUXRM2qnA2D",
  "key2": "5aEcTv4juMEywkwPmTh9sw1ZzKR4zzn67qrU9LuGNP4R5w2wLA3evKMXYAwu7vGJgH57yXK4oe6M2842xDQij39j",
  "key3": "4hTx1YhHtfMBTMBaqfXA9a1Fvxe8rKYvY9JqZf44URZVdupNY47EYMWDLfWwJkiZdt1k3PKpAqgGdyWznb1uBVEz",
  "key4": "5jHj1o37VTXrnQvTLmRJEjRCQ7kUfgTXvhzjBBmg9R6jgRmCvkSPWUi6MzsYehVcTufxSg27CJ29oHdwpNBQeF3b",
  "key5": "4yn7XB5TW3BMc9VrW45CHje7XhF4uokujN7wZ8BjsJY9eVkT7zZKuR4dpneXtRw4NiwZsnD71NxExT4tqtsff7mJ",
  "key6": "5jtLPaNhEzAJNnSuSVzj4HVujnjZrniQw2J4o66fTrSWeK2FLLt5KZq1yoUoF7t4dNZ8ux4Rv3xsd1ipmEQYq4rp",
  "key7": "4u6tD4Ztip1cux3yLu3r9qGAuPaAUKV4qLgV3J5DK1NhpKy7irNWU4MvP7JTd8AdZtzUQQ9rpG7aFFtVotYJnRaL",
  "key8": "2QfCF7vPX38dwscpyGjU8EdtfFCbTMY6URTtqxi9iMZSwiq5c7mbeLi5H7Z5AXRq19VvpiMuJ61yHYjksCzk4wNp",
  "key9": "56CTynSrRK4s5oE35GvbTFu9cMWhf55iRcWe9EkwTEiJBnLiKSa1EsDCwXoDBX1XKsXc5tBvJsRdw8xj849Bdmk2",
  "key10": "9Sqmeti4Kq2Jgm9vpQZUxtpCxp1Wst5ihBZd58uaQtiURAL6386UpXzuyqMoJGYFxfXDrb6jWp6gwTSCq9wFsfS",
  "key11": "3fy6upc2XKnn7VFY6nZBxdLDb1bgCerBh6YQ6cPcMg4U7a8mpZt4nbpbjGQskeRMwodmsjpzUkoMz5epsD4T3dTV",
  "key12": "2YdPie9kLDR5cS2HGE8rUkNKcwarcbvE8ZgJmF4tq8vBEsjn8i54AWSWpfPWXk28E2pmwNqzhQcs8UPNLgiFswfi",
  "key13": "64bUtrxnYEdf3aWs1VWc2g9eWjYd8G4dDt3ZFF3GSkHzw7TuNc9CGuzMoWyGBsAn2vvMwGdDrhn2rPoWFhRYrQqQ",
  "key14": "kpLhdsiZpo7RkWfnmueqpVeE9GuzQihZ5gNCn1MJLmPAG4SGvUWLBmYFUjkg1Kqa8TsKggyYtLHCeRo4rtpmUzc",
  "key15": "2CxMNPSZiL6yp55HkzKcJUNxWaiStra2ZXMvDSogFxvNSMS8zVXgiGsME59g7R15g4ieD3BS4pKfk1EVPLjQvDmG",
  "key16": "4Efn9NkLFNJE4ApvpsQ1AgYwXw9bwoAP34ddSiafNUCimoG8MxCCyY8kKZAoRq5m8fSdJf8fNvonhfW12bXCAroL",
  "key17": "hEcda5zvHddaD9SeW1H8qZPh6cywSa5E3VjZwxccNAhYCSETgrmRQ5wbH4FavXTsbzfpZaPzB6CZX5oYGMg6xL8",
  "key18": "3GraspyYmXK7gQnzRkBdyEFxNhTbxcpUZYfzrJRjWKZMkHiydJWgz1ouDmAdaxojwpJPqE2urEn4qmcBZ2A7xcnZ",
  "key19": "55E4VmLt4FghVe2V4YZHojn4Z2Mmy2nqqx42DoPiCyfVnj5N5f84c6K5jch3tSQVX699DUuZGibex2RCmgHehSAR",
  "key20": "5pqKBC7Appr2DQKyjWRVbmDi95iypmqXUspYW9E1dJiPPJxzsYiQbdBSCPxHdXEyojxvsRCYiYNFA3B38hLJ69ot",
  "key21": "4AQAHw2QVk9S9MC1eEE2KRQyANVFQb9UoHuU4Pa7XF7UHD95JVGHhdJ9Mnn2YeE8j51hzoBhE58j6ZDoYw7DX5tZ",
  "key22": "4G6LXfGUxbvTuHWtBDnuPQREvjp2XVnWBNzrAxDdjjfKK37Qm8eUUA8wprEgJty349KivB94KQHXMBSfZk6rho6F",
  "key23": "2baW8rND84TGPwZJ5QFqdDJf2hnEWAjcFVrDrwA6GWxzDfLJ5VVBtAr45AEjWyX4jFjHUuhfRQcvUibjZJtQ8Bd9",
  "key24": "5qcLUAQAS7CRJTx7FB5EtY7wSzsH8mRFTgG3ZthQmD9Mkm95XQy8noKrLXWCVqBXqawfBmxLCWyP76EcdvNGwcwS",
  "key25": "2mpoFin5GDWmWWW6X1184KYb5M3gQcZKvh9ExJzxW79Txc3sDL1kZbroEovHP9y4FVhbNFCGVGxJuej1sWQG37cC",
  "key26": "yBF7uLw2nZLCfCpJXbuJ3r22XSKqApUgU2p6aKzc7ArG2rkypfXHf5pHBVurWynssU8PGhE9r4QSy7XyiSv9n3n",
  "key27": "64Kg5h8qU1NVWUDhg5v1sijMTYUFjDY8urZKwb9DzzyVcTnUZXRxvQ8oZnM182BiVVm9HwqrPBYJU5vKfyUy3MPL",
  "key28": "4ySje6XDT9xBNYfkcFSbRXTWbShUVMinrZoavuwNydqkwTCxTJ2mFNJZFtT2bKbc6yqKkSMnvixBVkDCiAgwXDhn",
  "key29": "5tVn3hrsQaD9qWyH93v3qmrKF7u6b5rQnHtiJBCzaBcQ3dsW1bvUEcsPHFA1jTXxE82SAWnLUGz6B9KqEvRiC8Cd",
  "key30": "3nLjtVfmEEsu7UcBNcuPKtMHFjzRWkqHzqYtbYAxuPqxhit7BKu2Pg9ob4CvkK7UQMxV6VAaBXNLDRqxt2MWqoyE",
  "key31": "4wRdLWAVWPj28dYjirNU1qbf16CDk4HJP3H8ePj3MKC5ouFF8H1gFeoQrC6EL1RdDS53tzuoaKBmzS8vH1Qq39nr"
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
