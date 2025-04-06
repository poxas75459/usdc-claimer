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
    "4NbmwHdhVZWnFTehCbrJ9nKsmeHztvhtp3tLk4SCzdqQg4Y9qZX8p7ZcxipWPHYjNTpkC4h6ACVcfuGwCyecuQZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6214r8yZfYE4NXHyHTNqkQMM8ov63Mj8JdvawjguvoiwfAv6rFaX99snnbdCpyYx7fu6PKaS5dB5oD9uHF5yEXvV",
  "key1": "5NxcGfp9wxmjHQF5xiwdTxfPP2baxbboaBXWs74xRWZ67YSiXPYmSLHGMEUmaBoujHeJneKnuNbvrgo6pnTtHiSj",
  "key2": "65FU5XV93Nmz5MpMYVhJdhKVvLKfx2NEcCQc1rwgckg6pXYPmM444qKYf3wk5WEsn8K67qM8mCgH9vueemt1G8rC",
  "key3": "2UxYcKZh82YHHJeGDdKsnXQTDCyZGGE9nvctabwfuQQUBxNz3NQ1ncuFmRKEDriWwWX9cvorBDxA9Rfkxfe7VLba",
  "key4": "2LrFJFoHVFyrDz433k1E5GuYgtcwy3AYuJ9ZJo8cv7pTSLjLDRRuyZdu6TZU3z4JsqyoL2EZCGtmA7aEkT1mmKNu",
  "key5": "rNt6qa2ztw55VoyhN4CCd4yeP5EStLm7ayqt3HxmbeTLssWZg6W6Wz5dtiDM699ETWTSPWADxYoYL1z2GRNXYgE",
  "key6": "3pNPc4ibmw5LBXfPvdVt3F3Mbop5vLGqokZtFCUZ29H44sNgBGLcULjJLdu7wd45LUD7iCzTFijYaePybJuSTHwN",
  "key7": "T6H7vLMzHeXpRMF7W2ykaSKpUUeJoSxqXSrGKXPP2VWjcX28MV1BQjXP6xu4c3KcceGMhkse6ESGYtu3BEPcByv",
  "key8": "3e9D91LHUPWz1nh12yUxnJot3saoDTeMCgpHxGEJtw4GLunzw5DEzXgCeYCydbffKf2AXvMMF9B5okJUSdxwSbAm",
  "key9": "4WDy7GWvKgWqCL4PqgVoS33s4Jj9rUrNUWhcLMtt8XhnFE9j6KqhiJ3zrnDDKiCRA4C6BoxoS4V75D1YeJ2etq9d",
  "key10": "6BPqNs9gh6vPtTZSHcyxQUBCRSzs3T78LVazWYRwPVB2FA4pxN1qvTDkSnPvczuAez9FSWGRCBUctt3ShBeFZ9s",
  "key11": "2FLQusEMRj3uDuSe2ok1bZPmbGEZ4vMMWoUb58DDKHdbQAyR5mj9S7GTgdC2N3RX2iAJi1JZ8iHhBt6agZcb3jjv",
  "key12": "ER3rLrFRtxZB4PSdnxJsrjGsBKsDyJK9L5yTjjfRmCYPpMhQyHsDodMthpDYmpRYrNXxVUWPXLdZNMjuSZFVxSf",
  "key13": "D1TDcmxXM8kfwszfrrzL3nxpRFsnVizbi7tHyDQLGwykFrm9hnijK23bSYRLajQX7srFix7d3EkyNnwXxNPjb1Q",
  "key14": "3pfiaZJns7UBJFRzMMSBco6iWR9rZubUEJffdbL8dZmwbrvdLTzVho3Hgo81qTqDrmMrEovMprY2kTqomwpZq1iA",
  "key15": "2gC72c26yKkkHHUds7b6XMfq2xh5ea6fU4d7C71MVtTzSQFgPiZefpLRurim6tgpSqrvyDSFDkXMxwhCWQhyHbfA",
  "key16": "Z9p4UjsDtfJcNvLjiNdfsPFmnpjSXt4u6vF7cRTcwdu9HtdEe4SVL3iG1CBwRJC1WYMP1mPw36ywygBtJdxbXJM",
  "key17": "4JpPu2hdkGsSnHKGXuZfty5JFAGPfd8VVTEKHRRCtFFG2KUv1mEqXXndr2RELGQWLbTufjpSMk6o8UxSoDrRMwGb",
  "key18": "SfmUSQ1dnLAC6QjrMDJZQLP4cSqbgkAE7ycGYtCH4MRRzuSDTZ5V93Q2M5mNT6NRrXFgGnDJEos8XdLiVrHpfV6",
  "key19": "2ysHPvGin7HZ2GSCgsNM5T9p5wJXUkSmFd1gN2NLdhTopnJmckmWmCcbmmZv86EgRq68nEwepneewx8LdrHfcP5A",
  "key20": "3dvVGAoMM5bPNLHMDwaiiPrpp6KjMDMo3LPCnbK6kfrF36rKfpd6rokiLAXScVbFcBUrLW9dve6R1czD4B785hxb",
  "key21": "5q1ET3doREWMZaVD4Do6DPiTR7iGvpvDu3qE5YZPLUPu19k75YmxHYGGN9cFz7vRmmVK5Az8GNR6qiqPpGTYRHJ2",
  "key22": "a1kL3FhyM5f2biL15Xm9tGnDxLczVmpyWS4LWcGsqmtmAnVLyx2DuzHh4qTc1XDGgVPKcYpd2nfCC4gYa7LhKvp",
  "key23": "4ijFZgXLkwdteYbJgvsnuiJWeTsg4hgaYoHvgs3SMDRb2gjdmmXSwEyHGaW2fCkaumXqGov2eN4GptSNx9gR5wCR",
  "key24": "GVHKt1gZt7veyd8YmGfFAihhNpV8METDQi4MSkoB9je6fmaub89L63XXLZEG71nA7jxmajcC7CwZSsmqqdPJKvg",
  "key25": "53cB5vxrdz6R2NAtKUgAJFJJbiq2TCNiaVuKCktf85w154YY2GBYt74F8k9iK12U6poUhG9cGyiihvAwsgk6GPJZ",
  "key26": "3166c67DrBqqVP5E2KHmjZ8YXxMnTypuNbUAB3uVreu13AjSup6bbcmujdQjKYkic2dbu9uQVq7m7XEjuEbzkeo9",
  "key27": "4mhRNHogfPQew4KoZmm9ceQ67hNLRnu2aDAkTRTjkjCZ9FPhaJN7mRz7ZKKLn9VEfZBKYQMW3T1TtENZvhC47VVp",
  "key28": "3KZNAugkgrhi79fzvdYhPBNcdPdkA3hzMjgpVDdtqbefRWqHFzrzPPxNMghJ2WgkWuvpHUeYAL2ATaZYiGiEhfpq",
  "key29": "3P7LSLErsdJu8tjJ2tfJESmYqYy2L2v4FCNfRCjy2DPoa6Lrvfy98pkN9D5CNTgDYz2PkCMUxQicvr4WyrwVrX4A",
  "key30": "2B21hu7SFttU2m3rqmGMRCj3GbBXzLZ5nWJwssWz6HeXxT1UQzo74u6KercQftSZWy92Vc6rnwjzivpXUyYbQYNY",
  "key31": "4YAUD7nZF7sAju7w8wpJArEShTp5QKyab5ryxd9urpmPVFyJsLMcMoQYn4SVttkumrwqbPkQG5MZwymnatKo2TRv",
  "key32": "RdDZsNMqcoY3pt6kSwuCT6KyJWvJGeurUHMHUc2dkZpN6wBduSSGdCWP3mwY2zmJefwbNDMzWCmvriMK8VL9HdK",
  "key33": "4nysJoXwB5MEu3hKeH2iTd38YukHGkwAapUAieDfjBrv5wjaovJxrxjnsbS4No2oXRnzhoWPpFuGqUKjkYHkKF1t",
  "key34": "3m1n9r3gT5jJYRDmNfweRWNjKjyiR27ooFwvfAKninfScbcF8qSEfpvMtHCkZH7EdC6VZeS7SadRrxd5QAZVTemJ",
  "key35": "ZT494MeoRpzA2H5dmdLGSdhCjT6pMBNLJ2Wd6a7s4st2cRHGqfoTHMAPSZkPPLb7MeSiToHugCsttb7Pjxa9KsP",
  "key36": "2LVWU7rUEpPGqofYjadQMDWCxn1r2sqPFNhHbmb8HA7rdRUEeDjdZ3C6iB9pYAYc5hKAzixZrDuV5NAAL4EQVjS4",
  "key37": "2db3wSehkEkgCF4QDVCChtrh5x98YJ9awcnTKRh6gqizySENzMsnJJiuFmWCyTvjkssv1STWVjaA3spLcHHcNFZk",
  "key38": "Q8BeE6KsqwtLgc854Y5oxZzTHNTqpx7jgcrvTRRVVyRR9RbGSryER1UQ4icEZE2FuPgyHBWeGYXz8mJb7t4Ruik",
  "key39": "vMXWXmLgos3yfdrRQjqAxYQvGtJ4Tgyvmcw4ToG3waWyFTBLd77nahLphj7dLSFNnkDD74VpaQqVdDeTw2gbiJu",
  "key40": "45EvQF4wjipqdAtSrFoiuxVDPEPSyMMPHuzzbfsn8Z4pDQtV313sM4Nj7d46dHB74ARFJj67of6hos9QGffBkzRR",
  "key41": "5x5tTWpDUrgzw6ePevN7CZhvnJXyBpLYNtAHozwXGqbM11PUDvr4HbaEHmcRfNnVeiojrHFQLLn74bNGpoE373qA",
  "key42": "66yFcrrAWGYjuBaF6rFdR8DBcrHXRFj7Uga5UpgSstmNkdtUukJ9a4w6fzPVsqgq7WhkXsPCNecZNZDM2cETgiKv",
  "key43": "zwTmCKj5tphtV9PYAy2n6rRzYVS1RXnStVm9JiMyZdLQNjipLPMgwu5JmHGtCMZMeCKiGpuc8JfsJd7nq3fBAwu",
  "key44": "3Ve2gwURxK5uKZScaJJ9ESMJg65t9wCURXnE29BqctkHmXZeYdxpQcJ7N8GsbxRJsiXi7RcYFQALvBpd7vfbbTr1",
  "key45": "2q9gD2jjts11ZB6XN2aB8F6GunD9iRy73gvxgG8vdxSaJBekh2UERVF7oyREUNyogv8wHxrBmr29E1MWchC6h5xZ",
  "key46": "KHyKS2Kipnwwpo1Thf3RzBLY44DNhX3jxbGi6fDfMTveUYsYFs7pfEkEVxbYvjX6t8zPtjy6dZqoSsRKcvzxRqE",
  "key47": "3zxBumkRwgqX6Xk7CFsvTjREiVwHM8urRkha4WMMdgW4xN32An7wiB74LLBvDzWrmJUegxjqPrCGmqKSU1uH69jo",
  "key48": "45XbPkPxcaKKrAC7J7E5Y4kGPe64xGewtsGHwpF1X9oWvYFSDNHtKN8nCi1ZvEewSftpJgDCmLmzAbYedUVEYxjb",
  "key49": "4V7tFiMSQGfvwsfmaipQMWE6Tiwba32CoYXPLEKqDNo2KmmpxtL3bqs9Uc8ofdr6aZYfSohdT4S6CpYRDKf6Gs2"
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
