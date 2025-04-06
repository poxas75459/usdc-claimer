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
    "5VqN7G2kCHnaQM3m7Q6YaijJc9n8iw4ujjfvuTU9TTi5xFdsFAEcRuqJEXjbARQasrN39mJegGHWjgAFDXD9sCs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsNjgH5Xsq4txwX9eLYfoeBPonPCDnRfQnt5hRsAsmRbgmE2jmiatj2VFuKwZsZhRe5Amc77MiKRW5cMfbmSYr4",
  "key1": "242yQnZ4cqcEcTZjn3pDY8W62TtcSRCv1f9QMsZfiWcTU4RHAvPQ49stuhdG3ELUuuNQ6AP8yRpM1LecVSwkAyRn",
  "key2": "1FuhRSq2uREmqEPRsVAocxDF8rmmMEoW4ruwiTDAQPmKMrSGe1zCSF2hnYrGNs3sy9eLptRHiik6YJr9Mxnz38g",
  "key3": "4fL75KzvYNsTHhnv5mYsQnsYFpfSUt3ia2D4Df9pDg9NBJxHNTPChAp8EmGeaQWzrzz871azVfvpaUEurHW9srmk",
  "key4": "2fAxXkPTLcBDxWqAwZVGSJpgWtF9m5io5SEDg498otmUT9MDZQinyPj1pnGGP7FCMBbYNNuHX5pCXEJBMdPkUXww",
  "key5": "4f2QWYvXEuyu4THFyTEpytA4c157m7D6nno28yE5ZsAN1DAmYBaasiT5Sry3N4mBVGz1uRhFZvEvqhCg2tHWzqVd",
  "key6": "5ytTnhsnz43xAzNvDTnhvkwyJpo9PfSJEKoKoLMmMEF3to9t5x389sKbGHZnYGxk8xwcyc4YC2hUWU75GTSK5ZRC",
  "key7": "5adLi2LxjCtUrnMopZ4d8BZmh3eCWBXA2h66z8tSuf9H2nPuvH6mnnqm8rVH46wqfQjFZE84aDVLJATUJg5NaNYn",
  "key8": "36vczdJ2z4aC6iP8kAF9ejEedmFoiFnfbW9B5KWsqQQonCJWWg1BxNaKHMnq9623BrSj44C3rRu4FRz6sDBarrid",
  "key9": "Tn9mTKSSU4N2EyyEiAXsLhWWnFNXxigExyK9StUMZg8djitMWHD6FYibA3khDLsnz1oxzSExa1M5hhwDYxXhfSo",
  "key10": "4vKBGvoAwQuWNZmibyy8QCQ1xNtw5SerNeY4EejvRVbtBGRU7dDbGrURVSzZbeQiteKniKDdGtcR95MxGLQJqfc5",
  "key11": "2YBMZKjLWX8Je62KSoe72YUQp3Lc2bAzRxRLxKosxhEYeV4EwNaxPkoqWeeWf9kj26KHMKZacbJ8bDj91FomXzY4",
  "key12": "5MqwW6JWxPmAztzeDTscoq6krVJvca2STZLMnRuXzSNZixcPFgiTyy4a2zCKgNhxzo3UHjE3Xu817FDNjRsizhfy",
  "key13": "3gCQAwmTde4GKgtakFBxiLPqbCzSg36N9zVVDfwue4MbCUdTQUxgmRWJmk5NUzYxRGWLcgfJQJQFcpkJMdMZQEmL",
  "key14": "21nWwifvcvGu55k7E8d8g3dsjU2szauisUx5xFhpzidDc3rTGJia8Lb6RQb6KGoAv9xXudRXxqKWwCngqvjGFC43",
  "key15": "TzNmkyh1NZ1Tc6UUSA2WQirAnRuK4iLX2xBhksX7rWrtXnE6yhR1TKmZMM6DuXmHqyJDTnFEiy5AdkzuBiChxYk",
  "key16": "4ihUZU1h1eLDKk2XBVjqgf5e5TAKUbujdX1RSWGBq328GXkHDihJ5tLvVmT9pkRxeCdT5V4G5iVUNYN9YzXvVmKB",
  "key17": "5YNF6tX4pcT2DdzPKLvEurXWER3HXjHAHwq3sUE8hiLtqTeBSJzCL2WxZZoE6zoJyTEw3hmm4NAbaE5RpTTiEbkC",
  "key18": "23un9vM2KS7h4cGajNSPMLjxgk8DBDCp99x1XBfQ3YvfZgJxeH8kXryUHbPaaxnchxyD2BowtWJtZateCGNcU3ZL",
  "key19": "5dQtGw1KyjaSZeXvJTyDDCdpEBccYtXRZxh7VRdKwHs2eHAMhmNdP3yxaAaqaL1JAg4VS35XbvfSftBVQaqW7Fcg",
  "key20": "3mpLH3KJpDPUv7NU2MjQBT7BoSFxqH6MvxbRJqivtXWU93xS8BFfmdssR9aNmXfETk3xMrW76xTuSH5bU8dw77bD",
  "key21": "3rSA8kut6Zx1zsyEg5uYSFmqvjcXvS6xLcepkR8g5YvELEXBJnLKewPV1uxHfUYi39t8FiCEDMTmFdjPr5zSn7DQ",
  "key22": "5HVd4Gm35RyNhD8FWwk3F6jW3T8LFNSkMka1MHtbpRTzomsxHu7BnTbTZW4wm4JjFP6vnPN5WmVDt6MUfm1ifxSs",
  "key23": "3j9yobtLLGLyHpi2gepC4sBktZK6nnXT2C7TjtU23sBU7WvZAFNGrmuUUEXcMBJNANV9jGAijNm8KfzK8L9sxPCd",
  "key24": "2qWcziHnqBHg72euvqAuB68w7AEQ9XUbbGt9h7xMxwes3JarZ1pDtZzLmGqC2YkzkcjXvcJHUHA79XjdjqS56qGL",
  "key25": "2Hq5MgrPJTP3UtMZw7RHSTA1aomLi8tSmeM679UCqcheHKBBuNZWcNw58s92CdfhkSqKmzqhhmXg57FTD3NtGFWt",
  "key26": "47m1DuFQD7S9YNovAM3JR9VjwJ5jwGRXTMd3nJc8NQJybMdhTJcJENRBeseH3mG6KWCoT1EcHmNsRk5r9Z6KW4Mp",
  "key27": "3D3yV7dvhmvCubRNRSJxivwui11mqR8XRVy6qvv8RJjvWQBpacHHHv85T76239UN6rkV5nUbJr6UsJiDHMCGKPtZ",
  "key28": "BruTGVPTnxesEh3hhBqFNrpEZZfsEKHMW9RAs986eaZVQyYrQAD3VNsKrfk5n4tAESMTk298V963yKfToMyGPwB",
  "key29": "5acCSsyBbKQMihdL1LojqWvCAo8b44x2Q5kPGxT8UgN5Brkz2hPVDky4QzJEsyzHTecPRRJvGJCGZA1S7ZCusdQB",
  "key30": "2zLSn8W6FUNsWVQ3v1SWkoqZSJpUHgLKPDZaVgVXK95NXhvPbni6ATw87FmzKneE245WpJNBYM8ZsNdaSxM76Seg",
  "key31": "2DMGwk22hAhshRtVBdhMAaxTvabfAA5qekq8qVeQ51dG9HNXXqgK1b83p7jVgX3LnyzFXRXhyyFYHcXZ9gEjPzxY",
  "key32": "493S5Reg9jPV9Rrf56gUgbSr4B9oUdi88pShdcTEfKi1NRFqg58sAzrjHEyuW7M4JX5R1DkNszS48A7utuYcB6d7",
  "key33": "41fA4E8qzju6eazA64EhCJfxdUHsmL8dm9dfQrN5UCQHJvyHqSbRASGmaNgWnynzbdjzLo4UDFRinZDpfhahc5W1"
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
