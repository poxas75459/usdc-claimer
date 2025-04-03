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
    "4aggbAb5HaU94EwB9RBBASPPLS5phsqSaB7UiTD5ebSRSTCjWsorFvHzUnJ876UY5FACe1C6PEoHVSnaqkWye9Lw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKvNW54KJviNDacYvwbBgTVrZ1huZS8oFdruaSjjkt9TgdZw3JQkz3ffsJdWozg3AvYz2GKBYjDR1Vt3kPAWPq4",
  "key1": "3iBCEC6nbnRaHYNwdKbBJMcr8xHgKGqk3pWCfcRGZgHi6DS9NwZgtQX2dxX9k5Xkb2foDuMqz9joyYAozXLLPXtz",
  "key2": "43N7aGwMBpfU74GCHYWpA31Ah69EWo9tCeaWgfWiQBcFgcKyX9SNR9pUKthFkn3fqDKBCdB3FgCT7NvvegdPaV6q",
  "key3": "3WUVBiTVWtnEWmWWyfeADZGZLXzdhpVrLc15a2rwoHU4hhcVCbHUgBH2onk9S6pGgXaLjNtNqdvAjGnGRFzBvS6b",
  "key4": "2FLwrpn2eMzFWcYzm33gaMPKoPHeCHJETuCUce3USWbkf5LnxB3cGyV5gSH7LWeV8VByUizL1xGpHTZGciVyRKdg",
  "key5": "4FXJdhQWJgYcoAGXnvmHiHqnLsbMU9rEjWT1JNy3fBKepghLhhWuTPhS6GTsD8Bv3RzmL2SY3UV2DoVv4mmdkg2u",
  "key6": "3fbbmq1DTFqATBUnx4tTW3yBoD3Jf5f3ionrotJanKn7nxxtFtzYNaSDnNKpuNQAUuQxXEtuBFJy71NrDzJv9tGc",
  "key7": "zUS55WneZa9fHENzjEtiWyi682fmPHsiMyp12YACcHFXsi677NLvgee5A73Kb2WVxuCmrgVxe8Lac2EGaTMVQ9y",
  "key8": "9cUJWBUxzNnUg3tJjbjEvutekaRsD75gVAjQkKTpYW91XdnoGeVunxyBkNT2kemjyc5J1bAf4vr8pedzYyqpWvn",
  "key9": "3SpCtvRhpNTZg6KxxmtP5xnTxc8CeVkwaDrJi8pj59FLHxwmqsFwosxe7A4UHBBRsydWiWpLDTrRDqnrNsaCEhAY",
  "key10": "3yrSyHqGyWQnN8UiENJLtF1qb4wx7nDH7wBh8G8eqRU6MWwgASgbqMATNV8LsWJSJ9ApoFAF9DuuDVH7pdqEusx3",
  "key11": "3tkcDdbtSsHCRTy42AmF4Pnp7wKtkGfTzWjLhhrSP2gsqFPiDJzrrGtDbbBhxjcuAgh5sebw2TNEDcSKeA76MevA",
  "key12": "tmo7WVdoLX8AHACpGp3Ujhrd4VKJZ4SYURxLiWgFBu5YpbGyjgNA2dKuvmKrAXaqiF4LN38wjybvd2hEjtHY3yL",
  "key13": "3Q2Q5JjqG654HnFqYwKVVpyPEM2GyJpF5Pd62aYDravr4mFZV5TNN2mKJ4VgGEFwUWmB2dngVqQRyRMRtyR6G7fK",
  "key14": "3LZQTnQsghEC5jo7Mh9ufpKXJsKricjdcZ1qabx5KuYw3Jzc83TqLqyjybze9w2v9rS1VjRKZ7r2uEHN3AAx1gXC",
  "key15": "2UaxhmQCDpJGjrMMNgiMF77QKATjGKyryT2iudm7u5EegaqgBS6tTye82ZD9AXsdEbbzTJdFiNJtDsaxkwPcoQDa",
  "key16": "EShCmayUDBP6m9mFwQ5JLJPj74j4tzTJdJGoqrjxm4JNfyrhyVDJm1Nh5EWx4832nY8J6ps8xiPFthGXHhsw1nC",
  "key17": "LSVEVXYN8Jtqa8cPFky2X2K7MF5vKcyTz7yMKrcyjscTciKo4UQSv8Jcs4QKWDWhViByXKqzmeNeXUEhpbz42TB",
  "key18": "2TZtJN459h2rzLya8Hdv1mWDzDibb7i6ZtWPfkVTkdasTj1hzyAFppdTUqYbNmLy6fVPqvSonDPP6ezPpUddGwye",
  "key19": "3XPDUNH21KptATA9mnFcXV7r8AejzryyDCYeHigbAvJKXzzqi8SNpAjT5T4H1umf73VtezbwWEDYpjoqAXghv4dH",
  "key20": "2hvKqMMFnrJ21AfDGfVDVacLDbSZ8x9dhf6KHVC5KMag1wnRPMs1hy4nfY1f4BGsGNM3ofP3C3QjzhyRAevK2jDL",
  "key21": "r8MnMsoGBrLWkHkp2oorHSkjquRNVL3XkLWU3C9Wq756TfQNksuR8WVzAMUNmcs3kNhDY4WwdiB5T3j9uiLuvQ8",
  "key22": "37dMNLiAhj2QJgwB8Y9M4JBBkni4pAeuCqW2PeSKvMPP472PAZamXUqwZj7Kqeq4cFWxETnY8HH9G4rhnNgBMwhL",
  "key23": "62bbQYzPGWkgqNE48P9fJ6xt5fShX5tTbpDrV8mX7CrVc9NNqX1TCu4Ze4beFJs5d63nBQB3GMu32hGtxWb9RPMy",
  "key24": "5XPH25azmvVSLVAGhDyV1eTcmgu1bod26tPCHytqNB423EL3nuh1xMxq35Cqxja5qHfbE7RytUSNj1uL1u48LHZF",
  "key25": "4A2mVGSXJfJAVouqya3rmbm8hHbUpYkpXrcGeo4SUKLYxJexcihbH7Y1MPZg4kYczVNocunuK2GJ3tvEDoDXDaf7",
  "key26": "2EHiQ8ec2udDWHY97S355NNauWnPtyazuk1pA1eTEFvH2n3r3ZJxMjPb8DLZPPXFa5JyuqeV2BX7eo7Z9xnECfJx",
  "key27": "5SLnthu6KES7QQW5ad6Ky6TQ3tfsVopaDcsggLXk7Qxx7RasWp9FStvqx16vKdPkfotwfwcuy8VdP8EZJZ62fFDG",
  "key28": "GiRm6p8jUA5avqTDRtmQysQmrgVQ4TjS8EvtpYXXLtd94VvUNUtzA61uGc6thrGWyuLa5RzSkNdARnbqdETw6W2",
  "key29": "3uRVs1yHr3Zi1bMzaU4ieMc7sYf88tgwjfDaQWrAQSYJd5oEH5un3pPhKCRdEUYiEfVN87Gt3gezc7h5vWTM3Jhp"
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
