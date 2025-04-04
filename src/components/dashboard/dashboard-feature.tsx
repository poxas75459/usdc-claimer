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
    "Xpqu26hcXukX6UKuo9gDS7cjHNXxabBv5WthWdAWZGgV9r9xgVFDu7HyBXuHqK2SgdNpZQxyTpRZ2sWakrAKZH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATsboLsgdzAiVrenDwL9b2ZVQwKqFiRudK3d1y2zSztShB5zDxYd4Hh6jfpEWoiuT5EhJ3Ai9cSZoK9tPi6TFBe",
  "key1": "jzBvDNvWcsywRP2915tcKaq1UygKwAHuNqU8FDag1TcSyCGUoLeWKN2AESkbiEvUtX5osEywxuxuVNCy4woSVUY",
  "key2": "2Brs1cc9CHXbc6tiRb7uo9FUv2Lj37uhy3TSEvd5vMHFrjjMjiE2EPEQxh6WxQRC4DzrZLwA4eJjNmMPcLtpHwsQ",
  "key3": "255niYjuLsnJiW5p5cxqQ6aQkmotw2HxDL3cQxJtBXu6RpKoH2RBmpLSvtN6W8YCkg6rDS374Rewz5kodf3CXutF",
  "key4": "55frjD3Jgxa4vxbnfnfm2TprhqMynWZRJPeBiK8JWnLDoCk3AvAxXPkmtXqnhN5V3Gp4unFQH35vcfRJqwigJqww",
  "key5": "2oAmiQ7U7hDjK5t6Ft5m5WbVcziKqkztjVpvFbLsSK9xynwEDreYaWJjSWhhuFYxfnBqDYMhNh1hgvVq94XW9doS",
  "key6": "5HKY6SLJgx7CBQswJooDsz3R5JX8xNFScLiDJsmXfJ1TgAmzt5ZE5FeHqbMVUnE1crASkTFJp8vbR9qatYSFjSmp",
  "key7": "2joBLdkhdHasNpRw21afUmYAPMwTPGBLaPZp2rJGnqYh1V2p6JUhaU5S4ZZLBdk6CpqpjZw5mud13Qjo4kVk5Rr3",
  "key8": "4wD9VKTCJMCoLFPvxnY2ALqpuo2aSvMkDdktKXszTqJEGcvSCFAdMuP9jpjkZet8frSDj2Cecp45GKE7HiEt7wo7",
  "key9": "5bv3kva4bgQNasTKNEMg4dn4LxE4jY3p2Add7ctSLY6paa9dADQgYDTU49hPti45RnqZEA2UGGC6nsag4G3Q2d75",
  "key10": "27q3EWkemTW3SXctW9xYRChh3AFq4PM65GJf19N759cACRomKmoApcN5bR3284id5pEa7rsUTD7c6hi7sdDf3NSY",
  "key11": "4LwnaMbvKXsoNuSH72DKhowj9xFKbHJKyYfs8ECg7R1a5Bi92Ljcopr9sHsLgLELojkUzh15JybC7iTAwzrGrPjX",
  "key12": "5NFLoeFSqcetGFW4YvxJj1qmn35WRFwULjo1JAeWrpNXUk8bdvSsRPYUX1aTeFhyXPzZfTMcn5zYKtri6y2WAWb8",
  "key13": "5zy9JGa3vgrsA4BUWMbxnLrG5nvPDNn89GXLXuzeT7fHyM9fY9PtfBBrFxZfsTnbRsP3BBW4oNkauxJuETC1nhhn",
  "key14": "4YHUFF575p31Vk7bj7YB7cLH1t96riBptTSpA6KDk2csJkMAMzMK47RCSDoeGNeYBDr43dJdnPaVGhv1gbeRTofc",
  "key15": "4Yw83un6HfMsHQJPbKmzeVJrcc9XFvfeiTQCZcHAnFd4VHVKxnwj8FVV3vkMsTVyjCoWgNNsyUci5N2DpLhpYMJu",
  "key16": "4PqTb3VvEzTu9dkqYihq3Dd95uZPbMuTED2UZuAEkR2W7CieyBBish86rvPLLMgZAqQqpe4tFA2Z4cqyp6iuK1Yk",
  "key17": "5bkZtZ5ETc3T2rRgBbwJBtqoEVAzvpJUqSiXihr81jNDrb8FnMJumeT93c49eEYgZAdt27FtirR57AxaUosvFTBg",
  "key18": "3ebjAur7b6feqtnAe2f9fu6sV2THpjCA9RyhE9j75JWHvhgLQtVAm6FtL69iegQQsBtJViovUBCA2T7yMSqqSNaE",
  "key19": "2gH2ucv7ieKUQ9BrJZf4o7aLq4rJcjaB6CMVumwzJTYn9qn4nCeMKHss55y8q1DBpH3kUnL3ZhLbiSAtoz7cntha",
  "key20": "23H2cE1E33fYprvAtbA2AT2KFZqcPsC7xE4zAJGQLa6imZdB9dKgni2T1UuFbts7Fif2ACnSbXi2PQPgLKK9A25k",
  "key21": "4Dso1b7XSpv39ZbtcsaTXsXUphvXGcX3Qr1LjSDE7WaMFNsARXhUqaj4rnxZvvBBQ5AFDsz4aKRubAFm6X95UyKy",
  "key22": "3ghHEdwJKvbJp7S4wPugG8APyVU811vsDkgKHFCJeBwhqyYqWpWVWYWULuEN56yHLrB9dThoiuy33rrCiUJ83vm6",
  "key23": "2ExS61nWynjuhri96wefESF8iKNfFYnKvdahyyha7W3Pq4KRR5Eccmmxx2T2YE56NF5rqur298NP7ZYtpXuXPEWr",
  "key24": "3fZExh8PRBjHJ7nozrgxMN3UGGDRf9cof13jpJcdDcwKES293gt6wNRDAaxxLiRb6fBDusx8fJpod9vUrKh4gxjx",
  "key25": "2eSubsn2ksWRWyUQGwDEbyhhLurEgSc4J66N4we92Gsgijsanr6NdJnPfFjnePENXaT5wn9L7LpeuFsA5kVicsEk",
  "key26": "4Gruz1oXb6K3wxPG7o71X5ZjyN2eZtoSeDveqkAPHTkpfYadkpAjgCafQJtvqobBhxNM42HNfD4wuvG3YPLvtwtS",
  "key27": "5bLeVURUuaEgTwa82Z54vM66ZKFWd3Z8HDkG1aWgHv3fyctfekPRD7vsWWaxYQAQTVJGPMdmGNc1ZkgDUv3Gu8P9",
  "key28": "35FMidA5yjEqXXyoEeh5Lra4DhU9UBGUdosSB5wMMUYmj64T56gpR5sRJForGnqoaiqDvF1aERRAansYEjQFSZd8",
  "key29": "4d4uA1Ba9uqdBNEdri4ZSSeL4jCc8vnx35GSKBnPBVcL5TcAeJRtVomtAUX1aeHEeiBZBBmQUwJwRH7nkcuRTsQp",
  "key30": "ELqzkREhv4Vsiv2qVhABz4mxM7CXeBmK7sy67qwpu5BQH2BwWFQJBSmW5UJfDDxwuQbJ4Q5Vbbr6iFbFtjxM7Fv",
  "key31": "5z6SY88gYTkszbGvJ6gmhWtePeRMHJ7s7H6yqMcGWzf8NUnnnt2du9BRJkkQh7v6o95CLKp9hYUdFEcVgZtg6cmZ",
  "key32": "2z2DCxoRa9h9L42gWoyqVT71cNscUCbKaqWRHxUqjuBPvjjhWGM2JxzCipP4PRxc9BtDHxQRYA6NioCsiscAZFrC",
  "key33": "cZF9P25oSSM6xd9gk7LLeavcs7beQ7GNJ4bpAyY7sdFUoXvCz6LJdwkhqBdwUhEKBKVtFiFQ4xsTbuqdPtvihap",
  "key34": "2QRfYkH4gJ5N8VCiaoGgw9EjXC4n49dWnubMLQRfDDbsHfdsB7pmR7oeSQXT1a6Hph2Lq1us6UMwULJWo9t9mX8o",
  "key35": "4TTc9WPfRRcV2rkk7kexKbcwcDKZoX9Uy85JUFxs4Zn8FXaTpfN6AtGMde4mgWLhdTehSE5gFFexqLopHxxuuQb5",
  "key36": "Qm3MiCnAjoaKLj8RuEPRe12jrKoxeNEzecYNJygKuaucyVtrnyFccJrj8ChzqW9sQKRqM1Vmcs8Xb1bDhP6nGPP",
  "key37": "VpobptJ6Y1vgpAN5uYtF2PtVbJNVgpRVFFR9By12SwowHiU3DzwKhmXsGXooh6TW6YK7zE7rAPPBFTFLAG1eSej",
  "key38": "3dzQ9xJQgMjk5Wb3MtBfctnLV2183zbfuqQBZEkyj8vPXCwWD41zFovr7knLDEMcQAtXQ1xNkiGLmeyAfq1CDNiN",
  "key39": "39ktr7q4p2E6sAFuZoC3LDEuNpQrLB2c24RZQQ3NczELhLhfcW1JjGD1NYhBn2Sac7nZm7GAnuge4TsNB91oi4tf",
  "key40": "54t12Z6hAZTFitJTXWjJBohNg3S2Wo7QXLDFXsXYm9FfDVjEfoRLHBbJJBMV6ZBRwJm5i7hvMJtx2cZt8ojqN28r",
  "key41": "4kK1rPAfsma16FcMpTfnvgGk7e4kK8UcMCpPek85zkRqXQ9vEs9SaHCppWn1jUFuPNK3xFiHrrd9MtUBkEX9r8yi",
  "key42": "St3gxVmCiMK7DhhkBwEvBAsTaGRgMkSw9xRMcnpo6kuqGKouNRxPg51EfpMMRYfpD3esgXdX8yRAbSvFJuzEsFk",
  "key43": "4JhCAQEKfWvc4CyZwrt9vzr4rsTPjt2HgqgnxTfjqkXn4pg9Foz3H2mmdA9dbCJ2TTSednnVMxuvKHzXCo4gcWEx",
  "key44": "3t86eT6vxL1EgMSzuGezYfmFZiEVwrM3qkqTKfS7ozrXf9gmYTT7QG2uaCvfdijzzcwVETXDb4iB1T8nN7J7AvyX",
  "key45": "5T1gteGnJ4aNxb1usvuVRS1pcCckrbteRXcHqoPXjRmSRTAiGDGMzPC17qA7HvKv1JfyYmeLL7tJJsS6JwFeu1oH",
  "key46": "EQKkkWN8EtVzjHZ6vnyK5LEahssjSW2Lp9sX78jB343YLQQ4KSq6oW9m4PFLF2YjRi9yYDuSAyFgvy4Rj3P7y4D",
  "key47": "5d3UTGBXJqSVzyko6e9A1FWiUKU4NZN63R3tssKUQtLWtbt7B8pwMS3Ph9ueE8u3miq7auNjqt1eSzeLiRj38mrH",
  "key48": "22wFoUETozcBJBo5jSNyK8ZnusUqFDEFqFwQULpvaRDX1F1PCGgbYWRyhGrsfti6hjvdDF4s3yHV9pKd1nmDBZg7"
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
