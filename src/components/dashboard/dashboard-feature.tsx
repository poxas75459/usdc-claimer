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
    "2gPJWrdwEonJuvow36Jb7kVPzmz1W87TtD5j5CNQyi1di771xh4c4CTqDuZotQauQWq2Wj7DS23w5NrWZ67uEBG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugynuQ4RWywWQPoziLhxtWkHv144jMoWG3Zs1nsuxvwMVb6Q7CN3bRsfQ5igwcu6PQQMkkt9ZvAEXJL1HCuXrhf",
  "key1": "2dnwtaHC6jLUu9zoiADga2MV58SChGs4Aig4jEGeBnF7G4gtfvArEhHpa9C8849H7rspqqd7y5L6wa3MDAKqH67x",
  "key2": "KT8kanM5uiDKp3jai9n9P1Z4bscC4TyJJCN2JTw8ozvw3jrd8xhhFVcdxiug6tLyxJbQNr7XBZzHxdmvmu3RdYE",
  "key3": "4gKKto2iMgeaEy4bz3c4w7QBYbULqgyZJXp8vgsDaKoKAnjD9gCmkiR5vK6CxtvuPQuYysRf4dMwPbM2uxkZL6AT",
  "key4": "mMByYwkPZaevZHzPfxHXX3K6tMVm8rMgV8cmg77MfpiyQ9euvgWtAkBBjxrtBqUzbowcP2n9uBaCXABxkpBjaqT",
  "key5": "5mvUixgA7z5VfbokmCbZRqnPZB6p4QeD2w9prChPowuxaPPyiaTNEj34dJ5LBppiaAZKZaw2ZgCpZNBfYBpSNiig",
  "key6": "3mWZMBjwD7UvuqMU92S8RBvUKMujavhSULqS4EN6oRWVXMLePxm7fW2djofq58hhxs5Lnn1zVzyrLaiB3gGL6ej2",
  "key7": "5NwwxnX38T5N9nmAszyxA3GUHHa93yWtKbwR9jkHMxnQHmgDAe8NrsiB71dBrDs1rqMuExPM1U9M82DhCD4z6dS8",
  "key8": "QPVRkFinbcnykr7WnMqRqSDdxMazpvWfg2iY1zqC4uTv7nghbYgJqtNFEHnD8JYiiGZKfyBfMRJ5DFHoak6PTJb",
  "key9": "qezTgCDxtRjj6jDH6hUd2QnRab1UK359XJtQbuMYbAymYLVpJaVT9hHdA2C3F4CRmAeoXmXkXyCRwocrqEZejx2",
  "key10": "3cbKie3DDvytY7hPfACaFVoxKf7GBnMCfp63pwsBTnQZ5QQqZMqTAkPcduNghH4QBGLZH1ih4mh7Vwd975jyGD7W",
  "key11": "3T3HVpvRQieBwnp4Ym6HqTcLh31W6cLqRF9rZrgiESW5sqd2oiEtVCMQDjsSNtfgiBF3tFYbh57cpN4JeJgQYTcX",
  "key12": "4GJ4KYQyiA7XwYpnihEu8jB1oETfb2dxyGEo62LGyDW2gv4XsU1m8Dv1CRaCJi3bewRxro1EFPuTXziTHHnfnhJ9",
  "key13": "58edT3ELhvqBfhrXPn5AG8KMbKkpV1hunNEjGi7fkVTvqKDJCJcAKGfemkZrH2UUqBf5T7Y9BrpiEs2GKR4maWbM",
  "key14": "pK3GwsB7dezoCQeiD1yDgf2nM4dxaDmhKH6EM9LxynVqSrqMjwFrqKN7sueNuKasEoWUetjaJ24LBZJcLVHT63X",
  "key15": "2UgFArh8BS2QoDHk2F7SEdRLjnRLSn7rA1SeHiGX561Hx8W6t5UC2fAS9LQRftdqNNfRcqbdTP8soJzhKgJB19z3",
  "key16": "mnrMGL2JdKqbKNo1ryMMJw96HRZPzsgjPdTzBBqXRMXe5PYZz9argvNVAVfKhvjQFyznY89aKzSyz39m9aEG5PE",
  "key17": "Hm3a7CxMS4V1xEqSM9gQffPxvoyJvkfJgyCxwbUj8XaoJDYNmoRd3AaF92DGgkQetemxYFAaNTed3oo1s9qFpnZ",
  "key18": "2hkgQT5mq3bWpJxAHNcnfTtRKSs5pUans6JQQiuTN8hQkK42jnKHBRgRZ9ggJ5DKcF2nqAv8fvuxbRG7BqPmVxk1",
  "key19": "5knTjyA6P7NLqQsNhv7h1b1AjJCFzaHtSZeuLzBqmYjsNHms7dPeCq3iR5GDwCpbN7fZH9iccCWfqpVr2dVkHwjF",
  "key20": "26VCvukjeL34F9rLsNBPEb5mDvTzfNNZmT9grhTD5QMEvsriUxVBo6xT9Lef73qZT8ZE8AhL45aMapVzQ6cMzhFY",
  "key21": "3ddJizAAGZe4fjHrK9iX3m4djGkPGodLEJxXHAfmBUs6xPZ495xkVJVzZshQxPDWFdzHMAD31N14GkeK1CgGnztN",
  "key22": "7s7UGwv8uPkaiXPePh1T3boHhq7KzWpkLx5W9GuC9iVt66dP6kSH1JPWEGRgitiKXiQXmGXAu4PbCK1e3WiZ5Fx",
  "key23": "4LpqRXQsG9B96iQZ5nGBD54r8tEFver8DWrJBouQeTv4LvbN2HFPsUDynpgRvdraEwSGcb5Ne8M8yzUYwUxVCAvW",
  "key24": "JcerdQaqHxCxA8TtPJoayWLHc9TBPXcHVvbLjiLcajfaKwVfzNj5HWBz8XB1xYmxaZtm2DBfJZmZcLM7Zvx4BCf",
  "key25": "4j484V9DAJiktGDqkpspmafq5RhfA4FV5khmTKufpEjHSuWrTQck9ybeV3KJnKkYdkYyA6kybUP9Yf7sTebnVDUW",
  "key26": "4W9yEku9GtynaYH18VmxnDjNjaSrfcYvUBgq2BrDaLUYaT8vy2bHqA8MsaDPqxwddn6JBebg2azi8RJzUzEsn7sQ",
  "key27": "4J7mkrkYyo7L3PQcreKnbE1fRzF4FvGCZp4disZg77kso6vXti1rg5yw2VA64dYwJQgpLn1cA8f1MYvHSUGJ7gCK",
  "key28": "5tRzuNRueWLQRo2MDBVRP8WNGz2hJw8xLnQH37SQLRcNRYzbHh7YGWasG8SXkxyX3puDUzXPj3Xoz6L73bNCsfSL",
  "key29": "4ajffHa73sAjB4qUx8YaUDC7K4SQg6MRBfTNedFuhKPE44yr2bL6pmn6K94AHkrcEzBaFWCYZt8MPdJWKaaUFkbH",
  "key30": "5Cn6STpvMa2NVSez5cEFK36cyqPsDENf5KU6Uab6AVwHgBxcjsFX4bca7FLhyTTduidPHqE8o6SVUyCKrzs7Abkn",
  "key31": "m2pkt4Q6zhgTDoxBAGTp5c18XmpNAN96XYB9BPy6k4b4MR8DMuecpWSaZXqk8ZtKdB8f9iVgbUDvsux15c7fks7"
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
