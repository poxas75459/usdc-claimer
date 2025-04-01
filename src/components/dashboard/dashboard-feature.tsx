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
    "MFCJxxjeQbhMQ5uVHrHwpyGxVjvHiSEuT9AZLxisPLQZVQek7Hkx1ZjS5B52HGu5nYstm5DcLwuaH3RCQgKsKZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "265kyzqB1jVVfnpd34HqivattRN2knkBnPjfhtMN1Hv5YJD7EVyJetwiTHr1bqvutXD75iLzQcTXrEWugTirJerX",
  "key1": "3GTkS3vB676JiFyRtC4eVMRP7TUCuLaLEQegpED1qRccCCKpLahYYoXGHrHrKtAKatqvWihi7xHzQhtkSjaezYfu",
  "key2": "2U132RvTZvQY9e2KtVk1HGo6Ckn2fxq5vfR7hEtns46HmhXcTUYAR2Gq9VN2eThmQkzU3JY1x6QHjn2T2pLpqfox",
  "key3": "3r5FEVMh1jG1ZW4366xBbBSCL1Z97bVJYY8BkqqbdAeVYdqLNNG2XABmLoTEQUajUbbfGU81YYpj9evoHQSN5X5s",
  "key4": "5VdWP7WMWAk8LUyhSyeQGrhWUXijqGp9Yc8NXo84HHyzWeeygiiDGPpzyJoJVzWj1hDv3DLnozpt3B4KvEj6o85P",
  "key5": "4wBc6f98oGNkcSvLKeZue88tYLdzycwgMERcxJNzDNsowdAKqppsxhiP6RcVoYpRhpwJody2dtj5QWHLh8nPRAbL",
  "key6": "5S2f4UUGjDuBXWuaeR9Aiutyr81QJjnr4CiqZFvMRbkjqGnpyL9a2otQe5Lue2J1tY1zT9ZYzWzePSD3FKzYp9qs",
  "key7": "TUrBdpJtF9fPGWWWyFN7BL9yLnEkaHQ5LPnFuGBEQEfv5spQXJcLXah5DtT3LPvYU5uYtJNZXtWY8ja2s8NMpim",
  "key8": "5h8qdwVM89jqGSgToWB8jNBbTyor5WwJtAM6xbdTfyZARpYVaN1CNfv1nZ8xDCK4T6oxTGipxW4xX1ZWHcSFNKcA",
  "key9": "3fhY3BijJSWN4mDMxYnVdAVyuhonqEEwzq7vtPU8Ha5FbDUHt4yu6JverxeVNAYHbSujZPAdJhQUad3uU1bZMr8h",
  "key10": "4YFxFMkmQJBGr3wQCNeCsdUUaAgKQ1n4qP4AbJ3Qi6WorgHotFk6sDWkP3yyWhL67dPojzsxNmStYpJb61UmNipf",
  "key11": "3aBfxxovnmfySZ7kHuXZ94NmQvRwfGZqtizTeF6WSh6jiXYnWG4DcceJwhjoyFdcdhqDmQciEfQh84dAjqnbV4qX",
  "key12": "XRi4AMkhGqWAa8uwAbC8uvss8NarEZWvWANRE247eMmST6ZV24Yvv8Q2pRtobBy4oGPcMDf9jbFih7EpQcT2eR1",
  "key13": "2aQvsvHZznYy9vgfMjYTzLgy3P4aA3T54HCRDMQwVcHz1ihczJnMdQkE4f1TuuMfoBYgX78qFpzxybCtvPhjuKWy",
  "key14": "5Pef7E411rC5ExtoBewRZ7VSVf1tkWwjbcmfboezT4w7zG2AAFM6PAfuyJheyft77yyVE4WmMFQDdU11eNGaw7jW",
  "key15": "2ByUQYMhPwuik5s8UFuHJbdgkPvmZ381u1EuKxMoiygj8QCGtB8D657iKLe7m5YTMFmfyXoRLooFXY2cHDJjkxwf",
  "key16": "32eHD3bQRZAPLoMn6qerXaBvsaYUydHLGAvkC765fy6Wd3fUTs2BcczNXbJBrZTCN7DeQkuGJPRNpWesTBoWoWfm",
  "key17": "2mFfacg9B4WcMxsbZtZSn6Bj6AranPGKAJKtwTNe2qZ7m7Aetz3gMsFBX1Nzj9DUm4c92AkSoe8M7D6VY5yDUG6h",
  "key18": "3EP5jc8cHD3E4PHkDeKm3oXGf2DwnnMRLWNANeEpxkByZHmkFTT6RytunL6WstUQm8DSMp93icbaBwAQAyuuigD7",
  "key19": "5gm25cNqGJiN1Qgf7R8ocbeerS3exrqFEeQ8851XnaPQswiqsp9Poa7gSDv88u5n4SMyMspK73h584oQZRaJjhd",
  "key20": "4vG8suEfmuAY9txnHWesLUXJjEzZPfFusPwoURw6Xwyi2JTi4mkeh5H6xHey9XWi9dZnPFSoN8AxJcvxdbCep9sH",
  "key21": "226uziajHhDm9okmVynSoMFdpU9kABgHzqhB6P1CLV2YhbvFMcaXy5Vf6642bXeMeyRc6spYJbNbaWnGYAUvnjpW",
  "key22": "saJnsV8kBWgzXbNtww78fd5TaoeDjPHpf3ebwFXxQLKfsbXHRX1c7RpNfSLSpva7MK53cePpjRZgRmtXqgCTQdL",
  "key23": "SFXigHKSM4KZg32d7Jj2rVpk3c2tAh2LcS7TDm4SWWdpVvjTZNMndQ1HCRVQez8kc4uCEC6kmVw8igoQ4fz1oFb",
  "key24": "3FWEaH2eXsaQTTSAjLfCF7Y8ixxu55cNAEmts17bvUrVzkuuKub4tY3WMeJkxnz9Tm5fhjPPo3ph6CwNrPChszp2",
  "key25": "5VUN3brdma2QiRqCeygKcvoEX9MDxYVqUN9Nvi31PJXKsn59QqRhxwmSYu9y5Xf2gAjWFMrVn4xiknDKWCSCE1F7",
  "key26": "2Dcrz2fRBNFGQjY8bazzLGMWLkcY663RT4PtcJsdVYym6Wk2oq5qvpKYnW9Mdowb8UoQEpD8fxxRPGbkZHCcKxMc",
  "key27": "49sCMjbkSYF1EsRByc31uqFbtN9bLz41rPJVxAm4r7hZmBWrQhYUbagAZ9Ap4D91L6ijxNs4C4NhSXtdngUE2ni7",
  "key28": "2PXWcKMYA5Jo2WHTscD5K67ukMovLaP22cqD3TvvoA3PoaKdMJmyo3pcQRaqpAQVVEEuCU1NnXmFkGyUVmamPZ6a",
  "key29": "5WPrySf4bPLQPFTvQvhHTaTCMcMmgzF7X4Wcg68zp5jz63VaeMUA9GxG49TvusZjb3sS8rbyAiRti6YiiLHKDD3b",
  "key30": "5hqdENgYhyNo21e2naXbTeR6R5HJmpEUeauENWY2v42ZmzqXLQLapwWdQsDbWBiKaRSx7sZbNHagz51pjVvWnJYZ",
  "key31": "4NziyHnHo7cxkEp7xvVZfekDX1mNbCZk4a77jd1ZzGp1V9r9NXDyxAbEJujTGkgPgaLej2bcaCWhTc7SmtkgsmGR",
  "key32": "5Zd7y5rQzJEmo9hQiwC484En2NVv6qwDBnNyHEopG76Rnvy2HAYRCjSeuDeoh9vfs8H1EyPe8zb2orcjWfsuybEu",
  "key33": "5nWb2EbBG7pYJ4BAQEZxUFtifCnNwAHRDpubkcdk6QKw54dn6so7NHPscz1qLNzS42Hp4QSTn8txKuzgSHWsHLiY",
  "key34": "2WdfNptuBk6b4JLEJnRTHJtLP93BdNiK4tVjN6B96jH9XLYnRGmfaLxouiq3TRLUZ5AHun32b3xrTbA2m9eE3apA",
  "key35": "4crqiQBa2wGuaZTCif2ezFdfZGybrhgx5MaKTYTfEovhAUVpteUBHcVS6saM5mkUUXin54SjTfemMTR5UHDtvPNk",
  "key36": "fpf8xLVsU8RMCDrNsdh4N3SBvw1nySpwd4WWZ2U7wcVR78WLZ7rRBNeh87YLPCm39yAvmns9NLp4vu6eJ6ECfPS"
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
