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
    "5xRSL6mQ9sJhiuQNfgREqmWxF6VKZYpJAAe23wjte3Lez3EKsAAKTsnQ12Dw8VQ8PGJoXnZ5UyAnCsn17Lkbof96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UNnCZ46472SRX8RU9ZzK3fTSsNDeRyAEjFec3Awdn4TUvdJhNxDMEWnCFc1eJ3p1jooUhBCNoNwewNh77r5Miwe",
  "key1": "2LMeVjRP2hLcQnHLMfgfJRncKhtbHCoTQAUb4a4x6FiEKhZh35gZeJ5mLG4AkMGFroudodjxVQrffF6XFqsoj5Ft",
  "key2": "4YeGHhQwny2D6cCyriP5fNNyzS43RuSB6U4UirnoMy1oNvJj1xac9CTFUNiXp4DWBAqdm75RMM272HRpCvbGYRWS",
  "key3": "39yRWJnZXkDwE16crJJ11sPA7dgpwREM6FvoiXwp1FD6oiB1B8yhtpsYSh5SzXwMtAXBejV5DPYARFGfFHxw5h1B",
  "key4": "4vqA3ig1cBX2nwc9RP3NwMghX6RGz4rBbaaMNyhgKZE7Csy9fmW5v1vuLKyX721LX5khCR9cK14iU5oFPT6PQv76",
  "key5": "38JpX4xgFZiSLQonBUF57LzaQKNrNk7Uj1mL5vwZwUJS3LBSN7ja75QEdeRPGS8Bhig8dqqM4TkY5kcni7eUQRbA",
  "key6": "5GwbdZwotM2HXihqQi39Cp8ZiLA8128VX3CYM9HXCeVBgVjU8obTWH7iKPiwV83UDmaDduE3qrU6EbcFyRJtQKe6",
  "key7": "GUcMrJEa5jfz71ypqvvnFPUTtehtps1xaKEp5AvzxRyGaZnibryKCTUhBeRywUKJ5SjfFsAJQ3GQWGUnrgpw9mF",
  "key8": "2x1odrHPhh3zs5QaxBtkKpURViUzJf9yuhtNDF1RYjeDFYxJ7oQ86t2s7youYaTMbym7jcewQXHUBfyAoqbv3CqK",
  "key9": "65RrSFCc6TzyyVH4YUpd3LXV7rKqEJ2HXZUKRycWMkC9yZhCc8fSboGAmrYwtbcdqjVcrwhEdxAWC9bVgT6oHzKM",
  "key10": "28vpwisLtcn4EF6AiDfMq4A9TUQafWND2SVaGTC3wBbF98tSBxmYxxBYp6mHWrNpMNh7H6oE5UVbt163zZZJERMn",
  "key11": "5jWoRzRk26Ct4iHTMHkrPYJWZ1UmZkfVzDYQiFVnAK6xmWQJZTSt6Mt2PCD2C4RsR7iecwwMzNb5G2tLcYZkLzLY",
  "key12": "4my7fLxqmJAmbQzFRoBuYZTTghZxGYSyV9oGhnnR9CSPfebUEwNX2ePgEK8MDjMxxj2Wqi9vVKGr2p3oENredqX",
  "key13": "crNR16Zp9BfJbFb2iVstj22yxoFXFTkijQhaTnTVbFVXmpsphdN61fxsYMXGGLXjT7YMcTyJ44Kgux5XT9k9jWj",
  "key14": "2rHePJP18H1nNgxjzKCV71rCRTaH8HBNR5bwUk7M8QVgN3Ljg9pFhLg2ogreaFwtzTm4WDKXRCvVgUNo4GoHFrNW",
  "key15": "3mWsmePF9agUPxp7Xcqcgma1TDvtzCg35iCfow3rp9PdyL3qr8UttmxARp9vQsJp7pagPmwCHSDqQtGremU6FV9S",
  "key16": "32vCEyWStqcfdfrvurQ3ju1xHDMonf6jzmtEqmCsc1NXcwC58r65APBn6DmUaDd41HpuniP6t8bF7iHce3w8eFnk",
  "key17": "2p1X3Y7u29rN2zDyDwAFnhU4Y2JouGr6WMRKwnQqru2C886tHRcLyTMne6ndMK4hVHrYZbKffy83QCfPBzVTaKsm",
  "key18": "62ecyAikdCbEoig3ik9hMG34gvhdT14HKnLqDeq4fghNyXJBLd9D2Wsvhs524m1yMd9oG2iQXXERMB9Hw1Z72irE",
  "key19": "5iM1SyA2sopLpn8T1Dw6kB2YpcGgK6xEDm1gEUZqpCUFMvdubS7a5ySmCxy2Gwb5XsqUpL7qZwNgMqykYuNbiu2A",
  "key20": "9Cr8uxKdVmc1BgYXtnaNhJiA1p7gjLsv4twW7ARzb8jbKLUetmeS81rMEfHMucCoZJyuB243EosKQuPcvAVrkZP",
  "key21": "4KqY1zVXLH8EQU1ix5hR16nSWmk8FWwLi2PH9xytjur1chSMrPjXHMKdqvQesc7Lk74EzXo8bm3kkhFoTSjdBUqS",
  "key22": "4cporHtJR27yZYHJ6YzBJUwCLHuCUkQivGBvWM5ae4dYynMTzbTVcnKb6aE6Jajp6AvdqEzECvFGqSggCtQBsJ1M",
  "key23": "4qaN2pstWHN8tYeebTeQeaoW7ucjCyiAouKaZn8qZQGrbDnJeHuAK8KstoGuNVJVjnpMGw7RFUSVYVnE7WMR7VjM",
  "key24": "4kQJoKspLJQjzYygD6WmAtj1e1hJGjBYyZzCsR7NX9dU68rDq5G2H1Pxwzm2VninZCL3xcCta6QxrMuA14osPMrQ",
  "key25": "3aV52T6zXQA2ZDaipK5cntspfArAs7mFk9YV3seaEoHDUNpcmWdYJwUQ75fikUYNBG98p7HEVnBhRJHimPVZR8N8",
  "key26": "4vS2MwPo5DT7NrRqC6aKFcdEjFXvLuePXbj2BGGmeXKb8qBsHqkcbJGWxic5uF9mZLXPEwXtUiLwiWVr6JAjuYWu",
  "key27": "3Rstk63eCd7LnKJaMMgFq1mfQrBkCvJyG91vQwRgvJsNYu52fagTTsp5qnW4cfbDWNosdtsGNkP2wp3eUPTpz8NK",
  "key28": "2Lqas69AKb8jVRfFUnF93qgGXgmxTN39wrETV8EnVSLLAqiNbXCHtbvfNA3pptiuGg9SLBB7Kv8y1uiNUyWiLk88",
  "key29": "5BDPevbX2327gBrguSxHNvVHLauetMhmRcoP6z9msHqJs8pUAQLMZzUqsPZbF8uhjeetSBCXfrf98HTZ2FoofBwP",
  "key30": "5bRxcqHxSpAtfcaXXBoTbrKi16MB8tXDEkcXzyy4xfMvNrUiAUjQdhJGQMFPzgg48yy8DBPREjYkDM8fcJcGFqYk",
  "key31": "2Dw8K6F2hQgPmMXEwUAZmzRYpD7xuUcrmgBMWX4PVQuiaaHJHGAQmDZ8UyJ4EsYmEWsPAvzyZKyy7my6449kdd3j",
  "key32": "32UZ6jRPLKpt9Su1yfVZg82SreKreL2fwk2KCqJikMQLh6ds3RsCVkhZwxnmv1TWEJfSnrY19B9wJEVHcpBZnZEt",
  "key33": "5BPj5FnPHWxFAuDGZByiJVpC9ESG4xXCLVDdNwFzGmvGmeSRrubfBNFu6uTdANzyyCwwGxRKfLbstFB8GNmpsG4J",
  "key34": "21z6bkbx5muCv9TRg5Taz1odVEH83SwkfHxZkeFTXBhyduQKL3J6rWmEHzYhKRdsjdufyf3d1V5EKnVTFXc8EoYj",
  "key35": "3ZfNWsmwUeWbftEvH3HDrZ9kM3zksw7uKG7Yi78YoWJpxTSyjjcA9fqDr9FtB36MzpFCSLgVaM82DJ5gjZEKPr5J",
  "key36": "5XADAGGsQwYPGCBQfCWAcJ7Asb6WCqkvKd3aAGbDkFz1oGwJbRyVTwsgHqV7sgCi5mxq6EMXBgmC7oQad33L7ynG",
  "key37": "48mgKzcaMTv7pqMsBjbCCUnjkWUfHhcS9ZGJm2f2769Myv35HUf7iVMoM794SRvZrawg3NUW5kMWvV4nmr1rV48C",
  "key38": "V8MSTqmmMkNXP3tJNbTQQ7RkJPLw9d8Xigw2eJMq9ts6HdRXmBsDGVPdFDnUNqp784tCjHEE2eJ7dXWtX9zzGLY"
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
