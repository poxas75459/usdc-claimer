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
    "2i6bagPpnj2PFD7j3Xkx6vCCoRZQyV1DqUrEXdLnYW9cW6p47tF6VaqjmHJkpeXjqSoAzLEGsxA3UfUs75M5Qnu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xMHiWWfGUK586uWnQ95RTzikBBtGPLXafv5447T9o4Aou6iqRtsSBbJ1udEVnqxwnccvKmM2WSTwyNVLNwSvG9e",
  "key1": "hLipZuM7AB9qtysCR7kXAMBUkTb1iyEgJGPZz9uYeuabzTRUByvGGsc89jyrbAsQ1QYPmdR2nXm26TJfHm1mtVE",
  "key2": "4sqGAd1Pg7x6QKTgNZ7wFtFU2EwyEUdzKpUPGUxh7fM424PvmdyLSQ2UzKs8jVSkRabTtn42ENqXrsLog2aB5Scp",
  "key3": "bMJqgSyp9enG3MSYPQuT1reSLui97bVh2gVz3BmApjSRtNxdwdiH2EePpz39NxTBWSUQSV1GJaPVFjEhss4cZLu",
  "key4": "3JPPqg91PhVzpnv3tr7EnmJBV5LUsvzAiGbPceiSv9GqpuNBgwawsQErnoC4qfhqdiCRUMobEXqtJ657Kpahx2z3",
  "key5": "2w62cMuiSNZUeuqSTriregF7vNDmCW58UKv4AdftgPZtcQSndyhWwJf7bh8A5wg1rNDy69sztCh73AJ4iFy4p1Xj",
  "key6": "4sjYmoSS8gg2iYBXn24UZq6dGngh6UjtXDv9Wzzat7Nj6c4HkeQwBRodq2WKEBRVFxsxUCKKmCTjiTfeUkVEhC3N",
  "key7": "63yzyXnHDpcjPR9CyeG1j7uQ89w92K4SxkpJVT7DcBfyqjYBRe8YDP6gHyTxn9qPUUdBYVsjDQ2Xn1t8T8smTY1d",
  "key8": "36iRptb7GcBZA7YDijRchgSgwCaiPj2J5Lw3EhMiLbp1UD4UxW1jeX5mbGbKntPgLh1LZ4d66YJP1mZZauom34yA",
  "key9": "5u7cLHQUowjJwXdHzaiDFyPRzdVns2ZkbtGExV2vvHFbao7CQhu1hQRo7xodnpuWAKDcBFxsfTEjEh18QJXA2uqp",
  "key10": "2dyMqwfqEuxqmX6FxyzisWeuVZ94cjFfV7LMJDkQ3SR2vG642K3MMApdPSMsZiDrCcahE5y4zAR8QJ2QTxKijpNr",
  "key11": "4LWEZNBjohzoFbvn7AoR1V8vgVdqBje5UFD6i2dDa5VkPdkB7Hxcr3CFPtBgxLahr4Qq7PH7cooCoof2QEUf5nYj",
  "key12": "36F4GbuBmdz2frVh3VFVuGggyhUE6WULPx8EARPpWHGKDimgodJ6y4fXSrTMQkuw8rhS3zYScNGiD5r7seLVRVzN",
  "key13": "44ETbDzz25QqT2Zxx6g56mhcaKyp9TjF4f2bkUKoGrRUCgb4DTfmMzuJLSPq4YtpXRhWr6y7XACvY83fBmrpGVje",
  "key14": "8LQXDKa8k9DFW9WzxHPN7NK6M6K1gm6Njidao19xsppTHDSY8RKJXMGc4YerqrFxrSp3YFpmBeKRVhGpP6JJCjP",
  "key15": "2feiXFvhBVp9gAfb42nXSJReeSJYRVUW8buMP6C37Zzdp5kjsQ5a3Xw5JrY2oWzn8SKqrci7jgazJZwrhWW5yysw",
  "key16": "56E3h15HZnzPpkRVq36JGo9iWHPs1tzTAdffSQfKi2khE96jJ8uJ88KpRHtuZAwwrgvY4Pv1D6fYCKJPsHtSr2GQ",
  "key17": "3WSsQTmLsjmK4pNio9mib3BNQauz5iMM2keHca4cjdx3akLfe5mKjmFTGyDGif7SJ4so5oGR57jo9ar4ZFxzojpH",
  "key18": "4z1yBP1xGZhGpFU8EBVygEGPYmmdPUDGZQFwpLwCt7R3K8nyWVTWXY6P3aFsaro56wRsGCRX6RiS2LPyRLJfi5NW",
  "key19": "3CrAV8Ur3ivTBSku3ocW7F4v3s9DrUGBQjsZJGUcQvMMBHEuJ9GmDEWLsXXoSHjgv8j2tqPKe4t4xAmas2SkW7Lt",
  "key20": "5YVjSXpHTeNjCXeh7Uxe1vwYnRhJPK52HmLa3bVhYzPRQDgmDtchtVoW5TSJ3BUpYVVDBLji1RXAkWkMYKx3LAFr",
  "key21": "2DM9GeqfbR92qsEQCbAY6aNbw62PMxoT97BoSZa3dZEX7pWUzqE7GEEWLJ5snKhwpkrj4CBvRYsoXSfzSWFYBpj7",
  "key22": "jTPGhnVgxfbXZj6SaYtqUBzcbC3uejn5RXZsnDXTP5hZf34rwVaMY627Jb1RGN9zEr7SLFzFEJL71n95BRpDcqb",
  "key23": "2fVHZj8kx68E5aPNWNzDocNaNejSJCrvD9Wx2z5YSL2WKiQKnbLXJiDTET3uUGtJxRaMY2mhKb7to3ENh4dC1twx",
  "key24": "5YTfbAGeCkGbtFVFvmS2bMZbqxksFjFsJ3Xbz2g6R8D9V1PndcKmuqCPirmVwaF6M7ouzZbJFW5zYEsCu7QPNUbb",
  "key25": "54Z77auj6g1gV9XqEgVUUL7fWMHyBonvg73gbXBZGohtf7LzgUUTaGyDFxPQCRrMrF7SdbAMqhaR1nkSPJgHReT9"
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
