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
    "5zJfCJQy27kfLL2XKHmHP8pk9FXCxQKF7t2bvvDUvu2T9XSy5rASuNGhN7uVrgoHhauNHY6FgTLmB7c6XXH67zFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaEFBBEzGy4MBAhPWT5FXVtheV1Y56vH5qss1CPosPQ4N5VkNkbugAf3hYmAo9ddFdpZNwr9517Em91oVzhAsnb",
  "key1": "2hXsvrBMe9nAnP6nPw2jYj8A25ggDZupiDM3v3jZ371MtxYnut9EkTHon4Do17N9MkSbCLXB9k4JwW2Zi17H8EGc",
  "key2": "4wSRsduP5sduRbfkm9KZ9NVNpEgH2BXHeBCzCFf3zbTu5QxNXQ3nPYWmT9Ev1TKJgBzB51MBPS3FDL5jUBzfcRDt",
  "key3": "3H1GB6aB8gFBsXjWNwfeGS82p3JHppMNWimFBDXAJT3xsJ5YgXf3PDTozrq8WPz7DWqU8i1RZFpdgr9Y7v8GFZR",
  "key4": "4raAxcSA2xccbq7C4wGBxFxJbFhfHXWHVzURMtFxbRbFj8UUf8k5qPWVyUHeVFAAVgziVnXeF7MMbxRQikyVYwzS",
  "key5": "uenZJEi89faGJH6tPWbphgVCDAJHXeZ9NFmpmPWVTRqLB2AvDWa4h5tSJZAwki1D6TJ3VRPTPpoXRUYTJEATEXC",
  "key6": "2kSRBqmcwooukVfrhUsS1FwVBQA2r67Biu9zS8eWgtBuoGBrQJhffbd8DzgEtC1mpZNMFehzJJK1c6Uo8zTFkhmd",
  "key7": "2GNdVE2CBwZvzwWL6b6S7FrJcKJFvn3CAtK6jPpzW3TGqtaFXBEw81uqd9r2Kqjes6FznNnwvYijaB5hSvPN8Vq7",
  "key8": "5YUmPHTgEPmn8VnDyQmBnd32mXf4bst9JDjJpyUskqQssZZi2FP9Q581XY9kxEa693Q37qBa1sQUJrxWegCVaNbN",
  "key9": "47T456hi18JhTzma35F3Aef3mfGJRxF7ezazf4qXRxCSgX6e3ToGuPguxxx6j2sNfRZD6bhdTXacVE7n4N2yPaHU",
  "key10": "3KpW4R9GXT9GaKjNKARJaeMenJJw9MfiGDRgaoBAraiRzpgxXLW8MQBfMF8BD5zNEjc9bEGNyGS8Y2vCE3o1zxVA",
  "key11": "28os4HQTunTy15TzAbbngKZqjqEf9VaqZb5b4SAv7V95W6AjMz5J9WFGYSQCQo3W3Ae54joSFGydw3wA2fwJ6KcK",
  "key12": "DhBktmSzBSHWXRBtqNqAmpWgkhqk4pggKVm2tQnYvmbjn6Jfw92twgBkxUwuRGzHFbVMXT6pHvFLRjzkB6jSEjh",
  "key13": "3csXr8eFzQG9W3Kzn6vbXoi1yKE6KwAebJ6qHZ73zwxuSDqkmnjc8xJXCnvwVFk63NqtiZwedEKrr82uGRcUg6wD",
  "key14": "47zyr9DGY5LpfVwePJh8EoDCRA6kY2ob12CXsEtTuJA6zLWv3cCrPyM4JQxMQdgUPxqL38TLxbXh4aG1eYV3bmNG",
  "key15": "3WwE2VUBTZCGfW9JmxpPSve8kP1qX8BrGxrtV22TEv9SWPsG4xyby6Mqs2nsSp9eZbqa9xjGS66evVcQ5srfgF7j",
  "key16": "DQ4AktJLHM4VDQgv82FrCh9iRMHtxfpCK9HwcPsPXDNnY7nUmy1JAK8KPALTWDd3MzYGV632AUse26z9sb9oQwr",
  "key17": "5SqyqCAaqnxjWt1trRB1SmVoL3PmZx1BT44uzyQcGi2VK7gf9hW9WsnobtCScJuGd83L5LAtj7WoBtx8o3MZBnCz",
  "key18": "59tJ7F4F5uWJhiuXF53qAAWtAUoPPpMiea3WrH3y8K9WADJUakTK3S1yygMQwWDuNSf7MwANGhqJxHrNzYDNuVAq",
  "key19": "3c5cq1oe4KWdHkwn5JFH4bQi6XGqiZ5R6Y3MmfUk6JLUPbkFGZT87sGMrTu2xjM2khKSgRE4A9QLP1mPUdCNE9fG",
  "key20": "3idEdxqydhkYcP5aZphLrWREJsVHD3Z88yVxPehwAN1puRXe4nErvsV7mTJ1UoV7sc6rWPW6mMgudpcc7ydCerNh",
  "key21": "2szc4MfYNZTcYihUtpiw7oF6YxTAHPviaAU4fPrmFrjKZakwbtzfyKXjcNiKdvkkFthAxvQtjFGZ1TxWHqwLRprn",
  "key22": "4F96LoKGdBLAADSbkFDrtu7oo3dWASTf8SpP1u6jRQGSEGga82nMPazCrCMrx91WgtU51q7717rYiji333jqr8UH",
  "key23": "4PqxBAJWxasRcfdPm83uNPnCcodWwF2bJKZ48wHyyew5w381JS1WwTvtaCBiwFTTeN3evKRJEsXqgPv3KKyaRvm9",
  "key24": "3XZCdXK5xcWwZNG9LFQW4juLaVGwKXQKdgSftsK8HPRoddmfsZW8Bh3d83NPrs7jso8aNdAKFnJf1BxPbCpjxD1F",
  "key25": "475Wrsmnkj2brLPkxehCdM6D4VrpTdmCNzCdh2aV9XeztzrGyqjnkD7wmtppYSiuomjoxFc6YGg9nZqzuoEppx7a",
  "key26": "53ZrWXGEHt1Jk9RxjYqXCzQ1CL8ekduEuAmqFJbTUqPdMWoZPm6KkuzwdRHFZX4VKRPP2Smk28JGGHzcYsvEMHS5",
  "key27": "Rg6XsL9siFX7PyCetp3fJwXLGoYcdNbkN2Bq15tho4agPAvFcWhTiwShRkLQ5rhzkMBodinLaooDKANsUQCx9SH",
  "key28": "2Co3YfCCGSZGLxU8fy4T3vXEok58yBDVPi4Zc5YzbvkjmwDeNTPq2UFBqGvCxrMfQN7pxhAFJZF3AFf7xQ7YD38P",
  "key29": "2G5nHDP4m4qM3TBFQgwatG41a6nZ7T4iFc4sFBhAyKtQ3w4ubSsdvmde6gN5eEftG8tZiUm8gVDGDxnbzZBmFSVy",
  "key30": "2FgQrKxM54kGgbHEFTYaQGWt7QCxGF9rRh32yzbhtceV3cCPZEgBbM5mRL1FeqKMAycs9WTuhaHo7mnsZewuUBJi",
  "key31": "59CBFMvymbMcCfgDfC4asAKQf2BFEVVZX7GsG5heqauuPjondwc9thvVB5L9ZDsE9czXFTppNqYkAbuqMKahCrZo",
  "key32": "pdz5iroV3EabPXY5zrkuaSYTknZrHfuJg1xKrN68C5Rx67k2Mocr3ogSZ6Yz9F5HX45UJurpbYTT48jUdAGaFvS",
  "key33": "43U9NBhUe1MhuTSU8e56zErXJeEdeqm8F6cX18HuD4cX1vjweixhULvCxWMM2tT27GUAzm6o8exo47qLBDnZaaL5",
  "key34": "xJ7sGeqVGkQGK5rqQaqgkD5fq11AjQberJeSRLJq87nrPnCKMuWXdDVDCvRQE4FGD3EinX8sb959yHjLk1H3gMs",
  "key35": "5ji5UNery1TLFFk12QuaHUoqtbNwbT8dZL68LkYKkMMSyHWGMzqYJXmRibnNj3VSM9FR1Zeruxv5dFQMvRVtHPqT",
  "key36": "udfFY5GcawR94iL7TrThW2uSfqhbYFSzE4PfeZvAFpLYCXE7UGBXmeSLmD44WyxhiqwEL4JYktDAfkQ296DiyKX",
  "key37": "3sETmHZvuNDK9WytYmjfoMNvVUiwWXYtCsvM3Qi135uFKwebdgZpDkiJvhpjsUAFSLQe6tAttHRL4oyB4AVj7pDs",
  "key38": "3jpS7oKezCJb2m4qmpvpSTsCvpXZyTsHUZpP8c3y1QtzAXiEyuva5A6mkyaQU8o69fvFYdABzEW5xQfUS5yNZLGU",
  "key39": "5fLopeUz2Pt6qN7buaGoqfLppVTsG9p3n3o8TVJmuagsBvG95zGCmLZeUSWdAn1DQjWLd35TkxqTAAVuZpADVkhj",
  "key40": "T9gSkvqMXr3TsVvSMaDFmiChFnFoKRFdN6m4yBhayMWut1eadCLNDzm2oSofFB9cZnF96Sy9gnGau6hh1R71fR9",
  "key41": "5EVGdV8sCqEpRSnjfudSctoJRM1zHoPckWc5RoJTT5b63rsvcf7SJytXRGwECjSfTUtyy5YMAzrxsLRZgWuqWys9",
  "key42": "Zr3TrPAEwwKBe6a1yBZCqY16nzDpJsXP894yJbyUt3HUJkLo3sKD1qSQe1ERg5YAAm23JHPd5Kkz9iq56QvzYHu",
  "key43": "3aNFtXye8T4ehedwe8h88ZsVRYa8vcZeY8mDu5n4inmMjG4mBFLEtayMXvT32hwHBuPvs1c3eFMgPg9Uu28rt9Yq",
  "key44": "2qSrCZt4ktgWwTwBscK6T5bY8AHqjJYVXR66VhuEK356kcfdPw1h1q4b31AESvn3Wv6esycoN8fJm2CV1cd33C5f",
  "key45": "3oz1hgFQ2ZVy7pop6gAfgbtA9mFNnFhMohg82RfeitAR1Rwb3KV5A19jV72LXQVPFmmDpCjwhuEXQPHEn34AarbC",
  "key46": "XWXqVDxme6a7kJKeWtuzwSFk1KSrLdL8m98XVMNjBm9gKbiq4rLt9udQcAvXVxJ2m3ALnLzcvWoZHaRAU6yKdRr"
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
