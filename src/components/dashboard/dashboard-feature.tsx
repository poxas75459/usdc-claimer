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
    "5w4Zhrk5RjPG4tfmgrzrvx8ajreRaYjmaPK7L8KjhESvKm114A5xAKDzcGkBFHFAxmAChUgr42Q9ALMEBP8peT6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u69mUVDZra3WSifSMZFGEQcVtUjeSGkKr8qxjxLCeZYrn18p7uHQxnT341ZPdBUDY6pcjJzQxfLx7y4oweFB3tC",
  "key1": "3cuB3dYCs7dY6Br2Fo6fGnsA76HKqZkiGVshv5VUgiJejFt33PdGMYvmFZ9wpnz4ZFjtcEBcPWy7W7mBZFWfWjQX",
  "key2": "mrwHP2sBDQRLCara9dSHLxgYyZYnsv1zucxp5bQ3oGqSfwZRtzA6bQ8rYbdPuGiyVLKCzB9HU2rSsRaP6AfaKLz",
  "key3": "3up8pnFMVGtbvhE3d4Vtpv3qfQQ5w5Xdu3RfKopF5CV5Vg3osvRu8C7VgoEXHwFqx9Ston5WThK4Lx2dwse8VYBr",
  "key4": "4kgCbcGgaTRpsLiKsnfBVQPjpC25W12TN47v9nMoi12KUwS9pcHi36MvgZ38Qoz9EECEsfpxUeTtmTeZtkJU6ZsZ",
  "key5": "35tXwWbPpZvV9RjY5cZwDbaxi7BKiuaF8nTFBE5Wn2DLdWmV5jcccFJ4DoiXvvGRd4fJzUxhzpCyrDLA3WgMdSZL",
  "key6": "5y64YuworF2YffBykAUvjqDfcbKaVo7tbac1zeLjoSgjWrW85v76KvNNPfW6EaREHAAWEAemfH3XBFrmPQiGJj4Y",
  "key7": "5zhcdw3N6bLvramPvdJK5fSQUpveurxPener5bao6qgc2LHZTVnoDaQtz1dvjTKTtenC6z1BqksoXmRngZEqBr6y",
  "key8": "2YJjMCPofnkb1QXN8wurvpgTCbHaM22F9fWstd6qkQyo7QFe2tm3b3ZcwzF3upjdcJzQAd6ihCremc3KRcJnvv3e",
  "key9": "2WW2XXhU7XU9SJCkHhscJuT8fYfQEQmxXFMLAne22J4KxpMKBHH6g1ct6FkdEWcdTZDm6xEKfrT6ADqz3QL2WxXc",
  "key10": "2nmQ2Sa6dZjZMoe7CrZa71aNKLUnWRpirbj2cDSrf88HiYdpnq7Ru9nTfKvEWGJ1c6ygKi3YFx2oZ9BFDRE7pbYi",
  "key11": "3YMB26i1ZswAhKZwac5CH2kRsH55cjGwnJQZUZzNArtNrSAeXEZ7X4quZQEi4CHWHCwnNZBMbNqoLkWEx7B6tFHL",
  "key12": "yZta6A1gvsGm6dHzmjYzp11uTV6HV39cnMDJKQvqpyqWFiQDJVKqte863wvbNxxRg3SNmjxPPpLeCFp5nYgVLNB",
  "key13": "537TwpuGdwqZN5WA6nTVGM7oRsRepDWv3tphwhZc7xwY3rH3wiZapNYTps44ZMVWmNsqHNUzNdCrC7wEu9s9Goh",
  "key14": "5cU9E3nXyqhUSTPAWhap8SMWzC9E2EKQaNVLAZ8jawPAE1JAA2d6M79XLVpAig95TSAKGHisHve5EjPTQKbTFChA",
  "key15": "2xThYD6vfEPs86d9WD1LBHSK6CH1tv3PTndvPrETNJDBzTZuKTTjN1jXNydexyqYRxawDYikub6gm4M7UHYAArT1",
  "key16": "2mM9sjDrR2ZGifoojhuskSRErGeUReupwpsiCiLxdyHVLYHfniRMLKHZFZxUitSPq1PN211FnPVrXYG2jqN7peSw",
  "key17": "4eD4unmrPfdzkUiCFJ1hWrqRdVgyGY7whujRSSb5ft5ucdVvE7Yuzh62BWr1JVgfVqSdyQQs6e7NH9D8je4FuvoB",
  "key18": "3WJVzqymRpugBkdxpEGthgedt6bdHH5FRDg2imrxAMXUYgoXqEXEKKc3PHGTCeFnvjsmS14isDt9epRwmmodkvyt",
  "key19": "2Z6VB5bSEV1gzBhEJNBe9CHPF25UTmFszSXs6jybu7HhKZrL5pzJFnyVBzBWKqbrzsCgpCMRf4rZ9WZXA8Ve73oE",
  "key20": "2zj2x4xGgVvMSN76hwjFvqN9NDLLDHng8nyDQfCWP2KyyzQPkt6ARWCS3wDXeZzx4t426EP3VLyCxcfkeUApSKu7",
  "key21": "3KKX585KWhofN4Y14hR8BroCvqUz57NTM5PPgSJe78fBwfudvV21pTtegMwLrodkfkSTV96cNQUm5T9xQXadKeiq",
  "key22": "4CAZnE8kxbCXFwooYUFN3H5Xptqjzqs9J28fE7phV7rRLdkja83r8iabiQMjiwviAj3Xx8C1jQRtPFp4LA7huNDb",
  "key23": "KQEqbbzxVvYt1MyruQXe38jCAjgTgTkVh67pYeQi5Mb6zyyyR2Gwr8C6XGEqfQQZXv943U1jmYUY25PRkbfE9BB",
  "key24": "4jryjgq8dfUwpv1s8pCiJuHfagPboLNSYkqkoA6iGaWpjv1vuJGR92RqH8Dk8qvNy6RetPFbYuKnGWp94MEnRSMh"
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
