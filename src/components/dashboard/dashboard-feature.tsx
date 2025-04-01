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
    "21uRJYkeaqF2wq4hsGvE2U3BFZo4Veb2iLoAiyTLLi65hh1TprMbnLsTicTd86XvUq9RggWrjXKRuYPF4ahJsLx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEecFxZoLSR3ufTgdXX9hVrCthuBNTLmpD5rQvXzbka1VrT2vbArBTTXQg3QUxEuGFzt8xv4Rq3Rp8kVwm7tPcu",
  "key1": "47ZUwtmTJV1WQDv3HBvgAzN4KxXenjW7PRWmBfGqiWfmSSqvAScXraBFJyhbuQKFt2j8ErcvrifEAdgKQefiCKfo",
  "key2": "3JWUx7eoevNFqoHAoscApJEQksqFkEn5zfKwH4NLUP6CUtuApxksezPJToTzdTdVxkStftJVzbnEyjwV44Kpynhg",
  "key3": "4GqrPTD18UoEceuZHV1PT4VQh7YjjhCqBv39X2YjC5Chrush3nMo53XG8DqtxNGtHhzBiEdEJDHCy2ozm4GtvoJw",
  "key4": "3dHftpPwD8hn2gLAXXgQwZUznhd1bRzR2d2bNhvU9BJSAbDaKLijRVZ7YgxZzwnPKrnWmzotQZpxmKwh6CNzpXeM",
  "key5": "58AirTr39BTTDCczJoQaNVSnBzZLgNvF4CfWkZrr2Yi52fFZwojppTJc9pJ3tCLiWoYW97226AwxAqeCghDAXwoy",
  "key6": "2zM3XcLXAyGU6vCRFLry43DwCa543CqnF3XZ3yZifKJVNB2cwVFUmby33ewt8cqARjpAap3SFDF5fMPcfLAQS2V2",
  "key7": "3Au215eSZWT2pm6HtKQonkNiMRsmq9nju5g65pBkhieow7RVqCyowPNohMMLHbGDFGj8EYFXzsLPdV35ekgRDxcQ",
  "key8": "5M7nFU2jLifCk5AHqEazLcRC1LkY9rsXCDj6UfZToHmKf1uB9GjwVdL4pYDMDg19QWqbH9zu1zgkM5yjtPdHr98r",
  "key9": "56m2yh3hN2RCMoSwMpmuCyhbZRpscG7G5PmtZaA4Y53goEerB5xFT9tg83N5AZEVq44QzjKZmYL7dZ4mzcqm8QaP",
  "key10": "pHEen1VayqFqCfKb7ooSjgxqKJi49NuAkEVwj8L2NFFBLQ5myfuvvGAW5XMApZjqdZSxBx7stSqQEzYN4YdFGX5",
  "key11": "MXXioNmvPRU2jx1wLYxxthXfL5ApKzHV9xSk7jLVqyf43Y73Qu5YWE4cFo6r5kz4JsEzWRMETvY4DLH96fiwsan",
  "key12": "2e7svHYY9aJn9JDFGSvt1N421zss5wwGAJQNicAxtPC8gAb5ULPWJ72zGTSxnwvn2tQPd8vvbk7ADUPksHkzAfpY",
  "key13": "4Yqhx7A1q2VrBnsL9BxYoRVPYMVAbhk5Zb754yVquQLgBLADoTzbuzQrniZ2w3NhUxpEyr7A9PQYAKQPTPRtkLoP",
  "key14": "2e7xoKWECqW1616EjUUJqQHJstbYAX2r1dbeVyRPqb2czJqrDJdsMcXRHHj5uXQAvYY7xbfNFhtjcU3BytXYursF",
  "key15": "5zn3yemE3Wzr4NzcsDe1Xdpvi9bbEGBhDzitRUoTHLda9CB4p3XzHeAE3dyRPZ2caGf5LNCEUqA5fkWKQPkopWr4",
  "key16": "4jFPf7un9jLrtxXqknhdRWfbFazumhWm9tFvVgYwQe8Ldiip6TrpRakwJUY9KRUnrv9vGKtvRW2fstnmGfNxNbS5",
  "key17": "oDtgtm9o2pLsvMLw25ckDbnjgM4dfPGXdVxZ9Fe1s9S9RME8CmodJXM9quQkA1rP6bRaXkeuSfQM6EdZMvzdXDN",
  "key18": "63ecaN45X3yvPA1ZZwkxbxmHA6eJ83BohSMZRpHQwCqwxHUyY6fKGd5wZaxSccLYpDkmHgMvDMdnvsiFARBLKgNm",
  "key19": "ngS3UrGzpn4FhC1ypkP1MfVXuM3PJdY9prt6WA2vFSkxn7Dj89cf2wGAxUJb8zyFDojKWDdnprY3N8MGAAG12Ls",
  "key20": "5dR6vDwcXWeLC1qp6K1cdb8boHTQ1S3CALbcyX6wSTJSQoP6X9WhtHSnQK16Cqvmmzx3yny3YCN7AZaW9XokiK7K",
  "key21": "5hNX7H6RvSbyZyRWHtqmbaeRTvT88rotfXV95QuUKpi8XB6gavqqSfDuqWBrdUmxjzwQG657knpy6nhtSLx53VP8",
  "key22": "24PBUfKULLw9KnusbVERAocH9qabj6tEZ9LTUq8Egk5dhimZczsQFFGWHKg3W1PZyrKTcm9ZNxQvgcE9GEuxKnud",
  "key23": "3nPgUT3AeucmMNWkcgGmg5JQVE5zmnpLdf2Uxz3yHGBhA4PdQhE5EyVWBDGC8Jx3a6wocAZfx6FhdY7ngtZCvzWh",
  "key24": "35FxznyTDA936LzQsjAPrx16wa4HKfbk2gpYccNivMbDnw3RXT3aLUqsaReMviKNSrFCs6R94KZX6UdPKaApU3Vj"
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
