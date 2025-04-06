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
    "3xVXn9YKJPaFShFk2apo9z7BTnBoS7v6FJk9UciSkfJ7a9658KsfBU3bbMEQt9UYhxGqdtdTg3h8iAaPdzp7gKQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNFFoq1qt4Kn7pV3xeMsgRRWR2kDWHEEk8SU4qiMVFyxWjLjggjHyWyYBchK9cudGikZWZTV57sZbsC82DzbKki",
  "key1": "4oRF1K1WLm63svZ5KWSDsbuZsAdgLgbsHrRyC6FDQG7n6frd7JRWGQ7EwvujyQyPfg5BEGNLZh84tz7TAbskXwAM",
  "key2": "4NuG6mQPwwC53WYnkNwr9S96aN6jHyizbYWeVSbizj86xU1zXR4N6ovL4Qy5gLZvb3aY7KEYks61SHt1NrGGW1Zk",
  "key3": "2cbPYUBEj1ByXCaXCye3rnuo9ynBVjTxyHRNn4gyquBwCLXknLNMtiY6oZma4LyFYTgMDr2UXEK7b27SoYscsuDG",
  "key4": "3AZXDoSwgr8EsUoZEsdESfUKZ39CZ5kxNnqWG4vtWQ4CYKYASu3Ao8kYVm2q2MBinRa4Y7UfTeVBJjpwbuWfQ9G2",
  "key5": "2p8eVjrWoUFpv7x3Pcgi5kCXUuYMom1rSfth59Q4SUJ3G2JvnR8YrqLFdLXzGSZhY3LJUjhvuWsgFdszUJoFp7wf",
  "key6": "2pzkdV91kAnmeW9p9e6ACmoJhdZNLNYJ83J2uJFKZK5GAgN8ABTDqCGkcjW9F1HqboPPdydnT569fxsr8v8zRzgE",
  "key7": "5TJt87cM9Nx1rk5F9GEaJ9tBMx1uDbtdxv6YdhuVjQifCkCeq4uyHpazBveNsPNrKX5SyD4SekYGn8q5cGX9jayQ",
  "key8": "3WRXQnJQ4LwQs9RczN4J7bqAFe7yqyyU8h4vvKF7JZGUo6knJB11Uv8WqGdjjWJwHThi1osZCsxveSe5DhajRDif",
  "key9": "5W9uZUa96CaU5MoU3ACy1Z4e8hMymsKsfeEF4g6MKwzvjU4Qd4vUBTfh2Q9iZMvVYGViDbN3zFt95n9M8J7a62Lb",
  "key10": "2cpwDnRNNn4zrbkgKxyWjq8ZVgCXQ8mxpBLFhNHBySa4KgUFpYT3RMUi4JGVy7rv2W5wk58BuaeeJ2kdgacUZMMz",
  "key11": "57R4S3RpXEDNKDLz97S114LpLMvb3g1qG9Jhq4S9Zr164owR3bn47yWGy12hjBF6sBpPyaZBxcS9Lzr2RjtJZN6C",
  "key12": "52cZG7fMYpju1Zyd7rdonRRas9voqXLfN4nftVWvEarC5mSToWtKepb9cKGDAjtMjGremDRyY7RRi7v2XJqcXrWL",
  "key13": "jcfdqna79RGkbbRZLvSAUA5xx6h2Jx9vTGddRh3ar5QBKTby83AZPKY2sosTaKZif8MZou8B7jKheAtcfN2FBG9",
  "key14": "2R7iCfwjgt9zg3dxn72gkJoXbrUAWkJAkok1EA2QcwvvP6DRXFvoVoMNrxNowCEPGCoqjcYZsh8ifqJhLaEXfVN4",
  "key15": "25i4EqmokJBo6wTp9qrqTRULFVdW4bz1z5cwMVNvxTd6N14njYiXB3iamVQdZR5KxjRZQNdCKMXVzb9AynEw4zGd",
  "key16": "4cT2LZ6t1Y4xL1fMZbWXaEYFRBjzKx32TChW5WUcNUYh7kHHzZuczhVgePsfwXRX1DRUPNxkPmf91F3kXdcHg5se",
  "key17": "2k1rJW3CQQsfEfwhP4RVheQmpezgtdinsVMRYxmVWDjKMm1yXSRQeeyERmDH1NwykgXLe4gu9gjL1EJnxAhWrWVB",
  "key18": "5QwBdWys5bP7TZTbtFySZmznK2Rjxih8ZyJSGC5LE2Fyrhtip8jTLVb7CAhMZvogFKrZwedgqGbsuCHmc29vpwd",
  "key19": "465PDw16P6smcMSiia8aCMoFPxA1rkW5M8zSTeYwZAsv987ri4qcKGSi2CBmgPwWxeYHw4Cy9Q9jyWv7KuzjQfmt",
  "key20": "5fUb74ZBu6gcSaDT5KtZZ64AZdeQMPRJhXC2kTSts6a78dPtb8YidrnEBWeeP2vFzeqQZQSAXZSXaYsRRykMedtt",
  "key21": "49g9i2WYVpgU1EgnHJWEJ6BMsx1m8vhq4ip86CSo9idJTm779HHrWETbfaTLwbKTnxE5NaWfw7Q7X8ey9zPM8VqN",
  "key22": "3xvBQ83vG4gTyThiLV5F4gU3JpXN63pCMXJ1raqmE9Bnfye4TmK9XewiQxcgb7BGDrdvrdyvA8dCSXLAvpf9SGac",
  "key23": "2YbDcYKrqpqv22PNkNPMiTC2oMwpqgGiez5uRH468Uv4E979ZJDJ8RK4JLvy1GAtCg3QD4QjhxcQZuQUDMGdLbKz",
  "key24": "3zcRY1y93bRmyXe2d7dqtT5hKE4k8e3BXiwV4eUsfJJPFuUZ83i4thLBrvQH6c2CHjKTnFVg3ibz5GFvqaEU2Ggi",
  "key25": "54Ur9vEfwqrDtAJvsTzdnvMPJVnWT4WqXGe3vYKfzXVP1EWxmzMTHtKXHViou4QbUYVEFfTdBukY33JUHxZgcYAb",
  "key26": "5LkqmWfdmTM4NA3qxxjBd28E1dGZXCF3wJzHbqP7421Gcjcw5wgrppQt3kxocDzUeMxZw2TTDDsUxgyHaFSsKZrN",
  "key27": "2p4qroSFw6Mut5ZD3zgJaMLb4D2rdwSQWmdpWxxhCyDhPTE6Le4NciA6fqnhXUgksDvpE1GEWLt9vMVeNdP8giUJ",
  "key28": "2oL5V9xq3Zzy8n8R8LAw8LftCxpGDWyiKH4YaR52yhh6PnrqGFZE3awzgGcWsStBVsf3sVWMCbBaRo5SEaVL798n",
  "key29": "rVtZrALRwM55wdUzPgxy2d7ojPNi92JjSA1J2TmdVC4RmCiQcoGxEtW5UubwG9UuEJVJCHv9AdZVsFg7P67zp7Q",
  "key30": "5BN5Z4rLusT387BZWXumLWTWUWn89qS2Emh4ujHZNyXmMieHnn9HXgMsA9Ktk3Acufr1wY2MJZWGFhgZFQnZ4KyQ"
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
