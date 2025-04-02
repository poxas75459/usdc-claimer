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
    "3KpjkSnuZ7SpPhuzkdvJhNCzoogP81tKW29BGv8cyi9XqaJe7JbRfMjvKGQ7JjpuD3aMt7Ju49vTkedmqZjd8Xn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUCyztm9aixXE1wE1syCp7FXpajAaVY56oMrToWdGN98pGh2tfuwqgeCar7nkoNxVFthsisfz2mPZMdr5VVH9Lp",
  "key1": "cg2rQde9HmkZMq2uPQhXL2wbiqRvH7sUerbQdfjtYERx2kcFtbfu6EERhAPUxj1EEeaiU27NvFPQRjzLAQG1sQ6",
  "key2": "xhs34y9U2fN8mSMQ6F6twraRfCYPyBQVdC9fJHxz5CRHT4MbtBYyqboA7MdJ5mnLYEy7e4bdowQjN39JEBPHa16",
  "key3": "41dX5Wmw7xVnpycudMv9beh9eCHLiaXbtn43MEF8MQD8f95bZut3GTAP5HmAo2U1WovB6jsBEiLv4BiAcuooiKEw",
  "key4": "38kyA5yFxeQpUTzv7EWifDjcxCyTaFWpKBygNqPCc7TBuY9NPasEupU5WDA9y6YBXy1HXnZnMANYzae2V9M3Mfj3",
  "key5": "3RqigYvtcsRkMJSnK1snRbfVGm1fquMy9LTrkwm6wZzzk5wAQbFSzZbRJ7adhZi4HQ8u1i8fG1DCeCroUUfLStr2",
  "key6": "621Q215HV9xvTvXkpNBJAZpB6nd1rgHjyjHwRDzjjcKVtGVSXMnbtvQhhUrCADv6JvZDbxnnbceVuZ2BhHWRfmwH",
  "key7": "o85h2D5fTHu7wQx4cwjYWApPUYNnmB66pDddjArFSNoSRhmpL41Npk4MTZ5H42kLuRGuzfb778vNQfw4sNm7Abe",
  "key8": "2V8hbqomFVjVthA2NBFwCkRTXX6ade4rLfiaap6VS7YoK1uCz7Xz1eHaKDBQ7bnrtEyr5JkVuqKEkkXeb5nZeQNE",
  "key9": "2gbta2bqBFYfdeUZrMmzDhcxEQia55dE2E5PffCTamaawQtNnFhJH7aCPJzkmDQYtXux34WLS9koFokJj1pyz46r",
  "key10": "2qFve6jsFkae7fNcwD4Aht92Tntpz5k16z1HgAqcizZF7CstuaBqpzPhrgy3TRCXwDVvwHsFBFCv7P5knd2MTGLf",
  "key11": "5LupKWccymPA8gKj9yDG1ywQaWyBEgU6At8avHSwDx8pYyMmDhc5qdqmPdppCB5jmVmvhypnCHPsJrTsVcoGoS9Z",
  "key12": "SVWF6gWuxDMCEv6KbAUT1EednBf5FcdV6RYrsjQuw9ijsYtrgH4MPgsCJqsvjrp7Xj2ZCjy2kmDqGdrDnDqBFJV",
  "key13": "5QYSmfMxHyrCW9dvEnTeRcyfcWjj4GakMckRZsvL1NPpDZamKjG2cnjLs8H1DP9pChqpeKfb22fkxr4GfDRi4kPv",
  "key14": "5MbJ1fzfXesua936XtcmCNVDUVcRZag78CzLjHx6zgan3WpPsx1xzWNAMP1g7FdRMzirRSPW39go46H1GNsWCtSq",
  "key15": "3nVwqACFnHR9rwwj6gv483yz8MRs2HPBJKuKbYLbMHNnW25t9vbPcv4forF21QhQT1gCAmsvdzM5zpttGiDCvR4m",
  "key16": "4UkknKjjsbBuMdefiG3TMG2BySLthv7qGcWWiz7Lv94xQDg3mEmE33WxUuVQgraiZsxvKy5LeB4u2bb32ARtLpWX",
  "key17": "4x14ki2c8rxtkCDKFv7PqAjDg1eLDqyEWe6u6qJga5af1r2ZDLFmF21YUrcEX2vWfVfgmsE2xJky2KwGnbdBN8GU",
  "key18": "2hQiAEpnDRtmRVZymQBiQqU5PkqKJCyPD3HdGwZ1LyG2m46QoHRZ16bi6fJdbnuKXo8zKPc69WHnFLAv6gX1CYYr",
  "key19": "47NiDpgJX1SrB9BesrGpuX7SC3gQmrJogxPA8CpsVzAqPXz7cn1vQWQMyiHPffm3fpKprJiAc1w2UCc44qDSxzLV",
  "key20": "2bWrgCxUPgqkuPWDVRZS1XJ9yoa81hkszBgs41PqYkro1jw7cmFndtX2U7hyYodVRw6D7qfTkQqg2pxgeQhSseb4",
  "key21": "4DDkvUDACe6GFtAyk3c8PpCoPZbMwGSPijsqqei79QiE8ztJpAeK85mFtwjrNQgyV94g4rcY4AJB7gNJ4SevUeM",
  "key22": "59jyPpnFzuUvnaGpJMYHfzRkWd1TUAyrWs9Y3WYh9v5mDbcPabgVk6gMiFKtAiHtQNwD7jNnafiJdvcAUooCKjLZ",
  "key23": "4SKdaPc7ohpZxSqRsC2Txa7TPqiD22ALEkeDaLgqyaSvZnokzsVWKFhG6WYSdKcWQUSE1uQNrfid3cUch9djq4cC",
  "key24": "kLpTTUADk52m1aHYcE4s63eiGFc15jzM2Vi3datidLo7q5pWoYKGhMP7ewx5CfkdAJtgZz6Z9gHdCJVAKbXhNvg",
  "key25": "3iNei6CPM6sCPGaaphScD1wKmANxgA68FUefEhKTc8UXLFTFDTJx5f6Cja18neg9HGBj8SiEaU7UU1CTcGLDQMth",
  "key26": "4kJ6a4XrRZtQSpzT7gbNw4ATZpjpwe47Q1pj2XRUBvmEbMwECDMEypfURsXpYTswBRd7r64xBTqoCbwoS7PbPS1L",
  "key27": "2JB1gAzceLi5iMJ9fzjLMHBjpvEEtZuFq3sj68Sk74xr2aXyf8gHDoWeRDyT1oM4ASH95AxPeS4YR3cN1JuHAbNA",
  "key28": "42T4yzHKSFL1NYvFQvyUG2nn78EJTe9U7AXFYkpC7Kvsp9od5neHKo8PrHaYavE1LQpDkWZq8JgZrFxSojRxEcqM",
  "key29": "5QvySUpFNTddS9wQZtmojmJcBvcbJ5ox2s98UAuvGzjVnWEezs1aWBAQzkhyazB2HzWz3x6FcUepFPLrFFh9i5DD",
  "key30": "5mmVQSh5f3Ycg5Q1eVwHyDmyAcwUEEjwe5z3mnToEzJdEzaV45YttdXkG3bdAuN9ATUPLKyD3TkjYMhHY257SDkb",
  "key31": "2o3io59kAMdTWm9QyPZPigLkJnNe7c39Fs7ifpQHH5t2RuYfjeAeHkHmD5dMbQ3Jns1Y7G7HQjr79P6GuzztQG9m",
  "key32": "2uwfV6QWJvZC8uHgsdgiPx9HivVE2wzNmobZvgaqdQRoc47FPWkyWp8XyyYsoqMYxMQivaJF8XdMC2wJ6uRVQ6z8",
  "key33": "PhyFpAoMUbxJ2B9mAbKxApU6ETG8eMyj8vN2RtVPoTdchngvQM2b3jsRB3nA57jowrVfNWkfgecyxr1vs7MYJcD",
  "key34": "22PV21JYw2BsBRdwTAjQ4QCnDggp9UpXXWSitdvxhoFM2LCiwCQTVskYdUJQrtzVi6k62tJfmEckJ7PfsLcmYMTK",
  "key35": "ukMyLNiwLWQL2irAd5aCF7CdbCWBx8sFk4XBakcx9bT64ZS5FtF6Fo7yUj63WVin9gjEpyj1sTPQuaDPHp6T5xL"
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
