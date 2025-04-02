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
    "3HEMpZcZEu8oEf6YZVi44Gti32zi3pKN7CqWFfXp9thwyffnVzy2pCyh3R99BzRyecvG43uSoZJ1Znha3vzSzfi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQHALmKN8EzvfX3JYrgaNV7L1wfNVbwjZcTbAu9xtxPjCu2zrG7hkjmciLXFpShLz7wgpV3cXz9MCrBmoHBALvL",
  "key1": "4ApqjsU9W9xKq9EvVe5ydddBoyyTVhJUB36tQ65kt3xgKRDadRAPNeLmiMgYZd6VkJVTmKNfuF7X4PgsVLFMDM7d",
  "key2": "5mPFwV1EcsJjGbdCtRa3rcSQNQEkg2moWMnPzSbXPzrairCwcQggn5dDHKG8hskLtjbnwsXxyYs9GsLZ1oB3jzvL",
  "key3": "5Zi22zJgSW9TxVbqEmBkqju4t8xzCXn2hRpsAHjQHsHbNVAyW9oKguuo3S3hLD7QEBTMdz7GEtqXmRdacjnqSm3t",
  "key4": "SJ7iv9dy1V2Fh3zRnvJqWLVTnMg7uQZ9P3NZtF58BJ2SiYmffQ4NRmp8LG99FdzDm7ZHVm3m2FjvWDzbxVVGWZ8",
  "key5": "5gkU8nSGNX31TvtGKCdeMYdr116XyLMdCh4oWw5Zxdazzp2D6vSWmc9keXYED1NubAZL3e1tnKpcPsq61LBBYTcS",
  "key6": "3De6oUtvNMEtTgjfzov9v1hhVcCHJ7A8ideSdp5NqyS9QtZyiPS13EkkCG49gCbNN3gcYKYneFkK9ALbpJv4Ads8",
  "key7": "MxjhGexGC8A1AchqtcFT1TiknxGRJHZLvFWkeNHAmHM6Npejtyour4Hdz1oXERE2VoNvxkEqqQwuirvFrhjHdDL",
  "key8": "yHMJm8oxeBBxuj3ZBNdpMGJ59dCBaqEpJwdZAQT3BkrA2k6Nem8BSkj1qSXnGMooM8KD1aVNwTCabAz5jAfh1yg",
  "key9": "5pyraeWp3FTnXh5TSG8itTWYhB4YYmvDj4rzifppUSoZXeXccosfrNThWGAraB3DjbYbMjFYJrxCWHVUPBzTtYA2",
  "key10": "464R7DJpchZYwfivCwHMnsz8WVjMPYeXx9xk9G9SB4fDT6NR7CWejNwEoaBw6tSbdPdGyC4mFHG1mxhNoMNuM3c9",
  "key11": "sK5zjvBSqX4Ma7t47o3zGtMqaZveWVpkw6rNZVsn7ptZ2qghMmudsk1FLs2XTNT2rUf5SympQqYMjZUmT6r7dsv",
  "key12": "H94cbDr5oR1xtxPB1kKA4h43sBcccfhqFe5S7yorkwEpL2WGxHPPFMNbrHfU6jWcsFPRdqMfy91dRfuLNQE3Sjp",
  "key13": "C4QtuKPbpU4gQL2QPDSNfqgX5CF6xSmCWGWEmyihWYyrmVRPcPX8oJwXpnXfunxnMgUouWH6WQbZiLjNUFcdPQK",
  "key14": "gqi4qDFC2CEEiTSBZMrAiCmAx612j3p5rZiFdEVziSFx5Tx96NUzXvZBP5J6K32P6BBdtCL6PcEr3GS9Tk1piBR",
  "key15": "3A1ysMj5JW6Y1Ei1icgdTrE4je4p5yKtM2xo7oYEPHGz5fBz91AjLPzNqNmdX3XbgtKUqLcTHtqCEYs7sfCPaQHJ",
  "key16": "3UWruP8ZHWPP9tD88Yg2xPf8mbg8LZvps8fowfLXZfMsk9Ydcnr2PVLrZhYaodiN6HcaiJ6Zk1TkYMTUTfj5D4vF",
  "key17": "4fqj6uZ7c7NreaLpSfs61APvKq8sZgCiDLPCVqbQtbNzdaQdoBRG2UZ7L9a96ypo1wsgK6rvwhxmxnjBFFcWZ3ia",
  "key18": "24BQsazk6uR3iL9pCJWNzxHg3v2s9Fjh7xp5zr8WrynjrtyjBiUXR2sDfXpgKoRabJpaqKXwhfa4bWbCJ89cc7Pq",
  "key19": "tcL78Jh6uC6LSdpu3QL3H7E8ZyeAVZLUbjvGZ2PnkpV75s6exQ5fRAtUnvYCcPbF9WAT83SyeT8xTHc6Kzg14hE",
  "key20": "3Afn6MJjMogbDBwaCdpb9a1CSKTxDVELBuaPNrGLnRRZG3WV6hLk27ymSMw9SiUkfZS8EhNzqLvqhTe2Pfanu7is",
  "key21": "4n7YNwaB223PH9NCzdaRtWe3hymC2hAJb2arHhhZbvJq3YdteauJ8BFd6kWyM4Xt1asF6sj9Vg5HKeoxkxHztu7p",
  "key22": "36mu3Xw342HGiKUZ44KxS5AfDK2eBdRRJaPYMBYcyZEDa6fEEzbQpT55T4mVHMzEGD917gfFLqM6xjMy8a7iFYDN",
  "key23": "3g8o7ZT998bQNmrsh7z9E8QE11RG6Km64V2bEizAjKvTHgcSinbrUzyScoEQY4fdL83K49VNTf1CnrD5YPeesFwL",
  "key24": "5yrVKhNm4unXUZgL5DBsVwEezz4ERAaweWFZSAXT8TiC5UX5Hw47MSLpfAJfpvpxnGVERymoibyifT7FenFUtykF",
  "key25": "3gkjVanBMdXqCkCq646c97EP9WA4bHrTLDjcNx5TxLhdswjvPu7mJXzMdKqybNt8U15hkJjY6eyUN5P3HBceNwt",
  "key26": "4iLgDt6JEiH72cM5h5Bg7CzB7ZGPkbdtgRaMJ1X48mKTK8eKiXDMBB6XzaYr3UEYKgiFS7bMQncg4dS2TK2yPdYB",
  "key27": "3f6vr8paom21UsmonMYN2cXDjAoeMQAXvX3ah57M246KGrm2w63hnur3J1AMnPYALsgUFrJMsnKC4s7Qd9RJkkQn",
  "key28": "2WpB1fndUtsJL3oiVzjNQgJspEAEQ8d8wnF292YtVf79C6YMSMWsUdqkjwW2LrsBVppgP544g4CdK5QpnbhCWAw8",
  "key29": "xf7DUvGqpFw6aPQEPpoK5wGk7dwmbQMbTWSMe6ewqgq7LEZKA3Kpwb2KsMGuzYTuywQ85QHiynVU1P94cb3ESku",
  "key30": "5ugQRvzUTD8AuzbtN8sk14LNqqDpYYATCYmLiGDNDj7UQBmKJbB2sJXxYKJbbJfqdnSiS7zbeJSogRPswbDC4MCP",
  "key31": "2kaDdqGm6QxHx4q6jQF4xQW3M5DucxGWMuiBfgnP1Yx93uHp4yUKcFL2Cui2abh8rL7SCkFaMuwxCPjoPs63XknY",
  "key32": "FWRAfc9TpMwLjcyn2WKZb7DDDcze1sZcgz7BhuL6YSh7LfqhRifrKrG4auShoEPQLwiS2WVGMzACuosc7iEGbEh",
  "key33": "3GmLykv6WZe1yZFAQwxnhprgc4VV7riiwjGDzr4vk6NfSqWhGaWYen7fArkWp72EL6gnnyKoZ1oTnnQH924NiTaS",
  "key34": "2czEVqRbuE5CEUP4qaXw1YGHcN1iBf4unZFG7mwFFdVEvejk1B1kkt4u9wVPep7yb1ACwstPfqRYX5yWXQz4DY7J"
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
