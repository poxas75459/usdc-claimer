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
    "5AHYqfYG4dv9svWgtUtVUNgAMYU8MppZMrNFZo9h4DdABgmkT8ekxBFyMGT8trpmGkdRthXaRa6egkvDfKLozKVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kiu1Js4dVQN4GEhvD6AtofZ5vs7pXjphRPVtB543SSL63UVcR6x4ayPtxmdjtbTNawi7ybdd5DgnbzoyfKkWaeW",
  "key1": "3tzt5ArzL2LZok1SF9bFrXTresGpzpGfGviJSzu3K1CDMqHNKmrk4Zdom8StsGQw8DV6oQj2m6pJxiSsKatBpKQu",
  "key2": "59ZNJXsuLm73p7hrpigPKy8FBqzj58iJ7EwJHF5j79jcZRtrSaSJgd2z9wh9Fka7DzXS1iXQr36bxJnXHAJhHM76",
  "key3": "5cmp8nAbJ5cPeH5UER9MomR8aatMM1Qu4qPWCrMjMyThrukF9TCDJBbR2TbHkUiwr82nfFYjvaCbUZTCkyQhck1N",
  "key4": "3CgeyXov5uR3eSr6TYCmxB5dKQmbeATF8mF2d3aQuE2UcVTynyz47F6kjfY56dtugUBE3s3yzrBSRbgmuXwDU4oA",
  "key5": "129cLyjNmiM9QyFF95FEhhJh6ps5euQEXxy2Tw3BtiWfqMFNrqxTXdbvr9fRfGaNixg9WDiyWt8ZnHcu15w1Ba4E",
  "key6": "59JUCvFweji2S5zT5cV6zZnQwZ133dAhfQgQWUDixQU5hyk7G8TDXv9R3R9Rg7WHXWXdLny9NvqzpJ6YUCWBopP1",
  "key7": "4jQCcNq7bQpDs41vXiEhvUg81Hs99XBMtJAKZfnNqRS3ebsoEPrjkcVSWRiSGz6HZvW5X3JEqKRnWi1xCJaxjs3D",
  "key8": "2bJfHzzH5QCNuoAUxHeubZi3Np8ySGncoAkaCoUgfeLxtDeK1VMMtRUjgjbRRMV54TAULZpCUNawzeM4npPhxHe6",
  "key9": "3KVqdYNC4Gq7siA6SYXtMqXnaYzYLhZGKEo8kXa26BWGgMKA7bvRBNQCsfzP6eLiZW7HAnZjcxFRo3b5tasL8XCs",
  "key10": "2LhgM5gZVYqvSxYi5TN1tcC3AvBCn5hjzwbvZrGML3Shxs3wNQjZYrZP3yGWTHetHArvQP9zbZ8PTjDAJwE4C2bv",
  "key11": "3kuYQoqLX55wDqB4BYW8ARAQfsepqSEtwoJGToVvCpjVLVzCBhfBDUYttfVHq9hteX4NgYGv1fjfhdATkfWB7oFJ",
  "key12": "55Li2zS3DyzwwLWyea7DR7pmUDCAG4yTzJCLFrwtDeUvbQatCa7WzsiQxBx2Gr2U7EsconrauiH36zTS9tx6Bp4Q",
  "key13": "VUJetevmVbzCSSGYPe26Bj4KwjUnq2VVNGkAZwFKRSNjERs2VnUMFWytpCDrLiEYjsrMU3EwT4WTxd7MkdaA98M",
  "key14": "thxbXNwhPVcw3Sm6XqTARbdSDh2XwT79f6DJL6EA2BhzP6HAMUbSbmE3ET9CpJ6R9zaRQLQPND2DhCE4vhgABY7",
  "key15": "2FEhpkfDEvP4xzGgDRuRPK4CDtZBu8gM4SRHg4UwhNtWSvEvbvQWa5MNYBz7CyemFYmwHL5c4BrbXEy1BXSKHayP",
  "key16": "5nBQyFJvXCchhWvscLq7EZcNUiAygotwmERqdoRgNk4yb8eZF2un6w417NMnnPgMRa9rAJ4jFQPDopgYhGV1vf1A",
  "key17": "5HgHjsePcsRQLvfUPJ1NFoaAenuiAbAegbbRQkyaHnEidGou84qb2khTLnpZbi1RQiavdVXJ21MhrLrDvpzfdiUc",
  "key18": "5R8cXrWNMZa8dDTSVH82dcBzuYi4bhx2otwdez56bw1iMtnqm7c62qz5xioxjeyNJFqdHP5e1DbPsAkESw9c91JR",
  "key19": "2CJn6oVgdC2R8dV22EucTwbKcfX1y8fEngodQcFgDvTqwyCEjiUc6yBphtJfCWKYyd5tJeqddMdicMPmDxo3s8TQ",
  "key20": "2iMGfnA2BZCd6JNNxG5YMaBQUrRJZdMUd6y9GPScnfGSpHJ3nF8WviNRJWa9S8jo7p2aYzyocxWeAzemDQvSEZ8Z",
  "key21": "51JoTarrSWibFZRX7WmnDaiFDDfs8NeMZBKA32ZLeTzuC7cWF4rLLZP91uiGrxZB4rJ8u6p3GpRksx8BM4TZTSKW",
  "key22": "58i3DgUejuEocMyrctC8VzSYb4ktWiYt1ef7QsemUXpPdzYQqvQzoWbdXF15Uz9rMKbQ27zaFuXoAnGSKeYj2J4q",
  "key23": "AXWTNXQNX5zbSw5vafCrgBAbbWbgjaucA1fvu9JuRvpaC9tcgGLXTPbWQW8CRonaMCJNxansf4DFpQ4SLSVyzm2",
  "key24": "eG3xRa7AmzU7YG6xKDpRv5AQih18PjgWgXXhX16oP9XKAjYtTTFmxH4EcS1KG6R5B9vexwKCehvLiBj8CBiJHU7",
  "key25": "2hE3Sj9Ynjq2bbEEtsnt1wTfYpBJuQ8sa4qQN7asQkUmiGuYibEFzhRVxf4cjxqSd1TxcM9vRDmhuLbrED9t8pZr",
  "key26": "5KSYWyC7Puiidw1Xjd8AYvDGu4GZfYLd5p9eXQfazaRuxiPMA8HsqrY4WYEKmLftsZdWWxZqa4GrhTBtKo2YwtPL"
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
