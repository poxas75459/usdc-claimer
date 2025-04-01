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
    "5WJbFzkwfzo2MWspMr4JAocZtT6dpQkERJUG16kaUcEYWiE4J3R3ffLq87yXNiQ4o6CwQF9i7k9sE33NvafE473T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bn4yCfqnFnEM3D4AP34C1dvZSf2ERE1aZQFAZ2NUwUewYjsPMmTVdJsYCBFVymdoaXysn5AznmaGk75jbozX9kG",
  "key1": "2YVkoYfYDmndPKHZBz8ZaQJ5BEiaox2HjUdMSsww4aHnV4e8TZGr15B9eZwkRQqU1cv2UMQ7tKMDrguZgETqPxd4",
  "key2": "5KcasQGwjMGi9y6PnFFapo23fmK6orkupzkAfYpMZ4wefqnQHXiSfQBjpTM2eG6AsyNUNPF4EpFvXQWVVUm2zdCm",
  "key3": "f6J7gcQrLRz4KRgppgkbCeL8MhX65boadn6qYSyiEAFvSZMa87dqUPpTm58bGJknNEJ7cU2AFaYAdGWUgxKSdFf",
  "key4": "5GC87Mk1tj3tLV1SpBvCJwCr35earmju1aEFJND4kzn6BAKMcM3p5zPZFuksZhijdVDUvMw7f5Q4LUcPXZbxavSi",
  "key5": "3yJb9x2C7sEV4CKvmgoJjQ4SyWfzYQ1Zp534diRrn9WUBx7ksG2J1CPXcRQxFg5w19agiVYDr1Phq6TfEKYmZxiX",
  "key6": "48Ek2gg4tRNbBDve17M6s74KaqfW8f3aiRkxaNRxzBEW8kk98HGRpFsCpY6DariLejpNwuAZuZXYeuAKV7X2oWwC",
  "key7": "459PXdCSnBEjuRFqSD1DS9DGUXN29ZTvF92adGM6wD29gz53rFMskYFVwWRT1sJa9fgSjMe3ZREfGwEKhNj1sGuu",
  "key8": "5aZ5TmzzJFToZgsYCK66fFJDUYfHFtWATxJhtwJvUFeW3PZb71CDQcQKLuwR6e9JyUQfdaZj4u5Sxa8A19kMGGCd",
  "key9": "4Suvk9MoPKrCoQuEndk7MGarC7yyhVttLPjRN3wP2svDYW6wsi1xpebN17AqnmtS1nX61LPkBpCXCVZaqxKzaABL",
  "key10": "5LKbh9PKwFVj6Q6NbT2d161Y7BA7c2DE7XaGxiwaRYMKinUzjTvrMz45vNVs6dZGfXuGDhTbv3bQXxMEacVVbQhk",
  "key11": "4Xd9WTr4hBJ2SwTdevZs71QEqBQJTwe9KXmix65LTgshrjRMDCqnpsBbwaU9Kmrx6yNSQ2n6UDXtpnZbu84GpNaw",
  "key12": "4hvdrcTvTRRH27c6ETC1CkCjv3GzCmeyn79sqqhtDATXaVhnnHJJXSvcibHBKqkuUGVqRv3W1CPCfEtHQHDfhGQ7",
  "key13": "3B8m1yfpRrbC72LTkAs2QbT93AvbaXXp8PA9wh1xbR9rwsKHiaoMbfsYGQ1R5SNE9LZqoMdcCrQQKKXQwGH9KnXw",
  "key14": "4SacDhC3S4a3smqv6FgEdt6TPmuzJkk7ot3zk2XudR6gpYTexN86UVuDn3DNQkvm3HCTMPu4Tspm3GpgWeTytqUF",
  "key15": "4vebecVzTbBybmRHprnrkdHDo8YEY6ER9gQs2mayrT9YoYiL9deikZz6hAM55wTd2pMPuGcKySr4QwRhexmzyEhq",
  "key16": "4pVR6yCqffn9jPhjTd5wLK3UAyAVTLedAwc7TeUQofPxBdp6DEKd5y9Maw2CpyTSDL2pqHM6Xh81yZ2AZJFwrhXA",
  "key17": "7Sgi5N2dKMFyNZXYBscbFkrHQA7L2BMFrMNN5kaqrbV2VRc4PsJeAHJXJjGXWsvbWCdf47kTujQmqw8mkTCQ9yr",
  "key18": "X2FDbPFuVQZfim7gx3x478STzLsFm1q6JHC5mHmxcxXKi2hREkBJ8JwoWJprm1Pt5SBpdrgJE7rA94B9jXC8PuM",
  "key19": "4RtHGWu7Hxjg99V2wqHurWTk44vsnRYpajmSeCnhFCSMzzUKXNjrXTydjT3ebmYdZwUoH4iVhaGLPp4qKzxWq7gQ",
  "key20": "4y7veoF2ttJaCnc7K97Dmepzpn8WypWCB48ptybyGKYfJZtjcjbGqvTSCidHW9MTMskRFRCFMY4C4jn9NCJJwxxf",
  "key21": "5f8Z6ySffS5Uz7nieij2c2M1NKuoQt8MBSMUmX4tyccfsYYnhz5XN7jpHTk1fE5nUd25udLGWGSa2DDLkYXv2aEp",
  "key22": "5wdWdqc7c6eq6vh62CNc1xdPoc6AUDsZurAaFj9F5m7gfyiv8sCBducwCoFNUJnGByc74ZbkTswp3fHgWX9smXbn",
  "key23": "5upgbeADFQxx2uWaVJXcYBvpVRj7Dx9M689R5TgRZrqioPejNBzWWyZetNnTiGCD4XnEJg1H5uxotymtZoQYTJWx",
  "key24": "DSkLDuSE5ZGbWK1mFW2KMWbFiBXX1hhzkRzRR5Cb3d1CnJBwKfwcomjiMLjaLLzUoXKaBhrPxrBtGDg6Q3x52cY",
  "key25": "4xvLfenWHxrqPmeEcAek9mMUiUmxoAMug2RG2iidirZFEtEnbVpE8nfnUgkGkTQNzSmRBidkTKV1MtbjLBSjhDmn"
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
