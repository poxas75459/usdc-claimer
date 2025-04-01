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
    "356Q1BYJLT8cAohcQp9cbBUUeXrtY9pkyaawFnFp112HAdhocmLkqUG2BEuA495NaFg9rifWGkQZz4Q9jLM3cPp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBVi2ov44J231uGrJ7rWwKrs2j2v1EGipwyhXNY7tvSTpj9wc8PCULv4P145kd5ifK5AZiBj81ymF6rC1jpzBTz",
  "key1": "5wdGA8Jqjzzjj14WvAdvfEkeGT4d2gQrhzv8ebQfknEZRWPEjycrQXSKUE6iR3nxRANhAjcVxR1jMuomGehQbVTA",
  "key2": "4dQWUoPkacxomWsGZNMbWpHJSwrYpv8QsgQ42G7P7a5edam3cTGXpNLgjNXEEiYCmAj7Chd4AfnUJa1VLumsg4Po",
  "key3": "2Wcwto5xpmxp2MEnDp2CQKmgzzKc9HFEtmdoWLoHRWFvvy6Cd9YNVR9LsJacY6Rv9EcbEBX2jd8u3bMTp4hqcZxC",
  "key4": "56steuEG4DHwHPkhTLVqTGRGeRzTHEP4JF4aNJCW7FiG6kc5fVKy2QGV4Nc1FPAsaEz66vprTxeVCpBrpFeCTEP7",
  "key5": "5Z8UKeqZ9Fg73WG24stDkGz5LHfDFR4L9nRc3YiWqYdhkAHaucMeykrpqLoWEE4SLqNSjftMomzSm9bUHJQLfixE",
  "key6": "4vsARCBSPwzv9QzPk56JYxqLCotL9zVGomb7mKb1DYSX6zXf72HvnDsG1nvESutWFEmR5KYSSM9txVRSzQ9js6ro",
  "key7": "dchPJkctY8zfh74EcSbSH1p1sBZYoqvJs216LcCBVFjAf1AjDkH7bpwZeqtWCyDqDPbjFg6C2mpDLiNbRVpf2RJ",
  "key8": "2xYJ4spUdr1pYfUhNnRvAjBkshJ28UvbBnJxFrcnwpexF5AyKUy6F1nDxBmQPoXKrwyDMVYCY7zgngXbRCLRnu7u",
  "key9": "4GgFiQe5oS8h972mgjikePJwuEL8yPMj9sidty3fAgQ4y4YGFGTTn4WUa8qG4bDMbrvQBQoDdKtD89hfaRQErCeX",
  "key10": "5cALL5CntWaYSsoorgD8cfRtcP2LrPTWXJP4CprezSva68wD6Wwcb98BkBQrV1p4KYr19CWSf5zxELsVf6VWP3wv",
  "key11": "2Hf9QJcsiiqkSmGFSNYLNfPp7Rry9mUQEGEk311hTZSH1odAQx3hAxe5TDNqLBS1bTHMCwZchAQCyYtzvdDtDyVg",
  "key12": "3vEamExD7yPe6xiqPi79ZpZY5Kjut5418NpgwMbFkiUpd8LjsRuY2bpnXRSQK1RpacWTToPStN37TiXJ2KrzWXLH",
  "key13": "4e34AsN32uWkGBg5fVnAePsU99mYwXs9BtpHLRVVaUas82CgtVtPVsB2wr3raTqtJi1UyHQTyc8PiVsyd7v9L7cW",
  "key14": "3rS7bapnAi653VX9ZoJUZ2KatXiQpddwFB1DoVopzRDRq5SgMwTNbRXyagfRZMNYUrYNrovrnhJfgr8NAYg2uQ9h",
  "key15": "3t4PLxj7qSQWpo9jogTGag18Wi5L3He3a83MUmnEYfoayukWk9vBHWtwotqiQzVDaRWFELM8XShgEL7w26xPXSTP",
  "key16": "3hVi1WhnazR94FrFCnLfXcxPeH8pvJDZrFfEyDsXmeXi1XioDMkFWVsgYd9FuH1z4iMvSiw1jdDEBsxQXaNVv2ov",
  "key17": "58RQ4XyB5KuJD17YpRgUcSPXgvrrnc9bUJX1zhydonPbVkNKSXDkJtrkymAYs3qMhgEaNBJAPDrU9JR2e6UbaJ15",
  "key18": "sYVETtLvsRwbN1cc8CcRANvUF3uc2DGmMEiisXiuPyFVnPMr5gmnsZsgQKoczMZGeFaFrkbNvUbKP1qKXcLYkPQ",
  "key19": "2KVPD4fp8WC2M2F2YpXa1rqv9wJ7cHcms1TLJFJWyXBGKoSUw4GWXX5BG6eGhMvrzvgww1pwjYkoDAipiWq9DSCb",
  "key20": "5k16cxRLaBi9zj5em2zwQy2ex5MinaxmKd4tK5YtbC9W7maDuQ1VKfzjKWLKah98YYZL379BPF81k2PBpWv9z81c",
  "key21": "5BykM4w9MxHm2kGUT7jduYuUniqD3Do2csbgDA15RsMCUqVCkgET7619fQX3J9bJ1mCTC3R93KQnjzBihCvD8gAB",
  "key22": "AyCandqzKB7jQbr4wNJQs8EA3XpD4cnDdssZabHRZdSNLbuMvqAATKxMNXdZKPVfRnxdKR7KuL9tbZZKaSJvj9W",
  "key23": "3ShevrsHNcBFgnFYEYH8AejQvRy7GRS8qV21Kc5wgcxAFjeH6ALdeXHyqhN9XnpnQEpkriu1Hx8LW162aZvCbxFB",
  "key24": "PXvu2YtuZ9qFEjCtd3hWnv2urxQ8RN7DkdsR8eUMxNv1R1wQwwXPiLzN3uhHKKSDMAhu89SVbC7GbUtWnExvCA3",
  "key25": "U3ynt1WwHNbQs6JrCqQciW29wq9jJFBaCZjqUvvjaYCkhnErJVk56xs2XW6v3rKnextZBEefFrZasVzwREYPBSS",
  "key26": "3byVKVxTzJ2yohDdjB4K1EFMZGR2nd54R5yiF5jGs2XMSU6SkUBpTabLKYesix6jYGwhbuHqQqspKQ6xM5ewjdV",
  "key27": "5xYPD29F1MZH1GQPgt1ae2bCFkp2KfztnzJmGkXEukp3sBje474TL1q9cXMk1zDPtBZPcEcYHf9ewzechyUeTEEF",
  "key28": "5P4opLdkpnBj5MNvvfgZ2a9AADxAa37bZofN2efGd8FJtWmNQNMG19xHuj8Lnf2tbJeL7eHWs5HpCUHNBFHmStKm",
  "key29": "5Yp5rXucrQZvDmx6f2ahqUdQZRYxdtiD9bqL3JLdxtF7msxY3hdb3fNi7AytBt9uFXyeHxUGw1ags885fNgiQtxB",
  "key30": "3cx3wYhfHmWYMqpA5AUEJHnLAejvWm6rtzdhZKXeNVt2XCRg4n2v3Sz9mWbWMW8MMouGDuemhWpZKJSH2GS8sn4h",
  "key31": "k9t33sXneXDJPH7L1kh5uYRxVxWJK68uXgKQMm5nxngYnQ4AfmDeLLkUx5PHjXCeDG1hguieC6gAtPVHzD3x2DR",
  "key32": "3cBtdTmxpzthB8JoauRkLhSW6BLPuVKbhnMr3xkWVDT6optPPvMR3F2AYFsSrq5PLjo3x1nZ6frCCYU52ngqS3EP",
  "key33": "2pk18jN4gCFhEgZqe6M2xLNVX3KeKDjbBZKh93P34LWH344DgCCrLe91qpueMJBTBZyLWwTtfEGP48xdcABsfDvz",
  "key34": "2xX3RhnQr89BrWBdAGVmvqVFG8cxxccp1tgc9cMeducUK2AxEK8wBoHXqN17p2nhVmv2fUt9CSCVJWeqRUXTyxfx",
  "key35": "5XzdriaDarjhjgiYNJcx7pp9TJ8ZjKzQCnQoG2w1BV1Zavva6u5zciDG1H9hANDyQ61fzRbx93vX8i6ANfGNiKcR",
  "key36": "4ZKKUq65S6PjvoKWJRsDGFnW5Gikedv2ux6WNZfwrEiFuMDpbNWpH1yQPKmndeUduzmKHViFB4xPvt7ApfDEpA1",
  "key37": "2brTDNMn4WKfYsNGCeYqtP4CF7Nv1RArHCGAuMatz6E18fCvTT5PrYeXhCwDYGgL4sq4jtJaK5PU17bJUoFNHHRx",
  "key38": "4VyyjVU4qiTEBujyUzhzgvYy8eaHPsxSuZT2ry7hCaVEBKK9gz64rt1ZfnbUBxdgjhbyXwPHJMswv5t81rC1ZF7y",
  "key39": "5rma1yTBoqZXBP7JxfTceGxKHwP43sq4LjhcPL2squeh26x6M9DY2qrAJmbi6SXTctbQEdpUpTBvt4tpJ6Vgr6Eq",
  "key40": "4TANK7KDp1BrqBt6st6iX5FBuPHHjxdiGwpT5BaZWvL572YUwMit6pu3u1L1C2QFbJdyjkswqmZ3jh9waarZi4xu",
  "key41": "2GMLkL9j5SpH7p5kFUnQGtLceucRszjFu2UsSVhciw6vmgYJm2gEW3dko5twmG8rcN6CcUPACn2Lj3A2yX1fbMDf",
  "key42": "5kureTVy3aijMgkfBXxRFLWgrJeP5qxiTex4SDQUEfLV6166LjroToVkaVQB7avEv5wPDxwqcBDeKQbPCtBV6zxu",
  "key43": "3qo273SKNpYew7tANf5wsvMVCrcqoSCE45YRWv7qaKddHtc7F6ZAHVVgzNZLWwwPqxV4vm4yMMA6SVdwTcRsQ8kX"
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
