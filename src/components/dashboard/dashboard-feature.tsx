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
    "AhmJWU3WwA6b5u5ZaxauKKPdxeYLgt4PhoC6tnHCd1RNXQYVm7bLsJPwKwU8dwbhXRY8QyyxzQFoXoNbrRC57jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pPN4phWy7BUYNPMwuzGQQ2yXR5HZAWWQioEbungyYuCvWiBVdL4AWzPYuj8xbw16DanFSCMPYzpgy1YQ4qCoUHD",
  "key1": "5SgZxGRaZRVkZ5uqGXqK3JFc834JypXUctoiSLuLu56JvZWnJYwJjDsUwXJy8PnSVVkefBjZDc7iXXDM3EYcCKU8",
  "key2": "21tFjqP13xcucdKb3F61cRoGxr3HibHxXPFifvP3d7zcymKcVXFbx473nPidHasVNP7Z5YHQh5qDtr47CSdfYUwU",
  "key3": "5pxSytmmDn4og8QAB6nxRdgCt16hPxmZ3tsd4zwvnZ3Tm3wUXtgUtbY14f6bFQB46C9Vcjq66ysMaXtbyAbnvgpe",
  "key4": "3YUQhDZnt4NrkJdZitYgbVcGebqvDtSAeFKFiSzzvFsSFUMz5B9XH2Rf7aDBfoQ6HEEW6NN1PT3FPLBUucwKGaN1",
  "key5": "2uDtfn47sfiWy33HzQFQRqKqo79VmhNThgg2h8MGW1WBBDS2tbtTY7nbE9xXwABtnSX9St4fjvEXEVv96ESZV3RW",
  "key6": "5s2TRTA7vsqcodwXBiBLtFBu8ov8ba3mfktm8z7FLPZsgYE1iAPp6xe4dH2ZWAXVEthkHHNKEQMECVaqiFZx7Rfs",
  "key7": "5nPUCEvYsNNGA9Lbyzy1tWXggaxuXRH6AnV61VZ4Ue52bp53AYfRqTQs6XH2h6cAMEWxye3RRqpf85Q7R9XTikzy",
  "key8": "5ERHXTh89NoqxBNiz9xwAGpwfK5oGr2HduLFJnGAohH3FuMTncTqXezDM4SRTi9UB9U5JkAnYLESQCT33HgUkURt",
  "key9": "4itPJfoEe9y4ygGVtFnjhG4ivWbx6RTkBCKf83NhTv3qYksTj5JCapp8zgpx7KW6hzRC4wB2tKSuhhYUX3duP4Ds",
  "key10": "2VmWADB4ZGEntDeHAJKiP6aqwtp9sspz6REUYEsuUZbWk7fmry7XC8EHQtv2wVAZnx4NM45MpCHkXSnZqCK6c456",
  "key11": "2pQEr8phnXkqMQ1RcC7rN97KMYN4AGjrswrtvEtteXPrCwDChiCXG5moDqwP4ftiWnDiSs5yX2o2N3qj5oLCC2ut",
  "key12": "4uQDJxJccWTJhr9k1HdfBX9dforUwoDTjApXXcbztzVWGw3Ddv887EdkmXqgdfHsPisB8A1EqC8u7BdS7EDTExRf",
  "key13": "52JJDaGyUntQg1KP9Jaijd6cS7hfMsJSNX4FgoV3j3ZToXYNxftNUHRoeYmbwp7VodnS2Dj94njaq7Ckio3LPrRB",
  "key14": "jsogxt82xmEn4rBVV5kznDwgkuAa7CmnFQPqtmxh1mTgrp4kuqJz5KqjfhraGbS9X7f6DjPEGxQVqFT69sTe6FF",
  "key15": "2PUJYGnwJ9pH5nXNuhdYsSp87D4kRepjpEkk92aHzTD9bMMp18GvcxNKY1ZXrJGGyJUSDNmEh1HkNSD6JrWXcPQk",
  "key16": "5Et8o2maossY7eBSykLqBwHm2rhjfyLaSjhZNERjqVmG3vVqpAcv5EJxaYDrjpp1myzAkbNn5edjntJ7nCQV2M5",
  "key17": "3KK8J94dnYX4Qmh5zE7oJV97tJQiMPJDTGc9VovXthpMF5M8ZddwKVffpLoXH1Gt9maeVgU8MACiAUr1MVQ7s9ee",
  "key18": "55FcMmKcorfPexsHk6DVfDxpr888CnUYmbufG4CBaYrg84aE2Ximi3Q3KssErTYPbWHUBisCQdGi7BjbVQWfWQNi",
  "key19": "2pBrFncbgFniXjRqFEmmfoQjmmvWy7qGG8HsPH9rEpgozpagHmqweJCER6QaJSyvhJj92jzC7sZPwfijy3DTZ6DJ",
  "key20": "5YeRjYU5jTnWnME1ZJi4EQX1WBTR3jK7kCwfgd6EVYUTHibtm9SPK4iYKQGPKJzMxsFhT6T78DmNS8TsoRk19LHm",
  "key21": "4mDYbasqaT4vjC3jSsDF9rxKcVJtkwjWGGzE31dDnxjng49wQax9pxsuPkfSb3z9jUuPE5GoHFpgL9P2Xa9DSDB5",
  "key22": "4VKV1689YoAuLusNNZXhmkxs4Wc6oY9tCqxvGwME81ehTH4K37QNJtGe5jY9K5nAWTBWFmXcEhQMQ1QCsdqAFkeL",
  "key23": "3RRrq5Ru5MVXhwZKAGdfGDnvc1cu5NBqAzsvyN87x47FDUWWWVLFBbPC3zXfduz9B8VysYUuwwuatpZmCgPF3gUX",
  "key24": "5zs7TNn41bGEHup7yRaoWs3SwuDT557TXnNQ8PagwTS21dyA8sw3svzwHsGVxbPTsS32cUfiXRowtNPJ2e3SwmyT",
  "key25": "5kMNAeYxLnjYGw3ZAy8eXk5ZYV1nrV5aCDg4yNsW9bNFxyg48NdcnaFoaJtcRTgG2Lb8YK4Gi93dbGgaKbWoMLCt",
  "key26": "5x6jhg3hazBKYZTeQJR5Bavg14frT1Rwx8hhjwVh5Dwf3YQxdSG1UA2HqWg6HUWTF3k4HvZbBDqH6U9nSXw8rdGK",
  "key27": "2JEjNZ1TAdAJtV6ZprujEGaPVkiPDmAjguZsN9wYm6oViuEMBcSkmsXp42osuxRMAxX5z2oCpDgw8uC1W7y4uu6N",
  "key28": "53uME6EVhamHPoZaSNhqKAgyYfVnC3gKzJpRxLSnZ8VqjxE26nq6e8re5TCUtT794j529UJ3wXZQaJD81qHv3k8u",
  "key29": "xMfGgEHNGULpE24MgQ9PgeyzNyLPwRaSyJRRcnc37xZT54EbgczjbLp77ZJPv5oqFwe9fDa85ivwR5hupLXzcQk",
  "key30": "3aiFbrnJzvH7v4EwdXHgnkDY9hXWeJUqaQxcaHYwB9oenB6e3AVnEGkdf3WWcqs3suyKoWHCBbxLGDNxPs1bWqwi",
  "key31": "661L7vrxT51bz1BJyRyPHoTgsC5nB1ubFYxELCdVvo3qVEXpe1oFi4ZhkjZF3pngHsYc7WCqd732kCQUkX2WHkh",
  "key32": "2St5zEmoKknkV8CCSD9Lo1prnToKtBrfreMUq4Nh9GHqK3f2RQby9eXUB5bWbS83Hvmc3CJruqEYkq6UDTGPKAQn",
  "key33": "U7vx27xaFkyg4393Ta3hC3QN8S8XPJ517d9zgnixMLLZkFBH65EBxB5d7U8DAvG5bXQ5H6fnNAQ8rAZD9La2adW"
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
