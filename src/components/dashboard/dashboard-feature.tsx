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
    "WBwzMa3kFK6B7i2QiervhUdZoQQRRjaZwidVFQ7UFGfUmSjVsgTgaL9Kj2LqxcNMUWxRh1M8Q8cUBFLoAjXGUE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMvg2MrEpzwwQiybURT2owwJcagVeaKdWoDL8qums9X88AP179RjcPA14ZJFRsnEiZ1HEtLpz88DynmQtXYxkgE",
  "key1": "2iSod2EB14h48WXDv8NswifWecuh2K3zc9Z7ksChLBiHbdhyN35yU4seSqVtQia4ZByE258yxp986Euw5EwAhYBy",
  "key2": "4qLcbQk8XTqUix52Y7Lmg594j2V82AH3ebKVgGEZASVx8wTVCp19ESoL2i4dCkwtDdsa5yeJ5dhPaXuChojTis5x",
  "key3": "2FXz4WSqRBVeZaf3B43tiCUisdHaMq4xEgejnRTjLHSK8MH7A3S4zkEcxzRYmCVzY62L5BdJjnCKoNuBGVmmwNb4",
  "key4": "4pUJffMY7n4oPDiFidYbQfXKQsfjfNp8kpWD21TpFrZgJv5CsDYP8MrKRzS3Lp9tBXm4jjrf3FCHM4cfkmiG6pYq",
  "key5": "4VSLG6pdw5h3MMVbHVwDBwPMWXP2PRg7gGNjVY7CT5FwTCub4rDteQ24CrjdGPe1bwj6vLcsZcvACGc9YQcpwWok",
  "key6": "28GjrbYYnrQ7ECj6pNeL7SS7EZXXq5rvBoe8F9mcQsbJ1WPXnsE8MVvLV9q3p6Ki2NxZD7inmPjrmqNuWopjK6rX",
  "key7": "5zT8zFheUr9PqBeMmtBS8PVPgkyHLGuNQUv3ecsiWCfyP8BwqF6w2RyVUvgQoCwehqDwfAfqnWQDhnFTZiDb3q9B",
  "key8": "2BUeuvmkJ9KFScgoh2ePUQhBeg7XDx4pYmXutDPR7beWTrpg5WxwCP8k299fqXWm39c2xMRQsgtYKkEwWEjo1D5L",
  "key9": "2hwYKvS2XxQvE5bb5aBwTTwxWp4ojcSccctYLrDBPG7hmgPmYU97QyYve5YfibdDMnHSDkRi8okjPcPGSGaWRHr2",
  "key10": "5CrHPJWVKdVrsN6hnSVJRcbpFFVKK2yfFJPyobLxdMGNKo9brE7sQ9MqhMXkW494LsaaQ2kUAsiid9eqoAQyTjS9",
  "key11": "2eucqXf3YaXRn1Xfc3u1mwqi4PHfopWyWnKpVDDU5zmpnGyB2tsyAX7bHzfsqCmNpMCJTMoMu6Wc3YHtcNCspj9v",
  "key12": "3MZFTs7fGuoVRPbGyk7S2FuaCfjuDCyPtekRqLDdQ57C3QBtR4oSpAKMfN2x1BkVvKjMxrFuN5xxw3okKRZ7xqUC",
  "key13": "33EeLQ7pwJY7zRuCnYDMRNCvibVUgochb6Di6imDFMqFnPPZjvLYLvXzzHZFum56DMRuiKyatPybDtP2Wn68hqKm",
  "key14": "5GbeHFs2TAm7cWH72gginAbjw9d4L9C4WWiJ1KTUqvcJe7ed4KSrEQDaD8VWCoUYy2NnJYcbQW9F8C6C3nCo1eF8",
  "key15": "3rEAfV1ZU4xoCpfPacbwH2gBQypyUrEGYdjFwY8C9jGJctcow8Vjd7LPHHTP2XcwVJX3wNb74RuznW4eBHMQkhBM",
  "key16": "3ex28nQZgL9gD7FmShmbKitXWVPN69tqMqi7uM4bvEZFNy5Lii6RRUr4Qtzws2NGkJbxtqcFZSRUWxPMJBfxCVgt",
  "key17": "sJndyv1VAd4VRf7jGrxNAoBe9K34L9KcXVD2cjonUVyDpQC75XDCt8uNoBif1yF4JfG6piEPUXzDkEFzFAxkCQH",
  "key18": "4i1JrLRBb3vHKcQap6vaSFbuBYoM8Snv6jYRuybspRB9aZzM2ji2hubZFKSyTeUeghue8tPjU43SZv8diUo1rc6o",
  "key19": "6px2iMav6kNtJP2YzMhW322buTasxa88ZWij1nyicFd17Drk6PiXf5PpnPjhhsUSRBYXKQ2mZenVaGJLFgTfsMR",
  "key20": "2TVtEZYBhq8BoQ64xoXTWr1sKMuUEfonmgmdaV129kddVhNEtrAnZYzoSQFixH1CZhWoazQos3ZhK99sozRzwaNq",
  "key21": "4nxxEVqtbis5m1LprK7UPF9Q3RfWZ7qGi9HBeMGaXsCoNKuC4rWjW8Etneoot7xBnza5DoKh2TfHKQkhnwsJ37a7",
  "key22": "43rA4Sq48XBFma9KM28MRvYoqrrAJp2AsfLZhLApcBiBuQY1mn1UH29bhpJKatYonLwmiwL5zUXH7c6DGqDEXwNm",
  "key23": "5wdhJMFeNEZBQuz8SxodBCxbPmrdkcANAZyubnjEBr7nnEn5UXXn4HoaPKA5RpLZM5CUPE4qY1sCowy2gzXeugJb",
  "key24": "271M6XWk8Y5EbUSZXwkou3AjGeg7Dni1vLXyCjqfMMLcfbL2kEd6WGk2WL6YUginUqoAaqgU4bQthCjBrtkTm33i",
  "key25": "3bCdW9tCGLMtvLMQUuJBREKuBwp7K7CZesCUPzo37vReymCCL3mh3MBz89rD4m1N2mwstUJfo7rfQ1MFydc8EcF4",
  "key26": "FQhgRMyV5ThhL16Dx15hkZ8REw6qNBRoU3BC5yihwQuSnggTULoWdxCKFzcs7GuYdKmfHkEnELSLehzUkYKQSkA",
  "key27": "5seahLVGsPhfwR7Qj5TzHY7AvyN9orBTxfq51tRNJdJq3sk5siai8Lx1Fn6NFvyv2HjNEXAWZCFRxNdrxAVRbaVF",
  "key28": "3QTFzGDkb2UeVFhFy1aTPqffN84LtYAPZtT55jZvF5HS29eZqz7JUb11y5nGycob91mJDjqXD2bt2F8kPyjB3zjR"
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
