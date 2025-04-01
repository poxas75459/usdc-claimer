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
    "DZsF5irCNRQrnXfd5UwkLagYYLHUuAKrSQJiaipUxY5JqsARgeweCmCYo5t5TCYATUAnjStDsoJtvEf7UwQW7Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1DC3nHEai3fE6Yr1D7ik2RHByFRFi8FK1oQKWN9HBUG2TWHaBjy9i1ey6Q3Aw65ZRfsDT6eNLRoYpKjbPri71p",
  "key1": "124rAUbJZQGT4hLKeyi1JQeVvfqA6R5vmdMQgf6ucMXuBDvUPrefQG53iVzi2EMEhgtYnry1LvDoB1sVE3tGwW88",
  "key2": "4Y4Qq9dKZhuxUgxJDv2Qazy9E4qD8Mkp3NmYAbp6LQWMZojaAEZKEGWb5TW8rEuoyFS9e7Khp44r9G7GbHfrZXKk",
  "key3": "2SaAKxHpZGzeg3f2tyAiZ23TTdSJVBGr7a8TQNF3spbJ9zvJaqZoZZ3WaZHC5KWdHE6mJ2hqmU78pHu8RFKegaDR",
  "key4": "4DCUXH3Wfa7aWpWNkwi8gLn6dwEYZF6vVU5teeHkKh8kVbnGrAx4soMDLkZru1wKrFhpGfYCeBX3XMfAnHbmJUFE",
  "key5": "2WyN85Tbm6AyWAPuMBQt28i3hKmWyBRMTs27DNsrFiSppuSLTzE7se58E3oa2DaJU3aQrAfb8J6sjrvukitTkHQg",
  "key6": "3E3QnbrEC6Rboh9yeqvZyR1fw4vFDE21L9Zw3Jp1WTpnhh651GzjwRb4cMs2jtAHn9HWFfkcVNvzN8A7LGzxpgu8",
  "key7": "5zrLsNvd8WWMyHB4FkX3ZU8tRw86VE1b6haMizV6DfYq9utdZwfP4jJ2M1Gr232wjhTjADQEeRHvuG9FNptP5r3h",
  "key8": "2TUfoCDX5TytshLH2ki5FSdoW1pYSCTwW3Z8HjftNRd48Gmf5FGV8uiCBY3n194kXfra6YvzetfiQgK6EPg1vS1i",
  "key9": "XAoJ3PfRTw6KLV6nEDH6GJJBJRHDAgf7qJhm91sYEaHYDcUYhCNSBP24nYfq4SSDZrB8n2WPoYJVS8MqWots1oG",
  "key10": "2tNQRsxaomxcYwtixumHap5CtDom5YxNuGuEsrpqZc1x96rn58DvTf1HeMePd3q5ALTnx56CnhBZkvvW5meGK3jE",
  "key11": "5bmhpMREKYuu2vpDkA7JHwbuJSKyn6yV6rBfxarHmfEUKZ89ywi3eHeby36E7kBazP4nvZBCQ8DkCgJst8KYsTDD",
  "key12": "42wsTscttCEH9VomsCuE4M58SiTMYVgGJNbEeC2trEsLJdRjxqxkjgLdBS3aNwvQyF5MLy6wRoN6MtRxK6VhJe2V",
  "key13": "5eoQ1KV9UBwb4iMYe8rJmunJdDaDcgbUs4TPLNompbsACmphCHxhrcgMRWHwz7cks2fYHfwKNg4pobu1hUasHyv5",
  "key14": "5bLSXC27qqQ6rBoWAC6vdaKbpw8ChNTV2pZAixv59ZfCRDRugVRFZK2wHvRu6xsr6QST7bDrWF1GQvE1KtGa653e",
  "key15": "2JHsUnRSRcgjeQXfXhPvqDUm975XjRtg3dvhkxJLSLzjanhob4GiioUvomHzmHEXX8gWsHVoqVQG3qQsQJDbjGeo",
  "key16": "fZAgmZtFxR7t7wGrRoz9yNSqNC2LH9ELX4ji8NudWngQ2yCBywmwwBQjuju8JKuFLGvN1zhPVN2ouNdkZ1M1mQ2",
  "key17": "2sPm1quhWKYFvVwFQMd41zcV8d53SwekFo4Zb5bssrJ2QZqtHnU2KA7cQkLHD81WAtnBLRRcnqWMPe3Bf2DHmSkQ",
  "key18": "2RigbxofEDAxHAj6ycr6AomedJD3JARjqJPs2y3RjNEb9CZgCZXN3xkRz9GojbJ3jw6Jwpz1rNbcrr1RLYpQNjwM",
  "key19": "2G2Yy14rHiFZeP9R8QXkvyVnyHjhV6k5TAEFJDfyJoJJrcNghGNJfX9VwAoxFubSMwFgDB9J1vtwhuYwZTxwbH9S",
  "key20": "3BeFjBs3gFzsjqdnmmzeCYEjbHvCsAknzwe6c63wDAWxVzoAAnoymsT87agr33ZLp4cBnj82sjHMbZLZjYb8jfbL",
  "key21": "gDZ6D1bWVbC5M6od1PCKZVvQXrkWuUor7ey92p5aDWx3tJCGdnbcj9FryjXZBkEUh4sziGmDK7xMX7Hr2wjxULS",
  "key22": "2eTgDzaZPM8qomfTn8ngbfhVjZfm8rtPHRVAmX6jvCkiD2DkBuvwX5J6JBw9Wt5zCMAybsz4Z6p9bMpHdUTf4XFE",
  "key23": "4JwE4Bso9FPnM79CLhfRjPkPdcFSAXVRuovDodzsw2BAWo43fQRbX9cGa1nEQ35FGcHqRMXE1stw28RJ17p9qGFV",
  "key24": "2WbMJEJYti1rU4BPhJuZyZUdPt5gZQSyS78d8yuPdzgh6SS2srdussG947Pqb8DHgX9juHbWumSrzDEGvTS6WNUv",
  "key25": "3pxNBTTdEW6KZU7bR6YWLRydCeSfCCLHcHXpmWhAMqaQueHWpaSrZ6j9maPWxK5BoaTdUpTohZ4fA5zFGB99M5u1",
  "key26": "4uzToYVYr5UPT6gi7GXKQVkim7kQQfbP8XKmfbcvRaz7HKkR8k1b4bUHuKhMEHRGhzaRcSL8P7YFuh6PHANPh2kN",
  "key27": "7UVkSxw79JcGatYoqjywfn8CUkMs7uFp7PYG3HbNhkL5i2rLcL7M9u2ywujhe13j7sirRuPZ6BbwJLst6EGWJ2Z",
  "key28": "3xM2J2a7u2Qzus1PBTgMwXgmzPA96aNCs7xdmGLbodG2ELmEytLe2WSpm21Bjb3UkNxM23fpd3x8S9E8nogNazKK",
  "key29": "3WAo4wsjJBRJTz9zzuSihPHPodS2ECjK1LEqYALRWnE6pCyMafTsdwQjE2n4vhoxa77XxnGunPjWdp6w2n9iDY9J",
  "key30": "4wLDgRU3q2SJcmGG9XcgkF8Jf13yxR4mzrrER6VYsDdZkiDTxep2Y8qGTqo5XgaejgaxC7vTJjoiiZsGZMUyWD9q",
  "key31": "2EyrHsNcmsyZ4sEQo4gYuxW5ouz1Rv9g7T27xfGsLq4eEi48QZGpe3w7mt8xpGgUvZT5GyNdVuirX16aH4nyZrbD",
  "key32": "4acdpXUbqv1MKLPwM2okQRDvc4ssoN7CKMZyh2r5ovmjvTaF8ycBfZuuCieG8dbcPEbj3uuw6dzYDkcLposjsubR",
  "key33": "2vz9WsxjA7nyBE22q2WCWmEbUuh8A96KXPJBvL3Bx52DEyDtJFotojZoiWPtJs4v9LbPGNRNTLExCrbVV8Lwv6GK",
  "key34": "4YiPstRAuxf24YxJc9BKKUReE45wrUHwBPvG6B9hFj7HHWej44vvCxWLJ7b3MDjJijGxUJbdZ8GeCivE7dURUKNY",
  "key35": "4cyoAHRTmQYGmCRnqyRT55DjBzeFVpGQB6xyAef156XkUFvKTTm5zJWNEmQ1NLthMDo8jjUSQj88pz1cW7pjcE4a",
  "key36": "2JfN81gvG6wDkbM27ZbYuEMWfE86U9nchqMFJTZjBGnV7GBZ3NENfPjnzFZfXZHktTLGfLZpPgYJ7NPH1qvfkFVr",
  "key37": "5VmrgoqHAR1fdxe56huvZK22STVMkThihEynqwrcTyVNSGVQwhPZ1Neh535cDtWcAZf1gELqv65xGaDimhgMWWSL",
  "key38": "5KX4FKKNTLcxgp8Ua1fwU5R79Jv8BNUE433fv4doiLE76dFy2UqsBXTN4kMPL1mWrSfwJJGwZ3nxBdAwiBNWS6by",
  "key39": "4mtYvWf7wyz4c8Aucv5xyVTeWscPjEkxgTeAnPDGN9uuUyCraH58DWXstkCnwETSTDBktkExPqKkzKTLkfv51YaP",
  "key40": "56ZDTHCuft8z1h6fxogTsJbsuXqrZyCWNXTADwtemNKhrxDVsjXP1Ztz8ZwtdtQXqKJcZPPMHTrND24o96qp16qM",
  "key41": "3G3epoP45nFDXTeCU2ep6DfEAWc1Hnb3REizhcj6XBPZVSFdT23ysQz9epi1E3VYe5bA8PXzxcWkf1vVhqKP3cde",
  "key42": "5NdBpfFYhy6JE31F81Qug6baw44KPw83K658bTiSq4tP3vxvXQRrVADRv5Sf61V6TaML9tJxFJ94Da9g42BZSZBY",
  "key43": "3Q9sK4cNoaPifLp3zH7Sar412KoiJ2NAPTc3Faq6NVsUMBYEmAN9npxRqwb5g4BTMi1kkKxUoyYybg4odM9tGKfN",
  "key44": "LMhJdUrtdpmm236S6gWGYWssNLffe9HpszzW27pgavFYM3vD6hEUmzhwkuitEZwcQ4jdxPnp2rCTKP4ympnPUbn",
  "key45": "NVTeNByVc92C8pM5BR3efpH7fU4uJya9xfzS6JXgzkiuvBBRdJQEQz4xwRPbnTXxARYqCg7uKanmP3eZMCoi3kN",
  "key46": "5ro64pueCo8KnyaZMEv4L7GQtKrv8z2ZepRKJBWVSDf56BHf1Zrwo8sxDGiQoX33Q3z2DAfePdLYVjwwZtDHBNub"
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
