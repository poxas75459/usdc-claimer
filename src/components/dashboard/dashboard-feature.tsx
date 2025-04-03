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
    "2FiUMqYUUoLEWkgmKgPbDcSa4obCTFdCXnqiZrCdKnm5g8gWcdNYYgiJwRA1b4DZnAdJdwh7tPAvdt2JDN3hbMDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8tob7Z5zwmg75Gm14hipBpDaHczkxpRtyjQP7bn8bikok3xHfFWVV5VxLfDsmQ9L7cmRMnr2CtXNCzW13W4qsL",
  "key1": "2gaWx68GkTG9z67nHwjUHUPMGQ6K1kGncGSEpwQFPiGEmHQ5NiXhha7trJ5ryXNwk49tGu76zRuA4po1HWu2Uxse",
  "key2": "2Gsgcf8bK17T2t6sD3gLYuKYCNVLCNZ8vXM9bTXhawJjqiZf5gtYsrPSyU9MgVruoPCzCwHqEaJqpMmSYCRGNMW7",
  "key3": "n9voL2iGKDZNDA5ED1p1wq2ZZBNhfuHnz95a7HPwPVJWwtzfaVzNSBRdvsQG3XrCfbMqRdGSN5BNXLQp88eu3sr",
  "key4": "4qGGZ6pFTyR2WZ2cbfgJRAQV1xE19v91znFoKeh98Jkzs8JZ5CgiaCVKiZT8BGCBdYZrTCkthHaziibFJkJ78VCn",
  "key5": "55AyxxN1Ln9sHBPWyPPyrnrN9wyv4C8m8XgkfQXWt7nwgedo8SvT8JhVWTPEfuVE8X1yAAbQLNQ9rmp4A5Gh2Yfh",
  "key6": "J879zYK5GSuAKitSTxWuNUhfc66viCoqLoSX41bUMMDkCDebF5jughmmpFrQzaX5XmcrFGw7c4Q4sBGmMG7jZbh",
  "key7": "hy3gP2wUNLuhA2hUgL6n6EsKbeDReVgdy8kVxaDxBTU5Ze6w8fC4wk24BryoSRKtnvy7dGXp85VQgRmgy2XSkph",
  "key8": "4mPreWFokkFdVNZULxzeeTdc9id9qvdRR8wRoVLiod25ZZVwWXCWu45abR1WLS41DTzRofbXqyANU2Js2Y8oATZN",
  "key9": "5aWw7J8WNV3quYYpbe1cQYAskchQGW6wKSjiRDJsRWEqB6kYFRgg3v8RPXhWTyvD3yzH7mTqyBBZdbSDGUYFqinj",
  "key10": "5MgLqvLydDqddLnMUNmmAf5JguTLCctERSABoUzCL2DvZqHNfrqfTFXPqzsHhLyxFwAHn5Hniydkk17bL1oLQ4JA",
  "key11": "27pbHvdKAFmuG6YBWdaFNtD7kxPMcDKkgGD2k2ZX1xAdpGDHTmCLnNNqxkWCbUsynnjDjv4FCug6QvwTXNafgeRT",
  "key12": "hHCFbypMYpCEpsUQqqHH14cdQz3JxU86EeJateJXAxruYeQhnwWSr2rcwXu6GaExkJ6e4UsXD6PcmGrteT21aTE",
  "key13": "4HEPtMPrca47Ggba57mWFNX4d89BP6tonRfkzf8ykQhE2bqVJm6ys5cNmZk7MXdKLxadSAPtL2RQdNRSNxXeKZ4p",
  "key14": "4wYfM68dARQYtEEohdnYWktPs2312MigeAFfB49VQPXton4eMy4QeYZjNn7c9JNYKVJYmrsyPRncAuX5CoGoufQu",
  "key15": "uYxmk5x4CFoebZQuNmRFQc1Jko5dQz6CsySBLeMuCvJpvyTkondjwz44PBSk1qJQNwB49hBEkthLscGG1vZrWcK",
  "key16": "3VuS6qK1XojnrBdqPT6kviVySa4fZoZkrKAiteSLVSzC7ozxp851bTMYkmDSdNuLKDAVLDSRPAgUx7p8RpjiFKjU",
  "key17": "5M3mtKY7kpTydeZvsL6KVoEbPgcFAaBACXApNr8MNyMyahrGKHbBpbxZXfpJLyWRRAanmLzi7NDc6gn2nk9DhoC2",
  "key18": "59ru596yw5VHKxE4eBQcVdywBkcduTxqxLHKyjmpecasu7RQ6HmxhcwTbXyxE2XopqxDQKEjBtZitkkSF9TygnJx",
  "key19": "4sYNgiFi1HTrGUBE1MRkgogCEhjKt3WAVwT3wbbGL6QkHcZqxgdLd9ybaASx2YjECBKT8kx9FowQEKJPAisXBgVo",
  "key20": "5mXNzrdcmRCaFhpGJKa2ezvonPXifV6N9NXZobGG12pANCVMvuY5iamhPr8Rwun8MnXSAht6R5Eg88c56LTshMdu",
  "key21": "5YB19tWYhVxAv29uNFNGENgStnKLSEyoUWFBEPtsnpUND7BzUovHawU9KQhEcdeQf65w1PBQgnFta2BGcFJYH9xa",
  "key22": "5V5HRNXe7Jrm6W2jLW361HLHyyeo5cLYorDiRMoeiyn3qbcrB9SoQgjnM15MXKeApJNz4nrXg9Y2kin5UFybf78c",
  "key23": "3BxQncz54G5ZpKh3GhfhS8PQao1KUurK8z2Uxzac5moUy4thgzCrmjAnGxSDgRQB3SZhkcVj7ZeB7cYxtZ8guDh7",
  "key24": "3drYCZuSE5LohXyNuuX6VaS2yfDzVt416j6kCjXaGugpUvwGY2P1oZK4m99VxEAgZ8si9C2AQ4W7NZhNBDGJHZTJ",
  "key25": "5PKQZNNsxiswxGCNETMDtFd91gAYRhancKGE3YaJCy2hBV3tD32Zg79Zqvwiw5Y69NExbWc7ft8pnpcSSFWunYwA",
  "key26": "5dxAackCqMzBd4MfiU6FCdJWdzJGqWLZXQyY5VJynmeG6fWFqFWjdeS21x3jvRWfoQFnUMabASss7MWUPCv5bikW",
  "key27": "2dV2u6K4q5ycyKNk17n1A3hAurPTnyMLcZ7d4JPamsPuCLb2XyPSYhTyLz8nS4qeq87avqxiv1H7J83qNtsWy5PF",
  "key28": "5CqxHtUMhQdsMS4zz5fHQ6oXov2Tx4KfNFRvhTLbXr6hnR4xg2xeaYvVu6EpCArJ1YbcigqHjAMXVpY2WyyBAhDN",
  "key29": "5gNG9nvG5yHH9Cyf1DQ4YMGeSiQuedtYeQbF1ojpxJQMfqTX7VNJ5JAQsMuh2YXLByRVdZSRz47GNCapy4PKYKLt",
  "key30": "5xeRnLDcTp3F5fkLD331N1nXpZKheCWq2Hks7frGkDx9Ky7twJBqhSekxNmGxWcfUwp6eiiK5WEMkReKWMDmuqQL",
  "key31": "2Bif6u3WpAsJ5vMajLnVXYAA9MAt1fz4tKadq8j6DQyiJJcX5FisZQqQuSsEk73YbVixxXHfNsvbJA4hniWoXrs5",
  "key32": "3uYK47NECs2vPTX42HU25J2LwzFgqkMSDwA3bLVh7AGAYaB8WCzLXcNtBPSzwjSR4LxEyMGyiV2SsxzVec11NFev",
  "key33": "3a1Q3sP4pg3tRJN4UWxjpCsBS2Kk4h8dAeja4Pvax4N5LTEBdiGaajCbCi1E7n9omNt7hiqfvbLcWimco59VYizr",
  "key34": "3WDamokhdsgYKVTGzBSQmaVc6Zfddn94MouWvLnAG6s9k7mazXq8dGuxv13JMZHJEVTrPFa8NmKMcUpuxuqMKnDn",
  "key35": "22G4uUHx4VhYJcABjtDBYEiLWwSBA5m8XnoLSS1vp8UBqHYSXu3zz9FZU33xv177hMB4bSQppoeoJLEt6tAiLxiH",
  "key36": "2hPsZ9v7v6iyGwbhe4xMmfeD4U4oQr8gnAGchAukViUW7QxqzzQ7USEfQqRkJhL8VZCtHKabrES59Tio4FpSWQS8",
  "key37": "2B2TLCzzB87qjTu28b3z34sqaets3ek9cbCM3pvuNtP71tfszQhJQnWEXZ5DjqmtcnNrz5ta3Qh8ADWXWuzL6kaF",
  "key38": "yerYmBCnFNSyJhE99k9auUqbTd5Tnd6MB8KopkyMxHtSHfFC7L6pkM9i9vXbb7EjPJqP9R7LMwfFsFA6NLH5WMG",
  "key39": "3GSxFUPF7StXAMg8aRYHxacfJx6yjzdruUPB7wqfpLiJKGrypXw6j5oBkt55ySWXr5aiiPHFYLMNMFHGYrhuPiY4",
  "key40": "5YAwFb5b3QsbxQ1mjo4tyn5vxfn6hQYfQ3XvqU5e4Sxea5nXbE3PXRK8cue1uNiqJhJx86YSH3cdoF4kV7Mc2Myb",
  "key41": "4KMr9Dw3zCmah87kEEmXH655ioDbyGArUy8SQGYa9BY3PeL1wtF2Bx3Ygrw5Cf5hRcopbUCbDYQfYH8nNvKbFHC9"
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
