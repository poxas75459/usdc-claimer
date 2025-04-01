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
    "2Y7qJ92pPStMgCSLsAcbAQdt8LEb1fMJjgxyKvqCQ2PYTtTggxD889X5Z9hg78Y6bW1E2FmjGeAHJS6HDAvwRyjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UAe7NfvE1bttELGWgboTgtjUF4LZpjtoeqNfJzVtnaTLNXkgnwk6mggACEYGguhdMXFDxBnedxjwVfC4ccRYQz1",
  "key1": "5rdXUPDbMcXiAGhbhgGSvg2NJJj3gXbiRLjSAXWZGqcWdW7cHHHkoq878ZPjRwLYExonqnoqvWV7NHuW6CmWowVb",
  "key2": "4SWQ8ttsNQVQ8DJHSNj7MsKhk4xnbRcMsq9SgSyYKaDBp36NfmidAE5YzodmX7hbRJTVj6TpGhRk12gsEuryP1Fi",
  "key3": "UQL8Nov1x4uPFUSMeXuNC8ysNfM4BjtczTCVToVveMZBUJ5uXp5FKFkh3MaZoWuAgwaNry9XcVcmZCMPo5N1gaS",
  "key4": "g57dfVewvfWDmAicpbUKNuYKzncTuLpb4aZ95yJTSzReMmzDBXYZyjvWH7xMFsXhtLtT27cwaXLSiYrmLVogV26",
  "key5": "SDeUggVkQxi4QqynXwmbW1fhhrimEHHU2jpYihBnRfXQ6CReJAa4phwDwYm1o2vikApCd5VFk8Gid3TqiBG69tr",
  "key6": "PJxaEZdccMnzm8oLPcsMW7ghKWbhK9meaaREwwK456BJ9FHQCTvv9GbNQK63pSpRSx6w3B2zFhLBTrjEnTu43v1",
  "key7": "iwYWu37kboQT8bYckg3RAMHTvi9LieKYaoTTbxPnADTswVRe3RcHoP8Kpt2mDb2cUh9TwvYAgApJG45hEkZjceb",
  "key8": "xeghAmtF1mPCPuUmqbw4Fa71CQVGm9moF9j3JH39xmEJHSiZtXG1HeA38oEXQv1g3SiEFEYJGDidYLdWgvpXwTK",
  "key9": "KPMgNMNPQSzcfoCdjajhjBfMvoJsbHPvi5qu5jRvxmK1hJ6KpAk9rBYATFtrKcpXbP4kd6jEtacSxuLG9QCiHUM",
  "key10": "SqfRrho2zMYpYZj8CGGX6A7f3VQULRZNvanCDfbo1GUuYYMuARc8tQFBdU7Sfs6vTk74zrogc9Kx4Hg2q4UPXAg",
  "key11": "43PzpbqctWYyayeHsWHELP3wqRtrCd6Jd8xwfLin4sKBw45UzrtEbJ6AgEAUKuknzt7VQ5s5B3GnWxayJsiYQKb4",
  "key12": "25YBnRie9qjNKLX5Pu7BYvNLMqbsVDdUAC8UAqmFxnUcqkEonP6ydJ9QDpyYgKJFVvnbHTKBJ5KBQMQ5bF7ypu6R",
  "key13": "Q7fjcR1Aawocp4utgaRZeaK9WqrX78PL5GQQKyE6t3cS4jSyduKivphBEnSmjRjTjVymsPw8C84LcSZZ2EwbA1s",
  "key14": "3hh7xD4W3iFxTBHACu4vU5MYPMdUvh5mQ64jkLLcCe2X5d8KuYkh764qDtnneEd2mmhNqGVVsYawtFNBzbXoCEN",
  "key15": "5hB5DeThVm1384fKYbHgytPChNEdMGgvJeU3iaMXYU2YPnpSjpzZS5yvvEK9mNWvvn77f5KdBr1bhwKEvBL5f7ZK",
  "key16": "2BPsGQi3FbomSshYkZUDqMe2n6jyPJ6yunqYHeJTG3o6Avtk2iKH2i98WNZsiZsZ81GTra235uJ2VVRiv7QFy1Bq",
  "key17": "JivDRkiJGk4fU5U3c2RdGQKXAByghq2pypkwgULWNBCcvV5qeMvJReNmUVKxDZJ7QQFWGtZzQmvNvVESBsnzBns",
  "key18": "2PqMNxrKa1QAizZS8jmH7tNavsr1P8Tc3emCgcvriyiNx96MATRwsGi5N3J9xm59ZNYvTgK4D4vn4xLabKu2unXX",
  "key19": "2jGHiEyEthN1a57CGQocVdh6tmB2Wom7y4yUTYifbGWQfP72xPuosWAYJNQBQBMCvJb7jLot66vEK2ofAPn2paa8",
  "key20": "4yKz1DJCywLoR8J3HmyBBYkpWqPuvSQcHCTu5u3EVLUz9e4rRkF9psVDECtHkdPUmNECCTEr7QeqWsqJuNJytUL1",
  "key21": "4tcJtW8P6S4bNuytexhHp3GXtm7AKFPCKYUF4Sw5cDWij3rHbLiemjWsEZppjhjbFG4DWjUMGGJxks4qgfVphEKo",
  "key22": "2U565Ev1igVE8BnHoxQ7nk2jmgR7jrzkDnveN1ZjwtvQbHwqXpL6DcDENAVAJC43c8vFzbLC5ZGK1boJ67SbirrE",
  "key23": "3TgmCQh6JAwq3oDe6CR1htgM6Lr1FGYJLkmcqaPa992E43Vrs9CfhCUL6BmVwrR7DVRfDyarZjBV4zFYuouJQAre",
  "key24": "2c7dPTRzRd8bcfoX9dUCxg1cLtCjYY8tiyf4CzjK6RXQY6mGXsE94uG4hecFPTk6aY3Q2AAZ8RUvZfmTMpeQAnJR",
  "key25": "4v7ZR5QDhQx7bqQh828WJaaWNKQdFXjTJ8BbRA2na44anPeAcGa1JV7Ax4KSVZJYcTUyD3YvpPQ9Q2YU53h66gaz",
  "key26": "3A37b73BXuX1G5ftaU46ayZLRxnWA57mALo62mdw4s1C6Rfiha4jdNuvg1gf4NCDeHtjCFE3H3vvVrrxQDQ2JWW",
  "key27": "3UUwvDpvaYHtfzdWJ1Hv4tRNsAcKwpzgi3cjugVEHjAjt7SiB1NBhbVubEyNxtRbe6HyA1u6yK2H9E9ic5iysJg9"
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
