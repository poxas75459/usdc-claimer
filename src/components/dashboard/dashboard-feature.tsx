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
    "TpYVjtrfPs2FBUrassrBgGzegzvgwkQcquWSwSAKRKox2Wt8CFpX3XkuTHvfgDW2oCUoPDuLCznVgni7ERRHjLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g3vpitiuEkNyZCGU3wMKSn1j6yV4XKXhj36e5YPKxyS386uejaYDV47aR4bFEpiwS4R76kA6Pih6eQS7kdukCAN",
  "key1": "3wzWdeSCGAm41XEwzYNapBBRrN96mjjPHSNCeHEvigSDuUxBVC8R4FUcPzbCD4PvcAPxHGU6Mj8iSB62sisJUzW5",
  "key2": "4BdMPzJz6AAoL8bJvfmyXmxZYArBjR7QLNcwEmopKwiG2DHfWhPSKMHMFa8UgdqkB7UK5xbZiL8XNXEr5ax72kcx",
  "key3": "2QJTZhe5c14YiV6PzyFCMjNqaEUHsxqZDBrGmf2bk6LrG79vC3scimHdzMWsAe7BKeYYjKt2HEEMhRx4Yw79DMwz",
  "key4": "3UThfShmjrSqmm2dcAL4bUKktpmm9XcA4ZLaLU9A7bcSRsTLUXvtSJRJe9zHAN7WzNycMxEFmBydUYarA83yqrQJ",
  "key5": "Eav7M7d1LVpm9FbUpVM2GQAXZgZpumi66wZc8gKQGsad9fW3gDk8zH5WZc2cnqZmpf7c94ocJBhFZNMcMfZus2u",
  "key6": "ACcz28MLjnJmc747HCKiS8se4DgK7Y1QyN7bdAxJkuadViDztijKW2UPAtqsxYcH94xXMULrr5wnX5GbevMqT2b",
  "key7": "3bR2agZT4j53BYk37YHTbhJixydzXDeriiQQAwsD2iqFBGwyNdTfj6JNna6BsHMyRTVjnujYfuFLtGqgdoRUVzvw",
  "key8": "i4VZLeixLQCiawPxbtpDE1LgbH5j8dw3Uy852t66jADF45TfamfFk2wreHWGLYfn97L47bN3nyGSuSn7vfTUW6k",
  "key9": "53EYESE5y4FKQy9nCdqVAoPkCzLbPeq5p9KcYx2qGLULireaFqfQGsMcsi2UNGWpBA93A63TdicXq7E2FbhWFg7L",
  "key10": "2KqJaBMfNj6Z4jgTVETYpCRCThJaGf7QGh8fb6DhSkjYMpYnisbkEettFTkwiDy1CpUUDP5S4GtJJsjNytXswZi4",
  "key11": "2anwFP99RiLmCeyvXANrdQWtjRAVF1WXTr1szK6fv5P895uYH9qkXcXcUanz9yauu8o3aoRMg8wuL4dJc5RVDodu",
  "key12": "3tpru4RruBgTZfimSSkRJomCGDzCUwJtydECZUmESQT7wFSADbDdjwHf8zp9DCTWp5w9TPUFRZNKGAYZrJYp2xSk",
  "key13": "5xUu23bnkyV9jtHhSuVXUTebrC6W4kseDetDVWzzv9nU217ieVzTVAuwzSK8EQ4MyEBqaxr8UabMby6eRNQCmCeV",
  "key14": "5Zs64XP898xSgGUGbr1dR1KViX8ZiGtRc9Mh4kKpijcGuNZEU5hTLX6ruGd3MHp1XatYQLNB2po5wvz5cKm7K6vW",
  "key15": "3CNdcu2vhQtLXySubMJzA97BcuLwTXbJezHCmMxc5j5E7xP6dkP4BbvKq386AJirZpEorhruCY3DzG7z61uqH5DT",
  "key16": "2g4v1kDgErqmrgp3zcmtB28hi4kRNF5Ko1jidwEN6qy5j2HSKFWKj19bRaD7c3wgdfff9AmWJwgj8a2ijc4vd9Gs",
  "key17": "33wEYQfR6UEvZEYMxw5xf7tkFTp93PHSctqdS4pFxVpggiFHvVLAZ88B9k39hKz6MA7bFamLjxfqineNqaFu6zCD",
  "key18": "5ZRMXpqWe3zFkTQ5shEj4dDqks3AiAFKpEJjP2ed4Bcuzejpue8Hr5g1kwjSPaZRRd5LoWSm22yCVsiAtjKF1epv",
  "key19": "51AUhT1wSyKjAE8zeVr9qHMD83zoAjNQBPEAGuery8NV1BWy2CJLkF7KcpJzpiSFR6kdzcH6PdSGU44u3jPS1rU6",
  "key20": "2X3UNioivLtHigPvuJTTHdUoGnehR5Urc6KtXdZ13udzy7DgK43kWioTjFMLsXuVLiZzbagkRdBTd4yV81VcVftm",
  "key21": "V8eqtQzF5VhpEqGPbheNMaNVEVjqWUuXzmSrziknUfVSeniMgNxTFDc3Qh8Y1ad2Fvwrj8J6DGKSbDE9VAT8WWV",
  "key22": "5GshXyWnLXvGcy7LvVtjSZBFXBRVK6i7ex3ZZJWhpW1Qy7Cp8pupYeGyGy7NWZYMWdAvWAhD4aHc7Aepbw7ncU8N",
  "key23": "3BLxicUU9LBXoGsUHdERxMTyiQDQzukVFRoqrSwtp5nNwQnqUwYm7w1WaAtve22SQ9cEumyYQzL4UgcRXT14ofGL",
  "key24": "5GrpiaPG1guEG4n4Xt7vjLDvBWtdigpm1w5LocLcTEa7AvYDARCzyxZaV5iZrsxUQz63iDnK3Ux3qChPF5vMjbHw",
  "key25": "4ruN5x1FgHdGuhNA1WyieRdvVb9JRp3TsrpHGjvcYNNrUtzcjvjhVrUK4gLP3d72CzZD7DDoraWHnFbspL9gqAWh",
  "key26": "3D5G8i7TqC2WFXcPCQqAGXK8D4zfeTAf742ajRYE7MjGWJt5Wus9PgMafvaT8vyWWAkHZxmxiq5wUJorwN354Tr8",
  "key27": "3prxoUuSLTi3LjREKAdXgzryY5cp9knfiXnvncwUEpgDom3hMDnPpgBZVtyMkeTyKnCgJpX9SsAgSTWG67M1yMoU",
  "key28": "278bzvgcQTG55tQPg4urYy1GgwCGMvJZmqrTqHTWfcM4LE62E99L8pNne28HJ5rVSK1iKSuWHhs1BzxxaJsiWgK5",
  "key29": "4JBitjzp8noPbx1Q6HwbgAdzyWuWAZD69YWUXc6N6HspLyeGikZxBApDQU8evG2PsgbcXhhUFCBuUgNSd3N7P5v9",
  "key30": "HwFGc4ZBGRprUzt2EDeT68UBXMhcgoX1Vvv1Jb1G5NZ5ag6qpzDuVDYiwmn4xso3rCUxB6rHJ5QFfVzFXd8eSQS",
  "key31": "3aLi6jgeYAwpbYGfYtNiuGim67QxjbaAKa3tnonVqypaN8AcJqs3cyULQXoiJC56JygKfgFLbD7idWtuqvmnv4f1",
  "key32": "454ZnEFTCtimLshgUChHA5gWtLGcnMF1mqQoMCWoQj6tLbUVB54UYsyD68G6WxrzuKWzR1Yquj6A1BsH1hBzteBJ",
  "key33": "4RyeTFssPX9RDZFA94DP9cLY3txbFQxPUxkWtYcf8zTk5JUYRspJVNwdqXkN41PxqKdy6ZniC4atmMW64onko97s",
  "key34": "2mnUVfx4jdemsJHqyhGmGHwnYpDKB6qqYupQkpmHfhfWjRZ3rE1pTAjkArvpwMXPJkNjkj7XdFToZqZtUrG9yWiN",
  "key35": "4QyyQGRTermLwFhRJSeq3qgpmZdFT4BAsgdNEmvkqnAVriUkNuCDKBXWzvXZUXXXgVEod4otBBmLNJcvFcNMfG2r",
  "key36": "2NJfrSao28PpoTWVsoMEWWD9zYtuwxWtERfPbt7w1d6Xksc27pi9vsL6mziauidTVaBzfYFRFwce2NgAS6zStazC",
  "key37": "MJHCb4RL3RiXmHFBmZuX6FYm9csiPfyrY5xttjKDibRDipR4b9DkC9neWy4kqut7SA1yK3KpUHsHTdbwYWvXN2j",
  "key38": "4k1couuBWHYSyM1E7YEq69Vnpje3b6y8Rb9qwEzu6j3bZPCLaexjrbEUkQd9KLBBcTeszazfzqdN1KP2sVbVhvsK",
  "key39": "RZYcCo2A8H3fW1qPMgzKcKty3DbeVDWEQoaSuzVW6tRYhnarY2L1iz6VFVxkoMnDV9wSydNBgbA8hyuiQxcppaR",
  "key40": "4rfDkhoitAqEfL3KKsAYyJWAxnuo7Lj4y3BJk8u5nymBkXM66BGMsJDBVvdfo5xXKwBHeuZTxBf3AUXQNyGehsWD",
  "key41": "4vwdgvubEdQJfiwN4aVrntk9FL49on4qPCzZi4gYghB7BVQW9eaam9mCZ4vioMk7SvFCyoE6XnwcjBpsDawoSJg7",
  "key42": "qqE41xMh7zGuejCxSyhA3xJ2hGzdenAn9J2RXGFSKpyfkz5nBHokHA4DGH6cy5iL9RxngnSb3Gvo6i6Le3tusPK",
  "key43": "65ynCQpbpaPQ1U2tWxvcgX7fwxz16j3k9F9PqTptF9RYinBb5m4tbevumkmAGUiFZkM75VD21r4eT48EottBRtws"
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
