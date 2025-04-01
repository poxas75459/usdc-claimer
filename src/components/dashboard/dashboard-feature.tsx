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
    "2wgwKa2jpfvUa76MK2pxsQ9y4Jk6qSQ2hnNPvrpQXivjS3chKFcV1LupoBENQ4akz6KwXiqYsShdkzbXZ1ccCd7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UbNi9sdBA6D5aC1oSibasr6U7nYHgwrFmFBbCx5s3q3DXjzwxihxYM6trkuDVZLV7dCy8b4BWnzwQoKhfU9Bbj4",
  "key1": "4swTmfiBWG7CHapQjfbaJFxWRBU6TrFUn2v2pDLqNtEFEQWwdfcFsY4MXuoYQMdSatDoVFCGZBhhEx5mA6X9TuMS",
  "key2": "5hrnZ5fWe8PHWPBgWpfCoYoyYsvobkTPmAJZBzhZ7WU94CDKV7mFPKkGdszLNdAFULq7S9L39hqhpPHmobapj4Bu",
  "key3": "43225rx1dGV94iPA4X3nNUX4mLjMEx2awNFW4LYpeYD3faBK5RqTBUsyjSYdEZo3t9RMckz2wFnd38erJ8jfCopC",
  "key4": "22RwSPaJZzHBu5cEoEJRBq6NbBi5fgdnyMWV1GVvzTNpVhhp1cKoY3vKjB858dUGestcgkHCJKBaRQ3KbpZiVNah",
  "key5": "58umdfaS2cQAGUyBMVtos9mTAbpccQeba91P218nwGqPhdkBNSRGhx2xw9bJUe6umrrvrVFGbp4FRdn9yLgvVKB4",
  "key6": "poumrYT6WZiGbYtBV88DY6kZXxLzohXVYFoDWiiDDYsnsjz21FSjfdEpiFmk8gV8ercf2VkJuq1RvatnQr1PFLb",
  "key7": "2cf8vchjuUF5tnxkABLqZYcE7BUiUtxx3z1PiPaa5abRcN75vd3suk9RNzEvFoQzcc79o3vECytedC7iCeBsqQDN",
  "key8": "33kCiNZM2hVHBgjguffit9tteMnqjSupurYBrpu6fVZGjW461DwuD64mV8riCEYs36a46JrAphk89HwfazG378mP",
  "key9": "41FpSddzny3kuPF6kfd3g8Mx3jLKfy6vvB9aE4owqJtswmEfPXzLU283UtfPTApbtx7zS8jvLTfvfbpCbcNT2fYi",
  "key10": "4yoEJnBKfkhWjUCy8YUeHUw4ERUTYWvxQ9xMo5WaLhe5b5upMpc4DR2SHnCQkGp7CjxJLUFCQFV6uoMjGMJ6JxM9",
  "key11": "3LLzD1FTtxJJ1zCMN9kiJZUx39FGv21YRHmedrj7UagavwEZK74sMQCVWuJCSJj1ATNJ2GPhzXhykuPS24vm2CdB",
  "key12": "3Q2HRRpMmQUrAXFjXGXxTxQNDBi6RNramK1meghcBpKgmwae3fPFdPkzsBojvKAAKN9PAazL7ghUTV19iHx9jNdw",
  "key13": "4hJUb45QojXhWqeJ8Qv4ywprx3w1Cu874PPpfMgM1m9GLduC9iKqjHsgKuP4sihmQ89gC6x3YNPqjp69oxF63e4J",
  "key14": "5s1D6VpwF2F5nyeuE5DGHxVaNMv8nVtvdqnaU3R6wAAeBS6ph6sPGaWFNgypazkPJPbRK1hZHuDrUD56ym3itPG3",
  "key15": "2xYXHPrpkPSR4HexAVTZ6Wsws2n7MXsmZFUHERUWnpLEwaaURbPnkU7YTDPs7V9f5rc6bkMVkVvM4DtvLRnY3jSc",
  "key16": "4tbdkgFhuCa9njYiDp6KY6qdSp78cUndpjave4jeLzqge5n22UkXJ1AQrD8RxiU47PvcSnYphhmn9VEfYJRXSHKf",
  "key17": "5iXYHoYZECLXDYLE3hitVMVPfoPZr1ik5QJTapxZKpK18CsFMHnTL3DmvC4wRujWSarxwMeSFXmVWuNnFNGcGDyf",
  "key18": "48MP5b7wURcZgk7ty2RDvx9s5ZDsGEGA4afNQWpUwdgRYw8ypvtGHn3E6Zi9bm3VNbpmNJjLVLEHgX3SzJF6We2p",
  "key19": "4ckFrimhPaNpzhrZXQLyqUgzYopqE9ibyLmKuXcCKXjRiwGxE6zFGJDwirBFz46LBTW1kNShXehaPhBYUGHhkjib",
  "key20": "Dtp4TnxMCaM52pSVEyZRyg1G5Cr5xjfXrG474nLeuKCVJUWE5ZdhUF6dTz9D93uKD5FLdV3wAefx5ov7GvfCUTh",
  "key21": "3jwZYphn9jDMTpdc9RLm1Aaj9nJew7SdkQR2tZwJEJcidhYEHkXqZiV5YVkGGpYXKBAzPpcUVGwy96oGvEJgyX8E",
  "key22": "z4rXxrCDSFu3y94E3ziab7jzbtgNAsu71CYju5HRUY8XUMQwc8YQZhdUEEwuLw9eLDS7Wyzcuo5ejya8gnviaQu",
  "key23": "4MNcqtEEsWXuDY4W5HRPvxwaxB1vd5WUsWnXSTsT1YuawdfWnnpKRLRz9gwYfgeC6Y4h37UUGAazdYFR84X1b8xt",
  "key24": "4o8BdLkzmcqwMp8XwUQKPcQfymjc9FnspdkyHmZagu5w4xRY8kCZmBaLPrT5pdjQRqmELWcHFpeKr2QruEb4Utt9"
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
