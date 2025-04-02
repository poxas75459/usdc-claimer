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
    "5JVJuTrCSYXxQQFqrnmAXwbxvJRTPRXGJJ8YvzuGPUiFeCN3AokktydCDWDe9Fq51Yir7y9oJmU4XVPc5qm9yPYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oueSKhTw2CjUU6ArZCfFRaQVgBCqbCrEYj4uMwg9qfWn595FyrXk73AJwAwYWyWrzKd4zqiJDr9TorpuDy7cCSX",
  "key1": "2K5MZxcBa4SbxAonmDJxHmRiVf857YdAy5USzReZg9UZkLE8Kk16HJzgeihVTNHG76aSmfojQsFP4gGKCe3jqHHX",
  "key2": "5cGgETgt6aHFx2hzMVfSuVuQhsqaELk8ES8qhWRfDJRYAa3iZ7x4mud7ju74hPvw4AuMiqsvWWbGVaWbx7G5Coj6",
  "key3": "4SN9JV8XDdKvkCKcwq58dWdghSUysgHGVCrsg7GmvGAFiy6YhqAHpjFETT3q6SJFQJRzUf6zNQgRqCirt419LEEU",
  "key4": "29cjefqewdadNUvr8CHtpKGvZyji2VrZ8xA9KMhUQ7igSk3D28U8653Pd4EjYW4Pj1dmnkvrd6523YVUpmideww4",
  "key5": "2UMN7hBHaD14uv9nVVgqnRuvDQmexfbzNGYMQoLcEtpLrMpMnvFa1kKbU5HRkkStwYrGiDk813HhzhhESESdXPGp",
  "key6": "5L4XJQQtXhthAiS1G8dYwCzfbtvd4ByzC4BwuLTTGnfCXcWhSfHbNo9f7pm1n6FtTL3d6QX6DHVNo3MQHWQxexTV",
  "key7": "3EszZa3JX8Nd2YopM1EhsK2Bi9yMBAVvDWk8yaexoas5qs7eT9GqFeZU91SDQvGML73z8191JHeQVjqvG24NUfgL",
  "key8": "cFKzPjzaeWP8vk3ySu3E2cEUkxFBfMuJF8BrPJhba7YdTFPVfmaVWzY3DC4nzPPkQoXjTsFZPQTkfZVXK9mgUyd",
  "key9": "2aJQ81ymdSZMFAwLB16d4LCoqp5Tf7XXsGUcw4K3EooB6SJYng6kqewoJ6bqkRy7fp5QrWmTL3owDH2HD3YG8fD8",
  "key10": "6fNu2tsCGcr28rrHM3HhdzWwMpUMLrTTEvaaTy2JQT3pQBS4Smm12LngGmanuXkUqMrMo5aQuy6r9Uy3ZsPPHep",
  "key11": "2zYZJXfo5zrgvanayeb9vmWpfypAZzQpsP9WQ6T3GqEBZJeuYCHKmbvQtFDraqZ1Y3BYRhpRBk5Tz8gi3cnBWDun",
  "key12": "5TpHFjBN1bK6P1ypKs4ipzFagAo8GxjJQW7HQBDGoeiyGmTJHzButxcMhLXqEuC53vkFQWfdgjw4tLVpLSqqPQrX",
  "key13": "39HH6xjJHpH7VhGdfHZtvMTkTyGwtx3DoUzdEsjz6fnR8UFR2yt6wVcBXwoYxR1A942oLN467YVtKAnhuiUpUjQK",
  "key14": "1SCzyWLVXDeZcxnCZZPxVMA8XmTxH18SccZjYj1oQrjPrUSPU7QAWteV1cLyac5JUpLenWn5LP1A87yWvqzhWLp",
  "key15": "5Yfq92JmX8rQKsK1HaWniZq7jmwA5ir6uyf2gyHh9cGNBupUQR3rg7eHGPq7wJzWRAUVSqM7WTEnQGTTdFDTtoTJ",
  "key16": "4zg4UMkyBHqgXBXJZM71FixcdrEGFRiNeHuySSps8RnjN1nBdFKJgYZmDLdPJKvK39PoprXQsG7BgtsHsNW8Su4s",
  "key17": "5DR4qXZH8T8PbznuL4VJRqmCdNSbSWf6v1KYG7pbxPBpPFVJxQYbGH2dBkEHe9ap6WrFSLaK3ehhRUkdDBf1RmyS",
  "key18": "2AgpomvtazqkJCpJjeKmMkCEzCTjYBkm9E2XnFrNgsA6JF5UqkxKE27assKTWpwy6FrgPGwxU1XPuDuo583xKKm9",
  "key19": "3xrfENEPjZRZkqL3iUfGqHFkTneLUt1rGNrich4vabxLATfXweQRGJytntKZMHqPW3GcroVLFfoFdghPmjszvrt6",
  "key20": "5GVxJe3Asq256cyfcSrg8mwym9eRanMyxWePVBFAMBMSKjDqRyexgjseRfPyywajJPvnYEmRXDhKhzBgLZTtGdgz",
  "key21": "zztX6gieFt2wv9J51SPaVbkYoq4xDatpDqf3JkKjjyh5sbS5awZZiRA18MDP75jvVRs5Bix29phaGvjvDhMxHgV",
  "key22": "UcJjtrmVbiFv1nSmpk61LVWt1LK8VbqHUZBzEvj8RBaZnetiqoi9UW96umEuPAX9yX6rWcT9axq96JvtWYjwJ1i",
  "key23": "49KYZSRjSiCy2aiFwmmu2r582BCGLLU6iRHWJpVVBN8vMuEC6jLnxXMnwzjgV34jzuoqBDK1oUE1Jv8xd9nfAsFx",
  "key24": "YxJB2e7DPKnXJW3bvsXmukME9MCNRfehwRPa8xggYD7EcfTjc5qPfUW9iYsJLEAN3iE4bifZGyCr4dtsTYJFwr3",
  "key25": "oCajSgURdZMSVkqKeEZf2vBC7bz6sB67rc6kTgvbu7k73d5NGY5kHFZ5CxqG5FswRFVFw859ysVVQ6SqhPNM7j1"
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
