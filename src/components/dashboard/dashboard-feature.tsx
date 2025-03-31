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
    "4nN8acDueh4Bk7BUwrp3gm7q2bKdJ5Jiuc9dB94LyHbFSUbNV6tKnkDUMgj7JpeMf51wAvrSkawQttNc7ZpAcaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKPVJtS7PEDh9CitJ3AvJuUsuN8mhMxnVUweuik13JxvrouJDAeycr63c6TAf3A4VphLhzDP77FJSbHehLEVHmR",
  "key1": "RYRQ3bakRNdUYCfFLdn2YPi7DZosZ8rTYaRnpj6nTzDbfV8FXjeH8wuQFq5k8iTE3EVoFpyPfbNbn26ZeksKo3y",
  "key2": "4Y2ih1sPMZWMbiYKMr8atvaRrtozhSAibjztHRQ73ensiTLR9rYzL6zRjQcvbCmSPVUKfv3fwC6xs26euimioTrm",
  "key3": "3216g3kmS1mGjRMbMAV1wL89VZ9B98SwNAQZhUHB4S1RskgfiViJQShSvL6bGqTxGURGHXc9Npmrv1qFeN1mHPXm",
  "key4": "tSybKZjpKUR3kZL1FDpBtAJW59ZYV4SQ9VizeY3HAWFzHripvU7VhErL3y2CN3tT5iZRtgdjcZr8F62bVwmj7DK",
  "key5": "5KECswsweqi1iCXMry6VNSmkEQtMUu6kZnpHz9ro7sTAXFUmbxJomADk17NqiwB5fXVgacALHUKnfS61TkKWkFTw",
  "key6": "5Mvh2shXKbP3AbDiYQ842J9qeSUSbn4brjGEsBEEvii4vW7Pb1JitybzWPDhhCg1gPS9DHhtYue4bqbazpzAPdDe",
  "key7": "3NGmR6PEHMURn1RnTicdSgNnrLE7ioA6MEogtNhPpfcx9etEJ1jjqHGk6fgJQS3iWLa2455Ja8efhP1C33zBN45b",
  "key8": "5Ukwvbv3PDerhdAhrKAefSB7MbY2FmfuoGkabUgUg6uSjTGzFcWjtRC46zcGzBZa6SWFPAxuoKwhpL8YvGcJGsfK",
  "key9": "4NJoKLPM3oPnrxCA5bdq9SMG1QX7UD2YuGxJ4xMw6UNaDqcEm4Akf6MSRCKdmVk6KGaTnN9V5ZUgpWebpFNBuvca",
  "key10": "Qx5GuSShaLqGQrbZ4YDqhkJzGmRuHNHneRqEpz9WP8CVTqq4HZMmi3cvYE7zBMKpf4J2vGoHsz7pGmXjxnpVcpj",
  "key11": "2L9xKtg9wFbojqVs7L6GXavdVyv29P2LxUayzaV9pCvjj3C51TmhPqyFMJkwzkvTWXCQFExhrk8UV9qL4VVxfCYu",
  "key12": "cmgsaXszrc13HHX1D1YPY16pbMqCcFAWjSGV6pumhf7ecivUEEjYpBAmwY9h7No1BQdXFRmfH1jt2nW4RRe6MXw",
  "key13": "utkcguqpH9nmxHNvbeBjow48zt95jQnGZJ136ix1DrwpvWZbfNqo32RXyQonZrmvHpCSK4Lb8WmAkiULagbAYDB",
  "key14": "2SDgruM4JvU4Tuf9bTdjPvuKsN7EiNQRY91yskMD4e5ofjo2ARw4kJxYqmPqHR3CESV4Abddv8zTXquWy4KmnbS3",
  "key15": "5FQHBcj2cb5TVkniWK7HKwqWSRCkibtqdH4dR96xDjpixgW2eLL4ka6dJE91nZvaVv7aQYa5hE41sXewHomNBPPf",
  "key16": "2pNBXWtn6nFEezT2HUyMgNWtYqYP71BxPWRBpUXWTV1s7fdjQUF49Zbp8mxbKUbLEcEWY5qyzmQ98wofBcokP1wZ",
  "key17": "3bTy72DxNgs6sKPAu2xH8HgszNJ4esD3QgauXJYhdzofU1w1fzj3niCwukkct7p44q1Mvm6tM7vfeUDzWjKgsvVT",
  "key18": "SpxvahcR6vMZBAH7VNmrHxZ3kSpAoiALovzfih1owX5sDYEiftphh595JCUdjgwS4E6xcvgUVgd2RfsiCBuhzuH",
  "key19": "3YaKW9uZMbDFFozsivPjsxcfdPU1AmTBwdLvyUhoD98E9rH2bjnsinQHyjXh13sthWWnN6bNDZYPe2K9q1LR9pF7",
  "key20": "5u93MF1Q4RoQ9qsgrqMQNyTcphfa38efYQSACmXpK8xi2KER6KviN5R226t4U9P6dh14QhUnLmdA9z6xx1dmwBm4",
  "key21": "4f6XxM7WPhDRSPXYKKHSAWozLAFxSC7cbACxL6txHujERAqwdU7b1hxfYME1K4HicvNvHEAhLWHMbMKQGwT7UpY7",
  "key22": "5HHHtBT8YqHTbv3xiDrM9t2wrDcxsoxAq5KbUZGSaEV43PZPLLYbPdCy7KrEhF7hwPyUSdUkVy6e2agnehgEJZ1j",
  "key23": "3z7KyiuALuceSceVWALm46oE6Nf62djWf5WZskCMgiBr1qJ3RsdE2j8fZtoiakVzEHcb7ZC1t5FFKAWBqHECKvJo",
  "key24": "5uLvuutCpyd1iQ5DDnVX771XwWv2pfeRVG3mwMrbfsYdqsDchHHr9f9rTQQ49BJJc7cKPBNbqfdh3xygnVkmk9Gi",
  "key25": "2je93D3rE7ckrvhEbBDr6cGTb3by351gwcz1nN59SegMALaWv2LpeTDZkiMHthukgptasDgbdHXPqPARWkyYUue3",
  "key26": "qZKV68LhYrZmY2Md6BuiYwWfdgyWcHSwro4QptJ6L2MXGMso3tNqWfKPhRUcShiUzHyfARw7XFRtQ9rESW4DmDB",
  "key27": "hyrfehpmoDSK6VgfGcUphhBMcnkbt9wrYbGFcACpndwmATYxA2H4y5oLwfK7upHAv3y21iZ4s8gesKXxWjPJQky",
  "key28": "2vDRK1k9iZDfNoD7mXp4uPsuF9C6x1hhewBziMrsF5HP5ftVg2jG9eSNEzQTuZFoZBvfJBkFVEh5rgPdvNWPxyLy",
  "key29": "4fvuzZ7FnjkRYGhZcUHiJ4qrrMVrxCCaE13iccEXrXxSssvAQ1M1nKiesHJJ32fgtHZf7g1XwtisLegNtssvoatK",
  "key30": "4MpqmwUUNFfu7WyttXSB2GcrHBUPa3sdvtF7o27vs7Z39y596NPh45fzHhmbCMbrCbpJK7qL1ncYsYXM5FNvrfPk",
  "key31": "2Da5Pr4PnyNLsJ7anDzc2dFjzSq8eqjMoRUhbrs95MVUDH75o5y2axzrucTuawYTepHHSGUArkSmWLxfEZgAhLB7",
  "key32": "4N2Z2sHSJJ8h9GfixL7ETjeVqL5RnNR5AeSb8jFdKijuFTHSULy2m6HHTYgPn4stUgyH4vbVuYEQXEhB6hbb87H8",
  "key33": "4kUDu5YmrSsfXWjWfPs9Bdg9Nn44QnjsbZBbybmKaraux3iKgFJePCr41AQuxZPng9kWhHTzD4PbEfVj2UmhBx6p",
  "key34": "58F9C2H1iradRqD8EMfyMLNSuokom4URhKxwCAPfZ9v4jSruGjgt8YDNxbWGirrbSrp3bv8RQ1REPsNLTwfLtmx",
  "key35": "GVynTXsVa3MwdKw5tWa3tzEkjQ3Ye1pajxz89HNTihAYepkVQzv4XzPHuER9sD2uN2VtxgNCksXELskg34AqViy",
  "key36": "5SHPWZZ4jRXsMM16A3ZjctSR4UidcG8ey22HHrcEzfbpVkS1ePFYdzzCEcyZfMLBrrFurBPeVoBKFYgEVeaWHCa2",
  "key37": "3WxKpGbiBAwuEBACUu4Lf86MbHTngwBGxzds4doc9ZxLwfqfHZwmhfRaKVnPfqyc36aTCGYgbShLmNvkyvp6XonX",
  "key38": "4Fuhej4jcjp6a5HG1R5zpfqZUYJHQuHmuCUaHLTaZjT9qTXmaUPGkogUXufLX6obd6XfpyTdvb7GYRV4dRT1AaCH",
  "key39": "4Fw2eVxrQzLJALT7Y199bx8qtyhf9dvuyTwRgrusKw6Ff2UKp5LoMbd65JznDS35hUwK4x4XkuUNtJzf4375tVpF",
  "key40": "35GA6qoHUtMxk8hHdWJHDxAyVWojot3Rws6MG71Kx7PYpd3xGcDhGHwjqUoQ82nj4Kq9C5rRCBqmKQVCP4tcmQgZ"
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
