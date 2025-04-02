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
    "3gDUkCw4GdQtwXjz5PqU8pbUvBHQTg5T5hGW1ztJCoxjUorUhvX898yzaybDub6qfa7mbvopdjdyAkAbTAo75bF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZiM2G979qFuxKCZfTVLzVg3ENfhCaHCKAr3btmx7DJiekYB44gPqqRWtfaVtWwodsNqrdNADbxkrbNiErmEDeL",
  "key1": "2jqnTSHZWxBayRrBuhuiemDaEA8MqGDiMPsa42e1tfh7prqWoVDo7uZEsNJpLpVMUhc9HERGdBPtfFmqZhU1Mi2f",
  "key2": "5zCq8cgjXpMUk2RoNGtKp8vDWdvxuiJ9M1fUR5dWvfME6qpuTrfzbwwQ1rKJYDcADy72g6x3F7pagwDZt9Jym9d4",
  "key3": "582EUenJNvaMY7oMHxAg5z93f7KiS5qaaxXDjCiyJWY9sZV3CMVvSb9dcq2qWRjTEaS1sXAQvbEJefEvg4jLJhXH",
  "key4": "3NnS92r31iW4wg7fkGteCpDzqBPjLDMmisVNhSTtXagmY3GoSL1bzpfyc6zbBTxQgk4jNDrirPKXCnWsuAL2yu9t",
  "key5": "fg6z9Kyo4rxrPtECtnEf3w5QETfDBhgPE61rHQuvNunmg9xqSnRRv27CWoXB3hKD8iaACZ1mfd35UjMsZR9ppY1",
  "key6": "5vDXx83AsLcQ9AQum4oQmm9WmmYHqb2UXJjcbtAsdA1FVo2hut9ChgdxwukSBCQQyzezy2zKLaUmJfYo5RMqqfbH",
  "key7": "2vLdCkXw2xEKYT23o26GDCum2UxkyDDqQmGzXfuuGbVebKeFTMqmTLCdtgMz2rMVsPm8UXsjuD6DZ1Pi9f84uake",
  "key8": "CToxu2hk7m3eyjNfMvatzoe52wrFuKoSDEnvZ4bio4d34ooxWQJtPVTCZvwZnE6EvENDMRqhAdNMmQ9ZUgY1DeF",
  "key9": "2Q2RPnftaSwqzyZ2Wr15rHaPXV73txm1BsuH41JrPgXgVvKYjvSHsB5SaZ8PHNqMXGB9MYjKCHioPv2nKWhdMowZ",
  "key10": "5nJMQYJDbRtuHNWNKdeLeDSovKYjFRn1uySDgMiRyMMxCsz1AQjSqBnCJkzTGs1qJf2FXMDQrzXVNhsrQYuCkRjA",
  "key11": "3ZUzT2hiQ7zD5ujHJ8PMpRhDfEgie6T5T1q6uZPCP8aG5RCMGRqw6jkutQoZWdPozdMpRN5ciA2k4qXw38uVUMKZ",
  "key12": "3aiiWhS16FvajYCET62H5xqVMmuzLzrGEr7xSqwG7FsXtxv2azy6BGvJETaJy4us9yWE5ia5FYCUumpryCAHTqyr",
  "key13": "32wEfSS6gS5na9Kqt5qfq2sDh6KspWG6wE8F2A8iyMo7t9t5i8FWmzSTFYZJLU3qnhKmYg1AuxknDR5rrWJWYHC",
  "key14": "3gHop1ymxTP3Pdnwe1WaPCGZLUB5iVr4hfdymR5GHtKVmYPXEq8ishB3NAfhpDanmCvZUjRrf4FhuzbJzDbxwoDc",
  "key15": "55e3aKPF4QG9TyVd3bSat12QXkCmEwaEHu5vwoNJnfzzdor3h5Xi7v6835e8JvLP49ZubTp8D8q97isCswQD7GDQ",
  "key16": "3FTdeg85PMsMhXRgJNXd5CGj25KZqpeKhe6JHmWQNhTPFQ6J65uiZyzncRKmnV84rQY57MpbSEQeKJCmtjeyoCSH",
  "key17": "2Lf348YcQsskbk1eBFnEXUMPrtSHWmmSGSGuGt1hRcSyAYyWJdz1VbWgP4nNCcDTUcfG25XvX6xtD84cCvojMcWA",
  "key18": "NP1YscF1ACn6gK21L22CmXrKL4CcUSQHZDmHPhLSkApeJ9ac1HzfAtKg8t9VxY6rrAF3Ta9CfxNqmmTzF6XSXEp",
  "key19": "4EzraNELqk2brDbTTCguXJiK6JmdQb37SYceMAhNgTSnQ1NRJUqX85mYvt9Jgy3fuBuDuPr1moMyvs7z6kWr1YWx",
  "key20": "4kLRNitaEWGBMSzgTaghtgJ1sq5yDcXGrrUu48s1FiuUQqJZv3mrqCcSnT86Q7X4hr9Q8Jxb2Tb8pPjoReSsRWLJ",
  "key21": "5esNfFK4H9eUBSa78nGTYjNT3rtbv6JQ3YsXiHDk8DH7dhTKj7fb4YxnXoWFeM9XGQfVZzav7UGKJQg1ashNjwYD",
  "key22": "4NgbMCoU4Pqh6WjW6uNFCX8ZWCPZtQZsvCP3gMyVjG1jgoHfgmpHFmPrm66JVyjtHLJtT7uMyTjDgJBLPTYkAGHS",
  "key23": "32FZy3SjkZcFti9tnjFFwpDoVzmag62ow9TYryR3egrgGUtCQ1BryYFdA6nbG25cFKTTbpGZcPFkRNxkd4dvebwm",
  "key24": "5f1bnHaLP1NhDjJNVpFoZx3KDLtmbrKWJX17TM2z6KJoagtbQDbY9FncZ6HNfPCCLmnHezFFjrnCzrqTbqSiruZi",
  "key25": "iiewfuFKGjUHBrLjKhF314MEASQAGBF6T7zq7AdYhMAEncTNL8nQvNWpMJgmxMZg92JxmLbXDcfcXcDjHcBSRbw",
  "key26": "63z16SzgQHL8op3zvBRYxA2WVju4NxwABBrm4o7do9emu4QxuCFSJjdS9ys5b77AjMpjrb4axEasKJY8pF6TJNq5",
  "key27": "5EosNZ1quQGeAKbwP4hPBw6CoemM6EkvNPJKDJaVj44PpVnBkeJsEQqEx4ynjU2vGG9TZEKL8VJuYZGXuffNB8Dy",
  "key28": "3ceHkXhQkLNui7YrXSgbuUjEgekH39jgGEwnf6godA73cPGBhfSg4ngDSe741HYWz7zgwnJHyehPBoG9Q8hU3SGg",
  "key29": "3vE6Jzr8knVhbuYrhmfMB3ekjiCAn8LiTDUdcrWco3iFR83ChcsU2pVqU47e8ccc59GeEQ1JpXP8ChAgwWYebEgq",
  "key30": "7Z6eXkbBRidwq5kr1pv12UKfzGfciyQebYS4VSFBhZGF1ysUtycUa41kLrXLmJzbSTA3f2AUA6qrkjxCSzqKgyq",
  "key31": "2MdEXgndBcwLnUK52gWSBZsmPsCpraWMij7yPqjsi1vQx4L2cCkmHB19Bpf7fiA7CiipfYmxjpoUAqTtMgyDWsD4",
  "key32": "3UDLtvVuTbc4kJWPQNStf4UP4ikQRxHJUd6fDjmHnbTmZgehnXAW3iZgcyzcft1Ku3hXnYFeVQAPMGjU8s9yHbSY",
  "key33": "tZUcv8GEYE8W2wSAx7U9CTJQaJAR3VQPFYpbEVKE367A4oteMrZWTyQTynCoiAqHYhsKRN9wSfysNKtUH8sUW2c",
  "key34": "2neEWStYWvKHcnbcd3cS3jesGzcV3rSTyVixtWcECRWuJG3HEczwC59b1LG7i8c1DSy3DR4LG3JtEn5ewEw9dsEq",
  "key35": "4bQE3JL388dAqwC3HVN26wQjvSAKD3BGWf8WGbBjFABTViYK7oxLpRjQwGLJW6swdPsE6xUGAxbtHw7sTDeSWA5w",
  "key36": "2M8qhTrvqT9bLE327XHQaaa8WnT3mJLPspgscJYix1cpV4SAmQYjWP9tRwNhFvArXse9nNH353ysLKzkcUDmk8Jr",
  "key37": "2qxHvkNFsSfQ88MUoz4SAwKKeCGM38mHXeQNTnhVBcECnJBJV5Rf9ZtnVseiKw2fYMDk1RcKopLAXTEBQfmJtnuu",
  "key38": "2bGHa3Pcc17NpvpLr4HTHuYADfsnbJk8MeuQMu7jXWzi5H1mThZAs4QzcC9KCQpoXgKZZNHZPiWgFvqAgqm116xU",
  "key39": "3oBbXdfQs4Jaue7QNv1RmV7UnAy3xLAE5VbCNV7NEav5vADjwkZtBdJ3KjY7ncWRtWVWaBTvB1tC1RpeWJhr21KB"
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
