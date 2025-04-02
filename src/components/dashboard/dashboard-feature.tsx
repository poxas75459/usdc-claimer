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
    "4p9GuEueDZi4hYHXnha1XYQJrJctcao2PRNCPjrHZJLAUrGU2rrCwEoxAyuhcB9fh3zPHivp4xKYJ7w7qMxhF2ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoiCJ9A93g6wgxugZwudaqCvMJnB4Q8FZJycPjXUv2gKVNqwd44jcu3VekhxPMsKZK5meiNshRwmQX64YPq8zE",
  "key1": "x8FbYXCP27MaNtBLk2TeWTAsWERycY6FRej1RCbZeiZANcVv9auNYAhK16CNQsVsbUMZFR77dtZWTJKRrrujzu9",
  "key2": "4JwadPzfgAb2UEEQ8vScXu3HLa8HjuKmeCGfDbMPtiP1JknzftBq96XBWyKsrr9pP44yP6TzHb6MdoGs3qLSTqWu",
  "key3": "3jiwH7wAKJGwuCUsvqUdU8EqrweZ27J7ZKcuxtZFN89ifLgeHNvBF4un6qLRGumWAv84xQmiPB6TN3X4zrzRFVv9",
  "key4": "536drCmiAu4TKumGSVz72qvAazy4jiqr2aRuSCnKA1u2AoEKnMs9tptc6QLnkC2HjdepSKatpPMqzHMUZmZmno1",
  "key5": "5bmRSAb9QSvWM5JrFc1LZ5dsxff7VVRHzCGQcZHvAF1irAfEFGHmrwD6mcKHebs5BZqtvK6Spi5dB9pf5o7nyaga",
  "key6": "4FXLZPJQ7M2dn6CtR2SGSQZa9ggZh6YiFT5N5UjRnvDB96B6u297EDGUdGzhkSps6EabUuqVZD7kvBtSrMCLxQej",
  "key7": "jftEBmURiXMLmLyVm7fnzkZfabmVC6CYjKPom8RANHENi9wuybKuFtNq14hpjXd1qZfZNY9rXERkCfGEyZ65TZM",
  "key8": "GvZwTq5KRj2UBLRzhq3GUNNTRcwPCZytVbWEYay7fLLkVWVxLBeuvLuh3yzR7va2dhyQAaWZZYLRT9yCbAE9snd",
  "key9": "2dZQV8DuftNAP6aY9FMk5H4JrAyVYqkLDsy1H2JwN3oMqfexYThvSp4NisYmpQkcQHQqj5nq3baBRouK5DHXw1nJ",
  "key10": "3Sphkz4PQyBF8rWWAsi9xomhkVFxFg1HYLNt8wpopd784cqMNU1XPwx1Dhsdi3myhfTMKrLg8JxrPmkrm19TdJ4r",
  "key11": "2os3Fe4xGmVCwe2G4uyfChVkNaXEbChKMjzwgLKmNDWrRsqAsgeA7gByphr8zExzUQp1JMmL7aoj9LHSAWm8x9Sq",
  "key12": "5EGnPeuvwa1a7HTkHmTL5VarL92Ttux3pTwnvdSCpif5Zx14akKR6MDCMwwHc4egWvubjthbgstvjSvioHHRvJA2",
  "key13": "4dY2TcPNxUEF2S9eP5zLVwy1MzbpamhDQTS4YMbUFcxohXTnhCSpdSCNr8VEAwvG5gGn9YkwhHJYkZBPXDQUU31n",
  "key14": "5wsddJZJ6CXqHgNLHhCzHRDfhSmDcDNnBfZPV2QZDajkSUWW8DJaBDw2AoQHVFUQfUU5TjA7ByzLW26E5HALwRQy",
  "key15": "NbrmG2zCCUGkTgTY6bS6wQHG1vDwv2GKUP8RXasZeDcfNoUXSnNUhSR44EUrtxpGaqBKp8fyUqrCjZavP4Tuyq4",
  "key16": "2xPEDYqy5FbQJsVfcJUjTSFPDp5ZoxNfRGNW3vzwepJd6mBQWs2ZphanK3D3VXowb2fVoqtRffM7QVw786pemQDA",
  "key17": "5YRQRZuacZ8hCnUgw6f7ooAZ5rYoTVjtSmatwzF5RcoF9597bQG2qUYy85dk5a1zneQy2djrcgXJv5MSsQSq35vb",
  "key18": "3gJSptpHtR7MRWXDNmLmD5ysEaNCWZKoiv3cTDtdBAezNMSB4FEUXfVFNvpDEaFZfzGLKQEaSZuEUHfstUjeE1u5",
  "key19": "2s9gQpQAVJ7cDCHSghdVwDsaWCLQbiE7oAbFYTYpbk3YdGMdv7H2W9k9noheqKzxQ1Atsu7TZdhMYqxLpqKJCQPP",
  "key20": "3NnRq5EcRGhZ9qTZfitCjHigoUxU7zHvRa1gZ77oQwr1okK5EwADykfavqZ57SBLQYFpkoAAkBgw4w2AnifG7cqs",
  "key21": "4TMCW2zcwnGmC8PKZur9mpPeh2MUHdoZa9JgavabJnUF5wzg4vigE3X1tkeDVPqMqie2T27CXR1iRRJAbm7caMtg",
  "key22": "2HebqLS1H9Jg867iQH3z82f44jQwCxG6jwD7SqHjotGCjk3tg4XwHnJP4kC54VUBvphUeABZXysUpUSyGN2Znbqj",
  "key23": "2XVQxwxEUDMdbP66M623R5UJTiDZ5JPKpusoDpcCSPNdtvYMdwJLFGu7KTi1XkjDMWD3zBnGNZ1xVVm8PXZMsdan",
  "key24": "25F8SCuvPLdWQ7zv8DWjnNXbZRrXAdfR2SLcN366DRecLf7PLj1TPMymNu2h9wcxE64PZydJKs2ZJP8texJYvZNx",
  "key25": "AWfPA9kahgf1wGrbhpXDjDfreygWaSTDgoTQk4vgNEp9HWs7rEYdiyYpe6m9B5LJ3i5i9X7JZsrLn625jzgjhPW",
  "key26": "4taQwPxdqE7UcNVRcKNUfpWRwjo6PHv78QoG6eCy8U6c5iqpMfVRbUpEo5usu322JEj5v4a3ohgJy5TJ7wcZqNpq",
  "key27": "2S4yRfr5MUSbgaHGTV8YNK6ufRDrAGtsQaHEmA2Dm7e1qzD5cMQmyYKrSe5HrEdxQrSsnKC5Rd4YnJwHin5Puibz",
  "key28": "2GVFtL64zNbuBjWzUevL3Ef7yFrGyj9CQs9MZN8dpXjHZ8mMDfMSQScgrkEmJNUbG9Ej7Ur41pFUytNbMYjcayiz",
  "key29": "5nMgEXUe5t2AMGP1W8fmug8mNjR1vXHYNNcvkboAfXZsVrUuXddcCCUBqDUykLrDD6Ff8ETupzC2skDZZjT624sN",
  "key30": "52ySQUGerws4c81DpWgPP14ZFNckAnyDPEsusZSzsVSGJJtrqaL9afaLgEtAQRx58X5w8kfD7FjuJPPGFLTxcvi1",
  "key31": "57SBPZqYUWTYh8nbzMVziTRYQykJoH2PqBMX1vobcxzDibDsrbXhgkCedGn1eQdfQ5LU1PWfakrho246TchpsCEE",
  "key32": "2gGdJPhJGysiW5skXdVeNjaT8pzB5vQJ91cfm8mMLwpcJhQWKVnS9FiCMM7G3MmdFUPoNwtGyMnECG1TFgMBTY39",
  "key33": "4n32D5439EMGai8UHtvNEqcgibLDUmRgUDdAtMg7ow44QFSgTSTioU3kFVWHp3d7VsWJu8LJBLE3ae2xLJ24D8nw",
  "key34": "4i2kbJwhKUaqS3Cx6ziqCmoziT8DLTx1Bt3DpxELayQqSx6Uw1C6KzPpx8mJUujp7C9Lv2r1BipSNeJ34Uy5ZbHJ",
  "key35": "5VGYHovyPPiP4gBb5hTReFECns1d1fgyBo2ipbRR9WgqE4P5XSaxLByVH1E2KRHjdtbGxJgR3YpYZSWyDzTaYLhP",
  "key36": "2ikD7qnkP1pp1Phtyw2s1DppTACVT976zftd7WdKnQwLFXxKEmGuf1TYgJuLHGZKwm6WTbunjSK7ULizdLXcyvSe",
  "key37": "34Zj3h3MVKNgAaig9ZnwAjBjTK1eftwcPJPKXm7vicHKbjCFZQjHh528BD4sANQ1fciXKbD18GpHwfas1T319uW4",
  "key38": "zs3kA9BwKSiguio6KSDFaDdpv3pgGTCWonWTPLCDXx4vAPJRexydwStstpcdy2BBBgQRbG23g5vyGxZHP9wyGMq",
  "key39": "4JRc4aTZfNze8smtKJfo93qvpD3VwagPodTQ6DP7n8k6FxtZSq4qxM3zyYNjvLERJJfL6X7ijy298j1cjKZ8NTkq",
  "key40": "3n8zsoD78QNgwpnVxn9LBhYf7AnDjxQ7i43zwTJ3jXtFUdqFcK8GetHzgfSFzou3qNGt9HcgAUNAxoz6p9kPDxgd",
  "key41": "4UWCuJvdaDbg9i9xvWsEQ3tkYzrEMmm5GfzvHXe18S3d2H3P7ryg7GfGpHsEQPUvEB1LKRDDap2Kuby14H3obXNp",
  "key42": "4U9TySpqqgxnUxqWpAeqTc5yk1tanM9HdYWKqDUm2YFG9pPSuDMhuKkdv4ZVL5i97VU4a6GNH3AYCR5F9czAYXTQ",
  "key43": "5sTmTZMkFL6mrCQfYuzMuv6jFM3bCoFPFtFPRxUS5BVNPFvF4Mgs81WkUproJJZoK9LR92jsBru1sL45LhgtTHTC",
  "key44": "63sY9WeSW1Z7utZ2vcRCVTATUf49nqcPNKZsw7n8yoyewMBp3e1EjLmeZLht4ARqgiGLUBoS3mKCyJSWw6g4npy4",
  "key45": "2JxjAAVdDsU2CSHmjkRH2Ak5Fvs7bXoDJFXnVrgL1X3vdyuiHk8FqihQquVnX84VEVeNnqkmyE63o9jUgWo7DJ4H",
  "key46": "37g36hr7hE1wXzQZ11wH8VskUhtyfG3LBVydeRYRYUrrPzc3M6WQQ6RvGZZQse21HgBSMkbLnd4YqLeLFLbAZGsG",
  "key47": "3jcNCmSiM92GkACiNRrgehErSAgWe3AWe2HDxxPEM4aGy774M8A6XPhEJF4HgzrTBgavDiP71jmLTPBtu8wX9RA9",
  "key48": "4zdC4MSnphUKfux2fD8WuV3sqbBsXDPoVJEz1gvrpcpspzUPCszajxenave1x61BCSfYuKSeT7B5pv8AEQZwjQxE"
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
