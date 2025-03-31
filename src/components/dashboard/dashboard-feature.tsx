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
    "26Vxxkk3vLsT8wvQLQ3mBuYMLh98woqRypYioyid42jK788aQeBPuvd2LdD3Fu2kugLu7ugiUYtAA3gVzMV7FuNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioAT5pwftYtGHZu11kE8Cj2JT8SfHiGxBRyW9n8FndUvZHYgcSPoC8pJz9jzmNXxjPHaJAiGVXcqfjAYCq5CMi",
  "key1": "4rzmEpZZrgFxtc47Tt2sXjh9y6d1c7dcS4y1xLzi7ezjaP7v9hgYTW3iS1yhDZobRRuWR9sPkTQBXvmadnKNqNM1",
  "key2": "5Twnp6C2grsfqNcxdPvuDLUapDPhAWpLZyFFeeJyeDsmRZNvvJ7iG5oRmQbnSA9DVHNbyyc2cTABG17472MLVbdm",
  "key3": "SggTSY1b49KuECT7Q3EsVxTNgA5bG2XiQeaRwc6PiW9Qap4WePeGRZDaPQMbWBQq2ZprCsyQ218898uThtAiiYs",
  "key4": "zJRdDef9k42eoS8MEUoPztBvboeBjYV3fseiYyQyL17cTUTtCe6cC373HVEMwY2QG6RoUdzofcF68Fkrnuoepef",
  "key5": "5bNmZW6FKvKpNQ8gMCwAavtHv1FhEHPNTPbmtXrjYCHpkAtxhZ8rHBDB7jgYcBjAATUae51PPegjFtsaHHvfmjTD",
  "key6": "5BrJT4dxkAMd596nHpaK4E5jvDF7RLjB3XnEPqPfrudqb2J3T3xBWfdFiErDS5mU842bsg7stBBBNcqzujTJ5m6j",
  "key7": "3VevbVjSapccoaSswZ6eth7h9uL8bEG8tcHFkVuFWfU4PRG6vYve7mtHXepKcxZpSJgH9iVCbPYcvAh5Q4Mwbbm8",
  "key8": "hknGjPC1pN1nCSchUrqCNULa3A8nyFwhDQoJotAttbc8imXadcGL6sRxoSmikokewrf5bZTA9tM4W3qcKUBvvxJ",
  "key9": "21Cu5fNiRLuEXDjutcXdRmpT7H1JvVEAhBQRM7GYBcRJzZ9Wz62qhXJHF2d21Myaa69X9ZCCSsJGJzSFgYTDxf12",
  "key10": "4fhbPUFNMEi7nyqB1TfY8UBf8ExURSDx4AypaQxg8sLu9MdokVp8MGXrdp3iBVVrAmt4gjiW392icJfzRYnCrDRf",
  "key11": "JGYotSMiUX7wFCu1JTGF5VwqXc2idyFt1tf3YKgHsjYJS6359dBNLzqrhNAVsHLuLCCcjoXmgT1AzJUn6WanFNV",
  "key12": "3fGcqYZdE3MbU5xgdq54iiGaRVHYFDza9sgXL2LqSisHA8CMifUAikWx2xn7WMApJjGvrU7PqmoQdv1iv7xVgSSa",
  "key13": "2u4bBvuSqsKKpPVsGZe9gwZXgLy6K6JUM4fqiBYZeQ69JqAT8Azd3Ap7agBh1GzHTvubw6t15W6yfp4KSSkuYFZH",
  "key14": "4h8T7vLgyDfQWoNe7MTvSXDFh58RPwdq2g2WCWKCNpdu84A3iNJTpdivRk7MByTv8RmoRSNfrxwcx4RCXfXimQJ1",
  "key15": "2nKa2SPWBXFZsX6GGerM5JM449SmS3aXshNYxbuvLtjTHHm3oigfkeR4m9KuBa4xqqfAxYwN8QB6WAK66sbYBdBy",
  "key16": "31AGvRp8kFDVYBo3BJ5vg5vVWWj9tVP8yrAi67bP147TX9zy8j6mcimiwDkqLyLjuYVqAu2YnsG5NYjfLrEmUMU4",
  "key17": "2Ko2JiHEyhJqoVgQJCVjko1eGNyymsukSS3cSYv6qaLoA9N6cZ2y78tquWvgNzvRUfmkQfRKk94PFz4jYANXnrTV",
  "key18": "4ScZhsj1muAuW5qL4REcCc88NmvnUDDTCNDg9BN5YsHTq7W7G5DwfvdREFL1J7pHj7fYU3hDQTLRGs9GYdcC5aXg",
  "key19": "2GzKGai83iM4HUuvKdhf9hRTqKhS41hAT9F2HNxin5HRVXFdDnTTx2QCuc8KPj7oi4yeinTrLYwcvSG919ewkvN3",
  "key20": "4nAJGqTZYvsjsFQB7SgPo4sHSLPfCt5MDZRhmQdG6x8x6cuZtt2enaHHpP8gviVUMnshsKiRptYnT8PSPCW5U4zE",
  "key21": "4TP6tH4fJ9kAXjCtmUeCD3tA1Lti4bzbn6XDNkyWj9KsumV58krfPnfLBA6SSumYqVXHEdvmHJkYr8izh2qSi9GQ",
  "key22": "2eNVhdp4ADLzBwEMMoFWNeo8sJqa4XzfbtXhNyjF8bXrAYJU8XM49uJUH2keegyfnLuzJDzrrvpgBGv61zMeu6nq",
  "key23": "26nn4UNdRvKdgQcgyXYSK29usTaEuNsaFGrH57ZsjAfvVVhNwFgge2nm36gFem5dDHd3NqwwGm6aP7z26aZhyTob",
  "key24": "5nR6xBEeMk2QFyBTx56UTxTiiKUxi2e4vBaf4xPcxVnft2mib7Mz6sdKy5FD8cmXkohZcb9Nrn2gFTpZKFc2YZyY",
  "key25": "3nW23s2CnvnrFrr8MjWZRkqVoVj98rRtbMCRSdm4tM8xVxxTQuxCZmtr1VgPHbn4hnnaf6a7GDZai6grksm1b23S",
  "key26": "2X9CSgX5hUf3XYLRfhtroE5qVQtnUfBjkQsfRpdCDe7pUjKvGLMJQau3SegLJkarA56z6uggUhKWAmuo4CUqEur5",
  "key27": "3FPHapPuhr58tvbR9oCZzsrWQJyhEVi1gQHC2gT95zzrCPsELXb5EYds1WJJiogxYv1iNHXtVY4A4NRwH3SeU4DN",
  "key28": "3cnUwXWVDSpChKtWfU4nrD9SVYQgFjo3iE4HNQBnNyFsnsXoycgsJpzghWBEK33YSZ6AAbEcpeZej9p7Gs9mDXhS",
  "key29": "JJgZQJUQ3q6MKmfD5MdzD91yaUyqB4wE6H8WxzrfFVQR84q2oJXUrM4nStSHY2pHtc6fRtRmY1hCgp2Z6LWZnWP",
  "key30": "2hmpsBGP9AgKTn2dvndEmyDacwMsSnPNYcJYUWauQxQw2CEtrvhmuYLetU7fdJsKd35WYz2AirncWvVFhhfPNyDA",
  "key31": "4U3iHUQuQSZAeJSLo5nbUBhd7SxW38Qx1UgUA9XKsD5ieBVL8PYprzDfpSiQvUcHqJMkz1pLrdRZxkec8svtxAmA",
  "key32": "5nrzExdyTJBnAV4iZK6tNyYr3kDDqi4uUicrexhnDdC6XvA9bmDiVHhUXD3nYtT1Qiz8jrLakxGi7F2ySQZShWrT"
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
