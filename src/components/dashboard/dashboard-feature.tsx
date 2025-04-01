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
    "54KsoCCv3eG1wJfDskjVpFowqRPdzfVZreqoQgsV1VwJSE81mTjRpMg6fpaHvoRi59fqF8ErAv71pm1aDVTKVimy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEAEkg1agX9TkRuZABZJY2tfKzABqgbYstZjohKAeJrCsLyq2LtPZuCFNTyckLD9de2LYQDTipziuHmPYcyhRa4",
  "key1": "2TXYEZPvLRkxm7ZjJ8Vpyz8KRPwkABQ1C19jKVfgEbNUhn9Yb7zsyPd4i4mF1h2mCq1bBRNNYYzW2Vggpkpneyoo",
  "key2": "rwjumnVKrXMSWJ4g3K73HpBPEPDcNsEVpuyJBrwr3z4qDWRc4DoqvPfYcqsh9nxbTT1ArgcPBuJ5pkzp7ehbJAb",
  "key3": "2q7BTSKTqLEY3mysTmSim5a9J9twxVLXUv81cGxXvamdg7yWEKdt8HgMg3nhBcJLZzkVVPAVZJ1dRsMvR4AU2LJ1",
  "key4": "3KujPjjHBYxfQtrnHZDFGQb7Ep8B2aMs4GkKk2Sw1D5Ls58Lm4LhX4ijU2RabZCWgYbmX4BaT1JqGq4TzqcGWSo4",
  "key5": "4Wnsvz3VXPtyBkaDpHbXEbP63q5rKSUVb21rtMADGjYAtg9f3hLU8CxUwg3RH9yCq2N3DJq3gV7KApLeMffRanHE",
  "key6": "5TBKQ8qU6dV8uLqWviA5oH1L1SQHfGvr5qnmtnubGpFyfL1nTALtRL3LNU7eVarz8WAh5PbX57ef3iqEtjgPV3rB",
  "key7": "9U6FWoqSjeoiNxLK193iMAunUQYURSYG1K6cLT3bQsTBGDfJMN9QRj7BQrf37tbKEn8Z1FDZKt4pozAdo6c3pwM",
  "key8": "3BNKGHLLYSL1ibX735z3nuLzXvKwrzA7hVcZZPB2m93sWrhAgF3J5RDWEMUhjLLoQEVUsGWo3M2wrFNBNXFuDVE3",
  "key9": "5jm6GYW5HD2kM67bueTFApLPK3yhosreEQQXy6VpAPJzGjYSCg5qnWCxGjeYXNP5oavKLmRTacdv5JXeTtjAvoTH",
  "key10": "62nyfLZU7VTDT5RZWNa2H9ozMs59UjvBMCtdjQ6Bn8CkzeZJG1UeYkJA8pEzTReQeX699xKHvwQcT4mb2heqaF8F",
  "key11": "3RUFt4pAUMoBiDPTjt31JkHTijVCZreihATVyT5K57rgPVcZUzBNMEXYBhDuHCrs1pY9PuCiMDk59YrHtzbNm4Zg",
  "key12": "2GytAFef7z9DHCV3Kz2EqE7CtrsNC3G1sD2syNBeBTUNNvJMoKd8GTVB5btnzHerAUDpEBrLXrvqB2kwsas4EB4e",
  "key13": "5mvwNeqrz8SYnFHHma47R9QzwM4QTTGkr8f64L98x33sCiuZRn9S3wbqjPfg6tsrVqYQwAVia4DbrdkigNWRoFwM",
  "key14": "3ZExn8W6N7kbximFcWqzptj6WVvKQiMaUATdNH8fYEwEZFk8cwd9BxbsKRDFN5HvRapQbtzkJ9vkefeyjPebCy4n",
  "key15": "pxB9MoCc2vsF4k3gMsFD1157gwNAW3T3C6gCKkTgomv7s1LzX5s44SXPx9srcmvPnb9QaReFdfFLBwjqqVmKYjA",
  "key16": "673ws7Z2rtDURaRn3nFJ7kruG9WLfMFWJR8HAkvtfw39CNSNEqkFQuT7h9G8yt17cfJJ9Gcgp8gf1hfA9ysSHtDy",
  "key17": "CT26q66pyv4Mc36CqziwBiY7AUVSxqoz5zKPf7y6jErNDGFWmh64AtxwHbTev9nkw7in1o43LM6m7sANcDZmRHF",
  "key18": "5hfnq2E3is3zfVtFhGEvnRBaEto46VyrZyvPKcggrCUREMhak3bfuZkZGDYU11KDXoFqj3xkY1anqm41auXv5TnN",
  "key19": "4k2hs7nuhwNkjQUW2xcqZxQP6yB5QLpR4r36hXet7YAuPajCrtzfhhq6Z4M54bJLnNPDgh1TsHuHMb5YTMk1yyp4",
  "key20": "36C7mmvsRR99RBnX8n1xNXm2h1vdLN5Pvxw5FtNej6mxwP4PnZfQrPUczfNKKuitgnnJawN4XiJAJXuZAPLvd96Z",
  "key21": "4Jvfffzpavw9V8e78YdZR4ci4pf8BB16GG7nApZPLVhdrqNCDv4e1mvYiZD1yJhbk7LViEMGHBDrw5RYyPJ8TD8Y",
  "key22": "kxk3MFFm2EvaLkR41Kb73vXtA5WTLm63CPPCM4Xr8wRD66QMT81g8TsHRKchNbo6kHVeecGjDa22N89uxTcVwyb",
  "key23": "3J6BbHi7yQibUyJmGRybnetdV5XTj3xfnbHSpLHfVb6sBXAnKqE4KTFmW2wMP7c7W5QwBERJy2p42PkwQsKvq13i",
  "key24": "65eNWRD3zbWU2jctzTiS3JeGjGiw5hT3n2rRKXx821HEsMCMT7TQwuXjpkgveyKFGJmfzdtbFMowvMtpBcKFvPJ8",
  "key25": "5kfHCDmfcjQduENExycyv1BJhsr53HindKnsQK85w86MvzfbR1dB9WJfX9raeJn33jLc35pzd4E1WhvoMmjBTvwF",
  "key26": "67eDbEQA3TmUCvgRkKLKWkqB6k7zo83wni7Yx4vKHF1JScm7FAznYuYY8NjCvjJ7GhT1VtNjNrGMk7MixPgnAsA2",
  "key27": "2XrSD4seH6hB3M8zvRbGUT2pFV6rS7G1cE7tUb1oqCh1Nfk8cmgJD5KZopfQ2sg33HsAdBxqomzJjmbpHvnXiwCq",
  "key28": "5RxxXGjpUbf2NXGWG1gYuLN4gzAFy8g1NPEYF8n7nmR7ZLsSxYyKcc1ewcvPbVTiQkupn3QFbNRZPCzef9HQBwJm",
  "key29": "3cn8YiD9DmsxVUEDDdopAMZmUCNttrjaqukM7oystgsVUVa4puMfYjM9NWS6zdC3E3U6VhJS4fZKr9xSSyjs4PF3",
  "key30": "qiwg8HeyQFggpepCzoLo8v4HyLSmBvuytYzTGWbXyNuB3fKBxe8wK7Bb2HCQPkd8gR5K52TWobq4AB2zhjxEZnt",
  "key31": "3QgERu7vQE5Z2QmMTGe8v4b7Hc7CSSqE9ePnTxz81tmzeQkEQm4pkX3Arrrt3XWrHwpX4as2Bzt659iEbr5ScwsT",
  "key32": "3X6C3o3Ar6fnABgtNBxaB1jFqWspgNJqmoXBWHiVKaAGda1gm7jyJSans4RDgzzn1HAPfQ4SVF2bnzFRt9FKnEuM",
  "key33": "J6tMeD3ZxfuybGz8V3wi2JSy6t4w3rARRocCqCcjDPUAzGo7u5Uo5bYbciAeK3EVD5GZdv5pmfDyFTf1aiFkWzd",
  "key34": "43v4Sih86b9dW62zsh6kvYM29sD6j2PBY6sGRc5oyRXEjAjDSwujYUz897CGq3ochHYHm6WhcatPhMVzu8XjXhrr"
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
