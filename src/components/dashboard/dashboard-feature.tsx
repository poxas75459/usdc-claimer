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
    "4MJg2AipTG3WHRcEraDk45jiJWEYfZRyRrwqNgCnEV5ECFTSKZYfiB31KRCb6ToTbpsRFTXEDBx6ojqnK4wZgcby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559fqJuQH6KemrynxeRDeCGferGwpt7B8CFkV6S4TrKANN8BCev5pebsXVXxAb45R4zhTVegkhiDUHajs7NkfWwf",
  "key1": "2XfYMHyQwbnQx2LEouGHpm7LqWyq4ZcDYe1HJf8T5P5bz1MLjPxHHUCdGTAwzJ1Jc6RwLeeyTfucgZ9Li5DHmqiw",
  "key2": "4VHwXUP87RNRQRa24VS7cE1tDHMTAb3rJv8DR2ECELaN4CT3nASPAjVzUX6bE5zSdL5VmDhgXbKAiKiGce6xKpvT",
  "key3": "3bHbJ4A8aYPECPbxpCzLw9ysH4qKrbRzGCfZo9qcxi7rMYdM7dEpV4FHXLsvJgPrwTTzYiVJHucs4FCRTcqNyKpH",
  "key4": "gFpzRaTccSx6Y7rzxe9Qsa6kNeq9nynoLkSAVx1ShqxW78LevmvtTeC4TtTiNGomPBNVdTRBWbT9hrkpPbXNtMH",
  "key5": "5oH9PtiMGfpdWiYzk3rPKCNPZHiBfk6CaFPnHW3z6hnPF5fpAESH2Skt8Sw9xQAwiA26Yyv6ggeNhCSRpSGLZx4F",
  "key6": "8TJaUWRUA7S1tut2te7MDTtvtMVBLg95XvMN1EaW7kZSBGs7pcbDb79dUKGHQG7QMgoJ9urKCt42f4EtqYprUsX",
  "key7": "QxufLSUJmjcZetXjbUe3X2hTiia49sVtEFnR6rn2BwbEgXd6BZitKfhgtbVM9f7C4A9RR4FdCZ9HdEmen1DjHMk",
  "key8": "2cn6smRp3EK48bBZuVMaU24fnqfooq1mEHnBt1kY5ReZeFmjprCfC6Uf93e7RrDDwK9eiH8Z6DW44n3xas2czJsP",
  "key9": "2PWv7nKdC3dEYJchsySu7N2hMWXQ2LrrnWXA2vzfV272ei9YvxSvBkEQqBRxU3Ynph6fo8Qyj3EY2Wk7rdmUheZE",
  "key10": "4ffHEuPgh1CThSY2hcnbnfVmPbTBSxW7etnWhogfWwaxmyu1EMnuj3iVTmJfBt2QraxnR187r5vt9Y16NQuNCbrE",
  "key11": "3dAc84UAiQRVUF2YhwezUv9z6RHFWtH3neJKMBaumhDVNg9AQfvGdWq8BFXRaHJ3yK8UFSuRdAumbuTG6BRmvG9H",
  "key12": "3tYEKfd2Rs3xhVubaYY1FTovYHm7FRQkYD18ka4N5YgV6mhCPx5KwZ9pDqN4976H7GRTVJwFuB1yk8LvkKaEUPAK",
  "key13": "4ovRibrW4cySBnrU49iCnFFKnTiXFs99WzWUaU9zgefT1WcZXTxu6AEoVFQQxJ28BvhMZwxpdWxw8jkcD25LdQTH",
  "key14": "226nXtUjvfTge4rkT3SZaK2Sf22h2pPs9spBJ9vwZws6HAs4twgiezNfVV8Re6sfGgQagYzRDijBHhc994ScCkN6",
  "key15": "3u7taf2FG8is8nncie2wr7XLNL5EF3eqzrdBiQXDvUJAYHYxrrawrfJVjouRk3SwDW74JWoDxd3zNvWQf4uToffm",
  "key16": "5Q2GK1EzSnokyG3pCv973s2nskWV74MtsQdfEAWmsxnPwKYmb4FtXbpn4huZWNJ7qs983nER86p6MpstPGk8TRRc",
  "key17": "4M5DaLPAYC8W63xhJKnK335PBLmCwUFwY6as1EzFuZBMahJdvqkGwweM1t3HemTLyPgdRafic925bZRMLmbmYwKV",
  "key18": "5tfQTdAjN9Jff9oZUn7oDCmjEPAnbYxVRHHE7xwC9tAu7Vud9nLEb89CVyKo8sha3SyLs4nXuj8VNPVtvmBU18iQ",
  "key19": "2cFcmCA9m38WD9tSFsvR45p5iT46H7qUA49cqdrfAsXojjnxkbNdGh5NDnztYBB7DhbrKooYK4iNR8TExQ4TvwW8",
  "key20": "2DBt2FEB1f7cVrpZQ9uhSUMz83z3uPU5qYikRkt8g14hd5nTxuHEgKwzhiavJqh1bJbh6TfJ5H3RYuAv3QjRXmK6",
  "key21": "aDb3ThWzm6SHRPSRcFRYmtEYzAGrB62GbR8EyKrif82WH5Vahu8diMdRJPUMb3Y2uzQUcaPDqCcXhiP274eiWyQ",
  "key22": "2UUJeAsAtSoeKcJymbQ5Beb4TfLQ9jCQN4C6akW1BVfEgqPJ5zjnPumis1iEtNAuv4xEgcrjEmw6iwkeN71cSpva",
  "key23": "2mytnuUkAmnjDXADhEA4BCcZg6Yt9qZtqo8oS9RuSkQEJvC9VNg8At3ZFmU9TQAB22jJmeEKJTVDcgdxgbAXceey",
  "key24": "4BjNNTpfv3kenBRvTmff6zDKKX3XD4yx7jh3kn1WmafENxPGcEfGsxiXdyYD2ENk5k7dMpghzs8Chq8nFgJA4qt4",
  "key25": "57FCuG39ew9VEKFV5wdvnyxsg8vkTJK6GWTftvjoTK3B7sLHauY6Rr59Ryizq6PyDcnKBNFNyBxyspGoonWnXJUo",
  "key26": "2b8KDDJqXWhg9BNKBxLqZSLciY7jK2oeN5VGBP6yDhKA1F99Hn1aKgSXMZyeU3M8mKtsVyU3wdzvZxbGeZ7Tk9dF",
  "key27": "2DFRJzgSgMVHoceX4vTAa5WCGNGVC71wUfaosxZUWJ6cyCuVecuyY4ufcxdWLQJ7hCsfyP5XR4GgByZd28PGBS2X",
  "key28": "62f6tgURb8vpmxKivJxZsUrjM4LXbUKqdGQFVGXh45yivGojc3o4Euw4wbfoyWqWZpQFwdoLeMQxpvH9RtiWk5x9",
  "key29": "5Fpykbqvt1WqazPgDX8k5Ank1z2KLVcdk4U5V8sVbGr2KuuBstSmj4gNvdioTGxvB7u3prY16aDxKnwg5DiseceC",
  "key30": "hwXaB3H1CAsqorY19C3M3dWYCLUu1EHzajzvaRfK42UA4WKQwV1U2df3QyskRenPxBhvoFcrzJYwe1KvmRyS8tM",
  "key31": "KhYtiGFMZUtnYVr5agmnz8ghsMiys8K4uDqfozWyJqu4JrwoS9xVs6PFN1SLdkpyszPKbTUXLwAQvoPMrzD4KND",
  "key32": "2P2gCsqkoUT882ycQ9L4kwrZwt3Qtw6nvgVMGC8u6L8E9hh4tfLUEcD7iRcmoYvDbz3YtvuoniGHERQuNpRedpT",
  "key33": "tPWG7474Y1THxtdm8cgXuGkiNnqu5ARLRCeq5XbVUMjiGSgedguMUuE9A56jhhsCJgXFkyefHzEk9wsTMi3hhoB",
  "key34": "5AQowVyrCeNUjQQ4cEMuYYqKj3xoYSba3WTFFnYsanrthPF7Z6HCUkPXxKqwyUB4XbbgZmqier5DwhZpkVBXVTwR",
  "key35": "2wbVriMZTz3Ub3a9hE55KfkKVnYRYg5xJT1fXxFTYsT5JBgCTa6KMFxw7qYzV9f7wpBoAZZANDASJwFJ1LWAEqww",
  "key36": "3G3PZQKa1EUqTPB9q6HWaQVAVnr851FmcfukeSW4izU9yB6xZrpLon8wsm7ZhMzto7voexZFhmPjzLyrs7QEkodM",
  "key37": "3i9dXDBZN1cJnS4nJDKJVQQBCzAe8zdfDetJFBtc3EY8A4YPbjNkaPQk5us1FRxcAAS3W28XTsX6byVJu1kP81oj",
  "key38": "2bEe6d1uh5Vo5HfYcnEZ5V987phPqTsWaR8Ewh2Gz6VKcaikgA6mYpvRxF6pVYzrxHn6ZbhWpMeSYT3YAeDbu5bT",
  "key39": "2YTmVdnCC9UbasoFGW8MPYCcqFK2tYAm37Yeiab9KpdTF1SodV3gxvPPRuy8bBnD9v5oi8pjVYAv6Qu3PRW48FgR",
  "key40": "129Gp8HvhzU5ajG1Fp1dXu46yXMJ8eRBw7pVccAA4wRgqPZ6nTNDgzbGqxinHCZaRM4naGpY1FKWE3j1w4v4QQ4L",
  "key41": "58jTc9MZdDyZU1CfCj3Ww4doFyitZEbyFBhMs38X9VwL1QVDy7YZnRjQDgj3vVEvFr7uNEUncDCj2x7K4QYfMMfT",
  "key42": "4GYbZp4GWX2KKEuZfMexhnfnSqzv8wXFneKPCbLi4WF2CvmiZBbpFVRWSUEGYRmJ3BcADWEQfg7kSwjPhck9zJ41",
  "key43": "4QSFZ5EaevcKSf2cFkrBGoY3rosY5zaXG5bPhXU2GgXAQYxm7ec5AVSAiVUPXgcPZHhsAx26Rc7LBqWkTGXFV932"
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
