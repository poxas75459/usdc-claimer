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
    "23DCraLShd5CgphJtwUtDMTkUKSAMhJckuwDqp2ZMydr2vUC5PJCyUnFHoiM4yz3BoPzb7PDRJjXMU7R5NzMAKsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hb9uS3svf9xHJdCSgakQhTTfZVuxM7sHBZvDYDz4NJ41CQnxvXN7T4n8cHtK3N7QpMgf5EW2NY7H9cVNQS1x1sB",
  "key1": "4YJsjS3z5k87wJCRodauGJCD7mYDX8qFK95dD1quJbi9E4REx6uo7hJLvk1xzVGqY1xcAuTt5jkmDXMoYingMx1C",
  "key2": "64phhNjHsevMmqFK56otbqxFteoddRUsekHi56gwNU1hR5vtnkJzBwbXqsXvgDdXz4uBHC9UaDVD7m7QU8ddfCbb",
  "key3": "4pPXpCiEJJxEXJXi2gGTsKEcFQ5EYCurpfacgXPGRVpYVyPWLe44unpDQ8c5pfQDphGU4pNWXe1soQxgEpCrqjWz",
  "key4": "29aEJ66wTXK78AxsHinQXwzYcvBrMLgDgLHmSz4EaSTtVsuAxnFjJLZ24b1HCTdXsvGZmnfjgkba6GG3Nken4HBz",
  "key5": "44m3cpFoXGCzGBzTcE3UfYkhUVojSwm9wEu7ErfmNmYA3sYDpg8JErekeE67eTGPV3SHMtdPvuGR5Qcz7LCFmroC",
  "key6": "4kfJgrc4zEg1G1gdBA8kXmmzWiEKhJQDNUFTmW7PA782bUmiG5tYh4APj9XixXftggBULZekXr474EmMeDeRoYjn",
  "key7": "pEN7WQ6hJ3epvn79gdAccKodJVadS5cu3m2eAmQ1tkpA463znGyBDVRLUmgMrEaM6AMqiPsjC7cbdCToGUGLcsH",
  "key8": "4XhEyHwNYPp4zpcfP9bpH7iEasXgWof9pm3CEHZ1v6eKspHL4q9yQSRQBcwyfm6RMDfrGpNig5LEcgDjJdzZd766",
  "key9": "4uYxS7x2gd5j2t1uxCjv6fZvfLgVmpQhL6e79ZB8dMvjstz1dzHdXhTHWpDrto2qRdstkWmRHLmf8d4PUeiXikRx",
  "key10": "UcbRjj9bKse44fiwKnTt9SMqQvazNy8zwVDyNyxWGMmLDZ5hPQ3XtFAftCttqxeLivmu6FYgCzX1nAcMgj1GvC3",
  "key11": "vuWWu4CQC1got5ucwz9vuMyj5yqfmKmEpMkZT53SXRYiDnXMZrvf7ShWtyjEcphe2T5DSh96PRF2BSRnAd2tHtk",
  "key12": "5FA3PfvqK4r846vWQcMedmz7kbaMxPAtMR2myiGveXLnoX4fbtMPVszuPYVsn9yurbjJHRSgaEbwhJztvNNuMiFY",
  "key13": "fyke9u44WYNEPkqEtjwCyscQkXetKYSxNcUuA4xvV7j1xJYUqK3vXphrLddZ5WTegPYhQka4EsBp2wap1ffzg9a",
  "key14": "U6DiuZ4DWHJxXW7nK8Pb9Jz7zWH3MAppXvP7yUNAPeosXmoQwChf474P4P8vEgND5TW9j2Nfysukf1EMWseKUKJ",
  "key15": "2Z5LSkZmWoWZFbv79MKudxR8LczfSVMtKRbboYmh9jtF3d1raTUsQ22CvK5Ys5vCs3cgRAxPb5BczFzs7TcPWuAD",
  "key16": "4Fm8WRM9mHqRwHEeHaYxF9eeEXdzoxsXbiUmEHzg9x4P9uAvagccfuJtjYjzsgPaGdroZWVQiJJVwtCvpXWWk8gW",
  "key17": "2FJbL44TDUep9jRHbkQWyrqeoBZcQjQSsxoCF2k5BYbw12hmie5LZSV4FWHHBBSko3YPdYN94MzWARtxG3oGPppk",
  "key18": "2m6KjtSiXEAATMqLUL1dmKo8KKDv1GcQNdnegxirkms4arNHQJCmbboZctUdHwwQ8Bo1Nv79oGANTY2J8twizi3F",
  "key19": "5LASaoT4Y6RSNGkqqzF25w7LrKf7p2QcX1Zgjfj7gQUx8G4kzKnr1DZb4kr23ZSiyPChYiY5jkjf2dqGCbX68dxz",
  "key20": "3tV2fdwPc4KWgsCDWmUprgRWWJ1h4xFuqXmRn19VBuxf5JXvPUw9JJc8rJ7SWK9Afixyf4Lw6JCCt3JTVWKf3Xj6",
  "key21": "ok2LGVU54VChzaGvNUaaGCbHxXgjFEHWX5xx8r6e2Gb8WsYCc9kYGVxn6BybEpB6WAoXNtoqdgpoLAWAQTj2QJ1",
  "key22": "SNgBjd5iNYGQsLHdeCg9m68UPnRsW9JJvT1xGzyQ7adZPDBH9nhBQ8yyejNvSQxa8FqvFcA3CahPBs76PJqtHhZ",
  "key23": "Kbiqrq8GHq8nDR2Yo76aHwdXWyC4W6deLdNSeYg8EJh9Vh4XicWcc9bobab4jfv2N2VK1CFrcL69MUnWQaq67cb",
  "key24": "2zBEh8UEjuyu4jczniwd3cikCCEfC9vQdJ1M3p8fmPA5cPn1EFMcxqxharHTzdSWcJXd3EnKs2Erk4NnbUY5tpUd",
  "key25": "2pZxaofBYhyqwNhmoAJ6jDxhb9gA7YTnW2JuGysJsgGGgrQRsWAoPAWdgm3paZSvS5dMDtAyx7HY1Ynu2DQtyHTq",
  "key26": "qxNM9FTa2haeJyLcnLUd8qCVSPGyHC2JSjDNxXMdmFVuY2sRxkH7i5UKZV1rnvisLLwJvtQ5Tm21HnNYxwxkunP",
  "key27": "4TEcuSNvwLuBRjZrNmD7tgc9VUGuJtK4fv3itTQHMsPzEVkkUKbYRYKLoHMiGfNiBMBuTvUJw3FsZEanvP8H11B9",
  "key28": "3tMfLq6EFzx7nukUdsFnRD5ZyHUuJuTQMz9UwGNnSGQAhzUhWrFztspy6pj96qTKgvHX8urASsU1fDMjUf7WMjUa",
  "key29": "3civXAbZqpLcnGD9V4atxFaWSG75KgPmRM9wxVkvXbB4fXugWmcuUbTS4tDQLjLM2sy6qcH2jVNKQvsWx9kBVJ3G",
  "key30": "2xUfMVRV4GBudr6hyiKbt59K5Ar6gh2Jc65vKeGbCqPACXVmXpDUTxEvL4P5bm2i5FbFd5zkpZ3zXcmfrkKhTk81"
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
