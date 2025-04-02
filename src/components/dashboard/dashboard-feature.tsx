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
    "pbkc9eBr9VUR3HgGAvfqj8njgYNZsD6dPhhbWq6S4tDvPz3UVdN8LWDrVMQNWtwoHoCySJ1hdwBHtMm6r1xCDgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTh1sydYVg6pyuMjwZnUo79Qto7VP2MW5XjjV1N1y3iLCNDnaWWvuNUgMPA6R5mvrcjzssd7kUiKMpvRKbZkrLe",
  "key1": "3GgCBgAA4wvXeGmstPHgrgjwLvKG3MvfXMJV6oK4oTjVeorWEVi4QVRgp7kgGx9RspL84VYqyGEe6Evur1byuYAh",
  "key2": "4dTC59o1HycZTU8nXiT8fDpUzCAcTMcVJ4jXVDkhWsvhmwRdtBKxumYyAU2Nqz9bBYTdLYXJjUPWgkWdNVerWENv",
  "key3": "5h7Pypw6GY3p8NgMzjoDyXdibHLW6GkdKKyPfxSHfv4CkJ9ww3m5osuk2xZiRn5rqntLKWxxGXDBwsT5mXiSzXgX",
  "key4": "yqFdwUg4fPY5WyBNwqb8WiArD9k2YVqZkrMU3CsThwD8Nfx9Rbv2MKWvDJRw6qZgcFWAEW3wnkqA6htWWnDi54Y",
  "key5": "3heXwAXDQdX1JXBdpWV33DusaYqcr1u2WVpHAs7rpvbQjnGj2uDQNGLNBCxMJjXZJgyK8FTY8AmARKmyYzLxnuMz",
  "key6": "2k4csy8bbeFQKJd8GBtew3cNQ585WjRC2emY6YKr7oqEyCq8NGubUcg3aeaUQDYrE6toRvfWaMcR5Ls8RkjPF8w2",
  "key7": "btoW1pQ13bHyeterYqYVabAr7QLBHiiUSfNoKbGDdJExW6XTJPUy51rVg466Jt8goJ4ZrxsefPkhzPX8moWpuNi",
  "key8": "he3avxDgtRPEiKU7ZdiEp11wgaxthYd7RpzCTeRjnhcGYgTmc88txRSfGhAzLJxCPFaFwyvYTHorXvYVsrGvgJT",
  "key9": "5bTrG3SGiNoUv98BPuuqGaForj1qWCAezByDBR5opr9XSbZqZrmRcRy1DFtMoBSXKkhZPTdKzhvAseQTiQQ6FVjy",
  "key10": "2D6iV191xfQwG11K1bLRFGmu45MiQfs3qdAc9UjiMJNmf5RWJfN3oxeN93zdJHh16JKX8k9LQYmrkZg33WbDtCk4",
  "key11": "3n6M6A7cKnXaVGtCjch6Xemam9D4epH2EuasYHSsdN5PZEyCX5dbUDcuRciXqQYhYy1RdvuQvpUhTgLvsNTrq4ox",
  "key12": "62PunXXdrzECWFZY3aMkRUhbsrhEH83AZX95GXgJGyK6BGK4zgHqUySHCPFKxzNoBcCfB3oUZjyDrS5d3dFTWswj",
  "key13": "2hfG6JCMxxdwGbk7TwmjprFWT6p2XP6ARr1pqVLDbY5tX3TJfsLNuVh1e9W2StQGgiQMP323BmZEhT3JmeYNtybu",
  "key14": "5gDVbEzQ24oUWuGVdownv75QwBkC3zstEsLv4diNe2hTzC2YsyyFWPVy6xKk9q28q1KdWW7yNLR1Seotwih6GVKr",
  "key15": "5DmRBR4uuPuPtDAomxZritbjvhwUPWtrrRy5m9DNkUBDYdJc8HeHcfKUxssXzm7CdZQCM6VfANLS5AAYxquvvTwL",
  "key16": "63Xn1nDvfvNbLYEuKmtFtCGXX8C2cpgAPc7qHfmLFKTFzZc1LqDFcoyFyRe6h5F7zFYVLqvdEkr3nAnD7gxcaJN8",
  "key17": "Cqgt7QgUv1uSwM9sLru9CjTcK3vfHur6MmjSjgMiQ7Pnsmta1cnQrZzQYvckmX6PkCdbcwkgNEdHfipWLJFwe2i",
  "key18": "46h5wzHGERhW7eRn4kWkmugknkP6RminoyMuTLyDEepEUe3LezoqhLbE1JR7vcVjGqEvUyU3NgGKNc1ZY5iwJnG5",
  "key19": "2UtZ5bGanFQ1ZwUqKFMXUANpmzck3zBrrxuJkXB4XxTi9977VquQcXFrVrxh1xEGAc29r1XZ5qoD8fgQsm4xADr5",
  "key20": "496T7fmm4uEhdzqwyo6fauYz6FEKw1Y2GCgjjwq2DymNsyzmeoJTkucwcEvE2JTHPDwfafUUzjkQ98zBVCFw9bgF",
  "key21": "2VmBVTpybwcUaqEw9td6LRDX4bJ48BJKXxT3HA3KGRGoSibs4zsecekAuo1HJR7pF9JF5b1bueQeyCtUayU7GFDh",
  "key22": "gVXSRNv8kGiDZVut5iSVEb5HZap2wgUKSzk1HivCrq6rrzbD9PQeyWwvdwRZL2f7rGoTT4332attVuCN55U9Psg",
  "key23": "4nJ3wQ8mRakiH7w4tT8Bzr4pf84n2GLrrDq4dEwzThA7ge3fWcrQofCxAse7c4xqnr5T1Cse5577e1ctWXT4RTrM",
  "key24": "XvUF331Gswrahs7TN4PeYyTp9Fgc9sprWezEr4PquwWxknJAGh3jPzw1BvG95wPhARJzmJke4HEVLcA7fCPVL7V",
  "key25": "Tj1ceWhE5wyL133AK2nAwDqskXUG4yDtXiSAec6Z2ZaZpVkbMnGvNtBV5wG1MnQ4cPAxX1439ZZh9dftBMeJeKb",
  "key26": "4P2HwgH811K5qADQ5h6jbLHcefuBdCeLt31PJYhbh6GHVRjU9Lse2kADW3EdMxwko4t4q7ueNHnvr8K7BFVZxU74"
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
