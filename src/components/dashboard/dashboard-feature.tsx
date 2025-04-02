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
    "fmjH6mwNjfTU5Ngx73EvQ31vwUmkLvSLAa47bcuFJLWXNz52HDjjGVD2MrDhwBw7hPG7N6eT8hCje9Ja13rUHxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHgg2uCAR21tVX8fGtC8ybdeoqaUEWYVn8TTBgHiCVjXb4tJVQ2KiSH9vddwe4hrW6UMpizgos94TGYSJ6jXPn",
  "key1": "4facR3VSDdCiP87x9m4NMbDJzftsNw6THGP6w7erh9bujQYs6eyobMYRGice1GuBMf9K7mSBeaC26tNh37fRfkQ8",
  "key2": "5VqTYY8t47BfFYZoNeHetZ8pCs2dbXmZci8P6CBpimNuRZwjAqmjiGUYG9yjAofuKmhvX7qWDF52o5pKWdRoijLg",
  "key3": "316fk4GRmSd7tdSjZkUn7m5pTwqxqxf6VfdLhLemxRrMr8GVtarHq8CfVPnYazJ54j26nNrF1cnEHocmH9mTNzmE",
  "key4": "4Ftt8YbspykZwABM5tiDx9akKFMU2UhLycF7GGYm1GvGJN5MFfjxhCzRmjUk37vhygGacBSyYL7e916eySZHESsn",
  "key5": "3Q9tM96MV8B92VCm1fzncFMPZLy52YEgQX4pYwphktWHjTJAr6uLcoQQ2KhLHCk8Fw4APAaHygs5iTcsRyLfeGyR",
  "key6": "35tpV2EzS7oHVLum3W7zQoUfUv1qDLL4TdRH45aLUfM2qwATDCR71HEipFpCtsof7KYP8z99ZoT41BAEybwYcXzi",
  "key7": "2KudRSM2aLu87pozeyDpXTKvv9KuXakKgi1fJ7S827qABpZmudhkazmb41ok9qAhZ6uf1EQznamWqLSDgT4oQDoD",
  "key8": "2ut97L5hvZNzyiCzjJBaKnfBeMnfVNTKMVVWnM6piMeR6EDCGRc7aj2GyYj2wriyxFPx9vBbu6UqS9HD5ArBz6Hk",
  "key9": "4uHbVE29nVuDWgkfoVbLEeFwTNTpCDRZuNE6dXnaKQu2kQUqzU6NNREx1WMGB4QNpeCcn3ddL4dA4wntZUUvi3aY",
  "key10": "9PEL7aBLZkQwFvMnS4jpoiexfwyEEVpoC4JVDz392QXaGACeG7sCpLoDtMk9QYaK4a7TFhkLfuJthDMGszLuu6v",
  "key11": "moTo2X7gPRYC4251ZRq1JNriX7QaTMQsWtKvTip9EnRHvrErhsUMBTuD7rv3S9MdCome4ZALrgnkQD5qumP8DTb",
  "key12": "5SHzpJxGyN15pt4a8B8GpxfhmnNCH9ntZ8XsGGofjBBczSpGMv5xrFAZpT5tSeNwc1yHSvZnebarexGJdZvA9UxR",
  "key13": "5s5kyTYekQG5RovA2nWrzEbqJceMrCUd772fdUksJQQJUXXQKoWweQj7pqbHzvHeqc2rSLT3j4qf6mZQu22ZxkH8",
  "key14": "26F9PUjjRzYdFLpHc9t7XtNncbVcPv2vsAV7KXX2zpPGoJrhusxfxvNT3mccPjN1eUPBfgFNrpgfA9gKP4vY2N3B",
  "key15": "5tNHcXQBiz4jUVZcAyZNokH2vHMHKA2tqmHmXCBDNimoDGZppFhenusiqGAirLn3L2rRUA4dwRxfbRJ9QBDz961c",
  "key16": "3kwanW6ozp2jzVXX2qYXAn5LAGkgFk7vvMGRSFnCNtRsEsgfzDy4MovMk22Rh6P61cZt5rTgkbp9PSrhiTk9LfD",
  "key17": "29X3L1QgSoRyLoXyjzJuLMY5EWyF8c7UJ3qxqDxnaDGUyax8KuVjjFVZHpYzUwDgtcEhZkFGy2KvYZ7fLYtGnh6r",
  "key18": "5fYZxneYBbqVCXynkBY3wttRQbUkaA1rDCZU9tZx9HLfVN1b95fd3iXrXCrNkjfTdnUNoJ2CgUEFDuYfBnosvUV",
  "key19": "jpHbYoPGH9DVz3w5Y5KzgLdHN3ydSRaKC5XjTWMwt17oRpUfEoCHyXUakvah6tUkvnY3ZbXyT3TDTbPdzcEVPiV",
  "key20": "3TAyReNcVg96RykCo1bKjZKET22RKsmGSup6oa56MuMKMSncEGPgwver5jkwsHLonZta7fgGgtyd6Mks9ANseEGf",
  "key21": "5eNgn1HqhKKi4d1MEHS3oG4SNfNSDuhi1Qo5tdQDzDC9fXt79YaFLTX4jvJ7L5F2zuhrvdjjNgfH8QqsjmQKuCHc",
  "key22": "5bHGS7SVQe9ewjdP3ddDfyqZsrJdKuGbXc3EZeayABcFnrQLRiQV5ccGEQ5Cd1NrDjaJnz6ZxtUJAkFzLt9yqfS6",
  "key23": "4fUpkfGf9SMvMsnmRNvCeS88fRuXekLwgjcyA8AB7XkmuT96HmSVA9RvhuKYcoZ1zdz7Pavx7gLWFafKSfa7RUeC",
  "key24": "uVk7gdLfMMDf1QZzbqbMj5z5ftinDGX2ej4eRuzisjjvYChNDxJ5eHkijk87Xs2PD9dBJgv7syN7RG2Lby7vLzV",
  "key25": "4f4Sa7xZbK5dEpCnoofwbJ9Ys3xi5bZrpeoL2ppePoWHUsuB7AdbkgiY4CQeABB8GtyN4Wmj2HwndLQgXhndWymN",
  "key26": "3d5vjukSzgygEas14vHUPSFTG2B5ZsVJQzyyeuZZKqzAyCaqQWLqv1Hpff5XkZMm5rFhrT2Ge8YBm87LCz4iCt2s",
  "key27": "EkzsMEeo7ENsEhXeBmq2DFzc26wa65oYv5y2zkaBwJrnXVTU3e5Nfngt7vTcH2jQnuzvi5JuZwEpfFmGMaH8Gur",
  "key28": "5pb4jeLPXFmFupXh2Zu8nHF1ct4UR61o3sE43j7rAkdvQGszeKWkAtvxheqQJzYWa2xouSh7opUNF3FfBpTuLaY9",
  "key29": "4g9BdFcDjZ9stbRofnBkxBbqu6ibPLqqaf5E4CRbWnT8SzeaoYtBXjaGiG5Z9HzB6ZkYGENG3MepLyAiNANb64wK",
  "key30": "4A1yhrDKEXiEtd9oxSjHPYgT3AxScAhtAceqiPHJvXkLi3fh8Am3VRdR2QYbhs9oqzgpo2dCE3JAjmgAEbLd9atd",
  "key31": "iB3dvMXKb4AeWaHtCQUVuNjUUjn9181Tu3hjo3ksoiewK9xHChsgh9gv6MH7Tpf3Q8rh1Bd7Q46pNxxHKY2nfnD",
  "key32": "hp6L6hkcQRXT3D8BmF1k99NBkdkN8i9zk7QtYpxbHamXKh5eKL4MYdeZCsPdmFSvHScx8ndXB8XtuQPBnhsZrQH",
  "key33": "dJpXGNByMQBFxvYYSGhqpn6thYkYoAzinhSmHP4fKULhp4EKKz6qgAXBW7DpshULLnvHXRmD1vczRbWHg3gTnEY",
  "key34": "2wsidZRCGmePaDE6QWBd9YsaEbyyJaMnduw6a7eqb8smAHa8cZi4EkNiHbQk74v9dzBb8xP9QUi4hrk7mwT3W3Eg"
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
