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
    "X2LAjX8XwJfhMVx4bx5Bhzr4tWip3yVCriDFdraJ4aTjjm5nvh26Sm3tD3SZCGNzeLA9EcTf96LJhkwCyFoHaJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iizVWWnJjZw28TnXPMaPjq1wcJ1FNVYZJHSvKe26FRPGeP9K651otiBoDEzhTNDpHMhpRrnXA3ehG3LTTywKF1y",
  "key1": "2XZ6HzWSyqnLswEAiZgo69Jd51SjSXzmA6roQBAXjeKyR1epCWrGrgH56uMubBqBQ6uMYs7WwNYqdqwMwvRCG3ix",
  "key2": "2FfrAAvSsav7d4ZZtAWZAfB3FppxMyv6mFq8K9gxW8n2nz27d6RGX5wBazicLCFXv9FXCxtA6ib2bhu9SgK4L6kF",
  "key3": "sm1cHSkQBgAVTivsKZ8iD3iM8QCeaQ7zDJA4N8HWHqWBrdFDg17iC6vqkDxXVPET5X8Reqh7Hxizgd4LnL4RW1q",
  "key4": "2mvdCkzPo7gdKqE27qxss8tkg7hxVuiH5pS8Jsjuja6mteCZgLDrs92gTfkF8E2z7A8HxPdgQdxSFiYd5jHGD4sU",
  "key5": "3gzg5JQyV6Htb8CgB2U1Cig4oTRWtkdeUQ9Jx4uspDYKYwRReVihR1hBZ4srZ1U2NHXHRY1eGxhGHphrbsdgwQC4",
  "key6": "3cgq4xSGYWZ8TvihaHRU6w2DEokA7Ub5Da2a2mDnLczmUecsHT4QuLPDQQLE654gw9s8KXMEPnR5KeVBBLEXx6cF",
  "key7": "2JFsoCymS9pKwoRoX74dCaTmcmBGrxkJZpe8U6x4g3pC11tKq6HQq1FtTW9U5ibjeGsa94osdPru8tzMcSBXwSME",
  "key8": "2SofgF3jV8yciYo2WUQBxZYbxvb3rgkd3TDWFzC3RMhnFy36jtymjPoiqqjpiZLzu5MgP123Mos1hVVN8cbqLPXe",
  "key9": "4BReLUxKXUTANFeHRtBxo5D7wyGJMFqNbYmfx5W1DcMrqRY6vviSRDjd55kwM8YSSzVost5iemwoBcLorefaDVAG",
  "key10": "2pquyhEt1K4mAD4g7MwvZTKRXwrzYTZhEfELnWqvw9zsc9QytcgzyVSCfwFd2eLh5R8NZFZm2vapMS4sws9Dm3Yz",
  "key11": "3UUNG89tekRw93gqbj6a5sWscsGEo4wrQUxjj2t1Ea1rxd8o6jsZM3Df23vSqhEMKNF7G8VQBwMejSSFabeyQTVc",
  "key12": "5GQeqLd1cZjeRftFXgSmCqsJPrG6ZYd6uzgLE5Aho5fdTxAzrko2p5vtRpzvDbrRT4KgZdZTyKagPDQAqSAqJtrt",
  "key13": "5q9x24PnQZMTwKBuLaA4sswaq7f46AX9VEFRVCNhFrG3koji2GkYYxrKpNmAoGca1L6R7UnVhdFmSPJpkngV9N8M",
  "key14": "49baTEL7hj46YgnPn5Tw1XMgqHkhLb1ZZfc66rYWb2cQDdb4QoNFMunjBHfoeeiHphCiT2bBy44gu5ofLhTMXVhn",
  "key15": "5ufabQ8UpzteP14cSyYMrLwa48wEVkv4ZryP9nQoSLuybmc8QRN3cGmGPic2aNzn7rLxWMPwfHsgxeD7NDrybUwd",
  "key16": "4mjPPmrsg6EaDvZQpTEwY7jTjHk5kXkB6A5vGrCbe6YjY6NoqcJc939SDdBXBa7BuVYYAdWxhGux3oD1e5Z4wewi",
  "key17": "LsSSTcPjhN5qTeWDaSr2qS8yrR2UxEW6CavNabGdtAbYKit3W2CxhqJhFkEY1HNSsSm1oRBZxo6VVrcBziWBvxu",
  "key18": "2boDq1swJ2kYeconoiTzCARu4Tw1BZrW47ztLYbVgg995yDeNM92Sw8Aa9RK93ao7XZsrT2tjy7QRGxnqpmhVPJX",
  "key19": "4XsfE6VCsXrXoRdRLuEHp2YNHXfnga8wx16hLwpcU8FAgf9YF86metRfjC6CbRJcJZZ1NiwvuHjEVQhw5T9eLRzg",
  "key20": "518h9vZVWn9qpnvT2zM2ynKCkzgWmvHhkc65svhAGtP21LADWxTjRqVzEvXmh2QoTxzAoFD4CayqgYa9PSpppU6z",
  "key21": "3ydDDXSAQXg83tJjdyRZ8pGAgSs9TCPnDqfj5fpCUhd12BxzwWrEHL4t989ysiw1JAJ3pVCiwEp5yv1HiyjU8CTn",
  "key22": "KUVnVfMW36ViTLXS7h3i7eyyyaeZ41MgRD6PoMkPysQZ2tYxZ7XKgj9QGtswLoLAUGTxdrbMhfp6emk3Xd6A9aH",
  "key23": "66hM5D3YLUWN37oWEQbXjadMnPJhrn5FAYPT4VJWvuLbBJYu7tk7o8HB1fNuZLXeBdrnLAh9eEztsEGL3wDwRGXp",
  "key24": "3BEWj81M1MoHHUcxdA44UKRqSrXWzdVo4ixuzwtjjnXtX46H1dknYtCRWoHQncH6T5FT8itaU1XTP79rnae5qsG1",
  "key25": "wJ3tVx82AzgaD5JtWsrtJXgZZKAwpNFgSF8tLWYRojZXSDVkACj3pUCS4zeDFq8GDYVv1qPAyPMSuhwHp5ENWZ7",
  "key26": "XoRaUkKkja2DAvhiTfMnnDFXuKgRjCMSvRkvr3EGNHkB1QifhTSZZ6gsvddWS7EgNBTkGgtsF3Nx72kDBkeAD8J",
  "key27": "3ttqmgE6BDtCktxfegQvxjzzT3CrwDaP1Noq8ziDz7QVgYCmqa1i8FndztypvQzYW4UQEY8neTjge2cFTZFqyF9u",
  "key28": "4PgiMS9Gxrz3Kg5cGnFsxGu6FA9P16Q4pwBWQkBjn9zFHfBfgFj4LshYuBxtR8me9JNQTYZVtydR3QG3uBkWdfPH",
  "key29": "9LTymXeUaaqrcBpSSB1PSsDWpQwULbr5pVxgMrBrnBVW4ukAxEf3Xhc9atzEiHcjub44N7fYsZP8q8ipxVTEDq8",
  "key30": "27irh4kZR8aeeE4YLfF5mS8RzaX4xT7xKktNgGzua9De4GfghLzt9Dnmn2YdM6qvk87SuzcY7jZqXRGT7DUyiEiG",
  "key31": "RPmTE19QNxWGjh3T1VdctLNXhuMb2AXP2T8y8J7qLwAmympv3b2p28kFZDdmiHFLzZLMHbsgCvQM9TAysUBnRzu",
  "key32": "i4mULfhcsenb5bwBiX7mqyNHb48CmhrjJTQ3j21ZqNnUWVf3qe9N5LY9VMABJvyijiA8GxNsDZAHAPKw15VrTWM",
  "key33": "U5mEvGCLWFeMkqrRt7xYb7C7WsRMzZEKWTWWdcmFFtNq3snazzvUCgfx2u2MQiArUUsRGvCm9fGdXrtRVzMw4hV",
  "key34": "227cbAf9hWaucGrQdeXLgWrAbfy3joSqQwXfd5wHiqUzHbfi3zvdDrR7WeXaV6FH7HT3Rgi8oY2oLgkgiL4DHvUT",
  "key35": "5hXAJc2iALLSKeGD7DLyV2ifRvcKZ9iGmXdoEPd1Rdx5EUP2Zc6f68LqxS2KHeyq1FBKUnj7Kpu2hdGpQ7TX2t3t",
  "key36": "2MEnG13AisuKZMwniSQgRgBa8WACG2YJCyVKC1jNZWWXXQKnTCiMukLWpKseh5PnQSqoohBXE7FjK5HLnX3w52NQ"
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
