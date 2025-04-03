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
    "2mUmYeiDdx5QSpDCRbLEjrXZX6degxqkDYPSqihVbSK8VnR7ianzk9f4i815cjsfB6RxhiKeikuuq8YmyvT34PfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFDvfvy8oyKFdsJyFmkx57wWUiaboTCAg7Re5tbaWLTU39967sf1NtufypnDMyZ4LCAVSZ1UT9drRkrXdp8LJPN",
  "key1": "3u4at5iysd554kqK3Sp7bmQPtTEAMoURWi8k6TdiQsG3ABPLMCGVnQiBSKgNhKTWEUgHo4zEfF5iSy5jYMvpgT35",
  "key2": "221pE8Mua4kZLg5FzzHcLkEw2UY2jhauoMydAN7Up2RZycsYtPj6RURfrRjJLrFLH7xA3o9nGvqtFhZmkbwn5DNA",
  "key3": "5wngoYGtYaBCBaBu1ngPWouJiP1u1jbNwS6PgVW2SwzEGx6pVbLmsA16jnEnrmspPZEC76t8GoP3d2SvcE2K51y8",
  "key4": "5KA24drwU7VDsGYx5mz4doD2jphp3NDn1RF1W9irXs1ftuGceJrcTwKhaYFJBkEbvxLsTvMsGJMFzrAVuFNaCBJy",
  "key5": "4kzHmfrNC3pqHdQVVCmCTb84aaAiATuqEDo2esAqsKekFHVmgbQyQYEpLiZVPfAcvSvvvx4fnp9Q3ahRanKPgAsx",
  "key6": "3GXcJ95SGZBHzv4TV4tGDnyEhT7fb9HPxrH4yTdsa1XBJo657xP9YuKP9W65MueYjbpdjUTVPESfRFngrJE2zhYf",
  "key7": "3Ue93GvzcnsSZi4xQZJR6dupYHQj7pVDXJ4WLMPc5YcqNRgVoncBZEf1H1tpRWPxwGyArsdWencwqKQzdgyxv7wd",
  "key8": "4SbTuN17GyvHysWz2W5oPixNYTras3VZ7KkiNw3gPSAGLmCFYKXQVVnFycd51nQkQcRa6g6iqhuEpoCZnxuvxCcr",
  "key9": "duc7LcmvEBVu6T4LpCFuFKsfuQg6t5MzwyAEhBejrjxDER9zufB3ubycXtLkfdKrPPyKtvAioga4UbBGBoTEgpR",
  "key10": "5aHXpMUdBPRBpHm2bJHRapHJAPRVZ8u2HvAdHtkRZ9NRLnCDQpC6WuaHWfDGApwaJorh8p6ZTEmKCesooJeLV5aH",
  "key11": "vF36aU94Q11ndJ1txj1ntkB2jYgG5kVM6rJjqGCC2Nb2GYvsPPQ1XUjgogyrkUg9JTkBRRpYNJ39B2wposLZWGQ",
  "key12": "5TBPuGdvWomr1hUcrHhcue9evyQZaNicd2nPoVtbJFSZXvWLBemnkPffZwqCoXpDSLzrd1EWrykU2F1VGvSfwjwo",
  "key13": "qE3kDRjM8iXqaTUFmM3zNTV1S7AyDim5ZjfUzHpkBBE7A6f1J1LX2T3tpace1bv1EAYsrNgTAgkLxPTVvt2KnQv",
  "key14": "2fFh876fQBbAcukHdvAox9tpLHK8KSsFcBf6bd3SQtBqitJVevkEpiowBjh6cRTF21pYTQQxPt4DZv65vgbKTz4c",
  "key15": "5WjB8pcLxJz1RkucG5ippqqRuZbr4FP6Sx57LXU6CjLoDYNS6cAG9MEvrqz7RDX7PTEF88gjo9kS1Mjr4RvMonpj",
  "key16": "2UaLkvGEAQooiWPuakm4SNEqDf96pkQmda1cUbZfkhKSA5p8SScJvbY3rgyydJSPTKUVN6UQ1eoBp1jDAVxBCeRn",
  "key17": "3gt3E3Spgmm143u1t5au6TWJfYSoSaRPUYGbCp5Xkiu8NG7H2iy9xm7gT2u5qNw2b7amGL2UbYFcN89uU1mCD3EX",
  "key18": "3Fa92AuPUnp8aFUma7yjMx1b7JHU9qqnvQJv92WtYrZLJpMyrNnAEaRjqhm2N4vsTcobXVZnL8JhjFrPrqYY9dUC",
  "key19": "3whRu6M3rZDpzwHRdqaZTtJtv1n2pCYrpHEgY6q5KgUCvsyvHfme82nMmbNY1UukmyXUURb86iNnqmPSp3uSpykq",
  "key20": "4cLRWsCMSQVxo4B8VtFQDsSrF5F2SrXm3Qfqa5eKQ367USwhPW7W5HX9BWWhrdGWqq3GPLfVjXaJbLHpfDEeWkAf",
  "key21": "5QbPMXYofZaVCCoo6iQfwAzkYFrRfpzpfkGEYyZ2o3z516m733RysBZT3JR7tcrMGpwosc2TKDJFXx8L49vtzyNW",
  "key22": "2DFXHuKxhauBk3drBmbYFfm2TqPpTNc7ZYchQ9UahMWauFbu41RQeH1ppF8ZLJZX5nGtoUjGQe9vwwWLgFX225n",
  "key23": "mWxWd9FyoHwGrUoX5Ttj86Zvb5R5q1f4e1U4ztymFTdEMi34HdnA6kWNyvypSWLdY46HPDD9h1PaVaNjjDrkp7P",
  "key24": "NfWPKsW2e7NJNvpFcQvGMF2oLFcXDCKkG5p26vqViSRcGE9wj9nqVGFvLJhCLY682rKyNtygs3EzGYNjWsMZxuD",
  "key25": "4pjibWS1c6GsH2JFFfDNBxknysdg5d6evjurc5JK5iD3rtpcZYt1nWoRSM6yK9JK5NyvUZVkbYAp2FxxBHkRTQSz",
  "key26": "2yvTsA2r9g3c3nqtChu1PyhDupkQCbB2MuePGY4r4ZHpDpBRGpg2ZYWV3w3fme8B7Bd3aGdGbcr9pC9DdjF5kkR6",
  "key27": "5uRFzLXViLLWkmhviqQrqkR4SK4sfhRwSbuotkWwGQDJg34gbdyLxZy2c7veKFnqiC7fxAeKr5zbLRrcVxZXHpDf",
  "key28": "3fu11orTv7c2h3GJU3iY7Ykhb1NiGdDe8WhSvk1h46mA4aCAmvCPWnEPP7szD8R8mGtxZrjW4yeWjMGggBdH4tLE",
  "key29": "5Xa5XnxeQC9pZCuwY9pJvAXREWe6waXrk1MXBGNDGPe8sujP2BMjgGihjzMQ75Tm2feiuMkB2sjdXwdFhYnv3Vs8",
  "key30": "4rxXh3TnGF9oogSh4iL9SMwUuhMrAVTmwzoYpiF1aVs1ub2gZe8CEthdExoaJyuhuN54V1kwpSRX5BqQTQPKbe3j",
  "key31": "5aPZSpUiYSLt1Zr92Z3WEdDGTXcgqCaTmsBUm2D4S5MyFYuSfDBCMh8PgJRgoEuq9gC3UQABdBQZDmLYAJHXvXNU"
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
