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
    "5opZBWBPphV764VtiLA6CnffMDRUXUxKWrkaKWPGYB39mSu4FPd8HrxZh7NHiSDTpSWXZD3cohHExE9uZLCegxdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGfhdifPEy5CxbLUdBZj2ukoojcmbSzw6psgWN8rVoS8ZGEkAjJPvaagVXcgeATWBZmUms1uLR4XHsg9qiQU4SF",
  "key1": "3RUmpkyBpkrE97GFVipp6z9fwjfxX1HLU9uMWmSn5QrQVfa1NcW5xzauAUEnMoabs1zCETd6LvNRqGWy3AeFyiC9",
  "key2": "5VTi7tn9556e67snpGpALTYLUgavrZELcoLpLG7Tx9knKp4BGzg1EtddEZ2ysW5KZRdxduCA8wzGKuRXkaEt4U73",
  "key3": "9Lst8RdfpU5peVx9MNZLyn4o7kLdyHHqC3v38x4vASwkzuoBdqx1nZwLCjo9MRbYZih2BTRnRy9xUj8tUt4A5sR",
  "key4": "4idcvJfLgJZAvX99ACrGBQtvTiTLVg3WGeHUk6QyMH5prefzmEDiz4KDHKkrTmrJ1pc3Dmue59qdUptJn2sJLaep",
  "key5": "3M3mDUmgreAfh75dWHomBXEmCjH1ntnt1YaA3CvVKbJkgf3FbNEDTqWKCMkPwSRifysKhfigLKTVtJqcvxyUNWMf",
  "key6": "3SUTVaMxLngefWw4TWt2iHJmeYbHRBm8RduWTx3fS8TnmRnXTDrGBjCpjxfaviUW4mezwKs93AMMirzzkvW6Po6a",
  "key7": "3b5283CFyMuKtboobSqwDKNRfZpCdbAZ87PzRfeFdUP9vHB93ABB2QaoghpV49XLMhDQC25M9z3pZPReAMbHcU5E",
  "key8": "4PpejdGcbXSsibmcanrVK5adv4CZcnifz6oQjAJSNoMadvHbD6WzwfSgyF3PcqDoLUmnViBjYg1VNcYRp7SNPKXT",
  "key9": "4kMPo1hqD1PL8G4Ekn1kNH6foxrky4joA679hhTWrivRDaEWdi2BCAHbYsBb6CmgLfiY9jQqd4PznvhQew4SVPEB",
  "key10": "5hPs2UC3iwCesdWMBdd78HodHiNERwe51yfEAepbPc6wedsexzMZJuAiqFwvEoK4LukSkPFgKBXnya3YYrcdYyxF",
  "key11": "4HbHa27k8jRRVZ3tEkxo4vBrBgYDCAGWxxQ89eQoYkqJWrLxo2rLK51cHZ2MopkFeLYAxraByoCCcWuAN6CvZ1f2",
  "key12": "2h3sNQzLcKEkPbW8izabuXSK1jsUzK5Sgney1QUpL9meWzPqMh6SWSDHdB4Hf4fLX6a5rR5FjxSV2J2wgcuzPNpw",
  "key13": "2JEhk7y4sQ4g5JNQ4s3YY577Ts8468BBG4hhkUuAUe7E6rf1ZetbGaiy4UusMEinKJbasNbzCiFTNTwcXWqqz3bS",
  "key14": "3ysz1hWkokvFDWVR85CkKsKAQehhGQ14wt4vndZm6BnESp45xvdt8u6S5pZtFEDsFLzSLxVJcU3E1Kzd331LZE6F",
  "key15": "28yv2sS8F9gzAa2dtEEnbAyLYQH4sZjRd1sGPvmEGqLent4TMQJPzpDyfmXStHTGZPp1e3tyMa49Xno9z8ouJPea",
  "key16": "4ERGF3DE7LDUK5GpBywVutf7mHDfZRMoTJhqEocPar7tYKd2FSf9TYn6WgX2wmQqt7y9t9x5MkMqYkRvD625diUD",
  "key17": "2QH6ZzqcptiSCy4BqitbgCasCevGBv7XvbapiJV43hS8pQHgEQhmy9q7mTAohnsfKDt1yipQXd9Dw7sZ26U41dVN",
  "key18": "2qLf3ctVCcUV2Q7wpYuB6TWMqH1iDYA6g5WwCV4sQzSTy2WjbJAZRUAiMvuL58r2VSGW2z38qppQzL6YQdUuv7aa",
  "key19": "3ztdP8wbvMgp4TGphdYANfLT7cxDCgEj4oSaYptho5Nptx2hLHJEmmJ9HDWwfAtZxH5znUGcwmwA2SApt3tvSRor",
  "key20": "376VKScZkeu8PWcKocEkhCW2FXNuceoYzktNcxUSo5YumfAkVqHpZBzb3uSmMTyujCCptnofGTnqLJqz8Ysa4FZs",
  "key21": "a6rFMzKjrEEfsdp6dmWGERY9yCmiAFpQGeiY6U6TTW44nUAw9PcmRzZkgQDR4U66VPWeiauwWBuoSgghZhw13YH",
  "key22": "5pJC3QAu6DhE8UykejZHejUzg6uRDwVEYeHtSFDhPSsvVLt5185sN2pHTBsZGh4PRDJXrVP2mGXF2yDjdRyJ3kH",
  "key23": "5hx4LPdc2TWT9TctZR5jxP6o7aRDzZAjRtRTZnuRW6zWkjMwZgoekFV22r4LfTpS1adVa6pCCB7p7JRqB3996ba7",
  "key24": "5TmmCbGQhN7Dxueea43WF3XnWmBWWjJndKw2QDaaJADrJ7Ura44g8g1TZGXcdfxQV39PBUSvzjoxF2vjtbjzoDz5",
  "key25": "3LAAg1C9UpXGHKDAXEBEjLMXmSVRb8KfReBUv7DD9JARsGCe7MmZjhU6sTRtaM6CXY1jdDL9Anf1ttJ5vFP1QQxV",
  "key26": "LizWeqjFd18Wfxpx2d7BSmyZ6rx5t2a3UWpad9RN2YGEUSLMMGbPNF8DxtqpPMzKAfHBJGUcnsyN4q6pRyCTs73",
  "key27": "MdCBJeVzDXCMfXMGQRk5fv3AJvgdEgQwuBhdud3or57EeJ4Q1H7FiTcPMqRvRDjVk8qtsB1QZ19wgKSd1fQjFSF",
  "key28": "3LTyyQHHAyxnkKX6aKepN1xqnbhfkzVf963z4f32CZhgsaaXwWRxpH5uPiwbGbKRQ7JxmwL1psCxMK1xs29m2gvP",
  "key29": "27ZiNR1jewqgbZGdmXR6zn286JPNm1SrkZB1Sd6CAgzZyKhb9XML6pg6KZ5BjVxf8dh9zGns9gMdZBvub831nmzZ",
  "key30": "5dEcQ5qu9TeiuAoTxqyqpiWUTj9r7PhQWXqbLGFqaTjAyP3zR9FUXyTgLbVyNQM3DetFfg8VQG6D42ygDh5ri5Z9",
  "key31": "3U1ajgMRc4c3JPZwssCEy8uhjDyKqx2huK8gffNnDTiTnmmyAwaz7NAwBotgUqXd9yXBV9krxBTPv8mJVDnZ4dMk",
  "key32": "SQFGE7m36725oDQDCKS966YmaE1DBSdKs1e6Ab6jv9QAcep2E4xa9xzNe1ztYW3BRGV2fcGGogg2CLatPGT5sL9",
  "key33": "2y7SZnXdYCwTgcJFEKDxttsr4B4P2nX99KfYXU6A1hEJHLQPx4vt8utUfghHYmpxdg4DyMc7qQV5N49NiKamJAan",
  "key34": "41qato3qDLG7WG7CLvezmatWWYa4JTkezAF9t74NkbMm8rHLEsD5sLQpaxpociHxBewgDyP5Vs1xy6dSGAFGaJ85",
  "key35": "65ydixzkVSXiAyZhFQ6egBMVoemP9xYdgF3jQ5dWmAJAh44zTWuyQupg5vVyDyxX13fDfPfhiM6v8UtiA6ynHFop",
  "key36": "2sKGVSAX5CjmwwebwhY8fJJsyZPQCypwDaNPGsEe5bYrrQetX2hJsRNaPxQjwZkkqX2tdqm85y1q8wUdCxxo6cAK",
  "key37": "5uqct7jW8c6oML5mY73Q49bU7TvvbvXVqL3dXTwiaFkJCot18pFPPEx2PvhSwJLk7WKH6CwAWmRfqv1TGCfBs84y",
  "key38": "3CoW1k2SuiEAMkAVQJbxeb1SL6EKetpWUVTJEa6JG5BX2uCzPnUovgAgmaBYpZSY53FTF7HCLh3TXZbmFtfrLmjJ",
  "key39": "5QU5hAHGQzr14SZb4xXeyNi8Nv6ckDefSJt2MdrF7DquattjaZgbuGdzHG1Wa4EK8DyvWaVPzRf6GZSXxHJKaxeE",
  "key40": "64735Z4cfDWfiaaactApScKk7UoyPsjnuAAkYfFqvq8Ai17JYEzDffagaR3Hjxgk5TkfNj1JMmhSdKqCrtT7pVkM",
  "key41": "5CG7C5CwXs5nydi8co3YJKd9LJB4UGaCNTqbz9wJZoMwZZ7dskuXz3CG8FePpoHvZRtyjYqHmkEKhzSNwEhjuVKj"
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
