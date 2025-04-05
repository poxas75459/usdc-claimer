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
    "4QRmopzndNsJEnFzyUR8skiQJTYSUgh7ym3QJT1TkDqTBEtTpMffRkAmuviEebVyhWefky1y3pD1omj9GTaJE22U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8ooh3BGaRnFjqkzRyEeM7M286sGJsDM3fW4u9TeYYecbivavTmUqvVyDL84ymMWdwT1zy1Uf7R1nqWZxs9Kuue",
  "key1": "5giYqgnXoX2UvqDLep9kqhYPU21QpncFiwqWNQMDuSvvUTZXteCMbrSyziazacSugzQ1efgwhwnY378vXAsQNpaf",
  "key2": "2bo2DDXa4rQbjcFEjU1UiKi3koNrHvR2Yi69RffsGwfpubB35NNqDrT7eGGmzbVpeQkoYphFz6LJSLFwroQzHiZ3",
  "key3": "2GiH8hUTqNhcrNJRgSyowRt8hCMRZme1XNyc8EphMEcdueHz8RPWg8upCTk3vqWWoUHVRNp3c9iNxN7jcQm4TxB6",
  "key4": "4DLdvTsZk6sAwxpfwGQDaSfMRovk6nYxcWHtomgachbLeH7qro7xn8pHAS4wNsHmR5UFpsyt7SKfxBw7fiWbVuBQ",
  "key5": "3BjgcFcsyFS5kVqXApq6thTutcsuHt3ddjmA5fDcAWFuHkbdHWMQegKTrRWm7pMQhFWWC4WmpBMB5dtrKe7r1gKN",
  "key6": "2FzsmS7u7Pvtu1JzvEpDu6zGJFEMyjZzEWMUErw5vcdV3npVJ4MZzpSMRX2unD5Tr96UAQwE8L6vYk1kk2RGRJG",
  "key7": "4QFyLxQajyPGcViAAsZgaqxsFirkkKW7tzUa2T9M8Q43gkA7hz5vVjqkDxnn55p6Yoa3SWYeLfGHpNJB1ED2F21T",
  "key8": "caK68UkV2KR9FB2SkzTzEgBrJx25tYp9Nsr2xrL8gDMx581bzRGPkdFKqj1gUW7xHvWoR1Kyo7FmwQ8GxDryAHF",
  "key9": "2zrWMZQh1jTSoYVdhSWr8LwfY7jRsnomCdmsuBUFAFkGp7sCAmiN7TvCbH4JQZ8ZaT3an5vRmaQ347evHWhg6o2C",
  "key10": "5GALKXKMkhY3v8XfoLMHVhhjfB7XDL9bG7eiLH9uEMwbuVvhtXgmNTVq7NRgSDdPMnnAGR6scBtD554AGfnfXZ6g",
  "key11": "37CnjhjTT84efcTMX8oNZWFxDBs2nGtsDCHayJ3mFEXySbG2oWSxtwKCDnuHuYVv3iguTEG5JFVDsxe1SAksyZt5",
  "key12": "24QfQgVTHRVvFbj55XVCa1Nh234RJuaWKSUi63iMYPpE5gWwdwH5fuA3dLXxVVuibtovk4WjAxkL61gdS7rWHBSt",
  "key13": "38AgWQceV5dKBGhpy3ErDXXPa9zqLYoqg9XFM7ULLmN85idz382w2KbFhsvxcqJr7DXM8asM1vy98VGwf7txcDde",
  "key14": "4pvAhLc3StoEeRWoS9HiZscVaCCo3biWDDDmGuRe9LsKxiVYRe8R674TTYkeDVoVeNGwy8bX4WdxfpSEAjqg7uKF",
  "key15": "2H4fBwf8Mw7n78tYWwUvw8s9eAtVMEf7ET54ZwbTY7MaaJCkspxAC5pGrmQM6xUoixrBKmVDbUFcG8YhDueQT8fi",
  "key16": "2NcYxc6RQ8WTZfmkM4bSNPiHJsQdfRxUnPC7vcN2AVAspmB9z4qghgKM9aPEvAh8jyc1UWmAgXwTTwcFCCe125ab",
  "key17": "PRoc1RU8PjNgAJ71Tba7jAnXEi1E9YeNMvJBdEEchvUwNrQeMn7oiXQCwRtZXBavrjjrnm3MEaQw58GUjGqVCgV",
  "key18": "JZ96owCJBtGUTytC3Kt8tJDZyGnPGHq6MWs8G9cKqEKdQk61FBzWHvCLH2EsojMtBu2i7VzQcWh6ELu11LhBiAq",
  "key19": "36ifTq61qtPxaPSE4JYzijhbxPWa2n5ShBNZzGaEfSKkiyhWAsgwZi7tm6CFxvAtxY8A1A8F3Za679KowHWrkhoR",
  "key20": "66CLkbzL3Ph5BMjpwZ4rBviDXsUV1ve83j4sJB1KQKiY7Npz5DToPSTvSsndPdwH8dbbDW3HQzD4cMcv9cPtghvR",
  "key21": "5unu8VoRqE8PWPuTwoRxX47N8k5hHnJigrGtX8JjLCuzPeCCxrnEe7DS8LG5rMnhZb2AJFtdFtdK7Cb6LR9GxUHy",
  "key22": "36VoK4LVRzc4Fyv4ruW3JBKJDaNWCfubF3pZ5pcvgrB2qxmSqvKQCZBXL31bwxYGSp4MthXMir2ABeXmmi5wLVpt",
  "key23": "53YJxes7P8g356vuQzPVt4LDzq5jd4egnLxfjgN3qmAA3dMGvnXAzSDCdjpMqnWogPJ4uPrwR4aPkEpkfS58v71z",
  "key24": "4cj9bUNSqTv3ePPzVJuiA18VPpY3MW5AiUTxeE43i8Y9BggMSDArVbwNHvtJ5qemspneE67EeYPPiPwngKhczXA3",
  "key25": "4NiV6HTfS1GHk3cP3G1RzkQ7J6gzx1gKN68pcCiirogF5dgiNgq5rbkPjLahDQgYsdeb1hyKuSEbZAZ7hW4e2WMB",
  "key26": "4hxfAjDPHRSh6P3K7vtK6XbSyATSyMw7DGvB75X8CWeYEB4U8iFuvhUvyjaFacJGUEL2et6HXMUHBF5jJNJ6m82G",
  "key27": "4RUMyrq5z8NF6J3SoBQXaHm4wUmYa7TBm9vZ4EG5pj62q5L1jrjkm2UFywpkXDnfyrAMi8DQRP9imADUThDvg2vN",
  "key28": "4eHd6dp9vapJvuAF6qeQoi4mjv1CCoY1ojA1pRdqMAjdFDCFib4K1nGK8LfRu4SCBBY2e3b9nXRjjSQT9BWzv4gh",
  "key29": "3AiRBeR4Qjqd4WEwu7CfGNzrevhH8jQF1aqdmpjGm2AKHWF2eKGs13EBNY5npnXt9tUSydorCnw2kPCwQWhcRzwU",
  "key30": "2V9S5KTbNUYsNLxMazpX8CYfWBgpkSgqvaUQ1CxMyLCzZcLEeELicnexx7bovqtQ3TWX6g3yvWKYsWPGRKSH2a9E",
  "key31": "5Uaez7XYcuUNegULU6E3FUooobA3ghBzcyHf1aW5NN13ihkmQdbRk9bkdgwLPLxDRCxyHXtsGMYkrhEfTx2xSKs5",
  "key32": "2SY2WT5pC94F6h52Z3xwg8xZDsugdPUPYJWzTNAvUM3xtFVJKBu4GpQbNESPSxQHqoEmtxbUMXhxLu87hsMys5yZ",
  "key33": "2VuCXqqvGNLazWevz1wfxEyHQpDEaGX4Pifhf6T1PtjHdMuMHRbmJd1NH2oBMF59H8hc5xKknSFPDbLpRcnTKex4",
  "key34": "5iRsJbfDwgrmiGWN821VZnieThjUr5H84K4dZCdXzTw8ZHSipdnL12iJitu65fAdHN4hnTcWpUzwnm15uAT12mbQ",
  "key35": "i2G3LkZBUy1SdBkbti98rt8F2SxfgJrvA1S2teV1MpsczNJDg68pKHscTTzQD5rkJt4zej9yRcMBH8TZuFr6kG8",
  "key36": "5DCgsMgtPhHwt7T68z8w4tUhXAT44TS9iySHzdc6ZLLkh4M5EXoUb1ZJc4225qhiuRiXpJbL6btaAXMGGKjR1jMG",
  "key37": "2twSDoPw6DvPbFdMZ7jr5Ff5MHELsSAx3R7h41YP7QyPrHY8uHgemayMfuWBzQyY7BUEQTccvaxbDzuGsXL9SNpT",
  "key38": "2Rr3iZjAqUNaaBXuoTTLFkTcsW4rAjibv8TkrRTvbfX1sazJ9e7RDfxYa7kxqBcZkkwuXENKt3fWXB43b3STzsKa",
  "key39": "4z2W7GFrWmbyMrFm3zR8GirGMVd1g4BpML2jeC87dhP5iQwJ2ZMQswjxLjMtVtRRV2L5SSSt48EpZFitzSferDVG",
  "key40": "2XgmyRZzyQAtXXfD2b8SjtFhjMtpwoWr27YPKkpLkmGJbz3j8pSvbS44ts1WJRbgCr3AHKF5mD4z3LBuTcaLCR27",
  "key41": "4H9pDZw3MicTvBxZVndgxiDsjk9bVxpSwR9sFYcZEzzMjUEYbQVdg8BLa6gTeZrFCHiN3Z7hVv2svg2drTFNi2pp",
  "key42": "3gUALiV6FRMhrJfc4akTvzqdqjVwJK9Bdmic6XxjEmFi2vGLtZTzzHodYYthCEwWJiPDU67xJXSK6Vaxyfuay9iS",
  "key43": "4aGyowuUTK5zJM5Sf9jNujb6rtts7kkZ6nmv5spEFXzakoqix8ZV6F9HyiPAGys6Fjte1Boi1SPauUfz73Pqtxu5"
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
