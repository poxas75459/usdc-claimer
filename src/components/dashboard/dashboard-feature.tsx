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
    "9TuWNxw9txfd7FJ19GJQxJPhveQUiF5r11GhXs7Y268F845RUkf39stPqcZoX1ArBzbzdmgi6pDUq2VkFA3rrmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eqHkxq76r8aQx1jGNYyzFQnoWhdMPM2VWYvZnuMuS1TkqpvT9k3DWgtskFPuzSakjuWXv4GZMtsYQ3odMVea3mk",
  "key1": "2nH5Bu88ZfWSSRW3XG5dwfY8Eqcy9C5qVEFqwYHBsUKUqEirBWW9aRXKrainf1B6ShQb3CZdqVJFkT6wgg2VojzT",
  "key2": "4exmGu8kuFsY3G9ZCT9WigbXbMqBXZjsNxtRU4smjJvCzeximJx5GDjbyguhb5AvSiBP8Gf3o7fwrU1XSGSheCjF",
  "key3": "63fGcEsrMDpmfgWJ8FhLMeBhqQTcfF1S18boJNEDRHCrdjB95hTB4yMRo4jAbvd4k8v3QCbnCM24ui9t73ULovz2",
  "key4": "4o4ceXMxDaivsMFAqF7dRJDobJhZpWzokttbaYXrhSQnADcmpHmjfpFGjsr8FFhPa58cpbJFUg1sUNJX5oK294v3",
  "key5": "5MHVWvVYQbvqg3bS84WDDTBhgwbo5asxAJMgJovmuhpbHmwXTDy5hxVuNLxoANCQNqHEuFyqDkdK5gUsNfRpK2rR",
  "key6": "3c5zXkctv95twtAgQzBW3mGWLjyPCv9P4myrmWRavyoze5k9k49wo58bP3nYLt2KWTJ179PKUY3bF9EHnjRh28DA",
  "key7": "3igL9rhWMPUUM3CzxJVh5BPkVPGenKRk7TQEdWczhAE1CJCHiqxZhwJw1ZevMGy2T2uJZ92Y8dya5fePXrPcqju6",
  "key8": "3f7Jo18DhdGSAPW7rQS961rx8bFWbkBArFHbPNbwFM3P1Svj9foPK7AxkZecvt1FKdSWM7UdFBxDPk3Yup7U8sTf",
  "key9": "fuuhfzQxgoEW1cdWqwFevzHmrvZY9LfnaYb1EPXj5TTQGjXcCTf6uhUxfDDq5rAuQA2DKmduMMiA3DzPmLF3nw1",
  "key10": "DTHqcYNkPZ4o4BUHS2xxbqAXDnov2qk9nggisV2bqBMrpV6LQPU6A9daxWWe4HnBcW33SiWkXpvvERNs3WDgXex",
  "key11": "4SBra71UhdqBbAR7Y2jMuqLHbjNq53vJ68SEh7JW6wJdnSbU48y7VTvfAxoEX9jUGjSYGdZt7CocXeCvXvH9wb6W",
  "key12": "2nsubrK2AtN3QyGPh1TjfiPkLDxHg54wM5xR56WAUpzi58RaQbBRoUsfdioEFea3rdqpBJY9Vzidnxiw9y4iLWyG",
  "key13": "5SVFQdrHg8tz6dxe4TdusbwvVxtgqUB9xFmAhgmd8ktBmnCe3AUCrFtvncr7AWAVMWj5T4GwuUnHts4CLtVfuhHu",
  "key14": "5SMBW3QJKxTB17QEAFRDUE4wBBAaxkvw4nw2WUV4YfJU1kQx4x1P1NuRXA9j4EFp7RHofM4N1oFjws4CBvgejEcv",
  "key15": "54tJEYi3UVPD3phiwrRE3BLHVbgEcQVAFo3wqtAcqrXtiLLMvK28L8ZSwEwHrdnEUbYeeRosgSKawNMSFjzCDa8G",
  "key16": "5Z9feH4iddFoNvrE1ucHP9FA4xFCa2AUvK3UMnYseqdL1aGCiUMkPBxBd6z7t2RnEii85LVb6xUJgu9J9cL2RQ5K",
  "key17": "WkC5VGPiZbeTozh7MD5Ah65s2nHNY4SPkjEJHTKVWrFsJXhVWZAVNMJfosyqt5g2uvzj3QQAsXaYWwoCnH4RbYL",
  "key18": "3bUn8SyHGhQcww7wMAbjVKgguMcBioe3A8PmSfbCAVgZohPVq1Kyyq44Q2vjJUixtCfNmFLVYpcF8siqfChz8QZ8",
  "key19": "tCXJxMozkwEp2JVQUvRL9s17nGrEpveGhB7pUMtghisYHHLafqvZGvdVqCsSe7YnfCv5sSQCKmjJrATJSgYQ8q4",
  "key20": "5gDPDyL6eheguSf8XPDVtGhGj8wNgwC2ZmUh6KeMjJKviQzSaCVuk3xxHbJARiWGVdwHQpPSwA7whrU1puDFtTF8",
  "key21": "4JZT8iXRnkZVLYTFBiTpgt1rpcnKuohHPEWsXJdsaBEX8dx3ooQBchrMBAJchSwwg5ywGjCGrGo5zm8cnx8DqB6m",
  "key22": "3Dc7yQKbESMyxYvn2wGn42Uc2L579jngB8k74v8fApnmyUf9tb5JsRUaNL3aPZk97DYXLRrDqbHdW4mp7qbaXiNz",
  "key23": "2ym7LWqcduDuFHLL5JT8Wv7zzpbKhqESi6LuoGTfGvkRqM4Vpj6qnNAT6gt1mutC6HKG1bDFbo2JSw1d4KmezSuM",
  "key24": "2p6BkLTCYgCfjiwzi6bCSXwippuZWqn6vMx5JBPqXMvvKt7CdeQbdYM6VfbdCA4peFmffyKGQJzCDZNyoS3zM3hS",
  "key25": "4Gf4yPupMhycTmuUS3h94kyBrevGwFQGDDU8PCAVfT5C21KD9YMkMeSyPZDUdENDHG7LEec8xpuEYrLRWHZteHUv",
  "key26": "rMwtc7i6TZ5pVvTumMFGu6gxs3NYtwystZBrt1fexAYZKfzM8AZKYsojnqk2opNgYjmgwNvhWqziQUkZHmfnSan",
  "key27": "4yjjEGGC13KwHyjzUbLVJsN6dzqDG8H1UHFLVobYC4xLoTmf6GGJgVY5cSCi2ws8UVPkr2myAKbtymSVXntX6ey4",
  "key28": "27f5LQrStqWFJ6dSq3XCDLSFbY5gPgS6uXYLt2TThWk331HNgTsvUfYiPyRPaL5qLb5cVyPM8wxMgRmxhsfLLXMv",
  "key29": "47cC3ZRZVrEKDdpvN7V75D1Tj72XgGNPD2dgVKiejfoSHHicBTN2QCWNVZQWYJsAHP6PQMC4jKdCx9cc1RjmbpJq",
  "key30": "5kBdLEjvLcZopUt4Awpp2LjTXSgGrUJ5LjjoWzYkKtPbA4ZovzyJg3FQSxTDc9md2xi6ikTCJx96sZz1vZxZtnQt",
  "key31": "3TkcifFoj4kH3iMGS26KQbp8xVVHhWen9nQDNG7f6dKucarfcAYhVWWK89u3zvECcAoqbHAWupHQN4LfyQD3s1Ga",
  "key32": "28HLwS1ASHmSRNVT8XG3daJrGRr1iDDFqk1i9YRmpFWJXZUAuXqXurooZqRchbGTSoaMGNGvzvbqyq9ggUC9pSv8",
  "key33": "3SB9zAFhaJdFDmJD8gyjPQhKwxbrwmzx522raPicFfhWTECxE91MvumAQJM1scMStDAQ2PWrGQwjL49QjiAkbxbi",
  "key34": "4Nhy1aoQ8hRNMB9Q8qe3sUFhkubqjPnRfqiZjW3eK1USeJh88cWjgjphdD4WUV76Lrubf18cN2NJPs8fk8Ubk9B",
  "key35": "zmKgwzaDtCcaUv4PCd4HJb5YLzpWX2yMyGApW4hTgtWaAZGnCvuzJwXGvtGudMEPfM2F5DL4d2KZrfayU83tdAk",
  "key36": "3acMRGCuWELaNfdRgppyNikjhTTeCaBw9x7Fer6BRuVZW16aCptwweCJ8PujZthJMJX4gAycpTgSUt2wnVaKzrhz",
  "key37": "4UKHMhhtjWAQ9wJEc6LPXLvoTsp126pSygQSCCewuCkLdG8UaCSWgvkTouTtRzDpNfNcxD3hzLdAXGVswVKbZS7L",
  "key38": "2TVnmLvKhEWSEazMLiHNLaQkQEaThY8onVBmxiYcnoehsiiBtCQ1nbLQCecPu9mmcPXESFbbT3HWaNiRsV815xn9",
  "key39": "5s3U2HcsmkHNMvj27LAna7WiDFiJhfp8DurD18LvXtxdkdCvFgnNtP5yVNBJbXU6gQ3waQduZ8GKTWvUtUCk2Rch",
  "key40": "5Ci15sMhK4TnzJw1EN1vsayrxCBGR6GuG2a5CMCA8zJ5w7LAjCzxNi7PHTBoiMhzC1n5L4qY3xmPuUr6a1grwe25",
  "key41": "2BBPyr29hoTgSb8ihfgaEanSjint5PSkDx4Z8qrbiA115JVmRna59wQg9PwQm2B9EBdWYWmrLCGLPYYtichhgLBV",
  "key42": "2hPpAFUK282kTndnGzJepFxUDFyeNQUPgwKWpkLcNScSNC3g7enNgtGmc2RWiQitoKwd3mzkt6ZSqJcVYEsDTYGQ",
  "key43": "5dCAyAcMv2RskfJdkqaFjiW2WNfvgSTVhYS7VPNMVwJ6Ah3Pt2W7MdRdNn5VjLPzU81onQgQe6BmSePjqnV4qKna"
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
