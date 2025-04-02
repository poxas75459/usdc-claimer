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
    "3RAvPWRqirbGsmYAuU73iQN97Gmbns4J9shCADJCmaJmFfbqvUBEMGXNMHELRT562nmQRkLNznqMThFuxWEjVGfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDFrkkqwBUHZGDzEcf2wweskkLNhBeQ12QHKnHhFDXfkeUiyru52NKpE1a3Wn8qwvVZ9jYFKakUNwj5b5J8UHW1",
  "key1": "3uDtjJhBFohscsVZXDC1Vv3o78D9SuhMfGYZsShAFGnPJ32w5VjpRCG3k2GJWsaKnpXkmZnsAqQthYBBNmN1aVFu",
  "key2": "BmF4JyD8bs9s7ycCvPZ3UUGoX5hVyMWgZKvgrzwnYU78Hq4mm48fksZK5uKLY3rE57EV76LAqyWMKZbxrkrNJ8Y",
  "key3": "2DbQHWUAvP6WeVM9S6ESy4RJ1skGo3TGB2d13Rc92wwNnprzdJyrvxz5LwwYVMhTD6wrkRWGmuSeqGbdoz71pfsz",
  "key4": "3kGWqZ2dHGnmzSDLiLUdvAV8qmwsfaeMvMu4cZvxjfHRvy3UU6mf2NFGFhP467vHibAcZEQoGw1Y3w9uXsuTLhj4",
  "key5": "28NT6W7Tj3XC1BQBxPTNwHC8G8ku8sQJy5T8dQSxX8VRNNdGJtKT6JR9KhVjTvS9S6TnBj3jTxUecpnhj2Se7KSe",
  "key6": "4ZqbxgotKW1aAmQ3ynb7gfzQN6hqWJFT5aTigSjgoywvoG7uAVQvCdRHCwtKrLR1kQcxbmp7VL5M2Tkv1hukLkeM",
  "key7": "4R8rY1eVJVb4hCYrDTsKc3bPMUfEjuz5evt9h1656HUeT9xayVEhHSjhWfX7t9Fno9RioCW8ckfS31gxFCJKDECM",
  "key8": "cyRb1BBmbG5r11BMrZ7m1C3EwRatvwaAoM71nxM8rKs5e9aXGtScbBuQyh3EiMbRifH67vjz3RZDs637QZC3B9F",
  "key9": "4SsH5A8uedKzQMYNinmjKLu8JXydJRkfvRjREjhhBCXkeW9suHcedF7QZcmo45XmMk7E6RYvLM7FnDgwEEw51wqA",
  "key10": "32EoenHPHwLLiLqBYgkemyrw4P7xkFNB3f6zDvGaYnJ2RveaxDRv4NLoW3kwCCyoV1R9DgFKPu1VHzR9ahXZ5PvL",
  "key11": "4GMwfnQ4TrqwNZjLgLCq1g68oQo4hpHMu6Z6C7yYyHckB78Uw1zW9pE2ofsMf6j46xUtnRM95Z2tEkYPtjhu9rcf",
  "key12": "5mnEV8tbyydEe8Jz1DxEDMKgJLf97AmpYLSYbjxXfvJyVEEv2noTaydTeZGwoRpNHrFqUEgAdmPAVjQQ9WAj4FP4",
  "key13": "2AdnjLPuoyvBiJAKEe1eeDTVJNn9fanysoqexVDTTXCeGxytJKh9uZMR2gWwQJ25J1QoAwA8YE3o2PP2RFswTqfR",
  "key14": "4AGNP8DNz8auWqGAAFGZm3uYiG8SC4X3wtKpkbWVvVBLB3W7ypgcxBXeaEPvrbsmqxYDqog9xPZd6ZVjsmmYJwtT",
  "key15": "3pnyWa35yumWfya9epbjPVAoqUYXZpngbPnyqycLn9cXejsncGekd4o4jvYycvybnD7d12Dtx8HYZ11MbJhdupnF",
  "key16": "3R4xBXVYbozYipU3AfBDh8NE7dkXJJ5KY59dmmZe74BKnKGY6NbMz9UfogqAUSo4cGzy4xCnau86qLk4qWb3KhCH",
  "key17": "2tc7N3hdpPbtiqA3fnZi3rFi3k8RyFEZwtHz5h2ziJNiL4b7xtqtJ471YuEyDCWTw29xwkwJ14cT63AJ5nr58Ser",
  "key18": "5F18MKokGrs664BbXJ1o8dgiC4JrUmpWVoNawSKRdhjFJEEtKfiUcRVbL3dReehhYWMG54DTVN38N4Mz9STxPJ1C",
  "key19": "5sptJiLpWfDpSR5pKT65fMTvQ8p8snXsdb957VgsA7gkKnnRXfbRfPmhBbym9nKQoUK5Xj76QRhXgj7qDmbKpGt7",
  "key20": "3cTBMGuN6LUXLMSurHziLsQZUZJgYw4dru2DsaUDigpkJVuB6nhrBTUoawYk8SERQ2qW4HFcuNhCKut48UBd2ZNM",
  "key21": "2YEUXKYfSZvC1Tz2NqpkYPJFT1TjRXVhbVo1KaSKMqujECpBkyrNBNqHaZPMigedTLrK4eguJsK6XfH59KmPdX5k",
  "key22": "dJnxjSuz5X6GnAzaJJaFsb8L62sgoHGvR7KYAKwnsoY7GRvw6kP3xQkf9niEQZcScyseQfqiNqukxtzviejCoNh",
  "key23": "5QBvpN6JoYsoGJmBfnJuHVfnUXa5zUwJS2g2nq4knNE8AMzqSw2S3pk5fMhWyPeb1tW4zGq6nUdrUHgqAaAMCs3H",
  "key24": "5QB8tJsHW8xepkfjJkDts1dsZSyQKz4nQLgsezxVuny95auK2dKVZyrMJoGb4wvstHHw6mEhUQ4uedrbjMLSzcT4",
  "key25": "62b6AJQKj8xsHbFwKaUnn4yiETAYa2rN5uawWTnheZ2N7ASm7TTt9jhvSRJDWF2U13PtsRZv1S5368bHmvqYptW6",
  "key26": "3VzqqeGuRhvBYMJjQVupVXnnKNfEkPheSD4kJUYY3Hcn7Up8X7xPzpotn2vP84g2hmeq9cA9YZakmwYr1HasBEV",
  "key27": "25uVmwdfEGq3CTMMfxoCSaohPb6xHvxxHiQV3oRZQWkGptSmvvX3NX7zQGR37D8VS5EWXB6u56hNDM3njVsT7Ew4",
  "key28": "3ZCSzedJZba1fQq5qdNjqfz6WPjmP5USP7Uowsjpqd6Mkc2gtuZCSXnJs7DWSPKGZ2ACMw4quuCWhgBuA36UUTYb",
  "key29": "N3EGCLrjrzHV1R1x5MBD66gJpvqdMLU2bWnJJpfjveekaxbE4sgGqtfGNfiNrJx7L66KdRy5Js9PwdjqVio9qad",
  "key30": "39HjHQhPum1PmJxp98ubkYNEr7Radh1SES3eLrdA99octN6XszDf6BKt7CwnKPmSzEMVkJj9rZProudayBkcRZN9",
  "key31": "5muqAko954NfkpRuSfST1ZuqxRbWbsEeDT6jxaV4QeRqynnU2SN134oAH6isWbxdSRPVLQkZfVX54bzh9xVQCnEM",
  "key32": "DE4kgpPpDJ4SnxCB7vdgotsGFx5SYuezDKiwhQUGkhQnTvbQdk5gY5crhrCQrkAAbruoouU3grE69cJBPnqPr1z",
  "key33": "5WfmcZyffVSe6ghgpiP2cKCQsnXbrFMPpmHnttNVhFGtVScDXUMS9igZCvADj1AXfgXWkNxuir6xUDjwSBBVB9bq",
  "key34": "eT5We9adLpRnc4XqpfpedhHHbWgSr4stiEhpQjAGsQtmzej8rjdQZFH3B68eUMKPrsVLxDd24w7T81yA1woPZaf",
  "key35": "2yhDpcYcCaJtDMMKjNTLzS8YGVaQ4qf6CgkVPk1ePiZM6CyxUpQcajs8CkKyuSw273EeS3NUki9Reev7Eos9LT1a",
  "key36": "24C4oRorUbzVxpZb1RgA8LwqwonpnhWBRtLrCh74BQGQ56vM9mXyC1tkjq6iQBRpAFEqyW8WN11rx8aUW8CztYRt",
  "key37": "4hznaxpRXTkZt6S7ZQkiUE3gJhifhhsEEnB9V2FjKNSaNhy9frdfftcbcKrThM8vehnjquLp3DUi5w4w1fcZkxfW",
  "key38": "5WrarxXtvbNACKieCxQu1eihEByfPdjHGdJegyZbk29gPjChAVGtjsxaDxGkvqHnCGz4Y8F7fGLZVWBczUG21tcB",
  "key39": "5CVU1x4wjgJ5riWxMwZLCNebHvW2zJP42oYkC7WprR3yHtELvcR8BcpW5aWryUr6unn343rv7VbhPUFW897RDW8E",
  "key40": "2gEESEjn3AxN7rowckfaGWArrHHBjugNxpwKS27mc9tkaQBuiXhzSNmN6QszbreFEm5DC3J73tfziXPqJzDaHNed",
  "key41": "2cX9c25udPpqUaE1BCiueGbvWiAPRn7FYb6CeAJ5GzrweweJpgbC9BYiGkuJTvd1FaWXCVSHLxGpyGpg5wuKMWuB",
  "key42": "4sHCBYBdx2XNqpm2ipg4hZo81NZ8KhKcftjiz4hzTBRJsB8y3xPjnDAYDueSgVNqskufxngWt2tvo7R7k93redwr",
  "key43": "5QgfwYxQ7w5u82urGTM721Cdi7JBwFMAYFL4Tpe8KWaXMnT5xbmRMa7bhxjJV1HgxZZenunSAXR4A2f2uFyUoKcL",
  "key44": "m1pPQxEsdFvUBY5F4AfHajEueWKBHQseHpMFfgMiLpWvJ3YfsFaR6isy9rXLCbUreZxHEex2u3nzeZ2t5xbZT1s",
  "key45": "5iR17iAjWiDzN2sewuuSYzgRoXvkSe763JuL9QonatF28PBKnzRSVrmMFJ3UdpdRRhacPwn66kzstokqyBncMR1i",
  "key46": "63tLyt1pQTgDcxngWMovJXpEotea9uwYvuUGeDcWBU6imNswM2VWWNf9ZVAYjXbsqxA9FHxAPcmcZ4RB48x7uN4X",
  "key47": "2XtQw2v8Nbd3uMUpKY4nNRcrSPDkWs5QDCrFPhko4rwAACDaT9DLrQMFB2Qcb4rhUSJ5QzdMG6d7HBTgt6tj5AYx",
  "key48": "5TssZsAmPhKg6uDbKsj2WowZdhva21G3eT8uCsJhQ6QDuAwyYByFnTdwUdY1bYr5GqJTWGsM1oyMnETqBicmT69o",
  "key49": "5zw16fFvcckjzhkAz1pwF4MBx6YJwDYXa59sB9ahxLXLoRzuAdPdV7RqDFaGJyW4TRFi4ULKvGCu9EkBvTBFysx9"
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
