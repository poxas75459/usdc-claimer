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
    "5bY8mcMnfUwnN99tdwmhiFNJieVrcux8Ru5emy86hm7mKAgpQm51Qs6EZZ8bTdndeYjCwthuh9ebGjFPnCGsizn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oAa3T5TQn8mv87rCqFSQaL2uzKQsY9W6APukLt573iZBxd8Tu6ymbyLtc9JjD4wrQjNGGgEYf3fgiGubVkGZ5gm",
  "key1": "2PALNfrCzKvuhbD2kSQs5erE5mmkNeBAGn9SoYBhHE8UFCu9em6cJniTpN2Um7G7quTx2yVccwEtNbupWKLDrtKJ",
  "key2": "4fpP3znLnfHdt7srNaJtptYLVfTJiXFsjgMLbAgo3Qgw9A8jBj6DScn8N1woZVFcXfnfHMzUvAKgqwNyww9wqxC3",
  "key3": "37wgNJ5G7BywS8iZtyySWNmC4w4Dq1X8RZx6Y1nxqo4P8nDZn9F3tkXDnEk4azm2Q3vMJnATuhvQaepmBtC6KRXm",
  "key4": "5D85aQ9u1hRJoX8Q2mV3zB117rbUMZZbK37P1WMY6U5bKyNWGA7YL5yQ3yCKxUBCaDdSXJTQfV663L7C1ZrNYxXL",
  "key5": "4f4puVogLiu4VtcRTGGe5qwhgSAt81VmnDPMFNNUQDufGkrERXZRPxChKx6r85dnJa4J4upmZMQy2x5WWkQieKEj",
  "key6": "4cXb2Epy7vaM55E9PzNjKT1aeM7uvHXtU7jbVEtAeZikfbQhN1SHRDezRkQbaXHZrYEYR2mqvrRCEBavhTJXmqwS",
  "key7": "3yQH6wTqFfnVALBVqdx5z8vMEs5errDiYqB4AFjVqFQPWw2142kArXQyPAaNd2gB2hC458XJJnRgNHyGmHFgwNMs",
  "key8": "4wizcCqkgmhXtuYdhdm6Y5tRbAnwtSmHPNTbgKS7QBbpWrKKuCCcxJcwzB6FgJ6snA615ZjsDD2pbhy9xJ7jiXgi",
  "key9": "4ABFvVdNHdvHqwupW9Zcc5kojtVsRVhamsyAEVKwJC5KsPjjaBrJNgdSuKHz9Jq27u4JJD67uVgL831E839QDXWt",
  "key10": "5ogQKPcY8xMm8sXf92fuB16DDD9UqZgHWupJGzyawUfUPt3osZz6RHxPAFbFt681iDg8tpRtgbccY8BmzHhZxAJj",
  "key11": "54jeU1P7enWkCfZGeEfKVtdSxFJceCzNU6R6KjavTbPFEBLbDB6Yh3wv7P7AFHP3U9hWiZohM4GKLieRtkm3Wp6x",
  "key12": "dE71pkEgafUbaznhaqdbhBW8NWSMKXQrTmZKKQaUvfLBCD3hsp6JCRaXZw2cvs5L4E3vnUhYLDijbm4viQbChyh",
  "key13": "2CMtU6vwAHoKTwWz7tuzJF3SvtewWM9rodpr44u2sXZbfVn5MZ2NczxnQWLrBrJMKHiC4P9SuLE1LUx1NXHcpBAA",
  "key14": "D7Yuw2L7S9CY8n1JQXyqMRumQddtJQ7NdoXMJK4c2KFLRBVQHKzmcbuceXqegBAvnxnPzASu7c9QnStpg9PAuCb",
  "key15": "4DM8qyzTHCVdieTr7iVe268qPXtsPtHHxVqfi2dQdpYB3XPGE5j2Kw1fe3keJCZKFCjqrkUaoT7AkqE3swdJRsGw",
  "key16": "3VPbpBsiDZ7NGf3X83NPfgcfdJB7pVpxEunzk2rZ7WkETU4EsZ87arVkPajXHgBMnXYLzNdT2G3fRbzAVmgv5CVD",
  "key17": "4xmp6GDGYHznyFaF1jFNKbWEZofDZj4t5jFKtypAwrbQB5Rhsd12ZswA3PbszvcHh78NGjmgvCuQGsxmauywCrnr",
  "key18": "tZDbK4rGKE1dobEKKymzXUfpMN5fBCA3udWFV1fJY1NAJ7Zf6QYuxazjA9neXLyZRpgm5JPuMgPRm4pjURBuYnH",
  "key19": "51KmjywGSCirCzhsWKfaCFL5Gw3Fwko46NzKU4KR3eU4MCCbvFd24rNx7SRr8PruKYY1biC6htWSPSd8M77D6mnp",
  "key20": "9e5sxSV8B7uj1XygAuTHxMPuk2bffgUgwEBF5uQ2iX9x66CFgNdXsaEibyeNr3hYEAiUL6eVqvP6JwWeYQev6Un",
  "key21": "5MKe5egn6VokqBmSJ7wmu8Jjmwg1Au1sJzuG7whdUeKuAoKVttuSA1XLSyHAAR7e4D5FGsW2pbGEQZQeXErX8yQ4",
  "key22": "5k44b8SzQENDaFU19yz4yAeNUCaqRdQG8e9PKHTfTHJpLqnCteFWnN5ucsdfmwrTEhZzMpqnWN4h3HDXMBD6JKaT",
  "key23": "5nSQy2ZbKfEu6UqEysJLHAvtTF62PSTvF23KvcUqbRDV5MF2PRcGrB59fofAjw1fDPuPP6qhXPAmrdaXUw7nvZXs",
  "key24": "2QcKCk35rMwDKujTJafDjuEQitLgwFQWVn7aLjUyHFBBbWrzok9sLwpXrJrLKgzP47QpNkFfvsfUnFHRSY34No3N",
  "key25": "3hT7yukpMoF99rPEtGLuunnPUxRZHfHhRGVs1oFxbF3ekRMde5vfKnvFXRWvynco7ixqX4cnEQxRNH3wVuniyVN2",
  "key26": "2ciKKbWBURVBfFJWSvk3gToRprQ6BhSkMWoe3JR8cz2CDwTTnCNsTK1AyZKUGE9FSQkTxFow3haeajzovWg4oSV3",
  "key27": "2y8jFJ9936ujc21wkV2TMC1XKG5txuyAvg4tRY9BCBuAYUxWY2LNw8zAqRNCRbaLagqZuBXd9veB9NjsmBGshuDN",
  "key28": "49svfg7KyHbeeVnidYyLnf267FwuFdgUc21zjE47Dq2BLN1HKfUX3AdRRbxztRTkWsmJrsuN1J2sk1GqEGe9Enh4",
  "key29": "4chvedVotupFYw5JQQL7cFSGbtb2XNc6ERzymxZLCnZYrogHvu6EZ5VCioTX5SejR21YWMDYyKKJ6tV22jh2ShST",
  "key30": "3JeqtXjJrSsGxSmN2RwcHXZy7u3JQcFyAv5uLyoCePvFiS3XCvDsmT8RkfJ7erVTxW9oyHSdRx2bFadZjh56mtit",
  "key31": "4C4aXVHJuyp445DFhXxRGiY8c5ZFPiwE1a5kpN4am9KDczKn7TFPy7Whsu3AzPdfV92PuQxkAfjQK79uCewABbK1",
  "key32": "5vE2EtbzgwRqYLRVhTZu9ysyPeEAG98Jtw9KYQos7vi3Gea7Fp8Mcbe3eAuEyeACpd8F6d7htnkAK8YeJZhsAFei",
  "key33": "2S1n7c2dWWr1j3MoWpNYe8gUv3z9MWUNyMTfPhFMMVYbV4Rmt6eY5bM6NAeT49bMveuvthn7KimyWuxpPsELafwA",
  "key34": "3rW7gY25NqBRkco1YnopiKRk3B6VVzbu4RqbaX9mbCH99oq2dDRz7XDdZ8xUj4QbJagQD8rdckhvb3TRQaivi3qf",
  "key35": "5Ui9KdxdxjmAoUxSZSgHayGFoYiVS7oV9cziLm6xeqRDvBxhCQRm6v8HrzL51eqpRRNE79RaMW75188GUCysdVeU",
  "key36": "2piYtW4Lg5JWenpc4XauxVdvWSEtyhiYLyRa52UxSJFNdLCUWjZkABmoXVrw1DmSppDwK4GozbeJohGXKzGN9Ju",
  "key37": "4hXdH4tYQk75j4dkeDpebNwiM3LZ1iBhNeDQgi7wUrmSNruBPSauvWSg6SLPrJ6tjaLCWRp6swzuAGh7iDEmagLm",
  "key38": "DCgfwhW2ZkHAn5Fzp6JTxnaP69ARkgmVSSFZBrrAnz8egZiVJuM37ikB9gxd4SekSvJ8vXFdz3nFuZWPkmNa8HA",
  "key39": "16TbZrgVLCCa9YKdZ3TzCb9LmjLWEJzNVCUnu4FWdR3wAcrTPx3aM7fyyUP4BQYG9wQUEQgzFDzWMHVfiHsGnum",
  "key40": "3fvw6nZ61myzBiu89BbKiMmsZFUuyPq6ry45hKh3tqdrsjtoZNhJPENrgySBUU35iC6ZKdiqHwW5PymoZTAesNbT",
  "key41": "25Afic8NJrDXaVRbrMxKGngcwNS67KLoSWFCpGEyiEcDTQqpiyowdXuK1qMTkZCbfJgvjr58YBim2WcL3D26S7S8",
  "key42": "Bp1QR4uNhgQ4AYUfXvWjjzRR4ZjXeUFx5FKctbEsfnjFnMEFrGEaLyS8k8UMqSC9QtxCmQNGUFeeKkiuswByUZz",
  "key43": "3u14sjerkEBhVm9ggvGDQton3gpA1Fd6goEmTB8qT3HUYMqQP389cSjXJECkFyaERpCZQ3gZCoUjxMYtSeexhFRp",
  "key44": "5bNjPZzxvCNGnEqSkSLGGtN3QzEDzjN88aKGmMqFwYgHqXV5j5KNiKRvH1TTk4noyy9D11Mp4q1aGeazujmXhEXi"
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
