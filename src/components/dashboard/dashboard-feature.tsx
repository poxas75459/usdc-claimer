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
    "ZrFPHeKrX4BpKrh8mibFrbqpMuiQob7bPzMGJoE5ue2VyxAWF1a8vRjEuCnytmvQVmMCdsmNsVvBtTJBwCSxTwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zA7iSWGJcUyhYmTTGjV1pWUWANraietr8xnamsCuymiA8UsuUHLyLvZ38zBd9QuzaFSKYgqwCt2vNKaSFYmQB9H",
  "key1": "YpwPQ6Ab2PF1XiaQsg1kuyFvCw8KExzzYzkrPqbntwUNYmF8kn8gjRBbVVxUAxM99wKFj5ZjQ1FKMKMLYCw3FxZ",
  "key2": "2CBFzrBM7fYTMFPfxc22zBtruCA5Y8mP2xQLBXJFciebtNXFJeTn7n74i8eaiJstQpaB3LHWZEQfL92mjx6pMgSH",
  "key3": "5ZWE2zGoWLRtwvrrgkzM4ufJj5bg2hLtW9R61MTMjvR2KpF82jumsGiD2JuFFCeMijb58gaQPYCEeJCrMMmvBTSC",
  "key4": "4rHnhqqz1aNBSAriGLt3MrU2fzYdQkJ9aPduE6cMcFUDTVTzsfhiaucRvMsYLR138okgnXS3gj4xVrcK5b2gRZt6",
  "key5": "5UugkhpohMqGmkt8x6p5yRP9s5uwQSQNiRv8EiWzHucVapDaRp76zQFTVD9FQaz1asxfXGQyPc34tV43Px3ZRotz",
  "key6": "2249th6dgaEdKFmx9Wfa5XJG9jnNYZBR9aUgPz2RcK4EFzmbaHV4Ls1SfPQzehb5Xg8D8CNjLJEwnr52RBzjifAe",
  "key7": "2DWBWAu3ykdUUbQPsChQC3K3yFpmysa2gZeM33GT75A3JLN6rg18vi5TXNqXbrcxxSDsKAfRwPtLtzgBNNeKcicr",
  "key8": "4GqfMfn6toYuZR7e9Sf3yNUGRvSqySJwH2jwJXAqsTw5UC5pLEJUVfkdfFhMUjNtKtmwCGaGeKayJxn9N8rDow9G",
  "key9": "56HXBFn9sF28hRWkASr1RSg2c41jeEJv8cj8aVRZPbsgrZYuFLrBuDzWMo7x3cRFEnTFuszEQbVC3UALSR21bnt7",
  "key10": "3ognMZodNU6TrPRf81PF9KCLtVDRjvjYBkLMiAMzTXDYijoncrF4zxjcER98gUR4cQHq1p6SXtRxFUmTyPU81jtc",
  "key11": "43UvxnFUYY68YMVGsespRmx2ZKrBy7eyfWuXJKTXJi4MTeDyMuK5iufrCsJqxd253XKzY7j2XqTXV8rHnUmeL6J1",
  "key12": "24NgMwQqWC4TMcrK9mVEbogMqHUPvXHwvNBMW8kpsgF8Eo7PpNYx6BiY431PZVGMfbF1ojcSj1b7KWXiBLbksryq",
  "key13": "648SDT41Dweeb771AL3guK2gGkEhgZV1hYMZbHCx7wjEo2P6trA5ksZA8biPgaj9zhaRWvbng3WvNeujWSdaztWE",
  "key14": "5sSuF5dAJkpUjHpAjfU7NNktuCwyrjzwJm5UhXL1iyQ9ZbSYWdFbg8WZvJJbhysrpLj2EiYmQDAvNh4KHacnXZg5",
  "key15": "53xBqqxkAA8h9hGiothqNQqdbTBZKWzcHpP38bSJ17gzwi8d3CN2TDYBxnr3NuVTfApFJEBKuEqsKeRzN1iFqnxC",
  "key16": "4LzTez4TAmkiLTwnvTwWuXs7FRodJY7ADc9nectkaN4CoECmmcZh1xdqtKVcSiiEBazvpEgH4hwE1Zkpq25dn8BQ",
  "key17": "4A2WvhuT2sByyEjKuyUsYhrX6r5SbSc946sZHrYLVfnsqCXDmcXkZFExwVrjQX2RpCn783aAmLztCXtWwwJPfVa3",
  "key18": "524UH2FR5v5QfNwDkse2dsa7N94Rj5EiTeUobMTpryazLAC41qniGDqVXWLTQ18F5KijD3XotLM5BHqyCdHEXvZr",
  "key19": "4pRmtUP2GSUPkeRsnN9Zq68kk2hVmA2No5sLEVKrjx4mbrRsBA6jEdWPn2XAeP33bcdFdUPZWKK1SkTmvXUEnChe",
  "key20": "4KWE3hTfzbRnCvVxYpdQ4zcpxVX92166cauDSE8SKiNMPMC1nvhTxDfxnfCnRpLxATW5e3tYVLj3BYssknuEyfBZ",
  "key21": "3Xz2qSFVCUb8uuwjQVprUEFZVPnW9A7gZLwjJvtFdBdbykvhP8rADEQn693WBTicGyS4LtcSCZV1USek6kGFpdXY",
  "key22": "61ZpHa9fSyZpx5crkHJBk8qCvmZ6Ya7S7bo8qzNSxmDvfJEiMYx32v1w3W2HJPvH8xMrNHPnFye5E3tTSprW4vzB",
  "key23": "2EXn19mzJh2Q8aqLk92q3NVXJNRcLmELZDYJiF19wHQBPGY6LwCfgQJv2eYDnANCHHQrXcimVfjDCt4wYFdV7XE1",
  "key24": "WWDt2v9jN6NX833wE3AzJTAHg5A4xzeKBLjpXAwAVbLGZ4bxNoW3S7DuWXpQwaABtYQkkqUhKSgY6vvBVjFpUrA",
  "key25": "65LnfDbSxT9EkdDmcff4JdK2G3twnuUL5M9M1ivS8vK4cuo3f3NyuHNdVBP1b7wHgxnsPsDjFVr3j1hk3SC34AyL",
  "key26": "2TKcheaZJTztwZseWU7JhGP1Hh336FmKqnmTjMTDpYCYue8vSt7NmTWpA8RyyRphB1o8awVx3cV5tFikNhD5DEji",
  "key27": "fv385pctSzGQFZwaa3AGdpdfkzvZz4hK8X7EaDWZZqmWYny7FeZXin8cSc1mXWVfsiBZVHBfgbSWhiJkrCaFmU7",
  "key28": "2RMEqhdLdhQyFjQvEUZUZo3Wma9QMRduhDJNfMqMUGygMEXrWk92QVBpgSNzxJ67FHmLJmqRM7ZsaoyPDqN2bZuk",
  "key29": "NADwiM2giDvh9PunDn1sz6geFVFJsQgKjZc7vSiroGxtpN8tpR9mM63ViZRd5VfbG4LfbCTGDRvPRSJkaRj6uc2",
  "key30": "2y9e5TnbHuxQ2fqjHfFUmVb5bYsMgKajj8Vd6mmJes1FCE8a9sVzY5UtQ96tQMKrx16L8XwbLN3iqkjrg53dobQa",
  "key31": "3xe4QwJR5PDXLdbuGHqM66Y61Lx8MFA1yGzrU5GHRhf99ywunU3oeUfjkDoGh8gqYuXm1YoHPdp9pWWhSZKzVqKL",
  "key32": "5AHkBoSaZQjCNxQGY1gcyQ8pVejcs9qtbhbPS4He6y5khrf6S82BrZTfCtBUVmLZaZBg5kMW7wzkK12d4gpnUSqQ",
  "key33": "5RLTPk2UNYJKs8RgFmuZ7oQJfKz6gjyKZXZkEQrnNWwb9dsNmxAga1QVuZjGpESJk5emCPA5VGsAEPN7HQZZpTMi",
  "key34": "5iHyqLFWdpQMxjixYfFGto7s13zmMxG5UUNDAE1QLSXJ4Ar2DAZuwKhGpdLsLmhQA3Asen5XHQfbCPmeYuA5bUhF",
  "key35": "3djq8sPj9ong7xQrKwQgfUbYXP8QSwwHJjDgPcDYMyK8SZbCKgT9sM1vJCyDaZ171yZcTv3ap6meaP5jPJNNkP6W",
  "key36": "3pbYo1AjHRwVn8e22V2532X98qpdsjqa8ZRpWkYomoGYdGj7KGDbTrkYMiejn7ns9meCnmwUYpMKrTj94W6ddjUd",
  "key37": "2FqKb65eRbeWTRXk51zpPWUpnBD8Dxn1kGFFyPPQaFCmviHrvAgpP27YNL8APsDn3X66JnNqgaySDcyb5YLHVMzE",
  "key38": "4XT2SgqihXGL1r3UEHGasdtE3nuohde7JoWLVyY9BtKigkje2i6HKYV3GMWsMC3QfA3v5tUZMYZhkTGPN6Z92o6Q",
  "key39": "2Z2uTb5thc24AmoCoMqBahwbZqTE3UDPrcpcgEKAxo8NidfGaHwsNRYjLuwdctPM7SxZX6aL8Ab8e5m6KinVaAZ9",
  "key40": "4UcWRXmCZ44Pr4VZyMWqBQE1d1BduYRKUKyRgSNat5o883MiWeW6dNUy4v2NTbLUqqm4KGJE63tAt4HRp2W9c6mF",
  "key41": "2LhL8EN1XYy2yb1DVBb5PEw4hBQkLBXHsCzdWuoS1FvuXrU94RL4PwMGVLGrN3cjQerDfBPGJ1jFeR4Sw5rucku3",
  "key42": "3fsmYeSsaLjBEF2BCdaiB4TYzVo8i5GvqeXTch9JhNUh3MJAomwx22MJbFo4BVK6TRbFjnRYt7yBBLkF3MZzAZ2B",
  "key43": "3FXTFYzuyX3DfLiyUHV6BawSy6akuggAw4AQBu9F2HyBFzuB462TgfrJhQV1Ugn2kCRfRHTHR3UqA9kV5MoUXxmT",
  "key44": "hLBE9gNVAgkrJPteLvxfMyKcFJ5BpC9AWtfLfGqPT87yb5i5mUGkz8ycxbkkU3dUJXGocTa72k7yy2vWLXbTVC6",
  "key45": "4m9CCMUPkMagGGitfQDGeJPmrchut6qvtfHFpp3KoYvZ2Mgnwpv15n9uiU85YVevyUThQDP8k8AdS397TtxUpKtD",
  "key46": "659B9MSc7B2r7QnVGgkuuX3PtyYXLDbKiCMt18CzRxZwcKPvriSQkstKbbxW8QLxFDKBZ2AJQJKU2VPQbX6PhCGS",
  "key47": "2iYpfrvDzvVPauKWfxcFtvRrk3EMK4MDfbbrmLkADcHpBU9oDMJuYVb2xGVcbF6EoPfiL2aNqxYXsex7TFhSECGH"
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
