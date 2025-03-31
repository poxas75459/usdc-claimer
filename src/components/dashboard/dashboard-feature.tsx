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
    "Gddfq93aGLWFcqM7jeTTFQ4Uw6ure7k3vFKY4EREunLbcCaoNFyGb6dUWRfQW9Q4LLQPqNu8XU9KgfHTSytXyGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24s6zfUwSBpLEd9ftMg5wYtJJKe9brsFLw89jChzogjvGQonjBGJrppXWfbu4LfTeEQXRQ6t24TU7MEmyw1FQgeD",
  "key1": "2fevWhz2AE5DDupAzEgvk2pZ6sPZt33368ZvahrtiEwmdrM2AHE8VXVSNC3RXgjGpqciCfTbATnaTE1psERPMqTn",
  "key2": "4Hzj3U5Vwk8Dnf4E72hXAkVef9vqD5ijq51eo7eRRpvfBdjTisWUy7npDdWMTdFYrJeE1ZwbXN756UNrN4JS5e24",
  "key3": "5YWLxPA6Awg1jLiSDRMfrKDMfTdq3HR6t6rndAZy6aexrqk4gBTyRByjsaMqC85drg94f71qEBmTmxSQoZ1nLaLx",
  "key4": "4HdSRGzT2jXyC5dSQGUNfVSMTeA5gJMzRuDJcdkCcain4pnDN5hdiYAuesUzBsYh7HK2uMLn9MCt8W34Z8yzH1BD",
  "key5": "2G4sRhRGttqxqo2bcf7fpcH6TxoBg3z1w9wz4o3xXJVuduxE2gmyyE83stSwbxiUAYeUDVVy4FTbL8vU2KYEGbNL",
  "key6": "4orsxFPCG856ZjhqkoZLiXRQ6QGffqfAE6n7yQj7D4Hu5PXJLB5xzQKQqgC9bcqtD4xhkSWxWRW1987nxTssgnsD",
  "key7": "42de79ATG3pRQKL3YgXEPDkNnAUXJibbe5ENu4mGZJbm4VZzCcZC8Ruyd1g2uVfZJXSNSQhMir522h8AcQ4r31Rn",
  "key8": "2kK61WeURnku6a1n88m26T912Yxb5UYwZJGwQgCEGZNefC1N4iY2w89bv39SZ6i5JbJ5MWet51xjix43vcH7Jmgw",
  "key9": "5TJoX4jmBY3eRowbwZDphbGT9eFvb4GP6Pq2Lt9ibyVswd3HdXSXqKcxK33ByNhnFkkWrtxUFwMA7wapGLqfKkty",
  "key10": "3UCbRpoRQ2hiZEXLrcYFdR39yqfUx7GgvjvQJGTvtAPjGADfEcdZbrH5pcqDq4nHiHWK6Bz66pNg1AtyxqLFCcPN",
  "key11": "5Aa3qAGDdNon1f59mMxdjGEx6JDdbBkLLru7Vm9wP1fmp7A3EFc3qdVLupH6HoarkMMQJipWVL74gv9RYQMRtwAH",
  "key12": "3PeQDgDh39VX2iMmkj5YCTBuAT7w8mjEEMZdZNbGWrEgttZpzoPg5WYutKNRMxb9oRyWc7ER4ykcLW7dB6u1VmUy",
  "key13": "2F8bCafXMxnAxfpckGfNP82q8wsnh1ZN5HJZPtqg8uAWjNRnkwu1j6Q78xJCLxCo5m8ZW9HagT7Em5C5SHo4hRX2",
  "key14": "4pKpYTngS8GMCAxNuzCgV9DZg3qczAJ8wwFAMdbW7Rf76LKJYPkSsD23DvBYTtFcpEC8pCTCtXrz2funXyVVw3Q9",
  "key15": "2JDUKXzVb3mNVu7jQKB3VuFMMBfiCEuh7DgvRdmThimco4RUGAydezZxSq2qfkk9igQTUcZbGQ6kpKZQw5uw7qas",
  "key16": "2znneKkh2kAkhBrwWvTYquqmqyyoksSGSm9s1sz5WXUfmWNpe7dUw9R4XaFrcABu2ttyUGoQ9an27EzXsYFwLjFb",
  "key17": "tT9N82N3Fu6ofZ6fKcyMzAPDrrVF1wZrJzuHdmjBqikqJgJGPnhhdbHjnuBwuaYHdVVBhHZ2dUWJp5YmRSYyu3K",
  "key18": "37uAqWLVACUa5arPUCPLDXk34rpDd4Dnj5aL2QNXJJSRVMovW9BH1WhxjWUMvBWuKv2Xf8DMrgZrhU57mKYW8ZVo",
  "key19": "5qTfDzefEvJVFkBVybExAbXXKc3k6QaAwrnUvqTDed7EmaqeALHTkJQqDzmtjoVTYWSHP13D5NZAZrVNXmF12BPB",
  "key20": "4qQTdEZeWRfnCejrXbDyCZqR6eSLHgfbc3vYLQBurCaxNaTyumE2ubwZ7N5eav1KXKPnv4oR1JjoTLcrHWDtd3G4",
  "key21": "4uGe88ES9114TvLcvfXnKMmzvjcCdDK56WNHt3xrwgUQEfVksjgUDBwHvWQMuoXuX8y698YBUr3aPwhh8PQr29f6",
  "key22": "5MvGpYjfaZ3tz1TnsT2qTUJbMN7w5Qbkj5yNRhoa19gViRdiptuKiH43X5KhjQaicoHbm2HuZDPiGyN4B6Td88XJ",
  "key23": "2KLpapyM1ymv5puKnQ3BW9pMgyc9ovP4D7eNW37kXNKN6whmFvYkPzWq9gUqrVFetmntoF2jTvZRB4CKqRLXmimX",
  "key24": "3pbR9yMS4wZmTEpNMTNX4h79Sn36ZbMob2p8SiTqcMqnSqXFajfT2taqsZ1FeQ1KVk8qKNundA5MEv72yP7NgCy1",
  "key25": "eV1Jjfr69THEmFuA1bRm29bMaJbeNTdRUjmLjMRtysAyHXH4MTz8SEQnecm5isLY6Uy1dZjEy1xPXoDjfynwRBj",
  "key26": "61ng433Q25HGPEkKnbX9nF11zBVPUK9MAL9qaerLs6SPWUgkM73oNv86H6XxjTWbvUSWVVbCJSgnXQiBAMjuJ5Mx",
  "key27": "66KEvkdPcA5iM6tC2gWyXdNudkoKWN6hyxmLsx6xh1JCBgzN7HLAmKA53ACQ8atMkmb5KcDbmAf7sB4cuPDzzbvL",
  "key28": "2RFPL68oTscKtD6QzdURKqXN8q4z77csYHw854FHGJ5xBWM5idAgiUxepNmtVd4WBi3uCtzf4RDYZ86rKNyvhdas",
  "key29": "hCnHDZqyMTapbcXS4HiGjtKFpH6WmF9mqojxcvG9MP3jTpL6t7XeTZLJjZPtkjjM56NukYTPrUKW4jo43d79BwV",
  "key30": "4z8hm5agYfNBiccdnH51aZDWcTmY9icsEZCMDzgnkZmX3wXTygc7RojtmP4d6U7KHumzERwzjTEStFVui24SArBJ",
  "key31": "46xFUqa6NPkNHWkV1MYtzrSeZQHipG4xXWUwHyfKXwXFnjJFQf59AhPpxz78AQMKuMFyDME9odx12d7YyZF2EB5w",
  "key32": "3piErt16sDLRvQ3gbM17Ny3BCRNHrcPztuo6qy1Bi22cnTSNjGzJrfbykSf6QK6UfbAek6J29LGnrz28AhiXu1ba",
  "key33": "vQ1T64Vg8MkAkqiAKUBqQZrf8v1QsZvQoQUpMbn7JyTktQ3vWpCDmKE1Pc11tJyJ5N7kRSL1CMht7PkRomgCZVs",
  "key34": "3WvnEFsX9UbGDBLXgRFsSdXKuD9JpXooDy8TjmSGz4c2evMS37fXhA8tZGC8RooTBZ66dN3qSRX28tdDanafT8F3",
  "key35": "3TF9vzNo5yKtWAczS9SY7jwVDLFsMs75h693SSY7kLm8hLFrsdDXj9qdp9LxLJguWgGcFUPCPs2fBXWcwLTxaNwe",
  "key36": "shDSgXrVU5XbzuPetNEdjkzjYXQ61m5LzPFkFy2tQq67QFvQBm1kse9DBskMEUbYzm8kUqzSgWcokKziJeRKwTZ",
  "key37": "2R1E294U5V6EhdYSoBRBAeLfbjw8GZrwcXrE4Jcb7b9Jr6Rrc2tkBXuv9cJnuEinEP1qU97TEak3cwZG19Pras9q",
  "key38": "3EGSNesechEz4HttRiy4mfh7SbpcWreVCVH5uUoXuwgwuk3tcTexqxZskyCukNYs7hgHgda6gpJb6rszWnTwx4sW",
  "key39": "3GpmbBqdaNeJdm3ZfjPy8PwuzFJRsAY8GLmB4VwMuFEUsJFF1k2vZZSEpqdhk1k7Y9uwMHwPL22H6rvP7rpiZpaj",
  "key40": "P2Wb4WYg3gVfndcvu4p5HdEtnnoE9aewscsJReC5pW8wMX1wQ22J7vvMQtvJ5EMNj1gxXwme81vFiY2m9GpT3Dz",
  "key41": "48NYjJ8VqRcQb9mhRxRiFWHqtyHzPABpTdSwvvfXZYjWsFXoX3DQ1C6UnMQcnhE1yJH31BeLFT2a3S9kA4jBahT4",
  "key42": "3jy13qV8uaSRYUwaQC9A5bERhQo33r8kzV4Ssm4MAyjvKW3LVrfxbqsEpbNTSoToqjbkSZiReJYKMeMJGrzAanx8",
  "key43": "4asfpYxaj99deHpXeKu7msHhAsUg3RRCeX6PLwS3smvCmzwixJAQRkujWqDPzHWM9j6dqg1dhvjdSgDQKih8uZXn",
  "key44": "5FhJLu8fz1MMP7pRGvrKA7gkhdArCQKEcu3eLPPCjCNUNEkCzV64f7Kt2TtWj9vL7uUNTo7qJXjhbJjQspesZQag",
  "key45": "tw4xpLdR8P7sTtz2owGWfgicPm8cZKZ9PCHshfrqqy89TwUDzX6CZ7R2pCiuF8j3eGh6JZ2pdMipP6ztm9w3gSN",
  "key46": "22BZMEpide9MPbHPgc7QvC9YGi26nw7rK91o9HVBbU36GBNtvgnJWyf2yEDPZqRNUUzeoPfTcTLeQenHzNdGBJDj"
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
