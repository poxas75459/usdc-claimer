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
    "2RQFDUqxShDLTSUnm7zfzx8AHxJTp3hSp8oCY1uypH9VjCyEkN3N5zmwF6J1cbhtT2jm5FhCDjWN3ZMNW11h4Fgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xaBhPpLSGZFtjazMzKHSMXptF5GfYT4DXXS3hFRH8SwTXSaoiWQCXtmoARjcPWU5G77jwsJ8Z3qikMzKBRdAim",
  "key1": "x8DPdMA9hbBwSXAsab6yLgrfWhs3yhiFWYiaySbFmLoqTc69pBdr76NYZ7iSuR5AjT3d5VDGeUUC2Exfizmr4sw",
  "key2": "4MswH5YWazmQHMyoM8S8P4TUYN2Fndih3ndd9Bnqgs6anDQv3ASbB9XPdodAxm5x3LCLXggFQfURF3cBPPtc7xkM",
  "key3": "NgULJMDefYZirbaqStRMhMXUePvXVmz1jddH1GVf4xxLDWqVmwP66EGfYtkLNifHgQ9Gq7RTNEx3it9U2YBXiiG",
  "key4": "5gKm4z5MhF4vVgtfzt4BRkNtjC5bcrFYtwGBiRqKtkVTeVEfuom2HKPCAkwgWa5DQytpWhKTaLoBg7g3sDM1ZvoK",
  "key5": "4WNroSpKf5wTkMBhhNx5fUsZ5W6ARQqrG2uNTcVRt3NMvxfqQ4qRqUpTGXrzTkoPBSNsEa8FKBSkMp8gHDPBPt4Z",
  "key6": "2L8fVDqTLdjS9wZC3aKZTz6pNsoK7dsRpJ7uoKJiS6CKUG4sSy5moyv6KLwrRrxfcKk43tZ3ocZcwUNyjiyopJ3x",
  "key7": "3cjMPYo3hqoE2tNvh9v9qUMCGXa2oRCQPoz1kaDZ8UwTqRuG5SL3V3xGEqga6AJK6ysq31fa4S7hsk327CXSmz6T",
  "key8": "3Wn7gPvYDrtC13nCyBFm3MWQK7t9pVVAiHC9GH8Xydpx4Yu3TijUNHhDURxvnTGNzqukdQjATRfWKALgpgjS6kCh",
  "key9": "wQPEwJgNN3XvaRD9WK1pvGnTe3nn21TiQaDQnAomNqBHJAV8FSgqGxAMqc3S4zAYKQ2vkebCLTM4spdvgSVWbJS",
  "key10": "3iWcVuQTXnCKYMoWXh9J6mHix2Esj89SYsUNRSsEcVtYB4SAcWuoBbvLFwWGKTPUvEMv9NY9FJCLQ16Z3rC7XyYb",
  "key11": "4HDvgbvHsXrojE9u6CYQkfmxAaDfiMDgECTnCv5VYz6wFvjz2eVeE65cjBjfX7ovSkTQ7kj59orL1xTLTLLHYAUs",
  "key12": "542rVgf68ZBxF2Mbrb4k3nxdmd1USahqrdYFiqdnQdXcrrMo7oGXjwGzHLHpvifGLJw37BLW1toCfD5PSMmbjuCE",
  "key13": "2Axn2Bnno74WBskfeCGT235rCeCoedqDzTpEdaF8UPVZGLGKcKfZUrp3CShLVPEvthaismNPzTREoY58kdbaDpog",
  "key14": "3rN41twFsLUt4FCEEeAHN3kZ6fmfoSt9CHpTJ1RDhiFWXNXT4Mizif2WCt3JDMfMuPHHB4a7KcbUmaj6e5jzD1YH",
  "key15": "2DFMNXQs76REStmX7WgCFn86Ar1LAXR5XaweQK8BGJtXgW9k9HjeAtN8PKZb7xfCmMKZoLwyMWzsxAKq5eCPFpEc",
  "key16": "2r2zqzZgSr9GdW2Aa3crMb6XDhiTdDjg4nhimGPcAEiqScQdWfS9ePyoEtjn4mQDyZZVVHEogsXCYQMaSNnGkC9u",
  "key17": "3kc8hGGmx1pN2CciN4A3JkQuXU5w14Ua75NPtwJNUezu1bLfKrcaeAC9gudqJaqJzJzcCCLoDXiw9AGPeiUpCzhm",
  "key18": "4Q7AJZPfp88FwntZHs8bDgXirWou8D5WgqZ3S5Q4PiJCavP8wvwcrLLguqpfkcoFS3YGhzw24vD5AQWdri8XXZpU",
  "key19": "4pxe3d45hb7HBxLpR5uDthetyiQhTnBPwbT7XXMhPaH9LSZb2NGoWzmJZN1Qknq7BvEBnnWSAGj2yP9YXSBW9Jkv",
  "key20": "45vJm1vyAJqxJSmGLs7X6TFCcvnYvt2kEunVmuSKw4tGH669iPy9b2er2aB1fKPu7tv6Gjbzfesv4ButU4UqTqWN",
  "key21": "xrxP1xWhHNMFS7pMVyT66DepQVLoEpL7MTZoeNESYU2CF3yduHxwFRgkxAKE6h8f131kjsL5B8cqEYVbxAahjso",
  "key22": "yF2js15S9UhbPFwPRPFdtrsJ8qL9WQ9bvB5q8Ty4zsahrzzWRKEqrfU8YNrAc5rvTip74ZTXaSdf2gRQFzohzfE",
  "key23": "54dvfvtL9CLDpZvhP9wQgpdseiBdk2AZXEcqBYNg7YiskKKyb6oCCzVzYk9uaEpfmSTBhCDgKNrZe7pRSHp3H1VM",
  "key24": "7DPLyqGpDPHuaSpR3RMs68fRaDFzPUuey67BbsSxVppTcxXP8J1iRndUtqDfhgQyZ7ghxdqqm2LBGEti74uRVwM",
  "key25": "4SRiPGeM2riYL5uEGUbNain1z5TMWbYj4wjo7fNRBiFB6cm1YpNiXhVsQiVCZKSinKj9kjjR9rqVSbQ1o5M3FG8x",
  "key26": "59aQeoFynGgahEWdHvtBhbD6f4GojvsizLT7iN67GrfVQiwdBHXCKZQBJE23rCBMVitP58phS47tXuaDrPgNUpq7",
  "key27": "5gZRGrqaq8KcQzX43JkfLzCjxgR88tNf3qjFmdcfAt7jvHz77EchU4hK4itKnNAiEfjuSQTVBWGTdnwtY5hSeHXK",
  "key28": "5Vn2P86d3QYJ8LJFb3VEGFyy37GoJQNaXWUB85mcyZDnRkyzrjsZuGkYzCyePMJLyRv4Sw6yD7Hsdpr5m7H87HWZ",
  "key29": "41nxxLSGx2jnypnUaBQvWL9H4yLQNxL7BGkCJdadVmo1NmALfR1ELEAu1h9R3CNSkUkWPvQxSAYSpsA446wKgR42",
  "key30": "Fsjud7C82RfWJkk7UAavPFypuczRcHXoT7EC5LRTaccwo1bZfognWeWLCwzVvuxE7XifyM7z5guu4JcgS1NaYFR",
  "key31": "38fP9rMduygzejk1kkNWaeSYno2yBih3AK56N1HeKDD3tVRAq4LGDmkRhLgoCYfufTYhETRqih9y9pGS5YtzY3Uk",
  "key32": "54yLMKqutR9bUTVCqqrxZW1heiyTHCkV4bz6gKQ7S1DDstoiw9JrLzvZE1msMsdnd9QxVLbBJFqeVvv3KAUbGBHt",
  "key33": "4C4qpv1LNHjU8zJAvtS2rg5jysooXCbuqMr1jWEsKju3VFFywUvK18WKYqV3HggAvDBwEq3pjBGTaq5bFiENPJWX",
  "key34": "3M9jMWZuSzGK76PfCAmKSXFhW2nbzX6C8xmHiEBucgPD13VhEzpPGwtEzmJ4tCCDfDfFmMBJn8hnfAeK1j2fNNtS"
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
