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
    "2gZu7NXypS7eTLLFfcMMdSZbCgF5U4E7L8qc91amLxYvQPip8SzpyN2WkGEhxdWukFLBKYcVzFESaTQBXHKFrmQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqRSwUHxkDW8bSX7hWHGNrsrxUCvRsNnjtYbHLjNXMfVojzeCicJ7kyLCEm8cB6BBVntUeqocSPgcPqQjBCC5JV",
  "key1": "5uHMhsiVVCrwpnoaaRADycJbf2ruPpTPBKWooTJBjWMw3KC7RAzQepRzE3Fpi7XRHJ4jrPodTMw4vJ87BZ1ZWrDX",
  "key2": "oGQc9j5g5n6gfEJfWRB8DKzqjYn2GMAEUswiUr7ZevX5YNtgcLs5A6PNWVZmSDm1SPt7dMSMrb8pqB7DtnqNRbF",
  "key3": "5gpiFr6M8TsmRGJTBRDrYCXPfE5ke1v8irafL9MZHd3jbB6Sz6nTyeqxKkoqctpYf6UtWVzAiaZ2NwCgqRnSt3xo",
  "key4": "4roqjt6ebLsBXfaXgMJmZZqBrh2yTNnXE88VCdGFhdojNwTHUBsio2Fv8FhqhVHBBcCQFKZ81Z2gFdTXJD4wGAFE",
  "key5": "4vh9ohXRrvaRsu61TYcWMLHnsmKmUoLkocwL5Vtv4zunSePgaQuGiFTHPut6611QFRmuYndni3HakNeut6NjJqYD",
  "key6": "25q76TspZNuVP6i64sUwVssDdeqhi9upF1VMprBtiKneL82Kg2t28c1AuQuBtN3jxDGgAFrsXgHDSDK4cp87pKxL",
  "key7": "zyrh8cnap57Weq8i8Rsojo1seYZdhoVDwXt6EwxwS9EE2Z3Unz8SUq92aEBKVGmpkB6DfgQ9yHkRdiu9Bs7evsb",
  "key8": "xugzLVFo4kqg26PCHuz4rHNYfts15NHZ1xwmzzJcKWKwVAGx85jeZBGzX66Y88HU7yyeeegeNAEECbwj6Q3mLvM",
  "key9": "2muR7gkwDGtLPmik8Jp9QYZgno5njBdyVVcevfon7J7ZFEFtyFymeLdhngqyCuHyGrdaXVhALPYbfU87RUVyicb7",
  "key10": "KcqbZYejVV8Y28TTCFWYZV3TaheJqYTydKBHmiGN9gEmyxznCeSxkGJWKoZBJEDbCbXD8QZvyQiy3JGbRPWh4NA",
  "key11": "5vDzPSw5qhtSkyyTD22KNatY8o8J16ZNSajFzXwHLMHxiRzfZbnLjA2r6oAse2MVhmPJdfFSuNECctMnLHHizA1Q",
  "key12": "3tRmGvC6KBtswm9QafUNkGEUgBCijAz3nB3Rx56a3SAyKnfmx6W27Fhi7gY654voih4qb1K2TfzXtScNTTK13Hvd",
  "key13": "dDbcKc63J9sNEy7aBX2emSamzC11173zHQVMv5LrHtm6qmuMYDAMvFjxUL4uteUASbSDJVjN1TqaVUkQKnGqzuh",
  "key14": "2x8vELCndyFDuhqfBVhqVSCrbajWbUHsAwMoZMizgkNnS9foWRPrxgU2yZ2z1CdeujiACfU3wf7iGoiEAj3oc5wf",
  "key15": "2JYLDCW6VqHJMCRMPaLXyXHsNXZzxXodgfnpUJ51GNrBkqb9oYZjYCZn7FUVcReRPQBgaaNhBLwXgS47K5YxuxDr",
  "key16": "5BQ8Nifu7eMhVHBMChsnFuzWbxiZmGR3irxjXY4r4Vq9EkbDfdkHPrvutaTL3g3DibEMAFn279cSG7t5q4ekbbkZ",
  "key17": "2edJzcQkwi3Czp7BEeDZYA1szB46bKS6H7pdotSiPVeeV7YFGSQhcykHs82SZnBBWdV1i5c2FJ8NLUuzHB7jd34M",
  "key18": "4oodz3bPiwDzBqVqemHtqXRa7PkSAEz9fwiCVG2PJ796qUkjfSDgsWsVBeccZHTCLxDwv6rej8g8a6jjdWpiqrv8",
  "key19": "2GYg7kuhZyt72DExqjvhmP7nWcmtGSv87tMxZEyYRisoHhjg2fLRiMVUtmDQmcCFK1KVhYZkmMpCgzEo353usFMU",
  "key20": "2GLhneYpWMdBGD5tCPNBofQhU5oYMpAtx4jeRWoRBhiLLAZmWvfmjtJvCP6aPidMwhf3aYatiVxESJB9tTSnmQpy",
  "key21": "3yigboQjvgtU9Mqzty8yzJt99kmSrW28YvYM1eYpzzPMksbihFRJAwu3GvhDCz9jK3tmFYJFRB9bNtduQG9hNHAP",
  "key22": "66yDuQt5WvXFxRxCSYFVGxhm7oA7bSnaKEpbkHNULbra136N95oChVENQ5PkThERgVpUEdqjbcCe1HXbzmc5mwBt",
  "key23": "4kVMZXC8PyGg37TaN2zNcAdKhfyu2yiFs8WYsUcx8dY84umbQfrv6BFdZNeaUUUzJon9cHpUDxYtLY1FYZpcszPy",
  "key24": "5WwcdXqA8xboBX1tHMYtCXXDCPwuFyqg4y2Fi39fjgTHdkb1gztAJVmZ91EgkawuG9gmiTKYHMb3gcK1QmoPwqaT",
  "key25": "4MJ4PEyoFfvkmK14BZdZDUXo6M4nUJL9C7cK6Bwjh2g2UmvXiwMU6FySg1oLzxGQUTsKwFEAjRAGKqZFFMpu63rb",
  "key26": "3WEBbwka18NSoqei6Q3kATrRLMxLban9yp7crLMMumNTtpL2nuCKYaTWxxztdKfjos6acr252LuTZCvhq35EHmGd",
  "key27": "BBw2g2hP2bcmwg6u4YY3CtMyqczbv6AsHZbyCmJfJje8ry64FRnf8uifWsG6nEB2UoksKR5QTvddCmtBtRtmH9k",
  "key28": "4QKFZQ5dyNeXjhemKrj56nwpj16dTDSE2tVKntAGuPhtBGMwPAvQQpSCjfvxaw3A4vdKZP4X5drRfRJuTEdY77BX",
  "key29": "yKTi9ir6z9VXp722uAhCvx8JmtAPVLof4RugpHRKh7EMUSy3vqRVgviRZ6m5FjVMhWb6Y7ZQXvvGWn43jYtj1Nk",
  "key30": "3McLGJmjuB1fXfGmtFbFS9FZ7DdRLnEfZxm12DYPe8UQZwRBMtnwjEKYi8RPzNUxuX5AgWLBo22RgLLRbV9jhgL8",
  "key31": "58s8kga5hDoMfDdto2NGWoFvjQiqDhvf7AtmqrtWTv5oeTBiqfMqkqDNZM3ZZoGNCL8Y6UMZ9uweeyeoCdBFWAXL",
  "key32": "5kfKgouS8W8eDVXLWjm5wvKr5XthjZUpn5KrZ1DyY5DnoB9pnkpDe83zWLm8f3GimSRbBnTy3saCnRmCfPkF61ft",
  "key33": "TmKmfpXj8rNsotyw98cwPFsFtiy69tGGVXNp821J9THRPfDkdK8hDNNYYUHN8G2AzYkQNdTngP1c6GQsgrRbWfV",
  "key34": "hWokUrFg6zpQoGVRdhNsQgXhWsCtuKrmxAqjv6ABCiVQkY2avZhdwynSqAgSLUGawSofojq1crYPPiDo9Sf8TCY",
  "key35": "2W5kkjqYRVKNe7UQPwsEGEiffiB3iJrrXETD7vEBMh7cgJwZgBdwcbDqAJMU7ViK1a7FtBTn9u6X3rucNwm4mBSy",
  "key36": "4nAxCwmfYfKQqVt6XNQJgGMwWNzbWfpqmUoQ2hnwppumBdgZrexMEPoZAQnaDiUmPSQ7MRvNJbs7A91PPFP7XZ3Y",
  "key37": "3Dk6vbvJurChZr8qp9MoLpTQGK9D8SZz84JXt7S2DYpf3PNUn85rwKNqyPPmdZUoKWH3jWTp2mpB8Efc6aGCjGGB",
  "key38": "5YCE7VbGTG8As7o8vttEFLJhbXtg75iEQzzd9Rsi38HGVsjFiUrB91gfedBaGaRMLZWZiqjrvFfsvhRCt7j9Z8Fy",
  "key39": "5hxxWgPSexS4gqyqqfEGwUx4bmNZh4Snj3TF2KH68x2jLddgdu4MYZVEd1cfktHyUCLiYCWxhMqeUZWJTjNjykKX",
  "key40": "2mPy4RAQDiUTfEwjJwVVUbptLLx6mwgCgebm2Bvyn8RSxigNPkrwWAnXumeRGRzYcsR98vKzCxSSFYWWWMpkvam3",
  "key41": "2bVbYW3W6Sv6wZvKiYYtMESFgxbSEjMSRWXAe9aMPKCHfdMqQPenQfZAj4xPE9uofDoGNWYSDgvtbfbUvtmegbtw",
  "key42": "38i6JCzHvGDemY6xULLwhyo44JUBxKGm9xvTwUK5FKE5pvmVVk7pqghBCqhYLdkrhpAYQePJ1n2SeY1voqcyncQM",
  "key43": "2pbvxsvN2EhhM4kBPhSNrxTnENkSnB4RpZUxgk3236wm8uNmotcxhFavmuaXNKwS2n6PWgDQ3EXQU6JHpFxJAHJa",
  "key44": "2qE8KYrjTRW3d9PSLQTCsKQi6yxPkGkwEYWHn5y3PQxpJmMEVdBEv3dXusg7iVZPK8MqdWpZZfr3KF3cBDMTVeKN",
  "key45": "4UppAbL1FoCLbWDU6ruwCViNeH9787ahr6JWnJ11rmKeX34hzY8BJKa7rJyDi7nowhQJvYWFgf2zpJyjf3NTJ5b9"
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
