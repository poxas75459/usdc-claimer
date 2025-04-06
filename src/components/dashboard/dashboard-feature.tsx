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
    "5SJRdaJuJAN64hZcejVk2aT5NuBQZtkLaGSfqaLGowjXJH3VqR6e6DpqyumuSLBd83yTs32uCYGb6oRsaFNZBUuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VruiJvAwUHHjKLPefzCKCZDPBLG1jy5qntbR4mCDpmjKaadoFrNBTR54vQd7ifcpqRYU1U5LokTLy3yunLye67x",
  "key1": "2Y2XZyqsJZpDcu2QNYxeqKzobYT1jntusiRs5vCJJcd4AqWH6atfPw6P5XsJ9ZLFCYXBCRz17678DtQG82kECKXF",
  "key2": "4eEbQh3ALz3yMNsQJvqkY6kC6THQKJL9FVxdm8BPyQFuo7o5CWm6G4AmT4Nh6DbauX221xF3uBGwUhYMNFwbttW4",
  "key3": "4PEzGFGm18WWaMDLSHSQtVV9ZZ1k4MHzKu1cAT937dz58rZdBViod82HXnCc6cgYW7yNYxdYhoaUzboWeQ8L3xwg",
  "key4": "21WWx7DxWniAXJvxHW6vNU3y8vRQEwn2uvia81vYF8mbvQKeTejVspDSAtAfgDN6bwyPXujcoWcfCwYCW9ovgjhm",
  "key5": "3bTBsTNyWQQps2WPTU1EoiW42EBFBoiBZsQYYS5t1FbP5jfgtUbSPNWvZyEggUL2uhdcq1bWfpRiy2vq6aMyZS67",
  "key6": "3WHT8haz1KgvXDmjzsaHaVkY8hTnJy2V6EXi36o6ukdxJUoJP4GodgyoQYwqVCEAh9CDtyZimBHM6sNu8DkKr4nu",
  "key7": "57rFsrdnACXwyWWCKQ3UouvoPHeQ8gkQoMaQeBn5if2vrhgJRVVDUqJm5CVjrgiZ7DeRxptoGjb5bmLs8d5AuRSL",
  "key8": "4XVNfJzdUpaMhb68BDR9tpk9LnKMn8rbzvVNz6nfN4bh1on1ZL3movNmMWPpoTQEHNQYke5FzrVvjVM95i5L3D4k",
  "key9": "3Ap8F2Rw3ZLHfpKFi52iZ59Rt755Ktmcw3SZszYFJgnRYz7rWUjUykTsyMy93bCmcXDjkia3L4HvwbExhSpKeipC",
  "key10": "2Ey8kvDxJYRmmc1XLpd5KbmmvSKj33pFBzXio6HKoRFoVrzE4N31bPkAJ3xaCFHQk2thXA1pJMVgQfefLSFsmUti",
  "key11": "3CP4LHG7FtjF94J2j3Pf71bhcsZkbfYA8BAcyq82DMuc9Tphr4yV6J834yn6cpF8Y1DNgvTsT5K5QQwKXLPxHdGo",
  "key12": "2jqDXCzQBBp11BMfthK68AQMC5XSucQWBB3d4zQXx9CsqdjzngySdVLRSaBLd9pefd5sigUjamPZBRjTgY8DYMki",
  "key13": "4R8VSfZvNDY39yU8Jw1cMvYajJAbLrF9PAMSfGwW9gPaMEB8s94ERzXTR3f5E1sXbHwR4qooLpJLf7pXtevpm49S",
  "key14": "2c3JqkepsdRYTD3uPbdyZs4wsQbCD4YRZwkGYu2kJSaN3c71MuujW6P8wcGZauqtTUp78gA7sZmuGzthW2DsAXZJ",
  "key15": "5iqBjhufhULKCfVNzy5J8hFqx8nyjrbyVhugqaBmeePBLtX9QKHLomdEefh46t926S5ukVTc8wdy6x2cvTPMmgJ2",
  "key16": "5pbDEtZYwLKw6JUZazENFGmNucYXrmAySZ7NaGTSwzkzPRm3CbwtFhENyTepXSu6hm1jjmFbC1aqtfwff9h64NM3",
  "key17": "4gH4YDeVphG3YqxdNjfynKvv82mz8AvByVxWi5rHz7y4mz5UQUmTyBKFYsyJAT1xByzmWYc1wX93kRJZnt7roHP4",
  "key18": "3Zh3GKBjBN1JXJjSYwvN6WuRE6PsgP9pNPuCdLTA67SgYFwZkAQX2A4fGq2KRmAh1md1ZDpCMn9UMLTo5hWqBKRp",
  "key19": "57bzB3t1UxgpdHLtexDXNuHmnHprkRKMEpEiZDkQ5BEc7fqAycygHG8J8uzrva8R9dAp4QxsxLQuSjgzgJAkb9CR",
  "key20": "37HCqoWWdHY7kC1oseEhvCJ4yxdLebDzc85YzzPZ6sVQ2GKcNBz2iydCWcYxpwjr4BvUwe1QSuqbRBgfxBQQEZx6",
  "key21": "4HgTc4RKhQxK3U5ZA5yr1chHLMRJpGoWa6Ae3pxCFNJFTGLmZtUnGoxVMMmoBwUjDQxLCxxDJrX5c58NGhnzD2Nm",
  "key22": "2h6VzdHKxP1B2qvquRuT75y6u176R9pdnBdQEEh5m1eMqqsdamFdQboE4Tp9116GoTATttfuz46vPSGuwK8hAnmR",
  "key23": "8Qjqxrk5RajUskvjCfRPCwZA2c5BSNWvZ4Knch52tSQEf2cspMPc6eQPACqe9uvvxGKSR6em3wfB7pFUSaWNnfS",
  "key24": "38PSYxieUzkh5oxBz7AYgcJqLhDDFWVwMM2twoLkynNLq6scEcWnQRtoqDx2HPYuk3rVvFM2GsDN18zvoLXQay8C",
  "key25": "VS614Z7Cx6Umo4U28oiHSQynwwVk5dxpJLq2YAKtHjYtUW9RbnZAS1ThFgqyPxyHXu2MkTAnnSVnGBWWjzaL4AV",
  "key26": "3beV2rqqagrQ319PzBPwaHWJmabYyoAUxXnMSB7jpqbjvX7mTKA8QgaeiXNYqAAJnVX4ocs4uKXVuA3QfZ5nBcdp",
  "key27": "4BifrP66Ru57MSZC5zApYyBet6a5dh8ntKi6p5Yu51VtjqMDNXcXv7o2PdA3QvtgZNxMwdgvw7yPL6SuhnNCar7P",
  "key28": "3n274iuQ13orEzs5FyfGnQeCmwm7q7k5J4iD3XRjaCaHTWs9ARWBvbJJfCygT3MfEe6xwpuErTMdvcfM44UBrXGQ",
  "key29": "NYGyzwwPvpNgDrM2UkduKrpGi6KsYXsPajDTv1FRZeqtGwFH9njkaMcvRB8Ww49UHHsrNws1HNVGacZ78THSZ4c",
  "key30": "2nkyxUsdHoz7ceUJSetvheNdzDBvvNySbUQaVYuUYoWzHqLQi1i6RMXpE84TRNoSYmRemyWysK46ziB6gFAq9Hkg",
  "key31": "5cbr245k3KqdhSjXymEQgH8ShCUVGfmRGzKRHoDhfnuQgBEF1z7BS5Xzw5guB4o7ATa6WRSX3PPRcGjZtE9cvawM",
  "key32": "3KgrkxFoGKvYLBLHN7kp3ueXUeZUNLNM8UtGHF68uNECLHJ6gVm7bRc5hrG5KUGQgtcGrVM7sZdTtDftTYKN4uxm",
  "key33": "67fE42M7sUT7UhcxLemZoovHbAqGaJQNdGsnnBs25o1F6B3M3pMwuiGiEsS3ro8hrdadKQUV9TqLdRCYavH97ick",
  "key34": "nTxxxGeapeBjC5DpUpgCyBHSzLND5zY6axcAGx6fFj7mYD8XsY5N1z6UifWWMoe2NdxCqHtXoGbTsCs9pGMNBPn",
  "key35": "5Xvj5cLjVAHkbDfBdSwYmAFjKa92jvQXRcKcLxwVLdVzhysZ8CmVjV22a9AnBuTsuu8Zzu7e1voPqkANrz7rhdbY"
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
