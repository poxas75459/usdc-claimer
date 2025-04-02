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
    "2ALeWDS86EYFgevMkoWYEuVNAJRiYAzURpAWpAk3xDxrCz79uEJY33tFMesg22ge1iwbwdhfvPz5ww7fpB6rJUu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BeJAGSxdooJbM2g82ABhRwM8JoTt4h4dBeDAdzjbvenR4CgirjPkoAr7M8aToeXzA2WpPL4CvXaKnq3bQtEhc7L",
  "key1": "C7eaJMHXAv9qMN6j6FQHVAxUcgpufzmJXNC9NNXsg8dLB1P8eCY1H3M7wFCvQczyW4XJK5d4PxLUGse3yRUYsmS",
  "key2": "5qEq41PiRrivZwEQiWvEGs1Vm4hfX3gVMRja9d5MEpw1FLygZm89Q4biGfGJLxpaVcmup3FSjtDssg58bEqW5D3M",
  "key3": "31XRjwxdKn3gW3U1UdHSm3s6bSpHt6gELe6AcUGsC33K9qc3WBeNA4Nwz7EtEAZdUVLUiBBCRWKzxSdAzLV1hLZD",
  "key4": "VZFxwc5cPQZ4U8taVkegVQhhUW8kcoMpKGc5xqssJGJ4Fj6zTUjfNLvMxTFJTCzi1LTdvtc67vGcZxrarHVeaQY",
  "key5": "5kFRhQSHpEa9JcskVEpXLx8jvLUKhpYp6jRopuCwLcqEuWV1WSyCRzjC8FyZwmDBZ1YLqGP9KzLhTVBXWZJSLqwa",
  "key6": "3mK6TFDugHUqgZCvLcFdzT2yxYU2zvfjeE28XeBdHd5CzpUxYZ5WuTS1Tyyvm7MFeGR6hrfoA6ch6X48j2zZMJM1",
  "key7": "5AagxUL5Rb1mr6Q1mVDrjSyz2eCuJmCA51C3qZs89RZcPyN14qHgkMY5sKYwwUk1Gi1ijbtxmW61NabCLh9o1fPQ",
  "key8": "4ZcH4ox9zCX3uY5WWWDqX32hEiRkJgVKArnYK7KnqnYUjMTg9sBwqkTeTkWAGG7CKSwwkeZL9GpdkKrxXz2hFssS",
  "key9": "4SGoBT8FStkDhzQGons1bSb4HMLq8CN2KpGzsWGCJV61ikpxWdaz7qE3PFCZZ8apRtc73JRv9fwHZ9hNbNoXVxMn",
  "key10": "3Q1PdQYkmYAyP4B9MUoQD4icoHpNzmqa9TAwGWLLfq19cvkvDbGyZ4TqZfRqXceDRm71ELYrWmsZgLFaggVq5Lfz",
  "key11": "YPofoVAkQXp4aWo495Zfc1c4baY6e7am7gMVH4RVtuGiFtSErbQSjJc1AM9zhBXzCQeERRAZ51u5yva449Zk9P4",
  "key12": "2eB7fhKtZBJmzYuJxrow7DjSQUXn1wkddRdLQxDKxkvLnYSZmGyBfNLzEthiud96n3pyZEEB5zFVTaxARuLSZ65Y",
  "key13": "QKtVf1yf6cn6V6nhRByiLa8kTQT99L5SkPQuARCnvFVT2Kn29FNsUSr6fLHnLGEzMR7NBDrswKmB2dXDTSyL6vL",
  "key14": "DXR6e46qpfw6oDAuhYMtrA6xoBnEqAkiHf72Ao5i1CL7TG1aRA2jpP4y5EBxukYHchYdQMtkTJ64RuTmEp4N2pA",
  "key15": "2rnwBbqVRjVH5KhMCiYLfMEDMKBQFJqBoaSJY9Tsn7v78nJ8sHBLsS1kJSgpPJhetgLJDxwLjTs75Cd7XoXLvNpk",
  "key16": "3evQpRXhhJF44iG3FoeUFHTZUYum8f2e9PRqZ5ZZAS14WAJGk2EJK5trVtf2LZDXBPhDsvV9PTDQpExs62Fm2U1Z",
  "key17": "uoGiZK4Y7VC5GfvjLXQNafth1uSNCqiE9HbhHU4DncropH64GNWy3h8ZvKVk6rkrTBd7m8xD3uQu2CbZhue37sA",
  "key18": "2LZNu3jqBW1U4D17DVeeZzwAMZitvkUTzXDBVwttb2pqZr98fNBuuagT3azEQNFz5hLVCe4AHMBVcY9u3MK9RRWT",
  "key19": "3LMN5jzoCAw9tk7zqaxRCEU68kGTyzyepX9ee26jLvWeiBndRYoUm42dbyj5V8chse6t6Gj7FfAtJrdL9ma8cXrQ",
  "key20": "3iFWvPWm5tvegt1GMx1Kc9ABsmusYgTD6GpsuJrsaMcFNyQ77ke9icEB5frwNM8qyhM9mh3irUqvU4hB7dwbviaq",
  "key21": "5XxHTfNfSzByusQQifmExHotz5TxQqt6THFE8vb3BGpJA7grx7vUWmZTLiQGmskiKnLAyVWcJupjjJdnVLWnmE8q",
  "key22": "mCZzMYjp7rR2Ebe3RsSXGPSXmaZHgYKqNBydoMc9t73dZZHwMngFyf5AMpNkAVy7HCDbTZfGkhAbmpBqhg6jzQV",
  "key23": "5Bu7Kc9JzpUKJhBX3BEzdMsKd8f18bnagWPkrJSwVQ7sgg2pro3E1f7J4ngDSG4QjXARXGUva5CLfo42685EoyjZ",
  "key24": "4K1BUTGotKMPwVCeideCvPeyt8Cv1KxG3uk7LFjCzTsLnikK9Sf6v6kMLJPWS3e17LjpKyzWNuJ4MTpMMvepUXWb",
  "key25": "4uwFm4eff7rrjj1aKkH4SaFKKfEqdRGZKZoeqXzpexk3vtCr6wVAr8CuRBV4pBNsA25fS5haWZ6WyyNjA2s84Aj8",
  "key26": "67fyvP6GacHbf82kNUUbTSmGv3oYrJL8ZrFdtKkz6YzZE98st9vpq6C4N1cvKx69bBvzGQPnV3KHfAv1z5URzgcp",
  "key27": "4eoAXtNPnpMzYF2sZWhaMSR6iZiEGE3BrHBN7VvaPnWQweXWF5JFrSXJFseuRFnRLvEQDdWedAphPPye3giJEPbH",
  "key28": "2eT6CQMLESKuAZHQrzSnT22V79SBtaePSUroZHubGsMMs2WFPDzD1J4BjGxQJm8VgUsbw7MqgSJwqACZCoNbsWMG",
  "key29": "3MRHrP6VeHb53tqfxdHJDH9GNahsDkqHfzxnAUjKqNAvhQ81kt4PiQqQagtx4xF456iHjLvj8xDzH72MErqBCf9D",
  "key30": "2gsfZAtD9K1W5Xfkv5dwrnqCvPSZxVpVWMByVWsNn6FJjDnaYfeVwRHVZwD4sqbprpWV5sFthLgo2RVB29iqCGSV",
  "key31": "3Fny2RtaJtMzqMAntGkSYLjSMdarmGPkmQnZ9WP3rArZNi355enweQMKqrLxXHYnj24UPJQZrzroJ7sEBCcv7CJ4",
  "key32": "5YqCgvBkCwqxo2H5mPdvDdx2ahkCWzPgWCvLyWDnDB7QbYpdKJ2ve1cXD14g1MDk9JBd7G3eaaiHBwCJCCTNtCJB",
  "key33": "2HEcHmwNQsMUJQrBBdML9sGuZ8vMKQEvpFX3Bo64mVNNtUmnsm6reyDaFDNgzE56S82RL23aVizT2ga2ooUrY9rf",
  "key34": "2sjhPsF43hpvou6Jou4DCSQ98Ho1yLmkUjx1xmMUA8wbqAvWk3iiHacSRD6kJSfwPkunx8wpHUbjAdQ8Rvc6SxBt",
  "key35": "zT8etU32xZ41q26qhrAcXUJQKAMjYwuMqh9QM55DTy8gYjnfo7A2H9uDKrmtUMN6ruhkKCrzaPNxChkJ1r51MUE",
  "key36": "4QeYpxcVvWUgvyBM5NFP5eYyeYNaiydtjpBnRp6SsUeEvFMoDiD5iiwE2RVM8gQBQ8sRkP7dzSdthrKxHFGrs4dW",
  "key37": "2SMvawqk3LS2xYsr6J8JPcEQ9R2gMvWv1HK32Ex4Rxjfaph8NFbqXU3hZWU7t994TFA5USjdWKgoCCUT9C33TzUr",
  "key38": "2ifn7hRyTHBUQRNE2KECvhbjtF7J1sDTY7hsanBwYP6ucLFqDUeow2CKyUtHkNdaBtFp9TWPwZpG7t1fYDLSRzYM",
  "key39": "294nyE44YBUFSmsfi5ZptVReYKuicYAYQGzEmmCGq8H8VbhKMBgq9UC3yC6UVD1JE5NkLPNBi7zsUoZCibzj8cLj",
  "key40": "41qqw3zsjQT1KDAzvLHzUoVTdNT3wQYAXrKUqo3z97ukUvTtaNH6Ls3hiemS1Cky5Nx9c61KwN8qTNbPVxzxdUrh",
  "key41": "3gNLVRLeRVVniWmq8qnVqPrfR2X2gtfVjtP9D6jUDaPUKiNtCKNw4rBXfURb3ZZsxuRnrbapRouHe5UZsQc5LX9q",
  "key42": "5Z1uCx3QbkiKQKZJFq3pdDxnatrCnUFYnp47Q4SYAHyManXG2UsCvUAwETzP88vGrHr4pgyxabLsNN5pDXwVMvH7",
  "key43": "49oUvAiBqiChfRZx27gmHKs763JLGxXb9EzDXYhC4GFF4ofYQCuukPxWW9Xngok9DSw3Q2ovY5QUWLQrX7i2GVt1",
  "key44": "5K4ELb42LVKYm29df1hJWCac4dc9SVjnTo976cYxkQinFsB1pVfkJnWxMmWsYPUiRPFH6nLDznHhSow2QcDj7AYr",
  "key45": "WREGU6jJFaFsV5aGVHXtgqKtLL1axk94eifJGTF6BZZ6GA3EjXx6KNjAErr8L7TctkpJ1871uBJJzCdWns6nWZP",
  "key46": "3sh2hu327NZn6xEE6zj4HWsS7xRkLaRGhqeCMC2o8hLhyuT8ma7RFyRJRpUP8k5vBrqq9jU2wrxQsKQbU1Y8nrJN",
  "key47": "k3xCtRCMQmm7SCZ2CvSGJjEs23GV24ipaAJfXLPFCUerJopwxZxcWV6E2uYLuQD4RwfJDkmmEtULJPf1et6dgpf",
  "key48": "5YXqSRsWQcM6LtthjhTv44ew9QqvzvwNnYoZCFWMHetqoDTXhyHAQ85u1Bu49tUL7aBSH5hC6sNKfkzLvTRUeTiE",
  "key49": "5UgvE6KUguBHUFt9z2GHBQ4FKiinLFy3zUAs1tEoBX2veSWm8nvFLsXuQvUUr9655SwKZH2kQfhfV9zTEaLubGz"
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
