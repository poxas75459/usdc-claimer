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
    "4PhZ4YWAk4ydf9tCDBhBEEVwpk5Rks1nLsqWGCDFLMytR3ZZ3SmcHx6GYSayNA9WLNQspktT2fjTRCojzE5g5M5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bHLpyoJ2KAcV5S5zQEjrhxEk4eJrmUnW8qx3mbFyVhUKqquZ4qvtNSmc8J2wsu9SyLTYVNfTXEuxFbm6jg79dn",
  "key1": "4muTbTk2oVL1FLS4Vh8aeSgG11yi21vYS7ejouyyqkoy6FtW3MwphxT3w71QpUgyx3ydGdQeiN9F8MjeVuJbMj7d",
  "key2": "3VgRZnDsjUFs2xmXU6nUHXDbMZCcH6a7hoyVF9ifm81KL6WWXrPMGDkXhf8Jr88JJe431Ji827VaPt2sCK8Leoax",
  "key3": "PcNfMY3EeH3pDuSe6237BEDVaXB28n9gcrTZuzuqZ1rBhLd5Ed8hi18d4aZKF1PLHiiPqWezZCex45HeswdV82q",
  "key4": "eH5uAHmN9WcDR5EKrN9R8pjLS4wbLj6qyZNytsvyqDPeQcLzXcn97cVS2eHnKqdpbg6pmv5ELvVhBJDuMcRtP9B",
  "key5": "qAudasbDvKX71BeFPL6SS4yymnW3jdVQ1dPn6ZbqHYKqKw6HLBr8vLoikpm5CGd19cd45skhadpdiS1ZcKv5PBC",
  "key6": "CCdbMC3awbGWoLHJcyvN85W1ch2HTt4Tc14ciX9NVBbfxGHCCjX2Bi6NqoGMZD5LX6ixKFB8ivuutLyhsYAFqsZ",
  "key7": "oncFkGzsKu75R2S3y2U2JjAdooZBiT1PWbsV9cUHkCSAH95in88BejUP4xXij5SEvSE1gfSK5bUmgK4uJyMDQt6",
  "key8": "d193GXhQaYhK3BhrZRpXuZTzLMe5bud4eh4bd1i5EkPDehtQFea2B13vJwqHFcLcUVpueEacWwWjtYRdaw9EgrX",
  "key9": "3uNzem2TqVaC1MqXoHiwLPrbjinpZKjK8KYXhGpCVMkXaoknU2mLok1WTE1vkgZwBNEtGBos67yz1wZeeukWAEQS",
  "key10": "mtRTKSeNBu9FP5jaVfYeHgMtAHbVAC3B3ZFHmqJKr8UfNFzezN6v158YiDDCTVsRkWgVz31RYj2UYvrS8YHDo3j",
  "key11": "4auYfcJHfSKDuv36VZDC3Es31BaFqUAZYJ2RPB6fMUB6bqoj4gGkN1Wu3fAAJQyQj3BFfEzpyTRMBWnEg8ms9tWC",
  "key12": "4uQgG42voZm8PA8oLwS3KKXaAu9bFdkj3nePuWywCn9gATKeSjUZF6zamACTzw9nSJ9irmLHE7UfAZoZxynH7YU3",
  "key13": "3WEwy9J4krLFPLqnoiYrwc9NB6Y8G12Lr91pn23ERNJzFLg26F6ifKPcgo9zQXThXN6qDz5q5q6m2Ls1f7QuSyhj",
  "key14": "xeoyaKtGCbEe4AWvt3i6biXHZsvWj1W1CZcLFnawRepgUAkuF8LZU7g31i5kNQdgkno5gcSQYUb9uR9aCCEf8QK",
  "key15": "2XdgV6BSssNTW9XqeLN3utxuT1rYRu5HuA5brSx2ouUtVepTxpnD4nKwfU3iMaEWzWmLmWYQzA8uYNgYk5vfgDhf",
  "key16": "5LNzmcyh3NFgaq3jRGwEfGYm1ZZfjDYPTGwKv43qtAJRHcgnmCMhXWTiB5w38Zfig4PSsPj96SFi48LK6YcLxFch",
  "key17": "4iBAkLoexeCeRBgS6ii992QnKjNF2FxU5t17pCqZqPQa3rrs4Getrkg7LhGpTH6WHuwzcHDu4Am9pLyzEjnoPah6",
  "key18": "3Lh6cSFDE8FFq9FL4bNGqk7Dvvf5GxmdQqg6UnWymbRhag2TjjonKnpdZmBFKtVpZAwK6K51ecxjei1isaJzssTy",
  "key19": "3zietFLKvmEu4yHpYSkRcRPZZz8p6ELzZ9Wzu4gnw3FWZueRnfYLDhaenSzjTno2QdKTHQ64zgytuWqm2BBQRqTA",
  "key20": "2P73xhdgATjtwQLMrx2CPLUzCVRhBy5mDCoJTWzPwJfL5nVaTNPUirycNwctdLgJ6trurFvPfXrmhk87d2cz8VLe",
  "key21": "3LqMDvgZ75ppcft6Tvk2ZFywbu2B3vGRX4owx4THMdhrAR8SYmg1NVTvy5PpHHvY1EVg5t5SnxVUYBvxY3c6rdvq",
  "key22": "641QvGJ7m84AGVNkSMnpcguMacpCPnS17v37VXRwgwfbaux7PBz1oUfsLrrzxyc8rFJXucbvHzNoj5JxSzrAiVis",
  "key23": "4QhhfFNMWuhsKdoqsn2xPowu1Tc88hnVXiDiCggrzFjhoXCBAoCLTLqnonG3KGBXmbGxi2gL36XDRj2s1ak8gJvj",
  "key24": "2EyDvX9NCuJ1kdgeroZ5viBdxBGY5okKQXWMjs1wnMvqsZFSvET1zYGrtcJ9cszeGgvcqdhrgaeaGUgzrqtW4oB1",
  "key25": "5xUVpm6fVTp9AEF6PmiUPY4q9EYS2i3g55SXKJUbeUKkMv6qaNHgwd42ZhWbAfmfntHgeU4eDJPJ198WUEGK53gQ",
  "key26": "3tymcw68xtgoG2WGNB7T69FwgQECLV1yFoe2zksbMNGSq997wP2BbPghYMMZNuKWLfJjxP1RAfAZFofRkRDvQFef",
  "key27": "4T1KR3SQ773PruabacZ2YdStR7yCUXDG7XAtS35rRENgJ5rbc6Rtd71PVU2mSoPoyJh8CU7UYrw5WuwtNXyqLK5",
  "key28": "4kcRNgtUBaLkPfb8iTQm8Pu2nzvqEWnx3sYwuzj2sFuE9vkANsqnY5dSLpuQnPHc1vFy2gLzEwKGEv32SVXW4bQX",
  "key29": "4qufEDaHSWf2TC1Hc5tgbpDau5v1uTeM8kkuwfuX7UemPYkshTEQfPzA8FyYS1CKuqCx9KAXCvAvxyyz9ioYKsmW",
  "key30": "3GicaWprpyUMyiY6xNaEH1w2DzPQS17aJJA2fmMadWa9icqjyDtuqukh3XUY8KM4bZr8AtwhjS9GJt7nMUq1DgRx",
  "key31": "5WqknC4wGJpNbNDzfjhSoT9YCSqHe26cj5J1CZaFhX7rZUbjiUvuP6sdY6wQMfHh9ZCAzENsV4TGKFBEnThUhfke",
  "key32": "3FRJFRp3ABRKe3fuzXWNTAzDrx5PneoHQZbzuf1zi6XpxU3D3qkgnaTGph6XCrhg88PUN6chMUPbUQhKdU2bpMAn",
  "key33": "eYQgnM5KMXp8jv54h2jPHPaumetGiUQUwQz6SQfWnuS3QcrKyaeNgPQo1ovzHsxbzqaRqWYF8H2wzsyx1GwD3MS",
  "key34": "Q5eBvbczARTZ7vxVZmd3hELqdhK4uvx8kACfoRCihP83MimdxACXvqDH68WX2Ye1PDZ2piGx79Pf7rpFFwdPTv9",
  "key35": "4ayrW6KLMbzoau15DiQ3nAoLJQfjjbd4t1Gigu1z3Z2qv2EXcz1WgfcaYdW8hVKQeJf8bFVrWTd3HURwSZFgfopS",
  "key36": "4as72ktXh37TZgffQaUpxe3MEgdew5b9YDVxyrsiQU9LZe74Ca4p11fLhiJd3WykgWzGG4iRAvwBJ1YtVjTNFt5a",
  "key37": "4HmLqBhLo3FazdqXVis4JH8VAgTA3bgBNHgraSWtMtkXVuxm2SqWYe6BiAidYvnz4EEJehxK29wJbZWLFAMApn67",
  "key38": "mYEG3PYDFCRPdaFDAmGhHmAXfC4s7QoCL9tXAzCoJTRZcgBubPnbTsHPadXr9hBRzJuGv5CJfjvh9cv9W2S3Bx6",
  "key39": "4oBgkWS2xgAkBWuxwwjzcTfUMjFefHEmpg7vhTmcmVAT4PvDGbZiSJ7en3Pbr4HoZkraxoZY1c1MMecG1EPuxFXS",
  "key40": "xoPRK3qkdKq2JxEgFzfFv89nUNKZKYxJorXtMJmVRxFfHXLTA5myQJJ1rkWX7STx1P4SAb8zh4tcg74rMRJbKRd",
  "key41": "4xQXxPrF3VbHY5uAtQ2Q7ezo9PZgTdBMoPPorzPSQpMRGKGxw5ae1vhpbbEd6Z4xFQ339YRzkjvSPHHkahtzXW6Z",
  "key42": "5wyp1gp1SMod2VVd1t2MHJh5QW858zUEz3T4FbM2bkdDEUum5mpgmNmtFDjmVbCmjM88G8LQSwxTrYL6WxKenTYF",
  "key43": "3anDnsZKAUyiJoPUraPmcBrbqp2ixDtSoAzqczEvXe2MRZXb1mKyBvnCCkWvogEYo67uLXxB5bgokYp8JRamZZsZ",
  "key44": "3NfKp6KSbVBZ24aSorUDnJgWQLVwsXNLVwKd751bm4nk1exQvfJmdudWUzafZDYLYe2gKwqF7o8Un221JvLTaRka",
  "key45": "5csYETVw2LGTzEVo7bHvNEBUTWFm5v1jFWzDw86uZXNAV3gPcGzZYyGy6g5G9XKAXdh9dXWAEBTQDmXMYGASqM11",
  "key46": "3j5DvM9p6TdaRh6NiPHbfwPENiSLrg98M2LFzJhUn5hmKgjRkrJmHz17j11KxzLjRjKxdi3Aw4KVdRMAaVRcdnNK"
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
