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
    "3wvouvpomEXViSkZzNhZz5EjYFc5Bx5tNWnfWsbpYkzkpLqc6HctLF7yrN9tzdeZz8jvKDeJ76KWx3mqALz5qxmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSDhg6ensMarTJE78Nmdo4EHHRw8QjK7fKjxsZnDStjt1XbgPzpsRWJowuWsYh4CZXsjbVg7CDDySnFZQ77Gtj9",
  "key1": "2yPzKfFGXhMhCYY82mthLpJ9qWwSumLHem8SHBM88BFAVsGJ9WFG92AUaYmsTCD93iRNYyJyi5PpcsSETxyZ1pBF",
  "key2": "5Xx9qvKYXC1kV5uGVFdArDMqpgdrUu18KTjcy73zmkod573UiEn6K7XtUS7YUztt7WHQGaKSPo5j4cZ2YDSxjmpP",
  "key3": "2BXLeHBupB9SaHtpcgwunNE7QBuErLdHVehTg51j3fVPETbc5pTRRppV2mRdpSmzXwzzDWb7mxi5MVRqjHGC9v15",
  "key4": "WS1fDcUJKZsUPsFeHXYY6FPXpTTj8PubJPX3vUCzhcjF53XdJUkyEMTNR2XzRin48aATTjgba4VQRnsGiHZLouw",
  "key5": "bmqa5uS4NpwVEHefXvjKL153mzhafEcDQVpLAbt1k5hx4P1qbqzPFVBDc6uNFH6fw42HtRKXfycVMLuhFMP5TUj",
  "key6": "2NBTfXGgZE8tQSBjxFMpdoJoNQ6Rct9PDZLzHT7YiWyNsQ1okDgcwo3Be65cWowPaqo5ADTKao4HVcdogrm9uptg",
  "key7": "4XJYrMSLpQuV1hSTqgqXLwVH3og2stoyY51c9iJsZbhxLVgHPpLcRdvZ8U7vHm1c8479tiMYbFKpTvszHrY5oHMH",
  "key8": "2xKut1HiE6C2mw9FSTQhirLCLrAFPrXoCk9UERPGLpjsZ7z8xm2cD8b6dgcR3C7bJhiicVz9S6iPmikS3GFTb9zz",
  "key9": "5Kxy91s1F8kFGuJzT8ZJnFryLCmDuW5eydWzNoweoLsMdUja8P22werQpMrm2meQJENL38sSzzdbQPo5Ja287F4C",
  "key10": "23n2FqT4z4CrJakw26SqaXySKYCPtMksiJ3ohBAXAiPdAjg3svRi2bdGedNih9Azs3Lq9fQov9XWGVQ7q8PdZihF",
  "key11": "2yD9zzCjvGUjPXk8ucfg6pd5HcQ3QHJxM9nYZhSWpG5tAmeqX3AhmbpqbSHqZgf9qqJpn9TPFCwC4xwNW5DjiWYu",
  "key12": "oySsgT7p9Nmq6oxnkkexfmx7LemuetAwPHB6mZ5yapfspLGuS3urPA9fS6ngXsuwGGhWmuPndnQV8X28Hau6nnR",
  "key13": "2vyRAQwzU6kxprHtrjHXihMdpkH3kpchw48sVdMbDsNX6ZrtAxJ7VqBct3oCdnK6pr3zxJYEegdwbPTJaULw3YaX",
  "key14": "4XvYqEw4zoaEadd1p1RMohjyrnh1LukWfsBwWmb3Xyc1wN7PT6ekfD5wc3X2oG7cXLCcAftv2CZny36zbpm3vuRA",
  "key15": "2EmNeu51EkFMB9JhgQXPdG9SWMiz2vvX31y7wkZJE4hYTcaXuFjVnq14FuQVbyHnB6zUcjMwFuwgZTXsGS7ycLmf",
  "key16": "4Hu6Ckf2sTKDMvR6wqSVhLcvtojXoYLFLYaxXnLkb4D9AYbKCiMFVBrm72zTW5uBUGSaTa82d4gDuV67ZF9hUV2E",
  "key17": "4RQjMa1PptjUYj76YmjhkUSA2o69biP8S4j9Ct6gtjAHWsymt5K58z1LrGTdzMuN3NuHCKJhE7GSwo3QW9bFVVFq",
  "key18": "66JE6tVTejuSnzJr1xU8gaF2V2PWrkK2NS57vMLJ8cAv5Sj5eX1Qoq8Xidegq5pjJ9Dri1e7ZDApsES8qA2j5Cyx",
  "key19": "4GxDHgm7ErxqDwvqCNFWRhNWJiCsfSsizgMaELTYUAeZXQYTrVQoxsL9MZiB6g4Pp4Fi65VzFUVTMy7dYA22G168",
  "key20": "2D5iPtKvrB3YgDUdK5wApnYk4jS2pPj9kSDGeJj9Yim65d285M9LyNLM59whE97FGHUEJV5jng7y9rmmoHmjJxJr",
  "key21": "rscERQnyg1o1UTRLbFKzDAxqY1G6boQvCiwp8kYoaETUoG59P2nscURmdzv1ff21qQQ3833cLpeat8xiPYJ533B",
  "key22": "2nmnV9MZNKeJsQoNrAYEjCDG5b9JYF3owYtCbLnBd4Kaz5VDJkw8s37s6enkmZkqMJp426GgpWdwMo2G8ns4HmDX",
  "key23": "25RMPcofGNg6aNJ8T5Ee6yMkSDgdhkfnJ2NGbuXnhq1py8wYhVRgX7je1m1JrNWFFZxjML4cYKJx7xDhUnMejPXK",
  "key24": "4PqvggTZuxNaH8am1uwHZHWHPMB6Shh6GDQkhktauaTtagGazw4G4nCa34Xq5rXUn4s1Donuh6CpVRbxf4JweEJM",
  "key25": "pKWAF4DY3UNJionrqkvGxiwWVNSu8Hyt2rdLTFEeXWAaFNJBNnW6sMtyERWEbgSyR3x5mFgpNGQxGU18LYXhLrK",
  "key26": "5Mr9amPngbmVkYScDFDEMpEbNd5ACk8PnyUC77kTLBYgWb5WJPoHnkB4t6zyz64NDGkUivsQjcZNYLFCsPx5PXGr",
  "key27": "wqTBb3vAhZ4ikHhN198vKwS4f4mLZcLeX2rx9ukUc2k3bARhBeWSZHig1KDs2DE31eRXgUsMdEonAvEWt6yab2p",
  "key28": "51Jh99gKTjBF6xBqtF4S9btimevKY9PCqPu4Vsp2Vv72NvX6pA9Gw1U6HagyNkJTLGqcmUKm4memuNK1XXi95Epo",
  "key29": "5yccNyBPkjszeGo6pyodLH9cWtejKvpvS1ziQv9XayAQ5Ub98AaTfBVwCivpiDa1GiNu4KBBYUAf3S4Mhudzhoqf",
  "key30": "3o2iJkPU9PYduJZebtLfbfMDhb8SAseJqKDUdjjEm5Be5rSkJ1PLf6YNmsXHCQNGdibR7Tsb8w4nnxLurFd4Kbos",
  "key31": "5rGxyGRVSEGHHpa549zLbL3hbGNTvKpL2LfSkhbAn459znSgayn1e9rBMA1mEbR96qLd4SkLqanixju1cNRneKvi",
  "key32": "5RXSSv9sv5G8uHJmEVv3oATiUD1MYANrggCxa13MKcEc7sKKDRRQJDWhA3oX193hyGHPwB5i6bZZ5Q24YMTMGaqG",
  "key33": "3aA2Dy2335qC1JBUCiDdg7cFDvsy9WbL3YMMq8DBYG8RBXQjr1Qrcmkiv3nb6jcAmFHBMPvKqodeDJKrRBVh7c3J",
  "key34": "2oyokaVGAo9TgcPTTY6paLEvVpQ34SKWdZSMzUGVCMxJ2AVtAU84swRfPSf8MeiDt7e2sM8YWfmbB41o5djpafD5",
  "key35": "3txGsJvervSU5ga6ut5tA8jUQxe1PttR2dDNZLFvNRTk8fzAu5QieVcTW66cVBGS4hBgGtjcM2HtDM6ukDikUR5p"
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
