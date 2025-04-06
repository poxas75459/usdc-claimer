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
    "57PDFF1BJD5hL8cX9tqxTLUCpbPNnsChTqfHq5QvebprTAJMpe1quf3finqKNBcRp6nopTdfdx5K3xL5QZLDNRBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SStiK9z6h6zwKqoaRnQVuyA3QXEwDTaaxZD1teU4QJLW2XMgvQPggQ6KJcwnLcvxbUGMZJGd81tiyNgPofs9H7v",
  "key1": "5YKWKZFY7nEkoXHkrdHWkdh3UeHd8JteEKLpT6VTvkwxsxkTX7TKMtMj5uPgiCDUSsPEjGTkWsWWMbb3uWHHbkC6",
  "key2": "5UzGsGsVWKLBYxmvetJ7dfzjekfquft8hxDpSaUVgqp5mcgjDyNFKdhcFajyjgZAGaRxocmXjYmtyNjVAhwG8QQ4",
  "key3": "D4WH2vGFDqAVa31Lufjmv9WSK9BnZbt3VVvebAv7ULzQQGsZuMJ4E591Vd6pdk1fBZmNgukAzZkqkRihMaxb3o4",
  "key4": "33LPLq6zT7WViy5jfwGVtkyt1heCp2GTkMb1DeoVmXg1dvaMoHn9NHXc3UzTeDQkoFwkZZzx3KGzxxH7vdgQUece",
  "key5": "5hHGpi6NDYHbkVknJLiar1Fd6yewU9hVXDvD7vJP1BS41AdhJX76vkuiVhdUGJweDJyBGVWP7BScMsCMrjAbs3tW",
  "key6": "3Afc81A1tN91SY5v1wxyE9M59EoNqmX8NmcwfR5WzoQEzHriuiV57fKbujnPqsfqU3q1RRttNwksdy6w5J6v31u7",
  "key7": "2MMEHvmxNU8MgDqoe2woHqch6fVjETkrjidW16KKt28d76h8hmfxBHy7BCVhBEwrsgKfuWVibwiMXw23ut8UWvAm",
  "key8": "3yxURtmiCfabYt6RidBf1o31JYrEefRJGec72ncVYYbXZrZm6YqCVN4qKvLTET57rvfnWoJJJD1Dz3gEsy4b9igr",
  "key9": "4iMoWuRctHMVGvgTaA2qMLyQTErfb1v2o167bbct4N9Q6pvhmV9QHyRGHiWYXfaiw9ToVhMEriiFsAKAqYRMrNt3",
  "key10": "2tUXvskW5hLHh5WDyNykSTq9Nz1T1uxG3ji1RQTDMtJAtMi2oYhz7JtqN6SQB934nP7oBfKBfvam4CGVramuDqm7",
  "key11": "NcZ3ieXFscLW7d4K2rRzTn8Ymazb5uSHyhmu4mEeB1ut2ps1HjofpBZC32VcR81pSWCYpJMzWtGis9zQ1nB7x1C",
  "key12": "3e6FL1vB4h3bDms9mYZ2MXDeZW68iANCqhkaFgkJgomjEVTCLELhDgc6yPjKwUZSfgnxYPUxUbbCNqL9h5dKd6Rc",
  "key13": "4iaBExtkb7y5AsGgVkhUf8mQZDQ1BsnsyAyLneza45P1JiznRTD6sRDns9ygke6pv61u232RKrHBUWhZPdYfdLaP",
  "key14": "5ozqQ5Ft7X55EgEdTyqfNvZ8rQ9mVU94YMsUvVeifSVzFqg9UAzEhDLPqxCmSC9NRLabdUaeKdZZKexo8dy3XHbT",
  "key15": "2ifm5mW9GnkaneExXTU6i9X5yjXKJ21hUai776sWRqKwJUrSPJwy8ibFxdVQj8KgVNPGjnLc8NR7awN6hmsT9CgW",
  "key16": "2SV9FSi5zQpM4LMwWN3mcSbzuByYgULDY4mS9UUTrN9FVS4wqT5n1uBb2PM2LpEob1fsvCyjHut2dmiLvhmwbqsd",
  "key17": "2GEfw9jc3mofRU9zZBWV3bc1YPv45Cc2mDASkCM93E15yFwDAbmJG8ZTPEf2NU7RP1BbAWUcLssPEuRH4RvgFxWL",
  "key18": "5pDXFsz3of7VTMvcBnxUpWvibRz4p4yeQnedYL27WwiMFVLpv8gCjccy91SvbrfVtsU4jgD4sSr61Luaqt2qMGwU",
  "key19": "46242DMCUoWrrikZSRBhmfPGfzMeknkQDppikaV1ZZuVMh1854WgEELdisrnaD1o7NPnWLJQ3WTJumM4Ex1uXn4o",
  "key20": "32eQ2SE4sYswN7Zn9owDFqEcvKGZE5BaXuNA3XDYhr8xxCGEKbJ7R18aUEZErhpDtzNCD4qRLvGgPHTt2xXWcPTm",
  "key21": "4QfpF39jxrMQgRXrrhPsVFjQzWFP4QPuiL2P257F44PrbvRKGYDpcogZ9zirpK2eDkur9paQYsvYKNpZLcvnYma2",
  "key22": "4zXWfivKuJnzNVTP1BwMbFpRQBz6smzCXcgBMvWvKURRvgxjuDnSgkPtYVkMscPeQjmXzV2nVQHFmH39wfM8yU3X",
  "key23": "9hwDz2H7bCyZTC814UAoM7uH8iPJopqTGisUdbqC88SyXTVjXU3F3gUfc86VefNpVtAb4djahnyt1cn71BCrVBE",
  "key24": "3tXqje85m5XbDkgVrEUZf2T1MBqpL8QqQrTLThQ4E35L33hXBzyHJdAMKHKDKsUMHXgtma9woRnzKyPPMbdpv9U1",
  "key25": "5p5cmGBb66R2vGugoajXkA9ysXkcQchWjc3LNZhJQvgTa8HmqXZk3sKbtKUC2jNP3gVNnKok6itsSt9PZsyBfGHi",
  "key26": "3u2TAcsQSWfd74F7YNrp2SFhqLYjPQiDEHYCagvDzeaH7gdKH3dMPjwxkZNb6spMFjPznW4voKKi5R9hTNuH5XZJ",
  "key27": "2k9S8t6ohNP2wbz3C8RUhh1UYxyrySA4C6qvUkyqCkA2jsUuJ9ov8iq6QpEMi6ZUaJX3askh9qpgWq4Tq6wu6Sep",
  "key28": "5QzqX4pAnFVHZZzCh3pATyBxUpCCLT1MjYBEw4Chwym6ZdtUNiQqit29gWJo4dgRtU2aj1th4Y6uGmFuBdwkC1iY",
  "key29": "4SkdZCaJexUt9nR7FiJsEjqmpeWodnu5Jorh8NcJFdSuPpxpM8GGnLyykXGKczb56Ary193zmYLxswTu5gPRt3cB",
  "key30": "vWDweBDFPvGDgJ5r2xH1S5rdrsmXEnue2TuXyqmHBxmsbKWuZiQqVSM2CAZzSv4Cnbh3qXXYY7eYvde5rZ4YJWf"
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
