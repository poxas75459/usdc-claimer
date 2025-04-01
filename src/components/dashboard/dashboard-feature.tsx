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
    "uqJLRfCgwWm4tfdrvLWKQrheNr35hCQto5XqaLVMFdsBjeKbbYnHxhm4iWaaxXwnL1y3T8jqMNyanowdNbT2HRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpsEk8pRHkkVN8ahkeG6ckAsgXVnNa6z4AtuotpqYWYGSsvrGaw4Udts57KjHJjfE5ejAHFFGbhrXKcUAUaikri",
  "key1": "61S5rWzjbvDyE9r4MaFzyeWHe3uhCHiiBJ9FuGbxUeXWHZSysBW62E7p5BqqjvB2cbCm3saXasFsacFE7mZjoMtq",
  "key2": "5q9LXBkoT876cwKpGCpa5Z9gbeCKrCtEd2VwA7F11MUKAQcrqRMGR8S5Ppz7w9hFPD4oWSZgJxb9PcyZUbTFv8m9",
  "key3": "MdfeextiwFp2mRuYtFUsiiU33XmJDobsEThZjzVo9nkBzdbTaMN5aUD8FLzgYt3BHqogFJrfHvz5ESj4nC9feQX",
  "key4": "yH7pBq8nmehVCe3iQyEGm5cPZVf8wfMrHzLNoWA9wCoc5stSReKzz7pVM29463EVN7rcjzCdnwfgYwFSA69VKbB",
  "key5": "5c2FcLWU1GMe4wVjvBHfxPoLqtUeVHrchDVgTtE1uoz5wEcpojHJHihcrU4x25YLwdDVKAa24TcKMjqE67cBkRrN",
  "key6": "5TveRMcWrvJh87scFozTbRzkn8LwnrYziAqPVGKahzh1nNrQYbHCq8ZvM6BZjQ2DMpv6KtwUtN2Y3ah6PbdeQpTd",
  "key7": "2qSG5McZPTZA8U2vXSTX1x3NAM9DkQnU15mdXu2jgwrSDFbokt65EeDUGWybRuvufAxNdvLHch3SeRfbHuRcqJWb",
  "key8": "53XJioPN5FAnwvxw3zpVTfWWkrzrtWFUZ4GzEGzMiaCv82q9w7Sw3571givWiMmjMm9RrTnd9mwMQbCRo4xGs51C",
  "key9": "2t1hR8scwHhgaADmkWcS5kDMiJjWKTyRCTmEtrBnZTkDHfdCXGYYLtqVeey4kJCfXJuX7JRiWG3DPhJezgxvgmfM",
  "key10": "31qRBjSHWmfj7H6Btnh4jBth8UGVRZFF3KzQH95b9rBXNCgs4jGQ9iegVcB5NwhqS6F2kVvoWfRcC7RTpcvRf5RE",
  "key11": "2GokstKN1GGrLtsBHLwGhAusVjohsjUL3rnLxPwXkaZRJWYz1E89TrRVzXJkMWKU4vDVCtNx18jVpSK2ujwQAyQm",
  "key12": "3ReZ6JiJQpfwV98yqJosAwjDjyHQgqQLRCmZMApFLTZxnUEzrsJu5aUCMZfqYe2LPZzygLxQXiqvpqFZfAmQZCFW",
  "key13": "37uWFj5XBjjfzbgR3f1sL4qtnSSCfw8raDb6UaxcJP4H6UEPnoZoozvWCxzBfX1waKKKCDQNqGA5GDtRac1cCfEK",
  "key14": "548y7ELSenZMP3FSD5BRqveXhTpfz4u3iNPUdfYc2vkEtNTKDcsFdbpj99ZSFWAEPZK7w5cQ5HJPG63dTMnEftsy",
  "key15": "44nq8xmnr7zbA8cmthTX1uXyk2ecqyu6VcPySD8bb8XL2k2g4BCcbiELc2ZvpyGd2TDUoyzkDLzwfwiftKB7xarT",
  "key16": "5n39tHzsuqTaLxfszUPRGinWgTM7JvmH3kto6qECp4JoKNMyKfEpsytPt3h9Rvugthuj4NQLYLQfZ2Z1RXUuMiCh",
  "key17": "5jLpfRNYnsUafAxy7vcr6VKoiMeRgmNWVaMQY56EGtExgbcMKLzFAWbeoNAupKaXFdBqP1GPY8UW6Cdf5VZpgAV7",
  "key18": "4WSLHs19hCsRFwUnHi4UfAErkRGAj8DoaYc3wcWfDdFdyca59eJYT27AgLAtB1VnFxABmHXfvz5aA6kcSD5LMaJG",
  "key19": "3QrXXPsTEuwKrUYzE2ShFHTbSqagEWtTkMxsL3pwyLxx4TvKjehXogZyhUAxCXRNLdXQ5mEYmQrXzJ68XwHPWeGJ",
  "key20": "3idkdjAibZ2BEpNTND2YHx4ddJmdFVjAfi9AhagSKF6r1ru9AuRTB9tzHmmqhj1VvEKwXeQWepaQ7h6TN4MGA2es",
  "key21": "2LYKrd9F4yDt357JiJ55WSL2TENxuWNduwZ7UBe8K215eMNmoKGKzvrCFTgj7fFNyo5ciD3JJqdRoAcPVdUV7zeb",
  "key22": "4j85kGJRsW6jakFNce4E1B1qrfGY7WrSMY7F8p6QeYbCxDsDzpgPiE2MBZXYcjwAMqfmwvt22WEvyviiwSNNka6m",
  "key23": "2G5qmGTUMaxT37kFxzs3C5F7vCztjgEfvAcX2YADJTKDGt5f1qpe7Pm1mbnuHh11J368A7jCMUk7P2vmPpmyBPQ5",
  "key24": "5HdsTEZ8FmDYawKRMhUYZrGwPjr1AhsRMHhkzSEpMbmSHMBWpp2P2rbaLR4yvjWtYkS9E93BdxFgBvQcmKCMfzoU",
  "key25": "2es9WVSH1D36VBndKVnGHzBkM72du4ZwbkPdiV56zHzCsbK67T4n3b6C1oLEaWBxoC9K9MxxwHtFi2Qv82s5GU2Z",
  "key26": "36Gjpx3S57cm4zC6D4GSk4fWgfJP9M8noVRR9oFgxKtVp6EVpdod3kbqfy1yperY8htQFB5LdXWZRsymZrhgXc1w",
  "key27": "2isFbhx2ghNFvpgvGmbuDYQ5JXRpNga9DSBdo2LoN66zBrQEW3jFTiBCPa6bX2qiWzezFU8NbGmXAqsVVBffLhZ8",
  "key28": "F8HY9JoYh2GuCb1SZi5KqXb2XzH9KGpEXc25G3jPPGW3Azyz8hTznAutfPVCYbUaDaSr1dCGRiAo9Fh4mLrFb95",
  "key29": "5oTf9ELQiAQnhwhe4cw2go7eyxrYFU7wNycek6vZE9J1vfKyBRoGqrZYWJYMWHBsbpSJBBKHgsaMYhfpiunHeCE4",
  "key30": "aLgGoCZ72XijRKqAtYLBTcSnebvfFkyJNBuZyNmVhZcv8Q2pPQ1UNKopGRi3UmmynR9FmodxE2uH6WuojS781aN",
  "key31": "3f211G9PeQTcc46PxUbq61PinWok1iERhrRXmPqLiNZNXUvGSmwAS6QHehZN8o5d4aNm63YECnoETyUj4xpPBdFG",
  "key32": "gtJZSHFYfFgE6zGQyRFXpCncWu1eYBDJ6A2qVgVx48yErGi3nJaMi4Zy4M7J7etfNgUaafAeqXcBjprs2wJJ1f2",
  "key33": "2ZWwRPN7JSrmfthsYS6X5uRFDG6B34bSkzVC5NiUm5VWxymmm6RBgWnxQU9Di1VZyvVMW62W1im1ywwN1bnw4ZdN",
  "key34": "4Dz9vDHCLAtgAXoGfQQCN8Ke55DoPnvLDphWxgZJouXdhTavKKc1e5DQsV7uaCZYKfCwH6hF8hKywgfsboRoFTQs",
  "key35": "4uZbU4VG2XsbgiXSuapNWF5yBvbE6Fq3Bdh46VaLterGb5HeM3E6ZDEM6vcxXj8yDy1DkQ7tARWhUJwGyNvqo7AU",
  "key36": "5Pvdp2aPUFyMyzW3Vq1miRjbDDphVqdtiydwr4He8p1pk8bpHYZQAuttKsZ9SdiowqKqaxwm1bRwGsnmZ7e2Euw6",
  "key37": "65kuU3sXKfescyJ4uNWmwZ5i7WHs8ihpGUR4MqW6QiaJrtPdPatRiuzgo2zypavmdLKZJNcXk4HeMTPqDqWxEcDK",
  "key38": "4hAJj2JuUwBvkLgcKoDkVJjdju3pH5AeTSj53Ni2uPoyy515RB2KNfiYz8U65cR5XYe3jcGCktu8Q43GY9A6afM4",
  "key39": "2Lh9meb9HLasjkoa8r6icGBFTwApdwFg19qRAFJW9Z9y3AKfroB3a8jgXB5nQWPjhmcDHS5Y8r7VcgsBoftxjtk5",
  "key40": "26qdC8RrB9Tgz256yBiLKZzviG6vkUebmtcf6sqs7zghofavrGLwPgJ5U1xXkGoevChosvRePkgq8Qea8nb7yud2",
  "key41": "3rvUXjZXRdRueQR6hwZzX8o95MZ7YXxrHHa5ty1XAEbvpEWgYC33cVKZfuRA5J6iYpU54QHthaRwqnWc1bD8qvZh",
  "key42": "2c6t1hB7GSM7sSx6uJ4MyxU2z2rqTWzTwDUiK4K9in8A1PphVi6pNnfxyMEn9U4nNKCnzJpwcs9mAKidxFREn7it",
  "key43": "2EZsrxUFzcnxwEgC3DsrMQsEAusBGFG7ksDbuMhMkoZkysBXjL9iuTzbWDkENa9FfjaEn2G33qhKRYRWYvfGbVsm"
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
