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
    "nkTymUVdUdY9P2ignBN9n8hcqPsT7zanXfxk7C3zoxxK5tvupPbWeEyptE9K5LAy5XRQ6nuemDbGzJGAgPvroPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Brxs5cScFv7Yyff244KYsCQDhQ4GQw96Ti7ZY28vqeoUJAwT7gakBxWTPiTio8JNGnDKZc1h4zYqhTeraDLuusX",
  "key1": "5VqJof53ESKaucJmZTY4V84yTqBj1pQykX5XkekwQUpV5w7zj288RGDCrCRenPNq8pYcbQmNYcpXnCEMnU1L2ZqK",
  "key2": "2yJGwgsBt84LMjUS4yZRUe5xqXFyHBQMnFQ4FfU461DHneRKEAvG18NztbdcDAycXJFswUxt9jwXy7ZhFS2KisNt",
  "key3": "3kVqFuhDEQ3tjJYMhMD1yEYKbeJGc7TfBiViPjzmaVAvH23aYcLFR3C5SUJPiAphg95jAESSrLqTmyyFTCALaNzZ",
  "key4": "2TuQApiCTVFNgKSKkW9g13zMo3AQCaij5GJak5Wp4tBW5gm3TmpqwDTSqUNMaPiHSroGQDX6cHKzGnm3uVkYzabG",
  "key5": "5JNbeEriodgekjxh8DH1yNKkMdTS4aY5qPUGMaEqJhT4WUuT5CjyLBkMogJ9ibN125SieTeTqfR7g3YxhuNALh2",
  "key6": "aFGUKGjKf3dJuicZmU7sWhWxnpynbmvbAmr29G1HrsNdqdUDwMrbuww6pUoB2zXShirXCwFbTHfjxr224tMzrwr",
  "key7": "3LJUdD4VudK8M1y5GLKksHneKreP1NqHazmcQY4LRMkW8FciVcqrVKJUftyjYJtpLFKN9RMckPSdxG3rmez6kzWp",
  "key8": "2mqsth2jW6D6kXXctbtXVxZG6N5ZCg43Xr1QSoB6E2ausJ95igksxZRhabqqH5eUexQYmfkC1JXDjQ3PVY8skShS",
  "key9": "3kbRk6LBM9EHV6uQ2vWeHWcDQqtHs6dToH4KWEzHJja6aYWi8d4JJJLCEJczY8oRk5yUwECFJrSwKvrHZC3D9BwW",
  "key10": "2yYxMSP4EYBGy3jZNhTfJh6azfjrow9DHQqa6WsuZc1bhBanSyQTsWsEM9GmNWPGBju24XNiPjp7yqmZPai1ZR3v",
  "key11": "5Lyo6XLSgVev1aYP2kHps8edCPBi9Y3d1XDHwQaECiM81nuUFuKofKdBXdojXxyZbBaKrghh3A1tBHhgPHT8ZftP",
  "key12": "2P37hovEeuNHpLD4ELmaTKc3rnepB9EGWbPVSKZauYapQSyXD9KSv6xwG9uiNYm7MQYVu27GqwG1ru4qQYkwW1dd",
  "key13": "32X4yfcekPYhmjzKMXy5wNCWVe5611bvvVPCxESkBK3DWxwSvzViPG7AmvEDqtTLHUz2kqr9z5eriU3DnLfDRLQK",
  "key14": "2g3coQqJ5KVyyYHxvjHZaqdb8PhSpiqctqfWQEqyyEhzHwse54MJ93tnb2HcB9thKUcLoj2wZfaKxk8un9Wos9vA",
  "key15": "xnLBofaETXdGEPyuF9zQDtCbCZw1bVKXAvxMRV64kKyD1hxEbZbsjzG9MKXw5QzJQemP1r43jLZLVp75q6kLZsF",
  "key16": "4g52vphWXvcqB922tupiqL1qrCpGhpnTpkQHAsRCLJQyKn8VuPAjEyXAjBDkhzTPM8WPcTYxMzjP9SjYUWKRdiW7",
  "key17": "2S9fowU3kUqqe46XNftZtbnqmgPhfju52Z73tHSfo9YA5CADCxT78hSw3M3Tq8DUh8e61YdGgwsJC5mozMdf8Rsy",
  "key18": "2dHQKZ265R8tz3tfxM3PXV6BqY99WJQGw2zLCRhpadeTLZzbZoxKoumGkcnCcD2vxPgfGRJUPSUY71kVwv7xuci2",
  "key19": "5Z78Kb6hMvy4fbNjwjowvCqKVrG2FGop8jw3JXZs4UiFnTX9sJRnbaewKKDFHFUZHsFxGcZvoQjFzRHTAGkWFq4b",
  "key20": "62dECqykdcCP2xVuNj9m78NgY8nroxoVZJcU44GVpaDVgQAYnJZDFpv6k3zsDiiHF3fMHz2kdKoBvMtNEEG8FWHE",
  "key21": "2hkbGSR6ZRx2UKiVfs8sbwrZBt6D1ptfd5PrSz62bmSdaUBP2JjPeyNFXqMHEVd9sKJuDdEnkAet65AJUBu6Tf6j",
  "key22": "2eoXkzNjC7RhUENTF1SZpSt7TNA6jyzngC396VCqVRh4YBCiKnhRTg64D8tWyL4YuGXh1gigcKaqpkgHRLwWvjvU",
  "key23": "4Nf9tZG1CC8ojwCFqzTNtqWc7WcsgTsTd9kHBkHdDFQLKwPn1drUQuRNjEcsgesNq29cPbmnnzdaNg3Lhtmdbfi6",
  "key24": "3pqpSbBgEqp6isLRz29dhymeCF6HTLZKkA4ypyKhG9Vn4KutdpEixoxd5iqyeErv8GfhJ1DGbSKa4qUHJ1jXXJdr",
  "key25": "5QkTwT213fbR8oCg3SXPdmuaWTfL4pqQtvXqsghEzmeyPVkPMY2rhZcsByjeLAF62DXgZ78NBkyBTdsFkjPaeXyn",
  "key26": "TKcZ7NQyg9TSFuDmb4K75C16i9JRvpNoLA8T9j9ujW24i6raXdvaoN89azvWWHiSUDYmLQ4hdjUgo9SoX1wTXwQ",
  "key27": "5AQjfk4vbZbAkwG6vWxS7U3xj2AHRSnxLQcre3xKE4CKF31zfGqgAceX7cWN9Uhqbix6GMMJ2v22szXN3WYeEZ6m",
  "key28": "q4nqW1VjqyFRrJmfFagsdfvW2yCKqWvgzyZisFrWYoC56Qpqcqkgfz8XQ5g54NQeEASgHKQjvbCvyA55eyzizWC",
  "key29": "5Dia6kTKGkH13FSMmeEhg6DqwjaoycqjVk5nsjPYsDYhMVGbtFQroGRKivWxgQdJSGpm7Xm311a4HdyHHQFKGaqG",
  "key30": "3PTDBjHUSVWKZRhLZjbQM1qgpMsQTmbeupspTHZmfBZFjxnShL3jeiTzZFYRxABANH7qUXZJyJNDubmMSErPHqpH",
  "key31": "aQFhpz6WTg7WCsB8Zhbqt1GrVh7ThMgbAK3fdL4UQjr9JjV8znzYnbjsbzhaVMqz21GkaK77X3HFghtoEJUEcf3",
  "key32": "3ui3GJp1ep2u3XDjtHci68CzKDYZ85ouYahbcgs7CDbSeqLoXV3mXAU9dZhPbZ1NBRGVCDD74qfL68XEBYUpT8Nm",
  "key33": "3ETuQBP4uyb2bGni7fw8P4e9bqCemxAUv7VPEUSJL4mVcRNT36EuyUQ9NPBTNzXwhFHhF49fTnPPSNnDSVLXhvxe",
  "key34": "2nTYVTaCYRQ1sFHgSbeyKXzkN14WNYDFL1FNnEmqXs3PvQro6iwHW8GcF4MmxXdyEZhR7D9dhXkPPpyTbZL5aPAJ",
  "key35": "5TiTGYW7tSR8t1vTvh1JAvb5r5o4hXARnCSMq1spNwkyExQ6X7w6EKN52n2f7RQL7sEBLXzs8dPkrZgUAJVKAeEd",
  "key36": "3DRd3qFCGeQ4zXZeDn8vVfvMctv462unLE7HHXuBXVnk2vUrrxZkrVaXsP7jWCbQK1WnG7krkwZyuXo9RBMwfkCk",
  "key37": "CjV9JsD72ZSx87iwuVUX9ZE1fFhznmvC81Gy76namhn55cB4mBiQDrjGzKxTLLPybYic98eGdnhZQaWV6aRSasS",
  "key38": "3ygwzGW3abPicePUhrGHxct492jnzWiro9nitFhWmSHPY27tLb6qKXkmqwE6mqTyf2cuTv4fJawyjC6vbREpFDed"
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
