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
    "67DHn24Bz3LBzXLvPkxxfyPnCeaJYqThivGFMUs2us8NWhST3jv47TCNzXSbaTm2B3Pd2sx14px6Ah9KciJbE3gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEJy3WWtcgsj2nGuSBwsX488keg9Un91iZrXPwzDpk5PdEBGBRrSX5pj6sKKXb3N6dHf4RsEytBwNupo1THAFbY",
  "key1": "3AaiCvCAP9EThm41c4qSbQDN2JnQNWzFMTP9hSLhoqCYP19UDPaE9XosrT34SNqLEFbnzzcrEXDh2hFJEUr7Dg9j",
  "key2": "39WUu3CRVfAa3MM1DyeJgTSJJR43pXSVczjLmhwbhE3NV14D2kzXBkvsdn1ZfWvEHPq1WZQ3DGrar6r8dqgP84c8",
  "key3": "4yEm4hF2FQVNhBGEbJjV3ZHocqV3pzGKWu3XLKHBaLBAm32pDXvVpgM3Nu1Do9rYKPPq43euAZ2ZobiMRKo5aogB",
  "key4": "4wva5pzfSYx12tHNHFneVr5NxhfFp4ZWdafv6coY1V4GdjwYxmzS1UisgNU1ycajvJewNE1YJJBkaTkM1xpvgMNB",
  "key5": "5iLQ3Ri1aLrxEL6Vt4G8ZxU4kjQHPjyNeoK2adFjAuYQrjaFVJreX9xMmpLx1BYRrkDLhMEvVMpJiyAH7mX9pzWs",
  "key6": "2iet9cWnK85BpTpGMSG2RAopT2Y82VyCTGggZvMJo5RXCpr38iwHJmeppeBoQfppgVRG5k3E9W4h3dhhJAteyq5H",
  "key7": "4LYS8usFYt1nXSpiTL1gjTZw6rYWdHazKQj2z6pHkGz8ZY5gWaYL9PCbN9hH21WFjhBzWcKTvMZf2VmYpazvJj6c",
  "key8": "aY2rZmwdhL9QJUh45ZPzMehB1dnrCXaA8JDfGPgxTgrSQdsAup8naWxjr82s69TEjjjvB5BFbs5vpodtAZeM9v9",
  "key9": "3jTzBU1f6aq5hQsEnk6bWdG4gL4eXt6H7PTdVyRqMgymziVdHJsqve9j3XqSGTi6YhwiyicdBHtqj3YyF5FdZxZC",
  "key10": "2YmWeaUyovasEM5RqkNNKqC9XNcQTPhdaFuhY6i7iyRrxx3YZKt1xnKDPS2uUdM93VT8FuyVzcNGhc6Uo6q6o57K",
  "key11": "2M95tABCN88xzPLBjDYSbCSTwWpR5RSvLYPNPdL3WHcgRMDPULFUhTHJwtJEeozZXjXJC4HGPxjMN9j2nQZ6sRc8",
  "key12": "XM6w6t72pqK9nri3AMZvJDGKFZVN9BBh9zXEp7YW2pNWddN3YU7hRAVit5MwzGdF9fszuZy3RxeMcZ2E88ku9Sj",
  "key13": "5ZMbzgAn9x8pLDocsMwzn6ZKP3gGNigfCE9T31xi2HTuVSUZ1wNSQWLWWN16kihmHvb9G8voQ7hCYFrqUHNvhHnM",
  "key14": "4riYYDixzjbLUTZcxmfdTAKMoe2aTGuoZGB875sXBp5PgSVkiBHTAQMuKHALH3ebqCDt6VUPx1fPYKqD7Gn1dGbZ",
  "key15": "53KHx8HxnMGS4euXTHVc7C9vrrwYUk47Wvt7xFZEnMnNbxHAYH3zEovRRtkwu5NJtvFStU8YZQyKfNBEQ6AKkBHn",
  "key16": "3aFNEQEvZa2B48jLhNVtmZf8oXRRn98ef1UhDq35PQ1fBG7ujb1hpjJX2NcRhjLQvGYMsGE35PCuC3aCTTpujQ85",
  "key17": "4KdLBz3yKL3vxJC4MmoSK8ttYMj9vvL7ucmSMtdU2HpK2DvASwjmYg2zwZ6pc2NRb7demA3xJ1qV9ZVLiQdrpQZS",
  "key18": "5QkPmNCVGKW1jMqpAZGtKgiAMxE6NrtFkTWhKiEdRCfFixa8u4uUp4ntMvXaz4MQPVpw5dU1CCcDEnjAtD6X2GXX",
  "key19": "2jt54PJHM6DASHdEyv5sdHHmKT5mCvqb47qTNL2PY1bS9hLvb6ZGREUvU8XkVHKr6PmoXLsrrC3j1JL5XWLvZP4Y",
  "key20": "2TNj9G8xY54MZqfY1bnSTb6K9iL8t7GoNcG4KaeGcCu1Z7A1h4gSNhDycYot4eriaxHLWZ85CgY9MuZM58WCMi2T",
  "key21": "2jXPdjEUdZQ49CGZndn1ipFDcXkrF2Y68JhbJ9WEGAMBsM3mebnFVAwH3RZhnxp37H9p5qTCQexiyyhnBXoYtKFs",
  "key22": "4uCH4ui1nHrkMBd3RAp5tDSokRLA6AhcX4TdSYqfiZ6ziyewRbWfrWjQXpnpHjz3zLnj6tzaBKXhEQFxJJ87jhLs",
  "key23": "2FNXkxeiZU1gmJF4KCQbm72VEF28NFQjnGWQGauZqWmKUbXQe1UwR2f5ESmoSZKLzgMjt1xem2eWshhcFwoWEcao",
  "key24": "3Vrw78MwCjTYUcktjGjoBUQhCVEDsw7eoCcEhznfWPaqo5fmZh7LUNJ1sYYKoGXSqFmTow2nZJssDkSDBL2qBS3d",
  "key25": "4Q7tWZMZ5okmSfLmi4BaCRzdAChapmqFHarQMR3PKm9NbfRVykubShpZzMdYAxZW2EmXu4WuLdFqr83xgbXtAdzr",
  "key26": "2zgePzRb2gKu5CJza9pd7Ewf1vVaigscbTYQRiv5yqTvcngahDxwQ3caMiVHaemMLEitapspd7BxxczkCm85y9kV",
  "key27": "4vD3a4rdmHdRsVwPaRsbhpgPReTQqpaXTjq5nnkaJsSUwaW5UXidkhZZRUnSECG7ND2du3ybZYDJrSQhuZLmPouM",
  "key28": "5sD5NaXbwKMkz8YgYKgX1tUSir2jSDAT18jKW1nM3h3wGV1dUNRKq27CLFDpdW4fpb6qmFhfhh2qtnUj8ZfSEP9y",
  "key29": "5dEzFBBA6qfAjD4nNLBSx4XCK4NYUcEVcRMucpFRYzo8VtJpXFHnzkUfMidvBksWMcQfheeRHYKXFVTTMewvKsYm",
  "key30": "4nFejrThhhZ7CJQMik7PpyqwonXVoSrVJy6riwif29n5q5f5F3zvVpmbhP8GtoGBHmbfeSxAxia9SniyBGd7MMYF",
  "key31": "2HHz6rLvj7Q9jQCNXC4VkBEag3o6a4ALFjSG34tgiK7cT3f1rAQJx4qKzrwUEo6oLr44jELKKGdbVGKPQPx1NTFr",
  "key32": "2C8GDTiSnH5LQ2Ao7sqnoYbFuFyhBZ6t9iyn3NDH48PKq99RvBkRgXzfh9RoDxX33rFqG8DYXVNzCgPrgQshPfUn",
  "key33": "3GDSE3qgaHoFcGCpxeGsKfRxiv6N7XLtWHXAiabjQv56r3ywTXCnjxi6QoQCmpWbfSNFLSgDLZAZKtFSjzAUx3u9",
  "key34": "2u67vvgpf9VdjY2ra1iTEKBj6aHziA2gsKsWEk5FTinuJ5k7gR9fTw73sLGZA5rJ72riWN9zHxkikmLdmPymPWuF",
  "key35": "VKugvH1gm8fz3hv23G287cCQbjRbDS46oZwPmsUQFCTGiMzZeQLkEAvRjxwzLYUvfLR4GqMchCd4ppC9kpcid7b",
  "key36": "33tAG8MoLZxLUXqgfZfdDzDSB9aBtScayVyM9JYNcwnMvPZbNesm7axfMP2TF2zNQxQrGkxJYBnKgL2WcwEr1cZZ",
  "key37": "DeBwS1JnGccToE1HVGgaPwj51t87ztt6SpizD8pfHxUaaaCH9V51ppujb1cnBbfRoJc2YRbtDacbjfnq4D8cLiy",
  "key38": "3Z4CQA8irvTsaJ5WDr8nuEjUgbvCcemDZWCQ1RetLY4vCym2Y57WytxHpXjhMRp8U2NNnN2qfraXvoYyb91nN8S1",
  "key39": "hkHJBvEQpCe9Cb1EpHQt8D5y6TyYgS2beesLwg5yKqS748EKA8WL9sm3yFg6oTLk1DcXq5eToMFaxiJawD3rXxf"
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
