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
    "66d6ELVqNb4AryqyZHQ5RSWuDY4Jkcf6JkXWB4rD5NYBwv2MS8r4U7CZLzZWGLtzDxbAcSUV6JYSEAA2shT1NUE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhTt7Dz4AVUUB2EdXtnYftaADsVhoWnghdxoAT1xozqtg4BPvLT22DyoPiogTGfXzMjyUSwe8RAnhbc17Tqotfm",
  "key1": "2f3652U2Cc6SgQhX41JbkwNpcHnp4AzpWwaqnffcq2mUUXXfVswpeiGX3KHo8P8kdqE42wyKPy3L2foKruqpEook",
  "key2": "5yTsFMbsPY11SpGFMSJBMirt1VVvicgUWPvLKcLGVZRSbfudTn8dpDgVVebx35jiu3TfTnUBZrimFBV6dsjg7Yjm",
  "key3": "3fsF9F1ZGdkQmfBtN1YMSMxQjJMPr3njbe4QnD6s7WJtXimxLzP9B6W9dERLBnP9fkZARZCE1GAkNc1UpwBEEBsJ",
  "key4": "525aNGdzwnakw4yMJSk4HrEfJpytUfeYAg52kBVL42Ja6qrD6zUGHYvvkbkcCvqvR79hQufwXGobXa7DfNfPoK7g",
  "key5": "xqc96nvj7dVzfEmUWeX6BTt85fx9mBGdqbZLY4pyWFzxJMiWksU8jR8SWbzxZ5zPAyJ2YJecxUymqBf7n3yxzFQ",
  "key6": "4p211EX3tfyqMQeirokeEBEGWPxggV6jmGgW6avBdFzHFARFJsCei5mCxyBGpgcRATh12dnV2Gw1WS34sg4W4gQL",
  "key7": "3BdnMPzfDmF3GsScNPGGhhpavF25LwSRDAV7sZHs1r85ULc2EbdQTAbrSd8RnTrYjMvAmd7AtmXUpKXFFgj3EUkk",
  "key8": "2mU3NKUwM6fzErtCbvtdQyHDAP2UffAErzTKCkaNEywZJZp8WNuMdykBVoWExYhR9WCfSARwFDJxv8XkryWqa5XJ",
  "key9": "4HS8uZLSTtor1FoAw5yAupAydsyFgpaq6nHN3LFuUozJtipovvLAskMbcw8zyHyWCAXZKSp5VoWVXCJXDau7r71q",
  "key10": "nTioVMJzhBZBsPrSnXbp3MUNmaSvNG2xodZZ28GYoumdNLBEdJqmB9qd6xExRqWWXzGkYuqXxAMGGqbM4HriQHq",
  "key11": "5UVnnZQyidnDkGdTzWxdgEmUuaumfmWMpDBFvSUNPDWPPvcQVDoWzvJA2AmFoxV5H61VpAcpeAtc54qtoQYF5KuG",
  "key12": "2PfUERntaWHj2hEEFNUCRbV9e1S9jCrRQpRCr4daCzPd2AKnXcGopvY59tRiV2mxmQHYkYHdAxzDprb6JaV9GA72",
  "key13": "2sW8eyowkET2jvu6tBLEJf6Gqxw6EG6bytMGd1qwpr1Fk4VNuPFQRLvbhm4rA18BMZW9UG9kMCx6cZn6W2Ak6G6P",
  "key14": "PBjcgbHTdoDoMLUHvUdy6p7LkpHhAZdPP4qW6bhVPVrPg7tEjG5mNX2S4BpndnpPei9P4ix17n4AB8eZ7ivEeqV",
  "key15": "242Jmq6i8XwPwzgatbDuEqhFBZ9zicNenzdgoFvrLtMiwWwzzYVDoaMb21sXLn3Sny5fCf58HSHKF2dwhut69vga",
  "key16": "4kPZ4LGtBBhm3zCWE9DtDrsaxuQH5gD5eqWkW6sppWNNkNNRpfyemYkAEYbLKtoBVivXj8jQ6aMwJQJGGVQTNnAw",
  "key17": "5XF2zfwFHZvLgfBM39MvCfrPRB3j1Ks86jv5z72dnYJ4QPbxuXESLDPTFFQwpGJQZKp1TNvUPtzzJ2KzjLP4tRdr",
  "key18": "47BKYJYZ2bU5s7pKguCb8EDigvYft6G5szkYa5DB6zUZaQTPzppmYX8Nuy4Zv4wkoKciHpow8MCnyznAQxx6BD1d",
  "key19": "61qYoTcdAvz4GySqkeEm3yTHJyjpTquuPmTgSNCycB7G3C4BK4s863qELHgGM6u5FDLRFjEdpsrxQqbXJguY7JT5",
  "key20": "5CueuhX7moG5iTQodMjLVPUJ73sg2YWgZhbDy5EBBaWqX4pZKyXndVb5SH7oTvRwvevTEeeHJF7AFWAU4WiCpfUU",
  "key21": "5xkLHvF6Ha8VvFjaNcmv4dnSkdshc9gCy5BJBGV7jgB17eSBgCWiqYRaGTzayWe693bdNRmfebwqGgQwcJQgA1Yj",
  "key22": "D8MiSWMsgxmpCafnM9RRm29EmUGX3RiTzUQ1zWotz21MpnQkpTJuENvGNZuphrf8MqohCy4gony9EriK3UPuAMF",
  "key23": "5VFurFp3G53Bhbw7C1cnDwNHe6hLgUpCSz8BnifH17TEfn58AdmvUXkzELe3GKwW4QuNNcommXewC4YZhf1wSxQj",
  "key24": "3C3fsVWAtRPyg3AcrhHvy6dJPqjFeoAYhm4tVnQAtgtt7eShTfZxHNK3o8afjPg9eunStKaiWf8RPsYSyxdLw3gH",
  "key25": "2fZD3bi3ugTg3Xc6TG1rQV3t729ShnuTqizXzfm1PB9C7MNJFgVNyPBoxarNPG7GGNNUsaeg3xvZ6EL174WBRwqW",
  "key26": "uWVJ59dRNfW945Pp6JS79Kyf1i1H3m2DP4DREpk6RmaPNkoamxmFaNni2yPNLrWuKswNobomkPFcCmroUafZeEB",
  "key27": "3RpA2QQzWSW1DLQncxj72qTsSJT99rbFRizpYmVNjvxukMzqJ8ThpckvzjrHwtVF9aNBAUpS9ZPZotZjHGF3VYW5",
  "key28": "9gJCKRN1LVUNp7PAqZbwW1UKCrRtD4XMoQTh8E2o2ATgn6wPX6rF2mktBXyXEMuE1fY4NPcgkGmaTkarcB3SErH",
  "key29": "Wa5amcDerXSQ7SQtsTmXu2mduVWAhaxm3KAGMKka5XUmQWDkjFNoNDsiLp4D1NCEQcPctSe3thMSw1wk1Rvj2XH",
  "key30": "s1pkTMZSNHZXdEnu32nRGbdEnxpKWty7hdGRmT9wg92vnvxLCRoTmT74i8psYRw1RA5nD1djFGxTuazRbUc7EMe",
  "key31": "2ktuPwZL287f95LKKsqaZW3UM8HySc6Vn2hT8WHbFnW7qAe6TDgU3QKTezqqC3ryDcmjZgmM6G2XJ6z4qvkNzWes",
  "key32": "okDYEGxndXPjfrVSz1GBU1nS8ae5z7joini5fAdz3YD1TPkes9QNHknGwQC7N8rTpVb6guQ6zUhmEy5nKx4rGnc",
  "key33": "5FecvdwJhDf13uqik5fZDhDGfLCqKpiFNVUJp13DqFMGG8Vo5hg21zNdxzPcNMAcKTTZb3SBsCCntEfKEoTNHeL",
  "key34": "5ogCGRQedv71Er6ZuCpU7yHZBoS9mD9hmJXD5x8aTcf3aQEGjwbpdrNa5kFZ9dmG7MBqWDJj9A6HHXUr6T652f8S",
  "key35": "3qMLTUJxaQTav8zhT8iKe6FUbPd8iwcuGg4hhH5C5sf4LAuHNckE3Bn4NtQiocksx95LJYCGymedBFDjsvDaNRNZ",
  "key36": "3UtJTY9S3AE5b5z136GdVKq5bdWdTNV1epxfytD332zj2fh8zH6Xh4ps36qMaqVF3EyYXa3FMRSb39vM2R7rYZ25",
  "key37": "3mAHr1iGxQZigMr7Y3CYg886wBb4G22qvu4DpoGSP5ymbx4mskfJjViceTTRsKraconuydhzUToXiPXjR3L77Sdt",
  "key38": "3Yn5zohnNSUzt8EWxYxc7unk9XxCyok9ocQHH8jShhhE236ki4MYUNu1aFikXMUEWHV5GBuS7p6ajSFNbYaSXaxi",
  "key39": "2aXYUHSWULSpYD6ffbB2dPQfrThXSXfvmHgUnvZEvW4GTaiYvcgXy7HHVDvcMV1jMYXEtUKaq18o2AqvYWZ8sMUF",
  "key40": "koumrAxdVypDWo4JYQewHQUwr4nd454FSsquJY7aXqaj2852BsaWGfToHLciPinHYFS5SjaZNn9pGDWcMbPnPZB",
  "key41": "4VsyNRij9trXshwVANop51SVtY1S8w15nt2me1xvM1kpJCiE3v8Wce9DFjqUhtD8qZKxYxe5uCxChD9vZvxpMQ6m",
  "key42": "54zazfbA9FVcjYGPfUskHoC3qH4xKydCNLjS2eNVQk4PxcevX5VvRPxDbwE1ouCqu8p9h4BoRshBMPbgj18nXCE8",
  "key43": "2fFV3dTPB2Hu6xTegU6KoqW5HMuGuLG4VwCU4szK76kKjoR2uzRSwCQqNGBNvqaidNKb6b27CsXnrfdLdTFo5Wcj",
  "key44": "37xZ2srB48QPrvjfJghRagy9Zs367feAXip8gdB1cu7DjXR44YcVmTFwachG1F4aY5rW53sdHt4WRdQvt34aj25V"
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
