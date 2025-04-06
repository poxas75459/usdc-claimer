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
    "2LCiNB8jCQcEUXXAcSqPQAvcnKjxQDbqdphbYhWw85mMU65wgefnJorsydxEvbfbZCFizMu6QpEdEcCaUkvJNPnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m8NpEbDH6Nsf3dELPJdqfyfFSGrv56Y9StSgDSStqBpSoBwEuy8STXeiB2pteA5SkWACS5QD7UpYUnb3p6Jucud",
  "key1": "3Qda5pm8a4Ym5jeYwnJB5hPot8yu3P8oPPrdEaKMR9UzTf6NwZsG9sLgYY8aVSkxHCuP5JnqKF3ohTe6Uy3dg9Q5",
  "key2": "4KRW4wmnWo99N4UPWPrCVY2sBBECCHwuWHw1Hx77UUL13YFoeGYrX3HFBRVtjgGrcVzSo3bjRRReDnZfGYWscAn8",
  "key3": "4QEkpfZeLsATrPEdRjVtUbqJkpdV633mrXmuqUjqWLjvj5a9AvLrEttk9emQgqJc4vJdbQ4PpCr7nJcKAmFHkXGZ",
  "key4": "4wjRRHPhNshVo3oryVHZnPW8CuB5S855jfnML3ENeaPRBM3UxeSY5ruz7XKV2Y8L1Yqb9GoLJMfNWarwcDKWVRpJ",
  "key5": "WWt1Kdmgkzyh8UTnhMgXB5uSgVTTBuHt9Vuty46rvRQ8B3dmje4ujpYSCXQpmRE1ExydRdFTguNKdFpGiYdca8T",
  "key6": "4vw9AMEC7D39GHV1T6tTb15KCuK4CHqEq5U2jajrnvLHWvAVghJRd75U3RGVfbP3YJcKULyWvgfWsFmU8AYEEj1w",
  "key7": "2ayeBdyoUxqA6NUKJ2cinpEBc3w1Ufbe5D5QqL6pV3AMvxmnFZB7yC1qSfRjx5w9k8RiqzPu7oGdSQcbwDYU6ZA9",
  "key8": "5QbZqU27JuoreT9L8Ks6rEddhrKAQZ1t5Amuo74bSnjubS2wPdNUp3X82XM2GCppXHnZsciA4PYVMzyjsr9LJtAG",
  "key9": "4qPLvt2kL7vNA46TnAUW2D1PbhmRZtnfPSUKVZZr6tdihyzrsabYfMZt1xBvy1SWYSNQceyjzTRfrDUBCN4zBcWg",
  "key10": "5ZAG3gWkXdkgXkoKVmqwY53edjKNi2Fi21FDMrLGkkziPD2zG3mQ8gHk8gswmhdLrKPaXntJraXbL2NWYhHd3s2F",
  "key11": "hx953Cg47TznVsh7Ac4mn7iVB48MbUK25gSQLGknqdPgRkDFFJhdtmTzreZ7omPfiqT3BChc9suWYchu9hHT1qt",
  "key12": "5r1mQVUSfyHYfqkGcaj4fe7EH98xpqY7wwR3rc5Sjmvo6bmCGJ4xVLRatua271t9qf812t8ekFBAJarLgi9KM4d1",
  "key13": "2ckihDV3KvkH7h8LoMQYTe9mSxzMUAF39WqVeGPXpcvaRE19br76zmPKtvg7akJvvQJKKqcwbdS3ragQDnzcvaog",
  "key14": "3uXMu1k4gzhjKniJHPFBb2mPFG9BZwUutQ3KvVuup3wQVTaz5dwXM7uaQqbEyCXBAZNsqPkA58UnEqXySCMsYto3",
  "key15": "3dovVDxF3e7ax5G1NF2FwDFaDPHthsQTKQcQr2BwdtosttAErqkpv6nVvMy8dJq26K8QmMmHnT5utjQUPR4Nqf8k",
  "key16": "4v3CsvKTAmu37hEkDupYJ7m18NXUWBf7fte6VqLM7FvfTj8uHtmZWzR7WDQSL6qfrhxkZcP2h6iXqdvGgMK5G31H",
  "key17": "bSSZwjc1cNuhbJxoMSnRbdFVajVc6gpdKVh7gV1nu1S2cJKHNaWrddVzr2gB5qTVzTvxJjR2hQ1Z5zwfKKzXUJC",
  "key18": "24ERdtiNrYgaxZZ1yBNirHciLgf1YfZGf1EHjsVjtxdNK7z7eh4A2jeVzNHoXRKZuo7NSNr5qjfPFi7Xt2xqjPAn",
  "key19": "4vkaQmC2MT563RvaXbkAcrSceJo3wTH6XPMeXnj7U9kH2bxNvk4nyyYhxDk7D5kyBGD5uTeRxrnsPjoBugM8NApc",
  "key20": "SfNZ1UH31KhBkR1h8DZ2oGNLmEPdniDanAiqyRtPHUTkqxP7p35sa8EHPHEEZh9QWF4jLNjpQ7gA89XAUPCuQKK",
  "key21": "3FnZVczTEfwYL2ve5jrXXG2tdENmgfdFSbyEtcPoaV5HfDPEnvzMg2fAzrcrrR2KUT5ktixePwzraQWwA4AJRqZw",
  "key22": "67jWcwkM5FMibYjhb8LFxPDdemVEKhcyhQ11EMmwmDvzJ8BrfSWkFzVhjuuk4YsBX7G35ZfN4BXZB4D399nB5PEi",
  "key23": "3NvgrUQRqK7vsdjyxSQKJG8GGLr3JGLfCsVfj3L1KBYgQhoYJ5nJ3z2eL1fjDjQACY5CPnm6wtFhpC9HmSwzR8k8",
  "key24": "49RjEVY3P4LqFT8druZMYKhmv7JtPVggahrc4EpBHgMpBva9972WJ79JFH8vYaWAfnkYFds7MrYt3SCEhMvxYncu",
  "key25": "4gxdbYHQEAMAUjzGuBEv97ucqBHqhi6p1s675LxaCd7JwYGMZHMzfsLXRM5XNvbRx2yd72uXJTs2PM2NkoBUeUxX",
  "key26": "2vJYUCwXBzKACaNVoAR478uYMfw81kFx5KF8Cj1UGP6KPiNPFkGz74EHh6PhT3CVZ93wxvrnzYPj43UXswiYQYTz",
  "key27": "2CBGrTdyUasYkVPHyW8MqXh6KTypgGeCS74mkXPs7n1AoU34bHzGSS7hrU8cA8X3KUZ4ZH5k1YHYtrkzHogMN11N",
  "key28": "QfASwnQjYH7WtmWupGEhBrfnzJNBqMTMiEXz4R93K3KpPRnj5JQYGCdsn9qXVRzrUoZz7RTy67q6UBNjN3LPBWG",
  "key29": "2anvuaaV5cRih6vXt9UgYVVZQ3ZcPNFHFYR6HfNFzuuepjCqg2e4M8R1GmCeCstHA8YGrW4ArEwMePYn4vVAuFMG",
  "key30": "2bgVk472AjwW6YtXBSGPjWcfvKTLDfXJUy747XNEajo6BaGXEoRx3kxyZhpknANsxpeQ52vN6fkcg8jiKxeCBjwU",
  "key31": "5ELZy6g95VHTr74SebwyPCtcQwmxWHL8ecfBYdPbgBSGjsdfrL1CQkc5E8Ai6pZFhwYL3wAQAMQp56iA1wZ1GhCD",
  "key32": "3R2MvwfCM7SFBbHcJbxAXAEDzZze1cYDewSM7in4mLMzhunMRkVuq9porkYFDGZxQTDG2Rz8WHgeBwNqkuqcAwjF",
  "key33": "4QSRmRDFGbG2dsmj36vUSxLvnJSwz9LYyNBwJX8zWWxYAZK7kohSDGmBoHmNyveYWxovS1gi6uigeFJCnVyNkxHG",
  "key34": "5VCPk7JRJUaR4aEGpxNc5RMDQuZp4KHXzLPr1yWNgftqTUbnhQC1QQAvEVj9iD4wfXqoE6jatPqgwuZj6XMwk4Za",
  "key35": "2ARp3nJ6Q9N8m7HZ4dRBdve3mMSK5oF3idiC4GvU5bNCXa37VBUYoA4L2QSFWBPjBkXnaQqqGdwXXBJDoonR7FJU",
  "key36": "43iBHVaAy3chEgFAEvgqxwf8H1BSnUYg4dEb7myonVuLRA3z3uPcugNhFMTvCjy3osj2Eb5sbMG2EhiRJgkSAk12",
  "key37": "Bpw3G71KCAKkB69uiEgSsFMbdjocaWoCjxPRfGG2NkWKKaAcdzjNkgd4NdUyjtCrJCD3gNuycYSZRQfqgPcjreV",
  "key38": "21jofhU7NZYCPB2ugDjPeixZr9UtHmubMTQ8i95GiyXFcy17fHJSA37borbMaTb6mqPVU2kh441arWxWSN3NizqJ",
  "key39": "5Q4hrZT5qdoenjLGF366m4UDapNRKQf7KATNEqirSq5kpnUHyq1cTgXnuzArJR6c91nVRcG9jtekfqDbQhywYmXU",
  "key40": "4g9fCKJiApKtX5VhG6n6bSSkhjMhyzDNj3a6HCjkbuqpMscetVnV35wxh7ymLwQgWfY3SWm784ubk2StxNEb1Wk6",
  "key41": "5S5So63qdUdCXdRNFTj9aFjrgBargCj2M69sWNUZbDNN6nk4JAbdWmaPmu4N58kt7oT15V95qBmrP8YpPFyfD1pw",
  "key42": "2XhjofRkcfyWYzqpaVKGYwKyXe1jDSjeHQyf52U3zWp7dVYaw2uCtTvtRDTmousAZ55gDc1fgLQDwQGym6b8fPu3",
  "key43": "4NS2DwNq3korguvKoyHThgRHBQCFmFwPXiV9tVxuMPREivRPjwsvZwYaVigtxRuqE17C4sAtwmLa5X4L9BcJUPNB"
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
