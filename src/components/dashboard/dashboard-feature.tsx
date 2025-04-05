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
    "45rr6TNUwG8g7Vipkz1i3Pg2GUVPwkgjdXjGhxw5w1bUY5s2SVucVgVogpsFAD9SqpPaqso7bH9fpv7FFGi13roi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24tPibqgksszz7iutnejMnp6Xk2kvUWRNbg2yaXkUJdwAaBKqFZ6woWuydbHkyZqjtQWuqzUhnd1NxzJ27UHpNeP",
  "key1": "3ozzQDSheALG4reguyGkJMBBXJfqjQUK9Vj4pGoZsnM2kEx4A3aDGHaCrcEnp2C4y7QEsuqvbVNqY7UeX5oiz7Sa",
  "key2": "48FoKX8pHaCJBn6acC2uz2n116mmEAJPRTfBjm15gcD1D4B3Po52C1jj6kyNLtERNFvL9SMcqr6QDiK3viPKn1do",
  "key3": "5g6vutC1L12BgRfNHMNpRX3Y3FqinnAdE4wXFt1Qupqt8eprLR85bJ5JhRcKWpBZvqwiMYt2UpcvZyZxNrRwPpXg",
  "key4": "npAZMQt5n741ZGk7xHsUnzJFM6mzphqCD6SD5PjaoNg2y7Kfuz4LicUQkSxDkJF3xMq6LxZyrisxm26zm4MfHxw",
  "key5": "47eqpPQsxkfiaYLzrU6WetzkJEjBfH4Tb5nxsgR1WYeNoY7iMVVLoUUCQSYVAtpD1h3yhzpxAcNm5BWD5s2EAswV",
  "key6": "bxShTvBTYKVubot11yTJs8GGrSZueeKqAfoXwrt9UxqAJbnmgCYRAR2AoFJJwk1r8MdRvKyTpUqPM4WWvXN1fVy",
  "key7": "5JJFLALtndkBnxhEsDiUX6GwEsELeeoJGhWkoui8LiGf5nMY1zXDP4ouhiJpEVaSin4qNBrNYxRV9aLrYpCp183J",
  "key8": "3qpJC117rFJu22KCL5pDXtyZZgXzMSkNmsYwDAHcaRiNvQUfxFQ7MraphHoT6NJqhwmJ5cJqz96BXiFLpCpHLHST",
  "key9": "4PGYYfSQSMMgcdH71e4axywC9DVCy3PviASqwq1TX99bUGYkGpWoTPJ1XiMcv9VpFhKid3z9Cf32zW6VkFtGJBoG",
  "key10": "E7DY1DxAsxU1jQMNJFPyvEgeFXGK3xQYPLvyX6UGBieKve8wBcn1G1Q6tcgEeGSMULRxuQMzJxpF3qtNG7R4rfr",
  "key11": "2NmtqTCrfg9oaZcbnVrbqFEaNmeZqGCZxdPHhpzcFxuT48VoBgN6Xj3tzh6XLqv36vEJEjN9xU4CT1MUqZHrTsKJ",
  "key12": "5z4CvWN3BMz56SUMmYUK6sgTkj7HZdVeXSD1KtT3rbmgNJ15uY75nTFw2CwuBATyKTrYfWZS1f8BUE2xmAQufZbB",
  "key13": "2LyBkpsEzEJsJMHRbaBfVuSBQXzpLk9T1MJJwrJtDs8eMK639LmaDwbEuva6o7vsSW5kNr59r7ph3M1GqMYThnAR",
  "key14": "5RKC1NHSJLBasLsqxTgMrPPjct2ZaRyEtww5mPnjjk35rAH8N4i98ymygYq79aKpyVy45a8FeRHhFNNuGwZhgqwy",
  "key15": "4ehomCSzNHQayhfVNA2RyY7XNnmrY7wSduAQcnnd9DjLF5xUef7Gxbq74Dtn9deWg7JVdC9hVZR7XrzA1LsCm84Y",
  "key16": "43bCprFmzpeyjKe17H2R1LF3xBMD4wN5KvmTJ46UEYsGf4WHUbzv2a88yQaAqvripbkb2oU7961YLxcerSsEk6uC",
  "key17": "gi7UBHs8WqwucW42UaKzzUdkRRzPzwXYy2JqGJP4aWjyQ1V7GFbL7Uju9UjmYDpTnEzEAggEJaCukb21BYV6Yo6",
  "key18": "5t9ccjR2XtJub3bFDXehWdb2TNqUTPh2tbwpHJLdV1w61sZt7qHEUNe1i8KgXsNKhFAJLaJkR3TDkinPdYeqCNiQ",
  "key19": "5oxqa9bJ8KWnpP9pGoVBcDzaPMXFwDqQYjX6xv8RwagPGz4kcmcL3B6MyMehtdAEZTRGZUbmgujMvxJbxrQJ3iin",
  "key20": "44fBeJeawQYMVgFbpVKMJmFZxszPotGzuDXCCYuZ1xgsHTf6ndCkUVnVFrbnEmPHkUxnh1Hsq4mUC4LsTFJjz3uj",
  "key21": "4vXDz8WEuaTb6BwmHB8zA2pTWTikt69MTMHTuGmcx7aybEADexvuF5tN4Pkj3evc819FxenVJuZSLZAdQYjTsFgz",
  "key22": "4HjtfVSBMRf25PhHsBVF1Lpfaq7zy4QXeyFPtY4RNQD3LzY43QgLSePNhN9LjVaimXbQhrgMi9KDJKCoR2TYy4sw",
  "key23": "3fVUFMfayri13t2E5497RS7r1RR71WQTQ64ypz2UM9xAWipEZ3ppWo2H21DGqfCvbCspRySCLRx2BaZLkC7FpMN5",
  "key24": "5ubtk8gD7G3K5PM8RRz9WFcHjWR8589KQy8sEMcvfFw3NjGgg3LZtVVZpUHvSqwF2HDz9Yi2damKkhs1ekSdwUsS",
  "key25": "2HwA8eSiJwzC7CVvZBymehztzDCKybGjiraBajGfoVqP8j2fciieF1L8dieyuDa1ak7PWj6HR7TTgt6YDds7C1PM",
  "key26": "3H2yxUx4pMD7ZAuShj8pFysKRv5CkKNTepZmTngdSTHkUbM2h4MWfVa8HohfE9tDoDeCwC6x7Z48BcYtdik8y3d6",
  "key27": "3UGeoXVcqybnp4z6nGYZqeGUmp8B2p2tkgN2dm8K2XwkN3U2o8MswrrBZnqfLui9n9ZUDxMC4MVPsdvA3rorrJSN",
  "key28": "5Jjvp9LmoUDhqrWjA8E2Qieuef9FHzLyj4EkYCHdEayZcyU35ggyLxCoHsFJbZboSymDe6aYrZ9qeULiXge4GGHF",
  "key29": "31Bsf7ZBLYPDXrpGXQnmqEkjtarX55gXf6tjYAtPvs561FbgTQme9xZ7wucqUFrBy6NevdeHVmDdtWjBKTWtNd6P",
  "key30": "3v29jmkVXupi5nA8hAmFxcZ47Ss9jGvMab5F9BAjyKF3Qqw6rrqHWHbCSAeUSdGXoek7DvVwuYkoskuBEBxf8Vof"
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
