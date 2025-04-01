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
    "5yhSe5nVV3N7zazWjc157v9DuusufArMLgQxnXfQRqDnDivYcFMVA4jdPPeZ2A7A2N661GSBkfLUuAoMKGs6R5YY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WAGUCe9c46bXsr4UFhEP2HmbAUqa7XdppRmXRqiY9bbB9qyJLwEriNkmc6WdcN9vTJaxdUd8xgccyKGTEhptZc",
  "key1": "4NrcYZSZKMK5FqqEgAHovDBJCp6gwLeg8TCbjZromyXoFQcxSqJMDeqMvjozPdcSLTBBkqdEWiAQupqopuyamXh5",
  "key2": "5MicwgCMPszjEZHXj3so7cySsBdG2ht2FbLpVKuMkmPnosgMH17FWoNYX8B4BhhnxzNh7SJfAK7Y2XjsWVX3s1AF",
  "key3": "35npo9UFY5qThL5pPwoENUeaji9Jmw6xaVoZ57DFxPvchkKbDXoysLXDvU5SYz8GNDuNoZUvZmteQ4yevg1eLCcX",
  "key4": "3ckN2kaML7mJmp9aXyqz4A3y83RWWRZbS6hwTds1QTiBzxLX1bQrw2R9tfGE561HczrMEMWMXymwxj29Ehv9ZZPm",
  "key5": "2kjNtEXQfbEPFyPCgXAErwh7nrWxZiEoo4oc6NkzhMQC961zzX5rwBhQRzKaBEbKgNkomF5wTmjE5UWuNwNCvsWj",
  "key6": "2KrpNyjBTeRsXfYWdJLB5RfrVQXTzTWtYdNZJcDPhgUgmLYJtyGDW7cEs3jwp4jESi5d6g8xiRR63D8DRLRzWoGp",
  "key7": "54TrWkd3ftbPSRAvjv2WqmnQfRwQpMnrW3RbE7tM67SuESaRpU6JbJorUTWFYRRK8gX3QRUL9U3s95HfTkHcXXgg",
  "key8": "34xMgcsacTNZYyzCsQo4cWHAcdSZEwEo4K5r2xdTU4GbYNRhyu7sEpsjcUxiSfsJWXeQknBWEDa5gNFMq9nfBKvZ",
  "key9": "3hm1ndZhMkrTn6Av4n2rFbhREX2tiD1zpuFaG2GmAMDT3ZGhUZE4fLwzgYjgVdRh5E9BokxiD11LPKatR1XnHp1t",
  "key10": "2rCM2nixSVXwaWA8b522Gf7vuuKVgP8oUrHS9PiVGtjpkjSxr3YXhzCz3CaoL8bwfzLWrhtk9omfdVHjFWDC3onV",
  "key11": "3iubGHr2BkDCa5TGxm4U4no7QiYiPp6NUZFEMFT1Fgt1AfA6jg9MrpmkngDtkWJ1D1ty58aKviugm6CQGsSsgzE2",
  "key12": "fw5GLpnLAJowYVCAJVkdz3YN8jzQmCUeVSwiwG8gU1eKSPgR73QjCoHmRVbzH9JZfDmT7mNfGC8zUWVKLQkdbfT",
  "key13": "4trhyako21fniiQtJu2BGs1jG1dUDhP8swdifyaQqjE3QrATC7qCNqjrZDGXhhNFzBgf6Kb4WCB5cscuLnRPWpsp",
  "key14": "5pz8u4WEyFNLRvAbd17PK3bU3itYTQDQdp7ppuy4ZZ6yeS1AkgA7vMSkvxkgfzSkMpdSWb4KJQeH4ik9eBQrxHaD",
  "key15": "5AJT6DFnHbEjXGvugW4nB5DdEQk6k8jUYcCBBh4w18ekfEh8wzMVJ1oARGJvfXb2ieyc781et1tyyvmUVTUR2UBM",
  "key16": "RR1TyKZq5g8pc2vcyNXtXWTLUfS87ddhQe1sLiW1My176j3A92YFJdG45HWx9vV9RN9SXMgWVwWAhAesu6WGM4A",
  "key17": "55RWdp4BuUXmz1Tj3gsEGYBakJ5R6XCkpMWiXD8iwyhBZrD5v1yqm8fR8b18EJG6T9jZab58Fm8k1d19ts9kPbUG",
  "key18": "jYAxm1KfD4dLthFyMuEcb9SEyKD2zMpDz1zeWCYXTTd4N5tEre15MHUJyXFnciir3xoeUj52MUZWQMYs1np1jbW",
  "key19": "2rvkXY3EidxPWcdkNSSSyhchN1uFiS7HHfTmPNpGBUfNvpuGbxL6aNBgWMkwygW9rqyZHd6nnEi3cQtx1dtZUgt9",
  "key20": "ymhvRJgDpnudXz2yQ8rREimvC7KZYGiQVG1Q897v4iJbB3pxkBoWQVhbY3LK3p7Xttw12CDaiXd87Fu2cUXrhcP",
  "key21": "JcmkNZDN2iFSWx5ammRMCzp7hAigNEiqYjkVWoFE7PHnspYaGCZwsBLiViqPU3pMz7t8G7v4sa6AJC4Rmgr6go5",
  "key22": "2RR78qeHVKhwmvwCpdxAdjE8cePEzURSgGA7tqd3kX5XwMVe8R1Sqfirouii7XF41wYJAPtfnQFikKC6PpdC7bTK",
  "key23": "3ptojvUGJdpxJ3QLSZAU9qKo8BPjCgjCpZg35XMn5nVXhUJeuDcVGTPZWbNPbt6Uub1ndXKjZxdd6earKip4hQD8",
  "key24": "4WZEu4En8YC25tuHMvi43zNQYS7fHjizprcxMJZa7X5AAoaCMVT8Tnnj48557MKcpWAhYgFTWWwyHQJXs89y7FHp",
  "key25": "35nBE8xAMtEZ2LxGprVS1iGuNoTqR3Yg316UkyX2kNe2A7666RV91rTMQDimD6rDTiLgaAc3xjviHEzwbqHtdeUb",
  "key26": "4v1dn7SiquxMaXv2tG6RF2f4cK3EJpZhKQibMr1WHkXTYUebjGFDdrCbgu92Em6Zs5am1hTjSTsNdyHz1C4mrt6o",
  "key27": "373q1SGdr9sDH6AnMfkuAhZL7F24zxk8cQKR7zGYpu6rEkHQuckGsSLX4GZft55epcLtYPCucqZHH5q9PmX4WJuC",
  "key28": "TV7scgzmpR4ikJMYCdMz4gm7yRq9yMXkSp4srSM6UsjpxEWQ8Ck4icE9qXF7LP1Ef4q7Y77y231tBsdQGTQRhcE",
  "key29": "z1yzHPG8k7xa8xMh46gtKG5yqXyppptCvs9rjP7yVWABZ5BJB1VwHYigFqQ9B33MJEmGXVow6tLWLcXtw9zcbZr",
  "key30": "3bLbzMZ5QqHn5tQC3aaXxJWvYnjNPc8JcYYdxWq5zdt78NPszY88Cbk9Kb9L2n4adAgmw6dd4dLBu8CX4EtwWZX9",
  "key31": "FWmqfSbBkzzrm56841F63zfx5zyA4hPmCaPnt8SZeWyQhMQDoa97cro5Es6x1zXFTcqXWMGHvxFTcqT6YyRfKrW",
  "key32": "3JxAbj4T7c8tCZtdFMbKGS1cU9XUTAaAFJ7hYx6LHagtpJpUf9riqjTTVfp83ByFFJUeyQoFs4TZLBMJ5RRBKKav",
  "key33": "2mjth2c2yuLm4Rtva57NmPVm8fAuL4wfmShFZWC9DaFqaYrkCMdCmdB3CXKBxPFDheYtHpeH2MfAoWk9EUSCk6fL",
  "key34": "2npvCNFMjuuk2kW5DT2fneqifEHEZt1Lwr9zVM4egYx6Cx13Hf4yqzQvUJ2HS8rtyxob1pvoyA6GiMqZR12Cv3zm",
  "key35": "46JwuBo2BSaLGeJfoBACK8ACYHi2CocN5mkD1sVxXrcoDkGu1P1zjgWvguCGUGf77D7L3VCwJ7LfSoEFPYhnpNps",
  "key36": "2gu54Cb3yW5RbM2R9v1Yik6c9WX9S12hKBt4PgfnX5bqhHzJt7zrFxsvAxaHEeJJjypQNR7SBVVMxy3VbBYBbkax",
  "key37": "5y7EbAx9rkHzDU8jRrUNycvQarNx6z3YzUjT9q5K9B4A9XbvTuUUL3tn4UAWYrXC3YD2nv8SBjVaefRUpwefDfTz",
  "key38": "k7h6Ve2KHwojpZtYAYpNL6JcjNXmhYgMpfzMv3g745iZJsSLdU6zJ6QGmJnNGgKKh3r9KyUpPb4nYG8y1ExGRp4",
  "key39": "4d1fAZVspSohW7fi6qiVkbFEz6BDMnciDVP6VLyzsdq39cmc8zFPaHiyVQpgbQF7NXRF2EkV2r8m7S2f8gdV2kKe",
  "key40": "5UTu7YHWiCzt4mDCD6uXFYsAfz1SurCXM1y5oSNpMNbnCAzyNhKAx5SF5Bb2esTgQhZ5dxogQ3u6LkP35uPc2hdX",
  "key41": "59WqeYR5S1J9fNvfm5fzDovpvaGsSfA81LXocNfqXUPGF42eANUoPiitCgxALsdu8nLacsEvDCBnnrLhRgKPKnWU",
  "key42": "Z2qKpXHWt3T6dAxTWFAgvCQmB1S7bh8WgwDRCbRNMUz7NsHXrz4CCnGHvXhq4ft4hVzU8F5ic1CYbPeXCzRgxWj",
  "key43": "vu1hEuXKzqEDHTqkW6uRyFi51xtXhLtrK4QPxqd8hREQ1vcHXAPfRetFqeiUmAvBJU9uhoQvBDUXGcqDYocBYxq",
  "key44": "4p8vw21Q4PsLwhsaG6z23YJ9JVxGyEU2vBZUpPrrh1aBv9WrPevUHrkbk58F6uquzDXfDiasQrZdkGvAa9d729vt",
  "key45": "29fUN1MnmHxbyLaDhrKeZBekPZifcSUWzkbzTEhmCQAdAchfwLAvPj4fmkPf9ikCLVNYcmwbwGba9fygLz9n5mnC",
  "key46": "3iPQMCvd1zzdYv7LxJcWtNmuK56DZTkTWDNcwQzDxCehCSXfBVZuJVDYHE1GMhcAN71K8rhozwbjKXoQt9WR5Zv3",
  "key47": "23SW4S7qV5X2nHsGtHTQJ2Hsa6quJCx4dywj2a95unEekaoet975edx9oXEszRtTsddyjRkS5qjVbzHEbQRpJCPt"
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
