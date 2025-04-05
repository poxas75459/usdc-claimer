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
    "4nz5FThEkryVn7BwHfwB7foQ3KEJunxE6WUeXojQ4w2c4hmLL9PYfiMZW8TPmu3xVd5g6pR9yjXt7wdVqjvW7UZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSXDwhdDnco8h6n1wtwnTqG1zgYrf5YFeDA42HJZZD11sVbxztP5q1e3k8v7rt878K29rtHR3vYmeF3gVyHd3Kd",
  "key1": "st1Y2fBikFfJFM2izBWSdshMedAjHCz7PgU44qgdbVFmxyNWd1bhf38nhRgQjwX3Mn7qnq79yH53K7MGegnp2hU",
  "key2": "45vhUPweG8z5Y3r4MbM9u85SpLmdgQC8piqPikawgCNLiGQwNgfzQwmjHjWtJuqrz9sXU9rKFEofNNffdzof7eph",
  "key3": "5V8n15dFZ9cBhitoPwUevSjh8njhaJ3vywWRq1Gc92yagsvDpCcg4XJvrbuDyaGhLPt88bifz8JNbPZLETm4NhTx",
  "key4": "222VgFbWEnmeq6SDnFroPFiVtJZK9PjCAwPFs1jSyj7Dt7NapYthgPSWrv1tVj2Mj7rSYMw3Q9QHydbjm1tg8WPi",
  "key5": "4Xnq8KSbQJLpsBYt5j9vL76LfN4Pi1qMiudi1vC9z2zSRNKAL4zDcdgpxPEwmtABaL8kP3HGtVAMw9zPHdDkdjQU",
  "key6": "wEYgpbhgSQQ8RkQFmdTProutTch5z3GpDqdJ3nzVQu1NCLghUQRvDNeLwz1wHpaGewUXcDDPAizzi9YTV5tDEEY",
  "key7": "5GbqY3aXQNqLRMvF1HMqW61w6Kk1okALz3mPYAMnFUKEo7483UsdjkNbKxh9u3LSFz9mAdysx4gsvfVR1DpgU2Yh",
  "key8": "5yYSAg2D7QTeazvnmqVNtSzb5Q2w943aBKgvBxBhsCAMs9PYzvqwtREvP9LohfchMKcbei1XSyZxCAM6q3UigqcK",
  "key9": "5H8BGRdt5dgpjGtEdeZwYDLs5AoS4sZYivNqro48ogswJGbFjRkMDJAmvKnUM5SPgqontVLiYAB7TFP7JjGfvjzR",
  "key10": "5v57wTZKShAmQTj1CSinxrnMB5UbBmDuPmHXdgaQpn9hS4rWd1wFdAYVgvntYjqKoK55t3hir2anaeLtVEwqjkcr",
  "key11": "4U67Zgwrj1rhai3eJL6ncdVhyGZswwpCNBsNDE1H2ipbUNajUqevJraiZbDqBpAeZw2LW5M3HkcwRRciwaLnGLGf",
  "key12": "Z2rXCqyjivj9YaLfXW5SkH991qE6wyYTpnF5oANmvmFxdbG5wEFsHzXrBRSoL1sBMfMQUvJLxGdZZjNgNt9nW5Z",
  "key13": "4ZJZ9Txsbahm7qbJ1fjKqQLoVvXZWDTfk6HnXZBUuA7mzamkBxDqp8xQXQ3tqKrWP6iN7qK1acxJe5UcfGnDkAwj",
  "key14": "2rXBkhc5GYKZp9UdBJKJC8R2Ec8QhMnMLmQqFXtQ9QYAn4WNR2NHmB3VHYVqjfaC8ARwu6uuAym4jb4Ah15az7G9",
  "key15": "3Fw7AoQUB169dA5hF1Bu1dBVHi6vpiSXd3MR7cfXi5Bhqy8SiWKjG7QaShaDgi2VW4D48FpQ4kqu5vBEqGZnjfRs",
  "key16": "3qGJmT2Y5Mdx5drAXqFN19swTVKEryEqiGfkgzx5kWkL1ZSzURpiSKRUw2d6mZX2JpeoMAab66scrDpMff1gAprz",
  "key17": "41ceLUrLHDorxcapwpbPn4fyCAfVjSHuZiZZEDhLKPBFNTGpFHhthfFJd2tgLy3z8r9yoiQnhxvGnJHG85dposQ5",
  "key18": "3RrdXC5cSPK1HCcZM1Z3v2dKzk2vLYkcoDDJFNopqiR94pJHMNACkvvBH3M6t8b5v6F89HWY1L8iz8KXL1jRDXbs",
  "key19": "3EkTxMppF8LDs8rKbwnK4ww8eHs7ZSa33PvxoQwwNoVJLvVnAa1iRdrsBYcCiigka53p8g2AKxbZUvKB7gdiNZJm",
  "key20": "cJjvAnBMLZYFo5qqPgdHdrveJVfPSQg92N6qjYPyU8VhTR3b4NFNXCd8WzrdNHV79dtsXdHA5ZEbauvjXkbgWB6",
  "key21": "2UDzXF5yUmPQuRkkPS9paXpkzPzzvVfnzQ8M21amDBtgRskNENw6sz9fWuRDRCurVqzhmZ1hFpi6MtNkJayLvKi4",
  "key22": "4zQziJVPQsZr8hC23VrNktc1miA6N7LncgvZYtrnRbSjxuGkF1WDvfoBKd4SV1LJpWQ3nGGKYAqA3gYDRypi1ti4",
  "key23": "3rNhYSnQtR3LgDX6ppBXpTgWVhY8w7kQx3JR3FDkTgX5pSzwXeQ2iBohy5qJUSPEi1QYLAqjTA4ZhCUTkjkh9KAF",
  "key24": "5JXCzVxeG4mE5uSi44iRo2UXtSL4L9yb7DBfy3aYmLnFVcmLKmf9SmmQH3TdbS4Wtwo2rAqZ9nYuhrdNMbh9kKZy",
  "key25": "VQon8V2GY4UWNGbeucEV5vzNQVFDuuJHm1j7g6yHDnvA8p8YmqWyXMT4iyNZv4sNPYnTMGn51kgXDbv3u3rHEoY",
  "key26": "2Vu4h3pKMzpNvf5mkNaFPB1GEcjNKLCmf28jUcP4qLRjrZvYVten25j2WJPg1xx1FhQZf7GJ3gaHqrHqFNU2rGL5",
  "key27": "591fvgMjfbeWjRUkqSgMSYXLwAqvh7aFGajwFcLokxdudC1dLCaXxdCmYgMKFXWd3Whgenpo2J3FAtmq1grW6t69",
  "key28": "4JsA3fPd5oSyao8kY5hrriEN4MeRsz84QGj7z7Hv5fBbNDzMQwM7iQv67njNqkwZuLuq8pEnoeSgiMiLXEg2SUm8",
  "key29": "Lugfg7TsZAMBEwgvWQPx1n9Lm1B9LiPjdjpAY4nXAvmWz14syetxUu1AqAKxJUVjJjNULtdh3HjvPnC44WfsXsJ",
  "key30": "675uHLMS8tzniwZLvRCdEnmbTqXHHBPZsLCjBVDiEaNZKVs4y3BfFkhadDLGwivwoHBzB2jsE1aTNKZSsq4xNZVP",
  "key31": "2SpCckBJrftu4kp5QqjBvc4TipBgun97kfyhUAXmPTicAusLzdeaFYbhMPttCAZdVu6xMMdD8N9S8eekVsDHq1zT",
  "key32": "2Uq9RqCtUGSCzrWp1r9XKsWRTuBVMd2kMdWNsfb7hHp1BGaFNyAiPHTk5AFspW7iRqPrXP7b59Hgd1CkqBn2QBHf",
  "key33": "2oYJ4U7BDYnN8n3Pcirzw93SJ21aRBSxg1dCzUX7jv2maFjK2DTCRQsyuckKpTSPo8Cgx7Pq1xPWnmxYE6GEZ4yq",
  "key34": "2WcZJW47JTGrVS3kZdachzk3RBwvy5caAmUVitbDbRSRDexBgszA7q9XtVKtS6QwGzYXhZKhM8iYHtsNDd2wds21",
  "key35": "2GHbfrmWBe8GiZsdr6LUxKe5JNDU1Pr9WXEEtVZs4DFCcdvTkMjUFWsmMdk9zRAQxMd1L9wPGwf3fqFAH3NTRa4e",
  "key36": "2FPoaM5mqMtHo2NMdk6vSQQQxoA2yLLNCddKavozB9eUELtvhNjDEjwTyknjK6hbz1PSoEL8NBu2wG41fJwMAKEP",
  "key37": "583wFJEGhjk7bjSxsEfC6E9iviivQZfdVmt5DpypjQcgy36FbCW9J1sifL7QFwhhtiRkRBhvKMYEWHhaNQ7szNeg",
  "key38": "2nWQnN6aMPv55HKJAd6N2DjND89utZqzJwtsniFDMSMDTKZEyjJqpXswNbfDCFNozcGCx9Ydrpoo36GK3PteqoK3",
  "key39": "3WfFRbMcEyP31dziwTZqKnMuePrHRoEnbUVjymFNzg3JcyjKKD5SXnBchwenq5XoAjPDzoKCGSprXECUtiX2AKL",
  "key40": "2QCvdwjEwsNouGyukeu84iB54N5eMKXAwYHhJpwrG7uFpsEecRnQ5P3FpzZhaVavXf2w7faWSzRMeqazWF82RxU4",
  "key41": "4AdXkPD48VaMGik28a1cnmgX9Go1Ppd6qQ4bfWmwaMx4PsukxhLmpJgF3HghpFqLiaq2bWA14h1hPVaAURgqGiik",
  "key42": "5tDbdzAEHBVHDKm42quk8ujTuJWDYyiUHTpQTbcPhRdiGXv1cv46EXwiz1eEXSqwboJY5VscEiN7R6hDKH7nXvzs",
  "key43": "42TiyjBNqHfCY82Dp1i1bmhB1fwQ7ZdodSGyvNb6eWRRcWeHhJ1CqH377uZ3VX6U2jMfodCULrXjnxaj7gng5m68"
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
