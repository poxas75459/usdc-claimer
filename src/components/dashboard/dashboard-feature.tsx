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
    "3nPhrHe2ns7ahCm2h63jFdozNNDHrMg3XGDycdzGeCh9AfjDNS5ApFtU7CPe6PQWDrzUUEteTk8ERQhyS4j9VuuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V28ds9pyFtaZ87k1d35GAuZCyTDMvChkweDzB2JSo1xksUTX4tykQASKAYrdMFduafLXvMGn6q9yiRXA11z9q5H",
  "key1": "4ms6z3TmZ9QifpwTwFeeFyHMMNLJ4K8h5TBNhcWncgC52ct4pMEZmS7fvVdJBb9bWdPLd59PBQ192hyGpqZixpGp",
  "key2": "3BDrjr7Lc4TKu31TsKPkzSAnBEMKZHxzTkhR556DWWNXwtr9SRUe7aUam8TsobNzscezwsYm8RdzKT1P1YwZHviR",
  "key3": "4UjT2LkxBF8DAQULG6ExCNC5LQhFyTiX4M6DD2KZxB5CpdhQsMHDREsaJCGJFJs3Ym9DQVx4zTTRCgynwVhtzPXi",
  "key4": "4x4gTY5ghG2VdHaiZySnMcaorNJx9fgtvr2ck5QzGLvMKbKNAgDsm7cFpAfwW8xRFokM2fUrDreDjtfX7p6VxsEL",
  "key5": "32FXXmbsUuyAUjQvmA3mFB2TGornCD8rkZLpqPaRXwUoSxA5zhfX2RVGAQ14zqMWAAF6VKpnXL4LQGv9b2uyQGVj",
  "key6": "2RXBR9sUpv8Yuhqnfa5hB8sHQP9fGVNmAGBVGupMd2LvPw7FLw3cnUCiaW6itGPLnYWyEjFtMvebeS7xcQRPKVHg",
  "key7": "4kSkv3HTHmwaK7FWrWfd2mRHGVVcAJCkNLmQDfYYzxp6KqZMH5Uk5q2sbgJRcDW8KHfph7DvHsT4ERnnQzfhx3Vu",
  "key8": "2CZi5WCEP5obAg5mpTfp7Ans6PtJ2NyD5YRWar3WQMSAmCfZarSatE7P7FoZLhz5X7cLmXDJWpWvvSkDk172qGpT",
  "key9": "wvinxgV2SrxBL8N31BnJQxgc1Ggdadn12ySnF6vXR3bLMVSjkqoPcoR6UMy6ohyxQ1zpVhcpUy88CyKWfodQ6dA",
  "key10": "38RqP9GCKaWGAZeZ14Ec9UVvLkuSi5v9D426cvzpcKdmNQs4QG1UaxYSbDNbeWAXrJ1A3PoUwMBB2H83Ghkx1Lf",
  "key11": "4x8zykcz4ACbFcyahTeuPuBjZ4mebvTXqnNHTDEEF1Bcnv5Wcce2ts87mCANTJtrHgGG6kBwwXnSaoZ4Gu3wCFr3",
  "key12": "4JwfNmecqgWsxkvGseuPLUbmo83JAf22L5vdz64vZCR1xSrW8Vu4taxzRmDGBkV2VfGCKEQT3Ar1pcKi7Ce8cB1h",
  "key13": "2JJC1X8E7nRkbUgA7LBm8yyXKRFVi6RrcjqDFDKVmZLxNsQunGWt89pNP1V9G7HgRvaPq9oCUhPHdpaKBriZsgej",
  "key14": "2LCghhw2REVxC5BzSwRonCbaHuLcGQ3ytNBhFwjALMB32PcdUoWp9w98yyaMzuB5obai3o2GTqxct8kNVmA4gkQV",
  "key15": "3c3aJy9ksCgGPNV3WM5Vi2ETsDfA6zp6c5HYRXz2JHiPn2E1KFsqRsyXCZSCCeoj1m29hxenx99ggEoGttHRFdT8",
  "key16": "D1Fy2Ujbhoh4Py6pbFwvmuBjWLe7NDzVApLGJ2iAGzFozjtoLfR4dP2Lea61AiWef1MF9C97S46coPeoygFxHBe",
  "key17": "5Bc6NKSBJNSV4SPr8QrhKtePucgXs2w2uSSsSS9Q4JuoyVuH5tWZmp3kiPykqt4GpJAVEpJ8kr8y7ompRBkeUB7k",
  "key18": "2fVjYduuKZ1ntMGKRzPWFCH7gv7JoYm9bQteGaBS2ZNoubZXoVABViLKaS6SuNqbp7EwjdXkdct2RTkoM1ZmZHDg",
  "key19": "2EU6F3j72GsxkpFH5EVJsA555EWnuFeJJkK1gs2x15PRr5oAqKzwGCfyqvWrc6ocaeJwE6AXPbE5rYEtMVJmQi4a",
  "key20": "4hJVsd73CsgoGvUawh3LRwaEL56oTJM9Nz6bm9ejHXYXKWLQgZgUDu4aciuZiHd3vkTes8a66vcc8UQqE6267mXs",
  "key21": "2wLZC7VRkmR94VzHmp1oMaWMonhpcvp3v16m2utE5hWiasQuLSscPS3jX5MAv9DbqzkD4iQPZ2KDtozXtBeBC2ZZ",
  "key22": "54EU9sVrKCuDr1VA8vBJAhMakBMYn3tWqtPdY5zDzvvZwExA4ZxEscXMuPngHMhGawWoUstJzyU34A4pdBC4yBzq",
  "key23": "4cJARD7RB649JjEp1cM1cb2Xfh6aJnHv94dNvM27UmYdqwD6sZTUDgpS6dmNcrBA7DCmB8EuyNd7qyrpiWSfeY6b",
  "key24": "2vSE4YoG1zpNfFgth9TGFk2WCYttQk3VxfvC9DCinyj2A6F85SuXStiweACjMh7wC3ShqwqaYtaZwzbm8Bn1TSqo",
  "key25": "5yiu1EeD8z2XnmBdBJLbF4APsiqcXxXDZuS6X7BWZDyBPGiLHbEn631t9ntajDaLseLXiBEycyE6pDz8xCPB2n3e",
  "key26": "SK52g648F2mTTMxrjSVcsgHvY4sJkZNybX1xQE9eGRTi9xv6LNxsjuzJNMKmpGFa9KpgeYnBDocFX8GyYGgErfe",
  "key27": "75geoGTvTPKL44ijAyTsqkMmbgwybsmtqFn853KCtAdwKTAjuzQU7pb8A7XKDwsFaog8cxJnkY2Hs1HNH3Smc7K",
  "key28": "wKpWADKmMWq8JE4LwZWH1wyyhdgrVbD8FPBeVCYSjX96vVZcYsH4qMRuadrys9Had6Fdin82qDLR6KPLMDwutYz",
  "key29": "BmEphH8Bwtz9ynabVuoEYzmR4yT8KTpWumEbeqo636Y8mgc5mavQWjZNiaAJ53ooBMRphPCHjsXmwLNbUfh7Qup",
  "key30": "5vQP2HXvZ63s7VyjRJWFeeCPYAdqzxo9VA5RpWJaDSGbbk8HJErgdaZg5utvSPrG4iuaBL2ugZMeoapcGh4wNJYC",
  "key31": "3aCCN8AoXXHQYo219cgj6GcJsxByNBhzD3svhaxGUCJ1f3ayZcMZcRrj9iHA1wbjQJi8YxoVQdXeiU5YbUezUYw"
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
