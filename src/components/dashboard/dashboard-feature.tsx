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
    "33aMJFKdCBstsXLjmJutXQtnWAqwS1r4jt3vPkCMMYKccXzaeGQKrZDymkYBFTtZ18C7wgHrFkajTMtLVt9h6dq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZmnucCyi8ACrz8dYMAJqkBBfPGvJa34E8abvegG86kmd4mUKBH1UbRDZbzvhw28uC7bsvfgYzALDHUWuHzAAuV",
  "key1": "58csyZ2Dnhk1ATsZKMjQ4XBGC22qNb9EnMPesDmdR99WpqysazGRtFQpYNSUf68LTFhknS8mwZafy6UwtZaBQXrZ",
  "key2": "3Hvza4QAPErWzA8VMKPeqKc3NWcVADieLjVjAU4RQs4Sc1V4XYHFkrK65twc9WieN6jDHaGAukcXMMudbJK7KJw1",
  "key3": "4sAgHmhNma36BUhqdLZzAFbQ5mmr56jLTjMjTvCeQ68H3Qkx8acRwHrxjGpeNJgFeRrkysMvyDhdXtriuqtuF2np",
  "key4": "5SDJiDTChQcAoykVeZFdKDYUPeDiFYh1B8NyA111wnH8Vxex1sfskLH41GUYgzorZAgf7GkwSRBdw6AqA3pJKVwG",
  "key5": "2t9H6QV8do1G1jPAxuJT9bN44p13QQdyJKTs8dmnNDHAcogHXSqfQxhTYjjoXmXUcWosYo9M5yTjGMB23j56KUEM",
  "key6": "5p24r14ndGznaoKhJMUmKc9AcMYyeiR5JyFtZEofZfCVYNVJfv4Hrj2m4eoLgoCuQgDHXnHdRfet2qy1APYGc42K",
  "key7": "m8JbZruskm3tPE9ARz1T7bFgccCNVaL36VcZoQKma77BCEWcNZpxcaJVydt2vJt2K7SVKMEa8TH1ZTtBTm7hkwv",
  "key8": "5owmP1X3THC32PLo7xz7GWDiuo3SSqFNopYYVTxhyDvD4SsLBzzZyHYwrF3efuy9FuTii6SBmSVPwRdbaFs4xW8S",
  "key9": "5VL1VXZqbkg51ebkq4uKML1bpo1sqjsh8XBacn7sfgNeUeCpeaXKUsAGgENwAqEm4WWqZtfi89TqFmd6ekK6jGGs",
  "key10": "4xnwBNpiw6tcFNfPQUtaSqVtCB8QfrV3yxDvNDP6pGif1ccWEYGWrtQgHuM6nckNeKdfetPbM7cHdenXazQ2m1dr",
  "key11": "JjeYPjjRPaTGnoHuwtM2S5LcCgx4CK6aZUN9VQkYjMSjkdzwquVyWxWo791ncKkPgCJxyiunFD8Fj6xdpCmJ7nm",
  "key12": "3UoAviAzzNWYMvkhmkeberPLBH5nRtPpuVBizY994ecWaYq4hAcqzzwGjcXkPwE9Xc7maySj1CidrKiHgWxZSRTB",
  "key13": "3xUjLnAJ7aaahhh4nw1ju3xrCJWim42eHdnN2TW9VN1MoBUU5aYFZDpPvu7yZnhPBNmx7g4Bj1u5d2kadUwbz4gd",
  "key14": "2rMQoEJKprcgYAXnKvveD9UK8dgpmRCQRXMzjdj4z9joZQaQFLqFiiPSuHd3s6BbSiBdJ6yqHkvBdHCP2ywe1oHn",
  "key15": "3262qQCohrKmTn5q2hvkJqBjKCimrrDaDPELion4civ6iAw4tfVQJwEoAj3U89NtEH5xdZUMnfZpB1HW6s1GmFvg",
  "key16": "3H49XJWBSJdFjPJxtXyBX6uwTUtWYK5NJUDEWaypg3qokrf7ApbXPvhJdVgMtZBENa2fHFkbVzXYThS3Hhaz5QcZ",
  "key17": "5R81QsSQvwYMJ6djFJ8AA3M44XxvRrNgYZtaiHcMjqQyZbvtn5KKDB1GEcZ1TYmfgR76mQQjCRy3GJzBxkLjDZ8w",
  "key18": "5bjDKvSTLKbUjWN1psqGtgD6D6PgM4EzNaDUW69EiVPAYdneMZUat1fhDiGbciMXdARKm5VsfmLaeRaZnhXX1R63",
  "key19": "5JHZttmHrQkg9hZTqWvN94xvGG84q3kcy5rx93Wf4sa4PAioFby7sF1s6jHmSzv71Whu5JKTdpjEuSwPEyHQRqnh",
  "key20": "4DTkFH9G4RHej4BekMwPHxG7eCcTGfGMh5vhQZuav2ASYkKa98vqhsLda7qqUxJCeGvAZcZGvYZoHHW2GqxTpd9J",
  "key21": "5Z7VXLHGtreuqYUVyL1DhyR7D4xikBQwmhHEwiJuaJo1jTAgN6W7qSTyFwqX6tdNydEoSDuZFFD5C9WG5aoijwa5",
  "key22": "4yJyv3tvTf9oa4LieT8FyWH5pMbkBfuGWUGm6CDpoLiwkuAUHS7LJXm1KZuU9yJvoqT4SbGDSpNuBjsEWtrTp3K9",
  "key23": "42MV9wNr2efKbs1ASXMZnKt95PQT2bkjGGFTb29Vrw3XFfNcu6CDb3ata8Ejs3mkmFBrdekiSQ8ENygLdqdUBMQw",
  "key24": "2oJ99qvTBgbBTrfheki2Sidc9fnjnTmPS4hKFe1G7pNqHyaRTkujhEBnfSqTSBUabt3DffG7sqwKdKavypzE4fgA",
  "key25": "2kukn41DGwxQxnWaDgnytaTgd6SFoFTkNTyyYGxr756zC23ymuskLHnjcyC7HPTC6sBnFdsLF479wEnMK8UHofS7",
  "key26": "4NLuSnWSKRcHYM51DNbT75PuByc7VAz9KeqKsVh5njyC49kbBUMUcnNaUrp1NNUKP4FrZ9tyt6NQgaNxo9JuCUim",
  "key27": "45UawM5t9Sydn1nUhb86Hv3EstRUEAQygexDzmNxjCWaacDCW17UrXHsufLySPZv6e1RKCndgP2kXs3unAF3KhFC",
  "key28": "2JPSHecP1DirnooDmiYhtoKfJ2Kr2zdbyjVrGWbjBYaA7kNSzoUQXcoEp3mN9TrWTon187tBvoBWjA4akwFcjjKK"
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
