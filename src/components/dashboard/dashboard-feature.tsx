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
    "36z3S1JHaVAhCyZP324QZaSNoB3xN3zmiVSMNbFM4TBx2M282NydfYfvToH7zETtjTyHUinnsPjyRHPKAq91Dyh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v11hYTLiSwLWFqM989wqeF8aEjU44pnZHEootF3UXY5VsyubD5gfSRywd5JYVz1K4cGTYW3HaLm6CR9Q898cPFA",
  "key1": "5Hwt5DsUZGU4u5JUiFyxGhrNcbYE6YVAxLeUzR4MZaaDGqy1ho3kigYXrChfYLyfjuoFtrU8HV41rzSobCLS4tqZ",
  "key2": "b95vLiiYSqfQeJNkzycLehZz2GxUtHbnehfyAtHvoMBxrX67PvCHUiB4V9JsJXByvUzZLE8R2isZAPNLJpbexvt",
  "key3": "khg3yPttKVoHLLMGeZcGppn6gnyYnsDEWEaNRc1ze6QTyeXEaxw3uWwZk6ZwK4oMR9WU6aU1UGrHiNjAGNpZZzu",
  "key4": "5d613tGiP4jhFf7EWt22rWDreT9Y9dSWhzvjgXbhPdheFx2jCCSyhCJaUweqVnqwfXJNULiouJknccTkh1W9EjHW",
  "key5": "3CA6fbnQDMok4e3LiKdEe59E4XaGVwvVYTMcScKaKAR2tPCeLXLsc4TQxYa7yHqpM1KZPjvzG69RTTfRq1Xt1U3h",
  "key6": "5QQoMFpkrC7GWBPw5y5USiXQegdrUkMGc9fNvDRc9MN8rQiW3im7fvEkoraw8c3ykAu6P3a5HwWSvxyT5cFjfvyf",
  "key7": "jgf4CVERtu3kLLDYzUijZorPQzew9HE3oSdNAQN1WMZPu4AeSnQXNNjR71PZq6bpRAKw8BXPEWkwxvZzQnbJGXf",
  "key8": "3PYz5L8sQshJv9Tt6VKJanuksUxinPbwLsh6Jn5p3LqDcPWvSj3URMWRpYd9TSAXC19t4sL1zJh5m92RGqmgaV4d",
  "key9": "5LAmyQe6x1P2h6MVzF7K9R1v1jPZ4FTLjuaPXAKHEYpfkirHKroDyowJWqZYUw44gKJpWXknFb6uMbzYJqJJRdnB",
  "key10": "3HecnyFLA88T1BLFKLvRP4YqsFAYpyKcnLpBQUu7FfNNNeR16eAd5ZgjfgcxqZc6KRRMfEwknopNKMvK9hucAfzf",
  "key11": "2dvxXmsTeGj6BFiu4FEFpCkkuNpPVNg9nLJ1MeQZryNLd62N8wZoXTjbR61v4Ev12r9u9rSjQrdP72p79v3MmCMk",
  "key12": "3WAtJF4EUeR2YeWYmvLYAyNXGrwx9RB2wCBM7z1CZYAnMw6PMDGR1ExWiNVdyyL5fhR2mou9Xx1vBHDseZnjGHmr",
  "key13": "3Vd7MFQTufDcj2iQuCgWQBog9CE7Av7ByTwSGFfskEBKCDTz1tuATp4FcHu1arx4FLT9WhJ5CjotTnApvHJParJQ",
  "key14": "2VEL8wmVNsdJtb2EhXf38vHon7C5vziAsuYiPNuDrZfWU2k1zW97FaSWPkZcBxR4WPcAbvNpMJBuofZCQfVH3WdQ",
  "key15": "5JAYqCuRjCdjhHDRd85FysUaPp4aQPSZAsMCr37ko3ZFuTU67FafLHJESxQ6FsN6mwvvpWknMJaYjaJ3DYdZjAfm",
  "key16": "3B8NuGm62KHKHL5LR1PgmfGktrckSQ1zRLX8VHtJWVHg5dCcQzJ5jouqewyH96TZyuygVQLrhctBUdsxvUBAGKeo",
  "key17": "5xtqSfa7PvGJJeufVzF1brCSkSbgXriDHJdRiAmhnQZ8L9yV5D6iV2yC15d2o7EFATXA9XaAJxiemjTzeXbgbXwR",
  "key18": "22sHjpygN5MwzLV2mdAikXqwgQKxNPT6r1shPNKGnNC17a9D6d5GduchkDwnrTnsGKqG3W5RYGahzEq2nFRfqq8B",
  "key19": "3HM4Ne5ForuHSU3FDyyP4o1zX28Q7n12jbHDuB4yj5RfZwuddvv9Svs1nUSL1Q138q2DguDfSpj4YSL2zRwVcGpD",
  "key20": "2rtfx4DuD9XLYNxrnFQrbu6ELRdBuq3j9U4a6ChX8f4K2VS34PLRa6bZ4KQXCYvsws2MaGxTVA9Hnxk4gedGVLSE",
  "key21": "zLnxax4SfLzb9DbzLXRkKKBaPk4NR9narcxGfZS91vRTXT1UW5zeCZxnuQbRnW2vxejhuUR6gTSTD7RJahsUkw7",
  "key22": "4HiCvZjmCYTUReXde4WdhYmYdyu7MX5y8262W1McPCQfdM6z6Nca6XA4Qn11ohbMXd7zTMPmv2VP8bLoLydTVsNB",
  "key23": "DcM9eg4dyLzsXvL5UpbHkxEsaLjajaXatPLwq7XTBEAtMcE9bsGz674jxqbYtdUMGHzSpjP2URW1dmY4hzWobGW",
  "key24": "3NTFGENaEmHwBdEpHiqpsWBzh9niS4n2zQnW3mURRwUXnTdvvAZVtzmqN8mMS9RQWBXrx7fngW9VTyQs2DXi5Yo2",
  "key25": "5tA4rewwm3qWuSqjz8ZdroSLk8u5EhZnSjsoUnLMewXTF8oVRVdd1p4ynpCvNfmKnhrJk28vBh2VoWWETnEdVmMN",
  "key26": "4VxmybpnPrTKPo4zzLoKrco3bt5aiYPXJGvUSscrBi4wA9rnQ9TrgVi7EyFLDStWATwZpzebBCkAUrpVcGDgyFTP",
  "key27": "2wyetaNiGjYe2QqLQisiu9SLcrjW3TzNdurvLBxrfA1VkkQHM2hsKn6sXP7uczjobui7MqWDKB95XnsDf8FbgGqj",
  "key28": "64LYc73KaLD7vvKucHVdJFkG8382D4gPHzDi83573eD6fLKjjBHebMzXfgTKuy5Uw2KCSaCaySQvCkaN8uRhgDge",
  "key29": "3yHL5jefosAJocNWqM84rNc2q8ucQhAHWwgtnkvHyxqQGtx7mBYTUjzAc7VjBHwmLmMTSnX84ngtYHNwEgGPRRnY",
  "key30": "3a4Dy1CH7SvrB6VChKVyMZoHXos5YT1ahVZ4Z6kfrKULsEuYMS51WLuyvKzR16GK4Kf6JyBZejbnpuXex6bmiZhC",
  "key31": "3GgcpJ7BVsoZAJcxxJvpFiJGq9WhzFXAB6DB92ztPCh7vixWuELe8gmzNALvND3VjwBeojdAJuuicn4ZvhqVm88d",
  "key32": "3Li8256XiSBjqJX8zgv6nvbgXBUfKrsAHhxNAzsftcZw8NSqq4CSAN4m8iWCiYGc5thWYunEbN9mDPABj78wnxeV",
  "key33": "5kYhZotuKcyWFUwhWJA5ZVv9q1nUR9VWrQUwJLPby33dYS9ak5nLjRfsJFhJvbpmWhBNKAtLD3QqPSo72mxqb6L",
  "key34": "5b3atL2B4KgzjEtZgnxK2EKSmJ8CfepDowREWQaazcLnKYvnQ3qtEEGHvjD6fC6Cid6w4qiaGGmTna2c3QFDwv5G",
  "key35": "3PoNNSzocHaSDkio78gdibkAy3ujrk1WyQKFvrDUH1CD2QZd6Qjk56ijvnQJb445Uk74NRdPfgdCi19ZrsKCoU8X",
  "key36": "2AS6kDjs76SrVKY8r9Krk2q7fEa5vL9NB9719PTWmJjM6k4RAYee1XRn9i6vQBQz9DbZZ4KavpWkerqqfpu7Crrh"
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
