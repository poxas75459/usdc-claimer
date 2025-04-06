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
    "3trDmqq2gND2pavCveLVeDphnczWdL6fp6gh1TwLQHMnkm1v5UT1DWkijSmQ2ShY8xz5a76MbiGsaUEDftWpFrr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KgQn6GFS4dQmnuej3bZCbYjAk8siKTZJFTBnNTKvQQizLB4MVvuUPGWb8dhmU997tJGFbLUoYqJg8oUg5EBgydP",
  "key1": "4GC2q4wFXA6ChMA4g6h111S1nQGVCM1A2UxLJkKkttjj1RF9sb6BadXHbcgGQMDWYHjkMFDJZHAvNUAh4CkfLsBp",
  "key2": "DuMHEtKhZUXZMXWeeLzDyj55CUUM6UFzfrbEnQdpicpVTRgDXDJzqiwW27NEto7rLxrN97nfYhbQgjFWiuzJ3QX",
  "key3": "478hRY14j1HAo3qgHv48B68hUMGiFxWPWDvHPGh2VKJTYidbaungwYmj8LiMg6miMaf8ZRKzWGvpokBBKu3JFh8G",
  "key4": "tcRz67hKqiw6MY6e8Zh2bjegdCPAuscZ7Vt14dBZFbthwwQonSRWd97STcWZsZDT3MTuaUyPnw94xdP65fDHZcX",
  "key5": "QDy7v1n4KEeTKBk7WUdXchw4sor5zvUiF3q67NcqDt5mGE3pYAeobKtJP62iKnMzjKcJ9VWyQEhjqxC83iW3LXG",
  "key6": "3LfcyH3p6rX7LxhdZzNin1rc1Q6s16sMM1Gg53z2WLDTZW2SiSyj8E2fPHnDuSCQxpLXGXfqat8SnZp6yzaSRgXL",
  "key7": "kA8ZcGc1gops9bsEUi95LEZk69LUqCNjJwnHybEUTf2yD6FpDbu9Ww4XSbRABYdJq4fJGSZbzMqsRZLT4emfkg9",
  "key8": "2FmzrkRKwCRhaaPX1YkNNzFgx3pWgktJrvTpcBgd9gyn1nK3r54bL77AVULfUcjYxZiGPLZ15nqV3tVD8xoRX9zT",
  "key9": "4u46xgyJz2CJDGt7Hs1gUCupoWUP1WGEhqtrgv6nRkGs2DtdBJU3VSSxASofdQc3nhrFpT686x5tsZd94zAzmDWi",
  "key10": "5msKxentFohnw4bVUy6rNFZGkGuxgreXR2XJXKm9phMCAbpi6VtsXfpDGTGpjmt4QzuEtMGNhJPYhafATiFPFp7t",
  "key11": "22RoPEo2vbfPXYMLKRSYSjHxorxTwURFzB7srDn4N7riYrD8p2gVWGaq8NzF6r9UVCEcy4xCBt8yb3wSCB6Wsuw3",
  "key12": "3cjoFqeUxKi8dLbcLy3WNfWVo2PXVGDebKTWZLucpcAMUfhvvtVfAgPLSrt2oBsXs2zuneu4xvuk6d6hvzu5vo9Z",
  "key13": "35CvZaXnTchbE1kJMYHbLwjLBkRnfctqc81anJZaf5abDyDt5ax1GZqDStZg4kWoXXBjhbaNbmTjG23UgwSZdG3Z",
  "key14": "5GFmZHm8kE3evY7p3UVthEoR9T1b9KcjecYbRqyBWHjiAYCFbvoMxLPZwVxDYhwAB8WyrndmwvNJnvjaZMN2GLjA",
  "key15": "28iQdrvhsgeEK3SSiYiqdBbGFpi4Qn5Z42NAf8DXsUXsKFSAYeGrNeVV4838BDDWLzE3SEY9UUg6d2ANxEycdxGC",
  "key16": "2QEwZKuvPJd1w7F1QArqEtjmakt34FwC7GvyFWMn3JvEfzAj4ezcFuN8vytQjn9NXHSSRLejV2bgESh3Cqa9fw9g",
  "key17": "5Nk72EXxNcvZVnSgcDJYVUmokckp6XZhgE6PodrDjJBBm2XjTogtCDnAygWZiYGSTUGJSpHKkswvpm4pR2HMboUr",
  "key18": "vpUgHqQFxchP2xZbjTsmK6NqYNXPR5LeVVyikvqkutfrNQEpqWd9X6WztNX6WgqqvdgTkyEXYQkVcchpycqvA2a",
  "key19": "3vUXuGti3woW6mNBbFbdczSoGGfooZjQTG5NwJHirWcKy66RTbr7D41BAJePwvgSacNvEmKgGisoUKYMi9gH3JaU",
  "key20": "3amtZMKdwf8YATvZx44T1SYrtCBMz67SR1Ag7zEn1rXYnQ8hyQGbsnCL8NYZjjmGA1zfDKCHUHkun5HgU9Y7w5H8",
  "key21": "55ZkFhbUhRgNzMjkifuB9fSS1zWBH7FtWtBrzzZktGBtupzxYEVx634433rYa6121LAXPCLKokLCgsfDDzVS3Hbj",
  "key22": "5TqLBoF9zzAepMGYk3SHXuNsq1ecu9dKNFNZqtQwk83axXuHKAFScgsYfk4CZD3pyT1UctijJtWP9i5XLEn2PTyg",
  "key23": "2PznaepYumYzXfvnQYJrZdRTb5Py7bXBatDxP4SayYR86HLECmYxHwrjnB39EywiTEGi7Y3FvKSKbkcTrDT29sPW",
  "key24": "4e7XWnyRo7nMQ9EvzLuBeaXJLFGLWJuW4SvLmTMMZseCggCQ2qacrZAErMwrESSmeMBar2TXED6qwtwgbJRK1Kp",
  "key25": "WQLo8MPSQTZh1wCG2XrapD1V52QoyEm6CP7q18NoeWDtkS4u2xQDTF4g8g8kZ9xmYVWHvEwuJ41jrFgyJY6uJtR",
  "key26": "5LDVBy5kCSyHmYNLSCpKeLQCwPD8enxFqvu9DRmqAKaZG15uGNmxUopzH46Co61qYWAoF7tV2wiWXbaHpgcxAEH6",
  "key27": "3pHiyRwkGWNv98kVYSMB2wvLrUKsjAypUSRx6ZrM1mX1HMHJVw7RaWvu4gGGp9QRLa4NjxU6tyU2RUYzyPUDK5r3",
  "key28": "ZHSMkDg3htQEvYkDhz4nMoW9BkfS3wEVaBZzRQUyuX7pus8pmVLnEfznnpTC287MBE3jPaapAh9vTP1s84c1Kw9",
  "key29": "4LMy5UrdvY756j2JV9YYuX59oYbTND1taf1PpiqwZaP9c3oVQVLYPXnZUpcb3xaBWTmDqVMamRDUTiHFQyBTpqvP",
  "key30": "2ehNRkuXVw5aS3EAgsEUnWEApooSPUpH75csapnzF8zAhHe3ZNKsrizVwLTtE18BwJ1Nf6TXwVPEKrydk1nSDAmC",
  "key31": "i5aD4LHazy5AvwattuEMgnVwVDCPkTmmiYeRSSsxhgwKbDwnNBiqMTneSrPR6fiwQEV11wb34GHEL4GWfyGHYpa",
  "key32": "5RMsCq26PmZwNPJ8p7pA19MprkWn1S9MrTbJHL6A7K8iEKDNRnFzzJtWFpKieWEwFaKDyAKgvLUR5Urj9aAqrbeH",
  "key33": "Tq3JWQXdFx3Q3GomC5ubWQE9hUnzAqzMrkd3pxsZ5cWoD4EsKqfJdJ1FiNG1BiiF79XMGjiJ2AiLtgqkbByrqhf",
  "key34": "4bgaybWgb8M3kKrxnon1ZNMRA31KQZ3cDWV7Ct1uDSyGXS71yB37vp8gR4eN8NvJhXoGvroC59ZMQctUUxFWoXuX",
  "key35": "2TvxoqS22wVHKHaEv1pzCi87736RHo781nUuvnpGhVNVLHkEJxBuPdeWZatQkMJWyLJnrpyhCSJ2Vqzub8wW5hRV",
  "key36": "3oLRzqkTVYRHtKzGepcTcTGaYzNNrfxFhe4k9SZKjweTLZS4zq1dfNTAFi4DkvSkQ5qrcYmRNfasRumyCmkhiUaQ",
  "key37": "5sTzYyjcJ91tHThK3sQNeDFmebTpHdbiRR4ZQGyfE4o5GyDPFDhRV8PoCKrJ5XFDX2nNQG4maigEMLvC6hkfbs8v",
  "key38": "CcnqDQ8iUzbrMCWt33ZUpiMJdkS9gDNwTPgdQgu9Fek95NmFkSVeEhkgyqhpRNADdWQnovSthVux63udy3AzH5f"
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
