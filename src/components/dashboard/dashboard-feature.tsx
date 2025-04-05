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
    "3uijJEb1Us53kgdUPQPcJg1iUwkZhCMDhpfDC75ZvbkoTTK6z13g7CaD62Ekh45zi3985M8thHNQNME6JKCWGuQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PL3HbT2XRuKyTz1gUnfJhP7MydcSNuxdVmbixuA4wcA8Rhm9p9yfiTWkm68UE5MkRDSXS5UadmSYJJ1vfpEAdTx",
  "key1": "3ncVTTX1BQaYbPMXWqTJBQUYdyJsK5nEW42Zksd4SeDW3tGm4m11FqUJyozifegVZ5vn2bzjLzM2LejzzwDv2kdo",
  "key2": "2e5MJjcEMvjDojAsMQcANYXNmv8LL2N6awiCWLJGCaqC8N9uVz13Nbuc7AjRRoykWXw3f17ULeNiJL7tzPBYxXAF",
  "key3": "4CKS5Eh52kruxqksjW88xgu2JDZsRam9hYC85DV6bisRKm3cnr4GDK56t8nPvqTsha9NL777hRfx1wmBDXx4FaaX",
  "key4": "67k8zE1TMNoqjVWa14NSRUrG7Lrg418yCgLRsu3t6dx9CDRSdrJFWZDYL4EhuoFZFTJAgW2oQuW6RPxoT2ca66Pv",
  "key5": "4GXN5QLxF12R98UJRhMeHbLvDAPbk1j4FSt2CQvbB1UfhtAUveh17MqXmqSNAE9sEWhwLFRi4t86TPRjq4mVaMZP",
  "key6": "3PfkDedht31hHXZUQ5efSsPFTz9AmVmc7MUL5Bd5FN87oAbDz3TM2BUoph9zJU2dte67mqch86cLkxBxMviREpWt",
  "key7": "5YZdq9y9gKNVC49JuZynPzMiwNMZwPYTJfQEQfWwNXdn8jXpM2oXYfdNymyASTtKu8xZMpiG8toht8GPMeTYR1k8",
  "key8": "43BywkAMQMpAEtxmwVC9gQRegdw8zgWkTDNDrq6wuaGYZc2kaSXfNn8M8hoz1iyoq7kyu3KF9ufao3pXSYvnGSVJ",
  "key9": "8mZNKqm1jZfdRiDniKY1jVPhkPcweQss3MgGBvjF4YegUDNwYVhaHvS1zsZkpQwfqHp1nnqibHHhQyEYTzXbprX",
  "key10": "4mDgnQjHZvCVE5MRtwuQ8sp8xpDv9p1sYMMrT9rQzWMc6HB6Anea2pKkWvA6FKBpeb5NkE3JJhvCn1NvJma7Dd92",
  "key11": "4kBh9VQTHWaGAUZosmG9CRp8ZGgPnduYh6TKhGrEosAEaxTgaHhhNjVxnMboCSEKNMc3uAS1WhmFcXwgEoCkz2aG",
  "key12": "5T4ATDKUjzMKtrySCS9DFKPrTCxepwJkDu4JJvK6qrk9GTY7zew1foScLmjxASQzxM4G8H9Zh458p3AfRy9DWBMR",
  "key13": "234aCYSSseuW1iqFEHCeTHrzWGBNVaqGCtwosuKQUS6Pd9KrtyFEG55s6WedK6bTeR2rxvzqx2wYFc41YkmEFXuV",
  "key14": "5sQNynNzMVFYGWQWaNZUDAPGd7Ta9r7waRhWysathvhNY7DoYsBjsFTe5WFUn8bx6t2KyN41k4hU8UvFxm7YtH4U",
  "key15": "64W5qGp4hC6h8pwG8jWX19YqooJgbYE4q46UJLuUNRkdvvESbvqoF8TWTAy15wDMJ1nqief9fjTrof2L7cTGq7e2",
  "key16": "4HtfVjETqZJwUuawHGX1taQSkgUGdkEuwfLFQTstEGyz3oQEmD9djx86SiVJeaLpbzGgF3h2vNPwjfK4bfAo1xcE",
  "key17": "4BPgP48KTsNhQMQ6NAPx3ZxMeBHGYfcUBzDd91ie3yUcjYScYXXaGHxKhJBcSG7DjQTCMWjd3s5GJozfxv2kqUaE",
  "key18": "58axiSFpVoLeojcpVFexQfgma8A5ruQUnFdyxjj9WwcY3qjws4h2ajF9mj9f9SZHns7biZK84RrEgbgDu4NoFPcu",
  "key19": "MoQYuZqnbpaKTu7wWmMf87QiHD9mfdxWcTQSSDfLxh4BAyxGWcBv7mnAgpdaH6fT9MjjeyJy6kt1ifEz35dhhao",
  "key20": "5c3huUGscXNyj9XkcwUx8Mj7QhBdYXkjkTWXNAJtAP4FrqR1FphR64eVNYpZGEzw6VZ8JcUhgZuqUwbrABujTCS2",
  "key21": "63rB3VLvaZyGz2fgYsGuNnpgwhHKmY5MLtmwduEsSPMfrhJwsKugSDF991dosrZxAq3JF9MgS14fzzDcqy9grrzE",
  "key22": "3QBrwFMstbKXJXf46hchkjeoNTW2c9S64VGyNfoQufrR3L6myZX3haYQYVm9WbtXtx2ZA3FB4re18iFyzTPQ2AN7",
  "key23": "5YU8G1DpLrUfwKVzydA9ZUQcREYtP33tt3GzrjQyiDvbrKVCRCmRJQUt5bPeTYupWSgcfJNqmTdpu35aywkMjXET",
  "key24": "4wg9KmRzXAsS2vCnKh97JidNw6n1Xe6g2cNFqSFoSkmRftuJ8zpkJtNMkua2nAVupo1covGT2pCVoEbbxnmHDx7U",
  "key25": "51ByaCwwB7pyRZWzbN4Vt7BmZu9zJTixsMUap7yZ9rmEWydsT3oZrbtHiWyzi2Jpf1usnRvA9GasydSZofiUrsoV",
  "key26": "3nkqK8HBmMRY73pkgoVZe5HzCUBMgAKnvJ8N9MCmDe18ahTpN99UptfKBg7yrwqJFApJhn1uigsxvtNanbNZ6ZjD",
  "key27": "5ZjPbiCacvXF7rpYNmqyYzzN8Rac73LfvHBKipCuvfnBLQxyuHCbdiHj2ogNW91RDmxgQPU7yoUfohVzGv4ugHXm",
  "key28": "4WpwSGwweHQEjgAAREo5qSextsHEeshf2h5RQVrmbJcArQZcJhS1Adu7cmQ8dD1fbFokEAdaDKvrRmtvRJ2TDQ5i",
  "key29": "553LBBHwey4DXpnaqTk9Fb4ZrvKuJCFuRHaHcM4odgneBtQDW9DPzNh3xpCAGoLmRbiPhAevZYAN5iwh2DhQmGVx",
  "key30": "2g65ndjH439Xq6DykBPv8xGuApkSJi5KYcWZrHCztXAWKS4dx7iD2NJRNZS6aWT52uBE7ZZ4fKNXgxkeZPWAVRBi",
  "key31": "5N48FGJWsxRznYx8gq3FQBjs6JUNfKsWxC2QfqjmQUEeKESdj8ouWNsvZQ8o7jtVKA7C6GvKRUQTnt2GGhrYVBXn",
  "key32": "4UhTMBW7Pv7jydZTsuRhXNBXo8oc7Ne1QeyDyDpu5xSQNfF1s7E4qahy16uie7pwUZaGBU4wV2FLQ8zprEEDNh8q",
  "key33": "4A7Do3SsTLfZJ1zb5sF6xTAxooSu9yVdsh1B62e45D8f2oJYANCm1bm5yQ7pXTXiEFxVdJj7HSCeNkwNcPAY9mGm",
  "key34": "3HCK7YEmbujrKiRLw5sy8FSKsxm6zHsWMxUi6f9jK9KL3r5yRcZxrKSxVNpkUB1zJsnJrLMfXnenzEVekYyVsU2x",
  "key35": "2M8DpoU2gNSYgHiEgiA9JGCxYfryaahk21SDwukh9fq9i57g6o1gadVi6g8H6LpRYuncUABfAYB4gkaZF2Ewq6G5",
  "key36": "3pArEn929hfPyQv4cSvPtLq79ehYZHuH6m8AYkfdRscmVq2aFDFKz4hHLvnKp8ftX1oLMKWcVhcvXPDp8quPoELd"
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
