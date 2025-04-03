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
    "hz4Wuf2oiNPpHBNgoEeNUWMJFQFrSbGDfpjKGATAPokiwaRdvHJWSPWcu93GteMSKKokecfR4TE9Nwzu4Ar3YBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgwUApdWwZn6yUoKSrd1trxfNnBXbBQ6Lvrc128Ni7E7ssnJb1JRe36HphdxfdA5XMfiKwLZQXhmn3jXKn7d1fV",
  "key1": "6CuiVa3SSFZxEfdBwf36zCFWsD4bhDQ6KRA8fe8WqdqeEhY82WEGLFosLpb14kFVAG8a1BEpvhUpLsQLEJbH6V1",
  "key2": "2YQKmTd7ndoQpPMZW3Y93q7t4P6vNV8usMaqwubYdr4czs5UYxuQq5ALirmAkeV8Y7trtfEnbi7ZJnHjB82twXgA",
  "key3": "2FrJjCmypXPSPnpaeYg1q5iios5JcWxTFByPytKegrf4XtUS3pj1HShgdYwpLL5wLKjp7eMiTLw1SWjgx1Ed61wg",
  "key4": "uk21mt5U7uaps3kAKYRweUgM39JnYixLFnFC8NWwg6EmwDzJVbq6NWRQPcmt7S2JfNaNhyRfz5hBXx4BN9VsL6s",
  "key5": "59TZkDqvU3p2aKsVK1qjBQNE5181fpPVfraw3XXRHUzg13ik4sRD4yYMEAX88EK95oxm9oWuYwivUVYgpbQm299r",
  "key6": "rsSEjQ8bXSG5d9WiPgfBQseAgg8h7z5JeottzQ9v2qHmD2UqifEmxnDGvcj3qhcwTnBpSD3WacTe6Doo2ZMZunP",
  "key7": "aUs8qr3uhaHLHkQEwdKWUaL3tbEXMhLCfKXhJ81UeTnHitGnMNhHhLiB8w93k1qVPALvxRL6d7yTCZrjJdXtQZB",
  "key8": "4srTXAdPG1UwueK4uxn9RVcpFpB1e7JK7cLXEzTAZjqJisu7mN5ZhRnNMTUpdPo1Bz8yvTPwKBpe38nbrLnM1QQE",
  "key9": "TnZikpTAuxMZJfqqpFR4vkT5F5wo7m5zCtfMWzFfqTdMq4JZi3wDJd3X1VDKwyDUecbEVpA4YNnfyTUBqndpyLZ",
  "key10": "3sFJpBPE2bQNY9PCVKd1BxY4RnMGmxBMmNiDAzgdPbeC8Xoje64Q2n9Hg7ydTpPqwsTrKfLH2ykatsR3V6JYVgP3",
  "key11": "2S8rmUJioa1Uw2S3VrftS4egwZUrt7bEDcAdabZRsxj9vrVWMcd7gLX4ugDjKg3TT5VJGGzX8WuL77jx3CUWh65d",
  "key12": "3xQ3aTo3aiwez2sedvRwfzvyXAZtrvoWxBuhbtFUBK4BXAo8HXbjxen3TUoWLEDHGGSU5tyjBq8gqooCjfBDoPCw",
  "key13": "2UqyXQzpgZ7ak4LgzHvBMSgUihPJrgYMB1HYnBjWibb4hGEsc8dfoYDajjWza55Kq2b4qGeeNu6pNHiy95snu4dp",
  "key14": "4UcSH7UCuKnjM7bby6QUGDuLi9dA1aEwzVebpYeBj2dy6XUDJwy6zbqfAGcrHzfW7ahcXnrzav6N9TARcKcWJUDb",
  "key15": "4HKYDrHo2oD6Ruf4VvMUmFBH6MvFg5V39tV1WTu9xVGqFVXaSHtW67VYrUMbqhv3VtW8YwYha5pFftz4hpT35GBT",
  "key16": "43RvA61xmuMJBeJeUUJkLs8Fg65YbE635mxocRkzd8X8Bd9HGfR7c4Sei8gd5ZYXu4hd1sSLJCN735UsVcEGGExk",
  "key17": "3NQLtXLVNb9MFJvtNFQumwQMeMTiawpzMgPdxMpnpGHn5PVWkLED1RT8oUVoCjdseSgY4ngFao7h26MkBcok6oht",
  "key18": "5ZexvxFfMUUKLheURpVdp3vHvAWMfPWB1GyetPZxLziYHwVELZDTj1JmWqrhr54DXurqP4qoJGJTmQVqpftTrysb",
  "key19": "2H9VYZ4wtr2xy6rnejrD1f4iBfoy9ztKJTvDFhvoC5w5W4Qi3URrut56n4qa7ozE6uFFoXC4BH6fDa6gVV4MasGt",
  "key20": "5z4F5VgCohCPZa8CGuRwvzYrdw574egUcP5UUF64XKHzMPWCauSiqU73fPcgbBEmQ5ghbpscRJfQ3H31cUD7Jnsb",
  "key21": "4VbD4r8mQ8ATeipgykXmZzSe8r7vA3DiFH8Qfq2uM9duiMKbnKRKVX2TpGsWA2uoCnLwhhvuMg3hjP27LgG36Nap",
  "key22": "3QsCP39x9gSUc4Sf1jX6z5jkkAmQR8hR1QVAPYKTwW1UN1GRro31mtsptXCRoUfFrukFqzt6dSxKvKiHnDHAnpBz",
  "key23": "3wjAB85QE2k23Y7BfQCyiz2NCvfUe5uA9BfxS9MMRrtEsxWAq2Msy4a3G6H3WnUjN75Gh6F85V1FZmv66RuZ7epU",
  "key24": "2XRbFv1AN8UhqFhughi8yEWSs7qe9Rtkm64nkxpcjqnsQ5NvHH6vwN2mAk6VNxGLAwW4PhKg1v9s2TxHGDpVsjjX",
  "key25": "2c5ybZ4C7ntY6mvBgXPz3dLM5QRPjRS66Evp4JxBubLwScY4BmoEqt3EE2RRnUTF4DyaZXUbBJf6K8iRSTPU44yZ",
  "key26": "WTYeLFntxnyrRYfZG2yMA55LavQf2vWLaiZjDRe2W6BgBa3bKpf5MjNVHTDaJeqBsP9s6BZk3k3LrqhXYugkrME",
  "key27": "5ws9KL7F3vnBeNLtYKFKrJafWbo8TX2o1CN9sU7Y9EkmVsSdYpSjtQw2onoG9BUKTqyZgwaQtkUqS5XdUzoqw3Tr",
  "key28": "32KJEge5wvy2pf77MDWG8khP2UgDPULatWREkjRdSeNssUxRVFzmFfh1txpTPxhJv9SxKhnaViJ8LP3Lr4Sp7GkD",
  "key29": "2mNVp96tzAVPWmZ2axKYtwGK9y3dzGnb4SjDQWtds5Km9YzXA8Rv3wL7UKLG5XBXkhoffDmCD6URzU9yYuX6ijvm",
  "key30": "27T3CMS9FsxvaxXvJ6p3viK3fiHwryCoXUrx5hgaR8gZgNn7MwZQ219tfZQXPCATtCYcrmT28DmhEFDRc4a1E1xA",
  "key31": "4THf8FadyEj6ny3WT4KgAHSYM7snHE2mucy9MDwmpWPptN69TjDGu96VuEQfeBWxTVhBXahquaCNJKLVCLH5qdvM",
  "key32": "gaRfnwbtcdBT85gY89aPn9PY8hCaGahAGxCa4WJXMoBmq7r9VpBqvUih9pTgTAVq2KLd5rdiJY9SNcu8LRzzQud",
  "key33": "DzXfK4f7dikWK7kKkKeaZxhuEz2XR1trdXtiPHXe21iGskoT1ESMKWQcY8zgDQsD8CCdfU3Z629FrTMSLQNcT8S",
  "key34": "2fb2kC6oAoq8EqhVQmfgXEuQxv6m5Z1TFdHNzp5zU5a7oHTjRJdxJiV3kHoJ4ciGVH8pzXZQGaHd6xHNqz9SfzGy",
  "key35": "5921iqmC2a92zE9kUVnkprBHt6H9vcTZeqbBkjbkbBev25g2mMePXWdnibHgTtsD9diUFcNJPeves4p6Xch159uw",
  "key36": "5AJ1FzxvShkHGhVkqmpGDpbCq8Cr55XKK8BShY3V4BUEbuyrhnNN2WJuBjBgicYzzBnzij3Rcik5h1mEJdzGWfPD",
  "key37": "5iDAFzARgC8GLPuZ9gobju85g5RN6HLuf1eibVZ7gbwZLUHF65hC6xr6rxb7TR18zN5GXnBpUdoD1VbUb6UJiWy6",
  "key38": "27uvieN2qTmmi348fEk3haB4LLJXQZuyCouw6MrgVj4wGW86fyECetfdxmr6PcxmAf2y6NpTYb8bLDsGt35eHgGV",
  "key39": "57BsE7B6xQVz642msQ9QuzXFfgwyYaL9Yf6i4DrjHP2pXSZeSjiLzzjuyHA4aJ1UvEEEP7f5xCuigEKbuMYov7YS",
  "key40": "2vUofiQNLUybRrCEGDux2cgt1EXfh3k6fo1poTWtUDJkQ1Rw9KR8PFi73fhpiSfp3ibt5Hoa1zJ5q3WPScV7MgVC",
  "key41": "44LSZpaqQERkT1dzoUgYBtK7zAvdw2CmyHm95T2hpGd2QfCjfQjJaNSPCAgiaVTevQi2PS7UitQXaZK4qfqTeH3k",
  "key42": "4Y716AGiacndBySgRB1GJ99hfWH5Kr5Zota9UL1bVMi2e12VhPJ3NHpmcsawbrxXW2Ex8ZCPawKsNubapoUwGQ2n",
  "key43": "5KXx6BNMN4yKJ13m2qWFuFj3bbauapViezoYrNMXbSb9QBa2Lqwwuix2B6xLHsn27EjwLmGndsUavhV92f4481qq",
  "key44": "4gUvgWVjvYHEJ9oN9wTJDbRDeCLwUdtpF3eMSNpHAPE6LpXspJxzbWfnRFrv6ypWiD3PdztWkfSReMScSmBpq1xE",
  "key45": "32BkjBX8YsSBh8qfaJXGGYMKoYALBiYrK35PN7irnkquJVwtcVxoWYiZwJAeS42FNwgjraNp13Qqiv8mGUvssnCR",
  "key46": "3H2Jv9GxQVbd1EH1ZjjHWAh3Ve9bGkn6RCbbh9DXY2AcDqNT9SK8gd254HPJafsgYbToJSRry9uw9dHNxi1JotuM"
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
