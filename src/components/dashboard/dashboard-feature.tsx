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
    "9VWfRJ9C5jv7zsh1xuuWRQ8aPkkR2zVnHYCxYWrD79TDjcA2PLprN5yG774KGbjhiafvhGs4KYaiw3A3G3L1hpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NGHmgiKd1asz8CxzK2R9t8GuWpMTqdB8GQ9J7XQjoVvgyDkJU3u5K95Xwr2fUJopj6sy5yLx5JFgUd7m7oDuHV2",
  "key1": "2SRdYBys2BuZ7XxbWP4YH63uxBLCpgNsGKvykQaDLNEwGDVUGuJ317N5169M8JQ6ZA1RZSNh14aCxbcePcX454xt",
  "key2": "5r148Efu2tN8U7uwW9QvKvyde85f2EUWere7g9LBAeQud23sZvEprpCr7YCZBfsKtpsiYVdV8FpTu7rVP2R1YPgF",
  "key3": "2PAEBKxBmAxc51vDhA8mA3rrU2D49F3PPMy6ZUGRsCeqDgU6kNpp7UY8f2TrKKNpYmJUoE7FS3yBME9pgqNN9Jz4",
  "key4": "5ujqJwAkvF2Hj9FAkiyqky4FNZDWfDKJKYF3mZCAVgoQPRtnaj8cGdkNBhK6ZBx1J3zQbYC94KGkEb6X4i58mNrm",
  "key5": "5CW9wsb8j9HJffycrTtQH5ZTigkGm3NBALharAQpk5hEybVHZxY5MyN3ZQDtqWzybypk5w2eh2Y7an91GG3Q4See",
  "key6": "2GynXYfkTzdnUNQ5Nep2PeW5LskGK64viHxAmdf1sbs3atU4Zw8F6ge3vktcJQD1uzzgcg6vGX5uvMhhV8hLs6iS",
  "key7": "3MwTFuDhbBs3WLJ55JwzAaFiPLqZQQ7ZxU5ib3iW76WNiRqnp1sKCyDVkmA6ZPFigoQX1tsxbHVK1H4h5taaR55Q",
  "key8": "bvL9uet9KWs4KpNe3HMosMmqAsJfycXd6mLePicxKTuuaG59kibxFo2ksUvY96tzpQbiYyh9Pvn85pA2my2JmLz",
  "key9": "2zbY6nQHYZ83Saq6jqtAUjZF16HvrfisRSe1DhARPaaqLYEmLJ18UrcBE3pBqWkNJickgVQQvepzuvYNHNNzbqp4",
  "key10": "5CApjLWbfT9WqwCaRtHsaNnsfPhvfT4tbP8MYafABHgNSQEM1bvNbikbF2TFeszQfYBp19EAeWCiKA8Z3iCh7np3",
  "key11": "39urhaJLe7wh38ksAQaYQLYQrra1XpcSRWs6bcgQbwC6JwsJyhMtwouDFqpDsCbL3KJna15PibWD1gEdReVad6e4",
  "key12": "Z4rd8QT4Kpx9hCSyg9LkuRa7hsJ9sm4UPqc62mk9dfvpneRB1daZwfXZQF2TerFVonASCY5ibEJWesm9URpDDTn",
  "key13": "28EhepHECoyfQZSm5gLe9e52vVyEZgSvF6dz6KASyZW8VCtv3ReLsqN43AoLHNZD24y4fib4YtZVnzGFgu9fCrkh",
  "key14": "4rULY6FgJLoArmYeGJMXNAV4ojkiRZMT2Kx1Db4R6Akfg9K2jiUkffPSZd7E7rC56KxzBTWu4uPobNHgcJMsrKBS",
  "key15": "5sEaJCMNWP3WLULkUEBByBfDtikWpdYfiL27WCH2tynemebDvZWyvoVkvuipW9xwwBBkwoccVHrC4NFsT3q3VnxY",
  "key16": "3fbG2fLHFPSoXnS9iNiaVkvbf4HpDD4Fbv5YjNBcYyeMhmXNywDUuYm9awPq5jHg6Fj2xzTfMzDj4vQGQJiqZ3XB",
  "key17": "4aDV61B6eVsar5z6EJbzuUY6UE1rTzErbrhoNcJtWW3JkSUmtRLjmKaCw2nJGWJD574xcPhovoCGLxnZcaV2yF2k",
  "key18": "ETXVon42h1mMCPBzLx5NeFsWtZ7jZHUuA72dET5zshidGGtLAHXAH7xTn7QcdmKYiHpY6yFMUuBtr1Wc35VXMys",
  "key19": "4Vf1Xvy7JuLvnDHYKV36MspaZsgQrAVjcztT6PiTzQT3YCyZXHRMwyju1VdjksjTtshJStaCb1c42Q23SpemBPpb",
  "key20": "1DnXMFwkL43oLAsySL8AdSfXsL95Z17jou8yy1puCnSJVp6MLRyi2NNN1FNuS3J9Aygv3abfYR3bjfsutrEzmEe",
  "key21": "5Lh1rgTQbxQUbXMHDcEWzrJNx9jQ82ZYTzvfVXNp3bjQjnRy2wg5vriAcWoEzm7zC4w2BSjwvY69MXrueG5HJYaV",
  "key22": "k6TQGrCuCMZFj86uV8chHwvDa3QVH7TEcMc41tVpfdDBWwxLUL9gmbekfsp3qLtDDnms3MdcTrsJNU7VpFV1XFp",
  "key23": "5ER3oY1pdYG29XWfUMuLvkP25c3qcZPCSUStUwzupci3JopyLJdHpy1ck4Fn57LUuz4bGKaPQmNFBgfVf25C7cCN",
  "key24": "jHJze7u4cDfqjwp1nVZtxJtjKK3H9NLoX4oNd9xazrMLWZvLbDLzKGcyaUvgB3dZuHkxkqwdvARaYi6HtZ6WHGx",
  "key25": "26uywwBNfres6cGBQkRhTJjJYTNBt8KXPyv4H7Ni9gp8htvzjTeVQ48Cx8p4p7Gs2n2ewkFy4U18WMyZWGyjsAbZ",
  "key26": "4WhG4eYhpm66n993LHuwo5CZysgQV36yNQFSSZKLEpr3ZKCVaTxgpM6R5ET3wfE6RRtftj5MeDsefTNwV7agTMCJ",
  "key27": "ADyip2ER7qF1x4ifUirTodo615GvSkhBGcGvTpgPu2YaxzBZFb3BwpvrTCNtyENb865Hpa2T8oBjKwxvTr16kXN",
  "key28": "55P7siBXYTcsWTAVjynUyNNcnABmFK3cbXGrpihqmVqibKihhLJXAgBkoDpXbmPVhntgZNFHopmjtb5P7fdpTcPZ",
  "key29": "4fuHSrdbgZ8v4Q4fqANteL9z9oVQoCD4haPZjoLztEGTuFTzpoM6vFatNMpxECn6rcmvgZ3e83GpiEEPYi5uTkP3",
  "key30": "wdMz7tQnj9qv2C19jG2nZfVxFqRXGsJxGiS7qRJM3e2MsFNoj4J6iPutV4sGr2qRLyAz3TFGtJkdohsqNUBfCgG",
  "key31": "5zESCUD4kCCXGkQJw414ozGykkWDgtysaAZ9QPzajDXS6k96UpJLPjGzTvpQSK2Lj9C4xe8XypPs9q7TcUtSoSZV",
  "key32": "27BKEJxf6SnfWm5sbw98rcCEGvCPFF1P73irCRrXjMD3THV5qYEd2w4m6H2iXDoVy1FP4F8BQQQyMWVksXLvKGgn",
  "key33": "3dCesqLtByZXrKUjqJdFk2V6CYo3vf1uqWqRxysnubnsyCw7rLQPhAPiWgZVmhvboqBXRgCCfeamzSDSw5xrQn5d",
  "key34": "3wckr2KZUMJwY7uJn1hjbBy2AaMJyvFYUonzBbWNcd16PjFvkAZJqYKWaHnUVQJeoTMiXkFzxftnVADDvgEzpsmB",
  "key35": "4Sn9Ffqh4UP8UpiHXeB7zyJpokzRGjcuQtqTc7SJFAD8FYrT45DVfX9yYwqnZeygwi7Dq5XWFHZDcQQCaJezSu3g",
  "key36": "41r2MRjny5rfpWKgMXgUZpXL8xkKjQgAmUtKMHsbS1FqWu6zEis2ZbqqcEx3TPNzVGgsUCVxx7yWN7eJLySojJUb",
  "key37": "5uWGAMKL9s5DGc4SyZg5vUtN9YyUVkNDc8idGPi4w7E1QfscU1MpUcLDP6hw3Ytq2eFPwHDPNTWxevMNpKwwhbqR",
  "key38": "8xHbqxnNqUoZWWwakzAegBTVAf9nkEMeAVKF67vou61Vhm9ugJFtijmZTbseNiT1ktedpR7gx3gmfhznk2WZRrR",
  "key39": "3UiGEuLNvx9qfyktUDsxPqBoPgXfeKLQCBToSimCxkdVt63RtfhQ71SwHkM63V1SUCgsHMjLpDFi8Upt9CKNbVRU",
  "key40": "XPqNLwRcJrXhgMWpDUQef4ZanriKLgAY1DzqJLjZnhunDAsqcMavYzp8U6PZNLrE1v1dtP1bAshztLFYbUR7bxw",
  "key41": "arqTZ4diaHeyi2C6PRR9C4GzUjH8yuDYM18jjkiKRmzb7GKi6d3SGjrqekmey7fh9Fs6pWho8m7WbLGYuZoHQnF",
  "key42": "tBqumtfpxy36NHDxqxmfEb5EYw5d3ZVS8LdL4Lq5HLvz3chnRMiRqGoPK2HxLdYfZXEH4tn3vgeV5wA2vnpVvzD",
  "key43": "5QJpxnJrAooNZaDUwd7bN2SAAUxseNxrWEXk7DFMwyCtY8uotzutx7ZJD3iGYU1mxVKX3mHNsQWBAwZqScBuLQRG",
  "key44": "5jZectqstKqGoNyRqL8afZySey8MP6mKR5jkLC2vy9BNcgpC7qEddj4cCLBooUE1y5Ay8x63KK2Fpu3Dx1LMvnMi"
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
