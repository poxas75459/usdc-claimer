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
    "3GHS6LU2mREPQTGSyfcpRzMZSX7rCFittVC4BFhN1isVSdveMy4LXgiiNh2JRQYqKt3MWu584FgyzMxkY9KAK7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMnvnFKNkXtwLEgkYV3jC7L3n3G5mxdNpczXV4z4jDB9GDPndbjgpXPbUDdmeHPLrh42sd2eHjDb3EC79CQ91FY",
  "key1": "55FiSEo1h9kV9oTXdfJo8o1xBnZEfWsrV8Vu9HHk2B5XX4MbUAKxkfg8w6iTi166crG71xtxwymhJcQwogYXREvn",
  "key2": "2NmkTkoqXPHEmG6LUiMrevr7TF73xJHXDzYVbiLGoGeaLxJ7zFUvKYACKnACrG69NmKsAMyRXvZyWQuzu2gyjwyt",
  "key3": "3yNAT6mtq6vtFHtPb4Vui3swkGEwEMNVzSvyzTNGkb3QG9bxGBSiotpAjsm4hxtL1a1YVXtcEg1dZfGTwK5wbfnZ",
  "key4": "2wtqUbiAoEmRaYNX9rPbUKfkKgZSTLXetq3DDRDvLPLejdzmGfgy1aucctrwvsYBRFWK1HUF9GL842hhsXbGgs1P",
  "key5": "33UYSazryj9M6kkgaHC87rxgBoEkqMc2sp4wHMZxgyopnaSHf794tuoxWsE5CQc5fCTmb8dxpyiGWMveFHWYRJk8",
  "key6": "5QZ7KvHvaU2rsBjDEmbebu7Hh74vca7CdUHsJXVMaooFEjaZPXpb2RynQohVYfG7rwusrWc4KDVF2ABo7Ynb4xTA",
  "key7": "4UBi5aqqXDv5H9X7cWEAkb97V4R8mvPZPUnU2YkyYNp7mAyWpngzVPxnD3NABt6k5ZrbU77mNHR1u5pJNpU7SPjP",
  "key8": "4QJREwCqr5LqhvXh3FUnG2YH9cheGqgnKwTGFGRPFpsup7njVQzhiWZLA73Vp8tLNkC2hBKCCtJmoVq7CxvnvVoX",
  "key9": "27txZwWzjihAjNYr1uFqSz5Xvhko9aAMMKDSRfdtmcYKYNCfFznuCVGJ3rpidMjkK99dmUSvdDgBM1BGRNmQ7wD9",
  "key10": "4dXxmNevL8ptTv5eWNca3riWww4FfcgdCAU22Lqft435jmg12u2Xezwqo56HLSJMiybfuLFKwYdJnR6jH8d2HFi9",
  "key11": "3teZmezf5z7zbmaHxcTGT7AKEyUuztPf7UUHTao7UxzvjjRJP8ua2MN8NMojjj36AePTexS7XevC76BvGgpyMmnH",
  "key12": "3e8wn1cJaPDGApeVnyvTgsX6FogyUzEAi8SY8gJzYBPodqi86rso6VbKiZ8A32eJxe4kp47EdohgHPKAeqVsK6pa",
  "key13": "adbhLPfGF8NUB19tpRzQ7yeGR9rcsRpu7n1gaMZruucJYzxmvwHAvk67Vxothizr4ieVc1C9wp1rcqTUh7x74mb",
  "key14": "5hBt6g3Pvg5zZEf2winZTDVM2vATi6Kp5pP4pkuXCXYsQmYKyUkqWwMNgvqhtFATNGMn4i3vVxcf6bVTLXQsXnts",
  "key15": "hBjdh1KCNoBK69WfhsAPNnvpAxgRFib6CdWhBMXQis9hkcNC3BwxWzXhxe5p1fawwGQBsFgPgTXDd2g89tA1u8t",
  "key16": "xFTWeVnDzvsxowh95ZWJvUQT5oNpTFJemhVeqZx39BN89yt7dddK1oVGWEDphpZhkxNu4G1y91Ey86pB2XjNLQv",
  "key17": "A8yjRhSxuAKfzgKY7SxPoydYZWWueiykZMe5RsjKJob4tjKTms1QMj3FQvNFbyC8WJpkdjd7Km7wpBSRzLY4jbb",
  "key18": "5eu355AWEXBJpzXfHX4jcuavGfaLF2jeJbkxAneVndZmMDf3cQMEXChRdrZHcNnZAMRn8LXKAuJfyewRQEumJKqa",
  "key19": "2vnSY6erXVnRVzqX2Z6qwdiDmr1t8BinSr8tyA3Br6ozTxFZYCfcbpEreLQmhpfmmUZMw6QVZW7Eh9vMf8rYK9bC",
  "key20": "66iUFN5tK93yK9JaePsJHjGKbamAgyZtTm854kU3m4puuUFftY6nDLfzD5Xtw5iU2cB7GDGmSextP3goGTx4DPS9",
  "key21": "2RMRueCAc3zYh6NGELQxiqyPiUkWa37WPcxUSTZ3acE32YLjFGaMAjBzHjo9Nk9gU6VhqVy37B8oibnos8odx7zn",
  "key22": "EPx98JPT1nrMivmgphVsJUrMeGkFZoSwB7GshDBKHWM2FDc59xd7MaubXpJCaaKF45VjDToZuZaXCi2LLMNz4UK",
  "key23": "2yS58L8j6SoUPypT9csGukJXBxCwSF1yNymTUKr6qkfE2Cjc7JHyKkZJxwft325HHJrzsBoUuSQCaLZid74AJgWe",
  "key24": "Mb2iRt28mTSebCrKQoN1aJEk6VRG594UYxNLV7iLuTumrAPC4bADbHfm4DQL9Th9KCG5rCUHA17r6uYmbd56Z4n",
  "key25": "4sZdfUbMRbdV2hNtN52oe7iz2xchNmD7BdYrFRgfx1piTMYDTawjaLYJAKSUxkToqiNuGhjDBxN9q8hwVdUMqvHF",
  "key26": "3kpbag9sTXFBqz11ktxSW6HWRB2XqPZtubuh4s25RAC6zAeC3NdFkJtrxgKnieZBTwg3VMRTNq9z1zcLWddce9Ci",
  "key27": "31DAisAnee29ahHm4Ewkwyw1jiSHEdV5NfTarfmQNUcLsXW7DTyxrvUVnSSfax5E7N28PzyzhH8vHcFoJ5ZiUbZN",
  "key28": "44UupvEb1ZwktkeQHY43CTcPKVHU921fFmn9TZLD5bnP9TLJQbrUwhHThy5xVbg2PeiAwV3cFbtSaimWyhq9pDXa",
  "key29": "2q9ZtQyZvp9P6ZWN2oxzMefoKWCrnbEwXX8H3gJvBpdJVPQG9a6BR6kh9FPEGnL1qjT3nr5H8cC9bELN139Z9e7J",
  "key30": "mcDYqogVFdvvWSoxdaaRKT7evxUYbDAHQZhJPayJAB6qUyRA7MZgFFKXDW8q6kgSe64iAbkGhB8MxJuAStXbMis",
  "key31": "37yD5SDjSPx6MhBkMNH2i2gaZiaFe64yG6cnF1FukF79qWohbtaavckf4YfukafdmYnoBsRhKzi9j5X4k2pRjxZJ",
  "key32": "2bD8wxai9iQxA3yt1fimrSmjkQiphaEqLUdD8EYxAaVfHSL4vnSfQWGs7HoM75nXVDXQsZzhu7DMskFBbZULhgmU",
  "key33": "4h56unHqMmt6m3tkYjGPdcvX9eXwdavxCt37C8kicKk1WroSmM5xi5ifJzAE65WqvrsBCjywVdCnvM2fLGBgD61T",
  "key34": "3Vohqp54gvoKdoTekN5qoQJkcBi4s3AcaSvRMcPPtuvRU2RbHRyeDbUk2yByfm7G3hEnmCJUoXLr3BQyavinhRmM",
  "key35": "4NSyLWa6aYMBUjYBSmXXrauX3dTBtsxEVRCtYxycgX7ueUbJNMXfh5wBkk4u9krZMCGHBPQKKLwHUGLe4zXXEhGe",
  "key36": "3KhCKgbsvytjhgjRDGTS4uTH3TYrvpzW2zu8VUZZEkqHJigtBrzTTCULJdqgwouWsjptbGjmex2884u3aJai2hfH",
  "key37": "3ciUPszZZQ5yPTXJvaAG2yfsNf9X74eGPsbuSM2o36ER2xrpNu7ZUxKD4rfYcTqpJLkfwMQf2KrKNqJKrH5X1okh",
  "key38": "4mmogLktXgdTDxgYheVwu3Tn2vWnfmHEQekUBNCeYx1KUBmhMPsZ7cH9JD3UfpPu7ShAqWaGYyFUNVDRmqVkJfCZ",
  "key39": "2yEd3HprDDuur65qhFGQUGp4vRHTeBpzkRdSJWKpMGNvfHF3Fjt5n4S5Qy4cew127SqhSeF7bMEijLdnFs4ZNDEu",
  "key40": "3y2qhTBR7QSZXorWRPaPTyvEvvyzMqpGjDBxhXTF5K589PccCRfokLoGyNhBLb9hbe7BamR5c8U5ViYZq8uizBTd"
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
