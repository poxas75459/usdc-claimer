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
    "mAqDFNEXezmzAQKporBqQbyiGgVMN7fBH8jQPtE88p9SQ4WhqU92vCEE1pVMyD1UsK9o9H7ntAV1KpAen1k7mdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3V93HXHuZBGbZvXotVYHj7aLzkS9CFeGYVXD37UyAtc9jsoE88XbW3jmrrMUczizJqe74TrYXb6FZ7wzHTTpFd",
  "key1": "q4bF9MphdWAgmzCRUG2wfJLGJGK97Nn3gws3vTjr8vBdqfYuuEZRVmNQN8Gv2WwAdjrFBVviyjyPvsNxQx7pUra",
  "key2": "5ij1G2fG9mvgHqpUcVHQaEeuMXSy98qt8v3PNL3sMvXxxMqfsNZa6MWi72Xn2FBzPH1sujtsYXSAvbHucQoGQGB2",
  "key3": "2yZN88c81hp8Qd2BmYZMzPgUxmKRTBHJkG2q68JPm57LruKV5ig38EcKsza7mS8HrpmJXfVqzC5AFgwxYxRaKk3y",
  "key4": "3Z4WXnZCJF4paJg3gyHXiwTLHE6QWaHB8XUG1i4ALHqBUKQRWdM9T4ZGGqzdRcaJB7WW3VWNiR9PHCb2qzqY5Swr",
  "key5": "2vCyoKVC3s2FLufipc1dAzHo9FNtijAVMCwbjYA3R7JtGgLpW78QoFU3RLm35F5c3nbMmXWjhs9E9x8JiLMzTBni",
  "key6": "zYhaCRGgChjxWu6vknctDDtNmoGwMRxxsbbVzqMaMwMuoWLbAfpg9UNErNFkUuRpMCXbH49j2qHAwKYvy95sbmF",
  "key7": "3V9eEYWtkVxw15oecBiwJ4HFNc2C3STpQtMLgKN5BKjL8KFcjMe4kQBsnELoxgshoaC4Bgjn4ervbnMy9pDUFTNM",
  "key8": "3cRju3Wt8xdz1egVpxJkc4dRnJe3bix9KFMTUJ6AppJhrD4yyjkFthoTctrvhR2PwDMNyu75hk5LxigzJEQXeiRu",
  "key9": "jYNjgHnSu9in1g8MRjjsFaWUHJP7FJCcppBQu5qV2ZKW4Eipk6UhBQNEYjRGYxqsAzpMEEvdqvoYv3GbjQwUF4W",
  "key10": "4FC5BfpUZfqTF8orAazAskcatQXZmNcMEErP9PzfdFJdUEyY39vJWBs5mMj4wkzf84EGeDpMSZUj3sLJ6E6xyLBU",
  "key11": "3tPzHikznHPy6aDpXsDAZNrdn1MRBCb3DdMtJZNk8cS18CcuozHTne7u972UBuFqfx8d271iCMwcXXntgwubf9Kq",
  "key12": "533Yz49ftkcoiFnH7fwo4Futkspktn2wLtTjdcKm9eyWqjN28WGMU7jnrUvJKD9aySsKx5iugcR634guxWWi1sNs",
  "key13": "2q6DWvX5r1yVrwZoSbXYr4jrJtakzPKkXSbdVNVX4k1xeQ2dUJkJvjf8jKYbf3SR8Ns7LfdLgTdSg9wHmJi1HBxP",
  "key14": "5vLHwSUKCgKqN16jE4VnNgjbJdcy1pnVERqupJn2PmhMUqqSkk2EwmgRDgE4W8pJy838SJh7DXvqnWvtbeQbooV8",
  "key15": "2Niqm8xw4Ez7fA5gmj9mgQn7yaapb58JQ8BLWnS1jLVXHs66PuPLvKE8uS9v6St5ixhkhASLWQn3pBAH8yP2FRKN",
  "key16": "5YviBsUZWKTYiP42k7WvCazzotjLBJqrrCADRWuPcCeKFXccrTWSPTMJpHfnaascrxZZABQ7iVEx7MFR4J3zntW2",
  "key17": "5dqeevtTnkh5vjw151XRb5mMtm7Qa6Jsg3isSe8Vz6ZbhvzWTsHRYPoRk1eefWAm59kTvNMgMJ8esPAQzPcqfWbe",
  "key18": "5FpW2fPtu6QML6qvocCj5fRojkYohJBmdCRHABtmANmegnXPSSsJQkGBsjGpBHWNDpCKwQd9LbuNeTtxA6TEkQyV",
  "key19": "5NRxTjntJtZ1u1euFrL2K5f5YvyWsHGQH6CB2huKy1iKEcahM1FP3ixNZW64FNBxmo7u9FatYXPykxq6x6unh9Yn",
  "key20": "5sUB3fmvkanoHe6Gg6sMC5qDg6ARSEQooTzizCm5VYPDRR8EvjTxe8wgdTmHT2TVs8tFYyetJcKJaLmFpVdVUMns",
  "key21": "4hGs58rnU68XhE8qRozeZGsqnYJCa1NVsSvp5gVZpXVa1tvxvXYAjbzSweascKad3BUFfHN8URH3hcTESEnxv7nR",
  "key22": "2XuyP5oepUgoX45iRGx2mbrDHFCMei3VWmPTF827LjAz1BCvA2RLxmZjph7V59kpphHzdQNkht7cBf1u9L4a7bmc",
  "key23": "2pyBBnfo1g4sYpQifwAULjV8KUqPtrbNmyxLWyC62Tkp1imwPTVB3tBoZFvJb2FnV4sMYYA3aYVqjZjGzVuN8WZe",
  "key24": "278PG89sHrdRFwf8g47GieyiQNfXxM1diERzFthGND3huFJmj8ofGkL9kYK47hMK1sRpTKjMu7cefNECstVnBakc",
  "key25": "7VHJQDAhGHE4rWow2Ha68QJZohhBSR1K2c3dkT2aFe17cURauzvetgzWg7yyLBEFU2EYjNaygzqt4dgek3EoX91",
  "key26": "5wpePys3ZHP5YxGALY3oaxhhjRNBEQJ3evcHKfiXo5K4e1uifpvDD5Ee17QoZ5b8CkGJizYURzXioB7jcqkWsdwd",
  "key27": "4opUoqivCdcb78W43ZAe2PgE5qAW7SKVQj3hLrhh8q3aLqMvbsYi486MhMvgFWM1hYvqujMhjSNxzcVkrjV9zo2g",
  "key28": "5La2ugraoUuzAw6tREF1LeDqjdMyPvETbytu6tG6EqAsdr4ToCtszEGysMzmQRc6WzQ5drrgFfDUqu5QZABth6T",
  "key29": "4RB8zkhx8NbDVHnLhVzGBdCVhyryPE2ofJ1Becca7GiXQ2sFre8vyCKNH2hgkQdnXZMWsx2nuLJ9Et9nBtv7vjcL",
  "key30": "2RWRT7zSU51knmp3otCCTrCDUToEYtupxgeGTq4SDwEoX5uW9yD73qcBrXggCyiA7Rd39sEQMtY8owGzyTBwNegD",
  "key31": "3SBsGZiaTqDw5LGvvKp9bWs22BFqSQkAhpmUh5qTFGxtxcxyizu2BEsW23rUsKA3GLbQh4tRZmV5Tt2Qbu2VEayv",
  "key32": "4J6M9D4hdRuV3MUM9fdj33hfL3FU6ozNPEtCxEKxSqJwHdRX9ryawi26cSC6QETqSmzznFnnypNQNxfMa6WL8HPB",
  "key33": "2dBT77YPEuX5dBrzVaP7uEBk3h4E3YchHsLKKgBPXh2umL16K849V4kMaZccxdnDC2iyJSnZLSuJtJoDzmWm3nNr",
  "key34": "4iQevDixSXQqwZJN3Z2TZBKHasVBv2wJPPycsvZF3ZrXuyRXDfsbBYfN7rfEp2ng8Eywoeau1vd4yYHd9o4tZE3e",
  "key35": "E1i6uHEgKt4ySRJqzoPeoHeA2jeub296GgsdJrfhfEP3FV6JmwSMhysgDjNPAmqf9sqxqRbBx8xxDQzVkn4kAWB",
  "key36": "usLyabU5unP87WkTDiXXaihn1dTsWpaQP9CgQq3sV6a48TusVzDHUnr5GayXUGqnyz2jVCmZCCEafWNyDfDb6mm",
  "key37": "4X7Tf5V1QzQV5sTidirzYEYMJuTk1e7oX1ywLocXWKBoWKRKkAL2diWt6PJdQVvqGRfvyttot79sVtiDi5vQVLaz",
  "key38": "4PZ6YJ1zbNRcNhFYTpCkBsJvjjh1Xe6y9dv4AoiucMArZQut5E8w9EXiXfMD3Y9AmJH7Tgb2e8f3yLPU2G7aX3jh",
  "key39": "5xmVqcs36Zi6FnJzCogz4Eit7Krh3GKaYVfKUFjxFek6A9momw9F6zugjCUrM1EjXEjoovpf1hUDVVbZEtWaXU9M",
  "key40": "64euieZ9AeWmQUDYUnuPD1E6CcCDSkF6RN43TXrtoZpNVpGV2ZCzcZnaipTZhSwiM7QiP1B88PbgTz1VP3TymKTj",
  "key41": "eis8ZRL4XpGjSaZF1x1UdJ57QXNhG7LTBhVoMgXZib9xAMNDgQNkLsW6wNUsPXuKZdECET6rKnXqSfXpA7XaXCm",
  "key42": "yr9Xzvd2Lc4C3Ub8uGux7KWwzWq7wjZZUfvRM6k249SttzUFiSPmbrbc49atWMEaoUZx3MWCFtqPE3Ynq999Sgc",
  "key43": "2qbHmeEGSJ87uuNhDTeMdYoC2dxLzzzizt9iihMPQ5GaGD4gVmc41qbvF1kUovJcumeNjQfsbcdfVitPRDoyycFr",
  "key44": "2PLP6SjQZRTCe1df4pPy9ATxbuauJAKKn68qLt6ksLd57M98cn8UMJDGm5p1inUcUfUcxdPhKcVCAYqP5j1zyjT3"
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
