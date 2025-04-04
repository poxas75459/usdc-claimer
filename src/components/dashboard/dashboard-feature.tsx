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
    "qD7xDd27EptXBFmAbN5rZcm2eqk3hepdfv2cT2SKfQRaA1mBkF5EXwF9rxZypXdR7bCVrZbD12ejjn83NBLf5yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfgG76eJww4aPYa8m6jUedhjFFBQiRoNe3i7bRYFrrgnTLscvY41pSmWrhyF9qFNamFd7dm3WHUjPksXGvEJWHV",
  "key1": "4NJ17oWkEPokV2MgNpFd5JFQ5r3wtbwpgGTDqqmk4M4PZf8EgCFYE9AakH91NmrgYjGMbtSBj8UXiqkBpo5zs2o3",
  "key2": "4ui8ceoLkSx5QD74KpaQB5DDyftGxzyvAXmGHuusNeDWSz2ufxYf8WRk3E4gAHLdMaP5zawTABwY5NBwm6xcrqXv",
  "key3": "3J3VdeCdnq7tLaPKgPnvSPcCbS4AAEN6JKArKcnEs5tU4guj3ppPaSUeSB7aaWUg5fj5p73R8Y4zFqA5WLS5CC2Z",
  "key4": "2QxT3X9caaJ8cgeqVQF37CZBQcQqqNnGv9RyFQrMTytD8KpgWQgVbP3Ufwa5Q8wtSD2qrc4GXTDBujjQNPEBKBVy",
  "key5": "EKyeicVya5dpFFah9CqvjomcrTAF6y3F7eA3ufjW5HjYUJVBxAa4xASRPjjinoP6N6QrpX6q1u67cYUrw434Mmv",
  "key6": "3WT9MmJ7pCaghH4MuKiLNHjL6B9ATBsejWgMQMebkiV8G2jTmKxgmYgzwKWSSm8VByscHG8u9sUBuMdYJhXYSn2W",
  "key7": "5kxvBcBsg7sMWZZ3QAxvnjFwHnbsLyUYa4NWyKvVYpFttQLLpKsG8c5UTuGxcdJT5KXE3ZAS1e7LKXjeB8x1rq1E",
  "key8": "3q2dnqJAMtXL6RQbbtzscdfLazNg9qv16J9bBauFrCJWrZGFjMpEyG9eWgX8qW6K6zk9KafNmFnPrAmn1yPf2gQL",
  "key9": "5p1TsKA92AmjYiuM31ajjTWpNb3g5Zx2Poe8HNub36HqETUdbx6GXy3xv2g6Ktos5X7dc1RQNstop8A4vxnd36TJ",
  "key10": "5jSGxuSnsrhAgYB8ipmB2zuKG3tLi8GAQ4pR2QBvteVcsDq4SsCK6VH8oho9PwoUKq3K35P2w6cFDtzauGbWZfBt",
  "key11": "4JishUrKcWFXPzkpLHxB22McKkFHNqxj59vbt6AX1USvXyMU2VSEZ4rjL7Qe8BYGzNx9xE9ATStE2Dkes4apM8U1",
  "key12": "48mRuNSx7hYisESw3Y7bCcJ3yAaYsYB16gTHQQJxaZCWwhhwdj6CXeFK5G1m5x58H5K4inRdt13XYFJYjdT1udH5",
  "key13": "2L5h3eWZyuhH9ZSbG2XnYmabcxYBcehj5qQFTUCTe9aw8E8ZcjMheUdpJ6zSdzc6jF3heYDPuF5tP9zS11qzJ32d",
  "key14": "NuC1shodWuCAs5ZTMZnUTJZe2X24b88qzBAbvTfe6QxhGGmJ5djimdu2Pjuz3F8vVCPExYJRoLLzsun9jBXBWJ6",
  "key15": "3nSxce27HVwsfHpCvumXyYDWpzR7D8Vrgbq4hgGRC3fvU1ux6e9kTUAhSTgnPBnGU2KPBq36r5nGYqWKmexzgCDN",
  "key16": "qV9aM2VwZp477gcphVeXumm9RTXiKn2EtWZ6LueFyU1yjZ4JyeGG9evSgXb9sjW6DRdWJLX9fXfqo8wRgBTyAW6",
  "key17": "37r7hHjhQoLnXvUmjouNqfKBLZw35d7G7yMEYgKZZyKMaJqEM1Ftyduzj9bZasvbUAiYuYY78R1kyeRTDTZcAwUE",
  "key18": "4Ci2NbGaGTBcD92itx5krerUHKYvLqFFR4995dxg1mF9qcns8DiKgcf5h6rdTRya26FCxktRUcYiFaATTVEtgz5F",
  "key19": "poRcBvn4mSF5LCgtyKSR4aGfk84SSfoHCJTLBirHSW1zf2gK9HyS2JVyV3MEfqVtcx7RAge9aFvNXYXtXd8Xqut",
  "key20": "393DQ4EKmG37cQJJ7TBSgCNgQdJUpoiAZkEu6eZMin2gxXC9QitB1XTueaUdZ8TMHHj6MHBKivg7VcSafSPJJbzU",
  "key21": "4Wiphb9QbkpmFcF3mBmCCXdJNDwrRCyP9P2CaBkQVBL29q2Lrqrh3TcvNXgHNyw7ERWW5bUjLjqpEnXzMUPPNmk9",
  "key22": "heyUqrh7MneyKEMmSdwNzQkoPoDmwz6GYimJpKda1R6Ne5sHU9W7jYp7YK95T5wNX5ob1qFmQC2vzvEjoWqy6ec",
  "key23": "A7toPv92kV7QhQadWZQV4NbudzBasNbswQNnfqZQ63HVqqifYgaLwxfJ4DFxf8XSH2Aj8qXE1hB9oo3nuopCaac",
  "key24": "3HfnDkqbzzfTi9Vad6RaKj684AiTQBhWLNRn9fxbuGFJQ3XBYyiaM33bwsUXpjnYbLvXP3VpWpTQ31Hdh4nmGenh",
  "key25": "2hNeqwUrRihpWfbySRWtDsDFvfJrofB67SP44RaG2VLfkhWavj3Bzxd6gXZiDJbfHJ8RjPxzWmJpw3ZS9U6q4Unp",
  "key26": "4bjUboSohtuwGWGKtbah6TCmxmXTdQTvTC7GSSnubZa9hss8GKBNiG79mkk6vRBSBCLEoa2KXNSxQa1twwZFXtMz",
  "key27": "35LYPhk8oHrLpLtZ1W2zBxLozWbgeGnZcF6j6kbJUYzvemvJy6fU8JUHYhKcj7LZCWUThG6Tv3cKDyykSGF3NAV5",
  "key28": "5UckNM6uAHEhughueimVy6pv75drca9sGiywnGj48RCGTwuBy3Wxd9BX2ykPk1WwFUHKyB4rAnhmFigbkYW7nmJt",
  "key29": "5qePoEiszXGEi7jGpvTXNjfkNMnHPtK55mGmcwDQKpUevjbFyiUEk87KECaUnVKm9GfbsbL6vLPxfMny2JF3sLtC",
  "key30": "4QT6vNDCiDiiHwt9QbtojPKWY3K8Wu4JVetViCZfg6VaAXj66id3u2piBaDdVBnHgP65PDXXSb2zg5komb4x2T4Q",
  "key31": "PcphD2PfNVsqgVRaJS5cCWefBkTbkMSch39qhKqB21EdJJh6uP8YB3MKuSBkDtPsUgEUSXpqbFQtqHKPRe7kLGJ",
  "key32": "45TpicNgwwD82SnbYxfyMz3KvfiKxJct2NLRhpAcoTZ8U7PZgj6H9rF8ztFZC6twCCbS4GSPQeo9vTpmyUrLryRx"
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
