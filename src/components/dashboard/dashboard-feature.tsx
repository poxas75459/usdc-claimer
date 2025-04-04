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
    "33DN6EexXjNQRgdy9fUk4V7mLr5ahhkX9ke17MqxngHhqUtuUzBaDSoDvUapCoLDP9hesmv7DeYN5FdtJdRCYsFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFys9LYwgsS74h1zaWbqH6zJckiESUQN8QXiMVbQvaQex4S9bbCEec3mCUEXZU6UkbT859wXKXB23Vv4Vyuad7f",
  "key1": "5CWsZRyucANWsvZA6sNLhjauAdJMnPGrECXWEXDkiv6mk9VqPUNoYqteLa5y4XPzL8mMCM2GkR1gr3WTGCfRaDK1",
  "key2": "4DBeM4GgDhDYQbKEjH1va1SmWakejmEZ2oiZmQcPtNp5Cihh1RcCRretpsyQ2HbB6PL8zYkvbfRq8k2tG8kbiQJj",
  "key3": "3L344acDzV6pMvVNNJKSkjDY6dhSmTpge3co8XJm6KKxv618t47uaYtAYb3CekPzTt8JoBmvt8yKjjQVgzvBKEkq",
  "key4": "2WM4hbZvFy9xWCmoudoromDFf8tNGWnw6zv1ZPpfEQGfLwE4bKA6SuUZhJR6Wv11uxKps9Q2n1qCtgzHhLnm5tJR",
  "key5": "3a4F4u2MqTUDPqFL6yJyXBh8kTvsGP84pNwzCH3eLbPvUtLvLKb6VKvNXfpoYJuRTGPN5hZjqSakcm3npS6rafwN",
  "key6": "4zH91eEzYUgbTGs6ebmDsRKxkwuFqMehHtajwUTWKfnNiqzNvGfAgvfcbVHephbo9pCMYP2VR5yH6b1DX91ZSWmq",
  "key7": "5LLrGrgmHexuhzCQ2AaUE9uQCyKxnYkcGNnhbuAWPZXpomDX1CWzLnFbZCDxGDEehwXWPgpemoGWyfAzvgTUEVY7",
  "key8": "58Y4kGLUhdaPmy1mUsSgWHTZpWgav459rAoajc84coABzMFnFAbhNjTa8THBS3gjMJ1uKq7xidEbfDAxbEAiFTam",
  "key9": "2pKpriURQzdESrLpkSyFBLezYbEqpFL5wrkqiQrFw2S3wTCfYDinJALvUkND73L3r9LXVKfocewqmKY7RhkZPXBR",
  "key10": "5Vyj8vZuJU5pQAqdAc6mwD2EuJVoxbBTkbsqYQCtnXKERdyES6pLytLFAN27uhohgYftrggeagLK4HEeYMoDbGu2",
  "key11": "62kFUzeUuH6wcxga3B5qLD8SxmLGuQnvkDj9f9UfCsX31To86XwiA5XsqBhcSAaZWpZtVeXR5ss3N2pe5G9Uaxyw",
  "key12": "46EuACiDnsLUcVsqFt2JArRNhaDBuLR3jZpxY5qfyMsTpyLUipWXhEXKyjN9h8ZDb4Qpyks8wqtruCFB73r7zNcE",
  "key13": "5yptXtK9HTNEd8ckoE3hpLt4Xm1Xv6uHe8J6f4hay4AkMHYNjnLqqwYw5S1XyxkmHBbC3eCs1V7ijVNdq5H9rYmP",
  "key14": "U51QAVSnUkpqsnhHFXbZoFp3ME15iMASmQGUSXP7j9foNNbAEdAuft7WYNr9m9hgswcTA3cEpWLAWuaMLsW6AsR",
  "key15": "2MB5H8m5UyFG4ETWaZLfaqZzjQ7LA7orFqCAXrqFZkn3gku7dvqt5z9rUWn7NVxmBgnkb3KmPZkkMoQeK1kW13vL",
  "key16": "B4q9DyDnUPaBfzWMQnC7doBLTRcXkPKLNgU4bndcbKdDgaofoxcAQJDSXP72RdknufLV1eoYECMDbdb7S4yCBdq",
  "key17": "62kuDET12ipLuD8Ho3WkvBp2shWxNihif1n3Sb5tS9ZWEiBE7H7subGTyCuM3UjTNc5sdz3uRgcCd8Txx6gtmud9",
  "key18": "5bNpXWNARpNXCjwK8JvdkfHNirvscaHPXBpiYW1SdLFZMNWWnh98iNr8pBfFWYoCcEL4N7UkKKp2mHpXkwoo7qXg",
  "key19": "bJyavP5FENgTn6zFy9d4f8u3qgxvoBwBV6pVga5NYBXejxi6WWnesEVa6vehAjHuUjQoY5w19wbm43eayqxK36y",
  "key20": "5fN14e4dqiQvEq5DJmQNZybhibmeqkcvxqGDEtzCXcsHZRwea4Ho9fGYJ3kN21uKvtQdN8Z9ZppsHYJt8whXZtmV",
  "key21": "PwNQmanyY8BjVCo2URLqrWhuwfbM9GE2YS2RaMPRJDu6CqqJiTWVHXenyu72UkjVVtTDEccQQqfYqyFRhW6jGkD",
  "key22": "4Nsjhbw5c34VKBYFJAj1HMECtTKzuCpWEq9W9C3pXKtwD5PenJm1wfPYiPq8vqVGwEH6yKMmnV2eDa5LVvJ5yLhc",
  "key23": "qsqof9xkcZNXWWeodW3Hz6aKnw45B6Q6hvqH3iN7ioFkgAWGSQQA2K3kVDWsW3ik1YadSNwRGGLrX9VQqRv9cVL",
  "key24": "5jKeQA6NPRfdppb4WpHdQbi5do4hCvbfNS58EinrGyoKRxBc4wp3B8767CZxiJfTvPMpeuVrex3TKSUraVwaaSYu",
  "key25": "5dEMj9jbwj7fJsrXNqTeqZYQJHZXce7MkrcbdKRv5KP6HFhvxLaxeLBQb4MTDcwfS5hA1LJ6BivNxFPpM13aEM9H",
  "key26": "rCCCPLFZYi5gZqVoC8EHmJbn8DMsYX932qu7t4Jgtw4HfW6X7H8BNKskBTiwnumt422YZfhu5a751qDzU4dDx48",
  "key27": "gcQ2s3VbspJ7j9XyfQ6ATgwmMNkPNWRYpgCFtVosYXCc5LBJZ6tmhnvZkN1n6wTq6JDZiHXLcajHgU6W1qa1NGA",
  "key28": "otrXc77CzMLqQAc83zCEhZScjfF7XCvwgm3jzpwaqnwaeQLJCYUkjRNf4GKq8JuzQ2RrSL9Ab8J7NaYnk89FUKS",
  "key29": "5fAUBwqKPysYvmjsHqdPTaUFBhqPBNr8p1p1AbHrRa23J2YjwS18t9LQWRqba2HKy212kUfjkb2V8JPQD26Q5pFH",
  "key30": "4AywfwaqS4fU4zk1fAm5ZaVpoieZ8cYw7Lgi1Z8doY74RNNYUAYDPic2v5Q4kBqJyLMvcPB7KBmYNps7BDSAzte3",
  "key31": "2JYtSRygcPW3id4PFfHSkCoxVkApxvks3MvK86pvGHXFEyJ8rpzZF2PgcGMSP9HBpzBByJ4umA1E1qc5BxVaGD3r",
  "key32": "2tKKAEFSaEfzaDNTsvPhHd64yX193v1YXE2CEHz1c2WayRqeyrCQHBScaaFH88M1ANQaPXfVXSDhxNR7V6eCf4YB",
  "key33": "5s6emp2XfwDbdCm8ikxq99pj9NV3fEsq2R5CgQntRfEz5cVqzZDXMmKygM7ExaMBGPKeVLkFPnrVDDrbRCh3sAVP",
  "key34": "5QDTx16RDM6o2gAECa4sNn6nt9tYrvAgTUbRMr4udksTeHRndnP2v1K6K6TkcvzyYUSEFKrG4rtZziCCyHQFzcvY",
  "key35": "5Eeg5tGHiyTQZj7rZa7KDgKf5sFEHjJ6X137xd8mPkcJxqjSwDaTaKEC4db9xNofxJshWcRxvFSNGLEvcJB34Zvn",
  "key36": "5pwY9TJP9vo48MgciDXr9vnMwsVQeDzaepxVkN5c5EuqRmC4tCQ2VLuDmGywH22ofv644N7JsdnyocReC2UKLiv",
  "key37": "4Ejewtq1ZBw5y1iVrm76SAYS58mCT9Cxv1hsDjYnWg7UbzgBnLRgQ18PgoF6wWzCRPhwnsziYKHweNQKkEgpCpty",
  "key38": "3MK1PdeFydS4TMGRmG18fvSPArq4phLds6LmYxF1kdhAjtFwETAqBz9WFdiz5UqLk76W1SQeND1ghWVVVa8gcd2K",
  "key39": "5Xy5qG9ZaYSPZXh8yyajWPrvDwvL8E11h6pWYLADCs8JhrhsHBNLdb4sma3mzH24L8P9f1cAX1egeTnDMxxqiCqw",
  "key40": "3k6V4wQk2hsistgrAm4f3rVbCCXhjtzSHai4Rgus19KXmYMdd4ExeKaq352tcTAYAsLL2JqbUF3gPnZKVp9Vf64u",
  "key41": "24DXMfYEaLvUfpa3PBJMZnZ2iDyrP8YdmxsX43YM3qNxGS4yRAkS7joQ3agWHUtwUMvZHqWiS1aagw7rEPJmXHNc",
  "key42": "2rj9eEQtv2PuzM9Zqckrw3KeQTvg8Z37YagFhrp4WqvwBdMTTJ8H1iYEqU11ZNxvymBqrnoR7UwAFUBDRDdGoj2H"
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
