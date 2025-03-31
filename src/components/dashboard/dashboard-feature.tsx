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
    "3PXsMiL6G4EMZaC9LVBSHVufBWPJQ5Y2jmiUzoBQwzQ3HJZRaLnV5yMG7mxVLBECvyGSSgqNkZ2eDG7zdbYZK6uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAEqPCeESpyTYhqiFaUoNZfE7eRLD1pmeerv8UHWL6gESXDGDfrrXMxoi7n7HiVJ9Y3VHqtzYjS5gTAtMwBoDBd",
  "key1": "557XpL19cXfvbw1MGngARfXkqQqCgdpkqocBuGEDKQXBN8ZMai4g1rKFogQta7MxbPjDysHkuGGT7QuXyCTve6Dy",
  "key2": "2a5AUXjwG2viS6WwgdXVTNhMbuWtMB7Hjs6fJYo4UcvPb1JjfnKbF4PmW3xwLu6HohbMKrRjzpb3iBBgiBsWbY6D",
  "key3": "5Lodsbw1twzeVfjWjJ3vEsX5nxRJXH2nkfF8XuGDw7P76mjoGybNdnUjstoC2GHaQ1bdG8gsrA4enDMs1jqZhUW2",
  "key4": "EHQuL5asUCRyfmftkifDAppD7ceKLusPiGj4kR1ms3vU4Ux1x2SeA8PikY4Y5E2Rk4iAGvxj6RPDCgCNGRyhjYU",
  "key5": "3yxyvuu33vbRLnkc7htjx4UEUctQFS5oN5DDyiysYsi6ovtxZ8RCLd5RihvWERjdWxrwxf6ZHN72o24nUtt69KFS",
  "key6": "5XVmQMB4dscosyZDT3Wrbo5aC1XmiZxK3oBLxePrqgwniEYf6zUQves8n31h3Vq4Z8WhFk9JPGp4kn8bV8fpphb8",
  "key7": "2oQ7oEjgVqCp9hJw2WeAUtoxxWAJTFvZzy7qox3iNiC9i5GMGmwgbkkLwLFpGGXe3A1DLk7C1NuiF3bDwzgkTqkb",
  "key8": "51NM64UhNb1JwJwacG1ELWPYwmXVnFAukTiVH5tkL9uqLdWDv7L4NgZcaMiSvtdnt1cot9z4r75WPJRg72LxQsgV",
  "key9": "5hHyHg2aEQmENUG2p5ek363V7YEXseC8byyrg6CqQTn8hKw2HWuPBRStnWbvGXmp2hDhHUZKncHArRz9Gj2J8KVy",
  "key10": "3SBqY34zi8VcifFoVaEjyQaUbNBGi6U4Gb4FYB2tRpcJh7APHxeCoFX1b91seZTEYMzRsciBYQUcevDRvbbjygz",
  "key11": "224Hpk97koDEQshAZAqhSoySSebrNJypehfizjtYUKJsGpRraK4EqmKRaxeXtoZEKNTUsNHBq6uEqvRyhTT4pyUt",
  "key12": "34VjiFmFvo6o1Nen5UCMCFr4ckt8ysntzQpKQqYGTBzt2NLCvb4HE5cR2YJF6YqkfjB53uTsuFUFY6ydTqwNRsoo",
  "key13": "2EAMRJyWcskHEmQwtWUfyAWKMWStS1RvV26vcqhfwSkWogs4wJ63zboasakgCbBSxp35zagTeN7mUoNyU6efnzmU",
  "key14": "3fjonp7CBGcNftR3fosZMzP68N7Ttv8XhiJev888jDCjDyLNUSsMAtyyC3ws1Jc8MAN3qiNBGG8XNRjMAGYyfZJu",
  "key15": "2GwcefxhEzAbVdPLXNqrTn3Q6KUrthzuYvmAmex8YWGNgpZM4F6ARBYpY6NQonz9QNXomiRzfpedgSoc55wKYnUb",
  "key16": "3fWubdBkTZC3mCjQoV6NriAFCo3nZH8uLiugH8xKoxy3gGYmunpkXAw1BKGAvPGoCnhCHZGjtH81rVhHCywVUC4D",
  "key17": "sJmJSj9tMqb4QkzxAoF3vtBKoFHPrmYCzt6xZ66RL1jEuCdmigXh6z1SnYHUTD3fpfer3nAo35SGRYqLG5uwXwW",
  "key18": "51rVyqzV778gWrhSsw48x1FnXjvHnbSGH1SrGpnjSnGWzGwSKFsrHckYxb596QmsmCMsGka4BJRC9nwGyuNCfnL6",
  "key19": "5ke4KhwdMHavrBY51qkuzfu6vA3hBphSKrf8Bc3vSeBmzP8nLAC5gW7NTuCGMseacSda2B6TrgppWECQF3gGFKxW",
  "key20": "7HphUJaMC4B4EYaRS2CFWD44iLhmzUp3UKCpMGJKAz45vbTkK22EEqdcxBN5MJJGBU9YgLAPZeqSEb12UXhaYfm",
  "key21": "3iuo3rPny5npvT7RhmHZVrJpkxofKM2TfUsE7mshJaW8R5JZnDUSLrfKxXVucXZQ7AdUnLqA8kKA7XjWGNTyEbDg",
  "key22": "2LVjvCYWP4rgXXsZay33rA75bFkgRwoeyFTRHdPbvmpX4Xe159DH46a6jtmU3vM6yKTCiWzU21s6Q67KKgYrPSGD",
  "key23": "4Fxuz5fK7RrRbVALGyQBbEXtfkXXuqRVFdpJWE5rcdKMtnTVo3TzDfTBBDWpBTVNA1RpAYLADPAYtRi1TNNsVntd",
  "key24": "5cEdz7e2ny56MP72e582pU7GxZcnZWGby5a5nHGezMWtJRvBAF3Sqz918UkWpscQAvAXbqosqqTEWpLdC9sDh6MT",
  "key25": "2ramm5j4kyoDZsp5b74NAJnyavrdodbs4PENd1gUwLoF7tCeQaAVyT3HHpKxN6FQnZz1s3pHk5HGW5MSecjt1hzg",
  "key26": "4EFbqAuWcf127PFvSdqR5QCbg2H82ZR9FZsiksmYfwqE8p9wopN3KtPMovKMKxnpearAavcprzcYBeaV9MDSGbEm",
  "key27": "brLLka1DSwTsPHFKx4iBg7ckHEuwnSzDq6wAcL9HbwNCjwvhvCsKsefUSeVM8JfijHT44yn9myRT98HqNFtK9Ka",
  "key28": "3LikocVbz9hJsrEySdTBpz7Ua39zrZQNbPUi6xLpXcNfgsdrpNv4itRNhBKeX6m3WntKM34KxA5o5Qid4izJxd9R",
  "key29": "5jY8rUfbTFRDTYAwu9Ukx9AdJLWPEEQoCYJsNiJQqeeyKVKPB6fDSEcWZ5zCvUfv5ytXtVY71unC4HPDD1pk5GZt",
  "key30": "5unngPYsq4XHAXaYELpXV2B5jiYD2uKPDTHHcQwvJdAFHFrKX9GidMYaxTYpEiEwJdDc4rbU7KuoPYBoqfBK6na3",
  "key31": "2FnsLXor3DYWZp5xXvxrxyMCBf7pabgQQoXZw3UGLYJCUtcProSZWMY5FhAZkeyyR7Fhj7fTLXbqQqPeme7Jiyik",
  "key32": "5TCYyCpWEamyNquPT9xwvyQs5NgeDMHTrTHEZSuVDYuxfg4XNB5yp5FnecxeepBvUbYUxMY66AcmweCXxTqkLXEw",
  "key33": "41cMPq2pxoDh8pG3GRSgq4E22cuvAy7ioghEPoorj1xrivxz9EHS6smiNVp6RcuWv2e8ui3akAsEoR4vtbeM3V48",
  "key34": "6ZWn4PBqsHbZy9fseFCU9ZcCjTFR9FVXKTpSneEvorEdjgrt4Hj33pnv453W9JMXvMHsq1hif3ou7jMjWvLFxhQ",
  "key35": "5wVai3SNYCmYpH88G7cfDuZhPZsh94QokvRyLsENxcf4Jw84c61FacEQMkh2P68PkXddgfUT5pega1o8tZqaYkom",
  "key36": "64r4Eux7HPyCcNyB1ZfcvadRdYrAWpxJKEibm8UhGJwqGecF5Jn5WXdqpobK62R1fS6gGGcfc15KraXnZ9WiHYKK",
  "key37": "519Q5RaKUwvtFdDxP1NwwbzmD36VPZ4Ck6BPj9zwhiWe8Nn1hGFUAWWWN9MVGSszypnH5GhuPU1tf7Bh5fenQbK9",
  "key38": "3fWWeQbCu7n8NAtfngxeG82wZPLwJPnjMeUAKtBWxCjTqkChH4CGcE3X7SdoAykELpPg9vft8tytAqppA41fu4zW",
  "key39": "5N5Yufk5wsTUetMjR6ramDbvUAsMkrm1ktkCLCB15BDhq69QqzptwDfj38tEqdyKgGVi18AttRQmRjWtaWJWQ5jv",
  "key40": "2kVai5SYVB3iyTaMCpboPwnXmKXKyYo19ebM12hUJ23eUHjcC5TKryFakphsV6RxtVixCfYoWdCPUWMJV5ezMqPk",
  "key41": "5Pnv8LVVs6wxNzcM169YC9JEvHMeFAQztFisG7m3wewNPhvVDBxWSRY2rfX6UPsXtfQE81PmR9WrJjmy8TBcYp3T",
  "key42": "8pb616TJLfJwP9B7daDyLxGj13Jb5ZrC6KiAJSKNJAFBogs7hgPhhBLMnxearmmofXeBNZCowwCt8bKzrZGU5CB",
  "key43": "ZXu9wvw1YGDFDUFEW3RgMS2wmmp5cTeLRwzZvfTmtSPEiFWHT9VEgB5nKJfAhm1bSiavjM3GgK6BidnAP2LpCVb",
  "key44": "45UCqS2QTcT1XRdrAYNoxTSrZb6R9gUFJppc1mgURq2TkR85gbD5ujkZLxj3Qr9pzC9HYeZkoCCv4S87ZMbt6tib",
  "key45": "4J1HGj4MQ6dLcvTdG8S9igKbCqDJyUMTL1ji2cGZCmXBHFCj9sKxzYuLpb6Nz75EoX9YsMkB9R1y7cqW7eApu98c",
  "key46": "5eo1LPCgsmJMJXuRrRZHtvC8NbVKR2ubDurRBzR7ySbdZMh5QQAyJES3zhFTD9t99rEismXJfm9Uj2nNDfrddjdi",
  "key47": "T1kDqu6JRSDBqqdCsACZxMHtWbXRALfzWXgAmJ3f7uvKWvAV46ZXSgJeoBptMsc8Q4YekYJBLZQtWsWUKKhAARK",
  "key48": "unBTWp6ARrX5EBUiQtky1jhTW5PZc8wGtQ9dSJivztNKuM6rYaeHZ44UVzkpqByonHW3UHpxdKx4o7kSHHarZg9",
  "key49": "36X6d5jwiaU3tkL8o9Arb6wb7sdUbp51EUQnpHTcwzA5mPw5nveLgMEsAKVuQe7xSq4VTd9PcLS1eroWPSs4XeUQ"
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
