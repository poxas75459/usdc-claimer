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
    "5JmCAPyrznyUZ2krDSKgWGqjSstoJ9wRUHEbiRin6zsZtmqag1dGUohmv2PR2YVxdpgfuzEvrtinLdP9dnkgyKLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BexSjSVcXYE3Pn3Tj5FsY69EZhArytm9nvExkgJ2pKxN3mbXBPWA3m47ob6K1GukkhzfPwqigditLVFS2Hia7hT",
  "key1": "5eHangdATqcAprafnbUUsBZhkciVkEiXJaq9ABX3PdbPE2gJ3cYqWRh8x8XQiv11svJ8SdfwSV4MVPRujMbxEFgo",
  "key2": "hHtJpHrnY6tKfEyvsf6jwdfQWVwmMV8LcK7SM9f6wdLN6XwyEaydoYVEcJxwkNNqvukTHTRoF564NHEg6FBNQPv",
  "key3": "mHCZPkBLkfBz39m3drLC2uVqerDqi6ro2KskbojXoBburcaL8WYE3VsVhutzPjWZZwFqymojs4QDwZnB8Py6v8X",
  "key4": "TbJte8krGS6T3bRvG2r7MpxQm9jEYUHmMZzBYNpE7kmE84iJSH2qdghkRM4wQBbRqKPPJJw1gWn8wLpqpMKEu1L",
  "key5": "2kPRSoXMDYG5k2XHfEq55hDvWwEmdKLqbQp2td5qyDosniFVjJjSQT3LEzFQjR4wi1cR7P9WR1G1nkLUy4DCdTsy",
  "key6": "39ftkzsgyzzjJBQ1iDtYCb8mi4ATYBCyjwmUpxkYipBaRzUdYsuiUABojKXZbnaCSmFATw476JjYPeQMWGoRncy1",
  "key7": "3on2VMe3zJuYrn7Nabg5zH3RT3YDURaXToxaKfFRBZL2KACbEUnjaTGBFi53YaDoPFB1NmLSGarcAMRZvtGbKp6w",
  "key8": "61d4xrLtTifVRHoNo1ucJqAtbqhBmN7ACbGUNEPmVeQCDURTgufoFidnrsPdaxaaoW6hKxwN9hhqr4KxVzjqgnvU",
  "key9": "4kji1VsUivKLX14Zx7TeZsafKY5cnvKTK7ztezkpUpE89GjPVv5LMiXvMBfR7F6EdS7je3Hm28qvioyseyMo2GfY",
  "key10": "4NwqbVba6B776dSQUNzwm3p2zaeVGDt2PiMm2Uk3jZkqzWw4TLrZNNUQp1fTxCrhBWWtR5sGo1MqCjLDCvLARGZR",
  "key11": "EPA5diriEyVzRcwBBFC17JtTbxSWAZ8tWU8Y9TFMMa8w9bT9Mf4qbMaMm9fTvuePUXCyVi491sfRC3uGQGN324R",
  "key12": "qQz9cn4sKDXFn8tJtxM9qTutmcWYnC8ottxsvVu7yixTUtPbcTbhn5U2TDr1z9zf87aSkKq15BzjzrLEvx2AgTM",
  "key13": "5v7oVzndT7Zm49gjXeu9at2iCoX68N7qwBbpmFoBp33KUhWn52nu1r4piP5T3JEzpVuBVNmufutJssH8bKaJsQBD",
  "key14": "4Y2fPnYdr6RfVkqL7FZxzGGCuYLU558McFQ4CyozYNWNCZVsP29pLiBvGBpih48Rf3rbPuUPXJJM1HAsxeTK7uEr",
  "key15": "eniTyJFHbCvoXuoChtKdyvBrfe5B5EA5okkD2M94fwUYGjZSzgtpa6CGBYw87SEMQj2u7NJ93hvDabZd2qZsyAT",
  "key16": "4T91xQTmpeEgd5KAETrQgdi3JV79nhycCynQARcQE4PT9heFgLjPX14uGNZiuYiAEnBomcVsS4xymBMtZH81cGV9",
  "key17": "m7nvBkjYJRtb8AezmrzybyRSjAJCjnQrhpHubSo6KHq1zEfZdK6Yy8axNNqRArizy7wwXYcUcAnDNqgsricz7W2",
  "key18": "rZ4NZmRyZbNPoDEmfnXfHygarDHK8HHjXoSD5hS2qAuqsemDezxwDKmx6RgTTduPyX9NH8eYu5VZsTCNjqJjwtB",
  "key19": "3UQtpvxuJ3haaPXymBQFEZCJPWJNjeqKrELjJti1KZj4i2Fi3veyA5JkybgkRA7FBBdW1qPDp6pL4Gf5kQvKLe11",
  "key20": "2WZ6Xemu2kdWkM1TErtuJYqoWBxjrANamGCyFWxkz4bLB8LxffKS7m9DbopBGdo4sZdJCyxRA5k9JZZswXd4HZz2",
  "key21": "2aHYvh1QjYFk6HMuwGXe7EDTHrmoMteUJFARBb32GwSgRBiaDLz8dF7vbm9YR9MefDHRapQfcrdwa569UY1QM67g",
  "key22": "13YJXwuwCukDt5dEhRXXotHqdUiXBDVynybrGX5MRAGVsZJRZqgiMp2VBnTu3194ev3Ro6yyGfmocbTgXDqLYBQ",
  "key23": "3wCF27qYqKg7G5uDczyeQqsqXvCAKwUx8uj3xf77XiYKRHHdyre8du6uEBKSnxe1zJncSQ1Be1E9bXDFELHdYNqx",
  "key24": "4vH3FV6WYRqXEqMPZ93Q762Sotj3PZ6Bk1rm15BMVoMa8iLN8m9H1EtRDt5VjhFHxvncVbTtc4H4pKmsaqSn745M",
  "key25": "n7BKcmXVQHCpBZU916LZB55955GcJ5x6N69jadzYoqaB9pS4W32MQiyXhk73CY3PnmKzW4SMkmznWpJYKTdBwd8",
  "key26": "HnJ38koccs4j9v5svogSivg8A6NnzFQ4yeqeneH7qRm1B3UfS8RM5yjnomKnS9vNAnDLejJJZypZrnJnAWXAY7f",
  "key27": "58rkPwo2DDtexscHsVjGSXvanGsFSvQ4mAyJerWJmfdxdr9aBpTKAAUaPYjSa8xz32qHpHLJHCRchVEz5ecvcXDw",
  "key28": "3JhhTf3qaPdZLVgrHeHFwYnZbL8WL4WcExrwn6ux6dwHR44LXhEKjhXRx6xurLnfFQKiWXS7R2WKzVotwp2C1nmo",
  "key29": "4eC8Xvh3QnfMyikopYzDJ7RWHuWL77siNmZsin5sQdxGnAZo7gEX7yXoYdZGDGb8Bu94T5qjLfDN1zsY55Xo2vNm",
  "key30": "5ttjfqSk2f6uBSemY1Dr83g8yhGUmnewyXN3WoFbNe5bxD8Sjm8jkdyqhZb71Yrpev2UMixz7nAEooAH9tJR2HeC",
  "key31": "4U5LCzDbq7RNMC3ftK67fAMuYshCSDgg4FVeCQWktWsVKV5zfcibFJP9Ekps1rJYArtkNxQtHKEPwUkmmvwWVfGs",
  "key32": "CgbwR74NUodVjmJ81tX9Tdq1Lq9UupXMbtBiESpw8PUqyLy4kKBUKMWruAMLK8T8Gw3Bmspj1YmDyEGQU4DSn2o",
  "key33": "AtjwMeHAgi7Hc62KTdecH7kWJwhwBBgJPfGLrL7YyBoS7Cw8fWJATWzuE36UxXanFh2dKz9Pjb4dwH3MjvPhkQN",
  "key34": "5hGcpRcr1jRmwNFpi9BU9ppfdGPuAM16pAEWkKehr2N5FKqPNZ75bbyHJPcjce7K5AGTM2r4NHV4SCTksameMxyd",
  "key35": "5RDSktV4GM727XtMGMaeQ9B3cgT76HakXsapZvyKUtnrShyrpN2suz2pUA4Ebgao34vuzAubpTFoFP8t7zQpAsRm",
  "key36": "2rrcQUzn5C73vDhMvEvJoWTxg8mhKoi7R6ZM82K22r2oAVZZL5wZiARzZTTbBpWsqVQTNPbXTLMGo4aQtJCZZjyg",
  "key37": "2PVS7p2XKYxyi9xSx3bQ9bLpco1mV5RqVtdNzEgvuVNxo9jPjqKLvxmDG76HBLojfmMcNeJP8XMeJnEMr9SmgtQm",
  "key38": "3ruWGFtjo35NMdNY8P7KQH6EzExf7hPCATZm3VEvQGUnzYKWEBXAXaGYRM4iRVVeGL5GH6G73tW11LBXDMxF8fqf",
  "key39": "5x8RDKyrTPZ3SNziaqQaNq9Yr1w7R4Dz5vGeZXU2CS5erFbBoJFYH34cuFbXHU7FDH3m773cdn141eUq2unFRZGp"
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
