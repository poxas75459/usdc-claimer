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
    "4G3cTGLPAFYVeBjFmGj3eXEjWvWhDzR54UHmy41RRgJECYxUrwcp7LT2dVTwR9o6S4gqvxg5cgMvqx5KoKpUZ35u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZF2imZ92CdgpiV4d4DgKjju31XjTatdjj7FribpxRE4sjE8UXvqrhSeoEkUUwsR7DbJe6x1ctsDHM5EsHWSebp",
  "key1": "4DC3TynXrjEZqBZ4fW2DM4ibxWQcX27MKF6jKEFVWTUAQszsSmCVKZBEoPb8acvznKgaUXpwe5buLd9uTaVSaAbV",
  "key2": "5UeGdsaquXrngDUfCcpThbYvQUtuzKpJc1LMNEHg2tRU76oTe1W4MGy9VT7ZYEp8NgFYzmwd5Vqifi7w4kd1mfWC",
  "key3": "62VkEi2X174478vM45VxykxBGbvardohJEPzDqCNu31wC7Z2138Y7Y8kTHesXcRjLSjDxvVgC64JKeTuoMjMqgRo",
  "key4": "3F9edYTkBzkRBWWocDrTjqbWNXi8AdaLDUCy7RPLg7ut4canYewRa7wV2C48hxM9niWvxrw3V4Sf9AVy1oxuqdj6",
  "key5": "377cRcDHGaNUmg4Y1QZoam3bGixV2MmFL5gDFYnSnFP2i9nTPDRiTpiGs5TUjiffu2hxd5MZz8BrPrudus8V87Kd",
  "key6": "4vrzHuJMTbLDoBWaRu62o74Eza7w5rNwyriAKJB2xywcfK6TUDHTpPaPxWEdbki7sWTLCEfycu3ehrNv61sS9oAD",
  "key7": "4kjhifg9GWWdacfrtdCWsZScx2cwWQcPXQwoaCAEuaQwc8xeBzorNC1d7b7e9ieunDgWGuQJUz3NVXoB56E9DxA3",
  "key8": "3PLc5Nme74Bk4X2dUo1PBLAcvBaCGzk66J8iDxPVgYrBzbNNjtpjdLu1ANnxFV7m3EUmmugRgPc3q5fbKDLHLsrt",
  "key9": "2t3odsRibzskznufCVZqFszmwnhPfzTknwUNjMUJ3hMjyAUwEh4YEX4YYpHaZnYWHtTh7Yj9UvkhaYv1eXWznizT",
  "key10": "4LWyuJtZrKpNa2j1Rw894wUJxQFnaVAJ2PoVPKMbDgK2rBKYJjhPSqdw26xak6713f9vR5LZkaqFhVkabNqGfg7b",
  "key11": "4up6GiuEuX3CkFAWpzngNEFkwSwncGwnjKBGjCubii2PQR7yEh9KsvrxQ32fNY8QU9CG1grfJCFEHvGjjeHkQNYt",
  "key12": "3ZAEoTewq2KMTSA3AryPiQsaLfonK4s26XuA65NLwZ2c4VBhc69NfS9RqgKJ8YvxG9XckqfjCr2fRp2LoMowUrAY",
  "key13": "2jnzDooNf1xatqrAxdUs6AyejXj6jn44yxAnRbDhRB6SUxJAHVPuQhx2mSAKB1cdRfdqSB8kEYV6N31tFoFDmxEz",
  "key14": "2diNxLC2atbMQD7WPam77WS1cnZjxkcibrWrk6nMGVDKfjTQRQPy2KYPe8rAxUaqXs7iBBAU627jfW7FtZsCkcie",
  "key15": "5xH6aWQK4s6R6cHuZc2dmqhTp32qpqicJeq7AoA6igdjE1CCcEq7U8PSUQubkNQ9JCk3sYUuZGPCTJScSEkttScZ",
  "key16": "28ZEzpnG19LSQFb62yr2nPjMzo88DRXUJuVQroaFjMVsggwfBXam5Wc1dNqMTBr5wCF2wncR1yqoSgY5zgF1p4pT",
  "key17": "397MT2ytbfM8mHefHty4FKLGmwCnCbEFnViy29TaaK7tiy41wSoFRRsmVhwpbEsCbGLmPKgWg7oYMKYF4bLXRfyr",
  "key18": "LnoBVMxRosMZQn6guoEoypkBGP3HCYXtKU5tWZvZwFcV5k2189LtVpxuSAQqNT4bTzRELQAWVeiv7s75Xwn1fC8",
  "key19": "5XPAiXDZ6Ht7gKyFLknXrz4GCidgYu3H37sjeRaVCVKQzGgbhZg5C2ZL4hhHdKnCVYabwazT4UibJpmBKgZRoJti",
  "key20": "ULiE5mQifsG2HPSjeSaMjZNiXqQTHv78myZHkSDo6btokAcnVyjcds2vbek5wBXLqU7NWdhkpooTgEHCL6cuhse",
  "key21": "rYP8ZsdF9rB3RGGC1UD8SRRHzid75So1fh5qai2Po5d4TpmguvcxKo4UECFAQeWa4bfFNqGdgpmUk3oG3jWK9ti",
  "key22": "5YhtcaS4FEYrbhQTtcjAU9eiCbvFqeX2JxnoD8JZYvoGRipsYQpmf2ZstRRfbhPTGu7kEg9VTKoAZPoTh5CMumy5",
  "key23": "5644HHKDNENuAQ1XgZB9HfARRtx8Esmq1Viy1u8KNjUNcEHRfaLSeWyrtgDwbY1HxvcYWZps4XZvy8brrNH7ttpF",
  "key24": "WJ6FBiMUq5aDJ7DpBAMcmW8uXxVVRvwQbhs8gHwAxTLPF9ZZRpNjNX33PTgx7cKWzSHkweCMScDZUJri9EPR8sU",
  "key25": "5aRmyQDSvSj57gTrFau616ja6oBLRZDMr6xSCpExQzb83v6JiEFBbnggqgrKkrErWkMW6AAt1mPXtfoFhQqCLvJE",
  "key26": "2dMXbyADcmJ59z5U86kJEpYTDeo7QSeAtk4ZHAnfJD8eu4ZSuLtpNFRZPz89ySfEpR9CLQ9f5rJLqLckB8uhzJG1",
  "key27": "9QzaJUYQuRMUSkseM38Qyvx73ywkLdTHD2Z2nq5ZY8GB2RhTwAEegxKJtYefjhV5tAyHkgeK1cTjvntpcbB8CDk",
  "key28": "oq1PMwUBRTk55PkqecCUoqywXbYcpzYV1HidXp4nYCqegoGoLKmFiSQgsvVKFMeBPNhaLsGRnigYSXDqHx36RQL",
  "key29": "2YWowv8zKeNQfNfRKGKDvevnbmdjmniezfQRGajq7wqjuQCyVp1Az8iukFfpZkft3TdXFRk4cSud5UcWS5V7aY1P",
  "key30": "675MrqP3rLYC13zqA7cA26Y8DWbrt34BhA3mSCYTsqNe9XzzceNqu5yP4vsBD9ZTMEd1WDVNwnbAXfZagcdV52Sz",
  "key31": "3QrrFV54F8PQt1sLqYxpZWRc2vFPcRc6qkYAus9SAkhABhoUPvmpt7YRZN6Ls9tAK1Bcx6CwJTmvzMPsPT5NK9KZ"
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
