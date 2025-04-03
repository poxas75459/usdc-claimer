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
    "4ZsxjpRfpQqvzYWukXUyv2itxGsV5LqF3b3W3pMvv2WHjE9CN4LPQXyeRhgFYFw26jMxXpsWcJpX57RmwREJzDKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21P5qCApgGMVZHwzDna96u1fqCar1RiaWKcxisC4TtpZCDbmrunkxj9NSFrLhPkDWKPrLdVuxqXTneCTm5BMc3oy",
  "key1": "iLPX3uzAUvGaUh1jVVUSihXAGwMEGJHNfj7rmi3gMmrcWLEhjP8ULXh7Qsnn82b96xksiSMzwEhBK5BRtBsWgUb",
  "key2": "5K8CkJf5mnPHw5RLhXRmV1J4GAz6j53QbueUxyp6wiJ59QJUUZkEGamsZPZqjL8Pv8qXJGNxqyqHYUwgGc1aCH42",
  "key3": "z22GqEg6STP3whU1NTbMdTEXoYjLMYXTwTy6CkJUEGA2iRJ36pMr3N83VWRhdLkAGFS9gbToNZbA8KVgFehgXME",
  "key4": "47Cx8KisiFx9LLZm367GsFbAiV89FAqtBkFCFYTf1rJZG7Grf7NuEkTThhdijmcvJcYmEszkfHdzDUDJVdDeRz36",
  "key5": "5B76jM6GytNFVDsGVnnFsxqoUNpW9gzoQgrB2zNPeZrc8bdY5vDmVjGeFEYwgUG6wsBwR3VxKfVEuKNs8KruWwCc",
  "key6": "5wa9i9usDkiW2qELQMw8s7i8URKM5RGxWhBGfNi2JBD7bQn1XhNFnALdA9UQERnqHNJhssyroY5LAubd1d2HwaPs",
  "key7": "27tyezr6kRuCt4EUTHyrgiJDmhKoMXz8jraZmHRVLu7JpwFsxZshCADCmA2UNoacAKi55dyoXnfZZECQK9Pq2uGk",
  "key8": "3bxMcxkMtj5ZoeAWWaqawHfXz4KgCk3z6C6cd7r8fhxFBbH46D4DbWVNCwiEnZcobDcV9Yi8qs14ptiytQTDGBqi",
  "key9": "242fzXyRoGRtTXY5bQQ3R28iddkUQHh1wV91JxyNehcAAYHpKnCnoyPXsq564M2Tzctv7jfHr6ju6GyLsJhUByVR",
  "key10": "42GjveW5cxFHK5BLQdJPsU83aPRH9evkiXUCDVWL3pjjMB6CwCeeUgt2B4BoBhfEJgCZzuiyS56w61SyoRB8PfNG",
  "key11": "3Dsukq5CVxpB9fGqNKd9aQu9Sr6MkucfaMjDjSpzLPQBxxKHdua87eyjWkoqsQJ3pfcEYtPX9kzaNhcvkUKk6yyQ",
  "key12": "3vKmCenWBaXyCc1hpLSh3YNRtra3DvfNgYwY1DpA16o3Yd9cnGNZmjZ3C4nKGjeQSNtWpVc2Yii7rGZDFyG8yXXK",
  "key13": "3RS9Z52BZk1Q6bFXeTjzkhCu7M73WdVAEnNfNo915qQXZ7w8XTTfwZ2oCJwF15RMm4EBGxNNTB17Zcs1ynf3Vqzd",
  "key14": "2imqGAQoQBdvT4Mpr84Z3CHPdbfzru45McpgYV2Ta9Hr7LaKjJNpEraK1T8VcuRaC9scaCS6xSP1d6uNpTdJMNp6",
  "key15": "2otYvGzG44wWeLe9Xy7JVzD3X1u73GsWFPvzWmFLSiCrLGZFvwy1vZ5RC7nSBoZGYYB5JUat1KAfqr8zSJCJpigj",
  "key16": "2u3SPhf83u9enAnhYF3yMdp5tjaxosRWBCYRdLKyeYVK1z57hRaCG5LQZp3NwYyrhSDi3efcZ1T7QcHHbkUQXPv6",
  "key17": "54f28oyv6cs4cbdwjE7pFu8ApjB41xz29znHmgbEBKUceuYKiVWS5GEPMU6PC8ijG4a46gNY3Jb1qfeoRkWWuvDw",
  "key18": "4MMC9ze7wYKLKsfuP4F2VTM25bcrZ7ji6EjQqRMPqThF25stMbcQVD9hRa7xgJpykVnkqKqMx1WVGBdtkzH17Ayr",
  "key19": "5f1V3DG5PwyiHAjuJ4PW1ErKFsKcccF8WbvTY68VFuH27T4U7d82j31uzVvfy47Lwe6d4mP5EeStdG7eA9mfmjpU",
  "key20": "5UiGABy86TNRdD1zu7fSkhKvKmiqzpT31Y5GB2gNnw3CodCqhxcDjaimvyQYBEfjbvGzHHJDUUiksXYx9y1PXfwe",
  "key21": "2Xjt3vnCaDXVLn2bcepV7oXBhUku4fHLm9kqx6gdJdjqAATD7u67RpTNkryQ3Hp9zycTT9ziw3PXAGBAKkeiYW6u",
  "key22": "2WLwpyPBWcEx8bb9iJ1FRweVbRrmn8HoMGbAWiSUZmCymYyA6H1Jz5gaU1ZSxjg1X7wL2u9zHms549bdENTYEmCQ",
  "key23": "63FEZDHZhSBavq5UEj3ywndfrShz9u668vNgadTWuGsjbHy6KbKk7ZJ699Eh6KXnAj8hZnuUgsVynPd7Pp46zgQA",
  "key24": "5dM1aaxCuQwXtZc85b8CYbFzs48fqWETHPQH3Fxa5ibqRBqvV2Y9FumTzP2NUpixho26bkYjR3yuXxkiyQU9KKT3",
  "key25": "52pHX8BSNnkhDkseX6eYzeFQQS4WWZ6YkZFVXfF4Ufq9dCPabvWYPxspdRumPU9wkTL7BotfCDCHXzr4r171QnFJ",
  "key26": "4fP9yLqE4T6jkdTiQbBpLVSPH7mWBth9BNb1eMyS2NFGdCuWXpjkguHpUvMcLyxyFhGggYqRYvxgYfcD3SaTAqYd",
  "key27": "2TyK1GMTQRpMaD6bD1cJSJgSmGSUJbPNHWaVj1CoBUFpEL1mxGNggTtWrJrq61xtkwbBJsWKb6Fu6hWfAPzvNEJK",
  "key28": "2ioQERbfVZSPokekPHnrVaTbgXGG6auj2oxifRskdPNkZyteH6LLvvUdSGxFBmmXvs4LEnH6BXSBETTEY8BnpfGx",
  "key29": "3QewxWEwn2SZwjNaDZ6oXQ2hkRzXsQVB8FZzb1cGLzGUGwCkUBdSyn9gpQHUCtncNNAUD89DKtRTZ3LUfxWSwThQ",
  "key30": "2gTmZcYdM1bCB8UwacTcgeDxxisR6XwY1BAbeKbPJjfubP76UqtyD14nrRFJneo5btaEJq5CVe4zBkijAjibsMKo",
  "key31": "4uzineZUCzY76X171QU5hEDAmMCoAk2yeKEKF6EDr9e5Bj36YZ6bW8EEEySa4rCFiUvVvQF2WMT33Dpyx8WmCoHz",
  "key32": "35QBpW2cKfWbsYhLCeDnQcUQHmpG5R9XLtSJYXX6MCd7p5Jthtie4RSg7D5TsZrrefGjfSDWm7jaHTXVWSezBHEe",
  "key33": "2bTu58t5SZMMUMkrQHSBxXXE9dQy6znp6ZCY4wxA9gLSMeg4LykqgL2ytYXdHitXVEB5vxM55bXJEa4XqTLDGWgB",
  "key34": "5Xo2MhC2NnH6uxkLdTAR44Ekhoq2oPe4msyTS13ufSL5zwhnFoZDzWtYpFQgFwHy9pn46DJscAbo8rJLXhQa2q4s",
  "key35": "2VwwhFQJVQFEQMKhbJsnFeubzKBTWzKtb3KwSwqFSjGxQnPNTDKPZaQq12E1zHmn6sq3B9TzrjNcXM9EEpts18LV",
  "key36": "AUnQbUujy3H9UrsTwvd3bKSELUcwx4NEZi7CoqWq1U47QuN93CnDCeAtVmD6RT1NmceXA5uszV9ERgbpbvYJykU",
  "key37": "4N9EKhPcyLhzhTbFgJNoM6SA7JEPkAdqfPgDurpPTteCXPMDGiabhmp8pY5k46R89oELMGMeKTrLpoae9YBLAmaU",
  "key38": "wCVXVaTERoHeeG2BDqmCK2Luiti6rM9tcNQjxZHfnhySMMgCKfSEg1gJa4LUZsEk8GszjtXo6dBK7UeWC3i24au"
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
