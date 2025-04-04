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
    "3f5zoDvzV1CZA13gBsZWGUt3hr382nNUxU6oDfcLhMgxtAoPfZyyooANvn2bbpcNJamogMo3XftkAwfMxLjUjhER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkJkbQhL2Zct5iedmaA8GoN6MzmY24d5iQC2jKdB76mGrVciLBcVvR6WAhTTMSrmTNdZUDSPCp7xNpND7ff9sFm",
  "key1": "3rQry7FVsAspWEtGc2SkMS1AFjwW85tvkvSehbjVnBaYf5nwndzx4nkWCv3Y26EdhsLLV3XqdaJ7NXajKJ7kpGuR",
  "key2": "61S8LNsiVsFGNL1mhF2x82ac7Qu1ZeY2ZBqDs7wVyLYiUw1HU2jYPDMnAk44B5iwVGMxKuLoDM2L27GYAEi3jjqH",
  "key3": "4YZeAKgQeCYqZapYdx2g3VKY6rgmNhLu4LnvH3uW1knJF7n5v95JebT9iKu3Xit5L6BZiQ4FgNnYSDjo8pgwakB7",
  "key4": "2PRcr5A3Hz8q6JGqkaiFDFUvX7oJAs1UaFAik4t8hNJDh2m7Uk4chni4rQJhz9G1HhiVb6exqfJNjVFTJK93ue9v",
  "key5": "36BVeaqRiRgsVACNfWrtbbefDkJurbK3dVGxbL8KdN7KGoNN7adBShskU455r6Lv8shcD6FVmPRdSEKY1KGFVBQ6",
  "key6": "45qppZUMEMCkQScbgtMQ17G5NqBgxonfX4mYQK1RHTDAPdbFqdzCMLsBfQFx7edS8Ecsa5GhV8o5vx8qcFRiQ89n",
  "key7": "3tZNM6oyGudRPojYtsgdUZcLGSeK5qz7cYcUSdSYF56pBLkkg86shZBYbV6R3iAPApsgmh3VzS5qneL46z1VzoZY",
  "key8": "kGRqbXLHyd6S6rPQ1CRUkNnm9ebGMvNQ8mVqvC9rW9mBFNTDH8ZvxyVQmh5hef4nNHcNfFGEec7ZrsvV7r9oHRR",
  "key9": "3gqREmVBhyh6SohGzig6HgtB1TKPu8UYxQs3dPyFAMMExeSrwN7HUU1fqMKyqML1WuUv8eXfpFGK3jXGhR69GLf8",
  "key10": "2gZsHjDP6ZAxPAA73fEH5bj5S4BaTYsnzfudBXRne8RqWaGpchQ3JfNyQNHEVqPynd84GrMZYNmtK23fcyyEkQJm",
  "key11": "3XrS5e9eeUNv1yFtx2LPTiWHNy6CwG22YM7tAbANMCNtH8HW6L6Uhr41FoDrn7DoHFeSdhkJHXsv8rRbPFQCZVoJ",
  "key12": "23yBP5UfdHHtUF7xrufLQTF5mdaWw5YmmYbcQmmJGtECQZHD7HaTDH4jd1RLxZj4QYxiTNFduhqdYNLsFSHL76se",
  "key13": "3GfhZm5vis7RXsPXfn939b7RbQRqsnEUvcAR6S6GyTqa48THkZg2mAxK8C3m5NTmLbCpVDaE6RAyjsE3psfMU1HZ",
  "key14": "5yzb6VhtqfDgKFdZKVKUFqaUEbQfVDB8Hr1Bhikc8RPwDLYbFqpjj7HmMaq1J2RNbu53BFeQp1bUmqADzLC4AHeK",
  "key15": "3Hb7Cxk6XKaXZ6nhjwigU2eq5Q5pQr8rTziSUTAQuLAvoivmw5e1eiHu8thkRxzdkpmihiPHSNmynER16R2rkQrC",
  "key16": "5QUzt5C6M142iuUtBVY9ZS3UvJnhb2oq6RVSdPBjYSZBf8BVbmfL7Vt1X9A8WDmMJz5txmBfWj1Yr5QnmArbnG7x",
  "key17": "LLRBHEguBDCNFw5qCsX2HvgoD5kudXaegStNyQuztJfHjVdij12ChWBr673dGGeudQ2xq1boexSQjXDFqxR7vfh",
  "key18": "3ZobV1LagoU7nVD4nYe82L3vBcqKZbLCRG4cCWnV1wv9h2PEEJzcrgTZu9oudYjkvaY5kzySbpVnWzWFFMLVWirD",
  "key19": "2PeMa2kAFEMDqouAE9GQGRx3g9kR21QjVYaptSCDv8F1PX6HJqjkPUktW3UX47YmVE22YRuADSVFT95fmUPELQjN",
  "key20": "CpjR7Uw42xcitoxhmdwhn1yW2GcnwevDhaJmXXNt2Wkv6j9GKztk6YDdpvk4MjtXhFwd9jmdQTY3U3f1ixBAXkf",
  "key21": "3pkV6vF2ypYyL7AsHsKRSbjBpr6EgbWqZMiLAqh1YtwkkPnAUSPaHSxvWMfsXLPHo38Qme4oNrm7GLuzS4cectCs",
  "key22": "4rGedD5iSjy6v4ZvQcGpN6xVfxRk7wj4GDNq3ui9pyJMGexMX6ZzNGj6DFTNfmhvobV2VCW9cYRHen1pGpEu4Wwi",
  "key23": "4xPhXpp5aumRTAeYnz2oa1nrq9s9DCniEwLu86JnYGKN1nUNNryjcZ8G4QJPbkBQgiXyWA2yBLkwvDuX8uFDqVGK",
  "key24": "2oKuoW9pAL85igSJQQXZnV67WojaJ1ziAiqsMbqXAYm53a9sJrkSyYYmqCMNCeunguh9NpQVsrJFgiPLYd1EGPUF",
  "key25": "5bPhL7QhBGnWjNnY86vFPsHXz3jYHNiLTGC1rCACUfQRk45emL6AnWjVp9ztA6bkZnnLzdoBwJy8UL2h1e84cBdP",
  "key26": "MSMUJmqDwyaRfi8DygSB2u98nu8HF6qjH4X8hyqa5BipeD2Kkri4EyBLt9sRRy1mSnXWntGuiEwSrTSoPUADHyU",
  "key27": "3Z1WN54TVapwtV5n7iYdk5DNLs7nLhm8Ggk6yvFSDV9fSuFVFWXxz2irXnfFezkW6ccaGKnT2QvDBRbbEpkDLcDq",
  "key28": "2wX5hAEVq6FRq8XvL4LqjWCBYkpeaGKkSLF6auPRwjhQLNy6GQZTgsVBxWbNbNFnvaFnpk9cWvLz9hthzcbGv4Rg",
  "key29": "4P1iTawnmaCrnVWqzRugDkPDHZkkZmHkExzWGDATrcQeUMYQKB1mHwACCk83odyQqwmH8azTayT4JTALFJUMwVhF",
  "key30": "4KEzvDH9bPUDBty131ZY2ZzFCgpr7DdJnYLmNjAeEduZKj9nK2xn9xCrAmUvsSz9Yx8Fdda1kxug4oihCF3XCv9j",
  "key31": "52po3SmHQzpR7pjpriwJjxdqC7QnVtkoD4BHUdyZDbuL9d7hZ9iAfHScQJTdW3Sdpd1EBWTMPvN7t1DxYqB6GqfL",
  "key32": "3rcs7jA6muL59pYm8LNoTWSZs3Trr22r45ZMbMFsoKNwC89sEMYznJJKmyThKRZCAPeZH72scMY9jrYudTGY9a6G",
  "key33": "2TJDsDArQLVza4K9DXgDgcDKUVwNv2yWGyo4fwcdezGvChSRvPjkx1ge3ApWNKC4FbFFyLvADYEXHkWkQBjAuEB5",
  "key34": "3nWCGVmzNYePZvKXeyeKUApWBtBriwrP6Uwo15Mrs9nDmxHkZC4cq368c4HrFXut7sCkWJzBwbxzCYU2eT6duGk8",
  "key35": "4ykgaw2wn1sziFLrtVvumdtQ9GmWFbh5V5qGiDmUtbpWhabwdALqs9bVoYt5YWTtD9r13Wj1tqqyzv23KiFQZBo9",
  "key36": "2g3kY5c9ebpmRViAm6Gn1rXRTATpfWERkm8M3Wjx2ntvokAiigffh45psC9NZdMAJoHqRXDSjAf4XAE3WYr9Vf1d",
  "key37": "4ZuW8rTSPnMTftn9GBmFow9v7hU7rXkj284kdG5HCYLR6V1rSU888pipXG2eg2K8ZLBx8dsxyBDBUwdpC5pZvMcy",
  "key38": "5HXVDenqSpTKuMxFoAGNQHt4XVPgn9kBWi8yqejmRWzbg1f1Xckm7ybksvnoGygVSGajzmsqCeKHQ4tyNKSznapz",
  "key39": "38efAwrLrQAuoANY3gDQ9uLv8Fei1o7a6iqUGXJKJZgKj5uuhc8t97uvr3tLKKLW4m9o7DXecyEKbSjTLN5ZYZnq",
  "key40": "xtKGTbbTwYxeECH4wxDircJfd1LfivFxkcRhGiMcNNkUm2JGn2q3cNgZeXw7JVo5bPSwuX7e4oAZLQUpbp4cpMp",
  "key41": "2xabFjkHHyFUXCVLDZrBdKj4yZCgQHNAxn7G17foWz4R1UHfcMqy3m37sdPtx7HjC7jMHfJkr6Uu2SSoJyguD7NB",
  "key42": "4Yyos5SiG2SF2X5cb6UrujAkdVYGwXsaeCGWmLAtEF6CVjjKKamwHYYWJq1d4Z1yCe4KnV9q4j51Nncw4BGbL8Xs",
  "key43": "4MqGkVDyjPctMM78Z6SxfNvMBCbjYLxYvuAqqn1mQ3XA7Zs2SiVS75gZPUJyF61cJmXUBBoZJRmSb1sMiB7a8q5r",
  "key44": "5S2yTLkGjgf23rMuVL412BDX1YD4q4knotiz5cvT3PS2QD4yK2f3wrSG3XyHmAyJ5WeJwKDUS2oHXEsqKnNVwWYR",
  "key45": "XqLqAfvT9bGDM9tNqgXivPqQavqCnSRz7WdhyCwYLi3miowY8gLG9BKBnSpDGZGybQ65twfAxNf4MDRxQwYMvZH"
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
