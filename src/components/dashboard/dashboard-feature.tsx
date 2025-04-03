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
    "4Ma8QfPC2qwre2KhGwp5aZPe55gb7hvuqSriYFottbvDjpG3Bb5ynY71w6PdMfmM928VenxrqLH1ZhpDFuhG6N7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ULy3MbvsS7CJ4LDoKYGN4X2FwsA7kBwoLtPECPjbtrArUS53rAkJ7PsnvrV8RBeFLhroenPEQDwHa2jUzt3LgEh",
  "key1": "6qnh2bBzE1huys4VYTmsrxLgqnXSeiiZ4TyqoKGgmgwRvEfGiQgqNzAqvHMNBGE1ExEb5dCsQdMZv4qZzatYUB4",
  "key2": "347L3wyLWAs9iH54yFiwhA9woGZyh9FAfjtSPqdiMfbHNV8qtETwgNYd5h4Lopq7KtX6xVSMeoqB8AmrAwpw1vL8",
  "key3": "3zMMurQZS6Ss9MovGK7W6NQariusQ4hf1akAJBP1Q2fiNSNzE3j8UtANEMNcmFCE2VRjbN47y3j2ZUc67AJoCLLc",
  "key4": "2jxUxxZoTni5PyyWP4k9GmitBJZK1oWnw5xk81SsEaPL7uTedtX4Nj53d5aQuKmfZxThTDQqtDBeQB1dZR7pkQ6x",
  "key5": "22a9Wjamsh5vdXx1zYeXbKrNZfZWN1ZVqTaoc26NC8FE3yRnmuXYN6ttY2wbojg3qfs7jw8FQAw6dC497pYxMf2A",
  "key6": "e6vvdWrVr3tRVtd1m9taWKPgXNWoNdE274ELEL4e4mPurPWZP6P13YrCaUFK6kpCn2qWyZtuk9YpUtkFrUYvtDL",
  "key7": "2rNEocwVuNnfUbQAqTpnXRWtNAsS4Pva7rLe6P34H6kQH1rzYLpUmZfGRdG65VFYW9BvqDnFe1q6ZhojNrkCoHdq",
  "key8": "2gi81qqf6dmEjzkNsjBBpJYdAzNAuXU4NivULjBqGc6e68B7MYgVVghFns2NmZgCfniqoFd7dk34epEyoRkujXM5",
  "key9": "2iAKEGL8Xx1NsLpU4gW22FYuGFhDyGExsBYcFkppUbYLapyyDPEHiNwYUAFh5Zdt336B4kRD9FuUbnuJHK7xDRZr",
  "key10": "3yUQvmTTFizcqiaVxmvN8km5f8hN2x8Ure2qDyUQHpWE8eMzz6si2AHHZUboxNaREdDDVhTrYmfasrwEGNYU5gkA",
  "key11": "5pNnAekr9TBxT7aS2ZQX11RscbuAbsB1VxysWucQHvsjP21Uw5CwUsK2aUZgZaYaD7t5La33opMen6gBvFu9tkAX",
  "key12": "58goPCgcRdjDNNzn3NakoW88nBBKMpToqBnFnDkVYV2pEotLSoerHUs87H26569sL6pUS8hJoXgsud4tcXZFycfd",
  "key13": "3pQX7ZtnogswHa48MkzXFKt8MBuNAaojRkLVc3MfBNLtpWjZ2bFXb7RDWpvpdMKkk8RFwtxxkvknDEdxaggtxJJW",
  "key14": "c2MbECXmayyqhFM9onuudSFyW1f2pMBp2CTnEabEEWbg1Tn3gzDgcHjMp31YErBg5wfxdQvPZ8FozyP7SNLiLLg",
  "key15": "a2AQDXAY9Y5Er1HXkhH3ZsMGYZpDzYunXBi2sLbULieyfyDM5x4VHGA86tN2CgjkC13iWeHCdguQeva2f3yFP9e",
  "key16": "2zY1uTEzti2WQ6DobT52AEJHBzwj8uRv8atogEskBcQTJ7rD66NC9VR5rnqgVQjpDkMbCfC4SsDSvuHc4CBzK51e",
  "key17": "5NJQQYqDK9HwmGjVxRo61AGTFTu4h9f1sYDuvN2azRgFm3UyNiyGhiK2FquwKxvbfp2YJF3u5Ti8MJt8SHkyrNd8",
  "key18": "5ziLK6FmDrspvS71fvJqeM41HnMnj6XskPHW1kR35Txq7yuwjia5Neem44VDvWjb6GW82icfJrc8UhJeQq3hU3bD",
  "key19": "4sGRgzeRP2s7KzCMxjxbyURKUZdCMUJLAA85KwmTF92mzjWxdsMtjaa76H157H2oHZop1p4EP723A3VAKqAThUTJ",
  "key20": "3XAsHfwcYFw6uGY7QKjrxXHKsWwFUnr15kBAi5hPshc1AXkqgstjv7vEUtvN34JUYRTTR9JNmtbePFZVjRFZteue",
  "key21": "4tr3jmzswPeCMYP1kK9mnGaBrYffqKWj1HbeyVoMTMxfieyDQ4kxcTvKLSwdzRkYNHCdzcsR1tnstCoLi28MVx8N",
  "key22": "3pYeK2j9xgCwyu8JUCyXmBGtCUV5chimF6eSPKpCjuiUvdaF61pJM7YJB952rnjNX238KrWiEW4s7HToJNSRYRpW",
  "key23": "2q6MAHLBLcV5M4uuH7GS2J2cygosfGfbhc8f4G7KDwtXN7fBd1cWd7zxxg5QoFz2A2vihJeVD5gohfVSv5u5MykH",
  "key24": "BE8Gfz9NUEbzsPLNMjSvkHws3hAvD6Qcfsd3GJutMcoj3JvbditHRDYNF6kLsnNZGdQHZXXJXGvyNUy1Z2Fn8NS",
  "key25": "YYnH4rHnF83ftCsHwLcsENxhxXZ8cJAH78rMVouWAZYnBU6zaHR3iAdmtUQDqpgcn2A1CKDKqER2WKTrc36mq61",
  "key26": "3pmTx8viPUbdYwgBniBomR7Z1KrUk1cPbyVikeKaK5myTWWCxZWYH14ggeKbLi54xwHPogjm3GJkbQTe3HzxAtHR",
  "key27": "3UL2HZ9gQRDFohipisWkaYLqR8SvgouS4DyTUfNLTVE2e5PXWtkECkw2SzePtRtTF6nf7E1RuMMf4MTtR8LjTuEX",
  "key28": "3NWSf6ZkeCkeUdrfkxRSc42ULiur4iWL7zYTtyfCRtdbuPDD4cKH4BT7imMsVPz14kTo4arzQPgVWNzuD2oWck8p",
  "key29": "4gbPaxqfx589U7a7shADSv5Vp9GDKVdSkgqhf4vy9G396d9HRcJJziDsY2YSKEM2DcKkQuSb2N3ZYy9sURieRNKW",
  "key30": "4d4KBMtBfhRxaRTL1mFwVspwHBUGCWiR96xa8acyTjwHVCDF7AyiEkWJxunHryTWRDqQowoHPHc6hTfeefNdY28K",
  "key31": "2qVVW9qVw2K1wYq9dcw4exP4QXw1wFFmktYFaXW8LaDWp1c1S4vTaDQKyJtZkXEVB5WB43VzY4hMn6JFbMKUXJ7g",
  "key32": "2c7bUHT2BvX8qA7VNQThpgZJCNw8az8AmqBRV2ubtRv6r6hL6nR21VAZuxKad2vC11uuLWUbe18JFxZoNH5QcPPc",
  "key33": "yYZp4SJCgcJRmX9B7fDRRMxL7nMzdCzXtzFv2mzzjabpTD3RDagp9s8gm8U772yam6Xv1ykUV34SbYjzB28VmHY",
  "key34": "2cX13p1WvDtHEyawfJ6LCUToe6Sggwbs5Yh6LvoBwZFmXgVXe13T2rQU4gsm3D4vNHFTod5n5duUKF6BzZUZJri5",
  "key35": "4MpDtcvg3wBTQqSyvqqDMUN6SmWtPKBCxNbuT9SknKR1CwGbiM2XhEnxeSNw2cTy5ZJPmY7LJvUBZc7eRZtzshuN",
  "key36": "5zz8TNJ5QbuSEbDj9RkNAmtXX1XCtCw3uw6i9U99R28vS8RBGtJvjoA4S8CynYeqU6JNoiZjEiRVvhi3WhFvuAuK"
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
