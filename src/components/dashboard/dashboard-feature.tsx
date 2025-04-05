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
    "5aZtuiEhcC7JXA1ESaJTrzB54AZ6yMCRr9cyRwbzs7fZg9xqB82CBYWwHUcfx5PSxEoZoQzKgpnHCy5ARoXBmcJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qzvUsTfSioHeLvNYFvxL9WBDWo5MnxWFZyf256S8L5mymcQ821d9RMi2iic2oMoLhkJAjn6G6gQSmDAbLM6eE7",
  "key1": "3Dg76JJWquytqy7FrAvnk4DoP9dYLW3uJ6H2z8PtEycASahcnvq5oPwd1xX6j4pE9pJJzzuiYenuHPrnaqiNvxQi",
  "key2": "FJVWhiHz7ujenNRwri3V2TCzyDd9Y2FRbVUk9MtdA7vfbezNwM7os4samcA5cZt9aMQuXaW8W9pYu31XTWPKXLe",
  "key3": "Xkdx5JxEKbPdxd6te2mdswebvdrY6VM3etLaBALwLegwCPwJkVS4Bh1KzGfZmxNqY2Rs8exs8Xye6Cr2eMz7KLJ",
  "key4": "rXeoGT77oEbymFTHwnGwQ1ok48u84UvC1fV73zWsfeDDUhkwt3v4k93xEqyeacpqHPJsX3dqDwH6qnoPYvNCADf",
  "key5": "79KVb7skoPRSLTQ1z9ewpDLtnzEpX9sojiseTE1m4wEW1P9fwqWqtftnc9R24qivxRx5qYwTMAd9VkxaabwnwvV",
  "key6": "yhy48t2hEFtAsPsof27DwHU91mLNk2jxgRSUbmU2nTzPLGSnPaXuuEbZL3j3aWUF4Haw7HFCMfA5S7ZuSFKkcWe",
  "key7": "5u6swcaR9cMB6rhVUc4pFc3QEzvRq1w7F2sgZA9tzyxphjcyvU8RxF4XQiJUFYBrrCgVdMgCvrMNB7azPT5hoFHj",
  "key8": "3SLULiezyL4HNjgxdqZcANj6wmX4SKMfzPxzadvrz1gSbCwUH4nYLXodLQvHH26rFqu3FVEKu63d5GPnJsrzPaxK",
  "key9": "38djEzvBmQjUnr3LNDLUv3cLBDbTGo4C1n7LE1sTqJHbsdCek67xvAYGG2uCuLAUgNW2Srp2UuKKBVTGpE7hKUZw",
  "key10": "3KozG1VfsS5jS6hCz2AN2yiuzgHa4PWwjjNv3ZHuBQUZn29sCr82oi9WqSUnVd755MjyMUZShDnBDy9uM6Z6fB1b",
  "key11": "478uTfi1DtofoUeWh2CihxqpjVdfHYqDcA2PUydw8TedRYu8Zzzoka3Y39LnV22mZDv7rrXjiYd43N7YK3JcjFAY",
  "key12": "32ftQuYiBh1mkkR3TpzxiffoUPHVPFh6KMqjMCtN1ghnJzgBgbb5eYQtRMxVnrrmSMzpf9RVPVCMEUMZHvcV7Pdc",
  "key13": "4sLcmo5rHHHrs1u8eqZfqogEnP8FBwKa4jcTnfjMtThFpAdbe4W6Tejf9s8R7nyut9fbx97mujCGL2UhL6qhYvC",
  "key14": "2CrKek2NwxaMy6K73ndQkQQcP1FUq7SVzzU4c4JAZ7Ny9MtDTfdMpXrF3bfNMs9hcagdgXK7Q12AW5HziQV1gm52",
  "key15": "DcfDFNVH88rknuVNXK7d746sDRo6h6zTiygrByKzTdhW7baskzu71UZijn4R426ofX12ubTgYYYPpEHwQ91vQgW",
  "key16": "39D7qaHQj2oytpRV95p38EFmcWkFE1hYsidEYUgRS85LUdyPmN5MvNCffxZ6VdDWcFQ8BT1j31CHJwDNszy8F6D1",
  "key17": "2HJSEELkpip56ruBneAY4F9S2L6Zr8DJGRFCm5vuMEMMmdM4iKCDjdugJneaKihxEgG3CQFZbhqy739FBPsn4e6X",
  "key18": "yjos2ECrBEUcN6vkBoVTFdFPCLTUeEcUE3vaihf8dhipdr33v9uZRRqMmQBpuTYGmG1EX4MQAvCFsxhspCudGKq",
  "key19": "5kTR8YN4NVT1s3dYGvCmSuEjnSfzJr6BNEE69LVNtq2TVvbhzryCd3krGpPXTZWtjwyEgUnDzJq9mkDakpKAA2E2",
  "key20": "5k81qTueuWK1wHgrBoExGj3QZ2kfXQvAyCzV94KTL3bGGniVmkvMKPkjSkqoqvro6iSM6179cKEbPvB9vxVCQW5E",
  "key21": "4UaLQBsSg6EAQ7ifp1vQZWQ2nT1bu7TAiVW3AN8yAo62ibEULsgdATUz67U6sVJUvm6ff4ywzA9s348HEzr7SkZB",
  "key22": "5kjhbAmAT1pxzxKaWoGJDneY5MZF4rmgUvtxmpZGSterHS3dxbG8sVn88DLbamJYPJ9PiVfJySo2HYT6KGdMChgU",
  "key23": "2UVTStzmwsDpKNYEXZPURCanUAZupBYtLcaMcurnqkwaeX3LAeVDrBQMnHfvcxwPWTbjdxK2waqUP8FMLU6yaQ9e",
  "key24": "irVUuqpASXFh2ZmZEH4J9EkmWY9CxvnnkkD5pcEJCpDHKcKg9ZXKvKxPbaRmLSWwV4S4QoLRKpCcyPjVwJTEPPS",
  "key25": "2zVD3TWgq7xo9gHXjADDxYwuVkeM9jwnCBF1WnvRXCw2HLbniaSiavTLj88V3SDheqLZVhUWkY6Nsk9QYGfYPhc6",
  "key26": "4vc2mwHvLriqsu8Pkgk8tQnQiJnEkhstyWH3jJCLGrt5TGFyRhSkgNHi9spRt2KoN7Mw2iwe1fVJUqZRPpdpsZSR"
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
