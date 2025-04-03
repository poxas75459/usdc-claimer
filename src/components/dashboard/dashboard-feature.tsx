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
    "67hySRrwKtWqg5r2d35y3uDNeWLF9BVP3QE7nWsA9MQ8BXePdxynnE13s6kQMJJ7Q5yK9eN9ZzNJ98BXfp4RQ2XE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGC2KaFpjuo1CQjfao7QaEKDjxgkpkxgAi9vqKG4AmAJCdDkTXA2Gwx3xSqvLEWs3emd4LXntD7nyjPec69wsfE",
  "key1": "3w1S9jrWrwp4d6bc5Fzyu4knPnjVeaJrnRU5huReHmLrXGbcQiRXPP8AyUYvkBs3EYDBDketHAqpGNMhndEgyKQd",
  "key2": "N8u8AAoeZGaHLG4CEhBkKeRrEtgkeVnFb9bY5Ads9P8n4jT78xhhCcyTDMdug33ej1WXy3VdDvSa7kKNMzCZ5oP",
  "key3": "DS35TLx4121XZSGmdbnATUnPiXutwpnt7gz9pDvXCYz1ugf56oJ7ZjcDZRdw2dtCaaL1ERK5nfriRVn5SaFPWUF",
  "key4": "5NhGsYfBqfTTg7f1FQ1opudmi2gPRnN4GPFrPJjtUUe5YaVMn1HSrrGiaiCK2M2U7yViKfDe6C6Wr1zdm9ViNnRr",
  "key5": "5W6Qr2iPtuj2o2pQ2zdqQgGffysGRY5aW5hLzqS94hBWQKJcensHzsSbPCSthckdUk1fSv9s6f5DMGWQVnxSNX32",
  "key6": "5Sw3YmMwLjqfGczYa42mSPRHpUzdGBoVAeyHZu5durCf7h6mWBjZb9ecbbiQJLCVsZbdLEua379QcBHY8yiWxoxJ",
  "key7": "2nGenmUrYSJHrenRBpYKuMCB8fCkYHqTytAYio4osFyD25tL6nbrxwy5EeV8NyDZroaL6v8fFTLMxfKUcS8MC1z6",
  "key8": "5EVfYEuNbTh4ZCw1Bmz9J1QAzvirkSqyvJXwJeh5genYxu3WMoFGHkUpn3oNu9wniCn36Ne2gWtJ4grXP6QQaCav",
  "key9": "3cCQQSXymGTN7vJAGPGG95NSpSXEZJdrxFNVAtLpdGxxE9i2Grx3TPQgfAvf3vFjuGtguzH7LuawArSW62KMo62Y",
  "key10": "2xXe4YauFMvgvSD3D2NXo945fzRUGidsdRtzhDVuaXNfHgC2ME89AWX4SfzLU6HWnBWcc4QR3xPNeZqcuy5BcbgS",
  "key11": "5YTdM2J1TuvovLcEKvoZcts6RtQ5FsD1Xw6GBkpecQv9UVcN73JNVGyVDdU6Nf51qKCYs35WJ3cvfMXWgdUdArSD",
  "key12": "35V3YDWt6YcY9DSRmoJEE9BJuMeLs79jNbwyP92rNCcpnBGLhw3FvjPSBZxJBffgPzxYL3zKHreYoujqTDHXX2q7",
  "key13": "ztrknYQ7fhv5draGyfuGkJAc8DtfdhGs2V3mVEhkYuAhghycspcJCR8WKyqtnEYGnQih1S43R8pqoyzxV7fF1go",
  "key14": "2FhnvB77m4mYFw8mFoup1cFY5m3ZraQT7tExThWfFeYLin5JMPKUJq1RQ1dvWBQFwDbHkTM8ujvQZtb5PW6kwB6s",
  "key15": "4vgu1mjX2CCtgLWDy9nRRUz5hAEKmTwb5vbTrFDpNUBETTNZXMQ3GsMpzs2xBnsF7riXaC4ZzGUPB56fMdiGeoHv",
  "key16": "3U7bS8nHrWhVhETpx9d2a2Aq9Pu1bbN5yvwtwDRDZpXpKZfQiad8yeDpqoixhca21up56fGNZpuhbtTyd6DTjDsM",
  "key17": "Pua6zkJybgZM8D6ARgMajiPRwujtN5LpjKoLsonK61QBBhCQFSqHiugXd1ttPYNrHfM2iASckzcEB5oEhDBGUct",
  "key18": "3GKZ5w7Xn7hFThaqNjBKJNr3zWb72yg2BgnjUAQ8ePaevVo3v6TqVxcS6zRyHj9vApCuAixofCEtrCPY7QAxb4Gu",
  "key19": "gfPeHii5bQWQxWGyxvwPt3xjTRmFeBwZ8xtZxApYvwTBF7TdLXE71agvFNmRAfGMRbyoXbaopvPrnEPWVtC4LtB",
  "key20": "3zjJDmQZh9DKp2KS3ngnMbMkCsxbSNrsm3ToLKzKKii6ZPaCXePk85dGRRgpuWt9FvRnpPut6BHKvHBJKGRcZrXP",
  "key21": "4cLcuQoTSqvv5a9EAzY4L5wiuWB1mK1M1qrguUxCyiKVwDKvSN1PEsKgEFiNn4PuBv9KUJ9CoZ2zF79JH9p8wpqV",
  "key22": "4yccYTdQr1hmLgw2JyDjZGHUV1HmSkn4WhmWXHWmhHEzxR7W8BPUxHDr3NSBFY7rnom9mCN1fqG4WvjsCuGQME1i",
  "key23": "48oEzgBHDvHA14GC7q8nxUdRyky1zGR9L6ddnyrnRSS2XB6Sqa7TkeQgt4i3FNU6noGXVtZQWYm96e1RJPy1dLft",
  "key24": "4r3RKH7eMRiJsXEr8pcLz3CRqGCi6RR8NAQxS4JkJ1r4T5dTz3EoNqHf3xDjCQjzTkN8Nyy8Wkfyd8PMk6pEFJdx"
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
