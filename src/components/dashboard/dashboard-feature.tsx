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
    "2QQfkM8VfxpZwktBLEwzX99dhDTLzUtqUg2qAjh72p1gTwv768zj2dH5UcUKsHMauNw3e7vp3CrLcHbmqkzXF7to"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9ZRzpxHM7HQZLZ5fjPmDsAg7JUYVk7BcsjyidNnRpCBniGTAA6XEftkn7XQScKCNF8cnwVHjXdvxt4wzswxRQv",
  "key1": "2pPTWtkLv2FxXstCvde7siSiaiNsEixBuNQT1GfbUPwwKsa7wSg53bF1NSRm9qmUwvZopLnQoqXaiGrbLZ4874Fd",
  "key2": "2DVhruGQhCk28atV3uZjzwPLYVPUivZHTEUBubsar5gGrEFzfLzznQCUcBF3W25jupPXuQruJFCGSqQgKB8dx9GY",
  "key3": "2AxGKUk2xwi2oaR8ujaaS667ijoKcsr1SJ51Lk6qtdsFZJmzVqFfdcZEZ32dfGSLbsPhLTavDr52GTGnxcY5Yy46",
  "key4": "5AhatEZu3V2u7ofdbxasBayLtQ19fVa76dk2KvDZKFRyHX2NvHrbi446k2bvmanBofS2swwd1PbGcycUJFxB5tXY",
  "key5": "34xHVX7uWVtQbSMRwHW9LP64Yv15QUJhvCoMkJYuWmPibgAttrJLWsHT2ggufyroeMWnbUy1bferrW3PiVpe8poa",
  "key6": "2ZNKHTbjv5MK8oFuPPGAubkX7UoKRVxzgjDDEJ8TPHexUkrG3VXujbgKb9BsoVmMQdZswK5UAECxwN2UE81Uwq1r",
  "key7": "2VAy8Ag2f678NszYM7EYCozJjdMdvzjFC1GqugeraxSy61HHsJPrCNAkXCEt15mgycGTSgS2rttvEKxCMXhDFDop",
  "key8": "mqhRPzzG8NtDLgJa624zoLHSVyG7G9AEZTwzQPPBsF2dq9nvy5C7nDy6wFD5ezTgTH5LcBDegsSh8egdvtgFAjZ",
  "key9": "61dnyiCw7YZq6RJstQhZfKTtFZJhgCt3N9GfomPPWJ6oqtFKrF4dx4Lz7RPxjhYVco77v13XSHwuJwSSMzax7yCE",
  "key10": "5JPZ3iXsFizx1Zo33iEF1Hf2Z3FiW2dEKQVN6x9eC4t8HqtxE5CPyHPnSoXpEuSd8o11QRFR3Ke4GG545nW9o3LZ",
  "key11": "xVTKR4y3QTiJ2xh55SSi42oriWwZA1ogAZaK5ZAzfm4RuxxQhnHYEpa2ig4hEEzfBYfFbQCrfREmXsEARitvH3G",
  "key12": "4zkTzuyDwKxG5ZKQ7JZg72e6uqQQV2VbgW8xLuLabLM5sFjrJ5UvZq9HaJ5j2UJg5oopHhHGaGtd5LVyrsk5mFmy",
  "key13": "63NCvmX8jSN3mXNYN5M6JKszeeEkvpXD1k9JXvkaE4vUbhcL4yUH2khfkdX6fcNaMAkttEvU14bS13uZRzGCJnwb",
  "key14": "3DdA5TYLqiMDVmXUyaa5wQVXKxErtELYR71anxhKAPWsavQRTMtQsh14gQwBEqke1HigJuyfmE9KU1v1TasWTkfM",
  "key15": "3bCbBTh41ARTEjGwEQ5MYUBrFajUMvfRtwZ7pXpA2ZTHByRmzERgh9cEtgKKqfejS5Eq2uJdb6tDffnkFhLoPdki",
  "key16": "ExXBpkQYV8SLMGdHjDngBv9VPHSXkZgMKFfbNuQrUDtm65c4N2V9LSpCrEv2ZmXDjWQoKPYfX5Zbmm5SJyqn5Vg",
  "key17": "2A2MksdPjNtuqcjGzvCSFR9pke5ee7PvAbMy6kr67YgtsruhXdHCGhZNWQQCHrY2Az9Mdz9oyeiMSXS4ii84L2YB",
  "key18": "5pEkCR1SC7U1XGvxr86Q9vpcpfFZ1aNmJjH5XxuZg42hptpzLpcCN4qQJeMZR9roqPGv9f5iPDCScDME7AzpZgUj",
  "key19": "7k5za6gFYDFLiPYtk2w8Z85EgAzQHaSh9nzh9zbdowRDbcCp51nhH2smTeiWEAWr1jHtsJQ3dRvwQ5xiu4ijaGo",
  "key20": "3j4aWhwdVMfq6N1xxgBSDdZkkTzzVtdwKw4oku3UpvsAL5Zbx8vQL8ML1kY8o3tEnrq6bs9nq9SUTxqQpdeYfvBF",
  "key21": "M7ZcoYrv3LV2aRnjLmS8vA8Fs1b7L2ppFxAxMgaHYqw1ymcokyG9GU67MRJ2gAPaSMM3Ygcjjq94VJx2WzmGVpg",
  "key22": "4R1jmjneoRNovCWm564ndsPUputApE3UCN8NsvuHrRkGqBsMLL9985W43tLPrZycArMqUY4d8CRaqaGZhH14hASr",
  "key23": "3qumpDdRXdT8V7bUpGGgEaKgjoAm8Wz3rKYUNpXRJgRWMxkSmKj41vPB9ZVGU1Eu5ybaCQWUcSvctn8txEne3dyv",
  "key24": "5zLmSogygz26qGAwuvKTqLmXzFWuNhLi76ARYTXa1zcGEw3wpEcNaa1MF8mgDNEwyxE3Hge2oWQXCaFCixPrZsUB",
  "key25": "3fsRbScfxYDxqu7Dv3vZ4zm1kUbWupwCAWq7dCBs6mDNZ4ZnVtZtyBt6V6J4UZh7oRidH4tJWG9w58RrT5952yHY",
  "key26": "3WrHtvq7rLqcZLV8GGKmmMdyfj1F37rQoWjE2VVWf7ARJdzVCMgoLQDEJHrknENYHoXQmTxXYRHJMY92kvtqfvnv",
  "key27": "3hqYqXMMfsbJ1v35dKyhmoChmLfkUtTZx9qu64DaUY3SVwD7wJenBTMy1wxzh9AqdRysaFxit7V56qoSnxLXqvcD"
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
