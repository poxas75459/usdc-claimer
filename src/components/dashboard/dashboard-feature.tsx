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
    "4g8fkXph9LvNCQX2nhPt2DbhYG3VVQF7jSJRN7XMk4ZHoR3wLCh2MFfgjo1RbJp4MRsQMCZhRkZSe2KsDZS1GW9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjHoAqoshGjGEEiCY3R1sL9h79xbya2RrKqmiVDDCSEHGLSgYfGYuYb6D17A1BEj7e2niHZY4cpddH57cVxUNuh",
  "key1": "3NCgxNFoePfuB6yAVnpovdCFpit9TZfgfUy4ThByddfNntUkx3jzuDYMJUYsHAXfmVwbkYoBEz2xjzBJwVzNioJ7",
  "key2": "2JVdtRE1TuefmstSy1a4voECh4hwDHCd27HhmGdbCp7UmjbiTxVVR581aS8qEYM7ZZ3YVfYkVteRt9ZSkG7LUzmY",
  "key3": "5MPgPxBihDgcGEku5Gvn37iXR7WDnKmvXg62UxmFKZePQYQ7soq2jntUvfh9HhisBdP1CjMUkzxR1VwAsjeiY6sb",
  "key4": "38am11hLqkQibboBru2fxsiseKKEkNX3KGdEJPp6VWXHJxSqb1prggP6WCTEgkTzfqtp4yqQu9cnXjbWDoVP9Wmc",
  "key5": "21HZrLK2AHZ6dDAskbUJuKavQSiHJ6GTTvyaebCS9S1xfh69MyYEm361xdscQGf9tNzgU2jp9aRYqxPS8ffjt1dh",
  "key6": "2JpfLUF46HmwZrVJzncQoKgoh7GdwebWjGGVoYEQ6jJbzAx9vgdwQLUU3wM7HKttDjUAEpPbivq4ZKXzvxMW45KU",
  "key7": "5kWvcf17vay6e5dP24BuTMXo3C9FGyuunyAambqZuFJkVHpK1Cp9c5YREowGoVeAEBQpxpgr8s3eGavFR356zLxX",
  "key8": "2gJNoX97UHwXbzVXgwX9hnRoQJ9C1cMkHXKyrtr59HvikD1XSobp84ETwFuZdpdMC6eULgrKvqdcc9HrqYtgSH5y",
  "key9": "3X5NpkX8bLCWp2qVA4BBTcicu6eaxpiFGYqYycqPayeDUhDFHPtErVSGX2Ltj5Akd9d48BVWP8hXFDchtKqL9nW5",
  "key10": "4MvgHyH5xkgvKsyg8MNzAkYmZC9c8qfRFG5be4mN3bhpKtjxn9Rnagp23FTEWHbPPx1MKqump1YTLYRaJ3o3VEzF",
  "key11": "5MEEXw48Ci6A6SyyTeZrqP1bRCQeyhif1RMg8Pcbuw2ChLBUSgpNrXQSGdkpZD3nbSCwyZjHbtXYG861EDBJjf5s",
  "key12": "5B3WLikQGkVAzzvFWBGLk2apKvZXtMsnujC3C5w68a7vTVTpCmKM8vm3qucck92KpFJwbSTWgbSVm2bNgiXXXTq3",
  "key13": "4TPrG7r4uFBaURuy8o4H1Lmdk5KX9cN7AocAN5861q9JxJREzonEpevh2cGBktz2uLZnNxxXb5qjujVeyy5gLMrn",
  "key14": "5wFCaRvzcirEHivrysgUi6mPzkbGK6y81HQx1GZyLR8dvEcQsZGqV8TQBvapusz1psH5iwGK7oZEGM7Hx7gQpXCv",
  "key15": "3jvBqgihGmCe4yVmgJ5PKVPGMG1YjkoZragetWhbyaGxv78mt8M497TwLnLp1gL1i5mHReEMrtQwrrFmBnjS1xfH",
  "key16": "4rHmXKCawerTx3mcU4WszduBwApeo7RASgEyNKZbk5viZPLdvpnpzbcfgzkqTgyhmMawzt912PceweMZZvGbKbNv",
  "key17": "51JTaEF2YUd2H2s4wvCJXP75172fA74Fv4b5LhF5mCaeaDi7DfBfqE3jGd3xkTmQoW7YiSfdiKNeMNy5P8kWD9Gh",
  "key18": "4XkNJCZ5g9tGRwi4TBJB9PXq6JByNsVUKubw1UdxnG2eXscJwmSV7jAxWymDXWa5BczcyoiicLpQsvtvuPxo7une",
  "key19": "4DqDbsG2AsNbYX3SNAZGCELyBGApwU7EnnrEgJbWY5wHaQ4W2eGsQPEbjkuaCYJmiM2Z1v2Uv4GjH3pU8xMHMBeW",
  "key20": "4SenVa9J2pGKciDusv2cnFbKuh6WCkwAZGeNz9ZunBaFdetD7k7C2RMuL9xuTr6dAgVqXUJnKn7LZhRHY8sSv3Sc",
  "key21": "27yxRcgLDMN9CpXktGPrArcmjzCB9PaFC4jfpTs6bhi1jrGUt7evpw5eGpU7i9vnXKnXU3Z8A8mpFwXEvydvSEtW",
  "key22": "51n53NuN1xZZdmSk9MaCiH7LAe7pZgPicXA2fG3gx11qG72vvdx6kr8jevL2HpPL1hFRo4SojaGwG1sSF9Ke3MpS",
  "key23": "4gjkQdsk1L2xFXpJKccgMsrJFj8kvjfd4XwLPXavoViQEF9YiUuFqct2afPKAik4yZL7pa91CR1ewTWERkWFA1JR",
  "key24": "19pyYCeTTbD9f4mZe8BGG3bdnzNypVk9EEcw7qmEfKpgcNBrYZYQ1hq4nw5PKPXpnhQspZVBL2XzSiwAybfKePj",
  "key25": "4vvdHcntKwZi6XyVf5uACuSsoh3Lchx7js6w1TiA5zn4TjkakLEPsnoxe9HyCFARjHXCgZzmYYAcWpiRiYfV9ESj",
  "key26": "xJWruNxKX4p1w9HdTafmGdr1QsEf3ffqA5gEt8HzBkdbeVai7Wrk61HHsEV4Jiuiie2Yeue7jFtvAujagPfg5S9",
  "key27": "4DGE6SsLf2NUSNEiee76mkcXXDgqoCHjEfe8HbVGiHqSNCYCMMBnM4rxZKCY2CE8q1tvM6aGA7djpKjEjWBcnDrg",
  "key28": "4ssDAX2uj5CL4ARZ8mGeZGr2qPd2GN7CY8vJ57ywjP1qYXXaKntNXVBU6DSUrrCdrjFtw5nkZtMK3dtQ7Nzv3WkL",
  "key29": "41NjxAJKf61vRMyn2tre1RmQ6szBEzCBwWeUypozz37VEauYBmv896wbTs5fH4mJkmwiSHMqc2tkNVK7Qb2GRrQK",
  "key30": "3QYWuKpNbsa7jmsKCybhWNWyUWpNhetfNNusPx9NYjCx9K58SNfar7xZHSC3KrSbdVkW3MRGuCGPjNsiQkrXXoyJ",
  "key31": "4A1jjZkknqahKWMcfMGphqrY2eDMCzuss7y42pkmNCFBA8txKmG4fYPxfgZC4yuCnmn1QRfZj15w3UXkz8cGg8A8",
  "key32": "4mF775M6NpvDxmXGe6SvRPnkU9kDJhC5eJUkQNdG3h9VHzvEjBjReecNhXfZcMmxbnntnCi3oH6VXNTt5tad7nSp",
  "key33": "58NGEDrM5tEqZgKTqBRKQDLmJgiw19KNSu98iXy5EErGHiJ3LhidhxycsY2mvnaYFfPR1V73XyRWYLx8GV12KXwX",
  "key34": "3DcB6quyd6xt16gHvZDd5o6cEz4NKoD2zsDKLV8LX1h1BCrnpTrM9uBe2VzStwN3pY513KyYPz3XEHEhNmMSMk5j",
  "key35": "3JELtrYP8gQcP2HzGmNjPyVCBCRE7GVh2s8pEzPkBzXU4Bkf5EyJzg3YQmu6J6Jd177PqTgjmPgjDdp753MTpeAC",
  "key36": "4kQTHfWGREBKJ4tHPzC3dZFh7y7XqrFwaajTD6Lf2n9RtbqDhnSGkmkwXSaSc6zbRArg4uqV1pUCsXSqsNG593a2",
  "key37": "594GoRU25mF4uwNsEumTpZwk1DTbyYtJ8WiZiehsDfts4rPCyZQdA1aU2F1QQ7pwGm2DzhY95qoiehztVXG9qsdT",
  "key38": "5UshuH6hGLvGBrSC858UkWbouD5Wm3Y8PXwsiBgKs9dQiM3o4BGTiYZccSLzqgmWjgtd6jTA5ec8L68UGU9MMoFN",
  "key39": "5qEhm2Ps1zpFpo2wkWzcdosna6wKXPwVJreb9CyYbD1bbGi9GNBmxVFU89KND3kg5v8QUpydLb5xzzR28gBPRYx6",
  "key40": "3jEuEsh84HdApoZwWBVZ5Xx6oFwfiSdNH6azhdjECRg76fUFndu2fuH1DigCZWxcbwpgqdQWADbLrpVyZ3AE2auh",
  "key41": "4J2i7LhxikuofcdQ9B1EfUorRTT47Dfv6wMNi9h7NDvUVB2RKiVce22q35XokXCrHuuRWSejsBifqG4y1KQuCKeg"
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
