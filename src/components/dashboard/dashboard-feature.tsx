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
    "3pmaJfnMkck4C7Xp5ATRJwBpvggJkyNxkk5guG9jo1ivkcqChPN5ni1iUcZJrhTBoihgZVNKRZtVEzmdeMEr5hLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHi4DKYH4pLrspNubTAv7BG4efCi3t9KpFimQkeSUKibgh5iDGqwCtjSyumY7TH94hdw8HJ9mWMGzWjXWeVzDfF",
  "key1": "56iN3p3zTpQ2RX1p3cb8uM3jayT1zKPUyMcMaqRgeSyZou1cgkaYUDj7aCgr7hEkFor5BAbqfmgh2UB9SCw43kh5",
  "key2": "5pjV4As3Z4o1piMAzbAWRkdYLoQbTBqQCxzE59egywMBv4nciXX1nT4KK2XmzTWBSKWyzc27sCXS4qmGikuW3E29",
  "key3": "2JniHZHfJxyeB5kt7pfHyqARkxhpYBVqV5mpasqrgAZyDtJAfpWPe7VYVSUF6sQhVHDnqNWK8ikcReTc6Q7FyH1P",
  "key4": "2BMupgoeG8XsfWpgqtj12ESSAxFeY6cpTLwLME59HifV4ZfV27mYdWJj2x3oxtb5sWLKbLQ7AKfnNYXRVho4YeW6",
  "key5": "fmeivD67cXe7y8PSUd2zh2uUPZBYBkhtHbnkFEJCUzEizqVRgYuMFDHfxLwJcQXkY2BjMUcHZLU2Tdjc5PrebHY",
  "key6": "2xu9AnoPqipGtrXDd7PKiyaPeFZ2NArhSk1ruHiyfcYFeeMwq9WWeTsc8N8jHKjE8UANwM7ZMibeqP8p5LiHABsQ",
  "key7": "CSvpTMDkjnSpJ5uLDjnztGQ76VFgFS6qTNjXGpyzzxJU9NnCiydcNh9yLpDZnAJ2cNuH9oHto15iV1wgWqzjNMQ",
  "key8": "5PkdejCVobuSTjaTogJYRbuk7ngej1q11aHR74ZKi9Y4o7NWd5U9FR4RZtauHABfCN4xbUto7yoA3r1grv4FfXSB",
  "key9": "3AWW3xf8nmF2XzzEKbksuAgVa2pCYoCVzuA8n2QGQDQ7rE7rS9E3oVaG5ZYG6XRaGxhc6N8GnMXKKGyj4DM7FF7K",
  "key10": "3N244vAeAabbzt4yraBcMmBmQ8exb8NAKbk8nDHjUV3qxTHb4YioY2VrRHL2P7KSyN7VbMmrffjCekaEGjNf1XAD",
  "key11": "2XxmQRyFKBXpvbFY5QnkReUvwSJ8mm34SxaWBHU9bvVwjksBTb6PCQd7DZb1mR5duGrZjWkwcet3u8hEjpnBnrwf",
  "key12": "2N7ygsTe4t76bBeVo6eT2QB1JqH5E3PQ2Va63jKWvZWtvfFsDogYMSaA2hcspFHZs33c4F5RAm14pxbG7kads7V3",
  "key13": "2PLbXGRJ165toMqvEPNpkX5V2jBUJPzmMmL7Pq5SJ4NTnAdmBL6RhSkm9BbboM3Pft8Zh7iPK5PRnsbQsBu2Ai3B",
  "key14": "28eVbJapvFYTZb8EU7XJQ7BjpBZ2yjru8rUcsq34LScmoNHhhpGLNGFQhsmTqzNXTViww2tuBm6faixLSLUTsUuV",
  "key15": "54EtgD7yb2Pwd2XKYyTjbX3Q2MmyaqDs3TvWXzTvFFESj955PCz8oAjZUhFVskZnqVWQmXpsbtz4rL2aGEKkEY6h",
  "key16": "5DAFauzgNo97BkNkgCasm8oFY3xfcdaYqYK2xGja84T6SbZAA1KUxJhV7Ske9fyBYM4Y2TgLsrGAvffMLguC6NqU",
  "key17": "Agh21qKsG9f53Hcu1PmGrkDxuk4GbC8XooouAe9fC4FPevbF8v2LaisbDUFS8H445uPfXCk82gymb5LcS7oVtrV",
  "key18": "2tEY5TSaSPubsP1rZnLWhESZmsaXrfdr2hgkSawEwXMb3k6Pb2FqwbrpWQZm8AyWXJUKDwFGszbh6ewNzCLFmbKa",
  "key19": "ZFkWNpyJineFZwDrgMhhW7wz5YsUaKyJvJP9ZETyqWfGjhDaQF2ZeoeMPFgqgEir1UQ27bAymbXvrFnmaJZMEEn",
  "key20": "2RZzj82yfVpJGqrNr5VfDYsfUAdUYC9B2gkFeoPdLbXJFniFHe3kVBLXWp4JNqrStwCFreeA4XFBnKCHrgYu8141",
  "key21": "3rHejHrR57C6PywDkhz84FWwX1A9xCxheqUUFDkhr1YnusLL4yVh5dJGRaApUAinPVpFLFg7JLfMscDm4dpsCnFA",
  "key22": "2f3R1pRpYKZ2dfUdYmN8UvqZKQF7XfGpz7nU2hDUYTJVkHXwGfadFuP4eyo6zcV6KwUredUnssepHGRKMtFKXMMe",
  "key23": "236jWskR8cg6LfbciwkpV4oL8Ka3whUhXbJpcBGx5HQ2oM2LQUGF6jjAfosjDwLUFTAoPHNbp5RKVM2fw6XJGgTP",
  "key24": "3c3EUXEMb93LixKek9t2oLexTZsQq97CYHd8PFYNqzJUwG3eKmzfsM8dYYP1SW5d7FTfQq2SUj4NzEdAXmMyLwFn",
  "key25": "25xyCNRWFKguYyf1rPx9t7fXQc4cBdBtSNtuZLSmuXnwgzLJjntZsbhZyEGWe8xYnmDteNq6N7nBLypunpbQiyLK",
  "key26": "3DbPmweSLw7tNHo4ctf4gbtdCXixy95BPD3MaWkgrBozsSgrjytb9J6wP4ssUTLQSeAu7twVbuE9PQgdvi3rFFhB",
  "key27": "4riozShsWzzyeBCMWxbFkrZ2i2DqQVVFwdNx4P1MmGasCN6tQf2rps75a3o76RySQknubAe4fMVcXmWeznLN4xmx",
  "key28": "2hqsjA9Cwwr9DC3UUGoU4z3RkrScabjajH26nJmBAXgxK5rwp9JJu9PTFRvvK8vSyEfSCB7NkTnaCdq4VJJtdVzy"
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
