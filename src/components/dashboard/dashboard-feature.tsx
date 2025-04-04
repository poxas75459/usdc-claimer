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
    "5mh4GTcZYn9c1VqrSGjtQ1uC3cMTPm1fgPUCEX6Hx7a1KnjcNG25CJZBYXVcTNp3xYz25DmpxwvhvQsw5n4sdUnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331bcHRmiLZBUy4oy337HoVSMark6NstW9tb44CpKThAjygBpJSfNTnSvsnxmAVXSesm3EPWheB3PsJy4q2gKJfo",
  "key1": "HYggqkzuwkoXPJWdfKrQ79A4zrpQGia7A4bfKsSYDexnzDoK2WCEoAac7cVB7SDAi7KS4VzD3R7JHR6QzBNJdqB",
  "key2": "4CXirpcQE2n5kbauPy4Ms2qxMhAPRQLjT18E4RCbwjiKEoZg3P42iD4qonEyKTdxEMBjfSBbb6fmpe7Y27RCY5pj",
  "key3": "61v9YQspjhKUdXHmHfjF2VdbofDsETdSCDVTmwfo7uHqCpAamW4qMTiasbFr55NbeFGpBUBgTkXyepihUcty1SJX",
  "key4": "76aiHsX6Lt6pAaWHgpPxenCMaTV39yys7AoyLCVg8g5BhEiYEmcBEUwBTUrXdQgE6pUtpLXo9cB6SiQNUbxtt5L",
  "key5": "3zkw87vWdWfZwbn47QDdThU3nfsum491JzAyoNwyoNzEtB4K3aSw8QC8VnZG98QkFPFHuBehN7ZVEu1ti6TKvXzQ",
  "key6": "scVBBxDac8cYrmJSQJaGtg8W7PtFNZwmaueKU1aLECH66ch4GaRDCLzYfjwizYM9eWh2M4o26xkL26USyDKtEr5",
  "key7": "5u4SCXohkJm3F8QPKCmyDouiWW152h8DqGThET4tVoB82vKFt7WDRLvGo9TmJogPAfXtirhpyPRwBgrdXYYCTcpM",
  "key8": "51mY8GKkvMUNzdQJeF8pAi53TWiYax1wuDKFw3vkx8hGkPv4BarFq7UBPsM2ZtxDBDbciRe6VovroJxCSu6kr1LL",
  "key9": "3Q4jpM42kGSHh3L8jFsY17nWjWgEA4LSUapmEhrCiY72xuk5AgJvaPrFccPogvJR9oKNDJati7j38n6vR8Y6iPJV",
  "key10": "6iAGWNMEvyYmEWCb8fowNx6h9jwDpn4MB7YzkpnnF5ZJepKruALipLa5L3koZ9nrNX5Eq5gUwVfxQvP4PQ9Au6t",
  "key11": "5pDKDALqWu6ps3kYDP3g5cw64aMHMkwS8pVb9qe1azPkjcM2Wz2NsCWk5sYaUBptNtxUBkP47foq7ogirCH7wDTj",
  "key12": "2Rw35iP2gM1ngQsze5piqw8iM9qEZaZrFxxC9WJVuY7Rji2tHhXqyGVMGsSd2W2hwYBETp7try9ddaGQuHWyoy37",
  "key13": "4onmbtwxoaHTX8H89jSuxUkQAv9dm7dGAMRjZQH6Kgrp8H5JGoBzPYBXNLSohM2PFGPguFVMLXpCEfEGuCjXMvGb",
  "key14": "5cN7JfH1XNnspdkLo5XM7CSYrYwWKU7CNfcTv5oYbuVbtCnbQxhN88BEsT68zPJMXWnPanc25qSeiNgs69iFyXAv",
  "key15": "2E4BWmWveGxk8Bsb5yUztHZQ4wZ68Awfa1LyVLxUcgT9FHuSEZ84SpRSZ1icjGTmUMH68oghV8sj2U2WHEyCoJzG",
  "key16": "oLWpxbo72mvvpgpFqeFespeS4kodEXaJPgMLb45bHJqckvKT31FLKtK1LWMXDo1KS8G8EADNWARzmo6ZsAQ22ce",
  "key17": "31gsseQGMU5KHY4A34J5tEgrVsty1vJAc6er8gMGj6ZxNgoDHygpFmWDJBZ1gCSZvrxLtz4CGuCLZErN6rPD5Kfq",
  "key18": "5p2JCom613YUmQAgmfgSsj4QA8XPv7XUJ5VcagPxYgU27P1KajVpbhjqz469gMNN5bH2eVKZmJHGiGoRnucL89XU",
  "key19": "2WY3GYh3647NJRRV5qUJ2QTqwJt3jxQuzLpgrsdjMxBvEL7jANtqVb8C4g4KEDMPsLwSMtdaP287aiJHFLHe6UVT",
  "key20": "4m2eQ8tMkKxLVk5dTYKK76ieN7ui1qpgfmALwzAHhkwq7LnTfDQx6wznt5gfoTvAnRJq6CjSgH7XWNU8TeWNeSXE",
  "key21": "3qiPpLqFpdu32RYnRtTyrHmKPVXasgbzoY7XDXqgRM65HsTi6HgdtTFjJTgBTwgJSuDX44hz8SYc8WU1BH4JrjrQ",
  "key22": "QLG4mRbtR7jwRtNu5VRe17wpNN7jjCBqebyzavP4dHpxz2T1KA2U149GStRLQsbJHWHj3Z5QdGrxhL2APCEU6kL",
  "key23": "3nrs3sCsuJHtJM1VsLCSoZMySr1WA28aQxs6Qj8VyD59LqD4W4tAUmH8zX4QEkuVkPxxvb2NnztE88zZS16BpfbU",
  "key24": "3djRSJkqYnz79JJzfm7fjRpzBEUTuHQHkxo1FXgZS5mBhAQ9FBkEC55BTvVXTHade7pE1mwAh38Bp2sukVdTiTEB",
  "key25": "3bxnKmFnUpHpWN7KdeZt19HYpFpTEFtGVKHuuecPSQVA7SoHSQbtPXFp8fJJXMoLFm8hbtWWHjPD8biEBWDwUNwf",
  "key26": "64yoA5he1hijmLAFuwqHmPpuQzPjSm2VPMmTtcdQznRWo9SQMGpoEnfHHQyeDmttCXLvvvhMAbAb5RTf1Kf1K2gc",
  "key27": "2DM4PFUYvV2RF47p49hk6YDMGNEgWR76K8P9R9xKQ3SG7RdYTxym2pxLEm15TmGhmBKJEWFUzC19Lvk2tQk4TgA4",
  "key28": "5kebQ2d338LfEJv87Y4EhuAKoYPCgouEJwFxACUJaoTnZtiYGQqETLmZ8bnWQ7UmDTpFTJqv6ASM2oomvEzEkJKf",
  "key29": "Hv5vic7MYFboS6QbCQAaLdkH8JR7cqj2QdByBc8T6YXuDJsPuaURZheprxPPG2kZZ8e75ybifFJMUTYNJwh7Kfi",
  "key30": "2u5fS7BZeh8SCeEbMFKrvbQV1PpZ9bLhQaYMap4NWRmEiYX9rDV8E6x3F4SdBrmeNGWtVmEmt9dmXR493RLqMuea",
  "key31": "2Dsc3RPXkqpdipDGePreazMJULkDrUy8wnTzrDVn7yJuzZErzA9mvPx9ySSVoB6zjNJqWXuY2VFQK7XWbWTsQ2W2",
  "key32": "MEn72EmnztBseTSQDyVSzyUXEBDYxyyNurgzbpyNJMFQjwZfLXCSnb9zKNpio382QqLRMxCastyX9p2wXzCSPHi",
  "key33": "48vuyN5yKnnV1yJwPe24VS1jLoP6TiYifEJCirPDHduNUFjypakaqvpmTo6d4ijmGdPBNvb1K9HAyyfGuSUW9r5k",
  "key34": "4gG671QfzJ6upGSfEriheZScfm7nQnJX6mTycq4q8iAQFEof2Q1CbHtif5ePPXn5uW35w9ESccGh7YqxvMh2ZxiS",
  "key35": "YUJkNtvbzZL4ATZqMWqn3oh4dgArVWtVM7FKE32sBKCpSNpvqhCLz7xL8wx9Gaz8kPyDePeJkEsk2cEFmXu7mvo",
  "key36": "3UP8tu8ppSrE4scLCyJGXZPET6H3geoy2jSkZUNAqqDKpcx1wMm623isQFdi9cd8hHa5CWVD56Aax3RJA5bnahzw",
  "key37": "5JzbjHDicXGCn1F2Vzhrp9JpPvxPZYyRmcxnGXVtabAUv82v5g2mRQjUpruUfANvw8qwdpVyzf8Dmz2Unp54YbS",
  "key38": "2M88712kxdZLMXsPgZknYLV1xWtzwr357dx7cY2d2uVTVL6Nsc9BRGsWJSppxXVw242L1UYp8fXM4JmEfrBhQ7SF",
  "key39": "2CKKWzRSVy7hAARTcCSjeXAKTMgKP8retkcevxvQRyw2jdVWrJ2E1vhbPbKMUb5vBrSBUbWcMoxvY6rmF2tjrLWv",
  "key40": "3ca1L3U5Njk3fboPJPgcP2uubqdyd7DFZ4qJSqzNM6YDFACD7GCzF7QMDohufuWo9eAeAfn7a8ESjH8Tg4oQuidw",
  "key41": "5xWCo2Xg4iTdpHnQ8qxzSPkLDVzq7bSuLTDxQu9KghNGCvQgmLiSJGmPWN1JeTHr9fTcus4AVQUsDMT33Ebyy2gi",
  "key42": "9TB7q7kr339uVitK56p2ccWUKWcNdSh47BzpBvakxGc58CWX9nHHNKve7gmQWFVgf1EzeMroUSYx2nyYpDCFTuL",
  "key43": "3iqUj4AQajj1GQGCSLUQuomM7GPpiQeLEcKTQN7dTC4x9yYEk9gjGAwZoyHifpjKnvJ6mqZVeN5X9P52iPYFvC3C",
  "key44": "pUcSCe5NMpCb54giSy8NFGCwiRyeVe8EcSAmN4yGCwWVdH69cKRU8zkPrx3F9bPWbtjzABvebdCbt8wPFc5oFzG",
  "key45": "UfMPppJoNxgDMcieaSt3Qqx6zcsKoqTRh4zRzbtSN1vT4PgecXfouCDcW5ZXB5PaY7iexWoipf4Hehwwm1L2mBT"
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
