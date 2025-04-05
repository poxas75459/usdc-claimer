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
    "4TX73VbQDckfevguZD1jmh5SUWY3aL1B6Mvro8RtpwVmmpoDwiycB9FXn9VEhQ6oihmLdSCeogNjR3rLeefZ1sYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLPuJq9yXEzKNNMm7L2HnhjMdDXHoXGD3LiBVmiYrxZK27eSawLy9hXQoC2LnN223Wq4GH5BkuENoacyhD8YYUN",
  "key1": "4xFGkd2xharXVxde5Q3ahJsv6jTwuPuWzmnhSGHs4Pajip2rpdHPPWBEdZ9vZpnrvWm4bDXrfDrqGGVePe25nKf5",
  "key2": "AkLZMvN4CMEpLeDUes81BS9tqjSbm2nCpcUv2EFCRNpWy9dseqTugCsMGxSC1hRrPFKDXcyDHMK7h6CfNZhiGyr",
  "key3": "4sNqkJwmkaApV6oX3fbpyGt24CLUwCiQgQJwVCGnF35X3SPGcqQRUDXaVuduMnWoj13ifwLNyTxRBuybxycwwYa5",
  "key4": "3UgUgsiXaNHAvUpzbE64AsQn7cT753BGitofUukVJoQcKCxzCM5oxZGvRBJgupDAqe3XEd3b4qbo7CNjyQR5i65p",
  "key5": "4cBKVcvxNLyts53zPbvjLM3FRDfAkeVBggLAP2xcUU8V9ifHNCNHmZ1C47Ler1YiQ7xhSXPjasDX1yosAv5ZCoMB",
  "key6": "2aC3jA4zMaqtK5C4fJSwx5aTEGDXCjNHiVoVa3zYA44nY9rwTE2K7A5oAymf6HMeQr9evYzcAWGJkWavz3EYJxmv",
  "key7": "2Mxjtrks6JShP9z8JSSXwooEnYgiXyKuW9LLxoaUvBBe1LoK4X7Ce1piDd1UU65Hxwra3Cn3Jp84bbxrpp94s2YF",
  "key8": "37DymAXY6V1FW1i4ZeCgfdqaenJkMZ7JMMGJKyhhYuJp1seXZy5hsgvekY8t9Gh39fHoCU9XRBfsteUUGVTcjvN7",
  "key9": "66ZrjK5iqq6UMZKP6FR2wTqH7mzneZCcz7BMBQciZP15mUdTJeDRwnw2NozhxapXKW6Vfu3QyAbvwCLzg3LcJGuA",
  "key10": "2JcCwG2gv7LiQaGLLCpoeVfMV2UVE5ny1bcD9F3hSAbMTWVfX9r1XfamyX9bnmb7jendGcFqiWnPWZzPEvDP54r8",
  "key11": "dXbTQAo772g89LPf55W67ddoD7EDRG7BsTAZYY6Dv6ppXQ2BwRow8iivDa9hULLxNNQnYNHRW2C3MWuJfpxMNXD",
  "key12": "5ApU2BVEUWqqZxWJV5AXdXFC59ua8AtjbKLwRhEgW4B6j2SrvUWNu1wowgqWzsjvc32DMqx2fPS6zoZ5fWBv9Rc9",
  "key13": "3utMSLbUYtYxHEafffPmtrTEgrmoGMbJ7fR3w6XF6eZGrXuDV2MLzhFrwNGfVm7Uizzj4SbJGh9PqXE561MueMMJ",
  "key14": "2kK2pw1KkiMcz2ZW1HG9WCm4RAr5nDkr6rjZ6F3EEBRfAhN2zuuCeE2QbRfgKYpcvX6twGZ7XXGE9xKpZDhaoPEB",
  "key15": "4oCnBem5rxyGTBnVdy1DQRLxGaqCtjD4b4vc1JotN7B9B5Z68vbXP96zRvXxbdoFLRDAKdMMW3CpPjLzH8XHnmZk",
  "key16": "4bb9zDhmcD4YAuzK7QFKCQ2oYjKiuAL8XUhjSGhUBLWff787ktZRVEMwLeZHdw7rZiTW2GzVhjJBAmYXyFUKgAmM",
  "key17": "2DWeGA4w3CgXqoMX5Fwv2CB8FvuJvHTRi8ARUWgueFg6V2zQLZiC3vjTxnfXys7S2VtHaSN1vaDFAuoScr4yrN4x",
  "key18": "43YDELNWL47K5VVGojiKSJhJW5ujZEhzre8xYpMaLyVnE3McYCEvizze1Kth4gpuUSAm9xpfDmYHPPGZ8AMVfALj",
  "key19": "2cSv4GDGhTrFuhBrBZGeHgoHuebPBViWqxZJsKaHhe4nXuA8ADso28U827zLfWxs9keNUW8gayvHNZNAHQQ1Xe6t",
  "key20": "XXJZAbcuGedq48rHzNjPHz4a84ihau4gWm5A8uGCC3XBrPx2nHFaVzrETtHKy15xgWX82C7AssYjc73fgZ92gAY",
  "key21": "2Teg6z6Wz4J9w5KTm4xa6MEygkH4wJjzqDMmBDpKtCBguD4BshBrMJpz6C3TVuuMfL7Dr3kPVTyZCxuN18fWBj8a",
  "key22": "24QwH3GdeCMEDsWwSGWdit7M183SA33FAEEHvZUztgTMZXGAvkNfiChfj5equb7iW4rbcFoEK9upwyTLqat69QzQ",
  "key23": "24CoX9CJyVcv4MxLAbBQnCFTUFP3KvihE6JwjCgwNQLEgk224ZmMLbVwuzhAexCvMiAbRv4riN9mu2MK5V6vhuW2",
  "key24": "3scM1Yp6g55jDQXjWs2hCPLm7XChibiZRHXyoxkjzjuS5anb4acrjo4aL6uymKDTZdsqbKziY65NN8dX6RLo4Ygu",
  "key25": "5KNXwuQ81BchB3iRX2Z9mDdg1U1eCGtUoDT5dkmat9FBNrNkNzioUpPAn9UeNVgtxDqLvXWHaByQFrdsDmABBjcg",
  "key26": "2fvaER5FDAJtH3K74WvxEM7byqmJ8ZrBwmpiJ8kJGv3Kqf4xKDX4nYnvz7UUy9JRJSFohN7GLVELDpb4SZCBTyeR",
  "key27": "V3yVBLCBHj52t7frPzoSC31MTiMbhFQmbuQgi4Jv7asRyrwNnwMcrKa3bxTsKMKpinkrTwpHPktmCcgqnyyV9h7",
  "key28": "5SouEaHpDTKzMH1jPcDyuXobF4Dva223vB1cStqTRykk2nYyuRVhiRpCuBFA4mJjwsQHyJwo98Rvaro2YCP3HCy7",
  "key29": "2y3CBtzWDTMBikPKa93wyuWyS7xCpXXmQ8k3pquTRxuzE2P7xhvhqixXK74myA8dQ6GWGG5ckcZMqizM7gKvLCnQ",
  "key30": "4zxjSzwNECyhRE1YZT4EJiRjrmmdC4X8Y84GYpgi2ZaWAH62JgYWMji5YuDoSk4gGBpG8ncR47g6eNDyboCLsixf",
  "key31": "3RHQT9GHS235c9eAvoLZcDi2oETQ3ubHtZCDEyydS8KD4aAGqZoTmk2QALmH9HkhF3A9UUnZ1ESqnr9U3uWbWWeN",
  "key32": "2LYN6SSbgyLZRukAHxVmJNCiKKN28qJWf8eqj6dhDTT4ZYf4jUyk6hGb8Y5KvBHVFvLo55rRd5WPzprcg9CEkuYq",
  "key33": "4YFoEY1HpbC48YeunukxEFSrdAKEZ95urSUtP4VRmM8ZTDCUDQrV9QYTjHxjRzTnrkhSHNdknmNmyPkgSGoQDBCL",
  "key34": "DLNW1P79ohENb7hpDm9ygvHXCQsuUwjy1iJvXBr4meDaXE1CNWTxtwKXuTCzTXRoWeNcLaBs7q7XP7jWxP8qACs",
  "key35": "5RfRxoeEksJXWc4LP4a83kywcZJGJKgKwrUmtyWQctBY3zJD2rLYfPNRTGND4GPdeFMxPASXRisgSnRBM5bfBg3x",
  "key36": "5gr2HMJSWoSQFSo4W48LtVxpH9tjWXqa1SPzBaAR8eLcFcg6hNiipDjdvDmGzQYTg386rHPFeBkezDfKuHcN5UKF",
  "key37": "5TVNJvuWDfnhpDa2px6Z6KZtpqBy3FAgH3fSfr2eCP572YNcvegk6MwyTAMvRWjW6zCHqxcvAzc4E9EB6kLKxAwq",
  "key38": "36nVxXQ5PFmgCHjjVgaEBoirKDDPsfog1x7veTSazSiZDg8wSmnY73rLZmbDgZKtigcwWoc71SuicJCXC1dFtB1j",
  "key39": "4hw7AxBTMpKS4WuxnsMpHSGnyg5VHd7d5HWDZAyKcckDhVFU2S3mA8GEeNcP8PYipFwi21kHMNzXiGLnwXQhkDak",
  "key40": "3hRGX8GhvT4BnUCcgc1UBWucWJT4xTbh3ycpBhuGCSwWZMnMgBPYULsXeoryzFJMU2qL6mgaYMgaooiRBXjhkvtx",
  "key41": "5BkDNERejiss2oZE9yZw8hBjwgmdXG8xcAVRVmWGE9MQufDdawhtqpPTWHaxTo35UnBQwaM8AgbZTC19kJmCTx1b",
  "key42": "8AuABS6KerKB7wAuTFgwCGvP4WeEZBmxqWooLT7VVesWRXANw2BNAhZMY7t52PDpJhHPcmL9jNX2iqzjegd2XH5",
  "key43": "2Z2bov1TLJfsP4S8oZja4rMuSXFq1Pdi7Cc5NXwRVob9tNc44mYrYv3KYeHcYGxUB6Zs7BNrmpNPfJbLE9RsKB9R",
  "key44": "y24F8SwZxVJJrE5zSQ8aWVEjLELLghWGcM9NS1J5neG4ChmQoAiYhTjN87JxsqEyXUvsZH81zCzTzcFH15eBhL8",
  "key45": "2LufVC5WovFWeN4rS3KBmzviaRzcgWJbtnm2UqzefwEsdyANh7yVt446NCvAp3zfUT1C3srJDb48AULhAgd5C9di",
  "key46": "ayZhuWu51WuofoBjRaVEkgXXsvqKyoEeJwb1UEWRQRm6pxJc3KiBFrk3eJEZ6RawRe9iLx1ME9LJjAvBQk5QZTP"
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
