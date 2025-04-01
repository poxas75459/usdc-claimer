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
    "36bE7UCr2Eag9xaMZkMkr8GqUNLH4BBAqYVubXLb4CzU3ZRXD54TkaXvFNN3SwoiJKFFwS1pyMceG68wjmQZsfVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fX7TDNsQnEJycYrSb6iegN38WBygdSxet1TRTKaxyC91zADhXa3sV2r76zVNUpNrWAyPP3xx6E89xLUaf7uAaBm",
  "key1": "8otQ5fmjBQFhz2zxWmPvf7WapDD4kXZtnPRUotC21AusVupYqatUCmVrmX1vXZrHSSUbby1WhKAR9VS82Y9fWak",
  "key2": "3x16oHYNqAdHGxUV9igb8nGBwSLfrdtZXXM4wFF4C7iug26ATroPH1XSuyzcraBTfEhL4rzX5dUMrDCmMqfhVxy9",
  "key3": "2Pz6JwmCzmQ2PX3oEsntrvPimvpYbRPkxAg2tRJybgWhPmrRUwsV5HWo8fzNejbx32TTeSbYxJZAhj57XygTF7dX",
  "key4": "5AGcbAUB2ZHz1ZNHSn1EzhsdHjNENzyaRLwZGtEnmXH4Uc6CW3Y1VnQ1XQdsdHh1jR3HwmnykzAS2somEgWxRfmw",
  "key5": "2RnRTYkvaryU6mHCGg5fxjNvV5DJcDiVrZ88iLQBz6uNhQbGzqVWeWKV7SBPQw69GdaivjFJPxWxeTR3Ey8MYtqk",
  "key6": "3duTbkST6bKred156ACdWv1gsY1eqt52CyN6dvXjguAgdLZbjKweAmMBaEu5k9eJFr54pnkWdz4orhfikzpc6xtS",
  "key7": "guNtmeeWN85XjNzbH4YovrSWnCTGwUVokt1hWZ7XVFLbmcVfQaZEeLU5qFbvE8cwN6pU9NocrprWGRg6QawhidQ",
  "key8": "4ieNnHvmXpEehUTYr1RbmGWbfmPnibe7oG5zeqYG2fvijtUUC2qCL7DGG7fDbrm1SHhKS1NfWCQymR8Ma1uV2tUk",
  "key9": "aW37up7kWr4XvcTsgAWMEgkeMNvBsvcJFNkQ45S2bzFyhULXuWpHvZJs1MGU5tS8m3tcvbvZuSKMW44Z7SiNTMC",
  "key10": "2Ydwi4rcXrj62RpasDHhtakKYhgjBe77ZGdz28WzVTrGhMVha9gbVKVcNYKi9LaeSJcp5X6ey5Vig1SLQfwWVL8Y",
  "key11": "auGV15N5S77fsLzNMQinU36fFV3FWyLUw8Ge9RRZ25BeBXQj9L1pbRm6Bg9iRUCmMf6UiEm5FvkNq9yUaEesA3j",
  "key12": "2QHtKN6RRPx8AKxb9PfZAM4PRZLLEiDg17dF5nXSR4sBHpSHZKhvncMyuB49eRH8tMCAdxzyzLRDAFDXSKcohGtQ",
  "key13": "57PtVH1wWVPvNGsvz8LgdLk4BMXZ6gAi6wSiQd8eLWrZJz3tV3DJNxLqgHoimAWqAqSenLByk7gMc8xZ3Ls11d66",
  "key14": "k5HgwrJZF27of4o52Hhmww1NsqFzg5vtektC3LMVXM5XgZpRLPzJj8B4BhirXa9v5jh71vuUs55UPLLqm9merJ8",
  "key15": "5hWzMJPAUaGie7YekHj9fC955bSMKmZijE6XBZThk4ahUB7L5ZmjYzSxE4ic7wbje6DEK7aUequSrrHfaZASE47a",
  "key16": "4CXChZbdSr5N47eQj6iKWezrY74hxop4ZT3hjMbp97UUgtozyiNq6dc5Lq6CkwtKZBxw465jDkTdchaYQFrkamRe",
  "key17": "2Sdxj52cWaLWW7Fzcmu32CMc588NVbfLmr7nyLMjseypR2b8inPATUucWGPR5dzkjckb3XHKtmQ7cJXrdPVobK4o",
  "key18": "8GhZbZGmzL7wWVB39c27558XWFCeeU39chSf4Bwd6kjdpHkG2Z2weuFrM6nmXL4QH5AfFiwnK8WzXDEEvUTLcju",
  "key19": "38otCJX6thDSRkwGXGDhvdGr5pPBtTFWEQUM61WC6CXDcM39FUpoBNaT8PPEYtSArDgu9nzaTyaEXxETUX64wZ1r",
  "key20": "2QEDPmfzNvnU7KR4Br7mjrG8yEXNetxQswNhESSp7vYDYVUsNRdM6qwZ97gzDCM9y4YKyKTnzs6PEr8uNUbwiMzV",
  "key21": "4GXvj58uG8PYEfr5faN94SqaoLFZm76LVbkPmNcXCPUEh48RdSTZZbWnHQUSEPRsFsGBEjQqA6bS9dHJuuFvMiiZ",
  "key22": "4peB2kSkL3fkPL4iDamzdE3bpBgpG25FyzaSDYoQAz9F88BKVBnKYJTxoqEUX2CCjuEVWMG2vz8DpdxCgQwVQDHm",
  "key23": "36cMqLDSMgEctXYZtCNp1a2NZh3fjFDpyJFakDvUzJBDLUXFFnSF1LozzTNYh7g9ozGgTZG5jbHj1tZgbT9rfipt",
  "key24": "4uThCAPFV6UrSFCEaAoiUSBL7XDbymEQyhDM4X4qvpgMSn7JG3UcWo5oUF1wWiBavWTvCHGnfrXHjkttxMf7tpw5",
  "key25": "3SnS8kRmhfKDfr4DtFuNM7yP4gejMiHEBBJVbkGrtSrSxb3TTirAsGMCYQvsqX9KmQ9ByJTde72TGWTHg4gXv5LD",
  "key26": "2EjV4tw7VXz1TtQCarko2W8f69p78SmHMCkWTVN99F32wxsc5AhrEQjJ7vgtE5TwhxhjT6sTvUGURunBkuySxMx",
  "key27": "2zi7AVN6D1AVcqmA5N1yxQ9fty5Ynb74ifZUiuaVd5JtLiUMzkwdqtSRp6vF4zm1qHcRVy3jZTdCRhgb7w2LzomT",
  "key28": "5X7bkXW9RqEEM5V6NkQorDrMH4aew3jdMUMFiDFNqnr2icbmCHcfAVpi4buwh2ZKP5fj37S7ydmyh5deNj4jWnqw",
  "key29": "hq85EoQDsG9YJjX9qaoZfPfYrgUUmuymneFW26JSDjKiYPjwFdg2zFvWixg7X9nBah5s9oJBQr8odV7dxEw8fMk",
  "key30": "5VmtRqtkHeg5pSqnQBuN29AmTDCBXdKnSYSb5mLbcDJBbjELWPDH4rvNpdY3eN6REz5NAZNYtQwZk5jjMfdfDTRa",
  "key31": "2oma6AE97RUdsUfjLoQYBN56ypRXq9EZ7ugYmxoEF1ockR5LF9LNZ89icQarEH6xqneJysaKd5rDFiXxBg3QE8Xk",
  "key32": "5VRxcLWvJNkfxSejzNQGpgJwhQ5ntrakBwWQNK2XPsX3XS2k3j2zcVjh7GpvGdjsjAnEancuHwePc5Ws7Knjquob",
  "key33": "4yQspeuYysstuvequUxWA8yb9MvaZ5WmKGqWeATBZU5Uvgpi85KH9BM43jL6bd4iy5ED7Yiu6uEtvSHEwtHiXvxi"
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
