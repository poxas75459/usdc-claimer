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
    "3FyyjNVBgKcPNDgj7x6gJ91Axgy5uTpFWK2JX5L4LbWoGZWxPqGo2dPwJDbdhn11nvBaKQ95cDP51gWvkSYgqwx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mr9JGzB3xhjeJst61pSRN1BDKuiJz5MmShHq7Nw422GHBdWRLC3BQuTaCowMzTjEHaanP6Gyfu1SDDwMwohHxtT",
  "key1": "AX9kzDdTEnThkNuPuq2uXgrgAT8Hfjr6HSQZfmuahSxpm7r7NNzgVE8oreXbzp5Y4u93zdZSnPMMvemewmmYJmL",
  "key2": "493BYLm3ofrFMJzu7NXrhymujuNPhCytxUUiX92VWdnNfimj92LVNcjH6jp3Hon5jK3Y7suueGBkseorLPgWrUhG",
  "key3": "2GTQJfj4tTHPykv2sezFc3x9xRMEeC8K6TA5cMhUc83hnPNQaKZ8nn5ky3MzcLHANMCxV9zGyokSsTppbXAV7dwL",
  "key4": "4iSA1zR9ei89nqUpjaFZfCwrYGCVzAeA7tQMmv1b4S4ar3EYTfLJKokqWC3HB291EEuAepjREKvhsnuhf3eqCrE7",
  "key5": "9KAjFYuzNHLDG2BSLUgfwnSoXDwE8z4ac5nPS7FPLxBpEhswaqWaKjQTY1XmxtWmus2GE8vtbYicB6L6CtYwC8B",
  "key6": "4rf8XJPCWyZdAQWsSw1ETX2SnWLucc4cNZ23QSgF91vg6ASKQhpBX3E2xxDtmgLb1x47weThXgPTXDbAcUZ4zffQ",
  "key7": "4ZiEnJ5up58xZo1rWEqvYC7SkAZQTHPKRUoUU9cNaCCBdFxLd8heyFDqKdkpFCCs2pzWNviHhVRV2ecPw4XN5Mxm",
  "key8": "5y1s8pX5F9ojMGAkcWqyBUpsjNewk1Gz4rLbCsQU5LmnYU1yTYpgrU4UeoFa7hM4EwfGRcc7qJ5ZAEX1Rn5AFy1U",
  "key9": "3Pa8etL7PxgzFZ5DLbkuKcxYFKc5fjkoXf7nHPDTtcLxyUtqUWeqsVjDSzS8LuLLTafRFMb7dDc4vM9R9zyiP9QE",
  "key10": "3RDaiY5o7m3ACBu9XMA2jqfaPzMNQzJc9t1epXcpvcwfN8U3tRcNHr4V1JtYAXQcAYepTDFYfSB1umkFqcx1kkZg",
  "key11": "5V5EEQCnLzvLEVh1HjSp7gz2jDrrq2u7uiE8VeNWDBxUZJhb7PQf4YfZNawMkLSVKKVsmWP5W32MaJvNig9k7uda",
  "key12": "2HQvmmttaBNW7L7bkkmQVBxpUmi4cM8Ex8gKNpB9HZr1xi1HMTTD9PqUmrVFs6RdbJb3axyMr7RP67xW723848hi",
  "key13": "3DsjPAdGGRGmEgAfVb9Bs2edKwmfCFBvn2tT4mfHZD7JL2kamu4fw7oG6VmU3ufPMNx62Zt4VEa5HcEXvwRoRR4a",
  "key14": "51LJQrA9LsP8rfMPKmHDMuhwi2AqxTFjy1NAcrHqNue5mAhJfzFLaZRpH1rwMD53hkjMt4J3VrQiywJkjJ9nYHQ6",
  "key15": "5H2R2QM21k5cKGcW8R14ZQpwhPB79HwyiozkESyHcpJz5jvYVZBRprnvbEfsH7Fnu5Wv8zjrFb1qkH87M9AfXa7k",
  "key16": "4PmkbUYc5xiV8dvCZGkMUNRXf7dyPWsejzg4k5Nboq5yu3th1cwwhSA9ZfhaU6oY5J9UKYQqEaZfiMMGAkhEb9z",
  "key17": "2q2wik71pmU5TeCwT5hXtb3N9RxPjSLNifAR6XMMV6ACvUd2WC2xbCsmEqao8Dxb2FtxjikwKsPiyCd23pXzGc5r",
  "key18": "31C2MByjJMpK9g8Ycb4xhH4MZacRYBKei83gD8wLeTBBGmiACLWcxYCcnQ5WduVTy4DfCivNwNgQt5WYgkrY5ADK",
  "key19": "3mKCqV4aKYYDWCNVKtkRzbCCjB4x47AAXVXbvZzntFvxNbYxjkqF1jusQLUzyPBongYHCDxbiQcnd4XoFUF8yHcH",
  "key20": "2bEDb6vJn4swZbbGbwHZXwryykSu374riwoYeq9jxb8jkMSwzCrHfJdkdg2yp6sdVJbFdkqxHVaFfr95Nre1bEPf",
  "key21": "na3V8xqCoiGiYTBunw23WZtGBkUd9aRsTWfgtbhgfY7esBvJ67czFMXPoB4fMQ5PGf2DCsorKFm1oKp4n9su95i",
  "key22": "i7JHPPWcar31HbUxGwcsXNTrfjisJjgn5NTwaGmYVUzat1JnDzX4C3XpbCKpixVV3fup2sXT3r4iCEJqaDRyeP1",
  "key23": "3d3TK2iYotMP7t3DrQ1Dy8kqRb5WXHBCLrtHxAwcfUFVNjr7aTWHCWMHebvEvBXSF7HUe9Fy7YMPhTDazEhEsC1i",
  "key24": "49gP1Swn3WjqdUg9Dp3Siey8TToXMZv6qm1gyrrHJkLzfVLDPN2fvGvzN3D6kxtKhYosSqYft9GdUzZJKuXtCBBk",
  "key25": "2ijitchH8tD5ievWD4cVahXbT7A2vRw83m5jRWM4XJtRoqro7j76P94APc7mDdydW7yBGizadccAxpCPbjrWZ6CP",
  "key26": "5p95Vh4hwxemv3xupdoCMgFH3P745hEosw6AgWxoBJPEue7RvbK95dF5121tMqGABtEBWfA8SqnQXK9JyLtf4kTL",
  "key27": "5wHk1MA8iRQaaXm9UhQd5BhAmuRa1CXT7B1Xmt8iL1k3pHBFBZdhQo4y5F95yQ8E4Dv6Uw6GDtQy1CT4Ly3NwR3w",
  "key28": "49Bbr9bZ7GBVrZCWCjuUaFPqcbTATAQw9ieZyteLJrPg4fPA996PwGaxPq3jgS79wTNFzZzHyfpPjMKd2QUt2iJs",
  "key29": "KEKdjt4S7Sk5ogk7HXAeWmKJ1aej5HuoTXZJZarNUtAFkeRVn2qftjV3t7qm9VnhSa6fgSWizQKcT2nj4e8TtwZ",
  "key30": "3MPTuyHhNWfUKsJwuHK4H2HbZXgXstgZYFAZ5ZLPbZWgDkUQGdkkn1dWbUhA76cFH4pdudopndQkERzyCKbj3zfC",
  "key31": "pzFEBdwY9X2Ry7GRnrQotgSZYHgnBoGgN8D7THEMWDQ1pPjGvSM19j3AQa1FAx5QDrMpUtsHaiHvm4vKsyfS8dN",
  "key32": "2EaaC9dM54dqXFr7xP1GwY7Kvtyh1HNHzdbBX4VuGQ3bJW8nuShTw2tMY2FhnELcjHPSFf3ApWCKH38pVDvhFWdH",
  "key33": "2mFoWDKcri456kWMwV4WKBMx5sfn1YT2fFimkPGawvtH8ktXoPSUygdRb6HsFhKKmHLGUVFT8xawEU9fwvHJFGZ8",
  "key34": "46aHpokTFM4jWe6PV9rWXHTxZ894kx62bWVjEHzwpYv87XXVxTjJDmvUoFBnWxKdYizTgkmCFpZn6XLoHVvEqtbr",
  "key35": "51ebxU3E3v6E2s7DP5q5yU8MLEdLwMxiKE33TtsCTk5aFunyw3DrMDp2izrGcbjFLEruwK47vsYCgCxiixrsdpUk",
  "key36": "4gdVvgvkKL8uqRBbgQBMY8eb4jQ7RCZfwp51YUxMprXzN6HrSaz4wWZritYwPTGoiePRW52L6qdSV2vHZJnPHmx",
  "key37": "4NMYbjkPdttSkLAKD9xe4hU6bj9EWHS63SHBatKm9azLNEDPU9n8MQCQtTnGAU677ceYzVFmULgd7i84gSvM97yq",
  "key38": "299eUwP7wDZpZitL254mgZ1915UFch18C2zC65DUGZro2AYtHTQk9moz2V4P3ryut3r1VFPzTo5igCiGKdokR7Kj",
  "key39": "4cbu92wP5nTU8Werx54RFTL2dF3Kj9VgwoDUqSBzH3wD5NjjU4hmNmZAbz8idL8wmw2SLGsmF2sWHXar3K7fo5wz",
  "key40": "21Xo4ZB9egcNUNgixp87VDxPTyjbjU7ooesJJvuaznAQfLcVwL7SFKa9uDqrmbxikTZhsRwRmrV3WvVpbNdCQVrn",
  "key41": "67M4ptEMBwY9hJVuwKN8QcGYtYsxwWdTK3932xR3zmA6se23hymKNXMknyRoUHmojZ8UX6Mf812gsgQaRxg6XXMp",
  "key42": "3aV8RXp5M4xFZq4LoKHHTPkpPsPhAEJGB1TByAFbv3Egiph2FNYjhRwr8pVFW699qQMAHS7vmaL2dqBAWPPtWAve",
  "key43": "53veJ35pkjWrGtrMcP1PSznyRyhaG4AcU5n9aLczKhtzcYXzmHG8QX2qUX7vAxrdFqWPHjFJgAYFDj7huY1W32Fr",
  "key44": "62if9RyNNYMKCR9zfnsKDCHTrh96sWnMeKsLfv28BxXb2BBwdWThJZN97AxmRTZwa92qzhbwdSP5wXy5Z6j65VhF",
  "key45": "3THnqaGHgwUmYKBB6iVe3LgQZgr8JVNkdMoHheja7xEb7anEsdXpxqHpT5h3ZgWzEpWpBCKmRkz61TEdzQHymBwV"
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
