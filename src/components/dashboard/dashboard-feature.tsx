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
    "5xrc3y2m4cEorKhojwdLV4ZVSyEyRsLDeb1yu4c5KqBCmePJ9QbWF2ReRvg6fErqorBtiApxctJ6hzM2wyrSTij7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AGJdyxPuHzs7tq7NX6Ave1NzUQFjk9eq2NYtkDRWM8ByLvBVwBMmAhVCmrwWPvL6ZRoHqarcZjF5rDJTUvjgvE",
  "key1": "61ZFB6mEmDusCGvuBwocCNZuWnFesQpwfehYQVk6JRxQzVMGpqyZdVcfWpDpTWYhTcFpWLeBhhrEd6LGiREh27Js",
  "key2": "48B4YVPcuHF5J9v9W9DuBG85HrjHRaqEZKAjAM44cDiy6nimf3NvUJfgnLYjFgftHT3EUgiXRE5LwyCXckwnJxEL",
  "key3": "3oYMAZjHWfARiviXiqw72mFA2d9joQLJJf2Bt8Du7bty8qZK8XdM9aoYy4jR2aohE43f11ccVXetMMUwabZE9osg",
  "key4": "2rG5rym7RjZ3opreVME8g1Vnv848GHYiTGnMN7VLNWmoH1GXfvUKJUQ6NNUZDs798ViJWLCGftWDiT9cPcyRNsSn",
  "key5": "5C4Lqw444RGbjm2rgN8pp8htyFpeG29pmtdTnBD9vQGowFVMksGqzphPJC9G2Hpd14i2BuJPQQkDc2wBaEUcS1Bw",
  "key6": "3vgkmapQuP7GXW8Mafew2tm6KgATPUwmUcVNawvCWHUkAHbRYd8E76szZXd6aTP7WEFqo3YfXCvBWE9MS7N6MGt3",
  "key7": "5QqRML8gbVffipxr4zwFTUqX9pwCvyyeidTFSNJu3wRDGc2GsYWhRB7puSqAxaKPrZfPbL4BKNQdq21EtnWkcpen",
  "key8": "4eKX99ASnQbT47xD72TodaT6pUCGeGELk6Pjsa626PseoNjHtsx2JTB4Q7kzDEGvPLdozMoyHJjjiUsCUc1m22wE",
  "key9": "3QArKH1Newph1r9dymYxsxm81PdbBh77NkSmxVsZsnkqHfrC2hNJvwVBJwpGp4o5EHzVrXsimshhf58e4fSZ8BjY",
  "key10": "4L4EMe7g5HSMPUSeuZM6EEXQP6fTwFvFUMdvtjgi2u5EV95w7mrQpUAtskURp1anZxuR8czJnkEMogTeBBCsE7YF",
  "key11": "3CzPFZccVZaXS1WJNcF33mVs68eUUrfSyRFdtpV3oJfUGoMw2xeFBFvEajD6W9ZZQmcjhsqgyRYcfgDyaMhBxRNN",
  "key12": "2NyBRcqk1RVNXXKLGW4Txxii5KKQ9bE6y47AsKYtgQ6BPXYkLwoBF7HhguiiPvt27TPrFpaq44K5FgNBCcdBZTPc",
  "key13": "2yu17SAo75FQov3oz7nDcJ5yJK1UQHufB3ZxUwsJcp6Twx9E9U247a86PDBzxQwGkphdNQA56SsDGaj4MDU9sSKh",
  "key14": "2WisURBnvwTvMJ1VEiL9omvH26N2CN1NNVHD1pXMQuEBSxbzT5MHwDB3Y8dgL2ckm88gX6THn4zzhZyLvQkp6brX",
  "key15": "2NYAHQHaHQHCbZFmnkfvqPv86xQ83Lnbt4pcr9KbjU7darQTEjq5my3HxSFhEPTKuKZLhjeyEbhfx4TnYKAciNT1",
  "key16": "3Z6jqMs8qyuye1uz4z6nVAyprpypV351xbhP1px5nWG4NAdgVMC44CnsJXxdjYJZLSzTD9EB4kjAXnZ41mQ75xp7",
  "key17": "5MJcuXwfTPUnHtwB2DPzSypTpqDSddqrennn9KT3jkLrFAhBrFrfxzVfQdvirMfWUASBwQZGfs7kupghEe43SqFH",
  "key18": "5aRk8R7G2kVSdpP2uifGbgYEYgMwi7rLh6dosFmEPDqduTYuSwfVea12ZK24YgcndkpPXtRRAaBHYQ8dmh51VdiL",
  "key19": "6GM1P4nxCrg1i7UY9aVAJkjcB31MrPADkoMHxAVY7mNRGmhMZnc6vfPWWWeLSDgsYf8PxMbrS7SLKfKVUXX6A14",
  "key20": "BFGjEyzY8C4dLai1TpKA7nidDew36qvurnhZ73qHScvWkHLncJWZvVtaZRQxduJPEifsnf3Gs9bbcp6YYfggod4",
  "key21": "n6H7a2Gxtu4cCWhBrmgD8cc17z7x1GQgZf5UTs9w9BmXxQFUvyDkwvxZ3FBQak3Xn1Th1zhUXBYECCv4wy8dydp",
  "key22": "31Y5ANVNRPQFNBJuWvJcScafnwvGuJK9PmfQmK6X76VYMH3tyvbUZYGr1WsyGBckEB7dC7U7vSnZ3G2eM6CR8hnk",
  "key23": "3XKvdpxSo8BRe7aveFydQDTuipK19Dg9CHLBootXLro1vKLrCxcGen9twH6Cbuw4Dh4LkkSBagMnP3kcvvG7WRGY",
  "key24": "3k391yu4iQoqWaDMpAQRANNkWg9QdJnoGYuw5zBa4bWj1bLFyrLyqXzSPBiSkkpFFNLEk7LpoaS69jK7RKNSwcyM",
  "key25": "jv9AoYZF7tHhimZ7V8jniVrMG37FZ17yXUTEafxHnAuG83BeErpz2k2eMErN6sQoUCS5GQCzDUnZmVUCx8uCccs"
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
