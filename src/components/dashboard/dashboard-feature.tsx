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
    "5erViV4RfS9aTJijE9XTCzH34ZYMWyKKhC1kMWrAjtp2uYDJDh6TmrCUFCeDcRWpLa6r4eHJu5utSSQw8tmNjHa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kGF1NxGMNSt23fRZqEZ8WW9prtG4YGsQh1TSbYbzXZGzcZUN9f4jy2A6v7EvBbvDFQTmrx5fRuWet29DFyvXnm2",
  "key1": "4JZGY5Ywt6CHygcpsNop6g8epXWaqMTrEeUX6n5umY9Pzpdw72vy7FUN8NSaPKLgjkpZxfuyHKg6ykKs4xrBsz9R",
  "key2": "5oJLYVovXdwGj8Rr5x5UqQRu7UUrfcje34fgJc3U2Y6xq2r29EnEocW9652DywxN3BP94S4emEbsqco8k9YQbYW3",
  "key3": "wBkwgwpZcSDsgPhV8XiLpPZdjo2uSsavQ68ttL2e8M48ebGjNps7seLupxGCtfStZACR73aTw6o3eCZjeocru93",
  "key4": "5moS4NBpfKXYHputqioHbzbK9L9o23GbDUQPJWgE2nMmY7mpZJT8UHFYFU7hEcAjjnJmgFugmei7Ca4kZDUxigh1",
  "key5": "yUczghV1SRjGwaAuNM3B86TF7KR9qsacM8X9TfptcASv1RGSi1xC7uCUQz6hcVeJF3iHohQAHShusTwMXA3b3qK",
  "key6": "4QRX8uFg6WYdWaB3eP99oDgmht8nww6rj6GKpUntpHZCPwL93hxZMrogs6P1d8iDH3eCEXDBvyVho71egDBgNSps",
  "key7": "3w3vWD2qr1K7NcvsRuNnhNg5SeYNjV83HVyveSs9vRf3iq8ECZGk2pEsr6dy25c16zkd42hWDWihYETJ9e2YVKLi",
  "key8": "NjjEYtrQQoVT16Pe9vrbLsEnA3iBPeeskR1dzqD8vubXzUt5pVJaLbTmFQ1dLfjFhiJWbKnNte9ws77gFuYmBFj",
  "key9": "5WLbXnvkLJXj2R8p11uP79XivEhUa4LoedSf7xS715C65vQJ7idtAVkd8MWEnpzY9NMXdqPAXyA1QPW9DyrMB3EL",
  "key10": "42n3VkWqRGb9FfPQcEADKXpA62cEAYHKgGZzYvW3KTGwnyqaKFp9ta6CogU1j7SLfowhBoRbaSgqfXjViPinMbwc",
  "key11": "4LvzxCrA6ixS1rsqZVfeJETYmYhuXgXQhXCe7si1gyShXyVgnoSgmJZL1sPtBS31ypySUCyctT9fdqfSNJWeAkGX",
  "key12": "7DYfccC7dvyZ5zbYGeVD6ix7hE2L4aVuum6WRLhApJHmtEPYEEWBpUWhcPMazgKkBEHVip5xPzxE42m7WS497L9",
  "key13": "2QyVARwAwFHFric1uzBrjshNqUT72UkSZcSw5iaYzFK43q2K74THVAxxyVK2ExJRZB5odQNuGNmmtPPo9aSwqEyg",
  "key14": "sBDA4ytyVDdZMzMBd1jFSfPdfmaWnNF8B7ibXVtpCZTrAy727fxUHJ6u3Mqj6mk8ATjPQz4TL45fmfo88ubSGpr",
  "key15": "5VuBD8iksrhyYiYZgZJtJy7jJV1vAMyve954hWC31AFiGpGUCiSf89RtASDvJzDUfdtqkTDkm5oaR8fxZ1fKZKTN",
  "key16": "2Z8cgN2KtZg35atnxf9UjiSrjc3QfHn4J8KjM2ZwYzCxgcvN6hsK38C8kwLkCyo1d39GLpThozcnaDcNDioBa4Gd",
  "key17": "2VvHD9h6YUMiyQMqaLoUyGeNnbAGQztARK7DsirJcozB8Z6Dk6AenD8VsyjcaTMD4SKUcPBJUKK645gaVvsKLfPL",
  "key18": "cw7YtuMc1miy1rN43JU3z5SYopdzsSdEQ1bqsnWuYdNAEMMiTyqZgthyX2DGvCESGMxN7aMXfxQMGkd2c6GAb8d",
  "key19": "5S9oU8TywvcxnEXK2ofYW1UJZc6Jg9SwCWMFmu4W4cKF2UosK6tirfhvRdmtwaGnpzzWnEwFxJLQ1qMyuqwVCZPh",
  "key20": "nouwbavXtgBFUSivh3qijmz51wFqm27jDFQFbQPghkiUFjNZHeLEpP7TcxL3N4jmLNPSBwKrrGiTtzdwwuFbTaH",
  "key21": "3m4bjxd1TZtLvCgjE9jiA5HyuR7VxmKrUeyQ1jeyXsySSpFs3xvoCFRKmAJoyDpzcur9pZ42DSgsGfS62iUEu9RP",
  "key22": "5G1YsSXmraUxevF6TfXKi5TiaeurmbwywDur3mvSnHNinynC3jfLW34prXaNdVmRFNVNPxdhbbJX6KcHmiXfeyzj",
  "key23": "5hvnmur2ymhNZpt5nyaBvfvd2xy4xCTR2kRKACWnGr4c5KmaHigHcbRBfdwtTydSipxa17r48k2npw642iovLNWc",
  "key24": "yQk6nLLGHf8bHXCxHJ8vQDek3hFhcWCYSqv8RpXS2wPYhEH61gJd99o6u7qpKvk2KCMHpiPaR4dZHkSm6dUmKmf",
  "key25": "2a6Dedbkak9X5frtQnzc4eR4S5h2QB4FTG919DVbq8NwJayGCFpta1WuSZP91xdJRGgPCy6iHuxXys2SfcujoWWU",
  "key26": "5TPNj93g4wsUV1HGooZjW5eQWQHkVjGXqY9HsocDwNQsqvwDURrMXppgDE1bLdCtZsf8isF1NCxD19Kh4xTZqFmm",
  "key27": "4gM76HewP656Bs5ztbkPzjj2ht7Y9KuAAPcPzgo21vUL8AoRUNmfaK5dMvYNFhH3GaxmYsGUpR5LY3hxVMMNBr4z",
  "key28": "4cULvi5fKiwaHo7yfi5fHBfq8GsCyFjyvxVJBLBtFoXkWrK3Byvp1AANZEfN3Vrt7rBTwpg4r5XkRdrxZswN1jpZ",
  "key29": "4rQgkewvFYrh8aTGaPbUAZTZp2kTVpzPZhdjZLsKh6Midvv35sDHMyS3ufz5YX6nGpMPSniTpPXcxVNKBxxShZyE",
  "key30": "Y2kxNFARBJifNjw1Z452pvodnTrXvY5gDcynq4Nt3eUzsq5m7qeBcHz2gRc1fuEGjMea7p9UaSh1WN6G29XtqQ8",
  "key31": "62HvSjcEKLYUgL7HxZ3sueYEMrtRCXedSvRGq9EUA8pHJvLPfDXWL3hASSDYrqBgyrhm3dekUz3C34JCbrrtJdoQ",
  "key32": "2HyMQE8d7MjpNsTaNUkoYn7ru2op67ozRzEXVpxKnS2aYkAa8gii1tSZ4ExFosmVvMiTrvVwohJUS3SoY2hS3VC9"
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
