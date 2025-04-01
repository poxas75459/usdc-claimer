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
    "5CGYyvijtNDMpyduYtyWuydaeCCXAZAtuapN7iR1CqZpBENvDC1Dmei42F6fcucMFjCNWqXCYMjNACeiYVpxxYEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWrBovXSjw4CWgNAPA66e89vMK61j9kGFqZvgMQqdULTzTW2ne1rZmVKg5qkhN6wds8GHHBYwN4hBwothddvtf8",
  "key1": "3SiqbdkL8CHNxK2PqqCD9YqaGigigE6EGCoDjmA2BjCLrY4ddFmbh3UPn7tpg1mLkNVJQfhHWjSJziaF8jfuyGL9",
  "key2": "2cN1mY2jNj7aTw5KxJZBcmnKoBgSeGcVmX895gDvPNiPwmsN4NEbtmDVgamW7YW2sxohXTrkKimpQquqEbfsdtvZ",
  "key3": "4fTNEqDbDrRvLoMc6KyNv1ChipB1x2URotaXhnHL8g3ccUDvfC9hsawXycZVpPqcC8Z92L9tF1EKv4oT7uQ7dcSj",
  "key4": "34JRuAWnfYnEAixkC6QwdCpLyGZhsfiZbh4pdrMns3RdVMxTMnaAWLjrCwJdoYfp51qRK1H8SPMtpEfsXpCr7Ay5",
  "key5": "oMnqHG3pvybtqduvgitHbJ6V2LGmC4tbirqUkbPnmndaw72DadEMFZh2fdh2D811Y1rYmERxHWdUdCMB9A2ZtND",
  "key6": "4E6dDfDwD5j9caYuauJsUkFsZ67ajkokYEFZQNjyWcPSSpk322reAWF1zUpttx25WrBTZiUcdfQDRqR3CNvaStjy",
  "key7": "4m7sXHvxVxM99JyHZpc8bcw5WCNMYTjmVjuPYQmWBHUkGhfVHDTJkQTBQXkAzNm7pY4Fb2J49GcmyZf9WocrmBL9",
  "key8": "FrwQbcjU32L5XyvJKy5gJGuQzDw1GfGhoqcEPxQkWUYfYBWSPzdJJXCRNm18BMLR5Nf5MDrhsuiXK15kouEL62k",
  "key9": "4YPHqJ6uyQnnJmnQNvVHyWyNhRSMhAxxii3189HoasrwkTSLcygLDaMm5Us53CKBME2urJVDEwTw9PjNCR48TqNf",
  "key10": "4hCFaJnRKR5kEQAU7dxSNv1gKPH8wSCSsdbuRX6fGiRWgFZZCu7BgEUnG1YbQvbH2BJZcmEqa3tX6g9aNTuYtCW1",
  "key11": "59ptocycAYNjVmJbUtsLvj7XMRQqQrKJFCjTZNmeT58WyXjK1ScFcYLR66dMzx6FGqkrGHcuD3KcG3Y2sAqxtQo",
  "key12": "sTZo7CKGkWoWyq9LbDqRcHWD4i1EmX9EhFHXBnUby39DbTVaeDKHohaRtBVXNgBCBhZPDm6KPZL1c4MDQnmbC1n",
  "key13": "aUMkpFBcM83u6CdaE55ZeV1ANvNbQFzUQG7g3pDkYp2WVdMQ99sHJK1EEUHZSJ428VcA49MtLCQG6uGgm5mPmwz",
  "key14": "bbRqwU1rK5m4NMCbmx5o3imxFnqZQV3wZ2oct5wD1QMusLJssH1jnCcwQJFsWcN6RgaGGXHcSkaiKKT4NZqY4r1",
  "key15": "3tERt8k9ULV6FptCSKoQ1FPt3cP9JKAHFmwsPxQnobvS7M9YoECcfi6Cu3fbkQrTBThXxRkVybACtpQPKcZRq31q",
  "key16": "2LGBwBWcB7FDaer2beYfHyqPNFhvKfsVxqCLX6x2ebtbg4t7j98guJY2SBSzjaULSpGeUwvg1qBBvWBY1NDG1TfQ",
  "key17": "5vNQMdZTorL9Kq5cuBB9eKDKMQ7obx7sachQ1mJGatADwbindxsXjN96LKRLMQ49j7fBWCEdUfXKDyS23K3mKHGg",
  "key18": "5Yb58FEgYy25aWH4NpJUERkmww2FVAtXxSB1o2qHNKsknAKwhVkCSPjMYF5xuADULw7dZ52K9dEM3vRQRWpaiP2H",
  "key19": "28aUKULtCE1MMVqyVjAcxLq3YU4tycE2wUkJs7bjKsk2iZDxXUqdMVT6G1SvtnAYE3kYwQFTS9Fs959F16Ehthfs",
  "key20": "8kGcuZPx8RxvGghCEkPqCzGiLmaswihHnL74kafn7uas6acr2E7hkeRavqN7T5Nqn53MGJeRmFNBZug7jpFCegz",
  "key21": "4acJBYaXXHW9motwTM4y3mj1DxvHKWyciEUrE5Tb1pA6hJbziPjuhmQYvDwDoTD5fHo6rzpKaY9jprBFgQTzb7xa",
  "key22": "5XYWp72rnpgxosCTRbn7YFMw8Lq7ixmDASyht4E7xUXkEx8dczzgZhbjRoA1CBmF9v5BEDMoEiwfLszKZ4ZEoLWA",
  "key23": "4XDDZkAMetcs75kbVaPdcTPnARJ7cLqj9S2VVjmv7Ks2bb8zQd1g2YZoSWoaJM5d6Dezxft4f4xzMRUDbf6F5Eg4",
  "key24": "5tMEpGr52NAhE4bpemJ52ZXEe4FFPsYGrWurgann9nfvmFLKaNzauyJASLk1Dt7njX83YHwYmw9VYNPa8KyZVugK",
  "key25": "5kFJfRkFZM2zHgFFRWcEM2aG1YraQmPSywwmaCVJ9zazJPsB7S2KpDUj6cUv6a2FXxCrxoMYh2cDWw5Avkhz3vMA",
  "key26": "3AcanVNxYbjZtrFyrcZp4NJVPcw2HESvcvhruKqe4JCtRjP5P1FzAsDgwwVA2TxEJ8XCmAwwKVACeWGsWuiETJWu",
  "key27": "4gbc51B5TQNYMA8aC9XxWAwYsM2fGFCzbm1Z3UbKAfCpP4xwz2cSL3HQh8tePMiqwsZzR2PAtYeLi9fe85SAz8qC",
  "key28": "3YzwvJGh9Y6xxmPNh2Zxs4ajw1evwAGoaKV4A4jJX4YA6nM4fkLFDeEr7J3uqnaawYF4nZfnjUkXacF9RYizqWPY",
  "key29": "5s81YMuW2eQdYbCqciQoBzuwMeFBXagD6VgKvWZ7EKrfxS6k4vANbn3H8hRgZaWbwBLmeLsjPFMRYf1TBXXH6X9P",
  "key30": "bSryKwwGwnGUHnX7j7d2L2giJiV7iLiE9DT14qyW9BgBiLrBgncchjbQkD313xiFxa7L73BCRVE6GesFpjgt68n",
  "key31": "31n8jJzU5SF3dbUTDwR5Adsa8QnTEkbiM8KBmahjMwMJqGvy3ncMGhgVPoHLeZJMWSWFLGHQS9id2XhPKA7DWWBE",
  "key32": "5aghwqwoswom8qYEKtZwMamxFmEfGPEA247HazrTRUmiyxj7CjXmdfvWdkqW2VyK2TieFXJHDyJ6FekLjyrnMNvU"
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
