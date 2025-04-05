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
    "5YrYmjjnMdB8ocq6ekhzuekiRm72hvL4yUb44wtDwxsgNXrd7egdHNf8sZMMwoeZK7puiQoWxZ9qSud5HCw3pK6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zp1THYiUJSxL1M3iQyQMw3qVVVYbSWmJFVF24XgZM2MSuQG9eyS3iEB9XuoPedBrPG2rRE4Xsvr8S6hDWJLMSue",
  "key1": "3FnauaLrmyMFLLUQpqLbi9fANion39z24ze6bDhcBh8rs3jdyY7xCNj8KLAFPx1hUFGy81w3fe6aa4KYx5R8xW8q",
  "key2": "2MdiJdZH4j1aTxkLDS18rZYCSvP9roW9VTZ5mB9fiLNDXvEJFDEjC6TseApY453V3FcG4tQva2NjUrWNccBYXvTX",
  "key3": "5sDRh6D86uVovYj2z68D5cB3vUUqvrngDe8V4NXinbKGFcfHWNz54jWn2R7KAR5tNWPLp8VvQ6LqEBQxyatdt7pk",
  "key4": "5eVdH8JWuAfDkzTkzBnb1UQNH3TkXZPEwadyTCTF6Rms9hQFP86mKWA5riqJQBzfdabBaWkaD5zRBJ1W9zB8GNJd",
  "key5": "5czEK51hWnH8QMkYafD1KgGtWc7YF6BiUGuw3od5yK8x8rvFq7Gy7BnBEpJy7naZhfM436xPzS35poBA7sJrx1Hi",
  "key6": "5R8eN6Qf5RdzqMT4P9SHK1jPUrUZzU6aq1tboCRnCoSjo41doUWAYo8t2SokYUmrdqu8ZyXRBHauntmKSkmjh6Z",
  "key7": "3jicdRvKH5V8S7xRr6GgaeB24YCRpMAQ5GehQSS2pb5ZnwcF3hJj78PHwF1QuE7pdCNEss28JbmGtQpienaR1jD6",
  "key8": "2a1oqQZLrUz22RrWHZfpkqzMVwqiaUNeHjKbLH2okkjiG7aPFBgfem8Qqt2umt3XT2mMGUDXVnj9rqE1oFLYM9xT",
  "key9": "3eKxzvMth1D5jZR9qoPmsk87AXgjGPhwPuJ3Kt158QREdYVtNp8PaNbh6bRJUUq4yqwQTR7cAHQTzqcgkFJrHtA8",
  "key10": "xp13sBNKmm2hMFsG9Zhc1L9Vxws1zEr3dm9ynL9SPxG6b2NthfS2ZEPtCSVDJDNjXV257eipGw43ayJ2xTRvKW5",
  "key11": "2XRWZZPLCA9y3priu7A1zoeaCPxjpeXQ3KTVagNjWoQKCoycjaLVbdxmeAvjhnwEwteByEZ472opMNvhnhdqac2J",
  "key12": "3pbcsLEQtru2fgk55RLBSsWGxKHgg1p69UksgDNdBZHc8WXfjnKPpzYbAw5B8jMHWxgenjVemj8jUpuknH8QAc5T",
  "key13": "42YwukGfXAjcQ58nyZ3hxyz3Dvj6Cf7s2cnStzekeUMsL3aCCxj9s3MzjKGFBbyFhC5HoqiA5zu1xyMgdnTjcz3K",
  "key14": "5YN8vm5o2h7bYCvd43k79G6qnb8i15RBsZYnh3ESgofUaFZbk7MgExZoXhe8XJVuA1gohHRBcTWimxySrpnWdNxb",
  "key15": "3H3uvZ5QyWW28D7Cybjvi1hYZFuj7n7pRAdHFVm1NjjhZbHd9qNfJfxvUEmiWtWESEdMukSgwXGkbhdNbCnPvhNw",
  "key16": "2A6Babm7wFYGQotvRXcFRKUq75CiMSL55VNavubQSh5VBhmRxyi7vMEXBpNR4De2gtszS6a6yUdbs4aPhY4Ho2CY",
  "key17": "2j387fZMEzSHDodpnJ8LMQbscoRqr2MgWjEeQhptkYmxKZswxeNYx3Fs2hre64iDLBmmXowhpkRkVnLmdShE4GfS",
  "key18": "64iJqyAW3QtRGszVuwcWKryyiMkMgf3cf8Bvi3QzDqPWy31tyX85pi8WbU5MLMxtfe48F1pbH8FiKqpcPboSGGho",
  "key19": "3hxrrUk3GcjnWCANxmWuvuUw9RK2UpCkmBMRRVhZrQRPNGScUaJM9upyzbqph3RaMtdzTPrqJKBKevfUDjftrMKA",
  "key20": "55vaxmN9AgsrPTXt1H8F7w73mjrRKj2c2dChkBMQcn7MSMTNEGzotWZp7XgmdJo8kagnHXH7V6jc1snfaz3TG8FE",
  "key21": "5RQwtwSnkGjx2xdasocTPrMmnJYLy9Y8CnekiZnurDAetzU7UQXakZZrDwk96TsmnZBKzsPVcrRU32oVjbHJRTBu",
  "key22": "3MJYyNuGujdB4WNsML2p3nbckyquKy1NTVFxhVxnAw7E77JrKYtXkEiFz3J944EmKA9i4ASYpfx4MiRQ9Bkj69h9",
  "key23": "5nBeeQ3g8g3puFLX4ydXHc9bEUcfzaq91KrUtjgu3GbQA7dS6NTGGQFk6XPUadNJgLXKnQ2fs4QYtoVNNg4AYUzH",
  "key24": "5DaX8kQXeDoHwi18KWT9NXrncZDZ1NpybvzZtLRPbNcj2ZwWmMDFgADZ8S9F5BCw773c8B64ekjQQhF75E5hpueX"
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
