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
    "2MpRF3iiRjFSbToZdR6STHF3GjSvYAQEAtBxQcsu4dv97R4gchJqKckMGbLQrQVAAEa2AEsUmtjeMi4QXQ74gbZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLxwEJaeXcwqGG7GUCZKPhxbAiTiDdfrX6BAYnF71DVkD8nZWok6PbihzW5xsi7aXzCNC4pSYQAuR6qCpEfN4BC",
  "key1": "3k45nBZNY7npz4RqFugr1285vGLk8nwpk83XVTFYJ3Y8NS5xjt3SAnNN6Nr8voRAofncYrjgc5yhoWZZQmjedN9j",
  "key2": "2hymBjXaUnLUaS3aQu3JrBZWGwXwbrLomvtFJB8n9zHK1aPgGyAASWEo9HZJ9qCtKRDj3LKB3wDfhM6mfiDge32f",
  "key3": "phnwUiHxuEcKd6MVNmYf3CrGPtvXenyVbteUKzteBEyXTeHseDSdK5fBNCzhSVDDrsN7sSUMUTc93yXQwG9DXDo",
  "key4": "51GVp6wUN8tVy1pRg8Lkxos42NZFR8AsFrQSwPzjEk8xY9LgKmof3bVQq716hAuNiz4Nm8PXyj9dk3qbPnzKTHuw",
  "key5": "2Q6HfdbZs536Fd1d5vcyY9YAhPvbktvfy7UNQkRQp2qbrkwPxmYkMfHNcwSkcuQtqUm74Gas51SajKAkRgobsusf",
  "key6": "2S3GvHokeL4VQMULXBjNoCfEkSJJqD8S8ZEJFCJBhEgRhCV1d6GYzTj7wAjCEUKUHj6tC1mLHy8XX28dkwyxjLhg",
  "key7": "3FArRxKb4rAvMX1vUouABFKNTreTWL3ZGkFixymz9t1XDKkAyZpPkc8T9ZXKsnsvh2wCe87KirTWF4MkRJ3piBQA",
  "key8": "3PqzPHSoWp32QoM5f9hTQj8urEVtPSD2FTndXf8YaNeRmTcP17R8HPuMmCuXuSaTDxYP78S2KnLLBh6h5ZHv67do",
  "key9": "2yvFudsyAHG6aijTcj57xrz6cjBVm6EtWCBVuhy2Rbp4hbHjeFihofds8uQr3bW1mW33qGD2stCNmC4myy1HQ2SB",
  "key10": "3CF9ZeUYGnfFdc15zc4x7fDrv7JSDVsD5FkAo8RaFsi9opScbNTErFjJDfb3zXGAvTqP1nbVhUyAN6yEL9rc5q3A",
  "key11": "b9yZs6Z1wL6nyKZTWmF6EPv6GmzyP6ExXVv7CFc3nyieZV8d4fPQjS3BDSV8bz9jVQtpfNpQDeFCKmGP7vayEmS",
  "key12": "5JrkDe9eVwQQHccLk4SnWR5Y9odwCkc4WfxXSwh4e2NPYia8nn55rhWtUSdhEYsN4exu5z9yih94Xs29ozYaX2eT",
  "key13": "5YAmQNJo41FHpQAosKuWgLXU6fT3KRkfyW8wDWFhkFdW7GKerYKabJkdHxhekAkNMLbZS8snDqx4jbzxazKt1DXz",
  "key14": "pKAwcSWQVJT2AbE7u9y9thVtCJ7p5dJVK76mbVtkNeujHvrq76FnG7TPQggQmDRGmfYuZr77ziLA1RXLpvGrbcQ",
  "key15": "pt5TriRuuyKUFtjVvKyj3Vq5Y8aBLs2YbS7DBLuVdX4jbr9R1NQ6V9DsjXzwTJ7qQgunbFiZuAodWXjNezF51ZM",
  "key16": "3iVzwuxkCDrZAAi1KoVEdin5NoBQ6LmZ6yqPCERVRmHvMiVYsRmKuG1r1H1X6svC324nQ5tHkbN88QhyHxGpg8Pu",
  "key17": "4TaYjqfo4Mpyk6EnGs8tU6FHKGQ8KycrGDz5c1i81FLKrsYYkSjCjFNp3ze7dmLzpqSusdkP6dGFSYrycUcxCmDx",
  "key18": "4cjJNMnKfysj7HpcWZoEAGKYHmJLFcgS16mM4kwmkzu2NK9mFq4NhhMSUfqoV4kSZWcLTfViTUqXVGLnmQD3z7Kz",
  "key19": "3L3ZQuEWaj6wJEdywRVqXq6ChkDjS8xjrk3JARgiW19yW8GNQuqzsAnq9b6k77H5pGAHoi99Zuv5ynPtojkpR1Vx",
  "key20": "5sF5om91PkeZaDhM2wAut3S599N5C7JWQEq8efZWMHdBW2FBjDrrC8q1MU95QNdcGbBjwXKq6Jc8HRmv7vcBwRZ1",
  "key21": "4eTe712p4xug1emhKKwwwD5Wzep2nC2YD6566m61AdgUAy8cQzaQgpKncmdUucymei2YMdVTbeWpLxqGJTN4TSPi",
  "key22": "2cnPNKiKodynHijKZzgWbmruaStReoFogRRPZD5g572LLpsHeyaBsPHMvxbzU9he1D3LKqowC8Q8tJv8UuvMVHJc",
  "key23": "3sVPkdV86cAmHzdt2D2gYg7mRPWxT6wwN8H4yTWk98SBEKVpT1oSt64SUqmwKjfEdCe5gJ6oXNKkGauxhJVhT4u7",
  "key24": "31yvnGZ25rtss4x22UWq85aeMYx9R6tAdq7T8NKgJZXxHL3mqbpTcEkf18xJ2VcrB1LPYKeciw22wS4kmfSm1HfP",
  "key25": "3YyRNJ7AWMe1ikpdncPjrSTsbbX4NnfvJHym8ymH4K1pustqEKFxn8FFZVjQNXsCjgU6DqdiXXRLmf1VpsgF2afA",
  "key26": "32b8EwTxCSw7j4peacHM7N4et2URh8MRKrefZLZCX5CUyc8xRXqcwE1FGrqS3eMdYHE4FgiscZB36wph1XgXokkM",
  "key27": "5LuppSEMLUuyeWXy1Y1R2umN99PHqR8BTPmH2R8bQRB9cfBdW3vbW9P6Zn8ihL8aZguMeReE1YV6iPS18vz1zP1G",
  "key28": "3N7g8GEL5qRzRLc9mXSQVQddD2fvogiZ1LKp8cqBxzL7i4PMqzvFnyoHAAoTKncAr3U1ibKGvWqkL6EXXHzcwQ1u",
  "key29": "3Eq9zsvkD5FBTrQRpfVo68mur45jkeusRoMirDwagBn2PZ8FVELbeXdgKdidXSZenYqjWDECy1jx52Dmu9yhRUSP",
  "key30": "4foEqSoz9vJqMpL8VjzH2wFvWPhupzoZtVVp2T8xtS9tLKjHhz313w9keAdc9FNFdgWwnfsKazECtFk18bJwHCet",
  "key31": "5dzUjZCJjDRLmc5CyewFJ2bB38TWzB4GC5wEvh4P8f9vTxheWfPVaFibtpWBjskheN61Rmmc9crMV72V3b4Bn1pT",
  "key32": "48VYpzrQkJDzhEDqs4bVFpT4UBhWHJivYCB7yFBGBT3qGJhaMKWaoKUBangYdsspvpF7ZRgduxE1rUnwK3dCdZQu",
  "key33": "3bJLxTUYsGdZNJPz1Vze8YjpceGVPu6x4ibZU1KyeiWVi2JxKedMKiNBJKZvJxF9wzHDdDTQeHX4GtDpanKZRttJ",
  "key34": "4fG74J5adDr4HuY823y6PUBkQuAy6WDAkMiSvAojAPmXtxh4s8YBTbxBxhUVLxvvUEJUhnUuzyXQihUooZfDq3Lh",
  "key35": "5sd2LhdsoZQkeBei4py6QWzkezT443gDdVH73EW4aJ7Th9Esos7rKua4sQngXC9ytqeeYqPyzD774JPPVm2eLees",
  "key36": "5Nc2wK2j4GLiDkYW5GJBssoHpDPjx9bRSwFyJ4wXEpcTLxSw4Ng5UB6Tv6WGGrj9sKxMkgA8LfkW5AQFrz67YcnN"
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
