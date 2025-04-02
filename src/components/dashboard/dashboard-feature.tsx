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
    "4KGbfW8XBSJPbqRcHGoWdB569AFRMKysbmeEn83j9crZt4ioGmkEjCb7CFjzzQX6yKWRCd9ozoCuA7t3TRnQXULD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmVbZE3racnZtuvko2x4fWoqZU33i76zKsBRnTmK2uSALFSSRhrq6fU8sPD75GBsHzHWKYXSkvbpEFjzyP6rbiR",
  "key1": "2GeyY9eEwQmoXqmaz3ngg8K46UZ6wBYdD5yNGXKtCPfBVUL2rrn5Ya5DNA5V8FLeUwvQHHt4iR52gedxxecjpGEU",
  "key2": "556iSCH6pjUZDMpqQzMeUKbPK2DndLEXRAzzD9L93xx2M1eiQrWK87R6hwSVqiZT26brjx56KA35VMie9YjZLVFe",
  "key3": "wkxaNWkkBTUAsPWLZTRnkBX1jkQDvbNfJC21h77xX2RUB9YhD5rfwQKkVfPSmAZqk5yS9fbh7DzJjuGCUjivHd7",
  "key4": "2a348DJgMja8tXu55YYL6jT8j3AW6v2m8Hytei98cQuVdCmwCkcsaayrWyeBi2C9R6CzLpNeAedwX27d1V86CJCm",
  "key5": "2eLDEDy9rah7oPTfTPYdjHk1DEktFkJwFXyKwLwGTLyoexgpgkqmqoZYkjgRUKAYvkVrqLikKV3jWwi9cy68pjQ5",
  "key6": "4kGSpSuAhckrWdVnyHYUL3GFRRVHxVNpxKLE8WDCWjR64BvjD4FTCMyRM7CsgXCNCDy5kf7tm1qE9isoWEirAZiX",
  "key7": "3BK6ataZpxqNWKg8Me35UwFb4c9bTB1tCAnABfej7Yopc66mJhsyRjAsEZYdc2K5uaM8uggodE1UvMQfRagTf9XF",
  "key8": "5MHcpGLW924Pzrfx6jRDLocMjjz3UW8VV5eDmdecf9xcDsNsy52rrUkedvxM8AXpeomWsqvecZNg7XoeLCFQMGTC",
  "key9": "2Ha74yXbCazdNSKqwUq8nSYM8kNCgpNG2jv65uU7o1dAYRAZJRGryb99nBZMFXRYww3575SagodQHUMDKadV8mKf",
  "key10": "2tE1oZb9p7WcGbYcgA4aYQ5HRiuFsd1JHEAfjX8CdmzVoUePmb8rGFNF46gCowZzAWK9hoJRyJDGJ4AM7PACJyi",
  "key11": "2fRNLDyz1mFZs1qWCQ6ASdyAhRURMCX3KmHm77ALEfbZxn5desfbFRdsvzt33JTJ63kW7RA2VJzCEaoaY9eH2VDd",
  "key12": "tD33wUYB1WMK6D4LmZVVRkCrr4WbqNmjFw7PxEwmynLE38LYC5TUJogp2JqAgxtd8xfgkwr8ghrh1PkfWUBga3M",
  "key13": "5GbzDb3a1PFMMMWAq9HJcnKv4bqctAJ57GbpnrXE7h1MiADFXiLqHZ35Jqb39EcDyswTBaihmB2SKhdoswqUoHzQ",
  "key14": "5xU3yDtHJpYWxAW5rbwbSj25TmdnTyaah7hWgu27U9XWodKTth3NenXznqUaYCJCKJgE5LhyUxud6bVX4xZsYK7j",
  "key15": "4HvfcgH4jy79sShKvF7Cu1XiHiNjT2YEPRPJ9PZXdKHe84sQp6H7naPvUHbzRr6PJVM2uwPY2A7wF2wnBfWxbVsZ",
  "key16": "5Dab38NHJcRaDVgtfWgBzXCLvPk1uBjHnNzCRvZshgD74cNGVAWdmmgeB2w3mpSX2homgSbKVu3LJhLN8cnbtNYf",
  "key17": "3gQQrTCnwByaHfPhxm8V3XM34T8RgwAoW6QkRV8ochZ24Ft5WTAkcVQMsn89tgr2GKdTqnvX3Q26uMPoacCPe2zY",
  "key18": "2RAqMk5nsZLrNuZxJzFdTHbFVkUrkZESBCvDmQ3VNV36rMyJQhPwmNoZqZDMMt9p1DadwKiQFUA8f3LxcYquRftK",
  "key19": "CwfYVb6MUDHrTb68cEgTR92jA8eXjjX1i8BSdNKY3U7jR7YGSb5ZSW5v14Tp7497nULYhTgU3FstxfDTu4rnMfD",
  "key20": "2bHwmv7CUjwqD2AZfxX6hZMgJWGoXtQ2QnVGi9g8E4ZDsuv58ELDXqTdLjau57RKddPgbuReYubrww2Fj236r18X",
  "key21": "3UTnvf1ZwhJkX2FazZngZ9X7bzE7EakQ2KPhcKCY9d3QUvDMSvWuziXMeQxPdDTgaQcrUBJ6BmFpvXdC7Zvfspfs",
  "key22": "67LrkR2a4MxEhyoc2HuLocmXeYirc7CMDaPm5KN75eRhhumJ4AT3qPj1DiVCHkuF6vudC92PwF3ovcvJdeX8gKzh",
  "key23": "uBVBqozjZQy3YAGD9EKhKV7GTuEYgVLfwV3mX5squM2TfdpNwo9KMpBPZD1FX6LY2oSTWKwhwwASJumUsDDq9x8",
  "key24": "32x6E8kYnnGmCB9iLeFdEJEjzcGZRFpf2Krd7WRgKwoCDjsBbEdv5PjntkkYsRvfrmWcS98H6xe8UEo6pFLtR4pU",
  "key25": "odMq6king82PRMxqpWS8uDWM9xSUeJjHxyZgVXqxowZ8qSsGsLfYPHiMapfjNUTB7xzBkhmQh8cy9c5hDoSvagS",
  "key26": "K4i3fqjs8LNVSHcST8NbUh3Ughy4FQNUPah7dmKoaRJFgoRcYgJPPEfCytJ7cbDrvwNY9RPCWunYvXLvqGUUnSx",
  "key27": "jjrjeH5eY7x897rTrBXLHzBaamciUeAPBHYG1PwVvHWyMiG4PZ381wZ8B7XGWpjNQTzSTKW8q3ma8kxDUhvtcGA",
  "key28": "27SSuTZf9KZw7DnysqGERH18jztsi3RALfsewJVLhL1QQpgXLHi7gg65CS4GQFfgGqZrkYUmnRpcHAeDdL39exM9",
  "key29": "4hxoD34wwtYQLeypxB3APfk6AKgZALoD9TSZjjoEGSM1BZEayDL9mgneQjV1gtTnns7tksQrKGca1VMgq311ory2",
  "key30": "4h3ZD3pF5j6xfko87c7oHHoGkgWpGZ61UBZsbBsqATxf4d8TQ818Ua5bxG4D5V1FJ9sdmSHKLb73vU1VxopikaNF",
  "key31": "5Wp6cQiixiTJVKvUAeWDdroa6jkyv3mCpgV2d8bmdyP1wb5aNF4M1MkiD4x79X2wURTwExLQqE1UX3m6tWvPAc2N",
  "key32": "3tNESZ2p6dHKoNZvJktaXp8HpGXBa5Tw5TFmoBACpePAsMqXN7MoTgEN3nur8p55EVuXH9ci28iaRY435eokSudZ",
  "key33": "3ianZAN2CQvG6crzB54nuQrhmiG9ZtR5pNzPRRJ5kqYBjGxBd3L6gC9c8jCR41zzU56s6FoGTCW3pxbfNz2CFA4r",
  "key34": "Y9AspuXRLF48kA4D67c1prDeH9cEij4X5Zec31yd42TYxx1b3wEG5rvV3eJhZWFossxugi1yFY9DjCFJUkSjhT3",
  "key35": "3JVUpYvTPTs3jeJPFRMBuohYZDK9gt2QPvsweZzQHgSSZ4kBRiHyp9iXYVzg2zi4oAhnre2C5v8kK6JWBPLxRsXq",
  "key36": "4jQ5bGBWEsoWyjD9FbauRHuSo5XZvDwm3E4RNUfjnV9so3L7oUbmFM3vjZpUN9d7XaDnpzQ3QYAX7Yich6NUSn86",
  "key37": "2Jq5aoDvAaKRyiNB9qFZ8GWX9ezsAYrKqS9haGkeC6XGfWJdhLCogzYGTYj23Xes38SdfyG1gkgDpAA1ZBCbKU7b",
  "key38": "28u52uGrGFfLRfEwDqmZFLe6oxJ1zcvMEeXjDTGasCSap82MJ1TnqHyXuxax4wJxuJmyauJwyg8zsNvCH8E66433",
  "key39": "4L3CMASpLxDAfqHzuVehKQQ6fQKaECFPDLCLE4xpPFF9M6fwszGVAZ9q8Lpb9y6YSAhsNLKfSZscWzppGpNTLRGo",
  "key40": "2f9DkskFJT2sDNpUDQiZ9VydF3sjTY48bfNRekHkcK8t8aVQjAqyy8z5tthZjEVDSYfqbyLYGdpHCJLhK7FBfYqy",
  "key41": "21DueyiWHrAKtVs3VH5dRQPUpWk5NvbEW71x6vT9t1UtQZ4CuHgMDJJJ6Y7ZQoWFSpiGRnh6k6QbyVE4imkHWtEp",
  "key42": "3WoXufSoTmgXGedZTooBCxdnFemwrTXzaCjoehFwJTtTDSpVNR2e4LRwhfFju8b6vTUa5cfxtuSQmfkMK3mmB3s1",
  "key43": "5NLFdT46EjF2A6igUvFNBSX4GPGcSHAxv6cNV9htZ6we4h9NwDdiy4m6k9UtTnXMzmmFsF1Y7Y9RYxn1iahHyUdL",
  "key44": "5DeGiYJmudfKQVDnrdqy3M9jVdrVQN3NYbtD533XXiCRc1wwhpoy8bxJTynGFXZrDQS8JSiAvTZtyoC3r35Gppfc",
  "key45": "3aHKwKWYeyFwb2Aw3zcsMKpTG2WvKpQFzBeUVHGKFfQ3TsXEhec5zvByEf8xyMsKPjs5ExnZS3aF1nmLZHuM1SuN",
  "key46": "5wZRKAzpbaSfWxL3J1bxcj1dxs2g6e4g1ByRmGeXcBUmrpiKAXwXsZaLLuHzK4YxAW3GBo2bvCJeCaz5w27bjnzH",
  "key47": "TRZTCaz8YKMKZcFvRLCUBnxGgPyN4i6ZNDJKr16Z4fmfhfXUjdm7dBMeFswz9sBPeW5x8u8mnbFNH9xnAi4m6e5",
  "key48": "62oDJ2hx8TfSknWyAxoJtV2SonUacEwjjJWkXmgANNJR27aj4CYGofg7nneqKeY1dvPfCnkfkzeVWpGGN2f9sMkd",
  "key49": "aBdw3Q7SGaMycEaMNmD1xhA1yi6ngEakRWRUdqLurN3SZNDMYVQHcCCAFKoRcKoRhXba4ZKn2WfJRh3GgELfHL1"
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
