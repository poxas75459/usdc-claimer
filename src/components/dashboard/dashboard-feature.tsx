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
    "55MAfbhWFLUsNizntYjDgXL5t4ukukH8Jw5GCZMUefxShaKF6q3bKLWUWqrJkNerhvo97ZC1pg13njJMZQATYiMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMnzsxeRJeFP2c8z17iW8YfqjdgBi3Y64SrX7mCGnHcNJdTPDvtY2mmcoCutzEPwdY5RNczHa3rJZSB4oLN6SaE",
  "key1": "4hkh2prdVhUZ3giopEuVLrZiCLkuSeRCpRzWqUe7BKSsv3KobKDAHyDv64d3LsH1DNjJgbJffo1LpEUAhPLZCWNc",
  "key2": "4mi3L88wed6nDT81vibQC1rewsoG6Be2BKAfLqNvCCvw9gdPpXuDvc661aH3MPcGcYz5euFcFaPzJcR6fiF813hk",
  "key3": "2ifFyiamJoLxjGELDnrGwZ9rP1bYzpH3N3JB4kgFe2sbRwr8t8sF4s9FLtxLBYMNMyPFsoRxojWjmrxaB7ocvNVK",
  "key4": "2dPdcvu7nzRS14WsvWb8tZLepuGJ3LfzcKfm7d5qs64HsfwwvurX3gXo9dSzauZkHdvs5HNfTHSPBBRsoP3Yv8Nz",
  "key5": "2pZ3KqKADuhtFVoGW2JsJ4g9ghbRxrKQqPihFA3ckfj64zmbgyiusiUSqMe8GsASN7ZwcK2LTfns2XVxrwtUwUT6",
  "key6": "3thG5BeJfXNaDdKfyuEaM7DTpjagPT7kWKzyZVZryN32ymWmL5jJWtpSQceGFGfGbTnepEzShAFjatM4RsMxQ82s",
  "key7": "34JcocPfkw1UAVAL55VFDxVYpZ9QjSBgtmMXG2VFJeJ1Xs6nRNHrwxpxALEHQ6NZd9XpL2sWcGc8hYqhrcUC9i6i",
  "key8": "2odf31FoKqJwn3xSLrLng6VV1dhzuWpo5YW3gEJB4kby1DsqXsqjsHVjMTXKQEBBiRyveEbZeCJTwSF9SsLUdkYV",
  "key9": "3RxjsrmxKjs4Wqu3kdaAGVDvTbNdn5B5TxJYBTVH5FNoX5WtPLTgdxe98nKAs8w991yfJ42PZVxNmGsx8V9UEGWw",
  "key10": "4vif9T2XtSCu4iePeSFmwxZBoTbhFcmtUY8Rx4nBVxd9sKetNJxg75irF4NqPrNDF7dty1wsEesQs3g4XkgcrFPZ",
  "key11": "3pPTLys49mWqr71ShpphpAecaukJRHTPyb2CC65VKt9nxELLHguT8q5N3ynx1CKJua7dSkFQX8wY3C9jqeTLovaA",
  "key12": "2ugWy1STpvcYhgWxTBCg5T5a3zE1fMZ8VmRLgaGFJfcYGJScbkN2QLcR7yHL1iegBDR2Y6mVRJweWYhpigyxMGDQ",
  "key13": "3Gv49Kp3bf5o1cUqEUTf2Cnc2z1nfAKjLLKLKjsw8obLUaHRzPpzPFRWc2dx1EzM8nCrqp9XzZ2JxJ159T6Pusf1",
  "key14": "hp7wVp6anXZMvVtYY6tSDzzkiseVy9v1WBAyB16zu4tvJ9oRxcVNDT3r83yV9UerF7W91oj2htL5JGLHX9atjaw",
  "key15": "QpPjriqo8G4dNqwpK1V6tEozGbpPrwbKhzNTTetXaSxLMi658CE28Marv9th61jmWnrWFPE7r4MSATR9FQuHKda",
  "key16": "35AaHwJs39oKQKy7PZZExfcsVQ5kjikhJdQsM5ahYbWnQcMKxTX9rtnfucxVWCriUgsEgqUtv7c88oFWPZ6ct7if",
  "key17": "5MKXbmbXYXjftstfiKvRFJsM8CmqyyBAdPfV6cKVKp4SK2LmbSNyn5rU94paTJkTGHYYB7MAXex16uSSpFGpNJvE",
  "key18": "4mWEPGxQiXAmnN7mpZAkKWHnrrYpPBo6wjhfqgRNVNvcAFAXkw9LtfWnDrPKuq5EJKDttzUAwcZBQDKF8f4xfV3v",
  "key19": "5JG6FmwjaMD5riTM1T1MW5LBf9G6CpGTjocw1P3bzBkvmjfbKneJ5SSD3wr6CE3xaycuTojQtAiDnywSTctdEc9s",
  "key20": "2n6WALDADD988aBiLTah1wwNVtbPFkrx4rXcfjkQgwc2KdRySHB3EpGoFiWurJtK7CEFW5UPkVUEXn8ym6iEcjgt",
  "key21": "5SVDvvkRmQBCfHaQF9dg7df3j6G9YUzUbSeCkFXPGZpyAYSjZz7HccFGsbskJRW8yA1bqMP1YxdKufpuenaYoD7",
  "key22": "5z7Q8eehozMeTbwUrq3W5pJ8E1GxKfHvcd2QAqehYUYwCMr4bmkuAig6cLJ6QkhUw8yBXhemE8bGBc2MBqT2ogUc",
  "key23": "42pzBkMJ9SWop8PtN4VnG9KbtVD6LzXNczkKRTUk9q5rgMUqKaTzNBT2tQWLuc3ZAVgDGuink1qyp5Tq8JyrDz5K",
  "key24": "Msa5CTdw1K87XkUs9BkTuCYMohvHRJRMaaDJs2hzHyKftPD8zLcn35PAQUNDTsQNCT7d3BjR9FGAuiGTd79Nk8e",
  "key25": "4bCnF4MPaNPsYAyxBYfFEJWUHAkC7CzDHHUv1R1VbMakCuk6dbBKbXYrz9KcHpSRAVqd5Jbswbx74onKoHvZxsL5",
  "key26": "5z6Lgx2o8SaTQHTDqLCYyg8BBtrqeQaR29NN6FRc3sAsK3cuqvcUkf8gS8tdD46HC457p5wX65r6z5zFbNHPaQdN",
  "key27": "yHUvtqr9D3hqG3iGL1KFVGGBJHnopeXc2gU27MMoF4KkMfQ82PSNsVft4t6cDbjfBGo3kt8gvbwBXPtFyz3Uv5M",
  "key28": "JU6V6JwZTGPAwFwAP1AGjkQ9sSmUiw5pzUvDiGTWqczgVwRHUkUB1kKa4ScNPUEN8hbMFcT5MvgSADrFVcG7azS",
  "key29": "5iCVf6HUGYDXnEeTY2y7t2Lx2bnmnAqYnfvLEpryfx416qobAby5ydDw37nmitVsmXqA7bMLRWpyV7HsaYoM611q",
  "key30": "4AYHfuGwQWwQUDHXTA18vevDw27YqKeJ5zoikoupeXLR2Brnou1wWE5FWRVLUXKPyCHviRrCUuzocFcuLBWFz8UC",
  "key31": "2NxHV8eut4tAEgRyZw4gkWn1SLfAnmA5wqCw9qbXks4sNk9NjHZCEmfzhs714pnyo1SdVpPugu8BNVjM3pERgK7o",
  "key32": "4Wsj8Bt2PaY67zNC4R9kBN76YjreohniTiXghoQUEy9EWV8iuH87aPFm7AaQ4GjZMJNg2FpvQGzMnswcGiSzZq4h",
  "key33": "5FjVXaL94ixqidF99WuWNz9SmzubPkmmdZv4e7PbGSjsrPsWt4vSWSmu2XuCFrCYr9cor9kxm2JeLRwK4iPGF6z9",
  "key34": "B2KToZoZRkeijAumqjL7q2brZr2avzJz9qSa3ZvM6EbWusgHm9Mf9qJxBqKYZCEfJuXQP1CB6d2p138uUz1rcuB",
  "key35": "4w3zvCb3oma6Nh7Uy2nBo5D4SjqS2jcXQAtkwTdWkSvVuCztiyY4xXHiJQ18KzcwCYoNb5my5mxXmPotXoRtZnCi",
  "key36": "4mhCQmJs442GZjQpbvRdHDvtab11sY95jGA4m3F9CLxi3M4badKxMugi3pXjXZCD8RgZDteGftqKc6Fuo7swnPG2",
  "key37": "2SChT7o2qgtvKthycnEGhFX4vt2EP4zkUtLVzNaRF3dqNNqYTfgxeK5k7UTvaFNEYptvxEYhCy7Tq8NNuwHsHeqS",
  "key38": "3H4nfkTwJgPKc2wDBDyKEgzDMiFL5YJB99dqBN1yZViU9Q5cBg2ewzughYaTucQshpKBqEvmhoC2qPeQnZctZud2"
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
