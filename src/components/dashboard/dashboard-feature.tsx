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
    "2TANF8b5z99dpbkrYykd4g5PF6d1SFhN9mA9cY8d41ZgbRBjSEZXaRVYfN4R7YFowuVaZ3wJDf2qYe7ZBUkAfsFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGsexxhMbC4FGGWPFpkaHtPr5VUGPLBbU4FEHuq8opCkGvVtZUKoQde7Hk6fvN2QMrKEYkx7hRH3oUgzfempgDV",
  "key1": "2qwoj2RaDXsQdgwNJEXxr4UpoPZhFqxhqYuwXp2ohRa4GCAvVobcEt5cAxx2yvmrLtATPT3pDBWVAUJozBofWC8E",
  "key2": "4BqBiXuK8GoUqGT3NRfJeE9cN9Sv7wfU1HXPdL6fewVWwkfG2B5KDBgG7ThmGicdZ1DXk4CC5kkJjrRM7yjApvQa",
  "key3": "25UvcfTTbeLAWJWEbiHAMmRBAwhwn5NnVszyCDfaPbBpHdPQVvRqQN7WU4PMS7M7LJwVeJaeX9ATZCFsTcFoFgqd",
  "key4": "nRneLNaZddx8VM1UvJLQmxMtv16AWH6NGLY9NrCAbD5BgCKXtcwjDKN1Z13WnD8yxjiowBmFkmfA2sThcsHm5qX",
  "key5": "B8FDjU8EHvmZpprnzpZcfQ8kGJNXiP9ZkKxNnc1uG7F6EQauuNfY97TxRgHjmZ6YAifXsvLaTnCpRKUdkZMqABs",
  "key6": "2NKN1LvbjL4b1jMwoxXGLxtoh6kPCqtmSfxGfCAv6xWtSQwprTmrstvKF6e2dy3pNz6eXm878Fe9pTn8djF2t6xn",
  "key7": "64yKge2vv4mVGStpGFGYXbz8RVcwUnS6sngWLqR8Fo8Mkbr3xMVyTbKuggDZqtmWijRt6Jc2NWfjceunzG4ghXGH",
  "key8": "2nEdTDHEYKKGrhNysrjXkx78rh6CDtUCyKgx1wDKjzn3WMaGHjZitPL64rMBaXnmukw1pKdWhMib8EbUD18FQjSS",
  "key9": "xuzfqZdg2ZqYBi2xY3hFPdTTYzbCECYdwez5NZ7d2X4pQtgCi8nfq9TVGwQVXMJcnyuBTY3sQF8LCPx483PuaD8",
  "key10": "vWw2BkbAK6tUaR9WzuHXSCPMeQ3dcKgBmPqcH2BAVdmu4RAsHNAk4R5noHrENUT3kEVi3qud5WfDxQEQRS561Tr",
  "key11": "5GAb44MVgyNt6fMYN9vdU8RDoPyGjLQuwtLW7MTDBAq2BvwwhtJqW7cPjRAQ7iQb6aeziC5Tpzvqsfji7acibwBj",
  "key12": "5FbMLKuAHnejpmtg2E6RhHRz2f6h1ceYN6cHFAd4B92sUWZVYwkt4fyPLMzDLCMZnsmztT2AcfmPozXsiRiYnbo4",
  "key13": "4RnkVhb4bpH2m5n26UMJ3JBU8vSEFCd4iPQaNppL7zqeZcctd1u1rUVA2UVmFQo6ytj3XAh3KAzrx4brZsbavMnv",
  "key14": "HQQzgPJx9jE4FNWhLuijRM7SmeFSPNW9x4frwZnEEA13RtPZXEioBd9icsgS84UAgqkwFAnjqF6gVSpiz7ee9Bb",
  "key15": "3KGCfugqf4kHcgueB1urBFD5ZYHwKHbW2oxBhZDRnh6zfFsWVRqAYzmqktteEmCEJVsRRytv6AWmTWv1Cpnmhjq1",
  "key16": "3iB4SQqK9MjPrKmmUvNPTWYTVWhp4UqFvDZCegMxHt6oq84qNnuNXE52nvqPBqM7czhrXu4N4Go3J9zbGPJsTFUe",
  "key17": "4cLEwB4m5AFPf3jNdgZyrM7da1VErdMMz3HHsDzkpwkPPoKPfp5Fj5ksdtkPGoiNPRFpeZ99iPL3vFsi6rYLEeCT",
  "key18": "5EmzByaKfWai2fCnbdJuDjdG3REu24XMpLVGSZvi79CjrGwry8CRnXWj4L2QvEiSA6gxmXr3WPMDk5VmCCjcoj3Z",
  "key19": "3whagF9ZPyCSp5QfoT7r16eAEZANds6EqcUiMA8ABbeFVKp5JCx4MC2Cf1PtoqiYwrKpKphZKs8eqSXrJg6YF9pS",
  "key20": "eQSN7eGQyrwYqF7EYgnfZbWn1mVyyj34Wd89uj2mrS1jzc14rytNvemiCEk8MaZMTTtrRxmHHzL5YshiAvXbM9W",
  "key21": "4bLW7LcXJV9ikEtUAWYm6YnvNQEo6xrw8s7jLL48Pf5A8YY2cHdF2AYmYZtbP7gPcqYYocmSB5t3RAvYw1wPJTFy",
  "key22": "644zeYSqcHf3PL5oKTZCdhMmzjMnNfBKC2ekzkTU43uRLRqijYUGzkgq6Bqw26nPzviwS71bjRoAg2Zc7zpXE8nk",
  "key23": "37ZiPrCufWoV2UktH3cAMzLVQi2xrxL7A5UhqjHPtmiqMvtLQX8YtBbSyDz5pmcwMYVuEBo4c6iGzorqK6uptHK2",
  "key24": "5ZorSqZ4QgjWdxEKQZKoPAiZsgu3EEuH9gzgXUCzbDJPTqiNDFt56yc1ueL8sQXkNnuDRf3RPWxdmRwYLBnMEZbw",
  "key25": "4SCS8hBCMN2zYLddv6dSqX3aavYQjNUmRY4YzjAp4DfBuRuYMbssRsiBiqtga2qXeFuDSeB4cueX3NKtxK4SMsMz",
  "key26": "2mSB9T73MxRxqm2TMbGYVP2HmJg1cpiWbQMoBbshCsMu1uenRfWUgwvmNEuki1uBo7t5UPxTg3Ect7idhBUFuSQs",
  "key27": "2uSNvgnhkYj6WVSfnsh7su8wPwPaYeH7KkzzKmevasQMB6Q3Hj2Z17Drb2g5fmYeYC8jvFCftumsty2EeJYwSu64",
  "key28": "3YZv1x9Bed179gYKDQHofz6KrWL7WyNwLrb4XMcJNYPAX6soCJdVgraRWX3FLC4beKbCyeLKu1aRomfnbT9ZhgRA",
  "key29": "3B2Y4hYVynuXNoSRbHprY3pFbgppcjs7ev1LzD5hHc2EfqJ5iF1GRy6vMMnYE4tkLeFEzX2LPaAkd7ZSLQ2TDVF7",
  "key30": "4D1CTo3F2qt2m6HjxjeHL15utiimhhbdXPt9mQvEY6ceYbkiq7wkfP2g9QHQfRCGmLdVWWjccAsZwLRa4iecKNyH",
  "key31": "2pDCSfLP3ZKhPQCTwpXQBJcf3QSdKpwowr4tp4EeU5qEeKZvuyKK9Kb55F4HS9o3dALm9a2VcoD6JaHEYKHGLsoU",
  "key32": "57WtrZRoJxLVbTu4CGdFiHePNnVeiY2GMTtyj4VMgCkKcuoZYH5ndvxtsfg2EGAaqp8Af3aG8WXcdSXF23ZkzMzr"
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
