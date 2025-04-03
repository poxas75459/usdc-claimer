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
    "5Ng8FHGv2buvonTPqits6VZhuFM3Sj3GMctA5KviSmSdXk4bZrFrVwnmkincuPJPRwbk7X9Fpgtoz2g53GWQoZRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3mY7ZQM28nQFFvB3SLqx2LZY4WMraNggDVXBc6coM3K2MsztrUdwVokQKKoMsDRZfvTK1X19c7DVsX5aMvFjZt",
  "key1": "ViemKq2gUz7foC3Z6k4RuP6xMoHwVGgTu8QovEzBNgsnBtykvZVbtioQM6xMkq2X4uKHjWJKSKr9abNrS14FM1w",
  "key2": "2ps2vtqKt32EAgLqDSQgs2ay3EWvmHaKG6SryKWVxa8ST5DwtrdSRDMP4oAbpJ3WLRh222KUWeebqWtgz4pduRhf",
  "key3": "8hGWuJvdKDkiHWubq42D5nHvof2BWvYEEkAN9WvyySP892LePkHKA2drNa9SKCLNajcYuKi78ZctBxatcpscc1j",
  "key4": "57aPXVZZkxmvWpC621B425kd8uhmixHAcxPYp3Jc3UuZsSXLqM9KHEqGvNmCUCBXLu3bRtgH9uWe9osoWP2n239S",
  "key5": "3EqiafDsALpveFknf1H3CvKEoK6NccXVB3vS8FtJVebnXVYraMwhAjCNbod8w8vWnzESAN5YXSrVb6GTPtR5HPxB",
  "key6": "3ZCXmZ1DEMWehD9iPSnnWm7T1t2VS2LDfJskhe7GzReqqETWJPnA8cEVGJ12DCkwgUKPvhsyCf36coi39mVgWEtC",
  "key7": "4uS6KLT8BZNUEiExa4fzV6UF6CBtogMUqwmyHKJxknsoLuuKJpedRK5PEoLBuR5vchBTm1XjEqMxwPnwB6BSB2qh",
  "key8": "2dkXiZQcRt7cTi4GZz39YeZceTNCUXcNoyUKdqUS8bXjLUQnwo9VmyriVoYbC4d2kmC1FBFFgBMo8kr7ZEnGPAnk",
  "key9": "51Z2xzLaoKJkXkQTx4eSGzFwsyAaGHj8CsnQNA8a4dBvdJ88SSXJkPH4TfWuqnaaJpc2VCBnFeAN5dEfzHA4okh9",
  "key10": "4ktfnuBFf36uNtkUcZY7T7jjS2N8LMdetUqYvYN7Jmexoa1R63XRq5yXvuazyjG7kukh149ojYJu6fKAoCPoDfbD",
  "key11": "5bex2SMzR8D6Ur9RxvcoCtZrci233R4ozP6CQYmszXd8F2XFf3jhUPW4s5oJ1G9DGKpjdLbR7hGHWFYdj5pYrcCf",
  "key12": "3P4mjmXB1g7fuobmFmsaQkM749yak5Su9ndH2sdHrBPWvoTNz3wscPbEZ4v8xMQsSmYmREJ33kraodqNYPhfKi4V",
  "key13": "EPoHHRaVvyMwM66nHEUDa8TkZfToUD1QTUmDotL59eVuAYLgfvmqax7LWC5YBYnx7gSV8nvVmgcGSr83vAMxdik",
  "key14": "3faxoYCPt8jtuiVHT8wAEZy9uxnDLCU5UwRU5BxQD8TL2Mz3SHNWzH5tRVLvoJtL4uJLnt5CmMkXwiH7UUtDkWAu",
  "key15": "6zcDi9tFQnseyp8p4PtfZ2ywWxhtStYNiGcWLh3CZirNNePzDpk3DUxzjzYe7EbKANADNx1HZQEgbWrff9mMcHr",
  "key16": "544qcHBCJLiYEJdV5sk5LfkUcVxKDXJDD5kZPptXUqiM91y49mgKwuksGxEJXYs4gbvrw2MMMZiaWjqGuCaWYxzi",
  "key17": "3b36PnNEcoF15NQojeiaYYu9Whsax9vBhr7hDzhkMENa55NkyV6JQmpYN1FRQMWrGWph2BUSUAwYGrzAxk5xAGD7",
  "key18": "kCe2Vx7mcsSG6JaJzSPHPZevQStDuyXzqn41YCCwVadCB6kWYZeCtZZMXGoJF3bUN8va69sub7uCfzVcmuQtLDw",
  "key19": "4vqCj8w9vf7SXB8rSBookRTj7yykjeS8dVwhuxSTifAXXBkFvgbGfGXdQQ3XLgyLFotuQJYqHc7CrKb1MJ3ZGmwj",
  "key20": "3wVmXhzpcdceDJStE3jcLiUDjkFD3TksnsTLst6k2gW7PnuDjxvyYuJTAAFbn53UuesVBHwd8SCbzVV1mF24LDF5",
  "key21": "trfkd1hbHWYUuzGFXKuvv8ska11K1kETxGBvUQhJcZgM1CZZ1SqwFM5AQ7wzSZNd9s641x1JMTBzuz99BQxCeaG",
  "key22": "2WfD2b7wGQrP6nLkYw4TrYdJ7YgkyxgTnXGWb9LncvAfuAtbH9w7VGWaGbsSbgujY6XHJBHz4HADV1Hbuj9kUZFH",
  "key23": "4vUYzYyi9uBWaZsF1SyAGdSXpahC5Q76xFYibgctmVsJkvQzWrqUEJsGXjRCUftRdL8c5YQcxR2jHRa5zW8duiWx",
  "key24": "3SzGZQbeuTpkwwe3yggx9B3BX5kxDt8LnE4SDqew2poWMrXN6Ge4csJBRFLqc1KL1a53NX1CujyarGFvGd6AYPWE",
  "key25": "5M2awf9wEFH9wmRBxK8358tgxRkJ42gQrHR4ySVb1musBSa7Ygus4ywQCBQMFoWGZP82Q5dXTwATMjzVfG9YacaD",
  "key26": "2GDZ7QDzEhz8PmPz8RS2otBLVNb4KCFFpnzLtTD7AhaehkLkCvJWhNd8u99i4gF4HcNvwE1ppDQJBAiunECXYxXr",
  "key27": "2oAZH8dvKgZn4Bd3okYGUoNWrQbA9G2fSG1Cf9MGodJkEtkxAab5jWuNdjx6kGtexqGKMw5CPGSP6FGWaz25exTb",
  "key28": "2YQ3kDvD1jx5LbSaTh3YmMPGgdzxp1pRxr6CQYGxzpCJ9HtsWk6Rh2Ya5536cY7Ktm5wkULX5kAWFs5Zs1Rcj5W6",
  "key29": "3rr9hy7cwSC8VZord4U7MDjCy9jiWK24gdtudKtE3E3rWLqGrREA4omMZ2E9cL6SEnvCTwNjENHNMbwmAiFBDLe",
  "key30": "38cyQCgBbsqz1DQsFQyA7fH93FRJJwfU6iMro45CWYSU75pDNpQRQhjjedxnF2EeKrmxSPoCBPD1ZksoFCHryEaT",
  "key31": "43FSxevHbvmf66URkJFsHEvAQbNNAiJvmwdFXRbzfvffYqsvtTWMTz9eqZZbvMoBqXZqG2VPxMWqSa1yoe1X7XLV",
  "key32": "4tYCYqhZfEAfQBz6jGT88TGWCh9aU2rWNBnhinCB1zxwydM7CpbF8X7g34ZkC61moCFFNQDA1hNb8Gwx3UEBu2JW",
  "key33": "3bdtARko1VSutsaystWmj4BznRH2Q4zHwuEbvPQQBDbgoEC2qMKsGYXNhZLSsTpY6xaivwT5i3Hsm39ra2F47x5b",
  "key34": "2D8yLV54PeUiFhK5PcvK8dt35FgHM4U4E9Hz5c28S75iyvi5bqVMkPMkAJxJH8xYaEaDYKJuaHYF64FDcGv1ZtPV",
  "key35": "cPvMQQZFgffh9VCrFDH5GNcQWrk7DVC6KrHfqAJ9SMdPAqNMC19eaauKptNfojX8MXTp2CCLmLb8eprHridHTpx",
  "key36": "qCRzgvrM46C3iUsq6PrXXLSjfjwGkeX3mQu3vis8LQ663n7Eq3JvpVL7znkdh7yBXEMAesUXpDXfAxYmbj9ZXjx",
  "key37": "3qFoTv1mZPstHQ5QCTYrTEA2MVCVZUjtcTGkp69QMwu7LEVEoCc8vednWNHvrHCADduv4nFyRpt4C4Kht2aUNoHE",
  "key38": "5kbw2GCRn96NPj7f95oZs4X1TCp3DJTVcoY4SmH6HPZEkR4xUNwQ5As1LMzY8rP6fw61FvK8yzQ9F3Uex6Zwgctf",
  "key39": "25GMQFxHqjNKYyhxm9ARwmgpmQyQTrGGXsL2BhBaULkAdP1Mm3rMJ64p9wNXq7hgf9FHtiA6seVVNzcsy52f11K9",
  "key40": "4nZFEwRYeUf27A4M6U3ThCQzvGbcL5s3HPC99pJE2416KCzuQeMQUaiHBSUpCkP7i4DjTyeb3B9JDrLsYXqqkaKM",
  "key41": "3GaWxCR1sbFKVrReHodQgmgYKXyh6SpodvR2cZcoFDe6USg3ajo7aJSuRCwmcAVp4sUV8NSTJ5LGtmPqv6ZfSqi6",
  "key42": "318QRrk5hvev9pmMhZ7Zx79Ytp8foJ8g4vBnJHTCbaCgnSCxsC6QmWSzZtNb9NSBKmpjP581ApExT1qzoiqGARC"
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
