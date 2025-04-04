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
    "2m7HHrEVMguMmkMTJcfafQvm43qZRpcFoRPkh9SeLwQPtrBk9zmzKDeZy2nvDj9hk6tRTCQPYH6So3BC7wcLKkEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKXsQK2cZD22qXrgM4CdBvBteH557LqvvNt5bRe9s8zoiDJb2bFQsJPSXkmeRCpktbhBCNaWnK55YNEYfesdJxc",
  "key1": "ESTdFKfHgV9EzyGnCkmWyz3AyYtr7Xheb8x68H3abHNFrYigctreiiFCxUz7P9D8ReE9YUEDRdakWDLPKetcPJ5",
  "key2": "5rfthUWkGwWNcgjGPj6eNuxbJVhRfpMjcFdASXK8gDRxhwzfsQbe6MHmCfbnG5wVJcajRgJchENZLBEd3uykarcq",
  "key3": "5E1VgpfyTK2yhqNxG9VsP1jK4cZHCjKH2pAiTxvzqsXn43ofdXQzFzv7yFv9uGFvNZQzMmgXZGwGu4sSsBEf3MbM",
  "key4": "i8Cq1CfttP7pLbsBZ9nh18QYZzFTVzg4RDqPHtx5Ux3NPVUxHgN6qCNSYTt3y8fgSXJPq38Sz2d3fg51hosbERG",
  "key5": "5QN5k1qc8AoyjepUsedS7aj3idvhGhEMGmaNqDqCe6nHeSbbKMw2G7VrpbewAor1N1o1fMwUtaHScQKUG4pxRrin",
  "key6": "5kWwkXsr7PmWgp2KH1LdrbdBvYU1gLADBHd5nZ4ZVa6ighSwHkApkAeDkZuUWiuyVMdq1bagPRgrdKUE6SNGfUmr",
  "key7": "3dtLM7WjGSnVadXvq7KdbveUzdGMRgUXAJGPe1XGaDzUehLF4o9o1g93qCXZBPNc99WsPdSq636zKwcYKik6rth3",
  "key8": "3Znf9N7Yxz5j6tEN7i79M1NcxmxTP5qdAjyPKJtaSv3CY6fPi9RqVAzcEzoF3NaZdCTwkB8fYXqiX5bVtAaLuh8S",
  "key9": "phaB2XXkUeub36p2xR1QAwibzepEPZX1YQoGBvhwM76N4N56JogHLFazUqbsgsmBWe1sg7Kxm2TDBETS9nxWeu4",
  "key10": "5XWa7hcMxfhByzDqHgLWweXFYYrUegrU1ANvis9zPCWMmLQYq57cg8ciQWEzUYveHbAzpi1i82idCtXhFaiqN4k6",
  "key11": "3aM3DLhT3v6EvLiwuMdSDqeuf5dde8pLeaVXTL1vdJ8Bvgg9ciBFyt2ASmD6eHk7KXpnTd7rBtQqB9VfnRufVmRN",
  "key12": "4kCdzLY2M41JeNEuNYYRsJdRirYh6WzYxXiBQTE2vaMUcgxDCv3rThj7BPaQDifciFY3pcjZrSXhFJw8pmMJqb5U",
  "key13": "EnbZjamrsXHEeVLDd6bEuAxiruYYA3FB9GDmDZYQdn8sijiLLABHHQzvbCENPtrwygazBz6QD8XX3jJwqqE7Esy",
  "key14": "5AaM8vcQt2Fp3gSAK6PHDyTckSWWHKcuUq67fTRN3C5x32iAzNx5fgQRW3EC41sWWztGocoFS4Koq2aCD7x4NfXR",
  "key15": "5ZpayVQBTWNBjC1pg4NhJbaXQn5m1UHqvKsMP6PAhNEHUbbZfuMpH6dMLk5i3YMx53m4Vw61NWRd1HtmkvyowQsf",
  "key16": "3TgvHLyrvXQBsrLy44mQuZ5uo61AYup7VasJeZMLYpwe1eMdoGhA1SdxGkeXs7J1Kya5b5qTmSj6maYwKWzV8hmn",
  "key17": "3YbuY6ta4Tx975tLBxUHbiEZ8NXs7NJLGj9N1FRXRK2WXmuNBQVPcVZpgvvPH33Rge4SvWd2J5iCRpNqxGUViATX",
  "key18": "3PsXd8PLej9ACyqGaTLi5H1uV1J66rCAZ2vJ1HCnEHeCj9EyysUNrasL5U11anV3Z3gn85mKW9pbP58n6bsQ6bRP",
  "key19": "23HKfgWBnshYGaXjXTLgqMavUhgPXXKiPkijsGmdGbbybL4QFJjSFqUFV6LXryXGk4LMtArRBo2PSrjmyKkAdC3k",
  "key20": "AcUeGY154dyVqsZY2CS5oewDQGA1CKVyJmALmUqPodfFUtQnECjQ3skzgAjgYkAH6opaQkmds6vnXNUeia8FnHS",
  "key21": "47AiJStk2yLvTvDRTTPqLXxmLX7QHzjWP8WtCKMNZAQy5z64SfVS3HxjMtcvjbvP81LP1NNrUrJYHAd3Eqzxix3M",
  "key22": "2L6nsiFbtWkwFAuS4uQCpkzczMqvycRpEkuZq97jVksaYFXdysoe3q9GpsaJQhzno6g6J1apvNcqGyNcCcevT7Np",
  "key23": "2oh1V4CAfAhqECzbH2aPejwYod5SsQkCjsZqqyhRryZbZ344EcVXHLT4dujP2jPLewemkpN9h8XCTuQRLxohH8H1",
  "key24": "VyMyrFYHqTg6njK2trWqpLFviBfmX5R5T4qKhjV8pWRS46LVVjNS6L6Lwk3Lhi2AHjeh6cuwKq3BjQwiCByJyJG",
  "key25": "3yKdYMzXQVw1FVeTvCJUbgp8qSTVBHtJSv8asM8x1HA3W571rzxejh9vg2Y6QU7XtJd5Ced4zsof6n7RKNWXjTfP",
  "key26": "4TN9PyfRC1xQ8vdj1tSfU4PX7LKzcz8hv2KqBgPgwbQyRDWdm476QqHBKmRLFvZxTj6USyyjhTZwYMH8RDN3m3j6",
  "key27": "64bTTuYHUtduSJNfjkq1eKDT2CB3Js4V2eDmkNWzF8mdsbqAbYwnrCQyLo1pWN2bGF8FFJ1Qt4V3vWZ2U9bp7ePS",
  "key28": "21pwjQCnZn1fUwjAbgZiN8LG6tJrEGshSssMgPVZ9XdRUsMUiNHKWLHo311bcUPaZ4wDj6RH92g55JeAtMc3CpCp",
  "key29": "5pDoQUmeaQJZZYogbWFu1LDUVjusgobrst11FFET2rR4T6mh8LnStuvfcNQogcLxuvjce1VghFzk9EUmMSZxTXCh",
  "key30": "5mREzcW5WSN1ZxMvMJRMKndGJyuK1VwCkU6MPWDNyrFeDHmftBLo5WjdwQgSZMmRCZomTbEXzSicZaP6hhkTLxBw",
  "key31": "U4eNQQGfkmjHtseUBF2rgaCYTz8scaWDidKr2jKeESEz58CmmZ1rY5YW98fWq1XBNonJAQMhppsrSZ9jGJVLKTS",
  "key32": "4LVumzAQjPe7DxxEGdUyjfxiz4hue8oqmgCJ3GCqfRLfj5zNQVSyyZyv1TEaUaSzjCyUJvixqfa1PqqJHuvbEKoo",
  "key33": "5LZhhCsK2RT6BNdajZWXN7JbmcXVT6R6r5YMrnVnq2mmZhervhXMLxJ3C6rPG5rF6W65bRxyHEMRbfxkDJpBuGEA",
  "key34": "5jwk87evU6Vqf9E8bgBV6huhpeUta1KXtPMAhuxt3NjJPoZmxPPJyuhtuQWyFVi5HWLdGP3HAhPiu4vZLjjLMUNH",
  "key35": "CHrWiPKjsqcwycMXFL896JsaG9Rsk1taztyUu2FTD7efKYqQSY3tFgJVe4kTscATPntMrn2xkxDFKV7kxPHnPLs",
  "key36": "3kUbrKoopDTi22P7YGe3WdW8ye45u81qiN5t9Et3ZBjqrjP3tKMmoxMduWfWNmVahisobbFR9ELxgHKALqHZkW4",
  "key37": "jMLVUL4HNDR4BWgyBC4jXrMwXhWVAh9KHHfmwwZxu2BecRpJx4dy11YR6nD2e7K7u2cmMFHkXKZxfSsEa4oNN25",
  "key38": "4JSYsUrqLujTX5VwznRe6rj4WBPjzoPCfeHhL6ViCiGhg4nqYvhHFZdUCzBPysyiv7dkxyGJ95zmzX8RktAF4GqW",
  "key39": "4iM3uxegx2Ti87XQ8ABAa8ybvdmvUw1mXEeZvipzHF42AoLBxFD9XCytUnydAR1p2YDJchRHiKWnNCgvPwHuzfBT",
  "key40": "2xKSCaJsJx1WkNGE5gNAvYW83FqRWXag1BbTV6f8sLmSVgkGSSvra9MDM27vGWwoA5YbtJbQH6MwQhorR66EUfDh",
  "key41": "385DfLHtWUw7MaaSoKWeR4HH3P9upiVthzsRG114EJ3UvopNhnwfm9sJ63ZCpCSwv74nF2NbwPQiifMMXLye1PLJ"
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
