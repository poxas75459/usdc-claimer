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
    "MQDVHd5EPHtHw4v9sVXCuhpo4URhwMteQYAUCT8htf4wYgYpyAUzuLYiaiAuxSCg2sGPHMCPAKzRKTa9QcwV9Yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7zJmgdBVigzRhWLdDwAAdY9XDL6DC6yTVg7iQ67QRbk19CUCbmCJYY4F52C7eXkEzL7XUBS2ZqvmwUazqg5drZ",
  "key1": "5UcCV2SfXkjMrdJLY5GPiuzkg5BJx4jef2yXm8oAJm7MWJpWF7ypLif6MsQPxviKxcWJbAjtUu6tD53fem2KRYv7",
  "key2": "3a3uUKCZ8UFYWmgTg8rhTiUFF6cwsV1ZVnm3R1FcfrFCynd7eoXYxGgm9a9jgnLySfWg6gEuEpRwy5kdJo1SN68u",
  "key3": "5VMS5WrDbMd8jXiUAs98Nai5QVa6zZyX11KaziHiHzRdMukrJoucWKB2wcFxqMgxoErVkZMEBVJZoYchztuSarTU",
  "key4": "2iQCAzMtGvyJMfawBQDdHy3w3FEsQuSjTQzoRVnP55S9NLD8y7YXuqhKozNex7busRoCp2DcRAJNdo73aejLFm9B",
  "key5": "1Ej9umvbNzxGDp3EZAsXM8JYiwxUJoQE4nhtLtZDKZXMjuMu1DAHSqQXwonaBdpvYNS9Lo5LGTP8TkLnFCV5w14",
  "key6": "22kCkJXokKfdeDzNMkDei8inHb1yzj4iGMpqbkUefUP1VMPWNhGaghor811MJfLDKvRDUjDw7jG9e8R4H66zTjsF",
  "key7": "3rk8f5czZb8N3t5SbcT8dQB4Fn4vPaX2TjfFBfHQanRUjqBuvW6jTkWXKz36CYpBPDHu72oxhuEd8xZv9S1f5gP3",
  "key8": "3myT1xdFZd6nFsiEVztWFA6wp1fZxEuTpbSP1dJy7xy5tpuEU7m9NrUGreRPpyNrY1dHALHo3wkxXFLctMi4GUUa",
  "key9": "5hnxpfj3VfTFroopjppmV4EsqPb6e6eghjfnwJWaeLcEQiWj24QGvSbfiLwbcbv8jzFqqhWUbXMejyoH8ThGJpmn",
  "key10": "4xB7ruutM1CmYLNWnVs15wgGUUvyVdFGs571sA57TU5btvRCQKeb9Vsv5Cx9kJGnKhup6o2hn2Tp2CkHn3gwKLog",
  "key11": "9TDuSAWjZ2DxuzLURTNJ8RjWgNcHUAf7BLQotynchWEWww2sDdrLRtN88LbSkhDpzgPutK7bSgZoBBtsrqzdcud",
  "key12": "9MCrgGAKa2BjM7kyo3s7HJokELq2cBHtX8iyUBe2kWua3p3wnS6iEELTHU4nCcUjvFKWynhXxpHftGo3rh6fZ52",
  "key13": "LVrMQpGvnZX4vPBSi31MYbHuLKN1khf9f3NiNTWv6GmmbxcdcxUa3jG7j7srXazhJtwob9c1dTGRdTBiubxrqNv",
  "key14": "5eZsRLrFwKM4TqGCmGUSyNLKkg7c1qapHVD1ZGDrDpqJunQ41H8mhyGY9MWPt7FsLw1RcwGXH94xncPzeSngQChd",
  "key15": "28inMcaGAJ83iHHarEuwyTJziy1SqamvCnmXoPLRnsmJbYpoqEPAsU4fG8H6yJxYveWuiPdq6fK9Zg68TuXP3bHN",
  "key16": "5TCxtdgaJPqqxtFeap165asfL2eaYnbRtNMvn8RQy8BKwovnsVoc2M5FSWYyREGEYz3t9nPnjBZ5ZZHH95b5bAov",
  "key17": "5x6jJvFARUZZ1dxF21k8ZmY8s37jZLyWJCeUZAtAr7SE7oe487GLXxBwdjRXPcu1xkVdbd3pGz3uiiubfwP7HHag",
  "key18": "5d8JSDUBb4kbzCMbxciGJVKDUVrhgzx5TY7fstPsmRQoWsBN1i4MVTXjAShV73Puq8Jgi3zmB6v7R8k96bjb8Zj1",
  "key19": "5KvAcTQJNUMx15GRLTj9qkyuyuWruKzcmNFZJ48jXRD8U6CNuTCRSGhy1bRzg2sho3fDbWzYDx59rxkcNgoBKYjH",
  "key20": "4LCPX8wbEvtWxBkW9CQdpzuQ6PUXQfXqBt4gPEhAZU2eLHJAkYDUg9zGrSQNXKp6shDKix97x6yTcXjG3fecTEww",
  "key21": "2WvSzdCKMp7EA98EnWBPRDgQnc5KZ5yhZdzXGhxMqRge4on8SoCn95hF7q4BJnvnR8NjnYUhGfq7TGbwkZBMpF3t",
  "key22": "2A1hVAW5SUawqN5PLuruWHAWQYEYymjHMPoKsPNgngnWAkxejHqq4CFNQHpMkCCm6Bet32N1FSBrTqSw8JDpiSnt",
  "key23": "5iWhZyr6iteizx787Eaa5Z4gSifr3S4YnYGW7S2hMLuRqsCTsGGTC2BW5P8tzFmEnabhXjQVpZPhPJLaXZNrdz3Q",
  "key24": "2mnMD1YU6BrkCj5wRa9zdbepisTxgqAiwQVGroVXk8NoZWhuuBWi9LKnTQJcPBh8d8q8gr9EQDdfL5oeGixQtNig",
  "key25": "kbvUVSTpzMmP8q5XM1nhZq2USRAGzjgyWDyopcpJpdzoqB2kHn8p7fZpY2MCGhxKLQdVoXoBKeunkFFnmMxjqzL",
  "key26": "3CyAn8uo9iFLZxPVBvNgtqKsyBYRWQxV4cjSQsU52MBnE9jw3hq1oEKFRb4H5iUaf1GG5FzHXJQ3GBs2WQiEiUzb",
  "key27": "3YN61cvfNLrM8D58U89vo3RYcR75uq9DBEeYhUXYWSVRd3czdmkTZG32mmmNWd6FbWwbPvTa7PX8R7QbAdVdVyFW",
  "key28": "3VfBfBaTY7Df6ZorK7X8iPDmre5RG4Sq4sW32yTRFLsHsZa6kkaxz7Xp61ctnQ3UQoQcg9UTdy7yx85f4iTvwnhA",
  "key29": "2sd69jGVxR7zipyHjdA1HgA3EmoNgcrDLPL4UT8ELQZzmCHTVPoPUnMKrWeT9UAPnnsC4XZNCaKympTaePN8fqPX",
  "key30": "zYs6nSAiA7Ad4QUVwG7s95qwFEWzopnAeZGdvBUHaMnMKMbcJZ4xxEaQcGCTes9KVKz6Cc6Lu7Sfu17gbbRqsQj",
  "key31": "48xuBSujppL9t5zE712n334VL5usb18P5vAugBbRxVz5eXb2sRP397PTESU9eCnW95VdVh4ENTQphBm1nrrHwmMX",
  "key32": "Rg2G4SoNtt4Sp2iHRbBx31z6rSzkrku7DCkYsSdFxYck9o4r8GMBjr6qXkEgGcQhnnusHP3VpEsyTu7khDUZo5r",
  "key33": "4pRMnWB7MjPwgCKFnZ1BRzCkUV7vf9nDu4MAvmRy8vJtQZLyvUubVK62kQkFjGkn3tuhwnNvJUD3qR2J9QxBDjfZ",
  "key34": "4baUKsWLqME4FwtPM9XMj4KtVCtzLWmniQJTiMzx5g4VE1V78vnorjj8kfWMYm2gztGNubkyqm1ZRsyDgAKxXPpH",
  "key35": "4bpzK6v5dGbS89MYgzxjktquwuFp78L5spZuhQWqnjUxe4xtV9JpKGRkKbCyZ4975xdZrBHuRbT4BfYdor8dMNBa",
  "key36": "5MhxfqCjLY4MxBozBbxVZD3H97d1wFnxxZrK23K6iR1bZhuYTjqmuPf9JhCjFHDELC8JSFVaQGdaeKc7htQBd8br",
  "key37": "3BJV1Yz1QcbSMBXCrqotvAfUPZGbaaHgy1mf4xEhmfxg5BQbjDGZ5Y52SuvokiCkjG5dUsYumYWkPJPhvPzxbMgy"
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
