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
    "5UBAoCy6YCLk2DEX1VZMc4pLWXdN8edaPRZXUosViDXJ3LatyMBxsQq9bVREeFCBqH837B2eU5oobCiqBpPv53WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMJY235rkEMKxzJ9tqvtNzELBnS1aR2tdYVZHP6iDGTfwxGmjKU3iy5Ma4jVYMKmD396waeNwxfxZ3FLNcqCYCc",
  "key1": "3m1RqhqY8fvWziqPYu8gbTAufMC4uQzYBemxSvWgR8veB5N234cF13KWTnLbcCfNirtpMuBSrsF2QQ7MsSJuFQno",
  "key2": "ewXHxwydkCNFX5BwVyomArDofVihLaepbPKMDwBYanZWNMEpjU45QtvUcHV8W1fEtdguzU1424iPjcnhKBNMdM5",
  "key3": "5Ym4ZqLYdqB8FhwZp8nbSoLRWGaCo8dtSym7ZrdttF68SAsvN3E3nzCnaqZNfuaQUJhhDtaye8F2Gz64LATXwiV4",
  "key4": "4V7VjNtVwtbLfM4JmsZrYTh1hDsvCpLUA19C7LEX8TEMbKVVpChoTyFM2Su7uDPAQDEpkrVt6yMDpudhLgW9DjPW",
  "key5": "28rqjwfBXRupEVS5Ymb655rabFaq5iS7a32QECW3s8wjYVa74Mg3fQRfT7hGMQtvzmiN59UnzBHSKc79KW95J6vw",
  "key6": "RxAfNsBBVLCjPtNWpCAjnZShTw8TkRNa6AEtX8RtBzhj32NmPfDjm4hp3gjdt9U2gBXDBtAqCZhynTi29oiFbin",
  "key7": "3Kypea2htt8zjHvcgnKkUfpfM5NZ6NK5kquVmAFf2EmpyjfQ4ftTMVBxduaTeDPM28mL1BfhwTrJGiU7e9pQhAPG",
  "key8": "2RjtqmRe5vjxasvk7mdoEtPSr4xkTbBBovkfpQ5FcrK5TUNnjXkHSE3s1BiThvtduwvWrCymmQyDHa3dLcGSRyjf",
  "key9": "LCw5LiQgiz3V8DGFbYFWeUakZSrquYJsZiwSzxXJtXe6ZcGG6oZkQogmc16grgRcqcgtJQ9NjmU5bnMAaPBdi5L",
  "key10": "3iwji8yDRw1tRTWdTmk3SciZXQhMnfiVT3zqK9b8Wwa76bDYyxFG8JJtEcCXf85PsLgaY9ouPRDAEXkU2qHeaeWa",
  "key11": "2x9M6cvUwoobbHxDJzGCmwcLCx5an2fzFXNdDZHm3RefqSBBxHnGWegHUsuCJ8ofajXSCmkvhiN6zHJH39QuK2E7",
  "key12": "27AFkog6fSqMTTuFBeUbDdH13Xupm8GRwogzUtjPn1rw9ZUZk61d7hFR5yG1zy5q13QmMRfZTwNH4HunhhYxSGuY",
  "key13": "5NCnWBhgydB3EhS8JYhnjg6Gedqbf4NA5t4phayop2HLu29m49rKHhAGeKUDbR7R2gxcRfjxzAESvxSKFBRRftUc",
  "key14": "2Xy819XxR17LVSv9FSVRonKBgcjpczgzfvW8AXWU28LQrfvMJeHCAPUukSRB5wwTP2GRzCC2gyP2YXFd8LdaBFjj",
  "key15": "2xZgF8EQrCVyfSa8xn1A2hLHUTHpg4m55aLM5NZaQYJFwgGGv2cegKrLS9eGBexrPbmd3UUa45RDVmSo7ZSAUg7C",
  "key16": "mHWNW9sFvEPgzRUFvVCRMRaYexpEnptAzxCEghBJLvB9An5bjuYgnDGnatJSd2EbUyR72agxBECh1gPJWHWoou5",
  "key17": "4F4hxvMjet6ndKqMuSy61qQ1E8a8hdimV1oynQU2TUjcXvMc2hnnHydj4sTkrxs7vGoc9A3t85o9P6T8aRYDK8Ce",
  "key18": "4bLHkfaxgJ1acjoCDQndDaeiT3zeVzjoz87ajnzpWyU6ynhcYyh2tewVx4hVjMb2TWaSqgjz27R3zKfJuE5xwdNy",
  "key19": "5UFTQAifcqjegM4mwaA9s2qTZSn8mAcjg9yfVtomsamWoYhYAz9w6UDjirVPDSyjBKTAczSFPw34zbBgg2zJNdsF",
  "key20": "3srWoFaFZxT9eK15tDBa41gCvphjFo7DFY3FZax97EFJhgrc6Zu9Cfy4hJq2MX6WHR7Yn3CDH52Qb2jsXF9uLR49",
  "key21": "4yQJKV4BnDMciop679o75D7J31a93CLNJUifTH9mGMXzgzkA16BSB3hPmJgWTUW2joQQyADx2mENnvKpb92s4Gn7",
  "key22": "wWfM9T4z2EzfCByn1WwAQXxEt6biQwDNqkmJGBGu5PGYQksUDL4KwYDoFs11rJMPJCLvSB36WiyXgcbjsT4Ypyg",
  "key23": "2MV3Tqo92xtEgzNtNzeZcLfnBVYUCsQa3kZHhWLwccn3mcLwreQymJn7ZHSGHqjFewJPTAYi7CSRd4WWehiTuB9U",
  "key24": "4oUBi1ZCJEyPKmPqzn2CV5PQsLjVb4SffP1MFGZkPWKRVaWR1Y84MvKbDbgsJzF1HojJzsxT7N8bYWxSPonqaSEU",
  "key25": "67XbudQbmGaQ2gUQvpE3Tcbpw5sEJEuMPPDByzLmBiaptzvycQq2HU4P5vcKMneLKFjSvgKQ15ZRXSajpRs7S4XB",
  "key26": "3SVZDn2Qpc8NBzw6mPDUDirEvxaHxS1vnwo5yxYiL2qZcDZyFfVaHcnBxZJM3j2SMwPh5ihdYJvk8HNLHMHeYiUD"
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
