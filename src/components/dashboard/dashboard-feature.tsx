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
    "qmE7yP3zkapDiBGCiQX3LEr1tgxSMDV3otapDza1eb5LgnTqgNZpf71pVN7h2yPNXfXbhaiSHihDGmHywvWwYBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38CE34txcT8QMDSDtcBZzUKB3vjYkM6rdXxtHYdhHYB8EiXcCD32czzP4ART9smmHyfL7F893M9y8LHcGDHoXyEE",
  "key1": "62iEcwNdYGTshQTAiLeBcVqrM3i3dt7hmyQso4WGUR6KpX5V4YfJWb6m1e5wHc8AU41Jtc1X8tEATtx6BUnLMsxa",
  "key2": "5vQ6MoXRmz5s1mprrLxSXPn475NqPU9SWfngiTTqVSPf7uEMJ5kLLD9L4wC9KA5LzV9nnS5o8mzgTzVkF5RXFogM",
  "key3": "3dvUo4oJgZjfyJKJBkHAAvWUhWPZJyvMTEkm2XAZ6PZeQmVjedJThm473czfDpwMe8ewFeXa7KwZS61KgSvKZS6M",
  "key4": "3Fo296V7Liv86oNDoPiuEK9HKgnf61XkWBLLfWaPDMPeeWyDKJ3qrkx8ZMifA1LWsQzWdx1A9V4eeTUj9YtJbBnb",
  "key5": "7CNuNx8u3LvWkvpsyRmsWAUJ61GW5cmVshPGn7L1t8jffQCffPTpzheJrsznGU3fNP1rqEMbGn7kv8NsJtJQtWj",
  "key6": "kHwVB7VXdNcM7HbFahy7EGck7cC6yCmW9G4BWq74g1thRnQK7j2JRxM6vvaz9VbnaTSek3As4ZambuDN8DpR51t",
  "key7": "gXaK5664JvACMPgredNXEwqH2MRP1X4KQbjNp1zrd6KPu7X2SjYSfXgV2x3Tku4kfHPNmyhSha7QxkhdwNwEAb8",
  "key8": "3PYqnwg3eQD7R2knvrUEH2VkoCLiAcfy7dBGcynj1v3fyknYd46pCjf4SHpBJn6j61HtwbbRsv5EKac6rnMtaBJL",
  "key9": "4Thn8jUD3v3G7JR9WwhJKi9JYfJBqoPiq9QS7hKBrGrmR2rffK3tY4bAQiYAFtcvFJBzDtiFQynkPiMUfCHFBWoM",
  "key10": "3HFzPryMW8rUsZocChRh2LWrQhtQyJzyTZQytJrXLB7Rc5Xu5tiaRdVZ2wb6ASaxYDFcWqFNzQnT38jxTiurGQen",
  "key11": "31R55YhsYV8bwEpCVmAhDEv1MtTpNsYdYYbSdUhv38iPXefCc2NNYz5zCRiSgS3V9mEy9AcF7KRLi7wYbLcSvNb9",
  "key12": "fwVZjqaRi7YKAPbRyZ39nreaC1PsFUmRFvJr2FVo7uN8Lbf7HQHEeA1SCe2KVkLRXXzuH9JkPeghYhbEBNo23Xe",
  "key13": "Tu3hLW8CNgsFi3r6yiTJLHHStRW2tvwVE6SuBJNFWqrDHGWSUULRTgbMqrfTyY67XQfRG1C6Gg2rDYNYCythMvM",
  "key14": "4eKPgpC98fLxe7qECGvSPtQ7oFVFv8EKvZbAQAbPmaNfqnVmHxJdcifs1zcjXgU5ppaGjpkR1n9F6cKyaaegRyDq",
  "key15": "5RufmyW3sueXmsMx2jf9h2bLGdXJu5HqNtcFMKWwHsbdK1CvoKNbgP59Yu3sZCxZrJ2cvpiqVCHju9WfVVWwuKA3",
  "key16": "3oJwKgiNzbybi6EfN9YjAzD3ERivfSWZqwew22rpzCQZCGnW3SfWftYQ53RKEd4b7Fy8QnDnz5QX1yXXrMAhknNP",
  "key17": "3UTKFg227NtKseHatL1XHnb7hvQok8T2Pj1aKKd7FvQ2NvDZNaixjmgu1DmzGonzUeScoVVtUfjk52WpHyWdbrjh",
  "key18": "3FGbLoi7emxmvLx2wmhUwuhiQ3b3jjTiEC7n6NEbcs9Ype6K4tGRJmD8Tefc8ZP9aJdLynSXbmkqdgCVU1MWWuoM",
  "key19": "4EMLXbCB1FsC9k1jpNYLqg7rkz4STTa61UdnoKos2thC4kqyFyfwSgNjHSKjiguXvdxtL6DQWP4KdjGzD5qdDeRT",
  "key20": "4gGdhxjqWCBTPsxgf8fWhcqAAqrMfsx3wfYLPcdjfH2QHXcHjBez1jrFduD5kgx9VN7evEBnxszFyY1CjqYX2FDQ",
  "key21": "2vfQ9UxNN6yGUy7UZd5QjDvQ4HcGnYpSWqywKhvnm413r53HDannqezmKrhphBW516xCGjMSRio7tWmER82m6mzf",
  "key22": "1XHbRLnB2k1HoNQTdaaoTCsanMNDZbbedApqiCHXPff18Yjzvd2Dmcc5R1HeVuf3AXxBytQuYaqoPHhALcUe3Fy",
  "key23": "4LGA5mzGRKpPSDXd9X5r4ZdBLv5aayrJZnAe3ZkRqHmMHdcX6aWcHkzGnvQ4nYCmzPq7USdhznXGJ9QSfJWMy7S6",
  "key24": "3pY1ukdJfsfkSjgZ51NvjvJr97WRZvmetBY2V13MNsnwMfo7aaffKWYyTxDdPSKq8Mird56xGTwCHHSM6LeQZTnr",
  "key25": "3bSzuyKxzxNfJakofAHZ4aEuRdS5a1a1EVWxCJdUgu7mzhLa6EzoFrXGHNrMWpsxgo2wGXqYi6bXvK1KSJJXxaLS",
  "key26": "46F8ea2NpQEThYaznmNcW8gA1QqZeRgyhbi8Ni5T6KAF48zHscyUojioaajQYDSvrsaX1ENTxwTci6X2jUkn5rka",
  "key27": "5Judn7ZBpPGbB7wPXY6cMuSF9NkpVbbdaGSBhZ3jwdUeNbS9Qivvro3pRu7z5CDPYKmGZQSfV2LimrrXjyPFQCgW",
  "key28": "16NjuASTLhzBshuab87nCQju83qjeSqr9uhzPvYinTJ1TYNHtfDW9iT7Xa9Mqmts7btKtb6N7qYwtXLFurXJz9M",
  "key29": "5M9m4U4dTrE4VydNXJ1r78d5uK2TwgBqV2M3vk6dphGExmMwqnvuxWV1MnhqUFyJviX8CHKYk82MhbtTXyfTeWpp",
  "key30": "28iPAm86grr78geur2p6FMDM4eWtSVrTdttMtTwgqCSvmnHJiywW5wmhUFzJkbivqyNiAmHcf7cWHndnzEj4B7Us"
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
