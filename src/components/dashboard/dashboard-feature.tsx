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
    "3PGgn6KkFqZGSXuasfHfEpg5BJKAh2uuUncoNiDgEZyitfgzMFbW1z8QdXniEncRbmmabWbd42whufLspFt5GLVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ciXbYizBy9NFW5HJcv5e4hWWjH7k5s2GiRui39DCRDS3zfhKnLeq6XvwHSWe7DT3L7sPiVGnpRUWy6pdqmjd7A9",
  "key1": "3goXoZoD4s9YrCih2ytNaBE1QVdgUq17N1G4cSNatTvxh93NFGYx9AjhBGf4qTuPKffgU5xDVemp64yD2Q54pa74",
  "key2": "51whWC6nBbKmTqE1ZaSYwHx1vjBZ1UmMaTHsGj5u1iCohpA3M6rnA8aERWfWBmsZ2BKGzs3E65rKCT8B2oVQTnFQ",
  "key3": "3YfwMa6MdCkWtLsTqK59GBJzaGjWMKTY2s7THAQK2RSBcRf3yQr6t93kWU7WzCEtmBBB2eqQ1mdmjxJm11G1mVEE",
  "key4": "3UFC2nGCangNQEtY9ycXcks7eB2K8RCH6vUyrVvuu8ZGEHztQAP7DkeJpSHhy1XY439DHqfAGiQYQ9xvq8SvRkvD",
  "key5": "4ep9EEMYix1X7ECYAfpvVq4Aatbad3Gp2vg5uKdo7NbvWYK6sZHjy5SuUL4r3ZsazkLojr1oFuhpEXUurjM3xuNg",
  "key6": "3kGV12CAYW5dpJEmbgw6ZoE5i8LZESUwhqUh4SMPK2sv9oBpoPPrL4m7E5gyfvuCgjgBUUtGvXiBKMFPRHgEF7En",
  "key7": "3ivGdXwusp6VpCkV7scgHKVN5ksy4VKSivCwcsge82iJHrhBwaE8yTd2YgeSvTLyM2W1onczXaPhyvyAhjmNK9mT",
  "key8": "65Cb8js97dpjwVa9gyu2zLRrFE28sfQHFVeLZT9Q1mbAV9WtDVPqy9j55XsdMhTSsSrpHLAhMxkG8wXQS2khFvWC",
  "key9": "2eyifnmuEkEQvUvWFXmMaRCmuxsUUjqjMsqEKf8fDiWgKyJkScrjGuTkLYYWsNd6U2g1Y1N1MXjGJwaT5u57GJa3",
  "key10": "wMWWmeNeLJzUpsWTZDbfeJZQU2XYCY8hhky8JQpWB1VpdSHFNTdEvjPSpzbDqf9RBQ3qmYhGm42dnFpzRQ5fEip",
  "key11": "3AHh6QerdY3c7uWpXLc5MTpPEJJT5PfKovyTdKZ5f3TMf7LkFcERJ8CWbjDsP2rbvSPH4SRZsQ1hUxG8C2mctMDs",
  "key12": "utK5nqhA6vH9Wzjpyt3Vyzb9u77x9cSKuQruQDjPX1VZFt7Ars6fRdMitu6XiTMrJ25q1yqyvBywmbuYbb8YF4x",
  "key13": "2dQe3utnzRX8dcWhuB3CxikR778HJ4iUxAcnrB2aGZ7BCvPjjzJgxkh5AX29XrGYRSqA6DLz4dn697LeV3kEbWvo",
  "key14": "4d6WK1TvniGi5g9RzFqQfxmyd9dAm2E3HyzeJwPsUBXx5cnXcawnm6NNQK1yVvTJ5aD85PVm2iKcHY9HTPzb8btp",
  "key15": "2fEZyS615d1edB4thRKoxYVmaYk6En3ic5uCdzRUG41o5SDhYmNiFBBT7VTe14ckDHHmwSkLB5bLH77EVTHAP2zx",
  "key16": "5CQtVtAv8cQmqveYGkB34Zw8ZUXWdJAqXTbxWB2ZMFBN8jWUDv3S9FZYLgrAgngPiXQt24ohTE5SXgmC7BsgyHks",
  "key17": "2LvyGuJ3BEvQGFGyY24t7QViiL1pd7wGFcfvquYuVj4X96FkYwhQ9C5kzoSiZePqxrJayyovsVxuJum7aGbTkXuB",
  "key18": "4yn2m6tfbJxpwExK2tTCfSEgvLeVXMxR6yoogbCPyoMycnkKfDByTBr6nEdTRFeaTLDXuYuzECyAjxborS1zxZTg",
  "key19": "4gfid3WFyjTTRQLASMS3CF67tLAQ5JAa5ju31TY6yTHCGFE9Cmy5KxDwDV7WDNiKDE1gzCF6exeP53PdpXcXK6XX",
  "key20": "4LPwMYk3SZsX33ExBYoegP3QU8QyFMS22zYTwW2rEkeauVDNkXvCKBaGs5Kyv6NpR7vHRDfnS96YT3dHwcrxHiDB",
  "key21": "2g4emsPEpaJJC15nZEsN9FqmKiMKGUo76w1wBVeWAMsRz4emzvPt6wepHLYFjvxVpxGnxUHEwQFbVS3WHkA7QDx3",
  "key22": "65ekZhJg65qwiHCabTQddfzTj2U9QmSE4ApQbieNxMRYhNab8ZPL9JERuvbxxDTzCJ6hLiiLYX16o4VadvAoX1f4",
  "key23": "2Xtw1Yt9QftmuMrpizHjxEXL2v4KezHEV5bGaiMeqbJriezKr8sq5MEnUyjXV62NbAWRQbJSEDH5M46XHc49mQsf",
  "key24": "2pgUeuTAcktaAyvR8f1YpHrHbmTvJLU6z9B8a35dZ3HfJBcB5fiPkaKf44SRAqyg1CtTMenwaQPDBq5CpNZxbX3J",
  "key25": "3A8pooQUp8sGuENAj1N749QoYckhMm3A5mEh51YDQsQGGjPY78dEvDgZ5h2PneWS9XB4miNo6mwpPBLKsK5ctfVk",
  "key26": "3Fu49qaChonnQoBrd4KfiJqMm61eTLYN5hzoJeRnipq3f9BAiEGVEt5rGBk1oedquRqic2b2HNqQNtMEN2ivN475",
  "key27": "4gbXhiWXpBSdSpUAs3rHZupaVetSkY4g6mJUiUqbDha5NscyYtSSSRHcPpemVRJDc2QVUJLzEn6a4cPbv9GR1AJy",
  "key28": "4u1Qpz8JUFsEMqqK9BjABcAsUbQeCUdXQBmcTfi5LrCrnZR18ztTb1rCn8CfhQ25bg97ywNaqQ9rC2BtynFFvgoE",
  "key29": "4vSabWPnZKWhJy7ADb7wmBUMpyrGY9mWisCn4cev6AkzafyqFUgWHZWtdVgzEGUmEoiHeTnS5aJNPGRLGmogzF3Y",
  "key30": "DSuQ6rNFqJycKUnSDE2KTrsWhrKtQrsbpsEQtnwx8TmFT5Y9Mu8zmSRqKMmW7hUHy4DSZSchu7LXEdhBJBhZuHA",
  "key31": "3DpVaX5xgZrvSTqcQd95aCBv3evJG2mTpHJnGcYxdkrhJAouxt6ses6gxKuxh27osHTwoSrXWbMrCri8Sf8yJUYy",
  "key32": "4mcvp2d8udMir2AE3A4R5aGEfs9qWTcUCZP7pTgyJwvwx34zSfeUZVp3sSmxAmMmBpt6xzuxS4tPFdPup7Erp3Tx",
  "key33": "4nZ224ENYgidNLZhgutKm4Ctav9R136wCS2BvNvxehiJ1oXFmpjoaYMDWkTEV3LDmUG7rMdLWWKnGj6pjSj655cG",
  "key34": "8MndLqownwSVZDFXQ155XwyYijNhQXjPjfpGEREZcBtf66uvGaoa3hC5V6jo3zJ64qT3px4FJ5QGXK8H3rViqSz",
  "key35": "65UvULm4YoKwwHV2BBySmY9ADYTBpbjUMa1Y3jsm9tE65K1ygGEeaqDNBE4AqBKS6N5SQzYdWTh7Z5oLru54xffN",
  "key36": "5pjrN7bRZGVBtim6NZ1FZHn4gufcv4NvtF1usKE1KqaBKhewfw3Wafo1njFGno56YkkcJz3jWgSecksEFC1y2Hvg",
  "key37": "2ZgVB8fg3xrzwXTSzJRuGQs3tEXVTs3P5LK74dnuWh3dFNyXLY8gtLnyvC8T1173JLtpdTaznBpyV7qs7oYNGZBd",
  "key38": "6a59azNd74KBtBWiowP5ZHcHgdMgHk2DQZwzzeyghq1LJetUrVgTCvCDVEyTasnXPMStdinsdkM97thcBVqetSm",
  "key39": "4u5gg9euSKBYdes2qvMGJxB3U1nzW97RwMmEw4MTK6T3Msq4kr4DbCCs91Nmmezzp9XKUF3nr7h6bjrcnMn4dmPM",
  "key40": "2qv7Uyxh8pzLX8AKwAZ6V8RbTYMANYYN2vpFSLKjsU8DmpFFqbzxjse4tZNPM2fCBJgCbCK4P6VwrhbjnussVwRJ",
  "key41": "5oSru7ZshDnNKYuJEUGcJh9be63ArTq2yME9TjQrmNY5LU2ueA2zM1dLAUKXWgHH8JheYabsScQR8TgkJZfz5ihQ",
  "key42": "2mtzkMRn8GDUCk9oKLWFR7SJFW9mDqt4VJnUULyqaxzdmRpFBffRhDC9Z7giXdSAhCcFRcgF3KbpdsUL1DgtJC4j"
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
