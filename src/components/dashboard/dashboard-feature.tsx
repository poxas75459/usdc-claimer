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
    "4MkWNFBAPuZHYn116tr6hWr1v8RvCghbfG5VamzCxb8VfRxVSF6HVCJoF2FVJ6byrSix4kvPydyczL6wLQpNv4zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JMT6V4KDHDTQomCDebEGptkDZ998FG75BijNP8uYjHYPuqw6FFxQhXLrHmkfNq3k7kFFV4HzqcyjtJNrPRrv6Q",
  "key1": "3BRTt1SC2pmzqj2jt3BtMb7XDzSbeUMdF41xzwAUfGXuz3iCQxoMiWSWvWSDEpfj2GktjEvjRiLDpPRTXKGG3FVM",
  "key2": "3MXrweuMbQ1fegWspyYeoqK5JHZBAf3X5GSRznmLJC3HuugU2US2bxNzV5pdS4pkqWeqPYidWbBrpPWMdAZBrPaS",
  "key3": "5PQEVL48ao1A23Ug27FX2Sw6EpgDonvpSLBxjY19i1tbpxoxdKbbwGAUxaRc6gqzQqGi6nKGLVj3MeR6qkqXdFwe",
  "key4": "VdnwJRk4aq6NocSFY9xpuhff9kkAqe6e6MYtLSAN9WG5szwKYQMfscMhAadWoZQ2PrK3Yk8RxfSXMSUJyGtqR5B",
  "key5": "cvoMgYHQuRbwkQEq81HKwHhTw3v2Th24AWua2Jp83kjZgvpWgHBWY17fsGtUwJpf2JgfP2vWGrNBo86sXC7ETmG",
  "key6": "3tWc8Xdk1pZTFTGE6tTTEGn8f6iEq9cbMhq1ZwnW41Y42uT4QvqfYuPx93N35raLP1to5tivf2RxgxhAZgAKfHBk",
  "key7": "VnzMZA7HqwWD7draLcPi8Ee4hCHU4zA5TwtAEED6Rn2pUdHVNrG7oASgBfXimUw3BhTo4oy8XZWnwLr2d16c67W",
  "key8": "5BKxV9BysTpPdrAD7QL3vSAGH37Vv9DP414HofuetN4eWLxRFHqFHFMM8TSJFc5BYGXVMejzXrN9wpgfyT3ddxBr",
  "key9": "4c9DfVUXS5DDTDdvMP74BiGFL9Sz1FRjYT7vQogSZVrAaFihV6iEW9ebkZD5iaBPcV6J3ptN268jrhQXqyAzhYyM",
  "key10": "8UNVtGpnTBUFiDW6nVi79jaz83eBqSd7Cc65n4oc2RE9Xx8tcY3wPtsUo1nahzQXzendnSrAPCXyaPmLty556Tu",
  "key11": "4Vgd3wK4nFKhA3aJeu5wVt8sQpZkbYFnCpsbJzqFfdRWWp6vPzbC3tghSwjMZUYKCEFDoEPktoLR8GLhKix4o762",
  "key12": "3AaQDQjFQpjgUo8E5A4JR87JSJZ18LxjAgWqMRiQcXqTqHQw9Yn6CfEuYPHKvvRy7JuTWmHqySCPH9fN5Mz5yfn9",
  "key13": "4yj6JMvLYSAXFNuEeLzfDF9541iapQ1ZsGPYTWjzrrbUnqU6fSf1gryz7HbvFFR8V8UqGZBh9ziaghVjet3dg8KC",
  "key14": "3KuzgCtiR1oFgoTtcnLKjbghCQujMeUhd38dGXAXpQGXFt7CGtxsPSsAnoAF8vESZFq2Y9yqfDAe93Go263chSQm",
  "key15": "eDEsphXvfUNfacvzLsZg3QuRCLS9UrWF55SCzftdLCrWeGrg5CXbigwwDQYXC3s86cpfFghNNSEagjmkBnUTNNF",
  "key16": "pAMg1V23HnHraRKSXdpfMXgYHSpNUCSjvp7Tby4NSyFp9g38qefzbo8Qe3YMQQLBjh5HhRXiHqtPnmK5qAXTW1M",
  "key17": "zYi8YjUrKuYKtdPFh9jsFyZuFhqQ5M1VfWKgYqRDEHkFMCupGXYLJ8scXpMfufCsq9V6hCKZry6f9ZhQMn8oobu",
  "key18": "5n2WLUqyZ69wiiYz9DExSi3m1CgapiFgRXMZjP8eBzF6bdpAQkika9oE7A9VcA7ABGhutHhswhcRGorMKC9LXrY2",
  "key19": "5oJAS2SuovXEzGJQ8CnQZXd3VxcJBKq47hUrrTKM6d22Wi1GaTUxkFdQihviwGP7pyKsgQWSosYm5y6TaTnhUd1H",
  "key20": "5wMgk5bfrGkQh1Ye3YZEUyGwVhgZkiyocJW97w3ep816iBi1iv3CsSyg642VXxGq5Pay93q8NVrT2CbsysZJbLHZ",
  "key21": "54rX12ZQy67QVTmQ24Es7pochscvA5Y2yV7gWXNcuceF2uqek4QnYxSogogiczoKty4CD3NHcVLWasrUYyKznGGs",
  "key22": "Roda2hXjS4wzUckLhBKj6EFgyNZeYxCM86GVBXAygtjWyB1mgkHByFGZvhc5NknQXz7WmBoDSxZRE41MNUszhAF",
  "key23": "4o2n3M2GGLVcJvfch7kAxu2EUuYmbmfWjK2Fy5n9b1XMWhRBAZVxyAoTSWQBt2t499WcRRHpntm7fDyM1EGurq8P",
  "key24": "hQDYmoUuM1FMEBrhci6f45dtsd7TprMYSB64zSnfFBaSNH7w3SSEhZrJqL9HJeyb47JcyEMs1c2KHdqB9kV3z6L",
  "key25": "56nXjG9ewZsE1Ev2yfZ25UkLj3KmBgkjYcH3Njpehy3cizin3Y71Bri3yUZsFdFKkqkFjqhx3CytSjyXQxHRGyx9",
  "key26": "3trze9PH2wCP79HfGUbwoYRgDCVdKArsdFgT9ApwBRt5cgpEV8HseJfjFt4ndgtqaPW3wB3ARKN9GAKFnqpv7ciE",
  "key27": "55mzL8KnLmY241XiSpmE6YkQeZEm9kZGyd1oQMd6vcmQUPhx8jFS8JL7biSw9ECvbLiYXpK7vYpWeMp5XPgEbkTw",
  "key28": "5E9C2taXEJ9Jhe6gTVwunDcAtPVfd26mjeaw3vX5uu8Zqa7mGcEwvi5SDTtRFBwsyLMpdTJcuT6rqqZFDQ1HijfQ",
  "key29": "2vY19KgvJSYQN5qdszDCSVWcBXjxeYrExSqWznF6ev8pSZVC1QuiES65GcfTtRY8iQWhJyQaUsReypmUAG8QYqPr",
  "key30": "5NViau8btPeQvPjjFpoCRC4JWvwP7qwxdYHqXrnmvEkBuHRBjD4FJm3vM8qKQEX7SXQeAU8ymZpHkg1fAFif1LqR",
  "key31": "2igXGmrmma8oh4KZ4MyxCeqtrF3ekNFfTEgzjhh87eZjLdZzKt3yFYLDnRwyk5PHjLXi1KHxniN9FdVdDF3aVRzU",
  "key32": "4DWTrJhaynZ5oA8beTGgUYFZaY2rGWAAT2SipFM7XVa9T6fYUC49L3W3g7Na7cQn4pMyaBX1uMVLzvzXfFUY5UB5",
  "key33": "3JHkjvaedqYg58hspYBLepzyzmcbqs3LN3iEYki1tZr6VjVXefe1LNvgWTGmhqjpxMqfJT1zNEUuEBq8h5Ai6x58",
  "key34": "5TNcKZXZgaLjDwDg2bqxoR9zaNHyk9eG9DcLEyUrhRq6DvFqH2pJMm21DBwHfhmkMxtbTY5NP6aBwTumHBrrJRrT",
  "key35": "4uJjog72of7Y7zUXCPkzotS8e4U52DPNaxV7DBNa9pgwgKG1vnNke9gkrb29dxPTZCew4qTA1vggHVzLQbrb958P",
  "key36": "2ouBc9HqugcoY8pT62F3m6favbiuqLQ3jPiciGfBtE6oXsXKG7VLdNHMz8eGUAJ3br2cG9P4gFarb6yN6cCuZ2MF",
  "key37": "acBU1nRqTTaWLTzfUs9HmWSsUQXwpM4uVU2U552848Z6Zs8NPpCm7NNxSJGznUs3AQsUETn4TGfdLwMt5JrmmWB",
  "key38": "2DyWNwPmhFA1eUygN2Z3iRcT4afYcRrC4wwhMkuD9sm2468u2ZWqekWxgDJ5UpwK12WwEf2uvirKFiWrZmfovyuU",
  "key39": "WFcNHnzQtT9hANuQjSvLQSoeWiziKmrTKExYihT2Z5xLFa7YotvPi2H8My3coKfdQ4faJshcfTV15shxde675bs",
  "key40": "4is2NfoQz7uZ7KuXMuGuibGSYkQ694AK5xH3MpczhYDYPXva4dGUvNbf4eVnuZar57Hdp8sTWveJh3AC466uBZ9t"
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
