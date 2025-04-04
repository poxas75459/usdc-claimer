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
    "5xgoVWGCmuvbUnDsTRqSKEr4P878azvawLP2v2QijSjkW5uyXFbkVBP6o7gbbGzkZ4U23JitozcPYFCcC41WBoMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkyQ36soVYppT3tR1EtqmVRHkgb4JAXXKHeTKP5VnAEFHqPBrCsfZu1iqbv1Xfxdwen7iK1HZE8MUHWdQEVfM9S",
  "key1": "4Kxkt48Vt2qJnMkyGVVx3ZvYyoHKQirMKFTEuPqk6TFdsvrP71UNEq89VVQrpi2BK3zZ381EFrvtCEVi7umU75Sj",
  "key2": "3pSEs6Mmt911tCgNgRi1ZSS6sBDwTM4gxZ9EuS1R2ZngRYoahse9htJgShpEnBCChBupGNj8TgK4G4Vr13rM7gEk",
  "key3": "4NEUz2VruNxsocWeKmQvuBUPi2jmku3W3RYuKapLDsRQuoKiCdpM3TysP6gAkvAqs1irVy2E7jakR4pCHvZFqem7",
  "key4": "5RT8V8cKfbFzW1nXqX2LyvaXRtDVaUipYUkosHJn4jebAdVVkT9QsLthBrbAFj8sxN2hSt2962u34SG2QL6sY5xc",
  "key5": "2gusJrMLvTmrh2n7mPFCvgREeS4DhRWbL6u8JohhPNYsQ8b9svYF5Vr9PGiWsx4Mck7jUrKAToKSWcA72PoD2dv7",
  "key6": "4XmK9M1U6xm1WpV2gd4Dnxt6fi98pnYDfMuaWMnrmaFBX5pAJ7zkYdhDxpKKho4DJeXEXW1ywCegy6yKLt1oVSgh",
  "key7": "X46N8xBKChstdUzb83m1eruiTBC9nuUFaj7DMCnTfvNWxuczuiECTXTTzksncJsmn2YQwZN3MLrg25BCF6quRNm",
  "key8": "8TwZ5wdgvR8d36uEeCHNYLAUgqBDxudjWURZ3cry6GziDhSPB9PNSZEo4MKcfRuYK4u3Q17TbjRBLtWG7DmbY5i",
  "key9": "gbqanz4eUs9r2JBAJeDgjS3yiYxVNn46geaGcdKm97tLqxSn4yC169NX8oLn3k7Vn3CQ2TrDi46aJDcTL4Wmwkg",
  "key10": "58XY3qBxWPPB5Xp5DQsrtyives2Jn7qXJDLXVKNc3xp5eyVEMTU1ftD9oeiMMC8FF21WPZedvShawKP7QfwiVKqL",
  "key11": "5jwNDYwk2B2S24xsD2xAQRUsJntSBksWDvbSMfg4X92iv5oZ8MM2AyRWqfyLyhrtDqv4qxaKqPLRpRYxz5Wz35LA",
  "key12": "2i1Xm97iXATxFPY4acwPq4tN3hpmzqwoL3mfHW8QGCRSBTkP2N9hajbZn7fhZw5CHS5NnLbRH2MitDzjSejAJVAg",
  "key13": "4LLtdLDhFeEem49dYuoaWpNz88nCwHDepdtpyrLZTdH3iZpmo4FgFxfA2xLEYJgMU6gZJhRmvEUFzLW4qTDsL1zC",
  "key14": "4zLUX5JdwgJmxJR8gvFSrr7A8TvRm2knUS7KwHHUq5dH1fMcBv7GuejNTn15gt1fG3iPHmw3pqJEXu4MnfFBDM12",
  "key15": "3heMPCT6xwGjkqPiCDzhb81AQNMXCGx5NjSdQom12uXTn5rd3ohUco9vyx5zDvVp5aXT5cYZwGoQPxmChyXZyuZh",
  "key16": "3nLH5MJtArkwS3nWKmX848DZW8LCYYzK4pUezTPPoDwqGJr6nMNvvbZszfuQiejN3Cg6t9xMcyxYpVFXgvwkG22m",
  "key17": "53BvXydUcm9ae5wEwBtTRHG7uCMBaazniprepniDoiTBxXivEbb8f3igLPMoJAEa2MjDMympYBYVLQycXpnAZ5Pr",
  "key18": "3VDSugQhjnjou11eVjNuRd4kkzxXr1zYFgHvQebdbbUeAeAHXaefTCfg8YLj583vkHP7xvUxe6fMhP9Nssinegme",
  "key19": "2Db7TptrZXvt7BXv3U67rn6wpCGQ6kTTgt7JSfY2SFKm24raCXb4NLgPXjSRbk3BEBugj3q3qENwkD9Zu8DL2ip5",
  "key20": "2i6Ym7qRvG6T3bpCipn1icHTZdyyma3TSafAWjdfgitrfDScuqzkrnkJQosbQU3xSWX6FQKuuKqGVYPQniEDJAxM",
  "key21": "5Vic1ALS7xQPDPY5mJ9U9uLcYxjFFxTVvmxywqTibo2KiX5EPc1RUYM7u3VuEopU3mPx6zMRYM7SbKa6cVNkuLmA",
  "key22": "35Zyz1JH3NVUYH7bLBUAZ5G3g2kHLys6Rr2mnYTZRuUfPHEvWaiYbAmba8ndd92YGjz9QzkK9RyeFikAW5qqhYC4",
  "key23": "2eYJ5XjTF6DSTyLSZ5hnwgengZKxjjSGthMymqAm27hUAumQcPyq3UmCLpmQTVD3wUpF4hp4KVhQk6jcwCXGjPRW",
  "key24": "3kNDvYVs2jp4BWDZ9WWjuU1XknwXh8aVpADjC7yyjpoW1M1VmesoZiJSm2mUQgN6bxJ5v5H54wFNF2vpeDRJ9Vm1",
  "key25": "4iKSmpuKpCic2Nwye9aadT3xucae2fFh2FgSsK4E7CUkD12qwKN6na1qfdVvm8kvQuDU9N4SocutTBqPj5Xxu6hM",
  "key26": "66UqzJ8zcX5Xq9LZTQTcaDHMLL9s3n9vBCU8Ptmd6VCDs4arv2Ff1SeqB5WpCrS5VVvKYxagzNh3iPWdpNt5cwQL",
  "key27": "5A1a9e6Y57NQc7qkuJ8ioEnMoCJbCUUCKVaqVJqLcj4T5gSJreCtEVRGiEoYZUxAj7Fbxf6UeCRab67LAvwy1pBp",
  "key28": "1mYGKx5h16Vuiqad56xMcM3poT4Tt36e9iGsQX8KgKVzJZ3ZWon9WwbD4k7ivv6sTcMpeEbW13cQdHJaxWoaNqU",
  "key29": "3TfjRGYQrQV3z1YghvrNUxQMfUqkk5MGXSTj19ZnBfHSoitmtFQa1ZtHbTsVv6rEbxvQ7f7WeCZPq9qEVVgjJCeX",
  "key30": "2AgyQbZ53b8Lep2G6JrNhGyuFHH7E1aLC5KXiDC2GysFLnBPrPbknj86Jyz4bvXVupUb2Y6u2uJdg2rsvf28ie7g",
  "key31": "2gyA5razo1ZHhmoDH4ZrX5KR2cZcLn12pnpcAsZFcjy3hKTNV4rRiCqoYMvTAzaBibvPptYagtdFr4Gmh7HNM4di",
  "key32": "2EBGxW8KNEGX9ypifcZhGMbKYYrdaVT7ebAPsnSQjmk1VuQUYFp3pNUqRP1bgLxd6CpKimJNw8wQyEwkNrcWngbQ",
  "key33": "4T866cJqLpFViuADjqfgNGhCChU19hxvWTWhwR9g84nJ5LMUf1kw29osLJXQj9YK4hSYtCi6ooSjAULcX6grbso",
  "key34": "4Fa4iUJQDYYtSoAbB4CDEDnV7Sv42aYQb1HDC8uimRYdR5nvtxLfPgYSFWDtZANhv1UcArvj3kksL6aisFs3n72n",
  "key35": "yEticyjWJBG39CW3RcHRtMYzr3josYAZkErYhDwu42pn5mHv3VAtWNN6h6eYuDWFMfUoEA2JFEqXtGgNfXZmmaS",
  "key36": "3cubNR8RdcrmU9aqyuokYKPGjU3KpSyzJ5hBAsuzGMMHVAPUoGWicNgFeMxhjxE8Zhnxz45BPjGW9WXs14iLHDK7",
  "key37": "5itdV5ohw9rwL4BiPCeYrQyWyBRzRSg8x2JLppbFh7GGa32yAaPfXvXQa7dLhgjSKt7p3VRzzKmVsbkLdC1zfLDR",
  "key38": "5JEotwak5kZi9SBwL4GiRwaLpzhGZnCAt6E7hUShRtH9zq2wk67tHfK4E25XLXAFQMdshiJkqwgvKqWqVzgh2RQ4",
  "key39": "4FdXyV9WrjkuTp72etkjidWbzriGxdf1JMpDiLdH3ocx9TJAegKy3JhTCUCD5iDVSejDv1v2rpZbFX7Mhm4Y1Th6",
  "key40": "2eohdEc3SLXseCAgVgevAFoLtbX59Yw4H8wQuHXqLs8oouy8SQmpatWcicVbhDeD4eN25hnx68VGFjcDpRhMm7wk",
  "key41": "5iU8LX2dHWCHZwhqwpXuoP1eMvthLM3aSYiSUeyAPPyj9CNTn9texyj1WGfpuEnM4rGJ3LQiEe4huX9qruoXapUH",
  "key42": "4Bb4ntB8GfC6cR5A6rYCL2pApxJhdV25ovFTRfQBqZFt2kLi2E1ubhDsBMgoc3XPFfpfnvKBs35TSPr3BYLYui53",
  "key43": "2FStRAbBt5Nkc8Dt7gGX3xQeaNCxTifsKvHbchuRJDXDF1G1KL78KnrBwtBh6r5SeMwp3VhRRQ8ATMSfMifEWui5",
  "key44": "4q1U4mvXVZYB6vVhNNNq76uq6L9pKivrXgYSve7iJT4WFbTsovuTtc69VTqkTnSEiKWqZcNDcmpuaWKLkyRarmwu"
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
