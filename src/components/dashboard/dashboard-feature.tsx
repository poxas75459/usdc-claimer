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
    "52ysiWY4ZBuMiuvqLc95BitL4Kf4tL7uGUGCytkiYkpCSCMnptKCHEuL35Db3cN86wKASstXWKJ3jMk9Hz2WXAr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4iwaEUEskcTSg3RYh3j3CADgMXzfp4WVeC1aD9ewvWN6KzJhLUcipGCtDGwyUU7Hq7adCU9vuC86yCu76cjeAr",
  "key1": "5gQjbcHqJnA1c9caFBJLB3Prw4JUHogdhXgcMnLMq5evtXmAw5kTZeTN1CsCYM22jnLeGrtvVy16Q49Z3pE9dpGy",
  "key2": "2PAGxp6Ejw7P7fQuniXN8jgC1HNeSjGzMPMxfyoRC83jcGrmBZjzEdSaNgBDgAr3XW5F1ZBjjAGahcQXPcB8wmF9",
  "key3": "5PTjuMPKxhaqW8NaBzLuUDqGCNy1HX5vLiZSEgFaSBtPcFHTtKdqoV5TpBWS8e8v2HxR1fq4T2SULebfc9ZtXmRm",
  "key4": "64W5Z2oeKY9yVU7t58XEu7ZzbuNoBkB9XkY82nM4Vdb7S9Dnb6pcnWZW1X88C5pbju3t7EceCwhu4UeL9YcrsiNM",
  "key5": "2xRLmVPKw2QW4PhsihN5DTV668oyxvErpdXNwLm8tETqqkyre5W9sndWihKb5pMc9D1xvuSwGzydAEfwM6fqf83K",
  "key6": "5B8fTBPyHEzkGFzQTmLV9DzU4kZmt3HFapWaq4Rtfc8VpypvkK36ge2AHiove6PxBo5SgHDcaqTuNH4UZzeMq5FD",
  "key7": "4sFcL3KEGoYwhvuzTqvJbZxsHkLKM7yMPkSU4t342iRzEsRJnXD47nCUACjU6LDZdFbsr2xyNrrAa1aEwWqD1PJP",
  "key8": "kVMvLtaNefBY7qYXQq8T7jFfVJ2EyXKo4VVdQjeYsFADA8aawuJWxLiGDbNG9QbMUb7a3QCAQ1haQcLFMNfnasP",
  "key9": "4xr3AGGEd6T18mzTPuGX5kr5pryLVgXBPxPFeW3ygN1MtHP6sjzHDTBM1M5ZNbydFttVs5Su1mtJhxnU1BZCmvtX",
  "key10": "3sZhapszMm5UEgybGt49tcT33gZG3PhrxVdehGVfFRyHr8XuA3DALq1UJTr9LgbCmmvMQgDcwkvspRzQz4qPNgjp",
  "key11": "5TqyAD8zDwuD5PbJfNYDktSG4UcfYaBkmPBBXTtAYVrG73GfpishY4UrFaRHPXHMZCA2qkcJxmqPMYdcBQzLaSLB",
  "key12": "uwVLVu9KaAdNmYrc8CZaZwdodkoEgukRVdXqHmpcYb88RFbFCSAvNXbJ3ZX64BN8m6CWLqvVfjnK8LG2JjiFwaT",
  "key13": "4ENiFUkdgua5uffEcd4vjLmEkHXnn1jsaL9ZySBQxfqQWUgHvBtR5rCStHoSaU9ZyQ2YZ6ACW7zqRuSvVXL3zUGD",
  "key14": "PudJqDo589uMMh17puwsZW4gbzePiLzbzrM9L3zJ2R2UyHcbC3HtRRVzyv25L4RushSxELkjSWoLk2QEUC727kH",
  "key15": "2h2DWH44jEpHwMuTpuGakuQLN5EBBYVuH4dGKcYAbm3YUsxgncw4CUbM3CyuAQtLN6PC34NhSJAy2xT7phRa2w2S",
  "key16": "3EbWnFXMsoxuckz8Ufk4Nqq4Hs9udwucAyWorm2A8sWc9p5WhseiCPqf21Pp1F134jG8aLPWJZure2dbdFoeizG2",
  "key17": "4Shq68MSVN96Ruzqcq5Cdu1MCrbx5V5184eg3QRvHXHergvzQi8kiVtgFf3AmdGFWeJp8qJj9TaMgDgGxHjRd2zz",
  "key18": "gekp6HTBr9GJkxAU1YT3Xi6u7fRt5pd9Fs5LcaQ2t6sCHhbqcP8kuK92KqfqBcPf8iwFvmpv8ZvzuK7k1ji6cyk",
  "key19": "5pY6tJ4u8KgSupuv1TQ7JpdHECrBp9UMxGEuvrMqzkmmkx3R1zd5NThXhxNH4KePompkW6oBKKipw39MMHwV2NVk",
  "key20": "5v5FH2ig5FpooJfDaC67MptggmsWn1aEagRtWp19qyq7oEafAbPviV6uhFvNyWVyiRP34zdo2Y6SmqeCjsC9eQMA",
  "key21": "43rCVybKqf67WNQ55CwSWLZ1RXRchwe1RxeqFTo4B9j8tgTWGq1BY6WQC3tCztFh9iMw1TNPgpoxP9bsd3rPZxLN",
  "key22": "51mW3e7myGz4e49VrKPif5TEe1H3FQxQozxgWKkgTPNLfFuvjhB94wRrqfa2LdDZ7zVvu23vGinae3BV1vJJqXKt",
  "key23": "3Ux4N7c2c8L4AnLA9W1uuMzfowojTwtiXoH1UhoSDCvesXYieNVuPgy4QYorwMLaPaNHJFspbrqAZ6PK1yvVE2ZM",
  "key24": "2DonUjPgWprTC43T2wwjtQUeWCZDmgAzxpp1Ag4yPsA9rSELmLEEuNU1ecBVLXh5fiDFhVnQFZyiLQeSSoqSbfDZ",
  "key25": "4borhr3fXPVHbyDpdR1yZ4JyV2ugsWcFp35K3fifvFh9D4zuD8nLqqv6DLCvRgs9VpVwFCNdBDBnXogBkoUv9amR",
  "key26": "2WzafnzYP3KZrC6R9YMmXBLfbfRVyupNpJ4f3GNQWrCig8xyXayh5uafPaxSwd2F57ZMDrWNuHFXMHhCnXCazVvA",
  "key27": "4UeURN5UFLqYuPJJfirBDzt5W5147BpMnCLFJLNNCEC2CkgASK1azTuHkdHxsMoQNtBXBsBiJUwbLjVuAb1BmHWH",
  "key28": "285vD8Ju1avKQDei5uQj3iFXAyFeyHKKcnd4AiKRghB2Ehr3my5sFq8w2pQXdoq1U5Uh2KcGfQRRoRfQtbF3Zehz",
  "key29": "2mCr3T4d28ohQGHwJyK83kLwr19wEgw5UgThHFuXyiXHKLYiiUdPLfXFvSRzbGAbh2oCw1wxtQj3J93rUQfo2FVJ"
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
