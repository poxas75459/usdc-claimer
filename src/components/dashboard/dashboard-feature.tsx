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
    "1SPmKLirk3GxVdY7ZMJaxaX8KYrqBjVo1Dn3ryo3U3Xb7RKbbsUSz7ccFGdaYUhXJFK4NKwW72UBn5wtQpDRPd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bsj9dnXWeG4EyHnsgrk24dWjAhuNw2dQzxfvFDQMzMRaeQvsFziw25UzeK3WJM5dziXKH6nSgFg618adSnftdfM",
  "key1": "61ojyjuee2AHHUdVwT5dFdf5KoqNig35XaBLkWq849ep6sj3JJPfC6LqfY8bydzWYCpNf5NmvNgDSHKG4Y4Dbae",
  "key2": "3hbpaysyipKgiukZNw5MoxhecQxMm3EHPS5Qn1hRHBLbgQ16nTXgUVGbqTNrimXp9VNd2YZhyJntm8tR9fUmnPXP",
  "key3": "28KZaSbdgcPJK7ZVs9KURPRDYB9x7QxYvY7tVRTSABnaijrkG8TRdFfxX3cCrvBKTo6AebFvRwr8rqt3Ssadsumx",
  "key4": "21MzCMKWgfWLDCw5FrsZSkxDkypMqsXNBDqtA6iNEAADziL8tNKrUivNUDBFNkrP2F7Udp9BiG2nfcXVEaH6RFoF",
  "key5": "4tkBx7eobDdmEcyk2s67JVN6iRVY9ZrKE2MmN5K3d3epLkuaCVexmGsDSij7Sv4TRrSeRPpBWHQMeA7kVsaR3Fc2",
  "key6": "27QWS81anG3qaUxReJdoQgYVjB3kB3BfPdtxc4XVgXvuDLhqJMHUcFNEoTPKcP277uSnX5iSA3yc7shqNfy1KrWU",
  "key7": "2uVh2zNhUH5UH6K7wbxKQMRnkyLQQwEvMKx1PK54ZXGsb1zwcMLphq4XW4YnXyweC9dnWRF9eMLa2UoQ12giDZ9a",
  "key8": "zSJSdkVPds7ZZcTuSrdw5r25ShDUMJPbFZWdxSDG8RAk8Jdkp6TFBzcia4bJmxin86PcKcfPGwR2wWQbQV4qBdx",
  "key9": "3dDLNGrKCDJQcd6todFxyXJenTYBLy9sj6PcN6NMg2SeEAPgJQ5nxA4X9WBEGhAchhoiqjMdhpXM2tk1pMtGDun8",
  "key10": "5nZ613JuH1eoYaSyaAvJbRys1tvFbTWEkjbUcfMT4L34YMsgoC7AQYq6T5SDTzMbubLGuXKk59XZkELHKxxxxgaq",
  "key11": "4qkDDMguDoaUpJCMsaGtcWsgfVmEvXKDkjv9kj8YdHhA9WjfeqnfhSoPQcDwsq8atPpJYeiajTtBcG9oN5KBL4hs",
  "key12": "kNiNaGavB7oLcAS3CyyLeJ6suxAwZXcHxVzzYF59ZzwatnCqmKtzHm8WvcH3h8t4yqZk7VaHCEjpJcxtKPfVrbj",
  "key13": "54QkYLjn7dDsosgtryz6cfcLir4GsXUmuvLZDJiCVGTx5G6UVVPFkuMkEV85Jy7dsZNs6Yfapzk8aZDpSQ1nfHzF",
  "key14": "41mQUqtJKqBXeE5jqXTUmCXmJ9TLraFD9wUeHd4s1JE5dFiRb6zJsjUGxLVXBVTsdE5edorCguaFXrokNYMNPfAq",
  "key15": "G6dG9SFcym7oc1TmUyJ9jbm5x8P2x4HNNPjxyquWJVHzv954GVxucG2rHQrPjc7adKkimSnb7yCeWFpBmKEdyyC",
  "key16": "DveVryy41svZ2n6E8AbLpXLGk9cA57AvzJs5F6ecbsdH1RbykU2obcz2BTJ3xw6JWvZ4wrzu8nrxfXGWDoKzKtP",
  "key17": "3NkTdtDMxkJNC4yLejK9WWUp9ynSNBYJfbuJ2i91GVmMQLmDhnoF13NWWY4V38fCnnTajTtRyPBt2uGFjzP5GX2R",
  "key18": "4y4DeXWpP8kQhSgnWf8dyB7Eg3CYyeFAHjhj6D4KR58r8QnrKugAZN1V488KR6Jq6di1RqqvS1bNkRRTcdhizAsz",
  "key19": "5YPY4YUNwHMRLfQPnh8az3xfRJWMdnTFnLi4UjuN2fXnNoHj7TN8oumLu87pTRob7PXwVbY2F5wHAFiepD7wjzey",
  "key20": "5BRj2AhsWReJhBpSPg4Q9LTjoTHtCWgsN5mPgqSGq4gGrbZ1sABxrATBKG41K7wa15bt4HCinCHsWCNUu1S6TzyH",
  "key21": "4XkgqP21ody9KJPdQZMRGXU59SYkH8PAKk8VhH2UHniAW6j5FbbT3iBWyhbHYLtUWCVuvC2d4mttwTd5HLunUU3b",
  "key22": "3MtozYuM3VkfBkUmHCSjSEpmHuFDEThoZ6GZgGbLrgSASj6gAXnSCRTbCnGerciXDZXu9fSJGJ9PbjaJagbf5wfu",
  "key23": "3Lg3zE3HsEwyDtyrSuMbU1zKrrVuNBwYRSXqf3y4m97d8FNPLKZapqb5z9JecDq3qtr4L4yywSNDgi6pW2KPSxKz",
  "key24": "5veBQk67GHV6BLSWKDWqwkDzpQuq4anvC724p4UjEg57aTzLapB1V4vUFh3gSjnUyKFQuREeZ9tg3ykaDgiiYZCG",
  "key25": "F4s3dmtaiP3uBivUDAkyPaBQ6HAvXHJoVsrHoaggsWeve7BCL2KsG2DuJZr5Ly8p5yfLJzbHbXew47oN1UHJ1Jt",
  "key26": "3myyCn9CUGA77mLW2k8Pgwf2DQQ9gh4Yj7xEbE19mW682MwujnYpjqXVg3ZgWtgKdE1XmMzCa2sw2W7gP35AAExx",
  "key27": "4hCvURoUuyhyUPGZhRCkcG2FCDh6a236169KVrRJSayW3preExQEcAjgMMDMKxyaF9g4uRNiMcUqvUrZpgT7kCmb",
  "key28": "5KqcCW2FrRWMvVNmuti5RxhSMbbqLxz7FahwYgLqphi1NoxnS44KMAvW8fzoHo2Dg9p8A4PhfSYLLFTx62ynDCW8"
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
