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
    "2veNaUd6awyusEcoiDwLmpo6B8GhGYh5xkh6p7vJiX8mEJjqLSnXWamTyVFk2f8n7bU9rjH6Tr3xUKDCmHgVfni6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52G66BZnERJU2fmfH5LGuG9kd4gondiQETQYgwTyvzddCQhKcCuDDknaKfm1xWtA5CanQrfGTtWUuDH5DEsQFX9k",
  "key1": "42fzTFjehop4AXprhAFWagwfGuC12vaC6qqiRHFvxYv7VG8aPR78h8MVHLcREjsRPNsh6bUHqWMgnzsPUkUyyeW4",
  "key2": "39cDbecZKYsEUQMvmuYMCDzpvxmHK8r3cMWV4Gxx28DnBQ5BtnHyeL5QedsWL2G8N4qNDvGLh5bEW7mypQ4SLPmj",
  "key3": "vDy2G2QfRSTVhKCuPobVaJLGopeCZZMd6ruYCDp6F6BDZtwbcrimJv8Tn9FYErGinBUmfCLYLts9QiQH5Y4yb1i",
  "key4": "3u2QNkqxHqkq7Hc3fQZbvhBjKmywFfkCsq4EEaDqQK2SVnR7nzGpa1QVybw7C3yjkyVBFzwemDjjG3quwSgBnxMP",
  "key5": "2yxuLcQBCmjr4kEZApiTKJmTxRmVFg1v9s9WWmNPwHf6x2yi1ykXgW9maotKZ5rPXJ445Rc78UhbJkcD8btuJF4h",
  "key6": "52HEatkRZYBcmYTveuAjo3btYg346zmwqCkGyLjEJnKaxNfJjGYfbvkibPZfXywUNzjwGJay2cn7jqPV97PYXnas",
  "key7": "3TDA89PhEYzJFePkd7djtcrLbb8n5scb5Gwn8gBGbaDpdRwwwHpMHDdV4MjVKScfKQ3dpr12hmkSTQMDUmgSqgXZ",
  "key8": "2ro6Xq2aNKod3aedKKGyaJ2hAAZZHCh85JmrzB9Q7sbGPfLYWnuVZvCVcd7HNzHuzwbx7SNWP87rT267bvVM79Ua",
  "key9": "4TDacHJ1AC3jTPaRo64WvaT9KTpfmgzY84xqLi1pdraYTXN3FD8PQNcwpi1uMjcFTTmiZQupnn1hhhtSrdPmPUfV",
  "key10": "4sYkU8JTbG5dLXJZqUsnVWNQgCXQ3ZnKAEP5QkTb8XhHrmKfQntUy8BJqHWWehzYWJsvactgTtdK8pR9da4SQcdm",
  "key11": "3tVCXtEAe4Bf4hkqZVFxmCWPz8hKHTCp4eEhoFFTshNACTBQjG3bbApZZHcqKstzoBhmLjobW4C8CLy1GYXCBjEu",
  "key12": "36HgJ2oHQJHeLFRsSJ2Gs4m3oYmvLpRagKBH9fZ7TqRucGCLQCgRN2wMpAkX3PK7gYLXYS14GoELiuTqVtDNZxfB",
  "key13": "45uiFKPsbWtGf9BvCng9DPDnS9xp57FYZBCWRXbD9PiTUAF2xRDHvehXioQC9jgDUQ6Eec9k186E7SNfJqDcgbKE",
  "key14": "qF6dvdNDFh2pCHzdXrCdGwU1aWu9nuv1JvQXT5esRCiweYtJnVNvYNxcZoGrJaZU21Ngu4p2GKGE5mj2jbcvYKH",
  "key15": "5QguMxpToWXWs5yMNGVCCkRoZkt5HvhzEG8CAjuxdGLJKYDMNmcS6oatrCdSFUAqsbEHaRrsabPpQV38KeTZD1Pg",
  "key16": "ogeu83W6MAxvsY4VxVT9vGAkxTMGCnc45Rzd8Btw759EaVi2eas9ExT63sUKSTBQ8ngbpi6CYBqsEmuxhY5kMA7",
  "key17": "4dH9utGe7mARbioXmVzuBrjndPDGqFgBS8eqMt4fXd6BJrWLnEyfuiBLFYTSsoiGs9Jz8nKTvbt4jrFVCm1YWbBH",
  "key18": "2y9FoHzHjggWzx7QXY43movsqoLZo7M2nbPM5XMEq8KKWHeHtvv81cWtzKDDCsS8xFvAHMj8XVUrCZWHDHWSYa9g",
  "key19": "67hkxQAjK8qvykNV36aiHb4axFLSidBWoRDkz85MqT4YxSUHKUPUmfm9uxsUCeg7kAt6jp94XJLrmo2JrE8kdoqJ",
  "key20": "PMq9F17ETJz5Q8HDGd2q9izqKqTrVCH1YMNoqB8kndPBjLJDzZZvXStbdQiYKqAYpc1QbWG9YD81aqcUcYEd7Bd",
  "key21": "5nu4uFy9HV4hV5BCZ4uL38N3NBh9fAF1UNu9jNR5gnRQrjTwd8cUeXbpysh8fCDuBZUEUsnUTDXbQ45MowkdV4QW",
  "key22": "2nBPJEUbkPi1uQa441Ua7BWHeRjy4djXLZNBKWi65LcocgxPmLTYss2cJLTgt7QfmDvWSnADpYV8JLfmxruxttok",
  "key23": "2xVELur5q8YYcgtKaRovy8uPbbc9gkee9WetwJ2qSKL6mbcDc9hukhThf16Tf1YdD2ryiYeXSoBjPJyKpqjnPjx1",
  "key24": "2wE83sUWYjbGs58hRktEpFuSDX4S3oehmxJwZXP49Vos5n4sHuBD1xN4AdZtYAy9oYWpFHZArBM5VT14sfbL1oDE",
  "key25": "2P8CVLjCua2hwCg9Vvk2oNrHUfcgsSpg4JxQsi7wWVVceNCZXbGBa2QcQYdaQF2KrZJUCoKV5Nctf5Wye74EnYsz",
  "key26": "3jsZM4hYRhNKJfkUYQ56fQWAuGrirz2U9XnbPZuY7UyQjZh3Ze7oWdFvLtaw7vxPSZouWtE7wrfgF393MHFW4myt",
  "key27": "DMNgzxQ6QW9KDAq7dz3T2perN1fx1snKtTYFfWxwuNYvZk65AXzsZCdRtbcgHSg1JtHM5q13z3H72MSaJvXmvcb",
  "key28": "5xhnfrzvH7jFFs4bz2stdYTekd7vjmDy8e47Tif9QnWe7BwpwxRqHBtmnYVDCBSLGXMK289PH58bM9urvjm2ShKj",
  "key29": "CDMWdEF1fDWSrdpDzGJhsmLtzeNxzCoK5L4WzKX56Vdb3Fw2e2hNiaBPKDS95ZzggVFBCqb7EkQ3fgEPoQB5RrU",
  "key30": "2RkFg3v8WfPyVwnRviMJiZuQND2VvhmSiJBXdWfNrtZGTHPGoer5ak8CbJczQqsavASQYRdwqgnS8PF5psCt5qZf",
  "key31": "3LbYd97u4YpDt7QW48JxRA6TPgZ9cgPyedk4pjVt3Pu5rs53J4vujjr525z3V8V3Paf7unVnF9ZCPd9rys3cupfZ",
  "key32": "3XDCDwLMRYABqyshyEsv6WTU5VDdW4JUHxKM2MujNiS3WQyonDZCU43Q8vxL9Np2rGkJkxpYvTw2D29XYTM735KT",
  "key33": "5xU9ksnFgkE43rK3Yf1MnSCavChSRteHVU3KiTWcvmK7bzcjZRpE7ssiUEYEDTxP5LKvJwpab2zzKozovHX6b35X",
  "key34": "2p1VKj6jf73tFj8veoyfa69rW4uDveqxp32rboHysQvNF2dKpRQo9ScZXkw9wYaJgb8mmyGagJtNibwdp4hP2qP4",
  "key35": "Mab6yEzAGqWtJoCupi6UYzHVHzXkUjM93U4kzCJNsjGKrmvLLN9uZRdexga2D7wapiEfJ9D4BWBa2V8Rh7FfpxW",
  "key36": "ugpyzNAUyQtDj2u3e13UQSEETrefggf6opKGpDSatj2o76bCdR45qzTqt9VPKJuNDsMrLojQb3EwzS2JBT8aVjY",
  "key37": "2tE1DFRqzTuFrhwp9pLcqdQH9ZJUxkiHvVvJPqosKXFfqUiggdhD3u5UTDCgfK9JmS4QvUYaMUJFrb9PXNNaWRQW",
  "key38": "58aMgQv7m1LtiG8TAuoS3tfdsUUxmhZmkPK6oWgHgwCe5goiM7VdRWCe16aRwuiiKL6ZZ6AijwfqkJGUtXin5Y8h",
  "key39": "3WaQbHYLqZLhArYY5hVy7aHLWotP6eo8jpVrT9YJf1sECTnzUUV6aYtLxnB1g9ov185AwAgSuLZ3vsi5vRW6bPV7",
  "key40": "q9gLBHmBEKLWB7JZ7cqaEPMTMnmujenVyajSnkRE66umDwLGtTx22mHiW1SajRBinpC6gHToCjicbzdFio62ejF",
  "key41": "5zuVtZiREmnpufzqcME2oT371rWKGaB1Fz5wxqE5GVj9HkehcBEfpPPUhDfm4RdfLw25FfDVdSTu2b2sWuBqmFDv",
  "key42": "4xn7is4j5efq1hYbKVCGmDZxT85HyRRGtBJRZoG8MKRC7ai7JkZ2LQN9CZDDkztRnwfC36mbypAeh64wtUtyb4UD",
  "key43": "4H8C6mAjgPmi6n1gPaAGd9Jw5GxZFxJNTzX3M29ExEgveB2CZwMpCDhFiFDym4cbFuGudy82S8kQ2Cy1wVe3GXPG",
  "key44": "4BXrJjgZnj6KCVk5BawNy1FTi3E8mPGUL1G4GmhfS8MzCW9KsKYwZPrtiDZzprhirasHKoLC4zZUommSkkjqsQzF",
  "key45": "2y8AQiwMvrmWJ1qjuAorCKTdW6eFPqWCmj8BMrpNCBcwrV35YdoxBhcJVbvopZVLSTmZnFpN9WuxYMCM2596P6R4",
  "key46": "EKXkgZHazYnyG3Lv1fmGsZABwDsdJ5GfYfH3Sw3GnBkKwA5rNQ9VaqqXWsQDac6Z1Q4tb4RhCK3eZkK4C8d6Ytf",
  "key47": "56eGGfSvFswRPj6UfRNbzFPVRoJXCyWNKPS54rEJgeU6FFiLpsmTu3AoBV9fNEgr5MXej43DKfq9cq6jufG6Qyqo",
  "key48": "2DUVMdzS8Lsdwc6Wc2sUmz5SeLTv29rUqHGh5YHVbtctLsCY2YNSQvNzU9xY6P3YXYWw6cwx7iAX27ZiNyPAzHhZ",
  "key49": "633foiJv6tHXnfRqkCHFMs8HQ4eR9n4uYDF29aj2b8pPQNmFon7ricATZKz7EdYUKgrzwxfBhQPKCSe2D1uGK4qo"
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
