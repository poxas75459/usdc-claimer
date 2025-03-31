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
    "S9qVPCnSx9yZG2iE3mBtQJTQztCRsQ4KkDKBQqGnq2NSe53HbTazDzuBAxsyRyGFcTjVhvXpDT5n3Z4GryfnyEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3apXJJD3XpgrrfrnK96zF9z5cqMfbv2wyLvVeWQ6w96XmWSJ69S9cPjGAthrcVSWtKKt5dB4bCHVr5unTc5zxn",
  "key1": "2EnHpvNY3ZWkUEN6Q9D142SEXtcezm6JYUWe2zc2McubAj2cwY66KXpCQZaZuCdhqxfwtFDYxnamyreWup8Pp9Cq",
  "key2": "5XSAZ5G6CCXXi3DAvccPPtPXzQwT2q1deLQLSB5dPoSEiAs8CbPdBjYfhW33Gx4xUdHXMaXX64F1t7AvNYQuj6AR",
  "key3": "Qh5pmpyy7vKhskoxN4FZm4Xr6bnRvxq1NBJCbnMsCTegruDL2yzzuowbg5FkfpUGBdkypg6Fax6XTaPbkwNv9e7",
  "key4": "LeYZhAhw1PGZKxzkHwN1RHuWAij2dSAbHgCAzeUapbgqhPLbLfoJf7kP5YkcxoemPQuJjk8PtNaQgCau3Uy1PBB",
  "key5": "YW4DpuptakiSkV9MVmLMpdgtk6HdxKbkKopRhtSeYNLzEyKfEJXdnZsFzqfRP8ABvX8Hpx54VbkDuQoDW6fkhFK",
  "key6": "4jUTevW8dWDprND5W28y8cANbZiJWnj7s1forGuXXWZ4F6hBAfYwrwtJWneAyoheFzMktGJqiUCg9ub9ewozexxd",
  "key7": "4txhDsa9xAh9dXKhBjF87fe8KNinFvxYkT7DqqhemiJcJWmmRotUdhBs81k9cbSrVbxufQNzLpihxx3ZbafGjuvo",
  "key8": "iPtSgmf2o1hKvpsLFeh8HkfCa3wLdRDPEuskNracuX6UUc4LTe2Ux1ETcvPfd2kbpxtiGatwuumwohHrkR1BZP8",
  "key9": "kY4Cavwd8y3Mh5zxBY4hQkvTvzTX4PQUT8sBAGy3JKVkRb1AUohYpq11wQyHveLshX4rGBZJVaFhLU45PG9Awef",
  "key10": "5cVWD6WYVbrmCBMyENRsmjybm3YWULX1pde7Q1ZxjDC5wGRL3uugUDuKaRM8fTfNdR9AocjWDpJc4R9khoKoHQu3",
  "key11": "57Yz6aonEGXe7nutepi7qBg9feNzBJc67Qg7SqjFU77artwWMSarbZDb5t7Jf7tp8yL6cPDi6Y1CqFaHW857Nt4a",
  "key12": "47Tgr2ssphCj6jcSuFMhUj6tE8wXg1sqoS3X2n19cRRR3ab583Lww97LACgKcmnwfjncYR3fX14vQYny6wtEuNPe",
  "key13": "3oRxer63kadxY5oxCZDD1HYHnFsKf9tp3HDuGniUhb5k3TV5cPJ5uVaVgxx2vcvWB3ezLHuwqM2vwa9BgECSffgH",
  "key14": "2r5xX77jYX7dqZGDe2vFqbKYKDn3DBgm3A7muezk73gAjDSGFTeYHhWhwydqzYa6gMv48RAY5BmkrfPn44bpus5u",
  "key15": "X8cWEYHM9NZ2DMhc8sJMLkwh3kX8eVtSCEtPifg2ZVvvjS74KEU3oE7n5Q79tm6ShfPsc7DuJW94o8i49fYKqFZ",
  "key16": "4pR3CuKe2qY9oV2imeFojvhDNXvGiPRnLaA5Z3x5i4yQrnHQY8ZbVK9pDFDEEJU7MJavXThrDDQjDhjxmHHVjmfm",
  "key17": "5NbYikipaLBWurseD3XoHimznu2vVXv8uasChtNAaFHPzdxgUFtGddnr9cDSahnTpXcJGU29krkmDRDTkm3yiCna",
  "key18": "3qih8PPDp3ssBdsEktVhDYNExJ4aD3JfkpRbcXSd2uwMSonX6m1aTTm1MUq2GJHFwYRDKyAcV5mvU9X6LQPzx5AL",
  "key19": "uEAsv8bJ35HbYZBkVfwft9mYDyxiZA8ACVrCCZEpnFZSMR8884GQQviAwn5KRrDMwESBuhgDZYMotRcPhmVA3Vs",
  "key20": "2WuJW9XdM1JbkRwT5DRWnaczAeFpVgQD4ESLTHCzBsBPHuzMKK93J5KQDJ5nQ2udty2EmB7MkUjDGzH6R9KsGWz4",
  "key21": "4t571m7GxuYJxjpiTf8Z6dCCvNX8c1dA7B9FxoGWZbevwuRXHsmC6Fwhwa3ngogdZR8Ns6nzxnXubKYYkjeqNt9h",
  "key22": "5i7KKUuYLwkBdCabK53iK9g6cKMrXXzfdMxJVhcG2TDK3M4eCc9BvwcVLp9n1i1WL2JzukiT18tqiqmhvsotiyRu",
  "key23": "4Laxxn84DKivTAZwwNEJhemzJJKth5sPza2GYYyjaUdytAtorg6stixA6xP1zxi7fy2pESrrMdoAsVakjgKNT6oY",
  "key24": "2DLghfUa49gWZBANXrZErmo5tAemrcW6ok4XYdo94uThHwK6ao1vbxVjjV4JXAdFdYaEed3WWCD8zQHjDCMgbcWs",
  "key25": "4Ldy8aSubBDQ69ikmRbCaySopqx7xdbsGau8xNy2mruNYG8V3c6qa8P7xTmQaM5LnVKnzibUFx83uPjmxieFm7gv",
  "key26": "2UJU8njMs6kuUMmbKisvrLQpe3GNFLsG4NYSUsTu46KtCQzTP9Xg9CY5F6hcdAXLw8Gt85emQSjgnmeBTuB48wKx",
  "key27": "4YuaSTbvRDZeKsBaVfVj42hi6EG83D28c7SsRWMFg4G6GZnNcCYcDjLMuik4mayCsxMgwsUMbBPHVC9sPwjHj1fZ",
  "key28": "2Zy7LWbefkLAd8mAHuYMcY1o8dKgHRHJ1yLZDgjoDsNRAZ5acs4KCVfsWh7d7AHWrQowsRKTgyqbdkUigArFpwV6",
  "key29": "3vmUNcSnJL46TmjE3iPaom8nfwkgWpEb9wvNu8CBBGJW4FvixASzBVeE9gPsPoFnHiJLYRV8Pjv7a27paXUF4UC7",
  "key30": "4mqEmh36HXpB8BPZAgJXCW35q7LSJhB2KpvYTkbeDWa5zdcGram7sh2kanqT6V279KH4LLmvF6gLaHKhhACnZ4k6",
  "key31": "2qkLVqhJoTKZXvP6pEVJkUfUJuL2WJ7BaUQjMtmm2tRBvSDG6f2KrG1TpgzLmipnrXq8fbhvdmtFnGAwVNLyZXZt"
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
