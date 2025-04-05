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
    "5WVNvetQzxJW8VHfWPMd1QpEbmBPrfn2196Aj5gv3dtBKA3MjSSfrHq8k5atqy3s5B77MCvbC614zYAypzj6qRWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vT1nANEMRkYfVfHwmHyc5aMdQTtoFxys4csNsPkHGtCkx48JYDqJrJ36cKbnTP2xUA321hY4N8DKtjePj1JVEgk",
  "key1": "3FLH5Gw6o7hZUgBGCbpJezkA5bsbGMc3ur2vwvtF7qh3HhBvonYPgaKNqnJ7cy6XBeNs6uvQjTWkYaXjsZGbRMuS",
  "key2": "5qmw5Qpf12Cd6KFeadD1GtUFyB52YUj1R4uDJVqwKgGVoVsr8koHxuNsQqiBvSkVeqVrcx1WsPb8iT5Pw9iBQBdP",
  "key3": "54FDTyk7ui4PTbx96ygnrpXByEYL6TrP4Jn3jyo7yvQoNENBFsvXB5mujbHQPNy5i4yXYCdibqsK3Q88qRtFZkTb",
  "key4": "4d85qQq1x3NoCZC992ZMQvx3mL1bqc2nFwg65Aup64cnX2WPbQQkDatk4LrWdERZRtxoFx9rGPTdtSykAm3Dyqdy",
  "key5": "2TFQnaXMURUxXNYwNcsMg6B7NNuKrUwcJBvNrya1S8kk91PBD7P9P3tDwUG7nJQPX89AZzjmtaSwaNSqa8cotrzj",
  "key6": "57dDq8cKGnnxYQvR4rwjZfs5NipTaTq9ZwsieHVEATGDT1Ze2U8ysPxa2Ja88X591VQ2vJn4xekg2NibK7uHTjYx",
  "key7": "2jVxDqcS1Dcrbp1SA6suNYkNBheNvyoPgR6t9odm248Q2ckhb4a7BHcLwsWRAE3mnBtu4Y2xfXfR1nfFzH3QsKWS",
  "key8": "3bAmYeVBVte8NBNrhX8CS598BQfk3BKnRRhSLvbPb3BzxQPRLBUKkF7Jui1EdzYibhcDT1PSMgj4dWA8wg3uZZnV",
  "key9": "EAQe9R3aW2iSJkRq8SPoZnR89F9wyznihLCU1Q2NtAhDYY3sB17zqbjJuihTCgwbYqUACP74U4sPNMAHPpwmHhe",
  "key10": "4CxFvT1EycPtMH9Znk2K5H2UM1xyRwU4iCYD6vShQrrGwYRiDw6igwmQW1jo2cX9DjcLYnmnbqQfRZALWdXDW3Us",
  "key11": "hbHvsBrm11PWGYtt94uoeH19bgHSyy982ney2TcmKpPqbUVUHWn9PaT6cCzpGmVjnRDL669gDDV9DGtPVCXQvGP",
  "key12": "3wuveqmoPUZGQug78ZS7KK9gzEFywp17ijYSGBZwAh8BAPfBKzUf2ADvBRKMntqNLv3dhCnTXSxf1j69fhv9NsiU",
  "key13": "3jvQhV9ZMgmUyrJNWML6Gxd6fCCQtgyTD4LKDGrxLMksNdorQufy8tkijUE5eBPV9yuwKAYx9n1WsnPBr7TTnpFe",
  "key14": "3ztybKAeG1dgocmLiB9Hb7JM2LT17fXzCMSGmYe6T8Vjbn3aXmmLtszJP45zxkGCGWvyxmvJuSipMLUFrhA2A3aR",
  "key15": "5pzh25Sh252NWim8X3DuZQCzuuxLfHbmT74qK3H8dojbh9VJVDpnarUQbpFHizNiMf5C5AcJdgcGnX5r8LEpgQJL",
  "key16": "JcTThmW6prYQAzTe4DdJ5Jo4SPimALm8a5kJCNwtAtatwjpX2ohyVXhAdgBnB8gxwsatxv5akvTKPoGToKeU4df",
  "key17": "2ocqMx15XbD88cyGoSVSbSWjGVg6bCU3vHUf6W9uZ6g4ShVBPC1DjzuXgz7WKXPhxcTpmGaCjzpJw38fatQQcb6y",
  "key18": "5ygGuJLoQJHz74ZHRV6EB9tgiqnCBfCuuKV9K7Y7CnPGJs54aDUahftyD8WC6kaYCahYpuVvUE1YfAudFiDxoqox",
  "key19": "t9buveEcTPMtFUrNTsgnRxqt1Mos1KHuMuuxi3CX2r2ZTpCCiKfoG7kZjTv87nB5RskPtEFYo9UTFgTjGNV2Fkb",
  "key20": "2CHQGfxJ3AcFtVbxoVQVThTY9kD92XGevX4UwELbiE715pZEXVaweWgcWuA1n9hMMqGbwqq9ubAB4WvEtwC7Dx89",
  "key21": "s9oGaQ21QgXmj41p4aRQuZMZUZkprfKSKos81ZhrUGQwMQuWT7QRnPc99AFSeHfgvUEN2yqwSXF73fKumLwHhZm",
  "key22": "53Y7BhVXqLcMje3m3yWcJPLTTEVmWAMBipccAKjoyqtJV5RDNGTGcZNAepNSbrytyPjph5gtpZ1o2r9gKac5cdMm",
  "key23": "2AfPA44EnYGPVZmsqB8LsizdH8xPbdSrUYeEeyyNvNB8EszhgLbzwJwKYoqDiRrr3Dugc8W4eFZ5CgdJ5HzrQSZF",
  "key24": "581Gw6f8dV7FU7ghBiw8ujSiPrJgLwwock4W9Nqw54rYq5trr17Xm7yCS11WwRCUfW3jcT1uTWnGuCmLELC2JKqY",
  "key25": "5NTXq2dsxvsY7UCyLbZgtPhKXR6ET1oPW81JmuDJth9kdJCe5ypjuG5iuahduKhRDFuGPmfbfMM63CC2Eg4432W8",
  "key26": "4ZyHdc4UPZuLsT9QqpN9btRm7JTFv8wcSRdsLumWKPTFKdwhwRBpSHVcRQcQJRJSWsEC4A8iTKKhNJsc66fLGDi4",
  "key27": "4VZqEA2w4drkMMgctkkbgwGZXzsP41Km9bp374A43kX76PP1wgPpQhdzrQfFTkkmudBEvJKJZJHwxgPeCqGoScQ5",
  "key28": "3Vf3jwksoPJaGBFvwifXHATwLZvyU1jwv9uedtGcAp8FmVbjsxRwhjVWmxZkVN2wjAFB5WgkpgLdnazQngDz5fKS",
  "key29": "3YxYHi2LqgePEARgiebtFUyf5PTX2Y8BuFx7E5prgmdqZqSaD8DcMgdBWv6swCdV6zHhYg9XYK2rkB1PNSTNQ7FA",
  "key30": "278c2voei3wipQCeQ46Zmexnjto5tpLSJ3YG9vXnscygM4PRU5ZTgVVVeYpVgT2JL9zdhp7p6zPJf8bVYdsDdb5F",
  "key31": "2mHRJLpMu7BUyimPpZwVbn9CA83qQM6hPBK4myapxw8xSuGDNGZf8cGoHnbkYrj7jc22itjCSk4HQCFCGRh388JH",
  "key32": "5VHq4ULyoLtnzVtrjxWiGzTZ1ji16cr5cNA7e1EYUcp79DYfdM5SixKmgmBcWf1uGEZ95RaZJ34TQ37EGPXi8hcS",
  "key33": "4Ry846otv4mMhs8KQRpkBArfKGrjkUFJpLfVV8tUC4KrM1kPubGYVw5Pk4vHe8suCFxjF8PqJTb8J4ZhZQYu84JU",
  "key34": "26yH6YG3GjQVdf4muGtgQKy9CegPjADXr3LN3Q7nv8WbhpseAnjEo1YWUrxLK8Fiswt96bxgZhq8BySGXsWHpr75",
  "key35": "4datXdSwzcq9mcto5x2DQRxAzf6Fgk4mbaSFKQYaECqVay1pQW8MvxH525QBkaStBKi6TiYLNVQ91iUUuW1dcxzs",
  "key36": "womu4LxjZVUiitFGFoW72XG3YN8EwWKvm9MMRjkwCfoH4gcA3ro4uRKQurqCUineuASG6vsyGtmsjpVNWN5Lok5",
  "key37": "4r84SosGqtr4P8QBc7DFoCiD8WRJuzbZZQiLdHdpzrKRy1SZ4DeR6BpAfWWTXvQ9QeSRrKjiUgU3cGLrye9Emrx2",
  "key38": "5DWJPkaj6yfcTof4kzD4atu2g5GijtTtnz8VfC72bDgMCmTVd6AH8xDCrN8uQiVHK43Yi7BGZsZ4cBRwJtWYMxLJ",
  "key39": "29zzLpKvQoCsoDGPRiFXNGttkCthp8AmHQB1EWKNWUBcgNe4sqigqY5GdTrHaMjEyWa3hjJm4hCG6bTdiAhrtKXg",
  "key40": "4kZfzsFdB9atgUVWeoX3po4QMCydcSUFeh3e6Fyc5boJgghEV74VJ6Wb7LsCaEmdUseHjRVdkkjwEgffQVYYwcAw",
  "key41": "3VHCZNgPqrRiFZzaaiZctMd7dwsRYvRftoBUK9MyxyFzpGynyfaa4A3GPwMWYgR9gB8wN2HbVxBx3gr9cRkWUnEG",
  "key42": "29sehfXKm6AUdSfEfvxJfqaEvnvU8zcJ3YUjwT7BWYLoJihV1pjJEKj39wk5AFgpfvUeg4VxZNFXTtNq2i196m8w",
  "key43": "2XFfXoh5wF4PdN7wotjwrFbMCiXZrqPbyzHER5hAG4KiVHeoH6vcV9SiqYRXwwiENeR9nKwX6RfTJqTAgfpyd7dk"
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
