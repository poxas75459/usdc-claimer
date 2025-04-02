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
    "66D9MCcDnBCNpXxAJAifGJ1Qr4LnHnxrRE5eL9rZh6KMSEAnjvXreW5fUVUpJTpbpqmE7cJukQonMFW9ba2j3Yb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMP5Gy1dLstiC8mLAnGcmt4QGVwcUZvDaPogQs22EretWArXD9sapa4VggggcnVAdYMhK12yw1BY8GxoSyWxdEg",
  "key1": "3Q9p38Ae1z3EpFGsgLi6BBUBpEUZqUyaoVcriv68pcRz1wbCYenuGDNhXThKbXLvXZyKxSgqSM8YF3BSZvbDf9HQ",
  "key2": "2YipTWTftvwmjTYwVAVGyWQ9hukC6E3mT4XiVGxL5Gzs3QtS1x7Y2rDFUSpiyd2WaJVhuTAxDsk4WgHjnfZH7wdB",
  "key3": "4H3AZ6FQuonErjeGVXJj9fQtDkT4kQ32K97631gph1pt1b4to2nPqqTDCcCjZoqZKsrtKQ7LeBxDsz8ZjaVHjDVT",
  "key4": "3Z5zEoT9qEMv4GbhvhGv6RSN5AmMjsHoF1mnoSoFibterC94NJ58ZNhSLzhaKRoTYBjLVgi7JwTQee7ExijTMSpo",
  "key5": "5wjfViUfYNkiR3KZFsrF3mKwqViRGBH9U8kPHYfFB52Bi1AGFNbqeKSrUQUT1Ps1y5mndVUjmmkxxTEJo1otDzQe",
  "key6": "5n6Jds2NyGVDtaSZZgZ4vu9VQ7XGxjyNQEkssc6LX88FC2iaVv3hHqFn74RSPXA3LmS6GGwy7y9nkwcqomGAhn5R",
  "key7": "3dVvVePUrEcYPMfSm3z7hbQTscy5BZ4o2CmaDexnJiH4t922d5WE53fEoUMgDwoNY4m9aB9XqQkqaRQ1nnt62CQf",
  "key8": "g7JwtRu3p31MwREdQ8DbZ5R2r39CnijxmAepf7KMLBzzLtoUe6QASd8ReEZsbuQ7wSMjR2PQt9NLTUyqqi6gKM5",
  "key9": "61LzF9s7RNcbpgczTqhiKVPfxoheJcQmQvtRrwnhaHeCjyRkkKf1NB1A5CsMtAWyPYKVarxxmiebVbbg7BtBHQQx",
  "key10": "5ajrhGc7aTnn3CcVY2DPGUjqN96iocroremdmmNToHKAcJRfNmzbKV3HxvKMcW9EuALCXReCks8ftUv1NWQ4PdKc",
  "key11": "xPS6ZBBGw2p5dURX5mTqoeqjCyyXbFuDPRGq9b3LXyT2r53NnramUFbfBq925GQZ29v2yQbHijorv11hBk64ePu",
  "key12": "4MkJ3uFekwa8PCJPtu2dSxC88TdKaNhPeSmMSga2XimBbnShKEVczmyUHeCqhx22EnrJqsYcboRKtTsebsXgcGAp",
  "key13": "2MEZZLhyG1DGBxNkVZXzQ8gjUNy79WNpkMSwgTbQdt9iQf4B1oDbjUNE8NiyJT9FTo3YnqR8GdaGVCVYsaBFCoGL",
  "key14": "ctX9BMp688UK4dWU6je2bmzDuAAWseBEUPZdHuoofmcaUTVv8DQCCcGbNt8pqHFqR4NN5q8mhjQj39QNju7ELK3",
  "key15": "3SeoF63UbpgTgk75EXNxbTUXzF8pW4m3PBwnWey5Z4fRtJnomFLZy6racucL4YQi4du9aEAt5NyGXX126QFLs2sQ",
  "key16": "2iyUAujhhkg7eE2Hv7fQtoSy4TZcTq7YbBVwdovkbSy81VqdTP3r23zApMd4VKPYw78VkshLQpnX4R3HkLUBdi32",
  "key17": "2EpxKGkvFNvgiocojh1j68dhqEcu9C4WYEpXqMSP9riSQ3VPFTXncgWyAmqizRss9kHmhy76eWwzLutJqV6WycQh",
  "key18": "4J6iXARKzggbdAfkDssk3vqv316G9ds4iKPQbo6aRoFpj9fwKXJkvDc1TFGv6RzydirL5mC5BhpbNAHtrdKfso7E",
  "key19": "4beVNTXXFuanMcFLSD5Rtwtpm26UCSeHPGPCGLaw6mPQnvnJkQiKYbnREPweSQ8Mm9ppm8QahY3gTaNjHCdBLQnb",
  "key20": "2E2GprX6ooa124Dn9UJoZoUdPjrs8YCiKbkff9wNkNvSZeS3b2e7uqcgqKRKGDBVAqc2qUteTnKT1mkKqP4rdm2u",
  "key21": "DN7wLANj79XSFaCCVSKGvXzCSC9vG49caiknX8pz9Dmp6NFcGTT7U5e9EXu2NeP1Xq4dtTR5NA7BoATNG39tjbF",
  "key22": "28LAV7vMjDgZJo55duHXfKNxaJss8Z6xjwNAeJUDrJvc3Ukw8fdJTXoaVA5dQn1QyF53c5veRYwJwju11bSFvo91",
  "key23": "46ciWkMMRzCK1VhsDqYbJ3DqNNVe9JziGQ3NEgCrw32yHerAdnHBX9YbGvcARxXX3k6r98Ks97EvjqJK2FwaQqEp",
  "key24": "3Qv9Co1R1KvNKqJUF6z3rrRE53yRc1G669VKVqiVdKzEyev1Koi3YWtJeVwcM1XN443rqgNEcE9Dz1DbEQQd53dh",
  "key25": "3RQRepsbKQSRTbN8RjwSrTKdZZ7cRxQXZHqURtXrzXK2ZgEgLbvefDZ4vrtF3ixNJJTemXJhirHZpevAB8znyrfV",
  "key26": "FxcSwyu1DUAEvmKAuGUqupYARECdQPgSwT2SgCP1JtraLthmnUpN17LSybkTV8PHzQ7BLPYaSazv2a9Uj8cBs24",
  "key27": "4tukGGqNv49tgEb2LWGZQ3E6KUGic1XqK7iTjQ2bQkxkxTKRZw8tK5kiyZCSqNymHkCahcGQukUAwoaZo7UDcKqc",
  "key28": "YCJepNXKNJPqYJ6Zkh6XD56WpwNx5nHg4YeBUStqKH8HpsaDbf8oerRyHhay2VA3Fd6AmCLtnaJHUrLR7vSvnLd",
  "key29": "3f8EceKeNgdKgchT3DXWPv4Kd4GxAt6m5NM1msF74AN25SkWE1QjXFLtsY52mZRMe4UWK6dvJ7bciL1BAnECDy3r",
  "key30": "4mmvW7puBSeWprScsoT5zW1eAo29kCrJP4yoZ7qcBhwhQZv8QRBdtqgERri8z2k3EZQv6Adj5SL42WZZ1SVs3H4F",
  "key31": "42Kc1AhFCxTAmT1zNuaX3yUPsTaAHBhCJ4SSLeQu1Fa9cBHWzu2JXMfAhtPW4pddYyXCKMKnZW1itsGYL9eFuWrp",
  "key32": "T1vsBXJYDPgd5r1PP7DKmBgHySYJMfrUDZbTF9ERAxx6zwMtRWFaCGU88JvJMHgre8QQhu5h3qY1hZk1UYztoUx",
  "key33": "pyViH9r4tk8LQDTnfFHR9PqPuQud7hqVTLtT1L93SHNQPnBj7fdSUgjQjWKdMQR1wKUp8Za6yJYFddzLd1C3mqE",
  "key34": "3LpSrCqpmAq165qFGzyqqAKxPoQzCwUddLi4UGh1aRXHQa3kBRtfJzUPKAt8wQfcrC2T1ki28VCFxXdC9852TDy5",
  "key35": "4bUT4FNNxMuFnLsUyFKXA2p4hy1b5dTwTx2tU72Sbgkw6mySrw5mph4krCDSVhgLckevZLamJqaxCfTRZ1zfg18B",
  "key36": "5C8Vz3z6hiSdcbiCvgyqNJhQvyzr8ozMDgVNLvSSecEzss6JyoapN68ikj3FGx7YHu7hedncStbP7M6Zu2vc3Go",
  "key37": "2618mPX1R32t1eBVFYGEGrGzvAsktoQgSaG6DdCaQAuQS5JjH37PqxsRv24FMouMKuPUZtqMfeP2egC9GXVVsmE1",
  "key38": "5YdyVJEt1RkcA2i3fKnGkwMVa8c9CzbVvrYsBHdAr1hxJrr5D6vVsqzrUpi2Mea8vc4T3SDNRX7QLVt54t92ydmj",
  "key39": "3qPqdjeDinqPJgwb7hd2kaNXPSAu8nufBKm1gLHzbr1KPxycNY4pzJ2c1bbTpYu13ssTeA6Xo8a1XtwygA9VmJy9",
  "key40": "3ewBNAgp4mpFAUzbV5uRdjnNvh7Sytx3a7RPEQ1gbCFvthWexPCW3AobRvE7PXmoK1rNLrYpxbm5GtTueMGz1Lx4"
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
