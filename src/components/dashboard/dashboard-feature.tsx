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
    "vhRu6GWADks8wvUjHQiYZg1zMDPkosdPQdioGB8zDHtB7FMcDizj7Wck8Z6xphqFyejmN9f5eqneYEVNLBupySU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pu9T1FaAeTnHZYLqzrgxDHepx2MxotFUPax15vb9ZdPoHdkVN6Nf8P1QKrjHQKQE1twdhqJu4oYusSabue2QAoi",
  "key1": "4P4zgC81fNkdYpQx3HFVsmmmHQY1NvzMdnXYystFtys6xbwRA89Sjfe19yoemSRihUYddvhbW4SS5VC9zwaL7AH9",
  "key2": "56ir9HVZPoF1WPUZeRf7HVagqf7QufcBzkGUJFeReFmi59Azff6rbHBR9pQaF2s2bHA6kdEV746R5GtMdaHhioCM",
  "key3": "51joYx4bCd6Zk3rQKSRykKd7vp4365WRjpUyiREVxtjb2rPf5YuJNwP8STXxiyYr6SGDANqJ8eP3LsR1Lu68asTu",
  "key4": "5nDXePzVZ1VeVJCgLQKvVGprz9sHASxe9GkzivtnUNEowjsGLpVcGgb9vaihEyFteVU3NcxnZ7Z3pFva7SMUBMTF",
  "key5": "Re51FQ98Jbj2uH1c3xrCMxgyLCKjArEW1bsGgASLbDCZGYSomKL3xYY8nwQrsdSvJyV2M3a2sV9zF8yEH7uptXi",
  "key6": "ywR49RzZ8SDSpjvtCK3WzB1ewJ1cC4QqjM35GHqTU8KTD2RFR3yWY6aKSSuM1vCec7tMkAaziiyVbnxRpcM38yB",
  "key7": "2Rfktr9vHw1A8uN7y5YB48uWSu3zj5ZQ54u9cob4wBi7xfvdKCKKK1p4rDmqEg4yymT3nwZe3rNGJt9FAgc4Ksb4",
  "key8": "62yWmLDqa6y89bQVBhYxfWQisGBMp7xef67zai2i5PTFjyncr2HoSeGGyEoXtGB7dXzBUHU3VYDCeipR4dTHyQPB",
  "key9": "W4WwXQYvRdAcw2dbc2Pf8QyjWtn1AmJu3T48zik75HTQRqSDvdedEmVfcL9iarBM2RaSL3s3DBeqykadCexstih",
  "key10": "2HKkbxRNTPQBJeekSLTWEQuwz15tw92AqW9muTMw9DZ8AL5T3i2wxGYKANVGrfbFcqFPnEU5VscHLyDYtbZPf1xW",
  "key11": "Z5PrGLRmMT7yLMvA2T4AgebP1KrkhHBC8GdPy8yxfiY1meYpYM31dJk8q15swpT3ALjmCZGkzLKZnaeFYCh9TiQ",
  "key12": "5aifuMkgCceCC2dR1DivsZbbuT6ZqmykFohxwH92hZktXhvKHjD6jHwrYuHpL7NWKAcbfDRWdxuo4wLLPoM9LprB",
  "key13": "59jidoaEcK8LhzWyj3TLqyVuCVBQ7jUURGPxzc89nRmbWpM6xN2gBDf9XHbvMKYaLuzcMZWuxgUs5un6grRDgtLi",
  "key14": "3zqzqCxFayRHVsDJHcjiK978g3u4nygwDXU18va8rKCvwJuKCU4srRQn3eXEopMt4UMP88Q6DrYmGGBcnWnLqaS9",
  "key15": "4fAqHiWiGVBApoCGjfzHTWoR59Jp7hfcgzQv2ZZ8ND6kC7jU5wUfDdSQRfJ88XMmVwso3vjiWbnp7Vjvm11JgqkB",
  "key16": "2Vi1FLzBH5uWezMyV2HvPeUMFAujMawVqzuzZNCKyyuGWYDpF4tryKoD1dVJeo8o9Y5FuaeMiVDdwN192hy58BKS",
  "key17": "25N4Uhu3qR5KJG5aZRSnpEQjvoUDCeztdR9toAi8xyT6Nsb9wSJp8gdnTR8fZKvdnPQg7yJXCBXXHb1oxr47ZzvS",
  "key18": "9doEeYm7U24EJLUgDdxEZJE9szQoYkhB9MfGhhHF8MUB6MUzgKBNTYjYJDRtqe5h53cSns2wCsrjUhKsAXkZym7",
  "key19": "25BDgLr3UME4EbVXUpM3Jn36WwULWjx7ukKfxjztLHFqgqV4vc7VXgAmmHPbkPSk8kxuwAbo6jgDeMdEtZfwpgUn",
  "key20": "kPWwSg1sKtj5NLJwy8viJwPo14G3bFuqMTVh4cHKdjnHTfDQfQFjA9Rmm8Qoeizw18taZtb5ykWvve1Qpe2a3t8",
  "key21": "4tDFiwGLoNJAraXvgL5KN5vinMo7tJG87vbz2nMUbTwaC4nTVsE6oN4CnFTrxrUVGMf3JTshkHohCMp5oZyh8ANZ",
  "key22": "3gkeLPZ7Xfmg1jqMkjkDM5hkdyZVvL6RQCTnWL83NPZUPe4ac9j6N8nDdpxACFyBo2FvYsd2NfavH3CW62QuFnrs",
  "key23": "46z35vhgR1SJskcikbuuLudSPVjGfsWDJuPhD1EFw1jgHwczVtf3ewENMVGZZt1TE1v1dAr3HW8eSACoAMuBcNpr",
  "key24": "4Q57thTcS9a3maYR2Z6RXLXDdyPH7eNPHV6ijaWMtmxyYwzj17uWHEt8jGYDhGHEegtL5nS4e7gcjTPzzQwbaZAb",
  "key25": "5kmFrpPLgNq3Hj8MUgKzctYGYCNCY49c5QxyhJsoJCrmFdbHRUbjFpKBUaDFxuztogsSa8RGHnSwTDvDiUvMQwgv",
  "key26": "m3mevsFSbyVE1D6wQpEVi3BRfj1okNxTbtnSsTvZfyNijZEjXYocAeqwXBo3DGs1LWvNHWZEH3Yp9mUyk8XomHj",
  "key27": "2fPANbesEENfLkGsXNjkHGYEkyg45ch2ktjbFpenqkv9HCZwqHko81FzmdEG9U8WdsuWBmeKiRULQTWuf8iPTYNF",
  "key28": "4fa7ZyXWM11GvjSf2EC8XjnqEuHrq9dYq45st4CLNuB6nUYk6DjP7YApZ8a6aFrAA6nyzy7UC1pQVTSf8dwmgVv2",
  "key29": "uUeQ6a7zgJS7Kb3iPz1CGKCQEs7tTVd3FrEd5hnmMrTkhJhW7StuKiH4yiwrfRks5443k4Tt3MJN79NpV2xT3WW"
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
