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
    "2fnoyYPQa8mhjS6SmmqYcq5NPgkSs9eJWSvPYMRUQGe465XnHjXS5kiaWw3R4ax23uVKJ7eu2Ac4NTPP9nw4CUeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TrJUpnjapEanYHsD5sqraoypbLUSxcasFGyoEDCEidJKLmYqbL2KqYiz9oqbrXhhVgdEVhsHoaEEc1G6rEFU7Sm",
  "key1": "2JVKpcDAWQrHMT6Fth1xSpSMcXSVtJH1DzTjjUowL5WFUxNEd9oFguyZC9WuRSUjwdGJZD944n8jLZKWZudACAWb",
  "key2": "DqoNGnszc7sKMrCPKptb2etifzEuWMJktuEKXPxLRBRb5k8jXiGNzdG19qBHAapMYGZKiV8KumnC5mRiETHJos4",
  "key3": "5JTpjK23YJzoqbnA1X5YQET4CA9ojY1Stz2KaaX2NEUvY3THbdDEFNiRsm2nPtsoQRP4zy6mdtZ5J7ViUhRgyD8L",
  "key4": "4nXkS8GqNuHgvMYuPVPiEVQ5VeQYP1RE1721YGbQeXUBjrXuTD29CVdWnCED22FaHTcbzZFziZucccbZMNDMq4ip",
  "key5": "4AEqujYfU2waByKhRmZmNbz2W5EBD6ThGxFXhMN6xhZQ3VfqcVB1G5oAnEnXzNUX4rznZAGEbQDSrMhK7CGJvidR",
  "key6": "GjmvGn7BGCPCaxLvqo91zj2R3EgKt6bRyh9oxmRYpWJNYakVeneSMjQwjLTiXnfKK5iQj9CtvbFq9WdLyYjvGNi",
  "key7": "3zKgWfNYyDHA2SU9pymLHffrJ8qbWHJ96TSmjPARADMbywf3UUPSLPczSqay5PNoSs1eGXt72pxGScYogggyUPDB",
  "key8": "5YDt9LyNo8gGWdsG3X2q9QWR4cTxhBPJkWY1TxPkrnjbxdpjSqH5rYsftwSNk7kHxCU1AdzC5BxtZq6UQpYtiSAR",
  "key9": "26c92e2Ggj2rakmK6aqog8aEndSHPs5fX2q9X3bAXVWbRjbePswcmh63cgTM7g6t3zHxGAjEY9P8WMvacf9xwvxk",
  "key10": "34CgBECE4UVvNu1sRLmGLiY2kS65PwHuTX7XifbcanLkwuPxVYBkWQF6t1mk2b334Uenz5DJZ9x5MmzNDouKuWpa",
  "key11": "4zYj7SAmT4uuaC4FYqpy6oSmHkZPQFxwx85ve3gribAVwENhuWv4LTGCn7Y4vzMGxpMpiSXEpUCuQq295RdKikQZ",
  "key12": "3MUkctfaRcvszT3PpwbC3nZ6qwW9MsEame8oeaNhNCp9D1yuyYd8wshrQAmT7yd8YeUBobP23BWVAYQidYU1eXWX",
  "key13": "5KH2mbiAf1dm2Sr4fsypfJUXgfx1jmZ4MiFJUKFeDisuShAkjhDA4frf4emnbZ7pmT7KVKkvJYyyaQ6xCywqhXXi",
  "key14": "1KmtmxafRxMqFvvxGcbGpGQS8j72BELwM5AzKBRjn5c4KELeTb9gzPcT5Y8T78ArL4wGC3LzUPaBXrH6aT4Vg3y",
  "key15": "2DNvF7LWhNqqNqCiFXUfrFrsDJsfzqN4AgMZcEWyAVby4mec2rfX2dppw69MmeVAPgfGczcuz5jtUhcH23xgKTH7",
  "key16": "62GmZUt9sYZKRxqRVKZH1ADpeqUFBTzyCtzDZ14Jr7RvkmnrzV7JaKphhxcTFyZLDH3bVfaizkNkBqWD34DPFExY",
  "key17": "4qcUHjSsMqPAveK8qCMrdh5XkJzVnxSP7sZjxfHhFa16G6Rhy4fE5ZYLBgGu7RECRNiZURj95dqUGuSJLaGBxjMq",
  "key18": "2z7hhrV7NMyq2iFdwXVxB2StYZDLmRju18kSQZ6TNm6hkuwtxGXsjrgeqU6VFhuixZUC75LqhcvxpaNEnbsHdZiu",
  "key19": "3uagvttSPwaRjs1sLBGEVDfYfEfmgTBtDCHakrfActLD76QTgUTUsVij21CcsRMv9MiAt2PkTjvi3WphKaJfzwB2",
  "key20": "494MkHkY3uNJuhoj64aJiCRhuY9dYYW6JhoWFtCnwaZxGzJTceiTMty3FE4MaUuTUdGEyvW1vVHvUiiLQ3wFqYAx",
  "key21": "2aKzDMEn2xD3p9xG75oBvrXpvRn2sQJNd13AFj1cNmrRSgR6f5YADxbQdSCD8WXedzoKCiXzdh5Vq1Dhfgw5QtiB",
  "key22": "4TvamfFtLQZKZgNotJ5T6iDrfHMPjzoQjosWaPFDx2JPGZsHMtt2z1AzZ1nFPRM4TYjK16Nr7NhzU1Z4vGHDLeKT",
  "key23": "5EBSsDWTjd9sVfCHSefRSAE8MhKgW8go1z47aKRdw8znQ4RZntZFhZbguwPe6RffTzkktLBEDXJF3sV4tRTsjCSF",
  "key24": "4kv5asvuxcLwWCZnbWi8ScempFcDwM2v1nud1VuJ6QTsruci9Vycz1A9pHTRGHzBc4unrwg3t5PYVLrjaseAkkZt",
  "key25": "3fSggKu2n6gKMvJkFJJRDrNrbpQL6uY3hALcztCXqDAo6xEZaBC9VzUpGPSpMJSVW5a6ypAF4a8YxQmVSmTUpxdj",
  "key26": "3w437wXUFryzgHeqdVH1Jsdj2fxCBYkV9izDN7RCdfvBdC1Ss6q383hef8B1Dy8YZ61GmR8RG7ZksrdRSXcuVY7E",
  "key27": "3mwUaFivTknxsLPYHqN8qnkL2i6mrJznwyz3RcREwstLJXPLouf23iqyySE8pC8dJZiMhFUCG2jMAvLTkcy2w5Rw",
  "key28": "4ScC7TmkToKXs4Ba8vsMMM5bmk55VFjhKNu6sHohUu9Spi3ndiv5dLb9gxrLNtjc9nbn4ckUER4FaQZG1r5aJvPs",
  "key29": "4VZUWd8WMewMWfXx2jaR3pLNj6Ur2vuVhCwWurSKN5wwZ3uUPKuLCR16owLtiQenPo5BNoA53dNhu8mvGK2L6xjg",
  "key30": "2T7oXFMiWmPMXU9btc2NeE2vCWRqB3vw7B8Ducuqo9fjaZCbyC6AyKmxpG6mMZ7Kp31CvCCxzZyQEZxehF1feW3E",
  "key31": "2HTfnHewv16yohps2dC7XhruDScMQPqyQ4WJbvWf2n5iBV5Ha1NHxwqcS2TSH4DvNixtVSmUkT9uNwTnN4UugZaL",
  "key32": "4EWxawXZZkTxL7f5euMP3fwHsH2mn8Tc2rar1tFAGM8Z4spNmxNJ8Tjp3JCK5Tm4pHjUpnvJrYBmro1NRCU2Jarm",
  "key33": "5sezDvDtwbgvMHTut25qnXCBibmonkECgKYkL4a7zutdcB2mGhCnptpp6gSacrtsG4rb5h2EDD3mkXf1cGGRN82o",
  "key34": "wcaB5dZNN3MEAVYD9yG75ZHABvZthZ7QpcERbzuGRKdXRP9jaW62eN8LTfkgiMSU7UGG8ZQ93i9xYyVj35RCKvE",
  "key35": "x3SBJ4fQU73zzY2xHcTGAsHsSTYjGdbRdJVMyeRJKvMnGCJ63xZhAfPVcj8XKKuTvD2K7nCdbzC7sw2vazMpBvP",
  "key36": "5U81cWM6iei3sgLmJHJhPgRQy82mq2YNQZQQH9wyw7g3uJ58dbwUVVwZJzwcQNtgxgaCDFW3mDTctqrfX26uxJGU"
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
