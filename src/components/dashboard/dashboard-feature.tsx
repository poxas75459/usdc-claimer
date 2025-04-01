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
    "WM3necHk3UMQtuLkDpFwoeyenHkwMcKKW8FZyroRZfLzgeYS74ESm86xzZDixGev4dZ3z2poETXiQVzmCWdsWUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VxSzXsHVhMuo72StjJyuXP6CmJ3U94C5GrQFig11ZPiRwayf3QD4DsYmLKNbBWSVVUtXFZwTSdSUeokBkjrrwca",
  "key1": "65kPdxgJm1VKD8KDjM2AZ1FdeN9qC3GGc9574jMaz4TqM24vgPx2aaDfTTK3514Qq5tiqVqPxfqa62CwLJH8nayu",
  "key2": "2CMCjSQapVEx1ZSctYnt2pyCw1rBZ1nQzv7jazHvh1mhGRtxKqnGsfZzHoqDAza1eR5toG5joG5afMGG2qMz88eF",
  "key3": "4ZUqx7bvzycgDbctLbQUKCgrNXNZ1twYRX1QuFhEcnPDSXpDkgTVovH5aCYgaBFP3kzT3xs4nRvWUb9UGjLiLRWd",
  "key4": "BiBWbMuSPcbTXJB65Nb3sEViTuwP6btMmLDP2KLyr7fFT64jDTS7ks3C17GCArTh7kkhzxMNF8tpwUNrbTQSuTG",
  "key5": "b5rJQjKKRmdYqcjSu4HzV79xXuNzAr77CCx8oLLCu7PFEjBMR45Y6dtkPPcXyHJzBH79UGvEFVFW9sin3zJQPAm",
  "key6": "xm8x1renumhHUVy8dkdWDfhd8tsNgssqtLkxeDozvdYbiQykJMUVukk6u5Grmo863kSBXHYCGmuJwCQhZ76R78A",
  "key7": "setizZHyZC83qxkNX9XJ6y37FSANo4Ryj91awXcXEbH8WkP9G22C3KBTBTaTsTR6hczht4zuQpTJ5nbpYLDb35V",
  "key8": "4XDaUmU62dBQZaXaYNa73Eon3aeYseJXbHxiEnAr3CHnyz5RFPuKk2g7PLAaKZLgQEYgrtGhB9bABzEBJyiGo6eL",
  "key9": "vWPuFRgEwwBAsxa5xVFMHWipR9kAUxJSZZeF3uLJq6hRrtCmk4XYGU3LJVBSe2Gqs5ggQFH3sVmWGmfCQaQmqz7",
  "key10": "KdDGeMEdybtWmMPyXpLiaPqTLo9JvsPgwzcVr728dgsyZ9YktxmVdXaoBGgV9vakTXNs4QbFc86rWB57S3riGXX",
  "key11": "2wS3a5Psc5VVxiF2aqhewWsAAVUpp2jRbMiHB2JbVGHvQQ35k7dCeSEpHzFWRX8UX94kCmw6BkjJU5avkrEeb28s",
  "key12": "tFnm1FFXutN5RHhN2mFErRYzurWdfU2iuqJoQfRRWpbt9FMoZKZ5LKkr4T8RayYSvx6xVu391EYSNCg8cWaCr66",
  "key13": "5uQcT8LxDLGwZqQZ83cd54ttWBrQEw2t9TRSfLHf6wUSpZvisg7yVw7XbzyfumKT1Kaxsgsxw479JTpAyka4nDFm",
  "key14": "41Y2LwkbX7N39BRsf6B8rujgjXEDgTCSmqaNkQfuujDvYXs5kUfeJCcm6c4wjUtpdgCrw2wv1dPFjvVJ4a19EjW9",
  "key15": "3YSc6mD1LU4gSWY4rH79pZ8fYDLHNrotteZUcnt8mywR4AyVPjYUsm3N7oTATgA5XkKpPB7FS7QfD9fHpbWzqEDq",
  "key16": "5zJ1yf7kx65zcS64Fn2nywe7Gbsqt5YMgkqH7cz9bdUnzq9Zndyzj1FfsLsFSWsN2RgyvhH7ccjoL3GYv3h1d7P1",
  "key17": "4XZBm5yCUmiVejtZh3rhErEeUPprbevAJK2hjB1qAd9SiXJ5D63oWEgBj4umWPugwuoKgX2fATRZrSpNJsh4ECHJ",
  "key18": "oNkeQu7UTHdBAqDkVNuDzd45Hotm76U5MnVJgh7SKyfDgaCsZeWPuwHe2c3f6rSWkL8Gev1k21VMCsrcUyb22L9",
  "key19": "2bthucdL1SCLmcDBhYrm34DfYfGjkSUWgeUu2Lfj2PxqVXfePdKnFSsXYwyPKwrmVtWLhRW3gM4fDyKHL49Bm1FF",
  "key20": "4vej6nwj9mtitV4B2MqGxVB1HRxs4wSQNbHyuA2ic6HFYNYwyV9r6BfEdPEmTZAYzsfA5W1MNWQTxrBXgPc3Xg1z",
  "key21": "2RWvaN4pMXTMxybSY86xQAG6a2XmbhZtryW8idHkaB9N196KcntnuzAHwkSGV9aQhHCoHjQPC2Mv4LydvAku76Kx",
  "key22": "55zoyWhu9k3jkDNDe9AQheJWnrgAiNY18odZU3FBe6k63suLDSYhrY96RuFpCsKKAdWz1A3ny7BNoRmQeT7yxijq",
  "key23": "2PMXKdhVj81uBm683gb6YY6buWVB229TGHNH7AwHseNHd9BqiyGni7XvYx1BmYytqKALyFWiMtgNsyhVDfoFerTe",
  "key24": "2abMuvC58eY3TzX1Ahh9mHxrTMBamfJg7QJonSMmfvwYoS3Bb5UfU4XSSZBxcuo7bX2zb68w8cvjaNrJyWN8bYWB",
  "key25": "2wTVG5ZmUQdGWPJfpBKwUja3nJzUxhP2m67toN7S3ESrdXXK7g3fEBGx88QARVWWe3jkq8Bg8puK1wavjfKM93v9",
  "key26": "65nQMQKzVDPfWCGuVuYA28VN3EpQqmZrCy2vBEDYgiHgRcXAq8iyZtAJvyPcnEhfX2cfRrPZR3zQHo4BpGyjGAZm",
  "key27": "2Gaq9hSzXkMXSBJKByuV69FJ1xYG4svN5ERG4rxfYEADc6xE2RBw4PEi5sEn5iTbHEceLNYSEhokAFEW1hEEYHzJ",
  "key28": "2DtuHqCSHAbzvJaNcaSCgRvK8VkakPfto64cKjwq16uKg1Gfu8Xryj33VFKJjbPz8AkbXNu6s9L77XitSqW5ph5X",
  "key29": "46Qm7BQJ5fxeKHeJ2Kpyn2MswjLLg64dLQ2ZTvzhKFtjpeUxxQU85Jh8A4L7bXf45dqqrS1EJsEFLJEpFJd9uuQH",
  "key30": "2MwiEtXWFokafrpE5781T8WjhUEJrVYKo2hmBper9jjgGLy5SP1UoB5xxrnjTBUXVN8rxg5Q3CRW3UJYKqfw5iEA",
  "key31": "3Thw2Hv8i4W3vo2otRt2biGBnxe7cSSDKB9Yahvdiov7trhkjMk6Hd2tHLpPZDVWHG8HVXPPmmn9GdNF7c3yxdav"
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
