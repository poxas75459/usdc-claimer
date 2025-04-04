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
    "3xurBi4CPRjM4USGyD5HiptrQMbeUmKMbAuzp6A379oSbwPWTh2MSENYjxr2taPPhgUCqSSkoGgQUEQcj3FtCjWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQaFNaeiuj5S5mLim63cxjN3SW9PugK3zpF3vWC46LoikzqCwUyzTsKoiz4RVA8skggbdk2MQkcpTFAi469G8aB",
  "key1": "5Cw5bsLTQDhsf1KV8f3zjEPPBinyLmP4vpvnwcYZe4K2oEFJ6sKy8jDcjamGRFciQH6Xsp4EqeMsVnH7RL3aGWKV",
  "key2": "3NoEJve6uzVrHMpxEUDpQxBTQwsZFiLitYxcfw6gP93CNrqKsmVsSvdBVEmDedNt41XK9mNSDzCAFaPi5p6RJWbg",
  "key3": "22PRH1CkWnsgdPKYer4gEJYjox3z216R5VTak6F34SoVZWDoF7ut3avPH9REaFe9p1UQLFHELg1dE3A11v9jZaLv",
  "key4": "63dWEEwyzYN3vKsBzfD6meNVCANKmBc4iui1ju1HgHnugc5kG18DX57iaN5WimzwandZD1k4inE1q5eixSksw3YU",
  "key5": "2Cqhpc79iSobEHDf9dPTFG9Epz41hfcRjQtr1AyqbDgnfq7tQEWtFSRroed6efw9yRvFh9DDEwU5RULsJ7QGtE4r",
  "key6": "62626CqRX31iba49dQVQJeyEgiUEJbHqLRdX1yn8qXg44Y3kgqmeCfUK2H6jJnf8GST2D2Ej1j9Je5bDfhusG71m",
  "key7": "3xRwFYWT1WEdX3CAB7LJaKHCNFD8FiRCTMVbZYJV868spnbJKELXgPZ1AaEgcENz79q4MLsGHt3GKVP3dQAjHi4C",
  "key8": "2e9Gk1pjjGmXz92k1LCEf8g2fVyzKdNqZnaGzFxqZe9oyETekJ3WdMwbrbKw1sXoeDwEm3FuX7uTwvUfBf3qgngy",
  "key9": "2uKLoVmDZ4NA9QHtkygxLvDKm8VoqBRwx7nLF7ygcj3gwpbEPRBcbbUktXDsZqpVTWVEG2yCtXTbt6jLRnPRvpNi",
  "key10": "5ao8tGW2DuNBS9MTLydQvEPmL5s1msKubyEQoR2vcKQJbikxDBvf1DsdRCpiWz3rKZzED1exh5twTFXVRY98e5d",
  "key11": "yJuXPf4Z7t6H1NV5Lcvsf6pDQHFP3eaYVtfuc9zbS8NtB9f8Bb4Tw3kYfHFWBinwbwwgXNk5q8xoR7ePfNKijLD",
  "key12": "ycZAsHRwF1euRFpJTKaiCnfstwabJzMticfqoEAjWgfzDg9dibuRyq8vuhGvwjBemB2dPTdZr7J99u8p56aUu88",
  "key13": "3vknsVvwSuFR1NPmFir8SFpxfi8ix4gd1iJwZtCTCnrRGnZXQi1kNbqUgedsXVKocMZW35JNqAeuUmLTgpfHNrcE",
  "key14": "3RUkmkThgif3Yi8zPWKPKYkrgeqHrxzCQzybfcGkZwwsSyadgnbMnyvqHt88RhjfjTsMhsHHWK17XF6NtyvLgkzh",
  "key15": "5Zpa5oV7fgDcL3td4VQDKfvmh3BEEYXFakqoPcCHB49euLztppmuFfzabLtaPvh7c4kHNwmNARG8PcGVwALjvxyt",
  "key16": "3NaEDWNRf8Z6DDQV3dsALWdUGw9HQMnTxXanLH78K5abjnhED6fMNcnAZn4RNWimkwiJkqHxaAuh2STAJXterh5v",
  "key17": "45f9sTx7oed5DZ4wpkAGJEc8M4hYD4ZsgUQXBsLnZ9ntMvrb7nZVubBaSLe8SyK5zdEDnHuV3fA5PzpcteXCkbtC",
  "key18": "zJmiz8N4Msadvt6dZMjKfQQPSfx1yhFpdqqLF5yWqd8A7RDnA5ALAb4df7xj227jRuyMi3xn57rbnNnrCWmp9YU",
  "key19": "32rfDzaQuQ1BwZKc3QnQqi73YGEfAJcXQPQjrqrXm8HLAjAexD736Ut7ftE5eM3FNMSUCU4nBFYH3kHVXAsQT7HU",
  "key20": "2gvtKXzTbnH1ScMeMfLehZowFRKeaDTSVPS89GYvYy1deK9sjYmD1iQahWoMXzBBw5aHjP8nL9S9nQMfhDBwvgum",
  "key21": "33KkTmbM44Zozqi9nMDfzqdh6dHynXjMb9Wwjz3bhcjZzMrdocNvJovecGZ3xvfvDaoMUucwkhdXvECkyV6aYjad",
  "key22": "3qYbuZaX7FK6D9SRZ2JXahiksBzynGsYo6C2Y7c6udxCaMTVzJMcriL337JoEPD4eisVwzTvri7668NbymDdBYth",
  "key23": "3gp3CzJke3hFksXy6tMidVf7GSvbm6U1dvFq1fYAAoqYW7sepYJHW96PgGqCdktjdbht5ZnxAANwP27Lhf2ArNzq",
  "key24": "2rwuKKj8aSkYc7DoMKcC3tAhCyYcEF2co5Whe5CGmsUPsXSpRxhS8eRK18FR3p1WE8fmnmj5qyDQ6EWwpmCSdjca",
  "key25": "CLeLWprqZJD4K24gNFgfEy6TtJ7u5Diyhvydayq4c4agRZaG7Ran7x33cqKAccrbSaPFkAxAW22B2fdfRHsonaZ",
  "key26": "47iU8ZVdcadGp6AtnyhaLjjzvbzU1gLHY5h5sZdAmYJqxTs4KoKQc4vPhX4P8Yd6At3NPDiFrqUcMMUTiJqdm34d",
  "key27": "4kU1Jp5XfjZeSzD9eQgynstAiVjne4Cm4pPAv3asFcfcZ7rxxjjRKpH6pJi8skdgQGqq4SAboVhjEpbFVgnX547v",
  "key28": "2wjWvZziqx3JtskpEdtPnoXo6TewPEU3fk2afeW5vUHtFw4f97VCMPNyg3P6RxJwrbvhnXY9Fkp1M15zcnbCLDHj",
  "key29": "5q1dYbmxJuJUKcAmKufiVWfUFaNm81xZ9LmF5JooBtx18x12iVS4tYyZM7WJuaBFnRKSxKM4RrKq2BNuEENpbTai"
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
