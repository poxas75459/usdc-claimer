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
    "2yvjjaCF6HC1CXWtx61Er6RmP1hu9XekzipnePQu1rDJYMPTau7fo6tJ7ZS2BnkyHAuFmpfX9MbS1cYsJqggu32f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mexbMnVeGTy558nq2nQHjT9UZNqQ6dcifjz7Jb4FVbdLPNpAViqJd1eKx8GFWHo1JwtmpGjmqihTXJDGxBD7Wx4",
  "key1": "3zYigR6M3wVCtdByhLkKzUMzsWCxxHWR165ixQqJjzjHMosd6tv4JxP2Ygy73PprmAKgQMjCaDAbTyALD3KGSjdw",
  "key2": "4nPbMo6Bxu42VVhJPLdJm8PbgSWgoNqwgkaR5RkByjDMuWYMHRukuzmGTB2GT3pY2FScmNkpAqxdD77mFotbJ7XT",
  "key3": "4pwqiCqwwAcLJhSoQgUh8DhdbK4pfeSFMeqxtHq74RpoZoV9cEUxN4JGxrwQZGwgmTuczHaLrZYCnnVNEuUhUWkF",
  "key4": "5rQVf4ohUt9pZT2GXAtGNDL9UvRDXVFfMyHovNaKwcf2aS1mjew3yMV2cyBuU6nz32j9s6SRED6Z1XCVUUgToCXg",
  "key5": "4VrtXsXeycu97oqabr2guWfNUPFpdTCveFQDmyWWLhm6F4NjsJKujP1dfqUafHE1hrQYfYMd84MzapsFYAsvX7yH",
  "key6": "5Qxyw8k5PYy74bxe7Ws2yHRejg1zM2evhiKdTnBAAziY8LNif5hBcBXqomAufCgF7BrVsUoPcFEKvQ9ruECFCSah",
  "key7": "5FA66pyZ5xB7ihwaLWTqRJaM47n3uDaJjZmiAyiweTTNxZqX7RzsxHfkwJ2rrWwojcwgQfc7QWXXPbHVunXPLNWm",
  "key8": "48j5YvSd1p3hwAghojBdYLZhfTq6vWNode7kARQHkWc6VNq4S8VhkHP5Z6FhXJCkFCLM3LHBn4ZbewB5htoKoM7r",
  "key9": "Qo8Ge1ipTJ7sLpDbgamQCQ7mYaBFVp9qvMxhrceKQ9RNssy19hUsSVJxNLtCCKAZTeW9pFWYgNFjWs18t423J6R",
  "key10": "5TfDuign3T5egZaYneDtZpe4D7ZpjKsj9DMJH83hUdGT8ppoH79hcDFgGC4sFASn5ZFVDzVvDRTAVPSfYrEX4GFX",
  "key11": "3YKS3PNaxUQ3kBXNdA3E7GeALBkeAHuYwizjM4miEDS3AFXM2hNSM9JkBxAekJfukWeHmJnrri9P2v3DVmZ8v9hR",
  "key12": "32yVkXtUwNw6yBkt1K4iPN238Mfta1hUgymbYnSJzbLG1By8Uwd6DqFtbregzT6z4RWfSsP4ePzH2WWrEcFHvZeJ",
  "key13": "5tMCxJQ5KvtFy2Cg52RVdAfsEKThoctYeXnwtnhyxTSB8zSVW5LbNfa1CmAAjud7QPEr3aK62sn8KQ3JQSLSgagx",
  "key14": "2LhNVozgJ7mzvqnCmFXfDjGLfokj1ui94HHbjXaBJbLLSSXzXqCiSHDZMqi7VAsk8C6H56AASdnAtiy4YXEEGfMi",
  "key15": "3LyVvoa8TGgnJAT4AdUH2E57kYTxvFCzTrHNdnq9GX3gacUoyS6osDCvDh5chcnGRX5jHefguprixKXMEzHGVkoJ",
  "key16": "2AKEw3myyxPoByKDZhcCjetCFcz9wiiYfFrrj5jTMwh8RGu4WtvTUP4BJfCJgscpYbgBe3AaRU9KxeTPcP7MFVV4",
  "key17": "2xy44uf3Wa3rphQGdyiwBL31utXCpDFUhfQw3L7XQqRZ68SngWk9bdvHS98RKKYKnGwEJBYN6uP5Nd3shcMMR7c5",
  "key18": "5pQUadEaYHBJuVzhHVD3b7WsuVzSg4QKaZQ6KwuivFeR7c6ShRq7XRqcBbsDbHiLi8bE2D3G3pg8e1WCWWhRdTyL",
  "key19": "3EsgW9bD8ZvWbUdwzpA9tv3ej44LQQav3t87b4BZipF7pjfFzrfWVwRo61Zv1GMVjvx6cegcSQejQyQ6R1QWWtPd",
  "key20": "2jSBedgfkPeGmkeaXx6nzRoSAyq7qBXpiad5NVRbMuAPHTePctPeYisSF3yqSgbrn9H8pbNmTZnAbnvjz2Sk6XLn",
  "key21": "3FwuSv7Zx9sy1xTQ6UQ1gnhUUZsZk81U1szwszEDskzqueVWMaJMiFfoSPvLFjKe1Zn7q8GJzkFSGkWFQdcz3C4u",
  "key22": "uFwBArv95CRy9ekidq1bdeeJYLNEM399ejRT2U6YD6mhsa3mMJitaJ3jQNSQt1Q5ERnXfRDJoT4kM5vknRhoT7C",
  "key23": "3UkE7FRiQFqNP1jzjHR6phA1S2w94cqHJrbbNvysNj5nSCkCHuphtAKXnsBRPTL9VPYr8a1oM6M4Jgqp5SbR3gV4",
  "key24": "4A49PYs9raL5Ew57ZkH3QiNxHVWrhbCg4tWDpiXJK1bdvtG9AsvoRWBfMPDqCsRjc3YCJBo9AfB3SX9jePX9Q9G5",
  "key25": "3Pf1fUAFUXCm8m1JyQfdaQL74YvDMYpr5w9BV1v95aZR6n7d9j8SKYT43zibz64tmtmdjXBLAwz3id16qxoYxg3o",
  "key26": "5k9ehjX1hTQz39kkLqcs25mrAgq2hksyG1bXFFeF46rcRYJM7snCQ9E98BwzxEaybN6HLqY3yxLL8Kd3uJGEcHf7",
  "key27": "66zWfz2gm75EmuhKPGgnb95SjuapXdK8cTLHvRv9s7GYjNh6fk7gA68j7B8umNm5YDMtouSNi9gGCUeBJNJfNGQw",
  "key28": "d3WGH8AMW5LGxH7FKGrdoqDKpt3AX2xC4FJnYeXje6nbwGgSNYRvUp2wnDrrTbVTcWDQatF7GgsxFE9kknWwqYC",
  "key29": "4KY848i1XVBNRda2z56d2715Fww1XLqHYb82giHGjpjcGwGPCMzhaHYjcgahL8ePkx2LP5s88SaRRhGi5KgijCSC",
  "key30": "3a4JRzsBENAwfJdHnCgrwsj6WxyUpAX23usfBcYFVThwBDXp4tbsS5Pr7wr3MxXATXsf7mAq2eGfu8HtwbA4G3nZ",
  "key31": "3EoYHrhRtmiKJiizBRcSLWygN4XoUa23n78iN2ua4ZWfP3MC5RaHXA7goLAThab7oBj5B4uGF77uFbJQ4nHUmWQz",
  "key32": "52j4XCxjY5ULD8LqEz6A4YhbGuvPsQ45aPCBKqnJN7dmfBwFFGPbrBsZYfi2LsrWDgfg3z7LsYd1pGNn5g241ZkA",
  "key33": "5X9MHXtgcw4qWpHVZ9j2388BKV6GDjTRTnerbyPKbPALDkMhYk8gRAA9yZRUSEjJfJ6Dcsj2a7V68zNycBCzVf9d",
  "key34": "3xvuhevWuACuTWLHYx8rjA4s7W2FHVfi5XLyqjw9QbRfTcPDao3opJHN7KqtgEannYYdRDPjHC7y2yuCD3TmFxSs"
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
