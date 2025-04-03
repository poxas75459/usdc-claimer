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
    "2Cwujp3cK5cGkMfzJgdKPjnJnyG3SSfLMYcVbzqSpdZZ1M48kgJrkhsE7F6QtMW6mSEGFeqwEjVnhamkXErY92jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XSBfYc3AGDe7F6k8bmHGx7iSnZuadDYPzakXeCgwuTTLHvoQrXXBp2ZfJ6C4jKi8YHyi8mkBkn3wxR1RKx1cSC",
  "key1": "3sf8dM39JH6rZnpeXesm9pqxGYCxFUr15jT7KqcYcTquChEPtYrQNF8Z2NCFDS4auzQBcqUd3DV4dmuysHQXy6qi",
  "key2": "5krdmhqy6f996WsYDBvhd2ZzZZSQHyNgmcM28b4qBjWFK5n6UXPQSaDEdx2eEt6UnAUojgazWKGRSApRRrvXCFNr",
  "key3": "7KV16RV5hGEMECdoFVmGZYmZsS338JZTV9GAzDebTkaiDDso9knbhNjeNnKJ9R1feDzNbRZfdngJ2YGUTyuRgTf",
  "key4": "2tMuuAw2c7nBGNhSArtcuAuPwVx36tsuhopLbHD5cEqgxyHwAt8vwSnZZb9TC3JeR78toQgii76v4juYAdK6qAbh",
  "key5": "5H5qdc22oPHDsWyHv4FUs6GNyjugSWVtxZFDs71cStsfckDSSTCc7fNg17kVLvhgZ2uggfDfAPcZzvASn2mkm7KQ",
  "key6": "2KNCKnELJLKsV8SLeJ9tqAKekUePyWtvuYq5srreFTnkvmhE3TZoHUpQMoywYzTdJiud2viFG73wpDefALHLdTT",
  "key7": "66mKKkSHibppQyWba7CZp83itEmsAsAtX12Lsu7AwyX1Z4w6qRCWxSB8MhGNYzZuFL2YV5u7MNeEjSMSxuJiwCKX",
  "key8": "3hddFVF5qzZFGFugnuRV4SEtannp34HGA4rSHTWxEuVTtCWbVZvJ7VDEg7ULorZZNwHb6sR4JZy8bfhE5bQu9ETN",
  "key9": "vZ2i7yNeQhMv8y7Cr3qNKoYVQN3sdAETdakYDvaZQ7ZfgxK9wqfEY4Ft6DhT2b93jkwMpmWQqLV8UFcFzg47k8k",
  "key10": "55msgMjxeGfjTkWPdvXL63sXPrYnXYAVgJ81jWKgMf9WW1AkePoCEaqsjVs6idpy1xojBYXCkjW93DrEuNsypMH2",
  "key11": "5qWgUHz4mVSk2ze5ptkWMbm5TcdXj51TgETPtSjq8vwztXavyYSWWtPTz9473a5NgGLqix4cQ19bSXsdT9zP3Nb",
  "key12": "4YnXiGrQAzuywvLTeBUmQqdYH6wH84WZk5iFbAHk4LoDAiFhWRNiZtKuMXWrMKQ3HQqLYXYewKav2TuotC6aF15U",
  "key13": "2tgW9VuLoZJ29twWWFVDbBDMoFizraDfMDZaK6HSBoA9M7U5puUN21mVGGUFMiaRDC2HEhTJRGvn8GYpx7fukruL",
  "key14": "2D2mRy6NUyLNrMJLCc3gBr6i4D8eh3KH6HJQAX1xBaq89wu8YgwKaTw1oY13ybw3hFQPNLEvbTQAsUV1rwJ8w1Vy",
  "key15": "cEEjUZfS7Kx8H3X74XKkWkzg3PQoUmxzNAMjp6tCPioFE5roKESTjsAeVMwn5i1sK69Qspa9nypbSM2jNc5RteG",
  "key16": "AHCBQt6UMbAuABZudjmEUk8jKvfkxJvXe2zeUCUWrCZNhfbGALjHEeeCtwardVpWkWKArijM1CV3CRuxPGR8DHQ",
  "key17": "53o6kD2J3w3f8PhqEPoLhmd415EWSXX7NyUKeZCE9hBDi3FSqk5X7GeMmPcyLukdLdw7EUrmot41tK5bA4N35Jor",
  "key18": "9oVtx4g9BjwD9nj9zEoGSvUHUUnTgxSnn1PPP1HQ76aShHkdFY6aWiTFt1Nk1Mr1Z9bbrfq6heAcioLpgN5kqic",
  "key19": "5YruF5P7avbngMNHreHUhnX8JLYAyRpTfjFmHrRSHMJdBhU441N5pdwtBEs9ZoA1Eu4hTMTdLTqbjZ9NTuzCa1J9",
  "key20": "4pUa6xE3r4JA1zntyQJNMgsSoEoSoFAjPvfARBGeCMi9z8NPhHNHB3raCbRhLvDUSLm52R4fjmp6XPwX94a5otFo",
  "key21": "4eaf45ksPC8ivgbw4Xnb9dRB7Sjzz2qqQxM2mbsjiSJV4p2orENt42aGVfYsUW2xouyFWVjVHNRnLQcAy7vv5ptb",
  "key22": "4c14XLCkQuDyQ1Hd66QHct5qYuFxS9UG6syPuvtGXZHPQPvMXBG29AW22UxXr6CHRjtf4Y1hCrrM9v6nvRQnVqzV",
  "key23": "3V6qbrPebtyw2TKoHa8YFk4x2YBCo4NaQPPCiz3oYLj6PY8UXCAiU1VgU4iBfJ5hQDGwdZR2uHfrMhySUTWvR2dx",
  "key24": "5Dz69sbqJS3rif255NMr8FsY7AtFQpUvYfJZ58AdS7GGsUD7c1ai9bdQFhdybPjJwj4bp2Q9EBuGeWEU559M8cDi",
  "key25": "4LGcUzQkckcigHG3GF4HE4SVEfzb4xHSodqdZZEP9MLurGorWRGAEodpk2mBjWudESJZNB1aZhrP2FXK9QnQdKnr",
  "key26": "32F9jnKJqvLeFkvEPnMjMK2KYQ9a27oi8biKb84W6TipbWSVrc6ZZrXCnLeDccQn8J17hi8shKN8nBMDn88bpgwc",
  "key27": "3F4H4aa645t56qDrJMUQWvaCnRdpdLfQjgzoyXncjKV27YKTcN1mmCu3casG3WtmtjyD2mDLva5Souqo2tderevk",
  "key28": "2ZRimoq3EowMJ33xLc9umsMdJ5AwcRJWHaaWt1nKtEuzZ8JMbT6mHRBcoHvmx6zYj8smrjNUb784j4AeqGFsCxCV",
  "key29": "36cRVVYfrqzvaqfb1nFZyaGjtx1UixtRJa6QyynBZhTr1YnMmT9p9napHxX8goJ3N4xdwH7ndExNJ8xhU8aKGzLm",
  "key30": "4GKv3nWGT6LJNbuSCTZeEypLtZ6Vc2WG3kdtKzgfgKN9Rm8piZaoeSeSZQS2x5YEK423hTW5Z7XHyVPAqtPTJgyx",
  "key31": "xKefEuznfcznQ6gchHN5RnR9h2W8WMAGeb1Gb9KRTVPnMyhoGgQPofjiEazVQV2c6yfeYM7Kw9C3H4LHZYR4WPx",
  "key32": "643Sua2N4DnQp9go2JvnuGrK9uAaZBU8B1m28dnxa8ssh4G44hkjzShxVMpNAnS86r86MMB5uL5BRYDgAdttW3tH",
  "key33": "5zNG42JPATRJMuhZBeH2XXeEvitqR5gJHeBAMMA425kh224z4NMKNr4CVeSyz2cfQ4rZp1tY1EzhEiKMm9jK8FSL",
  "key34": "2k8118dv67cAWNrq9oBgBE1fYF2i4inhAHfAeShQbGSCuANbnqCPLCSSLtYPCABcDQ1foGN1xNCrxZhCLd3NdBK",
  "key35": "8jpaMVcuMyrUBTSUj2bgNVQEJNjSudwstuqv1LSgAqYPi5nLDHbcFmn2CKn52msEv8rTRrNLu2A15MYcQsjTEXz",
  "key36": "4BuLWWMTBuAcC3PJDqCS32Uq9DCSJh84nmYjynnVHxZtHhN9MkhgzHx7VuHBfLbCTCES4yCYPrbC3LqW5iRc5eMw"
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
