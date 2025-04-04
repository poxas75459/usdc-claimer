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
    "3VwkkZB6AUFhY29hwmk3nJwpHHrnMSLLp5e3NXq2MhxZV2YjRWTFBN3FQDoeLjLi2j5sa2djDNbcRfd6k5ppdHJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PtQr1sK7PqA6X42kRxp8rv6nr5FnwB3XWxdHtaa71w2nmrkYqCKyhcrFqYZ6epFiHP6BGHHzJRczssE9NhJ2uMt",
  "key1": "4WUYrh8HNKVdjqJXM8r2DVRiL1pAYoxxFxypFMa3j5D7sNmuJD5TfTigVYWw2SS3odQGY1qFyNXpoTGK8D8wbC6Z",
  "key2": "3gjEFUN6V3ikCt5zxq3rgUvxqxqoTK4hRnxNZgjMW5DVUNzuMQ4A9ZZJMiHS1wAW7A8h3NmcteF2Qqc6oMFEdfnG",
  "key3": "ECKFQnS1WG9H7Uj3Qd1AQbhwtwZ2McXotyCWMJx66xeRgLTurXXouBY7thogMZUHRJSHLsK3PhF1zKYmxU4Tiie",
  "key4": "5tUzEV44JvG4hsVUNWn5fUTJScZYQ4iVQhrjvGmQ7kebyCqMryqW73nMvTPYyKZZaX6Pr7pEuJu2Rfbq5EKnD8Rn",
  "key5": "5qSj4UjgqJ7HrAVUifywt8Q5r7hmtwo7HRotHgK2yEckEcnoe7vqcHMEAfYAj6dWqzQc2jJxf6JAdi4vSQoH9rwV",
  "key6": "4LVbW3CumkQsXBkrwDKL62qwiYWk8N8eWhYdo4tuhEFrE8a6kxc116V8vCeP4bFrk7RKSi2R2Uv8YVyStUmZVysM",
  "key7": "3pWTTacGCmWRb2K2XhnJ3oGqtMaGGNbhPEYBBU9jyspAaLK4zF9xNpvWm8pSCsCbCxtf2KXXYapDfFrELQhRKmkD",
  "key8": "4xKJgDvbSdZzJBoYCqqmUMYpUs7X6f36k4ujxYUhz4mRA7VVcRNwiwG8MSSkWe6Shn4PvphaSUdUqhDupTHay6CG",
  "key9": "5eYDDzkaSZ9jBTLqe6FfjkM5TZXP8bNif7EK8fMwswrpMGC8E9cXEw6DC54AxLutZs1f9GkULQB1NeML4R6udVLK",
  "key10": "4QnWNMGUjtKpKetPNeFrnQApCNTD3htPHZRrXdJski578hyk1mpHeBBTZyxP2jSdjhePyd5wnRwtSyvDW28dPSQ9",
  "key11": "3UukrYs94h7rivDZzM9PJXQ264S1x5GpNe1j5q9oGaoutMNJrsyG5zT2Wn4cWFodQj6qj3dS7mE2m9FQ2EatbYVk",
  "key12": "g77hfjf6r6xWzz1rXBGZGdQVNLqkkmBBZJVRwkL2zuuqg8PGpisaEeSDBdiTQ3b1D97EshWhqYbtzjHpgYxw8fV",
  "key13": "2aagsE1PLZu2Km2GzmseHaGxAAQ58deYjitRjztdVhaUT6GzCKP4xtPFMcJ8BwoJ2aCZY2MJETxw7FP1q9dzrcm1",
  "key14": "2CUax7M3gVNxSuj3MjPYGfgS6aSjCJPPS3CKqBxtXf1dyHUiTqxZHrt3gYerXKQjv3kaep3B7EBx3LcQT5y3JXqp",
  "key15": "43xEJRpwZ8dw7urgHM6Eby7MEhCANykqZYMkFj7zQX6Zp2pFu616H8Gf16Wj4Ad5k1ZiQyUzqozktgdF1ytQdd2b",
  "key16": "2jHCRwLDEz8LAkbAxdfTERhyzycR3BLm1gfrfBkPqwA4o2mUkfDgw823rNbqZhZXHesZ2EhSoEGepTdJLVZsY8Qz",
  "key17": "tiD99iVdPcbiWuneWgmioo8osdq1A4zSBQvvk4XcCKKeHnjc5aPZqjBWFroGKsMPLPdM4yU4kDtEc5jzhe3tYrE",
  "key18": "2AbhvFaY3yevnE4dDYGQkpdXBGujYXeNna2ZZCpsEHE3P74YCRn489GgiLJun7LpVheHyu4HXP2qL4CPWRYK8XKX",
  "key19": "5EdY6ZdmrLaoQ5Ajv1ZnyfyLco4jTDjtBW7mwjJu7PrXim2VBLiCqsuRX2dfrNvjLs3YGtPnfpwsKpWk9oGHLVQP",
  "key20": "3TBBb9z8K9M7Hm6sjbddmSh4GWbUukZZzpp3kYcr5M397xfJsgE9A671KYK9ebMiyzusrhAZ56jgBmAH2gbSaugA",
  "key21": "2GWbYm8Mrpttsj7xkKqyeeh8DTCbLCHxL7iKdDRmgyQtpTLyrGtKANcUkgWdpxhdqGGzo8EhG2xRDocCu5Vyteqq",
  "key22": "3Lv8QN2Qedyf3KrWLNjacyM4bDDUmZMwfuSRK2EUpBGLb1NLC65ZAt8ZASx54ebMdoJbcqeCFi9JB7E9mMVxhFP1",
  "key23": "FbQBbdTHtnJRHxaAo7aM1qB37CSxvUqarZMtMUkVQAWW8NwsRpRjh9VfpJ9XAE4tbNSBRQNJDmLsS4V7sKj1tdG",
  "key24": "5Tee2RgPnunXdYx5UvpxcqmCms8hNbncsWkFZfzLL5V8sUqezVQ3bbfcVkrjMNczZUEdppu78y4od9X14WFj2GGW",
  "key25": "xAvnKqyEiLL2TPSuhskobK9PoFYvFEVPPGqWNA3h8xXapCh1wpwKcpLsXMgF9jDQfLTjMGcgmrsNcAuquwyyCL8",
  "key26": "5vQX4REM7STeqCUSqh4ZFvpc1T4hkidDV7EXtbZyTtM5FJWMRd1t4oC5spbD4zts6sD2rQFgdxvyEge5ACPPwYPh",
  "key27": "4h5Ws7J8JWvYadxXHUBj6ynuz33Mnj3kvKYNGyWrmcmXrC8fHRn5Qge2ziGYQ1ePCUZMcdnwgC8srLMsqx3y622o",
  "key28": "4Ri7J2nFezWdot9TqFrMC51Faw6DMWkoeA5P6mwUEeGC18Un2iGBBhmyqArm57bYRi9Xo1w5HC63R6LoZB4rZfNT",
  "key29": "43VSqgGzxa9tbk3ija4wQPaPPKoy1UdpHJepGrYWSFMjC8FpQtT4KAz4tcAyV4HX6T3ePCA4dTodrrmCkUpiqWHK",
  "key30": "61uY2ZoeJkcQbKzjnW1k2Pq53QHbeKYqtpirpde9NLMPzi8TbbN2DwVYvVswJpr6pV1JxTCgwoHFVuBQzQ28y8u5",
  "key31": "5FVM5RTmFDK8uVB9tYmY4GSVL7fZHw1aTEcE14WyKqND17UJkdBhMKwtJJnsmXfYhHKmPn9KPfojAny2rNBikeEk",
  "key32": "2CxxgHKsgoBjpPc4JprHRayh7dN5BUwwKihJrk4mnjYjTU2dJXJUA71vjL9YeKJPdx4vtQg7yo32Q4rwZUykgcFs",
  "key33": "643nEJmZF4boetVyq3X8b4odLSjBmgsk3oJPzAagt4awvcrDgUbTSjQC3rez5h5K1iZn5aHCP3fyfFP7y9FgwCpo",
  "key34": "AnWsZtw13JLUQuP4dAD5eFBKTiqcZ17QhSDjnMPq1L11teUCCs3ZiijSrwGrYatyDuvGc4yj4qSHsjCQmWZpCyp",
  "key35": "3iuS6WUkNjLXT7Yta4ATmoCc6Apo3ct62oiv7KEFNEk7pLu3fD83fXFZten8qkDTdNLAMP8nMEWY5xvHt3fiQVLW",
  "key36": "4Z5HiMwxyrF2H9A2xfWvfTUNmrBQBHpvrMfr9pGZJa7fqfFgvyg9MmKXWce3CGXoFxroRZAoUSiSa8GGzWB6xQ1T"
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
