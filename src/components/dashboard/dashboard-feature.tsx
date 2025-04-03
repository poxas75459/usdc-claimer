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
    "3LvoDXyJX9Y91Yfv3GhxKjEjra9SLVy3VVwH2sk4H7NGvp8HFNtgAHRNUXqvRMtDtUVbGWWaRHSAkbJSJM9MFp9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EXvJhcNufpXd5RWPiBUSVVeQLdb5MmKjn77nYfnKqbw7pDGETgzTMWZmRApwFHq6yMP5A63dA19sCVLzKz7k8W8",
  "key1": "PgxLzpCCKCRt4wCieSBULqVcSqtMUJdZoPMsna2LSags6HXRah7PraQGY4aKCqyraFX7iUMtC5MW2suiTdjamYq",
  "key2": "2cAbysvMpFYA2mTziRgkuFD3EXxsBcEWEpTqJJXFrmQXQzVk8edr2M6KnoPZFMgYVuYXxEU26MAF5Y22fLELvnwm",
  "key3": "5MZXeFRQXHDCVmHiaWSodToJYEda2wMqc11mDk7sx9RvYxvddedqd9ZTp9uVYGJakEnfFVFcCYpxKzC98bTq8dGG",
  "key4": "3pUAmDEqP48WAq6Hfqn3Z1QHqnWKWJJyWk4P5rP3gMq34RDVvgWW6vBKekeQTRh25NzuirRHgd8qLK6igDq3FUcg",
  "key5": "2ZA3poa7TYsTuYB8vHT1Ag92d9bCs6dSadDbh3KWsAhpzzAphsPiufRPEGAG69mRV64Uq5kakvazjA9dF8SZeo48",
  "key6": "5H43myMokX643RrEXi5SaUpNbEbWXTh1HC2vhaJVVjMhn7FHSyPN9apKFaAEu66qvrJS8p22tVriEmQquovGZZdW",
  "key7": "2uDhakfCuD2ypzXo6ATwhYEuagiFAiKjY1uD4veDKBmZ1UPgmYN6UW7L14do8ZU9mTEgCxXtmZRQtfD43h6L2VcV",
  "key8": "kYqVqQCqVE9smAr2SW5meTL6K66mviG7tgwT8HSSkYrjKiVn4cVA8oYMNGAc3hYGTrNphymHYbCa5GUgdBCA1Yc",
  "key9": "3KAJ4THeScr8GvwfWRnBbQs2rTkPpVZBewbVHU7HdSLgQRLUczByCEtWi79KfJioj5P45UF5Bo5zXjRYs5JMMZKt",
  "key10": "2GJmULgSia5krosHotRS6nNXzC1ipGcRRFJEQY9w3ARLB2CTovcQfyyf4UigK3VvFps811U9dGnRNVas9AxtiJ26",
  "key11": "5W1iQ3ANK2mYwe17n59b4GrozxxHWktnXjsyYtHxxWCm2wxkc1MCmU9rkVYXotmMX5UDsJ7eFAJ9vPLE45eofULQ",
  "key12": "3xi1sc38G58AKtH7AcDUqJz2h1HgGoN1NYRvsVWuBgproBivuU5oZ4aPh8emMWo17pUbmVTFXYFv1DCCvZ3xLpQk",
  "key13": "eZNiCncyRfLDyUdDgCSGs4UwitFDiyjnNGc98FP8zJi3VKw57CH9u7jdu57Sk9MGSe23grJMBZnwbaVUYFUm5Zq",
  "key14": "3oVcUt39EWgvDbvXr291ViEstMBiChTA3Xq5ondBPSaisTZfZjCvnrdRzwDNa8TvpMUr1FxZfFWfGpp2hdHjsjiS",
  "key15": "s9n4CuPrfSohzEr4DuUUvKBJFoJDcPapWaMZ3WwNS51gPzz4E4LxM4UppLiWrnJ54yw8SXahHCQFnsosK5UVeob",
  "key16": "dJ53f8vyEdBK2JSB3L85PDBfTcumKt3jRuK4yD3rGxSnKWDt48wYTsgnCQm18JGjdLo5yd3TDtpWmxu2JtRrpHy",
  "key17": "3ar2HfbNJVXt8yFasRasZJT9PrwyRN85oGw8jAD6nXdxEyjUo9HmXFCDNQXYty2R3JmUXRZXX2E3z9Pfmcebx7NA",
  "key18": "3sLe23fGFrkkp2X67shGNWPX6HwG4XSCUVdLfdrZhsfQoJvGRYDkp9RebVPkqNmeTNgLyNFe8ZUaWQ49cgCeAzK9",
  "key19": "55UZnoWFcDpz7vbZcEQ62jxXzgy7D57mXNu46EfpyDmb7kK7kSKzoLYGMYeiQ4GoZZBgxXMYzeYqNZ1sMPhJfjN",
  "key20": "px6Yw15aNm3n9mdmfWwHGTf1kRdJjvhrZUVcn3gYpq4QTnJauqUcxrX1A1wuPSm6kafBS6eVGwAK1pDiPAXfHFW",
  "key21": "4Pi6XG614Z9PN8R4Fb143A4PpmGiKS9RfC85QhnZiCE3VVWfMV58ABRtF2iVk4whWienwhLhVDGtcQQML6EFzcMt",
  "key22": "5H6EcL6KWp8nrtWcSygUQNNj4hRQR3Dy69tz2QyxRbRZonRjTciF9bu8k2PFpiHCfcipymDHMgJR3844VPwAghb1",
  "key23": "3xRttaWg7PxcSiedGUdx2UG5HtDPzqsYdsNeD4UeGVzd1m2CovJSX8iCHkSJgbRk2CkmBKEgGATxNhj7T9iHKAHR",
  "key24": "5ZL9jtykwrDDXvg7LnBD1mMYWWzqDv2qbf1YU7iAqFw3hMwtpQuFXPGhGAA12cU4paDDGVydDYQFMcFHGaLPxc1D",
  "key25": "3tsgHkYD79qayGM7zLAufANXbR6ki1rGrwVKUwP3VzjQ47H4jTzVDuefaGS1VufSVs1bR9uDigsjC4556T3cQn7t",
  "key26": "34CvnWEBoSuUw2kbQU9zqabLbEMvtgUz72QiPmQ2aAz3pjgrjn6CLNF5AVJp4gjnkCCkLGr9oQBgDrXPLBFPrvVY",
  "key27": "3v9ji6S4JAhktffQnvGJgMppD9kQMcouDMJCtQ8bmnS6GnrCgJGZrRJoB1BQC6FoawmFYkyrBNKQUkvc9TCP2bFF"
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
