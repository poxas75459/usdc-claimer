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
    "644S1HY2FYy235sUVrbhtEmUg5Yao86gJcfpYbM87XTkoJn5sjgsagXCiEteSZktgkDgkuzHVEVB6EqdSMgkVCb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NSgKqM4Zr5s9FkcZkL1XX4UNzFbJv72PUDLvC8pki51z71ApnCGtvHNGTJ8FafDpCpTz8J9pu9H1CsNcMDruPDr",
  "key1": "4UFZuRNbF6EoBxeurnsBkHASptgmKXfJLScUQkUcQYK12V3fnLXEvkbsJo9WfFvikBDdeARPnbx4T6cbLVDtK3zr",
  "key2": "3GTA58EUVFannH2Ubw2Jzg4qZcJ4UZmN4TWCKjpDq9u93c9rrZzZX3unzjjJY55JFFonQXf6puLFs2Rz3MSuJJmb",
  "key3": "3CgaHV2yk5fscUbjVBt3yvu3n41TGuaxCrFnuAhwmKvpxMBUGBWJ8E3mrTXuhM7vZWChLdqATkhkqgc3DFdzqfku",
  "key4": "3kRFpGjTjA4rsZrmSaMpeFSKtXQenaR9WFd6LmH8pCyPUnXEveSWWt7JjQVSizUK2gNb6Pp5g8zVXHHfE67wGYto",
  "key5": "3HVWXDKBY9jA7RPTt2grrVSsw4yWiNjWjPuuv7oida4GLwtVpJUvXmnjfVY8WNicCnbcLaxyb3KWupaXBgPbQxTJ",
  "key6": "jooY5uTWsetTCqtBR4RgXoN1uZ3117K82whvku3FuPe7Sc7aYcuviaAq8aaZVTNZzp8ntRCwqxZnxdG6hmPPSNV",
  "key7": "5Jg9di8RhsP8Tnc3SMdNAj8GYSoYKka75JyrGZDYrVJ47QWrp2nof6C2cm5nb9oh4SHY9yqShVUeC4ho3pRpXwKd",
  "key8": "4SSCR869iNocKr3EGU1So9yowuUNuaPq6ntNvLZo9DhrAyoXcSEohs5PTxt1LJVie41d8bgfyP2J8yJ6mrSuTRM9",
  "key9": "2FmRHuKfGXE4GDUyEHvQ67ha3j3Yqek9w8DYQoPaWcwJBLJxAzqaCRVEXbEsdFbRgdrf8nBk5p2x4AazmmbGyuM5",
  "key10": "3u51HF6JGJvD53ducbj3EJSywqh8wsjvKsbTDsx34SnTKb1rh35TLZ3ciAvDD8QbWocs71jnGb5PFrwiVvVy3HxL",
  "key11": "3LYvDR2UJg82anf2y9CubyQLxzkYRjkTAreTZj2DmV8SNbLK1KrNfv3efNVTcSvHZdpnAKbSuNQAvv5anW1XDnx3",
  "key12": "4wUXhUtQVzhgMLVN2avmVzHUoeZiaJa3TSGUn4HC4PVoVdeo2HM5bF1sFKZhuQyuk42i8135J1tg4peMuS77eyAV",
  "key13": "W5boKMrKMKFhhxPHPQLR72qBxcsSUobz1gD1t5ES8cgZUCmjL9jpM3gWccFAgKYXai44vXW2PPvsTi2wRAhR29w",
  "key14": "5FxhKW9nZNtum8Nmt9Ld46FGBiCZHqzzPsipHQqdq7yqr7nQ15DvwHCCMppmdx9kWtLckigXJVkov43LB5aWRFpm",
  "key15": "3akBmBJDQTCmr7HoAUKV3P3DXQeweJ8mEvHnsGajT37hnHaiijD6ydxxE7A2abDtvgmgRGC9WP9jDAfzYgnCFBT3",
  "key16": "ftpVa5WKaonhdgRWyXKcV65gGpPsos98KYMbfsz2MEjhPZzxFea6UUPLsAwPLfDktP74uSps63RCUDhAHbf3qWT",
  "key17": "558hgYJ1QonmjnmzCX9v3pAyP8zsLdj2BjsoP1wFtARtc7DsEUPTtwrsHDftNghMeTDG3WRmGSZ1Z2QDsLscv7yw",
  "key18": "4tHV7RvZsNeZPtUYdJ1E5PzunTz35Zv316CDqALASapB5j2rNto4V1aGxxZFfN4GCexraojywGpTByoeePJDv5J6",
  "key19": "4fh7MoNSTyzMqVhCLKi8q6oYk1e3KNrTcn3FjuYSSRezGddBEr85QRJp8FGN6Rn1LP5H8frRLgR8ApuWPasB18RP",
  "key20": "3t3Qg3N6Cja7khjbXSpL5JTeRyMqQTBUsBRPUnAW5RD7935BKnikbG68bS57Vrqz2toE5sGV9kKuYSyPxwTbNekP",
  "key21": "jnCWZp83DRPvW5E9Mt7dgwL16BQF6kQ3oSowaAmx6xKvBGXm57jLCbmkPMrfo5VhZR2psww4JdSmqyZ847uNZEt",
  "key22": "39hzgViBDbSd9EUNHfoTN8UzRuPawAENHaR3NsWLVBrP479Y2cRT7wqS4cyUd6zq39WS25KjnHuUV8jpT1P26Let",
  "key23": "54vps9FNhS4KfQvt7TmtWozjGyT2CYiaqUGxfhYwceXdm2Yf5kLmS4M3y4LBQpPXayffod4r5US4EaBz5X7V6Csz",
  "key24": "5sNRBns6uiE5HWQ9uzpHnFZisRtoQ1PeSp4GJsj7xUBKYndtuurTxwuwCGMotdPmL1kd1RaFBkozXphVXDDsJ4dW",
  "key25": "P7kTCdPfy2nPHyTVkvFKrfH54gDSsdeoG4ipvRgawvAJwoZSAeHpLUXQF73YFJJCBySfN4MKzkxtFi7z7p2aGwU",
  "key26": "Kysib8W7gQ424e1v66DmuXGTLDsaCsntht3j3WnoymxPdK6H8WDZJdekuGsbGRq9Kbp1CGG23QJfRkoFRcrJi44",
  "key27": "5EoJic18HfyoKstPYCayWAHC4hqwc8sfkzHtAtJ6KThghgB5xJ84Q7S5M51XUwQMHrPUa22PjvykfWE6r7RtPgRM",
  "key28": "3Hd5fWAPfLefbNE1Li7qPvhU95epY4RMHi5JPDTqWFQzGhxD9giJJicKCCd3hG62TH6twpVzL46FHcavpVRD2aaY",
  "key29": "65jYr93grvEycXsSQKPsukUWd1q9aQUVTkjXrU6Yj61km9UY1m6CmLts1YPrXbtC5KbuUqg94cWHg7JHqu7w3xWd",
  "key30": "3fKqELDNvZB693nt3bnFPTvbN87HTC8V98u2bj6EmW2HX4aeaSrQ65NcDFj8PVWScW5Xwgav5ip7FRQk1h1Mzzmp",
  "key31": "4YFrP94vRFLT3TvHWK9d4b6Effq8wmgUiyHQtA6rYew5J5zZBcrjB6frLHRSPAAZfKtxm8y5V8bPG4LzFMifYTjL",
  "key32": "3KYco9Cm7prZB7fUmoRYBFzepxqCQrZrfsBwrmND3h1xL1HXZyh8zCKpQtPp2xRHC9iEQD7gxTnz3qCw3mojsfpK",
  "key33": "4TytU6DFFHtx7dDtfTzDiDrxjZNuWzz7oyoCS1RQvexAoRsgTMXRWKgUyDtUgzG3xenjzPFx6S1q6TrAePCXYBpr",
  "key34": "3DeJfmzw7VoPCt5eLZCpSzEzHF9sDXWvKRzzECa6je47tTbyoEjA16Z7KGu7W9ZhbvGvP4ZZw6ebVUudppw4AqRx"
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
