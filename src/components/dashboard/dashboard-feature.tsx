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
    "5SoHYcNr4rNQFJ7EWM92zjXHSQfW3fazDM7UuS4oseLoaXqZFHT8iCfMaaBaPT3WtBKvDbaicowSZJKMBgnbV6o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVesBnkCQpiEidvmgLjExzndK5vuwmRScV2qMZWVWKj5TFg3B6DReHhpmRhSD7Gp1FwSx5dbHiCuS8Rqi6vWGUe",
  "key1": "5kYhdgNcMvCM6uDgeXGEcqRMT3xihhbZbXsPWzs9WHWF4bFKa8BkP6rW9SFy9TtL2YHqgURotnK6A1Ttcq5Sqhxz",
  "key2": "4HABNBNRFTNCc4r1Ps89spro4dcAjNJwoGuV87Qf8grjHuEEdUFJzSpkCqCK9rmAeqA9yczAcbYsHNAcJBw4gSjk",
  "key3": "2etpiZR8xzagRfsqCEb95CyopgNoSzPqF2FCDXEoLpPzVnnWTCfRanV1KGtUTpHMjEB9HNGwV5sNVvULxRMehMrV",
  "key4": "38BxrZQgSDdUzCqZeiF3EsMweWT5y3unqNCzWXL9JHqJeQwQ4jrW3yuMHXhY7WnfgqXmVkYTYCLihJUvgLPLxhNe",
  "key5": "5zFdQBzghc9auysJTLmMUS9qeBrMTWKSK1b9ta5gmzgiQ8hGJ2jeABLd2goto8saeRsXvT3ApNyAhtMpw7V63j4C",
  "key6": "wuBbL73R1D2n5ArAXQcTjtL8Tcry6wQ3KQGBuqz2shMTXLgaxqBxLtVSGs3EKVkEKWgjnT76oV5ba1W4kqaiopg",
  "key7": "4H7KpA9Ycq3ATUZV4tx4hgsVM4T9331ZA99PyRGbM5jFwLNLzjRhrHbrJnqu5zFN7vaeYiqFPYut6HEeGzD8GrzS",
  "key8": "4H4qARohLExvX1KV3UAxJfV2cfsrqDSnb9MQXpeBiHzoKBGHMSGvQyEaaYZdZfeKMUsVL2P6BZGpp6naH157GWEa",
  "key9": "zD9GBTAQvpu5TSp7W1W46t3vCS6WCCkvcP5MFTFS3WkkxkjZ3Jnvc92BopnjVwDVtsuuGnJPQBJGtVm4p7TjGiP",
  "key10": "UkWgrrEPDCQyiGmnKTsz7pRHMT2fTziENrCKbqnMoqadpqDLvhHH5pXW8T4a6b5bA6ic7L5saYAUwKeexzKGYcT",
  "key11": "5VWEMfHSWgbPokZzu4dvUUMGSyRp3WnsJFmjmGiF1oF5ywPBEstfL5hV7SZpBfsc1Lv5aYRXCWpaqnB4DT8ZRef6",
  "key12": "63xQ8H9pumqMLHxZbNxSEDkDuMSVJsYkZmw6MYX6Z91CfPcwm7cK6C7aD2viKSg3Y9ijCndodLebX2AvW3HCWXw3",
  "key13": "ED4tLZRoJxKKWqHxB3ngdFFGdKEKPqmqCuc9aVfCyC71V2xYaiREdV6c8Uj1ZMWW68CTsGo1sgVRc9anrTBXLcG",
  "key14": "2pcCqt7AaVapbLtGo3YUYV3i7PMxw863NqcfZdcg5hJCvHteDSS4SibkMvybhiDSa6Nyb2pnGCEZrmiBHwPznYFx",
  "key15": "4xqs6EMaV53NTguQtjGjDEpzoBH5TGQetWSpyBihK9LSqWihK1PAdBVpdmYGxQjtcC1mFFhoqSDWXJeDxoGv9dZK",
  "key16": "3p2LTG2E4kRzE3TaJ4uqUawhnhfTKSh3iQKiwL6BNUYcfbEgMGuUXKRFs4bCEufjnGAsxKzEAtcdGx5XEvNiBVNk",
  "key17": "36H2WnUaXUcSSYTQRUtrMgeeDDKD2zeg3Pshdg4fxWigLRVLV4pvFe9jXe8o4GhV6WCBWGGc7ydwt9mFEMTn6ehA",
  "key18": "3dGi818usDFy283YnpX86bno7pV8FJRghoT2x6G2Y97Kdj8AaXVZ9SWVPng2JYNDcnMkirXd8Cmtj6XTN2qKTQ9W",
  "key19": "2Sj8HSGnjx7f5L8KdRH1z6TjuiWbFRvU3UwhEGkwAK3poJ9e2a9kVVfQAZNqPmic6jS9PTg2u75t615boKov4bMD",
  "key20": "2EkdgLCzFLAf4e1ToynTepNZag3jua2szzbUNSW5BeUA59FSAkdkfky2Ec1aRZLSx2RVKZ97crvjhLdeFM47GbZf",
  "key21": "2e5AnBY2TTZBzPzCiGemzsMeGT6KnQ1u8XN5bHP2UX55ra5krjqMX1bcRnymYbo87cJDAgMP8M29A9ZQdLixhFU9",
  "key22": "uEPTxXsyFCAosck2AVJ4V5QAD596t9E1QYp1uuLLbkVAMa3BoFqds89uw23b9D8paXKMuoAgwzqMvA4ycCFpXcM",
  "key23": "4TTgDJHbafQizDAXivKpQXRCW6oo9teaU4HMFxLYrh1wPaHv7n7tje6e7vHhQQRGVDkC8KoQMYMkwERqwUNyAZvE",
  "key24": "2oMCiVXp7jyjrff3ZhmnW2AQVXxXVP5hsjhrxhMD7QQRqLSbAqWWtnqsVhEETm3h6S1aKRvDYmmrFCyXe1TgZXfs",
  "key25": "3Nv6rqhDCZjZhA9cq4zqg3fSUkLw7nDvkxicKHXEtzv8Kh6fYSpqB2Snc3ToT2BjQMAucUy1kEJaeDFioNi9UjpE",
  "key26": "3RrHnea2G5nEEmhPQ5jzpCcQKDHg4kzA7rED3BeuB9KyApeXB5grPiKzx6YVuKZ18U433nqkPo9asPmaNDqqkwj6",
  "key27": "3TVPztRs8cd9Ryhxqgg8PGFr8auSENXkhxiyshnUJW1k4WZU5XTJ4BpozMKN9AzLa9wNGQfixqbV6fFJmm6MZajo",
  "key28": "4qQN1vHfiSFJZ2a2ijefQzXjtfPBzngCDiRd7T2Bt5bWCFG3eZCQCPoeF9HLw5UrzCmMa87e18tcLRGQJ8jaXbzT",
  "key29": "qRBG3u2gx2d3PAncyVR34fk1M6gxve1PE3QvaEMVbANyUKVdv6ATybLciUNXGFmRXuPryGFzxGq8nKytgWpqE12",
  "key30": "dqdTvEPaRLBNvLU3g3vtGxftaEtzsLa32mYP1LxHdgmABw4rHnmFdoi981BQyJRPBha21CiKjoGzFZVCzhnJJdf",
  "key31": "5YcPnwZ8SeN51xV2sY9WfJgETnpwSq6yfi7Dzn8vELCRK8pBmS57mLTrJFoKeAUSExVC9ChX6ACDi7GRVvgiEdHN",
  "key32": "3eewXCaRRsAp9i1JVf3MpCWDxTcqVTPBKfKqBJDRndehMY4gyoQw1kzTMTMyAUkUJsrpSKQm2msNdxHgN76rccgo",
  "key33": "4mKXWdGacmfFuA1EU2mbkHZW5pJr6PB6X1XFFugdp8oTwK6e24npPY2rSmpRN78w8SbnQD8Qj9nhAdyu8MyQD3Bn",
  "key34": "4xhdJzmq7ab68c3nXnorqEoXvtFnm4K4otPs1KZk8WpjEipQ5h4pZNuGssAZYns3XmSKiFEB5UNuER8vdhZdJpo",
  "key35": "246wr3mYwrUaybsaP9KYf2N6YCbEXT5a7x877MRLmCouie8fCVWpUhWNCwioGJanHYw3rcTyRRUPtm24rJVR2NvP",
  "key36": "JVuaCCyYeBuESdyDmyU1ZqTDfGFCNDFMojY5Lz8WAtTRY83drhJnP1wpB2TebU1PzE7xdcYryDC1XrpRBoXLf9m",
  "key37": "qZc6VrXyMfkkeYqacc5ywa5GaSpK6YQat8yjQQ4yzxY8pJL5pQQFEsQ3wvpW2w8o6qQW1Jtuwu6zAikzrWhAVQQ",
  "key38": "5V7TLpBDL7HtKEKXTUwFLcF8cdghHUxNpjuqrs2f3gsPquaV6cRd1gQvD65SamJReBibV7HnwMpAnD1UvgirfPif",
  "key39": "YrF5ubctcBsn3Yt6bjYbXPmM8bMeRFiwbqND98QbCfNqJUi8c7qj9DHAR6wwopug4KFojWY1JYc9xGDkSWLJ63g",
  "key40": "kSbJmuigGEJwf67mN948LWmoZgC9xbz2AnWzwLpNUWF7sEB3jmBCnjUPvM5XSjF28UVYvGuMpSdngPL7StnQKhv",
  "key41": "3DVeEWABxks7XufktgCZTBinq5FTGyJ7WLmXHj6vYqRRGt9GPiVpAf7xRamG4UQaTeQNfqZoqAyqmm4oXzaXquuX",
  "key42": "q2X3WcykWaqkMyym27Aqr9ErBzwida1iKSoCbnuNsnbvbTL5JXr2xDJ1yy619jajbji4U7SagXLjSHdnhbJUJuo"
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
