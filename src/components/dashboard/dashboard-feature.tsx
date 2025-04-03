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
    "3mHzW9dx55hfEQwGbe53N91TZ68ZbELBJJwXTf4Rwm6GvZUfZvByJUEWLtnvYAwqJxABgs4uFr8sb5vrhmKdaYon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66nmnt8uSzNrcnrSuCtPsoWEMqrAnCaq7fSGo5XJcnmbf1TjaFD4B9TRwsE2b2L1MW2cpHFF7cLjotkJZ8jqMuao",
  "key1": "2Ph9BL95oTM193t2xvX9VtCKnvJS9w71Vag1BgKWaY74dgB8i2T9FEc66kuDH277XdcXU1zcqbVsQNSgbBSdfzpN",
  "key2": "rN5NsM91XnVwZ2aZsAf1e2PV77ynbhVkvZ3UeCvA7eeojw6g1hPtbRJVBEnfLofkoyVdNgBAdrHSuGBFr4w8xaa",
  "key3": "2RxGZSah1jVnRLFgiDVxHnLoqeAHAd4mHHKfzyQV2zScyQjUnU6RAfcocSme78zAR91txGhgDEjm8NCmPxYTTJdt",
  "key4": "5B4pDRBnpfukXpphMqHtJc4zcA881XLhGiMH2ATJqKnv2NbCMd1hsnCrvFaHUDgg2tzgRLdPYG7vNNNpH2xUqPH5",
  "key5": "4uxmY9QVc1cZtmQDrTaq1aE4VHhhAhq3Sv6HEw5fwLMdwHNyKLErRUZNTbvekDLKs3BQZqcURLM2xqy8oh183syX",
  "key6": "44zngVE128KXS634BmUM6b4QabKMGHC11QJaPcQLvntqcgvF4p18gz9DfzsGVF5xgFX8r3JXBDC9tuc3jTjA3wVf",
  "key7": "zymjdzxUbZ7wCkNuV84yaD65r6JNBikr5VptaAa83oWkEqG2ytUwqMmAuk6ACnWHxTwap9s5VpqVyvAD8o7sp1r",
  "key8": "4sWVzLjY1boU6Kfo51TW5j1Kf8qwZghCvV53psWzGyvrN8MVEPWff92N4zbKLBwo1rrprdDGskDNpEb84YDG3WBP",
  "key9": "U27VscarvUGdFMwDAEbSC28Wkimfc2Wcff3TxNMQfzw1i4LCDqKGQ9gqC7qBCcKK4NEJ8JoqDG7VzYsut2mnQkp",
  "key10": "2XVLVrCZ3eYaBWzugYdp3ahQo69MhE74v5CampXyZEBVywm3pyVc2MJsTCQyNkrJNyjbiRiZ6yXCgFnp5RrgJaJx",
  "key11": "5Jb2RYD3YZgRq5JWY4Z4W7WKfCwTon3qmHpUjRaaJWcYPY2hDHMeujc24v46rWWc3RDwPX1q72Jx2nKutQCRFUeV",
  "key12": "NFkydQXZR8BvpeZDVzgTF9nMBnKFuCZvrinHW3y3ieaLDP12TmafdpERzPoUaZavf1E4PLJbEwUaKNVuypzxcpj",
  "key13": "36UFy5p2mKF713bkJ1rsVGt4m2aKN2vMmMjUNCyq7Gm1akqR3z9SGNkF19H8hcNxgbEHKmKAyV7EuUt4A4hJkJHL",
  "key14": "joTthHd5NZBVrdhK2BNJKJTn6txUmeNT546dSJBNVfkQF13bZGruKY55rTEqVkNaUifWeSaU8f6CcvUpMgKNiAj",
  "key15": "4FVoUasRzbBwatqkyix111Ch7XzZrxqydDALMRhsPbTstCZ19QNmmDRHrQ14fTfMZSqGqw3e8ZeJwpRTnQzxdyED",
  "key16": "31mK5YCaSDJ9dmBbSWQtmKDgEUfqxWZAwfWgq7DcrQa4odr8a1hCKHB4XR6ZZmVjSu8GxZW7RoChA8JatJNKdaLh",
  "key17": "5wYodHyPYvvkVTGuuhcGJCcNGmbQfpwzkPg7XBfuWEnPrKvjnmtP3PfHdmqW9MKpMV6rjdYW1nLi6bsFEEbfv56k",
  "key18": "4CXD3R2cZA5fzCpnpKCVhGUBsBtgxomrb7QD5yoQJ6THy5E7fuGuMdFCh2Z8rk2f8NWNhCwicephPWkeseh2fje",
  "key19": "2QkkQZtusytqaGChVnb7ccgBX7gSfamcTVrRi4auAGm4wV8nHKD8HUonwJgL7RrMgUzGsqvXockUncpMtKssdyhm",
  "key20": "3v5xuQwE2MTMKZX5kcuPzgzLqogi8sZeDDYxcqcYLcSfZzinAczhJcQ1CS8EGp4XodUaSAZBdgScFYAL6f5kRpcD",
  "key21": "vJs5rZrsxdeC8bC5RNdoKMr64qzRNpHW3kcgrFxARiNGmpippzoFenfDP4xZthz3jw4dNjGCeNRu4b54psf4JbJ",
  "key22": "4Vm9WXJZa5HEpLHG9tCqvhDhUzUouqKdf3HGHNjAKc5wKEgqavHpyuqzui5HRm4TQ6ECWGsxzfeEVVSyUNmXi9fg",
  "key23": "2qFxkPzrUPZPM1nbPdfsE8Ukh25jUDDBR22wZ3vAZJSMtvYFtcb7nzDw23PUHPHYvJ9KaafS6tceLaxdprfpJYg4",
  "key24": "2SazyWiryXEF17Mmw6Ps2KKpHgA2KZKPUEqycPzczKXXNJCUYtrnp9bhRhazDG4Ajg5MQQkrZL4YSmVNt3qaVe84",
  "key25": "3S6yBZiBauVxoiYBtnkbp3LKiukyJkxv7esPzUnSgg1MVmGdXaj9KGvLWhyXGkNyKJrCKkiQTF53aiVwT5hdwS3F",
  "key26": "2ZfuNmLrVo5NZsCenaNHX5Eve7CRm778acpihjJPGiq8zuk1MhF6UZbbpz4DpUnT2hQmQQGC4jQV1JEJyBJTiURj",
  "key27": "58afvqhRwqHrJM2wWCn4VVEYWTN1dgvpSg79ooxz65ZN97Tc5Ab3a1hdnH9RcUCYpiVBHrcfAABJGG4vLjfNoH7",
  "key28": "5iTLaQCTC2Ut87jrvByzB2NoKXmwWaEL6wyNK6B9AzQmwrTT5CcpoV6iQdN97CBoQL3Qz331nPim2rACBiuJVwi1",
  "key29": "5YiGtexy9fgghBKMuPsKNyj92VJzVwXfdbz6JYHPrXB6dFmaQqnz3vigVUx9gBtSjEHgQtWksBdu1qrLaHByxfvr",
  "key30": "3pDvoBVp3o9fcHdFgw6SX9X91T2NRhdSpk3nsNNq3w1n4rjgoUGTbeM8P73hmR1d5bTaj8UfZ4w2ZADUqs8SHeGR",
  "key31": "tv4eMQPXPZD4B6QguyXvyKUN4ctyH5xUnj6ZjspsEVPmuQv7RKudezm7PKM72VwYF2ZVaY21gnsiW1XPTgRrZpS",
  "key32": "CUeqZEau7GBKUiGBNn3AUfWy25bD16ahgqikW4dquhdk7y4PujU3STYn4hA8tkpLr1Bq17kyzZdmHLzQiK7RbK4",
  "key33": "4WVr2EKjBmXf8ZpjpD9NtjJskuo4Y67uySdphYFtJd6iSMon75a9EfKfapsSaehd8wtUvJgZe45tVVinqpPMZjmi"
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
