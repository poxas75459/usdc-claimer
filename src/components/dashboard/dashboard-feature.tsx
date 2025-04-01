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
    "5q45RVJkEiLTWmkgzArEgQY9zEgDyQ1iVFWZiyefNQpujTrHExfPPDbRxuwNRzUTLGAHtbQrFMhCR5UHdG4D9MTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSg8fivpFFK4R9aa8P7JfLcL73qCwePSZfdBoaKLD4kvrYZTTFF2tDvFFxJEYhEbxzXwACB1LW2cG293WGp2bSo",
  "key1": "Y7hmAzD5nw7vFJ7hsmuGQ5Wj1vQSVRefVpsB8woH2yaRQ7FMX3k1jJeCDpvGkh74x8TMXWVqEURq1LnPHXVSYYx",
  "key2": "UCMznZJsSipbtG5cynDrNkXTwSRqwWM7wNp3t6hoWARhs5SsnP7YgcqqyVgatLD97EWy7AvaMkDYATsKxnEPX8F",
  "key3": "AXwR5ZYeapfFmb6WgssdDjS5ksHrazTjiJbxU8yRvkYY4HcbQppk1do2DrB9kB5QJo8QGAf1A1yuUFXh961otgH",
  "key4": "2yAK8WpsLzdsjMu2FQHZn6tP2fcKqt46M4tttrAwgXSWp4rdf6PrEmjNSQrxYimFAmpXjrin6qAAbiJjuqR96WaW",
  "key5": "3paGqHdJVQZ9tAqFyLDwKosCiHZeF1F1R7EcLuuc5ceX8ua6Sj7oz3CiJtcFRpZ5wM4ZVxVF4p2wB8t6JSSthQta",
  "key6": "YiXExgQgPZwWBoxrqBZRm3wzvc9NCRHCXeFdcS9GAoYYLJopqDkow1W1AaNMo89FdL1tHwCLiQ1zzjhs7xAJiT5",
  "key7": "gGANALjoSfpgNEqjpdb3u6npWskNiT2JXvPzoL8qarYNzuFJqJ2uTC97AnDBWFY9yUNaA6WxBEgLaiK9NUJDxH2",
  "key8": "3taon1b8DvTPq8u5e5tFnxMydF2mJsnYVs1truBhctmdsfqsKCJYN1VEe8KdPtzkXMd1AMNywHvBJaTCD9gBYyUt",
  "key9": "4WpY6P6o3jvXBr4vUpdURuVafYL16DpqwRxMYMXqRxTkdjM8KjLUZwZJJUsvhWq83RW7APCD6CYTKmAyTEZPArug",
  "key10": "2fAAHkcGTVjhzDbxDzTrP7tapPHmf6UPjzviQaAjdNXHtc79QW8mutNcBEFTh21cuyALuwQFvg3ztkTfULRZFKQu",
  "key11": "42hsGQfK16Ja95YbmpygVcakKpRig9P2z8dpV45ePz8NsnoaGfpfHVkngm7EwRsjDH3yWp2LKedyMfUjEAadWv8K",
  "key12": "2pbhx141BsCFgd2RSiEqmHfZN9fK5oehhUHmQatoa9fUW2UegE1XVLNnssCfukEAN5cf7VU8Gjfp7HNaEs1oxCfL",
  "key13": "S5HZN1NZTPZiWWGRVJHv1W5LLHz3sLD17eEhApaZZVFBEqzu4VqT9wh65Sf3iSbAZ68nfewwiUW1GNJoaWSMhPf",
  "key14": "3P4NkXGCotrXwbhmsbRnuWA3Kz3b5RjgrQKDCjD3eJWfGFJPASxZpgdCedNpaSNdjHyz52rEbJLiw7EhX6pERKXz",
  "key15": "2QDgAePGH3ALj698qWmgrEXuiAHaGtSf4dLUXYkuhFGemA7Qb8JNqbw2Zn7NVKxR76JhVARbvp7gLL3quCmzUcfJ",
  "key16": "tbYX9QgdhkLzCz2bEbWcN9BDFjsQf1rCu61mMDxzWv86e6AvJi5s9pnmto3gP7KY4oxfKFPPAkYb8xikWkUWajj",
  "key17": "RYpfAw79G4pBbAjMYBxcrJfedMGhxT1vFkNdCGVDypgkVYucbm8xBMeqFvA7UVsGBhfrKGmCT4QC4XRNeG7Ekqv",
  "key18": "4yXk7zzbxuV3xfZUcPMyd65YXffAWiDMMkR7s8afryQCJ8Vev2hzTJk1BzfBQr9nDKUZ9d3732qXiWHFjTLYujw7",
  "key19": "5ZkCjYghNQCjmmKNfeELefnyiDPE42eK9Tj7Df8pKF9HHE4cjSA7TT3uQcfmsv7jzj9k2u8cAc72Dzz63k3Yqz4N",
  "key20": "464CQtNGLz8aiL8VawRYfcCQA6XJTfHDKKpHGMPoTzwWSGeVe6JQwPKHq6ViqGyTBc1qQXUga8DLujvTowLzeQBC",
  "key21": "5CApTuihvJLhDWErr4gYPFZ9QULX5kkD2zr1ZqK4FFAWontoXVBynhYRDa3cE7Q4izJ3xwoxWPmDUu6t2b1mFWP7",
  "key22": "r9uqhgZ9fQgpoo6Ufge6LXGg7RDfBrAHVDXxR2tvJz7pZ7MEuUa2Z6fDxekMZKACwg9g9ocJxfntQjyehvyMoF7",
  "key23": "4c6HBsYXDBu2Eriwye3Axi1nPZ14pWgdngdjrpEyydGKLjYPvDCxVgcXFbjVX54sFQ7jhLokcXYkHGRiko7yWsF7",
  "key24": "VU7vbxpWa8G8XiUt7KnNYTFQ9bgogNHXPCkuHc32TDaMzpXW38LjHPcrtdsabqp8HMxsDpt8zLJZgcKKXSFXQCH",
  "key25": "51kDYWCCzzv3wFNWNJwi3bJQweA1PkZk5DWVaVpkhPzri63v7ruDJjG23MtCnAubucEsMrGYnRtv6ox3TmcweZ7s",
  "key26": "284TtycBg1QP1kdCN4PerzzJZqNL6vbQQjghE3zQhi1h2dEJbG7JPFSNAemKs8pp5YygSbsnALfjCZq45icNSvbM",
  "key27": "52vZok5eyFurpDsadsG52XcpkKaDfysZQsR2rE3cD7gGoR1GjPea1JLpsDqCP39WtDjLrkueku6zhuVyDGEMt5v2",
  "key28": "4HcQnWgDs8BKTa4BwTrsA448RZovWrqup3vVXcwjFYjmWPbgqBMtbqF8pc76RGt8p6nvDza6ktRPtep8ViRXwZei",
  "key29": "3ep69GovbzWyWNLSvMSLD9a8pW6aoeogqi36NUZ4aCerFbNPbSz7iRZoosqKTZoUxLHdmxfYE36mhvJL6RQ2SGqf",
  "key30": "5bagsEQvELGS9xxHFqnebYQQF7rAPM1YmpxiZ7vnQa9YK6oDccRRZoM7gjYznBC9HSc53LcQj25u2yyyosL7mNED",
  "key31": "4itnQkFaEiEm4iB3kYeqyC4tdCGj9qADiPoFao3ULB7WSHZUwVKJyr9FWENcQ7ScXsTbm2eRx5QeKMYGykFbmyEa",
  "key32": "29UpJ8BpgLDc2sdPA1s6ZiPTtbPAqwTS2Sc6KmVdDr6wir1n4Mb348NegsNdYq7pz7TJUb9AQGkjrnZfrqTGCUSC",
  "key33": "565KzjFGAs2zAR99oc6hzuDujmKqmaf74FxtJpt2bDdcvtfdejx1CFhzoaiYQUhBUgrnZcPC64UJnJ6scv9cTDNi",
  "key34": "3onf5QjCYLHhRS652uySpBaiFrP2w9u7gPcDDLFHpppa6pia4fMn4kuhsdvZuCKJ1ihYa1qHBiUmGHjGPcYYpEeW"
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
