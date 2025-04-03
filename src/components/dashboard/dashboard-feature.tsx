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
    "2hep24YvzynX1uk7zLrmFhpECaWcztgQNcvXfhG8EgBQihQGge6EGF2LRpbxc6sYf6pbcMMcQBz5RHHyPrphW6MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKv9cyNYGZESfHQMMUxFRPm9DY5qx6NPd8nAxHxsPY8mCg1HCGEgmiEzrS1rAM52uyqriXrEKFFqanCSZERH91K",
  "key1": "431kB3RNaiu3QoMik4QfP2HiHdEQRNm2sJe6EtCz6DuDnTpmZSRSmfU1pNnF8K2nJqyvfgTe4YLu1skNxbzWEq44",
  "key2": "2pA3ggXNmF5x9ryBnoHACB7h7D8eBsKoqtpJTvc3fhEZNGHfds8R3ix8ti7FTqsefxjUC1a41j2YVGDy7DxFEXmu",
  "key3": "wUWN9uBEGsy5PrgxXgan3p4EZfMdS3ikSYNjabKFv39ZwMV8nFgnmUK6svV7Ei8rxoNgjdHcGTDy1N5wVCsc31f",
  "key4": "76SnSXNSdNc5x5AQB11sQ3s6wPmKnJXRWMtr6S585hv5Jf7ARbkCoNPjbVQPrigFmQpRUfwMZn2Tprisx51sSe3",
  "key5": "458skaEiEShJNP6f61i7QVBpF4ZStix2VxXzTaTdg3UMetPqhPDp7CjrcGUNCDxgH9cK4Jwi2PPJHAVGfgYti1XZ",
  "key6": "3Efhs9a5Qga8mdeXzSLNhYv9re3WKsVW2woUNu2FtgdYMU74B4az8Avme8Z5N6sqj8kE6zy5sDRaRomHndk5nSUY",
  "key7": "4RKPodurVuCwTcRUEwuSvwBJzcV7tvMFpe8dfPRkwdeto1pJv9QWtvsYrMyBvRb5RETMX1hGfKPGk8a4WGpKsgNW",
  "key8": "5s2FxKUWEA4BYkEXXE48qY1ZbswMr5h8aco3N6VQT3jgAL5zccMSNnKxHUD8gSGDAc37kDUrAdLg8GuBBcJWSXiT",
  "key9": "42VdP1VEadYZVxfKUT3bmh4o5UywN71JRtvGhNYprtKQyY7FqKhiWwo2p1mJ5Kxj9bmW9j9UqKL3rYwepWKXuLnx",
  "key10": "2pGriUKGTYGzhS4bZ9A1j4aYgZxxmXAG2dsg8Hdx1NcoTqa99BnUCTLKMbfWqzrEDez6A1UhQri36pnJuLQiduso",
  "key11": "W2kFJr7wMvKG7xYUJaPTwiv72bcBPo8CZxcxVzUyZi2jcLJ2ST7rYEgQinyTWwCnw9cnYc1BZKSUQSQQ2y4nxrB",
  "key12": "2Pwt1UJkVmiTb9Uqrdyjc4YSgG6vK8WyVKhjDoN3bWXm2NN2KV1yjTWLC8K4LFzjmPesskuMhSEdQ23v2XGh8ooj",
  "key13": "5AM85s5j1bKGBCEin3wWf71zwwjeeMj8sJJcaX6EN8BBjiqCMnq9DyZkhHrrvLw7VDsE4YTZPmBZLoFsPicwR5oK",
  "key14": "5cEWABGPjCmmsTdEUoKS41c58J7GKoohWbGgU3r8BdD89bGZc5ToDumTpxNC5TVVk91Z7KQC5oodEGupBAATWiuC",
  "key15": "2iSegyovRf6W85jVmU2b7fUyEg1o6YDSuifjpPqhiRynduF1Y9aVVpD2CGZBaFoCjeYdbRvapvWL2qtYyrk4P4d4",
  "key16": "rPisv5bo5vk6C4X6UVJw4A4yRsDa4iFPJ4jActo7FHjoZvvnjghczoM8jry5qiH9DN6NopWNc4r2g2UMmawf7Wu",
  "key17": "4o8Y6VWkMA6PZwAZPQUh1Gs9PHHvs7vFnNZC2DpNqhTZyjBWagrKFakz8RksXPwXGBzqf2d8pPZkBDuzLq2FzpZU",
  "key18": "4bC9MsvWiE6D53g7r8yRrTqGANkUtqx2QuoA6RvTKwS9bqXrrMAMT38f5CAZuqiJZkxBNU7XgxE94iDZE3NnHWzk",
  "key19": "4o7kkmY2GSBjwCXqSUKTfAWM778ZGYcNeYwvJqsxL43jW7sh36XiGyKGqGwJxMTPDtAz1mfnGCihHzEbueTRjoRH",
  "key20": "51BFXucgA5uDHF3mXHge5hCGSLi7i457WHzU98Ptf3TJnE7Gtby1fAsjzS2Ke1zHR2S7eSswBqv8BBSCaLHTh72j",
  "key21": "2rNiDnerj7WNTZFh4v4MbEEN1GSF7V7DgFEHX2T4U6G47GmX8JwnPEnm5P5cLE4Xo1YUEiUqEfUVxYEuWLizJhaV",
  "key22": "5mrBB32DoTkALH1fUEJKsNneBYCh5enJaZegs9vhEfg7pdbnvCrjwz4zKnTPM46xJnpueJCztmHHECtYMGinne78",
  "key23": "4RCSM6cRJUpwpAZffBwDVCKojunMnjNGyEKCPs2mpFiYw8VTHGG6tpjhQ3RYXEgRfd4ihPBs5739u2qKWTJ6DJHL",
  "key24": "2jCkAckkN8EHa4c2XyrLwi5PY1LE222nXFJkTUkCqJAYdPCxwFQ752n6CZjdmnuUiWXHj9puV9HWQGFsk4FY4DTZ",
  "key25": "47MB86PdUebQSbiJDxHJYu1oETcm54wjNJGXctYs8c5QjCfRei83qZJhuibYs5dtiqwWKS9Pt9crJuwShqTWwUE4",
  "key26": "aXNQ4iVycfj2TQ2j5qQ5jjxtmUc6uh7uMf54rShUpzPj9kY92YXeY7TeKCn24BCNZ1WRXj49FF2jGiwnUTWi117",
  "key27": "5XZ5VefkXHY1LQR7mGLrrCBwiWvRZxHsCDJR64Zmz5x639rmS3tcdZ42xKCWoitpF7RkZ7z91e4qNCncFrK8FJQf",
  "key28": "4BzcXpwGGuvqXcwjfggjomSrWrfGmpyWj53mmBj2Ho88HdZB39Hy54A7xhFNm4n9EiFkK8M731XuehZXAdhMZwUr"
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
