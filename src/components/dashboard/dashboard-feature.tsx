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
    "4SJUjom4MrbY9iCUSVgpQbUFKLsNNAKVUFMR3gAj5Eiwaf2cUcsDMrL7P4Zq7gvz4nAxWAmGMu4ovrCUKg6mKNbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RkgL8KCB2QKJkXbWLBkJ3HRKqARqJe6VxKCnhHUf935vtbCoVNoecNFYcP3LKwtcY14j9UHJsnnRCYVxXQNFpfA",
  "key1": "2wamvkNaSYaB5oj4kzdPgnshdruY9ENtFiuXMajiunQPYCuTvBerPN4bYxWTJ3xHpsRNSadM11qstyiMNx1amf7T",
  "key2": "2iEmZMfX9sAu8krFXzizjCn6UVyuftpZLr2qHxTH4F1mHpzZsoi3Ds8Sm4Fsk3VH9bWmanwMxh3QBvSio5jMucBW",
  "key3": "2Demp1RUJj5Jd1YgfPd3YJ7axu6xDrMvyoDxcK9gPm6WcGHt5AQBEBXxaJK5YZUtmYdtJaXTXfMqjEUQG5aP8czF",
  "key4": "3To5agHtTJmA7as3MT7WLv2P6BAJTca9FoM8w29xSy2gMtcBnCpeDk4826gEsV13DRVmgNbNriwB81JVhotnah1E",
  "key5": "4jSL6knFueL8tFxuvABJeuHNc7yp47CQeCZAupA9hcQW5uMFDoiUvDegqCGhpSZ788DhmkE8KbmXh9owbxMehZRi",
  "key6": "qNvb5D8KZx89B9LpNcEqkPhnDttusZKnNNEAsiJnQ1pHPnZ81X2pb5cBmdBXhtbUHJ3exy24wLe9GVVmYQ6eknL",
  "key7": "29oaraDsDY5jHba6j7HcdsngNmJ68w55TEeTLg3edvqDFGXqUZsXt2MseAUMf1kLXfHXJNGkHD6nuiDLEaNtsX44",
  "key8": "nPGLcsKn2VnMarXiPwq1fuCxYjYxmjM8eSnariemaipg52Z1UTnxWjHAYLokAXF9d46znjVendG9HETznjSzyyu",
  "key9": "44zwbV6eBCoKTZs8d4j5WzfnJaukya4RRr5mdAxpGG7n4Fu4S5GBhWXWsUv3c7GUEsriozbji2gBikE2Tet6Xaoe",
  "key10": "t2Wsk5goMBYdVF5agL2byZ1RH3HSM9ctyp9EHPmQ5GvRJy9CqxuyMnr7cLfcSx7hAxY2g6bd6aVGj2jR6dg1Noi",
  "key11": "5RiQ7DYoVEwafz35ejFunadfXCWsMRZkNLAnoxhycEHu6r7Ph3s4RtiPp9LAhDujxLXYzc2f8FqbtfvZSaWZf1j2",
  "key12": "3gXDcAXxmMbDuNyymDyt592QovQuTfAkkDaUDAbHgvjSpd59HLfo6N7fPpyV9vyxRFSpd92VfdCsahHye2vqjx1v",
  "key13": "3gefjRTPHdHkpkPKykfKnmjjUnsUUyZvj5kJJ39aPfCu9GQL3LdTj4ZrvefwitcK4JBwSciSYGPhQj7xs8an9QTg",
  "key14": "RZcw1ShTM79mRK9b5DJCKoxYR9cvy2jkqQfoo22yJH3ts4ZGuayrLK145dRtaREGQdipMDFhavDVX9fMWHdJKtj",
  "key15": "2zj1dCTyD8kPDMBfTKRDDQBY9GNZg4GTJWAd4Xfwjo5CgvyAmX7zP7UvtpVfPzPdi9EoeFHuZbp9CnGTQoiNcTYE",
  "key16": "26uTsJAKfLagYsywXdD2p1c83F41BkBEjGGtLuATxwQeq8tPa5uZCz1bAz3WLNNyAv1kBEpeWDTZNh5S7qggB2LC",
  "key17": "47s3BDcTFJyzVkntRiG2WwxzhVZ9RHhhRGpFTbqJddttAYGmmEb7NXcbPQRKsK8t64t2wjTK8LKN6Dy9o9dxXxwo",
  "key18": "3jcnQQp7pN6D1QUL5Am7RsQWuaReUqNiGHzSkA1yMbbsF3EKTnnnvhx4kcgagL8YYy1VyQB6mBRisYKFwBaAYHcH",
  "key19": "4a5UuCZJzGNLAE33zEd6xtFrZYGQydpYyaTknHtZJkeznpGgqnpkhPXpTx1J5EcncBVf2MxCEJBuLkPnZBXY16kS",
  "key20": "vyTbdFG8gzbAoCULtZ7AKEou3GTg9in6tks5PAo7LkX8uWmULWkuipgQ7xrwVXCBJRpqdV9wg7Ki9Fxzbm2rR31",
  "key21": "4fPfCaW6btSnTiT7VYoTFbgTGwVNRd9JfPufJLb7KRAyqK3pRpR7C5b5qUBSvHpZk5keqL1QWzdEBWARDbTSUGJR",
  "key22": "5DUwsc8rWStUKiyko6abH5CWbRNVM2mBKxZXHursdhsUmQvdDrkTHbiCTDCTorVQh2wEe64AnqKFbDxdKLgDjQSt",
  "key23": "384e11wNfB87Pn85mQL8T9y6xd1Pw8oDZAgFGou21u5rXe3hnv3XP4idAvxKA6HBcL4pfKUrqPAk2BSQogvQox5J",
  "key24": "3DFeSRUqrb7NWnsC88ctxLdg61vnM3Yp1TWCJcvyVrT9HQzhbtnsSMAd24FxLL6dmcMp79gyjrjkJv1gDfNc9E95",
  "key25": "4waRvdH9CxwRpGFvJxghmbq6ZUmpbPS2TYG4DYMFyPvyLCLhEKYkv6BkHdkbiuPECaTkhAA6VG5rZzAoqq1sEhXH",
  "key26": "3ky5yk6wnE986KLxaEE4rbtXgXoJLPLDakpQzWV1MgWT7DS9eWgnkVWiF3TngiiReVLGE4wBym8CmvokoGsSdFDm",
  "key27": "281U2HgPEQB2nqAdbTAfXNi7VutypgBbuBmfoAtyv6eSCXaAAAXhL8e8B5SrRjtoCTH5uZQSRfLzNRwCEnN74Q3N",
  "key28": "5UDoKcxYU5XSPErKiMyqqM5YoX11Jzx8MfsAMkKQqUwmS25o6qGTopcG3dRaNM41QcX4rc71kxpndSFpbHtMcLTE",
  "key29": "2ZAC13epbqoRuXfDDCWsKR7JRcNiFfF32ksAsSdotSjWU6T7XSZaVzYcvQxNTmsq4PTuECRJDFLkKmtusXPCPQjz",
  "key30": "2dFN7qLUDcokQSyLrxTpLw4eLzAo6oDJGBRC2KKQbYD7FAWBV6Dgyu9eXTsNPdLuXNw4R6Tv5EHCWqNAJNf8FREU",
  "key31": "q4VJxiRmC13vjovd1N899vNvrZLLs7SMudQFMWHmHwVdTmHMN8nUSFW7UV4Pj1aavVyLwVfrVG9PY5MBy9nSaTM",
  "key32": "2v8NQMntb35c48XZViAzS3ANsc66XctxuiEnyRUNSmSCib63P8pcWVyLnFipgEQDSu6tDngEURXPe9UfPAqvUNSS",
  "key33": "2s4sWXzXpUWz9XLqXLFWMng7FD6GRvK38mSfpkmtY72yqA3qchGjpRVTXJwMnwvMaSnzHeWZST65j56cgz7pzsSn",
  "key34": "2wYrzaMcSiFgP9XJwc7NXfeiQ6jweLdKd4Nx8DjZrWqgQrywsMLntxW5knXbYWnrjRbgkj8GN9Gjmzpg8376crKq",
  "key35": "4rKXZU4rLDh2TopH6R59FSzaynaMMnLK2FJfW4VC6C4QytGBLcFzxTnc949krVC2S3p5hCaGtHnrMWX83S8i9Yy9",
  "key36": "KhMt1zSVvXYrqy9C6VK11Ks4BzAL5pF9UtPeBU3LePMDiknnTPT26oLrrMJD7fTtcwnAgRp5GLtxqNiu111QZqu",
  "key37": "2AyyuVNVRTikQ7ayaN9EDcpMYJWbcVYZDFsRdZkWExx4cmWZ5hPViw7JRyYAMX3bjuoVvYzRf7jK6n9uuJp2bwyV",
  "key38": "4kYwuEQSJxJETa4Q8cxRgGNx7z1ToECs4diCNGWCDHA8DpTTTxS7kMmrKuXkPRdkKNdRPMJt73id5s4iiTnC2yaU",
  "key39": "2fzgBe8dMWro2dTrxj5LPQEJxyaM2rXjWZz91PN7Wg3toR2oA9XbiFKob3vqVixHwCxqr2zje2CsxLMrFmTFeZPg",
  "key40": "26AtmqRwLjiWSr6L3zbg75jdLWHM3HQYeUTQKqfGUSjTwNWJWV7uxBVxNUEhdCQa8bpxEq21TqgTof4ct2tCvz9N",
  "key41": "ymVeYvme65yJ4x7LokGicggxk3HunxTukdT7K35eG6YuQqbzEPJMEb6UPGdYLQjLeDLh3VJtdasbfxbKW5moiqg"
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
