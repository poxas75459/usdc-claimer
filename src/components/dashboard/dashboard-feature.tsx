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
    "48HBAQip6qYxV2Dh5K3G5xm1UnyDk1d8sVoVRVEpj2s4GztQXs6u5TD7r7WF21Vndji9k9s8JFhCtPA4bkwpS6Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zTH9uA74aFxGkzdDTacKFUqfTE4st1jMiVAXPmwjfSJbMis22R51CdDdTx8zcAuZLuvHP7ADWdS2XFqKUR5XS1",
  "key1": "L1mDJ43MWGTUWCXX2pZJSWVuWLQGJQgqomq7RmevWYg7hBT87cqMGSs361E2ahLonB1JgtG985m5N8xago4SjEU",
  "key2": "41Y5Zh2jN4SbmKDLk3vDm1sKjGycAWifuC7MceSadeNNFuqA1WJTdi2n1g8k48qyvGQY3RUidWV1KzYYgREUv1Nv",
  "key3": "kYfts6dQFV625VWNQbAYVMrNvCDvKvv5oHwYftHkogFkxQawXWPDHomRqALVqSrvWUsdUwsBSBrVWJ7ovWW5g7q",
  "key4": "y63hebynQ2RVcrNwjVdexquqaRdEwEARQhXdzHHt4KmDhn6fmDDaxg6CAwGRsFn4U5GPzZ7WHX6YdhvycCREJzJ",
  "key5": "5aQrzztaWjhTmoyhe7Q62jsFEZr9pEMq5m15yNysyGf6ASeZCZRRWnYevvNyCSnB1P2toGKee2pnC3yBinsX4dDL",
  "key6": "4eysYXbzvoezdexfXwPpMjHDTwDvrNHkehAtzZwEVpkhfFRGakRY7BZaeVwTndTJKzx2caVFGexAfhHrasNAoZnN",
  "key7": "2T29gx88DAXuRoUouPKvXoFaZh4CqUGmWC36UjKizfpqWYnDHnyCC1tRvaXujp3oDzWMRaof2BxHJwcMu15oX3sX",
  "key8": "2Bgd5Vg3avJMm5Q4NaKPLNiHRKmzy3A5ZY7NQqxS6R2zGJMPd74aHKNyudXbdeuDLvaaYK4MCbvCxY92bq9w4euh",
  "key9": "39soh91e5VdDk9ZdtCEvPjzGNiyr9C84KuLRCejTtrd4xFB2DQJzXeVAZefZez9EAfAKmRmixdkrZL1CehPv8iDF",
  "key10": "U2BYDyCCyVDRt1gVDd2AAVAzcSva6PmxXztikS1CQ7J5hf2N4pzoMFX5kSj6qSRpXPogaAmXRWmjFFS66DJ3tXg",
  "key11": "2meejczd3cXxGoDf6Jn2GbxMEqxes4SHxpjxMDvBBydhWRZq9Bgx9NKQyxJuKvbapkqHZvoSeHrU4ZqEmCWsdgft",
  "key12": "2omGHFsm2mjT49mccihvaK49xvLvhVsCnZh9UdN2pxNmpJaJEM1bG6uXuuZHcNAaA5SyoRe38jcchkuk1NJ57o3k",
  "key13": "5v1fW46CP7HS1TbpTYCRWwcYrTmrcobE2SFsJQJ5Q5h5KsYUBv5L9kLaA54yQBBqD6pduSMeXrvvNajQ4LECH7hd",
  "key14": "o2aHeK2aBFGJYkYQdEZQ5WiuHmVKBQ9U4YLxU7wFvf9ptJBQLsp4RNvgZmmNmUbCrNjULQGjzJknaSrjGBjCP6s",
  "key15": "3XGf6EgLKZMVcA7piM7MVaEHtUu5zmmq2KY867WUBRWyxxQUidsP8jwxMoHgXen3AC1Z25rTZLCE1Bpe6ny3BKi3",
  "key16": "5gE7PaDb1NGDMzwcT2NUYV8ADCszqomA2f3AF4qmB6gVpeULUUK9zDdJpVuWxp4kU9VAGbKt9R3UQJHpKGGAbUx3",
  "key17": "2v9A163BFZ1TFhkniRn5oAZa8iTVPxNeqErpyMDkHGVDfNTYMqfSozmC6nm2EPUtLwq8nV5efJWgpY29jBpH1UUx",
  "key18": "4vskFswrc5AmSBzSywjBZsZgQfN9faFHLM21nwcDnExoTqcRyMzfv7UwXXtRPHEfDTPtR3kCJMLE88Bndbv3ovhc",
  "key19": "2ymaNfKDKmxAzUECHxexkawib8ydEukwbaiADviBXWzW5qjaMRVJRmzvZKK7P5dxWu8NR5rsxFpbkz9K12hadQm1",
  "key20": "5HJstiY7pFKx73xxopQYEfmbX5YMcjy5wvZjUJyA7ahHP2f3eX9SQx9uY4duaFd2H9wu69EEmR59QfJLvjM7AN8r",
  "key21": "5nsWuhUAR38mdPYXTt3qJrMWSFz83QBCEi8ERQvYXDfUyxVD4ajCWGmYBSzHSbU4A5hCsc2WF4xfYX1jTVKNHCcy",
  "key22": "4ETKFW9r6B4yaQtMNhj2SsWLitrEUt3EjS3DYbonKKikxpmaHxfnQFBckB1R1uSRiGHyLnG8EVwobDo6JtiViXBd",
  "key23": "4C6BYzm43tSdFJpi1bqBa35B7xEeSz9fEHipstXj2AautYPtHiTbrXxBmUKQwmHX1Kf6HqG7hh1YTYM4DUEv7wdd",
  "key24": "2MKst4MtbU5YVRTKTdZyPgigrxxYdaRbkk5AoTkPZgdLXbk7zpv7iyDvPVoPZTBiYp7WUcvSMm29NfSCSLMwoFj",
  "key25": "279d8siS2BQh556gneNGnN3fFbzbAgVsHQPKWnv8W6jnydk2puFe3jdvBquPf7NV4wBeXtxMjS5gCJeXZn38Kt75",
  "key26": "5PSadaX7apRcisGKLLMywGhqtuNGi4C3LdgxH7n6YvAV4WR1QnvoQWSJkTEpXKndxGxc49dVMSJ8kQ1ktSC9dQEr",
  "key27": "4HH6QN17vJPYAkgaehKJdxFaDQJ55McLs21x7KjtcPEcwsRZR5WQdyRizVpENXcNwdvNDKsuiJjXBzVYuzZzM5zD",
  "key28": "27BhXzfPJWR2cSQYR4zVtPt7gF9qt21r7X1v6To4vxv1RLNEwyKxmXPQC6KLQgMHywxvxo1WmrowWz7eQ4THmx55",
  "key29": "5JbQR1brAQJ9ekd9qqKnEdCNPuzYEq1K9i7JPuZUJnAHL4HueShcGRidGxqDVVybiyBYzU5X74vDb6CvELNbiLXw",
  "key30": "3mV33tWGtf8UYM1bCGDN9swGMN51ZborzRFYBP9Bc3bwV4SEaSrXGz4v6nGe6Rattenn5fAfUWeFJSbtCxs5Z4vW",
  "key31": "p3Aow8fPkrTBC3brR3fEfwWCnsjWQ6q2oESvxUUXHmD2YdvD39TyDQ9EkEUtcim8gRVo41tKpLa7MsAxekPdCaP",
  "key32": "5a33SxPvBrpafoVtGPDp9hjhhunHWBEqHk9w5X8iwCzqH4mYUjoZiEUyWZaqFBKGiH7cbqPViHjdhBpdcVUK3JXm",
  "key33": "4Hg6x1uJTPGRnGW7nVeTVZVjgSYoau8jXmcZ2j4hWk5FJkfg16o1jvbU1ZkmotXdyD4fQd62etfsnEfzszxk6Qga",
  "key34": "4ND9NmwNv6mMcyhfJTefaKDmcTQDpcVPeexcRb3fKKiGP7EBCTSRFJXn6h1ef2m2j5LRyKfqwGSxRLoirHmF16hZ",
  "key35": "3XeBNSiAHt7UEkPB4iuRJJv6kMmuSvjYRwgHdQwye8DY3nebZvhPuM3bMn4dsiwrnkTyJxcdBXRUMzdE3mbVruut",
  "key36": "4ZcAtZRnep31d7ACCnsshETZ2Vy343Xp97ai4E5ze73D2uDM6UPxxqWWffBAGGofCfUkTKvRD2UrY8GBvotnF6Rt",
  "key37": "2Rva6xYN5Md4B78xBNmoaoVe8LQ4VqFS3MeenTcxKzN9UXuAGANaN2SRP6cgpnTPw2phtZyUrGuk7smLDNPTxDc2",
  "key38": "5PeD5u9wrx43KrM6aG35zam9czvTXew7qUNyEjgBQoNUCzcbtZJxsYg6hSeXLBAWYZWooD24WDGfhDysuLTwGYWG",
  "key39": "nt6JkG3eUQgy2JmUrdQEVmD1TFpn4pJeLFAJkmTLjxgZcgfmTPvvMuAoatUbpy8QqxKbenG2MS8uXUPuEe3zScA",
  "key40": "FMqgyteCwsUikh6PzzrNzys9pyDVmcVBBNcJLsBMCj4MSfqgHDeM3HZsQihTDHtHo3MTqisecDcMedFL7NQGiPN",
  "key41": "5NeuMcyrRH2ktV7bQWgC1Nx6SwDbA8jbHw57NrcAQtiz7WpcqdNi5i8T2UBE44Bj6Sch1HoZm3U7hehmRN5oFizY"
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
