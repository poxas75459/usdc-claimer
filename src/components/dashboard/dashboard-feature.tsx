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
    "26RCWDFnB8952eonpGWzukZniUKB5Sa1do2bH3wVFfy99sB7DfdfbQ8ApekS9uUpVycrdbUy7UUXUjU5c3P3ZLyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XonxWizqXjfHdH83aAywndY2XYpnDSuTWY2k93t5zRHfE9AGuXEukrKf2u7sB8SgRG2N3LK21wbfh3boNFua8na",
  "key1": "5R8Ax8nRCP7N6pM7hPkyMNfGcATh9F3v42pvZQwAoE6nqf53JGHsoHVAXnRJdebCnwAY6474eq7uSfBj4eCjULU6",
  "key2": "66nFaEnoDHNbLGr1vusAVnQGSYpMrWHypSsQngRhUfjDsh9jFzQJimdehXfzaxEU2S6uonoXyznALjvYQoWXBEoG",
  "key3": "TDDxCnvJjymcxcxoxKbhSv58RKrndsvuaNrXp5FWSJrwfUiz2fYbcNazEVyHJpcyPb3fVnMqh6x6LJtb8Dd3Dx5",
  "key4": "2HSsidnirt4KpiLHdrUXYXL7FBwx9VjbyPVn9yCFiDtm8QoSRd6H6eMttDegAXqifpkooZ33kD22jxRDHxxSueGF",
  "key5": "22Xn8s1gQMXZJeaCL9BqbQ3GjaB9je8t6QY2XgHVbrn5FForM9aX2F71gapcdF78abhdsCZ6MWu2vusxwfauaBFn",
  "key6": "3CwphpCUeLvaEcr4cTv6ZckwFWEqRwTgDbVMALCowBociNJ2udWs3D1WGdwxaZk3PtRf9QVTSxsYJV9Lh5qBNc4U",
  "key7": "57P6rfnt7EXj3j4mzBthnyUCZNsT8WfaRennaLqzzo5rG17h8T3tKH8piSF6kr8Vzm57Am5cA7k36MiRkZ9yC3qy",
  "key8": "5fNdFC2ugGxjACKoZ4iW6gDw8nqZMWpLcopkbtJdoSUCWWd26s7ApCAAnLdZRt1gRuaFMctQKf2yqcZxtJdAB7Yq",
  "key9": "4A3q459qWCUnVviBmnpcafQuj4jZyTkpuETYnA1o3G5kkghkYJFBWbCCvUCZtzbgUoUnhEtpcWULukfVevRRndWo",
  "key10": "28ZQy1tDb8ZBzXpLy4mGZQmG4At45DkPvdSNwKP8cTMLHZxKZunwWifPqYyW5cA6PFkKFauPxcgA6x88iCoNvXHX",
  "key11": "AT7rTEzuxweWFfaWJ92YVUn68jMfp8y6emRMPyR9MnnvckatLXio2zjMxm8MbeGB5ewgvhjoXfbdQNJjfo4EtdS",
  "key12": "5ct8o3aJbX87A6wkmGbTkqtv1BeWe4EBNrNhpTGrg8jVyxGHLUFTU7NCvir9rcBQL2CzbPVxnrZZSC5s2cG2Ewm8",
  "key13": "27bf28UMuq8SqkUYmyUyhnrW9mcayZrruB3nbxmTUujLCehwuapZ7AMVtY238gXivXMBd37qz2ahFGbX6NVP318c",
  "key14": "Dxd1wQPxBfRH42BWfQwmjqoB5oV8mkkEf3oe2igqUNZaZUzJkn5SC5KGKi9NfGWBNZGH5TgUG7Zs4i5MgLudrqF",
  "key15": "3avfv5Jj6piknKk1zCEV6FLG5ohDXJFCod6A1HbvGHmjyXBFqRHySuDtofCLXZ3fvW9mWHmQtT3gVsK5uQ4U7Poy",
  "key16": "5853LLUoKb2MKCyD9Jm4eF9WH8HFWN3z1EdrDZmxq9w2va4ZkURv6S6P93rWK3tJBmnPNTmSSRLjtbpZhTExdo5A",
  "key17": "5KaaXU2ugxTt6ZWBUWxZvXUJBxAwr9wiBaGVnFjaQs1rDQnToJwAPkUEvKSuUR3HQXTUGRTbReJcYupUudR1EGnP",
  "key18": "23F1bW4ZESpMikUZp7T9ReYcGiRsS3F1GLhhhLekxPmuAp7QKYeNu3nAifhYzrzWA3KV3JPBJX7n73voaN2TfHdm",
  "key19": "4yuoJeEuLsBxyY41AWHzxQ1NA4k7wFGeqeL8PXrr4yvfj1s7Lyxbw2RAPmcx9tnm7kbieP5ixmTuV8BuAjxSuAjD",
  "key20": "H5UX9itHju4eGR8YGjGoYmstz1gpVyKAEegZfF71oS8upVZZrjNEEBEpoLU1VTedwtjvMfBHxxJqvxsBRq5TvYY",
  "key21": "3q7AdnAakQiL4FMy6S3uaBQqmM7iNcjcuwmjiFziSAT8B9ovRK138W1CuiLZU6Jr4Dhzc1btFbwan3YZSJrdvcS9",
  "key22": "s19rKyyrG8DKJjpUCjAHYrniA6HJtD9NxZByEMfRtQWMo8KwsCv1PUHSSX1ubEaFYbgH7o8hJvReiiN9Hp6Vvv4",
  "key23": "2oWTidPz9Cc5XhKdYax8ixUg7H14Eh7taG2NEDkdzvUwd4avQbgCAzfNz2rPjNhncTPmKGMe4Tdx5wisuiERwzFt",
  "key24": "3vvXM8htda7rCdvY1n8JSTLojnVW5AwoWpkjxk8TgPqPzuwX9xDurUtq3PWV26NjsNVPhcQX7bgJbTPJEyBTpu85",
  "key25": "5MZqrX9riDDfjmeu1mYZHyixj3Ch344yhhKKYf4kVk3J4DzR7s9z5uZmh8zxCKXXoTFPzaifse9ykBEdKkFQfrqR",
  "key26": "3diUmwAxBHJYsnAHnQKFe1YB12vKvvM6MXrDMXq1FxHgThbuBraGZq5hJn4oet4cgtzExdpdXUVKpMXMH41ixLPz",
  "key27": "2R7Hvtpp87pbGSsjyNYhCchinHaJgfejdjrM5zt1yJkDTCR9h254PMzRmohzNKp5QSSZWNY5osfbhRjrw4jeJqtz",
  "key28": "5kZWaBby7m7zJ6yUxge74Y66R4EW2J5w1nHoBgZByDjXiiwPWkWYQc9NfbwrRSgHfXNA5RMdq4EQQuNSb3VTXecr",
  "key29": "2NSJUhNuCMuGhgU41KZq2nfiVa3bci6kSK3uMrLQzkYL3CLpQ1jMcPXzaDWt2cjP8QvNtWx2tvPtvsp24QxgWohi",
  "key30": "3EaJ3gmVwtKNhFtdTnd93KPJHSwLAW9i44BkVmrJrbPgXaFKsu66DQ4BeXixXc9XcKYFGYK13VfE3VJaarerF84F",
  "key31": "u6qTXGJiLiv2U5Hc1koXzFLzZZfwzbcksMbxWxv2V9YtS9qJ33JjUXRYMpGsfEyEk9cDUt6ZzkjLbJVtMsrpvaR",
  "key32": "FGgX5krotAyrLiMtZtARhjERHXsM1vdSY66yrktZfnJkdaLU6HpUrSdvQqX8rKAccWmdsh7u8CGjq3MLGri3FFJ",
  "key33": "5T59PH2cS2VJ92ks8A8EigdjwXrjTYdwVrZy7L5JxoT6GqwFMojsVDDDT4fwQ5uv8ND4ZbuSDHFtUAnWNpFPZz4d",
  "key34": "4B9hs7eTkKcTpcAD77wLPkmDduf6Y5MpKEAmHz99XikE3f7qqp9Cwm19vBoXL8QPyMa5gX48JTS7HZdV1yKJWSdk",
  "key35": "3ckzqsNuuZuxgwMGWUdmNw4E6y7coUuYujj6mMLxJ32XrbTfbRJWotKqkfHFLsszs13zbHuKiwPArjumgZjanGDQ",
  "key36": "45paeURc8eAR9Zu86535ZZeUgdBACeLG9qh3zrKD6rW6yUUtkHzjPBgvvBAdMJe96oWqbQqg3b2kjT7NSUjttsH6",
  "key37": "3w2rmQs3AKKEzsYUQeXbYQzgCJzwQRfARMsCuL9vJVNuDCVaAtiWpBdXaAuW1L2a2ioWsQLf6NszPGu4z2V6NGjj",
  "key38": "4mPVtZnHrrCP4rwxHhiR6geTuLWhLvGmp3cp5St5V9BoEGDWAkheTRch4FkA7a9pyjsJRV4k27Ed2eLpNDRTwDS6",
  "key39": "2RMkZcfuGwk25u5UwTC8jHuVraexSjbQNBkkZrucSYrMi8N96ubA4Yqe1PLf5J8vvb9z7xGd5ntzfBGUtHoyRSX8",
  "key40": "55Puw4GFNeNS4q8DwUoLgof5wwXtJPGmNMqykexFJEQrjtbU2Bcy3qCXQkSLsTozkeF2VjUTJNAnFtAkjj1fY3Xp",
  "key41": "66o75eMK7ut4yoyiZZBHYKznw5hbu3bFDr9eoT5X9BZBUxzjehM7uQn3N4NUhVithsDjgdv6f3XMACXJadvEq97s",
  "key42": "wFGb95U5RVbyqcqqhKFpKEXtgsAPNYPKCr6WUrmfrGK56HP44zd4Q69VxfbHyfVe5r345H61Lf575VM5iaxumTR",
  "key43": "39zNtrqoMhTVuDjtTdgt2qt3EJMbu91ASshPi54Wg4HksmK9gRAS4EabQ3AsPgeZydgUQcHD2nEDGFUxsfyxD8ZV",
  "key44": "wwoBAsKynnhD7PHnqpGGsDva1xKLDV4LR8KD25whzerYGj425EZzGqYY4Y1RhRfNftfqUzpQvSNjQwZHRE8dJ67"
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
