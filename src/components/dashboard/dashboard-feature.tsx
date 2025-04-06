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
    "5PNiMZdQyCgex7Rn9L29yiNBbXcL9h9DaLfVdnT9MhpSUznGGU6UEUUUTSP1XWVAQfp6FmTsMXXCVShjZHMFbE3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XAuG1QjmQmXN9s2SCv96PYoLWLTnSw2K937cra6UmmETumBSV4R1ytCgELAJZokkfseb53qrH5LPjgw4cEzRQ7K",
  "key1": "4CsidoYJZQdCvCAqp7uktDzkKdseSkgsonZzQsAeM37cTsdUDvTNKYSxg488LMQQJ51W6v7P1QkCzjLMLUHmM2tR",
  "key2": "4vrnwpsXhtUUCMn4vvTtnF5YgRh2BiFEv7NEpL5QzDTpxd6zyW9fGMLuGan7EkoPCNjL9KaVHUFeN46ngif4rwfZ",
  "key3": "55w7J8V6PUb1JNsAf7xfLPPSzsPRezE4XEHrrCMLvCdpkWd81SwcHL6Vpd6yNVXLx4uFDBZkcbHDCAQqedVmRm5o",
  "key4": "5QXEeE6FJZTwrUZwB73ivW72jkcXdhS6gkvh6xKBMuzBUrzQfXo6LbLybdQPKSZzvBCmhRCjA7M1tNmFCY7UPrJG",
  "key5": "2AKhiogootNpXQGkDPHbL7HMRMcpxhQpz6A41igVKvBEjhtzg12foKaRbyKmuudwAJ7bYWt2quy9KxYAL1rYgLru",
  "key6": "2PFhLhRowJ9fcVVGeBkjWSoQPWzC3FjED3nCxCmZmYNb4tMHim9KmQ4Ukqn1BZoC5DDs6ba9SyuuDEkQuvkkGf7d",
  "key7": "5wqhsR6X3ZwmFoRyZpbT4xv8fqCD1efMCVTfr18rJhk2R48eDMQhE3eNEGaYKHW3aydrUsVVV261MtSHVaHukgrH",
  "key8": "5rx73EacMjvBpzM3axWimBpo6qKo2y9Mp4hkTJYR2VQb46ZoGLdJnRbMAQhfADaqYLVzgiaoXDW7ab9y5dNKHNyU",
  "key9": "QXKYWHJN8bZP1VHPfQ1iZdd2eN14WpaRQeR5hXpN1QBs9MhVGUiT9mSmPFuJ1bbaamBP9WFq2aowiwWz2x4SZSX",
  "key10": "puGQHWwkvw1d9pRNhnmgKKWRpsSkjTWibXbUNGm5Qa2bKz1PFhFBZUhKReCnBP5WGfQz4bAxmAAUyD2qEZ6L8wG",
  "key11": "63W5TeGHoEM4Nj6tjUNhHKxNMuLXxUKcpD9wdErhHH4pQE3YDL5QnRZ6mFzSQDMnddh8B8onQqarGK9nc5AbNmb9",
  "key12": "2YNpW6iwodar4RoLieRYZxMcAQUkQ2GniyQG3Eyr7p8KChsXYCZVkQuFWFFiEZTG4gqavT1i6qtgEfCdG26TgtHC",
  "key13": "5jkLaa2sTLjkMnHaiw749oGb57GEfBNHRhZZUWP3BnD3GChXx5Jac1x147TUhoPEif64BeJk8GMwcxqM3iDNMou5",
  "key14": "hRKT5jQEGXRWqVX8CwWqasduAsb4p3i6X1EVngVCbaxadTy4QT9peuLAxmiRLfcJHRL99ozZaTbThe8yMoVADVN",
  "key15": "2JhyELbzpWzTEt5qF3tATnoPQWrHyux7Xbbp83wBBgBWx37xhPwv9BTKJfQ7F9mJWLxLxMKjdMWwzXvjo6dhXxgM",
  "key16": "4nW69knLA8RxbEF6XberLkjma1fm1CeLkABPS7PhdCocGKkrj5GKzUeqBugsgfJmBwzMgeayUcuy4by47Db9JAA1",
  "key17": "wYvkQkSK7FD8v2ey2C5M5krWVYeMPBvYED5Z3iY3wqC5qu8vF7Xm7Fk7SaSN91rtpzb6cugaUUbCPrRCPpJQpwN",
  "key18": "531mbkRJn4RrQj9AFTeEay9jBwE8DKJDN5PDeJk4kPHW5qXaYnaTCK9U8LQSnAWMfMQGBe3sUdJWVCi6HWfgSscG",
  "key19": "5UdoKLq4fKjQ2QXKhWVmTkBMsEN5ZaM2rt9W8TXV1cq491uk8BcQrKrNHxJHJhn6v5WfTTDV64XsVbrJ64UJZ6s2",
  "key20": "2mw21DcMvfKnkVAGKZcjW4Hxj3Lp3FGm8b5VEbBp8XhDJPcZ5xmcRGfP6551HxwajuLsUWKyu5bsCQ4SLaauWEgA",
  "key21": "4pPnVkBMPYMpsFVvFUjEhCnNg7tVFx2WCP96UW2ZHpRi92xGMcx1r2pY8h5pAo9W2dYxZMoHSCENCgXJpQCyteSx",
  "key22": "2i1tgpg4pjE9F7UYo6jSMoUmNRhoD8NHENnQgwSDngM4p8AsQ5HVLUj2Rriz5K3n6TuQfNK8X7Zun4EDzetjGiA6",
  "key23": "Bu5NQqDdSvgdVy18zdjLJf2T7D5zQKydHB7YFPaRMqc4jqEVJwEPnGwcUXvvCQzLzUbFHgx3LdLfjVXwjwnC7DX",
  "key24": "481vSPfhUkhZbkk5vgNsqfjZPdQWGkcViK7fhakZgDLZMmJeWvF3oN5UMnhkCnLnEhhKykTZMyUXG73kphHXcLo",
  "key25": "4D9tnc3R5YBH6Yqd4mFMwqo713A9V8puzoUb6KkhRbc5modYCBYHBGPcS54jKbYNdTqkiJdxZ9qSUSH1HeuVXTkz",
  "key26": "2M8XzUNHJ9ZqPboDgsYvJ4tVELW941Yro9Kk2RDWN5GMR5GtiKjU4y3mM3pwVjVJ6vACnGgfKkKmobUMPboERhLo",
  "key27": "37YUMtaf5VUX5YY7NeSjJBWKxxzrzRH3RdYhTT3nVSb3rSp2A5XneXFxqQQTHtspRdN2HAR4zZGixC92ouS6QZL6",
  "key28": "5N72CV2QdSiqA6seZzD7kMAyahfXecengj21VJUNd4q8P7XZLYtKUoJeJuzEtYtBQ5386y7HC1dtGXgui4GrMLpy",
  "key29": "AyjV6FLD9SNzyVKmbLaNdnZhCyWnZ4ok82Puft6gS8BKBgfWc13yFRPqLrUAsj4AxTDCNerq9k8ZsYDV6vSqEJp",
  "key30": "2ELNstLuCYs24JccBXL9Bc8m8JDpPTKZBxxnCvhLsiSu63kC2Bnhjpgp6nsXDQRMnC8P5A978jhpg22Yri4Ups4j",
  "key31": "5sPqRwjCN9RTF4fD84pFSBx4gfK2hkCRkeaKC2jww78juMfTG7E3VxUv33F3mSK7goUKWeJmkkcBdHwHaKQa5afd",
  "key32": "3HBegBAg52ie2h6rN5xQBpvcpTcWyYKXgrDDucatDzQBhzCUrxwgvab3mH6tj6VPSn7r6xZPHc5BjtYyZrLtoLwA",
  "key33": "GGxhVqsQQm93Go8QF5mhKgrsPaEu32WLA63mqp4xcurEffniZgWXGqe6McRxZ1KZRSLUiATzZzpfENjgh2Fm2r2",
  "key34": "4u63PmBZiMTkqEfh8QQHrjEbbTEkKmgWqRwtLGyjaZmfuysBx3U9TjyjH7F39A13E2ZieYVTgg3c1zvgeSgDg9uZ",
  "key35": "3PQudRg9ve9FGEmommbjedZv31jR4rRQa8tqDH2ntm8NXBAkaNHy18RrNPoby9ZzugiQWbtoMYUxZwFq4vgxvGrJ",
  "key36": "5SQojG1fDRQmti55hbrS8e5gZWRLL9BF8QNj7yacdrVhyoQtZWcANYRygEfoAu96CqN7Z8FViPrsZMxCwhohMccL",
  "key37": "2mXjGsGynYuq5boxQ6WuFE6nGPRcpfzosBzLV2Q4RJcLAiDdS7KU7wCYfxejbiR7pGyJ3MxuGNhwLGzbA7vMJ4Nn",
  "key38": "53wRLoqeaWjZ4ng8t88XrBoAqd5agqvK7xk94qrevUdgvC3FJPxJThkxHugSm9WXdCCdvXG5wcrtHAkBKHosrMaL",
  "key39": "5NUnWJTWPYq2aCtEHQdzPX2EXhqtwERctiEuBcG5tKFto8pbQMcrNZWf1Q2FaCaD6xMi9EFiycLFQ14pP4QB7oh1"
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
