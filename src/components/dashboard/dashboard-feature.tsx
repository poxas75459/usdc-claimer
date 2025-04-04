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
    "3rLEgL7gVCpfK7LfeLpFFF2NEMQvHf6mxD2goMmBct6fsxeMtAyeA6R83RMiBj7ypDyBxdHqpsjcAnCHZcBiaPZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZJroLBqGiwcznZxd94ipUvEBxesxN6jRH4SwDgxVFtVMBhPT1FossiHzEoUk51BHFWXSNSBH2aGcRf6RkiHCbz",
  "key1": "5kHoYx2AtVJg8ZjT8YjDasZ8DuHrKPfa4AZFbVGbEqhdew7EwVTUhpdZWtxkyTXDc7ZPDFwgC9NS8GYQtDiPXjyB",
  "key2": "5Zmg1Wd3s7MrM33CP676ouDV22sizxqrzz6s7x38wWFe2UdgtQTPUjQfGrsxAjVqhiqRBtCCJV1JYtZmJKszHwMp",
  "key3": "3jG87ZJ2Qq6qs2AXZuQHpkRG1CtZpYzAjnjp3gHvXQube5bf8UBrKSrh2EcX5vaLzdvNd8baApJV5E2iZTGNk6hq",
  "key4": "5Pqm3jqDVWkoEwBSzFBX2MsxvQJWFVqay5GZupQ6zGo36pigGcTfCYb4qs8N66P7K1Cn2js9ZdEzTFaBHjZi9HeJ",
  "key5": "2e2EdxX5maqb3RJ9SKF45dd2QES4TRg4wJf4dFxT7Pt4VnYFgS1hPKdknrFVffHqLTxQCK4z9sKrkwmCBgPfk6b8",
  "key6": "4ms1UJyYKnor9fqbFVAMsmkDveDqLy5gUHi73yFCCjV2Q56Qg4GhJ2k52ZqYgMPqKYaKTySmabULuUBNLEgGBQw2",
  "key7": "4WrStwLB7tK1mZ3N1BYRWpLSKCjegMEfnNWWVA4dN6ACR2zNR4n4JtcQkZeeVoooNY6w22tL6AQhMrmXUSjJdXRk",
  "key8": "43i2v4YAiDngzWpTb5EvMxiKmzyUn8Y8ATXBMsdLgo67AeHiwg16PvRvJxCd4jfKACW991CGwTaUnvRw3rmTv85m",
  "key9": "Kqi7k5fKQMcE15847R4g969gzcdGH82oJr8xydkpLXhho8GdH5gudqKRnt8Q7bxNzbjTkMVWFhYv5gUBugGisBa",
  "key10": "3t3axp45WWdTEKXNCyeT4ocMo1rCHyCvcjDWkYYezTMP7RZxh9k7uhK5bfHAN96Tfkjz9biZpAP8xYzTnCk4mqBj",
  "key11": "3eEH3cHWUuKHTQJPkAtstgMCPbKyd9nYxNPSWSogmupcvZ1LYo65JMDty8iwYiA8Zoy5ShXJRxJ3bz47LwEMKyg2",
  "key12": "32oLAKDJ7Qr1ebAeRod9Wvh1TVBBYmsQ9uCUrkfhFnjpEf1YrKzaA9VBV4bVCRVjExwtHQfKHv7SVzcZmvyXYgBp",
  "key13": "4Zj9B7kzU4vC77YJ6jG2oxNYum3oQzZsxZ4zQB8B1HcaF4B8TErg9ktMRuFgCuhj4kMALVX1QYJNZG42PuJN537A",
  "key14": "eGweRudsstScSZeLWnqxuwAHN6dr2BNnXV7Fry6uuwXdG5CXNUzxqtduPRNLqgpo7rpKNPZNfsEhz9u4bvMBm8g",
  "key15": "5Zfe1ErkmqYJ5g5441yox75kw9ykYAbVC82bWfxvx3JB8LDvbZDFSGPXa5Tee6PoukZe51ybXrRbER7Gk74MDxsB",
  "key16": "39HCDp2qNWKWGwzjHoeDikpMg7MmNGG99acu6aL99XZKRaXcZWu2W9iUgAErhBDtmwt4ygvt6Va7d8NvKRetj49U",
  "key17": "4EaNehakmmCJgCks6pobMe51w6ueKrX9tn6zgjuzoUXLi4GLFtigR1iEusRZnD6CDJThJwbabG3YLURaMxnkigQh",
  "key18": "ZBzECAz3GeuaZSBJP9w2jRxjRirCSNpCDczAi2eFBYtBLkoPAjuvt6rTDEjeVZcimhiH7gQ3kWdV7suonjxCPJ2",
  "key19": "3Ku7Q4K1itZWwQsRfsPr4NzqPpZgrE8YK6oHkd5gt5kS9uaJrnX45B4J4Wac6s3GnabjAm5LwSKa4Tm1yw1Vw8df",
  "key20": "4d3ngCbbUnid9DTwJyVcACuWTT94snRbE6GH721UFZWm5XsmDJYYMZgGnmsAaQSepdhHzBVbM5Cg5jJ8mqVbtLQ5",
  "key21": "Vwn3jLy9vLGV7zDG2Tx9LMsf3bnXhKUiTuhU8GMeDYJKqMPnQwNndDcWsku3NbXnHsS4RaLUyo2E6goFj9hCS7P",
  "key22": "4JWFgixHEMsgDXL46oqdaXR44bmV8PnNWR7ACe5TpVBFyGNwvJqdjUXop71QWo5Bg2p4KhqawHfmNMCR28YUSWqK",
  "key23": "5H7aWx6TxLvMVb4ug2yb4WDMeHHhjFKM9hx8WoRUxVrQ5WkMX3dAgYt8SLYvk9t9mBED1BKzLia5XjTMciz36wyt",
  "key24": "pF37bKphgHEEEEazYLSjXMiYTB6eiA1HFcTSLEpDSH4UqMGkT8XLrmEta5Jqtrf1yNYmCxAWBqXvTL8TW1BGZgt",
  "key25": "2yohUcFoj3XBcXkXAzQCig8iPF9aSKVsspjTvM3dBZf5akkP6ypkZyrdpZCYWq1U9y6ZudNi7SHAVGrMQY5ZipHe",
  "key26": "4yBK5wpwoyawy2XxkHDFDU7aiyDZfEKRaWMty1ccZsYMVGcpwdS72nj2PwR9WLuRFYCuZNnxzyde68E5iTwjAzcA",
  "key27": "35Xpsr8PCQ29ofBKz5QhAve9Rbw3rPQkGzGoKK7dH1QsiLxJCCk5RX9JdzFTz3eGaer7Y5JmhHrjvnw81LD7BMbw",
  "key28": "6178i38dxqhjzJEeUCjQKgWjcnU7Tp77F2JfAth4Gp9ZXtYiCEaC4BJzCL9WW9K5BzDWKYcaAV99brBsAHc2Y2Ue",
  "key29": "421YNUYWxb9b1kNMKq319nVKsiSrYTEMB7tSEYy4h9pcmznVBdp4aNJQXQrCcDQKpkgVz2ejY7Bzkbys59Z8s62S",
  "key30": "5CdnZpS7izQ4zqxDLeZGFvCqLRTFNDkSZfsgHy8CQprGQEp93nrVhLWfcifMAfVs76kTdXjnbSnWiAQTsMfs1jfx",
  "key31": "5Wy1LPE9Vyp9MEkqjU5r2BRu85iU9TrecbNjdUEK2ZPsJ4Q6SNqWcNaGh7NVhXmW4rbVYBVgFEW5FbjwdQD5a2tY",
  "key32": "2GVz4DquPb1WEbwqypB9TGputD7YNasLovpMxi9VUohGMEzw8iP28RCKmmZ74Zvr8ru3wPemHPefrW5fxyAAgnpC",
  "key33": "37VRbtcTUAz2o82TkckZ9Jnf48U7rR2U7V3hbFg8mX5nW5GRdJddUo9VdwE9HxPRc4H8erLoZ84Pp4MvF86WBcxs",
  "key34": "2fhPF3DtzDFLGk9grLMG2M7eSueJxivrm8qYPat3JCLPcsUV3hLesP4aNhXGJLhyfbxmDNQw7NA6a845iLEqL9NV",
  "key35": "2TCFKdkeVmQ3EJK5pT3q22CJ6MdBJo9gzreeeuZsCyhoFwArQN3hoKE3CDMM5BnYSywQshZWh9BWEZi62TQntv77",
  "key36": "3jxQ5Mvg6bPBBsfi5n9v8fZyYXSxVoviKxQvHUzNhUEewEwvbRMUptUWy6x3akFhduG2HSvhrMec6YMa9ZdFxKuG",
  "key37": "5vwFh8GpR3dpGKf6GRZJ23pKKW87b6ZYPuBQMA1vkF6T3eSY5yirty8F2bqzpGpPmggt9gPTafjMNAiTsGZxiRXE"
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
