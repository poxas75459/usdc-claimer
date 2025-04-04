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
    "2yEd3U2sWKrX85hinWzakG9SFgqtxWUqdG5wAJ6t2mUeTFmPrs4HXKWXAvYSzqhob38hFqaQy6rdCCaHRRcF6SdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyFV6nUnP8NdfGeYVYjRQRLeU5F975Hqr15r3SrYsjs1ZXLvXqHF2e62DaRk25Ao4wtpEWry61wckypNRVfAAXW",
  "key1": "2LTGhALxk3A58WdM2b3r7qeMZZf5FJVo3dLvy1H9kHWGEbMjYhuimBA9LbSfbP7AkUx24KWrASmBGKnQMbN4mEEL",
  "key2": "4kR43RrXmKDQZLctz6eN4CV9uRAN5SKDTBTk52cUHchKCmht5Q7253Z7rzoKfoi12LA2FkPB5jnNmso4b4KK62q9",
  "key3": "2WC82rPuvRPYgeGTQ5TfQSnx3gwpnQSck6GvUDNGaYJU72JviW4fysBvvCHM7VCnpRfTD4ApgJirgR3QAbrQZ9Ee",
  "key4": "2vGD8e5aKTVPR3XGfv2NDJ5acMtoo6cqxsMYdnNRFm24VVRxqRH7hjpuVPqbBjjMADuJWbhApTRUxKexYawuyVwE",
  "key5": "5aBf7ohHzvJPFtbtfBRuQo4EhzP47ZiHzehyrAYNBpz12R5iNoYWgKxHnkS8zf1E1z1R5dQLmSrTpcvNg4fk3HxF",
  "key6": "4SUbqsGEf3kNhZTVLHP6Bob8CT4MRbjDRHW8sVbRmGKd7u5zdUoKu3FVBfVtwUrkb4Y3N5txHJ9wbaEWzYYR2Dd2",
  "key7": "2KM5RUs8AESned2TJYt7rZ3wqob2jWpBAU7Ypvt6W4YqwLTLSQvopyvHRFwFab2mhD9crXomCMJqV8guHya9rVoM",
  "key8": "55tt5hX3QmRLQjgAYfBG2LtXiDXE29Rkt48X36Z13np9B4Vys9HSEtZSEi3Yh7WsiHJUhx36BYGnKA6EDsRy6KHM",
  "key9": "ZcvK9bkh2tg5E5aFThceE9SiDJPsdA98CeHMKkKKivuy3WLYhEUCzns6GfHkh65T13yWXRycEWPMTj46Q73BDkv",
  "key10": "5m2rHfVwSiq1zakB5tFPgPh1gr7FA8FnJs6cz8yiPWn6eddrKHXokzh1QNaARvS1orpn8bQ6Hn4b99wvuFevK8e7",
  "key11": "39VU8WAipQwhZTzLnoHm7bRpCwfXR8XWzw89P2Mg9ZzPcBRPsmmLGKFgPfSYCszdN2NJLf8ZzaBJyqfaWQeh5tKV",
  "key12": "4pC4WNG12LFkLzbonPWRcmxGSoenM8WnTjPtoQBwPYZB8KxdZFPiPWpa2oPnjCKitXN7cH3fLhrVzimS9L4PsFvx",
  "key13": "7X6o2eq7ZMBy8pHDUu5pKkfUw1KkbwT1jgBRx8zmuagEbfG4zEDAhBveM4vCFAPnvEKQL5ndLgBAzqDzMMZGgmf",
  "key14": "3Y8NYDFr5m6GsBE7aCUGn6p7YpGpPeATyXw7wshGFshDRTrgfDMYpFKHiDMUMMPniYmZNQHySCKN5WNrxkRqoLQ7",
  "key15": "585Gf1JPC6iSWwySCLt7RGt8Seva1aesePzJVecp1t3uAXomg7LCnn3TiGpCBk4JWM8A4BPtGUEUPXcC4cxwnLxs",
  "key16": "3Kq8GacDCHSG5dDncG3VtYY6312gH4xgRtDhZq8Lg2ey3pEAtQ2bJe3eTJSQLeWSbaVLuur5SncWDAaq3Py9DLzw",
  "key17": "3P8aGf4H1ouuKmUeCYtjaR7qKron41HbSPYjqHrm5Ff4VFHzb5syXSSYVsUsrmgg8zuuqxCCigNFUrdcG89hg4kF",
  "key18": "3yDDF7oLZyJthzjrDDjiJUVpJdgynnMxjFU81HZVCYD4TKw7iZKoBgWQ2gFyyYDP1sEetSqYYvxB1z1c6HbjeUDz",
  "key19": "511gfjdSFNRZ4Sp4t55yyZAknhsNsngMX2QtTZp8wSaUyBgWHNbZox11PoSd9C7BEYW1dpHKyZsNqT6gYFtFkc9Q",
  "key20": "3XwzMEFJzMbhrEmkbs6j2kLYakKAiFcDXdfvVE6CdQ6gqyAc8Qg3Gp85mDrCG28V4TSZ9ptjvTp6h6Ny6EHit1H3",
  "key21": "3m94ZMj7zS4YsU6u4YaGMsfe1TcV1T1dTLZbDQ19Hjyhpq15qHrRPQ7z6v1sgyWuQrDWvU1XMJuyfgzgdKYdx7wi",
  "key22": "4hRrFb9cL9cUFzeUhjkrDvaiiowBFTxnjRNDdrM4tFFCEfEhxwdXbwjnCcof18jUMUbtYnTzMBgeZCf95SY9AMer",
  "key23": "nQ47kpVAEZxxL66XytGH5oVPKn3gqHh9L3qRLt36QCFgheDHNzamSagi4RvDESL9ND7ZBHYGpbGhPpJjRsmxE5W",
  "key24": "35NdRjwwhsEd8hg61BsDRHJWwF1JHBvWiECkSXm6A2s5tiEksnSirR5T2mZEpKspSkDe3shv6N758fcekk5anepM",
  "key25": "4aZo4uJeWqBF5kEa61cF2wzNnwf1xGNJkbXLc4sm7NEvtCQqGvzG8Cqq8AwVhZZaqdBanhd6n7nJ2MNB6tNHmLmH",
  "key26": "v5vHrJUZHWYGKXchP3ZaTSeZwh5KQgTyb14UNMtYpS5n9fNkDojvs6M6mnif2xEFFTo9R4y3QVSEthLrCxHR2pd",
  "key27": "2tAfCKGajbVy1eGJ2diUELgyynikgxVWwjauRBk8WrhoGdtX41NpWifgdshRAgnG5EFaqTcGysu1CTa3AcWWi6vH",
  "key28": "fHAcP4BVmYn8mD38dTbo7Y9E1ANa5bodQ2PLjb9cEJmEtWYFV7tM67jLJPGLHvQaANTcSHro2QwzsvYQbZTqKTr"
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
