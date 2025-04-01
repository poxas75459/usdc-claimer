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
    "4WGwN1FGuvh8LkPws2JxFeMrac9dAYgyj5RDuf7Tspv2YEuPfytwwzRdjH5VrZh6pACvroVkcov14rKXr9kmRMaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7Zagx6xxDNV7ocmMiW5D48E6tQw58hCj9jqeX58ydn3txGxL74Aa89hxjer93rQvPGFka6vD9Rx5ApT9nAUF9f",
  "key1": "4WbbhhQtRRdjiqbHstCTKau3RdaBXYbEvGpzH3sds7rRXZjS8JABjh82XVB5sUJDMy9uGjmZgRE5fn1EUArkHstd",
  "key2": "5F72jj8Y5D8G97Pfn6cpf5MiUC1MHf86zG4PDemDQVQFGqyECW65ZFaAxn3vnKeX7u4ustmtggg9iUANZUResbzK",
  "key3": "4Ugp4yJ8LpZxpSK1KG3WsRnXWDwuzi4B7bvGirztCFwJfp3oxADhHyUtko3RY64vBkf2dcNhsnwJc2V4TNAx5rwz",
  "key4": "4LAbpFZ5XHrvh7gaB4UZao5kCZnqzM2n2Fr67p7VPvLrwVHzqMP5fvvbdywaicqiUrHmHKW9rCC2MhdukTWzteao",
  "key5": "5GceVk53fGPRoqZV2SZiEYpFEUTK1NcgYNniqKaEgHqnTEVg12KxcgyAQBgzb9pXTMstV8BFPRAzoqJnEAxfqZqS",
  "key6": "4wYVMuhiegxxkgnLhtDjAcvNEqjVC5eJKJcmwdj6cqJJ8mhLKayqDy8VKjNhftFqGngRts5wiDxDMgKtbQAQ5VzZ",
  "key7": "3wuZNZFcFrxXj3Sx223hC52uxgz53wdF6WZ76jJnJL8hiiFGAzjbdkWJDWzqtuREbxNPy92LpHMJJiAZLNCicDrT",
  "key8": "47yNccZW6QPyuZRewxGbUuBzBWyXx7D9V8Hv2T7BptBLggUwdBYw2gkG7wJ11tfZhB4bEJmdJH1VKcTxyVs3UdU1",
  "key9": "3SyhQcgfV9ddnz6kz7qwSAMNZPsKo1metLtoUuXpRtHZBFrSy4Q2aWRYJ2cjwwKuBjcK5p1mzWKhM4C2sDH4FyMC",
  "key10": "5yh762yzf3s9AQRgqpEUh4B9FBq7M9kyBJGrhTm4wgmF67SZwBFJFTYYVgHP7E3YFpovEZTAJXH3cxFWVoTbrssz",
  "key11": "5yzAnnK9aABacv7uNqF7t1XT8zcpBSbmLVNfjjsfijkx9XKhEfyKcc7Njprk7DAV9xytX9QEXpqr3e2NsftSfY7n",
  "key12": "5aMahf3VWSgArZKyDSa45wpeMD1FqrsioFu1fueBcrn25bUZaRTuXHTnnLsTK3e6YjhKRjayaBbWZrjjCWYXWJWB",
  "key13": "eM8AdBdEM6WEdzdbaty42M4EBwDq8bFy3CqhDpSaK91RCrAP53kbzQZyEBoJZwUeHcB7r1V7rmWv7wg8cjDNkiG",
  "key14": "3xxWEr5LX5pZiuySBfjonoGAuPpRLU31PKNnPDNhBUSX5JhQzZaEoqEbVASC7GeSziChFudWcooa5aHTcuFTZhEC",
  "key15": "4EHELRWzaV4b5jLPAbikqpdi9qgDkoADRrChYMe6rYVBvQvjWeDnGmEEQwmuAwAnwVVkSCujMYAMujUNSgyZPwqG",
  "key16": "2AFPczE5GAFi1tnKYAyPfCEKRyWbzspjUVL1avxZ3M7eo5Gw29WWB4GJSqFy8zv4HHM9XR8hM4FQLQk1huhjpBoG",
  "key17": "2ojsJjebpWZwF23ThcQG7Pc68E1iHMz7uJivp5oR1EBkqLrZ12JVsP6gEM8QREyyenC513LNc41auQworD3GCiNN",
  "key18": "tv15N56pb6Dsa6GZL7r4PtpaZY1TjX8poxxxdPDb4SBpCmp2YjX5jNSj6SNXojUYKsXvD51KLsHefQLp5z96Vf7",
  "key19": "4Ua1znoVhy5Y1jYdKHn4xp3gTKVUT1GnZQKFYPwvA2yK4ZSEPaapS3U9RUmfBgvr3818TcF52Jxm4VLYLfBKE4F1",
  "key20": "3pXX2pYYM2pqFdjntnBju7LZ7TMGoxVjyZakQeTcVGAi3DA8Vt1zXarVWYEaF1HHQy6JBMv8EmL16izG3cJDiuwJ",
  "key21": "5ppASzgezK8fXvVMhVEhdaEnJkemyaDJEw8TtGrTxgrEqQw7TL3q87jFFSqTsz1bmNdKkcwUoKCLfhiThbBTpXCj",
  "key22": "UKc371Sm2PR9W6UvZeQEnCuUq1J8yzo2RaZzGsfLahKiZkN8MFmurBZsL7VeZn9z37zFChNtQaNbHr4xa1g5fy7",
  "key23": "5kNTSMQ5HDxRrqQff29GGN7L4RjMqY3QaFeu2DBEJmuvQCRoWK9NdzHLowAV45hCg731h6ELZcvzcgqkqcXdK3L4",
  "key24": "25NxND4R5Bz72VHxomYgpmqyv9XRD734tZcqoDsF6pZCrJ4zhX9WrgPuUGqonKS3bgwwx94KDWZ7RWRBJtuvXGaj",
  "key25": "yi4yu5mVkumc9pcLxseeToxmkHEwHgzoM2z6jiwzctRBnH62RxRpx2x7d5ZQjF192VpSgb724QFxEkkkhUNPd4V",
  "key26": "5LWcarfec9bERgAD2p8jgYFqpCegrjeLgRy9UFVZQV4oJTwDkxYe5A4AMwMhpigTYYZY9aEq6HeZ6k76JNXEBxab",
  "key27": "3PjhMT3BKaqC5qERh4FEh2FzBT9c35VLiCu7LbVmeeokT3AaiN3DpKg4QnrJkANbn8T5LX1JPtu17Xrzb92VU3Sd",
  "key28": "4exYD9YNRo2SoeMYgjFQCRDsz4jhwGwEKmfQpoR2XGCHEM3foGw3Y2McxepjMWv9GHGMZJip1ZqyrJvJtrnqntw9",
  "key29": "5oNWMpHauKJe1XaWxZ4BdddbVP6vYpC8RDNkcpp6C9ymNcySMtJda7X3YmmuSSUWDjSTfvPwvq9YEsJGw5R7t9WR"
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
