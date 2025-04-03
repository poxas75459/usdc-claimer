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
    "JYT6edqHZixq23DPwiCqd9SZRVJeNSYnevLfwNUx9xjp7RXyvvDTd7TLAk8nrYYQbZY7zk6iZBorCzyytt7vz7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MiCHUbgnYHtGo7iqmykyoxhPPBKtPsrYatHNd7KtMnw9roo32k7GDXmrPngv2pUuZ6AUK71moM9porFiSoPgCTy",
  "key1": "2W1si7aARdVmGxEPzRM6k3FiJc3VfjQ9WQWww7PNTxb72PtXLaz9fwf6HLqAuAp42nhoP52umrZs9pySmcvCaS47",
  "key2": "uU7jdaQCFyVUrchfz7AEJ5VMD4hvLK5Gt1jHVomRmNPVTT7QecY5TPEDBdAYvnzurCU51t1cPzQwgR7ifPTVwfy",
  "key3": "yAEdwn4sANZejHukqQyPaXchj95tJLcRBKPGVw8Aidpx1ADmjh6EwjAEiqn8tCB9mo73X8mP3Kv8XEovZ8YADdE",
  "key4": "2cuq5eNJsqnNBRcqqaV3hoAU2WhePdsiscvrXALBAAAFC7hhXTU53RoafqPkWTbNChuRRQRDCCLGgbQdZrHWRbJn",
  "key5": "4rQX34r6XFiLrQmt5b7C9wcsLgH3QuFbDfW2x9FB7AZEpRjc84QFm6ifuNa7dTuvqazVpncpCnSTCbBxb1J4hyQQ",
  "key6": "4KztooXLikdf4TuHoT7TdsgvjzgCjJ3pJzpuEDtzrJ4xfp5HMcFRn8cJgP2Eex6XTQXQiWWDasFu5Pfk8TtKP4E8",
  "key7": "3gjsc82z1TYkxcWtATGYMpgcbBMFJSLNKQvg5cM2eLoQjhMVyVeqhrn6fLXx6rJKRvDD1sEjdTd7Xr9cNT872nty",
  "key8": "2jHob1kADdsUDDexMhUyACxU1c4d4agLCAUodvXYEgYT5yytoQaADsGym4oVMk47TQAZQaCJ4CUTeiukeQ4Pemrp",
  "key9": "4hxGzib6ezJY6WaBshEA55opj9rb6rorY7AxE438wtBNM32MLbX2M21eiQzz8HLdRx9ZkTKXpjuPMcu4J86JDFJa",
  "key10": "2rfhEyowqwq3TvHeJAMXPYJnbYTs5PHv92pECnz89jkJF1djLVVwruiVTqEtr3vCzT8vvmePb8VNftgPseMdMRZ9",
  "key11": "c5h3zceEBa3oWtSHe5U8ovSfoC4DoHN1mcDCQ7xg45wMYB2CBr3Z5M5V5XfCwskE4bDv38Y94qLSGxKL5Z1SvSh",
  "key12": "5YzmiWFs3Vf8Wn3cBHiCj7gACkFYBPiZUqoyeH8CbiaEnRpNCnpXGyDhUcbb7DVLineKptYRGLd5CDDFBhBQNoTt",
  "key13": "331s7bwcVXnfpCGgwSEFZKDapBV9qvtwFidcPGcRretPpYM78ZatKe8HTQicrtmthkaCfWsWYY548JzwoYGYyHHo",
  "key14": "4esVgg75hVXPa68Kx61FfjNw19AYH3MiqyrSnHsn2Y39H3SjeJ17R1XBBTSUXqqqhhEVdAt17W2xy5Bsb5BTpZFg",
  "key15": "3HTCxyrA9SiyAtQx1yVfHBVox6vXEud9T4xtKS2cv1avTS5CCMmaEoGhtcDFt1TtvUe4LtesGXLRjrkPERokf7V7",
  "key16": "59xrhHex7VymLEpiLAdeaaTnF4QHx5Q78DzHxbdY5qNraXc94k1hmBfzeqqLXTJNwWt9oJCNHaTCY4TeZDusum2d",
  "key17": "2mLeRfL3c3Mag3Xiqk3Rzho3RcUhxjgLJKWFTZeS9x5Anmhnrz1mx7BRxepZcYqrEd4YE7StJfH2AmxL5MqpxP7p",
  "key18": "3pT6rKEenZs7wp74hZebKoLo7Mb7UjgZ4B1dxpLoeYx8rUwyTifhFA255dyJjeP8FvazariLS6YEXNeyMT1Zn1fj",
  "key19": "4DZgFgApD1KTnVcGsqFuwAaonLC8xHYwNjHQe1NYsGJYxP8LKcVgGUYNsK4SAGTGkB8XzkfqqCmTk9fUgrm8W7Me",
  "key20": "2Hk3qd78P83XKoShkiFDmpiQE8AcaSojzfYPzwn1KFcJuhAYvY67QVphPJiucUCZy11LS2HTtP7eVhzZtr9NnZra",
  "key21": "5mCkqkride4w5kuRbvExEDY7nT2NU4KAcEtmokzTvuVoRPt3FMfknFPFq5msvnw2RKsexHuBQYDug2opwZPAMRUa",
  "key22": "RZKDjyqw8U3SF1uWzx1N8eA6L1Ca7nYNEyomgjNx8AA3Hdxyf8V3Fsp9XBFv4AcwKfFoMQkGGLBcZuCVvoGvo12",
  "key23": "4cdLXgiw3JhsqQKeNv9BLH9yj9XK6CZqHHqN9D89847iBCAVSHBDKBqMEETjnQnC9LBF9PfFhJjPj3Ra6y27XeRT",
  "key24": "5PgHSrEa1tU8wshEyf6C99yyQXHVLN6Gs4o4kLKWk1gxDTuQdMSi8ihStuJU3Kk4HHD3cPC46b2F4zwPmz6Pxwt9",
  "key25": "4ZCTkWH9wsqPAj5EkDwtYFAbfCL45KLTMPymg4abLKJMQ9yKFHdZATh7rkCCkJLHpfpRGHA7bcZG3HDHGfWG4XZ2",
  "key26": "5ymr6EeaY2NhDCHjGra8UxGCJ3n1oGKQJCKeZuc57M2bCBVAwWJQTZmos3LfcdWjmvaDMmG7dQbZ8hXMCoJwPfaj",
  "key27": "USbLzY89UskrE1JuEReEVFxWANEgWCjvbLsjSnZWFdMvBe1FqcYnG8XMJfkiJcgsJ3LJhjnMZPbDhGNmGxy1StH",
  "key28": "3GuG3G5UwJavt9Ak8RZzVJUT8xJKG9EUVmAm2tG97tViAfTQroDvjtBwmT2i1SjPFzQFW4ro7Dj4u6ro646ii5vq",
  "key29": "66Vw4A2uSiDFmmGWSHvj685kNFxvWVoCmjePZbcHck9TG1f3n7Mfycts9a3cPwT8iRDiv1K88p6Q5ZYDJn62i6wK",
  "key30": "4BDKfCLBLaC7LDUSFG7EccHt1EicGU5LpGgCDFz4QzjJU8Rs2Wuuie16dD6LXUmpgDtvKitEU2GxJcyusEJ9xB98",
  "key31": "UtgZW63pWPg8QxkgEtGwUqkubp8i1sWy7pvijUWPZYukwHJnQkKwUifBQwS8nnDz1mWCSJUBGtuE2z6eApCFPPp",
  "key32": "3RWSdvmCtshGSg9jR2PQfTzorTQVrpmXGxtqUDZHqxwigQFrgoKYdWG9Z8owAsKET2DN21Vo9ksSJPZNBMSQ7q3d",
  "key33": "4vfDidiXhpiCFHicENxyQo7xLKtod6gsQo6b6buJFUhEon79QSvXi7Uf3S62aCp3f9A597GWEVqPiHf2EiXGe9xi",
  "key34": "ra5aAAtZyismjBeKfdghRPPH49rdoR2XJiSvuhdcPgAqS3tvHLJ3C2fDHRTnBjwEK4GgtgxPdyqMzsfLaqDWtnn",
  "key35": "3FQPYWegtZ5wYqtywyGiMR35yV7U168L9GNVHKznAM3mQmgtUU4J2UH8RdLYPnP6M5HQPN9y3JAnUZqpd4YqMBFj",
  "key36": "2GHRVUas4LsS2ie5HBMXGJGN8en85t8wX9rtFcdCKgJmpVLm9SwR6McN241hBoG3zJ5HQVhqvbwU2gP6gx4m2EBs",
  "key37": "3hXDqrwd4iUnbt3HhQ4z6FReZb99H1RdykuZqKLRsagceyhAqZkiD5PkqYhDkHUu1936PTGWQnFpBHXjXKQYt8yM",
  "key38": "3UbkiiN5tatgQbrdJ4LatW3g9CLNtpM5bdwcXdeV6HW8s8eB6akHdxL16UaqVJ4mMBd7mDyvJypGfQRth64GVEpd",
  "key39": "3gB9HkKG3BnW85XoEQvem7e7Rd6Z2tihBHjZtbdidBa7dXu7f2bk5JXf7CLVbTKpTqH4aqqG1E2Xs4LLjEHPoxWd",
  "key40": "9ycPbPrwkmm6dzakgRBpjNKHRwrGNLYyMLwoDoAReQdfXbxJeBRt7QfFsVqHYGpGjGGXvgDeyszoAbDqUKHYpig",
  "key41": "217fCTRvUip2rKkgktURcZyGCf6XTNP6WgSHV21Pb7MtskjCXmDdNNAYuohpaD322vwHd3LvyWH74EMwpBhy6qbd",
  "key42": "41vmMk4EPeMj2sFW7sVsx3f6K9NfP8U5cNofAZyuSiCKhFmsSxNdm4aaYHTQVs2r4SL2TzGvxoKnw3JmRtvaZuGZ"
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
