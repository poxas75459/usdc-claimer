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
    "661qDzz4ew9H1qWkVeo7Q5Uv3GzoBXGpFngLkiagPFZBx8R8SQfT8Csd3jd6NcFhcYzBpWUPUKX8Ye8w5Uri1eqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWb6cb1P7xfzBrBnj8v61KBMXSHaTBGJsN3kAfmUkSPuWDb6RVpPKPGAR1TR7yLzZqGGfWv1d447JrJEzc4rSa2",
  "key1": "4Verc5h7i5f6ZCr9JgiEmttLvrYc4UygU5v39LiwzEhwj5fHSdwPDyZdYXX5hWJ5gneLW6h9xWv74nuuQ3QpW1EK",
  "key2": "4oFvfpsKsxSz9MKeNtMSz9r2hNMG41kMV8C1SGqGZXvkfjmL8Hb7d93jmYFpQA97thzAmYon1nNcMjBhdBvx6nMW",
  "key3": "DurWr3nCaycnkHmkjsuiQvQMxFTmz3gBXadUXKPyrfArDhXHBvG2NARjgqnWSRHQxZ2B2SbJGGKHG9RgoKEDZ5h",
  "key4": "4xBDWGJZzmVpatpWZ8SFnfJGW26oi5wLpAgNajnCXEU4WyGCXXKPV5cnDonSxEiLiVbgUs23i7giZqHxSLg2m1gM",
  "key5": "57WeZgU3skLqY5VM61XNccurLygjrnuuYntkSZnq7MWfEoU3U84tG81uzmi8o6KmkrAMxdZPVa7oXhip1Yx7oHU9",
  "key6": "5EPLNAFwMaatjrb9pJxDK24c9afVF5JLN54zGHFnTx7Kdv91qaohYw53dFaujP2cSeJUTsP4X64oEyAeuy7Xm9sZ",
  "key7": "5HUfBQJbW1W9Yx2HGykqtFX8gGtYtEBoEJQ9NrgpyoxKByJozp1cMsoxfqBxvasF5LbkMq2ezM3YKwQeGdrdGNfE",
  "key8": "efHcYk1mc4EEjFkwh1qfFMDLL7zUSKuGd2GuYmEpSEwUA2erk4d8Uj97vuGc9DXdHtFCSVpapCyuj4BJNpMf8Sy",
  "key9": "57ogMHDLo7RosJe5rTytbqpMWvqegu4zBPNUe2nRyPTFSWS4usvmtWoJEeMoTkAeXXgMCvVK2rCte6TQrT56hyVL",
  "key10": "dqPVBxHQ1vXUxBYrtjbmxPxatQ56vyKMuZVRGcprrgwGs4Dx5WfNob5ZzUqKSeB9aoMweL3ueZq14c8KHvxEbme",
  "key11": "4nPULHq4U31wkXGpdTa83unCXPiNz1ZJxvjW7BZ1Kesr3612dWBomv4cRVo3TeUuYrp87bA1wZFnnXT4CRZEjkeS",
  "key12": "ShJA1FYyzGQUkJmin3MjRqjWMQSuYXqnXLxhmc7f1bSqqLjrMZKyQfdf5x7A6g3qjofeRKPsTLyCPHHWmDd5eAX",
  "key13": "5fdmawcjYYG4XaxebgN3X5V2v7BWaDu98ET34q89GQ6JKAHbJv1tvHCCbE94PEgHZM4v7FtuwmxpB3CSRULq2y57",
  "key14": "vR3yd9vL5uZ4gNcUWprNQqTMrkARgfiRCbvvMPxM9ndm8qzxEEeuYQBbeiEMdwR7nzQXh3oKWhHTGp8mVUMHPCe",
  "key15": "4JzttffVSUz6Q1LX46i8JxKzDZM8haZYWbVwKH7YXYGbGA5VxpAPVKrFER6ToKTwmSfxMUsZ8qbw7vJSJ6TALc5d",
  "key16": "5Xez7qdw5nAxSNEzr6vAschviWjd8zVdWknW2NtDTEFTTiNRCRHLHrT6q1fqkmPED4DYyZ2tor1YTTZs4Qedvby8",
  "key17": "2VR86fLTGFTPrbjxU4ztZEVhfesyZSZJw1HrHJhRhPCTB5GV1M3enfAEkpLfcfwAgCzfqAUa7bs9Vd6Lv4upfpEY",
  "key18": "4WAq5v7T1zCcUFokai65uG93RMzC3Zg58WYs77VgGz8xrkjm5mNAeuXRm7WqFJwsRRP9mSJCo8y8CvDaKAijNwqN",
  "key19": "645Q1ST21oNqLF5iqZmKXd1gzUT4Yk5QCARMNqCrCjzBFeGkK7nCGJ9xDd1kaAnMT9Ye5Q9HFzNi46gR7c8mNxmt",
  "key20": "PUkchr76bndWkQnDXLiW6SatQm8mHvefdhHmnhb62rU1ckqTrA9C7oaHa8ygCx7KdyXGxaZXjE33DfXLCZfQHGo",
  "key21": "5NSc7ajwA42iZ94Qpj3cdsmiaopbZH8ZksmgyEwGx1UDeip5q736oPYyfJ2UCC5JKkfSvntdoS8ENs85YRTKHM4T",
  "key22": "29HuFB6iDnU49bX2s2LNfKiyy96vUsdxnYtrayaUktyZVFY6dKpjPruHxjoDSJ57ZW9av3ZyHoDpybCD895rCzyi",
  "key23": "4g7ZmxsgSGvhBgFfnhaz2tZ4aKDE3vSotRRuZPJoPPmgSj4hunQGPpo4f2mGBQDN16XftUkLwsLMeBgGR2qarRtt",
  "key24": "4YJ1YAMiSeDm1d23Mi4LF2ZAzup12pDfjV4H2GBB9qHbmiRF7emM8FdQRZRQtaeHmYN3kP3N6vknSUaVP2VASd8L",
  "key25": "56gu1vEXNdWSkXgEc9Vq8sh5FEDmRv3Y9upLTyTboTBbFy2KtBhaJBcJSrqUNVhQkPmUk5R8WFp4Yz5wgK5TYPTn",
  "key26": "4sqUQ2eqobpQVN1mokr9sc2VXFztck7bcYZtWVQewAS3AZr6U8KriEfDkrdDW1GsezJqAifLqwhE96F7bdjAGac"
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
