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
    "2r1xndVoWrGpPT3JH3d7KNfMVKpKUCAGv666vf22P85crawDqF4BtF5bb6ZcYe1sneHN13AWjJiUEVvSu5U1UyAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLJLFdvNPdAFMvNo61hogF7EYp4ap6CJ7mXQB1tdJvKuGPfw6pqRVChUuU99hSRXe18QrqADhbtteyjARj6LcPv",
  "key1": "4UHJVem4e2PV2seTCBp78bdo39FMWaH3rM3veiW7oswD4z1R48PF5Xks9BwspubpTMzyW4XRREMoJeazdaXBpRY9",
  "key2": "4CDHR1YVcerPYriouo7FRYTfxrpcqQXhEf6nzmb5J5Smv8TVquM3rLYBKQxgfRudFYwyF3FzrpFzxG9dHCBLDKa1",
  "key3": "3R8dmNhynyXxxpBsS7vBmCpE4bjnezc4Mjf2fnc2LsusMNWBr3PpYjzyH8z43z3nHtsRF25yZUyW3cK9dTNK641T",
  "key4": "516mc46Kf99TZeg4doPgUEL9Wc1avc4rAPW5ewBfrKYJeksKDAY4r4YvnZSvv3rXKT88AC35kRtduhcQzUDWe7PE",
  "key5": "2oZNfgZozmWafhb8BPynksDBws3vnHLUckhG9y51bgyriXBPtXmoxXWmrobEZBibhW5fx6njEEgKVaEfGiCXvJox",
  "key6": "5WUUXrdbaBiM2oy5FkjEbKBL5oG59uxWXvQHYxKbSeH8ASFTehrJehkmfg7WftYGfD9tSertYUjvX2WumLAW5DLo",
  "key7": "2hWCqDqiyibfzBiLdeTJDKBME5Sq5ikXeouweKspX3k3rVgqrFdVh66BNsBb4cm3Xps18NgaUEVPzQ4Ghnf4CKo2",
  "key8": "5JZabmANRQKQGeqSFTc9QeQpmbSf5WNyCQmmYZ1cmFhCbVs1ryeKj6BG3D4xc4pdK2vUeT2p738ZrERtLgaW4wrN",
  "key9": "LJHwJFzy3AFQMbAm9Wvjv9gMdsye2xzQV4Zn5fGTXXXofW2M87Zg4VkPVnqqXs5xWWfBSfCHzjQMzz9uKAqNams",
  "key10": "ujd1e84WpL7ZzvGi4faCndJjyan6evJPFKAbtT5ZcfxddouqVJbwzo8TXYsfXXt2a9hWuXr5NuL1p5XdZR1kuVs",
  "key11": "5iePNFS1nLN2mnvWkarMVVib9iDGjBYFCoxc4LbNKXP87vGm1nGvF6qJFrUeptv8LmmNLnFmru3Ja9k8UbjnKs4g",
  "key12": "59pVgCQP4bWr19D9W1mdq3XvAHpuZ7E8iMYM2YoHfiVUCRWQgcSLqKtRTiTfT1NPZuq4xsnnWNEJwQFkYmz6iygS",
  "key13": "4pGqTKHCAZhgck7DAH6zs4j8WHVHhdUab1JveN8kR7uv9g5sAsWqnsTqQNx8YKe8M5LtMoq41Ue54GQB3gw7xdrV",
  "key14": "4BMjER7EcaMcc6EvGAXN1uUfRLsQPjj9w4eDzMYumoq81vKgGWqgTMAjcBchojBnbEAMWnkQgTtmCDtroe1HBoW2",
  "key15": "4oWmKaTdLpXAgPowzuPMxXaKfKmtWbk9NTgSMnAkhyFeNta6LXcDrVraE5yjLir68tNBF1b3ActMWVjwWDNTkM5Q",
  "key16": "3QByPgwRBNkeCWNXSjnsyVMk2RbZJ49ApCXXWcVyJcXQpYesGoVd9GcPG1doqucQZUoRJZVbJp7rPbFohQUKwzXD",
  "key17": "5XcU4EYCYxmi9TRZx7i2pawXCTB6dR7veT5Bf3tLT96Xr4f8H4Aw1wQAD691ALyatvJ1twyKJYDFZB6hn3DoXVHG",
  "key18": "45APUd9NYMXmrnafQG1anhm7bTxYqoxqgJbKvr6EQsn9FPL3fnNhmRCYvPBsEEd3T2E1ksPcZbrRYmxHJmisn3UY",
  "key19": "j2kKGMNcGJBb24PdtwYhg2hN7n6sod5Di73Tv9hHuuytZbASUmmfZZTHYeMWD2antaZi3x3CiQgQE2PUVsFTq7L",
  "key20": "3zegFDdGM1bcaUQbMsMU5ebBmyLsv1uuKcpaZwo4VrdgQDCftAbnWFwphrdGQfxcvj6mmQP7SSJnCSspAVkTkH7a",
  "key21": "3TLAtNSYXdTEr9Y9LHenCzE5sf19jAH1uzR3H7M4hjAVykrNUfvuzvJ4HBLPYKB49wcEir4P1TQG7YSV3ByKfiBp",
  "key22": "3h4BUjPxqKoXXj5VjQNyTEzuF1xLV3eoMWXWJuD5BuwowQi4p9ffNgaLXExsZgDJMruqy1d966jpnwUD3MPNYJE8",
  "key23": "5Tm5wLsiRas2vUTGLsXDQFvK1UVup5CT3niVHLi1m8qXnmmwLkuMX2KwrfZqWFKWEDEyPgKuDnKVJaAaEdADVzpj",
  "key24": "TrpkWVUvPPBdXYT6PHmeAynXDQyy8dCknrNjpVvzJUtRrx2uRjFGiqgivZZJenphqGPgMptLLzyZUpmE69YkQu2",
  "key25": "srrxmc5XT9MZCdTQgtAvcasVn8NTzCqBCVvopiYTjBLvoCqKmFj3TW9w6Uyr85ezAsgspCMeM8m4ru87yUtuXSr",
  "key26": "4b5q8GDhHAA8CNorSTASmF6wXLtgWmz8NutzEaNkW5xUaCftTVmZaU234URhATffANxrEHUpuTGSzR3MWUD6tRFa",
  "key27": "5J93Tk2u6VeQkAMkY7stkUC2338w6xdKR35TEX7PduxZez87YCSpFmz6Z33xtwB1NgBhRnaEm23Sb6tqorJBxbfM",
  "key28": "EwTd8i7td1CFxa1CqtwXY715WNQYFH2aTquYg2jiWTv7z78zhc2hiLredNHQYp2iLCy8ybq9puXAxWfGxVdpAg6",
  "key29": "5qzggnA6c3PFhpcDqR2idnma7Nu3RJt4vtnJQE4Nbh9UMdiJm6zjNHfMrXnipNC5AG215sapNT5cqxZ3JNsxHCPH",
  "key30": "3zDYbANiXP7G9wkakeyZ7mg7uSeWrBs5VcpRj5aEChjiFZW2KpHLRcXzhY4RtfJean6acLfB5wkCUxFV4XaSASmk",
  "key31": "3sdvJi1V5etF6xJt9XbV28WaaXjDDYBvjEmodWJwcZjUFFmgChYaPD9YPm687VCijHpyipHQNnBL7yBWbwjpRGoa",
  "key32": "2WiJg731AZJWMARYqpi5eLKTpSDRBW3tJZ9BbBMSpZSyg969X5G1d4GTYGvR5KAKpCMqi9aZY6XRBwHPUNXHkRab",
  "key33": "3VVYQeayNXV8jXcQTvyBmmxkcg2qBUaWJcwFNcVcJPhwWozL8jkjPStwiL82wkpwtcv9CTxhapcozhaVkQVKD9Wp",
  "key34": "biQpLtoV3Yh3fhjWdvQyn1Wq9mkq9SssGUYzZ4YjdavcsVPQXbpAtp6p1J8mi6fwxRXUxz9iaLbmLK1T8kkQCQ4",
  "key35": "5qWcmGxxfJsMrfuG4HfpDgxHDGe3nUPhjECbM9V4rioSKd5tsWUetp1t48FYcFaJQJofnk9gDicKK2Lv2WQPzd9A",
  "key36": "AWrZHSUuAjhLttQfawj8wk6vF5gZpyJ8QLJQbATp5zWdTuakn6ySYxBhTEcvkiZQw72e7WsXd5nvaY2LQWWMJGN",
  "key37": "3NFz9X6poBJG3g6P8cMjyZesJ3AA6hoWMjoXhTNbzjkmDQhWJaBKuhv2fyXmw4TQzk7HALDSBaEJekYwudGqqPKV"
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
