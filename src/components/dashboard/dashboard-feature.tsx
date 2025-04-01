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
    "4Gr7Sn8cexNUpYTUU9pikb1q5ER6YqzB6dtfdWwbyxReHsDu9tT3zioP4y4J8WjQWS53LunFy3V6XB75WQNSPcUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9W6YaKjLbrM4FZmT2vhwhJzrnETUq4nD5tJooB9AZvgy9boz2A9GXhdiDQvjskVAA5rRNhdzmsbkhd6t1GYNrZ",
  "key1": "3kYiQ4TZpTxgTDGSe4hTEjgKKoDsa7fHC6LA324BN4Vqtk7szgbeJWnj9iehZxAWNciKpiGwLtZsKGR2pFxvRM7G",
  "key2": "dogQKcb2os1VpcQafEUpU598dBZGZCufkSDyYcYfainSissR2ELR8EBbwpe7yN9CJ8svEBtSjuyekv5eBzXCbkF",
  "key3": "2hAihPedxuLN9Q1LJBe9p8GqbgtS8L6CQ6Q3fckKMHzfK1gsD949tQXkqUJbC7DPe8AmcTpLh1EvtThPcoCeAJKS",
  "key4": "2AauHZ8CvptBUnKAGvP1dyzuCpwRQxV4TYscPm9uTAsvzu8NESjbTv7GyKjgkQTCnscnMozz3rxh4hgavgeEkgcD",
  "key5": "2J9N4hTMYJhJYxtsE7w9JtRTQRrWgRE4HbVUW1hj8bqLxRSk6mHCPD8cYnPtbryMHjCmywtesTd3R4dAc5wyoDyG",
  "key6": "3cYs8ftfHvkNidtoL53egn9bLgUm9V6Ju1L4gmAdUrxgYu9oUc3TyssLEn9QMCGoeWwaK4Frkwicy7RvD4sK4ZoD",
  "key7": "2Vhi8vCPW9tyUkLAp8xfMs58493zJVvaEf9YUGhdS965FaMDimiPjGmfMYziYpJH6Mtj36PNciDcH1bpr1mQkZsd",
  "key8": "21M3aqiP1myLse7pNSJUV2YCq96eVRdecNcy1PGZFwK9qCkXpGsFa5VYuUikn22FLjKy8An7jWaNxoMqheMqbDts",
  "key9": "56kjSaHtWgdYui8pNcBNtR5gy5eoRcnBYrLKcz8KP59CGDqCbEXj9KK74zvs8FECGdHRBPFRoYzFfJW441Pvjtur",
  "key10": "3kfTjxrKCz2JkfiK1xv9piVv5ju5W8YBRVpkSxDvhqpewpNbUExPTRVJKbJds8Q4a1VXX47skzV9rzeSBhShSBad",
  "key11": "2ATuDEN8SLRAzXQECoZQd1WceqXWtjPEJZov78ieqQMKRaEhXhULDpWY3hHxV9nWmFm256auaELLPt4AKn7PBCX3",
  "key12": "3UGm7De7KM9FvyqbVPJx9Dchv5V28qfWoz91H4Tb25X2YTCAo6cRVC1cDeb6EcfCLtsVAhUSWssESyh78MLbRPNd",
  "key13": "4JFM8gMrTXDPihtvp7Qf9Ty5ayY3QMsztCub5PqfV1hdWYFMCAUZMGfyEAF3SZhkn39dbQgA6MHCAL2aTB3ZZJ7f",
  "key14": "3iBcH4xttmMvaUvQXb8f1DWfeqcjwVCYqwNzntCxUUsXSCPyHdGsPgY5hepqUT8ETRjbb7QimdDPyabp19ZgRKc4",
  "key15": "3VXAdpVQt4aEddRu3zwAZUhNU4aFufsr6zErg47wTKwoHoFZcwdM69RS9m3qJznp24U49su8WzioL2WrRvk6csA3",
  "key16": "5xH4hpzRpzn8ksbQPSDMNWeooeiWiM3qghrf7QEVjWh1jrkXJyqTpJVVawj4paZm1zrcW2n9po6pMofkbiN2NfYr",
  "key17": "2Q3Z59qVF8RhvzENKs2F4pWmnx9iiTiLQ9Jz6G14RixipNfsjBXe5akS41awhh7RrCrKSSNVhskfrVhuMEXVtgio",
  "key18": "3Pz1N7W73j6ZLoVvTQGYSejQ5MjprHZxRgBc1vicFCL2Ceq33Ahn2p4THJFXvgDfDrYyr7hpLWQiRYiDdUHDUwoV",
  "key19": "5MpQXpiJT4Ms1uWC7R34NXWEBR6LQ1gQ9yWc26r5QYZ53ngy7qniQWMH2yPNx4LRKqon3PRyYALeG4x57wJu2BFU",
  "key20": "49RMKJCp5U8J6vVEEvfgJYhY12nHW4AvdWEFj47E12sAxAAhd8AHaJx976AT8CrTTFmd7FL5c7qtQkx3rUKK7Qea",
  "key21": "2z3Es4KzD2d7ymBNM8AkZrf7FhFDEnmCG6zb3AqFxPG2CHnfHoSZmoMsb1gXqQkhQ5WRE5WfovwRxYYVY472BbFt",
  "key22": "oTiVLtwhfFZCFZBnpHr7hfSBBZFZMTt1gcrwoj3mUAKrjgzE4HrRuf2FUqzSnvjNgUwAtQUwmCuwHGRRXNmQR8S",
  "key23": "u7ZK9jNcBydX98ihpMb2ZEvxSdyrxZHyJL2gVcqGjwywDwBgFngpcHtUuXdZ8KXtiPb1eQBzGuCDbqLZyjSqyhE",
  "key24": "5oN98wcM5DJDn5FSQJMnb7EPfQ7LeToHWTpHBNEkxN5aM3CDJnCqtaFXWA89q8KcpkcL3tazXgKNmHyMagbdei4Z",
  "key25": "3qpftmGnLBmfPvzm2c9kUZUvs5vF7Q2YfAvN5yTdrxuvtPBQQJR9yreq8o6EUaTVn2wSb7n4gMSU1rVHfXeWqBtX",
  "key26": "3RwTm7LR4Xsme1GcHhQgMf3Nj2koXicJgWUFuiQu7VT2ExkXCukjtCLq46N2cSytgZH2N3wG9VpT6PKXftncmzf7",
  "key27": "3UhtqioTEfJeaqiKUUHFewPJVAQyS5fJCJKEb5krzxXuqhamXTirB2gVbetcAspWTE63PoG76ZwttQbXHJ6h66Jd",
  "key28": "5vY6ritJZQUNs7znYuz4TrMZTDtjtR2MAwqoWMFb1gS4KapeikL21dfP3ndTMKDpvG9FHee4wFLFLMZv9JPZKAGN",
  "key29": "3ngVxArqXXBzZ4mn8yLtyWV5nNn7Xz8oKmhsfMSa8Eo3emkkRpzWfcbDLqrw8KFQL3pEJnXhbgx2BQ385X4idFY1",
  "key30": "2bRzEyJnDe8tNivByHGVwu2Cw5WGcAfxBDnG1yT4PKQUmwmz4EeSQzovjqpWo4qcajEmR7qndVEobsSRSF9DEX6u",
  "key31": "3gNiBDUph2Gd1RWqSJFM45K3FkdB32HRoP6qpYvWfTuy6UeRqS98K67jXbj14Kn9c8EQoEAsd4RaU4qhXfn4QxPu",
  "key32": "AXzWcxRu1rTNmWEh2Zzhbg83KGaJREmaHodWVgHhtyp3eDBatXHATmj3cLUdbGE4xcy7FSUfSaVi2h9DqwB4Hqa",
  "key33": "5m5mbKuaab9xak6VHVsGsqNquVGtZoDNSCyCxrk5mGuvwdda7YTmhvjqzU131EHUxxWZe1TotEuBht7tTbrgsVrN",
  "key34": "4S8gPmCrpDARmNvQdps7WdVm1UCLHex2LQb6jgmzoFmsh4QsMMqTYKdjoTEQ6rU44QJtD33ykPYfr19xc5HCFw7e"
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
