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
    "5SziDaX9SSJxSUTWLsEm72FymwHkNeai49twSVMbg97RATdUufjXQwYL7w8znuvVpo7hfXnohzfVMnDjkQxwDHpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bEQuBVvt8kms14AmQuJodwLPwRDMKc1iH59YqUjXzmV7bcHMa1Z3KcLBpmaFg5vXcJygkDg8dujX5iaFyURyUY",
  "key1": "4bjbZJPhoL8xy1vvmFsntNhXsq8V3smMyuRpQzAjvQv6fxtdaerpqukCMQKtRdWBbCd1XKhGLagzBHrNskMXgBSL",
  "key2": "CemJKK4EvbDFcCbUUFdkGagMm9EZiq2cZbMKSxSJUeSWo4MrYbTWiadvYjaYiveNN4fwvokmqYzeFZtJg9t2N6o",
  "key3": "2DjcuTfwtg26QawzFb2NseBjjET2z1fzZvJhkJFrGkJc6XLBAy1XfW23YHeVCF9cJ8HzBkYBe2AeWckgVRw7gNWV",
  "key4": "21J7wesvAn9Czrs8BJuLypoVZeVARcD1a6UAbFpsWMRk4hxzmGBmVdDtd8eHxuh7SLKXrH84QX84LEjRwWfKUoyH",
  "key5": "61jugeBwn49sLt4qbpvUMT94FXAS5ehnYqscpWSMbNnW6CMsLPqe9ina3vqvBPpCbrzh1stcVxMmX53YroUweqBr",
  "key6": "adLyurC7oWTZBKRMvP6PoBhJZUB1YCiGoF8f2U8PGj7fJ1ETxJMFuNzSyCLaMB8VAaaNyJt6KSsyTsLbqL2QFcp",
  "key7": "5owskihpsjSzKGL7P6jpsrhM7y4ZgUVqD8Eup8L8Sds9mCh6hasfEf4qFnNjuUXp2oExyL6EwdRG25Kh3tFkQ3eM",
  "key8": "4YwS1BviGgfAZJkyajyZrNWTvypZov4aNx1SoFPrcEfaJBWtFiQqprR3H2QS8Wom4K4Zq2jmchtBcTKrJVLALXpo",
  "key9": "3x6aPdA71GFfBGewwvLQHz8piKQFCt7chwKtpNnSKtxfvtQGPifgYzX7WRYbDTiniJgh5Q5yJMyaL4GJBPahdhvz",
  "key10": "BNs15suwAYC5YSZjK1uBYjLjqjyDVjsrpGfoYKXBLDmkBDi6L2eZqH29RHrjgfRgZwAt75m9b2JLTzPjNqPVSrx",
  "key11": "6ARAHZd7bi1f8q1T5xwKXVc5Lsmz5nvBqXHyGRyuTh7g2W46nCzSHWtvUeeCxxcXJWbSTdb19u9UceNSSrUc7du",
  "key12": "3YBwa4PT4p8uNhQ2KkTcGRPkZ6k34cS7znepmyYNv3yCKdWLGpQiTJ1tA8QHjN3D7LupKKzEvr5j5TQKJMbtk3JR",
  "key13": "2HcNWZFz5mPmdm3EJYsAFUCRF6tVGRgoJCYYGTCj8qSnSHwzpxMeRRQtGFQAMkqeuiwqSWUeBKx8kwetbvUfRVSH",
  "key14": "2E9npY7CjyipmisQoQguE425DWbiTVs1rMuBePZrXsMuCgwXE34GLpCuZUoYnsWPueeeGLPCB2JC2TcxWdx243uE",
  "key15": "5pvvWaeM2Lm2XJufnMBVHNTFMHQguNHgvkqogzctAEKMGNd5Cv9t5D3aVEL7rx2J8PKEQpe7wjS2SzcP214vTXyf",
  "key16": "36Ky2ivAiZhTSpKWq3xgasueeu27cqgpgx283RYQ6dfD6LxYubUCtJMe8VBATfzrgv9ASdrmtRSEXi8sF33ycT2q",
  "key17": "4JjsubmQHNJjXBVnxtGLteVms3jAvJkYoZ9uejgeLZZwr939yyETqTtwkFHUvAVjoppkMPb9nJ11hw3A65jf165L",
  "key18": "4MtZsnjatqEEURaZgjBA6zARQsXriJMUoiU3uvv1a6XJXj9eK4LZcZXRBqpwNtMYAodYkHh31wikWbQsW1G2RKJ9",
  "key19": "22kzTNt11vEJWzQ1r8TtNmMVWRARp672hdmFGrXpAqFdTxkLbpx2HZzYJLJyGz4A87cYS8xkiw2avYqRm689MwG8",
  "key20": "2HsfTpG23DE52wsjhYsZKtQBzUsLaoHpYAMLoGaLHfatR4KkUbrUcfQjvfz3QctLPGpuPgWPP3Ztoman18TTS6ev",
  "key21": "4wk71nZprhVW8ZoudZEUEtEn4Apwd3GeSSectoMXfRFBEyaTQiiAt2gswAFiSRP9D4mTtVDbHHRCbAX7ussaBUbM",
  "key22": "3pAc6XwNMTYkhDLJQscwXXfS7yXVqQBGwfghAdWHFcnxGUZc35BfxqztkXExeNzVkrZberaBYHqiiHjzUkk7u2b1",
  "key23": "21TmGb691y6gXVz5QL3cxVzLEHSd5hkCWw74kVGRp5h5HQnDsDVZDm2Ubx8R4G9UqfsvoWDNb1f4YjfHN3PKRKjC",
  "key24": "C6JMB5RxSnUUitMqy4Xyoj8WWNz1M71j71GXx1cRaEvSA4JQbZgF5r8ysp9nVJ8Md3NcUTKHkbdMQimLWNG6La1",
  "key25": "2WXYk5qmxh8SmHT4VcpuxS9ZGgRrGEYDEnKTRxp5R4GbqqpFohske6AfTMuZujtq72fop4cHVmiet4En1ZRm4eaY",
  "key26": "2xk2MPrA6p8QE4oTcVtNXCZKWDnFERbHHV9VLaguh94NN26GaVdiCkY3SvH2EusHrjHHXwnNUdMvQMWadPjptGeq",
  "key27": "3bBNwpLx6JwTnDdVMWy8MUgBYVFbPp6o9Y9yYAyXP84XgyJK18HBuWrNYosQ5bgojxgUeCyBy35HucamckbtptfL",
  "key28": "3AKniUaPtFwUTN1CZUWcLLBeJgzcaUHReripa6ATTfDDSBgzj7XR5s9HicYzoCJjKHuHEfeQrFFNxXGuJevzY7qV",
  "key29": "4soCwV7UXTdSWnoYkX6JbgErKYsimyyi8FqAhze71LYGpFnq5Yv4XKqd6nQaFi3EdmeWGCYvTpQSEHkgCL5Ki8zv",
  "key30": "5ztK74LeJWGyP4gxLAtWqKvLqdox5dD2yBwHqgRvhZ2GmufMR79svcAdGqpdBjxXbzS5hwfLTNCrD97PLY91S2FG",
  "key31": "4LpjG1mFsiVe1xMNv5fhbLKRQxqhzzz9K3M5KdqYxiqQGJBrx8zXBDbYbFTrB8FemkVt3atbYRCFHCRgJmy8WPZa",
  "key32": "gZ9dE1ZPnAyZNyoeeYQ4DEj98YtPSpEyixe7m74haeQB6u68gHCcKRVkFCJegKzTzUm1pYK4182dky9DW6NTAeB",
  "key33": "ePW6zH6WXtw7WAWfQDE3UGY6ueC2FUYnpR4ppwAdo1kkE4BqiU8aaqzSMk4jjBaF8TCtaPc56dH5uTwE1KMCZj4",
  "key34": "4utdFXP6WLfPdxD7kuvGA8KeEZeUuSEwWLngYh1y5ZFaAk8XNCQ57xQd7hniBXJ4papbK6fXqA3yAvS8ihVjrUC",
  "key35": "4cGKcj55TGJmHteQ9c3pYdxoD4gBS8SMKbykjBGo7beJ3Vdejrn7soPWsfwJjA3pyQNuGnszwGX4cyiyzHgeaEx1",
  "key36": "5FG6oPwzPZWq7ev2yS5SYEyhju4y9BDM4XMBusncn7umuwmn1zKjKHd6EBvwbtcCeJ6bEaGK2C9ZGvh9vpyXoQk9",
  "key37": "3hRsFJeKHg7Tt1e4mrk52S3ovspTN2pzh16ZfesyyvevGwp411x9zmP5f63Av4bsoHfNaKcCH2xWEyeDSK69v8st",
  "key38": "5cb3JvFsUFV6jcSbs4ppiSB4suh6dNAx7vkZkEkJbLTFTGXfSGLia2BjzZcLqH29Ttv77sjpamh9vcarYDcpXXgw",
  "key39": "5zLMwzguaNQQWgUunYh3hdbCi6WxQopNK1eZtUkjigdata1PSC3JJjUXiz1foFSv9Cc3J58z4t4YW6NWsgTETduQ"
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
