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
    "2Nuq9u1woGhzY9AaFD1Z6GSbMHDBUhp1NGR79MeVg7QaCKr9WBE6bV9UuneAJz1Fy4URzHbuogn7apuakVjycjtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EX1w5MZNwtMPjNETKwXKDWjVaK23PwyU1duzrAuJytodbdrfk1WGoCRk3mMyWMEhJQz3M4uyohtgazdESGz1g58",
  "key1": "5AHCfFtUMkSJ737pSK99ZrzY3EK2gRYXfmBtVmnXePsSs4ae52F39VcCbyD8hiqBJaWsZSGFoaFjbdrKfmHtmonY",
  "key2": "3FxFgDabvgusDmvsRP3sJHVtsAkAHipWrDMgKZHVKhkkEo7ufp7z69XKMk2WuHUTSUfp1GzpZiBvmEQG5W1vZwME",
  "key3": "2zk3sL8sjDWhgotLzv29APPtM8mZRr3inYEUXz968ebPdKmQg4VvLdy3XUpdcGhiYPcjCNeEJq1VeVHbYAcS6mrD",
  "key4": "3fWdKym3Myg3CE6R3z7xuzC3bfkemsnscDwimM6KyWm1aUR7pyqAgXyDdqEdrgCJL9nDNNdPqjRz4PySYgYJE18Y",
  "key5": "5iYCnqRUCTJFfcjH875NXHEhzANqJ9YH3dBgdo38V4fACdBMbhjcuWwJohcX9i6rB7xuUk9USAK67GuwD7dZ5QkR",
  "key6": "4Wkb5K5YyhonGK1VUCdS7jBesA6iFPgaqsxq6idTbMbpEy4HMRq3bDV85qKu3S7ucX9VqHzqwG8FwG9prNY7u9w8",
  "key7": "61sNiYyjoQeoXfbCreBaxgbN1gagsVLJZvBqB41i1xwfBaoyGRavk1s9No8i9Xs3gzzeiU24Navum1zM1dn6vVxL",
  "key8": "utcEXY1DAEEtEFN3FEQXR4GjEEbMxWtidG7z7X6MWCEkwZspu9jLrY9FwpioyaJhEX29T2LPJrAMxmmELgSVMmj",
  "key9": "4fNz58dx6Q8CXcfbKHLbLP4QAzhTXa9GbtxBt13PrFMUtAFxHarDvLGtb7PYbxuWb4ErU2ykS3h37FCXoycxcqiw",
  "key10": "2KGKf1DfgUwDAdFY9GF9Y3BWpkrvGtrs9AuuM3tcLa9M6jDqxxvYLzSA9zX82CCZYns4mMxJxvtn4HShNgyAKQRc",
  "key11": "2oDYyvQsiiuEhWrU9e4vq5AmHkeaYASzDvHKe1c2tRpLuMjNUKvz5rwVZ9r3VpXsxe5Vt1fovYA4v9WPu9iJy7a4",
  "key12": "36dQ5vTji45hcsx7z2Kp49xghRwEwZYDCjqUnCFtL7ofevfZ6ntoounsUzmwWwgNfMy9ewVzzFyMfQWb6fwJPm3Z",
  "key13": "3hCfy4kTrdBKcGfgLk4nKN2mYwHWHsz3yfS2PgzCZZ7EpaTT5Chrm7URTme5SkEMzs8zAnjNvzJci4jJKDBozsQQ",
  "key14": "5rFZejmPRwtmcAzqkEwT8UVBzR4ZVDhd8xxK6AYzw6VHgZrqAcuKCRGdehfJjTKobm3JcPeQBQqQMK5TExYMVqJU",
  "key15": "3KqiPRLY8D7sXSniLN4CGkE5dbBSf5E96tkbMRpRiBkT3WYaqctTt8FqgeRnf4DC2FkFk2tLB99guRjpkhHXSiXa",
  "key16": "38MU21QYr5v3vANSmCfeZyDPGapszYc2ECMrjDkW1DDCX7naqqg9xbHKuXwoLDMEdmTgaTfvhJec7ZUu5gqVsrtj",
  "key17": "4TUHkhA62XRpL6Nucf53MuDFwhW9Npdx5Vh1YgjBtmpuALKqCS5kB9BmWQCSEypUY9FuJGPnYGjjAHDacZm8ohsQ",
  "key18": "32SrxYwdC9BxTrnarNTDqHGAh2Z5yhhvdRYQaizw7iPMEyBfBqWvoFH8wCLa3dF1BJZfBcDuyQKpyVfnGypGjpJc",
  "key19": "2EPPwECUYgEag6SqmKwTmsSAxopHKWpMFRHtV4CrybqqqFzLJt5wuWWuanyNAP7gnf59xYrQD9zY5FzQmB976met",
  "key20": "3rLTWMJtwz2FG5q83cxnYEvMSHTxhXDRZy1RyHnzvnTu5yAeoZHw5Nkbb2WDcFABeo6Ksb1Qu2SwWvRW9e3iRW7W",
  "key21": "6234z3BBrsCqNhC3AXKXGiQjpTsR9rx4mBi6tedSEzQrXUTrJ3Kd5CWDbMbvL2uTazJFXuGG8ct7zKnxdtXrHXns",
  "key22": "xCvYK53ZaktpNNsWviefu3Jcdv1yU6RmFDWAz5fLyYQRrkar8hZf7VKEY6cca89y1iHrRfTbpXRXg8xUYV8pAy5",
  "key23": "58wqSmF8KDPsx5Yu3FAa24svU1jRSLL4gzyhQiURCb3mA27a5YTfuc445vNpruzMSHoHEn6fw7tiFxdbWwxd9UX",
  "key24": "5VvpJwjGbUtvHq7DbjbSahcGZ77QpvsPMtqp48gPMkoiym9ErtVJZhK3GvpKGoJc6wDtoG8tepqCSj7DwsegE7Ha",
  "key25": "3ad9s73kTLKyvzfDmTKvUEuj3XHNH8KM2idPENz2u2zTjzRPCA5ThEvmhQm9SrzkJXLrUNtn8VpqdywBP9bFQQQV",
  "key26": "xHUeNM1u9QMGPKCWAmKJ9BSFYPikZ5RiqdC8Yi2iU74zn5cs52goRrgRJ3oEY3HshJbi61uGe2JH5XW65R2pqAr",
  "key27": "2jYokpszr4N9fH55CmnEp3UudbnM1oFYT3sYsc3fu3pNxCqDQRsMNB33LhzjWpkJ11PLVk5Xqk6RcU4qZV6H75nK",
  "key28": "5ECKUUQnrihKj2XdU2ENwhCeaT7M6TsPRuSugzMTVY1xWD5n3ALtTrA87gQLwnaENG1ZTUia4pT2SbjnF26Wa6Fc"
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
