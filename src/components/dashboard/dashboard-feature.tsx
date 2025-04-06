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
    "5FhNGBMLndg5fbK5EkZeHzgT4vbq5xzXM9parXmxzAzDnizoTk7eXtiXKpC5EonciqEhbVBwSVDWUL28qGL8X1iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBMaiyvr6GErAptRFNFHMWq5PYiLUczFnVfu5n5D3vB2hgCYhnG4PoB4uHcYwWuoUqUD4DJknV3gduDDYgGBrGr",
  "key1": "4K6vj84nUxpidSrBEP6ECeCmGpBqxJAEcTGEFots8ppaw5Vr2FmcjZYKXbSgjGrVEwXTp9Yd5ByMqas9fikLtC7d",
  "key2": "59S9goiXEea3GGQBbNmCgaEqhJDJztFYDSAkuv8vqFRALHz5Vz4PobLxDSZwAEEsuoJkqJxzZrCeyX7ED5YyEvVJ",
  "key3": "tGMtEesRQJtBNNNFEoM6oh4whYMKDRA9coFMk4s3sQEwRT4MiYvEoHu1Bj4Cbcr2bumXYfhGhRwnsdrxcis8qoQ",
  "key4": "35eZmovYAfctYM6WRLbp3EebVjJ6SnjfthtB5jDR6izxtrhSPDFu5YeL28UTZCyrM5fdXwEPvrcNHL7hzALu4Uq2",
  "key5": "2kqpWpnxemeEwfJUdEScs1RNc2kmxBy45k7wX5atskM65xfsud8gGazTyU5UgtUZ8BXgcLTqDG3hMYPt8LnTx37Q",
  "key6": "5tjUfRN3DXiXMQmGfGrMmDWuz4jispZTGVs3ofaaWDM7wkQJ3bxeaRWBbbv8RKr8ZLsQ3zjQ3xopwpKCmWVUp6Me",
  "key7": "eKteaRfzdaT1zv9VGuoXLaLXb3As6wwKWjfce1Bdw6hK9fdYBbknesdQhWcjv15dmKCtotf125pcS5M62VCrCBe",
  "key8": "3Me3HyPXf47ivL7PdY61y7AK4ndyAr8kLJ4Uxm2E7sNVg8uNnakRAgwL7iwuEJX5TtZxwAEieZDK1RGeSKnwQ8jd",
  "key9": "3BoJYBCKc5o5UqYPUXtPUAPBkB1S8vDPWBAAwnP5E6NmM5q6SYxjHyczZojp3v4F6XBs8oavCkrX93rJxBZsbF4h",
  "key10": "mRcZG1NUvDdTgXHtfcfV2nkCUovjVrGs3LD15QqgcicpK23YfEHdjEynhbDPBVj5gjQPppDvMwUfPw9UiPQu66c",
  "key11": "5LChUMYRKAhGcjQMh9WYZ4zCNNsG9V9JBQk9ZGTbtWVfy7aSVkM2bAfKgQgyE16LafiJGEXFDuKZaVndLnW9NP6Q",
  "key12": "3dXY93TaJNTW3JZmZA9FBWMXo6QVLKkatfjvB9RuQTA8kF73RzH9bwTqPeChvjSdifcQAX25ZrNVDQHDSdwTP6B9",
  "key13": "5bP87KXVc2LtBQjWgpBvybZ2T6pehLY2Q6y8rFWdEnKeU7RpCrLhztPMgxhBmFsPKeHotUHEpARJ8qRj1AyRz7N6",
  "key14": "5BnZfKTDPq2LcVCQdPGrHMq7jc12K6uJgfgzo3V83aiYsJcXjnyRnm3RYaN6RhyGBU9MwUkRtLH3RX4FfXpUdANP",
  "key15": "3G5KhVVJPjCHG93dTMqHvb7e8fMbCLrte7te21PLvVw2Lsc2EdH5aheAePpBdycCYPAVB4GUMtfMsgPHPfQfwZFv",
  "key16": "4SJt1ZQ9SKMiCHp7HR3egwJRcv8AE5FypiFoZzQMuwKyNk9Cn8PxN1RAQdhrjofpC1bdop1SnDS1xRTKPKw2eVPR",
  "key17": "3gKzJzJNsRFA53XpXonfMxe1Y4FFVDKeCDuE5M1hZVpW6kprcUXivCRgxRqjdQgNWbxgVPaovqLQHu3MZ84gSduZ",
  "key18": "2KyStWjyvArHUi3wrR7Qb7uN638jzqxwr4qDsNHodV7FCcuesXqfpdbjzkQ53Ty92Z7esg9W7tc31mU56tQL4Tdu",
  "key19": "eyf1g9CJWZVfHWBugC56uRYWPNULgN6ZpTaXK3VyGGQKiSrcQjF9WRh5G19ooCbMAC4crcn5MTSayTzEmvcCHF1",
  "key20": "2jSwUB3yngXKF6zNZ2gv33PMGmXsvtDuMBnrDpjTDanW4jEf729Z52h5AnJFHjGjgnRKKomG4T86uLt9tQ963rbo",
  "key21": "2dS7FMebwxVUWEphUgsG3LcEGDguKYTGfwZ2ihuf21SGXJKyJVWtAqrC5mTjADJ2A8eLFrbdWVbeNiNKTs62insP",
  "key22": "5DJyarHcfoKRCHuuuFwJ4asvf28H2fL9fCufBNT66mcsxGVvnaDAz6N25FX6xxNEEcpCbaZkHcZBTXbr3ZiQZR5C",
  "key23": "AtuesKNJLAGunso4AnnfBDLHxaAE41wDU5sFnWAeHoqfAQWLjpHVHfNFeRqJ5KkAtSuirzGuoDVgENcdHtziJj1",
  "key24": "4iWJeqtL5HtAE6yuHHaJJ8mofi1bpL9crq6LY5AcEpfWs1WgvaJdqdbmqWgZZJ16bPCBPbSWKT4yikaHGekCADfE",
  "key25": "4hJHqR8uPgiGBvEPRbkgGE21gJZHuy8TWkNnssXi2ZKHiV9hDX55MBDXEdUvDGaHYbiXZRk6pvSiR6EMVigZKs97",
  "key26": "2uGo7KzQF3Bgc38XafvQCUNj5beuqsDuSJ9KvTsGcnB2kZNLxBqUVGQuUeLpX5X3QGgaGPBPuhUf4vb35LgEc7yc",
  "key27": "2JnbjBkdtEAeYCC2q1QphM99BrqVC3AVGQtomh8YyscXchwCVwcnhfsbk9MwhPTxzmY82Z33sZB2AM54pjaJkMvY",
  "key28": "5eSWWU4VqaggYnpeMZTkVhJGYmEi6NyWGuua8EoUo6DXRUwuQuYToptAE1UiMueU6gdqYWkNb72GM7ckekEJ9Tei",
  "key29": "3YxqkmGuikexkJE5VZVhgRuHTSJSg7Q8dJFhEMpa4giNiptiXskeCLPku9zCDTuCt7xjhaTRks94JUJ4JqCFGGri",
  "key30": "4QwRpajnRZeNK39ESAtcvbXpwaeNkFfZUqMhvgFfCYE74Wk9t4nGtTS97q2X2zmXRZ8h9WMWFbXA2w23v3F4DUGJ"
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
