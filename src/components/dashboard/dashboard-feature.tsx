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
    "2cwswhmWzbwoX56qmmjWcFDYJFQNwTakcdQhqWtz7jgkFDb6w4avghNRQV7uGPgL8JU4RCQiXiYatDYSn77cv7qW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2sh5dFkkmTiW6sNZuwE5ukL1m7TrqJAZ6dwJ1qTPy6QBYM1dC56sWxduJ3UWvK5CbLuyfTpTo66Lpp7F2JHeAq",
  "key1": "4h3RdksTa1F2WzcZPnBRGvsesbLxT8k3TCYJ9kNWKqAei86D6yVMn4hXLKNM2RzbW3DsVXYFSiZVTwGWLediepRT",
  "key2": "4SqswJVCNNB9se8BAD2C6LM8Q8hsb31kdZZgFppxyep5Q7yKTkZsWQbGvqgmDuRhvJynNuSg46mE7UwNoeQNktuw",
  "key3": "5XPaPFo4NPJv1vi3HYpj6EMiC41xSZvuUhPC2KzjYZ6tzXu1kGVyscVpcoSYTzrt9A4ffUyez7zHMh5Tv2upZJWe",
  "key4": "5iqxG6nmqbYSmBCenftmtRd3nTHTFsjL8viXh66hFz1k2GmSC1AMAAiwaVpr34DK25TpJBq5ge96dSGVDgehAzVd",
  "key5": "JjgyAW9Vi5tnwSnJ5sa7NgyGDAPawrUvCMxLTUEDW4gdvTdpEY1xQLiBi2okGwpG2EJLUuuy88YwD1mgCYb7N1g",
  "key6": "3ZhkD612e6YDkvCN8xMti2H5xP7WEe1jMWrZvTtPDXjSG5MDDbZDXgP8Rd3V776ESrepxqigEV8SkHyqwtUp3MzD",
  "key7": "XrK2LRyNDHLDoWjvRpMLrgnfTgXioKpt76KCdxtfKb5WGimERCcUrwvxpNKEq4AFiDXvYfiCk7jPNN4eAQtnNgx",
  "key8": "2yhufjQE22PupTSpY6RKDqQL6nqG2mT4P2nnhPc1LJe8e5mez7nPY3tJHZsLu3TFfgkuGnze7TfjamwLtqGjtf1j",
  "key9": "9G9f1FWaN8bTTh6H29JHMNKpYR3tUfie7SVSGhUkTz2Pupk7eMHHHAndxqj6Np8i8wChiiDSWawPJiEf9S5L4UH",
  "key10": "X38YRovvDSbZC7Pkojss586UmosiLr8pAqPNGUf5fLa8975vLKVQdoB4aummiZcZsLzANMARNH4vDaG6TSeUNDb",
  "key11": "3NLFASYEqokBxGRG7TUE9PQUWEFNCJh3MAfmZTaKDWGuHJCrdizzRYCbzjpaRxuosLz6hZbYLZppNp8JEK4qJNfV",
  "key12": "3DABDEFebT5fsYRxsboDqrgKmKnQ3Cs5RmCkmdMgpq5PY2iFMfs3d6Mhj4Dqt3bcSgGJAUZZhvKHngjaJG9BGpyQ",
  "key13": "5EpGPTB2R4KD9xZ6EaM5rrgrRnhYSogjp5ZhRbAwdffhJoYRSnyzb3Rvdpg3RrGnsEaWB5UA5a4MxU1y5W8GycKh",
  "key14": "2X2geoNbo4mpEhT2KGaFyoEPC2Q4oSU83YLpjC3vzS9XT2h8w4nDSeXKEHzBGG3JeWPKtoHTyRSQqZ8zkE9DeJQh",
  "key15": "5fbwQkzdVGbhFa6Uu6pwEKNJmGNRZAJ32P29PdRrPevMbZB8AmDrVCAFr3acZjbyp73QVBWVqJdgLgmnSMKMwAgs",
  "key16": "5p4ZsSC9J9F1eRgyveTjxGqzDR77JDyeXbuibYSF1J1pRizzT6Y9WQkJw4xwpRByjrhgWncTmkYQexirbBHmMGnz",
  "key17": "5uWvksfSVW8uXk5Yf5LUKZQcmgK3NdciWM6U2ZdQvWeusPqCpQ1ZsNsieqFFAnjrPdZ5U1PhJeLRLzQwwUx9kYqL",
  "key18": "2oEp3uwg18zqWqQ8Mbai9jgoD1R5uuBGvK7cLXH1dcnTde6H9KRWiU3zKJm3KN6o1C83gZcYg5YoC3aPsyore8c2",
  "key19": "29XmVYf1ZH2h4YQ6Ft8V9WeomXSCq4Du5s3MruoJGq2rfZNQbSNXpsgQsXeDZasXgbobcSoxGSaWvwh26w5Grif1",
  "key20": "5tuKvvMCN7W1ZpuNvyvpoboVMPwq6ENmvecE1vkyKRewHZyZcshdTJiom3vScEph9yDmqWuMXUB5vvYeUL3KBB7U",
  "key21": "AU9Rpk8bRxvkJiwtkgaf9ohh8BLU6ai1dv8EppnsU42C6SzEnG8Ak1X6RmpSCWhkmhJUoiLUi983YZg8Mq4ox2D",
  "key22": "4uBW6XAi3Rqmo64V2NmbffqYiryGHNs4r3iPygEqN8LugdX8v42c55742EghbEWJ7XgHt5TsdCWo6kDuogjr36Fa",
  "key23": "4taPSbw8SNS4vv81APGaPo5w8bFNaWtmL7E7ooSjoQ7r1fqzHQkCh11Vv1R1H2JipRazJjXseRj6kEDyW2uTqDYD",
  "key24": "4DPCaysGXSn8yJR2W6FsLfJqGtxky3U8HH5NP7gFfG8TbeagDhRxgcHVCWsVBsiAUHws7mMi2cNyDJu7jJiYT2Fp",
  "key25": "4yR7VVK5CgkGdePU8Dhv3n14hUHzP8khrtBcjEqqR2JdJvA4PCrMu2A1YveyBSWLxHtZkaRPZGzJY8LY1CrPU3Wo",
  "key26": "2zSjtjwiKGF9E5FUWdhgJpKkmj2AKPmSkRPLSKHXBVAb3nftgdGAHXGA8coUY5VND9hb8HrZyZcADojH81f2gXp4",
  "key27": "3RZCSLtqfuLPaScRoch6LBA4Ja5Nb1cVD1x6P6YhVZ28pLDJFADH78E7f1n3y4X78agB7uTXVx9z5GBieZTLnuU6",
  "key28": "5rFezLg989QLidMuPcPht5fHyUaQTKiVFgpdQ5EdNRfrAZT2t7iSeKnmpxJm5uhmB5VerBPQcKqY19eTdM65V4i9",
  "key29": "256Erof1xJtgHhoc9iwdzQ6q8iG6qV8DB2jv2S94e98Ky1JWxUEmYNHjiy2khjF69njT4sByCDLwTYuA6NB7u89S",
  "key30": "35kE1L9VLKP9T8kpdJJRRiJWKnyc9tyX9e1W1u9ecM7CzTQJYzCrYQ9gX6hWBya4mWmiVpxSe4w6nSA9U9bWTPXG",
  "key31": "gxb2ogCBw93qZJbsQKZgCTayg7LRyp6MfYj4TVpt4jqXcUVTdyehEwzFz6gAzX1QEgttF3PwKaXQLg74BUnBafw",
  "key32": "3YMeG7N7oQeo9aph4duQeXJdvtxH5Nk36SCGdmSRtC5hu94DmDHSTqXED4SkiBcrJaShmhkbWimzxvK19yxdbZWv",
  "key33": "3ghaMifrcEJf51huqLPjASCwyomQMe4qheNR3hMYw1pnxdpNgGGYJjbd8exXKwm2g4tbKZntH96mUfu9aDV1M5BM",
  "key34": "4VEgvgRuRoZfGsprix67hjiWjW27SCBhGNauXNfB7YbTu7ERP6gKqdD8aj8JjLDAsdwoBT6hPGFhmiYPfsXLAdu9",
  "key35": "2VbNGBUkDJSTuT7RJCXmMnPz4BbNFpMmpCNdBjjPbYM1XrvCSfyjRQBkpP8mkhqD4dcPAuRm5yCpUBNszK65kiuW",
  "key36": "5g7Yd57QEDrroPKj5RaF3zz2qQatWf8EUMGMZJk8CfdLmcVN8u5nzqVnuvepTDqov9JwAStg7Y4K79XwNfm2bswn",
  "key37": "2QGdZAMSa6LwR6a9uPvqkDLVjpoY2wUufMVYZAVy44J7WSkjF1Hhdp87jQwhvdkfXNRT6fKEcftJHL4uvnkvmnqj",
  "key38": "LbBkuXDp9YWrbm3e1VLRbiGP87ZCDavxmJRWyUc6HAnSt2UEi7y4XUNC9MqdrAdzG9fA3RMD5c4eccLLdx6c4tf"
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
