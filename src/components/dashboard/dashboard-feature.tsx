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
    "3fQVGY6EBowLTxtqyd1ojdrtKcPAUidrKnqD5WppiefpvLYN4CoKZdDfoh1NmrQzLAGaPZpZ95qjmfcwNLgaK2b8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tADZbtcsGu39tbc8yQEPgRZvmZidzzWD4jD5ScUgQNiwmy3mpQ5LbSikAPzNEha148g3h4sv5AVPwRFsPomy7MG",
  "key1": "h5mk9xiwSN4aiq3FCGHRKWXskjSRCbbBRpNPtTaR6eWtdpxAw9VdpMsYLqxsgRHTAaBaePtaDkksFHfVkyYUCMq",
  "key2": "3dyj4YCs8f415DqxzTC5ZchfUQihicJ6vwsQZdw6AbLkWmoXAZqHQoEYk3vMpWurG598mpfHRw7YQ6N8NMeR8Tgv",
  "key3": "3gkWepECEhULRjiXLgxMrVwmEZgQCeBFRKeHakXFuKKCDVr7mPaNo21PqV6ZWL5vQ4Dv7thuaKhUbfMVbXq34dLJ",
  "key4": "2zk4JPvYkwD4hg9UdLJvew9Jg6sHriE4Nwz3mzHWEFhvXcpuvERPtRM3PqTQH6StJJhyKop2vumkRWtdMxPdxVpz",
  "key5": "3vUJVeyo5mzd6BLQjXTxtUqxhgLYBAJofwBMWvinHkbWAZnGRzpbypqYvsrVsN6knz6JHEHfCGTGxyYvgpg8nEfs",
  "key6": "2HkjiozUYgaFcxTVjapzzMBoVHEHzx1gpTDfNw9nkJUAntbAD4Atn4Ke97SWDsb7dWavEACgYrM9Q8LpamMzTAea",
  "key7": "5KpaVcMiTJ4EPS8ZBuXbdVzvTMHYnKMCtEGwL37CGJ6ceQwy3HB81dGYNKmRDtyiM4VfvaTdoMYkU7zVf1CQ4ebA",
  "key8": "3Q4AFYhZGTPqbhAHanhEFVkBH9pe8Wxo9uvVg6bnBiFQswTG5V6aRiXRMFrbrmiKYdJggfyh4PdhNpBbn2CqC1Yp",
  "key9": "fUH6udVEnaDYMV11ZhBeE2GbuF7Pj2BEbszQrs1pvpX5hw5KLY9fQ6CxWMGHj4EV3Nn5JH4WVWQPigpRonHQ7wq",
  "key10": "2GHihBmY8NxmxYU5DJQrgW55GQkTn58iu6aRTd39NMZDXkbfYurm1GGR9V4ZtQh2za6Z6EwosT9dyWWpvG6sK4PE",
  "key11": "3zqApf6QFn4h4VrNZuB4ycJSWQzTCybDA75jPCKR8tZpE4e7GMo9y9ZBAsRzYhxnyru4WB185ooX2rnzAiPv27jL",
  "key12": "3V5qVz9ExBq2jDDF5YtKmtJ4r5j9fPaHQFBHwJ9aAwkBB8fqjWgBiWnGLDR36EmaTRumYdTUP6BSdwt7eCJxpfTo",
  "key13": "3ASaFxCTWrstLGRhzdztthPf3q7gU9T8i28XNTi6yKwLHjeqJRGSnDASMevf8NrR5yH4wx55iuajs9TogVJGqJUy",
  "key14": "4RfeTT8UJQd7DqDVcTbApo81qdz9rBxivkYdvNtSL1vgaRvtcgvwHAAZPrNJd1d5yKeBNq4cQt6SkYy6HWHKqjW3",
  "key15": "aKFUrjjpiaCCQqsyXcQxT4X4jvgrRj8kVcaZ91kEVBYH2rZNM2BSgVWBJZfKGksP3yyY6to69ky92U8g2x8sNkZ",
  "key16": "4TfzGWYHnbfnCdkEJgdxqtw8r4YZHLrENUbifd12ZnZFwgQayoB8r7mGN6HPRmewJKY3DrRUWGYTQJBDTRvMV2VR",
  "key17": "3n154dJMY2E33fyf7fRxZddSKpD49uch7XRDiRTzdFkZYV31UXWXEsieoWwovbS5yDeuhSQy6VysCPmQLQCPq34C",
  "key18": "ojrd2frNhC6oGG5Csp7xE4MFYcP82DoHQUpTtzwTQXD5uq7T556z3NWF8qU4aMNAd9j5661YmcRwFVAgP6faVaH",
  "key19": "2F2xtM7FAEGusBhSCiGADPN96gyrwryJh2fXhDk3DD7vVPeCQbCfjRgUhfTaVwZRma6Md2HhVpVm8RP5z8SDGk5E",
  "key20": "3w1kkmEmoknUJTMs25YZ9gQQ3rAnqUaBomsravXMo35NJSJQugckdUDpxmPa5WHGr4WJZ8vErJa3K11D7Yv8h5bv",
  "key21": "22Amrhk8RsAWRC5C1nCUkyvNNK2MAkJzdvfB6EcV6UA85ga6Uj8o961JN9f6UnAsnRUjnMjGpXW9Hp6GtkrKGxxQ",
  "key22": "4hF6rWLz9ex63f5zwMfs6XnuaXHHfL74XvNo6u6ofvtXfJUUwcBNFhv9pQkxDL5kuCHNBnyAibiEmYRXeKuxLxkq",
  "key23": "4ubUJfTYYJ5C9ECDFzH1Xkkuwg45T2yBbQdqRrMWpRmcdDXK3iEzFhWqKozK8RxGSDiFrJLwchYGz5khgRkRfTRW",
  "key24": "5vapY8dNaPRSdj6bJDL8ZESy9tzk2sQFYaAYtyreV9ANKd4ekbzVjkTaRjnNbtZ7jRyckAfDw2fox4t1NY89Wxb6",
  "key25": "4549kQPfb5P1V37ynP6rSdbeykdmhZ1R1VMd6tsDbX4k8R274cviahC6PPKCCQ411GAhcqQkzUtdJndJ94cExjdT",
  "key26": "5wAHdn6bHiyE2GL3d5qH9wc6Y4dzcH5YmN91NkUSEty2fR249WUw2gissb2fk9mshA1uw3mu4BDhQDN9tnhNwYcC",
  "key27": "4MfJvaLSMbBtPYkdhw2WNcXUBdCz2cbTvBJXyRpujbEqVuRRaMbQca9ZwVBBMQqjks68hi2dbCV354MmFWZ6aApf"
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
