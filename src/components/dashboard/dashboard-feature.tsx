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
    "4giG7fdsEdzZw7gy384SLSvttgBSYjModpMAXXnjuLpdLBsXaon1Zh2ZctCH99EzQCKPYrL4MQfnHQMW6DcJztSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3xFs5currhnssRsrGGVpi9sdiEqZWKui29Zcgcridey6eKjDobEBRS8kJSmmx7TGCf41sauCsvKiirgKDWDzNr",
  "key1": "1uftg9uYvtYBdsUdidi2y8MjtkzriT1p3Ty7TgGDF7vww5BKpb9ajXEXihAARX4yFrSyAamGYsHSoY6jGnkWKAC",
  "key2": "288pq9PMKxRPt9nSTFK5og6gsnh25jdgXLYPdSjoJJ4HvZPtX1sRtMcqTb8Se5YkU6rpvaNXrVhkQT3a98Baz7Ms",
  "key3": "54HGLPQnWrTMsDhpFbNpKhYQxZmYF2qKX5i1xtxPp3QjBUho1F2CcTQVnCcLeJaJMiktHCjYiQpuUXwzcEEjxBvG",
  "key4": "1UkTKN8WQrP1G5f8X4x1si3wYAS4MmmcupXbd8Nupvky56GrV5EpYANHjZVCTvFPQ6T2H9n8BjiwSkMuShuSGAT",
  "key5": "3kES6PUkJkQLwWSRi8rwJRW82EJdcXt8jQNrDq4sGhQwdXgZTrwwbqSpt73HLEh6MZYZ1y1PjK2Jwte33EPodBpj",
  "key6": "3RWRXFSEjYmmk4NRyHo2KsRULWEaWvewq9Yjid8s5Y82sYctfJeBqTfGWsFQhYurXJhve6fctNFM5HL3bkVioreS",
  "key7": "kQedwpLb3svPMCkwxHQtGNSfw3hXjscsvSU4tZYM9UnzYWCorSfJXfyXVMhiE9Yvh3ikkVx8zZ9qth2gxVgHViN",
  "key8": "4JsFNYawHPHaDqWm564XqrCR2qrKozaQb3Di9Wzdv78bk3jXJJTknBykaykM6P8L4vo1SqnnKZdV5dMtqKM4Cs12",
  "key9": "4CbSh4fNgUz2GwUdLZWQGW1P1QEfuPfbEFSpG3VFZTQFu2gJoRUAeDa7LoeQDpjR1fEzLBtHcPVNqQS6jDtaiLj6",
  "key10": "5kbtSSkYFqDuGzGt2BUnPHJpSZwT9CJkh8e3EpLB3VrhLpWtHWkFcxuhQHTTuj1YCZTp8rd4NjvTKfu6RQCyA8C7",
  "key11": "ExJSWyJY3jHvPEDXeuAepV29rCzecWoU89vg3ZSBjR5hdovX8EfuTTd1f2GtdcRN8v8dKX4D5EgUv2wtLtNyVrX",
  "key12": "5XmW2HSkH2jVjPni1t7i6UCnjFxgLpv3FtfPihGLUiZDsGiHQ3XN4mXMfZHjDK6Rsb6pJicA2Df8SgohfjECwqmL",
  "key13": "wDzXKdusduWpUPjYs2XTgqa49eSXYcga3XZZBu3vp7p2gQqV8NbW2PnvrQXGrhES94nusjd8enLxg7x1d6xbw81",
  "key14": "3b5bpCyEm7A4HJRZH7peWpgzfDCETMRg1AM7RQsZQchBVubnwpsSQEW11jUa5XS3CrqYsKjvunZ6jTNq9nAfRqGj",
  "key15": "2RiTZDRmA2m2PgMC97yuLUxPJe7tLKzHd9XHXwgZLrmwrower5fHoswqN22dFMpPTN9y1UUkcNZeCPB9XPvdSYQN",
  "key16": "3pTrwkpWfGKY1jTLAPRqtUF6w1U1wdPGsd29CNJFbUiMYNFePGsfriMoWtjWESr9ArmeSZSBMhoG78a7m6ZjYW2Y",
  "key17": "3sxyyphc5Ep4avLeWFJztEXXY1WpLSBbWdrkxauW1FF3QNegmousL79arWVvMgRvnXq5pWKe8qMjfczdSVZYEpiJ",
  "key18": "2goGmsroA6vpCSn2gDWr9uKkpVD2aEiAUL3SCmwxGg4ZAHTUgTkZZCbCuni9xgajcTSoUcDS3UuomswYAyf86u1S",
  "key19": "KExdpkDrYBqVpcpyhjKopPKye7KxNDnQzbLspZHjJscBumFWHbtyyy8QNXM7Twko6eppEzfzU94rMF68KSZKbES",
  "key20": "5eTiB3Jxdq5SgwSyNAR3JxaxEJRaDWpKE74LgEyo4t7YYfHQNHXn85JZTPQdfgzaTLWfHybmAgNJbbLEgihrLRow",
  "key21": "4akGRc7KCdwPknDTYyWkMkD5PkaeqvJG5vso5aSmu5MH9W5fzuo5Nx4aTTvXahdrgYykWkoXs66zYrzbQ5m8bDNa",
  "key22": "5cDVsoZTbr5nTYBNGXnXeVVVccvZ3kG7sbb1oarRgfbGA1RZ938kg5xRcAwaK1h7vjefeWnSVgjC547oCYandn4H",
  "key23": "3Vu4waze9bcn6h31YhYCz3gqRX3jcSKNVtUqBjHEmoohUMzmWpT3uQcoK6gHk38Dhp2gCzhG4azcqYgGWJQBPAe2",
  "key24": "33LBVgaZQKM1q1QmFztMWE3KvsAseBvira4Jy3yUdaFi5EVMLhBiHMbreKpLMf19qpY274GNi7AwWWp34XQLRTxG",
  "key25": "5TjvxEfDkGFVmZhMDF9sTD6JTrMGdSKBGAbRYxw4WtciMrz7cQZBaDtifRot4o4Zj28Q4DdKcGXKmx2Jx1yti4df",
  "key26": "53NNVrcbrVvjnyUm4sYZD3iVjLWMKe2xzoLqFhuH2zfu7VsFR9osFfrdDjh8mH1gg7V2QoTnC1pwuFBhKHCDd5A4",
  "key27": "4CcPTymY8zDzWCrdjZ5BU8CXBr5xgn1KVMD79topVcrAhBgqQegZ7FyBv7xDqHrVvGwuFGJFvki6cXSzzPzRKtAs",
  "key28": "3hCYUnksBDj4K1conyrAPrC1mPw3hBgHcHVmdMpquu71xDzEVLSabUs2gHmCXes9VWN8LR2bgB9HMas9hSiifbKd",
  "key29": "2YAegCqZ32fgfFXamND6W1vP7zEDQNzavU7TPDha8F5SuFCVtEbVkWH16W8Byfey9kouAiFsQNH1EbqxXKWdtFPy",
  "key30": "wBcmXdcvGnUWansuSBZ6JLKCp9pE9bgrqhEnFoXhhkXKGYzULLcKmPRQfEXsPWyUwUh2bVGvvcAEWmrF1HjybFf",
  "key31": "4NQaCmjP5NMt3LmHkv1Qxn2E1YRT4qcyn5SjB1Xq6F369qTzjKbSUvD8iVR2QG5P1acjvdfzdUbLyHdsnCWipDTU",
  "key32": "47fn9oo6noTRMTms6DLkwpwUdCZayG4SdYJPN5t8ytJ3wtwJXcLi8aFTWBwbZiqpARV3NZnioP8UC12DVD5hAxe9",
  "key33": "2MGg4rv1T1F7E7Lxn4EfuWFNqEJav91za9xY3HG4zfWJVr5rXyLxxYCy3eFb1P8WqbYrepLDXtZGprXorXRjyrdT",
  "key34": "5Uk4rN4bcyGzspPcF9zD8tGRq15vM1Kq7GAMwcgG9sbJuq5vHRdK8iyxSQX7qA57TQ5RJsA2VYpPX9DiPcxLuBzt",
  "key35": "5HvJ58j9kiFonXphKCBRpXKoCbW9iKWZub9x3f56Co3FNRmxMPPt9vMsXUqRHLc11ANk9exgZ5JfXSgkg1NMnz9P",
  "key36": "3D8LuoanJ9qYZe9zw5fWnttD9R6TWia4N9tM2nFB1x4XytNdMQBxFQgsGS8hHs4G8EXEfWCMsRuNhaG35qYPztib",
  "key37": "2Aw4edctqhWYi719Y7QjXd7t4qxdscJsv9LtTQ4Sd2y93xi5BQYVhvkjWSHnDB71EGQWZkc4jGwXMDC9BX8TW979"
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
