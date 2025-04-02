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
    "5hKKTSRT8xaEyiCgvZBxmppvRqtP8tknd2o6s28kioNFjHs4QYWBeRPXYikhN6PdTaxP8P3gdRaxMbrjnCtwvWiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53kMZwzzqxTgasbvy7aWosN5uektQJbCTM3MtQs9CLAPN37XtRwhkRUUy49uA1F1n6Di9dRANaey4s4xevJHRJr5",
  "key1": "4b1Lukwf477TDvrhXqiP87TufbbquRvhT82TaUVBhL7wx8ZesbrHvdD4ibzDhEpdaUB2fYA59m1NoxcSiZXRbzx2",
  "key2": "43vm3xczjc5a8aq64cw2uYYKtJkzq2gsY9vvoEscYS5et8LonTLNLWZRL7DQSfpaADES9cATV8K6Tg5Pr3hDPUd",
  "key3": "3jjC9y59u6puXr6jsQanx1GcgD9pAiba6cviURW6tCWtM3AvtvsUWtRcHD8Vn7d6oVcYggAMVYxXDEThJ7M7TTq4",
  "key4": "2gK3kCd2ae2DweUGbv3tx2bqRhpXHjEBiSDumH3acVne7JZLmEH2iMPiuzaR6LTy7o6N5XrrACSdHpSgyPijKPBp",
  "key5": "4qropjqjjTQ3fS7NhKGZnyuo7v6pJi4ULNRLes6ZsthGd8C5rGzasxCYYZvWhK7JkNzftqX6Dy96o5Ftd1qoLU9g",
  "key6": "PwXBEoq97qNQduU8Dp3SV8LmEPg2qcrYqJA27Kb6Tdz5KBqSPXraZZKeMtDgnkH8CZvin77V5i4edpUkPLoZed4",
  "key7": "2JJcCJwAgVy57bbGJjWbodJzK5iTBZRGcAcARvLQuMFt9NoNzNVmJkwQ8M1UY6GJz7TvQgfWq8tVCiHRx5QySHc5",
  "key8": "2CeTow5wtG2FbNrW8TM2kMpMPHeikFvbhiRW6SnoJ7D32hEt6b1V8VMmW7Weq9huBsnm8ntePYZUMXBY79GGeFPP",
  "key9": "2j7gnHP6QLWq1smgsgP4T3zBk5dpyz2w3pXKCFzPTaNwiw5rq72Dbp1WvDmahCPVJsj9ZScWW8av3w3PXXgDejQt",
  "key10": "47PZQ3w8SS73XLTEaasQdmK7GcwSTg2Y5jKpFPd8Lm8iaFyGGQQZbEqSgvPSZwbxtDztBKh5wAw1u9ZdQTzvGoG6",
  "key11": "3WjR3yd4S1LMr5SgHXbWJnMxruGXs4tHUJ23tJUEhHFi7Gs5VC51gXULGQCWBpkXA7Ujnw3JDMAyuD73rgk5vQXe",
  "key12": "3cxkaMdi75sPxbi9yoaXoodSFpwhenBhqcA9kjhuYFjnEzHRHVK471rh9MVBAZcg16PSNAGiphg3PUcqwXBDW4r9",
  "key13": "4APusN8XsdetcDNvouzFmkxcouQEF8suWMsQgy6wpTT7u2fMQ8XneumKCaodoHyR7onHiJ4iPGaKwth9mFnyGnRk",
  "key14": "34oo1yPAS7AtTTWCBdjiRFwR5RKx7sSagoBUUfa4JZ52kN2vwyK2CTKZZWBBk2FAE2GNAGsSqxivVyXJsdxTUzvK",
  "key15": "8xGkQZB6zmTKyf7vkWQYWq9B4h9H6JQF6bevxF6jYQ7qx3eb7HNL1u7ricmBrYBJTqZkJLBzS5oto7zUENFk5y4",
  "key16": "4iM7649xwLMfUitJ4zJAofe9TMZzdoQp8ydLymbEs2wvWZrWfYAU1FjBXukJn1Uo3VtjaQr1YmQxotiPRn8sNq9G",
  "key17": "2W32mGqMokBEjgAdqGBF6Y2mJAxTkvzuLDMu6BVMwcPWrbiRcR6ZYvX6d9AMKiT2pPUccLKaWvoQ17382BrQo6XW",
  "key18": "3eZRidTFT82Pjff8jtknfoRcBEsFDqcATV89UuUBNA65Lw2rmB4JVtyWugnfjBfgtZ4MbgL89CbmfzufJtv3LUds",
  "key19": "2HfTs4u9v6Yj6QVdpmE4gr1SwVzuC8KXR8JzyYHru4iyigk9fDFBWkWbLDza4EdrWBjADuF9bVv21AWNumGTGT7w",
  "key20": "4GyYY1owXeKShPoyGDorjVLNyXKhSPifSwUCfqDERHqW5FHAU7btrUpVScvJcxbfcjf1ApjyAjRz9XKEmKUVGsEs",
  "key21": "4TcQesQbbxjdyofUMkDP2RaqUEnb5XUFjPCHv9v8tphzZA6Z39ibemXk1HCR6w7MKc4JvP7fcUzGHspyTeZtHuLF",
  "key22": "2yERgnJQE4NYFD2sKWP5PbCbAsGkVDDfJh1Kj239pUWcTQ8pgtE6YzQodZwu2EkUCPmxqqrK6jCUxQEa5vSis65V",
  "key23": "5pkMbytSgkxsijq1Q4nUDBpL4yeoNJq6k6N2ueQwDemkFhpPTKczjzSB7JLRT5o13WcJS8ziK67197mVaXYo81uY",
  "key24": "5zTVwomSZryHwp53mD3F5vXpC4aguczegmY9ZXLJC8KNadzCHgfyxdZbRj4fwzgJjGaFxX4svZgArT68YEJb9td7",
  "key25": "2VNymtSvkDwSENx2UVSNUweqE28BUZNCrkYmHHQcVUF8yr5GquW4CoMdCosTjd2BdTY15FXvB9YE5Vj43cByheFi",
  "key26": "66YPmD3L7ubwuKtBeSbNECaYhiFu8eLCPHjhrUMFMrVuLmznsijX89GgFuwL9gwrDmHCXGj2dCxq4oQvBVkK5c26",
  "key27": "xnFYwFRtqy5i6qYwM95m1P4oXMM1gr95rtYQqL8k1Uq2bnzn4U5GCA6Rfy9PBUZmUGkhj6CFGkiqXSgni1ScMzD",
  "key28": "3S9qPkK9trsFX3nkovwHtXWYZbKhfAqk2vznMFbJhXMZyP9LsVVVB7FCwhX1S5WF8iG6qKG5cS5y1WNfXBMhGQQr",
  "key29": "4pMNS3CrceDjKi3nY5mA2wcetwbWJSsa85dJZQshNpg78RRKZxZjRxTxaXr9mC7kEvMu3ycLT3HWUes6mmhXHtss",
  "key30": "P91s5AnBj9gTJHpa4pAicYb6p7Ydm1j3d8SGkScEVouH37FzMrRmFdVg7yJi3Dje7d1XEUhrcksmeUjkPxGcqUy",
  "key31": "5zE7TocZpL7UcG5yciFkN8hqU1JSCvmEneSmaPMrWhg9Q9LoP97GExKhE4R4dbbtNp9NrDUG58ccjoQWrQpRzGvn",
  "key32": "38KMT5WXKceXisEgDeigUbHexfPZkqN5ej399hTAnQsnRNY6BBnyzzpUVgADdDRaHWHNjTinJpV58Er3R1Bk3x4P",
  "key33": "5TGgsfG5iky6XGJcU9qdoTEo4QMkLFPL7gS8mUCqKFh2FxbhypDMmG5dpPJPGMTG815cEq7sHF4wTJwQpYDwQjh1",
  "key34": "RZVakTrGEoPPjyfb6pN9bZVkvwDne5Ui6bSsPuKbxGuWJuhRdBcaQyxDykQ4vbyZNLG1TKgtLyqMTfu13NaXjTw",
  "key35": "6W5eNVDizBwuqvf7cwwM3wmoXCTbQLbhMhZAenh55Yqgu7PrWwGaw4RWZMU44d9e5X3vKxgDZjXaRxsGxqh9yd8",
  "key36": "53Pf6oeih11ra6s7SqKByDixVg9Lr2Z2vXB4C2LTpJq3aAAQRwhsqgK5Q92fSNtNM7QGZGsXVz2AD9g4redrxDbD",
  "key37": "rgP7tx8dJDh6HyR9LJWhmFWQRKzzBpJFPywAkoPKX6vNszaD5F5eu7z6whr4wvjCv2TPCdsVYZpL7BPYRwj6s98",
  "key38": "3za4jKLPWTgJuStsAyhmWxpkPQje6mxJcDRhf6ybgH6bxs3PmjZVe9z78xFnQx1RG11LzhbQH1GyWfiGwQwFqPJ9",
  "key39": "2945sHZqzTLKjLhnPnxU2jDFmgLHc7hMgtqGoiJ6X6HDRJ6wpTB9kmxnXvmtz3LsHzmWKYKoY4SxwffKMEHfNAZV",
  "key40": "ysybA1uKzSzxNtBeXCNqMqYyw7h8quxbXtqiBf9NDUz9p9GRrj3zfwJKLdsX2o1NdpE93NrF1QMwrb3vfgxnKy2",
  "key41": "jkerGUhD4zVEF4wjdnTseFdZH7WuR3QDM1ccQ6kc9DR2wLqj33FjwwV5ydEnDpA9quJnn1iANBYysiTsCjBKJPo",
  "key42": "ndD2T7uwXt3wi4YE5BhFTuGydZHEE6mc2UEh63oTRxXNoc2WfzpyG2Ezfj2uzT7UFbiFkJKxKjsaucpv5SrnpjV",
  "key43": "82XQ33SaQBpwCKGrEtDd5b8oa8qtR4VZtGpZX6zFFiWHB1ovt4Ndx927WXgdoNN6yzMRhXEia8EAfKsjuNp6BsF",
  "key44": "4qRknLuwsDJZkmgfhPL5EbFnc4nTBA5D8K4MM53UFkCCDJi5NUspb4d56ysNQPnpJfmJX46s2n6UU5BhxAD4aMk2"
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
