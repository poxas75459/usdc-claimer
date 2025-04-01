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
    "eDn1rJ7icP8ii69HWwETS3TzKtPJ56odsCrpRvoPG1EYY1DcUABY7fNUrJNojT1u9ktJSUmmgpV7vTA6aBxNegZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syAodQLNWkHDUst5NLn5TGN8krKxnh14YbuTXXpnP9fzqYWqwqeaTpMzeVdt9RZ4P3a4KYJZjmE3BEPp2YLYZKi",
  "key1": "5j1vLKTfeBAaXdTBJrZznJFrgQTyXf98LomUQWNt5dZ8g6ojhTzgKLbL1YgbJRcrwrpuTP6A2GKkWBGZ59TjQgxo",
  "key2": "3aCA4u5kVatynQGmrJRAn49BK1DtjVjZQHqVd5UetuaSvggusimgiogsbSQZKV9xxj6N2o5wM5eYGSyXnzgDCCEG",
  "key3": "64FE3inzziYFs5NPVQWGV6VABTJwQT76FYsgJ6jaa5e1jGiKC7nURACmB4ZtHZsJdJ3Vwjrmrf6jCWiLjhFYKqB1",
  "key4": "2p8rbNpCsPrNmGCXVskKR8D8v1UCxdi6Zohwm2Bh8uBwqHbTXZTspdHhzn2H69VgMtvvBANvSoMj252MBc27DQn8",
  "key5": "3XVMutFYYTin9j8jkdDE8JhC3eQBsqCjFnQ81cpsXBrruCA23uDcwYQBgt7jVKM3m4GWGh3zmCvohuWN6Xqj6neC",
  "key6": "27KC82b7M7s5YDSSJSZypE2kszqQjRmTqFBz2EEybfwRKQwX3pBumq161DaMgwkzdVZrLLnFzgDqHrh1eA6DGmAn",
  "key7": "47VB1tyySFHqusc5fFG8pGJf5mbjjG9pkuww51e8LBxQas6WTihsw8ottxHYf3ZpXCcpgx1m3UWymaUJkEGUTW6W",
  "key8": "2KZfbEDG3bMPAx7L42tX2htoYBhrRqmwULYH6o7G9yQHxhPsw153uNMBYTVNvJUsTBLaTTMUWWmnqTVcTuHcbGJq",
  "key9": "2RWES3X9gCmArxA9rncbC8RTpi4x6P6TMnpoSrj1arXTTigfC4R8dgWpB9RwAjoo1JoShuw9JV6mMQFfTshohZpg",
  "key10": "38veSZRZ7rrDPg8EK3ycezvu4T47PKoMZ5VgQqmWYQZCRSWtxnaPUEWXV81mGsK81d2caUBXMkSQ7K16nJxeigF9",
  "key11": "2AcM8dziVViGjVa6jnKkJZMPxewB9mwk74oocj7PXvJJRFdw3bYLHKviCVhB5zqWU8hcRt91kEBnxGNxe7E7gm1C",
  "key12": "47A8mNyojtJFt6hTgrXQzWXFtFtrKCukBBCxzPuUCV1fT9kkLvhgjGMtWG3GKnxefNeg33sRhnqoxHbGhXFQdtHd",
  "key13": "Xjg16Yz9i8ehjY8cWwFXSa2iVEascssMZpB9vR8wMxZs2fZNG1aTjBB8aqyyFYSk1T5E6aKJ6ZT5TtYLAVLNnYx",
  "key14": "Z5VCqwTfwdcGk1pBbD1NSMs3TgBGSDgof3x3G9RxswG1EFWtgtT5cR12MG2uu3h5trRbjpGM3u93tHoNE8VDp3j",
  "key15": "3yZsGwuqjjVGUJBW3mFntQ4zFgvdFWMGgMTvzQEgQZoSiW4DKs1gZvC9mjb8Bdq9eBN54PmU9vnuL94fvz31jEvu",
  "key16": "5knMa2xtGfBvGgJqm8aJtLM7V9uGZfyFHMvfuFKMwiMrq5a1H2DEfHuQnNYMrQej4mnrJDyNSbGWeCvsqRBKK1G4",
  "key17": "iduDmdHiBxuU2xxzwRZRaJrwvrpvcyLxMcTx6wgh59W6tJz3sGMZDnFKng42HKqJgzzqrjz1AnvrBEFV1dBmfB5",
  "key18": "5dxxeYUaZmQ46xwnJb8LF7f58CUvg3vApvoTowJje5zZSFY6zwzrsrsuSJpzXEMVBmrQPkJgmVgkad524FZS8Gew",
  "key19": "2oPkrE2LoNCDdhsh7pvNzkLeuruYTHnkRTi87PHqAVDDpYobhagYza6cTbbGDzzhQ39kAsaSUQ34oF6rrghKMfaZ",
  "key20": "4mpRo4gjt7oWmmu2es1sFArwqJvnfQKRMsDXPwAeC96EBDZdgex6uycPbAdun9n4gZQm1Hy7hyjQtJFYRUPppfAg",
  "key21": "5udzT4jnb2AFd8cH5k83Mgs3jTZUmnKsLDJG1sSLPyfxVTUhuLYarxbogRXSLUJsba1JV6wfVjGX19rKKqqscL5m",
  "key22": "5q7PHJHySiYizGecmSRrMKEqDdDyNHdKooF7HjWv9zXZ5jKR5mwaLoTPSK16gHfGrMk4gvcCwP9warQszVkCmkiR",
  "key23": "4RHRv4yxceaczKTDadrG7ES8cGsaQGcy6dz8A4o2t7H6LHAEjoYogdwrUaikuXRjsVXhijiqnB5RfbzsJJeMRFa7",
  "key24": "3kT3MqKp9bR1vfrn9VPQQdsiTbqBqjP6seEMd8tk2frtBzJEnNr3hxPwDWxCdHatoXk5UU7T2WfswZDjiD1SY8qH",
  "key25": "vhq17C6dEQRUqUVqMzwXuSYFoj93QrqnXqxy6acQ2KVqWGASe7WW7tarRXERuTjwMMtd2NzQWRY4gBrvnE9WFsi",
  "key26": "2znKgPhmq5mY45sSxgEVSoSvG9sWSCXfWSuA7TfFJpPeUbRtAXKwbQEed8Jksa1zaZH4rKPFyzHhNkWfmXLcp5XF",
  "key27": "arepNnsdsdBkgeGfZm4WadTwFtC6wfXYyLMWThUwzrQcc3ELotUTpBcLfKAwtnouTfwH7csox13tx9UU7fLaiwH",
  "key28": "57hmeyGkTN349KzG3n6XfEuoPCRCTcm9ubDrrP3jrVhX3ViYPYeQgWpBFB2MLVW2jrF8QpfTLYf8DqW35nT28fpb",
  "key29": "4NfuKqQYmToiwisSjvrMH8dFJ7rJ4ut1CuEo2QKxuPCKtbPVZBQhtSjpYYpm2Y7Kg4yGCzY4Tc4WSdh3dCLrQvTm",
  "key30": "cgFctL1GQw5cPUtpouxREDimUUQKohtyj16NUWDveaHBkCi6YVRU3U21jPLdKbMBntuqgB1ZPQFJJ2rw4hetZ27",
  "key31": "47R1qvCyyfpYrPW6yQNZhne3PazEJCRRHUrLJK84TDj6FCnZcuRWSRUCPtY7KgvdjEaQkMdPfiyxWgrNZF1byi1A",
  "key32": "5syhRiodxExnSwK4xaK1WgqLZ1sL3oY9aGPs4evtJbRKKBNG7EAnuC4fzcmipjakH4XHVkKMj1u5LPuia8M7WtPG",
  "key33": "3DdYZsAisTzVGkcFFEQXqjo3t7SE8b4z7GmS38npoJPAHis8AgJ29u17STgsmHZwtxZ4uQHBspJGHfMkfNjvn4nF",
  "key34": "2MvAjHDYYdz5VCTaESYANtqtKfezZ5AWZ2y67YQZvf7teZSdzyV6bFtaX4DxrjaB63RL38k6ZJatKBEexcta8kYY",
  "key35": "2rSsTkEhE9QDi9oNi1uZ2G15ohSy9aaXLz5zpxPNF8LUqPS7RYWo4dac4fXujMyDz4nK4RgffzLGhg1XKVKTcRiX",
  "key36": "46puWR3iHgarnrvx2WD8hvjRSs3bvScjnFWsPSX7PkADFmoLuGHYsm5YS6CApSyyzwHfMd2VZ3eYsJJ1S16Gzpt2",
  "key37": "2bdyk8n76sxbVvomYd89p1myLDo2EGvhBeb4G8sZW3DsmDHYkzoNer3L6yG7LrrHCa54hNGnbBergrwd3HkWPTVC",
  "key38": "59YX4RWrsZicjDV7jkGMqn5umEVaRJYZM5ES13YNDwCcDRDJqjRkH1jVZbKuL8NrdLoGS86k76hsxdJdq1TQMs53",
  "key39": "5ChkYs1yCCpHzNS4euFdCrJnteandwD93Zi4AoJyvn4EVonhKns91Kr1hKehXM8mbt8Tqyct7WpaPu2ZU6d8YCEg",
  "key40": "3JpFy8q7D3Tmgrq3ag4gzmnoz2muwiCQ9gH139z37R3AiskFcQoqeLHHpbZ53m9nfQhanizyp1wPUtvnkKTxAB5g",
  "key41": "3t9ymUpSrmdkCbvC7oxrEN45hC7QWepMHX2UxEFWZT62XkyTmavbRCDohvDXwGm6L92onTXackJCyr7f2ixZqkzY",
  "key42": "4AxHcrAetUrxJcgn2ijrAZxhXA3TinFj3Y7EtTtRcfHZNFb6cFxrDmKeWyFnoAZaL3GsZpJt6ke6mZDUTRqsuSUm",
  "key43": "4TimQ97W4rb8WX9HyqT76a3NzWyJUV4D2VCbr4Tegr5rbkgLcioKCqyorSrHRkRHV4UAH9dVfP23TX8MnN5WdnHf"
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
