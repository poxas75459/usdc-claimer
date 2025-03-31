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
    "9BTfG88FUnaWtcCpsWfVtjZTGHbVTbSBYbWESiBSrBPuCTHtp6znC7yuRrNFzexhDfu9GCdAxUqqK4tkoGbZcXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDv4hNMj3GN9f8wFBxVigAPN7FN3sGDXQH59YSKp4khudSfM8ngJXJeqV8cf52rBsuLY9CPjRjahrqyuV4heuxu",
  "key1": "4j1wAwcSxCMbqCwLLmvUqGw7SNuWPjfLgqjxr2xoFrtjtEvCi5FJWUe7AkasoCPeDXpWiPTFMHE9U75ZvFScRQap",
  "key2": "45M1BMYwC42RNyc5Ji3tNg3ZJjdNdpKAfxuivLKprxnx3GJGvCg1Z8zn44QtdySFGwfkCrPx9k86RNr5Ym2wSavm",
  "key3": "5nNRhBXRbPCn7UGEX9sARfkpLpUjQNrv39TJakr5qJdmiKUZgbr2eXtRuha8qK3d2eXYg8EXwgB1aMZd8VTCCjX",
  "key4": "6uvP1vBdB2K2qJbnNsicHrcZju44GqhfVBQej4Q2tUXKJDEah3nisimM1PsMWL4AGDJkfo9yG7C1gybgXURU6K4",
  "key5": "4PQo2eiTF9dSBzVCzatt9mRbJDhajtboqRLk31WkFSpuoD3PbwMSnd5DJsNaNnT45r3xtQRjHpZNpRSu3z9H1gwr",
  "key6": "BtbYr4RV5kNYqNajobjSMxusajau9VB7r6WXGxKbUA7FEgXWwmVzSZ9ut2bLvhVeAGYXn6Jf2FKD9R8ERVM4p7x",
  "key7": "4hoyA7L4nZizqrVKRzeVhYWwcUHuNHzZsLpUCQ12i5MtZDW58swyKemEYeu7GJJSwLNGGxmrbJLixXzxwCbYtqDb",
  "key8": "4zrS2FNt9xCHE4NPMCxxGMvSgMrY3jFRkatrh2Q1pWJBeAkq4ivfKmuh8bm4hQXjEMdoZGGUF3JhUSg51dADMMbB",
  "key9": "zxo2Lof7gy6fvKiryfg2DPFhwi44DUXbNvcRk9Vi5TrpTPTmETedBXT6AXiaLwSjz1fkzodMQy2y1LAhrzSQJft",
  "key10": "FU3qhrFn5iqnfEPMFqMMV79Q5CcQtmH1nFZ5KnUxivTo8o47Ywg4mxz1YxRkpi8tGZbRRHmwHhoiuhwj1taNn42",
  "key11": "631AfESenuqrBSjusjqpMR1bVgRasyRWAbMA8RSrAuN6bHGmbrrnTYhZhbZSTb578QrCxabDidbLQ7yBEv96Brf8",
  "key12": "325QCm4HMf8qdTJC1K2JG51SWzsg1RDJkJW5Uz6Tom4WQkoeNbKptTMs3vg9aHMwGVL8VUxungD1EHpj3FMP3NLW",
  "key13": "3J5UzFCVpQQGfryzCaiDDB5fBarRry4gbDfEWnc3EncR561KfVsM3tvyjBPP2AnoisNUmFREcsCuRXSQD21NXXwG",
  "key14": "5QCuLYfjpfgfhDX6XnEL8uFAHMkxLKUW9Lzu9QjMCUC5XpLpnJkD4chDUaFETLHwCdESZoY7zTPbCVrwNfdWcRPY",
  "key15": "2U89hcP9HFxEQ7Hk3x6MoSsjqMfYDJYAJ973RSYrzq3CbZP521jW71w2p8NB2RLsw1JzT3W3dFQPc1PjnygRKEnP",
  "key16": "4C5vsKxjLPmiYG8Z6qBdACaoTqtUd5jcBiZuew7ubGZG2mmJE15ArqFzz7C7iWtNMRHXjy9nV3H57i5faAvQyWQq",
  "key17": "TVo5PJo7HafjFMjYoqF7Tzz2p3CkGoiCiXie6W3Nq5JNS477Da1FMcLXkGQnnEQdj96yvMmds8JXEQt9srfJfJ3",
  "key18": "CwdcewYbppk65m2RzR2BpjVCyo3jRGi8ue8myYqMRGbxhwj98585v8GYAJW1HC1ywMPRG7fSQD4GLFo3hYbfukb",
  "key19": "aq7DnZCs85PgL5A3CUjBtNPpR8ZZFpznxVdvbomeTrTYrZeyAKNiUkRvE8KeR6yma7YTGAqjwa6UrL4H14JC7N5",
  "key20": "5Ko8mLWbVdgrLYu6dcXWLJJhA7aNRpoPyUBzLCZNNbK3vYcZzz59tvpDAafztA1hkX6RgovXFuFdDZevSmreuL27",
  "key21": "3Py8xrF5n6fAcCJRi8pX1Ne3pnLCC4PqzqjvHgeqXesbkvYatfAUHaAWrryUe9tHgrZ7GTK8LWvxgBihyHvZ91wz",
  "key22": "2btiR4AuR543g7JYv4FPKH2C4wmSJ2cXHhuSvruDKMHbd7hMwe6u2Qqk6hhroYzDod9rkPRSJ5DMaMwMtEpWov3Q",
  "key23": "SXYMTVaBqhejaR5NyS7BU7LDGmohopTeuxQtdTZiA8FW1t6vYMYkWydgaBvbA8WVzRsZ8mko5r4WjvH1mEzpWut",
  "key24": "46oPAJ9qDyyhmn3q4ZnabCCHTWyff1HdC8g2DBefN5W4eWfNBzYAtrJegduggaq9QX1rK8uLhuM2zMtFq4zxWS6x",
  "key25": "3WJNsLTF1265LZiTDnbpwu8sBprNLqiMd5yTRnSJkmc1Rkck89DWx2eAkjujkf9YVtz1yZVX5UG7z6JvaxWghrRi",
  "key26": "4Wach2CErnfuYadNjgwMRmyoy4GxAqsJwPvGGJ3vZVkuLhtz3PC4LHx5BCpi4jKWjSWZcrvqqsvGD6QyN2UMcChV",
  "key27": "3zx9D93rfKGZe5L1pQpmHbvp5VuPP67KwCGa9s1AVw7VB3tWMTSBZU9PSueWFZyzBQokGCRa22Cn4jnKf6vAgLsd",
  "key28": "3UhXdDevCduYkBK9Pz8s6uzJxoYWTGB6LHcuA3c4QRDGTcfFm9mCfTVt8Fm8N7PVqwmvYVHdd9JB6f31ovjonkgL",
  "key29": "5DeMfHzK16wF1fAg2pQMm5KDZi3ijqhW4bthLfx55LM36zLCPwXEzLFW9QMAtchPXxZZv9GmrVLF17nFAqfNHDEc",
  "key30": "5uX69hsEsqSp94LipH8hHZnvWod1RpMnBHsPKoTrHgSWzcY2wvkkSBW9XsQYQ1dQV4xt8xQChmFDtcMLebPuDbxN",
  "key31": "REKGMNqauN5iK8ruU1JF52pmJRkNu1uGqEqv3z3GazmT7eQWUg8EqwgiDHfadPykzvJhoogRtAncwX1MgzDu4ZH",
  "key32": "L2J4GGU6GuW6YgLNMFPARP4tHZXJuKaKcHrs3wyHLhP5e3bFyScZ2Mvz7n5cZmqkPZH5X626waw61VUKp5mgbi3",
  "key33": "2hcy5qtkJGKF6uVbaWfqFx5f6FgcML1XLLNhRzY2XmzyYwAXHAoQutHVLRoAzGg7WZ8uxfqwomMb8pbJZc2959Ye",
  "key34": "45wUsgSNt4rEhNwTuj1tB6f2DgRXVfAuhoogUyfTB5MhCB8vQ4pEWcgsqCtcKuN5gHiUnVXaGsECTZ3a1jpziZUF",
  "key35": "61MSobyDeNZ9ru6MBpYbVrL4gTRb89cMNjX3hiFvcuVsguBKihHKVCW1u7b79TczweZr3wZubk3NRmQRp22xbbBu"
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
