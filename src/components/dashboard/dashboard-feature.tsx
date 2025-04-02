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
    "33cC3je395JDYviB5D8XZvB76ecigpS2ar67Bk7wKKKcZV5Up6SWXv8UdrwzGk3je9sQj51LvcuQK24dMHvsq3DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VVtcBneZM5w7Vp3zW6qmriwXi6EBECdftRTrPEpRXbtespdchfa1UJPpNH8nW2WSzj5uyun4enEJSshEtoK2MC7",
  "key1": "4pYu9nd5k2J3CqXnFMGxNK9aGpNogP4sbMtVTdTiFkWdaRNJUtww367dN81o6KXaGQ6sEi8KxMTSfNnJJmLQD3FH",
  "key2": "5vey7cyh3ry8g9oj47KxrfoTJkUYZ4iH1oetAiK7jsjVEBvKFsSxh92r9KGyfsXwgtXgAa4o4ZFKCegitxkqgW9P",
  "key3": "4vV1fnsGCorJowjeY55ZBZyxLfxgr88WQN93yediLKk1NPBxDn4n71vxMwVfok3hZLX2c3YedEH3tkaZBkuc4ZhK",
  "key4": "61RPu5dA3oid7jF1nJ1j92v63Sc4pLkrWoBANpKMKbTPCCyv7zcHad91RoSBUJpW3cokGffW8DhHFzpUbhcrwQdJ",
  "key5": "252qjNUrFTwYpNzW9wktuf8Z8phhq7K25QJF9fGtH7fP4Sk2kcKAmEefu2fokt9VrxDJNisgAJPeQpWywf1GQiZK",
  "key6": "59MDKfDXDHfUvuMb4ZYhi6FEhEban3mb8Upw4V3THufsYXdzH5tDQvVZzap4Hs8bV1y7fU3PBpS9NBemg8upvn3g",
  "key7": "2vkxvuejjFaxirTpXjdKxGwcqDEmh2PZm5EQG2XPM7PxSXC6DQRmVHWcwaheKgX72mptLGwCirJCgAohpPECpTqi",
  "key8": "ZqLApWCaKQtJPnCH5nTQmNDNv9T6ADZWYZEe4G1aaHpnzsduguTydUXb6CLAAzaYwgW6ty6rkJC7AGJk1HSPtuR",
  "key9": "5KenLmTDR7aJuwZu4ucueaMRQ9ZcDtsaAup473VSZRemd1XbPZaGgHmeqQWZR71ywPowWVdBXjoYexDzFxe2Z31B",
  "key10": "2XbC3NQy43xfSW5oGjnLZBh7gh44cNjEfMdgeDEDj4NXyMj9oZhcSpAeG3i2LoAPCaE8t2LXwnP1jRyDfoeAhQ6q",
  "key11": "Kh4dr98pPzMS8tNa1qutPHFc8wvbGtx8SpBAPFhZfUrhRx3uXxZnvV7uZg87aBqS9THdeiZ8sMpLsHmyz48TK8B",
  "key12": "5LyAgvKoS2rUsXwFoGNHi9gnqMjeuCQ2zMrMT98Xy5a8QZHDAvTKcu8rHR4Rb14bhHWFLesbaMnAUqNPixyitDXD",
  "key13": "V4DFcff8CqBWd6QgE7wjpsMeHxMu8vDDwbZgJXWPwXJPYZLWui9hBD5hsHvozc8s7ereRPJV5E9B4iKb8ru8oi5",
  "key14": "37eqfuNaFksus3c7r1Eg4BzHy7igHiuMPngehPBtVQmJHjNrASyCBSWuVAPttt3XfDHeBMvvU4PbyB7qYywLFxns",
  "key15": "3cbQNRMsfv1dmxao37LcgpacDe3QnmdhP9tGxptdztgrv36kWFXTZ3acpTNXJj6vVhx9ULoBVvFWRnkPViSK7MWi",
  "key16": "2a7ovzeNmRR7c45JWcFtsUWvDrHDta7ECH6fjzygm7NQVBrk7Zh3wyR9wGNcoAZNUgWebCPKhb3V4px8UYP1di9q",
  "key17": "4Vf5ecYwxkTKX4r3wGp32QMPVMTXLyeMxqEfPN5WtYmX3vpZcNjsNNNDiSUFvZFv3vkBByJTApSsuiiEbnYd7cd9",
  "key18": "2zuU4SqboJM7LF82ekr6RK6tuc1gToYtD3sHRgdTBkTSGEK5SmJR75GsoFRuZkaFk4batSvBqPm4CoLp59QqYHzZ",
  "key19": "5fF32BhhJrw43TiKzRg6UDLjuLgyRUKEqm9tNeS4fUGCKdX8oCWAFZX2bJHaNDtwsrJsw2RQ9nMWzVvf8njBsnvu",
  "key20": "3NcooTYUoy24UZBZsfELozvzKWhzF3gi5oiT6cPzF8w7nwUfwukvjHHBJgKXAWTbTwUYDbtXswWvJbBikrSF7AZX",
  "key21": "2bg1SWUXFYPCwZ6qsgVXwBLECntuVE6kK6zNrccNVBZfGtFiXJD272eewbkhsV9kNVfsiM2RPr2fNuU54SDo6TJg",
  "key22": "5Y8QEa3cGuHGPyfYkAmJPaRy9m4pozycWzhYi6W6XyKwgFwByATBGc8ZvTu9yjc1YQSu9k9PWvuSEP6Xis8jfdJ1",
  "key23": "35Zx7yALk9FK8m3rLK38coTU3V7fbo3wLtVaPemMdn4o8FpD8UAPBdcYavpQqyZtE4tMzZLs1w2o9xHuCLjQ54RN",
  "key24": "DAFtNHPakFeGrgv9rnUSedfS1Aa4S5SYzyc7BWVfxUQP3gvadtJM4YsnAGZb5UYd4ovgCj24UQNsqts8arsTxWa",
  "key25": "5HR8mdXuED7dp1pqAAheT4wEQmDsVBhU7gvo3BECvdmaf8ZDLjrmfLCcPWzwcSuzpzvFanSDZFjCWsuDjj1M2j2",
  "key26": "67H1RbT7RMxdy5vzLrqxPWF759txDQZ8jR4uevKwUxxf4RDaLwSZ83cgY78RhZmsRusL4RMfjC12XX3nTwhdcVy2",
  "key27": "2WBuA2qT9zgdXdvKXdqnxWyQDbzL4GHsKBWD7Gm3rDRQ4d1pCrADQ6K15fBHbRXQGwGRkdqFnNmurzqpGwjj77fz",
  "key28": "4zgBHFpM545nznu1aWbGYr9uWJwVMPBDcP5kVkULXQHioaBx9JGBmLyquVRWirbcD33HDhfpCGc3Fabat4f7ep21",
  "key29": "3R2honnMkgS6ysqAEEqR5VxF3BcLy1P2fcTNR1ki9z9VcHqrCXoQLbWsTDycqAbwv9EvFSW6jPBFJRWBN32mFT9u",
  "key30": "2z7eciXKXD9FGKKLrmGUXC7XsQgJ3AM2Kitm7edRAaMgmdtuNSe34JrUsuJwY5d924rw1UDCznJN4pRG4nfSA5Kr",
  "key31": "2ZbW7BfpyE3JPx2izzNV8aBhccs13z7N783zLAwdncMaTze8yMJKsku2Tvr6uvpTh7DRR26iRxgkLJ4jn5nFrLfr",
  "key32": "49gExe5y6aLjM3G79drf1KLx5w1UEQVrSkETH9gersfsRgZ6ArePWAR3HTWcwHNiiqoxiRhCC2p24PF5BUrqV2DM",
  "key33": "62FAygYiLRunj7TsrsxbvzAU7v5qyfvXKQ3KmbFfXqL8SXA9dek8rYDdV7KjfPyn4bRSBstf8vWjF5ewcXPYZpkw",
  "key34": "3WsWe12yXDQYXCpL7nGte2QMLRLyrQ3LzDVTN1L83dqu7CdmBqaWa44bfnwwEA4L1sWZquJfDWaFDp91UmToFR3J",
  "key35": "2TMnvdPAPEEFnL1WNM6fViSQpxSVxgCSiEiLPWqd2mKh3jP1cjtXKJHwhns54avoVpGM2kB5UN7kxnUTT37RFBsb",
  "key36": "35cqoWN8NMQoW2BHV9H7D6zDaL8cwjQcz41RwUN9KH3sLHXRNbEfL6zkPf6UHrnqoajSHcetevp9QHM9eGzm8GzV",
  "key37": "3Zo9nhCVZEWoqHbDgepupJCCaAPCZ3onXGS5YwsUE4YD7szkq1RZ1fnDqym47EebpgBsEc6mMFaKfgLKsjSTJN4q"
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
