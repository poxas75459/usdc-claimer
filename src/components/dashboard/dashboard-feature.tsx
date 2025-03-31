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
    "4DRzs2m9U6JnkpnFHAGjv6vCytpZz5x4AmbUC2bPEst4BxMmGhcC9kzKUq7bsRyv8jfPGjDHnBo5dYBbr7n4dxp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RnUKiMXc6187N5JZJs2oBkYy7EdEr1XrSceAmrg7prWioqK4rqDRhor8CgeivAb6UNAZLacUV6Y6cEfYxPU7vEL",
  "key1": "3v4iFRsBTjf3NBeUFbzSVhp9hT4bkNLbVHdwjNSXE9pbMWQygSkLh6yWNtGrsNWyF4tEQN9z9yhb6Np6wCy97Hch",
  "key2": "24RaD4uyLuEwTideZxY2KfYebW1fJJD9m5NMP6CTnoe1KASuJLdTxMj6kEoiZb1V3J33R2verdLVy1GGoLR4NJ2s",
  "key3": "67jJvKnXzSjPSAVi2JDewURGhEvqAeqYHcfC8UQspfeRfoZ8huDvhFQ5awHCGBXUXEEWVbqmJRzZPs9nuB8nVPMF",
  "key4": "3dyMPncocpkoyWBd7R7sKoh2P4B89XVKXGTpxHuUx6EaYyXdEpnmqrs3e4iTjdmZqD9M4zTXNQrG8guzcpf2hffT",
  "key5": "4ZisdgdgQFsDfy3U6eAMU2Qnc7B3PMsqja4s7xaVxCQVQBqFDK9o7dGhUtHDx8ZELWFCLdV7nMCR84MVEJsxGRxG",
  "key6": "kvx4bHwCzXcEgY97WkahnxyhARdHbTg4WiA72atKEtQkXZurL1ddPLBvCyuzka8efunpNUS3kwFA7J1QA9Bbue7",
  "key7": "4M9DeCEK5ek56FUFffk8mjvjPrpiyZPWY64SqDH4CN9aWDTx3oXGmpUpuAXgdzQBiqPxiitpedgNf6rJVfmJqbSv",
  "key8": "42wdV9VacpAYAyHSXzjpjJDye2xuvLYGPwTKHAyS331AmzrGNE8NUQnJn3AjfjkZ87g2XPFCaQ5883VpqYfRBq9X",
  "key9": "5MnDHtEULnCE4YWzwhgRTEUvAkDhGoUjR1XZoeHwNUZV4Xd39buWoFhddAiX2uUti8bZVVMXNQ6rMoHCE1CATVpX",
  "key10": "WdRRWw6vGjp1FhCk3oK4xSXLM1D8qRn3cMCkgwT64Q5x7An3sqE25RQHKAE8tqEYzry7CWfdxHadoSYbEHTjoc3",
  "key11": "U9k9UWB3eC9EGBiw7VgSc2CiQUb3uNPMW1y9bzhW748e9d8vgDLBJbxx6n4mwEafspzvxJcR5prChrdReHN97Vb",
  "key12": "dkPrHLinLxGAwSrj5YfokaPRKzvxxSpQPowZkqbWGacu1ytwb3vbwD3sMyEPuLJc7RMyahKW1vbxyMqzfyn8osG",
  "key13": "2oY4SbdzpPQP9hnkJ8rRgFwf5r1f7sgjwgNv4qYmBdnZkGJcRY9A9TZfVU26ADm7NGx4v7rsTb6J9DkFvh9BJ1Cf",
  "key14": "2j1E5bRpkBDWVSesfWvSic3ngV3iALn6WMJYNcU5NSM4rSho1qA32WoVGoMeCB9vrNZotpvYJengWKtmmBFbrVqK",
  "key15": "4GSEqwqutNdBdKGzFR1TnFP2sWGm6qfzUCD4JcB3wqgh5EaFpMgrUwUt1j1vBvfPbW4kZUk7WDh2p1QKrzkrs85A",
  "key16": "5FEKWZsJnn9hZKzJV7aRLPq1DJ1VKWcrB8VNJrFmDkX2VUULitigXtA9Pxv6i2UzuHHaHywKf7aJQfYt9GaLydWD",
  "key17": "Nixn9UFK7Ntn5Q9D1oFYk3RNjgYKNW1iBZupefH4QbtByZqcNpDmcpt7hxabgD7L7jjtFKK4fxMXHRJiSRJX8HW",
  "key18": "4YSkqt7iKJ5KDKZSbURJ2ZtBo3aMpuek9qpsJVZnsRDZTnRuqYU9LwZFWb8VKvbLjseq4mBuVcVTy8xxhFdUdEnr",
  "key19": "2zf5r1QW5jV5A4BVpFA2ArFvkLHXPBo4yS1bdXpaPzSCuVm93dnmp1wT4zEGss6oemKErPN5MRXbUZF3w8WQ4PMJ",
  "key20": "3113eU4YoTzoCfgPs3ukxZRNY19TwxmhftzicVGoDhgA1hY6ARX1ZSPEsyKJRRxpfoNxBy4X2b9QZJQJMaQ2YYhp",
  "key21": "wwY1LvREhP8r3LiopLQQEneAqvLdmCPa1ieEoH55ekGVXDMDMXBfEKmMdZoZH3xKmmfy5zd7m7hUH7y2mDKuLBN",
  "key22": "2xMyPh6vBwYPTLJ44r31wM25bAPomA5Bk8j9o93YXn9cPisZYTVRogT4F7Euyutbuem89mzBHpvmqA7UPQ6TUVV4",
  "key23": "CAdqLr16xmLMwB2t6z4D2dHEM2hbdE3b67Vz7Z6TU3c8dcDfMTekxWLmudcoV5XFzdLBDoEM6pM6fiKTb9oukcd",
  "key24": "2JXob8JKjn7agj8BTqYdQ6WCJTYMj1nNM9rCJWSNE8whz3YbDBWjMh6UJYBszMk1PjU1BMJSEYSpcxaJeEX5hDVq",
  "key25": "5ougcqLhxPwaXU9R4nkZbWrge5ZeRhcxK7ttJHqCko6amtex6vzsTZvzAqHB9zmjt43H8YdhjXEXDG8emFpU3DBu",
  "key26": "51c3vds7gSWPKhiFjeRDbeBA1amEq6uurRpYps561GNvXEYBLnPSH4cnrowZkFaHd6km3Nx1Bqnss1g8QaQtaMgk"
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
