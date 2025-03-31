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
    "5ZHJKuZQgBb4M15k6GSzRYVvm39s8EPeBbgv7cLXd1tA5MLaLLR8kccC5t6jp9ZvVvH8RsWXQFWiHebwvcUqbp11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbbTZrtXftLcV4NEiwAtnfMiKFsJBECZNZrre6fGuTN7o2bY9x7cR26wVqjD62JrQKVMxqaLRkbf2maV1Myqsvg",
  "key1": "2ZKMw5Ywq9phmAs3eTR9n59kFnJWr6boT1eQ7gfz8A8kjvxumrrfKQVFVnV3CugAELDqUNsVDoELikCVZDdrfcvS",
  "key2": "5qq7hxpRZ7zfBmuX4ghAbV2ib3omwVH49YoaphWhP3wiAdwCq1Pu71R1aaaTUj6D2Vqut68YfpPo31ofos59MFZs",
  "key3": "4bW8qnJ2y5GHNsUGTdWA3C79bFHwPEYdSr6BNdGwHDiG45MDr31bnsn5j6d2zTbCtUtkuCXhGcXqfNQMsiSwP97Z",
  "key4": "aeMSMryUtDZxCRah786U4ycsVXhubfQcrAL1i6qCdy65djfHa4QkLY71q35NBbqwhajcSNPDvehaoJQJE3ST6xD",
  "key5": "5xRVH1P3hrb6C8tcFT5AjW6ZMrWHo8abLP1T6XzLfZUeioBv5ktCUCra9JamoGJwTEk9SwiFXqVX1Sb62hbNEZPC",
  "key6": "5C5rSuSYRPj8yKxroazKrF3V15VjgKkaAZPQijSx1WGzr96kiwj13N2kHXVM9RoE5kpg1AMi11sGdmQ5mN8A9bZd",
  "key7": "2f7t4Mgpkhx7KoDwdyhP2eEbwX7oNriXFSHWewtvKcCGXQmNpDntc6cKUAxyihFbHMXGNUQvGK6FkQquPjwZpPJV",
  "key8": "2LT7XyfsD3vz1T3C1ff8VFL7jZL7m2vxix4LYPHRZhjf6PbNiKUPqHX6W2HrWjPZjbvQPVZ6R4gWTjSYkjx4pzEY",
  "key9": "2uuahScEUCNadKWU42iPqorkBzoYxGU95op3krYufNjtJXhqPPrFkLFA6dT6mLBGAXa2xQ4dFUY9SQz4cZP5mpc2",
  "key10": "5PYQHtPA8X3ZToP3gCreBqhDQXy25tt2V1pfJe7Ew6d4EVPN1aoAiiQKtSRWCzsRDV9Sjvsd7zGDkVTGA5adGhY8",
  "key11": "2dhhVDV4DwwJPHa2pwEMs4Gqy33kb6sGtQHT1RVq7pbMXXDqteinHbJjszSWsNpDvvpZZZvExZEf4s5TVxG1HrNa",
  "key12": "4iJ7byKrqS4FyY7Z3uPRqPHEp79cs4qreZKwZAvTstgusnVKuJDo1mQEX5875qCzsJ7pB3Yzbc5a8iptBzCCg6TH",
  "key13": "5woKhtGiCQjT5bsX1R9wQm4XQxPeYSpggFEZMQvEsFiJKhhiymFovSdsCfEvRJJoanGeUNPey7vfmYNxAC4KremP",
  "key14": "2TJfs1f8LJQ3mwDSQwB5oBhbkMiPTbMdVbyHsPPJoxGzMW7FEEUWiZ2gHYjxqLR9JZCeHyZdS537ewMGA9Po8qy8",
  "key15": "66Th8tzR9JTrAJheYxnk3BWohy8PEEhwjGwJMNGmoS2nciuag1b4oiYkYW24XAzKExKKHJNwHmvHtjN1pq3HYEHD",
  "key16": "2rdj9AgpfBFbuGdrYKCJQeJ2fCWtHwvDY2T1YGoCokpug6PmjqEpu3WyEaQXUCnW5jMyscUZDDgjoZUFU6hR6D34",
  "key17": "5JYZmAMeEWhzB8iHm72gGMHZ3CDAhgDKfncAdaWEfCSxHHMTQnPQoSU1WHSXoaFQvtTMfXjdKdw8Pw8ESmBuaMPW",
  "key18": "59ekhZ1xfrVwB7nqAoKBEPB1xajqRK8oyBnG1ZAfPeoXRA2tq7wCUFeqUYkkXSZ7XtK5LPpFTayPjcisFoSpCaQt",
  "key19": "4FhaCFTzDAYHuKnFokpkAFXQo94XrJsHLrxpdmNB1AP77yAeDGbkL4zWEWQbSaC2X5vASidCCBqBVWMJmbs8Y7XZ",
  "key20": "49Z9tu5QiWNqWtEWbhUJzms9YiW5qNTcqSLJctGsr4TPZE8mNmptiimj2Cu4G2oqvUJSRevckXJiZZw1RbYjBMi5",
  "key21": "3M9FqqkqWY2QmKPC3wtPNGWRrirt8fQ6ei4A7PsWn4B4JXEmHhCURV5qnAexC1xdzjLPfbNjVdedVdAogx5AMyR2",
  "key22": "t5z9YFNoEYXDuqnUx6ZMjKU5sKW2Fi8CnoycR9Kgq72jLPFveHWGqtiFi5H7qZLmXrFG9xuvEPriV54ZNXWyR45",
  "key23": "5Swsc31TbgfkyWp7aNrvFoi71tWZEMcq3mM5YL34GTPQh3Q1QmzGERXHdG87Kupr92ErMWZ5c1RADGQ8weugXbXT",
  "key24": "4WjHgmRsrcEKVPyYT7KCUmH4VYbdkSKM5WKmhox5bK97ebqhJHDrGDbVWHVAoxVqSKe3CBxzvauqsgPtgSH88ZCJ",
  "key25": "3Ub3kLCbGJcFhdoZwDKcSfS3NCmRdapCLaDGFPLL2SVYkTFqur5mfxejHF8utEpAeRgXvvL7RUp9Bh6AbB5qrjVf",
  "key26": "57DpLPhB4LgvQkp6ke81fAd2TDaPWNeiRQjjan7fpGxgkUxCyEwUJ7QZcR3mSJ85FfX9CK8ZefpD7SFUqwh61iXe",
  "key27": "eBKiHMj76kpvZqC6GpGqkxMr5oqQxuLrvtSEpMj93LuG9Y542r1h91pf1RuaaUFcWxZdXQSxG12nGrReZYzq5r9",
  "key28": "5JNVPt4zCpGCDniTA5NU8hLoXWQGVHVGYep3Xi77sw8H3o3EHunBZySatcArZTMERHSWzceC5B2w58YdtbKegmZf",
  "key29": "5yLDby9dnziGG4U32snTfA6djC8o1cqnoVfz8G2fwSACYc65RoDszUNpkn61yKRE7jNQTMzB25UXG2zjQPdXQw9i",
  "key30": "2yGKoARbN6i2vMDz2trGXUZA5vQG9KSpf35GnT8dRgAa4qGGZrrD7ZfkyiUkczDrzbzKtzGnLgRs6H2c8T8e3bkf",
  "key31": "5pYwJuhjyS2anFgxAHKPaWCLqnPG89r7rresJR7KMhoDwwFXKMAKQNF2eghhy6eHQi8tzN4DTsmkgd3LK29hurXw",
  "key32": "5BKHuYoTsDgR4YvH8SfVmebv7V9Vx1j1wsoa6CKUjgScnxXaFS4G1k7h2oWECNS19mdshES8BZp51Ex61qveV3ZC",
  "key33": "BkzEkfhnxRjwmbcALCFL1wEKr2eRxD8pRoTxiHHVAZbccavVDmD232p5vg6ASHdoo8unh9woE2M7DKab5MncUyh",
  "key34": "3QxFmZYv3egG8Dh2TGttBjfmh1JAW9mCSxhDkcdsgGvciVXweUytvCBxGfDG5NjRaa9chjY9EU3LRcKfUhw2yU3w",
  "key35": "3kUZ5hAMksPK8tRJw4KFD6T5QTdUopR39Jns3YXzZwhbuAL9QniHSuksTPwzXhPQeVpQQHZHVZftbuU3ekE3PqYz",
  "key36": "42xdVbvg2vJqnNoVKFvMfsM5ymNHnWAirNZXh56LGbPcP4weX8ACqKpPoJ7KYT3nvF4YN9DYgBkxT3BZiwXGtigE",
  "key37": "3af31aJ5VYy4whzHyFiw8mU5o4wUAQdUJvqmRjWujco15Ef7TbSToVgM41p1oyT5SeMN388isnMGfdX6Ch4nX1pb",
  "key38": "4ijoFZxZQuY6z2MXNNVwGPwHHZhWUPNHwoQwFvNyrpBkpS2vaCgokXUzkaMovZkaqDJ4ckVxoK8bnt4hyGFgNC3E",
  "key39": "388TtivLeHHahHKmEpzqrE4fRQ6ZycCm6eSz64TanyE3hLRpRXRTU4qGNz7LKHyJWbSkKWhQr97w8Kgnxe9W5NSn",
  "key40": "4KHd1XdEGQpgBx1e4PrrrQNqPpJTxgcA4wtaQ3Vou5FodgBArDBbQ2yjGVb6xRN7m9FbEQeJk13W5PDc2TMBzByT",
  "key41": "3GUz9C2CxDbkuNMynMDyZQx5R6PhqXp8UC2CAPhjg9kL9Si5S5wMEyTKoBKN1qtghbR9XyjqYtP9QppfepvqaYbZ",
  "key42": "5TQj6oNixii3FyDnvcsWiiWjU2P1TCRZiwfgkTnVXBSrtc6C5cQ2XGF854zko4fAdyJkiaha7fSDECEkdaqcdFJg",
  "key43": "5N6PiVo2wji43mvEwqRfnpQEBVmfGpyAkZ2AcPW54enZ2iV3h8RjiXYNAdSfYy4iTSHNcY4Wkx935jiUNndbGDoY",
  "key44": "FXddrCacrJ95XMJZXGFBUcddA8k5cc4KS8nrhbQzTUUmJqGQF9Umeg6tWjKZtivnuXXCzmimWrp9nC5SVjcoEY3"
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
