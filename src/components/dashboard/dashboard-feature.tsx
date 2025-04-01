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
    "2eAyE6Pev1DXYJ5TDWCQ6mZtuFvXi6M7QSTiANf2SxW13ZpYAkbFJ1YnSrPgiodghqbzbVovqir143yhdTBbadQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373eUDg3N2xxftDVni7SfzbwE95VQySeaEQHQaitzH29H6Fo6cLekyoL7mjo2Tcj9j1xqrRDL8ZigGhYXrYj6CzW",
  "key1": "4BrkJ81ngajDjhxU2CzMJaBTNsaNHh8RZb9X6KGkbzfNEUcZRaUrupnZD4nUP5SNX4Ts9PJx1BrqbmUbyhqBcmQK",
  "key2": "3eLmYThDUQf3wMe5uRjEG9zndh1x4659ua6XgUFPFhvUQebgBeJVy8EycE3ZhGmiaCE6xfWaX8qTgi7hk2CzjGdi",
  "key3": "4qcokwkaneRe4YvTLkUn1GcNTyy5GoTcwBstkkFq4vrg7PALTd9U86FadAMFSuj4qTmJBHi4Qy2RCdhU4jLS37pg",
  "key4": "5vWgFd14YaHyEEnyGaBXkeypnPd4zEV5F6gwVcdiSS1GFiQTX3j4Uif7PevAoEzpGmYyqSJZmhaYJdyCMBwqh8r6",
  "key5": "5cH6aScSssTECeMgsCMEiv4tmYocxrWS5m1z2LjL1cB4BN4EE22aFRtkj1enY2RbBoNFk2QuXtoAnkvTUzuvBYbS",
  "key6": "5ysoc8xKw9DtYoWGXcPs7osPd2xr5ZpTnYdXph7mV5Vg8br1dX8QdR6jjvc2NR76duBJmr8QvJ66JKzwnDwHoEyx",
  "key7": "65VGyntt6taBJcnQzENQ7FN3icJmZxaBCn7vDwc3d9245DESBVMMj7n7bRLYJmiDfXZCVnVxYDKNETAycEthdxQ5",
  "key8": "2uXwLoaRtrEn6C4Npq74G8BtMSYEnxmFTgV1BxXS3gwfhdUHu6NxmMoyTiTakCGLT9KDHo68dwCTv3NcvsZQDYHr",
  "key9": "2m4tDSrRAWEgirVr2yCptJxGGCZ3gNYFeeCvpsKs7KcYKV3hsi3ounSfFgjNoEywpqpzKCDadSDprKeM9zChKka8",
  "key10": "L5zuPwo14YGt6BnB2ZDhfZ8ydAcA2FR6Wnthr75rKJvYSTYuGLXkitMdMPidhB3BUUFKde93vsb3pw8g9JGkHod",
  "key11": "Sod8pPx42WSyD8BbsvvqHCNQzvosZAjp6LguZkBFBuwpTskCVfBwRrwmyvv3FQ9uDzRcMZSiekyPeSiDPNvw9Ev",
  "key12": "W56bxGykuXBgfYcqdzu2gVmca8axdKn6cFkCtng6Nqwra8kvo7YmdpmLe8rdddheFNbaoD222FJ19KHaZr4P6bX",
  "key13": "37G7yGyzbBLBBVQvQQMfN399RoNWdMYPzu8fLLN9w83UYHmn68aT74SbHFPZazkM2LmnvJpFWyfXbYWs8YhXqgGN",
  "key14": "2CQpXyF1Lv8SKPygkrsyc2jVP3Cru7TFnBcRdZouaVk3XwoxsaJAw6XVMcb9RmoRNj6b1tzER3ZED6a84AzMxsvV",
  "key15": "5WqPdidxrmGVEfvKRcUELYQzLFpRtZm9qwG71X5Bq347eZe6BfEqsVsB39EX6iiMSHWj6R4eDCpaBqjWtrSg67x1",
  "key16": "2nNdXHEipQp1XnzftSPAuyaYDYNKzUqPixs3Juu4wdVS666upZy5dvoB1THBwiZrwT3VNHoxR8fbjMjYT1pxPj1p",
  "key17": "4RmtVy72WsVbVBa3AMNoWy7SSxXQqfptnQCyNGwADkWTGzi8prmYzsC5pf7Z3drERbbd3vdBCinRQqvHiL6dAfmx",
  "key18": "rHLwpt1F85FfwVpbGfqahLsPWaquQt9AFCrjxee4HGLep2vkVrnU2DmbmMmcGzPNfpeG7Cg3a4cdzrxoE2ULTge",
  "key19": "3Kp1cSwGF9GrPpHYhYik897iV7gbsS4t1Rv7n9qopju2DP1rpDosfPYyhgxPDGuFTR7KkSsZSd81acWATemHuUo2",
  "key20": "2zjEs2wa6QB36EQ3CrPbxnHWzYUyT9gdhHDMs7XUj6rmCt1i5WfVsTKzrmXh3eJgVuUjfXRFqU71Nnhzg1m9G1Yx",
  "key21": "2wubA6gPXzEEEGCPY5Ud9T6193cVohsn1j6BaR9DKC9R6Myn8dJuebyAYEXxwZNWmAU3yfSHYXezRSiHnzTj9PAC",
  "key22": "5SNhTTHjiXMS2w5pJH6khBMoCqMvbrP7FoiGR5uYeVzidJjSqSXk38VKhharDLr4evkToSUaFeagW3fYdPesvhKU",
  "key23": "v5Cnt5PepjL1ZrWjsaB7gwR2yGZzDYVY2DK61fD4XYi5o9CwExUhLdSh7vrwfG8J7Fz9gZvn9BouaqB589BVTMc",
  "key24": "53AFUQyAUmUq5mxzqUaSocnWfifdaC5ExCBsy9UTw1Ygyx15ThxJfeWZqcd9VfnnF64AjFnT2SCv1D3BRV17FNSn",
  "key25": "2qKnzHQayzb8f3j5VZX4MghtuEY3cT8RU5zQHQK1Z4C4Qx6Rfybzepi4SsLwmZkH1TfDRGC7sMKz8YuntwHHVkQ9",
  "key26": "42KqFr531gNARo5RQmAfbKtTyCvPGpXRrWNkDh8zHxXgv6GUgyKxupiEyH3pgZtU9n5E6GVYkyA1YQb6TCzbtrQb",
  "key27": "55CfmRa5qniYQU9SN4feTzDY1gALg4nfsHz28Av7SgwmGdZNg5U3CsK7NmaPuc4w2JrqVFxs9jdmkXEdWPPEfv2w",
  "key28": "65k7zBWFd5gxxdVZnNMZTdNqmxGyu7wAAJooboGgv8QtJX1ZA4CnxAwXQivLwZo3NWaoy1xKynEy2tF8L37M2Rjn",
  "key29": "3ehZLffPSNuiBNPGvB1cNxRPM6Hex5646h7pTPbiRptvaj3gLMWvxSfoC11e2rgLDsuVuqC13g6b3qbm2FksQFbr",
  "key30": "37U7orNT1A92ryafSJJx2aABjZ9HYzQoiCACt7mUSqDxiegQjMfSxNZNVUf3ceJ6og8yzSLZo8B3U3NbDZ23LJFd",
  "key31": "4sfWqRt8Pm1b3aXoXsa9EoNPxa3CJLE3eBtDjEK6Fy4Bsv9idcNy4FzBL5CyGA6AVevB2nNwtwQ1vYKWF3g6ZRTa"
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
