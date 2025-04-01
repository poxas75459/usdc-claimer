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
    "3SyC9nATKuuRyEbpSAjzhKQopf58P4TqHFbAHCQ8K58CaHbns2aEBopL4yCQfamzW1SiUEVszr6WsfyAGMifrxf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jjf99wBMANtnXPpNhbPnhGrvSrFjNwqHmRcH1tmaVMmRCWjSXD8kT69EvYDrUySKq6J4fDorYRzd33DF9u7gMkF",
  "key1": "2gzntMyEfdxRzpViGykB3Bvtv1uyqCcKFdQwvdreiD1ecFCj6XQKb2whdCgEFJUqTtUMVBHbmVN3cT7vBHuHw5Ex",
  "key2": "3TV3NqQ5gz62JvoPHKSsFdnmL2jNsBZ2bBBaN76pe43io6eFNkX3aBANG7LUepU3CPVhUZ9c8kieQtUiJAVoJSpK",
  "key3": "3sSGDa9gMAGCaFZhmaLXedQQ3N2yG53g9TXhLp7UxsHdfniv7TS22JF9CUFuJf3EQbE4wKWLesgWnRVnTw7ge125",
  "key4": "2Us3divaiBb3Y4QdUXeJZJ81AY24bRKgMugU5JFe1i3N2dU9FRRm2dE8nm2FnhLxV9n4M85nLZw9YyT4XL6icTwe",
  "key5": "52coRpnVgukjbfhk2ZqwpqFMPDzGoFmKJheCN4gRuZiVRCgbucZTvbUvpLTcpHFUFjKSkDq3tLdB6bvTm6gS1pzN",
  "key6": "4PXoPRronx3kYHon12zVuC5i4xmUhQKiJ8j8nRD54d827xg2FZuP7RZCFNHnwygc7BhogLgWmDoyFKc47ASjevMF",
  "key7": "3VRB13jZedLi6AgHnn81GX1NTk16CPDWv3zM1X6H6pidGUsBU27WWGGSPV1cNt5Gh6JQDVs9JzvuXRwGG7MnBWtM",
  "key8": "578sxqzgHqSBVw8eDopY5uQhjK7vWN9uukc6fczDnQcdj9QsxYimfdKAcxmLgqXsujXJ6mJ3WHGnp6rxdHiAazqU",
  "key9": "2ECtFYrfhknHT4XS11Ck8XVNcSY9iPh8sPi3S7nJ5pM3bNDzwgznUcW5DJuc2Q5WuxsvZV1MKXD5RhkSrxfexp8T",
  "key10": "2KDTs4daZHF74Do9roJUMtuZDj7fbGXpKL73PCJnv4MeRmrg4bKVyTNq6xN5BD17ZJUbEgbf2L8uDYT3dxLXzpbR",
  "key11": "2eP4tYHn7ZsacoeSf3qC6ttTQnCdBQvttYk5F4nUSidk6PjsDxvoMBwk1DZSK2hC4SmZMyvfT1mR6z4gNYdbcz8o",
  "key12": "W5DPMwS2uoTDGeoCU6NhUx1Xz7syx8Taj8rLWNXJXAfoSQ3RfSYBGCSX1wT4nd8MQnmhvK6EYmyFB1RG1JW57Fs",
  "key13": "3pKJ7WZb452BAWfnJXgbnYmhEhohduSfHBXxTGCNEiGUjNzhTeW3tnvdWrig6rKVzDSR1Jim4C7m38nkSfaKBjtn",
  "key14": "3qWLYtoz2Vxq8aoUPucYRR6TMM3yV3SpdNAqAgYdp2jCjv3VhZFhF7VNR9YVqBHFrXRU3ikbVnyRrExnr3Qw8sMe",
  "key15": "4j6gVKeSp7E2bDJykZTvJid3HmAYJTrA2nHxtWGWXSJVWM4KpemvGWKGRXZAzJ88kjTdQZDbM6WNQVJ1C1k7Nd6u",
  "key16": "5g7n6pANdZCNNhHW1iA9PzSWbSSBqmFEE9f9FdYcEuSCMUZYX9Q9rah1b4TKXFtVJ4FgnNefc9b2YCrMSFhXZsKz",
  "key17": "3oJNeko8aCz6NBEXmc799aXMvwMjcVHUhVfhBiXJZCuMKceFaiSEPjqJw7PNR2JTHkQYubga5Kn4CREwXGqYqyGZ",
  "key18": "5gotguXxy5vLxcshyM5nWB7UgLHHGoXi6rRo7XefcrpNKJ1met9MMFbZmXHsERQJjCvhV3BCyfk1RkLJK9fFo6AM",
  "key19": "MwzFf89RrXsm55sr9fw7NW2oC7jq7yd92VNhM2uAAjz5VwiqhvdSkW9jTMfzaJM2gLfZk74tBiWPJH2ReV79V4Q",
  "key20": "67q1TsLZpJwvjA6mshc7izAUukswYQ65PLRfTbzWzhdCyYPm71KiWzjGAJD94zb8pEuHfS8ajxybhFwSvt2nMwN",
  "key21": "5X7xixEswQ48ELZP6bYq4Zzt89cmtoFNK56CQNwPYG4SS5sYWH7qXZPAN8T4opvMHcXyQx2GTmC7PLJZKeeNFPDn",
  "key22": "5XSuqR7z9p2twgku3b2BvJMPPcgq9GxCYXG2HbbYL1Pyp42eGNcXC7sUD3WZKeGr5rGf3qfQFLX8izQpS7vftzZ6",
  "key23": "4Kye5qu4hwqNmvw1zcqksyF1NWpW1oh5RxKvMen7poDo7QEqNGrzJ7DJHFvE7o7iuMWrKQyqrMeBVULZqS4b4xNe",
  "key24": "3RC4HfsQK7fZ7FRArrcB7z7YtkNreiuFuStf14jeRWFz3cHDTZcXLvGQYToTGQqDRxqag73Nu8tNhxzysWqZLoui",
  "key25": "3MgRuVVfUQgG7897txcMHkWNmmCFL7uY3jjQV8aJxZZKoBAH3JTxfCtogast9kyP5t77bNwvWAqDZd6iNB7ydzjJ",
  "key26": "3Sbs4UjA8MxjbJyWH7yaHndNjR5kL8TmdNg91GsViivrPxTkrQJs7Ho5iBVEHzCW4b6rCgGYPtvECiBWeDDuvryq",
  "key27": "WoksMunfxsrqU2iBpBf1pXTLP1ib3BVLv4iX83fEyTk2kN1CRYA5ku9envXP1vBpEDVjoDigTxxmLDtSVDbC8SY",
  "key28": "4WkF38jE7M2JbHY4jiWmqinYWZ7Hq8YAumHzkH2NnnWJNSAHPkAb2UGy6NDvjfji5iQa1fsBuUTahmggYpuNPYwb",
  "key29": "4ZuZNmQjDyj74N73shYDd2xD8qaZMsgsFHU4tXVVSgVEmAm79LrxPouE458XY2X8teABvQnCTKiwDeCanqh1KVfd",
  "key30": "2f6dpbYd7w5MJrawLtwu7BL4HdbdNcdvjwzQUgXNRRZLohtxWLjgdcMex3jUbT3xtERHv1uVaTcxGbUa2K24cb5W",
  "key31": "2eTd9mAZxX531fxHoqYh1e9bwUnuEzfNZSKvzNSxorXu8h1BWvDbVkd8DEyhZS1MtusVm8LNvBAx4D6murffVYzR",
  "key32": "5zYHpyTjFZff7JnhmBsA681QiuQCpVw7o8b5Gttmdg1EAGGpGcKeDRmbuUouYmv2QFsQoXiius8A7syXfit87zqF",
  "key33": "4UKDyuvxzTdrTKwENUT1RsVoPBkuEM5RjGiwkgXyrAjwQD1sRnfxyo6yaYwaSibEF9M4Y5yhUsnceuz6cRaJ7H4D",
  "key34": "RwX2Xk8dAzh9229adKPksjcTp7Y6Wr4QN1q1HcLqPUi4K9n9unWgcjWCPRZdT7EXnzfrtrE8dgazB2WDTt5h72L",
  "key35": "388PyM6EgpN7VWihfXuau63gb2xMZ7kZENzQCQuLLVPspkpUeyqV7mz1xfcuN1fjtJmovq9CLbEX5YottYKUYHZS",
  "key36": "2fVYpDVhHT6THNiatrMaBfTkE7HhJ6xjNbY8ZacEuzzRj3nMAA3Wfk82L5kmYjhxnhJF4oognsfFXoLQgWfx8BP9",
  "key37": "SPtTVAVA1HYYPcmqQ2BmD5rfLuLGbZv3pFJL67WoYb6XU4BPJdtYkKKcbRYL3oD29BDDmb3ttuUhUUaUJsxxm4R",
  "key38": "2c2DyapKmvd3JyJ62az9YnaDFeZ6kTA8u4Xt35uL9tVsJvNsp3KWBcG5qdQaG4WescdFiFtwt6FZhspBVy1aDGiY",
  "key39": "2CVsSmLpRQwAgLVdXwnSKJHVngxqUU4YbPJMBUkZkngJhJHoCPLEYx7sYm9Sfbk5ZRuqP1AGEta2aY2cyybfwJCY",
  "key40": "4RBKZDNKHH2vEASu5pbvqdEiKo6tMHKQLHBCrGWSTX2CR46nLAZmaCkuBYjBZ38usR4nfzfPqFAT9QNCmtbmoRhG",
  "key41": "4xRdZAngJV1YhQbTTzbruAoBNjoeuSsqDhYf6EcFCw7AdLuZ8pVLA2zPFeVz9U9zjhn8yzdRJmDajaa6aQPSHBZV",
  "key42": "3vTcePhjWiXcqqsQ7GSv4MXMzAYT4HXFppp4LLbn8KpBCGmapdf1bzWwwmoeiy7GoamzDABpeTvW6rmEyRGqDFwz",
  "key43": "4XS7aKn5RNYtQvP5nzmAGN2WttqaB7AzWHwRLq9jsbRrwGWCbjW1x3f4VXm63L5ZUZtiyF4GfUUpgysLtkFpJC32"
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
