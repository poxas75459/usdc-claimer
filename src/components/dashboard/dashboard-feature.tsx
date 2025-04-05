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
    "2KA9FyKQqtTHFzQzK7btw4AnTnWDbzj44WcwhExNDsgRcR858gFZegpBWd27CokTy3BhpMHQKoknbU18QGoq4W6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uvrjfmqohtr8zCLfLCLgQU9s2H9GAWyzazmvVD6do5aGZXR8tL5PpqZ9GTjWGbuggTVNPbBhFkVrMmdZh8aC1rS",
  "key1": "3S32jCLFQyVQSuWAbUsEPouKbWWMvfpxzNLVuMnHCFZeEby4VQ3KjXvHEHA8kQs16AJFU5NgjHBYEwMzGuqN3u7L",
  "key2": "3SANoXz69hvg8dJGyQMTuXcr8oYqwTJJzp825Ax2Wf9nFvG1SeabLwXHjd5dv1UirDi6ar3ZdCow3a17Li7r58iS",
  "key3": "31ApJS8GPgJ4dhJbpcsV1VCU1ZbDR8xEHf3U61UFYcqZDhAUcrBPfxnPEJe9Y9oZa8sqp2dzoNgHsCqtjVorA1x",
  "key4": "5PraSukQUXhmHBx2333CJeZCXzyDbzrMQcUnXtDKzRDntUkXNFsAzeAzZSkXVxKC7Uw9MfaxiXpho3mbmCPTjKhK",
  "key5": "3B1EeDJTxGMh6QDexkRmR1ZAisfhxehK5tX5XtmxRBmgx3UzWk39CQEP1NJ9mKSLfeqZYws1MF8PsLnEU1tewmNj",
  "key6": "2uuF6LANUN1QHubSsT2MSWbuHcrkFRd8WPQE8tkZCDKf7i4aBuvbbS8EhWKS3Ds1kkDWCNFZZDNwmxA9CbP8Phqr",
  "key7": "REkrsix5nKVbrvVQgN8W4VNWEzhkf6bPQKKWyzceqmfSQwweUD7XaB187ceCo3EXqm5ygKAAdmo8TzuCgMX2BAo",
  "key8": "3jDehBJNBPzLrpVkuumZ2vxjbgohVKfikY8Af2Mxb9kV73wM1SXD18WTrDAJFHSTe8w1axoNJMU1KyfySDen5LZ6",
  "key9": "5BoLaMN486CxDgsmNx6C8LbWyyqEAsrFzASWW8bFvQBshx5ny8z38NYMhVwsAmE8tdaR9YtoUCiTLRt8oe5gT2sN",
  "key10": "2v1Sj5RQb3UcbqyLPdvXpPbgShVUAfNCwHn7u2s3rWNSzFDniDbNHb4LzrfswTQLDy1dZpjrR2nNYPGWLaMDTiEP",
  "key11": "2burEB9Y5dzdWuAHrgQkWc7LpaDKVhKGvc4tRhjirhxbjy7fQaPUaFoQqCaqnLDAv8iEutRMGXDcB3DFD3YZuEtp",
  "key12": "368zEWFkSEk2mmZXSmTzhBScBnAbbc8LF5Kj7z9aDiXYVDL9PqD8xQTaR5mqSvQeXHsoHS3LZeTz59daoDyGvzhG",
  "key13": "4VbREABXNjLXLSmt3BfLcdskPF4Ly1JyTuSZsUU3hKiD63xscXPemg9tnK7NLVn5ABBJKZUfGvr4yCRizCc8ySPV",
  "key14": "fKTEMYB8yFP6MXF4aRx9FBVj3DZVHF6r3n6g96dYqg7h7xec3WG3v4yS1jTKQaNTAmL4ZtRDSNhroMejqo9U31b",
  "key15": "AQZhXhgHAuUWQfuuVgxRSpCDsAyg1eFdGsnb7LgFeSTFrFJqNsop1KXRZ8HHFya63hshbiRLbM8wBL6UYEwjtQV",
  "key16": "rd6b2RKNGvSY8tfxk4V8vfvfcAnUEVrXjT8A4afZgn2UgQdh8WDSuG1vi8tx3ZcQc6VpbmcKgbMNfBGeUa2Q6Mu",
  "key17": "4v79SnPpMocfp9czf5zJkWDQewETjefitUGS71xG5o8t5yzh2HePopiV3ba7BmmbxjrXbDHxaS5psd2961P8LigA",
  "key18": "4z86obKFNVT9MJWYKVktE5M4xAJpwCDQMsWyPSF5Yqh8dDqQLDxwrMhHvSQMywzXzkKyvHRzUB4VcLMMg9j7AT2n",
  "key19": "3M3WtxvcVGDVeGfXMEXJpnKdTkgRnZwgC8pkhKdFYamV8n2ZqLmoUPTUEq6J9aq17axWyg3jyXN1CWVXC6RU3B9F",
  "key20": "55xiUkWCFJGbL1v5FrQhse7vRBJyUc1LJGBThBCJoSUfqKhgHXF5fQA7vYdpvENR21unPg2BSqMug6918zjbrQ77",
  "key21": "4wwwrWTkej5bghnLFUvM5fRgngt7hBnQFF2XSEoeu12nAuL2sxVnXU8nxu2ZVnoTMeden36eqbhjZhV4WrhHpsGA",
  "key22": "32uuhKzGHkkKzFN8jvrqgTAnL3L8mKAgL3bcXTS1JD4V1ziAtCBCCaDqJ81wMejJ1PzjsxH7YcR6qSjiMZQPAX2h",
  "key23": "6uBTcK5HFkNgy3zFjnSkmLz4XXGghFQHHQ1cfeNgxWx6LK5wf1eGGhmP77qjgGSQn9uJhw4KeanwUSKPmf8hEY7",
  "key24": "2FP4d81Zh6kMmcDtxmZFE269DXF9HdnAafr1cdDZVKrtRbq5vG5KiAH4xY6XLtdRuB5cgswpbaXL3xBrpLETMqjU",
  "key25": "yWspYTrfbvLR5ziRCLW7uSkV6moUEijFfGVizsbjg5xa5RJbCuCebuJLiwxNNPSHWr8Zu4StB7fS5y171Qt8Yzx"
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
