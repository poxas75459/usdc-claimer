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
    "5g1crTiWVopN66R3N2fnmBCJnH3AcCijQEodVMcq9ecc8BxcGqtk6iKMr21kWE8ieqWBcy4F1f7nVCQre1r8hZxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qaxp5RYcftBCkLksPKsCg5zY25Xt9MVvGCbcUP5DKPoBu4TJothMKcBAsyJbLTmvvb8NMNhFxaY4891UhSwHxVm",
  "key1": "WchideRkLAsvVU7Xmw59brdRcNoScjnLaXEkJHzq52FPzShVpzAQGca2FPaHUwEbUk3sz1RjsqSAho8FG7y6C3p",
  "key2": "4dWeY8gjYVhdmZNhjihbSZ7DuE3vaf4uafgtHZTbk1HExcVbNAqEDQBsodtSy9NMA8h4Fe7rV2Tv9G7v13243P2g",
  "key3": "4zjqnyVBZtKmKCje4FevHcgekbeEq6EmUsxmoXUtcvkKAh9pB3N5QYpmH7PpmYkbmtbPNP4qWVoj33XjandMbMay",
  "key4": "4kDZFdcRzFmMPxTUZLprgDG6n6LndwknmoZsWAB71XKL6Yz1GQQhtWoLiisVeataj8KtobxpRSX2rSuugygcB4ji",
  "key5": "39FcVtm7VMCGLnmpjDYRJDZdZMbNkqMHr8sPoLY5ALqXGTcXSXp5f4hJBTaShQzeweWY2QkFxjHNX44SrJ2w3Cmg",
  "key6": "2wz1oqhvPRDvfe8osbf6Z2dKLnAuQBwSguVUTAZ9d4943Y4fhwYRUHYanoDdwHuHn9hBtgPEAuCaPym7jG8xboDD",
  "key7": "4AbhJfT1qsjcHQqTvJPqxr1PfbSUoJaXXJFRbZ8Bmkefp5KMLj1rDQ1a5TY8b7HahUfYo2DNQdAtVf6vDytsnaWn",
  "key8": "3WEVejE6h5dZmJ89e7MAFd884qNq9NwRKJCZDH3hp12qWmA8Evv1ne2eQgyRHjrKf2W68EGhk2W4HoivsKtfrAsJ",
  "key9": "3RHYNbztYvjJWAFQTG72BBPYo5KVXvbRqWivoQ1BceFUSe5E5mfnNUAEuXySQidPCTBvB7UB5MPjewnSKE9yLCEL",
  "key10": "5BGMzSvsDMoknJxs4uPK5xmvVZMyUGY4F1CpMCLudDCcKdRL1AtX1Gx6PjFk3BtX5weH8hr3bhYUcBZvdXrkFSJq",
  "key11": "3LntX4EdYrtZbZ8YzF4ouRb1KG2CL5Z7PSr5LpqYGHiHgQaFeTtzgjSy7avNENskX3NKTnLu77PEyS77jpAQwzPJ",
  "key12": "4AL2tTkxpU4mhgX161NyaX2E2irs8DfrRwmzCf5xidHrbwHNHgjiWACx1Ejko6EdTAv9weDGLEYfz1a7axj7UZe4",
  "key13": "3HiaJBSrHjzgPN4tdZAmPtVnKEyn6MgpcF3tp6SonPVMh6NiNJBPCVERup17hSazyZbfYapPMhGByVPwDs9umcWs",
  "key14": "4UKStqiioGzrbqm8aTMz88w3xM37dytMUMP9hf7FfovnrHShvUVsNGAf5T56CfqEc4K8m249wUEEWvjbqByi8zia",
  "key15": "3Ypam1tWk7NmTiUaQk5mYy3eWXefN6HTmqgxcADFSb73s6ojSiGdY4W2NgPQPdaRA8J71DnwTbdxbn8ZYQzcVVef",
  "key16": "4zWJYxypTR3SWEdNeJX5cThfP7nMwSCyV5ZeBNz7TphuXyzHRa4Z3YJGS6xSQPwLGkRiVpqrwLxFWAYjCCN7yN9b",
  "key17": "raWnLgiWjKCtB7xs1sg45QisgxXFk6d6yzD1ZFjNW9PYgrtKgjw9RgRhDbd62kqSm4vCCRubp7nWcWDViX2eErg",
  "key18": "3uhpGgAjUTpEq3i4dKoa1s2tDzfJz7Sv5Yd4a4i33w8z1yC4paLZGgBN3VT8v223MY9CXAafbJwcGdr1qGzSTi1K",
  "key19": "2g5nzVN8KdZZt5CSHHi2i4U1JU9iGs58CWG6NarJP2mVYrVg6fMn9SmbTy3XdXaYpm6dCU4RwDVkiUZwqNUjGYf",
  "key20": "5yt6VFWZAbmfKZ8mC2bWsRM8raATwqQcgdiVDaAnNTYtjrn8v9PjKBCua3N7nLUtiMj1ce7whbRWryEKFqmZttL6",
  "key21": "42ySowydkyxfFAmR7oTakqH9WQFpectjuno1D3qKfECZzDuGCnWzpyBK5yh1hNYnB8qKuZPuSMYA4QQ8zdfg6Jdb",
  "key22": "2ypecXqPBGzdMSS63XjM1BAXQ4zhX9Gc4WCf5Ao8oqA1fzLyqBnosJVvxXHA2ycyua2uSSmXtyqXdcZjS3Yg4yhn",
  "key23": "5kakpU1VF3gP9qXjFVVRe2VpCXnxJPUDHVWZ8M5QVABC32SfpK5jCA1NnWq1S3uZtFVickcPXhbwH4VTBoyQp9DG",
  "key24": "5kR3hpJdRC9yuxMPzGXuqKwiJ66Cm9UstSgbAZVDkZs4nyhGKsdiphu7S7JPLYMpEeGCGmFMFzgAthBUf4p6zAmP",
  "key25": "2NFpDuSJj8ZvdLJh1vVFtaEM3e4WJeV63iNtjfkfYh1Uei4GXmLdwi5CNXbFMsic6De5uwV6dwwXSHi5Jf2d1hsc",
  "key26": "4KBkazbiB1kXG48BZ59haDUyTCaUbrqFDB3NLTJS7GFL1VMfNmeK6Sw5K6JKHFQWfYjDhXpxH6TS9i1m5ixQnvnf",
  "key27": "5oh9hGMQSfouhk1gm9CivHtKL5CAPB2ffpqERagusw5voVed6dSLEULhQxNTUrPqcKWQaap3mxwJfGfb8aRsQEdJ",
  "key28": "3bjjCbVcXvkjgHEzBUiv1e5JrhiEpxCP6AXcKziscqRTkBcM5h5RegowDJpNrx14gg37BK4MjcwphpP8i5azoMDY",
  "key29": "5yJQ2tB4uxuVx38arC1xxCmdXXWKfB6Qpbpbpu11kdGJgwbXj6Wpb28d1XDyXcxkMhLHyYtgWGovAEV1RbM3MZeY",
  "key30": "2SCLS5kEzfAvRo4ESDSumxvpoo7SMWurqcbQrhCn6QXKPYn92nuEULNkHuVr7FhdYZboVi6G4iF23jtMNex2Xdtp",
  "key31": "4cnMNN4j1Exyg5ck4wvfBvN1N1Rb7Ckc5jBts4cho3CpGQ2H1vfD71887wX6zEZu4uRP9rd7Gw9AAvrwPyKRpwYK",
  "key32": "5cbtreZPxWR6kzwD6x1jq3jcwJiMUYo9LCM3KceJrRnQhmje4vdawRUB9MZLEQWuTYCC3Dg9YsPuKurtQu5x2wEk"
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
