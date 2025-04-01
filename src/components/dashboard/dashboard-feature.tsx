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
    "5myTdPzYepHacuinaewaX4PruT5CkPbGdcRLrW3AVHbU3q7LvBMzX73t8RG9hQgHQcqsSngSfirF661PfS4NAA16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMBmMrhbq2tvzjRXc72pgvpBgj7oE9sbWaaeCMu6bw461SUcVbbiHokrBJDDgSWjkQdbZrNWura3YHsPXnLSHBG",
  "key1": "4tvteNGVwj12TeUmvWs9Q6sx9KhBHmibtYWaapcc9UyqTW1VfVw9LzWMWGyepyEYCWYheHh1NPHLyL8LmXPHy4vn",
  "key2": "4H3QM3WVsV7FgP6ot2TjpLkovKg77MXJu1waeem1pFtvMtAoxbQZ9kc8WTGWXLMBDRP7NjsBUK9CsMs5zePLLfRC",
  "key3": "2nLcoHeZAcfqmTfVmgr3PCEnbWvL2BhA6SFcwv6Ns9i27VeEUUVPqLMyC58TeQEHCLXjXM9DTa6sgu1rpYhjkfWM",
  "key4": "2LCdQT9KnfqzfeRvJ26dhD3SaiYGXHuwtWA2B25TU1JdgBM6WjGbJyoNnA3q7xZaqGbdjPr6AZgB8kYMUKFvCHch",
  "key5": "oFpCzzaKt7SkYfKaB13yBFiT9mwFxM4YqnuNWrZK4jcDsZHdkaBJ2kFmCozcYCZNe3gHydDT7tVXyfFr9VMUupn",
  "key6": "vqCTj51nhAAtrckdY4PpiW731xg3D7Tu2XZrhSJSXAq7SdCP66mCR4eZQpfUyNZhfUEknfc6qhySk2N9sRfK6eM",
  "key7": "4YhGDU39hLDoJFXUdTfJ8x5V1FSzbHBTXr5LSKGjHdPcBu9zKpz8gjT9aRxEw52FKoTW97NatRGN4LCv4PEtbMUa",
  "key8": "42V8ecCMBvwmbQbbPLiBMb7QMaMuKSAJkYTXj9kaw1SaNsFrEMqaULLS2HAFGBqobK3LUDEWUhfMpkAGRyVofXkU",
  "key9": "bTFMKUgdTSR9VhrZkzMPHuQe5LMXYqrWVySJGNRJc3RUjVJzC14VCMzg2KzmQzFcy1zyMoxGsr1WZSzXsZMKbf5",
  "key10": "2rrNUyi5e6z2MtxiaLPKsocWWRH6BcAnERMEyN2i8UNhYVBFsgSSP2HRCBhLsSbHK8a1sTMAjq27n2usSwq8MCLd",
  "key11": "4MaCx4L79sQu2HT9Nhfxdc6gjwYzhvKuRzg1VchA5MZsuYDdFnzdr8bNLuGQFnBcurzbtXrRExaag9i2EEh2xGWs",
  "key12": "5uofTdB5Evn2ovAvEko7VuZWxrTfz7vqtD5SuG3DwRF4fF1jVmHDmYsTN78M62ny1PVCU1Y8mVBqmGvqHMP7nEZ9",
  "key13": "3cjJbNeS12SJ3TTQBRxcRNHmGQQqcPee9JTcFg8oXHAQGWz1bTwVBH6p1jGr7sMjCrU3SsrSLPPQo7EuUZMX2NgM",
  "key14": "3yrZ9yUPfCE2igLydPEcwtYGdew5GNMBRfdiPgct6UrvM9PTz6AVxgGmZmRqPYMpea29exScYFy9rUHGZZdQkAKJ",
  "key15": "4XVzq4Wk5vSZZLa7njHwLWAY2AVChcx4PE2E1zR8gF9eFPfDMh1U4HygQodsYUPygkF9QksJH9e1JjCftxmhn2VJ",
  "key16": "5MZkq8KM2W5wLexe5mL64wz52XjsdGZAwkxSG6gsA8qeQP7qyUxTEyVVgafPERoXGisruMRa6zAnxfa6JqpzhRvy",
  "key17": "2yLRwnV8kYchGDdG1kysG9ZqFXdfk28edV1Qz9osYYVgaBbvRqaHXRQjkyBExHeefjHBUh3Q2QcdU8xz2bu7n976",
  "key18": "425ipjYBuzrxriWk4QX3qTdM2Sp2n7a3BHUNQHzrAdjxmbCT1FGSp5cXt6S8Q26uah83YMq7oSLLzJiz7uguoVuj",
  "key19": "3t8hHLp32zmmGcg7xF1e8qL6o65EBTi2kv3FqA2z4YhH4ShGTSe7TPMW85TgDFehiLw4y3FJJBjFbJizqAXQc9AG",
  "key20": "oP5F9bJuzKQ8jUZgMWZdqgCT332zh9e8eNVAUURGTVkH17N1aZrtdDGxErTzwfXXdarVzChXkSeVBkJ1J8eVZ2m",
  "key21": "n3fgnWbTVwo3cWxmHGSSSzB5aVDe6ZgQmognxyevNrFH5mRog7Nw9UmJphhGcPyqptn6kzLo9t3wdmPqNmdtPKX",
  "key22": "2vujzMRCkVKifrD2uxTcz8jmU5RSxdRNwqruij5ZGoeJtacSs9UtD33p8sJmp648VthzEVqoLxiayg7MRrPsZXx9",
  "key23": "fbwu88HPZ4pDZ8oUHr5wBfpoStjAPsWiThAq9XSF9prJ1Mhxw9rVfn44V1uc2nEWmQ9AviSxJ7szt2vMQpgcWzr",
  "key24": "4x4dv5E1yxqWXPgTjZQVw7yDUK9Q5QZBePSpmwDnh56Bfn5WdkVzCHfMAtfiEPoEQbibBZqHtP1R1AyeiQbTyDUM",
  "key25": "UqaSNmCzodRnfrC9jw8cKCTCaGpnuWV3nmAinhVuGcVjCv52iKjH2FEuVXvz4N8EoDcg1oaQGf12NMgH1JVzaP5",
  "key26": "257Zt7vs7uE1GZQwAHSUmz8xbaaovd4U8Kz6Q5fgTeBhGajCtBwdbtyfz8BpoCnxkbY66LS4Q2KCRN3MUqYos5Lt",
  "key27": "4RVjRnSssxFUya7krxgGxWFpTbBqwYNAzFnaxFyxm4TaWDM2rAixWp76oBF18GAD9AJHAAdojpnJkCNcahyWKuRv",
  "key28": "2Nc5je9RPKm6FZdjLNsb4gC5kDCbV5AStk5Luk2kZSpVzPPVf7mikZEGX2qWRHTTvVkSfQcpoLEo8FqqMoa827PV",
  "key29": "4CURzmAmqPBsLciVLUonnnoLK6kAbh2VRnNoPvRWxaJg2bNJMzvcAjjV5ynnmtbbDudScnekjp8W1kUDdGQu6XRL",
  "key30": "v3747jHniejt5FKxgeViLmd2ah9HxLtpkPnBnAJqQ8WfSJnDL8ZqqpvukyZr6fRLkfSdPCC99wP4AQZC5wE899U"
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
