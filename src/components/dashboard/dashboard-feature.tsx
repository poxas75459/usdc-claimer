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
    "4Axptbq5BdVJzLSChFjhWXVHnrXeAHZv5rLcwriLpYAwTbBPJi1HA9o6jrp4rHarPucWjug3mYZbXtVwaHBsTuK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2abHfF1r7prWd3kwe3KT4hoTT9K1KnGrpmg47UFFL6U3Ws2TH1rVo5QWULNtfSvqesPLmYMt98SurnJDULqnajfF",
  "key1": "MUvLgYHB5FMrqe9sKYfg9e24QvDfsS8LNAAs3fZcucMoEiEgAUg5sFMUWT49ZBx2VsgW6ph6jv69yhiPvrDY4KC",
  "key2": "5dbgqauRBFdHSWCmL68EHzViSwxGiVXLQALK1D7aoLJnLntwGRts3pTCPhNQ4Wpb5fBbvLsszVxqLf7sqk5T6ZBn",
  "key3": "2SVmwMbqQN7A9VXnxyNNvE9EC9Kwk6p4fzaihG2bT5vJvuh83QWpspVPAzygFep8NFGpFJLZQy39EXCajjdADFLn",
  "key4": "4cK3GE6uZqof942ZzgYnei4bB5rDah3wgHiLGKXCq1hrkomC3tK7Z26guyNQgEmVSqcweyu9mMH2xheYkoxoTWfc",
  "key5": "321V5YSw3TkBHT7FDCJH4yetVo3CWojD6TtXdLqrDszuN8mymSMvGX7BJK1jgAsVjXJe2ZD6u7dsdLJNn3ZWq3uL",
  "key6": "4CX42seZZbQBp2ws4FaGT4SiBiYsaxsHqH5JgUdTfULobHmTPYt1pQ1MVfnQmKsKt2iticAPwdpfLUWYL9h2qyUM",
  "key7": "KjsuNqG4PwVnerW6fso2qRXuDzFxMitr9FdAf2ZmSWU2N1unmhwjNEijcMihkMup3zKPXyuWP5H7jLB5SaPYLsa",
  "key8": "2EVgns3hCSvWX4HCRbQ8Q9RWdzh4iUZuDnYhx8FesJJqvKpbrNDVqWDcojMCP7PnZxZRPvFHkLThRM8PxKiuYDRA",
  "key9": "3vSouiXdnob69N3muXRniPRKKr5saXB8DUWXW1M3PHqrrHCavdGCqxSLdYdzGDzTTMa3baXSzCSK1VEbkJjfDJVb",
  "key10": "3pez6hokzwURz6A2Kao5XHqxVheZwwgURhGXTyFZFNWM18rDmMmnjJnujTreH1iAKHg2Mn9PSGJvvdVkHXAh5bjG",
  "key11": "N88rT5zYWnaFnvzXvxuNhhbq6d6NSHod6sQp976TjJBqHrtPmSHXvFt4CU2FAum583VXZdqLDGdkMhzGMyKDsnU",
  "key12": "5dRGareVAauMQjVyctcKRZHJ1WZBrU5JrUSTV9c7JKeKWYvfjZ1w3xQTgAQu7iZQCskYtDoD5W9iGxWv8auUGqcK",
  "key13": "4UankjjjG7bjsQ2FpCajjiSSZbrbVD3k8NMDzEeNBBFvPj8YeRQsP2o6cGtM9Fk1cpC4Kg3VrgKaDLVKeDYi1P1L",
  "key14": "2cqPPA31CjhfYWLyZK3KRT5McVLXGx7wmB6Zv9QpD3sgtRD7yzhJX9G3oyB6zHwtj1QNxQp9UCuabTFivpPeBtqs",
  "key15": "3d2fwuxtTDinfpQ5bLwCBDShRvVUTUXq6oryD4KyZRbwpzXLxF7ahGHKpPWHNuELHY2XV4PRUSgFMGqyer5W2HBK",
  "key16": "5tx6Ap2Dw9WQn7bP9Fu8z8Wcjwd2Xy76mB9ySFbvTttriT2EkyM4Hz65Rjtn7bRkPgBxaDtPWksSE7MuDZVJKpUB",
  "key17": "25eby8R1QCbXmBYKDShFgNAfJfo6g7MgitVnC8dxmnPT3xowh8Gqr7T6x6yswz7qnGdXZL9z6mQzcFEDTkgzrt8k",
  "key18": "sjwVY7pJtqnugH2NkogKZJe2Lth5eZYpQTgTvbNjeFcV65oGi8cc8LBPjSBjV339Wq5mz3FrjE9ZKHPJPeZUys9",
  "key19": "QJmrYgdUQYbRs5hewJ1SaxdBTE6M8Q94nXZHX3gMcbrM5TKNP7A5rENLaxsTchBgMUAoRJ51jUjnXNhbD5muk6b",
  "key20": "5gyRvTC8DoVXwdAWZFfwNdqY7fvgwzSz5cjcVoMctESM78W5usP8yR44mLBhzjJ2Q58XcsCHSnXxSADspxpvM4DV",
  "key21": "R3WjYAopuHpeLos3brJBsKTdzYXPyTkAPZGngKuj5WYemERXMo3kyED8YE8ehKaYKYZistc5pVxcM1H2UUpUHdr",
  "key22": "67UEgNXaKA6znedC16Dwm9rYXboNAvu41vz7esSqnYE3fd1WvE7Rz3UkZ6qhziQng95WC1P1A3KgqR1MWGKaguxU",
  "key23": "2CtemPyA1atUsk1TBSA6LLNxJuJjveUV97wrvjpbpugF5bT253XnaY8RPynEEKXttUZ2Qz2qMwfz474x5iv7XGS8",
  "key24": "PvuScMA5xXCNAfKkRycNr4E7RuacsPHKgULDfx5tWSvVVt7XdgA5yuDcE2w12q9VBbPHGLxuEknX51RDSmvVTLL",
  "key25": "2kepvFhJFiRCt47EAhrrSGZnnSgFoSLKQ1UAobvd4i9abUtgaY4uYLDuMUHfWjgZD7CgDzsV92TutyGiJzzcbDeg",
  "key26": "58AtvduiJ95Ea13LabTwtxN5sqoRko7UFxDZAuj66mg88A6pJWGYhvjiVRE61644nRzXEvhibYfhTSYbMpTU3Ntk",
  "key27": "27UwnqdqxY8nXBn1z9qLuSQzDKByR8APy1PYxuXSW1hTuNSXUweAcnoKVZa6nqSXvvEVBotGUb8MSRRstJFyDptR",
  "key28": "pDeTYa9tQzLUw5KXAXaJEQyoDNkddyFNTjJUbaNJ67nVJCpaMmosLjRgCQSBwRTiv27FS7bkS4vUozc9B4JvEpa",
  "key29": "487H2F8359cp21x8tDkybPQ1xvHrbUJJvX4JAW8ozLgSzsinxuYdtjmyHnDBd63y71m87Hggxk5qiZGbqgdCHoFa",
  "key30": "2sMVLUgyYmE3Kw5cf4aNQvgksJk7FzW7pYQTjTVZvAZz1uRUEwjda4e5EYyoEDLnrGounnLexkF9wxf6MaB1f5PS",
  "key31": "21oQxWN4tBwgohbQWPFNTNM8zgwE68fdHqvd8GoKvtraotzjcpNpgvyC6z1WbJbuts2p4d8rPwgnxiynueiykmw2",
  "key32": "4m8TgWvaX32W1A8RPqHoKqQwa5AVSuZsGXM9hoUfsUt538bWXJ5ZAUu2PUQu4VBM7uVLHecLGZAYfKJNAv6mQ7Q4",
  "key33": "xQYo8fBtXwd9ni9cFNvzk4CsB25ZbQuD1suhHSzuiTF7XbqMMsmNEBTpYPJBBvoPhUtKqpFrXTrZozhPezhNQJh",
  "key34": "4ZhgfJWCbXD8irprpJCob7xzX3MsSM5bzQJx9y4WjTPbdEFdP7fkRvS9F9kXABwaEkGZ4oZc1N2nsvpsWUoDMpVR",
  "key35": "RLWsP7zRy6Ko8Tu69NcBdFrtLM1HQhYZz5ZzhppgKpTCJQsxWSGiXEosEySKwLxWN14Ro9Ep7FTQM4K36YEuj2H",
  "key36": "4oL81ZZLr3zWr5vhtnn6A6yrrJx3w9fGSpBtY2Jr95MbzAjpu5GrVLiUN3M3MzPgBa6cfQHyPGqjSrjZWznBJ8eG",
  "key37": "3VHWLh2rtRGQKM9SpAczpz1qSm6TcEGTKZzZ92THM8Lhk26fo2Xsdn3E7gJ8FndzucAnQC3x3eX97AZyEdGUzMAy",
  "key38": "2yDESZ8Nurx6HCXUFqjBohmmfsrzz25E8BtMKoWZFV8QAQb5PbZbFmEcRsahxCCaZiCdnBG5x4YPor5GD2zvv9UB",
  "key39": "5tHPK6tEebucmeREnnkvfoywGkizU5Pxyg8cCpsCcA2GJdEeFyG4my2Ty4DkX1iyrDAbpT9mekSCAe5YgBzHmLo2",
  "key40": "2pjqyF6HMtRPdbUX6nrrdfrKccKPkTp8rUtSPGPWDYCnqJkVXGjoLUtntKjCTJZSDLjYxtWYiEnA1GrbXBnsN6uh",
  "key41": "38CXLY8j2V6v2E7dDV3BvaeLaveKfoeVRBqsKhcio3epS7oWs8MSFxH3GDv7sfsUuBtAtkAMUf2xT9UXYTUK7mZz",
  "key42": "5rG1ZfKGGmenQS2kfwDbsAx375zH1uc7cmKyLABRirX2B5f7JEHQ1VFAXWpQjVkibRm8LpQSio1u2jRsLYQV7R4",
  "key43": "PxBvhnya5RfrfmopMzUVvcoz1KoEFaNmPf3ivZ34zmyDkCziKFKPSWY62uur674iuLW4A8d3s5xego5dXz4MT7t",
  "key44": "51AuDfEhHaYqxkzMV2ADnTmyfBCCP9TomvnvVBFNiQo9Ea6U3AaPrqDGEnk5wtTFQN2tsT85kh7HMBjgkr7J4U5U",
  "key45": "4f8Aijf1gSdhcUXprTJdF4ohqTpo9tF8grE6y26fyUdGgLLbJEJ41VRo1XfGxfnZB6vQWqw4ZnpB3sMg9t8fsw5B",
  "key46": "55zQJKDyFM75KVVEALzBb7jZakp1avyuBrQapQHAj2ZaXUfMqo3Dx4xXvxc3BbqJ9vgYivpaTV6QKWJGBB95Nb2C",
  "key47": "2xkgr6xiLngq7ytMmUdjnQzQrbbazc9MFX6WXXUNfzMRHTtmo68Q77NcQhvbeWnnGp3TNdRkfmr6x1586eS7xREs"
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
