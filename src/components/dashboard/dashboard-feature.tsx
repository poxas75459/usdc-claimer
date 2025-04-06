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
    "5vkVe5dY9bhNGCGYJTVy4UdQxpxFGANFTtkxPtUT2sTuMJXXQJar6mXrDQegF5YGqakrJbksbH8a9WzNCUq2N7Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMruafxPNpt4SQadUMEosqcgm4g8MKNGYQvMSgbP3qkSxEj335UtdQ7qUsaNjvGkBszpXwCoqUTXGgpmNtUEzaE",
  "key1": "2rS3V8GV2VbCZQw41MN8gazRmqfNz7mKG9omhYF4andNG5dVzv9Bx66NTVAEyacYfAWRfop7SujgUbdAPLByzNVj",
  "key2": "LLdCV6rpLfkMA9rQshf9LenQM9AShxhVWaWL4rRo5uXMFLkFvpQqz5Mk2QQcjT3tKreWgVbQZPJnavGrieJRgDR",
  "key3": "25hBdy4L6cBTtceM2gLJbZCV45iXhEMKQR2pr8bw2kb24Dy32uNecSGwj8EP4esMX5sCXUyvSwiSg49fvsaaRhoG",
  "key4": "5XNbv2taeukZdetBVCsA5tTGB5dynuTRvu4Jhxw2p2wJJ56Nc4ADJN2nU1HwVHdzHnXdrbAZDrawJ6uWwkY1izhA",
  "key5": "CauhKFdFFnxH8SV2CPsa7ZW2aKzGfahiejdUUfJaE9mV9DeUmpPaBKYxmCuTyzHe3oQeH5W5wgwhXMAJCpWzxFD",
  "key6": "QXwp7tQugvCtgrWYWEAqcsoypAWqNA6CKtoWZzFCe1ntArD5F8iXxRNDjJkZX22JR25zQLeyWrX5em8XS6g398t",
  "key7": "4hYHugub8kChAJQ2TKXxwafGhPrYXgF4Us8c7hD2sBejiAZqp5wo8YSNVuRT7xQD5XfmNepDAmooiQWrzsui7wwD",
  "key8": "3SDStyUv32hWXndrXAbUjPhfEeiMQKMnFfe3iNZjqqEoBgtMAbjSzW5upME6dG742TzrtygisQwamJs8U5VgYDkw",
  "key9": "5xinosAu3jucGmv5LRSrUyDtSgiSxUayNyJ3ZLSKhtiJXm6sCgcuZsbLDPcUKstWxPej1DbeFwKDmKRujrD5trHK",
  "key10": "4xys4xTm6aUVmHmrn4F177TykJpGd24bHyhTQaMrayCRjQtPPn6zoj3bEKdu4sVagFKa4vf1ybxbzE7gdwGbep3U",
  "key11": "4cPtquCHHGVLLc62PyCVKprVGzGc2B3ssKupdj4WL37nCPw5mer1pE9aTChFVcNVaPdkpxxozRsmRgaKT99CPs5S",
  "key12": "28Wc8puCoA9DYtme3kdbfqSJSx2wiyzdDgKUVctTbBekABsvTrQygMMvTM6MzfKtakFEwDP74FnUPyewSMqFbQYy",
  "key13": "2yGsT4Z8srTWqPKLGrz3UeHoKa91Pdij9gS5Rg4U7zGNQyy7m5LboQdPySdvtK8ppQnioqahJFH3vpMsfULwM6ET",
  "key14": "2xt9JbxRj94z52XzxcYG1cLzT9fYQX6asSSkeWfeDCrWYWPeUT2tEoQtbAKiAx6wp8pukeDRky4qGQUjF4TafrVg",
  "key15": "34hhiEcTbCiN7MapdwrjjU5HBJCCDiV2y2JkyW53uSZ2WejTgh8wGLC4GsC9oFy7WPXdvFUpRkRwvuS3J1nSubq",
  "key16": "Fq1yxn165uHjhpYpUyjd1qfimwWNM2J6GPvxZgxPjZKfpwnRuMWBx6aFq34GdsW9Uw789roc2SSs6wPVNyanWpz",
  "key17": "2vytpqmmbJDUjpLHNT6qxHH33FEeSse29XRpFH8b6L6oqKNteD6RL7zcgtGz3yJZjccYy9HmS1kSWm3maU5CX6FD",
  "key18": "2k9W3Bh6hxBTURHACaxYXh65f49fU8rT4fGHX17asAwTBaWkXohcrvvQ9oV4EpWKPXei5RP2eFibTXnuacnzdELn",
  "key19": "papuivruArAPt8rys6g9jXmkU1tiW5P71ZcZixxmfv3RdFVFKMJ4b9sUSLhbBCeij3BCYzDgsAESfLpvfHT5ebe",
  "key20": "5H1YSjZaDA7h15c1xT24Dt3s4UydJRAJRX1ySbL88JsW5WSk7ax3nFKMtKEwbBPY6NFDiSs9D7FtZkirWEgC16MS",
  "key21": "4diz8tuf6RbVcBB1WKZYtjPAWEt5YmNhfijhr95ParVBZQfY9x7nUi4NxAxftuBXwzcubhzqzNnzUbfXq4Vgmixf",
  "key22": "2y3cJ88vWRPLV4iKxDQ3m3iyt35SsCtvFHWm42oNrE5Vb6DHWTauDJg1cwU9AhdQeLToqZrprdQfh46hihNRfemy",
  "key23": "4w5DGUdjzX3RN3mZkiPjp66X6bppGsCJeRfchA44H1EkraXoLx1ZT5m7btNcdAP7nXFD1Wf4pxtvkpdbhvJy42fv",
  "key24": "4j4hNeNzPHpv2cNbxtJSvhcjVLQo8PiyMMMGxWCn6Up9ENr9qE8LYUnxBDRjLYkcs1ohoUrC9esxT6Z99ojobYEU",
  "key25": "4QoVD36dkoWzRzVtjQMWpS388JG59L3Frv8fLEFkesH4egWBq4BMjEdiKgQ2CTU862u2zYVG5HhXsgAWrj4bJLEa",
  "key26": "5wF611X3LMCRXue7PPQgXiUezW98UjsZh9WKyEY1SQHQnK8ntoGipiNuNRgrrJPiGraiXE4C9vq3EJ5Zphh5NqGN",
  "key27": "5FGsxHuwxpCpX9AwGkwnuuVKh6SwXiYFqdj2DQwraF6YsCpCs5XLKsDDQyZCKvfDWJVcRLJ8sfgVTRG5QQJF7qF3",
  "key28": "425iU9AP82gujAh119LYrVs26CGjmUpsZJ7CiCxhgGLNuDgCRxkHpetoyJpn9F8NxKZaodSTCJhar3giU2CCyh5v",
  "key29": "3n9SiycSBDdKaXBWVEdGH27UN1QCDuyCnmznwFgCpXVbegS4d8hCXpu1AeUF5kZ7dMyE9MHdem2GW4ay2qQAPX6C",
  "key30": "2gXKJyD6X9rzFPgS3weCnzXbSFRXoaWg21CojQyKp4KPph43SznNECdtX4V1gKhuPFGD5ZG8i4bdqYoMBsJvymKv",
  "key31": "5kDxRG6sxt3vWeaAmFNPsYTZ5JgchFWiAvrk1cJi4ZfqW8WyPMWFze6Ld5QLG3p1UMT5ByhEbjqvbc9KW2eRP5QZ",
  "key32": "3NiBFcgjQvk5aB88DVtr2e3XMmVHWyKPQsMHufXvvNY14dnYctyYAmyXU7vML3wDuap3aRayV8j8TS8XzJ3w46Fv",
  "key33": "48MfLcU3kvewW1RzY9D5VSFwBbDkZLSnw42oaWop7su9ZnMzh6qg8Fm4bYJt5q3WKM9LYQ8eVaEHcpM93oAgx17d",
  "key34": "3ufTX8df8FjRKD7fFbYgcqUZLbXDXCrB349ioioFmXrczmnnCx4LM277xht8TDA2jcdX1za1CGTN8pBCZcDuPCJk",
  "key35": "4x11ZEjkKhfNHhcrSRcVBJaQ9TuYJKVQMKLTjEVrcw3tJtT5zFrpRC3t7SvengiQ61dFHN91SmoycGf2ALzmrbh1",
  "key36": "Ud662429DQTXfZes5nCJJvVa6RZEKy1bvUiaFCYg72QomAwb6YujHeiztZBFwoWiKuB3zMwTo1RrR6jj62K63fq",
  "key37": "4Ei8ytCKH4gt7iGRsw4dsTaa6eVze9pXwz2J91L4eeYUTTZLrsasq614hkzJiGrrvrtmckE5tksMeFrFCPgesD3x",
  "key38": "4NimGQifMJtdo6xfDt7WkSZCb7Rvz4t3Ag645SnX1yvbcE3Y8a8ENDjdHtx2Za88bDwtC8vkex3sj6yVWSybVRVq",
  "key39": "4mJvi2bSpKBmJm13iFfSekc4t2z7Ls8uJG65jFBv1vKW89kKWUGCw4bmrJUVPAVdsHNRVcaKT1GjvTUZ6AVdjKtJ",
  "key40": "5twwkjNyVUACUEZ6tjz5zeuPmbw1nSF5DeFCvpUvHY3JLLZdvvMCBaqEhPh4AafWFDBYWdDo5bj7UXLpYLvVwtsb",
  "key41": "4hqGhWk9ChTiX1zQimQe86GT4mZ9trcXy2UisK2X8noqkx4FmEjA9Sj7je45SrdgXbURZZepwQjNfhX5PZ5AcvMt"
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
