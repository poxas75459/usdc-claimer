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
    "91JKefD1ioDdKdtRegANwoenU1tq2gbkdVw4b7y4oJadz7Bh4DTpLzsaufJvCLNTixL8jmUPbr8KQSvsgeCaUeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXdYgtN1TedbducFzdBgngDew9RxSaZWQKbbBhHQvsipa4LJBTX9mYey8nJonwGbsnd8TwcVD5R8k8ZhjtNv3cw",
  "key1": "3qz2KsqPbQ4X8XAcgVyRajsHrnce7LiFTJS9XXyw57zb8nqotBDSWYibXrvxyBpinuejoJ7hQ9LWQwrczQbDLDFS",
  "key2": "46TQyQ8RNdGBkAEtMbKSCYvaPbc4RF8ZJ3vbQQbP8oUs1DdK5x7kZXfYL3iDfGuS8AL9euBoXHhjeqdTSJQQG8cw",
  "key3": "2A3QbHXqoU4FL9xpyRMt5MbK2yCteHa9ejQ8R6fHkwyWmscFBAYgrFRC76ziTCXKcjH1FXYvLr3RHT2BZCDKGJpi",
  "key4": "22Uao55c898Gceb25b3YrsX1tyKjKDrcPFyHnPEhw4YuyDouhadk5d5gXZP5UuW7BdTyiBNKs4h1qVhV5anpa9jE",
  "key5": "2u1yTZ9KfavmCvFifhjr8oHKVbdbGi8fPK7PUFZNYu5jb2DpsDhvCtU1BnNRfuwGC6g1nCyXQvyixNwybULYUxxj",
  "key6": "3euB2MXbMJnTsnjKStNvAmkxZM8pziPwA9SGUNkhAHaaXJTL1HQC8jABckYFDZMCuDbjwWHQD42PxFhLvdj2BmQt",
  "key7": "51mGP9Fp3Z1sq94XRvtDJGpgyhuBbQgpxKEHqvojec4tALVXQaCuxeTxdn8Bc1d1DETLkuSVBeKkW13ACYb1vXVn",
  "key8": "5JqgPEebjNqVnu8qLtk1X1d23uMAXnGVsDaW7jGrMJrJMmxyKn3rL5JEB1Yk8fjf5SshDruER1g9MyybQioniGYp",
  "key9": "56oQzB1EzW34vaTJZue6yqCrgSp7uQ28uKDoPCrXBtWa8v4zGWuKCcp2d4rm1xWCKs6v9TcyyENBr6Fot2R6s4ds",
  "key10": "mzxdrHNdu2sR7b8Q17ng6Brf6GsPHS7dMh6wHvb92vY9Ww1K8f6iCoVg4evi5vgeZy1pghDj1RDbjZ1LQ9bMukj",
  "key11": "4jKYvamBXxs5E5mofypufBkWWt3bD4LvX83YWmQtctin7zVDjvqAYmJVpHwyqqWB9Jdj3gXRL6K5Rv4yQTBZd1ck",
  "key12": "3k8Lh1CroioLsYGzQpnRMMPLcMiohxsQWLrQVVm4vCW5Cj3NZbQrK7JdjZPzwjxcUzDvUtj3X4kH7pgAR8pvgsBB",
  "key13": "2z7y7SXV7kA8MLuBfst898avmjdXfgUAKxQJHwJjv1VadktjhkkAqBXEvoHinnMDuaGhmN56s4h5mK2fdi8dcz62",
  "key14": "53cagCo4T3baUsrgaohsrz9Crseg3ZS1Js6Yq3qbZFyyZEgyRg482phiCeJron1JrGYz92oCabd3FtyLX26fBgTw",
  "key15": "4791hpvoe6rzqPwu47Wdw5X3piLL1RYjM2uz3k9GtFqpbpxdVCz2hALhsrmV58R4PABkvKHi9TDUbjzCErt44M8r",
  "key16": "4hJFidMGysjTuKS3CX1KEPoWnDVNbkToyHiW79WAzc5Erd7fR7LUpTYTkjYbbgirKprPMXdTGBTszyXSjYHcE8va",
  "key17": "9d9kWU37QyzQ4zsAEKmqZvtHBHnSwzyGkAMaEcD9CNqmF5iTXZ2uCKH2EeNVzhzPrdktLDnUX6PKzxs4wgGw3b9",
  "key18": "42BMEYKEWqcv52BbkZCmzjJyMRKknvqweD2y3oUUXGY4F9JMys917TPYqcrc1msNvahwVFWqcFe6bDqPWphRw7PQ",
  "key19": "3i6yR6znBs3w4cbjf3bcwE8VJaTV7E9KMbaXFrNiKwgL1eDrzhAGE7fZsZe7HBDpFpefGx7DPRJC4eT3SDZAK6x7",
  "key20": "5fHbz9TGDJfSZf7NWaM6Byq6PwyitoBqHoCFXWQoNtoypm6Vw1DF6nHFsrBf8bvmMpAW1BpuSSSEwyWSVyfxRJJs",
  "key21": "cM7kWThJVB1EnmUyep3gwxYLTBVUZpCG9sPDcxdbgLNYuVkjahmrsDLfox5q2uyeYttnY1d97rNA4zz1gD9sMdJ",
  "key22": "3DicxDXyEZaUPdGpPjxfuXSVjNS54jHF2R632HFsDbvMdPcURAWJCBwVacEqcyb1fxmeBUfDWaUGZdi7aSXZMknS",
  "key23": "3Qfo3TcdvuEP3QqJjkyHZuxY599ZcN36t7CEek5zALfHtxdPRt4Z7jVWnE5tKkkjKxtkvzVWaSnrowp3fBSmyuhQ",
  "key24": "4ZgDEtaLe77v35rD5U6c5C3mJHrEsvKMGYbjQXUXWXQ8V4zoJ1qgJ59uowGBcawC48EApZvsDuLhTnHwkVZVGusk",
  "key25": "5URoncELrKMMKHSvTjEbJvrHQKYRrQnQ1ZQWwvDu8cFmnXtuw723ntNBmMJaG8SeHwLawZDBt6vaqH2WjADqBbu",
  "key26": "VKUMKtFvepvVdm9kyYLLVrGss4yom1yWTFuybd8ejALPFizy13YvZ9NBKUvhKheubquL3biQfGz11GBBWdnghWq",
  "key27": "5MAT6rpQQnVqS7x6qvJfdeRpd5kqX63yMznE23dG4DcKrbc2RWUNdv1Bh4bgNvxz1zsgbBw8uvC1PS54MZ9SFEFV",
  "key28": "4V4JGn3kcCgEUTjzuUiiYS82aX8VR3bKN1grgD4quV6FdtA6b5sa8ddEHBmbrvESqGem7jdBipJWKGQzRruLWNL4",
  "key29": "5mgsK6TBU2zH6N674SoLUWeYhTqQ9z61utYS5fvcqcFGKtRKh58LFF782zGSrWhAULiYKnJtSDmaVgSpPXPSdEcY"
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
