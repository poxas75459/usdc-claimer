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
    "4e7oy1VSVckcsJqhpp5SphWc2Yoen9ZN6Qff5e8rj3LinBn7uyfurDWjLRMsZgxtCrEVcqvm5kmgiXpdAcPKh2rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akQjcegriTqaLpfmDAuA933mK2Z2ycFyzHjwTxZ1xorZa4Uor7gd2ULkNeBSzY57NxZK4dKprF6knff9gMMgaCf",
  "key1": "TWc5FwCoanaESVJewx5EP1viNeMWJbTJ5JPsBav58DfcDumiWG2Kae3pWwJXFsrnAtQgLv9WkvTtGdZWF8uheKF",
  "key2": "4rqh2PHoQcSd3BVbU3kJV4kkTmJXJozz6Js7in1DVw9MgRdRJaKrahsYFac22XxuBip22STxdfjbrLnEkBFPUJcu",
  "key3": "KFuDoASbc39HaLmyMfqFBhV6aARQqBerWJqdzsQDBLa1Bz9Pyqn5mg3VwhgwhhEvGakRRBc77PrCRQqWB5KYQTZ",
  "key4": "2T69Bs3oKkAJrjATASNPCbjiWdcmHsZt4TuFM2RA4y6U16HPXiH5LkVjm8HcythS3hnTsXt59reMmuBSwf5aQXQz",
  "key5": "39L8UeAfJRVvU31QW19VhReZVcJQXSvvs5Zam9dt97J4M7Kzyxk5a1H2JLkdmCAmD3tQk5GfGBBBDKzgoe4WBjgn",
  "key6": "4CxWnSfB9idkDwz5xbeVWppGwX5umFxY5fdjDu7XFCb98vGZGFM4zDF7w1jS2FS9kjMfpyfdDv2PeYcCRgSX768e",
  "key7": "4m2mdRZzZSNKD3StQiS9dRpLiwCXp2DLURPz68QQFyuXAyMhKSLMN4rDwQAmeqc1tbxbRSho97A5YRS69psq7QK7",
  "key8": "2jVPMUH3zNvTFpPBzHg5vvx77JZVJ6BikBTAfSPDTBahdst2nD1KqwmmxQrZnFzPTQD8WjKz1wvubsQbvMoe4KBY",
  "key9": "4ATKqkaUqXFWCqibQQ5DbXwQ85mGsSis6AeMAMbo6LV69E4qnJUoq3fEUmVJXWQXLzvgpQmSBpwpNw5Q8xPfqycV",
  "key10": "3vZ2VF5ZsznV3wLBDdcNJvgZwqjtwZKBrqXE4DgD2Jc7FG9m94YL6Z7aeXFiqHM8h3j5mTQmteYWsDdftjZECwZb",
  "key11": "JMw4EYbwdhFW66HbsBc3cbHypcopLfBbZv9Vr9kB42HXgkSPwCBBAYp9KtkSfJNVon74spVSTDdTtZ817tyLXy3",
  "key12": "3Kq78t6C8Y7crH6NBVwH3rbCqBmnqPMHaKWuNs2cq6oyqyy6fraGWu8nnZwHY9uNvXASuSEEkumMCyvgmW6j2Ddt",
  "key13": "38wuQWqE6ihxiniYtyHwYr2z2XfEVyXChCgTZFnR3rY69xNXniSFq7LZCkd5HQh6apHc6j7VFmAQcTTrDmwDvGi6",
  "key14": "3SL6ieEMwDb27TY43Fc1CdtbeXyfKbKjR7mvtJqcABt7m7qBUCPbLDfbShWWgWuvdBQ7NKx4soPmcVGBh22eVT3r",
  "key15": "3J7DzUuz6SYb5EvpsCYLcCEjNmzV2uhFerNrEjHAbhkDxJLjX8nKVsiaGWvyGs9Dd1Sk5uNB3SJgMxwxcgrKRYFR",
  "key16": "2dHK5cgkaoMZQBtzVSke9tZWJ15PaSmemvVtGDjRRYBqrqyDKPU5xNbqzAkuToPrjNq9FXjhsH5VxqpzAMQN4nSa",
  "key17": "N1GQVxNF4XvKCdHBtvBXG5dLuRU8un3kmgHoTrt57cKk4FUhna2LsbRyZWshJDD8NwwXpaZCuT3r7vmu8wuGHYu",
  "key18": "4JHSmMMQtxJyYG5jcvFvdQMvw8dirmUufcFs2ms6Kttqbt25MYB8E2cLepvXwywVjD8VDBTyxa1ADgJHwSSF6xwe",
  "key19": "3UWBCZjvQxQS619LLovfAre339BfcyBkFFrThBJgGWHoCTMybHqvE3CvEgbX7qFwjRrcECfCNPWbA3HqRB3as45t",
  "key20": "3aPFhFVXM4NsWkmbY6UdRqXoFWNDaapdZCw7z2CPBxm7JXqq9RzsJiDRNGKcEU9dPauw7QVAG7UhVr24aLiA1h6o",
  "key21": "5AoNxxhp5tGAfrh9FyBgUugM1uxQTk99SdBdnq9CPdH3HdMYzVDFTz3pT8yjuqxZJV3MLmuB1cbNttaXyCEAtf98",
  "key22": "3uj1fdrHNWq7Gu9gyJGgmAzTzBbmrJc2MijMKgwckm8Ge2iL4x1KzhENiRuRc4VADMeRMuqYiRw5aZmSFrsdpv37",
  "key23": "2ubzBo2y82FAwpP1RThPdTkFvWx5s7K2Bf2C9yi2tsNfzy85mDSdN9EuBK6i1L475SHCcsHrdkLkAF3buWprsun1",
  "key24": "575PgiyLJquBANdG5Ymi6BSTEXFJBQYfAMZvRbqzQ5EUe9MgrYVmYsk4upK5MW6XUTzBMbpKEyeHEFUwFLHMeYmZ",
  "key25": "2BzXNWHU36Q5pxSvV3XnBi1fKrQXUPEhSn4MC6gqpzLhgxqTTM1ij6SueQiwXFwYs3v4ypAErcFZoNxnNn7tXHH6",
  "key26": "3S7WhZ5KakAYvtwTWjE63Ch6kCD6AgLeoDEsyE6pb4ZVumYnmVbF1F2TG4B6LqBRtzGPXHc4YK4z7r7fSXmT24kW",
  "key27": "5g76vEorf59zQoHhpGFSeGYkcmexRNygLHqZjzNRuXKpzmhS1pcbdeuBnybYQ8Aqz3c99HtBTpfTzDr9uzci1ySj",
  "key28": "BwxzQC3paZkTAPp4zyTr1XwqNhHTn3k7YmaQCCxfHcspkD8JJC77nt3jZoMnWWzhPKYTWGPGHnHpBpQmnkJeW7e",
  "key29": "4994PegrcHP7XvpmSuRKhAx2cQnTiGcYicGxoegj7vNWVYJ1rKzbdyHsbxN9rJMS12jb8FpF3SawtCTvACE3XqsL",
  "key30": "3AKqWhZzwmJ7HC9YpbkVHLousDZNGw6ErJTf4RbRUiz4UnQCToAB3WXF8M2VY1jQXDSs6wLgtDBjgnvZfWmVNQDv",
  "key31": "pnAicXouxWQCZcZGQPmXHBiaptEdWqVHHCW3dSY5xzvKvNE4sgXoCbM9Zqtb21y2JSj56uuh2ySNJssPQM96tEU",
  "key32": "5b3x8hKgXkjGDJDjTcqSJCFY2xgFgg7WG5D87BSvqEEkpGmh93TNwxzndHNJ9NutBAx3sdri7ZLYeXKn1ZHVWzMB",
  "key33": "4QcetReSpLDakSfPaX9hFrbmc1x7RWigmT5QJq8ov9FCsC6fRW3cc5x7qcWPhfwwAdueA1WGNx82ki917t9rWz2S",
  "key34": "2zHEjun3VY8hsuA7BRM5zGvb5M8MD2qEFMWtgtGosVFGY2a2MGPhKTRgYtpRrMo1PEd36ZNiWTbACSXMZycqhWzJ",
  "key35": "5imhafkUVabQBZAyi1AHTBY8rRs9YBiAqkjogx4X9i1P3x7p9SKCKkNXgm14q7mqdZsfZwUiGvrPudsDuEkpgfiH",
  "key36": "3sbL4KwfiM71wF73xFBE5U7Wb2zLdgYBAjka72fKvZ5wmKtgHTv9Dw43gtsXkHT557EzgMEs6dUjzmkssHDu8wRQ",
  "key37": "2iYmtYtpMAqBW9vLUR7Q8iEo4ac3qebT3icvuEfVk2AqCrSirfezrwNHCsXv4k9icWZ6fcJL5Nohozbpq7iMQmqz",
  "key38": "3WoZboneopd6ozvednu2HfvsuVVPC538fYfPo7a3nA5dYFKmB7C5cmwgunGkHp3kVeNk21vNcXaLsHZZzeFh3xD",
  "key39": "vr3ZEFkBT3mRSMDvVRXXL2kDYB1pADika8QErUcHEG1Qy8nGVX3kWKogvY6VDWamVUVFW1z7eAG4k85KKxFeigo",
  "key40": "PCEtNj9iTFXSLuFzUJBY3gVnrhhVD3DExqmDK2dHGkGoapUXxRyEHAAVqzupS5AXcp3mg7ax1Z6iNEsBVhwy4MM",
  "key41": "5Z7rWWveZGwTGfdf4Y7MJfE17zM19P5kW95V7MzMCe1EdahGMur6QDSyuwUupVGMuHhAgDo7yPzpJbYL14zKT6g5",
  "key42": "5FgvGSVQZwiETAzrB7MHTtWkGMaZdYGDa8Lumyp5Aee8qdw15uaEw82LHtqU1Lz7SeMyDz93WvxRYo1Xiftt2kFG",
  "key43": "5U88DJNfW5nk3EbuLVLi2ADnUE4tpFaSy21jq2dE5PtZtdovbA7A19a9vCH9VcXNHbmz77ravG9DJdsjhBpJJbkF",
  "key44": "3GuV8jPYsXyAeNJF9XVYifdLaVuE6McWrmUSPpdPoRs4B1kBViAQsBihBLNc9ZETSrq2sCn5QpaRVVf6kJehvJuW",
  "key45": "EDb6Nnn8pdPETnAT3ZJUzWMrhmi2L83AdgwTUJgVdkv2M9XAhuXf3uZZtmf4iRdm3cggHEABp7iZAjkcUZ7hBhk",
  "key46": "2yXCgJAi3z6mf1FPogBdSXdWfCiGzXkRXnjFpvJFSLjpB4ZpT4ze3wjBhRY8tCp7vn1Rtf6tnoArAQhfbgr5aRWC",
  "key47": "3K2pPh2ZgkrTpSYPmdLqXg5KvUeA24eSMbNFVqLdzngsLRE4RURx7B4JzFZf7AxzemS8CcEXSaSZPt7CbB1TXvkh",
  "key48": "k2sVt4vR3ddrSkHmHJdn5WipRQav9uhDHLcMYN6uWRsELYfUrCEpi9qG8v6X8GiR8WSuDUpSissjsP5QmJsrZRT"
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
