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
    "3gfeLBCX497JPxpu9cW4rxF83A8ifrX6G6ZYpVnUopGaJTgchPAyZXGdnyS2rQTFUkAUHccWQ6PXaFcaBx8W2eKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BScjD12NnkAbgioY3d2oWoYC5LL7KeMxDfrcZSKRf17MNFfZa8F5HzzjW72mv4aGxFYGDafkFijssHhVbGBDodF",
  "key1": "beWuTQ7tTG4CLZei1bQ8rCoX7NFPrRQE6SuDf9Bq4KecFHebJgHtNi7z4V6tfeYLeaHMTwkS3pjtT3B6KWRWLTq",
  "key2": "54T7peb1CxkmkBfcPT6XgSE71YvaaTc62JMtKt5JdwZ28A2HvhZHaqBuusZPWw6TdtVwZK7tR3spRQtePob9kru1",
  "key3": "4TDojRth2NcnTn3EjZ3UmC27f121cAjNKU3yQyGHUbDX6LuqXiozmxrz2fRAspETCb6GvoW3oKVCSijTkQmsydMh",
  "key4": "36aPUeDKox14hRuNEcB8ZQ9cf1tV9WD7C2pnkhjUGXNCWoaEidotjZvuqd1aDgtjKSA3UTTT7P1DejrrzBuqSCaq",
  "key5": "2hz2ProtzMPTTVhqnqvD7kYbE4TPHrDwEfZ4qRtTRwMZgGpty5UJyRsNmaw8XKGTvELEAb1jsAgSHxEjJN12eLyx",
  "key6": "4QsoxDAyUEtvN4BJCYqekFFgNTVzgukLKtsb9HgdMAJy3J3QziPZBU3gqPTadd8pcmWZt8bC1xuTmaNriA8uWEdT",
  "key7": "2pspo3pb9RudvzijKoXLHBytRyvpGv3nfVB3VrXjmjLUicqA1SZW1EHwfpF351zqCt5bH5Tin8nE5dj6dzuPUsSm",
  "key8": "5JmUm8njAKdNVEgijP97Y9BUoNgKSsQ71xG2oQzHBsxsdYFq4k2Z4W28ihnrKyQpDyaVc8TXkJAbbckJvubYBN7u",
  "key9": "3VEDuctpGn8JdJ8bc6ZT5xS3BKMF19bGLhhqWmEXRt3u5F4pZNWxtic39xekmq2RXRX7XoDMSDSPSLcMPqGdjJVi",
  "key10": "MqDRTP9K3JC7iRGjc2ZwpFA5ZU4VhuTn1SH6vV4LDqyeRoD14oxAdSLZ41XbhJ5AxRKt8rC2Ryuy8E9rXT1fUJE",
  "key11": "2AUKVC4d7D2WYgXoy22PDxzfeGGz63HaQ4k1k7HTzdqXcSMX8CUku1sJ7Ju58VUT5MJ5SyuPBk3KK1VxPvyZeXs3",
  "key12": "4d6obTJ32gcYzL7rBRyBmMJi4qSKQjM33f5kNoxWHtipuKjY4h1E93HsFN4rem2j1BDfjEgWRc3ibTxTsUgMmqf1",
  "key13": "Spv4y3YQjpaztLQ69jjnPZWUCNiFNAsZ6cH3HVbuzrWrcErZSHGztR7EbEsfMaM6L7SB5YUjuUSS9JGpChxpojW",
  "key14": "3c9dUibAE5CJioP1fmSvzovtFjwNxeRn9Xp1ev887ocHomJvz9U3gRxpP9LHEQfTj4v1qwAYfbsPdsnBe8AFeGHY",
  "key15": "4s6PVSbPbwu1fuKSw3F83y6x2VceyR8sRdHSuT9friHWLbfSZVnEBSyuVKSQk7CPY7XYPfX6rD5nPV7Am6yjYdmQ",
  "key16": "LDm1kQSKVeLCAnV2WyHQpxGNkxY8XZFcCtSd2R1ZH4iVWcYcxFvMMwWYrbj2PRWhMGfBNgEzDZUuWSKsmPxPJ58",
  "key17": "3dgqw3nMtu6tRCUX1xPkKwM7bkMDaFWCPf8WwGZoDUZ8TaViM4j261bWhKCfsXMacNsDQfPd1QzvYvaFh1JTAXXB",
  "key18": "3kLqFGtGhUqU2vEatPkDR2KnoZmbb3NSFjMS58dZeGHdGTQGJJtWbRNBQeBj4BP5oUihmjDNowaHaZTFdySZrLV2",
  "key19": "2XdiCnn4yycCdD1N38thir9V5NbMbyzD6ZE9HG3cYovy2w72Z6neQLEuUUjgWpWp634ji3qRyD11XFPQcrZVeGRv",
  "key20": "4zmRpAYyBh2KqZ7WiN8TieM5fQjv8EDnXAehGyBhVDdwC7bVQ3GN36v6n7eBfc4GwVTEGfGqrdBuTVKjfDSZLc5w",
  "key21": "3cnyo7VrKAuEY5ajRaXdv9uShRAx46eKi2aCbjDNhBqHHagLonuy62FBoQBHo3x4QX95ocD47W3cfD64C3C5LZo8",
  "key22": "4eXA8oyoPMYuhv9Ze5AeneZrEcimeTzk6yjpsqCz6vvA1vpwgswLz2vEZHP7tBnNvSoyF6TQCNgYYmAT79dDYU28",
  "key23": "kMLnZ61mvFN41261L6Xi2exmAS29E6VBxTuJUaipC4AFBpGSFKZgFwUmhPQ3ws6zrpL8vubGzbivRpAvrXkEWkV",
  "key24": "3ZP1bEBvcUYQKPeb6JfiQ2n8RCHi3MkgNWunTmi3qcaeqzMxj55rQ6EPoCEjAp59eN6HBSVgq9aRvCfD9aQw5zPs",
  "key25": "4VRDVt4qT5yyqsyJ5pE2b5UqHFr9ELA62ii1y7hPPMui4GjTR1dgE5Bz9fuLYqL9DeiaQSVtoRT8WytCfqEd2rkH",
  "key26": "3Ly7MMUr9u4to7RvDFA1iu4wCyvsifuFoSDhgEeYsER3e4VWif2DFHjcW3aatmbMzNmrbuYwSG4Eh5JadXz5t34h",
  "key27": "Vrar8b8R2d14SEmbkyu59ApAXt8DvxJqetyXoeZc6vB94o4brP6ftZoFWsDScm8fwe1TtSN4RvoeNAQ5typ2ZYn",
  "key28": "4E1md2iS7pdB5zUdSSLNr4Nr5mUFRrR7cQgvprYoeqywmr72P3XvdwKoYQo6zMJRPreNK3MeGuFoZnn3XjV5qNEy",
  "key29": "4Fx9eVSoEndj2XcdwiPgUc42wpYA71eGpHdWnW23xKBMquaoV8hjRBfhUy4rxNbnaAqr2682kvRqmHuxfiVuFVtm",
  "key30": "4dSMvNjGZ18EsVFWVo4KtN7x68HWYNftv3oNdEcx1JSWwqz7d4Ea7bmxAwriupxrCWVERtByf5ALcPBzGTUmKgiq",
  "key31": "DEXuj1WETHHopsQdSZmfiQ7DohJPZsxtRou56Sfqg298xZFHccmdXcFrGfFfVUmNKtJ89oRS3a1Yfiife8Sezwv",
  "key32": "28aM47XudfTQgNGrUzzsYcCyUePUWvZiybDHjmYvjPYQVJfnGjgTnxKe2fFkXX8M4DoYNbJr2jYiKZ7sJhqHm2Tc",
  "key33": "52pYyWonuZUeqXkZ2untT2bMwonnEuMxapkDRefuc4fE8zAZZJMeZwS9JTSBPpsY4VCqvmvEC3trgrP8aV1Rimst",
  "key34": "2bVnTznQuq5RcixXhUoZ6AwbyY12qWREnjFP59EWSb3QPxheS27DWkSdiXaBWtdcigfZxQ7sUKYHohvRgo6iZMHY",
  "key35": "48o6eSjTW17bWK5oZSntUZkVPyFW8vBkA35YFLUVMe6kP7bidxaRjR8tGGeiyK3cB2Ypr9HpJsYc5Gj4vJLvfHPt",
  "key36": "2Qak3hjhf6uZ9xeXBJbzwXvHNp4JRzXanzZ3A1zyD9oqKpShvefyx53AeZwWuY44MoVhxRJXVqcjBphvYUCYBRsG",
  "key37": "3t9bGyeUkZX5dctfiMqZ33vxQqszYwQ4y332vFhUMccoWcW36CWmaXxKrHAGXh7f1jqYLM4Gw3VpvFaydk73FhXZ"
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
