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
    "5tLxaJmF14vsN7NPXS11S23ArGcpmCRVmZiJQPiAEjFbcEfdGyDFP9aXRQkeoQjvjGPhbR8wH9iFUZqAq885zWXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wy9W9xGpLCsan7q4KiHKyue3CjxJQVRb8FnUtH7m8YM4wPb5Vb3CUjriPyLBSt1xW7wVudzLeezsYqp54GVpYGD",
  "key1": "2xNKBFSz6b5jHCMkpSoiekDxsbiKCNxFSsN7DwoerFArfqFEMrMx6mEm6xzzZgefbweyspWJUecFnvStpxqkvZMs",
  "key2": "4pUWZGYi3MFh9TK9RGVW8z4xYPPUgsoKeRWxCarCASdgMjrCnP3dawRTmEbb5WDaDQwHAoo96VdsUutXx8AjTaqy",
  "key3": "2K8p1Ww8d5UjnRNsH8YvgYLwSQw67pu4q1s2aoo9vKnPTVLPDqAY9PTshn2XnGLsRA2M94L2McnXXZfTqiPpBTPX",
  "key4": "bZ2Mh9iYZBs44MtaWgaX2xEHArh8hXoh3zF2TVrdeddx3WXJWcUhuHPj755tmPf7iZdyzSYFTsMT99dTZuDPTRB",
  "key5": "55E37qqW4qCdP2Tja8fMBmozEgEdnB6aasuowPRLKVQGLy2DGXuQ2uctyFUuQ1RSZKD9vWLSAyHirfb9h6eSwSpQ",
  "key6": "5pYvMD5WUa4aBWu7FYhM4aTHTtPX2QSVkyTi2zUBgG244YUPDrin7fytgqsj7nJWTFGr83DbHW4rtpRhWRCad9Dv",
  "key7": "3ZD5gbLTdNNkPGecMNEYCBCvSH8aTuRofE67mo5DMjPufE4Sg3CuRx3pR8HAy5hvwNt5e7Yh8Dqtt4fYze8h9JyR",
  "key8": "5yj27VjJLqB3yhx4GYiv3znw9MSFPWdK8zyjAm6t9mzHp4Adr95SMP2YuEeKxS9r9cnQ1SzCQE2o6rQrKdy1vtp4",
  "key9": "RMSWfiActnAjM41cuQuvjYKBJvmrVyMqjgcjbRuSV8NnbQzKKfH3msVoRSNjvrqgtrJ64StbZfJyzsd8TEW5nBK",
  "key10": "5aG9GWgE3xLTVqVcmaLZJxfvzPsQJ42GXiX6GDgUf5wXZbPgwbqsL8gDZTNF7ByY4C9tEFxcyU6ECbxZiGitZ6e9",
  "key11": "3CKLBdVPHYKXeszJ37sL3C7tj3AtzQ6YCgSFfy3QfxsfCyfch5f9rc5UXSD4ZP9tFf6rrV9smFv78UiWLLNqdXJn",
  "key12": "2BnT6Zangc6HgBn3pBCuPSHdXETFoMApK4DULh3YFvqLk2vSZRZGgtbPbujMC9usdKSGR36Ga7i3yBvouQBeRPWz",
  "key13": "4V6sLn8cKfFFsyVWq5C9JCfEGZKAveTBHHEn5RfYagkrfDdtyv7o8GzxJhTJMDownvRudT4sQB1woBvP36v9MtuZ",
  "key14": "Phqx7PCh2b3gJJF11gFnJXchRX5jxNevUckGWakmC5VmJwmREB3UopcqMxiUfwtwCahndQccMwJDqndA3ghQ4g9",
  "key15": "3PaYWNndBhUaD14xKpFtyu3DkXNcsB1vAbRvyd19gMqiFUMQGXq7sshmc4kxeaYVgGf5LY4yLAsgTmPm65pv6oh4",
  "key16": "3F5SuBNigxkCvG7vYurkjwyf3SC5z7ouFD41sP518xHy2vMT22Q6xiANkfWRRdHZ7epxfRcEatNkQWnYQYKVTzLV",
  "key17": "67KzyxKepm17EGoycTkSH5d47XJk8xcyRjFa5QbTcNz9uLxnHNHyfUm1fBnNykGrvrb4YjV3DmjgFspgBProiKDR",
  "key18": "1tb4kvqPtxS5W6o2AzqGMyx7cv8rvgxtkHJvdbXixvABJHV8uf3UenP77zt9MfJx9XmePhPsQcjmgKqtBbanpTe",
  "key19": "WQQyCC2WTzv8QEcDxYuTq4mSAnGGLn11aiT2pDmcuuJup1F8D87h8JaEs1tSktQTKQDPJWXEgs2fBBcfGZCjtzA",
  "key20": "nqszVewwwF38dyCr2tDdLZfRm2UcBSv94BbUArN2QfxHCmbvvx47JDnVUVD9v4uku9g76CwEKHrZTYVy9tWYK9q",
  "key21": "TTfRxerZp1e293MSyxdJT6cypGk8gv5Hq987MvDCnsu3WdW3k6TEmyQopTRPiTuBpgTqeo8WaaWZRy3DnndwDsH",
  "key22": "4Wq5JCRkwjpAhKuERE1ExSSKSTZBk5UGpHmLcPV8SrPsu6DFYvut3mwi2aDiwf7QF3pMKdBL4uD3FKJayvdbP3Go",
  "key23": "5zu16c35bwK2nc3fGfoFrfdQQy2Dz9VqVNsSd3i3wgYvijj3qerrEJUp9Bbkgam6DEcGpdNPNGvonzJcjT4uKQLQ",
  "key24": "3oveNQVLEzHLHguXHfrrPPF3oXhaXbMHoMbchmpBYfouHZjJiZDs7hV24VtuzPdDaSqwT99nSBmhsjudNKAFaVBD",
  "key25": "63LdwZsD5YrgbtGqYXiVynDW8THrfNp6SrLKhPHvHueMxyZkFBWADEsK5mcHqzoqEtZKizLy4a49p97Pwa5FRJSr",
  "key26": "SguMfurCV8AoevMwAe9rYNySv682P9W3fKq2JD4cZMLyskwyJz8P7aK88RAwunLL4Bju8TA9mTMjeFi97DeRv6Z",
  "key27": "37F28dm6e6TFfjX9D95zhiNZfFRGnpKoGM6E2xSLxaWd1uS2RXUupdwC21D4qEp1kyKUUPsP354A86SF3Mun7wV9",
  "key28": "3T4Ucv4Ynp8WExgjfaDGkSJrcKygPSgsTTqg6yVudsg5VaWGH6qvTMbzdzAEZBf9crkHpJdRVFpWMnDyceRoW3hB",
  "key29": "hFLcLWJVWLoyYV8LK5osN5amiutKvEc1UgdsndDJapHc2JZBJRorgPB9XngEUiwSpcN43WjZpTiR2nctwgwYKog"
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
