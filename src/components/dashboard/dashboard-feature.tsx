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
    "joSYqyg3r5AYbNcHLDTKfCQNNiC1PMiArF1ps6apPaCMSZCUzfopENNcq2ywKbPqQRkUUUA59UbX3Kf9P2FZ5DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAp8qUTe2EaBgXeiBTGyuJqEzwRB79XoFGQ8beTqzme1iJccuznMxEsWPiiAopkm17rdqBtfzc69Wt3g6UXNDVR",
  "key1": "2jjDZ1yTKXwwikbXe5qYY2DfbNSoEW99yV5aYs5N1TDHBAbbwZ68tLb8YxYKjpKVu1Xfbwkf1s6jpYHEdyohq4a3",
  "key2": "4ik95prcGAqDRdXgXFqoZLCGmbwnD36181eX1nsEmVLad44v8mq3wtnN3L2do6GHWT4KRmuEBpEFSZFjyuW1nHia",
  "key3": "4apDMUmzxWCdwSV3nHEGYfadDSb5uLAdKibN6W8S6BiX2JbXCCMGBQTiVnBKReLnA1hwJeBZVCACcahPxvECre5r",
  "key4": "2p3bjBMt94Ug44TgBQF8PoYWH8rBtL6yEkE4XTkWiKeBetKnPdNcapEvVLPyC29Nyya4AsCVjBU9RoCj7dDqFQJE",
  "key5": "5kmcHGTyC2pc1x3ewxz34pCJ8QC7hE3XyvpEvMH61yzAQ5CKsXiJeWzSo5xkmLwMFx7BKHYcESw1zDiXonFG9EHc",
  "key6": "42pBPemnEDWtVfBfy78kt7QQcaG4g8pVeeemxMAHHJfpjzorDVFzRyHdibxP2pcyEVihAEGZgaowwciFS6M4fNUz",
  "key7": "YietA4GWhgKK3e88nrABxHMQzrS3FauVuDJpvWURSbXsvEz1w95wqM6ycfegguNezkKBipY9FftAVDknHbwdvTR",
  "key8": "2wUBxMi2PSsuYnD7EX4tbtmFmDEsyNS4gsibDJZobyJwxCtfc5HvhTBTvTxjtbWjwguHaGFUuV7ctQ8Pqq7M3Dm2",
  "key9": "2DcANugjh8WkZCT297kJDAWxm8EeuoZZ2H4swxE1bFxhSo9pJWMcYHX1QDHYgQTKZw55iWKJGNUzBYMkdWgQB4Jb",
  "key10": "cQGKg3yayyTbGQ5HoJABP85hB69VZ56xxmn8Z1PgWGe6iueDsSRiyHPG5kHaZTi17SqJQ9gmxo4aEGhbYsGigDv",
  "key11": "3GxgpH1AdMLMYgQ815X8Z7TVLgvbsbWTTm5vWhpyKP4PGRgtGL53UozCwkYWtJueA8xidxAEfvVSv8ukjSV2SEyL",
  "key12": "46PfNbcyRkPt4r4EA6BLhUM6pDLvYuFCXQhWsvzDTxvdZfRYykXq3iDcW25rbP8veHhqN3gEP7SmA6igboe5hGMm",
  "key13": "4Prc3vBAmYwf4fP1zmzpEK4JcAU5usckXFvDEu27Cw2FAti7gQwH81twPsGbEDjyPfxc7rE9mM8LV1XjPKrK4zhf",
  "key14": "nZkjJqmYeSSAbGKUaASEUw9EUTz1MeoaccMknaRw273ML8RwHP9yacPBr4b3wXiAQbArNZNTNUX7QwmAwxutAcy",
  "key15": "5tphARNdtiBN5jFX6cV2pyCjUm3VU3obyPERBW8oR65p8gZT4QN7akZqcHpMUpmePBKN34cmjnYgoSoMPNG11AP2",
  "key16": "3bNZsR5TNZrQqD5UMaNEFndr9zAbEhE9upfQnxQXG8LyGXP8PfQpHhhdNAz3v9nRNyoo5R9NTKTMYx1PVe9h1vdG",
  "key17": "7ES2tap9iEr5THrn78h3zdxfS8Gd5MCrqUBNKHZVBqqGjP2tYGaQ76qKYZ9PCksj3i1xjMNnxion5Euh8Gb5yYg",
  "key18": "fDmmCGVrkPBfn1R3vssApph2JAWHizwj5WUCev34WVhqfaysPqx3WNywaAD8863EAM5PSoNcHzVSsPopmZvixU1",
  "key19": "4fpVTAarYxrhxsE7FH2bT14RR7joq5zMVy3iaSRrD6qh2hxcds6sGohxcmZ1cHrUSauox9vaAkSooc9N7VrPzjHs",
  "key20": "4RydJg4gKnGy1fVjRc9nYUnxXPvmaDido1iFB1PDsVHbpozuqtd1MfjkUXdQGfdxSEEtKjet8NXJ1Gnrfe1GaZkh",
  "key21": "nQzo2iQ5PZa7ozBQQGa3rF9rk9H5fwp75CgoVty9TX2bx5AzAg7jpUAdDHrJjU4BDstVXTcarykLnyz1pfKgEh1",
  "key22": "4g8M9TsugqiSqdBY4HVJiL5Th7z7W5ZQhPJPEym9Ji6cF7ovAdDXh1JAGKJLFWxjgC4wpAXGsjcBUq95CqfGcLcb",
  "key23": "3pbdBr9PY2WZR47uMxB2fXaxpeJVQrMTcv4nfrpG7SoQcgqmAihpgQzuvUkzMmFDaJDmGLmDivjBgrH9phUU62Kw",
  "key24": "37ZugSnerVzjAqALZnS44adRwcNUru5AYMYrbTyWoAugKkkzNJo6Jj4J9zKYMPgVV79VCMCew4uyJ5hpQDtrUEHH",
  "key25": "iTvr42fKwgJruwTn6ZNDRFD4VjRFR2KnSkitKsGTh3WQ2RjcRrEvuDEN82M9DfqTQ8brW1qrKtc2jJoXVPe4VcW",
  "key26": "2heaT9fQ9Pouj7ubonR4QKbMBLCnPCggSnXTZZmQfZcegCavJjLSiT373JhyHixWXTJdS1KctGRWUAjxVuZzKNW6",
  "key27": "4bsDBUrJ4XSAnTV6oC8AUPaotVcEH8t9YHuvCvLhDjas4mViyxUFEVwU5u6LjSQRpbTTxebmGRjrQSJJ7xRaacSA",
  "key28": "2sgtMLaWWCGzCaNVp27LkHv7dfoksGYVovrbKhk5vqTfDS1AfyC8bKpi9RVCpnt7ogVnEYztio6PB194MdauRmQo",
  "key29": "4E2NSZLkdsYN79aKGi9N7Q6NKyDbg1fmixeAnm4x2NtWVKDRWUbmDR9UJAF2k3qkzESRNG1pMop2Zgn3oU7jbVo2",
  "key30": "5jpEaLtW22dacLuQGF8sNPNnFUPzutTc6VEt9RtYdYLTyihFkqaPPGYZNiTSN8EZwEiBoZDcNHGFQhA8gCqQZup1",
  "key31": "hLKnDEaNo4EadJ59qZSCAPzLtvF3DVzGrtYG3UboXJ4LgWvbLfEb5Y1zDtfXDXxQLYYTPTKt4xpmzwKpJdewy3p",
  "key32": "4hfskwiWmZPFKcFGaDLcfg4zWkERR29HPxCxBPBYJQmL2seG1xVWW8Mw6xEoLwSz9ERxF5bGoZXKDSesRP4xXMch",
  "key33": "2dKsPSyTopuMV8Ff4Hm5zT9YMjJrM81FgjG4BwusJsK6vyH2yz28JNyfR7arMeJN6StoVs35EveCFyqtdjTmTdD1",
  "key34": "2R476Ndx81j9M8Htc1uzsYMLsoXhk6KAHjhPGN5F8EqtRH5ebMQzvFEVjadtq3iMTUSbw3RLgRiBcJUrB7wvsXBf",
  "key35": "4TMFUCeF77SptTaf5VJBVmWf5AMpx1eMqdem1PyCCcFeaSvAj4cqBrtSg1W5GHKe4JrxTTZSXomyVL4GHZM2ivDz",
  "key36": "3G6u296x3qaHWumw5SYETPDLCzzSnERJGWwHqNfMofhnCgmE7d241vB2Kbefj8fa2ppey4x4HGtc7cSQUU7APgqh",
  "key37": "LM3KX5TUkafieZdNke1nMxdN5nggZfDNrNJnuZsd4oYcJ3K1KuTCALdX5YYk2NNVg1W3gevAZRP4NhAy6t6ow9D",
  "key38": "Gz5XBZT3679zex9s3mF57o8wtj6T89w7KUGrhQXoVcuQbjJruvYvaRPNtFZEaPP79DcNtSZfFHoNe6c3o9UcFXX",
  "key39": "3YoE69Km2iAapEoEeEUdzHAsg9QMcoLWLiLvPnrJ9UcVsbnDof16X1sfuotJYAy7gCTVVUSqfK88QT4B9P4XZmcx",
  "key40": "51Exi1NuLEbWJvGgancvMeMoGJV5o7fiSpXzjwL2pDWgiZigPnchdedomLZsRs6RxcL8LRLZ2bZpCXXEEjy3p4uN",
  "key41": "5aqXwrSHXwBtvnU1x5x74wmRFcXdFt5Vfoq8TUu38PQ8shhvgPr2iGBTFkQM7JhV5hixaj74ggPQNLTC8qE8RWyX",
  "key42": "45bjKah6Mo8z1eR5hT62T6sDatjED1QfGWQfm7fJDkxpUBSHj4k84r9iNP693gZL6NdXtKRajBkUV3oGK3kRheCe",
  "key43": "3aY44s5dihiQrBWZGuJJiRrTKY2qm4zDixqRtNCB6DR4UVuUGLNJTGzQ8ntC7FRBPzkjfiAC7LL2aJbFzgqNBa43",
  "key44": "xUC7f57F1kQj7MvuWTMTzRbeCBZpinhXJp9ZFNDg6SKKBbsEbtvA3iv849D94hg6hdJieexwq1TQSFbjhJGc92c",
  "key45": "2XRpAcidkzE2pCEkXWAncGGf7HvTvbw1F6tdfgBuBxiowMt5AzU7Nics4m8NKT69vu5K75aujaFyHrn3KnRTG8jN",
  "key46": "uMKYV4YZgUM27PkTvtcMefjqWBaXjzonVYvYSuAvymKnEWxapDH85X3ADfGbhRCrrSaZDvtDayaJPzmJgNCy6xN"
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
