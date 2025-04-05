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
    "Ead3qJy1L2HpsziXwGpCLjnP1iPQ38doHG9CCXrV6BviGjo2NwU5cgtnxbiAQ7Dx5GkTGF7JuUBesz62nCBNEry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38yPyEaP4ie1CsNAtuy3NQb1xiJYQyeDMzYeRMhuDW53nzu1qUqpBrHt8sPHRsvZ5N1aqtJ4CSeb3f32LNPRtajF",
  "key1": "3aghd6EsTz7PJpg3fr5xuAX3iUh8VSqcgYMDRaiAKB6QrMuDAh9FqFLuGsYh3BNLis8vPxHiGhizzzegCrumu8Yq",
  "key2": "3dfBfF1AENCVS7jf9WmxhXkfniGQ8BChWnvhtA9Yw49FS5eY35myxdzbqJMiouF4f21DUk46ZM1bHDoHgR5V6d9o",
  "key3": "41zpdQ2GWpqvxRmotbfnsuymLkWsSkvEBbwbwbic1gr8i6HLFSZAPsLY5uBhw171R2kuUrkXMHsCGb9DvcFHZ8b5",
  "key4": "25frG6jCBu2WKidgJhryBpMvCL4wGDAFtAXiP85ZPrwYGnfw1jG3e24zFMqWtC7XjGS9TH65cmJ2mLFbcrAD2BaK",
  "key5": "VDxPU7McKMgJwuKqkrnMnVES1zxqKeYBcda3anUVyqswFXBjUvWTSdSHigWF2cQ64xGto7SDmyZTAzVra7SwXp5",
  "key6": "SSNZTaPbn7L7vntEtXwHB82YQgCG5eYWooT5MbZdmoiDcEiYTC6K7J2kb5sxYMRmrt97r9uPq95xjWvdRHE2PZw",
  "key7": "4dRmoz3gvSBG5oPqAkSs3NHgoHwAMFqzXSkjaooJE4x94T6rmSrRiZsxpQi9EWRWcpN212yu8xM6i9S2zGAMN8JH",
  "key8": "93YTSqUvP8kr8pnBxaJvCPFy25SWkUsY41jQbRW3w2GW1JWM83sMkH9VsUUcBvw6M6vr5qpB5YZv2Rn3R4ftKQR",
  "key9": "3BG7z5mFgbFgimDm4DV6gcdzejWd1MzTAmXsz37Xn3P7qJqEy2NY81pM7ZAW6LKMVMghjr17AdAoEL23uYBZVyXb",
  "key10": "4dQrkuaRJ4q8Vf7MJDuqzB4LQGYD8ua6qAULK6fmxreS89rspBeeLTdg37cDibRfsibhQv58oMBgwdRgWDXXEafj",
  "key11": "4JfWQRaCv4wQHSSCYAEnxdKHXtrWW9TteMy421svrcDXFh8A5j8ahCvSmrCFhz8eYyaPvCVoWdtDqUuBuzCFXJjx",
  "key12": "3bGejM1aEZQM1muhz1CmDvfdh6j2TYzBCNQDAqY4BCgKwvXXiMp8CZ9B9YNWHMpzdxiihRTZvHCJmwiNbc4rK4ac",
  "key13": "56P9trVcSyhDux7qx4iWADLjyXSUxL6rsSkfCFKNMeB9JrFyaiu9CW8XdZ9hQg8RJvpjhuKcx4B84QgMDZU3v8XX",
  "key14": "2p5k8xF7UZCXkKgHp867RwWi5tyk7bomCTwTFdR7CRs9hg5U3DiCfFFPTPH6prkSZXWpPPetE33PRdjvG3PXCyLu",
  "key15": "3ekpWgPfr6MznHqZEuRWqnG38SpQVZvqJFvnVyrScDiDGpU9FQsAMi45P8a7xJSvxGHngzBDaKqGkDPvwrFuhhzH",
  "key16": "4zweaCz55w7zkF7nJG94fQyEraiiHfpNxg3zyM2rjK56D13guwDxPboDNXjpaUnYWyEgpbQB54rArwfc4FWV9YK4",
  "key17": "2r9FWhAg7433GssutJ1fsis5jnwQnSjzkacTKUhq6ZnwM1foZChxM4Wpx96aTfefL1Ggsa8EnxbHweZpnxSjXrMM",
  "key18": "2m86PvFAgaEqnjNxdzVB1k9gBqeD8zetRcwi1FcvjKbCPYenqnq7ZG8jqzH29kcNpoJzmAXx1x7xy3ZxbQE9c33E",
  "key19": "3a6HeFwEufyNogPGorifTFBtGq2K4U86NYB3q4TRVm1wBr2SCAizjhyhf3FN4LcWdvoz27dKez6PfHH65LXWBQY5",
  "key20": "3BSHDBk9wa35dqU1ZAvJeJttbD3K4ujthXd17dtZ8LrbWfS9YrkqjURpQ6iEc4LqFfF5xa1SQExQg7p4FRU1vXWq",
  "key21": "2n7bnzev5dQiQQbBTnyxVE7GHybevMHYQ9aUXWTuQKpCGeUpE6qDFhLzVYyTLpsemCU7m19UartQsSsuWLwQUpwR",
  "key22": "4D5aNsjWmEL9aoH6iLTT5Hx5HUELXS9jnHM8QwEq3nF7uZTfuDdP5yKFQxhjCx1EnpxENswfMN1T7t511Lv3fDMu",
  "key23": "4Fzm1ud2KyACvsKrLRnRzRfQEBn8PjWDiJAtV89WBbeagEjxTf14Z8rt7fLKWnYQNxH5JQcda2bBKvFcANQALvmi",
  "key24": "4TvBoTwMmMbEkxciknuj2HQ9y7TghC5JhMpKVbHZktWgXqmfgmhyJeuqNQaphg3XabVJeXkj7JqKnYDoE2ACMqBE",
  "key25": "yjjhQG9SeqTEz7qGwhzRTB3oWaSx5eYDDqD6qicAAbfHpDnXVR1yAiWkHRVk3pKbuMVGVJVGLKKpcLN4LRqswMx",
  "key26": "1JQnuedbXQUGgTaizsSD5q9oqRscpjfnGWxvRCkrz7fxzYUh8xficwCF32Bt9aQ1YDLUwdA1bVkeT2zd3EFzwiQ",
  "key27": "NUxYULjMjAG7mJvi4QH3BSXgY6m8yQtbWRW7JyeLQa8yeoxx3ZHEjca9YV6ckPqWhYtWjqpCduHqTsaSdekBMC4",
  "key28": "4h5kodVRcuW2FFWQ5FN9bPVzcEpb4qfsYMWNSGY9FpMN3cNT2E1srS6ScfuJCc7J29n7uxNv3HeQ16jXWHirZPhg",
  "key29": "hPDwaymkqPgeGH241erAWDTD3maNe4He8iL1sRGUuFovUgGH1UdzwPZq1HGD11xcavU5v2MycGvQahPEqxnJjqX",
  "key30": "5ao37BqkimZEUigQF6QcD8VExBYiQMPQfPsNBBGJd5jXzPJ1J4w6GShnJpCQVriiUVaTRPBruYuoG6VSVjLpa2MT",
  "key31": "2wPN3mkZEm2ZyXZBUXFoZtAHF3ccxh3Mz1KX5fgYwE75ymiZUKwcWQH8UnY3VsUg1s8QAJFpzAW3UawHMDe7SdNR",
  "key32": "5VL9p5jyWcFnbywYYmEKiSWi95cRrPmgP8a3BtgK9b7u73J5UZDDSnha7ainwN2U3X9jJ3jzzdERBnwGnRDvUwAA",
  "key33": "3wQpifFKjSGQ19juXrbG8FqoJrpRxhLjh1rdN6Gw4SticdyQba3rnbgKhKEdNetrSo5GE8fwG5JNKsMxPu15Sb5M",
  "key34": "4bDWW5p1YJMh8STkvZ5ALDSRsBMK7saJGvohPjwzqxFyU5ZmRLKyXRHadVjLbLxFVgBa6HVsxg8ToUvJw7aYLkDd",
  "key35": "2WNuXc4pRp4xcL4TypMpXhADRg3SDbQw63xaGfceh7xUeDE8qARCek11hVhNqAfJd5zWdvwuoPPAVJtRZMkUWTDt",
  "key36": "44G32oithHdmajc9qMeQy4AhgfQKZLMPP2HsZ5zDhxEb2CstDDm6zqm3wzssfrfbKnG3oJo8ZzTALJ2kTApNzkBa",
  "key37": "3dtiiUdTeWGyhkfQbHRLPV5iLCjEVGD4wYetjpCFs8ddfih4XgHavkxCVKWgXp5KBYJPZ2TtmCoFBzop1T2URa5E",
  "key38": "5omQgqkUwgwbAagi7c7ixJ3Kaa1Z2KZ14G2bkbFZDwiAy4dw7h4Fdtw8WQJGY6Y2hQZXp4Ura1HbNzWitzdq1eBH"
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
