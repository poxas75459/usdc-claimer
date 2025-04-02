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
    "sFfk3pusCcArjy9WFMZhhrowWtXDSXxEvGcDdwRFAtwQ36z5L2Ne4fovEoHGTRnmxf59sBv5RDcdYqH2rP6cSjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YCiq1VTyuJm64v3Tim1JJYKeJDeXMnvdSq5Ls5JaMZcD9eRQqQqo4FKDc88bPtMqFdYPB7UjmyBv2qDhXsY3jMk",
  "key1": "4gfr16fh2PUoAMEoW5nM1Kay7hAhitX5RdPg7f5X6rb1taAoPwVRNeRcPZqibttenM9LEUgAoZdFS2giTUvg8Fvj",
  "key2": "3ffeqQfUVQ19dZ4UMcHQs7PeW6wmPoaMv1MQRXCExzkHwkh6F1esXT1rQG5Bm1uHemgfPSGUkXRGkVX6kN92pGuc",
  "key3": "3fmbMqgTSVmV1PDjQAvqUAF7DFQMoMYESk98aLGp5qHuMiFEyJTStAwtio2Z8EC6P1KLetK3GX1DkbvZ6T3H4DJD",
  "key4": "65okZvnAHuiVbDjKMx3iXyysiGCGedptsfCTZ1SJr1TeQUUVBBBBm7gMDbiPiJCqwi5SworiAuS1sHUFzXB2bLid",
  "key5": "5rrXCyVxAsSELj7gtRvdx6M3Y7DreYAibyXneZKYZceE63cxkentHePFxxdZrsBdocZxxs4KwVRy6Drv3YwskcLQ",
  "key6": "sKqp6EV8k8jnjaoiYPBG5KAjEYq3xWZdzQ5yn3xh55S9uJuB8Qo1HJCyM1KpkepHVeB6pg8MNG1mWtWzJjJAAvZ",
  "key7": "3qCEMpvxbJr97smcr4Y9yD2uSVxSdJajzgcBSaCwo73QNQmPRpVb9VxwXMrjZjTN1KxQBYj5RKPggoKaQCvbZ4YJ",
  "key8": "4HVn4jwSdfbwMwizE16TwNPmjVgpVgbgEhziyhtWGktH928iLhxipCUKuWXAX4Tg8gN5beZcFA63byuJnb9Xytgk",
  "key9": "65UENpNunXbb5BSVSMYA5yiRNoahtotzt6964PL26NMcTTqW7yAzR8uXPnXLcpkZNqfe8XGHaivC4hgSUcUwgnwV",
  "key10": "4uwgZsDoWxT2AWQ8ZWzE2RE6uacrFcyAMrRnF3XTuaFzC85CuYvpd2qxmCUGFNMckhszmtH8MJGf3qm8Pex1TaxK",
  "key11": "2qo9FgHRLQ6jfqNL8zUtpybQ5w5GnuH6ytFoy5fiQ7pa4pxdSmPFmkvUGA4zBJAxB9mALcR49m5YSKwNBxTJMSi",
  "key12": "6zx9PzwptNYco5AuuJXuXpzbf5RMxGZMkhjmpPB1T35WVFw1cbbiUdWJaUkKrPcy3HMHPxpegcrZTzY6L2Zo6Bn",
  "key13": "2qxf7La3ZSt1qhK71XyibCsyCFaVT9aSfBTbU9k7VVzzwvwJaryuaNuA3sLvGWtcUGipg5k1nMrkUBKdhkVnR2WS",
  "key14": "4sGkQM8Earqps6Eg1v3n6yXJ6E2wizQBnx9z9r5RUCAgve7rLCoBNg8MoFtAQczGaKorz4qsWHRoRxzxnTJ8gULm",
  "key15": "Wezau9uBiiydn8BfGfuB2yKieU5LuVHke73Nv6Vb19SczTfMjoWGShSr31ytDdbANz1Sezz8WLGMZYnt3rwZyoE",
  "key16": "afazXPH2PCYsmzuqEfPaMat26LWBttoufNpvz2HWDr31zKgXoDvc6diFcrLNB55rVnuT9rimwMpU9gCHhvc8mWo",
  "key17": "3KE7iyrZqnTTSct53wtCCcCzRcitxogrspoVegsyy33VYucF4bbJHPqEU9ShXw51kbbKb6tvAejcfmUo9dVDvy3x",
  "key18": "z6WzPdtrpBBQUCvwYiqozEewJt7wjELArGjBng2QW4NbbXgxvY6RcD8HiNrAkYkU9ePv481uorVnRp3w89sLCwC",
  "key19": "2YCtnpLStp7bpivyqaxPndxeBRjCsb2HrSeM1LBdfQsQqquChB9qyhGjDncZoFenn9tr2F5C4ekWd2SjXTRemp5M",
  "key20": "4jksUjodXC8FnFUeudCEebg1LLLcsMU2DXvTPWJhHwKBp78SSC1zLCNRPU4nz8NG5QycXHfhSaDHxXo692FDSTTi",
  "key21": "3bPRaH6T7e4MBQUDiGjxMTwJQz1ZMPei4WwR3LbZWxiQYe4VwySZ5jdkeJRn5yhD4HjjpTzmjdcKqB6Hd1jcN3LU",
  "key22": "sC5GDmp7X91agvMxpQBNLQ2pabBB4CszUppXLS3dBobWHEKhKTYWCG1Xgvf6Pi1XU1cnseUT2kZRt3jVyBm2saW",
  "key23": "5VSVMFHX1bUyNh7zDiSJWrN1zqQkh4M6sjHKVpU6VxMyyf7bxtKEdbEw84k7XTh24LLXC5GWV1VoQPGTH6ZdWttk",
  "key24": "2EvvDhUa5dQHt2epzLPqqyJSbF3La5UQLdcGReEVn6ovDaCRNeyh9R6gA76ZKW79Zs8fxfXnwgEuC6Pmv1CThgFV",
  "key25": "jHXnSD6p556zezbk3URCZhxPUXYygcxBgS1gKaC5HuUUPLLhzvNpVpDxzb4qvSNJG8on6mwsEpMRbnBEqYA8p69",
  "key26": "vq2TeFaxw2jiNSNPxNZB3AM6Kx8c4ge8srxLbKQfCS8WV3HttAWQXJLyhrxC1Wy8AAv7NME1xC8yWBQftN7SzqQ",
  "key27": "5E9xLsrxsH7wu8F9phUmeU9QQvA86i65bE6aqLo8jBZSNooxYePBN5cuczSU298hyy565vAKKwjHoxcmxbLeDZvQ",
  "key28": "3jnJhbEL1VQdTQnoeY9YLYWqZV4zTyXQ3QG7MLGQMy1XkTHheX74UQ4S8K1nt5BueUVMmH2BuMwaeMRiRhijvhco",
  "key29": "4wy8ZYDhsBqWtekgBFpErvqAzmQ8FqpR4qRGtYhgJyJpsDPqeiW9TNM3CxyzWeAz64vURG7oSSW6qDJqsqNXwLLM",
  "key30": "4yPUsXndydCEeFogbn6afyn6oaqLAZpbRSNzkWJo48GvQkYnooX5Sq8Lr3o4xcwVWYY231wHbDXyy1VHmeZEXb39",
  "key31": "yyLFPT8itaoB7fGykqWJatzUUADfoQUGfetHn6CfSBjqRi8WetKoTpzzb3puiCjtaTeUamXgpUP8AfCHbfBrmL3",
  "key32": "UUNKH75yAciLC5o1oaXzWxgjaJNY31grBMJR4ie85DkG6EjLy2S75Qj4FndXZfH5DKweGr7hFzAAiduh1y8GsFy",
  "key33": "5qwoUYx7KzrDt6V6p5L7a7ZLNWs3iM9hEcnrPLyqLWDL55XFwH9FofwvUaUAoF3vquhSBeKSTTSuseKzWmUEFm3c",
  "key34": "3Ug9jcfeCTWfGhsfH32v89kFuz2ewFapKot1vEn1Zh8fD1bTHafCHRFU3B1pB6Q3ypPoCHkuULxudZJ1dPsugcwe",
  "key35": "DFJk3ta8iHLQHmq7JdZ14h5WS7q6YYn3p7fYQ2GHEcZTWMtrft5itdrP3eGx8y86MACQh8r6JeF6enGJQNm4yzx",
  "key36": "4sHHQS9Y9Luk8NyucW9BtUfSVyUpmZ7evHZepotSbMPYuRQRgbZyEgT7SREHsdgwPf3SuMs4fPV9PAvuuAMYYk2d",
  "key37": "3TAf5jSqkkPV3dRLP5W3qAhMDd16NuZWRWgjNAG5wjnmPfw1hvNNUEvNYXisPPquMuaGaLakppBLUimKGqoaTSz1",
  "key38": "YMkw2tZHiWh9R6bbWzU7TTcQqqXALPQ9hwLJt36HLHuGBPy29wF1Ft7nuFsuv6EJCjS7dAJKTo2LVBPZZWMNTiK",
  "key39": "2wG3LkqDb4d9fURHEMugWQEfuyquWVWgfad1opngTXfSFs44whwNvDfMtCu7XQJD73AqK1cPFdorfiLCaZRKQByv",
  "key40": "3KVShgj7P8k1NiXxjyv7VUpXQRScBf1nrxjF1QaFDeWhy1pDsXdpCDBpCh3fEZCzC1JS7PdNGghdYE84rYfKbzxy"
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
