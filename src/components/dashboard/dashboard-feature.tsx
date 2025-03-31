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
    "2SFFNaZp4yMUwdhL7GWEaMQd69ANHoGLDqwqUawMAsuZGWntQPiTek3ZD5D9niJsYviA8GUv1XjmzH9ePXgkouo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwXS9hXXp5hzDPnSX2sxkocU1yuPmvPFTkVcewp5sjSmAaofK4vPPbkN1b7N36624mi6DsRb1hnRhUZmmgq3Wg2",
  "key1": "5d3Bpb4xhWpSJE1siAWsMQf2tYWnQ4YtktjqwV3x5tqHhro8ht8XM6oGTs8kDemeimRF9CZTVZTqCzR8mMCF5AeU",
  "key2": "417KEeAnvcGAByS5AcjY3FgLh6KMr2pSo47LHqpQgCkUvMzBBMkd9JsJVyvGZJJHyiLSy9tcnQ48gZ83YAKrTGJz",
  "key3": "3avx4NFXdEtYPfumM6H1A7rfQKVvZM68oBWNAx4ZPMwDUXM36SDtfsSEmC3Qt5ZVttMzpSEuRjGebUmLexJQTCa7",
  "key4": "3WQGNqr98ztU9qzaXsfohvC8jm8VetqWJDAGHEP64VWiqZXJ6sqyYwTHDcU19niMiJSGKKu5d6UY65Z3RkRG8wXH",
  "key5": "4SmKmKh8vsBPiJb8TtqqvGfg4tp9ViGQB1KPoF7B5v8tTazBVtDJ9jqNWjmqpjWFwVbQhP91tqufCXTN8Yxs7nqx",
  "key6": "3NoHoYhoTjpXNWj42JapN422aX2ct8xEoHrd71uhLvh1TuUy6N8LtCifzfpSxiBG1hY2n35M3ZdggdvH56cyTfNu",
  "key7": "66pYqdpxysUy7yyN5M2BcvopH5jCP37HGd6rWkSJ4WBay72VGYi62CtN8xs7xgbzY4CfL86E3JVXzwEVQwLgRLAw",
  "key8": "561YaCVTy6cum6fu7R2VqPjbgGAYyorjfbpnsoFDk85mhw173bgivxzH2LJvTDd7HSLJ1FcqmtcBU2G4KovZBr87",
  "key9": "47dytoLu2w48Aa5gZpiXNFeqv4vHEBguizvj9N1t2HBcLrpSdAF4P4S6MwcqaE4x6S6qNtbqoEQvkyHuPrBid2vS",
  "key10": "2f96veU1fHVS5MUTxBNPzprWf2QMexqM9YgtjSngVveH2tjAqntpf2C1AD5Zw9gaZfzy39QBt4zWKen6uk76jf7L",
  "key11": "61ThfCNh1L1VtxYYyvzo4xiXdC6vFn7AdcPsunSox6Uh9HLFvh4zitrrSovqz2FySaJCg6F4yJNp2hCkJAEXpD24",
  "key12": "32bwrP9wJMFGoXQjKkfqEuznkt6B3vqw1sp7FfAcuUnktTMhkktHqs2F7sUy7tFWZFvWB4p3vki6ZUQuibzhwJJ9",
  "key13": "4PN1EAFPafEo5vV7hosxYmtXMfMcs6TgaPg6FXoQXmeujvjCrqVR3PgRBZRJLJfwZkKXa6steR62UztV8XK6E1zX",
  "key14": "3WJL3Z7HpDqKxmog6am7dzeoRS51c7aKtiVMsHt6UWs6iwEF7og3csA8QBNUqtP3HJZPNmVcwvVZn9dHeZYEujmD",
  "key15": "3KZuUE6k2eAmdgvgka9jYcPDrPX21yMAmR3BsWemYMVUTS6VTA1esNKPqLtafjrfJAMFAnZKEFSdpAa2wptEiXko",
  "key16": "4FzyZQ2xhhsLaQv9evwC2pigJX3aNxS68WXcc5epSXZ8tdbVZgTUtcm48zE8eEdQ7A93yGyRKazzssjcyFEVgcJH",
  "key17": "5nbFLzWB29FcGPNtNbsxSnX98L5QLc5DeqDpXSChqKmY8FGHYcLmqX3QEmDifoRmtyvSJvRXbXAwFw8k4kgM9pz8",
  "key18": "53h9UnfUTupb6iw9PdSCvU97vTR3g6XknUtje1PpELeUFVNykDBBtFYmwckSiPnXk35NjifHsjgJUEYJho8gWoiZ",
  "key19": "2RwNfaMYU7rdxd2y9QyVEDBy4PkPqmoGpWyRxZTotgj89c3YMudDMC8qTYkSZ1LSecNJvJYeuRsZP7dVJVknLhgY",
  "key20": "24q7V56skHCAqKssuJYnB1EoKKcL93wUvYFwDvTX4F5W4yoAb2gsy7HuqKvnWUpcP7jRqEgRe4LX1RHc3wSCmdPA",
  "key21": "23LKCrD9ACw8DVhNGnXXw5eah24nSRVQCkPrXSbkR1XYaRSSFRtpGAcEXzYAB76gTSxoJ9J5fugbnKmDXGXiTeS1",
  "key22": "2Vt3g5t5nfSRzYtfscP9ffpQemn31NBME9P6PwSjnuJy2mCqkcucpvgrAMH6x814NqAhpB7hHbWqKh1b4JrE7WR5",
  "key23": "53i6yAf3dBX2cpwQGKzCkeSdBnUtHKg5SwiuAttCPWsbHpSFTeKA6DabHmDp2V3yysmxNevafGtgudxhG8KeXnrP",
  "key24": "WE1EBqC2opWu1REkahpWJ6FrFx6u4w8iJNGRawFZE3HyRr4xSWtnB87gJRRYci9m2Dt1d7ocZ9GvsYovUWLZZrQ",
  "key25": "29CHBePwJs1UtznpprUePuuJ6btDHt8Fp5qEhNKfXmYpiCvuB9xktk92TJ3ogrWn6M5JPCSBUo5Q2U3NmAm9aG8g",
  "key26": "otK6UcMBz74eup1bHCZcNxPkdnUcV8rUQV5ADaW5o85ufwHSPjNBYyGgcQaLn9wHc5FJLmi8yCJCaBKdm3bDDT3"
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
