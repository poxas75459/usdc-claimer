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
    "2zeoNttaVQ8WvkaGLm2B8bbhsEygdjD62GUPk3qpuDRkf84a2iURRW9qddyQ9SaPV9JGpQww1VGyDAkjxZXNKMgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMNPXkDRH1XfaGcSG9sscWhHMz8nVi5BFS4pASJdRXwCs6aGrJFoyGgViLxFU6HNnHoCAr9M2AX96CtWGggXBM6",
  "key1": "2DhZj8kKkRYPxKz2ogAm3ZCiWU3pLqfAdgaTzA757ShJQVZ37q9BgnouKhdhWh5YvEsdumGPEAPAKfm8tfEJXVxN",
  "key2": "48UP6E6mQ7WbaseGHVUG7WyFRZBLjoReZ5gSZbR8Nf8weF69cYGeSapXZCp3YanU9SRp4BaYZMA8ykxGFcTzYQKR",
  "key3": "5r59byFekcVQ668b66JkA1DRXo4zQg1pzbreraswv881Jd8GbC52TE9dQMaHU2uDgHADwCyAeE9w16BYyDtdXFZ1",
  "key4": "4Pw6vh8rNyph3YQ2qjjihg7iseNUu21zMUqKFhCrwUVbEKH9bv1qy1S3PHWsZurAb6cHvX4ZgsM9N4XpscZE399c",
  "key5": "4MQwxZaF1chqmXTQpRyepf7Nge3aCChjyYR7rXcJYBXoZkXuQsnCRX5wQojggFbkMiLc13p4CCJxKtjyvrnUifgf",
  "key6": "4eWu7AzhrDa1hjcKcoZ9m14ZBv7oaqP8eUc5mVchQYroUbCjHqsk7Zf7RSsAykAfH7Fwp9QBNbHVeTT4xzKBaiNc",
  "key7": "6BEPKR3hCuZpcJj72KZWYnuTduy3UWMD87mjZqTxqxGus7HEdneGyrSCJTiP6TSjP3xm6Rh2VRWmsK7M32KBdBb",
  "key8": "27hgVMUs3ZpnF39mebt2aXtCq1cpwdc7piLZqojYBtg2Eo4VJ8unp5XjjMZPwg19pJe44TDjCd5iU4H413aL4RAx",
  "key9": "4ytEebygDxrDP8PymN99v8iUDDQXywakF23ya5YJBkVvx6PEsV44yjjr8EhUYae7UR21nYSBg5tCQGpxCZ5PYsW",
  "key10": "36RYMZo4vN5QvSe2wusURcyY37yfkXAaXEzCLVfV1yanaGNcU1eJjFHyvX2kj1qZJCgRDc6WWpsHbirD7eX27nXK",
  "key11": "4mAXdeoKDJEtmHKRiWvbPG1FiYmPauES4TEymHxRgVWQqmgtUf9YHeydyyp28u1EXG9uyHWUKVqg3TSdocuomP6W",
  "key12": "3waLgD8TTPQ76zJHwaE1vcWebFryvyCfwktda8zWFgELVvJ1ia9srKySDpBxUhYfSwwWw7pYHELgxqePCAu9KnCy",
  "key13": "2NEUvSmTq2gkQ4AhG8tVTqFA23iazsfhif6ckPBDH4k88aKLnuPgd9hTPAfCB2Gu5hrb7WfNvGffVfnx346PqVrD",
  "key14": "3f2weRRfBtqELk2h6vgAARu8hURiD2dpbFhg6GTxcfqhoN2opsTAuZJMrVsTCrxgV3PUmVfTNmGagyp4FNCBhAx8",
  "key15": "3fnEGXPp5PS4S9N91trEVj6nbdGVZQHxBJi1J2FbwV1g1K3RLvYcbruRfWW9Q2VKZcjAj2AisdNYoQnV8Hh2WNVW",
  "key16": "3yawGmFjP4FHskkPT41epNXoUwo14bdXLxMmy2WSj577VTgR4DRNTdWDCKZK5qUVMVhzXtbcZTveGZin3V1h86EE",
  "key17": "qkdDESjQ534CfuPRjc8eAukijy6yxec1MPYnc9h65H7Rp9NgoVptfT1JhojcZ4ws9XJNaRcq8ue4XkN4ChRiuAv",
  "key18": "28AhS99Fk33Ep8MQNaxWe8r3Cmn479eTeo6RQCAakSR3qSWCKhv8GYQkoHL9Z3spDiJs3seTrXMhSDwfFyWxYTN2",
  "key19": "fWWBeXZioZP1U9sSpfqE7ZGJCVrWaymR5Nq3Mquu7pQdB3PeQFn41h85pSRDtoocsnCKK8A3ydbGXbtvgegdU9R",
  "key20": "8BjfPYpnTjYyquRymKHMQvoYN1SN5mPntBzzddqB6LPf9zq86NzdV2JGGomoMuav9BcutCRJ2A6NNJp3FKFR1hE",
  "key21": "4RhSYgiFcxvPNDTAEqfuiL79JoYXmPgqWSTqUiP7o4ftAy7rayPWG4agHcd5WWrEwGFaW9D1nd5xvy44HmQaFj1c",
  "key22": "3R3vSikjDrCV5dCQNJGugURycG4ytLVsccZt1nVhQNaJqTGERWrbJdypZrARbEWXLHbtLeZwKqxAuT7yKSa1Pbs",
  "key23": "F3rVj9qTpHk2NuYkaaqoJRA59m237UjupP33LpKG3PQht9PpWB27mokWmtVnPTs4STwnKsQJV1n58jbbEnyjyNo",
  "key24": "38MKzPpWcXpqdPL4MAgVmh9TumdmNvyVB9v4XkRvdiKEAwjowJBd2zGwHVroZSt7Yumx3RLFoNzUgUqARzsxQtZU",
  "key25": "5JQ7DnfZdnsfdjFRjrp5gxzwWAEbuf7rAfpzsXkUD1mHUMGKKUuHZcFomSsdkhowXyKwRmKS14Ciwj74RqfzHLyK",
  "key26": "5TJhzMbQ9m9ViPLPxrhY8oW4m9JdBdvT2s4uiqrnmo561UMJFdZjoJUwtwwhgie13w7PsL7nm6nv7qwMj8G3rS9S",
  "key27": "5z6Umy8x7pFjerEErfec1t71ep9vEbC4hEFiVBbgVhcqZtsS9gyw7ue46m7Fh9jRoGx8B7Ynt4PsgQD1uMLQbpAp",
  "key28": "2T7mKBYQLy1B9mc1Sq698wc5H2HhZeXckxeiCdaBA1XV6VszGhwf9WHrYHxKuTxzgL9nj3LhpGzAYeU9v96sGJyC",
  "key29": "2rJtWiVs78EKJtPXyja929MNjdaVWiqxmm7FUmh9YwKQgfEdDbjgH3dw96a1vA4xWQsU6rvWyBVYqgmgj7gHEr5H",
  "key30": "wzk6xpSviopNmRKmxc9JufVcZaWZ3fdTCjswciBHfnnA1Hn2or6acqfoModbvzuNF8akhSZmdCxzrB1YautTLx7",
  "key31": "D341qLHu8z9424VT57gEvDvbEfjhKrL8g8piJBGKKBMFyHdortccaDj7L7QRKf8F4eGPYfgf7Lqs86EHTEVBULh",
  "key32": "2nDZPsqVz9DLZUSa2k9q5jgiaJM6rMJ9jZqfMxgnndpXUKvn4izKpSHRGxthKUXpn5gd97RHAm1Lc3XN5tdg3LtU",
  "key33": "5h3QepwUUFQ8V2iUPZ9Fdm2aBzZGPN1xzjPUL4sRc8xgLDTUTZzBABZcMiirBNk6YW3tJPAKgkuwN9Q6aufkcqE5",
  "key34": "4yKSzygjeRVKb52JemCXLykjBUUdYtTEwrZurnhMCpUfsfZtXnkSqfJDdY6DGnF2WkTERjP88c9nKNuJ59swn92Y",
  "key35": "KxfC9FdUWygjAtDQbBfQ4hH8qVFxBWPzBN1favatKF4BQ9dwLZs2tPkP1bjgzoNRRE1w4P8RCBNZDjLxfAgNmB7",
  "key36": "2XQXwkQxB5bw1sTy9DfaeURbxMNPQEWaumRJNeDmuGZVB5p9iWTvwgpwRrPwDiXGdHfD3LBb2Hk34iVjKnqjCzih",
  "key37": "5zyDj2psyEaCd2iPGrGjeMh1Zy2b4h5xu9fWiq3XwMRDG6Dy2q6e3uB28ftpc7g9q2R85YRREHXXTVqZ5yc4j9AE",
  "key38": "kxjLhS3rCvm2S77fovYa6pTexLMr78n4m8dWwnkCEizr98ZFmekTYukc43V7f8gWoHYPZRJrJVKdhCdCh438ur9",
  "key39": "2S1NczxNKJr4Lo5Bu3d9w32D1Ko9gQCWqiMXLueS7V4DoAEjSKs1fHcwAxuoKai9zQW9TzdYkXKhoHz9t5FiDxuJ"
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
