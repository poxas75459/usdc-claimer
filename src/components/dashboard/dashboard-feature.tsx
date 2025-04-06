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
    "N8F5PcZiJ4RPkWrhmzEn8SvqQQSUZ2444bM2et22fTmT8szSA2HZtfnMisSWrVpNhUtgZDoEz328BGErK8bUZZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdkuigWkSH2CH9A7j66UTdj2k9gQv4rAGqU1gjMfRjvMvTApu2tgP1MZJ1LgfsyXnGhscYkDmHR1yobRod7zP4U",
  "key1": "2Ngm13C9ezVgvUssBUSsnkvarHGUHxtPPQFJiWsjHM2Qw4WVkjemv2RwBLE1k4CmYjobtJFHCPpSsGq8D9XCmzqT",
  "key2": "3esLzYPPBkptWiyd75RgeSx6rKY5Du3omiWb2zwzQtZ9vzh6j7uUYV88dJpZTqAaHS8MjdnvtcZ2XtwHhekrvEWA",
  "key3": "AN9fSDJxLt17obj4We5r7rUUGpPBAe4wFiW7FuTLEw4vApY7Wrco8M2RTu7Cb81HG3Eb4RhQS4ZpnPS8tdUhJ9S",
  "key4": "7WCZjdfyg87SeLM4F9KCLonVsobqe7RterwwqGRyho6mnKY1NqgKcSuCYcQ944FdAHfPkXET1qqg2DF79aLp7t7",
  "key5": "5b5eiRqqvyHyFVqWBzHkayfCymsdKik6dBX5g8ixinqjLPrV2VTwQtEyBeBfJgonHjAazLUZjTQXjbWi73QhL4hf",
  "key6": "4CefEWLvp9zvzQF3xZejQyQHBgvUW9L5xNgAsMLD95ymTncmq6CzJQ9FK3QuUEpN6pe84XrE943o7tdhxi3wXrhk",
  "key7": "FqmGmumEpr2X3HugwvsLASYGDv3NAdkPKN1XLUYzsKB2puqyxABScCeYS6h91Rt1UwwgF6zkvyBXehZYa4i7PJ5",
  "key8": "5TwmwjeEfBkTdk5PcjUgGnjyaV3hbBGPkG4xHcmhPkcCxMK19kAC6WXcvEJCggkNvBnWhJySbXYoNGeuravmLUSc",
  "key9": "28jNpmEvBuUyi3W3Qu1TXuh6Uh6XoXWHWsB8GA4MZ8qHS7byvwnvKrvxgvjmGX2yUS8g7etHTBdtPuramqPGwDvN",
  "key10": "oqukSCjPuovZzSj3biYAqLjShSrbAZLo6cAtubzDh6ccMd4VbEXnv65CkmsYqevChfqMnC1CA7tBdf7hCtDQ5g1",
  "key11": "4KCnLoLcqLdtvAEsueghSHZVjVf7ydfBZ2ambZiBuX2mFSuZD7RXYpCoUFAJ3Sfndijv4CVBPpbFpUbQd1Tuiqqc",
  "key12": "PHKk1zuKURNV5DDymYmRaDQrbTB7J2zcVshqU3LoGUx4oH25LjrpySjGLzETP5BcAZJjHMHcJhSf71krAgybwnZ",
  "key13": "5n85t4oANaZ43XYqreoujrjPBQbjmMso2qu91HVy3isn7NE3LznEeYJpULCkgYCAN2EGFEkx2stkyihp4ixd8nZn",
  "key14": "5iAmjbAoFe9cMuUdbFfiFUN8tHVRfWiycSNLtV2yzas5kLAdmrF3r5W6Mb97RCJMXsgsM9D59Xk4GW8sbXFcDdDx",
  "key15": "DbsrX5QwTn2hcTUn9xiX6WFYEVjt5VVngeZvxKB8zG5e1BW55Czrdf3j3FQQmaaaC8T4e3mr9rTCL8NL8qTwFpf",
  "key16": "5CwJHHLbwiJkhBiH3k2pk3FcaNJAngknVs1DRAHJp2kNawYhmQJWQDHqprqLnxkHu4j6rvs5rQothjcqSoEEoa5m",
  "key17": "2tHnUKBdjoBVzMmtoZdtYSfhpgi3xvNKDcFs2RZccmEJ3gvjTqJeD2qtRzntF4tezHg6pcrqjJ1iQskBDZyPf2Uz",
  "key18": "3N1GmSJe9H8xKN2oUdZ8QTsbWMCf1ZtBCuub7yECaiRtSHaW11wAaNjWf2Q9WbJ3F451NvZVFJm95aMEvWDzpxKG",
  "key19": "6qP2RVzKytqWmdFEmZWZuxH9hQ3BYHxMoxofP3y1uhCGNUqes4ycRLMmPs29XrH38KQ6Uh6rvc2vsi7a34D62vT",
  "key20": "2UMyciNdyd2oZ2KQVRL55LoWyts2zvBbuLAzWwStqkxshtewmWd8w9KX4Q7YQMQH2Pf72oX2nBhLbfCgYuieNV6y",
  "key21": "29THR79JwtGRZynNq2k6qptd8VMMkQiEmUNqbBSmTwHQ4Ythk7njYJwmd15jMNvBjLnMwTXPFAJv6ECc5cGarFEV",
  "key22": "5bzRgiZq8kM7FxD1uJEWhrEZieWu7eg3QSxArTs1QSqoqNRMeKqtjFeybF6Shwr8ynyLDx7RXgruwVWtjyYvi3C4",
  "key23": "3nC8GXmB6X1ShpAws1EW5PY1tks7m8WDW2ktvuxeNTN2GftC7hWTCsDSPWw6YMggbwPcqBXJFPLKiLjdVqpesG1g",
  "key24": "4SZum7744shoVUMToqRFQJLQ39RoE27f7vKLJYdWbuEDvJrUpgz76xSyXK4hheDF4LA19TgoixQBEcShikY6RuxV",
  "key25": "4vxYYqhusTfw4qxQQWDnx1W4RHYUu7UcVZ8iTTbJj1GoHTey33wHTEigTx4BwafnjdrT3VsBBt6VVpdm6nxUkWKE",
  "key26": "2FPE7JyL46aMQpYFJYqhCNNuyUWzNN8uXK98FZoAxFaSaqN52HqgfPQPJxkzi1hohTRA6DqC9BqiNjZ35VnS88sf"
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
