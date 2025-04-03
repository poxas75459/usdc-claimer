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
    "4VyXn2v2FZ7ZEZ3Ci3B3bMvGqZRwmDiFnMvboAaGQyosvRdXPB8ML87K21vYGNKG4S1AQT6B7MW9oZqaHWNfb9C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wEF6Nh1zevbJ4Wf4rWtophoqioAPdXVdSUn6AVFVQDKt68dYmMZAUXfEb23BWNhDsxHoxMgbA2uZqUrXCwPSo7b",
  "key1": "54aFSZqK7H4k96reT3KyjwnB49kXXfxajnVS4vEz2F1aeBsPezq3XA2CwxWoZnUCfPFiDhq8pgf6DxFMNLbBbpPc",
  "key2": "4ywG3axHvJ9unY6nMd29DdqwGt1mozZzShNLk8weXGfe1YbX9wHBgneRggaVD9TBXyBxVYzZXV8gtVvDboaBAgc",
  "key3": "4r8A5KL3rBJLLCKShatedvbJRDscFTqN91oGJjHGvziLt3zDteWnCKvPyD3HrboMKkyP89hapetgFsooA27vktnB",
  "key4": "2SrpF42DuMadfW7ztgwUqFKxGWrZVNzag7ooc8PzxK2d1xeHKh9GmXvCyWhG5zWTNtAWUaGsdWv25ePmwgrnwutP",
  "key5": "2uAALueumAv5jjyuX9gN5LP6MHnHD182Qz8jwnL8L6sLWeEkFLd5Z8yjfKcyQgGbeeSoCoENKjKRFYpCNuemz6tE",
  "key6": "5hNuKB3GVHgUxmzaNuTZ1sqmTtb24CK7QKNa8zy5BbN32GXVjqZVu77gNn23ViffwJtuQJtrF3G6YJyC9gG3mbLD",
  "key7": "3yy6tXRSbNSEo22K7yy8FbrpkTTDoXHmnyyywkgwveaGv6s2XSPX1avDZWhikgZz9TyvNYJTJx2Gykf3FRSg9ReA",
  "key8": "2H8cG5zP7NgFbx5JUEyjz1sqciVyGf1EZdb3ntzLQUgxD2KBxtmtKGP7T1yEGAqCU3G5Cque2miBwygnaVpc6kQg",
  "key9": "5kUeqm28gZeuv1NWYok6X6Mw6iyfdAuhFLcJphNVrtzXJBvTkC36gLvuUu4ggYBWzwv9u1J9xk7FeajvRc2CEcDt",
  "key10": "3t9gkG3RXx6J7AzFHfg2VjkZge2PEPELdBacDZX4V5Q9sSstwvZPauP9HqbW1xgQE5Am21cNq885gje5gV4V53Qg",
  "key11": "XoQitfoHwfP3NZd5rukJgxBdM93N581qaEkkSufcdf8vgJ8PfGrqzbzGZpQAxgTLHggo5E9MDywYfg9GHfM2RKB",
  "key12": "247NsKMp7ixg7xWnrSW3aDtGxyn3tR2yAYza2VtpUxKBofmLynT7dtip9a4DqhpycPpEzrFdeExS6tCnH3GTtDF3",
  "key13": "5cxCKGTA1QF95ZEPzxbAcvgU3wojCiwo6iWK2vafmsY5KkCxqcupdFkDTZPepRCbEc2xzomHwuzVC5HB27LEsvgh",
  "key14": "5U8Wf2wMy9D7ajPM17iViEGgEUcGLFkUwjZ66FMZsZUVA5MZs2y9UA6B64vtjEQfZTiGP5QezLoTxiTjGezBafJY",
  "key15": "4VTcDF4zQ88GwtvRvKugCbotwMQc3gU6GGzLwGWEPgLTU9GiFfRXJAftvzEg4K6RRvhLv4wKUgai6pK4CoXJEeh9",
  "key16": "5Wbj37KdtVXzVQgWMf2NsUPgoVw2VGaK3XEUjngPqphZhz9Ao3gQVh7zMdJwVYxv1eZ9Mm1rQ4k4kfep1PNMQLuK",
  "key17": "28E2pM5kEA6DHCEcwjYb28HsCdNS4Vi5MuS3Ngv7iszh5eyJznTQJKWifPjC3rzTMmLqrzquyZF8xV3NjbK5EsTM",
  "key18": "4rsd8y8ZUcon296BZRyZ5xsQhQidN3XLx7pFgchvqm6PFrH1UMNiXqrWRgTQtQRjJ8rTVhRyGK4wh9oQWjV288ML",
  "key19": "3kfrPd6SawjvfuuAL7G7nqMsrXAtRxF8VPvHAwxEcutiHCdtdHGz8tesrAEmKQNH36nqoqyzYdnXMa2V4LH2c6XR",
  "key20": "4E97cFqWx3QDU85NNEJqe33kCQ9t1QmMpTYCNTDywz4HeP9nCHH9yGmFcgVekjkjsJ8z9vFXqA77ijPdTjC1cHJC",
  "key21": "4twuEWymYct6MuPkdjUm397Np8qxUEJtqEqEXCf42DwCLMhNCBHzu483HiZGakXyanupDRZstZ5JjYrJJMgEDjGQ",
  "key22": "fDcJsZuZW6EfSZ9iuhWyRiPxWZptGNvCkHu9HKxEEbD9jB2uPDTkvfRQjtbwKQRiJhhs4ZmNzsD34rTC6wshxgB",
  "key23": "zz642PrpNkXEEX6VidTQayoh8TQVsFRYSjqoUyx1jXy1i4dgVuRRuVFfW9NmypnJQX25YETwCRfVvHPu3UEhFHB",
  "key24": "X5WtQ8RwQTKmhrRrz3UXyuNDzwcMXkHYgGYrA2mHfmWkhEgXQHUs5UJf2Hg22NKbSdrCxU9S9KWsFrBotKvqJc3",
  "key25": "beyVBqTyw5XmHAYzFc4Pa8ccwEuxRMXNRxamoaAFbzh1M9ePTd3TjMs66ySn8Xx8icyvp5nZPdgLCv8V8PsY8Kn",
  "key26": "2kZiaAFbZkGngnQ5gpS2A1FRhmxxbfHugC5CDTFbhiozBQQnBcB4F3xUFeCwjiLZDDBobywQh1khxKX2xvUQXyDt",
  "key27": "3DM8tq4iCvhvGqCNyk6SaGnT242o3FesAwNLiZhG6rzwPLDdCr13pfqAuvnNqnKmQtCPt9q8K4a996Nk8VHo3Cvb",
  "key28": "aviocbCT2LXZ1sh15Cnr2eFhoQKAVfzw4bLe5JMYJR2ZAs3P9yZvwt4tNbRHvJQWGhfAUjMXeyNvv4ddhchFRJN",
  "key29": "3uk1C8U8deGcUfqSYdskR2rDGsE7xP3t6NMuzXmLJSroU6mRsed63ZCvFJFGEMRd3Kr3oQWogHX5MxJ1ea1gNYA6",
  "key30": "3Yzad6R7RKEgjj3ebNRo44PpQLPPhYguaN4b5ohpHVDHfPzNVuUTLTp2KfdEFxQAQavNxEHZuB7X6V2LSoxbJwar",
  "key31": "63fxNUbNiDuBj4mm9HSasktKRMG3ZaAEaV3bChQUrfL4b4sWN4YH8aaLoA4yWTCqExSeCUxE3iKtQnjm7kxJPJ3g",
  "key32": "5bu38RqoRspUMFgHhvTn17Gm6bNHMof1tDkEhsi6CN1yXQLhD743bMGe4JCdEGf5ryGHHshd6uEwEqnK3jpQADtN",
  "key33": "4GuMwEg73PSoYpq6wia6SXcJfMnZbLp9xcSLvtDqt82zgofJM3KLaTF8HLKxTYwtueacWepKYMD8TUqgtnGhwbce",
  "key34": "37kHfjBawgMf2R1j22JDuwVSKTehEZ1eLkKSfZByBtFdYrLBsF3JXFCNMRRH3XgZttbQqJGRn4EpFjeSNZZWP4q9",
  "key35": "5AbtMYkoAQYCq26gZikZWFi5FzWzicSTrG37qFAcDzjiUgFusjx8CqusFxNxVjgk88fVfdJB8i7v9SrEJQj8Qg5Y",
  "key36": "3Lifw5dR8qG6iy7Qdi7JA3AkH1xMKsFnFQ57RumA2BEUQyQqUsdmCZqQbjtViXmVL3uFLx5Rzg8AFjMBt4RXdPcu",
  "key37": "2Vjf4HM2wqKniiewtwADFM8vST7sX9fugbTKmk1QDENvvM5yiW9LV4iFnjVELh4jpEhvVguvMJu6xiCuQMU1G8Mb",
  "key38": "mDsmbJZdpmiV74TKzeQJN7FC5uj6UJxaJrA4AmYaGRb11sZKV9oE2kBmNiAqbpHkfhgqFoGBS1Kksew93sUXopk",
  "key39": "51rKaKitWC74ZAy5yupGR2TsSgbXHAiHrkgtzanNapZxjdNG8TtruMeKQgADgoeQ7yvixmb8kwcMVNTFMtcTbJ2e",
  "key40": "ozqjyAkSLNkWHfi7S3fu3EzD3pgMKNR2v9QrnJLP3nMQFC2bsBBPqD1AvqArYHGXNNFRdUKi7YnbbbH3xCXRCau",
  "key41": "5aKs9HyrwCRucn5w1L7UPqP5qAE82t2hFwtQa8s7zvGFWwKPdCYsizyRvWenEibyvnhZ5g7F8V52KKsE6VfHs395",
  "key42": "31Am42rV23ziHEerYEttNmt78KrQXXs9U3A4Xhx49j145SSeKc8SqNzGLrd1ECzT5HymCMWntiqiN4MkkC5bmMgp",
  "key43": "j3VrD1hBA8AvDD574pSfw9jGA9R2asmm6VQWagG7cy2wWcSPEiYNU4Ki5TEEFJ4XHYyDcY3HYdBnj914TNMrcew",
  "key44": "4DMTQq7CKhTg44DwaMNqmteFkVitouou63qAGu8fDWX7375pRfaF7rYQChCsqaHjXE8RsWw3qW48aBpJyM8vjXZe"
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
