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
    "2RwquEsX4cVx1iirvLkqrdYcYPtHZfYwbMAJyn8aHFm6pN6pw2o9oYznYGsMxTwR3HNXmj8jYk6FepdHgqy4iS6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362rZTrg4sLrkE8aWMHjWNwfQQboGAw7MAHhWHarZWePgGq7SyWJoxL46oAJ4zBz7ZkpsRX3osUrWCmzEkios3ec",
  "key1": "4czcgj9UJpxa94thSHzaMpCYa2k7BZrJFwfC17Rqwpo1kCyJe5n1QoXZFbxVDR2dmjcNKqgov4Z1o6RCd6aApRhk",
  "key2": "5tRxhBNSPHPFfeo3FYGNxVtqh76dGe6qa7UAWintRCnACxhZHVTEHzsWhitoqAmg7Bb8JDJPSGbZ8cDZREUbEaNy",
  "key3": "nkJLrMPvXDrip1GqX3Q2KJdbAjdBdn9aPK5SumacE1vGcekJDTVB7UGWf3bvj6QAGs8Y53c4MBxY3A3LxVo7QaE",
  "key4": "3yCjW33rojx95nTki4g8x8izb2aPnzELTkkdpru1HuUYeX7Ekv2BvM9WtCFGaEaba5gq7K2nw68LA3rBN1uk3hXQ",
  "key5": "GrxNo98jMzsxzC1oiKTkbAZLzVNsqJeWk6pHbhLxzAdVA8GAp7EBHiuXLd4ANUkXitHw2K28gTZd4UBuptpNWgh",
  "key6": "3ZU5omaLiNvHSjmTcrg3rRA8vQMixF6LA1KBrBEae2bAc7iv273K3yBDz9zVbgT4uuXoz7FUGUNCo1omyvBmR684",
  "key7": "4C3JKEbZ2gycsyF1FTAEPw2vQwKpVXEx5rmjtW7raqDEoGdRgeSzDJF5h8rJPbcqWrcohvDgXmeK1PHQHY1eN1aZ",
  "key8": "2AZQrmdWpMWt887Zmyz32debr4zD427HBCktcjEtX61meTNFEx9snkGXAA8DZiTjX94SFoFAppoa1zHtKXXBgMqQ",
  "key9": "64C1K5mLpacKCUck5UmGoUUwrkiG7B5jKnGAWjmuPfkyAeW4p1Jt6bj6W3FtNW1nbTVWLjsq6oy4Fkr4aGbsrtN",
  "key10": "4UoSSpKsms9XCBHtcMqdeSSAriSNCBHFwSiY2bxuCeBY7Am9qkyEwAtDNJZ7pU1wBqDziCddkzYDQFnVYqZzLFxQ",
  "key11": "57zVFaAY72XVJAguogdAxPKNktE91uvyknw5Dt9vkUmr6157m4veEQaCVztJ5Lobm9iBBoZPuyasveYm5kKT5tJh",
  "key12": "2oHYY3CLeQ8Ufu4CxZ9q2RgBL92kkATqZhU3eeLATtcJ2oBXd3MduSPHDugeKbWxKBFkVCBnF6cq9xsFEFeKj1nq",
  "key13": "4ay7FYv5NJzFqEN3fo1XdehiqqLh2NLeNMiWKCsh6vQMgafYcchyDjziCck1KU8YKaUA15nYD3KXWu2Q5hb75SNt",
  "key14": "1mvWoWkgf3Khgag85bsw7ese6MHZQwdHapK2QzKH47tJFSasws86sPRkC7pYyrvKbUkNyc66px6MCauoHgRCP19",
  "key15": "FHHZpZ8x2rMZQxWtuKUmES9LE1XSXvArJFP3cmMbqUSDSECqrmAhXZM1GqYPCEYqUyV599NBicch9UDpmWiSv5T",
  "key16": "4arWp1pT25dxNxzRysqcxKjbxi1pF9vSa5pEtXq2wVdbpCeqywsisLVZEXw2xF988bq9q3AsrDBjBUmEmSQM33Sc",
  "key17": "5T5vmTySeKw1612xQjCcXJtG9NiRH8Yh1zxcgDCqFtVoiK33LjC2bDBKCR1JBjnEqfW8ZYPghA382DrpC76f9sEQ",
  "key18": "4kQmtQ1ki87B6Uf6JyGeE9imiaGSxhPbyCDQuxPgcb36KwBqBqcaYE3ryLBYuw7hUpHah57S7NtFqsxQwuN9A9Dm",
  "key19": "4PU4g4ZfcXXHzKnu8Tqp6DUEjpyAncB9tsgSCU9mm9cVgACbv3McRFgxHDMmTKBvQj4mxbiwR3sy3ZZAwFmF1L99",
  "key20": "Ft6YBHsGdxWnAcpzTc1zLZVQ5g1eU3ENLRvguJoRhyV4GayHRLuT3FmWbYCyoeJmCRTJ2V4JPQKas9ixW8TeuPq",
  "key21": "2nkvcR3qCa6hYn1tu6aP2Tf1mfJpbpFetwvbjHDwZnYxzMnMnfh6KYPjbbK1PwfxYZiwtY6zA4ypABfbopuqPu4y",
  "key22": "5BuRVFMmNgpVFzAR4PhNQRH1R3CzMzD3F7b7GvDrN1Z1NKqhpNGDHpaF8FkEkYBaks8LjNrQX2YKuQP4ovkp1Gtw",
  "key23": "3WWtHavAHjGR6vo1jBuiPJeT3UncKQe6225YJvexp3JcBcaiVR3gRpzrXYLJ4RR29AWMnmzPNUMRG1mfRD96m2Bd",
  "key24": "2drSiXDsvP76BmUgZLGh4eMmuSt2kcCbAHyjSTbC6nbMLEXx7vwJYf3R52oct4upJiGAgBS4ptBfWbAXCxUUC3io",
  "key25": "4PY3RZB9B2YXe5sU3q1YEg9WGRjG5Puk7MkK99MhxZoLX4u8JArj9GkxP81EjEAZ5Qa2fZhsULH2TzwYQ2h5mZH8",
  "key26": "PR6dwN9SKzrAq6fxiv1caNnVE2ny95qq7jjj6EBbMKhzDiDouPg3BHsbH46JXWmmZ1LchyY7WxB22MRwFjxJ7wA",
  "key27": "58mMJWsJUsgMAgEkw1Jp8wGAqZQRx7TGwy5E7pUhcMiydLPnJfUMhv8urTHgGeRkvymmcndXBuz4inw9YHR8Juji",
  "key28": "5dGhm5zEAWo5XuMoabRiTPCaHYUcsXr5tuedXurpiX3Lscq8AyMbNxuhZjTBbzWHsrxCUN74iNznqgG8ZRkH116M",
  "key29": "3wxwRvmUHjWs9VzzEcMR4HegXsLtYsxrdHqU54fAncCx8VzHUXPDQhj3rMxSLM6GsW5YQxm5Wrpada1amWCrzJbZ",
  "key30": "5ooiNrDJ2KvLmFhFFvw6LoWiXixNjdNPKvZGJeZt3MpudEaYT2p9ZXNhJhCASz2LVFCv3TgjP1LA8hmFdhoLaHnP",
  "key31": "3wGHRcwSduGBk9cBEFCAwNbJn2L3RSercMT3av14weikFbBL6yevBajfx954AEgdbs1kHDHDLjPLWHUtFek4SfFB",
  "key32": "3KyCHQkaHwppHthMf5gJhZFE8P7j768T4zKvYvqGW4v8NPnDHh7GcKGC8tQPb1wGeJcxU79DTQ8umfFE87RBU9av",
  "key33": "3HWwq8cbTvsPXwZULVDyZyeRxFh89CJr6CpxiqGguBTipNaNmwB7hfZQTUA641NuBuZoNehnYudF42ipJ7NFpaxN",
  "key34": "2Ao8G5C7G2brgESuFiifaxJzHCrCdJzH3yusMDuw7yr9ZrmjnnzVyjfh98x3HShPCzQ3jrmXPoSNhztMqh9ktnX",
  "key35": "4E9KNofqiBmprv4so4WSmvArbHWQtGrGHZ9bk2z8WSJLntNxDQvReGUG8PipPjfuwsxfZChReWLv9nJZpeFh5tL2",
  "key36": "4monBkanQKnWJ8CKtK2eD1YjDVhHgBcwxbfbX1NDgzmiJTysxWLX89SHYE8kr74WvjgkoPRwvx7HiNVLNB2ZiVGE",
  "key37": "47hP61qns9QpvYRXgC7R2viddxX51TnWUWpZvyupSStvpmwZD6NiergfMHYmiJWZm3zMseQr8oDGSUkPfB9YB55h",
  "key38": "27pck6QCP4YkHdBBTAv2DbKhgP6BQZQmPaygT7kay3cx8QhG59yNJZPauDWovx56HZSAoufBbhM15yYfJqepeSfB",
  "key39": "3No7WgNHXZvoXUwMiLiFdCfhMQ1rQpjTTxcepdCT4GvBDGkP8Yvetm2K8G9BygbdsXBdShQxQcicz4s7GrZpKqcL",
  "key40": "5tre1Wyg4E7jVDxmmYPoucdHRLigVEiNtVhNaVz23WzQtxGYPjLCLoz7VkS7mF7rwkPAw17mCaTBKpVTPmyjS9sG",
  "key41": "5LH1ToHLNUUDTT6FjTByMbYi8G531thGnwk9v3jsQUTGxdnDALx9wreFsGDiZWUQ9iWJ1xWW4DMyAomHLB66K22n",
  "key42": "2Uv9RBdpvvy7DHE1gh8Uik1fMaAk56ZvpNmM5rZVLWDTMko7rsmZKy1sSw8DCHqKvxGTXJg59efxiCeL4YsgoxKJ",
  "key43": "uMNxNF1qT223RtF6eikeSNtoDpoVhshSX1Lz9qRfLPKT8C7zPgDbWj5FGvcM9hR1xMyPS9b6dVyGsioYv7SFdaB",
  "key44": "3HWQfnS36gQJo8ocD38gs6XZy2v8A1yBgsbmXT9PanBMNx8jE7SM64NapCdx2o2ExW59DygJWHpCsEKiUzDL2zWd",
  "key45": "2BrjX1cxiJAFQ6iagj2mDWBnFQDZvCgHXLYgbdyfA9TPq3twuEU8uJ5VSv6FWNdGgR3nG5xYHgHXZKuTXyPpW8CT",
  "key46": "4yUave7qxmbzkAKM6QRWUdBWhPUrTUbfepZqvHnDU4ws7ohezWJSqxD8AsVAtbpfUcNxWyMXmMYEazSybwv3asui",
  "key47": "pK3xhTwocc5JFZHrj2FiyU65nszKw847XynWAET2de42nYBXoGwiTc9Gj22kDbBueFhvv98cJb9TLWgVsJJmZLX"
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
