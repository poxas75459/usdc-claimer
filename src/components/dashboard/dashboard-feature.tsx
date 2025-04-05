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
    "4ZhG8xtckxgsDS9WHQPHkEEe1wCmfgqbYtXgS9hZPR33KkUPX6J34CEBRapa6Ah5cDyCiJVXNFSqVXAFmh7vcWMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3T7Ld2AxZcoRHC9Mm529eU14HkfhpQwBXU2cwJFGLhfEoGtTLfmvmofZGS55qFh6r663pydfCzUPrT9uVm5TgE",
  "key1": "3BjvAVuuhQFmZ5bPkqEYet7wHTuq6ME6st5M6n9Ho2NjsGXoQn9Bi2xDzQSXcCFgLkdk1WiaUqPF9P9qm5sRyE5d",
  "key2": "4D6i6NraG2jw6pbqCZLCEKHUVLkCTKyw18ATYPCn2GymMfHW7xnaXTcCrYTwAE1cKMKmNifPsZDtHJK1UXzeCFWN",
  "key3": "3jxre5F1PUYWcVEN8kiEfDQWK9dKRUUB3eUQwBf3YhJG9Sge3PSZEkSahhBcgiFwiu3uG2iNWa4LLffScrQKn8zu",
  "key4": "4XGyMbSABeB4oM4fMxn5YzWAXYboCArHrncBd21PacUZRzATpaWN9JXAxfCmyMKk5j6635HNtuYg4TCN2Kb7q4jE",
  "key5": "5Kgh3HMqWC57RWBn27oPVCkdD7sNfHfxrGubVfTehnkoCcxLnB4k9GHP2k5gyaesWG96weuceMwXQw93Kh8SnfGz",
  "key6": "4ctzvzw1JRyy89vDR2wcyFacKLo3Gkr2MVC6PmkM3HsUc2wGBDYvwechSMhS657L3woTUGqebhPtJ9imLdT37pF6",
  "key7": "4a27UDS4kcruKAqo767oVs7vN2946hALS9PCVDN2stezH9RHJmouJsRD55BTqJWASoRxdLhPWhZLsgkhe5AqQ64g",
  "key8": "yGig2sxf93qTUguzgna6nZpRmeczavSZBJhLerooNVfiJkNQWBAw1pezmmrjA6z4KdWfYTeznepFJ22rjQdhpG5",
  "key9": "3TTUYF8zt3tNrFm8u248KHXMD81TTUspLb7ykf7cVFBG8Hwp5uJLnYMj4uXdEKLehu7AJDJB1CYcKsFWiUGF7htC",
  "key10": "4dJPKyHJXM6b73V8WQxSDBeGyeTCPuK64b8M5wCiBcHX89rXzCZhnQaqfzSAy2UBGxp1NqtzrmVwHCD1CMWLwKpV",
  "key11": "4mFWKgiScHzEgf4bpdnihy3N1iwB7NDM2rgHp6A6UEn1W8cVPSAFvAsDP5mUZ9xyVWdGR3DjoNmBe56v9SMYx73t",
  "key12": "4nVtaHs9FNy7KvvMgEeLMdecKKwHCktHdNz69LmwVBgSmM2sr2zvxiTHCnEu4mfmjwTiP86QnnJghbwUUmgaD6nn",
  "key13": "kTvtKM4TFQuyhJkgmAx7Q8SHgqbJfSyhhduerkwLuTFs2F1tSeRm2r5meq8o7fbVS1x4pZpiyrRMwPmN3wt4yAu",
  "key14": "5uPsn3UwDPWVdpYiikeRNNbGWWRwT8bFnYDL1bHnWmWxoPScouhARswnoaZuRpiYQKtbJ7EbGefnxfzn3ohNjubD",
  "key15": "77TCpVmMEtqgYREa7HrnNEek3QBwBHpc3u5b8rpz5tPS27YmNDbPNtMEY1hrKFMYZgeaNTkjr6d2mpLfWnZQgoA",
  "key16": "jPuGkGojFoLgd7bQiPm1YJrN4QYG99XHJYV4oa78tnLQWLf6Q8tnsqX9upLE4FDvxyprzJHnfb9sPq6ipGztwZA",
  "key17": "ERxgiKdkfBNq8PW2q5V2c9SbzGnP2bynkVn25CrJMpvsE8VMJgPfsfMP3KcJ5qEA5NzG4UvPHjmYqLj6sCFzFyr",
  "key18": "2CnXBbJrmSw2zt1zK4DjD49fXYodahDmZA51aj7ZXfxR4AR1M3oXmPN4Np9b8tACZNmACJRosHRCUWLJrbYhj55U",
  "key19": "DbRyeY7cqmxYE5RPVkRAE7YXVsDTud5RHX5K8xKnHRGvoV1BEGs3HMUbxCM9H2Sph9kXPcguh1Wkd5q3GH6sUz8",
  "key20": "4FFRphsrPSajwgSZsuULB6QxE2SZGuYZchG64jmF274ZrnnSWguQfymT4j9F9UaJr7RRiuVr7adBRtMtvXmZqTLr",
  "key21": "5tvEYuvNfq7aUcSyg1njYwPqUgNnqVdEi3qiJkCB3cnNaZWhuS8HK352rQCq8oQdcpsyFvDKHdncwnBd82p7gu6h",
  "key22": "3d5DN62zJsJQRg1c8UNR3jkhEM4gzv6fX39tUGtd8KRJc941vteMDYp9ec4zai9ct1J7HqQhfSf2hZUQ7Y5ySwWA",
  "key23": "44EP45TKGiVTR4fxT7x7RqXpfd4jznoFkj64MqVTvBw68kRpHxkjkGCEcRtY3MQ2MwMHif1aYqvV13qjYq2Zjrq6",
  "key24": "31yKAigKahcrVBStxMGQGte3rYkMJTYVZgCbPM6YvHHX7s2dq29sz4FydKbJZsv4YDvEum2at16NcaiXZzXrD5GQ",
  "key25": "44bUzxeUsx6oyUGXogXccxb4ifwJyYi3ohQUUEHMpnKdQfz26t3RJJ7pVip68ggridvarVGUExnoh6WEYYnYLbxD",
  "key26": "2BD1KyMRX7xYZWDzNNEMjrAf5SRhREeBuKBDZZBn1WArw2sEatdPoYTykUnoPwxjjh1RMizUXbPEBC4gw1ZMDUiw",
  "key27": "3rmxPDRXDby681GXdkTRQPqB4ADPytMuY85ewipwtiUxBbC1ngWZp8RWyhzrjfmbyH4tSTHjx5XabMCcDfq9sSnJ",
  "key28": "jvfKWBgi9W8MxiToqJXmYZvYD48FnngY8vZNpYchpWUpSvoNm7NxorqAJHobshrf9qrWQS5f97hMghSaVnbrxf9",
  "key29": "2aEpRpE3hpmq8ZDWUMUZEKC6RZPuF6yTjJWXX2aa2Z7WB22vSmxM9fKnNfMACzJBzt93nmjpMP2rKFNmEcQgbs2x",
  "key30": "5rPwwG4SmDZKbRUn1srYihuYXx8mLSVzFpHdS1NbMt8uGUAdGaybLi3pEmoydDv57H9r1MmwtrhF4kcWAxuHr2C4",
  "key31": "4JdtuYU6LWR5B4dhFVgLTKRupcaLnZLfB3Tf1qWmx7H1FijsHBFktzswvMwr1TVKgiKuwvEvtUBvMhYZPaFHCcKX",
  "key32": "fBk4Fo3Xw3ioxcqmuSWUTgqhq8HGJc1CKssVZpQZdWRbvhBCeAqm9avoeYCQQEFwcAQ7RLiQqtgqXTyAwdFtPtf",
  "key33": "5GDJT58aHwYXRGPqsxtctTcmoamKUb7xm111VVLtbBErtpf9786ksHLDYrpkHwsQydD4NrjKRwForKpZnkcFzZxb",
  "key34": "2APdv4AStBxicCLF7f3eR7vt4MKWVrriRLXi2mnmxbrsnG4eJfjFas7QALjeEucJbyh9UbhVmsx3Lur7CsXCnNnA",
  "key35": "39jzJfZbMP6anLgyfMn9NtmNipd8sVVFfYZWtACis9MUW5WYnYaAVYRxWJC29DJciw1nwQeC2KTiyHfVMMhmZiXb",
  "key36": "2QPgQnUrZxJhu9mfUxRNcVdMKWBvUBz9HXVbB7VTvQVbvXe2tTW9ug7ghNQ7XRrkjPRCGgJK7cbzPsARBNALzFzF",
  "key37": "1s62KNFhvvCg6KmwWo2mRz2WH2Dn8BS5pVwqPst7WELJ8kt3cqZKBTsnMTzdn4MtK7AojJS36JESrBox2ABi9EZ",
  "key38": "4KnHQj67zpxJjugxynaCCiAp1FuWoZqq5yzuHBNDJnG293sG1WcjwCE5BrmRL4zzruPMKgDuukx3uAWrzChUfLcd"
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
