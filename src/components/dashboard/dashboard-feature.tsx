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
    "4jzRHaGruQ7zRJ2R8oho2y6XLQaNwqcQZYGPEnSXKxZFCxwH5vM7hrHmCcv2sTaVamLoNHnG5JoBHe8RNyoYx9QN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUFxikb1EUde9FQxkNWNFcS51Thoe8DPxWTCJqeMjgMiggNdpNxyM3SR7o4soUY2nbkLmbSwkNXMnB6g77qeAJJ",
  "key1": "3FZZSjG6c2T1EN5RUym7y9dmu4QCeKg7PYqZ6xYPFqN3iQ3vvfS931Qmj3XkpdZwmn46QpLqmNac9Up1srv89U8y",
  "key2": "5iyRBmrBtB8w9bRdwRNr5JTthFh2CaGfXsi5mEHBCNwDmtCp9gErPVXg53idshFUft2JK6wtPTtUF2DiiZijUa61",
  "key3": "64qdeDLjXGtFZudDMNz3q9YXNGjkAGfV7sMJie65zrFAindhTdFbz1tSncvk1MUmQZ2NGScPdjhpkxHo4rzSPiXJ",
  "key4": "38ErH7Mq1B6WVNm3pP4JwKEVZ2sLpiNzmjxaHQ7EEywFvmxkyHF2XWR4NtM7eMeVexDbueW2NjsNkvqrPj4gx3cr",
  "key5": "2HZJLkJm5M6ZdHPGnZF33vtUCEkSLuW4prNwus2Sw6xj1m3Jg9AfqR2xwQquo2Q5q2rHYaV3BLMt9Q8Cp6PrX9tC",
  "key6": "4CBtTyWsohx5QCaj4T7zowC1HRERbL3QUEby3ASfQQyjyuymhGnonx2woW9xTTcuATzbPw3YyegWgSeVZJjnosw9",
  "key7": "5w59bB8RMZdSFY6EndtfNcUphHKsLWLTGUqx1cVh8rTWJR265tNwmsSd95z3jjMUdrek3Kwpak4kbTUZxH8aMWSX",
  "key8": "3GgsPy6uWLetkXzkGtkgTipxRbpTTyAqDDSfBokbcnRxNYBgajTeabnes2YNN1L3EDgSirwcy3oiy92QZJVZAdiD",
  "key9": "4g2yGb7u6M2EvQ8jq5eQwPyYgpPP7Kz7GrTLqEqVdQAy4BQyN5qpDPZ1f3Vz9AVig9VsajT3vg3rmwMzAWfUzTcW",
  "key10": "N9ByoUA8nn1J4GUrcZkZssVPJwjjW3g2mnRgYL8zDfpq4qv8hUKQo7sP7oeFREKatxh3Eq7HjUYQRsPGvKApe4Z",
  "key11": "5JAHiPnAsWts4z9ymJbkY6nKdY2G9XDKrLfsBUY1DRYd7kkdt6SHYYXqgWZU2HiNdrcMK18zciHDf3gHA22dr7nQ",
  "key12": "43G6RYuSMnxCSKwfqhj3AqWhV7t3fzK1kR3Pdq5FiNRVGstnFoZDws41gqxezfrDxvctc7sLYcYgrtjTCZ1csjNg",
  "key13": "5zTzFUvTsV3bT9KKGREChBYz5sNrdpbrL2aHBnnk51NWAQpHLNfM8jRVLer2TF4AqrvqxGoqcJWxPNmwhWtT2ZVg",
  "key14": "yA9HJHg1spKFddfkg8K4hGv8B79RnwPGXuoWGA7cCRwzvUX1tJkM97fE6LANrbVCsXu3VgZF3NhCrBuViGG94gp",
  "key15": "4PxmaTbTgJbah7Y7EAZ77cJ3jXhEA39oZ3JVeUJet2RpNK1oXNDJa4y51B6YUuHSaWrDapMnGxEKuhDKTbTsczhj",
  "key16": "zPeQvjwB9ynxx8Er6zRpFFVcTW9oJqtqXgroVJ9C7keek6MvEwxrarYYSxSL19JyAEmcaTjcwKLjau51HXJxhyN",
  "key17": "3hu82QAkfdj2ZWGcNNQZ2UPcV6gwfvYJRoxTFc95KRFSVxtp8ExWm6tbRkGw8wRV44iZe7kK2Uc3qF3rKmgYy7Yo",
  "key18": "55u9WRYSu2qpEFRU7Gr9SszgmdQobKVFc18iQ41wRTnx99P26E7geSLKd5YugFzukR9cZybdnBvfZ2o2RM1iPSYg",
  "key19": "4CkhWa2gXfNZJLdQr928E8dC9bPvGhnjd4KXyVUmENKr2Km5WUCV1rjeWNt9dP5r5ehdJJjXTTBuesWkLCUx5P9",
  "key20": "4X7UThrsH85JRjyxWec4qZPSXjsUKpPshFH4C8woaQJTKXaeNSN8cRzAgYdF3DhiLFC9ggp6WRu8z5w3zidnyCKG",
  "key21": "3FhWPuesRj9fFK5YMq8AMyi3s7JVdsZBUuBEYpW7M4UFM98MMpZb6Lt9TcTKf9sYt4NWLmUnCEw2LB2cKmuhjhrq",
  "key22": "234oc9eyTeHHMQpEKWSzjcX8PHCgJKQsKxmv2CN7rrHU5TDdkV8xyYpQysLyhyyzuaXiZWHEXk4zfRyeznvMffYW",
  "key23": "4sDRf9CKxtyBLNKAamkKQQesq8UH8BSViFPxc3CL5VMqU82FeJUzWKm8JJx7kdNentjENU6jYYp4FmkQLEYqWqbi",
  "key24": "24ZZPGyf2q155YnRFnF1DBquN9HXqwa71qnJJjh9u68LgpAdoVeiqyLLn6hKAHR7reGv1ca6M1qCBPoDV8WjczRX",
  "key25": "4vJVJwN5G5Ft1Gec3yjJGQ4bY2EiWqZKEqy216s6E8dhUG1NHX9XZLVdf9p1HkX3MKMUKMTHvt6BwtBqymPbNxG8",
  "key26": "3vwYDfdy7qhnYCYqG295dJXXQ8UCFqJv38YFBmhXjdbuBCUKFx1oiuCp9qqtUrgezSQwdyuivNTAdtkzzpfCyjNE",
  "key27": "5ST5XAkJN6DoLT7DoJEGEdaGKPThC4eqidSq6ovt9WaoTpCCG2mygLtZiezVZe2fXoqejwBHkoicoEqN4xTViPQ6",
  "key28": "25fByXS7nN7m694iDECQNyfQQusBm18C63s3RHFcVz1LFDpRT9ipBChNgmpSP8JTEejgXYC66GF8D5Zt5X4hj3tt",
  "key29": "2vuduxQ7sfZhQcUuymArr6d6Jqrn2MTySXorpv5kTkwi7sVT4W4foLoDBvwCXYxuE1fFvZBqrTRAngCTVzAz5qJ8",
  "key30": "3BXN77uk1FZa8ptsszBU1hgctXdKPqyaTwk7cW6UzLHbim7Tp6ZXKXHbwmXGEaAM4UpCNw4maGqtMcWmiqTMb6vs",
  "key31": "zw86nfMQ9KupwiYJV6cthFbaP9UgX2eXzE2cqjPho3F97jnyWK3siYDCtGdTHoahj6mbp8D4fDXBYPa5F9mkMpB",
  "key32": "3NYNBDaVrX3UHWzFm1Lx6YperJgHqfYp8nNbifpJeQFLLhmNpHmkZVP9ZAxDDcDZ4pkoGNcXcP5Zgn7LgBU7hW2u",
  "key33": "C1NFrxYWFiN8m1FXes14kpPhQnAvn2dMdXt4DWFbrdMYWjK2S5P18BW6HknuJfAr2zXQHBSQAN2hcM3zfoEE4Bz",
  "key34": "2eTJnD2b5qVieJWPRxgkqiGebraBUfbZvhbvTZRTKXv4C37JccYr2u7rCZSBRucSbL3WzzkLzQqtqx8ayPp91qr7",
  "key35": "4yZHs2VmiNUkMHyCA1NE6rTu6TW4AYttx6e8sZfKocfq92M7y7ZPeBqGW3XAaJzGJHB5C9eHNCtufUYLH3hNf2zu",
  "key36": "2kmjTS15oYmKGmao1ru7k2zqbBSdvVXbxtYrpyRsuekBKu7MwqnaJ8KHj7Vz2yV9Una5h1vp2VyCb1txpSEDAEQB",
  "key37": "65C8E8z5ehMq2nvdFsn2vxsXcoDu73yUVedU4tb55jp4WKHuMQifjs3iERmo3uCqbYpEytzURhtHtPNvy9ce11Br",
  "key38": "55m8zTR4a7Npmwbg6Wk17yVec1ezCZtTS23WMLQpFe3UjcKiGNq5TshPNXG6X1ZexePBk8Bpu9G46Xhqkm6y48xr",
  "key39": "3uaMVfBgo5DvUcG8kzt3Fhi5HBEtsyerZLpJcom295FzHiTrNpHK1upgG5PXmTtDiASFk4sszGB5sATfxmT3oJRH",
  "key40": "37in3XZDxcRPt5ZF8cEQqfPYnFFvuiRYDd4XgWWFw7fUKSs6cL3bGQoj2LfCYqvjuCxemdHpp6yggNhpFscVab5q",
  "key41": "2vvsy8k1gemmAZ9p4hsiFB8z84dQqQ122YY366dBtt7wb1s3EuaQ6cJ6h276Ze5nqzsFme8EAc4EH4ckRvDhxi13",
  "key42": "4fBiCbHTa64qYhQGUMVpFeu8WqEo3ST3AbtoMUYqnLbUeDv2gMpq4dCpt6E7gttYehFnuy9VTQ5MmmVHy3bY8ta9",
  "key43": "hPcse18y99zCLSdmjcW3QjHqfzw7khTgHnk4N1rWvRqUggmBVNRzt9h8Nrs8hEt2Rzqo5AwWBheC8qXtZDR5tUV",
  "key44": "NJQwWfT4DVWkqebArMK6rQ7yBPiDJgHNTXWAswg5LLLb474C7Yr7CGDC9AmaxaLKE8V1W9kWsSTRPCPDtgkaUzg",
  "key45": "4yQZAAL2QrhZgMcVdBJbrA2Nm9YvxGf3wyasWMQL728nj294yCLo6B2YcDjZYg3rWhNHSDRwLCxgaPhfTbASwFFf",
  "key46": "4uSUBiqVHPudAtRhsKP1ZiBtZSAJcUJh3ywBn4irfEhDJ3BHtPG5DdqHBxV8SPrsdE1AfSVxWr5ghpaPGrEG6qSK",
  "key47": "3JPiQRjTMrQZwVv64u4A2nxnDDFPYuzSXjsZWdtMsCjZE4Kk6ppQqEohTnjPS74QvkkaQki21P6FQj8MdAvkt6EP",
  "key48": "2DuwTZ1MZF2iSno87Jz9AinBPxwkY4KCEGcZ2BH1WyHT3RVynRzZWEEJ32qrPQoexcpibESt5aVTuSmaXinztyF9"
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
