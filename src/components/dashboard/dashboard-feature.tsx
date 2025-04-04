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
    "4XFWWD2xNVjH4Z3LzT1KNEDJ4zTWcVtB1N6c4h9KF7jyE6imGb8iKs5yw19NTPfJSWKmZVoCEXnWYsvv3ynxw5CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMJ966fHuGMpJEr5yEgYE7ZaiZLb6VEoCueas65qZLKir6EwtN1s9nMPWeqewxuBLCsJqi9ZAkRzKLG8SPUMs2v",
  "key1": "3r4H5FgcfFRubkzZW82ZBjtqRX3CYZn3zWGQodU9uRN4nXtkAk32DABJTu8mmN31i4QKvjAiPRQE9vXGGx8zzBNH",
  "key2": "62ncqZJaLUTQtGZEhwds7DjZCt15m9TZFu2To7UZs5e3gPmu1K3YxZQ5Y3F1kR78Ha6KEjhtQiH2CUQQdkDDRCBw",
  "key3": "3iAqLdb624Ld7RsjLzC1LTX3261d4UNuLRETo3ToSguzat9iF8USg6kFRPDpeWejGsYDpc8omoogTApAJ6DTKhnY",
  "key4": "4MBFX6Lcfdo3FuQgvv457qq7TnupV3mEL9bvSjfmG5RLJ5UVw7mvZ6tYBtV5imju3tQmzKo4Hmi8DsdJcLgpH1VF",
  "key5": "fr7ZBcjsC6f9BcyRhUyDw6SeY3rPDDw22tMR1vfnHVSxLPYTAQRgsUrQQyL7kJp7zi8T8up5NmBgixMcrJT4pKj",
  "key6": "4D7UCtWS5VmAMhbicVXpXB2pYCVE78NToxRYbX4STWnYxXykaLYcohF6SRzNHDme1MNKY2xviGVQPMJ99VWxtT3a",
  "key7": "E1A1yK4zpxneTHBMedFWMxsnpkjG2ykSe3vc1ZgmD8mgbQkr6QdSmJuXrJS8cfGDfC3wrEov7FiYynToMTFtew1",
  "key8": "wWU7N36LdfX6RJjt6VwipQvhK2cZv7sBSpYjTErmWrb2LiFgS1PWp6EoYsSZhu9cXScz18e8dijT7x2c9nAgupD",
  "key9": "gx8Y6wft2JZVCbuX6ictiRs61FzQ5G3Mh7fg3QXKkPJk3Lv1FLTVP3Tx2zDszWSFE4qsPzXKvHTSSqdUZVom7r3",
  "key10": "wsAgiurXpLuzC2LZxSbZsKpkhvFgtW3mnkNijHiSaG7yrG84S3UFeNb3XGNnBfo2z6McobPZKso9V1iE7ok2QRP",
  "key11": "2zpg2afYm2eMLNRPDzv5Nv6wBEQBZmJqBRgFHhL8MWN2gVv4jjXrCkbGucCKi4Z98Eq9PpbjxG31YpMb2Z7APtpN",
  "key12": "Ex7hwDdv87zcWX5hqoDdXehGuj9FUqqU7dm8JNdBUZSYtC1jvgPz7ZJr4buhJ7uDGcFZH8gH8H7mnr3Uu6qmjh2",
  "key13": "4XXE4zZ96LqeQ7EszZa2ZG7TepV1fGtTDKFDjKvxeZv5FsY3y8V88aQZUNuA5fPDvGdbet6qKTJWd1cisudjpQ4E",
  "key14": "5hRJBrbEPhMaSB7AD8cwgEaB1CpYag3Bk5SDJni45bAWkwaL44PbJvKhGDEp7xFuCieh2DpACUzHpz27m8aGtwvP",
  "key15": "2SWTNiZoo9vXrHZ4adg5rh9kKt9978rxEkbbEQgvegchaXiamonHf2ViHgKQaRPcP3CwXwUd6Cti3amHSs56F6RK",
  "key16": "3NiSNKJNm1BJypjk4u6ZB5tZEA2pKdeRHCZUmGAi8XS8SdK6r9TgweLNGQhqr5uf6W7tvsq7N3a2HFKzwuFnHMeL",
  "key17": "48JyKqvJFvTsBcGkSjQySdPRCtMahMAeBqdFYMpD5MrMvmbSSKAJWErS8Y9LJwcHcqo8fAb6VwGVo71U9mshFmns",
  "key18": "4oVSfni7fKv596BV5Z6gZfQ5VjBmX4i8xPeXX7RdsvG6JnpBQ9iBb2cd9BgvrwTq7jJRpKBM4QzKdnZSgCDLJDP1",
  "key19": "B9Q645CzTDu9xammNdR9Ytv5nahGtkocnAWSLT22D4Y32PCoiaumrboPbXMicW5kZpcweu8zA1aeFJSUZY4mBTW",
  "key20": "316epLJKLK5HL2PFvM6CKNXnubmV9h6MxxvekZTtwF4jLaGgvwE3hBZFBtSe39hDez6C3fsSyns6rusvfXZZYUJZ",
  "key21": "5nG8MSsYzhZr3Hi48nbQRKjtEk7n41v7TKGiW2nsrR2H4nxhmx7coniRPfX16XYUwEUw8NE6hziCcoK4r1EarsJ2",
  "key22": "3tfCEAKr58ytJRgVWD2grB454ttmRsJj5AdV8KTSxkvvrjUxaYQmgcvRtGJZRpHaQgt5RNWmRtZYJDxKapxUHGTe",
  "key23": "2NrN876LHYgAJje6eMw1qyX6xSn9oXu6u9N2uuyTBxrSfWSkAdmKSaNSoFDwR7LoX53cv3tKaJx17G1XCZvsWiCE",
  "key24": "25WaYumbe8MWq28SWcjsCA7Y4JYxMA8UPyXPx9McL8Vax7ok6bi5HxoEmHWSnDfi8VGGUcjj8C8AjCfgi7sm1y4g",
  "key25": "4ScBMZHfr4weoPYhncNqSzXUquiYG1gBqAXrFy9kFhEgQPCKeYkWv8s5LJGmZnw6ZDPLp5KsuSsDDC8HQmMLfdth",
  "key26": "4w2o7Z9ei7X7DNygGUN1ix1sUK9iaumNAeCFPuBmGavArTGVdW4uGvLVytF1B8SfTSNyJ7VXrtqvQgMBBmVgT9uG",
  "key27": "5VV93GbbV6ikZXZfHFBxKuk9uQxdKoo5Jrdz8WQzSgiG6mChpgHBLWszsQkqmmzDgWZPF6h5PPjMhkUjpE3PoHqe",
  "key28": "33Yrxehtg7YG3wMjRU2tVegVTct7sopiBpnLWcyuyqMhiRouZ5Deb5jrgGM4DmEatC5tyPw6inrXtk6pcdVD6FWH",
  "key29": "5E87Uzu5NRVLGGaJ4K1Ngq7xcE5d3Tr6Jq9Q9gCSo1npG2P5kaxXPrqMb2TdnJ5dQfvu1jgJ63yMrxvYR333o9UR",
  "key30": "3QdkKptB69sm6XaAPvcQAwr75fRiZyZRWgxzszJ5L5ZcHgTMN8vpSvZsEafQP1Ji4jX2Sbz4Lgb68FDxq8oAR5TU",
  "key31": "3wzoqBTavSU1kuQy5qZMKr95f83rm8PrkCo11ewz1T2p2SiLvxARNSysB7pLn77Jb7VtEbGecRMdSBz29KrAtH8J",
  "key32": "3EsfbS6C648oM4zyPjfvgGSmZToBrCXzCFcCzpfoVmQEL5JZp79hAJi79bhxhYQbcRqcMC2ix1wQkTN3qTZkwdHM",
  "key33": "3pnVJt2bdj8QfPCpNNBPMEcGoJjgCziJiUXxxEbDSBJEA6mbkrbA82AG4Mf1aUiLHuDFb1FykPT4bxBUtPmpbQwF"
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
