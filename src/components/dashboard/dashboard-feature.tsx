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
    "T5usqZLRv7GzJUvuTKfW3u5X97YM5ePzAfFaiSz5NwzfkMKwesgbHy8XcS1ynhfQq4FyAicvRcyfTgXbJpLFGnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPE5CpyThL5eznPXZYSH5XiVowKnpZPAYqve8StE2pPjinQGdVPjffompCoqhq8UzTXUQ7JVjAK1AK4Qk7HG67N",
  "key1": "3L4QPtbwbEjMneR4nPE6aTpGEUB4pJj6tP6EFqfqEnegDGoHe23gJJfegA3J2mbMS8eUq7Z38dwfKTY4nxVc1fsb",
  "key2": "2hx4UH6DLUYm3Ppuox1MC2PMX194xAsYZ33fY2nir6BznyQeEZ8AemmAPEgCXdFbK9oJB3KdwnCsfWrhyrbFCx2A",
  "key3": "3G8fSLzHgj6XHi5CzJBdzzwuQRQ6PYtUP2NPRLhYTeMF79qgkp5nmWQ6b2t3fkNtaqU3fms6W5v6Lo5AYYY3m98T",
  "key4": "2cYdwRhh4k8VhhwhsrTzDSG2y3UYSPxH53S3aru2iPuvdFFCMqCeuDxLtuUfSmbiXmMxxH6vTMxvVYBJGY1cYGSR",
  "key5": "64QJR7kNW24covDUMPGv4YsaYYWFXWqWDLETXMMp8UnDR45saXuKRUfJg2SJ33YaciDqiVvppMHCDtNTXZe8NKcy",
  "key6": "uKHZQDgpThuM2tm1nUZjpaGLQJCimUPv9miqN8nK4XtgShNs9jPQGxP1MMEoNVR7SppZKSkACW9YuYTb1ATWf4y",
  "key7": "4icsnkzHP1cfpffBbzAypEESwzfnggZzYpCADE2f8dnSaqD1nvML49U1avJm8MvmRCiqm4zMsxRh8uLGBHr6yFya",
  "key8": "MdcoqwnPMRSK7JgXXsV9BoDDZM3YN57ECFfDxemBTPoAWx6fx32tix8FgEV7rNCJZ7pWktBTGGL1rVw4F9nntva",
  "key9": "tusHFZD6JpwhtmkDp8NfezMCgR74R2FUod7V9d4iAyS39uoUUsHNSEbdZ6j2Ly5A11wK528hH5Wiqgb3D4Rr7Ck",
  "key10": "3KCUSYZCouAKQV1mX2cjWhqPJuwqniR12WW5js6oV8pFMQmpWL9uPRo2Rc6Xhvfyca2DbKPyqQqMjqJncrkiEjti",
  "key11": "3JsKRrKQMkY92LdnrQD8c9yjvhYiMuGiS1eLFAKcMjJrfsjmr6JsF44jR5qC4WD9pa56DiTsXFvJYRYSqD3jxMYT",
  "key12": "5HCKR4FnpDJiEsGzoZpc1QLzb21s9pkZbUzRcVcrnUF8iLh26HTBtVao6EtD4gg1CotYax3abk52QN7PTHceFgC8",
  "key13": "ypd5V5UgAFv6YcKoPxWyh3hWWheE8XtTUmq6PXi2CkYrE7a87zuHP2FCz37Lj2cGaBPNQpckdtDfqMP7iDmVvXt",
  "key14": "NpFWooqDwMtSRaamJVaMJdiRaD4a8CN2HFoQcwx4BJHePW7xptA3fkxr6gnQCppRgVrz5eXBPWhEZAcgTzptLKP",
  "key15": "4vE35phQBuvAePT9JgN8fK9vbA3Hu6RDGJjGJYH7Lk8ZwS7ge1Mui8b4WrddWCwLeUXSUJAMARSinUkspRrAbs9D",
  "key16": "26zwdFtN1kNCDkhnSvEGhHYr5jjTShv23pEHmzcu4D6YmbAbeUGSv128JimtBsUQkrRWi1j5HyDykXbJdKPrvRcg",
  "key17": "2u9zvYWrVJCELkEu1k71AYPbnktAUkYQ24qQVErkuAxrHyoPjQ3XbiutaraMoAQ6xRWqym2t6or5DfSWWAqnF3qg",
  "key18": "5XCN8jam4GsBw7ia2Q4TrX4Wb1GdoMwh6v44XZmTykQ1necFgmqubk8d9qXmGogwUNMTdcfAXSPSRk3yNzTAt71z",
  "key19": "2gaqV7bucx76Hj6ZT1aQx14k66xUawfkocxZg5Aige5HvX7dUhm4ePn2ws3SX5W2GDnWBdxjy1XFc2F7Mmh8zvKW",
  "key20": "3aU2LcAtQ2d1z4AgjCQAs5o3yfQqeyhPXCvhJz4ZS5GptvaRVzjhsLPW3Z4ftHKemYFL4KiSQMQrcqBQFUJp6ipb",
  "key21": "4iagMhwWi123vzvC8iAGcumKRvguYBQGcp7DWftxycB8qLFxUAJGMytDfkMRvT6Zre5KhRTsDuew2bXHwnA6Lnob",
  "key22": "482su1k1t6FxBtWDFwmJMS2zpGiGbR5arE999wmwfrpkWQN8ozQaNqgZRqS6tjcsPNhbLjaDUbAGrsiSHVkZJDQe",
  "key23": "2mAktViKeaKt2dsFQ2cSocaXWZGSr8KGoB1DTYtBm1PLAVykjbY2Vkz6jWqSweArZJeixBXvNgPuxAy3wbxdtCnu",
  "key24": "4HNRZP4zGzK51DTJv9Kcb5W7n54LyaKo6oMZDrp9FZFPZwBkEWfGmAbJGnGaQrPr8xq4FMrH5RvcWNHuML7mEFaZ",
  "key25": "5aHY7XBxbgAVW51jcVQh7UnvEEnna3X1rcWSpXxpgpyKDUMZfCxnHzWXwHh72PmvPXF47rAZkYbLDEG1ZjwiXu4W",
  "key26": "Jv68dZWmZJEU3AKTBNRAQhPzEb5AmEbUGU8r7FgBjr1Cwq29wocoki2TU3Rdm1NER8wi28FSuCr4TN6G4wmDt4V",
  "key27": "3gB7kicXWxgULkuomjb5S2GxjQ4yJcSoxhY1R1bgQckSJPrbxRWRGGkNrgxDNScJpAQxUm5Sp69y2p3gVRzquNu1",
  "key28": "5BJpnxiAEL3NxxuNJcDpLEJDE2GL1K3HAcASG9vvKtDFQo6gbh5FrEfqXYeLfeTeE28mx1ZgJSeK3AHrLC37hMQX",
  "key29": "3NhgZYXcy6EbWZGrBnyPC9VPiwYQsaiWTsoS11GkL7F1MrPW2SSkJpUxSCFa3UCcspw7PmiGA5hTgwfR2eBNkm2s",
  "key30": "4NFmy6QMjQ6ah4v4RVbSbB4JAyAHk77Awny3u9GPvyDbqoNLm6ysScLmSCBFzjJDoG7BpPaR5o9ZzGwTjpo9L8ky",
  "key31": "2e8R8MrU411vnVNcRENykhycNqAkkQTZdfruRRQbvSAvfv4nMqpvDicRbk5ssfgakwNgwiCpnY9WHGus7GFdcrmd",
  "key32": "4iRJz4m2HaxAr94WDw4f6on76frY9UCeaLoo8oDdd798d4DmRV4CzT6PgC8frD22aNW5LeHiuUZZCckTHbu3fPgM",
  "key33": "2joAFHgXPXr3qDTifaFtAwnD8VhQx3CJZg4YevWNJkJs2e1f2krJPFVHE1udLwk8T6zfnfbN4Z4a1ahazVGLa6pe",
  "key34": "3BKqiJRdzZRCghbXxpXeaALMBTmi4oeUTJCfr6rZvPQ7YfYrMcDArfN4uWtryzJZNhdriZJ84K6eQtKp4uA5fyJL",
  "key35": "4WAiHAmBFGFpDNRVzcYZnejmKqntu4NkgSTLev5k85KPZ313cnurgicPyngAypSgWYxLT9L6sCesdimHBNdaGU1T",
  "key36": "48WQHuh6Dg5r1mdJ5fsgRgcrGsAGBRSwiFuchAMhfPTtQFcV879cuZyS9nLEYtZybMxqezQVMe8LfBvWU3aDS9gi",
  "key37": "vcKq6biwRv7ex1WNLJ4ZdPQ2PA8eLVXyLJ778R7iEw5fFp4wPvukQmTCDgoXZD1e8ef1HKNoxEUe9y19rDfakRT",
  "key38": "5XfcRN1T8qWuaXaJzuPh59pBQerTFcp7SLrwuoVLLDpqy7gKRGUfaJFcwEfnNXvkB6YyTcsKpBk2rTMo6jiocytA",
  "key39": "4D19DADXLmPk2A1PTFUGxSwiVeki4xZW8Cwf7TNwfRuTpCmVgNj3YYHitPHw584Eq7dfwa2DAHBLRfL6gGSuA2Hq",
  "key40": "4wmHHxHsLGoWmBHHKtcZFzAiCbMLo3aMkZHQAYYNUgvcqCyuHkN9CfQBof4Gzd4h56gE1L23zvFpWek6xL7yFUGW",
  "key41": "31LsGeT54tw8WG7okGkHzFFVAbNnyBxu4yfdcnmFy9J775AG8EibNK8sFafNoYsxbahMbNhSN54j9pETbVGUrwvn",
  "key42": "YCZQcgznqjrim7gTgn1MBSCHDYanQ1XfX4KKvsD1gP9YSrFQzzDm5f5Dw4eQStagvF6zTsYPimNRwXPJM95FSVu"
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
