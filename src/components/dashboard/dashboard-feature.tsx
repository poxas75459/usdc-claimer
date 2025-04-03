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
    "5M1PavTEciX513VPGGHqMjmpGR3pZkeADhcrcas6FQyM9tGKbMGgBVt9cp2VdhUXyeWiPRcjhmhntYMDLJw2xUTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3STt32imWxqhADD3bh3V3aFkPTu4wNcYphStJPR54mSGsZcRz4UKvVydf56iLmCCa4TUHiEXHZQD4ksd9JX4Uhye",
  "key1": "4DyRLVbPJJ1V8aGYRACgVsxckfJbbHtdR5fYUcW8DPqPof5vnGzGBGHZYbperCFZKyaKMZRMBNy2b4NcEPt6UB1a",
  "key2": "3JAhcpi6MqkUpcw9uQENB9VpGbm61aday9fNb4JHShhdYaVSugsBgbs9JuUX2QcJu3FYHWutzDzV2VxvNDYE3Rjk",
  "key3": "5FptATWCsG4vELtexNeLD4tYFhLGdvdXKCZ4ttTYA2RuseuHpjaHiq49zH95ADiiLWgU2heKN1oghyR1mmVHbSh5",
  "key4": "5u57qabc42xyL7N2ngVMKqgvnwp2DoaMMBLKTFMWDCS25rJ9FTZniGTymNy5JPkENoZD1Fcr9mGndhLW1qW16FYt",
  "key5": "4AknP8kTG7GYy9u2bGuJMpfLFMBjrf1Cg5pDnBPGots5SQH35w7pXoyY71a3cUfcLjYPhqE547qCSLdfrFp1Zutv",
  "key6": "65bNLC19nxoCQ9p9QuMivE3UuVvX8k7RscytX3Q9HT7XaaK1EdE4QYz5fTN6PNkqDtzzKKZBaZUEs26E9oEtBoDt",
  "key7": "ky1R6XbiZp3UtccRg7D9XxLoL9iEQKXQAYbdzcDY5HfEtvuu49w5zZqw4MEr2akCRij3xfoWL9LgyHTBKFLXKK2",
  "key8": "3BNhtMkLp8m1bxoenVSLhTXwm78Jy7ZrX17qbPA25N4nNPNHdZMn6BQLhWHkND2kq4fPSFnJYJpshR6fsMU9GJ3v",
  "key9": "2LQM9TPdnVWrd4Exf8joTLb6kXdqccmY5RqgS1KZnJD6XAzi9fn5ztWNjG1x1DVhZgFRHG3UsTxUmmT1HZmxDKs9",
  "key10": "2bGH2RwUDAb5SeZws6bciVZ49jYReykY1YXNAEnGn9sNxz5qS382HJ2JfvHR2Hr817Bteq5guPVzMCeqDQcJqVKf",
  "key11": "4X8dDtB583RHNp3bjKp3avyWWmrQqKfrCHUAv81eCSR2M5xScMHGiEfuZUKcmkkbe7KGRYX39TAbmxfD4oowEVR3",
  "key12": "4zKnecuiQZcFLhJGgVTc5CgveZ7ZeFYCsApEfKCpVazwoV2MbSNK2LDZxatXXuJdsCw2zkRMN5RXbk93GAu2ZUEL",
  "key13": "2xR4EEXuHXmpoRfLNj9FpjGRxjuWCGnHqmze86jT6E3EpSBdUDyTQRaBmcNhm5MhVxsuQRoXvCcaLjEBS22VKW9f",
  "key14": "3KrRJZtZBP2TeLaVmMpMFUYned8cqhANz7kEnsNirXac8VtzyoVrZoxVKsnhzxPWeb9eNsGNeXrydBD2vtyvbFsd",
  "key15": "66DJGUiYhX3EoxMuLrGauWhqxCYWisxLpEmaqKRtNxBiPyhMnopBYia14cGXm1GpgfN4tN5awZFKpGqMQ72qZsjf",
  "key16": "3ArWiwCiL6Rue5nFbQYsHyQcq8UfTmhrFLKdKT5NkaFsnj4u4N552gtQZuQor4JpbgpcFhA3x2gUW5ReePeJ8bTP",
  "key17": "5Xae9UuJqP2EShP2yPFc3uwSMmKvhziTgat7k1maTEaGGPjSkKcTDCabMdkeThz2rv61J2JUTPaM8dCGYimpAxsJ",
  "key18": "3LL5qPjefsqiyrFS3gjTSZmtDX6o1HHs5qKV6sAnGR4PJLw8cq1rt8Q4zY6JoS2ATNX2sWK7BLGEtFxQjC1rq5Uy",
  "key19": "66K1rPFuq218CG4KNxPDnqfi7DgvNqFDqRygqaq68pfJ11cH8AxLnjQkiSvPjJHn7M9Azs9hi1YZFoCau9DFknpt",
  "key20": "3QzAJcdtUj1ac3aWttcx3KxeTaDWtAehZKLKurhUwckL2bTehJBPgYvr5PFDeexqCgXUJkJbq4w5GGkZzoRZ3czD",
  "key21": "4RCj7FkNkzs1YGW3iCqiSuegqLQhS9xFJFpsyMaodpuMeBjrN559ccj77aes8zmFRmtZMQBNotuakJN2EbwWhk6L",
  "key22": "5nB3Xrooi9T9KGYvZwUvZE6N7DWh6xw18uhGGUgeUNY66EtyQMuDutavJbgnkt5SRRrCkCgF415VUuYBKA5zZV7W",
  "key23": "4F5xzQw1carTHYb7Lcq2ZMjF5LKufY34eTDqZ7AzTsgtgzkjg2ZrPTrGbBAQgF7vTjqQzuQPhDHwHS5VCdY26qZn",
  "key24": "2ue22q6sYdUPQLJSPbLAcF5Ged33bBRrDXKqngJ6UExwV9n51degiMVuBZkrW54DYhEcLETtRv2t4gCLbuVsuCpx",
  "key25": "5vW3xT7SbFN9DXYmo4XtQ2g5wZAH3957GnrArhEpmFnEFnHGbWKdvT5EbeUNq1tkAL58s3MGv5qZqFeWYikxcLh7",
  "key26": "2FwkVFjMRnY9bqSpnMpuRpVG2XQy7phywHK18T4Ff7AdcmmwZiaRw6rCnW8aKy8hgBJb7gm65kiDsLuEyY9C94Bv",
  "key27": "KvpVn8yFmwcnLi81szQHLqLsuV3TrDqxuodEYBXx5iLhbXoDy9Bjwdd5yCMwdB4rBpMaSc4bYCi1PZXwBTb8aMB",
  "key28": "3YwJ78MSxxK43FUgViuFDJcUyDLRjDTUfZ8VKZ7m73tPg6GRG3RdFN7rA2eGTD5869JTUtrnP5ctV3CiMnVaWYZz",
  "key29": "crsStCUYSNMxtHgUqVroQ5Jm84hpzukFb13FbCtcQ65TGiWGHy8VEcXdkdVtEgiqWbuHTbBVHe7P7tZ3iVvLoSg",
  "key30": "39y8fG9i4oSdzq1HrtzJqDPvuhg5wozYwJESBG2EUA3nLhBwFYob9UiFvFjckAPf6RKS8cL7kcmMfuNuXs5apPu2",
  "key31": "4kEm3S7pEaSsUKrhmqxu9jmTxenegf155ijoyDpyENAuxx2yaJnWbAbWS6xpZR6Nocv6dRULqBDi4u4cJ3TM7T56"
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
