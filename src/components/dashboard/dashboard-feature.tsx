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
    "3RAq28sGeAzuxCgMvjnKUt9Y28wgvw5Fx8fWgXZe1x6r5X1uPKgXViFGuHcCzcrJen7L16Qhtzx2ndqT4zaz7NEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btcgYW6RoGxyc9mud3zwnCViWVFrAE9Q7jjFtk6WbfsMC3YLFz5hRc5QNCStpwZeMHnzRFwxXUcnppWHFRAV6Pm",
  "key1": "5c5tQt318RMsSx7KEgSSRXEMxnHQbrtRTWrj1LtWr67FZqHiiFyJvWBjt6ZQRpuRbQs1JXrrrJW6X7yk26xVbckf",
  "key2": "5J23qaV1uSJUAs9FiCxPoqKTzi4UWweZbH3S5cjFiA2csJUfcKvRTXpe117GuBzSBLNmJD5xu5vMQX8cXibkbBqh",
  "key3": "3ydmaQVUuoiCp9o6gchNe99afDkr3QgH5aAac8xYrFMYcJtPLoWUB6CbtRVd8oWNSp1zKBVQBsVt9djfgqhDXK7e",
  "key4": "4SUTZRNE5CFgnfdn9M1NqP4m6xxApWzBh9hop43rkqYcL5TRNTBk1uxTpTaTuevks3zeRtizJZXMVCoC997j4tbB",
  "key5": "2rr8F7Fnqx5JpeQTMfwgbMkpZLePwUUpznsR6JXHMvkxpWZ5B2NBEKAMpt54MXYz3cLSXTEPQq34S8bGeGHNF5QA",
  "key6": "5A4T8CbnAJSdXFEaSezBfaRxfVyZv435S4sqhhpXDPerwEENkGqHUHKbUafzoJNd2MzANN6b5v5SxV9sX4VdX8r3",
  "key7": "yY5CUXTuRcWmJFadRzYaw6Ch2tWwznJsdBqrWuAZJtUXWFrQwmHe8dEJk1fPBqVvknikM1M1BBA1BjZKL4UzwfS",
  "key8": "5xaHxUCgvKBerV9JAGGsXbZHpRfoaXUBuCsNzWsX5tvmoKWWAP1UXam5ovXHfywuiRD7zvynLpZvddXZcq3LsrwN",
  "key9": "ykWyaqKyoDLuZs6irpAyNFFPzP8dsADmQTyAbdTm2WGbJcGcDhiCzkGNeKZciqGCNSFrY2LkkzUo2rm2HHSqEEo",
  "key10": "5VniSgzW4RJE4KK2SRyQVViTkXKGPtohZ3zhCEJdKVhcs6F8ESoypLuviVHwnyj3Yiz7DeogzDbYLFz42w6kBYmq",
  "key11": "3fNLXKKKgDLZRXeqj4LS61ru66dpUjJNVi2DD1wjbecmc6C21GgZ8VmoUk94FZSnXd8MfzG2LFocWptGLoy8US3",
  "key12": "5gfwyXNQG1zW4GJRicreag6G4x5rH5fvqgRmsBk3qH6UF7MEMUgWwHJhEsA65HA93DuAzp2xEnAek83iPghMsYTd",
  "key13": "3CN9sv2tf6n3JZwh1wketiuE5zDeFvnM917pi4HMyAw85WDWAYZT6hy8seWi718DhMM4Y5J1pi3dQYcjK7jig6Vr",
  "key14": "5Yk3eVxYuyzj9wLqMZFibzj594yCPU5Et7dX8ohTEYaiui5LfgrGRg1PAH7x2iwt78phN29ufcuv7bDDxcNjDSQj",
  "key15": "3nHHtwwas2JRBt435sL5YqNmTZP81aBgC1HC9MYcYvAtwyndP5BXAf8TMpFXoSsuhjyMs9ZqVZfyTw9Gsy7bcR3W",
  "key16": "2UJPh3zNzokXFXhqmjt7KUwDd4MWQdadGqRxkhi6xQhzAcZQ3RyN5AD1FTsFAsTgFwVbTRzjKpuMA25PSB83BHAT",
  "key17": "4CKRh1WbkoFbBKmUXkQ8h98QyhbzgekVh6862B9f13xwpXcyZC32ikDFEoGt6jMyiCZS9hA9RdyJXoPe1E9ynwaz",
  "key18": "5qNgqRym9rWjs8qB7vvKk4E5c2acLWyfHvczLnsErRjW1YT8fjP4RnTSfTTEjzrQGjGw8r5gNuVggR6nHip97nRt",
  "key19": "2arnp67Yk1iwV8wyNVcT46Y3rbbgPRqDJcvyC7Zse5rweh6vXnWpHrkQEBWnUoUs525PBSKNnTtYUrh2cNKqcb9T",
  "key20": "chnDM48vE3ruKa3SPcModiiZUY7EEWC6QHSZPcUpMhzEaRnGeH9bboAioqouMgjtH2EVEFWiLMAfBVvpEg9cxRb",
  "key21": "zSotR1QRXG4F8WPpLeAZq9h1BhNnMBN9FGsjAysKNXU7xA1xMcS6FRQmN6PmEamkhDXQsYdrAxW96GbLLBrSmAq",
  "key22": "bq918H7t6hfqyoYQdFedEvaru4VtXF3GsLnJjyVBBs9cS6PvsuysMWh9r6dBntgV8Fc2dS1uJ4b7d1hjVUdJxqL",
  "key23": "5fJRtDbqC9cR151dYSRQ3UvjrNWsfGPGA47BvbcoJTxezY5eChyESAC7KoYAnB3EPAa3LmKTcDTvGLFwbjSXgXyX",
  "key24": "2vVLGwJr8uthoGVZtdFoxrnparYinovmk7Jv3mw4BzaVyeg2H3UXMSKuqcFp5EUZoVfczECbEkyKRfTUJSbaqeg8",
  "key25": "DReM4BVvqgSB5iXj52bkzMd4DNZfU9XiWho9dA1nWSXDMaY9CDVPboniDTM53nUwhYapFvB4VHTFYBjcMSPvXL2",
  "key26": "5vcCYnZqiZeBgF9B5AYykR3DQ67Bn5H8qexRgBApNHerPKcHpXP8TrUjCP8DpTtfJ5NcbzGynWxoutQpHApDQPQx",
  "key27": "MT3uFa2VJAVTKPF8UwzZPiFBCpEzHt6YstMrSrxymvP7hypZ7ahEmMsbnU6cDUC4m9X5tCvosAUobgUwyxvjw5t",
  "key28": "KJQKXURfz29cL1mZwvuPRqn43N6GJq8AfiRbbFT7nJnKoiFt5LL7vSeGNUWvjJ3rzYYAtU39Q1EB51dn4pT2G7T",
  "key29": "5Jb8EwURdGPrLjnf629SctT6ZHNY13dB4j2hvdzkyxeuByJ3uMxyeB8wc728sGwqCQ3xgNKDX6Z2t9fyBRdiJhG9"
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
