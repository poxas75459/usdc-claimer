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
    "4AZbcK7esrduExCovoD9x8ykbavcaQ5ez1Rz1mr6Ao76UdzxHjpu139aBKGhSe68hB9RYpW89aftmrC9XPSEPb3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvapcvhionFQKwpbwCVeSD2TiCtvJnBxXRKE9R1mZa4MK44QUyiLfvcmU6i8E9hb1dFZECdLvU49HqmdN7AQ1Lc",
  "key1": "4fkEuqKFbyx4vFVDxceD29yQ3ZMAa514v6k5PemswBunLUnTxJUukJECXd7o2aMpgjHzpDPRChwJFQBfgzPjHun9",
  "key2": "q4Zvcow9zAYNhBBqFtpgEcH7sokUdTgZw4YjurVoikcp7BH5zjiFDy8sqvDKRo8UfwuTjn1MtYM3tnEMLZwHRry",
  "key3": "55Krm1a5DeWNhXARrXDpjpiQVo5Z4GTLDoyfPr8VZhEARZ7dhbdHnZpxza9oxLWW5DwJLQmx9PsQsuoQzE9eA8S2",
  "key4": "4fYkJ3oWXoACTpZ1mpDQ9fufM8vmnFGK5jgZvBr8cfgrMfn4i5JdD3RHzn4He6J3NPSnm1pHTzzosHyiFbPuabqx",
  "key5": "31qKi8rdZaXE6QAT5WMkyH4xFqCRHCdSHVmfKv4J7EhSU4xdr2nLAUnLeguKTpEpkejFmj6KQrT5rj48BwMYGPPU",
  "key6": "z5Y2AVSpfft2gq46GtkdADuHoSiRKh3BRPkuxswoCp72P97JJxXx2dSQ7wXAb7zNtRJyay3jwZfXtciLE3XeUXG",
  "key7": "2pPvhCFy3VHKAmRdvs5dRiuMv4urkTNaHFEjNRqYMypVBJPvZ5hVmymAtGDp2r6EgnaUS2d8d1p25Y6eRDWTzwQw",
  "key8": "3u8yZum55sUKnwkdHnHcmZ7cM8sNPUVw55R4J7KFQJC28P3UxrDMcwNcvbGdxQJMXgqLZWX1L3WTJWnPpAjZ5Enp",
  "key9": "cPKXVzHoCyhVdZX7xBtaEZKxsUyyrGXPC6mMeUwrnAC8dFZGNuSs6azYKi2MC4eFPmuSu9pp5Yj3QbYRzn9aKGq",
  "key10": "A2qTKQDt2Dhw6ovPZKmbJvkF1j5JknRBDGnR3bsCZhTM8KrGeZ91PvxkXCnnWtKidaABK35nF3baejryC6uffGy",
  "key11": "ro1Uec9P7rKbwS9EaP385UnwB7hVYGzMkVeL1WG3Jrb3FvpVn9JtXBL4iADhYy84QzE3mY3KycNu2kyv9fot4kf",
  "key12": "HXMwUy3rXHu9SuFY8SXT2veumrZg1jfMD7PYb6uK4tTsRxWMF2TCDraQ94CeQ8oVATeorCmGzuj9X9zNZHdzx1D",
  "key13": "5okfBEyg7GbV6uppJPPbuCmDpgF7AD9Kq168DMHGQ4UcN7MevS5oYHjMYcxzpF3BLFxLj2panzQevSDFWrKC1ESR",
  "key14": "5VxJkkn2nhhgfRoF86oRSWM4TpEbCKxfX2yMK8FLBtmyUWzoqyvsZqZKukadyTh9ddsp9jwp9d9PhYs8AvBUPuhn",
  "key15": "p1F7p5RiQMQnin57eRdVDiX19kDnjHmRQ1HwDQtCGZepVn3FgGhUnwUU6LivFwiNd2FntZzRk1YKCEGGR7wPDWc",
  "key16": "AXAQgFeissEZwCWbWPZRzrzaZAUk9CME1NTZPZTfFmd2eLgNv4FKVQjvfJcsaJSkPmXTsXiDduxMdPK6w87iUKF",
  "key17": "3kvqQCM2GwnBHFWXovbYgPsB1ox2je85dY9cVWHAwDF4SvBqvqpmRZA2GtBg3xGhwurbF9dLUt1EZquWrocNSDkT",
  "key18": "5ZhuDf4M8gAz1a9uBsZn1foTWg1aJxbHdTnrr8AEsUYijjcBhHNLVjE434PuvmzkYJfsSRm58ujPaZLfwSc3fmVP",
  "key19": "EcsZjrvqn9PRugj18JYipYdg16JcBEKS9UpYZoT5VmMi8CWz17QHrtmhffN7iyw6kYpExe9vCMqu6AFjoXPYS8B",
  "key20": "4vFEXx7DRUqEtmQsWKHFDGBwPPbEhbuETwR4uvwxhxfaDwbTLGmvUnk7WsYE75Wpx8DmtVqPsQR1hqn5obvaMimy",
  "key21": "5t2Ev1yjrNNEdvUx6LDQV8ZxKBKQEi6i99ZhjYNLP658859vV3HT4V2iETTComom6akHuAFZGBdzsEoGvmUDRDoh",
  "key22": "2mQEh49uWekkt42p9zbwkeufA12pKfxFetpLuGdkA5dMDWtKBo1ypWTE3yc3hoxgVdJqcpTte8tBvjnBXou6o8Ds",
  "key23": "5zjQkRErkpCDRbJEdGgDZERmkqyrvmExyDNDpaPVmRwEKisUGfVSyzETp42BD88cPqPQUEohFoPugPSz1qE5Twjy",
  "key24": "4cCjoLTNSaG1q1xdnkbD8NpkePCFWFzCRf4J9HFihLAvrZynrVPfas5b5D5Y9yMChVowjEiLGwJNApC8seybcyfT",
  "key25": "M82xWwrgT3JD5KWEmWSzgWozKZxnwc3HxjHsqmaGr2r2f7m5hvf1w2daqdysrJr9QHp3EePQ9A5YMmixmbycMi1",
  "key26": "4mzdo6EmiAJPRyXhrRqt3qVXzU9ndwNnqWmtHN5CrDJeoniZtZAPpQc8nXpz1MkjW4THtwiSseNic7iUrrp9HpKY",
  "key27": "54pwSppK29v51YVWdv3Zz5r9EmDZwFeHqQmSmk84TN7SL9TNXj7Q8DCzhGLdcVeqfY4hQ4pGxK5ktgradMEKgpH1",
  "key28": "4jaTAK9J6nFXM6aBrTYMYTLBVJqZ1VDsQQmy1AKKLVSxNqncyJiHTriMymzhmHzPnLRpQZTxN26rYBCuufH6y2r4"
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
