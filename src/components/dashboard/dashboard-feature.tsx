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
    "5H9nhgGcjM6NmummCwGGm4Gyyx6gsDdAeatuPrGzVrn5kSEtrKARAULUm9xmPtc3tbsvKKfg8hJery9zgA3BY2WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRaJCG6PZuQyNDC8WNU3HHZeRqUpkdoYqnWdZP9HjyPdhoVar6dabhTtovFTq41WHQ68vmgi96AVoR4C2Jci1fQ",
  "key1": "3F4fTs3EDEB2TzEkjMhBCo52wHDNyq8Z2m7WBpBPY21VzX3qtBAURyaAGQwDUfJfqXbjU7NEi8KMmHqhsTounHpo",
  "key2": "HAgb2s7GkHBL2sNS8GRzYfuPhrvcTFwwox1rvytyRhuR1Yvka7F59mqkVGLMNUymAFgwX6DpQ1gsBoTW2g2G5Hi",
  "key3": "5xvGa95hmeoTTcN7ru8K8XN1v6EMkJdVLWnBV6FRH49K32G5WPwgWtARC3RpnWJsbTiq8aUmQvRLMnKNJFGHYX29",
  "key4": "37BAU3KNEUvf4MuhJn4myhQ1Cy8uTMj9ZLvtdAGv2dY8YnLePnNRgb9rmUU2WNbujCCX4oNXDjLJt5p3R9C1C6sd",
  "key5": "3Wyg3ZQWS9aH3KDU6skyCxajeqFBvDQUrPxXosHvPa5bPwjWgiot8AKJjU9fRi1wrtGvpYimrFEWdZtbaxMk92g8",
  "key6": "2mQZHBvy8VUopUms5fgutMN1xgK56P7qgDnr5dNEncVf7oqMRGnDM9mF2XBQ5mCxhHiJArwP6JvgoQHon4j3H1PU",
  "key7": "Zs7zRudTZreXuUZ98kZmPYDqW2x9QT3TmTc4URFYRU8sWSYaTDAW4kAAtyS68BdF2QHmqT2W7FzWbNrmfebEZKa",
  "key8": "3tZoKdEfgDkgaxGGWJuhc1xKPNv839gTrXb5fLua1ZyayvreRzA28b5p329b8jesnHmfNTzVfiAm4f8Z98tnEMRL",
  "key9": "5oNLHChP936ZS8vGWHSFpwEfiv5YMVBFghoK2WCSUY449biFDYj7xAumE6t2JjiQKzod2dwsyq6F8rXnkvsGDt68",
  "key10": "3EUG4QeyJEK6cndaM5t8TVXu9ysGdqBRbxz3VpN4jhPMwNB4STMfPiu5M9kJ5UyEm7R7i73aQGemNYqPATQk52eq",
  "key11": "3ejBn3PS6oT5GfiRLhEoH6uFXdHdECNtpfKwdreHJ3mGGmqXYEcMQdUrhifoRtiQNqHR5oaT8aAAZWW1DEY5iu27",
  "key12": "4157YHQcbmV25XsT4EX5HQSsXcsVyXGzMyLGRqyur4rvggXmv5oceGvu47UgZfugiXJyk6RdmQCvnLp9ZAm9KjNB",
  "key13": "2gjrdko2U12a8WC2UvmbDsZuk5aecZNDWaGxFXi2rXGnZXSjFdGZDNfCwfGipJFHcZvYbYkkaKZeNRJzsCNvxdBp",
  "key14": "4AuxK9VftsGXaJXiMEE9NJq6niVcbP5W5X4koZUEY21Y6SCd2Am4a9xBWKx3nwXVg6wMGbzBx68Cyd41bQrtQHkU",
  "key15": "5csvsSwf6vgFnZZJJk2V3pw5MdBC4TrXejupUmj6UkSZdRMg7iQ9Eno6DCPEMopiR4dJ7gXsPB47vDNS3HN4K3VG",
  "key16": "2pSNPYgrc5zc6PqCqf6BMMbttG37cUYhTLZE2xcT4EDNKYr3W26Qe96MvLdnqkdG5tN5Dvh5ad624DqiAPMF6Lqc",
  "key17": "2TqA7NoagxJGaJ6gFVFKe3B4FZwrvJHjfQV3FRDsKKSLbxWAnmLXP6xMFrCE44djaCKuZL7hrM8Sc2tLMp5rmBme",
  "key18": "37Dh8LGaTtQJfYvnXCMMHcMT1ggtniFMHreoR5i9zdyDAUMXUvVMovjLTq9tLyD9wzKWxCiPk3BDwUzHNYwFApJc",
  "key19": "A6r7R7DazFZ1MHdqgegn13AtW6xwebd7FULfvNpP7vnSvQEmQ4c5ZwXecZdXTa1HjW7hf83sES34ypdttmcsSHP",
  "key20": "5pRvCFFRyXKR1hhCTE5CG7q3gnnTWmsw31HYfDykgJVNk7vM7sLeZ99N1JdQvhb7iVe7VgNVKyspEcjD82N3KMSX",
  "key21": "55dygt8NZDLqMRnPeGQZJpu43dfFgmJfh9jt9GHKWPb5aCedP6PPY87Rik9osiMBQARcM5DgYFYZRPT6rgXZedsT",
  "key22": "CB7jqJqN47vjakAUHYky1782wWN8AysD4VbpfK1WCk7zvNhoUVs7ShdD2Nxk9sFkpebjgGiomVtPJQbHrRKoBkb",
  "key23": "677nigtSTfJQhegsb6QRsjyNEfeJf6Az8ZrGJ1anLPWQmZ7FpWbZhW3SgbtT86jymtB1RafMm1bsWFi2qY4qEJx2",
  "key24": "123oSF7qs9J71yPiBBHsXZGCBvU5t7RM8CM7BFkhh7eJgFxWQrmASdKMhXn4qGZXXmy7o8H68KiBNXF3Mn11qCuk",
  "key25": "TpiuKM4Ukvrg573Z1thRxMZwBhMD5T79h3WnHZBzJ8fbgNB4UzkrMK73xm1xWmMB6JKZdkn1Hw4hajeLGdUheqy",
  "key26": "4QRZpaMTkyhmaukEwLBmB5gHL9MVLw5AsLBZ4dF9fySqayLEQAtxkH6JnxorAJNtnZnoLYayP1rrDRLutETnT2xs",
  "key27": "y4xDboCP9dqmnGygUqU4TqLJ9CBvT8RkdfVDi5SB2MzMK6juCDHuBFgF7GPNz9KZdQFizUJxjB4V48474dd3pFP",
  "key28": "yPQcnZZn5ZN4a5w7fVpHY1YMLg2p6hVBoiPFYaBFAevFP4bhiRdBargLJFsXVHV8U6FU1ZM1dfhVfgdbGUxKjPt",
  "key29": "4NHDKAUL1XbANAoBL2rroHJxoiMLKghuBkXzuZ45nzodBMoTGgyXqukWnCGCfB4pkNVaA4978NA4uM1fczxrgpfg",
  "key30": "56UCpw1kzuhH3eEW2S2ZLRxEcvEKzP3zKCnWG2t4mpsKsjb1Gc5GoVi1s1fG46bVqQ6H6aXUPoHEmWVud25sPwKj",
  "key31": "3zPD5xHkk7KKmG1cBByNaDm6qXZ9NSed6ux4DTgRrKV6cnMWSGK8y5gHwH6mvu6C5VGBTpiAP91nMj7LzEK4XiFF",
  "key32": "5HeBJesiCLBX5rfKvJmSqbGB88gK47vcPRD47EstDyyHREEsFrLvh472hicdBk1wNTSBFb7bKjPd6ow1KcVaY7E7",
  "key33": "cmXTDhHzKGHVSPfZ1B7kfFs4WCbW8dCujbbXNsjPQDzqqaYkh8VC2WCGuS6Tx9QBLoL7cYqPgm6mtXQt81oMpzJ",
  "key34": "2j2PJMGMqtJLDpye7eUNM2Jo5mLEaJKmEddqV1e7mZ9ra1xEBiD8u53Zn869H5EfePDmWQzaQESC7kRNTrQNzvUd",
  "key35": "3T36joMJChmjWuAzRbKgUUQRsPZHTiXVxBX5cXyisNsj3doZPoV1m5co6Xsu72DKH6Y4fBW2A4Gmsdia8KXMCWGW",
  "key36": "4aTj9PNw8kzSQJdVtp4Um1pjYgKMSjAs3Dz7vpaof96nR8TZ6GD4VTySFtQW2RxEzp5ba4hwPxq8wMUPiUKQvnRY",
  "key37": "5DSawZCX4jyFDsbQVgmsyfVi1ZYNqevGafn8sMKywUdDb8MzSE17jwfucciaMsTtKrX6f8t15FXqe1PscSHW5Q1f",
  "key38": "3S5DQhdSVwdfmPrcaFHFcLLuKpYXCFSRHjX92HjfkXackkVwbAzq4VRy4edNknewv1DKthuLZbSSGf5pSS4nCiQ1",
  "key39": "4YKqF5ZePpqxYjvJX9Xd6TrYyx3Z2onVU16Gu13VYm49VZqmrj14gAnhf2SGz3QxjHdgcMCyQD9pBPj29r8QgemJ",
  "key40": "2gWo4rhGHcBp13mRRKpe5HkynZ3w77un6nxGjD598bKbshm7i56oLwfahh41eiMARsAk4sP2Jm4QEeVAhKQV73fg",
  "key41": "2ktGdmUWsn43zAp6zDc1EaCXxFGRxKJ1uDQ65rKdu1dM3Bnw5E5gf2rsibUu7vHvwxLeFVd5mka3a43Xgvdoxyqi",
  "key42": "LKHjRMcMMtyJYcFYBABsprWp6ARvd8JYaoQjh3W144e7iuRzgch1jGy6PKcpscmfzjdqi4CcZ96BGVGkWty62LP",
  "key43": "3Unm9kDJBWo89FwXQXSpTzXfB8kYUb6M9JzVmErhmgLBx1QWFS5LsercfgbSEyUkTouFM2ALXoHY4dHajXjhJa8h",
  "key44": "5eig8k2jMNhH6XdjS13LDWNDvRHpP61nTdQDwy3wesaobiCxad6HCBAQubMfDW6d8SMEavXq6Es9ZFKzSjwbdoNi",
  "key45": "354KbNtJb9NAd7kLciXVco6CNpSCBxKpJ6qQnoyaTWgCqa4WBjhCnFZ4AzEmYRSSBPkQbGpfH9Fbn6Ta6cUxZAEH",
  "key46": "5UCAfeSDC1GZjJmPEQNqYDeLxnDSPCaVButLbcfXncq4kPZTBih84DohFc2q1MKQo9akFvMsgSqjQMA7GDmZPb6P",
  "key47": "2FAeJE5zLykYnojQCM2TEDWSMhxD9fqw6DZWQ7EdZ9ti8NoRtPgHDzHrj6vxTtvLLDzTSG6bPHBfsKQTYUwheVCW",
  "key48": "3t7KtRr9VtHftHjLrC7kCWWdMnZY22pkShqAmF2QcQAtX7KUzVrX2RbbTMj9BMNQktpSi9u9jbbw5qKMfRq7gEaV",
  "key49": "4TDgGXFv2fLmpzZsegAFQMG4WX4SvZeNGpuJFcXk6WwkpK9Wvwg2vSmyNRpgrQDNejk6NHZuJsBir1FdHuED38Xv"
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
