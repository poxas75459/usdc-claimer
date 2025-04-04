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
    "5oQ7TB23Sb8eupjZdfCiuZ5pYaGkQQs5y8mpyiYcm3wD3aqqKKbhwJ44Ajv5936ZhxYqu8AHpsNyEFwUi9qrXbus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8bWbesHE4MwCSJswTHtoudsCqXNrdXgqYWdZMrhjaDpgzn5CZAGSuMxuAUCFKRRghBq1dciyCWhZawAKfPeBRG",
  "key1": "2VMAvRYBYMrst6tdqMqjyP2tqAfDnWdCwWWHLVLJ2niGnVL7GVex3BsjPWJWNnTvjQgKzhdpRUMVzn7RwNj4BP9E",
  "key2": "2RfpreeNZ98Y7Egn43mvFBigJWD4Jnr8eyQH2GWb1tTFeLZ67xBotwr1bRvRxG2TJrseaEXaiHEaT8nU4BiwGF5S",
  "key3": "2asuwSmVpRKeYFjq4D3wvWZgZT3i2z5tE16dcdvhcosSJBCXf16huiFzZEuRqmVhCSKNJCkxNv3DBEVxdVGSRLui",
  "key4": "5c9zNQ65dZJZfKXvo93Ash3z9P7upy77N66JMVtawFBjq4hPZd4TbskFm9VBNou1NDG54qRxzAfF3Wz6XqfsTYRp",
  "key5": "2H6icfN1UXg4nRo3MEkT6ohKo1688uMR1DuVkAcXUVyMqWi251Z43s9LFvgNQKcvJZiYL2tC9kHedYsX9ptDEwqj",
  "key6": "3TmHj67zdhhhnjLkcwW8Bj72LUJUjKV8RF5mAbVAHj6X38ccd3YuBzpDmgJTaznfJbQXnZGVPGMKXxR5nvEWwFi3",
  "key7": "3oD5tBMk5DRTfAWMNjX2rvQaDqSpp9uQDCYWMTQ4DBS7dgDBp6bovPPj31xVXnze5Cbw3daEL2f2dZRMKrikknYu",
  "key8": "5tzmwhGvQvZHtD8WuYXkN8HGY9AGbobwmBmytcJUmVyfDzJz2yXMZLipnbr5NQSaZFaYSdFYPuscHhFEDy2HVCZf",
  "key9": "4SuHtg1BYrBWF7wnUcR92U5BibrLLLuYECcvk3Ste7VVHvK6KA2nee5hdWaPfYmwHtS8wCK6vEie2vPcoJ88XA7b",
  "key10": "23FmnpwbYP1KbqtTZ5e3jS5hFsWCyYB9Tzi1JTQG9RiwxHBdm44R1GE8Fdxq5utSesodPX4wmWtmMaM4Yecye8Jo",
  "key11": "2B1YFg5cc1tv3BGJVU2dx5DSNn3hFoj8KhAjP8FJVwpcRymzmQgZENS55xNGMJa2FKfTWkZASp1aTTGfecaw8umi",
  "key12": "53ekcUpgJG6gmPXogYHtghiSCCxC3kX3wf7Gq5SDNELdMs16X2KGMvPDog9NYwVaeUNrmoDxG1MFdQJQ3T5PrRZm",
  "key13": "F5rEsPzVnVH5Pdw8QHgYJF3WMYz8NXduhRDUmMeym6ZE16ijTWsGMWhSgwV53tKTszCqTp7vaHqYUhKXbyxMUeS",
  "key14": "4SwMST19fkCCsMVkmpL4ZJ1jjrjAv7MWNGKuWP91xEGdwMtQZPSsVGdUw8xs23hcsg7GERBXxNVn2QGtNo2UMjKf",
  "key15": "3BgRERyWUcGSNEBBCkowkjXyBDdspxWj7YzZhWpnTA6t5MjhPAqk1pncJKha1qBa7AQ4eEjcBpfNPkJH9yTyhVHX",
  "key16": "3rJr3xKLTeABUA3C9MJFUcDcTFN7X1JCw3fu7FNmkQu9WTurVuUDFiMKSRvyu6kELw5pMSNpzjfUsYHEPsnbGB1e",
  "key17": "2QTgBEv1jNYqwxrHCbwK1PFsCChwGYE8CpSHgpBrN8vbgeU4nVaWXTaugSaY4xGFrTanqnSb7raGwb6z2XXu57S7",
  "key18": "5ASRbNk2cD8ecP3zNBKHwe4dtKxgtxS9Cz7CGgk62VfFv8U9oYa389C2tMkYGErJhidbV5Qzduzu5sFj7hMaB9bu",
  "key19": "F73RNyk3ckQPkac9AUrXbsgN2kAdtsMnVbLM4dzmh9AncMcovnaYa2XCj4Wfpt6eXzZEv2y2oVpHYKgjMXYfzHn",
  "key20": "BidqYguGuRuEHcqKTxAbPi5oywLvZXQAuJMf4zU3jWQxPGwgnF7fc5f8h5jTBBWGmM9Me1q7T2ikGfyDhATVTB4",
  "key21": "FCLQim6oVrixnA28BbU4KGcrttRsmxoDVN4C2oHfRwou5a8s62GffF1xB8w4cbibSktVb185oBGukasGnfSWQe7",
  "key22": "3xnzWUYbiwfjQTNG16RYHwtjqdbenRYw3joWE7DpqYpDYPZwiX9kd6LNxFnULsj2mChxWv1gaYknSPtPSHhuyAk4",
  "key23": "4uicmN2kqboBaf7c345xAvDMFFxHn8vvgYf9T6PXTQTt3DuRDWEkTzUfB5oT8umV2AFcmAd6wbhHtMYR9MLywXmD",
  "key24": "33d3R9YSGhHuZoNRxYCd2JWNBbrny3HSAj6MaSLqMSKBJayD3f6H1z2hN2KQRv72cPCbTHp1pgHqEHAS4zzkn413",
  "key25": "3rctwwMoZEYoUcy8c3iKkFRJ1tyuaDZPWwGc21EHeHjKwZKxZk1PDyHT9GoXJ7gPQVhMYtSUan1NMtZnMJAtoux3",
  "key26": "E69X1VMzWnDRAvPmPK3JJxtjj8kavUWTY1tPyQTxHGcD5ZnGw8xk6p9RqJxQ7yZWjJrVhYX1FoQUKnTmt9BBc6H",
  "key27": "2p3v9UcYc69jS5nC2DidpaWKXvAEa8cmfGamgWnGxFawYtA6642uQLtCefZFP3bcKLHcGo82Un4zgBWG5gBGhMrA",
  "key28": "2AqY1Q2F4bbffWqaaasXtpkLVA8wsSPQcsoKiZKxfwyt7ecPTPafo3xDJm7d16Ns8mvSJ6FdB5mBNvnGLRH82ue6",
  "key29": "2iQVUNXUeZt2cTV8sUXz6ZAHWCufkR7LH8ZtcMc6mYCnvZiRfrLHHk5WdUGyCBb6NMctTfyo1DaimKRHvgM2T1fL",
  "key30": "JsTYuavEjFwQECHibNR1DokcZ26NyFUj3K5VZ8qhQP3kXiNHGYF3e1E7BunP8ugNMHrH6S79osFPPNogFgH46C4",
  "key31": "2qM7aM9GSnfQHcvPHyk6hV1rjxw1wZjJyfJ7GbHts9gYFHEnB3SPWx34Bcs1PqQjGVmzhRZKdR36k6hMVVAoqEsX",
  "key32": "45LiF2Q6FW1omvnXDjpPJTNN5u2Z8e8TiX7ciYvXZMR4FTKocoCej29BcaX6FMt58Ni3dUcByUj432oQwNRAmdNs",
  "key33": "BgXmXfErD2rvMK8g7DQNzpFvoog5FgoXKADJJJFaz4TxP5G5CBpUqZeQXhCJ4xyGe8Jb3BNEzZ1BA7rJUSR1wvX",
  "key34": "3Y16AZsAjaF66ejxMj1SLtvt3sEm7mqkbiAivWMMvYcDzqV8Lt3HxTjCcre7GqMv44CtZBPQnLeVjVYrPkLYuJs9",
  "key35": "7t3KtGTPQKgvmaaxL9yj9bKtQjYyWfJrGqaa4hAyz8g4Ji4rqeNZiMvNN6AVkW4NKaeTq5GgAhZKkMtohNnCFPv",
  "key36": "gy8ecVNLzFX141SkQShtvkYMk8QNoDy417Uc79v92Rcwdj3pmk74HMBSiSfvky4Mae1vpaHgPYSvvTBNV15oLow",
  "key37": "2HyKWg5AcaXejrzJ5LgNDXytp5gSamsXUC7g7pM8kpSeVwk3iswn2fCTeVhh26wH82z9X8ZmK7Ugft1rfYQdvC4C",
  "key38": "5XqbtaaPCSm4iHQ6pHKbh297qrd3KkGLhHfj5rdYEHUuSauucQMUuBa8j1KU7fzMJHuWfLXKdciWcK8QXCmgSbtf",
  "key39": "26PZikZEXUqo4thPD54bm2QXaCiJtA6Y1boRQLNzuLGxS2G9VZBLUG99QLHkm22XfwcfBQoMfpSMnPE7d53p5Jhq",
  "key40": "3qaDsJ1NTSfYgAm69CgAH5FSYV9ZPR1rsPCiWQu3DtjSia5RRDybowwwAjBiAL295gFz4N4AVhzrUBbmabNkiccQ"
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
