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
    "3qo4rGm42KwUfRpznq1cZnSZvSy9kufQif5QdZNJ7kriAHscFAhDA5pF6aFTzfvwQ8W6ACAGmqUvkniyBW51GiT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLJoUonqi1CpbkbaYAxTgzRhScbdAzi7kEjNzyd3vqV9NT3JBenCHLsbFofmFc92Q6hPiHDheVLFf8vUR8JwyD9",
  "key1": "4Zae89N6nxdsvV65wyf6g7Xj2JLQiajKL4wLJsaU7hrqTCeRBfJnoiVsrsALexh7uo3SoeN8MD8qnUw38akWds95",
  "key2": "5ogdxhJ1m8AG6NZoGaiRpUpz14EbAoX2yexrqMzcY4uaQzDSvVSbcmVPNStakCZsKEbaYdCdt3p6EjqdHWFjrYwr",
  "key3": "55RwKYghQVgCt2JmFLAjdRNaNBG1FfQuuaDaHQE7TnRp43m4HzpaFiSA3yKTAMuYS2YuMnmLvTPWd6eLvDJBpe37",
  "key4": "4AmJo7iMr1t8WLicU38UaB2derXoHcwjaSnTfZb9fcEGBwPmZhAqPoZ6D5RF8mDmV71nFG9MFoE5V5FwoXAimVkQ",
  "key5": "3Niot2ZZSkP7kd156MAhDUQ6EbixGY3EVTVBvrPVwfbR1NAFX5kC4Dw9x6n61XUUY2rP5PScVA4XaU5fh6KwBpkj",
  "key6": "2AuR1xvCWHDN3hiDe8uB1QkHMSzn87VY5uaiMzEPYkvu3AjAvn7Ma81Uu6ERYi1wkZF4CtiM4x8xB2RRN8DzE1Ps",
  "key7": "SiBZyWLhSgpUk1fRZwxDykjRayjWV81dkiY3aQMhkE8zDwdP8xCcdR8875b31Vune1hw1ts4gtXA9CBBvkcDwL7",
  "key8": "3m3GU3MPvrsFut5SUmc66cC7nks9MdvGepHSr2ogaqLb63fcy5giDoTurVt9TceTc8QAhCLC9ovCqRJbVF7n3a66",
  "key9": "3iELoTds1vHUQpcw1tFErXyq67yyLJDiGCdfKZsnqT9wpbSLK6ccp1ujvNFrdfKxeqtQyYPbKQsJEHqZRXnbLe2K",
  "key10": "5HkDZbznFtkucmt5eXP1fyXpNFJnmLWinqpS6MqDUNFEeNyai9dGS9aqRDdwBWJboZYi6v5zxPReGVYhFiqD8irW",
  "key11": "55p6vRvQG7favqazkd9rFsgpS8hQazM3JBYMMQPAjEfMmub6LTyGuTH2zu6XuUdkuwjrKDW4M5LAE8CXBv3pdfwo",
  "key12": "5yt5uv3UgNt4fJtx18ug3dgeQMoerBvhL5HxfRe3rsWGctH52iaPaCxxfKW4sKeZ9D46wdiprML6pDsheEM93QLr",
  "key13": "5WYF5dgVgcEkJbMGAc97YU4dJqxdJggNrAeUaPVBm5GmEjmKBRfiaA6KTcXHHJaekib8nEcUYr122HdpqUtRYKKF",
  "key14": "5Vu1YMzXEv4dEZHE3g7a1Ur63GmCb1fWRo9v7jbPjsMovJFUS8QVK1ruLqCf3G9QVNJtAovZukfkjmz26GLaiDHf",
  "key15": "ET7nSYZpkEUsGxzAAztym8gsHt2ibreFN8vJycTLUHhZKyEGxe8PQoqSdeWWacQCEGqFb4jcvNMKwimcjCbp9kE",
  "key16": "2SfjngdSs886xuYuLu9A7HYAcMa1kGQXKVZ1NGysaVpbNpFDxiG1UV4EJNBh55KxYEaGbnmkqYaezrMvhhcKwWQr",
  "key17": "4vG4BuTYCvybuKRUGyvaFfEkV6Knt4bzEsy6gBPaKuEL49DHgbEdwE1ZbiBH4pUuVEMPa6xu1gwUZXKxpisavMS3",
  "key18": "46NS77VRTDBi89uW5tZButvMmRxo46k6o62NeH2sX2t9kqZzAFSNnSv2V11rx6fjCMQm8UCXG29wQxaEoJx9Poqz",
  "key19": "2TwQnAtgGDpSmTJMVKHRps6tPBdtugGxC4BX6CEG14dHW1tiEwjp9eX8oKGaWz98LbdkyniW82TeHwJujgbrQMSX",
  "key20": "5PadQ9U1V8fmiMqiCWZbPpzJfTyb2i4UTFFPXPYoQZrfRyDvGSxgodN7aQHT3DBQm5FL6ErcLhsW2KbmQqhv7AoQ",
  "key21": "61GfcSJb2GieH7fxePS1n8Nd66exqpqQKYWVvw3fjCsemohngkrrcasx2DmSRWFPbdHt1neLRfA7ZoY5VDJmwVi7",
  "key22": "5UDKvsAUxFTGeArUh7w97WhoLKBU7inJQNbUF87DRuj5LFSxt8Wrpm7hVkecjFQpnUforEqqyUmezPtW2EkfXX3o",
  "key23": "451f4x5CxNDceAXBhFVLTYmH2i8CoyLNztFnxqb2XFWqs61UAyYTiVcBDnekn8KwbhaBu6B92WtYUtqk4dt23xsD",
  "key24": "2rUe6c7jmuremqnm1ZTvsa4MbDoCzBzbZbvYzJ4nGTMgALcLzPctobRHwxB2T1LZnGAQ4wHDXnJXNkxWLksRwp89",
  "key25": "3zuFnq67fA2a65oo3TKSXBB5VKWMBhczvHR8gUdwkb9UjeLYCqh8GatYAMsgC6vjzuV1aqe42UfkBJ1zg4xBPA7f",
  "key26": "3RzEjrbuwPuhRkDTv1i8vwWBDQAe1r2usmLn1xUjojyrP8cADfAUSe8ARkBSL5pBQPdhtoXkKvxRvmN6HPPTUYiX",
  "key27": "dp8GECT9bpWqjXj3uANMuUhF1untfwmbDQN9anEmXDP9ZvWa9EJDVsUxFcF4EREKnmYjxMSj4hFek1onrkz2c6k",
  "key28": "3ZG6szjBLLkfFpzJ4r4ZCWDfG6cfkfgKmnHzPqrUbDQkj11ebADgkMWNxpZpM5yYipVwjpBEP4NJmrcH1cPkc8LV",
  "key29": "2ZXU3Axke9PvfoA1af7h4D7b3gwDChwGqWUDsdTLPPfkz2fJhorKnPwFwQqNsufV7dBccg5eyrB6yXnEu7JegEqD",
  "key30": "2xGUsEAWD81egHsV7zdrF1PFK1FdZ38NpKoSwrK1j7zfdRn1jQsCQhMdEe6QWe4kCRFuSGmCBFb3VrguA1YP8P8Z",
  "key31": "3YFa6ENqLRcpQma7JnJuef754kuYFWmvfCokf2DNWNQK1R4kGYwiFuf6LjD6yzdTv6818fTU6iZ6rDvEq3dBmFDD",
  "key32": "2Vt7qdQkZKzpcVhpH9jZNwFKouMDcMb7hzpUFhgYkSWgTqXUXfqkKMcRjttoDKTohfVGeSXGLUXNCiKCyd9fZimG",
  "key33": "2dnKdTX5CkFQzpcuVXugsVojzW9uX5zrBDPxWNK2UsBEPKC5em5UsJrLcaKCGPdPkT2eAHawVmqdhv1pUr4mpAr9",
  "key34": "kwLK1UQTrGc5YRqUNkGwUGMUaXyaJFrpKxy61ehtuU9qRcVBhU7N6vihTmdKiV5MV87cGFD55Gru3pBd77T36J3"
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
