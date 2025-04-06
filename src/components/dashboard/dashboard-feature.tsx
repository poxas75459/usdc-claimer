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
    "JHt3d25rwhR5sDXj3EvhpbGq8ZEsyg5ZnnPWTYUdW1j1MxoB1SjMJtXcPmsPsy2534dLYpuqBwTpLByPiWerV9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NxKqHJDz8NFJ6usLVxiGcXZKiqxmFGWCmwDk1JHgP8rjQ7kqkkHn9qrNr7EYrqbaLNxdcMB3ZEQfmC1569YqrGm",
  "key1": "4L6EtorVYmiyAh3qsshogu3BaMahVt5GZ48kvDaRDJdmcrPEykzbsMBkSsEnDVuirJbJ4nXvNsP1mrU3qXj7neeq",
  "key2": "2V4CmxaQ4qrLuR4rWFF6pYsVpzSdTT1zgLSv6wde7zZAUmQY1NfXUrVpxy3eF6zAC4WDuTjusoeMxgU3Q6B9ogHi",
  "key3": "3HFLGttEWAixyZJswDVeYz8qHNTeLXU6nZDzm6KewPKKAR4FKwDXTxuaVQQiiYvDXbKmRrFq2o764D3AWJnz5jGz",
  "key4": "qjgybJysV2AG1DJ1g641wX3PBCnHUXE79JkVuEEjTks9u5Ucy6qhGvfJzuHYk5ifzftKoU19ZH95xmqE8bpUZja",
  "key5": "VwG9u4gJeNTFeowMg2L3gb4ryDdELx8fmuupPLEfWPUVSMPHEmEMcc9daqJfDhJjq3biGnsVw8czdcSELeEyV3o",
  "key6": "3ZyFsUZDCDNqmi91Xq4d3X613AxjiGxqUxUzuUYTcP2pxV9tPXKwuhRUjoJqkgT9k1zanQF3tERTGxaoQieVhkid",
  "key7": "4uq2QWGvLCTuxMr97ofWykR3NriqmVn7LH5m8feMswmuhn6HNcaJJD9FaaZWNxBVPW6YuoZJ6RPLkYAEkZzVjwVm",
  "key8": "5JvAexGTLz8f2xcRSWAZjK6kUhQ6mBcMtcqemVAucTFH8HL5inQBGcdBy7PiJVK31QLuynjTv63yA7SDsP8HGZX3",
  "key9": "4F1vwMejJ1PtJNcbomeS2BJHKhS2dgJ5wfL35Rt5ZsMEVnHRhLQHF4Ypockc3rp7CsnpTq5TFAQisPjSd3DKW7ST",
  "key10": "5Uc6N7rHfXsB1hxffi8r7QgJsTqo78hUx7KiDez2LYtcBNcncvYoDFgFN8Bz72S3btUf5qevBF4acSzNyP6B2QTX",
  "key11": "23FejZFMgxnT8XQV4RGd34UaPLDQiYXEdimE8ibUL3mesmS2YyM8A99FfCekBQZAhaFQYmhTkUFM7SjaRVgNHdLf",
  "key12": "PdbdSWnofBp3yj8QmsbMDR9N1Bs731f1KGKGpKMGRxgXENMgqg5f1JPqN85qgNpCyGqfnRHZECJRW8h2d6Xe2Ty",
  "key13": "4PVdmrRMM8Be3cinSUsFwj2mGAQJ45JWpxb8zbLYhXgQy2RsMaNvi1mX13RgDwZiBE2GxEnZfa5j3zJcJxEReYA8",
  "key14": "4UzaZBBMfA4m6ZUW893MvL3uKorqypfuVGuAuTdhw7JoirY7y2r2hJAhPWoTP1gHr6wHN6w9MqgVg5yiJYBUeXqQ",
  "key15": "32vpbjtQxMgpBUtm4JQBhVHMAFknm5tUps8oDENBC9kg2W6iWJ7dp9TCrsCWrGFbUqZrueZsqCeTAk6Dvsc6xsWt",
  "key16": "SqtVEBzbtSJ9Rc5n5sXCUVwrjyUuCoS6B7EcXYviyKRZtgZMsxWGmSR9qxNdHkrzWTmpXpywLcd7RHxJqCzLHpx",
  "key17": "55c1ytsdW4N3cwGutaF8My6McGJztd77EnLyoBTaRtpVP7SrToUY92FJLUULPnhEsQcjQNGpFya2iV7RQcfwiksb",
  "key18": "53gqw7ip3zp6x3m8zNax8wW45RSYyqBapTeM5rZy6S1ZiErPUeLBC5da9xRACDRBNxvVQU7Dx9M2VjfcrhkqNHAE",
  "key19": "53kZp4F3Mg7a3mS6rC6xrTamMCQJf5DuzHaE8K5rfyxtuQ247mScXufTqmrpZ7NRvotcBrfUuWtUpLAgoLChTPJT",
  "key20": "2Sb6ZYipxFgX1aY9KVUCoJ8Dv8taBT82DAjtQyHAbmnKKb7Aw5HdJh3fNTaJCrCJL9fhTFeF6xrNPUoCig2n4Yc8",
  "key21": "3oPjvhu8vwV9yJdRMNoCQeLyi2cat9dcNGSqGspSJuiWnnHN4ijheiQ81KXqoRXsHPdjPkohk1k7bvcLEE5CBVKd",
  "key22": "59YLVaiFEWRxHu9NoVBk6cLbrUrMDhJdQZaR46xprjeYugGv1w9skCEA9by8Y8d4EkM5fjYeec3qt75ik1yASCKB",
  "key23": "4Gx3sqkHeBaujpvrXVvDJUUAsxm7gJS7yySTTZEwT3P6m55B8FAjW5W1vQjFm1nMwjskkVoRZDjGqCMriUeh4DXg",
  "key24": "2YYTu1zEEXd2fyJmF2Fc12DvVSEBkUFoNPHwKBL21r8XaHjYkkysHr6mctyio5BWkTzLsfVVNG7Tq2gSD7v3pPJT"
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
