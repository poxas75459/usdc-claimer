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
    "hzZk2r4FMur6b2DpYiyTPxpbynBHDwjm93BVzEss9kVSScRHbC7vB3RwcfDdMuVQ4Fqu2wgYCRZP3FbUxx7HEwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxf8fLQKPao5VQp6uXD6KrtkGw6twNR76aj6XBveXLznULvZbidNv3VnutwhPA2a82ZBBguqGCZYZ27TUik3VxK",
  "key1": "wqgyYayPuiych2S5HsCRnGdxShnurjst4F2jdakYWVCfMKRWt17bEK3tQNHFaHr58n81vkfUTdSZoLRrv7JRqMU",
  "key2": "pgSL4kDKrD28vj851V1WtssKecyaCTJrFmggj7oDoiaxCASp1JhniwAKJoN3nSs7ztHJuyqxvv2gV9bEsfa8VdF",
  "key3": "2HEkiSFzvmcYBEDJ3WPu4GKioEzj5i8uYEqHGhSe1vgUPfVF28pEH6uNVP6gVkcRxbzWkgtHDBXf9UCwBxpoHdMY",
  "key4": "5oqQ4zWJJS729wXkwBpwbrPAmtocRxc1gr3mTZqE6XWParS1ptsfqHGMtjMKFntcSvxrvsygG5ZgLFwfZshTVs2k",
  "key5": "26utn47vwdy9ZE8drfDnA5tWcv33EP5iLiUFpstZzzmcmrQQCfyj9fhQVWdqPEmureqCdwyobDLN7GjWhyK3jeMq",
  "key6": "5rs7yFwjc4FidM5CjkYqSqB3Sk8ZvgqWyVcTFoxSMGb7Sfe7GTgFdyejyT7VErBs9YXmEU7fgBVtKcdJjdVVdfy3",
  "key7": "GGc3QcwbtYWbdhthbJ1aTeMbmJa1dYwEJ6n5Stjar7cv8yBLCQkgPCF1S4ZJdH6ow9uUzbxBEbFVzmFq48Hbhig",
  "key8": "3mGyYAi1Zce99edhki5EQ785DmtKP2joXsiX4GejwcWDhYSU61jXjmtgKNDbX8Mm129fb4yhKrLDMnmvgEa9Rwyw",
  "key9": "5ubPuCgpYxeAbWBwwboT9cbWDBkEQsUcjYv8jXyHE7R86wbBMTYYK1bJxKG3RCxu8inKLzx9XyCRjF8WAzD35SRr",
  "key10": "32qrMmRCRAtrGX4KhF7Q4iFrgURGT1v1aw4jRwX8BRmFJcbNrpFyy2q4LTVQaV3cGQjvePmoffHrtGVgZU5KGUV9",
  "key11": "4JjrPWZVb3eECsiEweF9z2Q2aVCQfnHPRyegd8Nu48J2nUH87oJcpUDzWDP1dMsNA35taBRU44WTopShTsT7TRRF",
  "key12": "3vpJjUMC97D8DauCRP1en8VE75p7o7BuqXDfMTFoPGEhYcJk1nCErvSBSP1WCa1VKw4zAvQFX9oAo2rzWwszQ5My",
  "key13": "39QbLxU3oQGHmdjdPSaeMMmE2kpVqPXu8ksESunvtyzGHWA725nLBaMbjWT1pfmeenwexPehYV1DD2rBYCHtG4HH",
  "key14": "3gfqWwMUDvFy3N7KWxuJHkZQnRzGEAuWdEurULKE6HWTZWtSkh3r8oRDYZ5egUWR8UdsicDZ3GPpzYGkNAirxdqZ",
  "key15": "4UqHPrBfEVLgUKt3ncJw6vijYPzrD5oauNDbdMWLwdUjEasN2qnuqVzcUrwRu5D9dB2ba3uyUUDxsYJRQ8XRd5Kb",
  "key16": "34h5MF5AwDsYcyPMn2CwTTSAHL5Nhk2fjCt3xi6NRNETZmWeAAHTUaTGLEBpweRqUYvSnLkbuQqwBafaeruv1niF",
  "key17": "4wZzGPTwuEKVZQNw78SGxFeissxKVXebp3eeruhzTk7EfkC2Kuh6JkKfTHJCVt6624qhH8YmpXa3TTbBQ63XfhSj",
  "key18": "375tPdNMrm25S6p7KiCMw9y2KPwmoek1aTrwV6ayJTy3rxRt3zsZLpaciS5ppndRvx4U4CTEYvjTPTNFrmGpzuF7",
  "key19": "2CKXYuEyBkpV95RSEMdMfS3kXRJvhBvDM3agjA6rkcp1QxpkzYUHokyXJx3uEnvx4S3aXA4QCVdVR5Sk6227eUmG",
  "key20": "bSeyq4HortQWfT4meDxEN9nyuZSDX41bst4GxrExivqDkU8qES5R2PN2GnpT4mn71psEC3swvoPWipm657ivUa6",
  "key21": "3QrF1wg7ohtnSE9ZwLFyjPVasQWTie7QrqjQFiwShYFuXZ7uVJaRprAJLdc13gaoQJEJdZNPbathZhcTWCnfCiCy",
  "key22": "5aTZt772ZqBmmTH3XFy2mwJbAxtH6QD44T65UoBbuxN9dVBrJo4hKFNcPPRPFYgfLBBkPVoWmp1ZrZVud6okkq4F",
  "key23": "45nqyekJ3mkvRU6f7bZJt2B5wbdPA2sxqoUr5wrMFFD2XYNSjh6XyBnrSFVt5PQVbrBbiqVht95zN4juf26CwnGC",
  "key24": "Y3ubjsQod1gxQHFNbzpaPu4sBY85HbhnJYdo8M9UvKMryjNNTyFRdcQPpWoPgNUKLDUFgc5ezWJCY54YRE8xBQK",
  "key25": "wKDWbJaMAsvk3NUjo94LdKS7KiKapY38oQbvQYx15wckbfcZPk9UnaLaZf4yU8KWati9tnKnzxsYBy9zgxB9eb5",
  "key26": "4YFPk8TjAP9Bo75RrzKiLZTEz6NMXHiALfjtwgHLFVKGmSzMnDHLgbHfGvtcmT6BRq9zp36uwyfemWqHCR8P6sVq",
  "key27": "cdjn6MuYjrqdodvRV93VsxHuQ46f4BmQVnksczs9FnuVsXzBvNwM6yZTSw8QdRr2FkjYz1W9XxMoZQNw7rLCVJx",
  "key28": "yuSPHRY8iytUqRnJGFgVHJ9Mk4PQr28sXEvJXJWwMDpG45iR71p9RxwR3e2MH9gyqrBhm53R899kDqydqzGjiDp",
  "key29": "3SVsemsRTnruakkhyU8M9mnrKCnjtoyW8FjtCmvjhtGR1mvqgn7Aj6LjLC7TMTQwQeUNeGjtUgF4ZJUMVmgSxYfn",
  "key30": "2DX4y1UwJzkKS4sceh1FiKcc5KGFjiNynyrSSmCPzdrtrZT9YdXr4gqrXkUU6p1pwfvbTBDeAX4HY33HFiE6hWS3",
  "key31": "5NuLKwHHNkQ7Uss1LYtw6s1rkkM9kNUu7mKMmGQzFCRQrWCHGjd3H3ULTwrPo82Ksj8NB8EHdSZ8ktdKhDbNcYjW",
  "key32": "5Xgnjub7Pmf7tTHEYzLfA6xDQS3KVpAQNWJdyh4ovdKwaacgd3BWSso62edZkbpmX4TS8ShdrVCSef7Z9AGBzUNq",
  "key33": "3d7cXWCz1aXFER7epoUYMEG9XDraGSgEdzcyMf94brADhPQsMXCrNBPBhU78aYrBNFNGeJADQxVpSsT6txnJgs8A",
  "key34": "248rQYrpMWDScCHsRbUSoehBeJL9aRpbamtmiCjZbvWWCdi4ucE93SE2u7ErdrZ7mvkMod6xvxdbmjcpQtBuPCe4",
  "key35": "VbA4RjLB9ZXUt6S1MVMc1Nv8i4qUu2krVhTiwzKY8nkXyH8uwVGeiFBPpvqSXeToCdpxxoEhwGfzF5Db36nwqnS",
  "key36": "2tzfjStFLiYfVoJEVUtZmrKLYq6pTpWcQpghV8GugqXk7syYNFm4ZRsanrkjBHYDdTQt6xx2NDAMtSN6uSPn1eDh",
  "key37": "5EmKbg6dyCMX5x8vWgA1bnxtauoa24YhmRwpn7TURfZPuPxeu72SvWEfrPbquR91VCP4yyiphSzX2NVG912rhwaM",
  "key38": "2WPGxQbnCtup4caLR44njtaXuJvbJRNGUMYZftrVAXZcUg6iKX2mosWKdbRB2dhFxedKHpDqkAszhXXY5G8UoctN",
  "key39": "4SDAa5FVvJwcTx8NwQLpFKv2R8EbB7TzMMziWGrd9QS9DXw2pnPe6RSWojzTwwXpQQnfCwpZzcNjYUgwz6tBiiuH",
  "key40": "3nfTH1wTnKYXQwTBDgo8DumJFV3eAdAZM26ZmFZ7KkrVgrUieNzM2CUFxZAA9cEFrtA4RkGQyVhNHDu5xQoZUncf",
  "key41": "53YngvJAND8LpuTnjgHa66pyKgDJ45fT7jmMLEnufUNCgGiswvNEdH3h1xZZRNhaXZnUvhYNYQWwj3RnTcY3p4Py",
  "key42": "2w9j285FC4ouW5uKS3XqqeDtxL7MrKcV5kQ7QR4QfQ2BL43W9WvWLLTavN9dukSuFs566oJRpBmdiovKMLaJcEoe",
  "key43": "ovyEgqw7XZWEYzhUQGNr2nwGTvSZ2DjeoZfE5XNfqgFTaa28UKSWACyKrY2V7AGhTvHdgbBgZdqgB2vHWSaPyJ5",
  "key44": "2tEG5pJvkReeqoXagUvxGbhYwnE3oJgSGMRHDGuSMSeBGT5yw9uVPn888HXTMgqAcTT5kRfsPJRKA89EAGoxTcKE",
  "key45": "2FqGd4pv6K1SGsgDWCeuXj2LYeHpVppC52pkXRgVeToK5HJaNanHPMTxp5oRYTC1GPLq6pjzXcK2hLyD4yeHaKk8",
  "key46": "4JjucmvS8RkZC67kna2gzy4idXzeiX33DsgrkXJB1UnbV54Y3rnAcpftCcrTz7SH2GWzaFjPH8R9ePm4cXH2hNUp",
  "key47": "2fsA8zKneFAbzamFQhSQMgVrQaaVjBMKcTkdZ4P8HgTm5LBM4dxmLFby2smVPAVk3ZVrwYtpvH4AKG8hBu4ydCcT"
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
