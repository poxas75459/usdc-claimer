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
    "5n8KPVeBnwuMNmBqKWKqHySxz3XfHntGcQh3X5N1Dg9ALAWXJLKyEZbpP1Bi8mM8TRSg5RFG5mfadKJHu8mPdb94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44rEjxKjz5UeckMrFnwER2XGwsUkqaasuPGnNxi2QNtU6bju7SqkwMmsPDfG6qGeVpcwb3onvxxzA9XtFi2s2yEf",
  "key1": "3fHrBNmWpBmFAnWpCRP8FrP7z34hFSUSzqdABacYZ7KV8ShfMtP5NMinoYb3ZiVBK5xLgMKa5H8gyM7DJtWmKYVe",
  "key2": "4HfoG7AwJ5nzPAEh6KHR9UwSoqSaeVV84jRUFujsvxhH5UViLYZeUEZemdFHKRd7RtoUGmb9Yaout1mPMtGPxykp",
  "key3": "MFkDhPLPxkH6hzBeYwfnKTt11yNg3yi8YcLt18H6EzkwffM6euNJC2UWAW1desESwnp5LXMixc45XGV3HuEHEZH",
  "key4": "LCWZwqAGQSJupYLnncs3dDrxm8P42Et6hBAkMm7ze9h5x71HRRgqLU8EpZADg64b6dFbgShGHn7mbngVgpn12NT",
  "key5": "5kjTUatgSANASXVTsGGpUcddtuppkLbhJgdnxyxakjw6Eya4XudXXaseY2v4gFoZbYcWk3miMkUfQxijKjiEnmYW",
  "key6": "2ESwq8rHjU13UXyjxqtfJLsjEtx229rZKh1n4wkGdhCajU2iLfBCLksZKx7yrjcXPTvGW6rGwGHHMao66bfbrzxT",
  "key7": "27HUsU6SdMStzZBoZxKJiJPka2ZpDRKsYkXqgmirE4YAAXtejvU4WErQ8cupRkdW7dpo2p4L81DsF9KTyfnyYdwK",
  "key8": "2TY8s4Utk3KXMTG9us53yRqCc8cGkEmEUuow9y6B91NAkTT8hgitAXRn3MFoakD896FJkCVdh1AZE4wjoGKTz973",
  "key9": "2q4w88KSGkKrJiNtrtQKwPRKACDFfW8YjjpAjRAVTutPPFUEwi9ykBXfMcWMV5oQFfayX4FBn1BCEjE6sRkH5JkL",
  "key10": "4VHpXs9R7YSziaisQXkVVRuM2YQ6ivwYVoD8P12qZdmFsRw18nVbCKrLsoP3RZqhgfGLEfJhtBbrq7FgpqsqUuDm",
  "key11": "4rxuSzPhy2NVdZDEzn82U5gy5mYUyg963boELV4uG6p8B6qqnh9PrHXLZ1BVS2DeUhq586837v1pgQh824rmwXqC",
  "key12": "4j8KDj7o4264zXQSwADQsWqNA67efDs7hmgch7GcLaGzzFfEPB4Uoy21e99rLCtqMD4s8YcWJertuoBQ3ghsdWPJ",
  "key13": "4YSEW8AQCDyiXG4CHTggLnvHPKdwQAUaL9Z2mcb7HsijLSBrekqxgF716EF43TMHm3kC4JuVu7VcJjbqGmtcueau",
  "key14": "48MEQFrZCf2ihnJVrCarbHyuriCmRbNQm7CJdxk8CtVb7Syw9XphvFijE7r2yZQR1kFPcUwhSAS9eb7A8LBCPFZB",
  "key15": "2Nwu1FY81BvbNwuhUP61vQiz4MPK5Mnk4YKGjHAx2Ytyf3cNW5eR5XpmqBdnWrAAYBxJo7dLYpW5fCxdiTw1iJqH",
  "key16": "5RdrUAqGc6oxbkHFJ6jqkvuWjrVzuzbLCikF9wwh3XDEvDt5woNpvWWZeH62ffhT8fQ8e76hmdzYNaP3UMDJnx7K",
  "key17": "2XBm2X4JkpK6NkQ8Gj4zS6m2PFJFRAkikPP7prEVH7aA1QUEuTZcdCg8mgRLJ7hd3PcE7WKZsbTvLmEMctkFyngo",
  "key18": "ugBnrCrdNG1yb7goALCo2UZGAuQGM7zZaegj9KijAhRCcbojAYgMdPp6opuL4FhAYCRSjYu8Vp9uQR8a7Jcvw2v",
  "key19": "4Thqfz7SVaT4UkXBKyVapwWh2aB9G47F38XdJqRMxvEgeEN4DuWrzSfUH843XgPMGxzgkuhNVjzMSrvKgJd3pmBP",
  "key20": "3uKX56Tf1bFKQv7ndrvxW4phtfY6nyJf1bNZCTFiT3qS7QNuRcZ8DFZ4ibiUaAc2VZC2vKrp1vfyQGjnafLorgAp",
  "key21": "373Gf4iXH3kjEqBxMuDEcCsHxeGTDuxbqptJDQRhUt1SZfwQFbqe9BmWkh9b6m6wvMhybnSa8TutLc64dgyjJU5R",
  "key22": "ffGAP8V8xK7EJgwUCC1ghUCGacVpJxdW4rpFhTNgtdyCeiktEdYKFNFt2TNrzCsvY5sU8XKR9juJkofGFctA89Z",
  "key23": "3UMyQD5i3aV2nCYkEEkGsN6ry36KDosEyt6QePiBBEA2U41VQW7udqmjfGVVfjTJ17GmjWm4ZN8js8XUaynjGvR2",
  "key24": "4dS1WkKaBnsqE1zmpCfr4fNwzF9KUfWjjj4h8JRSixvDjBGLmuQjW9GzsTERUuAqceYSbMRsQbHyaSBJBpTjk4ER",
  "key25": "3EMqpcgAkKSWWNcx8p7YimXx65ZLNUeMXiwE8vns1uVFDFzHFf3gBGwLiTFuWv2DLvMcZKhHu4WmoRow43Nmw62N",
  "key26": "5nHGXT8G4KyZ3JU6z933aJWw46dM5WeJdoG23xrnz7Qa17vFZHjejarMr6nhjWtNTV25wuNU8frxXwFqzQh9GnnH",
  "key27": "53MZ6Kv4mHHLWRoB4QdJ8RQBqjv6x7u6DKzY22LfNRitC3aSxeUKCrZ8xD91GXvL4J2wRTBgjPc7fzhuGHv3apNV",
  "key28": "4DceADCarG3ckvF292WAhiAaN799Xmz34PCz4MV4P7CSYNMmwXJjaktqN63trwNdqf18PRC8D31a6pRKY6rQBgvf",
  "key29": "499Crfynn7AV1oa7LYiyHCjnqBFhJHLmxFgGPXRPdEGBeR87uGx43raRUrDGbH37ttEX9LLxUgooasdKpAsfQ1wP",
  "key30": "4Ao2oUfSopCK57YqMK4pvBfwRFKgWtmEVJ5HZYKUeWH1sWR3uBMaoADYpmMnuEa6sDLh2RdeCE1siMauE8vFMqC4",
  "key31": "4mDc8828zfM6FnWv2dmjBL1tnoV395k426Eugdi1FpVYw37Ti8cuZp9nneszD7zSuhAAJhs9B3L8qjGvNhrRjpkE",
  "key32": "5Xt1UYMAwPKc34dvnAXLRxMV8Xn39zuy33zs3mPaVyEnEC2NDt45Myc9YHtExa2fkobaUZd9ZJ7X9AMWsnSmMnaE",
  "key33": "3GNiBvNQLNFXBi4tziUYRhDBAWFxKTtm7qrNzBsxF8nhsJJbvMM3hxuZXitx4e1iLxoPbMj1TgcL2s65gmrUWB7T"
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
