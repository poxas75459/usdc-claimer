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
    "2tEG7q9zZiBxuZ7iPBUDyTwrVXhcsbaj8AMTomKKqVDVTGhyQGR6jC8QfbB5xdyTNxX8zYfDU31bHYzrTgen8Yfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58AS2BJSizPiNVwygK9P57pih3BjmRs7bxrD992nMe27r5kp4qPzCidBXFytXMTG7NmAmAYmvUigtZ3zGQbpczd4",
  "key1": "Er5cnQEPS55dCdZz2q9aJL2DQ4p7broCkzeJtg21vjLFpevdpmYWwgeo6xjrWRD9pRcPVMsq6i9mfcF3iPzikkc",
  "key2": "5ECDVeMnAeLt3ueCskmWE5jVQV31BW7dH4WGVUNeyab35j6Nu7u6iSsedktdBCvnLT9v5tWNLv6KWCymPDia2eD4",
  "key3": "2wktdrVtNdNTTrztQ15gv38cYnHwkZrx2jYRZwoHvkGXCUHg9iHr7CQqccwJY8QifwQ3vrg6xjueNC1ZQy4pM6bY",
  "key4": "3yzZFJrWY1kGaSLM9xdSFAbqvFVQJg79iNjkntMsnBoLQK6U1LKmgeDgodsSUxpUxs21G4FXDbGyUPQw6YKKjtPd",
  "key5": "GaP3q4Ud3KqEPMb4kkxmpoQa1yfYaWrExZ68kK31ARVCtLRaNfwv74XYZzA16rHXkFZ7tBoRdMS784qHXnbo4Rd",
  "key6": "K1Wt78cpphRwcnFMLQeDwRf11vYbM1ybov24j7wig3EdR1ewSkuwbkQFVDPK49ShN5Whq7qMLnpeRYYXsvXi2vE",
  "key7": "JqD46qDtTAbBnVdA57DDmtfxn1QbJFSJe6Bg5M4jJFQ3cd9rdAyaeiqDJaPEJwwbh483bpzqfzjZ5hv9aMPBPTv",
  "key8": "3HgrfS9wmy3AjvGKoBzVDkpWTrT9u2FB1zhcTuMD3yabj1zRFF5uskRNmHJEDo2dvovvshKtiTdjA7hcsziHtbo1",
  "key9": "3da5m2zv1wVttdGoZQDRusnqwhE8p8JJaFVzRahXrxo8wCZvkzZAEEkEV19CafSR6VNVXqB17cvdMcA2Kgxv1wab",
  "key10": "5m5fBHtmQZMpRqhPuWjnmhDEJFzgkikit3SrMWeRHtRdywAQh96kUtFPDEU3C1S132zx6Y5YvmFFcPRXEBZPY9QC",
  "key11": "44YXHtTo98geqnCLVvEv6RfHnEDK8k2q7QMToSWgzbNqq66nV8NUYpb6HUkkDvcr764cRMvt6XpyokYUifBsFkQJ",
  "key12": "5zXKju6kkB9sq3Kcr3TurxHH4784LVo6ycEebSQAxkQ2jgxdE4r4E83Srq27hAgJSqxxqH9yri98uGms9ASGHHwC",
  "key13": "sQ7CRZoweKvc1MavdD1w7EdgyeWN6peCBBeVj956WNLdo7Y3Wyy9a2rMM34sg5sNvwjWVwe7FmL2qr4KzZzsgpa",
  "key14": "3MFno3YEn6Ro6HFhyss9WabEzKho5RZ8sjSXzfYfMmyAXrnXG4ps3tLLjgMh6sxG1ZN1ypjruYS6nBQLmi43ya1E",
  "key15": "48Lzfm4gDRDH5WTtwbzx48u9JEZ7ueaQ23HktYJhgYYTGkxsoMTtu6cbFLtTHeop3AjWfRWCvDkXAkxRv5xZ9kSw",
  "key16": "2xhPN8FpWCE8GXSvvcLTCcaRCdosk34mfX5AK2t1nXiDs4wMoBFB4iMKDeWAtRQJAv7jwvgMP3Tm8CKSZZDVL7tU",
  "key17": "3zZrBepojvvX6q9BwZMXB6PYw5DciN8ZiTQCXL2yVSPwucWc1DGqfB2Ys6yr4U8Bb4GbuQtM7RrC2AatZgrgU56W",
  "key18": "3hFmfBtpSbeRQGPTbVzfRkLEGD1KRrN7A2LFdwGY4CQFJBHTCwwpA41aohxc55wchjr7gbD8YzBsPZxRmreETsPU",
  "key19": "255zfm7XhQtWLnqnPQda6ZULoBZ8BQRrYbHDdHzEuMQnibdVfbpWax7SFC7eXPhcP3MMyTp6R6Gt53HKhUAQUo1Q",
  "key20": "cfziPAmX1ZeTzBSLdipGNnE1KiqfKZNJXmdR3cema1dce6PnuqgJknjnMofyfjjcZ13Wktpi6QoysUqZDoKUNKA",
  "key21": "uqn27KgwPFhFkYHXgyz43WV3hoxHEn4yVm2A8GfhLXDHvUoyW4Tuoby65yPEXZgXJYuWG48JK8NdAp1t75sD8vW",
  "key22": "5NALBaY4e3tdszZkgJeatRsHY9pGHNo3Bmqvc1DnS3VCdCU7aDfV487pEZY4kq3D8Ex2M52mGtLQcuSqUb8VRuGn",
  "key23": "2LQzcpa68hjNUnbcYrHUJDFEAf2yEdhVtZJfvNL7GhC4jHkczgK5KsMkSpkX6BKaawTctU3pVKQLfCKEDmdFmusR",
  "key24": "5FLZjujoTn4VS3AuhMD3eKPKvMbp4J9D6ssjBgautmiBr7y4n4rWkLtAEHKjQKqFWjKQPmmptSnunj9js7HYouZ1",
  "key25": "3aTd3K89W6jLi7GcJsWe5J9x4hLhYHziGpGzDcvc47c41vEtqxwzsRDvDT3szGNNitf2cJ49gCUGKSXXpajjBhvz",
  "key26": "65eUng148no1bhFbZtEATH7eTMxbjBv1rFv4cNXuLNqnvAoGP5pa3zrEY2q2KkZaKgzhshih4oBeL9ZVbFxBHsx9",
  "key27": "4QMNfViEGBSnzFPaST1LdtVXYKArSH84ayqMjyu78jtZHdsxDjGa4eFGeNutxTJSxTPTxtCw5MUTMd8fAZop5WKs",
  "key28": "5X2nR8v2UMjmTZ9gowj22p4XXaPaGVazReVp6J8U2F11fsNS7Q6YgXHH2NMuEwMYRdGfg6CqndUszj2JKPfXg3B8",
  "key29": "51yDDTy62L99VsVC4trJ5Gq3DmfpmpstFbymvrYdT3YR6f1GNqtsvY4Ghgqfx4Dnwpyrz8t5SN1k4rB4FVAuuZ5P",
  "key30": "3yHYcLevopy4PKfQPP79HVduirGsRP8RJTkgVnGqWz9aSKon1zE4TyHphuxHxindnwszDZdxJoupwcbx3o7nFkGo",
  "key31": "3FwQZYXcP7VhsM9FqKXGFjQG83Nbjb8zHjrUmofoJWYTT144GFdtAkoYA2uVfPCp4HF4wCzipfrLRY4ho4vS4C9V",
  "key32": "3WjfMDCiZwmoqootz2GMQQZxMUVi5wriE4q5ouBkwCDHtc31HdPxq7TLZ4PQWNWvQgwVtmNg9LwZTAh4MUMfNYMF",
  "key33": "LJfd7pFqgsXSewXQyccmhre6xRTixR7G6sacrxjhBzs51eX77cwfYstS6kGBVSQY24AjwmzKBnin6q8VFpxtUjm",
  "key34": "4wrtKBVo6gcZtz4h1gvbfxR8xxVM4oYdpRqZn97s8TEvYbD5zfGYaZtjfEERSaGamcCRj9FyEk1GzunNboLvYZxh",
  "key35": "5CwqYbffN1NYHQa4MrpAB949tRPkFwU7PLF7tJsp1SqiargVdHCod4PinbPjJKbWcdJdGQmNTrFt9GaGWzziABUG",
  "key36": "4ASywpaPLQkgtH38t78Ci1xLAfCmwD97bbzUVhyJY1possQADBog9M7YJWyEg3qEkwkDWPzBSMKvKFeCA6TsXJN",
  "key37": "39opZNJE5hfnFKicgwBgaVMwkPda4S5nVowh8g2dNsAc3psdghFfvaX78nGZdr55VXrE71aU3wCQijeAH98Wn4gF",
  "key38": "65hQTfAuRbig8gsRq9QpMFPcGYEYEnec221Aj5EXjMs4yeVpJCUu8icamduyU6ribTVLynPF8nKkfGCw6bZjNSV1",
  "key39": "4S5WRhGcqc5iSEpdYj64YUSLneHU12NXHJPDWgPMTiuqLFfCPgYtRxmQhGWTJxiQnpfJGBucJGPL93qaQK7Nfmjb",
  "key40": "4shHj5uySggj3N7TdNmAqxxdmknNoEbG264afnXckMG3vZrCuQNmsSc6jPLY9eZEoz2oMzF1sj3HDDtt8aQQTthZ",
  "key41": "5TJNk3jFDBZHBHmfnrnsZEDe6n9n7t8VVgUpGG3XfsKL6pcJMGm7vDSGsUM8BNgbBGsWS4evhDHVzhay6o4b59SC",
  "key42": "5PqJnWDjqf2w8LC19pRo7AuMrEzoaexhvyPNwVgeuhuFsSgfq7Sc9NaMqDiGomqh1mDDJpY6MEVipcr38qZGsU9C"
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
