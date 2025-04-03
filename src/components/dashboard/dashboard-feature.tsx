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
    "2oaVga2LttBpq1Sq2Duoarja9qbP7YXsVrcgpRPwJ8D6iYfBQksxsgRkGjrsfa1r9W6pharHMenZajPgkQBxwBaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5McE7VBMwr2AR7rmXyjFe2kRdLQcwqwjzzx4fAfYZwPirgMappNuuVucscAzv7yfGbPhfMGHuDAmigMXSrga8hnK",
  "key1": "3xpanj56VMx3tZRqQkHAf7m7gkDM2SSmWWzdC2VYG7kPyiTQkGDuYnKXX2a2KXUEbDUXkvs3xmXSG4BAirbMNA3k",
  "key2": "3FxoFsEy85bBDhS3Dc3Q6hYNVub9E3eyN4uxqRywPoy7bSBPtqXpKPX1oYpdhPG6C8ExVJHmCEg1mxTjmZnwM66t",
  "key3": "w9WSCwmr8qVXFSXCddfjdeBobjBiG4jYTgFbAidEXpNTztUQA3eqcVif5KJzN3PwoKYpiESTyobsjZ5omf4hqFz",
  "key4": "627MAZhjwKEEtL8KUySjc2pESwFemgzjhqeF5h9pouF4H8YdFHfpofJB5QYiCZK7qHGS9AbyTPPh1iEkVDyXK2rW",
  "key5": "4KXpphgiRbVEHoGEtktAAg9E8F4DiqVCka8fMaceaopR4wFZtHHr17S8AkqTjP9tdXgUCEVvMwaF5r57qsRBqMTY",
  "key6": "2C8qWKBjW6hk6mAxkbHo4K2DpjdjxgxYSf5VyXQp2afHzicfdXh8si2YrcJRXotE2pA9aHSdkDHxFmptJ2w8nAvX",
  "key7": "4hsDYdg85Mg7Hk8CKZTJ6ePizV6m9eMyChei9kx1bAs4qFZPXwM4i42CnZsF9nsYtvFzEnn9us2Au541eJMATVEC",
  "key8": "5pbJ5dyYYzjZwvisXZiyTQMeno6fF31DXNqYYj9ery4odQPFzHMJ1d4QguqUJsJDRMEdaX9GWH3XZvMFKf3npXa9",
  "key9": "5NqBKSxTWRF6rtMk4dJcMvL34Y5XTbfvXZWGQtroSKaXRWsvL6BiubJcTpMxX2ixMx5jtWnTZKC4jmX7mNVd4XFm",
  "key10": "5MfbK6zXA2U86LwTqaQHRNg69XuowPR1teVzL53N4NWeXvb2NFqpFuUxqGokB5Y1nEmRn9fztqCH5KUZq9nktGUg",
  "key11": "2eX4rVT1kz3QMyCoV1Zfsqyp4CBnL8DqFpuvSAPfCxDUHEfWcyRE7A952sxV6YHfffkHbtfaT7tnccVsgZmkjGJD",
  "key12": "4GrYFb3TKtyWeDFc6swk2iZbiQL9LaCTbmPdJBxowEx48rTwkhwPrxReGMkitRVQYkfoQU81Q5mcYbUomTwvHdPD",
  "key13": "4gJ6o6CyK7n9EG7VL1pmDaso6iXTw1e5CpasfppV1RLSnkiZEBBjZUixRTu2bcd6DYmNdzXGrgscaym4AwG8uqXm",
  "key14": "2FW5eSk5YHnemBof1bCMKwfBZE5pGonA4BY7KkZtL8WbNBd6qto3B1uPwaCWDmjU7mx4FzPqhQbWJYKag7mnB5Fr",
  "key15": "nkKie6Hm5L3s4dPbyoer7RwkdsPxKYTbQsWsHMdDzyP61YycMrpjoZKUbRyu6DopUoVfCXGLsk9wX6Kngc1fEcu",
  "key16": "5KEUkxpfBoHxEL3kF3Xk4oG5BhDcfcYrUEnKWXsnJwacpJaV3KvcHbYzsdHotYZ9XDiQqzmKeNFaK5CjdjgpysDX",
  "key17": "J5Lk6o7Cz5VZmPaoc8o5JD9eZVPYXfVzXE4Kqa1fQ4cU6Rvdwb4Ytx4b9H31ZzZv7zEcadJF8w24TpwvMV95qe7",
  "key18": "4StSDgZSgaTNJmVDj5UdX5aE8TyBHfHAsLPownQeFezTxiJy15UcoW9ZJYTzccXv23hjRGqz2cwi1c6x1vqsGsB4",
  "key19": "4DURLCiKdSNkYBZUbwAiHzQqFem49wFUsLhbwRx5gEJZKS7ZweqmgGW9PMpTZP8NWix5AfPbJ66x2aWF23Fi3cjF",
  "key20": "2nJe2ckTwtafkCZRLacTSY38zuwsRckNPpwW9aood2eoSy8DioPFHyjvYMSXuwEZYibpFbuRrQUfcFYydwRbGRdk",
  "key21": "2uAZkiiwdFoHicwudPEPTrFzGCSoHSY98fwVMEF4cdQFngY7Sc1GMbUPsQmDxDNtfgrfkBjds1w8uNKY1FWdraNZ",
  "key22": "2fQPJ7DcB6aqATs1PhuewU4Zg4HGtE9yiGo1XEccMf8BJDwQA9joReSYE7Aeos8yuFfDuDYWwvGoB14dMoonxeUM",
  "key23": "3wLDorzrPjzCXRTSjCNYB53CFNeEpCwYuKFsSjnj4twcSNMkqBifMvfUL5ibm6Q861zkzRUXviHf3J382cqD93a2",
  "key24": "3bsBx4KSEaiEgymxvo2AagYsEDyiJ7o6YTz9uwEUAHWKAP2qSedoRq2RqMSuL3ZowAWF1JdNb4ACKN4uTFDy9dZk",
  "key25": "MCnu6igNmrhvSCCJu1uHYoqrXezHbTkdkYxkfYkkuSRHCYM5wHVGpn2kDtiinqF3DZEu8WtiRMPqY4LbgoSuTNM",
  "key26": "3QJA4nmBA6Hgo3iN92szRLJKQHeFWgoNEimUpTS2c7nh8aQJk7t2zidhZRDDuoyEa7AL7d18P7oGUTHoDvbv8UhP",
  "key27": "61RNMVdUor5Ce3FRCuQMgAGb2yxadNkzNBfyxZCTjQQyMGhckeaHPc6qQdduVVTgJy7M9VCHtUdGP5KKR9Yv7dE5",
  "key28": "5SkCfqJobbrncVRpmurjJYvQNKvLbN9Novk3kPc5uE5GczWcSaWhyexXgMMX8jMW6rKEKK62LGUP6fDuaKpL5VK4",
  "key29": "4Rn7N1kCwuTRANKcgjc1HNvZnQcZq1s9gHxCvNvvp77aegA2WeHYVag314VTYheeDaL2ya8JdDLAvbtWYk49j3vo",
  "key30": "3ft4t2nbHefMr9YJvz76pcA9NRUk1BDzZTT3PiqDpRHbbFGHATJ5UWMogFngECyKMRMnNMAdnSR32qj4wR6Xbw4J",
  "key31": "4LjXnk6gZveC8rAs39yajrJUQqVXydo5wPRTp7ArKjeWR5gxr6t6QBXYREGq9huhjVD7em3XKKQVMxh3nuKXuV7w",
  "key32": "44ieao1bfBp7igxiFatQuqyrtzRbQK6w24x2H9wavM8Lbm76fcWA4s7PqT8dBeGJUaTKhdfTLaWruXPaWnMvVyoc",
  "key33": "m9AbD4UeNCojHy6x86JCD2fwzqRGwh4ZHu6DDFjg6RuekCmSPXjGc8LA3cfbUt3EU6Z7CqagB8U6ZDdorEptgjr",
  "key34": "48EnjQFWDEpj4FqCBqQVALSQsqtr6fMDpskTsz7bcSPH1s13fN23W8SsKpbk8nm6xfqymhLGJ5P1GCFyz4fFJvFx",
  "key35": "o1r16BxdHY9uv72E8yv2GXx1uL8Qb5ccZsFFn1Qo3JpbuDkKrLrNJmZe1Sx2TfdWvo1bLAP1SCopBjHm93eSunr",
  "key36": "W6uVxtw9fGyRatYL1GpyPABBt6nRF2egVsJvBaqATAa6vCpHeLks2nixYqhmeKKFEbadtm2GxVUinXjXQY4sqTG",
  "key37": "2JAGrw5GT6tau5LNA58idB2ZqCmNZz7XTfUWZHmi9agptqatjUNbicvn6pqgz9wBAbijGoBzbUqj7SXytpxmvpH8",
  "key38": "43HCKLHpn5yNLLUSPumKRRBgq9mt85e9GuGYkFvkQCRwYYPckT3UMggByeKj1kT3Ea8v514g3xh8rtTY7Nkh2UbZ",
  "key39": "3gmAvhqFnDD4ht2Ztgo9jT4xTWE2KCaJR3Aeu39TyCYNTdvhZbqwrQDQcEn586dWUEZHRJBYXCcF8oXpGpXHGbqB",
  "key40": "2LQ63bmsy4aP2VJvAGpFm4R9XE9tWuH38XfCyf4awdNT1kr8ZZowUtTJmPSWhN5Bdnm6RrZpNmzeJDiKexdm86ZU"
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
