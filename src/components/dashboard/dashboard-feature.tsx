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
    "TzYvyTVB6zQzTdvwZBqkb5ySnRXcYMRE4twkE4ZNMS359Wum5ZrGtJThMRgSkGmn82v7YbwpioMfnMcYbWUX6Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rNu48sLmgi5JdbZQ2SGLA3JG9La4KrjbEoZo5WhkiWh1m5dUJRKnX59hhckxzLqqV5ExN46KGoeDvon8XaTmuF",
  "key1": "5nUVmpHXdLok9X49rKKHjNhTdGpNkk46TaDo6pRuutkBTNd7KP8HXqnRW6rzuCsjk1pF5zm1Uw2Fk64vNujkp1b7",
  "key2": "houMW5TVxbmXdXizrQJSUfxjNQXKs9ibVeFKWXtJF6vHzNSM9DeepjJ9FTXSEZW3m4hFvHWCixAJSiZMGhdCCzA",
  "key3": "5jGTTBpvd6cYJAQNfSZxqwxrg1wDLzdvwQk5PtpFw4u7s33tjci6AarB8BjkwToZPX8DnYjSYKYG1o293XFmkgeq",
  "key4": "BSHYKqK7yx3158EmB3bxnvwyAt7syNiqVgFxXXHGfKHvjJvDF2G37FC89wjWzkGXc598G35GVtYi3HpZAttQJ8k",
  "key5": "4Zut57qJnUCWj4KmW6PQVN89mGuCH9K6W9yWDGhRWxmk5DbzAr1sZzjPthFSYdstMQG3QCNgqiFxpNw4d8YDaAcy",
  "key6": "2EtfxbvEYPBM7nQhUCa79a6THQbdnBa6fcydAFgLs6dJZCDVK2bk1vY512yvJuCyB3k2wd1wANDpDi3NS73b8HdU",
  "key7": "W3aAkbkxWkjC37iTR2fAXLWMbEuKgMYbC84as9BtK7PhcGHFqzTFg7jTgHENoXAtNuLyPxhtDhsRzjoNcDirM4d",
  "key8": "zqWH3Ga2ZDLPfhWaFndZWNpbFwtFhDZjC1WytawDqrbbkE2CgMYBohK2LSyJhyTkwaUaixcPDp2DVTaY2Su9LoG",
  "key9": "2foCQNSaeJrt4dphHX7gZiXs2i1rH74z6RgEazhgVPnqYBZmniR738QLmCqErfMhCdv22JZbjeZWATLpcegeSLK1",
  "key10": "55AgUoGxSS9WsaxgX8SiNAoLKVRPgwLVoyhFzfAyZtheiLfvVPg32PJKHWSwgd4rWSzm5k3wuMn3Xn6QrHN6z8oz",
  "key11": "2vNhy3GusBAConSYTDN3fhBw3w5WqBtpBcVzji6t7RG3F8DBN2dcRtANtNk4Gf1iFhMiykXKxA9141Q2bU4HZ4pe",
  "key12": "DqJ7p7bYMsQ14rjqQ6fdjGEowYyyhwtf4EsMvKS4NSkabSyV1UuXsB6eEfHTw2uQ8ZMhWzX9gC5viQS4D4rSyrh",
  "key13": "4jiVusNUnrfL1mdP2PqkDWnrAHYCVztL7iqgLXBZWBz1uCVASsGDsgw4SibZcvcyPNKpjzTHAvqCJiPPKaYCS2Jc",
  "key14": "3tY2SR9Cj8uh3ydrwUubJ9kRyA6qNv2qktGvzpLSDTJGcNoRBoc5y7vNfN88jxbGqqt3YvRiLNs7Xo5BKVnXv89L",
  "key15": "SbSFeTiCGvCXvbj56PdK8EZHNkWRRuJM6ETRb4pTTf8m644mYJS8eejtQX3TrKZFRhzdHw3ui2XC4VPHoTbT8Tu",
  "key16": "9VBoufNQNfADh5fb1wMs77bmmyVREai4bEHqBc6YY6XLmLc2496U7oe1PfwzTr4xcFK5NRvhvM6iLEybFWQ2qKh",
  "key17": "3MVdge8Jfo6ynbSnuSVRRMf5UUiTi6AGLG3KhcYQTBWqtnNW1WCpEFHREL4WtY2bZJVSSZo5ANhmBV9m1ceNMTaS",
  "key18": "UHwcxeWTaHN3ggsZc76hGeCXUWZJaUkK7WsEg6TxULtnzj4WKrP1ADuy1jutscFkH3giMVCiWn8xfTgtr2Nb6VJ",
  "key19": "61yzCUs2t5rGnwVWRKV9nPSBRKyeioC9Ho3QZRyafrKxQzZUBFxSM9GqMrgE5GB5LubLmrtSnCmThhWqw3mTYcM9",
  "key20": "53jftXT4dmQSLpe7aYzAR69CY5hZrcfn2Tw7uzPdM3pbs4RVTz1Liv69h8CvxTCLaHFTFQViuJZepyA3hXLEQqQn",
  "key21": "268jY2WgFyi8u5XadHVFtgRwtKXPhAhWofJKmeDcXML2coRmhfA7RZLmX1Dj4qhdFEtD7nEHtm9eHWBG1wydX9FW",
  "key22": "zuNX3P8b92Gc1zTrnJM4FAiSEonwfGLCeuZXQR9jsM2b3YTyfHNxoaMRV9uLdQwTfWyH7jLEeXbWZNWEi2ESYh2",
  "key23": "2cy6MU73EPT8f3Cia8i5rSjsGeRuNeu5wRiwQc3S536ck9HJKM5mKbsZvHg2GWmh2EHaU1KbbsdJYffiEenMGc4k",
  "key24": "TBo25zLQE4Rzw6pXGZAkcvsGVX67toSGuSc4E2bfMS19Xye3XRU5dgMZEptqa3y3rQxMKYzdpgixuH3w1F8jZKB",
  "key25": "283FJSwBBHeZmwGiV929GzeFXzUZjxkiyddWsE64bFNMvVXP9wUy6X3JfFkYFX7d7J44mLQxxJyrfME5e6S9Z88Y",
  "key26": "5kgmrUF4crTkwjMuNxuWaS7QhYnTCiEXNiyuQohWFDoEt7cKPeq3vfnwFiYLGbGsP2o4tFGpg3RZEq2JQTSNRcmw",
  "key27": "5NHuxsEiLibC2NgC4CGVxJ94GGMsbVvWCqoYF1N7mc1V1ukUyCZQei5dS5v6VUnANN7dacbetJRd1NQpDvUaqHUZ",
  "key28": "3DyUPk6T5K6BdBNE6yRiVr9Zk94f7sxMDRTGX7WjgSshzPP1PMbEwFaRG3SuJxQWCZddyKEFp4sUrquBnG6ct7ZS",
  "key29": "koGkrSyXczicXxYTB8EQLqykr9nRXtdGJ5sxkJx7356eeM5gox72QtYefiHR28PigCjRb2t3eeFLUMcqbsiaxrA",
  "key30": "5RcnAiN6wBFp9HrpLWMBKvRKAH6p91Try2zARjtU4vm7MJpyhu4n5f6XDVUT2rwpDvQNbw2z7vPxpNaSe2pk2YvV",
  "key31": "5gDzWdf6TxDFUGuLe1XvAdWmxZ6F5ifgytmcMutDR1NdAWrjnxpgkFBMLwcpT8oxi1J2WKkcVkXgA34x7gDoXToe",
  "key32": "5i2YjGAjSnkNty6sBmTDGhKMWRtVxQjmjFdEmUE8rzMYC7XGDweQxAhWNZsPiGaUAjKE8FQhygWoK9ropkxkNAFR",
  "key33": "5kZNbeyxhi88YAZFzC9D42yty22RfeF3e4yAhZa7B8k81UkveKSzcrbjsxzTj8SkB6b3E8WABmt52MhbsXPNWmSF",
  "key34": "2KrZt4ecJJn6zUVFRrJ44f3aejFZif3wEVS2CwiYzf5bWptGaT4S324YKqSz9DPjXDsvwDbM6GJMJ6xZfdV6vRGF",
  "key35": "2b5xnnhvfaNAfrxXNcLuAiDUVqzVuSxxvn6TpWyBLc3Y9fXh7PokcLsD5Kne8xa9Xahs8zcgdcW9Zc4ESnha7yA8",
  "key36": "2srhcFQSx184tWG4XCd76566bZXMPLgxUrALJi2DrRdWcwDj7V42xBjoarydnTUyVYyxDaNSiEFyC3qVUhkMjGEX",
  "key37": "2memCbPK4n7UBoNEsSMNHjTypWED3Lt8BpFFUfZQtCqxV6CZodwpWfH2ZMVq8JGX6kfw3fPbMDzvaeB1i3pxxQ2H",
  "key38": "3ggJ4wEiVoiLxEwTyoQSDmUHpT1fjLmhzNQY6SqzVVuZigahd8TJVEXNuabr3F4rz1inEdHyEsSNVT7D2HimyEN6",
  "key39": "4JRyMfxGPtA1vqH5GBP3N1cbjLZZQWovJZbJP6e6Q2sxPejenniGGUuoLnMPksf1gaZUqjLqusFmQ5j6c17p4rFP",
  "key40": "2diVnFM7ZLKHeYCySPr1x6rRGZz3MySfKQ7n9HJ18s6qvqbvdnGpNfgShjmkAkhYSuBASqduLUvEWrvSvDTkX7ws",
  "key41": "298JoFw3n3yWoh17HfycSYCToAkMjnRPGhWWfvwqA1PFaZ4SBtxR6gSiXWvnVARZNiBMAkDYQaWbHbgWfEmDnUrc",
  "key42": "4R5ypQMHTUEW6snJz3NDome3UqQcuxKqgTDmS7RA4XJWEuKJS1tw2doDzgcSCWfq2EA6MAJ2yMTW446WXDVr9aF6",
  "key43": "2WMjME1STaf11GpCY51ZZanWEn8ibTxtEu6tvr1gcBdfY7JgsW7qFJTrkDLjXpuBiHzYgoYpGYVapyZPs2M1YwKy",
  "key44": "4BHkCDDMdQh43ZKUuGQaihJU76FGKWs5DM1ZxVYbRvcuuLhLXQZHm9is6ZQvPFUJWUgLkydQSiZX7hVHQxa8EBPJ",
  "key45": "2WBy6eCEeGNHHE43yDaKwa4tSGR7HvVfhiiEZfEcZtig9MajW2HpdtzvEmSMD5hqn6NSwxBfn7xZt811Ao5qXMu6",
  "key46": "5iTQyYv3JoYFGGvJE1oeCCTvhqDJXzNt5dSVsGXC93bkN4wZ7tREykrSbvftq6TSVEAeArNukc99obdYC8Fgv26H",
  "key47": "4hhdmfBvsZn2SDH2huzyntrWu69UV5XdeaQA7Tz3aA941rebxdULbtwJaocNx2FoTGniiyfQ5So1C5oeAob6WqyX"
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
