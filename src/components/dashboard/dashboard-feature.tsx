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
    "3S3tkVzKqM4GmtpdgTJZncbJ4UFjxmtihdoAEL83m4XRzksen1LY4AikjCd1AxWkYQde56yc2p9mk2txk6kjUTrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMd99fYZKLrsagh6bVHiZ7XkeBXHEdkNyufjVqzztGzmM5jUbjmqLi6gHkXW5s5aaxwapLZXqrxhPYiy21uE3fi",
  "key1": "5GEc8ragRkNwqo3rEWsrGgJtC6d6PMSeJPgfty39BtkSyW55iPLHN5JQNxaQPn2AUV3uL7DX48S4wGhmGeueL9xR",
  "key2": "7tYnbhuq7JcKXfRJeTwebXbgoR5EMQDJNf4cAxiFLzsWKhN5hN2uNeLz3SBCdkAUf7MWd87kRufqcKtcRWzR9Nz",
  "key3": "63MmNXszcrPmFuRn7hrP33izK3Mr6suKuDu9rjmyoYejCLiAn6jxndme1Htk4FSneuAivnSUCT4jEg49eX1tcMN",
  "key4": "3MJBBXmFhqLTw5Y5yp9BkBSHjgP1XkjafEKujBhuV5m3GwsqTcYiaMBRKYVhUMteuPS3WjpiHYE4MfGUz1dMLQL1",
  "key5": "az13GUnPj4ZzSR99EJj5QDvJrMxDk2p4d6dFJiGxiwgDKjCdeDrxxgAQEt3125eGAungVhYHN8nAHqbLYcTos1J",
  "key6": "4j9xaL1KqNEPetsTcNC8hR9vE85pUPmaFFaRi5iuWn94ZoNmHAjkcVT1cADW3insDiPyUSn6K73kN4t33ZHs3gv5",
  "key7": "wnev2mN9AoCU6d6A28yYzUNqndjYBbsmoryEMnehtGQnGkN8nPJVfGPzax47MKNDL8Ge9j9hsUi4nv7AuDuaWv1",
  "key8": "4Ea8JBhLfgJgEqqoHYgJ144Do4scVVdUu14RKVcrcizrSdhyBs8JzBf1bDGyrgDhhrZwxq1avRm7HJ83z2fAsxMe",
  "key9": "4ZmR63XLufBsC9ykNc4gWEuayta7ciJHMtwxcvnVPp5NvoRrwKQoWuJWsvPC46pKv6kh7MgePrECZ4HuWdJ3kDZm",
  "key10": "41bTvzxCxXDdeZpqaTpUy81AFdnw6VJkmBcSkb23RzW7y5ZCDvw3nEq2QwtgqV9QXYyEBFrX25jnR1ufPAEEiQCh",
  "key11": "5ShXbxRp8p6RyVaybdeSSwLjTw1eGwfeSxJ14mFW4uiCLfX6P8qWPfXE2FZae8xofYgftkDPRZaByVL56haDB38n",
  "key12": "56QofZHg1J7r5Nye7f8KfFcTb8pbxLncJadxaygHUpuYJWShDb8gVcfN8oo8bUeCEVn5iwDPzSEAPZeRMRHrTL7Y",
  "key13": "32VG3iMxCataGxL4psW1a7cXc3Tv4eUGMFwW8AtK5Tgt3zjDKFvb6pgfdE4gDTWWPBEX3sTg8YbaGK9F4R7r68ph",
  "key14": "5w3wsQt9up64PwkezHrKryx2uDJXxv4WLox8G5zFjgS2DZG3tbLXfSjPrjKmTMQuFhVPnzw29Csqn8g7TXDqJhx8",
  "key15": "2zFMxrZaQJBMr3oeNAa2tuGpEuBhTMnUUWzUVzQQKDjRPB2PpVtjqsGYQAdBswzpJ5Q5RtPdJgxvpCqcfvgW39fz",
  "key16": "7paKJTUZEw5pU3TYj7yLVog6XicwkyyZ8gaYpGHUHGdzCE5CHJM77gbhNL4URmVK6p3HaEQKyspcwf727vKCQKv",
  "key17": "iMnRJrT1ujwywJuLqoG9vf4MyjoPS8B22B5VgsjVPTHRLKHTHdpUhNGLJ1DVd39mr1fQ2ZC3HG2G68mrpYY69jK",
  "key18": "41fGaDqzx2Me5NYdnsNDiF2idh86ZRyX4wpeDnSoaeh7tndxpF9JK3hcVBPCTGnSpmA9tkg4PeVZQFds7FoRXcCe",
  "key19": "AiwND5BRw6xd2ZDMKwfSWkUiaREchiJyPjjbZrWUrZTR456tVYhJZaVgHMY1oXhiQGDgm3XuTKctxeJRDNwzaqx",
  "key20": "3Lgi5EtbGWkoQTijvfUjwwXVMFXehGvxnzVwC5Bq649xB3sj4VtzbUs2oicByRVWD8UXwfJBn29ouH5B188Fo2nM",
  "key21": "2EK7by82gqkrvjMReQUZ3iFDngEmvpU44Riu2w2j8iiMbuKGAvcnUqS6zP53Zx2UFfueMWz4652zgVmujwGu2MDT",
  "key22": "5uoJxmaQKfH9CU3SQph2cZs3P3166F6mGDA6VasJdG2kZWwYe6PH2cqfWxFHX8snN8dczGwF3oAA9cTC4yf1Efr7",
  "key23": "5hpAcf7hJFFoHoFN8hQDyQaTbpeiR7GF4tF7wHj2B8GynpSonE47qXszvwK3vRxuzLWZe4jjhgFTT5axYFUcauua",
  "key24": "Mj2HbMTgAA3TF8nEm5UesJWfojBkEgiDZquMH3NsqnWtNkE1CQpcGxVhCrQzXGAksvP5k5wCGw3rMV8smHLnjxv",
  "key25": "4P8wbSHFE5S5NPppUiE2YkFVboZhet4qUTdtQVVVTKjXj9N4f7qQZKCchER9YdBm1JTzeV85ib9B2ZxtK3kVH4tf",
  "key26": "2vN8yEpGGCdy51yFadAyEozqao5wryDvupBZ1KdrvnedYCi13iiKUwpRvghVwcMdfTj1pjDn5bFch8BSLtSai2pu",
  "key27": "5DoF9zvpmB778N5muThSvJcGtuyHmaoY4axuGGii5wuv1AaNdr66JTjMNvpX6PYE8dCGWkLG9WUbX95qmp5qqSCx",
  "key28": "3Pr3cVAr84nxmCfS37jKdYh4HunchNGXAHLirrBDdg45HA4DSBKZ2mZYDrTcinUh2jGB5y6MRW148SngFM8HQqoG",
  "key29": "228qiPTmWxFWbXVNhdvLvykTunxutSS9GBAxwQ5P7agA321RLC1qrakKMkpnovNtKQh8t7FBfQ5ZMAuHMYWL3Y41",
  "key30": "5kjQAz2wCKD2m4sNVkBSX3WAVGJsTFipL9ZjypShEijy5qmBcQWg66GgfVYPK1vaSB1PPJTCqDLUgggYy2ZWzF39",
  "key31": "2FtSUAaL4UPNUC9MgoFmj7KDMm2audaJgFNmwCCtDU7cV3M2oKWGsjokajL4fYYRqb2nGPZFeQohwvDiUaXYws9F",
  "key32": "Qjk2RZbu9AsTL7Toa79zWKUbUtEboCBK5A5fGh16ieEe6yvnToivKANxZp3f6EbmjasKS1acwZXEyRPwES3gvXE",
  "key33": "3mERhZBHXcgKzm1y1wd9kyyuZxuDGedFd6L8DcCWwQw7K9duHStNfcyJSavRkvo6s4tDgy1oNKLewyzAXNG5kQZQ",
  "key34": "8p1ZbuiKHWkexFMomM4gqGyQ9WhYv5xy5GyUxvpQDzTMWS3g7bM4wdLWprCSoFiBwqCR5eomkdy57pckWN74GeG",
  "key35": "2JNBPcahi97Lnow6NykEuYoWNrrzsXDtWRWJAafk1ASQxxsAeVeihcGJ3iq2DZbgGgrni1V4NUUMT4tUfgqUapob",
  "key36": "4vZQV9zzu8Q1yU6G4dB9obC2RdHDNZRzwnY1YeTiy1qKc1BVKaNmVQzCZUNM7bggUBTzNPqW269HpDToZgWMPBkU",
  "key37": "4t1rYZE36NX5WLCryc1yX597Kq2vSX9CxrwBh6sSHdmbdjH6GHUsWVwNzthac3cuES1C2JudwdetGB4pRU49KPku",
  "key38": "MNTexBhjACwRxeHK5qQVYMh8xWci1mWK2tCQGnk3pSo7ndu1TzPZPz4EcUKcSfe5XcioggU17wkgStkbDyvFF6U",
  "key39": "KAVLiF2UGLcvYMUXhYBv9HrLbHLSZ8xXb3ULrGePmV7x2yKe9kXg2KL9TB5iwFzXAuKEEMjhoafg9g8yhMfmQg2",
  "key40": "2epX15D2BBiFY8NUvTwCwmtfbQUBSPZxQTxruKR1fX91SSqAMp8kZf91QynceSXQrhWndG4Tu98w941pAsBvFVN8",
  "key41": "4uoGgjuvC7bQd2FNzTULnzcgrYzjba1BAVmwf2UyZZFDGHQsw3qpuW34zNwhcogNAvTRu2VYiiUuJDq6inMSAadz",
  "key42": "4B1k4Uw7VbDN5TEw8FgYEwkeS9HmKV7EAR4rqN3RNdHH1uHBgjD5GyXgujE53XeBWQLRz4HvYcoPusQH1Dhp12HT",
  "key43": "3nKtx46dxtR6B3iTMsPgi1UBVWHjLNauvExmmQkhamjiiPx3h2MtRhhsd4yynZzbW8KnbRhov4FJ8b3dCrmYCT66"
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
