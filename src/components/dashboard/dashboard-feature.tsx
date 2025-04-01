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
    "C5zyApswLi4bMcg2J2aKuJGiLbE3ekvTewoDXUN8SVEzKSXovTsQjmGPHEp2QNorrqns7SqDpwdgmiGQCaXfxJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCyAGP9ZtDw2yvDuZbhCXrzJKsnY6BBKXFW6ybr3XFazHG9LcK8jBpsN3mngSsPEPzcbXxFrXCDupsDKqAgdGk4",
  "key1": "3buM26g6wK5XqFkAowWBq7CAmvGbS9fDjeZ7Sc8EwEGTrqjETtaHoHdBYfGaPxLFGrdfWqQ4yzPFRTBiBSYmEwsh",
  "key2": "2ABSa5wPVrueFF33kubQb63YRFrDaY5Y9fXxX4pC4KgQWfhuxGJ7cKqFEGhguCtpQ18DavoXmnEgV1tm6FR8R8Ft",
  "key3": "4uHgSDnotWRM4Q74JMB951WaWS7YpuxHyWHqn6fqyeFuprVV9GYosUSp9f9izGmv8SGdSYS8JfmPZMdPgAVdTEYe",
  "key4": "3Q5z6vXDc51PJtZJGDK2F6xWZTrtt8AkaM9QR1MhZYt7rYXcT3F89gApfaZedVJSMyBycenxxpMYN7ZVEe5FoFe9",
  "key5": "2KNE8ACm7QgPpWffF76ezf3nEgPrSGukxqHXt4B2LZa6dsqC3yTBHvjsaVQahLzA2Fg83BTug428BtQLBbjPHHZz",
  "key6": "26mBwr7PdTSmAGRwFmLs2Q9gHNsyvxSfgcHGaXPb2qKK976hZ1gRH3rJTNvydrtttZuvvhcjC9eaoq2eBtgjkLYo",
  "key7": "3n9PcZ9ZVkQtZGkvJfQMYhpzaSw4Ki9fV1JThyLAmvkqoKkFsBQtixS3SkLfaaJ3m1YqF1j2u6HuAiLuD8Lq8eHb",
  "key8": "GwCVYcGvhDAXow5SwiwgSbbtEFojKt694CFMbHhdYsJUENVgoTWcaEV1DdWmFCCHpsHafgMuTnoFpuYfbbxuYZL",
  "key9": "2XJ6p9eJUPyX2ThxsCja2TNtW2xEwkBaeYKq7euHJx5xZPeq8kSqSW2ZeqCoJD6cTeSByufBVaFrGfn1u2yfg2C6",
  "key10": "5uTod4DU2GhRSfUcptfsY3U83vR2ZJaG1UA974v1Zz1DLkZMq3aGdhc5TChf9MiiJRiVXXqBWjKSK4yn86ZnJ6Aq",
  "key11": "3MU7Pxij6S3JDiaoSYy9CyiZcf6Gq3x8PgajSDdN7bQoBktix3KK5TXbUzZw6C3H3A78WeMEjbevYdobzAMUHPRn",
  "key12": "3MWKA8HVktF4b6mPuUAt2KW1bgN9mkji5xPDBTnUorjFC2JwsUodY8MukFFXFw9QiUEXnMzmMEELty6qJ4pfh5DF",
  "key13": "5jGRYxVXBRxCd2QdgHFx9okGLzYPLmcdMRjpzPM61gGcWcBJpZGFC99TasixzXsfhfq1uAhhFyhiZDDa32D4K2G6",
  "key14": "5VTJ8Q3GSjuAHB9x2oFBFDeTqattAxRQU1jF8xkVL1AmPzqWoZnKZA8amLMuUgs8FnguQwQTXJoNj5qQMkbWXcuT",
  "key15": "2WY6TQE4peoimTN2cVnxLG7XVBvFdqGZYAowHwmdsxyVkLMfWC9vBan4L8u2RAdbbhSViXM1ePyGX2djQwkmc366",
  "key16": "5W2F4rowzmtEjdQeMrsMD6sxRRrZYhPD5ve1sPg9ifdiLVudanizrYsaHQHLtHyARBTMsUikbqW2ENMxAVxqV7SZ",
  "key17": "2xgFhUA9bdeaK76Wjnis7u1mfA8ktRRGDhdYaHTf6najiWBhxMLGSq4U3jmNjP1XfuqPQYyWcj2sCUjPcjMjWcJV",
  "key18": "5dD88LG4StFkTSAiMQq4wXQevLe8JRU1MUzKJ6x1EBBZRE2ADRrR1Km2QU7rTcGDfkjbQJfQHi7UkutNpecgk4Rw",
  "key19": "5whAaxMnfvrRL3cAq7fcVw37DjQ9FTQxg51NoLq6b8dnXaXrCqk3wwMuFRhV7yJB9iKWyQGaDJmoXYp7Hgxua8EP",
  "key20": "2jbnEuf8iTsnpeJuCF2oLq7smuNBNi5XhTLNRguMMmitYUdHkaPPbg3imtWLKRwwij5cYPCL1n51weeT9bQAYH9M",
  "key21": "Ep3rPCJYp6rXQr164jzjeyZx78uBCpHKVWbsWGtYLwA4wTgey84jf3aG4SwM6C3vtF5UV1s39yKGR2BfDu1K6uH",
  "key22": "CNjqtYfCcvtG3RkaVoHyYDiqGsb5omJ3LVT13VqafeeYKeAqd1N8rekFRF2hp5SB1jKNCYybiNncWBUXZ3bmBAw",
  "key23": "3LQMBwv7TwUbiJ5nKuLphNcqzBjRguSHaPLakDtgCh1kYZNwM3MzzcnqaYebmUnKN9npvnVJKETHeVw42Gr2hVUe",
  "key24": "3EgCJYk1fDaC6oocXCRtUQ6F6RKFN1HPsvhNrmNowGEsv9sPjEeSq3stDWYLW3XJf7Gc3u4bDAPFL3MEXZyD2cTE",
  "key25": "PyHwy9YPMyF942fZU8ERd4vg3wd68qbeMmuBBbGqddGfsX5D2HWaz7mFmeet4ziNqqLDA7C7CfVMJrKkkxz9K89",
  "key26": "2Mq5jAkTV4zgqPeBaF7Yjaf8RmhRPTDjLMR9DjHJ3PCYevqPFdQY52FPa5ZdKVyF5RwpGSwZL1Wqrt3be4fsCLK7",
  "key27": "2G72AxDvoDpH6uHUmJA9kmcGiHf1Tg1cHV9yC2Gk4hMDUxb92nsSy1QNwhj91tfxpBrFmY7w1bh1wVm9HmyVPtfZ",
  "key28": "3i6jjoqXjLyXwS4Xqw2tTswi6FqLkptLkG2c4QEwxfm6bjs2kSH1A8kqkU9DvDCEGjJhM4LFPddh27wVoHB2HHua",
  "key29": "61yDrqjubG9oTe6PxAsHkrobdGduyor6XVKqXycPYuiSgkE8kTckMQcCVV6kBHExmKpUcRvwTjkozAjrrG3iptfC",
  "key30": "5zMGuKNa2GAFHqZ7E2VGRmEbRev1S4uqwGLqA6jBXqc56rzWRhmebywBPzRE44UzwnP1Q4DEAtCAu8TizbFvSDuB",
  "key31": "5v9KWXtC1boMpezDanLXqhZ3uDwBAFVLPEnynqvqBCaHtuVV1kgpwf9TNajywoeb9juPSYDsqUKumpRrMMmVcJfA",
  "key32": "5jo5hKehKL4nxLspgUgB6AkJXU8kPQau9r3BCc6fJ4ZCXdkBqWqZ7rxPqc3sWLK4cFPacRRgGNWUcYq52jubL1QN",
  "key33": "5ynzWYdLE3xb5t4dYhvKcM4atnC9FyEf9h9TYqjAXUByZYirgWBFLXzxZRxStfu97YGuNtPg9X6G41bh3nKDZGrN",
  "key34": "wGF2f9NhMJZtgeeGRqTfp3Mu95PeYauRktXKUfmZyTyexDSs3PCeCJ1tozjAbMPVY8BKj1DmMLe59Qv7U5qusBT",
  "key35": "66NVeeVHsrbeArS84Lv3PuFabWxr83gc3LrUAacL76ASVmiMdS4Xv6FxgNnwVHAc2C9fUpFVh7p14KAzsfu7MqDb",
  "key36": "4qb5NCLjDeK6F7TBnbRnsGWM1XN26FWWVCS4AHbnmsfEbFTDhpE5rcXLJDjYCYvDsMETeh6bKXUxZ7GqqEvkSoZf",
  "key37": "27eN16T1vRNkhbmaoYKtKugnMwWSvN4Cxniaia9cfnceYBtbdtFWsm6HtK5UqZJeEuUEuNFNFki5cqVhPua1DwVn",
  "key38": "y56Ju2Qxuh28sTpvKcD66TLhkfd7HFv1Q2wzoFuWBNcPgHeKwQ3KB3zz5ijLCq6Wjte4GZivadTEvQ3WgkVzo15",
  "key39": "Khq8Ri1UADGhDdVX7eVvYuSBZhRmp53HTowbe4t1H6MacdgobWpMUsr2uS9Mqg7oFuX7Dhf3bLyRDQZAoeZNLcx",
  "key40": "3YrzKGLxFPPXp7Pfg3ei2ENKfwS5fyxxwgazKJJHHz3SEziWA3dnc2N8BK8PtBh8NZt3aQGP9nh4MTXhRrjMEjQZ",
  "key41": "5A1yGQsXRD5AV9vZc8FM7EkZssCvrB9dSLW4F3wumi6zBWVFaNRMPy1HiQVBwxdveSxmBPXxMtEBbvd2fUDkDDKf",
  "key42": "5ifcNgNZMao2zJSxHUYQjKvFo4715gcnbEqkF9cvN95LcLZeEd2tm1WLgeqm6hRQAtDqRHp7vewTzHEsKQXbzBAE",
  "key43": "SaPmVcQpL2zeNjDTaT5QqP75Fksdnh9A3KHwypQTnAiLvH6rYSRpBXppZzmEHwGo92kQvEnYSSJsbHSxEnJaXtN",
  "key44": "5UvUijH1GixtiaDNMGp1SrBdetEfiNDAJKeZG118KA78AtmJK3Lz1VJtjujBbtwDPj8bGZYS4CEh8UUh7J4w96kL",
  "key45": "3dXXkRdqjHqSPyGoo77LPjH91KMRPU2vQb5s8YGqgvZ9yNhZrmeW6NikLoxniEwPsgJc6uFFTzs5uqAM1TNNZok2",
  "key46": "4TX5diCDHvHTcEJoo34vVmfurnqbY2L53BbjkiAzoYxuyJanrKGftMZCaTqoHVVb25pqyULTXoWYJUMP38Ek4GQd",
  "key47": "2Mg2ZjxVS36MtqumTDLKd7qJt95YyJZcrBAYJY6EUGB1Z68DrdBZvr7w789Lg9kqvjQuFhJZryeShv7SUqvrwJS5",
  "key48": "2j7dqdzao7j1TMTejgKWBvDpE3GXPkFucGRCHz6iDCrVgqsXuQfVv1c4qQwQFcBPXSoXtD1Wbu6wdC7kRtBZTvnj"
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
