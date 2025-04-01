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
    "55kmwqu9WHx8dY39caSJneaKfjLdXBHj6Y8tKPN76obuVe5UtmZ9gs7CibKYvmBW2zzJ5zs7GpsqAxyYGdB4xVoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQWpa5VuM7LDzxr1dudUeW5bkqjuaZerfUXA4M561biDHchGiWwv2QoqPKz6bNei24UoDn9X2waH9Kk3cwN1MGK",
  "key1": "2AEDD2moCF2gR2mATXfDujAPAcGCgkcytE9jyQqLU8DRsB3qCKZqchZu34Y2frt2TH4cCtLpTriUgSR7yDwRogaf",
  "key2": "4F3CDxNuDx2JVpXLPsroiQGLsXXsv7FjVgcq4KTcRjNzdGCqKkoYS1X67gtqAJcPkGkdVMMdKbimnK3Rz3HefKNw",
  "key3": "5oVPPnesi3hsZHfzBTVfSJKJqATDC4H1dyr1Tk55xeMu4Z4YADbANRRcHPmkEwZ6v8fdR36PzjZ1W84prxNaKshn",
  "key4": "65o9HrXSnG5aXfc2rBejxqB6cKhWY7B2Dg1h9vQmzVjzd7s1WEdTZ9b12ckRHXia2zF4WraXK1ah7V89fdtHevcH",
  "key5": "2V6E2rm7j87RL1yPQ7EMm7NCmZ3n9cUjoEjE8QNWzQbjwKLp4HUWvqRVxg7uvM8GJoAmLDghEv3AYsdUQRwPSF8T",
  "key6": "3A8N8hrcvyyfaX3i73cf2fSAEwzDdK4GaKiC1oxacWqwAUgJNeLPvF49reDxFo49PE1krbDxqmbFARe4Cdj2SFvu",
  "key7": "3Y1CXbBX4AsiERZKZwvsgkAer55Usk1SDnSJVj9igotgU9y9zA6jchKR72Y6m5erxuPeKpKWkBwoHsHpf3JYKvEy",
  "key8": "i8svzSrbuWRWyXGWM98RY1oPHBTU49gUWY9bYCzUUwLxqi6jA5UeUY9CL7rF2t6EvLPNktPq2tzhE8sfvgLdc92",
  "key9": "51x3jGXRn78C3jntbFDNUZB92WYvc26s3oqkfCcPTidsDmzmMEH2dbNzj4JgQ8SsC9sySvQiKixtD4hkYivyTL9C",
  "key10": "2VmAPBFW9cEKz8Uognw65kYmMP1SKQ64VqQqRPYF6PvYnfUDY9pbLuM6Hkp3HWQNVx5oSnbRSuojVqt22z6KC43y",
  "key11": "4mPyfgBkgYmqbM4TcjfQdsEd6z8FDBNSZic4x5LdDyQU8k9F1xCjNLw7crcUbpCxpQiwYu8iVLh4G7REWKTQ5VVt",
  "key12": "5ceU91FSxbyr7MVDkVpGEafMsb3rk21VjSoPxtCovwVK6T3hjeE8MAYF5dFEJmeaFGxh6A6Pzju7wQuxnYhX8ibQ",
  "key13": "2bFg7FDfBBGPHeCHmkZ2zo38Q6CJ4TEbi2uB1FdnmYzhCZgZytMo8iYgk29EdN4arZntNwtiRbcnAGrqrebWuEL9",
  "key14": "4Tun1yM3qFpxhMK7oADR2jKcpRZwtnG9tGTghhfB25DcYWxXWLNtJg8jDPYJ6x7aUHcKYaELSU7hLy53RecfgrvR",
  "key15": "5KGNAZQFZLprxPVVQmqpW7gkjQDJEFeKWZ3x7AcsK5icBG1b7cc4sgmXF3PfoGFZvMAf19W45fJ93pMMCDUY7auG",
  "key16": "GB81irb2suJCfyBgf1BGh7WLbRWWm7spoCukaPzrt5vXykuGHpYxmEcwm7GQ3AocSjwaRbqc3KCGyogNM2mvaKH",
  "key17": "2ik83S4YasxGoD59VeQjcjgR7G1b268DvDdKDynpFjs3jLjivDTkE4Pf74gAQ7WcPiTGAgXcYXgRZYeygJDjnZn7",
  "key18": "3aJGnTDQK8gJakibqUNfa9hXtqJRQEqzvmiYbiU3co5Up1ffLvQ1RXpDnkFxcCBkWKh8wa5E4tbnRQgogJgAWPtk",
  "key19": "3bFzvgQ3ocsMwJgiQtjHaXAJgunCDXJVvVZsmQnd4ayBAgd8B1X5t1F9taBVTLqzWJxH5bryRWAffaXuDyHF8s3b",
  "key20": "3M7JHrtyit74R9am9uxKiHywGAXNQsscAZiZqY1yK7Q6WYqqn4LhS4pFhKn3etc57WtZjYd4gCisjGfoNYkYCxVP",
  "key21": "FHyJk6SEaJBgnv3omqA4hKvoiRnvx7FjUSz8iY1umhSezpMVSSdyymNeTk8ce9pfzdRuDQPeWx8VXHPsFxQsHMo",
  "key22": "4UBjZDM38D6DSE15E6Lr5aZDQokEo3tJdCxCpw2EopzDrdHZBYUR6WH6jvYLMgwTX6KfAqZuudVzZi5FEPrCaGEw",
  "key23": "K5sXf9V2rwPAVxykF3auodK4meTkCJPoBYGgECymKKKbNbW57xfCXaTSLE4xxPg8RaEqXb2fa3KL88agr861r3h",
  "key24": "3WxHNtuyAij1xtuwjukkGn3ERa48rvN8R1e5PidruWUso8y6MMxvxaebGXXC45gU9CD5YP1geyw4L51d2zjS8yMZ"
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
