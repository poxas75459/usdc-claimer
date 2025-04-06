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
    "2d5RLRGiyAJ6KRkXAbqwSsJ3YRFHQFdbaqvRL4z2xVYD64VnoenVYu5hetJ2u7qDAPRQw3rbcA7Xe5vmdYFW8j59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qp7moA4tBsxxF5bEA5sgovQPv1h3RkhAGLZRXDRKoazHAHUxk5LVvHFBoiHnz7a6yduoYdpWNWKtrVY5hzJdHnW",
  "key1": "1273WPxSWPbTFtmNoHMUankmgkmTkUs1dZZde3qtk3hXTZyQzf4ibkkYywD2yiLMtGPf2BY1jFcAEYCyLvuwBg4F",
  "key2": "3S4Dz6T1x56TXHgtuH8KZNc93FjXzwQ6tXKC4zPFLYdm6TcTZD1UwF5adWiruBF9fjKA7JCjbMngHYspXHuhAkgB",
  "key3": "2gQVeBSszgeeTuBcVcpxJ69TavdCoDVxpWuqH3YYvdZt9t7ofKHnSQ8kz9NkFAFjez917Nfx7hVhWsrRawFRafK1",
  "key4": "2zvb5EjfctgLqBjbzKDGgEXDNV4dSgP2q14DWj1mm7uw4PVyWw2c5m1Z632MnVmeEUKpi6HUUh5S6nLVJefz9vmB",
  "key5": "4Ny5iCQHwbhBzMQWsr9RKGwM1CQiCqKzCcUmQymNgqmS886qRdVxqD49EkJ1RTL7AZWnE1bw3zRJc4fXCwy18pd1",
  "key6": "64gQ6g7wYGVJ8redVVzbbLFhWkML4tkhZjYTXm7GBGD5a1FnT9NtxfTSNjdPC5gUhFQnt54B53GAMhZMSccQ8L8r",
  "key7": "2ybqwBYLVxHdhpN4Ky8ir2ptcUNS9kTJY6BjkdDXeBwi86CYLGmbG1Phb4DLBBU9qB9eeww83btya9v1x72A1sX5",
  "key8": "696WmMmi3xj2kv548eVKqEKbUoyuteseVjG3MsT5iKhHhFPX52Ba2LnN3NW1NFtidEvTdy5TTJ8KzzWsANtfuE1",
  "key9": "QCi8hSvhKtkFBvdN6y14WJ1cEjYmHGCJ5kJLDC6KrUhhgeNLbjcqThHEM22mphdPmNisgGiTvB431kbDY3ykRdx",
  "key10": "4k1MQuTpW2f5pLBiLfqUEqGNp9s3bFjrzKm3JXCPJAX3wALtETXMWq5ZhMJaWc7NMibe4hXteNUKAtFWJtdSaXsv",
  "key11": "3Jj333s2mGHTpJPNd4geSBgqAr7PA9PMYAR1Y8Q15GxFUZBucfWSwSfJ1VajLA79Es89cwpzXquwaKdLY2SPzKDv",
  "key12": "5P56QWJNzqb9tncdyLNMzK999mBmQvUFHfFdqwmuZb6r8CwgxvWx9pGLXaFXvsA41vVVqPuazCUeL6xTv2DTHKhW",
  "key13": "HkUqZVVUdFuKkXSCYAuGJXXZenSpXrZYy2V5KBySM6FGhrZVemim5SWzHsUWZpcWyjPA9RVL1Un28epSYMQv7P5",
  "key14": "a9WFuX9Veop4YbaGaQr7QrSsBHNQ2iVYdyChB9XWQeiwcJEYoKcxQRXv6ozdT6a3ZucZhw4zPgfHaauJ4dGFS5f",
  "key15": "4UX6WcvUu3upa4aYy7mdDqvLPr8HLqTtvcQNwWPpbkcSRPCtFTMLEvf5pvnpiC4QKDaJZ359fdWkqzd4UfBsRBVx",
  "key16": "x2DB6VRNmxi1qrGh7okvskuKGvPXAtka6bU48v2kyxPFBmWaeNP8wHZDnGW9XrD6KmUfo5bgzGQuBeiKzUJJqfx",
  "key17": "t14aCVoKRTeBfhwRpbdPdLkyKZB38iU6VpABQbssFJxfaKCjQ5S4sKjRGAgXnBCV7cnQMfxRJmsC6c3xynjjQBB",
  "key18": "4kC9cpnShXESyXLpJVsFPJuMgzQdCxeear6GCiGxJgrv8NCeAg6Y4FJEreTDJhg3iBShdbvEXueN3wgDFWMuYL1",
  "key19": "4AymATa63xBsHvVbLHSz6iN8snL4hQXibLSMmiiZEb3u4Q51xs3FD8AeHUeitCZ56dJ6cgcU7egUZk94AyGwVMDR",
  "key20": "5gaq9F3yrTWzMjNSvPugwcnmPUTNBcgt1EtwdxFzyuMuiW3EiCEJh4Jnd1EWuyXrm9HKGUKrE3nq3vMitmDz99GZ",
  "key21": "3zfV9qkkLrXZHhtfWbPvE6weab32mTScjBnW4CjgJ9j27qQmDfDEAnhPzRtZ7KdFxFzGUEFRuQB4WUZNJvxffocH",
  "key22": "4mNPa7ynrGmGvojMMchfS7fmo75ZihfbFDFgmZgP7DEwnFsx13Z9N3PgFsB7sgKYncy3xRtqpdJYMFfiSykroEXM",
  "key23": "4513VxhMjo7aADottr8xDJHwjGHxhnAapmW1q2FVc73EETUSRnVgFFQXswubR8Gz4nkDG8T3yJMzuYUDemHdDHzD",
  "key24": "2c66r2MPCPrXxKHpxAfLSFmqUsDzN2dMixQtqwkkx2uhndYDXyaWiX5Ne2pWWcvnsQSSytgN5PDmRFxJ5eHbon1R",
  "key25": "4Q4JqhHe3DeoZjqZFxwVnd9bhjKfqH82JnEtsi6EQC36xZEpAFXj4zE6DedChhj22TMSj3wDd5eWecxe2cLhR8kk",
  "key26": "4jDGDk28muKuYTRs6eHcALHuVGbAUADtbV5yk8T1FZv4jKmuwn1pq57cMD829iKbMZzHVphpu3TWuvoMKPTDWk96",
  "key27": "5fTDK3qCaiWzwuHouZHrT4jtgYcu76hFQp9ugoqT6pxtSYFWD5ZGt4q2XjGEw3Uxm5CAiACnEr88cRssiFzdGXhJ",
  "key28": "M8PtuP7ejnaR2WqP5Z7HPkGvHjiwMSVdN6sHSe6h1nDkor4dEuvr2Mc6NDzQwxyUDToALa8w2ZMa8MDK3Bc2HB6",
  "key29": "3m8hom8KpgS3x8cJw22CfayLqs2dS58SHAzhv6p31a2SSwUTxVcRDqSqXNxPXRc6sRncwVrVkA757cKb8SYuajmH",
  "key30": "4D8rKswTApxDSGpBssZRgj3WKwBisLy1trXNMvecEwaRims8KMreWzgBJBEuvBPyZFizWdJerAAUyxDxxQabjfk9",
  "key31": "jQw2aCDjSa8nLReWUGM5rrKq98b68NcgLaCpsyNMeef2iaXWGCzBvqAfUZe39SUjUV1vUhbqHHbNFZyvqJBps1U"
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
