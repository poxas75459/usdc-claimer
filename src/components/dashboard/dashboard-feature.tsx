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
    "43RetvpmEaDiucC17irtrhAKvNQT1X6oXjgy2cknxbB4RYJWPLFBCuaeyuq93bTXNmWjUTJCpBfm8U4Xn5WPnZth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpvjV2F93YNNpxyRoRtJXeGEe9yxXfMKRzsjrQue6LWduuurA31MWftGZzsZ6HvgBDWBBAFjaVX55sFKkVTuFir",
  "key1": "4cTgkuFDSA8ausMcSFY8hWay6XrzcVzQ63iUCiEPsyfQS7a3pKxx5TWJWRBMwTfDfLadzf7scgwQ4eo1GZp6AX7",
  "key2": "2wJiLQkskxuSpCbPXdiyAYCxXJGeymciVAScMrwgRhcaUFM34DwJvYCYWMwHtaDBs8LLfRu8jkmNUDfiYfxKzjv4",
  "key3": "3uQi8pmmrvjMxfSX2sLu13ZY4nxZQvTYMkPGC2xN1muh8tcYGtoRKmqmRD1hbHEM7JV7dCKtBs2RQCQYxpZ5etRp",
  "key4": "5jmNmosiYSihQNmRgRiYjrp9sCeT217zzya6gwEJZswrk6Wfu2sbAwhnhjtKJ5U6oBdH7t4ScuWPFQu68rbm8rb8",
  "key5": "5bVRaTAkCDyhCT38UYGEHscjcaPnnfBtWGKUTSysswumLwQwXMm47bNwxXG4mYEYu96ZFJZXnUBdGZAgSWys3UwB",
  "key6": "8EghpxToDvwbNhpZ4hWQk1wQwuE9ZeiEpwE25qsjMXSjvrhdxZ1UkovxMRjSs6BTZS9afeJfDGegbJPM8Xfd79E",
  "key7": "2zgSwMtKziazNneoxSmmzPJWsKhD8MGfPARdFab5nTzGjGAerpNztdvQFsyxWkXBL9PksQPcd1r5JABEBG9Gw1vV",
  "key8": "2GouEi54cmuzKMC7wSfBbnGoXW7yV7f4dmKDWyYEpi69k7QtdA5wn1DzRztfbHSuuRVAwNvNAgDmsHpaySMHhBZJ",
  "key9": "iA9oWRK41RYM6YTeJBYKbMMCjT9gbSWxgab6sarpH41urFdCgpQjn6tmqM5Kq3PKz5NMKwjvUY8dxnZofKdQnsR",
  "key10": "4GaYYXrA8813jQAP32VKbE6GEpnuFn3dkhT9Z7sR6WpYy1NaSnBkT3qF7NALDzdPdvNGUwPsHytwDu1Qp7xXqHsd",
  "key11": "64F4jV63EYAcrHGPoQhnnvTeRDxYtkBd4pw3eCnRYU9SeDKA7NMnn1itsryDsFhH7T2KdzFjteXDigrajmAFBya1",
  "key12": "Jq5n2XXYiwpNrLLQRGfQsCb9wtmg82KCU2hd34HekbzpYFFQJr3bT3BPejUcRzeZn7wyYRSyEFxHd7TjDzLx2wV",
  "key13": "5pa49HeCT2RfLpBadhLAEND1wxqEZEBGUaXGHu5SMDtHMtBP4UNhVMixpGj7BrJEwQHiiASWdwMyu8jGz6hi9cmY",
  "key14": "65p8EHRWiUMNfkyHZr4NHaQwthLtgyt19fS9ckB1rZpEHT2KaVNm6J3aUK5vXn765xp5eF5AnD5UNEtWLMTCLump",
  "key15": "4jS7zkx5yF7pF3J6X6dNEiiFTxqTjT617qyzgGRV1ZbDovHqhmv3JvwYaAwEMJNXSJNqjgzJEprftTgQA16Kesz6",
  "key16": "r8LdLgVqBS1k4Gs7gum7AXw4XJVsijXijKycatLC1FwW8XPrNWiZjXeJmwX3Ej6Wm82o83E1f3YNrDV7p6b9A24",
  "key17": "4KDoXBqqFAfp7TdHqUeLDNh73FyAvRoiYmSBh3WVQThQ1P6HpzeAMh22dwVbgohibbKz9rvJApLGi3HsXUv3gN3S",
  "key18": "26xTJgb6AgHfEnypxSJ5xmuY7KmEk6fCRWpaPVc6ZuefqvwSJA4JAkPQQVqiLuJdgFbYuyE1H1FqhdKgQ6sAUb9S",
  "key19": "48JjAn12E35ovu52ccAivs22B3hia9Vj2kqa7aHLnTStoHD1depuKXoTLq56EavHo8o4VdZ8gvY6Pz25Cygk9EHQ",
  "key20": "2gpTwMuL1Kw7bHQKdP6foasZLoxM87iwg9PFVujkAZgzaacVC9g6v8rxd9ttQ4gYHeqq513HWtBhH2dhbkUPQwEM",
  "key21": "xK4nRUU9uvyq36RipgkVRpbhn9abSmipnA1Bzoz7G8Q1YVYHx9TFS33bRsxTVudgRBjQkXogX8cZ6shHTmyZPVC",
  "key22": "UA9Zu2KmdV3RXVD4F5fcAYkEqDV3CbzpUGyEfMYUcUa7QQTK1ttiXjdEuoebqTMVyGx5deBwp7pfzocySFKAiv7",
  "key23": "4CstvxqKz513VTWN1ULZbB5u1HATiB1iDAjUM6PmVu8crqnE2q2n8yrnEFup8ZEFsXikKfnAHnMVJ4kJgSBkvoTg",
  "key24": "3bF4UCvnNzN9mjbWUVZM9jRq6RdcENoic13vAgA2ab6H2W3ax6jmHsPFy1aX3SMForyDXWLBmbuJpiM4oQUT4e4D",
  "key25": "2b7rAbdjqScg6KgF9DnJQJhgCKmXLDSS33rJkZeVpfQeVcHrxt1KQDyVf1KKmpzz4tRedetv8A5nrGK3q6kgVvBZ",
  "key26": "27rbQku7NwGE1kbM54xSb2DYWdYVFJFUb2gJ2WdhcVZNdiqbsFhne9d8H1hFbHTKKzbbzCPg86zCJSdTpXJzAVnB",
  "key27": "fy8fCKXdFX5ybfHjEbzFpu1RGjLDiL8pqdCdTM4DtSFepWE7smLPY34pMZHuGBCcsV8pTTv598znvCEYGQ4q4Ga",
  "key28": "3krDJB5WwW8JFzoBnA5zexWYxJKMHLkBFdm6fKmUgT9cxcDX4gQ4tq4r5rZRQD16MNxyETUKm5hza6KyEp1seKyy",
  "key29": "4KZLsMu3qRFz7kYCRsHAbCwLfx8RE2fhCW9sJzyBQUxhE1DcfrLmcZeoqmoSugNyh9Mt28FtQv6TEbKzNkUZrqwS",
  "key30": "J9aAuaJLqbN2JUxjoUFP4wfhhZ7K5BT4PxEvamugRY5QpW5jMJfAYunW7Fg9YdKKjDjdVnsyQuQPXVB574PEKYm",
  "key31": "4zyPuTuWfQkrycDXpFG9jJth5Pf97Nnuq3R1kxY7gc5zVqKtHbaftx85F8FsxGQ6RQusZ9ZCLaXWXg3kdw9Scrdh",
  "key32": "4LuoQnRNN4WcHBpfnh4uLesfBxgv3wRmF3b5qrNMAtKPJe9DKxpgJu8DCQi3CyQkQ3nszb3q3rUocb6ue2BsLxdu",
  "key33": "VmUpoVMga6QE6uFmyoBBrZUNjHHy7Xx9ag3TvKewrQhzaEVncwQ9YrvRsVxgaX7PXRtxXsa2jTjPMSFk1rJhqWg",
  "key34": "2HQskqSSw6WUK7mtbmbQ2YhMZ2wvbeQA4FGMRx3tHnez5fLvti9YbL6zS8BZr4VpNmvFBUV6zwTT889UQppa6Gjw",
  "key35": "2da8kz8vdE9eCqBE2cTAc65ZQpEmzanSk9hCP7sBqqStmF9m4g6VgfBNHoif2bX1HwQHxQ2uTjoeiWB3MGvRje1D",
  "key36": "VgHbYL4W6jfZPrQD9f7st4AGhmLb3eULbhW1YAcWLTiMshkfQJ2Eo4Y92saw93PunWvGX26tthz41JhPBiL8zUW",
  "key37": "2SsJgnMsVzNZY1aJRRqiV8jiSiejhKcCZNnxqK3xLyQkKbds16F2LxFKcykQ15hBZ1VFr5BmXtod4unAPVUDosV1",
  "key38": "ZSaEVQZhrpYt3XpNCUdovHy4NJaFHSvkUV6dVrfZqHWRit1rWEgJ3M5bCT2bo2mQ9oxkLAy9Cf4LfVqkJCuWHas",
  "key39": "46YSpx1zcyFbNNkSMxT8yqPUAkqjRaSVSyfpFtpFQagXgNwXkSSG2sVue7Mzw1GM4fsoq4jsKu3EHwVhqWE6TYof",
  "key40": "2CA7d8TsE1R1DPr2XSDfkcC3iSp7umaXTb9oXpHLbtHNXfrKwqKB7U5dYFeUZUwqV4Jc7S34CpZJ4jxMTPdm86Wt"
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
