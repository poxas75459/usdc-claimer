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
    "9BemGejxgc51uKXkYFMqi463uL8sBivQEKvK5vgPpNvSVHEZ6hzrPZTGynJMqCcA2DL9YCfiVHJH72Hz1XJpe9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4396bcSqPXH8Ux9Vn75NtZcKRvLd5ZPANm7Zie2UoqL3kdfKXnZ5pmwteFmxFAkD8fZQkeKnHGae7oEiiN15LMSW",
  "key1": "5Di2NiRLdezwEUsgsKvwn76L8MxcSYrzM9rk8zKS5xLfkYLDEbX6xQX1SpCdSPYYcjpbu1egZBtRLffsVCXwtHrU",
  "key2": "5hi17sHQLWphCEcyuf1eGV395UaufbQ5dZYveEagdF6KJ2xSiKYK4g2VXNnUe3LfnoWMKdbr71vgqwy4nyzGGKWt",
  "key3": "2By4HELgTZCHAidxvc7PDsxCGLKouzJsayX4qgJmaeGbQ8zKKYN7pfXsfYiAa5L5Bj4EQ6xfx6idFmmR6m4kQzSH",
  "key4": "3ndkeZ2tK38bRDuKrA6vZcnuPXidBLp5b6Mz8YyYfjMvdoe3JWzHaoJ63tkDWFRJv1okEGf5c31nveGMc1do2sU2",
  "key5": "41ENqisVifPHbihUcxbNc6dF67YV3XzSpR4e9brZhHGvYbQZCSbbYLD9KqL9Bc38AkwuHDPCmcXy61UgqLNgRYgs",
  "key6": "47MiMeK7qUFHf4rTYxKTyTymXaP3CjozUuGtHTvTAqV8puMmh2ckCq6WTBr4BXSePT3xmAv9AEbpy3MRLe2exkC4",
  "key7": "MfMEpzpchUrSF4F94EEzp39WMv5vekv7dECBLJHHEgwNeZ4etF5smZ7kopK93Scfobi4Um3JJpMGxEoBvA5Dotm",
  "key8": "62P7P6RoBfeNeoXM95SgkMaLXgk1Ls475NjdFNnZrhkBFXqvVkrKjDMbJGWX23d6RQJ7jcZtrJrxXpBf58Xqehg4",
  "key9": "U4DjhBj9gAEyzea1n7wD6hCtHQMBgCgqi2Sq1DZbSqnPVJP2MQqBsFp6PS8wn5oJV7LscTzqhs2xNr9ArrfCQrK",
  "key10": "5AqtmA3ARP4LeFygkHn6f9jTrP1JkFBzSoK14m4HP98sNBkmYGzhrANfAWe2vkbeDQDukVTwfffHyjeiVa3Q8A49",
  "key11": "28Nu7iGCD5cf2yGzRB37NsrDBPKAejjgZbspuNSiBs7dWsYdqiYCoGRLJAHyiEpP2M4RXyy8ErS1WqTWnLuJh72g",
  "key12": "voyNJnBozSPcaNWjEqfRDNGZoxdeCtgUncEX5sTCNPJxRFPpnovozptFcPaitkn5GYLPGDEwBqn1HusFLeXtwLK",
  "key13": "4gdZdmqw1fRXbrTchAiKoSRGkoZZ7kbHh3vwFbatj5Ua8JpmKgNRhiQAF1xev1HJxqVX9BJkh4biqoqouMXj9BKv",
  "key14": "5ZETtz3UZWBKqdYtDy2yjSfsL9cPoQnTDGFutA15cmopqYwYVMz7rw4YxfRFHgCbQcridCowJrBYxAqChSCVNNrb",
  "key15": "2YJt7EgiYX8uxoMAr9SnYt5DXipjmHyLeHcwdvVqGbb9iEDJPqo5dh6zmY65JzzvbL68ypMDUhoTUSHwR4LcHicP",
  "key16": "2NbK9axg8WEuiAw6nLArsJy1bLCxd5owCTRhPdK77ZWQgb75JwRo7XxTjrsnawNCucLU58DJgsbT4rZxL8xJgcfx",
  "key17": "61HLZX1mfMrMyWQAwABMnKswaEM6XCikCj1bUmbUyMoT5H5NFSmG7f1kRp4XP2hwN1frT7FuzVzkcnoZJT3ao5Vj",
  "key18": "3ygbCpgwourY3MDZZdw4yPnYMv8NnVjUCYRbwWQQRgvi6phzgp6kEi2kN7EJfiWNyMGbXb2ao3U3UF7oNdN3BUcY",
  "key19": "6142YsrehCvMMUCy4ga8a3XpCJ56t7tJNE13sZH1unee5LBL5eitfkMdcw1q7XQPxQXEzQufw6aeiBihBwMc3ALc",
  "key20": "kQaqWQePwCxPNfMMiqBnFSkodK5QYSFynwMdc4GhHE745DeDjHBirk7P4PyMgwAD44iDHuUUJVB8zMjbKr4VXdJ",
  "key21": "cEA8aVm5ZWDmfyS4Gjf2XFexj5nkeFwETtbDoA2UMQqc6xRg942mK5w2sJcQmsfUNMwYM2e55iFrbF6dz5wq43V",
  "key22": "63zY8JSrQqYotoSKYTHFkw2kCatFiNLwGtqpkdKw7Lh2gYtdeZuvKxcVfKeWwtYvAY9bmF5xsD9dkLtYXz7AJQrV",
  "key23": "54beeP1sxGgQ2YxfXYCx3zXtmj9NxFVaihquJDqfKE464Nmx9mnfJbLCfEeUwF73EDwJ5uvEfrkPqES3rhJqtWvx",
  "key24": "3T5BrLthxtS7fqnjn2AsqXUDma2yuvJU9uXSmSwscT4b9gtLBpaxgZ6NcdUYJXJj3U1pNWUq1cbPJ3DKAwoxwJFm",
  "key25": "2HDE6J4V8pYdjscAzccXKpLgPM6gz9QQn6jXzm9mSZMxQ8u7eRgyLpgDSmAeTnf9LVgQLYc2tsv5uVSRiSANeBfp",
  "key26": "65YWmnBwBD7TWfvhru39SxbK2jc2UNPHWpV749PfSRVx16DTvdxBA9NFGnoJsutpzurdgBQCP8CouAG3uJwwYPn6",
  "key27": "5zUcqgytziobCuPfLPfhFK9y6nifoY3QvVKRcaK149Edop4ySwRs6KoDhke1D2hvm38UhdP6Ab66uB2RkNvJAo8t",
  "key28": "2YgJobVvgBuSZKo7sTyLe6hqu19aVKPNQBhLMD2t1vvzy5WiVKMWCNTM6YvfbHbMvnqXTXRLpDJuzkWai2bemXRd"
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
