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
    "3CVmuFaG7tjMpFsv8q1Y7shdSEnbnuC1Q27td1c7ySzTzpx2vFwuxWM44uW1r5EnBDugyQCjzRjWSBqufCff49Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqHLhLLcBaTAfBbnbNPGScoBqwZcCC9GkSiwF5E1aNBkC6AHea8aQDzRckdKBEubNULvnvGzuNjTBWbKVv3gzd3",
  "key1": "5Tp9GXLucTdx6Nbqc45VaVo1TbSSuaTGPa2prXmfrqg5TzwqaVirnnhSPi1MeTuKRn9uykBU6XDTJ6QRAWDC6ibn",
  "key2": "3pTvwCqeLK5Dsamxg5FTh8uBc9BTBJevJYia4iM7wm8rjQSc1AzLfp6j6n5z6i465BxXfd7iQjuRJL9Yz36ykkxz",
  "key3": "4pLB2VNGstEkxNSZw1AXGqD4BfSZMHP8Z9UfdBh67mprXGtNsDQ1LS8YuYuZev1ARRDWNPqctDv4SEqngni5Dr4W",
  "key4": "33rRV4H9pzPp8E1QZv1YfPGCREatPUKatZXdg9ag7xKGjivELThK31EZsjZrCDosyfWKoC1f8qK7kUGGQ6NY6ene",
  "key5": "vbpLPKhXMvtT8Fdg5iqe2aAQ2UCw9yhzELGngna4LzLFY1JboFfkyzzQid3mYNKjkC8M2DMQGyaYP5vaL3hkeCg",
  "key6": "24Hu2Ke1QxXEaBTQ8hNRKEhuGAFxWsYgXXk6PLzqAdBdfRtFV7QLTCsaiqvVYCPg385cGrCSVXcUiyxyb4fURk22",
  "key7": "5XBJMUsKwrHWdGzmbJy4fnoffSsTencxdH2HA3WkxbmvdKx5ZpCM3aK9oi4FToT8MaLxCjsfNmv3d7XHNfW5DcnB",
  "key8": "2Haxc9cx9hAnmHFNvSwpqBgBLr1r5j2CEBCenmGeyUoASvKtRgvzhEkftEgPcK453cvPaZfYH8ZCKVmY3MfbvrMU",
  "key9": "4UpHbGSBb5eUtYXwAfGBTWJdKPHr7FdkNLRW9FwUJsqQM1bijhXWYcmB4k2989kHQuXCV6a3fDXbzNTYdBrExCtb",
  "key10": "5q7TGE9SjMML2vCFPwvibL5ba8RMw59mj5UhMFW4N3KLP1X55yoRM98GvkMYHZmUUbVzqrY5v7fC67kGEdHvg8Z2",
  "key11": "5uZZYBkerBNuCuZDmuEd89utAuL5xXEXvNN3UcMTN6StvMsu1idRFDKRhy1whyfAHHws8hLJkpb6Q78p7FCHWv15",
  "key12": "4QX6QwRxe2Vz7CCPCFJk5QgV2F7nNnwZ5E8xuW2dKDR6hG3LXJsnVaUZ17gez55tJTuN5YE3UJ7bTLCvqhTsubUf",
  "key13": "3wtUibH92TPdiwASKd2bqwMQveZ96765TyN6JVmu9YB2MSzw948gHjGy6YE2uqVopFhndWm6tut1zZSiSFvjZcmJ",
  "key14": "5x2dESw6zrhW9AjwFN5kam4X7p6UW3SRnvF1EAb9G12xKNFwPsui8EuzyK3qF2jcoAXQZwobVbJuPUWnqX59Kcsc",
  "key15": "WqRwkcttzjUy9cok5AFR6tU6XzfEEaSxccmcx8hU1xFAz1mFzXGyNe7NAYXLSVP5DyVJXQQrJBv3pbKth1epB7Y",
  "key16": "2gTW6CSXUAVbp75yuMHJohPpEMG26EW4RJXVe81oCb5Vsne83BQpczBtS47XhAzKk3Y3CsqGwCrrjvSmFYGSTQvn",
  "key17": "4nqKa44LP4KmtR8Sdx64WFjhc1Bmyh3MfynZoJKLjEancUmxCrwsNewaRS4kpyN4UfYUGaDZp4MvRJ7u197LTFQm",
  "key18": "559qVeStBjFkfUhk5M66skGBGFx6uBK6rbXLsoZGYfR3eog1YijLYe5VF4Tubbrd67pUtX7HmqBT7iVacG1kXq24",
  "key19": "3roKAEagzRTpj6WsbeTk7xq5Db3F9V7a6T4NBjFMKbVub1b5PjCaxzFRHkF76babNpLMwJBnNfevdP8Fdv6Aj45h",
  "key20": "coQRcTsf5hyHMbUwi2HXrJXdqRscJyYMZsB6t6tLnxtAsoJ3DXkLAFiSBrV4aF2ac91rqiW4EbJPaKy8rgn3VnD",
  "key21": "577WFi983wRcuYkB8KXqcNwBKAmqVmZfqaQhStSAHbA2SVmbRZJwXyZmgUA4voxBrz15rM9AY1KJbmgTXZz4w4No",
  "key22": "2Sbw5smUVz5eEmvTuidF7NB2PeF32qC2oTSEBgFY3FTM49RL6W47GPW1M3zH5YC32kzne8uhi33URqDJ1LHi7tXM",
  "key23": "42V91ykKjU6iovVsEGYL4TAMtPt5MB6abkds3ZFFRJXMxnXncd59KsPEeec52KdRXExUtCuvGAtjqU3SjTWGdBgK",
  "key24": "2sN7ZkDqkgTGK7Tb9rdkP5Fe6P6GykqBN2szvCcDC3LNLvyYVQpxj7Rkv1JmqZpTzx9VEW7Qd4M8TKqNYE6jE2dB",
  "key25": "2PBYX7HZEkSubfTrg3uVZ2swra1Eftab7XaYaxGrp5cg2SQQ7EwZAUcm1GwfWSqiZqCv2C8BHqNygNYyVNMBzEhm",
  "key26": "2xwUw6BuGuXN38xmycqxhu6rcmqyoFTWwKHNNvyZBUz8RuEgxG1mGCX2Xae1Nv61bP34o3mXCrsoRHwrtaBHcBpN",
  "key27": "4qDQPKTzRKFzdNvzw9qEgaskgk58tCaMVPaPNsfWsABmeRXQfpp2ab1HNy6uKaX76PqdpaRcvGzBUKEwAxYBppiz",
  "key28": "3954My6pG69Dj3QFvzSpZsp4An3tC34nvVULXXYAmkZKpudVJeyEPVVRygpxRn1ZhvSCVagMfRaEWzsoLDhJcB1W",
  "key29": "5AWhk7aDHeZ9a9dvyS7JrsdKKaG6EVcTLMfrd5wASeDD75858fo2SBatt1e4W9ZYtgsy5pUeBmZSsQLSX9LDaWE3",
  "key30": "4WL9pqSJrv4Yjw4KxNmzvwbFrTNyED8oh9gXCy182cYqcrSHqoyztNfNfVSrHLrfVqzLgqChExRzBxi2GxKVnNgf",
  "key31": "4ksNBEQbXen4iAcRDY3HzQrmm5U3kMwHtkWVN9KjmzSnR2VFPamNjMxabU57dC9KauzgcuZjeD1FyYVWVFscrJhC",
  "key32": "2BidJefaQj2cQgizVjf5J2YdAtKde34ysogZnLCcYpAgM7h5Ft4bzN2fGdfBicW9vmgxVgtJqmpEJLkJVApsvoGG",
  "key33": "ti1J14bUjDBxffBQpMSAkRNpTJdyFL2r3GUme3QTmVbDgtDzbXVFaR1k6Gh42peAk68HVoEfZePYidTXoYxruL7",
  "key34": "4AQCiYHScXFWNKVeC25JSrSqDhG9rzn7oTS3SddsnKF9QLkWswVzTo6gwRDWst3ASpH1afSP6iC2GfGvYJ12eBbm",
  "key35": "5PDbTqZn3L8bmMzZij3FmMpYerGxW24Mnkxnbq9uyemngsX4jetbAPQYoPN8gshRTNRHCcaF8pnjQjLoqisEL5AZ"
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
