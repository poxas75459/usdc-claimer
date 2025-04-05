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
    "49zcYi56cMBhDMEzAQLyLgxbFfiYTnwNqqe9p57V8y9tTv4ZgCEpXFgpRKygGgtgE1it87zPCpxqpDoxjaN36GTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wULsRojspCkehZWZtZCQYVLTTtBx78YTgcW5ZcTqgcTRawNBjqr6cSwLTesW5FMC7vPBRD6S4F8KqJGtMVnrpeV",
  "key1": "2VqE2kFRDFB8mmfDvcZgFm8eZ1CQA6pQ1ef3hjfm8xEXFiiUc8uaUPHg9W9N1LnHqGX4L4W9fzU6Tp9bHwGXpFms",
  "key2": "4NHyHCN5B1o1yz5feApt5s7J5LcLENPZd88uDs4cJPHo9ywTciaztf7UM4UE99KEk99CVVXCbgg1CkG7fNJnxqUM",
  "key3": "5oAtMDGX4zpzP7iuHwT1LfLF19TN89rdasmQoMTQpDX63kPHALDokGxjpEEmHefXM4UBTHdTN7sajqZsjALgBxnZ",
  "key4": "2Wrp6GNZY7DPXZxsdTVvo33akAzB3nJvCD6DzhGY54cgiK9s2dZiRqW7p1mxRK25Eit2FqmXhMVqcWpffG4CZ7ym",
  "key5": "fJgrfALcfhHSjWsJ7dWyuXnc52dtHWXgvczacdLad3kdEFZo5E2BsJ7gRdnYv8vG2QZBQ4ryVmE3v3CxE3GhYJ6",
  "key6": "9Tpqem4ujMhCvNdmLiKrhEqSjGj3oNryaYAFV1DFJKbcJP4A1aaEnQkse5CWCm3qqUmjXshErmNKH8V2sxMbP2j",
  "key7": "VgN1KA2QGY243Vxx9eXTfdHp1dP7cjrpyaGXMkWprDmhNdc1oW7J7RXYibcsFkDrmYYXHHjHARf2sLP2F829N9G",
  "key8": "5pQte4Dr4HeQG8GEobasz8ethCWdn16KH75ZUS1WzADHQgLeyc5nAQ8wvTLv2cfdK4dYuMZ1JJ7t6VkVYKWEw7pE",
  "key9": "3zGqyqMbPjQCWAZ9Yd33dY1z9LJvmjBRrENbwQHPczbMnD1uZpgRtAyLwWThtx5fpSprFT9u9prZvUyENjnEu8wa",
  "key10": "4cW3QcB4v5GQ27wza46pzjnW7nfMfzUdtaXHHVoojDhaUJyfj3SMo8ER7Sz9ScwAx8wDXYfuGGrR6yhjJtN4dzog",
  "key11": "3GtULBNCPT3fPEAJdEzUsXZE9CV83ZKubJNfDxRC5F7nWfBga6NYe3g6bcKsCpiW7ui7CpPaJx65zp4NM1FGE2zZ",
  "key12": "4nCyHrW2F4Kn9FVuESc3Hpc7cUUBQZ9fpzw1igPgrdgCh4eEb695H4WXgMAwnNXwqhG3YG3Gqz84nzcvNvdFbgTp",
  "key13": "2tVw1Jxsan9mEB1nCYDMWBBtV2x9RkLAftW9A89uq9DqZPHBWHXszABTzH5VjMir3KXqueCNq1td5p9crECoMGJa",
  "key14": "ujp3nTp1jbCToksSM5v6X8xHFWBK8pEvkVhP9xDkRhSwwpFgxZrQxSfvio22q5S1WzDjQBfUeWt5HWyWqWDvzeL",
  "key15": "4bt8yehKHAP8iygPAmXJ7yTQdbidcWDQsgmD3HcghpMBrZexGRYYYYr2PptwKWRgLQjm42J2pSmEDBdBPJjDFAbR",
  "key16": "u58itBdcQAK4onY1eVWb4SARZhx3HpaAtpWEEVdkW3BHKp1dQi8UvC3BmBKjHCH5RGCR4iSHFZwKTwgv4oLevGN",
  "key17": "5CE6xs19M7JMY8kJjx6djNAow8fMKunjxCaU5FtGr3bsEBf9YYJ9Z85DTY52a5uTxNcZYP1HLWEDqAoT7KVGL9Qd",
  "key18": "9m7z4mQhKsijfEmJ6Msim96UWu6mbBkqA7iAg9YpbCbh11AwpJCCp7hE8Sc6rgTLoES1amFMCgG7wibMYDJGxEQ",
  "key19": "5kkRNuVSGsmLj2uSixbzGeZaXNNpVBGazE8WYehuHsHFYB8NejzrLj2dehjh2NCZ2JzuUr9RiWZaJi9RuvyZqpRv",
  "key20": "tcp7msBSHngYRdKzqQdrAy5EPcUqTQPYGR3gfMLz3FLioFNjb4BDt7EkevFsvJdWpEmgLmMrXWsrVfLFFgWgw8N",
  "key21": "3WCpZxxJNhLXjHHijDa7xwHXZCnk5yz3UVPhByXHxMafuaDZRv9vAvVJ6RdVZu1VqKZSF984xoELWQa63hWpcpRz",
  "key22": "5DsBy7tpNt7zrrQ56Qzog7VJk3cSU1qMRKpGdGQ9rBkA6vMyo3HAGgfaAPnKMf1qDe8z91QQN3jgQSHE1JQfZxJa",
  "key23": "289Baiu4vrhUsMt75gAagAtgLdvZt6Zt825DomupZkRWCQqoG6QK1cVxwMEi5XG5UdU9Q14K44VKmr2JULnHtWRC",
  "key24": "a7qzXxbuXtYAYotr2M73fj2eA3qFzpHDKyaLLbzjiTD2Vye6cyvnx56G99jEhLtCLc6uc8U32ZbCECAWqcs5wJ8",
  "key25": "5RsTaZV7j99pC4iWBBza6LcqEa1X7ZJhXrWm3gbgJth5ywMhv9Ybs64WNEScQWLS2QVDwygN8S4friofZ5pJTAMX",
  "key26": "49omwjFsUXm5KGtUSwJ3kTNhfx3jFwuazTKrZDGaeZUThoNEuvmk9cNkoZHxwrUsFiviUgTAN896Pg8V3MKLvtVN",
  "key27": "5ypr3kF1D4uR3iCN7ajt4Hc7jHZuMbz5iRp4LaLbspUYbKz5ByhVsTgZq6tEC88vjfsTMjcfAzwYghbzxYqRuKYy",
  "key28": "5cxnkJVmeLJFNWnoY26prHu9cpFkvVQA64GmcV6xMcwGp7svU7ma1axewdnfVyc8tssJyyZ3t2cufLqgzY62NRM7",
  "key29": "3VJs54tc1Gmqc74EM7UUUKYEDYQ4cU8KMc9dLEFcLsVMqGH3wzQjKYD5o7dTiraKr9yqxXEJm1k3xjznAQgfV2eQ",
  "key30": "4esoyEvrbnc3h1xS7FqCLoA3iHtzxB1eZN3nAgJsXN2Rp6xEr92yikHkZHB8Wg3dmsgE7RPGGYx41qytnJDCUHdQ",
  "key31": "esasb9wcp8QZMP87CRjDkVSN8end5KK1tdhCJu1d87SHmbwdVCVVZTnnUA3cCp8Da7uaDCfbCYEJnjw4pj91Yry",
  "key32": "3M8UJPuT4Gs1KAKzk4RZWt9Z8ML9eVGdZqeTFkjKm4BcZJvubHmZmbXb29cs4uoX7NvwuWQX1pYEv5a4pPSBebtE",
  "key33": "3hjPTAMAHt9MZNMwVkwx5cNbmF8Qivd1JyfVVpDeXfrPoCPMbDc3YQKnAyLQ4xBzvLP3jt4QXzVbEvrHh26SFWDN",
  "key34": "2HW6cdeJjaiiBgfN6apLXLLnYnbGrHDehT8JzgfjUfFPTdM3yXfP4pq6wXZmxq4P1iue2DALYtni4qkCYQCxMNv2",
  "key35": "3J6FVkAX4thReQDR37mup4C7EEWMnVPxkUCLtBcMkedp3ghofsa9JtvmES5CCE4f31Rh7T81L9XLqceLvDxHXVFn",
  "key36": "67Rnqjy3sDh3K3E1BqLYdzHELcxik3gdgSGqtqjCi5LQm6mQ2FUCTJ2PbhmffVzBtoKGYParVQXLDqYcsyYYu1U6",
  "key37": "WkyC5iQcv8y5U2ZomGwNnvCMhqopQnq2tLfLBALYQNuvZgbLja15t8jxsBABJiJubJRoDq6mUYGH76ocvRg3FAR",
  "key38": "3bppZN9WsjvdUETB3JjtzsmNz8Dfi6ZPrS5Q1nYq61uWcp86T3CaHrfbN9uVACtsrGFLxut3pbc3UaXFde4FFYNH",
  "key39": "4kcGPCVCygX5DhXCCCXQ8RsbJAmoTBtfiWqJwujMcLidFXmNKhFDBCB668PYjC5oWuyhNhujKWySNrPPq8i939Uu",
  "key40": "39fabuZPJr1nccVJm71ajjMzi1BZ4rcNV95F184XHGvpAy36ipnmwoyxybj4uQR79nM5NRzdvbPc2dMADhsSa1cS",
  "key41": "3Acia4QZ7tu9T1YaGSb2a8RP1tHKCVW78y84bsxa1xrMy5z3d5C19jSmshr6QqrRpGLPdTpfpwNKbWQS3SwJjYST",
  "key42": "yvaTjDtDhfUnDQZaMZTPwaMVeB3PRhEkRJHM5tPEDceGT7dnQqrG8bp79hzapyiyki2RbBNetM6iVS7wwKSzfsi",
  "key43": "5Fg1DpMyriCbWadeNMcKa9SWWiFsDhoN49YtnvkaVY541LaFCcfWfpHjqcYefvWef49HRZM3PSi2ngKoRBAwSeHz",
  "key44": "2STpnTsKp59rE3Cr4ba2VMBYKZZ4upK6mdGvJbrvFHigLtXQUEXq7nKJYG29cpt9ywTqJB48ASNxnTw7r9phYKjb",
  "key45": "46Mb1Bb8MSayqNYTUyHfciY3XE6bowtntkFa5GvzxmhRz8nDoaCCMxFbXJcuwdNpdTkfKb7Q6jCfbnFYyvXxp2tB",
  "key46": "5kwA6puUzaoord6GqHfEBqXrzTo4JFtY85mBdtnzAqSCgK4jG72ko94TPvJFYSw7ps4AHEpwbCnpQ34yezizTCqT",
  "key47": "9z4hWaRXaFUtiBx8yjTkRGUjXxLmMG1VR8C5xBReBQ7dJAhp1qq1X1tnpYdMoWzYhaPdsEk4stM5CaarHXUra8w"
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
