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
    "44sAF5wvutFe2dwE5SM9oRCTQ7ZEieBFyqbEJPfRg1f6WKic2HaDQCZkA6ZvCVH8W8otCj72EXtjrk4bqma8ME5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nirEQfRpYKdM8BSjLCrkLsuBFoDjRdDdzzvB1Ec9XiLP8cTQ6ytSxmPV3BdutzhGbMPcmHgDVHCx5hurYbogY4v",
  "key1": "3MsvndmqMxKFrsqcEf2ynokyvDRKvb8z4AKt8qZvxBWXJvpuZCjsw88vVCKDc5FeCP5s9NHPA2nBmXwHyKZFrgij",
  "key2": "36Jp7npESrTQJ6SxE8NGPQQ7tw8WZtrpYLkuw4REZcEKU4etAn2U4Do1bsPCqqRX5KFP8nx5n8FtDbmfb18eEuum",
  "key3": "4g2RhfgyHH7MVw3531muTdA3bzEtoMV56J4nT5kE8w8vNes2x5RQrhkaJJDBo6JDUyNNVtbfpbXJYZNDHZM5SCEt",
  "key4": "37exRhsdSKNVnrA4zz62TvM7e1FL1DKGzE2JEbccnwMwJfdzZVejmG8BDZMapHdeRyJqKV1tqA3C89oeq5iLYMVx",
  "key5": "4jPpkS2SbicR27DcSft1CvxbN6GLtgN3CkTgzJmkMsyny1WbLbSD5CRbTxWLiDvNT41DJt7Gu73Tf5fvXtUJ3gvy",
  "key6": "4858vFesEF3EmGP2W67L2gFxgVboe7yNGm8rFYDLwDRRHDCVXV6Qi5waapLXTrV5g7kvpXvdsB5PtFEEJKrTdgdF",
  "key7": "3PHc2mgiuPLmE9c1Dht9SbFDZnzD6nSLK574LMnXKH3uhKUXeV6TcHct4aZ5wbwMTmDRZgfzf3dr3MJihLcKiLM8",
  "key8": "2A1r1WpFF4ZSvnU6r7EbVnaA6PQUNwvuiGNJ54jMXu3msKFzJVcBzhFijRZCwgjuhmsTs5CvsLk7N8nhnjpXdgu1",
  "key9": "22xbaW3TnM5CQFKbLpqD3ZuzqAJGJ2VHevCxCLTC1VLLMTmiUt9oxceJ8r3iqrA9dK7VgFTUDrhScBP6V6yQBQgk",
  "key10": "LnH46WTcZCckz5pevRB5mZ1SNj4s7bbx8DzoSA1ZoZxS7jkCMKospTD7KW5td5N6qk1W26rQYatSgaqbai2jZtx",
  "key11": "4iyJ1bdzEQAjGcGoCs7YSn2xBcirqMB3bFnkYA9cqJkDpp7MMxruMhZE12bAJYt3eqf3vHW5WBqxmoYAnUhhjkoi",
  "key12": "3QWJD6wv3s7x5DaZA6ZzDzEc4woiCb8ihfqPCLkJYstazE4sy7FDL3pEfvNXZzzkMXdEAeheRaBrhQ7uPx82Peg",
  "key13": "4HZyk7QxFtKNfgxmb1ZbADTfSJ89J5Pwn3sXv7TUPxZ9rqM3uZ2MN61c1dS6w49KsQGv6ahBVdvPiXPirq5WeKce",
  "key14": "4ockx6AFnNDiMmLivWMZdgBknwQuSnGwn4JzsbEFGPWsjKMNy35njxR5i9MyeQ2zpb8XqkoDoerdJG6gvHfnuLix",
  "key15": "3UoZQDF4t3YmW6hgpzns57D4csKpPBemY4EcZuPV6PQoGDpZc8BVPu66zLVEYAkLDfYxcePhA3Wq8ef67cFLeUiv",
  "key16": "5zFEosrqCZSPM3kQ6GNbTErKtUeKeaib3mZB83pxf2cJhSBGFFPNVKJYdvppbhGBZfqFpJNsimxx55Rgqd2D9iZC",
  "key17": "3e49HbCeNVaS4eQAocTWN7jazqZpggeFwPBAEFYH2BxLRg6iFkhWjS5jeszW6DUewxkm4px5zueHG5fnR6ajzjMj",
  "key18": "2EEpZ1Mk4xJxjqp7FgcCgWCesiq4GKxhgjBys7KqxMsPjTNv2hSFre4psN4DKZWtYfkp3mtrYFnat6J3kfA7uAzb",
  "key19": "LEjK6VJjq77FXXL1kkneEErShgP61nHh7DwGhfM7e9rjnyzMEQjyFEJMWFC3nwVT1kGFCvqwtwXS4iHiyLt34Ac",
  "key20": "3fKNfLHkMXAhVBpmguGQow7ARj5sE7CVBZPtq38uEtPbkz6ayFAD38fs51nfn1RALZrDXx4GkjYSLca6YGEf2Y7b",
  "key21": "5YHMyAiXZPz5gHrreNGYLxtxqsAxhsjRpuCVuyD1bWrVvBM8DifHvpeWfbpWbRaaFH4QCH6d1s4hfp33UvYM9zLL",
  "key22": "4542HKmZAG652Y5aJNWbq8r7e7738HpLivQ6s2WRyxrQms7nxJTgWwBXQW2o5ctZ68hy6GW9mUWDHaPoMnQzZR56",
  "key23": "58vgvDAGr8Zfo3GDgUjNSSutXvhTA7YqVoW24V68hsDb28vqXjX7t4WNAWpRPeGNqbdqbinzMRYdgTTr7wCF1rEq",
  "key24": "5n39URruRt8f1TFnX4pwBZRW3bDNqWSEpgiJnruqeJBHjPo5qMZXpekxAiuF5xniPdgCJcdPgf6yrS1oWeESRX3G",
  "key25": "UAmbwX8sn7NZd3Pnc5bNiKLZmMsYcrEa6aDAbixYSc4CYcwUQ4d9TzRivsrkJWT9rpEZDohDDzGESqZZXXkrXAi",
  "key26": "2T7DGCdBAmXZbEDm5sRDXHxphrCerToJWS8uKYptXSh5mRUHAKKKHYQPRiXjYxWuZvtQX6rGyQKKXP4zs6ArLJ29",
  "key27": "25joomrcNboERjjb5bMkjbvqyZ1osXYKxnHaDDWJchCVmGwYnYAErrQ4hxV4jG1UzPJp3ubtc3vhBn6JoaJKndYQ",
  "key28": "498Zq147cV2CVj5R71xhpQB5W6D758gAQwMNtBkBS7RqVvQAHUMATQXWBw9iwZHiB1K98AK2J5uf94nESVm2GrWo",
  "key29": "5Qwz5HRBPDEuD8DwWRfM5nXREm9At5bhL1rC8r26YRLsfDaG7MsT77yG68rdxYsB41VhR8xQGeNrnvZBG4wAuynU",
  "key30": "3m19nvsaJipYiXNJeAxCQdCiMC7WQD6KE8Vov3G6jfjGjAQhB5Gp3czjN6LfjShaK2KLqFkv3SEigLAS8ZBSFzuZ",
  "key31": "3r6oTpz13x9zS25snbNk61wifhwfHsPy6Am8LjBS39V3bDHk5j5w33Rof8NkfZixwT7RNocvaaHjtUwvL2b7TRX6",
  "key32": "94aTiZmqAGYLxnpwmdCoRV28cn24sTTyBPDbo5RwjZ1P8uGBrKF4hzknv8Czfvp4nR2cymWvtTyCMXLTCRpRQcf"
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
