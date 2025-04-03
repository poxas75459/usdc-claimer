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
    "5m3XPPVa2T9UMNQuSCtpdvcbj38a9TRSW6fpZQ8FumTo7em8a4eVJLvMnGpX3CAQoHQAqBvf772ceyZMfkvcsjdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56bMbXUUUfohkYCjkAJyxdNiMnjwzYpvwZJFAiu48XAGCY4vg75c6RHKNfegGajVtjVkWhE12aGo4P1Cd2xFEG5C",
  "key1": "2eXaUuBEqTAnMe2go3WKhv1TTcWDHhKTMmbLLfsn9wncVuVVCxEKhVGgwHz6NTZcigL2E2zSK5ZpT9mzSvWcszPj",
  "key2": "5SKiTtyAyCqMuMzcywWGj22RKz9s43BZv8espoNBx1j8tDRyfDRYRPgUnEMr1KQruWM1hfBD9LziKqyKDWq9fD1c",
  "key3": "jkhSZwmwH71f8xoXmCedouQ8oWbZmjyFAauyWksxZHo2oLTPHi7oQt17yhpJBfhZC3GsxQrxSHgq87jTzUYmdT5",
  "key4": "5Ms2jXRZur6L7VrYA3Uj6jQjdDRCdGqtSZ8d5xVyKZPYHX3Jnd2KfZivmrfayNgoBScQ4n7PRCQiaGrrojqQvXRL",
  "key5": "ZuiErGVALMJyGyfEN3waoc2eai4sDM5Yh9s46X2wa51m69o6HZ37TtwUP13ojEGUFp38GxCcE7McXLCNhLreUE5",
  "key6": "Uhz9bjCiWxEXjW4Z9dgMebC9jenGSVn5CgJduJeWvsXcsQpB4RJjVm67iBSbxGx1KarN7jNJKgZ5gXokHw92Sp5",
  "key7": "nhbjTkVdEH98yrRQ5XkKZd6VgZro4q1fqETFs1LdkvvKvsTSbQrSZazE4XhGvgRBExuJWkRQkhnegJcPGhZLyaJ",
  "key8": "4N4pSJHQHMjUszJ6WyVnt97YYGhY5FGxX7P1ZLwb1KhAACgo6FxkMmy6gi3otgNoNjWmdcahdw1WC7akJXujr4uT",
  "key9": "4j7rV4NACb7DZ2c2MDTCBLcwpfr1K1Bh3hLqWLgzze1SBX3jX4YCWMeEa61F3f27o7ftWqZ6og2FevFkyj3nbfeW",
  "key10": "g98XKqk5T4F3kZckZW32WgPaxBbWqYux9WNoFFJ5wnW8CxYMqk9buivN1pEZs1fbY3MV4JCbn8ekqDn7hT9N9WK",
  "key11": "4TN2rPFHfV9AJ7P8dTqrKAoo2BsYRG7RWwTkuvzySv9fDsncWzULQGjzCMosjtoKYEqvnDvTkeg2R3qbpqyJLax5",
  "key12": "4MJ9KC5CeeuXECNXrHtjmxzsENTyK6YAWJe252hhnZUqc3kCiR6KtMUTCBLNRwSjoYN75RLPeNA4mFGgQAAdGwBJ",
  "key13": "2DEdFthR7PgXmd7c7BaJhpXygng24LMNDnvkQdTy9Z7jTqJiAcyharRtij44pCzcNb56vgkUtkmx2Gcb5tcaAsjd",
  "key14": "2Fx2QkKMnwzfmHAUtCuXcqnUx2NtNQvUEciMK3jgT2VhmZYoBK89ZixHCc8ad6kFztWQA6cWd9oegPXxnpBiobi7",
  "key15": "4SFMFokJXPR1gD5VkowCcc62hEwgGSsyBUQoGSXiuuM3V6McV8nZqRmNN6UWT1bMTv9g4K4RbjETiS1s1TAnpCUs",
  "key16": "3TqxTKYqXkXc8AH5wb6y4VMwcbuaoT5GmeVe7KWUejfPDaTSJtXvE879b45xVDZFPm7P8rzZYkBJwJxFsf4s8AdL",
  "key17": "28RsYRaMCMR6hxADKvMAGraGpNuK7iMyFzm46pDVH4nrzMEstA4RNauu64xwZJLkwXtXAuxHukHRp6j3WAcRVceW",
  "key18": "3epQ2so4fNqETePSWdkA54nmhUFqzkWnqksp9Ak2BBUVNUKSJAPHF55JD6EaFUgdCvrFikZ76ZR15RXomx9TfwXD",
  "key19": "21LKkMBpQ35fupJQZGgVRKSCMtF9wqC86A3P9jX2fC377srpn59iuBR1DmA86FdMPuAhWiJRMbrUQZihtCDpbZwN",
  "key20": "3oee6hCEr278MfNyc62Aqb55XCudGcVZRcxUYBNtLXLXvmih4pjJaz62HMk5hfmdJa5EkyKgjajZernA87ggvQTy",
  "key21": "4R7smM5ccTXoHMER9iYsXLCUtbNn9VM3f4B5P4Ev8aSQuZUJ9Rf4jevMi78Tor5dVEtkW6NHi6w1AbZg2YjsV3KM",
  "key22": "37sJcwcvVSYdY4RMPfXXrYqcnZZ2KbSWANrFhV7vFppgDEzmUvZWCoAUeVz2aRF7x2RuAARcVbuMvoU8Bk2CPuHs",
  "key23": "4cDECxDcykmCvXYa36AcinpLRbtwLymfsM3minCAnNjsrgthWVPz1wMhPQQppAejanbRcjNtGjMrUUB7W87Jy483",
  "key24": "2MQ5EBNeXsJDhS86tBLzX8J5mbTfAhYEEwMyZ7cuwd25rWJ1Ub6FRYQunqvU9dMoMQrmVhMvAC5AgQcdFS4Wxj5G",
  "key25": "57ZSMeyzHgsvRwFZXUnmn2d6yKnnpWK2nRirvV5YSMzY6K46y3eqzdGyL8BgoQsttRKSCnqZVH8Y2V5JDDLi1pxE"
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
