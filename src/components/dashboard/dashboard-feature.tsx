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
    "WXeyjr2Ry9ao5aepr7WmEsSpuSnYNuttoLH5aAAUuSyiUrat63Dtbwv77mqoCJxiekmQ96yFTWmqHhT5Mbuo72G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKpPzF8G7ZrZeyQcY5UeZ34Q9T29sihad6eRTrrHBiEZURXsa4QP5h5dT9o1xU9gGvEkPsdaHz4ybzUfhvegDP3",
  "key1": "2hs4iEwdycxe9ZDD9bBmsaHxCkc7WCzEGKw6d87DW5kocvAz38AWZHRUG7qGMhU1mDWywW8iuHC7TFiMuicxTnwQ",
  "key2": "3T2RE1teahuSHv7fz76pdQzx4wsHenxKApqpadJ7wzueMqx2YiCyr78aJHKxKqDmVGfRGt1MVSrTUa6RBZT6N82S",
  "key3": "3HfYfKBKqDwcPcZs8tBya6zNGiimPexE1jaEqzp7VGZXnxyMam4iZco5Y44extid4jE1r2rJSHejDMBhRwpPf2Np",
  "key4": "3HL8AbzoCw9Vu9EFf4ivPfhc4BNDaz31bE1eQrQAqUvd8Rg97eLjcAyyi4mifnwdLM1gxcYH4MQtvsck96VDudwg",
  "key5": "5ed7BARCyd1rjmysgk3bSC5mNVenAx7DHNRfx2wQWGJejmdYoBRiQBY8e6qPJyo9pGBM7me7aNyg7nMxnt2zwRDc",
  "key6": "3CsYXSfHaYcpEiYMsnxb3tkjas8mnBwDDbCbrupwaqYMe3brf4x9WRFeWLkcE5qxptCA71d8wjKCniQPVK1qDFfW",
  "key7": "q7k118hqq8mpra9RziKph4CFPGtCoW96Vt1J71P1PJ38dx6BxgLAEZy1FBVDQR9AiRDQB7ptYqY8TMzEo6pbghx",
  "key8": "4W62Vym4vofNQDC79cv4G5gTCz3otHU5fS95u3bF9iYo3jt3vJYaWVeWRVMtCz1CZk57vND7LThcJQu49TopYLMh",
  "key9": "4ssbT9ZRmtR3qoTFJoWQ48rHSQNanaBWDdqJiS3RyajdxVwfKQKY5Z2aJzCPNZQrbgxt3jGZum5XZuwE71PkR9Zm",
  "key10": "3aTpZQXijwAnczZgzg68wwsYiPwrNVB85AJtLQjEF59CHYivToJTHzbz5q3zaFJCGPn11uuBsQCaVhSeAj6cuSXL",
  "key11": "2psPQM6zkxf813Pjw8NdUHe3WW8f8uDeH4gGyfeNAiMFtWcK6nP4mm7UbUcE7eJrWjsqsd4MDpMPHnLiPtiJf35J",
  "key12": "5HPZpAB9gYEjYuYZVdvaWcjJGaprwC3H1NC6dfQs9Yg18sFk2qPtLRShFPZjoKwgvy2qAej8AauhXv5pbJ6ZNyXL",
  "key13": "tpyrFx25CbqBcr69y92q7n6MpZkYaesEnXRvzUoYbUxTTPvR2kfnFS6rrnRMPYwDr2LpuYQX7MMahjhNmUX9BeA",
  "key14": "UDjyVafZzss7RtUoWAsEgBqm7HHxMM5YSfJ7oPB3DfWRFfdZrdZCaE2jCLHwvTJTRc8BXJKE4BpqfmVdsxjFRoK",
  "key15": "u6hrzBmwZKsasg9bMGok7aQgPQb7eWJjPeq4ELqGiTxLah9NxEc6NXGeHGUyQ75Lv7EAhaUexjZ1YV2dg5CZNMu",
  "key16": "2CyD99HDQLbCqSUt58kJtE3b8baLeRuXzJArAwn32B7c2GU2MR6NVKTDd8dkrNLmh2AQwjw3SrTdbuJ5GDSu4GQU",
  "key17": "4KrdbX21WXUF3a1T2JfBLdjBzm6PQzAwBqGWzz7fVbqpxFzBv5pFEB9Wpq6FtckKinedz4ZGDFeX6fJWyQDrws5u",
  "key18": "2YsjhwUZN1AigJaj87W7aQ5w3ngnriVq7ny8gCmzRV6BebsCGHBh1fwCXs6sCkMaAMP58we33ChtHZ3MUMwjVSRf",
  "key19": "4g2CiKCEgVSrJ4YC7w1iYsWZm4vZpcvWsEuJe216yvuFVre9SiVpbiv5H9pskC3udwAqqsZbXnasbH3EGyoHtm3D",
  "key20": "3AkjmtnDtYEPHjQzUT1YSqt2Hge1P2vWwCKoTjW7T4cNSb4zVdYWXtHVZeKe3RG1QGkTaDyr3Zf1AjnstMRajuFC",
  "key21": "4ucRJju3w4M9muYvxEkGbYVR6NJo3tDDuhNs2y2U2Ko9JGbQEoyUvLAZGeXXw3MirzuvjdnfzoJ6iHTuyCJbqeMy",
  "key22": "3GmJpbzMxv52hVR4WSepyLkW2KmtWKa9ZTTMqbqxpPBXLbt6zzVRLZkWopyL4SLqgZbF9sezas69qhPNYGaQJJos",
  "key23": "3SZRoVb22AkZ4W3nheHVgWugiwAWcHYqf6r6rLfXDMyg9KXXwefozVwYPCgreJhRUaTwJfevoCtyXXPKS5UG6DJD",
  "key24": "2BWYtrBn6oAJPBuiVfbefT5XEM63FbM9MigPwHB5TKmpBQvHVpsspa4CWx2FtvqsL6tDbH1eAFa7iXTvuwjmb3e4"
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
