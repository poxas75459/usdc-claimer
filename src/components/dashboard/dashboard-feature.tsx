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
    "5ifxPd4MqS1vnVs7w58migKPRskkc3b2fEhigb26ErkJmfiew5ub5cgfApMSyKWBCPzwT8NTPXpiYJoECn7KaAgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQFjjAd78b9XcT63iyeURWNKNE5GTF321KUTg74bYeFiKJMiq5pTJPVHiX82bc4gGzj5Phc9PHSQcznoj5NYNnM",
  "key1": "2dL3KnNs99ZDkpZgcH5FFhpyRtp3rGsrpJ8YvLwZ27i4HvY29bGALEpeh1sf3mV1LwamdMBsBp9ic5oZQtBvkyBi",
  "key2": "PBpgXkD3REantEYZMor6LhTaPuk9iRm1N7B8owyGqSWfio2mZwFH6j8N3C6tAip24S2xdNUjSf58gbp2YFHLRDL",
  "key3": "TirhKzFNJhXHxPdaU5hakmMyEcs82dPkCkGvHXZVTkJU7ZyPuUNTe53CghtxiE1vaQYexzvhEGdT35Jzx4QkxEw",
  "key4": "3PDnoqbnE1tkkZA9yXnNafvbJvgvUKS14GtXCt88pVELb7MhPr6v3XLq9CnwyAawpK3WnFkWK2bGx3sP72Ny2hpb",
  "key5": "XUzPkopCjDyWWHjgJBPC1sqHJjtYsGwH5ZyDzU9xicnKi334BureTkJf813DR177gvCTuPLCbxNAfQqhcSoQ9dv",
  "key6": "HhQDtKpsA6Bo4AKFSJkDgWGjGedAivAq17U8e1puTBnmvLsTj9aMUEZDhMGhyHrmReu8orzajeVvJ7nEJYByPtk",
  "key7": "5KZFUwtdPk9Piqs4nUbYDnPgm31pSknnjjik455V9ymhJTHiCwfT3PXsbpaDSUyUScDU1VFLpMyCbEajvj3hfaAD",
  "key8": "2ZnwjpHzEng93q8hGnhn5LUmAbz4kUDFkua729XcP3Bz8jGfcT3NLgcEeehGxXxhKMU49FidnvWKuPVPLvMbKDRa",
  "key9": "5BGtUZcWFZcTjrXrYPBbNSgMcJ8NFNYeg8UW3rApHcDXcgqt8bXisJemUAZGVuwoarmvQyeh4sNRYLTvoPHthzyp",
  "key10": "4Gi4dw6S3nKPg2Ksd54PcX4gQifhxXt2oXuRVNrwj7wZdbEcNcPdwZ7TxZLUjqRzLgk74D2JQR9DGcooX1LnisJ6",
  "key11": "2kPRfWpDqPcFU7ffBNqrgT76vHLeexCEMrqkbKurerR7bpKE9uTxUmf6boHq8sV72GnXANnoa4n94FTy9RJF9QLV",
  "key12": "4Eup6G6CvwCbCvkL8jm7L5yvgb54U1ZBwtpgm58jvR88jNbnrBegq8NdbAtea5jeFrZqWbwudPH8fLnSzdCw2i8h",
  "key13": "Z1cyB8K4pqL5hAd86kMMRNie8FdUbsSyYs5cKU4EVkpZkjkrs7bPJMRNFVnNXU898cjpJDgAdQPNukxhLMLJCXr",
  "key14": "Vv9VK3GLw9LvgEkgGPhf5eFPxv9PTukgRynZXapYsFeau3hfeRziLtQYk9JmxBnEWH7rF1V6Vsqhu7N8yhgy6aX",
  "key15": "cFVpyTfa7QF7CyLqKdJgb3CRHriH1shvb7e15ho5QBHw76gczNC19Rm8VxR8tiU3P5CFm7U55pH6nSUKXdaUW9L",
  "key16": "4kKssW7SDq2VSZNaMVxnRfbAw8Xjxg92LLpFFwWo2gtQ4WbyHp3sNUETn4oWv9wznmtD9cLFZMXjxVztkpRv3kzs",
  "key17": "7t488qky1LF3X4gK3d7rMeJYWAMMZeTPvXQzV2T1fLUrcPuQS8KdutAZo2UgKBckiDgQam42zr6wjyG9mKpiL3K",
  "key18": "tGtwnU8rJjagtsh6P4BFBns9xMausmVD3wi5aBb2aBKqj676J9i1ndhFHzhrTZqiDisJPRBUTnixJdACcS79rWk",
  "key19": "xihGfjCdALLFAURQMq1UNF55t8j8RhVLmuYmJWTtHMw3iaZ3LA6wvNLjkEgyh1gaQ3p8fxGboRkgjJJsxFHAyx3",
  "key20": "2SuUJ2Dt8XpTrjRPcks1jYgoCZhEt4TmPdssZr2WWqUS7SCnWBWQFLAK4z8bFdQ6yHyrYcvZXiejdRdJt2cC4ieS",
  "key21": "4GzjgvhJCpUw8R9d2EpEqvype5gYbHc9wbQrb9cLvdzcDn5ifmkF5aHnXQdeLiymHn7drQVDvp3hK2JnKf2oPgM4",
  "key22": "hSG63gURBU3bBYmfqcmVat4BRX2BFRaFC2dB2kSnXLW2BFbVNgKvP86mZs9QaKTmTSsq1YwuuTuNiPFp6RA4Pxw",
  "key23": "2mLTncv7kaMirF92PQa8FKJA58NrKzcB3ZvV385DDKcucm4uAvdEg2vRFPaMjqPZ46FufrtsiR3HKRZL58bYbEG1",
  "key24": "56bxj5rs5M7ZRGxdsjDzsAeoT5bphoFmskLPNqungYratZAN7BgEzwmcDsGWvCqafTJjpENyFfcEdfWPaYQ1akyV",
  "key25": "4h82hYFRHJMa57AdRrWWWhmzHETjd2GnghieNqQr9shfkvRWXAnQbAvcRMba4re5m8UjHT9SP433Ay86w71MkTqm",
  "key26": "DY136D1q9x8wmpivWYQZUjLAQUmteLZ5zvwL6zisTnBEGkyD4iuqFk8Go1A6U76BctSwLQxnRJfPiwrxNqSHvFP",
  "key27": "4aievyTFLP15v9xCEs5aWbpjP7uY2RJvPtEkzf5HPxsXB6Nehepe6A4SCPypYwBfUu3oxJk9CssKMcDyHmqxiBjF",
  "key28": "53yUMZpbrVL4GKGrg4H5c4UsEjB4gZkHVHzqu9X1KviurjVq4hoAkeEV6Kq2AsKNXRsisfUArii4hrEi7qSbn8j2",
  "key29": "38JEPRpjXT4giJ23gb41vNp5RfLGzPpUvLf1bWymGECSksSgZhGF3rNTcJhGoPCxyqMRwayVQGcLU11YzySGPcrd",
  "key30": "27VnHWo7wLzUjEM6NBrpy8k8zhyvWTstNgXuhrPzdxd1uQMS4nCJBFJ7TKuPLW8LkwzgYYV5nUaLfa8W3k95vrnL",
  "key31": "A3TFUpWLmBJxrwhb1beabbREeSL88DNJgyTq8pepbE3kMJD1Uowyd16kvbMipwsh6mPDuBVhFP9Hm71kGHsGUwK",
  "key32": "5ho8xhVikTbBZ6KAmGJojVgZU2wnhAuygXmuYoaKybDpUzDMDC6BunKUs2eKq6AohmfyvXM1hcM1umnSWGYUaWG3",
  "key33": "4AvFsDdNafZ2JtsDQ7qsT459X9N6ENymwRxX2HnTXtYqjdU7HkmLUKSBVKuYi8EsqzX5hLe7CxNApKgX5LzX4o7E",
  "key34": "vqie9Ukbc9XD3HfzvjoyfPJSjqMSfZ8vcrwPRZtnt5fpeYnwM86nRwA6aAMte2Jbg1q2EmYCLWVmhqLgVPgV7ac",
  "key35": "mkYTWjB1BbUjF7fy12meyxsCu2Yjd6KQ5K18yQfCNPh6dphj1bBVrUaQq5YU6vUxFR4cwtZyoStou184M1EvarJ",
  "key36": "2ur7zmx3cU42Js6qg3tELesvBLDvz2XVoUo8qzRdpVHYTgNi3eH4YRswfGijt98cB1XuPApGSpT3MVYyLCEd3Hya",
  "key37": "5FE1xm6fPrJGbeDDXgEe6kRBPzVQHB6iaZnsaruA5fppWdohsSSLv8KdcxVaFY4hkCDkZkuejmURZDh9bb42HTWk"
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
