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
    "5c3qBGFGqanmc793mRMGYQduZ6qYN3JjcDSGhi2g64PF6SHgfLofzmNDvbZdTBmm4Uz7cf9wzajERUDJTnxA85Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBa8qXrjG66wWPtAUcicYovWaDhJbfg6iyjV3kEtG3fLpipr6jeDmPpDPiVaQWGzB3t98mkjPPSJzU2M5yR4HvA",
  "key1": "3MQX19XhTQxP8EGfwPfsqXZLrZqhdGScP6hhhqEuYZTSy1fM3zCf5q8hc7JN2vUop8qEaynfpWwXXpTqCAZY9vua",
  "key2": "4KzJVVsMUQz8vNivXgSFAAjN4yYpNy69bzR7JgDdWpyX2zQq8Nr6KWDPvwAXe8Aaz2SNf9fJ5SGLgtzejkbuozas",
  "key3": "5jqfUPgsaeBmN66Mg7giZGcTQES92Nesy8PKyc5zYnMbTF3FwHrquQA2EXbmodxTwnrpL27dUdYP3m6Lfjea8C4o",
  "key4": "4HEXnKq2EsT3wbFa4ZkMTWSzVoj5n8gEKUsJ3scQ5xa398LkbXY4jo6AHsh2zDU73Us7yXKfE95xuGJz1Rx66za2",
  "key5": "eXNmkkcxiV9PtQhwXn1Bi6VYUhMTiUjaquVCxw7bDun9QJvzzmjACoMkb3vgRnDkpd1Nc2ruoyULAWmcey5TaF9",
  "key6": "4F7UDUQGWawYnBNrpEgxz5Xw3DzqTszZcR2i5YnaCAnjjRWo2vfqxkuqCAYRhw6aVn3Dmz7Mwa6xCLBeonP5EFvE",
  "key7": "2dcpC5d8TNTb5VpowtGMHVjD3dRDqgdGWufWqmy9GVLMBWuWZXgafA5TXqPGKitkL3mRwcDWMkLUP1nVDo922BEc",
  "key8": "SoqSd1B57btvDZGRt77vWzr62bSEVss5cUWY2Ng514YKdHGb2ponA5DFvt53uZh5xSsv6o2Hkp7gxTKtbfvv4xp",
  "key9": "4YkUxyLa8B7vKGsbJNJLUZQb25ZAkkQYrzmuYLnmPRjeU8TKwRQX7jftjsrRMXkMbF45cHAX8YJn7YTGLsoeqQtP",
  "key10": "4DUTqEbWUEsiFPVoagc7dxM2mdasfyL7xSX3CWuRkY8xx2ebAS5VW8WF46LRgkU2NWt6epYrkp3zRP3ES3wm2hgG",
  "key11": "cFfbfsWZEcb9tscM3Mrm5fadcBNuuREqNo9yTyexeBAzyGanbum61xhe41y5W1eu1ZSJAsHidn4R2NiNRE2dUih",
  "key12": "5fsWLMEgsBLi3uEX8nq6dzxoT6kJfamrXS1q2WdzM3MAC6RRzEkjPB9s4pbhyGMEh9k1hhnn19haYh8XjyE9stNJ",
  "key13": "57qzeUULpXgK7YEfXTCZQqnRALdnMti5qdmwKrGrQzdngRrA6GaFUxf2TgbEckEnEdjeiFNxwEppMQWfpUhUDDpF",
  "key14": "2BwNQWb1HMd8BXPKNomd1SUxS9CRoAXDm1tKcMaEQqVgUtwEK9ArCfbahH3F9qTQjutAGp1GXDNBJTvJ4uH4PysJ",
  "key15": "5SBcDZvTUCKXAy87sLjTiMCfXkr9n3D3M8ap7L4U79Ro1CEKJRJ83NtvHoCuXFsuc298fWy3cw1ZKKZHYXwCdzf2",
  "key16": "oLLLu5VHptYYtjhDQ9Pa14CDwGhmmsGgJ1n3Yr2iq9JiT5q3tL98GtJqtE4fL53zua7219rwpV4826moDHaEZz2",
  "key17": "3cciMbqX29vM67yqnt5R1BRSEoPH3q8bbujzGkjciy8NPn61yL6htcC4BRyvM9H6hZMNt4wg2RixoG8kdrMRdvuo",
  "key18": "4Qq3kvVzbrz7hkChX596KRfdZt1dpyP4GZRasYhWHNqyAHg1Qxq34WJeC4bdPYW2Rk4jN9m6pKy3JoFxAf1EYjNf",
  "key19": "2xqibCWzcVY7SkydtECMeTTgbvL2egYmYqxedpoSHSXReRz5uzHVKXgt6zfcRqTKciZqm3wS4gLR9NCEkDJL7tjL",
  "key20": "2P9PjMFDh8AHBjAProarHRSTSto84RofzXMwnBVQX4ToE7KwyPHUzMde7KJ7YQ528sxi3EYNRjYqRXb1niDPnWiv",
  "key21": "5bjjX2s9QUYnHLo2xM2pmPs398uCCKbnqVmwNhjwEXwVgdade3GyskvfQ9eXcdscbJcvWXP79vLJdv6ArJXx24H1",
  "key22": "3uuYvAqfUwfV769MR97MfTGEo2FSELU63jiAcTY4GhoswJP2dM6rt6K3Lx4T9iDVXqXwhUBNuDWr6cAY2kkcxhc4",
  "key23": "5TYwwX8dwkJYncJMDmrFtCJjRBgmU9WzAvKxNN5HEehzQb6jJt7UUed1GtzeSN2CN8EUvp77Ps7GiAB6u7mBjPhW",
  "key24": "3odAiagTZwoj5b8hEGjp1D8jmdZ7zMsJUTCRFr5bq71CdDm1BU1QnfMMpjVxsMFPsXmubw7GQpLuNVAocqQxVs3d",
  "key25": "38BBkYCQUu2SCH8PdRFKaZsehkZeSsEeEtYjRGeME2QAqKp2ovQxxXjUffzsd6fMjYZydPSU4TkymdjEKg5KpM3o",
  "key26": "3khXPBv4randfTx1zajJHPzHkhXaR5Rpv4oha8Bw4WDKv8G5QyNYkUzVjAhc1s5tBq513jVuGeXk9FjLWKu28V2R",
  "key27": "21GTA1zjmRXmKmnQi1CZxbkJ5ivCckfkKzyggJ3WCgU21c4HqwhqmWjWb71VEkpZUiLHc4eK51fJxXDTosJGbK8c",
  "key28": "4zri2kwX6KKD1gTaNKmJDT5xWMY5528bqSYnY9CA8v7zrxJWGXCM3p2nT3ekXW4HS64r32k5msiMgEbMhSAJX1kx",
  "key29": "5eLDgSPe8pqe3yToY1eSowxtnJuEcbvSGTYmJ52bg4eg24NEnRsdDuFrR72rcXCrpQQVmCT4gQCTNuCxiephtLjd",
  "key30": "4vBYbMhBsRDjRB5yy8rKWzEyF4jQiutNHUxCLkDtL1QC7LPhD5LwbaRX3yQg9PhmrgLQ1D8MPpw1z5Dz2bTM58pz",
  "key31": "3LvGp7Sxte2rJL9rsNfLtGBtmY4sXm63a3rPZ1cVdZoNVRL4XuiD7eHXTGKBo5hdkHi5sdcMhuMJffLAAv6Ju3Je",
  "key32": "2CFhdJLqASFQ9V62tKq6JogPnomJkSybWZMBaCi33ttFJT7YLiWAJBEDQSis99VBJTjv2TFZHnmTteVGCHJWSP5",
  "key33": "2K2pmsepcaLRjCNSvd8NLb5mcx3xY1KYsvv3a8m9b46s7fSmiZEdXuZo2CczSxeA7KoDWq4smheBrAyYnfYYd6su",
  "key34": "5VTCR3oNFqjjBmkBzbACD8J6RVtKmWZPbif81w3tdU3CWuw6mzeAVcsPQKgnemNQ2qujsTYedL24MWGqZX3P8QXc",
  "key35": "XfVD5agmch3tbN5qGc5EtJk8bLbUY56rkH3ZVxRVQHLA9xW4uNKDuxTpwJmQWkcCpHv5kwNmBFrzhRuyfF2rVtc",
  "key36": "5z7rNe5fKVPTs9o9rSY1k5MxcM4BdTYk6qCURfW7r5wZPm5MBG2rAS7sF6xyPGqppsKFA5xLLqB2iWkMVPaZAAcF",
  "key37": "37Y5e8RoFSYcp7NcYCBgarYwCLzbbUEWiuVQNMcYoqcWYWQSq8o65EQwtuPVYp8ErpV1fiXm1VTDWWGJRNT2RRac",
  "key38": "55N5BscVDxrYx4ZmcdyATs7HRhkM3ghagncY1ALdNmSCfmXviCfJdkG2HsRMzFEmaC4jYs9aYbtaHWz4RepFMYHr",
  "key39": "5kK2e8SgNbBgYdTdVxUghSqcvdKJwJqR79mcSBAd4mBonQaK3kNmvPTLMpGsMPMnvXtfCf9RaM15QrbCWNJVXUpN",
  "key40": "2BgLgdu1FNojMuPPog5KGXQTLpd8eRJH6tmNtSuhtTGYGH7CZTofspgZxuVTD1S8ELRjVjEuZUVZSHH96gj4BuCg",
  "key41": "62tkUGfTGvvTdMD3nHmrAdBxQa9GR5ot5TATa52295vscj6TXPyHWQ4DxxXAsvkSDs76eQQQzLCQaTPpX7SY54Jx",
  "key42": "5dLzRS2vfmaR8Wg8GRJ6zZGHiF9BmvZJp2sbSN5E7zU894dRTjQQcrQgKPyRuRAuWzFU5NJ1AY5xJwXZRU4BSVj7",
  "key43": "ruDtj6QMJFvwpDMNXawY1hYYdsqUMCsFU4uGQp5MH83ZT8cqU8hya3EBn9pJLCfTBLm2XUzdJJhhbqctNaFf77x"
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
