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
    "Gk5ZLgTnUEDhAgmjfe5WSkF4d94bJS5kzL8yUXY6Sv7mtzDLV3uWc48iGUMBHizvkSjVEPz43RFoP4zpVYnWaKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pKmMXQA18Zun7VaetbzHYbKnNwm42xqSCp6aPYoHQBpjr1a7fteXvfouRtyJ85HxApMK6vveaZUTBibEubzofa",
  "key1": "2DnNaueRNAuQx7KMrGDd5LBNvxwV5xEMNGNvn4cBPVqorikgsanWRcubquqSQPGuESQatcyDoSfmfnisPwaxDkbH",
  "key2": "4mcKFqXjkTZq8kJTRFCvrDQ6UACQQ2T18qToT2q2jZtkooGW8G8F9mVoTUM9qk2YXe8q68opY5y4kwVBJXWiXbYA",
  "key3": "23XUWqQ9jXgFAWFccqimGBtKSA5uyX52dLX2ohHwTg8UgCekFJn6tq24fqinsQzqobMVJSaiCYiucv4jpGZD1s1Z",
  "key4": "4mviaifAAHUFx15j9KCYVqsdd4ufJMDfiow3dJbtnCL3Ar7i6RoaW9fm1sYirQBKVgRmncUF973YgkU9nJiP7oUw",
  "key5": "1YSbjDF53FkAovZnPd96sVZho2ou35geZF2h1vzJ1wg1updsWmyNWj4N4kcG9ygDryfXKW6NYwCKGgGNn33VdLK",
  "key6": "2vUJG9GribWAETNEQz6HoPPrxQhCHye8hEK3HFSsi7ut733APnpYewmaZMrSBPbp3dnnRiFtyZj3WuwzA5tMqb7F",
  "key7": "4DLCk1Y5gr3v9RHGwxah7yCm8QeiEKp8bmaUCXX6VodkiMp7KdBq5rjvd1CRyRyR8hatzMsNzzMjLekXqafDW46d",
  "key8": "5ofuuESEzJGezukp6i3u2Cmdo4sPY52Fg4e6YVCcLTBB797M96LAifP7hv75V8wzBrxk1izxLmnNmNJkkLBLCmfe",
  "key9": "4tPfCaqN5Ck3q1eWyDgyFnXNZw59CbBc1NyDuWSSeK8VWQPTmWoY636BgF6crdTmELxsXfD2tcaSrpmZDcWJQmcV",
  "key10": "3Uv1oCuHaKnzwQaTBmm3rPbztkrasZT8Dk21h9kgD9RtSz5AzrjoVX36bNhdbaHLr8aXmAaCBmdffG5pxmuc71qb",
  "key11": "RsyraJ7NZpqC8fNSkyDnvay5vLZiujxYZn1wENGifvQtqwDtBpNPhrY4RB6ZyMoTMweqSwBLhZkNT8RqRKmUoUA",
  "key12": "63axZtztuPpAApaCabcWCjQyPWhdovBjkX5NKvdyuYubvHANYGnXx4hJbJVAB8Ax5o1PMrAjR4dYXq4M7uRqBXgF",
  "key13": "4wCP99HaSyFiazZb84EuChYmnbfLpQvk7jBZUYv3HdZyvrSPaopepwrhpSXc9N1ivYwj3Qf5gpvRzrc2N8F82Qw2",
  "key14": "3RBAtnPrzgTgPwMpH4fdfP5X2tkin6BvwRuZped5ZT2AKJPszejDf4EuYvaBwtuwq9h9cqdYBXiD4H2eWTHSjEyj",
  "key15": "5ELdxbZ9uGPDe9PDtbkV2WCABLaAmEhANPetUtKDdyen6wu96ejmE5VoUCGwNJKD2qytM2LhvjncnoGVKxka8Vb7",
  "key16": "4AuYKqpLCs6LeAFeHtYspWPRW8Jd3qTB9E7eJiC28so6Qs4n5zdP4fG4tgfMsMh9Z1kfXDCuMCV1mHoaisLDeksa",
  "key17": "5R7jXpXhpxqiA3aFm843gfVjxcbUw3QJmSCpPFW19pYbXB73iNpf4AYLNzdhTmAfHpbTnQ5WUwmJzyAiotD1ELPF",
  "key18": "2zCQM1M9CC3TSH89qJbXGn6pbxpMWm7SM4BcUFUPFyGFkxneNbKSGckoeTs1FWzKJ6upKGPk8Wi5tEferrbZgPEr",
  "key19": "4vkwjfdV4QRLA3mWAkwXrdB5WSH4onyGt1Xr3ietqcgHqnL5iLbdTEB8M3nNHcf148FUocVGWVbQkZfBv2rkcnKy",
  "key20": "2Y4WnmGbS9JH7GoLPeYp68tbfkQ2ouhhwtZs8w2qanNvuGe2QspDCPtwkWwcaLLjFwsNQ8bvttFXoTRbbMietion",
  "key21": "5bT9QbQ38tkE5MMGeDjkw7ybQUqbmEL58cshVwhmbJ9g3hMCnW74Jrig3xVH2zTe5bxHFFTAQzK26pv2BmVjYhaS",
  "key22": "3bia229gAoLLLzMxsmQ72FA8Jgtto5upWDDHcZ26XD3rhUmXx8Fev9yQtGT7FxpW37NZbyKEdNKZuYQqszP3EjuU",
  "key23": "tVhQv5RoCaK42ZFKW2EXtE3DQguCUYfVzHRTeWdvtcT7RLZqJJFm3J6yTzhYG2RzfckrmCntcqXEd2Q4EnPF2ei",
  "key24": "ze4HK8bHm1ZTdmf7NWAchpV3GBAtR2DvjWxnqS2gZSAHjqegLdwpjyGu8Dnj6Q3Z4MjLSgMwYvPesyTruLPVdQH",
  "key25": "5niFihzf9A7fFVA7b1HeA4YcaZuX1Bdz6thNcpkzDYbC1Sfu1qD4LSBqL7ViQkvejDaKjtnJnNE9W4Aqmct3mCWV",
  "key26": "3nyBYXiaZXGM5uFAocV9se61ftaWRPL83UvZZR7j9wvzAf1SFfRyeSEHs6m6UMgeskUGMjvHdUPtzUUpHQLcgpHt",
  "key27": "6b9NTqwsw2q1YrxJpHPXJuBDBTyjJ561GgNnhgNnWurweuAZWvRL34jqKBubWREHMNkgZpTxmyyhtVYFCgmo48F",
  "key28": "5X8Qabc4MMqj7SAVLgr7F7q3qaFJok7uPEDa1yDqkHepoRftneuFFkHut78AJAcGptaTi6bHqtLdV8qacCYYjge3",
  "key29": "Bc3hhADjT6vPzUfFRbHdTzSTxZuT23mLeLtskNaw8ATQiUd5yPMbewAJZKNPTw1KZErErSYhG3yjZQRQn44FgVU",
  "key30": "WKvKwKQ7bG2G5Dc7xoFyTPxmnRHLrRyUrfmyVbhho9ovHmZ5VdcZbrXcDwAXvdaQv45y4ychJRRo3fwqSr5M7jU",
  "key31": "2rFgfcUm1yYNwLZQdVZV4WM3dfBdmnf7TGLz1TaKZ5duzUKrk5mseog6o5HgR23HpoAef2eiqGdsaXAbpNjPLnbC",
  "key32": "2tVVXnkigtZiaEX24WeB6wgmjqvkNTQ6V4hy3hAmpVeMbL91g1Q4cMjgnfTiAMSWcgrj62F5cWVkRuPBQVjs9mFx",
  "key33": "4941uPZj5HhMKNyhYhh8xoGvBLRsdCT6YD9PEmCkJBbLxcc3VWtKWE3JYCPh3MnDYxcbWYbeVts5Tj6u8qT6uJwT",
  "key34": "5rJzhj7WSC1s94ZMBmbqPfkiQmcFotCkQDts2qxqvSWG1mJTPV2HCPXX3wp3CZSr6x7TQXnk74u1zsRdbLsoqvEX",
  "key35": "3ET4BPFtLpUjLbXZCJvDpRt1UoCmrsAEe1LrPtELTkTSevxyN5ar9nx81Tas8WQA1N4VDkutxzqnWrmcmtAgbKyC",
  "key36": "41GjTeGn7umPannLgZMN4SqnBUq2mexziWX7DEyQVFHkcjvDd6CZQGiG9VhhomhoZk4tdsb8hPPZQuDnnVkC9GCg",
  "key37": "2HCHR3hJ1jrHbcFe98WKcJ1HNTAcGKHgBAimVjmHii8SekQM55oKMc7hcX42yEXvGn8sAGy1LGZR6qJsEsK71pSW",
  "key38": "Fj999LKYbK7myVrwBLjH2XSpBxq26Mk3WyJzPDRCEbwSSNMM9cJ7YEToHH5N1uT7RaDcnRuEFC6aM71ZD8H6gPN",
  "key39": "65TD1bAVVg6X6YWiDXHKBKSWZ4e9hhLDk3Mtt4nSjK6QaBAtdSgw8sawiBfJGkjghsaxGCAa1sagvh6ziFhsHDnM",
  "key40": "4D9ZAihkkYcdm713vj2gbAjLCh5Ly9m6iHphzPECRzEjJS7doz4cWRS6FZF3PQ3ALnmhPMYd9SEye3uKkHQkEXg3",
  "key41": "2NexHp8zeECWgQeiY2J4ALNJYQHX8ior6u9j1K8j6b7yWJjaFkVJu7M1TYcNempxxmBJnga5dsmmQkSFnB5jnHot",
  "key42": "4aNCbLggN8r3kWGyuYv3ErQx8WB1PrAQvCvtp8idFFmJjzmStMgLZoH6ePFtFMeKqJVYi19BWMyhoExyY53wW2oK",
  "key43": "5rSduRpcUEuqrK5JNYkRxRWAt9ntVJ94LZQ8Tqpu3imu9tSCQ7krk7kbPUTgJpBp8pPtF68sP7HyTEr3Y9SL1Nde",
  "key44": "uLgPzbKSvwcWwCjD2Hr81eixYWMQEEK7BukzMLwCwEmkJSvHE9jWG76dXKhL7CDJtwUquZnjV5YCJkMSgrhZwh2",
  "key45": "1BnNk7HDYx1UTzbkwXgJCnweE6s2L5kceM84T6Y2JbXJ2nqemBtveDWz7nLgj7X8bEBmMom85oRXaQmFkeWG84U",
  "key46": "4dQ1WeX6dBmbrm1RufxXgdvcPzDjNAKaf6iaGCCS2YjKFnYA8Wxrfd8KKpkLCxaKBoZSiSAZnXMxVAMQwtsx7K2c"
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
