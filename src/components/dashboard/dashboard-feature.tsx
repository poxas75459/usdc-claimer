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
    "3BuKcMipcx91kaTw8M7KtCNxw7ECy8dQYTnCC3hFtVLjdD8jPKN7h2zMoF8kzyfhQFPd7rkbABYYPgHj7Tn2QPrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vhXgM5PMs8pTkaTjSJi5fJDazBt2qG4TmzdFMD21YgZ8egiu8DGeBRAcgWB5e4JktYTCniqHRxygHirXNDXridY",
  "key1": "3LYLnp6tJxFJMERY6dSgQXGTAjRPVeDhmcjXjUan7MPa5tbdAZpkbaJpEtHpXrc8C12c62q3Y97Ra4qEBFNQchD2",
  "key2": "4PRL4L4iD1PyEpBXsx1mzQJXtPLntWucK8A8zhr2Thd7mzdUM464Eg5277N17p5cWwYyqdoGkaHyM1QYd71cLr8U",
  "key3": "62BLeKnfBgxj8b9ZKWsVeKX3r8SDjHZVKEVvyz3XoPgPSm8uWsLLSbkmTcPacsskXk5SMhVviREPga6SdNrocho",
  "key4": "2qJmDZ7dKXMhKKDdaDjSocREvCKEGZDwF7LPhv4MY6KvpJZ5z1zdNKWub8HiqjXbxhQLxqSRr5wF8misgZhGsxhQ",
  "key5": "3TtpPGG1Tr9rdz56Xqc6CJ7PP2xx4dasUkND3m5sFF3ZnNywqNKC4eeQiXF6GiGddrBNHyDMmjwahX4G4Q4V2epP",
  "key6": "2Z3pxZQaHYJnVjhqoTpcYE8dmiE2UTtBUWYdHa7MzoeW2t4EF3B52vHd5Xtc2XBVfTyN8FXPZeTmg3et67DdB16Q",
  "key7": "4pLSzpCV2e94HkeR7tkzsnzUphZM9kSwfny3Tp6YsHvdesXsAzPFaRnAuXBJJWqqcfrqE5mL1huNNDxaarHfrMjE",
  "key8": "4njYQW8jkhMXFRSqH1aAUE9zXvd4B6tUD537R9MXjvAjSzJQbrugnZagFzzVdod6LbuTyQuF2j3ZhGS293Dfvb1Y",
  "key9": "4aRQq8m641paBeDGHF1LSioJ2JajCjefcK1x6rHMgxeWkZz2ErpnsiyEMA2YvG34bDFw1svRDNvq8F2YBcbsC8Ev",
  "key10": "55JtwYGfHaydBkbtn6K3FB1pPbz4tW8A6SaAZSKbqsbs7vAYvctwc1ygSPbc3KszwKeGDZxok1LiJZGhKr2pYgdr",
  "key11": "2BJN5RpvkRCQQsmu7sznhKBLrkrqmWEn24ykRdEXyhNFNo1X8dVQEN3jQjo6PpY2dV82PzdrLbTZfmpFc8GAgFk",
  "key12": "3Wxvatr6o3CTEb54axNLcGirtj8XeEPYSrjgc2iMfmFXw6FVpjwFAoePo8rPsDGSQvbEdsw5qsKJtkg5DB2oRWzx",
  "key13": "RbNjhGmYi8K2i8ZPEQHSX3HzDpBrtB7sUCD5vyre5VLDs8UXUZmrCiRN1GvdCz9Lj1MiHZBmzNhG5W1gWayzMFj",
  "key14": "2ujKiJYRSx5Ssz3uit9QQeYF2VapKwVynbCh1B4ZxbNtUYnggemqXVdYswT7KwySiSXsLghCgCxDMjYNzZVCsmWC",
  "key15": "65yUmMTqhGwJFSCyHaSxo5pDV4Vb5ifcgn8oidw4ryDHQdvBajuLN53yhB8g7qQXuHxm9tBSEtSnKddyaLc4FQPe",
  "key16": "36v4Ltm24NZeKBCqgRtZ7RYcFwThcs6s62ceuth8sMStSvNJT4Y8t3r2A3pAFgPQteJUDpKCd6dfkjBPRuUKQL57",
  "key17": "3Sr9gWXtyq44cfVNKwBNKPqFEG7TNpKiqpxTFjb9CSi1ugB8wYixJHeN5fVnUPTbSn1L4R4EvjWnedsmLwqrLxwd",
  "key18": "29aLdVwiDhpHy6DtL85rXhydL29zhcmoCYEVCi6mhpAVKNhp5VYgACKx41ercp2diS2dhwqFU5UDw9xMWmLGgT14",
  "key19": "3AorCv6xRvrUHr17e2Go1tZdyWA5ky52uqnRm4kVw6v6B6HUqRQrJevDFFUo3DTydJJ1ByMbJW8yUEzuttkk7G3J",
  "key20": "v9CLtKps2zBdXFhkN1EmJE6qeu4RcCPbTB9XkvfguRAH87ekKxo8UCUT6Kkcj9hGuQ2hEV5THaJZMadGcu9nnwc",
  "key21": "2QdqGPtELXDdJkHP2pEkfmzi6i7UKMajd9yq24f4sGpPforsHPe1ZjpcrVPHboPX1JJuiHkgVBXUjhq6L4B3fWuc",
  "key22": "2PhFV7SYuAozMDkekw1drBM5pKqjVJposmre8wZdoyU2BGc56BNBdeXcuwZDNJ717GMpQWcx2NekT1WXSfnH8csi",
  "key23": "53GUaiiw3QkHUoKc8PAuNQVwu9zjmqvkXBorqgqQyGHoB6HqVkaJXx1z22ozoErLQufsBAuSdRz6y4cVZuitV3PP",
  "key24": "4ktFAwepQbhcFpFZPuAjPE9B94w48tjLkKB5L4fTa43eGTNK6sxPHxLuhVXxW4jQR3MhJyzW57rguyXZ4YddUrJ9",
  "key25": "3UuYhyUBh1TwVkw4axyhv1uhPNCBk5rTFwSikEwJ1CWMXYhUynKzmXWHZoSMAzCeNZfBG5eefEfnjGr2UwugiW4o",
  "key26": "4mETkPefucZUk89nfjyidTp8M3F7ABtm3zUXzpcLBBQPbur7BCC6G5BqktKQqD7je6VLRjpAozD43YUav2tzjm4D",
  "key27": "2otucZZVYTFmx9MdqWfDaw32m5eAS7JHGGRs3xyKXcroniG4kRVQ81QUUuSa2hTDakpjWh4etv6ErHwbowtUhijA",
  "key28": "4hTfFHNmsMgCVtLWCDPLmMJ4c5Y1DgDmnTE1bBvifqPFuLQXLLwTXiRH9thNiEYCsfPCDCwBhRh5cpmj2u3stb1J",
  "key29": "5aZqR1h1Drm8iQE2Qork1VwEq3PK3itpkZU4Qbj95WffNWNTnSoTUDEDfBt8W3fLEP4am7eyV8RtaVjKWqVUZEzL",
  "key30": "uj9EGtC5ZfZccrkV3yZpKEVdvVB4H3fBkjg46nUGis1MCtQtMDZtvhkQ9FHWtDRvXM7XQ8e18mJFVaNukm1a5jk",
  "key31": "3LhL6mvNGqfpgJWdUEn5TLr1ewYYhQb5GMnqz7KZ5rqQdEo3qP7DJ8p7uNWyYtGVKLT4DQYixVA5agcBGTYdsCLL",
  "key32": "4PabDCgFBd1BA8qhPeNMeiw2jLndXzW9paLcKL3PBxviQLR91xqaE2no9BHmh7Sxen5iMaGmZcdoHe1cVjcFgCzQ",
  "key33": "3SLo22DDMcajYaX4edBHQsRXqpY4qj7wmxuyVQ5QovjZd1eJHPNmFteqrXYnhweNkKgrj1psQXTzSKvMdAyDkrjs",
  "key34": "3898bcWTLb1LMzbWAaMEuvxtY8nA1ioCfkoNzywqEmQzeTB76pcCtN1oj1MFZEeZ4kVjuq6P9S5Dpck36ZhFq8AK",
  "key35": "2bkS94L9HvyTxVGwDTrhCPi64BfbKWnw2HZzcKuwdQMnUyJzyQbxBLr71MySP2dixdX3zPmvLxMpxPJpgdUc6Q7r",
  "key36": "39GEKJrHj5LKYcgZtcWZvDS7x9CLSgjMjD7XXMe2Mafuppn7CE46auHvYqKkt5DBSVDhvPTeYwErUsF1h3MuoTvb",
  "key37": "EWweeVhySNs3Vbu9SREsQb9usfopV7snq3DhtPdk765XgC21JL21jJ1riS1dvYLR7gk9NUZ197aqjLUwjg2WaXw",
  "key38": "369MrDUXUiDiGdj3psNWBviZvaQoT85cPNPohDbjDVcDcmKbZ3SgmNxqnLqAJhrns9Lgn7RUHE2SgkfqUHuAw2ht",
  "key39": "5gJcpEnM9bSweCEuFT3W91Lw64XEFrUR7nQGZg4QNzhGh4NKaEWvwrcYCwDTqEQr4MdbcyYwhfiz9zPM4StgY843",
  "key40": "2muBo7aS8j5V1CqywoQYGkZ85HfDxH7wR7KeVaQfQGsYF7U7phtPjYUvT6syx2scwf2o7jE9tH4Cw8ZMnzCrZx69",
  "key41": "3ZTTPQ9ucBRA1RJy6Fy4kZZkJW5bx3e6ipCh34YxteHajXQPotUogRKvcJawxnmJQMQGDhRnKLqEipea6rGpYkpr",
  "key42": "3K7AVCxr2vsXYtUqNZAfbniKuPNjGwhLXqNtA7L2xXMQLBMKkWJ31dRmrtrxs1YZWwsYku8oWLKeMLGE6APjMfgH",
  "key43": "2QCbFLyiTJpgGy9y8RuknMBxuSVZg7QSHL3iUnSPXkV9XGvKXM8pPnNhtH6Z217qSZFdkN7gx8PHQe35snF3Khbe",
  "key44": "3958sgq9YxXJudXkY4kcJBZZb8yYmgta2L4CTXmia1PtqhjM3r6YMUurFtWUtiuUwLGHkdqNgxDFVg2fcj262YDy",
  "key45": "4DBuzuYBwFh9hQ2pvbRavRsmLd1potyi3i5sTAM2iTsKmJmyY53cwULPWpjtnHZwzFuZ866UtGvuE8KsB2rLBmWP",
  "key46": "4te8tEAZrJ9ZyDmzVyjL7fawr69WJH6AabkDNrU4S2ZjuKTKAirAVZwWzHruVXkxH64hZFzTnZKpzJy1FNgTPq6E"
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
