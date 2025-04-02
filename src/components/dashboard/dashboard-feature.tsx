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
    "Zh3HBaDSq6qz7J81fQpQteXKtNxbX2X5GAN6vQMJfmaToHV5dZ2ca9AL5LaLAKeJZzPELJPkZyFik1wH3cJ9y7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37nrQ88U21wMs6jkNG3QtYZs6LPjKV4eKyTXpXmjwBTS9KrA9rH26iR5Ty6y82S6Bb99GxdUQ8687g4HZ9qzcKaW",
  "key1": "W9QaUW6xTdkGf5J3Zo5PzBzGB3QFj4VTWCLQJCdHTJLXxo3LcJdRrjLutMVe4h89V8RKaAaNUAny3nFEhCL3wyx",
  "key2": "37QbSJMeB7evP6udWfR867dwUYwnzMRSLB5wXjb623FA9yRDTHM4GZUumvk81d1SCrPFncRduLGQp4CiB7FjnLFk",
  "key3": "MsbAhLBAnkRuaFiKAiiF6A62curcKw99ksTX3dyUJHv84EsFTs5zgxMTD5PtaCxsirQvdVmiCHd7WUkKRdZQ9B5",
  "key4": "5anZejAfUnZYne4bHmKt3hnZ8JfeqTYjKdZJ5AzpHNntS1f5nqnYJ3mn8y5F6zrZ45qreUYtV6QGqUXwbAJLBB6Y",
  "key5": "2Mka2NAEYYCtAUkQqmcumHA2T4EMkcTk7JKLrCkGALgVb8UZK8TPWewpWPnym83BkpbPAdwE9WZJNS6EsfSh37CX",
  "key6": "VNi2C7fT2iWEF3bZ6JNsUpJP2xjoxML8RMrcF8gNSc2xeshafX2Z5KSpJX3TtN4aDiw1ze8Tkf1tSUBEzPSUkuo",
  "key7": "4rDPm8Ma2Rwi6iGaRcibRSYNm6oC1kk2UojHMn13SP9pb53iBHkjvMuv9REc6oFoEu2HbTSaNXJZ558QkN4CXCFW",
  "key8": "32v3FCepxTxjfzuaq8hnTA4tCHhqDrYsEA2HCyG95MEm4CoMaB1vhuW2nHeuorfVwyzZEgz2PipfgmpPHu4vwE5w",
  "key9": "5y3cU5ajCG6tMisSMt2HWbnzZ7FWSHmvwx8nrJ4TKZxntLN7NAfTopBXUgpggdUNBVP5KoF7MtbsYuyqDszCXmgf",
  "key10": "3w5rQ96Wur15JktqGHQJMyuDecjzVnVWDSRWwthgan7DHqkJkZ6ueNZouJSEug7eeXTp7smfD3ZdBu8Titwb4xMz",
  "key11": "567XdXRU8qFPRBqMqrkYF36KXzbwPH5xWYBdp5doyBdZpCP468qawE6F2ELLqup2rfjZJonhP7xBfPAp5tbw47Ta",
  "key12": "4Q1vWPSHAT6nSxHfPf7Z8J276HpDNh8cUR5AAuhjEMYvdhNLFKipXxqP8EEKmEvF2XvVQVJXVdh9oTAjSSyCMfia",
  "key13": "uk4eWG7Rjv4P24tQbiKE7nYujABwPZHF74XNhkQuLfRnjJWHzfgHtTcksChmYgkvdyxMVCEMDwhMRHuE2f84UzJ",
  "key14": "5roAhRLoP9Lh5JSTo19dPpzkhumLMxkXzyi6ZLM3UNAmdAFVkSnoq9o7NyzogcyNtAXFGAeHXtfKXF3NAR7eBo1Y",
  "key15": "gWcPHAyf73tbrRLzBGiewzWLzbucxi8MSevTVJtpsmGUWMiaHuHXmkt3mXpWzURwC9RNZ9MKyovi64aGyUQHjWF",
  "key16": "4XA1M2ts9ncab53QN2eDHGwY9w5B7go4Scs4BeJKCw8AjKUohRSS5YrZf5iwbvLBekAYkhv17fxrgYk1G68uLJsw",
  "key17": "4osqokuoQ8QGyn9AvwTy867WDbeYzgvcPnCk9Y23KjgEJXsBcGN1dqWcdWSPWRU76PXtkwe7evjMk1obGMtTvE9E",
  "key18": "5kh3hepcd68RDgM2kx2EMDXUe8A28VSEYSWMry7gNvQUYnJwLdVpxCxxQQ18ZyXJ1kNbRDAJnTrcg3ABUum1xvDA",
  "key19": "oJwDWB2v2uJebRBGgguw1Nsgm6JCyoxXKKwUxL6DFmVmSfBe8YDZT47hK4wbt6HAgy19EyGr39UD7gMMQA5gsg2",
  "key20": "24MhmFe4gtLMszwAQGRaDAwe9kccjCbz22S3oQSjFCXAYMpfRHZSnWhzA4QrURb7Hco35d4fp8nrKhJef9sE7PD4",
  "key21": "4Gj3XRPZvWRXRoRhGnHYau9DeJDgEDLdUjmmy2VjLiB556S4ozDv7YHxVpE1QV76jD3MUBoPhSrGw5AkdnoPcTFQ",
  "key22": "5Assd8Prec3T6zWeAUGxhtyJGfsDDzmaK7DQzHmsxKQ4cn63QpB1b6ezL1HGCmpNRULQBYERALahr3D5djQggp3h",
  "key23": "4u4MQa5WrbZF3fhUNXmxoXqYg4jJVygM1tkhPmdPMHEhyxnQMZRi951tGjwf9xJLxKLsHgCo3C5edXeAyDzWX4ko",
  "key24": "2aF9EoNthLR7QhBtNmZSmP7eiUPN1qCmgaYqo54bNJrnyRz3p3rkp5BiDNA1DmDCqazSMYn7LY6ngisGpRN3e4bH",
  "key25": "478ZY7ktLrcBNGnDLDSicU8AfBT4s49jUzmUpDLJfi3hguGsg2BfFaaALt6HHvZ3WKf4Up2jhyGBJprVSCX8HKu8",
  "key26": "22zn6ttDEgJ7BcoL28pf2GZkoMsDJCw6x52cPRbjuhtGzvsFyDvweM1sWVwGAoTyjDHPuDqBYGMc6yw5J8wMy68A",
  "key27": "5fz5wu75PibA2uwkgr3WupsH7svCEWaotLHTC1GAFh9EAYDNTFXL4fo2BRPpd3XWk9b49wXcik6FatwTM4MHuGKm",
  "key28": "2wQfBDvVACuyUSfquBisv6NjpjjcNjhhqeyV9668BcUfkfrCSFKNvCD1CBu1k7DEEeAq2c8L5Nj9Eo7xtNTT6ETB",
  "key29": "3eWfsEz6P7upxvnVY6v7EFNSvx9RmQscPR6gXJRopmqMWgqM5NeKbBeLxxdovAJs3JtSGcKbs4dhtUBi5tHGUkQ4",
  "key30": "GG4fAfJkYyTQjUFgMSn2pLEuBMnuLfYnnvtmbnc5Szy42h5N6G9bR8Cs4cNDTTx1DoiS1JXNRCva8QDa67jNmAV",
  "key31": "4vZF97XmQkhC5JbbNqfsAK6RNr8zGkxJHdaTjkjvY7ueJ8t7Ct1mpPk9uqqJALnnQoqhG9DXPsFZrk3rzv4Qp5b1"
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
