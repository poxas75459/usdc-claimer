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
    "5H1ZSpWTTwTNuwFwHqJqtWzZ45CR4saW3WhqAqBJnS7DD4cLY9ehGBkydwQjNVSmUKsBGj19AVc3CfgCNKo5cJVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ff9CCmVkcW1pzYdjo2nXGmfQ5r71DKqSrVGe8vFAV8ASoU94hEJo85PgXto8kxUW3AVRC7a1bCEqJ1j2ztp2VNG",
  "key1": "3vYX8L6ZZSMvKiXqVZUJP6ovhzsNTeJ2DftGfJ5ryq7Z32Arnvgkxrg5PNHWNwvCtmkzncZtCrWPGM8ZwYUhf4ym",
  "key2": "GbrwS2QQKtkeavuL4CeKEUvqg3dexGD3ajE9npujop9Jc4kJp96k9hWGLQJBc6wTkmgNEDbrqizVLVYrDSsnSHn",
  "key3": "U2wnMenNekXNxNG8xVkrJvFDdAcadCytfwuaufLkWtmgXdmhkgmpMxxUep4CveZyNEQjCA3xkL93TtfUnUVzNkL",
  "key4": "62rFWZWQ6RHxwLhtdga2uJ7t4T8stFe9DXJ6GjvSEGjYSYgCBvdK9XswXh4aUmiz3kxWpmHRF4iwxfJsgZiWr5yC",
  "key5": "4J9nroNkTQdyawYBkt99chxPkYihfrjkbXw7rbhfzq3hvHzvvLDgxb1LTDXF5LYgFiSVnWksgoX4UzYuf52e3Bmf",
  "key6": "4sApng2SmAJd1LGxGRiaa6Eb1AeUCijQ7Yak7aYipUsE1HzUGRXB5YruGpFAFHng6V5ZWw4qfD4L1WoNF1KRagBN",
  "key7": "5RhHFJuwG1jPxEdKL5qNvwz5Jnu91q8Z3k2RD5xoK4Sk5uT8mUn6Z546kUuc3ANw4PaTcGUxTt8wnfWrvnoJGb8G",
  "key8": "46fnhJ8VkcjhxepFCWbEgKpcw9qrssAGz5YtvprqNbqaQeDPpXmojGAXdsXiTn7caaqDABumDMg9kknfHJ8EMDLE",
  "key9": "5jvk13ATwgbfbd55YxrRnSL3nSiaMLomPKxQJyUwxrQKZz42H1LNhdvaKL6g2XRDY4EdEzavAjVKDS7xWt5ZjcWS",
  "key10": "4LBYCL2x2PhLVuRma9RFSpDp9J7eFGG3krkrFivkjwHkFhVrwugZgxg6iQY8QLvyCfMunGeGG8DY2Q1Ebkc4Dg5C",
  "key11": "5M3RjRQTgtPHVhr2kMjsGknT9rjSJkNeXg3ePmJwWa3qP4ou7tnJ36uBn5BnnkyB8prbLk17jHVwf37q5PqfvTdD",
  "key12": "2bFTB1ppTFeDK7fF6FhuDBQmsgX5mbrsrgEAKvwAXQQvJxSPwBhhQhhZstpFPapxJR2L1gchCqWBNtv2EAVs71aa",
  "key13": "HhGqWAsVkFUdefV8g252tEUxjg6cE4gjDzDDwuYfAYPNkjYq4Pu8ygaSr4L7cwJnvNYu8XkoxkzhEZWiXRP7eiy",
  "key14": "5CMvvfaSQetw9FgT6aGAWJ3YUA26WxfGpk9nxxJnWLqJFYYmGAQnQPgUHxwxZrUuYzyE2bjyV76g9QQuUwuvrpFR",
  "key15": "4ktWf6F1y485XEFaiVb32NU61AMAJYdzog74peCZssUJNxEjv8f3yYD8Jmy1gBocF8dwBksugzUmQFiNEVMN3HrB",
  "key16": "ZE59PEsRzk1vouvrpPWz8sMt7xHs5tCCT3nmY7HhKEptGhwuqr6YTRw2aqRbvrBdjsQXcoViWoE7LTzPiaoMUtq",
  "key17": "wJJsAWkmgRN9X7tDtDKD2zMtU2r1LpjsyDXapmWhVn8Rvyn8VR76ZNMDracEJYm4ygMaieV2Unep34cJoWNCYgG",
  "key18": "Dqsfkbox83WtnecqPXZUFJxJHJgRypRMURoXUPEB3cf65y4Exwxnj3hwMNNwowtHH6iBd1Rc3ibTsuqZWhgeaMu",
  "key19": "47wns7ccX6Qh1Zdbh5TWBkKmQoM79GnmLm9g4eKZ5tt4q5vSXtfLAD1NA3SfbanyYjUAo9C2dc6Cz9AyufPVc4YW",
  "key20": "5cCsUKBnNjfnqCRxCoEiRjHCjP9fifRvaSFu9ihBs4Hxmjwtt12s9JDUjiahMaVBeqXbCtJuXQrrGcgbhSe2bn7M",
  "key21": "2RSCFhUX2JQKEZXQtsi8448FGoprWgxBxrAbrVd8ttoRheT6D396W9EEt2meW5YZ7vT5xPGTNNko9FRgmhvawvPJ",
  "key22": "2qExt9QVS673GjrHoSHFYV1bNnibaotApG3U5RKjzy1De5NTQxjPxZkYwaPsPGwLkiuiNnyAhBMqDHg52LPMJ5ms",
  "key23": "tSDAGLXHDcLT5dNqgBrsV4oKZvUGXxSwAgARZSwQvTKH3gyGY7NWMNUW5qH79eX8ns5He7grK9KBj9bn7g6aKQe",
  "key24": "2uhxGWHpBopMyoadg4W28MU9FfbmVapZ8YnUUUmcGeY1dMtTDKkjhpnwQFXvB9NwMonmq62MCq682fLvWJbcr3MJ",
  "key25": "5GMSZC74AF73viPBjWhiS8uEBhPcWvaKHsduboFf4z4NYwq8Ka5omWLV7AqNYbs5FUcVVN1NYXeDAnLr9tSXjJiG",
  "key26": "3Kiu5ZyS5PRyw5rgZwpruZkSr9gRFMh8XGqeMBTHrqd5peBAn1MrWyA1UvqVPXo956YGaHsX8P1Y65GNXvWrA8UD",
  "key27": "61VmGE4ziHjAzYLrm9tBoggHXmZgZyTrpPKmZApbG8wnKnk1bj8FxMCtwMffuwSgseymaxjG5dvQsP84eLZWGQ4i",
  "key28": "5M8nrbhw7ZSvUBY6uz5Tj5RcgrqJkGju6cMA4ap2pYcj35BC4iZbNUeHvGeDGpNXeipeUWT1CXSgttZSwfQPQv1p",
  "key29": "5pdS47JyJVDaSxDzkwbYRweRKq3WosGvf9WKCum8CgbmXm97x9piNyem9YaAtD5x1spWazk93GV1aTxJFmUMagwF",
  "key30": "5Cia9e99wKhaUwfnFDhKoVoUdPLNCjJ84GAFroDbqNceuCyLT2pPpDWokcxUJXne3nFV1GtsUYrSYYjhn6CACrAh",
  "key31": "LrWvgwrayD46fpAix2uYPh59fjDP8fjUhyhuSHwU175NXsRNwbG7JUFKNZK42WCdXUV1555Wn5zzXVWqy458bD4",
  "key32": "5W7itxJwmD1CVda8EBNa1VBw6WNvnnbEnNJ5phP7j123ieHfT3ymozXiTE64Gvad4TcL3u9fvh7BxLw7sTpUMRz3",
  "key33": "28hvmbPv6ctDYLchrJnAJ7r51Kb1GaZ9dPbcauDYYXBX47hxnZsoC6GUzze4v2iq3tztFL1KKn44odo64ehYYJUm",
  "key34": "34ZBfBCrtXnQc4Kw7pLzu4qoj83J8Vig6rvGAFbYGQFt9LvEcvxiKaWzCTYakPDbY3F8w66gLLYmwu4ihAXo5RQq",
  "key35": "66V9H9B9Yx6dZkdVPUj7YdKJ5EaYJujeveg4NmZQgSto6WBGP9kaHRWMPKtQshTAemFnZsmoFyKs5wN26RAu9zzb"
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
