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
    "3ZQ5BJHVqAAfWRfDm9ECj59hBhQ6oL9FTjh3QHmXXvm2vAGLSST4ekz2w3tNAXfdf8XpC3X5wDLungLsLuxymrRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADywkUaasWweK9U4sv1eb5xeQk9Y8TBuYKApV92myYc8S1CzFFvUoycpQQMAiMdon5pXUZLEvfcBGEUdPGsBnVy",
  "key1": "5LBohWU29gcozRiaSrRj76FzddKAsYdBPJX2mZVLunWYUT9KrAUvowpdDYmphigh5rkQ3NZpUNLguYFXpcHXG2rM",
  "key2": "38MhPVsyb8U5L3A4hBudKJbUWSXf5VJvzgYXjgmsGiCmhnR762dw2DvpGgecSwLedq1AGmfKL8KcidVejFhEf4L6",
  "key3": "3intXrsku2Rw6SMEVwmqsqTjkW96qNs3SEyTnL96PwfSk2s469LStbd4Wqx9Copjx5u1cxKdJUU3rfCLnp6Qaw2C",
  "key4": "3ESW29pGZkyiBF3kNvRcd8vPTTkPiYEnKGf2qno4DfjCbV4Q8E9hUkGZ3Wk1TJW9u18Q7pyCBiEQ7AzuCMzFcEtx",
  "key5": "miZqoVynLfURfwKX1FXtofs2ix7EME37D8SNYA5aESogA6RW8KLcRvTR4SV8pEX4cinc1c6EtDTmet4BToja8hb",
  "key6": "3jSzbyJDzpffimQXxkWimoxi8QKmxvtqqbPsqxhXb6tTVeiefofcF3CfNYRmTGzvryWEZ17rdoWjL4TY8iNvGiU3",
  "key7": "578scZDpiGSf77LwW4Aa6NMFYp9Xtve8Ui6eJRyFNbuTfohBk4pKT4KkjheADt95NME6we1bA42zCCL4E3LiPeTi",
  "key8": "5M1ryRGuAkjvvK8Jq4PoPtCut1jsGqWek8PeHX7NphVMNCQKmAitNXSXuUyTtWeJFfYidjCtBmxbF7MnSCC1ckDD",
  "key9": "5GmtiFd3YQx1UYjgeYL8BDamxogqphvCv6uJYVhpU47BHRRFGfQwBauVqSasM9saW4ix7WTYxDaYXyGFz9HrBkhQ",
  "key10": "5ZwZLpvMD3BiBFYDyP8mEbfSNLxUSkohLdyC3jXgjSXwCTfrHWhF8DQJMY3uC9VbR9XpdZjzUxjHqvrCpaknPjKQ",
  "key11": "LGvunKHkK1HBhmhCZbNF2Vxw7dU2tSV6Uu45UepDtF4EBvhXGpMJoo9kmzC88TAu6VLvCWKyMn8m3C1xo5JjiEB",
  "key12": "5nvFp1QttFQmvvfCW6NyinPV5nFdBhMTmLCAWBR7DVdqzr3CzaQqJaTWzbpK5rNCEeq1uL9ZKK4UyVr1RXsojRvY",
  "key13": "4W6ZBbg4CjKfwbpqPR4oEijTz61J4aKx3hkQVa8q93twF8Vz3Cp4ZepZhECsrkJRhKL9FzpePVyngmTZEW8PTbHh",
  "key14": "5wzCmkzbqG8KRzuaBc2Uk6PLoj5QKTqW2vrTHN8HNuUHQqB3XVQMxshgQKjdtat4ibVLJoc4ZpJ9rCpF8wSyHF1E",
  "key15": "31yGBdWsAtouEpJSGa8GoQgysWaeTVZogeHYagFyUk8BcBJ3VYAKYUyt9rkyzVKTG9FAAx2sZCAYn8mvuxHEAgzz",
  "key16": "4JPjacHaj9Fmq3tChsaWwKN5nr6cN2oqmPKT8swsEbr35wS1bp5G6XjTCfguPc9iPt1teVFmm5kVFb8kcx2QcAFr",
  "key17": "kX8SxECwvdPHxxiPHYkXRx72og3qmNxnxrtEM9CeHXHZ1Bqa4VH8qw96jRKi8uYgH6YhgUtjhKuzgwWpHoPJ3CZ",
  "key18": "5Tg5AzLp7yoSX5aBZH5p1nT14JFWDevRGRDaCzExpykCzvXVU5EdRh1HPtbLSoszLuGqqZbM988GgQpTWNWZKu15",
  "key19": "2ZS8p1NFeNuaEMUNXGbWS6EKCPA7eyVxk9vo2fUauKaFVHHu3YF1xS1khzwQXKPuep2VeUHMNnPq8f7yyhsN5HKs",
  "key20": "2amQCUxBSCVpqjtKWfRBmv6ZcZ58j5MFdjYxcRtjEoiBwq6EwuDoFnDyB3PrNvQoF4Z7YyRX8Fuq9PT6E6SnVKzY",
  "key21": "Lws155YqMRSSKKTbG44USExgpFYnSzwbwh1ENKgjYHf7hWW2S1sW2L5hnHwhRwiiGBJroWu4VKEs2G6messVSdz",
  "key22": "29xN5Zj9d7Srk44yWdF2P3GrF1cgPxgDk3q2Gn6D6vHnbYRJitdVZ8rsmWmsrHT4CNUinDGqJWivufMfbjk8yv8N",
  "key23": "5kySKB9Fxr7cDEoxK8go37i6DViftXu7ahbh8EN2PzEsBUKHybADG8tjK7iEsdrGo2r7KGPvKw2vskkfC7GcakR7",
  "key24": "2JZc8PFotXuCxXVZ9vQq9s449SNYXZsBHeMZB6xutACzmb4ygP22VAqoYwyBZGebqvcsc1NuKm1UpHGrfcdjase5",
  "key25": "55rugK2YQVMwYsN7t2fGXVvnEKgYDuitnbD9Efz4vbdHBy9D68nAcH7W26adBS8tN1NjWrpVbcm4FgjgWyf8LART",
  "key26": "qEzBbtC393aEMEoRqs7h7LNhrv3GYEU9zPgLGgTyZtHYfj87NFMQNjVc7Ck7Df1kHY4t2QqiJiEWSVr1qy4Z9VV",
  "key27": "3L2UvQqz6JnZX5KgAMcFBgUXpxQJcxnhpyrLpe6ARUaTxYeQKGakvuHvRk8nEga4Sc8CmpRBEnW8owKeg8LF3Vgo",
  "key28": "2XpEVHryCpSiG6MLSN38YJpdvizkmvbcXo5iosx85ZQ868nXvaMyd1TbvGhUcgvMRuDS7aBMbPtLyC59LhvL2g1Y",
  "key29": "4XKSf5KY8Pyde9iP3dHDdsUBZoWhtH6BaHWmbd6jyb3rkRUUktrjRF7CV83Kms74RXLJ2grQp7V81HxnJ77Z4iB7",
  "key30": "yH1uSo9jDEfjaHNncbLAAKqQEMM1Ta99HKgZqHpFZpnJwLDANZrusfgJHtBVVBU1gx2XMPwJh5A21M6ZKtdxcTv",
  "key31": "2JuNnppnRgwYYnrRRXoYX45r1tpPYfuBooLPxMquika9KWGjRixigt7qS97dHuf3aXs3g8tLdYCw8KisySqCe6dK",
  "key32": "5qLX2fJ2WnorKfKJGMsMTz55TxseqZQr8aDYCiU6agaYkMsnzNrcmvSWeXF7YaCd6uGnyAVmd6G9ztpeLJSMii1K",
  "key33": "53UncDPW2VGLn9cDJhefbRNr1C6sUW9u1YeJp7a5Ha5gDU9wbF8gme41teVKCu67Ak1g9gt7hKzKmcRbC4jqLUkb",
  "key34": "i2YrrXN86mGT6HXJjX5P9aQXsau6qiBp2oN8DfniPnpEdndfL4cB35Q6RD4bjfXLYKt6jGbUHHi1LG37xT42Ua3",
  "key35": "4zeRxxqtjE2skPNFcoEWyrtgXjR98uwftAghiR99dThTgUhjgojTq5Hj3WZDPJGFYg9vUcJDg3bXN8vg52drDHee",
  "key36": "4Dd8LKvizFP1RSgEfsquzPWpmFvGsjzVJB1zhM1dHXGMRNfYEo5yuMa57pUkD1WepJcDCCLDiSx7L9heKvMuYmEU",
  "key37": "4KqEFLmeGbEE32xCgAGExys92fvU2GRSrBSuy5Dsg1T7jVDarCzykpSSrJFgfDqdc4Njdt5unxmp9kaCptvkoXT9",
  "key38": "3APYfgcLbHLGh2YYt7i5fiDaRFjvmNY9vhZkWEWX2EH14ZmxFwdreGVn6iXnghYofBfZaUX8BAK4F8JmgwxNCe8j",
  "key39": "3ebjurdLsh88SZ3QPJ6yFNYqEKjKsxACfUMeCZmeRSesAVS8rBSNde37aC4Dp8YCJGcE9An2Bp8beRPkbLNrrP4V",
  "key40": "5fyCEURdh3G15LpM1nY76KxoTDjCSqDVUXLAXKgDjsZH49RdZH8FCsR1RQ7qdRv8QELC2TtJ2RTDTHK37D51185d",
  "key41": "5Dxj8oe5qi3F42GTv2iZJuqtWBP4LYJ1x6wZug1mGZH1ocMQDrWrQ3WSmJMyJPFPCX7RjU1oE7YLDqAnMY7QYQy3"
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
