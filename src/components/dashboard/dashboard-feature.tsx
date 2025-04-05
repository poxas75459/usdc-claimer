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
    "2WnAKqJTFatZBYq1D3CHArCjiuW77d4sFSgDRw7kcY2Z6nBiuNTAka2pjMWNvVQZTpJ21VN2nmz4ztDr6eybG6Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2uorjG83cvELax3mpSRX9jEnAP8D7oyuGj2DLujjq2zNMmveDHKgRtzDfFp8frAJC7duHtzw9TgYrVJRdoS88w",
  "key1": "2psXpV48RV3hkHqpUhNmLC1qD8x5djMCNxi8sQArk6eoAvurZCyxmfThcnkFx4vQpqwo2fkG1hqHwotV1jFVARq1",
  "key2": "4FXA8FHDwru7rgHo1N5emdjhRZu3p2LP6qkiBUCjVfkGAv5ZG8chiNszJdnnjwjz9VhfwiCLX8V4XgkvPn2sa47q",
  "key3": "3copyaSHKonP9dSoUJxvYurj1QwejrvGmKp9eWtF99EvVuYuTcoujTTnnpkFBSZUhaZLmoCXcN6DD9U57ZuX8vHZ",
  "key4": "AMoXdvRKzFhQAXjXRrMJeJXtV4xAhvs4dhPBSCeLCnUni8MryVVpsaQgXGekPyZ2royjbms1nDZfR7MMwxKyWX2",
  "key5": "3yFZwFW9UEstejRTQbCc3HnvtAqe3Zwav4QaCgkXqUPvRwZeRTuEgFYn2fukAuetCDweuZN5LjdSg1p6PMS2m62y",
  "key6": "34c5qQ6EwQjUET7RT3VJhoZUe62NzcEoC5mfxnUcZ4SW49vKps4nTybjdsNpxk9gqAMyPrCTxsiAN2kqnQP44ktr",
  "key7": "5aY4o94ZL3rLorXujJJQP17YFHiTHC7qdWnwmPCM8KTyGgPgX7wTNzwkJmBT3s2zboNteYuNXoaHiRPn3x5fMnYP",
  "key8": "4TtRxtin212g4u8vp4Y2HE3ap3mjn2sES1pScX9Vgo3Q8yHoSoaW8JfVoJ8uCouHhyYbKp9h22jx69EpzdLU9RVM",
  "key9": "2iSqA3BwuBffUaqa8wCqhXuXhZq9x8XvccxaeDVbJFDxEoYyUPr7x2fJWjSKXqXZYQnF4Bsu8WSmW3bfVUFhypKq",
  "key10": "HC6VLdApyWnNJZPFgMLGiD8RTKHtpwLVQ5iTZ3BEFyihAA7NNg8cJk1ttd9rUFamRTfyD8r1xKpmrtMSSeHUapR",
  "key11": "5pzSiTk4Z98DGyS1WSkdkn3tZweMrfspU1sYXGsTmm3eyWFEoiomjYQygTyzrvXXdPhEWfXbMicTnJwsyGgS2B4h",
  "key12": "57DCw2AuqwZ9kJE8KYbnfs7ubPq4SgarfDHTercaMTJ4R66jP3MvFXw5SWujXKuMEandFuh5KkBnz6wDeeLMoWMT",
  "key13": "3hwfnGjTMT8crQakVAMN9oB6Gy8BLVtgGauLMZ21AZ32zMT6CpExhtFzHyanzReXa7BMds2gSFQUSd87Z9vBmsLD",
  "key14": "2T9AajjJYMKMKVzzc81VfQG5EwsdobCpHLsMnRz5BJf9hoDoomczNQvfC5mXFQCLTvv9ATcR5BpVS9L7BAQvQfLD",
  "key15": "3PSm44KKfjHKDUJyEQLPtKGpL7QcKaRuj1CzV616ztDrHvBPEZ4YQ4rRHpMCbQZzfddLsyZtPPLG8EXRPuCg7WU1",
  "key16": "3RaLsTs7Hujc6DsYspsVJW9ZmcShenTq2Pef543d1xgSSihGXfyW2meLwQaQhZ3nTjpAJ8rDs9pXG8x9CGkRAvHM",
  "key17": "4rjm1LvUtp28DZZHu2gNL58sFeQFcP6NibZpSPoCN6T72RYCvaudTgS4pMdS6j3HsxaYhywLFu5gk9GUqVZBPmqL",
  "key18": "3vnfXadPAg6iANEk3hs5KvDQCb79hDu9DMeHUJojfic5uEvm48WFKSiGLaUzdkYb83cB7ZBrHdwo43A8Z1bFzvD7",
  "key19": "2xmkUk5feh1HcKUsDy732T3XdtwS97JXDPg2U8qkaeGeui4PNrMa13hr4cayz7BArSYoc97M3BhydsC55T6moa1R",
  "key20": "4BmLeW2VjbYhfqb4RzwhLb3BVihytuuAAbmuq6LeJyx9o73q6fQSxN5nzZvxC76fGnF7fMv5gqvBsbPMrWLSKx9V",
  "key21": "4duYXYqzS3eVs7wRKkoyxnFkQX4b2MyJYVjZRRnay6KoD8Jz7Jzjm1B2W687r8zsasip9c4VF64Z8hkGUXtMneeV",
  "key22": "5EMS4BPmhLx5CdfxehqHDo61myws4oemgCbbUM2zGLiikg8R6GXnoUJQ9TqYuyF6iRU2hfy6qznf65KkZhAwU1dr",
  "key23": "2Ho43xPbqoMWHaR23zWaqdxg8T53p9CbVKTbjeVKCRqZA24YJ1KkSTPKGsuYgLHhK5mbFz3sjedSagLF1sbagv9i",
  "key24": "3WbTR1MNmnf5uS5VH5fyVzMwzVB5xuvdy7b41X1r6T9QBFPBjGpJaeJpPpnUW7KvHkRW95uGS1N1kRHCvMoyGwk",
  "key25": "4Dfj97h7qg85qcskvVh8FmVvDiKkjY3AXCcu9ijNW7qoNS2iiyYiYZJXunyWBM9bEBy8vkz4cmPA2CnWn3qRaM1y",
  "key26": "4GCSnN9rfEe8n3uq4dvj4dx8zSgekt6t5woi5nBHQkN39t5zXZBsyhq9KSzELhynbkqcH7JZi1JnaRPcj8oTnbsi",
  "key27": "2ynbnZWe6x2QJnv4fEGQ5AB1WkRK6vAcHqg7WxVrDM2yuAsUiDfLCC9gtrnsTRQ3Wd2MLgu52ozFRpVFdzA4WegN",
  "key28": "2k1hRoUwmUXgcNb6frv9F4sXF7RvPASPrSvwNkvozPQCpxuYMdnhdTVqTrPthJdALiTbs6T9au4KXis1jGUeKz5U",
  "key29": "2YQe3bpSd3NtZt1jjUePobL9Z1eU5Tnazg7G4q48qozSuP5gUVxNz6KGRqjUDFNfcfdDZeAA2PreRQH63T8Yf1Mn",
  "key30": "aGSDwxE3FQMWZxmBVDL8JWDCnX8FeUzHTfztQSHTGMrhi9BCTgv8wiUS25QHJysqd81LaXY6rUcNyW2fTx2qJuF",
  "key31": "2QReFybU2LkxYDjb7zwa6UWth8wzVCS7SzCZCW3Yt1VpYQYDRgs7HcpU7C6zGu2vVGhcSMMmi7u5um6DjiowZ3ZZ",
  "key32": "4voRp1Pw6iZHwJic6Kye2qtCSY5nqsBXervryjQ8EfB5PaYtxahUYfeg2uzWSKjVARjuXqu8VWvZBQMtKWm986Fu",
  "key33": "3j8qzMSXUFVuZXS4deJ6TcDCz6q2sWgsn7FhMcETJFzUkawEL72TRhCFSmem9Pe92E2W1xHsKNXmVUycPzC6nPk5",
  "key34": "5cmWX45uwS4pE34SBPb9bara33iigfBwvT2quSR6XFuCoS599YHbJgiX4awdAYPTzi9KDfiNpiuMmJPn33hstZ89",
  "key35": "4gBH21SmKr7cj2zr2FJDtkvS7znTw5dNjWbeFy8vDeficeZkm2qHSo51MkbJadxYn5PAjDERJMwc1yRkUuqQBrAL",
  "key36": "4kbZwa4n5eZDPEkUakxLFtBdMJNdfzj4M28WpfiGa6V9A29HogENigaorx5M4hfigwtjkkGcxGUTorsngneoiRzq",
  "key37": "N3YAs1BRvMx63o2PxZzpPjPYMznwUYZPEKUkj8cvP2W4Ci7XFbT94ycfdoFCkw5PwzaF3hDGRK4VGGnopEXps7o"
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
