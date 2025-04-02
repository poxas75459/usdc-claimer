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
    "tNB73AyE7TY4n1D86DWn6sJX8QYCTAvrQHpY52Re447mjp4FUrhFnQytHZq31GXyMueZi7c4MjcfhVhHRBHynBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "snXZny6gaBT5pTxVA6Ddzs7oYzsM4owRX81ZZ2KqA5Sfd9qh2sxkyx3JPStjzozjZ34L4zEb1KQ1Zmer3eYCEUf",
  "key1": "386xgTuxDhTHotCU7jeKvCoisL8gfKzC9K9FSAmf6uMmAfTyksBfMCHFVcQ3KX5DmSC34UteFzRbhUvQG2oDUoJ7",
  "key2": "5koQAmfBwkKVPYLym6QdrsDCDA7btMMc2jLge8tWgGenQAThpa56pYfVDXoCQvvUT5LW65MDVB8wJNdmSnVT7Z51",
  "key3": "YT9kdXFR59tnjdBETKkvdRc5zwzdxQSen6R1wad8mktyLxDTF7RurRfG9BczgvnfZXjAzmxtbHDjBznk7z1X5nQ",
  "key4": "5hvCnCxw3BZtMSzkmWWTuFZ7xsUye3RSvhyrvLxXGzWLowkpLaWQX7BiSVstsHgYtMqVmT3WCDKNDW5m5hDARgvr",
  "key5": "5bM3DEg53Yjg33e7rc363Q2k3z5XBU74SVbXZVzMQxC4zJ5xEqzdYYVxKZPhTzmqCDZLP55L9PMRhBPuTctXzYJo",
  "key6": "2S2wRFgdm9mPvucMNjjxdMG4LFKYCWUYNtGXeBAadj9kwftHjxvgjohowvWD9gDDDYDRYmFeuZ78JP5RHD3KqvkT",
  "key7": "3e4XhsHnkEWaG848akzmVJFsGLoT8WHXBkZmRfAzEZzgjvukS4K1PqxMsAGZg1RAf4H12cczM1WVVapWisi4mo7M",
  "key8": "3TAsWUjQDsGWyyHbxLeQrTakCrUJhsuRZRF6dzGjoZ5Qzcg6Rxmz4tf8eWZUAuFAAWNqr76irF7zGdBeuvjQ1n4S",
  "key9": "2Jq8Uj3UvwJF7pRnXbPakJT6SaH2hiKBgYfVzAJFbRK5Cjg3D5D1JTZ4BC8iW542guNLenUf7D9XewWzpuVs6qJN",
  "key10": "4NxbvVs2od1BPQYwUAD1WvSDDWfQVtpALBGmZutBxeSs9kvMZxArzRCmKCCay9VYVNpYdw7KeMqarRvseGjWk9F9",
  "key11": "46pPdCKBCaStrgFh7nZ7KYq5vBXhX1C1jVPMZoeDbzSuC95qibvU4ZwFQk3FA9izGDhDJnWgQ8aZPLuMfkxgvBFf",
  "key12": "2zM6DbBFfC4oS3RaubfZYTr7rt4t8D7U32VAXDPgDdcc5wDh1jGaCa3TdEaffxh895TUs7oXas6wXDLYkcyLT24C",
  "key13": "59BWRPhC17FRHUKiN4A3hHm6nPBeYYGFtkE3PtH4VUHoKRoQ353vRtaLLo79UpmmrdkeUtXoe68eJc87meszLzmP",
  "key14": "4WaeEdkRWK7DF7uWaYB7t2ZF1g8hDNnXpbU9FMqbAwS1mefvwhKEt8Ucb4awVjv4jPLg6aHQgExT51paexAt8i8o",
  "key15": "C2QmJ2ETQKiGZYw3CXe4vk6XrbEhc6n9fsVanyi9jj9G76h5rfzzmp5yb1eMMnBXLkc8SpoJYKc1joGWaqBz9qW",
  "key16": "BjWwRnndJsUWBGv7gyYzr2bZ2Eu4QDnNdjwAP3ei6zppWTyPZFxE1REntHdHyEGTPyKCrhDE9H1E2LkGUA4CfvZ",
  "key17": "4W2GYCvopgNyDGwqWx5NmRE3uTEDQAXsa8Fq3wdXQqsm4PjD7TZgwRofW5ozS4mw2omT4U2XvPa1hijK4xruDz9R",
  "key18": "4DHjRVwdoJPgszde7KhPgYXuHHdEAQqs7cSvMTtHTXmfwbZHQQcXr7wexi9VEaaALUPK8fNh3Drp8GcLJwAtBudV",
  "key19": "5xMzCvsY66TLWi3MVBmpKuP1QvuA3Ybfdbf267NEj9rq4RWMEPhXdbLGDFrgbL2ssPjzQC1UoCDwcH4UskrokFuz",
  "key20": "4trUTg3Uzs6RTekocQShEj76PtRpYn6dEeW6Go1n3bAyz2o3MwxczJiFKbY6iN7q8jEBvHNorTxMJXGXxZyppZSN",
  "key21": "29LhCoWA5JCAD83ugFQwuq4b8fbKrY1XBkXLwd7AMEGBcgH9wcSc573gUkKafC1crHWFYNmxVwNmN339kW2xQJuD",
  "key22": "5LRx1V7qz26gSKAtwQ3VM3nSFFqmep6BYD5vwWoxY22j3LzBFdEdrBw3mZfRrMJBbpWaMBfSFtPrVUBruoKPuEjA",
  "key23": "2aVd1f3E5nD1PEbrutSdJ1LcLWGTPSPejGwnyVossLUWvY1vUe4H5GwqouGFGyP44muHA9ZXHGjvTK9MW9dh9w7U",
  "key24": "35KSndRey5tRKwLYPWkYD2VHBrJs6X2AZBbTcE4Z9HaLqPqjMhfxSg4wV1fRi8f4soSmVzH2zbPpaGSBfSzpJKR7",
  "key25": "ZpPQgDXzDErcGqUXet5CWsFFmAeXJKDfkQTXd2inC7dp3N2ygmJ6NojWaabAFYqLJkFhgYmyK9gcdMppzkMJkWu",
  "key26": "TbB5txJwdovaQZj1gPNXEXPapbU1AZmjdgYESfbtT4c77hYkp4QYhrGv8TnMu4tE9A9DB26gnjJrUC2DbfMUM8c",
  "key27": "3hgdeMAvFsWdJpcms4C1Nb6gVDtgfRfbXifMYMHzhMnSVzfTR6Go3JnThyaRHEatv1TuxzE2fSGUZD22pDjwrmFe",
  "key28": "S6wgyS6q6Z6CydU5x8jLvLcbqQYAoM8edTz5q8YoiawZ5amyqpfS3Hon5GpxkjUcwnpwKFbmffB5nEyoMGxXV6M",
  "key29": "2C5njo3WvzinxxeNeWHP4jfN5Y6BCt86m7cdr99xZCezBdEpAu58ZvKv59oGv3mGfWrxyUKcVize4HtjYV223HXy",
  "key30": "5FQHBXe4gQwYyr8j9APuBaHMwzMSiS4vgXQpFrFRmi6qTjcfQVAXiA8XxNZd1oLdDLK1k3E6xf3ykwcDAvp9fXAa",
  "key31": "4TQYLeB3kRQJfGxtXq8WHVDD34g23WLECvwBuzaJHTcEGvc5C1X79YmafG1XSBEYn1x3jTizesGDashhghZbW3SL",
  "key32": "2nvuMYGGumXnNk7xKP1RWzRYgjUH48pbDWzu2y7fLXU7SYRb6pzEX9mB2m7qdqTfy8qqZwaSv295L1aNnPE3HTYr",
  "key33": "2iCARJbP25Ay62QWke547cFWTJRELMUHsGGZNhGUDqjmymUUWZE74cW5JdXNbYrcpeXvu8k4cUMCeviqpDkRz2cP",
  "key34": "4dreLZ7WaSCXArWwft2KHgcWgN4ZwCBrpva6DH8hnGyvBWbwttJhg2cRuqMn7rJTJiryT7w73mDKCC1t1ZYrMBR5",
  "key35": "5cqbdkZmcDtYzce1AFJumAVxz8mSXYTj6FZgYicMuFXK3eGaXsNUB97XoFxtxBMbygjKfaUpT8YPDeucsDj9Wv6R",
  "key36": "4suTUr7U1btVMTX2wch63uPC2ARmmuNMEXVc3sZrCEQurMo9VH3p4bgzGZ7ZkdPvk9LsFhyPXqiprWJhtvTkgD26",
  "key37": "2qQNw2ws6TerxuLsMX78AbAqkCrhBuYHGrEEipXC3cWpk134yWnkZmbftryK8nzJ8iqyXgw9utomu1qQpqMhdcUS",
  "key38": "44o2tm2jtXp3UZzmHuywVaZj7GDPRYCPsaPvnJd7ETeWsegd5Fsx7GW8fWJ87C9uz4j81xjrH5CVxyuBWson8jrT",
  "key39": "2i1wCcH4eZoWianN1MBVShyzdSUiTMoMedGEq2b3q4GvytJRKwpnLcZzViGGnEgPrncUrVtjGp33bSjXCeaDmGgm",
  "key40": "2jTCDbFQSDLiHUMJcqya7EHEPQBSRyWtoetV3MbLpvnDzbyMqYmpkpLMLQDQ8baGjs9Tb4WytSmZHtfEd7Yo3Ewq",
  "key41": "ftz9D3gsm9HCokhPAQ9uUyVLK8DQgF26jeZXZDueUyUWRXjbzZuSjRXJLCQNZch4Qua61rue1wLKJtEALG4V76e",
  "key42": "3riQ3A2ttmsXy4TsfZ1cPTeGhafgR7XJdbqtpGkm7kAaEdkLoLqkJ6aWztyBDUeMxqu5xUW7QPKyH1Dfu8iQ2dc2",
  "key43": "31hUnD9GdxtxoY32CDxNA74fXKnqXnWqhph58EbntMwKRqMpYTMhNpbXrQkeM7MN1NtryW6KHTjxh6o7UH96ohJF",
  "key44": "4yidwNYGJy4wAMhp3Bu6uyZrBiNjdw7DyGfmXVDaEs58GSUfGvH6jtL6xVsgr3ziq4232Am3QsjyeKz9dBrRP5Sh",
  "key45": "5XMkhMKXRfXR1275sHeVCHDcgox2vFe6exZSxRpCE6y9LKp35KsBkHU4BEZGchFTp8hgyaGuNtuGN3qn18Jsh4qu",
  "key46": "5QDo5BmuFywLE7LbuydBN7brgHAjxXjxQC9Mevr4QmwaGn11xQq9simkti94RfnqXmn9B7eJi8snTfMWv94dCdj"
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
