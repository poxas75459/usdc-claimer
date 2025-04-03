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
    "67RVABmXhu6KkVAatATDbwewEpcCuKpL8pYwKGLKjeCGHKjnp1THuPCwiFmUKEAWS8k2BaLfsYpLdLCNmnzDxWfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XjrgE5Ye7th9iJqYdq4YoVDbgzsAGLMHWkuLZJ13LjnhsHBYM2hp81R396h7XSrxVQ9rtqkkXsbj64JjMA1xsyz",
  "key1": "65VCX43A3Y8zdNzixP8NZZXtfAFmUSQRdPnu3nGDsGQvAp758PdpYp4KeGKQWDButZzAWKkvdbV32XdoAGBmYzdr",
  "key2": "65hwWESWfoEkw16mHFosNYe83exrWx6cdR7xo6PXzWBJKXxaitJ2JRebbMeYYga17bvdnSNR5Qk9gtzSgqz5NH7L",
  "key3": "MEvrfrScb6AZ4ZsqcB7FbuZGnq515qcrE6ptkbUFFqX58NVyYkePNp3VK9EmFS6d7jn61WJeoD7JZhXHXzziCZv",
  "key4": "2cmjNYPEtL7Lfy5go1nqSSE8mbsGNAgmdNXvMNDpMYkGe5YWZBUFeKPvS3Qp9HyK1wQv7sdY8bkzyvCRrc17JXkZ",
  "key5": "5yjXUdbGKEX9aEYB1P8EDcwnwevwDaYfahiYVWpg8NLZEyX4gmhfR7gjL4H7ckYXqSiSFGBLWyVF6PzKxBbhKQ7w",
  "key6": "5rQU8wS2Zfvb2UbmtUYNKtHgXq7mPen41bMoFPyAFteWbmD1HwdembBpT5SdLQSy2KFEn3n44krqSw6nr7cwpBug",
  "key7": "4UnMNq43aQjkUXBeRjDZfQsU1pwx5pYrMTAYVwtMRxpuRAon3zCbSYtUYdzVdzYx9Tkfr5KivvScd8FJTEDm7tnX",
  "key8": "3YAmPComMZv8pmjRpkYyxmHiXpNZbVvD6zw1pXGFQM6wMEhG1ZG1o21ZzYjUgAn557fLr68dUVAx23owud62xgxF",
  "key9": "52fAZ58PNy7u7J9iPW5zFgw8e3BNUtvWp5NyjtY8Dit7aSjoepiNQHGutGeFhKruWXTkGny6ik6g3WdqDx7QfLxm",
  "key10": "5d95FbkjDq9oxEBaMS2txurPGk6hmU7ykHZwiN5Lbauk36nnZe8XXKps9WbQbSyExUzbv94KbJfwGowgCftCV1Bf",
  "key11": "5rh1FAvZSfLAcitkToPm5L2BN8xc8ZS2VH5R4zawg6ZC8dD7tk1dhU95RokRQMVc5LtEJF6nwSpiwTyJU5Strz1k",
  "key12": "5bdaFEQZ1iCtc5cFktQGRNLbWYYaLfoydNKhQPXmKPYeFPVRkPk4DZxEkaqZ9XF4HY65vKEMmNXtxX4PBDJ3ei3R",
  "key13": "4NCatpcNkJN9XuzJJKB5JnodZS4eZcgwWSGJtssamahPGJ8HpkTtrRg8n6dHMuiEXZsBxnuMeCAdxfcJcYzQgYmv",
  "key14": "4jzi9Lq3SMFBmihabwpnNPLjxQwcpohAbQE1R739Gn2sF9VhEF2bVKUGDJtGgL1WpXud22W2rhs5Chusm1itzyxC",
  "key15": "5m8CZcBMgPaerEotmt7ZbzTJovY5HZqZxaN67MmtwfKE3RqTSaR9yJLQZeKoXKAwG1nhWA8tuzUq3GhprBxSkPWw",
  "key16": "3UD2FxhYK3Ea7SXZuTWBPxk7khMoL198Kpk2j3rLqi2nWw6EiWduyvySTKcUJ1sFfLRW4CRiK5WUB37kkBsrQYGf",
  "key17": "fnk6X6QBB34fqhy7pCpF6YjkPWiCxV6iacTQX7mrPq8dDD2nWiXKYjpTFoHfhsXE4o6uhdB6VGMZEEMMoGXx5FE",
  "key18": "4nZWAKxyfJLKt9oP7JhD1QupsZYxv74NTFD9ySykSoxiBpAY4M4o2zSbfwiUUBViMAsGpPiESpXsTD4Vb3y7TWGx",
  "key19": "2RSUqxKjwbD7GfLT1N2o2eNbriEP4WPArY3tpmnp6DgYWjPHo8JT6utUkt314NSNUh2UnvpW5MJkmAhucQE1xJCE",
  "key20": "3uYeWXY24ZYXDJGDLcgFuoNM6eY2U2vfK7DrNQHpYn24H1scj4VAbjEWKREUQ6n9NHDAiitEu4Ch43CFrpVgf6Rr",
  "key21": "5rk5NfijBAXGmCEQVZNj2tfXcydqv2EsHqwpMN3p7PL8vipkDsLzRTCQpfpy4x64WjfHbtnpphQiQQbgUQDm695t",
  "key22": "54ZrY4ttB3yPCxQwxJWJEceiKJHM23hXrYrn8Jb8XN6yMg1xrfDKvSye1oxwPknoYUkr7jNzv84RzYX5pcsdx4UR",
  "key23": "5QLvqHzN5wC6v5Q3NYoJNsCGcoSbMG8LPwkL1d32Yhv5GxyZAgxEREnJGBTFW2nFU1ZVAupfZoN69rn7Po5BcBnz",
  "key24": "583paU9WcqSRG3nWszq9uoDuTjV55iy1Hr6SBSyEdUQSvTPxcngXocHcXUTxkUDLCsycZmpKsRfZAZeQPiUr8hjA",
  "key25": "4sRLfoE5nm2gN1stiLX9XiYJS2P2ComcZ1iTMruooyGQdPGsMwBrgTqts61ijAxfqcATvJ8RHE2fKmKawiqhPkzE",
  "key26": "49g4QvqQsjq2eYN6CbufksDtAVXjaxwWFSNA4ZkhnmyZmtHZGYscnhbmFvuMnrWx4dSpCXGLERAXsx5nZjK9RHg6",
  "key27": "C7dzBcXfUh6mhb7DZUKUagDUg3L4cTWHPCrNLvUMvTZTnXDNhhcbgf1iXpDd5P8NW9LrJSpa9o2m3JPch8hivxL",
  "key28": "5hFGKaYjHsdoRYuowKdoXqiWjMZ36or5s19j3vDbyT29Mi4B24n4KfXtiqoxXEpR9Dd6cYfUZADsTqdUjvgTz8h8",
  "key29": "HDn81Urn6rffKjUtRudhywmYhpoyJY3Bhk4g5UcHPDNrBa99hexzrhL4FizbP7iJzBA67v5B7yLSLrcmUJRq25i",
  "key30": "4HLyragcxBZnugvpbyuUuWZtUPxEhAPTKfsTYqGr3uthXzgKuckiQKMpKpDndPtFXdP7ELrTZtfbmeBnJfAvxfvk",
  "key31": "4J9Q2jsoxPkY5YsDsBvK1HjtQsqUbefUHUm8wG7D377ZQMuFKfybaWginNPFzM8izWXpZqMYoU6wk4RLMgGiHyfw",
  "key32": "4FKUQVN2mMvvvvjiZ22omzbDimd9pjEacGSbakR9vA6LpcbzvmRCoppBrpTE5Zt8WqRZVjcP9N4KW8ZtHrmFNFNW",
  "key33": "62K1Yz3NSqo559HW4Y6c5KRkLGPyD9uu5bg6L8h4y6yZaLiLA8SJULnDEz3pbDeBQjE9R29MHdfG6mDhiKm87qC6",
  "key34": "4gLQYjUpBo39LePJSbGn3ppNVgKuDvjka3XQAjjj6k934Upj6J4hbmdY6UNwiTnEWjhZxK7jE7g331dXNWtfQnUb",
  "key35": "3F2Gzj1MjSTtRTcGEgQ1JMS7WvNzmY8i6YFdgyTmVhYcWdLMBNWWDKeqNMo5Na1TA61VQd8FcpicDrg9SoVafbBA",
  "key36": "3A1KHbZpaSuVBYrvtfLxaWjwqqNUnFFtAFjCg9YZ9RKFfPKq8p2vSHmiMDskB3Zc4g9JPkQNzcZtyJ6pbQjnCShC",
  "key37": "514vrx5pb6fMyB31aUzrHd1gNSAqKLh1BpheCKcmQoKqK2YgRiCqsRpSSoa6VL7pb7W8nkpkv1MhWiWAEkdGojko",
  "key38": "5g17B2vqCAyjzE2xnUAH5Eog6PSEXsHWX3KjUppn4yMhEWRrbenxNriDe7J1HPGGdTHzz88Wwymwq5CLChd7ps4M",
  "key39": "1yds2SMTnNYV7XRYbAjaaZbtVK2oSZm38r4NKqvyN86mSYbq2ZGGH2FskWNureC9CKH6mBASme25YiDg1feHJQr",
  "key40": "5p9wBQSaEeaCXse5M7nvXP8Sweszj9dcQW99SXg88FeVVLhRuCCXDrWLatntP2y8a3Ljbt6bZGEe9thUXB9nWfXt",
  "key41": "29vrQugeGDVvRJ4vzjQuZWh3AYEffMvsLtE5UzrcipjzzTBkksuppmPeQauGMKdzLjtAS8odVFDDcqv7AzX5YQFJ",
  "key42": "2qU7JrhQfhYrHBf3tmqmBDRbdrxQmCs8u8JZViR2S9XcKARMvYDikt9vaDggf98xXo8A3La2FYxE8ECYAdnHZEhC",
  "key43": "3K2XfXFsAYEtbeA1WLMv1Bbgsuf4GtxdboadW5w1QW6wjKNPHuC3d5E9urZ2CKTPvKSdv6uJvh8Lgz3qR6UZnzef",
  "key44": "sJF7EBdSfiAhMBsrY2B6pEdKurTb8er1nQ6N8xdKw291g8tNxNyzGKYcMBzwVVvJWChxaiwUy6ae5CZ8jobYbxk",
  "key45": "Ud8pNUbWkFJbvPLw4QhCbeyD1pJNB239ZPy9rDhkd6YgY6gxRrqnwirJuxheQownwQpDp4HGnStCPepyxHGwxCu",
  "key46": "2GsK8zEGZNvXyDDCnDy4L4pWcY9M2Hk1B3cAeBfc6T6L1AsaK8TTq4R9GVpdErkaphXEPdoroaPiDiHuoHwmaNia",
  "key47": "VTsaNXohWtNkEQLJHFXn5tLHgSqjtVHSkUHhdBHKuhGZCWaeF4Li7JdMJYHWg1KJnssDoP9SfBkeXTJgA9qFH6y"
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
