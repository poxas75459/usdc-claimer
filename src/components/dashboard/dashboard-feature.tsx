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
    "37KWNe2h3HRirzVvg4dLQQu24yN4h5vhSYZTJ1Q9jTZbvmhL167GYnG5nHNe99AqGKDZHRBm6MbLWxdH13vkD1K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkmyN9dk9CJTRHLDQmK4AshDRhV4YWXKvqfLeS3ucD6k4oK4oEEX7vMtB2g1EGihY3piZfxEUwV42DwLUnhGm38",
  "key1": "2mN7hShWH4p8V3TqfFUDvLZGxdmLz7eWW34Jm9szghYutC8azzCbxuNTTDBLZtzRFQUxR9fUdqKyTAT1KXz7sqiD",
  "key2": "5ksRgYn3Fbx5dgXe5YCuKhmsT7qyzcrN7Whv91rey4WGMEBwSojW4yvM5LHSVwHemRFPvhX7NRfBmu66rrvVAbzb",
  "key3": "2mNeAYUs6MeQZ5nTsiUxRsGz12dME6h6XXzCGFcbKmjWdVsTCtmZkcY6n3udznf78hKZfvXaXGSBUAo3pTgc8V5v",
  "key4": "65NeL35AgLtWGVj4xbTdAV656umRsae2Zvbx8NfDYjmjR8VMiAFWXVmiBAn6KPVVEesGigBq4Cf4HsvdXDQtffWK",
  "key5": "5yai8Bx4NS7ZKSBvbLbBMpqYFtVKyLPiY4JNZuvwHYdNYxTMeuZYqAz6mhDJfPZ2MDHH9kCbRFYbWnGexyaRj1pU",
  "key6": "4xBmFh532gxY6nNuFJNpEUFBbk5sVyfCAEoMRtGCtTYBXs2Vk5wXwHDKo9oTzbSyifdd6ug8oAQ7F7GbX1TX7rKg",
  "key7": "3yKHRnJZCZqPu39PNwPJ5wMNZfMXWRid15rnMLRXN3i1EsgnaDAQvgJWyed7z588S2v8o7YWNaJxFRArdGcXNJSy",
  "key8": "5x3Gj1GqJ1wYZh5nrepXuj9Kbvu9hK1RRmqvKe6nns8fdBcDatp5ayy8c6it5q69i3koqVhTp628KMoTzSspr3gx",
  "key9": "2BLDrjQgPx6zjBTFhtEHk8GNxhcsmzNbNEWzaeYWW7Bpq9f47YmdmjZJmXHWju5hj4dKyE9hNCdGSXpT9QHxKaB2",
  "key10": "QkQhnA9A1MfCMKbxfiXQuEqZTeB88bqwxP7oaMVztVADUEHsVuEtnddggc6FtZMJgXRSj7NLtLzCrAqXtcpyFQx",
  "key11": "3mb2NfLVXvrM2w1aiW1maMV9hq8egnYwcnmUdstKoykzbKanJtC8MKAXAcCJ36roKFMtrTAaYR9QoMvkpX3mwayg",
  "key12": "3jvUrgFYkDfAyeUAFM6DVSKzbJADBvXYTCP4hCbyVDUjDZ2nRobAwuePwHxUKJL6hvzhbeJiZCXySXgUQ1JEEqK1",
  "key13": "2ercNuV5Aub2NLf6FtganDaDpRYzifdE8QkxW8zFrM5SSYiQ1qRjSKz14vv7HVLRg6YA9aPzJ5NNR1voXyZvnpux",
  "key14": "3GJafFWpL1k9rgYkGKC3UUTXTZG4xXqAqEBYcWk8PQiUYNWRznKrHWdaohJptWSR6A36JwD74JfEzq1zddkDu8zu",
  "key15": "355c3GFTLdQsbBzypc3KkSGabBvTD91zCwAPjyyxAaDQxh12DbosBYhYAA7z9nwc1LeQFEznXrwWR1VGzTg6joZr",
  "key16": "3yiEiyt97bKfLRGrWdVQngS7Kbq946wDwKWhxubCBccFng7atUpBXxNAM4AepQtvWqrpxgq3HUw4yE7tx9HZkC8A",
  "key17": "4BRSDiD4S8dE98UY57pzmFCuz69ve1UXk1eYDp7Eq2DJSMCyqSbz4u3bH9MGM3bvBosC7YmZXoWWevrTPS5ErvYS",
  "key18": "3AQu5XkSEVL6bKfCm8JzwEYVj4c8yycThhJZPUdFdq3ox3oq4w96btG9XDm4xhbihLtEa4Fo2WUm5VZ5CpxomUcU",
  "key19": "38bPSz48riEoNfYgiQ9eR57jiyfn8qf9ZcJYaTQyisQ1GQrC3b9bUQ7fpRCi4meaxrRXUp5GLqhY7CcFsQGVFXnh",
  "key20": "2WJ4GRgjU7UxHnPASBKa1AAPmCdYxCu2eyxAt1N8W94jr7xjbeVtszUN5soNaXWdnfJ4KndsG2MWk3E3yyKYg99q",
  "key21": "49ppxeZNbPuq7rHJZM3BLhrtLPBbboydH298rK3fQBQyEsrD2XebG1mXwzy9ChxREfepzZwRxxFyCastpDZSU7ZP",
  "key22": "3R3Pp1kxYBHrkpfn8maHJWGogB5oKKoaand3BQhRkQqvhPwUowS121rAoGSNJTSHDDuCQKHa14Upf2QnWDJ8q4B6",
  "key23": "5eidGvTj2PjuWGXAhDAdn5eVLgDdPyuFKZYa27vWVTTaao3MPoEUSJnMdCtnThnztZRuRBijxL82jNEeRC5D9jaH",
  "key24": "5faRWSQujvvW8qA66fM19bFG5J7u92Yw5nuTBRHh6vo6Qe3yAJDYukpVHYUzbDyCzZSXNxMagM4SMyYFwDMcxHK6",
  "key25": "375oqpbKFxznDpgExBhNrXm9KsNNJMyBcoXjdixfuua8kUhuSHgBPKM9AhDZPLdk2in3SBnYYT1RJYNEVujE41SM",
  "key26": "3xRCVxwNRFpyzZmhKcLcy6dHZiAdxj4sgKrCi7NE3H1fWBg1Uh293Wxaj5fskomPZWzkeL54ET22MoMx6Xbyyea",
  "key27": "3casV9ugE9q8LzNwGb99uvaGRbVqg17yZC8Ym1Gavgt8csU6Sf2hAnY7BWHuQc3ghVeLb9wVj5gCNUDBp7SXzEBa",
  "key28": "5gKpdgAcH2tA5hYHw89EFxMiLNVtEyA6CxeQdV35CzK6yHxj8BiyPLJHkfgY4NiubdJTFuKtRFJKNcqSiesfj5db",
  "key29": "3AZjz5Pc5AtwCqSb4uoXQeAM8dmJYFX9kGwTdrRH9fNA3z9HF1piyQVRutEhPCBVpAVDFHqVREBEB335DsRwKBzv",
  "key30": "2hLt5x1FvFAvxooqvWBDKhz3wWktJvVibmmNMcAdki7SNXjbvYHTPUbvdx1YaE3thKVgakh4xedkmPgsJEHT62jp",
  "key31": "5pirkrDADwAkXDBBEQFnaxa3wu8R4o5BW6fb9hJvk1JkvP9fsE3hwGq9josJM5vQaaCSRQW55x9nBF2RmbsPezFi",
  "key32": "3t1r8FioRcHXFsUrawhmaojTcgRNLPSWKb68p9PnDAKpsnr4DsowUfHkQTas6BsE219wX3qMD76LD2z3oMT3znde",
  "key33": "4XPsLc5otmZGcDTuYpHY53f7eJbbXN5k4mJdF7gVHWSBXvNUES2ekHTVFhsGMoLvvWutx3rCkrkoVwmLSMh9sRUk",
  "key34": "4TEeCUHFHgcQjL7YPcyi4WUEbm3mCzmtReSebMKBY7qQv4s4ajwgkPB1EAAsWY7kUAsZLa3z9tahVam6xMMTeuhB",
  "key35": "5o9325mofewPKvvocW7NeC9jJMF5YB982yzZuSQDvdfhX2C3B63aYX7WCFse3RWt7s9VKcQ4gPmXpCBRy8jWFek3",
  "key36": "2vxS6t2pcicTb1nWJjJbs5cZgFbQJdfxYz4XC1Lh2f5XLhcXVUtoshJ2DA9o7dAsYjyoGJF6eRR6e5q8rBWrCPva",
  "key37": "52wNsgd5fUFnzN5CCSz65mpEQPiP7BYk2nahbarvaGeTNrRSUBiU4ApVbs6rLgqZg6wskdvc7YcxMZuohMi9z13u",
  "key38": "3RzgB7ZUtYDHYU4F6jxExnrEmsYwnH1eiRTUUAFyF2z1KHzuYmzm73DWpgW1cQ6rNnpQcFJbPDmubtsodebHMKBF",
  "key39": "47j8GsSsrEWQUMDh83NK9dguN6NCNXYYaZBDcsjALgJpfMqQynTPLALNoR1YGtsRpkDefaLfvGhoUxFxHNLWa4gT",
  "key40": "3wxRshU9sNjpnuKCu9jZN29m6hyVkjXaw8VtuNsXaENxJg8SkJzjQmG4gAFC2QE3xzToUdQ9HPv6xyYUj7sVv1qj",
  "key41": "47vrsrzSSgfommZ555s1kPZzD5XuA8Jm3HUbH92kzzjH58yr2q8pgfMdSQb8yxkpAfB7PhHiGA9BpEmHUbD32k6j",
  "key42": "5nk9M5jdQqRLRcsSYtZ1RXHJCFzKGH93J4Rt8vxdnA6x9u4ZmekFscLwgmnofbC3c8BHm6yX5UJt1jp1TiCKApen",
  "key43": "3SgAkdMpdWash3JxJZBzfxzPPVrNYtDWBQz1dEHPSVADfnScAkDWNR9QheCpFjTiRdyRvniWxE4Emq4hHfTPNR5d",
  "key44": "3CRknvaQ2LTmBuXqfWH72DgnLhEHbEzWF772rx3Jn5YNRz8vm54vvJnJnBBavK3sZocnxc4GYHUG7ewo8FAei2f5",
  "key45": "34MGXDjCAjsv8n7WNMpQ1rx8fzrUSdbESkCXEqY2rCZ3WkLXUh8uac8hGxNUMPJcNTLa4DXBJo9wS97BJF8aw5ZX",
  "key46": "vFfkxWdy9LfSJxwpdqw2aWAa8gDHpxuqsbLjntpawYwq5zan7HznYAC5b2ZM1zt6oRbsHmfJ8pqtrE1zMD4dbdq",
  "key47": "5v58L5vT3WdZg2mdmHAEDBXphmMtkme7Xro1wpc79wkEZ1G8u7eQ2zqiCsp7zSyYeADTEKs2vxBbxRH254YKfQrB",
  "key48": "Dnhun3kLJXRqA2S7hAzZfRPqfsHcBMCXmM4aRunGAAt361cVUc15D7s3Ed9ct3edxjTvriYdaRHxXBK7PCB9DEh",
  "key49": "5RYzp24wJmhifixchY5TAtTEkdqhGK2WMCcEuhUpuvLcc2C7bhepZDbq5Dgym2S97vRFgZRXymfVLtmsxyyJPvTQ"
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
