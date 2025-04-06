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
    "LQmTgTjdc4jAWUK2BbXqskctgJGzDgRZg9xyy6cRAF5bjSpULPDtqdui1HDTCchR3g8g6Sm5EvUZZD22Hdr834x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tytvqvpp8HQ7dgxpDCzCcu2pzHWeWztZQ3yE7bHGDR782wZk7P7iGhLGzkXJmLsLr7yV2fspB3N8TqmaPJzzx8G",
  "key1": "8ZvEwWz4UtMJE2zww9wdcXnQd6FViy6HU6GXbqaituoPKqyu5Wov1tXR714FZsRRphcLqfzbPXeugqw1jKhQit6",
  "key2": "3PeiK2mVXSZBA3QM9fWPvd9Vfkk3S3cr5fCN6A2Bg5rewdVrSu6UASmdB4812UEVFHV1DVGgbAevq8bzvMfaT63D",
  "key3": "3R22B2Sn7YHaHpdBRyTsahWBviAQTdcscM3Uca1Mj9sHwkvfnJB61Cr5ucF1N2GrCgqiBNwMMv2GcEkKLwkC9wU6",
  "key4": "2crwCJjztsdHneKwt7cxX1nkFdRu3uvfFgjGhGBPT4JrC1FGq2y3HATB11en3WDARZ51ZNSTpwHhuMfQ5PvAgMvT",
  "key5": "32TSQ2E9W59nFrm3z5b7vJHZMZBVcPuw8S3KggigqmAFpdZSicuALswsyahUnWTBAGVmEpiDLowzRGxZHE5LNdnZ",
  "key6": "5Ship4Z1tR3N7AUZFcSraJup4UVWER22Ro7Dsa2nKtw6deVU6zDK5yfUsSLUntwg8AwnUv49gnVihCUBt6hQPHVZ",
  "key7": "4aFnkuXo5nej6v98tUHhP3jWk64mZnSSKf98RWdBMax92ABXGLy8dBFbj9J2NgdkjpDG5s2gQe22B1CgGyp3y2Wd",
  "key8": "2dNRx6wUfPXJ3BgMRhD8KxozwN2pGd65PkLaQ3VPAueZuuU7Xs8DQUsF1E9Ghqev9UgdkftuCfx4fcNUpWJ5HMMP",
  "key9": "3bp88a6EZBi6qMmtbo9rByu1QAFUq8GeEho4mQQBfN5cUMEonP3zjjSVA6mC6Ye8RDmARzBzvWJ23eR5jsaMkHYT",
  "key10": "2q1CrxVjaCYH6SiTN9b25EaZZ8b9MJ39Baf5qPnpwCzhc3v1pYHkjpiNgWPuZVKqKHDj1RzhFCR1j5d19HeKqSp7",
  "key11": "3ZrmWfVFV6E9oNERKbrMVvo93moYL3fjURTm1rGGXB8QnNFQiqAPPyAQ1AGp4MitbG24kxbgq1Kcy3qzGbCfhBUS",
  "key12": "4TErZoNUu27MkeLCRmsPPQT3MduP57qbyGGpytArhh5RovYpFkiNZG8QL25Yr31cgH1g6Q7TK5UJzt21qCx1CKdM",
  "key13": "653amxQun9k969No2PqoTbDbvST2d45cxMgqouBBsJ46PQT84JWbthxN7CgYuWMEUjad4qzaBCL9VJtQcTYQzZUY",
  "key14": "4aJ6Phgmirq7G3znscDeno79FegrhkXbEz5XB1gRY8pgsPeXRJC2gh6aCU9B2HMdm8HvWFDdDFNod4zEEXbKjf1w",
  "key15": "4NnX7176BKSy5aXLS7DYWN8NEzcu5BKY13qMqVg5C8BfqN5XeuqWntHiFtyxxCuzHAW7kebTY8EJfPz2G19WER4S",
  "key16": "4XBKJjhcbeoB5kpgPaeNdG1Fz2CuzcqXESGGvpSGyf2Coim3wmSgUEEstFyH4zwW5gr3GR1FQKiCpxvGXkVBxAt7",
  "key17": "3w38VuQg96YTTAfEAN2MbCqwMC9R47DwyDCRfneFnXEAjrFssqZUNLfs5pCofJ8FXia38Nneunt24EkhQ7fnBZbs",
  "key18": "4sP8fkhUjTtKwzPwqhWdNPQPjVwNabBHFqh6fhTyuGS4YbexaMpgjqhNx4FM3N5NMmKz5eCo99Cen2ak4HNf9LuC",
  "key19": "PMvWfwbLBGAozoHvJ3VpVWNLmDecNT3ga45LxJCrKcwzPhsMgWo3SQNYRHekSPn7HaBZcfLhir4RYzaNqDDSBxD",
  "key20": "3gfnwQbt9sWiF6JyWViFYgdaFwTG1D5YkJHeXN13z2FEpXLsbj7s7v2FouTQeZUuS8mpSUU15sjjjZyTVYJxjsEE",
  "key21": "2CCngXJg9FhAEJ2um5scfZwsMAr5dTV9SqLqgrGSB61vvXGDJPei4w16hdMQVCWVTXtRmhbHw21NRqfq4LYwCRY5",
  "key22": "5A4LGF3xRLz6EQeA9vUbe7V1qiMCAK8bPVnmPP98wpCEfibKM1xetMzCVZjLNziAFJNPghDJtkDvMd3PViuUtzaj",
  "key23": "2qNb48Yd4ApfFMWbYZjqkEhbKABb5qd1VScfFAAEbeBuf2ahtdz16q47nihaopYizLA6Qbjy8iFP9tQ2uMa4uFUk",
  "key24": "481JaN1iUSyh5pxbRu5UxXCG8yLPCXsSiVRmdujQgDQxb3PpcRVpR3xfb2xZgtnDUtzJ68ySd73JcSmqYXCA8FnW",
  "key25": "2AbPEYU7W2r46dapJYXYVSL7Z3ddZdwaNT17HzqbomcYdVJ5z5z9T2twQzdoLu7YkmL5oioyQNF5H6mmmDTGRkLS",
  "key26": "4jdANdvxswSh8o8m2dTWmpRxxBkDJ9xLfNgLxrKtpoZjEPcbtd9EQuAa1UjyUhuSCdwhBom7bkvigCr1m9yrPDB",
  "key27": "2BpoDSjphYXv9yqMhTyefb5MkcWkjnWundz6M5gJtMJvgQq8kQzkaFUVjJaajuQvwTBLtvEvGjKSnHxvoy1GgqNh",
  "key28": "4aaXw6zVhZpNrHCnXEU2eeqDXcJz7rUUjeoXkvh9qkE5Uhu8c4xE6DmpzatEBUgf3MTbHr26XKipGVrjBnmG72kn",
  "key29": "279gbwt3ctP8wqErLDSP8yPzec8XXb2exHDv8gwUGuajvaNv1nUQESDcqfdNw23M2ENuvpvQQhorxxHwGaAUDBaF",
  "key30": "4X3iGpisZS6wGYCaVYVJRNaGKGPfraScbNhZgEpj17zbfS9LEZz5AqDdA1pa3uJeoCaLUreQLXdUh4MX2jHg3jtz",
  "key31": "3aFx2UD2hiM9iejTs6CgZ8RBTwNrXc7R6JtgueM8VLjJypZgs1SoKsvYUa2rEZN2rpt4vfDhpAezkvewuabMAya7",
  "key32": "5YmbDNTsXn8L36tS8vj971Aimf9h2GnSD9uUpRiwuvtNk7YqNqqVC74aJ3u6FbGBVHqQ2ywai3gJUvv7udX5ZzFA",
  "key33": "5k3k5kzMAGrkkPXF3BiaQauJhbxVKLu5DbVQtJSA2o7aYJTGCF2CU94Aqxg2s4NHSfVa1z5hJ6RNjLX2N3gtqPG1",
  "key34": "5gZzcXGr6hRTyem72quTBTXzkcumDdPaGPVpETBEjc98fDNXCysCGn4b61YWdiMoL3R41D3zPeVwrn3EzvRnRXz3",
  "key35": "WASZnmaVuCt6GSFnxuDVASX2VhMNA6dREi55Uga5F4sAKA5tKm4UhiN4v24px6RDgPqefH3iQyz9yYkt4LiQUfb",
  "key36": "5CKsiFwfzZS6Arg1KdduWfHS1wbZRfYsG9nnLcpDhGMc5iv5sTYFUv9dCCogUqFmNnigYTLnfiCyPfLHsZSVaeqe",
  "key37": "3ofX3nGUhS6Ew4CMDnJkWnb1UXHiH2rk1R2fZsKAn9gz1HzkiHh7QKY7wUHaeFxQFnp2KnzPwpSPyaXuDGuC6TAw",
  "key38": "2isTowf4TP4AxPDZQ2K6hBR4qQfMVdxT1FrhhpNVz9KESu9MVEPrKV76eD4BkCZZhHEsjuPjxhxFXiQMprsmH8HL",
  "key39": "3FCacuxbdPEYfhK4iQFTQ8J9Xe2BpgdxZvqGbFJctThwEFBjcVDbaK847Zkk4VuwcZ5rLq35FRLvPvGAtqZPaa7r",
  "key40": "3BGHiVrGEcMdx7vfPmPceSuYkc2SVxpbVDUczzt5sL8GNfQGhBZN6oHdHdoWWv9wgxkz7UZzavwfamrym275XQyG",
  "key41": "36P2dqNQbF9TrKS446qzjYLCW55i6XTNBaJvmiqjiWYwCkqnD3mTZut63ryHrpVZAFMWs9RAgP9XKMnMUqWfkroZ"
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
