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
    "3wLRGjzf92yAt7dCJz5cVJ9rnFqSrZ6Lxp7zbqaiCCt5CMqqQwvsSjWFsuJG1FZ3corntv7aiBSHzsmnDzsgEkeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNrcDTFFemdz8YAuFPyxRvEhiaxAgtstDzbPg78pCfVXu9SVoEf4KD6epfFcKpagqLPaPMwMkcsZPVX4TeZs9ez",
  "key1": "3YJVQ8u8CAKc5zokqGxepEn5n3PQhm6zfpTguN151jSkaW4ereKM2t8DyFBBUfmCtHXmQH5tjkoiKkDsP4fW3kjy",
  "key2": "2tg1ztAcBxCA7hd7JPAxqCoHDsys27eFCWaEZ6DbSZqd9E6K9CUq2SXVEcAZQrWNbDeBznhmLdcGskJux6N5DJJv",
  "key3": "4fnjYEEz88HhLxYxKSysiNAcAHvpDZdEYp462actW9Nm1p951FNXqcUsTLRNBfQmMSFTuxkszjyhbFW4798bmj3J",
  "key4": "2wKTiXT5GoxvQgDPKmW1PRrff8LxB42gFfhLUejcez2W76wyvutLJ7CYG8iYvnHDxmQPBDE1uGbHDDsb7BH48219",
  "key5": "dsWKHwE6aDjy2jDAyAACRur3qhH4Hrap4RUko3zraaDssKdsphTsbQskPnfGx1xwq8dHtE5eWh2UoyZ2rdP7xy4",
  "key6": "HtJyD1RutPwuQZmGpFAzS3x5CdY2Fj5eLK2SBvZY2UrCeVaZwpKzjQh6Tw1ZdKmiwrFaZbpCJWfcMgHReqgme2G",
  "key7": "ZHkZrMhLiGX1St733meFNXNjVbRMkoCAcCvEe1XBZFhK2jFaqy6ZYWni1iM45zADyEJzEhceeount7hUVUfc5tw",
  "key8": "4kGdqzw3MD3THPEmEjouUsdoeSr8L9Hc19kSpduxoCJP4uPme5miDA7z8oRXM7LaGxdgxDHKt3Lw7AvuWHCBB9C9",
  "key9": "5yaSELjMX9Qhxo1cf2Sw7JnD7shkZqYB1eXP9gNfstNk83tPsyRpWkgMzQ5gagiL7KTN8pNvQxLzqDsY2MugYDFR",
  "key10": "5akWTmJWfoBttr516yUdt2R1oBQhMxV2toRFy9a2Nk2DgFMKpD8mVckPpedxkkyMgnrW9iGx37mdV7Gxb5EoAxZ4",
  "key11": "VnjMV7vD4sPwhFvybKy9sj94aYBxMcPcJnZYEtV7A2QB71EaRrkwbu6jn4DxNLq43EdRxmfroRasARofEhxn7a5",
  "key12": "5SChcQyaQDS6J4dNdrrVbbzeAkyrDgALzzxuyBEJ1xi1nH9W8HvgEGQWhWvKFcFqCnjWQWgPPkk7FyWfnn3F4AQN",
  "key13": "ZdzhYirpGuLFQz36yJbsJsXxKwJPfnCt2LgFcW5g1cGkytEGz14ut8o11fTXVv5fPWfUBGVa7T9PgLLabccbRyF",
  "key14": "tE7a3vGCTuCsfDXe5RtH4iVSZKexYK9QYt6ULNU5kVP3g9yGtVtQh7qfzv6pxeUHVgCTnWZ1TYp4HmJWVmSkXhE",
  "key15": "QtBAJdeuKvcDG8CU3Guv9VUs2EYunFWv6ixPfK3z9j26raknLE9JKCeBeWbHcXntRYfJ1SX3sys1nxNTkzPG8SU",
  "key16": "inZeQvLy19tFwqVvaaYx9R6U8FeDs8rAC9juYsSRQqJUTaRqmVwD6yk5osZXBEAzh8ncapQcTAEwz1B3jGM61yd",
  "key17": "5kLVb1MPAK4BobP4dhebnekwob4j5bKf1c2vWGVSV1NG9r7WMu33h4EdpQnMCJi6b3JdL4kZZ5F76UrypGank3Pr",
  "key18": "2BxurMnKRk2V5jSgcFscYHZGoz1uPFrHLfSnUwKDJddPGbpKWoNXxASYqHyyAoNNLDBX9bBRnjnirWyjtixD1iRb",
  "key19": "4eLeyrx92rGp7zbpPFfU3MsPo31RHoc43QpURbPcrEHJnFNChL4S5h4odVuHcB6c3BcdWLcZeSqR8WRM5DkXgxBe",
  "key20": "5LoPWuRnbfE4rmRSU6VcxRM6vYW2p2LPRo8NYmRu8e5qXLo8K9gwMDrPYq51V3NKRi7UXJChhX2n2zaLjbjH9MpC",
  "key21": "3W3RQuHZKsB429UwhDXJ3xKdt9r9o2eWndF87RYhckGPw7pNLVwSpdjmmmQq8AjMdsTZpP41YwjTPa1gsqkLdGyS",
  "key22": "5MkUefPsaVcvP4zgpXFkSmfWbMk2RASRNjP1BA9NJJamyb3aPHR7ck7jg1bFZ4L4xfFnvTm1VvmeCNBLg7bHWDV2",
  "key23": "YUvATNDPJ4AvWauF1UKSJzV9nFhUB7VDv7HXzWbvas2pbs9B3UYZ2W4BFNQUoFLoHng5tWScKVqCgtjwyi8QhTF",
  "key24": "2zR2cFCaEWdnuHWvbR2ZQgGzoHZGaHfN5SD4mvDR6KZj3KLn8UwB11yQ26do2e3gz6QS8Gp4qtjA2qQcHe9APqtd",
  "key25": "4ftXsocds92Btr7MHbHGtfJbnXEEuoN8hfpGX4WvQsLXMXnF67FW6oRgNyVzW1kGQ4UXuGmzU1GPFSofSuHGHzQD",
  "key26": "3oMgayzm8E2xUZRYsMHPeeEf3tf1vuNTD7J4HHVkDrUvnHmeKEop977C5sfkApMb4BdJF2JYS9o7R4jecKfw6DXg",
  "key27": "34bnupZbqQ4XizKatYcVkHkBFQQbmGEbdfqU3rU27AXhYgSS7ycNiF3LK7nARjuiyynyAgqL8m7rhxp5xRYaWieU",
  "key28": "5J3JyNnqAFaSeNQUUmXDJbgEXwkk41GcveBo5qBwfBDtyUVHuRkYn1ZdtnuHKBhJebSavm8GqJiVcJEcPNjbimGW",
  "key29": "2quAg23CwxCUSLuKe2LUo6EK3cEgU541gG26rrMG7Dc2xN9AbyE6XkytVn5fLDfkc8B35rkY59unSpJb1mJsvE6g",
  "key30": "3rhzjJA2cFCN6q3YpQQACmjEBdvps199D4xTnrDcSinjYxhjDUwN8yWjzaST4GFTMprVic4uzY2aqmKs5cXfYH7s",
  "key31": "3tSwaz9Z1HzbDabNEEQLnVeVWRSSXWi3usDztMc7MvzLo7gFic1Ui27hS5gSnFmEkZeSvw3LG6J7eqjM3STSfsne",
  "key32": "39wnxQjiGuEMLNMbLj62uK49PShHavi6tuBSecTcVyTVe5D4HGUj6XKiia2XTja31DCEaFUyvE8aCA2GwjEn7HNG",
  "key33": "2TMdMqGv1rytViLJ4dBa9QJgk97wFsfebCpf6aRh4wv9jrPDitRTfMLHYADZNKAUz8jiYrmBBWoFwDpqFnqNDXRr",
  "key34": "3RKGtdb87HpCtnZk1X318f4fVncFE8XHFRHRaKbSKWCbgFSmtiVHU9ZT9LvmpeC8E4y7c7Ns59qPb5CZvnJivtU",
  "key35": "5X4BMxvZye1FCi2bQmLPNKXihD7fs3x6hzYoKymuFnDNcNfZ639To3a3Cz4qUK8Ctwac9f7BcW2ZKKX6DvTsFv3i",
  "key36": "3UodsbVsZzKgBXRypEAa7iSFFv65AFyLs1THWNUhcvTY2Dw4nQmryNxhidFzpSrLe5xiURzpAgRwMXb7XfVLxiNV",
  "key37": "5gieZLDkz5zm2p75ARcqi9PBoGSywQP7ExgLUjH7xJ3uvcEzNv59pPdYEmCU7Ssu5PxW2YkCbT3tDjYdpGRhxeVh",
  "key38": "5tdnV9mudPZdv2u4LBcXDFasf1ZWUXpTR4Sv2x9FjmgwESxYVZKBDpmuAR4qXRXszDE4WM1rMW4kSjHADiQB9sMj",
  "key39": "LnHmsXZYeNtUHPGbjeayEVvf919eb3CzNp26pXobowbYrgohsXfQ92khrQpypnke3DdDe5jnmGvZLDPAj3F7N8J",
  "key40": "3ZHCs9yFroDm8PiEAbVchETyQETUcTKUeBr6MTtNEEeEFwjQXCV51idDqGR9nT43d4zX9ZzALwK9ekeiRf1254yT",
  "key41": "4nkiK7o1ReAC6xRZrUsR4HyfNk7yizT5BfMFHT7doXjXYZL63BJAhAuYjjgrS1iWaLevYqqPYev7dpXQCmPkvgep",
  "key42": "4qhsMVP6CgpjzH2b5ERmLUvQoLKYt3FDTVQhWbakUsdKW4Q2EJqcnJBQnScZGBZxjDZYDGz4RYVxyBcTwAHtf322",
  "key43": "3yB5yLHDRCVkWQp3AmwfxQkSK4M2MvzhpoQDHYX9Yj8XEbj3XeTeb3Uoj5yuwT6f3Zb7bwmnVLuDr7K7fLbwJR64",
  "key44": "5RP2KkZDkaJuHYNjvYDLR8LaVjnPgmEHqapJUYZXMKeG6sSSES2B9yFH95fJfggM2YiMBh3SV9WTkD46JqDc7JR4",
  "key45": "mVqs4pZ2U5HEzFhBsC2x2V1SSkwShvUr3FFjpWKdqATUBoDjSVzqecuh41EbCCBZ4N7F2ncRVY5B3sRVs7XQpSM",
  "key46": "3jFsBiLn4gvjoEjzDxb6VJFEQADQw7452Yigy6sEb6YHM8jeEqtfJYAgRBjPdWgiKHamw7qaG6nWq5Mfp3BAT64M",
  "key47": "2DZEex6x53Vuzf7DYX7VfGwFVQj6ykQydQzSbcA1cY43banbxTgdY4DtkRL4Ur35NZT7udgvo85RdHAxut9qYGLQ",
  "key48": "5V5ZiiiUii7Lbab4Xb4ZrQHX3iLjYgTN7fN2GFM38mWGpetKofspYAFoaycHxipJxCQBvrP6539UeaHe8BwVfwHG"
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
