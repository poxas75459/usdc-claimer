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
    "2dZKURQe1bzCAc1ZALezknhuHWyJtJURsdPSVdr5Lu8jMdyHss94PZZsAigRi4NFsFsTJdtkzacCQbXYVPWBvsw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q8NjSV8A1ifwfcLTgbZ2VDxGbAfQEtweEdhDJYmg9GveYs3MgFL2NCK9wjxqpiyyEfWpCwug6ZteDekaQXRVY2A",
  "key1": "2daugsrLxSVpiwsyYEp3wWGjKssY36BGWf5EwnwrxnsPhazH9mRZPD2CXoghX4rkeP43jNf6ZJAiyJYycVCkrQTX",
  "key2": "5mfna8iYHqdZdYUQXNJmLAVaubin2VC6CGJwe6qfuGfmb6YGW1vQGETtmfz5K52ZSzeDUfitkTb36Xgxk6CGTFHt",
  "key3": "4gvsGpd4jHL37k7bViMsH5PBmDfVmmT9tGutR8ctRAd7foSE67PqHVTHeBAuJkWY58uCNyjndRpaefgbe2uRcXgG",
  "key4": "36VHe2Ghw1uombeKKFX1rzYzbfyewSaKJvwmsWyNXJZX488puXprP4Cd9q6TSQADxBcAk5yheS1PQAUTxJj1v9gt",
  "key5": "XxJbAcKqjKZLynq9PjZu56y6UmsJR9E3dj4jBJAxZ4J9aa55LUt4oJjxrC7KbvznPU8S6hiVprMpQLewedMLX2r",
  "key6": "5AuTsAXUXw46xPJfwHoQvEzCs1FvV7BoNroejqSv4esd3K95He8DEWNN2pzmwfJdXFEFySMj9oGAMBT9Aib8aqTu",
  "key7": "3TbrMeoaD5tUQo1bd2ifCVG9NnZmw9CRhpZD3FSUj393ihDYAxbUMW3oNu9zRdA9tNMg6UMEctTnyNstgNp3hvKj",
  "key8": "3Q2oXBEE5oK283bWYVFWmbURUYDzvdkPf37ZXHMsfDedYuwCJ3QobmYawWnHZKhPKya9siAEy8hdNi5WsqUgUxsC",
  "key9": "2Ak1LN6pMYGguE8ik514PY1QQHdcAzw2HRW1yHuhcZZm27sMi1YgDgyzK28FiaCXupgLmYtWEcfBm2kajGad7vbS",
  "key10": "25r3yi47Pp52ha1TuChRteokYS1d8XSHo33dxVzqNc1qVmCTqfgiFy8DV6yaixNMxPweNAdE9GJLZWTE5PygbXdR",
  "key11": "3UEbiXvPXeBNbNF1rojjg86ZmUKpKuz2iNtBjSQZc12BT2fPX1PLBnb4m3tNvFKHZgBza6UKKKTZyb1S8V7FLK8V",
  "key12": "4rYZT8GPutLGmoMVCJUPxVWNAHRyypZcU6DhMBxwMUzhqpG2fXVDCsrgXQF2bzkhQ8MZxdqVxcRqUyUVrkvQp16j",
  "key13": "4XjLntNpcCSse7bYw7ZftGVufKYbY1EYgB2XRQBjfJmNX9NkP8H8t2YNFjb5G24EkKdbvByLtZMJzUeZziEKNqAV",
  "key14": "37hHHynXSwETigvag4r7mHW1FGNrm8Xj9S6Bhedk8DJBznvTUMn9i3RdLATncSAGXGGs4iokauKVaYN6qKyPy8VB",
  "key15": "2mHbpUS914pT2DkhBU6UXcisMau8uKkaQK1L1KQ2ctELbd1XK3a97DpxcAX5FGWXjaZHoxmTN1DZJPrXiGiAv1Xq",
  "key16": "4HbAVzVhae46jhaLtEECZwdRG1PZ5VnM5t6ARCDHzGSfQcoV4txLdh59jQQD1qp6zjFWDZ4huq22c1AfVfWhSRRj",
  "key17": "HLPaJ2b6HYXBhQ6ZCBJcaGqaEscg8yY9gnchUEXyUMz8QpYAWe43977GNotPNRb8mtHX1bVtevR1NwQ7XPQdGu4",
  "key18": "2HwYhipL8X9jMCq66psfK8HM5KtttMrirRBUG4HKjk8hJn2cmHqUaQCdNwRJNp7QSmrjVBqh6hUw7qWHmVYopL32",
  "key19": "5eUQQKmb1ZF5JxfVHRzFJx8EwnnFHY8NH84yBGci1SC1GveiWRPmrCAdERZdby129Gaj6wRCM8n38AHgFQRAjxWj",
  "key20": "4a2jibRcPNh8qDy2zs51ZRs4PjQ2SAHRvZoSMCupZhpKmqyQVGkn337JPCiDpuNJe7RcunzmtmVvY785zQc3jLFc",
  "key21": "2muFeNfYckcBq5dw56kdcnfhjRXkDVK6g2SPcd4jPDRV4Q1WTMuNh6PBWLo52wJHXJtjkm1xJ4DP1TCCMheVoH7r",
  "key22": "3bhxPRyWBHKef14hsUH5xoeEwxnzQUqKwPPVTHtBqHe3PEajxtWAQCeyrZ6ALLwkTM8w6tvzU8vh8EgfoDxetH2B",
  "key23": "5RDBLKWZFLYcF7mh48PbT7wq8dh6LHKPAWrvy5G9hzeLpQ8FzQr86p5CGYyydrtJrp7XzF64xLsHvCh1xNDSjLCz",
  "key24": "2LU7LJHBu3djDroyEma5MPmCgZZypZZXpgRSpP5W6PHgikqMkDJvCDKjXLnJnX8725hwUHkN2JW6TBfo4xKHJT72"
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
