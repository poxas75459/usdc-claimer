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
    "2zqoguv98DdhzUXjMymkKCLrs7SfhK8VtwctQM4ZGPqcdoVXX59XLXU4BRLBSjesnPDvzWSUGW949yYbqgSL4Ehv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nx1rHx17yJ5QjhKseQqnrQtcEVsbufGkm8fawHT13MxGVyjxwZobESp7Th8h96c7MGYYgQMX5sTmrHsuEudZ1Gz",
  "key1": "51RMawk6rDu2cMkoU3QkazSgwyMMrss3z1oVt9xqh3iYRBmiB7MTEznC741vrHfSX5WUmDV3X95SRrbjXGpjMu7R",
  "key2": "31vogLBF48pyHxsXmJ6yuG5vQJGWk1YCdXYhUQujP5F2qJVtU7tUyCdco2Ng3X5r7XAYSTzqxgUGpK9soXMt1U2f",
  "key3": "4zLizRNsBETcBiE4diQk2vbgskViMTrfY7sRhCyoELKbLEGwimvfyN79ATTSeWAXWbKHJL9w7XPS9JSrhfXnEC7j",
  "key4": "gwQT5sjDCpi89XBD2zDfTj67bFjMns8PbLXSxFCmRjXE2oz53heZXYkgYcFkPYyNweihqfyRXrTvQbuNUWTS6nZ",
  "key5": "33J3Dr3RV6mCgSTApu9kyw1X3chhQPsLaxerE8R2fjdBmGeZDLiQAgyKxbnem8SgMruWbhqSNY8Bncsoac4m7WWr",
  "key6": "32YfxF3CKPFHVxekwTuPnbyWfL1wux92HfJAmigje7LT49QGnVoxrQf1d2TFz8rTBoeJz2QFLcd9oWfSAT6NyRmX",
  "key7": "vkYcHfAm8Mw9ofEh22oJzf132z183LZrELarYyf77upRDfw6syhRgjVV27wSUF8YionSCCKpzb4rtqE9uWmExhZ",
  "key8": "4kgLtzNaMAevtAbkNRzUQPeSmfAkfvv4n9bTyWKhpz91QrNbQ5RJdX2Be6HPm7MhAsH9rsB6CjhdeT146fRDcKhC",
  "key9": "3zoHo9bjDZbqMBS7d4faek5d16RM9ungdaRU4j2btGXHpaSb5kXftLnM2kJjyBDzfzu8fbpgTpP8jw7Lcsnn8hb9",
  "key10": "AscGKzvXLvL8dZQ7VnotAPbGXjoEUr3fd8fTFUWEn1XjMZkqUocsMqqvGYBKa9mAEZHjssfqsGCRse41tdFC18X",
  "key11": "5eTZpkrfubmkMEg7dt7hoxfmLbFVN7QzW2LqdaScnXHRGtC2jXQbAXy8cFcncMSSkz6yjh4RjtrvhdwAC4zrLrgj",
  "key12": "2Mf85q2TBJcYZi6dXPqBqxjh2eWssKU7tEQvjqb8SZHDY9M7ifmCZe2xnEa9QfAjHjxXci5y9jmrRQECyYkNEhj4",
  "key13": "57EAYALNvmSMKSiyvMQetfkAF41ULSrX7cm1MebAC4fBCvAw5sarGknt6qkkMQHpANkAtbC1YVF8EjxsEAFyL9NF",
  "key14": "Ltyw97ibeRioBhPEm9mySVqqoeLtX188rcM664Gs1Cjo6WHYSSeFAG8cPzF6J7aZCigakaTVuh3NJ3VMcdvsL2i",
  "key15": "4iQAzJzt97zGr9VTTpDNxCLXgJ2wTc4UVtTSgbmchoKY2LtC7Eiz6ze182zXWdQsHdyFzUw3ecUgQgN4eMWdbFFB",
  "key16": "3A5Zja7w5jSnb5Cqp9FuuFwJK1EwC5Msa94MDfVwGZYdrtGLFUnAKWJPGd3Jcnhdgs6RZfuBjkJrzBB5EQ7CuGi9",
  "key17": "2sWjmx4yxadPKs3xjMAuz5yAziQLEabGygxwcagpkpd5HXgdUMBTDv1fg9EB68R9P3cgTRS2mtLVkuiVe81uKVSR",
  "key18": "2vksFULLr8GNSNh7HxJUux8tyXScNqAezsMdjBwTTBw2ss9cGbJeE8DtEPZU7gkJLdBMpTF4KLvpDSLqVzk3yYvV",
  "key19": "5HoBC5wNhDCFKjzTuGzvECjx2tXqRsiV5UyEhdPCFBhuK3xYJk1urokU3ULkrwV19Yg21v6KC6xmpP9QdYTrsWJn",
  "key20": "4WoZbXviPqF7p9Q5o4VLsXqHmm6bqoRVUmUXxjGdnxLsk6vUyCimg3A4EMwBGRsbk1rWQYcEYAQWwFLW9jqeUwuJ",
  "key21": "63TF9TppYY8M1vzPN9uPDTrXztpDXh49XB44nShnxRiJmkdpP2hMMXj5vem5Np3BRrXNcqvVGVRoG5r1zQZQTspX",
  "key22": "3NaFspLeigxw6fjxm6ighr3BdL5p4WE77kHuCfZck2NheNfQocJ7LB2ypHxjpmX6ScvNDi8CVCtYqfYJbXUBqGsu",
  "key23": "4UZU5sJhfxkW8tGpyumUZ1vJ2ceYaRvCwtvzLA71zSctJEne1FLa7J3PwRb8nxD9ZNxqAn8ntBrctEBk3TA9t2q8",
  "key24": "3gwCHose662fninvkpdfKyW8TJ3NgQvSYooGuUvnFMsuXA2R7fidur74GeSFupR5ksRzrCe9PjvrWpgr3sbDrRxW",
  "key25": "5vpC8WyuDhsqyjawD4EX7oR3aaEyYPR1ptkrYEtRymLbqSzagqPSHaRznvpvYxNDbpDESnN9b8U46ViXCqo14CXF",
  "key26": "2p2Ho1J3bqzsQq5XYSjCtfmWAQVkcGa4y6jUHvSGp4vmh3dxKuJv6EHuHoWYz6pqEJdtbPEvHvMmbXNr1TTwR6r1",
  "key27": "2Ui7xescJthek4mH8dMCYkh9m47is6TBzKVvJtdRwLNjX4uzxpfRYZNtcZDy5DZ7Xnrnsfjd65nW8TMaZsJF3YCP",
  "key28": "4Y2T9ZWNrJEuqk6HuEc2CeJbg5jTYnx2MtZv24ihUUDVvuonuNLwVBGQkV3KzZaLMQ1tV3bqWQ3GjJf9kr8PBjyV",
  "key29": "wNfm6SgJJbF4ETQEaXPwBYmpXLCuB1gqJHUwFiJMKb8YJrVhrfeQmsoL8u31N3Gfm4hmvkDF3wKvk4htjwkhpC7",
  "key30": "UexjW3Wyc7Bqbn3vki1aMbpsTSKy75D7gUrPozmuMjWP1rbeqUsuSvZuxTDYaE8baNAHM4KYxXZZpK6SiBh2g3F",
  "key31": "4zgc5W6uf1bUyExEzXq8mSH2oudSgegjeSTWEDyvADtXHn3TDJJxgxyJVa3bqLmmYor5tHjzZX4SebRuH2CB6sbs",
  "key32": "5Fusx1g4t7DgU1w3sPXyW9cuu44nqTm63hgJF4GBBzyXvQswntJEPK2fZeENMBYnDCgcSiNwCgYfc7CCZWJRDffs",
  "key33": "3xqvSF6juVTypXkXtPxYrmFYfQLPzhcsTGwaKYxreR3q7FfTo7pNNmtipSaawdAcAyPH3njModfgFwkVd2XeXWBd",
  "key34": "3WKxANdaTjqqQjUqK6wm4tTp7torduRJfLbM6DupXgmvjvhWz8MLjrQwSzDfatHCeLaSYH1rLLSB3hX2st5oh4vd"
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
