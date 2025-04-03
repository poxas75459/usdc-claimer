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
    "5gnQMoCFBBL6ZsY126TmdTrgBnW6Vt34hJCgcpYPpbUfc4T3r3QYN6fVRcgJ6zGhwBrt9mxrGKxuSsqiFJqvJaMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wpromvXeHpiwPAsEVcoKqEReB3yXyXZp5LpVtSTxLq7ynzNpZsBoSEBVGzFgj7FjQUKXWdzpJPiKKVq1d6hcku",
  "key1": "2HzwfiveGboiTu16bWNo4iCRqoz5T8ScdcL9aqKVCsi5LsyvSoE3RQGbThQPJ1tr94Q6DpSm1sQTfQMPXkmvNUFQ",
  "key2": "3Z6aH8J3kkxkyekd62peoApa7K6moUoMgo1LbW5mmW4Pr15RqwkeNgzDL9qHcfoQRy9GFvSQPt8foa6TFwcShjwd",
  "key3": "3NWXDtDhdoyCFBEbECx1wqvQ3Xg6McwqD6tfU63dkCNpfZcsbMZCcueMW8nPdqdnWSHzNitsdTfhVG7XQjwKPKJZ",
  "key4": "37z2WqRTTkchjV4dqXmyW1wDF1v6gTEAxq8et919uNR5JXHQ3EJVApwECBfPJb9PSUwtQz7jBkwShrhHxHh1hNyi",
  "key5": "M9WyVoGZ4YYamJvB6nsHQbirrZUNYCZHhNQgYq2yQpGLN74TXjBv2HoiQUqUMqnJBBqTJUsiNBppgKmKmq59byC",
  "key6": "5ffbfFSHSmQKECECdaV6DCu2LhMnnepZZ5VD8wLCsyZJCPR58BrfZKFotuyyNocJ9DuAiRbwAZLtFyroi7aMoSoS",
  "key7": "2hGtHigrkzQteEK1jv4G6Qqj5NWXCtjUHmfmaisF9FFaekA3ss5p4rrHEmWF39VTR27bVegFSvxcJ5DjosrmJfEi",
  "key8": "62excB4eptr2kPNHDNbxcibW7cJyawaHTEkSzinp8rQTXgM6YSgkGk7psoAyXpF6kHguBgGtkQRSv4nBAx2LdPqX",
  "key9": "43thHni7FVnSDbMVDQvGxWxL3MFTrX6rRfFJ1XW18HLnd7eEubgRrRhkCp7k48ZKpFnoay2gWFYrbumvpge1fRxm",
  "key10": "3eRho9x2tzkMEKgSRwTx8g7euRBVpwJV7KqhFgd1F5YG1AzhCZyto8jNkF8sPDCdTE5f4Yxjmp2rthoexUjH4YKY",
  "key11": "5fTjESumu8WhxSdnC6xzDREbSKUs3xHQ2wXqEZtGxzczd4kDcH5TASFFhrvGEdmZ6uoC1fCjuEuQeBsaU6w7gXZU",
  "key12": "46RXRj5mEJRya7xJXhU4Xq8xhZnL4XZnxb7DiZz3s7AwMX2iGUAvFSkgZDrDksLCiZcY4nsxc6i24zDDMxTgoAvy",
  "key13": "38QHZUxKaTkiSjSgoedJse8Rx1YKQwYPSSsDsA3sFT3mNTkCcBf68Ux4ip7NCA77Q4NkawbRzQp4zQFxtnU5beke",
  "key14": "GXT9Kor19wStmkyTgx2iAqCnhWR82uV4JhP35CedG2zssuDh1db72Sg4zc7wC4zVxzCZNxd8tTB3v5cyHUBAPi8",
  "key15": "5oFUHZznakQ2xq5XzQjY5KvYQez3wMxLWxZLPDnb9iWsJ12YzEr9JspJaNqjCFBfqHU7oE8JyCFmBP8rLsMQ3HfL",
  "key16": "5uEkJckHvWNkbysciAjc3ts773iXoXm5yUbWh2DdkkYNXFL4NTCoDmpTS781uihpd5tS51HYRha3JnRXVR5YdW52",
  "key17": "3D335J23SX37YhGBkZUjZqEE1EP4fCxjVHyu97v2gthCMqmzDh7iAv2epBhbhpw7hkxvaM5T2LLcWLd3cqRbTfpb",
  "key18": "32WiAbkL9oa8W7Yvk8CbucDcDC3PA3EvYAvj98eGivtZAZ1mSLZ6exJPUuhFNNgqut7QdfMBmyDfSHuKYgxUp5bq",
  "key19": "3572Sf7R7L9EBtTi878spWg7PcrtHFigvQR2MZKABFW2j7m85Qp6MB56dhd1qoD8BU2uJMsfKhDG6W1CqwK7MCR2",
  "key20": "2AAmiMtdC61GqRCkiu1wwCzYNuMa9aMwfbtyYbhwwvq76qjGdiP2acbvCv99NmhCEyaDNXLMGxuezivRCfJi6v9x",
  "key21": "4GTNmUygZZ6WtjX78iVZEgLkBtEm2Higb9BNAJAtSPuYuvJgsxSVzhDVvrB8dCftGvbE55GWXuDjEoBLF6Q2YbFg",
  "key22": "QULP2qVD4zMZwqbPixZTEVEUEqD6FFrV429pu3uVAW4QDzYBCd2jhNCuaLjuSVagUzAcTsqHMCsbZWkkV3BjCnw",
  "key23": "5Xgqi52FgVnXt8QEaYqhvirpf7gurAWbq29xNvPa4TaD5mcvREhaXk6fJGzJvqt9DJGFNW32zXmDXP6gTcL9EbYi",
  "key24": "4U1gtbXCTzUsVt5NZr6Js39aYRv75NZ8EW9FSUsSatL3fAH7BdPzLTCzWFnKHeDWoW8SjkpcNHJaiVMoUErcQS59",
  "key25": "vq3HNcLVYbhAieF5eQ81jy2d3717vPWv3t98piQE2mt9vazhFZJkmPyhxuZHNBtKRnyQQV1Bd9rf2R5t87ZYEbZ",
  "key26": "4CF3jhUQ7acbEMF3frQYCG9jgMxYN36cCaZSdwNmbbEgUDQszfCPBBSuf6abNNckohAMB4rnFFSXpYyEdtgdYcnt",
  "key27": "2EMei2rRcbPvbNyXu4MckuC9Qax869gNeD9vmJbrw6jnZrn8MbGhupdZQSTQSHN9jbbQ4uXh6fVgsnCza9KGx3Pr",
  "key28": "3gB89qrGYLMvhZC1STNbz7KWMh5wma1y6ruq5qzhNpt7ngGHH3NA2mg4CE9y8z2ehuMWZjbgUF6dR9NPvifPS9oP",
  "key29": "YEpfGUctGPCPhcyBzGnmTBP85puqRppaWjvZwcLPRer2kMABR5dL9gZJDpUCfhWmxFvtZrVdwnGeqJY6QXxkKpR",
  "key30": "2Tw3viqksTQbFvcvXTQAapmU2qX9unYbRcuy9BjhuJQgj1GfBCPmQ5PYoJ2eHt93ZxxBRnHtfwtNaD94dqRq5Gao",
  "key31": "2d1EyLQHBDnD9vJQDpJ88kq9Dc6atbKUMfNGpv2bDcTX7oqF55rECWHo8JHzD8A7hmnauP5z5oGmdirXZYWBPUKF",
  "key32": "4pX6nghFDXNtMPXqPWxk7v6MCjyA2LQV8KNVcjKws1eS5hVMKYHZCG6KMJjmWQ6TUWUYt1NGnZdA6ZSwEewpcnFS",
  "key33": "uHtkUMxejmgbxWriEJHBdY5FQRgBnpjtZwpCLDChTD7HuBfEZzQrCk5qmAjhjRZ8x1378Kpc5C1kUDWwHZREdyb",
  "key34": "4NGvAQDzsDKFu1tauj6T1h4epjLvgxg4DL1M2BsZt27HFYKZcs4tegUEMXAdrruD5uVvjK84oFETkGqSN4rwRvq",
  "key35": "KNzyT1sxUmYqGK4DM8424xTCJfBPqBTebuWyfq7N5U4v9dV4G5doBxKzuB78Wd2pCkJ4a1YsQ3rfYUpHg4fHUZf",
  "key36": "3VKPuN3XaipJVKqZ5fmt1PBVt1R2MYVx4LZ5FEaTqN3noGAuEKG8yuPHeGv9weQTQiPeBu98tAaNzvumQ3bUQoke"
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
