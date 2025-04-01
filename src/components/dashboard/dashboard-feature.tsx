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
    "2SMTkf7gomBWjRLxxD8rkCSRhZVAPL1ckWyZWxq7g5CAnQKktjho8qEqs7oWrR5gjskicihtkwk2dUBTmzCtALY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiZnJimeG4xK9NrnC2HuxRMb4ZoNL7N8oLvNPszMSLr5KJwk5pQSut3xpD617h62g2noH5WWs9sydLPBUBEWbuQ",
  "key1": "2JH6wHo7LLV1Uc8GAEziURMi4s4M1LFbVx626wDnKQLqsVRNNr8PrfjoA6n19w3UsmkHR5a9ru38UneMa6CifgfF",
  "key2": "3f8BzxbcRGBFtP6s63Bq5gbB71yihf6dS9m8QXzMyQDxNeYNQtpBiwjSpyqKZyTRkogcPC1RY2H18uvgaJEdyX5e",
  "key3": "EWUxm9hvy6eHxXRwT83GMsGgps4wrTmutU32mB6uNahYkHzi1epj73wodpWpkbiLbijQ6dzigNA5V9W7Rep8rFX",
  "key4": "4M8iB84bqdSKetY8xANw7kLMUQ4NiMdvEG6PSrEjJoU86mfXXNPaNH5p16kRzqZytCn6sCmsoLXiiXj8ndQDhB5s",
  "key5": "3ShbXu3u6iKBeLkCArcvSkKGV93DPZmiCPTcfRu4WVKCTN23DmJUX3CyFbnUBrfkveYpkH29fpdmZ6kKBTWUFLdW",
  "key6": "5C3Lk6cmnndU6yBvUMKW1ESfbPabvaSaZMkFNNSGsSmSp3xS3RXyaiVBDhrFbyrQa79uitgxB3pdjHfHC1XcUDrH",
  "key7": "bLqSvdEcLZ4NnAyFWE2i89FxfwAr9aB9er5F1PHki8T86WuE1QynaefPJ1jgfAHioJ8JqCS7zb38smCVBVuacyT",
  "key8": "2wPH7LxgLgKtVXAFNZQQxpjXon2JqDYUsDPL5cXUGddL6NsTbQQGnnuyXzg2RfcC4V4yvAnuFDwDkGaQ8zwHGf4V",
  "key9": "5qRisaYq3eNafpmDwwTBfzTsZEuqzNpC8ENR4vXz995e7p8kut5QrA6ZsA6dLzuKHDv5YVvpUXawHPRrXcV5xqYk",
  "key10": "dYcAdVQYy2MD36QfPjkxNCEQFfJtA8mx4ypYkePGq7xHwkYzg1FfWatEuL4E18i2eyYfr6dzLyhNV1SSywxXM36",
  "key11": "5zPMVWWGsKpb4U3S9g79mWfFo1XPNAw32h8pp3GVMtMwk9scoBkxLYBzyxV7FLwy79CPkE7GCUMxm8wREgm99uzd",
  "key12": "2wL9tfv9j3WZ54uMp16XLqECbsNj4ZcUqZxJBkrtC6BHBb9nG1H9Y1DpKgmbaGEWeJQ96KJUYtkCYrpHmtLaTqYs",
  "key13": "5PKT4LkuP4DZ8rY1Jqkoi5oJrykaJscSehWY9kAVpAycR4FW2V1Dwe2ZaLKwAo3VZ7wAUq1W4m72S1uVP1p9zceB",
  "key14": "4jbUWDs8yvWwN6GHMJ6BN6km89UqxHmEMFh5jAo49qttcAH6UTF49UXwMEJeMkh4aX1Rhea4kbn8iX3sHmKwgisi",
  "key15": "5MLZdV9EnCm9aX7HaDJpbQHxwkCkWz1egof7qtomGdMQjmGxaD3dVbcqgWrwTtBCMphT5gEtmo47gNyw3QRZGNxw",
  "key16": "55hMj7xyXVTUdXwmBkPDoNz9fShh7pSEV5kPuw2MzdEyrdszCztDDYW3ZnWEE5Xsi8fb2CtSC7Pk8ZKcrNv1Qygd",
  "key17": "3C3D1wj2cGkR6X2JzHMR8Y4dHWH1xCymFzKYEin6GKVhkVHvobytTEQvtZnzoCt3fX3VSHy2Di8A1YMeYchiw56Z",
  "key18": "H7DAWV5Thho9v9Mnpxpi1oui5VH5SQRpEh3kg8Hn5HzF3FmYPUfDbCR46vp3g5RaEMy5DrVqu2Th6iipBk9sFkR",
  "key19": "CuXHHAPEP4KHpir1RHURhG4u1p1kzvJHo2exrRyXXaQffXzL2FjUF6941FYDVVCyS4xds5yM8cJwdV3PBDUZbXF",
  "key20": "56ayoJLwTV6MAfbZbrasxV45v9ZX3AsxHMC7UtnHVh1n8WDoAwY8d9C1c737EfPN4VMLmPdEhDLoA5HpsT9fXHzu",
  "key21": "GU7k7Fv5a2py2hp463fSQC5iwez5wH2P3RKnwQhEJwz9M1bHVMYReAuuhYbbTcoEiRjtkSFdoon3kKaeqEpRjfb",
  "key22": "MjGkUjCaUKPkSdWAZfywLgVAUUxR7VgPTUjW7AKMXcucPFpxjsi3wpBLpvcQkagEQnGhuiD51q5DpCnZyHaCUJE",
  "key23": "3zVZBafB3H5F5VkK1HFqUcsE28h31euhVjFPFqDGf9x4zmmXpTjMeuV7sgtasZLjTbgSJRSmQP2QQVhcJzewGdg5",
  "key24": "3pHa94y6K5E3Ar9JzJpd6NrvmtE4NM3EMJhqp7Um9rkuDd1fQ2jnmSmaRC4FwwpnStKmgkyBpgFhtiDe3DyBz2fj",
  "key25": "3JFpDnW1zmK8V6nu8q2X3z6DmM6kty46eJixzr35hAFmnAQWmPCE6cJyM5QiCqp4joZV8xAmHfAuPHEPvnTeceJ7",
  "key26": "5NgCTGSQy5oCC6nSMkr9Z344PzrxzjEHePCbhuqHdk4NKm2ssMvwo6MgeLSFMeEbKzCobCEdcWw8aA36BQeNS3Dt",
  "key27": "34CSyAxbtLEPahu1Zhujt3nntKfXjdfXJNw9iiyZW3L4jvT4wKGALpHkcHbceAL9vUHpnJv2sBmHhrJChD4YpHUF",
  "key28": "3eSvShdMMGBTBbusJ6pYKZct519bCzoLGG6eBLziSWewtN71HMSafa4KRXmPyzyMVi1UFiMfyBp8MqVSYd1xznrK"
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
