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
    "4zWW3RqSB5HcyjNZ1Wf8qBMd9b7HfUxXLCR3J79Xpj1bgMAQMfbGiosCf5MnqzvjYuBb6zjsYq1u2ZMoqmupN4vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JyUsS5LWn8vRV6u1cjTBLS9a7JaYyA14q7ZSNR3Df5Hv9kUqE8DtoJAxo1QG5rzcgjS5bD8Bk2MtdYvbxsQpGVk",
  "key1": "3oGGEKUmDXnxdv69ZayRaXQXgxKgJU9Uu9vCjoh4FebVz3kXEN3AEj2DqbDXm9JmnCzU6fJU2ymsD1Sus1myytyN",
  "key2": "4VHLnD8kNiN2gNBdKni2KLvS6D8qnBHS2Ew6HaHWDjRLqSVQeKwSR4NUu2jrvKzJSrW7owEpQ5AmFsGpMBBFjmM7",
  "key3": "L73kHEdVfvp9nhPFhkuRzwvjn1T2fVQumMCygKC6hkjiwVhxM9D9LNvbqtnCrEFnBBNsvKHGLPkyzXbSeKCM8MC",
  "key4": "HWG7eaZCVnt8Hszw8MpZYnWJXpkAgUXCKHh61fMUG2tH4h2sCwVp9uU5u1xPSWNGY8nEjW7wrkpgJibRyNrKRk1",
  "key5": "r7k5CFVygFZWZzPdGdybjGeG9CfM9diGRL4UgjsfZDmpJjCiHmX4gBtH6A9MXARL8792QUk1N2tbkDGExiN5VQQ",
  "key6": "U3wsNxyazbnvM97rAUo7TyJqxgLdc6QA9BRfGqfQ9yh5LJsxWm8eq6t3RF7o3no9zHByg7LrusLiLzpn17L6BwT",
  "key7": "42Yux6P7eQNU3xHgExeeUfCEgWtms42LKD8fxF7Ssxgj4ynh1x8uF5GAwgPkVsgXqzkytzXC6rCxbdvkaaauBweU",
  "key8": "BRL5sLzC2fxxZqyXwiBsV91MTSvMvdPsbKoHXmZApkrYx88sSwPksTKWEzT3HfP2u87Xk6fYx7ExmpPCC5URjY8",
  "key9": "2ttYikSn9wtMGa1zaqUXfoEispp8hS9HgF22RknB3bG4wexMXCoU1DPY4PyUqGQ7ahhfMCSznE5HfYu8kuG2TAtw",
  "key10": "wgBjNp66TQ3Wwd7mzMk8TtCEa7rco293pN7B39oz5ZkRdYiua3AYXr5DVMFZKbw9wPxUrvb38xjU8ZQwfJPmJso",
  "key11": "RBgfWDTekkwTtq3zEJmaGHzcJVcXwpdVPfdAbSr7jqnc8kQMEiyUSqCELSFkyKt8NENFSREgKf6h1EeB1p5xTCk",
  "key12": "4Q85Hz944NacHCAx1LWfFddpgoonZxHj8VHade1HzeZNjRZkhMmZjtbuXV9pNycQm9VEdJNvqxioNi6fS7L1FfGP",
  "key13": "3RUZHA12i79mL5szm11W7Hwvo1FnA3YaCHs8RdYLrjw28dg34YvT7mjsfs69s41wZj5RdNhZyb6TA6npxEoTnybm",
  "key14": "4fRvoYTHixeDRCWftvFsw9A4HjAZExrEqYfnRBXWFPGQvwbW1WLUUWsZ28JaQei5RLYMFUogHTcs1Q3wR5hzqJ58",
  "key15": "2tx97yqRT6pbBoCm3ghwu4hQJ1VDXfCJGQ4xdx2MrRcC1P3wJm2PuVjibshUDDBsnQDuYxo6jrVh78HSPPv63iH6",
  "key16": "4EeapPLKVsK2LHT7p2BmTsvQTAofiVuchzzvH4ihd7NFaFRav6DMz6Vuen3WpXCaxvCweydoozrM9Cck4nRcx7sC",
  "key17": "Xwb7NMVMspF1Wn5FKsdjWjhk8HsuML7JYF48LoDMszZTPNq2xGCGpcFhCGGBMSc82QCVrk6gU24FKUVe9xP4NRi",
  "key18": "2nLbXdQ7Q21DMpqZdGmbBuBtuDxcZCeXN9ArNqaGmprmDhuRedM9E5gtdwQ4NmN6Q3vfT1kuqQAraF5DgJdV1kUH",
  "key19": "3h9NREqJrKeKRds78kcFvHUj5pVmHipC2bVMcSdPLMqoMdgW2cyLG1nGpNtPdi9YtWQKVEypnUTutqt5Z58YCPdk",
  "key20": "2DZNTykyssrGBTVR7NpkAmjYZUpVGzB5VHc8qAyUyvugW374onSYWnK54hpmtVQ6ZiGLcX8HpT4vAh9MgNuhqmSs",
  "key21": "678hjX2MUVjEBExeozPAaU7NBTJ6Vf1gSFVgYYeKZ1DxVhqbQzgdqqKHPcp9Ad2zzr7x6ey2hH2AFoeKdrKhjnXH",
  "key22": "2jLrwAAKq1FC8V5BbGQ3ymU1bJQtF2XkefnvmLi2MxTXcgcVAcXiV1TsJGYV9eYfVc2LyV1dk38dtyyU2mPLwpMB",
  "key23": "q3xPXMWEyFFrVaPAycmDWKrEznoVwoGqW9MQysov1FCVDrTPytQmBFiJtAu4gbTsXZhept3PnGxs2bppT84MyWy",
  "key24": "xZuVmgDF3SAuU4oLudfHqFdxnmS2apnoaTsii2ETDDt3EyfuF8oVyRy7bxw9pDve2q7A9BLP1REMjFySXrYs272",
  "key25": "41kK1SraXewNzLviEdrXe9RLipLXTqc9gTxoXQRnuTUVm5BUx6bq39EBFgUz7y3v3ngMv6QCQjo8UDpo6c6EGKjw",
  "key26": "4Mmxrmg1icr85JUXAkNVjrDynr6X3xWaK6FJTEpDb5vW7RnV6ifnCnEUZSgCUQ5yBWgfJU47WWdYyyY4QkzHs2gb",
  "key27": "2cqN17bXfeC2J3Y4SG5KrJqZt8NJ9eKMEhrNvce5iGxdoWQiyw6zGaeQKKQht6nke8xpiXtJ2Mcfg7LHLnJQQJw",
  "key28": "5i712Zc7NGvbUTXZskRzddZ42nD8opypvvkex7NUWoxmaQ5GmADZFSgvps2y7NaR128vzPuSPKV5zBUrafeShPsW",
  "key29": "4vW9QDeyKsRDCW88sM18SNVT2X2oUUbJnASiPjEKVU1NNyLkkZAdUD6ssF9YkC6rqrGvL8eyBWX46pdUTe5pmXWG",
  "key30": "2Jtp8PrEmz522yeU4xsbJcABjtqDjSa4qwQRKQaJtRk9eX1nZHh615XgRXYCJmcemBfRQezucvpFkgTGCKnVJUy",
  "key31": "2UY3PLmjoyuaiX9YeJeymB9uzxvaWsiHA9eXnUedhR85xFHLHjmwFCjXQNZRKMnrR5eVJskzerD68jvEhp2ZyUBp",
  "key32": "4wDxbFuQC42VFgv3ab5ACbgUhgBdhhq9ai1MuZZuJWgXh9BsVpzu9vNrNr14qn8Hfrmgszx7jbEHrf1P6KWCHBwX",
  "key33": "3ik9CPfuWBGmoN5gkdbsipSPzoRPj7n1FUom11kwcWhv5i7dWdbzvDQw3fk6xawH97te8o1CbKx74x2hmk33z1j",
  "key34": "gu1N1dwm1MvW6HapDWiwjJmGxb57wVAouM4oi2xGNELr7hVg6eBW8kZ5Ti8CE7k3UZUXU4MxUSaj5hPbUKBW4c2",
  "key35": "3UQcVa7UiZYEc62vFdpWCYYJoFBqJdtoSb1t4cG5fSoPPUoqerWrfMzz4DXjgadwu93grA2pG4JXvuan96LVe7vh",
  "key36": "4Nbuza5MyGPFVDurtwUMViZCC7LL5oWXN8Ybbpyft39mnvcgtxSJpvH25J1NGUmDNn7j6utECDn1PRakntcgxUa2",
  "key37": "2YGw6KYxdAa2fLCUKeP8HAVWzK2gg8npgY6UZpzYxmSCWiJKuMztuj3UNfUEbaevGBfcESNvfjQr2VBi1aWhC8Eg",
  "key38": "mfF89t97yBXXPAyXqnVFveZ2vnRi1cxsJd4jJefLddWs2a6b9UTCCDByRr31yTo4f4zAZM9wiDedCaW9e9429bD",
  "key39": "4jFajVxi5JsmtxD7EL4dsuq6r1sV1dRxA1554Yg9Qp19s1B3EBXoJ9EwApoiRCAsogiNnRU7vxgtA6tpCJ6skiPA",
  "key40": "3UEskQVcPvn4hCEszXNhujdW8rWpajTCQKFWoGF9eXZgtmbyxXcPxLDTUQSMt94azCNYiaDa9evT56ehBKcduRR8",
  "key41": "tNeEDxafjDEVhcdav4uD73svpssBXZgrn9jtvZ9uuyWPBLCYSqzEJ7w1vZhEaYd6QDh3cfVwr6nTbtzoaETREmv"
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
