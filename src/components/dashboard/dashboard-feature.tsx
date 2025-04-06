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
    "R9ebMeNTV4Kr5ccHjTtpv8TtNjsUXpunpqxAkQ5NFDsKmMoEuLZhtz7523pX6DEJZM2Mjez84nYGfgmNjAoWZhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271HtkRkkQYoPh5iDx6m7BFvYZM4rTsaYZoxScDjYUdM8djJxqyVygf3BiWK48KjAgYECzu7bhgJDigjUmApY1NS",
  "key1": "5ZcCaAjZhbWFNPSUTknzKPB3jFsdyqaUd7NyKh5FhVJMUKi5LipTEP8De157sGpdTyFRPWiWSWyHMH76rWYpzQBV",
  "key2": "5zAt3osSkRNNqpazDV6BmwxHRUVhTbuGbc7KBJ2UN9zXdMbPsG8VM36QVvPUunKVjBHro3g56dDS8DuWBEHFpWZo",
  "key3": "tcBPRneqSNM5xDdymSindFRgTK4T5z9QfSjiHTRSMaBtFX74TTteHDqXXP4MgdUCqAxMxQtBnBVxW2oZs1ieYKV",
  "key4": "58okfyogqRaLdMqD7YbhwxwZm26LcgdaJ15MpvEZSwjNyaKywCSAjV4DsNjVqYKFgk1waAkG4hGWNQpGfGqfJGw1",
  "key5": "4EyCThcHKj9ijLWZ8PasjAfq1JcTaaGGEjX2beFat6hZXjZM7k7oMaXMynhzfuo5vDT6DYFZiqoQqsV6CP6QK42c",
  "key6": "5f5S7FPx359Mrk1kJRWhAjxidmLBqPvHVxKxhnhwMQTY8nb1Fjj62CBuvVsuiUKJEpQRZDxCKkmnqRzsg2aa7fHC",
  "key7": "4Q4CjBsXwMqAebouRJHscW9TEFX1HDo9R4eFeXq6ewXkq64NZj2vgKH6EXZs3B3ZE5wubjpxZ5yTmW6TrvmfBHre",
  "key8": "5WjNn44NjMXSA3xxorLY7A8ushJ4K2vQrTmxXXC5oDGJasBZpRsZ2e5sjqTzsc1QaWaET1vFwtiBwjdSHgFyh7ba",
  "key9": "5Y4zajZ3V9LM5RyST7pCYKTPnyySq2muH71wmgJpKxJfbe1s3oJtMWHQskBKR9qf7e3oc8ABCXW2i233G4aefRjo",
  "key10": "6cbZWytcY5d5i1yXVQmiULRNzyqRcwtkLM3rHCmYq8sA3Z97nSu81bGSjGRNVZifLR9E73xKsZ4VkqxC3NbWW9X",
  "key11": "36BVEcg7NQCHYyTYz97FruCD5o7TSYCBiRPon6AG6xt6ARU6EQCsqwA72A6jVw6TTENhib6H2Mj5A6SxosFQ9UDo",
  "key12": "5Ah2MjSM6r19LMmYc3Gp9h87e4QFUyhaE6uB9DzBz5EbmkwCCrmVLLuGp24F89XkUb4HNgar2rmCC7GdvEgjnyVQ",
  "key13": "rBqqXWBaQ12k4jY3RHvLhKFNRoQHBPYN5wmXj2ZdofMnc8z1uPLLU5fg2bzFaQa2bYTyoXs46uxkjtdNidYX3uM",
  "key14": "5aPRrPEcbsHAeMdw4XigUmG5XKVdCnNNyMDamUaPuLmYjMTk6VMSyLxCbbkqM42fbQqrnFAwbEBaMqkMdt8Xic6o",
  "key15": "4KncweLwyEEKRXQtVrkejp3HpqejwSi42Th8kWkeqJtKX7GwXfg11F5GrAmgyqQ7mSEZ96QHX8o3ss8f8WutdAd5",
  "key16": "4awvADKvtJ2DfVBozzArQLj4Kvjhu49WQa2wko5bJW5rERd47iX2rSLxLCctSjxHMaJpE52q6tD6XpW2A5m2tPAx",
  "key17": "Kt41SPygBcHZZHy7n9XNfqJ4iHsCfphM8i9Sof5cvXivM9NsSbv2JepjkdLRHR5Jd6Mvq8y7rcryxp4bvio1NUR",
  "key18": "vKsVTBnwhUxcZPBJoiWr8ZQfxFhYqLFPRAssNkcQeFpBXSPQ6wP7rcmTR3UzoUE1gf7vNPBeEkXRVXfxNvaw6Yt",
  "key19": "ybRkUYRvoZYXy3rm52aY42eLw2GWbHPd3Ci3H9qtwuLGiYuRyPEKHvZ1DEA9S89mAexzyKpfQyskwzmK7V3cQnv",
  "key20": "LmbKSU4aKHpcvAqXzm8F7a4hFDwBRCTzpKMkTyxjaWRicHE5VVvHnuZzAtAz4drHPXksgE4qsCJ1zL7LWuAZfB1",
  "key21": "3z96ifr9a9DX1zNrR7kRtXUprevM6M2bnZVhZ95J7ofy3HWtUajqeDW3HbsTzbVhWZ1tnXKVP7rGoqFxzvEJ7kGr",
  "key22": "oqTpT8QMXsvyyFtgXVfR2Gou7mqEYsixe7U8kszMTCKyGojtmaA37iLaMy6xENMHd8HrwvKRB3nsVoJt6RnkWnv",
  "key23": "3RRAiv1S3MNy3rYgzXVsoALXJV1pZRXCD4fsZaMKfB3sE5ggfBA1e5kaVqh5FA1tZJ78TcqsB11eYXcs4619VauU",
  "key24": "4FViYcu6faZwPY4vsk75iKNNdmhG57HGvSF73HwWVBW3nW2yxbkH8SYqCgJRsKMhpd9S3mC2ECfV9r8bMAfoBV31",
  "key25": "Z12RNsdcWXuP8W67ELSPU3HsT8Yij1cZFTAyXvGUtYfmjD3qoKKfzdBDTSYJJXLLzjsnKoUZXbGw88jcxGQAmxg",
  "key26": "5DzwQ3SMjGnZj5y6WpRYJXAHzrGiZN6keh1EpFCuEnBvJ5bbtUUcz3NWhEhrR5u3KRsr9a897LjbihGPaKWirhkn",
  "key27": "FTQYUmzyqeXFuu5928kWma4KpU4V4hshFJh34KqpZWrEWXtU1mFro7nnQm5UPmACVMaDjmCZpHcZs2xarwrtRqn",
  "key28": "mvUBdfipKvgcuQFfozmtGzxYehe1o9x59nWgA47tct3PWjtnCf5hFV919vr2UFc8wwWxaiWPAsbfgqgfXUhGCfV",
  "key29": "4tMLdMVTo7pp3KPQL9Km3mdVGcCDosW72DRgnoSVXJ8K7Gn9Ea5D4ibnqYFXmWMqCWaqtyyU4mjerhfiWHj4rL8H",
  "key30": "4pJVm7npGzGXuMXTjwZ4JS4XWtj6yH2tjpEzfkWBDXqY3yd3Pwff9JCRP5EiPejJjVccSCP18W4kAYabGwgFQc3K",
  "key31": "3XA4Af1aB85znphaEx1VwreQuf7GDjL6mGJWyViw2Hsn3Hsz9rykwDEbSxuDCzY77hWJHoPk9SjXksb8roDrG4Ks",
  "key32": "2Py3645BA319N4RcjmE1HHeygh2F7VuuBU1duTkwp1L3bBACnHbQCLBoKU6Zsm34axD5doEtznP11FoLJRhhgU81",
  "key33": "5jJ2vxnmjhLpN9gLsj6SePCaa4Epf8pdPBssWvTcyAfeKPCY6kPUXBe4Mk3qr8XGiPjapv86GHYovAxjSK4twkWs",
  "key34": "4aRw6ZF2vu1TzcvgFAd4UU8tVA8TtPVznA7uECa5auQxAQyLCBFihyfTfJxZ1Kv8zUBbn9kWoemThRgoJdwJtM6D",
  "key35": "25CdGdvfKRPiNZ95ywG6hLUJ7z3x6N11DvmXAnPb6V8rpN25CX6vvSUnibWK9nwiBKeiFog3NxKFQov2N491QQVK",
  "key36": "3Q9tQSji24Z7L3NaGAFdiPyXn1W7B1gu87M2MQYXHhsfbEUhu6Xr8HSGv8z8BNqh2YBcpgNcuYXDvzucoRuzNV7n",
  "key37": "QeBU4cqiteAFTGg6DdEvifZULnyMUoe1GEz8B5i5M5jdeQ6sJjrohnst5RqMCtHRMxDpc9gmfhauLd7617gzVa9",
  "key38": "4yJN7mihNapiFibGaZjKYdjVY2QTHzMNfgsfhjuydSznQzmygEy5PXVRvg8hB7RtVuLdGgsFeghEzRjnWBCBHCuw",
  "key39": "2WDG35ADwq7twoDhDCvBFsAyoJM8FGL5iavjgaXJsKF1ypvXYxXLThkWK4vwgjQAEpUsKX7HoQYfFhrTSzifQTek",
  "key40": "2e96oGtnUvcnT1XRBQ5Fj2EFRDiXDm9jsCuwGsQJufmqBTXaG7xf866ZCe5DovSrkFK8Y6kT9zfJKy6B42jA9CAq",
  "key41": "Fm8nvApjvmG4DhuNgBJRnWmkZHpTC2FxHJWKSMx47RCTDr7jFBm8ECda91akzaJoGvUMeGqyPcYKgw6jPFC9e47"
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
