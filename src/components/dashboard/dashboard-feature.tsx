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
    "5o7bdeCT44p2aC3cD5rqdeh3hx8vWAHYBWgDN2xxS4So81hZqdtrtb7TJNtrVheF8uTbHRmNJa3UQfdWLfVPnWP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcu4ArMV4hmo2hTfvFReM98CQ95JNfa7fNDZc4FsPLafjbhiviM7FtaKeBjRb2us9acXHCsRKRzXsSZgDFpToGH",
  "key1": "5ZBB2vbkMQKmNA64RJkxBX7Qe8Ag6u2QfZ3g6xWVuijzWPPC63ERv25pgmQW5GPi6hq7ktm3zQcLJajuV8seCaWy",
  "key2": "5qCNBpNso4qbuyXGznAEQGeS4ec42HvokcnLAQpRBEyMJB6zTuidXHJUBxLDDu1DPkd8NAN7ce4FrWmM57AdD7Ls",
  "key3": "3uVrtu7DvgBNni69QoinZrA41pFabydMRCZfL8cBLpJnKQcAeZGrPQYV1w8oQChHns5S8CezapauxUU8am2vCXFz",
  "key4": "2RNRnVddABhhW9m84LtCkWhzwMB2oPdvuvgALJ1eDgwn3fJbJRiMq3rEBtRN97sKPvWYfzQKuzSya3PQggGF7cSE",
  "key5": "4hNqRYguroHefmhPHWDx2W4tgdAbE9S29TDgVKLKfpS5z92x7TvY1GTnsTfeazJm9LhfM85qEgyMX4EBSkJWCSS7",
  "key6": "5XTHSixYLt7qPRz37L1iTdsDvYCBcijXhiq8WmLqsHw3HoXXypuHM4FbPD5Ze3k2DYMEq78PTtQTqiGReAGXRQNe",
  "key7": "5rpC6XMV8Y6kzLi9TXKZn1ikpGrDjN7UtpSn1b4wVwiiDNooD9DV5afRPD1wfMCCJhaqsivr2HH4zqxPqJ8bKnYb",
  "key8": "3duZfjeC5EWfcsnKmsGX2VfwaexFreqThwWdfuaeazyMnkGdGNAxKy7uB1jHaP3EJGirfVFrW9We18gfim8DZZT",
  "key9": "oXuNETcfCBcGVqZdbRQ5V8AhCABQ4JDsisVrLjHZUcwMV27bvBWQVQmd3vqsaRSGChYvH53b3s8cZgD57jK6Gpe",
  "key10": "DTJwGmumPsXgJKgCH15ywmm4oDbF8HqGMaGbrFbzH47WJRiGgXpmkDm4cKwGU9a3gx3tNJ5AECGpBuDsTRD9ffE",
  "key11": "4B2QX8QGNLM2av9nscZEi5i6WXr2sJkLwhGgeqoQ2TNqtQN8qNSAech8aJ2yXbgqqu3LoAiaAK6zzbMsk1DpHW1i",
  "key12": "55t7vibn3WeJpmtwGzSyBSpb9X3XMAEnxn7LRNXGpfpAV4Lhj1tVhF8RSwX5Acwzj53s5fsyNJpnJHeBCrv62xs2",
  "key13": "3cojPTYmwFJghbTjZ5KqP2GRNyskVeFbzSeuFgVeyNRhGWqLzzLBCJqdZb3U1XiCSH9JNqaA9DSG4kA2HWkhLUJG",
  "key14": "2aoifH5kYKfoYWP3QaB3JpqJ7Fp58QEjtpJxsJtwAY11w9YGMkpjbnWZ4fh1KvPbaycGUcT6eKK5txZPCRaD8RaU",
  "key15": "3vTyJRmwSVbqXroCjnY46mkoTxU9ocDJNrpfcJCT92aCzwNkCgeaZ8h2rPnzz8xxbhbamAMQ7cZeZ9T8nbagH2ED",
  "key16": "2riyvsrVCmZmf6nyFaAQkTSHQM1ihyvwjyUaAf7mFMbBTQRE17A2svcfjMiNami5zyiTvvKydJmaEde7yU71Qsge",
  "key17": "KbpgEKpAnQcQXJ7nP2KDBHkmsdMrwhja9TKuHP8pZ8VA5fg7UR2kkAvzLW2xe43uoaQZv2G1ctgZGkDYYtoTjJb",
  "key18": "5bY6hHdZMmYgjYtX9HGFjaYtxVrMSLMAQgEQTvKp2TDyxwsSErGEkLQkhiGzQeGhQcxxwaQLnxKyzFv4eHUUvU2i",
  "key19": "3se8WNfJCFN812nxdKiMkoGsqXbq2ioP8JaM2ZF4ZRXtyoYnKK12wZChHohjR4jgC4kvmTWgn4tYQTTCKgVd3W4t",
  "key20": "5bvnXHirX8BA1sAfVQVk4vVzThAjz8dVWofmYHASZsSYMBgJyQNeq34FK38Zg7yKKwLEEd3zXZuobr1J8f6zaCGh",
  "key21": "47YzkqoCFinPQjrMFn2HJXi7t5i1VH2YNMJLguzhzJKmRrF4gPSb66adC6cWvzrWpjHKs55Yxb8NWSZb4KPYjL21",
  "key22": "5nQdHrHFEcj6FMLLhwJAkDX6CZtP96Hc5k24L9g12kT2Np3Jc3KT3voishqLU6vN7nqvqsC2LsVFVYX9jaZVGsbV",
  "key23": "3iMfExzsGpBYx51XHWcVa7wnHa3Q9CAKbLNFhUkesT6pryW1Jvc3bhZXwcoZJymGgHvS28rEtJZ9F3Z7bZm9M3U6",
  "key24": "3D3dNkHPcCikRNSvsMPwzttiW6X42bAM4W8DqhEHsYP8Lt1mABp4gtoaSePDqrbvjtSWWYrw24fEFBwFQK8vp6UB",
  "key25": "SN84gf9P2dR8h9msMggWtFHg1XDaWMW7o6KUEKWWDCHC1tFnxiysXZhbQyFnGazVAPVEmEdUft9QyMCd5HWoW7D",
  "key26": "rVZ8fcKvdpmuAX36D42uKEUYSZittZ8w8ctMGtrsqnNjTmatXLzz6LUGSGE8LtjpG2LTUSCo46o9xpA7r1hhB4A",
  "key27": "5oPC9tQXchuwTeh4bJcTisXbaLwpJYtmjKgYuRAttrk1ypYkhok3Mj3D2g53YyQ5cVUZzUhLhonn1pGYmZBJUWg1",
  "key28": "hWmzwGt58PYKKY6nVvFhJyov1Ek6yAzd8Wo3822VwiMstvqMrLyPqtc3ECPHD7x2yCXtRhZmRWYYshfvbXi9YPk",
  "key29": "BHuncrFcbL3rjFo5zdwTupfmELnas5kWnUS6T6XhoFibJmk5gCW8ikskLj7A2ttnAGp8LnycLmSQ7Hsb3TX95LJ",
  "key30": "4gWmq9FtQrcEkfgWFSNqstMFZw1jwhNqt7G3VMqPGGmwrUNkGHbcUbiShC2BWJpfsj5a25ktBSrkKT38LuUnjqwg",
  "key31": "2uL6iG1929mPxeJN86keCv1vGJvoHKxMzJmDgFNBryW4wK6WTTPKqzrkPGFv1ivenzPndiiyAGaNxpjx66PsMbYa",
  "key32": "d6ZBQSd68hWeiEkw41JYeQbKSTx6jrPN5X6eDcde7yqHwbMWZuV16ZqPJCB4nfHEGC2TCFjXLpXUZZ32DS4A1J5",
  "key33": "WtnoerAasCac9pUtc9xWAoZdcfptzHS35krNTHSzPXU2qTgQHq4sMBBqLRVufEJCsen5SRuTiPLnjvqudcu7xTR",
  "key34": "5NN4LUpz7CfGWCE5acvq8xrakZwqtXJN3y8PZexAA9AitWiyNRjAhnPSATNVeHqFFUydjTb3SbGj3i1RCT95evYy",
  "key35": "4kJooDLDB8XAu6V2qkKNqbhXqaz3tbxBGKLS2PEd6wgTz4Ah46i72wJcjAB4nN1fm8nTZ67E3k2Y3q9ZVEDZg6Kp",
  "key36": "5AdD5dBhoQZ8JVjz1VeeQMvxHAEwq54UbWVgJseRvGBHSuapieXyKB7csmknaoVKnHM9XS4bx439Er8aFwgS4m2B",
  "key37": "2PXRHkUzEzqesdRzmvZZoQrmidk8r1cvvpycnPWTbqmoycoYXwWeb9nsSfs1maeApKusZMBF2qsr78NKNyKBHQdP",
  "key38": "4ZbJNAdkfLbtc8wbUogR3sNRVRRboWytfkKbZxR4az5kY4JTdtYoLdc1jnPyvDR99hSLb93YrUPehusQvefzNLMp",
  "key39": "5do2i5suwhx92ezGmtV4cNxfTwTp4akBbXK6TgxmvaKKLFTRgsb79YKZLUHXJSEEKtvhKjbXBgLCwApf7HqhW4rd",
  "key40": "5pQX6mnD47qx1tbaZKSxWYY43WFwxXoud5LZsk6DvZzhVhdvD5EiZEGVQGVMAgk29Eu3B2eHVRUw4XSNXp74DT96"
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
