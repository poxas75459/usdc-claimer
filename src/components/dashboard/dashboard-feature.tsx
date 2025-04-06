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
    "61oThv3Ee7npQwwnxvHwD7VZvw7pZWeBxy1eftPDxeaSfNyzbpxnfmGdQtJUgsJsyL7vnujgwT5Ztnds3PHWaxYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Baragiwc4i1ob6EyJJdy6QGoegADgmX5jJP3r3YWSWz4sYQQuizQrT8eHQ8gGv9eZtqQvqUL6ZzLBrdHBMLFAi3",
  "key1": "5JV3KWSDH2bA8aVEWrDwkKSc92LtBnL7eYYuVBdqDeXZLKmhxjsq76iDJvPVwgYn78mCrtNDyhE2fbooA7i1iWBT",
  "key2": "eShT5FPok49cUWHxJbeSUAdRL2hcZ6R1fGBWcB2KuKELVHct6e1X5Z6A3SiiXKEELSLnGpZEn26JFp8TLYRL2Gu",
  "key3": "49ZSN44CDkQFjGLBwrkTmSXcX4RYaRt8rPZT7RXVAHuY7mEVtPbZZHFhuX1PrYeUfNo9DrtjcVkepo3s8SrsraB2",
  "key4": "4j7vLqN3BTYgmBBTNW5c95HuqnEig84aMFfA67JrfeyGKRs8vyzVrFB6tqM75XsVwFzgw4voPSUSXgE37afAyic3",
  "key5": "4MDuB3b254xGddJaV3LyB5PghE1KxwEgeV862vGeSZWoDuGTZRV6XJn1ZGvvkvjLwuCY7de5nHxP7CPYT565sMt6",
  "key6": "4DKSkwW5WwMcyJYsFAXYpxfmEUCfYGau1VdJSmvxtjk6jNXVYUf5MeHpE9xmTtXKSMy9BSSJ5wAH9mYiGY5Fedu7",
  "key7": "hh6H6pCVja25WMwsXXkbepLjtoy6jMDvvbHB913Y7QCBNkXYVLrFjwF449uTgojohpCxw9asmkHNjwpSpTvFbK5",
  "key8": "P8dzBiniuy6JkJFPqHAm7uFtRVfcTVKiXDgvfk7svPPMxnb1LjvJxrTBiqKLggM2tkeWupXkEBGW11ZZJmReLaa",
  "key9": "673L1m3ryA7ejjZjaUNNVFgKyELNVabEzTUUiVg8eui4JG2sWQimu7aaKUx8Pjo36vsV3CKurFh8TmHHAQo4o7H",
  "key10": "1eDsxxu2NQD1HCrpwWtYN2gsaGUitfe4PoEarwJAR1Eyeg9DbdDJhqjpb1rV77HHKatiEKVNaacfgFEsdoz6pXB",
  "key11": "2Xh7mUXjHVUYaLPP5kSsBY7gFahfx6pn7jJgF82J1Go1CS6gjd19LbRFxv7DbnTBjmXMUCf1GCKQJWsZz3RTeB7E",
  "key12": "2X8DGUT1q8SLcRVkWHLiWrqu6WtvwxRSW1cErrPFuicKxyJNuwLaj14wAyguEAV4nBFs6S45qTSZQ5grZvizKiLR",
  "key13": "41MxsfdHnG9aaSRAJSzDKXNT6db6vbzE26RgMEkP1yjzK7GhZVo1mrtjyqsRU5YNccGnNboTXTFMWrmxFzaR12Xd",
  "key14": "5t1c2ZYnB1qXLFzSQmpxbW46YviKrBXme1CYF9zfbEghQ5T3G3kTJVXpMFY6bNjfh2JHEbjKXba9V6xonuXndiGm",
  "key15": "3x6nAoz6XkwyyZ49nUprGjQEebexHVe5u5zWUxusDNMx17paUy36H1pSMcoJfWbQeSzAkaoF6grwJL6aCTFCYTdQ",
  "key16": "S6z8h3cVjwUF9cmwzFccAJQecqrfR2paSS3xopv8UXFbft9HJegNuzXz4z9yyfBqu8Zz3fQNJb6hGH4PCzKupCc",
  "key17": "4kvjqiEQ9RvnUycnQt7MGb5ZjHP4FYyphmsV2pxoH9jpmnBapXur9ULGd7kyJM7Z6kVmHR2z9g17R1GdaUhML2E5",
  "key18": "44MuGBpXFEZa16ewBGLRmFQupV9jWy8NuBa5aoswnCuVm36WmSu8wPPFAayGKxcSH5yLUeBzabKHAyyn1tz5Bfja",
  "key19": "4Fu6aYNeFAD1FJjGwYbgfdHGZyDCHjfBUYuebsC1LE8q8HDCCWaqFKUL7XAzK3Bqp1XXTivXa436jrUpdaxFjQkP",
  "key20": "5TinmrjzQUCwgCuaCCVTkjE46pM5izYLw6ftRbABkYGXPWFM8nD9F1u7uPoMjdTJZKPVWxFY7tpoAx2Qgz5fs2jG",
  "key21": "4hWme6WNRSnYWenEbvhhL2ax9gFCuv1QBxbzgHQ7cLhuHU2XZ7AfrgiT4y1kKkdggm9guPwka2ETuFraa3zYVDaf",
  "key22": "4w5ZP5ih98JnstTNTtfGM6UPwXuGNkRxuyAodsaMLWyygwYvQqYG5Qk9SPYGzJuWZCKtqhkLQXvmJr1gVUXCFtPM",
  "key23": "5LLFY6yHdcpR6TxjaCKiEZLp86C8wBBeYm1ZA3pwdUaUtfG2YpB23ayikzjs7rPD3oyXAURTn7VjHF4oTqKLP1jM",
  "key24": "hn43ZySgsiEo7DJx7gU4rhunDD8FCQm33ZVpKsv7teSpYknunTTSkunL43vMDR3fDxmaEWenGJxpCbYcwEahSD4",
  "key25": "581XnHZvP1JynsnM8SRcU5e5fRVNnm3HNePmwBhFrixmJkpET2JuEk47MGVnDKETEcdLgdk7P318NwSmkJg8b5QV",
  "key26": "5FN6wndBgfuEurbp3wmBeKqKtGsb1tTXS7q1TFare37MzCfaToVdJd9hK7i6yVf8RfseSHTYRhSHFz8jBo71Hiww",
  "key27": "5BQLh9hBAnwyt9hieoPxgS6QzCEZLMNAa3uf2Sx8UiNEraNLvo3CFEgFnuyZSLzCsFokJu1KFUbgGjERDabg3U52",
  "key28": "5nPVNoux84cdMSgJ9f5jcQKB97mqS966J625ZcijBVEX5arEAfDqyCdgPQtrB7sNyRyWBy3rdvTzjKc2hEcxWNC2",
  "key29": "8btgBiZ5tyzQ4nymkrmLsmxUro5vVNvbDQcm1oeN3QvUW15jkofdNTqoUSUEbLu4JRZaYhYBf7y9TwkAKbWj6Qd",
  "key30": "46e1LgJopzNRAMREr5soHHucA4FyHCpUC3MwRwGD3D7Sj7DfqRjKdas8E3pxzWgk4CgGMEdDUxVG8Nzrk52TNgyg",
  "key31": "3M7DmpHvymwMpot4jLrpsdtBUoWG39LRAU8Ktm7eTvUCuVL9wHEnwxDGgP1ftT7qEARP2ZT1VEHdNjBknb2tWRkc",
  "key32": "664RPbgsqXvbjDNYc7sr7hAvkMWrHsgcKnZjLb7mv5QokryvY8hzNrAQ4VTJt59mCxHJitsMmXd9he3AmHByAyr5",
  "key33": "2GtCBsKEREzMtUPaXXZGp65P4fQt1kc5pwZdnPJHsUkEHQTX8MFmgteETaqdBK4MpvnGqV4k68HQNw158j5jjrRy",
  "key34": "3FnQNxKA6MoSrjrMMCAwH7ohZYG8nDwGwJY5m2WGeeqTFqfccs7iKamwtZjvf7qRNzgw976mcXhFZN27yMefNRFm",
  "key35": "3ESn8en9Ci3YSgR6pTX8hneq2jckoGfmEqUdRknQyjfTbj8vZ4LGjUrN6ZY3EZNZzFGq4W6FefG9DwK3zRcK8QC5",
  "key36": "5f3AYzTfZSntba9hrFuEngTRdeWwTT6hzRRxj5Sre5MBZyRBGnu3HwoKargpHF9j4hGnKEMsoRNnMHjqdzFFiXnL",
  "key37": "362az8ajWgo7MpnVb8CLBA4S4c51LpsrZ3iChNCtmG3zQoNbTD29kGX9UoaNWiNVXvLdHFKR5yRfS4CdZaSjQGEG",
  "key38": "2cJGmkJHVgTV79Kp6KMYcJdUgYnxrgr3p3UCNzzDLduav9MoeZJfNFN7MAJDcPTKTEqgT8ALr2yuGTaxtHRqqYXy",
  "key39": "CJ6Vx26vd6cKDEtqGE6aYHUrPZuCSfPdMC8ddWiYcvvgCGXEfV5dNpWk6ZB7JeiKZbWvKfGN1o93vz6ZXk71pJm",
  "key40": "49ks8gjExLBP9BF6VcQ99kKxufdBCMYSG4uwHrqLDBQ3rRQUNP9EMhPy7RaYMamVZ2cXaJ6UeaX8Ki1snNc46Sc9",
  "key41": "U8kkNbta6EMubJPZPgZszVPECgZF9eS8yTCJD8aVosAC3SvPK6xovxzDBpxttuQdKPAuGZF1nQL94viZTQeFd4Z",
  "key42": "3fv4JnrC75ENwyNdUjaDNaCQehoF6RmUZqdpP6Wu6i1XDRpKKKV3BbwTca268NYfXzxxJF9e1VMYhcNbQhEX3p93",
  "key43": "2bKcfEKwdHepx7R2UuWPsbSzkWW6StnfvaRqeDkWTBY8X2BY1S5VpHP35zsxaPvhyUmzmD2BChfC7xeTkhr4fKF3",
  "key44": "3ZBzTkr3paqT4g17WdoKnL5N3G2N9KttA2rjhwDorZZRn4vqdPVY8CKyXFN93UtzysH4tdDUg3bn1EK28ryNsqqz",
  "key45": "4a8rmP9R5xSnyY75FPu6m7pw6JRz9GqRJzVJkAQWUtfaCu2izLHwrswhXw2TMsyHURJEfsbo8ryZd4jrpjnTsPYJ"
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
