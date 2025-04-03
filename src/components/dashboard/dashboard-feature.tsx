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
    "4iYknKQBrindokbCUEqdYvkTuaBrnLEfd2oqiyMViP6CSUtAmk5ao3PFXnrp8qLwJ7rxNTbwwSeUtHXLQuL1671L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42fBe1PC5jzgRHwmBmVbYR9SPJruRTpRmqttRH32z7yRz36WXoQYd1b752qSZXbZoTDcR6PFregacRKTg9XMzHwJ",
  "key1": "48c8EWq8GPpRYvKvESeAoWcu9bE2SA6M6t1sug1ujdQ8aA66hVQ4ca4cimRy25mWEhKXJvZNb5ssbjCbgwqq11cn",
  "key2": "3Fx5ECVc7WixRRsRByhWaScTMKoELFpN6GmWbHBZqyFYMuJVhn7TM94ndstsSe6bxsWxaZEmPQLGs6dWqQ9wRrrP",
  "key3": "KubV5cjkUCTb11s9zoScum4FJXZHHFy2jhopzVucKiW4HXMdM94yC3FfPCf5BjSusburL65cw9aNBxvMtwvnAdn",
  "key4": "L2AuNLADp252q8XNaZFgTeVd8EZyP6WqPdXD2sAHMunRTpTEp1mNENYPMm3JybYnFZ5ZfH3X6BqPKTsaMD4xXbk",
  "key5": "2iDu1z654oUNuUDZna23kJu5sQcTe7vqKJauB7ximJWoZ8Ko9S4Z2Ygh1oqh2vDsfbqo62RFhaWK18qE4HtbtZuW",
  "key6": "3bJ5kEoEXFrPEHCbPWp5spZF6vm3pvRAwPghBYFs1qSAsyL4SiivKyZ9XbUE8ZqbT2bf9dvpKjgip5kfYqc5JtiK",
  "key7": "4Z1LyYa94rEFcqYU274k139ugnHFSrBuL6Djn6LYE6eYY886qjJpGMaj64T656Muw1e7Smzdyf8PR6PU4GnNuRyn",
  "key8": "2wCNVCj1aNgfmLDRgZgcSEBbK2o84Y4M61Zn1v4AtaQ2EqPgQJp5LQdPq2VHukPfbD1FEhZkQoovAZ5sCmeMSYd5",
  "key9": "5fAJK7b3dEnRKWwAikX1MNFwUB1mqHcMyZ9NuupwcUtC5n8MrFGzdFvj3uF4EYbxWe7Cz162PSYGnZNhaHnNPAJ2",
  "key10": "aJvnfLTGKxNf3GqELXhEWkbL9kFSTfsVSGN1tzvevkyFP9AsFf8Yf76thb2JxDds8D5ioaPvPdToPri5v2JU1kk",
  "key11": "5dcY2cEjwNwjtwFf1qoBL5KBCRtfPwdxCck2nNcxw8NVFvgLTQHgQgVQ3EcSwp7QSoMiuLUfojDFKoZ4T443UBmZ",
  "key12": "hSrGhG1KH1LubTs54C8p8ifiM9afT3mZQun6RD1XKhkNgUygNAkJjg1q5gB4XhAwyJj6H9eKS9Xbz465r885exK",
  "key13": "AP7nAU7mYZpMAKJtQcx9BZE9Nh726R72WtWVzR4At78uZ66eSjSko2Uj64s3Ng4bQ73nsnMGmUU7MgKhbmnKZyG",
  "key14": "5nTcVxuKbUsezhjQXvixjZfXmpVjTqU57J8kDBCi37WJ8LTck69U8P5bjaQNjHoJThDmmpd6rpskA8CG7gXjxNjp",
  "key15": "4iuTMc5BMfx3pw7j7xVB9qcjdy5VhujPjpQxSirtu6AWnJEM95QVRq2QHaLwiYJoCircAkc8WNYbBLirjfF54dWB",
  "key16": "3AuoirCXVZ97MQ7dUXg33jghCnmQkh3si4GyWvMrKemePuHSBroUQQ5BeXzNqppnTDUeruyohpy8oyba7CQJeZNb",
  "key17": "2t2RNwzaH9x6KWmmiHwK4GoLNVUEQActqGoup2exSjiauxjn2A6yag48hEHi2jThUhbfZjy4e2n1CdaGgzPZCGvk",
  "key18": "2h4zpDpYuH4S7KFpyZNXLo4EukMZ2xtdc26sdk4fi9X92ytNS5By2QdTXxQruCRn8Ba3cyAmzDi8Q6unnP5fRuwm",
  "key19": "VtspYoSR7RkuY8ucCVpGQafAZLaZFwf275AX3fEFy8bhZUTG391Xrns8KuxicV3Nz6wURK64oipf9qiCPdkN7bU",
  "key20": "4b8hnoUfgZgmnhAAAnyGg7XSnay34GPw9E9AaGmz4hcFcGjbnZmaP2rjsjxcUGLYroZ62DKthbA3RJShy2bQ8YJ4",
  "key21": "rKD8FvV5rMx4m2RAgASjjezJiabths9fc6sQUvpXd2kQLEVpr8AAGLNrD6BCaME29PJtTF9TiFz2zgUwHSBowHv",
  "key22": "3nTEqDPay7KsmzrzXDMibaiWaj5Nj18aNdCUZ5BhrcnwnHZsK1rWWf9qgwf9Yo6DtxUSxR1thbyMYjgycYryf6DW",
  "key23": "4wfoTD4XmQFRsoe6qNANDqdwtT3y9ash9KwuEmyxTiTA42YQNMbFbZrwfFmnbBTMau4RVjC1z3MpTssxkNiEe8Fo",
  "key24": "4dKPWwHXMkQz2DaVjW8Gd4ASzDSzzZGqVmjL8FLPfzbTtwBsKXByQ2oGf8SRCyW2itRNr3Y7S49tGvQdfbUF2EAU",
  "key25": "CkxHKjSETmNUtAdKhScs4LKN1391d9wDaXK6xgczpjWj7vmbCAfNcYTuVWNLVEGkDoabJjGt74V6PEAH3fX5BnM",
  "key26": "3rw7n5CKfZhMEezqaqonwb7AQ8mBtsnZeDAVjYMiBkdCFxNVi2ZDW3m33xiT8nCD6xXzuhWfMPrUBB73WEDXoBYT",
  "key27": "2iFXnVm7JAW6cX3865qF6LDi224KAb2SL3pN8Tm8PoS8Akjku75uyRT925iYfwoVL9tdC73hy9YztZ7jZmJCv8Vo",
  "key28": "2NZet5GCgBSE1XqMG3g18V3jmgA5rmeCt86WUF3y3Lwe7JtPY3NbPjhsCr7Cxe7GNTJq31fVVz5utGeBB33SH34w",
  "key29": "3UJD735WFhofDM4cWBG9N1gHykse4iGbDawjBVNWSEMUbW7JajiWtVEjipEd3cr1XZkv99ZFkJeq6aCWL1DdaAam",
  "key30": "cFU7VRyPJGi4QZPbZGE2bxKtV1E2WpYetN9bFDqxSrw8u1XXKHmRZaVaXeVTXF46jV64hM9aEZux8B9FweLVu3H",
  "key31": "5sBNKWHVW8tepyL2cdsaJo9H78vMbQKQM4HxhhPCLSP2HTKGCSnerLV4eG79DxP6a5ZtFWzsv7nSrUra4QnHpvkV",
  "key32": "3z6Q6TABPTgjdqNXyeCC9Qo1AtNXYPgyfrPhjjCyysYaSdNBnpzVbgvr3oRBBsExfDmBpR8L9zqZxB6kLRjursQv",
  "key33": "3Stpa16ZcNGQdKzb5iw21DZzpySFhKSxp5EKvoScr1pfPKEgkCSK38YfxokS25sbXLbfWjmqzc6EFyUnwWNDofQb",
  "key34": "rBV9Z5MsZZeUuRBC7B495ecSo18CRGbCH3rXaY9gPrDZTjP1cjQfv6qvpPYDsS8NKJF4wMr9FW85GaDNtMswRLX",
  "key35": "559eETJRZgaArYxgmBCz3hzBcNU5TuZrhwvshj7PkqzNVHtjFtgNB5sxUW3CdaZcrqvnWfScgbvoFkjL9RsjqHne",
  "key36": "3XcfHxrh19UMCSN9AouvDgqXrSTAumYTrqjMxS2daQSb1bt2Zvf8B1mZihA3yKSk85Grqdzrkjuc6M1e3uMnfoTY",
  "key37": "674ANRMrZ9SNhuNqWFH3jPUkh9Zaz41uYqs62MhBb4Yq5HTRc4MJjrRV1u74rvuTb1nwqMC6zf3NSXDn7AxZBfdQ",
  "key38": "5eqx38nwpZzF3YLicLqz3J5Bm4B5ifapkSc2t52oUBqFxqHhKosn3H9NvwFEJhQoEZx4cVWLRZjJx32BogLMQtnS",
  "key39": "4jTGVNDfEteM6jKyFgfm9yiXeXwpKWYMyNsE17WXbQLdAVCfnD78NAhemb5pFkbgjVrhHU5jstywDChx5CNi4yBo",
  "key40": "3fpsTtMVRMsfVTbHxD3YfckioZau1LVXy37XvLtLKn5AL5RX9RhFSZfHq7Qb5nMUPVdkSqCESRw5UhZGWWdMxsb3",
  "key41": "31k78Nss8ZWCG4EosgQPPQtM8DqRUuGd4LfMzYmDBE8xHY8mqneyRkTXXXQVqRRvEV7vRCMA4HC9vymCtx79sERB",
  "key42": "63iDzMiWDL8kWcsLZckVUWs4K22hJf4ehLd4QN3ifh57HFdTAJ7A7EYHLvhMuKKHEnN9annUQtTPU1rfJ7erLjgE",
  "key43": "5HezKjHCu8PZMwTHv9P1jFC9tpVGNcHxrycpH8WzdZDQToWQPEf6i1Arbi1aKoj5c2JjhhkyZdKuBFAehdqqSrAt",
  "key44": "2hHYfyomHb4FBwZbhg5ypmnLRsTULQhUMt5iFDcZd9MkJbdWCmKkCPM5uSN2eNCcZd1kEbYbVpzNnHqHLF6R819C",
  "key45": "EozU5xmLmVtdJojrwodoJBotgQR81pvfEmCGaAMZng2m1x45WGRLVLJMVu4WnTKHJfwZw9tbJVyQUCZGrxRPoki",
  "key46": "43XaNJkwXPoVCYMkKcRS5tjrRPucvTEhxcMc5JcZjqKk1ctn2fsmr68HmkuFrceaDKDEzAJ572jX1Dx8RaNm7VrB",
  "key47": "2TH1Z3PVe3zyPz5z8hpT4truYpqaLXssC6VtGQq1GndwXbFiudRYU3FMurBEfhGNtYaPicbwjVd1SjdgwcV5Uz72",
  "key48": "4dfcmn3tHfHcU1PuBfTxqZqyFTartSe8yjvxaNa9iog19Q45DrRXsTinRLjCpwfHtvixDQgUocCu5z6e13kt2No6",
  "key49": "MW8DY2qc52TpmZBVsZepr6wZKZ7QxtXEomMzuTU2FAShFVqY5XbbafV49G6ESgMnj9JdquwbPWuudWsfm2r722Y"
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
