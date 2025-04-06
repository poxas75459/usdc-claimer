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
    "4btWpWRPHyExA73a5wsJBUfjdPtZ75jXMoUTGnuy1vvrRcqMLDTP81T2k9fecyHwP4PGSWzNUo9LQDGLqark9cBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36swDymivqwkWS9VvhHqtgwtyFdPMZ5KvvdtNyRcW3EFDtYxmxy2Tbiza9wwKFWzah3e7n1BmAvzB8d3TfhzwyUH",
  "key1": "5eV2xd4AFu4EzTHW9XLx7cTyqwHkk7eKZoRDzS9uENianAMwgZosw2VUpLor7QjZToyhveXH6fsHn2NKzxwCbYMM",
  "key2": "4pk9HqutkXD8Y7EUmuXEnvjxam9vBqMEuKSE3axhM7MgKqX1c5uYgdBEj5Q7eAGj5x2wwtMX2PU8cPLX1j2zBVje",
  "key3": "5sDjHihqrnCAmZoAjTAP8XZrsYwtXkCrZCQUcG6mqTeSHmp6Q4sVd7o7nf5FMyNqko8vM5Mp6U5KuyxPSy7rp7de",
  "key4": "3cdJNiRyKxLyh3xDa81L2hQka31Xe5BmtCtYJ5kPewV2WPvcSSKFBvCCaJPrZHPgD42qQYbiziX4CzeQLWuAcZZZ",
  "key5": "2kgUR1kcWGj5zBgp3eCAEYCZX8VmxDPMYBbBfBsioAGnjr6eXHcQLwSDnDpEsomUf7GALAXYZJkzbCJDcyFGJ2Sj",
  "key6": "4G1zwHWLkhCy5RyQ9myWhs62Uh63JCKmmBVGsTAxbEZoR82cgtdLknyBqSLoVWb7DByFnBvXdRHMeeXyEpwhiGyh",
  "key7": "26huwjU2M3Pk9Ya2bkNGR63rWBiNaig3qzR681PtNnoVZhMiEM3EwxSE68HX3twj39RrcHJEneA13itsbbeLemNB",
  "key8": "j6rCrJvGMrwhh2egEbrwdongepH6VoJsqwxrByWBfQVshHrKyQBkeaB1Jk526tyXunCJA7mxA7Re5Dfmi3WA1Mk",
  "key9": "2ZYGEYfwabLBTrcY9CdtnpWiqXXUzjvvSejGk2iJf2hnWDvnNknAQKPgmTEsDr4bpkctdHT7rCWZ9s8Z4qcQJQSQ",
  "key10": "rqz1Zz3eXm18BbfXFFYYc9oUNdDqKmmTNntTtXXc569THdkduU6EaqH4weZCNc4uh6DeDNkcEXH4bLdKCNiagqD",
  "key11": "47kzpLzgodmUUQTr67BfvSJJRC4Qpg3MumuJWnimpbS4vxnVREYaLMDC6TvdKk5cZLuYPkzwWUp4qif7RGHKht4E",
  "key12": "5Lsk3fzyE75ZMsZnjxxCdF7kBEnABjYYJdS8SNtS43YBw9ZtaSFcFGFcijFDeruAbQVLZ449CnoyMXxjy9auTerg",
  "key13": "2SNTSd6RdggMf7W6MRWYv5nBLhvssmcnUPmSdBAdrzQwxHCrNS5Qkp1cMBUD7ZasUFZpy3UVeybJhgdkopWeSyR1",
  "key14": "5XvetroFFzwaActqdETPvNppDx9xsvXrftQQW6auCPivLexzyga6WooGBAu4bs3zKWr5cCYttsrzMUJ6fe2rMpMn",
  "key15": "2kZNXLd1KdVcEXHYGyKEfw5PkT39zcjYKa7PiM1zn7z13N5Goid1yVSFdpur4zoaVtRjWyU56UPSMKE5U7F27RCb",
  "key16": "5PZF81DZphLJAw6iQP3fSDe6BJxtLmHkq3qbaM7jzXpnTAWmZn1qJaT15nygyN7W468WYKeWnXhBXMctNibMhC8q",
  "key17": "3vGWhu3dQrJGkqVWRvULXGsEBF22j7qbGEwtRagiaSok9LcGi5THrgW7h25e8hTX6FtsZaLjuMJtNoCXuf5xZEf6",
  "key18": "4jxP25aK7JCVHEC6anNbMmrXrcszUWnGYvrWVwG8YCDte7EcwZByFjhoaNS2LU2vWTHRMvuY1osD1eQwukQao4iw",
  "key19": "52d1F3noR7GMrSj2YSQPXUeqnCnTTpnfDTtjK1JirztqrsDp9cE5Corjbm9f3wEgWGZEZLByQSWe8gCMCcoKn8RM",
  "key20": "2p1CHTDW8jtuYnV2ZyFE9JErL9xkjLQZR4RaH7TPqoCxPDvuifAN9NndygJvoF4vbNwspeMLDpftKbHZ4mG72GcD",
  "key21": "5RoNu7SidqAtVqT6yqUTCd2zbNtqHyBVuunTZTKmXCiSqXWSQTjmr3ASMB2s7RcCFPU5JuDJ2jWHhMk4uFJ3Tmoc",
  "key22": "5jTx3gEGXmEmQpPVzDgDhfRoZQsrQ2j5i5Fekct8x3VRwDK9DN6grfkBYZJ3eXyG5DawG83iYQD9b1K4JedskFfx",
  "key23": "Ys3rqhzSqUVkTYU7p97mG21qxV8oQc3TisjDdMeAQJKZzuL7LmvwnJyJSKHLxzt9s8WR7wzKbkTuh84oUuSmEZF",
  "key24": "2Tr6u5bgruCaJ5JycjcJs1H2HBJRQBZomAJwgiF8EBkZXoqJXHtW8fmjQB9DZUqLWB41GqyKoSkcyBkMUsVe9aiN",
  "key25": "2ZJnmzDdvK5hmevo6imd68LHshJwRoBpML21rXKZsF183D2GL9hA6nW5Ch6wwgg2ELCSiHwN59xdx2jmamSb7Jaf",
  "key26": "XNbvKjGpd2mjoYG9ztNppT7rPw1bPrUeTSXmdVHuat2R1gt3zhoqCfM7mDRiVmAxCCp9sSwYS9PiXJXbXWZdvrF",
  "key27": "7Wf785GMgwSSm92Y5vRwM3o6NTd4KDGdkdHnbME9W79D9QTkDtxcJxmNtw8BpbvJyQiF4zsaJBifhtMDZkcVZW6",
  "key28": "2NXK9TjURE1guestHM1i9jTqXAwMYm8VFQLoJUXQry4j53rxFbGfD9xD9L6v3Uh4UqksLZYNNjsBGacB6AdZawX8",
  "key29": "YQEBWptviXrg1hz15jeeta3HT7aBvm8RmxdjCnJTqpsWsGd8F2LuBMizQu6GRCFh6juRni1MoWjNmuAogbF1eDx",
  "key30": "aLxqxrQ4d3W83qJU6jWHRyn7NeSQoasLTXxU3Fyqm9ZRzn47zgYsD8Ajcq1Z3uEtbxiEBrouL2f4yfxWYSGYkqE",
  "key31": "3Dgkc6FGzcxWuRv34QRJ4jcnGgy7quE1xxoCSZvUtdQSdGMEq8FfCr7CHKChzfwLvamXwLXfJbMshupdhw9QsmCz",
  "key32": "5hxHNLVLQpCWqWa7c3X4hmfjduYFwTSubASiFHYkeA3dvvYeyBK1ozD9nNVKXGHTdvC1ouDrDZQAtar7uGgzXcd7",
  "key33": "5Tt2MCVvYu8trx22K3cNGhDyUQnjZS6u35mRxdC1G6qpj9DtFk7dZ7TeGVCqk8vBq5m8eN2kXE1gC1PvQLSEBiaT",
  "key34": "2f3TTghmQinN4hhpM2AtrNfb9hi1K1u4k6kWPNHpq1QBZPFSRB7NNveG9cceZ7vCZ6HMiM9CCP7mojqHxH5PEWNf",
  "key35": "5mhF8BF9GHPRr1xNxmPjChSQoD3KGv9SJPX2DsQuDNRQBApdEk3W3Tv6SawyB7aJA1UPV9uq2xiwYxw1cLbMUW1A",
  "key36": "5xnGsHGCicdixMZmrnibRNfYNajYrT1tHwPXBXsfv4CdF6JEryDfjwy7qgpeEbrgfc6af3EkvHS4WnbsU3v2hXRX",
  "key37": "2wA5YkL6BL9Bw7Go16stYYwYVkHCbhioWk3yw8Lhmz9jLrDjQBiBFispCAXMHu89RCWHoK48gQH5AmEmCUuLVtEq",
  "key38": "5AUTYEi14KyPjjAGFUGXLnaEa3yqxxBJTtvm7DngirCRdGqc36Yvd6m8Evw7Ycsk64tvUarZuxsirWVTztCL5SAS",
  "key39": "3LkhH6YpGx3KrFWgps1ZRZvBEdMdHYgbvuq6zSuKg9JShxdLzEu4oKJKxpmJmvdwSrfPDHfrwgTcMP4NAmV2Awu4",
  "key40": "5vJ3bs1oMpa4NdbUJtk53mGF1qxtkDJW6egMWQkcvq3MdSwCJ2P1JkMQrFic3GsiHJfS69XSqUt86CdNdtK1SiGm",
  "key41": "3qBSAQnbFCyMCtc71LzsdhPjLhcFGzd5VyaqXjNX3Hnw19KULCfbUcBiWbWLrViqYJycqvqqufihrGqbhFuQ7JBd"
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
