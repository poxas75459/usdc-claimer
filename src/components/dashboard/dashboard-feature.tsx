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
    "2rt1mucifS8ep5kNfidjxDFiwEMjkg6iLBP9byJezHDLnzZfp23Rxg14RToQHn31aJ96aAw7iUL8MAU27diLqqfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EijhPzLF6qibiSwzDnskxhi16B8o81kLpPHCYnhAKS7418dtqnsQadHJUsJeiPd297entX3ErrJWXMwDm9neHe6",
  "key1": "3Eg7ciCtddo8D3wjSJ3zPkYFAmFvEUwKwwk3fL1f19452EBG5XEriR5v5NZwLYRa36pbv46NZJpLqkCXshAN25mF",
  "key2": "2rZtHz1DRoeREggGpu5jU6LfkbxnN38RFAuosnLz7v4UdnRnCkpURwunxnev9d8wA8bVypGFsDHeGoqxkJhJFLY4",
  "key3": "36qZzSmQ5gxMtgCdGojoxgYfMRj7MeETMv1QUjyNeexBTSmFL8nqaBUknKjtVyzrs1oXYm1jHxUpkxxRnB2oJWxy",
  "key4": "1oy5pMajWWAdxsZHPgvfKsQt8yk9fCi1D9BAfeehMp9n7Y4tLddjYjtawEj6MYhGytToPZ5dbYajaySHVo3MFBu",
  "key5": "2BtzQF3tLQvUdJZsq4sb399vzQwjqGtHs8o4wZPzmJv1hMesYVdpi85d9d91WwqnuXhiC8if4xvPCqsKyKCrxt6v",
  "key6": "LJabQgH5fT5QLrLWWUWYP1XyHwvL9SKwg6dzN3xQxFjb9ZRoXdMJAMoHrpzCq1htLKkTWEgnh9qTj66tdwGxP8v",
  "key7": "43hM8FmgpkPFWNqfgF16DfGTeWcYjwbqWWGCmVWDbokebKMpkLFKwkc4HS1qf8oredmSe1G5AUuvfyixJM8nR6uD",
  "key8": "q4Ae1qKsiqCiSr5FiQvMawbfvC1XC3rGcoAvbttTT9ZoLxAg6v5yiaQfaacQaMFWvcVccXsQsjoyATATeM9utxW",
  "key9": "3poktqPq4mcNiMBiTTNAtUeytruDuAFeUwi1kXqUvKAduNXrfpMaaBUgccSaQCAYNhf9eYquD1TkdpdxRJZo6Ksf",
  "key10": "3ko5mA88t9Yx6KroCSnDhjL88eVVL4vzeBfLQ5UtyadNtz9doXJBdbD2kEkuQZhPE6agkkqiHbQrquTunyqNrBGW",
  "key11": "3sHHtu8eMxX5SCQHpNEyRF18sQQ8cA5SbJyaRpDTV3Ej3JcxBzg5ZYkUBPXsS4zhQrDTKEsd86c4gErgCrJtFWwy",
  "key12": "2ieYbHV4MD6gKt4CfP93WLQEfxPMUH5Sa4VNuhEEpefQMe1ubBoBeyFaHPvcrxa3fRi58gCCKcyHcv6wDoYm3t7r",
  "key13": "2fxM8gdNNrRNTf7NvvLjP17NeKEzRk5o96GS68jtMJShkSTE6wHS2fcu6PBMh2uuJRyj5vqsvvbrhBAAiwkhBREm",
  "key14": "WQetmNapjbp3Czjo9TrCcVe6oVQWHBqBc4fbh5gvqziVt1VkxUsTdU2dShVLGLXx5wTR9ckkf4CCcdYwmjTBZyc",
  "key15": "3tGm5SxwoNgq1ZzxJEWpBP9rxLXjKmdcn5ZALJ98H9Tz4UH5sMBgmywsTJo7Lmq4Yk6aDNYsmyX4Ljmvu46XEmdU",
  "key16": "2RSQY72xhkA1KN79Qs4dLKh1AmbKLg2M1CnxyatjSyfma4pxdyr8Tx3J237GTHqBq4xB5otyp9jLcTuTun1DdvKo",
  "key17": "5huJMfeVVt2FX6HeVBzTmUPFFnJ6dNEGhbUUghjS6L3SkeK8tTx7i3kTpTkTHmRnm9SC5pQc59RdHrAjmT9sctCP",
  "key18": "4FimWfGiMQwvPy9w9TcQhA4npuhsYuoq4tPdFHR8U4Tw1PY8CoASDTk27NZ71ih6YpFC1Lkg1rWLH5KK2PuvW8a5",
  "key19": "2iRN9Tz4HsouCkJsw4xK59JP62cDGfHCQWzuZtTW4EQv8VLoHkWZFKcG2H8HvGLxb2WAsYDkJiYGk9G6cgvvdEkb",
  "key20": "VcdMqmVKPqMM8woprbUUaU6mfnVxQRskihbXh6HcWv945NFG5ddCYTXzXfpqjwyZM9kgTMmWyjvfvjSMz6VmvAs",
  "key21": "5GBnm93HJ8asK3qgKqraTqHv5k5TfA44zbkHsQvonKYntCNsNG3XH9YfqaZrHMvXLKrtKPKrQne1QEVNSA68HQiP",
  "key22": "3SadjLxkq7stry92iqrvwV32wucBBfFNHRAhuSv7sUpzj9Hby4TwTxdNDvXZ3uN1mQXgXnNjq6GWQUDZ79fuXtfo",
  "key23": "4BQH7TJWCWbWpL3pMs3jgaqcRPyUaYDyYDXyFjB3anUjSwrgt7cUFnHZUPA9C5AMwXpVkMk98qzFyr3jeivfnkPj",
  "key24": "4SAhHSdAS5JxK3GJYECtmrT2JjBnKAV7J9XCYuDTfQCoFrZu9o2h2nAt1E7eVCVF2xhcr3jhm4x58EJAYu41NLKz",
  "key25": "54nwYY6asgnb6xbGByjP6nMGDHm9rLdBBXdBGbi2weXGGAA7FWp3uG16P6ehTrVQVD1zKCCGfWR5ZpB89V7NZEAQ",
  "key26": "idfd6rEwu3fsFWJ2zwxep2J6KHwmaFHdZm6TDAmdjcHNZELFU9CGAMnqPynjJkU7nV7QNGbpHMBMrjG9ouS6jxU",
  "key27": "3FQ7gvcUCPwFKNvm1oJmz9tNj42DeVmWFA6f1cjod6PGew94PLeCJyz3HzbSwjBbxmtfpdnwuf3gd1MYAmJVyyeK",
  "key28": "5Fmjfe9SFDPjwWJS4BRGiipkXbaT1VuBAW1af6bdh61k738jcd5Ko2zuvNEa7RyTLJjJHtSQkCUHvaEmFGRis28k",
  "key29": "642HcgUX6LNSFhSMqA4zThBGxUTHV3qfefPxaGEKaSaT2Kjbdf4DX5QEJ89VGRGtG7VqMXT81dywnczX1xpyLnn5",
  "key30": "3shSE94VyNXdX3W3Y8kdNEj8RHVK3s9M5bMzhAY5cX5SsqU4qcZV7j5HYqK4aRDCMeC2Nz3PEqQcCUF5JSTpUhHo",
  "key31": "5YbnuQhozXzynGpQAP8pPbujhqCoZN9nVgQbdChR5Sb9eMf7pAzp5oB8Cmuo3Lhwrmsun1BiCKMKiddvJytdDBnW",
  "key32": "TTQYby3R8SzDTFpvQUvg67gt3RjTuUyhBk6eocyfNBUo3rNhdQzbMR1Yp3vD7u63yPkHVynGYjrtT8wVHRN7ZtU",
  "key33": "66eMuUj38TzKFvnwTKbHKBTZc3ReoZiuip3Bmj7exw1L1axj84UCnFh7WkBfV8JVmSfoNpwQCmgQq26GbQ1Yun5k",
  "key34": "3s5MtdsWwLaW6gEWWgJXaU8QerpVD42oktg7xp3T1RLV4pdbHtcLw1LCSYPdKwRMQCSTjpnd5uFmFzyXuskY124G",
  "key35": "3Q4Aun39EiueM1JBZ6v1HD5psmVnPJPU66nBQdZrqkNABXcz4nsvuhcsTGhdNwH79eTDGnJFEemLPgk8dvZWwmG9",
  "key36": "3XCz6tQbSZ1AoDs6VChDgv8EyvpU31m1w3Mrkwo8isZ8ip8ZtMKXFobMhdbphHLvW5su1ngitt8U5oi9GuC6PNPt",
  "key37": "5g7ZmPyADSNfY9n1sLbvEhFvgxsgqGzxkkPFRNK7D6KJen86q8TpySD8XFHhwCe6ojJX7mNba3vhgvZT7m75Q9Gh"
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
