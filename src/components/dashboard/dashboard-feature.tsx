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
    "QYW3Msxa5xsUHNsd7zaG5sxEaE3gXeKyxWzNZ4dLTKpvnfn8cHNjGAgv5h1xsaUFQP7PXDR3BmNyPontwoHhuB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DPTc8AdVnJciR6sdBU1fiofsAoFCw6NcEo1BwszaaKTzFTTtCUbzRLQ7idbLEH5RuzgAVGfTHsFo6RboqWCLsbY",
  "key1": "3sKXsdDUxmcyb7UEbc1htPGBFU9iFUS67fvWnWnkfhTqBUnhdHKdbLUoWCtZD2SP1ixkVnsJwi1QqwM1EJnAg8js",
  "key2": "3km4tA8LcVqNa1kRYnHX3Uus6KjMdL6WNbrXEQ6HGb68uw6QrnscfLQRF1Ps48trsoroksFxMFc4Db9QTuy6ZGnS",
  "key3": "SLBhUruugm1Dp59yswbcC3sQWcZT2H12ZHwmYGww1YzfxzUuiStY435dxqamenV5QC8MSy8inSM7kMxQDVfTMi9",
  "key4": "2ehPkUw9AavFoF8EAjGreAMgjvgGKHL81ffeRBdpWHmLcFtjjpxsDwV6ZAGdHtC68GFeNhewQ2AZAq3sTDsLSXo3",
  "key5": "4ZoGgbBrZwZn9jtY4XZ1X2YK95eays6aqx881oqwPpCuuipnnBsdt178zpy6XdUPYtapoyqTaLUkPzTYnPYFAWeT",
  "key6": "2vXCH4kPY86r6QBPfgQ1GjpfVXtxnYp1nMPoogsmZ6sQ3SEa9xj4sYHdDHcnkTuEsR2vheGaV13MLeFnqtZiXfAy",
  "key7": "27RVDe3SRxabEfN5SAY7dFv2chtqHMiUcWMjs3d7jqhjra27fdpMuN3d6y8fjkHFWckC7LFtZsDaCknZtrCEB67x",
  "key8": "z4qUm9pg5PFv1gYQYjA6ES32neeDQ82wgR8VhZkoPccrDoJZSmYcAj3rjf8awFcAGRRFHY2X5hSpheUBCypc4kY",
  "key9": "4pwwp4yEN7FKwgkLMGDopAmHntWnQhbiYQW3yBS8BQvdSooPfEZ2xJh8XieMEbFESHRUkssjx2eeDHU3NLoH5fhh",
  "key10": "5EhGzK7TCLqVrJBHmdQsALZGDNBoUR9jRJ2w5JV9H4GRbQZp6c9Labj9p4crJ48jFBecMJHUPk2ypqxGQC22t3o",
  "key11": "4opXJb3RbdfWdFj83hnY4jWHnspZEDKtLgrmyx56z88THzqvhhm9iPMhETkkR1qRTjEfY9HYYckwetiRS6cFnQvH",
  "key12": "3W3s2SfHxV3tPhNHcw9tievAaPKR2YbipnesH7TGDwbq88PhwtrJqairk7kmEXQyJCiWHSq1BpQeJVKZp8aF6k4X",
  "key13": "qALmjhsdSiQEtAB3XtrUCSfTA3LZseqBCycWwC2Nw9Gj9C8QEF1ghCeDwdydgAArbQ6LVrb8SfHmXtXoVUXckxJ",
  "key14": "4SyTFSme9exLmbrBApBSS364KUARPspU7AvAn8VAocFe3wrzTv1EU8WxUg6Y169CKFsP1uJewe7LjuUPUvoCBTiB",
  "key15": "wfer6F3PiM78DpBH8Jcz27isZn8ty72Hxi1b1UjvFEZA3fto7xfvvhQGyAs2irFUyNWE1sYJqvo3hmmJ6KnzPyh",
  "key16": "5PHtk5Vu3oWDWByGdEonMPZpWLkRNGHveLJx2wxTyqrxYN3gWyY4VvasEVxx2yNcqAFnioViCT6wS5ejaM3GRH2A",
  "key17": "4V2AaFU7Nh8YhCGJcVmYCXSaXdMfeG5umLvfxPMWEtZkn1CELBkbmWB2Wu2STQAhHjGhZJYcstwZNFuPYL3acipe",
  "key18": "jGjmfLCCcEPiqZ77pErnrRxAyAo972QeXdMmswH44RXLnsneUkZvcvsXuKAixoSJ2PfUhLbuJ46JHgfQastH41E",
  "key19": "5q4hyKp1GBcbFiS2xrDeQ4FxBuM3LBHvxAXDmaJJD2RPVU4bxG3pcep4NYSEFSQAEmJHEfHwoRJyJrb3P8jaRh89",
  "key20": "47WrmTHeDevXMkcfiDFdxhN6uDBFGamWhHWMatCBoTYoh76NmZKBSfrfrmyP36ioyS4dfB7hBbKMz6MDHEh4Qzq3",
  "key21": "2GgifrqWwyCnzwpxsULWp6RUURpkRrSpPWFeu6GFoXgf6pBYnYF4LCtqskgvxtzAxepwchE3WZ87QvjEPgsHgW3f",
  "key22": "5NRwb9yo1JpdV97YEXhVCKa2LAujMfE1b8zu3dPaN2KJQUnjqCZEVfqaaqtzexWEUNDCVBD1uHPBaqC3deFvr4y9",
  "key23": "5ejfKKQHMxgW1n1YnaCWhhgsRWfRCnuYphA7Nqee2n4uPVKYJQbD56bmUXDGBxGjxYrQtsjKCF1sRS6xGEYJQC2p",
  "key24": "4SWTem56QXz8V4i92hDNUkwKo3edP8CvepPMyXP3G536YEQYeTu47jxjvVRR42vbvRvGMu5knpgqifQitT3DVPFd",
  "key25": "3PsXsT7Rq2xQ7igCSJGAvq3zWeRJsJQvwKUqug9ZsU5TyGUbUPDCHqNNYEBAyGkuhWiJP7KH64sacPEenRtVVsza",
  "key26": "3Pej5BiPAiyEzgvggV5co8J3DjNV823CwL9jkfW4WfqVcgPHsVxkXAj2qDoGLoV4zHwJcsXyx4Zx9Ypo19xVGciX",
  "key27": "3sDxnfsx5Pm7YLWH4cLV24XkVE441rcqgnEtbK2cA9DjPcjkmCKKBzQmjv47n2vph1Fpo1EJUVUY3swWV1BbZSuJ",
  "key28": "5Xcz97rpkA6irt7qAJDKYL4CBNguTiqdYLAfuTrsVYTc9GDUTRbqyL5UxQKnwWTzqhXATnRe8rkvppWcdLKh7WH5",
  "key29": "2kG2w3pFkrpvjheLLgnjtTmFfMCYuFJjupUGj3gYsjJejTdqeSpSV8DAqE6oydD9vtsAkiFw4ptFrGHjrAqDUEKX",
  "key30": "5VyDyDei1ypezNdsJhdDJBY9QTGahNyC3pfGT6vpuZWYisp94L3jYr7YULuZexMyQ57SERWekjhdxZFufyzMNqje",
  "key31": "2EQCRCga53QQUFZeeTquNfJrmkFLXyTMAFfuez1niuiSjoNpYTLj9d1sBdvyb9VbopJZj83dQBha32NndGwA26qp",
  "key32": "2yYqwquJxAyi96NmfdtTVCMtfMtCxoz5NwdWyhQGfMgb5iituRuj1XxEpHqUysbCXpnDKDmTYC6K4E9nFxdV5obV",
  "key33": "Lo8jGmXdMbxH2KepMMVA1wHd2ukWpMdPdC4rcfKFNmydARZNrEuxpmvVcxiyUUFS69t62MAyemfWqYeLaoNU2zj",
  "key34": "zmRLxdJCHw1PKUr49qjuFZVa21brWbHGQAn46mXHrawTjHaFcwKcUgaHyCJhkEUMRYA6KvrQQD27zvJZdKAfVSd",
  "key35": "5hHJ4GuZK1Qvb1P5d7Cjyy57rXx9E4WqJV9MyxMrTC2BCAQgdhTcLwUohJeyQruJX1KS8MFev33hCLptC6ygcDiT",
  "key36": "4jwU9Qeq7DDxjjdjBHiR6Ay8KC9czoqvh4CzzfTxWgu6ysK2vna6AgWUTeQ77q7wENLu8jRtWpCtwxnRXLiMz5ZJ",
  "key37": "5NrCPVz7m1t8syNJ8LjAFpg4mz7f96cpWxqtchq9RRyj5UKibBocraZhGHDke1i2GD5QAHA3Nbn3gBBk6QFWspj1",
  "key38": "5hye2GFf8DQqREfjGqf4LWqZ8sjk3QmfkyQTHuE8ps1LLhvgzY7kxQLSCAJsAgsMHyJZzLn9RN96Xiz7hUxUom58",
  "key39": "3pfdTM14dxtwx18FPfMBgVjMBiGiAwDiRHoKTsdV9vT8qBc8MDrtYXd5uCDEUCFhXdds5Qzy5HBZrgFd125yCXF9"
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
