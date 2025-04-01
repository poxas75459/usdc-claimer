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
    "4XPA4P8Rw7tRbaFstN8x3ZMVgrEM4gKfzZwbs6D1SJXzoQeFLP3pxZVyrgJJvgfDSoVNPhKSgxTanPLPZayXgmBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sP5HWCYMDc2dvDDwxAfCcCPEua9a8xzUTMsr2F6TCg6ELML6bsn4Ly9eAe1VNT531ZGZcczdSPwRnQfSHBk9pUM",
  "key1": "2p2eFFP9oRVjVVdtXYwEjovVX6bHsoXmXh82g2hqXUGTKMUmHhkNAZn2t5D1Sa57Rz2KKt4CmGrwDeD9nHekHEym",
  "key2": "33diXDEvXu46c6cMCnYCFDpQ375qi1TEnzBoafieMhbYeAXbMCz32mwVzkA7ZEPjyibVRrtWxhvv2RHyqii4kauz",
  "key3": "4BJf8iiVsnXRPAU1CL24cwcfRkf55CtioBFcRPewNyeefTJ2ZqjDuCSfN1ZZtPDj4rs7Vf2kK3jgEPYEGUdTtxEE",
  "key4": "5oyuv4i5zwmUHZaodGhFSU8hQBr4wY2NLgfCVeHgfAY7grf5jXzpFhAb5ZKgarvyAHWvJo6ooSDmkF7Fh584Ls5y",
  "key5": "5iZzxU7EhkedtWoqVuba7vTpY7ZibMvfVMKrZvWzMMjix45Gt3UzgbeNRJgXLrZtGHUZLKf598MgHn3chLcDfjCi",
  "key6": "BdbdZf9ck7j715BPKvgNcPR55g5rnzxVhgYhBXUozqpgJGQujHKENmSePWo36VWsTmmX3XQywsZj2QKjMzUbsCg",
  "key7": "7g5PLvFs1LMQdoFatj2HLTRh3xPUEQXo9LoyDMmeSRiKvVzvQfbMGWWZRG7Xpq2axzgNhCb2JESB4ucbHMTRt2h",
  "key8": "4AvDYgAYz5VXhXSKB7SyVx53aRwmZPgAYtg6G98gjtg8NopTjfP89jzg3gC2uHo8f928UaUvcFb5zPgDEcRdKDAF",
  "key9": "3CMpRECVQ2HwkBghZL2B4aLaFq2Aq8UZMr8Jqfk3bPNBW3aX3wAoJNezezAGy9VTHxkRjaZSwecYAXPzxRf1pS6r",
  "key10": "3uGhtv61WetUu15W54R3XA775LqDxMkBvGR8sCcmCwemQGi2JhStgdz6XRVVdkschwKakN71mA3Jrtuv4JQFojH9",
  "key11": "2dFtxQCiypRtqr1HxscVX7ve5DnBLS7LgURaYNPNgHgCSBSouetRHKiWKTb1mfLo8rK6gYeJ6dyQDmhQWQhYbJZV",
  "key12": "3QNfU5HirKnazYNUQwMgvbVpsGpJ376JpakTrTp4wqNBouosUZtJmjWvmRELQ7oUgcvvPU2oqUKB1gXNpDyuzb3y",
  "key13": "4JVDUPffFWH91bUF4HWN8NaHzQaTF2twrGfP87zfg4VWduua8f3Frnq8hW8i5bAYPcFKgZXW5qz2uqU93VYnBaxs",
  "key14": "3Fp4Zqp3gE4BpPrtigAbVwFiFuTRuCCrS2rLnMMVue4WBWkCExpNThpX5yuhqRU6nwJfx7U8SL2Qb696ekLrhSXz",
  "key15": "5A7DxgB5UThivmMcgeepM9VwiUvratjubxKKcHqPTekv42X5ZTZQ1GG9dDJTk2x7Q97dEb2pU6g2LFjhkMTwTYP7",
  "key16": "367fPLGS5Nj9PFp16CyyUa7uvXgdBQqpEFv8Lm3Z8WbTzChgq7d1H515fVj2Hi4rUW8VyxRonUwkb5wD1JwyLuF7",
  "key17": "2Ex9qDLv1ocG7wv4fSo8wLZ1WKWPbHN2KvgJSRovs8ovR27yFWLi2eQQv53zrhZud7Jdi88KJ7VjCdMCBbek9QNT",
  "key18": "2XSWTtYtrkeJDgA3BAkoARQCUDBXNYwCitzkiyuDtDb4SWC4auQQjZaHVm4axeAbZNgBDKiAZLJiLfrfMdxmHWHk",
  "key19": "5eicpj9yVa7efgyacRu1Wh9GM4RbYcQTCNktv7K9hexoAyjUVteZCioAnwgK89KdRbvfM4s1AiZBgwaRUMqUiTX9",
  "key20": "4USoQspLKJGgUDTC74prWjnVwyHVky8Mk8gmSRd1CwMpkF6PgUPmRHLECDsY2uDqjH78qCFtt8PF9L7v1VdHCaao",
  "key21": "5bFSyrTxPfkshX6PtyEQexeNPPT3RUgA2m5V4PSQkHQtw97FuSpnP2Z74QVZsWzcFJrVf3VTSsuquCYqANbL5z8M",
  "key22": "5Ty36LGxMZtNNqzAu88fPxaxgbgy5Kn2rVscR2LrgCCJyRCkAJP8fRXXkcaxE1Nigm3HLZZu3CfS9uLefKyQxNTX",
  "key23": "4yphhATqVFYeJcCbZ6uhPPk5zEmZV6T6XKPV24puTckm9MuFdZvtHk5U3WbjSG1sgsYssgwTRZybLQkiWVosRY1M",
  "key24": "5sKvk7vpbmgYsu5tbggUpPtCmhufoNp8HfmaPJjbQSAt78izRbydrrKV3pJtyNZAoENES7jVZfr2y8KY9pvQtJtZ",
  "key25": "4wjFmGRKizyPmVcrundnrJsBswpXoYeKrsRoUkFKUdh9SF8dUtF7grK5nGHCpjvND6JQsNW1hJmWDmCapiCVJ9gv"
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
