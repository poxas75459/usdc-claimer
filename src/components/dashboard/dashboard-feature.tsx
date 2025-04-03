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
    "67cVYhSiybXT7kjUv1QsMioMjNkMPAqYz1Asd23HH2mGBhdyZa8Lv1Et2V7efmsLQRCTAENmSonGCq2G5UnJfxa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEAR6swXNHJJqNZ5oLFjAPjMWqT2uMJpEF4f5qeLkwQmgwJyzULCoWPb8rSCnpLG6UDJGem1MEZisW5BD12VsVk",
  "key1": "54RRDdG7UGgX3XGe9ktHnZA7eWe9uzmBHRKE8EZY1KSgP3ekdeYzNXaXM2tn5VnNAVvaS8nXCTVvrNKaYqfqHdXp",
  "key2": "5XkZhQNAyGEyqcG5xzsViijKaQt3Y6jHmukWSYUfmeT8catNbsWEhVfbJLCZUQdQjKhAuWk1CC8zkQ6VWUhDQKnv",
  "key3": "4TWcoHkLZx5X8PkcEtQVkbkCetKXkkqFZTfwVmPKjh77apUiKZ2vjxtfmaD3Z4G3xpokWRxSFnCJcPaV9rh2b2Nw",
  "key4": "5acWahgEXq7vCsektrYMqwp4mW347D11sdsqLFrjqvN9rfXDnxcbXbr2Sb2cKhdFf6aBmTXFcjhzv8TgAAe9NDeR",
  "key5": "32JTtR1NLobQ3WTW6mmU4cVQVG11UY7cDW8qD6EGvYnoGAfJ8tyCjso3u8wB68FhVV3aHqbvfLgzkdzCh6Ygg3Kv",
  "key6": "5WJ2in7Gd8BSfJ6apg72Twcra1LeaCkt7PYLmW5iaf8Gv3W7jpFjG2WSitme1LGsAmbitz9kWamE2TMQeEQmPMQz",
  "key7": "WofezMvoBqLqsTKbKg6VQKpUqhGiHPz6H9Q5jGLwQEuxvvQF2RA2R3B9Rf8VcNSoPfUJXryY6Crbpo8kvGzBsJM",
  "key8": "3F5fim7cCHYH53S3j5i1RzEGoQNxiN353WDavKvCqAFj1GXW8KfCovwFxGu7SjnwqRDx4qWZk8kHwzbDB7Q52RHP",
  "key9": "3vrvAkuPWCjqMdCSmM2dMnJRtjJ2ZGUwwmdrPnHmU9bUFhE3Ken2sUfiyvv9R9usnQUGFHtj6d6EEuPqfXtjT1zs",
  "key10": "4k2HfKy5WHxoJ5D9xU9XLPfzNSHe9Ae4ng98z9cze4PU1XmQzAuRjDFDhazcqbP5VTQnjwk4zNrjbihHXbTPRhag",
  "key11": "5Cut4cLWayfghKhZaoPuuMYXfiBJjTzjj1x6eaPZp8dFWQ9zSUoyRSSZ9QuL8LRkpHQuh98v75ob2dxaCTXXzHvK",
  "key12": "3JQvqQ572WVvigSS3KSGBzjZ8ThuB8NmbatRNzArXGMVFiXCx3PfyCBnobYVhfFi1yvDRiBrm3AkJBHgZGv9BPm8",
  "key13": "vaNNwNqmZqUDYDtLC5ZeKr6ahuvnfYeWm8XMrcy42S3HrfgE68niHvXsNJ7ZjeeV2FW5wk1bFdixZRwc7vzp6wG",
  "key14": "3ECQkNCvahhMdwwUQ73AGnZMyMEZTD8pDboDEmHjj11HZarxmG2fy5VvWZsGzPrHC4UMLDdzS7MeVg616z2cVLUv",
  "key15": "5uSVeZZZ1U9xyyaNiiGUbz4ymNa94H3Ze35hhsXXS11ASauMzWrB1aAHS9G2jTV3QW76mMC14UeE2DqrcMjriwtY",
  "key16": "5Kc4V79tZ7Cf1gL6BrDKZsaKpU5L4NbeZhE7PQrQZgBksi7E3fe2xhUsHsD5AinxPbRoXE4HNSaPK5Di8GHMCK6A",
  "key17": "5bHrwfBCwiEYNQ64mFnzcrkq2bgoJ8MdTsuhTCoSUcbJc4eLL93nJYeRcdbpT7uLDrchG88vyTJHbAPYN9Zz83jo",
  "key18": "3pvTMMLsk43jtC4PUfKg3cR6CYyc7gs2FxTRvSnKrYdJbpvsvs8WpGVi5UC1wjPwgUCcHDow12MhoahkAPvWsSYx",
  "key19": "GKZWNErJjvKnEWqPprmZwpD6QBRJyyNdJqzEecbLJGxoSvJeQsqSmpDA5ch5Zat2vCtLrwjnB19R2ba66TEno4J",
  "key20": "aP2kn83vF3Cgk6qZSQiaFL7GuEyY3s4vAG4gzdBiy69JcZYJqyLbxsGmPe4oGuHe8wCeEUHbE8LfeHGB1oxB5WQ",
  "key21": "jBjsKZiK5S4zKPii2aEhTKaXrqzuTb7wKL1pbbGQKZoMk8ESbNpL9qdpgLjxu6C3pREvUkmkB1pgiimkodymjGM",
  "key22": "57A7sVYJRCqS9P7dm1cx8HLR4VcWRqM7tGr2aNc46SRzggQzMrDvtGn5f2N7pwo6qpqhLod8dWyEL1PGxD8UiQYV",
  "key23": "3Q6Bob1i1CSh2584bF3EVtgYJQgWQjBQAnW37xECghHXy1xbbsRBabUEjjayvnsk4EwXhbXvktFGbtYXDmqc7gL6",
  "key24": "5KaYtrs9jEviVkuc8h16u2e1nWD6gTgwMfWS9L87xq4nUG2ZyYCeFHkwJZ2PB9q7vvZXrDCStnqeDK7oYbt9RYbX",
  "key25": "62hrjguK4zbHGJaSESUZUW1LHHrUrJPE5x7ZQK9ecHz1QoBQJ1n3DuhQr7nd4Yzs7zLbwBGnEsVXNZNsngm3RqzC"
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
