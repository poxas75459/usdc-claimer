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
    "3GFoWfo53uVu4NefzxS9qhxyat5qLKyCLFKPgko2jHU1coJcN1uyiCYVPHdwhmRcnxWxQu4jDQ5ezwCU4Uvos8XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1CVfepsRUa5FQqvoYE72aoTm8Q5KPFWAZ8wjmRh8N83QV1bRd1qhEnFysamNwTpagwHevBcaRUpNT8TQcZQuqp",
  "key1": "xHXBPMJyCY8gbsYjhdXM82yuZmL3c8q4nHmtNpSvnMF1Lq43iHtmgmRHL3bSg9Aqw3koKd7x16EWpbUa1vhJkYC",
  "key2": "4Vyx5SjemVWrHbZp7YshUwecuJF38zg2v3yvmioKpd8GHeJrcUzHNjyhYTwVkRQsUdpaapADHfB8JKdWDPWETqqU",
  "key3": "3DzEqVjEiN6qyMaE83RfLXJBQYQAsEkhptJEPjL6q9a8crSFwddG6HxhwrhvUP11ZSRnAZt6uYQaPzk97HGrzzrS",
  "key4": "3X4BDqkFNUGFzfaygkEkE19ycjGgnoD1xhah8mMn8a95fMiK5Dq1euqnvvd2XygotqsdqfChYNngVhRd7eXvxu7S",
  "key5": "wS7Fj9SVxxCaKGJz4we2xVD5wUvQAtnYcsoYNmU62MpDSCN1AheHggPSzyvZt1wbCWdoKKwQYWXAxqrpCq1MbeG",
  "key6": "4vB6o98j1rRjsYvDverJntHNt8NqDbSAfzg82Ah2HALiMuuADTFMwzvn6fW1Tc8xdJubVh3zsARMsdPdwPLpa42S",
  "key7": "Bv7L35FeoB1gzvRThbC5M7uqYEMFPwdBVMqVSW8eRM8FAVHt1gpeRVFFj99EDtkuJVB2SeuDXNHPXhrXqBRWEmD",
  "key8": "4ujYr9aE6NbTrMFNrhRpfRo8wBWkcZCrEjzG8wWQQV6SnD1j33C6LMUyw69bGYLZD7J5MjeGR6XkBbYdaZLbeVGL",
  "key9": "HERmVCbchkecP7mw9NT9e952gdLQLg12tQZD5ivktfb9GUpdmVYUy5o1yFFVSNC7aSrRsw2duAKeb8KzQAoGuSp",
  "key10": "5naZCRKGudbdjFFs8QvZe9o9733LgrQ9MxfcoJS6UFE4vwENxf72YizeE2ZusiGZ8EjqcdWx5gdF38XL7DrYn3aP",
  "key11": "2CVWagWRRGhvodE4uAa2THdpQA54SuSBHaoFYijzkXPc78o4qBCnfBhCNPry3NAbcjebbxxs4MQueJiFx6GMvpv8",
  "key12": "5GszYnvGDwMq1xwNdDRVrR6rM8Mr5U7Amr3kyEG72GizgMWgvJZPmMZuQaAhHkmDtRUGbQak5CfDGwn9uZkrHT2L",
  "key13": "54wpGCgikJnthnM9KqXMMoDKTe7XPZwQTUBwDekQ7RX9qe2Mkb7Exv1QvDu6U4kfeoPmVQeKqKE8HXYSKKwtTPia",
  "key14": "5ubxM84znETQGkp9ZbP1M5pYh9DXvWuuoAjCXKsHrYxrmz5DEFFMdSEzZJgitZVzSi53d3iZSeLZTLkx3jowr8cd",
  "key15": "57LzwnuRdezHDbgDz3TAeGcFmU2tBu2JJD4BGrDh7U8aNLhPhroLmW7HRxSY1GMDEZpKFG3snHe86mg2LnpkBEP9",
  "key16": "4aGjRgQffJuZXfjNz8dB97DvQ9zb4T3CmaECf6icLFtzJ8bRzSSN43tHYvZBJEY7mq2htuN4z9uDwgzTGzzbZzfy",
  "key17": "3yMA1YoBDMofKJLKtdLx7Bbwaij1zin99E84UWjS2BKd6JT7N66CCMTbd9PXgzwJtsrULfhr7TRzpsyjHaug1kRD",
  "key18": "5JDArVDhuZF7F5iHo9DcRL4vvypYZWPekSt6Tbphhw8thCXMSuKfrVSoNhKALMYmc4AbFHJpi98uPeRNxdF6u9mS",
  "key19": "34aTBMMjwBkNdya4rdH1TqB4vVD3ByvR79zB6QTK9WnLE1xLYV62Gsi6SF7rDrNFnD6q6LCmn5v5LUA1gL7pCq7s",
  "key20": "5pk2PSWcw3cQnnyg3qTnEQ9Zj9Rg4bwuP6PWMGEPkqtDCzHFDoqzUi7gRAEwxKUkEWt1a7PV6XV5oNdUFyg7Nnmb",
  "key21": "3LMaDmhZgo6A8TtFFpRydV87yGDguLhcUokP796aMWx7cBiWizEEAMfgX2GbadLKKZRA6KYUuhfZr14y8TcFgafn",
  "key22": "4wg1pzA1Af8PyFBkzYNgjdBzAPhoQvJ2Q3Lhrfk2ZkzZjeyU5NNd6zGabViktzrnzpbmsEPEPw6wvm8cksrTMtkS",
  "key23": "3iyoDUpzGS7cwWB4tNaxkHomMGAw54HYBVju55aYQ72owAxyRDXh5YThJkTdY7ShfHNUMWzNUCSUzHXYZMYSf2Q1",
  "key24": "2RUt3g7qYkpPtb3o1YvVCVzbHJV9uctYh2MQt4x9K85w294caXU8TVbYq55sF4T2wcJ3qmrg6Peo1V16ZWmP4NSG",
  "key25": "4Q91D9yzkFLN8YMdpX1BwH3hm6GW2VWGBTzXBNkFtMs8jXRvkNogG84UzCSL67qw8TgP8G8WERW71cvYZWMVPpV7",
  "key26": "5UTuC6GqxusXy6ZFaGsmf4qDZzRRvUzhorBFrSek6ub4HoCTMXGf6FHf3pL1BD7DmNaEk8s766W78NLJUGT5rQoD",
  "key27": "4S48dtZhNYeqHaHFidpj5jc2jL45jbWM62acVqCd4sFM8SfaR6UNZftRJi3F641wK1wxsWVWKDypFtDeQDxDkXAb",
  "key28": "4tTxNtvqx4CRNnqx12ES5cxkpraxDA8gSrPC4inFdHNDExKE5UjSzshBZgGaDpury6uZRajAPL965z8zLsVfhKUS",
  "key29": "2FSBnr1UdpTbPuBA5KLfSb4iWGywfPtiAYez3GxwBoyBzdKSBmivABGVo5Marep3gj7DzsRV87GBHXk1gMBxW1ve",
  "key30": "391xLbpYBG3djGwtNSJwJt2NVxkbgue4ty3TDCuRu2MBAVWtrkZAi5eyHx2r1FY3Z8YUsYXob7M7cLsg1RemDRNM"
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
