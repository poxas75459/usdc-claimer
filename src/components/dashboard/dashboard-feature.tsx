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
    "eA8nJafD3wYtZwfqTC5f3AMLSrjnsoM8NHqmKbtqeMiyb5TnNQXf7FsHxg56K7KCnD62omjh1YcGKoJiStXePz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExwX19Lhq86DSTfVPDoMd9F4LogVw4VKxEGeV1DnGwmGVtRe8S9cm3UxkHFjJbr2P8pacadeLhYu6aD4Xx434Wi",
  "key1": "Xh1HYeV7Z2EY7GHwWU2W4QPS1GUJ3EV4cYQN4XCtzcJizdoZ3yhVqgPhxjQLfx7SA3SEkg3XYCSS9h2cEMKVbSG",
  "key2": "2c3HHD3JCgzEn75jc77GYSb91GK1jx8oiiPK1tyRG642XVYBWFnzGymgWCS4moZ7dzVZRAJF8vQK3cN8XeYSpofU",
  "key3": "3SeSNbmEVsz13QoypatmdUjYFQJ2SDKDMDaGDPDjEgBB6nJTfRqsJGfdK1QykA8Y7fFqV9o1S6zEC6dNA8P3wFqn",
  "key4": "527s2VJ6rwZcHswPch5omuYknWoYTYAmiW1bxLonsrGUXBNFzRMpf7TDQ4GgqCNwLaESUC2KPwsWEEqBgkyCuSgE",
  "key5": "59vUuzFybgUc9QbK7wRhsRKTSswaMsS8hCHQZ7xaijaFv9iCmC7SmmPLMLmJtF2Y9Jqo3EYnv1PGA7M4Ls9f7upo",
  "key6": "5kPcYyDb16hX8LpAfBLTGWM7dA2hCJqTara17eAir667d9ZMYDxojsYBjGStG273zMFpauj8B19HezseDSN1GAn4",
  "key7": "3x9oJqVsyAj8qurSnJWkP4PyVyUXtnY5cL4viHS1gtCxhXZKVCiHHXDfwnwesogacGXnpDxjuYp2x3xQeiJxRLis",
  "key8": "27kcsZRPRmMmpuu2aqK3eNtLDwqdGMsXU1NQbXfyBwSeLESSCG8DVcEHEEcaGeMhj7LfTJ42GWCHoG9tWvwEgYpf",
  "key9": "3ZtqcCGq6rQPd14bybuhmoUwDcW13vb1uk9mCVLGFk839CFMMpP3L4fz5hhs9GjPPAhJ9UzRuW47MuzRffisiqpZ",
  "key10": "2k1hvM5DFe5vRPKGyZAUZcWyMx6Ac6F6pcv9YZGZgAEhAFA2ca87vM84fgivR3sRgZsFskyawYPdYm27xdNLq2WL",
  "key11": "37FtSGhsxEpNoMQ7vzRvsszx3Gh8KKmUdMQLTrYcsjngxHcZ6VwdhRdKST3QqRtNKYD9o7FWZENFbnhXvfG2zkYp",
  "key12": "21YKGSLBA926X6n3nm6SgFsMwj2Mpc1hVHPstJAhw4BAWaRfdn7S3y7LPxKX33zKutSJEGMsW9Dc698MbDSgZhKo",
  "key13": "5TEnfSrpotBSWrLUPhnyHsuLyrFqSt7XHYNL3AfHkQXPDrXZf4hp8dQu2dHU1sMxTQ8B1c5BVutFGFWRmSaYcntX",
  "key14": "2r5QZGgCjLm83GYJLC92xm38GrvAjDQEmY7JY5bUDxCcA1SfTxKapbPMp8GpHRKqX1uGN6mXTfjbeY4dtiMwJHYy",
  "key15": "qzsuaL9zUrRttUY3hnCPBqYH4arnhJPcrc2oViryvQFDyAT9v8VxVc8A3RVUDM8VG1CoCQHuVYvKSZLx7F4wN4y",
  "key16": "5EgYtQYrAPZNfTMwhR7SfoLnJpeGE43KQATLTjwm4T8JUkWvrXJs9jBpJKDD6hLDt4A3DhgSrbXrizHrkejRG2FP",
  "key17": "5NF466XgReQMyb5zoPoWThyn8vCswFnyVNCG74ieNVxA5LTrZmUvycrcyc8dExrm44MkRZdn9qFgfyWUpsKNSBiY",
  "key18": "zjTn263Ty3sp5hCwjoDgiewR3zRktCzgapp6h9R5ZSN5rWkWgUHwWk4BN2g616eSzzxHExadGBkSjHRT1PtRxAa",
  "key19": "4CR9Nwocma5Rc1Vt54Tu7V7bkmcBzkM3wFnkxrpw2pVuPgZFbN1iMCHSJ3D3FkA6Gz4GFPmykuBnjjB4YZ1HW6ZV",
  "key20": "294x3hvffSKY9uwg6Ga1mDxPrkNMJ47CEyCRfNuR3LrW9zYDZPyj5Bmth2gSi7N1WeyW5F7xomsn4bSZhrsaHgfh",
  "key21": "2ZQNtyYsvTdgx8b6DVdj2QTtcousdM4QDv8naYkFiiTijW7fQqWujMAV9N4YixmozgbXnFfXsSnYwPCw4JqqvRcN",
  "key22": "4PozW99yhgGyH8NMaGyTU5Mohdkos6hyoTyEmWZGdLaT6BDGqnorc2D4frg4AiLchjj9WoUsdVM1hSRuybaNZmSi",
  "key23": "3SW7zZ8XtpFFLowYtwPeiDHmX82eoW6GDortoZfC6SZig5hkLrgFepBhckEBHCMejifA3MoMWF6KDRkCF9GC34ME",
  "key24": "2911E4T7u1ecpmbJJgK9jXZbR8LhRCWpRWF8jVvnSfMHMpMV9VaeckSZaruihWT34KtztjhGqK1KT6Z9kpXg96fi",
  "key25": "FeZnLdcUnpKexRrVa1e9oVpyPKUEnZbRwE1fD2KWbLCMU8CrnyWAqzVwvw451PtaPPL6FU2no5EVvJx9NuMwqFc",
  "key26": "2Q4mcazUf5yKQSYZ1Cc7kxh3cwqi8g3FnS62i1Tgigo5DQPZ3E86EsbtFCcm6tbFEPbbsh2qEWRfxTW1VyCkxRCy",
  "key27": "4ZNkLkqnaDXVHbeZjtVyg811PF2RrBL5KMhW589mGowWKtXogpG6xiDokHTTkX8GxQ6Hf2FdgTL9TZHjzGFp5FYk",
  "key28": "2QoYrUQYtwPKPYUjRYVtDnz3pJUiy2DEC1Vi2jcih2fKHzybtjnvQvPBizt9gW7RN8p5C3fmrS59PmXrbKwRQLZq",
  "key29": "4ByaYGFpKZW1U4rqvTxELdekzyHkeWt3Av8wGE3P3AsPHEbhZAgVGT4YsfKS7pF9b5zch6mHcWGKvXsW2jmTa26a",
  "key30": "4qSfK9tcDgb3igKkkPa2jrgTDiQiAfW7GrXfjGkyHTyXjWuvGPQK6s98exZbS928G7HRMQ681dLcwUCeaYuhnsTT",
  "key31": "5BH7J4mokw3QQfL3KE3Fp3PUZ4unUnCHzk4XkcQtJcPfEJ8V2cHvMHZZXofbiMiDcHXjw6UrSAeNJNFG58xNg2wV",
  "key32": "5DBtHRGgFhKkJr8dhj4ZemCJqgNMos8fMgfvqiG4ahfVeJ1LpZWXLbc5RvgZ1xThkFwxWq8eYbPuX3748FHUwWti",
  "key33": "4DJxCjSfdj7t9BKA2ccmpiq7RZzkkP2TMGBuaPPeZXMixin2EcHEqEo74B2AFU2Mf2SBvYMZJgC9h8XtHdKSVfGB",
  "key34": "2JC2v4bnCJidu3YWvhrBwWarpSmBUvn8Xs1TQ2PsmJwEpVbVKJ5RotdBKzBouvf971JYLEjWjBTNdvWe3NTshDd",
  "key35": "ToTunHfngSh1LzNbcyrxhUxBzCcdLSNk6KQBs1yoMoXt6HtyoD1gDwd3FUW6dPLdMXUkMVPwZa5iVx6mCC6WPJ6",
  "key36": "2qsGu1ScaRfpkoBmof2UcpaPh4RUqQMhVdKuayz9tkGMvohAauDcihMo32yzQNhb4798wBk5tZPPtYLU8EP3dWoh",
  "key37": "36hCBSnmh2rvW6gqF5ppYJREhWcXAFMamEQr1gRtQrZ8PTuKGsqpyJJRiCFiv7LvEVWz1wdr4d7EBrwwYQqDTLdL",
  "key38": "3N8hQjG2TkZwT5bPxmJ7LzkNjrpDke8e4Jhgeyp9Hj5nLMapZ7Xq2N7qp51ZJmZspRQ22xE1HK7HDJ4faFhEXvR6",
  "key39": "59zJyKdPCadjurCJ3DZ5n6gDK5nGmruCfQABhfmTTPKmeKMzSc7KwYfVKUNA8YXXDjmvuPE5PHKnYqBDLbMUgfYN",
  "key40": "jvo7XvEuUTH8RBwP6ULAc6fhMi4LZMYUMuKDp1K6yERpGBpqmmcW8qAh1YF7Gg4m2jKNbD4x5oUNmy5MCEgDTAu",
  "key41": "3YjCNVxEK3bp7gPGCSN33vDsko66nYq8SwNgzrcFgbsNqcVq1Xh2ecw5RwWQBGPEzRXEhMUZgDL5j5y4n7y1BTdF",
  "key42": "5r6fhQ9yeocrgWgt5BUSdxtmMTqxF4h6ULWvBhFtuEpKUsyduvW7sSy3YXuajNhbk7gmXmHhoVqrqnhq2VZ4yf6n",
  "key43": "3xVDfhJn5M6jpVF6N4V6jXCMkSkZVLDzPse2GLXZLGjV3sKdTjn9Q6xYFk3hbEyb6URuTJ55pA3GD62sC9fekx7R",
  "key44": "XU8e4idmkvGqxXqtfYHKyFwi1t8GDB6Kaa1wp6TBxsU1VgLFJqWnv5d7LJAnxEHAa1mmy1YpdxnvQ6E4e5T1eni"
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
