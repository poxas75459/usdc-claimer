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
    "5aYhUnTtbeWjcavz2eCb7LGTBR5PxKyjFgw2n2C3HGmhGkh6TU7L428NWC8nUjALahLkkFvsQ4qbPHRU9VnLCXtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmzsZAwTNife7M3oV2xnF1ZY7EQ9Zq9oHdPmESp7D7pXNQe5azvt7mfHNK8bYTNaGRC6SLxdi8qgs6Q7yBEhgMb",
  "key1": "RtvDpvQnUHj5T8HtkKhVWVokxttXBhfVnLWPVg5wRkVjQRN57g2q1XLJUD6Zx5bdTgcmCFdYBmetEnhx7LKnkTE",
  "key2": "2TqgLHR53NqDhymUUpfzY4XJ44RoF8YDVbnAHMVJQFFwYCMyUJDL8HsCeXQWgY5Tcq2KeBQx69hnknhdp11X8xCz",
  "key3": "3BExnR7eFFRYYRG1AaCr7Ve8Cfso7ZYMDHnmekRUECdpk8CwfJSSeZak4i8TJ2UbGnRCcfz9YzxhR8TMuYUikuC3",
  "key4": "5mh2TaCgU2X3ELqGzU2aiEtWkPbkf8YwSWQC2srJsDBrgsYqjXQ2gP64g6rfHbGQPW1Kdm2GnXy1gXimcaKufE59",
  "key5": "5nocrfficdLP2gFKNqpwc7ha8rvsZEFD8D1Kj9ApBZXSb62eofAri1jdydfi8USWfRAuDD9pekb1KpBz5B4VjcvN",
  "key6": "2niTBmRR3gcpahCNxjsUh4vkC8V6ru9isRDRXjDh6Us2osjyn8PW9vpiSmLozhhsRAd8ham2ebdjyeTW1BbAGYn1",
  "key7": "3GtWBQtTPemiYVhs3q24MphqVrMie5LBqj8CN4E267C3cLVZMZ4UfozkLtzygZEackGDV7AMmTPsVdjH5AAZpJjv",
  "key8": "125ZVfTUF5Nq4fyZVFCAx9Yiwxdw43YdJuQcRLud5EjGMEHeXwWGuSRDAKQYrK5aBPi34S85kDfd7YTHosFcLM9X",
  "key9": "2cbeLVgC4F6PiKVm43SBbiWJGF3QftPqfjpZ9EczUjtSSGqwYDdexebuUrBC6b46P3zN5wb4RMM4LtQXVfY1pg2a",
  "key10": "21MjxWoNbvGwpYiQQ2GAm9tBhQ7xQDgoSuTPY7GQSiCpSegSMnxtvUmC7d3KtEeXqWGNrMFLESDB6CzUzqpc1XaK",
  "key11": "UigzifQheqBhH8xDdaCmAmzGBv6X3LqPa3JfpF7Q8GVefSx5LDMvQZYN4jRuznNXzYNFvo1Qr6bEfzMqHCehVDM",
  "key12": "CKyZdrgEj8HysdsW6uGHVfGRknf5hmUoDxLNgHMYFbvaZjd4Lv5B1CeWrSEnB7uRiGeGQbZ5sHP4gPjHmVLQZks",
  "key13": "3XvzmX36eWpEG9QE7syMUqAQpzbn38HQJziryiS8hkhPGGkRjZBfP5uTQiHkbMQEBMZvKdECJjY9R8ZfbfwYbWbR",
  "key14": "44QAYHr1fwMMK2qrcazYibUt7CYR7UeRZMiBD7duVwrrHmz4qLE27YYsGD5sMjjx8wCioRGgf768h6KK88fQMiKx",
  "key15": "5eQSvH3nx1L74fAhiUQyrFz3VpF2ogwz7rupmZ68M5KCybJnqCJYAPMKdJckLTWwj6sqHGa58iYNffAkWEqjma8s",
  "key16": "44RZz44mxTfH7QHyLDvSj8hmFgrynMqUEZrEdXjh2KY5iFWR1vDx5v8KkQhT5gurEgTDReBf561g22BNNzDvNDsT",
  "key17": "Sz6cN9udoX5dZ6PyZr5RmjZT5tG7vR1gLbcZR2DT8paKomDQyUSJXrFiVyubwhgimSXwRuXi5UwY9qjpXts3aqr",
  "key18": "hBSTV5729iU8Dt42BaXZKaEffQ4vDPUSummHxxmG2PpJhkRSA2mmeAdDKCnhUn3nVztvwNgUR2BpDVcqi9kidr4",
  "key19": "4CRpNFqT6F9vpjh4ojzk5HAvpaYKNAo6eURHa6iUnGZGhyeSVs2Xo3rW3noMA4C5JqZkwsoEK6RDXtcVUjNmcH3E",
  "key20": "5HW7oMEUzP6T4tMap5qhDzo1WCpmgDEJ9ZRAfzmBk8eDk3onf6MXfqUYq2jP8QQm8RueKCNzBJjoXuoHLQdDbRKR",
  "key21": "48U2p34XWrcbXvyH9y4432xWFNUo4Te7aoCwBWuvHfVMopMGYkwi5mB4w4p4JA89cYkeiXuiXySEhzUsZvKMD52a",
  "key22": "5ATTk6grwYytiajFNqqjnEpzgHJni2DihXEoXuAiciFFDKEthYsW6kFZxTC8GkzseX398gAMMxaKiNsjHRpzDkYV",
  "key23": "41niUdspzjkE5WhH56gtRPkq8DnPwkpHAexbx7GjHpWpLWvNaLUJZxnuPxaMJ2uaNAQM5pB1UEfvy1G3Nei7fLyF",
  "key24": "2RdfgmsynNjxiahsBhqbuCXgwUyYXpr3Y7ByBZDuy2KSgtVjsTKsUujLedmkyU7BisgRyAp33ZdC6btPczdZNt6o",
  "key25": "3BhDQTiPpuEo7eC5AtXMTK1tQ3XqHV1V5xYdrZuhVxqZyHLTfFgTHHdhQtw2af52akQfd1XWFDr9Re1BzWnmaEEe",
  "key26": "5NXgp2DbVNTqF59H7SvS9Y7iEqCaoStoYW3jJWuVQcNPVGRLtitA6DBSMCUC5ZUQRzkYou5BPieAR3HYeYvmFVB9",
  "key27": "BGbMyr4hauVN7h3SEEM33jNEZnKgVN16stRmbxMRGgD8efe63LzLZwPQkEYRF6FctcaKi5bH7ZiUgnaHZ6ApKWs",
  "key28": "4nvLXGTRYGJPcs4HqhqChf6xfMVSHzhfnxo9jnR3gVPbysk8ptaSbZuEdxgk89SuK8xaf5pGR12drwVtyWRpchFj",
  "key29": "43ENhZqcttMMbtae8YmbpYkBMvddrtD1znuk4GVVeEK5et6SyR2L7PPHiLWFeQkVRU6BQfLkdopQp2EMbLtVDXDQ",
  "key30": "5rN8HQ77V3htFNP8XoSiwiDnXFHGJ3P6vw1KfQNkA92URVi7Fsg9oX8jhhdXJAEWcT6BBFkqv6iLaih3154Q8nSY",
  "key31": "3y8RZc1YRvyxyRndeptU3YFc4Fga2kPZGQLjB49Yy42MphSU5NhzTAAgwvpF2iLArKX4MFhCgZDSz18AK2qZJnUK",
  "key32": "JJWpa25ioJczyxK5fQ6YuoYL42hV42VU9pZJ2CBJDJ35wg5DkiMgd6HynPuK4DKkFKUaLjtP9prxor7TcNW2nUG",
  "key33": "255LpbG63LQzWYXU4c3ovVtM71uUEDdFFH8XBC76gLcMjSrhLNdaFW5FcciM6PL8Pu7eresNDa4ik7ss5jd87HCP",
  "key34": "2zk3yxJY2UUiL3YY6r4Jf2uKJHYz4Bxaaz7EHhxc3bMU7Ua2B6z7ZVbpyXBnt2keRG9mnBjiFUNHbAoXxGvkk3dN",
  "key35": "5NCC32diixSWKoZPmmDnq5L7RUBwZejvXUxRMYXTHTycNJe5URctF3fGkxuD8ANe6xPscG1vxo1P5Kq3EDBCkunQ",
  "key36": "44A66foAAEWLryDgroTPRNF8E3LARRN3anypPwTBYmD6pQ5EocQRAWjM3xxZxri4tJSE6xwFLhi7tf5Rq3gSUUYr",
  "key37": "1t4n4teDQmc2DyrZUrsUKA9xVSecqi7HUGeJZTmNGXYV2TwwhWHKFqLscqik5g5dTEZ8ukaDv3UVTUK41JCLNBU",
  "key38": "2LBiVpk8kDGnNhSHpURabiGxvuSiGTdrGUEJoN8BRXnmXatSK5YWCHodKh5sQMXWrkTNToyFUAFosKy282iA7kYD",
  "key39": "3bsbRwv1h1V9cyGzYJbytTU9UqoCWjS1Q5XgW6NHZSTrygvZ4cBue2yx6A8C8ioEC5UCfarNstoeXNN8GApTvqZa",
  "key40": "2p1DfF5R168PT4dSQ1TNj8aSK93ZVqnJXmbyYJ7fLvfeF1Wc7UUi8q4fXsRgyZSGtCsHuq5o1Y1ipcR7Csb4K9ag",
  "key41": "2cadm5K5ywRQpAAKCNAGWwMAFz23dPfJMJWeW5AStmmUWoSbyNSM51p45p1hV8vfPszTvUcFU4p5QnL5SV2Qfjpg",
  "key42": "YCMu8J7TR88waTjW349j2gzzwFtfDkk3gmhBP7UekrKV3uoNJAL68TTWW287CFamM9hy51DHoaWmECzbM16Zxvd",
  "key43": "4mqd1arx5Nqai3QwCn9qqkZ6noDw6NS47Vd97F77wa43ZphXAp8KRYFdsb6KFFA7wT9EMn5ZYz1tFKodrfHam1PJ",
  "key44": "4vkCzY6PscuMGmdjWn8DZEmKLgp77Saj6cgg5sAgDZfvFaADuYtAQ1dC2T8ETj6GXjfenfMwgsLhMSnCKaguhW4p"
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
