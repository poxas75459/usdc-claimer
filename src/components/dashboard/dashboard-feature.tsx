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
    "27fMNKKNjW6pd32Pa81j3fHPVP4PRdYUHKMfCEjkDQ1gDCRdwGhKDTzNPa2SMbWFDUKi1SK7zCi2tzpuvKZZRpNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "72h4JUtRsFeekssW9GdSsPmd4sapchqA42nFY2cNJhVBne4oYZc8Jq5nMnRj1MY45bgJjfHTxbzQ5M82TV9bWEY",
  "key1": "2QK8uRpu54m2Ay35vdt3A9TofiqWLzR4ddLPhekwWGUDhZGoLZURrJkACvh5ei5jSzrxPhw35WAJ9NFRsz9HjMzY",
  "key2": "29AKVqs6uPXs3igSkwXiU43r5QCU6T1wUAHpRz1o2hHmSoAiuw1Ctogm5iiYaE6zcSuqNfDvg4e4xe8UqVuztLYW",
  "key3": "653aq7KKFaTbR71TmUMKR4a1BWELiXLLNttScTdwkzpmTa3r2RqjXwwzfxGvyw6sr8x9UehLRuPd9yr1N4sV9JaQ",
  "key4": "Zdayn4y8wHWZBvR2tUrxBuQ7KD9AaDpNsgwda4ohDEefbahYasEQwowPKVK1aT9fbjDdUYzP6Toxm1ujjLCCMUQ",
  "key5": "hBrVinMGjb5Go2Qpr8V3nHy6Tp47YTcttUNtH2o8BRwhrmi9vaxXB8qPNaqhJtmvGMLZ3LWmJ4vdjBdqdq61zEU",
  "key6": "4mhA96e2owDTcFL9xCFY6hPVGti5xDdpJ1w9HXR17JwsCf6dNxDvqtJoukSmWKECsnBteSazwuRzZwyU1BuENTiP",
  "key7": "fyXscJrrR2K5x3jEfDt4UugqFgSaeSBoa6F6SmB28CeQEi23X9UEKohBEGGWwJdP9r6MhMW1fnmFMXsS3o1isgg",
  "key8": "2r1tNuKgfeBAscSEnbnAR4f4vLdZyqqFtqHbpdB4b7T94ZJqj2btGP4iQht6bV9QZPZk4ZJB91569cqMn31LhSFj",
  "key9": "3upCPGQGZx2mDWXnGxvTKJrsctN87wzf9Yi1jqfJTaBxoxNCuUcuRyvsmyeHBcDM9sUgMTCdMqLCwnVqXwGK8sW5",
  "key10": "3Mn9JxKv7qUsqZg22R5qRz1b1ZPFYzENbNyFdJ3vRiZXizQpYWEkG8sZ1uifFm3Xs2aZmjNCAUMxdjPpAHMeco4G",
  "key11": "iBBow8vR2VpRiNcZk97Fa9oCy9EV7EaxfMWZVSXXWMvaVc1owjs7tw6LfX61Qs4TFTLJDnoD7zMpNKmkrHs1QaR",
  "key12": "5Mn3ut1Y6nVHH5pbRaFwFEkSVYjMA7NL6xVidT451mmpUKcYf5TAkHs3PuW2mxbwTf57wDqjVyfhhBsSm3jWp7xi",
  "key13": "3cX8hkmmudi3AP1WgpBXnWknhuWryX1k9noEWVZd5c27wxcVCoduAefxaiYVEynaKpQKfBXfoswwWaz9vFDYLTz4",
  "key14": "4eMax1MGEDmYD2ZdukuPPfCHYvMcEo91G5uTvd5CAQm1o29rLMFpeJUQWGHtixaiJi7qpD1bVFB6hqcBdn5zuWNR",
  "key15": "4XE4BhvNFEc7yoc8udY974mU6LErdyrU7RQKvMBhfAaVR8pNHth3D4H63rXjmrbLvbkto5LrBwKST7PMdGefch6s",
  "key16": "4899ZgLTZJZzBvaf8zSAfQ1pFsYDyoguhNYJNKtYM9ETWLfKQqfWCoRkVc6TDCJqoEBC3KETQTapQqYzAgnKzKaZ",
  "key17": "2FaRVxpH8Z9TkH5jx7aUFYwwHNHXJSjeKs4SeMgtYMcjinW3Uj2LxM7y2zoCYqfxyXevW9bHdRUYF3w3NNbPHu3M",
  "key18": "52ppMLT8qrf1zUYBgmd9zgZ1zDWivjWZMMaCF9zoiQPGn9XvzuKvdydogBS89V9Ha3MSYef3uhohvfp1XvQTbXNB",
  "key19": "2MtQZMWNxRiPoFoJ46CGnZRDpUDK6aZcCrvrhR7E58qjda2WGtC5tDAduiBtcVe8uDkiiqE17zLfCopsGDbZsuQi",
  "key20": "3LcH92p8kmPvpEJg9qXQWU2E5ZhiGNHQ4amhWyFRU4kVJZd2hqPa2csPXQr84ZdfLEQcjU7dNvXU1m73BUGoKKup",
  "key21": "4yyuvSgftZ8RVUH6jy7yjFVtJhWoQpmFa9kZg2tf4vRr77CmgBiD6d9mcS1WenaLgHprXJ5bcLGtYRxphvTYD6m5",
  "key22": "np1bfnFxbjuaL2wjb5hcwty5gPGf4EhBaeHDda4xTWAqpgpEn4qgBqTKAQQKANunwYrbZdUJ2w6DnwKEk73jek6",
  "key23": "2mGqdMREs2bu963t996wdmw7yY3hPTa3zYprS7pvwHWQuHwRxUK5R7V1pKaQcS2n7DyiJusuzSqkyfstS2fiq1hg",
  "key24": "3WQuRoiFPH65HjRi6e69sqUw4Bz5iViw8mSzA2QZoYStXk7QEh3bUN2U1DSjTXM3Aig1fbRLhUDm5RonQvwWDajR",
  "key25": "kqGvBtcCZqzmY7eSjQpia6qzn5Kw3DGgV18ErF3KG293YgkYr7HHg31ZoxSkToM4eH15XX42J1LQuJdE7ZaQnzw",
  "key26": "n2qpyd5nXwEYAyRyYPKBvyWPnoFkHb3m5RZbcm7QsSsQqimkBWgKbY1ssE7LH9amLw1eNnDJc7hnWaUmpDNEEtq",
  "key27": "2NeNfDEJfYjSeW9Q2DbSxMP3m5nTsBAoYBuBTRRuF6694aVVc98P1SUydZL6b5EjjnxyTcFpM7rtruh8z1vX7p4k",
  "key28": "Epe1Hw3G1G4mMYjGdUJVPd5xtdmnbhDFy73K6kV4RPQ5pBXW3KVbGexrv1aH6JQwTZTywCpp9rywtFUujrTBuEt",
  "key29": "3g47ZAsuK1GUBpiQ6j5uP98kHL2VUCG6hroedGPyKpo2MGp3RhQVjBEkqQTGGM334fJqioxE1Z4jtYrJq13f5AkC",
  "key30": "24vNumQXwhk8skAczX6uZCUfATvSRxMqZULfCPiJ1g34VN8yKW2Vo2XUavuM77Dw6j2ZkxJ6MhWdDMiYF93KB5HG",
  "key31": "Vny4LqSUWWYYyVqvV5wmwEqgpZHPkVjPfwcqhn22SSNAqp1ipBsV8oB8ePj5kA5QG6MApCikxjNmu9ce31zuXzj",
  "key32": "3kao9hgvSD6BBne2ei4yyPNcqP3Gn7MC9EcF3fLDsPQwFMoscjTNejrvJJjdUmLPBiRatSUPQAYBypq1RPJiAZkn",
  "key33": "9JTiXyaFcZJNpGHUk9u3UdGwrQNmYoVKtQ8zudsAc5xM6bZ3XHPtCZXRXfzvjKA5WGtfVn8dkTwWU1AyJ5ZveBb",
  "key34": "fuSfCjHv1MHMvynkEZJuYVP74DGxDxtPVhQTMGz6SRDe7c1UGVMg6xg5f7WePYynP28ujgW42p43BWkbjbvcCxU"
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
