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
    "CmJ6UdZ1wNp5uN9wnGj2AnaezAXkuVTvBHJZ9Hz4zSa912R73evder3uA99JqBZXkLeerjYs7FwDQhoG73UCh2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vb6bUGRLWK9qnaDLaRqrgPQPMMoBRAdkr2X7nUQGBmo1UV99SCk829bNetgpkQY8yxNPAxRU2HUGeF4JpboQhB7",
  "key1": "4E7QqDVdapVYyVotV82qsKF7J5GjjTV2ssLvrRms3quCkwg47SWU1uhP3dFfgjJdfzpTKcUEWcbVoYoNhhih2pUc",
  "key2": "25Df2h6Vg9ibD5pEWWgvFVrFWtrL98MeRr6tPMZsCTM7iU7DcV66gSXQgy7TjetYuSnHBw6HHPJhPgHVXUrpGQZw",
  "key3": "YXPpLPrmyye7YkVTtVaz9rPmB2QfDok4sjA2j3Hrv5Lt6fLVyZ86kDhyuazA4ido4CkEihEjxdJSjcWtRZZvvvr",
  "key4": "59fWYSsdrW3FjW1LhLzuakQCdCoHzdZ1y8BYtBKc88pyXLXXaqtLp47pgBy3LR98Be5WtQRyBRxgKuXGHux8zQbK",
  "key5": "7XttiFKLKsyittwpoYLNAm8rT1RV9djhynywumqdgHe6ApcA5WEmEm9dreLmafzQ3tRYi6Gy9vnsjKumnmvtV3d",
  "key6": "2ZZUfTsqMo8bxBvZsNAkaGVFSmB3mhAc9mV51qQRKjcZCWCT4DpAJGdfNwnmPYRd1qodKycPcHFrPFvZMUJDqFEM",
  "key7": "2R38VWiZpTQqURRyczGjHdbWpWZjoy26E6oJqgPpeTPTHtWLVUkseyHMAGUEXwC8PfRxmP6FoZb67JN7JnWfEb8Z",
  "key8": "gcgTZKQiH2UGnFNVrQ4gi6DPYLrSFot2LCsrCZu3MvvaU2hczryVGyqaWjjtmnmNEpyUjd7YdBjNjoxtxSvhLnf",
  "key9": "H14JZz7v5ttzkh5Bf3cYKjBTcnfN73WdeY55VMXAeyadgdiF37pD6pMLa2LEiwX7RQmcme9gW22Sq1cyBGCULt5",
  "key10": "4mLbaDfsPNjk6g7Wbm8kZwetFy1EYi73VNWp9FE6u3GnKgZuBajG74grBFqWpjpLyfYhsDs7twhfFLEakhseu5ah",
  "key11": "2mkdzWrmANpf94F8SGFz8BmE3z4CrsDtz7nCeEp3Uc3ybc7nwU2f6DUA4s2tbYhn5QNJLLzhBppiUV68eNPS213A",
  "key12": "FTpPauySoUd1do2dKNbFWRiaEgPwYSACBdHv3D96GQ4kytjB5y1u8d2aQNmgunhUGFUJpTbr9yfC959KXaGM6ep",
  "key13": "5v8pBnVfgpbv6N77gUZew9STfN5jPPWwV9CtdYUS7KQjMAb4BGvxMvE42xQMdpARYX9Lf8XXP4u3pERLVMVow83t",
  "key14": "42KKrw5DSSFM7C3VvvBTEtFSkpRvBsuS5zQNhiG2yEv3sm8zBdCdtUKZKonDujd7HqSR4awFLsw1CpyGbxx2WKPy",
  "key15": "5XzZUUyRUvKeqyHGa1FctVYAA3gdprXQwWLge7MdfHvonrCD3kvFnPtdgcFZ9nu5u2PE3XmQVkCwBVseZqJnCvxn",
  "key16": "qnSTVnFNPzdyBMPD65znvwBap57xgbfuF3w2gQ9b9amVwgD9jxYU8fh4cLGYXkzLtTvhF5p3Y3eztkjCibcMDr2",
  "key17": "3Ri21A7Xq3MGosq429jRuT8R5UmtDYtxFnie17odvt4wdpMy115cb61L3a5AxA3VUoBRhpqKAZySfN7Fo92gNr4r",
  "key18": "3SMWHxcXEZ7Qfby1PZmV7QgnNDAqo8evHmQS6yXRKbTqRXpqXXc1gPGaHiDsCWpnJBQ1a28Ck7c3o7W3ct3NQ6UB",
  "key19": "5Cp4tgcc8dcduBzc8gtfwh2rHUErsf1tbfuVNVGhDAnkc9frouVhH8jEAZNJ9mGdyGNakUARuPS6RqERnAJGBHyD",
  "key20": "45imebygBgABe6aE2gtgcgZVbJUcENAHgDJyLXJiHvzMPt8bD1agQ22yVVV1npUygoEeG17NDenqwJ3mcmor8JF",
  "key21": "66731khZNcqRAhZBnyk6YoeKdXRoKYdz7miPQLq2NAf3zxmUVEzMDJiJopJ1gwRt2d2mksQxaVd6fdQ746eGpug3",
  "key22": "4PfW2EDSXkmPQySu5xzuC34DAQFQL9qWFhpQVZMnKdGrTLsL6mVAFCMeR4df8opyAYkwvA8d3GmZ7NE4r9sCzjNW",
  "key23": "4dsNnXt3aejqyHm5Jzi5hRbVK682XKMn4RWsBqCWEK8qQJP8QofoFPCqJNXC3bMJqSB6VywDkHVAa3ww1duHxo4",
  "key24": "51vGcgdjCy5an8cGMsXMxd4ewrRRrKAuwYFrfG1BCP5f1kNJrBqgpzrYRKRvUe1YbV9WiRV8pkKDiZXesi3DihHe",
  "key25": "3iPDeT6gejiutHPd2BCdwNSPBYg15jCqLMuoEMz8qsTarwD6K78JaqDYyjGpjmWWgp1eRcAU8BVH74df5SoMqPKT",
  "key26": "2tgmkEHYfYmnYKGfGsmjKkvbRfxXS5qUDZLKGXaaYGRtrVNbGycZQr2jitJMGpT1zT8HVE4oQ3g29bX3Hhn5zzfr",
  "key27": "33c3WGWiHsQYhVAKceS6p8qsViJyRg7FYpjmb6EcrsdYfUTuNPUe5w1R1J1EYsp19ruT82DGwYsMXBnn8mvLEsxR",
  "key28": "3c11W3BDWPcpvQkcEAnZekwZovxfwvY6K8HeyRXAtZKkvCg26Ff81uzcL6oxNybMbq2WWcCyAprgx4EKzzuNoJXD",
  "key29": "4u4aVkaZm84m1nrxQxpQwqVeuv1ZAbq8xwz4JAB219zPFAyXNtFSPt1MBKp8WoCSXLfTKNTHS58oVLDNZ4tFkfUs",
  "key30": "M6Qkhht9mUbNrBiun2dHcWq8aFFYEbwRcPthujrzXiZ5bKqkvG166ybad8Qdx5qcYSg9axfixMr44qzhG6BTN4m",
  "key31": "2oMMnTpsup3KMTTNEY3QbZqTmtLYVBgQTvJJjs2U2WuNjyQjsFckU26mkgkzpn7Ztou7bagx8eoYw4A2vGgfKPJd",
  "key32": "3zKMiEwqPrwzGPKfCh8ycHKjdbcLd9bEVPAnjXes3dGZbnVwnjgg26wwVx8Wx3xSXKbxtboBTV7czgoTUfepWmam",
  "key33": "28u5tY4JackqVjAGyL3av1chncJQDQWso8qKSryQi2a9e8rzcCbQpjFZBm5ArjDDPtXXZxSpEGicQNjjGQGr7Bb8"
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
