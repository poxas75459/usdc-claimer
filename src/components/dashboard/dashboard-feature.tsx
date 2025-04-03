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
    "3kKTy4wVkEEVvX7NNoWXKvQp56P2W5eGyfmiQAgomUy2Gn7G57X6FuGURgjZv29vtkXTJ5LsYiFdBqaumNcaAu5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6cM4uZqbu71HCykmFePKwiCmCrihxmfakNybyGPKAdyxjLoV86fmsNWB9U84xYDUZyZ7kCREJBjxpCTQG4A1zM",
  "key1": "34XYWN1dpwkT3BdEAPZefPdHH6eQdErQJjaDYX9efovjWSCbxKK9xy3jftSLtgY42K2reg57qi63W2qGvjebn5tC",
  "key2": "Cb6cEWtrQA4TA2LZqMhY8tjV7TKtkaJqMMuEJPsAQLCxdwmyWVX3CdnLtBqWdaLdQn32fagRc2RUa2NQ1kmeVLV",
  "key3": "2RJeUeZuVUk5uMFA8KXRnYRHi1tfb97X1Udejd1w4abZDYKuCS8aBVtTWdH5bsBCApqUKsadFSR4AXBzYbjq3Grc",
  "key4": "WwmFEh7BvCTqNC3FUfNkixUmdkzVJ1LEWUaGRXBtKQnoYaWDX4MT4easnnFVoywJL946SqGesADFqgjDoepQcmE",
  "key5": "63PwCDkYRxZjy96Bo9HPHea7LTL5vBbeWBcjPSCcvT3KQ9226PEPpR12miVZ5ATFHXQAFmQzQqNevqe5qCsjGATE",
  "key6": "4PMNHihhGppQ5c6LJoFZR4EE77pFhQxwVLzPjhKbnqMwxHWSHuNoc62X3na1CqvgS7tYkvXqVZp2mAm1wQLJutE1",
  "key7": "5g1WmGyAhXs6MzApkpLYBLxr47mrvte1qHa9tzXtkHNpWmfyx3jdGh3RWPtxgZxgzjVkP2gyhHwGWMDr9h7PfMZi",
  "key8": "5f9Am7V7PeUCMJenhBbufuE7ZyY8WeJcC77bmpkjaoCjeMPVhuDEhDe5R2cJT5bXhTMjRfWi2wF488mMq9tcrdw2",
  "key9": "2MvETSddCrFnrvn5CRMjsSqeQ1fkDH254scCDNJUdj2yUdXhmsZNWDAWvJpvgWMMaY1Dpo7od9E7HQcpYgsfzbnJ",
  "key10": "5xbMAMn6U8ZcaUbjazkQugjGHxMoyHZBkWWmWWxjBgeACG7zjZgXHFRV5iupRfgJC6qrDgSjkMfPzJXnJL7PGRQ1",
  "key11": "mLrqpVGpMoDygpEzPSfyfeirVAiSCRPYrVDfpEhiiPYURoS1Gd9Pxx4gccpePFnTZJ5wbpQ7nyiXAEP3WAGR8dm",
  "key12": "jbdQ9UTKvFW79Sqx151pabeNvG6y4GdLKKYJ5g7siBgNZoHwTquBw6kwW5pYEhVGF4WyJ53XeUxNDZezt9WEsMo",
  "key13": "3sZxK1DKjkcMZeyqGonhZ5tp3j9Rp7sppWbEpPjrX5VNXaz6NvZWRL3w8KsVNhXrcqoB65zv6218n9jyub8RGuF3",
  "key14": "3xtbd7QqKZFEfPi2CPXk5x9kJSPCRyQtW7ETQbkcKKBfAMN376j2M2QmqKsDpL8aYR2XxSvNLHbuxdtu15oe48nM",
  "key15": "2uekajNwKBjY8FMenSWWRSYCVr9Jr6T7A5KigMv8DBYWzh8AzzD76Sx1EYRY4ZqVmfKF4iequF9QxXkxToBcR2Vy",
  "key16": "SKoGD6T6Cp8K54qrPX2xZLHtGih76LV6NdfQJMHorXrs3DjhZpAms27XRDs5HVZ8PTCiijgqoEr4tn1YQ2rsQBN",
  "key17": "kSBvfQc38dGfJfisRhoKBYUhfZHVpJc6EUgjZGvfyr3otFSNYBB6NUWDHXjm9A8ncoPpRcLu7VH3eWfoCCkhqFJ",
  "key18": "RK1sGUDajf7ym5Q19ifxMHDCSE2ugzKwAebybXtczPe2DBh9kf9EtrLiPM8QPbXaENxLcb5nfANuHT5x5M9cq5z",
  "key19": "5BWDSjxAnTpVww64CAavz2PkAUXkMUngwxc11z6YdSBsmySEuAyZr7H2jezdXnbRiU7tkgHq4AtUir4LrpLKqzfa",
  "key20": "4Z97wG6T5GHTstvJuRGYmdtPQ2MzQ67ttAyg718seiLBPonuvzKJEqc2eUn6Nc3StZZ1ebFuB6Xija4r319JyemC",
  "key21": "4YA1LLGr6gdDUDRP6yM5BjsD1M8kfNR9A8trkWVmMd5anjGefk3cEuoJARQY2L567PwcCqtshDEQPF4eHdnT1cUX",
  "key22": "2LNDcgwciYEGqxHiTQWpCCbHmg8ixoiXUNuEzY5vdT1nkYrvHG13gQ4gLF8HVM1STDxuGbth74UQP5HgvxqSCiZk",
  "key23": "Ng5B9hnFpyVzsFRLTqz3TMK1DZP8DxEsX6iDemgPLqW8oyP4G1QytkvrieA4ZFDZxxA2hi9Q7nL8oF3wdseH75q",
  "key24": "35kGJkYvpQ17FW9QJZrpDEqxCnfb7zihf5bzqwZ6yz82W5x6QM1U5W5GT2YMAzsnrBZMZ14pAnBqDvhNHofXS2qU",
  "key25": "5XrJzriiFQtjmhDj6P6axX4PgqEJ1GdF1ogE2mjDCU6RYAvcL2mL7FqvK4yKPDxnPS9YbsXSgP3bhCXWZdPmdpAF",
  "key26": "4jWFw83rxGeohEaUnHuXzLEFJXKVfvz6Pg1oDwjb1CCQFNLdscx4hQV3hNY8kPD8acfzD1isiiZW3Ef32ttBjxVh",
  "key27": "2tmzDuuBA6x7b4RnkKjvfMmDGw1vLfXd6XhFgWyB4JZkq33XjpZjuGiDErfhVU7PRGSys854nkHHShs55QqiZqZJ",
  "key28": "25w7REaMLH7eRHKtbSMgocLPhXndeXGjAzaBxFCuNYJBo7h6miWQu3ZFFc7mnYR9Z34ycSqvG6GueQ8kFRCXNZEg",
  "key29": "5iDFHDUBEbJZiKdN999bU97sUB3Tr6t7n79oC88YPnd2haxzDth3UFu29pKNfRKAFpGzvZhZ9RpbStxiEFoTdsp2",
  "key30": "4k2mzHp2UvsTimMYaVfyf8heeNYQLKgadWbLfhUf3DwRkMAHqqh3WWmmDLUYt8d7v4bAtdqSGWPY5mfgm31zVL7a",
  "key31": "5qAUAeTcPqmLTNGdtzoPRbof7Pipi7cNRpDGmH5b2SvW4MJvXWQdj64fh58hBPSEUJYZyt49wwrShHxWcRbCMLEk",
  "key32": "57GtJZLQe74bu8Rs24eMAZFXZ5PbPC25viJar5MZf6pZw77qJpwJaTCpAeYRxLodGsLSJ5x8oMJfhL8NTn7s7Lpc",
  "key33": "4TCh9n3kDMgRUhT7Y8XAfvT8nALbubJbAXEy2twkvUmPEPhjgXVwVNNb3ewCshZf9uyLrMWm41Fz8vAF226rUE3N",
  "key34": "3MnY7aecPx5ooS7TsX3rjzGMBVe8kVwBxUhWS4n92jnKBqCRZcgPVbV2tA7qwLL1y1yc5hfSpjhyt6qevduBM8Pe",
  "key35": "2pgm2GMrXkppwYR5PBJP6CLjZjhAuoqDxpnqjFcgsYu1jL3Vrij26msBffMzURr9q8daafapbYR29LpYcg4frd7S",
  "key36": "41bRFqQij2kQoun3aSygzJEoHn1oAVGtrYZsxXwTtJXHpcdi2tUT1ymPgaPjBVg6u3g1EuYgTic4XacMvbD7hrLr",
  "key37": "3NEveLoyX4vgp2wSFEiTASaJP7c9EUUKAar3bnYVX7BH4yHKUZoefDTsRyh5QXAFZKo4LUCtbrGmCmGNtVeTFcSx",
  "key38": "RvWCUMf7qdmJVdHJj11ocXSfSDAW3U59Qbr4cNdHG88tXxEnDwwqZcuEHzGE6qFFGPwT1nqNYahqEr8hULP8g9L",
  "key39": "LQbjJ6iE1Z6otDmp45bZyhCscsSX2YaYwhwFNNSH3KaXKMzPj1bZvv5kefN3xfzFd2LbYLVC57pbw4JzJ33Yd6u",
  "key40": "vQEE34cZTZ5yqvp7D5fG9rEdpZHQwYzXNGbmu7myhCEVgk3b3Na9jUXzdcSbPHNEKyeQvxGqTUMVfxubavMWRDh",
  "key41": "3vCBewNp1VHzNk9zuBMtA5bCkEwdgKyi45TmJHArurGhDAtREs97r4F3wMPhmamA7LJ9pEpa5VTzTCEvz1gzPyce"
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
