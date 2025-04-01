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
    "5G91LyTWNyPcUk4jEawCqMT9giLFPmuCni26PJCz8QH7qug5VTVaSBgFR53qu74k3PMe9AUojRrJVECxk9gahfkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5imZvBVn1zSXKp9g2dYkfsHCJFfYqHB5qDVMpQzUbGNTPMFttmXo1T9wEF4us7YxmHhzXbkMbf7L74Nka4vaMwpY",
  "key1": "62L4k6LX95wgFZiatKuLvzo9b5QeDhTPCTHoHSiKghxuh2UD6fR6UhC6fDDgeWnf6jmZeJkchrbFMLJDVgZ3Gud1",
  "key2": "3evGGHrZEcG59u5H5K89XAZRowuCEqKu91UrDSJ3pk2J61oJ4yQ6CYDQp47LKRCrqMQRgKT69bygpPdwfTabZmZs",
  "key3": "2aXj2ZUZrNZdxQiQbJ2iQnyxVPaVR8mqoTCGjd4rBBDmXCKPagSwVSjudopyB6EeGqBxiXfkLVu7iisiSVDrZw3v",
  "key4": "FACUyLMrBcGta9XBaSEBXZxeSFyFq3EWf6JY5LWBHRVwpoiJENzBJHLqAaDoTJnc2TupYNxGh5e4PUS8SDq8wyq",
  "key5": "3hihHk7wAAp7i4wLci9tZ9FCrPP9sUh9qVSwK3ysMxRaB3N4drvdfpLds17QTaq4aQ7txiaZK1ZnzkpYMArYMo2T",
  "key6": "2biCyKwMeqgNq5MMH3wwFVELZidCyNcrRRaceYRHbUg5vmhg99HqdGFNGGsMLM2f2rrx7DAvn89Sk9VVY4RgEcci",
  "key7": "2S4Xs2tJs1yBpmY4ipzmwdJL1y9Y5Y8SHAoyERrYvcQLSFPJJUjCFpgHTMXkJ62uWekupcJTwKd8AQG6WKCacuyt",
  "key8": "eRyXHXpqgUCKdYjVkZBbeX3GS97nszWETpA6DVQ6bjtuJcT7TdwGPrnAd1FeXyBx5rzUYZNcf8t7kai4cPXrh9R",
  "key9": "62pDW9sDbszZGVhHQtoaLc6ToZepibLrRBSAC62TkFZVkYVbQHKcSekpX29LfpGQBYU3uJXYsF2iTGnGdTrBWFKX",
  "key10": "3zazpTCdfVYjGLHsJL8MtUGgnFM86SjRTm6K2e9T2D8TBmqyUD5EhxoEzgyR2btX2LYWZ9pNXh5CX98uTXUqYaGn",
  "key11": "3LzEHv5Li95XPM7fyEiD2Ymq4SoN7H37JFaPPmyGdVydzrmk15hRmsqnngA2QAkSkruUERbT8PAHUNtX4JbtAvuA",
  "key12": "9ieu3Q3DGAZ6qp9UpXZ38GX1BVPEDStXaRYWQMTSu3TawSpHXS8j3gUMYdnmCWkZ2kWTSqy9NZ5up6gx7uu7UMn",
  "key13": "pd6k3ivmcHbUDEiRD6G1ZmiQfJnKrbAXakAuBAyeRdH1qsp7jhAdqZcR78D1zTBrxDWdRpLBNekk8LMKqLc5MLL",
  "key14": "4zzGMdfdSHfM9vN6y9xEnWkLi1hMmBYj3S9bhVpYLfnp7XThR1A3RTZ4oRnPJPLP5e86APWWKkUAuYnpRP9Ueapj",
  "key15": "29gwsAH3ayfPHp5ioUxbkiXkVnpLQYfGzmS6e6jZmcTMmCSmRVL4AdH19XRmUcMizSPqUsg8QNqLrESdPp8wrXUJ",
  "key16": "4XEm4CrU8crufzngRsfbriMuypeM1N6tj2SSSVav5d3rLiRFXqzCPiKrHZueEZGb83iqpt83a72wCDzcuoEKrr5",
  "key17": "4WfKkLvYzSghmcKyu7RckXWwRJYXoAufbSsjciKqP15iYYzsZcNJnkuYMve5eGGeBDAYy88aXv4oRBRhyiBdngBJ",
  "key18": "4mnKT9cD2V8S29gFuoKBqw3dreYEj1dsUTkCfzCN9b32ScsDCV2qwzdDTgw9X81KHnMKJgsNJBhQheiqabfGnnmk",
  "key19": "3X6cdYiFATQjyzx7CYkrLMLaBik88qgKrz8rpo2uhd2WrkPcvmz1Rno7htJq5p3Gj3fPJbU3fSYfvuLgnZYHVePu",
  "key20": "3tEFMcuWtuCsAtsP1BSruUvUZyffgekER5Xz7E759uchphAj8MCTi2wgRZi5bCrt6Ui3dLoykcqyTSmNokh3Dgea",
  "key21": "5K8q98dLArSQCbaMb5cLEjiZucQaaPjX7b1AFsrZyZDzdjwPkLEkhbLPCXxzEuuUQLa74YZEHgJyivxykdfN193A",
  "key22": "2wgMMnk1jV9M2htLkEFHSYHgKDbJgASEXVZmmPibMd9UKaFEitTGoDDg4YhVrb8GBVyd24iTk7r8t6RwDTVe92kL",
  "key23": "3R6LySxRZMUYhgr8N1tysD8TFrWU7cNjXjwMS6RXnnArgXjR6rNk7XVDfuYgLE2JcQSmtTeBvgAKyLRKSHDzU3bP",
  "key24": "2zAU1cu8b72ti7bbTrBFtKjexkBnK7i6ACXhbasUTbNzXSed68YiVYLU4okcqTWwcm9ER7S13qRTeTz5kVamyoNk",
  "key25": "1bcqER4yRwTumzReRaYLis4cS4X9fLmwP2sK39pmHvPmAt92xHZArVUiMzK5JtmkEmhjKMr1VawguwtaPda2NEU",
  "key26": "3xmTfYXb5q8wASsWTcTrKfAh6jULEApKbxW8LBwi1pg2mmHABXoe48JUvxzEkANFJU67etrEYSQBLdkdL6eDZmyf",
  "key27": "4CQSgkbCKL5wWj9u2iptmeZxtNTaAnaz8NPQ9bY69v4GkNV2hpebBJ7WhA2iqHf5PRfmJLqB4y2z6ycmqs7DNQjd",
  "key28": "3VgC5qm7jQVvPDyRQejL4vTPRmmybhBHCheYXp1vZmz2XQGgzztTbhkQGT5Qy2Jkub7nLVFSwTLsdVDT3MvUeNBN",
  "key29": "44RBLwcZruTE9CsWsLNeYG69bSY3wS5oQjMXXApY1rHgyGtGehLJKCrHuD6KiqTcaPAPxwBfkaGCY57mFPtd15Zm",
  "key30": "2sUMdRRRsPH3sTydpDTNTvEJDGKPcU91B2Re84EXXX5F6JCnhEbFk9n7rSBCeB8JndLmxJw2zf2ms8jBsrMBKsLq",
  "key31": "2tX8Ny6UW3TEEFN7Z9WPXc41yRYuBG39iuQw1zcbzHFN49kLXkz82TcRip3UxFFmE9GtPPuxMqVBr2vYjeNFVA8N",
  "key32": "5nULzjZi2gXcmoKmSbUxJYqj9bZadTTmoDabSfahzVyFkFfUTqud6yQWgTfxwGAcnkpVXZmsNUSaKSdL2Bow71ny",
  "key33": "3CNECGKBU1FkxSHAXFQLcSQdyZz2fW6UfN9ubGJyPPYnQtPZe3eJyc7csYyErv2mDynVa49wAHmqxRwNAUcznyU3",
  "key34": "obn52Te9S2WjT1zLYWyJaviasEGpT7Xx1bnyjgm8UGuF4dY8mK6eyvhNE1JNoAR3muZzUhjR46EKEcWYMquUCg8",
  "key35": "5NZyq3veF31tH8x7shNZCY3uYUzVp16yoUKUDmnV4ahyfoD5geci2tUKUk9NoZJMJjXcG8VHJ2fPwAAbEzFLtsVJ",
  "key36": "3e7VmCcciNBmrNTaKZzyZvWbfiDN5jrE5AT5X8V1xT95mUtkFczHu4eFhBDGEhFCUH2gqznFwVzN8LfYJE2s8oNC",
  "key37": "3rHhF578aqDjjwVsfuVbRMWzpHyvotjHT1dxXafAVTtnKhzK9ejELQRiMsCNmbznrd6gr77jhCv5M2oY94FRQWAT",
  "key38": "5yziyCVtoco4nYo68NQk5xH6R7VKn1gUa4M3fJZDEMtg4k9k5LCN86fJHzo8LC9veCJ2HjfTmr2Cb4HkFMt9yf8L",
  "key39": "3YEWjLojK9WmHcjLsVPwVoaG5e4jjbHKn6CYTNhGXDpjcghpTBueNGHFki11MuYdgEhVo9ZikqHjcTmsACEkezsw",
  "key40": "3bz3Sf1CtwWMvMAtuBscTTrAFoCn2pDJfXAD3Dp11Dfuyq2GHBrmdSmeHxTK3gCdYTVijN43adsucfv2tpSJtHWZ",
  "key41": "wpPCCPq9Nkw8vDNZ4tNrDcyKzgZJNqU11u13emdMmt7Pu7f2XNfGGnQHMts6pBz3vnhzPfrqHWDyw3FDYxnFmR7",
  "key42": "3dvmXExesxCp67ijVCk4YPoRyM958DxzrVgJ8FUeRYnEn6RFuJV76fxTBRYuq9mih3anfzX8DMszSDNybgU3h6RB",
  "key43": "5ajjBfdMZYAKvdiM2JPaEQqr7pgXUhVjwuBsWfBEo4RAmWefm5bDv91et2j3j4T7YxnJGuTv4Bv4tJGBQjEs6bWc",
  "key44": "4CeLcq31r5wmcDeyHPG67UdwXXEhNVTpBYhdKGSNQfiEGC16vU1KsZ1Yyd4bF9BhCMAD56DC1qPnGdNswi7eMF4R",
  "key45": "5gkUPjk7S7eAtEAgtocR6mzpBvGTkzTUNJKVeFBJQH2kuzMWcxnuNe8xtfJHSFEWUaRYH8TqPr91fA8MPiLZ744R"
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
