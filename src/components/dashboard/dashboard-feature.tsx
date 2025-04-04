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
    "fmScNZLECnoDNa5ricFZPZt5hHnsaGHBQY5YaiQCX9JTATZ3g6AZS54bxCHtPjtyXbbJADa4n2qhgoDkb9rEq8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbcNYL3H1oRGH9368F4DuUzGCKM4pjLVw5GBTscuBmY4eroPt5hjtH8aCPd8k63oH69bHSv3YoeVcWFwc3pNSTg",
  "key1": "3bQVyz2HwgUPXT87RYd83ZBYvUvvdPxnLfBMHjoVocwYQFJn2NqHMEEY2VzTkWyTrBQQY6i4QAmG9YFkeiUvwB9L",
  "key2": "5NxCFbysf6xqmPagHtCLq1fC1KVmYPHrTBLMfarCZNPKvSHywczDGuSaYmGwS3svZ8TDFXw8Bf7D5NnEJx1Zxodt",
  "key3": "3MhqQkqnoK1woSwtNZ61Z49GHkFb18q4zFSsZBiQgtS5C1rCFX77Ewv1B7JWbM4pi7sVcmg2d9FUV5co4xsd4rdN",
  "key4": "gLVebFKDseTPoaXdMRCBSZVFQeCNwsfL5HdWpKeoMgJcAdtMjBxAcrCVALe97zcX5sCQ3DZZwPNCsKWGcdpwFXC",
  "key5": "2zTQtEgZsXF3H78QKRDQUnUzozsMKscbUMDVrN4A7QyWFWJ6LABBvmhzXX8vxLATfkoVm8unS3wrcct8RJsVPHe1",
  "key6": "5eCbtoNJTeuLH1Z5bQ6wNNKC2sivLJ9ypP43HbsKVeqjZrzMgj7geQp5gYqBEzUZpZrcNJaTyBAMeTn8tME5nHXf",
  "key7": "3sot2DEp6wmoJvcZGNqymmj7exJWm4wb3A7eCWYbQQjX93B1jczNMiGYJHQokRN51zzt1GNLZqdwRrTEjUy75p2",
  "key8": "jrxy6PmugoZ33W9uz79JErTgZunSkCDG5FvrGt2WhJbosZhw9kJnSLCgfqGK2KWN9BMAv8KVuvatz8dTddszR5h",
  "key9": "4twCZQPpoeAURPp9iK2Gkf4bgGM5Fx28SbW6aqA8QoU4gsnPbFTsH9paZ1MoAe18cosjgv87EooZ6r5R2NecbTcu",
  "key10": "4qTTgTu8N9hAg7mrJSd9ogxHdMaGXKdNpqqnYTSChTS7hqBL8Tw9LJtjYDkiTrJsiPrLpVrnj4aTqb9MXkjXvJYi",
  "key11": "5srrQqZBWReWgh2NwgGErDkXjJnkseNpUVxPhMu2ErZ5suLJ4X5ycnrUNvEDcKAZSncsBW5wpXJXq96BVq3MUUqe",
  "key12": "3uFcxWw9NntVZfAWFjQRz2fwTvwf8us4t52xqZiRSmQfL4JvS1eR7CHgcNPDcTwrHYSxxbEgjUEApEQXsB9So6sj",
  "key13": "2peBvPnQyN74FqYr6XL317QBZKzkLA6MrMacLBWVXAxvJuYAJApD3ozaDXZq3LTQVM1P7htnpjajt41z47vffM1T",
  "key14": "3fG5p1T3zX3yTCUw2XjuN4m64BByHBYT42wsmaSdeEpa4tkZd9826AJTH4nNyNexHJw5nPY2ZinbZQZwGpKRRkwu",
  "key15": "3axNVTmjZsTvEuMoU8EfDkzQWYfFKPfCV4MDPCTPxXLTLsAFV2NMZGL1MVZiSZVt8tBEq9cTbA8iojCmjGAeXuN7",
  "key16": "5ffvfqpiFmj8yKPwgymaUuLBRaMudMYeHfJiKU2FXW7knxaeFDL4e73uKaFc9E3mEeHz2saE17HjbNb9Kr3JCFqg",
  "key17": "22env4HAFKMbXdqKgXjUdvtvmDtAB7FoxSoysiZNUDcy7w2QJwxtCNdSat7Mv5kLkAm9qGzLqTgxsvVBfpZm7mtW",
  "key18": "5gyXEAs5iZQqXmS5EzzfUkWpWBRe1uRo7y6pGVoYSgdKJkSMiTacWqs1t31PKGDdSGJ9d4FfXVboKLFZKXgGsgXe",
  "key19": "2vfLcf7GNzfRMaZ2rdAwNuwtWycNrojdXdeP6R16sEg27Hvmerz3dMTnN5h8HQpe2RgwxfdQJnGxSufW7qZ68tr6",
  "key20": "2QoLgRL7v9Dyqr35Qj7gYsnjpMQdtykgMgSNMMzGCSgsYtDHBkqtNbGNV5wHv9qKKZmoSVtgC8RkPLia6tLN4w3J",
  "key21": "2at7ia2f3zotU6ry6J8pwUpANQ8HHH7NAU7f4YFRXoZ2yg8mNxpPuzUHyZ3TAuNt6KRo2smUWMdzTmMssMKjLU3T",
  "key22": "7GvyLoZ6yUbR7RHtW7L7W6CgEtEggZsKFPfLMF7hqeqFrppZthSsg44JvMFfjxHUVCGtBntDoA79AGmysuEE6Cu",
  "key23": "4sUKfikfA12DxKnpLLPPKrUnYniUaWujVtJN3RDPKfYWBVjWBS8hwVkGnHFbV2LvHVMtwzwcji8Fc9dJxYiYVHMm",
  "key24": "24bN66k3udtoSj7A8C3mr25rFyWmYC45ej7HwEwp63Z5w2xR9RKmGHYzsSyniQfSMijadJdp7x6p13aQbAiV8rey",
  "key25": "2fxfJfE9Nomk3vJxsVewm2qTsufwDXFpkRwJA2CG9pCScYWYChs92zvBwCSYXoMAfgNzkh2WjFZdFq34GTYDQ53f",
  "key26": "4uSyLL4FxUUs9vJyoigyChKHC2jo87ZMrF2Dxo4rgG4PZE3GNjzFfL34R7FwYntRqb26ewBiVDu2SVDSUFf3iYZt",
  "key27": "3HmCwXHhwBgzif7KEe3PLD5PC7EdtRt8dx2w4H45wboqfz3cdLcdSTbjmDL5ZsxcxYDiSuJak75yc7TZXXJf2bBC",
  "key28": "3YDCBDb3MahkYVRT1tJZhpvUr3QQtpFMhoMrFwpnZXQLCCSs7nALWSTtBjwi6R1ghh3pZxQKveYaiqMgFe5xJHQC",
  "key29": "47BWGpLCgMa5nDpw1yzw4u2dPx5PUxZ3ecjqEYJEg2JvpSfyQoDW7RhNs1EXpPYsT7T6chaPuGe8UfeJoJkY51jV",
  "key30": "3SH1DjVF9jedXk4r8wDigDkFvj1eeLjtTDKybdS2VWWFF1Fv13p3briir8MJT4kNdGCeN5EjLik7Ftezof426jP6",
  "key31": "Z4dffaRr52RWf5Jhc91BpvNsarnWq4SYVvWzcBkgXa91deXtTA3pHZpThSNWudYWr1gwsTDAoF8DqYrmbS18vLw",
  "key32": "3NyNwQPr4N7eLM24LDXALchMYn1K1p9wEhgxyU4W3PQmzk9hbSRVMT12Y3X92B4cxDqVAN2A9w9pH9pyy8aGwtsi",
  "key33": "fhthhb6Zip2yjb7Rh9sEqTkWNpApDEosvasuQ3vXitVvRDNf7iNjQroRgrBdMJ8auv1RL1wuskhHwGWEeoSqwnb",
  "key34": "4ccehcjxKbJqd9VMbZ9y2vYcGCvWWVr7p3ztRh1x79vTe3GFYKuMSc5oMohCuzY2fAk5nTNJfbed7z9QF8HAnMZn",
  "key35": "2THdVRGr26LS51u3dVubs9NhrZKQtdef4dSpEKkB2CHEPBhSzhfFC5gWV1xgxwGniC53Bp9vEsEvx16qQc4VgXjm",
  "key36": "48ss7yDmEACN61LgRLscvtEMLoKNe6hb1oKkHHKmwKkMpwyCrdph1h6KGt8GbtuN3byVrmajek16umfmAsDxFsdH",
  "key37": "22dNwpRdbtsfstMuEM3W1TWs36X6Ry56YC7mdKY9b7QhquvTR6Bx7t662Qa6UbpJ2YyMaDTbhUXrpjUvSQrQszgq",
  "key38": "WzMT8tkmQBoRV8xPvYJMUsX6jtHS3FNxUt2gzDrBucD6FKqZUHSRdneohrjVb3ke6LPoqPqLugXoz2nCtJCzRG6",
  "key39": "2vcgfNMjcFCWXkycZN347TJX4hNsrjyZ5Cxoj82wHPiYPSQRaAPDAXYg5XGtsJxtyN8cK3tv8fdjZecEjBAhwe2Q",
  "key40": "2u7UFwWWZF5PRsgXp1zCBZ1QiMMtEV3WhbfYngMaAyjB8FnD6YDDM4YF8UkcZMXhj33BAa9tQREZDPJs1dDJsEGH"
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
