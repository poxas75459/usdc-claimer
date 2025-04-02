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
    "4RjopFA7mNKnkGvQr3o3tYfGFnEBuSXUS4oSny4PityMLTE9KU7Y9a5VcFFnnt9ooKUPnFGCuU3GH85Ayq46NJX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5Ehzy5ryx4jjqPUjWpttT3erw6HKdjpvQ3aS8xqZTrSjn88dJJ9aHAJ4efquUwEpBMGi4v4iUyUPNWs9VU61L3",
  "key1": "5vLdyFb5JUZ5hpSMFnCD9p25hwqycwXaPfGBMBAQHLYMZbfVA4p1qjgyBqUGeoYDwb45Dir7YCohVw43epSrnhr9",
  "key2": "3cu4MVV4PFAQXHepsaAeprFxXtodbmSadKyxRvztDjWFJZhcfvt8ASyKXny5tDoWikKXtj2hdYpw8rVjkNqRNPT8",
  "key3": "4BQp5NYs3CkoiUMBxUg8KpS2WnddbKJqDcb6oEza4Z5dmSXCVoso4ifyucts86qEBPsE9kd5LDJVZpYo9r1At45e",
  "key4": "4exiNYTQ1hxLCE2hkvEazYEhV1ixNxc21cddwtoAY72WPWZ3dmqL3fNpWCGGAJK9PVJUa5kTpqxVXtLryYTFRQVv",
  "key5": "394dNxXwExjytUW5ChhwyYbmATvNoKMAHyrP65HjYz36JXmWdTXWph6DkpzZvCQjJByppnoGkxqXSRFnsb29ZkhD",
  "key6": "5BxDinmcKgm8SMSAsH7aZPPhuWRtsDasThoyccx3GzyJmazKPUQRVY2aA8sVfgnqDA4mJAWTE5RecZFjmm2wkmbs",
  "key7": "4pnU8VQgmqfaA7otwXe4C4jnDW81DgFkQVJcQM5EQzgWqVF7eyoLjAznoKk1ias37QtDUufxC3mzWNFU5gwhxfcZ",
  "key8": "2kkn2U8eBW4yhLU6uEL3C7d4gRPBvuznwThvVYuLLxu9DiW9mqnHjHhqgQj4UHiNuLA3P6xACzseEGueLAHEuDwb",
  "key9": "2ypik7QF4f6oeEkK79xFmjMMS6ZFqMCgzzQQJMAkNNaqs766M5pVrKzUrxMUziiZMKsgf5KnQa45EgyA5DwLN2BM",
  "key10": "3M7jphaaVe2d7sGex4kseG2aQ5QByqan8NC7KwC7ucRW5xfJexYoVciugfsfZDoiCQKCYp5UzaSoz4y9N7MKjLnf",
  "key11": "42PEdrPYGMns7bSPV414dedAgj16nRem8DCyJcRWSN2fYaked8CetUBQcRmUX3B2RPT157Mnsfowxms4PbmjQzia",
  "key12": "3wnEX9J6gw2151vjxtYsWZ5WjG3iLW2f6Q8CXzmHwjBuS3LTVbVwLUN1Yb2kCKjAvd7wG9PCFAyrohRqn2gWwcMh",
  "key13": "51VYcsQj73jdqeaesKhXSxVXkpye7RNJgqB53aUHgdjP1TRszVn3nieJiFmB7gfqXpS3UeLTgE4ozSRx3eJSLRQx",
  "key14": "4eM6KnxzLyuwwESQiP9TUtxMamo8So6moC6PWbdikACQK2E18cfTfybpekGjfoCt2ttSDq5P3PyxSizd7mXQi1ZP",
  "key15": "3ZLeSxkWKz7jaaaiDXvEg8zXTitx6QvngqoaHAyAUK8EDh5UpUVLxp8REcyMfL5nnDtVHr8ynGfdqJZeTfGsu7cC",
  "key16": "4VoNqR1esPBvvxB5XtDFPJSSbpM6GGkvzMWcjaKcdY7QNxbQE8xZLChnho7aRZZhvvikuxQVzAuRjoLAiACqmPWv",
  "key17": "44fjbFpsWRH1egsaKyjiL5vGuVKZw8Q6KyCjXoEJEZ869kyaXzjR2cxBhw1S145WwhtcDwYhsSAtBnTzJsdsaYpK",
  "key18": "4TsxvAxbZbQeZrbyhjqmVqBqZ7wrCkpYh3B79YKWXBSoHgn3mkEAQADrwym27q9PHAaKDr47bvDPnS2ibULt8pya",
  "key19": "zrgYqqThb4WSJb2ywm7wi7vfnxRjnUVdSy2ENM6KLMft2Hfcrr8dCgerRx2F71t7p3XmEhwDra91QemznPkkf5v",
  "key20": "4DYNHm1yvi2GsiCkLKP4YaiiemN8kVzDUfB49XThj5p3oeQJDd8kqGxapb7YE42tRKSBx6PbDj2WBmWjNGfbneTi",
  "key21": "5zKFBiUhbAEJ3g6BwqRTmUocnG9f4Kz4uNHrE2kTCRBtR9ysR8Shzi3QBQwLPs2RubmbX53H8zmy1H4smRaXDw7q",
  "key22": "XVQ5gckLHCHKnhvJa2Vwk1ZcLP8s4HJkTWcizT8kyekGfwKZok57jUrvV7fsUZLZBr1j4jULtWShsfhiw1RAAcz",
  "key23": "45ocrbgZSRAYSMJdJFapuk9hvN2Grk5nRGfKk6pwsrEynnRqd2fhAjmXY3TtV4QX9hbpoKDwaKKhLAsKnxpY5ybV",
  "key24": "5c2HqN9SZeeM2vYQNhXtsA61ZyNgSdBk9qrBpxdJy8kfAaKMkU5dRRyQnnTpFVJQoTCW7sF2VQdHQweRGuCbk1VQ",
  "key25": "26cJ2FYNJDgePMpcSjpYR7uTSFbcgVaWzb9Z7RRNaHJHcFM669kbGh7cMaCurtkj4tCQoGNpRJYJhyWNBVLAFQ48",
  "key26": "4Q8KtC5u1kWu3jN4XHathT5gaB47LoJ3EUjZZcjyLgP2JXJycUVpHGCJ3KQVeBMEAkvUcoTHPGg3QZ3rzoNAeoR3",
  "key27": "49fe6kEioyRAUycVxESLbF2HHAgUU6wECqFw9N8F5Lefhma7FTEA2QhHmFPKYgC2GoYMy1eqgZrrubuBizC14ywZ",
  "key28": "mLK7u5MRo3eFoX69LJgPyq7STCDBR3pHdS1rvMswKhPbH9DYej9H9cBsDEPtA58RMNpovn3X5nqwpy9z3G6oQZ1",
  "key29": "2XGE8fbNCVoFz85FaamCTauJ6hWXNq7WSQVDRegpN1myvFVRsSAxEb2YD2aKxkUMLifuUvmNeWWPryPXnK1cN1vo",
  "key30": "2U1qcTTTzMK9ueyGZH3sBu5JtnLYouAWG7Jkoh7YQNpKc5kfrWuNJWkdZDD4SRdo9X9VJY9CLKWW5u5KcHxRGcq2"
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
