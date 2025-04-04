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
    "2rLvTRCnU5NeT133fdVb9EpnQYZuxQv3oWKrPENfNRBTuw7kz4X9mguYf6f4xL1X7ej3iuKYw8RQgHxEKwNejdES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkiNHRv9fEdRTCkfhqBHFX2of8YoB8x5y2eGR2dXBbMYUqTCUgSXRtU9BT6zszB9TeeahqMuGi9uPGjVDQPjEgC",
  "key1": "3GmjfoZwnruYF4Tgo11g4yNL5aPHEt9N9o8L6kaAFG96MBqH6MkNX2LToHoqQSDsa3fGjxFrdyfstjXcRTHztUpA",
  "key2": "RuJ6Q4ZJkWFTnS8uR3tQGfwsTBdtobpKtdycCGRnpnww5PEt5vDzec9y9HjabnLJL2FEw3ahX7W5sNYD2Vf7HhV",
  "key3": "4zAsN2NWSeRYibqr27gEL7A5acqr2yVcCrzZjMwtii672gUjNKobyQRfZSdsSid6k9QiswUAXMzd5fWN53pTsovh",
  "key4": "jtrFz6mTMd3iUPxkcgkKt7BsHsAZ5zaAQa1FnrvhEEJt6dVWBBDKDFo6Pf2nkNgUtjDExVKG3DGSTYT1eg8rRWm",
  "key5": "2pVCDJ5JLbhuMhKB19KjFFuKtNyFMRXwuYENNa2mRsQMfs2yHCWNhBetWcYgs7SxuamB6u37az1hHNi7PLwX5X6F",
  "key6": "5LYdFhy6wzoEYH8iqLJcw8Sjw4Q9ioTCQydrZqebfdBRCKfEXgSHsvDmTfpPTrKHsR6ghQN8ugQL6HKzTXuZZV1L",
  "key7": "LkMswAasuzVy6yR9qaQ9q86gnCtv27m2aoK5y3hm5J8iZEDKC2AjaiYyshZ43hGdXfC7ugchssmJixNxcNuyzj3",
  "key8": "h6VUMDtr6EZ5vxcC7wTN6nTgDViQADaJT8LCrYZeNzyzaiidt9fs1QcgjnsGSsS5Wfcsjzj82TN1rbg5ZSZW796",
  "key9": "3U3ykUow66BJuB2hxX3FJegtEsCroki9sXRp344JJ2MCKceJxR829NLwiZaWgbo481mdUqLk8UqGgDpw7fgue9YK",
  "key10": "4cTc1YytdbnutnD6MWbqHCt69tzMzXoihfwPsXQbY7XAAyUUut1nqharh4GbZDjGZSeTfUy8jQTYqURCeFdHJ5EH",
  "key11": "4d57r8Y6ZnHhPdwLABmU5Z4vr9kQYQAL5fWRsP9DJ3LNyE82xKEs7FeQ9c6Uq9EUmZ529fujhyxYkXkLJQo5G1fA",
  "key12": "2Lm5QfeYi1eyUUWX8TTXQGojWMZs5Q2gBmHmLED2Cg2RBErarXYhDTJXt18v75hVbxjHLR12TztnkussFnYF8qQu",
  "key13": "4Tsh7BD7QSKdF59karRnyjTLdia6do13cWazbkLeGh64SMn3FMYX1sKUGhJyX7ewEWkygthpsyHxgjNkHAS89sSR",
  "key14": "4p6xsCGoXBoWSKNhkmWnkRrCNDXpWtJiVXHddFTfX1f5QLphQUgeVLF2m9Y8Xp87E7VH7hLnCZo6kVxmaRa59e1W",
  "key15": "2abQiKrT9ATJpuJUhi1XE7gQJHxEeZQPAWCvoK4wmUbWMkmzDLNC9ZYi8Swtdjsh9wNZxcUzZdwSZfkFgacbehv7",
  "key16": "CfHcGMyNa3uRhADNsWvVXuExq9UiyYbGhXrKyzShombz3JqmQKxx9917vKWFooBaS488rFwUiQzPxH5e6c5fEMg",
  "key17": "2fuW5eM6YrpbwaZ8VGDr24Sdw5r8jwzuZUCF8K3z2VJEiTrwNdZNCiyaR1GMKkGPverTQZFrPzBegroZELiLNQU8",
  "key18": "4djz8NSx8uyKukjJghMirnf2tyGZVmh4FABLB2XyXonQiLkUEF4SyekrEEjVt8JPDygbKwV3preNFRvU3Jp8dTSW",
  "key19": "3sUak9xvq3CuuX7j9vzcGtPTYM6XJQs38ACyJpYwnVkahdnTAJA6yi8j1gD7hXqTjXvEU54fXBi1omJTnGr3m4MD",
  "key20": "4XzGJA5LNCmwmFCgjX9mVo9Ggjf5kcAEiPTLFa7vR5E9M14gX8fWqQTzUfECUz6FaiNybPJmEZiYcgEr5Nc8KmgW",
  "key21": "LuRkYxVfnQrHibN6hZnqCCBGpK3tLvEmaeTYiGpPwz6xLYzMkYP5TUPEv64vbb7rYMhBYtFbcgmc4ZD5MK4TneG",
  "key22": "4nyxkadCuKabp7Kd61FH4pHwVzXGQcFr67k4spnt8e2BQ6D9p4L8nDLGrHBhe9mkgKpRtEAFurtX8oqPhA3c2CRy",
  "key23": "cGHHVbQMnFhaFMJuctVGpKPtoopoCEozf6XybyM59tQLKLLipnDYwS35BmuYDqmkFvvcudiPS1FwqX2sWkACPuh",
  "key24": "2YmePSbKbk2dTBFn3YmMpHdUAw5bfSw66Pee4ZMXssUrH46TZZp5tnPFnTNUJXfjXR3UEfvcge9ZPh2bh9sGiui3",
  "key25": "5p7mCbxmsjbQbMghJWMQCMBmUNMfGyLiq7mMAq7FCXhKMggTEcMdpn66cnxMdZ5RDUD7mWzJq1doaSn4ceycCQrQ",
  "key26": "LoRTnaXNXtHPp4GME3yK2q8n6vxJ2sN7YtfB5BfCjfSPdsSuUgxdJr2qhndy6T2RCHUeE2Xi9ioSYrRNaZX6NK2",
  "key27": "3XmWUSYHCteM8fZU5Z4Ek9Ad5Kq827TsnYfsy8rurAPoQ9HYLoSb1rjtVvBt2sdsTc5qwdaYQbLNi4A7ZBpMmNq3",
  "key28": "5mxrdkFitvPzyQH1SP3w9jTCmntEPtTeNMnGfjvRUGTrcfmmc6MFqbktueZoTPEy2UhzvX8Efhajxs1TPBUnWNu7",
  "key29": "5h16wmCp69QKc7miWkU9tf9fh5bWSteu1CdBVb9j28x5PJG4LbriGL4QsPPKP69cPetrL48u36HXcsJvwuSzMJMQ",
  "key30": "2YD9YG9TFcXcFk4cy9VTBB9iy2ktikrGuTBxNm9RVca5ExJve8FYZg1H8N5Ni2czQtDrP78xacauFxq1DMniLCH3",
  "key31": "2Wfci4a8dspfKdNA7rMstFDMGT8FFjbQEWRdQSf64xmzXLScG2tbktZUX8G69oZCo82WAKxWayaicQgQ7XaHGP5j",
  "key32": "4keLH8r3rNBAWCWnKWBf5CFhpViYvf91Ep8tabQcmTPr3Xx5uQCLLEaFLxrVt4JnzKVCD4LQkHeFbquLuC9JPr1n",
  "key33": "22pe5vGv2Eofmbh2eYAQYxNpTtZvHkYwmNpYxGdE36ZZyRQkxAiFYqQ7EpjvkT5jDPNZmPmydiqZpX1gszU2Rvug",
  "key34": "458mA5qkF1RcJRP32dnNQMfRkUvESnykiyUUiQkkrNUTzzzAANbQ3AaKyF2UhzfjuoWkSjzYxbwq7DXdkA56sCtN"
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
