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
    "5g3Sv1QPu2pfgHToLu9fEzak5y9MY7EosmzCiu5WBDFM5mXASJko9TDaoXkBSzS8scLuxp1m6EUyN75BmMEkEahW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhX26xEPGSRp6PKHDdzBdq7URjtF4u7RDvmLtbwTaBYyYGJtcrgYMzH3c2S9FgPLoWAEVB7LyCPD6rYQR4ZhsCe",
  "key1": "iSvXBviX2wXqLC9cUP7EQR1fFe8TEfZ99i7nUEe69v38Jb6CRCegYxkoqzekub1vUXSAuRW3TeXCyAy4NA6ycqS",
  "key2": "231kJErznbjVr6VxQifhLfgSiPp3NbeJ4D7VfurMxJc2C3Dh22AUh9ZmHtDznjsK54MiNtXDCsis8MCahJpuYo5L",
  "key3": "3cRiKqAuU8cp3wMYJLqUCHKNLE5VoKcLs1DeTnX7ksJke4qJ4b4NsH8aaQZxgkZpr6U7hQoXVawapuVKrV6aSE53",
  "key4": "2XcTdnjYWezGiUK5ZWNr8ER2ZtyYxEcZJPuWvoFxRmhT15ptTjjE7uFNq8tsS1sYU8beFMcXzTWqGr3JPvrLZc9i",
  "key5": "5U4Z7zvrw5FiAGy5L2FDBVBKKNCfYYTyeM2PVnWUNtnXxoa7ZeVSrcT5Vn7ZxMmAqfkxMJJSJrnwQBKG6cM2ibbs",
  "key6": "5e4MBZqqSvKdiUf4VpUbPiiSx2njWA16spiAeBM7kexNbQfZ9idQ4WeX78Jvt7yRtf9a5FNjVHda24u8gSAq3uG7",
  "key7": "2Fu1vSRjq3NvybE7ghmw1eeRJa7r13QWWWQztDkAc8nLbmEwfmHibvA5HDeh4iC3tGMHi2PyAu68ymmz3VpwfDfo",
  "key8": "ZQTjBTiFK74XoepBYJH9RR3rAHzHN4QfX7EnfgCGGtHT5CXymAmZ2u54JPyE6fr9xoiU6kmn5vA4MTkjaUNY5nG",
  "key9": "2DbFwiEBEsQw1KFHeXEPFDdVkJSwt8iNTWbRoUDUGLgpuJuWmesjZ6wtJNmpCoiNQA74VTuRSWg67459cuwpH3jN",
  "key10": "4ddn5wnumxDzB5pxZHAZWBKmsRDUfwNMbDepb3uNT77irjdP4u6potUnXPEsFL75W2x8b9gYKd19sczn1gJFr5MH",
  "key11": "31LCZ3iYCgkSc5s8uafsKn3ULLgZYmvaGkvk9ZEvVJF2bm83bUhhMB7oNhPc5KWVVzvir57wonZH7mymvdMjGPuU",
  "key12": "4uSqWfmeVTDtKi5bxXT4o56cJETriP3ZAXikM3Z2o6Jm6gc6P2Y78wLuAGnFX4yY2E27o6XqDU15NYBmc9jU6iWY",
  "key13": "2cK8YVkVQfpMZmv3c4FbKEmzukyMvRjwe4Z1YMVag6XsmGYdbYh9KKjSGov5MBSZKC69pQxhV8WGxnLvVpshngix",
  "key14": "3J56fC3LawXpuwvoeRTHKUG3ipV4X68Qxoc2P6yMXyfsqRi9LgUYYChHtDqBxxDEAW9bviuFM91CNJ81QtynHP8h",
  "key15": "mL9mMdNWkarD4BDgAC6aFZPskw6nGdnCX9EEASF391GB1QCixqodfQmQ7TRCAhHeF27GFChdFJhzoVCbKxnptZ2",
  "key16": "4F6Vg62NCmtyNv7aD2CJXJeK8vkhhkEjdYrJ1BNRHDGy6552EY2u94NUmMEYf9UhzxVxXNDcDBw8ndYjGpEw4rxk",
  "key17": "3vhznTq3PMv23w693V7jaimSgx8ma19Zgm6nxNiohDjkfeMeoXbZ4nPKtefen18RmKKgDtWmY6qePGfcSvxRbro6",
  "key18": "odF8LY55oivWrLhA4KmxDx3PTzSqiTcPoUk1HowVfMEG3JVGcZN2qRmwUSFe9qozqF2X2E84Hm6A65GmMSTkz4X",
  "key19": "5fQxMt3cwdjMpMSD7orhHHXoZ81RFjzaBFEWrBm7cePQbP8FCgfqoRcdw2hCBgRLBJGhPVkHtMXGLLg61ZUwVhZM",
  "key20": "43FM3ojrvbaizQ99NtSjFEjeE4BMyJdN6vNGihtPrzd3dcAwhegkv8J5Jx5mJRjh9Q5PZKKoKeBJhQo7nqzs6U7g",
  "key21": "3wWQbWNym8v8HTp8BA9yXMStykqUJdSQRjEShaSbaX3cjAbN8SkZqxRsFcnrokYq4CMgCS6DmyNXmDWCERPb4nB",
  "key22": "45DTooCzp7p9L9C1YM352c1W7NEwUgUJJ4QimfWieFJ53AoLrsp3hmzk32ix1FufH6BZmEoGafnVTrDnLQpS9LbY",
  "key23": "nUANmCD6VReKS8ynm3ExJUWhN3RNfzqSEznKPNLJqPwvjZsLHyRAKGq8zS9jfU6x5xHi6DSeXh4NCamWUJg3HvW",
  "key24": "4F4FEXURjxrcWK1UhLLBd8Dh64wN3gesbDNKv6pQ6QhQYBUkix8wNPKJDGA4dP7iUEtHRDhVYnNkKGqkSev1MkQL",
  "key25": "5pPJnr2Ju5CFM3QSnvM3uqTVMf4LerqzJ7uohfR5Pjoyf4k73MZKygomWYTitoz8YNNVLGrsL4jFjoHW6QtXJXuD",
  "key26": "48QAfoxRr51f71QrzBCBQc2gxDfg75rkhdwNDiXcVQpvdWJiFr2VkrQz7iVthg9QbjG4PfHVQ2wuWL9NTF5piTbG",
  "key27": "3hw5qTrnocc66ysQa7JVrDTq4bm6RQhF7eAvqVyRNq7HNLoc88NUrv59uN56n2FSJiWr4yqWW3uDExESirCFs1JL",
  "key28": "7WBfxr2v7tDKbXCo2J3ydpDxZ4bSwiczw6C85XRAFzKj5SwCxRQf3NWxBqdGzcPsCruq4aDGEaFyTdSaXoKvr51",
  "key29": "25JWctXqiwEWrcf4gLgw9m8Bwuofn5bXZw8hfuMa9bTKAUfx7mEGGKyjouqrj4cXA8d7EaUW92CL98n4Uygp45mL",
  "key30": "51QahtYjCqzorXMfVvmjZMCmRBDYmKpSsX3k3SupkJB8GXY3ksJ6VU8G8iz15oAhxke6ngi8rLUqhutmFNNmiUuU",
  "key31": "37kmBZoiW7Z7TG2REgsktU8Hzv8k2irXX5GFNPbCjPhhWAN3UQJQuaSF1hdeGD3hMY8xmCjwbb4WSXhdH5XMdDSd",
  "key32": "36h1f6Jxw6pvzNn3rXj17fFf5tYnVhpzXqf9USzuvFziYVp31BZAXyg6MdpbLotYGroFmJmesufvLtNSFG5mjEYE",
  "key33": "51D7EfVF57pE2pQeZP9qbYj678KEAMJHzbWjTdq72miWkbyaCEDuW1ZDqRsT8p2L4rKpZ7whnPEumHnqqiJNxXug",
  "key34": "385TME2XadmpLo7g7vtaZ9UT6iNe4DfsSc4zCYodKxmgFLVoQUwDfAHTFHzZWaGcBgXFyZhpZiWcLSGu5MxynXrM",
  "key35": "4MnxvbBHzYtemPvUD3AxBwXP9uzUaEKGQWMZUKPmYoMk6oKBQ9pE6f8tFgktURTYcDtZaFsRCh7d9eHjErWG81Wt",
  "key36": "LjM2ixcJEHz4ZBtwKr1RAMEtVZFF5VvZTyhQ8Dvj7TkwmtVkzfgFpfW9gECVM9TEvuy8wnH8dx1fRJR79vwe6yV",
  "key37": "McjMFYXJpM5aazwDXsEVnmdHE1msfQWcRFQWWPRVAhwikx9RFpsdjotghDxDDDCnMMn71i9aZe2aLQsHrMDnne3",
  "key38": "41q4UKPGg2XaQhtxipE943jDYY7xazUN4wkzaKGQzL99LA4kQQ2GiHt2pisZ5L6EVDLym9Jv3KyUJDiovFdYRKWv"
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
