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
    "5SZkyx6F6tZfn5VxWUwPCSHG9BfHwsrdpXxrwCsoG1vtEGDMJc2AtHs5TxzScwbhRDggWPYSmVFGM8rQ1sMVp38w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PPnupJPSYYiPcYdYRh7k2jHr32PXsBd7edBNQDJMDguRKs7rGx1rWGRSUA6Jc7JwckGzdQBUs8ujGHmM6LRnTx",
  "key1": "2K8np65EtVWHTYbGo4B6gZSSVNg6cfLcjPHGhKneVHnQRhsLuDBQtejeft3GwQ5v7WXo1wr4GwVhk6vWuFs4uiFu",
  "key2": "4nXRzdXBShZsS5gV1c3ingG4onAqg9183KHiTuMLzYvSCVZzUUGFM3sjqS2fN3bsSAMgYxFnvXTtXsypCAHwJ1Du",
  "key3": "3Sb8y1kmDPJWWSHxh7gKmPUJTV3wzJVKwJuZy3SKL58Q2xdUuUe7RrjpddnEiRwsvQBHACivHDhjWntssEwouXAb",
  "key4": "5mNvfFsCjkBfM1tzi12HRjwo7QxarmP4GdqALUBKX9E8q9X8qpaXGJQ6bkG6bBCgUtfx9AZc1jcbyZarkGMxDoDy",
  "key5": "3nrQdK3E81jvAQ5CdvDEEM3W87vPvdTvT4ieRf8iwRvV1DEYjhN4gzXoad9uf1frC8NiBKTVLXxCis2AronF95S1",
  "key6": "5twTrwEWidC9EU3M6yKjVJ1xrGSen51nGyALLRkxu3D22o6X4xXmreHCtDgLkLxTqDyEp4VhYzpUzRBbZkqjwi2N",
  "key7": "3UeifUmbvDWJvEPt1pmAyVCJmKPAHNaeZ8MyYoGHLzosUtWfWiCTnpgeqrARhK1ovHt4RZasW2TaEWLMxaR6h5ts",
  "key8": "4sEgSVcQnvBYLLehiWPCjPoF4uLFXXyDUZHCES7GqjduWxMuY4ztHQbU659URvAB6k6Y8ypPBwN14SJuoi5iKiMs",
  "key9": "2j2K7RijJ5EanvLykM5do6TwS9gfPEy6GPuvywc4Jf4TFp5K1i6z5N2U1fWywxQv5BW8HRD2nAUqZk7MKzAU1u67",
  "key10": "57FYGfG5vwv8iKFtFpfBfWbPuPmocqbZYdXxjERQ34LfirgNNGkBfvsyyP4JMkEf4iPKwNgAPNRcipfVn1HQgdEX",
  "key11": "ckgGSiTRXEj4oqcM964BgALhDLoD1WGCuV6FTVQwfhCQLMM7N8a1eoDq4PEXshkoeb44xmpaa89QfWbmFHWEKoB",
  "key12": "3NdjnQbd6z6iq5gWWgMxis2GHcaVfjXitvh8KvUgk8bM6u69DKSuD9b8oFrpzSHmGw7YwLUsEj5ff7gmSSWZXbtP",
  "key13": "5rd5V3XZZhLCxrDsy6qCgDW1k9CSGVhAseV3ATQrQ3uyR3zXV4B1DrUPGswTg5id3riW2DpayTNzbV6tFo5QUaa1",
  "key14": "3nndTo9eZKGPbqmgBPVLuAgsMrkTELpu5cYCwtoTkYnpqq34ZJpMjWJJ5qzHQbLVzLsFvMCZ1KXVrmzqL1PX2YtU",
  "key15": "j831VpYzFXF1gDw69u3kaMC96mWmAjHjiLLnzwh2PmmtymcNko5NrKoTi7mEfpKRUm4VSsBzCg1r98cGhTXdFAB",
  "key16": "41t2qJpdNvxtKsEsNAdbQ2R1K2wTfayzbeCwUEY6GPwm1T43ybY9tKpqbT7H7AMuVkwzVNPX6dmggDUTbwBMCxJH",
  "key17": "4xMk45X2MiCHNSzjiS4r9GrZtVGd9NKuodM5JpbxA2KyAm25f4MvaxAjh5GTQnQSZGP1ra5E8qcYvYsK9frwMi1W",
  "key18": "63UeMrMHm58qpcE9XRE3MYpqX9jnH8oYNJQ1zhStBBnkp1UECdHUW1XGXn74sgWhjpb1AywA264d9txq3AwW6ciW",
  "key19": "2bm4Pg4YPXdDvjpbGNaYVrRXEmHnDuQdnGQYsEtzbv3GzY6ZhbzKTgwHTY4sN4xeMY7ezASzLVtUa1tC4kpph2qt",
  "key20": "2dhqbft8ToEFibwm5EHspZiLXNDvBRbTeSXHXAxzJm5wu9csRZjxHa4LjSL4UwdD6FLiFKnJYJsMYMaRR4woDFwG",
  "key21": "8h2U3QZUBex9LRx5Pzu8t25win1B3ktGm75KfBgPsLoZHDnEDYzGPf3i9gGU6K1p8WwAScivgWnXPSxx2gnNk7v",
  "key22": "5V94v5nk3YPYn2uEF9cSi8FuZgPTU7QWUgi4yFJTzczTapJdSeoquJnV72yrXYo8Y9AP9MRfr3KNg9HHrPTF3oP2",
  "key23": "3trcNJ8UA9fVQj6s2NZtW5z1JAotX1auqyK1dzAgnoLypF79B3teeX2h6dC99foAZVGz4Lzn2WQ3QkZee6uwpfMZ",
  "key24": "4dNtvsvULjyDqPdptAe6tLhNwsPjJC1dL8njSqMLxk3hpj3nZKfdX43YGq8dAZLBFushPoYZ1omoN7hcL5jRngXs",
  "key25": "2noxkX6cpnanT5VCD65xYcxThAUyXAkdqG4ZKrkG9gkDnP4UnnrExsDvootKyJcsmvmcpfxJxh6U8yJX3oMNb4TW",
  "key26": "4KY4eFCcM8skd2kCQK3cgdwyhSBvF3kcMDGZis3A6bhZ2CfUe84pT8kua6em2AcjC1HXqtknjbvF2G1VPumf3TcJ",
  "key27": "MrHjX9rQnkT6eMVkN2EeNfXm9eE7iygYHricQPkwX4r1UHcBoisUnf48hqrPzyPYtmzTXbfrRmXTpBWFqs5tXfE",
  "key28": "5xdECB57QhJfcSTP2w3kU1HLspnFijiZPkVQ23FTJUy89mYSvgDJY1iyxJnStVKuet9RN9bXLpsnGz57LPZJJgjJ",
  "key29": "XuHDrovTazgzFnpNhrgFN3rrKxwkfvv8w99vt3BgLnN4oV6gwBJMJntJSuLTRG7qj9Gwdog3Z1HpdKyXbvodte6",
  "key30": "5XiskMDYENpjDjWzGvx5Yc7CHnU8gLJgCXoxU2Ntg2U284moqbhNHUiWfPkLdZ63ei53brhTtmBwNXVNjTfVBncC",
  "key31": "2HhWexGynkUB3uhPy8XhuqWeWVsHh6kX9Ra5URaDbcXTVCEwepdXLdz35LeGJpN6x3DBCoAbeSWviiJt9gpsLtL2",
  "key32": "2nTmRhL79kXZqeWi1e274L7ChYo5GjBXykM7upa4TzvYTuoLEJ4q8VQHXaCNvtKK1TexHDYxuTUFJvZ5rDrv2Jaq",
  "key33": "313Wq7E6QzSfeAeo1ExUcDUVZKjCiVmSbboU7pRA5nEhKxFZ9m1sk3TToq3Vb5axNqXvi4LRRg7ANCmDdmcEZUmE",
  "key34": "5r81jGKWPgVrt57C1bJ8JW7C2YyezLcPaSL7kZhQ66PbnZYs7CH412XDh7PKpBYgy46FTjSdBPEvr4nQG9eyAN6t",
  "key35": "5LvzycFxz5JqppycVZXV1f58j7rVWTLqwjX73thBhTVKxLBs45VkVvoKYDpR4vaGnQbmP97MxWkbJYn1dHL7PvFB",
  "key36": "3YNeeCAUgQiWsiboY33dKusWRzsRKWWJnsh9bjhprx9VLBiBGihzkt7dKfQp9Tc6WuwpNAXQqdc7H61fDs1UKZfv",
  "key37": "2aJGjR9fFLSddRY4vdz9dAcsefxYRDPgw3KcY4141sT3RWDid8bun7yZcPdPct98bkv3AhSaX5xQtBfkULeQkyHJ",
  "key38": "4in5qyg8F3pykQYqzSoLcUGo3svEixf8EL8wiHKEd5pKKigeGLxfzDMrhzDbVbsj5ubU7zTzeB9jKg6yRaNm1ig5",
  "key39": "2jbBJzcYVq8y16Z9Ts3MKC4DEc42reaAN1MGwGzjP3SrU4o6if4MkLMHLk6vLaSwjHJVNconX2hZdvxh4oZcKK3z",
  "key40": "4Nq3MorwnYW5AmXdfjiLxPzTkVd1SnDM5As3oTdheFxtBvRuztzzGNFJiRPXpsqQEYTyjd3UdtGjJDok5aWd98KS",
  "key41": "5PbfBPCkow9tDBDjbTJop5XuabriP7Ws7mrAqCZKVSWUnB2vPDPbqnDrReEMHZPKLZx2v5ZpAFsUjLXzRJK3Skf5",
  "key42": "3nA2gMB8Q9BXXr5RyxJYDW1emFdpQbqhaQPuQ8nnnqnYqRKgTk7GGzDFdvfwJrqVhFF5U8xjvP3ELLmRi1Qfjg4N",
  "key43": "3ukWvXkS3yHhNsYncG8jgw9GffP3R3zskneXV65gs86afjQwbJyrA6GnfBZ2WywEvhCHE7iGFUdTC6VLAbYndMDX",
  "key44": "P4ToWdCtxepjaMthe4KzVUPdjTfQ2W2JwsBVRSS9jcjemCJRY9XiUeLL1L3GvYhESJHi9P5jFhnVyKbzu4eipwZ",
  "key45": "Gt55hES56niFfbg6QCsBjrbwCGMYaafT9FyUPzFbhVwshMw2NepPwGm1sFejcnJsbXVJS37Jjvi9gkuP8JaZQca"
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
