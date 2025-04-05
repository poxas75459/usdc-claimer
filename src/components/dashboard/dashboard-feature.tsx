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
    "4yCNq1UWArZVe6GrwLhJGD1pNDFz7UCGXw1LbHZgN3Zhybp4DPqXEQSkktDKmzHTzDDxXiWYQksgrupLCbuJKFb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3x2XAuKbDwLwoVr2cp1YebMsVzibrwvmg5UBXf3JS9dSZSM2UsTUogbpPqNLR1SPe4KHLL4tkVZFJ66EVK8VLy",
  "key1": "3LbvuAx96TrFqwGSMJGXsNTKsumnpq3qhXTGhigU2AM6xALnJYY5GYM1Vju98NsWgLQj8MVJEzo16mFu96y599ss",
  "key2": "2SNjETbx8LGYQeyqKoE9Mrj57FUFt3rJTmMUyr8ysrZ51ZRgQYBUdA1M7JgV52Eqo8iKc6bbsnJHWCuRXCQyFKwu",
  "key3": "3jrAjC89tbGrvgUZAf1HeipzdTCHRER7F5Q3pZxkCapfLetYSUo63mtGScDHEfkXxpp7NdzsmAYba4yczwihbEmn",
  "key4": "vWvXxxkWRSfmwa7TaE3TkNqtVgnjCzpWf4wnoA2eqtJLG1BGZoujJcUmGbR5NHynaWBTn1RejhjFDB8cza9p28V",
  "key5": "4EFtMuMYsoF2dct2k62Gd3SW9HdaR3rNiLkCymthydaDxD63M4EnXpQQm8zf1hmnkaUbaQDcFckJdFvhms3vJ22i",
  "key6": "2VS3hD5nk67jMzp4ZET4dERigz6xa1pChXLSfbqo682w5qpJgjKSrEhseTtgeiTdL7i2TqmtWua28b5YstDM25Kb",
  "key7": "4FCVEHYQPmfU78d3BDE19jQvACmNQJ4HmSePEQ6rt7vBWpHFgScEzbxJhZjwz1tA6jSFJuKHkndbtkTfdu1VJyzf",
  "key8": "pFynqjqTn43Zy7sPq2HDcSoPPGFiKYXpiKxgoHVJk2nDsdqRMntgcejVQPqUioHZTPJqAgWeoLXZkHmubPhE7U3",
  "key9": "679FwfXYzj9XntcjwJP9wEC14mQcFuifBnBjJBZp3Pz8WDdm4b8DLWK6kDtTwptQhWFg6q4557pkU9T9xNnCwT8V",
  "key10": "4STGjCJ6Yo7rPTp3RtXVHNuQ9AEziPqSNtvxZi7o4KsQ2zUcdKACbfGQZZjDJR8tGk8z6WBBkWGfkzkekNpoBkCt",
  "key11": "CvCHwZi16hQPCqZUN8Nz2xBobThjG34gB5UX84TvMfQbBehrtYAq84PVSd53z9cCwPUQjLSX3nLXWazUiL3rkQo",
  "key12": "zcKVdugsiUjBQ9KUcrXpXrZzMWrLepXTW7adw22ksYvigcUWhWWwRVHQu44HpgdnqQvdkXVme54PQuSDtTsCBZa",
  "key13": "3k8MXXe7ucjN3Shvx4if1e3RXVcDKC8tH19KVAUVRvTzjGQ151i1ugB4a3f8zTifFK4fYwNQK4gMoTRQMHQTt5Ep",
  "key14": "5p9ruqi2F9u8q2rMwJ6TfcdHAfXMVQSUbFq6iWtVVWGdFhApoTLygWnbSSgJSeACgZ6zqWv1UPWHHoXMi6fTwAgP",
  "key15": "kwg9ThnqLpnAy31CC9KYitSnqrwEVQht2rxHuygcpvdmLmLJuMnPpnJo4SoKoHXhyHd82vaV4RzKWK8RcHzao54",
  "key16": "HAycB1ivCCZLPvf23KFNj1EudMQj432idc8hmZT7KSvmoSEMY7sxXNCJ1oEErL9DiQ8yV2LV2MrTajZ4YvhCwkZ",
  "key17": "21BFHoy13Dv7kih2V1bwLsfNToZ2U5z3YrJyG9HaFZwW73eo2y2VkujWWFqQJrr96Vim3Vr1FzTRjv2xk9neC8VH",
  "key18": "JqMcedVDPcvHkL39VnrW1XnH5akzQvXx3cUNRc2e2Ti7xJC8c7jbbMU1BxjMuBNe6LaGs5G9xhEZtcjsgA1VXMa",
  "key19": "2yTLz4GFSuiujD158TJjLBXhLxvphDBHsnHKTYWp5ZQwcWEtv6sge5n3zFGCaz1MLSG6kM4rYLfpqq7Hy5PLPntD",
  "key20": "51ZbUh7LEeuuiMGXEGYYwmRBT4qhGkG3xkNxDMGvnSJyYygephYHh9X8VoZuvy6rzdByqyVbuKVWjhivULbdBtXG",
  "key21": "53t7fiAvxKnCoEJXqHVeQv3PciPGAkaod9tYLUZnobPEh6qfonupueWJhG391RzWktaxcMdfSCEFERcM4hyjsfjH",
  "key22": "VWbAtR8xz4wZarBRQdQm2yH56fAvhqFpk25FtdLabpesFB8zzsuJueubkyTfr85U7hLcRzPeQj2PntNMECGvd4q",
  "key23": "2que4DHSVnupGeyvXob4tSgJz2WsuYegFMgNS2c6gdhCMuQsLgp7cXrtnQ8JPaPudWkAXtvwZQRRYT5NQz7bVacG",
  "key24": "8ePMCCzgng9hgbtbwRV6PeSCjbooy2AeA3kJzUczzUBy47MNPyS7CCdE6r2pybMpQmszCaRkz5m6RDDBn92UtRV",
  "key25": "5qy6mY4bujNQnpYTNqDrguiT8VFCunSs8YRhGsMFFg8EnkGFBVTFQVhUM5QSRmYoe8K7CBLpYc6xHhmqJT61zqyo",
  "key26": "57k4RPEA8tJkU6kscnMQMBpQqPMZphrAqHwFdgswXDpmXaskBD6CkeAKNFFDSKV51nQB8rAUfyiBbKF6NBuKBtQ4",
  "key27": "5GqKXBQbCJWQwLa9Z2f7q6HgTdw87FM3fWuWcd64husExbctU4Th3TxL6KLVqpBuvsYf5aDKB8noyiJ8j1oynHwq",
  "key28": "5CwHza1tpHZ8tJ2ZzQPJJxmq4Nt4wQEhFWJj2h8RSUwmYgkdjVmkfT8XwJYCR7LfrfyzgJMvENEL4s2yRY5swFqy",
  "key29": "3L5YdqWQfLSr4sy97vYQk19mUe1BC8nag96qGwjtpaiqYrmWg7QjgpZ9hFPD9oCEGESjjpSSrBS65nW8LxzAW1UE",
  "key30": "2qaEZRY9PkSSdAbxd3H4Q9PpfRDFcmJdtqvraxMkCNMQa1UGER66VTrKJ7B5DGbnNo3ucqPogQv86XY21JJWUZMa",
  "key31": "AJpDAZ1B4bpqLQZmzA2ewdwE9vu8KAMH5mmMBKabGn1eanQDTBzX6w4jT8SMAfH3P7PXbPHygZhRKPcjTGJxJF9",
  "key32": "2mo1zjjugC3Jp4JqLHmjQGu83sAQLafCQv3m1NWZBQuQktL6aUs9q5164cMy5uTN99pwihmT7fSw91TvyiEWDczr",
  "key33": "24v9n1HGyntC65G5YmypNwJ9L9F3SdZaCRuUAFwDJQzmWRXjcz61fT8ChyHTVHMRgVx6c8GioiwpkfaDbo64LT5k",
  "key34": "2i1ZcseLHRwSSZvt3Nu632zQq8qSMKdqzvo414qjEJHXvQMQV1H5dx5CmqENwkuGYsAsqDKQGrNGRVAy92DfnueH",
  "key35": "5syooBwvWAjytpFbnPwpHdrzDbwwPNd3jiRybjiGm5kqpMczrkiDQ9gyEUXeoG2g1dEePy4YPFeWZS7AKjZh5Rft",
  "key36": "5DqvbRt9eghW5tiGBbwwEahq6PkfY4mSLs1jHWR9sBVuCUSZGCx4x5NZBS5uRqpz99LWNKgcrsSE28BFYeBJaddj",
  "key37": "5YLWoMjNye8SvRF91TfGXkgsFTFnaatQcf1TEhycASwxvP52SVPxPxfF3qUwSxAJtMAUT4yVKT9AP7QG5aRP3u8n",
  "key38": "34fiozUvGANJ8e6JY5rc889YFvJgQAfme5UNs1WR72BwNxY7nrXn3oepP9h3V5QHguARVYVsDq3b9EstW6NB3Gju",
  "key39": "41HgvanhUkRftbZ8tAfMx7UTVR8Gf8dUG2GNQdBapnwKkMrzEArqXYaLChMJjNPefkWQtYnm8JD95DxjxXNE8yLd"
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
