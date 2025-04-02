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
    "WXaxNzghiD8cVUDrZ6QWpMkB5WdmN9B2i52ciXZDerQFJWtiCGXwBFmdJ9DSf9165psK1BxXmiZUyYSnGsVT9iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVCjDgK3frPmHBni9VKEA4ogyQPNGgSnt5qW28NF7YByPoWjjg3mzDVw4BZrFndU9mjbH6XHvtYnPkm5NPQphD3",
  "key1": "5JoHg1GTQJxT2RevqaM7WwsqxvsyEE5fHPNbcm9VgEQeeveyZmcaLA322vtu2Eze1Y2Y4XdqmaEqxcdEKLghwLkF",
  "key2": "3APh41Nf1k8DejuddXLYDz248Q1xTvYQwiMThfSwhM19QR858B8aUWs36u99HxEHHJrGLURUHUHikVGMGDndT3Jc",
  "key3": "cRb8cGhcFDQWud1gnFbuDmMCPLNEYWcuhTGTahQ71fwAjrDoFLT1gc4a4z3xDvzf4G9v2TQU8H251PW6S2YgM2Y",
  "key4": "4hu2uHBFAoLmmTHsXXbyhk9DYt1mCT4c6ygSPFYKdYvRzAeqiheAMk91hh1tLfB4zgAuYDBrLw4WajBR1nGqHG5c",
  "key5": "2x7dnXg9PiiXv1JzCqSSHHeDrXE2XyUb5NN9vtJaZsY5ByP8CACEvSR4yYH8LZ7jmpgHBHsF9BfJpPRUXsAkpV1a",
  "key6": "5U5N7eLqYbqowZrd41VKm4Evp7zeruk7EwXbDKoZxqCbXicpifaH9fSH6XmVmMhJ6C5gQ3HoUGG47HrS25DRzFhH",
  "key7": "3zAeAv36vHmM2yGFHEqLcdJZf7HKNbQ8iYdJAFJ1DyXv2TrMf1QzKXnRtoyCwZ1VVcAkHsnF6YnaM2zhU6BoB3kV",
  "key8": "U92VrQKuaWFDZq3FE8egePt8T2PKXBA2LZi47s3M5ZK6YXKQuJyVfBFwxZjWeXCzqmp3dirPKjS43D3LYj2BLFC",
  "key9": "3x98m6AqJh7mN3Ki5Ekw5eTAgvvZzcpTrdSwvQjNjfCc7QowHgFcVMZhWChraHbEkbpmCQNWZQZn3UyP1WsVt2N1",
  "key10": "2wdiFf4qPakQtu7vFH7AXRBjj6EuAEJt4BiHgg8Wvb7NRLQX9f5Vxd3RnKMf7BPqFhSGosqaxD9NJV8JpYAGvJVo",
  "key11": "2tJYYmLBy1Ua7KiJRj6bh3W8Adke6qD4rcKNKSS6um1ex8aYnYEU56D3GFtZzKzPNDaxCaCQF46ftFiqDgHqdEfg",
  "key12": "5mg1W923JaGZAhUqEe2hsfZC2Tyk4T8i1Uny5L4ZAfEjAJDDfqcbzKBbMiQQt1pYbRt9Xg1Cr2eWLHeN2HkkuYV7",
  "key13": "46YTzFsZzbtrLivACtc7aL41nUC6kJm4cZzkgpWxE9MNc5LAwwWR4HUu5X66SET1pLt77Lbg8sdpB6jRJrRRHVUL",
  "key14": "34A3BhRtY8kRAt77fhPXj91aBdnyx4mEPMVqWyErWxLCina96kAduSb7icLieW4aHJPshWzKBq4pi4haEaSoe4NB",
  "key15": "3cLRTBqwJJpERj6bQ8eayTrQd2yQ4Dgp3PwNHGBnZBKzySan8SH6fErxEs3TEn2XyUduqwQyEfT2T2ASPqtEcumd",
  "key16": "5gfjD1SKcmgBjbL48D98tb2yw6AJqzB2tMA1T1LWStULD9oBDcw8nkCzQcfHUgXEtAvie7SGoTVcE72zJEvSHm8E",
  "key17": "4eJzGdBW5iRL5viNCq2X8xssGkUURakSVYdwSdm4qX4DTtZB9aB3EudmLXhxSKicCKWeJJwE2rVZtDke5CEpwAVJ",
  "key18": "afAUAdVQ5yt8eSV8wABiM6TU5jpQk5QcgfPN3TT3bry3pp2ULdfmZWL6AQi4SePxc6Q6DeygvRxzXCkug99e8bv",
  "key19": "2x7V328QdSj4N9BSV46NrW5hCyrdBiwN9qHoiJKqfWGCfGRwGLjTbMJ9W4JnQ1vKGD1vTW5T9A8jF5sqxsCm6P8X",
  "key20": "2CcMDrcrUu8VYqy64SkqSyszq6MH7s2xRj8TnXFpAohZzdTLQTVsyDgSovgaH3CPpQYu9reBt89wKmo19ovWhKSE",
  "key21": "2Hotk9ougCzr9rpB1UnSUVGQKe1o2E4Xf7ofUbkLqw2Wi7cmXanNPL9yBxGKTE9c5VWg3gsNjGwg55W54wjf4bgg",
  "key22": "2b9HtMC1QGNmJjvkBk5K1dRn6RDk2MvWGPBsGCHe2VKWLvGEFmS14jam2ohuaMesYKGhjJhc6TFYG6piR4e75JoF",
  "key23": "5F7hNpgvCRiKpz2b6Mi2ZVLMAQd4Jyourg8ZPCwy1qCidLcCbdkHtwSJUWmBF335jofxpNUVJbDWRpig7Dyvsw6R",
  "key24": "2dy74AT5fiFMZyXoxL3m6ztFDcwVcwskH75GTCjd5AADQtsn5GLuyBKcmjYQPQe2QxmSuXUj2dDTtfsshqfCnJtH",
  "key25": "4eZWECT2HufGR5UTWEyUxoRfL8n7GDr8KocAe6BhyRgirAo83BxEpSZ9NgHMmXbGGjjshYNobCiSTJxhTYp99wug",
  "key26": "5LW8LTdLVwtcEkihQw9crxXkKf2tzF6aJdakGA32XFstPJ3dSQTXVmP32VF9qFSHiKgLX9YGPR6Xr9GQ5tRoP1C",
  "key27": "HqXXqs7PHB1KEKHfN1FYSkcHops5dbBn9xbK12Ht1tdPFY3AetBAJPNj2FtFLSG8fEqGCRwS165aqWiSGcujDG9",
  "key28": "3DCVkS3cFPbiTNSaSAvfv8bmwrkvEdt4yRGDKrVmvw5H4NG1J7jheAEmxLPk2DBNcEDSnsELc9XQqiYnaYxw1hKn",
  "key29": "5yB2fV6utdFS2v7uJY8bXcJT4N3bpXikaQ3UsduHTY3yFFAEfxbn9P2aCEyT4FCzVhthAfg9bHonXyM3pSRj8cb5",
  "key30": "2oSm6dnLQQnD1NfNseukXMEsuGX5rUr5retYAqBKqwducvwDhfecbKYbHygkUpcjTTPpTKMaoyNHaCNgMWNnNTLQ",
  "key31": "2hniDRY3mB9ikoxBtQKDJpvBNssj3HLUiLoySbN5MNkrd4zRmiiELDTSvj7Rzv5bRRzgXkTnBntZom5yeDJD5PCx",
  "key32": "5r66P44ZvnkCXbb644fxj7BBbsYQenCqAp6p3iNEqXfp8HdHn4AopX6n9M9TTQrySDuuh7Eg5b8QsGBBjG4E2mGv",
  "key33": "2tbvmqKngwuCPu5mpWEDpPyCGQwAwZPiJzZYUh6Pvj8NPXL3ktTiRkrLMqatG1Lw8NYredvgf5HbjzDMWhfUVuvC",
  "key34": "2on3jG7HMd1nTkFueTYXZ29YDUdQtJv8a4ZzJMtkx2eTgvNYzYkJE4Kz9NgvYXEU9BiysEf56ZJQUW4xo96HRs9w",
  "key35": "3QVKB4qdS8ovp4ernNPzG4x86SgPE3eAWWafVUjYvtkNiuqjbnVjQQDssZkDLiQpJse2ZVs1UBLxrGUXJErnEEoD",
  "key36": "3NMZ7b8xzHthpuLxmy1JYBa8Hnc5sK1TxEA8bEKzD7u6wFH7yoDNy7rtDn1sjfqLhCoSFSVoM2jKqdqH9BKwmpvV",
  "key37": "5LfdtCtQySu47DXbF9vdAzMZmUrGGPBZBH2WJAR7jFwL6rCnGCrNNUY455enH3Rv5Hfnrh2iEjCKkofWqDvhZ3Ui",
  "key38": "5Y3JXapVJSmySvvapACPZvvLfQLeMkbcyHe1on61kEouDX88XhB1R4fAwXT1uMXCXoY1PTqVKdZy1yf5Awn9JSX8",
  "key39": "DdKktd77Tg6L3UroCGULEQSE62oM6MXPjx7AdFwjwevndJs3o6tytVbmLEECiLvT7V1f6zk6MXcqXLH7U8M8XNC",
  "key40": "5mLNoud3ZuusC7ddbjgzbHGFhN9MSN2vx74w16ZGDjtgLuvNoFvUSCWHDruBKpTwkLVE6ZeSR6g8xjMUa38rMCsw",
  "key41": "4pGK4nsb3zv9gTL7udz7t1geJaBPwUdNWBhqRFJwqD6P5VUDc8BPyTSfbSy8j98uBKe26SARRv4YprvQZ7dNi6Ey",
  "key42": "5cHNmknezD3aAhUqbdb7DWqyiJHjXGC16UFPUjJzzCDsXBPPwnDFY6zYK2kNKgjDGiZaGBzB7niFDWwCv2eGuysE",
  "key43": "3iSe4xqFisBNf4afM4iV2i4UhGwtV1czMAB3HNugoCk5mHJMWh7bzsagQWmNHuSVwNDNYdgmZ5QqTw2yQe2RCAo7",
  "key44": "3JXNJm5ZFsDE3m2TysjYyc6Q7gxa2zbvoNjwuGhTPqGQ6ZtGBAtTZjqP8ZZazDwcuvCnUdQSpfSaKU6W2o1apFUi",
  "key45": "2SUEMyhjqFVmmTkVJRaUUAkMgFshuyHJmskSdggwfrfNEFKSkxsuFUvQXGarwU3bMv1Gp63g1Fzd84YabAzhV9nw",
  "key46": "Qb6acCRHbhSTfFKjnvswTLn2VxhGWURZscj6Hck8bFU8dU9CEs3oPyawXdmegFoAbNqs8Xye1QqWAL2ftxGU96t",
  "key47": "3V9G5m3irLbvCPAbduCUFxk9Hmf76mpPpugHMywMfrhZLfo36BUs2yRfP9RD1neTTdG713zXjLCYzaJS6RV4mFbd",
  "key48": "4grNgLquXfv8uVFFTUC1ZTY3rDXfD3fh4kvNrbpSrjRPskg3Ak2WR8N6tvAyZvCRHdGPNMnkpY4BnwZBioGuiebh",
  "key49": "iDUAV4Rh4VM1gR5jMVuepoK7xTkcWzh7RQbnCVBj3HkDPhSW7YNyK94VD7oW1LPpMh6Nn9HMZJWMguKMqCXVom5"
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
