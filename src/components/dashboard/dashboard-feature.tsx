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
    "3Wv6ykbZmxn99Z7Cye6Br2fTkfd7tY3LVsTL1DyZCDHbHJbCkdEc3DZgAgtdoiwquFhMecubFLLR1iDi1jnHWAdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mCWpiAHpd46qoe9Bhc9dod1ixDC1DrrqaByUgGrfeNms9Pp54WPVVNKQHZv6jbWbbq1PDhA7ewnBVqVQhHBLTLk",
  "key1": "2ePpKfReCC6f68nNZyXDdUCLE29HmJUt6CkGe1DkLM3QRA3FCEyQX9BipVmLmamkCxucHcwaV127W1Zzj4U4KySZ",
  "key2": "4EnFWWN8idW5vnDEjQNJv5x3wQULPaXzvDDBixWj5AS8GtJ2tJfeDW4tP2oeBUnzEXchWyL2QPyzhKSt4yWbNBi",
  "key3": "umkDsF9WLcgaYW3umSpgGqxhpFoRENHJKSDfmzdw1k4uMXT5ogTBBPt5qBLogi7hFdXGMh41QfCSjjt8UuJmRjX",
  "key4": "FfZwBdLqySYN6vN1721cwapzbjXi8DuFoiu6xBEevQVdwBkfV47Ygf3yPPTcqDwuu95p8hdhVmu4CVGb6dkKVeK",
  "key5": "3d4fQKB5erqxepDSWc9bx5GzTWz2m5iiEXs5VFsyeVzP8tShvVGmnsPhHZPPJro8g7Wtx9q1afGxibm9qoMMFTih",
  "key6": "4YTRXfQeJoiX5AbPke5FeiHKhaCSpmb7V1ypX1d3SjZaFASs4FjtnjCwLRoWmFJWodV1z5FCK4hgqNiE3kx6Qxj",
  "key7": "x6hBpqz8emnVQu6dibw6EqBxL5xtpB8aWtXjMdm4ZbRu2T4gRe1ushfDtWZP5fHmvMjY7KSvXEgbiqqAGBFFvwK",
  "key8": "3d1CEzkQcjbWswGTy4Ba9tXbtEe5QNSeNsjEuCXG5Cp5L5we6CZ1e3hi2xhmnw45vJFL1854FWyJNPMZuKhq2mNg",
  "key9": "ZSHc51i3HZKsqrJw2R5PBCdznAfVNa41ur2CpM3qhryNrFBg7g7A3jeuWt7zgzuACv8YG3vuhkefipt2Z8GgHxR",
  "key10": "2JVT7t9YQEpMDUuQDZWybwPy6sVk1f2PU69Z1QsT9cmuReCE6s4nnC4LdLWYRJSus7ncsywuWccBy6GYkF2Bk5tm",
  "key11": "2QWrGEhxKyiftLR6PURB5mHmfHRhRHXpjdWa4U4wmfMdk9yGHsQLvirCTsFsV9VBenJess9TrdKG6HmxgtDeMhQf",
  "key12": "2sY3BAWn28GRdGpFE2u3aw6jPgWohoPDkmQcfmJdRd7U1KN6u4nis6tZMN6ohJnSHDadWXxejN5ey2Q4eHo4f8qq",
  "key13": "4TwcsfzAYxFz4tDBR2haFwNP5t7H3z7AwVXJFKS6yunrwMt86N1KAYvhfFRMgL5GZE2aZmjnudT3PaDSNRqCyYev",
  "key14": "5sLkScs63UK4WJEyrxw7UjPaYerDn5WF6HzHDGuFAu2aHMeqR1HAHZwrGXa4GHkPDkFiczsomPfwAdSFwfpNGnQz",
  "key15": "2AoVCP6s1XmixRtvBbPuNSNGxCdm7vRuJa2MExEkk1Cnjj3tLq6YCmLzz7d9HSNXfg8K1999krMJjsANsGFRrR3A",
  "key16": "9HnuQ7rq2aFzCvYbx8tgsC1AuohVN7eQhjo8CKVtustroHrHppYUXGMNgK49b81wPg4f6knCqQBWreZCSEcSP48",
  "key17": "4AVqDLeGpmPABteMmWdoeVwSPE77vGKsiaY9JxtHzde63oSHREtV2f9SnLzbgekeM5iscfM4EVkPwPWqThrBECqi",
  "key18": "5H1jZs3nYiGSJiLgNLWn12zzKrNjuEXEd46Ke3U5PSjuZYbYUtyorUnF46BuWWP8km27LRS1FgwPvVWKwz4qwf7P",
  "key19": "oLK9r5YsST4WEPpcVe98VQBVRs1CVvGJjiTfeDJrgkP2FW7jeQSFconDDrvwAmjmwG6EeKozAi8TBHqEjiAQQn6",
  "key20": "5mEyPCkGTwMmYDkhN1ZiuTj6ZxXgHADtFHxffJYVGkn5hP4iTJZFKHrMRzHVypXLZTuWKWL1PKz2FEkPQX8u1F9",
  "key21": "iA8MvwjDAR7xXywZP9eYVW2wFRAhgr5jgQsBfog69a53im6jk2PUzmwUWK8YKzinprKbox9jSZXrapNPDSFCNjR",
  "key22": "VyxToLNK2FXzVhBFTyDbhzpXh7nFpWq6Wrait5vPm3g3L1t1YRGuEoUgHqLfNP3uPBFz95ewDGQCyamYUfZTUoZ",
  "key23": "59puMkJd2iuU7VecxnE9JEZ8V88dQ1kuyc4BSVU9HjxPR4NA6k144XDTMxKoubVMTLtHLCHH11Dm9wqYqR8Feys7",
  "key24": "2zAAzqGPeHuXgdTn7qifNhK8tVGuWQwSNxqSdffzb28XaztS8WXLs584z8R574xknKwjWRyAJJ6muk3HP8qctCdv",
  "key25": "2etPGHbZyJMVPqkmhJ56VCxk7Qy9QobLs67Jto4UDvrhKnb3fsWHBgqwfzCJNHK4PMqp82fGTwzjzjwii4DpzHLt",
  "key26": "5pwyM7LYRQx8yPQvfeQ9ZB71yDLzNVMjLmK32JFjDe92YVmkZpvv3y8kevmcJQ7HYTT5gJQLBHBrQh8cZ7fV5aG2",
  "key27": "4vnZzWLCLytHtLMaiyrYdxCUraanh21urGFzkWAEhvfpqaTfmBRfsEHRB4nuvr9cS56tWpr6n9n7GG5p7G882raj",
  "key28": "4TXdQ8LXEjKcsUmNukc1BFzBZRSmWR6ePtwyoJsofQK7mrz32f9yvznCdFq8eanU4JW8LZfEgvbnvZ4jksumhACR",
  "key29": "5ibGi9cbEQpTn8YB8KmCBrSbMeX21ujbBEXHPaRnZuwjmjjabSntfCLg9yxAZPDswX1B85otDpEaFVDDP33h1341",
  "key30": "5fhLNTyhPRMnYfmQUTrLGM2UiMyE4zavqxKQZDGrGuDP9YrC3f7d2FCqwya3rtrdBKshRS6BM3t75tLStoo7PJTD",
  "key31": "2Q5g8sH8hLytXDWgexojfVbEaZfV6wJ15QSxgQvF1vqyDQ9bukfKqRe7WGWjp4choAc1wWovRbvf8CJ58rUctuRh",
  "key32": "3FTu1YLjnrZHVfa6geEZnF24q3Wy8q5GTkXChJwjAtpzg16HmoT9L3qVJJrvA1Ks3QcrRdT6hyrAGZcz2i2t5sW7",
  "key33": "3PSuQKyHcpUNBW2EapzhucarWgYcJcLhPh8USE4h23pxSMy2oGNtwsTJM8VnPUoWU8iSag2kxsgmSRRHvdDoKN4N",
  "key34": "2qe9S5v6Y5CFLKgxRzEuTZAnwsSjdfHP93GWCNVeHCGn1q2kiBXVdf5e5etZY6gEMmCipJdv1HdR8wA7QLsNQTnx",
  "key35": "2sxCnKM8cfVNGyFPJhEe5iF9BdeVZ81HpgvYQMfy2cZEWjtWNpbEdQTYcY2hnfEESD8oYDjhp9bhriRdjsKdhEkG",
  "key36": "3j4q37w7qVmgxyZxY9kgQ3QsEFJA8ABXHC3TPaudbVt2BPUP3bPNTXtBUNkSAU3dM2iDL41BZjfVhfHaMeEQNNE5",
  "key37": "3ma6v1j16VW3hMjku4uH9HDZE73r2ykJZs1y3XPbNfsQt1NZnrSBhZLuKvCQpbXxbpYSBMzDeSoP993JnDJjfBdC"
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
