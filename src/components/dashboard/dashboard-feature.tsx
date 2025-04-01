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
    "24ZLFCwkPj2bpX6zwTq13FJTdPvgBuRrFwkW6Vd2pxrzsaSNKWgtkZokNGTPqPWRLCprEmGn1YTYboAopfPLE5i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZjmB2cguHUX2r7TDn9ZnM3B3HUSjCYjg1d56KnFDfDArEReJqDroMwmBS9SVf8VwGW9F7i493aefWTwv6HvoWp",
  "key1": "4WdsammaGn9D8nfFnAqFksoRMz6YaNHBTn6fmf7bC8ZuRBxPcQ7qwZgw98AXL1R7xQ2UByneMR9FxTiPxFC9HqVh",
  "key2": "PiceZ2jqmQ7vuuxKrCxkHU4rMmruyhQycaR2DvsznBajnYg164mQ3GTmZWTDoN6N7cZZHJQZS2yvx2coxMhnYwz",
  "key3": "fuUmyaEk5cAMLxQ3ssG2sphTCdpnftKPVq66yqqgmp7oRmf6xiGGaazpVf7aM5uBwYAmcyPaLJjbqXM2CnGNRZu",
  "key4": "5wFLjiCUaQmtonT1mNqFn9w25j7AYwEAJpfWMoyREfkikvZZ8XpVfJqr51cnUvxHx9tnW9GLcur5gwTFi9VJBbiF",
  "key5": "Ffkj9gRuY23qiqK5w9rfpjT4Sz2XnV2kHx599zMhBShdVxw56DveZtdh4bQEXPmC8VFW3vyR2c4RuWfPodEWQee",
  "key6": "z4X6qriCGTdvusyFF2mymChLGsd8rTDNPfafMgW7r9A9muqzf1sd1zf4k2t88ojTj946uwVqcQRSmy33TL1dekH",
  "key7": "4ionqddMrB2JHVc7a9PW8br1nmD6Fe6Ta5hrbXAwe6JZMLoFj2gEk2X45g9yq6CSJ7J21H4YeXj8LpcGS6P8LpK",
  "key8": "44d4VNZMM61RNa4gdpDjgY23EF99swW34WwJYpoAFwC3YMjBBKaFqXrHC3wridBgY3C8BDTVWGPMe5TDGWmpZ5ez",
  "key9": "3WggrNry2iCrb6jGDtQ75WvrX4T3TYMepR5cRWUGkEXHF7KsT5PRN4N9Uf5MJJCnhSw2hT8Nx9xPamsHc57Zd85d",
  "key10": "5p93cZGWTXErExVBWQQSPieaKq7Jf71wJPJ4RFT1nFrseYtPUqoz8EbcUeQFQWFCzxkw2eLQyfsNsePoVfjjqorn",
  "key11": "5rEShhgDbLu8s4JGoVyFoSViFSumujbNztyy4gkw3oWxzFVLwhekYk3cdgisGG3Wzr9WMnMSQJ7DHyxW5n7gkepZ",
  "key12": "5E5W5aKEFv2W2wvC2fFTpAGiBH5jwuTinhNojfNoJ4SCAmxmDFE8r8PEiiwqwour2v38X7o2w9z8wGqfueycF9rS",
  "key13": "5cPdYAeMAbvcTifuzkxGf3RM9sDMBEFPq9YMXK5xceS155xV5QicptNpBSMQipxuw2UbiZRx1nekseCMULq913w8",
  "key14": "3NwUmngeqaUPXnCEkcPNWydwhngfBvzgc6Z82bMfWpmihWB1Riy6fcWmB8Hj9s3rL6vz2MhnVHcbkXQkf4j6grTm",
  "key15": "5a1LnP6UjAPc57rbdVBYfY6iCrZp2gj631XXBx77pqjpeZACiwrPDeTWaZNkfwFUsc449iKkDdNq1nSmyGgFGT49",
  "key16": "5Pw5qTrTcL8viEKg2teLXFdjvrMKD5oDqi6QmVk8DAZEg3ucDgYjMjRFDnbXuY8fmbV46ZqcDwsGbsMh4tNu4YVM",
  "key17": "56HuqHjrJJZnkfCSVDF23SswBr44vDoXES4SE5FaFm3yPJLpkQEBLowPUtiVLp5krWg2DSAUMRcjBpngSJrfBrov",
  "key18": "5qw5hg9SAQr8DdJR7og1v9f64ULvWnn2Bee1tjmoqLkXtdyE5E3d1mRcJxijyqGnEF6aSpVeZJDAHw5VYJxEuQic",
  "key19": "2t7CB11r14ZZ3gELRZUga9KtpzsAHWQRgFGheasmqquA6nYs72wTrFj27tHYbuKBFEE4c8NHp22VJPV2taCKem11",
  "key20": "3o1nw42a5tsKwMsYFMG9x6ja1Wx3snjg3pSf3Guygy5eBshEErp5DcEkRKBHtwhbuph1mmvtvyPrXsWgssvMDJ3V",
  "key21": "3upYfzxBFyEErg8kZikFV5V6K4eHFJ4CDBUtG2r3RYosvWjHAPRG4k7Mc5khn5VVWoSQDcdjiyHBTyejTC7gUjJL",
  "key22": "5682dZ83QMx3oNMyNHya7g5392FWyDQFQ683jyss5kgrstj8xvt5c1KRpbV6SGM1zgwDNuescTRgr7Lh5Yi1beiD",
  "key23": "2SQQo25ayDmWSnb6uiHNpxFCNpDqvSrFczRLkJndn8cwL2r87uwennB3wXgM9RBrXqMbswgMKfeqscuXozt4z4Ae",
  "key24": "cbQv2C9QexLXzonZX6Wycifvce2t9VcqfKBGaM2ZRHk9RVP6Doj6t5YUQSFfFa1a64yUcS7T54CtQapEj3VgZ3v",
  "key25": "5bMWTTDXAgB7GKY61jzqoQfFN8byjtJErHoaAHHstE2NnpBJQ6B9cCgz2wCCyb9Lykw9tELiQpfHHSQ4LxNHPoGj",
  "key26": "2MQAobWN8TJxb14nvarodtSykFWU6wgKwbuV9aThYeij9JcewQi457jT5mhgJBDjojE2ioP5jcDjeWGmZoNfxRti",
  "key27": "5JCbAXxmb48SvTXZGmE2ytnb1cbXMcxreGNoouXX1JNGctd1JXBwhvE8jYUPzMfXKT9aJgZc9zu1eUS9s5UBcU9e",
  "key28": "3mZT4yvcmKjetCvj728WpAoxWetEXpdYqdnWqNam6LSizg6n5GCsVxrwC4zUZu93HAKLnvSssKebwWcZv9DbVMLi",
  "key29": "5CoJBbmXE6MNYa8SgQqAe1k5xUcdbLG6St4oTLNS56e1RVzaLrMVsYohY9ZYiXrZfsccLaMPGucxH1G7v6orJ3aT",
  "key30": "CMGr9YkaSxqt7cTjEi9dbtmN448VANz1sEURJcLxzrVZFeuj9yPkU4rCfoFmBBx4FPqBE8dvraeo5vVhg1Hjjse",
  "key31": "4Tidx9M3ov9AvoRLDnHt4CRapbTtphWorfXwqTk4BrkYckmwHVhLuTyn9Qsj3qDkuVHLdLrMH54UqmxuVrwfZfX5",
  "key32": "4KrMPX9pB5bXFX3AgsRndgBT3xaGS7LCfRvGP4gqgRTMNNdKniPrKfV4YfKgzvxGVAnm5Xphoj8Sn1QZkExC9dvA",
  "key33": "65k9CJnbpaPzDMw6t1ABHADuYaMTjdvHCz8Wje1XyWJXnr4no1V2RPScs8JzAmVmg71EgKWQNU8xUuDR9TJf2oK8",
  "key34": "5htdfWC9jBS4sHhGLBm64V5FCeoUXnczbChjvBkhZk5F7jf1pwsqFSfDwVcCp1pAA8PqWGVLvViZT5qMv6p9GD7M"
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
