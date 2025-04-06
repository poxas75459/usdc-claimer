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
    "2YJTgrQqEZVydBJmDeVZPtWCNhoxohMjbTZYG9hZbCpa6xFT7hVKV3e67UrRHPUEmX3xZMPJD1AvV5jsqAEshkdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bcATMCo4CsTUA5V8cbZ2JVpxybe6vfVjpYPAnUgATgSvNrss6w5ez9pgEncokRKLnWKmSZew6dSyF3PvZkw8nWs",
  "key1": "2WEFD4kN4A9S2UrJVKogyfRNnnUofdRMLxiAQ5L5ruc21GkVRjrbE5uGFWdri66jMrTE2Ax72XMLoz3or5dYowTW",
  "key2": "4NVrZbYVrMgFhHYduCUDQr9TGpzC8tfgASsE4FSxJqT3jjxzPbZG2C1sF3NMnzciFCZJVwCWwg9sGfhZu9kEPfxv",
  "key3": "hiWH8sKovx68yd2RvYKes3itraM35kCeQUXBmr9w2iV8hv3x78NZaz6EB4SaJtH2wtnEaQrKr8xKSjUpd9htwrS",
  "key4": "3sxyCMTzRcUyrt151kstt5WD6sZY1x8cReTqmQLgrNKV4Hy2mptDEGV2yDr39wZWD95voePqwUujDgk245HaZ3Nm",
  "key5": "4hfqfQ2rToYTM6M6idSiqqcUyShvBZx4suDTgVh239GRouiCSFsXFBrjpXRFrmYXzfu7qMB2tCk28Xd1BcHbKQT9",
  "key6": "5H5qfBeicAwU64U7x5PcHXo4X6n9hBaXvSHcc2HGNKM4aouXAdxrNULygGaarmWhZE338C9jQxNRbPv2jpuecQNk",
  "key7": "FHpWXbxsQeSmLwogRtveJBTftund8cDBrkm9Jne9WYZxGX6uXejCCya2BjNzqjP11TyqyjU79TfCxXVt8MEE1un",
  "key8": "2TM4o8L53TDBSXL8R6aaF1vuL2fjoEu6N83pbdbqP22a3y25rBNwAwNLzgyK7jr4kEN2ceUni9qzTjnRaYcne9yd",
  "key9": "5W3HMoSXQYMzfKm1FHjNcQnVfaMPvZ717akBCce9oeMdwa7RaStZHW92VwFBMbtd9ci9FxURNdekyXbzKUd58Yvx",
  "key10": "2RTBu6LtmEcd9cRRuZtcjuXbV4AzR3eXMu2QLS5URwjaPrnoRdSaxY6nnBY5XwnjUy9xhfB8AZM3vtSKv7UiJQ35",
  "key11": "2eywamQxK7LodPeQ2VAEaAXFztrMRFLecXqonQ9iwThreRg8325V9pGhdHAErdNnmB6Ekg7HKVojRQ6PzGZZJAMi",
  "key12": "3qMJhQ51g8tLBhWWdpSUTNsi3fqAyK88YkzwRvk61d1xsWSTmsBeur2WfyUiF1DtcrLMGVugSy3QcGwSf24Bg34T",
  "key13": "5WkTM39Q42QyEi8FgJ4bfShANKetWtVnzdBs9kRy3DxeDmzXZHZtAUtD8Vsm3ffRYLNp5w1wo9YUAWrx4kYRjuE9",
  "key14": "4a5nNYNX121Vru8N428RzcTk1SBngi7HAERzTDoyctncfb9KDUaWfZtxxZUF4gRTV7Crm2FAq3ryxNeZCDPWaCdT",
  "key15": "xv8kHqd8F6p3H7n8QDSNmQS2opLu1pafJpqo6opypXJo1ot3LAtr7L7wqei359g9E2k6GtrAwJQThUjJMBmnKf4",
  "key16": "nRbxNE3Vg26qKp51PUkQDgTwLRzZ7irJDWMwS3prpu9hSDSHXToifPogy37fUGRz9n8QJ4jn3iUyFhWoggc9f6z",
  "key17": "6RpfQAm2GC4uMoG64u9AvMb7rAy1UrZitFfV4LtfVgLVCuw2eDVpioX5vazhLFnLmwpmpyUc57h7rz2sc54nqy4",
  "key18": "2bMAx7BndZN4tN13Mr8nq6XTR2UcxDLbYrBKSNemf8nQvnKHhG11j6L8Y1oZWzgjZHe2T8sZBmBEBtTCU5W8W47R",
  "key19": "2KeMwm7aZAKYoJwBePuPFdFsSu5QTMQJoEhmb91UEtihxTpwhhRSi723GJREpmLZPr1c7mtcDoUs5xqeB2X1ENiN",
  "key20": "5yCtvL52y1xHZ3i8Pe5TssRkb8JeHhQudV5N3ReKcT1FwhRPj9WS83HkWdhAKAY8GQuVjhMHDWGkEuvkV1CoqAVQ",
  "key21": "2geET3yFE24fC2GqrEsY3p51wd213J2VPcagsyWAJDHj9jKQfarqaMgUzNp2ZS7t9JAQyXYnBSiKzNoEhhjtwRP9",
  "key22": "4eef9FyPYyHLb6NR5wry1Z3ur8T65WoP2CKbZmybqcnvDcWTGMZcoMUQUzwdPTKe1NQdAAYvocjeYFw2oNzdUZ2B",
  "key23": "2F7WfgMmUggZ5F6JpSHuC4cwsNHzrNaUtQUykAGo5dgFUJQ91H2sEKy1JKWEwBDCB2R2eSAs8aPrxbAArQqJgC7g",
  "key24": "5wLbcCyBmHYzW1rgKREjuofHPizku2yoVswBxt9a2Wf2FcGNsq4ZRaxTyQYNxnjuKc1qFDJ3SWCki8TxwkXpAdXo",
  "key25": "2kRjwEV1jrG1WFTN7E7Uy4ZSPu9xSbgV7BuuQpSEX9J7unooK1nGMLWhgfCBtBH7871HYXdaoRUmb4SN6H8Vaobz",
  "key26": "q8cRzoodz7JJGxdNJufPWypbChDZtMeM1FQUAcKFiq9Tsq2DKNz4DyvTMYuLpbjrzTjMjG9hesPix7gtsCDjap2",
  "key27": "5y1iHpPBBCcPbrYD2RUDyZtQKjMk7fihnTp3yiX9Rv2NjzK4kczWjJ4vtm4AUqAYUn1MpRP8D1qewnFSQKDcpKse",
  "key28": "5u4vXsoKP8nQC4bs5zdQVcEBQEv3XArJLS958XwWXjcPaPXNduLrbKSsxnrUEG1eYxxmnxDtr71eE2YGaoTxHhL8",
  "key29": "5Cj1evu9GymKEymLD5z6NXtiqEvBFRVU3J3JSZsEceErV2ogAK2PJ18ajPs2U5CrEWAoEYsfs4eM73MqRfLvjoKN",
  "key30": "2LzU8QDDjwz98PdWKdFvgWe7GRQ5aHNN4TVuC8Dbixs49XzGsKXCrN6f149D9xZTrLpLCEG4HB2JqLrZuF5CR6k5",
  "key31": "3QVa92L7XzmU1WVjigqfS4CvrpidckeAV2sgbsgU9WnEbAT4KyBcouWmKDwJ4651rERSTub8YksbmQ1hPbZsPL78",
  "key32": "4oz48kXqzQo1Ca56muhcW4b81esKrBXFBHVUfBn4wuYnM7NcomWY5Rrp5kD4B5FF96iQkHijNChpNbpW6z8zdymm",
  "key33": "5ctXNdjXbogUWbVngmH8PH7SRu65TJkb6yrnywLwRnytuzExC2CzprX1Jo7uTUC7khwp4F3Gxz8Y6vik9ffsLDjh",
  "key34": "9tTQBLoCPP4zbqsBbZaMhwQHaLg46YKpaiKsbFWRz9LwRfKnQVAn3yFRXQG5S5pWKvUhKg1WhyiNePG9NBsknyn",
  "key35": "4yFNbzC3WfPqikUqhhtYSBckjzD2iPMkbegtPDBzPwps1PeSPifR54kJx8yGQfqBcVtfxU7n98aK3cP8okmKfDdX",
  "key36": "3HHgx9FmSPVwGWMzADdTj4aB1mFdmoW4GZjxKngDeDEsjKvJxHF9TifSLuF5XDwuQEqhGoEX6oPc9sz9QZcgc2nR",
  "key37": "5oSS3APxRep3bxq3sBg3EHRvzHhkh6mCS3wXnJGAwsALKzJFU8A4vfK2nuuRHXwfshZWT3HyKauYv1Koc1qvbFnN",
  "key38": "48HbPzPuo31RfMuZ196QgGXAREZukWpSecGbWWQcpwHnqokKrDwK8ZmaS8aAVAw2vuEutdbjYRYzJwydjLkgXAEb",
  "key39": "rsNUPoyBeVTu5GrhkWmacGkCtZuuupAC9g218AmzwfyfJy7eyUR6yh84cVRkng14LeMxsqF85s6jPpDb5T4yySL",
  "key40": "3fbr96ec19cC6BtkuN5w3otBxRwmBdwpVv2BZJvkwRZH3yvvdnVc3mUWAjdNeq9h8g44AijRiYXyEjNV7wMmDZBz"
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
