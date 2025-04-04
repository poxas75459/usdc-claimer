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
    "48AQJAjs1RSvyd9dxfTNmJW8fTxi7SRk4E2KQr6zsieyjfVfbwmV9hiGg9NPyXudBdrRKoeH3k97rW76bL5DjFfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjKsUTYnMY9RuTwnUuF1hsofj8TnNyC7bUqPbvHHKiYrpUGi5eHcGNWsUc2CdX9Aacw5hBxcNV5eSQcN7ZiShsm",
  "key1": "52uW13kvzvUkZS4WL3Ei6S6NEjPhmkPBShiczaPRaUCEuVcyfQ8fJArMJbemgvSjtyq9ff1XaTiCEEa4uUKRiYpm",
  "key2": "mLuXHhGkDt9x9FJ1PLQ7jKzJL1PAZR9jvGejrPcjJqq3mfCvm82PcQFkzQhkRYJbpqgRX8QdGJpeXkLFbFfzmTA",
  "key3": "2HmAg1qfbAwJPFDm6KuJyEk4EnAfHcfR4ztag1FDCoTVRgubmChzVyybm44mpVSbPmJFv4oCqH91xvpWYWymKn6U",
  "key4": "4jVMPm4y5KoRBnYmjTNpqMZfvKWzdfF9ZynDjRZKko6qbMkRdfomav2NfvezAsADEeyujmhskw21b8weine71xRt",
  "key5": "3FejosLUhRN18jXjhXdo1nRgPkJQk3Na6jHiZGe4AAakZvGBnJepvLCHLeuSmvjYPLuZAwR8HJ3YGj9oWbpRktJd",
  "key6": "mBfYBgCK17hZaJcKZ6x71inYmpWwZupTqud9hnfPqUJkFP9EceCCfPH9moJV6gJKGPfqmnQB7XQJ58rpXtho528",
  "key7": "2AanFvDRLejYX4cyJooksS662damTNBeVF41CMryqG4Sm2VV4dPYYBcf4yrZvJseunqkfK1UhpwBNd4MqWTdJs8B",
  "key8": "3Sb9mdvSk3VSCsgqMDhiStGtrpvfRSm6jy4NMGAX5Mygw7H762gRdhzZcQyzPgBsFMxAzbEr2q97zfFjh7AMGzCd",
  "key9": "4nxe7opwHsDqxtfZboaSFZjNJxvAuuxptCmFUMzFQBeYNYJTC73zReFNKuEYsN5ssaNTXyGuAMucHbYBigZ1uNg",
  "key10": "3AWdpP7QeKFgrmy4QQ42vfNM3nkSpL3YSVZg74d2DEgBgpoRAnN6fSQ4wi2Dix3b7kK4mpA2Pm67q9V9wdsqXb6d",
  "key11": "5RnAngCL1PiASxS4VvLf8Tfbzhw3nN82PMikg9SjPkMGCXptsDa4xj9m546XLnu1EyPbbGPeoQDdV5J1CuQ6DvXg",
  "key12": "4rfQiGjoNEWc7TATgpUFxf2xUK9vz7Ado3v9TFuhKuRTRqupj1MoUm14i8NQMQB1ArZnkU1amVm9PQet1nAvzwwk",
  "key13": "5xLETepxhNbDvTgeHmCk1gWADCtfzS49wWwzCz3PyPRLitpb59RW5yZJrTH49T8Dc6HpBDeZTHmxE8ZnWkckCa9P",
  "key14": "2tG1mbVLTKPus6QumrDJY9t2i6pDrqFZBmwfH1mm6LXvME8HStjvBR1fKGELhTM3uAoSkZtUzBmNzHSbHJZGPxwn",
  "key15": "BK5YNcmMLXkeqGciZzHz6gNMGoFuLEFnao84aCdixcNXa8EGXJEhw8Q2GDDg2e3uXrvN1UWmJw3WRk8iHfC1dhb",
  "key16": "3RDcgTieqFEFDDcfAxr25fYqVasyBbYM9Y6Uqzqzcwm9Y2NaqPQobJ2uEyrCCHNZrSm5qAhhtEA8KcrP9pD4ukkt",
  "key17": "XAjhMUykMeVAMue4Q84m7fHQuJeUQCqYaffnU8sK792woFQC7onPeDuGpEHHaysDLhoj2U1HEz8w3AbMuBwwcNm",
  "key18": "224h8TjsHh96CJFJ6Hgm8FmcGtRPRKTLbx2ujgnXEELZniVXFtTzw8SaBCWks28wfEBpCmxXT274U6FxyEavGMEB",
  "key19": "5uqZH3fCmy8gNDVkdSCCZMdc3QVPYQgaR5FnPsvx1BKdAe5uH8ai3tDwkaB1Lqx88usNviufYN95dhkfRzdNUeNA",
  "key20": "2oyPnG2Acn7QwscFixDPijgPcoweoHE2mNzuK4JjdTPqz8XDNBuZtLdFBTqVYNfLyBZtkrNPhFvdL3hZ1bkrpEnP",
  "key21": "5xqdHbvF7YDsckedEdYhgq59ErXEpuoozzgksUQ7bBcmfmMRoq7RJ3yf2QQ4xcqpuuH3yXXSrytoEvq4xmoBtJT7",
  "key22": "4snLE9xKsMSaNXMxE9TCi74C4NdFWX2986VEDqnwb1mcDF1YYAHSZxB4ZGM5jdcdVZ5ARqB5jabzWy6cbKbGex6u",
  "key23": "2YgW4bdwVn2yrE5xyyTAu6qLLX36Buhbmfq7fdYRpNUpVBnN7y5LUjnu8oYbbbRVyuCy7Y4QTWNETeGtvfk8PY9u",
  "key24": "3vr6y1MnAUmfGba2dwCejd5Vxiy9R72RFUm1FLEZP7VBYLRxdiGdywUp94m1jcw2WUq2suLJhx6k7ckMcvDQ1E9p",
  "key25": "5b7supexJ5fpoBYXb1b6TvAU3h7j4o8JYWdrzSJBLYwJhAG8gzA5gqfToeEokLkPMUWUnZWfpZioBxuUrAGDg6s2"
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
