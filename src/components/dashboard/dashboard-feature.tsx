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
    "48fPnA4zwSxDs76GxpUU1xAqTvkoSJbetjJogz9i4Ppxvdar3GCsiXQkzu29UvXvssXPYuhAxEM8EFPLdhqUTN7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7tqH5JUfr1X6khUDVhTTeVnrFT9bQeFLATPHGzdh48M4GYXTv6VL39EGJ31HUWLqntxVrvsAmGQCLaWvYuXdYh",
  "key1": "4PbEbPaj3XgHKLmDoeyn8gHJVPJZge5Xq2Zzy6igtQi1e11meW43mhbAo6E3274seXZovJ3dFV1prkwLHbjcquzi",
  "key2": "3zofEvrFNhAtYKE5uRNf4zez31hgrfwy7Me3MSAka7hLsi6RwMHcpo7avY1miDxyfofspeM2xcHFVc5LBqdHMbXn",
  "key3": "5xHn7Qa4QMFfzEWsFim74SuuYGZKC8FHHUWUDeo3JCxtuqu1JnNbYhRUHceFpaHLrnS5sfKtWTMXEybRm8siizaH",
  "key4": "44z5KoHhL9F29Pw3TNxBLdCZ8t9ji9Zd7L9gWxRZ2oVJtwEvZU9MFnZysdkou53Cf6jfDWQrVuBe3Gw5RkXkCuh9",
  "key5": "5P5yzKnJM3YgKTfVjjHDiKVkncnGChKSb8iuxVjfEsPy4t1eW5GwK9LYf6AKKSuCSYb7YD6LRHP9yKYG8un9H2FM",
  "key6": "4xPsMxinYwdVWmRDZ3oX52nHT4nrfVc6oSZFLJCumzYuUJsncz7cCFWS9sFNjYXzxTCtqSbMWeNUpSdpP5uxYLm8",
  "key7": "4s6N6CA8dELKCxFGpD4rw6MwWe4AkRvwUcUoZ2GYvAQ7oQZcSQTqXPd3qPnj4KXZg7WkFVtZVCL4UauVqmJvaXhH",
  "key8": "yAov74We3537M2kCsSq7HsaVvCasLYnCMPJUDTbaF6ZbUjLyqgV6w9BHHYqat3DsALWy9A5BPm9BgenxHh4KMVL",
  "key9": "4GLbkmzzwmFYX2B94nC62ZJbFUmcB9sj2Qh4X9EX4JZdoGHFyptooRnx6zFi9xFruPrCNBwTxXLhiXo8vdsKQ74T",
  "key10": "4d41RFuhyCqZvBMnXn3RVLUUVKmUEjuotz1hwRhC6Cuw2BDFPQWxMJocHrcDLLyux9nuPPKiSpnTxbLwikMsv5Cq",
  "key11": "5rM9baL13SLsyyUdPnSKSupgvLVrSCksVnwA3ExSc2orpC1cDLPjZYfLws1td9QDHQaMYidALzmPqKU8FnNmWMHG",
  "key12": "21ycjCw1bxmxYkuXLEvJumxxB4jxZtnssnG9ujvbV3UJF5VBkephPRo9nT1dhTe2muA7aRsnQ4cuovPXy13iurzb",
  "key13": "4LrSCdBiYGtLVvrMeGwEuPFUJdgCqNbt1PkJC5XJwQ9NLy2L7UjizysXnbzVET9A7gtRL9oRZMa42QWuC8Lv4BeD",
  "key14": "4PEAfSaxWNqyiWwSrM58zHcups4RUneQSCFBLjaDfMThyxs1uFXqazDPnZLxTUay2o53tLa14cBu8KQqXjdzByej",
  "key15": "54rz3Sn5Ly1ZjMRYiL4JrrUWsrkKSr2KzW7ExUJfouCSMWNDJ4XernTeVHWf8QrV4v4XzzNrhjrAooiyj3NeQAbN",
  "key16": "4yfiTgqBk8P5hfGDCumjynZp36MCxNVya6PPw8JpiDDYr2R2VU2Knzy76bBZneVBUxFXkmMGBsPCn8nR4yWzmJzx",
  "key17": "5YYjwN9SDC1Gy9q9mZ3jzNHCVn2CcxKwrPJf2g6wiPDi4QNhZ1wWv67TQa7dsBU2abeFhrLsC2sZkYdvsR9Z8gHL",
  "key18": "2eJ3xrQfdfNctB1zHA6bkNus26GhAHkMMtHtYj985zBfen2yYmLmJ96mYf7wf6V5aQdfBuBnMbbnrnaqfxKbqrmy",
  "key19": "2SboLLocZTsrhfwF7EHcU5rsuqvGzMsxBNVSTHE6DDZ2EmTQaP3sXuruHtY4G73R4aghfKedc3jBAAVpxt2BJYN5",
  "key20": "33THqBpsDzsqpiYsXQrFxA4n1GXstHhgB6WUat5iSg89mEomg4yRF9EN9WEsRuXAf4dWrsGKv8w6DiwMyP58NEFS",
  "key21": "2e2p5n8F3QmvxUnSEombviTFnL85jJBuLNbFxtbcRX7moEfqvir6TkYwj28cwY3aYRKpQrjtAUm55eJd6ERebw9X",
  "key22": "3xFxoSz8SkphEKWFtuqPsmXaLusWN5UTjVESPxPT7AFuZjP9mqM7hQPD6aZrZ9Mnrze8DRMd8mYNniWc5maV6vU4",
  "key23": "3kmZz6YmNUWnsSTuXt5LhVsS81NaoRy7rNUFdtwq5DNhZubY8XkRzJ6nmoYJ8PM3bJQQWBWmbQCSLZgQQcTggdRH",
  "key24": "EH5nR1dVZUHJMomqXfgYiuqFgYSoZjxdbqVyyhjSidYVnEyE6KahavVKpUQom8ALu3A9bRdNny3nQ7FwruwPbi2",
  "key25": "rTKPFZm1daLgeSJMt5WLVXfiiuPSs4RdtYG8eVvboH5Dnw329Mio9zL3zF8DsxcpP62h3Y3sEvQPihZ84mVmLEW",
  "key26": "NnVD1UrZKfQ7eNjh1YEvPS2vdnMeCq4NzNFQMnhTEBQ5YvgotraJtG3sZLV3YpqnsZCjkrtThmG8vqVBr1VYrAW"
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
