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
    "2Y5yLo1P56UCGsKyiHDmxCJgkyTcUvtFAL5mJECiKi2fBAuU6f7fZf6YKVHJhmD98xCCc54DLd1M2DLJcEs8NVP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asvbs66sMfzWgJe1PXLBhtTLFRkkPzMeghmT8tCW96GxNLz5Md3fU8E2QUZC1icG5GNifUXH2KLyDvv4gVbcXga",
  "key1": "4JjVQF7wYH3bK2v3XXNdrUctAeYPfhPSUvg9VkyxfwnXk63e9SvGqXiNMcYNbevwnCJgBffhHKNkavhW6cWwDBd1",
  "key2": "3L2GmNLByBUtn2cztEE3MuiYuTjQx7xy8ktVJ6BkmKiBefAsuTSiHjtDt6BWLf4GcbV6qr73YHSB7GiHuGN9C88J",
  "key3": "67TPRc7YzXupbxk6qJu2T5ZjqmjcrBa1SmMeY5zV1BnipTcQBaVRrsAEWRFEjN9N8RvgZ36UWRztbmxeNSPBYtYy",
  "key4": "3V2cr8VMWBtVcnQfGVZmqmWxwBEusbGuYKCk3cAKuuySo3iU3Jadvwz6L5eiNppg7D2UUm8MRCE8ivHnbEDMeZkE",
  "key5": "3CejepPUUc51U8RULnxWpphpwmgJyTfoaUeHLAeog8xSk8AwaYRj21GkHEqQJHFvRMVE48VaKKD91NXV69uDzNyU",
  "key6": "3gsJiPocipKgao8bR6D8uEcWioV2S6mCi2VuM4BL7GwmZte5MwjWBcG1JKN5dJv8BhKkcmSKhmCwGGJKsxJmrmoY",
  "key7": "4kR2B2VMdvXpLrhGFwweBGiuLko6Z4d1DwkF34WYPXirBtaAEKvEUvkBSWr5uSRszo1A7rZ6sjxiVXw4r4s5EQau",
  "key8": "35267zX9cVqydsuzsyr54Z12TAjNJH176Kj4BsESkMCvAebaAwtpzavq3vooZUfV8fawFoTgd4nVTrHzysSxVTU5",
  "key9": "3sjLcstJDbkBLXLabourMRVY1RMCorzRPKyHVSQfbqeqTnt9HDZoe7uxsC6GxyjoeGepjxXvgNnzna9QMQc5U3ZV",
  "key10": "5knm2uytsG3cwoezcFbDFDsBZBvS4vQWJ83sjVCyww9snKMj8HSsvvs1UAEFqmcQRCDRK6uwU2Ku3W6E37tT6g5u",
  "key11": "5nMZYWgH5AVvHcpPEC9YtSLCwzYiCdi4HmqryPkrtHzbyUG5FiRF6tFXdU1mfYf7SXkAxip7qhbWgW8KThBt8mWg",
  "key12": "23mReLMc5MVGarfeoWVZr1jLvsQrFwCx3WboNxnH5z1Dh3ZCekwQ6hjbxXbNk2SmcKbdXwt3DXWzG2nQewkB5f3n",
  "key13": "4EbWzmPH2NYSwdKfhJDLGAuaZVRqqN2VVzPg89oZeMQhDe728Q7aMAH32vopk9NXGzvr6Jheurbfy6U1aXYN2jt5",
  "key14": "4KUvpH9ZWMLKrCzLZuK2AhS6qPALHZNFey8QvDQTNZGJfHiC5V65MHtr7yAdrKSh9JsitTrHV5i2okXvVkkfEUay",
  "key15": "57unEJ3aCwJ9bTXYvXD7wzemcWcA67vDoGwGm6yALj9ikugNf3MvMRQfcooixDd7n1SpG2wuc5DpJX5chWVkDvUG",
  "key16": "4G9b1FozjVxc3AjtrcHgnLbQft5pZjHqQF3f4RVBZ3KdKtNytfVqi6nvBUXc3ohXY12KiaRVaWPVPJyJ3UcsxEQp",
  "key17": "3s9dp37G7Lqv9wQrSG9Rd7UzJY6crzbNLoJ6HNNHRoGsRwxkjmLVdpYcoEo1uigraLcugYTUY4qNzK7eYiWXDHQM",
  "key18": "4e8ANFaumyXwsQ3BDW8WTWevE9Yc433YJmew4pZJXyWBW7iDDYxrUTQrFvHQbFUw4vnXrM2At7eo9jEDb8PcD9Lo",
  "key19": "3qSFgwyGm9EwbJYhXZo6fexhn6pn2hAk1a86FTfSX9Jg5khsJ6oRdecTRhHU9U1A1yMtkbprd7m5Bug4YfGdhvzi",
  "key20": "3Pr3RDeTwZ1mZWw1Vqu4W8tASNTheTbS2Lom4xNLYhwLnuf9h36XAu6X5SNA6Hx9uXd4vxeG594Zut1PhSo1MMDn",
  "key21": "kLaxEZRrXPUvW7xbzdH3JNdxmxJcaU9JfheRwQnY2zkyWUSBXRwb45mZnCcUC4jDqNqxMywP4SA95uFHekXLeMA",
  "key22": "5Wy6cKPCKpT2VE2AJzWSg61wQCLGbymtH7ykfLf9TcdxLwzaD9UB9Y9LdmuBcGvY9nGwy7R4E2ULtDfiCaeqJbLc",
  "key23": "5riDKNyakeorBooUAeP95DuKSaYYF3gaetZwk1zMLXwC5coGKJn9dJb7gNyfnyQ7d9PGfn1sQNjExhWHdbyjJHRa",
  "key24": "GU5mjXUWaEvwiGLKRwYogj7ySmWgsBjpvopzuvq41SUvkqeuUZmScQdZyKWBQQV6eDzdUZagwcq3EBhNBiNKZK3",
  "key25": "5dRFjUiaKfxPaz8zd7e6yhpuFNPNk5Wybsmx7oeeK55G9NFLyUw4CwRKmZarLesc44T4ZBSykLvMNf2BirhsHpy1"
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
