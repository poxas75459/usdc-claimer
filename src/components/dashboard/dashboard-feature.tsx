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
    "4aFi7YRmXUy38bbP3x26zRADUBovYRELqzX2oonqqSquzH1Tsb6ebi3cWrCHvZsLkc3qxHNkzkK8PXN2DUBH3UMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8AhqwjP2KKYpW4os9K55xsAUJzFo5PqGcHqhWgi4zu5n9JhsQNi22PD7szGDckeg2DK2GNZ3fig51kYpYJmrGZ",
  "key1": "TAyPdxNpFjov6X1JgtPXrEvLKr8nAASbNYeDokBUotNULiQsv7mArXY9Qdfn9WP9spBgxsDSip4SDzqBUBWPA4Z",
  "key2": "3s6Gy4TP2FUqNy8LVALnid8eoNPrjVxXaa75UuWkzgLQEH6K5uZjyyCKGujPwrYaKgrctL94iYUnYGuL6vC3Cpv9",
  "key3": "2bs5cyeobtF9nHHBFfZypPKSyWf7fSVcWuiMYokUzpbpWsuecnY6XdfcBnRmvjuiAXkitsJvPtk15JLDTMary6mZ",
  "key4": "3gF1xhgqacbCnNn6qwUQ27x1mgs5gu14XaA61xPKjjjCYMkfG37AijUq7z1k6hJjR717irkEjhWjM4BrY9hGa5g8",
  "key5": "4DtC7YyUu3mr5qusDRc27x4uHWK6iep7nt3hC1vcfrNQmhEHtei5tbxcKH881taaJkizBM1tX2mAjWqVQRQQg13P",
  "key6": "2FNVUi5fhuaoP2632rdnugwR6JHRBGWBWJMC1eADXXU2NSnzkSDPFXe562bBkhytUKavh92SmBmtyQDVzjXi7ZXK",
  "key7": "3hCPifRumh6hRTAZmUtnkTFJKoYphgKJRhgXmbLUeAudbKKVujSxxzLaVVV7avjYezYZnC51xC1RHCqWXNUjaUBM",
  "key8": "bqkCmEYdqF7cfNjHpLoD9NF6uFUxSPFkFuTAUg5WUAgdgE4jnCpPjN1kTiczjBrsYULgk5J4um6H6BsspvD13wp",
  "key9": "3yc9xVNTgGi4wGzKXCL2RzpkdbSTZFx2k6NjWxStfUTQ83k5xf3zhCWNZMpAUroYj2hdjW8dBsnvnxCTRBMP2crX",
  "key10": "4nDJfEekC7WGTrhK5TjXwumenRtqn7EHmEuhMTHnxsvpnP5MdamS6hgn9tcz4f6KqBeoQiYvSATNxG5BLbyoUB6G",
  "key11": "5XRh8h7YeypXPMP2GgEuBjeeLNURmSzBWs73ooS5Lufs2wHsromP2rAXcqgV4z9Df2GsUdDBCGKi2pvQP93DTDYo",
  "key12": "25r1hHUv4YTtrDzH6JMuxW1XX1o4Kx3uDE317JbrE92YimGifb9MhgLcAdiCBVHLLiQuqUajnARinhFxnF9w5GhR",
  "key13": "5CT8J5NXvvaSM47adDhuBDX2VPtWkvVNqVZ8TSgAG34jzv6MuMGCgEnqrcjJNcAYAbc55ZffNqiBNXSVdvAdvu1Z",
  "key14": "52KAHkGidTXyFavLWQms7suYTXo5dmT7QmkYKUhSA6kDYCVZjoBEtLuBbGzL9tfEkMTobiAkSUYVHNZG34w4a3bq",
  "key15": "4HNKXdxwxZj6Cxm4eMaoYErbcBztMHrUwDa7zx6TuRZAb7rQF76ph53PAAg2txLcj3wZuHArPPMA9o22iGW9FYrx",
  "key16": "5G9woUi8wF7JioQM8k5CJrqgvkafQqQPeHfsFbGAGcFiMZ4mwbu3S1y3ZohBe61uMVZPyBZEqp4LaA13zTUMyGcj",
  "key17": "WAoMzutwudqTc75RgqEpUtSCZXA8rJUa1SShs2aoGX5RjBsok882V5i4UCdkNLNByMsea7dJnBRa2AGMsd2TAxu",
  "key18": "43DFNU8qBJz2c9XrDw6ydEGoA5WyvVPG3j2i8cpS5XKd7W3Muu342GNiV1b8z9X3XQgt5xFZ5ei8yvY23gCuqEDN",
  "key19": "4bWUZCgVxkbdrVqK55MFqSYF8ygisVG33AHYvTyvLjEcB9SQ1RWAHDZhBxjHQnneZ2rwkKCSVgaCqG1J6zp6qnVG",
  "key20": "2xC7V1gXanLxSsU7PoTRnM56i9PXC6pSkSPb7xwZEfLKfaHhyiW3iLBT8rtyUCA3rdS1QUkLCdcG2tRbU4FQEAca",
  "key21": "4BMdHudMM9jJnsW9A8iXE1Etkhsett1b8t9D6FhkiSNKJK51iDMEenAacw23CHkppNndUFLPurNkRvHmaCdbS9xH",
  "key22": "2Vhrmg5XQmsQTmYo5Ty3aDcYi7QXVF7sXk7V7hrAYTwVhiTcUUsoUVUoUPgFkzmFcM9pMTWQhC3zwELxfTSdSkb3",
  "key23": "4ViKNS5r6oZf2668P3FxgbX4HtSED5gCDD7ttdtqmTBWPEKTGaTujrDDv5WvSMVkBQTbG3JE28DaPC2eeZKoDuV7",
  "key24": "2cVNsjnw7iLzf3QhYpCARXUgnsurSXxo4EeQjtDZng4vPgmBDAZoBifVYN49UcbGz6GdKUZLmbXevezYYG3vhjP9",
  "key25": "8h2Hfh36ngzPc2uvHx81BmwQgv2rvYMzLXmURjsR5NBKkkf4XGNn8H9zPCs8M5yuUH69maM3x6NxCVucRkRxmNx",
  "key26": "2cKKc4aDudYTv3x7eLLLMFqPbFJxALAz3n5Yf5CKCiExCXZ9jrRqMHGxBiSNgPWbGMTo1bXhELe2ADWn1hX4Z4gG",
  "key27": "2wN3uJbdG2ddCVQTmYxQJasksFGbZLAKFLzmAqmHbtagH8U3748DyKygo27YuPjgG1uhgK2Z5aHfXGKhdnsisBv3",
  "key28": "HKkSNhfMURHseVavmTRs72AujKn6fLib3knvzPYXQGf8kqUbyRVkuGSD4VCioDpbzTRPZHQZW8iS3yuVHhaYMoH",
  "key29": "238CTpigdgvLifGAb2YuycRerhCsY3T9ZtCxFdxUHUFXQPwQk7DFMooSETJK3fCocV2buya8NEdiDHGadKZ6Afv8",
  "key30": "uN2hkhakvAJR1iDYBwTSEo9AZ2sNLJ5xbom1K29J1fvmZPBJMKS34qj2NgwwMK7qieQjtXV6A4FwksFyVKvatMr",
  "key31": "5a2KwGJ4KNghhKkCDaou2hh1xEjLeYPmYV7pnLtPiU3VyLo3JQA4ge36igwftvaPDnvNxo7TcWHTXG6fvw4zSuRg",
  "key32": "5eJRQQstsSzjQEU7JGSmq1tCBYRcH2dZZAaAETsxNf8ECf9UJPTnyeHtKyFdSaHiwQ1Zcxg6RzCfeXSdJngRwMr8",
  "key33": "5cH9EPKMpRN8jNN1kNMo5jpV7mnY7KXHwMF8JiShYtZ5UrmWiyK2RQstWyUVu1wJM8ubicqxi24tJfpSpmemaHCM",
  "key34": "8bHyDiRe5aqY9zUwRPcy7m7TZtWFb7QJKFab88TBSSFBs36tfSmWdR5rVzsvVV3RhzStrdKQQLGfhZUALPwFhn7",
  "key35": "4SGzng7hDviaG6uHYUVfsSZbG8gbeUHMqhfeeukbGq4yLeAoFeEXMUFE5KeixFLHA1XLxL7LBddK9n5TMYyRPNa9",
  "key36": "4fLCpwnreGzecAptajB1kZ1fyjhKj7Z3gwsS96mymKYnoXHXmR2h2RB9D2ysoX3z2z2ybyQcpyxjitZmCu6CmJPi",
  "key37": "2nW4secNM6J2T3VaoyCqHwrtTBewbHpEVcuyYwppBBETjqhveQFPnzooZUxqZSWjKg36JrL73FpYZu3HvCU9Y66P",
  "key38": "2gWhomibHYpAhsxEs32adsbrfHK49TyXBPkujTpcnCX5rvuJgdGHtaDNFvYpzU5Pic6G3XGGt2CLjJRrLAKDv1sf",
  "key39": "wtV4XHvb3zoz19vJVP3YPHHjzhQrVDdcamFyFkgKA5BTiQypdMBGyRzUHns9kyyrJftD31yVCQunThRtNnmKpEm",
  "key40": "5AxKs348YGJLtqX6UeJp3qmAJwTWtmKutFYDbi5frr3zZJYpqNDepwRCZSfqbqB3j4u5uu8mRxYD4q8Kny1Gnb6K",
  "key41": "2uLNyPMoRHuMpfhtA9V5tu7Gs9cg5a2Rx8F52sj59arpuYCMK76UQjQ69puDRS5p9ZV1oDhsKywJC4unm9eyFNts",
  "key42": "6EXLHP3QziDj49VQCdq7dCcAGoVAiejUzmhRsuSTKRmzvuwYD3tbN36ohKLbugvvAzcG8YFvPjrT5jozjMGnLCh",
  "key43": "33eTEELqxbSxqpjLwoUm7pH5fo64wkpvipZvZTMb2FL14QDPcPDRhtjY6nLkFxYCJdCmNsA2Peyr4QU7g2bJqmHq",
  "key44": "2NtDMdEaYEWXk2JNPdzN7snpBSiqEo3zazGkcT5hwPFHhjiEFpm9JmFUjQgMyegGyTCm8utG5QMkaN7RAnHt4ZGF",
  "key45": "5jVyceiikkSRmg49vXn5D8xmRsqdzUzBKTqYvDSJaXU7DbctsxuZPJzrzSNCQfbprk1A2v3yxQQGGn1FSidpsmSn",
  "key46": "3V4Ug5kLsJFJyDetJEb2fTPNrRtrrSDFY9yRnsFworsphiBpxungnjwrHxJGStb1PKCazC3z7Z3rAQ49ecVzdULd",
  "key47": "49ZurScP676HD7pG1wR7fVsca7iGzbNCKJLVDzdRQ9qAyfofnQnGEZxxaFDe2Xv7zanPr2ZKRdkRXqvEiLBQvKse"
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
