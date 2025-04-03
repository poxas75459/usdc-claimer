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
    "2LsoCx83EH3quxFbZj4uNewiB1CNAg9UYqKyzjsMHoQpt15ZKqFVk3Q4qxpBti3ocScGWyi1z9BfrBYRfX5oTmAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eULcNxzgqmHX7GrFeEFUk7anzbqgQFsehKDDHigH36cKH69LYRm2iJxavYRankr4pJbYuQoWrVyS9S1Ks5B2orK",
  "key1": "5MqMmAe2cNqrpc5ZzQKdVGTiaFcXgX9HCVSrN39xierqSK73q11VUBavn4t3U8gA8YEscX2YoX3vNBED4XHU4C8W",
  "key2": "jsVTvqk8AoXeCSxSzimzVMS5VvcHGkg2qQ23xjYHfdNgzsPKqS6W5cjQ6cHRjjd3jRrAZUzpCskEUrj7d1qZiyQ",
  "key3": "3vroRGDB91BBuULxqRLuCw634AtyvNcQPmduEwyXwxbRLq2xSENDwqRs39o8GYU83cTqvLPqD19vjQFKFFFGfyMA",
  "key4": "54T8dA5gQmUkM1TJeNYsktNd4skhxk7y5oXnytWwR4JphExwhnqrCRRgYUhy1X4EWXWqD9XxePF6CkmKvtR8U12C",
  "key5": "GjW1v7HWFnvSrjP9uhn4ZgQKksmC1May8gNnMXfSFhrvUdZGUetyQ3fxPdmNNQPL84moyguFKcSMmm5deKPBVg2",
  "key6": "5JyAER3k7p9RKaPP49WTvQGB5ETU6dG5K9uDPGgMaciWq1dte2FMrXVsS4t9LAxs9i9CJdJ4BbnmD2LRK3QLTsLZ",
  "key7": "4EsrvrsNwd5ZV6Mw24JpsyBbmAU2LMKeMjyDzLnjZunjKGsXD8ULVa9RDjbct76Sc17vvfKxdzrNQer9JHR7smgc",
  "key8": "43gHajfJn1aFPnKD6JbxSe5ndJvpp9ZNStT8rUQRapDb1Du89uhf7B7DYV8GJpEyTkFua1NjKLrpVJfsW3Q1iR6R",
  "key9": "MVDu7tTkEDiws8YYtKLaa5nRTDSi9TUVbCgnfur94PD7DfMQTf7719ayJoyLXVFPQSvnVYgdJyK42h6xrCEpzDL",
  "key10": "3614koud61YJ3j56jqXWEQPaxpv365Scrr36qRpDGRqsJsR3ebJM8AqL4Nb1epzQps5GBeMHTLHVL6NjvqQi2fpS",
  "key11": "ceGeEki6YuumPJ3qDaWWcAjkiVEViyrEBR1L7HBWcF2CBsF7K7aFukZ7em3sKM3i8thh1qiKHsTdeFHJzyvDizn",
  "key12": "58ez35M4zLMCMRUrnjMXAbPvQ1QusorxivcaKGNia7ZYuEh7qjVBdTNFGrHjXisRcDnUdnt8fFV9rkm9C2k1qTiA",
  "key13": "5E7mwJU6cW6uAfwBgcFh9SJGCdsNh3owZH48DLQnJjU4GoEuokzs3bSLgjepui1MyQVdYBUrYFMihzgfi3QE6AqD",
  "key14": "2nDnKcgpPUrWyNw8pMR3Y3hwTq8JuR5Bb9NZZ3zv4TCnpjfeg8Hbsr6AW4WCEgVAeC5LB9pUAeVL6WwaxP6GSHm1",
  "key15": "4Vcwh1KMs7XZU3SDUbYEi3ziZQPjJmLzpK5VCjArUNrJtYZNPZbBhX3AcSSqeweYX1zitFwjGXEs5N7WJL5Dtvas",
  "key16": "kpiECeLgxEALD7tWdqCuAjXGx15LQgUr44Aa592YoRpczUsgC88ah1p97QPSUgEfM8ZfAFwnfCQmd247XsQk8BJ",
  "key17": "3iDSCNZkDRFLa9xxVSYBocbXmUUAtvBt1whRwxvkH4dVaPZZhJzXXc4SqxRQuYxP9uAaHZuXAU6CeyH4gmfFpK5J",
  "key18": "33zhpGM3SEvhPnS67nP9e4thTtqNxSCRYVLM9TxQK5q1GeYGoY2sYrwDTEKMrautVk3aS69YndcqM67oFD17bpCw",
  "key19": "4s1tKPjrH9eezB4rBWjCczivoCWmX64JNoo4Yavgy45Mys1fgNUNVksByip8vdXKTo5o1Big4gBYX9xnWo1y9WjF",
  "key20": "2A93PfPNAX3LpQPQvZswXUWjZp4qXKnwUuq92FJVYpGnZAq6S7P1TLAHoEGjBr8TcVfzm7bVmR9KJ4CqVjQCn4RF",
  "key21": "4UdHCjQuE1Eepf9MhYFWY9y5pGiyjv4GphzG5um6gHLEbdxKsLBMWEcB1QmncGrzeaj6wAbRyXrwaRAh6mgJFcBG",
  "key22": "28pNvdYBwJjQuxK2Q82CgktH2TbeiyyAengJuNTC33atcR4YWF81xCCaABhiAmQei3gW9d8mB2HcDp4JqgeANvVi",
  "key23": "ssLv2r4KoJfzzhKKELbxMrGacbj5RvUYEKjud67sztG8uGxW9mhd8QWq48QC44pr9WnggDzsXawNs7MSWaBeNjU",
  "key24": "2gn7GdDPxKF7hmiJKF9q3AdFogPPKGegdErChkdq5e43zkU87a3TyNpMGSPTv5eQhXmoUrjDkGGndhR2QQJ4UKGa",
  "key25": "2eeVo1fD5p3eTZLp72zij4mfv2TtjWb515Qigbk9KNTGWAB1wMXDyyztEC42i3YXni4fQoiwUBPGj7ym7emJSUb1",
  "key26": "5Lq3pfmnC6STiHshuMCPLBLpJE6oZcKY3KLwmSthfuWYZ4cLNKxc7xvABuaSRETcAKdduCnAzp9YWazvp1cmp1S1",
  "key27": "47LCyQTPupRHA6NQkBuxLeg8NAE8HPtYWReU9Va9gC6AKkcK4TN4qVZhLSyeNaAZix5r9JEAttxTXYFKdNZLcMeE",
  "key28": "5EH6TjC5StD4khrzsjNfju27NeyQJDus8mVKtvSot74FKgrNETpBVCNa97nRxpLdjY2A6VUCp2zvAHBzo1CgcncN",
  "key29": "37sRNxAQQVbFGoqAnxvqSyba9pQv6TfYzXEebfiGd25TBZcj1whxTTjwjt2nebkWkXEqkqcuUNhiire2GMyvDLke",
  "key30": "4YPbe2cEBd3hXbuJqZ48hU84LJgMbPNbsWCTYcnJ5ZZWbYT57LykekLzGY7Um5vY1XHxGLFgXGW1u92fNPn4Fsyi",
  "key31": "41ezANVoNsz6fVTmwwgAiMwcZFXcWzGKGx5XGMWEk2z9uxFL2deHYNux88ToAKk47dbEUjTsKBMJceDGCMGjEUAo",
  "key32": "66G97fxEAmLsBsdz8gniJEnS5ZQbQzm45xkqqc6B7kLua62QnjUCMyef6enmeD3yL9fPFoSC3kTde1BPM725ALQ6",
  "key33": "3fcBoFBJKR4PedCHRt3azTsNmxvSWxoRY6AbYDkQ51pCtmj3ckhbbW512xY7dbEfBMHSoNgCxVspVBQn1YKaSLPv",
  "key34": "2T3EAY6ENJYGfcZcJhY98vCoxPRJKCfLK2UN8x6ohn9Q3aD1VUqPHdjQ5Hvx34YbLkbmBvYfjSb8X7zYp28nxaaf",
  "key35": "3QTJfWr2AYCJnst1nDx1BuM6hYGqnNtArXyzMU7A2pzmyYpQKkoE7nZcpz7FANJkJb9L6VfEuMU4NdvN5veXHrky",
  "key36": "4eDnKTS2ourV9Cr92GUE3mHuYEgb1koxcBTThnCWtNMAt6biaeZQ2nKBrjM72fN5BxGyGaD3QVgH4tKeqiKZ8oxM",
  "key37": "3bNthjrFkDXT51tU5t888paDPW3Px1fAp4ENWk69FcWhBiwmcwftFZXZDPGop5sJruWkxRLr4CdzTLJeV4AyZkfj",
  "key38": "ADvAiD7zAjbWrEJBqbRJJB3hXpEGw3XYv2JsAEbR2tkHmpPwqYhzRBWCCXhKQ5QwVmNwxdwX1fxG5bxjimbepdS",
  "key39": "npTqtMZ6prXve7kRF3jf12MkDtqjYZN5Uen77o77kgw7Wi3vCevujpZRwCsAhK9STyQfQ75Fn6pFa6ytCrnEeWi",
  "key40": "4G2RLLaSidBjtAR1S9uS7weXWXqrPEY9EjKnYXJ9pZYRnF9N1SAHxvT6DsWTZpBG6nuHkB8DsQfEjQWW1y5yxSVW",
  "key41": "uQPHgx2zg2gXnRrw3vKhy8GiVZ72s1wmryyD9PsVS1nG4xyLHGXQsiqUWb5v3TCmKxSHHw5Aj3z7MCUEvj6Ns7k",
  "key42": "5bi7cPnXAD4zoa6QddqHpy4iRv9B5zLcFE72ivDqAhNTUR56Wy9qo7HCnWWb4dutk7uKCMv2DTAEuUfd7x1qqJnT",
  "key43": "3z8oXczcSThe6YFtjwEmALc48ksmo5GifcE6W6HZVXH33f8o9xzkRDWsqR1fZwxfMYZHLCUEvDRioyFfYkWZyMeb"
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
