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
    "2XAaVuHPvZeJ5qFgqe2ZKD98GRMfjs8wHW9tc3XRyyaCt4sKwg4jB3TwRvxv7SGNHKC7rkCDRrS1qGvs95xGHY8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxmjNymPJz9y27D5sKyK57TV4yUBbvfrZVQYttJpDbuWkA9LsS4xtf2ZtgXpzVQmdaZTqgAi5Y6YZcJcMhXgXGE",
  "key1": "2Q5Hycr5sh7n31ofm947yAzscN3P5v7TXgcekpb87ZshFbWKSLv1HFE3A2tdBWEzvnKbANebLZBee4oycvN6N53",
  "key2": "53LkGFYsJb9DVx9S6zzajnbrX9wajdjPvER8Z63t4BUMVA1xX5SUeurc5xyC3KKSf9VDM2SLcTmikN8ksGnWJ4Sh",
  "key3": "5ke52qozSfMxxaQJcMZfxCyU2aquksGyd7jhUXFvvgTdMLALSf1Sk4EDUgbGfdxXgQzLurzMWKw5Robk7J32ndUt",
  "key4": "4xSnXyQj3tv2cdUAETn4y2fg4dgchsQuQayuddHUAhytiwukGDVf5kBnCtzpjiarNhrMCDtcSc2o1WrjPE7fWNyi",
  "key5": "5BTBqoLZmmhZsqx7MutBdEBsUpEJaS7bjgnGqHDnGbVH8WPGMqTYcoaM1u1HYWR8r8cDjguvu6zR9bGN7H4zauoj",
  "key6": "24c1Pab7DSBZ7nRAwgWBhoWo9AomWNoKGS2RpCYayfPo3zKPqMtmboWSTjo2vzWMDHFDRKW544q4ZiDKheymDr47",
  "key7": "5cyPMHrbKfG8nM5oKDncU7k7gddScCHubW5HVcxrCVaBAxKKnA49uVbKQFbEDUDtinPSF9G9p7vLBDhT6y2vbeAj",
  "key8": "MzohfF92BAK4jvNCkekSmKNjnwiAo7H7TN6z8eWH4BEHjwvcXFMVskYM97C9cZs3WcQytRSh5mytfa6nmbVuLPT",
  "key9": "3cun1KU4VPCpC8obvpq6dtVg74GyBZ6mNbs7RKDNibHizJAucxaCNBnbcGZ9bdSo5DuE7mCkKWhbNgzxnqcLGsK5",
  "key10": "4zy84qcSMMdasq9yBznUuw866SK7basuqbRLX1Tx7ok8teRLqVxSH5MBJzWxbqNh9HAUWAWrSN4yUxbxtHGXtUaV",
  "key11": "36KSNxGvrnL1mAMFzkJ9BhVPzeckZCSUWcXGcDD7adCyKDKktwQcEYfJhVnKqVBX1xPjxPYtiPzovTZEq4TuddTx",
  "key12": "4QcRrrMGQ2Wx7MFXcrd1oYvmAVPmYTE8noSrvnHbrnDDcqbxoRLD1Ut24izgaZ96b7f2GKSqRJcgDtLJRSiV7Uni",
  "key13": "3cQ5eK9hzj9tU8egUQhCiaVnLBJAcQdMxK9CawJsjUwujzDuRgWf2WcNcVgsvotou695gJnASCDQSZ7F1iDupX6S",
  "key14": "34aLbmBUtwrrixKeNbjCYh8NhD2cHYSPT3fK66tAKzHXQRiZzebPNT7pKTZKc4on8GjVMgBrwq2oohetKs3X5uKS",
  "key15": "5D8QkteGgVJhTEngWmhoy5pMBauLFNUFqeiUQXa1kZuXWTyHLnDJCtwUMFKTnGerPKwnBHa3Lso1mubLevF4PiQR",
  "key16": "3Q4sJNYjZ8T86a7qe5iZkJT2d2KZbsYHpZ32j8s8Uy2d1iHYNvNCuy59xQGtX6gf3Xyyx6nzhkdrBV5rD3VZfi57",
  "key17": "woHRfyV6JYfowcciwfgUDQGXf6Pv1QH7iucRqy9WJkm6RtZSjYYXYtDA7dxxKZBCum5pBA5X911xBunCkxLmTXV",
  "key18": "CCnxu4LvRPVJBkW29yjsVuiuWC31QQMo9cZCDuvUVzHaJtWeYquPHJ84B66QnAQbMmjebr4QD6A3BHxhPKhWQk3",
  "key19": "58yTQBBY5WRhzrfM7fvFkuBM7gdVqCZv24mCFF5ekd4awds2AMHA1C4gSKoz6f3Ck1aGbrmh6uwkeWHiE11sa9NY",
  "key20": "2XLXdrUCLWanWcDQfdDRfoPZJnmN6NyGY1J3TGEnoJ58PW7LjsQTbLtMaN7QJ4XTaXhjKg6Uwvnj6kvQTU5nkYkJ",
  "key21": "5ePzwN9oxapuyJf3oCTVfe4BS2yUMxHQ8CMvcCPDqtYzURvyJbziHyUcvgHK3WRk2QKnjTK9M8eZkDUiD2oegycZ",
  "key22": "nuE17vGzTgVqriy2LF8Nacbyx8obZs3x9i674FiR2jSG5LrbVRYuCuoK2W66R5N8wa7y5Z9bUd8YfQEQZuYkfxJ",
  "key23": "9Zdd75yrCQTrMQ7jyJKjqh5QgQkBRpkeLbRnbpYE8e15D3oXfKSE2rTKxiKiwNZNRaninLjY8GMf4EsoYoY3H5n",
  "key24": "47Gne5EJteAKT11aB7hmeA9xSMtdoj5nWsSCrxAQvQrL3LyZWdq2wbKkYfm49itqUKwndTx1fC8xdMSdACeYbgEu",
  "key25": "5SDuUG8DRXjRT2jYMMkyGbPpq4SoNpCSSQ5RNj4G6PEeMvDN4EHF7Hm9nxLNKNGZPYB75dvEhBFCTcnkurRneiqB",
  "key26": "2rDLcNXCscEnwNkPaBoefREutCuyqqvgmWzQwfam8DEHGsZSfQ3ebdFornmVoyyChXUKcrwuCV8VEJeiofVrhAXw",
  "key27": "3d9QppgtyL6YhpU5zmDiVoGJLf5aB8X6T4RG2ccV8P42ra9R1rTJxwzmeiEwVExRvUVnrjdpofQLt6ZtfJm6PYnj",
  "key28": "2hMwuNNYzSnhhwLck9c5Vi1kQkvqtekdgijxSEYbC2DEQURsb2ukHs6NHcFi2nzPeuu9BneHnBSFZqytNL5esjfQ",
  "key29": "3gLW2KC9Hhnp9UZmJEaDHpjMv3kwboVjnmoom2ZkVuPFUvmmsroVqP2FR9jwW1Yc1Q3JAcZhemXrEUtN9SW7oTzw"
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
