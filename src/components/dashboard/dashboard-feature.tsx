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
    "3gjUHTAjqD1HyZrDXo3r4NE8i57BVJ98nMPuy6UyuHWHSdGiWcQGirRyF21jgVfJHxn3eX8Gm7ppoFszBkHxu4Bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2We2yYgfzfZoyAcXLYw64LjagqZ6MZ89J9fsGfhEgSo18mD71Xn2KNDcxW3S3DuVAwmR2SAsuSauD2GiobjB5JeP",
  "key1": "128E3CTbRMzUUeecrju3JC8uond3eWVFqC5ahEqLexrqAXZbHCWQL1hyGcBmbQ1DqNTAbnL5gPhk2pgGAAQXWHbJ",
  "key2": "5MAm66nUhjydktcggNSqf751rqmjpiM1YjnDAEBBjxrVn9BgC1LDh285quXcBeJNSEv1pAJSoogU4cgFy4i9erjd",
  "key3": "58svzKRnxnXmiHN2pk3AH917qCcsS6sjiRWQxyS7RjoQyqstNV9x3cVLDtcgCb47UxEPJUYR1Z5Qji9GSxKnKbmu",
  "key4": "4U5EHyPGKTCCR2jV5H95Amzuz6NKgLTbKeK6ayQf3ZJghe9AC9qd4ZszTxCfMs9HJcjWMMrMxhSDPjkXBFSTQ6Sr",
  "key5": "2RnDTgTQ77v9eVCWV5tVcdZkQE93gf8svKWPQUEvnXrQC8k2zxZWxQ4jvKjZ5TnFmh64VPhKK8zx6KYKMZWx2Sxk",
  "key6": "3CjGehmSRvzg3spe66jaMkFV9ZaPNX7rzRDqyjpfFyadYjF3oRpQtHXi8umyf6qmWzjks8GUmb9meUDb5mBgDqQS",
  "key7": "2j88sKk8pgkeLLMGEo7o2bEWXdmeAHb6F2XhmsQJQNsfX177qjxtuaojEDkVRmx6nwhySP3oAYcGJx3HDSWLoBQZ",
  "key8": "2PjwL61ZBbxd9wUsPPvWxzeVy7UuYXuMxzbP7eUytYEMm9pR94S3ioCxh5Ys1L6fptStfz5yJipc8zvsaZZsh4Hu",
  "key9": "GT3fV4DoJi8gwQ9kEYgN83m4Ubn7M6zvvMfUdCbEiGqAypJEwMqBcLKzay4SAwMB6CBS4imPXpkYqF31qUDtTXV",
  "key10": "4kFTVCbbv4XSZVK2VLTPmZbNQC9BXDv2VrWzg3JWgaHf51PUWzeJcgcQDbLZb5MdE8RTFt6QHssaz4knwJRUpKPu",
  "key11": "5VojDstHL9aThahg6Wi1V4mGj13ARCwN1erUCgnHsYvCb9V2CFwDU4bvTWxcQ7mL4DrYCFUyQZxvVo4TbmezyYdh",
  "key12": "3NEAUQbhXn4CTToq2WBTKkRzLDSP4UDg4Kn1473mQ16U5saU6Z5V3rQBv3sysKpF6tsFFEuTYYMbm2ppzicwuNWX",
  "key13": "4kzUvLsytT1AeoTrNbvPv9Ti4Xdao8tZfJseHFrowNVAHS2HZ7FvgWtWz8tVZzNg5mZE252hopGPBEm5EiWFt4SQ",
  "key14": "3jpSEUipABaX13oiMPbK825AyAvm7MBKjHMeVybGt9Hbk1y6wZ1FLTWZYBcrMdpjHntaGBqSoo4rcgj7SDj7YnXS",
  "key15": "3jRayv8PJz8egyQ6rcMhQzrA2iMjhTLvC5zjSxGiHDZ76gYapy4DbEzc9xmUcMsFcfupeUm4sU62XYvuqMbG4brU",
  "key16": "3MbtaZ9w5HDvht2t7phd8BBj6oBxFy29y625CTzvRtnotGfsexQgACV2FhXQXGLJ9aitmC5VjhyHSLUUizpnQPGt",
  "key17": "4vW2MQqWKvs9KTVAz5nC6RAwiK6tqSk7kwr8xnYQHvg3gL975BzuCqJXk9YmBjJBAp1n5h2C58YpLyfnFLZUgXb9",
  "key18": "3rQkpRuFnbm19NxV47MY74KvsCrLkRJcfuaAzEDB1cZs642cZ99wzo1Ffn44EyLPRpMh9qxm6Go2o1c8XH686Zmj",
  "key19": "2RC6sBa9Et2yekoSdNA2uNES4kCKCdzniz2DwugHpjkfXW8wiAx8nPaUv6PtimcAuQ5QY4jrkPZasGVCxG6yanXs",
  "key20": "2UT74XNdvKujwQQZixBeHSw5EDz4236yeXkH1kL4h6nyT3mqVFGoJRcTkGhf5CN1jipzbe8i7v9pmANquhsyHSzu",
  "key21": "2urNoWZxAH72imhesGJezGrhyoszCeb1dNhcoiTCDgA3cX2K5zSxu4iV7hfdpeyZT3nZvHbKjHSbcs8ZemQpu76Z",
  "key22": "5d8xXxufyhzbG9fARRMeKPkmX5WGp6ehw1k4cB3XzfEFioBokme4gcC3kDao2XWvteTp2X5zRMgbXjaWZdYC3uzk",
  "key23": "EE76nmWL1wyJKFc8RXx5hSsi2e285pH8Vg8ViksWWJTLdw4KGb7D3dRJLkNaToPXzrcKVixbqZ3iXSn2UfJ7NCR",
  "key24": "48QR27G6x7rVSe2gHQuRd4NTwMBXgt8G7AgnXjHw4k9UiU4hBem39s1hNSodkbwrbRYHSVDFvgUsXJoS5kiNLbjx",
  "key25": "5nieNBshHEK3B6CTi5hZSsKQMrg9hTNjb3wh3A7wDJDp6aG5vtUm8sMXE4fz8ingucxvvfemNQTsyiKwJ4yJtWRC",
  "key26": "2vsn4XmzC2PKW7XXkWTD6xsWkM3SETJpJEdocCTYiUB6ZGSZJrgFPASpbhSg9vPvA6BEuQ5JhxoWkKKNExfWLbnd",
  "key27": "6eZ6iDCk3vs4dxbzcgRaBDnS7RTByZynKRMBEjo1cnPyc54GrjzkzqeKRJJ64mh2esy14dBFsmEcrKHq67jeaEs",
  "key28": "5EoNy36Kuzo1EQxMn1Vzk4VnqykTRsYT9DTyxhti8ZkaPTXt3AZ4XYT6hjPU6g6bGAPnChBiqtZshTrAHMJCHTGe",
  "key29": "8cM637PQ5XqikjGaG9WdGySDbuyA3sdgH6c3DbhLZ9unWE3skFSZgmvAxA8PesnqoYVjaS4QTfFmQZMSg7tsbxz",
  "key30": "3S2j8fkn3tqigwQKjDSanRmatRXsMLdeXj6hokjrhTFKrhwFPQH7kVrS5c54vcjrqaJMjV6fDHetFaWhkBHACMbL",
  "key31": "55pa54747zjRwCYDJfczjcYpfrc28n46ZNVEZFHes8CE9FPvc9CVsjNP8P1sSNkyGZfvrDMEaPe8vQg65cL4gcgz",
  "key32": "TxJS599kQPWWtgnWDCGicCD7QkZ8gahiypW18Zz9GticGxZ6E2HUtA18yH6W37Zyi7GapR6zdKH8BmK84cXsjta",
  "key33": "eGfNj8iPHwGT5nx7ovjHfxM1JW8ftBLKrpau23r6oC854HXSdwrVUuv8bc5LRBuzvAUKFzmaY7v9FbUhxTe1tNG",
  "key34": "22LfE9pJhqzCeqiKqpLbczEKkjHDczVjT6Amkcj8DbL8ZEEBp2U9ZHwe43bAGqDzAXmpNTNgR9nTaJgWMumU5wMy",
  "key35": "qfZR8L2onbz1muUPd3tuxUuhvzNmnJZbFFZYo3eLiKid3k7yUtgbpV9PScex9FdPC64k9o9bruJF3tMsSen7oww",
  "key36": "4Hr79QWacibwenwYktPUzzLn2mhrfyCWN5K5SaRVoAqmw2EkdPHTmpCe8DH2L4XWTZYUzuqMwdwhvjW3HXtGpbn",
  "key37": "UpTPqyzS6gDt3x3oKE1AVnowqczAe6Gm2bqbgcvCNJaEGwn3h23ptmsCa3685fk97UWhCdP1gFQ6HSt7U6Ku1FL",
  "key38": "LVK9bFXmicQ16tHESrory3eS4a7KsKKP4KZH9uEsLxgDg3uaqtjZZQV7ETx1C6BUTaZzYynJ68Z4j2bn34uzBN8",
  "key39": "5pcZ9bGu35UQsviXaTXwxSYN19oxtHCCgFZZiCmDJCn5rUiJgn6TvTDBx3akXeKq1jhw9FBZAJLwFon6cFW1kJSw",
  "key40": "YBfmi9JHzU3zdJbHBdriB1hKjLfGRjMJJnF4FG6kmzg54uVybFpmhfArpFD9ZZu6Fn8VDoDNwDQCshemFaHAbhS",
  "key41": "uhHvM6fhhYzske8SfBTrhABSr9P558yhorcXdp4cYwkp75Nd9shCbR3FS5yAfDt2yxEyj2owS8oiXDQ2EtPLRYe",
  "key42": "PxLbLQVmVVwnhKpUpgwEkc7AXPGypyRXDPw7BmCxCTW7XqRZQxcgYoShhsuut7WRFwoghYdznkgviEUs8BK78tG",
  "key43": "4N67fLNVuD3j9LNqMP78qoNmMNu4UvYHPrkaPQGk6kRBzJavX7TL2embCGdtcDcRjBYwXvDM2p1kqVsrzz5b11AN",
  "key44": "2tDbZnbMijAPWF831pnJGuSMJizSDivnyH3XcBBwf45V29Mo89hBdJRHRq3pfef4Gu3B1agRgoE18Dq7z8Ds6dDh",
  "key45": "29rTYYV71vuNkWNV4QHoHL2oTfwmQPznUSu3qHqFZhS89FMa56RkJW8SMGr3WH7Q2RAVp8syHmP8pqV6wECjzLfE"
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
