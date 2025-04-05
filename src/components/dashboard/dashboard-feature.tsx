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
    "3QPZTdwgiBGBigSPoQFejChWFQhvLFw29tKxCVFzFxxacoyfbvqqrtjBBKwj7RLNan6yuWPziKu6ufJxVQr9x51k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6PSRvywGBH6HdBhW8ogFuUsJPUtrjUSguL3aWF5G9XRoascanbFPGQUKfd2yHkdJjsNmiu5UW56SsuAiV6xEGz",
  "key1": "37Znnr9JhWCqBaPsBaWmhPkmTQDFj6TKVtq56KpTTcGg5CHZv4pNyXp3zpS3Lv9dLvb9FpeGZ874J6ug7EDzdExL",
  "key2": "4CQyr8vt1bEbi1GBdspaa6pfuUokMxTBwjrAzmTZfUbiRpWwmCvxu28bGSJp5gyvUHLEVuUbfGpAGysWpnd6XjEr",
  "key3": "61hwipVuJG7mGZQExGX1TVbXWW13w4FusFnSyeUkjQoFNMSivejazNfoLFhBnwkAcMofnMJZtj4mTnhn4hhEu9gW",
  "key4": "22e4znCk4PCUpjdstwWZgyS7vHRdHmkrNZyQvBkHeibVzNjBsh4nYMu2U9vWo4oYiApu91FyTwd5X8EkQF8VPPW9",
  "key5": "TTS2QmAVoFZDwwcniRL5rkWm7QmUNvrKStGeNupyEwuK3rh5qE1fHsLJdguEdyfYuZLDfDFhwkFsLoyKi24QUgQ",
  "key6": "3QRpA7hcmDE1FT9NNNL4GvcunEURpepgtiLJtxDQWeYCb1n5inoUzULZp3mnH8r9U3rswgbhRhvYJaDVKaM16Pb2",
  "key7": "4bncFxeHf9JwHxJ7ddc1Xurj7cm55HNmhGYCeC2KdkR43a4rjPsuChTYmNRjMPmrcGf865pPwVHXc42hJbdi54Q5",
  "key8": "C9zsTobPkz9ZjEghsnC4z5PHjQHaz4X3eryb1ZK2gum4zLr7qJoJP1MStRnfa3TLzxnD2PJ9FxcR2HvhQgrNMVf",
  "key9": "4f5Xc2e9gftDVVFBTrGRcygjcqWLD32WgAhCyXTXCc25Q7StN3JBYvWouHbXHvMcq2dKjD4Ct2tsXmbUzKjuoxwV",
  "key10": "2bb6vTaYvbjHJHZrZWCthdnyv5gfeEBUu2V72my8TX1Fp6xJMfsaRQSQD5Ve9pfWbs5Ys2Bkxje72pSeDwm73k4P",
  "key11": "49eCh6ckJ61Mzvk5E3Pa5kvqYsi4AhyJ7xmz7frqDyeaBmV8ehknofQg1JkrVnQdsNUL3RXHkj5aBbLoCE86JstR",
  "key12": "2besq9KLo3FQ3MWQEtv2WVrqUXyFoRZAyQcpBcmHwSqLXVQEtGHaD1fB7AZHrJy9R83CHecLGDznvfrQcUKRhBYx",
  "key13": "gwVK9P15iZHwixxzQbYoD31nYk1YxBEWa61yWy9wWrUgKateqKTbwAsNmC2CwUsnyCULXNmkSFwDr3LYWs3qnnC",
  "key14": "etC6cXus9JivuYF89w7dToaBXP2aU5mFd4d8AjujHcfTTRCnctZmY95P5ubVST4szJD9NzNGGkCCpvyfydK2DAx",
  "key15": "2UK7MMvu7cwrd1vtzBLK8GjmKiJ3M1itGZ6YHqkDR4QqXQ9xSd9yAgUTYvsba47Cnq5zxvan9GxxyXmas35WFeGM",
  "key16": "5WHPpq9p1SdtT7QGj72vEugMvqqb3kdwVvYGk1xLfW4DtkjNqSbnrx2Z4gHxcP3nEZ4TC6Zv8VQ8yhUzRFZwoCS5",
  "key17": "3qdFVwEnrDmPhJB3bCZyxp9LsH9PWtCL8g3PMTUywMbUuzTVFAKb2pE6NoGx1RJLUHUYCjFATxu8sJJSF4RoWs8T",
  "key18": "47MHdGymcqvS1p94wHEhrprMN4BtZq3juBuchjs3vS4aDJc3NbsAmiKAtyeJ4WnpBCxxpm2WMJe2JPhy5ErS5WVD",
  "key19": "M2dfYdS9TzQBncjEXLJFoQXszctrD9W2CDGQfn8agSsWap3j1MbaYNFZwApKRfj7hBXFafnZHJX9RvDBRrP37j2",
  "key20": "2dFN2p2T1xr2zAWMegUG9LSLre3h45M4CDWRVmgANY4pzJnBUN3M3TPE1USw9ECJ5pL5jJQQRh3dgKTtwSadboKz",
  "key21": "4p6wP7HNpnK5VhcigFhaWwoC1fbDqQFvSrCF1FpHRUtge14GVBTbsKc7og7Lc6t1RvJccibpLg48gJczKHbWqZKD",
  "key22": "4y5a18KonjwXun7C8mqVxxsexVHSLdDqyPTWUbAtpkn3WQJ91FAMHYKYRPcBKswkPS9XsABoo7pmsToZPqAFuMut",
  "key23": "2ic5pv9TVjQz1FJFwXs9Fokqd3HcvHCbcqvrY9wRYabTGuZ5st5CHU2AYrwD8qp3qfJLY49aTivhnXsztJFAPdYA",
  "key24": "5fo2qSYj5JrVEK25pAiJpHEbHgGKtvq3J8dwUaSdpb15pXX8BnBvBQ1Zfn1hQw49AMrrs5toQH8Mbns3wkvG8uDd",
  "key25": "4V91bWNPYugbnea1Zet8E9y222iez6yJJiA8kkMqCqR2L5N4VXoANcSXdtbqi8JdRA1S9EmWGuw5NoZdVPVUgnrY",
  "key26": "2GBR6NayRSca6hb8aYi7twfXZcHU1rRbrqhpkhfJCxD9uKXd2WuCh2CbJbNpiPRsuLKgWZQsa9eKGzKk82R3gu9w",
  "key27": "4VB4MB5tyLp7sWP5y5c3u5HxeVi6FU9TfQDUp2McD3U3y3J7VZLTW6FSsqVke1TVohvUKsMQ4gPQq2sFZMcztv9",
  "key28": "Yzoehrxy3Xuezu7PszCcN2cDJuUYHUATnP64uYwoNfpe7ACbUApkC3oYSSTP2Udmy7FraDyeUaiPj59Rx9d5TDU",
  "key29": "4xo1ZGXcBNfmzdg69zKMsLLhWNf4RoPvuCVMh2Me5F2J98fzH4mHn2Frb9GwhVyJmpnq52zqordDRj4DAQ8TgtHu",
  "key30": "5eC7sSW1UATRzkDqRP4qKMESoFVGp6CfSxG1zGKNKVcdhw5uMzGst8HgpPBW5yMnNxwA6kdLw5TozsXXQP1mT157",
  "key31": "2Ug6WqLyjeL588Z7bL4qS7d9YkKLp7FPwvpeoQdmdtkuKE3RfnZdR3PGn1NUDjaVHXCUsLZZSxngYfkRY521BsJ",
  "key32": "4BeC3QUtLXVmhwqPfCow2nuqupfvqVsHDVLSimpibfrDGeJAxGAjPfU5rE719Kwz914Kpa1QTJYVWmRoZzKP3SHP",
  "key33": "45dMi7VtR9cqRDrvtNyG5HWeokZUTaLZbxB8DL23N83DL7oQo8p8m7VDN5MaxdJ1dS4WVUCymfG3TRCh4g3SVwfB",
  "key34": "45K6XmyM3HyLF77EcqUyPg6o7RPF6bzjXuaSUk9KfAaTM4CTFax5gdnG9MGScKRMc2RcuzkLUmLLa3PbF44RNtCW",
  "key35": "5zoXjEtcbHvwtmBZA2RcVuANWFTbHbqqn2MhhJ4MiMo8aYWFWYpmjVp47TbjvGZFJrKN45P6CLpwctX3DtFYRS7Y",
  "key36": "4ooW5pJJUZwpELQzJ4rQfn4EZZCBeYenurWgLpwBovaFDuXARcWeFUQQFGHrL5pLZnXvwXM6gxvmXnKxoMnvg1Fp",
  "key37": "4rJXGTVhbtT5yXBppEMwHNjvzQHoAkZZCK9djquttWZNHi1GVSKko4J2CFvDyqsCMdDW4ry4vXCpSz8oq3sfiiNo",
  "key38": "3puGGhG4dZpfzAc2ZTAaeH5Kci8pdNEScBh98WFC9shSqhcFZpgwbjh1Hom7RaWZeCS7eCmzso6U1WgAJvTmSWFh",
  "key39": "5VMfRWihZCqo4x3kYictb6GmXJrooq2LwPXTcmzeUJ9spdHRMfw84E98MWHkkfwsndEgBnWgJwQxW2sBWACLPNxL",
  "key40": "39xVDMWrCeaV5K99wAmXbn5pF1JxovZ8ymdXwriZyPHFbA75Cg8C6gPPrjmT58mGC4q4bht5ee2GA5MJgE8sgLHS",
  "key41": "2VtdCR1C1F3uYyDRxNJgKYZmgRTm3bcKZcuca3fHUKBGor4RMdtnF12JDqN5BrJBWyD5Je3TMDZTshLs15WKrKr1",
  "key42": "35aDUrYfbQsUjugCbuGYdXpKhHKzXZKGzW9HtUZNkFyiP6m2xtDSSbXk9uH4QUg4fJPAKctX2JqYzyM2mqQNkQdJ",
  "key43": "KVxQVJTG6g9HnztZbbw9Ut5VfHfWyaMU6QJm8d3d1J2nopvduP8kBurrJV91pCTVQW4AQATQXTmDVpNknCEjUD7",
  "key44": "5QEDC3WvJPMH7M2kJP43bEnwLBs3Rj4Z2N5sxbdUrjpp6x8NqjmNwq9PfvFbBzHdgwjz1KtyKs9vw5jS6oRFvyJb",
  "key45": "5yLFWAreuxDLhvNuThmdS1Y1Rp1DzSqkW6g355Z3BcJSKKf9ss5hSJmr5WnzEUagAy49uC9oKZQuhCxRVTehh1af",
  "key46": "Nz8QqacPSLzRw2LtHNYZ6q836uaiQaC2kdEanBQp4W2aknDwoRXbib6STkKsbK89TcjAnD1yDNQRLqnBgxAxT4W",
  "key47": "3ZJeGs6xdQftZNR2WymfBsdNRffZVaZ8g52YpSAckb4oLvzeqTHtVDkZHwmNjhtXAacV4nrXWpwontdGrdFmbTTW"
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
