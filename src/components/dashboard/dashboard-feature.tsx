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
    "3oTARUgNpugBhQXc1HhmVUvrbp6xrQ4Kk4TaekEWZPLTG3DYKDdEWzGyH98rRDX4VrWZ8BNuA1pxfcoz7d63nhNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKp5hmVrtzqhs1BXZe1sEY1fcTDKpGrgqhMnkFBdUQVPAAqqcUb2yoSdVxUNB71uCyTitbceiYhSP73mXhDKryY",
  "key1": "25p3e1S5obd9cUhTR2HA9d5yUjEQRwp9ZFKTSBEGNTPwCmrpUgXWrtAc56uqGuzubyqovHBFECiEY9UssZXNK7QB",
  "key2": "3KSGDjVYG5vznLZ82A43DPgpLDjPwvM3RXZLwn9RhUaZCaKQjhf6fTfLFsgHgJ6cZFPac7n1NPg4Fs3KuizCF1Ne",
  "key3": "5iufwsr4wciy7uRWkE9LzNfxTvUPJf17f3ds9zGiWtz8ikm1RopoQyceC4mr4V6sadqfFFpu2dyD5aLSpULcB1Hk",
  "key4": "4N6G2ZEgTDJChdfxvLmAhheamzehmBvQ5ywkpvtyo3Nv8RFBz4bzCqe7EncjLuqoTFX84VXmGrbHAseQF52Xvfsb",
  "key5": "57EF8AX599UoVxxe5Dcq4LHc4RENMXxBK5ZV2Xumi9MrLiscDQn6siNN39yjWsktieMzFFwE6oTJUx6fH1zXnkkf",
  "key6": "3Yx3fnVvnV21fKuDVEAFEqBjNDsbo9GcJ3xNr4B1n6SNgzTvymi8gLKjY3hZZfXMBdSFrprpo8fHNuphPBH7RStT",
  "key7": "5oE8j8FMD11SeL7PyoXrw5A85s5ZmWPm8adEJUQbr3B8JvQpnP3BJ3NyNsrpn9EbrxiiDRRGit17a3iNUf5BA6fG",
  "key8": "2xWV3pd1Mjz6AN4cZ6HPonwy4SabXmuEte69r4xE1NKfHqrftFMZPMwD7gD4ZUhpst9vUNo26gHGd9Gtk47Hzzkg",
  "key9": "2FxeeRssuxTdeJbb4W5TU1uC5ZbT5AbCYkJXHz5kyE7iKjg3HZFWr3iBEM8Ky6Mt3Exov1VnXTz95AByCEA4jgQ5",
  "key10": "2aWb3bEZbXeJExw87vSXXM2U5F5PbDBeD6tJf3gZLEAh6QpoPEGtJUXrRbhBrAQPFqccVzBc3fe4PvJKVpU7bAAe",
  "key11": "4o6Cfbi8UiU92XkYhFmhrBAdCn6T9iDetofei2tZjm948u8Pn1JBQit8RiS92hwsii8TwKARMwQ3PcJaPcEmsZE6",
  "key12": "4K8uHiGscN3iYHrB1GC4wyPfJGU8sBntUr93JzaMyV8ZYsW7V3695P4FY4f4WxK4ehNvQWeiUBSoykKAboT5SezA",
  "key13": "5o8PY3WvjAKGDKLAh9wkVRi4tSktNpjxse35wgPp4FXDssnghM6xNtu8JD1PSgwLLg7MTm3eCQX5stGPpcEfN5cA",
  "key14": "2sRyS6HHyyJdj8psnoaJ6aKX5qcc6pPCwdPoU9enH541tTkt4bPJGmaGLU9UsuHu3BLDWuk6bfCbY9v64qn9UkZa",
  "key15": "4s8BSzAj884sDr2NR6MU6Ve7SE7Jnh2DF7a7fyMrDagrqfDx6Yz8eU5tNX893gRiP9KgBGwckqXeCdT3S6pMq3xJ",
  "key16": "hPpCu4UkaSQd14vpjF5RL6Tw2kpN2c94Wda7n1bG9MbVyKQUupKqP58evTHqUhDGYePFa4K8HJhBhBq5fKWtya2",
  "key17": "5wAmAtvUENTo64T9UuYjQTaChzRfJDc2D2nfx19s2vyZSypThJJpBkPjkfUWucT7xRrfccs45d4hxE4z8ZGbXhVV",
  "key18": "2QmmHwVMwpugvJsF2KKVoynTiCpyECHDs39PQWz7wEP5Qf9wN12dSRoAPJFXKA5zAcCjTF3eheMTqfzqguvVdrPx",
  "key19": "2C9QqL6R9xMbX7Jh5XE3BX7oBnF2ZF289ma5kJUGQYncHEexnxbykJJv9Rr1DjUVNj24VyWHdbXLMkBjd5nStNap",
  "key20": "cW1V45vdX59yaiNQxFRC1nGV4YvHYiNRbN2Gsmn9BaagUYBiFN8KnBLuTuV3NkaeMS9PyNjdYXx5JyvghVFsTRt",
  "key21": "5S73VPW32jaPAYPLj5279NPVSuXTakzLYPPtZJWgqFvL5oUG4d2H5gsSGvgqus3UGF2HFgkAhSSxvkGm3DN84tWt",
  "key22": "29vfUeUSs3YqxkSoqWxHG2z3PubZDK2HLXfdaskqub9cQqpq9A12ze77BKqHJdssQiYbhi2T1ZoosCwRV3eZRVVT",
  "key23": "3QNavnmCu93bz5ruk6WV3mSEBdj4hSdggsHCioSi9nJPezQCDfS9THSwmZknRYM6g94sb2cers1vxKBYSaNZN1s4",
  "key24": "3oWL7VwKNVQn87MZJaWYgkMUz8ZnGWuH8ATyG6jnYSbzfoPcNWfQVRiVRPThvnMwtZeBKqxmQnwiMreLV1gyyAWE",
  "key25": "3BWNzQQDUX95KnBU2KAJ3xyKysvLp74Ykf5U7nULfXgpdbmSYwQ3ExhjBHNR3m3gyPFrSNH23FvnMeCKVXh3R3yz",
  "key26": "3t4BNmBznRt9ejC1cgKzTPwyctfB8uPojAJR2dVxnWQcL7xWVCLNhUF7oUXm4sFJfhYDDALfcuSgjwi2hzy1H4NQ",
  "key27": "5zWJpCRSMZFDiiTVALyTNbFNsTZdCfci2jfZBNuntdBtTF3NQmGoYVWYtktPQMejVfCtAQNuny6hGEJiQbvr2jm7",
  "key28": "eP46fNARfmScdpdiujHvokn6gQ7K6w7ZRbkR3hjXVcc9zhSAi5GRWamU5B6fRGyUcE5wHB5rSPksciap3ktDkfk",
  "key29": "G74fNgw8kaMgyBokBALjUTXLTt92mLPXYuE7m9wuyWqP744hrKDbjvN8VdijwuiKJdAhTcasJvbFFKC3sEiFSux",
  "key30": "5UzyGnuz8QN76rt3CKXYAQnX3sqev8EqMRrsdcAWdNwucvqk3MLt8FebmMv2xGqjV8VWB3D6YVcBYeVoYFLEoyte",
  "key31": "4MiMvmcp8RKGKrBaJdFcxUbht5HiHpjbDbd2vwGWpuScCK66XNFVDJt6Qvy5RxuYGcW3k3TQMp6CmQLMtHp5QNmv",
  "key32": "4CSb1LxpaWTKHkh8kvvq1sutVeF9eBZFjbgipKDBtEGXxERbCvuEXHY5qApbEc3dvJPA2oqoAgqDmb4oxM3Nc9Ld"
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
