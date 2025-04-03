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
    "3mBe7cspF2AFTKG4DgsW7BhRaLPdz5U9v2mgt2Lh79fk2882xCsjme8GpaCXEznnKccXgJqmuDbiH4JWCJPm3eye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EveUPYDdm8HNnqjQpxjwZoyeTBur9gsqYprWA4xdFdjiHxSJFNbm9TZYdmE2nz1KniWDdevTD4TooYfmsNM2Cr",
  "key1": "oqYLQ2A1jrc4reRBFjApX6mWpkUgmJMasf1cf9xrNU33YUpKBnccDdS3NSJGDrv8mvhTKc5cPwwwV88Viw841L5",
  "key2": "3CXEX4BnhcAefhEjc7BFZjZnLWnwMb26p8KvXFF45zyM3SqKoH6DdeL94CBDHYBgXWdbtLgpuvN6zty86APgdpBx",
  "key3": "2DsZe5dAQs3rU9gpyZWMfXooJS4XKcy7vDyBtFAejrFMvjTvys8UnWb9hNKgBusbptpPqSf22qwjy2V12YUH3JrF",
  "key4": "5Zr4g1kBuQSghUcVGNVppdzhEsRqnB8qweUZCwX6fekZKWcdwDr2Q9kmffyL1pJhn7QKw1z4DSSTnfQDzjUXMi5S",
  "key5": "2Gad7zFztYPJvrcniyHYkRx2m34RjF6fCdRtCoPDX4Dwnq7tBe4MpC2se9Zm8ck2vTbncv9tNZKgMCq3Ta1yFFUU",
  "key6": "34tx3bVJst4yYk5VwGy48LHovKeLvXzeoHfkonTR3Ba5XLodjCwzUQaq25ZGZdLfWbteZGV5h4ha8GguYzP9sZpy",
  "key7": "57uE5n5GBFRuuUSwDAcQ4nKbacNK43xqz48waEoiWAfaVGuxu3juhC1GHiNB7DpQyM5NuA6tzBN6RucGdCU9pzKv",
  "key8": "3bFaLfZ4PLjHdWatV6NUw6pNxMUh9CGyWbQh44m477FLBfnkfK5iz5LDZhWUig4MmCYzAHMwcrDRUDTiqLJhR7Ng",
  "key9": "5d3RnCDC6gBYnarWZit2BuRHuycgaBTMTXqKU8jvJTxeGkhUEJvA5KCU2vJWorQqxHUyVE41NEkk4orDvFSS8GQj",
  "key10": "4ZdziCVnEYiHtPLfs8S8Vf2xftxh5vsEsX3rZHnpb2PVRH4aU3Qn313MfmkqdLmv8h1YKWE4EwGF6uqhKdYoxFdH",
  "key11": "zVQJAGjNR5D2tP8MpY1CeNFhVbD4Ehbtqx44esTuF7G8krQyTu5L4vDzSEXpsM29Dtt1qtjD1vYDD9HwmzjeXCk",
  "key12": "2dHfpLKfAu94VYsTfTNYZJRGag4rcZq8KngxBudEScdxHEA6Hywg5yJbHQHseXh91JrHzDGEa3usPdWdu6ynVT6f",
  "key13": "3feX21xA1a3JNWUdiAFzC7qjvfm31BEZttKR1ogKE4j9gnb65rGKkRCMCAKsP3LtDienW1cKHBgcrhsw8YetxiC4",
  "key14": "5PH8ghmEivqG3xUh8bzMM21j5j85z1S2tF2mw1fZ2hzbt7JkVnSpwytzxp68NTym8XcdnML45GyYNhAgwTfhBoTb",
  "key15": "3xfPvicUeHKRybf4pQKpZNVVunfUbn5BBHkd61gCEPyzBDssNQx7B6NzE9XmB6XQuu3GCtbzY4bHF4tneUyUG8wJ",
  "key16": "5QVZAEFdqwT3SxNbhzibmRRDtJe1c46Z8rVvGxd8H7LDh2kE6wJH3Jiy1aK9AVsQD1wvmh5duZaWzf9akuzx53wU",
  "key17": "2Z86QTyk6Dgoff7CyM8V77864X1jvGZZFYtz6DSv77qz1tyTGB6SLSEULu4rVYR8xatUaVFGLuGJaVbUrK4XhtXF",
  "key18": "429y3VtXzTYPGML46eyJq2eJJ9Yhhq3qZwj7iJ13Qy5yQFrD7JLWo8ocB7FfiaxjXGGXzMvDfD2t6n9QFDb3ETah",
  "key19": "5n3XH4LeRywGoUji1MqEZ7VBpdxej6N8zMnb4xc2mfPsdWhB6Zxrsnu4rpTpyLBEirgzXqbxNr281TuiuZKgactt",
  "key20": "42mXa7kf2kiPtGeCpx656jvXqAatCZazEQ99PoE5PgrPawwtxbA4Pi95N1svi3Jteqvr7a6rkmDgiG75GrNhtteT",
  "key21": "3nc26C8hopiNRYyoqtR3AF9TFUA7aT1YoKXRHZqKDdVG1jhM8zfwAWDCvyt7UESsfUmU9Ysdj9XEWfQwJtsmQ5Q5",
  "key22": "2n5tMepbCQLVm4jR31bewMnHkKzVUWHB51WPKoxG2bSirEZThjUXSCcbMQtTALA7bwEeKYQ9j5NyjjDTAjhjAwAF",
  "key23": "3JHitzpoQPZQftFwENdyiNQcw8uFcTm3b3jdzPZqbATzdSieLZQ7HM2j1kKkUF8coURrMoA6sk39SmGcoEkbQHEp",
  "key24": "2H3bwCVLrTTEihLWHyzrz4LxAdYmx4GCm1LQ1ymQfuByFaUvY7T3VucrcxzqbUbZtBxmTsCSgBFfHtKs7kiY1e6m",
  "key25": "3AsV5vgWjUP7Jbcjk29V7WTC3vSnbkVzTXkexBSoEQgyNRfANJmvBCCBz7Rieo1Z2J54uoNHCgnkP7bDVKKPRYyV",
  "key26": "9EE96uffM3Lv3DnD2wTAKt1Rcibt2gTkKtEUJY3JWqn6imLEmvpuaT5M11TEQP8ZsUuHBARhzc9fgwKtXt1bFur",
  "key27": "5th43Hc12vyTrsQk5VQZtV6xUTLprsvhxmAkQkEoDB9NSFXTt4q4kuJmbXcsvX44yKNNLQmUXfTqtpr5kyw7ZHA8",
  "key28": "2RsBvYvkbNbExgNGuCmrsQN9Kz2uUSUUXQHnYfUyWwWAgUvaGcTdxXkXQS7DXwRjRudWZoQH9usC1U8Ewe5g5hPD",
  "key29": "U97D5QfHwfKPVegjE2TuY7ufZEEt9ihzJ9TzjyKx345n3kXaC6SUc5PHbFrzGbCVgvaGwK1RYTPFujUU1KopEz3",
  "key30": "2b6FQ3syvZa3jxCv8noGWTEj9qyDHENKkfQZx3R88KZRdaEd7cZk8iJErPsA9YXLUid5GiB6nM2NCqdKUciVK1Ef",
  "key31": "4sNxFH3vv3EceTeNqPH6fLAwZy5pkGcxYL6NgdAdYeZ1YAZ2VVdijfFjQF2vuND12dY1S5YXcrUnNnEaLejxBaga"
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
