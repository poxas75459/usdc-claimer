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
    "41mUYjd56MKQh4QLLasPQFtc9tk4DZ6Nsgfffgf2uE55UdZRSLJ24hSa5hxmYUGRsrBNPPHkarY9udJMQhZpcL5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sbToQY2fmLhtAGeH3ogLgyPdAwNUSpqTvaHitZgztGaCQ8EnxG34xhmroSe56kaKhJBhdTM5n8Y4AW3AygMZ8Nc",
  "key1": "5u5sMXBvWkWgB7HQUmibub1Z7R5NcyHPjFXA5wMEWCCevivEpdhA5rCUnWJNZLMeuKNub2TgQHhkp6EF1upDLf2k",
  "key2": "ep5a1GbpZa3eV7NLJ3Fs6fM3ps9YnqBjkzE7fWbcP6STbUqgHprdjx13Hhs5TFMoUdqPphCRjRcGhKB5V5SUr6K",
  "key3": "EmDBxuXtDxcjR8KvXMx8JZ4FvfewWLzZ5Baqhdg2t7vDjTA2AV7abgYMnicybujXC8kZ4u9U8j4mEG1pdXuePxw",
  "key4": "2FT4i8cdzrpAQUbf9ZQUPtVCKy33vXRyUKZe8iLPjYAZhLdDK74kGjh3RwV6MfkA9Db3m9DyBzAoQsW6jRKm43kg",
  "key5": "kM58ucUuihKWmAZhaGvCB2A4ZyBSYyq4zM5a2XNzZCGquGhCr77N271bqJZp4CaDf3e3LYwPAkBMx4WjGfDZBpA",
  "key6": "34HeH2jjUx4bLb6HKb9WgzErK1dr1gNZZN7M6tAa46oTTuGbTt1hYE6HxsBnnKE3LbohQVgJpqMWRREsuvPho7i3",
  "key7": "5qJmtU1tVzns6RYGz71Pf69cezCzhKk1PAacZvYovfo4KT6xmfDBgX7nib5nsrzgNGupkMVwhSP1zgcHmW3DBgKf",
  "key8": "2uJ19S7Jh7TSU26yTWQ7FEKUuFg3ukAofGL3SCLY338wrWks9ujpg4D6B1ns27GDP6zGToKewvfcA5hZqUu6ctFx",
  "key9": "3NaUeg5XsRCsv4L9PDYP4f4Mj8i7CUp2yF39idkaZVpFn6sdCaouSiirKQzfQYFta1vimoyEFY93zxTqExecPi18",
  "key10": "tFC4PCt9qRgjZjJsUzZuGuDqdUDrGu4NSRKRZ5qNzeXua8YFpFyFcekcXkwGTG1eAw7PM5mkr3AxjTqrVMzhKx2",
  "key11": "5sMkyXKMXLBS2JjwLrQR3pgYqcPZtZRkXBdo8zYG4ouss8DNSS4C8cm9vEaLUcaTtezXzSGGhQNSR8QszsYLHFuY",
  "key12": "34HpEWEsoVnkW8M7fRMnK5RQkTcR2DopNezrWz2zkkmsrTdvt9bnHk95wqDXER7HqUXzeevUHwMHzDBYpsJ5kiye",
  "key13": "2nMedM5DDYEwroQbB3oY34y5X3v3ZKTF1ALgMgt8VSySzJMvz3VrxyMLufZbsb9cJz66HB2Xq651zSPgknPbUAkH",
  "key14": "3ZBqhurDqbDGdWUi4QekGtdPij8QUF9Tr3Z875c9KWTs46nPNVyegwxhce5h78g6t2mYegC1d7WsRtQBFq9QWKvx",
  "key15": "4RdATKyEmNijM7GZWhR7gdwkyk7yigaPJLTx72tiMy7FDuDKqCArqDs8xFGJ3MVJEtd6BFqQqZvMsiZMTSxwbTTT",
  "key16": "2LdqEyX38Rg9Sw8rbqUiy8SBhNA88KF8u4EFirPXtiKDPNy968CQEr3NwFSoDGSjzEbtrfLFibkyqpKdjHM2NfuJ",
  "key17": "2n52HZs6771dXH9zRBpGFWV3xXrQAirjbZGsKCxRYbfNQVSKit7p7Sz3BrvMiXyeDELdFTHyGMxH7HDEG8si7mUD",
  "key18": "372uvmjLywKCCNeDjq5cXznyuVhwZvx8kc7h6AL3MeFfTi8zaZFSgmcxwUCuyNJB9QfNLKZnpyFid9YD5rTSrFMc",
  "key19": "5MqK6K3dGmuEHuQpjJcJwG9bSVtqgLMsxma8TM6LLR9pmE9YJhgPFoYbeb7ZyKGYmETCp9rvKzVNE85JBEJXUXpH",
  "key20": "3Xh3tMe6a9dHd27fu4FFGV7pNUxd2hzDKpXgboSuLjowUY9Z9QLR34rV2ECDMDhAARuZbg8vt89BFjfBGJxrtMzq",
  "key21": "49DEctkqdftGP2iJ8miWhCERA7kMm1vWZ4W1PwkX7M8q7JEM3oGSKBnnP5iJoUzzhi4aR2ETs4mBxuQ3fVMb7uBz",
  "key22": "5xzTcxV8cZYj4gEifeABqVd3WsaucSaByo6wCSKATDnarnhg5boqmt8f88qWDqK7FhAwUoafNq7JbfYpEAqFCemd",
  "key23": "4gavenGvQr3JTxvFwAUSVvsUxi3WfjfEUuyJfAMasqJqJScQqj5Fv8FFStHKkpaDceym8j9U2mmafhQd5MjLqGAU",
  "key24": "5E6zq3qSCmkMCjQwbEMveYZDizAMPVDRR9P4ihd19mrD4ZPRPeDpbJTiFiSJL5kHXhBuztSUJqv8J76oqC87JnsR",
  "key25": "23ytd2JpjtZaXM4EMCxFHphGGR5aFsJXWvhbqezhj2oHJc5m8bVXHe5ueXtWx3P2HygsozBKxxEDiiMrUNUSNcsx",
  "key26": "49bCkQheqMH87SKV7Rit2SeGq7T9rMnRERY1VkezUg1G47UJkUhBgSojaB3bBYyNMkrrPPRENkMhbNJJEdNPZXPy",
  "key27": "5MuVkByPobcnz61ot6dGCNrAJunbFA98C3VpvLanJD4m9xa3g2NYuVKtrnkoE3NurA6oCXu5s9qpz4mX2LdqQy9t",
  "key28": "45CpVSXiPKgMBUhDCSYybE1qgf4dt6bCMcvX1m6ioUrm3UsCZc4S1TRxd9jcp9jwCwzpEhuSttAKZWBMRorkYSBW",
  "key29": "5Gn5TBYMwt6a1vQn1h5JVfZhg7FVbGNs2tAdzKSUSH6iNDxCiSmxrLv4R7C5zWodWD58pf1NV2Frri4mfMxzEaB9",
  "key30": "4JVz1ogTvUA7uQeYytVo1twNTihhpzY4xdUV7YK21asv8xYKZH7wcTbeUUvujNbkgmjF1tDrZ9KWPkq4t1Wf6GRf",
  "key31": "48dgeRrErUmRRfgyAVLRdCB5aXHvpW7xDbKmVBsdoTQJTxNce44P2gP5ygicm1AT7UE3aUGWJWMeVStHqdve1DsN",
  "key32": "46BVLSseGH67NWJ2WN2uEU1ZGm9UXWfsz8voiBoBBzJMeKHnAknJKe9jHxeewMbbkcS3ZpUU4kK3zr5Uuodk9YmL"
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
