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
    "3nVC6zrtVrX8Jo46zcai4nWjnD9dr61RBXJpu6UetBPzuQgsREXUmtUwoQZuGsMvgdq4fk4HCCagmeGytTU9vMYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637n64qwpuqFsUfYm1JPAGJMkMZwJJN6UjDU8Q5CnpSRLxkyD8N19tXDWW3UKqbvAu3htXRxxJ92irM76K7NnKnn",
  "key1": "3GQtjdawSW1i7MuofDZqsNWCiXBveLQi44L4vdgJVXmQ88Pb5GNDZTNKH9gnf6JqBhhzbiFHGXxGnvJhsvqZ9Dg5",
  "key2": "4utNVsV5E9SF57TcmvkdAUUPz6P4pG9x9RykxtcgjHyTr3GSNJCUo57nKUZuVoAkWD7Vi8Ft62uNr91UcqMkTpTS",
  "key3": "4Qq355nNFVQhmd5gfkjZnGfkqnU2yqfYqk9JZtXqqEmqKiBxW24J4gpqj4TjNKBnwLrnG8qyKzGsiSH9Yd6C2q4d",
  "key4": "3jGnYU3GSwfKPizmA9XZrxNxD1gJKc7EMaFLNWbZwXwgtYRUUFjyNvp6Np9FsPWuBcKpJfTysChZZ2uapYbGVqk2",
  "key5": "5KB3mF8zozVKUJJG2tHxWBsGg8VvJ5iETkKLqRHFQdRGNmxPSMxKFkpsDrQJzto7DXRnbBTkXRHLMpsu1U1SLqcR",
  "key6": "2CfsYBZYqBq4Fje9wybvA79WWKKceSSVcuv2rEY35mDtdWu4ePxMqmCNC9LiJ1JwzxmQwnuYAWyzsSrLWorfMzxG",
  "key7": "2BzvqLYzL2N9yGLCPK4vDSkXvkp8YWtxNYDwdYYZRruk5hDcTd7AECdjSnU12ATtf1cvzPYMKbJGuhyn8KXD6m86",
  "key8": "2dt6bUsKMunb6kzawYFtxZfxw19JVuFvNPwxVhxhsq22hX9jf1ui22gPCWcr9FD2Ptv71hswwFiRe4FXbHtJztN4",
  "key9": "4bdnURoVckTBgDRQdq2DPGHBy8t5BovR4gtuVapL3FVjUSsczUr79hBdAEQpbRWr2UmSSxGvgeZn3APvBBFyHQCr",
  "key10": "3vz3XjzH9LQsvCCtdtCRkL1Ku4y33bB6nitmad5wVvmwTGWooSQtzS13oo3CRhURh84xT3o8r2wsZtXLMN3SDm1",
  "key11": "2ehE3JGXVkNQ3CfrDQpMcpy7n83tZYPZhbmbX3RFTBaYECeXNm2t26LrtAvNhEgWL7MvoCeSkkHe3SjMt11zDfQZ",
  "key12": "2nfWBEA5WVdz9mcqsv4HPTejNpVr23cP8EWkypGAwYZJSjBcR8XGkJhkbYn3kW72waXf9g4vzMafVCbYRj8yDGqb",
  "key13": "2RSUEfa8B6733nGpwQGiLDUUbXyvqxhEJLVc7xVQH8iHeHhU7TaywtPirwbU5h7G1m1j18N8WonyjYrcmzDhiSa9",
  "key14": "2PVqk4FQxN1QnXYCn7ErnKcUXV4gsGuknH56Vvgdw51t64jJtY3ZjHD41PvaPd2RjkC5Rx9sDAtHzHAL6sBxGVm6",
  "key15": "5ABFXvseq3B17BNFNqCrx8dGX7qPZyMm8L6uxMcrjoHuAPKNYEdh1GaXQ6cczRmRjf1u9jNPLYF5DHsgqvH3mYAi",
  "key16": "2y6u5GdQFbAYmqSJp8ueF5ZD5kJsA4ABrrUXHbtuVzHdz4QCGHQAeRM5211S7xrnfo7CFcCPRZz8bz3U5fYpS25u",
  "key17": "4yyHKx4Y15qdu1EEYxUpx5NfdYggNzKmdhdheWGVPhNZVtABsM9VkTV3o2KhvwdaKhnM6g6fdYmFyoTS8hQxrqCx",
  "key18": "3cXvVxn3dAoz8NUZz4vNFbyVnpUsXHo4vpSxZQh7AEiVpZDPWek2N5SeJHMovhGvro8XFZ4FYxy6kZqdAmDZLLi8",
  "key19": "2HW3rWTguXhqHrSrQzFw81xM9zWLAaSJ3gaaHRivvFBWgC6pypMZmwbvM81ZwemmPhBeEWjK6rMwo8CpS7DEawvm",
  "key20": "kzBUAZd6xyoE954iBNU9smdCKdxv42YfRGvawCoA35YqbbSEXSb6UnXMAGeSwQHTLw1FTxwRrWDYbc3zMPhpEqk",
  "key21": "tfEPyVK4kDt347g3SAEp8sLdwb9PeNTSqumisniicSUKTtZD4foRNUGmXBe3WTSFPf3qvEUsPTarXN8TXpSHq4i",
  "key22": "2bJfr2NMARXBJu8vhcMkrGyWy6tSpLw5vpWRKs8uvXBtwdLNDJXW64He9uA92buRJFQsbQDL4yBXMi4MbLNtWent",
  "key23": "JTVFqSGEF4UikxtE4j5vKUuYKHU7fPadtkoeHjQ1pP98RYdcdskdaM9GG51Kn9qjc2zYVJ6PSscuSaSBRFKncm8",
  "key24": "5v1NDnBQybFUDWauaPVVUMU3KepTq9qki4TL9pXYhavxjDNbMqBTvhz13nrB3XLNTUKzq5aYWkooh3uxxREcBjPq",
  "key25": "3Ckgq4tQ2VAsQNfwsVua5ACsGHMQFUHFHWPoKpjZvfgDAMFNBasJRxJ15EGrS9jsrn6xTGYpst6yeoNJ5nFdVMw1",
  "key26": "CLqL2CQJphrw1fwAdkBjVrt5RFhqzZKFkz8ZaVmGq4UxPxyX5HqtYcQFAuFQPg2U3eKhLHkT1yXbWFhw9P9Uach",
  "key27": "7dmby7dr2WgssB1jSku3bXNZC94AzCENeJKk9nBSung2eEkNfdX4tVX5WV8SDX7tNUezg4nAtqfv6wGNJj55xBM",
  "key28": "3wi4u1mpGYRN198niunbVu6322BFX3H7aGfBZCpyeUpih5MNUMH3rDeqGrU2vrb5aGvzrJ8WoTNn38Cf6iGFmnu3",
  "key29": "4yEtfwrrVbQLNQwyigTCPXwmLQFTc25jeZ67G98qLqF3pYAmdCp3ykvRmr2j5aczWisSAv1vcrmCse3TNMRHMVia",
  "key30": "2LBQSFDbqJa6UD8gfMsXEo826qqQNwtkWVWtoN8xTqCjg7a7tMPgyR7bHWyLi1oNLaKrsQjwcHf2farUvDk7eX4H",
  "key31": "4Mss8wd4kKHh9sihvHX9tbDYdR8djvBM3KCZSaZ59uqZ4FqoCJ4JY5DeYkN951PsYH2o25urkvRsqPvMrt1x7u92",
  "key32": "WtTX7YnzG3f5vjXgnhA2phpHWmU6CrjU7MEiznDeCM7zo5gjAx8kxKkuibdnPgTgYdCQvYQyG3asWitEzLPhSjC",
  "key33": "2p8G5xMj415B6QF2VeMb1hvNjRebomtE4LpRdiAxv14r4TeziTK6tyv6SahYQch75vySGYdtnMJ2Ft6s6q1yapG9",
  "key34": "2Zr1BmNThbDZSfNjQ83YSUHpMG2x7D5wHQcaU11rjbAc2QjpTah71rF9a7imkWdg7BYQi7br67nVPGZYCNyXAsD8",
  "key35": "42X9ZodCrfoYi6ij9CZDQmmif5HoHXxU84ETAEK5UcpPwdVMGRzQE9hC848ZbKC7YrHRfPE45AmsPHbGEa9mrrph",
  "key36": "28Y96nuncFWWV8rwDGuRLkk5hP3P4AzaGrcocb9Xb7keEtCWC1AkxkihoeBEUaKZD4Xi5mPtesAFvTM9ififziPm"
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
