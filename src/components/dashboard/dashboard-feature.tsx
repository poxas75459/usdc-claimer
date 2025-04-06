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
    "5Wx3pW7yGHQSG7iBDW4oXU1Ugs3LjMMxKuJR9siMVD85kuisUPYth46iDEP22MYaKdhSwu8utHLaw5xcRRWdtqQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKxmEQq45TsiN7tN9wbYpfjvguWq332Yc3HSbN29gekyUYHbYRRHtpFVajEUKLWk2FRM3pBnKGgx7yM92PyAQyq",
  "key1": "7ZNzqtGuVafmFsaUS5tCsksbH4tjcBk5jWmUPVdww2r47XtUbeYPfjg7QDdeecuLC6xcm6LncjwshjyeBLF6jUb",
  "key2": "5kPTyvs7X91hvCp931tYi7dbb1aY57vfRUXL64aphfUcUYvsGk8RP51FGQCbQNQWkPSwF76Dkk5CbAKy7HWBzutt",
  "key3": "36ifoF2usN6o2jg1djuMYBnAkh1iuF1bTLryWwLM9VuYSr4aUXh7hSonVeT1ZQZ1EmfcAtNVLmPtJvM3Xxp8B6Up",
  "key4": "44tULCudgZVy3F6fKTaxYbBCHA4wMwt3fr3vZAJmJZYhn6CnmV2FQgXd9uu5X8jUVoXqR4VWgzzBdNVDomF9QC4p",
  "key5": "3vFdnTtZVqGPjL6aSXYxHyEA8AZf5fPMfK3bBDAxwCuvme2hjcmWDHYSd3UbANuKCCFEnX9t35JYfPqjgmcqzVre",
  "key6": "4sZDo7ipZmzk3hbheoyhLWC7Dr8YHd5KGo3hanCMTE8dujQXrqrrXhvpL7V4CjqCjkEWXNbSKNfAJLE9SB1AVD3s",
  "key7": "2BvUcTb1tngpHkyVHVinCFnxRmzQYZcHh4N8zJzLwo98jhnnjeduoxPsVLgsE9dW5CWwyo8AeZ8TT3bJfb6aU59U",
  "key8": "3ppeUWjPEjhT88rKtWPTVaNR7KHTtLRcDJWYLP9eeDDhxNaP8eWLjArj36PoufbQ2rD3b5L1jjiQoHhQvCLkZWFA",
  "key9": "WVNWnFKcpN5RBGVGLtVCs9EQCr3mXHG97kJyP5AReegDHWnY6cXGDGo4g5FyP8x47gGWZJk2kX1MCUaHS4pFC62",
  "key10": "32AXrn7PtNJteudkABrGMxtbZ9y6sYSguFmqu1XYFXgRU27cwdxZP6deiqv2ZYcoKHDL7tDzi3nGzSz7zFscRJW6",
  "key11": "2BuU7BJVVdBAbcxiYi4GTxjQf3dqD1Y96LbMJrEr9g45goVfP3gSBHQnDQ727zasaQo2go9wq5e9bmujky5MLwGm",
  "key12": "41zEU3awNm6kRUgP2aZM3rkS1boyYULoS7Yn5ukHsxc4rhAy8SGF7kMZQg73agqLv7iJeCCbXPoRGe3KWruVzEgi",
  "key13": "4VGNYWnzcCUwDKFKJ1juzYoUFKeXyMroJVPXWGsGVhKAhECZH4CGBfh3MdGxwDkWFkBu2YD24S43PTCMS7dtyJ1N",
  "key14": "64YH7TQrXUX2L7DDQiEwrwahNtiV8WxnqHjdAwcydYrMHCnoUizFdRgNfTK1X59d2gQp9jYngHrHnBFz3LDeKJDC",
  "key15": "66bjGmNnoyyP44a4dc1A3uugDjb7MQpZJajj9iZpSczpXcCgZnj74SSVigghugFif1gCor1uqvvv1YXae5npsWz6",
  "key16": "3DUBqbbJyLjeMidmgMu71aJcdy2zgvnzPpovzbhYgxNCo7EGsbB5fNJjusWEcUMNru7QzDBMF5TAsF3U3vizb5BQ",
  "key17": "5VFPFs9BGuFwTkEzt1uUXagP5BWxfJHEV57a6sP2nq3c945s6b8GxUKdPizmKwPLb8UybdqazRAsLZr4vrWsynAA",
  "key18": "2Ei3LLt3QFsiniznrSKiErrZKVhZnVimZpMYeFHi2dbjwJabzxQvCBNmM1tnwq6pGh8v2cRHurwFsjakT2JoLVZj",
  "key19": "2yfjJ4PehpehLDcnBb4mWndKMRsMYYDqPhiAa7w1egrs1n6vHKZFoeGkWuU6dj1Q5eAFGCpUzVyi9asEEkJgcUip",
  "key20": "fQugmdbJrAF5ATsBikK8LJ2RTJZS4fB1v2JaDY7Y8hJa85etegWnXeVD1ijRzxj8dqTLPJEAvgkXqfCmKqENrLW",
  "key21": "42GnBJDXxeDYwgTExSgAztT7MCsi7wwVsCuGCiwkJ79McwubzvSK6RDn74C1cYo4z1mBpJcF5E25R5KVXptP126t",
  "key22": "DY3joDiP2ZLawWYw7rPDZstzu96CQQqauNZKqMAZNE4srjHy8RjTQ1b62sJzzbW95uEfpkXuAg7Eith2dvGcsK2",
  "key23": "5DfWwKekYmy7QdHwU1XfQxPaVjobQW5NQRvovKcAP2uURpHitFnfriTe6NLxLHtfQiVTCezcKfjVGiz4AvQH4pqy",
  "key24": "ZDbxqaZw5s8f1oVyGFfKTH4vew3HmcPtWCY2SL7fqKYkBUdizcPc9rwNUKHQsyMY17YZEx82R4BFRGyyoS4T4aU",
  "key25": "2two3xAjtkMDUc86qnUoVHq6uVy1e6uhpqmYCEHWALW66DfyiwmcaWiQDTVmgjMUPuWVnr61PqhZgke92iBXj9Qj",
  "key26": "3qUHSVephXrNV3CKZGVLsyrxUoq1HUVn9YLNtRC2GWTzSjChw9eSZ5YzDDv2VNNEdgyBZpeXQqZgWNKZuTXjsh2Z",
  "key27": "3SYsUXuRUid5UV5w8iB3P4qDbe7tAYQtszDgP3Tt3MNi78Lnfoknqj3WQ2KEYED1ayfA3cCm2pkrjVkfvhjHViMa",
  "key28": "5YZZCg8P4Vc8E7pomJbbWJ41CoMgUVQKPTKSk81JDMTtZCmQp6NqCdWqRTSGa8FGdqbDLVxdn2CcH9qVx9yNmtfE",
  "key29": "4B544E6jE9jKqciLhkBKXR3a5vpgmobhgeeAwZFZWtHHr9SxarGPEu9hQpiSVL1FuC9MRPWD4bRMEPJYigtsy5q5",
  "key30": "3mnKU2cZ1bmS9ozMuWhKbDJwSJMVFD5Fxe1fvVgrzrbF65davdjHLki534KHMXH6scSGgYgkn3eHdgGfgLtvKAyr",
  "key31": "58iEzmN6vECSNLeRYMtfNnUzfT9neH2vs3c4qu6yEzNAqgwkCrrVFtbwSEqfyKKtXWL8SekCYZafDADLvazMMYfn",
  "key32": "3otb9in6NDcHe1HnKwb9SVBp2AHHo9TnqzVxV8eD1CdVE8hsz7KhhgzTqQvGTpbzWaem9xgdnRV1EQKr4juYjoFj",
  "key33": "496Rp3c9EZ1TTcABzTEVbJtq4VQt7Z3fGuXM5X7nCmkeHGWeuE96iUVviBgeRY4J2CeZNdUnPipq2ebR2Rod9dpb",
  "key34": "2SGQkstBNDLDVsYxH7MXNTZpVaeTQybgYPkAeUxJhYMUmSmPwYtMrvPhVw9acPf3kBbNWQD15ARvKTAUoxTZNXua",
  "key35": "2zmGw512sd6oJv7gtEHCcMwtF7LKf9JAizSdwEMTgsysCQTFzhnXYEAKo9qKg5LpQZP6j9MXiVzfWN4VshxPW2ES",
  "key36": "2uKNRmarcCvsJMJZFuy4KEZ6Ms9ACr9PBC2oCNrP6EbAVHYSbEjaXAbyhnNWJ946NnKnKb88oc7F7eneHvmkpkdX",
  "key37": "2JKxjEySE6TjqBTdvt913iYSGV2L4brzVSm9LLxKc45mMpiWkHF2ZBYVCNAbLehjSrYNUbzXtFhzmHRi8W6DSwwF",
  "key38": "3zBXMT2Gz9ibav35gYqFERiV4QKnyCpxjBaBM2yhEoVFYgtg4xuL87Z5mwFEzZ7VCm5sToh8ux7uk1RBD1KPgrYQ",
  "key39": "3aEoz3HHpDm3zxwSx8uSv7NfSqyTLt56bfNTtFkfm3ATyhyqdbj9qgqLpJZmsduaWVyCCzBzQQXjiJ6YmurTGKt6",
  "key40": "44BWRimy1ZQtqnxCGTKk6EV6fKPVM8sqFFeS98uzsTmD8fqLcStqsyzHBXhceSGxWdDuxEaz7AoMoekvbS8gShj9",
  "key41": "iyhXVGBxU5NYAe4kSyt2CiwQoTjvcQUPJeq1fAF6i9Qf9D7ooZYLy57eqFcT27kQpRr7h8QXcNL7MBXyQvHke3V"
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
