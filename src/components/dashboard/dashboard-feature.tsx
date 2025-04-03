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
    "4RpyXTLjnfJeyVdu2LcDwFzj1AUeFXAZHAXewDfbvE3T7rsjJeXkQnFruZBaM75XZPzjHeQdi8p3UhGVEm5MzM7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42uKu4vYVaJBkaQ2MopbAkzxm9bLH6CzAR593mLZmThNcBd8jVDLNUU3WSaJwApoywRsS4EuPLZHVeFwmJiZZY3f",
  "key1": "4nHo7Avczbvjr9cTZS56cW8xYDSWN3Emp6t9xK49Buky6c7DEqxj8eUaVvv4kWrNHBKYj8DUwhk6Mw7AsmZ3oNZc",
  "key2": "Wbte76t4B29XnRqEr6neyt5uNHu1csToCTvUKVbkSLJgEPSbJqCD9Adced3nKa1wwYqYJHMV7BQEoJfwBX7zzSo",
  "key3": "4E2QcsBChSaVgHtSPsJUjQoc9dFFyF1iGMoCrFUPjsStHu3EBCfZgby4JqJ6VJhA1zgEBFc68NexAR6KGtgcVsms",
  "key4": "2UUu8sPZHxYFoZ7akAV9mzeCdHbwmLZhGL4E5xRDYqYCyqoNuK5Dbg23jbUu7gW6WpCkp29rhXcLtoP9ANFhnTqD",
  "key5": "4XZNQHFMvXJFK2sZu6VxMJ11KtvuwyaRADT85PedXYanyJUx3tMeSGYQkxuKBk8GeKqZQw671RyyRGpmU7UmeUJv",
  "key6": "7FX3UzgF9nQWdBhuCiTkR2XZeqmsXKBDc6H3HVUGC7WhfrGRU7jxXD2b7spcbhm8FPAapJ78G8ciCAoktfvV4Wb",
  "key7": "2cmJ3uhsrw4YkixGrY8M6DfEcqFgpbvr2XErZdos9mGww7t5MixirWut9H69tHVvK5XqAwy7rwrXafc5H97jUt3c",
  "key8": "2pRNAcSUbtJCCN1Wf279tep2FEwCBccLpEquKJHxJy1iewzobTCHoxvbspxBtipboKkXaemYkvpoV9dbbCQAmv6C",
  "key9": "2hYffrCiXCsQm4rtsN5Uy8Deaxkrt8McZx8ckMe749CggFkbEoQhZYGDEXpqQztESe6TDFFg6n5tqndC4RVwoWLB",
  "key10": "2BBpY3BvDF3kNkUxVgNXfhbw4PYfu4B2PDQjLpF9H1LUj7raiyT92wtnw7jbgsKYyBd8hDFAXacY4XdTuQKVCoH2",
  "key11": "eS6xikDniNEr2wFJmSLqmTQBsacoQtBagEubA4RAR1qadYwHxwPaXDv1tNcirU7We6yrHex6yv4rsCipJKqgXBn",
  "key12": "46r8Ww4eLrEi6nowsjc7ZFYmnKETfZTHBAz4yQ1xrzAgTAzzffetiau81dNUcB86vyRKxSDPiFjoEdwTFFjurbou",
  "key13": "4gUmY8p4FGSnYhhd7nV7ntW4LsSXAK2NuYLcYHmN2ZxywaepHweLF61uV1hkrzgeStzriQfqPdpTGGa8mXWeVTM2",
  "key14": "3TmDnovJcvE94sMJ35U3iZjFjNRfmJuKEm5kvmNne5VL414ujyCwKYB74R1yKNxAvSZbPwbvq5E4ppEfML9fWBsZ",
  "key15": "446ANHWsAKPanGNCst2XLYuhFu6QUYesd79SqMc5zWRMW1d8FBx5wt4bake5onfbDpSW1Fh8JxxmSJcyU3HCtXMD",
  "key16": "59gU22jjBbRCoQP4GDdGC3VGSRe6Y3wypMQkpbmiLNJZCGRRgP1BaCpKrLDHbqzzfsohjbeA3RLkq2xLQ9YuuWo9",
  "key17": "5r77ArktkUqyS3xCGc9Hu2zvtVDbcJBZiy7iodVavSzyBBhJUvAAcnAim5sMasVM8eYCUPdbX4GysYLjA1kFQufE",
  "key18": "3cwo6mZhNESf9Asi4TtCdoiNaZAwuM4JiFXcy98Bnqb55RWDWWUkqFX3DZZAFJFjJ8CxVfiwmKw7NJALsPJRcQ1",
  "key19": "3a6gEohcrATz6QfBtiRT8rjCGMu6gd6EntqchgiVaxjRs2429v9ZqN24n2DpimWv1DzX5dusw52QFmKnqzP3VKPF",
  "key20": "3tLN6bQA1WZnWGBKRpXWhGc6JsE3P16SF96rTBxqcu8STB8fAWCLVm193PqnyDyNy126p1427NgkH2HoZ8WBPfJh",
  "key21": "4ygFJT4y74hA9HYFbvWYUJTNcBdfAK7W362qTZAtRTMRNZ7TT7Brix14Kw1x9QNPXKHPKgkTf2KgshU3a3rKYLmA",
  "key22": "3hwHi5sHQ8mdNBu4nZWz6cHnu3TCG5BRJGreJ2TCfx4XPanGZvgi2h4AXsJYYNDzbBZLC2cCwGsJhqQptr4kTcZF",
  "key23": "3kZvr2tZb59XLJojPUuUkF11vBLrMFeehxPiDhv9C7TYTQMHSYF3ChBb9bLojAX6wT6bUJRTsRCyrdFR6xPHz2Wt",
  "key24": "4MK6VrCuuZ63MVvWofLhuDc2EhvLgBDyCjTJqJt38M5U8BoJtz4C7xgaR6gGLgAza4hTo24cZLjsLuAukcuJ8Neb",
  "key25": "3uZsucRB1bThz3segJbiCq1zEUewxtenQmR4HLw29KaS8ESvqPSyaxxVFhccCvJFTSHWqqReHjRrGPqoMf44HaCC",
  "key26": "585UkgryTM3hXJHHLyc7JHCCLJqrJFnywW38ZDo2SiaXocXDM9ZAGuMMi7FS6RTLd26SUtRRo39acRB3tUg4g1VC",
  "key27": "5Vu6SuHMBqny3KHFKhk8sYMeQnK9hesQ4aeqcDC2RrcMDnaZGfiru9PN95zQZJMkbQCRy2F3dif8u4GwZi3qfxBX",
  "key28": "3EhbPHnJNg8oA389oxh8FWrgGqqaNE629jnzeQ7yi9h3ahJWaEVUZ7G5bvJqmV8P55uVAxw9cBnhAqBBXdbpHYyL",
  "key29": "u9drr9gEm7FaTaAQQ4oqpdeXuEhtB5JmUqL8suhfwtuhyNKrNgPyyJGrPTqiWm8TBpJrLMqnFNmJn1gnRCQykQP",
  "key30": "4TrTm5QEgNh21uR5fYd9GNuTnrLSSr6iajbr3QngrMoJkAdYzUSGngeJUiJYcMxqr2S7NkEq8WHVnuArR1ybHvJn",
  "key31": "5wxJ4PJfz1VAtsEa8JgSXtj3Gba6XBZLtg2cqYAntPqYRn1Y3p79tMVYorJtEb5YxLSdembJR78gUkzY6MZJLh8D",
  "key32": "5L9tJCUMUMdiYUSeeW1L3zA5d9sAHueZkf7pSsECRQNLXKSM4ZnbQhNXDaH4DXXqbAqPKFai1Q9bbn6vyKHcXjNU",
  "key33": "3yJEgruyRuiacpVFJGZSBp7kLpbCvUSy2NwZ9nFME195ep7izDUJnXz88Ni5tgTiM7hzsbfPGp4SQKodhkp9tCsS",
  "key34": "3xN795aXv8W2EqiFSwQH3nMFa23NPfaD2nj5bszwJLoLsRvc76A1q2SZApmYAvByrJEjGh97SMguN5zSwADfW5E6",
  "key35": "AyfnFrZQdbu7RH6MiJ15Fkb7UM3qH4EQABsXStXBm9E3ZBW5XmdsmkaphMPP9BLauLT6aMU3LpH7dtNhrhAxNhY",
  "key36": "2fDeBK7rsB4frfZeT5dvBpTzkiRQuDNpaxjv156ozzh87agDNrNd7FGVFjm3fSkNPRhUQt81EWr6Tkf62yBHFTPq",
  "key37": "dy196Pv7YMjTAh74ZdqDCk94Cg3grD61StQF2egy2aqUqqA3CeR3EZPsDABZbQxT1Wpo4D2j7HQNfyii3aFkbeV",
  "key38": "4hnuKWPE8UwH6XWX7sS1nyedkkYQYdKoMUvfWRSFWRiQ8YjqRhkYsQP55V3HC4uktSwhwNgJH1pNwt7gywyD7972",
  "key39": "62vBbu1Q95sVTXtrHhqaWSEmMEKpACiwiAsmeZ5tjJXGWh2Nq7NvGSSGjfiC1wVTfrfjnYJr1hyXyFixQnvdKECq",
  "key40": "5fXV76vcomQCA8zgEKzgEHr5vdgojwuQ2nJSSkXp4NAPaCVxj4fe44THBKETwXzdS4NpHGkx7iUkmAGXdvV36CYq",
  "key41": "4qY8dMBnyiQ3HEfwjveNV1UJtx16eVBzvtxcBDo5kHrQGURorszibq6eK9L1nYA2CasSFvJtq2Ysywor3DT8wLGp",
  "key42": "4mqpSiz3tLxvxkWuke7ahfF1DsdKdZHGWZy6UsVvmm3zJHaKkoiZMVJD4S885KiJWJPfL8okWcyqsZ8tgspbyyFf",
  "key43": "2816DjZMYThb3U7pTGRrzkKeuSXDKmFbYagiuCjtSQYa4UoR7fU9UGxyEbAAahL3ZebhZXNUtLm8HNNmGdqXBZS7",
  "key44": "4eWMYaLcs89QGc2FBAHx8rtEcreMAmYoAs85DnRNHpo1EXvVBg9gvMtEB9AJ6xhSsmLKq18TXkYsbGfHGgiGwNvZ",
  "key45": "3GXc1Hcrbe5tqFP9WdQQqF5xQJ1ziLwTbNkZ6qpPXhCzedzGz3Viu5JWt7zkCk4JTNxBKyDniwvJyjACVtg9JseX",
  "key46": "5hauFwXkZQ7TSJtFrdfHZ3Lhsciw1JznNKcochYLxUmhCLnkfHq3BdeFB8UwgApuSiRhzc56s9WXQZMjnfqFBX8f",
  "key47": "3rwZchrcZF5wCRU54U3VpKpjy8nNDK1u4oknnzU3L1Sg6LfYt3goZmaQdpfukSQCYQ1iDF8EUBJcAr4bp4pY88AZ",
  "key48": "4XxFDBoxzYfM2LgTgepAc557tfVqnZUbgXFfVvZQibxVw2pqJebjK9BP19L5jGj66bx5ocPuzGNcBZPubhZTQzpJ",
  "key49": "2e4iWY7cBqZ7mJWb1CDAbQ9dcp5LqUtwsEaugyyP81QqTRt2MkSdNMYKPLg7MuFsk23JRFt4nALNKbaiPmbFUv8T"
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
