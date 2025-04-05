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
    "2rdYq1Y72ptvWL1E4vJQW7W3KzuExRoEGYu6xx76fsQaPBR1uh6xUXshiGk6Fhum6vyufeTUrmfDcVjR4Z3gdT6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYVHrxEtXXWWKuo1iJmS6Yuc4uqHbNHR7FJii4x5UyEffCNxZiSqtEvUU9DQpCcR7ezidWKCGA5V4LS6zgyZFdh",
  "key1": "y7GvxtPZza8zTPY3RnAM1NtR8zRdcneRo5Jc5iexN8L6CS7dP8X67PaVygTFWTYtSSNJciRRTrZKMr2JKVtM5Tt",
  "key2": "SU9R7YZK7XRFAAaSMZknBE1dBkaPM1gEPYu6CPqvXRaEjdS3eopVPU3Edat93R8v6FtDBKiYf4McGf4Ni7dHWEs",
  "key3": "485dd4UsTFYZ5C3nURSpNDgEh8sWssn4Q8njUT4Tt3th6gyDvWEJQNTDUg2sagAuAK2wJCvNiE38nVbyYDtHVStR",
  "key4": "S5YutbQmBPqNDZ31xDx4fBs3NqtMVdNLBpxNXYPRx7S7Grhg7E4gt1ynQtC1s5rg29rLtQTgALW7JXFeNMptsr8",
  "key5": "FY8qpV2e2dJEPBdU3fkuw2zE5TbyTF4yCzVowPDjtcwczGYZzGRu1kRnvqduTUkm1rMEQiwNRz44FAJoJCUBj1L",
  "key6": "3yDGDCoBbHYp44CRR8Yj431vEQXzCxi5WQfp9Bo2G7KmqZfLf3eWhAywoj2iVKTVGoExmNMFJweDx7jaJq6GzXbR",
  "key7": "7hQYghy4F3JYm9CHuwXURiWwabC5ohQfW3gz7tp55if6Rd5mupogHxrEddGHwem5CzPLAXC5Mgad2YWxAr6nKWz",
  "key8": "k3VNzS7DrRGYeQnpyuqbwHLrvCDvuko9sxqp5nuBoDoaQtE3yTaXHt7VNJBst4ipHntgxomvxoMVQGcXe4ZXF8v",
  "key9": "2oK6TaS31bMWZt3qfioBRa1yb3HeKyhzCTNFBPYZQRp6Ca37e8y3nKbAHUwdvtKX7pTS4ZpsC9WRdvE64CVmddgQ",
  "key10": "2jruFa8SfhithEZxEhhAVEWy9Kv2wcXX81ZhZLWGDAp7Ebd3efUrC9yoqYpNgspcCcWj5PcuRudoeGP3pLFfCPz3",
  "key11": "46vbLBH1fBNz82RZvKP4SuZiTQZvCfEGf5pdmjoQxDch4K3ofunM85EHcLSPRaf7CLVQH78JrwPX3cH75mYTew8n",
  "key12": "4nWnpWeJZHwMRY9uWgr7eWsP41euSMSRy7bBajpTYKeAr6i5jvr5oLqiEnQkUfLniJQ8c6UhpTKs2NPEXrVed2i",
  "key13": "HNwHJQYLv9xSwncFDUqUYpxH6o524dSAZ2duqEheA4caqDZTDEhCuXY8JSXitpmePz1w3cQSFimnpa98XuWQShS",
  "key14": "5JH1w2633RRdp3HHFrpG84MZB4GYMW4qybnfo1B7pFD6YooPNq4rgkvs4pcxAG8gfHgtJnm7cjpSwHYPxmFFPU7p",
  "key15": "489UD8X7UPn37GHfacgXxq2hYoxw6T99LvAnTeFZ2U7ZvHUckMwTkPV37fYZiQ1q1561GdJJumtGFhehpnU9Hkx5",
  "key16": "SDS5SvxeJ1foD7uVvz4KCaxGTm3cMVsJ6z3PyVLwiJovYTU9v2mxeivS2fAy25y5PK28n6XxqHGoT1qJrkhSqJL",
  "key17": "4N3Uy44S3MUpLRJqxadUuaN5MhHY17th19f1wnRFD7rxx5N7nSr9iD5xHaJGBuEgTermWXxp9o9fdpA6yRzvhMTq",
  "key18": "5i9sdBjFhhRgQe5hogPXMmMCnYAGNY6gmmXsfNFhKeRqZiLtMW6AePpxvYg8n47Db4XkQvrwjd7vZw63GMp4opka",
  "key19": "5ZdApNUp79KDAwMuV52t5qo4avBkXxmdofLwBK6hmbn7P8jh2rAREwqnz69mZLygn4Y9zkaiv7MFpygR8XSXfUn3",
  "key20": "5tGuZZ7zyCCbCFLfebjsPPqc2AGHnRY7bTUJiWD5swJT5ppQ9rxgtrJsRfy7DnAoj5qMwyhxCdvDRLfVZK8P5Fee",
  "key21": "21BXEZtvHiwAPLVdNzuR8jVJF17ziG3tLUKF64zSvGpSQb1X6fhaC11PF3iDmmQBTMYskYsjwPMH6UmedgGRWgdk",
  "key22": "2RLTQzUTuYdvNDoNBVsP3W6LhUQRACnz695FXYciJWUM6LGjGZGLGZGXbni9shWSfDdBwFefSztmwmyKopAtp9P3",
  "key23": "2nnytvSCFsA6yEoPpC9jZpvjfX4v3EsP5ZcrZqjD6hj2ht4b3HFD4oqgJqpFWUr276LTX8UEAPrYZp3sBjhXuWZR",
  "key24": "54s6o1BDuGnx1ANgNJN9EDSXzhjeVo369BTjFSpPoj5z9oPwNSnfboNUfeoBSxmgZaD6dyX1CV1gmkT1Ki3jCNLm",
  "key25": "4dNR1sJYZ7ZhoDPajpnCJJ1dSafhcxPA3AtAWetvuDHm6vjt9X5jN7mQouSDBpK4wzJyPdG7aDRQTkRRg45cRitc",
  "key26": "2CSPLmBhp55xh6J8RzNSossA4WHpRKNXasyyiP75SURxYtTG9oYpq3qdsuHHCda8cc7KfAPWptYZiGK2cFAtq5GA",
  "key27": "36inngfUtGyKWuuaeJpkY37M8GuC92gWS9oVFbjWsmyi1Zst5xkyPrc43dSo5hhqNPhyfqSzyfJFq9efQ8xq8bsL",
  "key28": "44aL2AaeK5fJLtoiGw1hYR9MS9JsbYhBsp48Q5qdjZK8Pk8VBG7V9rWtr7YafmAJM1FBikd6kP6EnJnMRuJh1DjX",
  "key29": "4e2B4WVMbeudhQ774dfWKZFjxFDtbGiHNVqRFWafb4AmZLmyqSb8JG8phibXW6Rkzf9y4qeQwGXCB56D7BovH6U6",
  "key30": "2piFLGMy4vzXKZGK68mxUyhTKouhgHYbfYcbQpeQ3LYYToLgFtQGvWxj7NNxSy9AqWyj9hhnrqJB3FD1fjFgEVFB",
  "key31": "58D8UcHSHLJisJUeX5AHSzC74YWDNUzQQTmjrbnj9ut5v2ibdBdxAmgFiLXoUrdRszvm8BGLsn9rFpjQLdjxC8oD",
  "key32": "2xKXmB4rUBmPAFeNMzjyLhyzLgem4GKtn8z4kqwWLz7Gg3c1fQ6Dj6Sv7zGKF6doJhoeHhdj3PrvtZMEjjbMhPUV",
  "key33": "2fvFKmz4SGiuDpV2gGXdkAW4Wrxi2Gkh5ZQag1VZBBqywCjFTN1nx6xRS1sn3Ar5BVXRHmVyU6zaT3p2VXimxswm",
  "key34": "337jpvxpEyqNYPxTcRMkW7FVS3FCFrAF8eAroLZjUn5gKegHMJA6pqf1nQAvxZppS3Mn9vcmiKnoEaTX2V19BuoG",
  "key35": "3h5mfb1rKa4SKAQqYtX25d3iDy7pNN8iTuYEXBxcQ3aXMo7cEnQgj3jULzjLMHSpTKuViqrhqGARVRHo1XPVUcsJ",
  "key36": "hWZS2GisAfvVuLNR8TYscDqgkWJy4ncicXZ2C74YZxQon6kRbkeLLpk89uyjLufLRBqLr6HDPQ9zaQpScxPiTxy",
  "key37": "4qWwFcnqPgGY1giA96BMqnmAx3BPbNmu3AmCBVR27hnKtUD5i3RBctazm7UWKeJ2oBhBznoTXuDy51ePCYNnWL8T",
  "key38": "26QLzXm7YNrm6dzBejC5J33xkUMU4ckqrbtrHPZxw4nG9dDhy4QzTktpBX3H33wZVEEYjtvCGjdMCEEY4yyLQGqf",
  "key39": "4YbzQD2vsp9rsjY3PjqQLLrxoRLYuitEQpaCpD4u4AH6gyBpnY7uEf9efCkvPVWYce9A5qrMmgEqN4P9t3FN3pnA",
  "key40": "2vNqVKWvaYh4Xiuazvp69YYJwvVZAHHCSd98QrBDjsmeS4aLp29MXgUStviJM9PH1RPdT5gi6pK8PnVxQbReMcKx",
  "key41": "27vTKM8sM7FwsS8933oDFCxA3A9KPxGxaNqsC8bFVsvTXFsLyZAE4Be95en1HxNe7dFAFHV23G4EpJtHoavR9mkv",
  "key42": "636gANcy9fnUfwDWXvv395tc8h6sGT1MdzCUcMzAwASW3grmnyf8ZuQzCM3GgMHp5M7oPu7zYFG27C2sR4HyhYFn",
  "key43": "MEbbbYvTrwncqjVVnp5wkiHAZh3WB3xQyUjskrn3yUjNbV5ueH6Acx325c2UDXA7kVcDQnVCb7BBVxr2Urhe3Z4"
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
