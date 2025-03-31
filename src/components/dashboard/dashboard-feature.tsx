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
    "5eVyEDhGtq17jJewjZxdop6ZawcVZukw3sCYMEfxoMShM3FYwQehDsj59dkZiv4Aon2Y2GiDco1pY5YB9QfcKgYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o29EC1AQgdhxQQL77ovKC7Y4zZkSbmTR4QybgmzbHGf4Lc7k5bFJFStZoDc3ofedozt3sdwg3DJ4JycMcV2j8cj",
  "key1": "2Fwws924a2AVf9S4EsJbsGQseneR2GsnmPLWpj4Eb3NKqcCqgU2J1PTGZyM3munPpYrVKYPnGVYhffqJH8ND65wT",
  "key2": "aPhoNiGjaSmWUq5xVYJ4rqJ9ZnNjstqr8EsHCQn252aR67cYKaC371WNAa36wypRuN5sM2cRpxqXjWBGwuwAChJ",
  "key3": "3M9oM9phHYmkg43Gkxc5vWD9cAyqqGEXcuKs8Hs3XSZRxgJPJBDgJxSv5zUtBECLTTfFJxmB8QnVRDapEHahQnX5",
  "key4": "5NYqWHAHyKzWuQK4R9TMLmVupWSS4Z5eus7nFHP55yMYYwkiyophomAGBxQb2DF96dp8c4TnDpC4M7QogwdXUKFB",
  "key5": "3h2MHvapE2JMpMtNNJVPiPUzSj24SNCerH9wEEaTxagpmUCJNg5GWWNZxjMXGa9XuZ4pu3bY5iovCDbJEeMQjUvf",
  "key6": "nv8pmqvvNYK723aUihVvvtFbfH2kmgJpmKiiHEXbhcnFr5fwfWAbHAMvnFUirsg8V9PvN7V6tvQC6ZBAeiQ2vQK",
  "key7": "4MsBfQQqRE3CaKakVhqQeDMuy56wGEHan5T1G8HvwAWNycmYumZ8YjpJ25aZHfqFvxDLgBtVpzerTkrRL4MA2ZR9",
  "key8": "bsHKsi6uwbmJFEQBAqTEHqHi6CFUzrXXTceFBrterG8xwGZJbkM8nJrXt42tRgZSUnmbvxoqfFbp3HmRes7rCZo",
  "key9": "2gehHYG9RPiaGubKyMi3gjMAz81tFrmETfRExSLp1xpPLU5PL2CRe9rusWFeqwN3kiisdTxg9KPH224KMz36gNFP",
  "key10": "2syU4A2sFGY5DrNxsC79H9q6Y8DBhX6zZzwx9NPP26TDd82aM7huh7nycQWK9McxXkzzYFtC3arv2NLfLfcTFwwZ",
  "key11": "5T4h61paucCwzS2afsDV3G7Phdjk6mQXWiMtdvKNraiDYuBDvb9FLJP7uMmPuqsSWATH4Azn4M8ypB7Laf3BPtGG",
  "key12": "3xXc4qpsQLxNVP8CApPg4cJT9ko72soSSHkWn8KaGpgZStymf2WESkDvAByNkfvwb59ZRwnVEhpCgVPSAeXSrhyY",
  "key13": "TXhPQspCz6E4f1PgLazJZw449FS9Cq58a2ZA6v3sugezT3mCivBJXjmauqUsxC87zRW3HgehAKEUqP2aN1QdZGo",
  "key14": "31Tu1hPbRtoNCWMLPBv7Sg29FfNAbZwnh37bSPaDfFXQbWHcjebMEvq34rQyC3L9kR71tWRe6WMxVkt4CbAdut4F",
  "key15": "4R9YEiREXXbVYXjHjXdxaYwrEPWBsujj77R4UUYyBgv2pSynDXLJbbGGFFRgaLZvWQCVtmuuQgTeki819r3PKx3",
  "key16": "3JTymWRrxJthHPxCZ6X9cBwmGBfHaU64WbqwS6n6RTyjkjo7traeE718DVXfiKA8ndty8twY1XW2MT3rgmkHKUUa",
  "key17": "vXzrPQTQR7FXySq4ts8ZVQ4tNjGZS5hyMxHgBycmLrqRCmPH1LnsGg3Bj7B5hG2m8XTm5aoC7tnyFmS7CT9uvyt",
  "key18": "58nMeMC9Vbiq2xKXj9mJBc2pSasDbwNp75KzxBvMShX58P4v3FSxVkJQoD7pRLTnKnVaCafQxXBBhero85wjnuFK",
  "key19": "3hAMSf7HLe8RCMWQEdB3czj2f6Zj1vKSEYk4cvnMgnuh56Ki86q1wuWSwXyiQj8qy9na4oa4na8wmAWqYNvo2An",
  "key20": "3TTtfGHwrCMcVqvwTPLAPB7Mhk1qW1cC32FTQLdE7Z4aKBz1GReEsXjAzB1EiqGqnYMjVPvYhKHCgzRVuxpuwLsJ",
  "key21": "23ptU1gFoitXJESJ5qyv2YiQQDCeycZD8uBgMJqzAq9DaUzZRDkNTMxPqVsy1fxcja7eQEpCkqLZgvG4RBDNQYi7",
  "key22": "3c6wc1XZVKenBxTD5Sm1KsQx1Mai1RouAwsanAA2dCsKQtUdnefz1APUTWZAchgLQRrHjj7hXJiAVzwcW64QET6n",
  "key23": "4LJTbavkBVD8Xk54FMdhPLEfudaSkjTfMBTDvUA5ry69dkx4U9AJNNRN1YyrQ9KZhU1fTSb1UbTRWZ1aJmJkUseH",
  "key24": "EUWD4dFR5e3GYzNRzb5nrDtvoMRe3vrwEm4UG3AssQG5kZJBXh3KumyzKVYVPzdZruPhEt6C1zYRH7hDgrK6PXU",
  "key25": "5MJjKkN7eHD4Rv6mTgZCLdXTTJh9P3sq4HA72nhxsayeAsvS1D7rAsnvNsZZgBD1kuymLBGg5LEjBQVNg2erojJV",
  "key26": "2mudHw2wWMsaweb8Cvjbf36YVKVTqLvYK4BVH3pfMqS6DD6LXzALREAmaHfZk6EbWXMFsJzXrB3TjnUCVFKcjYm5",
  "key27": "3ARGV5RVY4xh2XSdabjzHnCh3dhMvAvFLprbfsRCgzF9wjfd4KP7D8ZTbw6iHdxJW4b6CiTbsVgXuqUrU36r6Put",
  "key28": "2hgq6VkpiHXcprNucmDtNPmiSf9hmGrY2NyhiMQ2cSUTyPYCMpwTtnNZE52cxvWo6MVvPAp8MjbZQ8axdwMGnQHV",
  "key29": "5xnJrvf6DgEiRmPrJCmWY26uaaYBiuDDG6VxndVo2Rhy8nrVKktyc4ek2DuaLkTBN2zEAPayPNn1f2T9PtspuwmF",
  "key30": "4RXYexSTeKJVnFDvNHeqdP5JQ9Kpw9wDGAtncJsJY4UBQJuFutTL7hs7pr84KHDonQSPhTh4eLRcNffhdWtEDQ7t",
  "key31": "3uwfS8Z95FG5fTvxvpu1vuenEJWY1uMkJ6vTYKZXb5EN4yQLdCJJ4NP1enQzycYg4Qo7Gbak1tE5GSh6HCM1jA6r",
  "key32": "3M2HMxexLKys9VEWvtUKFHwctjQBqdvDFAFjyeYh7RJWi61C8fpSXVCx3Lkm4ArnzWvNF3fLKYJ1h4QjQRH4MMbb",
  "key33": "acMYP4SyqjzapZgC4W48DDToUnKqdBnzDobAey2GW8wChBxSh9KRVS1CNKb4ax43ChdgMan9fJj9W11snnQv2FX"
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
