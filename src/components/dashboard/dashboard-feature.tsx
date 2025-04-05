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
    "2Pe7RphgLTzqy3hnUTJCn2oeioM9e886tpkAtHpgNdu8KkDQaPSkXr3Hp2kiNWN8bsT1HK3VXEGBdYMZNh6L9JMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfNPA579SHKrHCDBU9pzkmN6JBzh8yZfrdho1BG1HRCzUWXL19mzWFHKy4HywFfeMSv2ZMzCpdm9254ZsvQNuMa",
  "key1": "2A4X7Vx76MJem3kje6of4PQ75zz3J9zpubTjo1F4LAbVYMTT2FvnesfXQJS3Pf2FvMiXAEbzqpEXLntL4xFSoBJk",
  "key2": "4traiQBJwFRDtEgrjQR7iWHUN1AFrhZVgUZb9PHfpaZHwErJn7xfReoVQ8SUNHHeo8GdCV9vgDajxbMrZXZooWRP",
  "key3": "4wJzAQeVWpStTxzwgdbUhZg8evsVrfRMyLzNrQ1axEANLyYB4rmmzhEuqyYCWr9A6FCwHfSP9Gv2o6HJcxcu5kwe",
  "key4": "5S8EMRyRphD7JjaEWCLytHoNmoorbVhWQeudCG2XM1VDs8GbhvwnKG9hya1AxhenggQEjGazoAenrbusj7cEfu5y",
  "key5": "3gxAofM8GszYb6MTsrETqZL7vdgprwSxC2sZ2pbhtXdsFQZEzKzd2jTSNmde5q74hYVFKWYGpSyR4Q1Y8p8feptY",
  "key6": "3eop386arRQFgNE9FRimgDDymWgigF3W83VZasf76Kcypmo3w7Nodtbrxapwp623fi3fiE4JADG55MmPW1zXarXn",
  "key7": "29U2nuaSUQwv26mxycEkGKDZmzd9r8248N9grtAibavPWprCe8HvqkcQEz7jy8L3moRSdMHRudUUfCmkTc55cZro",
  "key8": "65aaFnBpBaw59Mm1Dq4fS4zRQvBfYW45NbHZoiWbJida2dzkdyRFv6UEkXmmTWZDEYqVNyk2Wa8vJ1KgybaVncpT",
  "key9": "23Zs7ZJGXWrct8gMZBNMQA1fPniD8S3zSVVZpgXPUjwwQY6cx2cqauQL7Et5JkNRB6B2bcyJZFGBpMPCzX9Pgcfn",
  "key10": "36i7fKYW8qaCRtRRRgjeTsvEtzVDnE3frpgXzd2UymynPLgCa2BR1YPfPmqgE4LEHTsxSgqjeUe7TiVeKwTj83M2",
  "key11": "3oNKfMB5Se4XtGk8EbXpu8BPp91cLkTidtEu7sF9g7MEvYLFq2hCFjJaNstLQDiST8ivKwT5ap55bvZxZcnhsySC",
  "key12": "4FrEfdU8Ys61u7zHZH75qNm4AkYPXRX94MLTZkrzXniajMDFXMtmXMicLjA4g6RVP6KcPaponF85D63L3D8Vmzoe",
  "key13": "4vCvV1FZFWMiGdAVkonJWHbL2PBgx7sXZZzVTtXvSBW7ENVgtLDewbGqb7ptiCRB92DsspFHDfb41s9cYWRSsFTQ",
  "key14": "4kirXxLSr53gUeojEfQzunvnZnsvYr1JDhCX9UMKpJcwavDeHsEiP5MZG8LeoHsakqovbnB5YpeSWkAfgymppQoE",
  "key15": "2Kt9WdjRbNVaivcgG97WZxMNBAWepFri3bizitFDVtZ6dvfg7FAhVV1ZmuSgmFoukJbfDD5FHCMWfAfzAg7HtgBq",
  "key16": "nCeBE5BYnm5SGhEpwXtRNWy83yCrgmzejxSBZ7vmyHTTh7wckSRdi4hJrDdfLtwFSqQ8SC8GrcMZHLzQeMEFwf6",
  "key17": "5KtUTjm13Bh7Gcyzc7noW4BbBNf8Z6f75TGZZMfeWxrH8UXtSwQc7Jpp1Vvwi7MYfMstGDieZN63ag5JXSB6JPZ1",
  "key18": "5ytvuYWdmQVacav1cVyxf9HKKQagUFeMJo6ks5tGymXgHaebuLz2gMXQd6pjHNi3NhHeNqYAmhVztb8Da4N8LcEM",
  "key19": "2uWvNgUT35FCCAfNcTL6m5pY7UndoEb7N7fN8HxR4N5GebByHjLFPWwKwH3KnDeorhFSb7hUu1aahayT7un2ugaz",
  "key20": "2n58zcJpzUrBbfh6uJ4iKHAz1j5ekutaFmTQDPTpD621b9yR4XbWeASsaN2buf2WpqYmcpBHnAFBjzgm475vKUFf",
  "key21": "n5wT6hYFa8FURWouekCsLcesFBcFEnzybsog18ams9oECCcPaPW3rUrDr8BhEXkaZvsmRNvHLuDtHrsdTDzqfrF",
  "key22": "3VPQFNjfC3ooQ6BdG31AcwRcCzZ9K5KqMy7FHnaRCUHDB56nF3jQzSxvP1LCzJwcg3kapt5FNGT2t6shZ3dznp1p",
  "key23": "3MvkRfwJVZMMX9BaF58aj7CvQnJuoPYbJPuZSUWCet6biYm1sDHSdKALBj6dL9bCHkWwHi5ygaoBmRYUo8JhaiQV",
  "key24": "2ASXkFfvoKzBByzMYG6bifKbyRUocaDZNNpX82UiTNfKTGptzmBDoPpvjbq4Ut7q4PtjGqv3z12YM1n5rU1tvE7u",
  "key25": "3UMX9R2FRCzPz4Hpe6Eqh64JJHUEFUc1v3WfQorQ9niScfNetesCYBSFuw7Hg7CwXoX1E1XdwCV6jja784L1BVU1",
  "key26": "4WLxNhYDtEC5K3Vyarzyr81GPhEqkWeDVJ6wdem6oAczRPGFj4rXin76J4yVb35KJSc663BFKS1R1sCj3M2tXZME"
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
