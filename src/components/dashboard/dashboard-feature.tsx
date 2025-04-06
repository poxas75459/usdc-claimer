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
    "5YDxFq4sNmgvS2GVA427tcgZduQWY6YraairwP97RawoBfxSmfiYWXoqH4D9B2cTPvtxkcJmmDyNwYYA9Qna6ekB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5agYkL2kY12qqUZwSAMZiqrPvHm3j8iMcw8gewuVsPRGNtKvES5pGKzfmsTQVx9noD5uR78wTNbd54UVP9Wvb643",
  "key1": "2AyqqRZ5ViVzviKF16rFsR5HaS7WcPpMmpYaWygVfrAdxAe9e5arAP5nwhkv962kMWcvp1LbjDyeUyAkxqfsPFDx",
  "key2": "4v6YX2K1yHSN4XXVV46PS4wkH2Kx2snSy4o48Kjw7bsdAhdn4QDhMNwUCFnm9LFeaHKK23neJYUoYFw9bTNP8g7",
  "key3": "3MLUc3rgE5JT3rgGcD22jMnRm5hZf5hfnhmFJJVx5kU47MM8FzFGXyfebpktaeffCDfqeGtx1oDQhrLpb4f5oATA",
  "key4": "pfx431rLaxsYan33UMceDhTpPJFKdU1aPGkb2jDA2edM1Nm7A3BtPpsHCijmcXfWBH6hzBMZofqyApuFbnn3nKx",
  "key5": "4SBB8ejZtxKYVwkdttC1joydXSncc94STrVVvseVYbicemEySWqfAvi3rUVfKrQags1t8RNaVJxcdFxHpGGcE3Hv",
  "key6": "h6kdKy9WvyhWcvpAvrbGssrUiMX6zMxjaPXMq6bGDetx3TB7k8dv4JeHjENszegiaimdgFfSwBtUYbzqVV1ibz4",
  "key7": "zjFLGjv5kFnjr2rTpPdmzxzXyEoWvUYr58Pc6S28qXSToy96bvr2RBNWD9LqzBEpdJniCPXa517N88XVanfKgw9",
  "key8": "3kATWjUXRxaru4Yce6CrNKnyft17HBAhpJtJcw1bqaarWjPnc1qELiPLZo1nnGaQmRSxGjD2xrY6jZzZqggesXmV",
  "key9": "3zyrdXjfx9fDZ3wwcF3YbLhhThFUjoUVEo43t6qevzfszBQ28mUf1uYYkHcb8sNjLoW3sQ9iQjCx9vSfaR3TvkmD",
  "key10": "7j66ypXG87AXR63ph8kU9pk8LcKxmSEcp3CfzUpwCNQT7kzgPMxYMEPS9E7vVo9gaBS7E9DXdniqbyDRHwG3FKd",
  "key11": "KgawTP66tfHbrhqEDZVRq8agqY7pfwWCwqzDXTiFasxirBcX8XDUnU33z1Ag9c1a4AzvbmMNBd1bnTdDLJgQ8Py",
  "key12": "LLNUmA9hqX54mSVB3tjAeK6YiYNjxVHvpYPFFph8PscWJUkCDYFJx6iaLACqQjpskHNCmkzSkRsTh75Nq5jmGNr",
  "key13": "3n4B6N8TiA9gAg5zxKJhSZwfDbUuNQkv2LBGcqZTamHMhfm1we1DVRpqqFDcA46hLMU9eTvPJdddegRFQ9eFLXhE",
  "key14": "yJmfVrGFtw5L38tAzNho4azZeSBf8B4bMrEAmGTtVY7V25rFwE6YaW5uym5vouEVhHSACRvaL9hGRnjJfHd2fPJ",
  "key15": "3UNieyuLXEmLt3NdTGc53HccknYrYtcxpdi5DpcLRtoQ7W9sckW3ZwmCxR1mUQt7HaXTGLnWStPuxxQMTxFFRKj3",
  "key16": "3Xz32UcoXBoN4GzBmfVFF6cpTJfXZqyfTungT8dHQWNR8xm4w6FRyr7ws4zcJXXwHWHZk2ZTHfD3RtP3iYaeAeXp",
  "key17": "5wEqNqxTu79H5S1ZYRw2LEG7VDLZ8KjF6s8LXc9CpqVUt6vuPE7VHmBUnJy9UjweUXbDZuaNqaf4FmYBDnFuB2G9",
  "key18": "5KFvgqknH9sgbshnxYkZXtDjmkyLXidhMPgXVgBvYdkvqUWZK6J8Qdu4RXsRcqX4412sao1YS9myd5T654mVgoky",
  "key19": "2u1cZiJQNWwXiz5WVp19BttBtzdWDM2uZ5y3mcrFtw6kgTKEfDDKTfbK3P8fAuCCgsdo78rLqqSkfxkjtV1R3u2a",
  "key20": "dXhqvQzk7voHpuEX8Few8A3vGtbLxvzHcao1pkQpsacgxC9xfa3NgHoE2rDJQstQpvhnGtb21VpjS2oQsfd3sze",
  "key21": "WdRZNg1f2GyGPTupR7bFBDVYhH422PwMRxSnxRa4GhDYQePw2EtP766yUjUVjtBHmSD9ft4yYEekuyebp16D1BT",
  "key22": "4TyeHJRqJkAZR9DDb6oQF4LCWPgoPsQRVfhQwVE2DyNYPKHBHfZTjUzMk1VEL81UHbcGyXnxappna2Lfj1DzEwwU",
  "key23": "2SxNfcc9oipj5cpDD19UVWA588ZMMydyKwqxZMn5SCCGCF5u3PyyfeVcfscaSjAsQyZopj5nA1jAQ59i6XBawe9p",
  "key24": "Q7q9crPo6WWERCuZWnViDSw64cmyEJiozvHBxxkwcLquQ14tAn98TLutdco34UHVPHzCq4wvkpMoWLW1dJv8FpH",
  "key25": "585CqtjJPYDWcQvmKPphjA97kwJC9qmmtD7yAVUjB8A8LyjqgyqspvFvkyWBa5XyKoptJ5zjfz1voitrtm8dr4AP",
  "key26": "5BcahCfzSg9DfPzBqTXRR4iouCuMFRVvUwkNqfeDYJUis1seK9jqR4HfkMr7Lm1TTQw3gVWb1DZjRZC3yFqCkqwm",
  "key27": "2a7jtWrVqd2dv6JLJahXT9jWibgY1y7Faor5JFUPSDhpzVZ719ph4KRLmkoAQb7SceSLT7gQBv9DoiPZSTFWZktc",
  "key28": "3CUY84eTxzwtF27XBYXt4LhsA6e5qPY5cHAH2pMnpwAEBjogDcrsyE2RiE34uJjWYQ15EUpq6Yr1UXubSaEt2gz6",
  "key29": "NHZ279NB3yPdiYaQ4teR2gjifcrvUUAPLyV4NxqcXC3WXV42JgRb9b381TE5UCcKy1dQ6UYy1wL5FPWJ5Fs8Rc7",
  "key30": "23ApR7JUpPHPQCqqdz5ez138xSWDiY6BqgaEX3AyrxMxWBtNr1GgQ9tkPzeyNqMvBjsKq5GCFmjn9TVTqQFDEGoo",
  "key31": "3XPtD59824xobK6ru6sWYeT9HdvQNWHxmo4HqC4wyRYQkf2wbayUyndvsoNSP1RdLB2LeLuc9JSrkx23n3gGNRyV",
  "key32": "2FRqqzWsoBKXcVn8SyNAj8JUpkozq793R1AmARAUTvn6CzxWJp1uRAcFAV9k2WvKE89J7adEtYW5aWrtfPM8vVNo",
  "key33": "2wMkr79NNBwrRotPoLNCipYHDDmoojF1ZP8E3212mDjPSRwkr3ztYFo3DciqZxAo9TmPgAoNNnYpQcx8NQVX7o4d",
  "key34": "4TppkBe6QQUyXK48pvogftq1oHyCqm38Lh1CR6D625RzR5rSuby3LWtPURC7tZYTJr8LwB73ah61ijkQCYn8f11d",
  "key35": "3WZtyq8vypUFxVdQhkTJXNRobXHoWEh7zjwqgV9SroU6Cmggpdbt6LUfsW51dV8M7nJD4nr4hSM6kcXTatfWd7cu",
  "key36": "P348PBT2aFqJZ4j9KXfK4yqQA6TkMK64iqUNMP63zWy3j8tybqg1i3H5iL6pvjk7podWLJ9DFG135cb65AnAWof",
  "key37": "2suEYa5Z71VWvFfH5kBwHfr8uXVBHE5CkWfSynyRxyqeq4VzVHiZr9z2gSZLuDU4xaJuNFCFshzYbF5ogQygLjDt",
  "key38": "26H6CVuMJhRedvbA1ibxDqPhFN3QwknbkT9nSXMyBh2KAFmLzNMBR6jJ6bRxp8ii5YFC7EZwdLYbtmpFKD76QMiL"
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
