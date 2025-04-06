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
    "63cMKN14ZYsUfUzv3WsMPYChSJPTmxWEwPMFKbQduxggcLYq1nu6pLufBPSNRa7vYp897pq6Y36ZtmE7jY425mD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEoRmqZzPgE3RewQcWjbn61So5BNXYLUxncpEYM3L8X1Bc14QXaSRg6HbWcS4szFgHLfX1Et4SmRYxZTQ9KmFF4",
  "key1": "2PzWAH2b2P211nbWfzQjUDEx9GTtv9vfLx6BD6wKet7ncJ838WgHV22LBXDjzzSmheNhvdE4Q8EPaSHzEMfLQ1u9",
  "key2": "4T18PtWUqybFEhTxTmQhLfdbNZTFqwTyTioRYSyByLKzT426pYFVbTkWLSJZcLNk4URAY1uGubXc5zGWJ1FGMgXM",
  "key3": "AWkwwEhz7wGEM6kVudC8Y3gaGZTbteHfJjTrwYrH8ymarovYEhM9j5jAXxarEmM6NmSfeq94qHG5NSjsS1widKN",
  "key4": "5UmQG3Pn62GobbD9tKkd5y1DtdkUDSYQYqeKGnujD3wjxNXV3XomFn7YQJgTF5YmPwqbvWpAhvX4rph2jKTPrrbs",
  "key5": "314mnFwTxXcUhvfWAWNsRWzzk5j89vdtqnzrbqBVyzk1Gg5AjEPGizStYnTxjmWqUpMJZTv9UG4pJeixF3cHpsA1",
  "key6": "2YjrVKeitdMkRaiu6mbmEjBgZEgnyyarSUKNetCzM8n5KZcknBnLz2W8EB85aYYv3j95hNSGuXSzFHsS2pUcXraF",
  "key7": "5N5QoxNtz6RCzczEqZcwrxQ1fu1rNM75Y4BQ2ioRopWdMRVbpLzuGAcZ6UWZhqHHNujCHoPT3n2V5CVGadxH68Gg",
  "key8": "47avEigC9kJczp46afNiHNBpTHpDJqGwVKuEmmBhdkkss9TRpQrTZvNNE2Q1q7JadYB1BoeH78fp4qCVPrQsJnzs",
  "key9": "4VBqjNXkes6U3WHj8Co5dhK1bYCFgAoGg2WTQxZotDJCysYTq3YUAWy1MDRkMBXmFoLqQn98aGhnwmKmghEDN2Mw",
  "key10": "59g5ydz31BmF3SVrajs1ws4gxD5YGcg7bLNki5P6oqXonTHqphJKZSQ6kBKJ7erpMzkG59MtPd7UCwwqRWvvjB6X",
  "key11": "4aZjWj6eiCXDqpsrXu4HH9gQsfNjCK5bBaJQPX5h85UWzW45EzwkHP92d87kBkksHrM2t3BmyGTvr5AcsKbFwhpS",
  "key12": "636BRwqctfpXUWoCDXhBUkm6YskZjyq3RiwJjujHdbGo7FMrnP2oeXe2usx67h7DjYad5sdKhcCFqjk6QGvWXt9B",
  "key13": "56cfaLXRNgqAP3YiNQc7xoBczZ8FJZ1zotr5M7ZpmdCBYE6FcjKTLa7mY3g5ZD9kV4k7mcBkLEsunYckraTLoM2p",
  "key14": "4PR7TByFBvwn8efEiwZkt47NF4pubcTj8txtXp3cMTditZppWYRztUVEQ2NBGpjSR2VSoW2MjZfRpaEoCR4FaabY",
  "key15": "3EqSpC8Ht2J55YG5keHSU2bJML2Ns1bA8Y1NAPogvh7TxanUDeFE4PrQZnnkmD1HMFCAk3pNvss1Vci2s3JKrkyV",
  "key16": "34DHovpcCC1RZ1irxKVspVh7DhuuNcziQRS3wShkFf8XbGBhSBJdxX9xNL8p7cqYZ6ZokR2neKHPQtPLS8hJViEc",
  "key17": "3MzGZRkUGJGqECFvW1gngJTUwufgdope6RV3kZ9RJjQAdNUN29RKykrV3YdUEwrR1A8xWfWp9sC9vFEqfoPXZFMT",
  "key18": "aMH7Zbx1ETYe7baDY3faaT8caso3h2CyGriU4KeRg64LeSVpREQTW3qLiHxuVXUVJHUgv4e8DmHnMB9vovcvxFT",
  "key19": "5srqhsvXLCgN9WbGynxzu3J94REJ83aY4MXvqxSH4dFjkzWG6HdEKuyMWCR3jn7FQXQozevKcaKSg9bershcMNB3",
  "key20": "4x7S8EVFwN7PmMVfQ1Ab4JcCTHJ4AfbDaPArddqCzvFiowRnEdFWWz5NZzqbSfm6cAkdvL2k7MdgnwHQxPNiqytW",
  "key21": "23XtVCrXD6SGyQKKNYkF9g69QpzZKLJMTfyq15LPe9ywNEGEShTYtKDGWhZCxFBHGAfxcFjY8b3r5mwY5WhEzPwg",
  "key22": "9cU8j52nw7ubdDTaxFNNh41i9d8c1k6QuXxWuMn76AKL8sRaxsemh5STjXccH1sceFxJuNpU2NQYc1QYozYLRjm",
  "key23": "xR5nk9FUfH5JFUujVsqBp1sjMWkETF3E8ABeSLqrFw5E4Sf3WnhvpGALWrjFSTWS95fACZ9JFuvxKj3cHmJX4R7",
  "key24": "2pFAURvrTpjiPAem1qk6aYYHNrmMevR4t9HWk4eDZEBZAbTESk9VtEBn4dbwvnHHYLpFLEv3cDiRcVWyACu6iiaE",
  "key25": "2mGayaPw1BgZYZBvsL6Qce4ufA5uApYMaehgQsRnUkRxLxxqU3e2W9DFDS9GgsHXx1r78k8KwLLzbFAqawP9MoFR",
  "key26": "4Ko5WtoUihmkLKtwb4og8Na54wUPeB6EJ8qkqjpSZar7XsLhrtxZywJCSySdAVQG6aDyy6Qe81wDKy3krSd4evWL",
  "key27": "6182dBHPK5QWYQJ5HcSJdwNxBEboHDaaRSo9S4csaed3oJ5mgS5darRd7kGfxi3V97pWUuWd8u1CHYxcHwaGnfLt",
  "key28": "2My2q3t89JHVNAE6CesNqRAfPitxWMxymZDSzNEe2Kdn3f6gaw8Bc76kjQVqQXfXHqszb2JigqnVxi58o3R9xuVp",
  "key29": "3KoZFeTLK4JxdfkBKEQsS3puEHfxNDHEB1deTd6rn2oZv5t3p3ctQQUkBt2kFSBD8kpNJHqdouSe74okuDGo7NuA",
  "key30": "43jBQjd7kEfdBLWZZZKXbW2riCnGkecWjFLGwrd8WcUGMsm2Ms565bxFts1sXTAwhJbvTk7FvcKxSdQNrR1ERaNF",
  "key31": "5K9orrWHabYhc1gwdsNqsaB3q93sYcpdRMZRXdsnFD2Z6Ks1BoBL6VLMdaRp5JNVcQVsrRgAMLPEHVNftdSsq56w",
  "key32": "67mrdu9LNYjdpQk2wnnaGkGqukDQF2Mb8PGAqzAjCXdyJS3tXX2KwFKHK7SuvnTHas1K39AcU9qScH4xAuwi7w1L",
  "key33": "3JEWu6jKNzsf2vqJ6qM5TidXZJaCDqSHeQgKKvoqWERMTUsv6PQuzjBW5S2Cep1nndeQsTzjgivmHyeUadZNkZBd",
  "key34": "2gtU7zEjagbhNFZZNUNH3j96m1w3PhX2MgzbJnvrSyM6CK2Aqfxw9V1TtYTrNWg3tDkQ8mwzHAzqjhdjnaGUmttu",
  "key35": "5HtQhgDQzgyxZTJi7WJqPPEp9kL6f5W78RHWDk1ZXyXmnGxtDHJD85JUHWkdJ64iWjmzvfAsvzpyDN4gtsiWyU54",
  "key36": "5fRzzNWuUruhCWtyPArjhvfAkjxoinoS363tU7uPhLFDAxRqmG5zhK3DcSBbfuRBkKZWC6Ya7U32cedHcxocfNyo",
  "key37": "5xKd43oNNNryeaJdzmFrp41MuMgQvgLMK9jJfeD2xMaSsRSCSZoiHDj5etFT9e9xB6rFkPPTK5Jx9ECqqwcuYqCs",
  "key38": "eCowwzXLpiQXKQ234zxu8ydcnXbvZvNSntmjPZLyUyt3cbyEVrAcVjVzd9x5MuaMErzGYnmvTmGWbosQZ3oHKZQ",
  "key39": "35RvrrFFTsEY1QbHYYSRrr6mNvHBHfSfQA9DC3WVw1AX1SdmW1rhW6qJcP1AZYDA6osubtdHdxeAcdCXpVq7yvPU",
  "key40": "3jWjeNTk6Gc63WXa3n7yazjmGfCUnYFapbXGTepRX855bR1kvPgXVxF6hZL9wPEmJRAmsvXqQXGAnEkYxF8dHmBj",
  "key41": "4Bigerx6dV8ETocGskqGuV8q8d3mbWCRqyG3hQy8Mbc46hdm7vsEMtmwPyJe6YUSkENxWrpFfXCpLMHf8UKmFwU1",
  "key42": "5wdUDNNcDLHvfdB6syZdMoXZXerY3a28GZw3AyRSmN5XniqMZ9dp6QoeCgqt96spgPVW3HYFXX9wuy3PAkyEMkLa",
  "key43": "66Xmug11WjoxYa8GQeqxTVyrphLnn21WXHh4HYfmAbcXWoAgiPw6dWEUUazZ6ivwtsAPzQKT3R1y6TXfv2NqARoz",
  "key44": "2TxsBum8XE1H684ScymKDZ4tqy1vVeTyeh3NW1zjtfbVrck7zVz3UYKCBmxCZHksxi44z31K46GwK1N8CQJixNUt",
  "key45": "31h8KjSntSpTmp666EAeWCQdrH4pahYMB8tLfRZgDsQPM2jgXVDUJ16S6CoKoAHerazk3Ki3oBzi8d4Mn4oQTm5L",
  "key46": "2t8vc45ryGE5DCDGoYN2Pze9uyHiyPxMEGcZTG5Kzci9bUckGVx4KkDfrPoiBqmG2DCoSJhZDQP4y9E5PaH7N6nn",
  "key47": "4P6Hv82cF1SUv7yPKURwybGRFEsL5PBrfVydHfjMgdr3vN4MZjMheDmQZrm65Z4rhTEdkg4qFJdLAMQd4aXW6aU6"
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
