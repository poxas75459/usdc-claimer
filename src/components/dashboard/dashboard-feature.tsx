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
    "3kPKX1VS8fAeLCc7WhTVyfwWtdRbHdVeHjZ1Ue3pcpb6cirv8G98WepvJHxDSH6dWNMvEaTfAce1opoHWCvAggB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gu9kge2anHJT5KSJVgZJwiAQm2e7y8jD5LbqFcLv52dcVYFeoG4h9wUKDKpE5Qb2NTGHfp8SbEWDN1s4qbsmSb",
  "key1": "48NxqNYiViZbqm9C6qqkDctsuGJDtrhj4fEm511bbdAUn36VSkYahv4Jt2S4SYeK7Nmt3Pq8ypz56P55ffUurhjf",
  "key2": "5HssbcM13sctoQ44mK27PLFMBxiHP7kFSqarCkQ5peV62cAP7TeJBZScYD7kDjvdQCEUttbAtxxAqip4NCzQ8xSh",
  "key3": "3p9DgiP7UsKo8HuCumhctt5TGtn7M9SKLB63rYeJYXo6fNLY7YZkM2X21njHG9u9ADnDtVWg1hxovBPADVWPto7V",
  "key4": "2jp5bYkaXg7gmVvZxXvaRzop6DLC4dnod7ezvQ1htofYLCoVyegyvEaPw7jDZ6fUVyJCpJJSRiVMecND5iuNhAso",
  "key5": "9af3pHZZyWnZ5xCaCjQvecbg19jNs9PsX8SAr72eFFyUKrHkmt7FECxfy7FhG9DJ7F5nNRiZQeKNfrBEBhgyYns",
  "key6": "3i5ppgWEr3umwBZVA3Wmo1ws4iU73T23R4j7txbpAypWgAN6TEbexhqsoU6ZJzKUjrmvQEqRfsTatnGjFJq2LuUk",
  "key7": "3ivJ4a3smrkihBsxb2Lz5rRSYM8Bgmo77SZruqjkeAvmRpxLGW6BZ1rGn2ZqWgy3kf1dSZ9oYihb4Ga7i6qvQPVA",
  "key8": "5ECNoyikyj9WBqYqfEvgEFk5EEqYg6TG8RayhD4mKGfQNiRkWxKNfjpcVRv8wVJvHAjC3yyjHeUCR54RkfHAFyXo",
  "key9": "2Ua6NMdAxeProeWpcVw3FFUq4CojqLxfBsBfgfF3PiUwo3fhsu86oJ1JshR2vydnznD9ZUjYiGQHvZJxgGSMQqfm",
  "key10": "4yTWc4kGFkBMHgFE2ivL3BwQGoB3qyseuekbqsuihh7XDiqx2G46Z6uG4FNsd3VCTyKwQgmQ4UTY3no41CKi3GnG",
  "key11": "4b6WxsLegwZxAmqwt8DNWQW1295y3ERx6RhAsxmCQAJiBHmRheofTUYUeiosn6k4dQEpsM3mKPNSohAaK94R9YCn",
  "key12": "2GE8io5HGCcNz2YumQPy2btZ2zcZokaJ9859gUgBbTpWMGdivBxcQgUNhsrvnEZxGoREGq4aPtuYDJFZfgrQ8zwA",
  "key13": "2WsB7msRbGnu5JCr6ifdNRNqcoj3zZXVRxwi6wnSyfMzAE9Y6DcVWC4bsf4AGmvTNTikXnM1DVp5Dz3THS3jTzsE",
  "key14": "2T2vFvCbXvcv7zUAMRY7Nxyzk22XnY5xeh2ggewbv5jLtRF1fnPGaMEzx3wD2kWyMqERzMTTYZNwUqyVkSeRLk7a",
  "key15": "3qL5kRDbT8gz7vYgvFNDG9KqTsWJho6QdMkNebxFyNWpLjQ1gWgYDpu1GfhwwcBhwzs4TNsBaLpff8PYT7os6LkT",
  "key16": "218mJXCnL21Ti5WFFWi2bYzdVLQtgfUUqyiRvtdQberjaGd5CNbqcwdtYhermV2MyvkKCCaB4iTkFdXCcHKxqHVV",
  "key17": "3Be4nnhzPxtzDCyXEpDRnrRryXdjoTDx27eas88FdVNbd7kkcgdcYEeh16FSxNUqstBLKqGRfhT7uk9i4Nvb1C9a",
  "key18": "5zCrdrGag19dM6735T392sT8rNMF6wg3sWw6Uns7XMrCBAumPLgwxu6GQ1XNgXxknXE4y816uKUYXjcRmyu73WW3",
  "key19": "3R3nBrZLGsLkQ62zCHQT2wSr456eP2HF4iWdPtdoBc7411eRQMJyCyQgopMWV9PYM1ukRNTwPBHc8PFj5LWgypbK",
  "key20": "61ZVqNS3nBc7nBVAaZLe5kKndYyHfTpwzKkNVvdBy5551LmBcbRJStuD4kDAHyGf8WTytZKbHJ3JijX7y79QeeY2",
  "key21": "2v8C3UgEgjY6QZkQ3inqXwoPwzKj79KxSaT7LG29YmVpumigewaZ1r92gXfqKRxhAU8svUf9VYwUrsDytK8PM4wH",
  "key22": "4wNYYYR49Rj69W2WmnbRJHdrYR3ehPaUWr4Eit6TPKcarUmJUueNibkR9kjjAhtAGJ7AGxEs7bBhbgxt7LxAwBkh",
  "key23": "4ZLbQdoVL2xPnPGdw4PGXVeos918HSKEmwcL9d9utaNZ35Ns8RouHdWqKfUsPZkBkQn2PVWzyEddVaHSgfxekGoh",
  "key24": "5jg1eZZoYNMt4yWFipd7MsejXwKRm6q7g9xaueg59BhXNSUSXT5mEfWyKs3mssTPTHSLqALTv72nfRacQzhgpjDP",
  "key25": "5wVM4F1k3zHfi8HA4LQicQ1RuuFBskYDhSZvfrKNR8kru2sQWqoTBFKRBEHghN5v47XCAaNvFQ6ssZ8eDVsTpbfv",
  "key26": "4tKkibQ7Pka2Pram3jxydkx7iPuT6xenva7SrMvt3tPXuMfVtGywgUfqsUMM92ftFLfRggbsf6qvcdBkZGzLnUVX",
  "key27": "5aBnx5smJ6j1YsEUMtVStC6xnwJBSksNBpuw7KUrKDkHAwrpFEwFcQKAMgECLSmARQYRhxMM97Ldr2Hj7TAxqdos",
  "key28": "52FDUcUpzzhXPSHvyHZrY3t6afcTGM7E5fs2Q1Nz89AN9oXibP2v3j4t1KLZMkK4mPb3xVxKkkJXEgvoYv9AAXsY",
  "key29": "2ZGFD92KYdeddGjxGQVDE5AHTnbH5KTFqFYEWQu7HtoCeW1p9YM5p9dRHKAX46BCjU5UtDompaSDDWcAHUFkYY2D",
  "key30": "2jhBjKNvQ4z9DscrPkdmzV9uAsNZmefJGSH1yCYkwe8nzJRfaA8wuTtPAwwjhzsxssGe2VcSRrNdfx8BQtofoMvr",
  "key31": "5muwwvU6K7mUPWaTuLgXqeSDe3jL48P4huJu9ZDwojvSuVNN3fGX3AedcbSiYgBHYnTYe2uZNWrE1P7XmoxPRKG9",
  "key32": "5oBgAV9zw7eSFkee76LjCXQh1WxkFGp5URXfrt1V7DUHQwiDWNUXHLWwCyspLhBqcAWQwf7o7ptBY2qEdjErhiSR",
  "key33": "3hSTcFUhiTeDs8K3t31TY1Zsg9RoEGxaC4EHjB76U31EyinLwmmn8Zn34dcdykLjXLQNa2LeLb5vnsp8b2k3HuNY",
  "key34": "4CgjxNMSGmh3YKDdHKNuSzK7Lz6CPFb9Mgy6474cZfswJzH6p8yV2LqEFmAKec8vpPhnLuGjau23gXvb9azGh4qr",
  "key35": "2te4RpZCVHmXkMrwxoSnekVdxebgtui5caqizkR1k4FiCtQACsCrQL6QUYTjCnN3Hqh6yTrzMx7taCD8fA41aKMR",
  "key36": "6Lj3wHUB97eCc7xfSzVemZMdFL1fKmruf9uZNb7Viyisy277ZHytDvWCp7HwkgEGwTwtzz45YiAiYXLWk9SdfWX",
  "key37": "4zyrPmLWaqvo6s39y48nLdAuEcRP9tr3oR1ihFDYWwXPNQdqRsk9eXaUcS3MSBKnxTK7jKYEitzU1HiNyRkVaKTi",
  "key38": "5rKrVfATCUPzErXwpDkfC3j2cX4XTAQ2FzrKg4YDzSDfpEPQjKE9pMZ5ssnv8vc3RjJKBmGmzrt12FcoaZFKjLGc",
  "key39": "26fauqJECXkXPhvfruKfYDrBemafLZZ7FL6pQjCBc3Pbnu4eN7DF1HGvA4h8XPY8LLfitsxQwgSuGk4n8KNj7SCz",
  "key40": "2vSwvC3PQ7G9zCfweqrLqeCo4RtFLPPCHPrK6EMrMRAFFJ6gQ7W5giPGgJUxTgMChxrbWH4zMSSJ4bb64NXBiTM8",
  "key41": "6Egmdrm4jTFHdNyMcahzvt3wpLaUy22PVQjsKMsMFoJRqAiuH4mqtoGP4UMhPv1fin9C1uYgEca9QxMJX2rMGui",
  "key42": "4Z3uVkk7Xmgync3PGmiNXAQzaLyyMhgXAjgzaKvRFjdgxULRouhhXnnxNZC8h3UuaW2X1VPuLsRcv71tqwJfDM7W",
  "key43": "pzAFmt6B1E99PxoePqp6by1NBZpiggSZvKqpeX2xBU4EUxG1r4Mbepw4i5b8dzihuTC8h76J6EX3fnL8NSM1Cfi",
  "key44": "QmrLejEuXf4LYCeaPkFnu3twm5drCXpjQ3pVjJGEts2aUrSgPm3cQXdNcx3mkDs61HD8epF7Lw7kw7pJnHEij4b",
  "key45": "2qv8DHfaaegoSnEjh6ohPZXUp7uzhYQyC82PhbyVaVx2R6xNXagjqzMX5wPq2hME1CJ9BEmjx1jbH4aWH8rC5n8V",
  "key46": "35MvVrY1esL5aRSMA5m37X7rEpaPuLt8hVHqwgK43ENrNs4kAsnBVfVtCVzAdui17QL4RbhJbf3Z2VctGDhJhgHx",
  "key47": "3h4zvB9YfXu68Z7pzF8th4p77rJMm8Kmv5pi4ECKpzYuqDykwZp4hZi8wGKBh6FVoHR2q14dRGjReotgigw8dZqE"
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
