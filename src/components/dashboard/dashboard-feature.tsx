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
    "A5VLdSK1QJKzrmVnWDpmhdLnmn56JDdbw45vWTGro6fJQ2JKh7xBiq1QuvVEMmidVUzdKVZiXm7xzUSZXe62rsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSwfBJaF2bRijfQoUGLD7Sp8cdzGkzzKcAPTk9xdpQ7eRtayW94Fu3SMhndP2zDmvQuRZVTjvyNCK66RXKsEfkp",
  "key1": "4rxUEMKBJyWHztt56aZCV3EmRUqythL9ZWdW3DbiHzXGimLWvfZbtm3eCgkBB52c627opQSVLDtrjt9TXHHxQBzt",
  "key2": "XoA8WtMg5iMR2zBXHfgcCybksuW4rimgyFvkZBpYPpYT7kpHVtdSG1XmXrfJNUGEzXb6GnW64RgHyB4mK2aezKE",
  "key3": "4kLmN6voCQkmdxdyNoJMSJ1ZqeqdrkTEL4gr2yzj2LMyy8uq9VuYszRBn6HSfawZ6U8pVP3FGiD5yEb9fiHAcCea",
  "key4": "bJwHiyASxL4QtZJCr5G91KyWG62k9Cmkn1HxrUnthdinWvhRhw3bYFvaY4EFbQYXmwPyqPqhqqWauVQ2rZRo64f",
  "key5": "2Ad2uVYxAtBtNUSbPaTqwSKJipa8mYvEH8HgZWkKNfqhEnVw8MTauriSWTSKBsnkbeof48mitBP3uUcW1VFpdPU6",
  "key6": "fkjZ1xEEUY386SxqMGQaoe6XZXLJCbcEJBSCwYaeMgZqMqQtotmDZg9hgV1BACT8HL7GGXqeoNaLDU1QjSWw7sm",
  "key7": "46QrdRJWUYcHt7FkyjjSkigMZn7d1wY4KjBaWuYckn86PVDwGHdWHhdtZWUv8zYWLxaEC91GmzHqkahtdEfdNQkP",
  "key8": "QVMjc3eBam6ubCYfym9AsXB4MrwGCMumFSL995KPNzgRvfuNrbBEtYcq6q6HoHDovabgmvCffQiW34vpjejMCqW",
  "key9": "25HrnZ41dgGDviCJ6F4rCGP3gY7oZqep8u2eVhAbkme5qZGv2THeS47u654u3M5gn5x6NNzrF7QUAfiasT7PqGLh",
  "key10": "nHyQu6ndpWTAXsiMsYyRKYdJdFgxGyJTinPw3jMUV1zPr1SyQXjeSqXfV4jZoZxadjiqpqG7yf3W3ThMBTVk9Zq",
  "key11": "331WFCEmKZiEeduwTVbfBKULSBj8p5StMnExph89Mk5nSVvZJS8q9XHu2HtFKQCdnCFVTFYhGT8e85SyB8AQBXff",
  "key12": "3xKAf2adevgCMBZsJJPAwzRaqNMAF1nS8mpjtRL59fEeLUV5LKMcUPs6bPhzbi9pXTXtQVTWmwYCqaFr4t93CJjP",
  "key13": "4CTjQHztEvTBEe5DjEEueG2XCT2UJjQbmF3qiZMHDq8X4kZSU5E2Jx2b3GaXVkgU7TTNxCie2s9JeFcThkMx67tm",
  "key14": "61jtjxQNEQrT1rHuwbKRPLo2fP5tAG89PpmQwdg5J5B21UsHduUf9YAFtk3wzoKkSjxPNJ8wX2nfC4NMzK9mUUvK",
  "key15": "3sVCFBVkpUct769mKZgCem45hn6oAdyicRgGRYuaZDydLSFxhbLGVFbRZyEzmnSTWU8q3UByi487fEtsHAPgh7jP",
  "key16": "34kJZLhNLapNE3WRQjRnN6ZoeCV63TxjhUwX6oMKAE9AWFg2PTPvvc9DCe9whqBofxKEPRdy72z6ew95EBdCvQ8f",
  "key17": "37BEpcQvWVWfDbMgj2mmif8e361X2gRXcyNZycxgnbkknarLvzyvCDWL4W9NwpUu3fqsLsPKWcvELGCeGiFHSNrH",
  "key18": "2bQc7EbexFuq77WFi3EdAL48rotM1BV9QiZtXtFCEdbjCkZKZonArcyKSc2Nwqabh6bcKsVyngnDWgkRgjdV4H81",
  "key19": "2Jw4985kH3fvBqnxFTRRXAcZ5MvcCzSTabLDzF6NAKepfuT3ZAUX9GvbUaCYrVG4de43TAxQCNzjkruM62GxiFGq",
  "key20": "3V4QSbocgkWYqhYXHXtdZHY2ypoGNubBPhMWwDpzjWLvcDecb2C3zeasa5pKtsmtmeSseKrQqYo9SiqtYd5oP922",
  "key21": "4DrnoVVvjcqniKHtYtD7ZAUVMQ1H6echM2EkVczfKhc1h2jYhjVHq5jbYTDcacjakSgXtruiH2iQDEXqeSfPkfcX",
  "key22": "4yrxWF8WBXrPEbcdpa8aJ4nC8MdLr9uBXUxesfNW86RnZxJDEDRGGnrKGFdXRhoQCMFaJ3zgfWvHzB5XCws7Uv3h",
  "key23": "24cdxgsiTgyuU2R6j62ffbQ2Xeo7VSckQjyn2qtKdFHLADM8uai9QV2UY6EvAc6PBRHETpqFubzFPNp1WZSj254d",
  "key24": "5wbWbiD156QYvepPvppbaLZRZxEnGg7DMoKnrVHXo8cbMcYqFtUZ5i6n6ETWgnqfTzjDkNcQWhQV4XGAf4z7MDGh",
  "key25": "Mi7v2vw3e1bzCd28ma8Aftc4B8PMC4rkrYQ1X7BgvS23qmVgJxaK153cpgoc1xgEbkeiYJCe2jTd5U37SVkib8c",
  "key26": "3Eky5VwZpUVAZeVwCUsbjbGsMArBoMXYYN64bXFT9BnnE4k91tqsEfGquAWVpSjMB3kniHa7B7e7XUL99V84FB1a",
  "key27": "2SSCi3pp7PRd1xa2cCeMnmuyx2sdrvRK4qw71ZUmfgszwLrCMDiDGBp7LJxG1n3tgvCNx3FMuC1JM8ajEeomCn8p",
  "key28": "2uVBKUah9G8LiodDf7VHgdmRfr2dbF2SgobFzstcvuYBsAv9ooeVC9K2zMHGvN2Q9SC5aawQ5kB6awYzS5VRXkw6",
  "key29": "3R92aRsss8Dcq5PFPgwUDTwXQmFTxsNsCWyk3zFi8PTZMoCz36kREj9bSh4SvYrbHPhkNmupB19sygc13jvy1H9y",
  "key30": "3nPJBRPQthHAk2KLpqTWAdSPoqkNEYsAdDq39tdfsVokjrZPfN1CtrXiipUwCtYDfKt64sxYgwdquLeuTW4LHhHD",
  "key31": "3L26WnMXUsfbafjKhXy9WXC3HtxhCtW2mtZrpDDpuUonna3nevckbXwGbuXtmzc7QNvyxhYSCCVfpkwQL3F7GXk9",
  "key32": "5ccWx2m5fetHRBX2wazbQJwnTF65U42Vg2hHC26Kbbk3Das3CxBo4fGhCf1aNts9exarnaFL3WhNdJ61K8KHjxAb",
  "key33": "5egdSH37E9vU8RixZScEerpMACXUoDzNGBah9cAb48c6qYXVcqjMDgBPRgRnTpBwEa6PJHUwdh82Z4CA15vkv5MU",
  "key34": "4sKK2zJuUxA99QmeyjowpfXMJ5YB57xzWAXTSF613WLvJni3cF3kBAG7yYdNViB7tNymGjJ3NttoWYZguoKbQi6z",
  "key35": "28Cu4uYMtNVNDAsWSGRyHjWArevEquXNwG9p7rBrMHKaDUBh4df4LyAzFT3guQYXSj2MF1wQFCoLcS6cTrd5tUoa",
  "key36": "3abkdBT1XQJPKjdYKyDeNYj6KiF2fcpBkn7aDYDFyrUZtjoc4rsAk2m4JCpQAQ49Nc8KNhdV1r1Gdd7hhnzfk5rt",
  "key37": "DDW85Swpu8HRBEFUB4LhpwdRtrA3aCMUGXCgvk7QKCAnSSdeoGJvjt8TfHLrKhqFzPhWAZacGmWnbjZAP9P2H2Q",
  "key38": "c4LCqpp17JSexJeNXxaq1oLkRmtouLhUs5MDevqUsAnmkLaw71sxmzjeHivvwUJDbR8kgGgJ4zMqkBzDa6PCWLR",
  "key39": "33p3WAuSgEQDumA6wa8roHs6hwELzhbTv28krXfKCN5ZevM2YhPvQQsGpnwcjmAG8vPtYp5PUAjoSArmpjC413FJ",
  "key40": "5f54SBMckotxpZ3of9oVuAJdmuE4Pzfhwv2b4oHvvzYgXDHKGwa75CPDrC2fPYypuRnYYNEhtnTDCTgPEouhGVRa",
  "key41": "4UWqMpov5NVMXokLqAxFZNJkGXiNa8MJLg7KtuEiEuizfzzyPMQqC17bsPWi7Mmg6PAefG5FULzzkydVr2jAMF6B",
  "key42": "4TcjtW1HW4R7aLpkNmLdxCE7MyrLowA2w7jS4gj1rRqeKGbbFegYBWCgXK2kZRSeU8rhtw2RqPh2f7g1diBeSJha",
  "key43": "4oa6cd7ot13PatHSXNbL9oxkFE1mqQWtx5pxuVvDS43ZUjK6mtQCF3NM58C3v57e6kDNSqRNwzNNhaazDd2Q8xv1",
  "key44": "2dqhnPY35JBV6r6ueDQ13CTe78RrudgYpo8Gbf2aan35XttyHQUYYx3nNzS9EmgeV3KFrfFiCWtbYxKso5K7t5fp"
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
