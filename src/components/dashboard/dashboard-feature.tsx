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
    "YtY6ep3gPEXDAZs2DuLrq2GSqAtucWCdeXpo52YnjeEDJAFHZ6wNg54ysZxQD7UK7JQ7bVadm88Wiv1ySrPs3TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CKgd4oK7H8oQmt1VPPZ7Ma4dP43vKGwUT3GYgLvWQ2t5ziWTnYxisG5pikTkWcdKnhwkcH6RYTAjyYZZAMS8S8",
  "key1": "EVg6HZLxG1c3uUut1ZSrk2zUBuemR9LZwEQQDXNKctVFDucmPFuUxHb8pkDXww9H5ESnZbojEgKj8VWqfUPA94H",
  "key2": "7LbimAu6ZgvDNwVScMNtfECnuCiuu9WNbAvkcEpQwH24vXTWBMoFFoWdzTyWa2pPa396PwkNLJ854U8F81LzoER",
  "key3": "386bXykssosJXCwX8EZ7akaGYfJWksaiUNNbRBm41zreMe37jDRKKG3N2XGJav26dMCyEtTRB4ijSjVKtR7Kwmw3",
  "key4": "4xZBo7CVTsVuhFCUFqzvXSj57b5ZrD5n141uJtsfyXR6pyhviF2QpEbfTbuVMxqL1MzZgCxVxaSBq6PZUadVZqKz",
  "key5": "4PaWfjiKG6NYWJugiWbJCsWmmvY3tzo5VFxenAG5L7NLQejqid76jN4nYbNsi5AE88sDutSFmQp1EGR21Cg5frjy",
  "key6": "3LCgCYry1eiCXeUrCM8Dcr7XNKM73qdQDKV7FwDvYVFWAh3xhgGykhV4H2Yd5vf2YvuohAhhjiZrRt1GLrrDKhrZ",
  "key7": "2DDxi7s79NANae4GGhoJXGjT9EJhPbGzW9ywgFw5mUtkS6c4EdqkfkEh7qSspkoPD57uWkf5VRwGXfB4mXzMBZp1",
  "key8": "5MquHakq9qq2DRExz5EJoVFseh8WTdV7osUJESsJ7pd6Zwwxrxiz4F8prCN31bo2zeK6QhHUu3vVuDgFYWiZVz4h",
  "key9": "5ohGNS2RbtaNAVcegv2TpjAvqtEqjbrHLEsfaMGrnJu2TkhbsVUaJUQrbyehWyyxLvGjk1H2Vj8LV1iwCzDwZfD2",
  "key10": "5Wi2nPSLQntAwZnEbqDSwcCfJzUQiuJearWECj2WLzuFdwTTpLB2Y6Vcyv7KU6Lw6P9ptGf7wdtxNSypfvoVvjhs",
  "key11": "3YgNfFgXbKQzwatAe7FAZ8t6hcUdT4CcvfeNGq4hVSD9eWoDKLduEyxa81ftWAGN8ptiP7q84vqdtaK9wRMbaNH9",
  "key12": "niRKiRUuq96v9zXQsVCzNuDZFe4rqe7ZWdGYdFyuX2Eg6yoo1LwsXrdEo6tBh9YDtFpuRd9uGEaFp6BjeneKuFb",
  "key13": "5tDpFZ9AMqEsBdAtEWYXL5bKxTW3zL7tyi8KfjKMERmLxkoXQNVuWws9q8y8PaTKA9BouJWEs7YhJ3UrRkPB5c8X",
  "key14": "5dHhtKDfhPSCe7gnJFDZbre6G1QiQ6sGm6NqBsxM1XHRF9dYCDw6sDgX8tsanYCeiMt9xVwo4KcnktkjadHuyzr4",
  "key15": "2vvR7XCvvmwpLokVLybVYFRYoGNwNJbdF9y5KzLrQYaXRDnbGJMJZXhdMtQTp5HCNKQW3N6iLBAZrQncANtNsnu3",
  "key16": "2w83sjfPkzwMJHFV3xCWanDwf5QTf2FL8BoR1nzcvotnQcMA9aXWJGibyBs9B6n2XQtjfb9UcTcz2d7kkD9w8Qjy",
  "key17": "4e2BVKQUPArL3Tpyc7kt6SmJzbccnFAGij3MpGwAHxX3QWaAgsy7BbVdn3MjwD9QChoufPApdeeGKfXBzndERV1C",
  "key18": "2uz4LZYBxXz7hAUN4fdsNL4jvG8W1qaciwSS4Xm5amcGo45rHvNZUEWpybAPaehAQBnYgSYhgu1bBLASyJ1tDwEk",
  "key19": "5HNGXEzDNXPhcoTLx4Tnw5wsveAjAo2HMLcovzZhao6HC87RaZFtRLFCpB5tam2DsD4U4fCgcbgosVLTGkQrUzMc",
  "key20": "3ZeE4UVQUnyoxQoyWcadjXQsQ6egeLvW73cYgfr6o5SJfL2GUcXGCRfQbmBnJEN9vVt2HWHFK3vymRYhujVfqJ4",
  "key21": "5KrjkUQyYGXyANmVoh23DvQdTS1moALgVZd39ymHtiyohju3Bz23QHEfaerHteTHSBSXPPCkz8P8KXqykP7RZczP",
  "key22": "2fuCtFsjtjKwn3wTSogyrQkhbdnnr45WGmo4FvWyNfQVvFLenjBwUmxvbLqxEBSXMhj92inbEBheDojG1eBJ8Mp4",
  "key23": "4rdTqSon4DeXHcst8QyMRhhW3ty9LKBStRrZhbzWf2f3jECamRCtErPJjLj27yzj42xb5gAmwFQfFkQLh1wrCE7v",
  "key24": "33N4Zw646tMjKSgR4cYh3SbxXjgwpBsrFbQUxuU7gQMXHWi6j4HnHQQJ56kL9cv22zjaw6Ei2fsgjtEaTke9u7tq",
  "key25": "hJKzrQMuEE1i4VbT16TQn61dghE1i1jaNyRC4o4p5EUVceaJrT1qUE1jcSEYzKzmJkVQ752dkY4Ys6AafutDkZi",
  "key26": "5V98p2w1qUdKrCXDERD8L9AspZVcXJEcvWf1THzSiNpAZ7bmDTBYkcDpVP3d12idSwh4jSP8tcmBJzKE2sUcArSu",
  "key27": "2hGMFo9tBTXZDVGZNFvz1sUUb1JVFfPTULpT3rvoamc1yMNP467thEoQ4xXBLvhjxxm6dk5XpDLW9A2hFvj3dkB7",
  "key28": "iBHFDTsAejNoM9MtqSu4qQoZM2xzHeyyh3kvmTbczDiwBqx2Jjj6euorwS6frBdYpY2DKUtkTuKewPZvSGcSVQn"
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
