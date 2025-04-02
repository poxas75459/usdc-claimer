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
    "2FUoN9xBue4GZq4MsFQEwaAUXQfJW7CzJ566zfPaPZCXUUpPdgftYVUYvAdkmPWtF5kUto9Y6qYwyD5CFUrhhSbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uX2Zikcei6vgckQcMVfcYKp5bsA2uhjwfz84jEFetsY4D2sXJkvD5F2i1fpLaHHaSfxLj3ZPgJSSQavUi6Ja1zK",
  "key1": "5kEjyoP3p2hzxc8J6UUhtZAijubTWSAfW1gbR2nuyHuqf2yghbuyVJ5W1dHbugJU5JEFe9YP4YwBMoc4DZboF2W3",
  "key2": "59kfnjWyX3nbtFEykfiuYUoQNkmV9Ejgm7jcAhCh6M9YRXomP3xWA7NkY7GXttFfvxmVa8LS8cpTf65WhFF35zHa",
  "key3": "2vAXtkka5pKPe28912AyCCn295riBmASvJsgTgknXHnuU6VxXtviikMDhzerYR2mWHRJCQMaE5ibssG7mnVmJDqG",
  "key4": "uZGu2r2yVRehpGPLr9ogFSdrmsHmKF8tco6hEv9kF1uKV5zzZKX4Gknbn3PkzfdRjj8jNtwZF3riVCKMeiKY7gk",
  "key5": "43CWDLkkCxxpr71m5oJ8j9DVbbkesdyqdepTCF9NGw1JcuLQDbVSEwRLjpQEXzttScKeZqWN5tvc1Fpw5tx8FeVa",
  "key6": "3jKqEG5UjTZFgXXwd2rJDbe36E4DN9R1ojC3Xm3s5LwcG2BBAoebwNz4BxqzqJvJR1ejv5H76ppgGKi5egsSzr73",
  "key7": "2WpixNyZTS5pLQHVA18wBckZ2XtBAtZbHF3ZCn1VNSMocLWdfE4wVzfHbw6xduK3wWhW4xyWBuCJQiEcDsnENEnY",
  "key8": "4N4VvG9uFbTJWTQ8wCxLxDXLGRUq2SETC7rtNj6mJVJ6udWhL4Z2E4NPThiKRTw3cTzJmzHkcXedFV4RLkpis3bU",
  "key9": "63tKmCEU3uKXTYvXFd64Z7XXjFsN4KuCsggLBvJ48GPQxS1XHQsr7uf1tNYxJ1vTiS49634QBWpXGQWz6h6bLWLE",
  "key10": "2BBVu678gXPmEhg1qAz4JS9Ue22q4Sny3ejV8r2adMZqGhTFRcgh8NgDMnaFwHtgxy65yedMxpLNLu7Pvipqn9uG",
  "key11": "3PsnFRWre6hWztig4okMNbiobm5MmqWk1j7Jvho1J6zdzxmuRd6XFuRTRG4L1Zu1RUvvEyJ4iYRf7tbNxJjz6R7i",
  "key12": "2xABzaSXtmdVLjd6MugdR4vASmDtRSvePyvdNRVG1QjMc9qnHeEGHfCE78tJNsHN6fkKf1zjvsiE7ftRJDn5SYZx",
  "key13": "4ekru3VJXkLUZBHNodWYiG8u5Fs3Pqq8XxhiWUcZ5AaUjNRhTe2SrY1y4X1JC5am3ecYprv73Lv9H5iiGSyUbDYy",
  "key14": "3kN51ddvujuK9T1gdCfSxNFp8MmFZSJKdr2uXGmqSomHUxwThoj9hAPhUWb5hVjzgrAspExkzvCZNAtHihbwymcz",
  "key15": "5okycYCatdPY9pjyvL75dDnV4PaLRHxcPtoiKVs153rYagXeJV7Th6aqPpPRxNCERugtVqwga2aupv8Eqb77MY93",
  "key16": "5yyTBmpWXAadjJfzjbSasvXmZy9F4TbHqbRD1jvq6pQDZiftiKFcf7FcLSduip9qsLdw63Ruj2SnUt4yipyEmuyr",
  "key17": "2TY7QoaKgQKoTJUXcH8WRe7t2Yzct4SSqrpn7PUAssC4ykamw5zGAdXauJhUwYmG6gGhd2AkUv9eYN4pzx1PQXi4",
  "key18": "27vXzFGQhsn7TqNiKwNp9UY4f2KL7c24ZwrimAaFV88PzHRRDAct1GS1ZmQEirdLgJYedvpEmEPxeSbVKiCnHFPE",
  "key19": "5eFnHwhbgACuTaGz8j2ZaTGGScBCfzzZjNkHVySf4A9pbMgt75o25xyhdZYm2Uj1kqA3LnuEqnL7cBbtu3YKgqWS",
  "key20": "3ez1vi5tNdLoqmYEgu7QPELHvytbByhBENTwWsjZakgWAWNsQ4EpiAuXWDiVAF9AAw3srwFdJiYJYcapju8Mai8L",
  "key21": "DhdfCr423oFizXW4ZQMBfLHzaC23XiojiHnFZZKwhUec5xSevdraH2bTa1eZZ12p2ZhA7pNo4B9dauqkFNEw3R3",
  "key22": "2aKqpPm8EoBzJP9MLPfba49vkzAJ9XPWQgxAKS6sKMFZUVnJbzWQGF6XS2ETDZt78MyvsQHFmFmAuzxLPDEDBGBG",
  "key23": "2LqSLVF7TBHdm4Mzbj2Y2byw8Lf53CNRfH9NPqDGc7wNAtbJUA6NinNiENLe2o2uFvw6demvkxGKFG2ModihPmbG",
  "key24": "5RRNT42FwjmGzcoh86a67csh5vT2HrAa7P4v1i3eb8Hr2d9jENsX3pxnuANhj2bTfwMp1aAsNAW4varKi3FZVvHE",
  "key25": "2XP2ThEk8VtSP1AAjvV5RBK4PSe7L45BE2wyhywZ3PwuY3kRuvQMoUm4JPU6EF8xVGCSpb1gf5Zfbz5R2xpWFDDi",
  "key26": "FXEvoo2AEUwXoz4VPSx57XsPDuTsSbgZFY61PMfHvyCkVG85QJjreDZr3HoQftnkhyBTEQPEYFKRQ3oCHJQnzke",
  "key27": "5UmySBNLzZ9iapQkPsRNs5sP5tdWYFChcjjipLRHYd3qkJc5Gdndp72rWw7NXkZyfunNcfxMoXYVf72ZCs9VPMPo",
  "key28": "5Rz3J4B1FTCFc9NfM3GtJj7mYfSAz1wamHkgzvwv8doMpZG2rTZsiEYeAWBw9GZ6SjHzUP4hERZscpUiSFYJAhKn",
  "key29": "2zjp3ej9EcuVWrcFX1EUA6iYujcd1REcwBx1eJiDwBL2V6dfKYMJG1P91vUbLcSzTaSRAxdPCyMzfu5jiFnKaqnz",
  "key30": "3UVEM8ZPBL2Ao2aUduuBmzjWXgbmpBPqSNXVG8RDA5ppSqGHUbdfozCVhXVQQ3VJgYGnSssRuDUaof3TRyVJgsTV",
  "key31": "2txncGitokLrG5kpRLW59wH51bmdsT4oVzKVu6Btbp2Nnv14pBREmCdHotAknGhhzfcB4ZzVJuD3vmpFhxcT3pVc",
  "key32": "26KUJn5AENdDL5puAfhcR4LGsNkzpA6Fga1AQYqDQHnXHaLKu5waWLoZShW55QtLgK5W4p5jWtircgRTr15xS5Qc",
  "key33": "5z7ekDLjbcQD1tUYYVZedFpcN57dXKV9FeiuC5EhbJgS2hmu5m5p3QFUJf8zS3PXmnUA8tvjeUPoKR13P834YJQY",
  "key34": "4JJ49L37VfBk539irPWchTeiZVLYUYno2e9ijiZJK42qA8vp4xdtBdUEJqnj8XKUkgQWu3hEUQ3WFBd5RaZzfVwb",
  "key35": "3zSXGobCLtdPFau8dbHYKSB4zYnA5GaZzrxtBWmcKkqLnhNfmz9FUoKVKmUeqK3dsngJbFrT52LJK5EnWjng6xo7",
  "key36": "5ofdJyRfUeqzkRusTwTPtm6fNGgcWZ3JScmqdRk2k4V8D7pDfjZ76CEAPdRoPZEiZNRjkcMMkzUkpRL5Frh6ihRr",
  "key37": "4qKoNF64uL1PAYgr3WCzxXiWUUfRth7fo2DdCVrzWb6gkusUALN8xnySAk24gGPq6gZNonomb5zfXXnJT6oH4npx",
  "key38": "5GeabfjNdKa2Prwhj6duwNqhHBHempLgR72CVRhwL8ZZxCX2DdCgavyi7PJEneaQuwv4gdbnBTtsN9jy5dJ7F4UB"
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
