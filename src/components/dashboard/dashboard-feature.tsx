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
    "3SyPpTPqRWTQ3w5YZcawZxs4PZMErAtzRPywyvnxBmpguy7MtZWWyDNJWpGEQUhGAzPDfLP6jmziJRkPMjA7GoK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBYx1DxkuoNMcsd1nhm7uuCnFJX7q8a3kJb3PfJ5FCBY59fwfMQ6dch6mJFrzNHvyrS2YD6setJidTU6849FZsc",
  "key1": "3gJBZoYLrheMmxofAp6BYs34G7puoVPTboU1orcH1iL3GiTpvtzDMTx11vqWrKcAg5vKonBzCDuRbcUt1ZmhS9xi",
  "key2": "5WcYY4uiW4zqizETgLG3U71CDT3t8hABDUc4tUvyAj5Z5L4poQ5BN6DqvMphkkEBzDh3QhTXwRrpozxTAD16tVUp",
  "key3": "3xBLRLtJSC3pSvH6Z5r25qoxQkq7NJDTtxBjkmkeBuNPCKeJPm8vcXTTqZsMfvWR8qXivymXsjv6JnnKomCjTeK",
  "key4": "5oNWRCn9Hmk1qoR3YGaxeM3WAt8D8TnKEJN74v7riZAxu8SWdiQsdwtwyVwsvZcs3UYkwftM4e2RM9o8yvSTWJw5",
  "key5": "4brvGnbL4X5QQtcEcRhSjiAh1UQ2pS5NsKrZ9MQ91LPVY5KKK7NStNDNV1RJiZBRPP5wcE3hoCEZxsc9kkzisYWD",
  "key6": "3KFvjP5sdjoy9f8ES89hmWew4sKNjvLbV2s1BHecdbPurpA9HCyVsivhgu1a6hef2CiLMDcRemZ5sBEJE4Wbq6SN",
  "key7": "4CCzByqDJKp2oKJMBxqrPK6RsysZAcQWeKjKJo6mVwKtD59bs58MSZkabvP6khxRid27Hc9SsjpojHJGpyqxbPsr",
  "key8": "4GbkEGx7c6AGtWRYGFCZPq7v2NXUd2D8MRHggLTNjViXURfjbc3tKHNTjuJWMdMdzJXydNCyx2oWNEBHidqyVNcM",
  "key9": "iQmXPb2Nn9v9JzxX84oCLGJzNxt9CpsukSh1gPxu3ct321WJGGcikNYfMz6tbWoomogscPcx7RQEXK7yFySsRwP",
  "key10": "fnWveYdPnhUDRMPRwu7Wxj1CCRvtEd43ntaYuHxkoFSQTm1XXnfwC6upQ5UagCihyYCo5t2VEGKvLpQt7Snvbuz",
  "key11": "3mEB9WMJ2xXN7eHfXysVEVMe12fDvkvywu4sGX4nAYLbR3CdNFTEKxff6K7kfJk8qg8358Q9Cq6CkQAenYTHv1Sq",
  "key12": "2RZKpXndBu41GUi339j5D4ojizuLrQNx6BbBgmivupf33tmfFvuTgBthFgnSPxk2rM18vgBC3UP3ExsJKCrozQ1x",
  "key13": "RMasjSG6aoo334GvZpaEqQwL2FmJzQph9oCx24bcj1jQssD1sbsxhocBg6CDw5wVgZnqoqDneg2pAJbLx9dtdGP",
  "key14": "2YRaKMJVQomFNfMF7UB6t9z2HAoCT7Za3AhU2d6eyWZQTw5qwzGZaK8n4KX5H3588MdM43JUvwJrRatUa5XVGnTB",
  "key15": "3Xz4VRoHXpn8jtbYRJSJM3ixESKCGS2g8PLx4cfNY38ar5hssYCHhNTKNt12aqVnzaW28ztnWfEdA7XaVPnqy2PK",
  "key16": "3CWeFZapyvYZUq6adf4gTv5vZ2HxowkT4fVXMAZ5Jwxd4WySra6ePtfTdxjNv5n9C29JTFdwRRuCDDTUwSqrarno",
  "key17": "5fhyrwBomc1ajiNvddy4f2tu27353B8YTApu5WTcadirDdB5ncEVtSnz4ccR138tERptnMWuuJHHSM3t2nG95n6v",
  "key18": "2Zyj46fYxNnK6B3DbqJexTDh7Y8fYP7L8Z6SqG6aCJSJzzph2r8JYjiyCrJgrgDyEeuo7w7ftSBgszb4yiv834dW",
  "key19": "4QLoacihPGGgrxizUeHTAhNXyNrZsjph1qB7NgNk1LSV9QbewxEgsVkxDfFgjkF17tvmjWVMx7RG1BhuYQvxtTak",
  "key20": "3jjHXhfURbDAaSf1dwGt5kVHmGRPFrPDC9W2FEEYSyCXYeAMmpfLKQwHY5evH2txYLtYRiLzwtF9ununeMCqMzyh",
  "key21": "4jmg2C6cp5auQeg8SXWE1Mk8zBeeoJ22nwHiUBWTF9iNp2Ar1EH7jPLgNZH2aoRtLycCpdRLbMQDqqdrLmkFiHY8",
  "key22": "4mE5cLJ4VTQRtng15nCuC6jVGfap5nXUTk7HTM9xHt1qYxc49fNC3E8bKPQbwb9VDRGn2smwd8kLiBJpQgo4DEgn",
  "key23": "2y5cDxw3fCbz4gx4AhkvCQZnLiJXAxCQ56W1ranHDqJDHXwfcYACVQXskrYDyeFFfozXLf6uXoCopho73squVNVv",
  "key24": "6xfrdNh1sASBBfNBVSFQzVX6b6hDtUq4kYC8PBXUKXWLecWj4EvLqbqPbSKmZAn5uvVZPuB8i6GBKhkmyFohUQe",
  "key25": "53VhGHjWmR9SzxMmuwW1rHtX7uZq1c6KwdC5KssiLBmr7VXZE6op5ttSm8qVpauaBPGbf78YRAB4Pe6jZfPFy2FB",
  "key26": "2ieeZREqLTzWMFqAehXB8h1M44XWBoDUxcPPsqYR1skoGefdqWhtMxwq4KX4kWK9PhosTpsiAwvoFJx48xRqL1yH",
  "key27": "5who362RFU6xWaH8KnU16YADPqjN78pL7KD7fhxur6bz1QdBVpFXBm3PHNWtu3FDpS297pmxpEcfoVjwmAw7v88",
  "key28": "2rsSF9rXufP8sZU34pYGMdKEkfrxUPX2sCrCdDnpQBz4hHwfU96GYd8u4x369asQKBu7FQQgJdwsKjZ3CYmvZphQ",
  "key29": "5GKafLYFHh1DhbWeFb22Qb8bCRW4y3RY7AEw7dbQNfWw4HHn2cke6Cv62qKbhcK3ySFm5QN4vfeTV16ZUs1oNUik",
  "key30": "4xFgatXr9Ux1hZ7ws57h7nfbkkgpnZvnSQBJF33bNuAEnGeTJ2e8EMdDfY3J1cMaknpTVAFYX7UT2Hh85LoxtZvi",
  "key31": "5mmmXLNKvT5StLogR6m6iUiU7anPkBLprqPfSPPEsYMYXxjp9MYrDfwrBemAikTntT4QvBBgzeUtqyfbdDXtbx1d",
  "key32": "ozvKbMG3ccjnUi3gnBbUpBJrjrxQcXQ61LoJBeM9aMNXiCEnyPiUS8pfNCu8o7GqdufMg2TDTzHyN9mmmYsUSpT",
  "key33": "3MjMGpQm7jNGDwwjpaB3tUU36tMdBqkQxFXAKXkT1ciz3B8dEZqWZTMDAW1WZt2hWPSsDFFGGpD2ZENp2sTGkAne",
  "key34": "3LuHELC99oPR1uRDovLbMuhbzTno738hHuhG7z8kAuNM7sB95K1qMgB3QVqQj8Pg1jWjPK1EwiQHWENvXMq6DGTX",
  "key35": "2YEJd5ShTN2dQPyP3oMoziuDEjYhPczT62rqr3GNWDZ4itXLU94NnsXbQZ2TUGR9c8NB8a3SDUGp9gt9izkvWPQg",
  "key36": "5UX9PWhatQyEuJFGDknZxgSJ3LYnZF16j8ogfAx6esGqY7P56CeTjFQspYYe8PzfofpYzMRG3RJbNKriieTofuGs",
  "key37": "3cozBkYEE35JiKxdVnkYLFD7VVU6n5LvK682xg6SHuWJWLi4osSTcXtYEnEAoUqwvzApQTVGmFiUUjPfpnZys9BD",
  "key38": "ysatFyDrWPyfyurU2DkZDWFtEv5MGRnvLf9dTExfnh2mVzhLFHGQzcQ3YpFYuYRznss8U7s5mpocJpwkYe83DJK",
  "key39": "2sJy3Kt4PMAx3PGKCK42i1G71CiQjZnpMomAUAdEemYTTv6nxZSNEe6qCNWmdn4QXCu5DEBf54Jkwz8N4gyGMfPY",
  "key40": "2WmdtHf4TxJ4LGm7MBaCiASHZhvRUeZ2RnUPZjas3euon1c7QpXy1pMEkfkhaF5BZmQeMLQ21rtNmJVwfvUt4X9b"
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
