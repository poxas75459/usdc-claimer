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
    "22WSh8cA9sRXJcSEN6i6C7JMXQuNGGxbQf11ZFMp9SiGwUsqpmC571wvJ1azt5Xd1BTUFz5x1nrMWdMzFxu6hUhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RGshM7tzen8BakF5Mt2Jmx6opvKwybuM6iSVopGvfaRpcsmjWSF59yCnu6AegPkU7pkZRNNu3DhuVtsmiRu2vr",
  "key1": "4zHRSXrvYFEMeoZg7kaioB6g43ZHsaejEBV8tG7kCu1aHEwVAcRqYCgNszuJhXRb41LF1jYTVJg17zq1okHmbwSq",
  "key2": "5dEg7e6wvoS8s1U1SMeWnbWNVmjW13yHChFFdSpY2YfVHvEyo4h7meaXLTaFwkbNpNGSXaPv6zuy82RqH7AoTwEd",
  "key3": "2EnRnLzj21YKJQhUZGtFF96187vfUaj8ZXxQtA9HZKpQTSGwNsHPxSNYSqinE5q75EBe8EzgLMNbdvK4xDF5LAyV",
  "key4": "4SESQARQEfHGG7i7fQNKqkmeJcQXZLLBuAyXpjDoVLr78UojtzwCenzkQAADTu3zcYGiaHxEugYXQoH7EuZQNsgL",
  "key5": "2rYDgpT3f5QsVZmnAGa3P3hEXc9VtA2ygeatycnmuKn3bEpKTwgrW7MGxEP2ZGG75TSg4FsS7Dv3chKNUk3uh3if",
  "key6": "5wjTBQMjhGBLWu5QzFBWGjmE8RZsBRJ6hQ89jkNGA6q2BFUNWCqpzJn8hCyF7MDi46woPhwHjrAjj3QNeNY9djkk",
  "key7": "3qMH2aq3n4LzjtsQacrFu3xEfWgTGNbJEYouDUDet4hKaqgpmgJUHzpxYDXWf1XViigxFVrCk22uA2jYMgFkD6sF",
  "key8": "4LLBoHDyGSz3pGoCxrfRSiZBPGwrHAnARAknqJcExM6KNeoQ4dwhe5kMYeXY4ybfBPJ4gmETkLXa2uDPztg84faM",
  "key9": "51gfNw8ZkLYMNRXWpdeqByU83JvCBy9J5Hc5GRKuU3xRp9nem7ruLoJf26tz9UX63DFFsNGqNAXuokKXTnU88o21",
  "key10": "2rTYFzBDGaJznxaKR5bREJZ7sdEwQhWDw5vpipVxo3KaxQJfowkmRWbBisw2DWQZ2haFLQ42tZCXzPGPa8fVSVwt",
  "key11": "2mzRezDnohp1SpcPLGGDgPUKf1Vnma6QL3mCN7EWSfM6ywRmRwgAq3h3g2xje1Lvh2Q6JHWAQoPM55iRTqYDudK",
  "key12": "f6oTFzwbMf3cL3wm3p9qpzXA6Rn73ETz8mB21jzKP8JrXSuGvAH49GgBzFZTMTntxBTewc29KjcKfXdETNReJ5Q",
  "key13": "5NqADdd9woLzNickU8z6YFPTk73zDvYJc5dS6w6XAZ18r8rHH4iYWFjsaf8ykQcwmFehd1CsC4CATWEj384uFEiR",
  "key14": "3gRCLa4iR3sMWZA1gfQPn9qqFfB1ow9X9P9nPBbDFC9734pUS22Xoippb7tAQW4zUJaDZdanJBqKjTc8e1jU3FW1",
  "key15": "5HtG2V5bjgFSUzX8sP57cGELsBAUMCGrthxbkkvZF7sWqMsNjNbYnPKqPiEBpmw6pjmahkHF3z7UAkngCzJiV1dU",
  "key16": "4fgznMafYUvKC8c9L4XYSYvB5At4rJffKfaAPZ3EFXvm3haG1Cmnn682CK6NxsaeNFf1C2tTME99BPsnit1B4rr6",
  "key17": "64kPW6Ht9QS3ctVunnDsSPyjQZLW9hkxpX8TVtFRhMbQ38Zsi9zQRXYcWbkgqFZh4UsorPQ13Pwu4TjVM33dUDAL",
  "key18": "2zGuTjtqnL2SiCWk7rrbBbpdoHzDoiqaLGHutyYcN5fPe7Njo4yCAdB9Lh4wtPPSuLVS2Qn61J5gxGSnpk4W3JvB",
  "key19": "3SCnq7hqd6Rqrw2QMtzAHQJGYhvggGduRN9Dy8rVjCokjxRjJ7zmM1rJmwA2b7JcWGDmLFx7UCZb7KRLQaQDb6eo",
  "key20": "eQ7BQ66nXY8g4qWP33JNns2k8iRey6oWxVYgUCFKuXw23rFL12oCJ61BTxSk3WZkGz4BxLtgHYPM6cL1kg6YXun",
  "key21": "31F8vekm5ht3NfdTfqGkTVhE2ixXrxMwshvcjN8QhdJrGxRwV4pxVBCzxJmRF5iRX1rywCYVz9qzk3mqYspAjoae",
  "key22": "36LrBhovincW4KxESjXMHFcFxXpP2ABqCmW4qXcpSTMLrHCRqXKk3q8G5Co8NeUDTDyH8Hp2RTgcVUgbqYVLXTXs",
  "key23": "3MNtpPgEUPWLhHQD3ZhVp9gm8MxuvBSwH28aazgissjc2qma29Ye8jX9Q72CojzgdogfMEUqEZAxhajFPMaxbPXD",
  "key24": "4jEP1j32esxT7WuWUwmM2jKd5kj7GatB3isbYr3MDgpSqYMucXYwH2P9iaRXBA7vQgL1cBspMXabVeF434acEAWd",
  "key25": "n4vrDD9jSHv6Gq85kEG1Dza4Ao9nb7MnhgkSxC7x4ZTQYWkyD3ZMG4U4cY6rvDFYLUcBt1iAbk13ky37Z2yjcfE",
  "key26": "37SuAFATxeLrpdbLyQq6xSFJv6kXvwBZHcWvTAN5G3ibHAd6LsfebuPEeSvoAb3caWovaS6fL1MLZs2A9aDqaUZL",
  "key27": "47nFab5nrYa1Gs3wzjnnPUuC31nqCKVcQJGQNQiXXDL72o7RNXb1zSHSoQLv5qmakug2eiPzyWuBYjV1cwAPWHud",
  "key28": "2zCrkWX2dPjeZTonDbUqGVqZWDuFob13qXrwFvTqVDcD36H8K9rRYPQqwe4G5VaYy2XQibPBF6qSxkWeMyNd4mEi",
  "key29": "ffeY9nEUMKmofhwLmvSZAZxoHQQgzdEJtbCR1xWyxgkzKk2FLYjhX6oieYY9Af163RQM2PwUPnRkHXGs6GEhqce",
  "key30": "3ZgWRBhAv6f2QEV9zB3jqtWv61heCjvQ4rBi3nbvxBQwg6VusNbuEkq6DxFTCxGPkR9AjX5G4cRGaJDGNpoFrhsu",
  "key31": "26w77npV15XmoPwrjAAGvD2Zcf7Y5AVdvAs1xcwSZMA3baBuu1vnvcYSeVxfVHVp9MwLcrfQBdPe2waXRr8LzL3u",
  "key32": "3wuS848CgZNTYjrBZc2QcK4B3XGDAzJoVKsuFGafuajLDaYTsTWsgvbpQ1YLgLokp8rDKGfRdihq7UHcv6syDZHh",
  "key33": "4jXxAu62iRpAWwVL9WuW7SbsTV8fxtLFvmuDi6SGcSZz29pH6uxdNFqPMZPwopuFVoH3oVsyv6ii9u6kocnXEgLL",
  "key34": "2sMz6XeUeyaW5Tjy9FXf15EbFXgDxT3MLCUk3uNdAD6Sm7Qi4UBSZqsNoJBAJhSAu3vqs3d5bogZXJVmLUfw4T13",
  "key35": "gVGd1Tq2y5ScTypSyN1iuAfTprZfwXCGiWmtQ7E1URMqRV1ispch4Wvk7zB1KHoCguFqEb1S5uTe3mX8N7fDM29",
  "key36": "3zDUviQM7a29RBvKBKWNcrjMZjVpekTuFApBq5hGbFmXMzbmB7uKpi694uWFtS9GsMgwBrHKC4pH1CjmoMLfsgu7",
  "key37": "2QbHmCtYvWxabb3Kv9nWbwVWJKSZ5YpTYLcPMb8YE6AfN3LjFNRstc6ntRWiXawwWu9RPAEMfHiSQYyLcXR75N4M",
  "key38": "2JL5fiA4w86txiv2oZz7QCx2CEPBw9doyoXW24uioLZctTR2bp5YGgHBgQpM4YwKmvRQ7wnYV4xzb7S2QhEHQjPy",
  "key39": "2WvhJr9aDHxPNvB6CScRYCkNL21N3sA9HYRh1utELAhafZeNM6aj956o1iHFHbL8LCL9XuDK336f5ZrK56AXFoMZ",
  "key40": "5SdV5x1BxeCK6nDQcm8CT1wVQdWEDNWYij4wVcPLmTEBMoHskwEqukkQDbqQybSBhNkvM27ByRBe6WsMdJ3VRji8",
  "key41": "5EJsDYAvhxMeEcW1CaaTepLGvDL51sqzMGmq96q7RU4NK41rmpCkVAjHrZi3NjbShgQ7ttk1W6MFA3btJA3i1RYt"
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
