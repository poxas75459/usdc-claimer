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
    "4tSCSvJgqpGbUVRMZgBMaGdxC2J7v2mCtJxKX4yhh5wi7eLx7t5rkU4u2u6QcVrse1H3DhMLzydnykX8ppjBpHW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eoaHXhazoRskScZKivZr3NTvmb2AVwBhmLK34t4vKvBatZCHKXhcFUcwjjjtRwThx4Z6xe3qmda6Dg59wPAMc55",
  "key1": "2kM95Qweb4gCyZrsXZYhX2o5CN7xVKXnqRooYRrJQdHTBQSHrGEwRyR8LirDdmx16BseUeCH29wYbhAUrigeem7u",
  "key2": "61S9kimrqW1HVCVSt1BZbrb1sGLUMPMe4JSDqaDKfAeLR5Sj7m3S8rwqdGrLLs4aYCWcfUN1zqbqUBDZLcJviEAw",
  "key3": "3isjjs1vhhxn789Q5Fi1sgUrruFesvX15KMSK7j8CGke2uRb5vu6E5CVRysi2RbDkkQSAQzvXhTUPVBrE6RGfpKc",
  "key4": "37HyMaAgb3x9pUQxNwsQzd77iBVKBzTf4ZWN6jEkDdBjiYtDAU7gpFc35tHFRLNZcqAn2F31sqwC45RaXuh9rHhk",
  "key5": "2YsYd3rCWxu2nsWtyqdxPsp5gtXN8B5zsu37BXLWEWnEjxL4Nrth3iP5LtLU9SAJJQxH1qrJhbQppSUZht6y2MVB",
  "key6": "4dvehusxPehpwkyKrBpVCCNFTt8quBSxJ6EGh2CuiDKBsHWLZDAkZAVgTKPLCAe3cqffXML2FW3aZo8rojNTzzZt",
  "key7": "zyQmzqvkoER18i7xkeoLs4UTFtuWqaTYopyXxWqBSrJ3wfpQPDTtuvV7nuEGXuHUqtuVcbUzUgF8E4xJ8P6njFX",
  "key8": "Kf5MJuV2Q74Ktf11kUYqDYBTs3hdRf1k9arXyufDRwQRQ6ejQHcjjGxR1fYnmVowDrsaW5gZYM7U7JbujfPGstb",
  "key9": "4Cd5CD4v3iCZy4ykyxQpPgxbgSVpUfqsn9XerY45TjZv6WsGkjzkv4tS1mSA3MDW2W2KLaadPdCjDnTLYBb7M2Rb",
  "key10": "3ubSFyzJPermvGsdjt86LHMLkMptevUxJDc3EfP3e5bdKMS9kU61obCkhmD2zWRFkc4F3YHBBZgwWaaw1hBZr8EU",
  "key11": "35CeC5XCJTGmBN34L2cpePnte2zbU8hvnYCvP16JC1dgEeKyoh7s4ZRYBLwdqhfGi58kV9wKLpDtYUwuswtHKrYU",
  "key12": "iqpvKsNMZ3STjMAxuD9aNuqJHRThcMjsbr3gGAMgCihvMtqJEqmpNW5QJSXbXEviXip2CBVUuSKLjuLreC53rYa",
  "key13": "DnKjSUHutvMEEZn9ruB1thCeTEfjbhpWdTYRbsCdPZ9aexAt7U82GEk2RdQwUbb9yzsY8XHWWNpuWymbz5XFVs2",
  "key14": "5rgECjrpN47HARtn1GHZDda9WHg54u4V2qA1qGzFkuCUraUED8VjLxQP18Ufjm51JQYfutZqqA9BPVvf4KN5aerh",
  "key15": "4z8rQnGmbE7r1QUTFu57NCNffvG1BF8h3Q2XbQeuQeAvedDbEBzR7entPiS67Sev2UgJeKrZsGzFptG9ZZ5SVr5D",
  "key16": "2mXxVvMaNyHaSJi1Sa9TbZKTXMU8p1mTEzT7tsNqaupyzN2xwuAfUpsLRhywqprEGbPTzk53k6CjLXEq2xbFzj8M",
  "key17": "2k29gMuGLrJhN2wbAhG4y1hmdjKwj7jvjHWK8nUdTSn9EAnt4A5wAsk27rnvCLZmkQDKJ2167XSUSiv9jntta3gV",
  "key18": "3MfD729sKbohBVqcWh4fZQfymTbqLxdAx1CUXxh27UUXmGq5jW81cRgEJBmHyHqfFjQNmm3PLR4ZDgVeYbviDSjh",
  "key19": "61uNQZNy2hstQRLoq55ccf84aWjjGZpe1sxFXQeyvxSmaYXvwsCp6DkfZM3UTY4DagpV2j1scfCQKwWucQrAW6os",
  "key20": "4HLufq9TjWzbqDep37ByNcU4BPNgjCFW6y6g1S1zvdVEtPcRuav7jHKpgy7NttcBugZ6BFkpxBjuHuJjesjDU35A",
  "key21": "5D8pdwYA9usKCMY4wx5ch2PtJnynxdy9uJhjLnEtPsjs89MYw2RErUpUB9P9H9N9voefUg9SBcp3XjsWkLFpmhBU",
  "key22": "4aAw3KjaAyYrouk7gVb8wLjZjPTFBhCLKZ1PwH9ibnEPh2ZBGhQQvr7XgqRjipvLRHJMZ52d7Sa826N15cNGEb5o",
  "key23": "5TCgAYQ5cZPqKS4fQamCUJM1jY4Hu9DkhMJ1BF8un5EQsihVHgB96N7J4zb9U9VRJjMFD5gsCTjRqkaksqQyRqhP",
  "key24": "3To5zwQUsjNwHC7Y1p3jwKyYN66aUfKuRJwTCvNFq7cZFH4wJFsWJtHU8FMxLD2HdKURVRsCKdGvro1aidfoZAWL",
  "key25": "5LNP5QrsB5gEiVxbWfRiK6GrbrMSFkTABCQFZAgyxnGBtNgG4GYmRy2KqdWyZfShsBAvwTsfegTWPhJo41RwEUix",
  "key26": "4yQURPJQxWiEcWjAZxSCRqGkC8vUTaT2SrNNHo2rpZbmQEimtvh2EeroDhKhrBMKiSEt7YQmH4AAdVvwVNmmWchc",
  "key27": "2PXegneFxmtbZkTEXdjgHFYgzio2WzxKE7gGTyn1FVen6Tz8nLgoWHKHnSrxS2CL2M6A9La1Rgpexj2okPkZzLBU",
  "key28": "3iyy8Exv7fhqVjY7WRY8zzhnws4rkqGPUaCeKAU6aH5kDiauwzSccwkFDRSe1XyTUTWisiH7Y4ejTPy3yZoqNzqx",
  "key29": "4nTHwjwjK1j6ve2eSDduAscdHCZ4mEiknP7pYpPnfksij5DxqgCzS4RMUb3vWNembQ3SurwMHQSWdcMfic3qgosD",
  "key30": "3rmRm4jRv4NYm29e1VpaxX3fHjYi2y7r5BZEocN6bfWCZQdDzZo2MrLG47hGkCLQMTC48kDCjxw54La7dk78J9Qw",
  "key31": "4D6aevyzL9ynoPBfQ6Br7moxgzVTJCewkCFjQVEnVV57TSC7PSKsRwtqz4fVT7yFHbbPocTTz1e3V9of8TcD1yN3",
  "key32": "2sYxNsJkvX8HXFU8hJvbEhJ5tYDM33HqVPvHAoDU1ix3iXznU5oZkVyt72VWd5PLe3CBwFZd1scwHa9ookky2QCm",
  "key33": "eyt5CDrxw7LnMJUVyEMyZ12GY1QoGMjmrGVwwNgW7q1LEX65QBGiQGwRDwYZZ7A24mJog5US6MB9TiKoreHDebi",
  "key34": "5tfbzECNY9Yt2m5RWJm42Efgphn3zagHtCaMDWeGRuT6H1bo5iMgCcoM3VDkeGVD1yh9cXLwxMBqYeSGEXibeJkH",
  "key35": "4deBjGVeXS7JoQRpVRhWJk7caYJB3wspEu4eNA885gABazaHUd2YPPkyDzZYz1YngRKbUQ6w6CPrucKssGU6459k",
  "key36": "3AiEQPyUCypAJssSA1TYHUuo6guhbMD5sVLa5bYBUTddQ3yQE6i9ik1MAj3TKau6JyEyL9YNdyZDBEJUSndnYwM5",
  "key37": "4NhaDXzxacJKKa7VXrJv85V1PfwmDZJ1orrdjSBxq3jV1vPL2yfBCi37FFjQYcXTef2kuswqr3PUFziojoiH2Ux6",
  "key38": "2UdBFiY45tPuzFqXfCXfr8wKEbna4aW2KeJ35Bo8w5F7WjHfA4SSiPcTE4W84fQbEey45jYeaRp5vEBBdeEfVv8z",
  "key39": "VmN3ad6CayLadPHFMKg9sdPZChjwvy6ooMDAVTighzCaU4QdnciGLy7H54QwjvmeFxawzw6GXsHa7wLVs2fK67h"
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
