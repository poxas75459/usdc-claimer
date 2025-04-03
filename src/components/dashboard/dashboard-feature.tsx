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
    "2wF9A2JQoeYDbMW4g17hJoRsxHqtA99oHAV3KjJeZBE2JjJHqY6roccFYVagitL4hNpdaX4zYi3BFFJyvvCvrV64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBAK7ouySJ3WcENW459GpyKWwffqWQWLUN7esKccD7UKX8D7wDxEsGcxt6chD5JcQBgeec33zCiW6b3MnhRhjpw",
  "key1": "2xvfYaeCigjhDCiFqWMcoQxAuEnNBaoiLriNgdardjRknHqRbLk3NsKAvix6PPHD4o9eKVjFutF4NftcfYYwYkMr",
  "key2": "CiJ84v9Szhx9wQadRBKwXyi8zijnMg6CJuEzEKLDxhSTSGXsWiDRjcmqVyonqLiofEYmHmYYUcmpiDZFYeayboA",
  "key3": "66QDSHAprYSQ15y8euNjZzHnG6j8cp8B65FuHi2iPJkrkFrrKo3E6XM34SyccUkNAGrQREhQKi2ETC6j7awa1ZiZ",
  "key4": "2KzLv4pvYaEEZXi7fYCVyNHwMHe9NzhnYUYriroEsyZpNYEDpnN6Jp2ycJG3TDUe1faki4zsP4EPDMUaPw9S1opA",
  "key5": "2HWWjY2tLtbEQC9vuhFaJ9Vhpn4D67NsvxeCA5aW5aY1EUibkvKTyntBzauHM7YGQnpP2itGz4AchSDwDqxnubPj",
  "key6": "4K8TidirN41wxz7gqgZoXnienkiKPAUTULBg6xMBM2Q2KZ1hvoqnC6pZLdMKWxwv6e3LwHDLZSjW7qqxcutm7CwM",
  "key7": "5GQSjcnvvwkrnSdV3sfr3F7t4vASNviNGdawdwjxWh48E8PVar5HqjntjBzbk9Pw8njikeKnDVCeyqpTmsZBqQhw",
  "key8": "2eAD6FtytTGMRrX8kLvHAM584HM1KH7vs3GxjU4BQZqWXssSyqBxnuwrYd5mBEYDnPZHZ7E8TRWjzfcxAxqjKySH",
  "key9": "NttCTP9KGsTE1zC8c5VbPQgpD1NiuRyvz1XaNGdqC5GnRvJTjgiC8iuGXPm5YJ2yaSy8Jch4ShMRxiF9zkybkF8",
  "key10": "3bnJr8R88kKBGcBwinGv43TNJLtXVF6nhLpqCAiCRpTuUHHJah3Q6uvaYbdAYfD354MKX4695X2FCpzFjDc6UHg3",
  "key11": "2qpeDniWogtQo6Wfr3e91JJxYj6Ffjc6GzbkarevsNjpVG1N447sDNFZi3DqmpKgSpLZSRxhevrwVE8zH76e9d9V",
  "key12": "2zygUDxk6awLYUWaCSP33LJuvPks6JTXtyXwUeEVP2YjBTep423Pzzyai28jGqTLa7edW7Q5jD7acUZQQjqGUQCq",
  "key13": "58Ca8owzwE1HyAzii5Ese1cWT77Fqq8tTUwDkM8EJ3bDZKLt1tUt2d4Miq97KXGwskjTAF66u5YeMqnwyVEPRBgi",
  "key14": "2mYBgff86qx3fLHtVFgSn6ntHdZ1XGEBgQMdFN8qw3QaYP7GTCo6C6undbYebsqiYTD64H237TjmULBu2BncWvzL",
  "key15": "4LDxMcepwtDdNwzF3Yo7xNDhJg88hGAKPJasKgk498ua65YBZ8djpxoJaK4p1jRHNW8AEDq7rFTKrnbkRa2B4yEV",
  "key16": "3wyGhZwPeLnwRVpGsQNagBuQhTnb32ehGpRF2rWFHqaZrcXHYFZgxLYXyZ9Ly8SHyaKnb2dQUbjwdmYpb1Xvozh8",
  "key17": "4EypwU2KUbVwJaCM7bRfZvgW5Uyjxsy4qJo9rreiKuE3yx2tXmrhmd6bDVU1XEShKpVHvsEACfQZRQXnFiURdFWx",
  "key18": "29MLxGohNCb5PkvEFxLU4P2nN5VuvLXP5gZUFQjSpTEtVgnywhA3BfebHT7JYhRaZCMaY7ckLdJcxNZvK8SFxcHa",
  "key19": "2S1u433nyjNhyC4tCMmGghy7VEad9vh2VwBDBFoWAdzFomTcK55PRrpXpaf6qPyzSrvqMZqbZph7VwdzBSyiEsuL",
  "key20": "2ZqML9zYUkmSWArLXY31PeGUx6qSaRVNNEQ2aR1etBC6LwBFQs6iGos6CPrttpTQdDLktE75decgnNh46Jfmmi75",
  "key21": "4gAT7mnvEim7UBoeVj9AC7i342kb7eSLLgeAMWG6KSyUmDNUgNza3QHsLhcQ2awZwTCxCFFvRFe6FD1adPqmgbp3",
  "key22": "5vx6mAA11LvtdbTKtwSvLsSt4Rrphy6M5WwRZPKyA28YRNUgRrUwkRUmUgRmmKPJYs39u6PHxPCKgzcgukQ27iFP",
  "key23": "2LH3x56FmzdKvcMFw3gmVjxyTDj1S4MsrSMMTBibd664GNNkNoU87odE8C3m6tMyD2Yb58e4WqJdGTWp1waJvJez",
  "key24": "2pQ135oRdXCAHrgWxm68PQZP4NpUob7NkzjfUkSwuczpq4Wp4iSVuEXTQBGMkQb8xjHu8e6joyJ8vJ8yhkMV2bJE",
  "key25": "4GumufhdKi9HVa8fedopnFeseBZmqaxhRbUonodJAwtLS2MjGrBPaXXEd5DwjGyP8qqz757UaUoxuT4GdQEeycSX",
  "key26": "42Q7fazSYSKR4Uo4zTptCGxNeARuCC7kRaymcUqL93hNyAyLg5GnX6wiJWUTeVbroTELWYnNHPfavXw22FcumjcT",
  "key27": "3qAtjJZEjgNs6QxmB7BjrLzkKU4JiMqWMx4zJ1L4tR1VyybTkF7Pych2QXos5nGP2FM31i71s8NX4fAtgC1G7UGj",
  "key28": "oKpxXbwpTMUkdmV9iFdX22SNbtP3JEAn2SsAsc35fyFMDne5pUR1YdwVZZrct4BUxcmLNMibLCS3vhWB8iyyMi9",
  "key29": "TwxEEF31fe7d5cJnmoVTR2iw2jmzsnmSLcVRxaQWpnE4t4F81drsC1sLuiL7uLfZ6qbB6UsHgCttChfxsAeKgsw",
  "key30": "5WsDpRJPjrgqc592KyDGScVz8wgcwoWP64wRAGid12U9dAdiGtcgS3mRg635CfjPCsuGJoTVuMacWJJFfDk7F3ac",
  "key31": "2wmU3ytJia7AjNuRHTMsHNsctFJUmSie6GAzzxREjBX2zN7j62TJtQbF9AfiEYDXCDnKyicWxdEa1PvNEsGVVENP",
  "key32": "46WXGNbCfSW8KWkUuSs2p7uFk95DCgdkvKrUN1xg2jdvv3XjieHMwXFvTfipVpp71bzQQb8WVdK88h2R5W5Gn5f6",
  "key33": "kNeZcz9ExXVZ3ctMDgh8MT5Ayy7eDuV93fYbKHN9vmGdPcTjUTSPX4bnVwii1dgUX8VXGwEZ4eVhvmM1SHE2h9R",
  "key34": "5CwgJ9mp8wdPXHJhDWMoac3TiuCB4JrEqqubxAT5SDdMbgxj8E6jNK3rWFLXfYMTs7ciXyFZAzAECxNKc6zzBFQ5",
  "key35": "qwtuxiarWvbHbfYjZF3HqjKt9SCae1RAtfNipSRH4LDS1NHbWRS8DmjdnJ1BqBv4FsnhhnsexAM7F3BghpTzeZ5",
  "key36": "4c4fdz8shJ8BNyTtztc5afuu3f16rMLLaSJTMxRBgMstJSMkim7LPBFFeaZi2ftGZkPrYP1tRmWU3yjhD6BQAUJN",
  "key37": "7LFBteQ9uj8FtMp9Nuo4Uq58U94TfjCTHWoUkLR3hvd2mYSz6EJeHJJwBdNcMnZ9XtnFQyNeNrQdHDtFjg141hF",
  "key38": "5rfnvTgX1rALW13mnT7Bz8HAmaSTuQUoXaNh6LjudE4cR9LPupATHHSibLdKwdYUpUR92ZNkXoY7g4wArpoJc895",
  "key39": "34QRxPryQEoQGjnspDfB1hS9dtHpYE1f2qkZA3xT54MH2BRUvRDYgQWqNJcPhi8MjTpXb9GxBj2YPCroDQegnZhG",
  "key40": "4xQ6H4jjnQRSbsbRWaJakbVRURpxuUk5HsuQ8v9i32Q5zwvdUL6dmGqT1wDQDcDygRMp7iQbtrgWJ3dKnZqw7Zmy",
  "key41": "4kWSj2u1LoNNvC6Kw1PWsjLHVoT557ULYWUfSoNUGpinG7LKDdRCS6UMwcWGbZcURGRVPku7bHggaKDy5iRkTJMG",
  "key42": "r8vfYsoHYAxvufDgV7qnEx4ciXfj29pWLagLENdQBMcH461N1TFVMHv1kFxrcqxxfSCstJ3vpTejjVhHAXVnKxL",
  "key43": "5NTF8moUyUKPPiuzHrDZUPksDJhCEEHoQYFirPcexnipwQANE5PRpQdnAaCw72VgtHXzpnPWNuzuM3FvWxNyowmf",
  "key44": "2UkJUHazi6gdAvj9LBffBQWWVAHFdRqNVh4bvD1EPYzeAYV1C1sn4H72k3dC1zYBJPr6mtipri42wSerJPCVHopQ",
  "key45": "57ZHxtwHbD1x11PzZZg8xrW4W6kgZfnDEVkUG6RR8TcmzW1syHGDtpswwTzDgZVsVPLb8gZ4TpxoBYjk9t9RfiFv",
  "key46": "21ceZcLcebrYUvhtoVa5fkwhyoDHKrhCK35dxvXFxKqiP1LfmDe1EVjWWaSLEjKkv1RQDAvXqtgr69qASJytUUr6"
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
