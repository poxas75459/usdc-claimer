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
    "2qTnfFjwC6ei1aeEPy4QrAJGagWoLzdZVdzz9PauLvt7wSRqvXbr4pdv9nUiBQbnws5qHMAnhc3LgqeUENQVa8jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2niJMbFPbJXKUQiwErReCX97ejJtWtdWVrbGXTh83WNvReunckmT2kVduwMfus4ieVjPQyNW3iVE9NkobHdDaH4x",
  "key1": "5WcDc3A93aMroQRyf9M5oJbhqVSfRfH6Ptq32izgzQwjHZVUZp8wa9HM43pwG8rYskYDTCE1LtJpdAUSfwtp27aZ",
  "key2": "5MTnTQZmprzPLunQPmQSW6yPYKUy5NVXiN6T2qpBf2S5F7CG77497fVEDdd1nUg3MRa9aHQD8B9wz7XUkc2nzZiV",
  "key3": "3WQ9UR8krnAcA6pruFk5Wd7D5pWvpydNAxFB1n1qcnCotaBKHh2AmipmfaviPWCSzKvNbzsPp96oCS8SsSWXCRS9",
  "key4": "3rNYDuXVy4Gss7MhvyD5st73mdQfxnMsTmCiyQVXZdzPRZk4Ki66zUp8t9SbTm4YrHhRtm4kdt5hyvy9XsJbenf4",
  "key5": "2MAgsfsQ56338KSxTEBxJfv45Jjg4UgEfT6z9G13sPe8o23JqR47PfAoR6hY26AM2WcBf658xikdH22ntR1HVY99",
  "key6": "3brf9CdZxpAXzJgQMTAxgih2BagEAmMchE1enPwc1RLpc51cdYWY1aiyzjeoRjj193PcdPAetrtmDWn32ffLFu16",
  "key7": "67mx1ctZNKcmec1sFH9QoAatvyKurXexsgpTfxBkPdskAfafG7fzbPdxgFacvccqQFr57eFUA3ZWDd4tJTpH4N7t",
  "key8": "5uYKyDHVLFZY63m78z7RSScTBoFi6UnyRB7idAMX8LBYBHXPqrCcvvDrYAPCzFjj1cg2nAqddEfP22SQsV8rHDJ2",
  "key9": "3739nniMVb7tPB6i3Ky4g65EBaokPb7y3srxLNCn8ChehMdNz7NVw2HNa3s3swFW7FkuQT8HHyjvTk6mCdrs9nVp",
  "key10": "3cL2spSzGdiiszGCuiKGAhzS5kZBz4jpBPLwJVahmg34uwyo6v9YK8CUdNW6Pk4p4f5rYVzvPEAkMmxpJQrS1Bdk",
  "key11": "MKmVTvmm2MNFdvgCFnbMz7yDgM3vyef99SYMgtXyk1hZ96877GKkCNzDDQKvEVxy1Ha3tgUFRY4SzTNnf6cGaXH",
  "key12": "2o2ZTT9DuddBv14hujJYbR8TbsxNswXoZKT73eywqLVvk1pooEpYVZEboHpumT5JGV7tGmqe17g1hUhHoTdriv7q",
  "key13": "3i4teCUu9sdhkgUDRLgJnE8SHFPDNZqpZJ57bdtReiH72gTohhDZ4BUw7DCZwmstczrkSCQiDuHvqV9j1rqSLXPX",
  "key14": "5pceNwthzM98wvEMaZ727gTwHjFDHceNXXosFJhvLrFWiyVeGVkfrDTAAKfQt7mLCBgmMLRLd19MU9XPFjnZhAbo",
  "key15": "4mRXrjbqx4XtPG71EXxG1bNwTNKYTXhAYsvB9VquUJqbWXq6vDPpEu7TudjbvfFqbu9txXDihQRnZL6PbgSVqtvz",
  "key16": "4fTRJVkNVw9Fodzr1AHUMUiPZBbaXDZJDKxtiaTgJo2iXftTnQY9SxH37EqJhfcRHULm9N7hsF82a9wDqroCpW6b",
  "key17": "2ww7CXJfKNv5ELnYuw35HKLXVFQFdhUynfUCVz4FzXj7ZZrMbVJs7CyJc8abDrmhCwyB5DkieeT4GgZ9H419mhPc",
  "key18": "3d7ZDwB6jCcv8w7uQCj9Ng1oJMJWZ46cLuzQ8eefCZRxsLNe2e4Pa7ws7CtJcNM82Co2oQmXJZAXJwP2TcEr8NnK",
  "key19": "54SDXxVffCWwbjb7SH2adnS3tXi9jg4HasC9u6TkDWM8qfeWYsdvVf6ZA8eARHt4F1GjGrkyT5hFGkdN3oVqyVB7",
  "key20": "3krN7J8QbYAXJouPPkQ3VtwfzjF9dmpnXXFtogXr3R396c8zQaEuDbYN7M2VY2jCuXDQARWabtFdWJAsfixyTBzy",
  "key21": "2cDAmfwtvWc7aJCjCdGkjV64vMd1ozLYw2J8VRfMcVUdW5nidbH78LtJxHomuAFTrddp321vvEYmvLTEgUqw69Ts",
  "key22": "3JsdvwQ6MddJowyTW1LaNZ3xeX97DkfRX1Rj2anwbxtuohZcJLcCJdfofNnrSHUeWSyTYzB8zF7jrZ3GQnHyEDK4",
  "key23": "W6pau6F2JLoGp97AtistyMA4ZAdWnBZ8wFiYozgNtVW7urkCyuyEXbMb6UGcALkz47h6oNyrfNDzT2bvHEozBBv",
  "key24": "2bsvCnyZomB3kZuKoBLMRBV23cWiRtje1oGadwyFQo3UaPaVKLMeArYKtrSiFWh2QiWCdmGmzmaBWruimf6qfEDe",
  "key25": "4cLWamb5pqjqYrt6jT2FZFxPHfqjjNsu3jHeLxQ3WRZ33oyKC8Tjk6HbxzUWkijDetSC9R1bE2iw7Pc1zYiJGbWp",
  "key26": "5w8sKUNTK4UEytHcCjsh9YpaCPcG69wsyD56Datj1YuyL1ZKfCrATTqebRHibzPRJH8SzUZ7kJbaqY4RYEutudFc",
  "key27": "5TeWF69bwk5CDjwy4LCf5e1uUbrta8nXkXaB8Vnon6yz3ZE6CeYuJ4q6ZixjwEpJbXqNQ2XpFkNpGdYzoMYVJuvr",
  "key28": "4aj1iA2uCL63kuEPaS55ApSk9wjG9xEmSbyiHxQ5YJRpH1DkZn32ttnVLYJDcvgQwUi4RW9JWNEb7MP4z4AdNu3m",
  "key29": "4xANo5aF2XcULPwiYWwWLmdGASvxiZg9HtjMojPhY3if1bgMh81W34P6Ch9RgPcbSDBjZMWRnesJt9h16TwXJSiW"
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
