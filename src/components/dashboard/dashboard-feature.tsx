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
    "2uSpfsN5tbTR1SsdwAY3JXc24m2QeBSqWQhQvWzb7iDUntHTuQaKZboHw4sbQMWhNpkLYHiB4re3HScXLHzvo3UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgSVVfXL4kFiGxMeGruooXU5vKtRhnT8zPKXnNfiGWFG712dgCeiYXNminHiF8LftaiYo8nc8ErfLgXq56WoKUQ",
  "key1": "3uzEnGqrxYrDsB8i6RQdKpRKtgRFTGvmFpZYehDqKZC1ASdgi2n6rU3SUoyeGFFtNtEi5sAXZX1WsDNLnzD9FYER",
  "key2": "2qjp5aA86bGnTrEmMroHPouN5tsQ4uJLLx55CgemwiCro8bQbSFobz4pnfY1c5ueEW77KG7Ftsf1zqQ1aCEWcija",
  "key3": "2AzEe1u8GyZLGUpf6g1PQL7mkhVTuWudQaGaYqLHM7pSBohTHhmxpqZGMM7CnhNQgScEAkYtja6E3eMKeuTALxvY",
  "key4": "3L8PoWCGWQ636ZNTB9TamSmGrztUUe29ikjpBTq4iWFrkp1jnPn8m8ydyhoMcNFCKWEzebJbPjTXHc7zRR4JNuKE",
  "key5": "2X2Z9MFRDb4jGUb8yyPYQokbt67j8k8P6B3nL1X4peCbtRWTRHxf8TRU6ssQoVoMy8Xf5nZWAKJKBd2ddMATou4b",
  "key6": "3rjhhA3bokZdA1RdmtD1gpjPcXwJHwCNhoaDo5L241Bt83EeActHxsWsREm8g4W3pYQr6xxpPp4HHw8WJthvJwKV",
  "key7": "4Y8rP1a4FCKadCqeo6ESauTPni1g8ECEaHUc36HbrcimdDWVqsZewZ2ArtSTLiht3wV6YPxTuhFbPCrVvrdCdcKo",
  "key8": "esDpUND7rWks9zvMstS39Tz1xGmUbo4k2sY7twNsuGuJPtQR7AzLiyBSATAFnBWERVqUBUJf2Dyf4HZnSgetiMD",
  "key9": "4zEAUMDywqm7LbqdEo4L5Zt9i6S5EXgziG1w5aLXLzAcb8wtZ3zvfXaGVQ6LcfYFqL5nMjm6VgS7oAsDskPBcQyV",
  "key10": "47PKUU2iThiaFNxVryUqAG1rPohsusCPT7K13goxwRTi4pEb7mKiy2uFrTm9DGrVnhukDdvUWxaLQK5Kjo5FK3qp",
  "key11": "2TtNZaMYkB9uuyRSwDU5EKkwesAafF9xx5qbgXPubWHuuXgwXtLgjE8LtjJfvuDBbYW5AqRtsKN8YzwQW7KqQH67",
  "key12": "3nZRGuNc1QD78hfuBfhdFSHLaRk3ASJexQw5Yuj5AJJaN9PpVr1Xk7uNWKWffHXtUP1yoqQRbVvWotLw4nZHidMd",
  "key13": "3wdHUECtsxsPk5aVEB82QpFb2wEEwTvy7cPaHRhmWvU5u6XnoJNnsiiPLVTV2p4xGCmUW5GREGhsG2MMUVUxEtJS",
  "key14": "4mdNgr35DgvqcryFkWQN4UL98mEHRWU5Kzu64DtmDuZkYGiHxUv4TyUSJnjhX8CVeoz7zcfLgAPWoR4Zzw8sqnCk",
  "key15": "4jyeAsuQEZxT6LRihaknDofycSSdESJF1SGod3PqXsQSVQMBS8HeGAc2tq659EZtPVvDDYHByp8AQeVLQSTWBzZs",
  "key16": "3Mx8MTx4mpTRSk3uEMNfCeeGCAXdtwhJijfESZe8DPeDwVh9LaXgUCtgYHe5VhF8eTnXHsfFQbeYvN727iZv5vYA",
  "key17": "2QqzkJ3xnrYQueHJerXeAEfeUmFKWr2V1uhbscdTrivXSF1dDKzjrZvTuiTMrQkQkyKyrMh63THnAxWH8vxiuF5h",
  "key18": "qHXPFWH8jTaKoGYitXMxyMZxAbzUwoaHHH4P1oDLuLB6AuRkea1gVJZmXe4NfJUmNhSSxMnYCT1dRiysgB1YWXJ",
  "key19": "66h8Z4XzF1ggTsutSCerDJjWbVVopGfDDFWWjFnuzQrDeeLYdgYSf4iBwrm2p6VC8VLqFqhXM9JZH299m2QbC3vH",
  "key20": "4S3GxPzZ5hUzKNxGBRgeDhBa4VPcUuUX39atViheomTu8Ab9ts9qhseFvr52JFFrHhuKDiuZgtR2pdFKiXN1K2fE",
  "key21": "4KRceCLmMfJf7VRYx287PPHvTZkVrbiC2rjH16qrrpgLPE84Dwvf616cjz3m7gz9CZWVdtokYN7nw4Bha5Ase78Y",
  "key22": "2kvmWV8CHSCW6JGZYYcms54kATraSyTAHdz2fnUi4b2MkMEEorWCUi2wggNjNJbP6K6XxU1v6mgQtjK461AA8hJx",
  "key23": "5EPtEUwSP4Js8FHEYUtNUswfyKFbJibuuGCVpVrF6aJ786XxEsAQVLiYhUbDQNFWfDd6RRJdVqpKSjP3JaWSo1X8",
  "key24": "WjhMHpmHsCkKCUgveG2Qqd5vR8AXZLSNMVa9NAmvWeJSJWggHesRJ4kUmc1v8bnJTHCsRht17iHrHYVFirgPgnR",
  "key25": "32YAmeEXpNuT9RKkYpyX4hXv4nKtKrqMD932ohWMnsmTaa3ehaeHTkH96nFjDZf8GKF6PejaNaBpJ4xdZcpxN23",
  "key26": "5NoGZx8XeDGFyHJ8KXKhvLWALRr8qgL31WSpcRtbfGKhpHw93NigwDN72wcaJXxK9bttHTAHFjNwfq59fRYNrJze"
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
