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
    "5UX1YgMqVkNANkRQBgd2g2NxLMbP99RqqQR9kthP8NjSKS6NAkrNHRycFqRZJsQcg6E2px8gfHX97zC1gPGn1frv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oq2J8toD7num7Dq8xHcMGeJxV3hZrMGxksyH3h5p7nZFYEehWqcoudfiyDE7zYhu2HrQ7o8e4YpjK8tp9WF8Sqv",
  "key1": "2emvTVNwPEfc83CZnZhnMqxLgZU5fyXhTFucoBjouUuzoHkPk7V33QnypgeL9sSRpYxvGTikDySYtahFh5PfBTRa",
  "key2": "2zE4ySZCyh7qZKhNCjJM6jsAVx3r8APTEGLpBckVH5ECitdxYfiyEB9x1zXvHvMdtpXFcPjgwdV2eGZaWv7CcHXQ",
  "key3": "2Yi1UCAuc1FBGxM1XLdnPfdjkSEU1pPQ6Y5JiYFJRS39hZT1jkWj17Fs57Ra2KZcLbMs6k3nAwK6sRtQnkscj8zF",
  "key4": "3d9g6rMiSueViULsQHoGBm2UhkxeNF4Pcu1yKQVLXsQjtsaK5v4LrqKaRPaKDhSzZW95Q6cv8xzJCfhoLBDU6G2q",
  "key5": "4NXLEDPtPvieNjCy3Vz6pe8ZLmSh5BjrwNLr7FGQq527FuzDkthZnYE8DfYspM7Jcq2Q1ANosbpa6JzBKPzh4JuJ",
  "key6": "3fXN8BfTzAuzboCztXhnNaiaDqFBNDJd4ArXQB95wCEmUM98Z77k1TYLSqqWohH3K9ay49mx34M6TsMmQKrV1vYW",
  "key7": "2zpk7RAbvUzKLB2iV19QcwwTuwJWdKjvmjFoPq2Lk5LtBSv5yHLn8VK4jTHpnLcoHaxG7Wi77rUKtBHNo5a8D3nQ",
  "key8": "2fJ5BNB6dtfFi1Kx24iYaL6h4zSLU5rrYbXT5Q1yE4UMch1SfFtiHSWmcNYKhCPNrDdK1Z5Yi7hMcdazFp5iqbNk",
  "key9": "5GAAYFzszG7bUrVoEzHx6LW5q5Rps1F39BvgdkDYeKn6g8n79EhacjMbpShzY7YwydzdzTP9FCvtrMrAtfqvem6k",
  "key10": "54RfLMkmDDcSfXs2F6QPB7Wwp7PJL4dn7TKFGjDoLbXZFH4Wwqj2qz83gnvG8zRJetK6RUgSJKhahqBsiHin8Azk",
  "key11": "4bTwLx2Si3k8W8Fkn2dWbGiA2NA5YpBZnCu1HbKgTagMSVjiMWQyGTU2WPTkjUrYvqbkqT6QD6FdFP9xBPAmRHNJ",
  "key12": "5J7TGSz1Pj8eAyk4rZU8gRWDG9vgULyBhRiKN8KfLnyaxMwNZnrYF2zrcu3XxBVtSu7CrVgJHUAhvoKNSdKzV88c",
  "key13": "38Fe9WsNYT1XS3dDe3VtEG5baJ6DgVi9UyGxJg4XBkSjoAP5vbkoUZgiF2UMMmjFnrkzq7jmCsey8xLSGxvRQV8k",
  "key14": "44Bch34Rx5f6HhzPKCFjFDByya2SAJZBBFmGjAX4pGwNwrSyH2LovDEDXE38kdTKpgCdEkcbSSP1JNd7Xsf82T4G",
  "key15": "4xBuWZMW9MEEJdWb9282gVJbY9aNzookr7KKJWqGtpAGQWdCUdWQwsMpEieo75TwdVxGszJi1nN8yUTkC2hiLbK4",
  "key16": "2WTSq5nFoUrSCvr1NMAy9doehX38mGsr3SMu8oDiXYiKxF34cWZmHBEXX9p112kRmKSioVdDuNGpvFzsMvtjCcHS",
  "key17": "2WGYUzQz5pdfSMgKvBeC5hiBY2di7z3LFYrnXDF9ynQ7BiigYomTJZm8owPswMuvBWPK2zuTajQemM65eMK5q8Uh",
  "key18": "5fX3XjfT6h7KaGUuawvcjDiHP18N7vWdL1VaQgdfVSPsRUem69tsgu1BUzpxycJXYRgECPdJfZXd9SPdzTvgY91f",
  "key19": "2mqG3TCigcCuhGjZPcnFf5GJzVGkM1APxTJNBsA7htN7V5zFJFoAVdLEW53k1j4VApydV36g9y5TX9FBfpiZQ3sj",
  "key20": "2t47qNiXuN6D2WZ7YHkfhFppM2YVhrbyc4N5vKM3C5orJnhaSfP5TYP3RYTndwCeAQc8xQWZomg9AKsHbyc4pSy3",
  "key21": "3FsovtLmEKpNE8ty8QV7SsiqcsFKfi8N4xWSRNAGqA4mFTLvYSt11aeDe8LZyBLCDDirg8JuHHPN3xFGvDRZ921g",
  "key22": "4YoeMC5xemgCDWHmcXFJJni6xwb84XZ4V4vDEvpYztpYe9akbnMJCAKjdp7DNRZSNjBsj6SPYqs9wExcY1RVX55M",
  "key23": "3U7xPEsYnJuStM5BfX1HcjBsWogvZ8NpRqmsBzFnShuvaRW1j874V5WpxsVz9LmYjHWzdJ8T25UnkwrY3UMZJtHD",
  "key24": "5iQhNhjkf5ZwhuiYwPFTckUapbTEj9kp3qa2idpFVWxfe3eftd5BEXJdmY1W5cbpCo8ewDW3gcyiGW62wHPKMGj4"
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
