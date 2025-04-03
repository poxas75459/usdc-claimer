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
    "228hA1eL4QLefKwYsDFa5VYfvfRg9PfjfHTLV5YndeQS1oZFvRcAkK8EwTJCkPuftjL4L22vnPEG9HJDywSJBs1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxUusvnkxRWznR2z3tLCRFuyRvcY4Uoi6TM3xyH8iGVGA5vFt3SMf1WaKBzCzJLQGVJJTXUeEtUJ6wua5gg6ZbD",
  "key1": "3fJCoTjSkMdoTTzf3NXQgjgMkvrT7DshSPJLpAzvGvkuL9Loj7BdZZk94yU7L1cTo8qkdPLUnuxQsq8nY8PDNf6k",
  "key2": "24xS6WcSaQkEHcHKJdyfgJRZqaizeoYrtV3GjNGk8Q6EvHG4o4ucVZjvs5t4FYfr153byafibxtZPG8ayrHiXK16",
  "key3": "5HrzRzVqE2cgAU5asW9nHWCmP2q1ZNP8kxfUDfV7A5oA7h1vPJiRCw6Yubiws32H5e1TqhM6euV5c1E1H8RZEc2q",
  "key4": "37cKEQqyph5e3o8ZQyiNuAVnN68moC8RtY4v7gEtxnuobwFU8YCRJT6XFs1QBd6zESqCR5sGTz2rakktne15qDyr",
  "key5": "5cmcQeKqwbWmsuGVzEA3iGUfFY2kZ6NdCMEQxhDD2p1bZsVMGbjJdVB7X6L8ajSKfFzSgkNKbUJHxqDajeEaZs7B",
  "key6": "Pve96p8ivyvWCfmr1VhhQ2DRcSNS9fwSzNcQn8qPUcoESPhw4HLwznF7RscWyzsqkn3hJYGn6QyRBu16eD6YGKf",
  "key7": "vpjz8AP5ZTNcak6YoshbyZQE4vCANCepubPEEpDXSNkx6iG6BQnvoq2NjayccGsz5b4puVFZvokHdRCur2AnrNu",
  "key8": "2EH4obYtW8eELMjPk7GqY9VYS1tQyw8Q6D7keoe3Z5RiNMEjE9E1cVmiUqPVaQVxb1tkCyrsSRUeu14QDvMWhCqw",
  "key9": "3HzHDTW8QiQtMuvTodeuNK9Uk4T7fqXjoKMj8Ee32YTXK29iQEFzy6UpEBXaH5EKYzvuN68D9MbstGaDz51thS52",
  "key10": "2tZojJJa3AfEy7eKJ5m1tPHsujzQR4BggYKbpaKJYSNRvqEuK5KDvcR9SCUJiD8zfWWYbmAGK787KS1b9zpkQPEZ",
  "key11": "2yupN9V4HhwQhLqkXNB6DtaXQPxjWyMyH7yNo2RY2aeSo2HAwms9Wo9XmFtTYdzfYedfB6sFkmpUqiLZdh1XzXTR",
  "key12": "3kvRjuBH1ZwJSdhfgq8rNtqqhMoGE5G9ENJic3DQkEEPjWV5puFeDTamu6teydeCY69hMnWhK2EqqUQUwLNidR5k",
  "key13": "53MJPf7aNiJkpVGXrbUkjJ4P7QmhjPHTaPEd78fpFK3Sq31Nxoz6SsSMks3ohk9CZtUR4eAHeAkkvdpcXyJjzzbr",
  "key14": "ZR9Kv8yksmkFqz5APsi5Sh8fNDxyY9dkXfG4do32GhdAZHVrdoLCwGUB7hqMNV2X6Lf3PgtbkMat7zg4xGKiHih",
  "key15": "5TsJ8azAFvQaQyqGfaQHkNnGigmXATKBAHkfoSEzVgdxiKnsHYrBCM3nFawqD9ssSoCRyXtfRZZVTFvSne91rwSV",
  "key16": "5B6MRNrhXzY5NMfb1xU4tEjp3ckFg2vcmiDsbA7EwemH1sU2bF7PDZCqn4PBQfNUmDt4y7KgoZgb3v5Mi8wXU47r",
  "key17": "5oHsc4mcSACXpbrpdKau2NkdkWPZQENFzhzwB1GVJ53q7buLnCZMwweSQ7p9G2tGTK1d5EWTqujFQY8SncRPjkwf",
  "key18": "5gTk6KfGyegjhKjz7AdcwwJ8XqoGshGNkNss3fnY3AEnRqnNPEsJqa7s46cLBMhZEGvWdbL398Kh3fXwd34S5ZnU",
  "key19": "5VNzeeeXMDGiBAmMtZJKWm1SWQ2K9M3LPcAcfgLvS6dqUJrqe1cQgXPGQBbeCtxRxvHzApH3FYLJ1E8aEw8VBdoG",
  "key20": "5RrRppNfXCqQmy3XueHVhBER6eRH4Y5U4q2DLQ3WFbijsB6WbejgrHpytEobeA427oTU6pQ8nTFb6NyaZFFJEeJm",
  "key21": "23XT4PhtY2E2idhy5zE67g7vB7b7b3aUpuB9AxscKYmWbmT9ZQvyv9wGuq2dqbiVgYtsMgqCN3bK6GNAHmLZzwfr",
  "key22": "5XY6k8uwrFVoy7gPK2wkhdCaZ4yEqKcQmoPZfCW5NNmtAXFEome6qV3yh2srVu8xFNARip2YenqMUAEmJ49EXtv6",
  "key23": "63RbBTMJAqtsHMg7gaQUPYeCi4S9JgqjeAjEH6Li2TvAk6FVXwnLTyDuzBWhjts17gURRuM2Q52LA3xXrwvZtZ4v",
  "key24": "2ATmcMEosxsBHrCo1v7pcWWXfncqiQEqHWAt5phMAPviS5DdCkRVjheji8z9Mz8ZXcEFZiNLjDhkQwyo5bVGBHZP",
  "key25": "2zZqkxG58PMDXZoDjmakss3hwAonNncwGeWWPp9sb9JNDBLG7BHuGQd188AxUpQPY6NHqwv5T1Mk3EDA8smHK3We",
  "key26": "3vjikPbhSkph2ThzD1xztjebqhaLMw8uNoFb7Za3Pn74gZmXw88w4sgYErMcFVdwDMSW7Bb1QUwCmRKfEYJgfrht",
  "key27": "48tJrzpNKQNQunCuQCFcYUpDyE9vBy4LQbEgnHkD5JevTCxcsVWGzWdnPbdNKHSBMxvcg2UVVoABUV61B5UKHPrU",
  "key28": "3LkMEcKEXHLhrPtQmsbytHAEUDaCJwrk5w9cpPRRVRqcCuHiALxLSS5UBrL6Bgz2kUbaNNQn7B2GXK1jz2Mb7YrF",
  "key29": "2Qn5EEaXHg5YNwiv7xJWtAfzmLRYfWq6jDXxA1EZ59qaNAMwREjPPQsdvmri6iS648JMKQeYof9CgxuDiGc3dHjC",
  "key30": "3iyQmm8qCXbS9dr24nxbURxE2W2Gy5GrzPgZqTKTbEtoZUEhDi82hNTHiFdtvwTN3S2VTdFe6SdKH9QEiRYaqUbC",
  "key31": "4Vopb75SCb7cotf2Wqqo7s8TDaC3LEkScBYK6Y52WVVKYKRYQCt4FzmsnEnxn6M1R2mgBvRyqicHv7ZdmPjYhUYn",
  "key32": "54TnWAeJ3BLJYZT1wbv9wq9gR2uGKqnjWBMS2GpXYyrQqaRo7bh3JAQj19biffGjuFCRzfQsHVgY2VoWGhKQmuC2",
  "key33": "3oVvps7bKmmAXchFYZqE1GZWdtAWdZ2SoHNfCRJ6g5aHtgnDAexkDSgAbqx1VqJoRWLoDdmmm9bmhZWqWV6PFGEH",
  "key34": "61HYYbcMP75ef6DuBaAtY953oVsYjfnJuLdRPUWZcZvEvmFqF3R4NsfLwYn72UnJp3hMGBJWeQM8b16FjYTqmBip",
  "key35": "4oRDg4GsiryQuNWfdkFggdJfiskyvu5FwYxUVBfZpgYF9p4DLUiUmVkae57168ofpaWt8egRpJ3hhnMk9DaxDiM6",
  "key36": "2irnKzm8Xk3x2Gsq12ftvsRGWiyn8aQf97YZqcNWRmf8GpKBXzq3Be47gBkpqFaR9iRTfNK1YtWs2nZR4jjVqShX",
  "key37": "3iHxnihqeZdQGDW62EHhUYRNjpCzRmcmjupbeKQ8gPeAVqcHWeWLHKvW1eQ82nxJLHkh2QefQuhBqzRN3fpPvima",
  "key38": "2bBDZZAT6rxfbXuHViWFstTsbQ5vUaKYRMu4V3j1AeBKAbpu9meWAv1ckU42wgJgXy5WLSXU5nY9nqxPFYDp3U6p",
  "key39": "27Kj3CY6xMck3hh2qc96UVcCBUoXyjFD2oJRzTDCsvmJ3H2WrvX4osaixWVhxMU1d811rbx9JT6MezCda9EXpyDJ",
  "key40": "2FgR7garXaeoCQF17qJkqUeJujD4N5nGMTbRGNGaZZiV9xBXJFeRMy29vYQsz1uxYm2kMLq42kD6GbKM8hrWETfF",
  "key41": "vF7gcbaUYTQbvaSdYZThpfNtHcqyMdjZn1ZhCtuypiVqAhxy7GxjJKmmkyjTgY3EAhR9oLYCGSc7U8rLa2bRB6w"
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
