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
    "S3Z7QswymaeRDqB7KYRLobUzN9uqmQ5BAmYMMSnYjVXdJZCbN74WYBiErbgD61e3UUGRZioVoBr2b4U684Ex8Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dsio1r9t7z2fA2WGhqkQLP8rrY2PhSyJ2VTvpL1zgnPTRqHB214ZjbSERS6xYkCKCZLodJbtqqgXeaEbim3LgH6",
  "key1": "eYxs4nFZ5oGsBSib7jRag8YUrbisyPzHSqamGudFnfTW3Y4L8PesKoKcqq34BQ4aDBg9bwnmNAHyf8vZrgbjZ9N",
  "key2": "4EBvbj4nNwRAVPoKNE8Zajf7U5sfaG4bqQgsnZWzEWz5Ay9h48gGt1WuDbqmeSVtyEn9iAnK83SYUsrKJtpHY3Z5",
  "key3": "2KRjHQWEsMeBSxU3pyjJ6mpRmsnfmfQNFhVpRzADX2FpdbXWYYCJ8qnHsQY7QWxL3qonLFYdZFgPwfU1G38i65yE",
  "key4": "nWvmenvK5HdWTANEWorkApJzqJjUJzXtryVj79drfgMMfgyFSNzvAsETVjkgBY5aZEistYNE98n2D5GYhG9q4o2",
  "key5": "2ZBsXqYbkZBwqZ16851nGXAhCrsSY9e5zkBN8mG5LfteB4fe5gCraxfpL4mA5jiPRSPK8KeZoFRMogtTu67G4JWj",
  "key6": "aVirrBwPgixgvZRr4YoMhbBZyYCMso1QZWAvURxNopQsxdsToQtNjwEBGTzJo7Vs6BPPB914F4CNdVQd2MbY4D8",
  "key7": "5z2onc4PqQAi9YJDy7n69EzEmwjfWDUtP9MbZSzoQ9R142Ce38CM6BfEcw9zRvKtdaKWUrU6CoRdNj85S8ynDwGN",
  "key8": "2FeHMAZh5C9HznpKVAQtyYruiJzzwN7cFDT4DbSrPd51zyRw3KbQ6PP55PWisKJAJvJ3kZ1G65qyLjfgGTFFxkSt",
  "key9": "4RrbjhoiGjeZZFHbf2te7BDFiMs5RtWSk5BbrYfCuptZU63nuTPdLGczeXDeDWPr6HDUWfSzk3p7TffcSUqNW7wT",
  "key10": "3vGTfDZYREHSzGEnv8NEup5pTCwYKHbmdmatM5eNaohUhYrX9GTU1aD4F55p2R7vbheXapMsiUeAKQ8Ekbo3g3bN",
  "key11": "3NXwNjKozGgGcbCcqR8YoFTghoBABLgaMzg2EQb1Fx4mTT85D25oPdYZjNHvU2aSfrdsfyqAQe6qfQxR8JrN7gnc",
  "key12": "2yeFjDiSj256nyBpSE8EW249miPQipBBX6KoPKw7dU9mJrxhgGpnj7vq8cbWccQySJSv8fDyYVhhpYV4DtoNxmwe",
  "key13": "V3BukZKg1NXMde1wBUntmwP6qThywD3uX9sVDevXfeSxR5XYVV5ZV1e5QHExuG3WNazeB9Lf8C1HoZ4YXnAqwn2",
  "key14": "3UtcF5Cfdge2aLhV6FJnF2tGQNeazknPPjpPWYZw32jcSEFYHhRuSL9R9UwhmNbFS2EcWT2EFeXyi2TuT5caeCip",
  "key15": "K6Yqtn4yA8TGgdR4GbLjWsoSWpoZWCCMc4LQMN83Q551RsvURYrBWQDaXQMhCEmvHGCBnCNyU47G1yffc2tnQyH",
  "key16": "n6evbPBxer3mmwfwAi1LHpnQLp6Ar4BeFG9emMYY56RWSM2TmJBt5UfHJizF7h3GfGbVPmWcfGLfvfkjDqc4JKk",
  "key17": "4bziHazmKdkHkiuSqDu6ba8Va4XiUto7BrVoamxwLnEMFgATiwReVKhrwqVpebH9bmcDP6aKj3fBK6MWXpCDqkWd",
  "key18": "34Td7we8FgR1y5vKcdPESJni9Hr8y98xdMoKaLbNQuw1Loe9UX3cZb5ezM3iavfmrjgBWphFdb9zzagTRiFFH7aS",
  "key19": "5wb5cjtYMQ9QTpQCzbGLzt6vZuJ2mVboTST84ECgS5vNKzwuyY9GBwFCkf5Q8CS5Fxb2wTkF7cUumbjGYK4Yj2Me",
  "key20": "24S66SeXwbpsnuruQWc2CsaoUtaoYKY15AHtWPxSejf1Wg5svANquk6PgqP55GrL1owX4DmNxT1rM7KX7nXXkKJD",
  "key21": "3mEXvBe5qDv63MXAvjARcTCajvEPtm3iZDzBJaMMYfjppru3i8iNZSFrDZhZSiNPevxvRbgrv3J74KZeX8HpdB3R",
  "key22": "311oYTtgUDgCzwAjjE9n1M7suHJfvMev4arfxr1JCVyGGRLqpFBhqLqpE3cxP5ineA6a8uLcqqHHNzNrHNEqu8GX",
  "key23": "5YPBqDpsRSCQs5jpzpfeVp9QQrBoJho1U9bw1VphSPZDKn3usqehFasHgKoAVfN1SvnxPLMAj66Erm3bNtexJnaL",
  "key24": "382rQYFf2YZK7Rr2u3tbtafUdmDp2U9aGJqrmBYiy9QZBjGi81agz9WFAYBr3ND9fzx8WFEzi7VD1pCGFAwrPFX8",
  "key25": "3nMQce2zrj2RFpn9T6f5jmRHQCnDKGpBVHQNTXCrpvW9vz3Aq9ZdjUYvDzUuXtDWrxwWnzgDHCgrkSLHB11b7J8J",
  "key26": "5xpG22YYSkg7Tgo4c69UNZQu3JeQUKzmXhALctRMkhs4HGYzq23VJCiKFFQf5jXtK6cmGnEoAxaRrUSyF88B8gPx",
  "key27": "25McJGnVwwk7bN2fSYKg74w4nB67yqZtGJWRgaJvnZhpeB9dS1N7DPUGPZJd1srmj33A1eQoXgDC1FfYhFc61ePg",
  "key28": "5tX6a2NFkBMVA42JM6H1mGXAFxBqRdb7sNQ6ogjhv451W8qHdx4v1e1XkaAq9yVb8mNfpd49opbg8BDfUYkYXqQ",
  "key29": "Lk6dsePjFVSZpjKGXfGQAVdtZcZyUfCSEc2xhfUpq4bZK5J3tEgemgx3xF8W6WMkeuEQmDn1S4ohdg1ACwCeJM5",
  "key30": "5nTnxe8ZJYuTmhPpWSye5nkofJXZSbDGdL9XyjiwCE2iiqUUZCaRRmQXXKZsDo3ew5xgDstHLogFzbvmLQY92XPt",
  "key31": "4e7SD575kfH5Cpua52otuzCDfU1DjvMe7wqN6XJTMS3BeiX88yxNYJt7mA5gsdxgxSzwzkYmxwbupNRLoms8Sq6x",
  "key32": "26g1Whs4KDnHx2neSsxBuDWNTjd8vnZPK1fPUWTeh1UJsz9sQpZ97Zz7B33oBU4noZhjVnYsLGDXywts3zjyGw9Q",
  "key33": "5NuRrJpFiKnGwAVay8nb5AecMraWKNC4yyXs6CVhRMPYBPJJ8M1csPCH2nQWCgmmgocTjzXKyNzkz3DQAtNnPRJX",
  "key34": "3Kp6cedPQupn6mNqLrN1dW1Y7ykEysEYiVA6M3Jv2BexZkqag4sypPqtQPmaSTRcX4DAvwMpdMnFaLW8GgYo9f5K",
  "key35": "UAT6GeUrGdS5ifTvd97wm4vzE2pmwdqzzzr9SHT8HQqEZXJgryAdidmgvMqgpZyCMef2sGVXhK8EuASRYJdQjaY",
  "key36": "5PDcFKjvew6L5N7RnorTdB5VD4A12eYcEokqfqeViyvzPVHUodCyaoq69DtPh6zxQUNgcR3NkiqFeon9gAh62iS7",
  "key37": "4YQGrXgQAopWKbvTExJJwyLXHKEf7PPyaropoCXSsYzy4ybfV3VxjYUryei85i3F18BJz8EvkThaKV4SjnV7qbLd",
  "key38": "jLArdZpX964vTECLRDiSLckEmPhMsYhq1MCNNEpNpUfYVH8sthZjWaB4ZRV2VV6DWipJqwRuPhV1QdvqNohZUj4",
  "key39": "48sf3xadL27ZSkqsLkQa8Pzckov1BrHr2ZBMKEYEZ1AQpGwgGW8xQ9C2pwyxtTs43dt69Uhbv7F72Yn7htMPg84x"
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
