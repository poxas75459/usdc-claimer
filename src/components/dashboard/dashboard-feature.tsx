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
    "9v51pAm4JSMY71YBNQMpaLMdyHe8Lq9LURE1QiYicrWNGSi9tqxjCCLEw7w6NBQF1z3vB8pK8tHHi9G9vfZvsu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CobpsWum3WiA8cHeFFnCiFaGWyX5Uv6TKBTyxCV3pEzrf5cHh8MQXsFibkDcEDToATfgd3KdyhtgS6KCY4X9mkG",
  "key1": "v2UDP5puunVqpLCi1PH2K2jyBWcP9kcPKhEf2CGeZiPF25P7X6tABtRFz2ecLUvWBd2eG9AE53haGtsd418Xws7",
  "key2": "4EoswRvTX7FFnhEPvRsy5WmbtcW3anU6DXb47yvCTpzkgiG2gjUL9ty6Td3CFzEvHCGNZnnGx8GNog7zRhU2rvRq",
  "key3": "5ZGoCheh49AVmcu5E3XXPKmqM9MmiWgpNRzaduP1NupZakR7g8hMY7m7kBngxCRk2YxzEQheHHmyzgEEP5HLbSmf",
  "key4": "2g4MhEHA5wPBvdoc76FDoF7e54818B5Kxv9eyNN3HXdYy3p7H6g9Gns9kuRWxk3wqFJd1r6y7NLjt3AtvBzE1Qdt",
  "key5": "5gWWQbNsvPpVSikT2Y4r5An8ghyDR6xqWyj1UK9fBREUudyT6ugFaqNYMtymUJdXuSzw9Qsbc3EcqbTodXYbQkzy",
  "key6": "4wtGN8KLChHbkhMff8A6Q7S6EwfdCmefRGzVpb9P5SAVasnQMy62vEyBV7suRTkZETRshv1BRzYrfAzPbV8h3Wtb",
  "key7": "5nemjaUbWSAtYDPSs2tt7ZdgcGQUCn1FKomhsWSU2XfPvCmSVdajW2TsuKBBHRVsZCSKMvGPvd6LPzDpAVXrJTD8",
  "key8": "4Snbqg7CXEZAaL3Pcf4uvRwFeZyvTV2A7DqApzC48GZw3LsBdcWSKWqud8RcxtJSh1acg7VBkqeTGB6YcFEuqK8b",
  "key9": "2x48fhqV7nycB1VaWfHDRMEyoG2gNbSYXMDCXPZZokuAF6FTqrANKBUWECFG93U4WH8HaJVz7Tc5JLFfg9w1zELz",
  "key10": "4tGoC2RQJdt2Hdbd6We9nYCsevBwePsQkvFpk9ojakvSzkch4UhNBcUMVUCJSBcKXLQnxFZf7vh1SkUgUGv576Mx",
  "key11": "YH4CvsX59GY8iLoZNJz8ivdj44zx3HhiqYCc52NCvUhELUbhSymYEXgDVwaHLXg3MUvH4GoSiUS4nVuVucAcQge",
  "key12": "3NKhDG8v8VX8daUDu7ysuvxHgUDtQEmjBR5SZ3UwhJ1BHjjy1hFyNBgqHJ7V61yTVHKY6s81KvHEuSPi1fXW2pYX",
  "key13": "3FCtomM4zLbvD384nMq5AA6XQTwtpogJEytNuV5C3p6eTsoqxcQHdPvDmacrXUXCCQQoKf5nVAJkT3W2bKV5t8rM",
  "key14": "mFx2wg9uhfsbooExWySfxo4ESfXjdidkrVBcRuMNKTuEASyv9tFydEwHwXzDJbboVdsCCMbv97YVqVVankLSAGi",
  "key15": "34BkdVcF9KiDmQvUPkznyNwkoihXRztTs2QjkN2KCodNJNjv4BVgYnMXZzbzZwShbHen9WwjPehpkceZxTzpkrCd",
  "key16": "3EtzHwBRsCJdenTDR3ZtpbHQ6DNJTLpQhx5ny1cEERmnktkK77kcHPAD6zpaXsztjeSgqzyqHnZys6FwUkLF4Qdb",
  "key17": "8BxHU17C4tBK4etWrDP4V1XrAKFcZcuJSZ3FADydAaYMLVD4yohvwHjNm4KMVBnSWJxNBcejq2xd8xPg1hEsfWj",
  "key18": "3tby8XRm9PtJEmKcmLBD42Ys6dKfFNzxHmCG3LdFprsbi6NqYgpGPMwx15wqgerpyQf9U6rBH1SNYU6ZG3wHTR9k",
  "key19": "xNYu44BLijgq7BwFE7HLKfWAPd2A2VAMruN462wKfENGPFs54cviyNPpXkVhKvcmDrV5rUib4yLZJHcHEUCm3tF",
  "key20": "4v5YLgu6fWBkfY2hiBLHcEKYybCTg2azCDtThn4yQj6xyzYcc7tbusY6kiBrBErZ5BmnbRJ7hsYYDxE5XZaMoGqH",
  "key21": "3JAXuoiykVczAYiJ3hy4RZBn8sR8fuQHbjvPH8QMej5zcR26Nm7UPJkBonGT5ja3oP4B1eZVSsxtTqkQZcATmKo7",
  "key22": "3BociDwfhtuxCmWDW2XhWZHLZGzBbhb1o3kRzH61e2i8wa4nCjRHzWLPh6qeAKPTqxFybgFtLBvvWbPNmKrienRH",
  "key23": "3wT4DdG6SNm3kwdTxSTsemPQD7QJsFTdNynv3DEJJEVDMwEpG96pFe9mfpW9Vn7SZSSnRxXoHuVmyUE5H3V2Y73G",
  "key24": "374d6A3RWtYQNH8edfbU5hRNhxDSGiFiC2hqNuC26cFLqwwoUVGspvVQBbuBxiBNzXsQFn1vZ9LtPsooFVwn9zsj"
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
