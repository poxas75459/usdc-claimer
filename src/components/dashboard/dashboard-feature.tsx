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
    "5XSkp6Tj4W1WWgQtpFW18KndvPgpazchKUQAYHRURuCq3LfNVzDHdrBEotpNPm9DScVEgbxt6cs75wfzGBjM3gkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JYjkugLPW5sq6QPLQ3Gk2r7QzVB8gFcFtjEBwFhFaTJTW7hdxGmcJGQxXZrDGwra6KApRXgLdSdr1GRJmtK8cEv",
  "key1": "CcGgrLM8KTWP3nhuudz6wf4c52Kn3gmGPbd9ec2vrL5W7sGsX6AQt5kmsyvctamrc1r4v4wWmtTh72U1GuTQjEM",
  "key2": "5qAvrXeuzLnKVL79zvBryj6a66RPLNssQjMBYVGAHWsdEsQRFKJ6wHyQPfd4witkSUmpgQipvezyoQindkjbgKJD",
  "key3": "3BZv9zLJuRVRhpWjSuap1NXsbstbJBmRw3MxpSuu8eFRA1K5rsEWELjzfCoGn2JnoKVAyzem2H4mvKDAN6i1hh9W",
  "key4": "4iJtafb6uvGQWNbZGwkbxor1WgdtaCfvUDeQNbUTFfoejDNUd8oPBF2txp1qiWMHsQccmhDG9WKHnGHEFBgB5JJ1",
  "key5": "21HwS4Z9FpV6U8FqLW1u9UQGsnguqZBt5Y7jhFgky1FoC2vTqTQjXXY8xWRgQ1mLSGSGJHwsdT6EBpoRReQ5wwzt",
  "key6": "3KDCS5fwpUtacrKP4rn2qeMw4n1hHrKKkeFT8vPcaHi6972SY6HtdFis4oR7bYEK3CWXSCxrjTNp3uCgnCvjxdsw",
  "key7": "KyeeTqYDzv1LVCHAomYmnBnuDKcNKQuWgb2SVmpBS6B91RReknAQo3Sw2HefuotWeNcLnMYoswkZyXMUQoeRtE5",
  "key8": "636KbEDoLtX66P3gmWspTJGs17pWKuVuqkSfXBdk1NFkk3mPj5XmnYxybWY6AW5BG8nz7dJBDqZrawckqWvbiurb",
  "key9": "4inRxsgwjhNi29a3wyjZpJtHcmTwMBDjY1cTz3uyVwv3poGcDgyMsicTyqGdue8Y7jHNxiLsg2Mex7b5DgbcLqv9",
  "key10": "qDjyT2U6WwSAQRcbnmxAw9mCBWnpRom9yW1UFRY2Ggk12GFJRHEuEVoy5EbuV29674eu8EPTByJCwXyJpJCTrg8",
  "key11": "3sAtMsVicq5zMzw4NGZCrNbyTzAKxzb4qfq71ptJd9EzkBRZCUbLzGJ1hCFuqtdZ7KbMHwmgaKgyYgVoT6ryVMX9",
  "key12": "4p3XAjuZMu4vhSdqCjfFfB6AA6mK3U1BCXYYoPvZuDU9ZEgZGsKUJP8cKnHy1CAaRhxVbFYe5Z7mvZkiq4WdTTmh",
  "key13": "4F1oZ7awpNJ8MvqomCMBmABsR3qYu324MHJF9NXWbvGeahSibputbyX8XDKEAJk3j6TWtJ9tcd97xiB35MVBSijN",
  "key14": "5AC2T3xyJy8R6dQC7mrkeZqrJyvu9nQixrM9Tnr8cwV1R8dgu1feKo2F6PEnq2Q43wpY9Pq3rpFxsKc3EZZmneBm",
  "key15": "4TMxc7FAYrDakBy1F84witanQtQX4Gx296qhBEr1W4KgYYt3LCGdBBA9Nh2hec7pfPHvD188i8R3HAWwbJFq9kDe",
  "key16": "36oxUiBELEbPreKJwC8XuMDvuNZdMtXeUeyrUJQ9NH9AwyaGYr1KuutotPPWrnBwrX4yLrf17Ty6hZXPvLwsj6o6",
  "key17": "4371eJg7RKSAz8U8sRpmVs9LzUKjECRd7gTW1jFgg44pMADGxiwqpPHdhwMvcCdJ8REMxXbUzU8yf82M2m6XmgMu",
  "key18": "JCrJxyF7kufEiLcKaLn59sNRqAWp8RYaAzSik3z7Yi5G5uy4ek3gqVWvsu1ZNcxC51M1fraTNcbYca65BmDK31v",
  "key19": "5Mg6C5tGD4HZHq3eggX5MHLQtB53vdfLpRbqwToAooLQtPYauwJVJNTiHjSx7gwbaRZ6q1C611zGFfy4Qt5U9WdL",
  "key20": "481sfQKcw1f8qVbYmDiPbFwZdFznMrSs3FdkfBcRytA8S2Gq5Lsah24Wq6epbg5imt1R5rG1DcSDRWoUEw2RXcJh",
  "key21": "4V5Cd6iC7ext3chQ8ikiZhKBQKZhD6NiqHG7YTwhmDLyPaNgJBJRcd4Bx2NnKF4BSFErUMMuU1ysLFv4D3n6mBCd",
  "key22": "5bPetunaQaZhsx5BAyERCJF9XyJMEiZzPfMvQY9iFUciCUJtmdCy4KtC96Dphi8brpK3YUFCj3EAdxRZB1rzqR5W",
  "key23": "39R31dbiDZz1JYJaQKM3ktUbFCdTp7ZvaLEisc6TXGY3rqRedd9hSfELLNruTwHxWXdARaWmhkYFk7QS1xX45tcV",
  "key24": "4RgUuSkMbBrbRw1hZvVdqrUmTBUJLmx4QdjqNze8g7Yp12KxTeAPXc3WaHbe38nsr6uAPF45ZstMzZxbyRA82nYZ",
  "key25": "4h5FNDEckPyAxxB5ZG5684UN2PjBMNau3vPUYDKHQEjiQfBuRkSKxGehSHKMsNw21Te2SnnorE2bzF1GXCwH42hJ",
  "key26": "33i6o4PiseYk9uQin7si13CbLWQjtYnsK2BGFsvX1nj94hpdHvEaXiz9L1o4NXaDVTto3RLefqZnn3yj5FtRtrT4",
  "key27": "2SVbEa58RrYTDYA5ufhEQtC289MymxXH4VHEDEL6N9ocXSZTmPMM2wAxkbv6WkTEaBZo8UAwB12oLaeBKEkUMwQ2",
  "key28": "3izewWeKj41a2VTGpuAA7xr75Yj6Tv5Nyj9rfHoRZuhBUspurzeyN2foVQPWcQrYV9w8Qfd6x2MLuiFAdHCT35xD",
  "key29": "5dueoE1MnLos6ab67C7frzRyPj33uVjJYFenzfcaWr8effA165urSDA66GQVRKxqVJd3ivRU28fr4tgauEFJnb1x",
  "key30": "4gftGA2tCeJ2p4tEwNEBYkth36rnUXT824fHHd1yo1vkSxcH41TG6ascNpFLojDxhNTKSNCp3fSiHDQ5pRczVJ1S",
  "key31": "3ZJB5oUX4uAPahvsg9i2iF725JdLCHzufX2PtJCGdJE5VMBRHGcoEbEEXUhhJvtXh7rUHVsQYtpPryt3kY8PYeK8",
  "key32": "4EwQ8aTRNf8vxWn5yxB8Z76N93U5ojU6MBNhDcBWV11fVxFWu2dKAGy6yWF5dc9ipLNSmTpazxEnbZJPnJtMBvBd",
  "key33": "5muKuiGk6EwBjjeCx6j8WR7CN9c3zXGZyWx7VGQ5bwkM19Dn6hguDyQWFGsZXbQiitWkXSFVhtatYp2YchzFT3Vk",
  "key34": "5Rw4c2rGE1hwjQLnVoTvHJLDpmM8dy4VSxHUQJbWnZXvtnLZf1rpGNx4F5Q1F9jiY8xsFrrBHtUcJv6pmwayGR5J",
  "key35": "361bnBZbwejKKgTV2UnWHjBn2VF8QggWAegZy4g1G3mV5uGUZcSkTLSSdTPcETYm5f8gEf873WyrWAY3jVcCTnsx",
  "key36": "5Nmi7AF3vxYcFZhGuXqxBToUH6Xi2X4RqdVetfrSbyXurWzJVYAaedyg1LNyeZo9BSooWAzJwF8uPC8HK4Xhadgp",
  "key37": "N1f9wBNA47q5ziyukyr7STyHZ5HBaESBuLt32HU3duK7DBZi39cRbSUAZ5giCnXnACbkwncM2KMcVXQ6b6HTdQ6",
  "key38": "3UmQumpN6EhtinS4FTptbX5LBCqQFJ81dFnNk7MLEH1eGnvMiTyVe1dVutwuYuaUoqu61d9xUuQ8z1ocp22A5HrX",
  "key39": "2oe8bujte9nGnc61kGmpKtGSxC52fmgonPhFqBuAjUCNSLK91UzyjbhWtddrevkUT9ziZM1EbeAC24akY9vzo3KS",
  "key40": "3vrpBd2QqXiqhXbBmSpKLZvhU2Ws8aJPT9oyerJMax5UxABxrrs6vSkHHkC5keE3Q1s7mRf88wUQnbXRbGpqUfXM",
  "key41": "qftdnGmfgmwTG9LjUYJTQePT7HGpPP2Qw5wXYu3YYXNAqsz6viKfKLBJiZCPJqZfNp23RSg8BK3Z2zwJqgzDoyL",
  "key42": "2pLPuESXCvBpCzvhrDQQyBaGH7PKkqZJ4qtNeUT4yeGuvdP2aDibKbi6tEJK9W2KyjQ2wUS4NiwkyZhudSuQDpms",
  "key43": "4i685yepsi9vPtwZMPzgANYTpaawpc3U87bL7mCfcU6jvYq7vddjxwTMwckM3Rg31HGRj3f1KV5FJM5rdfAUmtim",
  "key44": "SKmhuiD3Xos5LmL2HgUE5FQAUT4PYdoZjxBQ5qpapjYtRELi3SxgFgbChrm239YG99wtA2aEpcXT67BAXREtv2D",
  "key45": "5ST8zroNv9TDDQkjRt2NVdg4AjrXhuFEYK63NoNGqkbvXQPr62rmnqf7jqYwzk9srPoo8NBqz7F22cyo6idTCvtJ",
  "key46": "38PVdafr6Ub5KjPG39pMcq5fKNSgxZbp8vWXLxktZFXKaxnwE9hVRisygnwCr6RC93UtdyGpVWM7gdEp5qJQJG3p",
  "key47": "3X5gKdsSUkFKKu8fs7szcpzM1CsVbr8JEdBxxdt3wvNngav2nvJETuzqfydKqRvhtG5j21ySGENGaJ7qYh3YXjRw",
  "key48": "2snoBQ86RPfjJELzdv3TjXx182iGAGHMo83a8ZB5FuRTruk3qiGnCBKffo6Toghaz9Txina3Aav28CkKbuQQgzSo"
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
