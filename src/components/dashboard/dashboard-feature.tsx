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
    "4BCTzWmTrZ8mLVoW2nF1dzs2r74s6oMykf27iEicMuzdb7unZU98cSCbtNsZa4V7peYAxmKZ6nA6x1e5VhN6bggx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcoPrABzNvE7UWzatEBCpEuspxpwtifYEUU6HvZfXsAw3LY7SywmQJ6mm6Y57fEQB2i1iBDLKzwWu4zyNMeWkPo",
  "key1": "2gpg7QGT6pTmCqtMCJJ25EEHQHiz49WCPFPfG9uKEeUkLv2Y3KQgRFX3kLgNM81o7myeWwk8msD6gaigZSVGAEMi",
  "key2": "5HJ8fBAMWSfMKRty8p1uECm1ow5rXKExg9aBBMT1aVvcYwnDaxPECZwrQuDr6r7y5uXEwp34s5ujQf9Z4bvJGzKo",
  "key3": "PKoBnnW3t7YzxYAy1zBagrZgT6M5qrgX5MWyzazUgnouA3u57ZSsE5kdZPViYbpA4GTHNDYv8rzokMJ995mxGyJ",
  "key4": "xm5HuMJiNtz68eXfET4Pr63BEcnEU4ESaofZAsz97vemwMsBr5EBHSxvvhtCYnpk6Zycxf65Pk5hdPAWaL5wdKP",
  "key5": "4SV8AcUwNTSqzJtAc9XRgHsy8AmJpbAZwft7kFq2sW2k6sSsw3zj1foxPedydhf4GJNRLVPkLh7CnX5iLtKVXfiJ",
  "key6": "3UfTxeY1zmqXB7pFUYkBxMzfcmp56W5PS4xjSArqin3BKAV8TrHfU91LLs59GiVB4J5hg2PFpvPYv5y7k4ehc1VG",
  "key7": "59aE5bS1mwRB5XBsgr9LPDuK6Ao3JFjCTY5dnqdkiGEPcpoGCeXmUmJBg1MkiYXtwa3pZpb9C1nkMnt31KZvmqCY",
  "key8": "2cFD5jqhTtSL7vUFTLp9LsFYvxerEeAXDYZwZh6Haxs2VBbJVJ6XxszWBXqM1dQmEWfGoN4wj4dGQY4tQkHyTnX5",
  "key9": "4DrGALcDGASC23B5DENAUKkhiRcdxwaBfF3qRifC499GoAKrxJgWMWFoBBKKTQAg5r8TLRXUiKvcUVJUPBahoHUT",
  "key10": "3oE8ZP8Q2t1Sg2AoQK9Yd2NNNWoCPbRBp95L3c8cCzqab5Kg8UYUKgyNZ4ftekDLFkwsM8E1Qs3Tc4hNBmR9VAXu",
  "key11": "uii7aUgoVGskgnEnpf1qnQGXVMXMS1LJRKt6Tq7h48eTjGP5ssNER7zox6q1km445a997m9MrJX7EBhnhC2JtfG",
  "key12": "34kMk5w1eeXhbjpvtiwq4cdjmbfnvUd4McQj7SKDmz1Lds9atznQjshqPkpGtzwHMbm8oJ7AMJENYYDXJYsZPnWi",
  "key13": "LiRCeUyy9HtDe7fFHopkxtBqeFFF7MyLJQGHbsyG8gsoUzj1MhPCkjCCA2ZjDgVmriCWdKmogoPnnFhXXLeMrBg",
  "key14": "EtQY2vZTCQwUPxpEZbzNvmQJsUnaPSaWtj4bnzgTsgvEQPsSpRRBgzaLoSJPXL5zfqhx9e8aTFczdoxrVTVhVY9",
  "key15": "4JTfHPWSn2j9TeQJKYhgHfdwp3qFfnyLGYT2USiU94mNvhuufyhEg5FpbkW783JtYo9qbJwWSv74yBnCzPMpXY1Z",
  "key16": "5ntAtACbpu3cbFihKqxqvizsjad8RtLGL3K5RjVaXywyLkiXZN7daMTx9G8CGazLsdxZQmzA3TagrEYK1wPcSiQ3",
  "key17": "RJZkNFZA25QGtgqcqGsHkB8tLgmX4Gs3fhzRTccTRujkD5YuwEB3o2Pbh4gmCzzzQakYStsyjLgiE3ZuXEqNoni",
  "key18": "36du9KuztxBDzci2L4yKoDKHAvq8kT6Mf82VCogug5gHJa4M35X4HbzRYauAqu3UQNM8dWqonHNzBbm5Aqo9EoqR",
  "key19": "216AHaWk2umRtuJjCFkmmQgoBMnw1BQ6SVYXL89AU9jKp3F3Y6XTPVycdHQkvaBGH5EWA6qsN2GpoyV51EQpbxb7",
  "key20": "vnXSG3metCVmKbNpfq8vNnye1XqEs2giPu35GdxTjcithr6NwsrP3ZFEED3jfbPmmjxDVGCpxLMTzt222pE5oBZ",
  "key21": "UZgWHgydu2T2GP6ztky2PUDYZFPwwRRB13efFShbUQKd4eLBRqbvDZPkhjQnC9kQvhtNB4SnA83PjuhjoAVMbEm",
  "key22": "ZAHtcaV6FTdbbA73zUcJeoHfpFj2AJ5e8f9Qs7TigwnSRwfGmfACMXnCTbfmHqmoVJSXbgSfrrLxArB7ynAFnra",
  "key23": "MVyAAiZNfbMV1N19jvtNWWXpQEFocrmJreEHXkvopWzBSSWHWfdKQk6uATjqxrT2MgHPC6wqmwUcm8DHECa8d2j",
  "key24": "4qzcSYnLPS3Zri5udckrj6Wzdmeqtqy7Jk8gnoEkP3nmEUebhsFc7f6JemSnL3zmiybFFUqFQJ8SnS5ykgPgMxB1",
  "key25": "L5bvx12mXqS7S6LbyZGt2sMq9hzA71kvadYpktmyT5eaYnTzCxmGRSXe8jpyvs1qLHH3NfQTcqgghWcUeH29jKZ",
  "key26": "4frpJKrz8d23PCpAq7LkBV2cSwxJvEVFhrUCcQx2A8MzSMZGjMQYjaaUv6y9d22gnUYk6F16oFqDiLzNnq7VEe5c",
  "key27": "PXebA8tPj9TSrvfyoZCZTZMEMoCCXpwhsU5nmq6aEiTR3dVMxXzuFdYtiYkPT7xes8puDtUHyuXmsdCSP4eguCE",
  "key28": "33LKeWuP6bGifUvg8prhsmpLBVSdT9gaNHMBkWgqgEfyCHxYFTXnuomGozqL8m8q8TKXmbA7P5mmGVTAhjf5YYG5",
  "key29": "5L64FzGDcRVWPsfpKEMnhJVBpekz29eorbx85ofxnyQ4yfRQvXNB3K7zqAxTeiMpU2SzfekkqHyevNzprazJnmg1",
  "key30": "48LYZvcGF4XP8892DvAQfzfgNuT84edPPaDzGMJN4KUjGyX2AoQpWAve1gM5CEp1nY7ok8qY1GUXEx5w9D5Z4ZxW",
  "key31": "5AFxQ5zD83wWgiuz6UW35YgraHKxEy1ycnQZXNsyWGJQMXDXYREihSMExo5cRQpWYMx4McafkUcxK9o91K15faHy"
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
