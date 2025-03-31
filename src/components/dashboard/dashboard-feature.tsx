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
    "YFqX3TEjPVSH4aktj8Lup9KXR4GAKM1Fu6E7ABPYWtPkHbutPXGUkj9961dVicXk9kr385xjht5UjWjfvi11DSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3MyJg5TsgSF8KvjVP7iPT9ijrS7jpaici6ZWjiDbRydUW9wHifvnuY4xmLSuAXYpQUMW8SBpvRRUw8GsGFHFF3",
  "key1": "zrZ9Eic7o7b98b8fZ8N4mUvpNTCkd41JhFqR7RBFnT7QgwWxXxUMr94pEDzpQ1sB6M66EA9vydyWzaSQdY9P81U",
  "key2": "3aKD4vY2kFubhSEZKZkEZkcckMLtLGHiUBkVc1p4xRfW9kbPz5auiRXE1AbrcVv9JJZatFpo1fwQq4f8zw2owxam",
  "key3": "2rssEjRS5XGCt1ZkdqB96EQ1PSBvYLycdrh3UgedDryfRoxoYq4No5HH4Uw8Z5JNDhE5moNtzCxKBdW6DB6GyPhU",
  "key4": "2kT7wkqzqWRNFHzJf136vL3jVo9yq7jJfyEBTr4QXVEzRssrQenuXkKkJrHgvtoV9ZJCbbZf6DCjSjBnBqRmdUD3",
  "key5": "cubMKxbdZAP1Ea6N6uStVvbPnQEFNih9RqMgLN57mc6AE2JLCWYMM9j4R1KJSVQAtaqSGjT3cynPVmwjSM9PQAS",
  "key6": "4DaKfphrMXwYjEWqn9wZ4vtxoi6tj9vnYtpKh8SxgDaKTSKJjyxeS8j1FgnaZNNFtuR4W6ZenLyrtC6hGR5jHNYu",
  "key7": "3jTbJV9fagcc1D32FcRDHW6vUWofX8A6GNFjuLhWECLxE4CoU1c9QhrcH9F41vv4zJXAgoZUJXHzqwMdg2BHkA4X",
  "key8": "4fhNei9SaiZ7Q9h6VwCHqh8PdEMQCciLXKtDAnygnuCcVcn6FaAiaPyLee1qzPCFpxe49BJfMNFK1Lameqqhrhe5",
  "key9": "5Sn4EruffgEvWk4TCvuJPi8amX5ZbUptiNKyhPD9EApEMVRZ1MyaoyCxxT8F19QkRDY3HnAw1wqLbVcLamqqU614",
  "key10": "2xSttFQGWYABUMdg7JGLHsGBsq29LyEU3sNJH2Jf48Kouwq4seKy5K73us84EWFFe5pHfv3EhQ5ctgeqdXymBJoJ",
  "key11": "2YH3snt15FynsiftxWzECwvRwePk7EmduoRKvMDPYorjxh1fo2P7r2eHhffJ7TzEg9tM5BCDsqaAkXGH4t3rqBQy",
  "key12": "542WbcFLNqtqPFt9m6ppaMGvKhVhXVzH54acntRiLkg4DPR53xAjdL2B9NXJtzJHqSn9txcA4Bwz65bJ1UZWfHtr",
  "key13": "3fNzUV78v2qCUzXZ5GynCKTxU5BLhk6ZHGsRqJ6GC5j6CkXGgA4KPLLEcTCV5UyaJ7i6NjsAbJdPuaQr8rkyoLcu",
  "key14": "uMrVv1VtCAMUZM5v63EHMeoKCgcGciz4wa7p4HtV9D1dfRn4bLM7TVfXZAUJjGULgYC7x72RK3SchDkyTrJq3DU",
  "key15": "3cy5eSyF1iqb2oKq49YU9DpXqeY22Uj4zjBFoW5Lb7SjdA2vQWGzDiqp8U3QH6FJdL8HoBKj5GVT7iRpaL6dKHc2",
  "key16": "4gNVxh2FojsKjM5sqnYkmCaUgKuNAq2QXbHHSA6NDXUC55f7UhzuHmmGg5RGNgC44Uqdn6zbgkxnCRYvJ5NpaL1D",
  "key17": "4WPKdq8fhUPnKcM3jFPmtcr3MftsMQRVCVxayrA72V524GQWfEELNMp8bYuVUWyw23N1KGmtE3y9aTUTjwY6bw6i",
  "key18": "4xLjRrZnYgvU7Dvzbu4gofSQFEW957hEune86VzvG83aTUdMW5CQzuoX7fe5YSScKPQirpBA6HDTWRCfw2MWQusL",
  "key19": "2HsYV4g19QJqJRDUaPLg1i4FVJWGRohhwSvtzHZFFrRPxrnzVsFpz4SiGbgPudbQY7RVsyBXLkdTGtjH27fwLFTz",
  "key20": "5dtDcS4WSdZ6V7ZSetBqgDCCKsvAV2RPvnBADHEEorP8KbDqQp8apGpf9qFbwynfnh8PV49BatNk3h5DxkWda4zu",
  "key21": "35iNMgW1hFcmH1FWcmmAyecd6vPMbyDCBsigCTUxhco3t94KbZcewNLo5ixusywAETE5khY5EPRauAWpe3m6jG5D",
  "key22": "2pnfcLATTshSpkAsE28dk6tTnPPoWSu7W31p9GAPpobK3MGv4tpS8Sugpxegdz9GcQZs1uBrXrbSf2s2iDu2PYYo",
  "key23": "35nwHucCboWti1SWjH9HnHwcH2fd3dWtv8NAcH4jEZatZdfPiBq8sChqNLqwgnr8qaCfQoQMcyyjGt56qbUk6Niy",
  "key24": "5KtGhjE3bVL4hHbGcqnXosF6v2ykHELXCeZZpQ8BY5FgApyALXgpJLTTXHSGaZCPxS8VfZ2rwTMyGZfMfZPZp79z",
  "key25": "2qpXtPE6v2xS4iM4tjHmDCi6gCax7jiE66Ui3ZoF7BgqBGfUbnwJKdyMrHp3CNWyrD3LJtuSWG7M2ZGZuJEY3DTo",
  "key26": "2yYzEBxsBENR4C45UkNg9avyeUuAhF8tkm33jP4HYDL7Sxdf1gVinof4EqbAVpzF4VSe1w43HtrWJNVbiceDs8Eq"
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
