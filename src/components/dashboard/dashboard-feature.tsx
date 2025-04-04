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
    "67gLdq8dNdNmxuTZw9ZXYbeWoJ8VyUdttpXqnAZVPWhUstXUsXiamuxPTfmBgpGuFPqPoGK2vTag5b4Xzbwt5sFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLcwZhNeRB2FZjYfKaognBuc2HoQu2h2HAd3YSUsv8r6UqgyegxH9ZStumVmk7gPPFQcXRPn3ZFxKjwpKVTi1sJ",
  "key1": "3RyyXmkpXxJ7svFKYufnCitb82aZsddg8V6Je7xTDtJ2Bo1LXqJKbTH8EFwWbUZATsP89bgwAYTrVhTpEBk6tamu",
  "key2": "7WvLAo9UfLhv9dBBNs7TxhYS4S9RysZEUo27irRcyJPkLKZmzwMDUm8KvQ6xsVGNeeMvBh3Dv5djnS9hJ6dipwL",
  "key3": "4Kx9CfHHQq9dHZMZ8mTJyTKcacNB8M46DNNDn8vQ8svANhQgQ655wbg49mJ5PjjoDFLd5ZAW7y1samqXgeCqed1r",
  "key4": "3ZVS9Wi3HjexDkwBYTcWChiS33yjhE1qsX8ToV8RvBZy1kS6bjYqLja1zgGSdtNhbYgvZKYnoAsViXJxKWJyyjQb",
  "key5": "3oF8V1BsGFXk3pXeASXGXCPdgDnajbrDQBhrHgNgkeY3dc1pQev27Ts5zJhKqgs5D4g3zXD7Kv7cFzieXWS3scRU",
  "key6": "5Aok4cod1y4tq7L9dhkayhSK21CeevqQXfChRxTrVJnwsogZdwhsvn6urF2uV73eBa6EfjaoHk8et6w5Atykcxc3",
  "key7": "fu1T1JgTwV7QAeGGeHYSkkkr1bmN9AkokiTmVsXgVasucigkBHwr6wWL6sC3G3i6xXmPmYYzQK1GBiGDCCcYccQ",
  "key8": "2ty93hZ6weuRr2fZFAn7or2C6sB8BNpkYjCR76t7GMrq9EtcTGeDMXPjcVho43eJwGUTwLCb9PJvahptYvdKGHLp",
  "key9": "6trKLMe33KkuTASaeAJC697MetmooZXvkqZfAH4VBSZSBnMZDWkjgfy1DtBntDvPd9mFGRuDX7mQo8WZkq7VJ6j",
  "key10": "3yD5AfVUY865p6GeLxN54d8FqU5Z8nXv9vgZUDWJGLXd2Lvx2zktDBmZiZDeaBA2UWVKTUDfBsR1fnXesYaAHEPR",
  "key11": "3n6G8BetJGodMATRARbXAaXtvokyWvDX3Li2tjawFmEzqCKAmLX6LnpnWTa1Kapx7rdoWtEDfDLcrQLBMVSnp8EY",
  "key12": "22UdLKjgKM2aZSRHpkdMZpp6Y8DJu9kAtZiLJuviCgy9sRm9GjRPCsN7qo6drWkcLDMBcpu9pnxTtRuYXFJ5ZoTz",
  "key13": "3dNqRCB4iErkqyDpzkpDNTF3qmPnMfEdz4fg4mzdX7k7LyCAy3BKSMC68JEq97X7U4sw2MMgePrLppB5a3u1r9Zb",
  "key14": "4oYJezaUndrRNeDvF4DyydVUWjou8ng3FMJMuAZKR1uGKHRbhcAbCZcZQwkuSQ5sDFaYs43uhX8zXiYanFDAsEA",
  "key15": "452CsTVFtrHcyqck7Kzh6wxLm8bBGoezSm9PvcgAmv7HuJMwfYo6shfe9sB3NdMYfjkRJoLAPesHYCVX8dyUCGrE",
  "key16": "2P8uSmiSDjxUh3iUeVeJiqLnBS8on3Fn1dp5a8ixZ494Jy7sqmJPaXgEwtWBVpsu5KTAeixcmQ7UmKT238jDd3k1",
  "key17": "3UR4GAJeEJrS6V4889tnECqhENPkJejJVMxMh6caFaXrAt4G2BqUiTayaTJVrYNSqwAEncarRK396SLJEJrqwA8",
  "key18": "5SsCeRsZvVBvXKFwh7euduXugAH6B2L6LoRojYYqZBgcyQuTCYH95GrJDiRHznm4M7vfCTQEYTWRBnNVACq5WhER",
  "key19": "3pdg7u7znGnDYSQRfE2zXjFSGPi1hzweN6yBWGPWi5fmwj7p5uFSV2rTgEp6ZMeEWWzKzFtWxPyM93pAPqqAAwjw",
  "key20": "N3BiPFKNqqgE6eJyx6PanHyXjaYGWp5Ciac6Yw2xT2CvQZ6P82SC52rmV6gLkoxvwV9LuQ1efBW8WjfPsT3sgKX",
  "key21": "uRFazPhJTXSaXwPtjwUdQJjxzicrnroRe35No11H3kr8J8jrqoY6RVaGAGURuAUxQ67dNHJxjAJPYJTu8aBRVqj",
  "key22": "m2SaxjKD42TiKdEfY5Horx3kbRBWVonURJLxk5c4wetZfg24kNtpCPH76g3M9YLnjK7cRYNgXazZXwY8HcRiQR5",
  "key23": "5ZocoPpBZEo6ePJnuFjQxyKMs4fqmGQSY4hTWV7pFWRYZAMriWphKix8Z4JzQHirFJKrcRWSo9r9RnbYNyKRQz3M",
  "key24": "4BbH2TvLCCsNCbeeTzd52qV9VH4DrRf2r4RuREsbzuC8N2JjYsxRe8QZ1C3FUD6ESpqiWzaoV8tdMF5UNKGf8g2r",
  "key25": "3JbDiAbbcL1E2FVqEYRBaFy9t9eayMiBre3k76cwnb55jBFg7BCcs5jWcfETaaFmWbWJtDDf9Nyr1HYxT2pFrJMQ"
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
