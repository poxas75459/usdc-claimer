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
    "eyR3VzNvJTWsbA4zbPJ5vs4p5FJbEByFkiqHDSWjg28FuQr81RkYX3So1j38kbDesR2Aybnf69eGRSweGfVXEdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVfkn6QoEuppjr7sVLjhLYvPZGxYn9sNqzS4wFnHvb9Q2WsHP1zevN6Y2s1fJ6CAT3zDbSXsYXqhSuiVY3Q3TgZ",
  "key1": "2B1zpsTUUiL8JALyGkNAt1fF1n7Gp6Xc9qe63WCkaC3frVsQHtY268ejsAeU9KKfijXEWH6Ym2tH6q2RHB8yaqpf",
  "key2": "2LvpuK58Yb7z9tGPcaQ7JLQQUmfK3aRpwKJ514fwwCcg4qC6dvjwXo8AjNNEvMFUU8ppe6pSbApUqgwVeP4QKGTq",
  "key3": "4vno798CVi4DiuvC7Ln8zaWrZfPbv6K3Z7zQR9WQKTkv12phFiXuQK8RRNhVqyeXuzGkeb5vjPoejN62Xpzg9tPZ",
  "key4": "3P7HkzHgKRibcbRaaneDF8oe9GM4QBVQovwyqynNV3cAtzquAzS4MRiqWKsi7hJfTuozkbp6Nry7UCuQnxw9Dkhc",
  "key5": "5L7KyNDzDA9WprcX3JAiQMuwCbmCL8aXTNLLxJSrE2mjBWvXMs5P5tTpFVzS3K2TC9XTTYFPaakmopt1ZGFC83Mn",
  "key6": "3vEJUtYQqo7DP8qcFGombZW1jHoTmm13WsfS7LchWkgbLPLyy5K8d7BrDveRQfmv9kdvrZohFdN3v3kiVTaF4DZC",
  "key7": "3LSADYo59fhhYX14wn8f57nABjj7rx8ph2RUDDeVcG4vPNeMjXyjkpaWgr5MxQfXV8Rf2e9Yt1NKfZkL5H9BC85t",
  "key8": "p35vtG4w73yQ9ozdZKzd5K1eisRS2qpdYLConzENDcqM9hrFKEYJoyjFFtikCuJGTHUpu5FUvpAVakcDurWJ68m",
  "key9": "32o3ARWy1ELUKadjihUs4MbJ9kCEdcuVHxx1oWoaMPAyGV59RAUgEMT7k98J9sopejuVZRa2aEh9kLBn6P4eboAd",
  "key10": "rt1R9dRudBeMHR9Bg3EW9V7Mb31h3ABcKCDiRrNzxJh42bdTCJkuu7RUKyATZ8aT231ZzdndPoohr1DLCyfWPrU",
  "key11": "4jAB9sEZwgXYVfYJScvVuyHxYwyczTDjDhmT9sJmDfCw7YxcxHNetjMyTqCVbiKok28Rcm56KiCkRbVhkoUsXvoE",
  "key12": "4a9najMfXwapb4oyLasN1UgbJExj3Hnjg8dW3FDVu1XJNumwkGpiam2hywyeR3wJ4CDCzHhAhQYzGVAp4GCS9smq",
  "key13": "3dLm5uwmpyvpAv6gZARw44YMpZFnfaLeGim7itG28bDyv38A573R9fMVjfLDT2ytRpKXDhbYVPUzQgRMeDr8zH8p",
  "key14": "4LkrfecivRjXFhKw11xT9cL5wAr68g5xKoZ5ev7XYLtQcFLTPWrvjjHymXLPGeVL4HwE9SPHmvs66qMLZqp7kQet",
  "key15": "2gR4vjpgqhsrjzcTTxrT72jbx3pJrCf5Pbpc2GasQDmgoNAy99VqxpCRDAynk6dHZkx4uuaxF3mCkURgF9zEDrVE",
  "key16": "2Qa3DsuKYTmhE6otDWXetYRuoMV3YZb4uyFtVfYkgQpbKtpNKBJs3RAutzdx1ixuNYZpP5GpDkBTzKhraxcQyDJJ",
  "key17": "623UPiaqc5tsry9QGvySCwSc21ZRi9NQWY5rn7agxbEdoph99sxCBJF7BQpbuf1duZHCA2BcK2r4VTop3HGBbA72",
  "key18": "3TiJjHfeEvGJy41PMHjQVydb7ch94TBrZcyoMtEpem3eQ1qY53RjBSkwq8HvPcj4URcmCJk1WL1swqMHHJaN9EPS",
  "key19": "5k1vDighe7iE19DTe5zDq7E8JA6foco3uhZoNsXzk7Rung1THEAuEamYsDRCAFRDodTMHkcRJk3V4yAvWRKusJ8j",
  "key20": "56bJBaV2aXcXkBKe6kYxgdQktu1XFuzxk1FXBPCHQdWbEKw5Cr44xUKn3LjGe3G4vovXaMoE4cpAfeZVCSWQgQUW",
  "key21": "25J9sr9e4UfUQVWpEDbYDTMPm4w5y42ruHf9Tk4ucBo2VTK17ZeVjNMsKFyrS6VSy6DNsXQNogGpVcjhZ1V3ncxW",
  "key22": "3VmGV8uAsrfjdUHr5ib55Ub49dnHaijFeyndpra3Bo5apSbR5eUvznfpNJVzDbRkW9BmXG6oeLNhCXLvqnYypvdL",
  "key23": "23qJdWrAadgyGAtnQc5ewEMzdzh9DVeeDgq6twPxxvwEuVcz2a7dtyRQEf1YBsfTzpvmnZhKdnmmDx2yB89YPzBh",
  "key24": "4GgzUXSzd3cPK2XXRxS9F7SFgRaSnBWnn78FybdAcwv7qHmwuuUc1sJRZrLEmGzsz5iM1tRmojdkGXWjYmt1WB4P",
  "key25": "5apYvQGfW6EBFs2urDyKWEbpaqwFabuPyrvLRRpGB9dWL5jrbWHKKEchQrmXCtAja7nQEoS4xzpCWgcS2oZk3pwC",
  "key26": "5QSTpKxgeknJZuY1gkBaNYkNSP1WooA8BA3CGnfQ4ZZW5XgEYnAAKMZHpDRGzrukzNNnQMMZ4bvK8baqXfe7WNxo",
  "key27": "4Vs6PdSwRhL2ti4Addh4ZAd16vVphPZ8w921F8mrE7ek4TktpCjtdVg5p84o4Ud8BG3tp99exPbw7aNdFomGG1Zt",
  "key28": "4YrbwwsVMwY4h5ACCEK1aGn8SVrXQ7EpJbXWY7D9Kycs5QC8pTTSaHCQDdKLyvjnfhxDdqok5TsY4JsnhMBJsy3W",
  "key29": "5Y2vooY9JAaEmpoRXc76ujrHsB81qbRrXr48L4bWyAiCUkLU1wBUaw9aBmwtKAR1pR6Z3JfvvMUvY6Z12LQKccj1",
  "key30": "5mH6dceSh1ydtAvu6v9vp4TZNfHm7dviEh1W6YKEtBe9kf1d4qKLZtUMYRbnbpMTMjjCYSyjV69w1VeEzJZQ1KEz",
  "key31": "677NERwzmNq6WHd1QDjcykHpfQUUgjvc45jbg6Vimq49pAy2GJkcMcdsrmw7GdoMgkER7E2QuVhkunqgQhggaJN3",
  "key32": "4gWvCsognnJtL7bshWWagYhRXwZ2ASqQdsGbpMTMPsQWV3eRtZJ4YdQebBeWo9zyo3eeAP22fp6DKKmoogQBSYA5",
  "key33": "ss7QuL8mmitSymAxMTiP9DksbVLUwnf2JuEB7ueXKRU3pNry37Q8JZVcRgFczJUwHnkwotUrSyAoLmXXGhKq6gN",
  "key34": "3PjxVgJL6vg9qof429gCrbet7ArKg2MDWD9zdqdN3PhxCff4yi2WN5iMgiHFC1goFAWWquARbQ93bpyNS4YLQRVt",
  "key35": "34pSnFQG3acNdV1zTJauvdCs2KnVDBdrPnAmjZVraFihWbh3He7YnH5EzXw4vercrvFB5dSWvcuYffnCmF2qpZu7",
  "key36": "3cDzC9qqzQ79NXQJJP9XAmjEmGuwuuPwoyxWzD7sWktnXynewCjgSK321pSqQ4kx7K7tr67DsmZQyNP8qqdayZaJ",
  "key37": "8TqP9GabYnEVwhLEwMWXHtMDaR91FXGwyrPeFYxSnEi3Y4LhwViH7NxifL3dcCmKvs3V8mm5bE7vHDdiNHqUVVK",
  "key38": "5Mei16qqCSR6uogm5SitTMXU1EN7YEgCfvGgZf5bUjkxcq5gYpcAVgmKJqNoCQAD7qB93ie7diXL5d84ndwE64eb",
  "key39": "2iRjTk7ppRjYAA6AkJSYg9JUn9hSF3RYSXy6MSkJ6LxVpAt5VsXktVC6RQsPJEz1nNyVxRr7iKBdnQSkjyD1MwH1",
  "key40": "2qawCfqPgqbakGi2myVfcgqntrNTqmp3KSAr2P5ZeM2grtuAXywhXuVZBP4yNZGutN9rVXGwqHNQkcyS6zYABRPR",
  "key41": "zBk6GVcVygboXXZrzgSoRfDjEdrEszyF1QxYBW49U3oxFjwf9XrohVqducS7hiqwReSmQM8WcDk5koBeq6y9orb",
  "key42": "3zLfdQK5GCJqz6JwwLjB5FPZ8XbjZpUMSPTRbqxrxj8QoenBQgeURjqitXsPkeJ8XVneU6LY1yzD3ad5wq8BrGV2",
  "key43": "64iiLYRsBihQvqDjZfstjSYWFEKAt4x1dVjFmqPejQQ39VtfyWdPeCTN9NPjZhH3tKhqY3iPgMwJrvZanEwutwsv",
  "key44": "jDGUUNXnRJR2qKnPeLtez1R9PgyoPxf9WqSSV4aHQzoLzm1JmvPBmMLi7JgwcEiLHHt3tFEGe2f8kkUDVGNUHSB",
  "key45": "5fLs5no23ptvFghvyMofbTYR4MokwkMeXEtrvGrTJsEifvFqfEwejwdnXUNtTHM4hDurHz83CiDTLoUMiekCKSbL",
  "key46": "3hLDHEmmGncr7A3h7dHw9wXWccYLmH9RfjiQPwgEziHNAjZ5EMs9XNJUXDWBWMW7t7LTxdxVVHF75P1wf6ckfY1V",
  "key47": "3aiZVMBRwnVDcU9ZeiedNTXBNK3BWZNb8PG6XDrANHA9Kg1nkRau5GTcFtfjUp4JhwmZJcxFxFcekkKjyWeP2RmX",
  "key48": "2xSDPkVRucNL6QCf9btDBi5WELnELxe64g2qySKdMs8HZ2Ti1J2jS5VSUxBVdf25AG9jKvFZCUQXoLt2zAEJbbzZ"
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
