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
    "atbFA9fC3XaWHwgmMHNhnzH4Jpm3EWD58uYP4e9XYHydSCPLxUsRtLZQdXDfoR3gnaRt7Zk6CZyUuD6MdoikUJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sT2EyYGGAxNFaZgTg2Tzkxi6KfdBQiPTdTnUTCvYntTRCwma9gDhXH7zhm7P8gpWsCgdonEwdbSNg2QrvhosX1V",
  "key1": "3gv7bxw4R5qdh3ZAMgwQNnNpJgkois6k7xY4eHuTf23DMfrq2oDYmUVnhqkeuVeFmSfdWqdB31hdMnGNmJ2bmk2b",
  "key2": "ExqN3xRz9teEmrWq5hPmJJkRWNivfx2LcKua6CxVr4prr88PfFCHNLxFfCmuBTQd4zcGEGVoTcxonUVsdBjuBnJ",
  "key3": "2Qv23TrVCortgw2ESY2BX6aFNF8zQ3Mm6ihEMRpa1EztmT2ojqccdDTPZmsGXnmbRagL96wevxxnZ3FuGiffULby",
  "key4": "4UDZbYDgLK21xcSTpkXB3x52QYTK4rHAbCALMLP8F6ME1vwrUdN3e9N8bKh6m5YUDdHckkqD35ZumaMmLaUrwJK9",
  "key5": "3hjDNXYuVg3aAoTkRGoDbjCD9m47JhX3q3cK6zrNqQtk4Eg3HjiwPRaFM6duyCmJKZCqa9AiHuZp7LhQevRAkbnz",
  "key6": "8nCUW7bBU4wXSjbF2ZzHT3ip9zdtURrvyUR5yJB5SZ3EHhfUGk5zjAzRh1yR3FmGgrFTiWVUC4rXxe5mFiaJ77g",
  "key7": "61Rxaxn6AYjLoZUrzcbi57M1dLaQHL9PdoWJLKYjtqnA4xMnRZy69o6zWBppeEUm96g9puf21VhpbeX72gBrJMQj",
  "key8": "XwcohS2GvRUH6Asfze3MBQ7uo4NWFXYRdL5pTijaaw4275EHURaHcYfHZfVzrujznxNZd3HDBeXsmsT65K3iQJX",
  "key9": "5xdgJNbWLK7XkMrzp11YYkErMaLgSReAT2LhVpmH2abyQjBKbVrU4eg5RwwHbgUoVvAsUFgNqu63P8Ljsrtt4HR1",
  "key10": "2n9Jnfvg9cotwyKQ3R9mMgYpJRYSWrL51kcqdrpqzNF4rMLRnL6ywLgFkth6VjRjQJNfPEkaU2Roy3WKfqFJdTDd",
  "key11": "ffLABQi7pGa7mXXXwVUNbpaWkJt6y1f28iVqkrPfrX2RZtf7oCC31k3NpZrAF2SbX5nGA3rzbtGDc5PXULtb39B",
  "key12": "3BQdYkdvv58dPm7oU8tr6ET9Mc2B8Vw7P988PfjRH1V8ioFX55wckYV9Qxye3AgyzMHZnYY8kq7waDww2gQT2cXC",
  "key13": "3uZcNUABHP24SDwWG5o8bqa18G3X16xF6asBnVwwD8Q9RjWYFvNWcPF1kLY8VBirLob4JQct9fERTA6hxdfTSTCh",
  "key14": "2dUd6Ebb1Z1EQv8Fp9CJ23Bsc7WUSor3hQv7ZR236ak2E9LNPmqiELngfWvychnaxSiu4Foffj9Lj3k7g2tc4Zu5",
  "key15": "3Qef2GyYQCWv9Szruzi78VdzdHzs7po2yPSMeW8vEcb6CMZrKyGzmty1VNYUJcCfC2Ud5BaXmQgFkM8LoNZ7PEqE",
  "key16": "YFWjSiv8HtiJcwXMVHS1UyqKBAToBGRGjf1AADpQ1ztAHsE6JbtQnkMps5Qaz8fkDkbT9WvKjw9dDQ2xwRbZvVs",
  "key17": "5AK3YtoG4Y6Y5VFJQUnEmFD9eBawSXkHRMAuKeSy4p1c8t93S83JSwxE4EvdDCUmwfMk9E992PxYNCZYJU6T9E26",
  "key18": "4oeh8KmgepYzU2t51qsNhhLU3AcYbfHhn93an8j8MSiNB6FUGiSdmFyCUwSa1QmptDkRMtgABkST1ouAwFDxVjwX",
  "key19": "3P9hpifF7bC9SkLsD6SYbMeUz9ggdNYNhAD9nFuZtMgRJThdk34wEeGbt4Hs4DMoqb5aruWFdPQ9x5QjRB7UjBGb",
  "key20": "3DivkPy2FnikWGVe2Dpc8DpjQnMkQP7y15ks4gpFw3TMecM62noUKQFh1K1REMqyixvoeAPzUWeNcdKg1xJK5Ljd",
  "key21": "KpbLTfY3YQ8QcR13P5eVwdY5spQ85Ej8j5evqca9DZiM1W1HJRsvXuTitXmgP9bKNPRmiQ3RKEapSdggvyJzwgH",
  "key22": "2NQTpLnZXn9ZGAT2cZcUbdzpM2mJEi1YHGPdex5QL1oNv8ddftkj8pwhxVSm1eTE1cbnJM9bqBe6Ao9BtciKjMX",
  "key23": "23hgsfvYTLhx26qoWoXvqcoteY81RcyobXqRitcT1QCfwWAwjwxTMJbYLRYhgbA4YzmXEqwuT1WyZ32sXdaAG1Pw",
  "key24": "5KSZGBsD2RL2Ppj27dLUpCUunWAvPtmnnxCcJ16WknkA2Unc5xmVkR7f3dTzg4hq33Z3Y4SxXjfQ2e5c9bxFmwaW"
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
