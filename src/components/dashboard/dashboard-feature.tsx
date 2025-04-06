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
    "2vzz7zJRxApnk7TqLEMfRieDb8fw1jaEad1NZwtdnmGntac8L6gWWGr48k2Vt56iCeVPFnbtZeWymnBufZByvXXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3TzfYarHpJ5MXtK4yfV7mRxion3TYPmPfH1HDY4Diy3yjjk1EiEKjdi8yq1HeMKV4c2agkPGpg4r7NzrvAwSsw",
  "key1": "g47XUJ4VoubqCPqu4Y5boxevDiomguAiDMUkiLeMBeC3vgmzWa3TavWJgvxjzSQTCp1UujVJQgcXcCRGEgtoZQJ",
  "key2": "5qJPssVLDsBtDZ273yZNbspaAqzrn5mMcvg2ByJQw5fUKpK1PBczwkyCyUFmCahaxrzAkoTbReAC2GqgUbruUrKZ",
  "key3": "59Y35hUBVMptomzb49iAPkXb3zHWzu4ncaGJvQZ8iBuQoKsxwRXw8iNHXNbeuUw12nhAYSinD32HpmN6FczSPXtH",
  "key4": "4WSz9kTRZobTibD7kKDLoz2fhgsdR13mi8KqD8dBYyJsPg4zT3i6cqmi8FYV1QLxtrwbTd5s3Pfk3j83bSb5zge4",
  "key5": "onpEaDXcQvyBcnP7Z5EeUsNApM6NSuRwmy6MTt2QCS6rVVy8WTD8uDuPWGbiPD7mLDocD16rGGAZtVuPX7nt9ch",
  "key6": "SYDLvxmzf8y24HyCK8zp55BMRrVn6DvP8AgUFoFRmoqLDdy3h961zMiTWChhnQNzqXEQbYHwVZyY5GHs9i5e7eT",
  "key7": "2HZynKSXmzUwqaBb3iSDcYVmj9KM5XdiiyZbnNAUAHA4YD3PaPCr7nZKMeBp7bkZP35D95wT2WBxizmkvtXD6V1g",
  "key8": "5p7p9JLJDpzvqLKiGfyrRt8q54JX6Gz7MngJre6MB1fXGrh2psy1rD2kpPw5yGyd8c8aZnmneijvJHvaeKmEMaP2",
  "key9": "4evK1Yf7rojAjgHpFN6HTMyAQFw3uvK1eQwUAhYzkWFisprB6U1CdRa7E9RXnE5i57RhLztuths6yAJ4pGdAePGX",
  "key10": "5hu4LbRS7ZtKFbwn71hScsStV22LXTKnKty5dbwTWnFJNp41ixjQrgn4e26o7P9fWRHsNq8ePg1ReXXVTr4RZcmM",
  "key11": "5i1kvKYd8eFsxHnz2z4rMbw8cyuZUUjKzvd9RC7HF5bNssXGEgwebGCdFpvRP3kkiLmh9Ycrw1mfW6py3io4NVdY",
  "key12": "5TnTy3Skhr7ykXNXZhQXMGhmhaeidozpebtFm1Z5Pej1mZu5tRCndn6qTKNvUXAqjM7jFePERM9WXL6PXuFfrQXm",
  "key13": "4vwdiK95HYb1jm9d6RXHMftaBXjpNwgddELGzENNXWYCuGYXFaTbERRDRNHzsDZP1g9HzhfaMTQg9UhzG6HXbLp9",
  "key14": "27n6TmT1KhRNim1rVse5DWyUTDntZ6zw8vcw5YcWAFF2TRLLeDa3qrnhS65BDTaHK9BU7MtgqZ3LUaUo7UR3q5q1",
  "key15": "3PXMcXYj8P1b5dqazRz4cG1hLHU2btpo9YHgNR2f96QVqDUrYYMRhaGzBEjMXjHx6HA2LJ1sNjhHMaoPuQVX8jL9",
  "key16": "54qrwBfPqQHjQjoYadCsbZDbmbjoMpfqqmxoYaYH6ZAvpQRCBxcBpKrmEBCvZmFozR5m4vFJH6vzijeGZo2jKty4",
  "key17": "3zoSMYK72V2s9rkt69NGnVKJRNeXaptZabBLvnNG8LRxZs7XRj7sCfhC7FchXf3YCMxa4PsG5WUE7evJfytuVUgN",
  "key18": "4ZpRd3WqcQHUKd9LzTuzra5GqnWswafHM9hit6cGYCpjNRES3WoLAhVYuem6UsQSj54zmJxQTKxXsssJ3b9MQq4F",
  "key19": "3tvaXw4F5iQ63rfuLP55TdVCqvQnT323bARvL6kDbKFtYqKtaZo4vEBQik5quo5e5RP2sxUR1Hcbev1SAUQBtQZX",
  "key20": "3VZsxBEuurpU53ULCmMDGyPT3W5VotMwMEZdj3gkujsutPtGDCxqGXxitwDUcRn4AiSb2y77Hz68MaAaQzgaS4jE",
  "key21": "4wynhQk3umpVAgAJ575HpbnTeDhCHHgdmo7Q5Wv54BGZkNeVwSMdjNhhJuJpjLHid6bp3S388kk4aR96csfxzDmf",
  "key22": "2AXdJEY8mg9Kv4LUScJS3fhwgxKtHpGxbEsnBc8Per5fchracEU1PY5GDEn598BuV57yfjMg2ZKpgJhMAvVrMfu4",
  "key23": "5T3PDv8rmEuJnSPLhP7GWgy2W91S6nX5FfEyjLkbzRWXaku3qpBvb27b9Y9mxeop4A9FMbAToDW4uEoZgx6JhpFc",
  "key24": "3rJDKnWWX6Dy9NXLVSbMQcnSX2WCr98m2zJ1Er5xnR2GeGWvjd1VzYFssVzt21fqaygJZpohzJQwrjzNzTgsbVgw",
  "key25": "42nEiJQJoHbczU5n3pGTeqHCRKBrqRHB1umsuiPoMRzyLxo8hhJLQgF4Z6y1JeL2qVv9f7PCBqzx4Sr217GoVB34",
  "key26": "2gtwo2qANyHccHfGVA5zCSNaw7Hc239bK36qAN93jniE3PPBZrW8BAGkXjPVwnbCrxTjmod6saRVAwebYx2ewk5j",
  "key27": "657cVvxrjAhzTWXmgSLcSfBXrU6RLRoqoybGS64KS1heh3ZU4swQENMtB8ygcLCx1CYaSeiFS8CaVAEhHkeURcLn",
  "key28": "3RH1FhpUzQckhhBu2bDLvAQiF45wcr7DSMnzYMNqnGdRdhiaZBdgjo6v6KHZNqCYxKwFwwbjzoUSpiMXRHu8gNm8",
  "key29": "oGFns9Jwtq6SMNmgdAG4pRoQSKLuq6DwgJpqahVJXwh5FinvZtnZdbcGcgu5BXQcnyjn2Cc3TLxwKiS5YaqP6wq",
  "key30": "3oM3LxYz1G2Q91y7hMSzB8KfbtJoTTq89J3PUuQPycavqx77BP6zoRJw4WYn4ZoFToyj2PVbj4pWFNMAki89AR34",
  "key31": "46AeTvkXqM6a7a5PoFQKGgHj5Z3Y3ZTzJfN2oKfMPQaMcRcCxLf2WRQPMZdwtjZfUTKggiAGvjmWDongAyCe3p36",
  "key32": "4gng4nzp3wH6QKDhWj7HuYq5dd9y3euBqB1XzohAvc4DvqmRQnGpCG3CCPccmLfZfY1zYSTQpCkQhG3k86YvMLto",
  "key33": "4SoCyoiX6kUHEdHs5CojF2cEwPHEsMWgNykD7xooxYntaX3HdEcTuzTdnaq78h8gbSoWi6CpRFCGbzcS16kkMa89",
  "key34": "4LccE32h9oj2FGcQs3cRpCh4L2Uj9s86VfFabog8XSYdDhdxg4E73h8dH3KGkPFBpCP1N8B2skBcCQPB1WUQzdE",
  "key35": "2SoNQHNR3MZjHt5ybE8T7ortPoidwKyMXPtQZKfDPiyGrKVgi9hhKXq8SfyJ2zSLo5D8tnRattWJmmT9e94HFDLv",
  "key36": "KWVjzghMHMixfu2MCEngzXpXSSs95RYKGM4T5TdQvBoPN8pH9UteNw5tvKrtCCAxhDzUNCLY2wAd6xTruBZzd9p",
  "key37": "5JnsrDDvNrN3dNdAoMU813y17ofe2mZYmU2Dc4Q1R7ZKeUHVeGhLchG2CF9xvhpFVpQSyNXeU3RHUXbq4w2x5bb7",
  "key38": "4ykB15ureyzEVJb732TvVZTWCUnhJmBVNx56EpqfQ1UcCTfzyh7dS66phioZYnSJutsxcHNxpt5GVtruo4oNCH8B",
  "key39": "45ZaHZvZpyZv48dtUixF3cj9jzqNECdjNN63Kq81fVR8BicW7Vs6dr4VGCrZtWf7rr8mBptp6firJUw9sADgW85V",
  "key40": "3XXX6vzW9XRtJwA8WXiAbQpxgxjRdvuvpitL6Bt8WsGPBLDVxoUt5eNmDghxhkankgpdvRHjBsYucyPfD283zDfE",
  "key41": "2c1kqHoh33vhaZpr9piieZCzb8FJFMQ2LTvCfcUfgubgpYrBhkWJ16CTDxZG9kKHDPtCNNdyzHyd9PSSqHyh5ARb",
  "key42": "32r8sGjdJBsJkvxiYpu1a1E8dtGuntQ4iR6snep2v2J7g86gsKqUFYeLAPcpswbK4n8oq3vJUJ9ZWAcHwPgqC1m9",
  "key43": "62g3D29UDYDW7rJuLfhJLNLcnsAgFwdzSkcF2KH8VtsZCYJZBGB5pjTMMvaPhBaHPefZNRTadxwr6zFB8hVyPMgs"
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
