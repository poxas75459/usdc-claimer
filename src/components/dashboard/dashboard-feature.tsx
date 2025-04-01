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
    "57jk2JTV9EZ5GcQqHosJnKX1LDE1NThGEgjkncPSkjP52oXMC8zrd6UUL6S35PyL323m43CnEo7yBg76pgj8VWsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GosYgTP2vXbdmyjiS2idZerb2kPTtGmXYSNiG7rv6FmrZVCgiRQB459KZ1JAno9gQnUGF15ft4FpqR6MkSkgQYu",
  "key1": "2Uxjt5Vu38r9Zd8274DndevouTrSNEM3Pu5g8Dpoi5y2DoLqZM7LkD2y4wcGduUHVxqKQco8R1XkkMsoNNXLKyT2",
  "key2": "3vAiy4QcrByZvcGxbHbor2WjbcCde9mHf7n9isA8YCT1rfGcWzyaaWDhDSNb1AMvyrhGf7EirZ1nTpz7qUTBfmuu",
  "key3": "5YTmHe3PkRf816NzwgE2ymFyr8Miko6raPNsLtsYfzEEa6k7KKRPZveqvJhZFf4VKPF6raB3Q4FrkeF5JKb4kmwk",
  "key4": "5weUxwaq5e5hBUChfCW1ETAT28CeiTX1GZmqfTn9VeqM3LG6Kda1mcQ5Lj35fud3nKsB6G4zKeRNkNC7oBM86P4x",
  "key5": "VwHHvGQa7wSF6UNRfZ5BrPe69MnRFKyb5rmAYQhrBHMA6ehBCtrswNtVynU3wUVFtwm5xfXSejEx7gRiFFvE4gv",
  "key6": "5dyFsiJJyK7cwhVjNjU6dgDsQUpgEsjqEXb5wG3LatgqA3oFxhS1SUqrUJspyWfb9PNeDWafa6FoYoe1bqYVRCT5",
  "key7": "24tJ3HKe4xibT5zJNWvL2puG4hperkKecY9tE9cKcQSaGf9CwAc6K6goVSt6f9TEiwyry5cs16biC2qrRMfnKes9",
  "key8": "2txnXfHWE5TLFqpAf68xYj8PTFMHer5EvJF3Q3Wff3YSTDhP8GJSavBCiS2UZS6oNf6YnZGPpQ9FUB4ALUNCDHHH",
  "key9": "4T2YyZ1zESUhmLyezGmt2xJxzPJr6ibzioxi3mBq4mvjcCEyxdQMYUiuhbk6STdi8hnZtLRULpWWBfqR7Wgt5aPD",
  "key10": "5ZCibT3EqhjgJYcJTwsi6NWxGXDszYE2KVBe4WJGTocFdYvFigm8rwfQEgaDKBMjRphQ4AYzSRDdJ4Cnn32M1HPT",
  "key11": "4AjqfZHf82cVnDA7yt5auU3UqtTQG74jLFQhjbAPbiFG12ZFucHDZV1bUpaAZFEFMMRP3ab1wYHGLgUP2ntgoCr6",
  "key12": "3ubuJSSwPL5nkuPvUpftxHTmreP6vFYZbuxVeeaMVaET3WH5GDwuYfEvKv2VzDeDgAACZDSxPoHRQQDTFd8MohTb",
  "key13": "39VqJ9uJmZ5nQoGV7CQ5BkPvurEZPhZFWWcxeavmWEtgCecwrUJkxrLen1rWkwsc1cH55MKDNNPXsB8RFAZ5JtqB",
  "key14": "3rP7qhhszWqqiTaS512T3q6jTftsPNRPBgRgi3nDhpxgff2KRS7FrbqJmGFJewK3ety4gdyBWoF3A2DMHJjCLTt4",
  "key15": "34oKQ9JRBhomSGSvPbpLvHVyF85cu3n1u7JTDX7k9uBCZhzzqkdVQXooEvHTZVeE1YrdinsQBjchza2trZ2xp9wE",
  "key16": "4C4BDmyyR2425xaS478BtsNvqSpWPSQPUH6jhnj9HSPGf2QDyjBaK4BRWSYvJ9wuwTUqSSFSKdLVZuipVWP3g1BG",
  "key17": "5TJw1Rn2hWEfC532SbHwijhGrLHir2PNahZBaqTja6U4jiQwe8utE7a4FijXSkzUpf28j5iMJyGCmfjwuKhbxsYu",
  "key18": "58hcaXWunYWWf9PM1XXhfeR66CXcat5wJs8TDSG8evo5U2LfRcDhBKPLYMuT4BTsuLTV3NLZuQgH3iuZUyRxiQWc",
  "key19": "T9nV2CgQfHyomtiE4qiu1nCktDHQcfATKXj9hurikPKsMs4pXXqj4uX3du8bpyejm12bvLVJ4ihUadJPf4PiyQF",
  "key20": "ejEfPtb4m9fTNn6uYLNupPodADCtPEySMfaydgo2zLbsksuzwhYeSChR8aafivJh62NQp2yn1fRR7bq1YWJ6Nx9",
  "key21": "671Sv4Gm2SY2Vkx5ySPzoZ1cAYLWFXMwJfftCYsQujoL3XZHp8oC2ZXDkycFZVJpSPQJGiPYvg7xnfP5rdvKf4Pq",
  "key22": "4azJEToiCmXUifcf4bz5k4U5Ds26A6CdW1PbqkFvZtJxdpLbbiqKUNzzDs3LcDCbZj1za6RHmhGyKj1xivbJzaDU",
  "key23": "V4BuvSZtnjnHPeD521HQEBEcLrmcvrgC1kjMgGd1viQAohwY872jH9nWRYzXPEj1KnogAFfok5p2zDXeUYMPzkZ",
  "key24": "4cJvish5UmCbQPgQupobC98Kcr19XiMjZj6ZKSArVxzMLF2PVATfHovPdBuk3bxUuHnkj4zJWUYgH93GZiUiuBzF",
  "key25": "5huAFDBkrEdeMnwQmbNMHS8X7hojAzN4KiKFNieJAj2F6ZQznq95BeNArMzXP2dJEf5Nfh9yFtt6YNRPWaL8BxTa",
  "key26": "5eSPHvaB9vux8GM9nUekZZJm1AswTvXcjgm4N1hZRWTWA2LNo24b8viLAwiiKCuPBGRSWuKWdDZDdPrPCvrm1tHj",
  "key27": "4NbiotmX1kLAaCgz8aYEb925xTi8GiPNd1jswmBtv5kk2jreX1kyVspSGHFR9fKSgciCH97Lvc9rHUyysVTbFXrK",
  "key28": "5hoyrZXk4NETXtpjgkyBgHaVcvsZ2ZW3bgNfcSCrpJajW1QhgfHPvX41goY9MJUgJBjW47KjvYLhLV4bCjoBsMPY",
  "key29": "2S9RUP9DSsPHZv2VDnsv8ArxiGhTrTYBmGmGLRhkMqDNvqaJviC2a9gpKVdAF7oHrCE2cqdhzK9Lu7UkDYQZcA6D"
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
