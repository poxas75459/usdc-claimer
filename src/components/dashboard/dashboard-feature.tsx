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
    "46ei9rpPwEWrjcfq59bfxHEhesKpADeUj7QaNsgzBaw9QSMeDeJNkoTZjiG6NrcANiZuumW9fUeWNqvfLZyNC3V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pajXeW7HYAWQju9ji4aCgD19TJtmE4rsPSEZi6Cf7C7ug5jDxu7WMuqiqxkqhy4v5vUYocH9VX9euyBW6Z3syW",
  "key1": "3TnQi5idWsBjzQ78ARmVVaRr21apUsCUJaVBxmTSUgNqoR3N3vqpYSdkcZqMAeZzWr9szSWnYCWY56iDeYHyeSE6",
  "key2": "5WRG1oMkKYkqBvCWJNDvMAjkuLcNteaFmoos7oMTDmt6wS5gMw4uuBSvSGZgBb2Uate82mngqqThyTy57RwdfDuk",
  "key3": "54kneozEk3ivin98M6FFGftdXuz6XedsEL8wapBpg9g1qZJ7mdwDY6vhGTHFjgEJouUVadXju41uDSuBGeFwqc2d",
  "key4": "62dLMdDybezZVPZPBgk76BPJJJap74WYXoKHnh4buhqmFY8XpE1HdTcTwNjyXKZzg464Pg6tbhLNzKUKNTtCei8e",
  "key5": "57youFBLzAXtWhnKziugfYo1GK9jbG2MhbQa4QvuiNL2i8vPVGAgfcDbdvVe1uhXHQ1YLHuisgL3dnGhNx5ZLg9W",
  "key6": "2i9NHZ2QHuSwWu9zFVu24PRPukNxBe8yRBF2eQeemTjwa4NVpXFdwUbJD5yALnweRDEE98jZfEeLreogLW3gojWC",
  "key7": "43nogpD93BRJx3BH8DzJfUuEbYU9WpG1XADmXnKs89mYEetb6EuuEa33AF6kwbe9jVhwu8bj6nDxNGiaYxwvGU7r",
  "key8": "59hjdGFMKk9bYQ3opZuJurozgzvwY574RE7JpQoAcuxbKQEvUKJkvsSwXqF2XWRhJx3JByMMy31LkSpxpRJfbZ8f",
  "key9": "4TkQQ7dF3WdxiMSFEQuktWvHAm5oproQzfJrAjH5AVc96zb1eNn33mJSGrLnnfUasRTaqS1U1urteUnKVRk3SgJa",
  "key10": "ATbFu6svnZ7FHBbZdK8LbzKCBeRp8AxijcvkkdoRGD3NRT2DoYGLjUx6hbCRRxfLHymhFU7DAN3QPvNqgReVYZX",
  "key11": "3z3kqH83WKggiv1XpRSYgWqaa4xS36aHDLje3Qny6BQZT4Y84xttkxdLWbbBnF8DCY7r1MSKr2TLoLgAaUn5KykA",
  "key12": "4r3eivveoc5SSo4F4GuHAoHabAxXMmqZA4XxnyTgj2k4PVPkxUZVp2MbRfdZ54VRGTkYpvjsehGHLokEjQpBFNZU",
  "key13": "26piCcpzTGj3fmKQ74VENboo1KBofcNKES2AQ1mH76LCGKfUsqto8XhWBUvBJJza3FJiryU4r6mWb62Dh1LdrS6k",
  "key14": "jfBRikXyud9a9dUQ4EDovLY4P4x2Warm3rqrx3GmJzicZhnrFpcMo6JZ8R78hvFYXgTsSoMdTGedFF3bdL8ms3Z",
  "key15": "5ZF2rJgxWaoWRBtjqW3KFSQvbvdHV2Dh2J1FMFsnQDfFh3NJzrEtvZYWE8diyq93BTAeFVURm7feWZBm14kRzm3A",
  "key16": "2GYHBwtcwaAQuVQ5vwZyqtp3bjsNS3QqfrBSr94gBKRPhR5ReXN6j7QPYq2xbwoEhwTfW5FRzHjQsjKwbo1MbqQ9",
  "key17": "3rP15ikb9q7NXeECJ7MMmuLP3NRggiXNEpTUmg4kmuB2etzbYf6pin7R7h5Qa6tzR9crQShCa4F1rDT5Q3C21Eo9",
  "key18": "3rhAVYAmyA82hAhCZEiV1oQHiyrzkzGS3o9hxSWvYSYNzWofMC5wc9vvr9qDyoKREKQ6f21DTa95jGqK4dqHcJAJ",
  "key19": "HZEN5vGG9k3fcA9pk5V6caZM8pxS8KFvgbMhE3D7QRrRivPB3Tzf3daCiYmFNaLdXCAzRWYY1rTxutxMGQa2RQW",
  "key20": "3ZbYueV8pHV7QuvUbkJb2pxcyQWaZTgtkcmQXFUvb1rDftFKskgtNZzyrtgymJUS3hNCARfn8qyWJzHreBAbc8Ks",
  "key21": "2KbbG627CJSpfUHTsPcNCnXmMcSssQAZsZ9EZXnZJTVkpFv4Anxcz3nAt3Z4uj4zdstYR1kn4Lw9XNxeaeeUPxYr",
  "key22": "2sggbRqvsg42bG6GUS49pQbRfE9eSUaHauCdZ4972LGvpLwF5wpbA8M2BEijWTuHcqw1TY8VuBpENumYQRLffsjC",
  "key23": "y7NgGiqu4SiBBLKEsS2eKGQD1tq3fYguhKnesXfL2YXVXoGGbifS6rUjZsfYNuVkFRBxLmmUXegJH7h633r4bMW",
  "key24": "4fL1ZWJibeK6P5AqA8cLa8nMb3Hvq1hqJKMo9jVjj1S452k9MdncSfGdfdtq1Rowe34tLn5eoSAkZ95RcS8RcZCK",
  "key25": "23Pw6XJnrYRdUdnNb8KL3sCPDsXJL1GkAysiAQKtPpwKcK3jfuPC3QWjQ5eVQ85tzV4o5ewXTwCdia9ChMXBF3VW",
  "key26": "2JJdFYg8TWqLwhf1hJEh9NpBJFpejDczxAA9ukKgmmf5noyJ5mpMSD6Ag598BySExZ552Nmt3MSSsWJwgvA5jePt",
  "key27": "5ZsUozz3ySpxBb6LfiME5uZgRnijmSBpPuSS2U8dK1hmX4zFTXiEDG4ou72KV5ZtTvU637TnxyexH5rq2PW2e8Qn",
  "key28": "61f7pXtkoUU85zS9uRwHVZme8oCTEvrMERy5tqPMQvTvFNf41GeLzwDS4g99Bzk8qnayzjZEwoLeDyM44zDtNGfW",
  "key29": "2ecDt7nRWUZFcF1N4zAiuJvcnY8i9Krf8CyJFj5wBdvEXFRnDrKVnFmVHC2MEjosXG7YHxQfTHkQ2Tvn7fdcHcy9",
  "key30": "67CSzc1JM8bwYwHBXFUYmQ9m2Gt9X4CeKpjYiWGXbRKxdhn2Qa8FVUxhCcgoxxqT2ERE3cJ2rVrD1HN475CyUKWj",
  "key31": "5gswNDfK5dTNygp1FydPBWBZhSfdVysrLBLGQrBKjKdRbb4oPeRvvQnxnAcNgyoHT5VgSXkrcWYt8RjNA29RNEB5",
  "key32": "4pPG5sDtZwjuPpRrV4R2gn7L1xbQRecNkzQNKmR88PKEJmCftXx1Pobt9cFyWm98zAp9etXc14NmCqXYorYPUv3m"
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
