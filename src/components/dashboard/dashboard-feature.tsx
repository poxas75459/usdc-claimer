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
    "2hgqNwZHrAVmZaxZcxiW3H8ctDviJhyPVbxAK4JrQ7ReMNwwhhyjrDDwXkVRKXywf5NyCcWFDwkgyhkUDtPcgT13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tnuSKVdzhnAdLKS5hzvpyVbRfaNFXkDzcc1MLRcgcsjsmQ17TXogL96oVb4JizwjypMYaH8gmccZMKFrNf9m63q",
  "key1": "SF6wXRUdKe59et4g8G2Pa6Dhb2qMQcxSTS2EjAGzCJ1kjMzNUuKCdFzkoBZfu6mwXnXhcDMZ9qKhWsDktikccLg",
  "key2": "4jqsdnp5mgFFydjaRdvwZG58oWmAgeYjfZ47hJPqKACqptLKR4raEub5MkzoNyyNED1jEu337jwwxxgnPQrUWFZF",
  "key3": "2bXxyy9z1hWgVW4wbxgZ6vDQhH2o3x2vXMocp9kqbDc2y3n7bjNKds1UuimFjwpf4eJtiNg4ELSLLY2RQdychgaj",
  "key4": "2aihqt44QS7DftADMu6yy7ihSK7GdH1n6xLpppCTC8hE5TEjug6CE8XHm92mFdmPHSaWgBKPQ9z2wmXffUVVVcfG",
  "key5": "3fauz4jJkMuyQJTDng9U61hbf8vJZQTArVmm2vfK5zYKx8MCn1P4PA3ExTLTAFEfujovN72fx1u9f2QWN2verghD",
  "key6": "36ZHhQtK7Sp537KUr8Fn5974X7DTRxcDFYSNUw9qWzesK6iXYC8LKoZKP57gJnQPZ8S9qAvLpLRbGfEfc27g7jDX",
  "key7": "3cjw5ZBpoKiLhoSyBYWCpdLrMeWxJTadNdPE1sYNnBoXPaRSptiSZtNurbSUR29yazWhF89PPRhnr5kFepXBz1bS",
  "key8": "5rUbMzREgfYoixHW2gaPWHbM16yDhYtBMcwPfGu5s8L2ET1UcFGBToak5kx2vf7SwNwNWWEJ6daS4TUqy5t7E4oq",
  "key9": "5vwJauo48r9wdkFWc149r9NNng9QuLj8XQwynfz6Cmam5M5X5MY5UaNMobY8qijnpCgTVu8mf6FDj8BaDeoK2WZR",
  "key10": "oXLvDQmjDowrzrDiUNjQYozSJ7wCJmJxcrJ1ss6RurK2eBqXSxwshixK5W38HPiU3hKvmQbdM3EUpkGA4cYAV1u",
  "key11": "4XdzUwBLv3HKiLXju2D1FWvD3632A6Npq3uYjuCm4U2oLn9UPWhKsfAGrWj2gPwc45q8qYRA8oLtbzEE9AgybMnK",
  "key12": "65RoJUHoYWmjTxUPyef8qdtv1w9vUJoUA3Cw8HhfMUF2BXotwQ5Ed9btDiUaJVx5uMvKXQ9VhL1uXYmJZpoqM5EV",
  "key13": "4Mtnnpg8MiqVxyk1Civqs3gi1UkUqDaNiR66GeESHh5f1fWxg91LRPKbqGZ5k9S9D5QL7S8D84ZWQNqwKGkP3BWT",
  "key14": "2tQu7U9YotFqtioqq3RMuP9HHZWvL64qfqHvR2UvbgzUyT8cGDBDFfCGu8jeRgLusVUw7Yec6hDaGCfVLsvLNARE",
  "key15": "Q2EDGugy68P8WbPyBhQ3y92FJjeHt7oRnXhdKjKroBcYs1dbDffXYB3jzWZrSVhD5UBVCo51DnWVKuS5sh1gcVP",
  "key16": "54azKm2F4mfzGTqevkXMaDqCXkNUqqS7QhVoQkkwmMQntqbAkS2cqXdR8E1u5nhJLcBnxPV3gbrePdnJLm4hzEDQ",
  "key17": "4Jk2pJWFim2eibPa4LFpxNmnzbVi3pyviM1JZSJJiuaq5qdRwaAmvSaUfQWVtmepYfzrU1sDc2K6GiqmTJy3yT5H",
  "key18": "3P2ce1sx76P299psPtBZAwB5pUJ3xwstcz5KJizHpxLRgmskGBxXN2uznWH3iMUxZzbtS4wCaEaRWbduJF6Wx1pE",
  "key19": "5R2wkbu3JtbuwbcdpgTsZLDTLSn8wTSyVEkkfQLhEG2YzwqS5WEhoVgpdEkuc921NphuQRV4sWog9PqJFqNRsfpv",
  "key20": "98YWMSJjscnkwc794NRr9AWqu3mK7Hvn5wckwiE2SQGNrDdzAiiVk9uu4midoNPwoLt7tsRnGG9kCzLg2Ls4DsY",
  "key21": "4bUbCQKYRDcpoZeTnLP8pVMZhrL6fT8i83sUNg7nodcrF423W7yfXbpaChMW2a5VmoU43p28tq2H63QWEtLcKHcc",
  "key22": "4E6YXnBSPiqdcJcFjRYKTeYA7yZyFkzLyU4t1aZVFSRZSkYjTjKJpcmsRXVUfb5ANVmD6e77CBT3u1jghkX32nSc",
  "key23": "3XgdYfW2hVnbqGUGeRz274Rb4AG98XDTkZt4xFNgb9T93SFR4BJHk54Gofgnsr8pxd6rj4sV9wAVExRUoFA5rwh6",
  "key24": "3rA5eSBrd3oTiYVZxZsaKf1bQBhBUpQDC1npN58qdkgqQ66w6J8B2zfDJPyoXYTrAK5pn7NP6vuHJ6K8Vt8tC91v",
  "key25": "3BxmPBsRbmzavgbdCFxX1DTyjemk9PwgapdWJwE2eYQns4Rc5GfeDTDq49GSsyHRPUFVKW6SwVpxkAp2ToFK8pwS",
  "key26": "28MZYvqgeRseWRYGanupG1pKXNrdZFwVrK4WkBHR45eZrLxruMBL7KXTJwWwQFkwum9HqeysRjktovnWLE7ootU7",
  "key27": "4R7KV2nfvyaFpyf3Nr3jYTTXFDE1iQ65yxbdWpFf5Xu4gszTk9UcVyb35Zb9mh6JX1DBGwCpkzJTS79tNezc4jH6"
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
