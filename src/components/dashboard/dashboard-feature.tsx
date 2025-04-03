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
    "3EUwEFzvrQPFLeyfaQabfaH6NeQySuFbbfZqwP9ZiLcSREAG5on36hVDX25t7LfDGLPyTPLuV8dqmsLjVFhJZyHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZNFLAAG1AanDPRb2NsGnBpke6RqEQuPv6NcYWDAi54p5YM6PSpzR1bBsGSrihwwHhmQtEYa7gt2Vxw2cuTY25o",
  "key1": "2peDVYhg6LFHFnWFGib1xmmVkofc98UpUVnofw8neTLZgEAgfKhsccLQBHvJSCXv8QePc9tJ11bcvVNFgyESfYTS",
  "key2": "5RKRo2mzya8V9TM1HNyePyQyDnLTMENHLJxwCsWh1WU9wyqB6fooCYRyNpndbaf2DnM5icQv7TYW68uucK21eFoA",
  "key3": "4FQcfyTFAbt1yp2hneWKNhVYQsmi6mqTCJDeuX4kC42pZLgouJGpnSAkt6t1U5Xoj5mrxXvpqDQ9MNR1TdURqZpQ",
  "key4": "dRPwtEmzwnHycvbQLcLUWuFHfwcG8nxDBEhPs1bL4KrEsVXMUrP414Y6QaKX4SUs3eNUWbTvcjLpi2Mmf9XnBvX",
  "key5": "3aiH54iTjWZgd6UQeefZ5QkQKkqDE15nrFwTPZKwPz7PMFgv7VjMK5L6AnMejpYmJG8kkogWVZwm4uMqgwH3AFrW",
  "key6": "3vSHkTjqDrB7KA9Vq2hKjJgYpuvNpS4D38uREVb8LZMwthReAwPErSfmj2hebZWWkTvhxaXYvHJ2tZUqokuQsmST",
  "key7": "ecWJYYjn1ifSREijbajzpedyNxgx12s8uovRBxsTSs5uYFyG92LUc2jfDneFUBBrWDPXsZkx5NTEtY3BVM655xs",
  "key8": "3PVMTMeePFZDs6ovSETrUPNPyyydVShGpzGoSfai5JNbwmujjy7bo8doSpuBPKSN8Y3tKo6QRBBQGgs8VJhHvVXD",
  "key9": "3zjjVpzt1yPZ5nKCxMpXgNfiCKYfGJttVojDB3xR9rPhrxhkbQXTDTa2U45eDjRZPKmRfhnjZ2CpbwvHGSsTAtHn",
  "key10": "4snyK9DeqTULvdaHNmkLWUy6UfwAXgVuAXpUR8GyywpzHUzBFijknNviTHFJmcQZW6xeenyQrJtdtMWvpoH3Lp8c",
  "key11": "5r4Sqpo24oBo6DaStMbuV59WqPs6doYPRg998LF8TfmGjj5RTkgyo9i9uB3h5CrmRyRcGeiquCJBEoEtpbj7qL1b",
  "key12": "247NWdsknXrKQhzXcUJWCCJDeysumGecvbxGsKV2VB3wMumwuxjjxM4P6zronSn2Bm9VXp9Htnhozm95Bus5mRPj",
  "key13": "3bLyZGxECPt3hL8cfwUYdzDzgm5nueYFjpzMBmyD6FvXhP2ggXzMeQaqKDXBfrWjh4Cwo9pCTfhxRHRdajcqg3Y8",
  "key14": "615Q1BUmb5CFBQzGcnYSCUqrWjjR1tkh2h51WbfUSmwRYYcMWoBPD7Z8i47tSyaSwT6jxrNr2ktGPuQ57DcSDUzu",
  "key15": "3A3QHbTzuNWTrH6apsK4phBDciYd7WJyg4oDARLnvmskTXGKErn2ucQLzXCs8Yo585YXBnW3EYZHWyWqj4MG16Qm",
  "key16": "3K4o1XhGdszFP4Bt3vNHx5zYG6r8yTSnVWfzwAfSS64svFomaSk4nTqjJvhP1mbm9vnw2TyBit2Pv8hYowb8jd6N",
  "key17": "5s6viuNySzzCCgFrei1o7AGREHzqEoQccXGmuAVn3tXdYDvtEa6WLU5nHrJVbbRSvcSiAvW7yYvrE7duyANr3PrK",
  "key18": "4hWLhR1kjUvVRPn9aCBwtQEZvEjeDMhsVSqCFJcSQ2GgyMZs1RzfQepfTz58kYbvLpcLnSi4HBUPmLCTJBe4Zo1o",
  "key19": "5JKZA4h44N4HorQVbbj1V7JwkdHbxvSbTBwwYX3J2kCskE8qm9XCPAMYHTNstNuWSwUze3mHRxoL9H5TrB6Liyv4",
  "key20": "MNjX4qRtN2EhrUerYgpL9yvAxHG2gayapbRrMPUxAAFexVf7ZL9GvEvC5D7CZ3MPhfoTgmXU7wwdcYLuSXZoNGP",
  "key21": "58k8xpeW8J2pDqdXzTLVZcLHTREVqfcn6uggaYfgtczoe8JnVLNbhoi6gmkf3AF9aa8XZe8CLZzJC4QoRzG8wnCc",
  "key22": "5icvXg5fahxbmVrhCowhNqwduJQgoGjwjozGgcfcAhFUsQPpabtcFM3JBqiExh257PH3BnBDBHy2wnEabUg214Kr",
  "key23": "253ucTSvQWYLqnstJ7xT2TvjkPhfppCWr8HwytUX5Gr7n2huwVZXr1Axwf1wE3Kj2eFduYLupfo13MwuouiMREwQ",
  "key24": "4rJf6WzXuQHhCPr76RHFDnH8j5sEdEjJWCvxYr8vHJq33wcuuUAzc4YnS1XH3WU8FrjBHBepDY4ZXDGxoq6QumJW",
  "key25": "334HJG93aQJbU1e83HPceVcsCHzV3r2r7WVgLJZiaeGXcKhZGQ27XFyEn6b3Co4YzGAaLySTARLDpVhuRcJptvLa",
  "key26": "5Vtk2tN7cLkQ2GRieg2kXWHWV6MFghYdnAtdRXYx163ZbQ6nkWfGzhRLKEH9oUGoYaMdwq76bvdZMVxAfzQXtNV2",
  "key27": "5j8yKNa4bZ7X8mDGWWde4TcWEqDzMXRJ4G2FWA9ALbWJG6vK2j1UQALu8LRa5e5YtH2BNGNzhwmC1uymQwSuVfhi",
  "key28": "3MeYUzvGimxP21RWQ3nsq9J11ww6hYEtcpeWE4tbBioDi7xmVNGJcLxHXy54asNqXqAhULcdrpCcHRPwvxtJ84GU",
  "key29": "2bETbspAw4UVhVeN1RJxztircyYu3PxWgBQrhrt8e1XUyWxeXiDBTAy5ntnrqAAbCZv3EaroochN2mjEec1m14PM",
  "key30": "5Ujbs2R6ECdEcy2YzmbgnqFBzvuMSn57iqLhkfJqQKhcXxrTob7FkSBM7mb5kPkYGSJiNorM3a8ycW1trNYpPhkt",
  "key31": "8tLt2SficC1iWXomdd5UHFkvUBuBeXujey3cRHm9ED4QVyJhZVPNGZNJrMYQ2vK8hfTLFmtYa8jyKHhvSeMbCLL",
  "key32": "4K5yqGfG96z4NXDddAbQkcMUxEHF1xW9YP6fzowhNfJy4D4zSmCmSAhJTRB65L9FnC2M3GetLN8rABTt8jwwHf8i",
  "key33": "3Aftie5W558DEZ9XFvhaeD9p94A7etaqN8UCm4CSFjkBAWk5DrCjcBfrtVi97M4b1y7kBjwWiDK4dbR9fguoKiEb",
  "key34": "5yA3mkzPRfYPGcsAK2V9ZQ48guiuGHg4Uz58awVTukwwYyuWDthzKmAzLSRJdQDHbtMKAYEczpkcNcphp3UKyCkU",
  "key35": "3Hf2xRFxyUn8TwKjDxRnBGxbwA24gwDEbHzDWESJwui1ZepJtikJgwam9dPQavDaZWPAsjk9QVrmYaeckmX9v1cx",
  "key36": "3e1Ly7iTiWM4JznjrAwxJrKk4Mb8Be66iPWAoH97cthuHZ2c97JurJQr41VsiGgDxu8EY37EouRbxSdiKJYYVykJ",
  "key37": "2A4vcTYAuy1WDydp5D5STXbEBYfNgZVaZgNCrJnkrQDSBcQygTjt9nMqp19WiMBMHygXek6puEYH7oCEDnotJg63",
  "key38": "2jxiHUdzngyNjL8qgTqjc8KokyV9S5ephe8ydXZkaroFETv78P1FNBb31A4bviJtDDgGfR4QhGnZKL5QSZ2j16Eh",
  "key39": "3SfwQKSaf2x4RoW8Gaeo4FWpiEa6k2XFX53yw2zQDvvT4E5S7z1MMNovov8aqATgcVXM56vcUfwXFqbGq8Ze7Fkz",
  "key40": "3tZGf3tBcLUL11FKwsxaQz7jA4wce8WofTvyWfrg9NrWuGUENqC7HTYaf8x3ZVLeVFjhEyiWQBwZ4YoZSrJY1fpy",
  "key41": "2KZ4B1mWkyYGAjyDCJ71EJVafY5x8NtvYSdByM7WKgkwtZnLPNjv5wzG6qyRCjEHxnhw4QaDab9MVHUGciSp2KC1",
  "key42": "Wprs2WnvjyPyW67qogtX4dfc2L8SvYjA98Qp7GyE9yqm2tw25vahf8DqThjSUdMce8JLbCw8Eubn51bKrMSnGkM",
  "key43": "53TatSDcJEWE98XsCmEBjpx1FU8t8613Zo1RNrbQDHwztmLV5vLfZGcaRUKok9v61heJAraTiMgYe4bxt4EUenz6"
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
