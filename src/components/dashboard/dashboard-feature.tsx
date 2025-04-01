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
    "bQqSWGLNgunz5o1rwQJ6f1W6dYx6Mc2DGtMhjCQWAEEkWiBzZxPLJevvS2BwmyGUrFkYMqoKLxaUemWPvaxJtRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKDRUhH4QHP4A5zX6w2KkUfDrhk7L19G226rpoJXgd6WWyoywKoaeuG2WjubnRVBkvJz9YTauA4A5Fjbob2cT7Y",
  "key1": "5NCZwhcNgV869ZAaVw3s13hgqxgc5S3LARpH3XoZFkFaMx44dGzcPP9aaLN48AFyM8VBamWj3FGEvybA1tqtoTcg",
  "key2": "4GjTHU16qzGJ86JMigbHVosXfqYvvzayf2T8D1uh7J6xBkS6WKLg1j4XCGrJMZqjfJAQVv5cFrWgS8XMMFBmvANk",
  "key3": "4tmi5eVzCBQdCHDziq1wu1iJV9ymeVx24ig11ZoLJMLxn25Y9dYjufyUBsYkbRuc4ijDjqrEZcDzs4B1uJunx6ER",
  "key4": "2CfByfWY2ZHicXsdnvM7kxYASbga9Zccj4nSNBsmc1mxcgRrSSA9fbj2m6PXwo4sZuDSzLGeu8LyrsW1fc834gR4",
  "key5": "4oYorR4xjHFLBess2co7ZiW1koeoiVuXPnadcVBnwowQS7pc16XucisNGZYJYebBhaXPt7n4VpTqrbjSXj6C9k1N",
  "key6": "22zcjNbShbDj1wo2w4FhMK16NbfyXaaJzRdDkHcmMUxVkiPfxHGUVgduJaP6ChKhv2q2okkRotMpvdedsw3hZDYa",
  "key7": "32AQY7yt7Rv9bPZf19s2HgCaSSKLbB3DZmarVzB4y14q7c91eYwb6MuPRJiNXoDTTnJqa3n6pKbdFF2Yvj7QmcZq",
  "key8": "4voM58Xj61WrQeDnDn1Jo9TZoED6ZK6ybj2XcAvvgJu9LFvKsw3v2rnsNnhKTLvCQHt9QUouPbCDQdKiW14qoUJ5",
  "key9": "3Qf1RktLNTTv9cN9bUGj5r38R3GReTecZE9kt7wTNQD9NJEh1VRbZUFVsD7Ng8qZf191w1VvcN7JuRy6xPuvLaVx",
  "key10": "4amobaxn5zdtUqM3nA9SjoTg7wy2ZkmzFbtaNutqCwB49fMc2UWdtX8ANj64JqcmRrpz4g8gTMbCLUD4Euwi3USL",
  "key11": "2fjq433MJatRPAvKhs7cXbDq8RdN9Do18NDTW1b8k9D3zWYvNyUyi8T9sFZR4LXqeGRyshHJK5xLJ94A6ZDqA9MK",
  "key12": "5vwgxwi859reERXiPmNMkNhytG43zBg3jwLLJhYqdc2TZNeghAXstwSX3JACcGCFndJixoKaRo4hp7Caoe2z6y1H",
  "key13": "3QGSKCkBbVxvSf7onAeotLQ2cEy5vGR85uR1Cgyzz2C9kYHPM5z65NpdEPv2Y5oEzmgmejATcYY9wBCr4KggExVj",
  "key14": "4eXABoakLPvRRCn2LsNYxXRYqoTsfUgkpJUx8yLQmSqUp2mK6CUMwxcswHe2TYuGR7YU82vvs6wcLKrxGeR6UZJd",
  "key15": "5pJS5ag9xnJDWMBUqc1YqGc3BVdcLnpte3B63euzS2ZSYEet4pxphPkSmwehdTrM5FzDt2SFobUZA1p8jR49doa",
  "key16": "LRidVNXTaNUfcwkz2UK6Ce9kPo1jn9bUGyVwZDASgtXCqRubWMdaebUG1bk8TpP1waC3SPsY2jeChzs1p5RtD8S",
  "key17": "CS4aXV3ScQmiLzk49LpvpoAdTx9an2Hi8ScL4qumgUQGenvsiR6M4qCVdRG2EthY4n73p1DkZkffWRrVWtYYs89",
  "key18": "59uZRyUqeTh6oowrpGU9Ryemii9sciy4r6dD9Ds7H91HHzq6dp7XN7zp1kKYRqzk5uRJ4kHFyqgU591tjvMDanvA",
  "key19": "3cDzizZ3GE5Qa5Jgb1VUNrDGLtFNqRUr7P74cMmkEU376w62mz4aTfXA1uDVHg6u1QYsXXkKsmwihd27Kg161aHV",
  "key20": "2tuvSEu5i4ETW6jWbz98sbtFfYYqs3fc8Z39totPugqW1DFKfGnUf6fZXYmJr5vFpmKP3JgCTyy9oqec2E4D666s",
  "key21": "25hdHStiJ3USNdQXVthoF6M55omhu5qErE5SsFeWryq9jw2CkvAJBYypHA5GYavL71w42ys56wrDDacRhhE2NT2A",
  "key22": "3p99qfJcdMc2aR3GgnyUu8bX6Dky4MqYdkdFx3Gwp2SL6njcPxUBNPTsREuYEUURaztRiLvu8Yn4iTsxGsRJHBCi",
  "key23": "2JKvUAsyu38e8RavRts8rmzg4GkJk4MtGycnwE37kTx2ucoudUoiatcvgXVzWeuFm4bmx2FTi6switXZpYYRbSuC",
  "key24": "3xn43cwWN762WaHyAzALzQ93d5pv9hQ8j3CJdM9pL5MXpuWMuqTw5vtFpBMP8yMBi1gMHV7N4qVh6NiG6tFxUNSW",
  "key25": "4JMsw8GeVygUFGhnTUy652yWZJZoQbLywV3uxcPJvYcFrK9bBp7qCWWoHi7MgdqyrLjkMgrAfL8tgnpP8How2y6u",
  "key26": "4f8bduZ9h1sTse58ibnBFKmWTWb28MC1NDYCeN2oj87WbmVMhK6rRvGkPJ9dkuh8aqk98f8Sh8J9pSnYg2zwGGrc",
  "key27": "5Q53EGM24CfcMJif1VHY75ue6Fd8uvTzvNUaWenaihgU12fNcQFoHikpoJs1bMQs9GjbAtuRb3XD4qUeiGzjoEk7",
  "key28": "GU2ufxAvrDaAwdkZ8kZneSdBVy241YYuSqVZzWi1PFByUocgFbnbnKwXfQPRVYWZ952bbpQLvVWgKPyftoMNSh5",
  "key29": "MBU1c6RzWUgPSYSoKsZ8UVxFtLMykMefUZFJfPVEabLXZS1YL9x4gXQMGGq3Md1qExzPnHYFXjM6dxHG9K5swwx",
  "key30": "5NMRXFL3vnLu7YLi1BGQ3qdaUPq78mBvfCdY4Z5N23oAeKWjqVctVy16eBm4Djq7Fne4JdBMonAhkiPLiHTxxvBq",
  "key31": "5d5Hu1zgnN9v4LCJhpkccfijbj3kvkK8FyDtr7wk9P8r6N5nfXPnP4cKMUk9f9pKMBZrzyj1Jm9r6y8cgR5Hy9du",
  "key32": "3BY97hcZ1Gsd4gjoe3u2tV2Sch7jh5pPvU1yYxyXSFwcTK79GJL2XjmF8Ap99cFHAsjP22YfUEb2BT7ovhWDDio6",
  "key33": "3ySa2MazhyYDPSKurtzNmPEybgiVLDioCmEHnvJNVXTe5Ly9TkS8pJDcaC2HdukFBsCba2q2T6QQQVMpu1ZPEvJz",
  "key34": "2StXJwFQM165R8SzFu7maJf2ek52aH4AdCYEGYeZrpZzTHyDcLd11pQbgDBVmaYdZp9Xs8tpsTk9QaGFRw6ctQQx",
  "key35": "5mtwzRVHPPQ8oUVc41RG81TMiqTiKKjhXw49NEVraQY6CZyoCFL4SrsTsmzJndFq2QL9L6jWcn1zTWKX9yzUE53K",
  "key36": "5KSYLvgnE1q8kmnyyED8Jo7kVZC4k7EitTGLVpxmK8N6ARU19rKFLxiUKW3CvbkKPWw49eEckqkdErh1vw5S2gKR",
  "key37": "5ksemL1M6Qoz1KGJM4mNfuApF8rSi2XapNCT69JzYLjUtfLkQS5NDJYdYneYni5n8T7RLNxi3yi752fbQPhaeQq",
  "key38": "36eaPtjrsWhorP5f7sES5r8sMyXKPTvwZRjbNWWmYsHowNZrTN9MAPYVSj3C6Tr3NAU11isEhVp17DMz3AMSLWyA",
  "key39": "5t8PmbDY87V5nb3BLwnSZ1SWJuEWkAf4aSG1J7nNiJsBhTEoAkJkTstwTQSnTuHJ7YmR5jqiB1R2isHQcsFhiqdk",
  "key40": "3FCCGfLRu48iS9P9N2WAd5vw7LRCLSLMMDzKxiQ669Nx91uSLuBr6waj1QHtqCmfqxf8HA115PB6HwrLWMM5hsxi",
  "key41": "5ic2boSXknMXggustreTfVegf4AM2L1HjCGPJshTy1PRhpp8ttXEX8KkSADfQ4aYmwKiB6V6Rv2vxt2c4PMLAUiq",
  "key42": "3PnimndurMnRMbrSSjJFYoWKSxxvrC6PoT315t86WD1nYtBwSyDnjrtuZ48tV3sSA7kYKzq2ch7Bae9NVfaHBdU8",
  "key43": "2UUEAyjQfkLpZK3DSausoMNb2DBYDyW4vH5aam2rmztQy4KeW7p5C4c1MTdui3zq7YWKWHutRGhhcFLTVY15eQEv",
  "key44": "65QyzT8khmZzbkfmwLaPrVC5VJkitdkJwSV4eTLP5FFpHJGZkD74kvXyucUAindZJABXaaFwnhKQf3jr1c9JcJaj"
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
