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
    "3ZTrZgXiRdNzkuZknmq5fNW2SLWnHv2ho7EJ1XNU4EimnMRmeHe6D85k51bw5KqZuLYFp4CnRxdWWfPvWNfakedL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJfFtn2iWdLsDhPNifKdNU6SN2K4EAdDitcpggZuTwQEEweqa5AaDTnwfY22UZezJz7GaQ1hUmnGewHa4QPKrUX",
  "key1": "5Pzac4TkCcP9QXHQ3iWCMKti1SLQtddEv8rp1sR9WbBAzZqerXPNeD3CPq6uj4qBjJXkHJzQLQ9vMjLA77rR9eVJ",
  "key2": "5KS5TCrrNEmsnXm5eXd22NztmS3jpW8SYUzKpHFD8ogHiW5ftaWYcRMsHtLArfyFuaNC4WvBs7ettg44XZQ9QQqy",
  "key3": "9bm2kqA5FkF4AsyPrpjb95nZBtMnTsEYcdNmwbYLRr4SiGm6fkLS6Xc3iycjYKic5EvND9XXnL3D2iKvaF1ECfG",
  "key4": "5RUGH9PCYCMJaRdXrfLEJQQXnHjpJ4b7T7rLDfKPvnQBRqMgdsCQq15dtkTpN97oUbqaPp9o3uEyPJ4GigohfQ25",
  "key5": "3DqxGmJAcNpt7mc3xCRQMfchE8BAPhShUfbQMYuET4EPijjSc6tbfZV18mxjJdpNe1BGo3GPGTksfmYZ1EewC7AR",
  "key6": "5QVvm3Guz4Ub2JhoiGkvLPseu3Rk4cp3Wq3QiptRybMmjR9kxMjgKPJbEs9jZ93RawndbShfWWaZ8mYbcfLCgd8y",
  "key7": "5Ew2YnKHeGiagR4XGzroi7XYQVj5Uny33kp36DsBiecGCQzm8KpNnn49qqiCeFjgp3txmkuPdCGmc39PgTjadyN7",
  "key8": "3mqms3SfD9o1A5n3GSmgcZwFxFX8vgULww31SnNq77MMBtxuVngrqdU9iLQNXMASsV1MDsB6LeEotKmXyfc1sW3s",
  "key9": "5J8fscfSZU3X8WVE3Wuywv7jDX3JjNCDbJjcSSctTt1rFkq7PqZJS47n3jVg1ztJxFC8orZKfJnSoykF7ycwdtmy",
  "key10": "2B8YAFVMpZcMY2dDSBH5AdvqJ6rEQZF1S6KCyp2ghFhYra1ZWN5JDAqW4oYccNk3HEzB7fU2Dj3ojd73ScJ2ED2M",
  "key11": "iG55NgkHSWFHjLtbQwDQ9YT7jMuhq5hJAojrhBf5U6DMxGspjs4AjZfaRDpJagpP1bUCVXU91GnQ7Cpu6uKrDRL",
  "key12": "29MpuTjcW1aor9mdYRZ6FWFHg8zPMRaRYmbiVDjJF6jEahmwYWNxSqRnZUp2MxHMybZwc2pTExb4GJVdKFQFUSNM",
  "key13": "RaVZ91Kp1VPoMM52SzidUv9fmPoZYinZ8GwYTsjsJ8sk3S86pw4un4vJpJD3NVjG2tzDA3wvvN436e2jtGgtiRb",
  "key14": "3hNbUGXXEaanCtaArKvkaWyMHc51RDt3pvecpfjjk7ijtT2a6m54q2pBRzAhRj38vJdUQ9SBNAYXt8YLAkGCGG9A",
  "key15": "4by8ac3R3sRVmfF1o5sMKGmu1qWFCLfPdjGmPruQYxYys2Py3XYSi9fbjhMNxKM6ZP47hwr5xAam5ETxWkUQFgxW",
  "key16": "5MVn3Aewcfej1TUvufSrvoNoutoUByzDcMrc882vH362i1A6Q8hCJsv9MkKS2JfXWkotPpAEmkGGzWRrJXfNbaCU",
  "key17": "VWeTTni593KqVzu8WUGc5a4JjBWuNwudaZpVUcVPmgPpuXoANQNTAE7UMbaF1vSzajyUPe2GS4ghftxD96xo5yC",
  "key18": "4LUkKKMQJKDcVPasK1LLcqeiN7ssi6sUPcVXZ5w3buP95nBdxg1377JbmW13DE9DaBjn1y9faHLCPHN3cxptVJC5",
  "key19": "3oiY4aYJ39Q4foMj9Btekt95nHCNHYF5CuT8mnddBVgBcnrHW6EW1MEFRzfzRrg1YtkC7fpHeKpfZoicvcTsFVsk",
  "key20": "3Ep4deGMMmQ1nEuUqZ9BfKHBurFZpPYPZiusVXEmn9K4acze8KfhswqeipbHDBi282zbKkpW5KoNmZ1S3tAkCMZA",
  "key21": "a88ReUCffe3KhWQmwyiouVfuMvVFEDtZbAXYoz4KWpLcZdeF1jJharAPz7ZLNMe1z25dhEfv7XRQ8H8dPi9uGjH",
  "key22": "5o1NH7dr2SngwZNqvZLDYPQJ4Em6Wgm9Jqx6eMeEpYzQpgR16nX1GgVsFkXNv66yt1WqQx7o4CnN74zhzhJadaR",
  "key23": "aYc379aTrm6eZS9GnbEQaLa6jd47DrXDdj4rBShDLssg95eqvdZofz73d5UtfPjQNmRubWZanGeKynjqK6fv5QT",
  "key24": "4Fm4zZR2EaEf9fuWwuq5Z9vdT8S36hToiHJNbnsbffjiyZ8mUeMgpk7smtMUCJv6LgXrSniEiWcffzWJCjaxPZon",
  "key25": "5TBt9HcgN9PVojW16tg6ekX4pFARpjCFnsL4xpmWCL2o2fRgYwdEZcVEeeMQSbxh9eFSJPB7gZQj98DpTq1KkixF",
  "key26": "2XEsP9neY2TnT8QnhUGuNsTzsTwaZHSSr2TcZfZ9hj85d4wcdqVsUK9LQKuSPLn3zbvfrhs4k7vGb8dwDUGojKuA",
  "key27": "5WDLJAQqF733Qx9C9XpF76oBXbs2g7ExsjL2S6cyxY5KLXtwRJdNfPBm4YqAuhA7pNjyudgkye48xjg43d1s2goc",
  "key28": "2TrqibRmE9BLkdvSgECW859diV6e4QfYC7u8NoxLHdKg7rZwd3Zj2GRUCH7Xgu3rQP9bVm31CzafCt7ik2ZYCmRp",
  "key29": "3Nm4yw7vT3d4dXd9EFNDxDXxQk8NyFENABcfwEGmXCxCmTfjk5K6xNmX61aJuNWyob68DZrj2eKaJ1FQ7nP49bNW",
  "key30": "32RfZmTCnnGJYxgqmENiUfSJqPaczrmRCbqi8wxj4rdyqs2uGTJM7woSWgGJt7NjpL7eBfqPVhx9pAt2NqrWDA1Q",
  "key31": "5UBSvLumb2zyxQtUC2QyYLushBQ6Q1ikqQsNCDghQx5gDMNNKmwhJeSD7cf2iWYdLEW2A7q3eruc1mvcLbzzbtJB",
  "key32": "2ej73nxVhnFQgZCcE2Rw6R8VqAva6fAipUdK6CBzqzLmEiVe3tWJscmFXtXAZhJPWsWsd33AiX5g7dbkVGwJpneW",
  "key33": "5rDnd7Bi8Fz6CFyBqDRw4vCg4smbpxQrgwrDAbrrh5Unw6US6LxeosRzoosdvqEvMddgzBXrD4kXuabPciGCi9mm",
  "key34": "3esE6aqrYqmPBa6JC87V2hXGC7EH9aaJyLEogKamnAeJxqVwZoMe9RBLx7gbH9ZHkKyTdatLk9BjDNbNcTkHUFaw",
  "key35": "oeNzor8UMjdvGiMnxNWymdAJ6mSgSC4mJxV4mCNeRLvfTrwA3iPoiUAPFrZjtf1q4HajKJUART6R8pkneaARESx",
  "key36": "36ZKVxZQEUckjfXkiMmou6znj89tfZTa2eWLgrAkp8ANoibDKEdq9h6UEGs7J7zDuWHGa9Xcju9vRxddockkgicX",
  "key37": "2VVtMAJKXsXGN67GScve2dUYevvYQfQnajeMCL4fFoiSCosKkn2fWAYMiVwjoTYk93m2WsgJnXQSogr6ypiZc37p",
  "key38": "4KgvYpm8BfgRvc84txkwSnV75krhDdTj4B4XsVA3TSsRydacFLLyLgyhVu8cyzFX2msaZErp8cvJgqaDaSmfiBBD",
  "key39": "4DwwiYyjfjts262SzZjGXEHvFhrsmg1bfu6DHbVUd5WhkfS9oLAJPQg4VTZJHxMPi48kYp4tkFsBTnpLRzxxRUCa"
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
