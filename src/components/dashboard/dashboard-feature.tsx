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
    "65tRk49YBFdJQLWgvfHt88AhtNmfYrxE1FLA6yL4KWrgSV9ZX1TbahfeTMDjvS5FfCqbZti7taEDT9LQ6z2pHLxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzWYpnTgVFioDQgFaCcT98xPfJQ65Lez2293ATC2uZwWBcrjwXjt14WQya2DUq9uwm4vgw2HKRhZ88H9tbq7Xof",
  "key1": "3G4Qx3e769oqr8MG7QTv2sSMWUftLpWaGuFggyrCjuMU92YLQfMSwK7ghouwbaRBCuYkjnvFSJbRi6Y1isxS1TGW",
  "key2": "3rcsotPig4Gz7yibZhmA8bBaSezAvA1WTB3VfTag3TLMTtuee18jamxotPSpoQtt36Xcxze7enowV6HkpSotux5w",
  "key3": "2bNmogU4rV1hqUVwcFLH5aGThDVa32QAw2XpxNNb2EYDZhhhCzCqdNzU3cs6CsaeGC8A85nijgjzEj6Q1CNnnK72",
  "key4": "3pN9HMPweJKtUAcfztyz39vtsR15a5AHd81sAp8yKZLbfoMiEqhxHRVaUX3Xsw5mX1RP8cobV9ykBJMNaaiKixnH",
  "key5": "2EzJrPzkMR7vJiSmvSsPzRK1MC35med2eSCfdLXbDgejLV7n69V4SrB3Sw7ZhrJ5m1pXbNAxJR2FEncfSdzeyExd",
  "key6": "3BaRffj21qUSgj9KrgCw7N938boMRGDCNzxiZmFFmyYyv4hCE3m2cQivSu1b1m3XChUAoCbL25zQNRxZH6u9xrpi",
  "key7": "7zjAow4ZRCT9sWzcoMAh5qCH9DvvTswoNoAz21HgzgTa13KiuLd71ShxzcYssR9yZLVaWkK2UzSTsrx38QbWGe3",
  "key8": "3z2qaWS9q7Bq7Nf9bDm3nxFvTQaNjjmd2pr7YPqL6ujBgLUMvvuWM6Ayhfyc2aom9sm54LicyY9mk9facYYwK4zA",
  "key9": "65AVuT7GqnVouAcEX7u7i1gdPtb68afQ4FAgqKwE33GFrqtiG2pAGBhkNASGXJy8A1oyzMkrxa1zb6v3U1EF2LTu",
  "key10": "4n48awCk5yhkdwkAgk8y3bSxYsGW98GB3ReSdnQdwXQYK7hCSug6ihHdoVS5AhCcaxBMxXNwFGmjh2Hki6XE2JGU",
  "key11": "2QomZtRDKudfKSDDtWXeeGy6Wi5fPkY2f8nhEZKDfXecgPoStzQbeQWYJVt3L3oMSkhbi5mi5o9X5kqZSdfsu5h3",
  "key12": "4V1SJgwGj6v89oVvqx3yEbxZTsRtyn25QnPKECCt9mgYCBoq42xw4NNJv3RCAcjG9Edq11CNgyp7KVXYfGh8T58r",
  "key13": "SHZA5ffmwptRhg75gh7PQJ7Y9FChQvLAFcDP2PB5HYoBxRtgFo8Lz4syJYsUpFvhJ81bbWMkFqzXpNoEdntgyBN",
  "key14": "3KN7MWrYNXPU3V4GakWzW3YRKLMPTYjY9V25N97UYB96vAU4X5wctnUDtJPv5WHoe6gJnxZhsQKT8HG2VgVg6HeA",
  "key15": "2J189ck3ocGRrRQPKeCbBRy8jmSmdSv3WmGZcBLQxoNrPKUS83xJrR95uqd9EWMsCjD3MBHNyVXmTYoLBvsNkNtM",
  "key16": "HybXWcoAEEo2HBX8CEoRQXriD5oz675fdipgXegVESLQa4GC94jK6iN4qKe1j8paQDs9w1Co9QErYWrpopeSTFp",
  "key17": "b5iCjkP4KWKonCmYMELe2PnY537zYvGaXrGnpEv2YGwyo6TA5FK4jiJjRA2fCKPyei9V2V21x5AJJHqPdsvNVvx",
  "key18": "5BXUWYyU9rSCSUayoBqYEEHUbgmejegjebaSbLdo9vRjVkM3D676LwZhxd4gJVUPETtV1F9E98pm595A8mYCo5Pe",
  "key19": "WtazjnhJdaac7is1upU8hSvMD6RAqVhFPRzC579TUh2fUSkJQDNK7MhK1bFfCKiZEeWnd9E2qLRMC5PLC5uKeHp",
  "key20": "2xuKZX83VazdcpFSVCmr6osv4BwGASC6RxckoLZMLyv72vDxdQPYcuAbWmJ8fFk7m6Le8W3TWq2H6po63drKwMQg",
  "key21": "iFsq9xp1YsfJvUofQUjjcbpWyW6NrP8RNtwDztT1gnMhA7DH1iWe2v7fnNrnPkttAxwCxD5SiBTTReNSBFmXfbk",
  "key22": "3BMBVdDAjvv6VHhkavKgxnSbBUBbqA3pMBUgVfHknC4ciWGfRajmwBTezwUbiYTNdxhYBwCGT8CgYCVAiGfTwQvR",
  "key23": "QK3gYeGbFGw3m7z1RJMhH6mWt4dCgZwH8j9bhi5CcBRrkhrbY84rTbPRFeQnGm6Ly5GdXG2rZnsTGbPzzWRQufs",
  "key24": "4SVmMBDLi7HWUoQBoKv6b8Yu8qdnvwZfPEDbMSnAWEYf4ENRv76yFb2ZAgwfcCiv4psQdpToHTVQeWZpdSYBDUKv",
  "key25": "5PSct13Mt2h7t4McyN7rCEgADiXoYH2kZcsm4CmBT2g3SWV5JKPWrkGQwfi3fygDhsmd9nmSKU92cX6nqubXQea8"
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
