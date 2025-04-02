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
    "4jjGTUK11H6s7Kgp2BcdnXrmgZ8u9DJz1JtvDSjYRoLb776xot8eiEVF2eitnGvBMD1zb91ppk9T6HPneAqHajdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lygi63UE1i131wHZoKcKmfpUxrqfQNp5viwVHWCturRuyrzx4ioE7t5PToJnkrheFyce1vyZMCk5ZX1xKtthApR",
  "key1": "299oHmiTjUkaGnNADdAxaSjJJkhoSarpz4yJNrxZ5NvAiYuJbBFxyth8e2v43RQcsW7UouzcBD22vvY5kNZTKJvo",
  "key2": "4qYQzHq8N5XkL61SGVcXgKWypa47zSDAQeYwfHHwkoQTqTyk2StiQi4q7T46Y69ehitSPApvASA7H2Vufau8sG2h",
  "key3": "4tL5VPsNdV3zyvNAcbd1AjJcF38qYYUxeusWGDrXdwWeuu7rQddvBfzM8QG111ddPL1VPjKQzysUw4KHQZGcLUiL",
  "key4": "3iLti4gus3ztVe5pTPztXNzcPY9nSGiaL5PpXs6YJbApMUzaWcmEryfytRtZeQYXTK9oRTkbUH6Q8EwvGTtPa5Qx",
  "key5": "2yYRghGqVEA6737EwPMV1VLuDoVL8LTT2PGMKwNpgjQmdZbuy3G3GcXZQZ4MUFodr28Gt4W1cYsuhs2BkUWHSaQL",
  "key6": "56JmDcezBVazry1jx3v1EzcgWBi1n6Xp6mgMFcTQVgUQqFiBQ5jgREhoaobppCQBAxru58L862WCRv6AjHM8oRab",
  "key7": "4UbY5vZ2xYpKsgfBW4QNLEurxZW4uhwE5XpBRds7km7hhJVG2W7ZMMubudZ2tbvvkKcjpBG3yzfKiB1nWyvYuMok",
  "key8": "4CutHCkPUdmN9at5GpttLxxVhRs45qnAZudRYV2Yqx6gfWNL4wF6VY1uSy7z9mucrScARaabGL3sqGTLCS9ikNus",
  "key9": "5LqfsBUH6i2s8xn6dUWYpTgn5fmhFWGVHswE4rrtKwhXVwiS2Wh9k7pbCJgw5ScukZrEsUAt7YF6s6Edn1x66uhc",
  "key10": "5UyvBLspFD3cm2kxDQvLyYyDJoGqw6c9tmQ5jZfNmSWGNg6cv4nJvNh6WKCkReVc1fpkF1em77Mrj7UXV4foKdma",
  "key11": "YrR3gJz14yDevrLHsjQa7kcnVshycyq1cJDV12cDtXVS7Xqii3RsbV4JnLLW45xBUUSwzvArXaYBfC1UQnAaoq9",
  "key12": "5iE7bKLxQ2R9koioTB6ao2ftURQVdgm7XFNssEDhbH8BY8wPwwvsBHyA2852zBwHmTDiD49xTY7nd8VLVLD8jB86",
  "key13": "MBQxeAJv3seSFGwvvQRGAN78kWGzsxMnYvn1RJkdNkhhJvvHp8J1rfphT2cJi88696VYwTkfhn35nix4QecZbQS",
  "key14": "65WCK69dmNWaZtrkdJUwNhdW4AmfuLEhDyvZFWNhW5RPxDuT5fufLrHQ1FG3eNCiRW8PwJMnQd9J4urnDApw5tZd",
  "key15": "PaMJZCpDFWG68JBVE5fgmqfCUHFT6wrgbPoVmjsF4Yoaf5sT6xcNFYmfwqr2QEJ5G3RB5s87stsVUemSA99TCoZ",
  "key16": "vnE56yRgDTM3dQJbwkJwpdxDv8scdHSa4bADZaEq5uah5MEUaSyyoWqAteKxTz2Sb9Ec97JDr7gXm6nczQBoGzK",
  "key17": "4F4tr6tC89ebeXbKZtCxJjdtPvuzM6goeU9W9JMuLMF9wPQtAabM5L8CdktRnFBy86dgYErkfxJtde8Poup24ko9",
  "key18": "4Rjt62tG17UzbLNHwSrys4jNn1Drvwu8vSxXPbu7zAKWaC1VTmCEf5vjbA18dWGnivWKgiq6Zt1UNMJD4mMJyqYq",
  "key19": "3TqDqMU2CVqePuGBqZLWUQAetawMnefgRoDY2W99kZgLvuu7HGQifKXbzWHEAd8gBGRzn5rGWs44XaxmLnDwEMNF",
  "key20": "3DT4vpEeXXAqvCA6XhYPHNKRwZC5oFcw5xBSi1qqmFhyGfWLrBQn1kAKfGBN3AuQKEemsC4Qv2Gi7jRn9w84pJYj",
  "key21": "2J3ssMDpdioYd2xSBrc2Wbae5DTnwVLcekhTUuMbS4zuqLJgULJAKwj3YLHDjaVZ2U2tswtzE2GaLrfR5FNNsSgR",
  "key22": "4eGMzPd7xkWXRoZYQvnszWg4L8mr5vgp254iLkQrJ2Mcuv2knLJecz3VwF3f2btpCApbUhEC3P2Wxwqi4mnSQk4Q",
  "key23": "4SbQdzN4pUn73er2j3wFkb2Et5MJVMicjxW7px4PBnQ1TRcQ6VXFLnAEsGrN48WNgiKiBJSL2jHrB8BJsbW19ACJ",
  "key24": "5W8vVoCFv7g1CfCBR1U9brBC2U99PipaCSRS4LYaVfFPvsmQL1TBTtzzVG1ZkoAzpxaaHYPEorLhLJ3UNrWwWatn",
  "key25": "Jx6iMNhK6kY8fJBzHG2udqNS9Uk35dwNhte9FyBfjySwMgKNwK8JMRQrw5CGUad2GuWuwq6SvxngSa4PVPx9eBA",
  "key26": "2i2HNBHGesKDRHa93viv9EfUPjvQNKCoJoj2fhgaUnjFTjirvLCsZCYjzqhbha2qSr9X6Dhbr7kXpoTFSvuf6A8B",
  "key27": "2PK2AwWmfuR4SrgbnqXPW6sTBJuzDyywg6jBKjJtG1d77QFFQQ2pz4mtcrRAoifsNx8Y3XF7XiHGrAzpthFGF9fA"
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
