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
    "5xWn9CXMBZoBSejG6sjgrCLLvLgu27Jmx8ZNp1dfm8W5pPfaQS2ByAGh7g1ouyEcHV6MycjhRxgn2ecpEZ26q8rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36VYZ1vkNDbJ8VPhYDpExxQaBWigD3EqzbRBH2k8mLPe2hYf6CAqydGR6JfxCTXgHcpT8n3V6yHix7v62nZL91L2",
  "key1": "5w37Zt2XnDRCttXWQkWhbtwu9rapBUcY2ioDQahi5HJowLTUe52jBo14XqPmGSNXHzquptWpHBicS9gK9g12AiBu",
  "key2": "5fzmWiMA41CcaqpAfrhWpoWj4wHGcTWUtVFut1JGGpyshobow7s4o1jWciduL8X2pkYehiM6Db5JUee4fXdWKYHg",
  "key3": "HLpbDohXAHdrLwFFQvp4ooSBHRnqQveibfMYEkfCzf2MVNHVb7ZUKjybmWEBRjAoFAfw9hweqtrYXLjcmxxJnah",
  "key4": "56Kin8bYRwMGiTSgpVrFmxxk4QVuHoAts38btKANdZPFs5LiJ3EoZJPcaHn6cTfBiGfTcG7pJexWJ85CmwJ8sM1B",
  "key5": "2emR4Az8FLDnsVWuaW65y4XZms3Voa6ijdbUzzVUt9sjG3pkavBfs9e3hyAB8sbDegMdG6KuApdvAhtUKGoPWrep",
  "key6": "2hSsxS4p5Ty4Puj28JrdBWtjZrak2rw6Nhr4qs49kC4bLH2BdYq1Z3tmdZHJoFGc7YSF78vyqbgKYChjgkTwxUQr",
  "key7": "5CzLKFduDSVr6zz39VTn37nVP39beAun55VosmPmPpoGFzBXXeTpPJ16aFe2G9B9UXitifieLiNGtj1wNbhmBhEn",
  "key8": "2fNFNd6M6AE3kkKFvm2yGMqvSKDC3fbWvt867cSzTewYApeuvUga6sjvv7W92UivuAwjhVmsJYrCwTxzLKrg8xC3",
  "key9": "4DWzrqyNpBd5XRK8mthQHzz6KzWBzTbUqwkGPePvEpg9CU1xcyMR1HBuvbwtL7fjwpsjQcKvrsbNigL18cv3Zbno",
  "key10": "5p1Fr5C47stzrYS8UbLjzPunkEwjqLCJbzRf5kY7rrUHqgokEBx51b9CeuNVjw6if9A3Cmdpzve92yZBWGsFCqV5",
  "key11": "4vc2WwNMdTovFN9mVj8oaB1m6JWj1PamTUwXfg39TTx14SZgztSBr56zgQ7V9QfMTf2bqmBpAmBhfsG3ug7jWbHF",
  "key12": "2dunXWJBDNTbPxxgg5eNpQL5DeFbeDsnvHeESmmE4CYKMQ1uVTcyhABYLrn2HJNAXELJSvqbXTjo57B4QRssskGH",
  "key13": "2BTdqpkzvyfmQ3MhaqWRBP6mPxHbH4XfCWwmQQDXxYpVNcEDx4trTo4vam5B79vZgdxQM419jrZPbbXekdCrkbb7",
  "key14": "47DiDUsYVsPtjwKSGwS1vyRoror3TVtUcm7ikT1XV2zqGCzvFAv3haQpN5BkdUNsdv7tmLLGpNoLQq7KANCQCCEQ",
  "key15": "4awWpVvyvVyev6bnjyStG5WPJezA9fbsArvWWZTnGsKLfo1WuDub5MvSfyENRgn27cUvT1TuLriL8dhDjeE6kSk8",
  "key16": "4D9zXjPka6ThFg31Nwh6R2PREYYZpnnHT8v9VbmkePscwJdNfP3vz35HTTYFqh4zoo1dJmuThx6zSkwoxZTh8rHn",
  "key17": "56d9JftTw5LVSWpggzSqDea4FAmhqkLcVn2WVHg9PPwZQpqmng7N5Lc8AQedt3bJg8oxS4ysLzRDhg3B6nUVEcaB",
  "key18": "3n2oy5N78wdfyQVdeoxb7GngEysWNbkWzz5ZsXSBUNQQ6HuLtsBqer9ibhRKUS3Gqh5ByXep4rWGPPbNnqj4Fa4B",
  "key19": "74PfVgz5ALFhMCzEHgoUPYFVxXUjyUMvtnvU4KJZ6MzKsH1y5rEiH68gAxL2iahGc28tz4rZnabxwbLvyBXprBU",
  "key20": "2fZUJCDpmx7f6K1krtytD9VtFPSbaMdi8vzGqUVJ4oYSoVQTKWst5CRsfUWeW5qhyuqTwBDam5iVPsirkAegS1Kq",
  "key21": "mQGYaPQKYu8gkrurDX71Vqtv6kxS9Ua9nSARsAQyRHn49V1oWEx7A26y2XFVzHDmDnmK9VusC48XJJJQFpVHMDo",
  "key22": "3nUJBCjW1XAYMpfGS9o4C2VCRu3X4ukvLDA8jdNTBZLW2RWUDDSff7qExzhUPRgoVXHRShqP4fjeTXHDW2LZ2ULT",
  "key23": "3eVtPxqrrVn8WLKG2UFGfan1hruPgCqebVHMGE4MXzpJLw7E5VCeyHA6iVuqEyH4CCxi64SGhyYMDT6Xhmy279qx",
  "key24": "4q3Bvn61wkxHHurjVXt9QDgEyR9c54B24TzAM2Tc2aiGVfwPB1mSo4ik1qNHcDSJFPUxGNKcZZAJTUeW63JNwpjS",
  "key25": "2saxJt5BVT2e9GGfHL1HXapzdSoo4BHrnHpxET1jQDug6rWmdoZZnUst1yBSCb6EdMMWKh9vaEc4m8XLeU3x9hh9",
  "key26": "3GMBx8MNxyjY3HxskrET4J5khMWmjpRRrCm4Xcj3E6ajLVvnWx9CrsZyqAhdC5gBSJYVeAT88N7TQfQLERuWzMcc",
  "key27": "2maRHdZHHttKiZVsx28wFwAphgX2feD9sVwV3W2XLfKRSqYNLZGtKLQN5dzDR5d81ofM53bwAYYt6vziBPZqjLYi",
  "key28": "37mULtVsTHovynpWEKMxKwwiaMV7x5Ez3eVe522MkRH89jswe1SK2b9rBcBx8BhZ7jmXhEoxBr2h9Kh2Fdf5SuQM",
  "key29": "4aXbFbRwiDSYXm4J6xkZNPuaT4Mx6TzF19hmjyy9HVU91BXU9KoUtaQUKfME9ULf9Tzptn1AuW8zXuAs98APUiRr",
  "key30": "z2v2udXGeZivmQYpUTRxU274wqZcwLahtEVbuCij4ohQWu7dKKihcTG7keSY3S3E6AhHFYARquJix972RHW8xA4",
  "key31": "ZaNxiFijmm3de6SL5YPiouBAYKmNjHKwfM7xHimkjPvhyNKB4Hdv9F9auLgFuDJLkMybSXdSjKCQXFZgbjd8NMy",
  "key32": "66kSSUTRYLwHFro6i3DJEkeDQ7FriVtvcZTKod1CpQXzm3tiwXwWm26KzKPkgDjZEK6aRD6QD8LByztCNXR6Y6Jw",
  "key33": "3LZFh3mF2faDeTvC8ray2hpyfS9EREqGqkryKERSTprM9n9VW9SL6wtGia4BEaFdxGQmYjcinix5XKsbSrsz5T22",
  "key34": "5h6iNzdDiGSXUXxWWTKxC7tm7bMQJMf6JSg7P9CF5XQdrm437VzxnGX7rUBhjenbwtgckK3Lz2voZAwtmGgsJ5RY",
  "key35": "mYX65kif8AZGXMuiwSGkVuWzQbXKGCN1hZfi5Vr8onhz7dgAXU6RQJkJSCpQz47982dxd599gT6L46CubApwvNg",
  "key36": "64oVM3EJkAQd6CoUnPFD9bCBZd1bd7K9fLVp4LTtGPZ3Mfbe1AqpTgcqmcaFe5jhWikyB5EBQvbJBEvBXEzLkybp",
  "key37": "UG1NWvSwgwDtiWPk5efS6gfLNYk1uSMqvaKvqnmbxf73i3TyVHPFhsPCb9srkcKpQJbYS85JP5iazJsX8eBzUza",
  "key38": "4p4U4GG4RAApTpHiKt144VT5MpoDEBxeWuFeeDwpUXuUMcGikHake8h9S1dcaDAGQChL9Vo3h4uKGTaPrecwoN6A",
  "key39": "55hc3KD4g6367LVmoQrN25cyxfMm1u7TWL1PC7C8GKthcqEFWXcbv3i7AaUrCEbMcsyUvELAfzKZVvMhFCTsKddX"
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
