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
    "2GuKpZiZ7sNue1XM3bxMMRSfaXsP7U8ghoMvPNczq9CUYPwx3TMhAVcwNwHgsNeTd25keeEm53FAwifhTpFLY2SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ir5hMNLxYZEMY1aur4eguAp8jeQpeK7xaJ1MENn1b62p2Kvc33h6xfWHHjuP5Ca5nzk87qb2Yg11vazqNNzh7tj",
  "key1": "nZt5ehUduH4uciuWJeZMLcDrnfP8QWURaKgS1Ln27jQEuzzQr63gXoMvEqhk81muCLB63z9v8HvB1aYyCtb5Bd1",
  "key2": "2sSoWV9JekZ3mwa7qjWHmysyUFAwteT9KhfHoTA8uJpUWKa4vBAHzJm9wX5KgBKpcfu7HfQwuSmfwfCL5FPFS6fX",
  "key3": "2pT8KYCL2c1Sb4Ms4cKhyeo3FNTbrxiCKpcTVzF9wuR9EcJtjqyffDA1iEQJDddEpozPMVhdWKCpYN5shrVMiqrJ",
  "key4": "22xD5ejtt1doHWXK2Z566zL1xkR7VDx17HnG7ioZkfBZMUyMb5LcGYrn9YPJUjNGup8dyXAYc73iFz5jSsmhDvKY",
  "key5": "5PsitaPoHtyhnfbfRrX3qw1kZuFfugVQjrao95xHG8EJVAvPdvMq5yp4qBh9NZ9KVLxnv6UBfDAKCkQxj5EnCr1H",
  "key6": "25xLGMZLUxHmHSN6SRS2tECjPg38MFN2XRqBh5R7EkcS2pdgaMW2ryccFMCnBCZEGFt9vorScBi9My5ggBfNEMbc",
  "key7": "2VefcbzmoCLfHRN4qmtViLZu9A9yHbRkeiqPeSZqn8cjJ3LcAins5ewhZwNgCf8FnNXzv3rABteCQUsdEAQUNL9t",
  "key8": "5s2TfvUsvcbANF4Npinr8S49dgJGRby3rtGgLdQ8myv4XQnvpQUJnnE524Y9LAUJstMS55X6yiU4cyBmATXLNkuK",
  "key9": "oueF8YqTUMQ82mdKZnFUpTVTEAzNDTZVkGa28RJWWRf8hfLmXGJ2YaXhAaUhnMq8ZF9ogDuXAKaMRNBmsj67FDw",
  "key10": "2GzVVrsTBUcYrKXbTW688vTqjuWev7MNazBS2erBucxaocDx9mRKoPFwxcT4jVsQ3tEvp6wQhT2pQaDPz9VFdVD5",
  "key11": "5LMrjVv8Tq7SCBxQcLZLsZQTaHBkLvxrfEG2KXJFYyFJtgZqT6W5REmDt4AKE8e8rzWbAf31VZemJWjFdi2ZyuEs",
  "key12": "2UTcZoNaShoscz9V2ba4c2xJsWme8Jk7TKFcw6Z3U6ZbijxEZqXWFVrxuWcXH741Rwd7ZkicUS4ALHCkiiweM2Qr",
  "key13": "5RUgSdvnkPjSHQi34Hg7WwuYGxbX9a3c5v4Sc9FpB4cKYXEKCr1rZkZgZG7MenL6wwmE6pB817PhrzEV1XbcJNYL",
  "key14": "2iQLEz6MfYxgnhTua3fTcXTKdVj1ZscmhfR6rQQKAFtXJticpJASYGRetT3n2H353vUHijfNourHLNnRLiYnAD8W",
  "key15": "5NdnPSa9HUwGmffojsfxfg6MvCmTgRQHjHhMYdkrgxch6SToaZceQFfn9YNLCHXyVDFDRZUGbThQnnnjfH1wcUpP",
  "key16": "3zpBNpUqY7XJckTnF1Jg4q3R2EW8UX2CT2Wc7yUCqe1EDQyBsjEkxCHqzfBngDvGxC1KXZp36WjaKfaehDdysX7v",
  "key17": "5ZP3eJ2mB9wYyhN1S4mTy4pDgGrocGZyug7hoHtXFSQXTLzmPiha9yLRX6tB7MVCP6KYs2m33qNwS2WvG2MJNfua",
  "key18": "3QodZBXL3fKCpoHBMMgArTG7ZMLdTUe4XtWjnhqjGoxZU9pyc3m1qYXSR2zHDfcqq8vk3Z75i9vfH3ea6fT9VG63",
  "key19": "4axoFwJHV2ehgHGgooZkn3NdZw3Qc421UiT6QcQPfeGcTi1Mnj8Nm1Rei7JdPdAn2YZbW3WkjwyWUdmnmt9EidZK",
  "key20": "5Jv4vLcQFWctcXuLknhikHqwRbfVWXhcDhL85Nv97ppYHQGwevYkFPKmcNMV8zr8V1PVwJm42kSYwJhCxnqnjipE",
  "key21": "2eTa1avDik2BRi9pUCFZcZBuLqmrX16CDE9qnRvzULcca8XGFG77Zmkew8DBGXgx7Xnje1XccYqCqxzd49MjPiNP",
  "key22": "4rz4bgTJAzqTxj8PyKDTsQTA4BryymGD9JQ12ttkdqcqPU9PyrSwgPmsP7htymgYvxtnGmiFprFB9Y6HeVMSTy42",
  "key23": "43AEpNH139g6jnY4JuJZAfEg7mPxAUbnGb8YSAuwqrvPrF4oNjDKoQCebsUXNzMfx1nFyW6LUPjQbVVmhqTFau5J",
  "key24": "2FHmm5rWtarXt62bfe9LXsHhzMavLEUya6NPqtQq13VUQHPt6eT3HVywXZqkSgGK8CeWN9rNg86eTaqXgVEnCexT",
  "key25": "Xfk6rPtXMwZt1GpDXfpFenyDqb5RYZSQGzS5c5JL5vkkAMQp7ELAMvTK8VjEYt8pgNvWPxoAzpdmh6okK4XcjFm",
  "key26": "53QMdFUZ2g8UVKrjamxTdgXjEta8BCeXaYd3qYN8B3GeUaeLUnKfZSNBSgHLV1sFkNrxNddwppwc3zKyGK8LCuWb",
  "key27": "4DK1pRXXy5ARbYRGtFEQxpuP5RTUfhm4BPzoxrMBSMgDBw1Ji8FEEJVPMRtps4u67MZhzmoVgYdLpPmEQ41SE8WN",
  "key28": "55XJZwtcMLc3D7mgCN4M9VDxmSLBCbRuf14X22rovrFExd62YmfQzs8CQbK7TAggt7ayx1J68rhWKVcjN6XsPYtx",
  "key29": "5jSAzQqU3vHjzn3Np2rnQnkY9i8p2papBuJAeBkjEJoNZNyzsat913u4WUSk8Vacgn7h1hKMJg2hCZM6rz818Jgo",
  "key30": "4R1Aq9Mgm6LP14jQC7RHJN4DMEiXW14NJ2ozsV3rdwL2SAV68g6Lsp6fxoiiDVZHb2MyqtVdBze2Syvy286AgSiV",
  "key31": "3H2bPjmuPpYX3kA8QsTGKcARsfsGGAqY976DMCJxdKVTUKVjEKt2jrkpRLNKowyrEiRCPxq91iSyd8i27pUiNDCY",
  "key32": "4DyBHWzxKWA6CdxUXPmY5XR9BEG3W5zkMUf6yPTQb6vv5rqxnnZAAwNHogNikiKu52T72nbmXRn3jwsEEQc1ReE3",
  "key33": "3tfuYQwq4jsXaPYSoCrCRJsy6HJ1WJNmuapcjpChSuoiSMrM2NFS3SwrdV4MVHynHhijKtkNAZPFTJDG6fDt1HYm",
  "key34": "3WWad2RDLWNzHSwgYdP2r8vsz524FzWJ63nmjnsbm4QVP6Dc3M35vCi8QVS1GcAY6oWbJCKWe3AErGE7HTxyPbTx",
  "key35": "NpAeuyo9WPT5sk959aDJS4e7gd6ge5TKPhcx7qpALuNrqE48AVDWTAG66pL1biwY8FhAoi6oLrrYCciFn44Hhhw",
  "key36": "5Q8qABsqJeSg2VfAqgPfd1qSFmrkJvTwJyXPxEq23xppEFWkyaVVs8aC5XoBMBwmJ68wY9MRsPkCbmCkihCot27P",
  "key37": "2MUYVCU45updY7w1NbHPHEgpUwEL3399P9zKAeohSyYELpKE2sud7R2PUxU7FUX3B2R4rZAYE3JHvpLDGk59d9Qb",
  "key38": "55YsPk4Vzuir5BwC2ZZEJX8sQez13H9hSzZoBwxMRhPGVNTdfUyQGxYDfkQ6QLLMVp9oyKLFwiTyGHA99TmqPLZs",
  "key39": "2QbP8PSPb5KEn3Ewdgph3ziPe55LRwSyCjpV4b2U3kWiae1MVyEPkj7o7rZuvzFgqZAbCJpnhGJhutrJWZtGnCDx",
  "key40": "PnPv4tuVKy6UyN352E8J79CmZ5y2ueWpuGyv5cG6YYNxcxtgJobyDVc6duKqR3jBJFTJnuDne2QyL74wd5axCJz",
  "key41": "2kXyJHnuS3HCfaLgdK4JVL5NNDQXRSYD9sUiJbm3mcficxpnnNNDYcFWk6n5Y8jr3quRDnZqXBptxH179NyY3BTt",
  "key42": "5hfx8ktjAjZ44D7QyPFBDEEiW6Jyx86dg8HgxVxMw4DztD8QbJPUggqHv6JT2K8NQrWBzCUjKV73ogvLbq37j5vL",
  "key43": "5WS4Vt5ZLBaZC5MUZoEXRbqJGXJSSHCnDzHWC9UUfapVzTDd6vwpHEhRonv6pjv8uEX5BydvW5dKtNpaP7L7CiE9",
  "key44": "3UZ3stbT6fzdDcN22ikT2q4ktQ1i52piT3YMeU8e9MyDE7JXX6BbGpHjoaxSB1byPdYv2hL2H8BovLTxbSwomScR",
  "key45": "eJeuksCCEYctrekEGQrufmceu8NxGwP8aiRs5QiWPTeMw4vMYjcuTXfX48pWbSHokxCp42bcRWvHZWqFpRrw96d",
  "key46": "4SWutJ2KpnQb86ayqpWpnqszwvCLsLzmvdgPzw1rQaouotjHjYTbZBQvhwfXFrFNBVe6bmRPzWZ5U3JYWfRqGv7Y"
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
