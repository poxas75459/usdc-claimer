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
    "5Qo13bcEDrkxbXj7SZU3m1TEvdZwho8jzgcQJjLcWsuSJkYbE1mMgMbwbMHW8KqyjAVZxUEwQHnCuGHL9LwZrXT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mwBdPFJ6pfPRCcfZ2Kx7ACUixNwj2CZSyF5QbctFosLsqoKLoDJoERjMubmKvukAhjhvWE6B7BpV3TDqRUMjoT",
  "key1": "39iNzE99Ksr9pykpFjgF2t2StzzoEngzCxUQod4AM44H8KCJ4go4LMA5jVU198MDkCZar3tcHGRfBykeYC2jNK2F",
  "key2": "3fFyqjiLGLWDweCYo9BSAhvPuaDs8kMxTw3d6uLbcsPc9qChRuvBXEvP5YXzSJVscV3zj3X9fNMaYMguQbhUu5Sg",
  "key3": "5L5dodNbytf8dVyHf5EUYUJTqQ1UCyKL65uzAt54PPAChdVTZjUkd61vP5NMej6DAdvSKhD4f3HttuRckLx6n5Lw",
  "key4": "2wWxtXFP8VaKFWhnttfTrRQXwE29GA1BAUj9QsUoX4xWv9i9Ldp2yKJ8Kwk9dZtda6qMFXBdDVmo1SnA5HL27tHz",
  "key5": "28BX1VDskhKdSGhAo2fKYbRcKcbMCYDyd88CgYTeVMTeBR8cY67TmPeTvcfGdq4hnGVqf62EEc9xaLtz1fh4zvtB",
  "key6": "UMY17bLYMeHxLLmTJHNXQNpMej86xY5rStyRPanhJkhqGoc8HUircxuc7BuJzasHAiuQjjpgb3zJ9JoTdzeb2V1",
  "key7": "3PW1FY6wuu5PT7bHCATH2bo4JZ4TqDqrkTHLMupq6TPfahM3MuesHbUR3cG67w6XWdapCaEBkipHi9XqrAuYSeTX",
  "key8": "4hwADmQp551aeMASLjgcjN8PE9mzXBTM8HtNf2hrZ3rq91njghBwwfRUkMx9jqzeTu7MnmzEtL3mddHyuhn7Va7F",
  "key9": "64he5LhwhwKWgBupQiNZo5NaNtAU2Zci9UCQRcuYVL8J9B9hmjHdJ7QPJMNqNGKoSyefBALoSxkvhBdtrXTfcybt",
  "key10": "4PCrkBPv1P1Fbz8nzDkXF6AMSN5zzhAbfn82CreRMrW6RC59e1NZvDG4DtzuKb5iQguXcgwUc4LpZfTWPBD8D7C1",
  "key11": "2Cg1QaV2Ed2AFP7RyJfeKmDLyjn16StspeaB2bWkneX37obkX4KgaH1Uw6uinbFinPG8wdHLepzQeVooTNgGwZmQ",
  "key12": "35EYFaE5Ca3mTtmtyafgae4LPw4P9SgoBJ6eqzWbavkcAphMgeUW4WMbCoJ93VFJ4wgzanU87Qz1Kz26JoosdPba",
  "key13": "3fpUfXmr9J9XqXcMTWLqcUSV79bvhhfGy6AGPz1Vteu92z196uodc6QL6UqxXEXY3XikA8HLkotHNiHUPW79pGt9",
  "key14": "2BUnt62tnSL5PQD4BA2gYGKwGWEiVyuZy5HPMNgmYeMBG2436f6a9C4NB74asmYnX4Q9uC4mBNaf29TFsfd8YiF5",
  "key15": "4XMunhJpVP3bZqzJmP6Unqdu2ZCSiC2zekp3rx9tXCoq5KLHCJHGpAo4zSUFTaseJ6DfXK4zAGFUNSDBvPmxFNkE",
  "key16": "3yNoLoh5CDMjnenxbXZLEyofXadAdnchtqykLuGhKWyKq8cyghxQWw3SgD3Yu8YUTQ5NmLCcgYagAvPkx9MXr4SA",
  "key17": "4Jn29sfs7gH9se11WWKyuAQtyfPaqBwFYefEDGt4x4zxu9fyEW1LAsUvARDVuAjaA6rigKqo7ELttVSpDos8ssWM",
  "key18": "iTxggQEcMTNyim8wn2sihxhfVmeXUk14g8L1i3CnyCZ5eJmdWycqT7HHXvezNQFD55q9ZKYQMwRHitfTMVpNeeY",
  "key19": "BdFsTV2tsxa33o5e5yRQ14QfqKjNbfgWcZGe99ZKFiPhGLuFmEFoH5q16U3FmdrYwKzLsPGPYQGg7UehvxCp9r6",
  "key20": "3hiGjcmFAMqDHrUMj6pBNhMToojSTtiNwfpJNN3zJHiJ5jxKaa819TibKaqivkUGjd9nTyA8ckuhLDJNVFZA9Xjm",
  "key21": "Mg8CKkpknH9SAr9xWLxwJ1swffiXBajsxYq48NPLkDo9kGrgCGShvzu5F5yyS8GNASN3AZ26eBDh9T1tq637aNg",
  "key22": "2T7wZ4nW3SbNNoHKYsp2yqzfYyg4PxR2aLTavCvWH5gTq4NEF93yand7STSvSuc1FFNb4LVPgZqqqjU8238pwRHZ",
  "key23": "4FhLKSa5xF1YBskAvPBWh6bGd7s4Lb9vtqhB2zfqQCUtZpKPFwACPRKR57WPHxVZNDcGJx9DuppkPpm5NvrFqKPD",
  "key24": "onVofRBymX4BZy3jhvJjLKUuxwqyxuqznpFmUaGXP5fUWsbCAprjexgCLp9Vv1ma45gyjszzbdJXaamWK7xf8AQ",
  "key25": "5X4htZp7tNYhpJ3rXLk2izTpyZGj19N4es9qgaHKg5qCnfQo1jYgGr9Bex2xjSb4SfL6gaQF9V9G6KgmGvDgL6ag"
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
