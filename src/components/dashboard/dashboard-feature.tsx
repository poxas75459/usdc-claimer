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
    "3EsC66gDaVRHMqdpuG8h69gU3gA65GzZVcaEKaBiEocjW1XUiyVmJZVLr4Qg4scHfZrpvPaLtHDFwHAg6ttqnXVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9M2qm5N3P9t7ESBFnfRuFCiV21YaHueQd3RVuYBp9Hk51hWiheq4eLdbj7dKDfyYEoCU8dButH33v9Mt2havXU",
  "key1": "5tbkubdjazMKhPJp6msUCmUGShPQhFte2N6AijAoV68765CPmAX4YUojRSorPqayeMoH5YZZoknCcZQ4JaH19Xeq",
  "key2": "3DhetSEZ5pKbF3edYTnHCgn5G8LMG1WZVbhnha5a78en7KNEZjXMNvKD3i7yUcPsw8mQmZSgcpZQiYGsFYC2fgSJ",
  "key3": "538vTLdt9nv6LJmLTEzEraQGvvZSavpMzJDcFmcmkFEx7p4qUFQTcjvi8Rb8tUHL5Xttazzxuqab7LD3ZqzX1qn5",
  "key4": "2NQY7Dg36RsUKKPUA2acwNmrUAA1XWWviK9SvPyV665fxPWUfVSfKe8SBrnepCWdDPJ5Je4aesUmf6jatL1VBqcr",
  "key5": "2vDZm5nLfh477Gk2KEwSpThCVrDuZU3zfXa7wUazzJTXocZPkHFz4XNbdP4ynor1Uv7wePjSzDHeURPUSp7C9Trs",
  "key6": "2F3DyvTofACKnVWr2rGsut2NC32Pu6HHtXc2iwEJBJ7biYkJxCsomfYzYDSWwafwYhvqdCoe2tBAtuzNCBmqvARk",
  "key7": "5nv1nJAiZaXiDeM3eNUsg5A232C4kaJLHDYoNz5sC8MjhdBphpQ3obSBc2bDAi85WP7kBb6ycYh6ZwcgD6WK2hkX",
  "key8": "4Dkn3BFxEDdKfmpDEy6yTjyCvSoLhp5xiSWEwwiQkrpFcquqnesjCDSrdNdpDt5LEAG49tdvzjLUqetxQtYbAeoV",
  "key9": "DHgrvyXBZrkXZVUYBGdNThJ5S5dGZ9fnP1j1rUEzqBv2hBHPMBu9ovRBkydZMkXJdCAzXnXuikB8MSz1H9DNFrv",
  "key10": "3cgmPe5vnRTTmE8dA9EiEemm4q8dbap53VjnLAP5Uy3QrSKSHtS9n5m8bUBesmUq4ecZZg2FjtvGFz9MAiXNNp7w",
  "key11": "4FdVVTbacPx46X398VSVyXHeoaek5BgGRQUEuHMQq1Cw3xyG6mZfC3vzeHN4A7CBLUVAwb2RyN1jLsfBFLR6AmEC",
  "key12": "4yeodKXEd9XirmWM1jSB7Fz6xcchseEne6bnkKtLKwrFv5y6iP6d8aapLEPVzY4F48sHAsszwnN97U5E33qppoh8",
  "key13": "25cGrPwFDFPVBQutd52W45Sitiwjrsv1c6arqyRKsyvY6omsG44kWn9wFAtdeNdhKi3mLgCTXPMwqnzy1yo2fynv",
  "key14": "4W2G3d7eG152vvZwjXugeZJHGgsFiNPmSbBupCiwuhmrePp3YrKhCFrRQRZrNBHYb5FhiaQmCuuAohV8CP7Ra1pq",
  "key15": "2MYwLKqnBPd47Qy7CMm7MTZZJnWZ2qdxxa6XU3CkwJ2uRJPHbdurC5AQxeJrxYWVu5fPD3WiXuEDA7mx2VrQvEvg",
  "key16": "4YVdgNqTwzTzHBGhUKE6y4XfrpVPRbhiDhXPHTLwXYGtKt6oVLPiguzEQNS42q8QtpqtynkcyiQ265B8sosQ7ndZ",
  "key17": "2JsJYQa137MTpDfH3wC7RW3ePS84JJrCW7wayp29QZy6e8EeM32AXd1vhzSG6RpE7Qtt7EeFw9u5uU8Bt5sCQhpA",
  "key18": "2MmpDh6xTBbSAJxyp8DHwcg8AQnDFha3EhveRJnp12bAsb84BeUeSqzPaK8czkPKw9DqyeaJe6TnW5MDtU85WsAT",
  "key19": "3M1Juqfgket3paqQ24GjLB4VPNqPoYN7ESNuGbQB2YLZ4EAvxLSQvgJnSZbKcLEUFXREaSgfMXzCcirUG7ExwEwA",
  "key20": "4rj4swdRDceMvX6RrVUaQckFKh7MnyvpkypJcBWa7PMjphvY4hpkbUMoe12yZj4xXGXMwo1gUrHWUftaHVjs8hqt",
  "key21": "4jQgMV22qtwmvsUfkG6ZCpbETxqHsYSTaEowH87CkR2UVTZwezzoA2Ayek4wRnMUXVhF4x3UYbVzaAkvDoGhtBK2",
  "key22": "4xkgJzRdDnMRxo2CeL5UQUxLzxLtGK1pxebpucUifUP7VigstLtWbpXwm3KnkdRNhzNRZ4VCuYFC3f4rqQiLAjZ2",
  "key23": "2mc5VKz6PbTWjyRRZTxW26iV9DoYqZYYR2gqyuXKVmPv7tWgfHq7cqAnDZhDExpgGpvgb5Sf7cJyPNnQE2nAchaH",
  "key24": "57fTZAAwDKuoRHNCMkMCN77prqYsJPGpmJrJR556qvafE3VXmgda8ZwR3QhGW3pQsMHU5oYgF8B7ZrCn1chL8xAY",
  "key25": "38qDCspDRnGHzTZF6qWNq2YssCbi7vE9pEVQmXxK1rSr9nZeQJwygYDcwPXJJDEVeQPLXiQCwKmHCMTiEMQ8AiwQ",
  "key26": "26gXazvxhqYrDgYogScAMYevkDGz4sDwzU2M7iZ4J83ZQb7162bkSPT6k26ZEvXb37ZX787Ywq6UvAgM1gHoF3S1",
  "key27": "5GaqesAb72EMcWsTAxTU5XeTQPKcqjnpcPeGurVTsAJCv56F4TzPx7xp4gZ2i4nvnTnMj3vw6iNLdGXEQZRdvfqG",
  "key28": "5cpbTyXZnDK9SwmjhWSPH57tAn8A7fRoirLajPYsSL4q8dZ68z4aqQaFUCsug14S4ioDGHTfK8duo4V5TkvPxGjY",
  "key29": "5wVLDX8ZJn5dDh9wLJwk64sqeUvBZP8KK5VCiKtYqVHvVSi1GhwTmjFGbqgUU4zsSSbEb6NosNK4SXHj6MzDUFD7",
  "key30": "BBSnZFBqmPGvs12T5JrxJFiDN1P5H8czw7cpfmYEyg7PbABJPQ19BeatDmX82h6WArjNGh5czxyBPqiwi5iMEPS"
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
