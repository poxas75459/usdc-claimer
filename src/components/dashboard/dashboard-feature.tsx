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
    "gTV8LDYobKY6U3SF9Etf7VEY364q9pYUj3EvrAR53a5tfbRqmvZ9DyLxb8g4LQ52689re4jv9WYTxiiW8PZvvHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4gB5RF7sYEpcTMJ9tXaxi9Zpi3BJnNUxQsq34RARSnuKN6ssx3EsXJonBzynLuA1nJhbpPKLm7sFRri7m9Eyvc",
  "key1": "GmjiS9QA3x8EsovEdSCtjMBZzwQcVX89WuESWPE4o4nxA6aEJNyTHRMrTH3Z3Zjxzttqg3waqfyMgY3rfu8VB9d",
  "key2": "3hsQdPoQY52PTYDKgPpnfkcLtafsk5CvqmTCxsidFpw4moh7cAuMViaLfdJnrNoQ3QL9rV1Rf9GHcZUUHnK1wPSW",
  "key3": "nkcPqRwiNb9rudhdkGvvomDAst7g7tCWvVmL3D3ZAFh9s1KxvnmWKtpBGTwxaCUpj3JcdpJjoy8E2Zettqyd7z6",
  "key4": "4tQ3vpQ3Jo3wRiALtZiThqXv1ppfLgQkVCNVwWWKW7C1jczC4D7FNTx3fVHerc25XStLiJPtLkCKVTwNbysPH36F",
  "key5": "5u165QUX7ah6MbJGXVyrWrxpX68FPi7HbjFALr5Rx3KYopstKaRbS94SLFuoehrayKdRWv1U5548ugk5G2vkYNHY",
  "key6": "5tqXKEm6X5FnKgVhzdNKoxGE3XRrbEXvsPiwfpmiBHwmxVfEhQHuLS3Cx7RvwnGSHPrxHyR7UDDEED8TM95nhmXv",
  "key7": "3J5F3kzcS58KnYt3LfEyNZKGHtzW59AZJs1w9t91dMjobj4PpVjhu8EFVKZef5E2CsPd47xppmjLH55BPKDXQHve",
  "key8": "5iS5buixrzuYMovMYT6XAUFfE6iEraupWfYzXejCdJQUYqetqsV4tfktuooCH7qa4uPanvXtAXKdWisA3a28RwWj",
  "key9": "5tcutYhyvPs2KKxMNjGZS1xzQibPAEw94EbDGoEMR77AT5BsCahnRPFBeKJ5H41JSt6bEDKaC2kmGSb9i5upzHaA",
  "key10": "45sh5bGQv2EyHF4E8PjHS5JdfzzY7wvkArZK26K33kSX2q4thx7LqrMMyzLwrP7tMvfp2YingGN1rtq3K36FhX2h",
  "key11": "4aZ9YPQsJydvcapTTE54DkWVAS9Re9DEyg867HAnsmwVYFhxx5fZcicH3WJEjPW6akQRTtWKcgnFU88vxu7A5CZi",
  "key12": "3SSwAkxsikD1a98r8JrSMWiBhGpfimXsUeMNRcfMzxix5cpU5fJjs7a2pPeA98HfjbZzVtATZwPjyhDLTi7WdKnn",
  "key13": "62MyK6ep6vb4Zb3jU5hwMDFnwD1nwwVaxVF8h2zM55KULPwJKXrAuCrS6A9irmKJjxt2cF51tzcWNqE4ureGHH6p",
  "key14": "4URCmJuxLqdUWMKjLMSkPWsoE9MSu2KrPHnXYZsYPQMp1Q25W3TcBbXTGdRFQme4wPQE2Wmkvn7UAYhPzvtH2e9Y",
  "key15": "3qGXJ571hF1wMWyCvH4x4dR6G9w2UpwmQEA9VNgmnTCifjZiSvziMf2GFbuQNkUMS3W1GbFP1wt2VpFZ9q1Ri65F",
  "key16": "W1uw3toEF4DAX62PQa9pFBjMNGzJiUpPgTfW3LdXp1HZuKppYNmcLdCZfDWnp8NF9fvaPySjTaBkjBkohn1yQrp",
  "key17": "2UUrutncB7JC6MoJYQD97yFvGfccnDsFbQBe2GVxb8r1N9wzU9kRwnp5GBeq8KBbKqKqknKbTJnwHY4hzwjabxPL",
  "key18": "2kaMp9nvJFkvsBXdhtvz1DbqyC8UASZdgpY7p5goUQmX6afUnijkqZUfnBYK2BAD9Bw6hKNJgf2zWWzdkT3PmTjV",
  "key19": "25Tth2TJzy9U67x3Yhk9YHCEXmv3UpGnZVEVsSQVZYjgLYoanb9i1SCKupR65xmyZMLVWUkAqSUKyibApr2MHqqh",
  "key20": "5LFuwBzztEwURoVRrG3XSjsihsGfHkVyAnD2yfLY8eMQ2JcZbLpxd934xNyQnksd6f53Z25L5UmmqWCWpRNnYTX4",
  "key21": "2Ne177Ry6cFcoDGgN4QKhWZjZpzu2Bf8CW3NtyaQyqx6vge6KDr5BqoA9fXmS3MSEeQnPRwy2fmZpB66rmcUMpMR",
  "key22": "4DhJJss7hoRPyqo3gx3FcYysitABPZHozZC1YdKRKaALbvM8juieKUr99N6sJLNvdwbcAQgUgAY6Bd9QXUqEKUre",
  "key23": "4wmo9YeMsEX9c3auV1C1MYpnnmFhetADxNEaspfL6NUEWApDDS1fTftRZQZh1BbWEXKZiy1iAxHhC26ysrzvStEA",
  "key24": "2pUunrpQbuvxTFqYSpk2r1omWmFHFPCaP5tMui2AZqwX6TmJBSWh22TGAknQ2vs2NLxLaZqrvpC6osuMpewphrCj",
  "key25": "48a4LzDsvn4E8Ub1QwfGvcp1bMo4QxAHoRULGuBSVEKoFj7C5ZY7zdz4kUVV19gyBezZuEuLQiEteiQLhNiWWWsJ",
  "key26": "3X6XTvf3MHheTwvU4xwLuzA8WpSb1mWGL3NvrSpxBM52TtFAYMja5QEZd9fpwHoxqu5yC1S8wjDoknMuz8nQLqpM",
  "key27": "3YcB6JL1sxzRv4ougEAfbhySzmFTq3k1TT2efpCxukSkwYSBiSzbpimdy9q2rtRHmo6fdsCZYSiuLn4uwrgX6LEA",
  "key28": "2cfUT28MfGMpdfLHWcweh6r54MjvdtTqsgjt4DWKywUjjgpYqs94nFg5b1k7BhfcX8ZUxtwjst1P52noRoaDSmqp",
  "key29": "5T2MzKqXs5e1zhqob6iKUKmfHL31eCD6q6wTiuEaB6DcAnMwL2i4LGMfY7tmQd8QiaZ2eVG9eRAxaudzupryYo9u",
  "key30": "TYyd9WeLjpZBn2PWz2Uj92zkvYCwZxPw1GyRNDCzGLL55U4gxqtQZaYw6DQUEH7Rn3NZLJ5zz4ZG11wcEGZkXpM",
  "key31": "2x69JHjyvsVae5uMheX14agf7j2iwRjH6fSXh7ptpYp4jE3RxdNYWSnkvte3S1Jd9MHx7wJoFDDXuv1F3N4dPcB4",
  "key32": "2797eQAfn7cNFm6MU3WHFVTaxEtZUKG2jm2xicbFCUNNvzMuuAhHgMR2npWfYGULXAZuDkj2wYXhRFDZUR5oQDGM",
  "key33": "2ikU7hRsEjFY6HwDariYD5NWdfuoJAcoftJG7n5BpTH1RxudaR1LM7UR74QQLqMyqT5V8zYo2DGJ9hXF3QopBzua",
  "key34": "4gmK2scyuU9PFHTnxe1C1o7zMoMvAgZTz7LyjomW8Qt65JbTsboypYfJbMveS77yDcNdhxGrndRba6J98gVFsJVB",
  "key35": "E6n1owC19bUpzhHjbcKTKPV8dSKacixQV5ajqHvwU4fBvpe9nwnhEcbBGTgJNgJ88GoRcYTj4i84DK7G6ut1txY"
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
