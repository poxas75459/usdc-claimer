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
    "42KLQ1QVJmuuCYPwN65H1jBSt587su97oUU2psyCyH9bw9svwhWb4NdbCCTwxRF5LpCAryj6iwQ93JZX87jbtdM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9ikLVKoDyYfsJ65kBh6CGaEYrDmUszauFpVDhRZeTFNC4nfsirvn82YRNRt4YrvoXvLbttYF1hP8qHPTq9unEJ",
  "key1": "TDW2uApd9KehxWFkr4hY5YrrvGjh8SrGETBbSQL84SAsTs1PCFXhB4RHCDRrsAooMGE8NAhuFeRM8uEtSbUKdG6",
  "key2": "2e232sqpLvtqny1SdstU9jhRQLie1NGvYHYvKHKKzeKJqVdmeky1Cz9K6aedrtpevaJL2W66Wy8aL5EZnmJZWepL",
  "key3": "EDsppPpd85hWVNZUkyUDyvn4jtSQiLev9TDTfKcPAFWPBz8ihDhSKWU9WwF7aEedmLKtdrkcsD9XpXzHDBFbRJf",
  "key4": "5aFkxsySFunVHAKSxZUPPvKVjJBxyoFzLGNxM2oYUcvQ7tQpJbCR7qEpuZqKrMDJqzYSTc4UMd83tmLUDXPN74fR",
  "key5": "37eTGdPz3eMXwkiwh7Cpv8rkizGakBmYRFumzcrbqnNSZ3WBb4pwDs66oZUCTpde1LvgfLVQ7cDL4f26i4vE8KZk",
  "key6": "25mgaSMTecTCkZdENsL34UbedNwBErMhFousPbboAeRUnSFrDwYCvGGUP5STHJen2SEHGYeT4eZtXFZT9fKtxqtb",
  "key7": "3hgTv6xXE5H437v14QRjHEAXTtNsQe2SnWZRE2rAPv9A5LxqXXv4FdbSb2nkPyJHuvC8RaxQZUhAQrKnZYXpQaqx",
  "key8": "4TK9bf7U59tYtdUYtSvkDSiAvUzJAs8Zht9y6aQEUWJeWeohk4Qdz35k6NUMbVb8ZYJFf3TAJ3oyHdcZHuZ9qMQ9",
  "key9": "4Si18py6JQ5d7pFz5krQbabETACbqvVh9eMYf6t7jq8PYSH73a14bAS68raqh8r2416XmbNhKuS7fpUfQKij9Mek",
  "key10": "49SE7AWcc9GrVaU6hTveJVGvFm5eocipvTsy312rH4kY9BXxc58h7c8qzDet6jwx4eJffcTBpfidYBq9CkBMkR4P",
  "key11": "Z3hCfHF6pPdEKckKEqiJNji9xjgT6fNdWG2rtj8ro6EPsyPgmZRJgjmdhk7qU2X9EGtHfyV8noDpeNNcc7Ch8eM",
  "key12": "64VecYh2e97VX3jdTjYAAV1WiLgta6yvLTTRZUQYsANrbZ9BuBvKpzKqKqvTZQ6Lb6hWekMUZQQyEMyyBpWHJSGs",
  "key13": "47geXGXjFbyH7XP1xEgKPP5Rb5r8NpEuwui4XiKgsXTsvfp1wo98RXxwFiGPdXvQE8vJkpwvcGRYzbKwtqkVF8Ro",
  "key14": "3iMZCUyVDhXW6GomB5AiYeuwTpRgaTNuyUAxA44Q34EYWTVCMHNka5fKtSpza6YYzyNA8NDEqEaXdkCCBmdgEaAv",
  "key15": "5FdZJ7ag31um9tMrPnrdChfYATE9NCp4C3KQmsWfCV5v8DnhRokvp4LLo61f7mEUGyY1i394DiqAjZJFKLg1sn91",
  "key16": "2eRKthMJ4rprpANXAdF6GKePURznqFXj5rjJCVq9hC3ZLhYPZ6VU7Hvuaf7LYamefAKohpdfFDApYWb2tqSYgbnF",
  "key17": "3xFRt6BJzA9egxY24mYNfsByYvMkUNKK8ewEiUdQs5Qr8mhSx56Q8GYdN4WMzCPyLH8szrUZyv56qPAi3tneZ9z7",
  "key18": "uf8mc34gpi8fDoLka2kM7X7xwZDLWAyCCTcYudSUggS46TuV8ffie9VSLPcXEhTD8qKqkM9uSCjqRE3YJy5y7rK",
  "key19": "GyQqTqCUfk8eZiC5xTZF4NhadVqHEkEMVgGAwxS7bHJH1rD1Mu2HwhttTwgaSewXG9poCLgTN4phCVAm8HBiPnk",
  "key20": "2w5T6LkEPzRDsB5aGubbsLPyL8c6dE42ahaDUt6ejSRrue3ibcCxMHYTet9TCocfmLwsMqKzUBfKh14fmf9FvQw",
  "key21": "3joTVj7RdhqobaATTo6VTZBa5fFoGfNvBUQTyD1QYqDwPH4jvN7st6AQSGYELsw8h9WAs7N33TPbpW5HYyLNj8Nq",
  "key22": "2spDMVi2YsGBXeAxQmbpZ7K8ZLf33EdQN4QwFSgmQTGWSo9FaFsd15GKLCTbEo363LAqnZXQK38KUFz18Xh51mFa",
  "key23": "5RHjLvRT2YxdZAwTbMUBHgKc4kTYb8MNteHFYZoJAtfUFExvZHTPH5dUwxorstKzduEk19vx6Y8KE5U16KR1H1ZH",
  "key24": "4irCM6V1PUDHyNoNaJyLGYwpehCAqgjZSKNtuA4MWStnxS5FcNkA8Qd3QSDJgstStGC1S1QoP8RvVLHj9XhTokHr",
  "key25": "2dCbJsnbL7mViAD5g26pHkxznUBxZ7Ku3ScVjjZhajv8PKurntq6ZQrmnhik1KqRiXTJx6eUbCNuPfvA5iUcribm",
  "key26": "62joEvH5ZWVNGCPYEJ7YTrQyBAiCaXsepKNbTs5Uch29855fALYW8D5TXcvtBTmE9iNMDV8Vae6m42yMJ5DBUqqR",
  "key27": "4FcDrhRrkk5d3f8TeSyKHjpFXsBgq6tt7dYRnPQ2snRqjt7WffPjAWzZ6yH7kUuvkjwbofbJ7CeHwK4vLjZrALhC",
  "key28": "4d4etF6Py5pc8cDGE6oPHJ9cpo159wLn6YW1ZLdmow9P4HYUbcftjSeuZDQHE9VQC6eVopMkb3sH7c6tF27yrcxU",
  "key29": "3p75GroZyjaeTMRtvpN6ZqtT4Xn5iXpAsu1De5v8bEDNRyGs9cjs5Uif5wHvPv96ggrp6fWHgZLXtcKM3TCTzJjy",
  "key30": "3nK11jRsvwfYzpNVKwcNqouHKo65bCbtoJvfgJNSkxa6bBiP2ojS6StTDoy2n66aYU3dPeS3c9dueY6GY7nuh6AZ",
  "key31": "59gSucaTE12RJVvtjQGQyjdpgUiCZrrNbHvs4Apwx6gJqpmxYoSt1zBBzMRHCjMYs6vMf8UFw9MJ8hFAdSc5xcru",
  "key32": "2p2kq4VaJNfvRh3DarnY26PNcj6yp7ESfqYPKgtn7XKjXtmAQhqKwacRcVnFzzNwKe1iLW1hdaYZ1cjADqgzEq4P",
  "key33": "47YjDxEfb7pLLMSGwb1vGuNiS3hsQmwbrgKsxom75K894oDGZV2cxvkpatFxbY3cTa5mNiFeMiwupx77Kztck3vR",
  "key34": "3P1H2WiLZf3kKxa81jFw6eTH8q8bBCfEtC59G1tnTNzVc9rvDYCxSSTsP52QQKRa419WZ7XueghP7gVfNjDA8SSM",
  "key35": "48b9C7HTXqqeLQfJPNRUsQwv76gKKomsSinRt6bRpeh8KMTpeUsECux5hagZebBr3jL5zt4iRBxifHQJxbc1HVhb",
  "key36": "2gf1Kav46SRzUUeKAJ1RLwcV8FBqTrDGWgeaDxuhsB2GZj6HnaKQdnhXvBrDaktJGEgFcjVjcD5Xn8uz2XQWJYK2",
  "key37": "4qvUMA8x5Jtada2q9Finb1QTX2BnGxWWJwMtGSwmJWP6a9j8T7hKdDSAz7SGMZNMJ2sP9W7Ty1vcyXJnqf64XrJm",
  "key38": "GzDJz99bQHieGnw445Hgb5jFa2TuvRpA35b2gNhBfrrVK75RFs5dYa9DSram7HEmpKFiKducraS3MfxKtAXMJw7",
  "key39": "5RTvBWjq2vC4ZC3BmZkpDhSUiYy5HuWinfWXSvUuPX7Ss6gG5bsR4pZTey6uPCoMyPvrvHYapnpjtkiewTmPdqTw",
  "key40": "kLdS21gM23yJXSb4Y2pASrKc6R1nLZgzeCqnh43PUwgMGhvDqcrgY66FMcYfctZzKSYBBzdPkof7uRvg7AMWbiP",
  "key41": "43Ro8X8pthGRw8ykqRJqQ4fFFrNjqLWAmdisxBf4EyX87qVV3oiczHz5f4eqR4fUkRW7tfsVd1iSnqj2uvCLm7jd",
  "key42": "3dvazTPtmQZueh6vPEfpMjjYiKbB16Wvs1TmJka1b1RhoDVRpc5yxFGTBziQur4N4ewV6eQHykNMK31Vb5UGWKvB",
  "key43": "3bgr3Kt8TvkpPZF5VBJaLQpw6beEsB67Kqor2C2pR4SqP9iZEoNR4qxQtAqrWimqbdPw6ojscdHn4VBpHYGAttak",
  "key44": "25ZvTXQ8FiW1fqD2S5XFNCsU7kEfGHcRwbpjLx7oiMYX7sDPDt6AEuQizEhEHj5fAzm4RKjpniokrAH9W623Gv2u",
  "key45": "YRxYDuuw4F46eBwzyPspP7EZXdxPDqqahzbNMq3Y7nuYbo3sAApNi5jvx4aTyrBgNiRNNV6yaNhHwQXSTkYsxhm"
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
