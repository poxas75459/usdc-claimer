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
    "5BfJaD5oLpQAK3rjFrWEY72CCxAQM4PRWtp8XFDmASysw1La6ZX7FzUhtnSjAGoTcfhQNG9EnDRT2XCQbfB9e8p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fPfCVYTqzBemHX2B7eoRBN2wsWEAYj2Ho5yA5BkxVmc4ax7c5FcH1iiKcY6UDTWwS8P6kWkQ9hLWj9zYLoR1NyC",
  "key1": "3X8oE8iCaNdoha4D7Wimck2N91Zu1snRNZ6yYvxChZjNidze6VmtoFdPf8kqSSKWs89sFnUCQSjkkYCCVgRySmp3",
  "key2": "o44bWggk8q4V4vcqaZMruUNm5fgaKJj9ATNyqcXj865j1VgyARtg6wRWmnKhR11BeAEKCgposZrQzybiJzwd84W",
  "key3": "hodd8Aocgm4vcjQdThpE5EpMs9RLLx7pR2ZHgvd6CBxCST9EZ3Fx21kkaVPpQ4cNmdrRrwAW32sf7V9Nnfj2zaW",
  "key4": "azWb9M8FhxiqrTaicJ9Qom9ygXryj3GPuX66i1F2LExTwrgvVova6kUFPKd8qzSefZehP7jNxFJntXJK2N7RWRa",
  "key5": "S5TMxvjQJh7NFj6595diqkCGCT1aReo2wDT9KtHj1F5w3zFGE4kxDrEmZhz9FFnE1F6ePjazPdQKYvXiataoVyQ",
  "key6": "4Fc8uX64e7RzwPh5V1Eo7214Vc98yb86tGB7vk5xUVZUEn9egX92gPdHQxuJWt9ihgLVqxR4mNHLXt8hH43z8B3S",
  "key7": "3Ze1vHSLy4YkqxLxhng6qdNTexdfcLTjK22VPZCx7RUEdqNcB5CDvR4BzgUD1bzAENpTr3Hgp5rGakwWGj1LaCCP",
  "key8": "8yr3dT7X6ddH4gwmEP5CRmaLtMfvFL8EHsuvfWpH5LVF3Bm2zfocTkjPodX2ftADVyRh5BM4QvQoqQWYrm8HA9D",
  "key9": "4qu3d49eEd2N1uqapLi29dSUBLWAyc8crwBMcXXdtsKPLbbVKtA5qJ9eEwLbPo5h7DGgw59WM5UT5P3MxfPECyCN",
  "key10": "2g31ECpXSc7pNHpYZBR7D4rUGRt6S4sfeGJ4rVxhFwe3Ruh1PYV2y2zacRSceHP6RopHsnymDnTUbsvCbzJwqxqP",
  "key11": "3f9r8EEWAPFXCrWwcAvSNHCsfhQwygmD8ru9yRz2yutAstMom4KBCh2vDuJ567kn8muqWuAeZfTzqaRyJftnYe6Y",
  "key12": "26BP8LuMNBB6rpJHy7w6qnHDL327KAoKprGpVS7K37V8ECnHt8Rf5sTZWQvKdgjGFnbQwomWA1vCwyTXpSFMAQbN",
  "key13": "2MJ7QnhVSCBkEGYAfwfUAd61hXjCbeQw37QWVFfHxaiTpQoMuJmdhZxPMpAbZNfZbY1weB5GGTFh66Y28s5X5VTS",
  "key14": "3wVCWxBBQcjqURrsHERmftLetLmpzvpWPrmSLaVinTtjHbrd3wETcVawbTcUBTi1KEAKLp4AYZzgpvSDHfPz6ZWR",
  "key15": "4FrAbnu5DJ3e5rJx7gdtCdBzAgf2c1DXCzXqvgyx5mtCUpeMmZmhiPNbGbAJJhBDrSsU6Qcn2jm2SnT2Tbjvr9sV",
  "key16": "5S7ctK8RQVfqNEJ5XcSdxd9y3kak2bHxVrAUd6pnKt9mdWqHo2VPGTfVRum6bkHhYcb4h4Hszd9EF4jkXa27ThdK",
  "key17": "R8jJt6CYJ8nbbp7YCv78nVHuSBg6wUj51Bq9oCTjHj99Nth233DdtAYKpdWio5VEpeJwfR7eT6ND4N3vo8mUt6u",
  "key18": "2ogik7gWcyH2Cu4jVxrVh1r11jMENNT2FQP52tHFoQcwzUusE4DUToqTyDM26sSak5hpr89khzw5w8aDgqyigkRc",
  "key19": "4BMMY9Ccr6kwGvMtZ6LXks2KwJt7gPGEQyWFqS9kbUnWpPzZniMG4WAEsrF2tZYknkK8KoY7K4Z5pZ872Wx9tiMe",
  "key20": "3CjFvqxhM5skbHHQeocvuthvLENFKkoffeS5LuGPYCEbcrcLLwtzn7zPDfvmXeQ8DTsXznSmNY6er4tFc8BAutB2",
  "key21": "5SsCJ7o5GZ8sDzotdppDw6bGMKL6PvdLvNj7iCfEYu5yA1vAqTsGhyGAyDnLqgLjmHPjhLNAfjHrw7iDbm5DoJTB",
  "key22": "k89eH1Uzw5QY6gmWHMenteonspvgxQafCYyshHbqzZM8UFABfCsqhLj5NJr6kFzeyhBsfbDYk25vXapEJr8ERv3",
  "key23": "aLzGgGvXhuzdv8MfxUFYcDfj6MnDkHDze7GFdf4YAacgyD3ymzRD1ZjvwA5MK3LsWRGF2yQUuvxX6pBwUvoi4Vt",
  "key24": "2StFFHTWgGD81xqTT4DZTrT41JwKuDjpXB7PTg1fagMRDKCYSbJjPwaSNVw8hZmcFEvsKUHMtAV6HQ9HNw9zQFgh",
  "key25": "5oMgn4hQy6HMKHqUS5CdGEMDtCnUB1se4Vb37hnAuZMU3ekswDk842LH9FrcaddLbHaTkS7nakbvL3AEjnminoVK",
  "key26": "5S4pKnn967XQQJzwZXfyFDB59WUfVL7uDkRnmYinutxaXKoY2D5zNx276gpXLuzzpiNzvo8nwjjoHZx5yAujkmk4",
  "key27": "5k1MXoMmsu8fVGf4i9kLWvms6x742RGqG5yQituarx4gTwL4X9UKUBvmWE2mLutJHtvPZvzTXg9xHKqRtcM4jtVk",
  "key28": "2EeAzXLJ8As2qFkRZMRp2U7W5r7Vo28nPwWfqeTwKNUwEn8S7Asz1iAJ6QMWXXqBbzZcAkiL7iJM8EzEdR555Nyo",
  "key29": "55aJqm2KFuHHtRuf2Scwnn8hP6ohPwrDUWyu3RpMASz1BDcsCb3nJ68pjtCzsX4YteQFogpx12xD7NXFH1B9QtjG",
  "key30": "bHVHB7QYUSJ7ZsEmyaDbEcJYCL19uy5e18rnUA7EjtuC3qEWeqUKZJZLefeoPFzZZjdgkiqj7o1GaGd7F1SHQSQ",
  "key31": "5PQ2SRXWkWAR9voVRL9ny36XVfrZbmtAEzsaPKLmB69sKKryswQPJLHwd5NXWHiVuNPWstQGtzhizFKAY8XaLJ8u"
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
