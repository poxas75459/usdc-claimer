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
    "2jHnYRi9W62CAokmgFGVM64j5a6x7tmPvKK1xZsFLRKBNyiCAS19jX38h6WGpia2TGQzoMPt1XsVTkDS1g6anrxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZWY1H8BC5B2Y2NWUj644LNwBoZ9f2pBwMhosCHLLb3RGMoUucUgVdfvvK1xC1K8AVbtUqtUfEDPsvuRk5FdcRv",
  "key1": "4yQGfhqkck3GRaM2y2fmiTFXVSBnfJyTYPgKZqnyyr6SN4GYDDnkV7y3jvL7S4E2Hnot3HJTr6WJ9JQjrLBBpx7s",
  "key2": "X1WY3Lwsf5snaVA7KinkEACEM6P2DR1fq6tNCpE9CsZC4EfBemNKDXT5RTeoVPGjhewuqQR9BXYz2HsqJ1MNJpB",
  "key3": "3y1Bk1qTbN4YWXv4SWHNCw3HMtWd8EDFkk3GEhRbDdxGP2oifh68hNMUT8br4hqwMhujbDoJWcTSqSvf4hdgk6nW",
  "key4": "584u7FxhQq3ykdD4nJJ9723g3hxSkKWEFjcbFJ3ApiT7ngz3ciQdFnVUrxZNYZ7GdGLXrSn9zTHCNqMrZHkwfN2a",
  "key5": "4PNaaQdjpPaTRA5st2USmmy8pznxHq1qLTvfENTJiZ7v2xrXGxDZzYNnk3GE6A8GUC1D8dAZ72AbHHDLU9BXuuXP",
  "key6": "3pkZVSqzuboCjUDPdJe9DbERF8wnx43BbyH6PmANxDHBGfU4WnzKfqLEVw7rWjWbZSiGaZ9sAVsoYssftZUGiM1D",
  "key7": "5zvFgaeNafCDzkfgBriAASCqg2iCfkJMW4ZEvWJ1y37aSUKcvjJEj1JRz8XpUoBk18X6kFWPemFtWMoRfWYWoDiJ",
  "key8": "4z8sprE5mEi7HwA43C6RdjAG8299QpPeKcK2dzQ9og6AcYaqGn4sVcQuUEEu8TZ1QVZZMvrELD4yAEEFkXTgokCU",
  "key9": "4ioNUueGMYRUDvN6xBvVvpUpZT4wMjMvjYogfQ75rQmKJG1Y2us3HZwpe6b92vXhfvkr1Y2id4TPfQ3G9FVfJi8W",
  "key10": "2cFsZYqTZY8gu67pr9JzkVUkhfdLckZ1834J2aFBhvCNsSgfPP9Er6mKkfcHR3yT9Qotd7zjZANM5eRx23J3pu8v",
  "key11": "54xMJGnE1RzgWRU7hMS6ZnedNxtDq4CDdXy1skLvhzo76EEd45D3PCJWHeEM39bzZLxVQwDi19fSMcbjCMbtCaCK",
  "key12": "35Znx6dWy8DL649hieEdRemhyEtmDrpo9CFTJrCM3yNmvbRmNoMLq6zVC1PWCh9aXVFHCxUoexSsum1YSrRdBzZH",
  "key13": "126znECabhVWkvXut2mRVNhMz6VpZYCwZkcCqeRPgPZphzNzrgoNPwTH9krs1Trcp2X2H1DCvmPBhSfY3jyQpLVu",
  "key14": "466KwNVBaHxJS7iGZNnNKtMyvaNo7YjJpNj8Yvam3wRsgEcJNw2ohVV1gXS5DFhDyn21nm5wpEWhe7YPxh9A7uWX",
  "key15": "3mgrS5dsKK8iHvyUxMgKX4q8Lv8sj2CKFLBftgq4WwUZpCLnhoJypaZa3CkzQ2kLY982DxdMr8mh5T3PRzmyhg8Z",
  "key16": "33oamqf2a13CRGZ6c4tBZW9dxYqKTwvzNdJ72M7i1qkir95ALyrNNKWBcviPNytNiMPZdGLERN2jfVPm5QHK16jV",
  "key17": "5h5dspJqb6ewTfrGvm6Whb8Fp2iekkYaRDQMfePpGybFGj1BwaE4ZhNRoC1Xm2woTp1pxL5JcXV32RgqDjAdCxuQ",
  "key18": "QD8Sc1UuAb9Bcj9HuBTsh8whkTN9hc3riDLdrLa8tQXKSaE7tpKtXaHR1aCivQNSjk5E9MzxKJyJYuqLiGHzMG2",
  "key19": "2a5pz2wLtGWTUEV2PvnAFxt9nbGUiWrMNFNacrkLFVdFKs9qTFEM5f58GzFQP62ufjGWP7EoNfH5psErXsTX2v2w",
  "key20": "NmjqDigmxSBDe6kMJwsJXZvgcZ8eTSNJ2npVX3YNiBiGkbdeEfTPAVXXkgG9Tcmv7LsiUK6q46pVcmVDQq32dSZ",
  "key21": "MKB3zrvmQp4AGnUCkDSys14oAHVav6E5TCmRTiPicKhMsLadYJ9N7dBhYTuyBdw4VS9Poph9iE8M7L2fJ37TYYr",
  "key22": "zpNJKnEhU1A9WXa6AK5rYh1jgx19DSrV2negBQQpFKHZeBEDGno5gdM51f3MCycdjgU4CemE7ukVaH4rtaPQYqn",
  "key23": "4zGekUBxRBz1BauuZKLvrSgbFk73gborRHzTsoAPrYNRuAvfZ6UuQgpMeenzoSTUn8Whv8VsqVTCw787GiLMgSbv",
  "key24": "498fJgpUYZL1FEUi7da1BcbR2SDyo1bWmRZatwE3dgyrctMzA2tRHAZ4abAxq8RNjKGKG1pkEYzirkTmfyU24k9u",
  "key25": "3A99pAAfbvUGwXR8XNtpEidgG3hTuJioGcTYwvffJiCb4kujEuBKtCi6hHSnk1dNAR1rCgyodT1BrFKGMy4JyC5s",
  "key26": "3DYJWpZw1qGvc8Ut2L2tAeS3KaNG3BuYdzSpFTZGEMgYBAN1xh8Sx9PwCFn6qsVkyoCSko84Z2a1LMQwnsoJ84Hh",
  "key27": "3w6AgEZ6mAwh4mKG18JS1oqdN81JmkQrbYSL3Box7jgqFdXnPEbBdfeNALjmotDzVC7kYKDmvmqmz6iAzfRyHhDb",
  "key28": "5SuaioaVYdFPzgGfc5PWXZzudXrWkMpNo4pdE49bMhPdz9JgjjfeUUHc4fWp5Tu1Dj9LsGjZBeq3B3pEUvNJyxVm",
  "key29": "43HZ5qZHn8DaNLzQNhfoZiHbcb4o3auNmE9iLeLq71AisrUQgJULqNcF2WdwSqAgftzPUX3UJvepCCErMKW7BvKh",
  "key30": "2fKudnVNy4EfSpDEfHxyRqdEDHotaoo7cJaL6CPWWJwaL46NyR4MXc3L1VPBfHWeKLCfwNcNFq6zq3sq8JKg6R6L",
  "key31": "mruY7HBSHfPdqTL3XMQ5QDN7hmW1afe7z84UZRSFC6AAkTfmPWQJroLz5SJgkwjXQouxWzY69tPJzkTdqpqdCkL",
  "key32": "2HrGjDymGawW9BJAzm9qm9HMioPfxi7JYte8Dgo3QEPyoo5m9KQCuXcspR1LJ6kKvscJ58ABmMgBgCYsdshDMvWn",
  "key33": "27ZTr7JhQb6SZH5bvTBnCsrws2JAZRtNhdaoN9aT9yakRGYg4f7AiSNeRz6UfH1TEHKPFAAxeuN8zP8tFCSQ1tD1"
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
