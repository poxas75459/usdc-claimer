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
    "4Sj8X35QDqR1iCVtDHMSdEuNRY9ciZAPjVXnUCfgnsAokLwKBHWTeQTwK32JF7szTHnWqEPTvhKX8dULCAZh3UEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSZ7iMLyceVBc7tMKachKmeYfJ1RhHDsQNcPZUVburjFJbSU3fsfMxw1Mf8KtAjMCvPDiJWeXoYiy9yC6hLbwHE",
  "key1": "4cWyKZM178rDy9sgVQkXmwFJce8pk3YXwydS4NKotpq2D7pdKyquX95xuPpE43aNStpHSeJkgZTu16ojGg51Jhfq",
  "key2": "3pNZM6eEjP4WHKpGTXaX43vvV37AggLiBzzFJyoajVeSKgjTWomZrFGXGFsZdSYe3oPnmJiGaVBu7PpJrWUCifgd",
  "key3": "NpzLmHxdxzS64PSeRuWa9ruxZZtRCTqXU5VNhRoptfYNu92fGBBAav8XNa42kXC3L8cdvby8DvzAfT82981b2id",
  "key4": "2wNcEGLujkDHfsTQTiYuyHWrWr6tuQtLpy6mVmCgXrmAo7VPVbT3s3VypPvu3pX53qkg6M34cEpAumsi82bpbCf4",
  "key5": "5t5Uiz3gZbwbRCZ18od1FbUM9sjsNQCEYsKaPPh27GaYstEFQfKvrCCimFpp9Zm6pVi3AY4hooyDA3jxcXaZJdkY",
  "key6": "kxyZhpBVMyu62KzuVCJ6R9YZGngVCRxE65pFubPPZB1sawZ5jvbXbyVKdU7kdx4dPa2UURo3nLSDu5rWgaMV33r",
  "key7": "ohSvfpYwDVQJgbLbrNyuVgpfcU18HSjYS1Tjcs566jkKjmHYgPovcnYHYzD9ssobcjqRKLdsPMh862o3YeSg4au",
  "key8": "5n17S9QHoBpyPuBSGNitRTv4PqMprh7efvmA8uThYYvYFtahydc3PRjmB2mZicbjsiXSPRxgLsRXbvCBmffq5X2S",
  "key9": "3tvxKD7oqHo1eFW1Lq5UHpFH2Dr45d8KchKxSpgJzR2JDcFkEjvCZSenZRp7vXaxo3rX2RF3TprZNbFRyooUVbDu",
  "key10": "4XRRhFs2BiR1F96CcF4ErR8PaYH3dhQRAVQPvg8vT5rxj1kiLG6zQCYsd4GLuABrxJmgeH4opbtBEHpNdfquDrdB",
  "key11": "3gpE2kPxKXmswovANAo1vvkeUg62nyNLHvtpT7TAqBrTj7yVRit9QnzovbSN91qZbhA1QGQNbwUfEGSKGS3iPurk",
  "key12": "2G1TrE6sYH6m8ymvXBk2GuFVN9g5TL1WzGuWkP6PpHN4ACSiSzJdg43ABjR8TBFmrDm3UHCoPCBD6fm4W7ty3Aj1",
  "key13": "2benV3eT5dMeEW8rDVaZPWyodnAaqXLGuArUtabzoAxT7ZCMFCpHVguoJRmNxvTQurfGo7hhEJxUBVDuoeYuhpye",
  "key14": "4hsxr1zti76cWxNVZmLB4hLBTWoDPDW18wm9HbyYk1uVy2FDsQ7TEgpgUH11QYiewvGBnCP2YcmdXhCoYyRuuwei",
  "key15": "5hxwGDKGfLpf163s2PzxeaxRVg5hV2CjmGRZDxG5qeDsoxSAisamZcQLkhpKudme3wr5C7DidZEyp89NnMc5N7hr",
  "key16": "2pwPs5QtMZdH3yiDP13qQsxS8jTJjTMdmrKH19UvvKrC1SydXkhZ7XCHrRMpnweqLn7xYQEUZcAnwFcNnrPJ26nf",
  "key17": "62BXKkVVpvSyG5Zy1VtBVL4zNeB3mtyxcsezeNa5zEdzt1RaakxpTJFEAAGScHXiPMPm7oSsdMw1S5q7rCZ3UFMQ",
  "key18": "4FP1AnF7wSHhZTNKqo9w5HUbCCQTTe8Ue6CDf5RNShU5HVKuZiiUsQAAK4JfervdzaWd9WvVJypXuDrSMdNHtRMo",
  "key19": "3FurUa6nxCMmZ791zZCC1NDa5j3vqmqJ34tMYWgCVYkNXdzoCsANzNgVe9CgkHw4LqTPp7mgZ4EHoGK4wc8J6rVr",
  "key20": "2u1usKiCCvDHngNby7rLGavi5SEUCKgWEddSdTyb92dot85ysvzqtrUTnQRyFpc1CXv1HSvsp6yTB7mDnu9anNmK",
  "key21": "3r9xheLxQuXR5ch4GeuhwE1qrVuBCDyxVaQXV7kiFpbY8ko1ZmVNb57CRrfWpcccg44dF6owihQYnp1gdsTYwzXt",
  "key22": "3rXSLbpsyUP8yavXsB5TRBvwEeAdxnV3fxSH2AHvKVV9PP9UVA4RRDhSkuoXX5SwJHwpnQmDKMjP484iGdCsx6oR",
  "key23": "5NZmXgKZKRveZdBgSXiCzJCvgDKzZbu8jLvkGfWZUNtoqEKJkBdn8RaTaNdu6VZzbPiUmtkTkH7JBWdpVU4LEkJ5",
  "key24": "56wEpxKhQY2yKpyFbLDCHhKHvV6SgiTfeEcAqRwnTBjgHwFA63dSKBb5GDHt8vJw3TzAFNfXnZKi8P6bDpiH9Xpt",
  "key25": "3qyo7hNBhMpshBXNzXzs17oV6vYMRCdb56PdudMJGpyjb4t69gAnCNBGXKeTkCxSQAj9G38ni3XvXN5eiCWr4JGC",
  "key26": "38C9DuCTNGbUmQdWhjEq2j3Pz68Gxpx9gED43jz6i6JsB5XUQictyRQ7DjpkSxy1jNtoj4DJJeFHWAQovEqbwVUy",
  "key27": "2jbm5xnsZMXPB5BUuHsDeyCAByrNvJ3pFDMaLmh9MeGsXqBmmaU4aXiRXNWk16ds1DDiMyaxXPzuD1dtFJZn8ELk",
  "key28": "5yD7ycqHnHLHd5FdSy8eRnJwoV3iWGrhq7nFdCQeS87kc8ab1u1L59VrUfQncatuapHjwuLTFa6L2P6wPnjPAtrX",
  "key29": "348nTFigi62BSNuHy14bMjJS2VWcVEcgf7VaurWUkKqVBQpmFJ5vj9MbqS64qDMoHQKFkVEPpJWSLiJNBMEvcFNd",
  "key30": "38q26GuJRow9oQuo2ctoq45m4YvLA9s9avuoj9tCVT5u4zWatmPrFkirjmykRpYhtQS2qb3YNfo9rZ3jykJE5WFW",
  "key31": "2U1wSx646otFGM2RZogCfjYqGV5HFFVRaNqQgJULpgwb2m5CPupebS5XBY4tmPmFv4gPjeBHVcUHkSk36U43Wbyi",
  "key32": "425Tn4VM4j9n65q8uvuQ1fXzwYbEa1BRP5Y8ECwpMLBCHEbZRGaNpRausF5Y11Lpjqt15nMa1sgEbskE8rnmEtLb",
  "key33": "2ZpzuYFzRAeyHiXVWv4Sn4ojWsGvrM7fVMBv8ZDxYpfMchbDWCZdZNxS6YHYGMSP8VWCM5gb7HmWTYa9gskLHR4s",
  "key34": "33zoMvqeaszrkZpLNJWA4f2BqYs4HALfnJjTvr4ELcf71XDMThHR5ofUqxjr8vKnTTny1kz6oa48H1zkJKE7DeLD",
  "key35": "28SAf44Ctfq4GLN7Mdcc3CxohbwrgJBwXtiySeH43xgnRCwXTdJJLwcUZoG4NpoYFjkASPu8Qj9vcokXEXZNMkeK",
  "key36": "63es9S7M7V7QPw4GJ1eZo7jtKNta7onyXfgfpQne8BDcXpaPzFFnTqRSG2ZGk4TDN5LqT9xvApEn4p6XLCvf1rjm"
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
