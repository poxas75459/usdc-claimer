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
    "4V2VMYn7aj4Mjf5XBZcTPW9PEdPKNfZetbmLk8cMwpMoZekpw7gA745eY3as5uB8riUekW8Yr5pqZDdTpojXSMqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qa4M4JSsM8uxNFDy6aozxaegduqUFaFbq2yGiv8kSoEGwK8LVfrpsz4nVFbE8g6jRrmYv7wwjvUndWA899s3BHY",
  "key1": "3HEUSGkX74PbTDNLrCogvEvPHgUyniN4NjUtZFVoxVVudb94YWN2aZeqpdPMXH5E3b9mg85MUHG7DgpVZyh6D9yG",
  "key2": "3UJXcuo75varzn8ddwH4Ci9CdQVG23mGMPxp7E88fZZGMfuTQcgHHbYQdpMNCBcDXCFEK6juSrGQFbnXPM1VRNFH",
  "key3": "pBgzFj2YoerCNW5QsKq1N4dx5mTseown1zJTGFjU8Awsn2b1vRBVyv4q3Lutfpm89AyAsELqWBMmtpNnebzFDSK",
  "key4": "4cffSX3EsUEXZpBqh4L7dGw1fqFPHCQ71nSjCaZCiCtaxMsVnJpUCXuk2ZafZTSttsG1yf8K3bX1acivh2ADEa7K",
  "key5": "3FVxSfPmt3Mfgi4qRrqGGQ7UqHTL9U8g4e6rg68qZdfn2jpfLUxR41eBsxjMeECKeGPKQExRY2DNQMmUQqLYXSWf",
  "key6": "4AP7uyantApeMTVVq4EY8hUnWVkeUrjGo7UmCeRdgtTr7HnURVUKQNBqVbdCmjs6H18c4cTxzYYyp3TLUckut28e",
  "key7": "2eUptDEs9c9nWAw5LYfX3Lid6e6KTy8WznqwbrNYzKfcC77BHgviJ9zw7P44WA6srUXpwkmo7hksiMr656kvrsE8",
  "key8": "4UxwBSXqS1bHj7L18Av5EDS2nxB546vSngquH4Eb3N31EW5YpeHfkCUPfL8DUnuN8TTTgeg1sSRqLL2URRQ7Nyqs",
  "key9": "3N5N797JGgMUwii2mpNJsixutYUCtoHjLwwh9hos4R9t8aKrqVaEQMxXtmZgffSbsGSnHRFBrHyrvxwu3ETF8Wn6",
  "key10": "2v1EiB8XPuxyEZGahENRBR9CtE2paAnr2KNfsfH8C88Q9GkdTduxBxxRere9X9SG4bHjeGJpfF5PL1PyR4w8JdJ8",
  "key11": "4NZ6X7C2mMq2KAF8E8mh5AJHYPeshTfAb1oFRESzKnZrHCBenu7ddF836H7kztPvdM3trPT8VzUDMh7oBdXxArBx",
  "key12": "44FD7gTYTt9vwfvJR7p9GRTK59PNMsEir2iqJ4pbDx9dCDoAtGR5k6yavv24UiwjCEdB6nAPaA8Mc6PWMhH1ySc5",
  "key13": "5xEDjzhrBoePZepxd5gkaNri7LgmtLqXfcPgM635yKgpQRynXRpPQdLvwfuabuKv5LgsgbbqZtByVjiL5C7Ew67V",
  "key14": "qopBuk9byvwgV2CpwkdGEgpfrfeamGsZayCCvNKfYUkv4iH5zLS62Drcv8wqd9fEQtzqMzs7u8TzypMC5UxaxZ5",
  "key15": "37JdKPWzxiEXuswTfJTcSrcDZZjhNtTjwzAYiCBm88DRbYhbLFPGRmicMhznFDysTWTHUMnyauLWAsAwSM3ZWNaJ",
  "key16": "5K7TiPm34WLk2m1tsguds14K6SmE3G8Awh8oqxyzeshc3nqhXR1WTKR3zUoFtZm4SLuAaCJfAeSzGY6fNfsEdXWR",
  "key17": "4BsxXGKX2gfFHqL4m4bazjqxLHW1skVgicNB1m1MNFxfwL2WYuzqbxftrfFA3u6iaM8Uet6VczxaCJGyqskBRriK",
  "key18": "3V7snahvmyGpuXEkRm9Yt4ah8sECxRZQeRXmbpXkDtNDW8NMTMztjnRK9fQhjt7J8MN5SJH1aGiC8CiyJoGgF4MK",
  "key19": "QNoXKbN2Wrrae1Q3aFXTJagGQr3L8uiDnUCweH2XhBVD4SZMkv16D5FYzPdnWnRxXskARUT4E3a616LcHhXPG8C",
  "key20": "4AvE7Qnyfjeeph9QagNBMZqufYtZ1vbTUeckTyJhNZZGnzuFZPTVzjrWfvACu1rgJRNHiCFCvUyn48G52pRzw8x9",
  "key21": "2mKtCfYknrWmqSwRP1epDW4qbf5nKnwz848WXQ4Q9jrv1ycKL3FhyvBZcmBTbRCTVJUFHhBMVCfdZJdnivxTuPsE",
  "key22": "5qwFL4tyvos9H3V5NS7nhfvTpE6eeG6s5kdKfXtaxqgLYFbFUVCz2PGZzhiCnFuvHLNLxM3xAbejf9wy7be1XbPM",
  "key23": "AyRWqXjySxz15QbbK9fSP792uA1AJEZjdDVPkUeRv66a6Lr7WsDYwdSb92usFriEE42b83hV7RKJ7szMezrJEGq",
  "key24": "5RHahGxGGFJ2W3NNnoAMM94UuuTv4ZSSKX2Z5GPour1ULjQPV5WsBKrB2QXKaWAzdkzyWne7UWixZNHFEC44JM6e",
  "key25": "289xYqbsQR1B8JLRVriitTnu4UzAAGAgDepsBJx7KCgRQh9s1GQMVkRUD9HGCfBDvfYyCmuQe6j4L4uhcxcgzn4Y",
  "key26": "4PV47aRA3k32YiM4mRqkrjaNzqakxtewHbEAuxyA5PSaqksjE8PDvaWicXuESSw7iiU8PQuNrtU7v9WVECbSuufw",
  "key27": "3MhFzc6Wf94vDVAKq9Rd5hvKJ1UCqseFFQEmShn86kjqQTPNvwU1eEmoLwhDbsvsfBQt3wuFwziLomB4RiwyZCAb",
  "key28": "5AEHwWvw4Eu9MEJisMXnRTezHEuXC5a1nzG5bp5ZZUn2YqGTPu3v4WU8Ke6jUhvdgEkd1QDyPXvWitw74YjGwdwn",
  "key29": "4ijscGTh3z4C3qwLEq9us6aeaHgYwV7P9Y7VmZT16iWX6wArmCoiN6GDGipuHnMdQPS1xx7qLTqZuo2yPVPUZK6m",
  "key30": "3PaDySEErqG9nKo2mibqmbmAKLt2WVUhPLiKnhRfS4qaqVTLMepEEkGqgYpfZNmT5sJLrsKj7vtZK5c2vj6L9UfU",
  "key31": "4Ly1ZfCDvfke29mLpLszC28vefkahkmrFypnpJaGgbQJuEP6FQMXFDvBUkHTWpcR4sWEMekj4niM9Y98S3B7gUs3",
  "key32": "3dpqk8qXm54wiKqbwX5yy13PG4MiSS5Qy81E1VoEjcmCZ2apS4rjqigNw2Yi28A5sipZCFL6viND9HGqfK8hN2NV",
  "key33": "5HE4hUVqpT9efhiQLGaMoGyDKDndQByyv78VPiYCG9Xxanbq7NdwHsZNTN1UCDSsL3AwYuh7A124bBnfhiBKnPrm"
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
