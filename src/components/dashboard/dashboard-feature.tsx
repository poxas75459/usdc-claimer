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
    "HuUxB6EfE7pqvYY9bULKgqGTdFoShVXQqPZ2YnShx8tAMkLYiCgaeP9Dm8KCBVMcdYbn6wuypTKrFSMgfoPNY3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hG9ToXQxxR2ErCPHQdhSqMTi3NT4gAhxVzGpexBb5R4zjpG1TBg2hMPdRLrbh4WRapJY5ZfKCbJzUz3dmd38Lh9",
  "key1": "64uD64DLFH8GCKmtJupFmvViWLAoRmAFkVuUKrUW5sWJTjRD7gJn8MduGQ8Sqpp4xdWTj4AxBd9JaG1LuWaojNyn",
  "key2": "4mUKZa5GyAZdTEjRpqPQYtoGiZH4dv2x6VMmYTo32kkPCeog9HaVkYFbCKCXBm7ggPcvJkW98brg6WfEnmn9SRx5",
  "key3": "R6BP2XpVVheHQYiiKg98az9YbLCj1LeixAYcLtemvFNYYBqGuPNMfCPc3TwMJgiqwvmtWfGWUKNcf1dpmUv4QEi",
  "key4": "Cgmqwx98SoiGcspZYLQGFGXLtZNnZhwNvZJzKDDeZHyEiiDqhW4eSYcqEZu6bEZihSBFPWagJ1wNgHo6gLU5F3R",
  "key5": "3aP7Liv4E2T4uDkYnoKgApNhfgQQcD6o1PH8QcQ7h5wphBSepwZHXBSejM85qT7vpDKToPApagprThV2A8vpvSdJ",
  "key6": "ugAEiYJEU21MeDWbnt1LDchyFnXTobCnp8GoLBAvJLXqLbzaYFnjs2bzn7p5rJHyfwFA3Bv7sbvp3sqZo5FinsM",
  "key7": "2UQFoYCFRiQ6PiDs5scu9dADJu6C1JXwrmwkj7e2WRM25dAxRcTtWa8n3KgCRyamvVxRwqUPdNPoekXpvGzkaF3R",
  "key8": "4ooPhgDBGwQcTTuNhPLhRuqvZWx2eDsGhW9GckDPZqMTdpDtgEq2acmsjxTLEoe6wz4KaMPqo55sqvLtDVFcMT4X",
  "key9": "44CLXF3x8biBRg45Fy8NDZPhDozWaBBMyrY3d4mQmB3LHQZMjhmYr4B1EoHSdEdazihxWVxx9rra82faWMxLWwq7",
  "key10": "5o78QT4QVYMddAEGwm8PQxETBbS8xC5SSuKQ7zmRxFj8PN912CrdktUqHUp6S159aBo2aT69yC8e3aDL1Vjdpee8",
  "key11": "2RFdbHrmdHCDWWHUUPER5PRDuAgw16poKY3GmaRJukFYrufmP52NKk1YtX6aeYvH54sZeozNLRrfYCRskcm54efr",
  "key12": "338q7VpYEvUHhfsqf9uLW8zHcZG9GinQAKNXzoMgb4axRHDpzEFhRKMFgF3zm8id8XEzjwLh7o8gpxKe4pdd5vGp",
  "key13": "4BeaQF1BzbwZwtCUW6u3ar8BEgS7JJQHTW6Dt366MDeohDTisRqyDkKWAqe1tKU5W9JtLVKFPocAHj43YKfdyLuF",
  "key14": "5BMDsdAFz88sMxKjhLtQEYWZyV2CQidTKDgCsvjsatc3jcBGXmswbzjZ8iXBwhjoaUm7fSW9LxywjXv7CmM3eSuA",
  "key15": "5td7vsQKnvGHfXTTbk5HBuhDCqPFakr7PJovWCknLjR9S2z5acHnTctMVXfsQQzqm3yCT7autyjyZ9BEuCipci3L",
  "key16": "3im3LcZn9GKX8yvQYPWopCsBAmzq5Fsb7SZEQTZNgztUKTgNnSo9LH569udYi1TGha5ckzBrP3gSUem5u7TcnEKj",
  "key17": "5QuVrR1dDRvs5Vss5PE7VD5Bxm6ubMPHWQrhXEewrfDM1fJjE3EEc6Kt5shtE5mSN2AvQ5hgFT7QHr4qW1PnrUm",
  "key18": "W67echkyZCFvvnDbfCpntKihotv98jr3nrHUyFTVBojKV7jxawZaL3homDLKCuhb4iotZwaPQwToyRGxausZzvD",
  "key19": "5KBP9Pg8f69pguWF3bSLfwxHZpicrwUZkL2etQDzczrCd2e4ZcgnnHaUHKQBRPMyz2vMeYKs3JVWsdaRDiP5JYnc",
  "key20": "5LKi5UmwkMpENjfwWu6KyUrKj6FEEmScwmb78CiCqvGsT1LQJjnsiatWSrA6sKnbojPDs8Xw7KXfWSgRyLF83aqj",
  "key21": "2k7v84XYW8z2JdHUizrmADWbsZPqktMEdqgYa7Ugpuak8YdS9B3PRJ1RBADkvJmvFWf9LUSxD1AvkMmXGPoKSbV3",
  "key22": "4S61hMjYMCFtsvrSW1mhEbkH86vP2tuQf1BBpbgEVSJBP7evqsQXrxBen134iAv59zJrYdsBmgbCXDiEEs7mF3RT",
  "key23": "2io2rvvUMLTm2Ki4sPMrkWueK5w2iAynrY7RthdTi9PP5Nyapu19VmvVsHURh9cFs1ZCmt5rNcxPvF7ZAubVYGQo",
  "key24": "2MYknnRZww9ZMnyeHmUcDqBfJzYs5S2JtbHUjPTWVYfNVTReiPkMqETja7772NnQuzGJ9Z2jNgwEHc8Fbwg2cBDp",
  "key25": "4bqGkMintiACHE2NYu76XGHZbCfUnrVF7UUYMRzSB2JhGSMbNMUuRcgxotrePvvAwYQ6pRwfUqbNRC9QDyENx9mX",
  "key26": "5dPHwB8ydUsv2VWq2WMjDdQ53drn6rYtAk97iHcWjnJZKHN9cvvKoptJfwLuUUJYauzpz6jcykhyL5EoViwMdBPU",
  "key27": "3bcr4MpYzFw8jMHp2KwerGhNXTLhhCPfdFfxWKqwL5fsBVtxm53nDCuEY23cyo1R7oHNNaXiueTHazRgRGebXu47",
  "key28": "VsqeABpTp9PMr7X8MdeqoiSTt8ABsBdbaUvWPEqxAfTdbbwLu3XSH1E5qdcistD9k8xTkBhgx8PWLe924WEubpH",
  "key29": "tjrAaxBY8uycazbPprBisShHXRw7uKoBMWdvzG9dp8aEJ2GwriNYp6ECLKuNLUGvbRMeWX2SFJunGQSHFedbeDb",
  "key30": "4gtVSwjQqNu4jk9AQaSJ5p3KM5mrcyfLyyyD5QwaNSr6LjKwL6Z3SAo8bBU7uNi35Y58vHvdFeqNiuvd1KLvtqRX",
  "key31": "828TAKPq6gHn1gTKR2QAe47BbW3jPcoqufbL2Cqpj9sNxK9awLbLfTZvvaZzf2EaGqrBSHtX6vzfvdXFySg5ZWB",
  "key32": "35bcoq5mV2j4bfqN4RxGKd1Cbwdcd9AXam3NSD4ZjjaRJ2KV348kFLNdqz4kdYayZ6WHRsHpiWMDDTXNCNw2DSt6",
  "key33": "4v7XSJ1hKUAtq4uBQjKDqEpgontFYKPViVkCtckW269AqLMi3FnLkcSx1MPArtzxYkCTucdVRgMj3HcQwk2YUTqG",
  "key34": "61z5n9ywAtBNH3ZxKsVvASiMAE7nAJcxiu1VozGL3cSMJCHebM57LFAKgdJKEXyZJ9F7ZVw9fxYQVWN4bMRCJWNt",
  "key35": "5qyyWt1zbrz9tFLg8KUPA9NE1JPoMBHUCrWWZAq3LpTsJLF4oZm5ZyrQirJhaA6JGHVookMoVQtGMpvL6tcXw7or",
  "key36": "4UuhRsDJSJmTkz1emnUwpGRHRgh2ex9f2u75CpK5WfFxDYvb6fasJxwCo2Xs2GHWTs9W6ZjUc4UgJ44FckEGAQ1f",
  "key37": "4LMyqeexUaX7U5c71qjRFpiMSEm1gXs25qeyMsB4jhC62yGGUKyU1GcUVTz526ysyKZ4j3LWLSgP8q5BhggnQKGG",
  "key38": "5CpmVWQJ6zffEqEUakUv4SKbYJC3ok5ey8RSgoeiaYsNjmZaY9cVRVoF6zjh3Czj7zGQCH8dTuRzkiVtxuxwXfkA",
  "key39": "5G9uh2sZLt8fRyYrkB99eUgL9D5pSthFNBqGpCG8G4vvAh8sEnpeFYYSjK34KFPTB7x39n16c8Fka1H6KW3YcKCJ",
  "key40": "4ZpfcytDXUhmmFEurBFJeLpDtdHqqfCvcbhK5wx3oZboVHhgjeRnmqJLaPMqmouasWWjJgH7cPPGZ2ngJpyy3VW1",
  "key41": "5HEay61KYeBsMWNiTNburjfUeFrxqeugbMk283mXMzGf6WkyMpnpijnUZXCxrfGokwWK1GQ51pyfXE16XX8kw7sq"
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
