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
    "5GnE4YGw5kyXxuPjMEpWFrz6Hcgj6PXERSq1KanaQbiUoF8f5yrAUbgZuh1mckKo4HTuQPT2jQau2RxbFzjX7AtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nk3nYzPKUp6irNHupxizYWsQk58XpcKXd7JUBMYjgqKnwjZ7xKHP5sjzxT1BqGztjMoiLbg9Hod1U6S4JNT2wrn",
  "key1": "5GpXAXwzmfNsVrR318iieF5PFYquPRALQowHdEVK5UjmNgN69qAUVYejnXzDG4qjee7NeF86EqqgetRvonCJTwU6",
  "key2": "5kowjYdstDTR8uzHkYEqFQLfftQfHRv7zhsUckpU8ukqS5G3XXEdT5xYnCnpi27f8TfZ3oLyKZazdnZqUvuCWAug",
  "key3": "2YWqbNhBuAdptnjyUVkQGC8Cc9fh2Ws3Hzu3JRX3M6Gu2dAPVsy9iVxuZv6MAdexCzUQDpg42Ua6bV1qBsahhYV3",
  "key4": "4aMCUvzPBNoXFXMxebHoW5KsqtSW4ok3LP6SjVzEcpCwdCo7AoPMdHFj7fV5UmkGb248j53fYTLBHLh92hHzx1XL",
  "key5": "2ZtLG9EE8qwbLtcxRvDyfV7f3cHTTnaegRJitaNxh9Z6MCPVATwa1MBpK6WFuyM32e8kybGgxWQTnUT2XRZzFRzk",
  "key6": "yRnsuZ6MXud7Xk1h4HoSBdcrCqTcyxoBmNjUR8ugCVrH8YW4vLMuR9zcJXTaPnRFmuENR5uRGckZinzvFpdLZ7H",
  "key7": "4d5JpNwo1WecKbEQ6diW88rcsuZQMhRkzsRh3DbqC1rJGV4m1nVhtHTcmA5PCezSNJ1DTLv1hcX552JRJ8h81WmQ",
  "key8": "5ibTwaHoAf3PipRaX1R7YKhMeWsK8rocXcKPb1d9Nh8zubRioUudaSfFKDDa7hRsmW2Th1LgCYQ6KMjtRSA7tcE9",
  "key9": "4gQC5rfWKcTLJq2kVfoGH5fim2t82GoihFDDJvqcbD1z7Cstqkqr4hyZr3ssMFLtGFLDSMGAn1ndT9EPe1yE1ZTD",
  "key10": "39cSTjaZyzMCkEvjxMfcX2vc86uPzMRePoPxntqXKSuU5xiXcHsv6iWsR83YEQQxZa6KupLrR1J8hCQ7iHJ7BxJK",
  "key11": "3QThRmooBgaStwkh9v6VUu5Yr4ZGcZGuX17XSY2e6VhKn2PHCRhtucmHcMCbvKmZkyjvrTn6ex3sSQQT6s65rH9q",
  "key12": "2T5SriF9SE4Av9otWnC9oqd1c5GSRNfogSzMtsErVrR8es9kb3Vkhy4hVP8tf4rM18ZcTCmth47wbyB5n7cgcRLM",
  "key13": "kbkkGd5CZ29qDydoN5v3S64c9kLnPXkBB5toNvSn2aHnkp3YnW4hidXL3JtDAAm2res8zzi6wYUT5xD79b2N7hY",
  "key14": "2mEE3nasd6S6fAzdnBYGdskjGdFGQQbQnDkekSccASQ7ZV3u6y1VAVTWD8Xr5LGkAgpt3V4TX7iCdRJ8z4Lcpd4s",
  "key15": "EFqTdAT5iBCjBEBwfx2j8PSfELvSZix2vkgE4HeGJATtyj7UHmKxrDp533PhpFAUsqyxY83M19ceshWVZx9EoSs",
  "key16": "55WL44g2ZvWPx9aXjN7buCJW7tsmQn2FTHWbxFtQtciAZf48KSPv7r34XuPnC2BDLVJgjZcXDTqHfASGyrkHmDkD",
  "key17": "4WRPmqGSMa9qY9hNzEbuamHsGxT9BRUg2mb4DFcAzBxcRv5fwVbj69BUWr46NxGrtN2aBagBQEZHXZ59nwA89uGz",
  "key18": "2nB8nqcCMKnu47aBFzGpn5LX123tZmtpH5jrscg7jM7sQ9ezhQVLtxjnnnHHyJJvPmgR3wrEjLmpEA2tJnf4hGdB",
  "key19": "3fFiSbgYHiUXF8RhjxjnDtPWDnedoZYNC75pgPJmtHRC5AuhVrJy21ZbpFVPW6gLqdj6WMzHP9LS5CGHhhzoEWmE",
  "key20": "2vHrtwLedXZLAsiUJKfqqHHZt3kpx2qiwHv1LyrB3hEyonNYWY2DXAjnGAyzPAeSYXsC4p4EZniZF4oV8nDD75Jc",
  "key21": "3xhrDMxsVyjBHtr9QNLzvKUu6Vibgnhv9m1fPRkk5VusAwARKBkNLZ2pfoGpzTFT8KgXBgGhBujYrpcJZqXcxZ96",
  "key22": "4NKsNrYw73mVbmQXEVJNsXNhPSYWtuypoY1yj6cdbnv71R6G8RcomABJjA1k9cGwYW5zTWjCrrAURHbP8B5ftrTE",
  "key23": "YZR3Ri1vbW3DdEckNYAva61k3Pvb16kxuuqunDvzDd3eNxGBWoVQPJoC3BAbWtJTvMuyStBSy36Zh7A5RuDmerQ",
  "key24": "2uxdZ8GzXXmVH4mmZKwhfBub3fuNuXy5eiCCBQcrDocND1mvBP5vWmUo8zuYmVVHra5hciXSJcv5UQGjpM4awen5",
  "key25": "2YvUHioQtdRdkX7LqynyWLePpNNLkEyiKWRYCJC5SVafVV6bksTSL8M9Dnx6R7ELzpYAKB5mVAJiPJ5ABi81gYkp",
  "key26": "4XchParfHfJkQmBmeebSc2Bj1TRj4DWuUiVGuY32BFf6bvmqdyw7t44QQ8CS7vMTVLvgMRbUP8TcqyFGVnuLyQMY",
  "key27": "5bKvAFTkrndUJFWgkFAqqB7DFgMa9F11TUKqq5oXe5Hv8fevQ7imzic1nFbM1BEkdEub7FHyV1iaBxtqDCQyP2h1",
  "key28": "3hMvLkbN4qGqzCvcTBF8RH8anrKMXHJKXNRrESEmrWtfbHV3rpqmi1wzzzU3wtheF9eCRM813g4PMp6qn1zkF6zn"
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
