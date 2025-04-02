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
    "5ZgoJNYhLzk9xEVwcD2i9z9GYonTgL5FKSLrtPJwgxvX9d3MZwQ3GB8TaVTeWB9R2aaNGuNDShhLPXXSk4nfuJHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMXkhAZ32K2zyDVerqzrcKirmp2aURvXX5eHBDwbkiXcVzgcMaVgkstB4ExLBeqxe5w1MiBthise9F1odSJUCDL",
  "key1": "3aRmcgmv8U79fKwYEmygkghsn7GvxK4kVpmhGPvqVuY69uStuSyts21Jad2L8tjPTCQB9JzAq5wvXdbT7cNmstNo",
  "key2": "3boNjs6DAbTH9YkUXYQ1f9WPyJ9ykT7oVnKeGU1Mxo7gPzkjsbCWfS7j1GZsGYMBWSVWHahp5ohtsgq5SsJSKbz3",
  "key3": "2WNaL2SgLXZ6CjX5e84enVTMESaCu2meqQqcmkbnH8mFA8WfKBC4UM1QxAXYNHqBQhsxDTQ22mQRFxYBpYdVhJKm",
  "key4": "2WPJPASK3heFVWELQVTLDjfr7i5ztp1VHu2DE8ksTE8BMX7LL9XkMybPtd9CYzkRfHoRc2zjCGk4KgztfQkSQqBw",
  "key5": "ZGFkKYut8d93k8vxWNEcjC4ceCPtQFabqB2KqNgVXh4AKPnDdgHDrEz9fkYNL6rZuQgFPd6aU7k3kYZvtnVKuiw",
  "key6": "5taim6UyPVfSrDCQkqGWbfEXJq68pUaKUFfV7xMjDjVEKwoSybnUx7P8WjhensGdrvahFnVR2tiv1qtjDfdzRbnk",
  "key7": "65RkKdDhefBgdAVpShjngriiNfrAD1UzVMQBw7swtEKAn8nj7ucLrmTYhT6GNnSYTevMgsFYsKUHpdoZjZqevSvy",
  "key8": "5Jm24oDQ2q4Bz6MGiRZGTnepX9oGBHCTdELyWVGFuwQMmv3n8L5d4SM1QQN8RJS7MSy11xPSJRVxAceytNUgQbkf",
  "key9": "31tA3vEZH7mfwHXTk7JVGkrN96jzrgkCo1UPYBa8oVcWnN7GQndt68C1Qe6t5vnjr4H5SPEeWdHETcjvSBkZ6Q8J",
  "key10": "3DcZUtXDt1RLFczeGf5GusjLyepJpFQKtLr7hSdQevqH1B9PX19mtHaT3HhpUh78iqnXJ1ay1GLM8851f72ssq7z",
  "key11": "2ge5yAs5KgHLPzUMi5AfCg4hAhagZe33woR3CeTtdHjdCAcUmAE3tT5D2AwfVobpTT8w3mrUewtnkoojW9yLR5F6",
  "key12": "cdwTgSFmrXz7z2tRnPCDmL2JeNAngb6GXxV7dUPyern71r5yAidkUcnhJ8s6zTC42N4g1MFMMHJc5BqyVSbRC4W",
  "key13": "KpefpFYq7B6uFWfHateKppcxTQH3tKSVqk9gD9v6Qj2vVw8e1gDc4ZRnYBgyC7UFmmZPe3Cvi3XuSFZNGvkvhP9",
  "key14": "iYUzZbFqYPsubjaa5JnjynAoW5uMnDrzAPzvzqP59jqx2CX4JrfixL7kmSJF2MwarKMgrx5uyE84b9SeGgEXuGG",
  "key15": "5ubqGyuXtoUAr3hAYnxcf1EnFUmYWtTfrnhnzAsUeGgFUKZEkT8uxAg5Bff1GWjyET5NM8UzXCqRy72YRhiYtS6b",
  "key16": "QH5AYaQZ7igXpiWLj6Tu6oMEArM6d5xXTKKQu8BMpgZq8sEBReMv6Yq7stE3LqdU4BfCYEZs7ffSxePCo5Bq42Q",
  "key17": "2iC6hMa5a66KBCBvkfmEsdWfZXnYfo3GXFk2cqphfco3CGGHsSyvf8JPennWTN6TMHxz48CvCLExJRZck2zyUZNw",
  "key18": "4518YnBah6Wca9Rf6MSyqBhvA8ATX6LrY3paPVsFhtWQg8QZTAXBDTGpzJL5xtEaZ4bjqzD8RRXFDxJ5xHXFWxDP",
  "key19": "3XgZBxrY5jGkzqGVaTyMKxstEcVu13g2n3XdqpVCkCg6ebYqWxb2iWwkJMBG1wHboCHaMW8nwDmqcSXHQw8gooc",
  "key20": "3R58EN4QYL6L2Kft9bBdUNy1eKP45j1NgPTpefXFiii5Dg1cw3wqyA9H8xNezbsGJAMKLqiSeQT6f8SJjJHXEzQc",
  "key21": "3B2ddtb4dTbrmMqUSQEHhUoZbKGAtEBidVNEGS7X5mXvodryH2jRP8sgSt5JS5NmuSUYwwBGbuZH7vs263A9SYu6",
  "key22": "3AY2aquCXRyr3BeQQ6QCKcebsCZoEomLqE7YjUZT2qDvSA5a78LGBpxf2ghTvkzpK8yAfaHVgPFTRWzmomiT14Ur",
  "key23": "2QQQWbp4rEYBBuShSHjZTttU6rCKguSmBoFAjsDZitUuT52D7ty6FkZoTeMfAL86xLKWoaxoyehPXYRtP2nbDCtr",
  "key24": "4JxArKKbTGgJwa8xVCoHqEpBUhw3JAroZCNShuEWL6vEyCfhn5LVS88Bp1J5zt3KXDpxkigKeYJ9pp3uGSyDfyvV",
  "key25": "2ZxoxTXz4fWZvYTQZahKrdgNEnTRq3krqZF9p15HxFkik93atgVZDau6W5gGaL7ZYzttsaae3tLfa2Xh2yUFVcHL",
  "key26": "2MUiVnKFaRufEQN1k2iXLdRHNSFGQfXXmjVz9Ajo62safqHuQjGvkawZa9JtWBKwQcx72XSwnathswnXzSffzd2L",
  "key27": "4WVCRDH5JnmozEWbnYDNGGAbFZzhrfqUXnLaVWoh9aaSn9yjoMuhBGbj2cVCr1uB58gXrR991Epjp5smTf6ZimxC",
  "key28": "64SwgMWhTxHxofTGGzvYuhRBmpmDkKvH2eXuT4Ameu1Y76SC7cMNxFykhrcbE5VENtgeycRVWMutpqMFe6o1n81N",
  "key29": "49RGhDo8zt38Gy6jfCparFPsuSzbwu4RBQLW2p5VAXCbQVzuHzQFQxebN7iFc1LG86GNr7sSv82nUM8wsxGpx8UQ"
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
