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
    "3kYVJv81GFCeGf77HgLRugaTM8Pk3zLcjGpsXr1n5WGNr9NRdivqpWHVAKrNEqdVvM33bKnz8So85zC5wgQgpAkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TE753armwrK9J5ooZ6rV39q5dy48ro48mShAR1SL2nV6xc4uWdMDWzBVcJSgMv3ZPSXnRvYNcuCuAYxoFRimvcH",
  "key1": "5uyWWnogpvt1zxfpwBRS9BEJeQN19mjrxdKZGo4Xc8U98jLfEAF4RSQABDV1RHeuRb3dLZDZ3QpTdNyKjAGMjzcy",
  "key2": "5sr6e2ozup9kvg4n15q3q8oYwPPyKRRMgBn3uz9pRzvZPuJE7oDHGoLVSkrN1xV7Snvk7ruvo4itr9wXFjEvvCBY",
  "key3": "4U2L8hcPr8pGfVRK9YsSBany1zdeHLUYVAYDb8G6rXdLxVuE7NyxUrSB4qbspyCDeCqEppqoHmZB95MZsi57Eb6U",
  "key4": "4kYSNFtyQqzfeBHvoYA7BEBtYv5esKy1oGA9nGHmZz2JW63aZAesyVnPdvpRioqBzFo4yrPhpDyJ82ySPVyPw7id",
  "key5": "5FP4h5txNivi8Y1BJm4JzfDJTBdoYWnGQZNdiuveovdDk8tD7rU1LeJGEcetqe5nqNMQUddWhvHkyj6FFhqWwBiM",
  "key6": "2ChV8b1QW8RhyKZY1F1qkWQXCMjkZPbkSQ2Ph6prh71to6shuvfzXkaffpwS2pCutDPkxv7U4gHUdSkVe45DDtLo",
  "key7": "5JDSphNVLvYS2Ez4aiWuzkvuLGMote9TgVRSYBcJm5mdQgLC9MnKTH9HSyQQYS83dBm3pvfkKgXF1RKqSdMrGfCg",
  "key8": "wHUg62i8aviFieWaJufWbyN7DZWy3WHUWf9DF3va7W77Ph1axZ9MZg9MizKCuft7b4yF9bh1GoZiLATjdjEfkuE",
  "key9": "3TY1wkk6qeNUU1m6vg65gME8HTVWLudYaK5LDmsVX43gG5oTaT7ZJRFHjaq3kj4Zu2ixhu9fQbtAViPRipuHuvSL",
  "key10": "4H84FeqBtN7Kb5iFMTbCrANbrfQjV6dpfbsxpFLKtTtfr84NFJqUP4tgdj6JsheAJ3dM89xggTcJvJCesLeJqiG8",
  "key11": "KakTvBP77xnC9KKAGrE4SE2bbPQyAe7f3ipps7hDUc4JcvHBBAJ6FB81m3aUwmknZbbvkdNLFhJc7i3NKfjGEJY",
  "key12": "3RgjmQvD6vaDMDj8DKdoWEcQUhkA74G1jLgSTFz7WhxL1LXmLd7hic5b88ycfQchCs3NMS8Gkv5pCLMPyNGifB6a",
  "key13": "4gNDTYoEhoyEZwH3iXhtPuo1nvEHum2TXhs3dfLaFdcJrNiudA5WJcNCU4Uky5s8ouMq9sMC5TqgjH8XixfZqBCu",
  "key14": "2a645w5AyU69XezpKweZE3mzLgw8kTtfarZ1wTNXZJCmYc1tQzHRzUo1z34eqHcvZhZWvYDjBmprXottH8cBKyDJ",
  "key15": "5jZkdvGRNGY5kAPuJv4p6QH477JwM2TYZH2Y8R352ci3efyCtML2rRUENPcRKr9Q2SsEXPEdM2HkyT7DukqxFsiM",
  "key16": "oQcnLRaA2YbPZ4xdMBfvfJGjEbcfizi3vgBU9XcXSwxrQY6nRFD1nGb5dGcyqBvFUvEwfhubWmnWRKqWqk5PNYU",
  "key17": "5ZREd66asRXWT5Xg5v1ocpLbWGHZE6J39z7cottQ77pRraCYPtfWAMErVY42ryfgWHS42TDWgVg9c4xhE3ZNsrCT",
  "key18": "32wK96nMXSGLPWDbKqcmgGEHRstHPaLwHQYekBe2FD26qEQodki4oUN5qKaoM58Y8Ef8iWJaUgfH9CAuhNSwcHF",
  "key19": "5FeTKCEr5FUvkTdr5pX683VjHzscfUwMGN3P7mHZVaQCidcupV5PQzms5qceU8iyCW6cHA4ASjHCxuSi2bS5WvdQ",
  "key20": "4wr8vSChGRkthCCDRcSHPMPf4JSSYb5P4KggdUDrYSDGmG51MjhT6dhLTyT2D4UdRdQija13Sdft1hbX2wvdYr4q",
  "key21": "3gwnoRZ7QXXN763TiZx6pYKT5oTWBr9hzBUi9iBVj7gf2PKsJQraW8t8qMAZMaZbP3woxXGWL3vFo7LHjuJBCxbA",
  "key22": "5HCzpYhgXzp7wGTRKFbj4rbLhiuvGtPqcQfyJ77xK6fobhzzTGxMujfamphkBgRgr9g8HPdqQXe8iXXtXoJ9Su51",
  "key23": "5LuKMPct8ymkfV5vr6ytwiYUjqhcYKm7V9dYfuZNrg7fvrb7fwztjhuz8e1ppNYnduP6YLRNaY9PHQ5sBDEDLiEq",
  "key24": "3hTtKkcHCmKKyMehHfJEaeCwEmepPb9zE81v9755MGtvxfwjSktT3Mzar1E5CKoc7EhcSQYcfRGe7UtAsdodtusv",
  "key25": "qZcMffWWzqLwPJCjtVUHVu28e416AukAhFJwQccZFFFfv1NFcs1iHapR3HyHGPKfxsXUo4T6MqV2Y2VmnaBEPck",
  "key26": "4rZV486fo49T3kU6nqQb2nucfH7AajmpfTaS7uKya77jEt5Dryo3HfkXv8iDUSJbbQV7CxqzKvK1x4oV19gtLQwh",
  "key27": "5XMEoAfqP6d7f6tV3TLuTRUwU1yZYxos9NjbwyFxapShePWETs2jkyX8JkA9EUxQxjah8UvpUGNM41iWvUFgBL3k",
  "key28": "5GEh7DXmYSiw84oNkDV46nNFhGYffyY2myKTcymMZuRXTmX9y3mANFvAde8Kb8xvNG5FuEsZKMbAi3PcohsCz9W8",
  "key29": "CVEjmzbN1NMkHgf4bVQea743H9GM2ZYQJp5ypc12qnzKPHmesakmeVgSF7WL9gz4mu9CU5Z3Vjg1t5q5JtDftu8",
  "key30": "2S22qgYG1QfkdJ3CsaVKYKn1kCqn6gr821aD9WfoDee7cVWT4dhs5EkbMgKqjyRgieuAzpVtBcAvyoJUrdMAEQqa",
  "key31": "utiyX8gk22YPFHN7cDXXrVBGUkjPpBonqFtvD5mRATKZULmR7UKmirhD3Cw1vzhmXs9aGz9AEo7zkuKWFkmDEKs",
  "key32": "3LYoiC9cndYoYgr2u9nHKtbwD2oYNoEBN8aXMJSbxvJ5xpFk2LyrNMfAsRndGzNEr1bQvTawKweKN5g5zZcMVWoZ",
  "key33": "4py1qHojvJYwQM7Csty6KRNdu1x5XixcWLVDJwFRb8HMUwrTtz2YK6XFS2fy48yF8c8LpCp5MWupb5ZB6qJa4p51",
  "key34": "4BPTREa6mYDutxC8LH9tEo9RkJrPTmwZTSteqauJs2zn2ZCYFF6cca2hgei5SS4wqx2tHEme8zbRitDZYcNpaXRD",
  "key35": "4kJqKWa5zNm5tNhRF9duqWNJp7EmWTkDBHfo4djZkjwZrKaafcmo4i6fFC2ZM9D4CxKSRndqPCZa9RTirFS4oqe1",
  "key36": "4S7CjM3HWoNMTT1znZ3eK4B2fs6zuWNfa9VGVsVB4uQq98qfZcTUBWnK5goDHUk6MkJwQW5rMkJbeSdQEcw9H36W",
  "key37": "qocAr1ByRk3jGCv87qCPveXVdD829QXDoQqTzHFsEpPX5Bx7gkX7e9ukBAN5DdLdBCKb1EBFKyi1u6rwVWmRHem",
  "key38": "2KT6UQpy1rbWhY4sDX3dEy38op8NcqFP8SfRkUkKx24FY8jnwS4EsaNkSKUA7Zy5ZcqckYJ14QqinR5DAxL5vA2y",
  "key39": "4bUJi1Nmt4kjhPBwuQ9VEMSz2dDuDwtVKqESLtNjCJWSYfWQ7tj2aoAgi2QZTcBuQYnCNQ8LgynvZvuXw5yX9Vah",
  "key40": "2GvjrVmzqhYWn3ohmyGpWsocKYkn1CCs44WyQZnqcwSuXfLmf2N1EQB4LZXXULHJKw9o3A9aeFJ8k48EnPKVBngU",
  "key41": "2AaEvPHnawsDehJMGYyD4nmsSTG2WhGuz2KQAaPnAtzAaEthdcRR8ck7ko2bhgY4U5zHtU2kdAWfUBKLbnENySK5",
  "key42": "QMLKgTrfdD6ahZU1MF9EtBWgyx4huhU1uA1tRQk9dbo2oCxaVizaeY24ygc6fDuMGQbpCmw72gxHKQ6FjRzjhN9"
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
