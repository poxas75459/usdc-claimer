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
    "2L8zZTpeADHTScUYzBhXu9KmvWX3hMSfmdhdsvPQHHFALwWyHNSyw6YAhrdLfA2mhaywZupmF9c6xhSz9eGR7yin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GK2QHqsvG2fu5LUsTafpQLqZuR6fnx9PfsqCViGucTqARB46UTu1ZgsvgqxJwoYbbHwWYxR4wz49wYzCXSs6ftY",
  "key1": "5f5ceLMvUGTP3S4ynmV4ch98rD1vnoT29VvNAwJMGgJ2psJ9Jxin61s2ZkDQcKRmxgbhAmtpzVk5jAKJgHVLxQNS",
  "key2": "cF6y95to6Qds51XL81ggqUxGEEdxzfGiafzjKYpWre6D6SmioGj48djjuZK6nZKuPQ14YHr8GG6FngWmg6kQGnX",
  "key3": "4PbYWb1wLtoL6cbG1cMJtSDHLeVgor8Hn3kc7VfcSive8Bib9kXMSEwA4J2ixFwGWC9TkdQBHH5YXpJeb5PtBvVV",
  "key4": "4HAhoFQ9F5ruEAY5UKfSHJyypF33mdcNL75d6wPUivftKNNTY2FgxTW5kWfymbvMeLBEAZaRwh6sQHVuHo3vxev3",
  "key5": "4RjwXKPYaQ66KMusgKyJR2kG8p6c4ogsFrEvUbKd5fd2QNZ2PPN1Ys4Tfj2mHs294vkhuxJYMaK6X7wRS9vEzkiw",
  "key6": "2DxXmxe6KZSwyXq8248UwEVHAcb8SFQF4RDxUTR9c1vU4CE6jUT69BD2GSXBJ9DBrKoZFG9JiXYX6cc1onAfor9h",
  "key7": "4WsPKHUF4WQma1Pzypo9oxL5SBMvU5eim3aKYtUik5YSAGVCQFhKmAGNeQzd2g4AXEypJDGfaWBH2nakg63o3cad",
  "key8": "3r1GF7nsALhogn4CtzFMpU7seHbW4UiY4oBuwhMS61f38j752Hw6fFw2oLjDG6PssPgC3t1cESbF3rfrFYi3k5k7",
  "key9": "2hzR3qfyPFnmQ6V9Uxm5vNGuMEupTxpttB4x41EGiv7mLFAoZDkAryF2diJivMQha9dGpfKCaiAQtnQrtMZXZBLR",
  "key10": "mMrf4f7ouCuMt6pHNnor4gEUiy5VxtQgmZhJxETRgzRMkYhcF9UYmz3aqKxEH2twqHM44Vj759dx1uVof9gY9Ze",
  "key11": "4TZoj7Cst2DykRK86isLqagjGk6v8YDAn9bS8c4x4gnGjfiUbmKceXrAY8VVdTprzZKNXSAhkVYPP3yomsHCc3ks",
  "key12": "3nMPjbbnebtDwwM1QciDcsUpJBhgDo3aPS9qmAsyz252RjaRHasViyyDGWDmiKeq8uZNdVr5TnNQd4GTiChkzhwM",
  "key13": "4W2ct7TWQAGRUe11LrNVef3kirKsZ2dbDwBCXJppDzPaVjgA5FkqpUHmUYKZPJ5bkR3Q6CtC8wsqFd9VLVZagXaa",
  "key14": "2R5STormj11yrT69gLWddPQezRLYn1xhtZkAiDf52pmU6cKmTUF6YZDRmdc97h5tFfcBAmH9QqPiPyRBRkNV5pGv",
  "key15": "CnoTsEN7HrTYCVsZrnAtFTthrX4dZiD4Ct8JCRnMsRWbHQrxJ2MMzD44AY4dgxYvhwamLv2UNtnM621AYo9hyfM",
  "key16": "3T5aXiowfScpHAa7e7rtkGfykR8D8EfzxB7Sji6bH6gjt6CserPKmJgMJ7xXoqgHpABjdZHAUVzDpHskks7HgaZD",
  "key17": "HN7f1RupchVWnSbUqMER7byhbjG4g7AD7j5ffnj9sbF5feixH22Lsep5vcnx45WAhDm1ehwdDU55WSQ5yo1w1h6",
  "key18": "4wmLwotHYEWvr4jzLwiqXxmz1ahAFS42NZyMVrpjRgHJw7SUwfenEf62eY8vYWvc7dTPzNaNV2EBeuwL1tVzGPHW",
  "key19": "57P38LMbQWabeNEmorNZQ8WH98yBkkjhGrmVpS2myPuRtxDQubrT9wYuvjDGPpc3iPxt7CroPPujChcQ1Jsd4gqp",
  "key20": "3D7ck3bWiPjyGXo9RbuLFa25ZXJ4Rd6bgwChKUY44YmRya282MnXQskAAxUcHnYeiX6SHoc78DsbVB3i38NbHrTN",
  "key21": "aYQsL153zEQ9uVgAaySM1ah4nwDBVPaqkmQWEij7gbtTKQozZFP9sdQJ4NZN9QbmoEGUwK2GA1mV5SJQyemUoLr",
  "key22": "ra4HcyYijHCP5rtDSRwsNoAXX7aB49cRZETKnynHKATGA6BXmE3j9XmqFwYc9EFrURQCrmg27g2icwGL8ARGSUz",
  "key23": "3pQUDcthxHDa5AGj7vvtkedDegZxga1HVf7PdUKHCr4X79ADpcoMvm3WW3adD41UZW6NqQrv1vjPMxYV5UQxwt1p",
  "key24": "4m8QycuxHcSJLZ7WMTAHFAdR2xj63hWcbmQddUCwdArTQKZUfdnYL2oWwsfVJyjFDqN4YCWuo43Go4UPtPxWTP3u",
  "key25": "oEvx8vX9eMiUsqujxy38u2EJEmpYV7kHe1YwivkTBQDN8CGv6NvfxxrnhTMjSW7xd4aMdsgbyjjG52aegy7Ze19",
  "key26": "2kB3UiAMwYcBCony41iQrxE565F8j4oCDDcNcya59HTzhgt2rKvZxrUGBLK9VexJ8GnvJHk8Qz8UWE5JWDnm7XjC",
  "key27": "3f4j3bxRyxNWqZLx9SibeMbbt49d4tkkSYYubypn36wjCpCoYg547251scpQmLjGe6YpcwLZVFQHWJppfjkVEFnr",
  "key28": "45wV3JeFvGgujrQk98AM7MZTEgFJBMi2V9KM4as8ArEb6Q68Y5UmUtDVakGGuZmjMcz2U7gEQTC4eAAQc129HZ7U",
  "key29": "4mHKT39Wg2d93BqxFwRhTYXtgMZPC3HUQ8jHkWR7G55kUgjBmETekUDvgyHyrCCkeg7TmTWYAne79VtQ5fFYDnZB",
  "key30": "21DcYvZg3S2xnVKP8w3KN6FSfFEqKu65CydwsHy7xhDTbfjrMtiDF9jawQqFfvinCqsUa25rxhAHKpTweB2zhvwh",
  "key31": "3H5P6CYW7wp8CpRq5Srs7k5otDzchSaSf53SVb4jCW9VLvS1N6dF3pGoJTnbU4HH5GMVmuEtiG5wN1u2pzvdnkpA",
  "key32": "3x5cMYmeKWkfubBpqHUAdWLJPeZe7k6zHq174TkFRqsSvLpimGRU6C6d1b5T63gvD31kPiPCHVggtMedn2H5UNRu",
  "key33": "4WAe8M6vdJRJotFgLx8sXxLDb9qH45w5Ddv8ynXUayjvCfVe84son9dTVaTsEaMtXr4aCMUpAyFrvjXHcNDCsoTi",
  "key34": "654EZSS5wkMsN5MdHge12mjvmXFLBLbFdXaJoQNokdfeRGW8jt2BfLvzBB16MpiqrTuiMozQAV9gVMtswttaUyij",
  "key35": "3odh2Yv5gLYip2eipSBAvMJA1gAT6zD6hc3rgQgE5YB1qd27qbSaggrnqUNyn33CdY1j3CSE71CFo7PzyPtohG8h",
  "key36": "5Agqwb2GLCuieemCtasP34TEgZtBhwDHrHFGgm9oq6zbm2S7jCvaQMcotXgwfVAQWsFT5uGHnT5TJMmUFMokbqqQ",
  "key37": "5Ef7kGSNA42ngvwFHtqRQb7Mrjn8hwdCvbtizupKyAXwinnkfu9RQHkPuwjGchNZVHo6MpsCKqvDu5TMYrMtpp6z",
  "key38": "2wapLV8yTzHdYa9H4FQaMofpPCnfXRNspDvjZZoaTrDSMhxhYYZcNvpJYQkxzwaq12bg842LPFJJn5TkBQkVr1Qz",
  "key39": "3UTpzMU4we9WR7cxaQ6XwLiHdoaDKLaueAYc46LEDj6qDt3wi3eTuFzU2rgvjERKvF77WKBj8xNPi5UMDBNJBvN8",
  "key40": "5abQmqfyyPChgGaNZWnv9ZUHXSt9LL7RMabh5VTj5KHLAeM5jZ5oHCneGN5jtVDRz6atCuVAXPur4vSQXQssmF4R",
  "key41": "FPTUBickH7jd3kkiS4Qw3UP8web4WsTDuXcQ7nERs88AiutXJ4CqvXJrcnTsc3tcuReoWhux5rjytzWAaC6NTu2",
  "key42": "2yuZFVmjtkNX7qfzBTF5NMtMUQEum1YAu3YhZjAz8GTwPDrMcoitWJPZ3Fr8PFXKUVtNJhs1ErE5XPSefLgXVDgd",
  "key43": "4JHfdL12vt6FqvdThWwguwbwZCiwj6cHfaLRLHRpodTrafyw6RRoSJtpwe5VBTvwTtVEKNv6AxgH3ZCxn3ja2vAT",
  "key44": "Da1Z3VRepYUhSPZ2fisaLFtA5LxsrzLw6DbvrMsdLrXE6XZeuvSYnQn8vLL7S9Z28Hrp7p4QzHJ5aYQSWSZbbNi",
  "key45": "45qeebXkrk8VngcJbymCng4t1p4YeRfm89UHAtTGpeLsK8FmhCqmpZ7t5DsKExVeKYSZT5WHEPrUcrmkob7hJhxS"
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
