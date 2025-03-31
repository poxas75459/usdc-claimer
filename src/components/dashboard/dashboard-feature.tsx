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
    "5zVEDfzAPDs1cxmp6MwJ16U4gP4SZ8kKGcDLEmWtsW7UYYmZ6J5D2Mg83SGpLwC6UtDxyWazKgYRbRxSkPCgv7kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFdBZ19HeH9Qnw2yney3x2P6Hdb9mfpjAHb9JmbNgWVryYd4WYnVWxgX4kYGq3Kw6C6UoYH9vo7NyXYXYVMQUMV",
  "key1": "2cygQBRmKaKHhVKTSBVVxR2sLZCx9rLAFtJwWVN9pQSftLkuydiKRszpDW9cxFvrQ3X6ebQATsPx1VhEz7BgKew",
  "key2": "4NEvkfsR1hNgawhkwKqJbwcqiBHoTFJ4CrjFv8YRvRaYVuRtScW3nuCGMHwTWFcBnwzyHmzmdpVpLedyFHZ8DMAx",
  "key3": "52C6S283HnCeQDyVLXrrdsMcdQQibtKSoetnRTpSWSjbN5YiDQa7LUukwst8qREmUtAqsSs5L1mFuWSjffZKUWPx",
  "key4": "4D3SGwiHuUZwyWS7ewBu77yAmXXMvLshExRBgAJSzR79Rdg2CUd9tDn1N6kmrhnbtEzWsinPVbwXWBH7opjydX48",
  "key5": "23xUgw1XYEsFox8q5AWQdphx2uKuPc4ocABYquhx1JSjpMNdZUtr6WLJ6mVoWRYhZpARb1tQNvHhJqCtQDUaBhRW",
  "key6": "3D4z89PV8DLnZbYxUcqcts9PdXwq4Zjq9ANzZjJdgL2c1zXjH5TMUGtA2cFHos614kVAaoN6oy8683T79E3WoeTJ",
  "key7": "47ai6jDiGb54zdP8VMRCqbzP1bucfY6gK3uZTBRZA5CLBt1kLmDi8MaJXZ75vaPLYPcjhtFP8psnE1TvprDQDNpg",
  "key8": "2g6rMfosRHXWWPqjqtyqYQ67MyiHG6TtkaaQh4UhTTiveg2rQH1ard9esCwvifMx21K8oFHjrdiTVU2YwjbPWjPV",
  "key9": "3BYtoNC2zLBzE85myY8go5w6smWTmJJq5Tg1WgKqBW16731tYZvHnkiZToGT7bUdHsucT6a2ph3Tj2TQz8hJABp9",
  "key10": "SiG6e1kxAQbpNw6hesLYTSUTtviVr2fAcD4GPjSE4CKDqtUZtYZ9WzggDxj7H3kaRbZ5cM2U47VcGvBStt7AHqQ",
  "key11": "568pz9CMhuUA9F8M1RoKZH2MRZuGztcLbRgVLbZ6UWDTHHnsWpfwVcy8ugis5dvQHnpxcepk36HbssHcLDrH5Kuc",
  "key12": "62mgvRKY67P9CtBprNcF1gjLKxRKWkDrcqDbLCCAJStPPpKGaxCNYZtuJ1HKp7VFnCz9fGLZ8SnBVmUC4gC9Xucn",
  "key13": "3yXqbb3rbCXcBGykqGs4KfRYt1FbbfpiD4C1XiEfdiHkCSzyiLUEi8ERULcHgGVaHy7jU77Ue2ksaAJSCQr7xKst",
  "key14": "5rzh4dAAuLGBjTApHyMNiwL8653fASyytRozPyi48DL6Sm2sLjVjhhn6HjpHNhUPkpEr7rpz4vgpxap9Y1huh2Aj",
  "key15": "626zT8eR9rLmS6G8gTXa9MDptk2aAB2wrZ98Tzrjh6zrDGVUTgt1yuoqN3qxBv9b5FiNH1Kmocov2NcjKoJ5Lsyb",
  "key16": "5RwqfnxsrhkvmPWb2SZmXt5euTXpx6vQEUqEqHN6UvJj8NLKhB6MsdqtXSA5GsjKVW9vBug23TLRRCaRiDQGQQSk",
  "key17": "2FW7EwtATCtoKXRUUbqhzFvHZY6t4JbexrBtzBxhgXJcohXD6sqkieWDUDSw7Ly8BauSzmT3puNfDTNtT3bwE5cf",
  "key18": "2pt8FiPAvupMbPjx4VoNZvJ3Hxz2kBPxYWFRB9VXPW4yVJfqhTHSWjgtrxZWar1kGy34Cu4rLQ6FJYmgKdfbDrBs",
  "key19": "3Lwfc3AYeNh4HFgBRT23i1Yn8RryzELFeXjGmDKypmzVVPRZ2TgJDUXvphqK2BcDuGaDBzWn6JUg9fZKSEWDt8e7",
  "key20": "4DHqEJWL7ALRCQuMAqLkhqSvx8eHKsAYTHPKYDFQrd1tXEgkrUagU2f9ahqbr8iukGQhfvjYbWr31Tm6gDpU896V",
  "key21": "541DKgfpeEodAKpRecmGq7au6oBNHkvyGqRyEUrpXkrFUJaqJT8F9mNGz8STp2kVKyxz9GL3aTCpgDjMDNFLYSN",
  "key22": "4EwgUASMgrRa4m2JRyr4noS662pFny3c9rgth9WfRsM1fSwSmngY5stevdPVbTMMh2wwKUHwui1tGpEpL3dGFYkb",
  "key23": "5CsZEjsmSBqDrxpYYoUVsCx75vrH1D1X1UAdM7FhdjwkTk3PBqUL2iK8UCML8qMb7sBaEERay6CXTknxQuz2MJ3Q",
  "key24": "3cCZH7C4T2iQbpSMweAtggL4gzpnoSayM5LLddhq8WUWh3dPkajbgdqa71sbQRLnuBagX6majWwZCBY5qnzdtrri",
  "key25": "4M6kXyD1fu6awEuH4DSnXqCAyrP91dGsHWp1q5skMq4xyBny4bEmzQ5zWLuHheBYyj5CD5cHBYvnhzLWUedsyboM",
  "key26": "49yvASYMEubJMjonVmMEHfNUeU28Zh9Ha9k4a7kQpuFWQJJMYSp3TY1wVWH4eJLoc7B8UrX7Dm85unPJV7f8PHXF",
  "key27": "61LWXRTFwBp5wxRNnZfHDVifLj57wSY36BhkixUydzM9TLFGAa9Ba7XcFi1wcoAJMyg2aAd4YKcyUbnJhGukXx32",
  "key28": "3UFzcqJQJC7M1Gif92AcvJSMWk9V7PpjL8BWukpx9KuRVNzDfZLH1ombi5mzD8XnZ1NW8FEUXoTsqNJDhgZjksC3",
  "key29": "3Hbfn7AnmVksg9u79g6STrLPv2F4wuxxzKui9fDEMUw2WnUCkQFfjpRYTrqBbi1mzDW6vw4ZHfCYVaKxo9YKHTPi",
  "key30": "4kpgQnYnZHkc5Vd9VV4YCdqakNeERSKMT6wvygKFhmLJG93PZeKwz9DchjXuveKnkyAfg6b6MGHnvwU6dp4Xzms6",
  "key31": "4uN6YAfcbJAcS5v3QVEGeC2FrdKxU5KmVoCiPpABD3A2zJ2JgwYfdv6fYhy2oFJPNN7rgqnRUySDZkhXwcfU8LEr",
  "key32": "3C7H316MTGiNfjZd63PmohF5ZUUdTwepzRFU3NhDGd4kh67dQKLvY7bGQYxgDHDnQwDMkZXfm4mw5p4ygtELcL5v",
  "key33": "2eYjDyuMPFvsE6xBomY3jcTcsRmwfKc2syr8fdiyPgKdmJu2YKkNGicyaKyZ9YdjDHNp6q7MVhop59iCwHNEb5rn",
  "key34": "4E5daAiDeG9c5UGvXsnwmbif8KF9WLZurkXp1qYwaM8mFRZfS2EzDYRnhg7J1HVcm5taup7DmfuBJbyqehAaG23d",
  "key35": "25muUpqrhwxuSmWoMKJy6weQ33HGFNA84eCEtv1vvRRde3oCTHmtCGeQe85Asb2yfZsuURtusBxYvsZD2bP3AsKZ",
  "key36": "eHCcKnwi9gvV1VBHjAt1ryerVPWT74TDmytEKwTL2zFw8gtXRBropkBhFzZYUAtZoaAevc2kUMwnk2PGVbAbj1y",
  "key37": "5zYb1M1C1F67Rz4RtjJQgr43dS6BwMRXGvYUr4f7WtkdWFVUC3SdHMMbdXMdwKw8KNLQXtynN7bPCvSKATdrPjBP",
  "key38": "2jBRCUeuxrE1A1283FYDa7caH7ZzB7AF9JcK5JXRyxwxx1iDPqqDH8LBvPmbmkb18JLDHucWtvWfjDaTn3rSPboi",
  "key39": "5xaB4J2QoWHk1ovQRacRP1kVionDw8Vds6VKyGzbxchgTXSja7Q5hrDrzRZsB5voDT3iRqxgQpFdsLUmN59JCL7C",
  "key40": "4FGi2VtdLEuJWDAsPt8uZijUfnwJ55mTbfSEUFRn7sw1cVmGqFyDJznXWY55fBc1tbfVV5ypRnmHH3Eyho1ka1K1"
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
