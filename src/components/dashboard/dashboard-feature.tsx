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
    "5Hzt3czzdLa7iVteJmRk3FtV3qR8CuvgZzxnrxqPTvZepjiCbtNrw11BnBWrc6rQov9BqgnuF1Fw1RveJfjYjUTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eH8a7pPgnmwJSQW9kVaNqXbETbbaFivGKR28bAhxuwXNnnDGKYwxY5KEvQG8JpLzy6kDCtGkHPhyTWewFbwsuap",
  "key1": "rbBR1rkcAtnykwQ8e1Nt1eGgan9sBKt3nQk48wNUTpMr3PEjAnqNUKteB259tNFMRPsAbNCgKL9bE7fm3LkTjCa",
  "key2": "3GeRMyxn8V7UmFgTwCYyMeN4bPES6ZBTpo7AUGgyBJzizomEmZZ4N98ELXXnPt3N68RhpEpdNetxF36hnjzrF2jg",
  "key3": "4vu9ovRTQx1jMxnHF19oUvWx6zW3kmoQRKy4XdkDDKcuXdSfqumb9LscGKiaWFH9Y66QrB6ve9mockyPhYJGoiag",
  "key4": "5AcJc57SjihYSyTbvbkVUsTGHiPivUeb5jk8jNUQ9oDqpubeQwVS2eJRc5wRwZNcnHF1NDfr4byzVF9LWf26FSxF",
  "key5": "3r31C9Hxb1cwKXwaiQrPqb3tCF6UzGjQnP5ihfz9LeuS5fZyrjq6fzwU7vgodFqwbo33wmWNBcXQREonjsaYe8Fo",
  "key6": "2qGNU87gmqDexF1Pc48FU34Dd3DDbUos5Bett2P8REcCmmgyZYM2HVS2rKCe47AozPdQiiVGfpCfpKoBWeiGYiw9",
  "key7": "5Mr8ycLq4s1QwvejH4QcWwSQTGr786bVqcciRZukefgzx581qQPXPne8VNkbrPfikHcatgm7YanvaAGMY8WZdk1h",
  "key8": "2R55UETeJpFSRqudzsRwsTF9C8B7nMxSfgshkLzwBymwuRxrSbbg4S7NUZDE53CEHCvoMJ38yCsUFJRpchmfoffC",
  "key9": "4bZXZePzTvbfM3sFGxVxeg4gVmBiiUR6AMwY9dwbJMsB5NaBRNicLawYwN1oWMVF5ofJ1NF5k62cbbGWY16GXvWm",
  "key10": "49ogMuVstn484x65fyo1uAzTcLKf1Hqce6mKMdKpYdv8L7XR9eApfm8MWFNRBFD95jBaEn2sGxX5ofhZYJkK7UpR",
  "key11": "3bRMUZQaHjrJtXkaAFVfFGM2uXm7UaftYc9jmbgYABFhCcEYeMMWM4Rv9CXxanMHtnKS1Tx8KFSi8Ue8e8YY4gYY",
  "key12": "3NrqgPdrEnQLWhiXUnP1d8oxF1agSVMMaG2pf7RZHW98AGREV9GT8AtT3FdSB6ZX3BUheZRmaZv5pzU9hbTQieVG",
  "key13": "4cARcjS3U5SqU3knjeLfgi9q8Xszxyrr5T81UxyFU7b4cPuTEL6d75JJ2HTbgQww658s4SnHBbSZ8MLSPemDGuyK",
  "key14": "2wsLYWLRc2U7ud7NmeMrhtMNg4o2kLbUTp1gEgBvb7PA2ZKEQi6gkziLnJQMK7PsUsjcnvTiqskeZURA214wDXfw",
  "key15": "sp8DmGZCsCjjPYqrR9DaxToJyF4QXv7Qn86LHNrgo3kru2E5pEFc7ZCHoUoMsZsDatAwZdruY2sysYX1Na3zfHk",
  "key16": "4SAHaBMZPXy7dtSbAVSB9kBrWoQTazAzY87jnBRAjBs3Pryh9HycqLcPyAyYnhYrJt5nRJXcDtcSvyqgXaZRi2nt",
  "key17": "3WoyqdaYQuq14swyHzuuceWkhAgiW2aqzUUTLnM5nARrSPw17FYeudECyh6kngQMW9pbZ6K3s7HNZF7CyLJr9VWb",
  "key18": "X2LDnZZHJqexVbAK3Goj9kTZ8kMtsLeWmBM2XU4fzHA8uTt84Z7uecEpn88twQtpEf95steBePp4Fade2rJCj1K",
  "key19": "BkT8es5jnyxJfo5b5tM4kboy2pFx75rurHbdzuBU8662SXsEFCQkfQNVrv9TEySPsSCRA8Z9YYQ4r4o4C2p3E4T",
  "key20": "4wWJr9uHoheRSjqe66tJLUkkHZQoRpCuw6v9PLWRzU2EruDF5sYnr2x7uY9sVh2uXTnRjfczBhSYiSUKrLXjuRCB",
  "key21": "2pecmMrbUhaNZjtDurcUWY7vMoi6sjRD3gpGciRwx4F1cJgzREwfqiEciGjEJUUiJmSTpyCwSvBF9EfdjS7jQQ5s",
  "key22": "4Kpk6gytvjpAd6h2XdyCLbYMktNcnsHPCocSdSk8XD2r516j6KFr7fW8gxN2XDUgpDVbJVPKouHQ2h5octB7rEcL",
  "key23": "4DchmxKxm1BjEEAyRUNN48QHbSLfJsir6P8LnJtVR56QJKCaYHk4EHfWtibaqQEf2FLoEQKECuLbc2MAPDsqfMow",
  "key24": "4RDhbY7n71VnuffhU44hLhWr5XdYgheLCiRXWCQD7rqq3mekr76jWkx5rH2xnxbrfCtVENSxWcsZA5G6ne5ymCGM",
  "key25": "mqoAHUsdaj9BNMAnKqKS8ZZ7WnJ8PVhocA1bDERBRP2eNe3GS6WLup1F6d6WCx5XjbwuBZ1XFrfrw35249NtqJZ",
  "key26": "49PjvbjtLqzPorjmUSFbiDEHscmKjByJJVYBzjvF6YVzTFAisASgRkVsTxsfWtPqTMc7YjDoVAS5udizgGQ22Xfm",
  "key27": "3gnnnLqjqM3dW12iAkCeVw3x3q63wzcQufaLNandYdus3nEmvxQr2djHMnU9mqjqkemfUh9YuFARP4iKoBgB3cee",
  "key28": "5V2KwdhMdnC8EhX2myWfnzdNu7wj1WJHNQ3nLGAppGuDsXEBcwPLstdqnwWDKK4UDHuTk4AWfMBeg5NH51FJGWba",
  "key29": "1GL1fMV65mfLNXa9rQEV1a5EYbqXKEVjz3iW8d7GZXATTCr58Eo3t8j5b7r5FEfZrZeqfva72XusgT6oCx38bR2",
  "key30": "4Qao5yupg4ZZtWeL8kMXavL1NynSM14npwyxNmZQbn4gbPtTLAC9QSZ1pWEtP9BEBBuAb4npY6PiukvPdwxTyY5",
  "key31": "4HzQAv22vgDZTqXRw1rAeSqvXy7P2qBatX9D9hJFZSH5XBf4zEm5NUqfobw3q6PU2ExTw6KV67oritdqfNTZj88F",
  "key32": "69pF51tz3LJVfDAvzrChKFKebVJBjuJWE9dTxNbeYj8EBysRJY8rHxVfz2DLXc3Cta2V128rMmbnaUS5vcRbHv8",
  "key33": "5xnKMzHibcAUSNYMLt1rJd66nvdoTxHgskstukhfGuHq6xnth1SsJzgLRJs5Jo9Mj8W9PRNrBt8UpbqouA8qq6D4",
  "key34": "n8JVqfVDBi2wchksBGxNiKiBHkDNbLfVKN4QixY55Q9T39ewJ11T4DiJsFY1VH5Sqbt7LLhnJzy72Mvu93BxV2V",
  "key35": "4Ko5FMbFqEfUtX9EymUHKtkurojBogAUwgpQK2Dr5TstHEneQSzd13Ckoi7C4YTWSyXHXbhHQqk4WzicpMnvFWmG",
  "key36": "4LGYUMkHHYyA54DyWNwyNXMgJBYjhB2rQmZt8c8rSLZPDoZYofwrxnVkLhzSseSbcGogQhskCvw48nEqP2MVbB6e",
  "key37": "4ghyGKGoRECpxKxRtJYMEAPkjgqG2vRPbGkzofMyJC856cQcwRCCNzrkcXD3JGi3HZjXML3kCj2mzF31i9xKKmZG"
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
