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
    "zaBqL9gUqAR77xqs8W6JyzUHsBzRq7LqTtgnkr2AZTmbUBRFgmNP8fgUQ5Pyd5mdw1Eog5AvnZgrS3ETqqSnzgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cN19BseHbKUu7FsxQSR4iCBTUL2uQX6sKRgxLP98NbJxSmoYrCPJbitGQcHGKpBq3ySGg9B6EdFw5NVbmZpfrTT",
  "key1": "4VnEiAnUPTxhmvkNa9NzaBygCUuVcuwzLmGp8jJJJscMoqjDhjJu4jeE2y73Ufwcwmu8hCRqfm3yvZSU1f4YdQRV",
  "key2": "23Z81fUBKV1SYsZWLHTECyr4MAv9AS3uGeyRdwRURUDwdNKSvqA2SizSNz3n6x3HJ2frczqKp8TgJMeMHM6CcgFF",
  "key3": "67AoCrWXZj4U9ey3zWrs2K8XBKQT7PnN86wah9vej1kMVjfF5DiNTtwE9e5pdKHp3FUFpZpbCQsey3Rjk3pxyYPJ",
  "key4": "3Pzqy3HxQHUY2UyLdmVSxjULNrjE5vv33ZrhSM1LSW9PnvAkXsxeDMuoQdkpvJTK3nWJEUvbJ9XwrHp1yFiFg9tY",
  "key5": "474vWstNpTyLKeohZJHjX8aJNonSfq5dHGDScHzo99T98DQDrxPWLMqM6UqR1PhGUDBNDQ8YcooyEGBQaCP7uaNV",
  "key6": "3rgSezcci7Rtu6tHkBjjiFz9GviTaWxj8fVKU9qWoVNZKhpLUU6zoucwY2k2WRpEbB1yFgDGTeAMCyBdErc6kjuu",
  "key7": "2sCSkGBG64RpUoNbeczJeyrz4MQZgVbQqgR8nS2fSMRAWGai916RAWa9DU1SY9gpvJKaJsyWhN7jA98izwchDkND",
  "key8": "59HFVqWgPUPzBuNociAfNaXs68tXjq1MYXfgHHt8HqZMj6DekRrBf6viK5Fset83eTcSJ51KTp5GaQ7kfG1afyHF",
  "key9": "jGWccjBC7vmTn7TYg4fhrfhQE6fxNVqpw6JromHVno98bL5wqoBn5k64F4KgbYk2o8DRUtbgPp8q6aQKqgXNstW",
  "key10": "3ZAfTV4P7LJFEay22iQEHxm9smuam6LxeCXLKbfzdbYc4BHjF43MsohNGmn6pyUmNCmQYp6ZefHAXZHUU2FoBEkM",
  "key11": "48C7HyTYHyZsPkiUYzXcuGeskHSsfsSoXK9D1FexA52DBMi5F8BmkoASfto9ufFDDdDXrShACeHy7hMCajPeTUUk",
  "key12": "4rTMdzRKHk3R1BL8H3qJBrrzYmyqQLUcLZyyJDQ2P7ibPSR1DmUGjczzy1NNqvkB1YAAgNLUNeg6FCK3y15nUvqu",
  "key13": "4JohH2DZZPBTZAbShv4qtHNtr2ZYMp45KPGQjyTu57hpbJPr99h5xA3vF8aFdbgzWGEVeqqXPVqytaLK8ZBy7AFo",
  "key14": "xDFBpGvjU5rxYzxLYXiYznBRUkn6nSH6qyDKmwB2LUAvfgBbkMXpFGdSzMXYKevuFgytDsDC3Af4rKesLQhmNV6",
  "key15": "kb4xWppzmqkSCpetbjUF8jGp1Dn3vLJy4S3X3XWN6Xq8Xx1JqWffFPDzoaqmKJRXqBTHTmpqQomAvNDAHZSR4eA",
  "key16": "3USnYnuzRiaPosY82RBhLwbGv9En75S9LB5KKWqQZ3CWV7peXZQoZZnEL62r6iq2gbSrSPm9VFzMJMoKvXRDHkr",
  "key17": "2Nd9hTvmPpuNZsAaWo3dm8WQLjCSu9QTucgtauUi1kQH5Nijp2EPPxCqpD7eFmdJz3CTTTWwCJRTUPnnbCFDKt5B",
  "key18": "47mYzgMqYQkQz4FxzJU2zZKXz7eEsrGbjnQCzvWE6URuVHaSrAqYD1AoU9cqYqgjunEK2bqoevpD3xbsZ98uSFBn",
  "key19": "5nZDHgXymQ6yASdn5dWp1ERczdXBQc3w5nnMtrpuFhqTfL76PhjJeqKCoQVnwfeQEUfkBfSfcvYYLokzPFvdkPUe",
  "key20": "4qADzjBNiadVHxLMWbYaEs9x9vRp3CK19v2XvTv3zwZYmSC2majQAzYwQK3vVqfEnoA5NtoeaNUP5sr8EMoyizfb",
  "key21": "4PY19hLSWss47koEXReG1taRCxa5zQXZ9g8yFoLNbukd38oiaFs9Wr4RsD66dGMebQvFvLwGWkGWaQbfzrowTueA",
  "key22": "3mpZwSQJA3wFdE3ftcaoKshi7ZBHJWPgBVoV76zEdFG7Qc3Jnducem2MffXYKdEJQezmFtPKYLMBgkpNgrHqDm6R",
  "key23": "2Qrfkrb99Us1AjwVCfguQ5uS3PD3MfEeQaBQpa9rEJzHF1kyVcSSx3kXU3gFrtpdF8ne8ZLbcjFENdo2383Q2gh6",
  "key24": "yaEYEUMKUuK1z6FwMTAYKt3X47mQePYTJ7FD9D7QZwSJigBNcgtDW6XGgeNbrqMMxKqRW9ExwgnLHPutWf1AavS"
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
