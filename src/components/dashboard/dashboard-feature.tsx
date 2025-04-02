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
    "zXbdn4xHrJHkbjXpYhAnqtnkXobBDeP3ixJiMuCSXVq4aMpGwe6T15FjQAa99UZ2HwtkudMHLg5Pj6ibS5GWKeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgbL5G37DHPMzJxwJdEXWCeEmEHWgdoEcE86kmJHEaK5vSTSkacHsjxAXHyHU4XJX34sRVAgq1Uga1UcQ1CkWGo",
  "key1": "4siLXqG8HadACUhxNhbnS9FeyLiRYuCeAoeLa7spj4thFBneB5BDXGi7VopAqYxhtoAn8KdEUiiC2tmJWGzZqMLf",
  "key2": "3k2piNHQYHyQD2wKaRvXK7U8TNDFupzckCbRj2S5EmioBgYtkzhtjpRViWvmSNJRPFSoS2DVWdjTJhF4iRiT2QaU",
  "key3": "QzwZwEXSCywFSVuz4fsSEdkZH7Pw9SeeLP8ioximzXihHaaJsvAjRWWGEPR2GogAVrEhyH4ev364gP5kzmKXQdM",
  "key4": "3mYDUfFTAuUCp3a8Kihh6gVJmMh4uoNwxb22heawD9LHsRWmgQZf4TCxZLVCgpMME1YPTbNQRD9gR7k12PHcAeHU",
  "key5": "5hS63ydJpVZj4i3du8yf9a9NSW77UkLb3mNDisqNYfaLVFGz14s9Bj44Yjf6TDBjGJ4qs5UNspYwKvzEwguFLwCw",
  "key6": "5555wsaGos4BoyXmxy7dtdPheRKsFQ74Nk5HmakfMhanM95wJUX3BVgtsMJd4ipecDhRQLpA6hbnL4rujG9LaPC3",
  "key7": "4ksXZ4CVDpVFLVUCufTg9V4dgjmaPH5k79Nb3Zazfzy8FpG616gtWyK2KJe2scKchtbojJeAR36Sj99q46X16ZMe",
  "key8": "xzE6Veeydk2vTxzGkMFwpUjsqfkh5ejHQpJDCEFTbFvQoVpzy2Hj846Xn8a9BzcL6k9YChevFMg98BsAGZTmw3h",
  "key9": "5hZR3gBqZhrVwvD2eku4got7yU8guAhEcoXauqmyarRsvA77abFoXJUTR3GxxEuZa1GPshF6Q5woNpAo5YJe8u33",
  "key10": "3o4U1JZGAmx5vdfdiH8QZGESKRQ62kseysRRMD6FdbGiR6tE3RBPw5c2kgDQZqfzSeugGn7tz3HVwWUpV3Vdqvud",
  "key11": "4YjhFFPXSUwryq5y9wPnrYfpbK9Zt4ymiWBya9icXAnbj5h4QandgJ7TQicDgKkcNzRkUQrF1oT8gmBR997N21tD",
  "key12": "pFa5LSuvJ2C1cfCaYPCCvrwW6zLGPvv1HFHYneqXv5gkRGSvCkTA1burz4NDw5rmLfRR3RcqaW4Ro4j2wSTCnN1",
  "key13": "36zZz6hdt4WGtDSdiFau9wrD3PrqAFmc8yTjxA5Ut91YDWZf1WhdVaDzhyaPJBFHcuMLYHkBGHuJkQb1q5mWvERN",
  "key14": "5M5fazLkaMQaYZYVY7FNhXYJYjXWe16y8HSRpnnYfCk9zA8u6eqt1K8jjQmzxJisTbVvizrFZaZ815bLZbsDeDrh",
  "key15": "2ugKv9WScy98WZb5T6EoEowcrc98vBDtDxNBipQFWkdoe5X8hkxxGk3pNQx2sZacrdW1cjRdqgvveBuswLE4PjGk",
  "key16": "22uZZ6zc3wbrWLX1Thbyv2nS4oatfaaN2t4VN4GUnKKAGseL8DGFbb4ZTtS3a9jo4iRKFr9o6ZTFVagJm8JDbLU6",
  "key17": "4jgsz5CCDZ4A7nKZNp1fR36nD94WrZvDtYrsvWyE2ycjK8oPgrgh3P5ojZFduVfPGgtHfEBVfE8QMCZ8bUJYfdS3",
  "key18": "z9Hct4SN3zm16Wrhi3mwv4QdGYjDfsAnPJebMiYRq7KFs46WUus95EX3NosCB8QfjwYexztKTQuBkDhh3MmW2qw",
  "key19": "3CFiG1n4wKtbGMbTQdzLQA5TftRi5uhct3eYFcZ5FZg6xRLdXuo7whScNJZjFqCMfTdv9Gc6wYcuUJuRUYLLaD2",
  "key20": "3NzNrbgJd8BWzejhEAMbGMnRAMaNwQXjmg6dFp41fzoB8QN97zSWpSa4nh4Q9LhrNkgGL8GqBt7oFnk8GfEdNvX7",
  "key21": "kzRq4Egvvn76tT2uYVnaHyNC12pErRTHrkFuKjKQK7jn8HGiEZgU5FAvRjE2t1sdsB6mCF883XF3mWNVAtyvcmZ",
  "key22": "5j2QeYMfesw7Y423xnnEZVSu2XuLLEN6e2kbVRdmTsDYD5bZSAHe9LxwUWiJqrXqHtnnzU7et2Er4k4A8QEJ7zSg",
  "key23": "5y71M9T15nN4qcqa3yoU2ofB7j3mYN6GqQSsdhXG3hSM6ULrrus9Qr2R16StVVcwoTKsdNaY4pogVzifwgDdAFwQ",
  "key24": "2VenZ7aS6oyqd3e2rScPhoGxvbSJ1yug7T6Li88WTzbE2UtYV8BAvk51ocjLsvaK7LXW6JMBYfaCSLEHRSqhuntT",
  "key25": "22rBevity97E53M7bPp1YV6HwNthJokExjnMajVAW8411DwdaYUFUweDvxmLcFH4RTbMLPVe6MkhKCeKGMJMi6LH",
  "key26": "2JP1nt7jTjVYHa74neip55i5cSRLW3J5LuDrchcaVXLrRduz8C7wzovyczw5uq9yVZT8wKVk9ewKZwZdJonKf8Q7",
  "key27": "2Xo2e8LbjtxpHsTJDNawRPBXsveZtfwSj977yVuyY6bfiHaVWFVcJox8HYHYCyDmByzD47VLEerENmvDFFeiGgTz",
  "key28": "3mfYvK8KApUE1PD1yY1S1vwrgUqtuJJi3Yqx7D4X4t336mZ2wKvneUJxnJNGf8Grp6QyQNmfs3JZMeh8XRJQMvPY"
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
