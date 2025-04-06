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
    "5LvCQVGSRHsaGYWbyk1Rp6dM8D38SWuCMfMv62qUwyKGX88xZnRc78Wicfc9USErMGaKY4CbedEsCnmqWcv6P8TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRwTEctbEphtP1Va21aVofouE9wSWc7BW1HBwn6APJiNwdLr7zgXX3A2zuAJpwtTQjcVEZ5XB2mX3PPKtyroiWo",
  "key1": "3sANysTkrSCcGthzisBX7zyBG9yQSTgidu9hSgdRwSG82wDDRTavAre5X5XMBD17NFSyeAuwnfuorZrrjXpjRN6y",
  "key2": "4QfLq8AATQUSTVwyKsbjacu8H3AeNTwoSiJzXwZECgaErQ4b7BwAyzK2sLWN8oKJAu4d1q2bNVAM5M9jq33pFR5H",
  "key3": "Yn39b3YmGfLhEBeVBv4mEmwUoJqsV5wotxk53CfyGQW9721LAu4pZXg2LYf7ci5mvECUXakvGGXwmY15JVUy2ni",
  "key4": "3jxWEQ5FtXi3AvroM1E5PG9sLB6p3Ge1YGLHVE5VtR1FYFLVQg3dqtzRjKrHiCngaWd4D5RpigExh62pd5RqjNYR",
  "key5": "67qDQr84wcVWmpFSQZFgfkg1u7GmfPG65q56wM39xrALmGcix1UYgyXyfdJrqTZDZwo644ik887fg6AHp8eCrHfn",
  "key6": "aZNx7V5gQxH8RWC4ngGW5NKcuyGiVZfFEvyDE3KhEF6F59L56iz2Z7SuoHD6xTxFnp5zCwDWzc9DibB4xrnPUBC",
  "key7": "3NNQ7S4QuX5j2HYc7HsNjkVKY8gHq8GGduoFiZNjUJbeDiAP3nKutArv23eRyvPKPPwR5PrkDurD11KjjpfuVAx4",
  "key8": "5tX6LpUiUopcJRb2gzgR7bWCrsU8UjQ1MkBPmD97r827swq66HCgNaeNXyDCrjHZ2Brreiry1XnzhhPedN7PLJkd",
  "key9": "2qS1WUj11RJuHwn6BQAJnqJ4c2BARjxDGLxDYVwzxPRFC9DSofgQSUnTSwSoUDoKe2nqocEsWXbnxSdqdDD4xAWB",
  "key10": "21auAor6jE2qnSaa7Yt1t8EW6EArE8VVU2oiGJomn1tj9rzTVLaHnpajjw5648AZqNo7z1ZB7qg6Bd37jZKDrTaU",
  "key11": "3HK95kVWkFP3JKsQAqCUVx5VX9tnrYwNUPa9W33gLEBLnZ83pNaFjqG6r66JPkh5Hrc9981xZiNo28HRP64A6jJ5",
  "key12": "44nXw15FVShog8L3UDzdsZhwh8e3nGPyF5ymmxAf9CueE8KpmddoLdZByu2hhL4EqbmNX2ARbaYnKhU4YYQGbeC",
  "key13": "5idJ91dn7sgVfS15aYfyDmchUVm2XZth5nSKZ1r7CLN78qYq4VjbvZh1ss4zzBhnxYZ4SM8Ec5PSJRunzuFvPD3t",
  "key14": "4NBbhdpDpSHeoanWJvvkwBk3VyDaQDobhkQyBBq8crs8aY9Ht7KdNmZf3xya1Dce9j123pAcsg9rYfu696uWRnEd",
  "key15": "2ub2tUVvnwLa4tX6UXKwmuMsghEZ3Mrn4kmEbih5Jj3L3KgDgRUwVktfhoG41hFxjYRM7eHMUSvQPjM1LAV7sm5A",
  "key16": "45L2BQhr9PjpwmZUnHcwr31YkBJJYLxygrqb929NwRGCoE1Pw6YnKiwi7mkYxq5vnhJNsZUko7JBiXqL2aaHJkKz",
  "key17": "4wT5goPGsfZkYsvuUusAsneXeTQ2ev1JdoEiWh2J8umjF8ZadJoewuX8HhwhL7g8UYquEauvBLMc3LcWVsWqkzML",
  "key18": "ee45DHeq9acwgBnrkE7vMqZoWHYVKMoJnVAYrfDPZ93y1W6APcuNWKbXXRiAmcHa6LCHwk6C5VZA9rzJ6aZmyBU",
  "key19": "23NWgSLwY4YsKcgBWEeqy7JvH9o7dix435jpR6nT3itrBmsHywLSQEfFs3bKQjb2b8etdCDsP1762Z4pjzV8KeTz",
  "key20": "3Nz8nz1sSpcQkr4NUYJ3skJpyzwdGguT6Y1i9W34NdbSKwZ1gk1jxrrtX1i6a85j5CyRXDQQH3AxFjgboUgU5U1e",
  "key21": "3K6DiHmSrCngNyg3694modyuxnxyvqqGYWJo1u4cWfrbRyVcab6jp7R4QYWSNPFnEYQhrfZoGgJvktbbsjgmYC1g",
  "key22": "4GAjfJXbc7Uq4bJwL4NR9U4hpmvN74KuUoLLSFHZqoaoR2zB2e3ijSpRHAkFZW7MouUqXq2rAtqwU92LdsKP1crS",
  "key23": "42yH8wGLH1643LrvfsWCk5Mp27XCeZHyX84vRnxPQMKYmHsDjK7JogdWo7rL6poNPHEqfdXCupk3ML3N19V8MSMq",
  "key24": "5v2Q19Tc5E9buHyTBuUX56A6wT9bumpAi4PPSumYKk9HaHw26PW334cto8Az4n1jSLaKzfSy7JiYnW5fe1KZ8mXH",
  "key25": "3evwyNWnrLWkuLfdP5EAg9W8zjDfVdXy9fK2H4wR2YVSxUdhsMdgZ67hUbhxWLHEGHZKD4x6znxNKjfkpX5KCNYZ",
  "key26": "5qAyKaRD391RWKeMx375YuPeeT38VEXkYqVhPJMnRsNAr7TSFY7hUjNJuxzjFpcVEr5sSMcp1pgL6Vph56SqgjY",
  "key27": "3AHfw5GDj9YfvQUhEX1nHXLSx6AvsJabSFKbDsQF1ZUMgwStiXaBDtSycAtFtt92AH91S2iCnznR9dauLdKfA9UX",
  "key28": "xesRjQ3wDYKMi8DDax9fpDk2aXoe66Q27aF6rUQx9AMxSNmEF7Yy5uAgToHa5BpKrwz2zQQ5UTSzn69u9kPiBFL",
  "key29": "YHDvPbimQkY4jk96RQiAZRe8xBktjpoahn64pPY8rGH7cQLm9XWEq8CMm1DRu7y9J46fkP1J8FYTryDT5o1zvSd",
  "key30": "5cQQSVADsLhJjNVqKndV7FLiMTXnxrtHDaDRf2d7ysDRxGHCsA7BrGz1AUc7dHUfANd4bXfjyk1Z4FFg98NRfR8J",
  "key31": "MKedKGRhDbfgGzPQ3f1itNZRvpUoMr7vr3mHz2xLFqqfC5hK2wCDkXdZbuFgCN5VeSpjz5Wx2UgAmFhtmjaGY5W",
  "key32": "2Cm9wRdf17WpuVA61t2NTvDQfSmeVz3LWW1UfYztjiPXw3bXgAYN5howPCKwThgwHtjXXB1exw7GbbQRKwEUqi4P",
  "key33": "5hHZXWBTyf4S5v852CMJmwFYL6epFJaPZMES7RXLcHna1RuGtSPjFcGZQ6fKW5bWYqMastrQLyL1FF6mqoUtxU1x",
  "key34": "25D8arfcsgx6J9koET98vCaAcAVcazukcDAefrhizrEtrxmv2Jo4oWwWMqCH1awNw8a7kXUKuLoaVr2VTuuyRGUj",
  "key35": "2QKEjkgzjcpq9F3Y5HxucwnUQbY4ZbHB9EAP8YN6zBUQGxaydF5ka8AxnQ2Stkdy5puCtDYvz3NaENA55VVAszqK",
  "key36": "38SmNXY56gtc67QjhUJjpNNqDRHnHMibtWYntxz5Lc4SqUmZFEPF4mxbUGEsarRH9egxJt7PQa82dXgQmyqvddTa",
  "key37": "2n6yBo9XEpNQFeBDpjuvq4mPWSuSYhmXHtCWgxk81wApem8Cn2e8D8tWts4nEVn3BCZCpGR2HtNaHNmzT2yYJit9",
  "key38": "2GBRpAkioQCHfri7b3G25YCgqj9XufZ22uw7dMmvHkvt6Bi3WK7HFSZrbqLKtnSDZr3miPHcmJaGKpunppsXKQrD",
  "key39": "5ZSXrPpfR3DBcUQeXvFpmnfN43C3LsXG5NPMW3U8U81NieefFJB1k3x2nUS8yG8AoubxK6EBKpsB66deSQzTQvAW",
  "key40": "486vzdCAnp5HQxTAvHbJzVaK7kCKHka54WbECAfyAkdqWzDMxLyjKrYSKphMhwWF5gamM8At94S6jLVMEsUTDosK",
  "key41": "2Xq3py2As7uckRe5mbgLGF98ZAXmycMQS9F617cWe4mURQR4DUbs5E4LdyhUAuwy4H8V2aQ4JXSpwetPy3rVB8za",
  "key42": "3ZQEGv8tYuG2bygyZFkMCfcBr1dhouN6tgz2y5AE1WR9fJxZimSmA4HYGpkecoQ1ZeZWLWjcYCAtGEpptCHdu8qo",
  "key43": "4MkQhKeRotfwqBWWSCSUFfQPMMNTFFwHSbLpyASuBtNQCpsXDwguK8qFvoMAqLN9gUqgF6UGgtpY8hqke1QH1e5m",
  "key44": "4J4cuSxnGp8yet39BAL97MEtVVFziKmyvYTFysKX6or3SrU2tPm7RSPPVpjz8dKcJgYNGjpTL5ss9GuSs7CjAo4v",
  "key45": "2qUSUYNcRELhAkF2aYKDRetsWQ3yLWguzBfJXgAfeLD9asvzKeCMXda4n4dFpqD5Kcsz83CoAwTeGwymkmjjDx8K",
  "key46": "426ThzmhxqDNvrQVi32ZzX4yqmvVCUzDW5JacGr2kCJuPkYPSNB5UtLgJHAGN6fTuPohFn6eKNhx8MqRUqaykzwP",
  "key47": "2ZiPBF8cUYAPjV9MdEr6uRHRGMQTEXxGuyJT68ue3FjprXHe6s6nWgJYwWhgRtm9Ky2JYP7KmfTo7BGccmtCDroW"
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
