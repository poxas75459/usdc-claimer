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
    "2ux9EjrnQf6Ye32jJSC8qbNKVXqtTJAJJN7FwPpjG7sahXZ3itzxM3WetFWNakYUf36QcK98TVqsU51SPeF5ipSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wnBjXdx16mp9NtS3HPPmVDM3yqDWu15XzFuMuvNjvrDhm4mcj1nP39NBiotyi242NjMvLVFdoMiNmh5oSuTnf9u",
  "key1": "25aJsvpPAR39H9dGtukGixBxWFT3N1mqTmSvugeFtniQ9unzTWUMJwBD6BX9unLZ4CqDqY5eopKZw8SMBjzjG9yr",
  "key2": "3DL2FHGneCqNdSdj5EpcyesaSca9VJefsDkXMT3tpKCu16LDTkRHyCA5ccxWzKWYDFJXE9hf9ZKqN3C4scxjDX6J",
  "key3": "5YH1gBV51XS35MUiDWNjbHBrhYzEVqwmzSawmTKMwEeSCjMs8v93MVkBzmp7HNmKR3UQAehd6HjKjfScdL4C8jTL",
  "key4": "3xZUsMUKvTpbQgP6HYNxxwXRwamcXEvojWzW7hqAXvvAuz5mURaoi8D82C7mDEK25ucWSKYFUZ8suaQJcaR24DaK",
  "key5": "PGWyhc47W85x9v9BXZo7nSXi9ngjHgvFhhqXji6PxEWR9YUCNhPPvxUUNEq1QTZuSbkYUJS1pGwioinHUJWkCSP",
  "key6": "2NMfS6oZaMYAsZtZkKpHH2DqKLomQ6EzkSweE11fLDxgHp35C1Mu1GKZePg3REFbYg3CDBoDsJHviM1vLod41Znq",
  "key7": "4uc9ufh935E6BMutRntKoaUsvo1Q2YRuLatGwoM7nGL63mcJ5QmkymRGJ8S8coQM8vvAGuJxpXnk2yVYmwF9VNZC",
  "key8": "AkCPQT1jkqYCxdEuehVohtB3fyqBPEguRBdDWDjYa5rcZJh7Hkifweio9N3GVADhSzLRySJDnCwRFF23n67zqsz",
  "key9": "4MJTcKfXNuzKNCtsTNTaUmP7YuZo54Y44DDGfhNTGwCE6XhcfgMEn7Hr4uv7XQWFB1XD8GVx11xd8UaDJ3oAtvi7",
  "key10": "23fLvqL5Ju2EyT2Ltyy6biQfbyzHmHL253NfXVCgZNGLgCXQ3RevtabhioRiEhHADYaqkDze6NphEqcQTdSPh6bW",
  "key11": "2eCcVsewJznjMy7n5SgH1xSs8KpCJJdhLTnSZfvpXDcPHr1v9iP2rJ5QyCa6RgtByo6B2RTXazroVA5YbZwAhoCD",
  "key12": "2Ttnrg987ePJ9zh2vAQuLWc9WzYvbDVmHw5xUV4PHQECmWzsGXsZpRBuASFqvR8fTbzHspPJ3TX9BUsX5yVZzEjV",
  "key13": "3C6X5q7s28Twtqn1VQXp86yhpLhFyxGVyHc8hzr8GRTpxVgUXtd85uXLA3gPimY9ukiHfkHerA6XuNGgkcfR5J5q",
  "key14": "2rqQqLEPS1S9M5yUw8RWY2MYnGHSfqCMVAXUK8HeiVJd3rxFFrohaNzzn6ty9N2PxP747M3jzDjwZK6fGyqgeXRH",
  "key15": "5gUFLpoq1CrNPoDMk6CtEojpNZqoCXTzGzGJ2m9XnvM1suXT5ssSWPHHiErJt8xyGEuGyUtWAeyy4zoA5mVn6v7S",
  "key16": "3RYLTHUUWTdiwyunjQLn2gVexdDWQE8mj9xB5fuzYDtiaGZ8Rydw9fVLe1hmpk3vttchjsBdtcTCxb32VueoTwJj",
  "key17": "5PFWpFXa6AKwK54vuHLm25bKQeGRSP178RH6nVowybw7YJY3iqPi2h4QZGrBPYPDXHUZEGD8DkhWrbGybZEoMp3s",
  "key18": "2aEdYcQW4FL37ntiDPVX3KVDpLsNnFUksJ7SigWGYBLkqmpirovCW1giqHtBY25D1WVwstcbrH5Dp9jD1K7isEZP",
  "key19": "4d27SE9qNj3tKoevdtjM5b3hagtDsfSmHTtr5WjGS8BusSkD9UEAUPabyaCLvZNM44jCy2ZWRr6GGa9MveC6LqNu",
  "key20": "4xFFnT6eEkkXH8XK2UmuiJJh4LAXaBdv42aAWj1d1hE3srTFP1i4HKBx2FQyQ2RQc1VS584aRQucq2RBWYP4PVZ9",
  "key21": "38nawdJiYK6puPxqt4uS9zygtdk1swEztddEFbqByviovdV93QexYCSTrDJS8GZKEnjYYvjwqLfKD8uwLk2aDd1f",
  "key22": "5p7mftss9TpxHaJvSHjHJ42iUkVKR55MoX9bpevrDtEsbaFbNnCsnWpHoFmqhtoWpqsLe8vnbP4gwkuVGKr5YdRh",
  "key23": "2vVvRuQkDQUnmTa3yqmPkbohGqNn3VTc3J1mTh2Rq3mBmBJWaGLSi8evt15XCAWUYMTVsTMYDKNGp6LgP3M98PVV",
  "key24": "4sosAw7u6H4SiZBUtbcohmnEvmNcsV5sXpAacT9rLMwHLDyehSwcTtTyM3fxvjY1QbjSKvfnjESj7YSmkGuXoWkV",
  "key25": "2ZYS4mtLi1nXaWDzkmEJVxDw5Vq4pCW7yNHcDciiGHZBNfDqXDNX8uDdXzFoNynABypj75ZpZsS6iXNeVTMWkY81"
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
