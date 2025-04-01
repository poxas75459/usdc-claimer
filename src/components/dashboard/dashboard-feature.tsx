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
    "41ZeCAwX7Hm1hvjgvXNMVCPNBGHK6315UsxG1Sc5uot3EDu7ffE9qSJHyoRe82n6vJ8AXrGWmM7WAiX7QwioDvzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p63d5sRMBBEQM8hWdXxVCe9TBV5JtTxngbXnsGKWwMWqeo6f56SCcpWsPGw4ZTCbVPjUxKyFwZy64V5prxoyb3N",
  "key1": "61eZ5yoE29AALY9X7o1p79bAcfzreiSEeSr1oAvfuGmAGi2Yntj8jpk2LxJs2gfvPWHV3YL8GufsQR5Z2xDh2GA6",
  "key2": "4MYcu4y2SqDt7RgMeLoQL5piQw9HMU9V8UQQSDtsffcxFi1QYLbkJctb43D12w6KXeWQcvmqRD5rnCyogy79dhgH",
  "key3": "5nSjKpcducPmRCquWV59m17z7tNPWVkqjXwX1qS34grAqS6Z3yi38JK7Hdr2UjmHgjC2EZbFQ3pifZsGXCthBsCv",
  "key4": "4VrP6Ys8oxNTcdfwGAraKtQ64NYriWojxQ4TooEagkD6oyURMWapmKNB4Zmp943XvrrhksTPN4eTV5wScHn2jU1B",
  "key5": "62daNv8yr8akEAyJmnCngZNFkJnzkx1kVBK8sV1P5yfvPPQBVetCgvYqfdoAPfGvaqJvRxaWrKPc6zxdgw7JqirV",
  "key6": "2nzfndtfTUJ361kHTYQtJyNFoipMVaZ1UPDgAortytJFiz2GTB3wj3gWKpzTzyv7tyqt18ScBTfijmayHyW2hAYh",
  "key7": "2W2wrodbyuxKmwbsaHRj4kUh3jRGf9o4rAbVTjJrLx3vK4ayf2x6XriNDH2NUkLZJaaxAnPSXEyzbbWhU8a8td9H",
  "key8": "Q4BMT41DK2bbZt4WdGqeVMYARRjbMqnXdw4Tvn5kw31iixaBsEpV9oVMqJoN4f1UHgxxTTWcgewpBfG59kgWMEv",
  "key9": "rECUMLnMkf1N9GzvNp2rP8c2MnSgVWWjpPN9GVqbRAHH97FHBjk867XQDjYvZMZyqeoJwmReFDegG1KR8tZzwo6",
  "key10": "3h9jrTytojnBN7vBdNDbUFUtATnbkM82qyyyJSiwhBfJwav9CMDpdQJodQMZEpnoB3fEcVAhhxWGvxVYFvaS8owx",
  "key11": "3KfL1tRSHXN5gafpwoKNy5EAsN4SX2VTkcvjBx9XKEDcrDJi9F6wXBYfxmqSFhTGKoJYMNKd77BHKW3Wj38wW7zX",
  "key12": "66Dy725Bk3sKbEy2ocfGEq678UToZuk9UNHVzVDrSMvWpEapCfhaCjjyVkZDijXtqyxUnn6Y93P5aBiSpedUipZE",
  "key13": "tWHmLLTYpmcWfKexW53ij9eEBesMpoZM7kzJ7jMwgqRWFKf2PczRF3peD8StgA1YHv95M3aC3cUjBssGEkUWmms",
  "key14": "2XtibXWTvy8yKXnyiGCFaGP7buZ9wFBkC6V92HZqxMdh8DQiz3kkH9F9aWTPukrXFHugUG3kq9Amc1EGDNtFJDPj",
  "key15": "3hBvRcnpxi1pkEeWPHBNU6eWBk8wEmH4SE5Ciqiios7icpHhaVo7VfwcRTCBubM2FsihtiRpJzrVHzPAEuexCxzb",
  "key16": "4RhQEeXcE9wFMwFH4mF2QqAao7yQEtqJFj6dwsQFpBTikqKEnuNANC7cHJa2DfGxcW9L6P32SobntBpr7ceT9E2v",
  "key17": "4ef4oh6QHkagK6td92nGY1zqBC9u368nAQHyvXsjwLQFUT4S9VBcyaRop9TfhzfWWqctCu526zgqaFpCMKZZDaYr",
  "key18": "JgSCWYqwZBAuR3hKf6havYQr7zBDqb7JhcKppvAeTnDuVYFQwwC3uCEPXQAXGPUxtdbTGeh8kB49XzznQfsqMuD",
  "key19": "5RqdfpjBh8bK5widJjVsGoK67UYUWM774jLKANzfFFiQUiiHHvcMp8Xx8dUFUkFveE3qPyAF13WckcNhZfStduov",
  "key20": "46C5MGDGncdkfxWxbAzG2G7vYNFAUDpHyupawGrS1qz5Aopeeqe1mmiLtLobiFos1i9Rpq6PCUBCNXfngxCwt6EP",
  "key21": "4v57VL1J4d9YQervNLLXkrvJFTzuVK3dKMe881QhsuiksekLicWWprzq3qc4Hnu7Sph1KvME1ZEJJNau4B79rhCs",
  "key22": "4y7CUzLt7vtQ59cVH1tqp7pFn84o6EME4hY2Cyoz7x4G1ZRxnqeDbHUcMg8ebCto4gxv3Gd4PPqrQ3wjFoT7Ls53",
  "key23": "664NFmw6TZdq7xHr1dqacoiPCtAPtWmEbFh4844Tpb1jVYWRYctqUXE54Fnq7FQAJtbF8tt5meP5tGvjU3wYNEhz",
  "key24": "2WcnMCM8BVsEoCYpqgCw6Rp6Z5uZirK8LNKdjDvJt63TYJVvub1uYH8uyozLJLHH4KjDtu3g66k98TWV27v7vDE1",
  "key25": "57GFYGkCEwoCznbhTQBWdTxT2cheZCGRv3hBLeH2F3yP7yNAhCrpsBuvTjxaucj6awmyE9uwNvqQ3sHrugq2BtmZ",
  "key26": "36r5eK3AszkFr2KnkijKqgjfJuPwhv1pCUUcMov4C5bxFYCLtFtrJE7PicBeziT2DtcjGBN3L84CM591XecSTYkN",
  "key27": "3XvrocwxTNidjZT76658XZH3QUS8F92eRjKnixS3eozXdkmLwPnY2w2nzE676Sn8PqQugVuCrCDJEUcEk2z4w6LH",
  "key28": "3q8qgZXFXcHKfsbfPzwYY3zLE5juchBfUjffJsmmm43SpaLnkmZy68Fatm5Na9QygJcU94hH7ZCsW3BsZHmkL7Yh",
  "key29": "bSLAP2jKNwgDMJCbVScu4NY1AJcGiueaCGvTJAY55imJApEBBiuB5fKEoQu7Afpsi9rPYSV7V2yWZaYGHFZNNcy",
  "key30": "2bycbzW3VN52F1n3XWnKe2QeaQk4xJV72npbJs7dNZnAkoBKEHVSHwNn34GwmhFeovv75BPxpdWjY9BDPApS7B1t",
  "key31": "5FN18bkYo5p88GWeEZ5adw8zfN11whap5z4iUeAQh3qoDyvmdGFqv3kEx9pZYBxEh1E2rWeNKQJUsmEacDAnsGqF",
  "key32": "61x8XkjMB86iKH3TvhxwXVirERufsSyhsU9cNwdNhbMkWuV4Yz1xR7gtNqKLDimVV9CB6KnF5ndReTiYNDehFN9S"
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
