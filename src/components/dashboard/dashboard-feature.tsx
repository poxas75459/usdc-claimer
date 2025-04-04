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
    "4iEPnDMQxj5W4vcE5rmNgk5wRsfhPfKJFgPfGnbTLoDWLHnoaZqkz8i6dRKCQKjAeioyuvg16rgT5JCWCkjUvXis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBvUFfvEFpQQ6p2uDaoegMc3sHqnwEkyBmQ9AkKMuDdBhWozsoq6VR1fRFpCHyBodQ5XZ2EQ9DK7JFiv3QdvEUj",
  "key1": "nGFjSn76u3VPw7cbxmp7PJUgnknydbRgqCKUpdYRTsYKhcPU9kSfQ54riCgv9eyBwqVpQvVakQzyXzGsgPwpk3y",
  "key2": "3o3ptxuW7aBzFaqf61MYJu3ZZrbwkCArMvLbmhBufNuqHUaWshioAbzczrNdJguBwhNHbBcG7hZyteVhRDk34DUJ",
  "key3": "35wLJfyKF6vvdSSpkGopKS32628dfdF6wTWhbevACFhqTugd398fYjJE5QMxoFiY7bFJm4cbEZw8TiaoHyaENgRS",
  "key4": "2syFS989MudVs9XNfJwwXfoGa3wh8ChasMYrirAYoyM8APsZX2YaK6F2zQUa4WWTi88VPZg4MDVduvRhGjk1fufn",
  "key5": "244LQBg1L9MdeenWKuU7H3oPMaY1b4RBnCGtoMPfyPfuw2JvQ5GaWv3diCbfZk9zr4nGJ9TcbPdmXhyQWbMtFRoq",
  "key6": "3HD2475yP9LANGnZHzcTTkYX68uyJjn2UwLvsyNsLzXhzzR1ZMzeT2zay5N4N2fFCoTtofvRT2hHnQQuFVHH3VmK",
  "key7": "qLcNwsYnpDW2toCoVKCPtW9ntN6Ebz7dtxnqPqA54hhyfCHxCaEK842NfJ1vWjD4wU5Ur3uUD4aEkEPZAp8GQrr",
  "key8": "3UsjkaEFVengEoYC1kNfg34arbxCn1wNinkFiRqH2BR4orP9PwySg7gBFtymFtd6hYVC3TLyxv1XEphddQQnch7n",
  "key9": "X5x8Fxa4FJUwZQZkGcHFjDhAMK7cuvpczERaMGiSbjv7edqy6mopSLoF1N1ZYuVVnddbxzqBAxjuT6S8mJbghds",
  "key10": "2KxzrgnAT8FK3hP2ACKnrJxur15AA6WjwsU3jWLVbJizkP8ftM2HD3X8mvcwcG2wgEGTYMSQ1HTjajyE9kL41QYz",
  "key11": "22MuyMW6ZpaQUBXqUT5JPRfcgKipGHWyDKTVW25iHZZD6kuhg4xFrE4Fpee9yijwrWPoEAScfkBi282MNGGddmsr",
  "key12": "hKSxTsJgmdUKDuLdzfFDdSRq6RwEUAMH1H98Bfu477bzt6CpUiHAmGML4E9jiWVZNHTXkJPsFZSHBUn1WiC5xiJ",
  "key13": "5CDamUkEE5PkbgDsqQ7pwPJeS91Ycme2qQxkAqFi4rtwGLCv19jYdYWApno81ik2UyGt6gbYKTDkbeAztnRySnHr",
  "key14": "tbkUAE4ddkkQBULjBoa7m5pHrgzYqYH6axgbfq2GsDJKicYYqkdQPb7JyPB3bgwSEjJXCJAoXpmMWu1J3jMMUzk",
  "key15": "5DcsN8ZPqCWgWaoY1d1eDjvKkDST4iEmSNWFGuTWpUmfQkPwxHPrxNkNB7bTpyfMW3epZxCsV94Quy4ANcSAR7DJ",
  "key16": "22uMi1Z2GMzTjviVKwt5ifRAgAsWBWTQw6mG4PwvmY2rnwqiyBomJ4zPKj6bbJ6Fuq6H55VBJLGdeQa1ifjM7RE6",
  "key17": "53T8vUw2PvP1dg5jxRW1yXPJgeaq75gvXyAzNUaAXHbSn846WTPTdiihYUqBJCVbU3j7otHqfjL5M5hEptsKRg7m",
  "key18": "5LZxsgsspUf63PoDC4AaBXEDmxUDZFeaFacSBAGDcJSvijkkBA4zhimJxJPcuXMLuWgiJYdxxBrQXViLMQWGeNu9",
  "key19": "3cZ5odyssWeJvyaw4bQQe4E2w3XJCuH6JMXekrBG46WYaB8tBxpYggAWoXmz4tR9DkACYhUBp4fU3hq4t3jn1tVh",
  "key20": "3K5Wabmg5ke3GEboXWi3aN4tvopgFetPKWW3RUpfBZbfvbKRn7g7ae9CjFiX8WY9Hv3z6J6hjosUee2HBh39ZHPE",
  "key21": "2MTQAPZJsGLxPZY2A3BGshVkf2QPg3UKCbkMvzYtySHooWakfVaSu4bcgfh6kDBdkWtUf273uFRWdE4yLUqemWZi",
  "key22": "3dr3tAyUE7PYhpzmRpdtL4LjhveZ1pnPG652TSKYT3nLaKs2GWYQqGJRLvdF81QYRRtHkBwkhDNDeoQwTfgzeHQo",
  "key23": "51L9K9x3LCwX674wXARJF6PGM27wQxG4qCbLa1p4h36ytqpwSu5ugdGtb5eEXX1ZadfGTJrPRTwbFJ4gaReexWDw",
  "key24": "4k2aWTYJeED8e8nwhMu8Bnc8QTh64YiYQniG2WAgZLAjxECpffA7ZJqSktVsgKhFtvEYdRcj6NqspDNhK6eHWCWb",
  "key25": "5crbZN6oueDB215777VQ4g7SPuJPSVM2bvGmVpf3BhnsFMeZZr2CtLVfTCZ4AnzgqKvJTgbgWH4LWMAWbTkFureP",
  "key26": "ZMUc9n2qKZnxjc3x9j2LCArb7gzo6AgPueeaboSBBSS3FMdzTNoovrXUsQM2dvQaPpavu2zBjYhcz21ndSm36Yp",
  "key27": "Wwk22M9Abdp6mQ7nSxQwLkCCPqGmfbD9atXEtNhKCafnSAw9aBBg6bfEWTNg1X5fYVnwpSjnHnZnMbM37J87xuo",
  "key28": "5N9nAoGhWRkKeznGJqY3XLbJhkRUJTLZ6jEE2zEf2wm7Vqfe2JC4MtbnAdn3JzEnyvHJoGyKrXYgwTgeSAhoQCJz",
  "key29": "nBC1W1ZYEUyjiJ8LTakQUrie5YAjQDX8tDRcatEVdPzmFcGh8UhVpD3pa5f2E927GsdAPnBnhsxTasy5xBrga74",
  "key30": "AWXqPyzzkMQXChHCWoojKHAj649WLvSJJmQt9re69QYAihBCT43TfBEvnt77gZ1fHefg3hXwxsAxxS6a68BevSz",
  "key31": "4aDkyjf7d6cqhPQni8pXBDrHjxs5ZDbddQoBgSSgc6c5ujRdeHiSETAD2JA2boJ9Eyff1fopHitsUWHnaQZHoStv",
  "key32": "31xq4eZCLDqA3m33v6zGXdaZYGWWZCtxLf4xGdYiNNzGBrd7KcApBs6bFqWJfcnpP2FRtQAAY3D26vvCW2GxkrFB",
  "key33": "4fRZa77d4txemS1En9N6wJgbQ6JBhpF5YjYNSt9PPx87uFVJehy3LV5qThNGoQRQhK3YdvXdrmj94Jq8vZc6UH1D",
  "key34": "4m8VL17a1cXGrADM4wRDafriKRjQXrXiRfh7QusxZVnxXP7SkQGaSwnoq5fRCx3yb8RjDpJTgAQs9TJPgQgKJNk2",
  "key35": "3Do28eMAFzHjPTHW2jYddYeJ2pbzbtE2bUmEjdkLw6psYdEedW6faLMwvHU4xMKm1oediFiZRd2S3kdnnPEYzmPt",
  "key36": "2jL3AAKaw84aoMd6Rw2rMyyEJjjHq5qEEZijXykNsB53so4sgGS7FxJKn4kGPv7VnHUJxRUP16EqmAdULGYEm7H1",
  "key37": "4rqHTNVKNgdAdragYa5KWrEFZEg3JXm9mG8quLdgEJJYpYcoK3hPGXSKyQ2MZZohNGER1b9ACPGrgQ3EwtnXzR5u",
  "key38": "31m4i4u6LWYCVnTUanGfSSbeg4Agnv2kLtb711qyrU8R1Fjk6D3az3t4FTDhnkWbbMyr2fKmfrqNwBnDjnUs1qpM",
  "key39": "4c8LCnncYYX1ao7E6rygkXrYcaqecQ8c7CVLN9GP3KsQyRGxZ3TenBr319foqvyh72SLfbtRmqaTv3UEmXQrvWDZ"
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
