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
    "c3HYGwP7TtDyfsT54g4Xkb2y9oho93rETznxezrspzKhpLxmBKck6ABC1QGbUMo5gUMyFVHcku4dK9nEajGVGrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUc1Ps2BSYymkypeJ2R8xV736UqYSX6KGT8mxCy8fyCTqhP5iwMJ5di9kFJN3kop2Ndvh54DQLJgUfchb8sSFoA",
  "key1": "1D3MAquc469EsCG6JuSwbVZUYNrHfLb6DGrVWL3j52dfiPTbU5ggAJfQqWXBwHKhDfRckwFnPsSRCSeYHhEZEoF",
  "key2": "29VPwJrqwSSu9MhKPX78VDmHp9GRP3VgYZVMDZhgCZ8v6ifxeuhXfcSGQnzrxnx1pHVAGjHSmoR3cEpsC6emjpvo",
  "key3": "2AffHq8RK8yPPCjq9nFdNTRdc9qwsGNoF7CZ6PRMoeTtNbFMqHDPshBcCpP4rjzqd5FJmazRArxq5VyhtkmxtNbJ",
  "key4": "3ryJ4QFAwxGBXCoQLw9fuLQKqB5VWp7hVeAiNPQhKag1eSAu5h7reVKQHzX5xZPLpdaMJF3b8PG5UmmZFTukAHTd",
  "key5": "3ZGoLmfeLX2GpC2yLcYKnXsaQcokLg74F7upUAcH8ofFmENfrd3NCbfPWE4HYqFiWZPnn7ZHki223Zr6M1sFxEec",
  "key6": "4zwGx9dinQZ2VKMdkg82JBvAXbZKquvCMQXzqJYMkMVpiYHkigytDD26sJRpL8fG9Y8tofKSv3urSigPBMZ7qzuV",
  "key7": "95DzXTg4yqNr7PWfvXGaigUYeyPGu21motumsYjWe5YBg1ZmzEUkbH3vZFfVuDr9ypyf9gK2kUAxmknL2hCmoFp",
  "key8": "izY1FR8zPHQu7R67qx9RX1x62ihLjP5UqoHsNkzByGPwgHxsrgrZk8PVJvnDT5p3AAgqia5V55bUdjGggng2G8P",
  "key9": "5v68d8nxBH3roBJLtCWNr4y3phNiS4wQtCYmtnKvk67ZFunHWRvTEfFeocP3wnjWqNGVZfxiRbBwtUJirLcC7xCu",
  "key10": "4GH2Az2a3umiueJmefVbDotf6b4cgAM2P4czPcYCzbb32UoHfAgHs3ehRcmLpysA9SzEnLuroWXeJp4D3mvibyyh",
  "key11": "4pbXvqjKY5VfUbQYaPidVHCj8M9qJSpqsSxGVHB34H8Ao99HK7Azgde3NMyLFfEuVQPug8rQwA41weF5LVEvTLof",
  "key12": "54zwa5UN4KnA5LjvcjVFcrGL7zX5PrLePfi83RxdBWENW1stVUZdS8UAQebSmCE9LRV4wEW4xsMcu7xQ9cHPwU5U",
  "key13": "2wLxFPMarXTwPQgKb2BVhA3o81U2fUCurs2c4AfZCHEoyB5yGrvjYNJab2WQWeb7FNsxz11UjQ8iNB6faopAWupR",
  "key14": "4J3uCWo7cpfHjSFj4RrsM3fmjV1u2hhk3amDV1QekniaQ88b3KzJB4RivyJYEHcCmo12vgFyNgADHDdm7Ns96eNC",
  "key15": "3H9nVhFey32zq4KFJDptomkdFsA9e9Gk3eVhmCxArkMgAzCS1iMKqSqo99vvpW7pAm6BBSbJWZJ5NkMYJNKvzMMx",
  "key16": "3yYvMGcf4hGriwBadEcsJq3TjoC6ypQH4eWG4MYEGrwsfoViFKwjHWfTqhpRXgucfbEALAeaTLAmBPGphCYWp6Z8",
  "key17": "5tFcK7qMgw8oYjWvrkdfCS6srUJZHE8z3KipuknMsK8j68sd4aF5Bvg45Ye53uaqS9ZyGUv2MaE43ik99DBBvhCy",
  "key18": "3M912ijgRgjDWKnVR3S5LGXKrCdqfGDhuHipRjFXtNai23peKdeokJ4L7LqDTfgw7UtLZAFvXRFE2Nh3PvmPwvqq",
  "key19": "3BVgeBvX6SgR1w4d2zvfeCf5jusnHv5Rmwv83886Pz7jC2hYzDspK4dLs7gFDtnJPvE1b5kLjNVzkbcFPKamcv4v",
  "key20": "5NFaaTs8g5D54yrotC5GK3bQ2Hhci2xp8hMBK6hUfuhaR6xrC8VCM7kBY4gaanJkbGH8YKf5YnkbbJAf4yazc1Fa",
  "key21": "YmXMC9wjqvUHpcU6wmaBsUZnXDjeyzodcYS1t8KJrKhe5MKb9CeCSyGJP1aop2dAWT798pLgVAmZ45xt1iZUP9b",
  "key22": "4pWrRt7RB1Yvib6SX5NJMPD2ZwZTZahLFToXG6bK2s7tMsXuMnCgx7YUZf2Jm8sxUWQSthJSzi2bwZxm5xhHVVmn",
  "key23": "k1MWNWNYgrNvr7McgnJKyF3D6P8g2jyA1hLkdLiUw5Yhx9oD4pxvBLEE1aENoLN4XeuKuBMAvHfCZtMfdx6ffod",
  "key24": "5WU6usvcb9PJtiuKrPotocAHcu6cYGjHezQo6NLCJkNicKa4A6hqe98Vj3GVQPX9RiM5ziGbw98nDqunpN4kzwTr",
  "key25": "21msEnGUfEf2bhDUUF5sDPEvEWwU4cDta9CFXtzrfc3bPGXcrmn1nRuFKg3t5B22raMxbK7zwnCiXxW7LT6nefX1",
  "key26": "5Bnfm9DSJuRW47Gysu6s4JgBmLVjXn7rbRyLe81fj9XcFrVXBEBimhD4ZCXrqCBwqTaNffqSUEnDCU7khEX4yVxX",
  "key27": "L4KUt1rFF1KGUb9SVWccwDrxhix9xHjLdhqpobgknnCZ3eYzoc4oFC6RhBg7Xb6oe5UhtmUxyM9xcSrmFhM1FeZ",
  "key28": "4dmFV2cYCSvPsCd1y2oPiU7ZGn6vxfwjAGjBDvYxfVyN3Zj8i8q537TbxTiVKKqQSt68Sds7H4zxuzVB2hNXSQXR",
  "key29": "4WzrexqtNHY79nT9fbbHUsWsbGXF8M8JCyntnp2myjsL8Myk8SrKxVwJabqry4iq5Q6JxsnwA45taNHc1y9UJNr7",
  "key30": "3GwkndEvpmjchwn9KJwCUKQsHHVhJ7dbeQf7NaJPGAaZuWP9kTHQHxa4LPxSEYCjXYR1dSvfGo8rSr3ruDTqEoFQ",
  "key31": "23LcBDCnJVrEAHaPtqYRPhZiNbAjfUVCBr7WLwKVUSvbJUiTT3rrJcbYMWvDZHwBp1ynunV7rHRi1YXD59MK2otH",
  "key32": "2rGNcjNhcPiBMPQhSABbZ8Q7Pb5GSYv7FSZTt62Lc2uMqD3dEwi2D2hPzYtQwPFDjx1AisxufggABv7oRyzorog7",
  "key33": "2VADCnnujb7m7QeUqpdj7dRUUrGzdLGyuVsduZ8GBihYB98eMcPwDwYr2LZoRz6pERGHNnXdwjmK3KzaNyQBY9DP",
  "key34": "DbsguiABvsUs9F7VJRUHdLqxtUDwFQ6ypey3ryp91VuL1gJdnbyMaxaHp5vRvXRVA2qEMnDydVYxCiZ3JMDJHs2",
  "key35": "3UMx7A9kwmoBnrVkXxVopjKDQFqeyGUFLFGNhmgneDXm9RabweqW79joEDr5z8TjG3oJYk7mxTvCDzT45Np6d5uj",
  "key36": "4d6igHLrZpnD1PUxdThak9rM4aEX6PVD4tUTDHCUYkrutQVJPbq83NsFBS3YvCwchSUfsiJ4JKitMuHiGnKwCd6o",
  "key37": "3tZBCKDJRKrDDWkFDzc8qZJUHKqguoWcisMzHhYQ238TEtjb3wTN6gbPcwPADNc6nHLocHwM9o2VKqn9jgrBQT7U",
  "key38": "5B16DseoHJeM7ssTbNxLRSVuMkZyp7mteztQL8bcGJ8kPuVE9V8aQD1NTwkqumoCsPZ6Z7UCk4zfxfyb25UgxYxd",
  "key39": "eD2uhnTLUhggu8AkK396muXeNP6bg7tXEVaSgfnBQ1UppcU1c2Z2JvKW3NX1QnVmRPk7MUYDKSCTfaE42v4Cvtd",
  "key40": "5QfDRUv2yLR9FBXAaXNtfVNuLNxQVEfshogwmHFzZnLWyputRUYyVM4MNcxpQsPCP7K5XfnBw8ust6uk6do4daLZ",
  "key41": "5WweStz8Yg58MmjMGLpDknCQdpbpHHxmuFyQ3y6dkgpZ6EFRcoWHzXTnzPaXXGbVyQpDeShY3DMNZVmWEE5D8HMo",
  "key42": "7QwxYMH5iVxQo1kGgrEv1nBB9odAaUPTACxRfvxD2c2rRFXq1cZrYBER2ZGncXKw6LzpJyQmaHLhuDswWZgvob1",
  "key43": "svXs4qyGNsSECH9vS4E6ZCzJziQJxUxsTnQezNMEeR6a7rqMcQV3bHsKiN2ZEMVJ9QFkRnqE3Q9Dxj4cz3snUyk",
  "key44": "3NUip5j34g5KRM5AJe3a4v255AEL9vbWy62rezGNdAy3BRf9L8Yza8ehVTKpBFUVR5T3tcacQw6sFTUT58i8px1G",
  "key45": "5pKtx5mZ8P5BPZkLJT3aTjUJwj7faVf4Ub1aU3MoJeKpTVzrRckHp2HdYy1Zgsb8EnApC7H6vEuuwKgkwBuRSMjJ",
  "key46": "5ME778VFKreokgKB8F62eWJerKJjgpPWac4jntJoVzxKXKMD7T8yUqukbq3nh9FHYhDj9vPMxXHpdu1pnRrf7RKd"
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
