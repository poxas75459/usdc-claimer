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
    "7wPGtyJmNSTe8CrYE7rAfvtLTrZXmJwxe3QWAxKUUEufGYF14y6enT2JH5CVpQb3tjUUimiZr4GXwEkUfmhmE5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PcUjfuj1X1jg4nYdB1LkZRSMxof6SmQNSWD42BEog7z1bM3g6r6fGjimbeHYWL3FxFWRXunXb9q1Z3ndY7MZ7zP",
  "key1": "2B7SehANVGiTrfbLWJwKmpVLNhXZJw7PYXCdurT1E5viJHk8dCY2hZDdb4SW9BESR1nD7dFgbnnTMeqpDdwZnTnu",
  "key2": "46nXaof2LaAnwt92t3E5xjZhDguXfxZTe5oa8445ASNYaddcbrGotuaqeL7YaKZBxgXnVzTFNZGCcqcGS7wQAfX1",
  "key3": "5W44U3P13qqANCxdePe7SKSHk7gSipGze1KpQBhvYnzVFAr4qjtvYqgjCqYWBcuh4ft2PD4WWXwpLtxn8MtcJ5Ss",
  "key4": "59yygtR6mSTZGsLWfP5Lhat33rN9vcLH9a4YAbXyRuvptq9Ywj6zEvcktF5bkvogwDTRkPVfESgqKk4yX3ZmMnpk",
  "key5": "3SRA78Xznh7iw54XjspPSzY5i1LY1Rm2A2dfJeYLhjgndXeWSbRTqCUS7vcTawru8wc3dKTzTj527heboVS5kn2A",
  "key6": "4dJ1rWWhPv2RCc72KcyF7FMUZZ4pSPkcNhaCNo6Lb5t8CqYqYDpEas6x55d6kgfUKibnhyvwceKMvk2yydvpVg23",
  "key7": "45Ha43JqSbRjwPKvAHuC5WuW5UGu9iVn9jEn79TG86hYtBDQqRbWvrriViZoZmiaXBSwxjy5c3d5n94rhuBkmJwp",
  "key8": "61Ddsmhh5dsnNEV4VmXsgjGxj5wrJEKZxr5VMgsWQEF5WxbuWRZa4YHqbKWrt7WU5NBYv7saSkHi2dxPjpfNzkTm",
  "key9": "QHwBHG7PqcapXvYnMfz7dD115vsWebtwDYPEptDuuNZBVPiCi8jzKctr3mfJg67WoEWFBpMSL1w97xwJ94X6Qxd",
  "key10": "2wnwCPgR2ntitracHisX1qwTQoD2MbGLeYbnttfx4ExnuPPM5GAXuEH161FeBYbFs6Tm6d9aUXZzNtNzBBWTEELC",
  "key11": "378E82VcugA9cmYENL5iLnxVTQeAyLcnMLMc3RpUxwNStD1gLam9BUXLHxqr78THBJwSNo2fT73Hcvj6FjgogMZx",
  "key12": "ujy7tMaexP1rGFNHtp3ym2Rjxb6xuQUzzWRi38ThfeRPcHHJA3haTvHEXhDuE4W6xHHDj5xw1KRmCozftvgLSqc",
  "key13": "y6rmxffK2oYvB64Zi6N5eNKzrYmuboeYnynGBTGDsHMvZ4mGufwkDm6X2Pg3Up6PbdZKxbNXBYDkmiU3Hkg8BA1",
  "key14": "4RQnZ75rDVPKEhL9hoqZN6WNFUSwkwRNpvWg9U5VgeqG6ZaYh7jXJtqZ3D76Q5CU7twvHpr7h3HYPqhV5s3gPFz5",
  "key15": "5wLdHtsPnoainEubqQboKBMJn1xHVHTFmrmmo46Mp41z31pcXXmemAu4hnZu6tMyE3r51RNMSyh3AJnXP1rNFdsc",
  "key16": "4x6upNY5jSd1NR2iirmDtcTUMhSFJRUReuqSA9rKZ6tgHg2Vp7KRkHJ6n8xCrDEmtJoWFKKEwEPhAgmqzeh9mJzY",
  "key17": "5434ncHdRuQz8tQ31w4nCTCes2CAXZ6fYZWE2ZkhyEZcUQiP9QJaY9sVcNRkrye6uDecHZEpjD7ewoi9VoqGXd7S",
  "key18": "64fc2U3jgwrUzHz7V4DaeYPTpZQkxkiwL6N3Wd6QwSCdoxZ2rAyaxLhVeQzoutgQugX7tXsY6Gw6GXZg68LbCUeG",
  "key19": "4a61aYQLAVfxkLzfkJKEbB48yg1k8G7cfeV7CZN5DCTjCS6BAxsJukx4ejpEJPrSHsf5Q2hRRzjf5eRP1UiC769i",
  "key20": "3L2E8J9hwpBenmLHbpP4RbtkLkfVYpFMqC4q7p6dcTEqDZbpwVLJZ8FVpvmpbJrZURNYBt6CdUYPtXcqimqtWF1w",
  "key21": "2icaFcGc8bf88iBJ79nqs5RbA3MqMLueiToCkHKYp5XG2h1KxGj28x5MyCNZ2HpqRSUfjNpegJCqrVLo33DdBcZ8",
  "key22": "5F82MfZ3qy6UxPDVaWASo9u1aiCg9ATPe98utVbmAEcTtk2tvj3Jc4gWuqxrFgeiUF2gYKJuGaf5Frb8dRxtJxtk",
  "key23": "5KAiscwh8PtGiQhX2LponmpjdrwYWC4UoNYEuVFadjkSsu8nhBmSxUsW9W7p7AxHL4vLbcW4CohBxXGXKrFbSVm1",
  "key24": "37fZfm48ENQ29QmwHAjbEsTfpQcotnPT5QtVKHCwPPjsRXKQwAeU3JXCGgYE2kDzNa7eyaPvkCzrG5Q8QfEgiu4J",
  "key25": "3niqmqi1W1j7krfXrcGTw6bnKAS92zX8gji3qKAdHPUU6M1bg6UUg9zUiPptmUr4YuWZ1NzVWBaMfQjCeyre9bfu",
  "key26": "2hVeeiGeruw8T7Z5Mc2AeSPeRBfn9tmbgZuDCqMw6SYBHtXRSYzs5KZGzpKwDeMQ4CzkqCwp5VDfPxayyVbWpm6Z",
  "key27": "4uTXjunCurdWZDDjZqUzFJTKuhYqMkRqSdhQDMpwux7xmNvnk4F65dQQGz3n9bz5KaHv3YyRCTT2tLUKwfHh9z4o",
  "key28": "62nepC4uswEy7uPFubLxpp1HHjNorbpwU2dX8uxFcULiiGeG4bKD3tNQGS7KHdZaTdWuE45NFKf3umMjJQVot479",
  "key29": "5SxQMZ4zvRrPMBFZDTev8tT5XAsNwTjC92R4hTLJdznHmJYPvkv2GTj3pPZY9CkYETrB7LwyG2SUfJJCC2hvtjnp",
  "key30": "4u7RgmbGcvfEEfPg1G2gp5bc25cRZaF9MUfUzSUvQibX7DLhkCijszfX3sZA3G2wG1jqdFt4iVWVoMxyXjRY3vBx",
  "key31": "41rXmTpKtGafyj8ryvADSnCDsL8Xx8oF6FaQKL6fiZ2yjLexYHUu87W3usR4ynfKNnzc4tvZw7cVqwhPERidQ8ns",
  "key32": "4ZmmAcBgHAoxndxiQpgyjkb5qTpztsrKFKEyRvVoG8Z9k1F1Wf9GUXg2qDcSpa664b2yXaTPPk396jWGaHxCKw6J",
  "key33": "54ZH999wyMmTXosjuLKw32wP3cPzPgZfzUSyX45BVr5bAvVBSSKGtkp4eiqtF3z9cnJQQsGLasiH3jQBwmDNwXnf",
  "key34": "3bmPiJ2EWgzNWmwnz4HYStMMJmQaEJipjnUk3NQ9YBo9M7BuHkEiQyFRHmZHgBwM3iPAhHx6MFzcEYLwTLNh6xs2",
  "key35": "4gVZYzoS9vhvDSVdLrGTtYbhk3HEAdUY6TooKjhaGYMLnfYj5o7nnDEDoPikT4ZqCFmUHBvWAzhD9VedeWzwCx4C",
  "key36": "53BYdD6fE6KnxbP79RTTYFKFtPn1htYGjpvFBJUonzU5ZyVcQNPbS3UJwS1BpPudvcxnPhPkWPdBQpR7MRRK7JcV",
  "key37": "38EPwCdvQj224JJm3aKLW2kRAapCCrwtGcM2g6AK2QE5S2kCP6abai6fjWDafWYg4MkxNawwUT5m5ghEb2XgDJC",
  "key38": "GNqu2Y6pVCtw3Zk45rY9x5KZxMzuGh57EdF4xRCzL72aBBuFNWFNABEUhFw18RsAzSniDK2NtBN7ghZgcddRVFJ",
  "key39": "2f7AVgNcBuWmCRbBtJSu45vWU2X9jRQmtKKdmtEhTcrjewGd44gL6zcwXCsi5bY6k1jLjS7DjAoz9aye8dx79kNP",
  "key40": "2yNoS8xRh3QzsmEJH5CY9uTT4oGvh9Wp7so5vXRvs9AGRyQ2zghzjHcLpSfBp3SGgaAbcFuwbe858bYKgVfVknBi",
  "key41": "3rThr1qjfzMHjLuu4RpcPn5EEf8LmrvSLcvWo4hAkau6QhSvhkQgBKWLQNFs1gHP1MJoAx8AQgLswrh39pS93R8U",
  "key42": "21hTGY1nH4JqSxA3QJkowf3kRTbSJPaYWoHkTg4WdbvEk6Z21mA9ztZqgbKrZdML81wLGKHzHsztUgakT1vSbdAP",
  "key43": "24LXMEvmo21DEXuMSZorffYtFEDknt6PY8iRAoA6bdbwdyF7fjZwNd7j1wQmz816uqB2wkbsu5R8z7AVU2LtytNn",
  "key44": "2vjtt9tsVEd929djnHgw75otCBuoz49ocUJjnU1KuKguRykiR4hU5FMJywzNoE5ekdGFVxruNdPUZmu8UkbSr57v"
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
