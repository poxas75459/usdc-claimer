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
    "kvSphvmzfVjLqVZL5iktNKxSsnXP9EdGxQL8bGJ2RE8VVuwArxfy3c39JQocTdrnF1UNtgjaYFuoTJZY81wUfyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqW2h4BHzm4czrAZid7dMgdV5C9RP9kvwEsd2XPuNBXL5uuhe6MkhgFCfFrN7rGRZUnDJMUoAoQUicaWLvQJAwL",
  "key1": "47RK7eMknFBqdDx5RwwUGkfjgE1G7gZPhGsMYZSY4ZmXtim6FHnj3UTSXQMTW8LKp5w8gKtp7A7H6GBAVgLJFehC",
  "key2": "3xqahZtddC4jJr2wRF6PprNnPueEF49YWyAPB1hHHJZLz1sEEszsTkJEM7tb98MuExXWxQ42GLhFSzEQLDwJFFDw",
  "key3": "5tDmhTh5ZmuJuMYk5VMmGvLeSRLYEfEfDyxCcw22Pi6czZ9KMGQgczi2q5H9f1A4JjsmMTnkXnLwCASPnbtASAp7",
  "key4": "3BnRoXBau1GH2pnqJvdGx3K6ZnMRU1AHmfXM2nPFTqmuce3t18CJ8XJaKRTbj6Xp6oho8XBfEMtSaBwN8BVi853Y",
  "key5": "3jsUyNqdCLDqsjWtwvzSZy2qspF4ByWaHdDtWHQkHg9t2DokPZR1XqkCGCgSQy96TPrDnpKi4pBg8xWp83Hth4EQ",
  "key6": "ZZwgcVPN1j8bSpGp7Mo7Y1ThY8vjTKaZEQ4vL7j9xgQmUPo4rbduo3HicWSK31ri6tiRTYkxg7mYvbJ16inDvnA",
  "key7": "4V484svqecgM4HrBobUbVRcVQJmVQMzE8PB1ezHnnXaogUt8KzQJvxphJ1F3XpVVX5ENYKk9LKbG56M23U9mDhQi",
  "key8": "3Z6KaFkYU6ptHTdEHj6v1gZDaKJjmar5etnWRJUjDVPLJUq6QrgbFKPAtdsQZ6JoHxsCKCfLYE9PshXMDwo8vWk1",
  "key9": "58eaSojDHBNsjUw2KqN3p6V5WowQfQYxMSkdbyc3x826C4CrM42BbtUgiQXqMJoVM6dUYXyGwDXceXSo5iV48od1",
  "key10": "2eN5ucypawUo8txN9FzhVYZqcrPe8xzBz4q4GXSF7jgiAPBTP2oxctmq36WGTHn4yYiGHjMqfSKFwp3wCvAT2VBY",
  "key11": "2qot98vPzvb26pEJzjm6JtLggeJxQE5xHjEKHiGUzJvSUXdWZYosGnfrcTSYmgwoS1ZcrX7EDueF4D3DtNzZyZK",
  "key12": "4TdkSzDzKKBbwFmUDZNuqSQ9VdywsrzQu3yYU21wTAeVyrcRa9e8Xq23vy2S9u3ecc3Js9mZ7NQ6ZyHFgJSqZcYh",
  "key13": "WYVHK1y23JGFScWeG8xvNbGtfeRK9WAg89Ace8TZ6UHtZfscVbGSDc4ByRBMVGXXZTySpFP9cyatJmxaho5BoKW",
  "key14": "4nVA6hajdf2yNvriShhVcoF2uM3dCjT15hj1oFStmVSbUqSe6j36gwtYRaFCucUGqPS5KX9oT4uhWtwHfY1ayGrQ",
  "key15": "4D77YkHHfNAd1dUzwxvwHkchMa86M3db77AZnEMJeg3S9gdq2K5YhyDPVjSPJ5p66TB2hp1MNBUPraPZ2MMfK24b",
  "key16": "4LLXShF5uaNgveqip57y3cyTGk6As1jKj5xGV3bMAi4XvFs9VwKK144gYiCSwvh3mNtkE9yhnwDSMaWGVnKDGrsH",
  "key17": "4gprhARVRSkrHDXkDQx9TyzSgVezXu5FSEehQPEDvZoUvjVgjwbNru6TZzG8PT1uXnRuaDmZow3txtywtZfXC8dA",
  "key18": "5dRqxWGCk8w7GgYvns4xAJ7LTTDYknnCK9Zi9btzkccNa1AepcztAva2zCRxrnFfKSFdYaBsuGZW1dG9ssbYDG2",
  "key19": "2ogWJeXuYhkmCSuPmmdk5h4WDxvswBJ1UzgeyJjDPg4doyaDuB3PByew4Zk8KL4agxYZQWvwvkYbKPfEqMgonRju",
  "key20": "2VmkdNtLTeFRU7aGhbcKzdZ5UnQryGNMDMs49txGhkat9qzKP9DF86oLHpweui7gYFE5Uqg6tRSzCNAinR9QP7W3",
  "key21": "4XKud9vFifT9XKNAoFQpR7d5svxNYtwPPmBaE7WELzsHduc2K8VLxjdmisGbHYDARYHVwL7aVpnSpjj1Eje4FKp",
  "key22": "6qFZGFvaLTnEP2WmCJtrJVERH6ybay1iowwhzWBTFeBm6BEQQW4A2mp37HCPbbwns1a3xN2zbE5kBV2f9FQqfou",
  "key23": "2xbvriKX1pXNhWWVwdy4haAbXA4AR1cy1nSKJDAYBm9NiqHTfbvzZaL9523UNREH28t3jWgDtSKwqxmYEaVJJ5Qq",
  "key24": "3wxvzdBVwex19KtPXnvALiz2CVRTVoaPPtcvLxPR6s5NKqn9vcmcrQvr8YCrczbr7umygJuPZJAe3g78maMgA7qT",
  "key25": "2HEqASawc37LteEfdqjBy6rscBC6ekov5VjHwZKm3qdTnffAEpc6c9J7M5aV8JcxeHUbcc31m7bHNde36HgNssWB",
  "key26": "2pzwJqpJgkT4AAr9tFMxnJ1zoJbuqmk7Ay6XZBJQ5Xs62aTyAmYV5tuFjB8SLqT1XMnjgBikHyGXMyAdSj2CxqRx",
  "key27": "3tYgvkzp2oNMw3ub7nYL7pUajJDiBpLFqLjtkNpqrqdmb3ekhCZ3MFr1oLFQK1e4SC3o1RdKJBZfsj9b9PMiksZ4",
  "key28": "51WsPCiAArsSJMjjMoZSeXHaKSb4cDT9QMAkDqFAaAoVdkgJztNKviistStgPmTU6vdsSwsHSnLj69qkAweNX2dH",
  "key29": "5GVM5ySN8W58RcMa5AAcwiW8khjLVZDCUjSySGTc4qx4iwoJ5JR4ZpXPS6Y7cB9yYxWXc8kwzUvqt4yTgcuEVEa9",
  "key30": "3uZwxcqws25sXwoXTxskRSPBn19yjbk9ePTeEYUBcmmhYvV19WwmEwGx1p5KJ1f7fki3rmVm4sQqNjaA4HJZihrd",
  "key31": "2k19Myt3pyGhascrK1k9w2drWeJ1LpCxz68JhNs3f5eqdhYxCzCo7GJci1TmL7fDNuKaAWid5styEwGAyU8fFEea",
  "key32": "2AeWA8xB5eRb8KkSYTVcr4trUhyLvD2gXrNFd1DKYtie9R1fNRVay3yMYJbQSMo7BspopN1Ess6cAzJmoi4cY5zT",
  "key33": "4ujjbiXpKVHrH9Q3HGyUAEjc29ZSmmSuAW37uJt34L95hyYkTx1c4FZATNsYaXkxc95Rjjzhsr6Pk6tZah8Tv1jc",
  "key34": "EZC1P4LR2BMh6h4VhpThvYwPsaB4oGQdTwsWNS5w78gXUr6ZWq8rtTcLr1ednXinuEGPnovySzS4atnYRxjb1hX",
  "key35": "GEgT8WtEoGhvvYWjkK7wKKDw9fL5J9yZkj8rDx9nWiLunkvnqyw25c2G9V2Vfe2N13M4UZAvnCShhBQTp1QzwNq",
  "key36": "49eS2MiM6qYb73jQmvRdY8KXjQHXgFNrrUcKamhdpj7R34wDykLchnwozaaA1pbGpLaXsVVVCJwJNG8WYKvYUReF"
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
