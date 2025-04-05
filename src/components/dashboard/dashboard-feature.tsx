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
    "3nAZDmShKjMMbNb1JY5ERQy8ZqsSS9SkjukGr4YT6Q6BdZUuLhTuggszYpEeHo2kKej6jnNVQKQmevEsG8ttEmsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9su1N2VWSMGnTbeHEm7NVkpzizQ8gBHCFpzz6WZnQNWD6gAUDSyGTZEyBCNf5BYDP5cpkbVpTyjzEJsymfCAFM",
  "key1": "2ir6RP3MF8A4A46TnsJH1P7DNeonp7t7bh6ecLtgpN8utJ5kzqpMSVksNXKfacScBMo4bmbmggbPvfSX8nvxoWYp",
  "key2": "5NTo2dT58jr8nxTTD7YDZEcnHsknzAZdQLiJUnusxh4ix2NSa7HGqHksybLAtNkrenBCw2Bzv8uZmpim2jh7W7wi",
  "key3": "5wJ7JEjk266zdyA8aEKwqqqVTtbLQDUTjq6itCVL3p3dCFGEPWeh7LffcRgYppqPpZpN7fZr4wvRU3rA5eJ2p9op",
  "key4": "2pfkAuzPikyYVAcifgVHscXsPsZGBBkYVcTEFbVLHoz2FyMUYvJUupaY1U86k2jsnkLP9AGLuKiva53hC4o2T469",
  "key5": "499heN49UDPEYhtaeBab84tUYb7cPmRa3sBv1zAKEgSbxWKwcsNCaYA95P2DCAZYjbPWTecLywz7L7wUprwpJiLm",
  "key6": "3JZyz9pSczayCax9a6aQTZeWbe67rxrE2ewgPauVTtNjL3oNwMuMpWkapScqMK1vy9AdJVfE1CTkJ1kEhf8st61n",
  "key7": "5shc16WYStuZqJCZQEFKb77NxqKiL4pL4Wg8C7NpLnNZmjvFRaxmDYKiXafop6P6yyheo7YZut7RUXV73RRG7EtX",
  "key8": "3nDjweDGfpzcjHmZci8eYksfNGBg8skbZutfpeMvm7oZm8eCtS46NxLSstpUvXAFtYJnYFUHEDzpugNkLhKaacTE",
  "key9": "5x8SsLHcRvo3wt4vbifnwoaiUKJMes13yWUavNSjpu6HR5xX1nFWF3uBEZ8YkuoekCko7CkDTmYhwiCMYpRkRdhF",
  "key10": "wSmzQhPFuydvUUU12CsBbkDQppCv9A7mG9M75UXpUGgSEpUzCwWsyajrxEngdCrbsBKcqzvujZhhtmFKHgDnNre",
  "key11": "3r8TcXZ4qn44cUQrrUSgS62JyWY29ERap2sCYQpFUc4GPZhD8gnUn3175R5DDqPbTSjKKLHZSxXEXMYSbCA22k1p",
  "key12": "2yYrEDW9s187gpUSTDtzphFQHCEwT1cpVNWdWPwzpav5Sdyy2UE6auKp6W5WuTQ8sZey4bLfHcAhWdJi4eHYG9Wq",
  "key13": "3MnHJQvgndvbD2vXdbDFxZfaxWPW88B3sWavja7qjqodwKGKh4yEtErT4mrAcU8HkAw6ZtY4jeMXHnFwyBhFDpjy",
  "key14": "61LcyrvPi8tKgTcK2BDdwMATuimHcoacZQt72xJEEG3jtVAwKLs7qJVzqY6kam3jWYEnSTYwDnS8cFNEveqtFkn5",
  "key15": "fGZNjNE742CaVuBP7LmK6jTDboc3m9nYoWj5cHusrnXy1LadiDotr2E8S78MUfMuCo7AHf6sCYLQWceWogdU1eC",
  "key16": "h7anEZQ137vsBUgb7h5oMip1TwoHiXPft6Q9vWiVtYdNWwbb87nR7p9Wj7eMsUrkkp62q8C7w5Ut3eSZ2Yu6t3y",
  "key17": "43Jk5xDEx6tiMG1Gnc9Zy48dMRwZS34dchLdBwBU8Z8vS8ZSFCvcSU9CPmyiCFdVXeFhbxykTGCkh4zkX8hWHzgU",
  "key18": "zqrsbiivaVSqkfPB1SJW5ZtKRH6KUXfmvcXbh97mbksEEPUPjXgQbEzhmad4PCzA5wvf5fASqZtbopTfo6nNmvk",
  "key19": "sRyLrWvhSh7eFBVm4mx7M61x5x99LescVWotnik8Coo9eJ29WKf3NKmMFPDzChffNYHnnDj4Ad4iUD3jco5GoPW",
  "key20": "61kKaDGMM3T1tVBusn2xKyHRNDQPdDMpANdr3JQHN9o5yK16JRan6xu7YuGZav2KFF3mM4MT5Mg8kCvwWbd5jSpM",
  "key21": "y29ojVrkEyfE4iTtYw189Sio4PkkEQp89YiUjy3RU6R6NXyB1Lsc91LB3tyB5ipXqb8TtsHJsAxTDnrdFFNDxsS",
  "key22": "2bpn8ezZV8EeGJBdThj3A8VU9U1bY8jnCBn8MGuqcyfujGTT9RcGjV29HLGLWHR4FYAk8Xzm3aMQ9SDZEquaDgMh",
  "key23": "3sQdhRdcYxoYfKiXhjF9NqfsvfVLRsqNXHDHZSLT1LV7J8TrphKkwi2uH19321UYzQ3JQ1tnZFqjc8m2cja3WgWr",
  "key24": "5QAyDD9RCtrvWdo1aCpGRqC6zHy1Ao4MYdjxEA3XoGoLsaCatpPi1cfqrUPkwLCDM5inqWhvy1MjXCbfvJa7v15J",
  "key25": "2ZohAeoevLczHbdjdSAjPMVyM4p93ahmK9AoGuFZcMAtGbn12bzyLZnETUgeR92afYedSgweTMN7oUqEZKbJ6qHA",
  "key26": "3E6DjvKT1yxFZRmGBdopsTjAXxMjai7Q5nMfBhr54Wcbrkh1zybRLr6No1Awx4rMq4WyXHJ3nQKcDnB5DRU26wp2",
  "key27": "4iX7mLWvA8zSD4Wm5scUBvw8BWbXu4qBzBUacQWM2bhC5w7P17WKGREsRvKPptABFK3sCiWktwDgqxS3zfY2bS77",
  "key28": "3nRRtqw4QSFZ9K8jR1GT9t6GtcAj1A5Ym9XdHHDYpckJAvXRQLJhQgVME2xfjEAMrxeAGAQa9VBfwFdKs66nkomv",
  "key29": "5t4y4uhoxUdzxLXfzbWg2A51YX9EiMi36NLzz6n6yBEcnWjKMV84SpwsWoZurkPnPxkuQMPxiQh5ejcN89dFoezM",
  "key30": "5TkeAMCq46CFkoLLN1ukqnfwMYhGMUpr3sfYGPg9PWAyz44PfySS9zhUUmNEG9y3e8GZ5d2yn97Kvz4PSCtmaubg",
  "key31": "5KQBhCRc4DtAXVrRzcAavKTj58wjJpENxfJ7fzhLVWKSV6DhYnBahzJht6dZrZReFe7q7Pu3gNxmJBknpvU4Nkv1",
  "key32": "2WHyE36x5avXjZonYCnz5wX7PmKCT1f3xtaxijSnnVnfVhcCNNEzPVXPiDJXmBWebjGLG68TjtWsvnnmqMoa7F54",
  "key33": "5mZBYEEaQZKXJ6pDF9sUAcCPyUbBeruEsekgRq1pg7ADdWfAbNTiu61GN1DY8tShaig7WdEBAByEt5ZzLyt33jLG",
  "key34": "7JiKgkdJ1umFFdWyg85heaGHZ1cx7mbgF6XCHBi2t3cBfTnNiSeyCYhrSEE7msEPp3k3tw1MjvLANL2Gw8c8CP4",
  "key35": "JGC2bXpnbdkJULbqJ4kBLcNmTDCj1GMA61rzHRLQnRKNFPe59pyfaEr85EeKoWj1h275pKahGAgP7Y8vF8YgViG",
  "key36": "4RrmNeydBwr77ZvgFnWcZdJSCscYrodKppVEv6LrDjzxQ9KYjCT1vHbMGfhqEV6JqpehwCZH53fCv9bckhDutbgU",
  "key37": "4bWS3Nkq6PrtZkFLZDssnV8GGjqCwNCYtcJBvr9mWTkfAfe4DFbYs6XHCVCGzj6NLxGwxwUBKvc1cVVjAarxx3KM",
  "key38": "CPbPEpCxjHALwspPeoPUDDR9DYMvs3WeKiy9Mj8C2PYyXq6JMnz1HnpjHscf6muFTjqQ2Jn8asMJc5vB5VdiEx5",
  "key39": "5W1ZWRghxJmNgUEJvQqhVCMohQNysM4SEM2NVHHHyujJKn2E2Lx7u3qA7F5QRJicyXXKXvQfdq76twWmmkVLHEqE",
  "key40": "2f2YF1N8Vveb4NuahVoc3gw7JnnKz7jof65VLz9zbuCdpacwGZ9XQUWX6hEVRCHs8ibs8wVgZRgXpvz9aawp1Mua",
  "key41": "3zc5ewcPWHmYm7veL13JL1QvgPzm3FPABw2C8G2Ueyo8cphhyvYDhvqUiDy2YbPECGxcQ2zNGqZLnWL6ortSWid9",
  "key42": "4o4QsX4xq3WnJv7CGRDoinPeiT8DEntMKK13jCysm7WFeiuRSThn5YhEvnmSWznB7CBipq8BzvZjxwtrdBLahtEm",
  "key43": "3ZW1Wxiwjo5mBYTkdkTZPvAJZgoXmb7YYGJX2YEZvT3be5uuUBR94ix2fUPBkYZ9h4ovXZfai9JuXS4WzC5Fkqw9",
  "key44": "fvqVny5pF5CNtryczp8WTPsAGtCzcNPbuSVfwxfurNzV4rAqj3Njsza8Q94XDpgqg1pYaTzUGDotucGpyqD2hv7",
  "key45": "2RF3GcBwNuATMQzFFp2kPvNgCEJ8bfvK6JVia7GzzCfhKvhfBeWkZCqTKGm8mLqPwoZSV946yYNYAUV59tzPCuzX",
  "key46": "2akK5MUXEmMewsuYPB9CVUZjDQkMkuQ8Rg5e8D9fDK5kmBc3BUKNS2e7b8WLDTU47y2DqW7DydRzmEHPXB1YWZJk"
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
