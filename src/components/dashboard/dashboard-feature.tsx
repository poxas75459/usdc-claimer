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
    "3E95D3ypGqzxpmEc12ghP88HyZuzB7fCYyctJ2RwLf8ow1Lgtf7qww5dLBvDP6CxkHiSNoTNXADEdpx4KT4tai7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WW7ThmmvD5qjzsopzeb8ZLuYqL6AMJa6JsspFDUBf5BJBbCD4oe5C4BCBPwE1xh72aSrrBcU1hDVU6EWUTwrKFx",
  "key1": "52cMbWi2oaaJvquZ39AoJD4pmNFCNegtNHeqbwFwch3txsuV9joqrZgFAGnEpqFNVQAfDZYZ7x5tNm9t3bDRSpww",
  "key2": "2X9hkC7C1kndywPcHQwSDsJpWydm1jWebo4BxpnxKsi5B88yd4hTCQ7JjkdoDxAZJ4HjsNXzCuZTh7twYiWcKZW5",
  "key3": "3udhXXtZMyDJYWW8vSJ2t8cYhTihisuY8HL9GDsmWxiX5vf6eP6RDF93u62xQptJeZ8yxWEs6ypC5F4hKCHxJNZK",
  "key4": "5rPCV229XcGR8Ywei7gkdvA6b5VMEhstS2KcJaVUTEyUoh2PgY2Pvz9meLWgdcjcfVcBChaKDD65FmCoqBLSgd3J",
  "key5": "4VqBYewccZ29hbYbvAwQizss1x2S3Yuu3tr6bwnnQtubvdGCryujMcWmNE2BZ5yriGdJY6qDb8PJuciRDAi3vR82",
  "key6": "5mMb8ArSp9ALDqKDmy4aecamrV7wmqayQmmLSG95Pu8TADT8hFRp2V5MDmrAh2mu1y4HdEEsL6y2FzvDc2agLoYV",
  "key7": "4oVBPbMprsWFxUADjNadQKvS5TZnFPhF23YSW6yCG7Z2Fgi8uP8gup1b9j8HmBTFLNqQToLQWTZSaqPqRLDRcqi5",
  "key8": "5Tp4wgymhAQ2Bmu8hkxCiSsRCahSta6JyaR2LywMn4F2QbDgV2WJrgymvaG3kWbPWfKrgFqtpdrhPuF5PjHcFz2c",
  "key9": "5P6fPBKLu7FLsAXHvHQBLRjWMkGzfSvtX3xFTHo9nWsYCKWfBaWvMGFvCmysy9W8F1eUMAqF31hq1PdPMwePCizp",
  "key10": "iXfqcxknqZRed3965ApAnCaztsWNdutiCHapVVyi2mGv9fHXDk6GyC5SbhuBx9kNFMMXnDiZpf2m9PuuhjmChbQ",
  "key11": "5thb4zwkvUDF2baG3KR7KSxitZih5tHLz7Vxzuusbda56pCL4YofspADcZjdkVupgDCiMbEzaQyYkGcZPXVAfNmf",
  "key12": "2MpLsRQnhD6F2MiUmjQEWgh6KFywvyjjSiC9ad2Q6bLHC7CVRf2eeVHRRyDPP5eaVKTmT23y2o3vx9c6rVU1XsjY",
  "key13": "62S7m8adQDZiA5dtRMURfKjyZiLqZEGAS1rEmNSQ1XTXwg3eWexfZyPtskj1pqPF6DuRnNNEABJqZJsZ2q1WbpjT",
  "key14": "5YQQhQysgHVHr3bEYruFAtqx5fAqbX9FKtLKebuEZTMtWdRv6oZeJy7dWyXg2iyFE1aFzmAxkneMLuUg7tyzXVMb",
  "key15": "5f2BuudED5KFXPyU8y92EdWWLYVZgTGnFkQWxdBBGJn4w4GyRLztsyHgKhnjqCdsU8zcsAi3oJ3x3AuPBTK5ni9S",
  "key16": "Nq3sgUyjZ9Ghmf43FGDFND43j2DmNWbWnsECfcJStw6jMFJTJaerJnFbpt8ZCGWajmryRZepRo77HwbMpEXfGXP",
  "key17": "3QBwR3fuSzx4zhrtGYjJTTembm5X3xeDWYFVfdhfZddye2weoCYRd7iZT1oqbqFhebHrH7jGFFzoQeB1uGi7aGoU",
  "key18": "3GJ8AyYR2i1ENHzAmpfbst7czL4hkgv9fQNb1zdMMcDqDb7hxrq97eybSZUok6ZBMbw7eHx8fgH4KAWXGHH6xuUi",
  "key19": "5oZmw51rSvovN43Zj15b6tosX9BzGHk6UCbW4rAYeVXinsSuVAQDG65BH5EioH6mc9cDnJxTvzZ5Jy7i5dy7FGaa",
  "key20": "2CKxxGkBkEiNfojBxMGxmweZCUfs1SVsFiPfJW5wT645jW7hUPvcsvaj93Xty4qyjnSRFBiGsdV2oMpfodXB9i1v",
  "key21": "4ABpWWVn89VmXvuGhQ7easheRND62poCTbNesam5CUs4sqnZW4sgSj7jQcmQJY53Z1jxxFU6zygC9LiAHvA7tn3h",
  "key22": "2EP3xU7mwrd8xFbKiwYKoDbhaSoWth987epzgsQ5auWBXJUQd5FLDd6Gez1g13fcntCHbNohsS3HAWYeougyjkXx",
  "key23": "2o49egPnhjub6Xe1n7oysUQMag63aH8WDPFQGMwCL7T2jqeB58ABzifzUZkh9haSmMHgPPNsKZUtjSMBDaoQAA2B",
  "key24": "45TtiP3FZv7MSFexxatA7VkWVEF9mKHGNgaQWFxEfdiMzGMvfdBbSu7wSoRMSnBNnccGPSTrxFEG5d5NTfp9ehfP",
  "key25": "8eRBqfBrjrLTRAHtTCFgmNDa833D51JiwzkkY4B8VERjHZZHtTRzeWyAUYBgcmuHKnG6VVS8SHQwr2ukdij6e39",
  "key26": "4ZKWgo4vXgiDLfBAs9mgyvcWUZK53f3ezFFs6PGBAwUTeeUQrvnyvS7q3yYm6GUFVkiV1SzXNoCCrQuJ8PG1WTpm",
  "key27": "27s648RR739NvhGAq6opDFZQ3Jene9rVk5w3ye3NWHe5AMbZYEshm5T3Yyw8DsD9EWNs9oGKWB6sXXuzt5aP8BhF",
  "key28": "2qvF4f3PaPbrAFEBjY1XtDYKKkVfksFJuzy72qRYVf5S8vD2r3mdAnXY8dP4JiJym3FdjESXdeWKY6m73rBBSrKq",
  "key29": "4PTfWGAz4uZW6cxecU7Nb9cGY6A49BQ1gQrUMEXWPAKpYZp9eZmrr5DmMwRPq7mxSH54nKsnPtrdAGZbFHzLUqGj",
  "key30": "5AgUYsAdhjPCCgGfK74bKQVeKAx4JHA3ns7tFiBA899JisyBi6XeC16GE4zeEduYGXdvkwq5AtGBtExzuYow7r2r",
  "key31": "3ufMrAZ8vbrePaZQECMBcLdUaqkQVQztic6obyj7oJepCt9ton2u5k5aKHSQGaP9AxMKVLR6pn7hZsEUpEN4qFK8",
  "key32": "9GL5SMMAty9Q1yuWurzAUsHCt5RnYp81yoWfNvTMsHiiLkZvPzxtF2gaY3RzAinLgdQ7NZdsSDnsPWwHaz5n2tr",
  "key33": "4aGgBncqvAAerBwjSjzVZJDwgXckYn83QTN1KB88UqrZJPE4Yhjn5PQtVyFnK6D2UZHFiEfMph9SHHWVnhyhta8A",
  "key34": "4mbsu3aA2k2ju2AdrSKKSArkpzfpyHPeVeMabfXUoYAWXTRgU2gQwaq7ax53e9XjLRLUVzDxJmDA8Den1a9TLTXz",
  "key35": "38dDKczFoSuAq8kRYAZyMuwEVbjVaZHzHvLkwj7c2q4GbqKqfrLBaxLigDEVfm2f9LbV4tgzKB1Uaj1vadgcTmgu",
  "key36": "4d6fBu1Us4Yt1b6Cr9a513HTm26yzLRxg4nUuEKZa234wEsBAvdQwrrjTctcrvw8nNbpmaKmQLicgJpGsiFkMpAU",
  "key37": "5VJKJexzmcsw13fohK2Z4L52cPbzpqJDzX7R7kaJeZjBsJUGdiESE9rtTVxnX1cHvh3CECZ3YmMjF55RDrBX33N8",
  "key38": "4VsFZe1Vm9M5C29eKw9wmU2ehTb6uCwrmqeMFK824zakbDKXnJ36bjkqT6zkhgQCLSUBswc73Q4dRWZzf5pe4MC5",
  "key39": "2BnsFeb8kUR7grxmXpQ2mRsb9Tofa4USpFDK8cWudYPrhYPrFSeUBXGA6D6pUwMGY5iK5dXrDcEZqwaZECKohtak",
  "key40": "26SFMaHe9A3RfqXPwt2s2X12cBLBP5LzemswHyu1UQzFYbkNRH66wF8aeQVwKGpAnUHSFeahLy8KbzRSV9MbaZHB",
  "key41": "5gs2y5UHUzVkE5cnC1kExcR5V8nL6Vh1tH42M6UUTsp3hHtDxAEoUgbT8b3X9NjJ2GVoM9FtF7CgQT7B8qJmttfA",
  "key42": "5Fx1grbkTmUC9cexiNv9fDXG4uPriZwKPx9CcGGuTJaNRG5JrSteRfXmYYHHLYMMnB2by1wMo4rTygdhSwEb3cdW",
  "key43": "4qpn73NyTsAJ9cFEjXgp5RG3ZmXuhcVXb84TmqpKKG4noCVCsxk71GFVA2RW2EMuLEJXFZ3isY8jZRgwNpe6YJEW"
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
