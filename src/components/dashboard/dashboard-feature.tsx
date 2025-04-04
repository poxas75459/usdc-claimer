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
    "4fA3zJn88jZuDwsE23EWp7Fp1vPMRP3NHELJx8zYutbZgNzDNnrU52xVz8xJ8bVaCJNN3FMZQFAKqpLpWBCykfoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1WBFCCBhVBtDjcRUtj2iLRfKZ19pzyRR1qXiTEc4kUWHBE3FViiWN5UFq6ex14tbYzZ4RAzckD7Nr9LvjeX9DU1",
  "key1": "5BJjHzg5PmmnRnyiSdQiCvRFL51GgJYjMwafemgzcuvMwX4ZSgdoLdbJNwBdfcUXEY1rRBEYbd9hGUrwfwa4Q2T3",
  "key2": "2qB7UxnL1pVwnGemkNRfE9qJZMJ9bp1bX36bGcbMNjF352Wj27fwz114U8rBJehfwedi4rWw1pbmbht5sVyyCBwp",
  "key3": "37L9TbuBjqnHTbgJVoYUoo4WWs79ZVaKEM9KxxkzCL7hknegmZHHkUDjEMnYdyWmfjT5SXJyrgws3hbQdpTM3f7o",
  "key4": "3poWJK3mxLWbYNwgK9CBK3ox9SLMqn4qJRiuhnrY1V29rEaijX9yqjYVrVkVaJ2R1wgT9hrfFBCZD6sQ1P3Bwtuc",
  "key5": "4Yg8LCq2YNy5cgZxxfP5jMB7X9rUyQECvLo3DjwKZS5jk59xzcR1PMmsHqkWr1nL2z5i6UkhsmmDFfE58bzAQJi7",
  "key6": "2jX5FEhzQcWNwJTBLMd6sPmyTrrWAqtzgX8QfriB78hKi4C6faGazbV7T8z5SMX17mDTb6xA1Y738bwyGTkiNW5f",
  "key7": "33FoBAnURVok7APnmegdmwhcBrLoCjzTboVPfF7GQbF5UeZ15X2V47BCccrbNeZxoMsbRdzhAkgSDfPEPnU79VZN",
  "key8": "2eTW3VH6nQNfVVnS2eEmc85dmCYE1qLn9bGNVJR7TSFzsoG7GGvcngG9XfYavhSAjZ5E3jP4RdQwGbDJgJoLrk1z",
  "key9": "2dEFUkyGT9RtxBLnrymKViqL8bsDvcokHXMX8fjDU4HxPAMfkrNnTsaqois6WVp8RHWFJknTykTwW7czEAJSeTxp",
  "key10": "5Tuw2ERUcgg966dMnTZeoFmW8o225f4kFvHV49iVLAXW43UTjfXeJYvd5jJobGmVXviY23GjjG67tAxzJVNWUijW",
  "key11": "5KFuV8K4QXZ686TRRy6xhnffrL8JEYi8snxZAEkfzcfnX1mFstpBhp6SYefxToWHsaQovYuYkeb9ndPviYch918t",
  "key12": "324MrjhgQM66vrbbzVLif75dTjdeo2SFwQgtRHrTMK91VtYzCVUsVyKaQBVcDbG5svn1tz25xPpZfTP6apNY28mp",
  "key13": "2SRJcgFgoeyJKe9gtLuLwcCvrcjWUR3vFjnWNVU89roBxMaax5UyMNLmisSmHfGaoUXUeuQfPqWPZozLKibown9t",
  "key14": "2MTky67ogsvMRFbK46gLytZ3oCtuUmupkxQBZ2b1uDYJsjfP9CXAJugLHxhSvteqJ6PEFCfi5LpEbjasbHohtf54",
  "key15": "J8LdFDSDY5YeN8yrWaYhMRSqt2MRS3t8cg6spwgi6pPvsk3SzrEGtDnhrndQPYVPhn2TNLk2b8wJ83UWvAfc4gK",
  "key16": "4P2Wc4ifNnz6SNYtsUZCAWReE9DaaVCHqgsRiZJm2ZVjKHEg7v4EY68cuynRjSVDS4Bq7odkNnvCyBZTRALFhFcw",
  "key17": "2c4mm4ui19Pv3YEBZC4mVN3a2HSPCpiNsjQNcYeMyUHUiNmm4LBDX3JCq7Zg2JAAf2psWtbkaTRikLDskg8Dwui",
  "key18": "i9ujPb6p1VqhNF8TVAhUhkVJCsmY1K8jtTWdNVakgXLhkA4vtAofzXW3REUW7vdfcnScQo6NM8U5932S1dLf2en",
  "key19": "3SSMChXASQXVBuKCDL8FCBA7UFpsDCCxEtCCiMZbb5pqKk3sNJJDxYdAsC1uDuCucZivTCCPkCRx4VLvRZZGNtXw",
  "key20": "2MM2WWboVoSBFskL1pqfNEBrapvtNdoKubLwYCuh2QbZcykJnewHHcqcTVodBP9UkvMVz5WScAF2nUTkxEJ8nD2n",
  "key21": "3ZQZr1zK9sL1fUsZSMyKQ7trxbEsst1bg92iRAxeLr1BVwEnJMbCfryBjSSiNjPbrniX6DidVoTrgtE1t6QJ7GbB",
  "key22": "2QQvawdvECeExnmhf4Acd7SnQ9Bpy8dt1bRPgpmzK1wqfvTsMXxakRQ6JjCQX9jBMKTWQK66JRKc5wPAVP4DM8x9",
  "key23": "26NwC7ciMKrx8dYGBReMjYnMiAbx1h7wjCmcTwWgmhnNHaqbVLqLghJPk5DPadeh9RCiuUEgNvi9R1P5CAJeAfqn",
  "key24": "5Qvwx9o36F88JtHyCUhieVxHd4bsuufD1RWawWaTDA9tJFGMMuJUzJ5wjTKBMBxUSbTSZDMim5bGr7FPGtzqs1BN",
  "key25": "39MnvYo14kGKQyqg4WVPnS17Lmv4Puupff2quSPnwTeFasPwK8WeMvLaExJFp5MnuHTWoyB7Q38CueUZLX6aUx2S",
  "key26": "4xfcyGdqj3QbZ4J3zkCZNmzdTjzeuCZF6qpRSYZUbHSLoZwqeL6P54aBQeW3GV6BvpfNbMbPbVQeWWNpWV8kGqYY",
  "key27": "3WwcRGp6xiygxLeqJbgqEw67rkNvTrNkMPymFeoUNYcZg7rHH9QxkvrZ3LXkHrkVkhaS9an9GemaW9jxWKMi6ZEM",
  "key28": "2YyqAd6CzdnNw7QvgnVFsarx8ZL1T9bN2HyaYjUWedgHjRY5bKqd8YrpYQGQXiboe7ybskf9TiLDzKP3FMDStPNz",
  "key29": "4nyF8UgCva4mrXCNLzxeWYKUaGSYWaeaQFcqeiAenNsDS35BUHJ7Ko645s6aAx24iKhTuiQSSo29JMNAkzAD2jCV",
  "key30": "2fP871kS6EuDJiqU5isviZH3XVtdmBci6qLP9Hk1LYeyaZiyUtDZurNHPWMABR4S4BqRABoGNNEvwJMEBV4ZB4Zw",
  "key31": "4AerKvCoAGChoqjRSH5r3NmSM24FpBL8MigFqNTnC6zjgXzmCNgWZEx9hAfKvmnUnwgRfGm14Cf8ahbd4nxg32Ky",
  "key32": "3i3G3FUeVBC9G45f92zU8StZ9acVP1G82SU7XMV7kbhVfnu7rXRSqsw31v17mL3S77etb4bb7DN1HbJU3VQsa6qi",
  "key33": "2gpeszKEVMTcjV7oZq1SPebGNmnaqEMH6a1yDTS2vWKoXoovCQQ5h3kxiHGayBjpfvnagSXCYsLBHFvYxfo2Qj3G",
  "key34": "4SPAF3FKXGsQgtY29DANsyqw2r5oAP7XiRG1woM9rbspXaQFuyjKejZwgXpKUpjZC6ZoyJ2StaBzHNmaqksAft5M",
  "key35": "2gudPkkhNs93n2N2KWocZwQFcmwneNgpgtnqQv48CygFd2zs44NYU4834VSFYvyaUdRGiPewrVFHUR2v6q8L6LVx",
  "key36": "671TB5ZfPdosekKJvr5Mh1ZuCBFWAtCU4TRLsHbGwhw89F2iSMdqdL8Qp5EdNaB6sEsc4A1NeLokhbadknctonXm"
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
