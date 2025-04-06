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
    "4kK1rbtjfC6unREt3ekW7kqeypDPDzFZAUJW7BhemsbnkVgxtuV1pkbKdvqEg5558nc3bN4rStnH1k2KCRRhJ5DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWa9zFQHEfN9B3ajPNaQ6ARcyKmVp8LYNB74rVQiND2psyryZKG745WHCFwL8jhVMW4KqPWgtYPVAVi2jxYcmt3",
  "key1": "2sUzCnUMVe3qUkF1EsBgXTQQY2moNkfekBbr39fYMVfLt5XzQTUjvAADsCP8MFRhwpEGHaYk39W9hjyw1hK1mC8v",
  "key2": "3geeCUX17mo5ty8RKP7qALzdxJmfBZZkYvjjubxANwYGs7ssQFSkMCEEXQ68Rp16o4zpQvaSscCnbR8qSXnPeokR",
  "key3": "3sYGiNhLzYcTMFzG34BDzZqwRWZimnbVWmipipPy5BNn81gh8xxQ6tWmmEe5zGf5yPUVCVxADpx75gVsyc697Gwp",
  "key4": "2Soe5Qx6jYydRq4PJjXfjZuW9yN9MyAA8AsmwxBNB5QCfV2vEc4p64jFzd4oTGyBiTScgBRFv5pW7c2XnU2Qobje",
  "key5": "4rE4mY3AXsMPqEZdFeBJoxdDTLHefK2jBwGAcQ7kAT7QPfkapqoU2HT1gfwkVJXzcRDgNTpYqcvyuceJD2tKwL7E",
  "key6": "3iWRSBL3Xwd6eSzuNVRkjcEptc8bjzqg5eVMPa16s5QdNAHhBCJS62yHwm8DhZrGWNNKVVpKrm5DYq7ScHpHFokR",
  "key7": "4Aut4AAzwRRsh2wtnTpdKvJostCAUiq88f8YBtcMBqWEPz5VYDvGqFYa93aNCvX3ZZpzpt8s9oRQkasBrpTZpBe3",
  "key8": "34qk65G2v7EdvRi6wnzt93f9uHLajGYrmqXrXTUedgzEYVJcf96UcETmHNVpALk52rivhcBwxM3cf9bEYbgmcE9R",
  "key9": "5uMVZgSR4qdQdfnkhE4FaaPg6e7CNLNtngkHgvCXVWnhR8um47MgjhT622LamLdfp9o6apkfcgD1ut6Sk1jPuYm4",
  "key10": "yN8aiqRYsrLXGwbDrf63Na41ri4PDD3Us5hH747N1ZYUHtGYiHMNN28CEoLNtLywcwosnkYa3t84ZJGxHdDdXAn",
  "key11": "4mjKc1kqxuqVupBtorVMtnDJYJQL9SZJ28TCjjRuPwR5eQY6Uu5sAq1FDPkBvSthMTtsMEuGRbX4xHbGrZqVCggC",
  "key12": "2FaNiZQ3Mo3hrjYDd6jSZ8XKC9Wd2nZpyDbRBzS82TRmcXm6BV94bXQcrokBUgScwtu4xLzBEnNfhXT3G9mVaaiA",
  "key13": "5fKWerXYrutQidNNahsFGiykfDUxHMnYSLG9kyyyjN16b4Gh47EdM93cPrtvD3x4NEx92fz1mT4sUx3jYhcYfBCx",
  "key14": "fvP9D3VRaqtdSr73KYQYmnHcZQRcuYspcHrSnzQptvDiR5ZLQ6av5TkEDzcGrYPmuYABH6cb4Ztr2n7n2w1Kjcz",
  "key15": "2a2C1YBGM2Jqq6WdUCjTRZ52ewLrb67PdzJLBoT2X8wveaqAWi2E6MnyeXDeJJyCfwhjohzoZgsGLZ5hQ65pzRL9",
  "key16": "fAAQZDqGB25bPZaAoBrv8qsVraXWaSjEr3F4rrEUkywCZYxNnfW3gjuHv6hrKR1NQu2dipDB62iEDbTRBXZFXG2",
  "key17": "XFS5kum9SkFej8r6rbUSDiNZ946eUd3bpz18wyvLwbQrtabt1zx8Kb2CmJmggD4AbvYYM323rs3U2XRmSZfCd1b",
  "key18": "2MsDtMuWD4x3Na3YQBc9j6Ujaq8K8AGZbkiEzWX445zTgTfJbwPKmcy7qdo5LKD7XqLKDcr8hEFb99h5DqtzQvYw",
  "key19": "9a5fYJCMCPBcEDEJvA9hJd8sJFRCDuGfHEyN3kUAwYCr6aTZqA8SX1MLum8prWxKC4YBXiznm4fdf6DhSFEPE5L",
  "key20": "NdSEdCYfwbrZAUrd9MpETWke4vQCoAT3DyziA2uzmyPE2AMnA2kZrgprthF7TTtyo4QDQbjLhhBMBH7Wz6oGyqc",
  "key21": "8fbcJme5qdnoJUGCD6qbv7Vyt4RPxq3FMWaPWJqKk3sXbSSzGjseop5bsf31GunXGAo6orRUHrNSKt5uts1jN8U",
  "key22": "36m9hfcvor8ncYBFCfM8596BrzAVqY7HjUiddLAJwrL2TwB2DqdPpbQw6NT3ATrY1N5ifUMFSwRNRwfrx5FD5DXG",
  "key23": "5WMRqRnnJ18xVT8dw4R1BYnfSF1oCPMVWunvLgYkkND7sS34uQgLKQB27oTgFXq7qrh94XWFmFCj6c4LUZTC7M5f",
  "key24": "2ad37DYiRqiGXzVkRnk393xf6N7mbKYLCXRFXwnFcgsd4Juk2DHiw2nAXp17QNBNvsPpFKdXY5CL7y781H99CZXW",
  "key25": "xWz1AcT2angrbpeKPTHmvQMvpfxbdaQMdHuJwi9Mm6NJD73hFpLAuV7rcbrUpochAp459cYKU7tvuDWrtq9yyjX",
  "key26": "5zPGeDxbW5wrdBNx3ycazomcfLS3aH9W5YT1EHipDBShJYpVzVDpY85CPuzEee7qSzgWNVuBgiuQH85KnFfNUyyd",
  "key27": "3WkAfN5is55WfbYXTwMYiByDMde4PHkHHXiDKPdEyv571cmD3omFnRJzpHyTvrTEEZqPr87knRsuzSDFsmdEiHWE",
  "key28": "3xoSgmWtnLmhhmhn5A2YY8BjpxxTp1MuygVpuNDGoXLgvSTHNUMUHrJhDWRPi95RURzEGbNmcDfkyT8fkCUuqiM1",
  "key29": "4pn8aupVNKAQ9xQFLJNUdRqgLcLQV8Zsm5JJS8eAAnfJwkJ3w51hrJg6V3gTRxz2Hc9FYJ452RHHLB8cqgW7KznN",
  "key30": "2gJ8Gs6J7mycZuZFbwYiiTZbxvB3jPawWNhws2Mnogmy9oAaeUm9GhLnBAf9D9hkpPkxmMqfqqMH55Gai1Z1zXH7",
  "key31": "XjVT2tZxnwzUTBhjKhWCLWef9d1VBKwCbptT9r99w8fhomreUTtJgex3oYfguTtutdc75Eiiia9UFFubDZbBPkG"
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
