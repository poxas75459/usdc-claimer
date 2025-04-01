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
    "2j5isLUXaFShY3thuouav5Hm2jqRBeTDE7K6xL52zzNX5dDz5azByAidrDB2G5H8DWtiYrvFznwgTfqrGeQbT3mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331MDKdk9nRDg4qexr94pc62CVkXNe2gwetUJPzscy2LANwgEcMDbaGzBN1ygByPmENDDqNbtwP81JX876iqPBcs",
  "key1": "28VLSorT3N29k7cwpNZcgjDANTyRvXCti8TYHTXMQhBfHxWhuWeLshq1U5JiXqay1suo2C4b4KkF7gk4bjAx9ZBQ",
  "key2": "2zG5pSce8xEwgiBi3qWfYojiB4AdFMKodG2cdYmENqAXCkogRT17LMHc7S9kcKQZgdJBpdzHuGGt31K7JciBBFDP",
  "key3": "4AykwkFMx3WGQzzM5S7UDEwWs1rg1BFjybLKtNxqhL7vYRv9c9gKZXi1adKk9tCnCMyW9uFfWDawAJQ19jnMWCy5",
  "key4": "5Zisvc61GMxQsiv9BTh9uoY3mg6kRiP5sBbD1G4bqwqsraMGMzr5GXbgxNvceJZBMWucJULyyLzKH9CHdGoxfcS9",
  "key5": "eT5vkGG38KGp8dAF6XBDScgU44owfvznB6abYSvMZGdezNgAYHkQubbhjtR52Cmj71veiXCqx2GGqQykHfJ4EQz",
  "key6": "4apUfPkPBwMFj3FgFrjbTqznkvQPsmySNsZj6S3AERDReCF9jwAFwXeBMHYyZdPo7qtektfjJ3pjd4wqRHCEVzAQ",
  "key7": "dEj8KEfK3cjxYJSM3PXQKwgk883dvriM1EiJ3tSHFvUKwmUCEtxPgNMyUKLCMGbSWBNmf1cZ3CNy2pPeF2tGo9z",
  "key8": "5Xudu2cRkNK9zMgGybcL7Jxxt2QpN8dKcGZePysDFJDtRbN4JgzcVobrmbNtiPck3ymo5RPXm8sdNTJmV7vctvW5",
  "key9": "56AKKetkUpNTbmovU6wFAxrxhKHVX2Hx7Ncxi9VnQawQGdaR7QYyrnJTZj71aQdkJfjBCGwd3zt2TPGHZJ92Vf6t",
  "key10": "28eZB6ZNaxCLrcfBjmPpRna57eTtLe2Kewd1XKo4qffNZZo4JCyJH8H99yCm48vqA6rp52nWBRc8hQ7PeZqqkoJy",
  "key11": "X396oZcvEZBGLoZWorFJsqqeqkNu8ttH4v9RikpAokXFZPpGnWc5nCH5Gy75SwMGUMkv9z7wVgm2EDspW68e24a",
  "key12": "55qG67XLvQawAVEcdPYB4p1tfHa3ACap6Ab6yiMU8RTQtYhkoss7X5NSWaXxpbHgMNqXZpC3oyM4EXkTcbHXS4Bf",
  "key13": "2k3sG1MVHSzcbWM5avijbzTHub3vwzsPyWjWAmfJminAtdkHTdthRGPmHyL6VBfYPwhs3GBxRydmrkNwdpGC7ybp",
  "key14": "2DzELSBn4Ju8vowScY5EpR3rrMGsP8hYdQALSW2maiVZSzHtKq4GkL84MUBdsn92XzWrrCJo9HAxMidenSmAHVfp",
  "key15": "KNavJTWVLpPDZza9ZXkTgy3kp6oDHx6wzRbrpTEPrYHzCJ7Er5WF8KJ9fjTugD4hQxiizLVCRjn4DP1AKF7y8bi",
  "key16": "4BuXbTWTCFpUqeoBejDgyzLoS4sj9ExNSmuAsEBkY8NxNPXkNgWze2mbefm227EWtsC4vvMJyFupSCW3jr2ysXqe",
  "key17": "3bgAh7V3Ve4QfpcqVobXFBEWwgS4NXMtVEJ6nyEKgyJ36d8tEhikHPb9wukMo26u1NsgGTaxmheCRfVi8Yf5yi2A",
  "key18": "4bmmER3e6gErbi6ayYPGXnWFf9mHsJzoK5wFXJT9UHF4Q3Ed6ZhQ1GJw3pEZzpCo31y1hNFZTriURWy6D6atP7Sp",
  "key19": "2hPai4v4arDSb7nWgqaNb1iZ1NcVUJQrPrLGoFvyQk36cuAa9ngccHzz9NW9AEj36k64MXhhQ2iDrndp24SXyzPX",
  "key20": "2wDfTjWSThyvDW33eLkDcace8AGtr4ghxpQsdyLB7EEXFAcNKCh71EZ2D2tRsLDwJSjbKoVPRebSuQUmFgvw7XGY",
  "key21": "3bBEbiRt88csBSW62QKJpLQoUHGgAzNh6xdSL1tb1hXWPd8RCmq93b6ZehBQxa8B9YEWmgMKQQF2KF4Mxs41MKtn",
  "key22": "3mQeJ4ZdpdeR7dosN2yWhmGmafzSXrE1aqi6K5hqvxjTb7NZEHhH2eNzQyytGwGgXuADnZoc7avUGeWb7xXCXgh9",
  "key23": "5Vq2mSV1RuPyZiewSdX8qYp5mVbtFZDERT34JXRheD68th4Ap6FBvq7zjnCNwRyWXxhAEjb9rrLGyv9GEHBLgo5U",
  "key24": "3tUsCUYdXVWFF94E4MVQaaR5tGmgRYKybCD75rQp15pYTZdTdWNhD68vfbvbSvdLTx6doQKXSdHdCjeir3FJ99hQ",
  "key25": "mWS6Yfz67CeyhUkEaofpfMR7gQ9ScAPTQ7SdDAbZV2vvMniJhnBMMrgTcHbFP7n7jTQCTy1BpfCzkzL4d9sgtEq",
  "key26": "3zoRMoHkAoYfdsXsKZoNJogpSEBTJkUj8urgqgbdggEpwXpCphG1pqLToAbbyvx35zaptbeJxbEJsLnyyrJwKgXU",
  "key27": "MSsvgyxJqMx3ZMwzABsA26Wa8J7euGsaxFKSG4JooXbBbcbavq3cUg2m4xyFb7PtZtRPo5quWhCGizXFhBf9Csf",
  "key28": "5epmiaDFLhfvBFNkXJQ33vNBKJriySFyGsNQeALgUApbjcSjKyGkG7q57szC9KKRJ2aYPZm62VV26zdyvZtzEYyb",
  "key29": "5EdSWzoDdtar5jNSApurdvYJjSV9q5xoKYLgz9Bjdnd73Sp2bxkV4nUhvf2C8cjL4Q6kdqcqeRKc5tpz8vMY9r57",
  "key30": "4gKo2Lscoadpp1wdimFPb9c3PAPd182fD48vSWNVPJyfsBk1kjj7WLGdPE7tQJiLfT1x5Jxms9WNJN1PS2BQRZrJ",
  "key31": "5RQrjEQfLQFLWD9hcSDGN5nMV7iUKBWqRdo1a6rutCEhqze6RH2M7i8uP8oBJ6LmUYpeXct4beViUZMgtc8ay5Z8",
  "key32": "4TtD3SJJSwTL565Zu6SwtjipwkGxfyAmX17p9Zu889appdWnkm1uwz9rru3DydWqtQgHFpoe3wbDUtVwE2fCGtXP",
  "key33": "5iVummc222fTy5Y4ss5SW4UdunMiUL15nD1hPHVNLMMx8EQHBo7xtpiHhqq4jRv8LdGvzQJefsK2ppKsRFKpBPGm",
  "key34": "jbNqux2gf3FWQdBbcUKkb2GhttDo98pUDyMx6GRhCHFpAHVShM8TTLTNeW8sWasY1prsCEn7yqQwJdp1ntBnFvG",
  "key35": "3wQ5dXMnpQRcJzAizf6n7sXGi7rcj7pJQYrecH3K7RAFPC4VnsGyQnAzqi5PQNH17NLAs7iDymJNSgv2ddgasS2T",
  "key36": "zesgzY1MqVrWoAcZSfjcdwRRtNXyBHzsm21fqgjeteJWjBw1TDeFvWsanCo62UTVv99inQoCTkVjcpemSWf317A"
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
