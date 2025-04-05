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
    "5U9RYzv89uE3Q7oXpoqSWeLgyAAKuKN3UD1wFB3sSrPirJM2K346wBNo3FXqouVfdYoLAfn9Vzf1DyKa4WU66ML8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGnTJ9ur8toQ8NwLqmn7zpS1RDe5YZDc8mrHT9e1LiPQX9LRdrvj7Cok31kpkYhKQrAqct93mkpE8MNBQFhTjFx",
  "key1": "xFsc9Zht53Lacm7Dfq1iYwft5XBQ3ENL6yVv66UQ5txY14ftUfBoy7QBsCqD5HtPD3tdvhUX3jGoPByVu5FsLu9",
  "key2": "4BkwYBhpdE9jKjNJf5YCcnWA7hXATsKGXFodLfGAs5D9vrgKG91sTpnbpzghsJ9sDm1YQeZvXmBzynJRcGxqV8Kg",
  "key3": "2QHziSL3XKqwrMV7ynZzzbcp7mseckzxxNrwWXEUrcWGHNBUBzFf9QZ2rra1PDV34xmwr6XqpxNCENMWz7DcqQMN",
  "key4": "2ukarcmYNXaAF2NUKwpcgLVLvKwah5GGmDeb1yKnVwTNNvDEch5aSEsXAwLUQwp9E6GC6qbx1bUPg3W1piAMLPte",
  "key5": "56ttW4uihKvmwwFouQGCBunJxPCoMn3cuWc6QxuXBghvpghtgcotjjaNGCKHeHDbwYhrmz4PpfARzWszTAoUodaa",
  "key6": "359vVhwJ6DhyQSge1FiRYjkwrd2tZZTu8BaHhbD4NsGbZEK3X6TXUtjWhmbtjNu9Qk1j5hfJ6wKkwc4irJKV5q4D",
  "key7": "3vxG8hKavUkUC2CtEF4DhsF1vScemEa26KUyrm6yvKkp5yikLkVnQwWSzZcdCc28FuL7eUgvcVDLYvqGUTsoPt3e",
  "key8": "26WbJLTkHgjeqsjQ97LN6p6nRvZ8rf2nKGBKQpc2yuXKjDDqnnM9FyAnj6njnFk2952Xbe5rdN3BiAiEruMAPP8t",
  "key9": "4CmSuXqaAr3cMjcT2GKZhnCBqFRg1cpeCzE9vny9VBgXQmJX3mmKeJwohUdpYNzBZKiUXMu4kzXqV5Rw9vr9HVrh",
  "key10": "UpwJMMXVPBE94QZZfc5jiCdLnmLmBGkbSiMpPjsGxbq1KzxFvBhtQhBB641Vx3nbXk82ZeUJpFrtvLoYuonTCJy",
  "key11": "m81nGzTX3Dk82VzbmSaS8PqQYEMrDZyLrykVaCZ7g8zP7Hp8F4pimfETERFjpe4jr1EJJZjniEBLTr8LekTAMXW",
  "key12": "6Zqy7SHugUshyNQGKdqu53E5EEcmyV7iy2uHRd4wcxknHdZxNG1GzpNhFDLp9F1GkaExS6jTtwTSHWoBkTSscYa",
  "key13": "38aAr9sLwNaGhAg6mozismFLkkhQ7FGprprDZrpiwmyehMtbmtttyCXPjm5cYzhx75cctWvYRehHe1KX56uV3Kyy",
  "key14": "4U7SDaGKqLhKPM5oFrTZ3mgQfpogGY7Uas5rParexAJy8CtZdFfHyLoUJj1aKhw2Ky91wrNtknCCmNxhDfNHiojH",
  "key15": "3gUWHBPVqCDrad337SeW7ximuDRabDKUhv2vzGGPPSfY4RYNw3ofXzjFyzHrMnatmwQPEkJhpLVGPJ24ZaRKGP24",
  "key16": "3ZsNAfAFSiEMhLdVitKwCp2aW6ZX3p1edFaiXoHER4WZzbSDBvyNyJHaGYV6twEiDRWsaY1Sy7roBtdtHHiiE9si",
  "key17": "4gMeseTPdPnZDc6Xzka6txqqq4yeEG7UkThLhiFM7d8h6SY55Xez2D2xGABtkTfesghD4ygzHrYytz3UjCMDtUjr",
  "key18": "4oUSzR4JVa5a95GJM42XfabEGw5zu6L6J4shC1nEnkS4iBWan3wvofWiACv893L6CgzBgAiVaB3DrQrLhj3RRGDz",
  "key19": "52Mpp5NYqxXbp5TuBWu5ATYezGKPcREL9dF7kSxN7TW75Rn9Gop4AjoupdMByR29dQ9ZFLgvigXu2ziKS8Q8aKZC",
  "key20": "vNAfN42cvwio1Btti57jPieeiEiRoNVY2xiPuYbcTYXp2i7T5jwE5EAyV9khoXqLrWgmbz7N76Vn6N6DxCcVtMh",
  "key21": "5UckViw9STdoEf99GBr12aBxhbFU7hqPKAu8z8dxahcSKRPBq4HdrAjdX8fQsr8uRoEGZKAwkjq4KNYr1jkWhYeA",
  "key22": "2Xb63vfuYBagig9V8z41VLUgY3oTJjD4X1K3WhV93xBLSvwHMMSdZS8WvexGzHGr4T3W4QPAvFP8hYHQuP2YuiVe",
  "key23": "33HtoqrBw3y2cbdfmV4MyYQ2bDtZQykNH4xYJFRJUUmQ7wbGTvbvGmcRv6MSr2gsyyfDxRdxNdkQPVdaAbiJ7v7p",
  "key24": "AcfUvFfthf6ZKJXUYZAAaVWx3YdMAy9oDRqFLzKSdbsUPucPsogmdB7PanA1yLKKbHkR9RXi4SZLGghQw6SuA59",
  "key25": "539N6ozrTZCE2EED8TDXm1vC375wG9BJHff9xDdjuiGhJAA66cGw2kXQLEzPUnf35v2naytD2kvjkXX8aDURjPkn",
  "key26": "EPMc2a2CUEnaLRyj8SojyGTz4pT72Q5fA3WVojune7AEMfH3vL4HH5nY8RDtS7b4VHneXEVkL16JYz4mPRipDKF",
  "key27": "4EpkkzEksp4ZfMWfAkywkKb5qHjLxqByY5AWB7TkFcoJBA7MV1khLhhJLHYjz6DpVDafmDD6nKSSDheJ9a1pwU6M",
  "key28": "bRMg7yLP1Q6BTBdS1gDQKcXvGQpPydQmp2z9VGNa8iMevLZpJZNYNPk9skYcc7nD1ssuHii7QumJm6MtCQWi3Rb",
  "key29": "2TzDUesh5WejAKgXZDXZVU87f8EXndjP21ZGCQyE185R2cEYjyxKtf6DHAce4enDabwEeuzidbkSNUdrX6bLTaaG",
  "key30": "2HQ6TwGqFaAbLKaPppcDWQdihdKpBhDgitUWj1yyBHyU7X2JfnCAFderukhsCHeiExy4ysZw5pu1WqVSyF5FazhQ",
  "key31": "5xMLsHqx7drC8MWHNaqHKeQtY9Led3JBGyniwxxy95pmJjM6aKj7cws1hV7zciR8jSg6YKXiktmPRpWDpntaBXUM",
  "key32": "44pUe1oDkSjSBp6ukqvrPa27JaqKtg2Hg3dFaurjT8KK31CdzoYQLPLsLfBRcNHB1yxcJcduSPyS8UB6sahbZPXA",
  "key33": "3QSUE7zLmepQRdcbeusAVJsB23zdYeETSFUvouFNMfBwaZR8RgptAZrnFDoDQKhzvCSZckw2tpwg6vJuirDiVH3j",
  "key34": "47QwzXag2exJVoD2miQJfRR5kXfaKifEvqbtemoDJJadguYvHsrzZmMujSfX76eEam9PesToq9nvHwRDigNWUcr1",
  "key35": "hAQ1nGw5cFiadyD8XU3eTkYRo5h8USJLWeDZuK3ABiMgMv271ydmPvkqFTgCr3FFzoa7GcgTJzhqP3NP7EALn5K",
  "key36": "5JB8mLE1wHgsSTcnKNsLyFKxSy14Z9QRvxyj73PkGVHo6JQ64SdEZrQASiHJbaLbRckg3s47N5rodd4c5HqQw4Ez",
  "key37": "54kkmpoV5bTm3zVKs3AHAMUgik6xjkypYcw1Ls5fxrwYFSffELGQDD2NwcmGUxXN8MggRa1JMxtVfvbX3cGBtjkf",
  "key38": "3FgGT2pfxhCTYnUGGuZu6HFcP7FFA3meTYDjgy6mzaEyScRjXp2bejwoUzMRm4wLPCNDkdB3QQh3v6CU7VnFcYse",
  "key39": "JYkwCGsaEoLuRsdP54YYeRzi8S32yXLhM8kgdHQGAsqwN94jVm1F3rcth6rNNX6Sps49JRFwi4bEbrt3NMDdMb5",
  "key40": "myiCaTeMZubHUyuCS3rQz2k3i9445thvSnUULg2RYFvVL1ZtJECH4Y5hQXE4ENJnm4eJAHKSyA6irzHB9oUSciA"
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
