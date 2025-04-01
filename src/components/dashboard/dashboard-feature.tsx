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
    "53hpUPLB8FdfC5eiwDYhGzAFpSwiJceqjU9wdf7QNfvxX7eNaSrkrWBWBiComgEMF7y2YWSccjNQV2GUFi3vdjpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cX1pbLLYzCHtYLCpn2F4Xn8aM6M4DmYWFiTLo4U7Xcm865w5etuu8N6d2dwbjJ6QCSgwwPR5zeAWuL7uiGLMsYZ",
  "key1": "2NgcrrpxUXe5M4zbnn5xvzDJfjuXFvQjX1ZpmE3JRM3hdcgq91gR9huNsK2gWZNuRG56msGTJxPHGGVGDsfWwbt3",
  "key2": "MRvyMczfWT85X2F8ZdeMmCMzwfXdFjCRbFeDNs1u8amuNnniKMSCxcuq8CRqfVekNc5JRXdDe7gpNsHAiLzCLQ2",
  "key3": "5HhZPKc39cfafHBRQftFCs7qEGUXQGQ6ogoDTxmtHtR1fhRb7egwufwf7vpSXa3E8TZerhNH2o6iWEq2EQSiyuUf",
  "key4": "5L5K8xk7jnbBfYNAHFH65KKMcKSR4hthvJeVhNuZkdJLurYDZifvM6k5zN2ALY2Nu4NoYGPx1CSA4aSYUrQ4b9qU",
  "key5": "26ZrmxZwCpqpYRZ2GRGsheoffYMgZQoDMTw1YjaQPBVfMhFZHGBFAT79BHRHdn5W7hxkRSSa1uXcMVgJiPwapAX1",
  "key6": "ryKzme7awHo3KmvswgbNaHZd93pGB1mVQ2DDBj2tn1j1kCDsNAH6SsKZCW6xutnoEWXS4xk2aupVhubW5TJFWRg",
  "key7": "3Rt6Ho4ewH5xWLmfbd54vKxFWowPsGxmwrTNFkojWU87toBHEQwX6qhiLLtZSt6KmCM3CBgrh2TrsPGQNzQ1Tns7",
  "key8": "65ch1npWQXLbKvFvMfYvSgWX9TAh8EnB9UvaEr13Pw6VjUegk23YHshgu5r6oHnf9xbnVSYdkBVqt53BpUWmh8pc",
  "key9": "4nretqnAx1D7dPCMD76DqsKEEsCAP8j8yLmLvfvP8Crf5BZeLU6UeBneDALXFpwzLzDr9Kev1ZJn1rCyBVAsaevU",
  "key10": "3SpDdu9azdKMAspRTpVyM2yDZxMh9TyBxsrEWUoSdKytSskUat5iw31w2CRzTSGTVFymi2UJGMCLb2b8tejnaDQX",
  "key11": "28PYzaqEhhLXbu3NVqz8CrBZaGMwLipkn9h6LNpwq9A4W4TbBJ3LgZ9ujP2k4gX8xnPpyPwzsfspiNTSEqK25bW1",
  "key12": "irSzb3uRfynDrs7phbJnwMpu1hxU387V6QZYEHB6YWcC3vtvPdQ2EzZvXj91RN3yVf2fotsMowaF1s8w5ydHuzY",
  "key13": "ZAzJ42kURJ2Ey4jQ9etCNuevjsEbLAG19hT6m6dgmTkEBPwGXyjwQbfmGF4xtrcF3d3jLWy2y8DgbqQpvqT4tRN",
  "key14": "3HvtAb7JiRroMSxr93VVAAVYTTXrH4aiv52vcDaR1kroyZJTrv4GQmHZQU5cWFpXnrZ6nwDPoJm4MPHvR9TEzKkr",
  "key15": "2tDPSmJJfzQEJMoWFcCSQkrSxc7pSd26eU26HjdoLrrea1YjpaqFMX2ZXgyBBQq6Meq5VVinYpfSpNA5E1teZVc3",
  "key16": "zGGbTGUoF5LoJDqNN9bdTUjhyf5k6c3Z3MLu8m9kQPtFoTgbqMrejE2YSQbYiGozaaoSvmJVNmp2YLUdr1MdA2b",
  "key17": "5CbMXUMMyRczGuvXxqP1qSUfwJPHGa1UiRiFiJLbqC7tDXbjqK3mzseKKxL3aPwhfVNYc5KnK9edUkV9C5oTqgxg",
  "key18": "42fTsFd8bdmZbhZzCR5S2sRC44i9QaY1JjqRD3bxKpB9cNHcBaotvyxRaHXv9MT7q8xsLH8JWdHHoSxrEuDemQXD",
  "key19": "2bWon5uxK5gPpFpU4gRQ7qq1ijSKacwPkSy8JEBsoBiUZuo5KmiRC5kMUm3SnjyXgAWtM7CekSYKepfgdXzR9u7w",
  "key20": "3dvkcRHrzPpb2yACeiPzSB3ZxHyWPHUnej9Z3VPxikneYP1XSAFNbtGZxJ1me4cXu6zKXkWikBQDT27yvJ4gUZ6u",
  "key21": "2spsBZrt23giFyKRQBXeYvqSP8QtBVFhZjDJd5H4Yy331omuXKvfbtwzMypkFbojbNdBCApyPhjxCdu2xfA3W5U",
  "key22": "4XMQ5N43fcnQGuaZS74gAqVDuuZsCD2rQ9VD5X7PwLRNmQP6c2FiX2J35BjmfFCTwNBpZwtKnWGJ84rz4gLwVJQn",
  "key23": "4LFFC9vnxqpFHNcTEy1GwnteSQ9iAB8mxb4fgCoWjGNBWLZq2Xt8xRNg3H2CPUr6YibNYNBem6U64qtpp2Rfh7ST",
  "key24": "4Gk1wssGduiyAwbjRL6iexdywDWuhpqnN1mpWD9YqLLeAhvqKnA7QLzNE8u6KbapngyhWWTKSV4UK3nDHeXqGmQP",
  "key25": "Zp2z1oTXVw3U6p17jTu9fShgHUk9HSpyFsgsfVknNpynKtfhy5TCr9tx1pRwAjDnXr45puApu2dU4P74SuErk3a",
  "key26": "4TVs3FahhJ1RTWuHyKkgGrWyPpTveLfXV8SAB5mLz4sQVuZ8qwZ1AJQJCPUyfA5SkJ29JyWLPw8WR577ppEL3KmZ",
  "key27": "3HqFXSbvxPwTjngh1ETB8QfvMDCoth7UBvFnKr7FnHHyaDbpK4FkDUCpHGcQwMQATdjV9Cx4NU12xgH4YkaRhDwX",
  "key28": "4Fk4EF1wo7MxHuMQYcuKot7DF6V3zYT9VRWnbyRCd6bgSqaq6jx7nfzeKw4c1TnsgjJvo6afKE3VaK4pQKrjqb3j",
  "key29": "263t7TLispWL63YdUUAawZv3eGnMVgPHG6FAfw2npMUTQZ6bwkxyi2DWVr3Gr51cgnusMbH9MpbUJQeZbzgid7mx",
  "key30": "4tQWVH5eJjkqp8BLGVm72j7Z5MzXpQp779uuGdaJ49ZoyHdAPczQijRovStPBo31MEVQcJvEDuaXk8ze5ct1o8uT",
  "key31": "4eos9xnrCpp4t4uTPPDCauEM4Fz5N5XySufwG9vzjj9ypFFyVdAAV21XeEv7StFujwuUS3CrqAsoS8pK64BuddSX",
  "key32": "dqNgsxsaBxiNa9AfTTVNdRRe38Quk4iMy4ryhZ2W2zpbqd2qUdvUhPk7eRsptdNfccP7KtXBTkrQXEexQ14G2si",
  "key33": "2eKk6QaGecFNSxiEeynxkmXkmZgdRiDgAEbNYDYkd2xwyPL5HedEcc9owL4AHhm6C9zgXa9CyemEpRfCa37jFmuU",
  "key34": "5Beb4Yahs6D4wguz7fj34BaAbQfWuS9Gg4JdrTocm3tLYLnikbfREDM9ErodR5UksZxTLFb3VGmLnt4xMFfAxmtU",
  "key35": "25k9kn1nqYpYs8ThKenbzDHkGW9P6ghGz39nWB58eN2nXV9gNED3REo3tRnNkxo2vn1Nz1f3whQJ2a355mXkTK3V",
  "key36": "635AtVmSVijdeS4au4JnVTEZYGf8ZJmBEjHdoL9dmVbRxuq1yMWmEvzqp9keLGLSyhDEPvDnWRpYKvCJmTy3SoGx",
  "key37": "397TYMsHdrGoZtXJsKcDVNSryfWVoMy4GLPnUHHx7U6Ki3m7DdSu6YEybqaRxMn2bbrs9EwRBL4iSA66Ww8rqdZL",
  "key38": "4rqz56bFUgbEJChE4Bqqmjiezg2w8s2x4NxWy1bqC9SJqSjbfgXCoRXDR7UJnEcx1hCbVWZvqNnMaAHUfGbRNgTG",
  "key39": "hynwSWEnVBGeh3jqTHCm9dnCdDLS4h1HSM9YDiDcszxJGFUsVw9W5pk7tMPPMPtaSVDyYm462PWXuH1tCjM5A7D",
  "key40": "5ZXL1xASte3uaWWdGS1oTSeCS6rKF6DC3SbwKXhYjSSUYDAkXiKjopB29vjkCCCwsDasmgF7iZ4ELDNiiC6X5W9n",
  "key41": "24TMSRkdjGCDoVG9cJ8HHuTES5oWVKAmqYpMYyZgcZ8MfAp8ZKHovwFcbVq5fBt6Fp2qaMNF6kDp84e6Afd8EeaL",
  "key42": "3RVLwHVvA6Hb6yMYCb2V1xzACB1aAMY4gyrvSUFugXQn32tFGUQRXJQJwJe2DT2wmPDnvB65K5APeLyEqGdKCJyZ",
  "key43": "AVMBmv6Lv3HxVQNvmF9saVLDXQxzsSiTzym6PZFJ6m6pgXymjPPMH4w73MMCfQfsQHyh6CNNWoDMrjUAZpWUDJC"
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
