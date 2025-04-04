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
    "7dLpBQqq1iAfu5X4iptJn9FYdw4n47sU8E3AUizKAKTh2kHix8WV78yV5Vtq4YMUYojB72s39RfetRXEosZoE8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45thskKJTRHCuGxJuNkysHfzCuHJKoVDgbh5BB1g7vK8b98BonqSb87Tt1xDJkpoC94ETDZnvDWGvB4H6JCwsz1W",
  "key1": "2WUnF64r4KRYaqgeqrr8YL5iEHFpNxQVC6qfYh4pFKCFXdoNYRCWQJUhR4szZ7gfHzkKYWA5SzJpYXsN3i1YMJeS",
  "key2": "hGsVYLaVwb7apZNR4pJ25iQEGSAKRZcrPvvRvBn9aXcG3qH79FjU1nijgA1orJ4ezzRSpc3fiDg1qZ1saXpZXwz",
  "key3": "2Zgcawk7oG3aWyFVGxLpEp3iJquZnzxG68Ust2dCeytuK4XzyZSqu22rswbqzca7jRUDba6aguz7UXuL8jcnk9kD",
  "key4": "125xQBbMFxwwYevExKk62kLpTpoGbT9kmXL22bs3c3jNsw46tjeShS8Rw6kffmLRGuj1c8hZh64jG98PHPPnYVd8",
  "key5": "5HGJvY3vZ4YpF2GwP7YzoUTeLw3XMLFbSRPFEH2kecqwS8rTjRWZ4p28zBk4otBrmqP7vb4UGUCPaZwQdw5Sh8Kk",
  "key6": "3k9QM86kEnBcPbSLKbtBq6igyH6i4SK3pQsZyfkNyDzkJWDHeidNdJMkbdKxKxGUWZwV62dzZzxdSJBZXEiBi2Yz",
  "key7": "4A9QsnKuE15HKSrDPv7rqSnbKua7yYHiuRNjpCohnbfBUpYydqcZiRKhskUqjbd86c1Rrb9j2M6yqiBCTwAkrppa",
  "key8": "2wwaCt6JpRgVe6L6TfFE5K3VoRbSiuiPen6ehmKVp7GywcvEvX3akY298SmtJcPGXc3KS2dYKjL2Ykg2mYoknJLi",
  "key9": "4F7qbqp2z5JfzrtN9jNnbTtfYktCxudxqaiSEqkPLjtnAap4tLr56v1U6apU5BNyVTDQxXxZ1EF5Pcyfe1cSw8LA",
  "key10": "2bti9cMkiW7vpTsiCJCaMNEWbjQ5CyjbnebSRiwkP3wie3cko3BrRxf9pmjQwuL4J6mxaUwCGmRi3HyT7UDVZnoL",
  "key11": "5BTKsAfGvAhJqrvKTc1VPAxnrABaFjzuje3y5VZnkam4cGHcp6u47pnLjbUHWruw3BNjmdYj7VrFCbEAzQTVkmHr",
  "key12": "NFS8yDW4dsab6ZKw8Nf43q5MubgUkRU5vHpLS8w4jYvQWbu1vf7PbMha8vhGnzb5XEvZN8riM8wqbQuBLNYNiCc",
  "key13": "NyhRswurBfPUfXBjhWZKVfJ4ZofGKMsLA44y5MBctSE5g3W23UScPLChJw4rUXzjDqEZN9XeD6D3Lt2btscf2cy",
  "key14": "645b3kYcVYrZQ9G2vTeqw17gXzQFQ1LEzc6r39Wbyr8w1cD64j5sWxojDuwAcdBgErVr1rRjwTpNugHPCQ3c8mf4",
  "key15": "5a2njZktSm1hjXUTaKZPqaRCZSqEQwxaL5obzdnbXdajbRTVkDB8pxdJj89MeyCGncWv4XCkhkdfcxpZia29PSVR",
  "key16": "4wBJ9a6GtxxHrAKSK4nAEABL7ZhrUdmvJq8kRUh7PLdvYPv3heDzh1WDLAxAzjB5jMUaaFRuF9P5znyuwK1qkCDp",
  "key17": "3QYrURD8AUqr5XSwAF6f3bdg9C7hAaLcZu88DAAvwoH7pSWQxKRdpYTG36ojv1o2GHtNXgSVFKCdU4Ev26vumx4M",
  "key18": "5nJdbkXKd9HpUcsF9wr9J5iZjVUTb1PNJNvoHYtkWfkwh1FyELAowTTFJYEiYPVAdXcDuyZSFjR9H87rqcczyUNF",
  "key19": "5ij41nPkiiXYHcpziPEiqqCoBvBYx3Kz58yF7rmPCSQjRtQRDGiymYxdwUGCs1b13StfMwYAhTxf8edvp76AEEJh",
  "key20": "KcDwSrpGAgYFYSMbVTpB3LyeXTBCufmMnmS6AC1YJ5rmfjyfdKVAHzQsshGFmwRPgsai55ZAyMziiW3w98aH4C1",
  "key21": "329f1dgTcp3e9KNy5Eua3kHeAzJeev7aipPMgPiRVCR3yhrUvv79j97CujnqjSJa9DaAPqnBqZAqT6zYHo4gEULu",
  "key22": "51Z9gMkRtGb6NeWTuyqL4C43zR6ddSEUq9Ei35tfZ51kXpeLaqaJfs5hU1u3mzT9id42EWvUH25cH21YDbWaXHCM",
  "key23": "63uXhRxe3GmrEDyo58FiyhDncgXK9E7xwV1RFPkG18mwar4TdvrfhvZtPJUo1qXie8FfWzj3fmppRiXnnnczaAPq",
  "key24": "4cxLbP2q6yhCMj7d3fbjAToc5a1HQxPhaeiSbSf1giRPfLgkAwPTp7g3y5dAWo3FkBD2GYrqjhzLcpbuCi6Q1naF",
  "key25": "5i96owtnE7RF4ze7SuDMo6vhi4f98e6jqkyvZnKUcA7BhiJcsZNWPYMwUobpCvQfyWZ3LXDdu1DqFsHp1gag5XvN",
  "key26": "2p4RVFFJzzBH96GPVMbBnqzTtLYZvy6mU3DW3BrKVHqiboExMzgAK3CXviS7zJmuHAmjJ2cpevM9vWrnJFzf9f1a",
  "key27": "UJPWSpnx3bdXaPH8zSuAgnTPLVJwtPm2s1mVV6o5nC9GbR8X2VHHje5NH1ioEcxGCxMbZuXAoSJum3Riw66563b",
  "key28": "3YBmfLepooiFtaAYnwmJjvdw7vm982HiyyH5Y9apN6VDy3bnCRPhEKvmtgaLFdLXiuy5LSZ9zodyjfYKtBHUCSgT",
  "key29": "3pD2YNJVkygEfbXKUQ1wwT6ie3pm6qGqZ3njGuei9rTt1mzTGdbfdU3V7o58SczhdsAW5SkJcqYR1aAo8vbZUQwr",
  "key30": "2dfVgc9fMpTouSxqdx8jfVmbDeqxwbDA9H39ku26B3u5B8VNcVjY71SCtREi2FG3NcQGUEr3CJdof8r2rP87hmMX",
  "key31": "3rPkAZf2wCiLCyEJszjvtTCPXHob5X9G8CWpvrmLkmKxVZfzb5miLErqeVMVBrAgugHrpE1opSeRrZiw9vrZ76rb",
  "key32": "4kTPcTtF5vnK5iigZscHVZtWHmypjU2BcRwJTwPgLYNEgm4XD11dRGz8QP8A3uzayhqXAc8ST3PbkVEKcBvuKWKf",
  "key33": "3ofP1uj6h2HqoEfiXiYCtWtzzyCsTPS7gGs1kXMRvbzLPRjYhJByAjbNF7TJszvRPDpbRGHe4xRtmq6SA9jYqdeQ",
  "key34": "32Gu2HTUQPRD3LXrrdQoDZFrX4kxftQESvWoe5vPV9UqyLzzqJskp8QP5gX4kHdS3b6AptEyMjr6PCgMAaD6rxaY",
  "key35": "4EPvizTSULvHKZFqC8dLDgJVDAe3kqVJ1RY7hXsJBugiX1X8mMrxyrYoc3dQmHX4DzLs715zCh7nKyDbAGCCvQhw",
  "key36": "4WS5Hrr9Gpqq8M2PTmSLzwa33Mt3LwdbvxCzdFcoRPyX9jCUTzaCQAosgnEcVCKUDZKe3cibtbAo46V3gwGvCZxb",
  "key37": "5v34ScKYTCq8Ea5jQvqjR6ufqoekwphW4Z5YbvimECFJ1qWC5rRzZTo6UYXy3XEFQxWUKzKzdw7AVqwmSFXqvrNa",
  "key38": "3KXkzoTvmhxPQbvH5TnSkVNyFYTe6FMCASqP4JQMpv17mRoGMs9cUNFHdCyQAsXCubLaknVHtTmi5e6bVdDmiPPs",
  "key39": "5WDx4D98WGcMiDRkH4Gd4HaQLNWyHfhbFRZJJWBZCcdaHLsV81KYmsH5zCYs1CoBTsJdg2KNTtsxPvwh5Rs3t37S"
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
