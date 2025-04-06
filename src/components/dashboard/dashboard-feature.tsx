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
    "65ksjSCJ6xAskHCYGnDu2XgiZEEzMJ2B8pDYL2jecXMXA9oytaU1qfbHqCgvXa9PPteFDk7UftmRnd9MMBcaBVYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPV3X7qQSyGTLbR3RgpHZfDiZMWLZRSMt5GRPByBa3BDTcou6SmWxzGrogNcqTtnp6tK67cbxeHfUJd1g5zQ9GC",
  "key1": "3RaxpdXvECsiXCKGjEDyQh9jKH8V4xdAXmaHNWfvjKuQzM87hizRJwNPxfDYomdNn4Zu5QdCx3hLhiXDvf5qwu4J",
  "key2": "5QuEJ1dbfRafpr3Qk3cSUAaqxyLyiYf7228kLUEoqtqJyzjT6SEVWiRkNCckBux7bie7w4YsgBXWxdCKSSz8vBTp",
  "key3": "4qfkUvo5y3hXTXBZq5C9Mpn3R966G5dvikUfX5cCnHh84Qm1GvYit5YHiG74bKDbkUptNtLKgJULqfCqR3u7deAB",
  "key4": "49Fg1jMUUDEdA4S2D87g3SbrJDm1zqttU7tRovrX3diteFDtzJhF8tVVyhqGt48Ku8s4fxevkr7DC6CkSbuWu7A2",
  "key5": "qePCQKrKSQEYXbv5KEa9YeKnBpfBd73mkiX7KqupzUU8tUmLhVdsAci7WBWzjnqb7ye94DBfHiHRTXvBMcLGTcd",
  "key6": "VWoi5zYrjDM721orhRaQrTHhHj3TzDvttocRm1ZKstsYTmFsE9hZjU67oTKkLp6kAg2Wng2yGdHQUhitGYu18dg",
  "key7": "22F7fz7FTohBANGNpd29oo9eKVaMvWSZk7ztQhDZ4ZEfx9ixmCQTCqPjWHEf83sEySqvdWXceTyC3EnzpAtGkoFa",
  "key8": "2F6QUJB1zyi6TTVU7feoU9qjaxusn3TTEdZ7gso3UkJ1QxJGaSQbdmsEy1oucC58uXq2VcvVgZf41bWYibyo8N5p",
  "key9": "2Y3MHbMyzVig74X1uHvAh7pcQed9tDskW4uBwBMv5WiDePbSoscxTvLZGLtJL3VPmnvLpaVK9gwf4LciNm1v6JP3",
  "key10": "36MrEM6r8YH47cgu96cCNpbj53aTQG8H5QbtFbG4jkXTANaAiSpPhXLWVWTotB1hbG6SP4rdj32LNqKRz4gptkP4",
  "key11": "2BpumCBd4E5xVfYiSStg395SrUs4QrDraNe4zftidkKdmbZzV2qbLXQ69Q9mQnWjevFHQ2xSvjGgfVqhqQAbavan",
  "key12": "4bQjefAqeTq257vcgi73rP5MsGoYKujSmwVdUYB5Uc8na8YT4xykKVzzHk3UkiA7KFGVPG8g6BtCqc5RVn5cPTJt",
  "key13": "3MfSLKYapbNf1TF2vPot2aRmM3V9PadhDACBKLhbiCBcLodNDsoqVpKASX9Vy9W4aAnmwon9Uc7kmvxTsNcFZ9pB",
  "key14": "3FtpunqGBA6VPiV2NB1TxYuvwEResVCxL4uVMzwYnJBoBveGRnb73Rz8UWCDThUoChDQegZJubRbENtLBdy4Qc9J",
  "key15": "3SSqyeFjdFzGZbhSPgF6onfVjrbCbYrauobY3Pm6ruZFp8cypLDKHwKRGb9v96y4BK6ic6isfiAx57R21pdGSMWu",
  "key16": "5UZd1H8R9ySAguAN6WxU15mLMGNrE9EM8u8SykdBUvjQDwQJe6zoeXqiiPzGWHFopf5siPjS2mZbdDnML6827t5L",
  "key17": "4XyfWbP92KXf8KT8jdpBWhM7v8YwNC6fH7HuyF6TQyiKwVAYmhLDmpJCt3WrTmUtSfWTxJ3k8t6x2um9f2os3QKN",
  "key18": "2D7dvRWQ5tUuaEbbt68DoLBf3CZxntDgu2aWgkGCZqyyxv4T836YRt49LJo17kg4mM9fa31HG7xD51AhzbxPnt4f",
  "key19": "i4uAqyXaEJ5keLXSZf2qYLaAiiJmFotxfTPuiFBsgVfzHjEBcjARza3YkKGfTg92k1w8y41dW53eHUeJmrxN6hU",
  "key20": "422SYjZ2Yfw6FsbPyKeyBHoNpQsLm9oTtDBbfuGU2T9etyRWz8KDL33g8xPGfkuY3h97pnXYSXSPCVApsD6ZXtnG",
  "key21": "3rTTrpH8PMAfnuQuiBAVnWM7iRmdf4W8VnezA4fru7J9YXstsujDKezkcXKYZgmA5KXJSuTkcAFtwrfJucFk4oJ6",
  "key22": "2vVmMGnrQqo7VMVF1DpxG7JHeExeBaHonfkKQLCSDUJNt5q6gcmVtjK6t3hrkzgMLzZ2GfAWFgAWr4CpaaodLmyN",
  "key23": "5m7az6bdM6kqiaZ32hvSRSXwWSJd1pUH1anTyy6EwdHPb6H5Yjvxs81iPQxGf7T5eembcjeXrLdbtU1CUkgjHa9V",
  "key24": "5h7mcTEfTBxbChStyQJ9syFWD7HxuKuSuVuMZF2WxD4H4UztjJcfiyMsoQbhZ68vQNwbxiuuztnnv5sGGyj9jVsa",
  "key25": "46RTfXsfoXMStmCMAiZ9uDwxaFMHFjAi46kms2KjefaYUTHSsKbfBPjZ25L9vAigNRiSUGsmBpKYpAA9UKYzCKh",
  "key26": "2wGH7nVAB8fhpfMTkF9kWec6rNsbR16i8ABxB5KPrG4aLi6kpdjAwvHw9Ruv6vKhrE71L1ZK13WwuN9m6xwidukN",
  "key27": "55NxeXKCpERMaTnmVKNMKszarKZXir9oku39tiVHTHftKzss7FvUpUMFQAbBKFNBbX8ZZMWyuQv4YfF9iGuaqK3F",
  "key28": "5idEKH4wmpHRZUCiwe5WAdJHesmE1py4EniipB75eX79zs5ZkYKtASU577GdASopZ98yeRqu1k7EhcpZhsZPkQsM"
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
