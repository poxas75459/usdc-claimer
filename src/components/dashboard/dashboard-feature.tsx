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
    "64b2FYdQhVnwwfMSPvxGnsNYag4ULoFj61uoSj6WpTupFDJhsWnvBzqQcQYNfW1pAtrabw9mQ7FUED1HPLBHLhVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52P8acPwwUGskJ2FTPnW2a2SDm49rJizaVZH4xNUX9h72jrBbFQ8LLXcEGrbojcLW7YYV3dCfduyPVBJ5vshZbpC",
  "key1": "mRVCppiqBWJqxbqHQsD6zhfR2JfkQGQtZstbQvV3m4JZRcEAPv23kGLwvDYBfpkAY1XyAHAbJBAUyNSxyEA8yUj",
  "key2": "2CvDB8oB7bMnZXyYKNNTYyeg85RBbTcCRnwgkR9gg6dBH8KDckGcy1w8vP7hzNJL8HTikeh5RRwSjVzckEjZCxPo",
  "key3": "39e6YKqNHmvXzoZ8KoZJr59gvaPAqkRRXnyEqokrSeW7A7SLBGvoVvHwqQtad1rCs7RjGH1ELT4dGa6VcjLVwkn6",
  "key4": "47wvxcgF8FZ4YXZUnwHzgQqjsoJ7Rx3SdWoqhJAdHaxvUzuPQ5EWu1GQBdXE8eb1E3D1qaXU3CFpiuujVk3e4ym8",
  "key5": "3HHmAt5UUYy7JeG4ETCQ5c4pcUhwQCLu2VUGNV8sYrkcRwooGeXfwkjWQcw1wq51FocHg5sRgkGaGUoKt2rDq6dS",
  "key6": "39RkrNHUH6WEwFbhBWgSFm21vN9mEm1EFGbHAesfBcqSBRcpTQ2gL6NfSvjn8z4Bs8TpBbSgB7D1LQ3ZW3PmtpfJ",
  "key7": "4Y771xC3KzPbNmaNQqbbg39pduPNUBAsuroj2U4S6PeHeKud92SjBvExQ3G1QuUbHw8PFookG6pijLk36fHa6nTH",
  "key8": "3GkyR6JxXSTDvpJhFj5Jb3uEPtm81cd6buDwCfhtVH4ehLToVbqzcTaQFU7tTtNTUHHqG6d9Z4wHPERRwxgjQfBT",
  "key9": "3wke3rSA9nhBbzyJTecn91GEHMREGCxURXViGb4ua5G54fmov2HKkzb6ztZV3HvD8JDJsQxNzXLuhnmwbGS82GAb",
  "key10": "3yR2KGtbJEoyRFbMGNCiVD2nRNaLdzSC5QNu6nbNVGDsMfA8cPCJLdVq9M4TQ1kmHAshrpWjTjdAg5LXogrPNarY",
  "key11": "wNndSY7nGkKAcG3Eo1Bj9BsdJB4Ts22BM5cDAkhJYTth2tiJDZNkkNY7zpQTCZqmMJn9DFigJe8Ze41oATn9vmM",
  "key12": "271NyiVakPET5RzkaQtDRTvXvqufoaPcZ5LPn5F3kgrnPZzksaPEEKFu4Guz3pEEscK3iSiuFXLSLQuUmrTwapgi",
  "key13": "4cmRZ9oCHPW8UEk5N8xMsEW4sv6BmAZrqpDBTs178YN72voaiwr3LTFae7opTtpZrJBXCh5HbA96K9PkzAXXwGes",
  "key14": "gwCczdTLwGQsJQxYLMBQmpCK5GHmSTUubgCH5sk6X2vb1UBxXiBQBtohBjZWE6HHe5LxEHBSNH1NKir34yb4TRQ",
  "key15": "SfqR622Yk3ZPKbjTvyDaFfzhuTpyFt68TqLptigYK5fW5mKG9RqxiMN2PUavQ6rfXknuoSiCjDtLwvBTQ8rGcbT",
  "key16": "51yEW6kzrxcZwytHPifDvoqs1Kfkx5wrGt46LYBr5fh5obYehjNTEgFGfN5nastUQnMcvMK3YJDqyvyvx7DH3FT3",
  "key17": "U16QCfNe2MMwqc6yqvtYAEYmi3v5WkZoz1SDGkGKehQwp6iB8HVp6z6hvtMvghVN99tx27FeEhvLnLXuxvXDV32",
  "key18": "45pe6gFdNoKH8QmDdzULZpwZdM6HYLdw3WjAwCTabHDbKjhmHuvpAZkq7DZE5UtUA8zJCEAqFYRbZyW5DdkMn1y6",
  "key19": "j7q9TSmfXVzKcZHsXhnCDTVUPVe4Vb4VxjyNkv65Zt8mqh2TQwuXzqwQELu9zNkuvXNZMAv72x2Cyrus5qpvFSJ",
  "key20": "45UVzjgRLmHmS3s1rVLaS6CmaERvUaXLGkDznigriUMLUmT79D7bfg1WX8bGBjud6kKfJ7i5YgKMBNNNwuNHjHN6",
  "key21": "4m8DQ4QVWArrQyKjJ83h9cD6uiy9de7PhH6tZRKCr8Ekr3o2PKJeTWN2f8inyaj89eHbmjoWVnPsv7MbFABtWLtZ",
  "key22": "2X1mx7KYdte5i2u6EiZw8Jv4mqzQwdseBd77bK5ttvRXe56qdTQy45y9eg4HavECCqGZKXQK5o8yFL8UpZi88pSa",
  "key23": "4ez1EH5NUzMNz3Tsh5BvwNp5RMa8vmohJTAEuCWi35msuAU3TZ8YbYrcMRizE5tWHzpZxrsRt2d5Khkj35LfB5j3",
  "key24": "2MCXwSkBbeEGRAHx9iN7QHgn2C5ymxHEyXkadeQrsNj78XiCUWkmDTVwFzAb6rXJrS7jc2fs7hjtPmU7AqpVL6yk",
  "key25": "hjCjQJkKJK4UVBnuvUodUYmhoD3cJq9L38CMt23BXDvyY9pKvjMRBBUXgN6hFC3rNZUVCSwDM6pQVmDKQzBzHfi",
  "key26": "7Ars1CzfQ3dunAShAf8a5FYvbnsHNmhRHKbrJLcEW8nGz5G1K4jYX4CdcU68KPv1cSGjjw8vkJPEWE8di77sXwm",
  "key27": "3CggcmnY36RdcZiVT8dePS83k3K2hFqXbupJnqRyjWEdxiGSJTVgZy9V4pi1pLve64kpHMwJy8tEJsTyCSvxBRZa",
  "key28": "35YXg9D2nqi1KrpVXZfjbB6fmWfxvC7LnFiJvim96Zp9Hkx5pr42u71Sgjtmf9fgJusjPmRQ7k6zHqsEDMUbUYsN",
  "key29": "5BCW9td1UENJrExePjwK53Wjaa6mcSFBDVpxCMRjAnVkmeNG9i7eVqxCscec7DXAgGYSSUF5ePDpfLhmioUCJPnD",
  "key30": "2RLCLHMNVbqrJRqkHjwqgk9RDFUinYozfMvvWmXaqSdizm99jou99Yim2ozsNDBDRJPJ57LyBKmdRbsMmDqtBi1A",
  "key31": "4obJ1nnBdFCYenx3X2YASGPrr2xmnv6AUrWNmxLTzgVUjpgKefBBZ9SU1Hcq2VT48brXkQwK5bwWVaAr1kKxPvF7",
  "key32": "2y2gFuTAeHhJGUcbMupX9HENaxijoXX7ZTZJCqNgmf4rtmJnrq2YuWzX4yd7ne187jDzhwW3SYwFMCPvQs8PpJoB",
  "key33": "4d2Adr4uTWyU3FKAShiMqp7154UEukkxXg3WouRbFztLvvVAH8UxrKAbw9op3wtT9CXvKNJxvvsebRTae7LoHgs8",
  "key34": "5Gpb5NujAxNhdzNmBPSW9x39Mf532LvCuaD95w6NUFDVJZsUyYdBrAzQnFVtenKuv7DgpgRpYoL6rYrVGyyQKmVv",
  "key35": "gszfzs9csvKB1qcKgrTHk9epfjc38fGgtpwnmcYwswwoGNqy34tTS4k9ohoMzTj7tz8w2vWJAMh2vGLBwMpgpe3",
  "key36": "5mFfuPuY6jV96cGDDqTzrRsZ8NA9xD5DKb2giVRvEaopa6eCt8skkjb6T6TRrfemrAxYcJ7jT1B8edtrzVpSQA5g",
  "key37": "DYmhoqgVonTrkQSeycnwGhXgWLb7t4nYxeG9jcV1fdBrgy5vc8oQvD8ey8vBLdTNqHvpyJ5wkRk8e2CHFViioNR",
  "key38": "5n6dS5uYavX22aKTfMPnQtwTk2TGyC13v8oDv5TgbWwaHNvHKSAJwGrpTMCSwcE8qx6VBSmEfwEjxdUZyLVZRsXA",
  "key39": "5Sw6Zz4Hx8Qi2y9gXuZDuvr9bonF8KiPF1P42iK9QhB95CrtxobhFhSbTDHBk273rsEixDsqnokTZC7T547qYRgF",
  "key40": "5AgzuA4MQm53jdLv8vEdCyJLuKYVRG2VscmhFUC4GRHPBeDTsoReytsR2XVoK8hxW5DcMdVWfJZ9HPRBJHnd9VsK",
  "key41": "4TzMJ1gvgNqBTZf2amBPttD9PUfTt3xmNwcLk3zv4skGQZFabV9vFzqVPuuRasJ3MjwQMUz2giw7pRuHoCfVEPq3",
  "key42": "4PHTfExMfgaP5PFVZ17KNnbX1UXeotxf2RqFGH2QbftMRvqBWWqewGN4ErnHDEPdgBdi4U5qWiPKEkh1nhehZqYW"
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
