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
    "4vXMGbVtzwTMi67AVhomQ85c7MSNo4capb4Y17GJSmeSVzHj6JnYXzVzBHhRgfjdBoEDYi7TEDLfuCFfW5NBkBJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsRWSQrhUfx1EepU3xtyAzZJeiWikvPMNnDxUZarum9rypx4m6NnMAiq5pAWi7Z9Y8827XXtvipuoqpiCqmyh8B",
  "key1": "rD2cqzx4JEuFgY8bDQWpNUTCsbKSjDtTM3qAhkuKKu1sNVeLRWdon7tvUAbqDTT8MpRhKeToWqxAH3HvWVKxaZX",
  "key2": "5qjAFjXnrSvr1aoPjiHHPy1Ngzt2PA8F4aavT3QTcaZkfg56j2437dd9fLtaagvTxfWuBq3kcrBQaWTzfPwmYkeV",
  "key3": "McMmDZHeXpNRaox1VAVDA2b6HgXKCb6hgUKEDXHmZQWMwp8aYHLKPzLhPKT7F2gaN9tPAd6PYseQCfP7ScSy1ub",
  "key4": "2ddCDS6rWy2wSWsQNGBF8BmNJqp4ruXftzjfpD3vXvukT6p4RN41FeTTEJiLrxwt55TAyzApH61ndbhbrTUBJcq1",
  "key5": "2bjyuGX63Mpx87bRotkLYzvEcHqHPipgBGfUWdLLzbg5uoXDeueoXvqcG79n5G878cTv9BzJaJYb7JQrixZM9Skx",
  "key6": "5vGZLDJesqySPVapEK4U1RTWXVtdYLsQQpJDTbZ7WJRbVUuNnfFfewMnbX1oSoDBz6Pm3GNjaMgmAsXrJfJbVNAz",
  "key7": "46ZkiPd9LGqeTXSu7jmuk2o7AzZqQwpDHMzjAwV5LNNybhKLEH5WdddNijsXcKNeBbuCyyC3ejARREWkcx7dAenW",
  "key8": "2gwaxo7RRndhHv2w25bgsR4jtHEiLifGeh8WnUv7TUCDEVrEruc36SrAcngmToe9FkChoD6ngfF7c7ZtF4b79sJP",
  "key9": "2et8dUeqwpy13aRqR9jzHBhpxmyXYvdnDhtFmgqM9ZmGJrAxSQxpWx4vgzRr7mGdkXB5vBsUmE7wWtv6Ua3kNSeL",
  "key10": "4Rh246TxtJ5LUFDtGkoYUvT9nXjwjq9Y9qRXg53Unf9L6f9zZwXmhHa1GV8UxvqBKADFkAnmiFUhHghHGSr8zetr",
  "key11": "4dvorrmjNY8iP2evDHAcsY8XaPVU7u3tcVBifkDED31WRuM5Bb7rXAujCfQfHxNRYPDtna7kJXYWwvrxcfssRDiC",
  "key12": "4gNqtn2Nb7JY9Sd1K2q8u52Y2gLsJE23e9hDJXmUKyfitGrC7oAXyJSoBQ2RDkJKVtdmpuU7kff55toDhfgTmHRD",
  "key13": "4AhxQY2xpCfFimJ8Jbp8kSRUnbQZsWrm2mfzFsQjPQ1zo2jsLZbEyCTKaWahaAY6pVR7niWvLWAEJUiAmSVbkZPB",
  "key14": "2uTmBCuqFBrupjhcAodrBKwZJiiPF5GH6nKVV53gfB3i2Lq3B9pE3JwtK39AoUB6jqXK5K7MbnFnLyEofWaGT7Tv",
  "key15": "2pZN4qnKTpZADz8ZVFzvPwK5iVXqYEndT5CQGT8n6tsfWfpCVLvQEbwTY3q2nPojfHyV1FGoyFBzNbjcE3a8dTee",
  "key16": "h6YpGczJAYRL4NgUUSA479HgQCp4LqjV3StGoZLe3Em9bSAHrDsxfkqNU76v6KUfFJvfXmnW5tepVUQePaik1mj",
  "key17": "4nGKEhYoBdvhrkxfu5duTsbEz1Gk7g1DETRpZ8BeQyu6gk1TWpr8r4wqDkLcLnBTqAKVKbnGd6NcntWx3hvukXrY",
  "key18": "34bKArhUUk3F3298629ydgvfZhX9svtXgXjjmdiF7Y3PsVERq5KZFVPuwjEXba3EXz7TjvpxKMLRb1Gw1N5ZYWhh",
  "key19": "2zbX4uPyTsgvtaWyxR8fW6whqvCDCuze9GV8fqUM68TzRNnqYz6XRAF3Uyo51PDjBaxKfV4EKtfE2C9Qb4CB6eca",
  "key20": "4nNdWbyjAc9sDqZK93H4iiMTzbHC52x7EQxW7QADpaxo9Cebb4neTyjwGA1thWSJ33eE7tmspYZHwwqaPzkwJ1rJ",
  "key21": "Y2ZvMVNhvM62DnTkH4p3yNaxcsPj2k945K2xfJYttyLTkFY8jJbahvo75YCE9GaAJTpjupuW9ho6CiZcGpfvoV4",
  "key22": "nz1hwEovKNhoPtwGCCL9Knbgas3WVUobL4dL9whs3evbiGe3oYzRowiEqVjmhTfQVk2TMiaEW8AFEZ92JEEYnju",
  "key23": "U76s146TPb2r29S1U4ni76MQYScpqqJe8QHE5WsUtUHToEnW1UWFciXTitRG2ko4eJfLck69fLzfbLXFchjHaVB",
  "key24": "4q9oreEQURhvuJPERyCkiqDJvo7BwW6Y6tm9EepGTiRCcnoVBbdipCSNFqUMordoJmP4FBz6vRdhaWB26nvC1bV5",
  "key25": "TwJ2iyGD9HSe5tb2nTsuXc2tfAqrQ3MjN5c7rK7TEGLm15uKiG63NTfuCyFec2KmXXknGWDv33o8dG62ue4MRc8",
  "key26": "43tYmz2hpGWYaA6KxDoP5HCL8U8AbdR1PtL6J2BmbPTwpwhAoG2EySPWNBdnk7MHhnj5bCcuoZMCUaSvqiZeRXzs",
  "key27": "cTLS6jFkhyw4cX4z96zn3GNAY9QAnVZKr4zx4Hu27Bgf99eAHnJd1HqegqdUpUeoVVebxqKEXzDWkqXfg9BFbmy",
  "key28": "4ALwDSEybSaut1XDpRJsE7mAggtCJqBvbEXvmmqYXc94ZzW1R7pADcgqv2SEXj7N9Q6eFLySLUxrvGr8Z5X4FDhS",
  "key29": "3PKR6FNPYqSYDrvq8dMKSBYEwVZQGPbfL61wXog3WA3UH328rsaaMkLBgTbTiGqCazP5ErL6QzAVFLh5Ah8XwRgn",
  "key30": "3tnEbQ5NCHftE4VVX6meS5H8J65y5YDC3dbGJM4vaeghv6GW2E1CeE4TdG2aZhqzUg8SaXr1uhbJU2vSRnT8m4oi",
  "key31": "5cn2mNaFWuQLSCLYyx3jnKEtxT9FfoiTpVC5wJc4z5LqFJYiNMV8UHUDrJj5rfZVoofQxt9Ni3Fww7ZeaiesPPG6",
  "key32": "UcECxxVNZA3aPsTXRH3uijg3mXr2YvEZSgAsEA5qAPFVtUc1d7oy6hdMUg4siGV2vq3enJQBzUP69uijhpAbJLm",
  "key33": "4k6nuKSHX64itR9EvvwCH3Cxt4MTXr1my3aHJmbxkt2YwKJHCBMSwUpxw53KzJgZigrNA4f2b49NjdCSVy5o142",
  "key34": "4VBWaNDjAXUANVyJTHb8FofZjA5yXhhxPTmjS7Sb2Pg7bYJ7YDLX2dJ3JBd6auQ9GYrytEjE3HwSWuAYiz2r1fxy",
  "key35": "a7wLUr8ajBfdGAXrXyG5wJFFfvYduFrSKgEe7ta3bEgRgPZQuEFPW6LzcF6KatAicRbHr9nphxPya4khK1o8r6H",
  "key36": "2HHsG523xqJHA9hsf95nvg8nMrBcDxGXqmXhP7s1hmKgb8bRriMRmhoPCPaMyZnWj2MRUJsuQPcN5jvCX4oACjEh",
  "key37": "2reVgTiKGtP5Y2JFouJXocFQ8nNye4bNTvzPkvyiphGurr84QWsmEa4Dq3PRB2T7GM7iXWg43PW77t7EUF8E8xhU",
  "key38": "3fiKcevyPFzhtBhr6oDHSfatnedKhcaMmSL54XNSmbn6EkqxvVGiG4E4DeYFDACxsBUmgq8Nd8p1fAS5ZUkuH2D6",
  "key39": "4wbcxviS572iHpw1dC9EkKM9c2Hjo4j5Gpjrqv1fUvFCgqWexbqmmWzjwHgGc2xWEsJSEB3yHemMw87WQz9LZdCL",
  "key40": "5bbTqkseGNu7aXN74bync5FBmUCQgye9trnnioCRhoLB1Bgc5Y1QoYLYhUSCuUCKt4As87wYsj2bte6RC1qHqvfr"
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
