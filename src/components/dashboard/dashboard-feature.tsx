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
    "2nfKXc8yaKgYWXbRFEkasuiUWRJWmDd4h1RbTQsUedPYx2JGxaVfAoBxWnjoGRpxDqMkM3rkhsXMw5SPVhG8ejUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LKvNy5yh6wNVdGm57FqWcPx9oJgwUbHHBauEkz6mYe1MWuCaWfUP7jXwDzgkmn6Y3wBnYvACEFzBHRQkJTjiKb",
  "key1": "2RFNHLHPbu8KwCvK6ZfBiLuAkXaFdgSvsiY6SEBdtYvmLR9V8MS3t9mu34tSv7G7ygdgWzSJUVnLFAsiw18HBLzL",
  "key2": "4xSAXGyyaqzRk7HiZQq7RksnCKi44L9PWCTDuLpVok6Hm9sJt16o7Q5DAx1XsCs5rgUGoMwssV7ginWpN2dXRCfh",
  "key3": "3Vy3vRtftvHea4yE4b1mChVVRSPzoYcTtBdX4wJNZx7EWBAJq3t8GbtzApcpzBvZEb9cC1TzVspQXPVNCozpH9Zk",
  "key4": "Zwik941fKedMDJmjiZfReA67xsujqaiSEhUKJpvTyELF6JSWSL5ycBVV7cfDmxWywzvJmjSzkJef1rP9v8dVVpa",
  "key5": "4kmGGXbHnJqBzQHFCGp6FHV2PkT2Pd3a8b6vsGRXANY2df5au4Ur7gSdWDGuZfwm24bHqRM8D7LAr9F3METhLXoX",
  "key6": "4Z8x34GqUAheT3Usnyfe77aAiPn7iP5ZXecg92p8FqMwP2F3T2KbUsMzWQD99dAXmrzRyGtnk9gLkeEZ3NiHANdy",
  "key7": "2AmXnPFg4fMyhEH1YqH6deGfEuGqhHaU86DsZ7GqPLwWaXuR9dyzA1hWocnwfhKfgWnspUJUhbMKXDy9yapz9HxW",
  "key8": "33JMmUiuVASJ9sQW7oHVi3AxbUKGPSaHzVnCa5HzRtrYKu4q4yaa191LMgEzMZSfKVCYu6TvWvD8Szw1Y9FqgTpC",
  "key9": "63ZAgtcALqvu8wF1mLRpoKAwrynSNbbobWqVPwqrw4Tokc13hpfjwujSNyu6UyDf7XTdsiJ1cM6jRv7DpM5jeV2Y",
  "key10": "2Wc1Hu9nnhVvugaf5XDpNvnX84gVseDadvbzC578YnKqfqWKTmb9t5VUBs6qXQT2Nv8GynzQKGpzExibtxFtmu3q",
  "key11": "4aZnWaBDi8a4FgCNTvZfsNS8WUHkh2WtR3bTycjxhSjKWw8maB69u89wQL3geXujsG9Cqjiyjcat8biwUF7f6ugx",
  "key12": "5ESnpM53xjo2uwpaVUgY2ZYotoXELbRVyfz18CnweivnA2XaYHpmrtrsazmYJdGwjHzYaQRbgXtYa3SkSFZ68Yhw",
  "key13": "2XSVst4xHkSYVDWKoqfWnUFSqwZsiZC17MnbMTPTYibKkccr1PeP6b9hZ7XGHsCidh2JdfvKoJ9T7VRQEofmU4vZ",
  "key14": "3VcDPqNBNkHzqukAFrynHtQn2nwqmEoTcBCWFJ1kqJ1LNPFWa66gn8CkLJ72atFz2iY7PGd44XjW5gG3XMEjxWE8",
  "key15": "9vMVrmjHT2wEz2EAApuewkfvD7ntZrov5pdeqr9CaWSqt8iZqYNyVRjpYvYcmKFjk2AvAnRn4VEBybskFM7ahJK",
  "key16": "4p3bn8b7kDEdivN8uTjms8xiUv2CAKNggDKopFJfEBkDN73Hna5FdHoNy3iWqsUPQgj71ovhLXBuFH1K9TB7Kw7g",
  "key17": "2tLUaWtrdeF5G5PwPf9Dweky6KRDCSnLrWFzP1zdyVYzEHgksFikWhugsJHNRaTLd1PmdJdj8eGH3XeBJQFVzzYH",
  "key18": "2h1DaVmdsrUUts5osBU8PX4BQJSfg7X2eMXZSsQBMTXu9L34Nr4ESoZbe6raC6fP78TLrnhd7fiNE5XimZE1xkiG",
  "key19": "5WycE3APzMinicDNatuQ9sTeyJwVuNNUCNRrCHCcxzdCcnn7t9pJmKzLhRM147vQgDvXQQCsNbiMyADUX7rMgGss",
  "key20": "3H7mxwmRe5v1tejsmGY4iFYqokFtiaezS6kz5iw6h4AR33dXqyYptZ6Fx7cxgobpp4xNqB7ugrzLQyFQNy7qQJhK",
  "key21": "2aszmnyBXJP8hCUHnFdHZaQjEMJTi89HeK3g3CZe4CT8x1Gyz6DjJkXccQmjCyWMy1R8ar9C5itC4vdFv4a9AL1n",
  "key22": "2rRVeBiT5JegJvDxpPpB9RhPzhdF2P4car41PreYyT9EZBbFWEvCKLs8t6hqgfuUgyEZXAdqZHuxLSLKjqyxTbXB",
  "key23": "482RpR1EbAGJv2VcYVWvZZatAymY38RBu23ScPgSfP5GBhNwaWL2QWEWSrmZvAUKYyG5yVizUAgdWWZWqtQjXzML",
  "key24": "2ajQPyKCoRdv7tn87XH5fGxCwZJHPwTzez6JoFXr6pqJfRuGrazTKEzpvJkeEz389tVp5qeUxNtvFv3Bhz5ziSzK",
  "key25": "2kEMUbsH3Ydc4Uofbt8uxoThU6zeAkDy3YQyCWcK4RmENh2sy1RNr4mfNv23hj71L7vXKmRBTRo6Ko2z7LJZuheo",
  "key26": "4eX6oKJcWHfg7pd5Thk1JvknKMJtd7uAecKqLzMHjo9m7gLxNTcm1fhpQdU825eYXdzFf6U3SGjM1apvnw2F3T6k"
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
