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
    "3zNmGuQhWWQiZRWj7WkhcNtHeWJ8ym8mTPSha7LzAXFG28TxpZSQMSyMWeLp5LfMz1hMKcGWLv5L6iJNLyUncqcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydde1cVPVGQtL1XLfM1FiCY4wyXPdyWFuXniCjSs5XYoJe31EMkKuE76YXoJvmYegL9knVUjUymwaj8CMgyLe52",
  "key1": "23Gs84ryutgMT1nYYbZUU62qQtbonexbia7E4RQRtkBVE3FARC7mAatdxFfjs8JLwvJcbahMCbYPMUdgtNsEZzF1",
  "key2": "v6NCjgvyHoCtC9xXSvAjXbihDbvWwNZ7BzxWcRfo8WEL7ScM1Le15YZjyPfHUAEk3j1omRBSeqCt3vukKYRU3pT",
  "key3": "oXCfe2FYB8R157ETohTWvyG9rSi95tP4S7uXnc78Hx494pHCP5jt2WLSpH6H9wCSWBd29MSp5DVM9P6dAhFMck1",
  "key4": "3f51scfAGgxkPQMewmQ7vEuK6c81TayETVSxREFgx8jFmdyhU4VAygXg3yD3DYJ9V7dtG4FMLixb5BavYzchy6hd",
  "key5": "XjLYgFPmwxknugccxXvNHSiH6uC2xPiR3s5dmYjNrqATvzbi66zYRPA9oXasdWXbdjPkuHv1RnWU7TGe3ASkZkD",
  "key6": "3pU1QD9jMtxqGAi4CboDCyYPSxsLWhXtR9BJbRvwmAknv48uuwvqYDKhoroAEoNptj7kiXc7W6HndJDVp1fwtaEm",
  "key7": "pSAbKYKHhf29HNMtr4QYsz3mrUUJP6jhi4LpSK7pCn5ciuPNmLkbaf3MAyLZ4Xf79wHhTEkBzMKD8mPRQRTzXVr",
  "key8": "h2xqTtAqKj6eG2pkyFFmhodzkkFE2HSJPEJfmENkJRWhsdaugiH1Cy9jBsBhj3P13rboJUfE6zoBmhgLoCUpBZL",
  "key9": "5tVgnKM5eokgRMnL6F2FHRkhzVXKRSU9mJQK5BKuWm3N7zWS2x4jQ6c5eWRUH2brE7fMT6HJb6SKt496H5cp9xfW",
  "key10": "4wuMJNQMXHaGeMqV6fxai4rrpcPUZrzehiYFRgvhxihsGLrKnssqHxnnVwBRXRgrYobux72o454cJWUCu13oJykW",
  "key11": "2z4fPk4vNmXJ629nGKty1DYTggJhbWZL7zaNvKRua9oB2NtzPGutHwui8GQ8qg3ekLxDWrN8X17BtE9csHsEJLJe",
  "key12": "3UcHDT2tWWxKtcFPreT1JEmKvcVPbigXQ9pbU7BszLJPc545EnFGHjjBqMjAnQgVLks7XHFY8zTWSmDoxBCw7Kst",
  "key13": "3WB28SP3juqYbmVbV7ubph4emnEUrvC8G4uB1Yo9qz1r3pEoYRfxWMigQ3yZhhWQhcD6WV1gQ3wXRQy1SAR1ox5f",
  "key14": "2AZvsAD4gdNgp2LWP2DAEvRABvDaNzrS5RWAjGstjzZaxZyykPQTXo3n5znjUsQ7eLs7DuDFoCzL7v61ZSUGTp5b",
  "key15": "3PxZNRHz9CKbQPvxxKHXWdGUjhvRcjPNZDkui7KtuJ6mpcaJ37urbttAxXqaCXYGEcebzwhiNyL5LDDNn2xqAKNW",
  "key16": "2mSGXo7AJXAgWdrwkKASKKFWGtncELgcEmUZxXctqndfAmzb2z2kA1seMr8X2eDtpRypGGVjf2o8S7K3eePf6CXq",
  "key17": "5s8f4hPEZyR3HasHP2Jta8UWrcuz84awRjUvDLbLxTZ19Yhf3gYPAXTVqMaJsjtw1Vc7eMQZ4ru7QwEXp2atZDnK",
  "key18": "4fHjCgmUaRqhsdMsqhfJwEbeZr6LgVKW5KiMKCu35xBU2Ve7kyFCXpWCfA8Sff5rSKMTWb55mbcWpKTeL3nhX1Dp",
  "key19": "3TEH9yj4FiJCsvQSa68DYDj9z7nMGeap6xJWsd8jj2oe7JjC7J5cULSrhocTtdypdH6GdPjdkMD8mXz7HqX8hyzM",
  "key20": "4Zo2RR5JH6mbaEsP9A57Ec9o1ZtbpGwmDx8xy8UY4WDcycS3okNd93mM8jLfpzzrj569iVSYn4vRAsSZ33iiq5aH",
  "key21": "5L16sTAdS6B6KxeQrZhwAoMdGvimUuQaatZQuAtfDKrb9wMDwHio5zDZVNhLPWUeXWqT7aVnzaG1cQkCkkqny8c5",
  "key22": "4ntKqEUSfnZixkoaXTzzWRDRfJt9cjzUzUkw2SjvaikEodBC54oZfzx4YJKCmoUHwDFQFVEawSy4m1PyvpoMTtsF",
  "key23": "5PXvtpcTeRUQY75AwYq3JxcFQio1C1TeBJYpbbiqnrJ9wtWzerJChgpGS2fHSWxvC5b8gCNdGjYrEQzftfnYQzHz",
  "key24": "4BB5hQ8RzxNkC7WM948rx59jQkHCGwqH7SoGmFdY9EUYt7v9zQjBaaBEotZN5z93xVLkApkqVoWu1MAPC5rmwCML",
  "key25": "5EnfxtArLWvibXUgpm434eoC1y2WrwwLW3RcSniftncJ3CjHHrhAZkaakRCRb8nJwmaxAuSrX6BXHtjHCv2NGMZV",
  "key26": "5tQMvpv2W3euWpmzKCAFifK2QSyDP4meDyoFULT619rctovYx8nCrXoDFBotPGAj9ySqwCivFaWAuwsvc41RrQkX",
  "key27": "2RL2QQB7DizEo1Aih1x75seqBZ5wTdEEbRp7e7zdpqxYvTCKKsQWZPNCjXibwsCojCzVwpFdqTTyHP9fXyou46qa",
  "key28": "23np3izwk6eumRnC8wWJAAqNEHjCuuXNfUJi2f3qU7YY1Bk8WhLArFKKiNGbv2rHZdyD5QcJTGiyfeCfFppuJ6Q6"
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
