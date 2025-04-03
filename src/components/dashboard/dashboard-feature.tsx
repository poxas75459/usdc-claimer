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
    "59HS6KdaeYD6ymJi4E5VkAfxXM3rHMkNx1eFvgQXMhSN6yoNPDVaEgRyJkPCM47RMonDrtg1Wz8DTRwq5zcTk2xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WeDYVTC4GDimZfxGDW63Mwzzdf1a985YMjrNzRSxz2fdgeeyDtnTAHRF5x183t6GdiuwFM8AZXNWt6DQKnj4eRj",
  "key1": "EaXPyKYAkChyddcdEbM8oqw9Vw2h4FHgPNGYkjke5p2Xp1aa4yQwiosotAzdbYTyjzzoEYFmqz9uQKMd7iAayTU",
  "key2": "5F41VUq57kgCAwqWMVvtMcqdTGWztxuo1htgr24mQBNuBKQcpzY8yi4MetpYdSUbkqyFhcz3LNi6F2VJGYH1Snmd",
  "key3": "3dzcm33LStXZk1a58Z2MXz5UVR6rUEm1xvwpcjQZuUPJYt9FiMrvkMJtHjjTy4mEHyY2sikAWS3FGvccW6XtL3vw",
  "key4": "u4gaC7qF1n4JGJxcJHyvVbvm7rUKmjWT1D9NmymSSy8GqMaK6n1W6kpPCeKuX8VZUvDstQg6YjTSbrm35Zc4xkt",
  "key5": "4A8vQTG2esHvSUTN5iGtLbeb6zY3PK1tAnwuw8iaURpp1JP2JBZG557dqQazYoytGh1yVDuWwF4HPgunKY4r1xhE",
  "key6": "2G24PpJXCgQYRVtTbvVzGRP8HMpWH4BAzvccYGUE8tLsrzDDUQUWZNhj3HWSUWnxjvzGuSiprw73Kc3VVsptmDia",
  "key7": "KRKRS27mdHSmpFFvTxdh2DbHLAF389MWNUYw57H4GxgSJ1PJRTdEP6KzSAA7exhx8bMvceCPdbkVPPe91SPWLdv",
  "key8": "4byxDTN1toXnBvohwUHT1Q1JhiSLgo14q5PkTEaGgPiGxArFCtwJrNzcEZApqzoyBoDhUBwFpt4f81po3upo8mHV",
  "key9": "2SdDWwKQjB81Y7xGMoGKdWHUiXc7gJr5vkMZdqvfkaSx1ZLeYu1BvBya59zFGBwveqxzHKVnN8f6uEiyhq8rSUs4",
  "key10": "3F4JGwTkX4bsbfiogrPt1BT9tS4vWtEbGFzaoDhiXeBwS36x37Ka8diZJ6QyAt9DhGhMHb9kAejmDctLqmPESimE",
  "key11": "2pvyeghGuPCgGq5zEWFo2iri4jKX2JhybaekQe7oF2qdsyc6gPHSdRYZyoz7oGKz3RQHtiEE7446H3yWMsKnJzsa",
  "key12": "45iTgkhZJpUCdXWiJov3aPFsKfzqxVXaFLPHbUgNqhW8GZ68KqxBc9htczkteBNqAjRuVoZ1v86aCyJ4ECdvWAhf",
  "key13": "2Psv9RjJduTitrr8P2D4zQHESEjrCSXoqbuRfkojJCYKbAEMZMc8iaGMCGPk8PYX4EKxhUQ3pfM4kdEbRaQYM55t",
  "key14": "rEj69WgxRKGPawqt9ekLVMWfRa8XPeC5zDkwaZtvvSgqzMRD5auf9znYqj56iK5Ai6Cz2utwWzpEhxYX4ABtevC",
  "key15": "2xK2xn77YT6rAiuY2spQ95TjhfA3YCZxqrpth6GQMfWpaTB7oFeEKwNwvE1vC55K5zgJRm2MvADjhgJcRPGVrJU",
  "key16": "3PN5CDh3gASYXFrVEDdE9E7bRZC4XLLKa5hi7UwzDacarj2x3SScww33UZKRRYCUjAJ39mHjAzUf9gN2stAwoZ8f",
  "key17": "3sMKbmh1m8SpCCqPaX6APhS3kSsDWkYqykHq84R38JjxscwmVkByuWLHambd9hpsq724S8SozGQp39yWjWrPVuQq",
  "key18": "58t8KY9cpkF7QeaKXzGSM8HHqLdV65d11p2pm8kkeate7X1XeLekW3TnukjMCPpAp7PuW819tB3YHn8Kyw2YNtQB",
  "key19": "2TzVPiU9YyNocKAUeXwpp7hmqHC7XK9M23FQKB85w7bSmfycLMRA7nwZmoNbjnTMnVvaeXVT1LKwaxfFeSXebGrq",
  "key20": "3AShxaw9rkDMLv29YJnmByaNMxGrDhsnKNmXg946TTBUz95ws6DZWp58C5y4szhXNSo1pmHutd7sJRFBBgzGy37k",
  "key21": "4ueoyAHJbouvtmUC9rMMH4MqByR3KEDpv9Av7aDJ5gG5AXxNm42n1JkjC4FaAcjSkTddbFsQWxgmHXqHk63Lt5wX",
  "key22": "42suyoGVSqsBeW9KEY2SNGAQrtvMGVRoUSfAs3nPvyavN9PtZZ7qotaReyjynfeVKatRXpWhuMMVvH2MSXiPU64r",
  "key23": "3UPsGyYFytgL4uPg3PPjgs3HFjBcF8keBWcAuLCWmyAXQCBLtMAk4trRrpsUyZ2RnhFhizAthVgwroh7Lt3kbutY",
  "key24": "3fkWZWtfP1qy8a9okLTNDV41F3TV9goP9aHvr1wWHdzw8DncB2Vx7DNnCgXwqToBzoj2hTTH7cBSFkAbAAod7NiA",
  "key25": "2LxtCMkfX9U3oFq8RRLZdVZ89XFpGDiJXXsq4CXo8k8je3xJ4nxr6jAQajznYJmbohun75nRv2x3jjagLT5mB6PJ",
  "key26": "31aeu6ZbV26vqZmhiBYE7WywdJzhqqfb8DSKYewQV1aVPSU1zrUT6Ng6bkmTbyT3Dfdb44fdvw9g3WxANAeQ1KLH",
  "key27": "ZYsnHqNL7jAMGaSM68aH26QHHrZMgqBeFFdfBDJzAyjD7GuAbu1kSVchKLNsNhmU8GwSuosR2JBP4rDDxNaBNmR",
  "key28": "5MmpTwwrhuCNjWBCn473GcSgGDKw9a1ERqpiXirK8MsVU3qo6aGgXX8G5jPqKFtdyGRevgzU66w27UpnPfo8H2tc",
  "key29": "3xDkZtoxeQEj9LDJA1Lwo5jdkUpuYmCKvtoKZcGdyPXAXjRXMPZK5x1w28FYbQEpGNUopS5bpu5vCdnQ3WswJiBn",
  "key30": "4WwZXL5ZxBCxNLM5c2mduWf68KBgPe6Z95M8o9PZu8aUogdbWFEwcbwzxBJMkkK9wkDzUcu1kzWd2MF9rHtQ9qgT",
  "key31": "5E8B5YWNtdGozL2gkHYbwthqLozfBkJDqAFjmuVF5V5kHLrHSnBYcC4FxYyJczFWYJQ528E5BWwmERxwS24e7ByU",
  "key32": "58xprg6W1STnsyEgW2B1Y2SvcfVbtb7mRfzbsVHaSGdF1CGqfsNVUCWPdfhtG4t41PPVNUo1tscarSj8Xpb7fAGk",
  "key33": "3jNuhzntC3u4raCch7sCxcNtEcgxVhBRNii7ZsiFQcjHpMQHwAjE91boDMt7mwVymWRU9oja2uADRgjUcK8ni3r1",
  "key34": "2bZZ6cArxvtsTfVzSiHR2dPJ9U4JwzgwdVVKkrGcjETHJMZPPR39XffSYRQD8E2VZUiC9jySWLJZ3iStEJbRFCW9",
  "key35": "2GNPA44mrvKxdAbTwwtPv3czj6jReMyqvEZSDhA6tn78uS2iyH3PndcAWXetkxTrbHhkAL3rgcqKrWRDpgss4Kbz",
  "key36": "3KUjiPnhVza4aAhZSXab9sCgYrHdUfmQsW6Z8JFUWMVJGCVA3USaUijAFhX2pn87iQ6CXxUgagMip62mAU89oUAY",
  "key37": "2Dh9LzVNSoAtzReCmAWqnjBXfv3pi7YQy7kkRvb93aWaE85hWcW3LwA6XcQjM84VwS6WdqxSYfGejVg4Ed8HFbY7",
  "key38": "WkRRymhhLRAUdZWBebJpWHF8Vg6e73EK68bfBE9w7LfXv4bGKJeMB6BBpGVFtbBNpGjMojsTfDwY35WmcXYbm33",
  "key39": "3FCWcpeksBtGFEfiaSuuY6ptnm7Fp8N5xCTsS8RhCNM3cwmkULCcZjtYnGjSvVHTZy9K52Wp1NRJGGd9Bt1ZQtBQ",
  "key40": "Cdi7bw91DwcEuGSZqtBF1exdG6t36imvvmwYaA8GnTSLgXDrpKNE7cZu91v9JQ4ukyUfTWk3uid5Z3vJ4Hnscij",
  "key41": "rLKdnTohzDqKyHHgJwKjLhhHbmVwioUqyAKvEXeAdiDbfvian7nhUfMzj2DnswQ9YeJeifHEB67QDr3GyYjKid1",
  "key42": "tnh8fJaHRbFVrs5ETTcHbYhK7S4Eh922ZqddY12PyDhxfGz9fFrR5UfREjDPA16yHRJCWUvorvyoAwpZZt6o9tP",
  "key43": "4Ny1oSLAKjCAPRn5HWSzmcwUEMwePSRZxf2XX6KHyQ3Urv68PBt7KnwaaCADRKh8gZokvZBQ6aCzzWo8jrFsGivP",
  "key44": "4oB18MnNj298J2EDm2jSWhQGUFRje3Mjj5i33RGzYfGrBTz8bpLwUx4xE1M26WuTpKnoT4fuWjfzeosjy7fdi6Hy",
  "key45": "63S861tjMa6F2vffA4SLi5vGNimdjaXjMyW61TjdZMZdFryLFUvFCewhEByxdqfyEPqzNefja5otZ5kLZRJTh2ut"
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
