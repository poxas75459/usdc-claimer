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
    "2xMUCNuga1HLLDmRQMMzPKMH7LKLh3VTZeKdLpzaFdWzsfGu4WKQfDDYauVhFFeftfdsPTFRwamksmbZ2tMDnAJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ZorFfHsYTMuGssEt6nR6etNKPFgPgMgaWPAGyh3VhRti8uehePFsCHnoN8G3RgEDw94PURYzMju7bs8prvtcmB",
  "key1": "5enKJqiQyeKtirgJufNikvimmMgZT2F6e88mLFwzuwzExwLhjQRyKroJqqK2fxEvso5F2zy7vpnMXPkRnTz7Sx5p",
  "key2": "4JkC9VHD5CuW1ypuY7ckEdncL7SaC9gubtWmjPaPFCEK5NphLUqXFWpGgJAWRgWjkoZp5cSF2eBpWtRyZ2UpvuAC",
  "key3": "3UTR8kga22AyDt2ELn2Wn1MMvoJabpESmFLv2umRBJNWMn9CfPqxjp8KShgkxLRy7iw2syicHaz7a8YTYZm6J8qk",
  "key4": "2ybF9qgcbhh8nn57oeCsAUqD9XV49pLU7fYhWeQfcbBUqALqZ8zDZGuizVPCzyQWXK3Yg3coBqmbHygU8Quj67BB",
  "key5": "nARvKHoJZ3P86yHdYxC5WaadDSHdsom5gZqULgBXPDaohLJF6h2YGiKmYeD8b49YvUzuxoDffpqijEWBay229g5",
  "key6": "uQdMUDVbNdyMzTUYsNAd9U5G4W414MiQ9YMNqNaVuTtwBLqdX1wTMqmwTBAaGGx2hebxu2bV9PJRKwDNdy7n3TB",
  "key7": "5ABPHYpHP54Kf3Paj9dwCpgXTXPHufd1Kfp7UPga22FUtt9A1jUCimBd9yrHcmi8S6GCGdLcowoUtat7e9reBvFB",
  "key8": "2nHB1irdkoD8t4PsBGBXcWd5UVQHXaMppxdoaZ6qnwiYRZ2iUUgwDyh9JZqMsXU8SuKkausC47tWBXySaXtyPXxv",
  "key9": "5a8FGfv1oCZaKuaiMURFbMZYqLo7GnpCNR6b9EMoyZRLB3yw2WhhgA7huu8C53FdaUpt1dz7SAYX986M8FwQ5hs5",
  "key10": "3pxAgZ3UR8voNocAEYrFapKUugQ838TeyFXSkYAZNGCsimWwfBcSgYc67THg7iCKwVR9zkxvPYFrzptiYv2ZMgRh",
  "key11": "3yQXkt31RoHYA65JGX8z2Q1CxwMPrPJMVRtZQ4YrC49XuAbZT7HgTEP4D96Saj5BUPRuWrxezySTXfEs9Q7YPKMe",
  "key12": "Vw5RZHk7NfBSMbA1Ahhpt2zxmc5Nyc27UBMt6KnoUrvAPNwkUe2iVJ3XLVV55gdpFQ7mFqpSwbAhigiyqZev418",
  "key13": "4eTeXvKirDcgVBcBgE5R2NnpjdMFxjMDzLiAVZqJoWm8myprAZpnyHwwvyKpjHkq21uBKd6YFHFxoQiRF4Bau6uX",
  "key14": "4BBmxvYaH3SYhVwpBeae7SAUrm71FgpvMWWvjhgCZdyiy7iTBS9H9CAzUaF3EzegguKUWu8y9eriMNymoyqxyyG8",
  "key15": "342nRXadWGBURXS6jZ1taXVXt18kswxpJBDqFk1d4TqR7YqW9Nvq9CCJXzVJvmdpnUZ3k3buALwP8mq1GVFkcSf1",
  "key16": "3QZB6FzeboVYmXPU8odekV91ZtmodzhBxdYR3R7XGqMMdgHVLVa52V2JME33BKrJ7m4SCpwnZdr6kNk3wiBBBpmx",
  "key17": "5qGLCJ8v6SuQ9JCx8MJ81LhtaxjnvSsKvjpx9rXvwFDf5ERf4xQBJ2aCzimSyExJTS1Zaejxys5q4t44VJN2TCEG",
  "key18": "cL4WBho7UqT3FEDDDH6u8RQ1fHWBP1mfkyKm9rs2MuXRLwt3kqb1ShccAysmqHm4ULe5NtanRv2GsdTLAvZxNf5",
  "key19": "2hMzhkN4PPJNVpwbDnwg1mUZ8YU4SE3dfHs5wYYitwNjuo1XXNVUo9HzE12Hvu4yXMoqXvZJDBb9iRdevfruJhSP",
  "key20": "3nLwmTRwygiypz4LqKKn9MSFxjbervvQ2W5aVdsC6EgFmmmXGZ5qsUdgcxNsfHyjfDLfUYf7Wtzakwc5p3Ah4piw",
  "key21": "dedzjeJcDtJGLNstjuCnwRNEmC5qPTB9cdBUhKKULkESG5nsFnqttUmTdE9MhVVucRPqgQkJoDTmc97FGEqjUsu",
  "key22": "giYgqQ6TLBtuAzdc6WgRvxsZ8Up2Hb66moS4BecZGQ5qGaq8UbvR5vdU5HTDGDD1jsKjNx3DnJuEdAiCho3oqky",
  "key23": "hjvUginpMofe2jeLJTDLHcW8sXEe9v1MhvB3VGpe57SBiTbgycqgXNNpYH7BVYJTJwLuomeK79gqtD9jEP9LYfr",
  "key24": "4dfeG4vtvmwsBbP2ibSECPAjXc3HPKaMESzsdFkRAP4zbR7FFe8X9wwAyZBnodhE15W3aspYcYKraJKaW6oM7UA9",
  "key25": "2iMPkmfpg73U5Sg9Cwb9Q4RckLBhSb9E95mgrZxuWLz6ZFBCdVZ3Kkg44PZVf5o1qUUhUeFAwnaEJyMtEtd62etJ",
  "key26": "y3aRUPar1iMF7YFK4dZhddWVBna8hoKH9V8XU8M1qRx2aQXDVWLLMNGrgSvDY5JjroA6Lt1thFidoDiu2FjToPG",
  "key27": "2XMB655Ru7YW2JULdGFiQvqQgSVC9jUb8bPg9rhcxRuYw3vzVLWMwvofeZHfWNkNbwm6JvEbSj87dqYzaF8X2FNr",
  "key28": "2KTEmMgc3wMLmaBi4u2qCPtz8dGLcjw3GZCttscTdmPCtevHCRKZ9MFNPYtBUM5s2Eux1pKe4mRqMs95ftBNMNMP",
  "key29": "4WPvzKknQJbP9CqUsiY3d8SXeM1M3CQh9nmYPpw362xn8z7Fsav7fjcebEQCeWVRoMxMiEAk4AnARN7NJHHq27MN",
  "key30": "2jGsYuJEUesZorsfWKqT7cBG13oGxdwde79667wtg1JNN3pzM1ke2xaMKcmSddDuLRw4gqcGEVP4TAc2Qy8xsWmz",
  "key31": "gfFUXzDWmqQNcTacapgxSRjUon6XU6BRZUgFZQEsGvJB1N4SG5XBW22fR6cWaptLhxnwEGptaXWzyKg6nFN15yw",
  "key32": "7375E4sjTksGgzXE82eC7Ye5vvsXhX9igkF2mohfHNyBQQi3ys3kgXfrQ3aKF5S32bQBUPRRfDus1N3ahGMv6Vb",
  "key33": "3scmriiwu3RMmHrVSLDVqQmeE3YjkzZrGgWTDNPGWFJkLkYq2tcA4dAX6dXMBpAJzDXRi1bZu19zggzmyZvqA8Lx",
  "key34": "5otBnVacDoUViM7WqkLfvfu2d9JrT9GKfdYiNoFrgF8KRSBUFeyrN6j1Ng1VAdUMDfYsdXzDqLqp2zqvYkLXAPWV",
  "key35": "5TBizGnCzFBospLoH61yBrUhWjZp58NubvYBLqpwSYaitUwb2ghQGsdcufNFxwD6VVXpGwqp3grwm1hw6csgYVgW",
  "key36": "Kni6UiapaxUMgLJimw41hqTMgJgChV1uDaqKZLATxg8bomu1Fefa2hMC99QMWYcQVUXroFBzxxTy96MuKzfJo7p",
  "key37": "iJ9mMksVmBa1FoRhJBVnwSP7d8NS7KgS9HQz6PW4ehtjNBBePvfNSwj33szjDExxTUKGnSdvQx8pZA1dXCgeNbS",
  "key38": "e1GhNfFHFy9ZbFH28f4psXhbwt5BNYhngPLttfHj8CzpsNXCeQ65J7RPPC6s53x11XJdEFnuX7XU6jbHkjB4F6T",
  "key39": "36LhDZ4p5KUdbJJKE3v7Lq6B7dvc5m6vMvj7pd9f2YN2yQNp2UjTZ6BgNebRVFSuWf5C2QwzW5tgfb7SkT2W7u3g",
  "key40": "3H4K5Bom1Svs8epUbH6h9bXvhJyT5ahaCkhUNQq7QXwR3F1Cx8X9B2aKjEwrygzCbjcNWdbT4QDNMC7Cit6T98Ry",
  "key41": "5J77e8cnmjpxiA2qKr9oECE2PLkphFg2NttBfDXGWBKhmPjhFLj2L5Bn3XPmNRAAoPbHTqqbSSjoF3Tgw8mT6Ghm",
  "key42": "4hG4wsAb5f7Y3Szi4VmnUfbcdC9UaWxydGn6metQBjvSWpcWGGTBmgXgg5jsqobMx9MUPoqdoHBxLSXVnb5WkoWq"
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
