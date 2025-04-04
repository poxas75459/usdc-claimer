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
    "3YiEApHSfTH8Sh7tX2U35R9uN14WuSjRVB8Bpya7DQjsAKGqaZiS8H1VPSF6vQ7HfsmzSifRsx6gJww41QFFX7F4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJk8SrHgMXVyTVRaZaNDnoj1kT8fzrNCLx6YJue6Rd5r7W8fVXWWooDFS4a9uqHwdLoDXraMPYqDEMb9Ju2YvjW",
  "key1": "3VaACpznjB9NxKQLx9Qi5ke4QyM9NxP2tQTQUQS3nTk6J3L8Yz8X5PdnGWoV8xsA9X1AvXxdCGNr8sFMsuGpBuHg",
  "key2": "HU2mY2UHyNBM57no5VnKRWWb3ZzKZKB8LMtPgcrzwHomTkT1c2ounNDaKMSDWmdjcY79xUgnA1jy4dptfw5ziAW",
  "key3": "kRqjuj1wHiiV3T3NWf4GeW9Vt37YHuPnTYDnQxxdwp16Uq8ysFC59bD4PMtVu2Wk64WJ7EMKZDm3BgcUYmbfyZv",
  "key4": "5e3exSntc3c2EfSqjsXdCT9s7ArqFmVFsmur41Zjp3Ph27oaG5jPGoeVm9xof6kTFAh3PCGrND1g8CqT64y5hjxz",
  "key5": "44Cc8qmFow4P56Zx46zxQEbmkpGMZQVBoVHmKiPvJPBaoXiSdFxPJQ37uEERJvdojXQKNCESWzYiaNssZkWrSQ4p",
  "key6": "5ghQZVago3eKJbxb3KRn8BfY5eMdevnj3AJp61CoC7Sf7hKf6Wm2UVLm3SYfNB2MYSSsQVa8qPwucsy1DQdQmqKk",
  "key7": "5hS59tuQjkfed7haesLhSiaNy26G1ax2ZvvFVjJmdQ2RFqd7GbQtLZ5aipG5CkrxmoFnF3thW4PmmoxCYu1HWppM",
  "key8": "4GEtM1fZRSzxJYQsDgxEUyXVRZ4EBZ5GGHHrgMcbVdr8bN6vF7FLAdnz74v5xZzfg4SKRB1rsPx7sWzFLKXBEdnf",
  "key9": "4fw5Va7K4Y7xpxmpve5gkfDKxKX1R824mckdM4cmj5NCCgwW3EnZWBBWbseyzu9vLTDB8xnA2qgstt8nC2GYdRfi",
  "key10": "2H5QemgaU8PGEdGd6h2THtdoTsBTxrBGANgg1ufWrnt2fkx19ZXJ5F3JagBFVAuMC4bomEchMTMVqCevu3nau8k7",
  "key11": "yUaXkqGyrsbb8rBQSBZKX9z7mf3bREEUpsm5HPHEsDZqvJVpNtk9kbfFXQxiefcCWUFJjfm6CAWaUCRHCXgCcqf",
  "key12": "3NcezZyLT7fXHn3KeUvoif4sEPCAeY14FiuK4CvXTbTVFy1DMQbvGdnJYfDWFqM3X4sBJT5VCWKYZMgZ8vtTccVc",
  "key13": "3vJYXz2wN3W8dUue2buhzhWFM5puLzz839LiXraTapJzP5MSPKc1uR5zWnCYjTpH7E5tdn5eTkmi9dptTfk9xWQF",
  "key14": "t4tB4P88R7tuEN6s42Jn9DriCtEAcoPvgdU5NACzXAH7gZ3iVVoKKCBitkveQC4xGnZszwpjJPaXjshe78TDiW9",
  "key15": "5SesrwCtF5VAWkWVnwVskx8PAEQWyTmhLwpSy2ADiD7pc63NrnCjtrsCPHMghbEPt6tUe6V3E8N7kfhb2nEFyZbm",
  "key16": "2p25746Rz3azPvhcJxnstSYUTAsAfYUGMhfdH17Q7t7JAvTfswbP9EVwkvaCQVBjtAiSbTjVj3yWPrwzXxyb7jqB",
  "key17": "4nEH99Von6JW9GXjFjDUsDojBA59Knq18dR8LZRZRTASceKQhSh2bwrUZ8MBr6bV87sSjgunA8VdE2nGV3i3Dmub",
  "key18": "MxaKhLCZmuJXBWtUskvFGuPDi9GDpzkL9KMJYcubfzN5aFqrMxgZ9p3wrnZAdUX8ey8ejU3e2Dd1TnbtSvq2L2n",
  "key19": "2eBT5zt5CQ7PSU3D5YMQrhit1N9J2TuvL4qAJEYfAPviZXkd2GDvginM2PNJZ8vPeGBToi428acmoNxdnrhPZrGF",
  "key20": "4g7vLaQQwyEkJmxWQ2d8qCAmsRwXts9DkUiEs5ds7EtTQGo1YiFyVfiz4JnY3msiwLrGFCYq4siPxT2Zp8ZrGk6t",
  "key21": "3k7NtuLHvRTtxrkWcSD3a6dwfsxNT1iDtnUH1gYMgUrJr7Tc1hsyWZTqcSeF5W7rLCdVZttB3xtRBoZo168GrGdL",
  "key22": "2WK7Ba58vfFpfZM6cGGk7zftKiAddBmKfMU1gpkHwTo7og2XKu5TMaJuCmdZBgbBfGhGFEEMLeEJbvb9ztXeBpZX",
  "key23": "61UqYczivsLyaYqa74drwLoFmAJh6xvuhfex6YaDimgmqG2ztSUfx2WKogoFnvM49YjiAKt9ahqacoC2UHta2Ciw",
  "key24": "5rk6MjE78ef2LmNgMuGpZUrRbjGmsEyRXyiDsRHYySci2JgE4nxQtvwXTdqaVe7CeNh9qcQArwmBC2uzr8NYgBLc",
  "key25": "2GvfKpNUHewR58cm9KHqtnsCyn8vkDLWQvaCHpfew2K86aXm5zDf1TEQLpxyoB38NJcz9wBLuNbX6jJoXwQH461V",
  "key26": "3fgQwRKYfdJtuU5HCyhZCBAjQUbT1Dx4eKBn6yhFPtteo4nnQ6ft68gWBxHupzVwh4azWfSoAdjtkF5gTMXPiEnX",
  "key27": "5epWXjJHtA9wMLWTpLkDGF4V65f3nn3RuWBdg3PSFc1PmNiNdFkGc8djq6oXPtqWcTAzzvmvmuT363Jnm61gsVku",
  "key28": "2Wc1GstdGVgaYRH4WNUHt3hqbKKL4kN8XzgrN6phZsvCzrKBTCcc99GVxNbGqnBoDSTZg3L22Y3a2S4DZPUsFxPn",
  "key29": "42Xvp7neYeyoQVQQzyWQ8ofVyHBYV7UYcFxkynBA3cDHNFPJUsfAV1qngR79JfYrRnxVw2NtzoGKVCrdVTCwvDF4",
  "key30": "qw5aeQbja7mpQLSvAn6Yas4PKAo2zNoUWFtxD3qrNMQwvnyY1T2165bog92t5uWVFcoR6urhar4vDGY6VLQNvM5",
  "key31": "5kLFiA3HsVEH6JPnWN8SHG2wn54PAgU17rhk356DgS2dW4mWA2kLENKYSkH46cV6N6dJimmCQwoTvfoXZuFy3Q3n",
  "key32": "21hhnPAq5j7Vb7hRqygGp79JS5SQpVTqK9AYsMmcu3tMiiiPCRYbaJLuq18pby2HCBLtLW9FXodAmByyNtAAsHmc",
  "key33": "5W4WzTyvtBc4UbioJDVpNPMDwvyjwgPhb47NnuBeDBVCvDGaM7QNbMUU5oLL2MqL4SuijGJ7oiyFM6HsezYwSdBZ"
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
