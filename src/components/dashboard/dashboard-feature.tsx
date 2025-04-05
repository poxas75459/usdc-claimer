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
    "2ZjNUfK2nA3pdamZMefALKPjiFSwp1ndGW3bL7VfDCCgra5CFhk1NsAZKk4nkYrHMohqZEw9vchtJH9iMNoKZ3EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23KK83fH81zEwsQriVR4Vw6EUPpGDZ2wCPzUmjVvM2K7RppNhEFk9wvirPYp7uMQRA2EubYSy2LaHTQ3nAhe5JxN",
  "key1": "3Ukj32FA8tQgb1VxTK4SdeayHxA4VeY1TUVHbsW6WJPdyADHoobVy3wYLZoZkS5PHnoT9ZYfQPPjy1mh97as52Xi",
  "key2": "4sUQvH8SB22DP8XTGVBDjmdSceoguTQgu3rVi3HsHN4sfZ7AbazNRpaHLtMEabLAGM4K9ZHRrqg7Degspxydym4c",
  "key3": "2qh35yiXdopDaBh5gPdzb1KjY8g6d67emk7jV9RzcZ3Dji27ANB3WMiCwpz4Na6pGHecCj7S6JS8yB9MuHijVTwQ",
  "key4": "4jdveNAuxZAdRcrBowYVogVeQuopH3HTg5VoGSGvCFwzeGaqNkyPcgJMAyTGLXyXKmcqXnBi2nCGbnwVc6XQvvSz",
  "key5": "5jhA82qvtCBErF2VE7MRR3FjLHzvLLsP24uHgEj9KtJfK1yU5fDeze41vti8bUxHVH82XjKNXz79jn4ZdzoZwLEH",
  "key6": "23eq6hEWok88J1EgsfmMQGekmrvG7Hn5Rom9ejgLVK2dKLh5JmAaaX2eVqZem4DL4zQJ8ojNxCR1GHdn4wP7ZyRw",
  "key7": "2Rxv2gxNJqKc2FTsr6HeYNH7qL3tZdvr7gPbA33JVjqDRf4Pjkq51vciFA1KR7mZkTqrZThJdM1EZmw9oMXYK6EY",
  "key8": "61ocGXVSBm5ecFi8Q4uu5ocMcj9foww2YwujMQcEw3WjNrKnnH6JUiVpoFPArG8dgD2JUy3wLCFXvANEBQXG8Jrf",
  "key9": "2HjmFLPj7sfYDE32bX9b1FssEC4KZSGYDHMV78Qn8WDLnKWP9vpYHes1d1DxgwMnBsSKSNLa7qhdrcKD4tU8oAgd",
  "key10": "4A29TqERVGXGJFEL8AHADr2u9CgF8ex1K5rTFQVbvGtWKMQcLZJqbkYJnfBpoQdyvKAePKdRoPaha5irj1voASFK",
  "key11": "iHU1FA3j19MUp9HMZPqwL9N8Acx42sxcym53UkHBQdY28HQygQYE5fy6NeuQJNwH95t9cLBR1QN21FBA8G4W2ev",
  "key12": "FQB1wrWDb7pNTiZNU9qcVppVFut6BFiENXZGaK8rP9RvKn6MuVAYgeyivqwMpux2ErpnutgVxA6M4f5nUSmhYoU",
  "key13": "2ceh58YRnJubouqjQnGgFfTfsgQQBjjpJ85c8y2wk182dHRVn2oTzmwRgrpD5ni4ou4qdqJFMjm47nrH9iUr4qAW",
  "key14": "27piD64MWcCySXugfeX6BpsDnLrbdKv4S8fQ82quGJv1xGt7HZKUF1MWfNXW4iL29uiAKAx7CiP9ZuJiUyzyvdqn",
  "key15": "64f2b26unQLTDt75FN2Xn3AvCzxepcs4ABSevbd1F8htUYDHUqFd8h2GwXLdCDwwzQoMSfoyCiuyex8wMZZ343Hu",
  "key16": "WSza5VmmoKrsyK2nfFgRNzDXyfGHFRq3PzRfWqp4aF6AA8CnvkBUbyZoYG9En9KR2JDVMvPXSAEc88kMQYwKtUY",
  "key17": "5XU28gbWE1tu5GMaSttabEqwAQpm1RbYME7j7TvT2v5tnX7VwSVSZmuDrp8ffgFbhhpupQKpE7gXdz5mscQ53yvF",
  "key18": "5a8Q5REcMi7g6WkRJfE3JPLAJu8YHmYe7js1eJ1AGMgz646omKiSSRiw7BdxZxyiJQzhsXcYPVh2is7qXMr8kXUA",
  "key19": "4fnXbSyWtcnQ8NK9ZL3M2Qj14X1TRXgjjfXpwoPJU5op4thHteUrH6nLkRmaCeSKkBdhZ1SJ9oJtHmj9D121hXGq",
  "key20": "38a5iRBcmAsXwhx7tMqXtxDtsf5Z78HRYy5tvvQCihBtH6P1k7C2bEjwkmQSHRmSsvyTogXRgk49EvVNDifLTNbw",
  "key21": "4dDuL6yyyCQQ69pEUFAdoYZTLuojdUEiNVnKHwSY1pBrQD4r8Q5NPeVcYWVm8P9TV2Fqn3Yjawhb1HEgMhjSCQsU",
  "key22": "34qDmLbJjDW2Y3vTeJCxQM28nwSkMP7avA2QtR7nbUUU8bw8V1ZkGY8tuPUVmX7MPatkik5Qi356WXrteCB7XyR6",
  "key23": "hebAnxaXZsuVs4Zpf1gYJhVY1vNF9UwUWgqSK2NKzfC2jXmQVmEiHBPdbD9NRbLYWporLty3fD7vUf9WTVDY2im",
  "key24": "4XE4bkmnbvkbBQvFfptB2suaQmk2rKwDbDpfr1LGaWE8YwrfQ5sChYXWa8vYpx77aKCe92YbgYHiFNjwPgPqMWvV",
  "key25": "2oB6CkCnkFjN5M5Wg8JJYz4pjqfsKVz9afKZ88p9NqnSXVG9Rijy5aRQbMpuwM1kTpA2PPhHKA3WuZS5fyZfoSZ1",
  "key26": "2nRsN5hAjLDQcydU1EWt593WfpkyzM5gYYr8HdVR7gXoDnWv2zuxVNPzNskdhy4N7cJmHCjXDmPZ66T4LRkApyPX",
  "key27": "2pzFrvE4shYgWAfW6nLr184NmJVx8e5TbVLYHDyD8sxniCDsRzpKDsXzZQdhePYk5C9EJ5owsbABxhTRj6LLnV4X",
  "key28": "v6uswJLTuF9h3Y2GzpU6Ets5NPXYMRs3feCgQgpVbFS7G9cdmWErfsaHBGsYh51aAX9i6HF2W5mi1q11U8rMin5",
  "key29": "63nX77mBzZdsgmKyHdxTGbRWqtSvrAJkxw5z6QXcjd1PcWjLHGx1D1YFhLtAoFchq5gYXWYYXz5uU4LWQQfAe7xT",
  "key30": "3LxEK7zNK65zSwvcT9Ktufu4x99pbRmjTo3imrL3Db5PNiNwrG2ab3bu8w36NZKYf3EuDNEvQok6TrSyfAMe5imU"
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
