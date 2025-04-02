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
    "4ggDDgUmwUdMaKusRAoo3CjrSnSmKL7iJc4Kv8FRkKznJAZz7VkyoQSeFK21kxi6MGar5BHiog7dV6ortQ8bn3xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVhNrnPVhUCgpctntccnM6uYfT9f4asjv5yu3DsjKjjmstk3XWwdixftvVYDDtSGftaQnzLLiyvrSiEJe3ngPTm",
  "key1": "Yxm9uJJupk5LQgmipmDoLtDiWiTo13BSiuPcx1G1DEAT4DbVs8rfh5514DvLgTv1otBp7YKFHAY6L6eNwiw6BAR",
  "key2": "2Dk3bNUV7YwvuvGXaNsoigidEw9E85KM3LVQ7afoDoUrqMSt42eKu5E6RkPqMmoN9Px2uhK5vaRknbhJnHAG3UVV",
  "key3": "5KcpeSPkmWjZve3PZzirJmjnngz4mJSqZ7i5EjkV9RgAFU2FHE3Pu5Vn7zk8KRxAZjST4s6XpfCp5ZJC9CRyvB1R",
  "key4": "3btPeDAoJUPRqtvNhRun9dy5G2u7m3gU2MEKuiFeaWbucuSoUYbZPCNGY5sguPCRc6vsMjwimcafW1CWWRHsi6z8",
  "key5": "3TsX8kJWqMzzbSansEKLErwgrqktLDBqAFapDuN8rH6AyKrBxdSWJXdMYnj72f82MxgPpFoeCnfoiAxSbyVtpp9a",
  "key6": "VFUmcMx5fBc5ASAP7qyEDhe8LoRduLwrHz3xEvHfehSv7kpYYNcjLztSmcPzvKzzdUWnDDS3qCQEwpgWdmzgvp3",
  "key7": "5PNb9itkg8AgFb5oYxukbuqVXGE2JiLcwr3K6NsmfssdyyGQziEPHZiEMo95F3wp3BZCkzdRNRhK7xWck6mL8Npt",
  "key8": "3a3BRZuCVdUQJrzgzMyy3PJTvjnKQFJo9gcJCR9pXkiAsdMbLv2jFEfUjzZaG6r258MgAzuHSae6aAMwaucdY2P1",
  "key9": "2eWUzcKTb8K9rNS8jNwFKGrYr64UKvB5JY7v4aYpULYVRZFHzVN2W4UWYxG956DPS3rUv3XASgZp58k31Q49k6rm",
  "key10": "xVGcamdQbrnzHprfPqTPgS7cP5UCAMEDazJuCwrEMEzHS6GAr2sxbqzUcuiQBy22ToSm2eiPMqEcArUP1eURfbf",
  "key11": "2jqm1XD8rUk2cvsTuBm7bgHLKx62HacMwtN3A9K3ECzrH4GcYgWXR4acEawkbWtD1522mB8FMA4joQ3tJZ7mANwb",
  "key12": "3GBPSk85ThfHsn7uwqHQTbcBXbdXuGsw7qcbkM8UdgmqUKeGeQsHGYNkdXypLUeJat89axCthiNGEpyeFiBxxxkm",
  "key13": "D51pFk6cSDyn85XeNozq6fUu6F5gmbVmgskiR2iwseKFnEjNFtGhCYLafaVfra6iib32v3SR5Gp6xFSJjXTJqJQ",
  "key14": "3AdRDwNZXAKMd5qZC9JT9FRuhXkQD6YHfDBpA5aaEmVvH2AKZdJStHCbe1haDDopdoASsVpuSVVdVNZwp6oanQfW",
  "key15": "24nw6dHvaQ8dte7XDxs2vYnPLk6twVeFW8zRPd2KQdmRFKozzz2jwAJvWnyFfj3W8ai5AvBwnkcoNAWSUgoFoTEC",
  "key16": "4RmgiLo82rwXzpsMzs91qtY9UdsqyH11fS33jzcfMUJk1yufqr9CpYKqiucAuVrZbNqsRh4ABELj3aaJ6nTVJhS6",
  "key17": "aWDVZE669HTo1xmjf5sFMY6UsLCNmbEictSto6JguDg3VYbWM7RjPXwGcFivZXwsbCQ1Qa2MUz9wPUKJUX9J8vd",
  "key18": "4BYpAdRK5wWdeq63Jvt5SeZLukqordMvC4qQoyD4MsJ3vY37D7GZjtQbRXHYndDUHMyWFqTEeAM71tJ34eHx7V3t",
  "key19": "2wFnLFso2YWNPnqRXXhFzZxsMqEpyKJPHTLqn5hi5CJ1NxynKP38rkfxzMUReJM4iThSPB3Ts253zEXRXV5JN5bJ",
  "key20": "5PMhUjpZKpBNVor3gQyxttii1PGa7UkziTQSgYQqQ5Hb2Dn89PSswCvFv8UKRnuvNyUWJGgAj7oSdkpootbQHR2T",
  "key21": "xq8c5VM3bzv8NvUrLfBXRC7PXQdvGbwfE67Ltn3DVoQiCqyccua7iWUwQmV11owWqroKaJdx8W9GBn9wSp4Yyrp",
  "key22": "2yBNvS5tdMwJYDXwgDhiFh7YuzH2bdrUhUBPVeFtniePPiobR1tqkrKD5kJXqAAXGjtBhyabua4hC6Fm797Dou8U",
  "key23": "2FASntnpnoPVY7Sika2WEyrDeXMyURRvHqhn84EsxfJrkw1vy3wHq3anyBgiUtt2eEuSqbykvzKVLSr2Ant8Ns3j",
  "key24": "5nVZxQSXuZT93Vs3w3aVmSDGvigNSzNdSGLs1cfPo19A8Vjej42SbrwdSWi59tLRXjuESsT8CiuATWrwYmMrivFx",
  "key25": "62uMYuJwoKZACwB3CaEq3va7NRPUTERqP3hb1eH2fAYmsWQ7NyLLEZvAx7mHYgVRYcyfJkZcAbCLQ17UgYpYuVby",
  "key26": "4ZQbhTgPRSA9gS3cZNmpF99E8i2RH15D3cD9DzYkBm4W2bJwD7nrgxnH4H9j5hSHLmQEqcd8GdUXxzjTdSKPp24P",
  "key27": "3Wq9J5NaniKNYeizcak7tw7Xowtr11wEbtDGsQuKP4GUJAZfzBUzJemA3gpbSyeZ3rX49uwi8KPBE1ctFgK1UN2X",
  "key28": "4mVYp9Ng2K4BYj6ov4XZvCu65eCbLsBW3R5PJAuztizx7KZBU6peWWJPLfHyvjJ2VzHVJbp3twpGfHb7ArVVJEdm",
  "key29": "4dMicZ5kVeWhvCRfFsoEXo2qVcM1ni2wZeEowQgfJ7rKZuDwGWPuFty5Z6BGWyWnx2pePXT8GTheu2YLi73tfjmF",
  "key30": "3S2r5DfMcq2fnUNuLN1PcTu8RiSu4uEoP2yfmPzcvZHrM6w5kRACvgoz5DzXG7csZ11Wq8cwJJvkWnbKhbAFK6TP",
  "key31": "NdQciaPTDeqn8Lre3aS859sScFctpVmmA1VaW6QaEcwwvPcd6GBXnipvavwccsHbbvGgH3zZwFrhSxxWDwoGDia"
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
