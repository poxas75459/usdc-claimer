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
    "52sevAyD9LZggyqsGDWgDftPJHJj5u6LhbYm223ZBp8TMf2tMLoaNhAFnGVxdUcic8e32cEbtJLa7DSTESGFZuWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bAYAb5wrQtMLvkTgE9nmzjH6sLw79mBfAiKVZcQ541NptmtyatoQHLmAWfrSunMMAGWcr9NPaBHYXLhWnaY2jzd",
  "key1": "2rYT4ycogVq3hG7MdcHvbGegLMuCLxFfx4rvLxZCaW5JqdmLAy7faAHrru3PDKaYPxFfGjXGqZC6YVQ9AwcP9LbM",
  "key2": "5MbYVu3SuirtThyfYQeAVBhcQzFFYQ5vCKpELhU239qwAd3fbox1ENs7msxRpft1nPktvd6Ldx9RHe8BdRf4tKRN",
  "key3": "61CMDSukqHhurWwZen4eDi8tPRTH3KpCvh627epXGru5XimQ3t62LWJXvSXhyDraD46umD5Yp7tDAxyTuE7C8jfj",
  "key4": "2DxGeG5SJYbopJkeYa6cUCgLcUwr2XeVmWrYH7UcTxhrHJZAYFXGNbJ1CJnUZYH9PbUEVUN3TKSwMVYrP1QscN5A",
  "key5": "2mkCUjK4hYf4JAvpevBRuw2GCJuPPEdHXSfQBWcDhXdkfQdt8c2UdubW5QG1EUJZrghSATiARQKEezfjDMsjnoiR",
  "key6": "3jUqyZXvyC39GiQSwQocPk4q2v7SuUXT1YA8FuG1iUVTF6qpR2U8kpkWZsgZjjxWyZxaNDm3gDxNTtR7fLf3ZQv3",
  "key7": "5QQCFQyakMXexwfcU1aBVSpmcC4qyxcgAC5UKj7hXwtvdf84MdJCrwYqKdb2hr4jzuL16E1U48WPWsKcTheN2C1j",
  "key8": "4TycH4nPLMLgfWFf1aaWx2MWLiucg1GGoC42cV3apWAB26DN5kppnyAhtpgewGyHNYtqiBYjw6sqCR5SsmhQB9my",
  "key9": "3AAZHcFmDjvTi241Ckud3KKZf7ckd8o7M52CCBQ2gUFD4t93kGW81k2UUDgCJoRLR9SD42bBG2LBCqEftoZxdMtC",
  "key10": "27nW6J7HMA5Q14JrzWRmNiLfF3rvzSAH4y5eXZdynScjYGTjnHt9ruvVkMihfRaCVFARCBUWHfNzt5H1UFfPzCHk",
  "key11": "5meCDKuM21Q5Xb83HwzkECQ4DDhHgFCz26eZsxrjEbBeAEaptCs9VuDTv8J14rvJAhA2JUEikPiJrDcrSkrkakZp",
  "key12": "7L7D96KajL8f66Wo6vvZR1Ft58KC6By9c5B4wDtU3nZhv45MpFjhZLw4t4Mxn2hgFU9pnzbuxLi9hn5FNkTr1CE",
  "key13": "49CSfMWDRUQuGUAuwb2xGwcm26zqSz1WwqYKhfADoNmepdMW9NErMRcDnNaD64iBvx8vYJW3n9CuYvNaE8hiv8y7",
  "key14": "5u3Vdgv4XtuYZLEYZxTucdb2EkKgoSNvZLpaUERFf9sJyedbAAULEapN9Cwcwwqfqx4XmzVK5p1hJzwQdtsztUYU",
  "key15": "3D2MvAR9R6ud7PdES4eJJkg7K21vschE3SkzYYJ6V9xAMcND8ueZ9gpPmPGS6ojJDrBEQtPubZ82CTxi7na3puxB",
  "key16": "53aJWc2mEJWXGUTWiasK9BZ5egHhxprU5D26nurJMxQUV3ymhTsiJyRMMhN4LrHpYaxwpQt9XPzFsqw6TFu2neFZ",
  "key17": "2xF93Tw4koegFtrW9sUnFGgFSGhq3V1UbcaQDui3LPM31ZU9KsiJTc1oSRdnCGL8JrMizEQ1n1vv377JEFFCwKE7",
  "key18": "5qmDyJXbEURUyKa9FGm6LHjpiiUkVzGkU4LaWP617H4UFFu9GhB9DgkKzw5Ha6UgLrvMzovDrJkphh3BhWCkRbnC",
  "key19": "4BPcAYQ6t9eL3Dc1qjn4RYhx381R7bm5DwAUWtA8De1zrtU42N3mHjRvMCGkogs5HsebwkbtZsjqozXxC2bozSUv",
  "key20": "2aAbriXKdHT7m19tTzbeXVxcMStVwYQiYe58PAhr92gLSpjQxERGj7zg9SxeTRTq3HuL3yY7Q9YME1mxrM3vLpwc",
  "key21": "Ge1mwBZxniMTgDVULf8MJ6j6kNkbcxfqrtScoE1BZnooMbVh88ztYrQYP481UGCfmYd4SwN7a6vRweVeP8KSK97",
  "key22": "4wK2mMUYjeWrZEXm6RBxhgJKLoYmX6JmUhq5tnG7wqjygUHTkWYdjpzBCxmxHT7PPU372Q2aPrrDYs5FdTWFFEn2",
  "key23": "5ToqwkSkfjMkqdmpUbMDzMSJFFkfoHRVzBtCmNceBozSTv4brsvgipB453uqQMkVPMC5Gi3CMMKXabnVaCmCHJCb",
  "key24": "2GPc6cCqJ3u993hC3V9XZAE4s7xZEq7MqsPdFRXHb8tJtMxUnemu1xuYQGRCi4HoYCUhxJVWADbThTw46WkNN5eA",
  "key25": "thsbSaPKHTNxUwansDqVhqsTKNBpjvDkYFMmJdzh6pPpsuuvt3EETRqKUSbbQ38byvKYiKiSxF2YehVtn3KsE4R",
  "key26": "5NsPuATmwXFyYFFqoX35RtxANZBLidcy3gbhhoRha2WNP1qh9faRECvq96nCUeH4WNE4YBe2pgudHfGibtrPbDFU",
  "key27": "rs3VgHs57eA398nRJLBn5AaXq4PKr23VWV2DR1tpqmGk1caZQuiSxYQArrydZix2i8h5C7ZZYmGRB9zzHiXzLin",
  "key28": "qbKNxnD8mGGSFybPtX6eU4i5yWZCsG6Lr55pqX1odMm6CvfKDdufyeWduddV3ZHL2s6fahPuPKa61stvP4WdBf1",
  "key29": "2wLFuEwxC31EoaL6GggveZgVoR7THipV15VJ3gj6qWS3v8DtktLbUHayQSjdvQKfv2LnSfhDuEBnnAHcne1rSy59",
  "key30": "dXH4pPWJQSrfJ6yZgDpU1KPHAd1nxoTTitri4E88UoPj1jtr21Si3U6Qr1E3oGBYfHCyEFEfuvRhiWHFWohN4sb",
  "key31": "2R8REfDneagjCZVDcNpDTVp8cGiKD6k3mTc4yDNFF3F4bDr5hKjSpaCiktC55q7yaYLuGKdL5kUd8mR3zekHBkyC",
  "key32": "3xpz8KYHnGo9TT26JEFynBWbJKwe56ggD6J7Sqa7rHVPnCpTdJ6342uLjHUWgyNJrUBPy2zSUqL6ZdhpnX5b9SAp"
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
