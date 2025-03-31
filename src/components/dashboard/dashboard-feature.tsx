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
    "3uFrDdVaiGbWAmGwCCmLFf7u8wCCEyh6NXoqzXfwmYYGgsUbCePPMBJZDHS6UGLu93QcYxMB9XtzxrfDgtyQskCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TSxr9gwErFcWQh4S1pgbMsAMvvsN9sVmz2vF9ouCbmm9yD6HM5k9JoXJ3xS6cZ8LrcpSUQMC5fyT1oSmWhRJyz",
  "key1": "ecKkRB276quCxx97QaCicZnxdG1XNtZeGMfeeqmH3yaYPe7iyCK73cigCVeKYEGagfQonvo4mC5juJciQLqXGaf",
  "key2": "4TGGtFcSUszYux8mZRRW9hb9K8ViWasjYNebQad6YaEDvPYPVfV3kTfLLCDqfSYb296nmEwWhKVK356qWP44hCcb",
  "key3": "4w7WJmDTJq9mnbqyBmL9gX9XY5DQhHRh4FbgH4d5fnKpE53b1nAM57ft2dBHTMATcf5knLxtND7F5j2y7PSDckn8",
  "key4": "5A6xT7fnoes7RBza9F7EWvaT5U9BPdHArbCWXHApiCknqsghj3bNCXLDYbyDw6sgvFTGghc4z5yvD3Q8j7k5gLED",
  "key5": "5SUu8YS6RSq4o9UgUdSzR24aGtuafXJf95VZbWckNWVkXcr8hzWbjzsdWqGqZthRXazoVMy38j4WsDYJzB3hwBwZ",
  "key6": "4vBjXB832Vf3att7T747iua9mm521BYm5kgpYRn6XA3LrpiAMFvo1W3G6FeZQBVAHRSNxjhsrziwf6ApkbuWjL4L",
  "key7": "2A55T1CzaxwEKwSYshu68T6dC9EffxpEJo8FKsvYQDr5tFGU4fDLoCYZzQ5kN8DEAq63j5D8dxxwQSGH7WQJe9FZ",
  "key8": "5Va3yMWNaB1vWsU7v4HT8A5Dkrj7zWBXw99psMZALF4ySL9Zwv47oaQUsUFWA7EPJzf4YomqQHdrPEkC9Nv9itMs",
  "key9": "ggtaNQBFAtkVmeHZxSQrhdd1ZN1Vxxs16heNzTcH5UzBsfF1FQ8TAHPKETpoQapA43Z87KzVTpNq9FKNq2jfWxA",
  "key10": "2aCxoSb85r3Sc65iNGPwqe4RXUgCXyZj5DMX4DMR1ahLCuJYA9MLEzKVquhjk7HRkoEtbiyu49eGGVcRiGP1MJrG",
  "key11": "rmD8qX52R6487BSGw9wLVStRP5m54VtoPbzBuHqjvN53So6SShWJQnMsV6fX3Zf21o4pALPor6EyEKksJ763f9d",
  "key12": "3cbinPgaKrez8ZVzUs6v4PCXiBmAvNo5uXwWtZMz3gcTgUYrcAAXv8ueeSKKYVatTfPfEECEYAfetZAsS5UJ3n3x",
  "key13": "57e9sVximLaQYgjimG6Yuh3a3jRyTj6yNHQark8G8SCq6bGNfnNZsEemQzt8TVhFPofUZMn5H7zrVEJmwVDFoZuG",
  "key14": "4RgkCL68gBrRrPDHCcN5icSGXedGXd7GfxShScZ6A6MfEqL49dmU6cKgWbkEvzgsj5eMZCUyusFR5PEpjFxuGtUN",
  "key15": "3FL6vTSGCyW2L7fKccoSZAKsiaUPi4G85tGVqp4PD54yYqrapuddxrKABXTBWoa382QkkmW1eLhyVMkW1w7e6AKw",
  "key16": "Z7tmcSTzUPryqJYi2EG6uSwj17aF9Dtf69vgXSSnzJuHH8zLXame6RyPD1JF6q6VMP77f8xKH28amsHV9TWyuN2",
  "key17": "4KuKkb75R6bZKRJVLSUG3Zkks8YvdCLoFLVEFT5DHpVpGCifcwciXvhkHjKnbRSSwaoPJ27ioigahWGRiAmLhQfb",
  "key18": "64FYzD1d6XZMhph4QPQW2q6pu6ZJYeKTbn757UCRw4LDFRAYZA33ythQi6UUnWK7cyhSXNUdu8qfV3N6r6hNUnad",
  "key19": "54aThycD96SiceHZqLDwTkttB8xvQSK8k6U6UzTSyFtS5qJiHtfoymbZ5gpFVmomvBGuaMSS2EnPfs6mXzWAKrM3",
  "key20": "4qnA3E5bujHWZNXZSzsV4WriVMSufpz4fvVZCyoryH2eZQwRmS4K9k2KWJTeyUzpMVeWtawtBojVJMBs5FtptJnV",
  "key21": "41USCf94f49ErcxvtpQcXUHQ3u6uGTFj8DhNV7S4NZRNdbr6FdY8WbQ1ny3QgRUTWvgS64xzTtAjQdEcAPquaXo5",
  "key22": "2n3sihvdsc9mJ6EUG3LkaVCFJS4hVLx2vWAvsbbcafu91vE5JDtBK3oa1wMcTq6MLXQ4ract2QHx8oqsZ7dFo4gk",
  "key23": "42k9tiMmouJ3N5oivrPSNTXM6CQzXsaHAsTUd2swwjpoJYbAqyeaaWehE617i1mEq9FPVtg4bS97Z5YVQesrYUKg",
  "key24": "66n76UFb4AjhRS2Rav4xnqstmN5Q5bcyt9tMVQ3uyTdJGo31PCjZ1D1g7hfeXjSedWohPpfkRC8jwLe8s58xYfPb",
  "key25": "5d47pRisJfzksjY6NS1DSC4m5gEqW6Y6my7s6GVzRYhMVuB9p8Ut4MktAQdBAhQQAaLHRZL2Rxgd4QZsbZLibGPj",
  "key26": "2wAV6seHH5TqVdfPzcZcEERkoDXFvyHX4b3ATcgs54BcEDfR9Th4G6CGgHPKwJTokYsMBiroor9dTN56ZUDH7KWJ",
  "key27": "5aEezZk4VYbswC5HQ8Qw8L1CUreBERHd17TwjBsPoyNc3dR6qfGc3XuA622zmS6UaCjsLfivdQngMFq5D3Di1rwe",
  "key28": "EksiDifaaY1N1ukwDV9WWumvwnmMeZeNDoHjgdYro425XdWZUAzepuNBfDbverssdXkEUmnncKwVQQStZq9JPm2",
  "key29": "2LCieVjFQCsQnTzsKpG3cp66y3WczxjFM7S8f7qMxkSYUgRa7Gm29kwPAe1kizw1UfoVPVqvfCpRUNt3VvVUcDCS",
  "key30": "3Q4zqvWRrkKNfzvo5EgYAVTtrugkdWYyCSq8gpfcijTaKzF3V7zLX7qAP1Pa3gPYw6C9oncqYSVs1vAT2BnuP74j",
  "key31": "47unjJ7xjLkYskkh9dJKJpgdMo3tTSmYDG39dVaNjEkqN8nqgYYHMAABrXowAUmqufg3r7bVorvu3umQ11mdQkr3",
  "key32": "281s9dgxVtBhPAiv2XUDtmvgzHTSKnz75PHBbKWUsuMFMYLnXnjNbr3Tgf3q7RkeJG4D47rTy1W3T2xeFgLP92Mz",
  "key33": "maeqAGcYw76rFdxMVGs32zn1BopYNdDNyYmjsNaNCXuChHUgniNh91FAkM6qwWSEebswtgWjpsyhTSaLSvmpMXu"
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
