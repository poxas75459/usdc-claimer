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
    "35Tc2PjPk3tD9qoc9dFRfssairWTovnLecx5vtHYjHxkxUh3LYENjmfMTuuWeNBkfydrjfyjzTkAwjWqqGhWadqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTm66UVjzmvMm36cKkjTjXBnGYsiPmvH1YNx7Em32M1HmgtG5PC1xDVW3DSYLEWMWnAH7pQHFWahcP4qpUij8X8",
  "key1": "4HcpDPJ66xCKit8QnrcnjvRjiWGvCQJ7wtcnxfWRLzgz8fG79G3gcNAwtYo3Qyg4M38QeSRMeMMx6eF6DSvDYHSE",
  "key2": "5vXShxJfTMFmbsDahYAfAvTLyNKN4zxC49xSUt5vH4yzwh9HTTgmnzwZJEaR5gcjnjnLYtHnBVDzrP3kH8HBLZSx",
  "key3": "f41yENKxCE7AUPUQQTmvGVMk9tvwSZmeTHgFLv9zqoCNoWmCpdKSkwD73SSqS1FcWu3XCiAe8Nw9qrmhNvpUNDw",
  "key4": "4KheEA16sWdxW9nK3wy8SRoncavZT3qEVMoAnkzvDsoiddRvepgDbt31jASibt7uDAenuKywBrNYhcEhMe6wEbUG",
  "key5": "2QkwRA5B2sMrsstJZAHWo3w3XHUMVrHp5rZukJU9PXGnUXQT8ySS3zZtuEtUSNhkk6iBCM1iDiXwGnE9iGYNkyCQ",
  "key6": "6gNDqbjoQdXTjqacRsYqUM3JFR4yG8kimo5rrv1LjhJFgL4BCxa9NoFmAhwgTqW74qaitZmf4AcrQZjbK1KU4R8",
  "key7": "3whfREshcmin5MWNNCaMZazTod2hmQs7LziyRJW9h5o6phextj7Z439V1XGT3NWbSC6BbzY44KjqEruwQwetrqg5",
  "key8": "4A78pa8fjDJfgpa7zBBogrXuqAX8MwWSG1jT1nZnFpgM1QqiSmSNugxHcti3UZw9UTtuiW1yimGHdomFaJVjHQRF",
  "key9": "RKsGchXQahsDGcMXrGcA8dSYLNggkZMHcsRMRQW4hK8yqNW1e5ko9Vk9QWD7iaBKxLrP4L3H1EtkjCWCcXzxN45",
  "key10": "5YhWoFKsbA4T2j4kfkz8sxhxJpxvzCRyj8nM7oQu8AMuPKEyCT5b4Ni5QSyHNM5NrYv6b5EBuUJnMrNASLmo9vtG",
  "key11": "5nEuGZwL2eDsZxT9xY8K8CZcb61pb9yueUVtFFpAR3ftMDUV2t7wvL7vt8RNadfoX5vgPMWox3v5FKhNP2UcQUC9",
  "key12": "4WZYQ5nUN1H77zSxtyfzu7kXbpMk1Rd5k2RuMBQusoF5x2xnJoSAesfbKU2fxFejFSpTwJHukB4BzBRXMhfEjqm3",
  "key13": "5forGYgHVw2PxCR6M7SU8cBhAGqiECnFXmkafysHP2JAHPDcYAzVveumnaEhyLif2GdfwJPoVS6iA5gC9EhrNmLj",
  "key14": "2uXwPRzNgMriLbxKih6Qra6HxJ6Xku5zJ7vwrQKkqAuPFDkqmz4cSs2kEaRymAy4ehCFxLG3qkdsd8KSZMvUAYZB",
  "key15": "45YoXBXbKJdEn1URZ3JDQfGBjvgRnGdjmqfE4RkqEB8t2j8imup5szjMmbxhDwoXxx6mgy7eA6QXUmgihGZcS7rg",
  "key16": "4JCjFMmfZh5iNX3kJPnTS2gNfRUVgpsW7Xu52NnBXSfQf1TrGXTzE6KRAk5D7hvUGu6mrZu4qgDVPmwz8MGQAF2z",
  "key17": "5ZPejbkX5Suc2S7neWkMxnLuRbotGCWxx2nUup2L78p4t6ZWZsTuTJgHD3zQRzYf35o9eSJGuHcEgg23hH4qTBp",
  "key18": "5f2PLeqeuspPbdR6rRyfX8Dz6PUMCgFfsh818XQFmrsmjavz2NJa8UumywANy34HMWhbAqp1yQaQa9aSG8Rd8N6e",
  "key19": "5fmdwM7yJPTwguFZpRxgK4gCVwXVSxRg9BTPyPDRf1NqD2c9Z4zeBocoSeaPgnvdbfCWgLc6XTsvSuty3EmrBqAr",
  "key20": "531Sbk6S5HzXU6ei6ZKENj3264wnUA6ja3Z2NBmqnn8BJh53VEtqQfaazbb9L7txYt27fic8XDTznJXpqNbXnQ6C",
  "key21": "2NjtBLdLeSexGMtXHwzyNPpZXeVfao7G4TeDrjjo2opiRX4EHcyySR6tVhDbUw7ELhB5gxQAbXKRPipnqhCNhhxe",
  "key22": "44sXZKPAiSeV1kaDuzWJ6i66DQtY2vGHznVzEBW6idQ2EgVM1bFa46MS6Y73mR3ukFVQgnZArN8si8LTKpAUXXTT",
  "key23": "t6xMsqyog3CbDdrwxB8Ld5NyycjgLLjkPCXGtrc5rL1msVJ6dPxxprfGuqPzJZjwxLtM89h5hevynDzk7nGNSiL",
  "key24": "ipNKAj2fRedydiAyq8y2fEPmQZFYddXS1aZgw3w2kCj2uat8bmtxn7SuLQB8rkys8fYKGiJRJQ1yLf4P8QuFu32",
  "key25": "2Fe3gZrcZGpXB5oe7QLk3cuTb6GJZwLF7Nd74BbP681RnoL3HUJHj1XHmthZgEcfKG6Mp3zNBhGqmqJiYSrtynS4",
  "key26": "3jLCL26hgeXoDeubQkMKESo5mm3urRuAjrkUbeChJvJkix9xNa43Qm8kC4H7nSbe5hot6VFM2oJ1pHnY4jp5Xoee",
  "key27": "3pbasr7qRefhDmJr3vs58aGmKYpusGzT5fngpJJwhJJ3XgipNkSiZnRnqhGXXcj5gCBu3GrTTPqEtV2Zv6fdcy2v",
  "key28": "4zWrfrVmh5Mo7xYjL4nyvPSN3gEL1sH51fcZki9dxJ3bSzrUMXPgSniPPL2q4anxcV1hn2V8bi7ti28QgaUQv5ki",
  "key29": "4H49QWTfPNQKMsmEGjocf3TcEd6VzzMWiifdZ5w9Ugat9QUe8Cq5CwKRuYHWESqAKYRSGG3uh5gkAsqePFqustRT",
  "key30": "gg6RSSrTurEE8RnLXqdf4Pgf2n9W9mjovCXiEZDAeqoago3bFT1eYZrJ9qjxDjSZKyA9X2LymMN4mq9Qo7DLnAP",
  "key31": "5fXSv9PYxts69W1v8WBDVZmXPp3sc8NuKXPQiWZ57YHCBy8YqBeNKuonzuPd8pVbkyn1e2vZMzc8E5LiPtTyt8X4",
  "key32": "5kabc1Xo57q8DumYXrKSCXG7Dt8Fic2Dckfn2V9qZBAm1odCFPE1yNwW8nerKoN5naE3uGhKruBjhy5cydfcWV5g"
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
