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
    "2UiavfY2rynCgeZqbj1WYap4DUD6rFaTqPg79jPDMgbJbxyKPBNbPxh1fe19NS3tcTMFkMXvL844rhniLPm9QCR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VkXRdk8KyqFxCnvKn2dVj4SxEff4TDsgZzyrNcT3FB5Bo2PATkHs6aAFHrVqSc8gBUCd9iWAWuJViSR5GULCeb",
  "key1": "5cQGGjnVeAPmqgY8eU9zVTVmTHsBqQ79ssgHS5aBv9YohmVnCcERjeZ1yZg6X7NDJmD6X3uTjYVbqiFbQG3NWWgT",
  "key2": "3btdG8od7r5yZUPBtgqmHDAZA9T5MdQ9KVV5rnJ7Fmmh8uf45Bmfr2UnPERQ1Latkx3Y2ZV88FtbLaf88XrXfvnf",
  "key3": "5n56sE9busiCskuGyWCA8ACTcUHZEuxnnyYvA9rQRVwKmq39HHKgW1B88FSF3p8Ax2czCPhjBQCrodNnuTZ3cRgi",
  "key4": "31GzV6YbF1WWA7F6tokViYEiX5JUFHLfDS2NEgArB1W8gV5fiC7RXRnotQQkQubfpYuKcCHASDcqbubwCTpKCg3",
  "key5": "35kxLzMyabGrTbmtUFmkFx9cCF5Wwpgct3eZqdoBh1KDtY5GttPb8CF8BvZemBLKoSz34HkQXX8VFPLXRGj6sDZe",
  "key6": "44EFVvsTnTejz33oVKCdHfhHbCdqJCoM6yyf2aA6PxzyCo13vaJuiTfU9ycSUpUTJfnCF1zhVWUoPZ1D4LLXfuvj",
  "key7": "2gHGQuEQxWYr7qrQPm2Td2hT2FFN9iCDf46xeHVjm8CbjWvdhY7i5w5XLr1Lfh7pYPCMErakPzDK7E6wZaCZQa7S",
  "key8": "YHTUVpZ1yiFytvgABhoLBssfvGMxJEwHkQvb6cc8Y2vWJHURZFoij3sHfoiqKZLAPYbGAfNe9937ANJd9n84DhL",
  "key9": "67Rh5rupypEdVFcyjcgiNNUUXjyi5h7iQUJDtkS3paTizK6e6hioFGUcWWQHv5DGxTwfVxjDyteNUqnrp4aE2PHK",
  "key10": "5EUKswibckBJFCJy1PXk81iXuxGiYqBRs7JE1gw2kr13W4ZJ1xBRYwLVY6MEYSEsNdv2TUa6MyHmz2YC1xU4APX6",
  "key11": "4wTZBMxYgcopxFaUSrikiRHAUWzw51cGUE2JfrRL1Feq26q7Cra7UHNt6HJqBaiKNEwxFvq5yjXWttcAUy6rDMum",
  "key12": "3FGAixWVXKHaJgaZ1xH6gk78qCsTjK6VtigoVwzwT1zfxBUSeQnopZiMeuWAxHGjtV6ejqREw2KnNXdd6a25k9Du",
  "key13": "3rLTNA4moPC8Q6rStcn1fVD5b664ahdeDCd3u3mVucwS6W774fjV3oZNMvgRgP1RHRpVFuzy4n9uaQP45juNqayz",
  "key14": "3RXH9rXwgMo1jhtEG3V2YbJVK3qSAfKcTejr3wBSRa9EQiHemCjexdBs8c48eiRVLanLvGvK3j9ymtVTEvwkXqGr",
  "key15": "3YP3MRBJ5NN6vyvJmaLoeKgpQJixYmF4du1wnbeBE5HmAV9c4oDnHmwGrHFsPhen7TZuCxQX5nfRAHPvumAW4b34",
  "key16": "2MgeVzxEv5uD8tdqCaBxjtvktFXNfYvaTeZq9jhjkP8mCNTwHXKngUwCMJKGQMGHrqhM65n6ytUCQ7fVU7E8rMzG",
  "key17": "2hfsAgDiAEokRQWR8myxEewVedgshPnctgFvNwRYGdhcjkyiTvtC65qCAdbotFQqeBF2PKF6SDtT9LEUgbvVteFh",
  "key18": "V1fTCrYKnDpchQb3hqDnhXYu8R4wta7iYf3TdoWMNaA8vNNAw6Khk2J5X4muYRDCHE4krNTtHQKfLiGWfTKtx4u",
  "key19": "5QFtrNXdHZuNCHZBYHULUncJhvqBEqBWbsYbWUB9ERvio76tKY5iE9r2UivAwupegedotQKJwYf75bjwtyqmqHiB",
  "key20": "5swFvnnNzuuttQMBXpf3SBEwKTXGuC39Uc2E3NM8prHXJm9RgEjRWziPH4DGFZo6TKXpvFVfowbzswdrUcH74ixy",
  "key21": "5k678dXmh49JFM6XzyLmEodeCyifPqepPEsJTDbvBeLYwHny7puG2ymxmBEHUAdxnCX5GhH4vRHYKMsdpAU8o7F7",
  "key22": "46Mxfu2jocd6aygYFuxTbQmocMEEpzv5fANisVArdEqBbTcjbUpUL2Lzy5ad3XaxWP7GbHKXchtLJd5My3stmUn",
  "key23": "2qvMjSLcbjqKt9PY5sRavDoVYFgJCgvTSpcsrMbsLhKeMVfMUSgcQDNpMu7Rod183me6zCLBk7a9gWinYSFSRhFX",
  "key24": "3bQ7AWbubCywnVpHwNFfon5pTQ1sepTm1CycXauhr8mjkCQY1THVb6VatTrgxnJ7ifu8q4tB7389RTths137tM8Z",
  "key25": "53A8QbUWc7Fw1StB5ksiqnGWmyBKXeWVCznGUuV5oXLBsisEjttw4vWHkv9DYuwhTTh8nWaeYqVseanKcAW6s5Bq",
  "key26": "roft3vgFNjhqpYmk8YCRVxvQJuwQum9r9yeMWxN5BEQa1AyseM5XPHUWoubHZgGgSTRhQAzM6TQXhNeVUhuBM1q",
  "key27": "3jnrD6Y7rAjDjeQeBDkfMmzjQFt93soZrasz7EfeY74spMJzwfDKhEmB1uvivaTHq65naPZkJ1BLLMEKnTfMEMDW",
  "key28": "5AcDdvFYmfLda1ieCVeBw7R6QjhVsNt8PYDcQC2kfwB29cK3ESWDsd6XtoDKCisoaCAxgkLz7MZTN1FkC6Qop7Yt",
  "key29": "ZFSNRRJfgqvVZKxeFYoVezueB46MXaqaewhagYxXDyYSg5iYqxqkHzmfYCVeAKKTCySwXcAie1v6t7CWgDnVx9b",
  "key30": "3TwLy6esVdLypx4FEq3Nbecgj4RohyQy6Lh3DfrYuAndbKaY7eLMYjcc7ysqXJrStBkbobjffZhXZ2j4oMUpCtp",
  "key31": "1m31Ch4WMgEjfURhAbsNLFN9nw5APMKgiAyWnNS1YuXYHRCZ96p7g9bVTf3upmdKiEmJho3P1reviNsYmadoarm"
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
