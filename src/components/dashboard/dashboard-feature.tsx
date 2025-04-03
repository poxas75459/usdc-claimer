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
    "4NX9AmhahpBDusrrm45BqUgDZBnY8iRqG3faSXdaxSAPexw2ugVmn1geEBf4YiE7iwgKp6zCSotaoqRVk1evjh4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fkp9bNULsTvYcE8Q6AwFd7ejdMKqahRCvr61bAsLz1VB7qWrmu947BBKCKbaMmMZkFzeKp2GRnkqDWjF9UYZ7W2",
  "key1": "2FbscDqiM3En2EYbn54roMcCuhzYCkdQuSejCvF59Uyqe9hN5T9MkzaDSE2jGgEsSbHwE7rb2AqeTqQtoUFqUx94",
  "key2": "5YGFrkAwMT9GQRM5czjxPdYadEq6xkEFVvGBfTBxnu7tjHJDqb5rGMbs3phisLHDXgXqMbg4HZKsPZigprKqc4uZ",
  "key3": "456vXFt7hJm6dF9vys81pcSY4NxKPdqMoqiPpfNVGyd2P1tj3c8r5XZqKrDX4TVyHFscJUok1AAH8UsT5mJfHVKX",
  "key4": "3KN151j9STc6FBNhwTyHQJEbXLVF5bCbyngbryNV6XT3t9s2TPVCv6EAChfiD88q349e84XkuDB13xWCZEzyFsZN",
  "key5": "3BCeoQv7Ud6WYApdfkG4Wovwn3aWAeXKJWPmqSxaUvDbqeYJt5cdaL2nssHhNBx3NjuRdA8Mg2mgwEZQKtZH2UVz",
  "key6": "43Dz99wtjSH4nPTBBsVLZeyQ5Etiox2iWkNPuBPCCyhJRFdGX4p9qHmfY5HWJ1QZucwo7CmrwYKx4gDPQvkRWsYW",
  "key7": "5aWhq2xPKnsJKbU7aJ6BQxWvCtmbPUfozNaAnXZJuY9UNA6gtruEgM8je3KCUMc2bTNp2hzzPtb5T6wbGebAUmpQ",
  "key8": "24NZc2dkVVg1RrepEzDiM8Vc4NtYbiEc9xqdUhTxP4cmJLd5Xm3z2USkoazJFy6dncfK4Q4Zi3MtRfyr9FdM6ryd",
  "key9": "LWcgWMJSvB3ANU1vDwKYYp9KCNsXCRckk3tpn9tcJHWdf2X1FgHVnwd3J33cNpDKfr7WBAH7s2Wq4bbabtAPuXf",
  "key10": "2NndxMB6gxr4QrnPvT13mhui2YBPL99GsSk67fmoAxiHuf3bcy2s3pDv2796zXMAZvMN5oHubNswkp4dtc82ywmi",
  "key11": "28D14Rnfg2AuAbbufZzKx9EJmdoVbzGLReoUV8a8yNscnGBVjbMb5UCjEJofQbAgKh6soipSkVMtygwn6quA3RdH",
  "key12": "2QqwrxNdCHzykhPjhYuGuPbs99qwRvwvTNxgzxF52FmA8LyVqGYuzVdTyezNrRnBf9UEVjiFdbBEruJBRYchbW2t",
  "key13": "5udX9j9Mm1eyDdB3W66v8rFtrwhcH4KiW15qB9GJiJjiFk5x1ScgDDvH2zA4MYP6w2sqp3H4iXWPHBpd4VWseHJj",
  "key14": "5YV2ftZjdyFQj2zaKr52eZTDitVhsHYoUzvrLrme1SzAMgTjbaBdK9t1tfbE8FTMbQWpLpXy89hKMiYEGGksuGKD",
  "key15": "2hA99UPDDv23HqB4YRCBfXGMzXtFaEAL4XPPvgJtKcvH1scpJKjidCZcQ8CwPABJBtgSnnHcmtcMcBkJrxJCWLd3",
  "key16": "3qih3DyKKoncc4VReGXnUmybj7pKAiVXUsrcvPs5sQc6pT1qXMMQMkLNueZZXRV8pXumx3gM3VaS7KQt7YEmQnSw",
  "key17": "3nSd6zAqAkGSYWkVzxTdUMFAuWz6xKj9PGQjYUsGPZge2tKzf6HwoqRhdTKVYjmDG9Ay9zAsddEbFN34AZAG35or",
  "key18": "22vMGRFisLWBsW9468nAe9WfQUYLuJoyJ69BXJsyxFiEH28FrDjxLqZp2EX1HoMmpyNwNHdgjjJHYk1hkJjZAqzZ",
  "key19": "5kubx9ef159fbdUMsCqfDRQvfGanqVv4RcPwwJWvioG8ATk6bs8jB4DJv9Xp4BJ1X7Gp8JeXrcZ1hGMt1NqgZwTp",
  "key20": "3Go7iDwGNVwS9FbyRh5rMSGjtcGbiVk3htdXHX8zwvSJN1CsY87JyemLHJrDeewSiUn6a235QzFnD166nREdGtUX",
  "key21": "3cJTEMRfhgEVDukuu7SFYsX7jEn9T9vbouLvyzHACjkgNyjMBwyy5i7nkQEuUwojbANvhgTzLN2UyxzAyRYEoyLk",
  "key22": "2gUe7TwLuEePePzbCG1oM168Fup3CfrmyAYxGY3HATjwY3rVMyCsmUmS37ca9PugxytNiDNDKuZzmeUJwBcgqsKc",
  "key23": "3MkDYCzoz3VShXk9VFNuLvmb2C2uPZC67eHTAycvaAb4T4acy4eYebFEvTY5xmzZLo5P2T4YNjYxWtwLFeL1Kawk",
  "key24": "obpBjPQ6aR47MxLb5ZQQbj61eVbttZ1tBMvED7cPELiyA9aEf74S8tt7KMFYfM7GtseKyjqwwEd9HFw8mPnpZyv",
  "key25": "YuAVs6TH6Awze8xsyZJDDT63znSTs9bEUSVe9Cw5UvNTpXuLVqMkC1CUJpwxbNbea5UsSbSy8t8Vx2GTcVKci1o",
  "key26": "2Yv8hwC58Bgz5t3tfJfKWJkpsnuakSH8nvEx9t1FApTvtexPEGNPewjpok3D35x2LKtFTyztVJNjLd6TpSnfF92E",
  "key27": "4KQzvAwCYx4n4azzoB9XQr2c7vg2MkmUAZU7gpUxvdFwSP3tAizYvPLSEuT7rT3RDFVD2gBa5KeZsGTA9aDxJia2",
  "key28": "3pqCHt3M1L1ewB42jayBDYiJRhxftaAh47cTH5jae9TcvXJ4arvxxR9xRa9PoqnhWpvyFpJjX2VFWkvtwM12tW48"
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
