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
    "5nVLMHNTUzD4vQDmy8LJiwJnmni5CiNiS6R7sdiCgAExPr79asaeDSyHku2rEEthTeursTRyvUa7USpdASA7SSRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPTbngBTk8SSpVAJ2BMVqHs4mSJiPEeMEkpVGV2MBbeyKxamc7TEen2kVDxF82grTcxTMxFkouWwZLda53Auxst",
  "key1": "2vgYbgBqUWrVrEsokcnfRGNMtpLPRFUoMSk1rphSvyScQxpDeLqAzGks1tcVmWRYPTKg8ZiuYHgoR5JGbekHdMWi",
  "key2": "4QynneBvyMp2GRVJpxbxkKqxe2pavHBvMk6CiLhoUJbM87w8cDpFRjgPZeMEzzcedCs1Brf1u7RXJuDgS2kPmFaK",
  "key3": "2NH9LinmsDzHFt9fuHxaZqWDJZ9AbUsC4oGE2DiKij1wK3ETGKiRfARnFtNjiZYRkaRPMPXGk3mwMYE3s6pcUCWp",
  "key4": "2Hkp8HQ5T6RgcPKKVNmCmyaD5AsVvd6tKu2ioFkXChdZYF1TquKjzNeWiAPPumAgjWz3qSNabfYbLWuXrCCwZe3g",
  "key5": "2DYN6vFVw2w5WeWEBes26tJ5EsL6o9YXntwSevDDFS9epAAzwWhGahmgEpMKhBaoRp62rfi3QVhmJpQWJABwcrWb",
  "key6": "4HAdyi3H1LvNagLB2hXooJwhLvwn2XetrqUX1FDYbWrhtWoLvchMJg2GWXAAuGggpLpdeEoSpmJMSimB7S9yRYb",
  "key7": "21VdAXobNt2PTBTHC3MdBA6arnmU9AiqYEJxLhpqzJKqi2JGAWxVCiQsZmsU56A358USkNxHZAJsNp53S64f5Jdx",
  "key8": "3ARfUSmQyPAA4RjRadv6gNG7kSMZDtNnaDH8svir5vUcL5qxqNKMX5D8UhxAnyHhSGxCwrL4Jxv3S2iNVdga1C3z",
  "key9": "5QQ9C4n5fTAqmmaBfqCzvqDmHvcsFwA8zVYMNsjzYfQcAmxShB5Q2yJTsPo51iJm6gUKBmPJSeo2sunbuotGRTss",
  "key10": "j6xrrRPQuXSTKN1UJgBDJu2fL35udr8tDEf7yubwSGoZWh5ZZRaojcBQ1xv4ymZUMDwMJNyqrS8dxUUcxTSiNGi",
  "key11": "4MKGon2F9wSu5V2TkzwhjA42HHLpPkHham1ffRKyJG5jSxfroNsfNx2aLCzzoNAkKbb3qF3ckEjZATYuDZJUkYB7",
  "key12": "3cSRHdxTuB7udiUyqgP4HGDUc5WzYbE6wDUo6iKndLX3Kyij26JfqkwfdHFtHAL7jCaSfw3Jrc4ctV8Za9gXAynn",
  "key13": "5AUP1BnFrhtoDa1W3QFNoQPKvLzh4cAe7KVstFuy9pMXxNuHZxS1nGDgH9iiWCK6oTNP5ARcqtwwZs18Hf4H6Z2M",
  "key14": "9pC8MZHHhtx6ie6RZoDZ3ydpyXp4BvwWvNEj9UySGd6QtAxUpW6nbB2jRGNMr4dSfnEZBJHjUnkE7nCh2UoEpVA",
  "key15": "3sRzu58379cw8xRATdNtia7d9tcrYevPP6HEg7TL7zSJifzBccSjw77g9J1qX49vbaw8fJQie3PaRRjztU9UfpBi",
  "key16": "3LetdYB3VpXnANm4xKQTup7SuZB38fRS2QJKVNqerQeDLrWDQG77krx4hMgy3vX1LzUJ16aiqrfuDQqRQTSGcCoF",
  "key17": "5phGqmE55oBTVLsWMhzXRqJGyw3txgg1mHmirS3bFnqLrEctLW6J7NzUt2YQb2oEcydERpKk9Az9VsNVzrkQ7hcJ",
  "key18": "P3r4KHMZfqvDnhzccnu8LyUzL8N4DdswVyfUJFHMkGzY6uDKqpNdDKpJDr2QTbLeumviQtnwX9Lq8penKtnJigR",
  "key19": "2MzLayx5pv17K7BmRFc5PzHsSroqJ12GdudGQvinc69v8fS4D983HFagPHKW1BNSfS6PKCsxaGd1HEgNLNbbwUvM",
  "key20": "3j4vZjkZ62UF2gLqA91G1esPF9T7dHnJevjPdVW9ptsFDuXciSiLYaRSGbmGMyWQYP7SFAaEAbUaDmebaQ9sVDk5",
  "key21": "4B7aosw2uW1HcN5xZRFWpaT6jkrpYEQUwHrHwcLG6rZ1fbsKqXLk6chHskKmKKAzJqpK7uVMphRxtxhLoihBwxXA",
  "key22": "67KsWsFupDo6uDJ7hJ9mWwuWw22ErEAdJ4X4FonANQ2rR86rH6NhvwBN4TE2TSVfAFeUoHWgmZYogRsyPfz7xDEM",
  "key23": "bRCDN6U48REQSphULG9WGkDvyXRacQaoV4zoWLaprJQGEw5vopE9KjTKUSWgmVBa1yQfkYsox3UQ8dW9HFJvMCz",
  "key24": "4arjYLSk6qwkpUd4y5EFjUwcAJNDicnbcZ9FD6qLHfSYDFbtR5QYXFfuqW633w3gq4jYGFHowKkM7bhPSjtozJdH",
  "key25": "QEYz8Djy5HafQ719ahY1v92GQ81mrFgfenJv17Uykm4CE8Rm2yWDaNmBczrgGpA5BmJJUnN9HJ2AFSuWAWWViik",
  "key26": "3oVG31LCKH1zWu4dEzz8AFgMkgQwBDrV2g9pDUfBpHc56eBncGK8kvUstae3RBY49xGBvDMQzLyvDtv1kShHxgHg",
  "key27": "2qsDS7ZCKjLBSAG7Pwpvd5cj18d2iZkHKdiP65xfdcAQ7LXio1KmBYzJMoNdDaC2rtiHw294PUqoDzMo7nRRHVKK",
  "key28": "56z2ztfWLRy6c4Yarwpkw9Sw3RxztYqkGbb92pcfrQPeArsSx1AADWuoqFh5nPiZrGN6pjzsJkLbLts83EX4jPR9"
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
