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
    "64Y2iNn9Q7uaK8FfTcyaXCpqdpogsn5VvN3eZU3BdspojS6X2nAe7jJsEqHciVoxo7EDZo7YD5YeMKZ1UeaFTUk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHpbhsggQmXe5yNHRf23hhuThfh35Z7tokVqjCTHmGJzUq5XMbbrakgWEb8hPG8sMGDPF3oV4MtPB81d42Lrg3n",
  "key1": "5NvDd8hRwtkHHiFpZwFGxAmFtetBwByx4iiGt6wYvLFKCtCwTDGAWmvLaUNGLC4L7PvnWAw5DmkAUa1NEeW9SwLC",
  "key2": "EDptJg1TcxTaXsESkMUGTP4f6HvcRtVogBRTmkdRU9k42hSPYPmL6uBKhx6o54GAXkf2PmtrfNDEJuG9JAv3oJV",
  "key3": "MdhcUSQUDzhh6eJp7h4ECNJfhmJTm9JTuvh5SuPXd9ovN39a1e8RXg32HuuXiXKdsZEPFt8SD1rQjBULr6idc25",
  "key4": "3HM2ZStNzVoKiLDoem5Z2mm912oJBVirPYGfZwH9kCib4a9ynahvms8wPMh56MwnFfedgXFpW7AXsUCVpCSavgFf",
  "key5": "58rjvgEGXXtNdEgFydvX3hUXsaS3rmedCVzfhvzfJQrnJN4mUdVexKihwNmc2S8uGWzmg7KxyrCxhDnPMFELsa9",
  "key6": "35LZKPDaa5javdcpepmHHTXDWvbbAeVZMknKzfCQdAAcPp8kzVic4nfJVpz6pPqDD29jVZgdhBqw2fWKEpUqR6bM",
  "key7": "4kzGApgz4bXVc6onPEvep9kFqdMBSv3HxspH8kmVVywgannzy8Fj4Qp6jBhmEWgbeygi49kKMEBUNr7uPvQ7sWfn",
  "key8": "5SRKD1y9U1pBEkEJ3SyVfmVwHHDdTtxobastx2acmkPMsXUW3yq2m7chcN8Z3Jz5okeeVAGhDcjgs1nbupipvmMh",
  "key9": "3QGxy9VcWMZergdMpwR8riym4qYL8JYHgSvtXxxRCxxnGfAE7sAE8L3Sg75BGzKuYzuDNzfD77D1XtVyHVTW1zvf",
  "key10": "2js5VqWLTxp8BLazRqoFEg93DNGMQQYMed32tXdBKy7kjePKAdNHnb8j5qFQUgW6y5LzDPJrcwyFMi5uD3aWpx3A",
  "key11": "3iCFCcKJ6DPFUYUcYNJV7kaKr18XQdeBchb6HsnGD394NUXZz9bQZvUD9AXhK27RL3m45JdJxE1iRE697YaMxg4X",
  "key12": "5vYTCpzrxtbApBjCHKcbhd1GMR3ZfkhtySVXLdr1h24MqvegBBmoV1zzX3AN3uvyQPjN1pXZ7gb6jPbZHwKntgqV",
  "key13": "39qbxDhbXBK9uKvm6ffbyd3tyLm3nBEnNtLHdLxEETVm9oob2nd4F9ANK93778FJzJQPoj8t72dEgdk2a6ZdbnW8",
  "key14": "3aMLY9VT3HdVonpgvvA2MkRqAeKHZ2hz45NJZNevZWQRD6rVn9zhGF5uv58gTogFHb5jCtMMAXgUBEtr5u5mAFs3",
  "key15": "23npwtxCR4KCvuisRCQEsUxmEPKyDBJFAAYwKwVsxdxBffZoEQrNWoarUuXg1nEPEUME9BYi3ukxSVqeobCRu5Sz",
  "key16": "JZ1vFeUtpPXyHYaugbF6D8eePTTgbpSto5J7UNUaCp9B5tmMj8upabNMrXeg8cw21bZeVDAskQ2eUsiGaLyArtw",
  "key17": "4s6q3Xiumd99ST65u9mbi4hMo4ikpXHG9peTMh3ZjdQ3Fn5XkFYLfVfRTcHrEFgst7WDCgLWFUkxa3YSVQBxGfmv",
  "key18": "27xBbW3f6cRr71bgHHC5VELMwQYF4mWRLpZsf1qUroidmLB94cMWhrn1VRzVefGfd5sruhh6huX68sGkYRuU1aCa",
  "key19": "R8TDvSZqsD1sSB6sqyPjzWGYGTpMkcznQ6sJTpHnecahzBWAefs3Wr4Af1phJG8EfddRas3iz1XE2r4j8R3i2Hd",
  "key20": "hmvixsvUY6ro5yKPttN1VBv5AmUtdSii66x5czdGmzgiyZYTpTJoWz49hnhCkZx5oSU9nVVTecNQwf7MMDazexE",
  "key21": "5GW3GYNUqgAAevdJUELD2FkRL8r927sLEtkoHxeNYgTYD5jnyeDgPVuWE4YCK5H1MonQS4rxmfGPpNvZzYVKw2o7",
  "key22": "f8upu3KST26dszyUanibnhzFhF9aAKVdCkMJNxRbTGJDZtNcrHFiG3gFUjMBC5LqMZ6HxWr6kzRAgduPFyf8N7x",
  "key23": "4YjiP6nMNz1bHHY7DGzww4acRzHU3kb7AyNbdQW2tsavnjA54Xm7RHzAgamQ4BYJdi6syU6Tb8iZrs6oycMh6Exd",
  "key24": "5jhiNjVmj9BCpEjk3Z89XF9JKJkLH3M7znC9Wm1DYW61FMcr15MkjgeQU8qX3am68hcxW1sXUMmaPzmJJQxG2rq8",
  "key25": "3NUsqAGmwkuG3rp8pdMcNTg7SPDdamtNNtvQUK7M96KLEk6xkPDVvtJnCaQ1nbLRZutBQ31RB5dX8YLwr1vi14mA",
  "key26": "5y1546cJYjAvkQ6k94VN5iU3JFBREH3LRwSftvFYWiPZHht5qTxfmE5m7oizsYkCN5L5fSdu4b6RLeUebNq2do2k",
  "key27": "3jVkJ15AjVnLBb7YHYQiDVNazMLemQtBjqwRvQshqbYXhpQYCNDfGy3MAiwr1e1oipkSK1mno5X66kd3HS6RySE1",
  "key28": "P593nxYjQLWBsLkGXaCPJrTvhvMEQ3R5D9ofLSQdqsitU7RK5Uffx798VWMkoBzVhVvMmeb9nAsPLcdV3MrnoJ7",
  "key29": "3Mx23urcm8j9a7xNEAkrD2oBeZN27ediGHUVYB6fEExLKFybJpoZ4oRbq4i1whpWHGY6uc1u2FVLQpXU3TBkWhYE",
  "key30": "rUuM9SwRZ9tdU7Eo195PBAuFssFsKiMYwDxZnW7iAzJJbNqRUuwbLKAQrcd5L4j4XpHgsgwfhsUWNLrK5a7KYHW",
  "key31": "2WwPYaHc49jxRF8bHM756rXeCjtvtX1HMURX9sBfT3JdUXnCxb8nYyH7joHwQ6RT8VxRXfcT5voYNcKcPECp4k1W",
  "key32": "4mJRZCvhQ8j9WGmkzKf8WQz1c8Q9xa2fW9QzZPDZYpZPNd2Aece7issJcNLb7aY2WJFBCuGt2c4rQANy8oLWaBYS",
  "key33": "3nremvjDpCmKQyTf1F3MWcMkqCbbqrjmWhGsNtQwJ2cMRqhzTLPsGUeYUvEiqaVe723ujfgg1JxcTsDJGGuTRiEV",
  "key34": "39GGJYGgS8MwZf7SP6o1uB4bf1HJUNtfh13dNRZjf19QkiFoN27wERsoUrx2UYERnFU9TYTP914YJQxB6beHdaMP",
  "key35": "4jpC3ebPsDA7LWwhUBNSG4wBc95RC9pPSBJNkhoqC5atBRaok7qdwNUq4ajf8NU7uE9wbNk4c2hPne1E3Wgv4kr6",
  "key36": "3Bpw6rpH1BDg8WJ1TSFD8tYeoDuxCrcE7PJyi9H5nnrvUuihHibZE7sADUwfnQAsd2AzPjTpLQnnYTu2Rh75Hwji"
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
