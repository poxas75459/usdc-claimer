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
    "5DABeJVn1A5hkeowRnCahR8x6UeB61kzXoYQQYCZmWH3SSy9kjNQaWqGHnAUEB9J66aUFnC5vLQjgYzo2C7Lo98f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VbHNX9YRmE9FNcosw4bz8eQDikkFVxwmguoQCAL6H7wUfjvFRL4xQ9hLQMx16mZnW2Cya9tZiHjC6sC5N431T5J",
  "key1": "5JBPcGNUg1fhKNAtk5uCaoQzARpYLbRyzUonPgJzHVuzEW8UFtxdvooLbPrCtwBymw2fNeKjRUhYrPgPgk1BKZhq",
  "key2": "4DAHNZ6HhzEUAfsDon3J6xWHgEVm8xQJssF9CfRPsvCtwCnm5JCUrYmmis3GMRjEfdkfwFh4P4wYm63no58ZQtUW",
  "key3": "6fydKZWbFh7K139voNeUbsu1u2h8jyXSXaA3CFA184aZUrPkQMZYvwuvrK1yHjLBBZzYUnN5DxuY6R1ovhyTVs6",
  "key4": "2wDcUZBrYbyUXqmmzCtLsbKfznt3sRRcvisidiMcFPfRwdzKtGgUyuUD5uzJHTCwUT2aNjDENL6nSbNRWtD8qJgi",
  "key5": "3WV4gMN3idz7DWH6CVWNBzb5jcrRTJHLWGqHYPXMSJuu5EgErhpdWMUtBdLueQxreVHhdboZZKuL7ccWsdqnHCwq",
  "key6": "5szpYr8gQT8Ts3SjsYAPvK1MuV5gYVYwYXmCmqosyLXvd8gbixvaRBvgNcjGfhNSq8twzxbbmakoQYR85BZ1MpfH",
  "key7": "29QFvMdsAKDTGkCFoZQsbUPZLVVNf8TkcZFiiqJyWuJcsowthW4p1Fcv9ZXTfeiFcbpKR1PDn4rQz5jzEromCimo",
  "key8": "5JvNkFfgEvDuMUEs1xJ17qpud7ZS85oYjzhGJ3P2j9modQdB9ExFYv8ifaJRUNrxXDUKk2YTBu25EuxQzqUwNvhv",
  "key9": "3nsjfsnNZw5eJK7Rp6XhrdZnLvGuNuv2zHyd2hGNAB6bS8SYkLnJr81NPnzcqcbHudo4F4qtwLZD4MAjd6q8RhBN",
  "key10": "2eip66XvBucXpXnuXGxFsR98yqCwsXADDdYmjtnBG8wQ6dqwMdGhbaEYGYXcyFMZtqhvCaRoBYvNyvWsncQDPGYb",
  "key11": "2iQxNKZfAvmf6xKgmyQdQjNrbZJtJjHbU9aKf4Q1SR8M5oc2ofxNawBn83GscPwCBwQGetFpNp4FiAwBipg72tUG",
  "key12": "7Z5s5ArHWHTtpPYH4LUGgsjcqKcKnfsnr26qtd4X9fYmxR485Wsz5YYfkEwHvR4g2UQYzWsKCnnSRwxRHzVr84V",
  "key13": "3y3cWkKHbPdNjSypj4stKa8HQ2SNbBdNCQ5ZjKck2qeCH49qvDanBsikTp6u1BCMFiUig6ptgveDGcDT7rRj69F4",
  "key14": "31UxN4SdEPdfDpaATggXKEfd3smdSiSYexfd3DYriK65mDfyLyAxoHFD1SgxiQJd2nAe95wtaKyd5DHWd5HfgpP7",
  "key15": "AVuwwc26rXMmFmUAFHhZZokiW4JPunzGzWmBBjxAxT3H69azKGvcDJqfFNTtUGcoe7p69ucHfwkr5HykLLwobgJ",
  "key16": "5QbQ1TQsuxEFBmXzFxfVjfNhJs8wzu4n1ti237uEJxLNzD1PNrs5fdEnadHesrsJ7rkxzSbjHq7DcwUdw3Eif7Y5",
  "key17": "3qEVnZXFyNw8Gp9dXGivkc5wn752nq2GJsvsp8scWB2vTx2ePNGbyqvxTHMDXRwTFfXU3UTaYLF6JxAuWCbRA9nh",
  "key18": "22e2VcK5BMZJwhmr7Zqiwi7kQuQ4DffgxPpvkXWWPVqtXjTac6EZvyRv1anLb1WzYhxKhZUBQSz2VZBDvnoBFno7",
  "key19": "4jRLgXvRCUiPPxiTYs4PYxMHJamAuddaAbdApo74293BBov55fWPRwajGdmPw931FC5VGeLwHeb37XEicGuP4r8A",
  "key20": "4XAQXzwYjHbdbxQq9zoghNRkGLTP59Vs7mAAc2UHsPJZxTRgKX4hboSsN82JeSDyP6g89D64VVzggxrHqTyM4CZu",
  "key21": "4ogTXSSKHbXZr2PDx14JEpkiYiVyBKW1quALUq1M9rYoecTAHsAWGc4DLrfAKWtZUUzGRHFdrDjfMCxzTvH6NnFT",
  "key22": "3bUmc282Qjo7ffxyFqcKf5dJ4nr6usyTv69oE5xsVw2gZ1HRaTDSYEyE8JonUeYsWdaohuNjXibKqG9iGVPRFXDQ",
  "key23": "5mexHBTg43WHyYur9ouUPxbUEzTDvzPsyTkjTK6HSWBnHG7YhPoupNL5RN5ZK6Astz2KYSiEAQLZ1DEtcUGy9R1X",
  "key24": "5fyZNy3kn1V4vx8zqmY8Bisf9rBdmVTSBrDPnQpyjxg8rwBYrPuEipCZGK4z8Zrrk11Sf4KykkJAiKYQTvT1egsL",
  "key25": "2PUWG3fufp3Kko1U9Yv4gUmv5iLbPqZPWMjTH38LZUZHwCZQwiPbkUgr8SqoaqdbJk1Zif8K1HHuDU5p7xHFmzYC",
  "key26": "31exAW8pXdUjdP97dc2dXsXWtQ9ioekqXVGGEAujPXZB2nwmhA96dhAwcwsfCDy7e2BCQdrKA4iy2QnG8hB2M4fT",
  "key27": "5i69KhGiAggnZqpVvPLR5v4FSdTY6erUdw3bg1h33bHMn1tUB54buWqtNtM3cuW1hJw7gP9Qj1ABbCzNVXwqkJXz",
  "key28": "5wJpeLLS3MdpN4T6DSr5cbTxVsX3KADQc6kFZ2ZSbdiqSMUvzczyCbAcecEE4cy7AYkaTeEMzBstJaja1Dyk3HZL",
  "key29": "7nU5pT5GgEGimWTiDhYf2SrQrcqHeYaqYb5g8UUj8bEda58kevzbJGNs3rtwBCVjvJFrbbvmZ82n1DxjLLwD9Qn",
  "key30": "2Dh3teLPCqKZTHFtzjQUaLConEyrZp8KLa8PaGKe1wqLQLTg3BxSFeD1dydxbGDsHtnKnky2Zr9nZJfxAt4Nd7j5",
  "key31": "27UqnDRQkcdxBBjbVVSvThXGdFxbbSKmsgP7P25Va9zRs91dtZ2QVb7pNQDX6GkbVBqGb9mA5MxVSn3J1caChpRt",
  "key32": "4Hsu4iibC8HYVALEio6RgiXaTb5azo4VG2Dd83XiWhaShWzNi6YhvgFaGh6fNrwUsPkddLbSMK9BJryGfsyfQERH",
  "key33": "4bMpFpf73prxvi2n5w3dAcwQst3ch238ytDYcBqq73VhgEcAxh6r4LpjMA2hZSvmeiCHKHtEEyag7XtqXqemqoqP",
  "key34": "2msxwHGzfS97RyfL9mzm5WZTV9ptqn2imF7hcZzrpm6CdPYfh5wsrcJHUrbVVgjRUQ8NhV4QnYzG6Fnx811MHMzc",
  "key35": "4G3v2vZWT7fS1ewMPDz3YSugeGUyi5GidssWMhmRTuvZGXS4CMYgPSWijFh8qiWrqbMKfLWj1TTD5GC1KL4APpQx",
  "key36": "4cHsTwhYhGTgsCCnjAYRTGCsRWu9GLnGw8TNg6svCSJM3KXNsePK73qT4sirYHyFg55bnjv3B3Q3DU5EEnJLPoEh",
  "key37": "3Afxnc9u78njBma1PeqHeT7v58hfaG4umQqCeQq86krQGPyZaFVbSg74Las7CHATykoNfQqtAkWeD9x4D88HA5tN",
  "key38": "2cnomQuREx6aUSUDvctPFtw6qkwHb9kP5XdHZN288VpQaBwN7CQLH27b3nAMat5W2VRyc7xAqDanw395Jfy9Ehpt",
  "key39": "Gp19M4ygWYpMe4BXpnhea3LPak4Y9jruwx1iQ969kmJMFUpNh4woLsE37okyTAi1ox3cLKXsyhT8JigVpKffX16",
  "key40": "3FHdAE1DfCoBVoz6xug81os5cjhYmE6yRawLLpp6NvzX2g3gcsAPXgxvdmaPJnPvAej97QDP9fwz1MJpJ1kxwyJj",
  "key41": "A4Y8vtENAWohrKHm4vebXPXfFtkt7grctdLMcb3ruwEZzyvm7XkZzxmonQ7zoGPEgCePLFGxtmhP3nANQR1i4td",
  "key42": "5Dt3xFMZWcyvLU2TxGJ6gPY97tJZRfvFc8mevBF8Vt1WzG4DkH31fwVT3VkgfajAwDZziNUvNJ6Tsu5GLWmjjhBD"
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
