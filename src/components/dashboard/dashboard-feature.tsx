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
    "3SYv4UEpJiCPEqAuJ5iu8YYBpB68aDBEqCRuvowaH6ZSzFJZfjSEeFWZtN8vcPt2CKPw2RKB66wy1cEL7szbeh5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66y6iMiqdsrkeDsge9wjZ9Tj7zoFA8PnXd21ZHZdiWoxR6WbWvKU4o612Wf5shyNu4M5jpqvgTGgYyPx7ohkC6dH",
  "key1": "2eJrk3iydyjZtGM6nKPVPt3xx1KyS37ApcLqnNLwNj4JxiqiM957wqLKELF263NDo8QBEdohPoWsJWxYeoa7X2T",
  "key2": "H4htRVQGXF8LiVr3Hf8M9JvrfELx3copRT4yedyq8rTBiUJjBEUDWkngwNPmpY6jKZ4n4ZX5ufYfP17XY82JkoD",
  "key3": "5L6LeJjQvgY2h9XfFtrDxRV8CyxKLTQcZxMe87uNmJdxrQuE1bEr7DfLRWDzkSdhJUmNWubtXZxcEk7uGA5XTcQL",
  "key4": "63BT88BSTDYyBJt72pwPTBw3hYEpHBCzSZbHdPhdexNRcFNbPq5rjnCK9GccS6gdczTccXFB2ww7c9boY2RdEZLC",
  "key5": "2TBexnDweUy986kCvsQY4BcQmbEcpEV7WdtY6xMy5QG7t4tK8psa6a16Z8hMJ68hWTJp7KwRFJ8qb8jm8z7PnF3f",
  "key6": "24i2e3Ki22hBHiNHErUc1y7GAEyDZqzfoXv7tdUMvoeYdt6vTdoeMKAaajpgHCxf5N8Lio97oUPuMdUc66hMxbgP",
  "key7": "FaRNcmkUgMjTpu2czbuKHpVJhjPnQs3buLmJPhZJY7qq6xAsPJ5MgFjcuAzKAVQTbkDQpXGCVHrdt8CRHqrpoBu",
  "key8": "5bMfbd5huXEgQPcy5NRopor9Xs4pW8eHWuZ2rsVhiyTe6XaFe54mLagPRbfA4JPbJMy2quVbrCvwo6iZH1HbTqDo",
  "key9": "46gXioa3Vv9Rqptzvgavc147a7wycWU7k4EHEgVg5sj4m2L2rfunci7Tmn9fguxENNWbb9QPRrEvLJpGsetP14gY",
  "key10": "5cnKb6FgcFEhx2zzmPyqjYxLsrwN3u4hKgcWBuLni6PNtUSCaGuXNdW3XnzJtEAovAhWWAocDR16xLPrH3ZS8nEA",
  "key11": "3PtKeb1HiwasRPwN7mWJ6ooEaacmgaasTSgWbjrihVmxHKpTnAenykuk1WXQixAip6PVnd132CraRD6yJGoihriZ",
  "key12": "6ue91Aw2e4QWJmTbY8xxzGPsLY948kmjsKag2pWG3zKKF43VqWYb3nRC5hcmxTXsaZUHp113tDtfji1rZuxuYW4",
  "key13": "5zepRvrsTnfhs6yzmbKMjvfZSZpJf82sRb9eaVBySpSdGgA4YGwhwdRB78hmujsF1Ty4tsHfbR2Ga2qmFS8TZ7bc",
  "key14": "XGy9d7jnwxbPjqidNzN3ozsVDSFyiVbX17pgG9zAGvxXbwW4Zxo9waJFCQ6DkNqUV8o4TJ4JyvJWM17ALshLwqJ",
  "key15": "3vwmf2QmHEa6VxaVTsN8ytfdbAxmYnMGnwUkzUHBDonbM5C5i89B7pvQBp2c2deT63MWTt86UyTouHA7NqQn5RyW",
  "key16": "32BYThu4UY3yJm2Tx8tXySuRK3nPXSxjRmSf6nMbhmRv2KLYA4HPZBqPSw15vfyxg2dQgHHjh92UdjUNfQC4fYSJ",
  "key17": "7wCLjApGxYcCMsma8nUkExNhAVgvmGiPxsZFq5defa2wEGF7vMqZvmNuELGRhU3QWFP5tFgS5CWsgk81rdhQqWV",
  "key18": "3EKSEgpHbKuzKEx5CACPLERoJMh8qpMdG34C6WQBs2t4Aa1tZGEvaJoUVg77fcUVoHrgeKHeN8BvUfPzqcs66fkC",
  "key19": "4u7iNt624EhokMVPmnS6mePbiPscDh8aSi5HAxA11MSHc5SXiVY1pzqvXjdWoaHUsupeiHLc5vwLT1YjbVA7u1LF",
  "key20": "4w79BEAjFJQiiuNEaxwe1DaYgCYmD8aFHLF1o9CTMvDmjhs47VVzzKbrZsEfv8QCdFQHFpnTRDgHbaxpbWxtH1TK",
  "key21": "5Gd26Wi6n8gaTfqAz6CzSfXsgTKbMF338QZ1JzyD7u5J8hdMxdzWkyTdLjTpXpBQy18ocW7PjhzZankiABWP7zcc",
  "key22": "3F9eTmRwm8KgxuB1ZcFmDacQv8M23oxpf6uJzyY4ph8ek85gPMYLMgFAozDsmUsD8Cf8SjRmUaDVHUbmCo96X2qs",
  "key23": "3mc9m8L9hqKxkjLTxVmxWn5uMQXD2yUUnW1XVHgLy8bxHCNZs5Cnovh7AYUH5s4vuc8F6mJrcPpgX44VrhPjjDra",
  "key24": "2dXe2KSNZfiQhXSWEJwRerRgQiHY3LVfTbYQzahhg69TuPUnhtHijcMQHAxp1ZGsKVGCCsRvqRfDEKsF3tvTiG3K",
  "key25": "3drDhFFBupALJoJ2VTLB92tk6tck3mRL9AmN95CDyRAsETrXK7n4wdGdENZiZGCoFbdZK37Wv2oZQ6rgFJtZLw8Q",
  "key26": "3tXBkifTg63WvMimsq6HDVkwB6mqntWcijMSDkkEQJTYKhSAmcbtr1nV7Xw9iBTEVueAguaBHKgpS4yjYszvq9zt",
  "key27": "2rqeyLfHfd2xgBWV9qbcCactoPCJgzDf3KQb9QxkjuXvoUELgwx1PL2fyQtmYH1JhyWTVuQSu1JcCF8RBHRmghU",
  "key28": "3Gt6cttdJfjscCVHgLYdJUA5kcACuDSksp4U3gFRvuULPJqUppvKkzvcEFmvjnPiy61N21p2XfxwioQpmEb59KXG",
  "key29": "2BrXPSMt3oHgseHfatUjoiW1Csanzu6XGUC4FMVEnXERUQ8NN3oqDEKJrYKRCcnrJJw3uXMRxMa2h4Cs1SPrinkB",
  "key30": "MeBuWyVx8v3eMwjBbrN62iFkWZZSCcYrDVC29F4948d6kiLqsGd7YfG8gKpF2FJqCQxHbqr6w8enFB53Q2EJPNS",
  "key31": "WrYAETNLAuCnMiTQiJRZRgs5eUYrr3gupYGE9JVzfxNcRogacP3CQjL3fgce1s63sqNAYtmYXi9Ag7o2GdnYAaF",
  "key32": "2we1AWro6TCDyTMk2Rd1TsmxE36xXLzSTf7o1jXHAJFiFm9D9wqah6uYoFvGtYXnwbqYdayNNUpHCgW8uxQ2QdSH"
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
