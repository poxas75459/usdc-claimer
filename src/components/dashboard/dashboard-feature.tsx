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
    "4whbS5Tbod7qJCSNn4teDHvTbwQSenunBHnMitiN6pgeDAjPM2mNc8PHDS9ukH4nf86dwtcDeLVTcZ4hDsyJZBf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YQ5nVPY9nzwtjs4qWiSiQRmey2gkjmfq9dg38uESyexTspK6ssUFCaHDtT52S5qVx3KmdWfb5TojffrtWqeRtri",
  "key1": "hhuPMTMWZSUpJB6GKBFtvht5d7y2z341TXvWeJcsZMji97aAFke5Q55wmTraohokTkj3iApHGY6ckzfqQUQeVaG",
  "key2": "2johnCuwPpPPU5r1Scpg1s7rhY2h94KHe7ovDbY2JHh4sGBUPFF4zJc7bRAsbAvHdfcaBeKp4XV7x61KvaHp8htx",
  "key3": "3wUxLiG4B8vpe5mhMd7uYfKLj4wn1YF1FQ2v8md2pJLLazbhmQBR43hCPYLkxkZ7qPLryktMH3JNTYgGio4X8Xwn",
  "key4": "3vrqJt9gryXEQ83JaquUCnKUf4Ekjggm7UcZrdspjm4NzZ9VLdiCde3a1gwyf9p9TMDkP1T9dfEZ6ThmYCFx4ndJ",
  "key5": "35CnBbmsXvc4GcwXHeWAByaZUEtq97UztuFK17Bfyy3zLgX2yrQwxGyKiFfHt5FkvKpZpHGJU5ihpXRYXErPWQ44",
  "key6": "49EEy2iHnspCqyRYcfXvGAjV5HJpf9JZ3ZndExVTeA2DowhLudyzPXdEQB2aB5amCNKUeoSYMEDJbW8sKkDHYeMp",
  "key7": "33GPQqVUgnGWMfpZPzu75t8wuRpKgbXznL1DLYBpb9V73kPgBGdLSCJT9nSSZRrzLT5B9HGgP1zRGktGAx1AExbx",
  "key8": "u5ajW2CcycKhA3X2sbQVZsAXYo9im8dooGhnWArsMApp5FqahR45fcMEsamPdxjwerQjJuNJkFWA8q1vXyRwwDw",
  "key9": "JhyWFnc6WY38yEgdFEKi6PAHdDFCgtZnDmveSnT1AW6hzpD3uQ1HAAq52evE6QrUgGNgikDWW4QhZiwEvMLkGmV",
  "key10": "givgCgbmpeENFs6mSfVkQUaxoXH67pngHxbJwd2pdN5SwQ84jYPnXpJAX7nvyXi7YtszTemA61daVEXdgcpA9AP",
  "key11": "2sXHYfeyuTkJQrwun7bTSjhzoNYSDgfF4WDS9ey3DBNF2zhKfxEW7KokLXi326gXWfcDvqvS17XmazMECqHpuHha",
  "key12": "31ixWZJjwXf2u7fB3AAwGBHbDcejRNGDk9jjNg1X2fq4rD5uzosH83QTsxpSYEr3ABZpKtqnhBzTW1ppVrNVRVzP",
  "key13": "3p6Yb2XieGQKf4xWTpJf3v7nzuWmGbvQ2BjHzAqWGfEDE3WthcjSwvPPzodVXTMaGraeRy1Boxbj2MoEVAeqtXYn",
  "key14": "2dGkud2FZmmF9uioiuHZivkKA7abYytD4tXxmhXG2MrgKQ5GVYr6iEvBUZW57GJLHgHHu8cFprQEiJY8SpMcACje",
  "key15": "5a2SDM5ynBtmJQLLVkMRYaZKngp3v94ASpkWRY5AkUeWPARBu7nijMSDAcgSNrmXiyqp7oBd1DZxAf5TXPKueDt",
  "key16": "29SGpMidc88nX7xbQ5d7Lx4EcSwcS3oWJY4pfRzHWHMXWsgrKJjEXxg6YEwJycxrCBhUrVCupTMRqRcGK1A2281e",
  "key17": "2MSSxPQkTPVhebcF5SkQudYsniy36Niq7KgjeYiZt12FDmpX6kVCgJE4rM2wRHzU5tcwSeJZ4wgsyGnuVdiqWN2p",
  "key18": "4jFN11i3wLXQ4WvHxjtfu2sC5C8wu4muSbNnHDr2CaL4Af1LP9uLuVRx8ZKzm7GkdW5q6cEbJsYQnxSouZvtXtEj",
  "key19": "24yq2gM1ndGijjmai7DgSbLpxgQyme3rNf9KQfmWubUy4nmSXazyWsjXi9ewDA7YhZejcfWRBZxjQ7yXUu51wJrS",
  "key20": "34eMXSeLKnZhxz6NQS3o6e1arQpGnFL9KckrY7LgUdZvc9k1wvKqvKpeEXFazG4mC35pD9tHa1PYdo9Yrxh48DVM",
  "key21": "HED4x82N2jQbYgFmTfjAqztMV1JuaxesCeY8bxxm1jzVzX69y9m1vBmHZcwPMTsGXmgNfMPnsdH4Ffuof7U1zCw",
  "key22": "3PafoeBdF511xoJUTLUrXbkNXonob7UuGspTNNnry85tndQ18hckooKd6RpyPS3DcgwNJC7LUdfUTXpwnp6L18xD",
  "key23": "WdNu6ZsZms1gcR3LmMtgkdtxy2kdhWqamaGS7dd1bgoj7qAE4vrZvjikoBEe2zKxGDohR2oi3DpfjSHTmzue56o",
  "key24": "2XnxvVSWrHGcfbEptLHDHokrgyqRqmkHY4apFnyhgUfbN1e5GRf9Eu1hMEJpadKwrwoXQGNSjJdLTrBvB8R9X9D9",
  "key25": "595zFC9T8TZLUkfo3GcZoLAeUCkne6B6yGATHdUnRkWnv5STKr7FzFWnJrXRe9okitCRGcDGhjKuZULCdPsXjfah",
  "key26": "43sVaFr5DX8tnMCHwfjkcpyq2eTHRNxx4fK13cE9AqkJTpUrxp6ZFSPbcPDnQ4X2NEHx18TTWdp698C1oeSUpXLH",
  "key27": "2eykgfmzCPprPtAxVEoajzySVUacq8fKeW1NxfkykHUYPi8ehRD7xDvtZZHCwFBFZ9GYZNR4Sq4voEXTQRiHVXB1",
  "key28": "D8LNQM7zD8yZvmJ81mW1XrCtLXrA5H5TG7ufWCSnfsXaiv4YgrwAknMMBDNbrbZXyfvpMZ8YzkJsEReQK2DyLGu",
  "key29": "32YJB39cQNWiEf9KhNGeHJpAUdY9oGQRgnYQTbj8RZ58g3Vd7JGw1157i6puRR6Dp9AR8ZnVHwHSztqJe56uRHqW",
  "key30": "QiBHSfUXDV8z7snjgEKs9m6zMQahDcRjnS5vDT11cmC3bDhZRz2M9hfuiqB7sbbppHVgfUq5ZFakMj8uezSesUZ",
  "key31": "4aSaWVs4VaSKL7pHmzk5UrRQ2E9gwfRjuHdgcXHWynUzCAUxyep8Fm6UVSwCs1M3KKXZSV28rGdQHr4bbjCUuQia",
  "key32": "5R5F8xgwpEcfmL6Rq5JkUZojXYKUMdjt6seWrErBgpggWVonYczKxHrWU4yahnewFQQzoq2j9dGHEAjTuC4FiLyr",
  "key33": "5YuoBKAGUX56qpXPAqhnFHBj1T7Kfm1ZFxnCUmygtHw1e8NFArrDryBBQLMjFWu9mM7B2fVCmQBUjJQpsEXbLKcY",
  "key34": "5CVHfR8qNXc9L7gmR3f9xycP52rMbgFJutgYazEPp9Q39WRK6ubaH6ZysBgQeotSDsm7veDDRAQJ6jk4hDTW2cpv",
  "key35": "46kSauj1x26kkkmGn2Q4w3GW2DgRZkbfxZBz4NHdVJiVAh7TQaALEL8rbsS4AWi6r588FbJreMqAem5EaHsi6TVG",
  "key36": "5rREgLGTgKhFrm8N6H2bTzNwDD9qWYKMbvGnQQURV715kRZbvhwTsC8VkxYBm4ihCTMc81qFi5K56PGKoDhEpVs7",
  "key37": "4eR5vDryk6eMfZ3rzTvePEfL9nkDK3Mdto1w3HEFiaPxWjgfBKpiYZm7ehFoyZcih3Y23C2gqBdnSbSvr8PRRaZn",
  "key38": "3mBPHEr2bY7BdoYwVX5dsN5dRXxu7qsfxKvmvvoKC3TdtPbDS62av5whfzcbA3omXX6ZFdfk6yRpSbugLbEDdZ4g",
  "key39": "VWR7E34vQQFSmihNiJUtagZvzTavf3KmVLxQghNKup1H4MUX4bDLHriEn1NxxH4yBUg5adtZVtxfubxq7NWkZDU",
  "key40": "3eYdGoFgBmksQT91sXER3qysz9gYuS1phKMcoTn4WhKc2okYz2QeqiszVoCdhXJLat5oce7eqvwmc6AwAmePZVKC",
  "key41": "4JUvauNsVuqvnzbDRASAVu6Y99D2NPaiZCqcHB1Cbot9Ta7AbUYz5XdV41iEaPSFe8ogKds5MEQQYSJvVU1AKsHh",
  "key42": "4XVLAqB5mNvCYJzkTcMH6w6smNkSvoDeojePFSvVhSPGjRFGowzRFsTH5sDBr1JDqNgp5nZVoakRyb9R8avp5fCT",
  "key43": "2ZExeeoHFKRxdnPUuA1DEZ13Zi9SdX3Q46xi5QYQK4rHLkyQoZSGstqzmg8tu7RMeqCnVVddkMUJ1am2sGdy9SxJ",
  "key44": "TwYhPWGh6XocszJVmkyBMSqkVmqi9gHHyPcJutGJyKAXQB2CbEDT13NS62gwHM1Z5wcz1yzWqhpTjEvqzJv4Fmn",
  "key45": "2H7apQReBwmgAQ1tssGCeZgcSq5fAQyEum3Fhnu1ZutERxzXGzaW6yjk9eXPSXw3Y21CVMDZP86ywah1JTrH6Wzs"
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
