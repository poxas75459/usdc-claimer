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
    "dzZU9b1KkHmtvrTUgaaYBJ6NUnmugGU3TzE8EtLeEhkviiw2Mgdbsi8DvPw2YkAQV6RKXHUMVv77e9oRLMCAwhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwUcPZ5We2YD6GiEEh8rYkXB6djMgBc6DNiSiw5vph4mvVhvnTaNNirC5cttgQtTu6BAurzvBz3ngd3mVjCFH7H",
  "key1": "24UnKJbrtVoGnsTue2BptAGuEWhL7qQZ6GBrr6u77sLUpYabN814n3dti5jqz5FZMmevTbH3jDEJRxcMPJz9TD5T",
  "key2": "2uipSUaNbVyWqJayvjPstJ7ywmrnYKeAWRWZJ1cvhUMLsWBpExvdhCP5QV2BzfDD16QB8Fzdt2Xpzh7KKRaituw3",
  "key3": "AxmBU4VpV7tzdc1ubM9FfgsoEbEZhuWWuy2MW8mfbCytnwvVm4xLVXvvqyXtRFSzKfLNDu87i1uuUdNK52iGyNY",
  "key4": "56AisG88GmH4Sa5gxrj5qHu4JNRrYFB43rkF6SfTNKHU67Q4xt6vkvwRUZNEGabET7oB7Gh9nUuo6Qf6RUEw6Xnh",
  "key5": "5cNZXyvNWcoVHbojsR2twVC9NSmncmZtnb3UoL1JXUVf7FTihX9kbCm4dGL4gBf5Zh2bSgptoLYatqUNTAVD6rij",
  "key6": "46sduQaqZjvotyfb87pmzrVDisyVKn58yRy6wfvViVCkjou3SjCiQXj2YYbefRbtTLDuD4HrQRMNpja7NufuFvZe",
  "key7": "56SjiDLjkt9pXeTrfeJzffKu85a62E2JNvTEvkgGqgFJrzP1ppaZbhq1fuSdzDkxS4AW7Xn7qt4jHenpD8uuvDHZ",
  "key8": "QHJPyGuirgDRgiuKRtUeibhdWEFPrNeeN89c8sHHmEJ3zARgZHDEBd9LwgaVt12zZuUFx5xkBdW5vEcPN7bYTYc",
  "key9": "dKBpSgEtnUL5DhraXAvetHRj16ij2XDAyQi2F2m4QgPR4aHQu3GxdnV1rNhd3JYKZdq9nMhfWhRv1mvgqHfNm5n",
  "key10": "36g6PgV2DxvZBEPkDD2H7c75yNZzgbbRXG3i7CqtVNxwmhEb2toqosEeuVCs3ZnbjS9drWLraJiCc3hY8STwxDDZ",
  "key11": "4Y1nx4iVBxH8ZjekcJdzgbb4HuJeNKHRxiwTkGxijZDWxkysS2ejvNFj4Q8K9s9QKtDG7SUHq6zpbP7Rp3koQ58V",
  "key12": "55Hy7adND1znJUNjSQribePaczYqTDBpH9t4rak5gx88Kq3sAjV7hZSKqUFdLt4Em3tyL8DGLwqoBi13cyrVhimQ",
  "key13": "2poeH44HFBzy7Lmt9VQtm6cHJEMDZnqAp6mgtRXYPzotsW27TWcRqi7MhCBLPB6iYSpG8QwiMcwfbN7LM4YDGbaz",
  "key14": "5QdukpYXmrW1P2a97Noaqrb93ET8QGKfn8PWoABuGzFacK2kySdiAxQbbLJos4By7RgjBGHnqic4gSPK6kfTC9M2",
  "key15": "3mFVv72s3NpZmroBaiQBJAb8RLCeknpsmEirahVsSui4y8hUztVH3fRq7iFn9TUtbBvcqdgxYK52DdAnLuZrNibq",
  "key16": "zPpNQHXZze9gKNBkezZA5h3gdAYMmBfUa9HDcLKqzFgFdqsHfecXrY94bpNRcrWm92bh3TcFtaCspuKhJDMgJFH",
  "key17": "jG6jAuGdkxjqeAH9x1C1PUW98QJJwCQxWtCzY5ukdCsnyYJyQBCJT9T8viZPZTimTMvwPWBGmKnPNdxco8cY2uk",
  "key18": "3CsYHFddtAP6pt6LQRNQcJGh3DbDTpUujPzb7mUFxypd7XEsdJaHcaXXYZfMowfhqZzTpq3Xy2CFxygqpmsea716",
  "key19": "64GHGLZx65eMhJHAotvKexLnyDqxWaoZhUMxraqLhRnRTjdcDwz6AJbQSRTVT8pedFTqukQNqEkCQsCut4B9t5B",
  "key20": "4wV8uT4erQV68QPUSnUmRx8EMvUgZRHqjfLBKceBUSEgnPcfPM2R4tKU8NUNuTPD4WK3JeqckC9F6GZ8BegtHzTD",
  "key21": "5R7voQaWki1Yauz9wLWAFhgo9bQvbhEXSQKcE9AHZuLXzwZME2mbsFyGCp43owLTye1B1q1r7ngboqiLtRTmU44J",
  "key22": "5exYhYB2R8QG4q5x4s9FmZTLAUapNh6gbb6zB7Qz7ntcGcye5JDtgyhBCtEfFWmtvcaKTwfUfuvfnEqpPPNKuctH",
  "key23": "5aBLdU5trhMS2t2i759mCLmBSVnHVumvywfUG9aaHbHcjPERhtAk3KvFtL4QqxEmyTT1cRcM1Hfn3GbuyzDWRHxS",
  "key24": "3DECATcHSEsKgJ3vnKcT5QcHvesnr4DXseUwf3XGZHPL2b61yEHGiwr7ujZXFFC5bPDT3wCvGdPTeCVF2x9hgzXT",
  "key25": "rAH3bBLzQkA86R9JuF9nqEhCmJgjLfUYYc5kBbFnGjMzn1uKRif9EHzXWgDRGnXUicMxrTZ5ovrTAMnRXYhB1Xk",
  "key26": "3CtyVbsto2Pa7HTbydcy5nVpEYARh5N1rVfxo6ZSciCmNgPzENUcVuixCevm33rQDNhb5KFeNvYSnQvDcovj4Eug",
  "key27": "34z5TieB3m1ekJHa75Q9t228GtMWh4zs72XaLdUsajUD2Vcpu3aau9nJMxkJwdRdEQEQAuZqULQsn63K5VS8pudB",
  "key28": "3tu3JAcdbmHgMd5KnGprPduRokDY4KeBRfgUsaAkS2JmmZz9rhYes4UoR1m8Mz4mUEat4BibtR7WCVRckTfRVmKy",
  "key29": "4eTTAdLBcKXjhENGwhBJeo46pheoaKQPqvaMTvnpTocTwDR4EFpRn3JkrUdbbjb5uGAud1d4WcGSPUDuAPSqk1W3",
  "key30": "B55ecfWz3yYSZDa8ncRXrpFrgd1Db2vYJAk6GeaLqyzmNLVuwnZNNDDWLGvs8soR9nMgAFnUUbtkVRJbuQpcfKg",
  "key31": "4KMb6kZxrcS8raw7HC2vioJiu9GzjC1BJ5MHS3KN4P6bbjV2HNvja29Brb89chRHapXB6MjDmYTgY3Z1ymuCVw8m",
  "key32": "2Lp9u8D32rviHApPD478qSWBpNfqtxGfEH8LWy2bushcYetBwntWHTQgrx5v6hXT3uMeatmiv37YK9N5ip6HQ3MS",
  "key33": "4CzYqkqYHjqe3YX1mBW2ZdhCU1BUaduAJYVdoPtsL6tYG4EmSozywymWwTazbnEYtXovRATXAM1UGyMH1iqRiPUf",
  "key34": "2G2thzCCA4S37nd8kWAE2R3ytmS2ZRSHdWJ7AEbfpntrQL42NBYEhxq8rVgfbitimY3fnaA4AQyo8A86NbWnecJN",
  "key35": "2pPfbVfTH791uhEECjWL5744VbmZ5SXjvHAvpsTYiypTmFymnFBusosZtsHBf7Y8nd2FZAUwg3m4udthsHSkez1y",
  "key36": "5rakqVGPVTQ67BE6wdatN1d4N2ZQR7g7WK2iBtCPSZdMFrM1e43Y6FUZrzXuiiVivWkkVKEYmGpXiwF5v1j8ZqZh",
  "key37": "4WCkGgbm1hKheeShvZjBcvWL1FZY7Vr8uVEdPgowFxE7NEzmHqkxZnJ2ZKfDJfdsbPuLjkSGAeLZPazUkNyqY2E",
  "key38": "66ixcnaGmPbZZgEnvMGqfK5CVa8p7RFvXQkiCwD2aP3koE3BzSgAEewGeTqbFiFbuQzfZc57czfciZDaKAW8j2Ls",
  "key39": "P62TTDiGwLh73rwGMLMxa5QjpvY7gqqmjpmxj5pL13yLNSfnAgwr7yQPNDyob4QkvNVSmxUgYyGN1KaauLa8oW9",
  "key40": "638KSW7LPmvKNyxqfadwzBqdob6mTFi3JCKdgPchhCB9U7FWXJnvw3ushcc9SetrPExmR9ek35WLT9moso9mUwE9",
  "key41": "52XfwtjiY1DF4PXhmuWTecvHsKRQdEPoaNAEso3oXyinCfUoNUaB9sDPThGa8oa7Dd1KBM8GJchBvaFmpNKzRyhB"
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
