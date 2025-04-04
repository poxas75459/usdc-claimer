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
    "2vyDEKsofcCPto18RHsaef8iy3QFC4DDb8j6AfgMpVVewJAAdi1CKtA9e6LuEwpKjWVRf1WK28mvGkCc6qAq5M9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zaYwMXsLZqeeUVJBsAvacUwtw7batxX8UJWjQX13Nk97X31aMKr8aYpgG5dG49QS3d1fJCyFUcDfLaDErxwbvw1",
  "key1": "2TMMJF4vn5XgKZvr1zrgTG7YuUAtYpp5rdWVzBTbCCEF7vFmJSU818dHDEXR1vzUBm7Rm2whbUbKgkK24AYmi9K3",
  "key2": "5ygz8QJj2xehdHPdfdkzrQPRB58SchPheTSUvmSCYAnpg5YnLNNJP9mW7c8A38mMs9BjVWWj6NeHUebo5jMiK1g1",
  "key3": "5Qseryx6pyYoXxDTC7r71jxAgLWbQwnMTJKg7LpetHPRkhVXtMXuSCGpW6TtRe7Yf7Wt8mGsjqPNUBHNC9okN58V",
  "key4": "28wtE7iLM4kdXjH9goRcwCZrKh7bnE6cUxuoc2qMKZLCrxPLtmGP48soBCJLx18NfzmXTBgdB9WZWDj16kCVLhuP",
  "key5": "b5jQKzSHWVC7iKzSvADsCYXgXcXsfaskWKBfwfKgcCddkgxPzZMJ2b29bnxyGyVtfjuw2KdmGhj96xd3Z9iqAJW",
  "key6": "4b8QwXiz9XmeVigH4UsMa87AnLcWawCjuKq49oYZSTe6R7w8QHTAmpDtNbNhMEC8idYdFgsWmojEmYeaAkjZN89j",
  "key7": "4zWzVLDV2hYnq8RAk7r2hRqwFMKcdmeGufEeD7YM3mnms6bgSwyubXUEhgEdM8V6HpveLY8mGbGAimkxaxUfBkHH",
  "key8": "62kvRvW1gDZEkcNEJCfsC2iessUVUSSAUWAFuRPG26n9KuiTsqnXceJHos5Up48AJcxk9TGsT9qyvFtHuJXAmx6r",
  "key9": "brCYcQAkPavfgsqrnheMdUsQKTNCeXbYJUAZFdLY9SMLqeaEDGddhhFr8SHY6TyG5hXnVKXMYQ13v8Nk4inWXyD",
  "key10": "3P6jv2bWJxyDpgLon2LqMWR3uUshfFLs3LecJETEwVZHW2phm2wf3ZYof2jJgDCxGV9nBEF2CXb8DmJjfR8Y2MQA",
  "key11": "4jrekLfSUQ4y7xpU8wP728TiuEnGtVU172yHN8xB46YaMhjbe4MrXyJS67mvWBoyKQUEqUuW4Pyvxx1yPL1k5LbG",
  "key12": "4QLguZ1y2K4RwbcwavhG6UiZjnPpPBg9uqy6U8og2HFHEUNEKpo8xKdo5npvLwycz1WJvNE3No2G8xubtq4aGG9o",
  "key13": "5R7pcHvrnMi6qxqqnMG1LLtKkkZbDx9GcEi8WRcPHur2WiL91T3QbBimCUHTCC6qvgk2fZ79z9e2c2PxNL4ok93B",
  "key14": "3ECR9bNJLJ5Rtn3FankPAooBrgSSX767bp9MPGRBb8qFfpDt98AVx1oWPfHskYBrFYK9NcZfKTveykBgFsRxiy3X",
  "key15": "25ARfnXbDdAQ2tXtJz5L7yt7Wj9VwcJpxhvKyMVY3LeKDr36jeym2zzavARYRWYJnPZgPzUZxwnhCdfWpbN6GHMK",
  "key16": "3wgzH89cyNh5JnWipRVYpuCrfM2aCiahFtjiZfqBCve4LbqnhJG4m979v2rZK9QF7diiXKxXRDNqHSAebcUt658V",
  "key17": "vxdZGMBMcxaD224H33eCqxMByne2r8bk1tAA1ZWh39929y9VN2wKTUzGwyRyRfdizmCmXqWZZp4WuofLz14Xb12",
  "key18": "KJLgyofzbFKpVBYfWHcViEhNz9xCEMQoHyz2meLJg2TDpo4bKupQBY67TuHfgvY85YGN6VJoCbVbhnL2uKSaW6z",
  "key19": "3va4row8MGWjVJF8m7qVhBtksbxfiZkRL4v4GzmbTiztUQLEG9VDKTYH9Do5Fe7sHmBPYY38FSzEhZiMBSnxwM7Q",
  "key20": "5raysFSRAZe9QkMmRWcc3zh1VjWrkTThg2LwiUoQdXpoSfKaq3KhGEh44nhXF89vaPv9kwSzYCBLP2pzbBU4saeW",
  "key21": "D4Y28YoW4d5BtLeQvvRrV8Mi7pwx2qihRBoBe42dre6kdTLjQ2oWVdGEUXhqKe5nMMCdrSznpeo6xK8n1nTFhG3",
  "key22": "4kXhFUzv9LGLGmeJqQTp6iRhg3AyoQopFRff8TZG5Ay8ZHKHqdU3PjEEg8f2DoX1HW9D51mweo7YeSTacvPATaEL",
  "key23": "4GYfaVcdQahGhZKya2g4PhSba1G1zWZ9kjYj4S1wwAJwzEr6hjVMeyQW6LmUmfrjUJ2W5gfzqi9Tpb34ir9D7nfv",
  "key24": "uhgmcjYAF7WzaRcQ7TKqnXkvckMDsM5zsL41CVXvTgpwVdDrQ8nyyszgt4B38cF5SBWTwTUhx2PJZiq8wCUFSc2",
  "key25": "tMR4QDqxCmqPYPHthBoiegCArXTXDLQpvtf43rwpDR8o7CzdcRRvFSLmpr7dTxVfe1qhy8bdh8mqqvH5YBSvEz8",
  "key26": "4rHZ2VZxpRgiBKCtNujQKCDEpMvFndvzvuQHVwDWqYT44UmMQUWZJUyZ7en68KaC4ubsXXbwsFwXuceZv4GodGKU",
  "key27": "2huqDsDWVKBBXJZi5jwMEgnL6WNM5x2z5immz2PqSBbREixM596sepAfjimadQCZVmA35hia9uEJDNAZLFpyX5UB",
  "key28": "5g5SuCGubLx98erdEqJNUmMf8xjniF6X19MVCHj5eckc9aaPRMeTgAmCTQcyxW7o1fPf6ZS49QZ8CWvqcS6CwUA7",
  "key29": "k7aMNwCBpPqED3ZjAgu91mpkyuYwec4ntH5hEtsRKwuH5YPMKtyw5e39LKPqKVRAFqosNkjGwd52e51HhUJebjx",
  "key30": "2PjsEzwC85JAW7QWRDKE5mJf3jPxAAdGqqjqrdAZtA6K3usJZxexsEnvsEp3f4kZFVaYT7dvhtAChKox41eY8Ck6",
  "key31": "2ennwy1nezSKDYmd3NZGkq1fzfvR6oq3uJ58AK3t4ibTksAEJ1rsXZBBHZVYxBo3BG46Z3R115kcmnhxJFNQJTC6",
  "key32": "5rNXoiKkG1bwjCEB4mLDPzrGPav6CFrmLzq2wgUv8fg2CWvCQw2St2bpLt7kB6x6Fw85izQDhtLnyijsV3tTpN8Y",
  "key33": "5zUSbuh9pR6n3h5F2nuwNU4aRZFzfYEXYA8Uq9LGQ3tM9GMoVeDH6nHLeGREYYzuPirDwXiDXRxCeWhFqXE771ta",
  "key34": "5NXQu3HywJ6bnqPFhThDGAR5L26pyXin4oLcgoeiymMCqjBMMHWL5LoYnL5pGHY6JifQNjBWcRHWZa2mYAw6GNEQ",
  "key35": "4Nf3KXzNvE9aKvAbzwqVjQvS1AhQr1qD6newQ8AfAwMWDWuynjCXwLnJXBYR3pwYaDh7inxPMgTn7SiYdDWPt4CX",
  "key36": "MAki6W3FFxcDFfjZRsgmMcRHmwev2u5eZhfBMgowPeyRdwPQwWzD7ruXENEf9X37om7bWDfWFuVYSM2vu4PLRBi",
  "key37": "3nHSdwgq1YFQVpDWdbCYxyPVjo3Xskii4sjEPQ1A4AABzRkYmL7jDNk7kscxGznEK5ddbfzx2ttYakQQRNQdcqEJ",
  "key38": "2rEBKGsC6DntSfSWkJfLU97V4r3yd5LgRx6m1yB2CnS8LkHUBjCeCqcSFYvkTMaRijgF2meQ3rHL7CWowZfk1NSG",
  "key39": "doQkACMDdrKfh66zT9oeJXxDz29mPfGp38nt9NU4zb5q2cUXqsNdGQYV25JmVunMorYFegudPo1TwF67FZWYhZk",
  "key40": "51LDNU6P322YvnGGNTwWWwikZXV4rfe4sCeYapkhME3BeBXYwwnijNHZPDKvagkcKEcCbSQYTTKtAyoPnupNXZVe"
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
