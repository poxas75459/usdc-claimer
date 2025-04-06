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
    "ZbPoRzyNA9fUEDTQTsPvv3AEYdA872oD6rXFDTizXigiAG3Lm3mforgoiyMdSkBfP2ztHV3WuA5bsWa7vgkQAYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FnCPrEdXY621rpK3PtLNu96fCLGdomBW8VqF1uYGyJ3WbFpUbXVDiT4524dSnGukqefHcecF69PoCkeqm9oVwxV",
  "key1": "43PheNnWbMUEzvf1U8USwCzvUeuw5tHWeJyvoRR2nzS4tist5FKfPZd4hYooNGDf821gYQzJoNFXsk2LKhSrS8Cm",
  "key2": "34FVszgW2PEpjEJ8kjbL8DDACVkSYVUiKuYVNrCi8mBmwgwLuPabhLW6Qv8vBccmRRGdZzurMiu8DYChdsVhrwMZ",
  "key3": "3whngQZCJcR393N4iwb4seygepXdChVfDH15Aa5ebLYW3mBdC1bXrSufKWP3Y6Ue4LEL8Q4Lz1RHzaqt6xqGWK1P",
  "key4": "3FQ5gJk6r96AZaL5GxnsusFt2EdqkNnKGz5MhvgVmQoi7EAcYBdw5BkUJFCaZbeQSgF89qxzA1dU8yQJtxW5ev4m",
  "key5": "5A8Gx1xk9cKhEi7PHKr358vq6b5jQtfY85PeKY4yLWoPdh4tDqhLYsR4xJkXFXs5uDVvEMR8TkxyJ96wPQyuz2Dj",
  "key6": "3eA7dXg8ZFrGGUPk4283h7cfyUjanMM1jKR6qkmLwyHqTvRC5a6oqEf3va8SfVpL8QTSFVSmMiz2BvuSJ2L6EuzF",
  "key7": "4B6Yb8u3ntZgkCusaiQV9hLjpdLvLSjmyqjvdFj8ZggsmJ3Czoo6M84F2PuSKVcsENDnFDVm72EXczj4XSaXNL4b",
  "key8": "4hj1y1su9WfRcSSMvQmaftwBePaiEdLB8UMsDtqvnwnX4rRk18WBnEeGoqiZuzBD9zxPdYdp6Neu8DiXQgbcaJMP",
  "key9": "5j1K4MsEzvDFZcYiM8D34gwLTWZnHXiGnhpzJxxNBp4HR8EFpRNcm6cLynsZj1QsmXDdj7FnPhCqdRV9exSSSWdm",
  "key10": "2iRhLGQxh5TRdzxQ58JcNjvYhT6xmLTTV8nq2QGjuAyx1k9LFx7BBuBJBKPK4mvyvkXyRfrMtrifQ6cFgkk2mRJ2",
  "key11": "5NPgNBe8MYfd1nCqVQNoH6YUMYGvCaeZXj37qeZq4EAd5Rv21qZrnVrwZ2qnAr2kuKbG9evypLEvhwAbgCop5Cjr",
  "key12": "S3GvAuBiYAVGbws7KLyfZiUUGzngkyPfdBT5YS2vLFHenMYSVvRqbCFe5Zj9GpeL1E8kodnHD45KSGrqTR1A9oQ",
  "key13": "66JVRYn3un9dGRpeYvyMehEQSnYA1ZZuvpi82DwiNHa8jLa234eLyojC2bYMgRp55Lum4C6GzKfyfFinBPfF3foG",
  "key14": "ATHGrwTa6x4nZUHCp11z5Eo7s3TdQZWdgsCi177LEpt5MbQ16Mx1B2pFKfHErR6EjD7z9uobyriSwdTUFPKa5C8",
  "key15": "2R1jgcYKdGx4t9wDTm4oaqvSMcefq6BB4E9kgfzD16qhKXk6ZRffph1moaSFnWNG3sc2HgmNnTSpT1AGi6XwaX4B",
  "key16": "3mYpxnJBcmZNs7uPaWG7ZRSqCKm7s7DEoUxiiphCL4chp7AKpBESoqsVsdLUY9J3gFudCS8SnTahdHtDpwTMKFxi",
  "key17": "JVcAsPAYUe1wWGo8w8v798pH4XGQ4SefPs5hx5diuQebr6vCbPp6Mq9QAk8FbFvEKpVqituEw2Vs8ondkjpUfap",
  "key18": "5iewPdd86yxwJozniwB9SDPsn75DHcxJfsn5yUgd8yB3W9R66fugiVQ4wPESyG4AWmNa45YEMQzpaG4hLFGnRB9o",
  "key19": "22uiwraeQvjm8tmBHYVXLoJdJdLwtP1EcqGBSQsfno2kWp6rQiHWh1obSqrKZGZEoebcsPGn2fviQ9tM8MDzsPr1",
  "key20": "41NVTJJspATUverWwNnr5R4sqocFChSVeB1Q7kW4kQA2vhf6gXjoSw1XYPYo2wxY4MxiMQLwRrmXhTgBbXLHgD28",
  "key21": "5p5pM1ivWShdJruchu1sm92rqVX49Zt3yNavrJSfG6CRPd7EwzW4xTZ8ZhMGP7NNwErXNpWKmyhGhq8vUdoA8yDw",
  "key22": "2tUBAsEjua766mm2HstZDb6iDuLDTySEZJHVswqu3HcKTVAi1XWs9HRN9NFxhjLaNdCkvSG9sQABbsKouheqDgzX",
  "key23": "4PkF3RHEbWykgexe1Y1dL67LkRb6Xq3YUiyHUxV3nVbtkeQbTgXAYUkibP8XfWxtRt9cY168np9m5Q4Pok5mfnLb",
  "key24": "fVWYwtRwV2yZNhnM2teAAJikSKqtfmRWzHJDjYzfxfUiF5Fa94FQ6GNESjt2CGQrxPHyshbghuqaZY6gTKKXSM3",
  "key25": "5NRSvUNiHKNn4gr4eSBej2AAJRpSCFZMQHfQsCFdurEdMAJczskiJgMPjSnw8ZyRSBJva5FrMgErVBM8FQNuBWGB",
  "key26": "2JbozwxVbmZJjViEUBTeGqQdYsD6at2YB6nnbPBDjoSkPX3kKETJtWxfHXY8cwzjKXTFACBg71M47Mg2BZq4xV1n"
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
