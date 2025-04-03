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
    "MHCjup6yW5Y1XzKgPMyfcYBV1pjjXWKDUTeL1mYZUdJidDvCcsW5DFAJM5Yd3QEMt9hdYUnLSasHVE2fDwYD66h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQtEn2EeWoG8VBk7rJ7pvWiUjgZH9M32f6P4jTDa7GupqTLLdyovbCq5BQnPExENnNJ51gfCL2U4Myme66hjavH",
  "key1": "2Fmi5DGPDKBnx2HWv4czLKYTDCNkNF6YEixL8hrsRFcnMZFcde79B1cFFX8q3L9k2N7WbGHCSGvszzbHWAoVe4kh",
  "key2": "5APugnjskKoLm6e7Txfz7rHphEq6Hzo6QPrsr6TdUMq9JzQzE5r3YYSmBSJd4EbQzEHSM4zwzs76izugA32jmo3H",
  "key3": "611YvDTLaXUXfV1P7QvdMGLJxfSjp165y26hDJgFuV7STtvLA7ubRs46PSsm11ALMkyuavFyhdRnXq4NwYHW5LPJ",
  "key4": "3J1EsUT6J79g6uEQZHUebGgHu6ffdSXyXXcZdS3ZgGcjy34jV4YvqVzVhE5RDugRZ1Hadg3BQR5yudGeXiJnS8nR",
  "key5": "2v93gYrpUfvHf4eexWAqWZH1jNZFcLcVGV8hzSxTZiqbbDYQ3PHTjVqxg75A8jUrRVgnMmVZtCmDL3Qx1ET7PYBj",
  "key6": "4xvHUYwUVbqPxZ89MQD69VAcfD3d1BWgDGsCHDasTv5dwKpFahVNL3dgG88esfMHwPLZ29yPfRXs7v3hDSirRZzx",
  "key7": "3jM4TF1AQvN2p8c2AyVwR9oJwwULRtfwUz6YRYGehnsYwF6rohJD1uVWF82QZnAPQr5LrA9rDAwZ8gSfnyYS6UQs",
  "key8": "pvJTzjcyeVamCz6PoWQKCjzNjYcdu61uF46MkEReHZ4ksx6n8a18ccGUSdD1TCbDymCUYVpbecZYQP9LKXcACeF",
  "key9": "4ahpCAPqRMzwJxYNRdQ6yKLsEaz6xn6NxcjY2VoWkg8Hsu9jXpfbFJK7yWTn3V6MhCnPXw1h9QpU9MVF8nYq3QGr",
  "key10": "2whopVYi2Sw29dLhtjoXfu6TVyQX2soPzzMWMDU8R7PMM8268FB9QcyUqaVHfeAyvWXYzj4mSBTv4QB77PxqZeWM",
  "key11": "4XQHskJRPErV29FofZBzAG3Bq6VPTLq1ZHiQqacS7A771vYzgwET1HzHHKPkUEXNUGfqp34tiPtBhE3ETof7Bwkc",
  "key12": "2fiBStNjzNmjrDwwxreuEwoE7ZoWCtY5qL89oS4ocYHmDpsBjwBtUwbvXXoBwcz7PNU4n72ncVfMpAVY9mZ8UuLZ",
  "key13": "YP8jM9Amach9v5R75tejoMFVELMBKgHoYaz2SMuQd7ZWNXtRmn26aAADF2QriqSVLJBqoQBcaWfie1daHfQ3K4K",
  "key14": "4RKUKTg5AEmQXYtCMv9VNSZq2hv7UfGAihAK2zdSoumk5Rfc14WhGeCxS94jp9s8tefhNKEZxcftvSHjfjYC1GUt",
  "key15": "3hMoT4U5db7JTZfrsAgjk8ARZ9br59yPsLGMwJLEWf6sWZ49jnkCgUJwtL3butd9hUNQYZYCpJspBFpWGuqAFhZk",
  "key16": "jKbg8Lbjcb6pe4jNz5HU7BeZS36fKqw3TFoB1Z1KLsW8thLYAzysqncy4hEzBRJmZSCYXswm7vcBmHmFfR7b1mA",
  "key17": "4M98zLwg3XH17T8nVSuNN63af35U3rZtUqpRWqrKRv5FMaZCUwvkudrZENU7ALoss7f3unwXgDuxiWkYgBnZRcXH",
  "key18": "27mwR5QiEYhHUQu7CAENKfXXNGhwK7brtoziP8GDRJh2Ws9QEmo3G41TyEhHc4qokXt5v6yrw3CSXTw71DGM9CBw",
  "key19": "nyyUxz3a4L4Ae9tsVd4JPvwhGpvBFvRMEdkp4RT6X9Vv8at7FEBW7XBuTGisPDmyhKrQXJZ2dbgErijSvBnbThU",
  "key20": "3fcPF4G289QWsvwutxcPvnywJEpSgcsF9iw7U6pavWcKF2WsfVKrUfAKHEEHAcB5vGG6HgHzw4WmGaEGmDSx7V8",
  "key21": "3n54B3C54ze6kA4JcViGLyfHFcXu4Rb18p9SRshKrdrDbx2aAHvkMaWnf5Pn2ducxxUnSjW7vX5tUjyhy4myfCd4",
  "key22": "4nqZDc5PP83UZs5g1Wt1BRXw5oUWpihXfTL58jAZBCNjghrpgNEvLv341eZ3AQjdX93pY1Ptaq5NTP3zyYfWST2s",
  "key23": "67L46fKx9qjzdU5Y6Abuzkc98sgEkTZajk3VWpdd4NuucKUmMMMApD9Jiy3nN6pTZ2EDkhsKxypB6SyQJkdqWUPS",
  "key24": "3BzDGqqVzLHEppZP9RQicNDWUehsVZgLiw88G9atQmHnBeb4J5GNLjbRMwiJAb9ohnm8vodcZBd9aE8GhjS7LjFQ",
  "key25": "5bwSHDtfXmQsMG6DzzDE82HYuXQNM5foqPZoNGENMgmxS8eS6qRUrV1AcEawnJuyCAWtrHYeZabZAumVdusmSHmw",
  "key26": "5L4xTCFX4bANBk1wKZrdiQ34uPsAEZguvuE59W36NEYPLaz3ra14PbL4WbFjJV3pgn6Sf5iCd7yMo8xvo4Cms8Wb",
  "key27": "3vNuPpXXNHDKxThvbypUnKHfML75dtryqy96Kz5G3xHwCdL4Xi6Jatm5kvAxAgV8ZMZNLXhFRc9PrGHQE6g6aFq1",
  "key28": "fwCN4BQNJGqQmMt4d1aBsQJEnJc2WEVnqzPxmLZPykycRY3zZ5cXuxQacPEqA1gH2regd9zdnF1SdFGH6D95RKA",
  "key29": "66Ps1CCTN4jQu6Qkknh2DuRoBTZVyNpyNF5zqsbNhxQATyn4Fp2HkEeQPzUCeD6kAyczeuyvcTaxjzeoMkQNJMMS",
  "key30": "PYzNwYzPmUBtt1wZAW6yYFsn1KyZmnmqDgBsF2rJD8QJT8b1TyiP5UwNyGch8VtNkcPgcM59naemZ5267CSK4eu",
  "key31": "2RPCVAFEavTcN7nDg6L2sU7ku2vr5ha2B1A6L6nHHRu6xEWaV8sRhuprUoeuEzk2FmtTXeTZmAPym6gTysuaWus7",
  "key32": "3ULfo6CgSha4dua45NQDDNraqLxSeXK2DCpZJ5HMaSmU9MmmrjuigqLuXrXSfyo7Ck1WRNm8cRCeJejFgkRgYVQN",
  "key33": "4yAeFkk949if7nF6dq6HhJASKG73TDMKP2M9qTsftv9YrdYQhnYwFNbF7mTwV2rBxNnxQtGFbvxiJ75U6vYyZkyA",
  "key34": "4FtPJvJSocKLc48dVygvybAi6WHmp4vMe6ZmBC2BsDkoP27asHKZM4Nri4rtEdd2xFBG85PstaKx3RfmRfRrrcKt",
  "key35": "4svecJVHAJikggkMYr2bCfYzcFtPM8jjbrBB1GWPZqh2jpFoWwPj7rtyaarL5sAXwgrjeNaXppvqM1yQzouVgcKA",
  "key36": "HZeptzPSuJtqybAjVXhkgMFWMQue7uCuppKHvmnzTFdFxLwHCz7q4wgrtjPthA5AhFojjz9EWdGqQdzsQ7PoyHg",
  "key37": "5hfrhkud4wJ9RWNoftPxCJdwDyThW9r13zEd46TSajxSihBXgPcv16YBSRJUgVF9fBEYavsnpLKM4GLQMVkEEg5B",
  "key38": "oUZfLfEbpKVciH6oYrH2RjQZr5LnZVnd7wkjnRSJosz6UHsiTAofMCP1ZjhGBXUkPFiweSr5naJZZhXUaf3sZh6",
  "key39": "5pt2EAmZ8zyK59JNZsHZwdCxXvGj5MiuUFBDqswWhkNTt2S8oUzCuBCDbCE2TsWXf5iYnzKKaaFBP1GBAToVQjWv",
  "key40": "3hSjyPSuBwkEUvMTmi9GYJTrvLPCNqJeNsaUehJRVqTFZHn8j6fnPEuRZpn8S2mUWkjU6xyQMEwak9UH168dTxE2",
  "key41": "5FvWSAouebbrnNFBWxYjkbbT66DAPgLpDwy9zFf4gi8xsNNoxEctW1cxAX2CUbTrQWya3kyCbqjzd6oFRHuWkwTp",
  "key42": "GPBFQmeoNgDihXHKcgSsiUoCSqj6ahBAB6uvrKz4B98g5L83LGyV11HSrfVqw8ndxoBUci6ru8g1YAzevCtREeN"
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
