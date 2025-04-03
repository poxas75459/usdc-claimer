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
    "477GMLicLnLvZjR1cR4gSWwTStB8TvBRcHpNhwdogYjJ5g3cmNaG49J2SVEMCc4qPFxT97QjChe8uxE9PAhpjBQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h84pKxF3JvJVNX3NgS8oRgbw3AD7YWcR9CkokUCPDv4fzubpsh5TxLDAynJ9yfRTg7NsuKRQpeuz2TY9Bkp3ADh",
  "key1": "2v4HM5MNmPoM6M2YpW3KSYSTMJ1nXZhNfzKGayVBnQRDea2dwnzN2UnpcUYGY6g2qAr6ZiBSHQfvZiLdA9nZsc9W",
  "key2": "358eYFhkzuzq1fbyG1MwcAyzBqmotmpdPxPN1TwBPV4FVyAgU5vmFWDBduer3fvARVmTQxPE8nte84vT83hsRSyB",
  "key3": "64yMyYD8EAPt4bpi2sMnfW7eauqVBifUzUdASx66c9DUZxeSp9NVevS6STjGM3uLwEcuRSRqqXTFsAD326TEuxsL",
  "key4": "SwLJ9o5kfgpRMEqcjdCYwfY1kidq2bRG58Q8hLZs23Y8Vqggq16Ajm4upMTvtmRvJVDPBK3hcSzNg295nqSWpFT",
  "key5": "4TFtHZKj37pd42EBvzhkpdeL1fp418myEjmDpYfniAfzGCJa2GQwct9jdTUVWQKnubXVGft8QLWuH8F3CshzPnEz",
  "key6": "5ZhhnM3X77LKPPe3Dnu5Rg5dkb8NniT8fjGBDqUjqv2DgkxVLEwf2j3r7bdXdCptB4s2LdAHDrweD3t9Xwew92s8",
  "key7": "2HcW5KLPtf72ypsmfn9gUuCCuxE4dgGQHjYPPf4VDdCEJWDjLdz2yEXcVU9KpVYcbv3iUfUr6wVW7h1bizhYciEb",
  "key8": "5upSgVoidAbw6rGNChES1Tk85AnuwW6tHEh3GBpRpq1rkcGEsFxv3yhQk2zX3wH9PyLwZ422inEeDoGPBeSZ8Gxf",
  "key9": "3xHtbjyow3GvfXgXJF2V8irSzHhGHNCRUzfbeiMSbpgikR3NNfsSCeZWsBBMkJUjFsjebsn9qjLanUn3KxCnD3pc",
  "key10": "5JwmkzyULALgszrjJFV62Rc3GZdF9QeKSxyr8zHXWUrE2hqaxr5rYWqNiGC5NSK8vaxUzyu4EnfUgFgnAnisWQFS",
  "key11": "2LPeVRwQNjGaFPEda88ksqCMGnZJf5AvwCBeHdoiiEDvai6zPAaQZUJKaJLPGpKjpPGxxYC2SX2r1mMRE1EM2HVa",
  "key12": "4Ua9CZ86GpFZjEacepm1QFLFFMyy21kaYWx88iH6krBZRQnZ2wiQr9UEppESppQM2aNBoZcJAb4XBJL5RmoRUHFG",
  "key13": "4hDyBbRxXt9qdvovxxBzZJuJ6sKeMGESJ5r3iZ3uYbyiEZ8MGEAMWLov32EU2mNxmkpVd8qpoxKw2FRhpsBCFkKi",
  "key14": "47AQNjyWhQGcU9UP5orEbADaXTLXRQwkY9i5Wcf1MyfnZyweoTS4Jha6ehCtQ7pgE5n9icMtcKQ7Q6Lronceo2Vn",
  "key15": "39tEWno18JvBNdah6eekZAH6Ve5LN7FjTeyaNyerimDyGMJCYyt6pFxL8PLxRHNB2LAXjdxh8Qs7CaGx5Wxhqj2C",
  "key16": "bLPTZjvCf5vroWDSgEVx5aP6WSUN9qnzh9A9EUr738YkgS4fg5phoRZvxtrYw6mKhujpmrnKseczCNP78qYzktu",
  "key17": "2LVLFYcq6Jszi9X1ha7HiccCEK81gpCcWBokUVnieDy1x8t85QtteWoMp5wMJ1i5io6yjQWEoZmf1QfWRdpTmuRa",
  "key18": "5ySRwE7BDZhyik3TmgmwsgTYoo2LsNTtjCCfU9zdAx4Rezc8G2gsBPdJFww9vqWTKHZnYvqu3QbWaBPZBP4GTxWk",
  "key19": "wtEwoGaZfKAvesAyo7mX1WAxqQUMFRBWu3M8YBzJtZ35wepkhJMyonF8GxvtTPDKB1zZkRQ5tfAiLZdkoHgmSfq",
  "key20": "5d23SytvSGpAMdjhWQvdn5W7CA55YJWuhQUXaDdRw6unwcrAYHwPCMyoCex1GmsEB6i1fcuhajMQLnrUWPNUmUjn",
  "key21": "4YdLF472PvxE6kuubMUUwDLbScGzvwb7MRmBnjTtQyoqBU6SuotVN3tmdGyaCesVUH6FgabCXfaVsY47Cv5pRZ64",
  "key22": "3pfgLbnGBpE5JHMQNWGqhwp3d65afQQPku3vcc3DLwR1qHnb5SN2DLoUCFLEboudwwyLTY832CRWW3YNDyid7g6E",
  "key23": "2PXzAFArB1byCnXu51ETPyMSgweyHP2YsgPVCnC92htwJVHR4Gs5KFhqYwypPyoxxAcvzfhRSE3Hm8uVn9yaFRVb",
  "key24": "2W5C2eSYeFp27MbE5yojCgRja5pBbooLT7DsnqNt75LuphVCAtBwh77cPaxBs3NLths4sgtVyLyvvVL4XgwvbeGR",
  "key25": "44xutLdFihxpXjM2vwVKCyARbyCNS8hw9BmLdu5z6fcEC2NwMQcRRqos2pycVyXWf8SKbcKBFm7udbBZPT64p4oA",
  "key26": "4TobgA4oivv4TxyZgodbYDKRXrhx79NBAjQ6ZsC1J6hPsEcJyDxGbVAY895sAjZ2PjF98H6uhDCnAht9k3QjZM3P",
  "key27": "44serGZQk7h1E9tcF9RQPBUeCEDAgn63da9AQyyHCw6NMpSY1reJpuD4t6cteaWr1hhthbiJtnQoznUVTtNjghZe",
  "key28": "4t8caCZpFEUgETC9rudaFqBrSAz4af1ZjJpLNbkYdQdD9sbK1yzubrbpLr2foGtRbobRmKquAqZsfvCc9SvyahzW",
  "key29": "3UEwuBHstt9oy2ZdLkFHJTEZyYWbpyJaoeSCpirh6U97t46HcfWEsnAZfKR8mfUT39xM1W1s2WYvQYyBoBpLP9ik",
  "key30": "4LStehtdDYChQU2daqhetVvz52MJa7e5z3LoVUniXTWgLMBz6cnjU3NZNLsPeiow6dLFy29tbadtPQnNNw8izAb6",
  "key31": "5VNQ7odcTAZ8G4UaJbQqKHzhLABSz7DDR8vM4my7CPVWdY2TibbLJFwrn1eRqBzukDSUtnFy3vZ7ZhPfBjETkSpj",
  "key32": "VUTdycqYyfGtRuEdPXxZefxvixNN38r5wg5U6bKXxMPMWUFdpcs2C7uDPYoiqGFpLK6kXJN9n7jtdVViqjs7ysf",
  "key33": "3sqcxhXYn5ibVBsGK6oP3beWkrkScEXrmtCB6FTyv2Lxn5P888rKNwc9ZYK6imcHnjGiAX6cvq9RKXq3ZNhDBYJF",
  "key34": "2ytzVKjDim6ThesUscBaTdHE6RtwPMy4y4oGDy6QXcRYnT6rZZ9D8bt62VkAJiTzBf7Nt1Nh8eUTHP4cH6StCVAk",
  "key35": "49tnaPiDQj7Er16Tx4PzTFk7mX56UitQ2udCMofots9L2w7h2VQdSNpNKm76uA9SX2777jCSJfE8bPWtGYk9dDL5",
  "key36": "oBWqJ42B12hH5M5wnPXsm2tWRPBokAavzcXnMvr2u3LxfBXyFMsDucZmFbLnSSRyVHwFSnxZS32WFvvZsyR3Aa5",
  "key37": "3r7Grx52P2VH4NrFohm653HtsZAvYR4YdKeTayitKFhBfYruWwu19zxuMk8bFt9VvrNNz6raAYhJtq1wcadq2bg9",
  "key38": "2NojcjRFRpUNwVYMHVrcsEqUmxdRycVy1bRkMkB9bpahv1zN8ZGcYdyqvbZFFV99geTSGZJbYgWMinB8QpGtefd1",
  "key39": "22BWhHLkXW7djHHQNwmi7kGcVRpiXBY9LAn2j3X6sFoj8nmL8mELyaQKUssjPTTscmCv5CxSTyDR3LNFohbNubAa",
  "key40": "DyYiwiS1jonMdfG7NputybLjiSQv2bqcZkXDJJmHJ4g4zkjS9N1Mx5qiawzXbjUqxNFUBHvnBQKNokgCM4LGeyN",
  "key41": "5cMjH6RpiCKqX4bWoRCVagoRfBc5ECTrox2Fo3yQHNWvuQWYzd6WpUQRsuxfMSVChsxn4SvVCZkZUdS5jnwVeC3D",
  "key42": "ZKprd51k5GtyLxbkC1AvaMDCXBYhXW2gerRym7935R8ktet5boFsZS4jP2c7NEH9MAyYvZ61Qf8QcxEE5jsQCvb",
  "key43": "5D8jH7Xbr1gybzaz34enPxWwaCWwigaBuBhW8j3XunySHst5K51ASL1RhZY4RJdbzebaV8oJL76ndfeVvxwapZgL",
  "key44": "5LsYzQTUmYPFd9vtuZGNsiTCow6dnMSHkZyViZSUNwznkZY2peBedFvHMX1LRzXzdqH9FNsLv9sHzdE6HUHi8ZuQ"
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
