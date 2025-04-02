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
    "3E9258sGCGXAXfgBkLjeQRGf5AXtyVVxfy1W9WHQDqNiCqaFXK9Lpq9MMHutm3TzwY6jkKFySh9BYRDhmKkMMP43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGkJPvrC8Rf1hoGUw6SrnyzaYBcz6pizTxZmfqEoZfaYpMv61MJeAbc9sJ7Lu7BUegmTwzKhyQvSwJ2se9XnCss",
  "key1": "icHQ6KS8XmR4fb9kqBAaQnKN9scYWQ5CoHPUcXEMCFjyxjcKhfWzphPFG8xWfkn9BWiTg8YZkvQdsJDFBNJfwyt",
  "key2": "2tYMK3RCyNmEwuusxGNTHrFafEWzmRX5QdYAfk4vnqm3VAhiZUiA9SGpu6H5wpXcEHMoTCtL3vvAUKZVcv22vyX",
  "key3": "u8XqYMp3tFjKak1CR2jMfhr8pLzkcWpGB4g6NZhnxisT8otbXAzFSRHgcrSEhMCKxduJ2DQYNn29ixcXHHk1yBn",
  "key4": "CTMHjHfxqiczeejbW6X9DqDxCAGYHAKvChkZYiwpej7wRnGvQDjQ8D47r4aPvWC94FH2DVTpdBZpQPsqvADm3kN",
  "key5": "4tYp45r7WEipBcJ9rVnF1qhbfoQdmp4ztmbrhgvD1oSqw9AcNNB5bwiDY1ca8624Vcxx5XHvUMs8u4G5KP5Y1Hra",
  "key6": "4Kc3iPCgcdyHqcaKZtktcZPnJcvdHLunDkaXw7JFgxngUbpv6AzdyEsmC86tKGtocm7sF1M9wMuxrqb8cU4LyDuf",
  "key7": "UwJFiwGATmYpo1KGNbaKW9xiqHQKr9qyLhc1b7uWgNFDAr85q45ue94QMHMgBTtTUNiA9ytM8zuWTpiuY8MgeMz",
  "key8": "5P2uEpnpMzAQJdaE464CKjAeJVeCKuwtykS1VbFW8H7yZZioNvPjZcbXkLFGU6W6SXJq1paAkpBFWxJVFrhHopt1",
  "key9": "2hxEriv9VTGokGCedt6r9nJqHcmvtfbYrApyf7y1mP5aKEmwLofh831jSS6LbsPYDN35AAxoG1wPt7PFiKq4FBbt",
  "key10": "3vwcLiAwXj5PNv71x6EPpS6QGQqVPFSeRc8p8jGmnjufxq1KCvetUxGUubrd35TeRYb3RRiCwCcw4zxA5HEjkwnx",
  "key11": "3QTfSsdZcFTbo3q9qbroeJu7AjLrHYM1qd2gwoZrrWop8GRfU9HpDnf9gru1kQsU68igUZ6ZDNqPd9TtCV44QCKD",
  "key12": "25z6Y2vH8S81jXwKXhktEj5kWY5jGZjB1cniTapdqG3EYSGzoHmffpm8D2QbJk88BJ87mzDWmApyE335bPa6k63d",
  "key13": "4sZyBqZn3ZZ2yvwNWmPxtJ7pZK4CBdmTtq2V3sJTT9Njf77hCz67x341UEqXwMfTXYUPHxuEr9r74QsG4NFwyDhm",
  "key14": "5gkixFJYNJY9LkXNvabZAVnJdkfTVQ5zmMfT7wxb3PtLtYyyeLceMqxzfwLxUuYA6oz1yzS6aivcaD9y9DiPT5He",
  "key15": "49mg1AysXtkshRp86X9BAVpwWTQzpQ5K86BJUwtnvtn8xpsBPKRy9nHWRJdkybuEPajFh4t3VFZua1zoDasr3spm",
  "key16": "3LSkYvcpDdoBWiyGukKNiQGfhJJdsLyRHsapBYPh361xPG6yPN455Yhc9iHwf4pYGx9vY8dzweKkHmt27nNNQExM",
  "key17": "2Ceuwk4iuaHh1WoaGTd9Ha1YafzywpWgCFzFnV6iJgzYFVJafG5KYiVTZgskY196hXPriTbpYkGNSReNPiEAk2Xi",
  "key18": "3cDXVYCRaTJHU5cWTGPgA1UNAcW4jS3KR6JyGi7U8E3wS9tQGDSzQSH4QYAMEkJnD2p5kEwNQDJ47vHWoEAcmDTd",
  "key19": "5eRg6AEgGSAUvPMesNUNiLs8tuXCiUZse32WRind8G3Ct1BriENgZWXGdFWXH1LRTryLdH1Jbqrn2HyniQLzyN6y",
  "key20": "LTZUeWPV65x8gumUnRhfhsgXnieEaLxRDWfnzjckdDKbuLD5pZWz7VMsAdwqByUT5kfuzx9dPb1UpPygMGUJhRi",
  "key21": "5bYwU2MtyXW1WMjtEAoYkPNDPMmZjMwyor8w7dQ3rPWvBWcp1gLvvEtLUBvWEE5wtdpJX6yKEa9YegT52yHQ81g4",
  "key22": "3TwMMheg3NrfRV6w6F6bcPJN6bLpGbjXHKvVrecfJudzK29wTd533qyKDjZ5UsG3hqczK4YF7jyicsYA3u4QWnH9",
  "key23": "3sbLKQzSgZDSCEaNNmwmMZJtkBrPrmPkwyMneRjer2HkuN3GLq6FjBDFdjHAnfR1riJt4hpdWRTAGndgGBL25JES",
  "key24": "39MM54TCBuxXrJEbg8uuuVU6cdZQqaioC53qTCcJfhCT6Y7b43EPXhxR1NkEayK8Mqhf91FoSvhZNYsyzqkkhiS5",
  "key25": "5JA65uZgRXrmdKrRBTESgHfbsQsfyq1fnvJE12HBJLSG654cxgzJAJtLsMvJtZSD33w6955zvDU67KYLrY1r9yd1",
  "key26": "G1s8XkypDS3LBhwNpHxW6dGs6h2MJrSr9T4b8LExgRU9NYcTQVzG6pfKnQsfx6NjiCJcWX2H9jUs9oXx4hg235G",
  "key27": "41Y8iupyfEC6fxrTKfWvW7QqTJM6YkMPxnnAjmhzuEuFuAaiTuwkCYVDwmjSCNo8TABPr8EF2oP6SXtL9vdqCezw",
  "key28": "4nFh13gS39hQpU4Pz7mN6ieEUc3djBf9AkUY5tumtcJPnkrWkYLxw3WLXMqwZGnNLKLRvkzp42ZvDNJZi3bjTUKr",
  "key29": "3Hirf5TYqtpWvY9xeF1SpLfvCVn1zpkg8M2cwoQVQKeKRqwKfJ5GDo8Gjw4voYMy8nxPMqEh49yHJFUjB3jmpttA",
  "key30": "4pP4GXGFUqjgkHhyQKueCg8REXYPsqPuSm8Wzbg4DA1S2QYyLbbDWk2HKygFarbPoUFRdeTWkuxdm8uPMZDys3ie",
  "key31": "3HHDXHBLwrHyKLGP5BT2KjfVWtV4ep5mL8zAomtQp5ynFLMyibboW8NjqqTeGie9ZSnpABshw89tmeXv3RnAhwR1",
  "key32": "37XLLYRjyjko3VkZ7QCAnkCQeFmNkXQa82ERRC1oJFYgvTcWCF7xo8QPg5nRQ6sDoCa45u1rAm2Fzty9VW1CyRo2",
  "key33": "52fjoBFqDzcuW4WyRkg1oduSDLuXgzsEk7gCXTbyXpWMemy8sbrkvCpM9cLsnYdYhp5HyE7SnCtcD6Z9AwodabBy",
  "key34": "hp3LfEQuTWMXcirros8YS5wQLaN9bBagAbxq6paFATnbZvDSMmMSVG1bdFwqfzVF7HHWQ4RDNmAMtD3fA7bE9wn",
  "key35": "3KJxnYK6QVVjKyf1ZBsEaFt6XyWpsLjNZaQdUgLDd5UEubUr1zx1JXbvKtPtySzo5hFei95WSA4nxDUSjGgTdxXV",
  "key36": "4yb6rJT7QmA4AAN1GjbEs9GsvSAr5LU61KXDinimMQRspbwXQgrsXSxvbjZkAthoX6vVduThzRNzFYNNy9Poi1FW",
  "key37": "ywEmKz1Wkdo7erD7D6scV1ysft2PY71BN7EwA1fmC8U1zVLFrT3QPzssXM7EwaN2W3ZrHykiZSoVXVmnMEcTfyf",
  "key38": "372sPfKNP1sZXStz85ZvVbTDBqWYZBsqe42k35xZJ3NzWzrNLJsJ97cMunMwRPfazMZNdQNJmuBLHezBqpCdAxWU",
  "key39": "5GEHXpfX8fn3EUnX7ZqQSKP9BFroL1QKfYfeKjzA7QGKy9g5NrEP8ubQ53kq5av6XxzmXbFPFQiVPaKSseafPqVB",
  "key40": "2BmnCdRKJ5WnKAXceYJx4bg7pMnnPUJ8hjSCdor6ATLwDwsYkzGQCWBa3LccwszRMgyRYTFFQSLjNRsESKqhVF7f",
  "key41": "5KVyGTCGJm6vfzXQ3eDUczNXSMdbGYhuyYc2URhxibu3NH8Pxic745BPvErXu3ZNworCWcKiWmV3YcTBADfLG2iV",
  "key42": "5ynHKu97nviF7fWs2oq5Rtd9YCxk9AUkE9xRkEESRD2XKkzxbGDbxhcy6YRWkgrf72WFRZEtjidDL3PcE77AANxK",
  "key43": "2NKs8BT9rQaNEcT4GQxCRi3eYphR4LPFPWTGYESvEpCjw5mwxR9dFFfJVMiy9pho5eboP2BFkmTWTYK5SQ6Z9f4Q"
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
