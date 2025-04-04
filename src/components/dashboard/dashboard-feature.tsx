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
    "QSfVFi2p6Wo7r5gdjcdn9pL5c5fvNVc19YyPpxDvZGawRDrZdKS1HsJ4Wwc3cPMY1y2gAZoevvb2W5MiuNbUZ5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNAPLWnzVkKWWVC7kB6ftQLHndYq44rnbFBUidG7xYj8ciXQB3ufJtV8emZba3AmBcTmhBah3b57K9g24ReqweR",
  "key1": "4L6VRJPzUZqUUzQk1SMQAh4snovBYupz2jBGCDy9JLJ5iYZD974embMjpovayV3LWWBmtu9xEGTBhQdAyJmZwGNP",
  "key2": "SH5TGANHsGrdsSEopYC5hmHhty96x5sLumNX87zYHUWobk9AU7PaQAE3ZaPkc51L2nWqBi3Zpw4DqbE3bEe2hE8",
  "key3": "4xmfsUZBPjx42GiKVc53SLv96zupXbv6NmVrYBWheFRjApb5kg8AUEZNv1ecrXiXc44ofQbWU1hmojMwb3jhwRA2",
  "key4": "2G3k2Veae7JcCWNYih9gV2sxshFhw3focbB4RpC2ntiPxx99vxdMECtkxneCqj1X7VaQknn7ugsHTMG97SkysC9y",
  "key5": "5A9MdgUwnTC87NDKvVNp6zGxSSKAcQQQAhRbhYNLB9pHyXbkpJyS3qJ43p54ARKYS3np9vWcrbYF3P7uTjNF6PmQ",
  "key6": "4TusJDBqvxyZdVkdiL54pEVdUpYeBKYAwbxcoRjDNHrBJDP3poCYG6ZCdu5aUAVQtL5fuAwoyH3CouaKmJLeemzo",
  "key7": "5ekdXf6sSxKyj7hBjSS4vuFPUgeo8GSxTQaUFZtTxSKaigfq4zbqByhQD7e2uiag1xfeaPmYPercPbpyWYNT6JY1",
  "key8": "4jTo7vtzpTrXhT8NLeN3BHfMwqKa8fSihbHmT1tfSYcK1nTSwPgbhkNn8QZU2VxbfZszRPNEfNYBLD9BsJmzPdet",
  "key9": "4WhZcKh4BoFtHMxJ6vkB7wBCEvH4R2VmmuuCGrpwqPL2cTFKQLCfXRCCaQnLExu1R4XEWYyi2APsa5v8uAUXSXWM",
  "key10": "4VgWhYVyCPEmdQvaicFYqy53Y5AtjGtfBMfrjQY43QpnqVEsP9hUyZAkTSz3iP2HjktDEUSyqjxecminvBqtmZPo",
  "key11": "7VDbocBkgVHiMvuNDnxX28JgNyRm7YM9bX9Tp5sFm1xadGgWvTjCBHvF2BUY49HR2uo53VaFx4rJeVBQLDbkYA9",
  "key12": "5EEHJbdBqE5wpPSsBRTBUmXSPLKJx1pCBg5xNoDwAx9YrQPN3EjWrdcPTRtytp1M4mk9Z3W7kLWUu8RwRMUMo6q5",
  "key13": "5r3XeTF2oveQBnFXGhXyqxznQ7re3e2DtzsMgM6ww3FudFHX5EiNafrSP2WibPo9BcD9M6tJCZE1FD3J53yDYio1",
  "key14": "1ZFugD445NhUPfY7LS2j9jkZuAM8dbuJiSBb4Kf8aBAMi1gDVUqQceAf4YTJuwBsNuT2SpgfF4hBmeTYoRYDVfd",
  "key15": "2ZrN4ibp4KPRbrJEHTrJAjrP67UApL335NUau6VhjH49qwKNCqMT8U4FDeYiHo65TqKWAFSJNeuZ1H8g1VR7GYbb",
  "key16": "5pSjfG4kpCyaHrJRyr7VfAYFFDaxZufBPYeN3NmZeEyYrt5Tgg5V7VNWFgNonyH4vcu6RUhfxyD7W97Grnhr6hHd",
  "key17": "2i98h4vqEUTaDuA16f5qgn4Rv6sHkaSmRAV3gvvN3CiHfJJc82FcDJeNMTZttfBaguHpzENkpUismrachvgwswrd",
  "key18": "5Et91tHoNQcUpSPowxZjXQmiuDPQ7ivLynQu548dyTz3pEjNjmNSQ9LLRq3r6yrxJW6ocDnZaHD82tWKRii6pm6a",
  "key19": "5QXmZVmA6oRjbDUYhssHYC8LBy6mGsRKMnPGheToRT4gRr8UPFbP1zfqG2h8V3bdR5tUqveL7iS6jARqvaotpZm4",
  "key20": "42RCUTDPBL7baNjSrjiTZiKhp2sYhxRPiLPcihzMRN1KpHQ2eFoM1Dq63kxFS4YwLcjvFJicsV9YkmpYHjAGVD1Q",
  "key21": "2zzHfi7n46oU9z52p8UD2sr4zA1t57KXYxYkyGJ6DX6TeenED8x5h8oAveH3bht5w5pWEWVcPLdSfWoxZSHDskxC",
  "key22": "5e4otpDBrC6Nhgnr1JaZ1EVbLi52jUKcbfNHfdtnDsNbtFbFMHUS78yYML53mTdAtYuEWqQqkAAVQyZHsuLaiiRi",
  "key23": "4tqTBuJoVQKmnYaG1BVgUK4exc5QaSdnUF7K1mzM5iaVmWT17HTsDn1QuDY5sbAtqJoKfcMWCHVePrFm5GuLexRz",
  "key24": "5aQaGXJye9bV4W3aCTrY4BjoYcLEMCkCqVx9koui7okqRXaBJ6yboDMSkasN2dMh15bHp1QBusuuiR5PX8rvXnn1",
  "key25": "eeQm2ZhgwGQKQzZ4bFoe1t47ENrNk4K5gG7TFyqqXnwGM8CMpiVim22jk94ZfTaJovKj2QQSMtgMLB3eJqBDTWL",
  "key26": "3ayJMiX5BzwAWyRxzbH68Y6YmQvUr9tHT57YjULvVhiXD2DqLuQMAL3utpByMpg6A2hH5VU8o5NwfoLeo4UH2jgP",
  "key27": "4twbaXQPh5ebng77ZSVbLThQSo5yE7Y9K5a3MeDg9UErEXijgPrHH4S4m8szyVrUCPupEjiTZziTDQSzaM4VEF7i",
  "key28": "3j1zY3XrZEYZKyFk5o1v3FjmAikLgHdpK5xyeHW5iQiEcrcwbxvugGy6jRNPE7yb2To4xbxoHVQqiZFmsxzSh6F9",
  "key29": "5QHFNiogohFFuQyPUhTZBg3yKAf41m2eyAJtPfQXnrQHzngqjeTMDKKnGpX59K7A8wUEgNTA17QsoRFGZvxKUcDQ",
  "key30": "2ytv9Hz1onPpmbhxVWDJmM9RczrssMDMQVznCLzNDGjBh1SCzLJnvDj46UyUMKmVcyQ2mYMsV51GbT4aSeY3r9dC",
  "key31": "5CCobwXmE7UyYGtkRyWCuALfcMg5bHv5Z7vKm7TiG9Kd1PBHV59xnq5yKgAfPLdywAsqKTVNf9kKT5hLHpjDAUoF",
  "key32": "4yAkQtEpFYSxMQJKVjZ5Z3SweHkT8oWw6V7TAUB9zkHWVyMqjqhXFHcztGsGzBbP9FSsVaEChuG7Ltp98Fi3Yhks",
  "key33": "4muinfEpn8k8RNcbEHEuUcxDRkXVmV2YCZZZV1AyuNxz2JAZhJoqDcauALeG6udYR9qm8iunXDoc9QVER3Layv7",
  "key34": "4zvEFLoPVjnXiz23XdeEbDf2T4uT8GPpP7ybJJj5sQGLeCQtNUQeTvW8a7cwV5WDz1eNYPH6tHYiJABZ8nLjXbUa",
  "key35": "3LiNWeL7urdBRHoTR6QR8zvBhQBxNKCai76FaESqaZbF5HFB4tVj525ZRRWffiAsqfibB2Q1sUk4whH5ifpRhcG",
  "key36": "bDpK9d4nsixmLjL9Q1yFTBLGXhXBk4Kk5kVhPuXKYaf1s6Z8UNSaqTEDyxDabm3PpmZAW8qhXi2n7Z5ZSTUghtP",
  "key37": "4d6hyB8nuksd8HpJ66HRcYtgr2z52oh2zP3ZfWA36b4hJ6NF9PAKqbbQwfUbR4MjcKWyqmojmVJS5VbAs5p6LtLG",
  "key38": "37dNVEgKPfbym9dg5zAY899BvbRv89V4B8tGnJ8aTFoqUe7x1Doy4z74xPAitm7WbC2uoWzpkcRHUpPenjRLow8H",
  "key39": "5zyhqEdEwcE3cbzR7zYgFTeXNN2yFRhHGq1sqzzBg5dtxsTrYafGdEKqRHChQN1FLSBDQPmjkziLwaoDyQDFcwk4",
  "key40": "5sxCtrW3FSLkU2uQ1CfvYg3gaPYubHMy1oYWb59XvtDbJPA6Rm7n6mNK8SWtHa3Bq3MXQiBsMfg6V77i2MHbqDQJ",
  "key41": "6cD5P3fwGeN1NxNN7TcdWiMojt95SAGQboEJG5zgsmZztrMo9WQJ1dQvKyZxV57hjhsbTVQQYWUq3nWmJMhLo4V",
  "key42": "5ocnHYXWCdB1ZtMVJxquw9qaLq1oowt1ZAw14fvFVH9n5pMNUhZL6Cy4Hgwsaq2pfaZrNBpz1ZPhDNz2P79dkMXZ"
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
