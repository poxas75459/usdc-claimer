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
    "4LnVvVjbBBbZt4gdQEjt3xc8irpqnLJshuZH4wqFLwUqgmk9TMXfArCo4Dsva3wNYXwto5DumPy4GA1RQEtNzDmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGmH7ZQUiNPGs6gS6WqZVmKk233MMZ1wgBXuZqEQ75pydjZ2MekH6Qn6d7W7NvYfmeKc2TKst2TMBDrCpTzq5kf",
  "key1": "25rWLE5mNSNKhUyKj1fZL9AScKR5L8jdA6yirLkhoXX2oaR3jih8mCNidCAQBNfmWrkp6VPZLdfaViY6m9T2nC6w",
  "key2": "26o7CjcnuRs6A3mHzr5supPoiFbBKKaAQsXpQpWQGyyabLLHpvQUEkXqwJruxWiRAaAbZNXce7s3LAq3jMTPnpvn",
  "key3": "4QeTVZzTGxZ5KC3h2eYpJhUqqxy4wnjgtoUWgaj5xTEEkiUhvXkSNmhtBsCgUvoiAern1DFTbGZJhdhekYjyNpfA",
  "key4": "fhhDtmB2uDsSWdtoR3oLcWvJGcJ7e5L3L4byxaVvoE9tAQ5Eubo6cGYsYX2zok3MCHiLxAH2jsBu8JirSqNQsKP",
  "key5": "2usEbgck3eiVVov7ULobX8LEMa11TMzVchSzNW9U1dDS89JqjNFC3r5oWSmHddFRtee5F7GyJVkBKoqaD7N4QmiE",
  "key6": "3YfefUHoAib17mV7WFYauUEFjHA1F6hG9moymLkd9d8QHhZAPiFGMtAozDd3DVNfsYujyvw1kswB9Dirkf8fK7Xk",
  "key7": "216ZxAB4ez41zGVJZGB8NgPjapF1B6C2QG5J5DUo3FEgEx4ACRXyhLzu5SvDWHKHHdFmXZ1xc4UufhDkAJobM11b",
  "key8": "bDfx77d59ibhhuQorUyyZ5YVSM49HWiYq9ouVWDZUJgVmuuW7YBdueUanVskhPfon8CytvwrfaMxMZcjorjM7PL",
  "key9": "3gP6or8GLqZjSMqRWG5RkbS1ihUzMYiVVAavR8ogbSFK35PxX2AxLpRo8CwagP1R62zTBHmGGUKVg6MNaimhrBnT",
  "key10": "3hVE5Ta8NXrBg2nQTXrnn3k6xkAs9gG8SBx7mMY4At1TGhXgQknq3QJXMPGn1YnPQZPNeqfiiRA9sXP66avvkNso",
  "key11": "45KxHRE8ZNEzhg8ssC3Zbq4AXBotaPWater3nBTn3qZVNmeCmugxLf3YAgc9G8WRLdN9qvjga77XS5y8TMtYNbZW",
  "key12": "4mSoVwiEPCaWoHrutFz1RyZkt1tGK3p78Jd5i7qAT8EFMech7d7LMCvH4xMttkEXzoVz3TUkdyoYvNWR4y2VV7LZ",
  "key13": "4cybskTwJw5NsFwVALpaNKoJyS9n1RpCytLrXVvxXS4icnsm2JU9LR2p8XK3CGgcsPcYU1S9kX87Q7rt5xvUYJaB",
  "key14": "2A8i2uvLL4KdKKJXy13PgszCrcN2pPJfeNzWDqfafB9Ya3Q7yEW78WTvATWHy6S2qBZ6nvH875rVMgzr3d48ajzy",
  "key15": "5JZbaqZquaRE6thCWXW7HieZNSnLvk9R5NgLNAAKdU5jZUQiz96xLBQXbVGP2FCVozGU6aK2REQoFhPhT62Utr1X",
  "key16": "TJnPwsiEvZuHehmahwrFj825XNqy3inWgJ91GrXao8AhK8tnVyEcE4coik7y4qjwt35tVpHdMq6dbFqvY93EeaL",
  "key17": "25ihkM8cJMDzAjGY3E9TpPWtqKPvz8QxrAoZaVgRfKByZEN8jukEZ1WJvXBMcjg2EowHqYAWpqwpLzu12nkGcyJo",
  "key18": "4A9XGVkaPb5pKdoQ8vTKaU7DbihRZqc8WwzkscGhV8xcHCrEqwZwpKiK2VqfNRFkBAuayEwwjYVoAvr8uLTXCSgA",
  "key19": "62NrDbZg2aSVNg2dq5X4Er4HfRmreYPbH4zxYnaLSTwTwzBjAqSz3symqo7kmgt7LNwnQ14tzGDyAu1H99gFQrYu",
  "key20": "2L2wmHm4tS3QtXzqE2ayL2hfbAAkRmRzc7s72AtkbKWnfAQRjTTcHsUkoQtypRmnAt5Tingfe4j5esYgm6pmXe5q",
  "key21": "4ApApSZEgWgFrFidmr71xvx6gWr5hiAFRz5BujRQMCcZj7pSXt4jV5mKzU7d3gssTyA8vMaprLXZsBVf42Mn46WW",
  "key22": "sPEbY87J3zpbABXHt6Qiw1iELQBkYNACPVSfmmh8Fg6czvQetV9uBUwDEEWGt5yHhTQDB1ZDPZgKi8NSus3cNnA",
  "key23": "4XZ7TerJFJLuoHnCQoNj7UofRaDsCJHxUGst6R4pnks9d4nzqc9FXZ124Rhn5C8X28KJF6chPXvtHUJ9p5nxotP2",
  "key24": "28HcSfNsTWcbXLPbYGwXFdzbSdh2y24AbREkv8Rz4nTqx1BjR7AmRe2aYT5MY9FdHt9AA9nENAgEnF9j15EX4yCT"
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
