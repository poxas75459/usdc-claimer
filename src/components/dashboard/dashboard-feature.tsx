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
    "kYCBu54xBipuBCGovtUBH8CeS4T6zxFUVcm6TXEdm9RxM3YCm6h3bKuKEmFP8yUXbS4znU3vx8DCBPxoWqs1Yd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hwtob9R6M1yK7MoaoznVxxHTtb8VkfQKrdfTruftdzqXutKLpvRaQ8Q9zxbymy4V1LS1zw2PApyVUtHY8xMN6T",
  "key1": "3QGKiZVFE3zmoAdVGgVeigGHRA6vsJ5E94fhxYiLsaYBGk3BtrvmG9ecWSLARD19voud7dGMzDkKeNjeAcDwBWNw",
  "key2": "5KNubnCaKrAk343ZDTx7N5WvSZwo3KNJVwoy9aXxLhuoEFpSEziSsjJBrYhtCzwWF86nc8ib76Xb3tqPL26y3sma",
  "key3": "5Ynaxu3vPVuTBu9x31jgkCepPKpVjJZdAgYxJYiVomuWZmqWiGhAK4ajxpGjFYjNX4673ErdFwcLt8rweRvK2Xr7",
  "key4": "5Vik69BbR9Q3Je826aZvsMsTbD11ZZgdLafY6wsZ3cyedfG8AQq1zNsd8NhxpgPoVUhgWtJA3YwwGCRGNZFWBv97",
  "key5": "2Hrn7Fs3bLPfZs2ukYEwSwmtjUSeBGmirGQSk3cXenbahnmo3KsD7C7vLPrnJnk8Zq71dTHcPfv9KFMvktSjhbEX",
  "key6": "NBFddz55kEBCC6yFddmJjEyhXxYhHDhY1qQubaGiAUXjnhagEFsAUK6Tz5ovdvMpNf47r1NGbCvwsvkgAJS1UnS",
  "key7": "2nmW381ceGci1MXrra6PDPfjW3kUhAuyEbSfbJPyXsLqbon3MrE5dfuEjf3VdXQMSGMZPH4V6Ddaa114Mz1QmUPx",
  "key8": "3KXqcGgogxcwF456WsqaMT8eq1mK7u6omSykVuix5voDZT7Hea6rKgqcu1HDYtcoscBdakWJGUjND38PEGBndQB7",
  "key9": "3yuNB1xipVUKP5XV3RfSsYf7rkpqsAGiu8BdrFUjJ9GknN6Zbbc9VrdsdnNfqjNjRGfrPSryG2ATY6fqggLSbYoy",
  "key10": "34hxEDYzFxBZHVdSpifLncyyV89WkRKV1sUZx2SD4jxgMRCKM1dkmdhikWXFKD2H4LcENw2otmL6dGrLr7ZYw6G",
  "key11": "2XJbqCZmefVrPNULaQ8u45ARxEzm7XU4k59ijuZx58RQiR4b5MUHmZ5nHKK8SCnKfDC2SysW1AkYGSZ8D3YEBHzs",
  "key12": "2jGemb53JSTgypH7jmHNYVPDNtk1rVGs28pZQpdzn4yGFqJpwxiGHANTcuTd1fCGTYXDFLdsJxxDDXAwWgTUuyvh",
  "key13": "2C3y47ENa3j1d495c6kFAsEbQsFXpB2TyoaZRjjuoowSVEZdhdAWMRQ9hSDxhTokXaQ4BXwnAG4q8SyRkk5wqVdb",
  "key14": "2nXUk49XWL3TEeR5MwbKf9Mo494x4wu5JQCQkLYpAXRyJCDrCSyV65wZyGAvNPUDk6joZ9in2r4i81CCKnNJ9VSx",
  "key15": "5fcPKGjYK19apE3B8eKPAmRjR42j8nyCGkopPMPGtv8kVfr3S2F4KsyZBiuvRwPVh6xiRHTpJ3BRvWE6QG2sgNed",
  "key16": "57SsZvbYotZXZx8peRVQktYb3kXaP5dm4gc8LkLNLe79BHS954p4PFVDbGNcntyPHTxhGy8nTtm651f8TGWcuwz8",
  "key17": "4PajDMvLNmdaRb9uLmNZGeBUKKiFxNxX7VwtLLGuL5K2DHPR2Que26uxEkeNYoNzkBNrUPaNgKddXmWPWKr8zWFd",
  "key18": "3Z6wwayEjXL8EgnsBbijJNpksm2t8eD7txbWUFPbnB2fQoxQgwQzGxTCaxMPjzfSNoku2SaDkZpR7hcjs1XdzHaQ",
  "key19": "2hwtgekCQsCwLNDWeg4t1u6jBZHFm3j8GBx7xe4ifXvZC4q2BNEuZp8mcSsaCTz79N31n9Kn2rUANzBve7w3f7yL",
  "key20": "2hT77HX1n6F6rjnJwq49BK3yjf4ycf2dMrVXF3r7Sp9TfrPihv8xHUKrAnUsbrP6mB81FyANgYEDZBzVRBCpYpoE",
  "key21": "5QyzhzmVF9JdtJZeLXLeoKkVLHpBj2xWgytykBPvwGxhmupYnMACoQ17RD1RXSfCirvvbGfT5dTuqTARWheqm2xo",
  "key22": "29LCEDH7gjkyYZbhRHNC4snXgHvwuVBtLoNeTc2xikgYWLPCZp6KwzjzoFfjiiFdk76AowkwXNPvjv2mhAcK93Lk",
  "key23": "fizq32vSAXWqwqaeKMqdP7ASJhH9fAaAWuz3xmw9agaGfrCVRgZffjyToTZR5nrdkEzkwUHn1XWJRcqhSAxVMDx",
  "key24": "2W3qWJWUDPEiYtREg6N6isRz9WuxniAAMHp2y4TvKBiQjDbu7rchKKJxydPrkBc4yS4AAV6hubLgLHbnFapEZkPB",
  "key25": "5MHtpVk5fVL9nkwU135aGDW18rkCgrgfn6zEowkUwVUMFyxZNkzsNiSCZiYsVGGaPCwEHnstx71hk59oatdVNYv3",
  "key26": "3bjCLMYKQsPyWqTZfZtrzLaGfvcbcgT3TiZrKJNVBAd65rJFmaknBHLnxMNii6L2xNerQ2ysRRwsWJ1LHj8uoVEw",
  "key27": "4awV3KAXoWvXwqY45bUKLbR2Y2byKZMHWkPfFz2mtPmM4xkVirWqVmtWwc6QuqdA2v3mFbbheTW2wuZ7538xB2WX",
  "key28": "xbBDLcLCjd4jjFJ4VwgQvyu4AHBdztPaspJ6LZrp7jFZoGfoDj1bkeQQqTYHmN4YgCN4qcXdCz7fEvGNoUgtJM5",
  "key29": "5HAgekUwpjs6k6haFTjoyXuWU2UuEb6odu5sKtHT25tUgLg9gUJeJM5nC3dv5QQ3N5ynstFjDdHt5sJLLgMGZHyg",
  "key30": "nV4A7hk3Vq4N3ugyEyEpbCqMp3ySYtDqtUvrqk1N6i6ioGmDnNV5jzKbnAcwvLbZMsWm5yUQegiaLJTHHfkftmu",
  "key31": "VMgsy16iX6xDsdjMQtbQbrGjMxivnJpgj5TbeMFzf17LDkvgBwpcqoB2i9GdUc8U3xJqPqvrmetqugHUzFPFtoq",
  "key32": "22g5iC7GYACXMauYkioKB3aSLNDsrnv4wyRHzj8hQBoeK3Jwwa4KeTk4iidBf1gKR3s5knn1L1smHuidEQsJop2i",
  "key33": "3E5kTUbr2jjYs6XgUGjZuT1RV9nYPDzSpADmWybFFkii6qk4DWRWX6RYppno8DDsQd7t1yD9wd4fTDqfy1YmrWNG",
  "key34": "LFS82bH3TVvW5nGUXjuRBtvnM92KtFKQj4NsXJEWdZAgeWFgDrwqMkALm3ARUh8dqtKz5DnsLfiUUokraFDRKwj",
  "key35": "4WEdMRXSdXTaBGbbDBMC4UbBFRMMij3vG3Bg4eFBpkVPair5Fsu96gaHSPLzfrB7jSNuuHM7YiULXEha6mfpGtHG"
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
