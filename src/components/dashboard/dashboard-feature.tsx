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
    "46guvva2XjUE9RPSXjM5FmJMp1SDPukmpZ16tpyUcyqVQYTHxhCtYfVwq5KRkkBhSDqqd8a1JW9YAzSwa1QKcTx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uckDsFU8HVYfjZpHAU7yo3kw1rTXjqPuKZYrnyu6MB17i3hogoR5dCFP6BwQtgDsycA4MAQZExFKku95B4wLXk6",
  "key1": "3TKxRNhCt4FMKgRUuJ7bXqqykKEEFM7Giv55eARG3nvxDZaWaRH7dD7B1JZwe3VADycqgQvVyRfM1M38jsgmxhsw",
  "key2": "4oF4pVXnNVhtR8swzzL9q2P3ez8knjVCLd4gvtoXZmWL5j1mQQDtjJbn1ththEiueFK8EG4YCXLmK4PvyAUVLu2r",
  "key3": "486JQ149pLYd4GX7U6ZFznLTCqjn3HgpJ3At6213g89qbdbtcv6K1xagPQuCwsPtnByUSzBwUxNwTCJtgc6b9Fsj",
  "key4": "5jQwBQWhDJwqtrxQxtZ4uWq8m4peXjTG7Q47crqDFrdYSA5E5kVgdfTh98Rze7mAqRJrMhRqe87V5qGtLT6iAAZp",
  "key5": "51KquM5ZJb6eRJ8QDpLTtoZd1wqMc3iKPmqrjidahv1BuVfLNPVtqSziG9mufALuv9jpgxVv4PXFEFM7mCzin5hh",
  "key6": "5827gizezqCPivip436NUeR3A1SpYcE6kzTEeWUJU2vhmd4aDByuUxpZPBmd8XQH1qfzbTCq1x9Gi8Wnf4k4BZtt",
  "key7": "3ZegRggR8TPoio4FHWsBVSxKqYAHAouz9EuVZfJ5Jx14iKdYhERLtxVSKHtHaWTJn8s1xtc71XygsD4TowTmLd9y",
  "key8": "536n82e4JAU3SH1qkBEejMgHXGFnE3aLD2zhC4CY3pVKGn17CkEEonc6CYbgqD4A7PiVAxjjE9yUtjuD922rfan7",
  "key9": "4ADcsRZA3sb83sjiDTCNBeo7JDS3d8TWKZ9fCotMSUVs46BnmB7PdXGzXdWKqUZkhqhm68j4vFTUUANTNY1UjJTq",
  "key10": "2rUaRyEyef8uXJH18SczM6FB27EBvNbnw1SqF2L39zNGpBPqi2jHfkWYMy79U22Eyf9mfeEcsXk8ohykbZURZofU",
  "key11": "4PNwMYYm8Prf4XgEb4x3rB3YeaYwEwNwsvt2hi8zgeffgJvsenXFL9ihCYUMVCYSztTcaHVPS1C58d3qqf3qCR5C",
  "key12": "5uQBuuVyMKTanJPdTHrH1t7DVodFKp4wtYLVtgrtJqX1cudpXZh24RPJXhn7LwsSSTLAjevkZk3LYYakYghp6so6",
  "key13": "5pNbDT6xvUu2yEiwLZHV6KKWYdgWDzTq7zgwUaGhWraavy54UQRfT9jgXWGmcSuTNFqsus6rFQ7xBW5Eb7ZfXNns",
  "key14": "672UNy5g5q39tEkjdkTab7qWESEtScNPbVEn4pNsd4zPbJuyi63Fk3cddNtd9rY2psLQZJgWaF5XU1unPHYCTnHB",
  "key15": "5f8BRTCaUYQGZRicuu7mCjeskYwJZSU9qag4zXSHrXtwg29ymsyiUJ11ij97itNUFpzvLvsLmKMEdw54NoumUXGC",
  "key16": "2pprCQLcyTuasH4dQ5id2DEFYaneUnzwcgo5fDhmEAmEUFJxVGXVjfYnptNWeJoyaFZ3pqhnwimr3jXCFCeXtGDB",
  "key17": "44TmvoaAXmA85NRa7ZKEbk5EpmLy3aUm6buxgXeke6jkVmhwLyprKMbrELTpyXtrnvqyRhVVQ8YhwApCzS7LzwTz",
  "key18": "2UrU7qTkPHGMoamWVEf6vZqA4DqhgcMdaxYaL3xPAjv5hLWsBoCv3ThpiG9vo4Rq7oMTiQ4P7GvZKa9rhKHQM7SW",
  "key19": "2S9w97go9PRW1W6Eq47R2JYxvGSebNpdZ4J6QBRbEn9c24QjdcSdmdW26x1tjr9u5jvqrw2jwsEjRywN31H1VgYY",
  "key20": "5UNH5huQC5Hf1aQQbo8c8WyB1AEwJqAW4P5cTrLm7GphFqj3ytoqnpF3AKuDvtZMyBrfFEkWsbvJ4b2unrQ9pMrv",
  "key21": "3AiXcvnLWUafa2CPVc6abbZ8rEmGqifRtafFZd4vzu1Q6s2sJMZdCMomeSJ9vxzoGJia6N5oKHZw5iEYfAsng5N6",
  "key22": "5uCuJ4ctADoq6fLiKsXLwVV19K8uRnomAAfFatuBVnQ3obYdDuf6wFUrZZqgH9wfgX3oZVSMF6jGjU6qVWm6tLao",
  "key23": "UGw4fuhBPEgowbmdCiB3ZyQeaqb9qGHpwJUUe7tz1gTvmAM8MoJrRWWS2eWaJKTLJ7VQjN6rUDUrvis9qzGYfXD",
  "key24": "51Zbwf6oPZmbrs6hSQhUHNm1ZXupmEZZYbiceT4X8XVetP1nnUrsYSU31dZtncLdrwsqsNFbJYLZWHikvHNcAPWR",
  "key25": "Zbniet5sXTxXAe22x2RTQzctunHvjSanxme1nfUjpKo44vTLK1HXPrcdCTf4dRdwF6df7Jffc4JgCWAoLvxRhqt",
  "key26": "3V1CwDeoEhbzhnnVMzysvfRuuEZUPB7sP4LmXrEQvfMLT1Dbddz5DNZAgJGq5Vb8APu3B8md73xsNN2678qXBL3b",
  "key27": "5y2ey9KU9QHNFHLAsQXgCJNGsSqGBFX2WhRkmXSqHeP7ww8jV3Jyfcae9mdUuPC4m44nnjELDXNC4TBtVKykGXjW",
  "key28": "5GqweQiW4gQGCNK4c9MeyzQUGah5CES7yCk7zdc8TJRTKv7gP7gh3qicTMbkmQzchWfwSZh1KUnjHHVXWMhV5oze"
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
