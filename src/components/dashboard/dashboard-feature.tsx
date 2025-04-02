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
    "J4J1aKSAnHSyzUMDoF7nKp99BrcURVe8iXjPkoxWo2ees8dL4QVF5uVUipLc2bG584S6CPp2tKpjMehZSn8a37w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LxMFjZGNSwFtYwGgosohAgMu5dVywLFWaQHAqyb6DkefH3sbFf3MBQg9nCR5tdaJ9D3w9cxkB3hpekMwzYLQmua",
  "key1": "5skCej4qt4xJfMfZM6gvmSbT555eBsQc6bosZ1GXkX2MNJbknP6fp3LoikrUMfuS2zjaC9BWweckALJvWAedb1yv",
  "key2": "3oHE5DgiFjLqmScPbnPtAgBZNYKE1bEvjxLftphRKPHApUvwBkTWLQGa4NLuLrXmfnyjRGU1HGDDfKWi4TersnqS",
  "key3": "R5gYHbgWz26pEwbHVas5LfsaZiBfa7CW2TwXkVu3gSHR4tob3SovDaDKDU4GRKwMXS7W1tW3EugCi7L8GJh7Eba",
  "key4": "4KmYrZ3n6nVcXx7Zsga5EJECvW13bNd3cw1vCqu42thbFXCpobHFwLYNVmsQUSivjK5wDPn55GqYAWbTFR7WhJyJ",
  "key5": "2YRyybjuszEgt6N9UbGSau22y9JzarMMcJ46G9JVv76FR9HBFEyjTLt5mzdTJyXbzSfCHKH9xcXg5bPj6QQoMjpE",
  "key6": "4vX4feaGFBLj4He5sbqDVvxeKNjrr595WAFXwa8FdSUL2DrH1ktsEXcjgGUGA6QvHV56r8S91hmTpdxH7Bi59THj",
  "key7": "ymXLJBSz4ieudFa97jfa6Xw2DBfyS5saefhCsXzbxzaDCdRU2nicrZBYh9yGtHteeA5rkzanUgbQqN9AJwSWVwe",
  "key8": "HsHb2MMAYm8gx3PRasMoq6jXXvuXgQoz2jndFcSJ7yYU8XXQNPaWMNVqiyQTN2W2gbvCMK5NkqKv92r1nNaQiGP",
  "key9": "HvP5KXdtB6usmULcStykEGHDJwiL3xa1PdSVm3zrbUZDzhqs2e8qWc9UD2DP9Ha7GrZPKQ78mWGrRL6n97CdUF5",
  "key10": "5AVRghJcUkTyyswX6YzPsYGLVdjXHLwET5yQTirwFqCBjr3BhuWYPLjUzFH2mmNMhoJEcNijfMx6sEtdu1VtnP7b",
  "key11": "YuUGhDT7ZFXcpZg1EncopMrkioYcrJ17ioahGHZgniUnrc39EbkbQChwMjdmHzm3vk87hr7uf5uL4H98M3FU2jg",
  "key12": "4tSE8GKDu6Xymm7bnSjBLcKVe7bA9cGYszXwj2B2SfudkLYanjnNFVjbgNqJXb84vZcMQS2qbBvFpEKkwbpexZdF",
  "key13": "hQ1bhcUa28TPbCnawSbuoVz2T33qpWq8SBtbipHHCA6mnynpi4Ed6xzmvLasndjhcE6CNqDFHjYFvsmtAjC9rEK",
  "key14": "5K1A1FsR5F8B2kLR2eFp9qdPjKuYvP1TzkT6Ye3YdvyVZ5ozWQp86kbfSTyGXoxquWJSARUy3a3kf3WwD5DvZTqV",
  "key15": "2QoHDmjS4NU6nX6qGikCQPQf3D4hjxDAxze2Ajv2ywZCJUqCPs77X1uLaaGZ9Aaxt5cVeHpNQSLTS2ViRHFZAwkg",
  "key16": "5BveDdeYGDzD46pKCw9rfFvfERL48rR2NX6QvuLDhBRwFrshmC9fFYVYJyUp6DJ3cCLVeJe5jAVUMDMmLnuM5JxX",
  "key17": "vwQzwLZw3wRDZhw8PYAwrPs64yPBmy8qkCPLzjJWYTsj9MZPCqm8uFjb4H9wLUoScd2Vf2tipny3qeuaQiGXTJX",
  "key18": "itwRfTD5oyuU5zbkGGtqbw893ubCJys7kN9f1KEMHGBc3h4BLeU3Ab9PVwGAMnN7Hp5Daa4RT1BZL7Fu1weUPm5",
  "key19": "X1BmQsoQaiukTGvw7yhqX2hJpzv6YaVvWRZkUnUkK8jPFBFNGR9Thfn3C7nv8wmL83HdJAyAZy6mMhmSKmSwYLg",
  "key20": "5xGSLr2EHbtgWKGRR5Ecy7gjf7cz7WtkgL2aBTZjCpo4fL6UrDu9NYJwmGLZwEX3KuUCxmNrW4ss1Tv6nmwVFB4c",
  "key21": "3s4RMofStQCba4A2RttMiNBqNzDmHZwhP9cwQFhDeMLZa9cLwy84oxwtXZkMM9YtDSZHRhAwdQsmKVHFu5izYpRs",
  "key22": "37SKo1U3XejDkx9WzqsEjDEgHDXCw1Ua5UKAqhu2Wi3RuXFNa6bDvSmPopLYwywrZVFByX5WoXxDQX4FxyQRjpH3",
  "key23": "2t6vebiApvW6qevzZb9UR5A3UaB93e9bZUQX2roCkXrgew5t2U3zCMySYxwEo8MRgTEJ5dYuxkHxY2y1NadktFCh",
  "key24": "2tu9W2ALsL77mQrBdBee7yugyRw6VzxhHFennecCg61hi7W2Ai3QPvAJku8y89sU4qYJ6trhX7ounPs9vv4qCnCq",
  "key25": "2VY6cdf7VGffDYXqhrxUbqb5g1zCGW7knQ5impKeC2frkGrZUZYAmWT2JCHddjasBTmnGx6GSeBaN4j2XtrzRDkS",
  "key26": "34AbPU1yXVrYUndKAcU9ohUjroWc9FMwZpy3fJ1Lq6pQDhLXYyumty1LdRg9E3oLvKs6zLkxFeMAjmHew9HNJ626",
  "key27": "5wCZwVrSfdEbM4SeetyP46oDBp9qdaLC2v1ZexCzKTk6bNBdmUHbfDtuZNSet3ThVd41WibdzgSwhonqfaWvfZsa",
  "key28": "4jL8WKc1t6KeMzqWCkoW6BGiUvocYAUaNP2oLoiRBanb3sXXSZAtgvgsV8h5a6vwhWt3WrSQF8moWQwSBLzpYzhk",
  "key29": "4G3tkyFMRfwQGPydLfPSPokaA8rikh25Vm3act92qShkKoJW4BNHos2pK3HiGbHSgNXH8ZLRnt9fGoDe3mtCR1Zp",
  "key30": "4bfHnf61vpJPEAam8BwqNeJtMipy5M6UamTXLGzhPSG6LFsbmCrC5cTC564GUGH8PBLt96d7LT6JeaXVoRktktQ1",
  "key31": "QLpYvzru4v1W6UemF6xfGht3A6fHNvcJQhyQ3Ww5YDCPBCsdg2aY4ngpKPV48UdgyVoQg6BqqEov2amU7SZy4sb",
  "key32": "38pFNYnwoey51nJVBPGnwHuUnAbGpqGn2XfGs7HL3cAEypB8RZ4jNSJhyknT23MieWnuRZiUT4J5dTWf4hEV3os1",
  "key33": "5AirtS6cn2D2GT3oKHCyp72hQZwn73Zo2dhtw4XFMpiUPk83PwBU5Td2sXHeNmzyw5VrpkdUvSvwXY4VJaHcQE7z",
  "key34": "2EDWSZfADcZUnY1Lz8TDSSdXRENudAY4MM7eJLVzFqFwFiD1Z6Xw7bWRw3VpiibsS6wr3UUgYu5pU7MUTdCAYqRL",
  "key35": "52mVVBy5UrvvfEf5WRN1pLu941hgCoWXEnTH95taXZDgf9FApcYMLn8yKuXexUHwcawrgKX6mTKWJ6RvchZPXcTF",
  "key36": "5nm7uqw6nGPg87LHmbUsRBc6cMMWmFkhsFC3Zgf1AgDyuUJZMCyR3o3Nn1aoVqUx3D92t5Fpb3ETLaWKQK9zUpZD",
  "key37": "4M6PDfCYB9BZ7T63UjKymgGvseqPYyUf5gS1Vzan9RWb7hCu3qjavTqpYYEvSsBpF6NLg45pe5xCiSKrvKJhqvZN",
  "key38": "2e4FQmj53synZ7RV5tWbkEpw4A7dDyeDYVhTQ48jdcapeHL2oQFUpzGvjHFiGx5kCrgTPGbb1RkN2KVcMF9XCu9j",
  "key39": "3TBqzN7sCWW2m8veUGvMUCADboFyjhPCymZ6BMappncLKB8fRan7azuUvB4qHkAHoS6TGxeJVQPFYLf5wBysGcUb",
  "key40": "58LytB5xVcdw7pczVjbt1dqxLPHeDohYqHCpdKCXDwZ3jKjdmiK85rFTWaRPQq5Qa36j67BCVfFwPvUA85aBfNs3",
  "key41": "Ckxo9bQdYMtodVtHMG7MSgKuS2bVuY2zkCa2xrJuS2x8n1WjJiCyWugeNwGNjh1JxdMXGLJy5cY4XMAbja3u5BE",
  "key42": "3bJbAG8GkfMjbVJ9FGS9cVUguKFQ8ijesy6ifqkZSRnVKzN2BsrEkQvWZRWvc6dYFmgrhb9wxjRU8WngTF86a9MT",
  "key43": "3cRecJu69YmaXeTgpsUwB49t9YwPaA3oEyuxBmXK4ydFgvQnsSq9q1ftWQ2aAkRhL8aoUNZFRRLnSzzncmrYSziW",
  "key44": "2A6ntjBc8qoh4kDrCEu7m5FAZZ33XAgcDmj7vyfMxKjFPGTYi7rU8qmVWmfgeSquT3AiJ7UhFwGjbXYNrw759fsC",
  "key45": "DrChRKu9nAEpjF5w1unHjyxKEkyFCpJVHim5Tx7hJ8sidrYdJjn63q7n53HSMfwxxMyhC37vxpWxJfhhappMUd7"
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
