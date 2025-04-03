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
    "4Yu721GL1WTW6v5zMT8cRv78MSUDtGqrFq1VmtEJtiWYH5yZoTjSJd4B7NCgRWMSqB3Ms2CXBta3ft2KFktfmYSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGC5MzLTeCkavQnrYiKqr2XuejU9G77G8PizS9a3UnWRZdsoYrgzZMfQtiCRYhC5gy6P272FWNuKdDGzdUqXiYM",
  "key1": "S4Q5TYTrwz99iFJGd1T5xrjhgyVMBwz6pW3ZB2qrHcRu4LKsBWzHbwc1E7UFSL92wyFcdjUJidDPK8HkhskaSK6",
  "key2": "rfTQ2ej4AoG727CocEuP8Py5o1m1MnD4EqDh5qmQ3VR8FZzvR5BXEQm9THhRL4f7QDsQLBvTpNUPkCS8BhhPxQV",
  "key3": "4kV6vE6D1UeDKieR6eDbtHhCXvniHpfyjvmNwHXa5xCFGaWUxsvbTX6tVya61TBCqVC3xAQiiz5DNBHCqkHrbFCR",
  "key4": "4sboyrndb5QYnBFt8KFDxKXuT2WDdGWNzZGZmcHh18gtCqUB4jyv9gtYqyx3VWf2N2ABiCHRR6coDGsABZ2fbCWF",
  "key5": "xB2nQiAji32b5wzQiarKQ9U7NEyNR6HxyB9aZv5Lqp1QAnSPVah9j49MPojywDMekGaekW8N27j3useQCBsLhuL",
  "key6": "4svbn1FmkTUf7VfN9ELCzpgw1B5eRvb5itqxbZ13xYfGeM9yJGpH3bfXzATGu2LXtg8uZmq7bkgXUpoTiVeU1Yrp",
  "key7": "Y6r9CG9kmcRja4vejquvyfcvcJjx57NbBHN6AoyffkJeGtuFKjYrF9iofgyUHc4phwVAudguZQSZLwNWMgyH2D4",
  "key8": "4fFVKfeK8ExCr8G4oGwcYjg1DTdDBikiWYnqJ3BFmk5tGfBpjg4Diy5ThuvSKdUYcPuPRiqmJg1ww1Mq3LkEV3AU",
  "key9": "49s2PmbWVRqgxT27EAMZ1m9otdcamB6cjghDGdxMYTX389k93Gt9FKMQsarKnXziWRw2MyCGtWM6HtfGCTCstySd",
  "key10": "5QvuoqJpDsx6H3rAdhCxZWkzZhbgFUBuTUoFP9iVyyUptudnWaQ88kkYY5etATYictMtuxBTxmdKTeeWYYcN7yTs",
  "key11": "3x1uWUNFF19QDBkYyfs5weBEk9N7AN8cCJSTUT84tahRy2Qv32VEMTJvtTqmbr5vFX9mmKABHzkmsdMe6XiSV37R",
  "key12": "4r5wYEVHZaheh8br2mzeiV4M7jFVGK9xqJ4eidPDva9iBpZhBN3EEncP3LWrbmoJGbKYu692nnRgqjdXU5pxfE6c",
  "key13": "2nufJVCPb8XbGWrX6wSEjU1FPKGf2P19N3VySbxBMneH4FKETYKjtVL7hV8UWC53epmiFyMkFCqAz4EvGy1kxCe3",
  "key14": "52nVfwbN6irFqidk5aWTw4Brckaw381TeH9QNwVc8zVmEyknvq48EDCotq2eQT5TRgcdSZGLuNLo1mvuw5APtQPP",
  "key15": "5WcMgmEMj1gFcpSU1oow7KC6hYwhdhuFgL7AsUr4xJ1xvkK8PERSK8eSm9ZbjUDBsac7HcRMsYTz7RVob2gebu1g",
  "key16": "5S7Xj5B1WoxkL3KqhcRRGHmMA1NwwKMaADASgDbg9cPXnMTHxXHT3XXzTnFBFj8MyAUa5VmC7UtEhjnSskco9Bdw",
  "key17": "5iasuS45awSTMg4eM3qVHkHSxUp5TD1nQXwmFELe6aZjgQXYF37Ee6jrhbgrLnRcYmMWi6SXvCkoSykjcZEA9YDd",
  "key18": "3Q3fzByTk9t5RXawCQUbGc7ad7t48NPGHaN9xcjihWPnetGNwAjATc7nq7yrcfmuKCMC3kFCDhvzDx7PcEFhKGru",
  "key19": "4u9HdWHdqhbdTXN9jwytZghudHs2i77UGNPsNrPpzi2Kp29pEneUeC3XtpGHE6x7ZGcwHTdWE8fhynNjwpU7dvhz",
  "key20": "3Ctxhme1qnnm59rTuPkUpoBLyrSLTMWYDanTkEMZVBzu8CyaqsJi1f1QgPrFErbHXQqzAH6j8n49ZsJaVWvFXGtn",
  "key21": "xoQmCRcC3AX94Mintv5DH6hakpK1Yngsfi9xaHgZdqRnLvGJtk6dg9yE12oudHfFk6XjY9SGLmmB5UyR6WJT6Sg",
  "key22": "4kJTMmLEQSVopkhzHUWnP3oc7u6NwJJmNQNGZKxpqoTKLo6pjc5pUsFfWrfitumAzabRcABH7ADM5bxEDaa86mZZ",
  "key23": "3zaVafNX1iitHhZKmvy7RDWyWvpwETGhWxjdK4uNWdKYVgiPeeL5xBZm6Gc3aQHaGPs3v4BAiWmTxeuKntfJQp3J",
  "key24": "3AnHT4kX6rg6n4NL1LeCYUuP1vKbHGgderS9oBrE82TZb3qLjpSnDJRUdSzV2bChgQ1gWU5RyeBAMC6E4zdXmBiQ",
  "key25": "3uC6Za8PfMH9Bgo7Faia7S1nBnRR2cD4jfF1M6UCEGXVbdyMNsWx4tsRK5Nwq3Moez8kXcT4Ebcch215tS5bQtBz",
  "key26": "5LKDdTw2oGZcqropptnFzYibYLGCgAkmLVk6jVycjRtWawtduKMwqVH2SXePHwXZqHEtKuJe3CpGrWJcnVKYJJfN",
  "key27": "g9YHgZEfuR9JbSxu6eVBM546j4GmbEFhzivwzngJJqRgPFVgG3pggS3xFHmmb8vr6J6uhR3YKBkMejKPjAUcGPf",
  "key28": "3CCif9cFfaKK6zoDQbvDhDm94NfUKtHYPkVMGtZiHvxdyuNTqq1hQKvx733su16fyDDwNPDaBqUL3DkhzWuhJVkz",
  "key29": "4XFG41XgXADsesH3TWR8aPbTzx5QZB2aN2Gna1qkomFaYFrXbaRmUjJJ8KH7sAqp2RAX87aEg7JDsBspfSH95SoN",
  "key30": "61BVum7iGbxNKb23MvAX4ahnAkCyXNXVo3gyPvn37Aaxrido2V2mHw42ZbuZPWJxRBVjrmHBWQattoGDWjbQJuEp",
  "key31": "4rbMizhMgpCGRLh2mQniUNBQWJvzuYhwSFVgKDeWFXUc4cgSFVrTTaupQrRxQ7KbdGQV2VGpgQSXqd6sjoZdD5eK",
  "key32": "BnebHknUbzCgessi2dohQgtN4GpoejGF2wF4zzohgXBHRknWiRug4P1uuLeeDGrfzWFGWTGhgce8zt8ou4SxNrk",
  "key33": "49nWCknaf2NpV5H1GKdmULxCs52K4u3M9MFF8e1KNrc9aoU5VccEzCt79AW1c9Ty6PzeKGQauMYJcTM6AW2jpe79",
  "key34": "4papHUTyHCgho3QVegSWA5VnMAobYsE2hhjcBXCAdFDTmoRCemszBLnbsc2zjtPFknFnW4jKztDsbSvh67qWp8qx",
  "key35": "3Cxkm9KBw2fFskCXwpvvYpFHxtDGSASbMjuKpZH9TGq6K8Jyk5gMfSiMgLHsuuVSsp1vKShGYnw51vVfjrqwDGFi",
  "key36": "4joGD5eKb62nwhb4Sf1zoaXS95ShH6Q5ihkFi1rHuRsq959FAecghdzniWiP8fUh51L1H8kSNg4Gp55Ymn6KFCA3",
  "key37": "FUR7L1qgGx9bPeb5p1ejnzZEaCeJq1ev2sWSQoZGc6puF6rCxKdZA19KExCCF3tgGi7QadH1xL6xBpDi522xWhY",
  "key38": "5GvfwFshhknxZWgbVP2s8fGrTsgvAC6guJNhMJyCDWWEW2oJNkfkRQSnEQ1HydHmrm6LrXC1vGgvwJXVSrzFpSHk",
  "key39": "3wX16BQsrjEVu8sdzHnapV4RJSRhpg3gb1XRjgazvF7vzteXxTGCAfJEM8HBUVKQ9Tu2xBixYs9HGhxkZrsoXL6e",
  "key40": "38DCididzNXjALF1XHpoTDD2gfy9fAfPEmhF4mDp93ruxrjDa1HR5HyDcvQBRzwwF4GUqHoLLH5puF1tR3fUcqwa",
  "key41": "3Ee8yir4KsEHS8qKTxaQgD4xpfhmfEZDtytm58ibA2Hxt3RNbPkU8p6vvuejhmjMsJohuazyACE6CWYnVae2Umvu",
  "key42": "3RpX5NcqECjNWLZ1zqTNHwXinYp4HdfpPpnR3LLL8U7DyuHTZRgce6zAULS4GbCnzPsRrXdmUFyQzhjEt842FW2B",
  "key43": "4smpeVcnxaBhKcPwA8cZrmgmbW7wtwGqXhKfcEVe5fEUHjHb9BmGrZcS1u3pDBXKgNNdCU6PfisFcnLRyYvA7hHY"
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
