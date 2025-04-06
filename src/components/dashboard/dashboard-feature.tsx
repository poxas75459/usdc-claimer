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
    "3ka541NqJHXj6vxqQaUo6voR13fGsSrf1wjEn1kNPgDGpsigAwRKWd93BN1USBgH3KF7aX99YYGhRyNKjrK3a4my"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XJVoxGdoeFxqGU4uZUhcw4kAPVVtff1viypK1DC2UheKS524ERHRi5opgMV6CtcHQqFxU32cGqA52HzC7aDnV4",
  "key1": "2GBNHZrGbyVBGwWxWdan8Y7mCeRJuF9kPKF7vGDn1nBmRTfRZpkZ856hYS4dpMZfat3rdHPBvxy967KyRYbPLuwX",
  "key2": "9bCeHaEt1jYutQu23fUV6WmCUFznhi81RwAiaXooSCfywBzwojUFKULmh1L7RvNDZK1JSteUSprzoschQUpod41",
  "key3": "4U8uwc3qLvtMegoojGkkec86M7ydxGdLbUUz21VnUkUW6CYMZDuAMvUoxNfutSBqxN8xU4hsQ2UmL86GxozbDSJo",
  "key4": "4ZnufnBR7ahtiXaA1GbCCejb6UcxbcRrBz1DZP2yzio8nemok812zJs5uXJc422vZTK6c9M4rXqm87aRZ7k7bYzh",
  "key5": "2GhrpJmYjQ13q8erZ184Ck1whYw5yjkgggtCAqYQb9EdAeezzzaydssC8JBLv2ZpscmQHm31afF4ieobviKSfUfm",
  "key6": "5FatqEPJEo6sByijQfRZfFnhTfBa1eLdork7rXhToDQYZ2pGyYsAtrom46KaYBBt5JsdrtniVWjc552o7mrWUXnz",
  "key7": "2pUPxhDb61HKftyyWHzi8LFTu1ZwvQkAwMZ6hfgPApsxCcTMkG46qPuWCwbCDeJh4Q3h2j3ai7C2eL1p5wzLcWaH",
  "key8": "2jRb3Ke6zyZBUWCwgbfohfENFraBReFr91QvVgV1sXz9mF3qZ5Sxk6TZdehZPuUe5GKzJcHBQi54x2vXGZFc9b7M",
  "key9": "3LZ6i6gwwZgsW9r53jfc9nsXJFNw5jJcrECiQ4sDv7v4aQNQa9qJ67jTcEm8g6BQX6btaRH3SJKoc6qXWWVbWMDA",
  "key10": "JaWPbW6ZFKYn4MSjNP5fs4e5jj1jg1AYrbekbVZsiZJPYSKw1FHWXjk8BR1vUM4uzCXcNvgCFasmdQbJnXeRiLv",
  "key11": "23edCJyPUZDcvPz9BMc1fMfw1zHU4iKQabkbx6uTajHyQYVNBsZVsyusHFwapb9DN1o15fY9qmUvkn8etjhR9wP6",
  "key12": "5GEj5mg8nD3PpSzU22aKC8rVoqyRRZ1mH1Ct8KgMCePgZQPJ2Ba7PnaQK3AMwSMWkZnEeVnZXg94qFwHV1BRGn2V",
  "key13": "5iCucjxaCNRVQxzHmWwmvSzwkxkLR95FUqSnV4HX9ZCWSRX5YK6LrPmKX3kbQJrjNYicgdLEs9VxHxcWRHFnr1cx",
  "key14": "4pMjmyVEMY5jcN7ZSEBFXhBs71m2rsJEu8TQqkA3JJ6BURZVxgswW4xnRaWEu2p4MnvoCf51K4NXe5RkUXcjW5eG",
  "key15": "45eRNMe6ZCV7p2h53acHLLLd18rCGby5TDkCJifzxFajnM8xrwAiidKo3CrpiSWgohjfkbcydPb3BJwoTzxg7Hz1",
  "key16": "5jScui2wGpb7ZN1LajWW6fK72h1DaM9rnyFeoTSF48TaHTGX59CKmZScassRsR8LFJkY41H7hW3Fg31jxoxtsov",
  "key17": "5iL5VxXA6ABAMU8Fenojr8ANWoNcQWc6NAZEcZbKmcaRrFPLTgM7ThTXWRdRByj7MjjHHbc5df5cUAfabLJwZStP",
  "key18": "2efj69KkpGgujcz6qtytikWRkx34FXSzzC8D6tLEFWAmSKm6QRkAaz21WUawcqih9GezMyGhxhWnQ65nL9LVT33q",
  "key19": "3vEyPehASJ2jJffuDFLvU9dA6q9vKYBU1B8Lc1Jx18G5Gby29Ua2f9MWNrfhuEMbfLF1yrj8dRfgitg7m8EMT1D9",
  "key20": "1u7TGoRqN5xudmzcq4p4uPGbPNMKnuxj14GPc5oBNMyUr1rjALELiJGnr93biBu8zpbkqBXWBhzipeVWiApF9o5",
  "key21": "5Tbi7ExbxudeMwTK6MF5zgfw7svFj3tzDYJqwxJJk7psKHEeRSem1dZ9xed48ojfNKaKpYYhkuHA1gTitnJo1dRh",
  "key22": "43h58D384JFNDwDi4Srk1sx2i2XRcN6Fy2u5YL7dct6mLrpkeLxsqHWXVrcrMcmUeQVxatzVrwzEV5H2z5m4cctA",
  "key23": "4i9qS2oN6tiNiHrdBMSz7sQ9YPyGyBcuHy4bdULYK4QYsFXSSyJfMvqYi96w1gopS42sf1iuu5idaxf87DpdJDgd",
  "key24": "8VSv7bsru3SNVmh9PUiFTx2tBcJwTEA8VUHiDyisSY5RAWEBNXRfUDeqHBzT3uZC9Jd16EciSNB5RzewqT97FEU",
  "key25": "2u7Rv2KNrqTVU9CKWoAc5d64yG7TM4g16xUXjYcR7AWiiG7ga4oUb3axaarkrnBBDz1iv14QsEDjNQLjKndvskk1",
  "key26": "2BWtyCrAD2DeCoDboBFv1jZMGj8fvdmNCVSMJZ6xPx1yL1SVKDMWRwzyLroNcTFs5NhDYmUMARfaDHuFfLfJJNU4",
  "key27": "55nsdsLNysnn9EJYvXQkaWqBiiS7zAJsFpzYer688YDwB528EhoDXiTNinvfMbwkStFFooj7WZajrHYEyXXpHqPD",
  "key28": "3qdqHHs3TEfKdkhzNdQQkYfa7KHcqmJZZQ4M51391pmqxGtQkxSGdSxDAtpt2DoAR4LgFmJcwxgefEBu8JpkbV87",
  "key29": "3f7AHLG2MPoZaiFgbPFx7B7Xbi2nHN3KPervNbGQNZCmheHZkgxRurtn2HsfgjNwA1ouMzrYefBhxofZanMskZpm",
  "key30": "4xLGoknfodm5CeeSb4sZtyeECw66tBYTCZh4zoNGYrTJfjBfqeQDNDxLiqjv1XXj37wL3bqNC4tkyfDySzknvoND",
  "key31": "9ZyeeYvG3fgSLVsyj2drtXKqjVLLetukee5FJUrj2WSC5J1qmHp1QKVGS4vJcvbUQ6LiLY2DCgsDaCKUa61VrQf",
  "key32": "4C3noGrApY22k8AX3bfw5hah8v8jgYPbVs5Kwd4CzEWNTH6Y1SaWKWsERcsfsAJTcd8wGVTvKYaT7rJTmEzaxuim",
  "key33": "4VvRFCQSQqMxSSupnPhkKrmyqwN2vg5VZUu2ME7XR9eegmemppvXB5EaHshdnvMVcCdtBhKzKSnQ2cWY7UUi12pk",
  "key34": "mHjbd2FUsiSsofLf2A7KQUTXxk9wxgmtm5JdfjsDDmVuhTVdc61KgXzWV3TxKrGcLpSn1C5LJStKZMj54hUGaDV",
  "key35": "57gn8cww74CkBqVuoeUnNNozSHLHzi2H8wZhKSXtxzVavGscuwzbv1DUpfHT29p1U4akCY5hVzuWW3WWAuer6VJ8",
  "key36": "pFXAjwcZTsmZg6aF25AvFeFjVPACHhU4JADwxRd3VaDcMxPjhTfrJEui2XrFRMvaTXc5khe1BZEPmLmVWcCQ65X",
  "key37": "4TtCwzfTwbpx3tvTmSVd9is8RnhnM76cVYbiHQbgzphJ5Q8yThEdtGMDgMEKcW86T78BVHkwXTZvvJCt6S81iYHn",
  "key38": "3XPrXpZYg6veFFnMcbUfMcnKYt2XYuCiAQL5m73AxuvPN1f2UTLdrgVKDkSXXvy4W48dbLLr2w5vTa74JjYS7wAM",
  "key39": "3g93Pohi6aBWJNfSkLDCT7GawV11vYkJJWiTJ89AJxASwBfDBaaAvC4vAV1BEx2YiWdj9YewREH6vM6tHTjzVj8g",
  "key40": "4cSq75KLKgPeE65JmxHwJkiBfzShAq7YN2w1zAvzuBf6yB7a79x4Y45ezjDdodwf1he7KEfKAh2MAwa4UeG7wffR"
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
