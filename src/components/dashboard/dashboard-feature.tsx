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
    "3HeMmgUH3gzdjm3dk4XUg5nSoKH2FvByJEWHZ2fDqXp4qTyDmZ5VCHuxHsCKHMZgZzaQ5t4cQCeUWV1mqzdebZUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dioa95FdzVxGwwCeVtnshWShJGFaJPqEMSLRE7RGiD2MBu3usTLY2kVMRGYVEQDfYa2abD45BP64CRVoj5i8iTZ",
  "key1": "4Tz5ot9A2HcCE8QMjz7GaxYLBdo3QJgXc48bFqMfmsdp8Mdx3G5hUaKUzAYddEpisjYW9jr4FXnpWiQSAf3PEb5P",
  "key2": "5auiwmgrRpzA8oPrRo6jfaDm89d5nUkpFCArqkzHQUfhW5diK1Qd59D7mCWLjNLa4jeAfGeEmPfDrzyBvj7gJW8v",
  "key3": "5xzzvxBKgauBZVXtSCqfidGFcmMpRPdimkpV4wUkQShpb8vXuzjTBWA73YWYJdvVJfxwUNnTDCABbXrXgeopzToJ",
  "key4": "4eoWGffrVfjY2aKXiLVVr3CxxMkyNVeKbC3gEqciPNt6doWLrAXfrZuQ7RsaCEs2eJEpp16MCLB7YxCRsKjP7qZ1",
  "key5": "2CNsdKBVbicWZq2wayXUj2suyt9vQ3PNnAudcfUpPB1uLhC9c6WU3M93EkSUaMVCWa3v7Cf5NiQTrJ8EsKdLP8u8",
  "key6": "5y14JebVgLUEvfxXGcamuxaagDQ7Qq7F5xLx2Fx1HzarYSQXaW3rPShGieXMdAd3fVTY3JReCKt3iqo3yx2dF1aw",
  "key7": "5ofLNBDBqJCHKMPhiSapm54mVowZxm5vqmMCXmNaiMbfdsXxbYkYfyHyTQJxiXTCBYGxSRm9Z5hDUqoNP1dZ4gT3",
  "key8": "eK9mUUDXeMNeshY5tZFParN7vxnq2rRgvwCsZ5QVWFrPcYWWLWnpQvasMQrpEGzwghagYhx4ZjB4nth5FFaqKAv",
  "key9": "3fq2gR1HMUkEyATvnr2Je2oGu8McnXN4HZEeRU9qSivQtor8yN7wnFPan82fyZJLSPtRNtstWe35QUFQ7wbLMRAz",
  "key10": "21vNNmXGE6TSPM7CpjGNn91oHTAWXdgZZa7i81ymbhcspcYq9vjxqRmEiPU4Enz7z12bAgbSrwuUGr1UiDEoenGv",
  "key11": "5DdmwuFmuQATGDtMmvaytdtfknMuPEmvX1Ed5YQkdAdXA4vfehX5WXKJwjf6iigkaaWgWR83Tb6UKNtwFPG7JN5N",
  "key12": "9CwLU45a4pF6zhgnFKv5mjZRoZ6ntD7xmS2zbGz9LFR2TjFApuqBN6ntg8pne5MrWWFhVK2ESR2XkaWsLxWuqVU",
  "key13": "3cMAqeA43gLNZ5pGndtDzGPn3fTWDUaFEmkPya13xcS8jhNTfi26UvjKxH5Y9qvCbGgX1mkPxH1AV2Ywm8T4vhMq",
  "key14": "3mpY2b4dvC1XFHwePDMjmksxmRwQvxHnpHJ4gtaRDYfJKr6wMbYfxFZEZgQ49uUvnDR1FRzCHjVbQBqxs37ESqQz",
  "key15": "62kunCEobsW3z5mVhVRWQoqaB2cAJgj6rrGKsaNrVS4J4QE3gTVPg3uL8JAge8x3ygqAanJu2PCxSS9mg2Ugz1me",
  "key16": "4R263ZMsFi1TjJYRdYq9vqSbSFchv53DsUvT1RKXpbNJo53EvK7m3nA3Bt5PEZcPnRyiLnoeYbJ2oVTWYY48sQbR",
  "key17": "tb4SczGYiVeKZqmZ1GSBMtUqGCqoaYQnxBQHKRsFRqbHXoSF9JfRQJueWficUQQ8ufVkjnS7EkciZCMndVXfrWr",
  "key18": "EpSRFGz3wBceH4MR7FcE6Q3sMCtanmdoQEPyWuKRGk5LWUCtg3HKKdaEP9ssAVCbs7dVJAtnVPsXeeMMUgwwDeQ",
  "key19": "5wMQCfEuFwGF23oZTX8W4vv9aGFNuQnQq3BFmS9j8gv3YhcbBDVed4sCikkpcJk95VtSWryv2nyHYMGUhxtgg4VC",
  "key20": "47bh1Ha7d9Z477JLPUjfMqnUWS5BF63ts7XFd5BvYHPMpisxPj16P6ooFJzAKdREuaBiY8raWAQao4MAAvNY41m",
  "key21": "3a4LSqMqqGV2tLWTiKz1kAi5bEf44JjXDNRrSXaauKGTJzZ38dnKP5ctfhQHCqe8GcVZZQRF476Hqd1aYRRaSh3g",
  "key22": "2dASv8xGAvFBqKzrz5jhW79wZhn1JBWjNEuQAy6HRKMCLUxW22niBt7SUc9rcNuW3Mm52ZDmi1JJdiEiSmiTWxLm",
  "key23": "5hCQHAQvsgW7onQqSXTaDQU2zHVdbtKMqa1fT3jVAkSDxWaAfFYDvWDMfzBN9yMuxUhLFNfUFRYS2RZmwKXawApn",
  "key24": "2KCZtH121nD6E4fX5vZ6ztouNoFbRcwy4nve54kCVuVWZZGSvM5d6HG4x89fQoj5k8N8ffKiQCXrJSnXniAS2afS"
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
