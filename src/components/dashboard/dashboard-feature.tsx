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
    "4LSxD9CFsjkMXWisKRXiNrQtMNBb3o64TdUk37ZWDC2DURgyGXdxNktZcYvJTqsEGr4s6WS149B2QfdKi8b6dRNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Srq7YPyQna3A29FSTy1p16iLdGderfbh9PkjpMSZTEtCccgDDmXB6oMwpDDxPqrDgdDuhmLp41SVrvnfA9596Au",
  "key1": "5LbxRUoKUHwj6cG3FpaNrfSevuaGi92He7UCLEbc3P3C5Dq43VAmAHpafPrrVRhtwQZkc9Kyh4jVcVdJNWnfrgzo",
  "key2": "4Vy7QK2SpfvRiRvyLLQ3xaDzYfRrX4pwrdgBtyRQ5zhgjiSJcTt7SW1eZrV58v9sVkGNPEvx3VjBm9hz51Lkgeqi",
  "key3": "iS6f8de2JcHesa3B4PhzCm8Ay4hvt9EeoVBvrFj8vFN4Evxryu321E6YKdwn2LqVJTK8TFWbdt4aWiHkWJK3735",
  "key4": "4QhbyUm65kV7MtSuXTRFjg8mxRim12XGYACFZKBxtpgM3VEoWBmm5EfHRSWJNQ4L6vg5Hszp8xCX1ZoAT9R6nPYs",
  "key5": "z2VY218JS2NDe1L3paLX5pUsPoFDuTTmo8ZzSb9UDWk3fegB8szNPPKcaiCxYWDjUvYWQsfMATxdCnouAo4GJdC",
  "key6": "hA6sB3GPGqLTqs4R9d8rwhHNLEY6NYFK3eZmXSxD2GC2BWKdw9HJs8c3vDmkCQQ2vddGhVEebKvt5BmXgUCLGdL",
  "key7": "3VWGBeJC51wNJsKb1Ny85mXRm4eV6JyjhR3ioBAN1B1e5PAeGkUSg4TSeW649PAbc8MLNp8YZrZhqSdZCubxfRN1",
  "key8": "5LMtENPBMXE2bMn5f8emGUUtgFut3znUE9apRtCTap4NSedHwgWwTarB3vmsNfsuj8u19esiqY4NXw4kku8fLKTS",
  "key9": "36RNGQTqxbRG6jdnv4ukptUv9PQRN9ZfDFnXG1JHoTQ4PWGtfuYDAknpCgNgpmuf5DbRFNxxjAhDnc3EDpPC3Bcw",
  "key10": "4YZoE2MQYLu8Z35mH4A31jBsjA3TCuTaMi1umYKTvCpYtrJrjNNr5oZKq932sUNrwettziPxxchR85pNQAhyRXDV",
  "key11": "4R8Nb7BBChJueURkSMQwUnx7evfv35j1e1kJVL7YijXwEJTCLM1Rg8w2tfQHLDpM1Jp1FSQHBTeNajWVviDxUnBa",
  "key12": "5KNvMSGCqCnGN8La4j96bhf4JUneoasxv1guhYeqjJKGW2Gs4kCx7xZYNwTW1H8qJv3SRTwJEaVcFRWWLEsd3TG",
  "key13": "2UnXrVdAbDFTE39GN9KHYhD9exrtTn8qopRd9j9hnpXrpkaJ2T8wxsvHFu1WD5Y45tGQzMmu37Shgf5CnWXWHHeF",
  "key14": "HfqwRb7yacJQzDRg1eGpKVEnpUn6AMsFNEWt25QSSmwzfq6cVnkgqToPBZbrvwequurQKVxCywoW3wY1nkPKnT3",
  "key15": "2p2CXrzdAegY5hnuCEh349oE4VHPyxtu7A7XaFeSpFuYKfY4Qp62cjAk1Ta6ojKTCvfigCg6ievTxbqdK4euyrdj",
  "key16": "27sQNVB27vfbA2h4PX69SkEV44DvhiXgpiejxBDePUmaubrRhLeFc4KXxZdUZHBjZ3JnJ8pSvDwVFinFhYVeCuAK",
  "key17": "eb7MswRAegvrSH9vnB9kzxzQAmPiXJyrN3fErBhhXAJqz57H1KXja47cF8zRMTip6CrvdJczN1e2yoUsJ14B15Q",
  "key18": "4iaMcBSx6ddsyZEYM5iUP6UQPuxTpcs9mvnCKyu7Bj3zhFiUPWW8f1KbCd8vCWPwHWhyokoDqehoW87tvVfbxWiu",
  "key19": "3zJzd8KEvrdj7A37eKxLqxrTWPruN4xyemaCQmrKcp9wxzf4L9v9VrbRGfmZTNvTk7zNDJTQWjG7HsGF9wj8KTse",
  "key20": "5XFY1tUbqRQuTHK52HpmJqMsgrAGKbGHi6fAakYk9cUNWUR5ABGxYQosUfdpeuCLgJ4fZyibmi1pTMeo78JMFC69",
  "key21": "NNhzqbpuLwgAh5mTyw1tqmyBSG6X6aW6dtBCmZAdnxKG1qhQ5KPd73M7FvBNGoKatmLg81JARc8QrZBje6UyqR9",
  "key22": "4MDfgrqNT8SNb5tPTP3ZPzzyEcnBSqfDV7Efrj9TPWcSKxdyWh8RTQMSL14fcwaXDCaht6549nezTosmsVR3Ret8",
  "key23": "9gyFuRYUSKo2yZJkyjP9pHUeeDkEBJ1EhSHtY2Pj634eiURhxPi3jgFHCpAzeHfVqp4uaH9hkKDPqWHR2T6arZb",
  "key24": "2LaGXTefzQWLnCPXbga53Yu7UphqkUgxX7tTyT3ug2wjuP6MtoecjzAS33JRNwN8SVDKMiMJAFNZQ6t9daSzskvf",
  "key25": "2KmupYgfL8wqdyMQP846h5vk2gDYT8uY5vpYTHGvRvfkMMuoY9DRb9VnWRmG7hSLvra8VXDoKftxL5BuUHBbLFSy",
  "key26": "iAYpaHJTdMK5h5Q6Re5b4RfahuZ6mz5zu3rUPSnRxqzwKggmWJfAoXwXtYBjGNoCETgAhqrbZaKKBvesHpsaPBo",
  "key27": "2UZsuWnvYQXNGCpkChjHZTjazZsLRmdvzaEKbC3GCahU6bKjETLsqLEt3fhXoFSF7sMZdVdMeRjqDvTUtSwT2A5W",
  "key28": "4zHy4meiNrDK7MzciyiV7X5B8Y11ancdTbd227HW17YdD3U9KVpyXqSbCLimyXoFycVgYbrvTmWqRf19PkAyh2ET",
  "key29": "kgmWR59D2K5MhxTedsznaMiziVomYswFNsZxH64Qm5y6svNHxh46uh2ySQzGUztES6bWGrqUjZMDv7tCkfV8cpq",
  "key30": "5aQkJFoYt3D698dtSFaAx2BbtaKp3PuwaxERdGXsVaMRgDFNbASe8scW2DCfD8ZiUpLrLg5TDbaczZPuZ5mz7MZC",
  "key31": "61i48NkvS4sjiquY9qUTSjQDU91qWDxrZpVeSTvWy9nxTRTtCaBmPRKCoibUAgiEUsHSgoZaUxGPiJNSZW8Acn5G",
  "key32": "4wRbhZWsiSniM5kuY5h9vtqg187h91pzXbmBaBHUtowymWewmtyBeWTFr4Xi36CXKt9eDesquBhQZjTQ4JdaBERA",
  "key33": "Du8d1bnkSMjHQV5VXiSmK7m24J3hZRc5WpwKTDSdVWm6pya9zYrLbjQPadNcTfJg5K38p2UQE4vxEMfHundkCjA",
  "key34": "23sZ3zryGcZvha9NzbfavSPAm3ZJaHU1U9dN67STkokxxhQA3UfJjRMx8rT9TuiCTdLMwBkkFoTUSQXBGJ4S7edk",
  "key35": "3dbYYD5pdLwW7NXwj2Lvm5m2scUWStkYtu3HXpdoihmBH9uTCqobLiM92y4WhzZ8U5hjjRB9Xaa4VBWG6LUAK3gK"
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
