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
    "3EkyyDZVk38JnJubuJsF3MpuwBMMsRSpHYTWV1nwbUSTdA7UQ13wAjzCp6GaqN3XeTkVovYWouNenpmRKUHmLmbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Q8Xn4nJUdJJywkmWXJcBQZg1e6RhYzuyYmMZjZFF2ZfoeUkbkyphCMiqerWLrDp996Ziux2fVtAXidcp2Vspv8",
  "key1": "3nLa3tzVhnPa6n3ZvqqHU7Y5vLq3kcSj8LQgUZ2kfgRQieTTgmwXMjSqcpcSvNQp2ecrQBqzRjoYBC6FYbNwxJ3o",
  "key2": "25n4eQpEazD3q9WNv9ZPsvCPf4tGCaMsp5eo4HMDtbRsK9THM7EYchQHwo54fvPyR9M2t8sZ9YQtcdDqKEEU27xa",
  "key3": "2TGp4uTSetKz4Y4cK8EWDQNFaPHt6v7fhs7vMLxDVpfBtnpkufk1ajayVQf6yK3Uae1P191ZsqrDUysZiwyaLR2m",
  "key4": "5ePC3FH8aLr5K8ccFvBhtM6bBVKLfkjX91rtfz2Bi4SFJ8EcJKhj93xtfXBmQwRACiY1baNfrbptCHJo1kE82Bg3",
  "key5": "2UiHhBds8RSRwzX75UYWM7gtsmowLW8dDKC6GPPYNAZQECZG4d2JCJYoRx5tTAGoDAPgn9Nz6enJXTu2yVvKGnBF",
  "key6": "3akA8N5YwGnTtp2Kc1tryKyntQaJ1p8ASWjopeqN5sp19DsZbzfXkHYpvh8ov8X6pDFaVWh3Wbnv327akFoTMbLp",
  "key7": "5xWmkA7nE6hwh7jPToEqKgjcU21fkqUFhiDgVrvfZ5njxQoBU8uHDWj5NtnCos8wgkZJCcjyuUzx5c9Waz7SAGoM",
  "key8": "2iEmYfMVRjziLXfLTh9hoP7z8LWr5k3YjdMh1auWVUGPLwCrLj5n3AHBWRNoHERQMqgxGLJ1HVb4y47iurPuuCDB",
  "key9": "3ngvKuEc32E5ECcobkCRY48YwsEkKvfh7w5KMWn57pg7LbGP9Bxt1pcz3kB3PFzmpHdWGzdMd6p9VUTGhLHqsMBf",
  "key10": "21UXJyvVoQMvgvS9giXoqnUAwb5PU3QaNh3uFkmphw5R7z2zDQLqMvsvgBYqKnS7gHUiiKt3JM7RP3u52VSgSM9h",
  "key11": "4kWacCj4UsKbabSzHLU1iJLUm69XPPhY9y4hNPYx46LCx5VWYC2CGx25Pwpw4a3TCgkcfE2oiXmdPvA6QafGxdzP",
  "key12": "2H39HLcfqVciiZSX1JQsRgpZKKdaA1vCSZG6pW87BQQSgr4gJ4oaw4fTN9eGvtqg1e7QxQdjymZM9fba74HUWVcB",
  "key13": "3kBp3ML54HtH5yTTDdECDhYZsV4R49ktCjCJk95RiFVKsAbQ93ZmKgD6ToZNR5bQGKpofhiUDCFnLvy8ez8LH3id",
  "key14": "4FWpndk2B12DkSJBtFfMq4XmU25TSzXQ3FWW7yHEN7PXkK1Geh8dqgNomNffvYq7g1Kukto6qmXaQemfbdN4nyCZ",
  "key15": "5HaKBHPyfbMheCDvcrTF3JWKFyC3RJiVGmnV8N7fYdCb5L1ahgYEksAtjpaWyShnVCmW5A5VPyVAJXPrdGGjnFSo",
  "key16": "KYDdZPKxHsm2PwZUzT9awkcpMgsaiDuHXwG3573MGncmWEdjQKchRfgsQdPD3p9z3QaGaJxzsAmXAmWYEX4TfiD",
  "key17": "3D2hxL3E1fEb536SY36XmWGrQwvRv6q6eVnf68r82wKARqgUH6S35SSDM7USFPLQc4ntv6THDdbwuCBnzAtCFmXn",
  "key18": "3zDzFQMAgDqfMcQ3Ta6oBerTw78qfCLfRahoAFYp4DNjXJ23bqP4zv9CNUuv8eCB9bZCtwPad3dqD4CahN3wPVfa",
  "key19": "3CHo85ftLQyb5aJy2gWvnZhArEKdngPpooFhkRe5RTemGdJLh1NjUhHFMPWivW8deaxLn7KoBHeyLJyJbNyGF2VH",
  "key20": "2Q67vdVySSYQjEUYooy9AXKCL1vvAZbHzD7jxxmR7A2cryW6yV3YviTFhD6odF9TPDhpGhEoKs9GUCUNQGPewtNr",
  "key21": "44U6JUWXTexb2T4Vho2bUzXGAF4Dyygif1gq25cM9AJAo8zckCEGSieTzTDKrM1WQ5Yj7kssB471wKJ6nP13LbiT",
  "key22": "5rfLCwP18Hakbps7GTNrBNRK22nLcBQmjguChG7QX7iPLW4ifMLEa7KpCFfAsJi9Y3A7zdRqcXebdcw2iR1FcWM3",
  "key23": "x99HhhqYGbkpa6Fuuj487ZTvC2ea99u2iUEFAP5NxFq5qLRPYQwu29u68y1r3gKFGwutito2zG2w12TfczW4ZkS",
  "key24": "4kDiVU9LdrP9R7P2TdFPJvbBhDm2jNp5DHZi9E5KpF4iqNVtcCg5fYqvRpmR5sQrDj5CN65fctVXiXyvasNq2yJW",
  "key25": "5UZCa6dBSmJ2QpN2RSRcJWjdg2Dx5MKhPuAUi5mHQh5bp2rwyEw5Dcf1qG9qLUvSegvJuD9J5gDiCoHSLkWJDCwk",
  "key26": "3rDRxsu17Gn9ByetdmLbEbE7PLyBSVZBW99xXs1PLWoURteTehWUMKzWghVmx5YMGSBp1rAx6JuSST8tw8uEYc3W",
  "key27": "3fhFS7vL5UN223ERajEgUvXHzeZnxqnZahVtPweTm1Rz3Ae23vfP7TzhNbpWAR5CHLqzaqEFTE9gDk8WybzXy1Be",
  "key28": "ArSTVe1PwTP99KLRhkNx2wmUvbCPM9EWzEcgRiNzjRu9Hf7shp8AEobwypSCRWKGq7nPJScNAbdoJdQXRUKXfzu",
  "key29": "55ZBRdhVsaE5joepWpSNd5vb2QPycjzL7kjN7WocE8S7acuRcErXobDK92ypkNszqjLxtfvVbJtsTKB8fZ3srYGj",
  "key30": "37VRkPegdv9RDmAtb4DkcziijvKAh5Kxc1fdwNsQdughSrCYmpcdNUDamZZc7ai6cKiAuDneMhsTMv3owrqRCFXW",
  "key31": "4DMCds5xF5b65u5SWVaRE5bZSo58rwqswRQmAQveMBhPmmtPPThrhdjkKpPBaAFTeptt24GYtZKjCZpqMohVUbeK",
  "key32": "5NCRe2b94xiPW2XGx1G5awYz3BryV5Zu5vZQAcQKELEMsXuouC68pYT5W73AuD4JvsoHXswmgnsGaquHdHi4MXvF",
  "key33": "2myPYZANeQjEmLnyAcLRmVLmwXD9mtbPGp6bERaQH25HR28pemTkahr42CmWMesmWP29iH9EP6pTcMEb9QjhefF4",
  "key34": "3DZvpqwna47ipums5LKMs48WSasJ4mU8PzavcaZH8zzoGSXbS928pSHwZpJKEatWcF5VW6azLVcrAuqVwsyn2RkV",
  "key35": "4hBQ2GovYgcDuKcCfXgW1xwkR9u5A4nPgWdiD5cpvvxRWcuARhxwXFrfiQb24vJtg1Wy8afbE1a5JFAEsuuRj9tz"
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
