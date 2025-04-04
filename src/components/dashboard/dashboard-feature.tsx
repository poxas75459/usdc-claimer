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
    "37CU8CzA3K5sCDf7jHhEBE9BaMEGFsxZBk3Vu7Z9pcHBwRjydXLRGuxqxq8rZ5nHAzLZfp7NpERuUq4fr5EhqFBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42zasWWUSX1Dgz9z7io3xMfEzcCUkEFoBGi2NL6UdxkDZS5ExuwA7KtVkdEgmGu5zQdPY1uKrtA7r6SRiw2MrSpv",
  "key1": "47WPWusX93i3cxcRXB3xCrKNPyzvdubTceQVckMrCQXhqkdn4FBfSVTpRk7hdaLC2ip1fBfj8VBjAtqJSSa4SwhJ",
  "key2": "3rUpde6nnBHgQ8vfie4wFNQKXnxfWsULLt5tUVZWLYck2E1FJqyYfTQ9eAxfD3dAFuENsx1ckEY6PV6op6VZyXPc",
  "key3": "5TQQHQkihf3JXDm1s14CoWzXBju7Y8nMravibgCdfHkiVsY54p422GWbcKDVaPg94DrNyjearG6URXyGipRtGwS7",
  "key4": "2gucAweEPXSka196UePXqpu7s32m4jCuH5jFzg8WoyQ4dTFWhL2D75whDFavHEVg9qHRa4EqqEft8qAkwAkcHH1m",
  "key5": "zexqZNXsv9tAf9fNLQABUKMVT7GzL6QcGzXyHxCESZoqkzrdqJ4QhzUdJZCutG9V75272YrzF6GVGfY5VfSc4Fy",
  "key6": "4JT4o6R8vYG3qaCC5rcHdW7mVEL4R7fNRNUSAPSQUf2Ub4fvxzghpnA22p9NExB33MSdf4gZisEfdpHQmfaBS4Wh",
  "key7": "4Y35LMT2sS4SvV3K2bGQAhU1SJwrcXhrHjx7HpVcVD4pY6kinCWNVf95tjp922fUX8o1hVNx4Csqa3iFoM95FRQt",
  "key8": "5xnvzm2NwGJmYoxs2u5f8wdjrPYCuSZLdt3CzbsFCtTTK4B3kLA2QimE3LscaCp4onzM4hLT8n8b8a7Bx5Zq9W3B",
  "key9": "26i8smBeXpSGCqa99QWjaBRGjWSuAZ4ZxBAPDyoLTo9U5VnDndjSAhS3RkChLNVdUNTxNtpm1a8KPZG36i2bthqe",
  "key10": "2QapkF4jKK9z6CBf3Q4DvLcrHShgomFzznnmcCh6y1cRcFAgcd2vSQERX4dp1iFD1pQ1xpEr3tSXHfQgmffkZwvp",
  "key11": "3Bjsq6VAm7pNKtS1gPeJQMBsRPdUNzq58nqHBCWhPCcrtNzLbAck3kqieXcR9yXXNu2n1HbYG6PvXu9VZENLE1Yt",
  "key12": "5ZZuAn8SLB5ncrK2BkJsowBhHPYb6mGgBSAkjLUrTcZvtS51MuzVjgjSnWdZUeY8MpAdLFcVGo8bbrHoWw8DzVzm",
  "key13": "66eXDU7R1rwUFN6qKFRv75RqZSYFNohxssGhMT6v8ZULKmUNr3Xu2YrWt2b33ELXWa4ED9BUJY2uM4nz6Gxjxcsy",
  "key14": "kdfvKTZ5R6XPuyGPqUtDwon4cp4EAer5NkWiEGy7hqmKTrejmmLxvY8QrU2BVspnU2WL1FDogDFbSNdB8ouFyVA",
  "key15": "53y9xbHth3SagiozqPKMK82sxBJZhu7hXKgFHGxVV7FHvqGrxvMRzta2dSjHukdvBt1DygagcJc8tqDfTATvFP1h",
  "key16": "wmAiNnfY5XzF9DirdMKEfvFGb7tdkgdHLx1W6KQrY4WWTVoRUoyY3E9P5NR9XUpi3QrN1X2tdHcxNDboTje4bfR",
  "key17": "5pXSuVbU187KH9qyBQ6juBJNwKD1zUkBE8LYQ4j5PZ3wfFukuHetLBP4h6NwrUXmr5PUSKFaCyWQMJdH2dZhUUMG",
  "key18": "2xS7hcS78W9zauLRQsNsE6g353bujS7qfQZGEqBRTjPKVCY9KzuuZTNTqxo8swToLw4gg23kC8F6D81vKK1RtTAJ",
  "key19": "5SKEG5REtHSm2UchGFoQs52P8LaDg7qcHNCcdDR16EmS5cBgZgTEygjZKgsJKJCkqbTXqeQ978WAR5P6Dw2E6YJR",
  "key20": "4rmtcEMc2yUdyKbsvTMt3bw7CFLgWXQ2qoPPjp8G4XQLDTTjG82yyqNEfVWTZsppsJ7iX6A1NEhgZwLqFhBS226M",
  "key21": "3j7EGtAwCCrH6979BQ4DdNmnRnGWrUuH832auDDNAGwBW5FNdvJ5VbVG39RaLTaaug1bi1NsBpUnv3atN3ukFNEv",
  "key22": "G87bruisQZqL6YrQ7LX6LxMYBabT9uaBCeRGqxx6k6pGdnThksn5FwAMzJyvPG5vc6JyX2j7pKwskzJYV3Dhhch",
  "key23": "4ucd314y73CtDsPHJGcMFLBvTVvbBtdLWBKdErtyrTsaadtiTkP2nFab1zb2s8dJUAqCjwfv8Z3xuB9AQXxFqKvT",
  "key24": "3ZZf6PAaXYhVAoUbWhuNcL6g3nNzCJKE9RnaP7znrfc3zxMU9Ab7xUNqrxXSiii4dt2arobu6xe5VuzK7iEsmYf4",
  "key25": "5e18VQJE4ghRqakp6Y3hatrFzkHJWLX4wSgpGR5pezwimwPNPhc7rrxZCHfQtq91kQyGGhDjB48cWBhVpVv1umgy",
  "key26": "3Vyeg5px2H7dua1RykBfuiFk7y4rbv5Ge6pPrtmmvLHk3gM9gBLet9NXVDEF8Xkav4z3Ytn1mUbK8xprKYQyy8di"
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
