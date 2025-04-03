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
    "LEwFMRTFCPgSC3PnwRESQah1y2JAHNagwDzhkJQQpxHGLJUTV6FC2SoUhQTd2G7dSo44EXiGs2fuQJPyZ9MCqfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624R1yPw7bdn1Fo67WbHzve3tWHZqoWfTZjNa12ckonjjb2jzew1nGDKQKLkED3QA2G9iSWZNrXQW75BAD2X2oo5",
  "key1": "4uNAVn6jap3bGChYxuUxV3iwFNcoo2CzH2syYiFCZbSfhvEMzbzzSAj5anzXRvWaCjeJSS6VckxKbXqkBcgWquNt",
  "key2": "VQ3bENGB3irdnn6Dw9n3DfMGAKVyJVJspFGYsB63G64irhWdhvane4HDy661JGPJt1d3HkyfpsQzYP9JUao7ujP",
  "key3": "3bNooB3wEitupKBMpUBMM8wEcQU8hj7wZbMLxJq42zU8zUGQ1JutWQ8K6b9sXhXgp7PDHd68dgdRnmnoCZt7uieA",
  "key4": "e1c2KTQXGpkhH9xRdebqBZYvohbWjkUoEEchcj7waX8nWXVhVHMzmo86qYNm1F3WMnvba5WF2apT82gCNWdF5QX",
  "key5": "1WWpvgccKyd34A8P7YA9U919oWnNrtYMqsP7kFN8WNRJz7X3XWjHrnsPbpsbCYL9M4uAi7JC9ooH6n1kkeUki9M",
  "key6": "42fgzEj75M6qSPuJd6quqdWLMjhNyZ7RvSS1WQoeBaE5N6hsWsDuCVjQyFjmS3KA6XVnfYGBi5tkKj1eT5MU9Axn",
  "key7": "3ravU3uEQFEZJHidHr153sXyL56dX5CjotfqLtHrAvaL2Jouw3KGtJYchEupt4tWBaDp6phkshWuVHpfZbCvHRVx",
  "key8": "4wRs14itqLk4y8sxxhKRpTx8vKdQ2DcGASqXsyFurx6XZe2m9toPWXp9QbQUwRvRpoz4wJoCfnGEUMaYCcV1B642",
  "key9": "4Qn9KkSXNzi97QniKrExWKvsEUHFiBRL1nmcRHHx4YraCUsfqRZGDwqomQHybn35YbYEREJdmCeEQkRNd8GV3JQn",
  "key10": "3RnqrHpGJtUvH9u9FDTdo27emJ4kPKKKtEZrHvaZ9ubT1J8FEHj89SDqPJ1BHVLiPS7FCpb8d8co8q4uxWnp6ni5",
  "key11": "49QKDt94RmTxxTcc76c98qG2CiJYbc2Rd8DVobM3K7cxToZcP2EhL4ebELgW8bnKrKH6b3jjogx64Kf5rV39ojRF",
  "key12": "5fLMSpDL9x3EFw4kDAmJN2dqkfG7qywj5Yn4dBy2L8k1oueCuPE1DCRjbxuMJNzfJzwTggomitJh8zDjT3cRTYt4",
  "key13": "51v24ubDcUdjhJLwSoSMJDg2BCRgrgrQK7nHaHw4fDqFyvbyVwZuddx8DVcFCRLo56nhAU9YH4J7zrWs8KvYnyHy",
  "key14": "DStr1q3JnLtMrQ85TYx7PDjU7LGWv5of6ZdeqnBGhWxMU7usAH9CJ9XnQbfUdRxsjCKC3RxqPFPZk3NkCceB8kQ",
  "key15": "4P1UoBVdWnVpMu1LZfcAHQimmreJCU3z7gQ8qwVqaJvkWKmCTHthBEMrkyXEwoGEmqgiwctHcD5pqbRehDj5xaW6",
  "key16": "SDStAjsie9Ud5DN5dcHuAFc8GRujLcxghLP9FAUvb1zxb1kjBpyQeCU9GN7gFjS4LVNB8saorLzA4xviDsD2DKX",
  "key17": "2E7ombPnQpEsotB4U2gHHcbtpzzbWUbJrEbaPzDqzhhbuiaqQJsrw4VLaSb4a7HwfKWwJBzajrgSMstKcr8ahHq7",
  "key18": "4GLCoDjPDKdAGLQwuFUK1E6WgJEhPHWVJYqdqUBrn8oCn37ctTiziAyL3TF8is1UQisTW2EZ4q6tVP9Ls65wvb74",
  "key19": "5xGkwCQVbeyW3HWvqjZUx96BxSjVmsknu9j6BngvonhgBE3Ge92bRa6S4PNoEJkkgZmW5AGcV5G3y7XB8qy3FSqH",
  "key20": "rbhcVbgdBuZyJcFXgWwFdcST9A748iDftaeQ6zsnLM3nskftZ9ri3F7JXxQcjeYA9Z9VCG56hQ3RXKRK9WBrNiQ",
  "key21": "3SvNrRRrm6zJpYGj7AgECDq2Xp1dBnDx5dbcPr25NmQQUeoo2augcCz8UfdDR12JoH6GcMzgBx9EaM4qsKDfCRNd",
  "key22": "3CuwaLM3FwipiJkJD8zTb5Y2Wxy9acoc34jxUYSKd4238kN1YuTj1NRkBudiCw143kJsPtj5qqDvgoURgeUKNkWi",
  "key23": "5oQ5ipBzYg2jXAhsDjH1hAEZucQiN3wrxVzmX17cyVxUAtpoyU8kT2ZKTeGZU1mv2rNFPKwCaTkxone1o3x15Whj",
  "key24": "5bUFeFy4ezEPxZuVcdD311SbE78m61gzyrLUkUP25D9zVmfBM2oi1s9LfqjcAg7idMw3U2otCsGVLjTE5hxmMkgy",
  "key25": "5Rc46hUV2oyMMHhkGxUREuiGVqUjeFYvWSM9okhaKu11zahV5Eon3opYfkHYNjkkwy8hbGz3MPyndnko78p8pCBC",
  "key26": "4vJrbBmnswxTfy3DetzjD3KRkm7Ro2RcivRaLjR6rXEjUreHiTAH7byGr355b6skWiP26uert3wCqkH6pLdbpBwM",
  "key27": "EA6HZwGXVfsED8SzWN8ap95Ep3GMM4K1rc6GHyW3kmewpdb1NqDDAE2ibGgnHf1didASk8vVkRCbMgMT6v9txQD",
  "key28": "23BDM9jiFZtuV9kSi3VDk7Up33WkVxXpzj3vCNoRAh2xoFXoXjMchSb74ffKwVHwaX2b4TPbACRtQKriBbKKom1L",
  "key29": "5zwFLEgqhpBmNT8L8qLJ3UGhzuPNQNm9nx7aXcH2GP6SkEEzV5tiT89sanMn8YKx9q7s9xhywWYRkbzcc3H8FW45"
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
