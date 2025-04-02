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
    "BRuXuTCxpPtnL3muvN8EAUXUWgRF8MJiPHUcF6LQ6kp4gZzfWCXD9HF1iGXLbvZ42DQYQ9MsN2x1RzccwkrxxC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yETeLkWNrXZVEpAToe1MN4XieMYLe4xUWdTgpT9R8KTsUJ8tdVx2CPMHSUGsBiFhmiHZWrzRoj8vZptu5d5QQb",
  "key1": "4Y3r29RBdUsQKVdhVjnwfUaZWwcRwMvFd4VcQsKCo9qo49CtZQcbqznfDVGGFf1yviF83ryHRMuXkHQYhmzXYFRn",
  "key2": "3oC7QqLS9VuGCx7rgARNgsfkjkSPWLMoh1K95hEXWNntcoEABGUc3BhfW79THbkPJhiGLaaf6SZe8VLmbAv5AGk2",
  "key3": "5UusfAXNFzFJPq17os4Bj4fd1BukXyrfPNiWcfCCE2cGuepJTyccThE8pDsVTYjz7RCh2CsQdnpNhheTBurGfai",
  "key4": "5ynqZamqkdryoRKBoTcdNQyVNk9iGHtDzHeTATYXEhPqv2r6Ecycs91QSQsHwSYYzEWL5eJqyGsX6gpzeTdeLJf",
  "key5": "P9YFMGZdaYoeS4ke7bdPgPxq3Mj4e9LXD3bGNzdZRszsBuyomo9RLJ1eXvmpvrTjtok5u9fRLAYdvn3xb2VY3kA",
  "key6": "3J1E49A2cf1Z4BTfAHe3hkcjHiFzURoZUvmmEeUwF56pj7uP4ShTikoAwFLpeqPWfoeYp49i66NZLSfsF6dN2Q2J",
  "key7": "2isaTpqYmsxspwU9zdKUinhkyxzJgQxzNTrLqSFa2cyNCvrHX5nfbXBiUhbE7X7xJnSANa3jaKNSaa3beSgkmazW",
  "key8": "48TVr9wpMjvXE542BMZJycGJatzD9ZZkCFqfHi7b8WCqSD2mDdsPCjMEkF1WRn8g2thggDSfH76TgNwyPujFQ4wg",
  "key9": "hwK46LhGXyGy1Gyw84YQ7vAegxehceQBh5DjzUXMVzHkpm3vJThqAUqCChqCbdvPU3PYbnJtFq6nut9iB9rV5Uv",
  "key10": "61c64hMYzjVLcY4yajgemSUz23ZNcKgcyRDn224m3vkpTXqWgD1VoppaB2TwK2Mb6BpQniJ9Y2cNzvePEUk2n78K",
  "key11": "SkqPVQ6LZpABhzizuzo2JMgDgFF9e76cEBW5cu4kYrDgqUb9gL8zUoVG1aEfnqH6jnbRuu9zKrgtujMVVyDF3WP",
  "key12": "3Pe9hZxWPkznSifDLp5NqVCcsHU5Aus8Y87iCG649kTr4eUzezxUKH95jsv6bBw5a1DyWfyAAgALSBeG34mb4p76",
  "key13": "48pQMtTCqWV2Czf6GgizPf3h2NnzenUbCpFFNhsEWNpuMtGdExcMMre2DioeCxNKdXtAeECk1BVF64xhd3or8tcV",
  "key14": "5xA91Jx72RBR1m9ywPvFZRfyaCQPpdTfana6UuqDsf6dJKK1aFkWUwv8WQcxn9X2n6zncMAnntCLWMeRrLLMmSSr",
  "key15": "53qXa86wpcRtquzJ77tftpEKPrF2KXiwBZykZ68e9veg1zUtK4QYt4b8pdw87DDquXSoxMgJTg2YthwvMev1PmKj",
  "key16": "4gsomaJx7GcMWx1W5paRqhouw7Lv2NodeFk2GGP56AKvhNveghNoa3Ld9QCkQ1LgUAZSPsghQVKowkLF7X1oBhto",
  "key17": "24eRVVSif4iLC23DR7gxJZY8AhQdrzBBhNTBYe719Afd7ajpbvg1FVrrtXoXCovC93hzkpnb66Y5gwo253U3Txve",
  "key18": "2hSvU6g8QHGoun5eZcm6UUte6KH1noEJdDmEotDHn7uGjmzaM3nmpnDYJWp51LyZZELpstMYQQYnwQ6nK8XawEvD",
  "key19": "3bH59q9U3PjuMdbLdv7EpHfgrTxX35Je3ufZGVMBu9vqonbs9sLhhcSuRb2aEi4vNFsXj8FsH7d31YuVVUDV6FwQ",
  "key20": "5JHcgWzBnDKRJTzscPtF5wQCDcMYTr76W8ZnJEwPSi9Ybs2KggC4TWQ7iroNJombrTWohfTiZuKL2b22r8fJcBJk",
  "key21": "5snyvXWaNMxp6XZRSb9bHEsX6g6sbyfLVDkt1YRs5o11sbX8Jwp9j8fAWYwzSRwyWJjuzFphHyGjkEkeQfd1X7VP",
  "key22": "5nra1G1HxsiHEnTKJE63Jh8e2JKR67bPr4qZxZ4Yy7FEoZrxtmzYuGj5sEpB5SNxnyMBLccBm65rpAFRJ5C9sZvz",
  "key23": "3jUmGXXnixCrFMK8r3mBDs3d1YPRkKn4P8ZHxP45zQwPEM1jVUF254tjkbSuVmTAphtjFKDCheKRg78ppWj6L4Wo",
  "key24": "rZUe2ah2nooZv1S24o9a4mRujhGKBrby4sk2tTixe8E9sAuo9q7wMAep56ataeymaPtu9CkoKZYKGRnCwYra73Z",
  "key25": "5NkkbYaZpk97Eovuyavwy4s4Vmzq4embwqPwHTfACU1v39t4CbJQrgxUPHHoX5rxHeSt2KoeYSK9gstt98dHLU6h",
  "key26": "P6TTuJQpiiwNAeuTZaNwcjbELLQZQVotAh7E6vm6AYRwbajSYMz7XvLDDBJhhuLfguXV2TLbDwyW6qybYWiEqWk",
  "key27": "392b3UTAAWDFTzh87L3YwxUpGHN1QTjjDThAKEaPqjf5EXAA7LVCVvs61NArZwKeUzreoRStj1Qzp36SSGrfach9",
  "key28": "2YvvSCXWW5daEMfHkKkRBaDpPhR7SgU2soqCxMaHxYHN82ozkJFMPXEb1cwwivWaZp4R4rzKk2tEgePx8KtGHZJQ",
  "key29": "3GpYc8CNYRS3uckDXAH5dwEKc8YYVbJ4dMWXtHgofMAcsqGd24LtxhzBZPi3ZgSCXw3rKxN1tCZfquMh94yDLqwr",
  "key30": "4RGN4epuygAsuEhA4EsEvqUoMksrWueRYhxqNRyfUWa9ayRtsmzdN7EjrUtEYy5MgEptcoTGdbTB7DWLpcwVaH1r",
  "key31": "4N7VTM9qtKkuVyfd2dmqNRvMKDD3dZwjs8TJxKq6HomTV3naiX9B5PKVzC6E7K9QY8riYU2j3rkmAMBHFYwtw5nS",
  "key32": "62QUpjPUfBJa3V2nHD647v2WczbGfiJ3PvQ24WcK8Jbr1zBiRLodxzMn4rS7qAJSKF1WSVfVCZrvp6LL7R7naRt2",
  "key33": "52KDG5YGSKJSaXxKwK19d8uJUxN8Qj6tRfMb42PGy4uhnMfHy7WzvqE3GAM4em1ruy49GxeenRuUs9pHuNoZDTj8"
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
