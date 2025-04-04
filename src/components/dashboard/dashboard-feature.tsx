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
    "64gebjDfu9oHxi2cWAb8aDABAbVXzqyQfkzhPgCTveXk8jE5ZBrh63Q6ZfqFZePyiAQPcX4dLYJgshdxzkHzvehR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kCGjsHPFBANYVF5fK4kk7aMhhM26cvp4aagU3tnmA3juenBt8CbixBychMs1253LiaXbLx3FHMeF1LwBnUbYen",
  "key1": "36JFHPqVGBBNrc73Jya4wQASS5fwaUnN3AkYFQWbnZ361WjkvaZGLLEr8T32JBQ5wvBtFrXHpNmQ7ERBsh3WkiEG",
  "key2": "2qLxUXiTjyTEtGnhZ6nfKUjGJPjuTH5nhyfPTAuyF2hRWqA7HmYyAkpwbsrfAKBFv4druZ3WsiFnraYebqincVmQ",
  "key3": "4aid1phirnorhkVe7r8jPRmJ7yMphNpGGxo3J4p9qRLr21LP5MS7PYooKFDZCvXUaEPU4ia83i9f6LKTWJM73X96",
  "key4": "2vVs9otmq1fR9N6LNZyZpakjcbvfryC7skNWj4BWS9dZNb7eSvHUxRkCm6cYhxoozs7aqakdzpg3AZLb2eu17jPQ",
  "key5": "2EyZa5PoHF2DeiCb438fpwcpMgAQcmekw1mXNFcoyr3s8qjju1YgQHCV7CeXx4DYhatfvtCEo7tqMaEKneDAvCvb",
  "key6": "4VgKbiZLStvT1JkZS4dQqRtCydkSPDaXHDHu99hKoKcjuV1fnypecL5SWEX6LihiX43vcdKUzgaAojCLU1GGRyvp",
  "key7": "4XG6CAyEU2bxAr2swX12MwYp3vEvcGeXeNBFBRhRajsT2cmpwtFZ3XfidqDs9oQ4PPvYA18iCsyX9qcYsjgmR1n7",
  "key8": "38gFpZV6XCb7uEqPp439PD1cfafkE8xfghnrLx9oVnKSQnggcZhX1GtUQa5fZFbFb3JwS8yPScrvPz7UwjXu7Xzs",
  "key9": "3nGKBHDkDobzf83VLUSS2pmFobmrAXWpoDEvxpgoqJt6Km3pW5hTPM3URvXYtHafqbY3moag8XSrpNc4sm9oghrB",
  "key10": "5n8MSRMtQeQ6ujXFotiahTkbKP7DmbeMjaB6ypyG26Bs2HaU5ehqfYBLaRHKiLFWTxTFdMUcc62n69YvCAJUVRPo",
  "key11": "663fDNJuDbdNpdZ7LQjdfAayHS6vJyZbgjTSAaEtMkVVRwrQDTQ7Xyy2f4fE949SEb3U7173CdhomctadoH79Qaa",
  "key12": "AQoi2qvjPrJnJwBp9onGp6vmRxP1S3a96Xh2XFHS4Ju7QG1Tug6PyRy4XK7rg9KgMKwr6iP7gtyGTMGNnCMkQao",
  "key13": "63kpjMtd8Yd7NsWgW9The16sDe3Fx3Hp6Zqf66J88EKUGBf2uefCFFFFcTc3fNRmrjNczJYmdHkRN2VUWtDT3xiB",
  "key14": "4gm9ogi9eB4d2FhDG89nUwYY1JxJorK1tLDuy8dcUZQrGb8LX4HEFSw2TCmprJ4c1urNJPYrPD5avjvFMH9KweoA",
  "key15": "3kwiPUCa8XfSwCVgMAq4HZFjp85QX1vxAKBy6j2XASjWuopUYezSXA4sSnVNFBxYcjqUU8mabsDjhMEv12Sf3GCY",
  "key16": "32guWXHfV8QjeUwXYVjq7tkpuWmDZW4Jm6qevjYdmDEQ5Be4jHdLFjt4oM9N7nnHj5dNbRjFQnSHaxA7JSQ92yXo",
  "key17": "2WpmMffVhwHLbaBPkQo1ejX3fpBJwnsAzjJCQKsQzaaNYxHCvQ8v2nKWR78SxJrgZFhphEReKS4RPpU2wndaEz3B",
  "key18": "mPG4iXSaA9jKK1Rk8LWEKDvVP3oQg75YbL4tk8i7KYURmNw5WK77QZjJGkPQMJuPBJbXK2gi8zhabnb82BkxrQG",
  "key19": "3jqPvZVFEbcoax5LNoPvCwvM67Lzxi15kJPfkXfwsz3LmWo2MN5tCdHiZNyjNnNASD4bsCnACZnvt7yJhcwDSFkW",
  "key20": "3Rzz635uAXAsQQjgYo9GN11cnRY8jSasPkA5ePh7WHYdK3d2xvc8UVuZePxA1qZM6WfhEphGqYVRLLM7hQgdtKYp",
  "key21": "4SJByqYTKKDuEb72VK4QT2sFbFN5Z6CpGeC14C1LsF7ycrHRKDt8Kfn4sb4H2cXv4f5ciUz4co5sTheKSjXNQFuG",
  "key22": "EQuT2KEMUFR1gjuwug1iB5xeEUeryxgCeu5DVtcQp4giP5CdLsyfMrdhkMEwXk5W882zD1Chfsh2vuVywuq42zg",
  "key23": "2WPHBcrqMwD9qswjQLkPyNAg9mUSMcGKBeFg8gf5Z3bKvuZipMMn2DQEHmz9FcHP1fpEcPpbRrbDfioUoKkoL8vF",
  "key24": "ZjZwDGNUsSbRe8VDfmyBenHbPvkzM81XUGxzrmd6NW2cQNoSzyfGcfjCd89C66aPZQWkaEkXGWdMQy5XtTZBCFR",
  "key25": "36UuSaREdiLwxCaUnxvUgG62eDvMDg7izuxSFUxNBgHhYpz9fFiysEjFxVt2n6cFwdv5X9LDkzU1CoVpTnqULdxX",
  "key26": "3P59eRawtS9nueaxNFfzw5JRP4xcJT6hb4surwfPHPMCLj2uWpH54LbbqjtqYZdmsFUSKbZ2LZ5dCbvF2gy8odeQ",
  "key27": "3pQCCb9Sq834aZQXBiu2AWsbbD4fjv971Lsm64wfiFkxQPwDbxgHocRGQbbe2in86d2BZujEVrBhN4pji4feyHL5",
  "key28": "4XycdQqb67mMrK7V7AQWBDFFEdiWThjaxmpkNYKRMoBZriLuagT7WJscA4kR3XHGVnCfA97TNnbFs5aYiNBrKStf",
  "key29": "3VBXgyZME2iHcLRs8T8XE2RU7RucY187YeqgFjh7Nyf75g8g3f4fJZq1y7LJAKEVDjG6Fr6JUP9m7sWX8obewFNw",
  "key30": "4tzTsZJGcNRRcjgYdfhBUuYNH2BWH7A8D1K3NcgG3TKnYBxsBy5uzVQTe8eueVG4aAgGT89Fh5JuJ8CqDdPBwzNx",
  "key31": "2uJf8FePWuNdr9fstKH9QWpzoLgD6JxaKWHcVZA7yqeKie8L1fRjoe98Nrx1dAedi1Pi2QmWdaijQQwzsWtuMJgv",
  "key32": "2yuN4c4P6N8V1n6KR7n14GMg93wnhCXVpo8UgvqBCbAm3SbSR943y8VNCt733GoxdtqmcjP6bgXYiafpmEXaUvB2",
  "key33": "4EHLpXo3hec1EEDpvhrhJ9HpY3snZiWZzDvgpyeaPPcRtgA4XS2GMm2Sin8UTZDhWbfs3kudu5NTzZYuTnciS9MH",
  "key34": "3a5uFG3itnu3a9rQ7iWB28qvmsFNgefRMsiB51Nuf196DUNxbpPRyYwDqaRsfYXkBA1ecSChcsYqhcSVoCqMkCpD",
  "key35": "3o6ZNTpVKUNGSEJa7Xh5jmMaTSSYmrJ66YDhqE9fZYVXJj3cj6kPK3pbzLUphazh9AgJ4E6FNpk1WPiA535X9YTV",
  "key36": "rkAtjtr5Km8JJWGoKucarHyAXYG8QnQuGTgQUEvB6zdFahEcgPBev1fzoPQeUBh2v3YetoE4HWcxV1bW92fWLkh",
  "key37": "5Fi2pU2JpvJ66wf7FjkWZ5wfDoNXaSxfWvK7vzwpkBzBgwqCtYKuYtK925HgrQMJjMgAg6VTnAYZPoGkE8wsHwtr",
  "key38": "4Gq5uAKQQ4yj5CM2tgPoAkH2Ejo99fM9D218MrXwEfCKjSCMGhzF1ibZDfke32WRBhb6ooLZJZDwjeKkr2nd5XrL",
  "key39": "VLGLgpETURMMXqi2Wwt2LWBqNHiDCCNDbhTVvjXvhw5XhJwsGkz6gqTBBy2jwv2xqaHiSyCwtgvreCtP57C9CTY",
  "key40": "4LqukY8AVByQvavd8e9uJ2raqC7gr8MCoNxZCfaQz66aUasx3AWYiLA1J8xZRQZa2snPrZZKQVZgtAfUJKQbBXeS",
  "key41": "3zqc67nxHoLQVQkufvZDJ8uaFeghUWGvHhCFb8m2nmXUvzdYiNACD1SSkLiHfSkVSca2PoJ2PVxo6PB8CTi4yM1g",
  "key42": "17eQhPWR5D4FGcVYkKE9t7oYCNRq3sffhBLnJb24uZY6WNTYUrTowyzsm9TTB4YWp8dLcbnG8t9aNSiJHWUXsWU",
  "key43": "2e4tFDjaSXAd6goZixRNGow86zgqmqdnETrLtfGLnRtmzb3du8sP57B2aeUBkXp3fR4YBQxy2MtgKPrmYnihLDB3"
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
