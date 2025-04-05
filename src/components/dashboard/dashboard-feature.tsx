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
    "124HdQEm6FmifNPATn6a5jwEd8wj2qQxStEskoBcc2HMjD7TLFHKZkZQDunimyzeSsY9yMEHgf4ub7f9XxJ8hTYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UwLqsTyMF35GRJqQ4RwcRdMtWutZhfWSVKMRWemJyKK7hx8M9LBinuD1zQxtBkbauUZAqJjSoG8j9aBjJzxvFn",
  "key1": "4PXED8XUVa4yrAPSmzStxZHCMutWKmCY6J2GErEGWdtGcbpfjVN5gSVN3PEDL9jNxGR3uGN7sFUBcQfXoyGZ4FwL",
  "key2": "3LY49gQujGVSi35rUoGeT41d4xdgdLhnfLcaj4G6NziBXmySwp8iLD18MUFXnwWELYQ2jYjU2hghfKH6MBqwp9DW",
  "key3": "MXW3cFSmTsHH1acs5Lsqg8aHfUSRqhynU1c193PC998VtpC4NX2mCx7GKxDTRqTnMbCuE2dCEiHRV7tHMxcoL1Z",
  "key4": "3zy5Mz7eGfX6cKgy8aDcdJWt3Af8rEwTJ6UEKBgGtQwkCiz3PkudAknCPPkg3ytb7fgfa4drKagGHEUQLD2np8f6",
  "key5": "3X8L18GBcFUEUa7GPwVf8XT69FZcveTg2FWULE9u9Wa2ZfVnG6QMN1jeYgy1B5VJMte7BWszsiPsrsTVXkUgrcC9",
  "key6": "48eNTFG1vtGuj2mufigZKFCo3Y5JkagQeKSQFvFyonZXkoMs7xMQ6hCc1adWWdLewRfJT8zmh6qniEBHQBsBUDPG",
  "key7": "5ek9e6XmRyMoi3oKcnbiwrz88AwoZkGcqWjxboNZDdZz6KCuodso3452RFR6k2oJcD3ANbxro7ozTP6uAgR2R3SF",
  "key8": "8a7T6HMkZzWcoeyMrwD9TngaTFpWKdVppk79Gmtg2mt9udAB44p9yq2pcNyHhxfH2f6RTN6fc3QX91CMSGRyUQs",
  "key9": "25uEyYYAqEKNgKREQMcWqTpf3nEEroBmEdifRHnFdCsNiDzDN9YMr8D1jKucyejTXzk2JCX6xPdEssU7HayxyUzz",
  "key10": "9UXrSfUDybcyCKBeGL9vgpcRpHJkPDeZM4CKjEk4BhZvv2zdonYXXaX1R8pR64X48u5NF2TwHf2Jum9FPbTLwh4",
  "key11": "4TRRF5g1fqAeKxmfDsWohQ86Ysnozzpw1DQLoJVQT5b8t8shZE1igJfUxLB51vaSMz91zDULKwJ4BPm1YejWyC8E",
  "key12": "2w2Q8gobgpsnLsehrTgC9rB2C4Ufo5sxPEFz4B5megXPMw82Uop3qjGReZw3b3MwyvPiWVq6xpAJZRg35oiMgz7a",
  "key13": "5BfGKSnVmpSCX81iWzqYqVGAoHKAkXSRedvgLm624KnE4bmKrwWo3PpKSg6RMB6qDQiSK1VHCA2eumkxTwH9BAkw",
  "key14": "4FYJgPWHGU5MeWypr3RAz2CKNsank5zcV15JZzPzPk5qMwT4Gnds4HcH97N8wSdoFu3TvB3vG7QH5vYnNJip3SB3",
  "key15": "46rPcfgKF1FFEJvitEqSrZnfk7Q7KNNgftncUSbrVcNuwrXtC2W5p8tvAku2uVRaHgEfytn1gixSTrF4zF3akqua",
  "key16": "4PgQixP3hMckhE8kDPbPiPB7XLeM1bmbqABDvpok7TjedLKZqjPJkU6dcn1nakTrjgiE1rH8rKJmaRUCdJyFAB4j",
  "key17": "2zLnh19zghGqyRQtHEZb1iLQD3A8BXvN84X69vxmMbgAHtyLnhczrTVhgih9f4BjzhPoass591mgnP68Xg8PALiF",
  "key18": "2VRKLQSA2zhwiu7V9SLNMvarnJoddKiJ7GtFLp5bMQAYgsrVXxkYzzqVUHQhyERHFMmAyyPh8UA6TZxB9v7Ae46T",
  "key19": "3impUAxN6tyZvVGANpEWUwfPyWhcJ9sMJWWeMg22qczdFB6sXSTGCNhsErJL6ykjPF6eT9JH3KBGgdCBtD7M1Q1C",
  "key20": "4shfz3DnVjwvW2ZptvSHY1UKaLsqHce8jJr6X4eFCiT1DVYPjaHxnUwFpvLFBDKUEoi8WvPX79j2A4JBzuqWX8vM",
  "key21": "4VzVWV4JNbHMUxCWFMQrqou1yt9ZST7crp1kdjGxgdpTB9UpuoFaKtMRcdTVtpqoCcVxJd8BKqAwos6JJdTLw8rb",
  "key22": "42Eie8LJEDDZSiZpA8ML64gGE5fQzuY9xdUWF9iNdCa1v2kieF1w8pexvk9ormS3E91pFeQKhPR5QSxqhF7EumRL",
  "key23": "4yUmuyamh9SGdRwx798uixASWVEYVvgb2UDXXpE4UVokWoJqHsWdCiV13h1w5d7HxztiJCtgHVkkcfKTESLuqtYq",
  "key24": "2F9egwCe14ftgkRoTMxzMrnp3ZgN5CuneyxuyRpMpdmQEQHYqwqqg39cxnZzQoPouhz3RSznUWzZWL2JaaHnxSCU",
  "key25": "52GpgagCvtsgYEkHvtLgWTZpXUkRN7NijCgsNMJG53HXG5JFLEkBrxWkFjsguRs1EM54JpHgqiwndgMg3PJW7A3q",
  "key26": "4ZyThj9jBsqtK3kJa4RvVvHwbRLHKq6omB8Q3pqNEsNY1CBjZE4NwD1M31TrbgM8D5verdwy3uVWMoutWoWpfnEQ",
  "key27": "3mGiq6Qe7Q52eDzK5G8uNdDqYQadH4ehjXupcjU3HjUF8heqQe6t94bx8Hchr7f48FMovwm9DAe1zqT1ouSvLpFD",
  "key28": "33znvtRxNDmdrwFYesv9ddGwaenDvW35csZpUzPdStj4TL4smzfGdXL7J6UrQ8VUxQUaWa344ZzLv4HnRzVBgrYm",
  "key29": "4koLNpC5AScEp5x3WLN62tvDtdV8b7bdQiCe44Vwuo6mTQu6TuEzM8foFtJBfZnqhSYDqqxLeht49EWhLNkJRhCh",
  "key30": "2BhSsDWE1VqJ2GdPqY155f5VZfLdcjbS6Z1edus17XbPvdPBrtyqjgv5w8c1BJ4NKHbeN1zVBQmnkHjU1u8wn7oC",
  "key31": "2mHitTctsRuwm428354hrWCsSxkuhvDsJbzxbnTwYbdnNrXSuiDxR2oMAmQpCDfu6fsZ13ZwJrJNuYCUUpMVNVq1",
  "key32": "3cbyVHpv6Qxbq7SQYEL8TKPKLsmF8mJqXytqrrkkXzXgd8ZxNd6ZoiqpJrqDsBQz7Uhggfk1Bnuhwpn1uobEKSU6",
  "key33": "4zxshjqrv8mYZYEkLhXYcLetAsuUJD1UFDrc67xNcRpXGDtjfHpKhSRrYTgWhVZ33GFRYWFtrQBtXXVE3SXc82Nw",
  "key34": "5MhfXovryJ9urt5CRjkLcrPZLd5kX5UQrkKpRYezLmeAzVxVZYVgkgHt2JFjSpsCBqNhJa53n4bFhMXFWAB5NunW",
  "key35": "2g6iUPDvS51v4HVAxrnAv4HKWWLraEUvzc1gCMg1bEu1uQ43MybHcdyEwYoy5MgTwS9xzPxJ9pUmWPxWMUCKSr6M",
  "key36": "4XcRzvstM9V1qJZcs1DDEnXqhEMVZ4utGBTGCr3u84T27v6zj44jYom6WnvZvZCzETs6JhAwgaCosuCjzoggVqAA",
  "key37": "2NL65ZQS2mUxbxZdzy6nCmqQvsfuvtFhd3MHBNufF8ZWgzSFJSUquGUHYX8jSpAbkNiDJrk9Rq7TLa2kKHvviRgF"
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
