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
    "2UJ4X4kyUCfqFFcWvng6joT67onbUt5MBZ7j1hWTL46ubdrq9zGDZVeMhidyWFazfBhKgPJu4KbFeNzAq7tjhT8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLHkQ2grfcXT8WYEsFwi1qRmqVkPaCrCYpi6WKzETSKATPjuw5iRMakYf6e5k57gEEbhoXJGDw3sgEFG6Yvt8sW",
  "key1": "2xw3uGrUqp6nbWM3wpnhhFEzE1YHySvQn6oUvHK8nvFqZ5WdxU4YoLjfX9SCgxVNa8L1qXTEAUkgdi8FoRQKAjHW",
  "key2": "3DsmKXEswEPHcvhU1Xzm9bE2qvhwqqidJ1GLnqEesPL5Qns1pYS8qaLxgk1xT1Rfw45Nso8pTVfzyQw56vZftEva",
  "key3": "4hgi2PpKKfePjwTnPd9DNf1UboTy27YXjAXkg5fdpPSbUJEKxM214kZzLeCZDiA1GSxBG4nNKRLmLgoDjMjb7wV5",
  "key4": "2aBtYgoeBjwpuHCRWZ83B2ixsM53DNoEtsvfEqBJm4vNPDWLzQd6y3DCaYrp1GonWRYp4T9iugegPg1vxDEqZjw7",
  "key5": "5VX2Vq4JaAJmod5cPV9DdMLrSiyciHZJU8Ype3UjL8DjeXNGbpZ13xx4tc6QK7AhwKKdKSwYRG9WVTdrKjLAAuA",
  "key6": "4dqfnA4wzz5DLkCXMQftLCJ7A5jNGHtLDHP4MmPTewcAxeCKa9o2jmXpTvMFPyznTvTT5jXXHjqCDWW3PiR3nLM",
  "key7": "5UWVbogAt3ttuMEwY1zPjCSNA5cvq79JDEUdbZ1YrZmTjaC3R9PibtjMT64D3f4qK4wC64CvJrQEwZwLCE49R6fc",
  "key8": "4vbaghUm3yTLRcmBvwnqfoYuWvjAgB1gmakbvBtFx5JKDmPoitbec7SMABNWzhwmQkAtpLXBnbGMAcNxzGMCqyCk",
  "key9": "3iUTzW6VSBBs1TME3g4UDC9RJGsN79YBJcbNSQCNeC1hN2eFPnw1LxhdqXiGaeBVf1t2A6YMQkYqBV2WixEbFLgB",
  "key10": "2KmjqTdu8mQxnqvznEqU2sSMKeD13TJuRgCiCX1Sc4xJcGzyUcBP3YWSSnp4T2mbdbi46xnvvB935hpjrWJmotVb",
  "key11": "4mLKun6HPELUHBRwwSsoCgKa43yhbqrBFgfyZ9feG2USeifEjfALgBkthny1FBbfacp7GVSowGR3s1R3C13wcD8u",
  "key12": "5hDSoMRmBiTfGAMkbxx48pvJAWEjy4ygeNQaWAsqVzJySyrCMwQoGc9zRmqvG8nVsV3vWBgD3UZbaQWNpYsSBEsS",
  "key13": "5kaftj7eJ1ECHrYiygMRtqm3gQDhkA1YPJvgUHP3KBohDM6U8npnJqbrNyE1dNe8cw4vFWEd2jYdhUWsysoqRB1d",
  "key14": "4oizk8XJxLCX6uc6fCf6w3my5izC1P6PznAQC6zPxLY8FJx2TVnus8K62jR2bPCAzQcbLCgd2D8W2Ch1nhe24Erv",
  "key15": "58DtJhFWMt28zgN11KXqaELNvZRNmUAHZRXV3iShh9JyU9TcHwqFiE6uGR8LGd71M9vDGjMXHhmwBt7ofSSze5RS",
  "key16": "4poLgikGHw2PuhJZqsVWgoeSHgxzmqZMXp2mTgUYCdnR9Jt2DJpABy1F4KEyRWvuSAQADeXntqh7xayEYFs4XcgV",
  "key17": "4e2kFamKD74bmwfhZGgE2rJt1PQPmdLS4JAWhxiT99S4zR7Vsh6UnytBrhqtzuqMteQ5ktQbXMtr6ueDWdkonYQJ",
  "key18": "5CYGn53vYbGmSnc3UCNPtghACTQDvLwMT96W1EMAkVBPEBEqoxDWaPactc1NSPZ7h7Yxh9u1KvEQfffWqxZgQrEp",
  "key19": "3EVsJaRmPLcxsib1eeNkuB65iD83assxP5nWyNkj8W6B752LhG31Ac6WnY1nznerZPG3BRiofPM9Kye5RLq4tzdW",
  "key20": "8ShJwB4Fjt9keY2Do8JcEnoW3GDoN5r8MbBLo17NvzQSXgju7gYSv7sin7htRKp8tfxjxUV6mi3a8CNJMo8kwYc",
  "key21": "54eigXLDtowFu1sEraEYwezVqxHyMFFitr6FpyCF29aVUhjWcLuhLPx4MamHqZWgMNPD19uJkbEMBrkSa49kzGgP",
  "key22": "319cGqVzypoJRo7rVkjH6Xez2hSy79DKT96dG92KaYC7foByo14PWRshSnpPTb52rgCeT4vvemobSnhRifF5FL7u",
  "key23": "5hpWDUCrikLWXnnUZZHtS7GUHiGu5h2peDvWENrheEWngbC43hzbVfiUPFof8G5QLpmzwX2DDpmq11uECApssyjj",
  "key24": "3Lf7bix8Zve8hAKfJZNUjZcQa3u9EGKiNEXCHHoKqhgzDqahRAasHHw48obkM214rAx2RmM13MBpnTgMeahVdNhD",
  "key25": "3sx1o1L1h9V36saMxbUZqeUE7XiUvpJJ8qrUUiBL2PgFxjuAHeF8cEuNEx3RKgHy6jVH69Mdha8xM8SdDJtth9Fv",
  "key26": "jEyCcBtTah6nfP6A56YdVBRG7vWvyFWhHRJH9iRzgbjoApG97KonsSvu36JBAw6ZHD8b3PMxNXKD6y5FB5icetw",
  "key27": "2iajXKN4rrihz7bKU4d5D92qJZ2jUNCW4WpWmYNL5e2RBjTTSdXaEsnUzig2FGu5XFyGajhBg5vrSqF9A2twakGk",
  "key28": "5ZZDfAmZbfcR1ScrG3Wc9vfND6MvVVduQHrypmYtd5PMUz9Me3BUNX2Kbu2b5oECb7Q7Wyt5e2EXVbQDS2vMpiNU",
  "key29": "2D5ExC7dHGUXctpdDW3Z3XDXwV3vgZgyBShdnVxbwXzBsB7NYaufzJ6rYDP3ShARuM1coQJhBysM3YPfYoMWsjUo",
  "key30": "2jKZomf6EueaHq8Y8tkTfjd3DzUkrRcWZoED8jjKsYUDsRPCWf19LG34y6SULxMy6JFUMsNuqpBgkFgW9SyBc3Cm"
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
