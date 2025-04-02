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
    "3WzNEHvzKHTL38iMZPeCjCyFPuoVoHJYgLuvM7AkgQVRwgeQzYJtF4CvpNZ7nAhNC97FZs2vHAiYMtcukLD6QmJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9QAMHqz7du4bguAwTT6G6mLvAGevYGqiydkQyyFTuSBv2eQvVoQYpHg9GrJdBkRUBGw3EcJArobEzXe4rzb7St",
  "key1": "523LAMjv3GTwcpdfT8SBV23v7PdYSPeYYzhwrjHq9JBWj2BSVHgYJfMJ5V2fWKiQft63BMZsmDg4DRsk1Vr1T2ov",
  "key2": "2Lfan5Ba7THFw1tAvUV8NkRkaxEcSwAm4VfsUFesTUFdCHe2c4Kuu4FE2rxQ8tNC89YQCBSAVCfgwQoK8cKjS8cx",
  "key3": "5QBxfwWbFmyCfVCTE9q6qHiLxt5vw4gktHesAcESZcvv4FczgsBx5gA8TUtciqTcAFxvxp1TgcLtL19JQb1cNVjh",
  "key4": "NF3zDExinHGP2r9Cvp2dyAAYhXdRUCgGtWcXoAqiWUDtLotbdnhc1XtCi6HsbXrPBTdbPmeqcVZvqRrNnmTWT1q",
  "key5": "5UYETwTzV3fTMnAf3wi3jbXGX7TNqz7HgfXnbwNCbB9q3fWMRQmhLfU51Z1Wztp4gwoS82Tk4bg4bsAnJCq8QtF2",
  "key6": "XGWdyxFnEKRdutWBbAkSfBiCUEn5L4fRSqJpqSs3JPk6b5XecSZFB94ev9r9ZadqUd6aW3JcyDjHhdYZ8Smkgzo",
  "key7": "3fFLposRA2y9ozoWMjB1rZ7MhoL9d5YKgpC4miNRzeaqMMNAH3gVM29xgnmmKyvvAJp1V2TpJNTQdRS5hj98gphv",
  "key8": "2G5fRkSswdpMAqWaXKuJKAwNC7HLpbBkJac6zYZywoirxUfegdKm7VPJ4DV6WPEtWWtxmABar8xvYJyJZJnu1c5o",
  "key9": "NFxhKm7uzC1wbF55yTRU4t5gNJsXtEQGoLnbNzfhM38bfPrJV8avJ2AWj6UAzAWfgP2HqZWFSYCxMGxYZrSZGDC",
  "key10": "4A5cyGM9VqS3kjo3G3nxezMWpmrDvae2TjvjZ8Np7577rV9aBNJU2txAdgfJ8tWwu3KxnfwQcKS5jDyxmp1g5rtV",
  "key11": "3g9gkaksoW6hKxLQucJGbX5eHLYCkTjYVpMDPKpV77VqcK5D9Lp7Xv8VT8174HrUBRLjNrSDtakaAjVhoVFgBjwB",
  "key12": "7LcaaV8H5gtjDH8VKgqVDkhuy5ZNeVVu2QR9wRbCk9QJJLpJAVFoKz3FTCyS1VVYPAfLJyaLj3gLkMvZbTKdx1t",
  "key13": "3RpBFpTmegqyfytFqZRZikb4npZqDNc7q472qp17geAjCZ7ohvDcxpDByjfCwVtYjE5uZzcsCXZXzdXhvkZYwt4u",
  "key14": "2sDyzEm1AiM6MQCttLR1ZFGfy3bM2hgi8HRrmHZczDpTYNHFMwSfMAZ29co8CKky5NA7TQAkFkYp2jSdGErsB1VD",
  "key15": "3dVLG55LgfgXPWmhXv7SccoBHdom5sg6RKyNV7HSaKF4une8R5s2tmGWwA3anz9k29cpJ6XiobnsDefhJMupN9ap",
  "key16": "4EByoHNsDLBoZXm3PG69QU4ZZJfW6tUAL4o7m93VJf9rWEVUSvtXBzRsQnGb5wz22JB6P3VdQ463i5rVELHCPLTm",
  "key17": "4h6gczJTXxVjx8An3hzD98X723PP1xDEyKEXjDA3o2wzB6nCfovZd22BqnAmP5GBF5sFjgyBbZxAkp6CF6HqHnAp",
  "key18": "2FaSuocMG7MQqomNHVALb5Y79KhJj3naNco2cE4gN7HYZinZsf25J4wHADjqDX17sCUdLzcEbko3YdvJTUJb3ChL",
  "key19": "3cT5zSVEtcWHbwMDQ6cA14goQWnVyRU726dMaKs1f7xbmtLNQ79MpJv8szCjMxmJRc7T5ifL6gdYqFR8WRpWrgd3",
  "key20": "2u3eGyiZB6GhhipiFc27uvGrGUBCQMxaK1qvp5DJDbcoY3gbUVypXJz7hDCJBpmLxmJDtKJo3634rw3JbHqrKP1M",
  "key21": "2wkps31XGncVTZMRPGrmfBJAiESGzYSMrxVGAyWvPXiTQzw697MFcXjaRH23h5wYtsDW65SzzxpW1kggA2xzQjRj",
  "key22": "5VEQUGZE5nbwQbnBh8RpRLWEts3BaLxa9HPswkruCY27ojGt6HxvobDri5pGWw6vatHJScYqvSbBrWB35nKynbQk",
  "key23": "H4DvpBBDyomHS1iNtmtEEjcDXrAxRYnrEb8jwCoCuQBwFMaoyr64dPquXoy2qxgaEdmqYsWkQwxjbzaTCeTsYEa",
  "key24": "5dRaZDRpSpjgTBngBTuFv2j1zfEBLovJVKnY6xkKgMYpy8whz5xcZ9h3xTuRm16GkaBM9fPHhw9bWNB9nYoYJsxi",
  "key25": "x3GymyGBGrktskQ1KcRnrAWwJvovojogJueRa1HNa31JJbDrBFSGySbp7fCPr3MBCj5W1uQe6FhEJgJVAGRUkBb",
  "key26": "57aMcLPmxaUmJGm5Bj5Yqk7jQxSaN47nQQrgUrVLoe747iHNzc6mzZM9oNNQjH2isiUvi5AKQsnnmT1jh3D3hWSq",
  "key27": "3j2aBLPeTDJYacgsPqQbWmxHvvWzB7FPG5RfLe5ihrxVudZb8v1qfcedrWzqDWTRTkBUYdAax4wzXjhS3tcnATKz",
  "key28": "2B9m4dnueLKuoEqrjWHt8ckp4hm4rKcpGrugaiELSZi1ovGkKcLxWgt7hnNPVdywwiEj6sdmtg3qLHEp9E5XfW4U",
  "key29": "Q8HRF5twZnZxfdUXUYWrZnF9SezWewmfmsVUa6bfrVdk8XVshGLPFmaQdRiBzh7ko74GfMKsgxoze135kVv9v4d",
  "key30": "2FTw6xhkeRxmUUD6NzzVvfEsx56ZS53VriYazF7BFtu5AbhCVK4bXvCGGpVZ5yTQsBYzCVWb9yK6zWPgYjuek1by",
  "key31": "2RjBXkZN3Gw4RTFed8ZisbSPDTYzHCo3s4mjHL12nakQGbFWEqujoZcoACPzgiU3ftV2zzs8vVDSE7fm4ZjDHP6S",
  "key32": "2FRmK7u4SjmWa9fk8SF4ennFnG1ecoeZN5qf66sT8PdF7pKHGGvBF2Ndc6fimePp98jhr3guRpjz9ajUkX2DEg1j",
  "key33": "2PvwSqTX4BDZZRcKzyrtYTmRanuZ6cCvVHi96MXYBzzeuDZqpGwq21BBkuHHtua7hQiRK8Yxno7oWQbovUSUF4Va",
  "key34": "PfmuQKKG2CZojGAuY8q4thoZ6k4T8nZHpXBEQ5dSfemwU57CRzRvS4LCKTbidhvaXvBrxXVN6DaUn31DEGbGWjT",
  "key35": "42qhwYW9Svt9rVn9TX7eUm8d2hKrMKFVX732Brzh3XEZBKGM8RN77V1ssKU4WmmykKMnDaytv9yJZRwC6L2ePZZD"
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
