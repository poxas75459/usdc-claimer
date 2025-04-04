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
    "2Ecs8tzpXHqFi9p52nruGxLiSd3oNLVroLFFpvQp2bJv5K2q1LrJhW1WcKgCMbFgddUNAM48DJbzPYkctfmjPwS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jNpwtT7WQfaLkwkjpd7yQxHBtnUunyNJNa6jWaz7BzTrCDxFEGtTjbLa5zwTsERfk8qVykWfaigsp2cCsYvDFx",
  "key1": "4MtEQWS6sA2U4x8bwWmrXMJdXyh3a6wsfRWtPEwJPRRtws6nLYtknpVixk9g1UKo56ePT7oENb2pB69YbW8FH8xf",
  "key2": "5b6WE7i7kgRAWtVSY88vBhSMVHF6k4bcTnw7pGgzdYYT9z4cQaQPuaTC3f5x9NymFYgfs8zo8dtwvJZJfhnjut5f",
  "key3": "39dpVSjQdWPyMJwiRGjjc5XcFs424fXkJC6vqCrmTcPqCRLZcwNrCbvVHArrVWm6W6W4Zq97CumyazEcPvVPSHcc",
  "key4": "3nddxt6iRYsijxX1RBjzethC86MaUeqaH5NK3w2gzmbimui5bvp8cPRddEj9QzRQJMmck3ugAhswmXvFZzgcuwUu",
  "key5": "5mZMmW3PkaGQWbHft2He4H6ztajoHAkWSy4U4XPjkDtNyWtKNtG2oULL3cs8Q1SAdUmhbwwzHYU7tuajTo2hhox5",
  "key6": "Wsnqe9Uw8Fs9JcjvnK6jNMDG9FC79neBTuakatPwgNJiwFAZicgkYV7JJdp5s5TswiCM4MzFTiLZ5DeaPuHAdzd",
  "key7": "NgvsWX94pZnPvwC6FREYwdcxm2dREwjDReEg5gS8rDhEcD2SLaV2f94QH5mGy66VAsK48MiUnfVrY3KqkRz2uce",
  "key8": "4wSPVpMse964LeASiUftSBi7biyguGb1QsCGSBGEULcASYt1DFCjfhFtCNgLbjPArby6NMkSU4t7gtyxZXV6NxnT",
  "key9": "5JNyVfXPTgkGkDxfAH63HRAREiXqjUrxMnuKV9mab9PiPa9GcmASqakMEWW2ZMAnSMfkqkmRUFWYBEDoho64MtYb",
  "key10": "5j51KdotGfgWCx8ghXqiwo7ebtx9otf6odc5g2CTmcRsJxryp4MyTY4x9c8sqJG3amM6ULGz1NJucDYgtjHNdaXd",
  "key11": "52WfGB8WpQGaYdZWEPLvWeRw1T6wNXjr3U87q7VEDd1BxS9yDBZJBdTS8zRaWzv95Rozw6HptgcosjB2MUv7tGMJ",
  "key12": "3eNNar9ZtvWckf68P8Dywz2zTYwHvvjbUongNfrg3fJj34ukynSZ6Hao9a2WhwNFMSVquuqB9PkCanjktmtwksrq",
  "key13": "4GYkhB6AbPmkJp43F37PxVpwRGPdNmMBnzYjpvA3SWdZvPqMQuUhzrkvgqYfaWfH8piFroDjSiv94WdBW8rJe5K4",
  "key14": "63YnrDNHo4ZKxwuQisvGbfa5s3AC5vZifsfALmztBm6Tj1aNM23T1TuyVwRvFaE4GcX7ducppkmewZUZ3NPn77tu",
  "key15": "5AXrvC2a1oKeuUiBX78nFzsteQgzpRSnXhsHmNzXnzs9bVGPnbrMPw6BjJfPddQzqLD3XFFDZXNRuRKh8BkKtRuy",
  "key16": "3PQ6qRbC7VuR1QKYpzPWF9UFVCvcG1yQsY8apT5aQvXbP4UgEMuGsh5XUTCr3V6fANBQVxao1G4FZeouiHHYf3eu",
  "key17": "4ScegLt7svdTBvAYwREuXhxB8jKcRHL6S14H253oZRN5mBzyD2xanJuFywo7kUAN2wq5pzHaUABL8tEV94e8Qn4R",
  "key18": "LeL3Zg1HSNG8ZX5F4rS5ADrxuUePZG6bdQZpznGEKTo35o4Nv6s12H1K8BJR6ihhDWvTjX3zwGmBuZ8sxGDH9kd",
  "key19": "65yfPhQ7pSTAkzE9RwCRwLkGZW6ub4YJt7iDGVQtYzJrWggoFMetEuLY7shUfH79sDxdY9vWEr33FSXi9Qt6kDND",
  "key20": "2mrxoBjoJyoT7x1kPGCjLNLS9f2uU5BbM8pSKBXaWTERmbJrXisDby1pQtz7cUmHKpb2QPLW2EMpRuX7kYqo5Rhr",
  "key21": "3CqDFK9BBxkfxbEtYmvWV2fhozi96CeqrStkUNE2igzHRA72znF1cjX3XgM73D5Zn1m3VoEtFNvH5S5E7YcGW9Sd",
  "key22": "2DSCFzwtm1DoVbsnFM8SRPFcPqc8tX8av5qzj8RCBLRN7MQ6gzB79pLTF4XVN4wYoXkweWApBQSu92C2KkLXbmLy",
  "key23": "zQhWVpyJM8q5zkA6sMxFRfAxXsZwLquFRuFvPALJwjhdzhNjJ19YQBcHiCZ5MyXLC8TxHUTro2piZhSbt4XGGyg",
  "key24": "4SLPdAncJKxjitmnn6m7xHnaiRZZwYY7abHt5rBKurcxY5KJbQ6e3QURtV7xQn8LXMqNUPABofF75mhsW3G2N8yL",
  "key25": "5yoCkT83wd11SkQKDjLHoSRKVvDZvyjbTiMhuKZgzKt1Fis7mRw8EWLZSzdySZfmNUDp8ymAkntdXhS8QMzgUtUV",
  "key26": "4pKqbPqWdG9EB9xP8EoCNmWPKwskJX3t9kNMbj9BbFwsi2xFVcRzdghFdF8m2Demkn65T2Q15vwHNkhm1cDmcfuc"
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
