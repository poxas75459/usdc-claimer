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
    "4EdDUCGjzKQ2wUeH3aKYGh8NKq9fuX5Y9bgDxCyqcmjzDxUrTJqtREdBw3RZRTzczXFWK8RyqiEBfLjnt4fBoKfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSuCQ7WBkRDhhjDMF19PweMQAYt2ohCb8zvYtBmSQaf1xvpRwLVCi2auHwbZ23fvhBPuUJKAHcfzVzZQyybWz6y",
  "key1": "47jMnqt5wCKvDnFgFKrj2KKMQ6iKeHZYWm7QocC7HX8YYU3VLHKMdUe3MSgCXPfeNmBWgkrMLUzxEEXQVpXANZot",
  "key2": "4ihSXV7qB6WkVMrcjpZk9zRmzLcJp9y1aKPYSyFank8MYAhGX23TeQpk8UiR5H5rrG3J2MUc3MQzejkeAEC98jYA",
  "key3": "4ph361pnDY3DLBaVmT7C4DvFweif5pBFSkGTQ6RtbB1Hs5ENGE5iUf9Nwp4K2W2BQx2LaenfSpTbqFnX2WqczovV",
  "key4": "2Bgpu1FhkrP879iUkoQRNdHmjVeG2ddBFqVHbWbdAga2tJusJSeiwpJe2cb3UoyNsJWFriPZQQys6M4kdwneZ9G7",
  "key5": "3MnLksUaujKdZup8FcdU7jqNB58be4KfUxuygwDSEYm1pcagWBkvkgtPJzJVioW8tje2QncmZqHybSv2rahHdeiT",
  "key6": "4vxgMBKbVu3pisr9N1jfV6qjWc85UzkbzvGEyt8LR8abnePo2pSTrQTbzBd7ZCn8pLfoMgajmEe9QVTxQLqw26xe",
  "key7": "5k1Xx4zG9MhDSSwEXWDt278tA8rLaH81GwytVgkQ4KAKfK4sbumjC35zaeUYE3pgnvdJHWP6be9pNmJHCF9E7cTn",
  "key8": "5WWm4GGMMq3YmyHifv5chb2JW7Ejb36VgoU2KXqcYqhfX7ekMCQxgeU9PuQ35VRpXbon8zRqFnnoqfkbRfSAx1WT",
  "key9": "31QtRTPwoiqm5313wnSzDukRn4CJCyGV4PU5uizymAzCBa2Hgu9jWwAKb7To7jFxh72k4UuhrWt6DVS9jqc8bcJo",
  "key10": "5mG4fkF51ZZSF9LF2b4XBQNLS3PrAwEgLvquoCjtg56G51vyAbVvFAD4nCosRJH3jfscFM67xjTPGfpvgKwYCKn8",
  "key11": "xKNRDoiwuX44zghtixGbexBU7BKRQKjvSJTqhT1KBhfj2tYFqLo33eK3SWN6eNp1odXQKGJDbFe25yLgXjvTLLt",
  "key12": "2zE5ja7WjrgyrS4LqoSXxm8P3Z6zLxy7dx7dzxgoHJLnjqX9ooRSu3Gg2NzpTDfRAm9ZMZgpyVzMBYDpQgoMDmRx",
  "key13": "1wTUZeNVeNihiEiFuiw3rq37dqZfrQ9SaaSnXwF7eQqS2o7S1voQaeyrcTz6g4yzzGUDMa9VcUGdA3d9p5HhUAu",
  "key14": "5wk6PNhRAn9AbJ5gsPzV5Jw7V8CxEFTCmnB5oSKWqNvqZ7fhKb3dbcBZ1by1rtn97zQqUCnJFPz6MyWNYhZBWZiT",
  "key15": "3ScYQhkTLszBuvmDumEejE48XETGmL4MiM8qiadpdrnFUHpBXrc6B8wsRyu1aj71QvgrUTaWNprJVuEFU1dyME1D",
  "key16": "nvpynpHeuUKK8sLHTook7u8pZo91AVRSphBxFjj3Sn2RFsaf56CqR34NbUaJjbQ2hwBZfwYpqrJxxByunDUM1Dv",
  "key17": "4w9dSgojnKS3UG9u4kQ6sWnoxDrELh3zYbUxyPQSvLtncGJ1VDX38qh3XyPxoyyhaPN5t3RRrwhx2vgcMPwocrZb",
  "key18": "GAEXVpR9bhc3GzskUQ9bD4q82zLX6oiPQvFtKdWKCX67mcnSWd2CS4SMDsBmtwqpUJki4pKSfcPygMjYPv8nTL5",
  "key19": "4UrXp3eb5j5J6zNvm2LUADBFyYMxjRG8QjapwhZy7yrV9BVDiruiyN4HeUSxZoDdUD3DftjoKeuazUtUDYEzbdVE",
  "key20": "364w86subsUVCfTqEiazLFZgT9LUVz2gZof6BapzWMuL7nuUP8LQokgvoGgxCW73YKjJhpTa9p78W37wYUeihJco",
  "key21": "2GWGrjigLsD8LDeV91DkuRv2r1bApfi9ET7do8hYp4isuPuNM7MgvUZhbRiGYDtXiSDi6TwPdw41ygPSC5kFuPVc",
  "key22": "4Kqi5EQkihwTqx5oTqcipmaYtiUcT4X6ZN9f3kDrqRbvpTdonKcqzybvfcRPgumYsCy4jvorcVGn9Fc6b59EAB6F",
  "key23": "4t1cxbRCEtxySW1qyomeDcwsLKqm6mqSPq9bpjEahmPm9eMyg237Jzh7ZiJih5CrzUs4QPk6AwaWUNd217FmNz8m",
  "key24": "g2TnmqV9gNv462gTquMN6t46xVKd7EuQcNDavt7swqMadcQJBzj7qGYcUKZ8j3rsA3zFFGXW2YXrYMGfeKmbWKS",
  "key25": "64Yhy4tTfVvPyDbLVrfprxa2bkhugtSi17o6MiUeLsdtfvGs3h8osEAUdesjF65p8mUb6AMofUwJYzz8gcaLtw43",
  "key26": "31NzguwMhZ92e2CSfaT1EZzkwjPF91cwDo8P5TJExiRVYPzPNMWwo97oV3YK2T4Xixvnr5xXQMHbAnv7SGRyyGgN",
  "key27": "2uYMfmQA9768XdCYh8vumgXnkmZF8d7CQLZw9HA9PzgD3DThFuK3SofworviL5Xbr7M6RJMDevbXbvHtPw8ELQjJ",
  "key28": "3JH2LXXq2YRoXoaomTAiVYVBEypZy1v5Ansme2q5jSYLS62N4qAW5PfrMmsC4Jwy1dZ4svhSpPCy3Gxow838Xn8d",
  "key29": "3gUDAiZDunR57ZzpPVz5Y2YZm6Hzkz5BCjTGNrQSHq6FBQm6iT5SwKPoPPoErhgB7KeY6mEXmBFiH6EnG7E8QZkW",
  "key30": "51pjLKHpaSKLSQGR6MGhSUAzShLNe1PBAFJ3FFaSMNQgJph5R2rhjtomwg85DRBQ6DBBi6ChLx7c8KL32YqdJfk5",
  "key31": "3pNYGNA6eamq93wkPS3AyvFDqCSStsd9itP1rg62CgKy7c8DbRoNYndmh158zw2Srsr3EBn4STt35Hs7veHqV12M",
  "key32": "4AJ5v9RvMvQf212RmcnMHA6MtCsCot6Gh2pyfoq3VVCtJLqD8FDCfsy9UKZAjoLZq4FCcQwSPC9shv9KeGSNhmSX",
  "key33": "2f8E3UBEYV4YFdT6X7XoBs2abCrZ2R1Ty5HsEgKHchFLrxTJkZttGrgkNyTYKFyuN7sb7D5fQMbvGACG9Hf8bBKo",
  "key34": "3Vm8WxWEb6jxiiWJBgRT5z7SHjmEQJbCTfsT9wQmdi7KZratePoThmfhdXeVCqNVBvWcd7jDQft8CSTuw6GSMvbb",
  "key35": "Fpo3mHMQeeF55mphPHineP3faGGrCYqAfxm5f6EdSQCRLrDu2VNDcHe8rXQ5EdapoZiaRKNc7iMag1SPh2ETCDp",
  "key36": "E77TLigw7B2EnLQ1CbQLBwDxDD8A4H4taHUJZA1ETgr62Wm8ZukUw4AM2eeWZjh2VqCy9nPL9qhtpbnRC4pYZf2",
  "key37": "3dSn6vvwv2hJyRrEFuG1nyEYqJFNhZYTgVFCMHVM8oC7tR41FLysx883F92WZxDdiD5gKd4pzYmuciZhCCBCRDu4",
  "key38": "56MeajkW6YVxbDr3swjFVYqe6ThGkrxiPw9DuA6cA5u4qiv2p8LsL8HW4D4FJwkjws7uMDZvF92V5r9uN3DVkfWK",
  "key39": "515ria2hTvzxcRWZuiNLevC6LUzuS6LG6bK7wcFSgLC1jGHAY9sKor1JLgFSMs8f4Ww9kR7L4h87XzAawoxdnwV6",
  "key40": "5ZBbWc6CA6PkT15DqT3RTN1tdtHoG6brQJi97RJqo6WaXUVrem5U7StV4731m3Gp2gRVZZgm5zkqgupv3mbgY8vz",
  "key41": "xn8UHusVWXwDcZkbAzbgX25qp8BAXCtQBJ5xeUro5d2Y9FtLHSSJXAuLQnsvuQe3sRnbW2gFpanC6TPJvNd6jMS",
  "key42": "27B7GL7g2eSR89DtGH5iEAmfhtvGN7ZR9pNw9oMK1xuDH8fq24yEjciZzXwCBtXkgiLQq6cRcimw8Fa2bhzZBMAi"
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
