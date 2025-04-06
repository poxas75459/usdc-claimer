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
    "3WKkhxWhx4ZWAEcNtV81hNEBKDFMCsQHC9oXGWeuQdbnzCiBxP6YusaAMK7xVeAFhENSgaHNKn2c3Qp6KTniK2Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnpBGbTcCusWuL6UN2rLuqv32RXdBV3cKLRo2D27QRcmijv8PMQppXCPmvg18NDwSx29h6mFRUnggJYsA55uoy6",
  "key1": "5LMhoToQrxtc9e7Ekt1MFRwthzPqsVR854Jp9FkSk8RCoyNNPJGiZCWmSqwM8d94shdhAXqaAQtR5a74ChT8D8Ua",
  "key2": "4rDuuDQx7f3qzVYYz6gf58cGo8SrvVS319UKe1Bo1FzAxmzf29G74D7xSahgfGwUdKJo7DGDMoRyFjZMHsz5PUbM",
  "key3": "5mdYjhPgGNvQQnaz8Gh4Sz9kQZReFdaWvc4o5mkqNgpnBWEd3Hynt38Fn6AZHSCh9FSzsf4Nq42qa6DiEQ4TQY5P",
  "key4": "4Vt5scnxPBhiVYStV4y2XzUX4T7xUL8NhG6eix8TwePJWUtYbgcUMz746zaSQeV9hUHVkimgnTW5R21ThH6npkNc",
  "key5": "2j2qki7rs64tGVkQSXknPjBPTEsrRyWCUZCYrthHhqaF2caaiSCduxRdsNH5N9eeENuLDCGASmG9e6mjJuDcKUtm",
  "key6": "21YN4Sd4JzR8SmG4My6FtA2pDjNuj91bVvEuofozg9zUXzkjiaPbvdyur7fMehiuydkxzsZ6BP1jv99f3njwqPoB",
  "key7": "5J1mjf27vKV3B8X6nwawBvQuuaPWp3TfKoWnDp898GvJ4u3ond541AEofucwkjPumyFAL8H7FL6bZNNsUqXNr3ZL",
  "key8": "3UtnG72hvvrEjvAQu5jjf3nrixSX1Br62jVA4uYVaj1L9546iEp9adAA1n1aBCMm9wkj4ggaw8Kixqe4eFw53MUB",
  "key9": "37V2zxj5HTLxNodKZycSzZ9aiXR4ntWGqtairJwtEQfZkeHM82U75reMqP6tYXVFvUksGf91P27z3DNc7irmhm5L",
  "key10": "KeM96HgFazNArrNrs7C6ewJJ1697oYAhJ4hfh6Pz4oZfTJo5QxrQeaxJ1Ti6icwNAt9VQvRLjLi5igyh6Wu3W48",
  "key11": "3WzBh3mgAAtbK2VJt64ALBazuk7Px3KC5AGigcFSTqDyvuVM5kgoam24Rykrwq6c43LFwEC3KoaJyTL3wNK26SB3",
  "key12": "4DAmoAesyurUkDBKLdjHV6Mz8xbyXp7ANSLbXXNWPf1Y3q9dh6rf75QdAC9immoK9mPnp1cdJNMMDxby1kGWexiJ",
  "key13": "27qCP7CJJd6gtSqnLGhPGpUkJ4JMmYkK8hPDNZzQuvrjPtGhCPermCtCVpFXh4Ex3yKpGcrVmqMqSFd1HP9aRQY4",
  "key14": "3h74LzsYbTvhCXM3wfewN6RWkWY8u1fZxfAbxKpgxso3KVs81B8QzNzneUqBBEZLFaNk2FXKZ9NYGKEBYxz8u2ci",
  "key15": "5csstAQnVSKXtFC72SNU9VcnMX5KBFrDhwUyo7nQwoub3PNHH5N4qxxV3xu3UBhKahrBsdhoZFzsDXNFaV5wN9ny",
  "key16": "3ecNrb2APQTHYy5SNLh7JzsFDexXDLbadYyt8zHqum8zYNa69ABDNv3TKqXFRgNFadTcgP21saDey3bTn6o76e4m",
  "key17": "5KoqgUdxGKr9jaNaoKTBtgrZKXZfyDhGyZbhXboP7yarvJGSV2HJE7zekizUpw3b3aLH8eTW9mN4W8zhzfZbHosW",
  "key18": "4QgCb4eryRmLizqiqRTYSpmd3gc8GeuhYjJ78fxkYmuApNghAPwMGnGx18XzwAiup6JMAh7Usn8Jpbc9LKTYs6Wv",
  "key19": "3ussJT9VLG8bAroa5yoxJyF7TPrW4nPoPxWPYUM6rzDHdgzGRK21toi26VqtFR9UKVwewJVNPYVsFoRTAS38giQp",
  "key20": "dpSvAohqQHGcTDGa9wkgUrivjMgidKbdnGcjMy3rYdpTbRhbQxBdvN9uPcQf76KVv8ZWHopqRxa5Xr62tXszvpZ",
  "key21": "4hQYJhozYo1q56yc4UxRk5nQUpi7tYLBUCaCBjfK525n3s3ZKouEBL6NQzFzJnrEsxc1p5K6BXx7YE2oWY8gy64P",
  "key22": "4RDJLMkxKaDXPKE42t4qWWJAi4xoo1z8RozQX6dacEyqdhUwQp6gnt6oBaC7hYUJPg97bfwbNbvdXCZNvEUjb7Yy",
  "key23": "55QqESCHJQo4SHoPCPtkEtFVg3yGtuTDFUb14EPzR256ks4HzrTHUdkbraCtQgH5SZZALwQeTgGaeS4W84pW4fzs",
  "key24": "5apaWGyhWu28assFpK6YbMTxTK8v8wE6p6kVRewa1tz2g28TJqbo6ysfc6i5APtyZWvdGFvd4gf9CKcRFC4hrR8E",
  "key25": "4sSi4PPERxSATEq3bGwYBRmvFMpj534UVXkq9bVtpQEpgr7p5mWaYqYkC6VdeneGaBB9q8AJpCRZuxrtS5idf8d7",
  "key26": "5B1c1LsgACAburi8EucGf7aM86jktG9i5MfyAq8oAhuCHCrFZPixNN3nU6byxVgzCBptt1HDHEM26ZGn3kd5Loj6",
  "key27": "2aGXD6s156ZBVot83WYLDDRY48ceXyYTDSKhNUyKJpGKkpPz5DtJmoFVFWLEYxJ36RDaSCtDTgrjmE8zEWdwuDZF",
  "key28": "3ZZWmCp59Ax87QENtJiWFinYJMe1Uvxrd9Q2UfjyQzanXQpHcZXFRP3cipCWqGuJKGGNxm9JmVLXZNYj4EMLrVm5",
  "key29": "3mSp7SR47jV49Wv74nAyaw2wmM6Lbch4Lyk3o12Z9uWGMLYTsuWB4GqE2FgqWWiYnQ5nRY8xKuysy4ofDDZNKAEi",
  "key30": "KyTa3cza83eVsbtnpT5kWbFGQdvq9oDmPJt5htcscThByVK9Qgg6Q7y13qkE1utZnWW3KZu6g83wp2M4DFkWKB5",
  "key31": "5JYVKEradoVJGRtmz6w9PUFW1g5i6rPfNU26kSZpudi3hZ4M67aCAUGQgmAcTo7sqfdEqgFo6Zpf5mjtwtDBJYue",
  "key32": "5Jy7125BFhUuxh5FY2WjCbqn6jHYPmthon4nki4rXTVV1rYP48bSXrZkgEsqL7MqYfSWufpe81AnHTJ58yeKXKhA",
  "key33": "3C7GPYMjHZXzb6YGePb5RVHJ5VKhae4ep65QopkaybzdqwbsP8PCZY2BYUqPerb9BgXr2dcqS9SEGvfe8gSgthEB",
  "key34": "2qRu2NceSkMztwLYMHKMVawGGhghQeM8JtQ1pTdhTphwUDt2jSXBmSLoYf7W2VWnRyh3JrBriuovzuLe87TZqifF",
  "key35": "4UwXXWJAqS88ZNAmxAuAhwRuCwx1qNDanLiRxUEs8ZANj9jCrmFRZ34ymf2K4zdoGZzziR6un1We42bWGvcBemsD",
  "key36": "2R8yiqFbfApASPUtLs8KpqwbK7EA51T48CGo3fQntEX5KzYBk7VKMv7cKE7BEUbnxBkr36bvGaWmhgrsnwuTdn7S",
  "key37": "4Zq1H9hn4QsyJY3iEzmMbJFyouz2Hj4DyaWwCPBYuoqmemMNyCauzUZCuhh5tZKR2RaMaq8vM2uF2yRKxFFmgooF",
  "key38": "5LDGK8ZngFwCiUqGo9VZWSFRg3tnqpxT5LNV8HHygReyKvuZJwGxsh7JCbKVBR9pdN6VkQxKrkKcJbD5CdqdPXr6",
  "key39": "5QCXFDMZRhy454zvc9HF2DWmrPhuHYNbwc8pQPZsy255CtMVyxN2NJLbn6e5YHXm41xKpCzsUbYXrDpbmHVHWrwN",
  "key40": "4bP4DnkFCcUBd3TqrbqPwQ2nDoWDZiasW4mpWvoFa9r3HP9mTYXjnwCfEcwHqrKAMu6KHN3WxxdGgjitFsAENUa",
  "key41": "3tc3LZrPgEy5ppP8VajJub4RmcQ2eX42ciKFDNiQ7gJq7xXwTgvWiQZP52uKpSt8ERvWZmTVdHHj9mb9xsZbURh8",
  "key42": "Lf3zeaMLHC9UhxYKMENsMj8WUAUuDe6Qztd1inhShWTanyFrFfpToHgxHHagZ6WtuhD72sRmi9WGi1imEAP7CbP",
  "key43": "5mcmqAGd9XufPoGTn67mEHUe7i99RNwwohyL1b5WDyDXgEw1zuy6fkASsYEaJCW3stuFx2bCSTNkJB4dyA4NUML5"
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
