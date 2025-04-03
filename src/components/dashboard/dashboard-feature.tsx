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
    "4RPBYb7P2yUt3p1eiT933zzrDQig5p1FQJtAsZ6wDyGd3bV9Fh2Pu2GXP63uMiTvC8muR4GdMcTSWPHf7c7YRQoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuSnts2Mp3UYrSHLkm2Fb96d9BWMHNk73ZstzwL5N4JYvpkM2qNBnmJXBHYKmtWuiRPArmLrh8wNTikhL9EfmSx",
  "key1": "5HVqzRnWz1g54tfskJkiLspULvfnFNnfn57aYx67fmrFt9s6BoJvrkMysgyS2jEEX3mTWVnrHcBfprAWT7bVgKAN",
  "key2": "49toMgNwJsiHtwNiAXtvfXWsn3sJieBjQ1gCnfFJJLPm9DPDivyctby7seWzHckADymoCsEPfPF7ooC1TXy2oHUj",
  "key3": "3LuXekeaBkDH3n6LLDohmt4gmrrojVuDTdrBqmj4JCLP6E5Zz6qysVKt4Yvfd1mu53WZq987XeJn8QJfrFNXSxzH",
  "key4": "3VpaYY8Yq7PTfHpZAJQ5NR7YQsbAGQbRKAmhyjb7soFUfrjCyMdLDzs1VygoGUAYHNzav4xn14BGMUwtSVyMc9vY",
  "key5": "52BXDDATEEYbcskUWNfkF6vx1eUnx3JY86CpzUALuqKpCZ4SkmqC8HYZVSfTGhS8WEWPYLA3JyrLxEDJZMebx57b",
  "key6": "5hgmvwtDmyMoHFc5HtBhMfJfNdCqWWHJPrH5qSYFGN3p3BMTudStDCqoKsMfK1UfEtiXeKDMxDo7efqkJoMioECB",
  "key7": "4rEX9t3rkFpuawQ4qCdBuA6pT3tNR6TPnZxpir9rEmkQJNr1zgTmmXKDPdF4DXFpWLcto7ANf4XyZApSPrexK1KK",
  "key8": "vBp2a9Yi8MjJgbw38231ayrmFFT3qdVLtJxKJ9fPbxj4YDkYbTK5PhiEi4oYBXPhZmQzC61sAq1YdCxikwW38CJ",
  "key9": "5wvwAx4RhPK9aqbj8XQJVhHjynAHUYg6TsNkYhicXujaxFs6QfQZMMeFEjk85CCw7kDA3rBeSDuP8ZTx7XuCMkP7",
  "key10": "4NYGxrdNdmncvQhyLxAejvW2U4oD4oFAc675BaoDkFBso1moTTYcBdRtCjSZAvcCLhaEYMbg86LwMRU9gKPF9j8o",
  "key11": "4pFfqchXTngLxfJGvG5ksQnRRbUC5p6RJHVrvfyLXG8aDNHLA1rBxnLYwb4SEugigCWCXzkYCwyYZPvnAkMDqz14",
  "key12": "4sew7NVoQNeEZsnMsaYkcYvKSf5P1JTo2jJUDAEdgGEBY3CSVpFLM9ovk8dYF9wJWcT8HmdhVHADphs8mTqJZDW4",
  "key13": "3zPvKet38S2qjkDAceBSynmMMKkp1tX51PEdQqgqbBvivWv9wYBcpmX3FNL9WDfXVWSCCwEeQwsV8jfcrLsnsbfz",
  "key14": "3F5ThdDnRReg6Sv1d3BNrgm4vzEenCbUvEV7rHLq5UZybpcVkwCpMYsP4g3qXRKAMbP4ymanPdAWiqEPESMTgqmM",
  "key15": "4MGS9ou7NQnuKrMev69jmU85ihXM5uWkmbb4jQup2dJqC1N8j8HdvcRpmeCNuDKMEWpTN8YgnmYY6UemYVhYBxsn",
  "key16": "5DxTewtCLW2SfeZmkvafTxcX2Ts1hRbtR7Ppjd4wtshLtSR6GjYWpq3ZRgEJEwmYvkPcTJVA2zcuJ4mGncaPXJM4",
  "key17": "TQsf723jpiBwFAfd7XXrHF8DoiTFrauBnPav99aKTUD2AzU9pbr7kRipnWig2NZc9oNz5jQtMCD4jL5BCyD79dh",
  "key18": "44CGHc9WU1rVCH86Q1xqeRJE2MV2suN9H14xpgTeLs7ytvkZZgJCby8T3nuy148cNg9zYwGSxP8cx8fmzSYYyvSb",
  "key19": "2RZjinqzm8nHumXeT7jxWyspHCrhidGtxfmBbGg9HHMKiFbuHtCB76rDEsvfdDJdzJqsfF5cAuV4nMzpFC17RWWA",
  "key20": "2BGpp1Q8BbF2igkm4a4dS6GbfL3hWbjm12tZbnpKKKfq3SXjoZqKaCWbNknJqPEGjoytKSKTNbtE3wpmWgdxw7Bt",
  "key21": "22CrFNsXd3WPXhCgGo8UngHdQRkpR7pNjdLUx4Xx26S48pbdaKQY51CaaYxdh2LA7TX91yC5UsAdDquYW7ufjZzx",
  "key22": "5QN9Wv61dcDfQtkNySezKUE3sgrhGjV1NAUeHUpSYfzvXU3xn9CqXazum7AP14YfEzRd53QiJtGZf1Nx9xsuP3V6",
  "key23": "QGDsvPvyjtVpDyHzfyEhRXEmLbKBJEP5zRhTKbAdF9YpQEWwh49JYQo7G5WCDw3dcY9rv1uDtxJv6qnd2HVBTvz",
  "key24": "4WsQP3VNRrdjZLnaFcrjYpqEQJAMDe6TP8m3fodWLdzEfXTkqCbiDL6qQZ2LDkWZfmHwa3btCubqJUw8cvuXC2KY",
  "key25": "28CbNxX3T62wHEBeCT5dB9XZxsFmvQ4aJGhR5gAR9Ya6oxKtSUCgooCmmTouAYMYNz8hfUHLiaFuyZDsgFnykVhj",
  "key26": "Cj5UGZSbDnouK3irB2gRWtSh41cVqbjS5Z7AHAmnwgjnRzWRYkLUn62u8vEZZjAocoSiZJW3xmje4zZyLKDpev4",
  "key27": "4TWRieVMGiD31zVTB367mKQX8tmNTKZpZtuSWNcmLviZcqhtQehyMvzcjYRJ6k8AxUpVJRJx3xbWXsBCaff4nYp9",
  "key28": "4js8QiXjdMTE2HKQLiwUnveqn4EBTi6bFAx7WWDh6Lnwn7CKKXMU9H4S2HJhC7scdhbdD1XYKtUt8eTTiSWwbTBu",
  "key29": "2oGNDJ7gPUqaVmy68pQTwgkLZ8cDvZF22xXXA7cZuzZCJPddrP4fXCCMtuHxUZwX9axQ7rFagErWNYTB1onn33MF",
  "key30": "2qajY2UHyDG16JAsrq62Gc2Jm9tamYtE2h6oommdRqHEZKec5t6UXvKEhY4wWiaDJ8Kf1dsP5eUrotJmeQQyQWfb",
  "key31": "4HQiwYQ7GcFpcz4cD1zwa7TaLcEmELodghU9Na5uzTqEawtNU2BPyFo6yu5zM49GVbMXyfLH7SL7goscGGUqtocC",
  "key32": "2FQrXUzK6owNwZ49zK1ehbCmCEZNgp4MLTCmZpHoUzNdcFGE9vZM1DgQFiY9UJURJCHcWkKevCjajwS2tVHHSZAF",
  "key33": "5Pa6jgUmdLTatZnn5EogJLEQdtEQkY6KmvGXnHhpA7bhPbV8VArWr7gGyVrratfeYdM5kANbrmxBSz23bxnVdBWw",
  "key34": "528vZ36xA4qb96Udg723FBiwuWQPXPpBetEwbGdiFEqutAvtZmxEMi1VR9EhmYSgADvDjgD9NVKzCxf8i5hnBaMU",
  "key35": "2Ra79Njkh7U8Hauc3ktz5Ye5v6vvUbTiZGjNHJ2y5imhW5uNyM2q8n3eWoEqVp84So8UfvqGRknQ6FSY3oHqsQcw",
  "key36": "5WeyaBcyJiVGgHhmSbay9wzbHnaiySD3cErCSCpH3zERUZTVjvFdQYcmsQwJg23dmzqTN8Uym1N3sFYRfNv4ibUw",
  "key37": "21kBwmakydm9sHhLgi1fxtMrsFA33pVHbfAg4mtFGdLsfRavJEvucHYWV2KxCQNtLFbrPuLvc8jquQebELsTva1b"
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
