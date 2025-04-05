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
    "4Gqq5nPLLA7g4aWNfUpbFHu6Jasp7zeAmXkvPC2PbDjUTsd53fB9s1CZRsYbyjZGAfaiJgEhmukHY6o8aJH2p8nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MYsJiV6QPGRjYXy8inAwpx57s6xRHfoPUGrguhf2wxiNU52FSApor24SHGFCJYagxhF7yqT74UHFgbbPx5CQjB",
  "key1": "yMYvnSGsY2Xxbi3fAZjv2NVhSbrSwBvTjCibmc7C2ctWSXniDCY1n3uCrfmeBCeoh1t7aVBdgqHBkB46NbD2t1Y",
  "key2": "sUg7sBqQtu3tqLQN1oLdJG61SksbCi1KoS7FfT44rSQLNSDQFjRqcZAp67eVqQaZyLsiHMwji9o4j4JYwVU88FG",
  "key3": "5QiAs4gG5BRfThXY92cyFnJJXr8MoHwcE9GkGxhcuTbs7aTX8bM4RPEdW2ngNnzfhSqvVzuJG7yDsye3Hikg8XTk",
  "key4": "5vbw5ip3JjMZdTmWsVGseZPLdEgS9uhif5jXMrGDEgm7jtmkX3KJgNDP2RZfNBCsjLZiWiX7FPYZuCeggScx4JC5",
  "key5": "5cdXCN3EDqW8oLfD9mFFA3ciSRztr4omiKjCdo4iWnBkown73HWxiW8HhSw4wHaPMYB6T2c7LwJBDM89hmwcdW8V",
  "key6": "5yYdDexbbHtbX5D1Pj4WpcACtF1YomDbgnbq26MFR6jpLB9CDxvjtzvQY32dnNGP93DjVSGbbLZ6UKaV1GFuuZN1",
  "key7": "5zD3QED5siQHbmMTVcrWqCGmtwqZ7abuzaf2nj49oHqHGxR9QSsKXRYmRbXUaFuRjUxM6yWFZ1U2YpC1UpkGkE6r",
  "key8": "yCShiTzB3UH8VGZevGmnDjkc23brUHCozTzn1EH8azBPFRf9RNfKVsFYY6dxFSMTQAnfHU9wv2xDZ1ozKjvximx",
  "key9": "3GbFy8hDSkaiZHJFohMV2ijWPTmrADJxvogvzZijnLrFpqqJrDFrwfaBRzEBLou5fHAyxCEBQ7DyLZsrNPd8CE3H",
  "key10": "3vcrkQ26pbWxeA6MVoELdMuwoCtbig1BBwsCb3WiXfwk3aHkgHujv6zPuEpeNR1FiW67RF5XWZLY3RbNZYLrz3hi",
  "key11": "DJyUDVUzwXJd1Lp8DQq5JevCSNnizyLwiJDnoG4L2tH25tc6ZLcb6vtbmFF9UGG14DDZNBMZEXeCNeuzr6igpJz",
  "key12": "255RFbZRngk9heik2i9JfTfXiSp8RjYeUgPooVdzpkxxJWRZUPVZ7f3LP5xopy6k3bmowdw7rVyNesA6Gn21Yfhc",
  "key13": "cnAeWUSSWBgEK1ZVUcH3dxRi6V9LvrsvahCUqBzJ6UafzMSzQGMGeywxakFkKtLqcAFYMgLVHYybJvPF7z15UBN",
  "key14": "3TnARcQE2azDkufUCH9K4hmzJWCXSc1FaMQy7yRDVXwkSrWCWweDjGUEUNwutjdVNLboiGtXUcv6dpkLv2qhaR7Y",
  "key15": "X4hx5n2Ru9NXNDvqJ1RVdALQQZqJnq6qCvfX8kYCKh1hqqn7tSJdSH27czVWMPMiZXanThcUeSL3e8mPMXegrYN",
  "key16": "24W36msVS4g5r2g3es4kcqC1qgBpbnWsnLR1FXKi6Y9VJJPf2sy9z85EmTgRkc8mx7EwsyMUbbCmZZGbXWWir45C",
  "key17": "RxMde8T4XyjWRs4F8KkAupVyS5uRBhLsxnZWRL9pRmvDpS3uyV7oN1AnerzRBMWwhd5im5MmrXD89vUbrsVc6YP",
  "key18": "3yd23to3Dpgad3Pw8QVqm9xu49pHpT8EApg5GWdXWNSNCkJBpgBsRe2BeiGz3225rTxX83LXaPNVENMxGr5kSM35",
  "key19": "NaYgWYKneCJ9PJzjZ15KDJBXjVgvUtsGS9VgFcKYgbuJzDFoNbrpGu1LZ5DUX584rNfLygLUCjezLvrnYFWYUnk",
  "key20": "3fLyghoCV7tr2N3n8KLQgiMFK38jQBrmSVKxjuxg78cHtqKNqNz257CoFWzwCPwHEVg263JFUcSWEK5Pw4GQqpWX",
  "key21": "34AvvaLP3Jc1ynXmpaFCJ3v3MUrWn8dnmyUZFXemUxcvfKp1vXqwGSs38t18HAm1NdQ3yGq8Yfp34DjjyXD9otPv",
  "key22": "S7U1jfyjhEmvWvD2RoACNkG9fdJsjS8S8Z2VoqjMWjs1TVEu8LtVHSawxnszychd9QJToUEeYZ9baub5Pu3DQAV",
  "key23": "5PoamQU1vZ7fnvNwafqJpfiWoaSS7EuCkD5zR5Wgh7E4SkwJwC373JKbjfiuhZiXrng37eWUN8H1hF8cefH6JrwB",
  "key24": "4kWnWPbue1ZPyHjoVyA6mV3DsfLxkWQ2LduFJTFdcwmEUyBRKCkAKMEfSS22tsPABZ2zt4tphTWdnsqobAoLU4iP",
  "key25": "5mjLnV886zgPXmREjaU8ZkUDY66kzhaeUwTtGB6VScvWoWe38TVZDCUNrP2hxDD9zeEhW1sgXTW1ACF3ThSsEceq",
  "key26": "akK1LRo35pAHH2uDGBjbzvqSQ51huCZMDyQfrRLXV2cQUbEhE3cGricWUrfyF7RgiNfeBHGNCmhJzbeUTFchxtj",
  "key27": "4vCDuFgEqZHyKr14iBCrJGQbDSJ2N4QqaBCqMsCBxb1ccPU4kmQweZyHR3j17bqntCa4JtehS2dc3SfnPAhrZdrU",
  "key28": "3afB8vMUdPPsLzW7ofTq1dxD4UPVvS5szKTd4qsyiXa1Ky2sLSCnBEh9WJ3839pAeDjsY7boiY7p2wmWhydr2dQ5",
  "key29": "3Rhc16DkkvyqttJSTDhoqQquBsdhst1Yf2SbmTqBG5eaH6269mynRLw7uYTEAGzRBgxPFtAknZcM2GMzvkbny65S",
  "key30": "nGHUHPsCuyUDYQHx2vyEzPdqGS3cDWJaoF7wj7uw1Y5ruquwLDxh97LG3A7FaLRSvUJaD8eLwH78G4EhBGxWYYJ",
  "key31": "3Ng6wM9nbnBb3L4uhKsoFyJbc3P1EjH1RQ8ZA1uSAP5yyQWYhYxxD3hVLyYrcF7SDsnkJPZi4yQvKCnjGet66vYv",
  "key32": "urppN7FEjd8C4qodpn3F71kpXYTHqNafcuiuMBUSXeBQqaWrxg9SB5nfS7WCT9DF8AgLWmNvhSwSuBJVZ4cT1aL",
  "key33": "3njpVTGu1fjpHuaxj9PNXs4NHMzutvaX4urWck7WM3bQ1kMZuqqQyRneQAp5A2HwWxedEXiPjBbCvon4zshMjihJ",
  "key34": "35zjphhL8dXsXeWPixuVCdKkUzKcKaS3bDAEsDvc3249TeSRQsntU8X37U4yLE84QLMdrzompEDcBi7PfEKZybtj",
  "key35": "2Rr41sqJAEXVZCwP13df6QVhaP1H65ezsyQRT72tvN5mY7UyEZVYi5MDHpfcDQtiijD7DjZbeMfFLEERkyPet996",
  "key36": "3zezp31b3CcS5iEM5bCQumuT3dncpou7LhNZ325Njyb6yNdWsG6UPoqpQZLR6GtYkpSXWkZNCSkBHNvupC9xLtt3",
  "key37": "bEsbGHFRujxHJfiGUsQqD8S14Xjaq5dHi3SSLpCyq1aWVdM3zyn5KdTipNM79cLwy2dXpnZ5gjWqMMymxZ6vQao"
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
