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
    "LQ12YJZgV9NWwGmCrQcLUtC9bQNdsRfDZhWrSfmiTt7kcSF6micFB6Be5tjSyoyhCCichJindhADxZL9HjExWsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kitSVJ9352LBPfDAPsk66Jbj7wrLiMTDgNf1Ys7b8Ess1PggNoBpCpcj6VAd6bfkCWPqwyQQDUeyPYyesFv7EBc",
  "key1": "4jb5S8tJh9i74iVoYKmZKtXFNaJ5RKS2vYqnvTByzBo54NKXfT1a8QC9t5zdvK1hbzgCRcnBAw7GPACKFxDF48nD",
  "key2": "4qdfZipoRp6upeVms6BTDVznntdB8KyrGuC9jfZ7UTnyb1PTh8AGBUwvCDhiCzSXrXP3QEFFckdCdMHXYXnR1ZAF",
  "key3": "GrwGE2LXTANWoq2A7M3gvWQF8sjmAzk2goofmhUEYXowdf9WqWMNCNkBfNVFGoUPNHyhsfd4Yqzode6fcu9cbso",
  "key4": "5yAFRX71qh7Brjb9DiMfLLg4LqPEENbTU2iPR4fPF1xXVWzhGoE6kmK8CjsAfEmohrDsvcz4EFBsF8gwsB3STsB2",
  "key5": "4qobktF756fK47w9gXU3uELKD3ZixEVnH3TvU5UmbyGZQPFf3A9fKardotZZRqMPc2YWBQx6QkhgPw6FgMwtNip3",
  "key6": "jQkh3pR7yG8mtKQ8V1DwMTJwYxdtNSibvghry3RaJKNH6BDagzFAqHzGJrqaYCyqYy9pkZkydbPRWrDJUHoFKez",
  "key7": "4ZhTGLyju8wcbRiFpc2L6YyBki6nd72JXs9ZraRUQaEyy6iFLxXty7gyTnfT1a5zr6r7GLXrsKNoj9RbNA4Hyvxz",
  "key8": "4Yupyvap4aWLCbHYFaxrj4sQA1CtsZmCC8afdCU9CUAPrk9TvwRGidrhiKMJ1uCsyKuCe6F8C6D7iUtdgmYXHgCm",
  "key9": "5GJ3PFSoJyNSgnUas54FZHHCDX9QKuYbzeG47DRBuitqpYxbPRySnz8atC448XvzfQC25RWoiPR6PH6h4nSfLV7Q",
  "key10": "5Y5dhezRw46fwTQpDE5j6TMTxC2E3qRrgyexjQYMCEH4NpaDRoodbEHBNBYkXPaqApXHUo6N8xGiSFmxZxaR4sQ4",
  "key11": "4PCbteUzaxae4qTqt6UtqBRoddEXgYRh5rPvBezqpkc6zcY2ySoTw3fArgPG72szrjiXLNvPkqfsEZBkJ1wwt6oK",
  "key12": "5USx5piCDeRyECG1PurRKNdhPUXkh8YYPzjjfaqdjo7Ve29cozmQZ7TWLZ9bpUpW3ACk1eLE9SmpcnzZvpX4Fkgk",
  "key13": "RyZTz2DyYzybzsU2wohiWbyV3ArW5UxgrGVUiQxTHsRp2YyYfgrx7pwsp9kLKh37eNHdecnb91R7xrotELaa9iW",
  "key14": "4QjDdXmh52z9QkS9oxCJzcCYk4JZyb38WZkvCs25a6GgtWMM9dk3iGVvt7psxyHx9FDmE5F79PYUkiWce36tKrbC",
  "key15": "5wtxmDJDFpwnEXQXP2ZTmDecHvRoQTU4p3AspNDFcr3CvF2tn7ZP6V8GFgFp68RjD4GVbPQUhHF2uRLKHupewhT",
  "key16": "TNkmWx9ejkqUnqJrJma27HPjF9sqtkGKyEKkGUNSrTFtVDaqWWtJUF2KRQoBbSRbNpTAvGygfsVimCdbnMHcZ9P",
  "key17": "2LD9b2iTCvzKWevJbZrrCzGvQfvmGX7SqHVQd8HeQm43PXJ9X7cxLFK4VxJ2o1jLa2Kguj6nuWtFZ3PLwepJJruX",
  "key18": "2WC3L5chh7cNJRrZM9psAQQpBBhzyuywiQ7t9BNvc6pmLkKDwN6jreD52ryVa1KWeRDFKNcyoRjkutvMsdyLRQiM",
  "key19": "4B7vLk47AA3m2ReiGJWERLWNJzLRvxNhY7MVjBBheFXr7Tp1k5mNz4fqM8jDqcJKN7WVPQDjjqzBqvZrYJw8PDQQ",
  "key20": "r4sCcxieqqb631YoPMFShmLA6a7Symp2pnmVZSMUq2RUm6dH6mcG8Gb2R5ovDHyJbKqg3XxFp2yiYrknWPgDnW9",
  "key21": "4vjHApDLr8YNGUAKcxsywTnwPCx5zdagP1RjvDd2xEWmvkcURGpM7vzcoCEPgrtNDwv1LyPjjX86YNtKftPQXkfe",
  "key22": "7UQyQR5jmFE9tm7mS52wgS93ooB7kfFJnu1o9SkMh9DTnjMtryiUUvtWJ1msG5fQXwjuZnW58bwEoTsRhinqFTX",
  "key23": "39xsWQoi9eYh6fDpK2d5Mni5xXhV4sNKTkNM6EzQNtokMa7Lbsm55janWjwWt3Gwd1uQLDEmJkB7DdQaoNefxA5J",
  "key24": "4w8mixEbz86Zn35nJPyNJyBGCkatdFMn4bfxSwabqJHb6oYAGebn6wq3eU49V6bniPfq2HeJVjGbDgyM636kHtBU",
  "key25": "aZcDCxTBo8XFqkZYdMbdXeQvSMv26qYJmN4tvV1znRTLjVkBNbaUtQxZte3hpXcXd3CR5JLbyBtQVzfeFUU5BQy",
  "key26": "43XJmSz5BjXDD55JPUomQm1L5jZY55iRRo4J2jWa7qDpNeQHjkZXjWddYBHz8oxsd8RPMVaLmBsugsTz8HiprETG",
  "key27": "4ei9vAHrictvLXrpBczaAJeMpDSBYKC4Nnv96ZRUtbemiyn3gzKT7e7znRMWtvTKUEAGZeVY21G1aJZNdwmgbnh4",
  "key28": "TrVDrhnmjFcgKp469wnpLdJB2x9Qn4J6SXBZNBRZhQPb2KHyperaeNzct3rRxv9QX4Lko6BvWfFvkQ3tcRNDPcV",
  "key29": "3Yk6GnrdiYDpWWAemDGLissVVJNDmUTfyEPikkN2JzHsS7xgBJgSjfbKRxmfA27yyz6aZGNpY1WW58UHxxphRYhn",
  "key30": "4aRbxtQsp44uavQ39KWsUHcig9cEpwK2xeFVJxFjx43BDjo9QMfjZgQpXN9gp6Ndvd1QXDgKCcsdTxt1moHskxh7",
  "key31": "54D77ZH6vfjEoj7q3bYEg4r39W7N3pcRin1AjiiwcTPGwzqn7CmXo8HKTx1uKSbaDB5iBt9xFtb1czHjnA2jU9N"
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
