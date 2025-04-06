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
    "2eAS16beLkhgCYYW2k3WHvSCUhnaR8fz337Sz8y6Yx7DrMevgScA1QsK2RqqZAHaTWgdMqFCDMFkFwBiASdqW3SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1NhH39p9H8mY1v847cbxd1iCpjYTyS6XanbyXaGSM3yG5EWqySeVzNe3Ws1UfsvcUcHmsLwsnUFzk7nsYTCPT1",
  "key1": "2ZEwTdTDXkVUfUSvomJxGsqizpC7Yn5iJygoVXrv6a53DLkykHtCmxDcdCW9BfwVRLxstaqVaqRURnGh7PXG4GJp",
  "key2": "23xC6dGCtC8HJM8srWHRcJwG7aWFbLBpYGp2eonM5Fm5YKC8ZMkgxLRuVL3p39SBEnxnuNxr7WasNJJEkBXAYL9B",
  "key3": "4wKDQL7w8daCzrctQT19DieHV7NLneiYQc6g2FtTGjB7iDJumPgPKMvcCH7baGzbCKzVZx9vmWYux2GWL7hK7cLb",
  "key4": "4cG6voAA44XRR98FnfBWoDroKgXUnrGz7sPME2PsLAvhA7q5dgmmVNFwmDh2w9MpCUkQwV2DGaoKLyQ3cHpKZpCJ",
  "key5": "67UCDRu98zJ1kWyy4WF9bFJyLNQgTou9bJowY7FdzeVqei8LG2bEpY9q7wPmYDzd8bMb9hSYpYgmpowAAX1bpZXE",
  "key6": "3uAPkYuVTPtsUoQtdhyVvyK8Atq9QuPGbeYspsxMUcYErQLit2jGr5UxmMHPV5tfRRfh9fw9b56ktYKGjBWdun5P",
  "key7": "43SL3euzb9mxdC2iZ7zUAwRy3Qz8Lpw4kQ6jKCjFtA7FtzmgGTLH3S7Bef9aTWB9Sf6hPCM7vw3XmbawVz8phbnT",
  "key8": "4iczwEKSm2y3HtgA2Z3EgVd7gS8L6wz4omkw4HNKhPHNt7YQ7CtYFqUpEpBRoj8cVigoouCzRhgvTEgGb1ae7ikf",
  "key9": "43uHrpuC4VTTcoyBh5MMkxNBtdpvAdG6AjzghzeCknCGNwKGNPY5Ny6Km5h72UndMLVxevXYMyrbpy3Me9jh3Bhm",
  "key10": "54MxuuHBZSvBUbwZZhdeAi9QZZje2jDhZwHEVh64vGDhvcGCWuxPLwYjG3YLfuJcYPk5Nr9mwtkAd3B92P6FEfhi",
  "key11": "4SJXm68qmTA9erootdSjMMW72SNe4mf2fA9rMgSDKh8wsQc8MCu3Fad3Migecgidq2TrqtsPcZU2vRU2dd9ug11x",
  "key12": "64q4RWkRRm8qcjGhGHQrTgzkpQQfwCcgshThacuBZcxUAjUXsm8gavcYn3SXBdfbf3hLdg8JX74PXqiJ3NgjNLk7",
  "key13": "2hyEA5kMZZDfNe4rCCaQJSP9gAZtDvyV8uM5uEsyGQYxDC8ne3smDtjGtV4qam1pNz9oycPQ85vhfDvb4KDzEpqb",
  "key14": "5gY6MioTV22iYdbGngMebU31xJDwgdH5LURQ9E1hKqYw8wXMBv8dFPfuWo3vv4TFs85VQcbPxgg93oqgbnwvpm69",
  "key15": "eQ3kDCH86ULNWy6DZ2gAbARvL343DVFKFuKTwgL22Mr9Mur6qjznLQoVTAhmfxtoo1T5d8j9Z8naszgs85A63xs",
  "key16": "63C4jppc5G5Rk4hUFnYW7g1trwvMUA8b49QzueqpxKgzr6hsuoWXjkcA49ZrFjtC896R9d3Gyu48t7U65JHL1swS",
  "key17": "5cHPs7p169mHouXrAM5isAasZDPRYEaSVTNcRYFXnkEEKpEmdGRzBs9Qw1H3aAL8f6LjgZCVAgTGQgmZKAM1bTaD",
  "key18": "5iUF6bY1MwYoAgeVE9Xv9FE3QwLBubYUgsaVCW3FxwDaQAnR2WBS3ErKUxssknmy5TG7qorTkTmgKLijCp13MkKs",
  "key19": "2Ejvu6daoAAJCP1JFYxL2GmoWdfHBoBECxmRzXDyGaDwAAwCH31igCDxvoNsH97s7v3dWkcEnWAff14BqpwFLRh4",
  "key20": "5ikGJPszNmscZ6nswB6BLajoEPXgy73ir7UC1HbFJPnqDdXeEx4qCtK7BFneqNJPKiWzES9W4Z1g6tziHUG9LgVM",
  "key21": "UxjbUPHktXFAdR1VawmLRZ5w9qp51qQaCTKPncFjMZmmjWwyv8jriAWcno2WsSGpaJvCoSri6jn5BztVRo26iMs",
  "key22": "3H3X2qiexXUUKjxji1aUagHmmXvMwG3jHhnhTaMWcMm59ct99JwkVa4kbumfwyxScwktVQRZnnRAejg5hXiz3Ex9",
  "key23": "5fS1F2dEsQcMe6Kajxw9qjDZaK8tPfXoxhDNVZTmg5y5eBKJLiVHM8ZySLBFJaau3tUsWhYMAgD5BMqSA2VQbLai",
  "key24": "2fFJ7qoRFZdetoAEEG6BKRi2ZiFsc7xFDdzqUg4cXKe171h89qjoMbYmMet46vUg6QHo4NhwxNQuntHsaNWtYht6",
  "key25": "fMHwCrHCqhZ1C3VYa8oz7wzLMrdfMxYiuwCZxku5nWXoJcpy2DCMDPJ81CHduxetsYHbgT2eCLEMetHiCM3fF8a",
  "key26": "2oPojMiCR8d7J2o5cusr38b3dSzJrqZg3qzFuwpDqDdFTJdrBr18DFwawkXTs6fApJCkNX36iXMVYwYeMKkeJafd",
  "key27": "MVG6dBVetv2cXG12te1wMGxZo9twcvtMJckg19ASUJWxYR1UwRfpJbqtempKhQR2fuygYJT119U2B33b4cqHxnh",
  "key28": "5eAqZ6R7fuFqpk75RVTVooxk2ReDGTBGnSKnsN6sLm8tAtMm3Mt8s4xrWZAAMbjJFjXuXiAby8ktohJTzPkynm6z",
  "key29": "126RCoG8r7efvakNcxDF2FePSXDEkzcgF5XU255qYk1HvqBWYV9En6b3s3vX9GdX2RDbxw8YysLiX9S4hWG7arVN",
  "key30": "4HzrUVdH1TupZnA3yxQHTRcJd2cgAQPDELsRfBR6fJygNnnCunnxWBfeQoJp21DXe1rpSLDXocPTgo75YJPXNJrY",
  "key31": "4mtS8rmCnEEMuKKBicEQNYnhjFNabB3sxyQczpPuU42krYdYzuoWnNRPdcaa8CGPfFgHJLZPPJuoLZfxCwhfE221"
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
