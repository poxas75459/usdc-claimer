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
    "PSFT88QgEbqcBieSUs3p326i8EABZcVbz6GkhX99QeJGG7w5nVbixJA4b7dArRcBLLi4kM2mZmSe2XKGeMqzan3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52HRxSieRzxSxT88td594SfYfSW2jpRvdmLC3UxfE1V3Le1eBjcws2yVcXvUWmMcMb6a3MZW1ZDyQaorxi9KqkZ8",
  "key1": "2q7Nz9xdXSdxR5QKPQtSLVUGaxxkVby1CHEuSDt947tzJCmPYbWaVd6GcZWwzUCqNDEuNhoK7soA3w2ubjHSyU8J",
  "key2": "4B6atpp4tpSmSk8ygFT1zhZkUre5f99einLYX56L5p7WfQQ8RC2CgfB5UTXGcYaXRnegP1bmu1LK6owN39od51V3",
  "key3": "2aJaJHTFGzYp6TXVPX4nc32BdyoQbwpBfRMVEkBUtrYpYQkZNjQHPvEwNnVLCpZwWArYev65E7vKyhc6KW2dtPeJ",
  "key4": "2wreNmbXHTfy3r3Gsx85rv5di7ysWV1Y2dkyPSfe9RcV8xwWwYatbdierqW6be7tukV7aNWjhdYGYSkmuqGcDGy5",
  "key5": "4Qjw8AsGB9zzJYvvU1n1FmyVYUSTL4ZFsR9g6b1e92uNNGayDYXdApZudwm2kABGD5HCjeGkNw3HrpEFvnapdxoT",
  "key6": "55UEjk1eF1vu4mFi8ED2aztwFVmENqBJj9GhYDMi4zMF6M7gVm5KXgk6W9dmJ57ZTXnK1BKH8YQRVwqtwbYnV1An",
  "key7": "45bUf3xhH5otRtC9bGDnnFG7gefx1GCotopfSy8K4c5T5eexBXY277J71uUzqRnjE85r3ZKKVudvYH6MgFNd4eov",
  "key8": "46jLNYp9y3uzXHd7b2cRQugBFtZtbP1vWDafXMV4cUfLEUryiMFDic8URcTtLonE1N7fXHoaSGncvZtoWaZVeTXL",
  "key9": "4ZVDTbtQfW5ySp8dqS9QNd7v9uoxkySX7v12JmTcK742YqTdt3AsKTM6xPCtdjgvMZTnzPccaZGZgaMQFHTPLgHg",
  "key10": "f4unAUvu9Hg7B7LcnWALEBPnHYVnPy2MgGpv2ATBoHTThFjadkasZf3YvuUUBWkfgpH7z4UzbDXxCBbuGQuLxGw",
  "key11": "4CVLz6Bo18ZGPnBC7NKW6m6YpqH4MiGsypAzhPZLyq2anMpTSVMnMLbatQkV88dAEBP54c6atuaajYhHT2Pvnyps",
  "key12": "3vXgaj78reUnhjhByqdt7iJuQJJ72iiUUmYyBtGuxPZkmNyoWx117kKLYVeNpxNGxSwa7wF6GkDpujgtES5h5W8F",
  "key13": "65Y7t1GCgq4t1fMSKjb1ijAzP1KMwmaoEz5aKFwzH6YUs2UmbVCbeB9FK6qSgKRcm86DM2zqFhwed7XQApaJrgER",
  "key14": "5Px9nEzYdn37LW54UxNNnv1Mfpe12g5JgZU85yaAA7z1yX6pTZEoQQsTH3KaTcuviFmodvMuiVeQDcatWwWQdmRD",
  "key15": "3SRGCungTrToSApdNEgAyGXWcagpknD24Es7B7viSRavw9yefHousB5FHbC6oYPFczuH58WbktiGFBcLPVFA4syo",
  "key16": "sdyu4nQPiaVUssfmgRPWWGtLACMjRDsdTicRzB24yj7dkjgCYaMrUqHAfSEjrUXtk3dzynfeqDdQTG78MwnCbd3",
  "key17": "5h9bzbQZfLwGQJeGjeQFBWUzHCzPZYBJdfDAZv5buQLLQd6AzwLWCdrmngfZJ678moWXgiQKHqNeWY2AfmKMZQ3c",
  "key18": "4aGYzEBuBfrsGCXyZjQVCp576n2YqxQKVqv4kzkDs6RKH7q9tqT8CDamkeLjnRwdkaNwLcCgD8T1bXVTtWrSkYPG",
  "key19": "5hHwarw27VatGNHbNSLmKrCx5cADXB5nzcsyjP84bqLvedk9Zsrr4uusjTq9dteVNPJomhRs4N2vWUBgVYfQ8FL",
  "key20": "3eRwDEH1ZKTbPtvaBfKCjWz6czchfaRtX3XPVovjf9FAbLk9bJimNoibuYMfZ9xraKkSUeKnRYdpnizxdtWoxFmp",
  "key21": "29WEuR6uZsyBJWE1dbaH9yocvVzkHETsQW6ZUov7mgfUoordqfBeEUcFxsNn7YGjiAQumKhr852uWhry9bvvGjeR",
  "key22": "3evuw3hVGrZAGjqrcqqhZfYr5p4nzcedfjpKKY4fYNupw8BwCHHd2ckoLpDd8jREF2s66ckWrVmh2YoZiauBMqVS",
  "key23": "24P85ThLesunEeowZBh5izT2AVUfeh81SRchLijHVjs1HpNgzm1iZ8GTfE7GiSRNGgrY6YSzAA2Lo49KBPbgy5Fq",
  "key24": "3gfM5MGph6VZApx81hzuj1w2VKScJDvNVGkULPzGo2sMHjcvnSBroyEuizaSBTu521obsHmpNrYhAcfPxRFW9q9z",
  "key25": "5gAsEN1vtxRrRvcAUX3A7QUEDTBQHwBP6wMKtpvFXKzQUbvJ8BkTWPs6Nw6o8Lc2rSDizcHPHRrW8JYAc6eBjgvc",
  "key26": "L79wHcsa8XwCH6XaN4xnHgNonY4FoKhFAFo2KNifdBL3cKsPAoQTw9eaiz8a4xaHyNxFiVaq1ErbHbZZyszukzx",
  "key27": "48hbwBq4gcktdBHBzndab95QcJpc1tLvXshGP95n4qiyQ4h3QdzctGkozUWYqCzMacQJMZoKtFV87SzvgMsuNmsn",
  "key28": "5eQgaobHDDTEv94mPRjTSVE5n8tpo6V8q1UWGoxqSsFfBDWDoZezNepYqNpwLPcUG8BWJQcCAcZaietgQWzykGeJ",
  "key29": "4merfkyXW2QTwqLU2pczPC6FHryQp5Q9pv73NjWCaMituEovyBzVNUWwsCPa7H2KxbdKAK1D5G6nzM4JmcbdN4g4",
  "key30": "2BL23iFJKLQuNHkhXgT1QWzkSx5cJSz7hHvckmR5AFJt1wmQChXkruPeJ7pyWTtxzpx1PnCwCreQAHZaRXP4CPKx",
  "key31": "AVy9vXVjXPBbHoi2yXx9iFd2DZ25c5ot2HYs8eHdgnR8o4AzCE5a7CdM5fP3bQmhcsAWC1uD31NegHMAbSd6tR1",
  "key32": "CrXBbQMRc52KpCEw3WbVjcQzdx3eHDfbyogmssbREmCPaF3retxWZXG8M1LX1fH2avrt8g1tzy4G2mEhnurjBVo"
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
