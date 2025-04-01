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
    "57oRYkp2Fzof6dAw6vEjMBeVPWE5P3nYUPo1VrUKjKxDzzRvwjqAvVbJZyDKtXx7QBf3onr1suTGNJMaaD6LvCxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRATDPsDwHiunfi3Qu5LxCyC4Dqr3h7z1Q3B32CsaBtRchig3XtgefwCwrmGQ4yqGZdwU4Q23k7WJeo5wupaNTA",
  "key1": "2VvK5N3Ka9o54z1sdJxN2QBmrTEMZpvctJLge7gigSixtmB9RPcGEDGVUVJgin1q8gtX424VvZZHvveatKEPDNK7",
  "key2": "4tzHp7cqqXuybStZnqCbMMPgH8QNdLY9ghUi13wjNQ3zrr6eRExxbrZLPUFzrjaYW1yhD1BG1hybP2XYbh7bxd6b",
  "key3": "56yFbuX7fPQaqap5fnv4DX3xuagyxDPiSLVVcLPjrpGTmQhgJQ9LJmApRxoZs4tx16mhLq152tv6FBTUHcEGfz98",
  "key4": "3cDZR7Cp9KkcNsKkR29HWCbQxUHnjRzYmvADUNBH3CEk5E6xc8CMeyPYd4rno1fYrKoPGNwqmqG8feK7ZRyyfmzj",
  "key5": "4Aw4bW3RPYzYGWmnGhHoifpHEvWFpqYvn5MFq5QeaTb3qJQ4wBYPMtgz1Ns6TvAot3Cn9ps2QAFcyj1xTPi5M5HG",
  "key6": "37XyHZDt2BHVbSBaiEdFW5hgbvRU6G9o7dgsLyQYTQNM53KGCsBniFg23EmzMmJaQr47WBabtavzCubfQMVivcew",
  "key7": "UgoLsNwmjZGACpHYEssHdg2D5DcVUzFs9pmKXyKDRZodsf69B9nSDT3wN4PktTHtLFFfEjV2ZMXG9XADzm8JR7K",
  "key8": "2cirPBosnuyEsCk5FdvhuAvJ2GUGzesnVyF9sBwXPEkttUa4QYwBoTCMYhMzstLtkZQJAXo1ASyX3jaCjBqKNW29",
  "key9": "2btmbF73nq1YWCWkMm4D3tRJ7fkLT1sCpoZ55cno1dafdu9cTNQVQKCid4jNV78gSHqr6jZh87fpHArv2mY81nme",
  "key10": "326GggckodvnztC7ogPiFDoads15oQwMgsuk6DQaJ9qcbk1cZpj2xGipYkCQY4tZqrGqgTmw4wppuhhiiLM7B6ZK",
  "key11": "9MdqQiACJq5RZwrLesFoQ2vPcfbhssYUGzWCrdh3wLdBnFpgdCk62WJpSjoMJtLzSXTJgis9JFmRB2iS5SduqNk",
  "key12": "5wGraUXG8NyniGSFKrQFraEEQskk79iSweUuVJsfoPUQioMSKuZurhT89kjVmAma3LMXQAXhrD3tcpN5Ujgz4jSt",
  "key13": "5hokKtMPs5RuJKkJspnwf9KrBrZjzGekUcG2d8YhQtiyddoDgvX3G9zuuS4va42vzHmcoi8Mpj2xV1GwLhxmGXY1",
  "key14": "pdaMngDumpLfHrLrvgTjh4XtzAphafJRU1rFKGFxnREWn5rRmaHAuosgnDWjShVhPLDDKY2cATDYUZQa8JXxFHL",
  "key15": "4fuNp9xszGqiffGYn5SX3FP7UeoXwrM3uJEqf3cuwt8DWmR37asMjXRUceZXYFDr5SE3LXWGSVSSrHqieKH56CPF",
  "key16": "2KcAbxitwjfBygCicpuFUDC1hTuCDwFe8AiPVEy8uCtiMzqHKmywrhTUBn9NzEnErQ1G85sdDaPX8EKK1wnErcYX",
  "key17": "6Qd7Bh5Vm7MNHkx2qYFT2JwC683torCbxHX2osyzvSWXEBXkN7bSfbL8shv2o73DGyCuZBco7yUKfkouFQtaxPe",
  "key18": "2X6LCmcqpR4nLfrvgFPxi3G8fUBH6ARg6SsTYDf3EYLbyGhVaaTTe3MemCjEULx1ycfxco4u1gUAaqAWKpSprQ2a",
  "key19": "4j3qK5QLVSkvPTPzy9aaoqZoHwJNy4SQA1b23Z35HKEbG9qGfMLTjYjjGGsqsQUo2HCGWCSxmg5zhKkoDW3Cq8C9",
  "key20": "3HW2nb9aww92dswZwvgB8jFfX6YVNjUf4QQRkXWjNRNKB9aVHKXrfJ3jnAMtskUG8Wmn7QDCtHjEvGcggQFXHZCv",
  "key21": "4jmGwRZq4CbBghoNaF1tHV6q1gKgQrC1QeZdFGyncaPLgUxeKo97MfUhJVaSpNP6kSEWnkxsVQxsmqZeGnfdQYyB",
  "key22": "49axBGmjCVdyUr7pn9K9bQd3oXm45i6JyusgEtK97sHXe3JkzeaGYj6m3HTGQguinCw5es4T6rCbxWs3nYH7k38g",
  "key23": "3LhHixpDMdToxNZ8R3tYrzZAw1B1ZEPupy7G1FgFzzgdXBLCR6tvXFxH2Dr5KRB9X4YqmxAyJ4uUUJSa6SsUzdWe",
  "key24": "i9LX21eD8MFTdvsTNbWEE9XVJ4JAX9HW4WrVL4qdY8aABXpcsALf4BY1AJHDpvmjdmjmFmy8tqkJdESty575Qh4",
  "key25": "2bozr5X9VJNT5vhC8gCuc2EuKc3iUwi3igrRRCR7gfHnPSS4rW558nVfoAcUgV8bJidYtbuGJ84GnVw5jCgLq5aq",
  "key26": "5A7ogdxGy3i8jNUkzKpKfELMqKQT8b3xDEYeLvvs5pZ8qTafmKvczramaD8TmyfygjLRLxtve33299Lg3vuPrU9X",
  "key27": "4gSsWHghwLQ7xonWwYBt8KY8XBoJjqCRdJYsD5QZ3rPqEm6Qc39f86CKG41uGLDfNCy5pnxAgDSn8vEi1amMcgky",
  "key28": "5RvozjnZ6LXe4ioy451VtuTNZjH7nddkvbSCU3R7NDboJrgWer5uzv2pLeBvkPN85vTMXYuGZpzx55r2cvYLtYD9",
  "key29": "2qdzEsvP5JBZaeZNt2VKvr6QKZ895pLNx7pBdPaoM3ZXBcf69StPeYvRwaXv5RbMM17DrYs5ZSeTsFnno9PdF7Sa",
  "key30": "2aaQKimuYngLBBcCn3zvGoaUfaBjPhHRydHfjZXdPkfSHWTdFgzwkHPYoCGfxSzi2RKqQ17eegU35ox5gYskySQB"
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
