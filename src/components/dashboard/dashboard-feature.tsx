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
    "2NDMajsvyiyZbD6d3zETy3qknASj2ni9xQEWgqpRC7rhL3xi1M2ieBmP1p2z5HxaEGXZdr1VzPYVibSyxSSetdu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pVg4ZTtWvMeZFTWzvftnqBgkLe4MdWxvF1yV4rAtkCNNTUR1rxq6nNFPrnonzLSHyPVzPkwndwmYkuHTRxzFMN6",
  "key1": "423kZfEnn1uW36Ak9q6EeSxVTMz4jBNwU9HtYWuA1GvuLufFbTHQ4GdEAmmmHoKaQERtPiEkyG7FeTGneHX5RGtd",
  "key2": "48wX9H9GxB9UyEJs1UN3fnFBUjYRU6KsQuYLRvgMfh59ReWAhkKPwk1UnkQGpyvWEQhzWtH6ngFLRdTDWENndsZk",
  "key3": "dNDcMjkirHZvN6jBaoMsSEFWTDCBefRDJXbDyhPFKvc9q6rt7efLs1Uhng8uZz3eAhdfQrE874Ma1JEBMcyYa3o",
  "key4": "2Tzk1GYD8fAc5YABoW5gKmTpCArLQHc52izZoT2udHZ3E3xAweNAr8SAnJUi1ToXTGGJrJhhF2DFgbDVWm91ezF3",
  "key5": "5j1kB6yvUZ4CeyUMgcsQnZn4AgUC6ZnYS7NWfHQcGXTrxDk8bhBDaBCJukejcwMswFhdc5gWKWfJxqfWNVizNr5b",
  "key6": "3eNPWVCxXkkHJ9JVXKXN1C83mE9TSTGkmx42bz7Ei7fus1iyphtXg6EJsB8ZaP59qBamrx1A68JCqmmhKsGSVH5E",
  "key7": "HA5oi7gpW2ZAEbq14oEnu9TurCQmKnoknXbFAeaKnXTNAsx6coZEotMxpueX3TcX8dwqM3TWi5F22Fey4AehEpm",
  "key8": "zEUuYJ2RVP7gvqSErcCWhNe2b35gtXi9b4LJYYg1yZvcRhUt3HmC4v3FoGRRACWpYpZDK3MV1CvxQUc8EpxMk6D",
  "key9": "4owGU1ovZSh1jDUhWez4yPNd4y8TpVCzHTJU4mgpHqRRB4YdJ6m7U4xn8YZkPsfah5dJBMPNwvkbCaYgfWGpmP3d",
  "key10": "ibz1XiMABGFcYekDkFdq7WM6yvYg58fWXi99U6P7huUTyXh89y3L85oMGkx6hfmv2TfMY3UKJAxhTYATxLpjqKC",
  "key11": "58f4PJfH7BqcopWfwxp2518EgKja6M4gM9qinhoaB4mF7v6QHQDaqTYNZUx6E5JttaNzrUm6g9DP5WkchW7Dnq4z",
  "key12": "3J7qNKPvahDMyDbWNwgjfY53C3jCxpBdDDG1ntJTkWZE1S2aM726b4NgosmsYCEtuoKUNbpmmrgiRx9a8KMnZVdn",
  "key13": "5hLh68zN9VJo7LWMRTMAVsUfgnaumj6RzF9WYsabzoqyC9PvvrccEZZxcGZ2szbEvy9KgPWCqZySqDjVTPuHYgnQ",
  "key14": "48Fi6oAoQeZV4F4PQxQgNGz2WRxR6U38FBxPy7xssZTDt7S54XdQ5rQzVfWSLDMxKMP1ypRgKbVs3oyaAQheLTXr",
  "key15": "28ZugNNAEAZVJP3nHGbc2ZVXEEVptZMJB8KFodT6vYP2WG7VJEMsD4YPhh9ZHBLwSJRodXUdhccJgDUX4s9brgvd",
  "key16": "VqFajFE3CyKSE8NF5TRSDGxApvkUUPao1LEvCpqAKNCJGd7JvbzTZ3ryR2rj7Xdxiszmr83UyyASWeCeybRsH9q",
  "key17": "bDp9uZBdQxe87Grf5orWRiL2yRTGo1gxcDLAKdR69EnYpMh4rwuphfrWgBQT1NwqJfdGqkBzsjGf2FVADjjDcRx",
  "key18": "56nZJEiwiiYy8d7ug682aHqUYmNfFygugjUGjqGd12B1Pn2mmNi7zR11kEppbm3CMzk9v1AB33YuQYtrszbJtwwP",
  "key19": "2KQUDNwZG2YFJxBhLwaix8XBr8qWik81jPV5f5GNu7UJUcmxzC1cCyxoh2JBScX2p891mrhXKoaG57U2kLAu95G3",
  "key20": "3jibGTR2dYh9oyX47rNYWRYc3Ut2xDzSNNrMnLeFKw7QGwY98YdVVykCywHzJx49spVXxJUn3GsUEkpCos4GiJCB",
  "key21": "4jYEkQgpK588gA99GXLmdE24sLsxCYxFjkUYvuLD8UhJCYeg2DXBKYtASaLLz942MrpUnyiwepChCLrw9TVH5Kgv",
  "key22": "3Lt1ECEgPFnQStBqB1CXE6eLxPR8MR9Y12dt3pYw5JpbK7AsMJGhSgJQJ91NnSoEuuiMK3vpKYZ5sXvTyGHNM8rg",
  "key23": "2yFkiw3vqL226xCjCHBdSmEWjEUvu9VPjLRNHbwSBhptqd58RmzkemyE5ZTaAkk8mj2kW36kqdfgjuXunMH3a6ha",
  "key24": "jDE1DBCCgiXimnUopMKFnc4atApU7NSVp6srTx6h1Uph8DXemciKxyGWzc1f7X9pKKdzs467Re5R8NMTpW2P7Cj",
  "key25": "4YSzUZErWaZwh5dinw6gHcGk9UChKT7RpzhKdh4a8rm6UddBQB3fgBdZYUzkwy1ThuDi4nyDGH5zqFtonEpWuiKt",
  "key26": "2nAeNh1zztNwi9toG7fPqwUUoUJjj4gjpxgXD61FYm4RAygMiPgD9c6ZUE5xnfSbDYAwNA4fmS2rwJBrCrrfyccQ",
  "key27": "2MBZFW3CvUt4JhPbpH9MUwYNHLVDbt9H6JG74WNdyKT2y9ivU69Wv2CkoJPjoB3RH2wwBSBAzUdaQCynGQUf9z5B",
  "key28": "5zDj7fAHZ1MiLF1vRhe5fGt73x7f7aY6neRkBMEduFTZHZLABx3Lhkuh61EddSNW1LKzpK5KE9Q7VW2W1H1fMgX1",
  "key29": "4odv7eWBsNFcpLwFPpTFGr881PZAS179wLxM9rDDULRuHoRgqV9A2dyKkmLGATEdH42jvmVRzRtcUSy6TEuyctA6"
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
