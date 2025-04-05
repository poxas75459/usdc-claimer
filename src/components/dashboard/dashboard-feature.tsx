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
    "3utBeG7quNAq4H75Z6MVBmyUjfMY6aVZrveohmQoaWSvHY6kzjzLAj97itLeFYUa9nEFVwQrDrWUAqv2D58YAxQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TFncfGStkELkZswStD5jCjATMXbKXVdv59xrCTPQzRSVmrXv1r6soW1VKqNQj2LyqP28avPMsqs9DVLUjdRR2FE",
  "key1": "5Z4T2nV1tzXPP5h32dgxPMwaqZ5JnJERhqPZhRwR2mwuBr4mAyLvNtWgLVign7qEK6nXY8seLR5L2BbEUPtCw2kE",
  "key2": "vwzHKRaK6MqRQrjQWiqFcdmuQDzgoqFDjrENTi2CbF6nkpokrsPE3QeqpZXhvfDgmVxUHPtQt3QVtQMjK8m8qux",
  "key3": "3Duj2w5Qji7PiDfhwsr3P6dMejAbMiR4R9fDNgDuVGbJ1n3j6RMasULdNQ3Cy3zXwpMaDUwpX6UHvg1Fk1g3PKxy",
  "key4": "4M4AhrZXAfc4hpCgGdvdXx7sMD7miHobdx9Vdn2y9DJ2qX1aHq9Yp5BGK61WBGvJ5qoHgxgVr6brK3cXJRXg777n",
  "key5": "56WVWNLbQwEawjdJuhmgnv4s7ixnfrfrYCo5eY5GYuf9S6DtTgRPTwTTbCoDhTXurkpigpuTcaVbXswHK2Pcwp9g",
  "key6": "S4wgHbc29DZEqz4PsjzqtpssBBZU8SLx2UwP8Mm7TSsRG29R83MKfU4peP1QHVp9pkoULSN7PbTyYsJve6iZcs3",
  "key7": "46zZUyHHfG6FmWZzjxS1eT67AFy67D9LtABCKXfvQGtZZFWqXejV4TPLxQZxKUGHNWUUtKjtf1Rx777vEAY2FAKK",
  "key8": "3FdAUGqqweQzRhm4p5fTpYSTBKKutDTBgo8zYXvoHDjLv2pyPsduQbUtEAPSkCkRr1T1cT1BKK3fToepAQawcrCM",
  "key9": "BqV3i6JjA5cdNRvmY9D1B3iAYbWKfPEFySFsjMkjqEeHaoH7BXD8fy2BDzsFsVBHzD9ohqYZ5PHExqDYoXTvQAC",
  "key10": "3Y3jThdz2F1DDvGkaAz2yQsjFczjn196A4unB9iP7beN1EM9KJRo33bB9UNqyheYYQDvRHHJUe2ViY6xg74YYnC1",
  "key11": "4iuNutMfirHUwXZ8GwsvXqRq4DZiH3XaaBDYXrui2h2Hhfiubhv5qirdQoeoT3227R6ShgvgeiBq9ExJnn9j4w8P",
  "key12": "yfB6oQdMG56rcC8FL3rMMDTUApARcW8WoxyArir6w2P1xgbrMGu8sWbXSXSScp8JyH39WBYJYHnmwevm7uWqPw7",
  "key13": "64WcF3Md7bCXp5xkL2m6Yy2LTJyF46MjXPkP3mwq8Uhzim1aP3LYgxsydaGV3AAXe82bzvZZRjuhbv1vK26qupH5",
  "key14": "5jViA2NvrC1KXkiLTNx73ubWWqxBSkc9XnisMTZuXDChtoAZNPF1P3aqL6ERGGYS2JSEv3pNbKGeQAkiu9HCZpNy",
  "key15": "4osdK42nC6edMqFgH13NPtukJdxBDHnVGWKpZdfSgysaZTyr2GH3b1TCSf1Lzb4PtUp3WVgYxZDYR2XDiqvQ4XgZ",
  "key16": "8YR9uwpjhnNxfS4kCLDXjTHTLHLj2bB57KpP8L1KqJBE6W9WqegMtYoK8oGAU6ajQ6s2PXZZwcvMEiCudWMbn6b",
  "key17": "52QQyeDVae4Q9AyrSTMwooizngynN3oPK9kVDGe7Bd5Kado3zR5Lfxf1AH8zQoqAgBVuP46enK1axadaxKT7X9pn",
  "key18": "343TdWJX6454T1sJNMgLU4idWx7c34kszjbdMty2UACBYEqP8LuAaDWoYbdHgGG8wLafLWDUJqqAoAByantVvrEu",
  "key19": "eGoq9YeY8sD5jvVkjkGEABCFNjTuQ5H1cAtMVUsCrgEZDeW3JsJhVfWRJZL2p9Ksma2bnAne4QyF9h43uRoZxMn",
  "key20": "4bXtDcCJraPivqqSFTq6eDQgFtxyvBk2qQVj151hEwt9QuNfVUgqTZ8cECEMAWceWAeRX8LMcGG6Mnde1kiu7J4y",
  "key21": "4L3bLezpYxtUyjDMojPh7dQbSR2tDtbHibXLGG4885Z1oxt24ZNf17YZHcHNEZSXqgE3Lxcem1x7EmkwEUaAEwwD",
  "key22": "2xwnaZ9GsWm5DHvdhugamZ2dzbfiJjjyWoLwoVPYDCXuUiYgFuohfPWDx2h9D7LQvWV836ynpCjuHuaQ7ri8e4rp",
  "key23": "2a9yv3Au7vMuxbKZtbGuw78SLteUzzBd3rRK548JDD2ERZyQRT8N4befUrdW1JvzAEgNgtDhj6JBqhn3r73wu7Fn",
  "key24": "4XTbKrU2WThCaLG8oXjdCoYV7gYSc6rbapgLeXAS5jicEFsWbPn1S3riWXqiqHuJ4c84HvCMarYy99z9bJmTxiXv",
  "key25": "5tCsCYKKDGmPD4SBBAEfRUUbwo1Az5BurRV8aX17bt1Z78rLvSNYRi9rpc7mGnCEfN88Nce8Pp5WE39ph1MstH28",
  "key26": "2Sd1cy7o86ryc4v658F9ThZ9WvsuoUJ1efd8LdTxnkvRoHCXuP7fGqsAbGyrzmfeWPz7EPbrDHrwB3pKYuViMLJN",
  "key27": "44YknTrd8iM72NEg7EtbnWAbZwaTdwFzCb2MWxhVtujvKu1fVGoLKhvK3s7voDqaGkAg2Nw2gQq2R3BSWmXddjA4",
  "key28": "3eJGNb49xkeUMY6GTaVjADRhdvFfBTfcC4ccXjwsDPWbpZoMrkUtLhQF2RWF3B4qyEDQKSSExx4i1Rej8vyg9cx6",
  "key29": "mLZ9rHYAKpEimvTJZLuzGjnBLogGzM4ZpZNt14ohWvRH8iAWUADDZe63s2pEWaTco47rsHGjjyK5xZ1PEy7ibmv",
  "key30": "2Y9EJB6CCg3v2VxZLawHyMZhBSYSCgpuYrFcmLHiy5L72bSzhLtPckMmWGi9w8sN12e3dZeF3iSLFctSTfH7cWt2",
  "key31": "5Yqv9BV2H17D3XAAqMEMdtZrVi9DYVjLBuo4XMPybYEQTUZDDiwnyhi1zhiCTdefCLWgR46fXfy1Yzz9QiyghncL",
  "key32": "5trLdu4dTdiie28zz2QeY48LCMRNqtmMme1fMnvjdZZy7vpwfoBuqXCjxUxhpovYuqRLjUZ7cxchouzeEoNSMuAB",
  "key33": "2pv1ffX6meW9DikpuvxA99yE4xDePi6WPU85WW34hzv85SoxF7eatonUn3XgMM8tcXcQQUxskhNiPCbGG2WmS1Ef",
  "key34": "5xWeKB2cXPvTtjRpHnZVXqsg4BajQmRD3KfEYELEepQBrKpAWzs8nxRXHeUnZBVtRnWLyTRk9JGiQW43Lw6aVafE",
  "key35": "64dh6LdkrKDpMpRLrGpL5QFgN5VsknEUtvYBAbbcR15D5zNP2z7nJznWq5ZVWPyvGeZfvXrV1Kb1Jz9wBVP6SiaF",
  "key36": "raTWsQLSWMGJtDpsAkANKTQYgCAC1DP8qzM8pVNCqTmgrR5CCSC1yTMFLodf7Uan9vSXxZgcYy4FQtDdU9W8rrA",
  "key37": "3gMAda8DUsKRVC9QfQPXy4ZDgYv6AUKa56sZqTkHFWE8mMQJA36FPY3dpY2fPhBAtVBi1ZZuCr489BraNJLeJsok",
  "key38": "dZABWGVwNYtvUv8sNxhHSgdXFJHVijLZXcuvzLYLYt5V3HphAZZ1rzT16pMJJkNB9H2mrEASc5pNzXHvYSs5bFc",
  "key39": "5JmNgw7Zn6VF4beQaz1WqU61zhBBAGNxAB1Ax4PEA4kGuyycLraeDDXNnxSa7Xu7cJA3DFsHDDx6taL9kf44MhDS",
  "key40": "3poiTUoyVVNf5nMV1pX8U8FDEwYyk6FJ44WFd5eErCNtTTqmJ2PYCjQGyWPParFuk3yHDbCK7ofaLbPPPPs4iYyt",
  "key41": "7Rw9kK8AgMtRDfMonbhhQ6xq8BLfjAPxSzkxVucHnK7jS6KVNXyDB4eQDBKcDUgjANS5WHY7hfbQHi6rM4AL6tP",
  "key42": "5CLMNALBhdrve38Pn1w4jjRdhtWj47Kfx7iuxFLXBwC5B2KjQrGfpYocGkRr4RJGJvSJQ4bsAhNUnAehb5omL9AF",
  "key43": "4JVzxRMfzPBLoczuKy3Ng52fCg9udjSFQPnn2QetVKZ924QvSn12g6Gr2ajeWPwyh4RgCdAVepNEkArBJ3QXiiRn",
  "key44": "66mTXtcgdMcMWA7mkmW1mu1tHo58pezR8egZxiK8tmHhmNiihxCDqzq8mt9k9YVH873dSeKsathNcW9T2Z7A1pEB",
  "key45": "2r7td5zEeMrv7qvmKfT477wQSYW8QzBejrBMRqKUSTfmbWMXLBgzsmiMhcibEFx85c7yMPpH8ZbWgFdoE6rukj35",
  "key46": "3uweyRS9bhMeoA4HptiHcijS9ow8r68eYQaMsY3ynYon13vFBdYRzuAMDmndZzVNiGhrcwRCmugNUa3dAvNAnu2g",
  "key47": "3ZKYV1RhGbPiTveMmVwRM4Nup66NtTjFtus4fu9tnnEuai6i3QAGfTDn9HBYvsyUyrDJMDGshX2Yo7yVELBR7Uf5"
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
