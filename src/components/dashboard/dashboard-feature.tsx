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
    "3pPRGVrCYrAdxiYk39ivVFKe3wue3M2jR52vXDJPjUnTsk927CZpTXfUmWMYpJ2hSiN2BKMAWRYxXw9rM7UBNicu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n84qpKakF58yxGet4pz5QwobkaqQiUHTm3rpmAo2pLFjMTQyrQM7fxfzLjp8JDnJq8XENxbuEqvCskFCvKUr1Lh",
  "key1": "4kVF6oh9B1BqYzch4Cn1T8Sw4di4yNW3ABPyh19voMopt4SXZjuUtqKdoKuVL19e4FQMAAWNbSCCTMtemjPQRtmt",
  "key2": "5nFaWkYjfxTC6XNQKR7AUh2NMgJZM8i6Nd66Svh2Kv4cDuqQUMEt33rDDMoLpsHBUA61sYShnBvEa4pTtAb4P3Cj",
  "key3": "2yxKtLkRU1TEiGYxCjWwVrAE95YrfyRCRG6pqugpuNbLiFREgJ8KPLUR7YLuHTtUktkyNQrRo7eEyUZWkYB2GGgq",
  "key4": "3FUaDpHHyBgpcY16cLEJjYAfmX2uh1a8ZcyLGWPghDeDSFtpfQdEr4STbEgPYN5M3FzJTwhHNPrFgddrcPdUDbUv",
  "key5": "3citCRv4vfvdmDVNPkHAUA1VeZf5ie1fssdC5sFJFesasWMTCaEQmSjY3BPpa5Xx9XxptbgbrLQddgwFj9AcoEEo",
  "key6": "3sFfhqFUgsvhD737mPNfzGQZLofrb58rQHTgSf9yTuPV3WcrPzBHe3YRpSSsmMpHrbKwMpxJLzBQrn6W7Tba9qTZ",
  "key7": "3nTsGy6W4MoPiWx3oeJuggWYBTb3Un8CGoHmbHHFkPAqAbYMdjjPf75RPMngQQuovGrAtQn6Uw78eF2pZkcMV6db",
  "key8": "228Bg1LB2yQ4Lv46PKNfiuWgB7FeT2gLKcHbq4EkjJinQQrHqL1RKa4fRf44CAnT32vDB3ncHiRuhYHrpbmsPDTe",
  "key9": "3yGkK2UnPGFcBkHr1gRFBUWTza1Hmr2sqTZ2vJMaZW8xqCAGrWWu1xmsHFaJW1Wj7ZtcHN8vqXEAWpjfXW5mHnwg",
  "key10": "589TvXs9TpxyMnhJB2twnpjukHFsMFf6kHbDyY8et982r4TMrdvUV7miHR9EWWp8J7rBRohUy5xhreE7XQGQYM8E",
  "key11": "3usE2S6HK8mKsneVA7TyHhVv7tbUvYGjh5VqpvTvqbjirSrStFiNn31uu1zHrUXYYXKp2NHZXWaZrk6uuwPimXFr",
  "key12": "LKKraQLEnJaUJvNBX6bJMgWTbpfw1A5113koWrohP1ZXy4J6t9qyXwLyUriZuz7Zh2zcKz8Fa5mzXL7veAe2Mrb",
  "key13": "3SBNT15xPd5hCRR1RTanAi7ttXsK1dzu9wGmxdiAYtyCzAq9xDXSCUd1Y9uYGnxKggW1BvLy2WeRndFW8vYs9q8g",
  "key14": "3BmpzDZn3x4MSLBTzRdA2oPQhPcbKuGxmz6YJBCDwzHLBPN6MuE5uESTZVk9DCt7ZfZ7AU81ZnST7XwkKu1GJhAb",
  "key15": "2RjPxAQj1BCAdMfjzB1Ak2h1N4kowLeNCmdPNTPCyxgVsT3WVEdbmkfdZTp2dz9ngbagHRJNZD3mrCn3H78USNg7",
  "key16": "J2MccppxH8yAt1rDSYXK3mTXDSvT7D2ywi74dSs1PLfeKu89CKaHeqqZCh7muHwAjtivYCud3JNPmJiy8juW3Ln",
  "key17": "5dUEeqKuiohnDMFSpSttV9r6ZPjsQokXcBii1RUh6ugQdy4anoTLboVmNbiqisPeZTEPWfiVM3nrfWQTDZ7NgfXE",
  "key18": "3mveLpzqGrjmdtxnSVhq2uyzFKVSxS9eqvLkab69vTF7uhijX4u9QyrumfpUEmjoKtKirscyMhUujXrtEcD3dFhW",
  "key19": "5ze6ambChMr1uUoJY3cmNeFvhL7xGcXayVi35aR68XCsbehCJwwu7qWRLgVjoXbjmzbgxeTNYprgKur94DM4yw91",
  "key20": "3ThXr381UHMbv6vb6v6nEoCSs2KvzmyHVeXfeRHRSPehL3Gv5qxGHWwzn3yZBmyHLgUMGTqzoVe6KEgrWKEoLNAz",
  "key21": "8Wnnj8WVqBG6BASeXdpTXXiSYVahnu2fS3p4JMgaS8jtGhmU31jx794iohP4nxoFctREmQbdX8s3mM8vMVnqRZG",
  "key22": "3XJvRVniyUWSidffwtG5gnDZo3X5cmWpsTe6Aht3gyrThR6Q88o1mCPzufvad4j8rvaD5VMpzuQTGZ7vF4QpRyPa",
  "key23": "3zmbEgzjRVVtGKpSeBPSeg1c6HjBfihZQdtbphgZeHyWuh948PpZ38aF7kmkZWMu7UiHCVTnY8AzyASziFRSvRk1",
  "key24": "3r6T97ujeW1eHPtf8aSaooLuudjG1eN49K7KYkeGLvu7kacaBD47FERUZm3sAp1xUQcazbCY22QMRqB4qeZ7nfYF",
  "key25": "55BgTXUDJubQAMSSqk2cXEoX7J7wxwNPb3BzamDqw5EviDccTu3JtY44ccAsdiwPaRn8484kngxsf4x7mZ5RVMvf",
  "key26": "pwFYP1oYvtbXnTN4WegBYnuMP52eSuV51m8yYoDgM5ftpuCa3FizrZnL2xTQFKSBpRdzpN6RHZDAGMkW8uXA78q",
  "key27": "5QZEmwrJbty64Bm9ZhrAEnHGy6QtPrx2tHgtmkNFVtBVbxW2cBc1M7HKuKrdkN1kMSZ2ER3BY3fQuBihqpdMTJoQ",
  "key28": "3Y6BU1TXvzbDMzp4WcbBSWTCbimNKWwvGQmHbQp6eAQ8yPDPxV3rn6NBjZHURpZUfdfgG2rom7dMMKn9M3PFU98R",
  "key29": "2zUY5nUx5WY2tCQJFXkftTf25hdWT2vL8LB1VAWq4wmBnGeCSMCX7UErK3MvsZbQLiYWhqzMd4Ygc5n4N4JzCUcP",
  "key30": "67BnJ3NgSZSiXmBbkJ9xkzNaqpAwuD4D13fk94e7kE1sCdt1R78AxerKiNaSQB9TzXEVvcVE2hEEb2mHWYJjVBn1",
  "key31": "2FV8n6ApSVhsSqiGFT2iU6NJALxpqwWASGVznaZGUpH7Zh8mY4aH8ZBSMdZEUf3FQtZr1PDbFfb9NpzBA9Z21SKD",
  "key32": "37T5zaJM4ZQohQrYe9w6emoMWKpQnLr2wpBVaAvoJyCdwSuMJYSH6REi5cfLhNxsfoAee1WSTZuyTDmo4BeNrNfQ",
  "key33": "5JtwK4r9CZya3oCP6tjCMtUK7SJsXTMeoYV7FS5MQfP68r5cWFkssGuVnryJHQNNW2uMCicr9apcJQBGmHry13QF",
  "key34": "5r9xvbAQosUu6JTQu9Cx9WFryYtXh2zqvCj7vQYFWzCfpNM1vh5P7iGcT5LFKMUcj1qG4yDcXxrGxqs4t7jE82te",
  "key35": "5CSae8KrcbWkNyDUPPoHi1pHzyCrpexbGDHCVM9WVYYEwpBowKqesXSSnt4K2xcshnHYj3w5a3tob2goqF9gb6f1",
  "key36": "3hoJgUTtqeT8CSnnoUyvsRVA67R7fPbnarHubtLPpteskvYeGp3NVKLmXpKeBkmmK6L3WngbL29PjLW9X37eSbtz",
  "key37": "ruToweZ3aURfdYPaoePPYQRSJRVXHde9oyR2m8Nr9rtAG6ng4SujVm6d8w1p8ETQYrQDYispgSvmjmN8W7cfi7S",
  "key38": "2ThX5L9iF9wJbLQot1GPPg2kC3pYqTtzUGKaCxXEzmPRpzXbayxywx8JvHgMeh1YjustvXsCcAq1wVXpuA3X1QiA",
  "key39": "2Ev8VhCcTwNK6bc5KdFUGPg9u1TQgFzY8zSv6TfFRKGMpX9PGxYKj4kBEVfYejxvcELEom9PK9pKB6xoPL3GPAvW",
  "key40": "23C3UbasEJZu96oiAauJ2zwH24KmfHBqoKJP8CjpS9qEdF92ihF9jYT6ysHFArwhn9BPifkPaStj1WueuySrYSHW",
  "key41": "2pdQDqVcQjnFjRUCiHJj5C3ma1q7VB8C6W8MKLuV34zUJymPGceYCEC4kgaYHAeQYvZG2XJjNwBt1WTYwbcZ5XZZ",
  "key42": "63tJPQjvbjk29ExLrbDikkDBpAPEnykCmX8rx72Q1AH5pJkLAqcStAvtxPUiYpgSbmsKpDK6H2e9t1n3sYiJJEwJ",
  "key43": "3utS1gMmWWotVpqbs3aez4nkQaJK5bWUVygCaMQgaAoZ3VD6wBeztH4foPaZ4Jsv3KEa66ByAa2D4Y21FEBa1bSP",
  "key44": "58wsdWpMauh8CoXZDi52W1qBETbRasE2omAtTwn6x4b2XxDfmMZV4qeSM3JazJdMNvicoRJrPRBwTUCKwcNyF4ff",
  "key45": "6mGMpLSSMQ1UVamqkuw7x7V41gWevbAJZfF2uLqJG5uWTsP4czTLdzhxEfz3NBwCMFAM9FyvdSeUAt6twVvfczs",
  "key46": "5sU6iR3eauwPDxiJRgQe5g5ke3r1ko9rL2BY8FMtqsKbJbYEjQLx5DXdhdTWQ4nQZhmx2KgN1zFn8A7fArt7TraM"
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
