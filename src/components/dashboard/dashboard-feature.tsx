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
    "4dSZB3Mpi6Grw6fSFkmawHgKVkgZxJUfa7eUBqn3KF8VSYJZjMSX5Qrcj1YU5GU59ZAhwxLDdvwRygRZfaxZnV3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqoJRwkm3ntVXTVoHs4X1tNcjcJ9KTXsXhNYaT3n8CUcTVpyv5PXNLpazsLtSxE8M9EKgiYy2si5ZAhLS3Ly8ku",
  "key1": "4cWQoFn6Wj8K7Vt35CAZZ6q2eG423oFAHWvT9uVGDA2CCdWCqJSWBA7nu2T7UAWgSjNcW4eDaK4fcKfMKhofwwSr",
  "key2": "37dztkAgpi3GFpqq6zjoqvBb7RHBEnMzhNiywwEGdxzhmWLR2RZymsyNHmJWmDb4CYfAdbshXAFPdwE3aWM8tFXt",
  "key3": "ZRvXWJVYQn5ixxZXJHtfBaDSndJtRP4ei3n66FRxt86JoJNCJeKdSqSvZcS4eqr8ZG6QaJXfng8FUNzVmS8ksbU",
  "key4": "5gP7UQgg6c62JpD2hWF1HUiNNNhQ1z4KkC557L2xg4j8CubyqzhExM5sAUWPjPBzUC2hhVRHBjEFvQaAu84t568c",
  "key5": "TubTAr5vRxio1mhU7LNYQyEcghkwxtHGhf2guAHqKvrHTJGqcb9DjyV3oCxZW9PVYwJCKYyP8igZAufPccGJKTx",
  "key6": "v9uvwbd7JfT2Mz6pVmahrFepomZnoCwYvfSCYiAdjmJJGnR5hZkct79SAs7QjyMSwegLisDjf6Spft271qcfZCD",
  "key7": "5QNZP4FCUsDHDrM7ipf6g97A7uRuBLXsG1YZobkHqxQ8nteuA5EZkzUVdnMPAzVyhwpwoFKQ7ZDT1M9wuoaGRB6f",
  "key8": "2f7QNUW3da4vkAoHGkR346KVYq58sAEAaKc7pUKvzYpX4CLqSsidrbnsSUFaMgc3mPNk3CCd6byHfGAyXmEknt8M",
  "key9": "DsTdxHkKPmHz7K6DyqtCAbRTQ324iZxLJ7J7GSmkNqxpSCMS1CvN4S7NK19mcu9oJ6FLEMbuRJXQGuAKhZPCTE1",
  "key10": "5eck6bt44ByNoknFTj3asgvGtXHBZ6GCDr9YWD3T7AK7P5eurUpZdgp2Az1WfPQK1rCMe6sbzFdzXhz5kc44v2C7",
  "key11": "5kGZSi7yjk8FyWePgZJiEzBfTtSrycZF6SsF6ZLdaBjZ3spRszoT7xdfrELs1KSqqUn5cSRybnGQWUdWpTen2kUR",
  "key12": "4CUaewYJqkQZL7tGtAPXN19bx8FNJJ8hRhZfYEnmTVJDuSZY9c6dWhgEdoN2yYug26sskHSs2H73dsDmr8GyV2M3",
  "key13": "3ZYQMis7gypyi9w3JKrMiPAf6V5Z84c2rYgy315Fswfhn7sDvjQiiZi7dQTcNDoDw6Bg7SDMnCSabuhf9drrLeRn",
  "key14": "BFKwSg1poourtqK6vAWwsYHWoEcdgTEdJwMXaqyaLcrHmtaspMAPTo4FqRfJGEGdXqKxzyLBJHSAxBzJ9kYeSkx",
  "key15": "4GAoFqnNdLkYkdtGQ8NfwmbdWDjxHUJ5DkHjX64Jh9SxGsBTCFkBR9vRZswKsyfU9nvmoxfd2Gd1gzEAgWeP2X9K",
  "key16": "5hKb9Q33KwmdqnD3gEn62qHQ6Ms9AisvBfF3coEXqHqR2AYgZ6CUReNr5ZWffxrnJVubJ45eMNVjEbzo2xaStgQB",
  "key17": "38g2L1VQGUqh92QFWB8xHpnubxQMFrfLWFDoJ7y4dDSzFZxnRRZVTLLsmT1MaT64Z7BBYQTBFzNyjB1fs1sdPjKy",
  "key18": "5U3VGKBmSaP9jDucdkHCC9M7ktzwPEzve4KP5MHX8bJsuBLSbv3pqvsLKa6anQLfx6jy2u7vQiopEWrFcNi9Dhkb",
  "key19": "8AN1fFhSfYN8CRWDKLGTVNKb5jLPd8f6aASD5g1D2gdnKafk8XqiR6e7UWGsfcEqkjcpLbMefb3wsjsF6jGYNtx",
  "key20": "4D1EWpZfZPSFAs32d2ccYaAkn5d6XYyPq4QkBLi1hpgNq5t2rS1UJthNNJisYPFMxu2y6JsE9xBunobPQifpnMCw",
  "key21": "2D5MnzHmyfoj9dtJh9GRfU8sMpLhvVjQdFZsdwrQ7ZPVHSmMwy9Edop7Kv6V7J4zoQ9Fcm28YNozap1vm1MiHSHh",
  "key22": "3rZpN9Rq9ZxwL94y8Kiny8LVe9zhNZFN4bmMNq989HiKPnrigZYrYu3PozjpZ5DLg2zqtvdRPV5rHzXyG2jfrPVp",
  "key23": "igFQFvR8wpFHxY7ud33Y7aDj6JnftyG57N3ZqG8WwBL8R2BziVrqTwWVJxxni35hSAwLcpRouKSovFTaW1bphh9",
  "key24": "4F9TYbbeYmpZoSc7TNRQESrTyob6Ho58tN4kVhXetbvaa7eMkdLRQ6KKpC3PXS2CxxsfdBTUS1ok6zpdqnHZEyH1",
  "key25": "3UoTBr49ahWWMDkUBTKZ6thTHg3J2Avy4nzNvLm2biT5azTFn7MPbbAy2N6f92yUXg3cjopeyYBdfymQwbTMzW1c",
  "key26": "2aBEa3vfXUEWVW2a14ayZLoa4jzeTFij9KQuye96GW1h6MTCfCwJxBcoompvH9dxVSkQ9Py41Qt2M5mfBby6fA2y",
  "key27": "2wXAHwBN7jFZwZao6s8JZS7YBacV2vKTKJyM8MDzZpfmEzo7vqfK9V8wJg1vmNNaTabSXgr5oowxvAVC6snLcYpa",
  "key28": "3mvsQ2Em9ejYUs2u7un4zjQfJWwoqwtYEJateogptbu7MNcHVQWBvqMcdVFGwdLHKAon97viEeQVmRWb48n53ajs",
  "key29": "4NN9hxS46NgLW72kLPmxpiW3HdXX65yR4QajfGLRDTC9nPSFYQWrcwC9ve9AbXCQdi8LbpsAAX4AJvUvyBMP6G3A",
  "key30": "4S2bgw8BtfGgUR3USQmCY9DnCETqRS6qMZjczcq451LWcmL7pDp4ad2jvasdsR68Yz5ZWcNJ4L5KsK5LSRChS9CG",
  "key31": "jrxgYcyMqydvmba76RymjwvcAZieifBcfFSPSpMdkUYrNBkwAWqN4WbbvtfijSLyM3nYeKW7pf93Z7ybgo6eEft",
  "key32": "48gdQxK7DrJtJ5emRz13iVQ8mwJPTXz59tP5A9Jc4Rqvw6LfE2b2FdqTpEXXoLujRP2hwNshQC5UWnViHfxfWbvU",
  "key33": "3LEZPB6p3PHdwt1NCFU2tbQAkfVE1wK5CBj8eSZjhE1fbWyXLTfuwCKcLQJYo77xZfGsjpp7XVbfUKKxWQF52v83",
  "key34": "3yEyv5QsWEUfhZUpBKQDxwfJGoYfiePJyBpwvBQ9ntfUsnd2a5UsyY7zCWh7foTz71P4Rb9HNu9bL1b8gxubeQXk",
  "key35": "3yimQsEZmVHipaTezsFTDeM9SfWTqNP3BcV19gD5dQCXYQ2mZFozTj774Jvu9UPahDpTBmf2uxkehCTyWrvCNsGc",
  "key36": "5nhk7utFXwrDdLUCW1FPsUkBn9T9wg2AepSBNPQvPRAPmBuv3Fx3BJZnbujUxVL8CrMBqMzvy9aJKUw1AvjxNuoX",
  "key37": "6348s37bsQh2EUmp2845S7C3wbkKUUvaM6rTvbjzwPofDm5rCVtNK8JNiwYMpd1iidUakQE15N1DkVDtEz8321iy",
  "key38": "2o1sKTbduwBypJaLYcrKzkqg7zhbMebbT44reCbfTMQUMHtVQrMAcqS5ebwDvBRcxGD6aCXJWy95QpCYmHfxCgfm",
  "key39": "4vPGmdWRNP6jNo8mSR8ihgLfAUkytXuQjL6e7KWBqJJpF4HTsas7Xbbx7x1dQYw6WKmeQxpowjSWcFM1DRmgFwd4",
  "key40": "66mNUbiWYi8cxNYGE86R2UfUNwzM7o4CPP6x6X3TH985N9oW6Gq6zmpzojPuPnYXzvDiCF2gKBrMDZ28uX98Rrsv",
  "key41": "4bJSdvUgQsKd2DGggzWU2vW6EtwtvFL8DMEuMrQ44ukKJYqq5kYo18zTwTvaoVqV2izeaHs3H14GSgTCLvS5Ym42",
  "key42": "5zE8tUKFavttXto7Hw1guAawTeUczWvp9q1mLc86iE3Rta8qc13YbfngcVanxqjdnSF3KSdbkZuQZbPVPczcZWU6"
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
