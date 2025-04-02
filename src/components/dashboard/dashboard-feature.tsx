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
    "2eBVWebb9J4ViTWDAYc5nrrbfq8uKm3T6eVPcQGGZQRzJNCkcefR5crgZ9H7mBUf3o9eAMEHE8Q3jRDvN2HwKdku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQ13LDNFtqH3DScoadXLahGx7zRKAN2ywcS1dVPUkZu5knSrrNhBK6PgyRQru9xADw4FoQaMQyKuEjRDcM9Pvc7",
  "key1": "3mb6m6qETE4RfKt4bffZjtKuVFcN4qjg5uhtwh4XPdukSt542mMPKTHpBkVD7UVgNL6nrEyUawnmYuo6T2iN98UH",
  "key2": "4DVhN1nXEpFtz5wLAGcKFR5BneZhcQxoHsehQCLWiTWZzeUFJujG6JmpUMWaH1veTYiafGvRFUusZrH6FfZAT5RG",
  "key3": "3LPYSU7kawVYE2xgkeze6Ya3zQmTeAf6vYVe6nAx9bY327NrBhsFm7hsmgRz1eagptXvQjbBdDeXRALLHX1Ro6XL",
  "key4": "B6NMqk1gB7UDK5N74mhTgQLn2Ds6kEtM5AbStnLdKwgDG91jxjPyJxZFPMz35QgemNSefDGkcnLuTTMpAN4mwHQ",
  "key5": "VeCtFjm7HdAvNUv3rqJ6dFWXyYqWmkN3dJiHJ9pwPgxnuJS9fJAiwZoyv7tzeFJ89PXGWTZjZJPuR3DNVveWfea",
  "key6": "3Ms7y4odXzLLDx5JYfU9Kn4ts7Bvdd438KFzzRwSsBc92NhiXzi4Hogs6usZUweXGPBPaP8vU5BV5Aeavc6LLSLi",
  "key7": "2sej94dGc5uFwsSRfreACQEPtnWwPH7cgRZnZN2VhbrdXao1JJzFzAXyxdLLCXg1xL2shz4zqmewrpCY2STjudh1",
  "key8": "3Tg3qjMV8bBcnRqZnK7eby7dCCo2seUp4VxkJLHFiRPxR97Lxghaq4JG8LAGgkXo6XSJVmbr73NZBNocr8KjBwRJ",
  "key9": "5UK1TWh7CbizqfUavZQ62KeqK9vSkqZ1gSmR3NsUGPS2BgVgi4zDTxXkJBtnY4e2C75WkcjWdcmLKCQfJ62bjGxS",
  "key10": "4PNKxkWVj9JRXwhxfsWr6QyxyQ2cMq4DS3iT1VSzeYPSRpcZ93CRKdQSAGGEnvCGur2gQjPiAskMNXdBaGWNnbhE",
  "key11": "3aZhRaE9dpi6k55YnZiZxEKXBAst4Ka3aLogUXKfKXdwTxCNazTo4nJXNr4WxLwwjDAHGgvuvYiz3RdTYmmfBLwM",
  "key12": "4k5Exga3UPesMEaqVrNGR6fvNBdRrA6J3dyZTQchZJaDCju56Eyj9LNRFBK1oQbmCvo7jrvkfavCxVaVLzHHMuRt",
  "key13": "kMZ5qAC7vynctvoW6V2jKFTWHHu2EstvaGUmf4VoqCA9LumwVh9MbntN9xp3Wb1wHSuLg2LBYfn7oW8UgQMUrQa",
  "key14": "5HsMvab1UT1qzQLVSJ3D9QuTGiD4MVeZJdBgsgRn9GXpEz1cYWviEbyJtthn86wRccg5j29sM4avSighk5ma18Mc",
  "key15": "tGRuAHXaZyL5kFRxv6xVE18biehqa3YufpZbNTA89tXBV6xdZPWd1AcectgZpizYm6qeZ3PysU9gGYYuPtizTen",
  "key16": "2dnUtNiEnsu4Dn7U8nUL4QWaC6knmFHANDZ83u9qcsAWvTQAeC8xfvvTQ1VZ3kXQ4ZBBiteMe6PXMTpCNUv8LE4G",
  "key17": "Ntu6HfThPtx7293qN524Dy6TwTauHPFoGHpwKVnHk7eDtPprDPpcKabnhBhNZiDWTQEogCuyUw9p2XZhVpt9cJT",
  "key18": "61Ej1RugwGUEWCEhFomQJz4obYkaWrw3bTjeBKMWzX1krUTjGHRN6fWuaP6WRsYr6z3wovgMJD99vq9WBT36MAsT",
  "key19": "2sgKVgsYUYhSrqkgtCegYzN2np3fBHbmjSK1q7Va4iEq3eMDAAQsHafiMXqdtqrXBLsh5wCE8BgytypHBRxvYU44",
  "key20": "4W6kFyewBZAqHD5S6Q2RSZJB8qFmeMBrYf4vCXqKDyUaM16wYi6uYkCToBUGpZLbbUaM6DgL2h6zoEkzE4ADxGdX",
  "key21": "5uUifAC8KiSh6wxiKDjVA5DKB9uZbFJdiuNzV7v9TTbb8mWCedngrqQr8yNf7NcJatvFU34QDDLhazENyqQDDZ9",
  "key22": "2uWo1urcYKhEkgo8Pzjzyivp5wLCuyRegRtdg4rjXWUTaxNe2JB5FZXiTvLsCWdNcVfMsq8ir8PWo5ubvdKpUpuk",
  "key23": "aJNoSnrT6aWMct9MEivKCA5B2gtQDmUgso9X7CMH6JSAftK3Wwv3WNkUdTxGuS8YGgK8zNNBmvwT5bjf7S9S2Dq",
  "key24": "4v2v4GdyZ2Q3fXW28ESSdxu6J64SpcxAtnpMiwJ5rTFF4dekrkegPbWzX91RD5zUr4V4Wcj5zDLKsnJ26CoRqKEA",
  "key25": "qKN4aKPptfN8eHY2jo6JZb5cZYMr143K21VUNqBSWMvuPq2itCNGmJRDgToN8yBKDA3kw2YmBQkBW2YDDxGonHo",
  "key26": "28vxeFyiWnZNfeaVzQKU9yinU3CpEp92tGpMj27fuA3S4pkEfQr9pN978ZhD49mfivcRcuFx7jqmskK9v3X21yWK",
  "key27": "epEqUJgqX9wR3CPb8n11Tt9xryaXNrJPn5yK6SSqdBW6ACpxpoGixwdYZAFjwnEAryiky61jrb9LEFxAbsjgcUk",
  "key28": "6w76F8Eg9kwgnxGScBrZbe3h57N95GMc5g3dNwUPtmgaWrF1gYXpzYHEoiK1paKpFyB3XL6HqGWKfFyRp7opgQv",
  "key29": "4wbZcAwmg36XtjMR4g7XkStb7vUgdB9nvgSLiA6zVWkVyU2mxfPxN6EDp5AtHtqrEpEHKMAf3R9SPyCPzmQktvbj",
  "key30": "4iVuz6duoRKSVqYaFdyQ2WfaFJysmBRiYMUshbNxAJsepX6cY5Z5k7RxUfkummF76RQardH2TM6fArBvNMrydmgv",
  "key31": "2FifiFTQ9cMxtF3Qeh2Tfo7y8mR9U5hNtuzGdejCP6zRq7pGDEGXV7kmLz6tR5foo2HQQCwPUmahL1f5BDuue8sT",
  "key32": "3BW55XdP2xGjTg6qs9WnriKvJ8XG44LvQdiGF4fc2D3yi8UM2pWQRBL1S157KUuFmkbZjUyd2FnyiTohNHe8m3ve",
  "key33": "2iR3W3wUrhLxc8kKTRehx5yKdZgycmott5YSQmAHX8FmcRraYE5CtaEgrcaJcp1yagBXV3zSjj7xZ1T846ygXzUt",
  "key34": "5Pyr1zPJUJE4yQdas8qvQogaHPxnkUpJgA3sittLu88urJ51p7S4ypo21vMtK3VX4S9SoA6BhHqNQbW7MsMxiksw",
  "key35": "Q3DUmUCjVwgFqKF5b5h9RMvoY8vwKDSo6L6NNQ5rAh791R77Wxok21GEbyYX7cbcQRavcgnveqTeKTEcfHmbUes",
  "key36": "2S9e94VoMgt3N9zkVhDv4wNghKELwF7KZct5ZtAPBqnQcvi3MUkpNR9d98hKkYKZLBheghKUdfmbFVoFYmY8WCW3",
  "key37": "2m47W5ewoXytK5zZsBReJpqLz4gg4Lma8XGMfJHDX59DFGmiedjNPJXHe7PkYsZ3Vy1C7YW9eEr3B8ibNwu8zNGe",
  "key38": "66mybZ9MkQYPXz24kERX8FLhefc2JXYCuB5QZWqVkgrJeqSnAUznX4zVtgNXtDe6oqt63oEa33ARnmLR7aVoxucY"
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
