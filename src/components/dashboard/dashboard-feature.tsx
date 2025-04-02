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
    "3ymgsSuDXFk1tgEaSJ2q66CxkHT6ojPNznfzYmBWW7sARNQAkYP21vv5y6eG12iFMjA835ifpUy81GJRDvq7VXks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhgJxkC5rGyKj1dM48V4DhNhTJFn3c54rGE9q8neXmckScKmVPodP72Cz8B5kzALvvgobSnbHjBkL9phqJ9TqMi",
  "key1": "5gPck2d8eVNCCbQBFRPJUB5AB8JuyuT7ZzqUmhwd1w7C8XPHGSmZZwGJUhFidVPbmCU6S9YqY1uAA8Gij2MRnS8R",
  "key2": "3M6xBHh9H5cMC89HUdAdpbsZKTuBSvNmPMm6fUenqqwxQxU8PyQXVLLwznQfh3nAsgGcvdJNWoQ3VAPGgErTWsKR",
  "key3": "2h2swi3XtLjc3489uGZR22kmystra4prpcd3E4ZEPa8uNJ5kQdV2rZjpVLs8PUPLShi5inpUUABoxa1NudXTfD8A",
  "key4": "2A8hPi5dH5UYZxzThcqwHAiZum8J3M1S9PyPnVKsbY66HsZYAcHJmxMFQAvfjVd7Fcfvr1DBuk9g8iLJioMSe7iK",
  "key5": "3RQ24w5deMygipJiRxmN9FknFUb2XuyYhJMrCwXKMrzFURwTJWT6WM5daCJTa1gmFeu3trFVgNqT5WE3JzxZcaaZ",
  "key6": "5Evj8SoVokp8ACrf8aaMdQF2Mvfjodym6hv1htpyc7wC9qLFmFiPMg7fTEDytRMCYmoC8aiNGeASHV3paJEMnVuq",
  "key7": "2pNJGjnxKi41XJNra8b6oYuCJ2tUvhfdz6gZU6vNWdoV35MkYkuTjL1XHEPU7GKph67XKM93vJsamiu6nDBMZL4f",
  "key8": "4MkhJrHjDpDSfYPrBQqDoVXLTpW8HgcqUPokGVNrMyE5kB6oYpxvygpfbryxwhux6jDrreq9jv43HjZBiu5D2chJ",
  "key9": "3diSFmLcie3VsYCCT1TUjQVqmD746f6FYXVwD1hUnj7FhvAT2QCdiKcjW2A2Ph1y321DweVSLjGEqZp6gnRfFQwz",
  "key10": "3hzCJosW3fNbUm3TtcrmjavL6Nszp5y5WpfMqimXExqvuWvwgb8smjMUmZQqQopWm32EAbT2RaHf9HbR6Lq8Qccg",
  "key11": "NTi1whL9SQ5Wa3vMvx6VUcxiEbCMCM2VL6554UjhrFzsyMQRR5sGATYWhnSe5kKyGtEHB6fmN5VHqtG1PQTpUvo",
  "key12": "4vJECESKWx12iD2b1JYWDveqtPqQvbH13jyvA8Dtdrvmx2woRjX2sToinMiFkZN3sHkGG1VgWtE4dPvSWyTieXNJ",
  "key13": "57DzB6eUK7seaBdnTMtiycmghsnRudRGm292MwFZYhpgEEJUf1w1X14HvDPoaNTqhKnnoT3DfSmgaxjXXviirhvE",
  "key14": "4UfSTfwWE78na8UBnGfWM4GMikoZ8hTyFS8VAJYXrVbpxUr3zta3e7xqaYGNEvz9xEsShJBk6y9y2sZdyeUk3hL1",
  "key15": "3eGSSarPsT4JvoCeqDQ5SUNH6jtTEhwoe3vXdsVxNcJKbX4C51P1JgCMsUVdik1qaxpPUASbxBqHPWU3CwVzH5nP",
  "key16": "3iSEoEXzFX3iLDSZR4FnvAr5vunRTpcAggeWKwWK9hVK7xDiuyPDLqgj7TbRXc1ho3tDPzxfjfj4G4AQKBSFwNks",
  "key17": "5cunyWCmgZpg8VKHHE9HRPQtdCcjtNw6QesS8YRzMpnEK6HaL5LTHgCRSfhjXHSYjsc59MbyaNJxhja2oNccAr2N",
  "key18": "4KpuaiJ7WUtz9QZB2YGxgmunTmTsQhLEs82skpgB1yMp6P4CCjsKoQnTxT2hhWkzSprALjrkeJ93AnuKed1Ld2E3",
  "key19": "33SzqZarQtombpYMnWEQNNtjjxzGxSN7Q8eQETy25L37tB5T6yEW2Ap7w21hT645jDicuZ9afrx2re8MdgFP2XQt",
  "key20": "2ZswL3dyPzHNpSZT9cgFCxVEhxoddfHd9VLzPwHWG33w3HZbxDh8B2ks9QteoV8d94NXkXPrLi2qcqZ6mLFPvjdx",
  "key21": "5F7apGHopTtKbFFqod86YdbMWApgEsVaJ79pi2BAeX4kPP8UNsxtx8b3wnEEa7ZRLSjnStQjLWseMHVMSh14HXEy",
  "key22": "4BjgdHS9mynzmc6mUp7r9ZGYaNXDQa6P7ToYaCQhspsV8Lmhey286vtPxoHHDFEfYaDNrjcQNm1fGCaPxZTvoi39",
  "key23": "4BtwHtPzeEsnR4cxA3z4XM5kReQynKtYmMQfErJ7CwoZBX299PVSeXhFpar7nte3i69tPBbBx1KdEVd8zF1SayLv",
  "key24": "2kLtH4v3eHkPENYqV3fh9DDoKTax7oR25LueFjS46LxeZyEiMnRq6KGcSr4eKUGG9hZdJ7BmuWuh7YKa2w53FnQ9",
  "key25": "4w6KRCdEYjnpYz5ByAhYjbekM9fWUJbx2GuSC3Mg2aw3Jvbt1PRiaKRm2J4orTzzWcmPkgPoFMgA3ZuKeZmZCR7m",
  "key26": "x7XoESEXRzoU6qzifFvjA9r6PqaxGYaf935k3GvCDjcqMEVJ4ANmEejVRCsYRwQ2Z4pgWG7CMHxFqG6mztajtdn",
  "key27": "2j92JuvB9HDmrm9eTG2wdZyn1Fxwq5HVvgUbXQw9M3z2pDoFKTqzzZAMjrnjzMzKasFE1MndcfLyjezUuffaf9ZT",
  "key28": "1ukFBt5mqQeFvaTLxhw8vFNz8amAmcyq7eGS3ob2tfbC7PFb6PZawWB4v5kR24TPugy59R7ptBErK6CuVjNLpVt",
  "key29": "431VJt5nvdywrMyeUA8H9SRW15UF9P3tfz8sS69frHdweJK5TEs7zWgNjDMs9x2kLNDVwe8vnXgEc2xaveLgGfay",
  "key30": "5whuXowq3ewKEKYzCfYCCLGTWi1JKUgPYfEFytfwzuorDV3prte8oJ5gbpH3vEwm1YCpGheBBe3i8b44kMAMYgM5"
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
