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
    "439BvgTriBDyBzNFMeYaNiTo5hinamihZZkbSqzPmviRqoKvbJrzbyb7LzZcmU9SoXgm2UxyR1jbZoaXvUyZCdkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reBKFNcvBXi6jjXCeSXDm412GEs2iB42nUH752EkfVtDAaBhD46nf5dhWk7mfMDjX3Xqz8mxqSHxoBdEgJYhbji",
  "key1": "4MCZUSPuZQSfvPGdEH9fnrd5hsmtwTdq2wr6pcCHsbKijvJCqFu6KDs5vVMqjtrX6Y2GRbhaE5fNaWiULfM7GRtg",
  "key2": "5CT9oNBG63wstjyf1d8UukiyCadMhnGtQB5n1Sv4PwPaCNVE9eLRbzAgcvLSAsjvfyPBLow2CK2sNMbYMMRxGpqL",
  "key3": "3QwwBCsSkq1wy794mtjCEoxkYWoJb1ZP5FxRVLhjwq4Cy6tk7AD6hFfrv1F4uRL4ZY2eyez3bi7GkH4voGzDqwRB",
  "key4": "Swx9fGutWVf7RxzvXgRuPsMLshrpELyoLRtz3fNobVhCndJAVgk5ZSDJLcCS8U66ruEVNvQMQswRGEAVH4P2Cte",
  "key5": "2LRwYPTpMd7hGFmwniVLhEEeqNREw9CYgaHxxgnuqqzC3hy43iANjm6oQJFv3y2nXEiUoDRP86aukRXUztb2XNwp",
  "key6": "5aALZMp9GKvxBhrYkqLGq2jYrLpGBMVcg8gEf8o6QzTpMi9nuxXgNXgaZH5LvfCEHd9Lc6VzYnFUNd3MWe7AG1oV",
  "key7": "2Y6qi5P2SXrYg6HE7vQhBwpVPffowZ7uCK9gzhmu9VCEMMuizwp5ySB4dYqSur2qeyKHtFWauxjN9x9NQ9bgyMX3",
  "key8": "5r4WpTLkb3Bfn4abP4aeScFW9t9r6VJT2j9acJzea8q1hXYm7HFS6o8CWKXrKH1nuBHK2pHCKXgU5Q8yZAu7MLue",
  "key9": "35zKCJBWqY1VvjYWx1o1Jt6B48iEKijd93G6T9pBVMELPURq1UhMazcg7ZhunvqyH8D6hokL6GXVBcGL13nkwpf3",
  "key10": "5n7jMXnWaeuoy45taBzbRcEn7z9UA5b4BVr71fT6c87GjPwzngHKr1Br5QAQcYPt3LiS7j89nTjSnCNmPMjrRjJr",
  "key11": "eqytAiaXE1TfKHKVTPBRo3wyHsFzUTA6ghdo9ZQnru4gk4S8cp2c2m4xDYBuxFk3yuBRqN36gLJF7vMpoJGJn2k",
  "key12": "5dXkMfuYR5VBPEPBfpe96opysyGzRm7EzhR9HwbBzvnuC1Var2hMTxqFosRETD5G8u7jnGvvbwMtxarZmTuTHGSy",
  "key13": "a8WJWtzjYYvh1oVZBQZtDgbXXzyeKen73tiPmbN72duDcWGL11T4pJP64HFRVRtQt4hJSLJV5Na6SvhvbwSi9UE",
  "key14": "21srY87XHDJqqQeX3fWRhhLeohsCn4rsLYQQXyjB5o1N6dZYMa6PdN3KRrhH4WhRWuV1xaaYcz7ZdZKZafZyhJZW",
  "key15": "4r7U1cRMTuNXL4UXLBUsyLGkQiXyMLUucNJq5bicM7J8CTt1PEcfAFiGo2CpayUWaDjKE1inbGXgmymBNKix3t4A",
  "key16": "4mqB6fsMTrcDq2FgRzzMikeh7vqiPXZDS5H9QjtqRGH2kkPyzGvo9H6wuCijHpoQ1E7toS4HmsZ44dusB4CFB7vJ",
  "key17": "5PQRmzKdJAeTbS3rL4uvW6hL6DVkMPB7XW8bgjNXCyhhqk4mwMznDviZgFCE3NQvEZwkFWE9KEqNMuWECSkNFNTc",
  "key18": "VvPhCgzkSVRXFBbK9owjqDYLJEQsTwmzuyx5xySgH8BfEgtCwruy1kWgwL15bAVnMvwv9rxAwaj5jmPV8giHRsw",
  "key19": "36aZKnLhDVVVqaEpX9gzHULLXogcFT5JyoW1jMKWk92STqVqSiqAV3orbQ1nwyPgwo1WXhPLBEVFRWUUXgFp93cs",
  "key20": "oKHhGbZ6wtQsFDc5UdH7CDpFbG4cd1XuWn9YsmKvaVscYPi9qLP9XWUmpXmsRG7P5Sp7o7q8KreX8Fa2CTaJ3Gu",
  "key21": "48yErGF9s5iWXu1Qsj2hJhhWrAASEp3rcQ4G2w4QCH8PnryrzGJXzr9TEK2pGNgDZ32DXqkPxDAbVbGK7QZh7wQS",
  "key22": "63kWPhc1wZvX42BunZaNhcWepSk5NcCrWh4JFJaa7E8LE5sQQDDcSZrTKiabuvezGYt5gYSaMVCk6SeSRUt5JBV1",
  "key23": "3PQyRZcjZwc9STQtoMeDskbKdMk65TCTGotbCbpScokuZBR1ApYrE9zBenj9wP4ctnYpexRmCpeLtG9Gj2M6eTpD",
  "key24": "f8TsrmkQKGQSuu3KbAdppnWFQ9je87ZDPvoqnGDbYu7ZhN1bWiUPFyQawmkpVkg6oESN5svAq9vo2vhNzh93Hwz",
  "key25": "5CYXXT7jDnK1qazZatZgnxBZBwsHy72rKLgNRovZjRcZMgfxMWP9JhNrACHTmG3mYWR2b3z6JcMUaJhRmjXReVKK",
  "key26": "2MdayHyek2NvX21k63UUi4zbvLAJZziBVu2kPZDQ7XnfDBrf9EEq6JxAJaHiK9UAur9dohYhK5utTePK2VY9Cjyv",
  "key27": "4NBqnRq7cdF9LDvCLyh6rGWFPT4SFTqeb7zwwKKT4US7wkbnSPBNooSAwRLSopTsBSCUV15udHuG9wjuKVWRXbdW",
  "key28": "n3JKnvKKiLPYznE2YaW81SWoqZjqaQJJK26Ac6nXyebEKQivmWJN97E8dktsaozFhMHdvmh82433TQBeoJKbmn4",
  "key29": "cxe3GZYnMQbmrckspr3Nj6yXHT7a8pzH4ENLaXpUinVamnk6NHWRwugi1XQbDcpbv9p2jGRvcZZ4n1uTmHxZ5Ke",
  "key30": "3zc3Wto47eLFg3yd4jfKXcAGVQELxiiPnzcUiAH66s7aw5yyJjc9zsiHudELLYSyAi6WADCjDQMNFPtQenkqmC8u",
  "key31": "36AjFSBF6P6WQjfhTLTzY3d7cAMgMGduUWJMGhpZvUCXuxH1SoVAbaXt9fSrmhsb1GLWMzQyHric7uVQ6nkGCW8T",
  "key32": "38U4hgN1eYAkuEdpNRzsgd4SE6viCv6xzDyiudbrVCaSG5uahGfiw3YkbVuZSe6w3cSehVwBGq18sEEiZndoSHzu",
  "key33": "5dJHkaqkQBCrbpf6k1aGqN8unqH1zee5h2XZCgXDbBd8HL5rnF1haHME7rjiSFj5XVi13CM3aWsR2TdpHDCGh7RY",
  "key34": "54waFSJ4nvdzUNdrGtJ92Ma3rkcagiyqqbthRX8auMUx9t4TgciVvz6A2m5Rmy9Q7DaDgdwbFNUmbYdSLL5NUpkq",
  "key35": "5AVzRB8ekvWFvQgn222bgin8xErWMNKxop8Xd7Z91znCtzQX39UqK9qJ4jZ135NzsvxHVGJkaZrnF6uT7rYpYfVk",
  "key36": "2r7WnccjdUXsxuAe2epRdiUHCZf6mHNsj83z5LjEHLFwsJwFxhGciycBojCvbhkxqkkpdksZR2RayRa31uGVGhCF",
  "key37": "3W1NkbN4kjUixFtSDhuYpm8CypxgW9DU1ahj2JY59xqfkcJHbc3naMxaFC41wXuafb2GZYFy5h2UQF9HKPfk7kGA",
  "key38": "4j83dvrUwmAQEuU5PuAGcqBU7geZf2r79j5KoM7peYubuvsLKGDKuxVJAw1UhNMVanFRnSpc87Na91hRqKqPock5",
  "key39": "4ZpakQSZA5z5stpJum9R3ToieH89B2Mc1uhVgfDHXKxRmAxfz9biT56b72WPEU3RkGqhosVUrBG4DqtyM89JbFLD",
  "key40": "5AjzP6D2DsKZC7WZBdLmGvCFZAxC1FLny5orSQDcSCLwW6HYEUgtBS76CF1CgLBStyZyUXTvWuoQwwxMCW17bNiN",
  "key41": "3Ymv7AosWQ9ZTvHLaJjkT6bRUPiZ5ud9fPWLJnyDNbKbcPnEWgRqUGCNdQVuaNEPsLZNeTM69Qvf7GD98KFgZtGe",
  "key42": "GvXQUwKjLkK5EWUiZ95DCv43qPDSgpZB2FZidwXCa7kfJuLkzazRkrDrcJ8jw7BeawRUXSoa3d65N4FGuP2dLiV",
  "key43": "4dLTsmErWaajo1ap27fwhebihWAPuhiigjpE9iWydF49pB2tvtARM17ireQsLznRLLzVVjYhZee6Gd4v6bN1ZeVa",
  "key44": "5ME9quFbFUkEQ8NbkrMZ3xY43EaKyeVFA7MqDLMVsKpfPXw5UZjbfapVJPcKvysHcFAJcKYG7t2JyiQe38wmEMiB",
  "key45": "hmoNNFmCDUA9scfYsThiG8bB6mDH1jQ8nVFkyPsVmjTRB71Q1Zhuvq4NXbLAad7L8B1m2k7UamiAAgyetapz9hc"
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
