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
    "4UmeLJ8SKcczWScsrKF3c3xaknNUgCbAXZbaqQ9pr7AUm98xr5JBAWJfDLJLVog2UXQpe6MFVEBpvoiHhCHjZkhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wGM7RxCEwN5KNHJwuonuc33ZfKUanPxq2GdVULHEpqspw7DYzgmsRRhurYHdu64a1qFGfgAJ7btNDAvC7oPkee",
  "key1": "ivqn8TPRAkCQeEmTgYYrqPKAjGUiztTFbDbb5dP1Z4MkrbARbyCLuXbBBbKBP3edYcaGyFuc2g7cK8yhsgbiFZy",
  "key2": "4G2WWawM5WPcDb5h5kJSbT3XKDivBtryakyBstfUGA37oe7udYMZkYcGz6hVYK7SXu6MPqVowr74RfmF8HQyKrrd",
  "key3": "3v45ESc1uUWzv7GBBpvHb4gxTGRsvVHk2YVe5gJgfSZv9GfTe3GU9gB3NSFg5RTLrAPRDs1u4FJUcj1oDFQP6Ubh",
  "key4": "3u1xfUq2gZPdG85QK9XjymSg7qhbHgCiFnHwKKYZGL2wKeduWL7GzM21ks5JM892Jp8jWnn8kg6NjZwDuYdAz5rQ",
  "key5": "3BxQN3rWnusWroM1Y3KVcKrQER2EanCJg2nrzhxs6EnWtc1Kb82HhZSg36HasihhA2dkMQm8jFnSbvVdiPfZSTfz",
  "key6": "4XEGMosCM3yWtQFFVr4FyQ5wdbrJBjrubyYAdoMLPGnbbu2hU3xvLoHBE8m6ZCxDqHc7VDgsGLu9HSQhxe7ESp5L",
  "key7": "3hWcvcCZVXdTVGLEF5zecmH9eFwk6DJmJ47XizCNZaPQTdNaPv84EtU7igFYFznZ41PT1Jgh2vKavmpEwDAuZWim",
  "key8": "64Yrx7L6unpaoFskHTxykS6fuBRy1GYpxE9Zz5fZU6gMhQdqGQwQEWGmGDGAQfJgTZJjwdFkPr1qjqJKPvSDNdD5",
  "key9": "3gkCUhsUB1zbaPux9rC9RekNoqmiXXCywHyAZ79p7kpbusYCHohyAV9tDmNBe4Uf2Qs4EP7ks8CKWj2agaDioWue",
  "key10": "1owrjyzUDee6HLGjQrSecjF4RbBX3znzuKhwrekdUKMa5FJ5bptjWgBE95TD4FH3cDgd9zKdNHYQPQgi5V73CDZ",
  "key11": "3ZgonY5y9xxPA7wyJqj8DTHfsDSrkBoAsFgc9jqTekTgXUe1faMA9DR53AECrtkiyw9eavmfP2WD7p9eD4XgnXTF",
  "key12": "4FA3HHA12UTrCN1MuRkePSM71H46mGSFo2NwVp1GiRJrBGFBMgPqStfCSrvjyKsfeEsADZbrJSKLtgS3D88frfx",
  "key13": "4kbTYHK5X2yVcnNKjNZ5fh1xQEgXxXePxXtouEdh3ZY5BvazB7uNV7vE8rXHkxaJukC1M4DrcMM5wnXRVuSugyKQ",
  "key14": "5U4982WhRxapwKQeg3h4riTrDToRexLHbeduCvfVum9ptTgC8cCR1yosnqwnVAzEwVNeL5s1QCu7m3gqw4nadA9B",
  "key15": "9bj1oYc63miENkuDrefcLf59RVm6DmFP6kaSitvNVsQFC93BdYP8wUQ9oxnHDLZ59vCPK7rEYgsqxLYYSP1jizx",
  "key16": "u1u7d28qG7ZTJ8u24uB6wtpWKE15nrWZvLyK22poxQBRgeAiXAy8E1hQGem1MBjcwMCCxLDLC3JP6yoFSDTUQmo",
  "key17": "5FMg54PRs9qNEhpW34cFVXCKCxc6M13YcJX2Y4jkoArZS4cdGLoTBm9hPwfmjh6kgjLnaD9cT7bdS8TQyEbuonZi",
  "key18": "4aFJPqacn6thBDPyMyBWYBj4PKh5XKhuFD41TVytMDThTBhSfeoqFiihyrfqyUwr8NTcRpJm7EGdu1LocucRUkP4",
  "key19": "55CRPRqmFs8iQfkC5NZNFcos8J1toesXWThob3DJWMQS1woT88t1kcU61X5poSk3jfdgjmbmoftxZubZwNfvXyrT",
  "key20": "3NPgV7bMPz4LpdSurLdxYav6RerrrTyJEVzgyCXdsBUJva1hjUcvFSGhjqEJtyKLQvNBuEwC5b4PWEy7FSATrpDa",
  "key21": "3FDnt5QgqKPqrtX32PfbB3rnMg1GpCuySCeUV5zF4zKzyfm9j7oohNbudiskbWFprfeANXfPDCyynYJMz6fbtPAf",
  "key22": "3Pmm3YgvPTq66A7xzH1Hk6XYs5jk861Q3SagmfVGD3QPYMWBevhzhtw8FnoPc32eRn5XJBqMwDGAMoN7Z6JVQ6Ld",
  "key23": "4dGScomMd7RpFCWKwH8y4SB9xBzFoXA3ip9J2ZVMG7fMQC54n47WTz3eXeNgQDHLS83EB1VL72tgTqCJPBMNfWsY",
  "key24": "54t5u4eEMjtvM5ZD4PYAqfyFDB7g5wvHQ7HAVWm3QHTiPox2s6SCKRQ68ShDP1iSks6DcUsG4oJAzVqTm9o1aGkb",
  "key25": "4VzNjNFUtNenTztrJLE1hFDPK1DBoafJ9aqYqbFosrofShUK6RtbQPtk5wvHz3xsiqXJLYUUtKAAfsezo8EdnXvi",
  "key26": "63JaeXonS7enfb8tmeZqcg5j8tTdhAj44yEyqQcVGd7mghr8ahnNPcwTh53Z76uC57fEM8qcLjfZWzSGyjW9eqcr",
  "key27": "2XwYQYdEaGRwK3VUM9ZZVs6dzvWr1SzNrVohc63JMMxGdA8o6TqLoJY8VFpLCVyxpPHRdUWRTqepcGp79ApuWmFD",
  "key28": "dFaFSjHdG8V8WCmKUVuqpcgUh75yQvwC8idn7HnyFnmuo8GywYFiagKCu7L2aNCjJY4QiJb9GwmqJJAWiJ5bWRW",
  "key29": "4DwmuCAp5THx3ouKPdUqJQQ64Srqm3UVjyicyD6m79gEYG42pdHMCFhGT5busuDTTWvxkxibiV7uGSAgSWZ48pTk",
  "key30": "26dX3N6P2fRxiBzkvi8aYKMnGZQEDznwNWkiW8Dvq8SKTW3cqCuudEwGSGQUSoB4zFgDUKxSeqN1ekmuxQteGrzX",
  "key31": "58YJVaoxy9oCKmYQcyhxENHgVKvm7o5aNnRd6529WtFKKv5kMjtkSdbk33scBBxDdVLQyYHEcnS2krUisSh3KMnc",
  "key32": "4tZ9khsQX8ZoXTVt9a3NATpdto43oBEt4nrGGQjmTNintwmeR9YhE1Nm6FfY4ThHrjNSxvEpwXRBzrtdBCd9maMa",
  "key33": "5K1swsz6UNTE38uUtEssVbJAYhCXogp5gaGtT39uoPk66uoYzromWC4aZJiHNchE4DrpYRQpwj2qjXZzS8EU8s1f",
  "key34": "F6NUzW2qQL42YQXcyRP8JezxStg9Y19jCuqqvnLKbYANcit3MBBfr4DkXCCfh9vrNiLytwodnNFWaju8n7ASfJA",
  "key35": "4isYfzrh5HQtrBkwtPSRx6cuP6mfJgtsrL2SDKbkFZ9oH5bypykT8G3zmFdn3sTY5HAZnon7CsThn92JwMFXH78g",
  "key36": "nYTsdyj44H3kMUecAGgTA3Z1fMMZDfehM91qssCATAi94bCMdtCEX6uNUuADZaVguq1Xk4YnjRg9hT15vU8J6nr",
  "key37": "4WLEbG71tKjZV317xTzCHgA47xQ2wf7jGhUW9bsZhaFE8PKjs8P9oA49D1ap5KjHmxh6FPJNFjbjaPUAX32c9qer",
  "key38": "4SaDovYykZjT6bQt2wejCuSk7gRPFsoHe5VtrMiibMiCh3K3Vnscr4XjYq7WEYQHD7ZkBBjj6YgMwqQxxB7fRBNu",
  "key39": "3coSxJbYRHmu8ZdKUP9RUTKEuRV5BWmitfjWAXrcFWxgHo4tyV4UEtoGHP5rtBkczD6qH8cL7jwN8XifqtBgnbg4",
  "key40": "4m1URr3KbDXZbiKGtKwQPoQP9Qghtr2c9f8fSHnssugoaAe8gdcqmKPM7qU8US8hA3WMktaKNcxL6GnaFfRrHv1T",
  "key41": "5h8NU1TpMydfL7BwNgFQS6179ta6gagpc6SWxF2hcqrawsdK3rVCKj2EYo6imGFvRZcQr3jVeGN1Ya6sLdXfFwC7",
  "key42": "3ro2uo3TaLZui6u9Te751oNtMuHBZajShhsSeV18VBtz9rAXJ8i1zEvoPfuC3dquo3q8SsEyusxADCngaaeZcdFy",
  "key43": "2RonXBNB4uFEB2fTFbpAgTXuJAfwLnmSYYeH2sikTJnMqTJyBpeLYc73FWoud8jMM1VwTc1UpykDBCwpjqwwJTC9",
  "key44": "4trZbqM67yY7KU2jWZFAoQmEGzdTAdAocxKGiQCQqGqMHtYbCKdqomYay8kx8sPC1gx9Ud2VdLAuJnTGghw6G3WD",
  "key45": "32HQeNbatzDN8fDhFqB2XkiU7DbAb2jwVFDYM4vRegWWALs9z7Fxc8fQrLcCkLMSzi2BERjjp1Yb429TP582feCJ",
  "key46": "4cSJCp8YCaGkiV1Fs8qyf5tsZkTz1SKXFLbFRXQH6CfDtJ7bYSi3TkzxrxapRhXHkiwzQuUqWPoghRhK3JG5HQ5",
  "key47": "YjE64HnZ9LSxKnpg6SXB7btF51QmDepdZUTtZCiDXmnvPuSRB844j2RrCqXDubxRAQGZvQzgyEmwVQuzaWs36bd",
  "key48": "59qsmWRCv8Dqd18FpDqWxKmskXSkBwwqwgpmyHzJYCRRozJRGAwaeeSAZEmMQfD1Va5EYzmLkNFgWknEAcJn6jV4",
  "key49": "2yDbMhyzb3JpdJM9bEHo3fiNy5zsxdLernSZP5qoQh9aRYz8bQasLmJDHxX6wa9624qdAAGYXAdbv19pz1aVfVV5"
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
