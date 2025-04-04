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
    "2aCgRUtHAJFL8nc9wdkrtjnV4Ru9vRRH8VGk7YLsYo9EWfGZp6C6U8zXBKxDonWSmYKutNka4tsjC7idLdPEtk5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cYQTkyUepCaapCwwRWRr4YQ4r5fd69tsttqLne8SSg5a8MBKsb5xVaqHhVTuqQwtwtESiE2AL2GzZqzs7Y1LnFX",
  "key1": "NwqSmSHtMHBJX13wbEfREdtGkcdWkQWHir1qTWjingVMKKqdZpFxTiWtn14KZEXy2yzrZ6kFfet4jn8MpGsW5Gg",
  "key2": "5aoL2P7Zntt2tpdUVnHT4VtZJ2VcqCBTUzdqF1MFRtJteepsxcmw8Cv33s5CarnwxVrKAMn4QHBr7ZHR1naYmKms",
  "key3": "5FLxsQN9i7QgqB2H4bGAARv3QP89frHAhgd92Uo9WGo1XPGmvsEvDidhaHih3csAcK3D2Cu4Dzh1SZoeB4fwq984",
  "key4": "2rGEL4tYZZy3rGxq1ZN1mfUsvAv7KTzYCJXfPeJSUzHeV1xiV8rQGBNQx5QL9hQYsv9ZU2n8Q6zfWcBc3GM6fYry",
  "key5": "5R7h25idmZDa1TfwbrD8C7G8iwuWDj9DCF7npRsLdDfaCtR4mg4sF5tRWzzdDmFZDHTUmoG3xsLqutiUo6YmWscm",
  "key6": "4RX2hknGQtgEZyJgqsTP1PCr1iJCg2dbHPgJRD6nJDax6iNfLp4M98mTXHtCAvUndQCymxk3D3pCn1Bf6fV4QUpJ",
  "key7": "jJrC9CGG1JB7cg1hALMe16tQ8aJM3DgFdt6NhKh7EgsKSEzkVweq45QcudRWcjj8NaYfsgzsw3ovgZ4D8mBNWLC",
  "key8": "5igifuXGbYwn3tzqLG35TgJ2Jpr5BF1NgSPLCDvYLp8FZ6hw6xUvErhmB6rjpct73fiqjVSWqp5fiKQjSauLD1Pz",
  "key9": "4YepKfC6vWWPoZehmEhWhum1LRxTDHksUXjVdvEybnseotSYbSdpCBcoqmXygWejfTKWzxU2XNSgtn5toUq7v2QS",
  "key10": "3Ed2yvF2rHPTaU2hJDj8aEcEoCcnQFhFSrmFA3Az49Dh2Zyg7V6DRDxNxT3KmdgM9kTXgirVM8dfuWxhkpWiZmdZ",
  "key11": "5E7HT4bL2tNECbkhigCgvqsunv5N3ZuraBqTd8VYmfePDkCfjNZQU52vQ8G4z6L2rzkag6hC3Bc4NTmtAqEWMBx9",
  "key12": "4SvvCkYM6uJakaUKxvMokxJGMdAWcWBa14eEJfJyA7JG6NNawRC1QE7Ft34gkkyxnzzHEfY9c6969sqDPDAXgbvD",
  "key13": "TToQdPBBqcyurWrqRThzzSW4fisYQE1MrJdaAubSfS1hws3eyopMLg4XMmpHT5reNdr326idFcmKur69x37mhUA",
  "key14": "ZjdXLXL2p6TFXgLyTTairDi2XLx7XbGXP4S668Z9Gauipqba1ovxUxq6P1WvqojXJVj53vqpU4Q4Wj6jqkD5ez7",
  "key15": "3hzmBvJbBZCjNpY5JJYP2W5KiEabkMvVUr1hKvNSCTMa9iGNEYr8P8DC91m8Yp7n6JRZcGQH9YQaAFqVx8vBXne",
  "key16": "WsUuCUcwKk9GfcNc6AqBcNMTfN2x28FXYMEF8eBwS9LVy9Unpx5SZ4U8jbsM6gGZ8Ei5HmMw1cmPVhuU3qAbuKj",
  "key17": "4mPD9ZfRKF3z42bypbtSFMgbwHMcJ3JgmB11RQPhSDRYhrQ53w8RHtynH5r1fmijHeudWUnupiiZgUCuPBZ92dt2",
  "key18": "PDYB445PYcYZMhzp3Yzhg5n2rdm9KQDh7kqYbZ4FEStnk1WoN62DQWr1G9MKCjWb66VJGkEXFXymrwqEdipvREh",
  "key19": "2LgCP8yTiAKfZoUqGVHwQr6mEeK1Z5CWxyaFSrLWSTvD9rC4C4JFTbmp6cybbAqX2neqsFWcQTJwreU2WHrgBpon",
  "key20": "3FRYfTV6MRGc3QEvFiQspS4FqguCUjc9orpe9ZG48qaxTb3uwPBncEi6GwXyrsXCNhdNiQy7fAVwfVC8vbpoxyka",
  "key21": "2kRHSRqyoM9AvCr3vFk3muz5VvHpAFAZTyeknK58GNTCsZqzVjJnGco5Q9fUdeiArJo25VjS8hee39JPVLeKedCL",
  "key22": "4yCKPkrgmRxw2YpBHHAT73DnG4uCCVHLXByjW8eAurrPzWy8svQcP1ChjdTNHbhhyr5RXESYqwZ4SwaMaytksvfQ",
  "key23": "cxyjFS9y6oHzc3rY2Y7F9384kv9TuJ61KQxWcRAxEkfxnqpr6vJbFvKw2KSMZBqoYEuZFr4vtpXE8qUM9MuL2yi",
  "key24": "vY8zhvaeSPM2xT5q6tVfPAM25zaR2dxrpgn2ygyDc28KNdbVaCWY7BfBAqojUJKNiA8cFSUkWNhrCheYGCx2bsD",
  "key25": "3fGvjCLL9vZLzn9Rn47QFTSkzdRpfiViCU12ahcEVrcuLiQ64ynAYj7YAiesUi6nWc4nB4cMpR5PnCZWm6rnv6oA",
  "key26": "26B7ChGhsQVHsK19Faz85iogneabrjW3g1vCU4U2fMbcRTqr78XuQ3Z2QU4sXnEk5NZJ6BjjJvFAk1eMUWmjbaKP",
  "key27": "2vRpq8cJxetrHvpQjpfa5MVshXYBDyHor7ddSt79eSdyJbiEAdZqZ6NRcyCnC3ofGCo62QGSqSBrGXcHh6iK4Pjq",
  "key28": "3m6t3MhCG3KBrh61JCkgGaLja8kUDrpsJHvoYZyPnjkDggB6JDKnp1FbPjxqdHE8kYZ7HkAwWWj1UxFtp5wAJrpj",
  "key29": "5hEXgUateBpvQAxPjWKHzvfKZA3FZLSrP6nGbZy7mdY45hWpYfLqvzFcJbwWeUnbH8nRMimXGtQ9wYxkc18g69Eu",
  "key30": "sRe3NydzfrgbsnbG4vLsittgAv6Hmf5gu7JNkM9cdJzEb5rJY5enbm9hkPoLeiVw4R57uv2nutwdDfoHMc6r9qW",
  "key31": "3CkBTgUjae1iubitaNNCSeQBj3VWLZHo855CqedAfgms3TSvYBK8RbkyjMpiwNjvYgeAxzwCWRzzTmFzXjcMLNLw",
  "key32": "4kxnEKB6Pbs17ToRDH8b1zJAqBDgg5p6tK21C3LwxDXMDs1Z52NajutKb8ANmmFqinJsnoNMeSku3JFLNXzjsFj",
  "key33": "5XuBk1N27MK32cHPUmNAUQo6wQoDKq3PSmJWnyqcUfpTQ1wEvSVSQwvoaJu6uVCisvgu9WDjQwneQJ18dhGayKmY",
  "key34": "yuzDw4qKh13CCASDtk5AEpPbUjE7BS1grcqBDv5WUofYgwVkYBiBsZfpG4pMwozc8D46BCxqU5jqoiyXMvD8Bgr",
  "key35": "5HCvRZE3R4r57p5tFRofkRrntnCEM2sNBkzPF8qD3ZS1BuArC3bCwqRL2jYa9nkFD8qGaHuHAvVzH8YJpWvYMyUY",
  "key36": "3GteMsP1tR9DVwuvEj1fgpXAC9ZZ8MRu5v522XWA5QfxZoa6dYarvWnSqYwmM71q8k9UsxFCb1Pax6Rax7pZ8jPc",
  "key37": "5cnu7LXopgVVB3hato94yk7bmevQGD5RdyzjEL7RDpbf7fnmgkVzD2FBmUYG6SKosmuT1XgsshxawpxwqTMWDToh",
  "key38": "5MGnm6b3oYgimPgJsiJP2nBBYTT8DJRDqyhberuamxJzHX4gccojb46BYvg9TxRX9rYMJUwSaSW16F9wjzSVARfv",
  "key39": "5qaxMYKLegqw2hQLMY81FXG6TjtkiX1HxrTx4uFnufYtBRzN5GcN6CSLcD1gFwBTgtDKSdkc116HREAt4fRAUphh",
  "key40": "5TY344y4oo5HtYogFqQxAJoyX58SjxGzRu6iTT65D3tbu3MeEQ6bsERwrrv2yZJPXGyuypoJ9tsi5iw9jHkRxaDF",
  "key41": "3RzLTxLPEqqN9ZpGWgszLaq3w5fwg6rWJndLvD1yEvHaM33dnL4EdqXo5tXrXntYRVtXzyuCUvqLWxfvBykj1FTp",
  "key42": "4WH69XhxZP9GRYNb3rAi8QjR31ADJVfFUufp6i2iLre7a9DdvBLCYKsscpBMzuSdvf88pfmEus1bPoq6Vd5aBC8z",
  "key43": "2wjpyZdLwNng7ZEFENY7dHmbsj6Q5yXEFFfteKtdhr4LGnwRCxWLKdGndHoB5ZVb6unQyuQvihxAKMjjbTpmEQTk",
  "key44": "TsWa9cnNDn5UBWSwcs6GKXqsxi84bcK11v4npiAYYKJo6DVVNyad2AriqkmWy7Tt5MoFFmWfs1D239r4jFWqUPY",
  "key45": "2enouQCem5BczvEc8rBkTCRbvrdKf8zdvbA3EjKeLzKrL3diNbfkuX6PFBZwV4hdbTZ4UeNWMyEQMrTr75emwHpo",
  "key46": "32dRgNU2hgsrxSqwiXxr4kVQAYnBdtmxxmow7bzLCSsQfqcjGSofgJD8MzkckPWvyHgF8LXgNdmtedJ3k1qvoe84"
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
