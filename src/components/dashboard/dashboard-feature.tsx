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
    "22PdHkop43brYSnr9FfVouQxBGeXnvA6PuxVg5GuKqqsVJTGFYqUx875MvdTmDAw1xnvjoXVEHCxs4RUCHHJ4LnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3EW1QSFo1ZFoqaWHXv7ckrx8pJPNCjzv7YqxTK8H7rZvSEaRMgrEWYobFndxf3s1arMFVy3KMEfi7XxErYcc8q",
  "key1": "4vDByzAMs3qK7P59pteSMys3UHSsyE1urJCHxEGhvEGsoerHmWQtmxQhG4MXfodfwiSG77AvM55qZBHnL3gBXtet",
  "key2": "5DWTQQHKeGkbGhY6URgatF16sJgQU4VKSTDLD563RCYceGx2sy6iGZiCnGBg37YPddyTDYRGVmq6PoBNzAKitxxb",
  "key3": "4SmHa8SCyBoCftUjjbcKK9oh9P6xa356dmKiNauLi8vK7N5obWJ5u61KmPm6qGoqUJgdUeTnbCjbZeQirQRCCvS7",
  "key4": "2K4tRj25WyfLZ5EfwWbBZKP3kYhhFg3xSLXUECBVqY2b999gcD3LMkpWfFmv7cjHFPEs6wmTaMrGQ51FyxByFrFH",
  "key5": "4aUxJci5FTEnNhSruTRKtrVwzoTrVmUGvR7MhPebqNm7pNtq4J6bwBYioKiohZRajv6yHuci6fsQqc7KvoHPtNeG",
  "key6": "3yQhebApUeaHjmEGiKgBk9ufFF1tmWr8hmvwWdLqm8YoZJ5gmQvToYdPTsWdEwGzZSUBsxRNbuXHcQEuzVLKAjK1",
  "key7": "66SrkHA6VHMqsFCvsZEVoqsojAuZLGGAy1eUmr4ue1HXgUrdoxW99ZFcnv3zw6knEvY79LxCJg2VgaiaAAHmWxrt",
  "key8": "4d2eCK36TT3dihoerwXsTk17RSmUeuERnGqkr7KLBBNf29N8LZSaZzqqTsd6ZPFP6C814atZW5CDHLgYtTxSrj1K",
  "key9": "4P9kbjaSQsseZoLCHqSpzEjSZYyAZGYAKb4XzysvAvC7sP7qGFcNUWNZ7XANjmWMYgAovNkNxSPgh3CbEk8mAcav",
  "key10": "551KfpQZNh5QrgWvKa6bnza9PbuSY3n8TUCrDLSt9dVMHtAKkJ6fzZyHw5TuC8C4xEPG94Nb3k2bkuAz2EYCzL8S",
  "key11": "4nQJmkV4PnbvG1PLf8Cn24vmBvQQcPyEz5pA9pR6UM573jGtMbJn6KoVbJG3HXcSN4wmNxez166KVugKt86dU5eS",
  "key12": "3fgbwtKYWTghh2fgyDApaCgN7CYmcpwGJtd6DbtAin1yPnaKFdddyf3E3qiKrrHp1DWNU5Hb8r8PFqcUbHxNaUJ5",
  "key13": "2YL6vCugdKr9SiJncjjvcxeQ83LC26CxaJyArWokWJepsPHMx1NwY15wvbqui9jGE2x2HbFV33LcMdKawKfuGZdq",
  "key14": "4m8ysDmDX6rG7LGvi7chnsUK6hF5mU2B5H1ivymNQxvKLWPBKKJAQ5j5VxkFurhfyKn61D645o3agUPaxP9tcMUG",
  "key15": "5ETd4UJw8dnvbATGcueMesyLWF9sBTm7tE3AtJGFsjWZVkrkXgv9XU65vimjzTMHaRkUFrF8yLPKzifwzDHJqwy4",
  "key16": "2UHtJco64sTK5n7qh1wnPz34y3oTAxMrvbxv1ZEp36jyAw1D5SvCwV5WVTFanwzUmrrMmKfpgWubbWuCMMqHD5JJ",
  "key17": "35sA6EJLnNLSUMvSFiu1JzbHGHGxGVWjZEfZF1fT2c4i9crsqzqfd8QvAVvesLhjk9LUbZ64PRSotFS1cpL2rxp4",
  "key18": "66CobEaj91ukrbYwiZ1DyyfA8R7MF8UgQUmM2NvVkv3QdsuKbHdWaN7uZMghRbsNPaCNLvbxT7F7vx1z6Ea5DrdV",
  "key19": "Wsvven2pgCy78T4yAg7jyp5XBcKUxgFkdLCCaikRjYJbuDzqS8LpRag8L49Z8FcyLjrDyFt9XH7oMw9RHbi7cTR",
  "key20": "gRMmBospBaGLe78k1VqYGMzTaw8QViWsaojZLeQjKdbTxwR4i8d8nLBGeeVnuSdRLrTH5HdLfvr4w3LBQpWiTqm",
  "key21": "wdcPibD185EsfbvRiWc2ZWrF6M7SEXTvcQW9PwUG2BrxmtjY542kNZQkwwfZL9stfa12hi5qrWs63xpNcJurw56",
  "key22": "9sufv6pzQ2bKGaSJ3wc8p7Q285mbCvGkMUg1sjr3J45WqCE4KhpvqNj4535apzrNqe82gd999Xks8iJubjg9AJS",
  "key23": "3UDpuuxz8JQQAdcnVGiohj21L3HB7SFCoUbQJwNeYvLgQo4UJLmeqmB6jgAbL3avGBbzSEgwweEqY4bJ7331dEVT",
  "key24": "326p8La8sZe4aPJ9TLqU5QxhwNiK3CHZ1TPvft8kFpXGiixBPK1PoyubnA8ZAoCURLaYdsK3w8ZhmaPo1QCmXqyL"
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
