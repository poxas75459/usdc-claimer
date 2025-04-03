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
    "366R4HJ94fgPCg5kX5aCJBsnPSwRzFH9iT7V3MhXyw3PcUEWmdmPyKD6w8FGGhBnDBRvuPFmj8HRSEA8fUpExmfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jtnRLJr91UFSdYADPdBowUvhsnfn7tfJjUXGEUp37HSEZfF1AkByyP9jKtZGGg826yhYXL8pvew5kMfmt3Tpyme",
  "key1": "2D3RP6AkcmuDVQgu2Nje43dfAQM6iQisa3SP27HKonUrCxUqAqy7ipRqUUzaAVdm1qUTqciZsSMQKaD3pyqV7Mwg",
  "key2": "5HmUER9rcZXStCzkD2CFbnpNnkXgwjuLZaWjzgEQkwjyen2MPawQ9vP5gc15xNhWt6GnpncbziAxCrVAp9Uz85Wm",
  "key3": "473T8LZppJ3RtmdtigQgB32hsFq8aJ7RqbCvWFyF8FRBmyUHeeM2s3qfJGuohwgcuxExwEDQVMrTkMnrSa6XfUHG",
  "key4": "c4S43V4qqhvcbbVgiXVvwjV93nJ5cPjadHLJ8fw9bFnwnmMKjUmN5JDE5Ab6Q4FRRq1KGxLDj7G7bWKUGKNX7sf",
  "key5": "5VHWNcFsLNEkG9mMFfaZyXdWe2uEDXzh79nY1undg1QTeKQofLcg54n5ZxeGP6384FMZtwiXkmdGGghNhgN4TGXg",
  "key6": "4em2kVL7Ra4ZtJkCskQhdpgmcPHcvFBMzG32RWiNdqTNLs8vR4M7HGziiGQMb24kiAbGcFPx4BxzwqMiuycrmaBS",
  "key7": "3CxAiwvQUDZY3JLPEjSEQcXPGBbtx1Kz367Lwk6Vg3ADdx7qvnU4v5SQgFmwcY8XLQXV2ErHPCSJiy3g89GQnzRy",
  "key8": "4L9jahAcLx5BVAsqsiwo9iCBkh9dcG2SJ2Gvvbuaq4KbRjHSau9STPVZN7C6QMKap6eucdHoL98TtHEphgVf3hhc",
  "key9": "5R2sZnFXvN4BEnmFrG4JQzZX2K47A942peJ6W8k4MZ18pRBjky1Y75byjovbkvd6UwuSEHr6VcGAuV54rPiRooYL",
  "key10": "4nmWz5dUQxq8Uts9M3RBHfPAcVEQnvoWis9aUNnfUjjQpxyPHwYiszkFhvjuboCxHEVZr4StuzXYDFsxojqrnPo1",
  "key11": "5gp4yaUAV7cae6cMqXBhBuJucovQasw414ZuoxSYgDVNt2uBc3PTTikRqq9Md7cjLTBNEP68gTWWPqxERWT5Pqri",
  "key12": "2pHeNT5EtaYQiH4fByvWBhmukDhzjwBTGEqiu743HQCvey5ygBt5z38UeSBWZtq1AnLWPVZpzjE1hqqAYuRXWhxg",
  "key13": "2nq9jWxL9eBK7Lm99TZBRHRs5gR56PBp4C5uG7Etkmfq5iy5yM4mnHG5NJyqmATD4XJCn9moXFyqLFNbGG73krQk",
  "key14": "62QTCTvrVh4e8LTKvigQwqoVQy8if6jD5QQ3WNoPXPEDdk8wcspxcAzAthWxchDnY9WdCivWxQhCjEdNggt4ge1p",
  "key15": "4LCMVC4tSgapaWDp4VnHEwXojLYuYZ4AjE5uPH2t239oisos4HhT7Zt1y4jjanVNLXhrKZaR719L7Cpqm81mjkrq",
  "key16": "5yGsvXkFpiRmJ9y7F3Uzg1CmwXntGojzCFYnVJGBss2ANrTThLeo1BRLdFLXG1oKFVF6KbJ3SjFosqPpBU1Ev86X",
  "key17": "4c2diKSDBnwNNBTCiViUi413uwHjUTbCTBV48Qp2yACvpPvvApLPF21sZdbnWBxvR7dp4XBjUFcdfjorfVhMHfQ6",
  "key18": "3iWYFPgK7RGn61MQEJhV1asMG3Z8P9D1UrWV5f4YZ3rDi7z3sAQTCKU4MCDVmdkDW19Fia8GtQR9ZU72gdPfUwa2",
  "key19": "4Qu5SMCRnrjtMvayKdpxiqTuCQq1FqLobpeSf4M44yUg63e2B9Aq8EHxP9Bgwk5feGeH5Qr35GSLqwM1nvFqdVVS",
  "key20": "3fvxMRguXP8h1jNSngjEgvjLpusHLgNAJ1x34qhbETmDGY8wGyMTxBxQHX1uC8HkBVtAoG4CuzzZPdK8bu1B6Pi1",
  "key21": "51qKVuMF4cg21xMqmVosMgHPHouh8ZtfqB9tLaMVqUqb75vV89HZxCqFNRy7KXPZdf41RdGoJ5eDoVksQ8rSEfTy",
  "key22": "4GYsCr9wusS22Wn83k5rxw4d5Eqr45d1aNa6YyEX9zzcYCYCDJ79adVGGNGV9sH1VCibcWoJkbCHtQ4DiBrK6fML",
  "key23": "aN6pCzEqDJ8R8Wm5E3ijWhonzJsxvTLY4gchR2ZLNvL1LY29ksrSrhnTtTDW7uqrtEVx266hFfzHWw9DGrAAP7h",
  "key24": "4MU3pMXf1EzmkQDjjXyr1kvRLURqv3FUR8E3ukJgBcqibbQtQR7mP1yRmpLyg5UrvJ7xZx2WTSuwnz9R2YfJnXg6",
  "key25": "zoVB4hEnPe2nVNRnHKHy5B6QKqLvWGbamogZqVMq4BCP2rTQ4EruxkVE2zApY1CC1jkARFopCouPqSRc5yJhNzL",
  "key26": "3WUcT2iHEmGy7FyR9gzXJ4ETpB7nUdDsDN6zwwURjgNa9X2pWS4vBMjuZompVKFoHJpkM22e9tYQTaXvBSb1t1eU",
  "key27": "2x5Gm1HnfBQoeLKX5XfuCeGxLo31onCAVhoS2CfmTVPHaa6RaoDiRMfupbwX6HzG7jcur4ZAyPJW4ncygYvsuPza",
  "key28": "2JnRPCg9ctR4Z7rJgK5QvCkTqNAGrpGpmDJAYWLAr72qzFeYNqDC1K29QtUbRvuhP17GaRfs2Ff15CLRcn7vcQVf",
  "key29": "fKu9peoT6Yq83Ty6gpugrup7qTYhVdD2azezzd8hMkaKJc8vpcu3VS7ZMhPD2Atk1MQQ9UV9frWFV35zahoVb3p",
  "key30": "8uTbdAtktBr3iJuUZRpQZbNiB1fnJVrpyhZZmGw41AsHyGiGL6abAPLtkFo8MdsSCyVvcAwuJWvN8jYEFuJPpvK"
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
