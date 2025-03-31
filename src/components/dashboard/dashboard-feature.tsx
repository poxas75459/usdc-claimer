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
    "5cvnyvFpRkAjfaZKVkHpGGfLyjsc6AkVfwgD2dZxGdbpcYUF9gQ78n2ZFR9d6d1KceWeY1DMuhxNuYzXtpvo8bfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfVa95vb5qpn7vE2pPhcGz352b2cQwNPLPAbGpKMFPojJnwKqchSMabHgDbVi3KGsm2N6xxViTxT3L4wZpjym6Q",
  "key1": "Gy2oqne19jo8Bd3PS5ETewdqoo827BgGbs6xSAWTjxFRf4YZULQDErBwqbS1h19mgEssbx4M7jZvoUz7xMCJLv6",
  "key2": "5Rhb3uvxi3nUH3URSsUqx5BcESV711q8d4NujQ64GqgxLAzD65dXwqyUMtfpiWXG8H9CSiABU8wCxDa121zQmG7U",
  "key3": "sV1vb7hD6PQToCFUt1WW6CEQxuECME549fhc5DEWpZiAGB8sD6ZvN8gkrbYMsUPmHQMy1bJEvb2o9qco3xNPwhu",
  "key4": "3gDYg75KjGEDfNwQVT7f2bzhd2z6c15GzTeW7MkX9YT977jx8RozFUzWnBJNHijk6vw9LyMmsRuWh6ZVeTtczAzW",
  "key5": "5CgbESJHkzjDH6vA8Kts4er3EGN58pY457zvpdAbyMxYN1oVVdx5QGygFAHJXXTec84poyJrMKYzHGaVLqNPt4SA",
  "key6": "3aEZhgw7UPBLRRjjGmaVdmwx4PrsyhxX4tVaTwMK6jxWRY3sqhckUeuKoRKZYA3xhZc4xub4zBoNDedy7vt5N5Cq",
  "key7": "6PwQdxYpVqzzqQvUL51v3qawSZFVruTCziH9Q6aHfE7Um3jt4w3oq7JjGoMwNVBu7Npv3BWe2qZbuEkcVSyzCwv",
  "key8": "2AzSd4nxyHmLugJAPG5zqwh3RCttUbziZWVv8TXpw8yqSXzkmWSwpxFgvuZuR8Nc3mNyR2ws3YxhduChs6PFgzk3",
  "key9": "HKeG8vtyu4QbRANHYZrsc2ksmCYyCFUkPWv1XhcHVFmNt4DmHgTfwzaWCnQ87Rp6hpTUhKGNd6o4yaMxyhEpycc",
  "key10": "5BvTHcHt12SaAeFUYR2B2VnCRU4xbze9PCx2XyQ5P36T7xx9QeMPormYD458TJZP1LN1P56Hx7UohXQNxc6uZG64",
  "key11": "3kE6Q6xVj8w5oHeivZLLiCzBE1Ha3SQuvdo2z3CwfBbwftzyvDNuc4YQmweWnEK42Z7dVtugHwjuE4rfDpafKKny",
  "key12": "xsjdH3XuoXh78qoBFrheU24hB2C4veQha9N8nAv8fG7vF7Zfzgty1MGiqxUYBr8R8DzM8BzTVsKhYE1DQntGp99",
  "key13": "2LruPZkN2B7cBmpFVMaGW4LDYy8LbHBjFfBXribphmX3pxPJJwTgryFJSrkbbVXRcbmM9dTwR8RE8PJB6nUYwoPN",
  "key14": "4Xh7vCmKbNHWfGx6W9ecuLXUChdyZUivYjFp5DQVNLPb1kgmBcH5CEyMSaJEcxGXhTvYXNtpPnZVCF8YvXXsK1hH",
  "key15": "24ATJ3f8qr95s5UaNeMSAxVGCWByuUJGPcUjj7qpX7jDPESEZHnz1KgJQYLxgGJfpHmDRksDBsHY8fUvkNePU8Fc",
  "key16": "SPk7aLmPHMP3pYPuVzvzAAQzmRJdAFStDUe9BBkn8xzGhxjyc31enRk5ZRdFAmcYnsU1kS128jzmfDQkQx2xMrs",
  "key17": "9BfqScbgTts3ABdJJt2iYRtaz7hm8UsPcfsCDShLYrNMZJn8jy7CZobhTbBcNZ5r1obzuSzVAZcXwrmS8Df5vzp",
  "key18": "5iqb6bwVK8XUz2Q6XkxNzUjSQeTimqJR72s5mP9NTAmdcW8HzQRa3cFWAqbEAcsMQuN4xyQG6ATfd9xnnrrkM5QE",
  "key19": "259kQQYNYHEd4WMFbUdPujy9Hyzu87ZEt2cV5ajnxnaKCRj3A9dUCbSCBU8qus3i7zYqwrfcCwnwcLyB6Nds5urZ",
  "key20": "2xMiGSp5patVx8qFCyiESu8PsFMgDx8fwKGdB8huHUs3pV1YUAhkiXR5959Mz81zPSSsBXDQw5BNZgiRXJ79euUA",
  "key21": "2fEjEZrEARJMKR8nTTVG4jk6NDqbs79TPAmxSHcvMnEAezRBmbn6yjq3R6HEVuhKuEemjHHLztRZeaYqnnAAYHH6",
  "key22": "ueteq52XtbtorDdDrraBa2xakEjvdWpmyvPW1PGpDNAURd9nVH7dK6qZFQnqW5EYB1V1HXCppJM2Y4yDgKaEjok",
  "key23": "1oPmpyX6WWhisDK89hg4ZPNrGvkES24Hd752dXNQR4yBxZj4o6dugoc8gp9WfC64bdBeZg25TaoPLjviD3w7TdD",
  "key24": "4sC2eiEVfxd938Mfsf3YrzZmf1P5Lcqhj3FZec9EGH4iUrHfJVxdB3hEnYtLK9bEXFeFVgBmC15ojjMaaZhcdex5",
  "key25": "4tUhxNyE4FnJeyRev88Kw2srSvKuKKKoA5WovNBgTYUbJvf99XEgB3oyfde446RjfNoawYEcrbkWxVM1mt5HhSHJ",
  "key26": "62JF1B1jvjNLUsw1isqchpxi7hQeuBzKDZEAph2KKQHow6Ah1DJRjTqaaZPesjXpiJB9JtNVnKXNYNEtj4EjrGwh"
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
