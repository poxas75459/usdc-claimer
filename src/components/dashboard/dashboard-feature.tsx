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
    "3xPYgT5XHrnhbmpCBzMoMBdNmZBY46kkF3eWc6HqGsqhWQ5kKjhrSsLyFDSMc6JABun7vPKkEiFcBtf4bSYyhSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kp7AZMPHEgKmbEqa96L9HiXvSvRgHNJoSxSrgjWd1u4ScJH1hkXR26fMREb8jVaBmB3VgKdcaMw2Y1RUQTpN32F",
  "key1": "4S1BKxtxXmJNC9nkALxQum6B7rj2EhpM5ue5fVbsc3nkLsT3tx5jCUZTUYtiQLSSZWyMznQ9WYMLFmJR7JgRjYBy",
  "key2": "4AgSn1YFVuETPZc2S8tb966gbeS9a8Anp8SsDf1FP8z5mKkHeb7oLRGjkgFMeajMSY5sKQHMb8vJNd9RyXw7fLDu",
  "key3": "3S4mjwYsJRyCXQrkra5PSEDHpAurukapRW8iab4tYNUG4uQneBPMpZSjVYNgfNASuWb379YNwMTWqFRmwAwDCgdC",
  "key4": "dMKK8Dj9UNHhgpsLTi9Fj3RaLvMAXBg7DWd9Mzvo1F6qWCpekBLUoh5N8TnHsbzQhHdEnTseUnfEqQ8JcmCYV14",
  "key5": "rFiEqoLKUzCoPQkUoz8sE45RfNF6LZTyZ6AkVxwwBMFdyga8jrDNQP9rLCQNb872TMY9pSAAqY8r8EUkcoB53sQ",
  "key6": "ALPc7H1RKP6T7XpzjoXM7d26Pv7r2yYooib6X34bL4WUDJFiKfYYcuDwoowoAFyYUE9nwTVuRKuqYKUEyHTJ3Pv",
  "key7": "mcmkmz4KjitTGfiCQ46FPE6191ai4Tp3venUFFJNELAqb9nMg4BkuyGU489FbZJ5rG8DYRiyWnFsQ4Yua6TxZju",
  "key8": "5jMJEkbNTudAAPNfNqKCgD4PbzYq3T1Gu1FFDAKa9aDQKEMqQCwss2oB5rZqAwihwREBMy1SDbf9Xv23t48pn6AS",
  "key9": "31KCS6TR7pLHP8aC3oBjANr8tAEaBqX8UDJVvu7tcWhRY8E79Sk9gD582K1vrjN3vmsobB7dpLEwTDAza56CE7T7",
  "key10": "23436m7vfDSLGq6BPBv3cdjY1TaqFYy9JayNbPb2GHewoZFYsGeqGQK4RzebmfMVJL6HCeZJesQ223ZEEoYstbns",
  "key11": "XhTSFfmSM5hjo8dcj2zm96KT2mdvLuWU7duNy4ZkDrP3KKBQxbFzQsJJduKYsbo77U3KGjkz6TEcyPTt2oPsGXS",
  "key12": "4MS5C4GLL1L92hqrLWf4M1MDQQYJFZw1GVtz1dLPMb5ek2zJ1y6XvyVD8BTRypraXfQyu2CEctrwWRMqnAt8PvFw",
  "key13": "r8ngH8nW55Tb2yWDixuSzmtrYhcWAv1WumLF85MSDMfiYsHbmDkHXQuBfyB7Jkc5cVuwrnr143GSCv1RhLy8qad",
  "key14": "5bjHYe7C4PLM4sJv2zAt3xdAUsAutoRrvzeCw5xaG6dP5nauZJnjY4M3m5fL58q5ywZyE8w6BAUsiGNSU2x6eUxT",
  "key15": "4ChYxUMdq4S5vYgC3cM6C4UydfvLidoguB16yhU11xBTWh6wHxY7q7mbZ8BQrxKk8YZBG3MNb1sExjncVjHmGagi",
  "key16": "3tx6n1Ezn2yre49e3q5YW1cGL55K5Rc3eXDAfWQjyxPDP51zMEZvE836r1CmoGzbA4tHSc9pyvWo5H9FQpaVBt8a",
  "key17": "2xwEiQZi2sRV5xsaSTWNduBvz7nBCQMzW8oxgWGmpjWwpwJHWHXAmrM2x9zQWLxuVXuygJ19LzeEo7b3Vc3jDw24",
  "key18": "2Rssjv4fsEnVe1B19694XinYShRFkaYumAW57qFtxi9uztjLT1L4U9eFafmd28pwxxuYM56SxQCeyU9vhnAM8TtL",
  "key19": "o27G9LUu3waVPguFHYKpR4aSDiBaByASoS8B8kYhDkj45MRFJaFfPxi3py3yosvaYrKybWSNovVLvcvM7DwEm2v",
  "key20": "2RzSYszRgBwdaZH51e2EEux1GLyqtp1c5QH8jQYEKkvnJfdpNseCXPW3BM7bbbW4xm8qwtt4TuWMPpfTA3gbnFfX",
  "key21": "4t1GgAyTkWYFxJpp7Sj59GbczTbeLXLv4tZ1ENXfNiBrxdnysWMWz8LUKsKsVq1vUBEjHXP9YcAM5XLxrr6rtihR",
  "key22": "NctcG9yhqvJzG4GPDwJht6iVJ6FgSiXPYxgk4BEazeYJcVnCLEXZ9AgmeGvkupUkvDARfn8C9buYiPCcUY3VeEp",
  "key23": "5w3vpnRP3yrTv6s2rJmXZLE2FVsyh7vE4dhJ3PABHe9BoFkSmLU4BnKL5J5tqqEh4evgi4scJhKY1rGopmabgZ2E",
  "key24": "FW6Z3MQHPCmRfmRPnT1owp128iEgqJs9N75H9meRYx55ZGotwXUDaCgUvFXz552u8LkX32JDWePyx2BShP3sGyh",
  "key25": "4fBtBMJnrkPoRjVW1AFdXYL6Zkx3VKqAypzE3NpFEuA9Bp6cqQxATj9nLmKTSSYjnfzKAaWJ7Jtq27ByHU495ssd",
  "key26": "VsXnTDduZf6Du1hHdLWtV2VtUhodB4WHDDMqvFLCDSDk8tFtpfkbDTTvwfNHwobbNzb2h7kivbvemt39zSiU5n8",
  "key27": "2APckPgutKcBqdA3qk9xZeDjSQNybPdKUFYrJ69UGUS2nkQcSfNVkrf3BzMFqLBperh7P65NFdNaajeT6c5m8fF3",
  "key28": "2CmkRpsyLXLCYmvVcmjF6jTo28iHHgyMRScmomB9FJG3T7dYYvBMCQUhasN8vEpPQPAmapaag6naddK1sYfRBSCv",
  "key29": "4kFQ5cuo82HkgKZxSPjqrG3QgbKMKgbZSYcpN39KaB3co59qKeWvHoj47UcSQNLFHB2mQBYue5H6JoGX1T924qLm"
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
