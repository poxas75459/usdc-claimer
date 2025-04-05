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
    "2hcTMudvmFqL8nZUuTc4StPcri3hpyHj979dN3DcqUZpahVhWKAAu5UrtG9eqiKXi35LCaLmGrvzZrxf8x2XapFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66i6CTGGJP72eLbN9RyrhcHtQjGaQqaEp1rPUNGig6jnTogFfNrCZwo1CQLkMU4183JPRmVT8AsMSpwPc7Bxhr5A",
  "key1": "5jAGW5KrRsZHNdz8KJK1pQn3ivZABrcs2iD5zsuC6nkwNgxkWD4WxJ71UmikM9Xf75F1fttv4ogFBJnDGmfCUswo",
  "key2": "5UZgVRmiNo9C3TVze5bsVwjmijuHF21MyjSBSJRvSqVJLEPinHUuVDQH8YmxRTLtYXhyQ7NoXxqJ8sfm1aM6HnKt",
  "key3": "4ocWaZNdzpr99uHjRb7js7hAUfwuryoWKUp7RNVNEtP2MxymYNDbMtPxj7d81gx6mHEMtvGg1PEoGWf17xGsjyNQ",
  "key4": "TYKmR9n4f2Z4UhqRW3j9MwbW6fKd7bXXYcKKbuNQh9sF7oVQ9L2Z9wPPzv329E6RaDAX2bvTDKbV1TZLvekti2i",
  "key5": "5P7MdWbohUgBgUejAieSWsiyaMDFRCaEkefKhpgSNxEfe1QMCrNBhsEFrCva2xA3Kx73eDotLXXex8xzhKtuRF1Y",
  "key6": "4wh2NRo1fuJRMW5Z1RKsjANrfvsEqY8upR5RVNdsXfz98HFun8ZKb3zp3jXuEhuCakXUR3cMoeuMekpoy47fs1Mr",
  "key7": "S3Xhx9QhMyUurAuSVbWatQWZBjGjFN8EKQuvd4BvsjsFyNguSeDpS3yR5XvbATyqKVo2xsbfbifU7gLXy9nNg9B",
  "key8": "4xecpBSA6TVojovisDnzCtBmADoa4KtwWRYP1QNfjk7QTmfiWMs6H5M6y1jaejDeW2yr19UZE54x84wKEAERXsv6",
  "key9": "4RR1YNFtCJzP9P74eY3YhhcRqBKoLxgTZrDjGjBhV24XHGVyLDTvp5X9SR8FvvJhTPbaTh9jTT4zrZ2LeGxTi4Be",
  "key10": "5p38eNiY4HWzheWKLuP6VsvuwbiW8RaE7ZYkb5A95TUG2h3nE7XjurGYPenHpvaxGA4qEPLz3ez6g2D4dUPuq6zv",
  "key11": "skYitbV2ueBtE6fzUZBE9rvaW9MaRJmiHp4UDEgTgeh4CRAPzs2qAVjMkEMJgvQXpfFq6YQUEuWkQkSmXXAUx8k",
  "key12": "3s7kkf9tFbD1RDGV2FHLyQydTichHAQFwM8Z3nKXT8ZLkKRgSxwRgm1xAMhtaFSoaz3a5FZUWv8pSHiurE1gGoGp",
  "key13": "34Qd5mkoHLGvTFYJCGWTVuctZAoSKeFTRHLMGZHDrkCKMo9D8v6o4u9c2DjGQ3UDms2sdN5wPgnoKTvnLwSftkZW",
  "key14": "5HojsuRLaQ17P1bKTMTuL1BvC7VzBqrH2ZuQZj5Tjkkd8zenwJgw9JcsB9d6xWhGs1MrE2Lf66C8dZkdqE7Dwtqc",
  "key15": "599PWrHjjRPTjEXUqDVMPkQcF1r678fScyafCNbdRnjot3cn6nuzH4oc8bCmZh2FUyXtkuqMmRwGqCeW4LxD5KKP",
  "key16": "2oBwbiWCVBgqiZSEzsSJeCWiHPFyHXkix8XY5anMd9o2Ght8ewV1i9AWJWHMCwvWaPt9HzhbUFuSR7nErx3o27tX",
  "key17": "4jGXrVD8DYxyp4RHxXR7r5kcfC9os8dBYXDdrnAx74ReDUDEjjHaLv67npUrDBQQuSLNqL2wRhgS6yhd4mrN7aWe",
  "key18": "67N3NbNXAC7RhmJ1zhDHXUQAfAZ8VVX5cgQJoex6KDGrui21UNCvq2m6yazM7LDEPcHUtD4Jpabv76TMgZfG8zCt",
  "key19": "39i17xS7TgCnNzNMKFaP8H2q9HDiED4xetvt7C3Bfi8TrLSzjT4TKaeRWAXMpFGj6EVHo4aEcbXqXp9gpLSzVGZs",
  "key20": "59jCvGGhTTXZaK2mDXLzCYuh4yJEYjGcqdxi5UEPrcoVc3XQooDoPTxviC5W6vbzvz53megzY6MCy87SNdkY6tvn",
  "key21": "4JZZWTjW4GZyFq6m2GkBaZfjx5zbCBoN1V4Ya67BDT51Az1NGKyZwsZhj68EULDkxKWQzcfUHJFM8wRkiotM6yX8",
  "key22": "5zqp5nhfe5rzBWwVgEoqwnRq1BZrqgwThB6HmViTNvz6ujUD3BxRwBfgCpsTnShQEi9Rf4tSJjrdWfp23wNcmpSp",
  "key23": "2YVSfv5EfovxajiEGDBpX26Sx56CsJbhwdQNjqViRCmeqJyK2mcajRjnvpXHpxhhnMZT6o6H8pLznLv9X5bEA1mz",
  "key24": "A6pDf3motohoqFsmmkZhZoAQoZbvGWuvjp2pLetD2nzY9LRo1QKyhJ7wJNQhxPaTCnPWeeVrJSm6NaBWdC7iPmG",
  "key25": "gaZ7dC9X3564AiNPcs8okjrXv3Eat2vcoXEvHmn2q3FfqeamiSE6oiVEG4kdTywCxmH69EzhKXo6bMX683YSce7",
  "key26": "4Z216qjArLUmyVyTmCvuXEsYMVUHjsJXAtzGwGzPcJBreEc8PZkpTtDv2N2qES8z52AyhQnfJDvedZ3zSsjd2c7c",
  "key27": "2ZoWw39Nc5BCCqvCmP31EqrdNwyq7igvob2v9S5VXuhPJ8h6xMWpivTEWX8ji4gKXYvJYyNZ6K6UUzwS3wKn1Nfi",
  "key28": "Z246FkdujmRf4yK6U9f4ZJc3eyCRydSUFa6rFSiYJxhmDo6dscnsicDK562avQ4prPQ31YoEcVcDLR8UMX9xrdo",
  "key29": "3AqFtXhLbYhmPgUPqhHahSYTAbB5TQaXB2RdTjZtHHPFrH4PWTvWPfipi1y8tE4ceB7nkhfCZvq1J6KzNQz949Vo",
  "key30": "5FvQyjkwtsAyxADN9xDRaRugZtff8tfJ1MPrP6RGrMibuL1agKWynSM4j47nFKjGrMTAEPq1gSWge6rJQUPYQtpx",
  "key31": "9mj7VcDP9h1So1wTam2HtY2KQiLGei9pPfHAvtpR3o4DD1ifJ9ydXHHTiNG9ttkaybse2mwyWq5oCFnskgzoEb2",
  "key32": "3XLk93TgpLHzuXcGycHmmCbVfWStziWzxtY6Z7jnu1xDeWL7qEGU4rjVFy28mbNJ1R2HkLXWGWYAbAHFfUZ6BYJ5",
  "key33": "2Z3CUX9JtFJabdyBZxNaXzcAeGDuwkwmA1gp3MtapBaZnEyNoSAcknicndTtxgk9nSC6iZB64yCvLpXK6uHvE99X",
  "key34": "3Kxo35ZvYd1x6Ga4NGGS2nVpd2wxrmsvV8rnTWeigNjkgzSmqMgsTXqSqduR4P7GS95EFmA1wHksVY736c2Xanxs",
  "key35": "3YSWpPiAhzyEmnMzUiVTpuSHhdtx9dFoSG6NZa9LVwmKXvooyohVx6XooL3Jn6Y1nnEygNMroWpLV5RRikn8A66q",
  "key36": "3oMWvodG6PrpgC3NPi4tATmhzgDgi7egoTQrSGQM1DiDpcMfnuJErmAm5f88YQDLzkpo6VyU79RcnQjMZxL3ZNwj",
  "key37": "3jDn3pHLpXJZJ2YanhyaLKakSSYRQSMhcbSNNptpzUjfekYW8b2QXU2rgT3Hw584BbU3Fp7ajq55THWB9Z4eeY3o"
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
