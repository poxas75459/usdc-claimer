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
    "5kbWZcqrXgoobwF4N3cQm3BBbfbhK5qg82Exfzaj2UnC16n87rtrWxXnmVpASct5d5pY8aLzuXRp9tMSokMryigp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RtUNbg7DJMaW8ABHQ7MSnnNNgozLLCC7NscMwkeGFHNYVchMrtfCrZ8T8rQ9x2ERoyc15YXW2ieJRPzRY1dXNo",
  "key1": "2xUVhkGBA14RzgstxZAXGZ7MhgGqbNY2fCM3NfuAEkjBGVfrD6AG5TCJEWgvyCfYjNW5XGCuKYGN5ogUc9KCJnhC",
  "key2": "5pCLmxzR2HyK2vGnjR9UxZYrQYQpcBQboyiHm2mGqRH9sqmWEG8VTxB6Hc7WMw4NSW2zpUzuPsEn8AUWBojcrNYD",
  "key3": "3BsoHJqgMeApyec7ivNs158d68d3K1w1Q3FTDUyx4eyEu58UBXEgJqndCcbTd4nAkQyou6G7xB898uczB84cRrBw",
  "key4": "5R7iAkNy8BDVLs5mAkVz6zWSRqQRU5FxBFscqS9Nq2jVu1zjdkPQ9eFNgPuYmbi2Zki5KD9fajRpYEGh5W7brPdp",
  "key5": "Lppxyhr6ApaoS5GUNzdvi94HDEJ1iJpd7twTCgJtCUXUaZG74pYEwDU1WzjyYpRAS6CUfxRBXmUdt2ddpwgkebq",
  "key6": "5nAhpEZSsESmeNpFjtnuTxpv7GAWSyeePiuPwtpcfSXV4mGESGa2vtFHXdVGUYEpHjK987wK2BuLusYBHxXocLEc",
  "key7": "3xTgdBGFBj9BPpGYZfc9srtK5gKcsX7MqBGvzyQPTyNSefLT9QgdxcBJwbVYda5yMd93FgyPBRoUAhsCyJcSJnVK",
  "key8": "5NghHJCtQHfQEVA7tvLnvZq3uaYpiwaviqzhnqG6NzhDkecxBxVg4DZ8rjY9LKqCAM8ZXPrz44qkDwfiGQgJQCd",
  "key9": "591z3hBrdrJEsmFm7GKd4pDXHZ96f1d9Pm24rvuvBUBQ4A1Dt36swWPNPdHF2UyR8jVUjZAMY39bXrY5QUgQbHhw",
  "key10": "4QUmAceAv58acwJBfv4juqw95zg5qC2NHB85RgnX3QVf2BUss44b4bfL6uUXfm3AFVvxLCVaTw4dwY8Sy5AsNRAJ",
  "key11": "99nqyLpP6qB142ZzjKYqqDdXEdYMATfVEV2vD5G4X93NuCwHxCqf1xhdnUiuBht9RPJpk5yEJa3ZxtYccpSNZiQ",
  "key12": "318ZWrMdLFqSb3P4RcxSWUCGfCzmvgyurw7tebcGTzWpxwbYZWFwwRHXyb7wy4KY3U1GWbnMjXP81vE1z9kdDMC2",
  "key13": "5cSvGUxhudcaVWsZEQ7EzgjDKrd1Wv8DW4m4BW9wp8QsjK7ybKxxZt33CECNss4nkbhDNZDGL9R6R7WVBqPibm6z",
  "key14": "wNZohje7w8jpDV4k1TaUzY9sik3ayzDdHtPeEZbKqbWnQM6UkXEKkBLsfqyCwKkFvAJUuHofXb7mQcm1AmrNXoF",
  "key15": "3m3yC9aYFPqjSkGM465wcvZZzgXfxmJZPV2S3dMVuZCfHUp5vzv1D1hfZ9dXrkXNy9JDALBk9UmfkV2yFKqsjonX",
  "key16": "8pbi522terqVeKExXYZSraaxLwuEecMMzDJd4dco9f7gkkmHEtQFf5UKSa7UHGLngQWW45dPmD3TsACMf31P3uF",
  "key17": "9eeBkkQFWDLcQr5rcq5VgDS1gHEwMq4ZxZQevaScJ1gzKcGSLWSGo6UEdG4Dm2GJV4YamaccbSEyiu7gR4epJxA",
  "key18": "4tATrHwdcmgHhtzY6DCyfV2ivNSeyLKjeVGSKmCEyeLqg5YWDDvp1zDsfbUVZZ9dPmJWFc45nsFjopncnugA6P5s",
  "key19": "2ivDs29D6RbMRPAsQgVkSpiWrVmfRkgMwkj8imCtoNyGpNFh6MK4AJk5bhEKPicsZi35jpsjLfvBQDUtHYaq8dKo",
  "key20": "63bSMSriJ9ijWS6skL8Du7uKuhLR6DrEfm9z4FdRMdKzVjf4mGtCh9W7csTZ1P4DJyUxG4L9KVmHAEATSrLpte1F",
  "key21": "6tBkgcAfpcF7iGESNtD21c1jMsQbkRzAGMn1JoMjzN8AzVRmBE55bQQ4X3CaNsMTqybmrBmSsVvLGKgPDgrZb47",
  "key22": "THmSRvNUbrkMKpBCymVWoBYz9eooK65uYiggtVRyLBeD9Q95TFHpLjjLmCJ2ypH4wmVpc3G4uiZCF6o5pK9VJuf",
  "key23": "5K9vu7GdjowTBFUXLDcwYvAdwGYFEqYSdGDvNBGc67RYjAuZnWJi7rsumJ1Pb92NAJ69Yt8F96bwE5ZMEBSn2KNz",
  "key24": "4FtgrLSqDKUMyfJeZN715bK3YyVTvaBHeJVzV67d81w3uXop6hrVEEbiK9bSWWJPWHFMXSf36CzvZD1PmNoo1e1v",
  "key25": "41AbDnSeqbgJgejj2wkGCzmUSVGznJQxL6iyY3r3Up6tMMtgam9sVjdwDDwLPckb82v1ki3cfSGBStdcJtxZxNvg",
  "key26": "5jAQdiWM8aAa22gLuFrPhv45gsWkq89xMgGf8wqoWhPiw4PK9FjgXUAvG85WedxcNEndaNaZiJ6XJdL1kJXAW1Dx",
  "key27": "57DazyUfpWcSyy3AjJaXEzgWgRPYsJCpzHh2tecR4qdXDbVWRtiQExpDX59ssqAwzFJhPbuXtikKZadMoKcw81bP",
  "key28": "3giz9gVRuMN5D6XF2et6wQ21mMnPiEYWZ4SdbKCpoKcw51Tzz3NLPD25afVy7zAknMvr63qNHx9r2Q15LNjDFsdL",
  "key29": "3AAKEddxtHdkoBhGPfed3b4J6srnQiXsUwUfGdaQf8Eo42FN7aRuxkRxa1mXkDLBb8sWgeoaHMNmAFsCSCWUkiaj",
  "key30": "5bs26T6LocmC1pgKuvdp8JMcstKsML1ME9cQuNRUbzbte2nDsJsuJoffDEzvFNhrZwCynDQW54mZXH8oM7iczy1h",
  "key31": "4aPeWv7Dp6wd8H8spsySFaZA4yNiKrTc7RjvmDkSvmKm7faJnzuRb8ucAF3d6GTBNb2758qvhPZbzJLUA6ds5spW",
  "key32": "SvefXWMXvHyzCL9sEnGEX7vobiiib2GoDdFUiywPYJARksxrs1hUQVCtmPe96U3AFypFSX1RWPWqbv7G2oWHnNb",
  "key33": "5KRHRbXcSwSL8rNkFHC5DqDqPizREF1WKco6YzEyJNCFQ1zZ8QzPTcXcQkBHLz1QbTH71JZtbA5yEFcm56u61vsk",
  "key34": "1XwQQNXKmnfFwvBoY17HFojR3QSqAeUHCJ4BERxRo99vEKcitmrpLHemnhAiKehuwJv6af53LTeHykVUTwE8kLt",
  "key35": "SXETBPoLtLghJ8PvoMDuCrWBtZ9jTJbpxZCKU64qHNSmq37EFuUBUsGkCb3BBGz753KwYjqzJXWpgatEvHpjWRq",
  "key36": "2cgZKmYGWRJTW5YVDiHNwrxF8jXveN4xnGGE9TgtNyzmG1ujJP5SkftKHm86HRjBuMePnyCzUP7W4uqLCQ5UL3HW",
  "key37": "62gAqwpPcEpHXwmGt44GRu73BZQcHyc59o57w6msduvw8q1hN83td8N21ydNxhcUPX7FqqxWYtjpyayYEWKFGmqJ"
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
