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
    "2vN1nbRsQ96JUcf3agFEfNHdow6LMzhDAMc8RnEqUJRJwFwY5qqC43jB3dmNh4hDEReicLXvvTebg9S9e9YLdZWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "draCY6Wo1qwVzLmc4Q86gKgSuiVzeM9HectmbHcYWk1YDCLjAoqCYrTQ691Q7W5NNxLtCd1azCuCGs51d5AN9Hs",
  "key1": "2qPBs3BszXVrnUUikWcTUps8vnaSjD3uJP5fyj4T2RCCNZ81n23RXfv66c5UZBxZcYqZohweL8FucaRthdakiXH8",
  "key2": "2TCyXyL7skdCXMBvF616CHyyDYp9uUdnHWg639aegWu1inPQJPdruqoieNcJZ9qw4JmmNKzr5dor2GWgVt8W4NRM",
  "key3": "2W8fHNdrmqwVNAesp9SsxQDVsDPPQZabMQRQVWCoEfBCsFKwbzjkpJJe9qJbc3m9YDm1RCUhJHNpdXJpCix9MK9Q",
  "key4": "2EZhUs4hRKnNAeqz3DNaSmtarbdCxBeY1jdkgkqHimekkiYsvCGdAht6N1tGCiRzjXbqNgpo4uGrwKLYAPm8F1gk",
  "key5": "4ToGyoMZyQuatMfyioqZYzevBTePdTdKYXBXy9MQxKXJbVzrbUvHg5kUpHqo1cqRRCZ1Q4Z6Y4a1Ks8k72wuU7hG",
  "key6": "VL9bwhyJpVg2rJNFgbgSENbpi7uCQLreQwdz5vFhm3drdXmV6CEBWc1VFivaE3EY6ui9hteMTaLnam92bKCsH5u",
  "key7": "5b44NTFLpMNRQYiFaEDW6oiJ5TSo1iEkujM7qC6tBABFxMeD18TMaWQ1Pjpafxs3oYjrrze3AC53L8dxhJ23L8BM",
  "key8": "vpf4macyj4oPzGWEujT6FoyLw9bfabPGi1NTEy2wc4nmxcwRck6TfLeAMsbkDSA8tKiTH4WvpCepRwtG8dHKpZJ",
  "key9": "4bZWGZWMQ3JCDUTJefLJzV2xD2qyfZ4GB7o2re7DVn9UzXcWchdTSZ3qxQyTqh1CLEMXySNwjyTF1S3LxQnxfpVH",
  "key10": "5QVzYeyTiydkc4tMbUA9C9VsAQVoaFbAW4tgi2Lw1hQUdMua15yE5gahB2X55xTXKRQkUHH4iqcjj5H7wUVYAvsw",
  "key11": "v1bwvMDuBj5caXSYffpQNmE5crDmbVgK3chjBQt5YMSomDfMS9DREbVuRniwWPCoP64fs6K7fsrf9fXc5w157av",
  "key12": "49VVZ6MmWMy4BQyeLsTpWWMFaSC57mCaSv2VuZgop4Bu91uhASAQmidwJdYM8aiXGGbk2ivQAmFqYwG5XT8ytTCA",
  "key13": "FRAeEetZpLxLa8wxARpKF3teLwXP5mD3penAZyQCo4DXRSph21Vn3qDmz8tDoofn8xKC53DULZ4NKwahBepz63U",
  "key14": "55QdVQJ4n72yoPX8emhjpYqMRbnhSmcqDcGak3Jp6GJvDMCxybAa3TnmVxk4zXbdB3j7g4WebqDpmPDTjFTzZZPV",
  "key15": "6tYpBHR4NhqFQ3hssDWdQKStoBkio75YnycT4gftorc2VwdReygHGzULwgQUUN45RHWHGCctVJVCipz5GbkXSQr",
  "key16": "2KB3CmkpNzoE8iafNRXYr6zb54JAPadAXcQbobNwt7ytifqvvg45bpWeeVnUb47LJrENnfksSCuoWN6fQfY54Rwt",
  "key17": "T5Qdi97a2sw8txcf3vPPCvMqPD73v7gFiJRp6ZTqCFq29k39geweFwaRXSC6tGLakbHkPuUXBKm1jeoD71FwY5p",
  "key18": "2w4zE1eqKp7smaTXKPPnrMAHLSHhsn9sWTtmtDkVL3fqu8hsC84rkEa9vUsKUy28eiT5gUL7Z8rKLGhkSbYWEiVa",
  "key19": "51Hh7p6DgBGUcxPZ8VCDkrQy43Ut3PRydsDzaP2Sbez4aZiWnGe2ftLmjVcPDeYxnyvNXynGtbvNAZLU1ULDH3zi",
  "key20": "3tssZ2tgMAV24WkSk2YopS3yDuuqLDuiMiG1iwjusfsXAdrWPbXUbAx1TyFkzUGa8s9JRGTpBL3DX8YZsXb4w2DR",
  "key21": "25UFrFaXWmCHzitdhCCvjEcoiGGj6ybJfen6C1XLKauzRQcqJEBvmUpBhu3orBGr1rCypc3DA3kpa1zwUzMKGKRe",
  "key22": "RVkztbJC8ADJwrdC2FYctew1r2H1iH4W2rShS7H6JzwkVMrj2zSWMyisXPuVuQL3kJrtwLvx3pciWmRPidU3JB7",
  "key23": "2vLGH1xrj3T3R91V6MN7LxEksiLHGtEAHK9CjhQhE7NGDUZHt4zvkw21draKZ4EBCeZDFBsiSrtmZXzk88ufZ4YK",
  "key24": "scSoPWwfiTJ7khoYwL6zADAtgnsSAVuFst6ei3xrr9nu59NdJc2yGrBJJmRTaDMi7kLDBWgL4WLPB9D7ALLALmL",
  "key25": "SD5oJF1KeqksqeXRLx3UUVb6z7RDBpZNpPQgH18319ZCMSDnhDtgRuKxo5Gg9hDv5wVZXF7Bb5zfExsGr7MUoRt",
  "key26": "5VGXTvMm8G3ZggJxvQL2c44i2Xbm7umeNDwntevJaAgxoWSkRvE7Cz6M3MKhdNDVDv3JWuN6Bats8QGQimyPdfaK",
  "key27": "2GppY4uEiVngN5BJ119A4v2yWnyLfJCz7V6FvyzXr9QPsJKbY28yWnnVm3ikazRNSUTA16eWgcszpMcDDdsiFqhQ",
  "key28": "n2hepZnbifF41TtjYd4oEyHJc7Y76REZNRzdFpTZe8cRCgPxXpsXNhJLXpK9aeN7s6hPJAgG3Usk42Va9ZKKgXg",
  "key29": "f7MQmNER3C9uwgzRud1Kde2Lt2cthAffDUEvJGbQgd8p3ZSjVDaC9LP7pfPJw71kLN3ys99X5ADEDdN15wmdnVS",
  "key30": "pT65VrAd1RBojdjk55zqX5LVKvtvLLfwkGEDLs7wzDQsM7Zf5pn5dz3VQeibkS4GumHC86K8kAzpnXD5Czh7j1s",
  "key31": "5KDj6Ro54y6HSpPrAuHAj72P2YpoHkg5PgmsA6992rVLKbhai8PZfA9b1AQBzkVrUk2X2wHnnRMPKuwbTvMGUK5h",
  "key32": "2DG8cc7PhtGonmeuHC63bFoqtaVfcFfEvEPU9bM2C52uLfSYFqZdihZgq3Ym4xTBjMUcuEQ669SFxWrvg6bzkpyD",
  "key33": "37BuDS2kFWYSyJcuHPKSDMQF8yX2qwFaz8eKH4Yk2KMFDKhNmAEof9G6PpbVeXG8TJKhG1cbae2vBhsB5ELiafny",
  "key34": "3HGtxjnSpReX7zcxro6M11sErETjot2HotnFtY6wNoukwifPzThMnincPHqb5EqA2GfwJoy65TtbyjnHjroJiAiy"
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
