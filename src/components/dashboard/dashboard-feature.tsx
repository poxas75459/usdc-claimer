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
    "4YCrk7upTCYEVSGRFUnVGxGVgwy4Gxp3diZLNGipZamkmxkea8KXrHGSZo5aGdK8qKurZcyEMso2B33Mhpn9yTkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPW1EtMURPE8RCipPSCS5bZLLacHcPqYQgCGWHV5rzf5dK5RH539fx4A8FQoczxWhqiTGjXsKPk37YTxsMdDV4P",
  "key1": "5Ur1sYBP6zehyftCu3LeoQ1fo7AJikDZ553qTdcWFKQ2kaachb565XaAyQdcw7TNRH8rpfmB98AcKcJuq9G4R5xt",
  "key2": "3vjzAJPCNyxnkXYdwJ5tfJTzyoXQFfsC3JDSVLSkQPscfqhaVyCkjttgR4emt1jzKsHNK5Qh8XZ6yJcG2cm41gMe",
  "key3": "2BWnzciuh2F8MzAjE8FodSrfRHM47zQSATZDZRabdR7m5Le69tApbKkJM5Yrz3s1me3HMhAuoYU7cGaFrwXxTsNJ",
  "key4": "3tMXgM4NxnmjLSTwodezHB8uvuRKZxRpGfbRFH6FTqYkwhjrfHXvYKMq4AJ2HdztauttZ9UBqJYMCskTaeYXX6Zo",
  "key5": "ZWFidxnR8hpxHUREmc52MLFvudgeo4Du5Bc8k9H6YkysC9BegWFKV64LnPzKJjkA8GBYyE3b76W5yWgUZsTT78H",
  "key6": "5LdeAuuwfqtQQbGs2j5xjkva5u6HyNZtJSUoNN7Rgqaq5xY3KJpg5icMAxwf9QwcLBrf1xfXP9LW9PBfindQEHcc",
  "key7": "VS3Uyyuj3F69KSfbpnF6Ko1me8BKUDcyjPq43H4JazsoE9mT4QwnCmzmQbireiSGAcGj9X1rxsboKAZDXhFULp8",
  "key8": "4XUaZMAaWbAgAHLBoJwQEJJfgN6H4SPRxxVkbdrxNAxP7TMrh6EknyALSafWSpGAYcLGe7PxyNs7f8cAVGLjEr2u",
  "key9": "2Y28pktz6GCXF8ws89i6vqCD2e2z8HLpUsqNjhB3WCcbjssWDfYZ9zbraMU6n2qrviWPLhJ2kHm2XbDkPTW7Ti9f",
  "key10": "hZryFpywhRwvmfmkeutmquzNLNRQYkyZPqr7njNPYQnh9uDvbNYMfRMEPE7dK2UXTQpbDfjmXL5ceVTnHU9aSBX",
  "key11": "Qe5LKSqUJEMSNPiM6PmYEBNYnwqU8ZaU4zr1j9YGvN8m1Rqfkhcw77ZKVo8hNnp8CMGNRdn398aUcXCbDaRZgST",
  "key12": "2a9Hw4TeWLMCDd8TxxAJkouibVnLQNyoPkJoNVG5DFB7kuR56G8jATfrcK9Lb8Dni9DzUaFKVp7uyukauWfBTPTx",
  "key13": "4B8bk5fr2iBuiH4E4HugRMVXh4WwVSEBWLmTqNVFvhWMga8FUARwVoCquRPbbiiYuqGbFJ68qbKpAVsi8eU4uZzt",
  "key14": "28AsohM2SsZ9F3A7WGdFaTUmp82tufZrLDcpJBiow5BhuLy6pS22FPF4dQovpVQHpZ1rYGKz8AZvMP8hUFGjJ1wr",
  "key15": "639br5X1HZeQshKvdcDgWPKgxh6SC295rXZSNyTCNq6QP8uTq33e22NRBALdBfT39wpr369Gy5dESBjdFmFwNZaM",
  "key16": "4udhZ3XAN8xqMuTVHoHJryXe8Zw4kAC1XY3ZMGQLsXqrcceyQ7561rGUeACBrFgGrGGbLZBakF3PJYvMDoFoA3y1",
  "key17": "5irVmTNTRvxuwioqG7hobtMyUrNk4LqWihGZ3TziTcxHqqmfBvQoi4UsCwyBpjijGZ5MxzGBbm8eAWNy9shYtVAo",
  "key18": "21kHHztrPh2ayHPzJptaSSXxJuB1febEVPFdmLLuv7cKqcQYndmNTqLJUd7SfLs4kXrcq3GaC3TvHRSoVjAmjh2e",
  "key19": "45ve4djLksLVYdwCpppgfU9cDKQsHW16fEvyoaNT2pkYx3MjViV8P3mbZhao6ZZzkiSmamqqKW4FNBHL3K7Ld1ev",
  "key20": "3vyjoiTcVPXYXQueU2Ks1Krw47w6P51ccEJ9sEVpMS3kJ95WerCiGMcziyoGs1tTaf61KJQZfxQb3FTSMAAqv8VM",
  "key21": "3xwbvRNyqzKBjzUHxbA2bkAcF1ZGEBAJ7wQxYeicwHdkWzokLPvXYqZwQdUitTuVz22xszv3Hw59oDbbyptLanPw",
  "key22": "37jjE9t3Tkv4exGqsUXAgS2tedk3KcSJdRBYiS8W51bNvpkZvY2f8urUeaT4gzwa4zvEJJP6pwfXobFtfrb7Da4t",
  "key23": "5mFevkgrRVQUknj7zyfiPaMeigN8RUiT9zQuThxE3V4ufNTxM6hyvZHJjChgh1MauCoouauqkpmjoEoNTDjKZnH4",
  "key24": "5PytNJWaV9cXhpEAKXESCP6jR6sEcj8sifyokU9tsBLLyHgma2c8cAAPt3JzVAw5pvwPAiqzfJY953oY3aWZe58f",
  "key25": "3gmqe5SLoJSy2jMSVyuGpgbsicgT2TYnbyv9j8WfzAN9T7ofHTzUojveAjMcPL3nxb7BYoCjRRntbX9EvbUJLD9o",
  "key26": "4bw6SrzzEgnkhvW1BhYKF2uQ1yqvq6VEJAZ3WZaVvkJAxQ8kmMMknn7fRvgEGn9hVvEqhrRea9xojfdzArf7QCqu",
  "key27": "29MK64hC7YLvcyEYhxqGx9nXVjd1EdTMmvWTEDwvcwp7VYSNo1zT4V4gGSnVioo1nPrDo8TF6RiBT4M21yMM2e3c",
  "key28": "5RjfTPz1s9MqFNEYnFbCBgZxvjvQfVAwqa6hCiDYUoYoof6uUVKWRsgupgnRoUecEd8DH3maAB1oREbAcM3GVqhZ",
  "key29": "5GXvXPb6kAvTcQeVF6DasJUzHAdQTaoquTfPT6dmapSrfU4eGsUH9ZMhcQCz3LFKsY5STnpiRuVVovfYrKcoDE6w",
  "key30": "2nqSJfjkirwwqsMivEM7UB4kGKCrYMJ66p9cMzQv1vaQ2pHFNbC8BMY7zmQHsBjXn9pZYsz61hxvXeETWrWYiNdV",
  "key31": "5hsgSPGRPTqtFrKkaq3SY5xkvBYs8itpQf7wqwCgTwKD6hWCBFKQn4qYMrjD4z13pkcw5YkpaM1sAoMcSrXLSMW9",
  "key32": "3XBVdyFtK3TCu5RgHtGjR8eTFxiLwRxwYni3A1TqbZe4utcigitM2VajBTcs9BiDUWEsKFZGm1hD1PKKbBMHDdwp",
  "key33": "5epdmYPbcKUEcj1hMYbYBM3ejDXYZKULEzmBh81kYoUpKKnRXP3MRXzrkfvboqYRdBgQWXSQCJG8oRd6T1vqsKjR",
  "key34": "4RQXdWN5CAQH8zWxLnahX2Kv6sTc7K6zck9dkx8n8pbYLyuPqQQXoBkr7hxLbeJNyUrwJgYxNMEiozURh72QKBHa",
  "key35": "4ycgpK3B96RRDUyLBg43Ho7tQiQjYZTSRz5sZzYkkWSvL6RDHzSeputArHWDmKSbPqeQNQDebNfMUMciijgwE62k",
  "key36": "h7LyRm8LpnGHHDmZGUG6ooBiGhBuTEHNhRFo6nSJ81BLPhw4LJmHTomhm9KM15GpYswCnQazQVg8P6ExDX9ctpU",
  "key37": "476eyXTqduddkB2pBha3MMaBzivdp8BYsyEXVLeQVvew8gHh6TPh3SHn3CFKL9nWobqxx8KhPXo9qtrXeuGYJuJf",
  "key38": "KwZSZzCkgUHjHoLgCWuwbhxW7wn8jxvbvBUiWfpEngn9TvP4Gkmbdq5EKeeXZDLDWtC3GiyjLcK9VhvNxm2py7V",
  "key39": "272Gdq7iw2Q3uLbkBAxtBcUMCbVwf5vzompRDptyKtBrzdTMmwcRNezBkeRS6ZNNTirmYgz8gzeYxADmnHApp58Q",
  "key40": "3Yc1Gskrf5qgbAxzg6ryKKL4hsCXU4oymDXpJEvt3AMXkGyrj7iwz73LRigQ3EvwbFmw2Z8EhtcLbzAh5Qwetcc3",
  "key41": "3sonAwZwj8DRpY2yb9V4Dacid4q7GuguTrGVwEYJ3sknvhzvPLQJU7hfJzxakYeVCtWsuUZV4ApsUahM4xPSiGMj",
  "key42": "5Z1TqcwJ6yCDdyvKpqyQvxgGVMx77xf4yNSZWM6PX5pBNexPooybpb94nRzEtBAWQGd4wyb1SKKPvZpQgVtghLDH",
  "key43": "4jGrqp54UcBBZbSG8daBnoBb6Hs3JQx2mLUr5s9Z2yoJsBrMPvNv2UgWxZ9vLMnjkRSqw1yxLnfUBDrPgTGLrdG8"
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
