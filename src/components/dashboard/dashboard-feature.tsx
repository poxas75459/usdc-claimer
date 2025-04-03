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
    "2vUHfByVczwSYpD5hVouyc8G5XDRmb2dRpmx3Y2Zgk826KGwFVLotBEt3oK3FhoQ5GFMhCRGb67HXKcCk4u1se5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgUzTJFqWsd85XzxM2MFFDjYuAwbHDtJoqdtZQ93Wf82zt9nBQveAbCiS3jp8VZmPsnqxQgHLvuruytc5FMUrpK",
  "key1": "jBE837PVu5MCidQbrraxVTskBwtVbP718q5r9XJnh76X4uxbZpoceQNXKnTRPfSB8j1wZ9gKkisSiUMxDjw8sJV",
  "key2": "2ztahu8k6D9i1LPW8FjhcbMF427hYKVXCg4BZy3YUwpi1GiwAogWrT78LmynR7EoEaKLybGmkera8zNLww2MFY9i",
  "key3": "SQn8cJuefjQnLV1Y8AkFniMNw9ANyoneXJK1z9rcfv8mja7ERoz6ENxaVgFxeSc4ZxNAJTeh7QW2e9MrFWDcNAc",
  "key4": "4Nt5L2VUF6ChY28fLxig6D2yVEhsALbhRhaVdZABveD65Uyz8xAr8dnmanzcZWGkHGoiPoKZfWbm8nhBJy9ndhFy",
  "key5": "4oVQ9wyjo575dEVHKKUz27gpG6myDk6HMnFmJ8aWNGzQAaPwsHZbp44teieCBo1e2egmTYeJXmYQidai8hYTiLfq",
  "key6": "y2WucesbcLpgeG48nEZnSx3Z8UX9fGd9AgjvEBFHgcpJXjtkamVwTyUeYRwr3K7tTv1RrqUtt4MtsxzSXSBa58B",
  "key7": "3wiGtnehKYCqd4deBibLQdPWzxFNkXVoynvB8seL6QScvcwMRE9GQYC5zNy6rVuHYKMif7bb2QdCowdQ7YwYUUK3",
  "key8": "s61FgHBTQu52rXDFL5rggEeanxYPLmXZdtSjNPgtLfTvsGvKfMaYwCfkwyQqy2Q2KY1cGK2mfExeFXS2XtxsLdN",
  "key9": "yq2BMB2vVmWWmwkm6AAtasf4ZbAPPNQDFK7u4JSYwLQSqJCmtCsU4yPUX1wW4cp68PD5QT4dmCi3j8focB2oy5Y",
  "key10": "2KbggPanHDkp7mCwYS1WF2Nt8fEeZR1mVftJZKeFK9scHGzR5o7QHTXhADEQU3u8Z3NVeFUiC6J5uMaaHVXpVVEX",
  "key11": "Nw19xSHctmyWRGkMQXRtiJWN9pwxXttStsYhFyiYHdG6zaFhAsS2RLUTo9P4eqLkJscQteFyzLGvktP8d38oEUH",
  "key12": "2pFw8BXXhLLVb6oV8scRy4wiegiWsZdE7q8znJhNx1Mea72f3zxwG6CL9nTzdHmSENmSsBRacWYxvFpP8e3gHtT4",
  "key13": "3DM7bjjoEhXVVuEUxgGVEQnZPHwwpP8V9LYktkWxWCHwrYTocduXD8jz9WmTLxG6tdc7T41g6wh9gdaBbkirssaW",
  "key14": "3oQgb4RtcGHmDpJhpFz7tM4cTg5w8sSgrV6h67a4gdG6DYPZKU9f5TpR9nihRtUxCbic9WAwHd8QTPqgYWZdjMwX",
  "key15": "4nWPGadSXujFus7Q5YoDoyAXJme9U54LdGZK1EsZ4LiUXMhaPT2DXSP1TahhbWpX8Kz6M23LRsHyQgZVqSR82d1N",
  "key16": "4tPvMKVXnrooG3vPEdAbjHGgPE2G7Bq7ku5DD4tvjLxw3fhhGbVK8KLyBuzcXnNxqWfRYJebmf5FpyfoyiExTJsQ",
  "key17": "99oT3f4U9zoNwQ4JgbaNdtNpgmdQHSNYrZUkTbYjVxVocSurQerxSM1HPsjsAuF93vCNEk85xZB1CtakmxXsHuB",
  "key18": "2h3AtyCxNDtWPr9AEUx86Q6vEvD7xgB546jxrkhZN7dxWYdor9qC6Qq4iYnhASLG51ZqgCLmuJY3MiAH45z7qzfJ",
  "key19": "4acAmFUnRUuzy2PH9EACwuTtq9jFMcRy6vJnPyVgFxaBtYdnJMNwAv27bKjG5tab6Q71zteYVX6scxn9tcPQqEaV",
  "key20": "58SUWiEVXXaDxb6T5DMtio2WWVVZ2g92bNpX9vW3qCfHpVu4HNeX59Zr26jm3QnyEn1razHQudXsfVgfcPcv6SWt",
  "key21": "fv6nGY92rJRKN4QZbcoaqYaYRwDhVtmN44cJ667LgnLQz3Cnc6heWptNtxt8811ZP5DNbmNnxZfnJ8rbzZ9EgLm",
  "key22": "2SG568S6uSiMh2uLePBzPZUX1gUKUKtrQL47fH5m3tBWwi9y1QHYcAU3TW3Vn6EsCzg28u4vCbAkAZ8ojsWjSbjP",
  "key23": "2dZJyrqGSWJiJyYgaWn7891VThDRDc2bXY32zQ8peXgWbkQYc5UfvQ7LrAZHvnukHXoGkcAVDueo6tAMNMpZtXNJ",
  "key24": "4oSK4oCgx3VnB3ri7Gk6AGCLxFjJAWvrMQ9yNCPp316iuBRx1uCaCHKw1B8EZupSKYaALUfizo1mZueD3HJwNPb",
  "key25": "H2qDmBP1C7sFtLjHHJwRQX8XAmCny7ushhK4nppLeQ4rC2xU4yzTU31ABkkHitn6Wtk1VKsKysdF9T5VLQ4jXPx",
  "key26": "Mp64SqXxUaDXnwXpjL1HhtP32ym5TfT8jGr7HLvrKeBRG9zCHGXa4moXu9uWPcHR6HUUEqWWUdasoEnzrthHc6g",
  "key27": "2qoVW9ZG5XKwP9KtPMzWW5wvRfFQW7vhGyszpKYmHAnyp7wwpsPCWE9u6LCbxwxefEjNAZ7GRJvLcy7kEnCaZ9p7",
  "key28": "3RTRAkV2x6hUUzWvjRWvsZhkqrxLd62g8YsG6oF1ML6qkKsVZpNy9B8cufYENyTd9rSgiewTav9WmKdygADvhB8T",
  "key29": "Udv41pQQsoUPTuzjLDwh63SLnpmZJghRrqp1FyctRNhyhDTZvZBFBSQGqmr1dSYKDzeuWkAhFKNTjCMyScS6z4F",
  "key30": "2KVimSFScT7q2JyRVH9GCyvwASYLqWLz5dJ6WTRpWYCemrSNLAPUqntGCCV8iNSLuT5LR6MofMLkJxg1NCCzedFe",
  "key31": "3cnzsz9dbJhGBViGjri2DFigkirG8a5e3ktHa84rnEsUaf86EnKQeguT9wpRuFe8UeYka8oMUvdKd7BwSTQjvGAR",
  "key32": "3AgAXPU4D9NRaKC5f5bNjXTJjK2r7qu6jgcmq5rGswLHH1gbaEw8jcuVCh6R8TjpBawxkB1PK8r97egftWTcnLuq"
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
