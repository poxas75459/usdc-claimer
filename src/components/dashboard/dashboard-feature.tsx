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
    "2PwVNfyUbLxRiN3Di7xWUHLMmFZqZ6QEarh2sRNw5ZyYpozVjVsgk48Vhv8dqph62C3BEEqa3szm4i6qCpAavy6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TNENHDV4VFufoJFC196tR5UK9ZB3522kzVT9y3jWsYrCTfHoP2tiWPkLj4um1pKEFK2xMSLfKneWeHTBuF4LPB",
  "key1": "2BTCbg3QLnUZgn4SugLhQQtHgByrCmiv36zVemYmd4UzdGzmxwjaaMbtxmHbYmgrrFoMyioMeRL4kyDzcceFPr87",
  "key2": "5uoYMiXMw7aqmrRfXPrJX9MMqEZeubhzHUfSPiKZ4MWj2MhbBY81maH839xw2nMSuudsrn7L1U26ZiUkJoaA6sgc",
  "key3": "5xb2KRQgv7StJ4hCoiB6yKHome9APESMXtnJTdbRT1MAaAE2SL8hs35pqqr4gw45d7GcN3gEYHLyaXaUdnrb2yYg",
  "key4": "3wKeS8ENdyhTNguQbhRdc8WkanPHZznxU994W5RrgCPeVeVqBV652tTtZZUuUUxAtqmdYVCaMjfZGyG5Waou7fta",
  "key5": "59JBdhAwauvUvVwFNSygGLZv312RQpFfdqrF5tTpkUT9xzvr4TD8kfSfihZi5q1MAz6tWd4yamyWFhj3y8ZfsbpD",
  "key6": "9EUT8bF1ecDfkE2vDSvEKFCWsgzVtdK4Bk2SuXeiM6phBBtY5Vrc4qLSyoDmoVQuCLt7DafKexUhjXmTCBKf4rx",
  "key7": "2T2ASDbVRKEuVfEmKDMSXvQiELxWsv94mhYzwXJCPNFgo8ijy74LxHYdGPZJdysesvcN2XrxtXN7nz6u5GDWnwx3",
  "key8": "tyKaZmzjXRjovcR7PF2MEtQfXKqLvxN7gSqF2yjXHDRde7qU3PEtBpiL8Trj7hNx2vaDTwKuuV8vLHgEgnBUCCk",
  "key9": "3dPhQupr3FtLckJNXEZg2hjcMo4nQpqtWPUVfS6DGX2LQGQw2xYrw2b1nebacLK5mQPsgSBEscxcCvg2BV7CBrkD",
  "key10": "5mqsPWxdKkunzsk3GmL76GN6w4UdS1TjBQACe55HjQEQHHQUK9pRvGc7gsmGcdLsVEkg43judS4yQRNqe9MUnLNP",
  "key11": "oGZZMdb7pn1tQ7ZhZQwPYr5E4zYfzViSueSzaz1stoBkikQzZa91EYeDVYzhe7Zajnpv77XWHwutoUvtzXgeHUE",
  "key12": "3GNNKNFGpJSdduGBkVLnnpKF3yigMiYXGyqPKu1WfzGWS7SyqWLDWPL3ddZxoxJv58D9S6vMXqcx9qSc6rQ4Zipe",
  "key13": "2okvM8nY3yRzVEQq4U3tKruZat8pmQJKLAtTYs2ZvGGyNibLhjndKnAjLFCMHbFtqcUtYgwsJUovQ7KXCJvP2JUe",
  "key14": "5gP2oM3SCwZE6b1TYA7KjG1RPnQcScuw8gpS6Q51KTuDAuvoeuCcGnwLXrog3UKZ1P1zoeFoKhu3DBZNfzAtYouG",
  "key15": "G75cnn5Yxkm9UXiAJZuECfps5uB932B38MjHGMgjJwMRt1D6jSg4o2j1mzq2dBXAeqRqjCtfet2fNHBJG1kqSG9",
  "key16": "2bh3GYmn1rqJyoqhQkYbQbKznPmVgQkVg3p8E9DHnmEwnZg3hAUUbmGEPFqbMAS9snhVw2iLDbKBsiHnB3DFcjz6",
  "key17": "2eqNJtyRagqKGMTYuZsNvPVSkrd4RLDdR8i74mesDzYBtKqdoie1rvUuzsvo4j8sBSS5oBA4W5CZDZQ2dvqtKcjg",
  "key18": "3ojfsv2ytdwi1FNMUqMtFfy7e6G9b1NNFDyDrSLVRpJR7hxpeiPybKKj4SJUztyXSbp89MhTBD44bM24srSQnM8k",
  "key19": "3STNvQhkavrFkqSqZAB5KjjqAaN1Hnn94WcFX9fj5R8SEZcYdA1jMQ3pjuotF3tb2fU7oNH47jgkL1WnwWt3A4oD",
  "key20": "3natNTFfEaEdiBj55vY96VY4PEF1YVzA8wnDzHs6rkvCuMjQAzqWZJPRh3LnLx6Qd3d1z6d5vQYtRpPjusmGorxf",
  "key21": "2DEGA9P52Hbd6DsJqroSbiAf5og2v8CvNnaDLgreVs5t61S6gndEo47Vb9Y6XwNJUGxSiU9dPbP7S6w5P59sjEj",
  "key22": "LKB2zh3UTWdHjYze74AgJY2p6dFudGjqqxG6UcWwX37AKgW8dkURWw7vaZQhWhPJG6nYtjg88cxCVnVE6nELtoS",
  "key23": "4Nuf8GkPNp4q6HgPckinmtpBLUkRYBKcLagJPJ2Juz82c5hvmzVZSxmT6fDr92yQLPet9HbvqTpgDVtHQcgbQzJj",
  "key24": "4Y1TQYVvkX2UNXZYP1NGa3UtQGmHFgri4wYe2imtjKeTFu4V645RpWTPpyMFn7HsYsQxuv2aY69Dxs746K2LqGRL",
  "key25": "5eF2w9M7dZmfN2YEM1v2DafLRPKTh4pUnMXr8MDWCaFjmWjZdfGfoM1k9B45q44rYjFSSQeom1SURf57HxZ2SfDe"
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
