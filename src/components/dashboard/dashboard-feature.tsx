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
    "5f2NkdHJJYhw2QZEpwVvhSD9aG3qLb27hvmtdKgMz5QoBgEJJrbgVqrfw1McgKL2Tq7ganjQkhE2P6EUQCxb6g5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAJ5QXtj3vu7cNm7ySZeDNqyPyVRG3LvvGZSYpjovnLfD82ht4WAQhdovaQLCy9pGLgPuBknPhA1xMh771S9a1M",
  "key1": "5HapQwvR3C7Z5CyERszTGVztChmyxgoXVCVttagQUwSKdd61rPYPfjMZnUpGnRuAYyy8WGLj7iNtxWczRsLmkawK",
  "key2": "3sM1dJToCPRifUU1koh1CJuiAj5cGjibznVc9rxT1mPvqKCp6u3yhVNsWqm274icLRMA4vzCQD28pPGvk9KUSS2d",
  "key3": "2bWB8CNQR2RwTxSJjrCkCuajFPnMMCfTwLYYFRekL1ErJyBtpGEXx8kVPiYSvZtF7Vg69FW32b9NBGtX7ivKhxYT",
  "key4": "5KA9LF8XTAEfxioXga2rTEkUqz4p2hJ6eg6UqBLhmZrciBvrAfeWe3iSBgh5ebMD2bxBjqEmuDPD2adaC8h93ivv",
  "key5": "259SgEBvUPtK7RXWZm6z8yC4AVfR1ThQwTRCDJLkJwSvyg3dSw2Lfycv4eJ38T8cvZSUzB12XQ5gXsaxscraxSZW",
  "key6": "41v8XUdHM7oALbC3yCUKpUoYeVtR8FoUxmmB4UqfFXxYhe3uMBgdHQsghm5u6Uw6kPtaHkecM6jBqijbTqUopqoB",
  "key7": "3wDsbwJMVAQD4F4zUSL1CLxXSFGHhBgCfJQkYwWQibRqy7Xpn3nxbBfwWi9L4P6UmgDkcLTZBWyvPrWzxLonMRFz",
  "key8": "28EnHQSfpaRjFC7mm4xp1NSGFQfsyXi1gUZqPjvAwipLUPqmQ2FiRAKnFTqWLo74HsW3HrveJLotc6atUoMVY7wa",
  "key9": "5Tb68Q1voSSzU4qzd4n9MYfkbA6FcymouQNmWz52F3Enc6VrCAe3HCGdELy1u86Z6c9hc2N6gALVdypWS6YLG5AT",
  "key10": "2SqVrbBS6JmwUqvREd1MmN45926R3Ennd85ZmGF5ciq9VpwdXcyrQ4ZKWhHUFhij7yfWYDMBiaN9CR7J6Gp9Q2pY",
  "key11": "5vfKnezKJwegaNjVzn2V9dcXZwRynQpE148Y6nwo1aycWafb5sFdM4CGXZ1V6J3MSebRDDKo6veRq4qRbBY6cD84",
  "key12": "3ENBH99WmMGhaDDa24D9RiQupsDgQtEsqUTRFx4WfsgnDB5qtdaq2zB9xYfFcFwoUTogXzd9brB2zqHRtnhQLquD",
  "key13": "5MstA7zTYPzXSMV18i3KxZdMZpHKWaAH6bSCQ3tzYXQykSwdvU4eR3m9rEPhgCnM4UVojradUV9GrUrEiuZZj58o",
  "key14": "2XvKUkKXZbsBydo2qwQwfc7HsmoXGv9ygLbQTxYQFAqwdR9WG7PsdrjTZhGq9WchiBSVEKfFu94A9YtAGeBukzzV",
  "key15": "5mQ4igRtTpp97o5gS2VHpCcQcaZBwANycR7KaKr2ZdX9JsLPBb2R1SE97sZmLXVBtYxCaSST7A5LxrecoChPgd1c",
  "key16": "3rVBqtZZvufD7by9sfbsHSf4wZNaFk8wvUeZ3uQYrPqQt4zt1wMgQcAppZ5w3isyfAgjtVYGEQKfbVu8cxCWHc7d",
  "key17": "53Zbv7muiTKcFqP5qEMzUqo1dLsWLDn2F7kzzHqftEY3pGKJEPw2quB8ZU3ZEN3DVForucfuKTjtZLjQVsbmuehS",
  "key18": "oFrjeforuDj5nDSho92rJcq8ZH2DXyn5DmAFujkksmrJwdu4yh3qUAsm4MQGtJzjSPZPtnm4YKYKGxpWMUEcTbf",
  "key19": "5qrczQiiQhwF3wWEzqDuAKRcq4Y7XCLJvhGtQJyMeg54L9f8AqwKXc6yT39Wuxb3A1QnouxsH6Keey7niNEs1AJ",
  "key20": "3TBvxGQHCtsWcUHBnBFjCEZrpMt53Rq86cUSh6KE1pmhKW2tMKr2AL9Hi2jtrqPGponj5EGCWzW25m1NJ73sjr93",
  "key21": "n4eiiLSPxiacQhnds1SxNp4egoUwSKYygp3rCxyTyXuhFNH1CpX5TpZ4mGRmyKtJGMQoFxTDZEuUGxdZYd6u7Ae",
  "key22": "2UYCsqE7pUkdAN6j4rHwcfvkD9p24rdUVWqMNotjfu8w4bwbwyLwFk9sxWRJYsgigHszESEFP64Mn8g9gzGEo5Um",
  "key23": "3Z8v2KMa2PajuFM3Cmn4UT4KxfGwjUU29ZRdPPJ2kVMYprGgD5JiQq1wTBhcokbNTyXFfL9bfcBSMXc1Yn8C4MJy",
  "key24": "4wP6DyidQXCuWD7tjzYM4Nh9JWrwJd5Q7J2TqvvFm1STxXnM4aT2AQ2wAAXSKuDqAyEn9ZEExhGgbRPrAFGFeSSL",
  "key25": "27MFvVCxsAVWekEQ5Tcf1fzeyFo3sJvf1Yo8JT9aeeAnnF5tmEuJ69pEiVhr8BKxjqxpJv3DmGv39NhgAw1X4wea",
  "key26": "2Hii2H2WehaKv6EPAnAct4JGM22yCocyEx1YqNoFEj2CazWvSYnwwiTqZBchVRDwbBhhQkPqEYjDRSd1KaRgvHxY",
  "key27": "4CwwnefY6PCkvL6bmDdpHfJqVshzGSGtfdStjctKgERwiA6Ptfhx1SRd51mZrDk9JsQdQ3YS39hL3fo9mvuJDq5h",
  "key28": "3h5aJ1hhbEfaMd1Eq5KR9JMPk7W3X7NZ5bcU6cCCQZi6XEZTkVMPezb9Gw9JEBkPfAeUKkBqyi4LLGv1zkWDLv3e",
  "key29": "5sqTStSbvegHv8ZdiaKtvG9z7fMLDVpqAzgTkFxFM2hpajwfZ9qoTUA3H9pyD4PgK5FXMkaYoZbuPwZ7RiyHSaDA",
  "key30": "3EyoriCWdQCrVhsmczYVeNjSPGaVazySro43eSnXSDzQVRYqtWLdV5rS4cLcPnd1SY1zX5ksRyTtZRGrxLaRPW2e",
  "key31": "4xq1NLy7FxkeDd5d8bbbMcC2FzfU1cVaKLNwbcEZS7ThxMUewYxPza84b6kQAokkb5ymQkK3SpZjBtUQjGo4PGbn",
  "key32": "jW8yUtcMjNkTyAftKw4qmnmXo5gFevqjBHcWJsDpjKDXxCqU1CK42ifKRWMaaQPWypfvPVtqXprF3SJwQxXhsX7",
  "key33": "5hwiAs6vwcxKdbwv5GCSU9igT4f4iNxwwVY2kurEVcwHaKmToFGS89hztRL7QAmFSAU4B2UHpDXhNXyxoRdQtd5j",
  "key34": "5JjLWqPyJbT6aFHbKSx6frC1YYy7Mxszct5wRJhnuSYJV7Vc1fK16JHAnvVNGbRFQzbxq5s682hQTNGC2ZYw9oCY",
  "key35": "yirbJPwVe9CeP7tTNVuCfCWNz9raRQGHKDmV6nVJCd7e44MizfHoL9GQ2wFEVpRjiEm4AVG8faAzJHNqpY1LZnd",
  "key36": "2WujN6ehgJUcqzbiULAkAfiA8dr9RCjD1nTBrvP34RHmecB1TCRUdwJc9tpfhBt6u96RGousjACMCcJomJNkUq1G",
  "key37": "66bCgK9jGXjbpsGyENjngtp7GS7YWFZH3QRxtY9hmiPG417FppM8mQDv3xh59pzK7TGR59g1RqLF9b6TLzrMoiKg",
  "key38": "4G1sSzpQwwoZWNoQbbA6snvHwqhZbBMKHbtbeTsjRZ5xBgYwqUshwDiqZfGEJqHRsr7Ko2HGdmHDR9wx9nti2zWZ",
  "key39": "4FWibjQuFH47SYFXJ8S2BZu3xtdiSKVXUMmFcKvbnbqSjvFaowQXF1Nv4efhS4MBz9emYprxyn8xBv28cXgcH4dd",
  "key40": "62kDGFio8smHVzhyyUJo5EbaceqPAS3QJzLPtyR5LZBgitPes7GfuReTDafffYVhSnX6qLAKmx2KJxv1rZ6s1huX",
  "key41": "4q54UYPVGEDnyQb6rKKm8WHxwhAPBUuwbLoqnF9Ze2BSVM7sL12MZGTbDJ35cUu1ZUNrSk8ZXJf4LhfxKwcbEZFk",
  "key42": "3sg7XtS8pyirJD3rGu7kS7KsMoMEFwXQp1LYTLyGqy4gvpEfgefgy2zr3r1pySHRanZPeo2Gj2EnJRXkV1cuLYKa",
  "key43": "5uS5jPfK4BLvnyEMEAMYQYBfhyAnchQnDLUmfRmjASbcNKxyWqmeUdoJJxP6TEnc6XfddxUiEmD8YCYFucVeW4th",
  "key44": "2e7tdPDGCik9YRHaA1x6HHT6xbv2bjRcETmLmyQ8zSoyWYSaW2ZEQHvWtN9re39yUA2wAGhGf7iXf5gohjGpcvtQ",
  "key45": "3GtXPiypmbuftnx13NyitESAVFgtC9gxihDFzjQcmjnumvcK82d4sheAJZT7S7ACfKczrL8yVvnYafyZU2K3xEBS",
  "key46": "Xzaj6G3ZiGNqdinMhrnP8tiGv5QqTM9hKLeaKALFB6R87c7Z4ozoi78dxJVESoiLQXG1HWohQetZPhH57vLn7Nm"
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
