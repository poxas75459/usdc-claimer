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
    "53C5H7NLs7tKA1QDRsNjeiaX4SS2XyBZyAQP7NsMqE8dPz3gu34K4e5JFU7hLkGkRJ5t32FjBfdoKGtUKvac9RKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QrTU4NuKcAg8RStBvkNhRRq8ABc25k5aSvz7aGWA1eeCkwZFL4ptbLoEKW5e8ZbcMXjzMVb6yDf55mr19JLpG4",
  "key1": "5Mtwcrgq8AjTs7C3dwJfgDMTcd6Jmr6dzFgz1kkckiLXF6yo3TdwG9U2f63ewjhCqfjHgvBfUyT7JLXcZH1kT9ZN",
  "key2": "5wLgPn9MJwALGBA2AN41UqjanZifGRyumbgpBnkVjYYVDj3unFgK2AQDVucmRUDFA964W53byFVoBVeWmwSXbRKT",
  "key3": "ZiESh3nSLgKZmTJtP188uX4fE3EAPY98KY2uYJUiKoZvKhxeEJgmzrQNf9pt62LsaPFdGMc7zGpA9tMs5hdRa6h",
  "key4": "52Xx9ba1Vd1ohiXXXgNaoThyXBFQisN1yyJDv7jzxN9M2A2K92KEy1TjEzv5msAcmuUghwDUiydZcpjhdATr6RDA",
  "key5": "5WrVH9SXfv8sfyDog9r9iGGDLFmyS49CdhLbtLAT1Lqs3Ffpmt6vMtocwYu8VMXFWyVRbfUDxenT1wjwFKXmsjoR",
  "key6": "ACWhtMoM578qQT59s1NwTjTB7V7XudngMwBy9kK7qrS2jY5sMGt84iwNUwzyA7Tn5FHVRg9pWoeJpf1To9vgxLp",
  "key7": "NQdENADjoDmTc5GVukRbNiFTpnWzTxYTSB2ntv9EsZqpf7h9mKU9spXKtgCGRN7NaiwWAoXWuENfuuBvRb5Ycew",
  "key8": "zCWgeT77KRiaYvbkudz4TG5iXU3U3dRdHtxHVV4EGgmwqnd3P3dknAETY9fGvjMpoEv7bVRxMJ4RzHTQUSWZReH",
  "key9": "45jZm6vpE3yY1UFp3isTSCN1x4AewM2M3usGmTybPLRNBm8wJd3wE8TV3Vmisb2uaspic19iNsT68konqpRLEa9C",
  "key10": "29b1Bwt1GpyGoVGYpNstseGEknLnhXt96Stf28jvgPQB2jbyCW6ZTPYtXhFR8p39vqnLM1GSH26ByHpz6sNQpc5S",
  "key11": "2bDAG5d34gh4VxARvEC9hyJXveLT6a4p2doK9ZCQyUCfDvgymY6CnkUCD4aKLZXMHo1wASaxRxFF26Ex4o4SJ6p",
  "key12": "5wShkpGfb76LUtBmhaksLxSYQasi63f1Ykq96axpJZ9oNL2mirSehJ9UiULHVKhRaK7QWNJp1TDPCWfrnwspZTJH",
  "key13": "2wBUdcbVoWos9vtYfBJeYPFB9QyKWYHkZuA5UD96YHUawbEGDXkiP6P7EY3sdnPzdZWKZGAHWTvTAFwUz7P1a6Fs",
  "key14": "5FhRG5rHYUR4c4BDrgxXVZzRQRRzLYq5aM4oDo14BVVruor6Sjy9AodM6ygvx2vud9juaHbaLMWnTyGgQ7iw5HCt",
  "key15": "226Wafd7CKq986kxmvRyLHbNrgs8fJaLSEJ1Cvpb8j9euAbs9A1uigC86psWK5g4FdZbY7X8g6pjuuhJLko1tJS3",
  "key16": "5zF5j6kbPdTwhUdubLEgRxWEVoWHWCJvrBKRoYiv2mbH7QQ1p8n7LpK7D9ZNMyoxbLSCJRSXf5hTRJiyaz6fBCqX",
  "key17": "42n2mjQVhquLgatzgZquJvF2YA1C9zC4Lgc7Ktmz7f59h8Y2VzGqyhWNov53acjQkcmUuNFhWbmyg6wY1b3hG8sw",
  "key18": "4akxqs3abGzWZ3wvd78nhmfxAcwcwqJmuwmWbxLLfrqaHRfUAWCd2PkHoQuaSCd8zTzMdptVQsdLQSzEyC8uq8rt",
  "key19": "3KouFKuoQjTk5FMUjNh1u8KepNjrABdAJ28QL8LbLXXCTtt1XY4sdtPKKm16VzQPUyJL4Emt41LgTDPgEsiRWku2",
  "key20": "YUTxHMQto1RDB6sXimvCD11fmwj6iRTS447xZtBtyVSvq6Pq2Fwtwyhc5jjBaZjZtyvV6XFgVySU85RS2PmZGQt",
  "key21": "58RjCtQwRgGd182Yx173k1e6EMUSg9W1cEW4s8DyWruNw1StVgsMJfkS4YAEVrMM1NSMunimKfQxor8kSuYH6N6h",
  "key22": "2basyvYg4hn9DU5YyYaguxD7Ap3sQkE6gXXwNB1MFPmUHjMUBfNKESSqpNXj4as9ov3iixpM3G6dfA5QHKR12yfh",
  "key23": "3vRVLwkD8CFXbhZvBFJfdHhYXrp8aMuk7jPDbbiysqyQtKxMezxPzpi4oGNPgsRvDmuMw2DLoBcCidQ7v6wHdFwS",
  "key24": "2DRVVRETR89ZCS3CQgBExN9cQ4BK9QUqhUfxwQjr9NBz5s55u2mtwxFYbNk8a3uAGUuP3Hb65iLjgy1JDsmJs4x3",
  "key25": "4nob2mvoHvFxJM5XA5YXrHiVAwJy9jcgSqqrHvdaofpT6wxw1o5zYy46ETmQYv9yqHP4rvstVXaWDv1HV9x8RMYJ",
  "key26": "551dpeuL9NKyNsWVsTgaW7uMGtbRd2yKRNwYH927rWKsLfcZjCBjdvSBZkk32v2dMF6hojkgfxhN8ut39Hbyaqe5",
  "key27": "uam31fwCro2XiAhJXgEM3SyKqwp8UokNpcgpTMTPuo7Fa8T52ENrsMzvUnXVorui4CpQx7PoPqTte5JN4oasZfo",
  "key28": "ZTDgozn5L8ZEhG4zy5HD53mNhjtT8YBp3R5agdcsFvwpXtQinHDhs8tMTFaCLqeWgLbWRviniqJKYztUztH6YYq",
  "key29": "2RvZqCGyiWYZ7g8sktqsFjW3rETyX3vM4WZSkNjYZJCHe8UxSTbhVZZ8unLPJc2ooRhrQtCd7tXMytmXaZEwfUta"
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
