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
    "4KzwBF1cUVivjZ4wXGdSTEb4QTxCe5qsGppH5UgmymgW7x1ZkzuK2YctRX3nCDpNB73SoFozmSChxLLEDzMF256z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33dsCe6ewtJFsBwE1LmtrQtBKat2qaH2LdJVMVG56rf5gyQvoVe1vUkRN6eMbtb49FddW2SgKh42nA8jeisYg3q",
  "key1": "5dZzFdDXFQmCB3e7s8uQKM7SBSZpCxUZdnuuVYSQZv1pgnTvhcf9iGgnEnsKLw2AuycccdCe6AugXqDLBNqduT3C",
  "key2": "2nSUcdX2s1TaFvukxiTxBQ2WQcAYQt1X2d5mNnKpVhURZ3K51r2ZKTf24VzFR6KCtdptt2PawcaoqPkBicwvm6S8",
  "key3": "5vufJCGTXobTCmYax9GmoqdbqKwoy6U3vpGNvnk5AwN2ZrQTDoX9cKhiJu7X4sxKBQEdpm9ZJJX6zeimHXvY3xKz",
  "key4": "GVXsbZwMvw1wsm5TQcEXpA4WJKirBJme6rPjQPH5DfQns6ks6saMRbUHgzFdf1Co3LiV9GXH9EMyL9RkZaY7sCi",
  "key5": "3LBZt3WM9f5jMkKoEvjczEFK3SZKjXM7n2dziqBYHdMush6ahp1SfEYHtwckabRGk5LQVWZHKMfLGQXECXdYPB7q",
  "key6": "2ozJmK2pNkUstjhSkbA3MYRJCDqofN8oXg9q3yZo8NxWdd96LiAii6wxC4YbtNtLK33GZ37LuVZkoGxp82LB7C3C",
  "key7": "YPY6o9V6kLxQyX272e4pfz78oQsFvpGS2XgqhJ29QWgjsmxQ8DL8AxbiXprCtyEUabxdvfHFjSrU5GXMC9Dbede",
  "key8": "5yFQx4Rfbiq6oWMaSp97HohSbuoKtYhCM8k2woURpVhBYWCskGFzeC4hDzD2FKqj4N6c6Zz2dC1pr1geKsba77b8",
  "key9": "4fV8BW8exLHQJ2kiA8kCLghF4QbUiLuzPjKcqidNjA7V5evBJdBQscCRxMNsqkx8SjTYS3HfwskLnYg9LWpmeENu",
  "key10": "2azLykcLZ8pmSrkXm3Q6C5FYgipWCrc8souDpaexRCCHR8pLUTANHKa5Pjh4p8thBAoUpmueb1R7iKjFe2Wt9JE4",
  "key11": "5g7PLZDvxwwob45wT9Yyvr3uvYYBnzvTPtEyAg9j6oaDSQ86jv3weR93m7Ry68xdFqx9gTkfrk9viRmPKmWw9kYC",
  "key12": "3NCTGDw7KSK8f4dxBsZaTDm1P9R1enpjcqtw52euosZ235ZW1drKzw3U2hbZ2giWzs3L32iRRCNnZX1joGBFcTz",
  "key13": "4Uj9hrJVY35e9x9ZGjYLBM3jYy3sM2g5ANnQfwEmuYieDAwmz6VEhsRfK2L71874Kj3kdRvALGbr2x6TWURPvwzU",
  "key14": "FYDUs89tNWXwsLcpRPdWLcRhUqELNgAGKShMd9R9PgvvZ2s4dEKMSzD8JwNX8WKvqsqZAEGhski3mHAmgYVrCpN",
  "key15": "6DunjiYKDpr83LaQXsyMRNV7huNLsLsP3QruyuoZwZswmrp7EMR7K4nu8598JdGmtnAAqkGDYgPhRviUHyBhKpz",
  "key16": "5eCtDrXfMuk9WNoeuuLsuhe5NoNXJMbw6qCk3e1zE2pSMP45BmHsg35wJXGKcJhLHqgiDXcu7EQv6vv7te2Psiyv",
  "key17": "3bcZrqr3DFEazEhX5Mv8n1L6vrMbV8KcJE6yYpDEMQunXopX27uT38PTahw7fzDCZV22KbAjJKbQRQ38GXM75Mqy",
  "key18": "22PjpC8TKEU1coxEGMdp22QULx856Sp7PSWhjuMcrTZbhEy7ADK9ChzLvdq2VHUxFM5gjeVAw3F3Btv6rKtg6A1h",
  "key19": "kRwLAagGPfDosAJpBr7PFwtaXSVRVj5SRXkrQeVrKbZx3Kdk9rxgohv8MDWAuf6vrWMcYCdWqfGE6ekoHFmbQyp",
  "key20": "4wGw3XURUksGv8YqYdPXBtJCAtGV1Hrc9QaGyfW241m6R52Lfaj3i1zFvzRLwcgNWRRfeCe6vG1xNvpQMbAqj1W8",
  "key21": "4PaRFr3W2q68qMf3Mzevh2XYJSpFYeJjHr2KBzLjS6RP6odfak4yxe79dY8xRXwrEXVDqci4Hk8Bp1YsX8JP7V9q",
  "key22": "3kxxxCvhwoYfX2RLobiLNa1q2ZmoTGJNMHB6SFWL2N59fg22Z67Ynuv5uSUWqWhcENbCxveZXWQC2aYLvDH5b46h",
  "key23": "2Thxw1zUgEQXrVF2zSK4UfGJtcNqRX4uW5sJhZrBBKpZNpTYNYUrCceDBgPpFE5WaJkpz8LGt8LhP5v13dCKqGeU",
  "key24": "bmr1zYbx5tPr3eaxVvUKVKWV65ApMzYnjfgQzT6BPqvSjnWGV31iaWSbiMb6rw1S9ZzxPs1rn7bMfQw6kKJ83vk",
  "key25": "5Gqr1UjkuLpfJWBDW98qqXxJKbqvXHqibVebKeLecV2hWYZGwz7uSGdMuErvgk8iuZ5TjjJ9ycYVzuvvWqY9uNFZ"
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
