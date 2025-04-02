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
    "3Hx2WH1c9CP7kWhZrZsZ8UHntWibCUYVFxuUZZM1aHfLshz6fCivG8YwcaJQEcxmETBE1wAPChKK2AmAoG95nJHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KPmCKRiJLmsHZzo23uKFNqJXpmZBRf5yiwS3tJiv8JrbQCJc4teyQEBG58qNHhXjhQVGiRZUMXCEsZQEE8kraz",
  "key1": "4TEGMAwZZiZqk7e9iMzu8hN939gCpvixpDGPDncBd35QYmkhnNk8ZJKTxfeZipHpDd25BGfL81DfDiLhRWk7WatF",
  "key2": "6y8yyGUU4bEw4Km2C3Xp57zZLgcaEc7gbJmUnBLZiVCuKacgnA797SewcPzSGkfHz5BDbpRTsamCPvN5owqX7iU",
  "key3": "3PWXJPYxrSLS4ikaYHvKXjQqqg33LCoNybZfg4FpAR1AuSPg7h1qKj32eNBX7xJmknigxnwEXguCGcBuC3vZAgrj",
  "key4": "2NLZs56uLAbhmQM6WK1ro8NDV9pPRXWUVVxgp25qDPjuNdJt2zchF7ibtKNAzAhvVR1meotfyPnJrw986ojTvCE",
  "key5": "3a37VDLE4YW5BwV3CnkVnkpPFp95KKGVsQtRUSaTMAu5wCZ3E688LSXevKXnwWXoiw6JrYk4X6YTVbBWrGRjGr9F",
  "key6": "2VavWsWVPcKzJNfuMDaY3sUuLmASGfQSxnUuQ1hmNy4cav9nXhbNHkM1FtQJqzRGUmMw1NSWhQNXHSd7HCRgix6H",
  "key7": "2xsyR3sTgNJeguk2Xh7E3UKTQ1fkcVf3yh7V7CGT3n11PF1i4Y99zE7iMNUYTCqbgc5AYikphr7DacDyn6pz7W8j",
  "key8": "5LvTAzBsefBBBCFpDsKpZPxiKMhEmkQehsJAJK9s8pBke1aojn9BS5zLCtPpUcbGWoa51LGjnNGbkzXbQ6vELFYb",
  "key9": "Hb5rvL4rs8eSVavBPBSixLayaRLkvHZ5rSYSHZZYUhDqXUNZaT3788SqmB7JKas1cWiZuLvpikNeye46WQWU9UE",
  "key10": "5NpNExXeCm2BPpftKw6X8TP8hzFRQXwGbEaCKuMxqCmjqSe24PH985cQsaaHfAkXtUNWe2qsHozkCM3pU8UsU1tj",
  "key11": "4L2PiTKPBKXbPTD3Z4WC7PrycUnYDAqDaN9gV4ceSjsJY1s8mp89d3qohWJJTkagvCj1ELJj3pdbzrmyV8nenTSF",
  "key12": "3uRmN5PLZ57UAdNg6RFeHsUBvnu5nR41tzcznovP4TBfeT61HLQ8AmkPn9wxj5mh16mHAhNqG2XjEGWJ7ieQUugV",
  "key13": "3KV7GwufvbPkkvxu3YDKsg7BADL6HFzzzkcESfmu58vQaA9RJxSBfV9SXTfVG716C7AdQKBuM985GXM8Ep8urx5G",
  "key14": "4qiN4x6vVpJHkF2kAbuRnuuKVcfwMtCthA9HNSer4UcBSFWUrhqmF1CMPTntguZf3NiTM4vQhMoKdSUi7CZSnEce",
  "key15": "4pT1tbXLP5MR57RuvvMQbd3WTceP3Jy2vWnhcDh4e84umnbD7PZoRvHHrQE9pyZbfYuKvBg2LZwLjyQooAfCJpQ7",
  "key16": "5vvNGBqRXKkDnStEM8MxbJJj5FbSzRuQ3ZodkK81TvJbTiTxH3WMwKFXsgkp1qbGnDwQ4dufsNSPQhmjHyriNTMh",
  "key17": "5KW6VcQ4vbTwCeiSee5tYh7VGHRXyD7XUeGTQqGKW6ZzhsBW9okHgSoVCwe8tqxy61MDNMaRcYCmZHaxUWWcCJqm",
  "key18": "3rzxY9AVb4b7ckMH7sQXGewqLgAZqidGHYuEmzS7uC3N6WBjQiFn954m4BMCuMXqTzZZuuzZq35NcPdf8yXW8qhh",
  "key19": "EiBgPBuQUFtskp6zGZ8idNZPTMt4bevKw1KZv31puacDQTaJidbm7aBtYP6jiiAyb3i2dxptDEUoCC6BafaJ7y1",
  "key20": "3sA4nJZMFq2Mfqah27tDyxEkrtp7pTwVAJLFYAjkGABRuHrWYVVeUk9Q2z1NgjH7iEw15Li5yBvA7mVwhBJniQDt",
  "key21": "4yGhPLuAtW8XDpcM1MJvazc6khS7kg2ewZzRLt6T1Ww7e5jyfGvAKBcCnEzyKP3Z9ZuTMbvWApDA45oP4F3tuXWY",
  "key22": "2sW1P7LEJJShRVTR4UH5mALgW9R6r2GkhVwp39rVhXG4k1PbSyHxVsQgYRHmENZCgfc1CtKnWrFppSLGoUiA5Piy",
  "key23": "38ozoxJcikDikFJiLrYNnHmX78AVskcSH1a3mUAZh9DB7oMe3zoyvv5kctAprmNCXa5GYV4bfctn9jMHxhdszDzj",
  "key24": "5wFNiwEH1igGPmJUvrW4CK3j66txPLQbwJ2yJex8gSoTCp9P4PVu11Z6vfNP3nShDMw34jpTXVvF4HkNRccTSvXh",
  "key25": "41EcUbJpkvZa9nkBuoypE5BrBsNGs76LbTJCduetoLH3tpYbuR2gVAojjXKfNgTUbjmektJW4E1RY2f5RFbP4htu",
  "key26": "2YY7aouWq9aKk2LfeM8PNUgZ369CJdBEB3gGA3Ttkmk88gYKFxMgHkapFxr1YYdtv9R1teAywjjcPLnca4js3YQ5",
  "key27": "YZFHKUZ79TbXWvTj9GWMCqu74hEa6r8UPra1SULYNARWnjzg77jHZkpZ4bPeWPcJAwwhSwcxmsrGg6hxKBw5zto",
  "key28": "H8mgJoSejeuCX5nsCiN72sCQsxX178Pp15EWzuLQeiXwF7rLmiCNysKrCmaeH8QdRKZzLRLqxfQAWke4rSDoZg4",
  "key29": "5djrhMjCKguk2GiMzBRLsnitNyfS46mNu8PaYNrC3ZM9S6hBXy5ePaxqd77x757hrUMukvG1N9SMvSsb4oSwMNYW",
  "key30": "4n6CvGTw7UN3Loaz1g8wsHabxGyqNFQBm9WGXgJVRdAt29QzZ1CubWBP9m77h1asKmTefsqVoTqTSE3pD29oqPHw",
  "key31": "4LnVte9VgGuXRQ4YuyFS1Hzzu5TrrXryHYgvdRjcvTNRj9SwwxKNsovSxCZ3HmhqgFg9sY7hJVvAFWeaqn8htgb6",
  "key32": "5vPo2TqPCdceo4RhHfsPZbrBS95fpeAfGUPFZi6N8V9wTbzm6iVwQTT9SmqrVGRgiSmqHrUmXQdoBCYYoD8Ai6M3",
  "key33": "2DPXBHB89rTfgbvQyW2VvZbr1R9ZnRXidFQPHwZy5TwouQtZVhUybAyuvnczndJvWyZCtjSA7Sy4pf6kUigVWVKH",
  "key34": "5eLEB8hDVZfpHSnhcqvAVHN46AZyawa8yMfyPKXdBJ3rQyjYfDQP7DmZt6C7Vbii7aP9gUAcgAQJSdA1Zg1sNkkF",
  "key35": "4ita2Ap5nLBUEQtJvNijNT4PWPD3qSWGJEFHhGPxMCXCTYtnoYZ5u8BArSuW7q9RJU39BVns54F5hMh1mhkg8xrm",
  "key36": "TwPfdE6yBkxQvzXK7tvwCMtE325MZoDCb7f4crTxy1bYEAS4gZfwUVqNR9FXwE8m7Drt6ReNWDoPp3XxJYJMDoE"
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
