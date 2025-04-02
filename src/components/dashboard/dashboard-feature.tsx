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
    "aJVwRkXJJVPyFYfeZNch3t73g3JvmMz6XmHFz4aEC63ejNovNBwDdmm4nz5NmUD8qNGi7uLD1rnuFDb5Nsjc6yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cp6KK33ZchbELA7PEvvuwr6f5m3M2DTPCQHEzwoMfTFTb2vfJz8Ykr5QAZq36fw4bs8UfoWh1ooMEcXHQ8iPnZv",
  "key1": "53RuWkhCtpzhsKTbT1mgJNHop7mSfaxtsxZAxGbYXgwNzzLLbwJiCt4CF7Z1ZwVeN6NR63KrhRaRDPh2GNmc4bsr",
  "key2": "2N6TU7Fass83nmiwiNmwUH1TmdXxPPQKjKRxcv2UY2ACbPzpfGhdDpitdnePbjPWeTdJz9ARnizCJ5qVdPdqpUgs",
  "key3": "4BFa1HjFiy92WxMh21dzBE5NVWgQu1HZbvfZrPo8kBiaq87QhPNts5ccfHp2a49VByrwW6NEU4dQUKWFKiYgcvnZ",
  "key4": "4C9LWW4CUenLgvohSCrq3Rt23ZxPqHw3ihTGt1kwT8VE4U7M1URnQxaY7bB2y47fL8HszB8zpqGBRAEDcMJjNMyJ",
  "key5": "4YWNoZQhqJRGcCeiJg8mfuxuY1ZBm7ioU7Xc58qe32xzebrE7rKv2zxJfGZhS4xyJhZpoD3c6pFBMDeSiYTaSEBN",
  "key6": "2FXUqhmqmJBmaUa8hHocfnkCRGJVppRWRT3S75oTGhogtEnHdx2tKZxiyUYytqWG7rvwwE52xU9MrrScJ3vkW6Q6",
  "key7": "2h4hGZ3TViYht9qLV9ECHkGc4bxy45LMufap3P9JTZWMNodDPEEo7aN2894qLspYsAsuY3RNtu87yW8rVaajfr7X",
  "key8": "37EW5ntY8pxxusEjHffRSskBAjVae1PjEJ6XkA5bTJTZJ3UQh8myELuAoqHyrzaM8M2hHEcBCmqGR9esJmrhRn6G",
  "key9": "2AhE1ZD8eTRzDhpZPZ9jGWcKb4vrdhJiyGUEJHJUqy5pa2qjaLBeYq9XA83b3jwJfbPHyY4WBXDZr6MDRQ3Sfmmx",
  "key10": "4QwU9eoRef7AigYN2CTsqs4b99TeoTiNbFj7aQ5NvZPrY421rXfpapWnshZvppxyFLjEK7AurxiJKtkmBrPpgHoU",
  "key11": "5LzZkWueMJZtPqjred38HaapyL8QjNNZJ2SVdBe2m5ZLbbCuGKJCbiHFBakK5p63g7b9cXBumGWFxTbAzVwuu3Hu",
  "key12": "63rBS1rBubQaQmryaUFX5F9PyNhXXtLnyuoLr3McHFx5CZXi12uobdx881o77xT2cXtWLfV3kKpyZCHP5jimqMXa",
  "key13": "4bf7sinXbQ96qoGTHiUz8C3mo9Pji4GuManMmsgu6qhizyjAw4mwSAeK9tg4wH8CbQ7z6pmTeMzc9RVo4oVAq6Gn",
  "key14": "YHNa9r56F6mAM6MWCdXwQg4BVrL7r8gjQ9uUkMqQBqFLLbdgYG7g84VBnH9FRGsw7Qj7b3x2xZgbG12ffSVxbQP",
  "key15": "3XXZ6pRGMs3ibcqTw3wSh5jQVcmk1SyoWeRjMKVpRm5pM9YzUFnsXBxpRRFYS3g7Gwdbtw6jbCzGsrzFnvXZdQfj",
  "key16": "4ZoKYEcuk7cr2hhQQayy54uap2EguwizUs5qAaiVp7hPo4BhdrCD2ge3NhTik1mBTKLMvfaGYArpCBmRpRB4Vks9",
  "key17": "46wZYBCFwtnVSVz82sbKdsAGM137Yf2XNTUGcG3YKqSuwKASRHef9UDqSSNUq5cBDbcvviQBJ3dXNNRkXphdZrSb",
  "key18": "2peZaBJfS7LaPHu5CFPTKRZbKoQfWBKdJTB9jAo3wwbRnM35WorGMHHjjiKAS6Qw7nogVhcebg3iT971bvcgRcZT",
  "key19": "5u79t5NknB4D8Dw3rhMSNXW41C4Ns5faiTuoRPPKB2hTxaPqj5vW5N88MpATQLjZEATFQKfbQqswGSuKatu8uNkB",
  "key20": "3gps4qack6ZR3KANPXNCv1uqNEn2e99SGTp7d5yWsssqCTZ1LGksjHZSQaYGxUUknHc2VpqFKwZzuA2w2sgMB6vD",
  "key21": "5w877daCXS4UZghCWRZtL72kiVjJkRE3ZE2CUxvrLvP8UUzn1kBYuYWdjnjxAjUgNKYp5YCz2Za8yTpjd2bHqp1G",
  "key22": "3vCqd6zmbdQDcB2Sk8wY9R1uCz5PTecziKDsiVv3N1qiD9vmu27Dnsx1tkqq8MG1TTtYYRuA86CxGRNw9qK9TEof",
  "key23": "2FUWf1i2BH5cWB6mpNZEzdaxBVfyHbQKCgKwA44VJkrLArtyphTEZqXe6z9RKS1QrFqhzTDCjm3WWGTJjFaYdYSt",
  "key24": "63kARH1MEPUMJzxJeDbJZbsguKAMD11z2RJxDmSU9YyPrDCRcoDPm6jv2oMgw2SRmyN1amm6V3CFaDkk1wkQ4h6F",
  "key25": "5ZrL6vPANVXRRWo7UheBn6hm2db97pgyGohBckWUSuPkPpUEvZgwfnaNrGnDioyAwdB65n24FeMnhaDPA3KWEBpV",
  "key26": "7B5qgdPi1v9yKmTfr7htwk7TgrAMQLjteGJig9yrxpojCGDvn34fW5iJLDP5d7gAp82qZEKULSMZt3W4eZRmcNd",
  "key27": "3uAsM6jpa9QTYvmWQZycuNio443mQgm6wbQMnHwMAiyF1FVwwfjpwPPfnWpW97SZYTMjzHxycrL2roPB4oW6HAQU",
  "key28": "TVvdwTv1DNUw2zE5sVGv6oJHqAXDGgJYjKm8MUjZsNRq5FnBumyyUcKDBvBMDXbtEym43oRf59EjaL3zRF4ArKj",
  "key29": "51FyYnGF8Cwo6cE6it9mkmZYn8jwwUKTVZ2q7TLbJNKdP1d6AoaFrNYmVzvMwyXaSYuoNpujEA9g4RyqeZusZJ2S",
  "key30": "X21bQ7VjDNrXH53nx3mhDhhu7qcmRLhpaCbV24vmkwEoXcUf1xZjjSyd9VzrZXf4KSmbdLC6EnJzy9hFSoYP5NV",
  "key31": "Vd1Aj1GaKv7wwknb44LFXTVd9cqhRg1uV9TLPAR8L9qfJ2Vzbt2ZaMq5GHmdWqubHPASyDik9j9ocoBtPaf4ZSY",
  "key32": "Nvr162Xr8rJ6tJ23dSUw6rUez7eT9Xt9isXwKzr9KtvQzkzST7dkZbYpnPqW8nNxezFbCxAc92KKGg8pz16eWEd",
  "key33": "2TaQkGdyynETsUmLi26SYZVegydS8nYPhxiX9sjMEYZbYLTEgZdvEibTs5EtN1cVaUQJUuoWK7MWKpwMmZrJ3pnx",
  "key34": "4pCMqtkCNo7nnnt3ihgQy2PV6uNHoRdHMg8gaw1Q35MgGMwTby48z8H5nW7fdcAX3VqHYJVAYHNppgzoaEgrTwuc",
  "key35": "55tUdprqZzs5nrskT7ee7Pn3JzDbmetpCciTL8UiLS6pPABSZ4hAX2XyegakkbQa1joLMuCXohYSX9YvipbZXdiv",
  "key36": "bPf1rGvZ7ffN5hE3gLwjQDigFm8SpXZWuzME1uh32UmwEdTQxKSQHgJ2pbE69wyRiKwo5RxtqE8B5JikafgiA7a",
  "key37": "2ZhtwyVLVKQS2a8CQM7PGDfuzHxTnU4PTQRJfgzdP4JP9RQ5ihEmVwtXjtmQWnqJ5vp4qvhFzrwWscMDRoLuFtPE",
  "key38": "4fCCNHzQowHfS1FFaiSnJnjqmZN6WFnVoUoAKFQqNg6ZU7WQCaorRUYLjqBs53hxRQzaB6nTXmGUiSb9fBzBefeM",
  "key39": "2RywMwFjiXHLpp5bd5LN5YygZ4HqBvPXruMYbAyBBiUafbzqmkG8RKmiXdBqc7YSWkjyCTPRh95B7VyAPqJrtnk3",
  "key40": "4ADxhDqMFKenxn3FwyhqLKnR8PaPscUS4JosmPebUKezmkNGAGaQCmgvhQEFEZ7gnjRicJBFPDXhvJNrhbHzVgnj",
  "key41": "xkJNn9EuUhMbkc5w4StEpF9yYa53X6jvN3fbNuWMG3sccbDkw1wNLYD4CLA1pYcevvoLZXE8BRgFSeranE7qTAV",
  "key42": "2HxeqS9pcAuiC6PJuXn4iEoACWvZrcEZkW9zobhZMzaa1JwbmRECpfzGsPAEg2Da8WM3oJ5mak5JqBmdppXm6Zmi",
  "key43": "2gPwZFT6R2DT5pPVunoXPkJRXu7C1UhuxxUf5NdtunhpdTsRfBJCM339b1HoBBPnjRbeTgmvJgVcEFPvc2qSKBQ",
  "key44": "2d4RsRLtM9uoL67cJuuG3sawe4BgAT4Md3R1p5gWh67yTwb3kdu7PmjsF4MSg8w1sgUezHUokk16A65FF8uZ1gwx"
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
