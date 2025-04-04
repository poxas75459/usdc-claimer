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
    "MDHHBGEPmvpDeYwU3YBadqHhW7JKzo2QCu4CqVBLyqq2kdxU61J6NzG8VjTVPCPMaUrea77HFzV1TG78nUF2qwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcKSC43KNEHxAg4dbJaTikijXfcLjWoVyBqA5G3mQFva6HFrb12qB6pHenTAGkupR4XuNJwdLiGe7mVairNjGqf",
  "key1": "4GP3xPVKdcJVgZkQTC8PFPSxgGVGKEWGXhjpnzibR5BG1vedpiHiK61aYUCUDgW1566reKcihAsrgr6deg4vSPNV",
  "key2": "3q8znDn4qz7pHSjNmaqxB4wAiaRUsGcdd478uTgQTG6vevLJS3dMh9c2SjaUz3DokXyq9EnxKK2vm3HYWhepdqrH",
  "key3": "mC5tsqLnYWserxerdwixuyQyVjXV3B8ae63zLTXWR8rK83ymzfQ5Rx4Hsn2sxCSYvrzG3SVyEj9gpgJU77NXtDQ",
  "key4": "2GLspCNZbvDd73BXuEtwJ5SfdRFpJBtbJL7NuYqJFQZmuvd4oosfXU3sfsPdKrwcnSxCjcvNsG4qzMHEtbSTKEz5",
  "key5": "52dvAJvUXthRwjhrXJsbxEP3xcLf5qCPtWbmFbAQScfyuht7xcMeVufYCSQyXVevZ3ysbL6oPZE46xjG7cmPM4W",
  "key6": "4Ua4sCtaY7P7Lv5z7yXueFN7hc2rs943eEm5WTwAAmb358NAki3w63xGuf3YY8CNaiVdg2uE5YBbW6Ru4UhUTPY9",
  "key7": "2oCVRNrrJEG7H3HXBD85qAL6iRytVFF5Z82e2icNkjHhp2VF3YuAhcUE6bbYxkhbEc56p3cCwpAgEgrTiAKb6g2g",
  "key8": "XJcQQ2zSzYGMLYEPrtQHzH6JstGS1uxzoEb9uYy1dmKYKSS9rKuPyVXnEx9BYB6ZWDjhkLGC3HeM5vgortXBwWn",
  "key9": "4evWdse4tCtVuRspuLySGKysqKr7EmRkKJEfFs9P3v7UhKNMBWWb31J1HB2rXanwAvUBRxAsRvkZV4ewAUtBFaNd",
  "key10": "4zCPTjuQjr8D8aDeowWYwAP5D9NyVTHFm4LNzu1T3REUt7sALXGhzuWEt6YVko8KJEDshGFrTCHd8LQy6JG2zoXW",
  "key11": "3qFr7wo6WeTByH5uGLCefChrWXANV4yGhHwhGtYu3oJQmTW3NrVBAcoEBWw7H3pgPFmT9GbdEEFSN4kGErq7256t",
  "key12": "5iMNvj3eNRSrsu7otQ77XBwrX1Lr7bqmjj8XbvKkZeXUtXR1yc4qSRW2dcEyMiF1vNEAcMK1enrabKRmwK5H1rGG",
  "key13": "5UdaTNL5dss9BCfwZvg2iwciuC6dYgxzM5BxTcpKAjoPBRtM1TYV8a64f4RPtCVz41WRobJaboQffnQi3Dorqtab",
  "key14": "4Z1joMVtrzUQHzaEwefoKL5vbEouaYEibnGQsTekveBUYj5zRUNz9m3mw4SouefcjPJCXicefiLjok1Jj7nyxGfG",
  "key15": "3dgo9UU17chHNdzJ9mD4vtp4cZkJnkSHSAyX4xo2oA3nZfkNRMxSFUWqHCfkzFdXtudJxuPY69njRNycP4Rrkq5J",
  "key16": "5ANh3tFWhwUzr9sufMpsXBv1gmLGXp2cpkJZQTNRywa1NvAGSxePHkR9gExC3aKZaCVQDA9J6aJHBkAyP3jyAo4u",
  "key17": "sLPKbg5o2UNbTNG59Yb36joC2arzRZHog5LXiL9yVCT19QyJdPipCe2wep9AviXCmWLfzYwRMEN4ahDNNbbnggu",
  "key18": "q2NQanoHPoF7RPcxF7k2f7DtuL8n2nVyhrrn2c9vAUQV1W7rQ3WMG9ApZtpF2r7tUpKM29EmCyH8EkjmEkVCr4J",
  "key19": "4ro84UK6QBBsDygYxhVTEQwC5ocGLv9wcnNiTB44TaGkQNUKXGd9C7SfH68V7p3Zr19ZKEStov3Fu9tspYsJmxhT",
  "key20": "2Ap5Env4imr3LWiKco8UN92JLX81PjVihVkHA69NuVEEutYkCQ429KihwYcCJLpoxHSCQFHqvHQXmq3XEcSCQqpH",
  "key21": "2UjHn5Xm4hkjPYjUdSXZgpM4YjfkxHbKFJUZ8HRV4Hpk2YeoDtgVhms2HLhPyagmTCX8Sm3mfGvjVR2JpK4dYZnS",
  "key22": "4ZHsVBdgAG2Xc5Mkj99iHv3qUMByoVP5nMmxgB5Xt1v43QyfowngDg8LTEHbdsnQVuvCWKwReh6yT9nBEnVwzKuY",
  "key23": "2p8dFBG1gyjbpJg6bFXhHQDaDnCdMMkhqMw59gqmzdYinyW67S3pj7FqJW3d3xMUXPBvTA5KnahWy2X7gQsnssPt",
  "key24": "3muEzB7KtoYW8hDjMym7JTnzQKxHZ6qEfzBwv5iyM2Fo6vsbzjWWWzww5aGTGVMBV5LRrDqoZTcztoYM31scWVrC",
  "key25": "3FzNstoYEBY7JeFZsGT64jyNcHKK4EhfBLH1aL4kfoQbfMRqnm1bzBdG6p13nUMYP3RLf4Bzb6TvQj8vrX3g8VAZ",
  "key26": "2rqDcoiv8kcYgFBMWMqZUyhREHip6nmWtbAFq2KDX5zkbHSfJWod26TXCYQsRnqispDhoe1saqwRXpaHTARwBxG3",
  "key27": "2eyjRcUxHNTjWGYigWNzWQPMKU5oDmKJyKSXYdYHBRB98TXgpHiiK5xrATUstopSocD1rs9w91g3Nw7LDuugTRQF"
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
