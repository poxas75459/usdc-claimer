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
    "3vJbbuQZGge8zC159WCjsBzn49wtGebQzZzki3vP5MN3uRXMExonLdwFquk5hxZYg1AHjsQYtgk63Fa8pWxsVBUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSj2pW4dZahQ8rmg1YTxV9obrGhyy4cYWuJsK26djVp1YHUW9q92wqF3FQVHpbJUNT2MrXszZzwxMaG49EhwC8N",
  "key1": "5abVBvRKki5hyzhP8aNkU6U46JFPqXx3e95DsBQpbYMtxrSrtn6QmzXJHJWCYDfDr8mpJMcr3NxZ2XdMqP3fw4se",
  "key2": "4rgAqmdocR8z9WwrqSybDKXJeHtYRWSsZcpwGjyCH6wwzUCwX9QWH7HGpmUygFmyDWnSs4z1wkgBGaNi76keetdq",
  "key3": "2mfKdR6v31yYDh11cX37dJL78SSxKbsjHfERnbrTg6KG2pKSEduPPWTZvc1N6qWUXCXD6d9wgmCAiNxgsxhisJE3",
  "key4": "4HB9FrLz1ccPwVZtS8TjsZ2hRmr8Kk1hxXxe6mp7h47zt7aFUxCC61x5sNH9HGHuF2PHs67h8HCmFUmQ2MAbCgeL",
  "key5": "22DMgpAutNZabMjaiJC7d8cBdgMBDNjovmDHFqDGaxKJqbWrxHdPFB7dN66u43eBZFBra86xqLWjHsXQhm99SpFN",
  "key6": "4c4eAp5fpzjYWhzemSwdnuNQ43VXBojMY81Hx8ijYaNY5BKtETbPYkRmkKMc8nvAyzenAC9d1CtoTiyoB6yHZByB",
  "key7": "4CvH7e3H9oKcnGyKNn7Nijyjyy8Wj62eN8KLS5c9mDYQE2MzczucwEAnbFVbfbaikBMoP7gZTV6J3AZW81e5hSmz",
  "key8": "2hBk3BkymTKLFogw1SXgMooyebhVnN3FnF68qRxVwbVD9rhj9tvAHezaAsqm5McAbPDqPhhciVFd7ETQQ1C6aeto",
  "key9": "YsDW8m79ydjTkUEECGM4p47qktaqaATZBH1Tpxjv1VYP3BMgWjTTW9PBEMoFq98tjEJ7m9fkKvy7KnJpUa9k5ZQ",
  "key10": "5UJeheajNnhWicqhDFCsqEiH5wGQbWJ1yAUVnYHVvc8caXgyLdQq8kTQ1gtxNKC4YjwnLfEaxLxjgsY5VB7Q6iQH",
  "key11": "4UK9pDzDBnhod8i5JQQwekCffLxYCj8339cxszzJQcU9bLMZYEFxEFjNsdtqb4m9JMbNFsEqVociUqb13rwwmAcC",
  "key12": "w7eEZ5KZyDwXg5E7js2xXUJGwMT8FyuUHKe2hgEDyuDNAcEfx7XwpFVfJURPgg7UsQHRY6EUPZCrjeZ2EF4m5ZW",
  "key13": "4kj9yH6Am6iMzRMijgBKYLNXwnbfPoQB2ZVjUuopAxp6TCyBKuDFq81M14rKmcXiJmd5EiQJ7hoXTXEdURpXK3Vy",
  "key14": "5usmfUEPnkhBY9QFJpSEcB9wZWnMn1VsfVXhXgJrPYpcnEQBqVxD7ddjf3pKp21Q2EWbucmo1WnVNckkzADzP5zg",
  "key15": "A2NfAAVsNGyWxbgFESKgCz5mGchAeAiit65rYHywms52wfctHfge4wN72uh5Rjr96MuLESQBZTS99rMV2PNvbeM",
  "key16": "24fYufFYYdM983jSH1n6vBKhmd1Ei2aW6mSVwRBVx1qAgBGeCfxCxkwpyxtxMpRouBz38ocrPk8Gmkjo4UKSD3Xw",
  "key17": "4B5uy5dqjRt69wSwJGcV8LDuGadCrEtCTaxc91BAhbotccL7w88h48FThpU9TE8Rmu6WCxynsbGXNQ3KWxTwsxkm",
  "key18": "5s1dT5xRanM8edxKbdygUx5vZJJhgVVvdphPNjtcSuEHNeRYrqNSzTsHAcSM3hXCbmtJMDxFNafHaRXAKLMzBDgv",
  "key19": "2A2QuWQc2k6HBe3QbHsmY9MAoCJo3HWQeF1hLmPShDXdAdmfgv4qbU269qNrto7yQLT74F94Cope82rUCa5XGATL",
  "key20": "3dyZ49g6PJdzavo3xDFMdrh5iXE2vgHBWV1UVUomGv2wFFVfpbhN2rcWM5QYjz9bbN6C9AGed4kAtdvRWXcdFfND",
  "key21": "5DK74UcctEXRtw4diwQGLGdGC6UmJz4oWiTHXt3RpmroBiaXAayDJphu16jGy3HSutJYMAyyes3ire4H521MheE4",
  "key22": "Yd93iSxKXPBuxFhRtyAFaABomybPHuQNzTYimT33jNTmR2mfLCnbL42RcX92HChRGLaLbRHxemFHSQeGHFnJ6Wx",
  "key23": "9aNTxkX6czMrc2xoBA6gKT6MspTQQoFwEM78auRtqsRgjcVw1r1ceKPwuEHiNvAVjSwauXvTJLZuVAcJu6iHDgz",
  "key24": "25mukEEECtmr3ooUtL9ABvNjVS7r6zB6C6fMAyK8x4iNHdH2da1HykqhLj5rSEgBM8UQMMBxYVe3pqqM538AFyL4",
  "key25": "3kPaBNep6bpX6N66LkdDKqLKv3u8RitHSKTA4DzGhZpaXiKojaQzFwzgVCw2vvwcXTS2dtcx2oRgWu931MumAeKb",
  "key26": "4tZx9cqKZP6YefQCux8XUPMuNWx8j8kvzwUSdyPyr9MjngNQDaoGmmmXfFza9P4AiCStXrf1dQ7fAvBS5U8xATKG",
  "key27": "4EnL4wmC1JykDPjWVx4mGQm9pMQzohM57sQNUvmkSzeJL3ofVGjsoCzwAqTHTNbNBWYzi6roL9XWhp15cGHuu4zd",
  "key28": "GcBZQKPGj6pW9eH8zMZn5eNyTZs416UzCBhHeedYjcKEA1f72LnaxiRugLgv1BQ7DmeeutjBCGmxsZLiCasHd2t",
  "key29": "4kjxd76ng6wcVPQRSUZjosUQdFjZ6aZ6M9RvAhxi6k5gn2eVSxWZgXiYSKo6ae5HchBrnxYkiwUFnbqDAfWjF7zT",
  "key30": "2vQ8m1eAyFmkg4DRxqFrv8TPcrJSKhczWUtsfw6Bfz55UJoLBufJVTv9NTkSiwnPVgeUb3af5wWC3BCTMo1N2y4C",
  "key31": "2hymFAgzZPRmDX8852BvhpkJ8L1SGNa8dz2hgxkS9VdMMF7FtT9bC6hx4RzZNycS7Z7C3syyN8aK7dGTjnudUMkn",
  "key32": "2htADhZXhDnwXRovAN5MAM5PzN1oyNTzNGcYY6TyoxiP8re7fUmA1H42np6wZxTZHpeePL5R2NKCr8BHYMK1c3Ud",
  "key33": "263MUZjnFhoGNBUDwbCeDkBEV4vrc53pJNpZEmmjct8WFcK37S18Kzx5j5rnDfu8awS2gLXwu7TfcQgfv2yyaQtN"
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
