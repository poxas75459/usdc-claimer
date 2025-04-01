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
    "4rXkkne6aEpZ9y6VuYPP3sqy34aKNjETvxwy7EbgEk4qVEEVyX6x4SHUEfDZ6BQM1V9CMcTqWvLScRtms6bT1qDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvM5cCwyW5ZuLRB53iJGrYjAEnw2BCMj3XET5oKYtKtUM9AFdj2GY6jUb1vbdVTG8qKQ1hJRft6xyDzbxAxqqtt",
  "key1": "5afjgNYhspZWLhyo6sA45jjyozy1VuQcJxk3Uy6Mgdg1YTWUr3W9P3p8EH7vZfDsm7qsvBcmjXD5X7BAYn1qRUHH",
  "key2": "cUXRSSFrU2VMB68TbeqhFn1LnasdwdcrWJXKqa6ZuuYYfjvetMRTNipCVkA7j3kb1ZY6Adgk61e6BMLZbNCsnYP",
  "key3": "HaW9biuXqiZquQ4nHZu5SttQDZMRb9wKrSA88LX2vrDqcC2FkubAPFrV5Yv7DP8tmFoPbocntPiGnGjBi3pFZA5",
  "key4": "2nHN2AKv7EJBpLrQwCYHF2GzMTmGN2wtwrjP1SYckN31K3LEoAS9zfKYSjfZLzz9BBmbYBGhU1jwtsRfmoywuQXe",
  "key5": "39R43nD1i9eSrjNAS2h9G16AJ62D22JbShuK9AsKz9cJ7bzQ7TGrbq6MdXW3teYHRTYeSR7gYbSkLE1c7GDo7bSf",
  "key6": "4e9vbk3vaQF4LLR8CUVZHTUVcy5yzwGbe6CD7qoJnzgaxpQjboC3wLkjqddKE2gA8wMh2SCGPVSxkYAE5BFysDZt",
  "key7": "21z2b1AcRMBmf9JFYTHp9dirBAGYPsvoQddkcR7EFjkxMxi6mdKkuL6pL8y2oxp6F3JHc5qGgfn9AGReZ6JCtsJG",
  "key8": "2x1pVw55pxU5a4MdNQwXo692cM22PsrB7P4EnAjbpTRTMMjWxtpqt8ZTG1DSgbMQQ1Je7xq1dbRGzAAu2ZYgfocD",
  "key9": "2eocfLM5bv8aKApeun4nY5CFKKnWtE6E3LQPjjSNcT47JgFyxLKj1LBY3eqDNDiFhHLFMYdzprfQhEAYfbLXVdHd",
  "key10": "3kmscTLvQpeUntN4uSFHbJJro3LfHVfRrejnTpH5H9aYgCmv4XuRwmLyTiVb8MjcNhHCyawD1e3f3AqScN4ATKMe",
  "key11": "2s9ng9uLHVUDbVg9xqSVRhSBeT3ipoTTTbiNU1zhUHspPUjgrYnRH4mA4UL5ggGsekQVBUt872xo4PvPWqP5mvHf",
  "key12": "4Vfrf3R3YWZsnNZMFMewGTkyPSwHfMwXoZHbJxr5CHQ6Kex1kKGpgWTUzQVHohzaeTauedfRnW2kSR5p15WjSpsC",
  "key13": "ZhPbU2pJqWQCkE7UqLpSANaAoE6JFXv1Q5Ezf1yY4UbJBPFfZNamdcachv3H7uuBn8r8iVrPncxexParFsZUiAT",
  "key14": "2m1t4mtZX2juTQASGkkoC5DT9aFfSxEPESZst5cYfvfJ4eQpuDvfij9xTh8xQiVM8G9y4xCgQqUEjxpNEhUUd7n9",
  "key15": "5mRNivPRU9timZzMXknNcegbiJ2vhY47ct5fAZHzUuyb3i5RxuPbajccd2LX2ofVbKVu62HjBUFQuQhqnRcujtej",
  "key16": "4BN9gCuRCBqSHyjcFkDbknHVLfGegMCGcrsnQw76g81qs51cA8iDF7dH3oMVueUn91n3HAUEFqDtXgVqrfbETntd",
  "key17": "4t38pcpatL9gAp3VRpsLNgaoQDHonLq2G1nBk9Pk3sCrbmyE4zveHRGLxE8C3vh23hUvHtXN1rDRPvmhHBiirFhi",
  "key18": "4qLMJWNwSeAwe2WGXTugCoKYTXXwBgLNmNi2tL2dE8mhPoCqNunYQJMUw7vCWxpNzXZ8L5yE88Vtqt5DXGS4utwg",
  "key19": "2ZeCuaPcEg6DcbyB5ZjFqwUBfkhsKEsVDfyAX1cYQuZXeddNZEEq1uXFejd6b3eNyawQRZRoJbLHhzGYrxbS37Eo",
  "key20": "48X5Zrh2PpdpmM1Y8u5Mk3CF7B1UBvL81XujU3EZBiGVmgnyTxo3hVLu4CEbd9iChoi1hManq3FWiLGnB4W9TE7o",
  "key21": "54Y5ZnHiHJSmkL2FfhYiAEu4tM8M6NmHEiaSgDJeTKaRkY6SPGijwLaUu51xqyP3eZwErciWehdT7wiF4hvS7PHe",
  "key22": "2rxzjQrXN8fPgDWGH9XJ8BgNWkVKNwzg1yDxif1f9Sc35zbnj4aXNCoPpBKuVezQKHZyoGWZ7fWnM1xgoKsBncLS",
  "key23": "2QpTRtYSBPDCPLiWV96MuNytPBACnDmsA8yiVj6zX2YAqmTGPrc961NuP8syaAXqnEiP3zAKQKCvEjsjW7jnEq8i",
  "key24": "4yeXvkmcR6mJ7hHk152aZDG3oJ8HKS9abTBoJx3bzNndRDoXMx3Y8Hw3dXoEVG5tBRGs1xADurGi9hnnMJ4UeU7R",
  "key25": "2iC57dHh6wka5Qammnsc7Eg1P2apC2UGKWMvg436uqUtBeW13L5k195AW5WWgEviB44LC11naaxyxpQnbdqSVoaY",
  "key26": "FMwgZfVCqmb9vkDgYbwwLDu3iF9dzQnqHJk3cVpHT7Xy3s52P2q2tQvbrXShtw4AgPsAftTuBamzwqBfeGNHrPD",
  "key27": "UevjQmjVix9eXFJsvc9UGfHACvpqDt58JugheRjyJB4SyHgsKTojAEyd4HdvPtuXQq7JFgSQkmNkSZoAydt3dVu",
  "key28": "4GYR1HY4tCU2tYoUHLUfkRjRGzzjSR4C37GVyFuNjBZK1BYSWS9vqjJ5wkNF9MzVxww6veCqmjUmimsYSa5ZTF4N",
  "key29": "3hDYH4Y17iqoBu36AZkk1NeLtDJR1QszXxTnroyFApstf1vB5xLYusEXTU1huzLKHbQaFGxNYEgcMsSzQZPm62N4",
  "key30": "f6tkcNLdaFridNtxvavREKWVY7JY2KxNbigCUxF3q99pzot5EYwHHDDnNquqKcFXyDPCxgW4SCB8uH21dpGKvSc",
  "key31": "4wFroscjcwYhDFdk9fLmPB8wpgbQ3vQhgndJVUvFDENBQC8Bb6JYUbjhNa9JSXKiTFjp424gPMwGhafdR9pvUoyk",
  "key32": "HUWdTwFUi6Jp9ruXKw9KAXcP1FpHosLTGwecWf4xi6pKyo4ADg59Vg3qCkYgkqUEJXmQcmXBkSr31S1yixiSV2o",
  "key33": "39gckJtuUy81YQyqwkGS8iyBjqf1ZzixQrH4mtBMSvrfrKvEN2y2jRvqiUGgQG2BmZasFp6bfV2bS9xZo55E2FMy",
  "key34": "5ncQBgDfhgcrAiurn86DJRP3f8Rw2rsV5ih6Mn2waJTU7FJLKVaGkWtEc2zBQRVcrt9KcAfn9nCFbaRvmqew13qo",
  "key35": "4y6GjHRm4jUUVMgkTrAtQy8GHqnwXVidp5h4FvVyZKvi7d4mLqNU2dYDvWB3nQFS9mcDCJoX1fAycZxvG6qHAKf3",
  "key36": "2eRtDHonEwPqeEY9icnAD5Htmts8kp8FWmJrPN2jJEC3FstxJRVWKuYnJKHAKGrXb9LmDBYSEVzRSyTy65PEAACi",
  "key37": "5pD1oS1NrF8GPHDrwnfTDqrRQ59dLqfbBXpSvpXx4bWV5FHYqa4FEnHh5sAtc9cRz9131RFqgNArrNyC6MXhoyfG",
  "key38": "25E1GeZFk9GuVhNriwPC6Xo8QGCPG99z52NdbPQcrR6PmUj1E9ww6svAvKxsi4ty9gVTKmYnfXHGem9YJaaAEdMh",
  "key39": "o2Yfafs7ZWiK5LhaaKmcDQrLkHtHAXkALU9Gm1yYLZ6nqbn8RdGbop4WCWiizqiveQ1hjLjMbWKtdbHke9hhPD5",
  "key40": "3Ma5nu31fjN3aYkFF3X16yiEMvVk95msMrKswKR7MYk8cVN7zvQobSsNqiTQWL5mH3FjQTUZVRcu1xLL6JYub2p7",
  "key41": "2ZoFXdAhTKtyGq1noJzvGMY7FKMicdExEKfpaTRPHztLMEeStCkDmrFtM1QHrsSsHimN3hoL93XxC6GxAF4as2hV",
  "key42": "4YkcP5q3aumQN9M6QYeuJLboFoLbqoYnNBsoktJmEzKhfgDo5pu1UrpJucVTfSWoR9bMsBVLj2c7Hize6gsu7dFD",
  "key43": "57Ax4VXqsX7SfnB8soSJHNwQyDjopJ45XuPK6qYupG8VzsQykPCPs28JLbF5PokcNaGhH2VZn2pPoHtYbph3NJti"
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
