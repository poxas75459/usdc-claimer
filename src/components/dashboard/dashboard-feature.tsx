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
    "66KQwNhvBrNpZM8nEDxPh5VmpWqzA5BxY7LCns6scisSYMrkFcr5Qp6fdZULCbLKhqwjKYhfhUj7tKxpBALVymyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEjC7pxKNaALtHAjmQzH87czDywhnzTRSoUor6H7wmGi5aHcudJiM6HJroaD3fo1kv9Vivoe7FJjH3kgtYatpKa",
  "key1": "q26TxXWtgzDT32LfamZdm8Zrj5VTamma1yhz3gDmgVUgsc7oxNuCYq4EYsxRetVjsGn9MoFVv8RpeVBgZUDBzpm",
  "key2": "2F3yKQoK8sCozRDyNUpy7CB7QvTyEbWRmqDTu4Nbnk26ntAKPx62fZBoKffYb7uyiypidDP97ndbetuGRAPBV5AM",
  "key3": "2iZV2jqtEXrvETkPqV98wveb4dvHNQxr94puHJEgpW7rmQj8WkAEodF8eViYBhin8GyCHxnFgW4xGNBJ7CbMiVfK",
  "key4": "5ftY3644vxzocFPHXVB6nTrT8VA8d5nSq7i1EEUcW1bfqRdyibQWmPiWTpLgCJ4dJphgYGSiiJoLHXe5pDBj6GSY",
  "key5": "45XeSESwzhgDKsDeoD3fMSfhaQ1NdRtWQ39mDrzXte6Ni27M5LsT41UvpqHhuu9Tj9SU7haBzD9SAMFSKyg2Fgc2",
  "key6": "2kwy6VKBSKBvTxrQjJ1wVTcXxDc8XQTgeJdSv6wT31y28tCcbWuVkktwzjZLTP9mRtAF3FHA9gjiPznN7UYWGeqt",
  "key7": "5ReU8AriotB2PM2bFhWPhwv14Zo5VL6KZfjwsXeNtA31ihMaSuNA7rXaFy8P29ytapuspcgmmNCxi5wXznUuRfBh",
  "key8": "54qKEN9K9c6tPzTAaftYg5PJYxff2pyFCu7NFontmXHTjwjCr9La2rud5A4v3ZQgPpmbNg9MJgLkQMu7tzh9pGL9",
  "key9": "3BD1KDoR2w5tQxe3NTX59KJ6X3v39t9wwz7kyuL1HBrW27FR8mCtrLmhJNd4fu4VxKeXCMEEjJuYiLVeVMAipiHL",
  "key10": "38g9gzq39mxYCzE49KxfnsdhcWKtzM6pMSqctLpurEURwXBrVjAy5WAtJeCXsGJXXPaiae3mjXn1xtm2zxMYnQip",
  "key11": "4AzASh3VpZALB5ZAA1FKA663jDckagH86sV8kkQQsu1xht4T1eXsCTb8giRy6mh8K4drz7caujugRyaMjowicFUf",
  "key12": "56TfzjXMSUEaPToUv7CuMry4eZc4Dq6BHDC1RDk53P1FuwkRRA53bPUpop53CPPN9cVDFqrrLputtjkLgQNceSQ2",
  "key13": "3ePYvgBHnxiar5vZ5YHyo6ddjGEgboXnDfFnSThMwrfMenjWQHo3ia5hidgiPQvV8NRjYLV9NtoWFrTewzhKKzAc",
  "key14": "44FqBrAefudYZLN429365denWFKBagECm5C8sP5MVBAjGg4QLdpGd8fLfZi5JDrSbjiuKif1NbQoYj6iBEFeLqVT",
  "key15": "3jG5AZQZaLXar5QahmbSRp2qhkJXMYVDzD2jrhzum44mFKPrNznKpDkYBqWNSgwi5WCwnw6NPF1YcBVVQBigAVgq",
  "key16": "24LVg95q7rBvDHsoBuX1jj25dYLZ1rWHiDHf4G6Q3oHYPeFsxyVg1EvUXUfAtNXB6NRHDdB4SLYEWePhsFepNQQ4",
  "key17": "4gV94whYKkhwGx5kTdwnfYuGRZAMgQdanwhEzDT7y33fZAdZXMcxAuNA9Bdjv3x1zPLtmbpQurcf8A6VrJiiMjf6",
  "key18": "452RmjcUXBkSWRtjf25gQ3miZy3gFZZB9vuj8MsHugw2XjpcYDZyx5tCz5qrxFMfWmsoN38H1zf8qWM8TJ8BCwXk",
  "key19": "wXN5TubMp7UGCf9yLTtnYaK5m91LWRG8WJj2mbDEWpcz3i1rE57pEGAtk6uQr565tcziWK13gz6XTw1npZFBB6F",
  "key20": "2wEGDeoEW3ouDeqnFFtckP6qs4XoVLfhpCY1KXPa5VFfwtKdnquCyZ5XDuavptrtGJ7pKKWPgFwRSrdrPwV5QBAa",
  "key21": "5Tfu7eCgTjTNFt5Jzpdr5wcgEUM53sHpt2vnmD8KmX2ah1DyUCQxG1M2AZ9tuZgXP2zaj3Fo97XyhhcVj5AnDKDa",
  "key22": "4aBUvWx7GaRumonEgyGpTVLgpwpP3o2eMLG1VzDqRhj9DQA9Agcth1GPoEDzbuQP3zYQBLyfFwRzoXprPNR9Vp9p",
  "key23": "6fmCpZAWsKuL3XouigEpowBdsteT9ZbHi7nY21gv9rcBth6rq5wvrY4qDN95SpZQo1hkbL9XF6Dt6eTDtsEkXjX",
  "key24": "2ty2VNy5ZG8Sc5sA1M6YJgddNVP9WbJ9R8JxM9ZwzagwDvP88SFYAmaiM54dozTttsZoMDd3b1uX9A7oeJHzFbNU",
  "key25": "288HXk2fQSRePbbibR9ypX2e5JdvbgCdbMmPnvpzVqTcYn7YQqCuTRocRD9WJMms2TsKtWSugZey5hhgHj1KfZXu",
  "key26": "3xKgb2yBqoUNSJFf1cnoaR6Bo1oridcrkGCpJFcJUm9mMRPDahvoKHUsKs1EhtywNieKq9CUgsk8hCxmwLHzUfcy",
  "key27": "3m1iByzMY2fJ8G9ZMXG7DjwSwj7NH58nAsXTX2xCADZ6drSda9Ef5UMirVM148Y59E1ThuaASJ3MxkEFfE5UMRTZ",
  "key28": "5cdNSszgVor2vcFybttHBqG3RmHTFXyf77W2HCTfAZZZmxABMjBBGP3vgpt1wYdxAM8HjYfH83tyEr1tzWKUvpDy",
  "key29": "4d2pZ9Y56wk8XK4eLFe3zseBxUt5ajXRUxFo685efCTqrG5whprQyidK7p3hg5baoYxXxwVFz7UorKU4kXffM8kx",
  "key30": "2Tvu4N8QB1Pkpvfw8eY5ELXv18MwHMstNb7iRSKQDChGqBGTUYPWK8oerJDmp2f7rYfQMsjPuiFGHzJXxEs171eU"
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
