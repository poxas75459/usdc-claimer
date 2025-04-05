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
    "2UbVZBFs56emxhYsPzrN6nKK74avVWVkDncZC3VaQkkwtDQvDnCW1oQY4fM9RczHUVnJGLetNULUe55vmvTfJuuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xcf6GyquXRFQzEqw9XjSirQSCncvWEYoYNgVvkxnnmYeYQ4dw4KRSn8YyQH37TFeyYE1XDbjGQ2Q6NbEJRPUeYK",
  "key1": "sRFSfoU8phXMft9vtnNULaL64ckbMNYeFKXL7nVLGbbHMPA6SiyzZqfH8kKmwZ7RemGq3LX8obBx55wAgTN44VL",
  "key2": "53eN1RWkXVgPAs7BQ1Z72Xc5CMjiZHsgdr2wb4YAsfruvy6wJzVi8GZQdJ4QYQP3UCjesWZV7zfh9jF6HpVdkrai",
  "key3": "vppfoWaeFJsNcLzBr5gvvTUSs3JugKifnPyuc2RgrwJWmCeUDseNfX2TMe6TMvtreQUKkBV8MBABMyuprQfAQfV",
  "key4": "H8EDYD8VNJRSCPKj1x2KPv8RkdY2oUkwGu2mQir4JgRoAMHKBrK7nhMx9w1RFf8SnHpUx8mPqA1w2TfjJzkSfbo",
  "key5": "4P3n1mLjb9AQPaTfL83Vk6wTCtqoqFSGHGuzDKfNVXm4qYtPJvV9vNycGrWGGfstgjCPFwtzFakthz6dTRWFe73V",
  "key6": "5Q7cJiXrQBchW9bQtQfgoBmyVPLp592th2W5ALwyBxAapxsgKtsgRoi7MxrQ8XZVdPQBtv8UoaQkiv47V5yeEoEy",
  "key7": "5rYDiZU3NJumKj53vBTnb6KZF2yTmow8PXRKyRJ1rXyoGvWiZ4LvvfnhpLsnmbLcd4n76npYczXnP6nLWffz4Trs",
  "key8": "2vD1rtLq1UKJeWNuGxgircXky24rek5cmdHF1yfdS9DxaAbNW8KGQ66w6ZSzvTLMBnZAqsXurb57eNAkvDFgXRaz",
  "key9": "sY5TRMZPCg9gyRJvP38RS4qD7Ho8TgZfCEcEH2qakRTy9Y9aNXM5KtCJg6oXTeeA3joXhbUYvDeF9wQ2q9LBwjX",
  "key10": "57jFU9dgnG5o3RhZaKTX4UK5n7Ag7k86vm8gVDknt6uv89cNvL4sxkcddddvkgT9zvEvaQ86Nzdi7hLdEhSusevi",
  "key11": "63v1YUNnvQWiRbeDxABa7SRVKEwTzfrHiVsDaVxJPoJArER3imW86BuUpN7iKy2atVjVTpXU3QLMqQqd4GHoVvrV",
  "key12": "2nnNHZdBUnuw141AKFSx4Q8JaGw15sjfC2BTN6NEhyQrHWRyvsEKtMmUw4MfqgWiCkvSuYDmxBXKowWna1hPoDdN",
  "key13": "kBZ98ELcqRftDaqUUNAsKRD1xo52L5u9VcujvsjwBs45Z4Qgvw4hnSxb7Ra3ktd4qmrdnMZQzXtkdSrdUVWgrZB",
  "key14": "2L714ik1nuwtQ8zLLfRamKg4wx5BGX2FE2i7rEUkpfCx5wapMKhEiX1k4WTh42Hkhu3qBYVGkTVvEGPSmVH8ELUs",
  "key15": "2K8di7rFGxLd9VW6PCbqd9WzL8MCe2nWqPH2YdeRWgsjVt9dhCwiY1Nh94HZeBkjqNr5st9ggqSJL9TC65LTsCJS",
  "key16": "32jbcVFnxXvSvp6YZgHpCRV8NYMpwMsZimqvZbwcmStacE1sWFdjnKofnKNdGpX3uibqfdM3FVLvMP3CNZdX8he1",
  "key17": "5dmSiUAZUUgZAiZFzcEfrzuNVAWL55wrzg5ofNukirA4j9ZFjgVFQcVWYuXjqkq9HyW1YJQefhhZ8NZK1bLK12nU",
  "key18": "49gsctA66v6UM7rhrgPMkvATkiWvUegdwWGDEVw6QU5EfdthpvukLbQBcK9VhFTLyifd9Cy3DXp5tEhdYBmZqcuK",
  "key19": "3Enozpgnf11LRYoTHEiN5Kpu5CpRdVNpVWE2uaGP5rm3oWT3zcDnfupw8swCxm6hPPtzxgZEh2ah9gQJmeUCNce1",
  "key20": "4MAvDKmcvgimrMKUTMsWXZF4tjosjs2SPvAua41kueaG1nfrcbbquBe7KcdRiizZVjJRyw36QVQMsNy2P8wWDbCe",
  "key21": "smdiHU6S7mykUTrcx5mCJtXa3hjSYKMrLnX2reAfELzphvzMvH8rvfz9BU7Ckoh7f7jnDh1UffKf97PSFEJBpD9",
  "key22": "rHPt8fFxfDeo3rQAj1ofsCEDjpcriNDVscM35jRRsHCvmCASz3SbbUQ1F7h1HrnfuYTcjTgxmFKATU63mQqtPd2",
  "key23": "4fTDiWaHQ9Ew3ERxSgHPgWGnvfNwtDsgSgY9NT7McG5mCqTewsHk3fm9mG4jW6g8L81uHJq9i22hyX44x4BE8LzC",
  "key24": "5N6KiugtfdAgACm3tuKUMztgpXyMxhxhbNeUZhzBqP79F8QEJCzKR63UCSYXn57ThhL9YenV3cdT6o5WLA3hGfrP",
  "key25": "5ANDXyeQW35MbLMR6eLzVNr3NAcjVuJaochxQmBfo4XFQtfpnyhpzWLz7whrgDrDLEFycprkukpXXkWuKiXvuanC",
  "key26": "4gXSv7YsCqmo5e1MLcGaoG8TDT6Tz1U4Q7GeVQbgCpVyFzEZBMTXxsiRRidt6FEW8bCVYqSysSqus6ox5KCquu5w",
  "key27": "r2tzxDmrjGjRGMLizvPHaKTqY9FPWK5JUzYtnHkWHAvs7xBCreH1RGzCWrw8NuBpp3kuxUsegZW9Xwsx9R5DmTS",
  "key28": "2JCjGyYXRGNdzZ1Xk85j3RD6Cjm3P71DBVR9EVkwKPfo4PX8nAmHuVzGaBoJeaTCJRM5rK1jGphxTmRg5kXe15nK",
  "key29": "3awQ8GBzvFc57joJdw2RhU5LhR2fiRunG9zEjqebacNdNEPMuScEqffAaKRGi3E7uQSMywHBme1usiVruBFYKn48",
  "key30": "oMVgN743xCCJr8YB7wSsEQZuMr53zVwSuorQCFMGpdGwKwBU23xEevFvS7XLFPeymmisWCgJmcx1S5cC9sdV8ux",
  "key31": "39X2mAe7bWQTni2WuHUn9crSVQeUD8zLp5JttW5h2ZsxiwtytgXU6sxHLzdpTq38SFhAixzKHxNrNRgcVQr1HZoz",
  "key32": "5WVjgVGrygycga9xnimAebGVvRsJKWoYUuoNg4ahtVTToKL4WTJHNbUDjwciTdgAYd2XMYDFpJacU5eEbp2tAXua",
  "key33": "mMHqR6CSCo2t5ZoRSfJv7kv4e4s9EgcaqdwuU9avFLwQNMS8cnucBQ5otrKZNM2VXjrKUJw8a28PUHDDSLnAF47",
  "key34": "2qzvJMAtK1u3dksFx1pDgaNnZNyhdRCQCofkRkGixYcjDjcNCoVsaz5UdDvAij4JtwwFi88d97RGKMfyxrGFcqr6",
  "key35": "93vb7xQHJbXZZiNFWt1bnJb5Lhvoru1ce2KaKSQYAZcfBMBwJZ8TEJ1BMvPXJyQScU13qhpqrNUf1HQKZuudPLr",
  "key36": "26NNr2Tjfp4Q1xEqv2YpLsTUnBdSGXQAFX58QYg7cYYjyrFXPsr9HheMWgwVPhH1t6yxDPnKQ1hen8bkZuuBHc4T",
  "key37": "1vUS5Sb3P8NicaxA18xbfCJC1cgsjs68hatQisprU4MvSWQ3XhX5XeVnoX55evxKSYAxkaRfEHsGKQGDFp834r4",
  "key38": "5Nk52McPtmrj9jr3DiUar2sSZYGu9W4qRjjJYJWH6KyrGiXniSsPA2GzEuU9Hfb7JUUUueadWiXo8b4PQm5r6uq7",
  "key39": "3nt2FdrUJZXtVfSmqyDVwcuXUxsYkXCQbfH1umWoMhVd2oL5DXMseDBqnYfqsAt3gtDY8yCTChbvTcPXJK4ojfv1",
  "key40": "3NGdP1VrE2MKJ9LNVvEkWD1whs5SsNUWfdjcqGcmJrCSrTS9nHyQozuZ9dkPV5695rEEWDFMQbS5FKJXSJfigzXy",
  "key41": "5NnZoG8HgJhAR6yBhVpJ5z189TWgXhBY2Ck3o9A4fMbsYfHAq1YiCUrwRmUiST4RjSoaKxd3oiXfBRLdeM5CCTcS",
  "key42": "65HZp41uXLFvjkNM8qpHybqymWytHLfX4zxietZ2psbWuA7qv8y285SYtebN58mpt4Nd2xR6RkVXJtD91d9bdost",
  "key43": "45GzKepxfUnjkVsWK8PPKVZbo5QEe9zFw6y7NzB63Q9KjUQqumhDjSHrtbBABDdJzn7KhYLryZRkqUSbriHio9En",
  "key44": "SGb96hBnfxDELTqTeGrh8Q1Aoc86BLrhHdhcW5KXPy3R6RoU4Fk5YCm2BYPXV9c4iuqWGrx5cwExsFNEZvqFPMv",
  "key45": "4txqoPmaKcHh1EuVwhL5xzR2hQaKbnBn3qqz2Y6KtyC8gqZrmK3ENikCsdZmNh7jhz7VJKZNCR4gzihkjcTTaNvk",
  "key46": "2f9F8kFy7CK6ncCgYmHQj7odyJPokSebTwd1pLAdwhojLefXfyMTVQsSG2vNKe2EkvPx43GD2pfL9C1F27GLFsh6",
  "key47": "53EfyXuNQmYqS736FL7GNtzYLbQRtUnj1Q84RwGfgMZPuaE1eT3JUcZKiHyx1hxnydF7ztCeY9UR2LSNDMzCoih6",
  "key48": "4wrsCTh9rA1tyYBgEE8vW4XG2TF15yMJkpk8FbmYhSCwgvcSehXWn6B7p8q5muCkQnABtiQazcAzJafYzspGoAEC",
  "key49": "3cEoRo9JM8sSFmnBwBBPyRN8swzBd5KjeSkJzDNuUC32Jgd2KTFzvNhU2DkCYLq9HSDod15DMXegVyh6Z85VerMQ"
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
