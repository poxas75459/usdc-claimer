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
    "5gfkG3X9rW2bTya4VhKXVBwCYkQosUyXMGVAdnvmdQv1aJjgWY3YWcCLRREEUzqAktQ8mpWpKVwU4kNbhPtFFNqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vi31rWexftRJVoZSzcohp8LebCPHSP9RXzBnmmSqLUCgmEE7ZuQLzQSSBFeSvotLbfUnZ4ezjXb1MfoAZ8Suewd",
  "key1": "47Kig4buftSHJMaysnVLTpDK5gfT9aiuDkJCKAMQVJhE7RUpV86XJnfBcgJx8vCrLjwVXFYtPupxcKTto3czhp3j",
  "key2": "2kCXgfDMKJQaAWM8toG6s9dnCvhyjuENgcUJmDLuJLrqC8DXPvBSS6439xf46WXbKiaUgLyxbRQBvZL7KYnKYc8f",
  "key3": "QWkjxEzqZTmmpkr2nQPX1kfcTiKDsszxUcXJey4SHptZXXbnbNCtDejbqmHtzsPSq8cVhsotWLBt2nVNX4XbKbN",
  "key4": "F1SoxvMNvg9CAScjFRWrdavd3yFb8hvDCwXf2oiMoWrKPrMWe19tMpDxKyUu9emYAE9BFowjL7EMjv6b6xb7W85",
  "key5": "4wLM8T1pHhJa3xuihnaMcLc19LFAofByoEuiFZeNBPz3LjEhyQdkQHiE843iX39ZWk9Rq4m6ygBVYmE1V4rEAYja",
  "key6": "4t3Y3amsdMedK9wRKNT2faixWvGgtSA3tZjQJ6WRpUfPM6gXjkZjwjG5LJty6SMAinexR8UZD5omTWJ5WwA8Prex",
  "key7": "5viJZuL3N4HfBtvJ9dt4jB6YxXvrcfXt3WxV5m6vMH4zvhmVpXqN1U2rc923VKArpDJevDAemWJCBxkRCtZsg1m",
  "key8": "4qtKsayzgMuiZFpquAr8SgFdmkPXLQ6pRKJsGGceJtKdL3QPX413NtFX3TCkdDhTt6pT7szs8de29sZUpyVRXNXi",
  "key9": "xNFZEigSUkar2UdKa36YRwMM4k3BdqSB6wPDBw94UmMU9Z95N7rGRdg7D1Vi3yjktUbrNiB7c7tPK6tXjb3tqKS",
  "key10": "5WRm3QZiUnfEm1binfdovYELZrXqEJBLTugy8fSyEPhbCjPtGwhh3NTd4h51n7b8Q9AE2rJaMQDfgUP2QEkZMYcH",
  "key11": "5Ub4FUL3U1qBNQLxWFAJbwtChC9DguKB7bwB9Kz93YyuRNjbdoei6hYob7UJUBwbqrHvnc1Wf31mAhXyJQ8TuhAi",
  "key12": "4tM9RR7XyMqz18zmMnYHWYkwg2tGDqnRb1fw3eBoaJGke3GTrVYJSAougQtT4mjhQtm8FEv2HruNwscMX1WungGX",
  "key13": "paR1s81tHeUMi4d5qFK4Tc9FAwMApR65Zuo3Ug2gFw7aWN7EteRqn7UuB98tMwnhKwPR36W7eeQKG8RDx4gnpr8",
  "key14": "3eX54FwgyCSEDiSt5pWg837Uuntm2ZieZTjfPJ4om3wTGSbunn1XGQipfz7cqDV1UmuEdiZXv1i8u2qmrA8PJCXa",
  "key15": "46hiAryvN6hiF2aFUyKgg4LACGukEmBJ14fif2ZVeL3a37oWaMEYs2f8xseFf3EBMipkSfsRYBYrghdXJ7hfoWUL",
  "key16": "5DvUp4cQVpxxEG97CCaxziSsNgSJfzC31VJq77hz926RYEdRWS94NMZysJPEdBnvpGaTW9GrYe8kiSLGPF8upTLP",
  "key17": "2rjzwQYtzJ2UaGjeFAeEwHHPz8tVpHyFFDYrUr1qGqYfYDNJxbXK3ppUVUFrvYyjXz9KHjro5J8MWdCtfu5jAkdj",
  "key18": "4SEVFywMWBSCjdN56iJmX6tpFFGnXN6CkHbgsgj4KvHsNSA2d9Nt2fqZhrLBzSTsM9SdGWRBCR3NV1xBbDRHwExN",
  "key19": "67Jc88W5xfK8UosSd79ExYrJq9YewnfL89KYGsiuQedtf8RMoaKDhViGjmUWNTSgYq4bjJnTwwvnCS9jSP96Q32H",
  "key20": "3kD8DXPio145mDC1tCbhmh9bBFo5dCsRbpbknhFS7f8u3HECvqtQoedk7DEcB9j1NFg5JqtrXAa7GQwzxnaoF118",
  "key21": "2Rad4W8Ns25BWjjGiGcCEErvGUWPNFZQwCarWxp2vrqrytPRmSAM1U8NdC2obVxKpXx7MdFPS3oRjiRXS4V28zEd",
  "key22": "5CkqbRafJsbNCtsUNYiUnNM5Ciqp8CrzFyJPJGCcGZdPgNJwgK3ZudVJ8R9A3GbC6gYgLfPhtbXEy1Zobe6ZenfQ",
  "key23": "3CBiACwu3io1EyJwVVJ1FMpLUszR5DmaCUHKtuDfeptjBJWzyVuyWP9ZhKpxAnfAxxAkH6exAS6ZSCNt9eTKruKo",
  "key24": "4ZV1wmgvhB1LjGuh8fLGgZPaWCbmSBChBX9SY7RKfktbWQ3wFtAcVJpz85hqqmFKa8AzrD6QqXF44Hgc6Nz5zFDJ",
  "key25": "33cL6HAXki9PcLk5tJhDY5PoiuALKBbgmdwAJdKKXDhGPMT9tNctowpTzpmxxefwcQ15x6dEC1rD4XGoh8FMuGQq",
  "key26": "2tRt65qubti1bRBevZAnrqX9oMNAEbiQCXesUe5cyHc4JgKRL95Pf3zopcAmiYxZkcnSvABDPg2dnEE8PjcqHnHQ",
  "key27": "53sw6NYaK2oZxf78Y88ETQyU8ENpJEpc1bU2i26Kpe9Vfp3reKAzzDLxVFUPHK4naidhSfjdn2CReDSFEyrJdrxm",
  "key28": "2LUjkSKRXevifKzyFM8Jr9zJKjkfBahx4jpUi3KLSzE797SX1TYSTVrPg7ytc1hKNUE2oPKYvzfhHeBsbbhL8p3R",
  "key29": "2vYSaCw4rmwq44fSsJhz1q7DScvpVpY5dp8nMRUitRrLXwUdVWYJ8psEZCEVhbd9tVX6k6Xo1gPJj8K89rfRsJ39",
  "key30": "4y6KMyGMkLCfe5rVHf5xcZqvq87rfvMjPj4H4t4RuXXtU972rSVJgHbmcc2LuYtithy55HVpLEYCJqLuQiLt32B3",
  "key31": "4f9rZ59Ln17hAdBTkyfYHWCo3HxwXB9SQrb2a5UJTX9JLU1pwL774bLP9CKkAHHR3xfttKHNQy3BwgSha8Hc684G",
  "key32": "2m51m4LbvQ8fM5ebQM7baXuNxMi511VN8W1T4wYKgyafBbhcEbrd7inZjjRbj3XCM4n6BQnr8yTguxhgpADrNnNr",
  "key33": "5LPVGR3WyvJEZmLaoFe681TobVuxZT62XCTb3vzZh9qvaqeUf3Kb1dKzyPGz5PBjxXsUFwivtxzPyhzWr268tKHz",
  "key34": "4cfYp8d7ZG52PVKuNpcL7upkwqvTYZpsX2Bzhtbx9ikF9jfcCWw6miVrc85hPRTrZDcQb3xKLnbFz6KjHZqMPwXA",
  "key35": "5JgKKvqq2733BdgSb5PnzE3BG9P8GyyCMkdXicNMnJRhcdRSDpftCUvSbLkq71bv9eDMQktXGNZJxd2U8bAxEmMN",
  "key36": "4fQHvBLKrvrmbyZ7n5dYTSkUPgaWv29xbhuy8ByTogy4ph41ptYbNdWvmXgbYuGA81XMkzTpJwjLK2o87AnQ58cm",
  "key37": "2a3B4tRyWcqgyjHXady9NRX6RxHzbSruhvqtN6YfsaJe1SH2f6NDhx7gwJD3R46vLWZNBrnf58BJMRmgxMNDLBtu",
  "key38": "4LounoY3Zj94eTTQcejoBTGGzvW9HMqoDA9nwqWh2zEMmDhaaA4iPrmUyNdwHm1Tw8aRuqdiG4Gt4sNQNH78C7ej",
  "key39": "57DhhWNeghsAKhKtLbPfhYQaPLffxzmJDtnrH4PYor1G2dM1aDbqwxhKDvvb7h7QMPmWfhy7ZTvMwEi6y6eU7WvG",
  "key40": "5mmBJWqqfdWoKPrRTcMNdTA7T3WibHhzzTiB6QHfyKmJKhh53r1Pa8FRAGAHCRzBgUHrpDYLfPYw8g2jTRJQJ63Y",
  "key41": "42Tj2LtBggoKnk32TJ5g7X5RKdbLi9DssdwGtnh7XVFwsWv9ouPQhTWER8vMnDkGvRiHwFuKn27XAxNjQj3AeuA3",
  "key42": "2cqcjfnuawnR7Jwh4LeSNThCkrR1bQEzS8xHhcZ5CmzrhkPkHN9cbaD6ViMtYAxcJ8HZuB4gN3JEM3iGSyYkjnhM",
  "key43": "51btRKz2upWWNfpYjf7jdsVL13JHg3egkFaPaspsqcYsLwMDgMKkFfQCHghxCedjLozuWUzmTseHbgSqL9LmkXcx",
  "key44": "5GjqQad7FbqwT4TJwnWBQsUsPqX823GmBaQrZCuqaw7XxySm8w8VhR95RWcX6FEPGFdbKXgpSqZo5pUJJxNrVjMf",
  "key45": "2cUjDHwjCnZdZXP2doJQd5TPFZ27sspGopEBrv18vzAaBs2M66fKwR4xf3y9T4jsheFF1aDHuSdx3oUqtnYuT7cp",
  "key46": "5DpqeZDCMG1RMVKa1emJog1ni16xHeqDhp3na4mXMq59x3pH7nwDWxBrK6rnBN2s24xknhqACfhMkuJH7z7h94GD",
  "key47": "3JCUzKo9UfpuzHG93dt7PgdMCAd1VHQSVZoAk217EifsJpwPsTwgJQ7gpAXwvJoNj3PZ9GM4a5cFxG5iMcoQF8qS"
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
