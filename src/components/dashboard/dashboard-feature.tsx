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
    "63TPCTr7vY6FMRsexuyYKNakBdEqDkJyw7cCAe2oi6yowoeBMm8mfvgCgHd6qpVEsiAFiQDGWu4QJWsEFxZtEAkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W1CsDZuAdFRqmG2ENeEZYGEr2TBoyNdmCjSVhVWeZc8GtGSozkmxWEFQRCXVMoAifLiqbeM4MZkT9uLFy3GguC5",
  "key1": "2XtUKFYysbStjXQ3nUjkS6NdwimG8VVThJ8T9dVcqUJgxi5cZAEztvNDJvzbnb9Lo2jqXzQfepvv2XDfmnxbpHoa",
  "key2": "2fZEsMBVHvgJLS2P8bL9hgjKupNp8YwUMGBcFSfDDZzo4buc1h3CaM9FV5RDe5c1GN3Nc64ERhGrWVpzHEZ5fAVR",
  "key3": "4uPczwrncNi7weorUrXdZ45a6Sxk7nVhu6h3D9rbef8kMiBHX6fyY3idPfe1HdK1PKxUKh2QNQGZFnPv5j1q2Qtn",
  "key4": "5CJJUtgp9HCocD4kCPw7GKzCMuGyhNJoWN3JwJh2HfMmogPGx6cDxjsEzx8spDXkTtuPgqZzuMCNLfWYgX5o1W3M",
  "key5": "iyg5snpqDzmFxTTXDpczDymVAkMvechPcC1bMjY9cnw5YnWhjdxN5mvU3C1DrFgZ5bRTf1udj3XtFR8327rYnpT",
  "key6": "5RrABf1oRXNQaudJaSQcmQDdqsdAy4jj7mL76pSTrFwsM2ErHGERQg1rEpoHxuPRbMKZDNTgwMScMZJq7w98RSdp",
  "key7": "3quxUwngSncCCJvWqkkA4dzppuxdNuuGPPR7aEMkh6eQ22RG9Y3hjJmwopKr1vrtFgCQpfFbZMqPESUqDqdQZheZ",
  "key8": "Rv3ZX9dcKQFnijU6QQVhst1cCAFz4YzKQA46XYtBPEy9WAPixyitkTpfxE7fSu9EXnWNTyoBwsLemamxeKu4A8a",
  "key9": "35ueNdg5ZgzcoZu3Z7tsch4diusvEyY82cbpmw5mbyyCvLAqLr4L4z97AacXsfVyUD9mWrbB5BGCyEeUFKHsC17c",
  "key10": "RE9ncbjVm4mQtufmYRBw4QsdNrzmwfo3v6NoXE6AmP1Xw7ZsBupMcGThaDfEDNNBZphj2Tp3sWBGiYnQuQvdcim",
  "key11": "3pkNBZrnwPewm1AtXZqbrBmoL7Q2nfMzPHa7suWsZxRD8QpzPHM7YZf2ahAsq7ANDs8Fv8uMaZRQ8P181Ko2xx25",
  "key12": "5ntojsbryRtw4tKn3Fwh7CTGwmvXmzGemPyxcPZLd38CTNvtnpUJrMpFxJRBtpHoJUMTx1EEoFWKzfytoMFivShz",
  "key13": "2WgZVNFS7ETBStodyHcMTb1LBpxjgcoaYhk34PLbvAbsXCciTcnYUspmSoz26kCLmpHaSduCnoTPRjpSrqU29Z5x",
  "key14": "2uWjwBzRFjc6bHHgqz6tmG2wwjgULaNzksapL4tDtRfrSViZK5m9aYktCSCgXzXCMj3ojFCLFZhH3ZWrVHjksbXK",
  "key15": "2P72WrZAbHtdmxh1GYvB1K7uJqMEfRR8r2bTgwDNhHtF6RzPH6hkf8uPtFXk8UcBPFKsEPuVL5qiB6uK27UXg3Xq",
  "key16": "24Nsqnd9PbDSnWdjNEj4P6XuxEYMtb98cCWvdG8jfdxYDRDVHYba3pNDFJDRLgVHcGSTiYcEiYfwj8bY4k6ArpsU",
  "key17": "48FdmTsdfxswVFq8NFm4t9Njgho1Gb6wnYGjgSMPBwA5YYVUYtU7UqHshAwKuQqBvZWbY9FtTCUvaNNknjFco8Az",
  "key18": "bY7YXWm8uingNu3Q1Bnz1eY2xQ1WVFK52BqEaLZHq6u6KzxdksYJe7RJ2o1ZzPyack6qYH1TeW8hpVk6Qqi5srR",
  "key19": "5HHWdvZbe8VNoESaiPwNgajxd9PkyxTQYXwZULpEKvFjzEb7rezNMgDPntMK6JVDxGGeJbZ5viYGLftxJ7bWvNxd",
  "key20": "CL2mVUmdvSVq72LfX8JXRa4dbYus7wC5L5fWusWHkfzz3iaQ9VpKqHQDnBVdHN6vRToKiwX5NE4qdH7Hr8jQ6bM",
  "key21": "3qkbf7h1cB6cBLatfqBuEmEtdqhUxQG5kQazPJVhYLSrM3iAj1Pyqs3yMz1MRGbgJRsj5UuLCgnvnqf7amyRjnfr",
  "key22": "LdeGnSxMaQn5jzyD5K5y3BP4zZJGikRCakiC4QjpEta4NsVSNQ35erUfB6SxzX5oPHcFDX9vSnSezYuPW3wx3sV",
  "key23": "5tfvFEk7ujp2RzBodBV3SBff6kvXGVk5T8zhWtMw99u9FU7F1EjgkxHYjzCzodbNj5XPhBQvAp9phnSxiM7HoZdv",
  "key24": "2DxHrVqti9vc7ionPJ3frEVFRFZMw3uq1ywwccTNr4LPywgCnTf3L6U4YJTZjuVm5S8JhznYjGHbvanqfn4RwvSA",
  "key25": "a7Pn9QoP792xa3QmC3ZM4MDiFxyPJL3ExdNjQtRk4ingPtvdtQJ7JeQFrAt5Ss27hAhXxyZK7EkQXoTwN9A3U1G",
  "key26": "5putqZdiFHoW9zXexonPoX3pPyMoaM4KFacmYqhX2fArxsz2QdMLduXTrRMjdkndX3napNcJbydQ5VREjhQLQa7T",
  "key27": "5khD5pTYGRCc9W3aoHSKBj9jV5UeNvQCkzNvS81CjFvBNEtW8iXBZS7X324Z7mXfx5UmS6pS6v5BiSo3CPtq1Mju",
  "key28": "3iXxUNmsiUsckGt15jmBYZ5k37L8zMmRGiZfECwwABwBi81Wp1g5HSGTAMjKqTMowSVWTT2wjdXsRbgP7LuC1mhy",
  "key29": "4CPQnLSCT41vCttvuBBFKmhd28xfeHfQUJDah7qdiXsur6viSH8uLYfonC57hia8B2qCkVqatsbRD4FawXTF3tFw",
  "key30": "BSbN4rfVkTgqp3qV2bbp1wrghi4mndWPAF9MSsJG8M9S1WLxepTctNv88J8CBQ4hF2pemDsSQ5nZd1MXovxUZw2",
  "key31": "5ACHjLfz3a875G3tUaqo6aYibkN3CYK4pr8uTRniKoTVcD6xSRGWE7bHpUjcV8shHvCHHhpSdEiPLHdzay4gWGx1",
  "key32": "3wkyd6s9mdLNaLr5PdZVoNHAzeSGy9pbNac1GDAVSP6eppMXAbFHQMLQDLAdLa7FEHtEHQYQuANwnHHadajAwpSA",
  "key33": "3FeJAEsHiaPK4vKS5UKgBpePTw6cjxrpx2WcYjkRG1mi8xTurrvoNGDfHRGcs93BdirAqST5rEJaxmwar6v39PL1",
  "key34": "3fu4BQVUzSn7ugNX5Y6DKsLf4HNQQmTCG5hMGtBhc9ZP1vAgdzUesM7YuWfRErefCpMRGFFZoV7rrs1eWcRxA4rd",
  "key35": "3awTzEZwmsrKaPF4RzfRx9HEMbqeh71y2zpW8AS9pTFS842x7qDejeahkaZHnpMVmWCDppYBwpEYW5qvfAzzNx8R",
  "key36": "4QeEKn4pYVoN7MRNk3wR6KT9xUt6HEq2MhaXnPwS9EL2YyDLFzUzvEtgqdEjQzJ3fHQtoWCbwbPBNYKZ8Y9CpFSV",
  "key37": "hgnxW7sdrdRXykkdaGvYfm8w5B2oah2WuK6W9VQGCypy7SasZ5SSUdAB7MfSkwGeJ2GY1a2SsQeDwwktnth9m6o",
  "key38": "yqgpY93ipPh1fN6VynhBew4bNa1szNM4N58q6SMYx2LSfqNAMVDkZsbPFbQMVwzwmvoLNZkqU42z6SkibcbouMB",
  "key39": "5KWCHJHogMNjAKfxwkCyZ6NsdxtZwmxwqXXzVpTr5vgykJnpA7PJSUptEQsujZXKzckbd8NaubfcnV4ndVcN4mwK",
  "key40": "2CJ7NzSZEgwxqbseBGmRtMZpd7MMkJXX7o7T3vKQsc41KcFCwxA7Ho7RcsP5ZWBGtChhHnBzW78aKAitu8Dscw1B",
  "key41": "4cmnsEYjoWtUgVjSk171FKzPdKoXSc9oiwYc8jr8m1yBdUm3NquMh4XBNMRzroMwWRibE3nUP1JpoQ8YBLwQLZst",
  "key42": "PJyEvGTm1XDZkqaV7nrYBECwhhDzLAsFN4DsMLYWevE823ssgRofSkwLFPKshih16UCiJ6iSes6KW4LCKAgTrTU",
  "key43": "3PvXy2BTvG5v3KSqeiF6zf815hsK3vKoweikewMiGkyhGPiE888RwEyQWaUnmZ6xTSsXV5K58Mr6iLaHjUowgS8T",
  "key44": "2YGtdyiQYoPQZo3pSkWbWvqu4sdvNDXNNRQGtAsczyQSUU1t47sZ1p2ydvuivR8cRHjCX5wk2g2UrXDsnGrvEaTm",
  "key45": "GeWrCpkxWnS8wM5AVHq4Tz9GUjt2QXUKBnDdYvapLK7WA6vPoHX2xNRMVHgfCghh86SxEcfeyiNbRMPkqL2TdkQ"
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
