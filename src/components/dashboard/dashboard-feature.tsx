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
    "35JcqsmxeHXpYP7JmQfzyHc8Hx1bnHfZeVt9S7ZHybugpk9vHYiQWLnLaMfuYPTyU7RWYdZRFb6tQVWeXzbmaZ2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ufY7U9Kkh26eGrE1xPdE1TRSAQYxQCHGuyQBmXwXf4hSzz5oYYUnsy4QnkFrCPMySfNc49JwSU3TjdWCMJvqn9m",
  "key1": "2niuvSPSSxNFQ5CGgPjwkxs7Wvqea3sq2xovkPrvR9BvssJsHxWwTmPN19F2wFyjT5aDsg1gJZTfLT8VRqgMVAto",
  "key2": "2f9F61qsiKfvuvr3ftSGY9fnKCgVdGcYLMiPKwCTxBSx3raw87u1gKUjgoBrR375mEjgzGjEUcApxZkQfZjgyVZV",
  "key3": "66Yep96tRANmzg9Pd76MW7egGue5tcSBDRxEv4iYhGLQGDfTMFRNwXBPfgUyH95Kxmn6pp9qnuiVKLBYnu8LFrTA",
  "key4": "t65NwKj165cr3iTSDt8Yw4bwJw9tU1y7WALHbPZZJ2kxUQdekNsxLdZ6NJT7CPvR5BegGCRK6jcbrYdevqTjNx4",
  "key5": "3o2SD4usp8AQverVCahVvKYKar799JKrsfTPA862pdMchnCLQToKoyfj8iPASvYAyw48nFqW9263nDWt8Ztevfo3",
  "key6": "QHb2BcbpsmWNWUUyfYZnuKN7zXmM2RzB9GqBdJJ5bGGBFWtZiHCAZVv6qM9vx55fhSXQFyVJLf5r4LQGgF5tgiS",
  "key7": "4cvoPZDMBVxqmqcUVAL5Sh4xmEc5GS2bAkRW7rkYTAVZtQY48MyhPy6hadXEZ13wTEwdR4PBF6318YZGBtFXZ8Tt",
  "key8": "2FZdkv1X8XdstYUjNzuUwd1roGVYByDpUwpURk5nKwA1wWazcn2ZhMjLdhsTi4q18ozSZiKvdNiuEgVraGZ5Q8y9",
  "key9": "2PbeDhFdi5ZVBJ6D2TqpQjuiis2VTfzFC5C2AM7tQbF8TKHSkhGSxunj2F2a5UmcgQHusqjZHfR8xnay1kYmTCkF",
  "key10": "Tf1RhzH1vWojyu9LF7gir9kUxa4ptnfuKZaYcCppfEXg21vLkNt27tRfpt3uyuPDKeYpHmGLxhHyzoo9sc9LrYs",
  "key11": "38Xnxeowvo43knLgSwosWZBLsgsfVXUkimkStJMEGsE1mBaAaziBYqYsDiCoSo8S6cPBFWHQZg3RPFh56wpEAHEf",
  "key12": "3r2nkiXxJEZQ5tn927tiWpEotNGmj1nUAbXbjW6LhK3VTa4BU5wc3QfWEbTXeajtXYqSB2dozqXAVLHx8h6ozuF4",
  "key13": "2RcPih4wxTR9X1VPbpzSCDJihAFNwxxtuo26Wajkb8BBZ3qfY75hBXvoWTWMworb7tgSArX6x9nYH24ozyjgGafb",
  "key14": "5YT4AJZCh1pHWXcJSaF45gqqtDUByBQgu36Xq1z8y1Qcf8nntC3RjhHM4r5ZkN7Fcifp3iHs6ebHHF4XMSP7whWG",
  "key15": "28GPePFSqGHWD26SFnhSL8HvywHFKjQoUbCfu9pc9GDHPj1zEfiTe3ea7yuTd4a1nuJEWeUXwqTpxRvQYP3N9jWM",
  "key16": "2CDyKm7dasxWWPHnRvffVSW1ZnaXTk9HPAB7rNhKj41Yb9wfafPUzjNq7by68brn3ZBCgmD3a5QZv5waTgm8mmsX",
  "key17": "533yi8Cx6Lyxdo6jhQwyDi5VH6MYdCUUGLTtmswfCZ4WnHyzozJCfKWXsZNDXGB5KCTiohJkV28nefd3C7RcwzJ7",
  "key18": "3Jhw7dcpeR8YnqZ39F1F4Vqpi1vRo3fDCKTDACn5hWAGqqA3CeMTVRhjbYvQUST2mPSX9ANL1KGkXkx9cNWJ7LBX",
  "key19": "4CPJRanN5C6XkZ5Ts3WJTwASuoz1vQmicTtFvczB8WwbHMrrxtszbr84SLYQPtjvkKv5RamU5qMAG6MEBizJtMgm",
  "key20": "2hBg3wS2rxxMFHZFA9mLEZDuQgB1Uw8MptkiYepfvyQ6Rpvdwne1Pp71fXBZnn5JA66HgPATJtQkAZ4HL3YpQFeQ",
  "key21": "3KUSgULuqmCR9KVBod1iqFJ6RHob7YFv9nSULmn6Ysxar4DZqVazKGT5piJ21vQuo9NymN4ZuGnnFFrVmGP47Pe7",
  "key22": "KZAg1x84cDmvCLFGGUdgZTbizyQzHz2zD2xNCGTur762UPdXxyJmztwANd4PjDjnw1hENupnQfnaj2BnzHkrjci",
  "key23": "PtUmfVeNKoiDnD1FN5UEJCQ4nuxrQGhdcHgWaggEJ8BVpEMdXy7fQmgSPMbCkEhXVFXiSyyUgdmykZAQ3P3PWW6",
  "key24": "4YwAEH9LAVwcRCcmX2EQ1bP3ZZ5LfWrsJCHepTNisEfSQmfx3ykBDWmqJ1qKexbd3Qhy5DxtkAXp6QFTupVVvGan",
  "key25": "3GK8BjUmaorUh4JQ2tVsCK1XboUY52mru45W8Z5zZ3RPdS7WRu1fyUk349sXQcUU8Xb2c9e7VCXW33PYawvv8Dh3",
  "key26": "4NBexAtTSxeatFMctfpNP1Pg1PFbAYXzfrpNRx6isWyaefz9Kjjg89JpUFuGMzQG67QeGQCkCttuhiK6DKn5G1kA",
  "key27": "2E2PjF69Hfjsrv2Tq2LZDz1pMreHYm7ZKew5QoLJiGwCdiQWgANJnkf1XD5eoGPCSaoCSgGxrEgXeaQihrdvoynH",
  "key28": "2TJETN5DSpteHepKK6eSdQ9s7MvZb4JcPtcsLFYC3coJRsaEUzHm5CsxTun25gWioVAvJaFAfdTxJPA7mBTr6k9J",
  "key29": "2qU4ovGbUnWeUN6Jja8HC7rxXhKoZVTz5RuuZr6TFZXrAnnWYZA8zSRHDnebcrGonKSbBYgbeVSWauaoYkWcfLmH",
  "key30": "2u8BkBFav8bq5wgQ48dx3pgx2i4DW1WsKoWDfforBt9pJVV81oH8CpEQg4vKr3PxixBk6TT2xpQxGUBb2ip3AjPS",
  "key31": "2CYY2zpxJJEt4NNZ5AtCLTQH37KEXXQ5SMPoBdPbnCnRKeiuwtKConY3AKQxvN2cJonkVRz3A6qLL1vXQjkkP6VK",
  "key32": "oA6UtDxU23gyRf7THcQQ5DhQYkYnUADcoi8MRdZKbiefXwTKpefd3RdqTQUHDg9ZUDkA2ggFszTeDiPXWBFvBeQ",
  "key33": "2ejJV3x98mL1byW5FNHzWtSZZL36KqKn95QBnRVP8prTqwQTxrQddg7qeWfHZffsA7LvuR1NEkokzAUVAVQZcSfr",
  "key34": "5kmVBizM5xCQ3YGMMG1DD4pGvCgTDfkfjFSVuFeCQazrTYqjMdjeih2MHMDxH3ngrtpyA9N7iJLfidmiycDKZD2P",
  "key35": "3EgvqnvX9uZMgn85E8RA3LL1u14SnjifBuwzyTKxpUQjertEndvMnMZjRG6VsjanbVR3v7twW3NmF4N9DvRBTRVj",
  "key36": "2zeZeEdVH7qEn7dkL84RAMuUDnVBcHjKVynJKzh85o5kdH8pVNUNjdVNmb8LeVRA6uPP2VAeVgBZEyv8FApBQSBu",
  "key37": "3C92kAA8N81s3WvYDZQdFmnk2Dxm317QND1oBRZtrLA5otBjrBq2pPNmKGiTzVa2N4XSU1HEwDYmkgRJcF1mZmtc",
  "key38": "4hqLjMdxNtfXZ9Jk9iU9U9fLf3KJ3fZRf84Gf92JBrrGdiWhwkdZVonMXRKnbePJmvbiTXQYKcaTqhWNJNcaCnaH",
  "key39": "2omj4yj8YQWphCLcmSTbiVrTyeYFzvZ7ZKwwHvuD4cxYYZzsT1HAUNqDWELeaBw8FEn3kwXjHpUXXZXt5vTaEVoX",
  "key40": "4ZPvTCAXYNar1vDWDu1vjiUA84WJVUGhUbkjJk3i1dvPLVgyc5bMPU49gKzWv1oWWGXkfjd71hg75y6YwgzLBRy8"
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
