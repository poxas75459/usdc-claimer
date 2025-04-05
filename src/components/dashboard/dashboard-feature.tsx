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
    "3NXChqZAE3gHWzcMWnTpVJgGvHAG8eSvc25iMM8yHv2NYxgrwBpcgAybvRoncvxQD2QQsbTocCSJrhzspp4ptsA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHX437umw8AYMEhmu8JD3wEPo2sTHhM4KTwYQYwbNpwa9DtV4yrW7XXx314hsBsmBB9r9Ze9tVGewJmKK2FkRw7",
  "key1": "5KQcQHUmKftQmeUo5TnB4wyrxnJnAa9JLQJpjGmAotPQouFN2vBQLq47j35Mis78RGq4FVP2vrfeLMMK3S4L5wQX",
  "key2": "3PR5QJJ4iz8VdCZtV6NQBbUs5wkMrCJKNYBS9wdK3bZVqRpovhsS7vAsp7aKPa29qhfy4Gi5vEf7vLzjkiXuDd5B",
  "key3": "3djMbatdrDMjCrW1aE31h7cpFMoZvoRGYf5JxyUfvePGxi3AQAsNY4AbsEziiLQSvjrG9861SFAar57vwxYkUmRt",
  "key4": "3yWgN911kyZShdKgXDprM7s1uhrMbdooL8qygRsyRHHJjWoot4e4MaQiixSCqe7R87R3oQwRMeNGrqQoPAvMeMZm",
  "key5": "3yED2Qs4TxJSsmFnFAUs5m2g8YQDDwJydgeA3UiM6xsvhqBW88FtQ8neXFJQoovUC6rRqfRevinN4NM9TW6qAzPa",
  "key6": "2eSnUAGvjpP8ik8CFEaYcjcvrnhPqVsRJT75rHPio3QxfDQbH496AXwDrwxsL2Xe23yrHQjsWY5FuQoUu4poRYNr",
  "key7": "2aXbMZXUPkRngRo9YqL2qQDFXZoDDvsLU9JAjunW67nsFQbKrftNtsXjYNpCZuVL2X17eueqJ9mTxD4bM9nStsDh",
  "key8": "5BhAwL2u2b3rZ7SXHQDbRBETvv6UAKQX6k3sKsugWwo3YNfTAZDYkHdfLvc5YMWZC43T8xUZczjhAp5a1MPf7W35",
  "key9": "46mX6D73qPfregJ3XZFNP6nMEHNEKgCA6RgJzWDVt5wJ5yFD3DhaBAdi8ppyfb6XZDhhYsw5mn71fJy2CKd8DRH9",
  "key10": "3xWPLam54fu2BwZqa3h1qEo8YKg1SBenRkWQRf2PAercLd4Gu4bp97ktt9ZWkLATbgAyaooKzCsebbLmYdidN2bk",
  "key11": "2TytsHRhKjgRi7qWmqiVUYqCV1fFLra4WkwEG8MCdbvV2HES6DizbWnqMekN9TJLZzNtgTdQWTcoeZ4rDj9h6R41",
  "key12": "3WTuFL9sz7Tx4pkpA7TZ5AN7KnvPuTvSqDnLCGcJK2w9KXt8kNGsZw6GMJ2483NqVNdh85wpmZrL2HkeBpSMKPcN",
  "key13": "3rhpt5uR6a63zEVngAA1JY56g2iumbh4bqrw9JvJztSaXQ5gE37mY3dWgWCxWMwmpteA1dL7MH8iFvvDkemWBpqQ",
  "key14": "5mXtHrd5gAkZghy94iEQjErJ7VA3fbK4qJEKsafHe7FtxLYX6TRU39E8hUgA1fTwpxa23KAdjGZ3agHWCFJTV9Pe",
  "key15": "3Hy6utmDiSWKmNVzL5jVFdrSUeg7n1zd9RMJib3punzhiMoPNA42dmsA6SbAWGcBB8YBzndut6yiU5mAtJgHaLwz",
  "key16": "3X97F7MD5s3SpgxxP3jtdyc4rkAsJezzGFkFYAejtRoekYA6irZ351azzCJHPQzuxtRNg4NJoiorjVnQQ5Yk2hi3",
  "key17": "eJVxqB7d4qNpi5sGFzSe81Hs9PkXq19Ctt5p8hdd74epqcXQcsLSqrvE31x6nwAkT94QuDsBk2WjGSBgPpzNHCL",
  "key18": "2UJVG3pPaKDDN4qftYUdqsYjqRxDXUDUpELmNBsueLpdB7ane5ZqR13RWBofMRSETxcXKB3xfPu7ieyuUj1stey6",
  "key19": "2fKMcnAHuYSPGJpF42ZvV7egXgHhQKzxVJWhPjMJESPVJ9qKoBE1BQ15UvJ4eqLFmJW1kvE3VsphJiiji8ANMr5U",
  "key20": "3BpWi4s55MbshL3rYCnpFjyofjuHV8QJMh3tBomasW19VMZSUVYeYRffFoLr2fcecFdZKT55BduwTggsC4Z3Sinm",
  "key21": "57WFfWUoJyEo5ELGEvhZMjmdq4K12zF3uREDZi6VabwibtXWHRAwbeikamJgmdVcmjoGiVDtkTSG14zt7uDVNTkj",
  "key22": "66zGmkd1XMKFktGYB5FjKNHc9oprcy54r5eDNv22R8vTT29zW3NKH9c32iLRgRr2UVi7iefPAkzXdPos1igJw8SP",
  "key23": "k99Wk4ouLRGsPexVHGcDZXMNaQhJcuU4GNnpdVUiS4u6bKEy9uFF6w6RNw8kAqp3CBDDs2HRfu8tWRvBpZcDoLy",
  "key24": "2RiVD13HNpdPiC2DX4eTW66nt28DXaQgXMANacaqXPPGUeDviv7YvEvHL8b4J2XY4yqt4hE7rUJ8F4AVKsrrpdgM",
  "key25": "41hvvoW31NotzkSdrhcvzL6fxEABLH8FT3dL27FPQtrKg7NCpYswRbApaU5HWQzQqr9BwSXFSWC5ooE11gSJPboS",
  "key26": "9CG4bb3cWFuBjSH91oRGkEd71A5E7EDuBTRGoRUDYJ1G4msMYNEpwd5HeijNtRpThzNkg2nXZDYLFRpbMog4S3d",
  "key27": "2CV39wmyV3KzwZvo4DivwMD9U8nPUwGZMys8GreRDDB5MUyvP32DcDo478nAUAoSTHUrZboNfTv4JZLLwB8ERzt",
  "key28": "3wut8JE7xqA466ZCoXtaUinf8KUcQ9jVcciBwoXpViNsL6jBRhsCcqAzNy8Mao9E5EkxwezjJrvsrNdwL4Tzcs3d",
  "key29": "4YngZCqspdpjgJnKcoLxRt1Syye53woJ3NhTKzhZH9rb6RHWp6MbhesRTfAV9pC18f3VDdK83qPLmPdcw8PJkCsY",
  "key30": "3RnFTbBCCjHPuwwnPfhH4KN74Y2ojVva9UJPH7A4TBCGwgF34JZw29EsRi7DtKbT5Up2hhN96pD7oMEH6CeAwuUq",
  "key31": "2r53LW6wfUiFQaRKoFvCN7TMwirbmRZwxp2QdiJtHLqZzkQQJ93M55fAqqWuY2f5Vf9yvuyrSig3kALTEC7fuer4",
  "key32": "VpSKSce1R2UeVf8KgaWAUE4Ged3e8tRZTw2aGrz41fBks15EbFfhVHseCpAjrfYXReJ2NWcerpjzPoHpdBAQU1r",
  "key33": "55YbUM1d8kBKaXzeeWsM8iQsmFBDFpTHzyg9C7RUJvu6U5eFxjDvrshwAxGiCagEAikFmCKdSeowJX7ePbma7oaA",
  "key34": "qyqGzPw4BJyn8Wg8DGvqZ4KZQgfXyCfisw5V2VDvyfts1rJQcdsRGLnRy5qyYvuFBTU8vgXw5q6BYSxqdeSo4yK",
  "key35": "v1rHN748bRxFcWHieDYC91BKiXLVbNMtX3uCeV4cm5CcQC1sWooepUSc2sauCECfv2V2JF5674xEVdQM9Qp6Ayw",
  "key36": "2Tqb1PhHM11TLjC6erVomkroiKGuZBaAnuUNZ22BQpSTXHCKbsE3zQxeLjxstPuVnRJwX9bwM65TtubNjpWidL92",
  "key37": "YGipCR1yWZ4MhDnX96Ys7vj5zxh58r4d1vcHwZ3WfeVsufRJrydebsdaXQjc6zza3t4eDa3HBBgTZZBX4fhSWFe",
  "key38": "33CAmLVauNRmqpp9UGXhH5CxJsfA7X16TutSchMwDhJauwouXqTSs8tdgtzQXqGtTRmYkKNFZEFaWmbTuphYKwVY",
  "key39": "38MhdTniZJJBcTCjEXLmF48T2jWb4PSMNXXHEc91dkgFYFe3a5vrZYf6siNpiVFKC1GhFSajXNP1QE6MowSKX32E",
  "key40": "BUgF2DKVqiCCop5tUyXieVwHXCfKU9ME8TLCDs11okgayHP3nunBJuZCVCatDXksnc6YWCW6UEJjXWSvRQjn1Lw",
  "key41": "3a135vqWvxr3kZjdeBheCqdLButjLmX67U6kUipLDD8irSUKEhne3b2iXK9RdLNBYLbtg4kqLexmnAhFd54o9wGc",
  "key42": "3EGnchVNPoMpHBxXdRB9aJg72UmfVcBFAkqxENgXNa6mWj9JaErQRqQezHCnAV5Wirh35SVgy2UNH4fjf3uB2oSw"
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
