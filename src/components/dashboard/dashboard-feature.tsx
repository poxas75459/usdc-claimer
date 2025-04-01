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
    "EFRy7aUZvz1Z9pWVtgjeV7YmM28Wg4Uf3Z8yGuvky22o4A8JBsyc7xUjtkm5uy5GubU8vjWA1wraDv3znYoxrsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fTn66gZHtLXzgfkTFKerh5KgirCx3ZDBoZQ4Qs2TsYi1JpokNwXoXGGT3Hba1emwZccfBWsTpXPoxuNrzyyGuK",
  "key1": "2Uojwa4XNmiNnaFfEsUgZ1QwwMjQmYuqjWUuv72BdEXVpCByeMU7tyjSv7v9esh4WKZAyHvVL6jaBDyFnBP7Ea4d",
  "key2": "2B6476oBp6uj318vH8vk7tFX2kxS1oH8zXuemjFLeuiZvvieXheiQiJK9o98QencczBfGK3wUtVYBTWBQEd7Nb4Z",
  "key3": "4hopyi3ye7SnyYcZtsXYG3pVSTTQLRBQgiW9SE9UkUjpVkiazLW7BDr2ZBVHdBLCJNfjCpAMP4sg8iPovuGkgXZe",
  "key4": "4iqtdomWxvMfQEVjBmyUbT95ewK2fkgzYc55UL53K5krAwJH8KecnpsKyKjGwLzn5k9mREqrevwUrjTC3yfwJZXs",
  "key5": "2kstXHs2tfWq3pAkJ2gsah7fFTzn7assyN4mP4n6tXgJDG691o6k7ZPQYW15Mgg9b3TkGaafbD5jJdAC8LSJ1PVb",
  "key6": "hXeXYq4kyLfn4RbYhvK3BtA16ohHeigWV1n9kZKwPsXVWgSWY2Jk8y1rMr5L3TAWKGRageQQQ1FFq2eqUH86bV4",
  "key7": "31rKLfHSo8rscQitH6SochFki2AW56G7QbKNgAXq38ZJhpRinaYLAcVdRt17dhbzcMzd6g8fQDea8zLDk4w1S7jw",
  "key8": "Wze3iTpDfu7XHWndRuu8c3eZpxuRKeTm5puVUAK2ab2wGFq4WGmrk1TYBjwfHsMFVLtdH1W186k5oc9TY9p7Q4S",
  "key9": "52Bmz515Gd29jN8e92zLk3sCayt2T6ZYX77dnkiWuHvv6p4MA7xnswhaHsXWHST3F8RrakhM4z1dP9v5bx2QMA8B",
  "key10": "41cySF3dBWjjDDcmHjwXscganWQR4vPJ8HYhU6LoybBV369dALvzmwzkGuFYpMWHCvLFrUBMzt8CtM9tmH4i1z5j",
  "key11": "5KFsJHXfrdyJGTNad15A2jg6TqaWqkFnDt7mF9vcmTCiMkBgz1xpq5ERJaJz2vBbE5oR2Lx2xzuc8ayE7pDcwwTF",
  "key12": "T6UrxA3qhvLa5yUF1bSW8RcU33BLZwvYK2F8eiopsLsER7Y2FK2CZbzpVt8t8iEiYaUstgDMCNFp5pRHdzjQGKc",
  "key13": "5Jeq2hkGktpSxJFLrkMLWiSayy7NHmp2droQ8fForpLbLfbodEqANGEtVWhLHJhQQtDTHTJRsY5eWmUNSQw5X1v2",
  "key14": "2mZ6ckFUduKdRSuB99GrDBJXj25Ugvivyk2MvmuWXaCAEoncNjuuFxZRNoZ6mb59tMp7LQxdcFZ5ZRQ6wgTpZ6ux",
  "key15": "3mTBzpFNvZy6MxY7PqVog8Lbq7ZrrQbhydWM66aVStd3JcmUrapkGmG8rwi1CmVDdbG2qyFPu6KctW1wJJvUd4zJ",
  "key16": "4wR1oCDuPRzt3WvCXBZ2e4d85VBmMFaTjrDZ54gXi3HX3g98TWxHHKJoQQWEd9EepyEZMWpG4KRLYALJ4fR91WWs",
  "key17": "2xj9g9dVwk7uy2fHbmbEzs4xCGMq8JcXdyGUkw5FeZ26o22AshFUjD6miK1WzvyREHpnipRU279Ks4qAFUdN49iF",
  "key18": "3wXKFnh1QKb5SbmH9vj6WUdDKQJoMCaPUhmSoK8xFCJ5rqc4Uw4JNibP2DK3JPCiySjomfVcPgWJFLJdNVcRAy9U",
  "key19": "5DznV9sdfcLVgZuCdPCrpHiWyTGzEN4n4eVmX7kDQvqceiYsseLGeeBohEqYEj1TMqB5zJ3ed4aLEF7JvTo1XDJe",
  "key20": "3LwFZCsKJWwMCSAAhW7ZuiCnjymVc1x3kTWzB3yPR9vegEn5e9Da9jeruuPy5w7aNvrvha86rkouk5kEbq8pGapH",
  "key21": "3H4ppV56p9bFW4zfRknVo3Krfhm8tgzuwB7zg7p136FMLE9S5NaATDTcAbGunrTVzM36JiK1S43Hp2UBaseSkFGw",
  "key22": "23Qz6m2voZnLSZJMmiXzVmaXhrKk7nNYHFKRb7a2FyaUe6dyxynWsCTxPz7VJSQxGQ5BXUBNVrPJdVehWuABHgJi",
  "key23": "2pBQErVfN849DWhGDzZ9bWfpgJoQGyrdjB7swcW498GmoArAT4fp2ahRJsFMrqMf95PxQVHxHMUhKKSZLLPbJZdu",
  "key24": "2uha7oWg2o7RBubcqPLcsxPVHEZd7EpVdB5E2bGWFBxyTUrmVuADQ6JmFnJkDpwX59L6DvLbfE4xz1vMMYCF14t2",
  "key25": "4MBdT3gTwb2J5DrsG9kuBhP2TEPvHWoqc17damoCjUN9jcNX6qcSR3Y3uh5yfPnyuwdhtWduPkrVXkcGhFaEQuYg",
  "key26": "eTE9E1WapSXMFhLgwCoootFBGxoAwfX3BDT6DH15mVzCY1dbTNmTVyHnFdCAcTqm4NWe2T5h5Un41XGWJYSVMBe",
  "key27": "29Mu6L7dyjNAsVscyeh7pC8t3R5Dk9TnxSX17NhKH4xvehyXCn3njAEcpNPebPTR94vaEPkA1Tv689cEmmPTJz6s",
  "key28": "3MTFmy7wRFXVv1EMyxUzYtg5rbEAbMC7tQWcpNExe4oZctDCsH8iFXxEMA4JMuKVM9hPybHtiD9ABAnRKdEzKo81",
  "key29": "5CWTsHHMGe3xpy69x4Jj3RHqvGGzdsQg3YS62gevsd4m3GS16q4SjaGNkyUPQt8rETg9h5VWh7sDzP2KwNTNsaN1",
  "key30": "NKrV8LHbJ4xHnugAap5TmHGf1hjVC3SYJCCXjpGqUpcghLQMoGXfADnP4v8xBVSLgywwjraWEfgfS89re7KEL1U",
  "key31": "5HGG3Er84yWYBV4d57JRVSXgTRA3wKJSiiJ9MDuyvFhU8nSwsvLCwXodyw16AnwcuGnSEVyfDSWPGRG1hmrjBbUB",
  "key32": "2YU3bP7KxsYEkCP7jwqzJhLEPQzdt2h9EbBo3s2pRNn2GCwVa1KAU7Fc5sJmiCp8fPdKX5WdjZ9FN9W8C979Mz5G",
  "key33": "MES1C25wdhgemschPvTUKn8nEYoNJo2EpFNTZPjRNYmzLVQxpC2q6DjWkmQffkBcnC1h6qqtWGFYPbAhbjma8XQ",
  "key34": "5bvkuiZa21Dd5utNQYFbzWahhAK2ApAhWm5xWrTTEdUua4bwEscSYFuzjcekZAacYgGJXQEAT6Sv27X4Ws7MFTYW",
  "key35": "5gRppdWgyG1e618hA9MSk11ZAQWJi2DC2E39ovAA8EdFt2S7gLF5JxDvtHQtVY8hGLhULpSZtFL148jiuaoKWx1z",
  "key36": "29eV77LerGS7H8YhZUkBufZ1yFryjsWfpkKTV2m9shP6QzKxA7P9E71oX2CbMbd2yUs4xuaAy9jJ111ASQjMe9cw",
  "key37": "4is9yfwwyEuZjSbHuPSrchCFWgyhXjuMi2FTanZKcYHvkKDuH7JmSkK6cS21Yn77gWdybAFDeuRoX5gDBAGu4Qcf",
  "key38": "4GVhyNZ2Jf1dBRduJQabUZYE4SGfeghMLX8AdwQLt8btyh93zAB34yZ5FQ4Fcv2uMPV8Qoi9S4ocwuqc48sLGJsq"
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
