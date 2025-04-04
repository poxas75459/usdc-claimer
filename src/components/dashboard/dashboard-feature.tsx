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
    "3PwVxjBUJguGL4Q9WQmsibxLUkQTAPZ87HwJZMSRN5RtJHYbtfFwr6tePtKbRvCGbwDVZbCFi5JfXRo3zmutJLmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kw7Kk8hVtWjWNVtxzPFWhQtUqzSeMdBDRwEvGKfDX3QQBwMVpvho1HTUnAiPDKA3LpG22yrAgQaNUpjuziaXper",
  "key1": "5aP5EsX4shzcA7m41ramf4BHy62e1NAqYrkWGRTw436tB7ZWtNpjNAnv5TgenqXzWdjQYX69NQFbPRnpSDy6A7dZ",
  "key2": "5tYbVpWZcx6Z4R9WBztCGsVKVLNp7q3nH8aoeks8bNP6xCJgZqtaVAWg4m31TjxzbRYz1RQDecDKPSKSrezzsXtN",
  "key3": "2EThMA5CHoRrH6VKNDXBQcSkeF174u1gXv8UfP2STuhSs2X9afHK14vmByRvn1ayoKZY4aiPHwwLQ6T7xXV4Afbj",
  "key4": "P3CLWvnXnUhP5ES74zFBCW8s7ruMa4Zm863DWAoau3dKts2HQXyyonQSisQjGC1rJP8ExobsWkKKi2jrp8AV8Rd",
  "key5": "nLC9XKBikfkxbeyfNo1Z1PocP8Awjii6YPZceGUQTvNkZrg2TREcAuuVZpC8aHpxvZX4mgsB9ikyQMSiEG6enLt",
  "key6": "24xti3a3K781kB8Vt1XgATqoctZRyFmXeCf4UWcBn4ShmYXe1njmYNUrVzohWCAhyApHw2MUQ1DdtL5h2iNFe3oc",
  "key7": "4ipAQGHJppn9eKpaYNqJPiDiVxecMKLhwTDSVYRcZnDER42ojdD65rn6WhHa5iSFbPYTEHeeTa1DvnYY4awgTAWh",
  "key8": "2iVDZXxdvu7VwBcKFoJn4zCFJNRsoYEm8q8hV7t7gxmk4u3wKoHUEYhjsPV9u9mD2rzcqz3CzvBzoCdApRfpNCxw",
  "key9": "fLybTM388KKTH2tB76FiPUnCuESehjAkYzqDn6VXMKAZx6b8QEFCuaihCK2XGEV9PLSjZjfyuwTnSAvj1rwmkbC",
  "key10": "3jKwJGGmJXKxXPunHnr5HaqZC16xyg9nwovxvgZphjDaKYZcRzphds8KPASV2fZz1MkJwaDWkYZVCc313FvgJVMC",
  "key11": "23AgWAGKrJfY7JFKbpuYpgzhdBVrXF9fpysCo1c8c2mXXNDPaHTiqAanzKZdbGyvs5yXRwsewktBqhNoEuk62Z7Z",
  "key12": "YMy73Q9Uz9VR9PiGHQgTsk1uKB6fHhoDEDQ1aJBSdwTCbBJwxei4v2a3NNmLWUPfdSVgDd66e59W9kG8wz2Kf5N",
  "key13": "3roikBX3aYFzgrmrTkdUcTLzqyeeCY3shjKAkC4bTmL1YSKFTfwVMZdHSaUGdRKEFVVtbebfphXKNvab1v9ALebL",
  "key14": "2Han4g2gcv6YGfiRmbWjXtzf6phxaHL1GvEHVd7G7jSXnzDFRW7QQfrVGUV6JW5ZYzm5UffUvQJMbNFLriMLisrq",
  "key15": "4u3otYAZnYnvQ9E9fP2jacHZ64VYVucqHdqjPh3f3TQVhmuA6M4egmYmmB4BgepvaT9V9kEMP34EGX8Hgwbhh85J",
  "key16": "2FrtKQfJh59AtPaWQAPksyoV2n5s2TT7j4nBe83aE7QVPjN51MiVWwwikcNxpY6osDgMcaNcm4nhZ3FScrr3itSb",
  "key17": "21FengXDrePZKbkXaYQgkyjqPtCQJzEnaiW12xqJJykt6XfQo8fXF1cebePpksFnD48XCfgjLDSrL3HYhW1A4KoW",
  "key18": "2k4tarUhPsm6ZeXVTT5qpXndngMVR5FrEj89k8uyHpEQeW9DKxtYikKVPjp9mkYji5BfkacyEaqFLNgsscCxX1Ho",
  "key19": "5bYp5JUZhgq2u6KEUtk1mxTjUT5xPxqSUb17fDdH6gxx15pu1DG9XgNwVkz5kVZgRvYPzV4BFXEtaRaMbQFbHkhT",
  "key20": "NVtXLm6va3haJAgro54NrYrPQLw5Hto37KBv8ftPZi517wjJ5DVRAb2fCrhJ7rRyGmsu4eKinStsnHKmDtTP9RE",
  "key21": "5bvG8CKLyErd9TXAoaMvuvSEVHyRdsbs6HUPn7iK37hgXCeMd3zoiusgzJ1zmZT4BF8xb7TFBGwdD9ZNHZqMMXPR",
  "key22": "iCq2RoHqfLq3sgmTLYjb41NSqVNBA65U7WD7N34HRnCtbHMQ1W2XMCXJN2ubAei2YDti8A4xKSzrfvQ1P8kpEAP",
  "key23": "3srr7ZaPLXx7tUZaKppo2R9Vtuy5NQ7jLejbYYQSZmjbQ5AUcxWYmAi3XgDizeRRMoWmCXiY3yKs9Pjo6fZzaEq",
  "key24": "3oC2DRCS2qHeZ9CWg2zbBUnSJqKpiYYesjbbKmhU8UtGvENPzKUWjCPLdm863nPDK7W3JHi2bTL97G4VwE4jZzzT",
  "key25": "4Xzq5YSgAL7f9URGxbZWaj3V54SQT1Hernaq6nxtwWa8AuB5sDQee4S3nmVv6bZL9Wrh2FrJwe4aWd4bpcpFzP63",
  "key26": "3XwyQ7bXtyhEkNbLFZR51aXWx6uPWPJYYiwZTCQxAAyA4Z5EnT9cduuen5kG2jpncVpDSA93BYKQ6robgCwXkciM",
  "key27": "5nN9uFM89YefguwuJa7udmRTgRJMBV9c7uuT5a31wi2BXh6wU3Vryz8jPFcr5GWHdwyh6gQoS4cjCnE1K2vfM494",
  "key28": "5ARRAQbKPoF5HbaVQrdfqfzRZESrQAxM7AhxcuJ4U13iNSM8NgFvjq3dBcMyArmqHyqAivTS8b1FKSz2ctTqXUNZ",
  "key29": "4ozCE5NEqwTy53vdPyQM7oojUmf4YVVWBT2QRstyTmnJn3hbUAmqKQpZsVKN9uha5nd7UyiPfpLnTL6SqV9vrMGs",
  "key30": "5vyMsqRMpa5pgKE5fFbarKkQkW6sw1GuRsHJKdxB8qQG8m8Ajq1voJGewbj1aAACPNy78yBh7HGon8cAfwxJ8Kjj",
  "key31": "5wXz1edtn3B2t2WtWZhXu7w8NnqsVo1JbXk1aPxPZSxCSRmHcY5V3t3KdaCpcHsEWdqZa4CvHqN55R9sQ52fYc4e",
  "key32": "5uTXi6Zknd32ww9szpVDPHLbctynTLxyNSV5zo1uQEjbtfBsSfEfsUsx5UBjP1AZWMhLn8zTo2Tk5Rzc7NtSFPu6",
  "key33": "5ptYz6Gt1wZyxbhCw2is9UmjtX8UbxcwffuLhEfbFR4njstfzHzHUmRxFY9zYoUKwNq5KHfcaLBRsjq3nyHxMwTz",
  "key34": "3n4qfJNqsotAjMLtvawLsppAxmPArEzcb2mEaHDwKVqDF6Zy2ByVh2QRFFsvnqkZR55ocMtcVTyutTn7dFpdqCVr",
  "key35": "5z4XLbqSP8EisjXTYy19STRmMwrpMjxJDhNdL4SshyfmJannVeREh3Nxkf5AivnrDrjC5NhQgNsg9nUovFWSZJFp",
  "key36": "4BiESSvSip6qcT7zSHVrvFkwLkQjVd4QwQLYGMJukecQUheD44HsQTTMDKrhP49WkiUzCzS6wq499XNYDUCruX3Z",
  "key37": "3Niqygw2qshd1ZianTyFpCAvn9eNKE2H4j29ks5NTnWXqAQaY6xrUgQcxZBYvbAVXM5DxKd9rrt8qE8s8yJWmNLY",
  "key38": "2ky4rRzyrbp1ZdVPMt7LQhzbpo5izY2fiD58WwWWpmrQEuLYw4cCBmC6FVdoBLw5odUgWYBaEqPnmbnXMz7ETo99",
  "key39": "31QYCfsKCsJF6vPCJ4f9FSCx126K8suQXaoq1YQNuvAvedgH2h8bAauxexY4dUEkwxuPw2KVWzEXrhdj3dxHgpQe",
  "key40": "KiMX8mQUcSVeQdrvG2Ef8rgA7i97dKdwXGYvj5sLwxqVirWYkSBi5mvooQcW1pbcZCb6JDSKowdT1UV7PM8RCyr",
  "key41": "3Wp3KNofq69QoDcdRRVZoQ6szKyMyBaViFGGrSjaAW8pKfsw77e49TRfdaALfXUF6zLKDjovYWwAqYCcVXLb3LZU"
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
