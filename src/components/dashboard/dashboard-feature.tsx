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
    "2dNGriYo2BrnMXYZ4UK8esfaAPrfAGLKfPj6zj96caSbXhAEH6ASKoRrcaKoNp8ySipYGXB1XdUacwRd74A16SfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oshdcYBtugf6Nm5YPZnkoNhBNwsT2MkTbsV5dyraqpowZ4CzPhXZKc23NLu91XcFS2yBDpamTBgVpkCourojNX5",
  "key1": "cHosYAHsNf1TuSb68NpoT5Hnq5q45bktRzw7FkgKrxNC5uLyYwwU4ukFpXy9VjcN2TUUz6hMu982vxVj8cB6Fdt",
  "key2": "4bujnSnQBzt5wnTDZAuJcD9sUpLVKqkwp7nLi7i3Y9eeFeYAVgRZgXVp4qmvwRzhGJS3KeagqYWy19kF7fwe9AFi",
  "key3": "3EWpDbxGFqYB6ySceYXQTWDBuiug9zzoEywuBS8iuEZn6ujbMKJ215NjbqpPmSYgFDWvnsaBNrpPMAyftY38ZbJv",
  "key4": "65NBNjcSnvXUZj13tjPdefyRGGLewTpzzmBHQxHwXyxuGPBrriLykndQVCgSghfyhqLZcXawe9U7w7pLSroAGvSb",
  "key5": "RACaBmTLNpEBeAv5UVqD45u5foPMDLJrATQYMqGJhyezUW5Vtnyei8XZr3neEZKxEu3SZYUpg1bTy4x1FCzrxM1",
  "key6": "hVqWPwyQ2gsXpZ3LgCVFCUcyXFTJdmDGtYZq8KurnbZerp8pRR1GcU2DS19grq1AT3Ya7UqgbMerGFBuFKcVB1n",
  "key7": "5iAqHKxMLqdCRXUPwqxMD3vHSRcsy9UXqNiazacW6hn3nP2KPUzE6Q4hNfuW821Mu5uLFRh3X2jShzXnZ7CTZ9jz",
  "key8": "3JpMokZfu4N2G5yXf9jjqMBNKV58UdmHUHt2q1E493LSWhLNZHcHGGaXqXYkDDbDmhoi7VocW8Y75xFZtJ5oM6Bd",
  "key9": "5Won4h2SPVsPVYTgXeMpZ6VbGoWZjLb5Tnwk8eyucBPq4vmcS6Usz6Q78wQjW6cX79EWb2JmHtV6amL8V4H3nHy2",
  "key10": "wbwmbQ5zx9SBguikLuwjfLNzPGcnjV3ucv9fUtuuePaeAaF3MEPbNiVsNv1U4UujPLnXRJ8DpES2khG2NhphBpE",
  "key11": "Tq9Vfhp2bGHJUJUwxGKMm5tLcGCvyEhHARctoNjXbmPyt3GM3Y183uGz5E6vvjrkY75QEv7JLfjkmz6JVXVnjx9",
  "key12": "3uwyPtr8dnAFtJRNYjPJtBis7FsFZgeMEjDC79cUp3xvVK7SHjzEBRoXj9xm2Xi1yjvrpREfj2nsmyjyBYiAQZ2u",
  "key13": "3uCfGBchF1sT7enrmHi4FfzHaR7Q4pWwswgPuBo4NjDVk5tqEMZeDfsB8JvDhy6joxkr5dDkK67bXiVunZxuhhVu",
  "key14": "3towsNrDK2GRewcikv1MwrbAd8LNdGfAnmBka1DUcyVBnFPFASrmbEYoNLm9kbueYCP7eokBYrAtKaJ2zFzfCDD1",
  "key15": "2Jme5EhH3RANA9nMLFEKzHF2Ar15RLbAJB6mEiBvhfSe4XPo9YoUp6DP89XHonVKzR7rzh49cxg3ZDAhZPPUzv9B",
  "key16": "4phq5dA8Kq2cxw1jJ7qeVepJccTE4FY6vzLjRV7zJJv7yv6GWf2jBqvoFiRRzhBMFosF6MWUbVdvrD4tbCFi6L3t",
  "key17": "kJwxeR11rUg4y8HUm4xYLPxTGJEmVC5CwDKTx2vnKYMEUSk246bx2wr89MiYi2ZxLeKpxSWshH3zS4ceVpDnjsv",
  "key18": "2HN4rjnHu7jsmcWjAU5uEiziN2NHYg83VS6oAPcAj1C3yhdFvo7Q5c5vPknH8wqnrE6p6ZG3fG8NQ1c9RYK5r3zh",
  "key19": "2rFQSx2j7m7Y8FbqUUjAgKjJ7vVSmQka6tWsEkhoPWRUXbNgTzB3mV59PK4zDjD9oWrXHyqBNpwjTbpRC6KR8jd2",
  "key20": "5RhttkzLAXC1GKLBCPGDybzdWqdQ5dmvZJ4UzSX4MyiLuLck9zAwG49tXiWMFpssULUAYaNUeiP78bJTQ3WBE2T6",
  "key21": "3mCs4N71Aie8726Ukd4pgsbx33Fo7npNr5nC93SH45uKKTxRhMsQsdrDUqGoffQmeRgs8tbKuRWMUfMA2RRn3X8c",
  "key22": "rs6LEgqnpWb19HdeAgEwuGEAUpX7TAyTps1Jizirj29NY59eKgUQrbpwEWxPTgg5Qj6iG6ZFuQBaGmoLeRJ6zp2",
  "key23": "2srT24zDmYrWTEoTcLEaswa1nXvnTuCWC7L9LhxArQprV2VpUScTAxTUdKH7RDsHwb9LtkFKYqzAhSGjR7ZCgUtt",
  "key24": "2jjyHZ9eEfbg2eE7vuSHB6gNr3ECoG3ug9MtxSvm5jpXP2Hr7Wg5mpJqZsrCs7HZvQmA6QVU2x1S4Up8jqi3XNq6",
  "key25": "2rwZMvLqvMQ4BCJugThmKDvkomapYv6r3uivXkqeCUHaWjtRjfrzQfDuxsMM1Dc9p4YfPMaMaWV9WXSGFQjQXkyb",
  "key26": "4APPoqAdifKh4pMayzfC4ZjHxW2D1jA2nGuxgn3PzyZzz5p1ECPMKG4otWvV2rd4G8woXhCwV6N4T1adCX1e4BUb",
  "key27": "ATdoG3fxE7zzMD2fz3dzaPDNu7ApVBrAEyTAQUtMJUkWY5kwDMNDQCUgK9LtuUKgT4q6NiutomqS1NyjnPfAHYZ",
  "key28": "5tt1zuV7aLPyvgGdntMxBbCYQ85hNbCcV563xB7g56Cg6SCbhmD8smArQn6kDnRbWVYSen8PGeUmTtPJFFSfLcP1"
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
