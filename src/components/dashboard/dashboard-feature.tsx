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
    "2vhdUbFDBpqmLW5XxQWjqqE7B5scszwA553h6MNggKXnjXr1Kyh7EPNQHtCvkMo2nR16Rsyujqv4fhPKuq1YuSfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dDZSCHpnBRbUpYbNttua8yieqA1fuXy3VxW5ZNdW776pdPzRGd6QGrMc6PCsqS92yuDMYSGKvcyc7zoUx4V9bXA",
  "key1": "2pZfohhorV4SuwD7YydgsdghLExPQKrTcUxw4s6ksPJJHTz3Ai5k4nSE4GtAGDk5tQwoMzgbnso8sctiePR2CqBq",
  "key2": "5zjj4r6oU8FAiKzeuedJccHwo6FPtPeevnaaY2rNXf4i2XAw4NChyBiKtiNoU8k6nAQJzAr9m41TRmtrLdHsnLxa",
  "key3": "4pQTx3Fc4XNnXFvWqA6uR45EFbEvxuKrjoNP1pFkefTHA84spr2HyeiknDbTYLJf6UxmhkZ8eqVLj3czQpz4kSfw",
  "key4": "2NXxT8rpnjBoH4AQ3mZUqh6dvLsR7EVCqdZWFBguKHSrjRM8dq5GKVwzYLj9mJDjC7svxipiYr9x7DCQwywZAW2n",
  "key5": "3JyPC5SmgnDS13a7BXo7GuXGRYCg5tzyNEVFKjKGXfApXPQaFtMsRfLrBB48tVYiW7U3XbuHhmSx18XNgnQiWhJ7",
  "key6": "MsC7PBXGcJrMd6ZMZTNaSi2PGPNafWstpq7ocwM9XRYd5pdKrjCmRCwjvqNbKawJ3kN81meRbJd9Qu3QXQDMk6T",
  "key7": "4ij52sRjw5R7k4nj3R4ZVH7FxEQpjjigL16ipwniCme3LtPQWMFSFLTh6GX5riwJgYUZdK2GHwJbyL4E2iVqKaTN",
  "key8": "21uxJTrxWRXiL4Mf5KydbxbLTKTzgnD3DpcMEDxjXnXfWHy1sZHY3K1u9cBpk8r6N1UEv8sDtj79e5EYkZ7xBpdJ",
  "key9": "5uR2QXg7khu9XGAzKr4SKhE2aUEnsi9JL2S4ExTh1PxwrNGXXKeFPanjyoXHihbkw2xDvupn4Bbz9YHzKn6tyM2o",
  "key10": "3Pa4CkkA53mbZAj4Y268R2w2vm5JFXmM41M3MbwFE2d9bSZsZy8PfwyFUAhkWFCtBh6AdVvjSNRTbKFcWatDLX2d",
  "key11": "3rPput87v1dd3y3Skege1wrDwxjmXYaj3qnCgTSxL3g6isyNZS7Zz33BmfdLs4AEgW7BDg3ewJZwGpffQuZQ7hFV",
  "key12": "2GKPzGD1cVvjxGD3nnK2vPhX1F8pnPNtky9HRLppaJvHN8k66KPfLiP2HxF24XcXV28GZeukM54ZTFVtcCjNyiDh",
  "key13": "2oco3PN9dwMyXFDNGbcHf2fUSLnfERFAyQGbEKXNi649A5BJ9nG5qCm4i9DGvEVQvf7H164zjm8gtKYAnxc2pJnP",
  "key14": "5ZMr39qaap74hAY3TAXK5Snnkyi1m1rW9PKqzeuVWyXiUhnR7ZBdqJan26Fk2xq5Fw1wfjMtjEXKWbMt6f2CbQaf",
  "key15": "2SSUBG82Lm8NGt6RMjyVBG1pgvbtN3FaKNMMSDRJuqdroYqyEqeVYqaqVuhRB9udtb3qiAWAGpuq7932r6anLuyB",
  "key16": "2eg2SM678ne5mvRbaors5Wv7BxiwV8fT2Hz1nZ7ATmN14ihsT7Jt31ofUSQwcT5fFJp14nzxc9sUDbWUm8zMDWwJ",
  "key17": "2uRAERXfG1n1E47iZBFZjZ4W8wDwJWbdCxEP7VD7cMskoCwKLKMZGrnhK1sDumWL3FqyNL3MweetQV49yY3znPFe",
  "key18": "2FSowKsUL1r4p9CuqP1VS3eRBhXV2yxmdDMpiX4nwAt1wwc2q3bGvriA1YRk5yj1VWES6NjGxFCFNfE7MLQQnaHo",
  "key19": "3kQVHA391gUKidsxAu44eMCHtGmDX93kspzgQBaqMKcyBGq75uETd7okKTMnD1a5G5ESAJ6j2PjwUmRcRn6sp8Fb",
  "key20": "4NEn2Rfcf7wU4oL1jz1Juy6ZYkXiLSJuspPmJTaD7VY8zvUnsNeej3WZtjEqdPaYA9wGeCzpRciAGD4yoAwo5r22",
  "key21": "4qzoJBMdN6S4USnAfKPYaKFbeRGzARNg8shRJBMWMKVdPwyMBfUWELwL7yL3VShbDF8eSqjpAGCHpgowHuDZc8gv",
  "key22": "538DfHHMUHuiZbhTLq6bQ7EAnUkd8ivGdkuarRwLHdBZRi4Zkv48Cioj5YQJvSS2TLWvv4jNAHCMmXSTcBTM32hB",
  "key23": "3i569k43g7J2cHr6Rme7xPk6u8fQYbbaeYnRpGswmn4y8X2GkQjq1i6SVHrctuKkHcFv6Jtsx7ACUQrL2HmenbHs",
  "key24": "5MFw2NfzTMxc2fgfXd76P4bMgZXsaGHUCctFELDMBWokPmrMiSdtu56Vp5MG7eruGPZVyRWP1oEohvezF7HzKHDE",
  "key25": "58SJKUGtpV7wgs6ZcebeZWEsxvKBcvVU6A2P7agitwnk49rSQPCn3kafdJZujoYpghbKR1hZMc3pTjGYVBmvvGHC",
  "key26": "5vEZT6dnQSnJ1CuNDoxS1yeQnLvBFM32qD2mH6PUrG3f13VViGbcSh28qccbB9VEsyXw5YMwBko3tYUUskFKJ5sp",
  "key27": "4wvFTKtCwVVzckfhNPLqM8jNMrmveq4Ftx1og5N5znZUrPjaDj7GScZpDVAV6zW3VWphqq7rtTG6GfA5GxCZYMXr",
  "key28": "39TrKh8z8coAhAtrLsUiHWE527f1LPnhp1LNad2XtDiYhn9zrmJpYPpHqsgcFpyhNJ7xJpX4LzzgEz94PpyS4Vu8",
  "key29": "5Jt74wWYriZb2j8fPtJFEh615gqJ8JuB45Gk2i5PqXxYM85Mso3oFW49G2d6CD1eMPLZr6huvLFiTFWgBfBcyGre",
  "key30": "4F9i4wrvgBSXJPjjU9Yoc7GL2vHVuTbnnYAzMNtvjy1ySQ7JV58xyisEyzR8Qk7aZP1ZGqdjGwePAWVjsAYwCPp2",
  "key31": "exH31EEkehnTqNSfb3ZFuGNdUy8kpYaZmRQw8HXYYu13qzicC73D5qiiTP4gFnBBNRFiw8g6hTcurEdj2H77EUD",
  "key32": "2qfC6MKtqZa9PYyKhxLdt7xeU8dfaQMSWHcVshopfTBioKCC94zJTXCKrDBv8dhg2y5cuvFuHzEZ94gcSHSFjYu8",
  "key33": "53CmxfQ9HVbWx8kMuvUnLzfQgYEuL4JMgf9w1XPk5p3ptC4pLBZY4mRChKKCegHphxEPiWcQUo3KR9oKfTfGDfi",
  "key34": "663WJP1dH1RCXGgz79rWAghgF3rg5nc6zgHjbeeAQJqMmdkg7g8fbjDS1xXbhcgT4ZPhseVYJi2Fnbr4p35ZH5xg",
  "key35": "eHUD2KuJZ6wdhH1J3E1DdtMihCQCCpybdpoycjjRP9TZTn2yYvyFduXZQtvFygpmz1dr8hVHETZAnNBLypZctjM",
  "key36": "2gTQRxLCzts8U3a1qE42HoUuqRgsb5TNdvivrkVwFzywyAaCpU4JKQ7wpg4QPztJe7k7vFTJ7xS4bkdMZrNvWnHQ",
  "key37": "3HsvyEC6tDUEaVGFwmkbQbXaSbDwsYUqQVRbUBN1sDoRpuegWzUDijjFPuzRshygjjN1exJ65qycpSDG2TQAXkLj",
  "key38": "3Pbiwd64WMwNBYAXeaozRhXpXX3oydkcq9pt3pSG4yCiFWxG1xoPptZy7cyVmTvX7ZUmbF5isNCZFpS7tWC2QKyc",
  "key39": "43CXj7cJdCNtFQGDEUm1dEAPLh23Ypa5EYxRfsY5nymhvkkPQexY7JsJLNYJww7ukgGFnpMUXVR4pWBxzoig2kvp",
  "key40": "5U7WwjWoN8hG5pErAcBAK7bxCRZ7x4oFe37KpyrHvp7zKJ6qkJVr8b4y2Vn7357bM61D1agfvL7XY3c7jXBZAQjs",
  "key41": "3BuUMZQoNoNci6vGtd9WDK4V6Tk21hPmiaiuvLBMYmeHN8Jb2sffX2NM3EnstjJ7wZjCNXohNcZKWXMo4YGkBicx",
  "key42": "5f212QTAxND4otqPwVQ5kCjoHQQbLMVWCXrqEuNUhgRx2oxrfijEm8UYHBCntiC5CXMaFJwAya1pwss9Dih9MwTk",
  "key43": "5S36pxnh9uZcCFhCs1SRr4qA88hbz82vpfXeWt5jy1eUyFZ6XhFswfpS9CkNYonSUwito8P5qk69itjdjtNGEfD2"
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
