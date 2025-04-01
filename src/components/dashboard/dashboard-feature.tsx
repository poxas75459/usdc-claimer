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
    "3foG3xRX6jC139S9rrTSgwG9jStMeUkBq1Ux8SSN6tejm3kw87C5WZXGAGSyowSbpzq5E6gXGXkuKLBTvnLCDXuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NSFN9Vs9ZaJ5EDUxsbxVGSRsYV6YkcUjcnkCQk8fnuN3NrQuVaiK7nMe8x42sCvburQfwsHebGTtNCscTZ2bJ6T",
  "key1": "4JUwHAELNmemRwWCmbxAGmZz53TnHFg6dm8xUqnKxczJPyymhJ4znSLFHL49Dv3C7FP9kYfX6Jm1b968ZviaPws2",
  "key2": "dqXu2BsFNottuPaRpQUqpZZnjA9u1Ze39aUFbXgGtWQSpwGQGqMaGqW46KiNJh3ckw3vHWnW7PhCABZSzx1iiE5",
  "key3": "5M3HAS7tMCHjQtWf5T2dYjtGGt54kM7kGr6WWhey4DJ6EfsGG34zukejfFthZYdh8zgf5E4rZY7rAswVfXVSjc6b",
  "key4": "4o9JQWPeNFh7YHzDMHHQtg9Zfo4UyvTBPes1nL9Dw1kUMNa59n1fGAhRQswc3LphKuE7C1XVXqH7TQQ3nzNsAdVX",
  "key5": "57S4qLYchQPNL8sLaVoAZbCBw8W7A1ikPCwqueHRuuLNcZjFefC88kTjDzBUHDviCRBAHMxdZePQQJB8ErPWQJXZ",
  "key6": "5SjgbN4Kz8TF3wdU5jBbmr3f9yG4DBbPaAsiP1tNn7Cofz4xk5Ch2jLCqJTxW6ktywUFazEjeK8EKqtMYRaqjdA5",
  "key7": "5qpy8EA6BHYKDwq9DtkZWqsr2LXQr4u6nBxrxvgD8528PiPt3wXt2V9hAe8q7BpNg2kjhW15rKa85P1zkmu3Uu6q",
  "key8": "3PmyPmDDNSxfHf6LQiChcRCQhMWm3UkESWkZyKAWLQ4Q1R5sfSXT9mfSfbRmDo5J2fdmmTEpxWi5CYmVreoShw1L",
  "key9": "4dhFD6KovtFKK2RT1SrcZYKD1i8npcoe3FhoAD1e8ydmC6q8yrYhaD5BLBpdxQhWpiJuqg7pwac9XdqrDKrHS9k9",
  "key10": "eUtwvVNDpqCNJF1ujkZJsDJ66RZNwzvydNCmwBK7shjmXrcC4GALHygnqFruxdrdPkKCUwSahaQeXXYboRRhito",
  "key11": "FTL9V67ZBTcTuECVacFwDDXcFG3n2ZGnfJphMFYA8zKEoPEFsTWAB1VQQoMRnNbRtFF8GYZocBVBa2CwUus8yz3",
  "key12": "4EQJnSTdtQ8T5migVxsAeWng9MdVZZU2Db72ZVm5e9RijLSJ65aZtNb6GjLV4UDBZiE73RFpUt2JKfFAhx1vXN5N",
  "key13": "4UKXkpKsXzCiVz5sxAifSZxHCfERbGarhAbLPAQqhubK7ZZsW2VjmXm1vpaDVJanZPTo2U6yyE6Rta1H4tmVkkjE",
  "key14": "5AkGfxbq4cPkkuQg1tiL93jPPe2EQUi8HWqLs6tQqChtuoMgCuCpMXVHSPvxeahSFFHzLVBgFetRD5hG8FT1s6mv",
  "key15": "FDk7RZBcLDcGwA9RPG1HJpk7giw93xuRxFMP1ZwZCL1TGh2Xv8xvy5dZCB5TuAqUWEMiMrA96382diL1kGuEmAP",
  "key16": "54jxXnc5F4paRSZDYwfs78HHNQuU3BzcRyTqznmU7bqT49dJXzdbhjL8ruLZ4x4becUKktvfoipjCnrfQdJ31tbd",
  "key17": "2JCqA4i3ndQw8y8rny3HjcZeg2Fh3QmmGLsixjG4pJeNUGTyBbjfhGX5Xfc8Q3Jw7KS4BjFVrZvGLKCaYFLdaNQR",
  "key18": "41u7X1FwmJnu7sLttQk6r8km24Mw8LrpVWKLdb1gDTprsfLUKevM7L9UWekVu8SU7hDoDmyeSHirPQ3y71bvBTDK",
  "key19": "4APLyGWuHzrU4DyyU3TmykPSHXbXMdXWXoLyvJc88tjLr9DTPPrY1QLvnMVPPbH1Dgw7MZE6PQZ52ccYhz1fkZ6X",
  "key20": "wPaanFi3vqr3DH7owbQizVycpVKYQWh7ZqA6M7Be9JHjX76Q6RFCfXZSTTCbttUpGdhCCVQgVtRaPqXrcJiiLLQ",
  "key21": "2ZH71uwH5ffb2p5MkHEqNDQJ34zJFo1SsvCCW9RgiTWq5YiWpc81u6sFab9STL3KStzR6521wqvmLyQwFFq2wRGQ",
  "key22": "3nhLfWDmJPeAVHAPBjikhK2FdX8GnpWY7qCmE6VwJoM4EbhVnHgJsTRRruTRLwUqtc1YfbaMjZUT9hYvFDRotXtn",
  "key23": "5bB8CYaeGYHB8nC4UtVqXR8kYfZGZZa9sF2WNEnH9g18GApJ8ouhHAokyqfhtvyFQMHcefeXcFHqE198JjezNP72",
  "key24": "HYjTHESYL7RT53ywSZBXLLRDjs61arhrps5ARgjzFdEpvjcfhWRBdiqwd6qMATK4ybZz3DuEx7mfUJuhisHatGc",
  "key25": "XiYTDEt1hTryMnKJW3WpH59wP7E9cgByUQs9aTm9UhBRbDtXi47pkVif3eQgESu2XbrxuzNDPb3iYz8HQLA2CbR",
  "key26": "2HLUMy5iRKkXLyTkZmH9d57qPUYrJgY7MwYdfZLTpgvom4bWJR5cQREDdofA8S529jfEWstowxUX3E9Ms5TttJFJ",
  "key27": "4YE28mBJoxm7gLWcG32FLYqeCYBECUvTLhLmdRZqwHnEgAfZRW1zUEEnXtUnCEYWDU8XgCxAw9x6swRvuFUpdztx",
  "key28": "3d5Np9p498SKZsY449pq5kgnomiiJHX7MjFtfFaPV5vHZqWLJehFUMa6bQg2qMnGLtBm1SVPpmVYtYQMVo4yLRNN",
  "key29": "27BVXywENH8mi6DeAx6NwW3HXaEA93QdrC4YHsa3ppDsSiYgeiv92M75H7KKJCiExXEBoKWyVYPymq1RJMeT85TK",
  "key30": "4NNyWkN4EQ1LQCVGzKvA5PcpHp8K8xu66Z1MJstwHEu1AoVDJQPe7S48tFYNjGnwMtgMx53yd1cYCAFMpCGx14yd",
  "key31": "59knnQNyVsHwsuRBFgpGoSF8VjFBNPZWqaUCEdjDpoSEzJF4yTsMYptpUDLYyNWvohyRMiHf6wMyXgHhN3URaGwQ"
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
