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
    "uYkZBpcuUZBpX1cwHcJkJbuNtMbpYvAnsW2gWGuAZY4hkUcQSaQCnXm9q2dVcRVswt5y83isDvSVgGbzg6CHBb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGrAYh7RzbbZMpL1eqkXG8XFZNMsmpepWE7ydMGy2b7yc9A3ExMFNizcMM7RsV1vXY1GLGBfnYRNVR19J1Rd9tG",
  "key1": "64Zc2nVvoSiHAiv9rPwn77dLppGovvvawvKyy4QJbMwocf48GtjRz3virdhaygNG8Ho2wz87Emz6jsmsT56GmDuA",
  "key2": "2hHPdhhMne7CZhfaLcQVSv2kZK3YyPBjUs2NvE4Uyggm398gvLEYEFJLXHP3AbzEE8U9SW16uPhfCYkJC8mJHLmL",
  "key3": "2sydeoN8TSfLM3n5nNgLALiv9mNDiuUMYtYZrRER7SX9umyCp3sdZ8JkSn9SNwznbuCS2AekZZQ2YbYdCLCv5SmZ",
  "key4": "2VgDGBdcSJbozCvsvZgcskDQKLJ4CwMznFT78uf3YVGoXw4437ZxRc9dgaxu785ZiWSNTLUt9X8iRSUd3GFmQaeR",
  "key5": "2xcBAgtqRtFeTisbV4xWe52fNttzQTQZSn3RMc2kM5BpPr92KtS6WRJTfqZtVJfbcPYDGtysMjFtvVoVvrQNfBJB",
  "key6": "3hG1Y6XVHmvZAHHihTyWdVDRNLeJ51QpUrWqnZTSbrE8EiTtw8QBqEbQ3LDJK6PkfW1q8vU261PxHjm78VY4fHvD",
  "key7": "5JdtuTKWkkfDT1JYmUjCka7ve3VzrQWq97aCcbEkqVYDeoGvgTgThab23Gn9YNinLzSeZRR4D37GTqsABiszV6ba",
  "key8": "5uP4dS9sQx99UbUVLswCdcCbZJvgxFk2PXS1V5RAusiFJ4MUruP7TFv3NCJx6B2zhMudLAbgHaPKjiPz6J9tc8dM",
  "key9": "4zdtXgUYppNSoZMjpbpizuyLaLRU4eZepAR2oLyx983uHEhyw5mtACtv2tmysbSYCvRGkdURinSkMH8jf3RUxcQV",
  "key10": "z1APStcw3e52Mhwhox9FZ2CWckSH8NJCQHzNsBLMvxTSJiYijtWoZRpktNRjCvxAS2VpTsxZrb4KDd69axUUxLc",
  "key11": "5yKCMDsP8AB2yCdDn47o53NtFiLZUCM84Z1V6m3nGVdSMZKuoNEftCjfapbTyA1B7FJx49KPLW6yinCUxCTyWmUT",
  "key12": "d4eF1RV852RpCXCFwyUoqDVaWEuyqpKaePcpDN41hrU3KCkk5BfnoeJY3DmyF296wk7gKQ5zjzcacxuL9sFjxJp",
  "key13": "5PC423ixuV39iEdyeLaErzD12K3XuTb9cRs82kVUMSCGEzFQBxfVanyoNCEmamu7g2waKPRM4yHVjNDrq4NPXoD3",
  "key14": "4sLVqW4arqUG9JGVhJfXSaQjho5skeafcQ8ZPJvQQrm1cg7eZTsGb7KDVg29eAKVLYNB1v9q24Ufe5kHkCnTom2",
  "key15": "4d2BzLw84ZA7StR9Vzj9o8GkdSy8w3ZGpLrnpnX47z9RMkXgVjGJmVrcmxGjyYGAsFneWm3JpaUPgy4KQ56c1ppw",
  "key16": "59JR9ApBKE47QWGHMBXgz1EQZPPgegz6uiyc9fiYYPGQRfAH2mjnW1RzdQa24JL2GNzDhXbRKw6y5AE84HUCQV8d",
  "key17": "3LUE6dtDcweqz6wJj4UTmMcxKbyyTdCmSNcTfMQkyYdcNvFkoXRcy8Mz2Zib3r4NMXhz4PzCNWuRSiqrochDHnpf",
  "key18": "3Ft1RSR8PcXuTjzgkvUEWXHe4DmZRuEAqauaAv8phoQ7mPLxkTSdXtUoDwdh7vnT2ArgNb3tB1dFvuWGbKKCMEzy",
  "key19": "1kfEBcqpuuG7HEB8p3qNr4gNE8zVBcDVgYmkBsX7oFoo3ULZTW39tgHd8FHd3EteyjsBsxRxZbJpm8Efri3EiRf",
  "key20": "4XbXHc3fjruf5XrBCyC5BvJzD7dam8eSjn4mT5NJscGudgrbLnxoW9mBFf1GMkpuXAdwmzZmk1EkECkKFns4wDxL",
  "key21": "5EBFbugWGmdvQYXwwU1ZJrnq9Yt3P4hWYVpNMeK5nq9BJcfYwfC58yw3jatpae6FoRKp3SbhqEtE1gXVZsTfkjD5",
  "key22": "uLLC9wDE51rh7PDb8vXow6dzsesHcsSJzKV7vMj7QoESUHyGumECbvUjxCvcDdeiVBZkL8oAwPt65v1bv8CpaQs",
  "key23": "ZtLcy7AYXJ4cxwinWshGKkt7QpD6cWE8665Ne2qQPKKzJfzhXdYMqFXrowjbufjtVhRktdZZYr5Gwkj7B4k1LRF",
  "key24": "5R6Wqgs4h5GFa3cD5gibVS8w32458kVXtrWVqPwkM2dfMJaY5Qif49QQrivv2h72XrsxaLgx1yTuUw7qmg6zrXf6",
  "key25": "2X1FvsPirAzw7dt6BtgQZWv4491g5Q53fyFRxptZPGzQw3viYBfNswiPKPDVQ3NzneqLmWcitQVzgEUpM7xmuDm6",
  "key26": "4zKoFN437AZQWDjwcPmtUmbimxFZjF3Sr9gdxgVwZLJSbMGgWH34pJR4PwTXSHgLeSFKpDVgG7wqigBuQEaNgTz2",
  "key27": "2Dc6YPcuQYpcDraLNaFo9LvzLr7JrHDTrzN5qhnQVnJzdQYZ47E9MR2VHyfbvuaU6puhSR9MqZ9UGWABQ21BnURq",
  "key28": "5nkgQdPoLoSPMbDrZ7BTUqNKvyTPEtJ2RXqzkFUXgFhu8kwmD5KDy8uA6BnLarJcdpo4HC5ocPEK2L3Ewojsoq9G",
  "key29": "2KSTifqMhG7BTAMmcoHEVWS9ruKEp9sEAfaVFKNP8FRgbKJrfZVpdF1scKe7uSMaHWQ111NNaE1iQBCcyFBYY5Sb",
  "key30": "B8v7uKZ8TnWmYaxqeVXonXYVZ4gsv89KAGawtUqScV5MW1VdkiatPfzecJrp24WPfAFfPFB1UE4NyqMb5RRoCHn",
  "key31": "5trpZomjQDvUQqj5n7UESozn3ctjyMzy7jFKUmoEvD6jCJQPyAzgrmSyebSgzLsy1iAjivN41ouzUNQM62uc2t9U",
  "key32": "gZ9VcDFtBDEfLwH1iNbJgYcYwVUUiSrCvriZTkFQMDUZQrsdiXrTc7T8L57d9Us5F6AWF86uAioBv6FR3gf4rdm",
  "key33": "5dtbMoSgZx92Ld8uWjeiYEAxd3atnLN6P9RspzCYcbWHqRbqXtip4f8beMTXa8vfVfrjzMvRFaivDuRc2GDippGj"
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
