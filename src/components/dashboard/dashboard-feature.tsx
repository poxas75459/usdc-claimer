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
    "5RWrY4q1Cun5VEEEc9rT9hbvSp9BMJsXDtVoYRJG2UbJ12nxoMSEv7bDBc16dY6pE9FN857ySLXzocS267hJPJhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSwxwdBm22z83s4E118MXMB759RTdufcnSDSFX6vBGADAa2GKeAeAV2PRXJ3wyb7PGYHRB3ybzPJpcYUnuthgBc",
  "key1": "3pGAPtYLVgyCghETrU2vozF8AWtE2Wgse5EMREpjc1YkG9zk72Ri5bb5HNGK1wLmPVxSnTX8S8ST8a8WY4MLXuKx",
  "key2": "4wJ2NbukBmhk4ENfHs9PsjCAgFQ8MTZDLAHh534DbQDbN7dMTTpwGYHezvfM5vLgPxVqXaMm8ovYhjoJHa6uPW1G",
  "key3": "4oH2FPN4z44KLBk1mHymbHPR4Yemyicr5D5i44gzMJGifru7UG9kygtpgJvWQUE9RgSQUaXe5A7gtHVaM6rSqrmm",
  "key4": "2oSX9iH8NpDTJ7eiZTRKnQDSof9UV3EMjbh2Nujjdjg1ipFySgsTHcjZvqazrhJYptnUVQ57wC7RU86KgP7Cvq5W",
  "key5": "5V8J3dGrrWXYjs2aXCYnqPwmP8TSnk8YsZsG6gLaaxzVujPnCfKCKyg48NpfhwAFNpuyrLSL7zR75pzoULYGHP4V",
  "key6": "a6ukjSveVjgHXVrd6bS3wrs1q17VXqrc6ue68juRregvUDpoKN3MqbjSYsh6KKmQrbRLxFdmFLLBVqfQoYEXaxq",
  "key7": "4yqqBwpbd3AxCkmeNf5j43LtYz7fSSwnLfJPVrqETbmo3NzR2hqWcsaCEj9KUmPfhCq6kEvpfZXgnmSfgDSeVTzc",
  "key8": "2SSE34pxAUrBESNxMGYaQpHQWHjksTjHeedBMgCBs1uHUg7RDyHxG77rVMwQHmekvXPuy1sXPgKQkZkebrvbazF7",
  "key9": "4jbv4aTvP1T2eXhLFAHubywJ1Yqzu8ktmijqQipBE9A5Ma9sTEguHdBKxNF4hRDWvJzcT4gfh2VBP8LztUectuUT",
  "key10": "tshEV4m2D3yos35SSh8gotBPFFjjsu8GPpVm2BdZ6cQLnDXERQEgvE2paC4s1BzyBz3bEZsJcAGRtBwW1oEipVx",
  "key11": "79eGjeSRKpK7aUEjdxFjHMTWrd1fUMHxFX4L9tqTUFMqVS2aYDNHn3hhjk7A3fiefjF5wzzkSc3LSwwEPky44Qx",
  "key12": "h1ps41M5W2C7KT4QgwAjBLTMnmV4CWNCQ9VqzU95GPcsviYLSq4nCKbZxFgWJbkkGmDHPT4ZF18UqEjgGbwKyuJ",
  "key13": "GpGB5cRuPM3BrvujJot3Pjiy6jo6WYLG9h9pufzbZcBkugw3njeXW4QizsDEX2jpEND2CFBqvpYjcjzp5uiLQNm",
  "key14": "5YW5PSFAxmK5iQrN5RUNn2M5NnWUp1tYopQPhRvQVvfmxX2gUwU1TTVdxStBwXgQve44BJCLoL5P9gGiTKPBgT91",
  "key15": "5HmNCpwN2g2ynmzmEqxvHTifwpV1xknRvByhgsap4RZ6wVn3He3RRzKKtMxH67rZtfCY5gyc9yo7Su2UPuiS3Qw",
  "key16": "38jyY5YDpY3F4k5US7LQy12paquZZPbWZar9yUqZwZ3QLpTtp51K1jujQivnrZJZ8jnpHErbkzaFCsKNTjfXwgov",
  "key17": "4Y8eKGnoRqfDYvyjdrdSUjCv2ttABe8iG9E4TecBbZHTZvsjcTNmW2cMKbtEhmZPaWygzyvqQKR75VUktkFjDBuc",
  "key18": "6gptJHQuvtA53cJtgdvcKg2rbPpMNUtCdpxYvWv9d2tB99apthUovaptPaU13owFZ4qUhFDw6zi6p5uq946vyM7",
  "key19": "4cJ8s9bpkZkeemfYk7cCSgbqeT1WrQEbGmZXGoqb8E5L6AMeRwHnNm3metrTTNN5Nb6tccCLLrXSPYiv7GBXd1z9",
  "key20": "5rAegvdrwrmyDh8b8CjTfaHBFTgKAJ2znJXMSSnUyMp6DgMoCxVrTf3n1t8u72iLtNMT3Zwf9us6XkeE8kTbAYM5",
  "key21": "21K1s8kZZNRyjTkYr54t8iSf9G9HUfQN2P3mkUMG35yXAMBTzZ9FVssG1EZ1coEyLyqQAecpPyQR5FnCqHsRZuTg",
  "key22": "3ozVCLEHHm2jZdQdGkmvghwhVKQZWYt8KQZ7mi6tBBJh3rstpRTQJXSMEMksPVMP5wzQcAdNXzrSqAA7WkHFBZ6L",
  "key23": "3G92Xov6fkbfwp1QrMF8vkpX3ZENRphfYkz4VAktqqmfWuz7hjWT17AQ1bKcUBfQKcH4rjLpJMRtGTzLF7nZG2RE",
  "key24": "3QhUYpGRkeCZ7mEUqxdnqBaSEWoQG3h2EA4SwMb2NxMQwf7T7uZLfWn7Xw45XKsMKXT3nDQ4AU6cQHfXFYau2yxL",
  "key25": "5oFoJvTRk2Hhwi48jNTw9nmdzD5wNbL1M9uQ8NiR7NwyBVtQqa3tpUz8St1ayMTp47RCZWgaNdJyt9C2k7FCuxLQ",
  "key26": "2mQRv2GxfCMo5SGuDPF49hjSHEk8SJR4LyVtkacXNCgQNbjXU39n5u1Jwdb8DcXouXNwcryGXZgSZSzPhyEayYvX",
  "key27": "35QY2eixnHHJivmbgsKL3Q8ugQcnWdWU3aEuv3CgaX9p2fRgYXtcMiQhFYGz3186teqngdbSa653zxHjSzbybXMr",
  "key28": "5nDZkic37umhpxCFf4f3nCPgYQXVh4LEdhgj1ydwq8nWypVqFnVsBjB2iJzDCvDU9fT6211VLdHz4jWu4Rm5gmrx",
  "key29": "22YURSKjgWVaVBdk16eZ2Umk4Hy3pd6e213bRYc1ipamNmC9T4gEJFFsL9Yc14gCVrXFK59Jk1ZdeaWoo8UdUGrm",
  "key30": "3tPNGDMxpeuJCbUMMF55drWUDjJZkzP7cyyo4Q3VTQK7sALniEPWs5K3eu3k4kY1P714q4o1sNfQ8SeQU1DP8kYt",
  "key31": "5ojs4FRoUaHffCbED5bxi2iEAJg8jU5R1MefF46UgG7pYrA8pF5DRL22985i64ZNrjF7ijvPDDXmZUrQ9Mcf6YiQ",
  "key32": "4dzFtR8Q3Y4stvtCx25yL94zonFTScszjxYND5WkFWA5RCUGzKZzTTAsKq1g9tqnengeZQKsTCVa8yfeQnXmwo26",
  "key33": "2eLx5GpX25UrV5RFz3FUD5Tbiury8YGNECNcpcbJ6sgUpGNVxZeCBxWHUr9abGvNT72AusqkR3xzkpsE1sdNvUzR",
  "key34": "2uPeHSTmCrwrM4dqFqcenTsbzQqC9z3Hf8Wyz17sPB3pKC4WTYnp1Ew1GsSRgZXqmhxBqMbe4oBZutki1ZdkNroi"
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
