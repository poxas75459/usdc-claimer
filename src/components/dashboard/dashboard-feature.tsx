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
    "3YsmBx9dQRUJzatyTV8mLJ9cjMTPPVuDu7nMzncp7J1yHz6P8mykVXC7x6kWAm7eHatHA5KEuCihazYLR7i8HwBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XS3r68vmhdpba7gidKhdKvVAHDiRAndMdpv2kJg4YrQna664cFJKwLrYg5BKwzQfg47gEKwH9aeyVuguKPViRMd",
  "key1": "5sjbVrugUrXHu7BYmRkkmQSMr175R5PuvS4MV2n1pXdnR4mZ9oxiJcDRkmkb7Y8HxpqmPidsQLBXETg4hnmVtLau",
  "key2": "47zHQ7mCtC2WFhZqLNcC9A6Q6G6C9FVST5ghBHQof7RyYwXuWNhBHJ3tH37nDec6yBvXC9c82cvyiQsT8VmBGPMo",
  "key3": "kcqEy7Q7Qtrgbvxfh8V2VWtz1cqxdFkDwNV5LxJf29srFb1FKpjGoeKt8XPUUXY7x1fYQFyZ7Sk67t5FtYp917A",
  "key4": "7basBvjyCuictJtFtgEw7fBYiip3G7hCNdxe7FEoEoV1xtzY6JETbp1NbsDyqRyd9sxFxofkwp3v9FDfkxe6NjD",
  "key5": "3Gqa1Wo6BtVNHshrQes3Q79MJKC9JkiMjyUr2zGPzP5gc13B4sFALP3zgapTbeH8BwWQMKbZuUygsM22ystepyiQ",
  "key6": "PyDcEAE98Ti76JkWaS3oFQ2muCThHdso9BXp67th4jMnSxfcuaSbbbhYihGChF192HX8fopXqtatMQfTZGy4pVC",
  "key7": "3cYh6TaUywHcVqvwCDRf8kK3xdbKMA5jtFBGwJETir8RBg1sm5eFeNbiDbhSjKGGfsWCMZSFbkUpCCMfqenBJzfU",
  "key8": "4SyAJMxCdk9Mutgz3xZP6UovMwpZK3B2B1a6Fb1k9qiBCwWto7yZJeiGuueKdgQjZTKkKvyebPvfqgxvytqYXLJv",
  "key9": "3of5gGybCgfigyr4rHiDyiqx5T91hYXqw4UHbm7agbxvSGDfUVqeoHPJCqYMNczqrXPheiMU8cwDisqj5P4Y393s",
  "key10": "FFXRoFYdPpYbBea63fHNtajxhugX8AJcZQhcvtFWokd56cngTvPai9KCRNzae72Up3PhMSdsYWe7bwNm8CvrVVy",
  "key11": "2L8jpipdrHZzT3KB3FUYwveXwWuSMVG151CYCgiYhWGoH74JRr2xfyVvxLdgXEut4h7gExgDidJVYqWQttTAYrZS",
  "key12": "a2HUoMNdEfEm5jdxD3et1JuEoqrNHGWP2f4Z68dG7pv2bTS1C5XNnhU9KFyaZpZa7iPvrBdTqefgfB7khTcYAcy",
  "key13": "4GD7fgRSw98LfZF5eWbS3rHWnXAt7SLyvV4sUGcD5TqihKGsEcjyzmez4mvMNYsgQnJaz4NWqLbtCv1syxL5pnAn",
  "key14": "3JQuw2cNyN52FLr6ggF8b1b4tkidJW8CyVh1BDVubyNpBA67JNh42oQHxLvfEEdeThrUsKEa8BHMQwpD4i2v688U",
  "key15": "4SKaoe9LkX4NAvqPK4XrMgGiEbP39JMVmykLhoVWTdaBKjgyK5mV9BAPMWqrdZhYmrCaSdp9S7X3CPJPxcwwTwYB",
  "key16": "4iGLuYUBc15oNYrhD7gvw5FaUQKgD3M26RSMZzLdk6PcRaGHd9pvH6mDBcpMxaxBwE5Wkj3C5Yg3kkVwU7s5oni8",
  "key17": "34DabVGtk4uCCnz4RgATqu6SuRtpMdnWS1r14Y8jQiqQEZjtCwmrfzCN7ksGuTtJzSC3hJXe9Z263fEQTrjEnyao",
  "key18": "4JWWf6YYRXFA4NFdwcFCY8rvb11eXX6d3c2TGgBf8Xc6jpzobbrkp2TfaQGJbqpdzo42JverdrDM9ZoKb4SRMQaQ",
  "key19": "igz45NWddS3U1FbcxoLeinabzJYi3zYskKwWoYmaUvuQVNimVWiuhK3cMpffc1MboRux2aikYyzXsPGFSCKyfv5",
  "key20": "45hKZ4JZwJG47WXVwj9RjkqaTvmkasMFBzz2iVcx7PxBhPhDo9HXdvxij7Ms8yniMw5NBF3MctfsKbFL7JgrUNVf",
  "key21": "3cki5vSkcFH85EnuVAJZCf312DdumEiAq8wrbgti5qGBQyjoVewvQEkrg9pC6q6649qVEmcCP4yXPuwcAXKfiX9w",
  "key22": "3jJiS4oyA6oejY5t39y4KActF8oBz17RojCuDtggvqY2qvxKLBtvNtCZGnNHiBkGum3Y3GmMsFMz1AYatm6Mc6nW",
  "key23": "2YYyzmrFjm2w2FAMb6U8E7qgQCFT8ypVEkvwaSuYYejsKTpLzyrXtWnGSJ2zFgchuccqGf3fcHJN6bC2oAtZzw3M",
  "key24": "6198YEjX3kW2BPx8NqHKQh8GX6ofkxYTSUHKdwhJHbWLiKHAWVw284jUgF5nY9xKB56SCmCY1TaqsWoPXaknVv1P",
  "key25": "4EZr3o8aS8RQ4F4S3B9dk87q5WpnuUsPDBnQfHcVxxqRD1LzPLZ3UgkiH9yMPHJhVeX32oV6HQtTmaHxQg8BFCmM",
  "key26": "3zGNUNDLvymQw1mBstm6UmHuNr537n5BZRGkBqNEG6GMqiw4MM3WV52339vvda4zTC5ciNP9KYXhQatsZ3t2qw4c",
  "key27": "4GWdkex22P96BX5eb39oY76wJtPdQ9BBjYEGyWAUsDK5cJYio9YZDmYHSGAo11CetW1qq6SpNbP1TDFrLmM6UkWo",
  "key28": "3SNCMzEoLqV97KhAbwqT2okrP8t6wzQ7y5J7mA2SHDCaSadeHUdtN2qnTdXfcHojzKpjeggKUnHN93ybDksZ88AU",
  "key29": "4Q6NDsp3GCACDtqcwM2Dc6wBN1ct1vtM4qHAdzQqYDQfqsy4s5EE4A9jcp7Rdw4cPQ52ctBa999thCgqfLmgRr7m",
  "key30": "4TTTDGyEK6Xyqwmww262B7SSy5nrGvCPNaH2wzZdtDSZNWSRREy5Rq7kHPWkNi5huLs1Aq7mURWDm89622jAFedL"
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
