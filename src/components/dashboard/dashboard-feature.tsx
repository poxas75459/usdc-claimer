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
    "5SJ6yMUGQbH32nd1uiCxwiFzSPbiXpwZwt4sqKuK3H1RUV7iXByhy5pWsKx2fH6K14U4SHAHBVFCivRj8Uvjnod7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHZ2trJMxWXqvUT4cq6Qa6BSRFfAhpBkFyL8L1K94gHgwXT9vHFekb2JEgKpDuajSFu775YgbPY57SXmWs8n4bc",
  "key1": "2uVmtXAeiNRxVJTpAPBFRutPUUuCgbdcQQ6kY9ktfwG1oWBRZvm5ADx4XyxGuhgnyrKTeWF6JU3JER4mkXGz6gh6",
  "key2": "CFp4Cn2soP9D31UayYQpz2nms12KS2wmXisbU9NQXVbjscFcSCVH445MK2ewJuTLrZcSLqnL9neto4tN9eks6mW",
  "key3": "EqPi663NLtXSqVnyxHXHegvQnxWkDLbqkxWuBvrJB8ucGeM8XMtE2HFXo2wbP6SZTiBUcVUPsygvDfCTg7HSo5Q",
  "key4": "A7MPh6g1yGYjQHuASZyGaNeDC1NHbhNa5QRVR1nmqSmttEr3iNKwqYjnDMsHku3oB9pqasB8gw1CoNHsbPJLoQX",
  "key5": "5g6hkLbrSYJtuNtVBqdro1LV5ebr3gL5sUGsz3VkBYs9oM7xRKQSKpZkMz6UrkqxSPDLmWipgL7Mpp3XQ3zw4srL",
  "key6": "4WY44FTPp5ic7TfNLCr2TjPjZf3WQJUuKkMubeQ34MondRCUSx2CeaxPYSYuZAYLRSRDPp7H8EaajSUThn3A5SWc",
  "key7": "2GdxsKFPfgZ3HztkRGqvVdbVHvCiXePPRsoyRYqN54z8aViWP8emoQkND6vvEHRK5oByVH4t6JUy7PrdWfumBJjp",
  "key8": "x5PCMB2gnTjy2g1KDGHVXiXjPbyuPhTB7m9Wcn7RZcRSDBm34E4rzNUKoe9zWL7eotqr14Dv4sCQMLBQ9dZpXEA",
  "key9": "4G1vx2QzBKVbH8ZUsiFxbk4CbjmZSrNDdDZ2vjnNrRVmkg3npmGuu8PPBS8WnGD1RQVT6XqH5oygyQS7Cmv7C4UY",
  "key10": "p2Bf4YbrjPQNjcVB6fSHPszTKNL83v7HbFrjudo9k9YZstufdm75zjEWyZyWqLNFPohoeMUx12UmBUrDiHVBPDm",
  "key11": "pRiK2zbhanNkBPjJcSx4Ce6G8seh3d7UBT7qGqAG1Kog2WuxM5idCdbF5V2ZTdGPK4fH1fCHTKfTt6LyQ1BuL5R",
  "key12": "pWmmUKPGYAg8DP4Jmr81HyGyNzpPzgNWWbsntnaxkZp9Kbypu3NFrx3uacNQmVXM4Xe7vSECP59HH5toe3dUeVq",
  "key13": "3PCVQmk9sgdnJLmdyQbqQTXCdXqUV6Qf7DSMwbpPwBr4YDmopog2V7KBiYgnPbgvJnRxf4oWqdgNJfBucNggpKyu",
  "key14": "4NjDkZfQ4rswX4StFWGv3ipqASPku3YawFso217wQ2PTfovPKBmCQ97yPhJ3dx3EoFVGUymvbb5q18JfEqsNVzar",
  "key15": "63W6jMTp7XFhJeoDY5Swa9Y2Su1o9b1WvoxewQe6D74tabEteg9EixNWfZxqBGdrKpq8ii3BwfSwW1tQiR4Darmj",
  "key16": "rTuZSMNTecdBGHnWxQTfc6U5fd1Q12iTDeihZvqBtD6oHpUtGqmrqxSa8oiRe9WzHdjTGAA78kpsnb1kYguwMxX",
  "key17": "2SAGx5KCqyZ8M8m2iZosgnaS7AKqe3rFoKRtYURsviTbGEfNa5jUbER1bkwUVKMj3TpXpn17tAvkqADbpmhxwLQx",
  "key18": "5VCHkh2nwRBpppy7Rg9YLgB18oRBA8f6CaHhQmD2Uas3WR8thVy4EbuZHdAGL44hXSfonFRf9DqALW6dCVqmMXe6",
  "key19": "4r964i4sad3hY7RpV7YF1588Fwq6EXr3jRRPYfnPJfoYrh5mc6JViemDHj4mW9qpYX8m6xMoJtfZmYhxrJrn5jqc",
  "key20": "5xkGuX7Ufjk3WdJKbEnrrajSdm97vSsGAs7gGV6EMQZFYVrcq6XWsAawHgakrp7EhKvqASgEUFKW28PCJzi4Puch",
  "key21": "4hgH19eWNBHAoFd3Fp722NgcoRi6dDC9vvo4XxckPEYnb5haPeFgSEhGasCD8TSrYuo8FBtH3G9jRGtnpGAkGQz8",
  "key22": "39uWtZVyxcMAXr74fspHfZeMEVqPVgvxFDDt3oBUPsDE5jWMncKA8Ukb55UzdWEF4EJrFoFRiBkShcY1z9iF8S8d",
  "key23": "4sCVDre5RumpsXb4SYMwMdeJqDrdt7XqRnLaiZAK4yYKNvs6yebY7qDphW9wabpZP8ALXiT24AqVLkDffqppY6Qx",
  "key24": "4nPW1hsxqUxwyJ9iEsk9RTnrPAxLXbwN7zTTksbW7trbP5QxJvBzzACoHr7TNVSHdyoV3C9zWA83mKVk4sVU3Jre"
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
