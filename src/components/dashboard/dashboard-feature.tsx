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
    "1bmKd7x2oKsqiMpgw9rRuYvGusfUzGzudbSdrJqyYgrM3CC8Vk4cqJ3CkkeXkD4fhz69t5CNpYKEtb2s3wNmfkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGT535RT3CYHGZv2J1ij7vtZKzE1nQwJwyWwfmeuerW4Ae4azWpY4N6RTQEsoFqcSpurmk8Zq2zJABPRG8MRgzH",
  "key1": "26LJezjmeZ7tt3Njx6kViYDqYLH2U8zSYsMMTKJsTzdqJwjDKxubH3BvQU5c8v4QAxG26dytYAnSEtY1AZDD96Fv",
  "key2": "2NetNaDEhr99ABxruhfp4xePyVqc3da7oyQMp7BgaJub4S2b9VKDf82matsZMZ9SeugXhezRYhkg8XxyHrgddKu7",
  "key3": "V4qrvoKQDJxFNwnmYXC7GZ3su3vDgpscuN9Fw4z9YEnKrz4XMb4LAr6XZQpaWiikVPaxMuHokMzT9pVAMhYBMfR",
  "key4": "63GvnQZEvhH13cDzfDhVyqBEBcvL8LzDXf1gJyRbV1pF6xktjUJH9M1aLjoTwzhoyTovUg41wA9yrFgFWPTx1L2W",
  "key5": "2BdZWSYcyQLMdz1PygyZXCpu5oCYoxtTFG29ajLo5EghfNUGQpXMPzpMPtLazjatXddcpifu3aHyLE9N6DELjWeW",
  "key6": "34Tg37ccaofRLE69NEXms79GTG2PKR3dybGmciupRuxeLfGUjuEgRPNrWVb5jHK8gBusv3riTCUUppqCxkzA1Lqs",
  "key7": "2omp2GZKenoUpC4BAQFdamgxmkpPfAapNJ3gBbqvofF4XKxnT5DBnmSjgtaecJUYwhd2iXHevySRR3gZRdzP3Sg4",
  "key8": "3nH5fN4avf7p1CigTbMFm9rPafMNNNXvMmMexcC7GNVrpGA5zVegNUZHs9DG6Wg5PNHXhJ4WBgE1sdLQoJnsHr72",
  "key9": "5TSKACWeztxfnoTNzpwNqoNcJa1iBBbAeqydKzugRkQ4qeYGnP89d76Mbsr69FmmoqtfNdHPcvp7NZUQtMScC6oe",
  "key10": "2WshbEDuTupeQvispYc6oGYQeaBMnSy6iD6smNgZ4q2JL123KigyZdUF7KZTwjmd47pfprC1enjtapvLKRPVLY2w",
  "key11": "5zW9q9N3YvGc26kSH1r48NVSpc7rWTxVkTvnBsqxeF6ynukWgbhDtbZ65zNh4LckM9krnCskGThDVkkpoUP5ZWZk",
  "key12": "PNCqzjTaVATwfj294dKZPg6uTzpUDw7VmPUN1EhTbwzfffcrrRVxvzeydyEpU5VnMhLiVgH9ZSTbwsJoDZ3y5y9",
  "key13": "5x8GsmGbqzcAVdP9DeZz66jdwLNNT19ZDXrhwTC9eyeUe25vg2FPoB5MFTLJKd3TypJnkmJpkCaWcdeeEHpseGQY",
  "key14": "5nhY2BGCfnPCC8ynsNuXXTehzMUAyYtDAUc7XfFer29KvBx6tuuvTXAJJHcb4HKM5bvDdXCWJTVfDk8dQUixAd99",
  "key15": "3kiWEq9XkwijSu5ikkzfzC4n3oKmWcqTxKhbeKWVLPk88oVDD79dtrgiWp2qsDGt8TLrpPu564yN1Myfo2sPHgk4",
  "key16": "5T95uWmPTkCRPz425HijJsEWXCJBsvSUSYe9EyZSbeQ6P2pqFFiSpRi4mEBpQvBFMkckpfy3Trmofx44VtjiaLSC",
  "key17": "xguaCi34U2thp2kiRvCfDKBkDnUufmGHoE5gwzWFm6ctqGiwmD7GdpAmZzv6b4fL8faQRjqi3FY455py8BKsP5n",
  "key18": "3yxA7bRB5MvDwzV6UkMcMLoe2Zupd9xc8JeKuzhbVJ8tWtfCFAH9rrZnwot8hENTvrKJ6Y8yTx9MFwFq2MgK7png",
  "key19": "4jPVErAFqNuv3G7pVUhVBvDjq1xrDrmh9QXyxEFyWmtBjdvUkZ7RdyJ7N7GqeTbLZSqMnnPBxnnnukkiAHtYN7xC",
  "key20": "3JdKjHBJAtf8q9fLC9fMbes4kexMkx6jTgwwSg1ubytXGs2UM9SEwqNrmmWMnbqXCgU42tnrQtp5givBDELwpdBS",
  "key21": "4MdW5k4HNqpFFLPBDxcbeSGAkZ2DE46sfjNWXPADf9VRLQQHrCAkAMkVNTvMT2sNPxkrLNnnrwsPYPKb2dVHZhWZ",
  "key22": "2FPX2iBwrhZxnW66ax3Nrw4FuPDedF5CSmbCedaQpwz1FDhqWFeGsPDVGWQe1QcKPnBtqj7w6JuADyQvwhG8NuhC",
  "key23": "4AWCi9SX3zAxPCm5bb6ExpDeL9BAEArZRSqALwve9ohUQws4MBtt8uQ6MtmgaqrCZm4b3FKy8Q9xd13cQbtu5Ad3",
  "key24": "HpgSgUUNwno7vuXuMKdNUFtZtRennWFvEpbooyKFpp5NNhoU3TinZ42Xkqpw9mcLNUoqWumSbhagFwcgTxxiUhS",
  "key25": "2zHfAhcNSrEht8d8qdXdYeVrAed8PKwjSZ1STaivPHqaHzkzoxrTcFHYwM8FDQnvZ9hukpTCht5jhTbsr3oTrwvu",
  "key26": "31EmL2yxXoq89fheC4GXMMXz84sVos4Pn1auf8DhhPaB79rYYp5XwyCSVZb77aCgiqgau7UH8HKW8bNcQX4fNVjq",
  "key27": "2iP1fodPshcfcDRuw363VcAusiPsDgtpgjWV7muBci6eLqpdy9VPg8zsNFZr7RyvrUKd4fKY3oEX2Ltxss2BW6nK",
  "key28": "3n6fKjv4Z2VmxR9CMXv8drFfp4pb5xrP4rJ6CzGvFJ8EMhpbzCa8qqoNfXGyeyKDS77Y4xbhgBtqgT2qS6VrHyMG",
  "key29": "4GaWw8yxpT7587JHBoFTEBdhvm6Zs83frkieWdANxPsj6LTB2Wk3wK2Pmj9azQaVEfZQ3rPjpW66Z4dW1p4fVn9Z",
  "key30": "31mKjdH5JRj5NvcZkxzh6P4F5QJDu3uMLJeqYJG6Q7gVJo5x8HB9EBe2PwFoCN6LJZ6S8pYvj3onV7HmMy8EmnQK",
  "key31": "5ShzWmjemxJSPtjFZaKNWC9TBA4r8Ex8C7qj5ZyEcaqXjrrBJSRJ1nU7rYZtVmK1LUugXUn5xnt2v8xZetzR63on",
  "key32": "3qL4JtFXXf5oKce8PUh8Cf1rU6skM6ZZVYs2QBbWTrQkfA5enfLoGNxwVhWwXfZdN54R5kSg1MpDGKreRH5ngT5w",
  "key33": "2CGtHwvFTu66yc59pxjzxLu3gbNQgLgavnxkRHGMgEHws7LCDyGamBivDmsFscC7rDWiXUzFnXk94mUvp9XNAqBH",
  "key34": "4sN3VNdj2p3QWMnTE68CUx8FB9UbnmjxoAbEsTRPaKQbqPtADWWEwySDotBHtzhBMKnYGejYedo6z9E6gGa4Gk5y",
  "key35": "4C7QcoAVuH1uPK4QRpsPSPuRsK5XE5LXE4oKkenKsVrMVn3j5PMBKLjVFgr1PovBiJFe91Nqm6ATZYjNEJqgTErR",
  "key36": "2KFSk4RVEjeuHgW6pbG8mhMfLQzPd3UgUtgnBFcq6BrdLTi3CgzyWPnTctDGMzxnxzRgEF12xPjxwsK9WH8yq3rw"
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
