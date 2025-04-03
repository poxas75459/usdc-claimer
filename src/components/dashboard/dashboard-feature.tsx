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
    "3NeNZ3KGvCsNZn9PFVSGe1rAKRSujAFFgVGuM7o7xAcuaP3oRQBZXPXQeyhRXDeRdfboLFY7DcYf6Q7oVnpJpmG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJtjgxvRjohiXfnHQF4QHuhSpCLssHfT2voFZhuTeKoDNHgeN2w3PJUsMvm4e8HPXY7BLreFH1M1tEPVWGP2bGS",
  "key1": "S8zSULoYGfqMwXkpfAhyTAzKhEqbsb1REVQxGaJnKNRkhKCDvXTFa8jbdZ7jAw8pMFzgaoyK54AsA6okVyhAEZ6",
  "key2": "HR6Gck8TjCGFgwZT8aQaddExkEDdETyNnWKgXVVZtv9gRbBqoWNseuSsLWvaJC9gCkcw649W3Qu5GvWZYuF9Hyw",
  "key3": "49aR3TUDQHxcRLXJcvXLSsdgZPhoBYL3dyThvUcS41ftkapjMthxUGgvkc2HGdhTznhtqyZGDzxtgSGU4KN57aB3",
  "key4": "3zwNvos79ApbBe6krTcdasMmN8snxr6iSEKfrhpcwfHJU14wsrb1Xu1jZQ7Jhe82G5aQpn2N5iBG3Fpy2var4RNT",
  "key5": "5maQrrucJia3wCS72Y2QtKwru1g4ix7jsyk76BkkSgzsjQGseFJqr4nGK9VJbpLw9axK74SB1gAq5vYV6uutYrAR",
  "key6": "5ot85veCcA5Xqsp4V9NQfCy5rWKr7Aa8jdShykVQ9WGcUBomPL8r2vVNzGqsxe8UrH2WQbcj3xBScRTCghVZrBKn",
  "key7": "3NSF3ay3rNpdaB15RjVEBGyYXQrzQRj8zCytUwbNePkCzQoS9Anv7nr18XhcdRhZ98dVCrQLnDtoSyAZRVYPmCgG",
  "key8": "cgrM2kzcrqjGCWUwQ2ckMNTdvbUFKpJvFLB61LqTYQR1mgukm2XKFKv13k45TVKyYbWmLqUrQVcRyb86kzmHn85",
  "key9": "3oV42KpVZc3N5smPiKR8p4fckZefGyhKsVvdWwC2dinLUoxFDHdn87vWwCKYsscp4NdebRch3Hikp18v64mhY6G7",
  "key10": "4GfD4h8GrEZw6Dh8RufumPiTvdPrztsuW7FaMYCmH5buZJGKnEDe4pSERRLpHREHD5mJXkAMeU39jJvNkqAh5QN5",
  "key11": "4J7RnTJMgbvvQ4TbUzPw2ysqE9cDvDMavYuyWsENRfZEwWf7rjXomy6971GYUQssCuQPyPJrqQ926H7jPLXKmocT",
  "key12": "5eLooV7jSiB4PbqAsCC9PAxJutfeme9DVaHVkKtyQRwo9jQ6WmAU74t97HqTdPx5xKMzAQps7qrref8WmrCqwbRg",
  "key13": "67dMJb5JC3ojL6XpTKd9S63GS48x1bjGne5c1EvaJc4QA17LT2fJmQuoP32hPgvgmxryjX81v3ZwGuHcA4RMmyd5",
  "key14": "2HosQvQwA5dtaEmHQBqigMKTjgvGxm5XJKA2AfUvsaXorifXgPayVb4fNUYMkskdTrR6AS9UxgEJL6iRJMWWmhKc",
  "key15": "5xf1rE62tj444CsE29u3NsU8QAd5JLbN1ztn6U3723V8nKBwwv2BbQo8NNqT8Z6qfumNi11ZGUpkg5wSJ9tNhumE",
  "key16": "2MYymtsHkzacZ79u6X29m8GqSRheULGzKM5jZWuNMMCEXCpQSuqTKPVgrjCYAiBzSFFVy8Zp6RfVtM9ndBiFSWeK",
  "key17": "2Dg78PtqQckNjJCijq2bC3rdpypwxbZD71LP1pN1Kw8dFbAUi5Nazc9cm1puFRyn5JsWpg6gQBPsso35VwTWnipy",
  "key18": "5e1UQKs3nxuMxXvwdCqo2mBG7Txokn8Pocf5K4rNQagwdtAvVpj9tfSPmnhVBpeqXY8yKY2EHduSDioUk3V3WEME",
  "key19": "ZLF3dtEM3vycgdTs9WzptmZvKRK4xryGqpuDA4m5vf3H4baYT2kfCZkjs1PaS7kFsDpC7pg1DEZ66XwvNmbdhZG",
  "key20": "4Te87wc8zob3ukAZABS8a7ZUes76QtRaBdjPBa1HJQ6ErFgp9ep2iC3yua5EfQbdoLv19qtJCW1wsGrPDr4zquU6",
  "key21": "2GSzDapKj3KqD93xCpu5g8t3b6gVcAW9BCBjrDzxKc61XRmJYCvE9GCLYHvMh2YU5jtQP1QaWCeZEEof2u34qJ4N",
  "key22": "3pfK943ERASBPrTZxXJXjZbUy6xkNVd8upvqNRYdqKoraKEiBE8gcEruPJ7ViuJ6mwiWSMGQWV4nBxpQmALpWrdv",
  "key23": "3D5qW9ju6GQFFQGoekFbtdoN3mZ96dEJVP85Z7EA3RBeuxAeJduGV7LL66fEvc6YEBvRmo1BN2AJUFTcmKytM8w",
  "key24": "2T4GFj9Ksohjrg8MC1MyUx1pV98eAKuhPBjYBwj45BTeUwx9q5TY1Vf1ozj9QmQHt62LygYy6sQFCpHTD6eQQCsQ",
  "key25": "29gV8yBfNaaz1apZYFhv29kp9dnLwR1JAsdaF42LD1yW2AxDpj2R7zYFAbK6Wc3rMXg4xpz5C39HBDUhAv9VFmbR",
  "key26": "2KyPAgZMSMUid9qY9wQvLPRZhtZbFtLz64ZRBYB4WvT97HBzoKDET3kjXamgxGJSgu9PQDWvFB18T24t4teCtb7X",
  "key27": "28jn3b6UR6Xy9dSYktZAFhGCp7fchGmjLGBaohERLmjpxkASSNXdJck4fMZy1LkyyCAg6ZDisCHzJ6FAmpdVFya5",
  "key28": "5kdkKxJvK3pzq34AaXH1WH6kGYnbEmyjQptVL7Gp5AfarpqSfkD2Cjg4Hw7KLe7moAgjChmaTYGwkavuQxv6Xaft",
  "key29": "2omz9kvZrPyprf4XAS6wijxCD97m5kVCCh69HJcye86sCmUFFgbcDdyQX1Ur394jaHbSqnvifTjKsb25JpBzoczd",
  "key30": "3sp86usm3NQkSHL5jiuuPwYBssk7vipUfKRuxTsU3UrSP2DFws8etky5BzXewM5TsHUoMZ9vHi2YJpMgGz7guWKC",
  "key31": "4Ebj98ZNrXWU2rMvDpnCJGyv4E8aaJmHhrT7EfyxTtg9suB7xUTsqvxt7z1HZCDCYqdYNwfkmEXASFELhc28xTWD",
  "key32": "2tNDZGJDMDiVtGxD6aNqLDcEDr8rYvoW5UGabYS6CnRra8ztn4wgnDu923gqrVa9rj7q6Y1bMZMU23UgNGUsmXnN",
  "key33": "diYEqKwYFE2nZPVNfAGArccACRopm1XsKPrSNQ2XhGWNzc7HZUoBxQn2Jvqhu2bM2HbMjerF8nWnR9LPabMYyGV",
  "key34": "5cGyMKyouA2XA98kfi6oeMwT3XkBHvQGDE8Vskn59LvRNZQpo3Uwrn4MPPeC48M6nD2WBPMZ5yT6aLdR2MsKGokU",
  "key35": "2VeZDYkiFWqU19kS8ZTzkz7HN4Vty3PUo5gtVcuKnKVMsL1Lp3qDR9nqnkM8roaFnF99hVH99UPbAFcSGNxDfuTC",
  "key36": "46m7jiWUtPB3B2iHhrmuphxW2v4RKhzTVXC7KTzutCTapvAmTWJ4aurYfBGdcGFRDt3MsTLyEA8HoL5w45Xivbop",
  "key37": "34X2B6q3z2aP1PNoPdSxNkNVSsw7KFb6defxoWuLbKM5grzDeYZAi84dBfTiabmLnuMxEqZrD3fDexaRmLUMexHR",
  "key38": "67mnVJwABYe5HmizwY9pxY6tVMakQ5v2NMt8NFwyp3SuWhsQSmSq3vRAmf37RuxpFJwFGzYUpbMtUGkdUxgWDH4K",
  "key39": "5ao4UKzjxqoD7CG7dpHioryu79UmgTyJdoE2JtsbMSWd1engrckEiKd1VKwcpCk7NV5pKYdU6VDaWauvCAxwkdzf",
  "key40": "66pyNY2TRcgdwq6ATTN55Cetj5HeoX1PYtMdXdVwemVBnpRNqdryJRixMu64WtUwotaZadYMrqhE1rCy3R4hLFey",
  "key41": "5bV8yhY455Ajeeq9HE7WtvdjbRrmyyTL955K2dM1hQKYR3cRzQaSJC2UxTHAHWxprzq4BjCG2EDv7BdFQSKMuo9Y",
  "key42": "3BawUofJQar54LXyjAARrV91AYEkCCBhYjW6YEqzNQcLyALP5TsvBkijvPDnyK7taU71PhHxdmqp5LeY8EWboJZn",
  "key43": "9EvknZSV4AifwjdVuX4NJ127nzchHwFBPKgmvqAzFVhCiyAx2Ktcwo1ZDaQF7XYsrtTpH6v84eBtXTeSwsQSSb4",
  "key44": "bR3ay2Wwv59DGqrTCKvv6mNHkUe6gZ9bAYE87SSVVEU4gweniGDkVUin41yWAn5tazotrR2kT2H9hR876yiW1Jv",
  "key45": "4PVHvbwArH5JAF2RLjm72YKRPdAj1axvm155cvRajg1Tv4piq17ZAoqxa21mLEpjAPi5eTdK4DvXY5uwbog74WFN",
  "key46": "5VzrN2yB537bLVVTnWjN6dGyxzx62wpRHUcsUqgHhd42oPH95rBbR5Pcz1p46QzgtrzGLjgWwuPWTn3SMki2sTTN",
  "key47": "KRwJjQZdpMN6HEBpLa5dAF3B6v1ukv4KAqbrfB2NWC2cN6Fsm7CVGEBZx5ZBpZg6Emgkt8gbtCxoRwXhnvexbyE"
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
