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
    "45fUR5CEqwLCURT9HNjhY71EUJymt7XjyC7vDZTkwiWeFREvCEWhu9QtFN3TM76AG9woGm5VZbCyxLUUVunM6sqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyPJn3kmkSSd9GKF7XVZcV9vaMbyRJuDsQ1XCo8QX9WQ5YiqZwinD9Nq6398SCBpKQnZr4T3P84U71TDk6313fR",
  "key1": "SNExqUSmV2dVUqs2xEQt1Fw4KGE8a61KKLwizbK5fVfWMagUcT2ZbEJcpgtGDQK1S7zqNrK9ZA52CrX3DhGW5km",
  "key2": "5cniv55aWVuZndj9SP4VZjxPAaVp4An2eHi5zd6EMwBXptgXdj2E1ggf5zZAet41MiwfgBGEsykDW7dCkSMjHip",
  "key3": "4LNPvLu58hGWy8FB3fouhP6bQYU7DRmwyeLPH8umN8bELhyU5ev83XRXUjcsQo2gNq2MXeSraroKEjKMoQb4BcPz",
  "key4": "5YYFAtbr42mkGT69HUanGnpqmNf9Fq9LNcPNHXxRGvngVRrLd9fkfgZv1UyauBqs76f5fyoX2sHPqeKbhDuQR7sn",
  "key5": "4T4ZYetub4zxgC1ykhDYgo4PCocBHmLu3578kvuJFBAZLD3BVhR1yb6FWLb7xps3rq4DuURpkvEXtnXWGQLTPjf6",
  "key6": "5WjovpH5okPRRT7LSWVWowDvzECJDHGM4Tt6xxDhWuFdWTgz8ERtEmDvhn3ENfdxbtyGgnuLmnfuzmNUt77Xwqcq",
  "key7": "5qcjJwwyUBupLLVbJs1aCX4Z3H5Qf8wBNohDR51rs32QBgPRpmxZZq4sqsKqC7m91oohWJtr989ETtnjT7vqqU4E",
  "key8": "3Y78gGAfeQJCfLB7PBRVS2L1uQrBnrn27dtifLxGA1h2jFMxgjFwPzjiHJyvGAs9jCQ66sspmdJpDWZBSZ4pjPvA",
  "key9": "56ZvuWYfSEchtzTChDagHH43hZ9xxPSyA5Nx5W3sYTZjKftzSNPni7AMF23dCrAFBcbegANiW2NsYTdrYBZuaKTr",
  "key10": "4UxyDYFG1DjoWm1ipJwaWdxsgjwkBUVwT7Si2phDKT7e5W2G31GUTvc4ieoTs6FNwpZ1WaFiy56q7qhj7VGuWZdA",
  "key11": "3BA8bPC1kdkaY4x4tXAhMmC9fhJaVn7wZpeo7qDFMEoJWbK2mMszpj2YBcnkua3H1sJTwVkcf1muwGgW6aAGd5qs",
  "key12": "572RLkSXJUprZDyQgxq3PfQ5c4VpF6ffPwKsQRtn6tBR1nwD174MHuM8dP5E7RjWvJCThUHHsrTEvuJTDaJXhKDx",
  "key13": "31L11VvmYbeVWtofYG8S4qomd7TRCvpzTFQzNQQDqwHw71XBT4TkdwTbvqjTMMtRBBjsXC7xL2HXDMsiNkAgVLyQ",
  "key14": "53AVSwUsRs4NFZkbkKCk9MVHi5kAvi32s6CAgzLdYQQj3exVG3N9ia2uE1D6PXDJFRXH2wkj6YMuGRJ232Xt6Kai",
  "key15": "4PUGbXjUrK7fGHnn3eG57N2dxTAdDMCiLW69gS6P1b9o9e7ScX4txLy2xf1DtMVB4sBFDP33JjwhsZiUM6juCpNf",
  "key16": "frCwwYY4CCcZE1tumgUHEoCJkfif4JTqgovazJAD9HnSjmS21HYoeRJZU4s4sPezfaFkAAA9jPV86jv7iwp7AbK",
  "key17": "3K6u7TSQngVkE7jFHutKyLyTuHr9RrBoEAaViQvR7pJvbKBNhQRVVnJoR3RFtFjNBPWFPc9VJj4aAxqSceXvr48q",
  "key18": "em91a1eY6Brz72Z3x1L7DSRcqZurntYi2kf9SZ5mjmaECHZ4DVAb5bLLTGvXRYQF4ixFve5zGNGm9r3LNj81pbS",
  "key19": "3KksH9rNbbhLQgPpYNZ6hKirDkkVqg5Tf1UvYuhdqKkFRZpH3hd3DHMnag8fpjXSdpU2YJ9KbZr5kkdorb6bN4Cg",
  "key20": "54KVZhuaydzSwDFqGNb9w24dXmDoVWA1Vv1gnX9gHNx9pdQwg2kMFfsCtiTF96nZqQCD3AGMJLcT154outpVrQkp",
  "key21": "4tLoXwp2E4yDGAZjP7Ur7Fp8C7dn1VnWQYjGJV1FxPxJSJFsywEQKGP3uMkJYdVPDN6qoVnPKD7BJQWKCQXhDwtA",
  "key22": "NejjHo4STnTH92pa7p2BcZkACB5cA8BCG8jrm3pnnNnHxmR6DsCqMB1XXQCm71pLjofMH93M9MVBjc5PAH8sBa1",
  "key23": "A5Mf2k823yjGXxWm8aJj8yydE1rTPozRjyKtLw2e9MZm7oSZJERGVv5Uf3qbSMfyDiRa3AZaXdMNvmdtfo7mV6k",
  "key24": "4kmwS396efdH3HrxhjGWq52g92pcGEiog3VehZgtBLpyzQuUPR1kLxHPuYk6cEc6VZW6XbBwa5tot56pUXjawiZM",
  "key25": "XLBwBrUX2TMUqMWVg5CVXU1Qq3z2vHqXBK6pwku7xCUo9ZjpDv4kbRSkaH9cagiSM853XogdxDTML856CaMrdpf",
  "key26": "2NE5g6dvxSckPbvhU9VR6FqPed2pjmiq72Qc3pGTCexC29xcjWzYL8fMDhRd4YuDMHa7dZjF9GFEt8yFoCJfM4dE",
  "key27": "eV1j91HGPcnEgkczw3sCk9bKjxgedrP4G8m476fK26H3f67Kh6y11CZy4UY3G1PF2cDPiUQCcnYf3NpJE9jzVH8",
  "key28": "61BkZz3vEsUdxP3Gv2HzSnnwuBTFYJNQ5fAX7nhFzVFtt1daWKs1SAVCLavjMJ2rRTsrgihnmyjuyBpgZ74tLzqG",
  "key29": "4bZb7qzBnAm3AQvGQf1xn8vqZbc6C6jEAmRaJcGmTpBf32rP8XLp8rXPRRgwgmc5C4ABU1PicZhbkcH9yJYMfYUy",
  "key30": "42fnDJCyW3jZ2oEJqDd21aE6ou5bttbrZdSfv9LcQzUH2Ac3ehQrU6jUUdgVPamjLpXW46gQWtKmZyjbHTPyoy6b",
  "key31": "2yeAAGtgrTWn1ycgSaSTMwjDvmV5K4RXGNVzG4nZ57osBtRpdeDGmVagzQZmKYvWGyLfN1P2ET7FEcsN25CiWbye",
  "key32": "4PuA2EYbEqgNnvzoiFGevrUybNfHRa5zGmCgvkqz8ULP7uZVg8n1DzohXab91ZB9maRLNcrtLm9srA5PpbFbCmhY",
  "key33": "5Cb2iSStDNY48ZbcsW2xhJA3EPyPJZiQA3Er3E1haHbG4GGVAtzWTpe4BcnUjqoHHrWFeU23JgM9ncmpXCRzoTuc",
  "key34": "2cvKGhKdqJYqLU14meASbehAH42JqW5N3GjdfeqkpU7qymv7nLucuCc9BFrfCzoMhwyQwTomyZtj6UWj8u3tgRxj",
  "key35": "5ts5pSfJDpyEJAPPxrep1fEKWNhxhb1UJ64eHU6cncBa5KyuP21o5AkGPmeByTH25af3ZJdXzXeYD7H61ABz9GvB",
  "key36": "3ni3ejd6hj4LHtpTrHvoGHKjyHDVSa3RKqVPynfHmTDGdvviS3Tre9ebu9xrXTKsyRKsGqV517PHWdMiysKDq1QA",
  "key37": "2G6deQzDiQBeo7HhENVVchYpKLNGAZDj6ek3ngy5brnRzbHRZHDoeDPApDb4GRXkGiY5rzvugikykFg4CuBm4ADk",
  "key38": "2T68qcAtPDzfEkZNiSJn4aFJGRTbBPTSTM3V6rt5rcz2Z8km6vcLAZdNTVuhM59iiTP79zo5vWA6avSZYawdw9Ak",
  "key39": "3gqTLMpMFzWz4FHMjfFZ5To9Y6kd79ipUzPL3ASiUrgkhG4dFLywmQFAfFaGETkF4pQBcqYQW1fF4p2Yaj2M5TUN",
  "key40": "5XkMaXQREEo3Zq21xHkjS1o2g8VVkfsRbgBx4mAHEbJ8EQ4WcrZgXrD1hSuGaQ6kUrfMUopHmbV4ptEbZHMbF57N",
  "key41": "2mR4yKrk7YmQ9UDK1TzkdNaYZvxRB8HtTMs7EPGnisvutxBwWGwr81RXJJTaAc63x6wTdDLQapd3W8onAjMkR7ZM"
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
