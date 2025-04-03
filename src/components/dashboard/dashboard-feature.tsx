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
    "4u4UfsxfiZ69jAH94wm8N24UKTKrcmzTtwCmF59UUAvC2vWUSozBTh9mPy4SRC2ES1VETjYhArHsyjsP8wgf325G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADtSMynjdF64ZRyp1KhozBe6L5Qrczt91GuVzpHUr9nbjATG1w99HboHiTPPJvK6BfB8EE4cnts752F3hhNZtZA",
  "key1": "2r8tBE1MEnJ6eNaXd32tYpXkqMhochDQnTKsRXwwo59EjD15yoyPgQcMDXAtnz8UqRhHHFYDHh7aNXubcbiLYyRD",
  "key2": "FA44BWzizT3NEULk3FXb7ekh86qksjXcFrnvEcwwPMqxL4DW3WsxAag6bEqM3sTruc9QR4vcbuGKcKcUj77NnDz",
  "key3": "3XAR1AmwJtbNcLipKg79nuxSvXqp8DEqxRy113XmTyb91uK3cH1QaH12fWC1Qub6Zs2WdjHeZAbAcvQR8yQ2rGhc",
  "key4": "2YJYXiuPU7Gv1bvLuRPtUGCHmisi1tX99MLnuFhy7gBL7dBTp5DcVrG25ssZMwFjr3cmscg8oskWiJ8cULYkpzze",
  "key5": "4nXRwZAppCgFBC8ba3hF5ANh9PvvYaFVgfSwr4SmAFrKrn4q7kbCVQrbgq6snkPPftZPKCitY4Ttzpjp8S6cxDAm",
  "key6": "2rK4M2wHUQ1tKRE211QfCNNvYannxi1g2rQ49n8tkKPXfNVTtvLENGtczim3anZiZEu5YaCBQ7TAVhood6BfCMzU",
  "key7": "3WdTxtJTnRwa9ggPq6AF1UAKiV5bYee4Wr3qeampT6DZvm7LuYC13httJktcj7ebSmun7kgM4XdGvxhB5Gofy8U2",
  "key8": "4gm8xQ84gztzbhGDBypdgZGzpwfvhZVZmhBycYPAqDRk367t6wkfZCg6foWr1RRNtLWGvKVUe3fqwF58SLi57w5a",
  "key9": "25DLuUJ9ddXsrLRkonwEfTvMky5WNWW8NcrhCGUpKgQFQLJHNjdEXJnk8HebgfJJy4GZwBqak2DxuVqRWZXNDjAW",
  "key10": "52SQkWEAZP3jVspwTSULc55iqzgJpyeDdJmGkS2VQoZb2KKqLdKBJNe6R38sWsvQ5ZMTALHUpJB9dqeQgPpRcbK3",
  "key11": "5ddwBoG9SjHW1XbQmteKFUMd1VhfEG9rBhvMDHzXaEDVXQMYtnMkvPUU68wdLFm6tpZeXYEQNMpxxwEZHsRRUmQn",
  "key12": "2GshETbMaUiJuL9C8svgj9UETgxZWJrzoyzsp5DDmTSLvi7VRGAAkstF85RGakqqGHWiMbzbCCAoMKZrv1CzVWtg",
  "key13": "4zxaCVkNDcQbMmuTiKdWHTESgsMQyTJ1Gxp94L3ytNgCYaY1Lr8swte948sBoPt4oMs4dHU8jL1hqBL8zcThZYJk",
  "key14": "wZ5rcDvWzQ3NzerxsQ27HMexokLeXai8esNnBWAxZ8gVc6BYU9N3CsnzjkER7zHqjckFduAcK4bZLS6NSpKD7K4",
  "key15": "5Pzr9NdseZpTqMBjcDDHojhh8nsqoDkGjToGW5bY86PqfPgCB41JRC58qoJf4itCxk8rp5cm7itwYLhH2TiqgoqJ",
  "key16": "4b5pxwSZ6mkzH7538gzCVuAGSTkYnp3wHppvYNYsJ2b6uRfzsecamikMZJ69LaQJSDtHtMWGExLDiJJV8YGXHpA4",
  "key17": "2VykYaZBEeb17Wrfkk7tNT8QsqiDUNVWWTcSTAox8A247V7uZpAfocybwwXPu4AJTBhF9MGxeSu4YSzWxo7dDSMY",
  "key18": "4gMMfwpav26ZNpoemK1sUTPCoLas3C9CTaKLYV8ePRyG1CpKm21sXt3ktZw1CBjfkh2jtYoPTkNSfqBPZugGjJEJ",
  "key19": "5R1NFHtc9TcLjHmLXbGrAaXzcsTEZcrsqa8Gq9cDpa1VMdrzFp1JUUN9yWk6ifnAYY9GnDspaS7tRz9px4dA5JJ4",
  "key20": "3RQY82cQjgvajVz4PAErCaqJEpvg8vZGEuFwtqAqjwMjnNoxWJjfHSFUnhJ9frHUPV2VdNoySp73PUXnrPKf8hKs",
  "key21": "5YENK7AHE7M8jpnpMArTzmYkVNBYUTsu2WVcauRmfnmScY64xHUYSMVgJ6dEhyMPAoXkxFzkacpAkeK5DSx6EuUt",
  "key22": "43w6usq5BJjA1W2w7Aa7EL5zpRAcbEg2sF9ah3kpJGLSWDBJu55Tu2gb488XdnTiLFxZuqdUkcecmBKbKFdsuy8b",
  "key23": "2t9yNAjUHszBiVYXxZP3ZdLVN1qgHgSWTBFrpq5fqkEb93vfFdpSRir3i8PJVugRcpxNpMiiZzg7Vr9e3NNBaBs4",
  "key24": "2VhHLVrjCJBAuHMwi1U4TCjjRnXxqwcZCMbM1JXhf2Vg96ipg39jTCr8iqUFyMKVVYYfnVZMxrWyRQ48PCPVvdnF",
  "key25": "5SP7mRqpohcYQGwFEeknn93YSn4J1BU2iLMid9xZN1XQgcgaFCmY1xgALUZzPVtr3LHzMiMDXbQ8X1CB9eRZaTww",
  "key26": "5aA91eaEHQjAeEMEGAuoavVfTXstcmprTrRLVekecvD4CL7XiEehMganRWdmVrK7GrGU5scVjn4kCEPdZFLywF9x",
  "key27": "FnwnC3Y7m3nnMjAvztTPYvZwRxxzNjTzpECfgFyWVM3kWpLBVsWGxH2h5fqykmDBpbg6PSkyozZKoJeAk2m3FJN",
  "key28": "4iUi3M1ZWvieaykeaAHf6BSB7nnQgxvjhrKKRxuW34tAKRvQiHBJVBUXua2Dy6Hd4vA6j5bxQsuR84SiJB8iq8Tf",
  "key29": "3ofXazm6j7txmc89XzbWS2KSxBt82N8YXPtioFRftKp8aRFwyA6tgQHHiw4zsGBHj2VELA1r5R9wQbh9xZpoiWgz",
  "key30": "2btZAsgDNzktXEUshJCxCXm1C9K3oSxKNnDSDd95NSzBfedKyfj26Ycme3wv9EcJY8Bapp6JDxMTzynznkYhRGUj",
  "key31": "2K5y1kfDn9wSp63dUYyzE3S6539r7HFPxz2vCX1k5fYYFxZAUGU4j9c2kPfKgLjorZPKY4VR1oKyNLQRhTKFeRoS",
  "key32": "2khGBqro4MNqc7VCPhdDi5dARKYfpBkrWyT4hS4TN56dEid1okrBg1UVyc6bmqUXrKohbNQWLVa4s3JdREMeKu7u",
  "key33": "4mnRsZ2k518iug1xdP572jcHzi8f1bnmXX4119d16ynG6eiiQL49T1DaigsMgf5C8w2jtWZLfLmHniHpgyspuxvG",
  "key34": "5N4Cw8XguHDWPuHoYZMzcqtuEQo9hqDqptsmMhxqGNPpzrzvoVjvP5QYijzGdHnBeZV8hEMxPier5AFFzTaFTNmE",
  "key35": "W936r9s1NkhbckRMghh9gcdv73npisSmeJ1ZX6iDr7BDH21YaSVDWC6skB9xipK2yZA31cKfFraLXS5JuiETT1C",
  "key36": "3NFnQaSQDnESEjtmhLpF7zqF6RazwjtN6kAnfN2UentfRLbu87ybpKuqrEmSr74c3Sb1bADoZX49SE33DE7KFo57",
  "key37": "4ABxKuX2ZThrVfivMD8ibaxrm1Y8Sgntv9kFaiSz6dkW53qBNnGJzw8DUruESkTTqH5s3ig3LUnXGtULr4L9wY7t",
  "key38": "nXp4kTJd1sJ6ijyfpW3sTYM62BeY3KwUnuDHgVaQGZxQ7SAKTvUKbN7HrRNdqippB46cQ1SNb5bhMuQ3BC1K3kj",
  "key39": "4wvbxLakarW5zJGMR5hxR62MiT1p1hB3APFe6Pp1LzwW4Z9oZJb4KKwkEp9WNX2eJQH8AtxJmQCS1mAC7GP5mevD",
  "key40": "3djqV2Ht6HW2hyD4RqUPd1DegMjLEcgEkJE5WK5ZgV9RkHZ8duwJUaU3tp9pCv5fzJEyChVkQDiAutThZoHrNNSi",
  "key41": "4MizgGvobLfuKbAf39XSHu7tVVsPAkKt27JBBKgKsBg2deYWyedh3YhKjrFwPc768ktbwqXn7jEHM8AHdxBaCaNY",
  "key42": "4XbH18zWz2hndckHXjQT1bf3LcEiwWKrSySpyUe25s83e5za1BCsxMc9G85iRqfwtAy9VgrjiUVKUtdwzB2ZbNxv"
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
