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
    "3WF4dK1vWJMbAkTqEyHebocrybqp7RpYjzZh9CvXX798WwZ7UwReAWe8kBWUbywEZDWHVxFhFchfnHLkYiaeqQpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FcwvXgzViPV73qA8cPrxVYd5fvLB1Q9K4tj7ttnvprmb3SbHmomVJnZjW42DhpFjBs4WYRrFApgoP6FvFvm76wY",
  "key1": "5tHAkUMH17W31acqoBAhnWBAPwDWMpNJpkmd5t2V9mdga9Vsi25Tg5VjkRr3u7KbHaKmsZPwMNtNN3D7euoGymbK",
  "key2": "4bGMJ15TmzRuaGssE9dWozpQsqEAEtpjrvRmBbk2ewJSyHrGJ9KTAEaiqynnFDshd4Db9yyddM8bzaAaEGGMDo5R",
  "key3": "2eXxyoEdCsXDj1Eqg3fZ93xAZwcUGNwTeZgviJkjJCeqY31oC7MRCBMKMxgZCW49qU6r4cDsGNwqP6KGaWuu3btQ",
  "key4": "3MQCJpp4QUKmGfB1JzzPrkcEEUsi8zeBYiaR4fohDxh3E3oPQAZF7ozpR65hecxQKeqbYVTCu5wCTCcobEucB2Bc",
  "key5": "3THosBuZZ5Gsz9RhTmSKkpFdZV8MBbrnXKAEFVGA264zxU51wqzFCfGc6dPQpKPFeceFwu9n3wXj9M18wFfRuWGy",
  "key6": "3qF9xihL5jp3YG3TQTzpFvpYJGTsWPxiJGadzUfzbhoXbBWYhyHx8yRwoseD8iFHNgPPS2gSzzERzUxLHbLvFD8q",
  "key7": "4GYky6cqdtYdrwf4MnYepbdkg7289LWCYyGMHWYNQMS3RBupvoEny4C4pMtxoRiRCyzdRWi7mdUuUNNTmDAxK5Aa",
  "key8": "3k8eHcxz9mzZg3rethFGd8RVvFASZPaC6DMsfzUDw39V39EtuBWMw7BKwnnjn1m2AsmjQfyESyGMM531ByAhfHW6",
  "key9": "4se8PQYPZrHiGy6aFgmatPrkd9gRueYeBoxrAT4fd9Wf7oh6VJPsEj2bQix13yyiuxsezTbEEt2QhPSLJdhaJexH",
  "key10": "57D9fduFLhA3DF3uCGPajP37TJznjdXeZVcyurJVYLLohZfPifyB1J1YACzARBZLx1oyMNv6k51WmDSyVYCckc9Z",
  "key11": "2mSZxAdUqiCgXYnwgsUQ6AuN7YopaDcoJtkC54irmYMwPLyKANMonFT512ERxAqMgng6zS619h3CtcUBhCzGzScr",
  "key12": "3TvYex3tSbH972LAFepEPYrS3TccRPxp3M7i5Y4uEoNRPKe7LR1jKMHU8FCwciWLP95XLkTnfv4dP6X4SHj8Cf7W",
  "key13": "2HJB5zShFz4VfXNmNsRtw33t4fujdb64T8vXQvbDx64aNmsbRcGYawBtYHcLU2fL8P8g7fwGAPL8Rj1NEYJynzyT",
  "key14": "czmxCrAXZfuvNMF835bYch8b735Yuvft48w2VkvKipLLmE2zRG3BS9xxiJBgHxvz4ZkTyykurrWJi7fmjSFsHkB",
  "key15": "3koRxFbsUySYun3ekokFv1ms1odhqEMPSSJxVR2iRc2bWYT6vxnrpQ5RcipdmKF1oDzwGdHdokmVKres7sJyqtMp",
  "key16": "2CfnuF7kaWprggEE2Q7mgd84QBmFgNttV2QXEWSGPqPpnMgGH3PE2tDhkE8XEp1WgCP3NDaFQQmsC1fGPJCwEK7m",
  "key17": "2c2yEDaazYucZpNCiRG4XK8wBTmUenkEg9w1Bk9t3KXxiwcYTruGYqYdCc5NisfU9M47StHYd5tf7DDhxNKZnDc7",
  "key18": "5KYD5SVygRQ9ktWB6rbaWfj9R86r4HTxjsDgWFrtuTDKPNWr7EVi4mAhDVoxHn8hmaHQauYYsScWA66PmMjZ1ZKy",
  "key19": "61Uq5GDBsQmiQWUHCxzuVYRJwqxsSnbj1vKEcFcZVcXPNBWcmtWwaS2pUwsUmZpYVKqS9USvPxBJbLv9wxdGTPUZ",
  "key20": "5uNwWGuJhsksuqtmcc1oiB8fMHC29zzvB7M1nTuXgCWn5CgYC7Q9Lfrny4yC1NbXaR7FSBy5HWT5naPgqfkRJKzy",
  "key21": "5ZUVtfsaVayTi9e7vDXZStGHVi4MZLRdMvf65LBjSLoSnyyQG6zLaQbLUM3sEG6rfX66KZZDUkKqBQxBdui1sd9J",
  "key22": "48Z7nXASTaVF2vLRSpyw8R3nHw7FsHbW5j9hEpDsTAmA4Xn2bgYBqZ2VSXgMjrhAmw9DZtqQLCwsJBhmRXgaiTyD",
  "key23": "2NYqbdMgAJPUF2FS3wRdkAbLoGsUnSp9TYKo6ayWsJFsY1MWYnHeezPTZ9JpSoUMw9ssNxkzAxLamhr8Jmn4GxRf",
  "key24": "kRyBe4Vnc19hH5JonnjMAaHny683rJuUtt1Ew8BUorMTjayq3uqc4a9dNsu8SaQagMzb1KaiWNfxik1eqJBNzrU",
  "key25": "fpw2NTe9tN8DEzpjyUgp7VPoMSHk2W56DthHLKqhc9TQfstgmxj6WtifXoQsM6nLVf7AYhN7siBgFYVuq7mzKYH",
  "key26": "56ev7tKyJBWYnNNY3cFP7RqLYRWRjzp3G9PHLvyBeCDwwEMhCE4LaPV6eHsBDfHYABaBmzwPwDD7LYZpaZw29dxM",
  "key27": "2wc2oiPAaRnFopZv4jAAwGXez9KfoLHPinW88nQoyigAzHMM41DqJSgsh87UK5eufC1vkzddxbGx3o9a7E33UiPf",
  "key28": "KCoDT7DF3Va5XRpsp2cL5UsaGky2e9p6WptvV2qwTpqyzdVBxdgHirvXSFzeEXh6ed571CEiEKMpELE4MJU2cqS",
  "key29": "x3Z5KGwkMfPqFUoHc3t9x6KMyYKCG7qasAG6dFrj2dkVNwqLEfRikeGYT5y2hyKJgBymYKoDfzLcFkD3NxTTWnt",
  "key30": "2CobH4sda69ew9LgprbhPMGSw8qD6ggSygivhX3QY4z2W2EivT73eW2go4ajtjCnqH9gRnhF1e8LT6h5RhGS6XxP",
  "key31": "9EBbgNbsQFziZbHDjd3rGgy61364NYzCzdeke9otdPNQzfraGEKV7UFZUm2nKMBM72BTtrSUWkodVbepJYDdHxJ",
  "key32": "nzs8Z5on81Z3zJzcMdDivMDCeXVicLWRa2wrf3q4htUU85iwQd1zri2w7Ze5kWecrrev1EoQKSa6QqAwBKbkstH",
  "key33": "4cT3CSNmjh9KouKHBaDgYfzKRv89gTBGfZxtVtGwBHxCgNAAZnnGgsHxfjinCWruz8GZTtuGE8GfVwfW7mJfXgN1",
  "key34": "518E9pNZM6jNHGwyQW5bUjJBQrA3V9zL3ykNqadcDV7nwPQvYDx8vG21Sv2zhLV8pQxZCQWkJ8HEA1HCc1kdypZN",
  "key35": "2zjt51MHQv5uSZiyMtE81iDWcApU98Pirbpy4CY1beqDVfKkx2kfuKys7ecWHzthsxKoSusAm5WuhCwWooCn6mAK"
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
