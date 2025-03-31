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
    "4HYVacSk5AMdvahFzUpncjcNZvhMXHck3GBJnu4zbfZeR9GsJ9j4LwFU6n5QY5LxZMXFUexYX3A9RBM8zu5UtAfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btFypqNRWaUkxZE6uPtNoJvT8hWAPMDoKstZakh1XWndvsfHrKzmgCo4L3n3zTbE6MgriPymjQsxPSP5N26giDc",
  "key1": "4FWNYpmsUGTuGRfCAj4Q26NejFtjw9g8zMhrC2tSeTmiPkSMnkz6GWGS8h6vGAUXByQxR1sks27VQACyq1bkQkFt",
  "key2": "5yvGGfTsKEtXoWX5CEDkkmLGDMeRBuqrKEWuveiM5VzN2auQh8tTWQfs8aFMewqkCoCcH2CfedosZ2AbNvZdZRvX",
  "key3": "2wKGvZYDuue9UCGvfi45BgeMipmbvMbGKNJa9b2NNRwKnFT2f7jf7xz3iRA6KVKEhNnCvk4NLFp1sKZWrGUqray5",
  "key4": "4RuPiMGmjZrymaqKfNntKGqv5mYtJdKBCkVVuud45paQUwAabWieKmDDswUxEjLwKnyzoH3HFVFbzBfH3Byx5iGx",
  "key5": "tXd9X5wPF1js1Q5kjjJFiUcA7SUupKxJzcwJnfYxL8Fcn8hXtPRT7qcBef8es2pPYSuNnAGCQnzsPXopiVwZbX6",
  "key6": "3kxUQHfDkETvs17W1iSua43UzDaRoT7WpDorWuoj4jxaAxHSjXvJTsafJsbTgccg5g7tPBixnLUF3J2xtXeWXrR",
  "key7": "nkvKzZD9h4a18tddXjvwbKUkNwnE38zAwNXJbxne4ZgK6X2X7E7RGbMZd8UsNbFWExNVwBwUGvxQCDjnuqyG3Sy",
  "key8": "JBKpTY9UxvVD1zGEqLXSKGTxg2TMZtHBqV8Yx5ktrRkzPrjkV5i7ok1cVxBDUJNt5SHP3WncUUVwwiCv2CBwhjf",
  "key9": "8V65vKHmfN4jhBASAVKNMHena49kWkizNcQqAgQMC2mknMctpoQBR3EmxYXE7DU17A2Srcr1JRYDRjEtcon4JZ7",
  "key10": "4cDt1E7eiw12oykTLokBdpRB2D7t44ai1kikqzBqMacCUnhm4kmFZn7AFUnqLmN9pVU4aBBFwNnUmjZsC5u25Avr",
  "key11": "4iCxCxSu8Qm6c6DaSkr9XFxNxstW66W6miFjpZgrWJGTTek3BLetNuWYNufrFA466ydy6H5enf1tAecz7xxmZmqS",
  "key12": "jSZXerFheBzNzgYdeUTboSjca53sv68cHmDYcGBBuBsgeA88nnYnt1P8astT53TNrh9MZjRe5Fbi2ysRbah6rS7",
  "key13": "64Ad51sF4zVmAJCTA3L7Wy822MoQaggrrgSanz2LyEuvQG9fuVJEudghwbkjUu5FgPr6Xw7c4LJg3cUnwjsUPhdy",
  "key14": "51x3ivGPHsxXrpYwtKmh5Jkjwn1toKoiF9SFQnChXMRx4ygxrN7r5Yzc4RjouCfx1bvp6EHGqCmtM1YmcyhCtC3B",
  "key15": "42SCL48nD12LWXCrCPgyov5PTW5NhtmagtibVgtRkD6jjgpBmqjJT6AhUpnr4YnMoxcmYjv35JQRHocLDgBf4Qac",
  "key16": "3nM841JvV2CJGvcefASKtWpm84khvEUKdtW8yY45SpQhTRTJdLeXZjCGmstpGzcPVKM2cNsKSpU4ja1ZDBfSdb9n",
  "key17": "4XY9h3zTbFfL7JknXHEXR5yP3ua7KQS38VYhD2cSFJBprtjMnmq3HdYuy7btWTGy4HZUX9WFqFpJrnfRZya2MYb1",
  "key18": "5ff7qzwdwgUusT7yPGoedMGxsCDWNh3NVUrhKyU98ocNnoLpHyJbryCQiyNNv3G3At9uU6ujpCK82kkqQ6mnxgKq",
  "key19": "55FRtEg9rVNpuKr47LKgagtNCPrryU7CJdkMMmCFPPYTYJEnddETbMTWNVRZysfc54dEsRbiUoFmSBggerMRCAGJ",
  "key20": "4y9ckiPq5vf3q2z9gHLYJyuE4g2k8ryh6UtCZN3M2cK9sddJ9VjjsVAzSjM8r3JHtdNK55X4keHCrvHBbXoc9rhu",
  "key21": "5GGiLgazayFMcwYngcfGy5Ks8TUyJuZYoU7TZ7itYb7LZTLPDZkE8oq9SjWEkyCDFEtESWd8599S7H2HbEKkchn2",
  "key22": "4BhBvmLM2RTvseE3LuYHseXExoMg1TD9VLbjEZbQwceX2os43BkRgg33bNpYBQ8dvka8qqcTmHmvMdm9thRAzRGd",
  "key23": "9GiRdUopNknhvLi45hPgMWx3zyF8VfjKkZ7TrkwDBV9keM2hCRXaQwPdPdXMp8vCJ1vVkqaMtB16xPCf2yQyhoM",
  "key24": "41LQieU7QBQ9yLDCkoDKfe31FqyHHM9E8kc51MhumDTWQAK8KufRd57xZwv2Xf4jmsUkaJL2u9PUuaVC5TtEWXFj",
  "key25": "RiHJmmv7x7FvERoEnAZ7xif8LmaAJZ5jpxe71afWpdcN8AmorfsVUcwyh4vT4XhYZNAbJETk4TP56dS7Q6t3BZ8",
  "key26": "8jYWv9mQ2MKsbVHuDdWeynFK2QZVHEdZfnqsXAQ6fBz1998HamwaLmgRZLz5AL8h9dqbWfb56EFfQasX5SyV2tk",
  "key27": "2X4gg9sWFTH8NUUfogSXXoM3C8D1bXDGYrvbs3Tj2DBscVKSSzQfv38QsJ4XjBhbGiLrRcZ96gQReQYkNa9mCYTC",
  "key28": "459pMcD293sCeGyRQC6AJRtcVx1WisXiM5fQ5Z6HcRvDe2JsbwuB8C1kJDUb7hkBvhY71vjYT5EA4cDxT67AC4b",
  "key29": "4phkVffq4kB5uuv65WKYDh11ehPM2pdCZ66RHDgjt9LA4N4DE9PGd7PBzBcGuo6UsEgXSbaVtWxoErLppaY8WBbv",
  "key30": "2zxoK4ePKN5PZYR9r2cuMbPZbgmydUznd6CALXDyBGdx1omrHSxfrR2N6sHRmRYRwrCACX5xgGTVeJH2swEj3mCr",
  "key31": "2fqvN818UmP9NrUunZHMwb8CC5uFTN9XXg92NmbNiuy9MLnWTLvFunZd2KidsKW1wsPYzz88Xx9GZwo6hCDKXDzN",
  "key32": "4NKR2ECTSfwpNudW8SB3qtgVWBq3NeTmLnx8YAvKueSEYDWHHv4aM7kX9dozRYdJFHz49mpgGdneUffnauMwXPUU",
  "key33": "3aeFA1gDzXTPdR4fk4sr3CTcSvUWFXce8q8QBQrRT4vHVg2v2zw7goy4LD7tqKa3VQQLRxZbAyC4zf3iAAYBzuxM"
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
