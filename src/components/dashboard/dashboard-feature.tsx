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
    "4WfEiEcWJKQ7pGQeHP5ZZoyep3jbLuhMcoNvoiHYws631y45JQyS3EwLyD3kVXw5xCLiYis53a2gz2bVni14wbXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ppt7d4GKBzcqmA6ircDT5ZqfAtPrDgnsg8tk2gxHe24vhpaKRdQT27WQ2A5MAP9RXydV3L9K8BW1a9Q3vKjqsHe",
  "key1": "5UrmFA25buhLb4BSNUuzhSjMBgt3aR4h5Js9SGXxLDQgMdaFXuHuV9JV4ytnnjJNGnMuv3jajMDHBUYBBkTFvjiL",
  "key2": "3PrbfvkYizuevsh2cVmPwdPXWPn2mtnvgLY422T1ojbAMrvwxDEn9r1knnZHvwJyhh9nKeM4myeSdToQyg5V4Fga",
  "key3": "37AQhuv1xDd8SQ7efiB13DEyFofByTSWihRvMRBjFsyX5wubtx8vFyhHBeNdzM9h1Fzf1jaaT8SV28Fu1DFb4N3N",
  "key4": "2jRqM3GYasi2aqGxF8WM2jq1hXtv67rMz4AxdFSb2ZxEvwhT2pnTR2SXKC9v3hhXNrjSEEUeTqnDy7Wuqxv3KPV6",
  "key5": "4W4aK9CpLNoZZHdSaG6MtVXLrVj55Wo2EonqrEu5UbFxttzbD5TDM9n6ExYbE8j6Qmewb4kvfFeNeq4C5A6z4zcB",
  "key6": "4Dk9EeYZVsLzyVjZSar6QmNKPmcE6VRyNQwHGXCSPtXaX4dP1og34Kb7XDaGwH3u6448wcivsL1akGSivFutLJRa",
  "key7": "UH95FachWG5oncqj3bdAkWbEvjmYEhSXj8gFT3uhVJkPbt2D3B27Fot3V9BvxoaKiYqg8eyUT1VQzU6ygzcMLwS",
  "key8": "3GAo53GGcjap1r2HEFZqPQoxTJbz5vhXi9g9S5biq5ZHMdG17uoBEvaS2Dqwuser3e8Ww1BTVt64YKFuvnSXsgoC",
  "key9": "4GbVtREXfBg4HZQBaufM17xacTVCuyiQJfgUS9UN7XR4wTNQDk2cRDZ3SmZYPMErVNcsSvdWhdADnn23bf2raYMc",
  "key10": "Kr8Do31YNtgPj3mWJYTQiELnxwANhYp3h9RjjLmxrtL3N2w8sLQs1QmZrYrrALGyhy34gwWq57FZzj1argbxcxi",
  "key11": "3SDReYE3n2rQqcugSgoxP9cgT4XDcq555DWy6wqJDEUY1iZk23C1FCBqAKZ9jseA9SLRxGRof3HFc3rkhB9horLz",
  "key12": "5sSGoVRkKa5aoXTmAGWJH1SmbeAy6f929UPYWFhBLR3qxYv7i97aNb3uYH1xag8pKAxJWvF7CC3yL8BNNsDEihUe",
  "key13": "zx7zAux5TcmA517u5oAa8b1FWu4tki7YSJhWDeDQntCfmLrkY61SzJCCHbH7M9xCR7oUeGJjWB9y4tcyvjq8AnE",
  "key14": "4LM8H4hGKoV7sDTZgUerS7w95redk4BVpsdvB2Wethmoz8YkKiAF9zyRMHmhRfuYYPjfKQZtbJsL7A57EmtuCJpd",
  "key15": "2b14xX85UrGByjJm1eCyocbSvMFTW5CjMbfdh5Mq66tgv3xhamycU5Jq1VG4XgsWp9HXzX3FY71EyLsHfUZyzqJq",
  "key16": "4nVDsSenigiwcvmbuUAXgutTzEC485an37EsgvUoj1vcWoproCN4PjpSmGT1NfU292QtqJZ7p3BdC9MUXUu1be6K",
  "key17": "5nZpU8gEdnmkoouSVzs4EACB5dpBGH4bEAEhQtwFx6NsMcB5XSxkCSAGm7Brq2j9aBytXzWAmRC4BSuVmfDJ8xrq",
  "key18": "5SXmHqz3MTCkFhjaC4abp6qnasnroKCcPaErnyTPowMZantxm76Aadg3a64bc8GbEmDrJ9xYKvtugp3vwLmJC64o",
  "key19": "9vEkrAs52qdPeZ9jfMYfhg2gv6rTFaJJNRAjyRP5wtsey7LqoTS67dRzZYCJGffs2FDUruYewTCFfEk6hzhPpj5",
  "key20": "49XpJnZ11vziM9kuzMdEMkB8ymQD1xbE2KUTZ2rE47g1q3ZNQ6Y7HJZaFEeimS3vT6gCtm6JBnTRnAH3bSHT5Byt",
  "key21": "odWvM6zW8VrxJoBNHMqkhvNsEsN1ksvXkQwTkp532UDb3YHKQvRYE6JbVd6NPwU9uUJq4N9Xj3ctwVxedwxvTao",
  "key22": "B2fY2qNzoJxGy2bumvf7VNDxMN6yGkNebjpyXGXMCFTTgiRxsa9bMusWkckDcoxbWkA53M3WK6YzXKR14GLEACo",
  "key23": "3YQ3541m2VaLBXC5izr2KsZRS6NwDSyLtfhboJMJCDWrE9RKMrAhANF9PVdGepMcH9kWstjMtxViKXsZuWZc5T4b",
  "key24": "4psHhab4jDTaEmUEy6ZtvvSnhmEVTmLDYzpDtPEGe1mSwBnT5m5FZv5Axg7ECcdXCrKFuTzR2qXavTi5VAU3V9US",
  "key25": "4LB2SPVuvHuFZRCkM7f3GKeFkJ837g3MtzCwuTZ8mbC2Zs5AwHJddZSR8te3AmhFihf1pkY1YQGQPD6ZQHDXuJYc",
  "key26": "3WVAAJeKcqUKa6Hyydf21AZ8aiQL3zsNCPKN1kuqxnSso8QLco743CubyfBi41TCSh2n31j3LJUK96n4f7NNnxfM"
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
