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
    "2zuPNE9NeFvHgm5Qs57DVLDLa6nVj2TnzbuqGq4QiCvhMawCcSsAYqM3Gyxix3C1Pps8TqeQNkycq4TTLqvN5HE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9pbT7DU768tHazBpcCcnmivgeLiEkWiWU9w1wwVLLtfWcpKPb185ESp3P6Ea637meX69p9qBkn1CxiTELhYTB9",
  "key1": "2hrMRiQPJDGDFt7f11QDKAQ5BYQTPcDRFbsttT7CW9Ma4ibiRmpi95Y72hEQtPs3qWQEeFTLiwSkcj22MnTCYNQm",
  "key2": "3f6v3gUCzDXApbArUo8G2deui3CC17ecvmbdtMD5kzqcGtokYuzj7SpX6BBAem9gn6tMKuxstKwSsanYoqKcpbTq",
  "key3": "2opo9i6ijdL4GwAhkuBvCqKRSqwEVGoGH16XXUegG4u4p2Azpor4rwsNF89DJ9Re3yFcpxoe5Y5uD4bCZZ6RZzSC",
  "key4": "4j9oKfjNSnxC8cpx3JLNkiP2LaG7oBu9K1kz3EVVGMrnc9TqQ7s9evmotTEKn5zifRHDGGEtre2coucCGM6KAR6B",
  "key5": "BS8B68gxhY2dzfjpKK2wAa8ngetPaZFMvZiR1PHcB5VgxTdHhKsQoCEgjCGHBS6Kbp1rEY19bTRG27jdcCbb6Xs",
  "key6": "2iiqKCTkyGaK1u9kR2X5L4uci6NgtXjaAHXgyGcQb1BNf5t316wub7RvSWhQXSQsmisxUNnbTe8njYqhMRyAtxdf",
  "key7": "5TLCxMAddjiomhuWFoCgcB6v6C8yqH7b3Qkts5Y1aeusuNfciL3i2g2kHezu7NGVCzmXPEt9e2hdK7BCaD6JogAH",
  "key8": "7sUoo55zyTp2NbhCVhpwZ3rajGZMw8soJ1Cog4M3ehixBeoWA8o9Zckd7poAohkq3GJENShwzAet37TQqy7wvWu",
  "key9": "7DZsCyegA68fDWu1wmukSmD82HvF7JLWoWGAKAns3Ep3WjpeaKstbj51LxsZCavHNsHYithXofaugpsLuGKAybA",
  "key10": "5pfBK7wXYPxERfSfJtoNKc4XNAeWMuFX7N34n8JF7tppUtyuqc1PZccZABggUt1u7wa7BctkgMzTogbyWUjpL8cd",
  "key11": "3iWEbbSdLKHWS71uaR38GLJhCe64fBpjjoXDgGKqPVR1YLvRwQ8shh2siSARFRxPB45kvVdtrubXZfF2iow9yWR9",
  "key12": "38jnPTTC4aG7UHzD7KMoqXekhvWyHTHTC1d2SbCMuPoQ2XsJaLGB1yLXYaPa3nTdj2FwR5zrmZS5pk2y5fKJtT2E",
  "key13": "3RjiMsxyZ5PbnsawzispGAgQAeAazodGMivaz42p8mXQ12hErnBChQ1zuPBqUi4taUrKNpDqa151bpsCaGA81KQv",
  "key14": "3uDh3atn9n5tZuNtoPdz8fhoaoXjTnWMsrMqjpiwKstP62vueUs3LvR5r2z8dEp4TseimCiSta1TtrmfxV8LA5Xw",
  "key15": "46NrLuH6UENJjD6JDR6KHzqU1hdkjHyY5vXgPwh7yY364fJyfHywqb7qhNVoCyzWE85CMogsoq7qpRmnqCfHZ5Aq",
  "key16": "3XHn8YNiSspKQuxCXoQckh4d8kd3ovmQZno9kyTs7zeJcwuxLhMujCsRHg39QLdBkfeGEDri9YAwonVtT5sVeEri",
  "key17": "3GKiDmx7pDgZaKvAKFQUp2sVtZv4RGMCQ85foRn6amscyun4iRkRcCzaBoW6JNNX8rVVvdEeWDVxAyL8MPQSfp59",
  "key18": "3F7FQQS8FWqK8iE3JAmd5kwUqmR8EoJr3hiqqQPjnSeKoxYTrSE3Qk7kgWssvEP8sToJjFdCgd5UwtMWaA9ZSqJF",
  "key19": "5j5tn6U7zpZUPmwssY2bZz8xvvsysyggCcNTq5CEdSnmB2vYneA54bkkuYAEP9b9Y2ootTDyYzVqeE6SrjtQ253q",
  "key20": "5u7i7mfoPruyN2Rzpw37ujDqcaxX7WNQ5NZ3kz6NtxKx9hpoxjyfQRjcMbQoUeowXit2SHKPPfmH5XCbw86mXfAj",
  "key21": "3ZcqnjjKqHznvGPnWaXXVdH2dYWP8iZ3DHSkebETiwchTdvnUNrVgB5HMVN9fhKUkZXtVnAx6un5L4mJpmK8BD5K",
  "key22": "6bjrC86WrfuSNtiANj3AFmbUxLCZTHBGE6Rqe791hQN1ehD33GZdfWegcxanCAEvifgNcFHqDbawaMEPCeNax4z",
  "key23": "mYLrkUnKKPZnhd5D1UCstFCKBnvrLzJCSQ8nYuH1mYMu7jxocaLp4qEKjE3ZEH1fNgbvRhqXaBeBRxqWgXLHgug",
  "key24": "3CoNKM5znPqnWtv82WPdr4QoQQosPVxB41iag4LwUCT7pELVz4aE3FhKXbRnSn1WDPX16ccrszjeS9sgRhaqhjFd",
  "key25": "3vesEUazVHtcVoVhAYRq3ToFQSxN9UX6kyvWsH5hGy3vrQPHqJSzjdSwRcsAGxJ84MsFUXnZkDgyvsYcTnRfoZVi",
  "key26": "3PaZePx8QTTXRKNJSGkFsqiJkgEBxBWgq5PskotvCLiHN6uxVyMmYV26mfZH6T1WwZFtWADrdpYyBpryW5mXXQys",
  "key27": "2Z144pcN85rvq4SHye29qistoduJUEHMeyK3nZ6AwDEELoQy9xe45nY3hsqzVSQtvsPT8Mjytp8is9rPJFyk7T6P",
  "key28": "4mgqxeFdf7YssopSamDZFpq3zKeZ7XxbmZSxYYZmUxfLsuSxFAZeiqraNzkUmVgGQermNiLH8i6ATYvPQLejLRE",
  "key29": "66B7huik5LRPvymFEoBM9kv3UgrJdvmxbg56md4VoPM552mx5PoecJbGehmpVgFwi1AaN4dMzb4bZoNfuw3uKDTM",
  "key30": "2jyNxjLWCf1HvxjKLZhyFcJZ7QRuCWmZiogdDnBycPuwQNXQNS7o5rKENFHjTKqMhYdQA7uanKRYsfwQnCq5VSrB",
  "key31": "3kcEvtxDuNx854eHhdc7NH81dAYM1tFnNv4xWjJeVe3P2E6UZULtRYTNtnZvC62JzTDmNr8yNqMSxDom1a4gjLqG"
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
