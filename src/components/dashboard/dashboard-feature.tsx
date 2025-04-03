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
    "4MgtL5H7kr8fWJgetqn3tPmAN4dnUJq8c46ddMexhpMd5mmbq7f8vE791aP6JTN6MVRTaPTRX1ptbW5Ri9pPWhU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psTrHNcPmuGvLVzW5bqbmgyGmrB313GrgArTETn9yXfJJq8BRadXCKhND1mJTuW8zzoKnNR1WSiREVpbYKuVBBx",
  "key1": "3cngbfmLXBGuof4KFtQrDU6JdJRHUEcpyQdcNp9e4sK4m8JMnPXKR2MjcEqZoJp9deTFQsj69Ty2r8rHkEBLsAyc",
  "key2": "4mdNpnbpej9DYqy9U2qMgNnHjpT8xrnDeVrUgq7BFdaMyhvMiXfgdaCbGQBU3oBEGixw6QFr4ar3tXAxRzCA9JL2",
  "key3": "711GWN2vpoJkXntBmumpoikDvfhMErFZomf28brKStE6ts4pUKyUGivnokdtDk7u1UbGtYcekVHzju7aPWV96m8",
  "key4": "gy8paaiVGQ2jPt6KAm5dLpbLfZZxhAVc6tpVGKv9D4gBJnhWyiLjqkQMqgL4oo5YjiPk52ZHWMFJTLR694RR46R",
  "key5": "4tSe5cHBShduDbXovweobLaJJMyatfTDrCPSWWrqgYG8DR21sxmpsadEdMU6Ldujd4wrcSkdLs3kd8Rdi8bdhPiV",
  "key6": "31Boyxyo8NgWj4fy3u1mCS21BKRKR5EqaTsZNiESXeLvjBt5wjaHEis72PbBe9Tp55yw5wivP7LXmFTuakt51hoG",
  "key7": "5cs3gUN7qKcPxi9XTvKHJZQ9RAVW8oBDhtXbFyny9FCA7NnzsqAN9sMDmUQkJFUwH6bYDq4DLx7EUJ9AvLqLAc97",
  "key8": "2HcEMZLFVPnCM4t75wZjhWx2QRVx2tfMHY7LxyEgvfEBkgKBF8FuoBTHdSd7CMgyGVvpGWHLPBzwtr4NZjnSeZpw",
  "key9": "28PX9weNmTvmhWWyG6Dz23noPK2qC93ac5niudKxbwErkocBuXCv2ztNSP9fWq8NSjMEW7EXWq8QvVY4GrtKj8Qy",
  "key10": "3LYbdHNdPGayDxTYThpVcqLe3Gmsrsytv3xVSXFPDToNR1Rik8Z2HfgLnVXrQR1gmyQc6nJQ7bEtge9MmrwwWuMw",
  "key11": "3peUhZRKYsTVaUgnGLPdkmdbwndd38ZsBzZZbTPqxLxECg5JjKGE5Mri9EnqHFixCx23crDgBc7Ea9UqJycuyeHp",
  "key12": "5cYjKDGUW5EoarMGqudq8CuarKXBb941ceCn2J7n9LSZfHwoYw2henWGGGqCm63BSb8q3oJyw6i2W3Dp81hXJDtf",
  "key13": "4AE81ALiGZGSoTCRtxF3BxKJqcPSiNgV193wJGrbBsgjzZVzZkEtSXETL49GSjDXSRCvu5xwvG3CRQbYrnE6QYBj",
  "key14": "2CKqR3e3Bv4G2DKHBqVKqDoxqf79pMN8kwXpEHNT67hVTigYKbRuijT2wSBJLzUbCKBxSgxX4QYmGvnJAJc8Ybcr",
  "key15": "2x1bF7NaYbpaK1AF73mT59yD7aaRDaj9x7cYrLbUQqK3ppeRuAtr5aUgbfyLdpezXGi7qhFHqtMzuJdqRbtdhaRA",
  "key16": "4qKFZawdP3bjrc3at6D3odCKaRdS6ugbJpP9mexwU3bMUPj4eshRLmWW1p16kYrET9PMRv6jRwbG2FuHB1A33ENS",
  "key17": "57Nu8Y5ztPJ2Qa1y3Pp59KFMc9EgEMmfbJPCTbCETLs868kwZ3nRBPRc9qAQGRVqFJQUBY79tVB1kRRTv3nzQgVQ",
  "key18": "4qMyU1SbxMKRTJ9Pw5cfWCTeFtAJeW71hYJVqVqWUJco2P3Qp7VEuLU4WCRRXvt1hSZ1hzvTwgJS5q7HhjAq2Mnv",
  "key19": "5eTxTkvL5wEd158WWXj7saNmGt48XAb6oLFZU5LQQeRY2kNtWyqya3gnnk5VxQdeq53cRJbqgDKnimrHPcZke6mW",
  "key20": "5QcUz5NLh1v5Evr7QhiPumQi4nh5TQG1ttKYZLRj1bhgJfLURt5NM4k6QJGKyeXg8AMj248XxZmUB56Ws8vMsq8Q",
  "key21": "31CbGaVNBcgGNmhsicQAzUFQjTW41rHb1hzeWZH7ZJ7Fhsc9wXiYTkDK2q3FK6hzJKYme12vRbWi273GwKNEzCM7",
  "key22": "4eT5mUNVNgJTqKYt7JMWqMKzGPNBKfr7jf7Qz6rtjEi3f7A6Wht1qYTCSwrsXA4G2YWzwYxtqXreNGkKnDfJu4Vx",
  "key23": "2Eq6fgAe4WkPxxHm3AAwERk6YQfSBvmYK7LEuHPzSi3CmpL9vkY1TQTupgzyHJL6MDDgQsgoin45fRuebjTuhzVK",
  "key24": "BxkjyxH9NgEVgnoJsV1QEtCHcqxkErbUvZHiq3xr3W4B3Fg4RnRwBCAkVejVUJTYywNJ5Bh6UTBviEQbe3T1k4t",
  "key25": "5R9T8fJydtrL56e14nPC3s9f44beosUb81TyXVZpfWAn5Bxj7q8ULVVbv8D4bKit1C2VGwy1wLwVmTpwtpiYgjsf",
  "key26": "5onPAPDyLRyvEsyrgNcWtFGMG7jHLpRp2yarLmDmjyYg5ryzuvDbbpDuPXZheAuQoYQavFmzaXKSqndBvyu85cwR",
  "key27": "4BWZK1Jr2C9iz9ZngoE21DNYUZrDmFx7U5JVxmPDQVjeJKzjfE93FQr849RFvKbX2HepMypDcmiRaT1dV9dsEimD",
  "key28": "KF4Ka4DY35aU1GVq5FUZd8X9Ek1JoN3e8yKk2vS5i9TFnPxFq7SNreLstpmscMwhPTzvAgY9gswAP9HJppo8bGU",
  "key29": "ZhB5tXW8XoRPBvDn6yGEhpaX5gFNKchoNdxoQ1EXzCPZjCjt4as4CKbKrQADdmHSFr3nmksjHPUu2A6dKAmMcoo",
  "key30": "2tPhdMHymo2hQz5b7rF3jr1ZXRh9Pqx7qEjDbMUHHPCgCyXRYPMJkbHQGDie8oABCy53EbPhYSn17ezcJktKZV19",
  "key31": "2Xu17p9uNG1tWzXJYv5zaGvPs4xhKM1jSeyCDMN8RCQjukNK6z1fdyknxf3dkDqDj9MxDjHUzpCG9X3NbqwW7HsZ"
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
