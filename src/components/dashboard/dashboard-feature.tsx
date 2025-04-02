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
    "4W8qqbSXbfpwUPTMsRhMa6P7o5svWt8hLW57dnBeyXR76eJkFzADww5NEi4HrhVmiAGipmbyU74pCJ8NoNaWi1ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwfU2AmFdHM429wL1x7xP3ryYVbJwKNZcgapahDtmkmke7onvsjUFqgg7WWkcoZ4fcEhuqERBzCuNrjes7NUt65",
  "key1": "2zVSdjViCYogF9SYYvwKKCtxzeBCt9rQsp65ExJMcxQznuovgmrBFmq72fKNbSc72yMzrDPDCrHYKpZpMkXyW1TW",
  "key2": "ssGffZSuuYsCgsxjGpmWprqtos6w9b7Jk75mHDmAKPVyMzAh8gDVnqn3BTyRRQpwVcMyCsKuc1V9VrwVuFA1vmt",
  "key3": "3cAF8pruuFeaY6PAzKMAWLGmMzKQScXy67nhrQqEyTdmzc1xearhepYYpYTFDgNqFyvNdASJ1N5wLqYmrBBNzoMi",
  "key4": "4768D3tzVd1xRgi3JGhrjMxmX9AcTW8isoJXiqhbjwBAoZuoRAYFaVo39qSFModHLwQvnJfuDdw5yFygMwWP11xG",
  "key5": "5UAZ5D7kGfg33d76QErkuRiYehxazmSKL9X5KyLU5QyqHSNxMLAtutGVDheWXW64E3VHv2dZj5ZgGCocXUt6wuLN",
  "key6": "S88y73hE2ynHXxCzMY683eGAKpGRLqZT2UZBiE1UjSBuqJQneRLadKGN1aaGFjBNvqgGm6vY7oDxBXUaofUqw4d",
  "key7": "2CDF67HTG9DpH549YCiVRRVRAPuvYdo7jSgXQmL6qAPGzHvuePM3HDFqN4BHsZXe2wtzSU8wyJGQre3mH4qjPc3z",
  "key8": "4EYyCKT4JpyVQQe9t2vwHfMSBKiY98YfQVrnCCWBuHsrm4fJK2k5cf3yH5qrT6b8w49t6cmpSrR9BWYNdTxLyYe8",
  "key9": "5dAxD4WRRMLNnCusQHbtBLqeeVKHmSR8o19Ao8WsiCPfntPs1D9TAH4trFWaWrEeE3UeGpYWrmzryiHyPNgmppUk",
  "key10": "2VYTNWqkq7Kw7LoNSgtFvcBDw5YhjMPCyL2MtZi8mA4TpZsnjGu9mCDUu3nZ5TBQR1rRuDntBTZmi1pMa1i8axgs",
  "key11": "567XfjiyNFQEeDbwEwHCNXV5XW4eSdzkD3wjX8XSSqAM2VsKeADPbSMS9dQ9guQBxYJ4j1PCdVfCXgKfxQC78gjc",
  "key12": "2AUohK8aCqCosfdX8Azs9vKVH2EQh9wa4ANTLW2tEmr2scM8JPsHc3xG819vTqpQwouZMdvyEWG8oXqbLHQUafHK",
  "key13": "5SJgjG9xnrVdsojP4o29b31mrHGkB3fonnB7MfZwGu9hc13qdumVorjsZFUyj844U9WHTM1k9xu4h2kkttTRRXQf",
  "key14": "5d534Ljb8pLWHoBvQup7mDoDSRMKVnoXe5eDB5P1odf7EJJKqMUhtvnmvFDw3uYqMENfzCA1JNrP47QCamSy5MP8",
  "key15": "3LBDLTDGKT3Frnskc5DKqErUExw3Qdnnt1XRbc4LYEnnzowjdPmATNges1GW2B4N7giuRgEhgFtwFc515TZ8CXgZ",
  "key16": "2XhKXvBWRZsfZ5GeFAPgbPBtVaRih4qVzZT6L1wp9ckoLFusHzxvejhqDTf28FHF3LfyorvXEMHDKcCm6NhS4UgT",
  "key17": "3NK92tmSsWJR8HxfpgeoxEVUp7efqxv8YtcpNcWEHWADf2RLxQHFHePHUC2ztpPTvHgSb9UDXUFHfs6gcfmN5yFN",
  "key18": "3ta7yM532Jo5toQ9SiBns2qZTCAB389k6ixLom9LNV7HrQRuHsfTshE5bfwE8dthBa2qGVyqhWJyXxFjPjDGWUWh",
  "key19": "555FdHQt2pa6iJoAdHeMUffgw7FKVvtTtNSYv34nkEEYvd4JLVbhRoPbNi4MXZo7yGi9eqEvHpLQ4Bi2kncmDbRi",
  "key20": "4tEBEyN5ykkQXgBJWVVn4LKWUwM93KKcwvDF2upTURFWfYjJ8MqCyqdMNCAKY8qZm7WxmvpRC4t5hTfTtU98nDYq",
  "key21": "4Di7KCWSNNx4jiHaWbbMb5E4YC6kjteZeTa5LzyF6TUhK9sL58Pvnb3C23BCxMdyZuErhsrpLSo4D1UVSiaZdoh7",
  "key22": "368Pm7RRPs9GJjGrssbQf7Rch9WXkJ7aQn5kokcrdEFwToR97fw9dx5TytszEaKXVR1f3SXaEQkns54mQwz4txAx",
  "key23": "5QTiRFSdv1MLvfZMquLjLn6NWWpkEJigN6o3UGZMXZ1P75KDwBZARrrYgMtvNGyzny12WFuXAwvJS3icwWeAxB4s",
  "key24": "3MXQY7yNX5ERuar1tHSSqoXu7XUWuQvqy5vWDmyiXCpEeE8CVBY1ew9mYkFaQoR21utWHHG97WhtpNAswUimbyfF",
  "key25": "4EzZv1co7KJ2MtZmpEf6v1qZ5KocEeLwe2PYSR3VwmJ2qTC6fxpph5oAJkSryC8FQUSKzHhGkAWo4khbd8mhm7bS",
  "key26": "64sn1ESwAq1PwC87BapBU9XAkdHikC4w88gAFnijvqSejxa1d9xKqokcMRxu1M76yRF6xrD1YmZPxXyeziNoe93v",
  "key27": "9qCYv6ncPfqnTFiWBYR8HXtSMiCYywex43JELdK2vccMEwmMntLzpq5wAMkatr3aXA1KC8sy6CyxceERFsoX8GS",
  "key28": "5hKpLVNUHpYzUqc75LcxzjKQ4DtQXsk3KRLbABB1xiRFjekfWanQG7PyuxYcrumXuE5VH57zC7Q5MvqKHQyxiKRS",
  "key29": "5k3JPwaUNBVMe57XM8EnTMP9qSyTb926rUjzW5W3cwuhv7BSZLjaAfaATGPyEiVKYFjczVi9ftxK2QWujMiEiL9Y",
  "key30": "4W1nkP8qKnrvSQm7YWMXxjfueUNKvTb74BxPRNTzfKXMoLzq6vQ66qhhjLeotC4BppQzyiZX4X5FzdtYNgPzNmfH",
  "key31": "3nk4kSJZDyqfuxGPtkBFvbV6LET6tHVALTQ9BtrBsn9hBQx5KLoVKswEjdaUsvr2RVZnLWWTwLW7WsiFax3e4WAB",
  "key32": "29y1sicwkganij4Rm43b5W8BirdwdzkwwqFeAgzx9X2NzMwyL687h7Hvr5mEYenfhWzoAdtKyLKZ7fX5gysaWgqJ",
  "key33": "3rmBjZjNTjEPn1M7fxFqqZJ8wDqWQzduJXMrH5nkDGgMyB4CtTTJhsqu6vJkK7AxjezTErDawe1KWTj2cLCHQoTH",
  "key34": "5f3vHUn6shTaJkirTg3EQ4tjkMZez4Ca1YphDPWMGLnyspwcrRuPjWkCyuLRXpaD6K8EFsbD6DJeiPppppbUo8Z2",
  "key35": "2s3uB4PCXoCHsqqwFt7N1GEspePPUJg231pUojKoU2Dg3Giskyw4u5byBmVQxgwgy9UZhYmCvfHd9QXFRns5mcTX",
  "key36": "rpoo2GZGVS2D7nfqEN4ViLUbFozeGFK4UAd8PSoMbe5G2qaCU1zzTeTv9GUKxddcCqiFbEW13uCKxKxENeuhhd9",
  "key37": "4QXXVvpWFqoFRvueEXpxLdcqkFbXS7c169G8xFdvDqpWktREJQ3JKaAt7DbvmpyqKDqtBzrttUzSKbhW8KNcZEdU",
  "key38": "kaxbtbYizzS6dEZb7CsJWczoKzYghKCuphejcxtwLumsQBTkmAxRiLAT95K9gcFheQeKvV5sd4xtaEjADdjM4uv",
  "key39": "4djATHVhiMNsW9NNJqxGUKQ186YZ1oimK26fQghqSGRwC9fV68zyWbh3fWfoyXrDwnndddcPE5sfBBKqrAsC9PWG"
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
