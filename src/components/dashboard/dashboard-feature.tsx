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
    "4gRfpZG11osKCqiNCCFADoAU54H8m3sDTwQqUA7TkXzCRJhsiYw7ghvb7n79kBY6W1CpLcgT1N1DdBNns9t8xDj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcXwHHvZjVs8KkAFFqb9gfdRKuEHgwmFy4GfZ6mZTiSKtK8Vq1Cvus8wLjwsvgXVGs7BsZnUu8A6vuw2djkGVoF",
  "key1": "jH3NehiHPY3FmWddFBa9p7TtGwYeTV5zdstRwKwqu92LeH6TFqAKtVHhaj6dxUNoiMP6HTGXQX8hCpmQrsLMefX",
  "key2": "64qyXySYRd6yTzPkdqDknBWkKkzqyPGTPaEvg2hfUekr8aaGq12T919DyvAPDDGoYsYBsqz21378xDASC9rUsmdS",
  "key3": "5B71i53YsFwwwubEHsjCv5j1LdXBPLv3vu1K3fG2x9NVSRfdHGCsqLYxbEgjEinHR1MJdHbksdPSQkjrN18CHiBn",
  "key4": "4WaKsrXLRfHiBkUdtdefxdDWL2mMRfkXkoQZopzuoEHMpTkXSUKYWgTmm5QjcSk72NYyHpCXue7Ge3EZJRPcKPZm",
  "key5": "4Jc6WpbJtJgxegJL2rr9DQ1kpdTBXDaEn9sejc4L1zbaSJZWuxRcNCMNJcV3vZMtptFxkbMhym14SZqVEzC975wn",
  "key6": "2psYNBpax7gGYMoerS2BG5j6msoodMHWBhzTJQq2wavTYRfW4BoNjMoV9ckskBBzXY6ddcFz88BtU7rnS28MT3W8",
  "key7": "3Y9bjK2UrPtkq1GCria3P1VabtNE1NmFQbQnsG32ryF5gWHm1ncPpHLMt1nk3eDHtfGjML6CUja3V9FqEwUnfhtp",
  "key8": "31bVheReQh6aXMYbBgnMxnPkGzbV86S2bDYLsDJ9nUyELHdqpQJuxuaZctxC2aZezCJBjkgeQCpC6rfWwH3nGxqv",
  "key9": "3zmdnvjt4K1pMUKpdMiiugPJZFHhnA9FnSVkyPqyaBmkGznS2Lw4sidhrmeyA8dxyqtzbXqUTrZm64RQGj8VNuWs",
  "key10": "48TDQDygRJ4NVNgBYjJd3jn4tWCmMP4hHmM96d28VftpEHNq7CtwaEgvsuvS64Q8tvgcRYSeTMpgj2K9Hkixp2YQ",
  "key11": "ZGvL7NN9bzDAmnzqq9vmUDhioizV6rwPshkEjcesx5FBDn1CFCxDkpUVUEjMkKfSyf87hJM5LC4yvKYGrhSWE5X",
  "key12": "2Sijcv9U1B5eRUyc2H8fC1keWuGYtwogEzUMQ4rRcCiSC67mAemqskDNxQph4UgikGXiHxsTaDcU9Kdr4BKffM2s",
  "key13": "sadxRzNWcCmv52cHB8JDDwVtB2B5MHzxaZwRi2iGTMJLm1sxvhhUiET6kgKSqHNYtu2r1FBLVef5Mf1dZudCCnL",
  "key14": "5tGZeU5GjqvCysDDK5Tk4ThgPq2dAqwEV8YFEw1QBXRdck1ubYdMmXXVorMDq7SJLGpySHRm3Rt6FXwp8PqeZcD8",
  "key15": "5rFULp5Nk67d54Fc98PYQmzAUcKrL7AYKZqtZdyPdkU2ZdHcLVxdLwAYHV9Ty1SkvidTh55vr4xKpo9iRR22Lu1G",
  "key16": "5yhWD6nPdf2JrSKTP5sFm5ocDf1YXxLzhmr7TVmZi358k2w1Qn7YyoKo9KQzTnkwKe1Dz7HwiRBf4YpZAPbtve5T",
  "key17": "1kcGZ7DwF2rfk1Hbjim8Q6aruhXK1RMBzLoF36SmFrfBu9XZuM9GTvJ2EQyDWJaiPjWA91q5HG21maFvyvqhRm8",
  "key18": "5bxpPrd1xDdbY4cPJuAWWuBHYNUiUeELPsMTCNKvb2aMJrGFQHaPgnm9pSTS7sBgCvvDEUYAL9Cf1DQqQVuGPC5p",
  "key19": "32unTPyydsDreuirpzHf2q5fZ1qJBFBPwPLnT5TQfdL1mwrRwSumFc5f8WEN3LkJt7Go6zCML1bJ9NgurujYFbvw",
  "key20": "2d7EEqAQhyrnCTx69iDRW4oaoWQd4CMRGQEwvTQpdKX2KhuvhQpPmMqLW11H2ThBDCzm9eGDG9YhoCnB8Eet4pto",
  "key21": "66PS2k2ZovgepiWE5D97UpXNNEgxCEYcvwnK91HfJ5PWka2g64xgGtNyN9DmwupeUcnMNMraQ2uPirFzQ43887i9",
  "key22": "2yUGnhWPZPHfGegeaJ5kundmLDkCAvUY39Q7GCLw1gdqAYaMkwMg5vCCTGVM37RZoWQRe5xBhnrHDqwweJmGv9nJ",
  "key23": "4KW4e3QN7QeakXNxP1giQzWLTnhi8aYPAbC3hGqGErqo8jsiRYoRUKM45ADQ6U6D61qGU9jV3nWqwSiQ6gDgwBYL",
  "key24": "1h1ymvLTBvv7AMsTkUX3Hd4X2fk1aeH4raa6WqzGdqHAAmTvBk7Lbc5Mdny8crmVukkfWE38jWx3ekrYh6dRu9",
  "key25": "41EwnSc3HiYgoX1984qTbZaM1qr1EuGtnWz7VCGZoTkx9dj7W6U5n7nSzE4T7z4SHzUc73EQfb2WNb4fTnbzE23s",
  "key26": "bozLD35cEwbSfm3HAJmZT8K8CCJorff4xpejbEoz63rs8RsymJftg3uge2BDk2Vg35onA2mMcyWLNGE9vcFqo9Y",
  "key27": "4YQ4prvHyKpHxiXeK8RSZFX4vDaLppoRUf4rrkQXuvqQhaXQmhA5xvgXi894KMEFKUQrWHjL13cveKgSaaVstAPj",
  "key28": "WtZR7i7vvkgWvQ1sjSZVjnuRXKZBJzhym7R3UR6Dznnj43LPXSSow1kVbYdXU7fQvbatXTZQQw2GSx3bn6mHXuk",
  "key29": "5aEsAQ2PPMdo5hhtTZbWz73zpb1vysAWXSVeRZQCJHBykbuXyhBQ4zKX9Epnipcy3KD8zaNHfcHh1mBeKgxFNA2Y",
  "key30": "3eSvarYwinjAnm2h9RB4mMd6Y6QZU7irj5NsvBmYZekSv2WuPwU1UJiDmHiosBKSqj9QxhR5s7kYRJHeWBQDRsQh",
  "key31": "3AFtkmrZagUHDPu9R82uS68eHqHo1P6A32xD4eP98wZd9eJUGu2BGjmpYCeumhkfJBZyoufv8XauBBDtNetz8Lsb",
  "key32": "5tA68tWpgvWiUvAaipu4cpDG8SMWBGM425st5FF9fCTBhkRPACTRbVE9rePZ2yA7DWWLwoBtcbSacYBErVECnM6o",
  "key33": "3xiHdtYHNYR51oz2Y9uncrY9KUDZHB8UPdv1d8n6F3eBP8zVSxkXwmRVbqjbCRkL1AFQgiJt3ZrgUJUsoeTDgwtL",
  "key34": "2FrfEE6avDGXbfBjNbFayDAFkatFzuszDNeny5tPcn1dPAPME4w9kbioU6kFL7dkifr4un89649nEy4rGqzRsqtK",
  "key35": "fe921DMBH1WwiBxbF5i5L6SC3tQDXKbLNrniRsnrfgxqeuaMSzFCgzYD5bujD15MnusMSqWwxYpEPhfHG7ZHV31",
  "key36": "x5xQVyDkyfigC8wMNwHCofz3E85zn9zozLUg5a3hYKpcSzqJLUEtu13LkYSGNMhMux8vTBzKNeB7RpZKaHzXhXj",
  "key37": "488WH92Uuj2Ffr2XvzKZxhM4MKvMfr5mY8DMdLReV5b54cKwhsFGGADmutK3frN3CheFtMhVSwiFdxvZPVodS33t",
  "key38": "5VeKUHTV66RFmu1Zx2wqjpL7WQ1YF3koGBWAnNnGEwH1aQjMUZhZp7UWZqNFUThQgKg6udi4R4rE42zomvUdYp2H"
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
