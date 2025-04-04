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
    "2Xzc9y7jc2hoCkQ78a9QSWqb3zVZ3CPDEFXwWHQRBw36VNk1UgD9ooC9eyL7J4fHYjxARo43TuQBxr7NH4pykgV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5e3UjxPGgVQ9NGqXWTpsKDwpPTu16saPvx8x1cynfX4BMmdimqdtDPdXwsBtfVMfnTC3RuSHtygUUHJnTFGgsc",
  "key1": "2AtRkoBoyngscQxFmp55TDq7BPipvX9A38ap36YabC9gQoTnXKTD6g1Xqq9S54XV1JYBfQThh2etr8QMjRWQzFwU",
  "key2": "3BRweLe9A2HoVWT47zfpR1G8fqgB6Yb72Eqv99qhybgLF2XikmnV6YoF1eMhku561G3S3bB6xmsmviKmmaDiPZ85",
  "key3": "63PUo2Sm88TNLm8vcC29c2oYQbGBSNr9QPg9ftUehxyBEcyJGAYZCUgojEMjBvvPeqPAbdFTZ7AjQYuEvKwBHku4",
  "key4": "2fiqgF5MtiMqAiUdBbcrJAAMyGSJybXDpS2XZGQksfiYwhxUisC5DJCxFQDWq19gAQ9AJVZd4pTEhctykKAPExm8",
  "key5": "28qosmezQgM5GgEAkkyKzVQvCRgEW189KA4qFAWJcuXsobpaz596KtFijeq6Dqc7HMVunn8ZpDmAR5BxZaWCHQ59",
  "key6": "4qWf1gYuJLVxU26Tp9iFW6JDWhc6fStNVE5oV8KZmiGs2ndCunRqXBsxkmftErWYwvavzKR4CcuyLVpgc7TeM8qP",
  "key7": "2TnpS1cduF5sEyE7k2CNB81fgtZvVohJKjegQmXG4gCm8wjfTrhUiZhs9GPxdjm6Lk1UjoNaMUDEs4GvgMyWkkRN",
  "key8": "qZUsKonzwF2Rf7VWFm8QLT1xiCQ6XS1r7DtCL9ARrveAEXuVWW3BNetrkDy4GTMc6FHArMWcUwPHTEsR4uvFKKP",
  "key9": "5b7QDaxVWpX9Gwkg74CZAscjRBGumB3g8UGpYKE5wXuVkFvXfUFrK3DpyxhYYW6vkFjHHwLy7uuH48Ti7fgzyjA5",
  "key10": "KerB4YTgBCjkXL8LeNkjWpmf9pG6qsTUVXye7kprEhntXXLJbg36hwbJpuTmcLS4kBVEvebSYETUELqLvFQJ5wy",
  "key11": "Gnq6XAfwDuhqEduaxrbQ8HQ2Az3fJ8gbs5m3eivQQnnsHS6FXkiwfq1tQnywbNV4rML634JWCvShJaDYAoxkx6d",
  "key12": "2F5RorKb8LWMmtGwfhJ1vaaBFyzQ9HRxzUZcvdk2oFkqJddHm6jFwRPX6k9B3fxmaMUhHQySFZy5bLtJXEoE96vK",
  "key13": "XvdvcB76pwc3oHQE42LVGz7X4nS4opfYQz4qmCDW8hzHDBXVFYhMcuHxNVkRTYq6e3BaH6kVPwiKDxBH6YKTKeX",
  "key14": "doE5XX9n21PjktUTcFBZv8BZKxVCDiD6sJLRhPvpUncYYbWfTnZAdC62NPQM9sdWan4Gq7FicwnAtwbdPKmgnbF",
  "key15": "5m2KCez7TG3epv7nD8JvFG5jrM21ysJEvELc248Lcf4oTLD72DQMGJkRmCfEMkY4jnqWsvsgqoQFRd4ZAMzzeyy2",
  "key16": "5wCChDVxTfWg3FQUv9emDVMH4KWQSCQ5UPvapBd1cJ3msTojxEqpGgGPg4o8zJxB3CUhT7QMbtLUB7rVWsmGRv7V",
  "key17": "3njGfmL3NxxR4LaHYRvEZj4dLcjh14tGXcTCnrrZgmDWx7K4MVGeKwHy3jb74s9zQNf1zvfQPbcq1ThxBSwfMDHd",
  "key18": "3YVVZ13QiU4ac8xEoK5DYZuwNHpC2nXb3mtrKnvHeEm2vLT3SrJc2MpjtLFwxYYNDbL3ZokjQP68hyYvhYCxd5Dn",
  "key19": "CC94uFwtK1XQPLyxocmqoAc1WzxPE5iAo3937QRgKtRSHf344jov1cND2LRTRtVuYAT3BQaNDNYtr6ojWzEFudd",
  "key20": "61jDPzUk5PFikKwHXiTR3N9gHU2LXZwKrPWRErQz76psdDp2PE2tXXkksswnPvfM68ebqiGuJWSNW86urF4wuFaT",
  "key21": "555XMkS5M3v84jPRfBN1tXCdt1zc7waQMzZaaTVHZbR8QkCKkHwwWzV6aM6wNmEuJ36ZSr1ydrKbrDG8B2a2megY",
  "key22": "4rJZaYBC9C1wm2v9fQFEarwS23gJ6HGpu5jo46Wq9vUESyCKH4ntAc8656MrFmYENdAi6eAb7yqr5b4QxqzTDeni",
  "key23": "2WW9AuYasa4bk1zYQgJnXjUuUctktw7XbH7jGnJa56v565Mx6kAGg5u8NPwVJuwx6JXCtvgLHBUMU7en7EiQZb7Z",
  "key24": "45VJasqa9V2Vq8JnkvHU4mXAKzaGtz5mLWp7zrMEoQLqSFNvRMUBFadYEUL3sxjKWLtAqUw8AtwTV3mV7mCtG7rh",
  "key25": "5upKsiNG7vgGBjZ3CRrrfNgjKcY2MsYYxVP7LP2J65Tfep6CeZ4ygVqh5urzNbkoHJ6m8F8YenqZyyWxWMivndYs",
  "key26": "2ggc81aNh1cv29ZmjrnMqULANiLpYgdBV9BzMaJcEkcjn3h1j4dfMFRi84LYuFWRibGkkQXbWxHM6Vi6Wj3DCHF2",
  "key27": "2QJytGysXhmFwy4cNEbEKsnnxkTURBNscmTAufnALdvJWYH5KDaYrGWS8S562oRZtu9bavBCP1J3hSk8a6G8dt8",
  "key28": "Vf4nTFfhSG3XiHYe5KcVFPTod5fDH2dqDESS82NHjZ9SgniP6S1TEQeTdDZvQgCERuQWXniAMSvyjufTyk6D5eq",
  "key29": "2QGbRfsmAjB1Tr7GtQsCyv5RbuvByhLynR4sq1qpjuwKxDQSCfxaq8FcdoC9RnMLKAmsuPjhnuCqKx7c3KCm25pa",
  "key30": "5qEF8yitCfYVnDEp5Mo3NmBqeBhnGKcgT3SftjTp2sYhmqF7MaGkXRn54TD8oAQo8nCSBqQWrU58mCzxdVF1TK36",
  "key31": "54FY8DdodkgZHsGEC5zEYBXt128tpo4sa2fmTpMhX3JQPWZj8L5rXEy5G5UE7ihAX2WCwuPD7vYu7i2ZBt2b6Vy6",
  "key32": "8Advcwk5UGcEbE9xfLi6iEo7ap1w56LynSWzFDBTha2jfsAf2cjUexgCzvWkgAYpkkBifMvbyqU3tXqkNe7gmA3",
  "key33": "2gPPgEHpxk7uR5onWBFMhWn4JMnrrpTKKBMZNtSps8h8KJBSbXyBvCrJCX2kphZ6qUuAtyzoGZzHXFn3nsgpazHp",
  "key34": "2rCk4mvmeNPF1Y4P999xT1D2cUYtbeZ8hejQcXUNz9nS7WtiBtwakMDkrW36AwcFLLXeS6zui1SGUXAerTJeVg44",
  "key35": "4Ap7NJC1xhVq1eucyAcwu1AhTSWfb7N3pH2YYKXb9FC2nKET2WoHzSMGY5hDZ3sucEDxWMa8gXuWQuWaUEeQfwUj",
  "key36": "5A87KHE7hG8Sd7GC4HV6oFsbUcnoUz1zW2T7wgkaCvrUb6VN627F3fry8VwpD8DR7Bggb1dJN7zosYEibvnjmMpZ",
  "key37": "3L1ECFjG2HoDRUdktCHZnivVQu5N2BambQFNcH25cCfXwxB4CRmo1XLZERPyemF7EzvKiVMXqstNZXHKLB2ZySGh",
  "key38": "3JEtvZznqRAyrWng8ntfjj1N4cmYF8exbf6CX2kvUhajbFSLeiYLEvBzfUvxDxfb6UVN1NmhC7XRS2bE4AQSAKbw",
  "key39": "4hp5qsuxowtMLpMC6pWE4tCRyhEgeAnbpkgfZqrkjiVQN6GQVTDzPkdutNM6qSsdS8htZHsfHbXu8c9AzCDY87v5"
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
