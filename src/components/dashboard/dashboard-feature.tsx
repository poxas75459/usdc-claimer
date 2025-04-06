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
    "vCd5kcxRvWdE7Rgf8857R86R1aFuLbMHB1kNuFYbMp7bV7YGAkJMDk3BBJnrWd1kkw4xuZMrZ1SmboRK7HEHbSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyhgK4APrVnHPgLBakBjZh86QsQDtL3pih6Wn4XXEYe6xQzPVG8jVGdXyEHAmKKWBr6t73AZvsaSF1mbTUKqGjV",
  "key1": "5mZygaQjsTLoxa1Ad6CinPPFtSVTSz49zmtyunNfUg1r77Pphw6KRmfP7UgbGsojciKbYhz2yymbJxnhhhifVZB1",
  "key2": "NpzVQ98CuPhNTvpon872WJx5Heb9b7DEHWAkNAmbn8D561sfzDYtAZYQN3yKFf4MH667YbnRD14NaC8Su6CPFmM",
  "key3": "3QQmiXuwNMWcq3XWEXME5cVf3UkGk6qAPowPzFhMH1LhGn8wfaBCSDhgoV737n6UvwKQ4FE8iPeSN2fMB8eESU6w",
  "key4": "vgJhgnKR34xF1wEu5hy3gxSRedEz4mC2SxasiLyoyXU9uJDYLfMTejXEj2qkZDCAAv8baEdqAH3WMwJtPu7fJGU",
  "key5": "4Ze1FpM78L2YqW6fLZ5jUBxv1tuAwcLVF7YcbXUDyywupm4CWLJbRBHXX6ewETD9ZJrjBTwyX53sh3qGQLoAusUz",
  "key6": "2b5cBgKATq6tEzLUayrCCHiFDh2FPCZgJDJk9GDEesn2W8UbVpVL8H53mKHAKGhFPvw67gMF7eRAy5eRF4F4Tpv4",
  "key7": "2a7QyzH7PCQ6kuFdEzmgZhcZTGJX7qFu24mMQAbWdCdGan9Qb7mMsi2wjNEytwT6FeFkj3q6Xa83EzD5FgiBH6s6",
  "key8": "5P6Rtjn9j8AyLXmJo58KjsG6nKmEDReB3jyWAGuyc3zcRFttuHXd9EaB8ec3udknskty2stZYyqLiQo3dqB3BNbm",
  "key9": "2Gqr54htAHMrUNj32JgVJ1xEDAcqoYDexL2ZsudhCWtkqimqBgMiM9mtfKoT3tpGWEJqeyydBx11SqiYYA5gVjkN",
  "key10": "4mWqiv4ySYAuRxX2kwpQZkLoJ83uFSAJT44uGpBEpF6LMZcrUnqo1tqFgWu2Mw8EgdGcKRpxF9K5jp1groP1sLi4",
  "key11": "e48jzUmxEqwFwrpToC5v9kH7GZB342bgokxd6jjKU1q64nKUxbPBa8jUuw3uS7bY7drUymCL2DkehxsGAVjRr5i",
  "key12": "5ntAnxhq5afri44iYh9TBENsad5G72migjeWmaza3gGsCRqtpZ5dXg7y2KZY79UbeiMbvMnLoZ9PZtiz3XbebiVo",
  "key13": "EpGmAZKggdzw4bxLWhQ8iTpjyJLcMr23iWxixo1e3SkmSc843Z2qUk4HuPfCczuMdrLihGanS9MzE8orjk67hGM",
  "key14": "2Gf731rduYQHzbWXwMo1HX4qvgAR2yct7Q4LuH4ssKXDJnPrvviVLUg4r1bHis3SMKTkgWidkfbTH2DnSXpbj6xQ",
  "key15": "37op3rCFAvpCbR1qcay3mD5Yz8L7hsA23gdj8Qu7WchgY9hN4wQy1zDpLwcQQGtCgRHzmEWB6keHWPdiBhY5HvmT",
  "key16": "5r86CQEPokie5txLuMM95Y7UG7oaMXAxvsSp2vCkmtW7T4a9STehWLzNQGCcKbTpRqjN4KpX1u83iqw9CUG8uMab",
  "key17": "4fMyQ7TGvhWwZz6hytBmTu4yhocBggEbSaj5zXQATfy83AfwepEoVF76zyqPNg5WkbVKxo7FLmpoug1X2yM2s6vi",
  "key18": "5m5hgFzBakFsjde9DyMun9TTd5aEW6r1zP9am9pAMbK1zXvDGAVVjay2nPUFDYPSJCm2tAw4A3iqE6AacLzxuNCK",
  "key19": "fLeep9Fb7Tctks1W3qav7BiPiPEvtdPKYHhG4bsiS1izxCi7QQEV5WDseCvFLiNTutH2AHRVzCgysthZUjH3EVY",
  "key20": "R6UGZGVf3XbEbNKECF9yFCBrCWBbjtXa3iaaZUTUBiwWH1fE2wgu7XDkqLxgGQ3e5cg69xPhQzdrDHKShGTMoU9",
  "key21": "4HsP1qvWZJLfGRftXGretwCHoCi7dMADcTHycBiLDsoNvfSaFLLkP47vYrkvbb2SSKHGfkCLN9WWHSGwHUqTKEck",
  "key22": "4ybnEMXyDpCLW8mGjk4v9sjZreibueBPgbRSnn8R5UXi2Wjr84XHewS2tBZWSzjzY5D1KU1o1ZFA1tMVPgGEkM9S",
  "key23": "2ftM8kSwfpJiSMBUCs6d4mM1E4jwdF1fDr7icbyLddWG2CC3u23ubCN1iDRWFnRndoAJQXR7A2XG2US4DN3Q15p",
  "key24": "5vXuNNE1LQyTncfEPrh628vAVKDsN54qPEvMQY8L2GDTmfbf65yudChcvVnZjDYe7odRwsRK4Dy2kqbJydRimHuL",
  "key25": "5yRRFDJe7QM9EhMZC7TufCgbChYZ2b8DL5YxqZNFmaaF4Hwh4UegXXFXi3NoobfwawEPCBH192Zm47BAhGKEn28C",
  "key26": "LqfDZF7v47o6qXNgJD3oUFgtS4kPE4hVyhSgP88rFFDWvAnjAumsJPjLt79KYqkBEY6oVguf6cMmdKcp9HybcJY",
  "key27": "8F3uhUijRM4Lii9d58wGKJ8EjEaUW1XAMYeJvajh3nCzZT5viaE222Psb5VZMhUvv8nMeo1Z3gKX6wYE2wry1eE",
  "key28": "2oRGVG6s8YMMjxWt5mzWnRuY9Kwf7iMXFcqC2tfjTEEFq2M7Us1BQQgDEqq2NjY3gcp4s91RcttoHrXHbBnoLcmh",
  "key29": "3jZ6RMjh6nCQjgGJzqDwcQKU9HqQzJPUWpEdJFuRLhAa7xt7F6RRUzjj8cyPPj976wYYZGvX5UcdVJGZBkVwLtwS",
  "key30": "31ZQNpsZ9C9ZLQZtgCxYrsVYqyvSR2Wt3p2mPm7NecLYnjFS2TM6Yz3cuvRnWr9CXQ2FkKdm66hW1r7X1LKAK6Tg",
  "key31": "2ardaP8YxLAiE8ZZ5NXPHbvKodmg2pmU48UFTDXdRfL9wznpJ3vMchq6hc4ghueMv6BeAFNDZ5aZSQgHaR25DBLU",
  "key32": "2RoUmcx75jKg9XfVhsknZYL1D3ZJhCVcHHzGZ4f4GGymStHhyHTZ3ChFrNXbLBJJ4WpFXEXiuL9UuGvKmdwTsDTT",
  "key33": "4VKBcQmMyEBLmaib4V6PWNSPfiKnBkc2JV5MXfmgGSpdEbh5z66k2HG1YEUVQumyz6cg7B4bhADAn63efvzLQtCp",
  "key34": "4gU5A8KGyoCbKakL2wQHvP7uFZhyboi6DX3cd4EHF4EgQBPqzniRZLzU6MBdL2G5yYx9axxtY36AMNqNQDTWBgoT",
  "key35": "5cXnai14zRguXp8sWPpsP6Cti5ZpYn3reKHuAcebx6b3QaSGsieZtmybFyURQf6rpG5MkPiDvQGcpw8JWJ6oojXG",
  "key36": "5Z3oHayx556K9whrg9DprMvrcHPXajr4xmmbF6oXxrSA3pr4xU8JQLh2QYczLPbwSgRWoPLibLFSy8A5bHqDqfGT",
  "key37": "rdWTsPCpkEXXzzErZ7CMdHp5v63g9a2h8g5Q8L4urep7ZAmoA6xugk5mTTB5ATQhJJBmpNM5s8rVT6sk3zHmoBv",
  "key38": "2dRSJUisARjGVbom5vezaw7CfErJrsgtrvFoUcjzBgG1yvHZnVwC1vbW36uka4B2JPAB85fBWXPk7xB6b8kiUNRx",
  "key39": "jzDpfJPAfRX4KAoYAUJTKXfo8QJNGP53fy2qv6qDCnPqNNQ6nz5KciPjzmVDZq4QcvUcFgpVcmbuH97RqFgy4go",
  "key40": "dhc16zMkHjRtC3N7p8PS1oeNES6oYDQaoPrkv9W2araNc2YFL6aqTbXBEfwnc54fWiiQ6U4G4wPEgffqmLbcn7p",
  "key41": "3mHprTDKgj9AeADvXBa31Kqk85Lo9Di6ZV1awFNeGRjFxXQo9Bgv5pyy9Z7VMvhHLywq8kXG9v89ofo2ojujgR6i",
  "key42": "2w1DddidJtMQZuwY2nfMkmqTRxiTj5zG6wSi2i29m2EZR23YtQ93biKPeCcEvUV6aS4w9zEe7rdBvDvV4Jye4B5s",
  "key43": "3GN8fDWUCxkcsvjxNpncwxH36fdArZknHP1LEtSVJu6T6ofY2FvME5FoNwZH1gFqbdMdDcKXjiZoTdqJAbVps9a8"
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
