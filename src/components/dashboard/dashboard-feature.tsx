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
    "2NyD3PE7YjBsnCfd83aRADtmyFFrZZb9P5EZPrcvpgqCkJLPrgAcbSLjk6rabHLyPvEZQcpxtREajsuSZHudTDvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E71iLK2a4yBebQnZ1zPtwhbm3mxMH3ioeS3Lk76acwJ1hC7f2r8XnbFdy2Z5g1MKFeiYAFfCWSdo2fG7TAGu3mw",
  "key1": "5YgGYHacmQcT22vNKtTBJ2XsmDpKmhjrdQ8rv8kdAmSg2AK5utFAdVMcYVcYkVdaAAsRRfgvZ5hUN5kXtFZ2QNjX",
  "key2": "2jcdVo1NRnAaaNjoVdP5WQ8QQcJEQjr4wkbnuwZQzdHTch8KYn9E1uXDodf86TMPkKpWbeBXEybyygGk5uJJ7bbV",
  "key3": "28BomGzmJoh3iMkvXn4FUJFx2XS2f9kPHDW9UwJpZZFhAD7oveiovSd2LL1VeQjZ4i27wEAnnTaQwCncfLzc3EM8",
  "key4": "4jSKYyKV8PY8DefjmT4y8WVNUoJ6jhn1YupKD2inLV1xTqYhis5NRnv7REfkrmrose1iJfYL2kzBByCKNgXwiL6U",
  "key5": "mwRJUT3nW3Mty8xtR9sFtJNDQJJnfvTD7uzm7fXqmCuAWzGeD43PK8AKBKFzeip7bZYDTHXZVb9KA5kd82BfQYG",
  "key6": "5w5mKiZjksm1C5p2VCHSJVU2zsDgQw77Ks4aH7bywuBdMSfXBk5vNohNVrVa3G3CRFeekfJM3hLB8SYsRXb5SBhy",
  "key7": "5M15vGnHnc8fmF9ehGiUWujkorgrZqf41dVJ1f49162MCtsVzXcp5aMd8XdXNcfTP4TD3JmURedsoA2raGbSvGiH",
  "key8": "2gttko9vctRBfE5VTcKyPMT4DqdEDDgd6mn5RiEf2CmvBqhFMutaotm6CZyU1ub8J7ZXe15qGbD547dKRdcqhLRx",
  "key9": "4we1sHrHonczqSdMuQCWwjvKNb58UMGE8U7PAb7wmRwhra3Xyc7RvPTLsvzjhDM2w1NbRs1mTqUYGdfN3Mw2JgTk",
  "key10": "5eA9U3fev5cgUL5m4qp9wjoLatb8hZuZRmsvctocNETrWhAdEFLNjfLHc8fTV1iu1EUrapcUX3hyvSxmWTR1mqPQ",
  "key11": "24YiUUVkeiZ2yxxovj51meD88PQjrXiVxVLAYDaZj3n1f5vKVgFmVBXEX1BD5L5PMZm9LvQhEH8X1aFmihC41otz",
  "key12": "igQZ8UqJr8cgJAUV7Rr69oXxZffRGk4pCqxYAZb8hAobcCk2X63WicdaR6fxKbzd59jqg2Jm5Q9RswsuCC9Cw3e",
  "key13": "2YryGJo6MiPLXd1gWXby1Pz8cKdUTsGXGPJbNBvgiaUznujQRTPMqexGMrWgieuiBQvRUjxbi5uRBdzbHAp5U7YK",
  "key14": "5X8xM49FNJSwT4B5HN5yh1j6hS3BEcBJY4sEMG78cLduQzS6MGPw4VzD4ZUEnSXAMHLKLadvzBxhzjuBsNXMFkmS",
  "key15": "4N5JTz2wEXCkP9mHp2PiYPFw2g7eKevkqYs7iXRwoSYn8SnR9mzpcbiWxdqE7PfuDhTeyqSDGAQ2mxiiRn78jAVF",
  "key16": "31NXuauQuGkmqbgoASR9mwThE6cJDJBDS8hyq81bNgjjnKUPXs6kG5dfBNUJJuTBMfmpQ4ahR7xYWXH7NjaasEH7",
  "key17": "43w5ffQUpPVSi7AsMP9Ys6vqr5uGL1o3yLrrW5sX2njd6e1SapZ4YKL8VKPA3FAQwEWmf1YtnfAQccEHQKXyBe6A",
  "key18": "47eNDW6mXKwbq4ksXfnrjzdajAiAEfK2gwzS5DTLtuUX4EZjc9NRsYz2m3g3KssAP8ZGoSNiwPG7mpjytoGp6qmo",
  "key19": "nPu8z7Jhur75XwG7oJKuwunQs1AnAinN9JNwBdjx5W1wNFE7adrhcbBZjdkKKf9vonFqsyJhwRFGv81uCkixZ2Q",
  "key20": "4VUAYouvus5AizAH4A4zkyjhiojAcgfSFi8ydTLpepk8EGLLJNjY3s5bBBJcvYxD8ikJygen4ZocutHPpqL343Du",
  "key21": "5rRi1GGzsN2jjakMR7AWMgWVJtJ48zrY7UbzBn8BoFFRQBdnujZNAb7ivA99DeCx3PUXgEnPLh1wA94oY8dadn2o",
  "key22": "2qpDEWno8UYW8EwcdVpkKmUEfpLiR97M2mb7dcHt9RVjMsrAVSVkRh9DNnLRxNpFm2mCD8sSHp8avKRVJKdG746x",
  "key23": "56xMW2TRJRQswEjG3uHPnvs7pMDeoPH4mE9zCjTr34Q9vE4pAwrcqJnVhmkR4nZmxAyYQA69tMvogm8FVVvxGkfS",
  "key24": "3NbMUHffnkdTHQK9L3KT9LpcAbXa1YgmCoVrSu3L8BgDoTqEVmVm2t3YZjUVPt49ujsQS73wqDwD4ELxHbenmxYs",
  "key25": "4Eq32KRe4TkYEqvuPXJS1Xyuj7Le8ECGAY5Bscti1M7JhJ9FnM5E9zoFoGWnqdNQTMpDCEiy487yURVsSp3gWBvx",
  "key26": "3SdFzrKKGbXHEfW4RgapsM61N91nsHtRjtB1pFcJ1pgtekzCeiNuVaQdahDfxzMfXxuWd4P4DmZDnbXr4TWy6aK3",
  "key27": "BtGWG9sPfcCD5nvZGEVzc1fmDCPEhDzM9jTLs7Gokby5vU3bPM781Ke94tpza5w1Nf4BJbg8Xtpy3GP5EH5Hf6h",
  "key28": "5u9y2pcrG3EG6NGvEmAdneaEeyhLbCWMtiTVMPRsrsFGo85u2GPCscTcKmMaAFV3PQd76kYQeeq8fnXRRcFFqJdm",
  "key29": "3KLii7wsaruBjg3RYuBXdYEYQQWqpqWAF6WBPDPfcNxi8cooixcBFSwoWvziHZhxZiziDXb1HkS1FiWpXLVkCKV2",
  "key30": "4puXwzyEHkaVbe9jMPwpWLK2BUbaAdgnyCr1ysJGEQHvchSe1uxev7iuoCKVvzTohebSJZvYZpogSfQzjWdxzqzB",
  "key31": "4s5aPCHDHnSKCfRwrm3j3vkAd7AqxGTfsXE1fZThwyCy621KgBmYECXnDdEuFbj34LC1ZimJER4APXBRLYJm9Eg3",
  "key32": "5S3vPPKjX1ib6PEcQaB2kEg3cPBdY4buFCHWnkwJaztXk988F52pGBuJJdUJor9ZtPzBxnkZn8EgtfvSVHcBvvEF",
  "key33": "3tDhCYob7P8629TnvLaurGhJ1PkGKCmfFoNfqBoFFKaqeCUsyVqhxX1y3w7TQBjZrj2mqs5EAY4bSFq2A3hbLW1U",
  "key34": "5QoGQXCkVEzyn8kSA5isWjqE3jNS7h3tQVSkFjJX6c8yXgCZE8V6XcD1eszfnTKgqofJxpDmyUjuBpi8GabHhXvb"
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
