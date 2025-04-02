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
    "25Lgzkk6B9PbRc36ySDd3pSm9PgFovV1khfjxtgovwhPYYf1WLwnwx4swC9hEXwU5EkbmQrvtKoqMk1EQpmkLnc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLdUQJJHM1A8Wwh2VBLtKSANwQQbBvjDu9krkNK3b5WBqsbfckGm2CYXUmHLPfz6okoPoFRoRazwQfvm9DdNCb6",
  "key1": "3YTvNtwa6kD4WbdKuFxFAN17APS1HShUAxzwSRBMKGHuvHJ5Xj2XQHuDftTdrkqE7KzYRfLrZoPT49Jw1tCz2eab",
  "key2": "5gDiH7gLABm3HaWA8uX9nYV7oDUGXZWHNP18PacnSc8NXxMgA6R2YDnvNkgCS5hSheCn2MsTn4jmceVsNRuTBhLh",
  "key3": "4u1mymfRZKAfXDkJRkfwX8xsLjRmFnzPKA5Dp2G8HmvTzF1YxtFtCeQuxBUtVPY4GJ8WxNwGjqthHHNE91H6bnt6",
  "key4": "44DVmDmAL1vJsxFAdrCwUKS3H1Wx7A5M8hRMYWGNh32FS6pKDbHNQzVstFreqGUUmyRVKzhss14HzVtcNRfdWwCQ",
  "key5": "7zjPrbHZ59MVGMXfd4KX9Nyo8ctotUhgtDpSjStvSGzPbhdgNWYpHVBQZWazXbdLT6G5PEPMmuhcWYAYJAf7vxV",
  "key6": "5eUNCcEFdVRYHntqgjn3wqeYfrP9ucgPjSbuurnrffnQ84z7wf2QseCrcnvo8AMzXGc8rkcMFuP9JtCxfMgrefU2",
  "key7": "4tSKUMZaNCoJaU2J1qMYHe9E6xnDbbr3xeSbqfkZGJHB9gXGPtWmgfQLYpCCTDgCz4EnkxWSayHCM8neXRbfidJj",
  "key8": "Rd4Qcy2NdPPJan7YqSmtygW5KiGf5zH5NL35BYKnxTDcXDU7fUxfE6ZWyL1jaPUtjFYRfkP3EC3kWvWpyB5S3jo",
  "key9": "NiT71EftTHScezAX2C5JhfYy3LJQC4XHdRokYk816meyULtNBH3iNisuSyXwx1AvyFwp71kTZWPM5gNhs8w6ser",
  "key10": "3dqgY6bNZPTY731jwYTvKjFoDdLfKUPrZtxuYEjnZuMaTHSHRoKKgGNasp8kVfXwhzBw2pCFC14XCBuRtT4R4N5N",
  "key11": "3GA9bQvanZE16ATeLMZBZQ8xTZ4Rn6LpDGd4Gb8bPSfNBSdCjmeGLxN5STMUeMALYyBn2yoZd77VnS5gjwp8Zazs",
  "key12": "3VuiqnSA8YtWzuAHBmaLMXPGhBwALhfsPxzP7SATyEFip9GeU6Nj3LABa8aM1FWWuVbnLCdgtrN1TtNCRAs2mbo5",
  "key13": "cBb6XWQSMnjs5RLW92X5SXCdKD5WUF9wrerMJaG1FMJHdck6vWKTdQNMjrNPnEoYXKT83hafqoxduNZizrYfieu",
  "key14": "2yCde3TkHhXnf7oT6GjA4pEmYrZcBWhEXrNZ4ok1cnZoDz9F4jVZrtnutbPejhz5P4rVrMVkpmgVhqNphXDuNJT8",
  "key15": "2LzGvC4UDHUcENRCtLRPsRwC2nKZ43i2W6t6xz6Srf2ooHJu8jNLdH92AmPuoiNsxJWXEataAZVwpG1XhrhHCBvU",
  "key16": "5z6QfR8TQj1qmiE22gBqgCbyMnqVV26hqcTfVpyXsgG9jH9nuz2L7FAwv6Po9C67RB2PrjkChKLrWobrKSo4xwjQ",
  "key17": "53CnovjBb8D972o3nBTyawdAvyJTGoSsJqnyRwLKTUhFG4WS137rNPNcMmfNwC7vYjA9ssFSQ9RBX42Kw19BRUhw",
  "key18": "DaYYWKKtHGzmiSe8fxKvFLxa4pGH2Tovhkb45rN8cHmGud81Lnz6AMgbsTEQrM4GoaqBiF7GA31E6rpiEaPGxuP",
  "key19": "2eH3NNiTCB4rGXu8fUXfXmPTRQinGTWosrZ68AN4BFEaGYQmQ1eYTgzVTMJVrCtBVuBv4YfmJZ41QWWWdJuAbWDT",
  "key20": "3voxuuS7jgtyNPK2BX7b19KdyQba5pfi6izTVTHqbuvGWe6uCY5STaTzf9SGcAU2AS92oMEi3MZosGnvcQJR4Pn5",
  "key21": "441YieTiMFR4SfxisqFZTymeSADNBFcHmrL8nVMfJFvj7gG3jwfB5yapaPTGeXTPxN3yxSH9qxDsAhwuUuVCbATW",
  "key22": "3YjgCaWCUjfAv47pGq949V2ej8mz9mqPkoz3FP8mnGKJxHTRdC6m5KNhiVzLSGmLkXGffGF1PDExGf2jFZ16YPFs",
  "key23": "3NGYt81MDjJATxnm89h9Yk4e1V9b3ZGtQcH4S8AEGDK49HtpLAAi3svGvUYwXz4DyAF9AqNbC7jSjZ6wNhDsrQdZ",
  "key24": "WaESnb5Nu72kA6AY3yrF9qdY282g5skkFtZrzdgAovbqU377geyNa1bQDo19fz8qqJJwJb6nD8PiPJ5GPLePyL6",
  "key25": "3WZHq3cuQjcPEte6Rx6SNofPKkLGUrVdSS3FyanaMJGmEmjCXSrvX8R7PbU1tmqD97SGuoAoN4vYoEwJM8qrHwF9",
  "key26": "2jSjjzMpFf5UbozKjc15BEUpUEPi8WrD6MWFyAUpb9ifGjReJNvtiJiHy94kqdQh2wJoZmzrYuu913iPtTUcBQxF",
  "key27": "3kqkJoYYJUXmDLGCjL4EzLphb3hCFPUejmnogxFBb1YsmaaS97XAvH5kpkk67yYq9drRYcepCzfVJbcL7a1RjUZQ"
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
