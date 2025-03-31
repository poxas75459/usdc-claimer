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
    "3gWftVs7CJ2m8bvZ8dU616cyMEN4CfH2NnruJ3hctqV5EnBgpQhCTUduACHajyarZ6MRBtz8iMHZQEPSzsrpB6Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q2LJbYAQjb1f218V6WnVfcfaDXqzNvBih9SiiUs3turExS85SPJLP9gDp8iTB9AknTD4fi6m55jPvUAVdfqoTk7",
  "key1": "D2qk35vtMut3Soq5jLiDSUiGkGdXc3dqVFzE5UKFU2ei36bSBaQUZetdDj7n26eAUC12Xx3BamEezzYQYm3wkro",
  "key2": "5KAkrjQHWaD7Buz1V6UYZTNDGZdqWBWa5GGPwjB2qdrTHBvcjYhTQP7C9qUJem25fV2yimS6NWrw9pMzNw9HVu7h",
  "key3": "2bLdSojS2pjwdbLEXBF3v471AT2MgwbgjrdFFEoLLfNtSwKqZQgnEt8WBzoPdVkXvW8oFf8bbwDzVo9y7aitDLFK",
  "key4": "3zZQLbyd9VeLPVMKq9i4gccnMb29SQQavbQYWGzfZLZhKSQHPQd7WC9xXij9mksQ5ZcuFTms8GFNFdKPz11ZQXJz",
  "key5": "3Bp1vZvV13eWKsdBS9f8BZ2kfbQzHWnkfZadKxwVJhwCaRtUFCyWM3PddX7vyWCsTduXYkCefEXfeRv4HnV1pWjV",
  "key6": "P2t88qzXHjpxVeJpQK99ykq7W1DShAw5Ju9UBVsSzxHb6aLB4bNJ18wRqWs3Tyv7B6ukcDHVjbawkk1ZbBGx71M",
  "key7": "63d6ZTnGFMDVrWuCbieu1Hc7rdLKpNhSNf9A8MdH19kKPKiSfLurPyEZeXRRwc8bFw8VUGkW7CbwAbWqfEkv2D1V",
  "key8": "5qVFmXpiSiQRyeqA1KZEdfr7sEUyY8ifekV7JCa4yr5oUHU6YWWix1ZGf6DJcMxmY2WhDUG5qMoqjrFmfWyMFfJ5",
  "key9": "NPGRjE3NbfB9LsNf6NfKHVqXgtajPX52iLxKP4AgWnvozDJwukVz1izm2puZ8Ze798Mw5b6JVqmEdwsMDt2JwJJ",
  "key10": "5qosgRBLqHUSdAkzcBHCNVvt9aceLarRKwWLGPxVtUzASmuiZ8eHCneBqBtPcicooStQF4HAG468j2pG2gXqGnWD",
  "key11": "4c3rThge7hrUGpCxvLUqjGYx6ZuHYxYjyhLQMNNa6fDemdRDmyPLBXpP8aMdznyfuMprETe1tkLR2er5Y16NyNHe",
  "key12": "5M2gZwq6frPgPhQznhxn1wMFB4NhEiHAnPxnBQr7r2PJc4EDvSkHjdP377z1WmAbFgFKzeeR6dgv8e4QiQHdD2tv",
  "key13": "2LygLdEFACMkjDAE3ErDA7ULoCsNxfrUzN4U4JuuDDQyaBFSGgTnorRyrUwHKCFHfV16iAYdLiTErj9xyU2pVLEq",
  "key14": "2WKEXUyPFXN39fGYQzm8NuoL6NSxs4hkjoezPdSeRC5o3YY1aHUypLA82tAGtthPpBLCL8zSYtKcvZyD5gaUcrxj",
  "key15": "rPQZB3rdoQrJHrvquUGmJpniqDbE6mdiP3gtXT4xmBcEwfdxoFfdvxgzoNfVLvzDfuS9bitfDSuz1aLn7YCb7rH",
  "key16": "26kZBY8samkiowSuDs49S7Zt8Mw36mtdNY4zT1Rog9XQ3Ya8AujHjoRt8gPF4nhk3kmecWHNNeeu7Ns2azXXHdq7",
  "key17": "2KqJsGM2We7atJ5azepW2no4ymyEYiEyLpszDgCuuqhr7NQZnsQSkGPczzw6ZdAu4eNJ9HwY6wiViidNzERdDV7r",
  "key18": "xXEArf4jwzbDeQLAHveBEpk6AtH66tWF6nmv4nZXn1Sxzjr2H5J1RKut1SwBN4zdFRt68u9rUr4E6iqqi613Jrw",
  "key19": "3xGSy7mgXVAUPEHQfJU2GHEJcnPR4VLDLbWXTeUb6tQ7wouFusPTtH4gVetyiexoPPpM3gNHgyJhp32mePiKmQTe",
  "key20": "3peNYX4LpZYCctk8MkgteBjeoBDaBHcHQuMsab6ffMgXEXEms1Kfng4iSEvtJig1nvWjHVzbAUi7moZvn33kduRP",
  "key21": "2sJJbXyXdVyPVbQiVwL5PNCHyN4TTsyJuvvhrriftcRUF7QZ6HKNGpGRjEAQae5H9421nokiyxGCMxTaGjyvewe4",
  "key22": "4DqMVN9Ao388jUb2cR5ors7io89s34rK5D8UcTszhVbVk6DMrvVC7gS45PjHvzLhj3WwvoN1dgJwhy4naFcZsfbs",
  "key23": "3fygFtxF5CzuQjY1S18aVhZWF65KTwzzt3uAwPWvHBjzd94Q5VTTPizVGDRpu8emJVNNCLNW5PENCgRvi3gLjLkS",
  "key24": "5JtytQLHNz8QvkkXe3iA2cjsLVvEY1PvEiGkRwcJuoWLEsie81sN9gJQTSF17VsJXw9QEMQszgDEac8SdfyMZ1K1",
  "key25": "4ymKqfgQT5GS9g7pchGA9T4ZMw3CM8a4fiqz6rL66fhq77F194hQ7mPj9YDJ9ARrWNE9QFTAxgmJohrdAHEFFrjx",
  "key26": "juksQXdRN5Zgg3mA8EDKxb8ZrgwLTy9sABTQJLFyCwhc5jgzRnAaJqvn86QaySr6xHrsE5mN52Bybn5SndqJeF1",
  "key27": "2ErEgtdgJDeE8P6D5ykQaoj914jmxtKtWv61zx93VnNKkymYX2krAqbcw43YTUhfb6GuNSxUmQxo4bL7knscEKPq",
  "key28": "65w3ytuFF5jH7C9eLXWfQhJSGHuCqXENnGfcbvpoB4uq8DLo5TLuvkWQFpWu5whcefUq7LjXKUDA2DCQgrdSjBM9",
  "key29": "2dTsPszz6koD1bJHaH5cqC8fgramo7zWhgybbhfuu9c8hsjuPzaNBz1p6rUYW6ZQmhGC7SvNF4hbevVfhsv7S8gn",
  "key30": "4eguj7FVFShhjuWHQNrRBX2AYENMETSA4TFXCy2LN6S1xA5ET3u1Dvab6kxK51KFcTVn23S7gbYDMkpEiW48qTHs",
  "key31": "TXQcy7wzFivEDVc52EGqJdfjYqHF3S7yUdC1yijdPJv7ofvRB6rfKUfJp2PnyzdwUsCpfcAuX49wkcF8VrgXhjG",
  "key32": "2xANLKfk51u7moPbgsmcKaGnnTfgiA9VAQ87xT3pB5a7aUKrxmhitVSDNCHsiu1zyoCBPyRNMnsBNHRMVvVTiHyq",
  "key33": "3FiPAJZsgUBYUih3RoFoVnJYTe6LLduzcdEEPdhSRavftUANfcv9MqQn3r4MaKJyaBcqhuTwVGeDwKAjZpVowGrt"
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
