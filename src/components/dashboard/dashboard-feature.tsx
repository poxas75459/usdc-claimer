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
    "z4WCCG24paEE61PNgW9jjce4tywSZdYhmcYVFhcPt9Yee9MAnYu9HqfWcMqpXZDAYMeLLxfSQpUmb7edWpGcrjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qN3JHgPJfTBKfnP9HR7vPntpdwQe2dSnDXag5i26diYQWqL6ceZFVoJqJuoAKjW6EgHGHDWYDXnY39fb8iXXGEg",
  "key1": "5CR2TassDcWyDfzDMRHdCkiNEJzxDbpoWCwW2xBMb8WTf6AVa2oLy5RUhYvF6KQPZ3d2j2j4AsvZMWgz7yqdgqHF",
  "key2": "5TnLbe14H4K2FpWJLdUfWksSVHQBxgcRdWWpYeS8jimtNZyzX7h6buVkyp1dbnqPKX7p5KnKsL1jqdGeXnJdEudv",
  "key3": "3BNr5Uofn9MumzEBp4WFreZorC696uL6jhevmECHEiyraHePxwU86aaENH8qnHG3oFQ1d5bdUPJDVmETWhnLjcEf",
  "key4": "57jedf2VgwBqfU8JbptENgE8NQNWLz8vP7WaqrdSg8XkntMUe8bJ4XXBuXsoZnR3TrWgCdWtNHgrgc6sn36nRDv6",
  "key5": "5fSx2pWyZxqBPRNEh3PaAwUQY4tqPS2sA7RYfoFqD6yxWDydFetXn1NvmGtsGPUiQEdkLYFTkUpxLf47JBTA2XzA",
  "key6": "35g64oXFWdUCQbgUAT7Ktukr8FiGzBeecBNbddysAcBr6R2jBSc2qJaBphzbe4XeJZ76WxgqLwt8sgiePEH83LCx",
  "key7": "RiHBA358MNsSWavoGusZWLWbmNVYJq2CKC9yBqbcfpT19Ke3jiQdycMGDmnSET5hNro16p6PD6rdCfx8K1ugjdf",
  "key8": "34rPfVuDfFdSYqivmqYbHUXN1d5EaHEjkC7jaS1aU6QNVoBevGp3m5giWTYanZbSbdpaaGLJqXJDGzZkadmtZKdk",
  "key9": "5NVAebXndJTkcD5YBzq4uTgE317CYa44oMTCvRXN6ypQxqYCWB82hNJbq4CdLr5VoC37hujFfCyG1BdvnC5kCp5r",
  "key10": "5LhospiUrg9VDk956Uiw8eSMZSQFSiXKEGw1698izUCkTwL8xTysJCmDpP8TdpTq3YcgsAmZC8Lc17hK5vJqAjkJ",
  "key11": "5wELnLTpfrV2ApNtez7p8JqKBNgteZDUzP78RtZSoC2aMcCW7uQAN86Leq9QLwaKKStWnDinToHVAvEqapkNHZ6Y",
  "key12": "3gdJzbHt1f3sZnQjQUuUyPXB2QHR9bZtDq8xzB2PAoBjUjz4QocTykAkFJBWqiVsQyhvXqumebwuYnC8f2yQRJEM",
  "key13": "4TjdVR1MgNNNJqw1fhuXwgsG11GipJ2CQmiQnLbJgYEFQgRzXmt46BMM9DS9fc5gCMpGAEVEDnwn9n5UZLpd7GNz",
  "key14": "BR78Y9gDgRNSMA6dBsTo1jQaf8bePdwkDia3f7iKQPbxLBvxKHSssNKx4YxnW6H9bkrqCijsRxAQhssvSQCZv6d",
  "key15": "4bttCihhJCNzHyAxFstMkmHA9Sa4FnKYkxSUXtU31vnW4FpL22h41kNqnXqaz76q9R6N7HTwtMVdrvGgJFxQQqX3",
  "key16": "VyfkHm7DeSxuUkzV4YahvXuEWZ3hb8t3LURC3Q9ArUA8ALyvaWp31uZc4UdrwsA1LPZniczX52MjAiqCMB7LnmX",
  "key17": "4Msn7jRXPeoTxGBY8pueaypb1B3k19SvW6pxJvZF4bLrYT4L7CPntEDAsrUxoYpp68BqfZFeHjan5YQNX6d9PsLP",
  "key18": "4daRh2SfNFGf22DUHofLxjdVz7d2UugSBBmtAEPAv1rxRzAJfDUqVzKeJyq376RqpJtC9i5UhxuVLvgTz6gXUdqH",
  "key19": "3oBVWzHF1b5pZnj2aJzZ9A6Ra4ibeUzzUqtbB12fLMHyPVTTHfYchZb7q5NWqHtYBBa33emLRFRya962WSi28Vnq",
  "key20": "2ooaQ7bXjXaqFiijJveaDzgZ4W1ckymgiy5H6cx1Xkh51KexcqDH1WHD9skUMbDdXUyFt4iBSF1m9dSmgEPmfzzr",
  "key21": "2657HuNnLKPKz5s7cJUAXBoTQb9bcz56EXPXZ5xUAcB2khTbzx6qv6QEe6zVpttNMb9GPKtfKP8oBVMjJqHhksx1",
  "key22": "2MxExmEvsiDUmXGaW8aje3nBtUgBM99nGDQC5q4rUHf2QCwiWJDXTfVX8zXC54Fx7noapFJU43ES4XU1qrj6vsZv",
  "key23": "2PXyQSxjozrws7srSn8SwCd9U6RhWSPFcqhP6fR9Hbnz1YnSj32pMGDAUPq4wev5aeoSGd6wyyGvGrJvMw2dNko8",
  "key24": "5q49QdhN71c88d6b1kJRzaB6MjJsrkoWLLJLizFzwH67CAyH7WivrxnDWvR6w7rDYrYj9StTjHSD2AvURQoJs38N",
  "key25": "46aERYYHJk1hzJ1wR1sX9aMnxkdAxyYqVb8bnjNXun1CwjPZKum9VutBeJUPcn645EoETYCXCJ8GhQexXjajWiM9",
  "key26": "E29cDEDeC4LVvkhNk3gUDDKbdYMLNBbMtCZi84P3zXbKHuwx9ERJKZioz87f9kvi9cEVRVW61zQvq1EgXB6N7s8",
  "key27": "ZYroL5MK7AEoYeWmNzQXe9d58j4mPqz6gWUpF3YRSpQjv5XDC4BM1D5YvTNvhcLfTpvUrrtCZjnyNdSvN2thswW",
  "key28": "5HPF7LUifhPg4Ye8yRqsHaWMZt7B6AeUzKfKa5k2yLw53qEHaU3rRztjrk9oVuXsGmJ768HLTRafSeT9Bsva4fKE",
  "key29": "3WSH4KHFS41PzUNHeXUaHwu3yMfXtuHy4Az5reK21ynVx9NZiPtDXA6sAtX5xsfnokmXxWdHPWYrwX9e7ZS7tujs",
  "key30": "5zvfgdjaWUsKoytUd552a4obM15bCCtorwNfQjkq5rdxkddCDYQ3yifB8MShNBtAPNDSJhE4S7i9xpo2q1tWWmEW",
  "key31": "5kxCWLzPAtghwpX1ewPAYA5t4FgCw7DmZxBPqHvgQXUFQhYLG8P7AjfooUWuRCYXBa6Egn46okwZVyzYZFXDWbh4",
  "key32": "2dR1DeK3Bukbgx49kdtm4ygLyEq9gptd8oUEgoj64RLyUcsT5dXmfkh7av5G1EvMfW3MoyYMoj9o8styfPGmUsvg",
  "key33": "4GdQXRGLpkxj1cn3d6VfCehNh6rHGB7shpQLfX11QqXsQwtCud9aYhyTg7wCXUAb3p1fUzV3ZQukZihqRSv4tNh2",
  "key34": "4okfVw1ahDuMQqfLaQ3RNXrpuTfSsGzVK5VHsEEfXoEaVnQofeKewjM3HsPXW673DH7gr3AwLBc835MiAZn7XQY2",
  "key35": "3TV86nyi42qEhVboFcFQ2mrZbGsBdCb8BfdjuEejqec38osbMDhC1nVeULfogWoqpRZvZYHLKcRnfYjhu4QGegsw",
  "key36": "62eUi4Loch7SjCW9jrU4t63e9VUEUCHmhQNyyJyqi3tJVJmBJPBRBBtNUNftnor6GbjLxfj1z62CgV5HEgr1iPb6",
  "key37": "3JY7SkCkrj8MrqJR4Z9tadpvZQ97pPb9Syy2xPSfJXtNAgFPn2GQdADNKaMQp8kp8wHGNKXRF7wZSFp4webWEpE2",
  "key38": "51VR7SmiyXjQo8MZA2PmDAZhrx4HCQL3JKokS9rye9qmtWAaniknKuSfUuEp9nht8t5wUmQ8yXnLFLENrAQVvgZJ",
  "key39": "3CKAKMMfHyWwGJdUtsv4B1vEMGrPrqp2ir8rVc3nGLe1NH93kEqDS8ZUfVGmt19EC3F7Qb5gmXdW5VYkq9iSjPhg",
  "key40": "3iuGyd1PBLKxPZwQm5TKKEvEfsVhbcexK1RM5dB23eUD2Ax8ef71CS1tHmV7AVNQP37JyswrCvabox8Doe9BMYDW"
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
