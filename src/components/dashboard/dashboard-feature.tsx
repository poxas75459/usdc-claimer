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
    "5radWyWbk5CmdD9tx2w6RgKsgnEwKp3mzMFiHiUNkgQF5FUgXuqZLu9nSLXmZEnKw5sQcYNsut5yoAyLbFXbnDLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQmFc3ZqcDeN4ozkBgzM42L62dB5r6aUAPMa5EJcnUFnnHaPMfzD23UJ9yWmTUYbkffKJAeKg2zhKCVKjVccfmG",
  "key1": "2R7rce7YXtuyoiRWuRtZbjScS1J7qp9zzyQkZc7KzPDnABNRLmH2eEW1e7U7W8cLZ6Gs92xjqieRmE3A7z6TkLns",
  "key2": "52JGLHRJ6GnWAEySyWGqvr7Jdygr3bggCKsT61tC42u4DNc1brcTAVPyxu9aDjZXQubxMpsJqepoDG5k9ByjiMcD",
  "key3": "JJF7BcBLcqTGApoBZMYNUDphExxjg8BWhm12ZRmMLZapk2EG3sAeJP6iK5Wd1ESL13nRTXKKtSbngZQVksPqXcX",
  "key4": "Aafp24EncndvzmSW6PTVxPLzJAHQPiGUgeRKATAC4Y87XqgVqtBFHucEg1nXRBkDBn4VRDASphoKzLtTW4bFfMK",
  "key5": "2T4rYaxyoB8w26Uyn8NjPSB8UoPdHjnMU2pZdW5yFLzvPFHPWxDGSAyKCU8CErjuN15WtCiqvFnT7HVcAXKH5V4E",
  "key6": "4ewc7MUffNQeH2LCrb4Xk4caHogh26JnXUgtxqWnUXRoNt5RcQiHMsQdTpViUVY6SsgQkA3sFJ3eAKS4VmgA7os2",
  "key7": "23uXwMpYpeUHDBFVNsCAG3ko4qTf1EiZxxtPg4hJnw31wUvRMTCPm4ViWWui7EgsKcMmAEdnRMHeFZJJL8v8FeJD",
  "key8": "5syqEXgShDtTNJAit7y4QtY19ix6tge9o2yXmXz6tM7bkRKHimVKwW7HeA4ed7MQuEz3ZPYpsmm5nX1NRVoVXTLV",
  "key9": "5biTrWiMWhkTRR5kFvBfYwWTxWZSXUoDVYWo5FdfmxAUyPfJh7MUyyBZmV6WANuVSi73LExSBLvBzF2n6cGvSHe8",
  "key10": "32KwRv7c1kC3rF3n2umZLttXa8G7Wpy4SMERmwweqtF2XouWua2RWb5YHzYCDCHnPLSnd1sq4kx3TPJ1s7KxbR3L",
  "key11": "4AaQeBYks5KpztrjVs7vDkPoEREwBUUozzx6G35VeQXJ3p5kcr2Tvui9rSCrGnZEH2P1NNYJfnQTqnQMMfdfiKHL",
  "key12": "23YyZg99xWVvqEy6D5LrVFgVhnVsUADYcaptZigkgDByccunzJLgAmWHY4TmeE2jUtEdjwM3YkpPU6TTJYEwJdnZ",
  "key13": "45WqyDJNLRASzNz3SMtx43yGPToiPa8oAHAFTWGxKx5KW7WAhVubkNU4ywbUw5CmRovxuXn1QXUXwwnAS4eAaGgK",
  "key14": "3c12iXtLfGpRw7AFMjTyLfZTLvjLV9wTVgFkLBu9QF7NcPyxxgKu8ptJjsDzKH7ttrkTbx4pLcTiAHs5fxhrhFeW",
  "key15": "3ysvSWR996DZqyCjmctp69g9v1XzvGi84jz4t5gBi9fxmUHP6dVfU3yNGBhLtmtfguMNSqKh1uzE2V1BcVkEt5an",
  "key16": "5mC9Dkq7o1Ky6HKr67BsKvPWN8awdw2qxZ2sN9fT1JiMPFzpkDAWjnf8PoaFwkAsqJ37EiksUboAGbsm7QrX4jWs",
  "key17": "3zgeXmQSvPt9KCnDQpCC8AyPxUcCgA21dpDcZQPwCpJqz53iVBZMzsvuVRqm3KWTEVW9cFobuQSE752BS69FUCfu",
  "key18": "2YtiYmVE9xrXhw3EepVwef4GpvFNML8W7KY8G5P1b5HBuQzZKNSCvbDfccWHCeGCaAhSc1UjdjWnsdgo3cXdm96L",
  "key19": "3N7eqEyzC1UDfNsaQs42LazPuXr2R5EwbznwJrDZDDQpLUQaKvfitRiGBqoARNfFPJ7XDFCCgBi3xNQgMLe9DcjH",
  "key20": "2PAG7E9f7AZATzWSNr2oP44bsL8HqLaKEVSmGZ2d3hwriP2gRStmcfyDHTaDwCTttdFbrXjyqTDTYesjmLcUUiLB",
  "key21": "giLXR1UxnbbGW28WuWfXTCSXbR3VKrd7ytyeBip3w15JPqnw9khRU7QCqJ6nhQA6TnopvBGFDoQSL4T4HtWWVBz",
  "key22": "3jPegHEVqqmmpV7P72RCTRxqr7JdRBizgrmzYtRsZGQMgRG5Ef6711sQdXU7ZWaydjqzmgibWw5BVL8eKqZeZaRr",
  "key23": "5XiHtM5KJ18xofj86avBPFwGT3gdmnZcv6owqGonBWWhkk2wRUMCKWfwM8AuAUEmQUsF4vwE7ZrabdWtuqCvu1ZX",
  "key24": "4t9Ura1XmypxBLxZzfUHX4MGkthjU91ARrhZ4PhuAnD5q1ozV1UDoZD5jSLzzHz8gFxE1e4BoUeVmjap4epTtxj3",
  "key25": "yVRwDhXTwFz7agMgGVH9Qp357vDZHGA2x78boX94qdBB152J37BZ8rsYhDedLyoYkgGJZ5ptGdkV2jpr2XtKarY",
  "key26": "5HmL81LMadATM197X796WJfPiweWK8UtU3vtSn9VedM7nLV5C9MoDBGfToeidXgKZFG72uwui94XLim9JjphFdzC",
  "key27": "3fQoTZtNNAMyjAFi3rNehAYq9b7vKi2bYWwyp5Zc5sprDLX13ycVw3Gs5YMLcDZzVKtMqh67rME1AVnyZSfUamup",
  "key28": "2oe5YpHVknjZbvr7t4a3WW62beAdzqUJ3qU2297yZTUmGD9cBH2h9J1XJhqjNiF9LKnA4LkykHLo2674GvL2oUq3"
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
