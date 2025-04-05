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
    "JavjSpeNNaupvUNtZ9wRjqzf6UhmcAvwkuXoEhtSiUNR77vb1M5yKRTbTQaGfZdTVt43sY2JRhoNT7SP9aW6gzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cUDNSraQk8xjz5268FXo6oErTh5LeTFV2fN9TvuyJyhEgYbJcGTHo8Jqggoa7nyoxbZqqDnC8ft4BqucAHjGjm",
  "key1": "5EFaT45T16kXzAVyFiMDY9JfpnxGP7hFdFCz13ZapFfUiM7SGZwRqLJoCLjKRCE46nCxoBbR58nNmwN6JtxGHdfv",
  "key2": "3x1idtmdLHY5GpMhcLsLRgeQ9E6zDkLnQ1tPk9yAZKo7jX8ZFAJbAkZA4beomUNqThVsZnEThi7X6mvke4A8tQdf",
  "key3": "4eoQmh6fmGNTFzgk61uUt7C5XHtSyWbfRhfEnwdLNNT9EPc3zuGumjE6zBaAwBfNbbu1EouPzQPe8KHnYDweK7yg",
  "key4": "2j79EBF9MKnXN8NkvKRfvt9CuQL3VNzRqGY9ZJFaJk6E4ASp6M4H76CTUqM8rbrBRnLYLaaL6tzP434MKf29TH4j",
  "key5": "3wSN8quRPNRu1PH1sMpSrPvKHTJTJ9L9q31WvjkxwsMg7WAC1mghpdA9EGHVThm28rqg4reNUQgjbHimcGc3CjUa",
  "key6": "6422y22rBGSREF2Vpt6eksLBypGxepDvmYxnp4sQ29BrqwmC9BG96hk2pCamETtccQkuwmVLsqHBsXfMJaG5KRhp",
  "key7": "5UWMGw2WHPtdZfrnW4GAkLsUL8oLRTJZNGAEiLxZivPFkWzRkpkUKpmh8hjnsQcgTRuYqsNxkMrYL2FN54kA8NkS",
  "key8": "2XE8Wi131pwihuCepS77QDVyhV47VYxohmZ2gHBVzBkY8KbRgAPohsPCxyQciZxN9HqNFxeyivbPXb9mn8D5WSzJ",
  "key9": "2YizSzeGvU8zZ1ffdLdWFbXbRgKLKbh3SiW7tLyGkL2nF3SgiwghaqEiwcBPDUGMsuhWhEASAU4Rhv2Stkg9yX1f",
  "key10": "4bUDREmdbtZVZALaaTRb1oCZU6QnBVxuRav1wZjPSgvwaorVhGUQzrYWiSZ3SCAkgV4UZx6zsee2qhE4J87v8Jwd",
  "key11": "4FSNPZ9uBsQiAwDRaJegbXJ6riNNxC6TX2Aj8sRNnAf9pbGWjfKcUjxDQtNJXyddiLpsTeNhMhRqjAt9ZS69Cwbo",
  "key12": "UXMGbBeSMPXGfccRaeJoHVMTruz7zoarRJkkhDM7Znjf37NGKuAfuHTybgpFFcQBc2cGXDQXZHs32UK5rXDzrgL",
  "key13": "2PzSM7HZBDF4H95mSVKmkxyaRHXcwSQPBJNeX6VXuU93eXWHwnbj4tV676hvm7yEH4Ys4J92ZCY4DrdQ9do9hRjK",
  "key14": "65UmzFtt9UKEAN4BFaUKBatdLMKSUub9Tatj8ouxyEb8bJhoD4zgpnbxbAJx76Qd6Zw7EKBy2KJ3M8j4ZEiarZ2U",
  "key15": "3uP6TQjUL8RfCvrTg8zaReJQoQUWMXLhr2fyXK7kCaC5S6x6NeCrZDzcjBEwU8SY3XKRBD7Q2dEPTxMdCSdN7Y5R",
  "key16": "4BeeRfQynG9g6jSUTmAy2gTyQH2qqNyKmgUcai5oAGEq43LkN43cTkiUrpnJMvJyVCjcEwCJcMqNsGvtrqRavzBc",
  "key17": "Va41EhQ5nqybRJdCKx6nfMxz9kYfSohpQpMoBPuMmPnKRPgnRfWes6QpvMkVgwcsBWryFCefhQF852dfM69ECNa",
  "key18": "EFvT7h8XGtmYdAi2bbZTE69XNAWFxVW1FAPovFnysorAdXQ9bYN2mfsrRiQimLUX2BPFSZCaqgW4PPpUm6SCijN",
  "key19": "XTCaH1iAWjCLy2wGokx37B7GU5tDnUyPzN4N5Jit9xrUfD37Hoqj4xCcpHoQBtAxqgUcwtqMqkJPM2CCnU1MYN6",
  "key20": "5zga8oTWt2eudTSPzXjSLtnVgn3bZhzuxq2f8Y272nduPYxUiHsZ3oCcAUroDy9n5xNkijybKJ3yUoxhLnsXDx7C",
  "key21": "uCuspN1jHPcsyphecfXhZdSQ8Y92CfuY4kPxLVCNUmaGiYgxJmgye3HYGUeLKzwm33ciWyG3fNrDfBfoKcjpkW3",
  "key22": "2cA4ERELMnwN86vj29otanLyuWPYz3PrnegnVEMTDd8gQtx8xprpy364cKNHAsw75otr64wVWnx6AiMTQfEzrXiU",
  "key23": "VRASMjEj7easGRZEmifUf5xh7UQ7dh87Kh8mgGbSzVrpBUTXygbaL9i4vWEc7jWwUHrakgkfe6D3Pf3V7uwHVvw",
  "key24": "43s5xEi4s7o6FvjwRiypwUUHTA7xU28qqDxdFTQ1z8BXscHVYSpPcRRFuW2EZYw9XDieXXqEiapLW3RJWgncEHDY",
  "key25": "62qxkQcU3LpLrdAM3UhyaGeFP2CQJujEunF2RxmVhKTYNVFAdyU4MmnZJXpL479NuWk5bvE9DjNZQtjzDYdjKUCn",
  "key26": "sEtD7e8bcngkztdbscxGTH6Z317RkMy26TVJqs7n8x2FE41n3a4DBcBjx489UJqqv1KcCGDfzZAUtDGQmQX6Rkg",
  "key27": "2Wpcnhnj8DVJdfvH7NimZiKQ2Jw9MzoR75eB5iiToAqMpMc3kAh89Hx1YenrzhJBABGape3yyyg7SyaCfWrecJB3",
  "key28": "23aZuEE9pkzYx4U2GLRMVVkaLUc1Yw1T8BY5wqDMytU8yrELM317Ch6KdZnbMJYWSEbYn6bE9d6j415uvsjJCHDC",
  "key29": "7jhtd8SV68zTK9R9AN2unEVQwAbWVhdZcxGA3UaQPNrJrRAm9nm7bsv1oFLVbGHginwi8KFo7TPQRHHD6926mrf",
  "key30": "25vkgie4CBY4u36KSvSdCJKZHqDqspBquyd9aEz2cpknqDfU14cC3vMYdvdFEuanVM9Wzyxqp3VqkwNeNsG1J7oV",
  "key31": "4x3d3WDJaLnhtHsvf6ETV6fRaktrgvrzEMemQxXW6XUunHzMEPKMLUB8p4vtywXvrZCiZtpcjuA3Aod3FWMe5oRH",
  "key32": "b6Aiq6ankjqm5RoeXkBNcBRMjARxJYqXdcHvvi6SireaW4ZzMb1Y9egcu1EJddTQoz6BEKPyWtKxvN3i2yNFbs1",
  "key33": "32iJNBvm8joKN678CjKkLq2YKr21MsMXB6EM8uQ4oGtgxX3bwqWG9fvJ3LqBVGgEhQkxgh4BDQ3qwDSMc1qgn9fU",
  "key34": "3JDrzFHrnBmxokXs9MJ6eF4fd9W1ZC9d1LsqzAWbe4DMdnU9CasVG69wqEVxEtzPRXL2ivj1feMq6ihzYpAvXLZh",
  "key35": "5R7TcbrvXuxBz1p3TyLicifHJF3Hg22hNBUojW233WWSN1gJ6EBf959HEeGsjSCQShESUzqsHzcbsPpZzeqHQG4y",
  "key36": "4iBgRQE2YkwGsHzoyPdASS8Pa6zxcai5d3DH5A3YHAoL4RPKDdB2Y7FW1s9vk6TNaaKrAhFKr4TrLeHrww1tv9gi",
  "key37": "4KjRQPiG74ad5F1NGJNygXTtbRmUSkAoNpGKvuuyi4u2x7mRaAExKEet7hX8ombEgWwtyQBiKCQfBJVAgFt21esg",
  "key38": "qG2ZP1Pjv6Z4PBNDt1bWYFuCazS5VAG9rcD7S9XRt8kQX626rPYd6RBngB7XKiCGaC1D7MwbgE8Uwio7hTbcApd",
  "key39": "5WWrBkeLc8SLwbHnC87kLbkfzmF6agLh4sCJdTPAAGYYmbDiCQbo1bdioTuBRXkQuC8s88vXKwNkcEyjN2E4fyhH",
  "key40": "SEkL16rNbJwJz8VJo4gZ8FK3M8EqP938meHcaSEUrPpwz86tnd8ERsxje34MpzJzsZnQgnLQiHw7dFCBfYKU8uP",
  "key41": "5wCw4PhbxJc5t4KwPf2QLWaavLGwrdkG2xa9H9L4sMvo5e9XnnA9fKT9gN26w2jwi7Ty4F89PGiy9ahQrActfxup",
  "key42": "4Y6v2yq8XAkGjsWvnmzW7Ek1b7twnUBo6P9hximGMXY8xY8Y7V4bhwqtis93tsjbtS3DALzJXnC44pTKXz5bCmxc",
  "key43": "3MYxeRdCvDDzKuZrv85pkGmX7ioigWYc6ef9FinVWQnPe4kqoxV2c99fhccj2aQ9G6eQ2D5B81oDHVvio2x5F1vr",
  "key44": "4pEEcVUEgucK4vndieWh4At1v3QBFE4EcRs9uxUoXgimvRg9XBpd5xcacy7wdgCKBrxf7QjWgRY5NWosrF3rMfE5",
  "key45": "5EkHFUFRNrqY3jC8BHKQdCKkYkQEw9bxg3oi58XqNKaMGUCzrBf5Zc6hVa4ggsZcnrB7CASoLkt6BQ1URGCRWnFF",
  "key46": "5rXpEKHSz7xiekftbSwLq2uJMZDz4iNF7mWuCJ1T7hU1Fjc8mdxbhGEWRA6d7GwcWGMmq2szB6PeW7pSzBmSdyYm",
  "key47": "5ouwogbpRE5DJbV9ALLaNCLuJqyqrS9jAZAq3VcPQcVUZxY4fdJfTh7ePAuAxCparXQEzZDpL55e16vC7ba7Xz7w",
  "key48": "5sBmYyfnVKW8n4Vh9YWas4pTTGPHusyJHHCjqXBHHJV8PD2VFzrWtWP3kFYszBevYSri5RiqmdcZPxnmjdWrA5ur"
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
