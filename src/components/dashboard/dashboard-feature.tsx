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
    "5mgeeGJLcNuMbuoU2e3kX3WQxygXRgNAen4enNqxx7z7hzQELCobaBNVwUuiEAdJpGPN1tbDFWwXjzuMEnbHYci8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRFGbJSDYuFnFdmfh4P83nvZEYduidmUAzu3Hzqu6XQUNFWU4u4yUUfMFoNaE3hGHyMj3GydhM84WGjPXxWHQou",
  "key1": "5dSj4EBo1dQiLXQTcn82qdtCL4pQFB83ihuPRHMibzQrEYKALrLYWxuNm76DTwAz2NzBLGVw2UvF66PwQVVms3DP",
  "key2": "4sRteP4KE8njcLD7t8aFaTAfkB4frcusHeKf5VBLsBYvu3stxPyi4crSNeJFUgnU5xEpo9LVmYXAeyeZwkHJ5T1L",
  "key3": "25joFCYaPEKrDk5o7SeAiH6M2YeLS9A32xk6KKCQouFY98iB3zi3aKPN56ZzNHLqy7gBnSaf1r9Sx2KNTvh28ee1",
  "key4": "5RPba3SDxHuKBkXp54uqv1HVuB58JpKP71DymHef87jhHdPyhUKhf7pGTezPBQeUSYpoxLNJEkiU5oWUoiVjQWVC",
  "key5": "AN9hgLVynbcRfJjSu1DUsqFLoxtvFnqRKm8wKGLAEvxyFSdDwsT6L5StWCjYAkoe7ZkBuTR7TQkuVsRYz1ozSJ1",
  "key6": "37XwUnxRBPasUFg3tiZF6riR9m5p1LLg3BvzpWxtsHJLSFWD8uddu9rQAxzq3a9bFatm9Qor6QR7GRfceHpmDCYY",
  "key7": "2XmsLkLYjgEr1ntegEUp8ZpGvE9PrgZTuPN518J9Ac13YkE2SJ7xZekJuJCJ7o48ejkVkZJKcU1M1gq5W3XUTMXb",
  "key8": "5Ex4pVQvibKEMQpmuD9DzLLVYUCCsG7ve5MYbT5tZ8VDw4PE1mQdSbUpQGnF3nLf9SUpEPXSGmvJNM5V5GEiMmV",
  "key9": "wbFRrax7GyQCAwkXwSHejUM2byLLxCpGFrdQQyPeE2ucNKPdHMK5AoXubLBifzRFJ6QND4T73nTt2af2yLRvKES",
  "key10": "51WME4Zm7vY2oHwmZ5dyjteTnt4FhZ625hu8TY3zxHpqHsEUoXgSNwW5AhiZJd9EuQ7tf9u1fdfpBkJc8Hd9qJfz",
  "key11": "4CvrVrfNzKW6y9oJZgpN6eKsMbyU4VptwTmbVY5pFadrFS44uWm8uw4Nequy2mo6zaGYb9n2y7MpeFJrdAQ31Emv",
  "key12": "43EnbRGQWDSwbt5U46C2hmUcsJFQXGfibCcUbsAmdriGbJjNaGVxhuxCs9YtwReCmrsRW2NLusk4GgmXBBwQ2kft",
  "key13": "4ovc9dEBpfa4S3mxmwjtB3qK6dHeVqRApA7WP8h9s1nN3xEyCXcTotMDzhPJY2x9zKW37nQvm5DAodUY2bwJsBQo",
  "key14": "2aLxN3VigHjtjJJP22Qmh3JJiv3dLTNQCdjDhFGRC6924G1hxtKsJScXNsApxzADk9aujrFu9KaFqa3Kwe3X92av",
  "key15": "3pdVNagVL982Zav3FwG5v4dFcKF3CXGaTqvicDgXrfhCceLgJK5T9gPm9sTsYd433EgsD2ZPXaDTo9N8FnPQgdmX",
  "key16": "2wzygy68d7KEVFgD8Hq9sRPjtNNxQQqnHRBqD3AUmKXUwHjPWDZeKzhPYsoBNC9VZmufNzsRkmbbvifSgExNGFja",
  "key17": "zMSkERtS9As5jLVAB7Ysu4Wp3BuQSgWip2kNpYdCGpLVXXdVrfEBwggRPj8nWpVNhBGa6s24XyXRS7PWMTtpEQr",
  "key18": "2svKoYhYUge3nsisEFtyQ6ukNCeR2koxcyaeiadAaoeTDxRkFsHxjCWTcUnSttyhkNKN7DpaRcufNb2smHaxFcPx",
  "key19": "4R225amrjLF4PuLaDwwmfJMckMjbamsG75nsD2pnQrKgGzgeWPpeiL7qYsUn4XoVppKDDis7TtCpdJv8KXRFx1cJ",
  "key20": "3J1JjVQPJJNnfDLQ7GuhaeLrjJFjWTEJK3SkvzSbd6cpq7BaieGba6osFsRF5fezc2TxWJyKmWbnJLLAcPsQ9X7Z",
  "key21": "61NQjuP5QoztxvGowYR6EVBjF6o1iRi4YVY3L2SCcmRJBrMTzuHZxTMpYtdmFzYxd7N6JVcfxTe8xteaCvhijdw6",
  "key22": "3tGFjBdx11TrqMtXqyzTdCNkBsQLiAin7FEULxcrtxyUhC7jHYS1bGXymRPm3WUNK6FVBrzKbtozjF6niDd7p7jJ",
  "key23": "66z11KBXQukVXnGqqyKNSyuNCf8Sbe3yiC5DFHnHY9Hym9tieX8qM7hHdZGJpikBocGTSjnpkpALhB3mveHG7Gpm",
  "key24": "4cYs6UnGNkLfAvAcnDiN1iiPyRXnCnKpKoH4W3cLhq2932iBJwBhj3QxbiMXtUVzfnLvmk7NXZbySDxceLrgGdCX",
  "key25": "5dvE1gdHhWoJqj4FmWycxN458KzePxtv7xfoGqHhUfXBbafH7e4hBZwnBrYt7VYxvHSCZNYAfxPUqFmHvJ2cJBfG",
  "key26": "5ffTHrmMQGmM94p8dMGgE29FaPmWjPcRLzcFiFfV6JkFYL4m3RRpBQQmNHhzEABjkuy8YWsR6g2vyNcZy8GyBL5w",
  "key27": "2MJuSTBmTzSbKQazMsuNBnQCU5C7KRY6BDLRuLnt2DuwiRp6ujSwwdWWk4eLmaxxD65tFbmdpHzjvPw7f27iefCG",
  "key28": "4A9cfep49oiLUiHveL8cGvFHQqXqjiJwoeDwVNwjt1Dm9GfGZeadkXsntMLiNXTkQF3NtgshumwPJAaczvuqxVfH",
  "key29": "UddN4ruCEqMNyivNbZZfSFyDqWoddYgtTYPPDUZpCQWPLyTkG5CQb44w4fmpCsG8UutTQtd1Q7yKQWo9fPeJhYk",
  "key30": "4pWZxqYQZNcz46ibHuaa14kX11L3ENQZpNN3DYjyudr73U8o82bvFQBqZRAwiacLFjkPQLJpHRMDSd42GeMASf2a",
  "key31": "3ETy8TM1eFJvzD9niWMLPNj5GWDgp4L7arx1NwcBtXQTAxmQkG1T3p2zyyTwBe7nXUYZC3sVgvsFNjgr4mBhdCfM",
  "key32": "4qbtbocnguFKzLUk7HedtiUBgNzF3fdUacgxaNABFCodDJ71U1TinKjecH9dd9dyBbjk3cztof3VJWSPseGnCeKv",
  "key33": "gvoQWBmngkforQ388t8hfZf6NR3kfYjSASEta7NAotHHz3CFmUiLWc6DVvkhDoHYwsWvFa5ZPFwCRYawLFqDXvx",
  "key34": "3AbMpwsvLNvJ8MCtJcYaX6YnnBs6Ga5ikZf6gHdVNsENeQjBNC2fJK8nDK8YB6TTnvUXZb9p6xvJs9XsNWDrQWx8",
  "key35": "2T8iCktn1LB7KwwVrCB2MGfKiJ8i4mGwDjA3QKhJtSAUWGdyBDKAMKT4gC5nEmXqDj1bMTsdAVbL7ZH4QX57x8jU",
  "key36": "3MHMRSktrV8tLVGdYMDrqEYAxCur1YWhkHm65SiaWB4dfLTUTHEaZwDFpUXYkxiD2gQxtqKn1ZNkf1MQweW7cy6m",
  "key37": "6V96Fxf1ANkyogXbdJSChwH9KqTCBf4wJxnzYHyNgLmvsfpSTveorUeCvmVmFhK87Zf5YF1jrthFADYMQC8fm7z",
  "key38": "3JddHkxfJNbsnzGFecwnWCu6w3DgEUDndqC9MxSVTrKvtvJiTXKXi7bE74TwSgKhoXuGdRUTbSaHT83X5dBGxEPj",
  "key39": "5NuoVvXXBofPfTngVq8UEp1eDwo5fjhH8bkcPCPjS5ASj8C7WGpKn6qyPpE5zhx9yWpFDL4H2yaphFVyUG5F3RFn",
  "key40": "2uQ7zD2T5ZkyRLwV8MNBiEdocii4YjRCm6Rsxnmso1UWZu91oVShVLrnYRJ4w8Gjwf8uWmea3KUPt9uQ8qsvo7Ni",
  "key41": "2Jrp8w1jqdUyjbmxqMQriy5g6QrL5QJGdKW3Mz1yPt41H1V9B9xeVYcjPejac9p7hXJ3tqw2EkqvJhbEwpgf2gtR",
  "key42": "6wALXkLAqbXyYYbtZTNoYJZi3UMc6qE6hNirNwJLeJBgjtdBse1LciSrPnSECbXMAjb8C7FmHiAv2tsYooVwco9",
  "key43": "5Si9MifYonEo3erkCgf8uAf6Tk6uYhCJCheEpsMLCLX71Wzc9sG5pfuWh7ggDgykoCuQQ5HSGCRapCMcyxGf31dD",
  "key44": "5GD5VToqmv9WNi7grZjnV1p5ZgGfWwTuvsgFdLEJex7rkWjZ64oMsoDawK7L91CeBdgTJuc3fQJ8AyVYdB9PWu6E",
  "key45": "3qB9ZjsLX1aD88yUoSZnVrY1Ftm2rknpjjUYCTNjZZ2RqcNZJUbPawALXgXoYJNLL9HAsBkgT2rS8okEEo9EQo8C",
  "key46": "4edp8fCCm4aFNTBiu8q5ShznC43boCHb6BujcCpCGcwFPJB6wdwjTuigsHAWFRvGfTsdZxsFDVf1q3gEiCkbPPD8",
  "key47": "5cCxD3CqbRGNDPEdo5QPw1BHRU1a8dki8vbYHNWrcqidPj9UUuTk31H7bcEawUF82FhpnCknyAiPJxmRqtrRdgoW"
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
