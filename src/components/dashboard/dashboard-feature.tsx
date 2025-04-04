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
    "CBCgbqMocDmd8UarKKwnDSk8mYoLDcHSkm7tyWLqPNt3ehWZHsNqJTNC9VWYCM4kR8TciPQ4mLhujS6sTxcXPQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wvk76fYii9oZMYDety86NhTD8LFky2NkSUoWboNEDt82cJ4WA9nEZF6pP6J7ngcjR5pKeA1kiTp3rVHmJefPhxr",
  "key1": "4RDSwAy1X67qvico2WwfaCJBecRTKrwhmk5zKqUH9tdE31aJmneiGv99NA4Wwn34AriE3qcxETHDiqhswVBVzjuk",
  "key2": "3XSs6YN96dd8gHRWm2J7FPUyouN8jkCFE369BKMSQdnrVQ2MSNMSNkG7ZZVW7REDVdQgZJbueUFajBCDvf6h3Pju",
  "key3": "4Kvrti2WzuTtagco5BrSqXmtPH1iERWPActW6XzjRPxxYRExxnVxRyQySs4JDDcVQ78YUmNyGV2DA6THmkRwvvVQ",
  "key4": "cWNWi924eFrUNRE9y4tthDwzGaiei5CRdBDjJSCW5v6nGP2Dve2pqfYjTFap5fdJqstBwjUgftcZWgwFRteLkUX",
  "key5": "2Sr7HqFztZXkWC3hk8rG1TWJwRA1JvYj28ajc51RQLKzLY8Her6R4Cc5Bq4p2GpccAB6iPnha2o9QbVSdGvH1r1n",
  "key6": "sDbKw8sS8v9yE4hEiNBo1A2vHETzJzkin3xoErbFT2hzfWeX1M3h1ocy3hKW7RTQ3fch1hKAvBS8bfkhPsXeqd1",
  "key7": "39ogFNuRt5cw3ZRrzmMCihHfWk5McKSTuSZcf95BmREpJxqt8ijTHaQ7ECNDYSFzx4ShiWECjFBkvDGEvFaW9xCG",
  "key8": "4KW7GPUUuJvFuzWU1eggSD2Lyu1Exu345S2S8UtW7EJYqx2Ku66h9nUqMoBN427KJuo7yfb8igBRYVbrivUDg13K",
  "key9": "3pc4NVYnXZ73CBWXRWmuZeVktafY3FrwhDrreHPC3BVhRHnnwK1XBFxk4YisAkywoUDCKNqnKEc64HnNE9E2cEDi",
  "key10": "4xQvyrUXWLqX3HqhCFDQUQnoW6XLZnLvznVfgy4TA7y3UTyXycmLnnKwCbcD2ndP4kSJi7RTnqKEYXkHdW4ddJxd",
  "key11": "4ksiEJTPZufMBLP31zBVRoc4RYLwWp35nMY1tmyq7bjH6FsAa8QULNxwRMAzoYJVZVYUp35YChxqs58E4pV1ZZgf",
  "key12": "24KfWSGVBVGKyWyXNkoYzeHtNR3iSJTdmJsK8eT84GsRK2ajhQUMXGwQoYAcvQMQxvLmmEQsCrR2GcrYwzwXaR86",
  "key13": "1MyGhe7nc4Zbb7W6fHttYpak5HxN4BVcDSYjta5huJLFBjZc4cTV2GJAA5JpbVVJE7i4oNMfsbPxbctTHMcFosf",
  "key14": "nEmpQn4RDvuSHqnsSm5A47HfVMypuXww3js55LfwECt1xSNjaiK3H5XKLNZj1RfhFNXejh4dycgZYgvPqVvXQYV",
  "key15": "3QQt9R7Uh8mwqBabrZvEBMg8FM8WREHEHy9LxfHa6zv93pBjzwgGqa7BEPYt8PMsdXkWVus7Fu98bfuTHc3Ao5DV",
  "key16": "9pNNtUgzynn4XbXcHqrmxYty1KydkRG1Nzxm9o3TLBBjo4CjcLUidoFk2AUE47dbJZxxfFZtwfqH9qdvL8nw8z8",
  "key17": "3EXjtyx8ZA9wq6Y2AMirP7qshbJmSvUysVZA4qxfwNRPSbY47Gw8hCkArLZiEo2SqsxbK72VuvrwFcEwMGowXs5K",
  "key18": "4XXL9HbqC6pX5xTso36YrWcgR38zKKc9jv5nLzpgACGcNygm6kLso5JTXYNKtmza4ZMybYVaxyUbNVLqyQwBroLJ",
  "key19": "3aGLWyFp9jWvBhxNLbzWUHdoi4Pup6nk6MJjWFUVX7imDgwgNDCTWKsEtZWVpRwVbC55qXgiDPnb64hznvTE9rnR",
  "key20": "2gXEBQ5bHNc7t9eXJgNRHfQwcKq6nNTbkp8EHxDHbM8JCEhSPu6R6yAtNhN4ssQ4XAJnoGRZ3timDj4LkUi4uF1n",
  "key21": "3JQoeGqb37emwZmHNn6QNKMRSgi9U1FQf8uwTfRVntvRoft4yDwkJkE9qMARRJn5UVdzcdCEPfhZmFZpK2BaDNZE",
  "key22": "4QjkVLvwekzVYJPRKxnaMwGvnAcX3HEPgMRKmTChgwfHLUTku276KcHbPPBouU25QRJRDSvSxfAgbPnnUXnhs14j",
  "key23": "Dt4dTHY49jZxa6kPsaHGM3ogCPXHgtfvxRDWcRrfkBAAYkNM8HXCsFnoD6EW8C1hdufFrGujnNPf2ev8pya79M1",
  "key24": "47CMtbdzfxJPVMvmTiQZKZSgmRstphfdCJHK49yhcrFGQ9tSEH3pmkWTXnbcVKnKNWqoNR7LAR6mVYkWbhcKAWy9",
  "key25": "38eLR7HhYrGqjbFyd3aCbNww4g6B4XiRSGUQi5ZmNzsgRwxg5iURHRkJEYkqPKgsZ9rx4Mn9hop4gJnbL85TZZpG",
  "key26": "62QDMmhs3u37qA7vwuixGjQ9SEm3bzsg4zu1Td66sNsK6fLz9YQbZZhfNVX5zcCK84PYY8UCH4vZ4t7SCqVe776W",
  "key27": "23EHRUMLezS4zh2nApvhsFGcqgp751H3UPZEpVkLU2EKY2sJ6d8Q7Bq4HkrSecoLRxsuXESEaSWC5dXGN4x72pB8",
  "key28": "3tmNnidwz6YQq18UsFnAnuYC5dJED6brJhybGazrvirFqV5VJkNWxtrpyCtESnWkLL6maMdDvgXH2B1ocCaRZf82",
  "key29": "42P7KtNaT2akttQMtGNmM5cJUr1Prpx8ckM7MGsF5kWLAt3gBiQGpSiFMuRCXuEpGY7yGiJWedZxCwufgFWvo8cR",
  "key30": "5K3geyNHDmXKZQpNNHsRu34Aknx8s68q8VU5ok3pvAfojX85mmDbQMkRK3XXEfwT4Bp7DqFERBuQeyDU4be8rU1J",
  "key31": "3L6L69anzPuT8f2SB9GKPUQjcb6cmsCRzBiDCMAEPNNxmEgKu4egCfEZnWXefRmsUikbZzfCv2VZ8T4qSD5ajVpq",
  "key32": "2oKfScRrhiD9Zb7vCnyXfYso9SRnSWdhLQA5qZdPPGi5Le5dELp1UJajDxz9WeXVfmUqwQpREE8zXD4PoBxoWG9f"
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
