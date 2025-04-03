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
    "62qE5ENMRxxDk9bxPUbZHygZtcqApdhfD2HEXNc7PRAs7K4HtSeYFqFKhdFvSJUBGM853pNevvrpV7HGxKmCimqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Phgnfjh1BinLPyFGBd5exnKKDCuH6AaBL5C77qV18f2X37bxKyaZz3Qr6EAsNMTSg5pDGAR3Ai6qFyC3VqVKbSP",
  "key1": "3ErP6TGwsm5sRasgwatT2aNRmmJbHtQaxET5D7z3RmTMZdo5QdzAnSvoohWSfnDaUJCmSa2MXdssdcmhzTN49LyH",
  "key2": "xy9WprB39Lz5Rxz6iLgh26Q22qiBJGAPLL5nBQ8aqHpfBuc2S4ctmPTJKNqHmJv4ZTD1YTUrqxsZzJyd8AgqSXn",
  "key3": "2rMk9ydbJZFM6pkYUTjiU7p2jWhENBAw9nGHJewyKp6xpsenorUCiKWYuLurX3VqN6jEz8DnEEGeETfmMjKkhmM",
  "key4": "GibBCa1qLtDxWYYR3G5aYnUQrhjktUUBxc3jMifGk3zmZdku9MUJ96ftmMeiTLxvW8pK7RNSqnws4gyi7Mo8gBK",
  "key5": "TmeZV3rbvAFkGtanLEMSoZJ1tjiat2FKoaKv9feHAEtkvUgA9NgCVdX83EYXe3W5rMstcQaTVmKKddPEwgqTcim",
  "key6": "5Fkuz2Z9p6HFrBryZtUYwemBrhVqFJWzzgeFLyKkC4Ndp9XgmGwecR3WSHXkKkBEf9CerPUouMBYgD5zyMM5K5mt",
  "key7": "yDum6BqPPHKHzHhkK6zPNTtqQXZfhj8mvihMj8wNSj8qFB7XnWa3qQWXnm7YzNDTjrDAAUe8m6h4NQNFB2CLr95",
  "key8": "23rDV8zd8G2h1EUu6aBFrkQyzDxyNXg3uUa5Nwdj6E4LLifMrNa3L5Fq7vSsDvDA4qr5reaXqncmxodq3Y4Zp2uK",
  "key9": "33phWuCeoorCk3L7VUvfduQ519mGkbxNBmJgKu2nr9vPsv1U5LTAQaQaFu3DQYoUjU6UccBPSKtm6omGe1vghXHD",
  "key10": "3Y7jDrUVWiZVwwdzBKNXtC2g4vhZBcp3PHBvK5dzwfZzPVSw1My6YUHVWiaKaLgfVAjrvCqrxCEyGBYHfg2nKEFP",
  "key11": "32seFdYubRF6ojQHn4sqCdj9Dy5NTcewAH536t6KRp3hS2NT1njNjS97tVVwDFdF9AFvDzmnnk8nA8nL2WQwUJhq",
  "key12": "2n6ZkR8dq7YvoAUSYjELiwkhb4X9AxWnUNirHAMSF4XBwrT2ngXS1mVRJyojvXDSu1mtrK5zb3zZCJfP4h1TkFTR",
  "key13": "3uFcSxh3JH4FzYQEfHuYGivvVtSw82qbf3RJVz6xWVVyjQRTaUUm21Wd8wyw3YffUhpqevyhMn242ccRnD17ouse",
  "key14": "3jZjnvk4kQwnDMFwtatbi3FsxGsVmCibCpe2nJh2YkdvCmFF2QJVR7SkY3mRJshoptPDmwxPEKwhZmdjbtpUJHzZ",
  "key15": "2DMtNNeiANEQsZYJdTnTLLq8MN7yfWJgoevQxEKCE4SNnr14JCCkoxsBfGxfRE18MDfiMo9qFWTkbLacQXize5Ng",
  "key16": "52GetFDoMqjv4cYKB6nxiVkL4E5RyzLFw7inksCmGkmqpdntCeb4oHRvtJz4tDP4sXkLGfW4TsFc8T4MvDRJme6U",
  "key17": "5NiargsJ2nmtjEVLVSErGULEa4EDkdzyokFM68eK4XJesyhSQB75bgfezoL2vUeisMwHW9UBmn6ioSTUX8xpBW5k",
  "key18": "4nJNji2szSrSQYchZmXugtZgWNq3sqZkYrE5k7caqJyMXwz2SfjnY3jJhSrjUWWuqN8VyG8zx2Xm39Yxk22kWqDP",
  "key19": "33XxZJ8kYC3v7hscCN9FJ5HmbwaKaUom2votzeH96hRirzS7jNf2VNPHEkZcZvjgGCeVufQLAFFDaA6r2tn1veZX",
  "key20": "3FrLsg3ru91eazcLZSaRsyBicQF7cRTTFRTGvZ6gqZ5XkL4iJuJ4J2aLFG7fC4uERgm41NpnK4CAJkEDTzknHbd2",
  "key21": "zP37yvriyPBXGDMT7fb9GFh3LkMi3VDtPSN6cnZ7xScCUtxpjk3CxoDNEdhDtMzD9M6ZTcJSnoVsgJjVKbugM2n",
  "key22": "3c5wG57PLEtRyKRaZHYmx6bvZxMSisQcZPXnbqcAQgeitqjwCms9FRmLbF1NmkaQTDMueEyKa2xhff2d1oHB7iif",
  "key23": "26wFvmp1tWy9AVXHAs9G6HzhPDAiAFPVe6W9yCiXNbByhXCYjemsq7rB2wPjXXTFjvEpuJUgPwXdT4whMys4f4jt",
  "key24": "5RCfRjej37cmb4kSAQLcmF2Py7865yKJMkhxaGnANAtzMTKtj8h5cBR2jNAH1breMn5VpkW2qX5wjrfzqzw3FZ9o",
  "key25": "5g4B3K28eeYHfEHcRhasYMnu8vE733h8J5HL3dks83LGLJZxCFcq8bC5grN5i9u5sAcFcovcE1C78sR4pnXpSPPx",
  "key26": "3c94csr2E3sR2UjpuWDoWS8wPviKymACo1qAy66xX85JNSoeA1UJYiGvNUVxSdww6MNyeSsfCEJ8ejt9gFoPamGm",
  "key27": "Vq8pspzzu73yw31zZ9CZdCawEYLUGVbH5Z3A7tjNiVDMuW3cCEAKWHwiu8mZdCF6WGbNze26JdXUBBQoseZG9GZ",
  "key28": "3kuzMAP6pD9uM4zcBiTSxqcP1KWzHaaijEaKpctrCQtZxo5jRdbQUBwXLcuNXKjky7TjoXhssMCmdS2hipcsnAs",
  "key29": "5UUYEVGN8NEgqC6e4zcPr8SujkZW4HzKWJPEuPqynoHiD1Ha2MLwXht6ct8Brk6PvUVbHMe3GE5BqLUkE37wz7kX"
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
