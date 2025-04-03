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
    "3hXogEoXQ4pnjW3cFGK3GGAwR72KUd7gmrmJLuRXU4UXRHU4egpSCkW3tEV1JfhKKh3LJEyH5v5UQ7xCeH6qYxFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i4rpSpSjWi8J2nnrYZUHt89JxyPK6gbFRi5tkMyfBdVTB3PXeTEE6zzsSUWEu3d1BRP3PeT3wWSwdoSfEegN8Vr",
  "key1": "288CAjt6UbawLvRcw8vNmdWFvc7LcyUfRYUuw3XKh3cBDhTh146RYtnh11f1c5oaUM42xnS9uPiKr5XWKADG1njN",
  "key2": "52jhUyPVFGxrz4dGsiXC4JAmvSoVKka9fABXvUXV9ptaoWuQjA5pKAKoSMGVB3EUkVonCfhxiD3tj2oGECq8knBj",
  "key3": "5Tr2P35PVfEoZ64ix4W2xbeZ8JmSQAPAtqHZRm8nkrdKFKR37Z9yiKXLkSudbopxr7Jj9F7rT8B9yoPiwtB3fYxr",
  "key4": "2wmiLfW6GK7khVTep7P7dLwu6xjWs3uEKNGBDae8uJA16a6JXBMw4nyMCGQSRCBm3b1gqbWuvpgczYrXjvAw1Kcm",
  "key5": "4K2wRAkmWRB6qVhC7Lb75cqU3gkQESE79FxCitjWDhBQEppzJ1aVbR9CHzsbAY5BPG2dtsrRNF2GN4Wx23BSh2N5",
  "key6": "61w8JbKkGxnYNPgJNJWBAqgMYMjmsPX6SFyM1SMx9oPDAXhLshUBPiHu4HEKqHJ5cHHQoGVFUUw99gQabptJUafg",
  "key7": "iUanEAM1nZpa57sekGWcswbtdmTBnD8WmdQvFs7NPd8RAxn8Wwjg1ciLmikoAXkPuWzsn85zSdzX9E9iUiKhXM6",
  "key8": "36pgfNzaKVqoftN9xN4xefRHCdb31PATFFjGpnFYGwj4KTQttg4rwrrqnaPVYpyUbm4EChKedahTqEc1KYxjFgHW",
  "key9": "2HS1BTymVVo3sRd3K5vSiBqwC9WTHSPquAb7r7Lm69AcyQLaFF3257aCxozVvk6zkFNB5oxY3EqX3BRYrZZ73qqT",
  "key10": "NsSKtfwZkQfC8EuS6H898g8fXB7u2zHFcY498X927cB9VMF2aTeypvdqYeCbKqu5N1hjrFcUf3joUdvfQksSrTR",
  "key11": "n845e3xsGDTqQ9cYFbpWrF9XbYYLGpAfamNTvtAGcJgaHXePGrTpYZsN4XxZyaDefDvzdwXJFuygwrasxwWV9DY",
  "key12": "R3WJgVHsKo5r3iy1nZPFy7xQDbRdVBFVBXaRosKBLaL4B149sBEUHM6bbZbcCfFWeZCZxtH23Q7UEGszCsVheH8",
  "key13": "5RKMz2BRJ2xTasqFWSDzsMdw3QfjeimC6qNpWKrGt7tVEGGNsnZDt2v7bAhSxtPdc5iAwESV3UL9u3K4qcafgceu",
  "key14": "48fbjeQyvWWACf725dpp7MWKHQUGsNdA2SS7YaUjyqihQ9v1V5kdoDF42Jy4iEUDASsd7ig2BWEMCZ6f6yecZr8j",
  "key15": "61rNZ4VEFaBvyr9bjS6tsuveFh8WjkmhCEphZHTnwr4U1VgWMJkxHN9qKDqRSX444gmoZXZR6JusfARoS3fZmWQd",
  "key16": "5JtipLkW1X1aKkyoyXDaYDKFBdKBPTfcTxToxMZkjxPeYCJveto5DwdHVjh7grdPaCQCogNxwQKhNCDougpBjeD7",
  "key17": "3cqpftxNtTzn2Phhide1mWaCyisJnd4b5SoUsHdy1MxT2fYL6Th8dLYSGJroo8kQi5uszv5NHtNiaAYNB5tbbjvg",
  "key18": "5CVziKXHSLGgYj8edJruUpoZRK7D7prt4CRf7Qy1DVNnibisiKwvpigqcNeiix4orNseLvxHEWzjb4GEKDffcFBx",
  "key19": "2mA8YBCid73hUE2MkBFi8N8L7W2PuUGY1iVvpWkeyfCKEH3EMVjSwgWmBNNHm9WjmwZ7Xs9VkbraNbMDcB8jCj7e",
  "key20": "2F96UGjTP8K9qFQhJzgeCtJBuWrxGMdBqRpg1smY7MzeVUeCsuPwgPRQpKFEEohexQTvJqKfSGJopCd6nHhziP6w",
  "key21": "3WfYiqJdtwxL1CFark48HW83u5XcQUX5bLuXRYFvQXPsE5kpdhT9QaUd2hQkYupVD5ey4C9oDxp9Zr8jmsq6hURa",
  "key22": "4JgJWsWNKnferrpqBYYrEKBr438485FgbQQF46jtJWzuEH55Y2LdT74cg2BkhuMM78JDbr9hTPF96unqGJAVvbLE",
  "key23": "4Yu3TAvWZcAXQ3Gm7Z6yTAnUe5p8wcThS3fybYrJGTcmAV96DarxZrUqb3mLwHSDLH7GnfHMD4Qz9t3SrYKzqLtR",
  "key24": "5KrweWsywwYuUMugqSqXzn4MbdMamyLHGyAXv44htzWvyHiWtUpjJJg3cCXuQwbjHcEXhYik9mkSHWR9qNr42zrL",
  "key25": "V9ACinXbCcJdg5EUQioAZdBxFs36TyNymhYdJTkxkTcwQVDUBE6Vej61bEsCSuLBriSVFpV4g59tyKX9sSnxpfr",
  "key26": "6QvtUp7jMVrJyh1zoUe6mLwyHvEHSoTNZGVnXbSgB7BXXjTBE61QVv1R2rrAfW22Qa6y9PKLGB9Sh7U3MVVePgJ",
  "key27": "3xkwEr1E3mL9JsiNTU3bbcRRsKLC5ob3kjJYyLZ2AvywTGoiM18Tc7Ncjx3kHCVSzzX6gDsyZn9HpxAxF4U2PtWG",
  "key28": "4JWyQvL7xZ7dbF1WB29LyLm1xuX9GawgRjmvu8f6x88udUuL235HbT1zNU53fGW9BDiNb3KxSm3j4T8AxNaVFD2N"
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
