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
    "5NQdwoYjJe8yehQhcS4xWkGon85QAY9NrjdNRDVYn9Uv9EcuuxSPJvyP2LSQFBZmfsLDRYpKUEesoBRsdc35iNzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3NgD7yVgT7BcGazqhbfLMQz7azBB6aMgG9Rheu1pL6HmRLFofqrNU2X5VtRHvqtXYbijgBQoqwkAMNh8ABbE5s",
  "key1": "497MQdi8ztEs1tCNJAJiY4zWsmDDi83XzcNVPSHNYYrFUURwZ6HwxUYTjtLxP6Sfdgzr7reVTxhr3aJBdUysMn8V",
  "key2": "aChxS2gTdw5BtJMj9qYfD2evGovpku7HTV4K6KXhnG29HqakFqukroj73FAhouL2SgomSDf2y98qnbH58T82cpK",
  "key3": "4DzSTGQqyHSqQvNtCX3GqyiVJUXE6pokNhjUzduWMKEEgcUpZqWWTgj5zpGNTYQqDcFMRMbuNCUEKFD5Zx9miotg",
  "key4": "4KPByFaDMnG7A1Zai1L9ifn1fhf2AenMn9ZeFNt6AU8M2818hCJ7fSx7AeHZWHzRsf4uk6rpUGYsboiWyiKk9Jom",
  "key5": "97eXRnbqX83JpDaF3TEmapmn5ZKN8jDgiMrkqMqs8XyYNzETasW9pVnmGdG2n3uwL7nLzXzMPyENdopJbm7eoGF",
  "key6": "5bGvJWw2UaDHcQYPYdtkWLPFNyXajxwYCNhvPwdnFJPKbA5omq8is6JKhqHigQPzWjVEqwXLq4ZLnjdV57mny5HN",
  "key7": "2qKYDvEGnXNYhcDnz1MrdAjT3HUAYoAnujhcMVeiBvBfY2rk4LEaKs4rHJA1Ad3xQQ16znzNyEooaLhMBZ2cqhBL",
  "key8": "oDVnXPWnh5Je5L1faP66TRh654MDSqh42bkcQGsSJ2fE6FqvM5XLNd9y4oV3YCG5q1kmofGFAbGhf943DjuTR48",
  "key9": "4eCznCoFDiWH5TrmuAGBqRJSvPLj581PsuH7P8Bzt3C5y5fRKKCwMav66cwf3QTrUeDq8jTvo1MngZnqAGSaWDJB",
  "key10": "45SxTdXBbev693W9mLJXcCMvXggkAxNAd3DrqFv187uastZ6TTvZ36CTjRXmpUZRuNLAUV6AF9q4k7n6vduBqzjU",
  "key11": "2ybsG2TBmGtnt44yiSPGQdVUDar2dHmm6aAdfZGgkyv2dgDdMg7KkdZ242XvpTGjvyNU9X2gX328FoKcer5iSZjN",
  "key12": "q2kELpUiMrdmDKJX1xd8NtgCysbNt8YHHCMdZS8C5QDadSZopcgyV1vZrKn5o6UTR9fTzEEQ1M4WvnLcNhpPbmj",
  "key13": "bEEvZgH4nWRfDB34MLMKqKcLfp66hH47sCo1eu1DAEYTSzGwkemMv4bUCnDwYFFTCs72t3qb1iiSqrY935sH5fk",
  "key14": "eNfjxiSodFdn4U8kgm9R9rtxLjsUxKMcSKe5e43MQSxK81mRrjpj5VMA5kQmeWME5Mmtov24cyBNjVzWaxcV9Hb",
  "key15": "4LiU6SjEpWKsYb9ewJE8zUZWfAuCJzGQCGVDBgSosyFNBpiZ7Ut2zHJofTKd3y1jCstps1S1tzSeVav6cMEegTeg",
  "key16": "DKbD43LGuGEFPQaWkMg8nCJj6WkGMVNrZb2aPLA7G99Yzt3BcNZS491J47jZXSHqwgcY1CAB5fbzLJjsgMxGhfY",
  "key17": "3aovnJ2VJa5xmpZx2hFCmgMNVJQwEy9bqVzE8PsRYUJHKeLe7rfDw4k1CPjb6Fqwv1AXFpttTJAsptkN4VBVw2U2",
  "key18": "27hJ4RoPfNHNBESUj83z5xtdvXqhht9PCH2iGbrLcwzLF5N9ocfe7omY1an7sTVrsmrsW63R6HkWmHKH9rRXjkac",
  "key19": "5CMKxum7grYcAVSHywmm7eqHDEwAbFoSVMJ5kGpRtJtgusQJMbzw56rHq7KGEu1wmHVFWvyqBAtXfhX2D8n2jRYx",
  "key20": "36cSRZMbAfkqM1GCpqxnSfriNr73auCK13VednBA758oGB4AJVKKNw63rnRXqeyRxeALUKNZ7NjUkQH7fYEYLbm2",
  "key21": "2UyQn8sLimqzqD3AbsLbajyurS98dvA9QcXy53Zvto8ZFYnpnV8AKnkbutiTsDAaRePUHiEHNy6NF4vZ6JqzJHAZ",
  "key22": "2wjDdv7tYHcSoQD3TaCrP95tTFjj2H3vdxpKZBE27cmU1N5bNLDC4qaYjrssHNgcw2X98TnPJ8wHVucRn4QSQVFM",
  "key23": "4th3sv1FSgNVA6xw1zt7optHznZUNpRzroNFWfaeCYKjEQkTv6T2xwzSqGk6VKBCj1p8BExZLtyRQSKnmuAWpYhV",
  "key24": "4LkfvPn8TiLjmd3Y8kLwos8nd4oLLLu6akF9bv9bPsDbLqVemEJZarfL2FRDiV3LyCDFPexzoRsvYAbfRv9MmegU",
  "key25": "3f5CpK3ih7L32ebd8mTqgGoGXqAiWwvMbiwW5zw95nmDNqfaMNYV17zK95xW85VEXeUakY9HyRoxVGjvHRrg7uPD",
  "key26": "36fkiA65AHGrroTBdrsVCEWAEdgr66d3G3yfjxpXp16aoYs8g8cpntTaprFytMYkFxKrVUtmodFGpJ3CPGF48rEG",
  "key27": "2p7m8igNHsabCGahJKUtu1t2r4rLX9eWsw9pYdFsehbgj8AUMEzAg4vNMD91NQeQ8LwDGyL51Hetf2rqYqWuDir7",
  "key28": "CxH8chhWniY3tZYFnuyrvriJq2aP4gQV6SRBtciLjCoKFrAPDFSGZHo4d6Hjk7KsQBPVyfBs7bFkSwiv7P33Lbv",
  "key29": "4RZUEBqBEngtkEZqWX8jYJKqbQu5J61uNYjXDXzAvwwR66hFMwtYdbJ9njMy66zM8tvrJ6Us7XxjFvYMJkC6fXc5",
  "key30": "5ajiDiTWcsk653bH64KvQnV3RtbaLGgCCT4izDjnatZ51w69EiMGcsMeUJ1WtzY8PPV9BP4GdmYrv2ZTwVDCrEhx",
  "key31": "3wARgkPBdKxSYNKzydToprZRKF8gS41Dx2atsqh1hDhx3C59kRMeuKQJ67ShNBytq5gdyoHmdRcJXf2dVbcF5PBu",
  "key32": "2eLmqX8LYDoggSEHCVTvihfVXjHxJpuNpkJY87TbXt5UFkwEnKaoJSATMkup3FSsgEL3yyroa2Nd8PMyfKj23Wnz",
  "key33": "5cXFsRHtVktUzKQM85GBJFwFWPyzs6pjyC8md9j6YmLUMmmqpgVEzyLx7z3c5LcJUSobFgkXxjEAhzw2p77WCvPk",
  "key34": "4vJm2UL3JHasc5GTsvWJCw1feUfKxJf4U4B6Sqc2ZzhT6BtccXUjavRPxuktZBdsmz3C2cCRZp9o3PCYYUQSXZP4",
  "key35": "4k5ArDkABEYQHyZM2dBePx6B2AgoEdtv32VACNGhF8S4VhYhogebAWsgtbzLLc8UfWDLx4QREwNrTVVLpiaeAiF2",
  "key36": "4FDPnxuPw8devPyTZijqy5uZYRMGfSK5oifZf8erNZj98CaqqKdRXuTmVLgX4C3ko358xG1RhNh6eq4VmxDreAKx",
  "key37": "2GaJzYyWxYVjTitGkJsPxVUJkooUfaA8SqrxicZEYCDtBsiSZbPWi7LV6pPD1RNh6P9rpk4oSHnc8vVufeVuGTh",
  "key38": "5tvcZ1BxhWjaH7MnjymhNBP4U2MG5c4HJxBCbfeF67DuiqhMooYWHsxJTwfXJ37MD9avRdxNuySAzpJaFQwADnza",
  "key39": "3Kt6BuwXpCX4nKuepA3LxvziMtGkjUeaeEMg6dwpLV95f8JJ8ypZAKCvuCxoJyvKxkwt4Eriqu3C51gTcZjjAAU",
  "key40": "2nFRdtYdL2YtmHUPyhZxx4U6coEdQQkyXx4wqToCeqjSNT1NGwbQrurtN7fom1MKWtvT4iXacN6esTbsdKtniu2Y",
  "key41": "2wDkvtdsWtx8R8JUxHq1ddLCwDCU5ijrTQLSjjLmbGEayfGUyrurjMQLMtTWdFCd6oiyzcnzRqhh3AcfQ33rBMYn",
  "key42": "3oSQUdh8adwfsXb7Zpz1T31DbVJ3BYsiNEco8afYxxVzoqumdtHNKoimEdzcyJnqDMmwDxBEwfdQtpmxPQsxPfr4",
  "key43": "3iewjXs7ALJpVs42YvHMM1XaNnziEz8bByY5xWYkPpVwxa8owpy5KDpprZNfCfRPL45viK9xUwquhQhYYGYBRq7Y",
  "key44": "4co6HB9qLPv6C75x2nDnwtihoPg44BMaRGkJ7xWkk7bADb2ypHRMzHgxXii4iwkQ4tYErENeThGjfAYNsZS28hKP",
  "key45": "39aiJur6pkRQdHf7Af2pAXA9LKsPyP15Hi1WMkDzPfnnQq3MTE1iwSrNexTHRZs6ADX9HYjDLAodTz6EBGcF82Yr"
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
