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
    "gQpGPYcfiBNwD5zyThXYovMnYCmi5KPmP7cUANb7MnNTuBp4u5x6wLSCXzSwL4JwpCFVnrTYQPr4BkQ8VpN5fJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rkuxkW5dYFtXMo5TGTokT5DuDSR562iHjnCVQzpgDqvbW3WkDVELxx4rqszQ9EqH5uXzE5VZHggCMCUbpJm9TJ",
  "key1": "MZCgRuEQSRK3cqHnT472iHZYX2CiHtyo4HfAiUXFSpa6d5irF3uwfjvEFTsspve7kP1vYkVoitkTssTyrAQQoa4",
  "key2": "4s87MSE5faDUbCb1bdj8gm7mgwR5kFuwDZ8sMUrUHumVB2B61Ad7xAQLBfLecRR6LyBdrBM1reR7q8HpCatAuF8d",
  "key3": "wmoHhugswVPnvoEnyCNSQfEy6dF2NV6DQB2Zs5KtwsufGDqPdE646h3GaVJm6PuqZwVgWoovQnvGHU1puz3ymCU",
  "key4": "Jyyddj3u9314vSNPX82PLnQBdxFHgQxPAbNf8QJ6uobp45Hhn7znXSimLqZqrddv6DL9FjS5qeFcHfV5mVFLxef",
  "key5": "5C63YU47pSXcjXaicdbbsGJFschRQ7hvbq2ZTQsqduqEnvFKUm4B88LKquyY7Fcqy7E7Doo6HfR7Jxfax55xJxCV",
  "key6": "2sRqdvoq9xod9gwEm1o2vEGdc4VNaUSeGgeVcQuXWJCjwxtaiwyAAoGfdAt4dEtGn7ww9TSmDjs4DKSaAFmW3ptL",
  "key7": "5CopAqiP9GgLKGA7G8Z6KFdEjDtHEQWQYNA167SnEKaSmVyn3EtHo17G2NH2uQyvDrJvtAP5YCjT6BSiRM7dC1VA",
  "key8": "5DhfX2qfez1G7bvGzGYabzjiquuvrmBzxB4ABTT2YMpHeAvkMxxwXctqbhxWYJTChYC3Bk4VAaW1jmKGMJVUkLPN",
  "key9": "BGVXXWhddVS5RnncHf5S5H4mjBpEqdTm4LKLuznr1ZVvxydnSmkL3RzE2QZ8jjZUh75oL3rJZW2ekJFV7ZyLsxg",
  "key10": "u35yhyGaGgh9ofTgKe11Rm52HyU1t5HwcDGg5js95XiH1hLe322HpSdi3uk5ESuQHYerRGe5XZsh8Q5ehb47zHg",
  "key11": "5dGZSDYYzXF1S31BAzUHF6vigJUukRzNyZTqULbFe5AnGtVrMYuneejH3uDNpVoGsTPvDB55WHJVwY2VAcm6mpTB",
  "key12": "2jmmnxGPVVDq9AFdwUQma2Yn9CBL8PATMLwdQNMqYEKbRrCS5bUuktWgqK3Hdej31fQr5KsspXpx7wPdPAU2WjE4",
  "key13": "5kvgcCQ5pNHAYs71n7hNckhYgJWTTMBp6y4ug1Ms3LCSNSLy1US6Do7vzeHASYE3ubrehWAwthikueuNeyXN2xEV",
  "key14": "5ZTfukrkZxh9RP8atpS6umWHMbLrzoKV8TMQudhoq4aKDdtjNUkSYDsA6sJxFXbhyHvcce6jAGKgTAtrk5CAj5kY",
  "key15": "2dtznTxKSeGXG1PBEPEZASRaW9F1BCfGE9wbEimTZu66j2MBHGR2a4tMgieqtpzCtdULV3UZaAN6ZkKnHx3JW92M",
  "key16": "48EZNSjmN6tifsSBCNTiRnPv8WGuo56DNWqDyLMytqm3B7iBAgmfAbYg4vw3GxmPmz4iTBxZTa7kqreDeYAo8fMF",
  "key17": "5kCR6EXbPN5Mp4CfXf2DNegq1E8Y3Z6qMXmCV7rVDiz7QdTogmPYdsyD1iWsK8LLK4MHawLeCJnemDbduZpFWNxk",
  "key18": "M3bJdEt7AqGKUiE9Eih6HiCk9invoj7bRWWtz5xYQTayuPVpu6pemeSkATiL8YEUMC4VbZkxoh8iKncFthodBWC",
  "key19": "3PWvXkE5nh3AgGXn5zTZNSRd692wdQawuK67mXWK9BnEKaDFqacUGQRyFtWU1TUiikCFgxh9dXNk5RScurD22dWU",
  "key20": "4mwH8XNH47cM3iNM7jtFpboKCfzqR5cVM8JgiZXakuhtCSc2DRfmgttDQPwem3MptTaREUqpo7atznRWNdKLWVsV",
  "key21": "32hnsJKmTasuSxCtZncJFjnAm6tebEKMohCZDNdigboRBgjjDovnvVxnpXtx3n7V32xPg5WqWAuMgmoeEYvs6aQt",
  "key22": "5Jfbk2CFBwhytY3n3vgsTLREUYai35u71jSBiC8ywWmsBr93c9n64pWn8vzhH7uJCWnBwvRUgq3NL6jPAnoh4Kqi",
  "key23": "3q7a4n5NCmPwAgwmkcqTTzkKcC1dj4AqCpzMSUta8TiUzzbyJ5dZEfSHQBngKrGzMKr3J3UW8WvToKXw2ys1aSon",
  "key24": "3ceETEdkvjkTrqipbjx1K6Fh9MXzZrRapu6vPoQtndnazJPG11HfjVZLjnC7r8ogqEq53pMFxzRZ1CaYTujuJo35",
  "key25": "3PJqSCtk9NET3dJsP5oRKJCXPXi3t2uFTnKwjXJM1aKAXbWvYPrCfFyqPwcMh7GCgUhdnKi7cYVxj1xHB5Jhv5KF",
  "key26": "PNdztAT4ye7utPfhwK97Rgf7aWfTkpnKm4cVyoMwVvatoJG5uLWsk1jG7nZtm77iJo1jEkVphqRCtzoPaMTkkXN",
  "key27": "44nSSPYzXhX7dKagoVKNWbYkw4vGqGBnNC4BYYrS5TqfHmFyPEyMkQ5KL9C2wGGnjibcQM1oqRkmMqnEcpHuqiNZ",
  "key28": "5UkSaY3gkA2xJrHuo8cEkH3tfayVuECjBGBZfpUCseBuE1yPfYgonvb5sXePVxUKa6bK6JnKXeAR2Vd5ZpdpaPx3",
  "key29": "uUvnAdeBmUXgcqwa1pLcnNG5uurY8K4Zb2W1AWyLmntechjRASB34mnGEeVwrtAGnBj1CAWAQYCJVixXfjdP1Uy",
  "key30": "3qf6u9cXA7xEAs8DHMx8N82GxM9Ni8rUdPRKjoywKhaLroCmQSZ83py3KbKKp9qA26pZCqv6oX524Bbzx2AbxGSo",
  "key31": "5LA6Syz73YVcB4PY9GTS4hFsCisNYAqBcJZNsMBr72Pt1REHi1MP1G8nTwrGNEUuT27eJc4kHmzJ8yHhZTMBHz8W",
  "key32": "RzC1hBVJ7NL3Ut2dAxv7Ub3CJ9cHfDVLp2ibZbcKkuxa4ESoAZqSFXd39RcccFkmPtio357FcwgiWBXfZqCrrM8"
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
