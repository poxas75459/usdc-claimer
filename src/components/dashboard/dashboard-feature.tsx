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
    "49LPpwDtK4L8oW2MkDfXTwq6giUZCNG4hvShzR8LsGnxFapQ51DjcegePoqKnteNUsCe7rvSBA8ykgDhFeeh1UQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBAhUjhwxgaftJi7Pqwj6J41dWmfpiUjasJibfaSpm4vH699kYzzVnyCVHxRtR2WujQcUjbA2Gbr7PVUegUC5Wq",
  "key1": "2kAu6yLLoBiRnx5FXTmLv4C1A854BJLkUrybAqS9Z9kcruZySBSJ1prf1fCPnbXJKsY83MnsxXeAqZo5Z4bTF5VF",
  "key2": "4kTzcGEbVKUNYxG5gVXbzoWRY9wU8mVmUPKRHvHwcNzhRW6QZRLTrwGe9ke4sutvZJseXxTHpPGo7hYWgnEpbEZS",
  "key3": "4kAdx71HG38L4sT9ti3VrsmLQj96LQjzMMtzRodt7ndGPrtUewHwLPLmy7Tu6nsqYDWgTpbBan4Y2kAUc5bpMihg",
  "key4": "1JKHRkzPDXZHEwYX1MgRDnYc5xQCVHbrEEPuBqbZGeqs6KQuzrQ7ue1ohN5EHuJZBLPg1AqMucZdVGeYbJvdvV8",
  "key5": "26axUL8dodYDoMvEXP2JgKF4iYVPnRaeChhBQdW63PJLnifg3yNsDYxByGCscvLjgBfSdbH2YgsnjPSVKWLFsK7M",
  "key6": "T6t597YLPfNPbHvVyTseRg2vkySkkV7rUhhLpd9enmX2GVy6VQQZXbryGaevmDzqu6rLq6davTDSaCDG7kxSrsu",
  "key7": "3xKvjfCpGr6xnvbPQq44NTz7b8iYGezzontr45ZQM5TzuD4YjBj7UmPSfySu36dLk2LGtjuMU46f4FAaWyQBWtKA",
  "key8": "2vdDPfEwLLhTRbXTY7eN68rCHtXy8yuQBThstYd6DqkLgKVXTHwTWyAJnyVGAjvjikZjG6hUY2mzL9nsHTGUVgss",
  "key9": "4ko2kkDWDctKRtVEDsvWMBFN8bqpQh9VhWr3psscJNzsNhZXbUHmSq3qZSxYgNYyt2yv9ddW9fWRUfxCM4ThtJfh",
  "key10": "29efZXiXQVw9SSEDi4f7QM6Tn54KSvJF3iAEJK8xgjHHV4wjPE613bTcsJtUSrbRbXvRbeUmTpEnxT2t5idtdEjs",
  "key11": "BZDWY21XZqLuXD6rqV3n9stJBBZFzrSiQGCuatkgTrgqNFsaWvK87Kc1WRtukauMUPDTJjdY788HBF6vnqALEiC",
  "key12": "5C9wNVstwHQ8khxjwDBTGMPZAz12s6Xa18NcrDt2CYwWhUB5eMgVRPMEEQAnCHDZg8fQFwYSN2pmKjsWwgwXFrGq",
  "key13": "56yQqho1sVvc9bbKaNAydgnDvkg7Twh8ib2iJr5uqxTfMF7r73tuoxN9baxz7RHxzrgXaUFuLNeaxVDbsF3PwHYh",
  "key14": "u3CQr2wAtsNGJrwgv8LvNTKKZuh2cBtjCm1sJrtHDnNSKvvW8DSQmGC6msK5fs3VgnHocz5k7Scp7vjjuWNkr6J",
  "key15": "2BLidvLryaDEcpCrmBaPWvq77WwijcsJF6ZvW4ViqLcYwAssScV2QFh277fTsft9uTAQ5qvJZcAknjbUrzSHX3WS",
  "key16": "2G8xmUm5tAAT2c6Q4SWrTAs33vUkMZjuKpwZ9qHzyqC2Wa8EpJx68Dy4uELGPh77udFAvbnAmVAB8XodEjAm5Ua4",
  "key17": "2spjVehMMV5ppzPWwfcEg83actmmASuJRyY2fL3LD5RU1D3xrqheZJThiEJvLKC8P5HfzjGQEPP8KPvFVdSGdUYQ",
  "key18": "5e8agZuj2z2k9qEXo4fYQ9CPDDmTQMb4ZohDSujW5275UYyLbVmUvqcRrkf7ym3UQwLUwWdsUyMvyJk1qqJ5vKbv",
  "key19": "3ch46p3tnaN7XAkY1gr1D1xPbWY97fWuawv5pPsnqj583uSypgUEyQUWedRxbSWrdgJqyXcna47irfrrRDrj1XFQ",
  "key20": "5boBCv5NAZCVoABQVxkMmachwZgVyKCjsEemGVXHviUqFHYTphj7T3Fn5TH41gkUfebcg2xfvF49JZrZx1b9KnWa",
  "key21": "t6ZXBffRqbzePYetkHfYdci3FbYqqeMB6RaJviiKwqm6gSJZ8WWFRqBJopr5mDP4CzCxcStPRAegGYWB46sQsYe",
  "key22": "277eEan9Sd3sLnfDeEaswVWETf8Wu3Z9v8VwH2Sc9tDWTFXwywvD5QxATBRAUmbHj2DE53W7b8XAgLVg9xeKVu8d",
  "key23": "4Yd9NS45wPCQgtRposB36X5xfh9G2tZayDYGPto4XHhY5SnJgNqkgha4REDeg2jsU6uk5BZaphm5mi41FzBGgD2x",
  "key24": "xXyMTd9EY8HjtGAoaU2ZDRSZo9mJSJy17gkWjRmrMPvicBUxRPCwF6xWCLv3QaUTY26wVpMEBJcquuZkhx1FJ9E",
  "key25": "3puAD5Ttyp3kLF3mji4FhXjmV4rbcGCwZWneRLKgK2KRMePSTsSYByj7aS6AsuPu4cMKqrcUqYRMzC1hF48Z8mvA",
  "key26": "2FTAh4jcRKHLGGfBnAAyj94j9X4xrPXgXZFdk8SV79SA463TXYS4spWfnUTfngUgNghfiWXqXTpS5ZgTUa8SfSJG",
  "key27": "MJ9UBH8D8seDozB3YY6DsynD6Ms9XErVVUxH77xPW1ZEBN9Avjecjbgji3KwB5ybT3NtozhHdytsz7zThoQstAu",
  "key28": "4mwSQnNh7u7RWUqsbgn2kYsaW3X17dkuPhZ43ZoencFvW2LKYUY9hWFXqerdzJyBsuN6TgGxRtMsm84AAGN1fcFa",
  "key29": "4zgCb2KrRDAo6YdNXK5AThTruACEUEtdzyWuFs9kk9weVM8EBDuUEEC9atP5K7Zorah6DDExaC3JvCtN1EEgEP4J",
  "key30": "4xEoLgCBEbfr2nUsh6EJPiNmrPFTikPg24bZ3ri7MnS9iF4PMzNDQBJdrKymx3TTZ45zeHb6anVSU2TneBChngte",
  "key31": "61e4SdiEVnEwsGqr3sDUEC2oB54GKcUs7FhiUqxbD2EEfFVdMuSn4Y2vJKyDUHPFMrax88mw9GoaCnPMBSx6MokL",
  "key32": "5ZWhWTNdssybV65yf2435EjZaLiSXbDCsectSybc4j5xyQnwB8qBw1uTJgRVGYJ2yaagAgwUMs7jfKaj62Q9hzGh",
  "key33": "51i8jmiK1pY8Z7jZL6kVmP2xrozXvgdKTCeQuW8yq4aB5eLgTVawvPKAfaKMdru2jq9WeSXBZERmQtbeMh1BCfdQ",
  "key34": "J1GmWieyY2bHX22gbLQhhDUinUQiyE987tVfZehawAwzzXtXebfurpksXRUKyQnD5R2zudENjkAK9gNtKWudFM5",
  "key35": "3Fn8bVbJE4GMTG5cYi4hAcPQxTSd1ZUKKivTcqcNS8kt2MPW9kw73xMe4Nrb34z3z6QpXKTwb5yKbFrD85smnRSu",
  "key36": "4BSTRoJsGyq7vvwb3zLbriVDQ6yDb2JP73bLSNLGGCNQVTcaZVeD7QpgtTuo1Svu9citp2pLc247Mr1x9hHotfhR",
  "key37": "4UnJp1ECRRR3RQUuV6pyYV5CVBHrgTuiJkMHKfD4UsENjrZeg98V1eWypHooix1jdxLP38Z9ywRZrb5zhGMziXZi",
  "key38": "2WkYHxPEBSJ9vkebzZbBodENA8ZVVc5ZyQ4ZcXdd36G2m8ffPcUr96nZmUS65ugKTHdJ1RZda6M1EC71G5GA2Y6B",
  "key39": "BRyz1jvTkz7Rr3zzcVwkqMEUafGWhpzzTDYXBJbcPeagfnqpCdmArWCb94XjUbdfdSabAsunEFQ5KDZHAGegqML",
  "key40": "29tfYPdLLXu7CgzXhWwLLGko4dvSVDsne33zwjXGV5c1BKJy2CnuLCoFhRHMEWRoj2GtDR93wy2rpMXHJUw3HzTC",
  "key41": "3bS6hbHAcRGcdJBVxDP4kAo8D7BEkjVd4Yax9TCwwpv5xepWJu2hCrjjfmPh1RzWZSxgk1yXM9gQxJU1wDFFPskX",
  "key42": "2BtnCSudnojQsGFmAQGWvjAQnS1mww3PfByxeqLzFZQyvSj46hAhXubN16hhgQzW5oEa67bAa81G4ppQnbrTCRki",
  "key43": "3hUoR74kLXaNMKD8uAuppwCPUrpkfShxjqAk5cxdP9GNVTrqhkFvtk3iBbe5bcdL4Xh8PcSiWn126YCNm7joFjqJ"
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
