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
    "43jrMGj3mQyJYLQiidLbTPJjrYMCfjRzKFZNM6EDKYt7MocvyqzhvsGnEoB1sB5yvsSci7HSGnJNi2mEZkV2Coi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3za298aHJRXXcEv6jV6m9mQ1f1RXtq1cXNDFp3Udty5ouV6tnVxvTzAG29aF9d1hTN1jQERL8iNWn34GA6s7fsHy",
  "key1": "3ZsSHTRLxZFPUPKuxdE5ni6j4PyifuT9xh9dPJh1J5xe2T1iDR9oqAFW4ENw4iuspjA3whatN1cgRBEKRFgNVquJ",
  "key2": "2giYSzS7znQJi1ukkyKFzXgJdQc64yVbsB3yDdex81S42rzSUJHd592DqeLxoEMyqSvncxCXyowvzdxQXAM8b8VL",
  "key3": "3GPRDKR2bju1sWwAbiru6DRnFLbupw85rkANU1kGZUoopuVJ3F6tcjo74jfVehCw42t5gtVtWNYbZzQvoRN4NQ3q",
  "key4": "3f1KVFM5NQx6XiM2eXDboTjgFnXijUxREDGvdawskEobcCEft8Du5pMRWe78J5S2ZRxhZHWnaNhUzKv8wuzVTQXA",
  "key5": "22tvCFMuHN1nWnjCj2Qg5BpJnn1hEABn2QXeJxs2pxLLtEzhYrzV5iZQpLtrEXvG1AQJsFAw9kBvHHK5wrHLmvYk",
  "key6": "5e7SopfqzJ3JyNYsVYAKPh7j5DyDMWd6Tdnqe5xxP5bu1TmPRcumECKgu4X9W3SAtsbP1FYCRCRRFiHg7kLirq7f",
  "key7": "5FyE4S2E12fUTHGKF5HcAkpt2biYCUppkSk6x29fjhVJgB2vyZ8dNwvF9rYPacJj1aeKADYhiMUKDVzHE9DsWe2G",
  "key8": "2oQTPtmXpcj7EN7oU5riotb25yMdSvvhZGdBXq5V7vtjQW1NVs3HgMynStRj4GN3YFbBKBr8KHQHsUS87bdaXrUJ",
  "key9": "yQzhoYnzh68aZpuP8uiMdVstTbJN2iYkqojsiFh3mEB2r44AvxchDUUzHaJLTUzae5nZdn2rNRwuUrcEQoTCK7C",
  "key10": "23RmdxKcSyYE9zVmMFfafvyH8EeKw12fjEVRzjg7F9FLZJ6RNkrnNDUpntTfnhwdb9z9vEKg19DenTxGY8WGDNyG",
  "key11": "3VXWsAQ58oKkzjWT8EsAftsov5vt1k3C5VwzbyQSo4jtq4ni2bZHNTNUKLT3zgiHE7XCDG2gcJ7d2qmY6gmtpWVh",
  "key12": "amn8S7WsroQdfYCEgS4pWdBVnc82fFU2hqLSL38ebVaHbPSiVDiz69DHEJ8jmHz83QSFFrPRaUs9bAqo4W5EJ2D",
  "key13": "4mt6oCQqH24qYvqJB95Frf4swqXs5ZpoWz2tNyEer5m18K3SD7uzWsErVfuvxDLHc2ZwiSqmbNCw2FkXpG6AL4yY",
  "key14": "2TZWAgMyFSrxsGsRVrex9jcQmxMQZVA7X8hs14KVo2Fu9TdEYk9vFcFPWWFQv9JKhkgZM6UAhhD3A87WiWoiMFdh",
  "key15": "W34QVmvL9FkR5oxpfsAU2mXJTbYEHUaGU6JC1neSEC1hSNJpDr3ucLNBExvWhzUKazLiq46cEJXuzvnghBZuLUg",
  "key16": "2z2HhhtUQGKBNmkR4zf7zbyUpD6nhoSpHPzmud78a6uW3bD1uXXaEhzHG1LsdLuk5PaX6WB4qw2bUCrJLtX4Zqgc",
  "key17": "3Ao56HcAcJ2aNGpmudXE5ZXXiTdMKJYP7JTmbvd9i2JsGZGiMecnQSGLGxn8N7WA6cps7z2yDaYEspMgVUJFtVQr",
  "key18": "4y79pWqq5tbWPMrJhReNeLhvV2NMvwi7YGyP5bCsJN6j8Wgwmrn8pHF23KxayNBo7AZv5p4tffTa3SwY5y2nUe1y",
  "key19": "46SoV9wEUARS8pS4CRy4Vz6JWTrpr5AgEG9kitr8J7QpFkeH6eigBAGhqdWXBQGMbhJ99dmcPkfduc52tebW3hpR",
  "key20": "4Lr9vwpfmxeqs9LqbwtoubKG1hsHRrgxmNAgCsN5AV1imjXs9q2zou3ZdvnUQCEJ2vMUmEciY8L2D4RBWCoVcgfc",
  "key21": "4S1jmk73aiuUky4UedQbGwrk8zPKF79hFy8vYfXHVV3crx8re8HLz2Mp2aVxw8x1jzGohS12hBmTs2UbwNkjJ1mt",
  "key22": "dk9a1bUBRmNTwXJYUHyKo7dC2gcBMaCB9Tx3avPEZHySd9FyqSgJqb96DMXbXUZ8H4bXZ8RVqeHdWjTaXZzsato",
  "key23": "3gB6dupPFLwZvHuvPGJCBE3PsZzdUWbWA92EZcUbcmyR4GUP88QDq3Ax25TuoUapyoZ3RETHjwc1Jp8RECczUciN",
  "key24": "2LZ4RGu9jMeXRo8SuUxSgddks85hW3QyNnUpMaydiyzaJtV53BXreX5kTDXchG4R97AVsFXfzyovifn5d5ef8UCr",
  "key25": "oyeAFiKvyy8mdPbXR2wU7FqvgBXCgdyXfo7EvHx8p1dFXbCucjYZUe5vZXiQctdKF4Yx8uagY3iGv2iMGdLtmFu",
  "key26": "4GBNpAUSRjnnqHe3TpH81ce6cQ96PUHKUoD6LW98WEyQQSGwETFvMdKRLJ6RGrC3C3Mw6vR6NKM3dUARZLEKKnD8",
  "key27": "571fktwQ7Hbt1BKCdAH5NPWJV2LehCduDfsCTToTbzHD8TBFn7US3Vevrz5vmBuyQDVQ2QjLVTFR6aj5MxEewvk2",
  "key28": "5947V2radEiwVRJYEBuZtkGgvRt4d5gy58YnJdUUzKEXSJfLWxgXmHHK7uswQbRDrkJRvju2vd1tHjke2QY7CREo",
  "key29": "5F1r5k7eFRVt7er81PhJgJoW7RydPkWhFF2PC75JToRjYP872UdckSqUE7iZcJGgzTiGKrfSzaxKdEVMhGettLcj",
  "key30": "vZAHhRUnozxdsVphD1vAdGRq1oLgKB5G17YqDimNwCBsP1VXfut33zgEy5kCBF7jEzBjFvzCcXXrju6LcXo9Vfw",
  "key31": "29hcdSFxyLJxr4f24dNrrPrQqL43PyR4QJbqpwFKmq59rkkqFJEr4eTnUYTAXj3Yq1KoHgHyy1wfCosn6L2sxDqE",
  "key32": "4JSXQz13CELoUMLERc3vwjE32wZ5YnMT5Aoio7VS72ajAc55SRLXj7eLShAiChjDDos9dTgdsxhKWZApBw65k96X",
  "key33": "5BBB4FRhbMpKX5HPw3uVqFVogNvCKfafTujcmycswjeqNKpozkGMDo2rqvaWFGzQx16Ts3nj3oekkCHdGwjS6DaV",
  "key34": "4wGWWRsr5ctyTQBeahV724YahSMNi6xmPg19ejru291yP4G443thK9xKGx4junSSN2VTNAP59wckmmNmsmEyfc33",
  "key35": "2wkDTVsBfgfKj5dAHnfxZ35FYuyKVnxeNqySo86VwwJQZz75kk6vyu1nieAyQWJCzvnhZBo4qYr82cdd4nnaiTo2",
  "key36": "4VRXdmioWijJSpaV2obt93MpUyEubojdtXqyb75dApGi3pxoFxXtrUxYzrEkcjYyovsVtDnmXSp7YZzLp7hcaM5L",
  "key37": "3VCHZAXc2z9D2aJ45CBUbazqVi5yqZt7w7b45YSH1YnDx4tNoDV5vT6LebM3nB2XBPKxGEeKVbsMBbbdWssunBGn",
  "key38": "4PWK5qNi4htQEc9DGcDFDz6S9YDwiec4kH3x43tuxrkMuC4xRRtFnadH6ZLtGx8e1FmD7a5XdSPMYzUG3Mk1EkFY"
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
