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
    "4JPbFK56VckRGEzjZHbJYT7h5qQA3NkkWMNcXhix9GHor1ersWjPqtBsTUqjH5AtLZBKYyPxBqdYp7LwZ86E4ZrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnJridLvAEsSruCGTU3kpqVVcQY8qwRNvgzuGbDrdhxXrmAM6z9zCj4CE7XKjdw9gDRjsrurofDZk6GUoMWbwSG",
  "key1": "5kLR6TtZJuVd8fWmNfZnFdA5ThQzNF1edfAZxSzkKyZDVxTAZdQMurjFnQArUNadWEva2zrbnHjmsrGX5uMrUXXw",
  "key2": "2jAiHQHMr7Zqu3hZs9BbCVGMD3JSTDUknm9jDc2Q4wi5PLavfHr2Jj5RZS3gJBFNQj65zyiLQGWN7K2d4xhiapRM",
  "key3": "4gFnXbM1HMrEY929PQsVxWmvsA8jFnLW4M1gVVBFYzAUiJJ16psLzkVS116PhEFQGWok2yDmiCrJQMwYUTn1YfPV",
  "key4": "3rivLxVUsqh4obdEsWKMv627sVu1shz4wCC6bJPmQQEYzR8xdqzsMBMeQ6WH4ujFVtxq6bAzS1cZhwDqjk9YGD1L",
  "key5": "49EHV4K6zCLNaxcaVb2VmRgpYPfTGbaGN1mNTT7Watqpa6L9pZ7o2kQKSeaBgqbNNCCoHc1XoxeMAJd9qm99USwx",
  "key6": "4PtdZ5kQtcdLerT24gGk5EtFLirqMfMLG5tjDcyEdqZj4Ji8SBCGGRQyb7fg8dRm8MNApM5FAhoCZQAAgXDRx5i",
  "key7": "WMR8vBN2DGWBhy6w8skEgNHp3psqUK2b4DVFQGEtywbWLvjbsRT4P7o2jEiFiooFD61ntaR5TqYue7xvbTjgKww",
  "key8": "2bhULTJz1VijdtkFuMfagA1JmK3V9Nmxpmdy5qzTCpeuiPU5v6WyxEJj6nqyTz3di6MTBdCZsLcQUjJqQmrvE4d8",
  "key9": "3CahUc2adtuEC9YGbMzhbtW8VXomQwbYqZoas6d3FxezV9oA2evnETwr7y82ikaMxxjmjc5ZoPojwTWbPdW6ABDk",
  "key10": "5t9dVYAx6Ybjkgg3qThapWPj6FunMCew8HoXRZLh37vwgHsoQGaWZ8i195pstRxo29qAxC3FpwiHgEpRYnUxedd9",
  "key11": "3Tsco5YS8xSz1hdR6p8Q4xMfVPgTktEajqS3fP2YbAKVs1VrvBq45L4UrHkyUe6MPD2pu1FrTuBFxTgEx8dSNE7R",
  "key12": "6n1fn2mRHmQ7eDky9ES2XrKEmRwopVzN3evDVat5TnciGh1DutHqXftg5CHjXSgYagJ99rxcr1pPjeFcpmeUUDX",
  "key13": "2t61z2vgovxYtC6BRBULqQSn8hiVQBZpefi79aLD8ReDPYQE3FNnt8fLpiScMdML99KyBVhYcg4NaiXeFu9zM7Re",
  "key14": "8N39QX9pU6QLiD6MxvYub1vvmtQHkJ4nNeum62XyhdCWAntjKCHdJZufZdvy28rkcZ8G6EcubtiyA13JrcrQ4AX",
  "key15": "34D8vbfqwzJ8JWMUsha1pkK7d3bqhWJu2dok3fskKoVt8VVCGh7oWzwzMUwrU9jPkuT9KUeVzritVhortMzPVZN9",
  "key16": "4SBG9BCoVKyuFUgRsjweDsWYAEzgcPttMZBGx7nYfLCGpjdNzNhKqjTyR9Kj2jTQ9f1NjHehcCXG1veKxVr1Uk45",
  "key17": "5biRBspxFwtfsPJdMxBC5Kwg5im634Wi2Ta9JwLmfdK12SMr5ftiRaMv5hVXPBvU8yxASnB83nha62fpo5yqhQPQ",
  "key18": "571zGZ3motBDLJNNBEuwVAMvf6PJJYLJ4CKBV7G76SkfsVmXPcDqDeHgtpYYuJaKTboV6YiMcaMv2rN9d1D8NEBE",
  "key19": "7Nu3W1a7WtyyxAZoDYHZv4JcsksTEKob66vRLpix4coMH4Nyfwf3MZ3WDkVEphxJoPWZsgHEf2pX68hkRedibNr",
  "key20": "4T2CqweYF7ByrA1tN7eoYT8Q3AbZLvwRTxCwQvDxopA67nybQzthziim4pRg9gRruVsTsfyEURXgxbdDi1evaHF7",
  "key21": "3HavcvNoCaL8neKSkxbFaN3CAbvgxyiP51zWKpkMNzqXc9ZXqCBz92BSjdnYheNoHFQTeRjQ2BGGUNrftXXhFX9J",
  "key22": "6fVvvdhmNJEi8ntkQ9cVEpsNeppRE8e7F7FUk6eFLYUprBcRuwNC7h7YY3CEhGtFthG6tUxnmaVffcNXHWrJXvs",
  "key23": "4RBkGV83Wni3YujMDDCUWWFVRNZSmqxm5igjs2QX7VCqejS3TiXP8haVDPxRsGMFo6GtX7u7BER1ZyBx64xXQawE",
  "key24": "62LAVTWKfwiEPcjpQsx7Nq3ejxW2KVufDwRKMABXAu8acMLWcSNWXf3AK8jXC4JhJ5mkqX8PutytaJcqZHEx9xYh",
  "key25": "4RwgNayboqbY4EXEUeuiS9M7Z1DuyxoFhdwoX9RiHyGF92pkM5uaPYJvBmErk8AWkXkX4BbcrpNhVmepc9Az1NRS",
  "key26": "5HdsmXTBeJDCBCp3siPNUDAHY8Ewz6HtPKveRynFvoRgTaHv2vYiGbPRk6oo3ETeNScWP4nmSCkDfKbVxs9P5cAM",
  "key27": "2KpUR38XCUHuvP61zaX2VwYsmPvHcaDoboPNfg8rNRvmkes3LLZu2dnbPgKQhYjvzYHgjFGeJTy8jpncRWhcbvTY",
  "key28": "2tRLKARuZKoHczvJJeB6m8euFCw1pPnJiAu33E4u9vLy2JYLLobfbnjsV5EfpDLKzbwgKAhFwbw2XbTUSFUScKcx",
  "key29": "2GvGt9BXvF1Nvfb25TUeSM6DX1PAxjKoYbgvTmXDdAJdfxm1jTasAXEEHeV5imWijgza5VtuFfLpNTALox2RvybZ",
  "key30": "2X8o6cBt9Nea1XfgprBLf6WYbByKUhnrhrYa6PrsKpeEQVBCBPS2XXKtUfDsgEkAx5aHVkGxRLGSRJ1dU8U7jqgw",
  "key31": "2P4JVma89nLJK2UDGgSQvQYq58fcKwVZArrBHcULuGSuB5Cz8nQcb1KWq4nrgw8fK1H5mm8iiCSfYVZMT4s1Kdj8",
  "key32": "X4R5Xpv3LnNCfxaM7X1djHZ1W3GhQtA1YM5Na7HSPbie77EPNAj8FampBUeYNsLyhWKnpC6QxvW5ZK4FKZbvuaS",
  "key33": "gBuCZSiXH8MGJkAyTB1wSUWNLhVHKYyErCeykstsExw9aaKJ3qHyuuqfjJvCNs4H77NWTHSC8Jz6UCr5qhw7qo2",
  "key34": "2Z2rD7WvZ1bD7HcQJqxr1LDgCt55v5bFu2fLTi6yfUyNfow8bgNJBaS1T6f1qNsqWyLfXQBo5aK9sSPX9wjgeKVR",
  "key35": "wZirWCRvTji5vx9BQjpDFHKJP3pzwkQtZt6AdV3E7p1MghfbLQFcL7yUh5q4deKW1wvzSrZRkzs9cPgK29hpyiF",
  "key36": "b6aMSH8FsDWptgTnk49MzyrgVkZVAtyGgLr7Q3HJD1bYW3j47f3Yj8SiqWRATZFXcXjXLp5VWxVqwHDFBpBRTUT",
  "key37": "GnqC1Trrv9ftyz1XJLAqkwz53arKAGe44pyTemmN3KN6DF5bLdJagnMc2TCLmjXrFAA6QTmbo8NWs9d8EWYWXYB",
  "key38": "4MbLJx51vVMUqRaQS2tu8f5ovy1Cn2oQJ52gqMtHGmJgjicsdekEqQ68Yi8JRCu9iJLR1ziVtvoyr9yqh2ckndXh",
  "key39": "5xfhXHTeZCKJ9U4562C9zmkzbftrewBrtw9JdeHiwhJFdnmuF7DbuGjYAcPEduNnbZJTfiAMBpPwdcYZ7W7RtTNn",
  "key40": "3kp66C1TpM9DBB8iRPnbtwt28Rx5WF6n8GQwN4f8ptcD7NcowuS7w4xbHfk9CMqer7NoSYa5N9CkMo6zV2dmsRe2",
  "key41": "4H6AuZioobgdKFZeDwQDnns5yG3buKMfB4F95J33rSrRxoq8UhMWxbRwioS9wZmWxbL1ZWxCt8SneWVjzSx4R6nu",
  "key42": "MigBVwiw5Eem9ApnVqKoaBECox7CmrveFHFeBXLAn6HHUxFEZkjzAqsKVe7mRR2VknxLnXE1Qz5VL2bMFbtd9ws",
  "key43": "5LYVXZ3Ptop5oG6ELMayewuyp6XxTQkTkuUSSUYzfP3aJa6xuTZ71S7ARvHVfephEEpzqb221XZah72tMpekfmoc",
  "key44": "4rQ1hhLympgXNBbQcELTk1VmWxZovGKaMB112qH5vkNkGkP7ns8gjJbzu7KCGjAVzymPLAGegW5ij8ppgaqXrDUP"
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
