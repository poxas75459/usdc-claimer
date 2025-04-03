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
    "yQfRyrgkVHhnLQrEpVGvh3zBisLdsW2PKHSF5Y1vSJpex1Z5o5Z2hy4bSQFLeA8nz5x4KV2Bz5AeLhGCsKsrf8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGNwcdzvsTL5e1PFJmdYVXwmBrwDcWjVcff5eEvB3D86UT9MYSMqwdRve8Kj7DTkwCYZC9T2rbjDbKscd3RAm9W",
  "key1": "CPbyXQMvvTetDvyGb5rMkREQjnjDiH4QhSkevSCfpzzK8tUDDg7vgaH3cCCV63eVaAsRv5Jnk8HizB1M8Tin5bD",
  "key2": "Ajmcr43Kyn1b1RFakb5uMQjt8ZA2aogGPV1PzubWCebjiLcEQr67i6m6uTUPHeLDDiPPicaVXcKNxF6NKWnCY2W",
  "key3": "36R7TzmwaDH2ZiWmmpa532TE7jB9Mpc3petmfRi25h5DxCfwVudWzmra6DUB4ngvDLSKSXvu91bsw669W1uiGem5",
  "key4": "2CP4suvHHXvZtKEKsw7S8tABDKyW5Rs93sQmth5qdRJMrFwzCggb9bhM2WQUHD5uukhnsGbnPQWDbJHodVY9ZEY5",
  "key5": "4gkEriAEmVTrg2GpkZQ5sTRJ56m7QCXXhi36JDsirD2R8ruUPKxreXoTs8gjdC9H9ASqZNDTykzBUgTKkuWzGz2y",
  "key6": "3vPzuAUvWkzgAmgULpxC7YP1VrCJTatFazPkEiySZcUbA4vibEBxEwvigPCWdQsKBoRbend6RvqChtWS1r3TkAVD",
  "key7": "2UYmT8fR2HVtR4LyVHeuQ45rMaFc3R4mKP2xwJizErW7hnSok61pw6nNQbt2qPMX5CQVF6iZGE7TZkW7R51jnc7B",
  "key8": "2sbQbtKpWT2CaRPhEqTN5jVvkxnrGP7V9BYgsPJiL231ZKw1SXFKnfGZcqKefB6MECHgq5ep38vPjgoaTUyoe9Rs",
  "key9": "3fJctY1AnEMdTXQsmZdVhihiCJ3HzD6Gm1c8BNXtjvDwTMYDXbaRdHhViyrq9XmJVdNUMUrD4ncoBjZVPM5nmmeM",
  "key10": "5KQo2598YJjuZajD6CDsEKiHNTi14mQJxF9YYjChXy7wLf6jh7maiosPrEhAKG9v26WFh8DJMyAhYgZTBPLbcXFJ",
  "key11": "3q2Riw4o2BnzuMXpZnfNqRk3qa97LGXpwifEHvYpMDAc5aogNDPuXtMG3ye2hfDMkN1y6iHzQim99nEZAqSMEmQp",
  "key12": "4GpJomXckjmBhLn7i2d3NBZvAD4q7ykBT5TbvUuCiwHhBLVv6RnYBUWTSMbs7ZxTcrjw149FHfLmzP2jgjvSa8y4",
  "key13": "5UdRdSMDrFh3dZeubFLixWzmb2a6bB5cnw7zc6KjhcmtkM8fSF4kBSevAm7C7PWs4XTC4uxGtCDRtpf83LmS12DL",
  "key14": "2tZq8XLaCZsP1AeR1bSnJtd5SEyj8db2Sc22LV19GrPNQcHN2VR9aif5PrFYJ8H4WVbtmj8NmbbfQSmsPCiQwJut",
  "key15": "3m9a7yQp9WVhBVG5mrorySDFnCsVGuMboZiXxhFnF1jyCrGfGxqnTQhV3uCEUYP2XZb88yqLGxHVj66apUwPTj8w",
  "key16": "3yJcmkoFHn8Cd3VDhMXuRMKLj8wVQccG1hHXtmGVPQ9HpajB1UU8QAon5ETLSQt5orZLLP21wTSqWVGAPbUUiBCV",
  "key17": "3xYKFDAwrZoJW18q4XLSVGok81jwtGFiUVHLzrsp8K8UNV88FKoHNCawHSKjWeJACCmboqajEywbVfu3j68VNesY",
  "key18": "4JcZ6Y62bkSEKwT2KBtejf9DDhtQDC6RBMghrqWra5ctSX5wCYZG5DLfTfQjmJPFrxJKD6XYTd77Hbqc6SWAruxq",
  "key19": "2ote7meVRdNHLHjWr22tXx3zGwDhubZ3i5RWAf5JAZ1GdSHZdx5AMbsBFSZp9wWrKxmDd7gPaHvxAG3CS8SxyjJr",
  "key20": "2mYCTRKWLSxSptGLuy9tVXR13QYvcEFk6hY9dMypHxsfmNz3AfpSTkmJC1sYMhfmZyfs5qnsw5r5HQSnBVG3qPRg",
  "key21": "5Pf3ikz8auS1b1TpPTAmtKj76LnYb9XsMujky4534ovdjPe1ZKiQgAYVkhYK9yxP5FFXJSu1wkYu9ut3Q8h2oHJc",
  "key22": "4CDT2uFz7h3mu8ntd92e8hDE7U1r5EeA3i33Nm3F2eFx3ZvxAxaUpmFVjrEE8PoWBXXQurXwucTYBMc8bHYkUtoZ",
  "key23": "4bZrRGLqqteu3VwHapFjozdeyx7PauUupLW8pXYG58X6zhbA5wHESpfJHksyV5tKy93ZTbQ6pxacq842GE3jQ8Er",
  "key24": "3Fs3MMZ2TEopzYqG1DDxDNLhXjwnDYHD3bi4LdnqKofRemf6AFaCMjTeQkB1Ce33HqpXYFzFJpgqVwp66nBdpT4U",
  "key25": "5Deo5eTBMV5zdZQyT4qQzV3DJo1AFHLnhdcuNZwMuThAozyPfwwvowBCGcgNgPn4sM8ZMTVMBgNik7esUwkXzqTw",
  "key26": "5LN1xeZNWCLAbZwqrsabNaNWUpvDCDDEZaWY3i1eE3eciut7RuhEPd7N9zpN1LKG3YZVEzXsqFKTk4hXLaFC4R4E",
  "key27": "pYLc9khg6dS5UaQwvWPX1pEZ3Pe2dUsB2xvxwQp9rTzqMFpcq6m6qwkkd7Y3YMVZsmNfD4ULxVZaQ8Uye8SyeZi",
  "key28": "35LJKP4zZC9FRBZkgDKAWUcwrjx2HS3K8UnmATCG2FVxy8wF2WuuMu3bJsHRej3caFQEdqespmFq3Ja1nf4NUGWC",
  "key29": "3JqjZztXwrDVTttV4z23pm1YR9L4seyDFjPkHb2qfw1V7aWQfryw7ioXzvKavL7KZpSZC7UMCRUK53onwNFG2ZjV",
  "key30": "2UByjgQ4XitSg8dj2RLtj3JphdPBcbgpekS8WDfYpGmsyaAoSQUnT33b34nmGhaR88tAQsUkj8ApqTuCheqHccPn",
  "key31": "2gg5E1q9NhZv2ft5B4rrSLjqsBKoYnsESJyzGGhdZ8pY98GwJPn5SFwkW774A8fXjjyyMdAqHR3UFMkirRQo9NKv",
  "key32": "5kbVc5YAYaEFadF8TJ35MBeGAyEHDk5yrBKWRTaTn1ijvCQJEwzvyVJL3eQPfVd9uyhW5LMyykaRXWaoKxf4YdK6",
  "key33": "3JpCmU7DQDdYHctwLzHrH463CHA4KVTLoLSZeRvW6dp2EB6bmXDV6ivpJY82KKV2Jm34AUFN6c2NnEZZxmceZgex",
  "key34": "3oayZHrbw3XQ6GUP7EmGXVSGCn7hcUu9BXhpU5YLuohVKaiJSVdGCkj1Cbeb3Xf49K2C8U7zG4S8xp5Fkp33nmFb",
  "key35": "3xRjayUR1PSvPQsTEoD6Uwc7q7nRaLvopCwzM9pv9kk6QXiNbq2DGya7rKmqX3CtNVippyPxYEPpTEqzkycvvFvM"
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
