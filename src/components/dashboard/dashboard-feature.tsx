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
    "4FrXczpc34c2HRyek63wLPynqy52UeEQ1DDhmteLdqTxfLH1cRakhDRsWpG8pVnk2LhaSBdLoBSCVvCef9WSGQbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SZeCbycYoFtbhVzjYhM4pe5gij9sczAhAZjSFo4UL3NGqGweMRVzyHiMqLuEaAhNyJ4szfzYsze5xDc47nHahET",
  "key1": "2mauCKWKUNXiBPGsRc4RFSd9y1azWCzA3ZKVTwCsPs5y9fj4vdhEXb5198gEbx7Hk2GZRxkaiTQb43h9KxpdqBDy",
  "key2": "3hKfXzW1oCQGPzAiA6xZXhrqeUinZ7H4EuvN4pUcxaWbtKmBjnFig1deUuGS9zBaNn9BCu9LBFEy57yBCrLC3ZeW",
  "key3": "3zomyQU6nAnyJt6Qgd19BacRTDMFBVRUS8Nhs7eQWzjBWqURud7q3p8f2Q4asw6RdjRvSDpbx1ES13iMqZuPtRfS",
  "key4": "3waezSezoE4EdPHmn9pTRnhfch6xYCzHyesA8p8UJ1QkRGx17bLhafMUw31dgY2vZsg98Xke9nMymcxTFWdhYk2m",
  "key5": "3Hn7W2PGGThH9PTTNdhRb9ZjAmnQVSpK8LJszBbMtzXdW4MW2s67MrpgD8XWskNPJDqDDsAyDwdrv8pyaPoiiQdd",
  "key6": "Y1UFTV8cKCkkaEWVdRWeUBySKiMJSrmMTZ2zfjvrsQbkfyuMm7gbd4RXD89EmfGqWkDrFgQWvomRNiHxxzAPzW5",
  "key7": "61H9bQhqRYgszK8Haf4NWu8TZQRx7tXtKK3yTvbnWpioYm1PSuH2gAjcrBbo3Eon8AnAA8W9W9rMu6N37zkepY3m",
  "key8": "2zoy3RzMonsYhmS2zAcomn8R6pwTqiPtU225mVueFPkCZsEUDLRu63HqHPgq9arptpgLEdDgMcQeo7moetzQEsHG",
  "key9": "3eEpBoqGVrEGrLqjBdTrqcQWYKdRRR1e1oWKx6ykdCkUs7wzqVb67b6s5qEhxEPVWpMGzi9QocfMVi26BYzXKpi6",
  "key10": "2yNmce9k2HUuetgX1UqCkrXSUKyfcnbqdAJ3NbdKCKDziRYBXMqndEGUBPHvqB1wncmkSr8h9WsauKx2WvKhrsAd",
  "key11": "4231BNG12jyWjmEpNr6MovpPzsaNaxsGteHzZdwAAf9ZS8tfzNbJ3tDBuDfkJYzbmkL7NDup2KBdZ1AZht5ZzGzf",
  "key12": "1GD5v9pCt3V4Qge52cFFAjPpQfvzEJ21VwWdjPKzcsLnA9nR8EYedkG7baeGjjVmAkcThTA8446EWHVPR9HnYqq",
  "key13": "iQzprffDRePrJamfPUnpA7v6wsjZy55HF38LXHReHXkpvuzodtztQURSQ7fRKPodX48owfMePcuofuGXHG4Vrws",
  "key14": "2j19x6DTfxcgJckDCEJadYxhGf5g7aanGWa8wsWW6Sutr55SkeeP7edU2A7h2wPE5umH5C5Px2zCBMLnmvffwb16",
  "key15": "4TaimbdrrianfQtoV8WKmVsHAyXrzCYDtG95eegwhFbhEQCoeDeNDVz1FLk9Kri4H1baQShMrvJ1br4jbzAMpFAD",
  "key16": "Js6aA7W5cRNg8FQ2faNp9HsyQrcfgAiaNKNJDSxmjvSuS429e7cZAqEiNiNU4pHZx6hKzQKWucvkiRFHvj3eAhc",
  "key17": "2xM6XLoyAm5Z2QeU4xT4rUTRn6kZPznXo2uc3ojkYL8YcausjBtjV5UmjThuUHMMdDeF3QMb2T1jsdtBi9S5idh8",
  "key18": "5hagyeZftpw7VMHVRLWsZvwS6KCqJUvcrBi76dMNFqyV52KXi2EbJYdbirR43ts72Ctybi6CsNCc2dtR5UoyXewM",
  "key19": "4B2EiFE76mAJtNGmZWZxUquBgDGxWb6J2qkY9fo7CJdEwX9vBxcftxrzm5XgPzBHLcJtkbi9HvTQwAZvy5c9coNM",
  "key20": "4swwXnEr6iZHbFsWgHHThTTkRP46wPdaa7SuAuXi2GkMAkKAHt9MrgtRJzFWHUQjYQbkwV3yTfyD7gwSfw5jgmWK",
  "key21": "5EHGPEPEvoF1sVGQ1zsg7bmpWBzRBqAk19DNDKDWdk9d8en4NFdkDCgXa7rKJ59HbhTCYvdraEf6VCUfspLfV4h6",
  "key22": "gJqV3hpKkLkSCypU588NiJABafADfNzg5aT5v4oZTkwF8yL4nmTjJA1WTadnTWdQ8XP4f2T9WKJJ8evgXkY7SRv",
  "key23": "619yVFnpsenWC1ghbsQ1xWV5QyQ1L9QgpBpWvmq9aiokHtr43czdxy8A19NU8Mv2tE77bDJNEKqCcFdxAPo5jf9c",
  "key24": "3jSfiENTBAERUo7bHifHkfNYNhNM96FdKb4oHQGiSgUZ2FFMzts4LqqRLk7QAxfif2FnKDaHCXrJ5i5E9E1YM1o2",
  "key25": "5iyGGpREp2kfnYzoMaGZKS53LWXSEdYCP1gb5MphmoH2fBBVgonaz1jUn1qTotG6VwG1tAVuTQW6cczS8hK3HBHS",
  "key26": "3HrSoSiXTtdnmXD264UnQygyDrDr4n4rurnuwPt6QV6mLfuHUH522FmsiY2VuEc9KhKW2Zjt1AJMkCiSifAABueo",
  "key27": "5t7YswjLMAEWuTeBMWeFaPsnB5A25o6G4Sfh9BTcVmnMVyKwpsuQYjAAQ6tHvcNZJFSYS5fxAwudmDPiJrDevzQX",
  "key28": "2JPna8urfuJbFq85Yb4KQTkD9y9UDGiKMN57TLXcBdCwE45GjznNErHuWU731hVkTd9XEckhwQ89zL2c9chBqwUF",
  "key29": "5ZPSmLoqRjJYY1KCuo3DEq4ywdtUAz7uGzVAX8f7KQ6dm3MpKhfVZjGfAtWgYpqfNjP7tQRLamGutbdBCWG4Kpdr",
  "key30": "2ppNZziLZKLoZvD1Trj4MaDRAqqNBkPPxAcGT1kUY2C1EZTosLmZWqX3rdhvYyAHW4wRZwWP9LQT7XzaJiEZuRC9",
  "key31": "5U5pTrxFirzxVdJs2GgCVb4nQbjhLQ559m9a9HniQJrBsZGEWPASbPucKviQ86VGmJP2Wot9oNENyrExiYDFDcAg",
  "key32": "NhVm8Mr3ByyZ2Z7zp31A4AoTMwjqRgJNpuPsh3e5UuLYgpdcBS1SwYe4DCQVN9burQZpeUxFpDVkk9JLxMQeGbT",
  "key33": "4zbv2qAnyKHj86eDJypComh3t1fqqkCH2wTVHsQ9MeyXWjPefos1jkPVXyVi3Xa5vWNAMF6WGSqkpb1H552CZqRt",
  "key34": "5uwJ34EXDMKFfz58oFvDK71FgGfj3jsgbYsVEGmpYTctjka5RXatv7gmsEu7pFuah1wBbyEPuJFLYV7fjYbhDJny",
  "key35": "K3rm9Skit7TsukBAEpW9ctTHvXuDx36vNyeAiLb7HgpqqQ5h1CJ4t2DnFHjaypgFS4FFEo2eyEWU7eg8jqTBrGR",
  "key36": "2BU1HZUNLHDTxxRVRqRa8TYDVXrhEYRdGtBLusH6YMGxLbAzQtbEUutPkz2jMtfFd5qXmkewyN6vU8eDbKAXNg3u",
  "key37": "3RS72fT8mN3R8jqC4XNodUoyBz5Uc7PvB6Kp85y4p49PxLe47stfrkEK1AEXujPfWpQ6obrfwkirzUJkGbWT3Ybc",
  "key38": "2SuZMKbqMCkiS2vQBzzPUsEvMoFYjCwgXink5L49nikTWuca6mgHc269kW5MDYjq22tjRyEapgGMA42MzEWSKchQ",
  "key39": "2NwvhPbttLRN9atNdwdnhyQp5XRJo91jdDXuoCFXbr4usY1p313KLCEk9xpWt6yEpqtBxfAhHut6hiFS9BjExFBx",
  "key40": "4aTbcTWDtYhuSp5aQo79y6a786SCiBPGPXLJE4FnTyQe8MubU28wq7FnQ1rX1BGskym8LfgKWEaVKr1zg6LS5UAy",
  "key41": "5G2eZtbbUvR62PeqMfTt2EW33sCUcPzaprrex4ZVXteWWPhaAraNFyRessgQQy7e143KrrdVLTXSFo1yU1SZd4Jc",
  "key42": "25vXz4mLF1NQMHA6fRkfizPK8ZwkCFMi2KW9MfEhj261546VWhmsPGrdzvF4JXeSuq83E1oXNQp3jdLeqbxyb2G7",
  "key43": "4Y97ouabgTrVsNn3fqHyKkCSTBAManKsZPeXhJwtJu9GTyNhW5sS385hYfBm2rJ6bc7SNhiUkCdgNJYMGYDTm65q",
  "key44": "5p9aGEZ9bv483ifeGDYtvxoePccVLBADRyAtf6rYty27aDKGjAgL9NjGBu3VLXKvF8pnwgtxwzkstnYAeQZt3XL7",
  "key45": "4huHNBGZgr7z9uMmSbEApWanunQzUqoRwYNDxha3ZrtdgrZRNpgHgUFFATCg5QDFZyfEkF5jEeqy3NtVzPE9R8Hh"
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
