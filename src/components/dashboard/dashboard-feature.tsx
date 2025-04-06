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
    "5f4V18F6nXz9Nk3GSrcoSqoSPMA9wwTX32ZnXjr83WJyPqGuC14sq9aC6VgAqH3dnJ1YwjmbKundZqR9pVAL2aJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EoyhTnu4qp9SBXKSskQYTzY5yfNFSZkjiG7Nb79Svifo2pfPgu9sZtWvjAoqxyViFb23QK8nqHfDCJqf1V21yMg",
  "key1": "2ZVaU3bKf1r9jN1s5gxHRs2yMzbV5vwnu7vWc7Qa1d1fdTsqPdTXUB15bk8U3uBND6Tyixwvggg1Ckmc8kjRVfN7",
  "key2": "49fSKPQEsPGzpzEhLZNGcFSPXVQX4MAS1akwtH7zc9hKaNaiuiMYVw9eUEopZYbb4h13Cf4CWYJC91e1zMVEwCFL",
  "key3": "2zaCZJfLKDDuxzx67YV7Xt8hRD21aLMUvh8td1dFAwcsP7s9x99btyEMVoXeiv52NVxnrSCmXaWVuWQsKirotqTP",
  "key4": "66Crj8rtPSbwXKgNvWga3z7Tm3cBgxAjp9B9Kx15XVcqDjyEKurcL8vpc1hkBuvP4GjDB6b5cQVrNRFUN8L1T9nf",
  "key5": "3t3s1ymG1UTU7ZfZH6LAFQ8sijYSHw1iBubGBCaqjJvDPxmX1FPzTRVSczzTCA5L5HrdoBR2ty16rHQtDQEe9wZi",
  "key6": "5k4BiG4ybCP6W4beCY2Kz6jzo9XN5BS6FhRiZNy2H2fo5Avw1Sy1veguXMMbgWPmmhEJ2CJCMWXkMx6Xsk6YGraR",
  "key7": "sqhYSG2dmSiYFqLsx5pmjdtnmb2TyzrwbqoxiTzjVqf8QXQewCoRm7QGxhmgt6Z6dfAmYmEX1iShG91fSCaM3p5",
  "key8": "VLRsyyGUASkXaXSrQN37CoBTHwpL3JtHyForEC4twHo4fi5E6JGttvf8zWHEiPxkTCfn1vg4ehyhGiZkoUTEuu7",
  "key9": "3PB1j8wXYn9X8niEbBvKVoawtmGxLwkEGus4r1Y3Jih2E2pJL6sS6MD58xvXddPwdBNacm25KLeF2pTx2SmN8XsD",
  "key10": "24eHCkESMJz4uQFTUkSrzRuqd8CQVMmhftUx9mxyk8ZUo7Bmsm8BhSokPkJgyoA3X6EG95Wi8GGU1KCfbRUHJ5GT",
  "key11": "5by1itbpoDYCejjVaLDVtM76zUbY9VFH2ydLMKKGrUpb98Stvr4a3Yg4srH4if6Agd9b1bSjdho6dazPXZbsgoXV",
  "key12": "4qnnRETA7BSPqKxUbqJW7x3q7kPzFnaMc2vCXStKzuFGptYndtrGkkP4sfRRGEgTTMMuDM4izDSTh5jv48egZBKK",
  "key13": "4Pbgj2h6yat1Fr9agQQNv2HNS3cb6RimjpYRdN2mHebofbCo7JXfXyNfz3fZN2dTatEyF85uEryoZ3LZCqLe7Jfv",
  "key14": "545JKQxBexZLcF1v5Gf8N9qb6XaAnvuT4WQufWVVC2QkJzusyLBEmxMqTXtYDUqcbdLhpDqqzwQnpZeLCUNhQZNm",
  "key15": "Db9BJvUhVM6z1LzuZYosWNng1ngQvHCjM3ZVy71AsBBSSDGGiBPDUoJ6SgXBRVEm9UdfmZiApyPoBex5XgnsBdL",
  "key16": "2FrucEKFLjakjtUsB4yP1weY66nT2GGWhaw4Nip1nhbybBByXGVYhgYravo2K78V7BPorozYbBFcoPygxhPJGoEu",
  "key17": "2ruKdpr96KRTxMeFv5BnpLhSy8zBMYxoF5BPVSut8hm34PZdn5vC16g6enmcN1Fu9TcF4d2v6ZVjAXL9R8vr3aui",
  "key18": "zDazNiyJdYGkpPHwzYdpA5hq12owu5j5yx2nWqwVexPnhaW3mYtWXBpwbiW8YYYu8Yjb9G9qTmyNMrNYXdsT9H7",
  "key19": "4ZMJG1bpcFS7ZigaZkTKVQi2RctjJo1EskqhDoa8GqmKoiQJXf3WZNpfdNLWd6GbSzgjq8ULgjEGDQKL7DuqBStM",
  "key20": "acyrSQYG1w8vFxitqnYhTo2pFV4ba1iHUomyDnhG9VYi1aBUF5nd56GhUzxUVMUa69GUjzhCtTGXfZxpLHqNFHD",
  "key21": "59btLD16yRzDpNQc8AcAj6jrmWU1qDw1c3VdRxkGkjDBXfTGqeDi8zVHA6n1cXFjMC6iK5JceU9zBE6GFG1xMsAq",
  "key22": "3zwqjcqTv3x4C5wyG5fofJBXEaKjb4KaR8e4qk3YQB1VFhwppAhdXg6vRZpwYFNxwtP9VW7oQVhCpW2z8iF9fFzi",
  "key23": "5YSGQDYTdg58J5JEVzPCWQkMadNnZNQseHDDqdE678YqMprTaY2Wdo6rne1E93akXFdhEHoKfVxW9HJp3Uu2mcmb",
  "key24": "5f2C2vk67jcZY23kyuvLnnDiyXYbWoF7EBuznZvDo2s5YtvjMBHE2vWcwhbkj3g3bvkzAHZLnw47syBR3dYKFB44",
  "key25": "2LeKk6m2yBMAQaNPmTs9e2ZQEEAiGvrrPaCoxK3TQXA46cTup3vYm6H2rR8veGfCDtemEGXD57FdzYDzfiPz3LeU",
  "key26": "3BpSdeEn5trLe8JrKML4FeFCw8xvYhZYiyEhxskwtZpKEzyfxzdVxfbLpkcNMUNqgkxrpojasb3WsxTfTrB6qnLU",
  "key27": "34A8uMt6X9sYR3FrtR4v9tBGpe46Mk5edVbmeyjYoSi8KQTUG9pjxKuxGCx8h7ggXMBJm7kRFdEH2jk91YvQyKnm",
  "key28": "4QH1r4tT7VcHjLEQVg4doonaue91idm3nGkeexKGw5paNYxkeoic4Fo8wKts9xEcqSuoKG4GjhPyukJzyr7dbDis",
  "key29": "2ExCpTAaSmHv2i4o3Wwt7tCwRBphJhPBoVjf3KVguT9UccHUiAfJm6EfEfpUSWvHikrU683NZS5AWy3fNTBedsmn",
  "key30": "4qrm4GCo5QixPxvesS6jATZCMfe1gnhiZNaagv36rkbVENvjNFWZQjCbkSrsgVoWCoLxT79UuhnW12KMJ1CDkb7G",
  "key31": "3gJdiXT5LeAs8hH7r5WBoZXUnxHxgq2FYx9GJC5bmFthBfG7Wk6vUjKcTWAPLXXQpQiWe5am3KwJxK6pnFwhjRVX",
  "key32": "4eRW64w2yYmeNg29dj47ydKHYVg4n8C3JZmqDKPRh684e9h7tP8zwpKeNMGBPk62h4DMbhDnyug8iQwzg3oy8dJL",
  "key33": "rhmd3mR8c74jdLvoej2VKP25bsn2LHHu8Rru7ixgHbvujwUo1tX1QfSkddFQ8P75hVTUFBPgbgFi4AAePA75UJp",
  "key34": "3bVFABpHW2GXGPeHqfaGgK4vtJAiTHuhHJxQaseVQ6XSDDTGX1TRonVAABz8zTxif1dGbPpq5kB9tFSZDmr5nz6E",
  "key35": "8H9kZvCaKRnMxydzYgryMpZx2Q795gsDe5Sak3JqENE8KhEMkmyyDPZj8ynDjzbc9fsd8FVQyEMSUWCUkTP1tNw",
  "key36": "45yCBuwqcMmTBw5TjB3LYLoV5Rz3GsuzM3SqRay9esCtDft8eCUHUvXudVRpPpxfNKRRsNMb4FLtmEeDkpSCHk4k",
  "key37": "4WpsYGS2WLGaG4ecRyUZQwmd5temVzvZNHguZ4n234csTxsV1omgV67qYFzZYjxn3SokZiGUJEZbzsrzCKdQJGQg",
  "key38": "Ag2FkH9BxxCXqaxEHnKVyxHCyVHAcTCEZYFmz2jQvM2yRYmKE6bdgN5S1Npc4SwVRaVkHGWiw7v7isdyEqcBTso",
  "key39": "3Ba5L6T8e7EMQgYCVNmf73Z7XxYhXQnb9TokHDX6f8bLBW2xup2NB6AqYcUgtaqmUoBjujKGDy5tQVYF3WxdJEhQ",
  "key40": "41G4m5ADLVYoRL9L2K4WhSJzCJh26qtUL3TGoxZuHT98fYJLmhdfLfirXZyLhr9DAPwXDMEDfUzSfZsuDkZPg4re",
  "key41": "3a3rDFquqDnRogTEGpi6yfGmgDz8MLv8rrhfaMwFfUyypN2bSktZuhXCCGAQTboTufKNaLCn1PbiH6gC2QSVgaqh",
  "key42": "4KAKKujcDD57DSFvsGapjETQ99Pif7x2xoDyRaUgyns8mSKRNcGapTEJyM3jgm97Sk2ZNdT3AvXciVgmmaiAjXf"
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
