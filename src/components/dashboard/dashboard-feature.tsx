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
    "5QVqKAu14gQMzpHfQLev2Ue7A1jSJq6mPFouBYgAyvz8V21oLXxvxrXDMFytJ6RiwKnMZgRKd1spNim1Q9gzRMsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmZkSgE71254Xbrfd3czEmwBd5dWJ7FYibXwZDRjertv9T7RTW2bMFkrjc555DHodLBdcqD3DyCSAcC1cKAkbSM",
  "key1": "2sNYRKXzJ3nCpoLkTQ4ptZmiG2J2PDkWs8c2duRTpAtc1kXRPCSVRDjvHZjC2BC76hXmHtjNzoPY2gpyKcq4DriX",
  "key2": "5oGDh5yw2PGreachmyaV4k4oKbmFe3fTmBdsEYC1VjQXGhTvRbvJwzgymuKPsNQYAdkxtppfZzZPcUihtEiR6yHi",
  "key3": "3kV9u8WjTYBRx9HtcPXvhmhNFMGbEgr35JH2iAhGpFEzqnE68Mp9me1BSFFtGDQXFqW2bZzdYyF28KdDaqqhbZkh",
  "key4": "4jgS1T5kpuk2WJPDSwT3RsJ3i2PYxAyuVZ9Bf8wYQbMxGjNcQ5u4L839bmY6eHPTA87wg5Wv5QA8GSCxUkiHqSkb",
  "key5": "KyrbhdwyFXHSNJs6PFWGRjjwsqs6UYamZoREijKNTH4H3yhySzLXRNciwEYDbZEZ35Vo43fbZve69fjMysjEyNM",
  "key6": "Y1v8FXWkiia65c89REf3G6EBXuoZRXU4r5arpv4DHTecVK7KQpNfdPBn4YRFLY6vRXJVnXmQ83JjaBYB1Yd9Lvn",
  "key7": "4xe7qSCSpWcf4p1tRDfgqU8tSVUK91qgrDRoMAv7yBum4b9FhqRGRx8tFKFoq6vUdUU7PtSoX7sADYdozz51DQ8Z",
  "key8": "3FrkrGDLdZJPCf1YVrJrQgh7KHFqBnch4Awzmohisru49JupMFivD8FxwxSKtmQi9pXbyXD7ahWq5YyXediyfZgu",
  "key9": "5ZJmUZW4zjeXLYCufUaQJ6jtk8cGm6dogsD51ncwqV3RZpwVGmUcYSUh1hrKkyQdg7AuspANSrgt5LYmjrZrBhr5",
  "key10": "4ySVFToFdzWTZErpDeFFF4a4j91RhXx7Fnp6ZU4VYpcGvoa7aTgbxMF94NdGT4QdPvMAQmjgr9Tx8RknKs6fMsKn",
  "key11": "3NjCHT5RxNxkHuGwxsd7x3s1mRyFttqqGmgiSeMqoyxnrinr5KWrXCPBwVUeaqVwh2sY9suvH89ww8UYTiWhoyZq",
  "key12": "gzWcp5eVxAiQYX7kGpwxr9JmGttrUGKhFSzWsEmejMHUgZzMpoGhef1qvnhdwuXWs2MXCaBeRVeYtD2yfkXsVXQ",
  "key13": "5UBKoah2zZA4DgnD9tUGFithJEL3YDgYVaeE4NKZRjmHHLfkk2jiqEVD7YkzdoPWnWB17qu9bTpSNoC3dL3StePZ",
  "key14": "2oavtCf5D3zBpQwBEVrQ2Un7YDChd2zK22JUCPPYaCqSxWeCmdV37kLPUkMb4LjdkzPN2i64t1gmnDN7U76SsTn",
  "key15": "3zgh5FL7jKe3D99xuqhzkQb9TBAnPh3AFxCYyAS6pNdogS4W48PGPgT8EStuLZTqxpQWekfwuiMYJN7U3B2a1rqA",
  "key16": "3tcjiaxL6qqiccsXsPV5tmKfxuGdNJNsVCJhHCAR6LMadMfVv8TAd1oRYMwH2uBT94QMk2BSRGatq8SLdVqxkNc7",
  "key17": "UicytnqChShqacigQJ5MRnEVYVtuBXCU3QRoRHC2C3e5BpD9ENwWwCjLnToxQjRKy9NSNdGTKUoaZHzYAEHQqK3",
  "key18": "QrfPRdpy65AwVRQamw64uhMx9Nk7kSFwG4tkS42JmFQVf159vCqkhW1euGTjeGtvdS9Byi77VJbaaSspVLXwybS",
  "key19": "5jsB8hbz6u99rKBN4ifuaMytM8nvYJh2Y7PCUS2qsXZEQDasBPMrBh5vnFf5bvFogmMxjpV975hyd95eEikSgMSj",
  "key20": "2NS3nej2ehwUi4HfqfN75hhPzT6aGF9YeqyY9vGbkkj8jQSYbQJ3JnQYVxYcsCk3w3jeQypwiUQBhDHFvnPeks2Y",
  "key21": "5sUtBXTymdbYCbRh6Aawy4jfGdtK39JFMMyyFkM7oVaX9V3zU8tdBx1mwj784JStK2uawah5DspmP5SXBhvAkaop",
  "key22": "3TZUjHVGYVJwsGMsKJwdaPD2VxoDEGtzETSGi2rPbXo87Hntpn3fJqu7Eq3Ph3wPEtJZwMva4TmiUnvdo7zwprTQ",
  "key23": "52kbGXeawg9BGsMgHqorbqySNZhkV5zZQPQXMLpCFoWDwTBBY6VkGuznx9cN731Do4j3eno9h2g56djWZKfdsbzC",
  "key24": "rNaY2K7hW1DUnPyYt3Mx1J3jcyQ3LQJoMQcawLea2zj5mp7h17zuQ53ZVEnFKuYCEu7uXQRcpbz684cahifCSjU",
  "key25": "3AWFJBrJR6sXhZhyc7ryUtVHaDd2EvUCiW5iYAomfqE4LcjeVbQATZAomar8Qrsy5ns9PsC5h94FuGXDFxWDLYfd",
  "key26": "494XqAGi7FiuxjzU3ofRES2rFBbxa4hcoXnYzT1TZAQ45NWA2zD82tt3gLRdDpoFBJVYDQ1wH5VSBipzfWgDHxCb",
  "key27": "hA2x6n5XD1oJvuVuWJ8JxumiXwWJaMEzirMmf7PCW5A37LT6upxc9coTfU2H3XfEBtzQ5C3n5Az1iD61dyPQych",
  "key28": "4DsupcURjtBS7Wov1Bw72X7kfmYKcHqB15hQwBt3sky9Jen35YZXhX3YgnqxwepTWUYPs246xMCPVQT9W9UbfU3J",
  "key29": "ZW488Bgy4EKnBY1mog31S5ZUrz8EMqmG1iCDsBXgz7c7N3aGNP2iC6EcaS1rD6DD3ZZxdGA6KgnJGm21f59z7Er",
  "key30": "VkSBtjiETWsxGyZj9XG5oJYajEunszF19KL7aVmsydePfQznLYqCgtU41tDUQhw4nok8MtEgXgRDBRQKyk2u7Gb",
  "key31": "3VAK2pDgHYcRCXZRrFePtgvS6KGisd62E8KdescZoZyqHxzgc1sA9Y54AppxZLwQkNqeawsVomvjLan4Mi4aftmr",
  "key32": "5W3Jv8wwzEAm6GQ6sUhYGSZhLVw67exbm3xBarpBHRWCyfQNVPVezxihXHjELRvLQnyrcRtvCgkAo8G73X9JbtYN",
  "key33": "2QJ777J9JsYLFyiymXKKZjxksTb7UHTWi5iB1PNhUQGehjHrTEZdL7AeWCd2iavSD7BPwZEMEdpz1epjSgdBA2Eq",
  "key34": "5jt8sJFeM8H52wjFVdmBmHiT2ekY4Q9JtUkEYpDG97RtZnnaeBR8ygGphXUkA14Yvmi6SfxxqZCFFVkWv9UMWvvy",
  "key35": "2nK58H9BASbw6DaJqhPWaG9Ntkc2JGupJwHaDMRJHX3mzSGYa8BJhwh7gndug1fdcNc4zkmTwBEFTaYJ4Pz1ebsq",
  "key36": "48PGmKXhfRiNyfyGE3EamgK2EGw8wJUZxkt4dqk95qhBupYXMLoAyXYqrQuqHd55P1Ku7K4L9LQoyZdJT51S7HCa",
  "key37": "3cRRpWV4Sy6jQWmfvjSHqFgPF57PEMh7jggbR9XABZiaFdxam4mh5C8KkiefLymX3taTgmTw4AJontk9TGTLdaNV",
  "key38": "MJcpjeEA1FwACbAqbrJXwzDcm8G3zULPzAJeBvR9ksf438CVJyvtXeY3h9VcQz9oZuPjW2TnNMoLfrtKQGcSTWy",
  "key39": "1FREumNwgsHbaA6jjkCUq8Fv31CATW2W9Sd2PnMqEz34cFQJG72giWFsC4nRVx12eA2hxhBje94cnsYe7EG6F9T",
  "key40": "4tms44PLosZyVTGiN3CWZdJcDHdMgXLr6gAHJaTt95yw58VgkQYqu7X4HFZNNMYJXjUrUc8ZEBJhNG985GgRiN5S",
  "key41": "HLVbCVUeu3bgYumE38469wQLqarH4AmmpRHrBdoeCNnXp16RiyZXrk8Xejw3eM2pM3KQhyJuegFF7WBLAniursA",
  "key42": "2cmM3XWtbZXXnFDgWdUoj9puHAYKrY1EHGMeLkxZu55dF3nCcA14AhzSNUrAyu2jZs7r7Z83uDTqS8g7Z8PP4nvT",
  "key43": "56XuzVVpKp3NL7q4MqWQEMrJ5VJjYrHTkVTWmL6XWi31iSz2TvbZJc7fDPUMwa7UnrY4M6gtWkYfCdDNh4QHurBd",
  "key44": "2p58ywq3mDy7SDpToHTpCZEXT74A3Du4rtvZ34atK5BsEe88T6kJEUt621uNpBxbj4RDZdYoN99QLqB3RGhzRKDQ",
  "key45": "3N959ZSW5zr2nZAKqC5VsnjU8qd12itNqyftdNjFJZb9ng5iGMaoHehQ1nbomwhFj4mLtyWdEfbAgwsPEJMyVTH3"
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
