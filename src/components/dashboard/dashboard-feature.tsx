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
    "4f3W5LiLCzgy9Dyn8CyyeuPn1rGUxPsDjEgESVGbXFQHLB4dJ6cy9EFGU6nyNk53mxd2wQeaEZ3HwtBxaTxwpspA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UaEAepjbukGVurRiyAsMyEefuGLZ6bvbTNdiM6cMXYbdwNbysqShmHpcKZn6J3FxsWF2YKxg87j8oUP1ZyQdwyU",
  "key1": "5FNLkk1fLPEiMsmCEZLyx51EyVpsKrc1Nt2AqPznDSfjrnpcCD3V7KQud3jR9utPvxwnAhmHwJGBvxhHRXRzZbbQ",
  "key2": "2YVv61okfmt7bBpqmRgYjANi3n9e8CLf3JqZqw98xKbVDsJdePApdY4LzfceA66hwqLNfTePzjLE9ZPu4TTyZGfR",
  "key3": "63dKbtaFM8KufWJXpxj9gcbcMcHZ5yCBoxQbFTNRXS4v6eyxKdBa6xzUc9ysqsJKFLnTKLBp9ecgojJKT46J21PD",
  "key4": "3BXkGmwTbNJn9y9MZzxPmBbKNiGKNW46d9SSZAzanjTT3ozaqiQEdtTHh24RzTnEhydAYpbA46xka6yp1jR44r4x",
  "key5": "3fFnEb7qxNvE4WJHZRxyV9cVD2YKaoY9azj1uVkYWTF85XJMgc4u8g6JaJ2HhL59TWXz4z8sdtwampnnqXn4Hmym",
  "key6": "5JNS1vcrcvpeEFUvbHQYuvWAn8yKcSSvn1ce9G4jW1MMCQyb7ANHYoFZbh2iCvG7ruNceqHXzkCYbkB9ZmBJG8J6",
  "key7": "5vSjRdDxWTZnWEKTSgCUogJGPryHt98pqEZZFowusK6K4QUy8dMybx1jEuFkG5zEvosQ6cMFgPBHS5CgWAmzyZHR",
  "key8": "5Dg3LfJssFnS52Gwv82H4GVaQYEgyEXXoMwAvQjxPT1eP4fXRZ5uBD2s9JirBMCC5CsrhDGguGdejErKm1FDaroe",
  "key9": "kryAzeu3Uc97o8mTSEg3mwtfKQVFwJStNKnNtJf1PC8aRUuZiASiPFS2DKa4fvNS6wYpnBSdbztGkHtm2Vt38cz",
  "key10": "2Kk7qo3Wj38JBktVa4XAeJsM1Ae31P1Re1S1rMM1Tt8vEYLyFkewRweHN42oAVBJ9wQzqEqmEETFRysL6KyWXVJc",
  "key11": "5PdkTgjN26GvmeNKCJ5Nri68pJQawXJi6VePShhWqXb1MhjCWNHo5Ms1soQqJbHTPGdEYo44G4MsTVqYkLSC92ft",
  "key12": "2J1EbfG1UKCUtW3eaFms94ngYhbMgwyMghFZQRotLiqsYvymoKVDUx9xGUwqEHsNTtQC8PQCz3zzxAK98nKTj1LY",
  "key13": "Nk1vf2vtU3URHGcKF1EHWppevrcUMjngxGsiho8Ten4jMGv13Tfug8X2ki2qJrzgGDTKg8FxsvNbEBoj5pxcoZB",
  "key14": "4DVFbQa7towGXiLPaC42uHBEHksQHPNwaXqme5EV6pxAohZfc9CdFMweeeBZtDYq69BnJ2iA791eCJ34Kr8JPeKu",
  "key15": "R5Ym559pfYZfxDK3ofGbabpo4bvGE5tN4of6FkxFWxwJfjAfyboNYhAoAEeeBQA68cT5WLPChTDNzKYjybXJAEq",
  "key16": "34E6AvEmGVJAeNhrsiVf8AH7gUzB5RaZrW3wHqdms8EMZYXMFvRCqxQsFumbRKARBxysqDD4uqZMHTYmSwUqkHyD",
  "key17": "2CiNVY49G7agXjzqxzdiuZqX9te3b3HheVAWkzMNaxi9PUMkLCUzdiYgHnVCTFPrR4ZohKDbU3gbSVqyVAs4MQYY",
  "key18": "4NVWDCYsYraVXq9KKibnti1hrbMkbusFAfTrTYvXEgP42p8XHAd8cs5uwyBdvFrYymvzc6evVV5JTCc7Sngomwyx",
  "key19": "5ZEAyqwuTuFm2LMk27Yh9mj49rcmqWu9UwJds4XtyCPK7N3AN2cAdg9GgzF6xF9ha2LMA7PZcaHfBaDVQiE8xvyr",
  "key20": "2j21EGfwHqScwTk389wHjHbmGJ3RcDuZp5qFeBFnKTiqeizVzY4py2tuhe417Tc5XpeuQ3WCijF19w1pqjcSPGj9",
  "key21": "3DAJRmyA1yJ3MtzXRyeJVfTN6Sus2Cf6CUVWUWwQXZciWWQ9VLVkxqeYE3r8r4nuoeyNsUCGGQ246GHPfyhmBzvr",
  "key22": "3FNp9w1TMkbMoDRw8a1LNDhbxdBrbTk4wd5c5wrsGaU3PwMdmuAgAYUjo7ggSweBYvwqxNz1tEeoq1Ta3UfwmG1u",
  "key23": "UgXB7D5un3H5bj5Az3F16ocYhcVLHy6Te8kJtXYUvuZueGJ1wepmFyBfSWgdfNBT48XJukbULjUYvXggCNitYjY",
  "key24": "5EEpUR7mfn1bUd4eHxrQ5eqHKQg4VyuV8iHKqAKst2uYV9dbD3MsxxNZX14QLqRgJtmvGaxb1SMyAjiammRmtPcn",
  "key25": "4z1XhLypzRwH87QEZswksARKrB9wFoZ8o7qmbndYnTaEvHZkQuXk28feYN8JqrmNXEbQyuVpMbdrFqdWBrQAwZdg",
  "key26": "EhKZiEL2ok2ebuZx8iELqTWYz1GfCJe6tAssyXm9gDNqaHg6jWLEVQguxnF3E5j38fnGcdNLjX4xErSYEbhHE3S",
  "key27": "4HWXJ2jLpiBnfoVpwVngAMbfXauPEnxSEi8Gy7wipsNV4xxDiBBA2rSJtrb73SEEXatY8m3RHDJN7BA1Jntc6QEB",
  "key28": "4LiQahUZWG9nohqLLsjVSY8t4KfSuyajLmxxSKoJ6LUGuAbCJWTvYs664gFETEp2RFaXf5e1djHEm1AQt68bGbmY",
  "key29": "3qEfEMRepA1eLWeFEP9h4aCWAUJKvnVUhPZDtieMHXGU9AQiMvu76HieMoD3Sec3arcr4rN9M6ZPLc9RLMHBa9Xu",
  "key30": "i8et1ZqYegdLdYVpRDgHkoBgRqwXze8jGfgcQtHvynJon8yPZk6UHiD5WQ5YZYmJaCNDCXmt3safzdgTty2hmUT",
  "key31": "4MQTh1BB8Ceh7zyP3M1xorLxLkkYqegh4jmKSBQPn6WTM5cBHetssE1pgSfYyGq7VyBY9mYHY7hEG3745sygs3pk",
  "key32": "kiLnjGaYEgNM1GxpvhXP7zedpJrRb9qe7d3GjRmKANjHdciSdWH71x8TpBEAkvew7sT6oMBibUYMJhaDAyLkzAL",
  "key33": "3JcmbeRiHiLfHbQPc6nC214jPvUjbiKowQZ4B7M2TYrjV5os9vDXemQsS13GtP4roCZ3aztc9NRWc8C7if65v5AF",
  "key34": "4WHHLVGR3zw2jx5ws3fGrSUU6Mou2mGv82aS6TDUdHi3VPnMyyk85j9U9aZZfQvfcPkt6LJkKwD81zHmR13PaFkP",
  "key35": "4ua2fqQaxvAt7UBmnVpsDd4C61GH7KVQeW9SiGRaSM6N7ryspYtnedGr3DcuKF1KoSEQKuSaXYoELbMEQuTrauJy",
  "key36": "2mY1dDyc5quFYVgL2CcCYt1iQVqAcgBSmdecFsMFVdBuFFDQFhZdCasmcVus7GcDPiLX2xvyqRn7892apmfx7viz"
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
