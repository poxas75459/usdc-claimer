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
    "UDusa5CNN3ZYc2NHNroB99DYPYpr1eYMn2mdznwvYkZ8URjbR5Tm5YCdRWm5do9JpkweWySU7a9s7dsMUuqkaF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJz7a72egS5hDzpnDqCvKAs15vh3g7Piij1i7JgfA46zFTGyNhQmwfjypPMT17qNZ7xBRG3ekmCt9YRe1rH3UYS",
  "key1": "4Fsq73kN1CfoqhNndLTj3foA31CLbYzwCuXKYUDyrsmT4yssWjVBGM2VkHPdSpYRDvUzBER1VmaRk1PTkNxKS7Rk",
  "key2": "4RKZPGxsAPAHzXu8yNvLPZek8EJ8Zw7Wrw3UkzzkJa52E4VMg7ZUtVr1PY6cfDMiK8685tkJXVkueYhEy3P9rpF2",
  "key3": "4HNrSYxXUospz1njMzUmTtHBeyeUYhiBbzP8rzEePXZAebN2zMU6kjDjDSFKTdqaPS8C632MPiL5XEWEYxXobnfx",
  "key4": "5k2H61KW8eJeYwhWqdfr9cdjdNhzsxXM47fjfWQ3grLApMGGWtL5uvfpnZaySscUN1wAiL8iH9iHUZCudUi9LAHR",
  "key5": "5eWBNpRQ3sHxNRmP46dajSNGkQMCwa8DoxMsA3ahJu4AkLi6P7W4zoSrpYG1samXsXVnTpGZZPJbQ933EVAKaFvm",
  "key6": "5AjXCryAtWqqiVJ5u81tfZwZAmm7hQxnDevxzTjDysw4MpXzr6FWZUvFPBhLLVLBYv2usno9xDNPbwwpDFfUNzr9",
  "key7": "4joYwLzu3m6GnRcZfF5FBrGq9hwW2NVkwqt6S8KeTmMo3Gvoj3Zg1AVZhPjaSBohtaVkD7nyQ9rmGuE2GAgaMnCA",
  "key8": "2TGvqb3361pGKdCi3YVJXqFLJ7bX8e6MZLXgTrG1QZpyiriijAy1KaaYCDEd1HhXWoX5y5JhZDbyCj5xDJQ84U8k",
  "key9": "37vrttdQE9kyRDWhR9Nj3fhDLRTthBHswHBti4TS59LbCRMMtThBcXwCnzhh1AwmDCkT7x77DSNUu4NJP2aVuWTM",
  "key10": "2w6xVeudSUrUuyGEtN6LB68EUvpZe7ggjZxy9tMg4uY2uk2DBRApg1LqbC1yCK39eyoeUP77LgSyNtmNXjfbkRqN",
  "key11": "4was7vWsBHjDxYr7YhD9XLpTJDi9xHSNu4BaNgkoi3EoyHQESmjMPvBguUS7pMM6MRT3xgYVGLAu7yi2ApAAWCTy",
  "key12": "5wxGyGwsncJLVAxeHDrmSVkGukS1cdRfvWwsRd3f1MNYkQfhy7CzAu5v7ezwx6USKQ5XKVm35b7xyDFHCCM6aVfW",
  "key13": "3LzUkrPc5VYf8tbruBxfGHh2j2emdzscfaB2bkfHs4YLoK9nivGmMkG918JFE68CLPnEY9Yke1Qt1QeuSSoNftz1",
  "key14": "2weH4r4LmUqpnQ33KMTLw5mrKjspAzPEemebMqM21WwEaEEzByjoQcgfPJ5z25HPQqrNCKAnQXvQAnjTPp2ugMe4",
  "key15": "3xhmDTtPsnrowVs7osQNCiDMqGBV8HyMZ2eJnUBtQ4pGDNmrZCVMqJ1nMjsLuYrEJ7cEscvsEaJqywDz25gjzJS6",
  "key16": "5MfFQJXax2gfCPERdN8t5mgWBQAvQQzy8i8PnvGMaS4s2Svk8E6faZZsey97zhJnLDG7Ti8PrDgPiQDVVbwFD7LZ",
  "key17": "mzmasE8shyn4S2t65o5QvsrkKQRtEgW7995DqqMtRFxKKrjvdSfMvMZgDPWg4eGD1KTbp954LJX72wNkLjxyioD",
  "key18": "4epYGbV8YQ1HH9tenYTWF3m8LbwFccsNJAEAKJsGZ1VAVcVBxDzCCnTUQmSw7cL4HLKq17fgHbRmgiAMUyrMtwiG",
  "key19": "5oxCfg13X5QUNBvUWF51t3hUTZL2UGE3cbffN9vkUo6MvcaRj1CFGYeM95DeVY1kcpN6TFQNEGq6GSjHtgLywquj",
  "key20": "2Y86gt1WdfPDjSHHAAGufF4GzPF6Nkdv5vT5mfv2xweY9LNTgf2tATCbqKDNX9yqcxrbpM2n7gmkHCAiSN74E54u",
  "key21": "3zZqqhBL6wDQGkgH785CsLkEJPFfLMzL23aJ7c6zFkJZai8wtKtf9eCVLzeCQzRYqZ2QzfnBmucDd4qB49Hi96RS",
  "key22": "3Wqxmh6KaQkeLWjgjuoKdcJsCT33y3fiGtu8LNEVxK5HAYkDyXkoXR4Hu4quvLWZFphiT7TcVuYG3obz1vpGsx32",
  "key23": "3TRNRrXzuJQdkRga6nrGWX1eHSBmDWK4Aetmye5afxkTubQri72vFDfgpuUXb36J6FermksNHu1JFUv32dfUqjmi",
  "key24": "ytCUYsdux2wqGbRthbQpAFDZpNE3nGFqgy9RoRF61TA1MkLUtvS7jjrjNnJceTA9FPiENs3aW43a1FDYFnt3Kdr",
  "key25": "P4jPbAoJFwZEG3SR7yjdqGLpj5iwpHcdJLyjTQEyPP3ELbnQbdxmAoW8gQdEEqtZ2Z7tFZHR7qYLtp35uSMSRiz",
  "key26": "XS9kDAA4pvuuFs231D9pVSppxsEAUuDbxXZTrt5VSjCFUifSVKu8SXu8ZzX3xDw9zz37AQuds5XvuuKGWmyiHVE",
  "key27": "27Dq6mB3MQDeUvGLYyu8QZRAx8U1awoUyX6DhVEKiXeZiZQiAANy5KN8fcahW8wnYtm2rWjTXBZaYSioaTdLy3XJ",
  "key28": "4F3XT7MnaTDXEDhWqFBHY8QZYVHtEgWWQEZyeXWpo8uM2KLzjA9PaR9jHX11L7MJ8nrPgTsDmzPUrjC6j4AggefT",
  "key29": "5QWFuhYL3Y7khtTxdS7gQwEis62XD7XrceBUNPUBfdJYq8ifdWbTGKzUvG6mjasPvmmxi7zrzB85ggWxGwWSNsHC",
  "key30": "3mV3SueVJuWWKE3gvZKNJBzdgJUvuHLbCzbr5cDwEggjjue3w1T8J2CYDYeJr3mZyBv5s8UFheAS8c2R3w88X1oN",
  "key31": "477fYSx6Uf9tohVju5H9kcMTMmX5YdNH7zvukdyvQVu1R3oWn3r1jtEcmbRx4WtGkHvYgZdSRaN7G396ap1jpLRZ",
  "key32": "3iVytydqpveyybayfiHKHroujjsRtXt2SmBJDpyoeEhpLGVNCSjakJkKnqiTCfyvZbm3xwkLKiNKuC1E249FRNyG",
  "key33": "2zh4B5e45JtJk9ABGUAVfZAGPpFMUG2o3jCnp6dGUyFVu72GrhhnLXtfS1jQqMGiMd7MLiHtiKidfFNh1Zn3fBx2",
  "key34": "2s8fNnuNndYrVQ7nxbK1qA1GU8e2K1jE6uNtJqbKUK7BFgnFiBmJoj34GgfBuRjK17uhuBapYxj8hj5ybvuBRyDf",
  "key35": "2oYxP3ZApi7oXJ1owXNMVoqYYdgJWfARa8mD7YnAQd8mHtonpx1SPTDBcKMhYahnAmN3jbNXPGETtY86kA9qvJ8s",
  "key36": "4FTPmX6g4DAuhfVjUfzDHcmHtBeSY6ANu6a7oka9y1ZP1keETPySBH5hZyNTzZug7Ydx6Vq7imHazTLHEmeCocTy",
  "key37": "DBWJSdp31bXFy6xp1vp8K27Gi5ng1tGHpx79qMdXu8kTTg4T4nYA23BbA16HHgbM6JXNjeJUFCRGALGyHQPFZEs",
  "key38": "4B9wnxAPwjJz2fkBhTAzGHQLcDcUrfx8kd9wQP3qCGTPf81ET1eWVrhSdiUM5vYB5eRXiVgwAhUQACM2xnFzUPHm",
  "key39": "2kwrnM1kaUDLaWpWfn7kedCiFrPws1H8A7uFdWA2KuFjKox2nmFsJjC78zNPT8MJpGvMjMWLSqarYXfXxKiAmPJU",
  "key40": "47AiuSYgA3fyPCZwZKnAR1U1FrDwU2GrUzsrq36JbnQfCheBqHvUs1FQj8qawrKLDN4dsSrBZ7ZBwNXTMWCWhaaQ",
  "key41": "3mL9KrxrjXtLuh5s4DdyQVUjRRXk6SpQJkUvBmUmFrxxAN9ta3P6yXghQC73REreSBrsosubVJGvwn9SRZrfWdz8",
  "key42": "4fQojpP25Ff7usZW5huoQcW3j2kcvH847Sd5tKb13SSYqpzYEKXGZaGvy5ffsseimNBf7bPXTAkEPhU8f4yHWfq3"
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
