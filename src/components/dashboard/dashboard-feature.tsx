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
    "335d7VgnNwCZSd3NHQYSe78P7UDbVNRE4vZF9eJCrb3Q37Q7KctajEMb5cAXQ2whyTkMvKLbLeawvxXF9yYXxMpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kY7UEXcVFw1zjFGRN7QXLSn9To2mDDHatA878skWNrx1SgS9doPUZiepDDeYxzhgF9YU847zcHkThNvyyBcK8MC",
  "key1": "4QqjVNNsvZFbhMiX5wDzeEK2j2VUvW25wNC63AWpAYCXc2nFP4hVaPofwoaPgH9bmTjN3j29A2QFzzDrSxvnCmZN",
  "key2": "35EeTgqqXRwir9sVGLn5Cb1aocAZ2QMt4wGBjdKrGj4q6B5Tg1pwB9H6qGvnQFxuCE6kjEWLAgvSbHzgUgUk3Dv9",
  "key3": "2K3ZGhDZDJ5b36f7yZXW96HuNrC6esViX6zGZRjYZ5BrWUwagpkzgS9CWFW3yUrCw4vL8kgxbQMwRZXCP6gBdb5h",
  "key4": "2nCy6P2XWr5xnQfDRfw21CwuNQTZtGXS2vVsYwQbnU2e6GaX83v3UKWMC4vFXKZpb9oR5Lajsyvm72w5JYRWPEMS",
  "key5": "3tZmEo74u7A6i3nQtrTjSWDPxznaKtHeJkgXMRzdL2JmsS6o5soBH2M7ccwz9gYMCeph1xqZa3Vm2Bo8isekF2zS",
  "key6": "25q6oz4vC26djVPJDYM3Bw5f4t7RfTUbyAY51pqBF29xvvTJR9dzrWghyBE8dFCmoHvEnU7KGqRSHy6P5Md7RC4i",
  "key7": "5URAQ32N3LEZxHkB7ViR5dJjj9ucrG8ZUNwUF1Sr53UtwT3Jih8wWR7PR3etkRyZodUdw9vUFqi34K882rK1tw31",
  "key8": "486UJweYcJBHSpEHnfQ9jXKMc4Ua8e3UA2ZE7rzVtGD4t9cFXXoPScfvkQ7twjL7jA9VFDm5sPdAUqDeuTMvFRvN",
  "key9": "2C7u7Woo2GcrMpwysEJ1Tn5nh2DoAygVevMoJ45VeLPYviQ7rDo79dpei5mW21zkchA1jxXC2UP3MmWnJG27w465",
  "key10": "24KDtd77MTzgsVbFTVGiPwVCrtAwkZ4UpDEv5bgRW58pUHL8U8ZaP7YdVG3PZQB7Ac4JU76vVvnL5JCHZPmi3toa",
  "key11": "4EFirxsKfqjoNkqZUDng8EemwbFgWomo8khj8TeYf9F5h7ZbcKNvMJC9mkbPpxjvCmhMJFDAjq3FE75HYMkvPbV6",
  "key12": "5LN6jdULQiUj9ayEBaAMUmqxVyUPaTbAmTNS9qkK2yfSYb8jxqsMmMTAtsrHFDCZ9W1v1ta7QivCVx2LrFPdpBS6",
  "key13": "2icQ3naidLTS7GQpNEw9qCT6y554JCXGLdDpxJcWL763tLUrufKPjn66oxtGXGtvNRcvjepzD9gSkmhrcLXnT2ib",
  "key14": "443kR5mwBc2N7Z28RqPBPpHMVhijNggFea2DXx5Sb9riR1WQt9MJ7n1GCz35XefMKr6xvVpxpW4kdt1rseueVE8S",
  "key15": "51YAXcpNHVpHzj2d7zJCUsUEDgdRSUfvcQEV4sSXmvCJX9GYae3jWgcvavCWMoCdcrvnrdbA6sRPzKekEy1v6W6n",
  "key16": "kyPgAW4NqHAgU7Sms95WVxCMNAmd3AeyPXN9CcCb7NPPUoCDPh77Jt6oHYDcP8kwQNGX3SM8ro39e4jSFBLv3S1",
  "key17": "3KCoHFMpe146K9JzTkb74m7urDZoFa8m1PBuW3nEzDUBk3nUXWoaxTCucFgVakJQ3Tda5E9y5QFL5ou3dARKVvYB",
  "key18": "2bptN9xuLL6zUsb6fAkw1TiaSaSpogTMd2kodoEyyVrFxAiKNs41aBeC3a6gbVsqJBh3sUck8jKhewataoWAt1Yt",
  "key19": "3rUbWbMFuMKHjGAZLTqL4v8edqUD9XTmmLZiTJxQemLukG4renJHdjWw7aSDnZEDFPUsFPQt4ovL6FDkqYtzqfuH",
  "key20": "3hxDfCfMj7XrLiVafYPtr1Ad1VRWmsMJtc8WMmyn5fopMZntFo7qKf7kNBZa9ijqnVaSrV2QmjFqCvxyUZfmzgWE",
  "key21": "4yokayij17XZNKhfQvddnp6M9ADFddBV7uk5vcRPWCD46ELLk9HDLGhcjiRSedNCjMg3E6khMdPpwFSqC7aiA24j",
  "key22": "4B8Vhu4JiyXq4sBiX9ptqigQjeLbGe2kmaykiGCX5uXAdjqhbbzuJWaHfLzGrToRzFocBdLwU821FEUuyXv3zDd",
  "key23": "4evPHNgxqnUARxn7mFRACqv2szqDuSHZQCC8eG1XyCyMNGntkGPbxCQJAJmfmd2WACXd9qRDvHCJyTjf1rDUM5D7",
  "key24": "4dwKAmGBtCfsG1juydVtv8hsGnNGCNjevLo6haPH8TbYNbSEH4QAtk8thf639g6td5k7axRUiHt41XXiZmgsN4r6",
  "key25": "4GB3pbdEz1be2KjKfibhEEeTh1k5kKQjAFP9vgWcy3K6hqV6wNo4FuWtB6bMRj2nrYEda2P5og8dGpiDAswmaevg",
  "key26": "4a59cS9RPqPYXUoWCvizgRwh7yAzYmBku2pN7Xh98jBUjrTLvTTBL9TUzk2UnWFU6LsFsuDWPkgoqZPye7D9sEgG",
  "key27": "5RSPMWtRtKMqdY4s2A16qEQ2FNVDoq4qg1vA9Spcg5FfSQZ3sk44aPHpHWh1dQsQCwcqhcmgjyHQaHZQyXvLEhWP",
  "key28": "3niq5JzEnK4DSsmbr9rHFrya5D8AU5HQ7x5ir2pzwzuo93vyV5B3YvC5ZRv82YF2GUcpext3fKXqQAyXobu2cWNp",
  "key29": "2JKsqBB1s8JgcQGgbQnM58SB12m1QmQso8QTgEcg9cUAw2vLtqtWeugkdszX7Z6iGjujdWhrWCyq2PA25i2Ptaps",
  "key30": "5wfrReFJXA5wHm5KuUSq2HqMxWSToJ47BWNvYCeK9qGbYfcx1MuNVAUn8e21DZndKHesNMcJ9HV2of2QE1FiCvWs",
  "key31": "2YArW9ew2LaY3RAPmbVp7deoasjuQ4fsD27VRAwrMpp4yrBs8ZUgXi94Wq4bwigd3CeJydsjpsrvHCGYCdS7gFLZ",
  "key32": "5cfGn8tXQgUerxhTpm4qZpQCiFAt376RVNUvpKnabVWFWz8D5QphLCmS8PvinyhJ2jMEBbQp5k15fmiUn1dZUJzn",
  "key33": "4J2x4BkpvsvfnEtQiUvTNpgtSjzrGdknKtxU1MSuZKCi9qNxraDRrteet8a5BxYhpAipYGcxmc2aRt3CdPUWJ9Ta",
  "key34": "3faG4bw88dfATgmR8rho6UshXnX2vkpdPjpb9Bs3uRTXiHtbzBBpMkN4hXYdfaqBrvtVe6yMyVYfX7Do7URs9jJ4",
  "key35": "3FaQUXcETsnhF5gSRiJv9YRQ1ZdvNDEpRGbXf9us4biUg7f3ao1bfJGmJNyZBRS2BXmt9Kn8U7tb5iGPoC1xGUYM",
  "key36": "4uM4sUUw9QnZtMMjfxRMTQUiP6UsWf4jUUKfQA7RXuS7SSxuYgCVGpGudk8ZbMYkkT2GeEKf8TrFnxiKbFxPzin3",
  "key37": "JCayEVGB9ZxXUB8gjFgCwkvcfHPu8RBS6uWQSnAfp1sHs5eXMJrB9JcyEEhpUUAN5EuuZNSHQyNz7Um8UxRL9Nj",
  "key38": "33kz9nZ1Lp8hetdg38bHmKQ1hDvzjpjZYDRodifM3zvzUhD8KbQo5ZcTYHoidcUM4hEKmuCJzq56MvyZ7FVxRhDu",
  "key39": "5V8UkQpkBMBPizKU6ZWQs7HnSpnVfyq7yYKyE8u5eeurmts5pmHWoyoFJ8JmJ3aV2443DSK3juKimZXXs5Gu84qg",
  "key40": "2e2X4marEKF5EkM7uDEYu85nThRwQ82FhEBztRVBcN7wCeMM63QRPyiywFHXAjrj4LpLBX6GCBnDEqFG6QLEhxqh",
  "key41": "5Fo9JZY5TA5cHNo6TgANG9P4FF6eJVnJRTUFSaJk2PCGA3ajjhZE4XMaYXCgP9RiUFzAQGYj363wqok7pn3FWhDa"
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
