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
    "Z5gobjnu1UaCCLYZFHStHrhAnYukeSYAEMYpM2ywVhWgrRnaftahyCSXz2csdatAup7iZRrf2Lei7ZjTtqyQ9nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YemQHBxD1Le2EU2Nj2wveXbYSqDKHKw8dZHbieywQP1jtSuqH5Z48VsCtZSGbv1PhPQRU9wfUigYZuoJsbkDPdV",
  "key1": "4q6h76giBT2UCf8WNB6yqAPaVCWzc6uTVdhEmH1rCZox8Nqf317J3ZjMK92AgeLew5bQMDi4upyaci9VKGPfUdrT",
  "key2": "3K2A4YQDckKTvb9z6qAwLGWmFWXe4V2TNbT6LHHsixaxCVYipcyexR443Dez8SZoKQVmLVGLtm15kTYhBXmSgx4z",
  "key3": "4My7EiMtXHXoAWcFDxUYjhbMYvKNjAezwWyPuAKZjQ9e7on62BAQSw3YskZNXjvQvszrdYYu8WarhVXK82Sz1Gds",
  "key4": "zCCZwLzw3m9Qnb6zNLBYijDHuh2sw1J1w3Fzz3DM2DvukYfY784Eg98garMAPg259FLVtUtFzJxdF7H2Vw8pU2K",
  "key5": "4MceyqFXvYrSLELMEPdv4Hs49iqTJXXhV5gJ1CdLUxBJuavGn2BgskhH9Hun3posLajjPpMiRM1JMwXBe15gigXS",
  "key6": "3pgvfpCwafhWbfLiZtut4K16qyCaqQGDsMVBe3sXS6VSJKkrc53TF4AeknE8dMrUxgebNwk5jA8cMn1MdnmKjNNT",
  "key7": "2xeSsjJAtvSxcXVugrfcuJFuf86c4TgEGHNBdXWY3g1FSa4de8Cs6bMuWLb2mZ4RYTFGgfjWRyVSW9Ai8ThU3D89",
  "key8": "2F7mJvxsEDodKuZwWkuQ1EiKbGAPCWGG3m4LvgNhAmmbRe9P2M6c8mAdFySaTmkNWKg78KfAaHyGMUktQx3oon8n",
  "key9": "5ypzqutPm5Nov7dnzQMLk7LjRSAuz8cUsw7N9Pj2pahnpgtvr8M73wzRPkmggcofpYAm3a6RdAan2zi2BQyt5qfx",
  "key10": "cdASciRxoshtaUopYfbKAd1pFGHS6o1XbpCtUm2dFRha6MnTykEsqZ1TsFUXvdLpsyEfiu3h2f3TCiufHsiJWNi",
  "key11": "282wpRe2qDahvTMKWFxLxvDPaBHLLh6dLSVuwC7CVVXw63JjsRgBLF5WRVMs2TA8TcyuaEjbkUTqztLK3MYf7FV3",
  "key12": "3UY8p5hAHYuDqUmwUAYYMmQnhpEyQ8SxVYjNKdaTY5USEzGTbEJ4FaJttru9ztEAXjt8dovLR2aMGGnKyV43jERB",
  "key13": "5RtF6xmVdy5ywxdXQCDS63g921JD5V5KE9BX2vRi523RUJPh9VzXtThPCi7CAMjBNmnWoi7L6koJrRDQWTx7tgZ",
  "key14": "DuYbRnxdCaMj9iE1HYo2FsBzZDqHQ4A3stZqG56cZHbLiGwuzYups5tDKf1m4nPjpLfP8YemnoYKVGTgbAnKGej",
  "key15": "9CbogDvVAgEqmRLxnqQ8DR4RCEmgEVodH3LzJ7S4v2YHMRBMUMQ5BsbQiL6Egk46a9x9wZSdpiW8R6SqHpixojk",
  "key16": "5TZapdB3HbWiCUUtq7zkE48S8J6RhdYK6YzDjp4HeK3t2XUj4LqhuAmAPJRbCMwVJXberd6A5r5cFKAGzrCt8eZe",
  "key17": "32FiWxe3RUjZBeWpuyrPgQtcobvhzGjKDA9TsMYN2hkDXZZoCg2SzvcpiyUWiChNbyZ5YvK1kSddweND2oUFRMyB",
  "key18": "4PCBnHvADkPbYpDvjPBnpeGYrexS4NFLRsgTUz8JQEWMrVy9af3DTaXdqexSkFayRz7i5fbvzKrDB6oMJFSbL3BR",
  "key19": "5xE76sBvM8NPhdDC3hdNSHh3MHDLopxmSpKW8NrP3H8CnCqjPGbWjMSEThtGEcXKTq6BhpQjbhEt8EjXRyy2czy4",
  "key20": "57DKbEizs51XYrMhteitd6XSnKz6oKoBXvzH9H1HTvtFZ1Yj55Jt69w1G2zzfFnMverKcTWiXhJLu1uQgvQ32bma",
  "key21": "MTTtyU84Tqpj5PhGiZzKj1m1AwonRF2vUezerrnQfSVd6CFSUZNQ8GZJM4qEzA7HXicuSuzkkUpBya3iYwVNAiM",
  "key22": "3Sz4eE5QSsDodLoKc7ZMu221FdPs2XvwHab7iTCkjK8nxdSHgL4iC8asJx9Mhwo2LyCBLNgEEQbhG1teziMTQ3DY",
  "key23": "2s45bmN14DsdoGg7x4T3FzdqUqTTnNtGQ2ny8AGRhni71DHdGmgWqbsDGW5M1rf11MWxVFKRUin4MGTCjGjyYrXq",
  "key24": "4VHRvJTNRfxaZYnwCoEhnATUMqQyikP2c1QTeor3pHFPYJWne7beikDPHwS1M5rDXPiGXv8NzPHK3BWM82jVhxYd",
  "key25": "n46omURGjaNNKW24MRqaAZ6WxEHrPQRMB2GGeTzhWmPRHXZcxesANEkKao8FhbxyHmDpqUn447oGj43oLbr8D9x",
  "key26": "5kGivKspFYZYw2W34NF6yfJcRj43YQmKcgMcM9Yz4WvRi4XWTsrcRUeMveXQYvF3EEtR8hWZQo6u54oeWdQvyhHg",
  "key27": "5MZmHMk8Bj6HzbrGP7J9bkQJUBG4NDFSbnTHJiZdp5ZRvQAiHXnkTv6X2PQAnpp2GUpqZzhNrWYWkbowarNYvvXm",
  "key28": "21hsoDdKzvAMUpomWcBwPx1nqQGqNAeC7nj5Fb6h7tQmZvkeawt6UPNb1b4btZPMKqpp7Y6SmLGnddHGmTntyyjK",
  "key29": "3jMURGxKU8ZrXSz74CAYeYKMhM39fn5Q4uEmaewgq3cR1CDzvUhbwgtSwC1avPktYMHmyVwYpLPX681J8JUEGsi5",
  "key30": "3GjcEXcZ24KrGa9R5UuppdDZxYbAmYhgB4MNohvPhTtnwFRYY3w98WEmdXaVXxBHErm5LCAUHrxfRqz1ggYHt5oo",
  "key31": "4tApsF1eA6cNWXPtyJQzoB5r8912LxxFqkGHD8rJnkp3Z5hvWcWMzvbbiurJGHWFtrHvNbjmkDy2tqKKj74R2f84",
  "key32": "rmqUjiDopWoWz1Cakn8kig7TKk9sH7JKB4CerHdUsU7dt9nqRqUByyHkqecRqZ6eyW9B1GJjYAsDAfgTURwsifk",
  "key33": "63dXUMzWRaS2EA8sWsbeCodx3poX18ijcHEH5unJ55Xcsm5zcfiKYt6kKxFPeCixN1CFJHpam1GPNQYzgN6Kvqno",
  "key34": "3sryiXtVWMfFMCgvpFEALXF9knEn4xHrSQ9rqAPFRiqN54PUyLA1UqeyFNshei6X3KmcBuWf5tGDgzKLXrRQUDyz",
  "key35": "2xfu3XYbYGRsQYyEfLi2yZgfzwYQ7wGBAPtoXyrbiimBMbXjYfoFtS4j8N47YRT5bfDbznBkf8awc1h3RSApH5kN",
  "key36": "3QvAv6FZPY8pagXHYwkHSL3HL4Wh1pDHDAWduAZGspLnaZ1AJSAAN895Y1UDpzeycV3JwoMRndpuLEhy6NvC78dG",
  "key37": "3AietNqtn9ktdWtVAgDdMphRmgStb9HWyugcw6gSZGfsV8T8BzwrNUSS2BzbmYCksXXhFjjGxVTp6vwfgFVFcPhF",
  "key38": "4knf11bZatp5R61aXBq5FqTEBc1jdAXwzD64hKNmRPXNFSZwYiscAJKE75x5Rq9HELoSUeUKkoK4Ew26Pte8ddpF",
  "key39": "54F8Di597JfZyZbutDuvFswgvuvGmGDFFSQXaUVynnV8eyPvQqvp91gSGw7E4qdRynXSdYVBrowZod7TJmMAbLAf",
  "key40": "3CoZEU4KnHyAceHdLc6sGV8V1icqjKaXZB6paEW7NpZMdZEU2yfgV6EZzaq1cW62qsnHFfAHBvaa4kLXmxBW5JNA",
  "key41": "5nmiLcFLvctiVVLVH5LFiwWvGLA6iTWhUJNAgqLaAhffBd7CxmttAVc8eRCbhZm5SqwKndmfq4z5FQtPb7LxhUjS"
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
