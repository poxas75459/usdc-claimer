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
    "2ayLEFR4CBpbuMiHqaSEs6fegcAJU4KYyz7kNhBfUioBw8Lkf25WjU8isM9XrLevzuvfnTdRbUGmHZ2UDgWpQ8Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXMpuwia7NgxnW8dJYnPbGFcq8n9pNiCHijFqa9RHNrpcDk8aBHWXCHH7pNnirYUgBmH6uvMi6BhqwG26rHa5PD",
  "key1": "MWQbLVSd8W178pvE4zZ96ESngGJpxdXZPftcedgkaTV9WyyXaz3R6Qvkzk74bwAvecoTbUpvk3FA2rKbDQGPdnz",
  "key2": "5BqDH6H5s8bTJ5t2NQ62CktLcMx89dnKy7ENLtp5vavnziAXUV5k2EMBGmx59BgkMqy4iZo6TZoTy6rxu97bWEDP",
  "key3": "3NWUs7KaGyTBQEwMHrCXR6YxwxhmrVJBtTSKef23617ochKPCb9JgQgbku73nrJocd6X6Q8dt26FtYQ6CJLn3J43",
  "key4": "32oyH3epvS9629J9aE7Ts4pz3w53DooDTNNNRURk8eeRHAhTCD9cMUTkGgbqKCDPaaoS3xUe1KBeGgDhbyYXHqfF",
  "key5": "3apEqqSYCNqs4tozpSNogkJFQWKr7APGkgWH5DMK9QiFVvtGsJng7gk8AjTGCsG1G7ynX4XYvpd7asw7FZuVPk2P",
  "key6": "2brPPKZYNvNXBvNYN9eaq1CJyWbZDJJxF8AvF69M69kpJheNjwpJL8iHw7bkaZTXV8mUhJyeWt9VRbi8BQLcLhEX",
  "key7": "7owAczR4u46mKRt9LzVwfwAVokdyeatGZ6KocR8y18k1VC6yY1qod9rsJxfDzUegUGkYGRUo9pwh9wq8pVm7p5D",
  "key8": "5FNQok8caBD6jm2xK8hJRabwPAeJR7AGP2v5nZt44HuKdwoJNyQKwoCP7vz7WMYMa9Dw2B1ere6s5oP1zPuR4SBS",
  "key9": "3wk3THPRFH9DSKwnNm6TRxHJxSit3E7cgHBe2ktvS9bNXbNnnjfxQdqYSVtjmrQRhakwXWENvCRTnKdoyPMfrhEm",
  "key10": "4hM1pDZALwJTcvgaH53mnxKNRUQJhE234hCmqCfCdGWKufEYMevKtebdFFwmz9Ay2iQmYXLBUCQNvoo53rEsJmtw",
  "key11": "2G3SwvCu7TW36FSU5eXhY6VSCWkY9ALhYvQTgCNPxPe6kLhQz4bSecRGXYGamNH1xcbtdTyMjZKVZYDpDSBTxBjF",
  "key12": "4simfDzxo7izk1b6a4sZb3UVjXgmkFk2RsNU4qmJ6npVnG4g5oroxu7pBAtHiCfiPhx351LqP7UjbdDUQoFEjbQq",
  "key13": "35dAgn4Qkb9LuKH8qJhDXnd615mAV2XEc2DjCfM2notP8yhEUFDG5St1mdca2UDmHBBvBVSEeynYXf38yEfJGsPc",
  "key14": "4seRsvsW9jTACdpqWUw4DyTYswdKmUjUnxZU7a2z8NdWUrjK1rKRpYiJHmoiEF43ms5GmGPHdQHz7Q1xhFEQZCCj",
  "key15": "4jnSPZj4D5teUQLRp36HjaHFDrvPZf9zJn8mczkn6yh38o38FJdGQ51TurDC2mE93ocagfwpuzttLTj6M3bccAey",
  "key16": "4rauij9aPKHVmWsKGki1js5EpCJcd9wS8uZsktHUoGV7a2tf24ywmXhHvd1E7rnL7rPArQKJpSeEpxReh7dLoo4H",
  "key17": "54eGLBkhth89t3VZ6AiLkvFEYCkHbgf5YNcQFBw9yxseaBe4XF1aDWSFqKNXKMsQaCucJ4rEtFCrwifFvpBpiuxR",
  "key18": "5fGWtwUgh7HQA51jmWEzY5yNVVFemcW3FnBbUtrmPurTrmqDNGk1rb6kmT7682iPkBifK84aEFRWTDPPooBNMYnA",
  "key19": "2PTdofeRaoaFxWX8fshSip1JoSXKXTcTKGSdkvQM34kubJSaPqDrvnfzUdYDiMrJzWpMuTTT2zB9MAxBEVEAAvfc",
  "key20": "U4bTk3R44UeSbSYFWMCYCozZhrGS1zsofZiCHa4Av21zMszaEwqiRV1GjwizdsqbueatSFoVkWYFd7dtanaCUBE",
  "key21": "3tPuYsdY4mGMyLXH6mzezxC8Rw3vfnBve67gh8rG3hxv9eps9erPcLF5ZdxxTeMYfzQmesiYorUYwazR85JpwFaM",
  "key22": "oJdtEiQDK9pueafcpUtMGCFHtg8rV3CMd5d4w3Vdtzf3aXDghdJWYzro2SNMhFnbEKMhN6Vgtv6FrtceMzguQqc",
  "key23": "XMz29YyhWCMLVBWuLmLi7axqKac1LjnDTbyc3yz4yzrcxMaVdXbka3MSWvJFyLFAji9346ymHRpAx8MhvvVR4zW",
  "key24": "5vmT1HKRnyDUbDTLnJDFoE6rzkmXJ1YviAEhHTyCiz8cCb9pYfKRog7KGL1tSWAvLZQJACDRHrfTZMsF7fne183R",
  "key25": "21XbVD2ju2cVGmnuS5HD7xdwmxDf9CpETg532EteeLjY7ZoP19KUDnffv3tJJT35nX3HWVC2PpXws3C71xD1v8V7",
  "key26": "rmJs7ZgwfEBk8MFqvj64XV5Mg3vD12ot54UrANNMeE14ngPSw8d7wkG9P7xzXogmdPcFv2hV8EtRBfBqigks7x6",
  "key27": "2nH7yLu2nURm1a5U4psqnbdbM2x9R25if3STVD9qbUkXs8mAzC1EFxJ8YHPUxHghCHhpsCRxuPLDwgfhZvch8AtW",
  "key28": "jJdRtS7Nd11iw9Mz1ecydLBvEZasCefQ52SfiNcdvoXKdMjekbP8khZ28ZXnnCzHYo332aohaEayX7p3nNjiDhV",
  "key29": "5FS2TjjAgjukDGs5RmCMM6ov7MEZYbx3N7NAJghagjJz5MrVf6tUpv9XWnaRe4yKW3dKAHFHZbTiNmjAXUh5pEty",
  "key30": "33FmGKm7UyGZb36CGHmB2B2kR6a5TVYSPcJMsBKMH7ppp72umH2za7RjKzCK2zuX5E9tb1PaBawFnRJ4rqWZiSfJ",
  "key31": "4yqa5zxrXLnPEmrjLDfXBo2J6UZQhRw5AA39xghaRRF3LCFskRCSXSUzderejoLswoZHw79TFCHnEvgvdEWw1CzC",
  "key32": "5myRBzcuzj2YrnDpHRyQPT3qUJbEs7RnmTxn4emj1d3yhERKnq4qLgJ741TuN4P45dh3YAqyD7jWsJNcPnALrHw1",
  "key33": "65utCE1kgYLpe2HpSrLymA1vUDSCG578UrmRWV3aiok3VbpNMRyZGeMhYscsT36DfcQkzAP3csMSqSicWzMhP5fh",
  "key34": "5YzPtNijKbXGDAkHMrngZtffLnj1qmdpqya9KPzrLibmwtKRVA8dXfogfqYu5s3cwuFsb7F4v2QdPxqaW2VbvFCu",
  "key35": "5mueAVarcahwKVtvTG3Pi9zg56fpXWsatLWUdQXvguL8JfV3KihEqr4sgGteMkgoLsRjNxFvc4bTUCGY7jQzobAg",
  "key36": "5mBW8HRjXSmyLqmhKWcrwxjJWUWj3asaeAAopLLq2mYFVZKWv3x48YDeYc6tiLwb8MeuydWMwXFsjdXRV2HtJBXT",
  "key37": "3nx95qU6ExoNVsBxwbaCFNCvCwu7fmgGcF1GMigBAhYJ8mVQKdkpoXxxpUaWHMGTv7aAb3K5LUaVLeSF1bzR2qL9"
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
