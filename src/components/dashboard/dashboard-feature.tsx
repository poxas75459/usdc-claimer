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
    "5C3vNS8MupkjGchAk7CidLJWp6Y9aTSSMW6LtxkzmY73UKhAXptjwvRMeN5MWY2vCR3Kb6MRpe3RPhk1emHeKcEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWif8LMdstwcCq1CNdGisEUQzQTiLoU6GpjEwVzJfhKvRvcQFw2bLkJwAaNMchJUH8YidemFbTy75JK2wjUW6Tx",
  "key1": "3vFRFBLhG7pngSr5Ta2UBPHQxgNxke731h3RM3sJwiwkRDrVGonxKDas5AAzZczZXny35F974GsAPq1B8Zsd2WFa",
  "key2": "5ceAZLScSLARkNNDeG8htcKhmmXVYk8DbAQ72pyrM3d4XxD4L72ibHDjYBvds6F42jqMc74cf9eSkB1ryJr7SJYo",
  "key3": "2CikXtyu3bjpRWag5PMtorerdp1z5fSvRPEWcdG8vYRL7Bq1cJBpcUDPoKCtkjr2ZgPsKquBiEDdnLUjdmbpvGfz",
  "key4": "3uRjTxe5bCobb3oJEtqCVAxUHPwsjwD5MVpetJD9bpkaF9NyHRz8GUdC6qD9UNTUbYTtxnYY9tgm8cGMvv2vye4U",
  "key5": "4y15SUa3MfovhcuwAcqKCytFCz875UGZZ1L9YDWRCFcjK3J1frpuBjU2NtzYwGe1JBxkdMJBnoUqXqDKc1aegjh8",
  "key6": "KyHJgP5FsVepjM1Vx3kdKqG6ED7XyTZ4DDmx3NNnY7BswTNjWxyph4bixs5DB13qVTY5NoQsMppEaLzxj4pA1z4",
  "key7": "27yeC5SJ4iz5zhy6A3BH5vJLZmErYAjKMfmEKJf3A2BiT95RaqGz754FDLMwNavdsHF14rMLnHqt1dzJxpWiU9L3",
  "key8": "42fHWVUM6LPVH1bJZGV6dCazYP9tUPpgw8wy8edm4MC5tR9AAKJYpd7eum2ThuAAt5r5kvvQzzMKEQpG3i5rtih2",
  "key9": "L8NHgzuHJWL7FPLG3xLkqAWGvVcVjAsEBpmkLQFMCbsjKDFMqy4y5vkcmqLCYWBqdKWymTNxeEuikSQFCupbb5Q",
  "key10": "yrduB7qQTg4kQ5LXvDHBPPhjysrpq6npA2rLEhqMYmpAMr2fgRmN256NZ4DezwkhoJzJmVfQDZUPAK1Q6x7ssQU",
  "key11": "4df5fVCxNDiHC59npFQ7Z4C52G3qgartdN79FFybeRdpqGXBScnqNRxAknNvoX88tCgDPcXCujk8q1S2Stcq4YFW",
  "key12": "2GTtccduTGaLZ5Qea7A6F1Qjbdynux3SJX5QbdQjzPKjDTpDJNzem5auMH3VpnX7SR5MqACAGamuV3hQLanrxA6u",
  "key13": "3M6WBcX5XXxgPNxhpj2topFED5juexvYxCD1nFzbRzMaudU1c1b512RneQDvWF7bFtoqtcbYHZ3Sx4FkYvEXtQqz",
  "key14": "4vova74CDhmcN5gE6mwCnfiey2Z3vHkoQRQzmcLTMqZLJqSvfALujTt5YRFK6deVuXMzVRWzCzY2CsPizWyb6eiG",
  "key15": "5gxB1PWwPMj2hyPrsBHruauxfPvPgyG1gboQ2fGFd4vnARbRuPQ1thVs489Uss7VPN5Rhr6FcriJKFDuHLtvSrg5",
  "key16": "8HqPZQ8EVCboAfnn6uJKTktSHSjBHGWfJfyx4i7K9Mayf5v4fneR3ALPDRQC2ACJgnWt4AtKjA7XPaNtJLnwYq4",
  "key17": "4Pjjq7Pp95jLhoNKP6yYDEXbYBTvyTkm5HZG9ugzfcfr4Jr2mdoHX4yapZSbahmH8T4SaEYCP2EDP2FDjGoYvLuj",
  "key18": "68nMU3DgfNbZ1fued8Txb4R1p9ZmbkHe6NqVcxdCkT4pRWSxAffWvK9bQsxUxUSgvurgrD9g5nuWHzYAWYAxwmP",
  "key19": "3iTF7LZi9oqud6sTkH28rRckz2eKYfgxUGw43dsqFm1qM5SeBDmBHrPDLXkPcbz329y8EZ7wsTZQmbMWLBw6ZUeE",
  "key20": "2apu151AL4iHohFRqPEC9CHfJVnyQgtKwT7gEkxQNF9kwNgHrQXH6APZz1sKm7stdyNobvN8YRzssahk5WpSwP2E",
  "key21": "5saDU1wzoHhJf5uXJRPjeFVEwwc3HRDEbmMHGsDW54q82cXtzoq7mPzWZFujDYhscXxrCy2YMLvUo1YrBUhoJQo9",
  "key22": "5v9cr9TQqNZFtevRaLn6NrhU6bw9CFVmRPqaQEVsCxRsGm4ZA12gYXRbC53tbvd5wNcm3rYTD8oJaCAeZNDCpMsY",
  "key23": "5xv5edi3VE8kTwYgPr4S5rBkjka1X4i9AVy5toFSZ7qdCj9vtrxuMDicxhAAXFsUoAMzEhEZGH2HstUnUEv3XMZA",
  "key24": "3xqpvUoEQKE2q1KrvnrhkXQgUmRkJT9FAZJmteA7ZVkGMyGxoPLg694wDMcEfFjDoh3PDMk3Uyfhnu7K1N8nuu2A",
  "key25": "39bHU5H8ERLBRA4hzqNMnxdzgMgf86ZzguJ5Kc8HY3w6UxPN16tE3HQKT8CJKzzV462vzNWppWMy9iVBrsSjb1F6",
  "key26": "gW9nTtZKUbuQmarLBAejeeZV4CfRDQhKcFUACpJx2xwW3QsCRTGJnaC8dzecsyoRZpRyWqXSk729kAdgzodKtiv",
  "key27": "TrgMv6pnfYLbe9ooyY8pEheFTDcGYZcintQ5FYB6UujVDW9mToDY1FinMTjxxBiwBkJCG1LJzqva58s9ti1u6bP",
  "key28": "4WJfhgagFQFLdHBcbxsHVHXJBTniDjNaDtcFE4uN73bBeycXEDib9tP1bMKH967eCEw1JDmRtqa8gikwSGJagjz6",
  "key29": "4stQnAhWbLcT82bRY6WW8Z6Vv3TS8Cx2LPfQu8kdeqffCsrfPqZEoRUomvwphu4YweWrfMH4hvWZboVvbMqCTjYB",
  "key30": "5yVXA2faDZLTVDH4KYgwpgKnzekgwXjKvVNosje8oYf4Zi1XatNgNch4NeQ75o9Ad2niX8dwwmiQshr1undbK9RY"
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
