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
    "S9a5QaB17j7nCTQCMAbP8p99nsZemJFtWnHqnrR2cqPaZATFXFm9nStk3MhD6YzvxAkjc7uSEwEo8jRiQKj7CwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uN7696GEEjQqiLUh8HhWg4fmfSminVT62CNZmoZbP9FSwp3hWvRcVfgGx2tsXG7VxtsmAvYdXqQrtWBenM5dKXJ",
  "key1": "hGxmiYQ7o8EqHzF3xEuJorNE6pLG2dMtpMdAyVLVc2m7GnVXim3UztNiWJUcbMYqe17WpCN4M3mSfBuvvSLHvNT",
  "key2": "579mDYMGPZ8msXq98EcPrnac7kvkLHqJyFKCLunvDeFPHTAwHmhoRR7ZuniD1GJEEbPbYt2J6ppieGLcwvkCybM8",
  "key3": "5hpe9fjd61JWk4ZpiqeTrMDgqa2dhxmP7rqdSsfX35714E52GxVV5jDRQ3iwV6Vjd6J4GRQeHTk4uiPLpEf9HRSN",
  "key4": "4QwpWt4cMrrpXbTtWbezANCvhGYEQo8EieSTpftUM8eUun4op4mx92qkozbjhkB5MbcbqmSgvkDdxuLHX2N1cSw6",
  "key5": "4ZVJvvGjXrkbLN2iGXhzhMuTVhjTWfPpvZyRfwUubMdSezqguUSFXdYMSTSWigu1GeQqAjHKytPfmRjVKEQM96bZ",
  "key6": "2QyUWxP8PrC24p8xDPgKu7Esf8UQBxZdsgVkVSRevBptPMQc24v935ugduwFi5w1tXS81goV4wB8WvrCFUxckkEE",
  "key7": "5R2u5coqgpcuKMDAQHDZ4Eid3UG8HNNfpnvQAZZLmH5DMqK85xpA9jPHAKbiYRvgAEBWmYZvdRvym3t3JHBiP1pc",
  "key8": "3J4U8TBu2ui92gbjT7ooMRsCsPUo4iWxwCDAUwBwS2dd2RcQ9PNqSAdn1CKH2nPzRRPB35EpWfW4cq9xeaPE5HNj",
  "key9": "2fgWL8XnhUYBuNTcBgbq6p3BdQrrnGjiYgzm5FZmAqPD7DCj2Djoe4t5LV1jErg39CayuEmkheAKheJ9CUp9AzRx",
  "key10": "3UTnZgdYq9kEq1rMvXKS8u55cU9K3JdA3yE9VDeC9Yapuw8qhbvmrjnGkxQguChvNKESbo7jH8uNPu8DNj7GJXFJ",
  "key11": "2MxU6ejkbRv1pqFwu6CW6tUSZw9WvhEkHkuFekHf7Gi4RbumChcN1c1x8NwkMKyUvkRAPq63b5mHXYXdf356vLMa",
  "key12": "4DiyQxdnTw7YXd3juL3Q3QcCtNGm3Qyynyo4c3Y6YiEkuVEwqtv3xvZLjvdtmpq3NGv7LdaXMrrAtTvwt1H8EEdM",
  "key13": "3uqcwwVpncTavenfutKohqowFRuQjdHnACFTbQeD1irT6LhT1LLBTUcbWgnqrfFanjER1ksXxy4Zsvs1jZ8j8xxu",
  "key14": "2MtRRA8RijHYejMjkCxY52dzyBJEf8TZBAiXoLv79BzJdXX9fTc3UyV1XgQKPWJQWfZfH9bXbfdL6zQHM5QBFouy",
  "key15": "3yaEd8i52WrA1NASnXouagycHd3vSYJoQcsiiTPRabC6hJdaLemHNSeVBmh5xFrbVecd99HfpQgrRG5vV6MjRwUv",
  "key16": "2C41AaC1EMqb8c8sTbcKR2jLTVNggLfHdk6psGjXSaotmvGHRoSpE89WthyeJUrX5bqrVgUuzZmgEEh4u249xHrG",
  "key17": "63gFHaJYspGMdm1YvGvveipjqeANMAjfRgQswwoZLjkTG5epPayD9QY2PMyagiPLggKiP67DkuVgQDFWqfKkXYvb",
  "key18": "37WSD7zowuLLnnABB45stiUN38A1WD2UMEh7r8xDNiMfDojZudRhQaf2Vq9nmCyTTqNBj2t9mJEbttUBTdtsWFBs",
  "key19": "2ZnyFWFiSawj41aKiuTupcisq63raVmD6gfPTV9RJ8TntrorEXM97HiCDLbWkjeRCJmcWfoezfDDyxDDoKc2ZXwD",
  "key20": "cYCtoyD5jrYbt61Fb7tGFNya2brWM2PvWLMhkC7TZRqbBbXrMBHa7h8CWeJYKTigRkcYDdPBAboMU6azgipv17G",
  "key21": "4EZxuUZFzWWLLxBeVPSweBoX7jUusERGvCV4tF6qmPbqYqGBJcPJHtmG1kQdFheUR9MAAkpFB17tGKP2HfgNKMmo",
  "key22": "2jHLEkcLyJe9d5UuPNhjdv6oV2gFx6NwwuE3grktb5fByHh12AFwPVJwmMZdvbm8SQvXtRm2X2KFtpGitRrHbPS4",
  "key23": "4TH8itZeymh5SB56LKqNkD4spLq79CpMpUtkKBX5Q3KnmTD1c12nmhXzKTcSrcRXHun5vNExXRaNDkmqa8vGa65u",
  "key24": "BfN1bK4EQpLe5bKBBgLgV5xjTHN7TEm8azR84okSHNRbTY6PSh4hdQrvCwJ5RBCLCSEVufw1ncaEzsqiW2pAysA",
  "key25": "2g5B4JtaAu3SENu5kX5nVZRw25496uTtpSdYVZd8nvoRdhWZcKYGMXXzku1ouLXNkGAThutRCzqBuuJSjvQaX2Gh",
  "key26": "YLYBiFvnqrNvttsaHJnXvKgXGt45jKYdfXwohRZkTjbMJafx2AEGo95ipyUYiW9HSLRtkNxc1LqqixYHVQeY81c",
  "key27": "42aEJgLJh5MwCmoMuLcQ4qeuyqi3QByVz41vk6ECALoMH1muf61CqLhhMG5fzRbY51wy7sdLPSwwuGfPsyfTE1wd",
  "key28": "f9ePsUbA2DRRttxcJipeDvRzxSZxa7nE4PzFJk6gaJ8vBjgiKj3HECidsA1fo26ChShRZnAftHRcDtUhbwRY3SW",
  "key29": "2mpwKSWsgeWHyhckKSE5FZQwGhmsU1uW2RiRmdcLUJ7PrrDctZFSXqVFcmZQMjwUP329xAvHqhq2B5xFECwvzqq2",
  "key30": "4SrsdXbVuo3mXryG9nRqYBZ7moUJoiqF7RQvYM1wd1YJgZJhJHyYecv9kCwjTRkPKh1obA3SwrcvGrr4K8KoZXin",
  "key31": "5kkN34R5EC7ymaMASYvgJPgRthHSV3FLoLMx3C9pi7KT5s9mSU4EN8i3w9bqbQBBhriw89sMWspnPWma5DaXnbBS",
  "key32": "LTeUkH2N9HPwYtJJYuWHPxDg84jUpUKd4VT3CUJViAiE9obASUC3gDLuFseVX82xvwBHPqctSpGZzALgvfX6CRS",
  "key33": "3sa2o7wvCbJNP8d89pjwBpZ2jNDo5m2HtvcMVzKGqVVEboDJaS7fyZPGQFf2iM2K5Nt4qEF2eQ5aJr3hfGbsPhR5",
  "key34": "3RPWVgnLj5BxJvWvvJVGjkvfvvvgZkB1DLc77nMF2UJYoxSBGsiSWah3V99MmuNJ57egogUpABjoHgADdNe9cfRk",
  "key35": "4UGF3qCdUFtFtdXn7ExzNq5xamQwmg6vpeesBxFXSQqPHk1yGC7VTGvqcoLoe56qMEXyVzSmrK9kEr8DrU3fUiw7",
  "key36": "Ag9W7B7a2sMq83dFgDhMvVLZG9QGB9FFxcfvGxcw8uNCagBBjqGHnceCrzsUDJiNh5ZWWTwdrznbGWGZ4UPYkhD",
  "key37": "3ZBpTrnDWsFoFAHGcA18ATSyrVBTJX2NNNwKpuzBsCrzHVCKuJGwP2KDw3Pdx66zp1S6WhvfQrRrevPXKZj9mSfU",
  "key38": "JQxpo5y2Y831AyRhKf7XZEEsCq8pPq9VtqPsfbFFPgYwnoAbGAxnfAvA7zysv91FHmCDWZQT96sek2bui6XXDWG"
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
