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
    "3b46FXaBvLfiynjDb7HPnhMNWwrWXiWoWyZfZVyFRvgip518Sk5iTuKJKS7C91YA2QpvMvLWj7b33f71UKAdFyeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSTCBTe3E6ehPSnwgGdCAzdsLJtnxXmi4Bd7uGgSB2xTv3rd5rGKSoGW1XgJqSvCLzeec8ST5sxqspbmUSEpPMP",
  "key1": "2nuLGE5WXvynk4sKAsQG9u1fxch8V5Zvq1eFAYpebNR1CqRTLtwWY3mn7WQELK6zMJjz1TrcQooz2gk5hADDrdwW",
  "key2": "2rNk2i5VEnhg7rrCEQgbtv8x6fcskxhuuGzhB9NaDRBnTvsZfqsTBKvFWKVWZ66mJpdP9VqrB2ssKHoDxyEfq1wp",
  "key3": "5MUVFqzysU6wkbk7Kup4pzSt4gv6ykpntxgC2s7qyuzkC4chtUyhFuqstyrR2ECxMspK4axGvX4KtsurcGtgL8kw",
  "key4": "5RR4Mjh3S4vcX6Ds6Fc73MNHvfhQHksw1BFy6nLBGRxDezChvygDjhHw2JQL8pa1JoMGhe2qu25n8jVtaN74VWSo",
  "key5": "3wrq4PnZYEJ5BqSPvtdioHzKGJ8QjVqiq3Y5vP8zFtYEHofMjzPftsH4SpUB5vUiaeZnNt8VDQsW4hqxhp3VcnjJ",
  "key6": "2EYnb1zyauu4cqthUVR7qH5qGazBs3jWS9nT3VvRhu2ifWJhHorWHLXLLUwFzTvSpJKrMKNZZKWFhvYhPmVySgbp",
  "key7": "34hBWu6jKPmjUj34P4iqfbvsgks8VG8upAkmcF6nAfwp68g5Kj8aniCfHfvcmEzGvJ5Qg6VpppgRuqeki3nPyMmb",
  "key8": "qUZs6M7U8KMEJDFqRnoNKUPDFzsS8z2iDjFTkCt8QfgbXDHkD8KYrraGpbp59HPy1M918oyoHRpEn8WVneUwof9",
  "key9": "4tppeuGdE9QLhbXbArZJud9UJPry1mpE1ofdJM9knfJVwXQEbxSDbBjg5eRupwuwFwtY26SNPSyG9ciomHWCLqw7",
  "key10": "2U7Qhjowvd2rowRXwdY1LVYEnx91JDVouEXvXWjACk6Xo792KoWQVLTmXN7SLr8BXZxX2q7kMG4idmEopZUWxXCE",
  "key11": "RXnuk1Jf34qQREhy5HaQ2Vg8HS1q3k1ZBLmRZuoGtbBn3ZsaKjXAJX1nJMN9U7XqXzM1B2M3f2iqPKySPXSX9oY",
  "key12": "2J5RZZkS53gc5WGKqEzsdXZjj2RJVLqKXquHXdEkY5STFvfbcacdwSQRyMPYqBBqqirZ7xMroec5Hg91N3spZiYD",
  "key13": "7WarKU2LtNBJa8tJbRnyib82tBJJ7dGN9XKetiQvLgwuixWpLzgvm7KGJj2MvkEVaA9K1GRc6sB1Y5REHagPY7z",
  "key14": "4rAqqx5xPZoxkVDpZRsX5txGDgxzybYmQGFoBeVQzJSV8tJWoy5EWHEAnDbATywhfWo2jT5xVBNKrGVvuspGHigp",
  "key15": "4Ut5hoMuNoSccjQX1iLqmwzsdXrS1gEa6GKNkjS8hXck5MVk5AVQdeLJ62bj7GnFEFTPdtHoVZwr6SHGnkqdWuA1",
  "key16": "CvxADWpz1DegUWWmGLBJuxJ4EbAhExMfJCGJa76XtguXhVuVYkEc4NMGmyyeXjFz8aBmDtG1XfoRRhiuA6GbBc6",
  "key17": "5CPrM9v5XtBxsR5feAmjquXaNZomEEPLuBpj5pyfuDgNthHyb56nwXXiCjppNafCvjEYT5RWgw3LVx6zXj4H9nm8",
  "key18": "5nr9HiQ7Tyb5xSJ9zCxNsK16x8K1QifVZCRgU8GhaTKZkBaYhJPJa9uSWnmpRLBR8pcdTGLRjtqhTkLdtNf4tirs",
  "key19": "22rCDqwVf352fJrrY9ALK39agJmsBzXYPPND2D37Md9e2qFAVP3GUJSzVq8apgbmvj9HupmGF7s5F77KF2T9625r",
  "key20": "2sGwc27tFR4VLcjLaa1CGYqjL4wqhYYiMpvPyN1sW1AHDHhbKuPVBXv2YUsqwKM1GHpvdcKX4a8SmFJrxU4o7tkb",
  "key21": "o68ZuGUmybtBxSe5QiDSfFxkw4HJHHg3twbyi3VRjmTZVGj5m4D24zvESpY5KB3Sz1FGveoCVCvxnnY55T3ezpk",
  "key22": "4hge3EHDzZNtMEu8xJ8ejhAHQsZNsxpPpBFgMQDLx7WoosKcfQqZKfBUAULhwFAQvZrgizXuyuQJ7rrt17wnMeiy",
  "key23": "2f8jBbeXtq3LxyhW4PuZQ9ZnQWk8XXB1yAGruSTPc6a1ZHZsFYBHxEK9pSRbpcL8eqeN9R3TjNoSgWGhM1foApLK",
  "key24": "nvdgf4GZaQTNNpjSomHRHHZxgeg6HTULQFquSbCwmDPfefTt6wWtkyJ3YGNNZeC4yRV1mjtAotbjNLqfvCsgeqE",
  "key25": "4UqPS7FF3s6vNUYFXHBenuMhab7xqqbazqDVVUZbZW1Sq1rHavNFYahcaZM2vPHunqWRwF5uGfdzrnxvELrJsToB",
  "key26": "5gKfVWrPS94vczrATPoC3JcWycqRjaACTjTHiXkpzavs22nAYg3qZbZ3Hm4CErr9KQbphQvHQGJQqYfPLggLKgL6",
  "key27": "26uR9opTCrwXXxqrYBKTLVijfaWjzKsSrubxgLBo68gLFtitK33N7b8Ucg7WzfD8KBSL7YDjaWPRJmVtkvKhgbv7",
  "key28": "oMPE2W7AYgxaz9Etz6fxuSfkb7i144j6QuXxVZzQNYme5yPRvw7KAAQDSMNx2mX9363zJXVHRAVHdRBsA1H5qmi",
  "key29": "i7RTuv3zrWZ3HJLNEZfBWPtn3N5fCxErPuJ8W7VnyU3wvbcoj9MfduE4aSm2Sr3t9cWvJtnM78K6zYvwzCPHj1T",
  "key30": "4XJLfKK3T596i6Sr5M96psxNsEP9XtJSm4r3zCepp6NssZEQf3DDzcxBHGoRKT29yxr86eP2XmiD8Ntjgi61ABCh",
  "key31": "4Y7jsrKFn72erTZhXkyeceys6X1tR6gcF3ZGECMuQvTS4x3JhWcszJTSHHAeBpyBXYopTeGXpvHWdENFQ8xmbzeD",
  "key32": "3k1GLJJMJVVPo9NF4M7cnJZUXUxAm2w1dQ1TJTrtuWW1BCpy4JsFs1ShZR6zPnrnPoaqmvAPE5UZyCYP9X7D5X2H",
  "key33": "qUkdwbYjvhpAdBbiDf649R9sLP8Y3sfQTMe8ioFo5KqBRcdmePD7vozFyoJhetEVViXsZkLxvZFrHonU6MbC5bx",
  "key34": "4SoxSxJmnYg8PHyU2JatJUKZi4Hw9vnJZKPSERAhLz1wXWcZKseYu1TP1VUSinit8pDGrPTT8RukBGRk85AuPKVp",
  "key35": "36xR9oGzZ311sBz3zKpVmPLp6BnpfUv5rvxwrxqoH8JjdGN7KE8kBTW3nWDABXvSdkhf9Ja8z6GXERZnH1GZGVuB",
  "key36": "5NGs7kd4qwRAf5r1koZ5s3n17bHpzdwkqxU9zvSDqqguNZcZiMS8ZjhSWccTHdpUjFpbEZGpPQmVzKuxsqwbLnqR",
  "key37": "2dXFf7M7tpMTyUji2vJKqj7waAUz95czWX6o8wazyJ43iBSjiqtDS2A5tNCF9ihADB82CETLfRq3CoYP9cuKS6xS",
  "key38": "4C2iD2bhkPyKkbyh4S3c5WpyQNdQ7AyMQZT5SnKcrSL7R5NgXKpeMkov9HR1mZjfQ1jDaihqFGiY4NX6kFHTGyLw",
  "key39": "3U8N4LxsG9EozWsyemULrpPHSoWBC6oqiwyYkDpNWTgh4mER7k88rGHZtMg4Z7fQfeuNXC6DFS5sv7nHxVT5fS1G",
  "key40": "kyDdK3ysqBQD4Ad4qVm3y8UWJErq49KauPUzYshNjx3hxW8HQBL5MhDWSvs7d44yaPbNrxgioDJkvJrEVuT5ymP",
  "key41": "3yTVVq4TxfCSXkb24VohSh8fe7vyjtBHzsG3auRDiyxcBpuo4CB4aGMsUtccgADBTQ8kaxAnM7z4yFHcHAHpJ4fu",
  "key42": "3Z9cPKzYhdYzobP4Np2xRu2uUpyKn5GMgNzmwVBuCA9NBSicDZueuazgxXsfcr8WY5P9spw6M223st3Vj6fcDopP",
  "key43": "5Pzn6mjFrtfCUouz1LhcwNtJhQNxkJJSL2BdgpwU68CmS8RtuLAEPWtYQHaiQafNGqthgdrascyRcuJ7ggkp41GD"
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
