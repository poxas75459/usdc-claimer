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
    "2B44xNkzPkZrHo86qjmzYmSijPumuHc3fZFtZQxhBuN1ZHbKZ7YiWjHGSF1HwqLSkrKrFPSnhmx7EHoyUEHeHd5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qpJJD2P6Xviv3o1LaMt2K2bRRPZ7k2YveJErzeWuQGYfZdkF1TjbFzMHwybXjHLY3pHju3uzj5B2Xf8YxVe5Agh",
  "key1": "3zzicRUpNDZR8jXMpRQ376gAafRqeo75ZTL7ZGyzV2C3dZ5mAeNBYmesQsw7qJJ7yaCMBF9meubiFNdQu6xudYrv",
  "key2": "4tYYDFvz8YqJpJU2Pdbm9vq3pUM1aihVdBj97nZ2mkL6MFzR7fTNcQmh7iARgt4QysKN4vwqDqxrA91kkGNLnFfW",
  "key3": "5rDNvsEuS83ybaxyCeJaPLoTnrLEA61LvSR9DfGpoUi7aniuTE7xJGR6qvUaPma3fdtxEbFUEd51bTLdqQZwxfBJ",
  "key4": "3sbnHQLfHVmfJHi5TTyY7NEWvtNYMc946RTYsuXu9fhn7EeXdX78fr7QR8JYZp35Vr1pPjPr6WEWuyaPV7NqabvH",
  "key5": "242z8XEtD5ZiEQRvr7qUCBhvEGh7x5YUhuArM2Rf2GmS2DzJXAkNAnSUhuiSWH6dK4bZgw4Fh7z1sqof53EW1xcP",
  "key6": "9SouCXjWGhQHAaLXPpreCMXHpN83ME2SpofY3nRLRd4xH2Hs8Hb8gEZ46Ehp3H3acwJnNNmhP8pMRrsxYxM5TTs",
  "key7": "PbCPBTuubuCU5yZRpPFn2d6H32aw6zqD2kjSCcpPMhWabTekkEygz8zL6aj4ibUxogcCCiUFjsXJiJBQAczcVz1",
  "key8": "gNj9odaTojk7t9j7EUi36xaSNjUmiHTvZFtMDGjFeZ6QoyTJZ7trgnkNLpj6mtF86rFdEcZeWx1R53YXHnRVXnh",
  "key9": "2gcumxS9fzMRiTxt2e4qFQz4WpmEv2GqAyYn2m3LSpVYmXhjkSs9qDcvFTUejcd41EKWMAYZQrfY3sVSz8toQwhY",
  "key10": "dLft1ZJ6G5drSSGtmmn7UWHewkG4vGmvFEGAFeX5xHrxA5AwXmVGrJeGd741Rx3P68jHA6MFhd5gaE41sTL2FXK",
  "key11": "2YwjJBMNBRjwy6BTkLK92bLZe1oqGgJy9iK72rMBYVZJEQGwDohvV1G6Ka4ByZnsJGZDYqxYmJrh5AwnQs1M4qad",
  "key12": "2WB8xD4EhBSz2MSfJaqAe23W2JTuwHXcqtChKsifErnyRx1fNbDskEtw6XDjXyfpCdSH33u9yM2PikRSVNwkQWBg",
  "key13": "5FGdcXWEGan88jg7AGRXCDQ7cNPBUZ4NRh3CPcsCRYrUQp6j5aFHF3PeqfnrwWt1ToEZiXYM4RYfPtTgYXyM5ufN",
  "key14": "54haanio15uyRAKopCZYeTrkURJD1Zup9sN9H4ZV1FPTgQYeVrQ9TRTqjRZ7TTDREKfCJn2GZMi8GUZC6WmQ8X2t",
  "key15": "4s1nogT2MXGhKny6MJCus18AT1xm6Hx4ZfvdpdKA9Ajgo58YCJv7amAqxu58vHV9vA8cmAUpKQQGJmuNLqQLxcfr",
  "key16": "3tWqU231dmq8YfzVf97McRSiAcs6AYpFurDT1mDqnQR6chLFDKhLG8n2dsCmyNyDg3FHYGo52Eao19NE41DXoaR4",
  "key17": "pHrZUrzy3PNVMNzfSQuKbLuiYURLPkHGH5h63ZkfgT9R8WpP4F6n53hR8A7YgG828HimYhofvCHJhJGjwBdRJbp",
  "key18": "4CNqyT7bLsN7xKKs9AXF5tjzgG1fVGcfoFGhVCtinG55qWTBkrCDhha3pwRf5hYTYo7eU6s8SgU1hk62NwVNutz8",
  "key19": "Ar16vMZvYcmdJW3o99CWbk31tAXWSwmjyDRSRUc2BZqquRYxdwLjykZUYAZ1GmwtspUnde1fLABC86qKnLsKwiG",
  "key20": "2T4NSd8KxwkjSgS2wa7BKZe6Gf7AtUEJ94rS1UP7qHrpzHXN71CkJvF26dqWtr45wVARTyKe8L6LXYgXwh1Y6vyV",
  "key21": "F4aQcMV84YJWefCbKrjELDiodtGWwUHzkLu1ALogVJ3yHFGMB5K2mB4MM8PAm1BqYjQhgwqWYzJp7HKQHW5ZuAD",
  "key22": "4En16BKDJsc7CqdfUYA2gKsYYEiUzsxJW9C9J8P37Zm7C55fuRSYwXCQX26E5sAL5k28GY6yVnAMRsUftCXLQQkH",
  "key23": "2EcBMJcxRN3SuwdQZMKd6kL2auAhtbRUQ46Q7kZFmaKR6GXn9AotRTPW7oHHdfki2jVqbAax4oKBTB3ceMAjUFFp",
  "key24": "4WEp7nXCry6q3GbbqeLaQqKgGBHZpFdEYyUgkUpVUaDAbokUvYWyriDxonWc9wygZeJe4S75VeYrSR6F57d7ASUc",
  "key25": "2AH12X7Pj2ZwxWnbkFdXowRrwLSuP9hX3FSeDLAhx9k99ngQcTq5EQCqYQTFyjHzPz3ZCUntDFiJe8hp5J4RUuZC",
  "key26": "2qygMfv6rTcXmCAGrhXPkWTWFfaSsRZqLsL4jWT3kqZ4zGaoud9Uzgwoy8W4YkP7ZbTYEhaomY9hjkpCSTxFDwtg",
  "key27": "qSa6q4TuAFn6BRHQdrBaTMpLA55a7iSjtrZwC5zVU1HxrTqSByqKPY4e3XetRq8UkaSaWQCafYPNezctrSJrMgM",
  "key28": "2FGTzH18Q6by5G8Tg58NamfkkNegA2ee2pz3sg6Dug8PsvYBTWQ3dcykE7X8ZwBdWqQFx1bVd1kjDpr5ntKHmx5z",
  "key29": "3gHLCvVCAixBaVTMuXumHWk42ti587WAMvoR66NjQF6csJRiUKfHAY5vAZC5r5hvFACGN49514dNJ5wjhH8sfcY1",
  "key30": "5t7RZs1jegjUUqKebkAtmYiM71ym2YzxLHsXUrATYu4qVnfeTqVzFxW12kJ1SpePP9cM6jbj1JAn468rmv1qLrT",
  "key31": "63oBZNTDChoLZtaGFzJzk9QF4GPkCfejB4sJifBERonYUhiSezvgWRe58auej32kkTyTE1ENPio7u5rJPZ9wbUcq",
  "key32": "rKBLb6PwS1jo48tDcHXUhpqagYpgXuVHWRVu3fGXzYNRBaw3pyCGC9TsUi8SQbWGi2yYbkpLEPCf7NaCBfuxRyV",
  "key33": "fTtgboDj8zvxPLidfF7jniyUPr4UXY78BJms9pPc6GzPUsC1H3BRcZXFadFfTf4b98xJmao13XvS2EZ68PvUBYS",
  "key34": "674N9Jch7c5ny62R1wFb18rhyHZfWeNcRSzZW6tJuZ3hQRKmhNu6KqQjFnjw1i5D9UJ2ysStSe2jNcg5ktfbjXvm"
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
