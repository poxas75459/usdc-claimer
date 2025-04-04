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
    "sajBdzjEDLfgUsFrgGNPWNKsJnrmj1UrSuJRDEvPr2CWhATURLVfaoEK3x9DxEuehQwmUkcDkzhD7Th2uhesid7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJTHKCDiCgMDqrf2C8kXG7t5YCzHX3mKLYebf9WgRAN6LvW39tqpraAxi9jCkZcj355SSaCq3K8SvDfS6QRcog5",
  "key1": "4TLXciYSarRMaNR25yNAWd8EcMwHhS4gXLNaExN3kwgsZuC9Hb6D83115j57s3JYGSYCaYdYgzfo4nEpMBjeiZAg",
  "key2": "5G5UWZdVvZXbKe8eTcH9c186qqqDDEGg9GTmzJUY9Ub8NUs5t6kKZZXkHgGv4UtuSYD26EnkjpCERPi7FoZjAxDQ",
  "key3": "2vf7vSGeyuYZzd1LYfh9VUpX5ASqkWjCwrWiWtEtuXEzpUBgFRL3D6vtq1QcbX3ckCgvVCB3wVt37Xh4B3UzcDkK",
  "key4": "5L4mqFo8uWkZtMyYc3dQpafV9jEJQ3ftdfY7vsmMvQysh1mwZHrgPpzyGDQGqwwPzjYsrWzyD85Kze41L35UvWiu",
  "key5": "KH4mc6Qw9UphnTLMzQFmafSajTB3gG9GHqANoGDWhdZBsQuqszrQQkhswGa4dxv6yLYVAJZif7tfPQQdJWx7vhW",
  "key6": "58PcPmjdSKAWScqyE6R6wy5RqjJ5rjz95edxttckMR6LjJcbHXzLRa3xP22S4wCGiAXYGFKVTc6u2H7iTxyo8DRp",
  "key7": "2sjCNfA17m1hqMnj4t5jqu9kAqqQF2zHLvVqMQyPhkLuyLsgmsBcS3smXgw15WLVnz2FMGfrSsLFFrWvDxptEyky",
  "key8": "2HdcgbGimjxjmVBN79KT5qdRobvHjgtHrZjNZ56kyC3yJcF91YGB6gUAxV9bWHqedeR34xQVmPbTBHhAUWSvZRjy",
  "key9": "33RnT6svp4QV6dw7PGt5HwLvbUG3BxwgouPz1eYd34r19jbrUwcyjfTxuPoDF2jm8AoMNWRRVeguhTzyybSWtsNn",
  "key10": "4bJUPBAevRG48XPNRoBfFu6vbMyGpjYwdeHxhmhdgJAWJuuAmb2zm8EHERS34oxkKfXucwnswezfsbDvnfGhTyZC",
  "key11": "4rckjjkw8o8Kw5es5EY66caTbFuP7J6nqzHRGHkxjfpPMvoMhcc5ccXGHoQ4tS3L892XyNDkWnoYZJyWdZdiDmDm",
  "key12": "4ENiKwaPr3arHw59A8KAFDMxciZzyuDya8vfSqTfrcv69Cf1snn5dheiNQyN77Q85qHB3GX6dALhFetu8Q34nUwe",
  "key13": "2hDHkJ8UokZshvSQR8qnz6F9tzpSjovQu9ShReagKALiZFKbrDHtBDfPwLjsV8K6sULdTkbzGzbmbuVBPwcwKta4",
  "key14": "3TKhCDnLdVdqVzMNJdwfbXMq7bAf6BW1uVFeDTgx7j7srYNAQNEigT9been9PWrcDJw8MNjKdMb91ujgYw1PwJ93",
  "key15": "3hVjVXwHokArc8dDA1KTRemLsqrMS6AmwGXT31zm8EctRHWAr2fDm7JsnWSJ4kbwuUkvbLKjLYwXxVBb9EfajD8v",
  "key16": "3aB12LnqgGhDg39SfjgZLFJSRNv6EtTzrWCERcDQ92ZpKFXhhf1TBkGo1PAiDAaeXUc562XzNw9e4YXKqnpe9Tia",
  "key17": "59wjjtdsB6pg4eKg3KhNjGSYXj7bJ4Lrj52wwGcK8BgHnnC2dJv2DsFdcewbMPQjNvnEkdceVReJKPoHpBUiaRW6",
  "key18": "3Pc2ojs2wK3UAD78FtzVw1AMwaf5WuiQq8iZoNt9Ne1BckrpXnqErTmR4n5Xj4CiEEuDK1BPeHkN7SU8J6pEReH5",
  "key19": "38Bgpq1XrUEJaH9oJ7KECz8edXf3SCHhWAagU4s16XteNDyM3adq9RbnQMaQ5nLr3bZsVXMsEjebdMuLBjSapLFT",
  "key20": "3UKcuaagRCWhVbKS94gjoCrPMnfh3cUyFtsgqYck5D1uE8ugL2iM4t6iaja2xMPDjcRLyDERDftSeSqpja68ET36",
  "key21": "5LS8VEduq9hVwfgfziwegBnCiFDmGUWXKe3Gk7o8YTgR8FKCWb7vz6QZgKb2T1ZT6Uj73ZFnWGqELRbaxD2yB5DJ",
  "key22": "c6YDQJbGw5FRw6xJ1cimSoU5zPFygiuNAmHwMNXpsGLVnbrJqznBpLiv5DS9Rj7PJ4Tk7PFHEWVkpG46N1nELGR",
  "key23": "4nCG7RJTHiKZrvGzH71dECdruAt4vmb3NV9Q9xjc4AZtewvf48MRy4fKkkt6oeNLQiTGyjt5xgjzGkwC6jF5qc8r",
  "key24": "4vf5pujyakJFeKSreVXqkunJMdNq5ULi37Q8jRckypNq3LnyjeuaNuHHhjJw8gQtLQpBtjLabMnTuhEYfMydRFo3",
  "key25": "JsQ5DTPe1PgAALcMpT8rgFVMEGkmsmVe55AtRTsbJjUQCiTBevrh4Su5zs9fz1keYcQgMxEQxYnE4krM7vrcnfH",
  "key26": "3D3nDNwDSyoEoe1JCJzxzm3gdNpVR7g88TNgADJVWNKz2UGZCdVzXe2NkjBGy6nAcvauSvfrXeuJL343qev7F3S7",
  "key27": "3RJMPk4jTeVGNYPvEiNqCj1d3kT6i94DsJpsh65W95G7kUsy2V3YthmbUpY3JaqbnPtd4HCA1dMDnQTnqHJBk4gx",
  "key28": "5PyAR6Pm4ifZMkqgQ2oyZQJWWkmg94jYjeDTC8QsckmCmhq7RZr1FHp9KnnsFdCFyirAgynTbMW623gUmdYEFfzM",
  "key29": "28RKyd59KhM6YTL3FZ41aPvp2JqQa2kdi9D3LoDaiqCWf2YujgCHtmNbZLtpew7XGV7M3CrLw1SToYkJdgseCxZs",
  "key30": "5Jjb5okhRyjxFnXDiK62Rco5f9DcyintKYDkR7q7XztE5uEYZrE7bpngYQ3rze9TeBR3xa5QEYcP9sqBgGVDMeY5",
  "key31": "4J3tc2xspkvmKcPjp6oBN8FUmns7nz2vYRcbmGSzE724SNY5CXMo5FvT7HwffGZkvUH835VjVKW8xae56kD9qSfG",
  "key32": "2kZJS8YEo1Qwn6HLMLkBTY8FHApBByivq3AqkJzRBu6eZcFFE7afhtMAwWcixpwEAa4Gd3z4yVRcdhyNjQMBR5dk",
  "key33": "GyU2Nq9ySE8wn3jGRt4Zvqwbz6JLAwdbUJ9rknvtJeVRw79aVDZV2GMpYzrdxjvGkeawzHZLiNc2RdNa2oNivQX",
  "key34": "2u5WHk2MLSE7qjePHd4x77moTywaXLZJEMs5hA21jdYkLgPhvGUoh24cfxAnwF5rY1EJDy2JAbQysyV1SmU9WhTm",
  "key35": "2Nfzpkda5en4vJrhqwJpJMV8GqTdPRWHuBrCuzuzP21A1i66pMJhzPqKZrnf98JkMUx8KaJrHzpTJkGgUJoonfGS",
  "key36": "53bcq58GEDgymLeVpDDnyqgXUGyN1uy9bBdyjnMcAJVJvEJCWJyx2YJCNt5ZaQ5msv57gyYWMCpz5Tc2uWquf3qz",
  "key37": "4ksvaRdv46aziNF8QyVZEUy985hC2DjqyZwwvETLXc1tfAByTnAvuHhrk7j7JQmqcQQxRMjKtqGYeMwMdshK814h",
  "key38": "352ofmKCZMKt2CLLtgLTmoWMGE74LSgjMPBKsnD5kwcAUEp14bgJyuEzkHdUc8U7UjTLQkHtvo535fAhGs54uFYU",
  "key39": "9BykW7cAct38M1MV8bhsbxpjm9LeNqgreJLNyWvFTMaXKpMtGzyYsQZ1tFbhtpLAaKt8JQSjsYKhJ7hZ8T9D2Zr",
  "key40": "5SEz5qTzn5jDFQSM2VSY4isACpkZvz9iWw6SmqCzRuahFJJiR7MufbMjc4aCNSgQWFdBb3PTys2NeAntoiyPSxxT",
  "key41": "44iQ8MM3BUdCndsLehErsX9ZkceHVydPCMYSW99V14DVSCRJPW4mL8R8erySQpk5H23WfNmfrEaZFrpacGsBh6Pa",
  "key42": "5HURaZ2dU9iKzEpp5oxr4eZjJaJkT7Ei4w9B8KQSMvmeynfTgtQSvTy2FwGoZyLjkABJTpCbSFo4x1t4A416UGXw",
  "key43": "4jCmQAUHbUfmdpWiwkLXQBFLjEMZJH5PP3RfKGBajrsbaNwhXUqxjcVEJ17YqvXNwRY2Cku8Xx6AH83wELDAmxqE",
  "key44": "4Xd9jBrgbuVqpgQ8HBXLQikpULS5gdtKSqbGHJFxbnrbfSL6CvzY2aFXx5FiaqsnoiHh4S98B13ZZGNkjR1ZQbqu",
  "key45": "5xruT4QZh4SAFLaxtFgqH7byQW7WswD3qbtiw6d5m628mCtHqZkWonJowAg2nUmoBW8F48C1msnAFULkn1ueKZMe"
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
