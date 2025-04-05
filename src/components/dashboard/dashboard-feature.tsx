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
    "5GSzPS77nsWBktkEm3p9tDfAiAyDjLiymDG1yhYKvrXQ2QHVkfu5kWACVPspLU14wo1rgM5ftwxmuTrBbXFzYXxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uRGAPxvM67rDCMW9nwgKEayqRyBMNnKpVtqrn4RJq9HJjQEJW1AARFmgmmTR4c7j26FWCDwp9sWjHq39NUqD8DD",
  "key1": "5LNvPsy2AdgU5KNb9usMak1yq8RY7R2kSoSCtRdi43DHRphA81DXE3Y2DzLts3v5v2fnq1VdfaRQg3b9FKcD9wuD",
  "key2": "2rwAi6eE8wNiz8683AgSK29Q2NTggNCVrQjf797FpLsYENypfX59Ae7H4t26KADMZWCku4KFiCNmXNPqW4iFaaQa",
  "key3": "4E3iRoLwUfyPcWvGstxMY8KywQGj4tAakdNNqEEqg9cQ8qraomM3piDJFvoiZFJW94fZ8q3YPwzq97sTtmPAwF2i",
  "key4": "tYdiK4yUTX2zB1HJzqZR4nMopzhSPEoQJ3zUAjdEBH2vJNariYBoPbAwP9X9urtPE3wUC5ZZtNB8y82ZuwL8KwD",
  "key5": "5d15XXiYa13reZ2JAwiU9R6MrKmDZopsbbKshV8L47nfN7FxRnTMdExprBpjF217BVecCFB2px9MZRYJbwVNoVBq",
  "key6": "5pbXPCjsdk5fHt2i2QhgHhrSeqgc5rvmg2atoExPDASysVdwwXLN6C23RFJLHe9iY89MuqBFqxyUW7bQWvMiJFep",
  "key7": "3GK8nmmQaS6Y4d5kgghRrXvL5hQXpjfnXS5jg36QwMgRu92RP21QGy9cY4eTxiV4abekYcgzunpNb13JA5C9aDRS",
  "key8": "64ZPwsr4Bh1WTrt9wwcJRVYrGzQ4mKgTZcX3edEJKN74PmhzpupDFEiQF7LqRcJLxwp8TJMa9bZSV5RvsJr3tDYb",
  "key9": "3R9cB8YmwZFYQZD5qEGwT4t8SxdKxgs5F5vfiNXGeZqQNiig3B3MaTpvnzw4XvoFP35NedRQDKkqZDfNhxoMaaxo",
  "key10": "3PBbZR1QVwXyb4qdRY58zff7QRpCYncw2ghzexvm3koKBsBUAe341CrcXNJdK9njdixh6W8whiTtfAFS7UaX241q",
  "key11": "5EzWJrfkFeaa4fMnDnxPQAz96jUAkmbgYN7zQrBr4a9ny5GMVhJSmbHFnJCtWdBY2XYgASLsfQN4Ntjsm3PgW8x9",
  "key12": "3Rf546BjW7Ag9FUhgiKtDa9VXrssmCQ45TfuERrwPeYCyMoPzvnTbsfG6sE8aGb5eLnwRs39vp1qpNn4rP51LzSE",
  "key13": "38wMnNbpFGrZc6cZ2NEqL3kP4kyfp2Vun3FdMByncgSSX5NghsyggAdjwNcoEkZuf3uZrRZKuJWsBwjcdLGrdBjs",
  "key14": "3ctbeGMzxVj2AeY9UjTeaEo2hRJyBZ2yRijk1bHHWVTcEHMdCq5LbhyNtXR3dELEbF7NpdoYpCrNASqB3mkdcgjR",
  "key15": "GFyb5ryqiTwZJb1Vef7QQoyR2WESdjDSRTEj5JJpFEMUVdM765jHkGM7z8mqEBd2mvNDmiSbv9Rf1PWC2FrsJuA",
  "key16": "R7isTMPMHjekADcpBs6kZPEnVqv25bioKNGBqLTVmofXJe95ssLvvgPYafhh72Ji39RP6iDPqBUbFNdv15mUvFA",
  "key17": "3SgSSX8J7Ew2H1XLyZ6oGkavU9XUUEJYDoRKFkHthWNgCYwm2hJkL7xvSjbmzpy8K9qPAEECyyzTDyXkw2vaaszy",
  "key18": "4ew9j5tVxkbqYiFiRRTWshQc3goisJxridMPdZkXPLQd1e33drJAV4PEs8rPyQdZdMQfGyqZwdvfoDgs5jKDdzS4",
  "key19": "4wA7y22KtFeXUGAjT9kP7wZcWTujrCKo3bYwgihUvDZPdErRQfikompYpoVoMGVTwwPNarNNPvKidwb59tydMika",
  "key20": "3C5Ah98A7Vt5JdvXjXacdefXCocLeyqJrSDsGQsCydKhzDWUVp7Wfx71gYR6CVxQDaU3yytx4DcDgExWn45THgLE",
  "key21": "55hmozgN19giFuUdZG6HccgXGzCzzxRVUy4LsZoi6EEPsjoevSXkwqLr5fDb9HRFyViHw9spWYWzLRRP5p4VRi3E",
  "key22": "cPByNrNysn1upAGTBS58eUV6jRPzRmEMtKGiHrgC4H44pFQCwuJbUnWPjc1MFZiKN39fnUeGnVTYjko5n3vouNg",
  "key23": "7mwdgUEebJEJG2JaAty27ek58pbKTSni647tHDexRx2cyLrxDFrG33Mjkk9PQcSqo3Dg2gh7ncp4LCrvTwxUqvs",
  "key24": "41rjxHhgHYHhjaB12MM3Gb4L1NHcz7Uvx1qgiRCki77Yuajhw4W2TBKpHgjnyAsoTKXHDsD6PfLUTwGz3CiuXwqB",
  "key25": "5FBLjwdGLzA1Enqs46AeSri2NGAbDDmbPcu15CL8W3qirGEezeoZxzVoSDjyLjE7EfhzEKHzdUFxbYJ59b6voSE5",
  "key26": "4cCpiVNKwysyYqk2vmhEWbyHwTMcu3sN4p8ZXaMva3YNktcoD6dJHpnD6xDZV8CrXKsJhpJPEat5VjGnqBeLjvPW",
  "key27": "4NtFvqJw6uXscfhEGkkH5X82M5VwB2eJUBeADWLEXHzCm717pcESMv1wMz93vkows5mXuqW87GkfpgcxmCRiRfvu",
  "key28": "3bznvJ5LcHKH8RPoKX5kHSWPpjcowmot5UcEJTXz9me1kTPPCvGMJzpQTpHDajCPb5yfzYNpb98jeCYopuzMw8Zq",
  "key29": "3zwaAdhj8KHPvW7wxHi9MivgQuQUnUjYLWfosFcNatn1w2PtUJMZ8PKaad5Xg8YUywa3NwoX7aeivSnThxb6GnUQ",
  "key30": "2fNCQcdNSSAvV87ZbGSoXrxnweqEhRFh9YU83ge5364s5hMtkEB8E4sAyLAV3M3X27ieHWn1XTcasybQNTMqUjic",
  "key31": "2s4x5hU6gFgGGCN5ktMHxVjQJuv5V9Ynxp8p4ZQCFXiXnLtFYYZNAUYkQ8iEMmzPWtR6dxnqqbEAg1YaVEeikJJw",
  "key32": "3X4jhwcBD1MB1ngjRUkxdX1C2qKo1q9ATER2ge93EWtLBYFnZ7KrHEeSpgwPauDrkKuKV8ZH6wyDNnw2egyEKpuj",
  "key33": "4C78JpbL6MxztzPwqCUJPwyMxEjNeuSGtqxK1F9SHgBceF4BwJRGCrZvf8gLJ479yniLb8fpZn9QqNSQoZhi5pC9",
  "key34": "3FM52eSvMpMkRkztPbLgtge33Nu4zykyv7Ks88yPT2EDscvMZgv9DERVgs5jotb5YfKqmsXkXHWUgTgjywStQKPM",
  "key35": "KXThJc44SvLxtALX626QhumW6gHopwhxwCLUpumJf6gwmnhPujJ8cbWjmZ9j7YR7S6yC2REhWNmEoR7g1o3uahJ",
  "key36": "5BvvkQG1fVhfsYiWuXLGKcZWqQRx8zb5gDy5yGP8bX6cg3QogZ87igwbRTtd4QZFdGXtkqjKZFRsbHk5ej32CKD8",
  "key37": "2xsiprNrDZD4a49WPsg8a53Tjt9kkPNcH38DcSmvhArioEyJRSnfv3BQG1PUjzQ9Sy8xkjufanwcvTU5vSVNm4C4",
  "key38": "5GxHrtLt59rDNvST8e7Nj53iR8qErvPJjQMdXwQwjCRRw9B9Vf3YyxdxFDAfsQ5yDAHJLDoqUhPjW2EhynEsec8Y",
  "key39": "3pM8KibbPxwinttkkgFdbehZP3wXWbij1uA2bqWcowob4mm9XRzXR72AkMEzVw48MWanwNmXd6B6VdT6L41mZVyV",
  "key40": "EMMGJAVncDbBbuKXZx2yBGCkzv6QRaFQa5p5zcS29n3123TtEJjxv71kZaRcWF4Rd74iGfyrY66kEauHXANA1LR",
  "key41": "58ez69szq7tbycBtpJDxWfLPyBbry5bso87f4tSMZw6smkfYCo7ifkXoYzmFyazyGmZoZPpgj6kjK8QGh8BUhfdN",
  "key42": "3GPjta1rcsrJo9NCjV9CRUGCRFiuYqc2nbzBcswaMvZVSTW2baFqQoERG757TsLP5ar8RLYdtwWg8b3sLnQLVyUs",
  "key43": "3LgErb6og1nWH3DrZ9ufSCqJbog9yxaccZy7mNoHdsGKPog9hf5YgmUm4uvgCkrysxYria7JdzWhx1CrazvFhrZa",
  "key44": "uFXbN6FpbMH4UojHmcyQV4qyezzbRqehy4CXyr2S2WYsqbixm3hHhunycZjXWbcXTJ9KPfCmJKuZox6ywtk3DvJ"
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
