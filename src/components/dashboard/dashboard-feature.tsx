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
    "2jYLnwimUoNuuPMYrC2biZEc7F9KLs6ciH8rBZM9ofsG91eQaGsojd3ErBZLdk124GUyyJexknSnYzKgdLJMjox6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eP7cW5fJqvPikSax8XYm84gzdpfDeLoDkGdES4zWp5MoLWmpNB64mngVS12eQZexn345KwiGBxrH3dcVAQjEesn",
  "key1": "57uCsh91Ff22eMavXxveRFomxwX6MUiQMsHcBJSnS4trknQA4HQgKSyLufD2qWKU4yRU7arhThCr5dvLCFEgi6br",
  "key2": "3rZyreTcDMJnYPTUx91hbS1dyNoLF4pN8VoZdpFjCYeKzcZSzWUKxLTmzqnHrfk4EDJUWdx6nLkvuPcXYXCrs99V",
  "key3": "oU25YyHS6CXRFBRLGxMThcFsosa14Y7Z8JXEdhH7E1bQ5d5Sw5DwRR7uWNoMPsLQ5so9JfqN3q3LbXGSAGjLqd6",
  "key4": "62XPJNWA86e8sCdvzKVzHpPWLhjTPamLrSfqSVYyFvm8kWwDJ5jDb516m9MgFUG6giYJPzQuuKvPRYf7kddZZT2r",
  "key5": "3i3vyvvVLkJzBD36usJ48xprUpH61fBeuTrzD2u9w93ygofWXt16pHwztfBxxdaJHpY6vmrm29KTiDrudXQu5UGU",
  "key6": "Q375f63JtUdBBCpJytMzHBJKrfZik3ta1nSUCKanzAdXzSWbVqXnD9uBcfz2d1PexsNamS3S3Ptidw4NEHuCaZF",
  "key7": "3m5iGZ9H6RFtER1yWvMaE4XBZK2mEiDQcad9ui2691Ptk6zymkrrif9XRrc3EtTCDUAMhLXtAwtvKqx1CUB638As",
  "key8": "5v7xUyrqSj9LwsKNtvbqpZ4CtqXthUYhRa5a3A7RtupSQwyfodTMD51jwy9DjNnB6oMUWuL9h18dkBJQ3uaRPVw6",
  "key9": "2ufnx6QeFBcqjEH2geZHobe7xd8YT4zekv9SE8rwjhaoBdc4W5UyLiZxBCxBH6cYB5sFVJbcMfjCYzrDe4usTDqK",
  "key10": "3UbEe8iKC15cchTEDfDJcFDfcWVWDCHLyJLVpYjHerFGNoXiVSJwj7Bz2MUEZidmNQJmoE6i4s4k4UkBs4M7s9u6",
  "key11": "2zwJLcHHbYSuVRQkDbunvXCK4MBQFqyA3Zjxtu4aJy1AUZPq6s5SXDVuWP43AyQ6Knt1R6VEP1ZaEdBAuQQoqfT9",
  "key12": "465WsKzo9xf7r8t2zGf1X7zrKnhRMWNkHYx2tN8vqjkFhw5yQQEa7hKBVvGQEqQPcgPmoTm7Rx272PbBBde51C8V",
  "key13": "3uDb2UtzBipLznyrsLEKQcMUymir4S1T36ebcNMky5sQ8FBQGff6395X2XQnMpxTEvnXBhrYQqWSNu85fnt7DEqX",
  "key14": "2WhtYyFVc4SxwovH4zx7xCuZ4CwtcuZEhASmnny4Vc13K9QRmMUGjueg9Fi5Ep5RD8jxzWStTgjVxjPsQUFhtRg2",
  "key15": "4pvBqSwpNQNwAM3inAFS6QJceGnv57fYQC9de455GDc9ipPH4kQbkz4nbHqU6nGEt4VEyvcNew9EpvBMvnp2qHHR",
  "key16": "4M49ZHb8sy7h3fjqYRwjDJodm4RSniHcTKkpQEQ7bjJVtBPYUUyCFbBeVGn26HKNFM9uHWuLYam4tRrxiM4u2r9B",
  "key17": "3efKeNTArRzni5qsdGqJ3UuVat4uYBda5EmLmhU64r4Sc1YAxv9TtsLQLN4Py12c4vx4dL5NzLHuEbmyEeSvb6aR",
  "key18": "4XYfbeLtvpBK5DVjHAffrndZtfc1M3XsTAj7Lnpbj68otLJDGiyt8W9RJXbZAabxuTe98oMpPULo4EA5zTshQutn",
  "key19": "2zq9hdXkNFXyn5J9V5AkHHwWd8yczXJpfyGojoTXPxshtZqH4g3PW6vh8gewCjDYmqHLFWXmc9KVvbamV1npgqQs",
  "key20": "YubiNrhJL6Bv73uxxPRUJw6nJvTP74cgn7T6bLQzh8M7mcyJgfCsJaKTRHnSdDPtLBLy8QYunbUHgNJbQpF4CW1",
  "key21": "57skM37fTfMTmkTcK7p6cyG3CdMNHAFxRiNU34ox2zgPTZAiyAHSfgr2LWMRfCFNRoNBHabLHWP6mLhKUaeeSmPe",
  "key22": "3KQZXoBkXFwFuoL9BeSkfSjTE1vbcbNQhY6tG5j4Qiod2wsx28zRmsoMmxhLsVscum5Zzu7KW819XSUw28vt2EdX",
  "key23": "65C4hbF8vC6E9MuC3rmjjGsuVuGnb8UKpdJtajvLyD6VyEsot91KUDUKqyGmNDBcD9ciVEeGdhs1Ld9qnz5VYmY6",
  "key24": "5Btdjh3zhKCeYXJyJqtx9E77cqbsD7VNps6VuyN856fLENKZxGXNzZJfSF6vbZF8AemJXvLtf57YWAChk4Qokvzn",
  "key25": "5Rb8PM8mfr68xRVznLUV77YYC187m4taeeneuEZcD65UiwWyELHkDZPaUzvxqsJAegKGDSYNZayc737JYojnLhSq",
  "key26": "5z9GSqxv25tPRsKoDgyzndfjcLc1UA1szqZMyBFUd7yxy1e3Pdp7wTWAw8d9YwyQaw866dvwcyxcNdx1RrcKfugr",
  "key27": "5VL7hRm15ZZ1Wh1PmyvWetsQfevoiDKoAJHyW5JVFzm4XYUcRQ8DkfVTDvsKbWVXVPjjS2DxsfhFdXkS79wBh41T",
  "key28": "FvSEe9QHX9geFK2zQJWc76HKt22axrCSbDC6MQifxnoFW225LhgGgFqgX5ZKuTTEf46rH1EzxPrSsmACeLkMUa7",
  "key29": "dNiYrPMQA5hTWKUKnV9pnT6pxDhLEZNf93ewdzqoLozLfxrcKkYtwB7LAL4bZchdTNRZ3ktS2PBauRxAq9kN3nk",
  "key30": "347hpFtQfkz9R9jcmkj3QyytxMV4M9B8dxqsMrD3FFnWSuGQcUu2bVS5cHVVGr3uufUBjocD3mZpMWoVEHE2cq4"
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
