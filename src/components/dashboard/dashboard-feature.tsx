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
    "5hZQF4HDPdWsAhZ4xJ7Q9Xo6fg2HokLcdGho4AtKdFGj3ar34bPRqePwMDUnF1CCthtYC8JpX6z6wod3DHtWURTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21h9FQiJ1o27sK3caRfQeUr8kvSRcGxpusgqAH2mv2EvSvXyq2y4L9PSRDDBHVwEiTMMjqBVakv6fHhNyjxXzGG9",
  "key1": "33H6HgFUsY2EMg6gL5Ndenmj6TPLHT9hVHfpWyenJzFnxBdM9c89Kkc3SU1Ha8h8gGSK44Ljo8otUsy8KYymF6LQ",
  "key2": "3wJnpkJM4KzxTtn5gC7nBL88aa65SBwKhhJMuU7hVWV2m6uAWJijqnkCAF8cd6jZa5tpRGfJeDGj6UnwfQameuUm",
  "key3": "4CAxjHzasr4A6bxbaecq8bUYcEABVMVhdsFcY8G6L5LtazWzBx74WQtHY8BzZvj9uNu6TXm7vmBUut8GTMmXPX5C",
  "key4": "bubu4eyhf9uWmA7LCuu3udFmKn3iYZxYW5btbbmjrBWAW9DUn6egE9jbCgAiZmg3eH5uu9UnrjXKpTQnYEEdWUK",
  "key5": "4sFREyK9zRApKEjCu4G6jbyV2aPBt1o76GS1ZQ3gba4mp6TtWnBZcJnDscKE1TzPRWQpbo2z4rGzFbWkyD8BZVKv",
  "key6": "sASiuyDaVGd1LFZm3yNniKFoiU9MTXJTF6FuRVGacXQbBbWba7rqZEoCmiRpnfbnoWyiCTsrhCbHEiNXS72sQ15",
  "key7": "CaG9gQrMuvedoMuQJWCSV9RcW4YyqMuPTePbQGQTfCS7oVL34zFXZPsKFj8ib9VvYcqhuLjRgxeMRkhVvVKeHAY",
  "key8": "3iNsgVzH8bzQSNVA8G4VzK5DrFXeh6kSQZWetTg58X7utybgdSKpvYRC2uJ7xVfmeythEp9qR14cqw3a4EoPrkX1",
  "key9": "4NwPUuanhS1dBbMHwTmJYcvarTNpYVHvnMZ5VJ2oHJjY2WRfKxxkkQH2UFGAfk4uPsbHuDsmpTHvpF5qused16py",
  "key10": "3aJhmA6EK1iPM5ufJVgg7NFQVS7cisfdiqfSD9vTqB7VDJ7PDegeRKmZGVz4hmVgC9c3YPa2sYeub9FwcZSfMg85",
  "key11": "2XvnxR5z4va5TEKqCmnZNh7ivjW5RThXFNg1e75cFn1RZZwEAFAqa9HjLZBUNg61L59H1KyWW4N797umUQVg5HS7",
  "key12": "NvGpKQ6oxWrFa94oaCcgthnTdJQpvpAzQejM2EtedsJmndYwX43hwQkiKoGYsoV6ekvJ4by63XuHz4MvYm5Vhph",
  "key13": "3JUCWLQdQ3ue3EdutX9dPzgTtmRKeukyFHUgBtD3uuxtrEbsLn9rXNk5E65HW1Vshn82riXci1eGQqqGgEi47zmD",
  "key14": "3gsHvCQhNx4CfMc4wM4sx9K9nKg111KxVwPgnoGgXLiWPzvZQBnJLGXAEK7t7Ey5HCPT12JyJnw23dLDYr4GM8zC",
  "key15": "3EEKKECFn6cjbeZdyL2oQQ3xBGamaUYdD92f8yeVhvhieNESJv93FKKBjgpS5X2KCujpNSyMUB4L14Jtc2gDYUAT",
  "key16": "2BYDLjSDhsFoWdfvgs7fVAGhp4eNFNtz6gEJVYXp657VjLwfnMFjmsw3hXth6oE6p7rzKJkCzM3TycGawukcnauP",
  "key17": "5DsRxjkTT4upsYhzvLw3BhLHhaphgp5FewcxLPjAa7gJhNx59Ph6B3wHqR1uEtydZCptxhiD2wZxZ6DrhtiZfzkM",
  "key18": "3ZAChsW8BQV4uu4qfCbVPWZJHTvEUzS6tEhRkTpaHvwpTmg8E6hDL4v3KiH1GZVU6Ev9fTNGcbWHPEVuA28rELVh",
  "key19": "2P1W5s4s6yLNnqjdxSdHjeqizTVQL6Smkqywjf3QqDruNR9Lmg8wdyAnAJAaK2Zfvxrex7uGwy3WSf8o5Hs3zDWH",
  "key20": "35zm8MFi6pajYnWQeqfx6EPqxqKEuo1JRMgDjpVLAoxWHETFyo8f2j4EPUJw34Uqa4sEsS8KAG11jj1i5iyFwtJ7",
  "key21": "2gWLhXA941cm4QYFybgNR3LDQNLMvQN44geEDf8csmUBfuaxvYMVZY1Y4t1jg8c1HBSAbBbLEC8xqwbVHBpRwCMW",
  "key22": "3yD4HW4RUYHB1vL14LWf3GJn5Fa5Uec3tFsakbt79UF39Bgrct7ZRtZEdvfY2xNzuhYU7fqEmxg3msC6SthJrnVP",
  "key23": "3i5HGTMNKcoLckzR4V1DAiorLWU1aMi2BRkFKUaLH6Rii6qjcV7vKxr4VQfHUzUoFVT4Pr1uEQ3vq5FkgELt19P4",
  "key24": "5WNFhpQUrA9oHXf5RawLVESzmJJM6Pw6VEJAYdZ3cktbok4miBvVFMWu2opDpEV8AV5qTpXgdVxocygMCfY7F4sq",
  "key25": "5RpAsqBRBbT3PHZHvEzfkM8C5KjjMCbwofWx4pVtbMVZ2JmG2RBysLi5JBJiWjLesmDkMMNkKXTKbouCkDBhEv3X",
  "key26": "pVtiK9QDkrfTqsvx5gQVVggZWDC43fdf487876rnoqKhziRWjEHvgwYsddLe2Eu65j87GTzEBGvyb2KjjZj2gat",
  "key27": "49mkQ8ooen2cTg1MYWMuJDkRXPv29puDEPMdZr55p3nhvbY6iGae3Nh2qPa2pshF4EzBbFSY2ohYwqXWa5CGdt1v",
  "key28": "64gxHHDWaYdeqJCxSkn6oQixxwN2UZyJhQzQAHCvV5BwyDGQTfhu6N22QodQLLYVzhiXYPxRDuTFJ4TrSMDGagHM"
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
