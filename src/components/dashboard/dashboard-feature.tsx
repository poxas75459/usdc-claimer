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
    "5A43FjTpzEj7X7B9Gr9NaAKz3NF4VWxLZTXpktkQbcLDmHD3o1pbUUtXU8nVQkzEtZvm8jvV5hVxxwkDdvdfrTKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhrgDCRp66C8xh18x8j7evtEU7rQWcJ4Xc3xgNKWk3xj38NMMKUFsX5XFvx5vTrqf4gdmRB4v5wt6tPe4oB77Mp",
  "key1": "334AfF1KBAu8wJxEw1bQqsLPM95XYUUSdUa4pPDkCpALYvvjhRmSq5hfwEhE3dRU2YzrxoZvb8iCG17MczmYaUTv",
  "key2": "3sGkffXPaUVUiMrApWZbmwm9Xtsq17oS6846ygb9wVNcEBsPiJ9Z3ewvNsnHMwEitMxm9Yz5ZUp15doZq5vfSUoS",
  "key3": "3w6zWuNjrY5bENPBqggbec7rG2XLxnqqAFMEKFtSawndeVQyyviuHCm1YQuSpKHH7Bmeb91PfFBgMvRLot25GDR6",
  "key4": "2VYQ2psSG8W6iLFqZjbNeL8F1exfRQHAoftQNeNNvVetWRg4QouRRut7M8wxLrxHjrqBq6diZjPGKqvS8ALMQPzv",
  "key5": "4e4tfBdL2QH2JhBWAcE5SdSNu4Cm6LDro8t2864Bj5Mz4V6kDfbHZYEYMNXc6HEGvte2W6RvMGumwmpYfLaf5UP9",
  "key6": "4oyau74mtCJwgH2vxqJS8Bi9pRx5a4wdkZP6YfuuPmJLjSJsMwCJv8wvEEmFxNfxfvn9isKB11sMZ8savDvdEJ1F",
  "key7": "4FLtbkuqqbHVdZJ5tQ4tocusqpyDvLJiBBf6BJS5Cs2KpTHCenThm4PqyfhGgs6wfvXP26GbAW4MzvL84Juh5mdy",
  "key8": "27vvVr5dHhxBsaoZHbYeEJLTdRTgUhJ4quFmp4hLC83JtLkyihQkPik3P9nUQQSzcPr5HHFtVGs4MLF4PfDMan3Y",
  "key9": "25Hysbqsms7wyqS6gTVbSzGPhUk52wCybHTQAbkmfGuAj6ibkBdApokF4K242FNML2MXF6nNne38J1AnJq5hoXK3",
  "key10": "3jnApztKAKXFHNc16dQ7Yr8thYTk1HHoZZnXYGQNpcGxGMUjcKG4U9hkXzedF9Sgnk1gRSqAuG6ayHjgXBgdRn3z",
  "key11": "3qa89VRKgNRmfEXyef7JcDu1zbYSVrVV92UZWTrNWmCdwXbV2T9LFxp1jpCJJ3iteruVk4pHvptLjNrWz47MfwTC",
  "key12": "64HbdrN3An9XGVsKv7GB1NVADJmhv7efSNU5VooWiAMi9Mzp7bmDCrrMU8KC1XWPXH2MyomezEhGpHHnf5Mn5NRC",
  "key13": "5s9BP2JhcwEtXjcw7PNHX34N9b4BXPf29ANjsYt5JB21z1VLeBeppsRTjLfpW2XqU4ghPVraQSojm22PTe9sSXFN",
  "key14": "28YHAPAczzX5JNuZP9DQjRR6HUEAr1Me1HBuig5k2cq42V2C9W81F3Rx9a2pKgaL2HXkEbMAZrAHDPUUwGd5g7QF",
  "key15": "5wCEvCLkdhNZcF6GgeAHwdW6y1yMX6woqsaHKmDnytQFWQVFv4VVtQFRdsPh1g5uzxXfZcdjf8uYscy2Mj7vMWhi",
  "key16": "2dxNGp8ZpzZmUwoFm2ejBp1MrVqPomUDTjuFBgdpDaEii68FMsCeVupp2ZQTJayATUSD3LzdohPaD22sPcBVEJQ4",
  "key17": "q9AEV3ZJJ8h4nrUHgdscKVW11RAhhGxyrQEFgMFak1JFcwpZVocoVmQreFtDTM8UvNz1HzE4wJWeokdyweqo7Ds",
  "key18": "2u6ZbZrnbv7ACdmsjZv2do8oDk5kwoawrBQ9msg9RbGrd95LQXRbfm9nvXJVWkk7rnuGkDaqsL6okLFYJfUcaiba",
  "key19": "5sP5tYXdBNmvDHcYAnpfox3yjhxRwUymQHxWxCnqGkpofWCVUjaxRjVKk49qbEPcr8NJ4SfvgAo7v5GgQZD2Pbon",
  "key20": "5y3QgssUoRbGJyeKFy4ueJvJErvwjdaVmuuyKoYZ6Jdb9sm1xMhfnc6HFd2NZBGFsmC7eHmYicvnndaAa9C8JLTn",
  "key21": "5EdjPybcyKH1NfQeoFXzLwddQuCcj6JJKPjkSnD3gWf2xS3wFHUE2XbWTZPzrHFgCY5doLRuCdGS2jdfx11T1bXc",
  "key22": "4cv1vXSgNfmCsad5qnGWFsYNEizy42phUwCVx3yRP7k2k3VKuCGFvBBHp2wPUnqRhvX43ZhxMtKkD2RbSLLzLMag",
  "key23": "T7oohCC1v7MwqqHaoySPNN4H3Ly4wKJBCb9HSJH3pJ87eVkqFVeKRkje8zjRRr4vfoJKLRjecgqd9FHSMf8gEzS",
  "key24": "5qrJ1eNo6mbrR9KC7bczTHhzk5EzFZ6FKtKE1dTZErdXJKspFLJgaB7kega6VDDyfdk1GFcFxmUKe7Xc25HM3b1V",
  "key25": "51iR2USe5dzJWEF8kqnBgCjZt4n22DQKwf3vs74166cpmsWvvg82pVay8mnnR7jaLUsyJpVJAcLxoqQkQHh99E4h",
  "key26": "4f5q3shx8QxwYDL2VG4KuSiGsV11gDf3CvJHMqaHPJBymGaGbDtmyp57EVVNtGXx168QEGA5Xg7X9Y7SaqSGWGDa",
  "key27": "2cmvUpBFVQEUxBjV4SD2nJjfmgaWpf4M6cUBH2dttXs5bkcTcJ81SMw5KUuoECPGGg5w38BxqEBbc8D3HvG5JJPq",
  "key28": "yqENU5fzj42iX6Fmdz6H3S3HXhTnSh3RA2iDtWjRFJUeS3GKZWPCNAZru5TSZ766Cwr4rA7P5uTdNhLLyP8cQZM",
  "key29": "3eVDHs8kY5C3pyq9R3J5drCQccAEp6W4fTBcTwjJztez27baeTqKQBsiQ6iFevfzFn7tVJhSqNPUCjwdD4DeKRMx",
  "key30": "4qHxH4Zorvjiz8a3d42Cq4eoBGRYp9L7mxhxKCpV3EHSxEcQsHgHZpTJTs4V2HJryvTo94vRDfN8NpNcDwjSnbF",
  "key31": "XBYVZDqQugGUKAT5ZAY6xMPzujUtdtVVdQePWVWWDvZ4MgP7VL3RmCEbC46XUHp35FWjN6Z4Y8WbttGY8EE9qCM"
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
