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
    "47ajzXShtNPy2zuwUndMqXUWQCQ8jK1cxC538Gw9i756MTkNA5zHz7jV4U9WjMXreoc7tcGToDsPRtnyjrQ8aEEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Unf2GpUdN4kdBS1zNmr6fGegMoGa3ZQK3kx29DsjBhonYPnHu5ME77Lo9L92JAN7a1qG7jQDL3hb3gECBhmPxd",
  "key1": "5SQf94NB44cPZUs79B2rgdFo4HWQvz1ys96opxAPNY3WMuXRgsChHbvpmpsf2j1DPp1Un66AbXTPhNR5xjrqU2UY",
  "key2": "5j7j39rt2WHVrr7awvxPqaFg4ryc4R1GVEPDRf579wbnLQ4KHwkCTMT3ra5pVDz6LuWzVV6xARn1nQ5t2LVCacgP",
  "key3": "2iz9kVvUhjY6cwpKDAkzyNqD1zsiyfzULwFzod7sUTV4bhgnNVAZnXGQKcUwCojMs8rr9foeU4H1NsZB4eyEy8pc",
  "key4": "4dZLJXG1xssEq6ouwNw1FQHAxNfPQRdXxH1sqAggHrBLvweGeV3yrpkPLGybS8EM3RxvEBmKYTqteFaqgxUkx3J",
  "key5": "SJ9we6zKJeR2uUmHmV5oGhWDqRUvLq1bByWqLBgMJN32W3Tzy2CSNfynt2LQVUhgPLAdX3sAy8De8RUigHSeGjJ",
  "key6": "VuZwNY5btGMPwcYQyXU1RCt1nXJtHDy9LaGyvTFgbYXGPxLVXBEwKZcHSytndPT7SpozMvyoYk9JNxSe9rrZWLw",
  "key7": "5jse18iChxQTFHuhVe4zDXBg8CkLbT4zJbAp3sUGaEjii7HtZHywFKeAJMpyHxGzFFQiBJjRJ2ig7hN57kaxhrqQ",
  "key8": "3rbfb4vHVKcejuyvhDWTHQPP8wbmdtTK4PSioS7Kx1vjTA6vbLt8Dtuge5ePfSeeqHMspFwKsj27gQv3WAriTDFw",
  "key9": "HoeZGL9muHQBhWsYvdWj9apeiWnNMHVioJvLPbK591RhXBTRNyejdVogVFf1vptrrEnS8Bzi2cn3ZNEipbZdLDw",
  "key10": "5ZAD9J9AQdaMUW5FRoXSKkqgv6zXKHJXtnd5dNV8ZU775LfZWmsxM4mFZSjmjj8GZwkDRMZsMG6Rv89EJTfQefSu",
  "key11": "5FVYDrFzYw7gb1ohZpbz5aPBukYmyfTAGKUigkxwRJQiXC5aoVFijXGhwmm4Kzz6AzaWCE1CoU6HWfwwtyiYrykp",
  "key12": "pHxUeUuaHkyUf41Sk7KodNUWQaKQmbo5QTq11ux6cmrASbTB3pc1dTBnDeu4ZYgZSq3QHgy7gzQYn13aSRHGbiv",
  "key13": "3P6bV7XpmNhAhCD18pn9jJQfWUt89WgZYjkLUdG9wBvWmFgaKQAzw5SNNLgHxqVHtsDLJ4GcGpEtxdbiLsv9G7TW",
  "key14": "2xCMgAe3aW2UQgf4zApxsNc3J8Ya95m6h3aAg4TWzgZy7WDfBmNqhgdFaRRSdteqJ5h99ocNngPdU1TDkcAW6Mzb",
  "key15": "42zdXpsDGw8MuyzwmPhaUXE6sRCYFTqN1M68q39S9bGQyB7gbaq6qHJGzju7sW48g7uN47pTwjxQi1Fn9Eq5DCrm",
  "key16": "3MNZJ2da4A6MaUHKMtMNzW8XG7v5URMaxLpZPx8eCzzBqTvaScw12kFZnzar5aADM7MjigJ69QL19HcdwFDbDiAH",
  "key17": "5YLxFQBAB8xfE8CSUbXpVxWQja44uxuLFzBNGB4wNU348hbHiNH2MK9qDVRiimVkNmSCyKURBNdVq7byQukdupdg",
  "key18": "5CZZ9Jy5S6rNkbHDqtNMwmSLE3JNLnA6LYa6skfsY3vFYDDnBD6zs4Yu1VFN4p3763y1RSbnAtDTrimaHsXk1yf",
  "key19": "4uD7L8KrZdVveW38GeYhJziR9WqnQJ3BZSTpVMSgK44PSwMw5Y7AiYY7uKEHvy3ZiyvURTDYzuYQnzb72DuWyxcL",
  "key20": "21q4rf23G6wJVPaKpdy6NXnTnikeeWP618PFZh9SUocGGforjJfi7zWwpkQHyTFXXb4buhMe8xKn978WDkQiGvP3",
  "key21": "2STtu3SumQhRRC2MAr9DcFFGLhBUBrve8WEPK3HcwzApexwWPqb4gaw77Q4xoTLAwMjmbEuRexXyN5sZskzow9gu",
  "key22": "5EUZwMmAepqCK1vHrpW1pn3T2pmz7i3ZybJzSJ4mQu9zRYj1tPhgiC8qST2cjwyEgMeF2ouAS4iP9TSfZ8XZuKJj",
  "key23": "62ixjo5QZFThxDutK4nCrXSD1e9WpneJ12S9PteSzH95Vjs9E6eQow8CvQ5AcZ4Z4RpdpctZGeJXNs5jHKx1Lyzq",
  "key24": "2WuqyJ6XpJ2K7TYVnvCvNFqx6y1AcE7m1dfxKVe3wh7RNer21DXkztNXnCqZfxDuS5D4aNerKKNgcTJ3ueN3zx3a",
  "key25": "37VJEEAhNuqxrWUmgpupNDnx69mZmkYyTTuRy1FetmXZ516QdRU8VHynyihffpfF7jTddX5KF8zaGUpavTkYy2UP",
  "key26": "2PKG6SohqwgEyA2Z12yh92U8gZBv9rD71mDG1zSie4FsqYDVkad5gPXM9AZzzQRRxF3rSXtkZ32nAJVUs5mnYRCS",
  "key27": "2njGrNSZRByh69i8Xb7Pn35vD39DjXVWofA64nuA76DyfmuG5P3Dh9LoMxJMSN5n1hsRmAwHmQY9GhtFfXdDm5xN",
  "key28": "5iNqEZmdWHtvUa4Pzr7mEFwvz1A4kVT42bqBKgm5Udgq1gfxbW87dqitnvhHweWXKhczcnW8zFKD5NgDMeWNBbuX",
  "key29": "2Qu8kihBT4r4nCJHkePZvfJXasTKH6atMMwFxaWtczKJVsnMKb8RfWRwQeJxN8835jVMo33KWso46RiPRsGgxUJT",
  "key30": "4gPYoNAVS5Y4moE1AFtJQZZ9bJu7U76gpCcMHaVRSaLohvmo5RUfRb3cmprdMK8y52TQyNk3oU3V3FW3htDh6K82",
  "key31": "FiGhRRewRb2eMgcdyeFfEkwudUu1RSgp6MzBTvYwMNZv8ArbqE8LsDBvpu7pR7oETCjv9u6bSQ9VHT2NzXHiY5P",
  "key32": "4FuYc75pKjkXeQLcAq9kCFVmT6sur1gQyFdEBP3Vy7DuaLfWgDAwE3tmxu9fu7RTxSnhQakG4JyAmb7EsEGN15rM",
  "key33": "27t2iqYPQ286W9FYEp29VygUMeNQLPpcZJXf4mEsYgUfF5n7Y6TSJNk2PFAJ6AyVe66Cmn19kDLnzWg6C75q4tuu",
  "key34": "3CjynYSNo7pYbcd3mgRFHeTdM82EJp7UCpsq6tNdSfizZQyNJhqH3cT4JEBo7H9BodWTxhafaFUh8N1rVjmgxrc6",
  "key35": "5bRvoUgYMaSEScy6GqoTVAJy2uCSF8NJsy7i3zmNqWBdzX9SJAhAPmnnhnTa6H4h8t65XoqyaJs7PhWiNq5Ni3pt",
  "key36": "2yYciGHMoHJ4bVxybj82MZQAKqNMvHyWfBbi3aySqEkEjBc1f3TdzdA8KRV2hhtodAFN4t3GMhYy9ZKNj4TGCSQp",
  "key37": "3J6NLLurN6Z2ogBVnjCwMut5Gx6u1QHLiVUrFVpQaHxNGb2cc34fohiuv9rvdzu3GMT1USJK6szwhifPqXpSD1TZ",
  "key38": "3e4LA8PTnSoJGmdXDqnnszvHdKpEh5kARbs6wDSUD8kRqm8csH15Q8vSrsAapm7vqPncKddkPxzaPZR41UDLi1e6",
  "key39": "5zWDUd49qJgfL7uht6SANuFcwG26yr71Vdycv7TtT8eFSuP55u6PcUmLoVLh6xjxp7cBwYyBe1k1YXuQFFYxZGgK",
  "key40": "52Q9m183uDDBo4YVXcHUMbhSvrWLwEicKFkhHfD6BFahvdjX9tR57rmQUV2AgPBbZ1zRkZQRqv6oZVsYRUHFz7sv",
  "key41": "2QRNUa4hResiGWamHmWmCkwaAaidWvn7CRsmBCkLcBQMCH4d4uANW8nKnMFBKzBJAuZbQkubb1y5BA3v86V3LP5P",
  "key42": "3LRP3vbJGXGkfmvE2HqTPnFvPCtUusS4ZY8JocALPZnpwN4myKvmMRyKAqeB62CBHM7KKWFF58p5iZEJ79LKvTXJ",
  "key43": "4PHv19ry61f9St94CGAzsQ49nQVNwHFupyq7AmxgQhjEo3mg7Bt1fefdvymW94PjUcU11b1PkGhnrT6ByA4GgvRe",
  "key44": "GLyycKJtcv6jkncbwepvzMYfSGB7UEYTmnzNEn7AvbsWLUi7Xgx7RGErJ4TB2smHEGqkudbEePNzi2tQFVt8Xcd",
  "key45": "3LBAuYabq9xsftSHmmtbjo7SfTLEHxMMw2Yik4VxwrySfVswuakMPGUvQqGcK689FesffFnLk6dMNT6Tr18F3cAE",
  "key46": "oXkn3zUUowjURDz9XyKfaU6bkoo3sRfa1j7uxjgpL6u4P7fNC5nfnpua3nJcX4Ea3ZtYi8RS2T8vn4KVVU2txKr",
  "key47": "2ansuQTiLuWUqo9T8ytNktexoBSiJx2nQVisN69CXyHAee3NCi52uvY5RoWvTxdEnfsDBmS92Azjng3D3JrZJ7Le"
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
