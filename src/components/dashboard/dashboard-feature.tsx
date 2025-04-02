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
    "3bBRJshdPdLJ77ENiJpgtfoixX3Y4phPEz6mNe9gjB4x6cfgTwkRa1Y2kd811GqR6LeZDzHT4wqhLWQWgxLwgSNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeKuxVQ9RX7es9tcZjNdecQ2SffYShyiBhNYEmwiPNkSHeNASG7NBQvHCYcSi8tEK9D5uzDVXKyeu7haXTR1r4D",
  "key1": "32aEbthXRBtk8APiHu4knmRkkjiKxKamp8dTEe8zZWpbciMUDZnCBZzL3oV8AhfLqXYgj7M67dcb5XZ7S7ivcw1u",
  "key2": "2rGK1Hs5P1zLFXkhNkV23YANMdjL9x2mo2N137PFdiToVUeufLLryK9iBC8xZ5RBoCV2B4WtXpuBX25jiCULoRLM",
  "key3": "2Ga8ubKKcsYvpzw8owL3QvVhQTRBcrB4yfqQHrK1XPMagJ6NuU3wgksMWcBRyU9WCYMYns5UdgezqY8YpAW51amm",
  "key4": "7jaLazWyjq1suRDQFidqSfBPZDUXGQNimeW5WZjHmruaemyosBsvqmurMi2jyFBRQZHe7Y1JvCqYNVNF3fHKx1q",
  "key5": "3L8stZw6h9McBDWsYgvL4SEnxZhpEUEJ3ggLn6M7zWqDAgKPs5q4uzv8WQcWy6FAtibBmfG8S5gQYyVRrGMQ3ogG",
  "key6": "121DAZeVA8DaVWZHb9VLM9JUBTtZQRKTGGUguHH1bzCHxRLJapkEqsL2VsziUfH9r9ow21cvTaqU9EmpdyYB1qbZ",
  "key7": "q52sU9gXCFkwnBdFMwnydqernnsDsTCysKW9zxqTzmmJg5vHh7QkueUwsdJQqLnzGvoCWvmNmRUYw5Z7KWqCfnA",
  "key8": "3tN7vyaPBJRDp7cgZd7caQECCitEGpp6drYFiTw48tPktVJa5G34fm2FpuoipiJm959ZDmkCAqyFpaCPMAT6K78N",
  "key9": "4NvbqU9eRxpddvLCSxZBSvLfkd1wfYRY1ADUSMNFLahE87ukrrvzNfarLjeVnmVjYd9KATc8E4dFFbr37F9LL25a",
  "key10": "JkyyeoswByu4DUsuzGw3GuLE7SgxMU3K2jRtvjkNgAwGfYcGBaZyeakS1cW5HDLdKYiwyvcUSqzm1ca4JjgDWUK",
  "key11": "5yxVz8bTdCSndfkNZuTfkNBBPvYL31PL94DJgSTQepSBFboBAWKX8De1vTqS5zmTiY4Zc9W1ctBKTvPsKeQbdZrK",
  "key12": "4uNixF3RoDuF5L2jznm9Bq397iSgcpc74YHpMEZiquqQeSq5xXZhVccreLZq8qtN9BL7Ry7DtQoauWXkp4MKXDCM",
  "key13": "3WW4JFYebZSd2kCRoXwkB3aDJDPkgJBW399SmmioBzVZ6ZREu4PK3tQxYiaENnoMwXHgjsCc3JzU43ZUyDJF5L2W",
  "key14": "FdvxGPmNKSijzi1VWsfFBaCtsRPmzhRNu8t4VcT2jNLCmhtCbFFTK2dgYHA2Ti3ybMzpTwf4XbPqE3Lg1CaFzYt",
  "key15": "3VxmywFgUUMTLBcHVMEwURrJo6ZfWZBRutMHaq1Z7NvB48XBfSUqJmMJVuueeLHDqt7BoUcfkfVzzcuSnVpkm72S",
  "key16": "4koQzUnyX2NYMEAu5rXEiT8zyAyztnnr7cLoYREpNTNgYaGwwjCjyL8Lx682Hey5ckTt5Pw16wiLezY4sc114xYn",
  "key17": "4rgti4SMQU8sreCg24tK2MnWyYUPxKwpKPoNUaxEMGZBrcWu3BPEqRC2Tg6rHWBsUUnTaUKGwJjYAuANNXJNzxxo",
  "key18": "39YxUKHpcWpYHNuqPf4c6jU6fym5WaxsJb1TGw2vTgXKgCzbBf1WmMzmnTCDPL5Zx3Hoyh4RPfQazUPuwu65Abju",
  "key19": "mnDZooV7WBzSEmtUaKaCgt3i8SUu6JJJqT7Sy47xD9HyVGwB8Q2SQ2FANkeEHG1vzzJF2m8tYvb3cFunBYPjgCV",
  "key20": "4scNoHb5rkWQVESBAhKE5K3gUra7gRCk3kXFJwofEtHyHTnf5v8DKxBXB5LUqRCZswr2cnJw2PRt72mSgVCjNPhh",
  "key21": "46v5oYpZ8iGagfkAkGTrKzrYSQKG5zcDCdPmv369L75KR3wc9n3wUt5zrpa2ZPt3Yckd2vTr4rHJqysBLCNUjQ4k",
  "key22": "DE5hJDp2YjpqhmX5vmj1JQEFNZEzxKiBxgaTepEVGXzbsy8q6Nsi3vyCDzQwoQwsNtJqBGGBLRr7wSbupnmKhee",
  "key23": "QGxNYxBUr2thzQxG12r2yWtpppHiCxpNMm9sBqn5Jf4tYJ9rXyip81nWurDaQPoZ4Mdx2hJUJoUeu9LZzcqEbY2",
  "key24": "3RLQWMbe166bzrKgAWB1RDJH4HxHqTyY15NQm3MpfARmHYVEgDmZ6G6RSfnPmjbyNda7gv1AGW3kKLM8nnXqXP9o",
  "key25": "dMvpYX8Wnw5gmwi3PavxTs2vg5avSHYW6VfdK7es7maJ1w4N3NJ2TGTkvb44bpbtuQsa76cwS1bkgkE9mtzVh4Y",
  "key26": "4y7mAUEGinr4fL2ymw14SuZ4tzNr6tUAz5pBFMurvzscv2FajJoChp4idezyqHYoHG17Kzw8V1Dnu7cLdea3QKs9",
  "key27": "4zmqFrr6hm4Piu5XJMwqx9Mp4dr7Zo1aMvoGcpw3cCup3ts9dViYVZ5Tx94ZvidNKZt3Rup3ub9ViW2ToDQ4L2wy",
  "key28": "5bd4Z3L5QCyp5SNMvCPot6Yt65KYMCYr5Ug3Xh7zorwCLZgZ19pNchQ5pL5GnPda5w6ixdpkEKhgAe86CbAAwJpD",
  "key29": "61bW3rBZKqAXcKkdTgQMtqwvPQYrgzFJSGUtNhuGCSyekyZaFbQx2isUmUn2EufHZPEMNGspq5nztPtSfr9QtEft",
  "key30": "57MnYaHSevPFWfoYKnTf36ePX5o1PBEDE5GHio3Wdjc9R2BysZJKth2XxxRYfrbcjU88DAQEu2nM6Pe5G6G2iAk8",
  "key31": "qQFRNsTHfnUfTcyMW4cTPgkU3LWTxBu4hPmurEZGVmdVcwN5JnHn8tPSRjM2tmmFJyij1bLjPLRErzZEhcomQGS",
  "key32": "wh8Mb1aB5gGnah1ucVaDBCRbRFaHu7pVFVVD67karZZEzjr2UHx1QCFhoDY1NCrQXZuBMzsaM1Zw6AJskifmDdL",
  "key33": "479ahbpNUYkuTnA8qqYmgtxhJQivd8iW8BUaTg721KpFL1iFnpAztkHZeQwrpWshUD3oairoZnLZ5BYTATFagf4c",
  "key34": "4as9uvpJJntgFhrUrRprdUhQg435JyBFDupycx3YfQbwe5qzbKVXMP7aj7bK4aftRRzE8zJFy9gdCoozUXzZNL2W",
  "key35": "55XruKwnp48XthC42UchPXNbA7H4QtdNxrJjjL4xKHgxW8BJwMB1CQGdvDmyg9oCdE1UVhBHNLSQgCoDLTDLyhXe",
  "key36": "2mHxxStCFrHHkq7PkNjhw6r4kGmgtPgvvMxfeLZZiBmwDGJjqM5RTnDw8tSf4yM6z9gUDb6LyvWdnbLqdvpPH8Tv",
  "key37": "5b2rzPiWPMrrVsbj2etguNXH5XyhA5j3g6KD7ArcaCsU9vjqZb6arTYy1kERBfU2cLkWTst8afBZBqjYs9Jszh4v",
  "key38": "4hrxDcT8DnTfpkmMshfPQycvpwBaK13JvWvejmyfUiVTxvDAcZzg3WyygT7XdsCDYZFwpBzU1XUoS9QUWYMEYALq",
  "key39": "5VLqNBPLT1U4FtJcJkj7ThgXYjXH2CWa5V5nJ7jAUn5DMogHwxUshGjKcTDxedGS6Au4zvYtzGzdUAvgzCNUdku",
  "key40": "3aXxrb9vyhSEb9K6xxZbfV22BzkgT2Z7wRtPGzQLu3XaZLnBvAkiBHYWuV3UDUHuSJzYPraweMyk6pCSXTT5NmXk",
  "key41": "2KF5F2CWc6VjGYzfscCZdSUTQkZQGUYzExghkfHMpUFqrTzbCxtbQWagbgFTp88HZUAjWYNuSpv9Pu66Ep6qqN33",
  "key42": "cDAacPDntuJVMfEqqEw4xHeBR1GPcRU6csBBDi3bQztrQdufZpzPgwP5u2mzwArJJkrZkN9DfPa2zbdbZH7YJMP",
  "key43": "3R9WXEq4NYfkVRRoHsEaqqFcmoCqWwKLfJR11STcLvP4Gj2uVAUQ9kqkH7VfUJHmYjSLwV8g9Ev7tzXfgAjgqw5J",
  "key44": "3hjBNYDExVPwHv7YBRR1Tvn2rH2WBaQfBTYuit9KTqtQE254jttkdFmFcqurTYrAnZy5fAumXpmKA7NwC2Ydc7TQ",
  "key45": "2hNB7tKHvoTp1C4gSBRgJ38XrT1JYngcEkmx3XhfuNz7NvYTePps1VpUM6Q9fSdBf6rE8AAUnQZBFsJGKsZqMReF",
  "key46": "2GcoLHcb1gAi4jTQKoMMHrosUCTJsTepB6WoczHvuPnjPHM5GQaVwX6UdtdZM9nHV9NMmdBxxpUYMXavdRuczF5u",
  "key47": "39mojacuLBh8NJe17B3tsLFY3wzYFWCa9viWCYhsNqH4crYDexu9AegVEWNB5fFSf7mvCknGCqwRYCji1cKDLdp1"
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
