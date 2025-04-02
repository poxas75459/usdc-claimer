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
    "56qdA7Wj8B7yA9P437pjWHNEEzioGHU2244VTiN1urL1h449zjFMUMN9qzzse7UPVwNAsnPxHQpTB7rSb5uxWxwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2XjAKP7GLNgD8zCzSMukyb4USyRcj9EcMs1antLLCYrkHtzk57HbHWf3emwTCkPifMriGqAfFYj68ZeWpErbJS",
  "key1": "2Rk4mT3uxwULA1XRhoEiGZBQsSFGkoFTHmBDkPJgWx9mCj5nFSdMyi2YADV38ymkEGiyJh8s9a45GKmpFiriaxSi",
  "key2": "2vhoTeNWm5BZXeUU2TMeTC9juSA5HLmWyHCuUCRHYVRLnYHjZJDcncny2Q17EGLG82q3BAvpAejYKoQVccDSZorL",
  "key3": "4s4ZaN7HAZ8Hk3Uzzuxc7Kv4Z3ucVcsAhGVtxx5icM4pvoDNEZjWXbn3gmUtfyJbmTPkdDJUMWjoyQK9A5ei4Fof",
  "key4": "2B1EHg8DWrUsrWkjiteJQEDQ4Fi6U8Yws1vhAuuK9rvqzUPWPBUengp2pgQqzSKj5cxiw7jCJBuUZWx35RPzRurj",
  "key5": "3poQcejE6mNefvnowGtHg9dbVYCtRViZoLF8KGMKvsMToobK56T7jxfkpALXsjGhT8Tn9ZJ6CByNvbpFYyHxyBH2",
  "key6": "3eDmz1jPnwnmmNsXEmVtpRu7pT16mzzC4ffuiLHyQHfDjuMMJ7DZeyoj4jzsQRF5TthW3SS6ZcAF4sviHoP3rxZi",
  "key7": "5bAhcXsf6Sjz5rCG42huGkaCEtdrZSstbkhjUVNEWyPbsxpCPupKPZLM2Gkig5etadxd1JtueTvrneULPbNgVhwH",
  "key8": "4S4hRnt6YsbbijyW6pPnYs7m5ZFpGQTwvffzfZ8AcrpyV9nTTFDUJ3KQij7mSEPAYLJtidE1rgNfxP9fhxuCnK8b",
  "key9": "3rbBud4b2ccwLqm7GYwaE8drDM6rxGB6R1qLYuS3PN4ttGpgyoat3wn4aDMVkScJnwBiBSNAEyVqkLB7W3e9KKCk",
  "key10": "5Bs8djsGbi1q9BeCZgWr3Ao31kTk6QvhMTDihuyrWpM7Fjtxn3hNqqP5BxxJmzvd4F3PqYN7tuvuWA7WurrkXYLi",
  "key11": "2SJ77M9zZQhWQvDBRHBHTVuBZKFYNYXzsiK1rw2mNdbmmR9XncfkFCR6kag1URmEfTZw3pTCRXFZbNvAUQn2A7cU",
  "key12": "4iUXp6nYX5zSB3to1tgPRkuhiaA7NNoyvcgNzaNZeef43LtAJcpSKs1DthTsKrK9FdBy855Shdg9Q8NEKyfW6xBT",
  "key13": "c82JEQqsUexthe6UH6hDSRCeteFxwXh8TgiEm11T7fn8A9qUPF3c1PE45VRDHMef9QGbmfRe3MCUYhTVnNAAcMS",
  "key14": "5RWbBCwpzshQiHZhmdXLyz9WrciKrPLiK1PZjnAaF1XXzzvjyNhHuxXnsaiEPN9JrrTnmnBwvdeQ3iNDuYpv6GzN",
  "key15": "28YQkTGH6LHqJsbF8NPTaZQGLeeanY8zrbdu81gV7SktuAzWX2sjZmHWtyRKXNErHugM15tX2N1VigUjDKtYfTfQ",
  "key16": "Mxrcfo7ppKeJotDqinUMZwsLhFh6iGmUYFY24iXDETvePzkza2aQDPdoy2ZDtU7XUtVAu974M6StkzXQHATMf8e",
  "key17": "4P2eKjaBLGzFn92qSEFftCU9ZeA6T9DhxGNc2JbJz99rHZbEH41ZYzWQtfxvie2ie8uRVSvzU2qXosEo5wzhSCuo",
  "key18": "2VD6u57PjUjDJgKJN7wZJz694DWYCSGq8Tvavc8ccSvhTYKy6hRt78gCMCqDTUpEGZDnhyUfHSN4TYXvRnW4SDeM",
  "key19": "4FkmasCGQuvPxxrEjwhRPshz2mRh9s9naGVPhDkxdHZ5E5fq6YXDCR4Wu1UN7h83vGefpZ8uFR7P5VyVf9bCqgRk",
  "key20": "5w798LgadsCQbY46cARUDA1Heikc7hv3mLPAeFse2V74XxJkXJM4XKyyv9bwKPC1LLinW6Gzx8PcL551zercsoJf",
  "key21": "5MJZBA5AEQaeEq3LvjKV1rLLKMAY9S9vRsiRvhEZkd2Yp3GJoKMdmr4kJBPmvAZLC8RrmxA2yp8aVsBsLuheCkgx",
  "key22": "3eaT9C4pYmcq6L1vkLxqePNkADdswAGJXMPMEAwN9xgY14mLqEWQQFZuVxyKVocYkzXLeqkriTzYQknfLSk7hffu",
  "key23": "2Wx17uwCMbZHF7h5VaQTSzw9Nozn1y6u2dwEjACgQyjMJEReXSXdhsCViHWe8iVHpxpQKcLJibYcj9v83SPQeWeX",
  "key24": "3hAPCcDtE6baxmfZHpF8t6tsCX1pDhrkrCZJeGM6o8WF6De5v1xceg95X9oB1CUnL7sLSB6ZGnyn7vq9iNEDBcPj",
  "key25": "4NDDzvuJj5EMMWqgLSNu2jaehUB9kC5j8VCQjAxSKTEt6NQ4yKAU3j24NcJFEeTDMToZrywv2sYft1e6hzauG4o8",
  "key26": "2CDeYippwtzdQ5CpkUZjquJG87n6gW5aJrCDDj6PJsSUWDtGNU21Y7mLLgVVn9vQryyem93RR8wnAvxHAB6LUaeh",
  "key27": "oLvRud85XDAJhrAF15UryM8SXyJgyDQM72DWFp4VPyqv5XU2kN3VMty8UUGt8E8PCaH6t4nQLKDeW4zaUFiSEoy",
  "key28": "2WTAdhKdJ1fDAqeri6LYxuNceycyAJEJbLD9wqJhP7LL1DLPk9g1bCbLBky5Hng8sy7kMi1nvyKMnkgLMzvRzrJB",
  "key29": "3CtJQptdZNM8sZz7QJ2Xdgsyoyzayg2cUrCxC1ZKQXq9TAWKBHHGnueV1RaHENB8i5UkB5CeV2yVB9kd51B1eL2K",
  "key30": "37foiVgryaKaGJixRQ76f3Zn6bXmqJv153Kr93DvZQSYSGBUv38RHsk8qDPBj6j4cZjQAXrGMoM4x9Wnu75aoLqR",
  "key31": "64couXTf79SXMyn6CuhNW6cAHRppFiq9Nbf4oSv2QoxW5bSSr1EfdEJNdxAfifbnDgsmjSUPzDkKEpTJGPaNPLpt",
  "key32": "CVBTF18A5TzKVfbESymYmJaMX8ZxkjnKLPLsnHe2C62abPJMLW221y49yAAZ1UFKc3W9C4gnSDBp31M6kdZw97M",
  "key33": "2sBCGv5dQ4bHrEw3uFYXszBZSX2YMd5VbLod5ApD9ffkytWyMcfALTfVZZrfLLJjU4jVoLVgCAHkcRS1iavff9bs",
  "key34": "5ZBKqSTAXer8K835fW4DF8RiQRzxiURzMj7YUzJ7sdUA6KrqMW6wAWvK59eWqkunr4RuJBGyCdEqrHddyBWeQV4Y",
  "key35": "2RxEuvJVoEFPcYU8LLu7YXHsNuUcGr3HQ5YJfnWWPGANKZgYwM5FoF2cDQaHM6EBtnXZwd3bxaJUrNeCZcxRGDiK",
  "key36": "4quciXoJudK25KwGUbbPVk2XuDZ32Jf48NRSGSwdzemDoY8m396Riiwg6mS89VREezWkx6J4v7XUKrrbuUkU9sou",
  "key37": "2QvRDVzqLGVUzCSsaJkemaLQ22CD6sqph2S3wemvi9mygZdRPueiFpAB1zSMve7nJKssmMbktRLwHEyVNVYMwdvK",
  "key38": "64WtoqUrzb1kvDM7NBcHpS39Jt42pQajr9zFD5wCVKFao4zoSRcXsCPRfbrFN7J5UpAp2s41v6cafUNHJN2yXCtE",
  "key39": "ssr8evtRGEYTwNpe5fqbuGz5jDjwoFATaHcssuUA8S5CKessyCid2G6BgoTxuP8UjXMqda8ppKwTryV9PkwZJD8",
  "key40": "oNhTqhQoazDpDT5hPKyhquWVaHGRrRmx8cDkPAZ5yQ9dkZAcLXSgHSnTqKsqnwdKUstDNaLWStY4SoumP3RG9zS",
  "key41": "5geZU7uzNN6kmYUoEESRGMiQ7LWnP1ThgT7LLWrzK9EPLhp3WCAmBUZnmVNn9QED7Eyz7b6oEZNwpSqTx7SGkxSb",
  "key42": "3bM2YP3mXA1B96VkoyNqGxSZp9GM4tUpgzVCTzGfMEYzBnjtfqQJAvBWe61ANnzsQJ4DKyLxT4pk59aGRuy17eDE",
  "key43": "2y6S3L3jvr3RLBvP5Vsigzf1fTZ85sR3KU7MsViZgk7woACyLHUyk4y67rmEP4ARB8M9RqY7EcJ81wGCWgWbqoye"
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
