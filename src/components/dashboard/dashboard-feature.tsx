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
    "2BH96jYjGozZGNkqtfQ47hj6ZeDsbDmmCNzVB2gKqn3DERqw78sXHFgc3sBeKSZoL71mcFGeEAdpHTraSYfHEG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61puAKXexj6855cseAakikX1m9m2xDh5VLTzMLKrfBYQMVTfpWNxDTPu6PFBFfZTJEFQQ1pH9yobK3TwcLKtyyqm",
  "key1": "WxyXNjF1DUwSFGdy4NcXzeMsgP6uuEdiqqcFCAEmC5P3XaPJggpt8ncZkEYeg31DiRdkjix3RADz51FaXyq64Hu",
  "key2": "5VLKYzV7gyy6gEfiicUzAuEGvyo9iisMxTQ52U3gkUCGMp6rHLZC5RZVstwhe1CDKGPGfay4RqT13EsMDHuhMd11",
  "key3": "21SmMFNzR595A9rZkDJGkViAHQcuGQ11hNSTFjdrHccwLUo9Ac1HYvH7ABwjGtorbjmghR5QaE7RZ2nmtynqHVdv",
  "key4": "63swfTk6KTFnTnbxdr6gahQjjVTu88crtMLfKqARrNYK5qxrMoN2VPG3jYniagtZeJafMZT4a5feDG8gTWZLDZS9",
  "key5": "5pVh3S6abvudCiKqyvx6NwR9zuHDML3yfgq1spLEc3WCpGzkXQzWayBNyvh9saFRRExDX8FSwy6m6NoyvsGbbwcD",
  "key6": "4r5KvX7wYyxFmjzzzu451TxFQcmWHY7U2jtW8hCAWc4ASVFETuZ7cer8BYP8op8Gh4sGShxVkZ3szPh5sWBjKA1M",
  "key7": "fAxT3bs5AT5m97qZaoUwW6gUm1S3iqFbLWBdJKCW4iWWwEm74iECWmejc7Uhq6nF5wixiCMCUoED6J2XH86aCfp",
  "key8": "2Bfdr9LWK1fjzRUDYXAxSL9SWEiGNyfxk7Y7X6aDjdkkpzArdk8ic8nPKmJWKzX7EDvkAZgp41UxYSsP3mjs93pM",
  "key9": "51r47MNs8pNBi1BWNF1fbM62Kt61UsZHRMT5WKM37A5b8aTzBhfqoTzd4u1igRobckqVGQcniyK4B3v2brMMJ4Pm",
  "key10": "D8Bmoz3aNYHEMAeGxH66SNuLx9zL3u1cGhisLtx2XsnmW7WSkvZ3V7bUi4ow76b7CSQ8UqPgzjPL6uZRBUcakGm",
  "key11": "5SjzcCEMSwUQ6kncy6g5rSAnQ7Z2SSwsYsKYiYNu3WH82TK3hfzT4gmFzdjeEceYS2NiE1dXoY6Ftqrpyos71jpy",
  "key12": "35aSBUFGHSyebeFeZh2fFMtPqXUAajpEiDbW6AtRwghy2yJFWkZQvjnMZ8inHD34LFdbHca86jPVFHMVYhbEqsLd",
  "key13": "4Q2JRgsYNZYGFNDjfHxM1g15d6A9hEKUQkXzbyVSZrSZw1hwxzZXMJXhziFiDYe9HrpE78xtM7M2c5F4Ke6b96jK",
  "key14": "2yRtkML9uhL5VRnaQLGTw3ZPJAGaMA9z7xTKkX6p3ZjUnbQxaZxXJFRsu4W6V7ps9Tvygb6mRqnAuAKVC6QjtzQF",
  "key15": "4PWaUhpTsZQ6PR9bQPXN2BRNFLJq4kih4zVMvyv9idjNPfEu8SF9xFBomv6PRhd3oTF1zgF3GuB1heGthWm5tPPJ",
  "key16": "5GKccS7JwiZuayeDsKG2DcPJy4dZ5CPp93K86C7TFASQFH2yVGZxHmfRuUM1ZzDeBWS44fpv3rFxwRhEex4tbHng",
  "key17": "4KDc3wxFdr1w2ibAYNNgpQh1TNEGDZPJHMfshBQHz1Q2huGnV5QJYTJKWa6vbanQoYBhPgez1XE4NyFZruQiCSdH",
  "key18": "4Rf71v7MJ9Y3hmmdtXMTLZXEabKdizSdJzxcaEhUxGsoGoeiEWx6zyRxoWE2KzAiqqEWFdVMWXZWQm6jjtC1PmXZ",
  "key19": "ZfcEhPwQBWSq5EaMfZhijbvLnZTFvcG7tXLKP3MAzTkmWvksj2maTZ4v6i6QYW8bKWquqr4hCnjrrZjwcxZ2XBB",
  "key20": "3zuuoqRmracGMLxKWRJnBqK8YMezwLRfUVZuLMUFRBeXJzW8JgdGM9ASUWNVoxQ1h6icVfBmAS1Nnqt424gt16vf",
  "key21": "MFnCCzm3wjYSS5eAGvXEWJTZFkMtwxiFNSu2YYA5uXVwtbzLwtjgzAN8zK1VmvVxfDdyoATfS9etTv2XiMBbzTN",
  "key22": "5GR45wpub3PMhi4YRpCSFCStdcojJKCzLidYgSkvPFtHKukxoXTUWe5o6qEV5LPDQP412GQrnxYi3epqfzRbw8xL",
  "key23": "26DtLYBZpf2Hz7w4SujywuHnJcgSL6MGjUv5nKhyQk8zqHbS3w3sEU278BqPhV8Xkov5jo2w11UCmLXicrqLPBwm",
  "key24": "4gUhcisuhH1Wp7Q3nMQsoeurbpFGYADuyCWEvxgQ7zuEmGepEm8ckoaZJxhcRbmDZJgnP8QxdJxEXiB9wy9Pe2W6",
  "key25": "56Y3kZT13XgEsWoiTdnqMAhT8ZCPLdBA3BnQ65zDESEcbE53yAWKj5yUhxwrGCb57fJt8LkSoZg47sFns7mN41RK",
  "key26": "TavLj9DS5MaMmDtMnWkCKUiHsV46aMQP1Mx3xzF8MDSBwSdXtzZpRJ4jC6QfGD1gMkGyC2KM1LYCSPhKpw147uS",
  "key27": "5v33KRY5SU8b3VTuABxttVffSndBAnj79FCkvFrLE1rCbtSQ4ZerLSgV41YzTo2rpSG8eZaT1e8YRQ7MLjVFVEXM"
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
