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
    "3SDBD8gRzsmnZd2CC59Qu2MEStyfZey4xkUTzxaTy163SZy7Fhf4QJfNdaVmnQsBvc3daxZcQnZfKDRmokxTPSma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oNgNnpM57LDwMEGqNwTsKseeoeVUwotgL9PNkJEBr5EcZj3A51q1BEs4FyvDV5qg4CEQtjEuD4gquqRSqFYSomF",
  "key1": "677kzHiwebNTPN5PRTP9h3P1PLZR4FD3c7VQptdDRCdY67JUZ4i52zB4bosS5oeCKb13avon8z1REk9jbSJwypyC",
  "key2": "bNd1x7tU72n2o1bfBBNXcr1YEKrc4oHDN7puDVDffxhxfHZPrMraW5soywFniVjz151g5B3JKCgjAGpvhcms59j",
  "key3": "5rJ4P5pKxboGExL8dmCvwsTEnRcr6D7fBxY9bHAwJT4SwbtxEAj3L8WeBE7HL7bFkYdPJU1D7qS8NEpFKH3d4PhE",
  "key4": "5pZFNTbj1JvpcGUrc3LMBtFUq2zcmaKegwRDtgjYrTY8UnRSgPU2azVRwvonhB6iJjkEvhZw7xgDAbgU3ve49tpv",
  "key5": "ybCb1JrRifNEKpN5VuaP1gWiaiL7qV3wSAzbHKS59JaULkBk2wfM4jnYrppd5KuTLiuJKhzaPGsKXsTuG3AEsxW",
  "key6": "5WvKkjaqh6Zn1JN1HoRDoyMamKWN28VjS2u2gGreLQDcamBZqKnb8oaBVNTTymaCL4u2k8d8L2GqSNzydqe1fWbX",
  "key7": "4yu5kzQVV5eWfM6DJLfkPhzZGnsc7bYqaPccQBMQS3dYx2P9RZ6XND4fJsMnFSJ3qVasFkiN1W3U9wQWmESSsaX7",
  "key8": "4DCDVQmpJjtrcBbUcBC35h83yNESd7fAvQy6DdcBuSSwkG9DYQyEZWiyUwjBoS1GX31MNtkpfzSp418UQdca44gk",
  "key9": "2Lveyd9sczbEDiCV1CNdpAEihZSpMUHxZSyBJTP7Fz6M8tgkwiXnnQi24XQAkxgQhL7xeAWaU3bgs2YX2vGmks5d",
  "key10": "3u7vucGVtCKSjiQvPFbdUVmfif7ruRVbX3ojoHpWZp2xLQ5Xwb3p2bF4efGcqctEDnoCaL7xjks4UQ82M5yvkmCD",
  "key11": "5ZA3Z5KviY1MFzjtzwgBaecDxhJneqghA9kEVg9yUajC6tQ5Y7FBBoX7GKvQU1AnP3oKsvkTEaWUFfqyc5X19ZFK",
  "key12": "5s5mfE6z2zgwpTd4ruPbpwYfZWK9WLt3RpAk5WyAw6rfxWufKDmSeBR71JnxUqV7DVvhbdrSgu7Y1YA1yEh9Bvdx",
  "key13": "468UduLazX4TfLJnsBoFm2f2EKiq3G3EmdqBrg2Bc1ApE6nVkMbZ8zd6xGdE4K5xjZSgF1TK9fBnTPLo468Egk95",
  "key14": "4RbyV2UJiwYwyFqWLzGffHRrbqEF89wmaAxkuWf8tHP5msE3cFtvBXcHr6Jm1FtVuavdNHY4i5tjkzq7tmzhBiDE",
  "key15": "593BymTPLLQ4MF8uW391zGhGhCZNSMYKivHrZMj7Gv9JWiNa2WWVpY1KEMGFf8wiiDGtvgCsBDYxmb4JRpxeYiGD",
  "key16": "TWhPm8vA2MUHCdSm4CzpnfWHWptYM9H4JFeMaDyJcJcosW8rwb8BtdpanUBbKmXVdbSmzTPvXwzP4Uuxv75kwe8",
  "key17": "3wZVUV3RFD2GEPuxKLzL64UabCHeqENteB8CMwN4sggiB6JozuDZSjSKLoHmxGd4CKkbw31d7KBp5L5xToHkzKYc",
  "key18": "46UmfvTTsALW3uSbkaYgQqX8k2bRoyspTQ9KWJ8HfG5R8GroNWitmqmfGNxjtSGh4J5HAGaBjvac3GRnV3NkGUdR",
  "key19": "3ffHTATTvgkesB6G4V9nWu6cjNA7SqzLHtsGXfAok5n9Q1EtFte5TJ2i7mh8avvTCDNWP7g7Y51rNELBi2zSSxCr",
  "key20": "5V6VMhiTt6vgS5eic9dC4LbNcVnpAPddXvXCWKZecw782YpTAFHT17iGaq8ndaK76w5atjJoV7f5YoBKW8E1qs4Y",
  "key21": "3k3AHQ9KNTE8MneTcipWxTyBQs52ejJ4ZPydP1c9fAShNp3mjJpWpTXZuqL1kjPXT5fVudPavuHy87i8Wmrs5Wsz",
  "key22": "46PnQPQ5SYH8aVTDeuww5kbMppPGTq68n5E4bzP6CyqsCENSQvYZcpgeqpJdUDMKY8RPLQh5gfKu4xKv5EaiQB22",
  "key23": "374yzECQ6Us5iRkuapNNiZZ5YpH439RrGFwkk4SQq7UsxUJiT4SLKK5kj4GUvxgSeYnuJvb9qZm6q2rH8WRH8ksq",
  "key24": "4CMV8uLa52fVP1dyiUngcgBkujCHgRZQAB5o52X28d2bPAUSCw7mR6LpRAQ2WioGKR7Q44GXWrQPWJZpjW4AbtgD",
  "key25": "2MAYV5cjUkNRG5KWZxqkYc434nNxbpafqEQ5tDXfueSLDehXbTqwGFShuTnnjmNU6RyHcaPbg7KCsHUKFFarymb3",
  "key26": "4F8zBdj2NS9iMMHZsVjUUTzkX2YVLuJyzaddDUZiytLBykCmq2peokrzoVamacRC9yQBa5Cy4osniXpfR3kYzKTQ",
  "key27": "2SpLscFCuH6DkzUYu8DehRgveTv5WdopjGJMG6Bz82SX7APMR65omHywBFV2KocQwuAD9ETNrfXnXx9ujb7WYHy",
  "key28": "4vdseEf6654rK4gbKeCr5KaeJS4qhy4n1aaZmwWr9UwExRL9JEmKhgRdL48dEfMCdTRRpvKiVvFFXo4brkD4wZqr",
  "key29": "P3RafTvrcr11SgyoHBoDD12jwe14fuWVrqAoTi3goFghAx4Fncx3qcVDZeMMuUmBQ7zDFeGU7E8seaQzTi2DREX",
  "key30": "5x82LQnC6ku8YpihemZTJDAARpKk4K6kVsV9PHDd54CYTaN63eZzbFDevfK8SH5wQM36MMAhcf6HQkLyBPWCYPqe",
  "key31": "KFz5K2ECCgbsz4brWHpfGWGKaduVNrTDZm6b7HkxDAntQw7sbDjBMFtC9Av1upBMspbAQLfynHFj6bgg3ut7CyA",
  "key32": "86WDk9rszW32nQSfkrr664QhvZQrQqa8vHK8TqP8ey6E2ADNmGVdicCV2H7dz3brCpYPshkuvDPp81ufAezGB4i",
  "key33": "48g2UCCiBYqngPSBYVxWwLdCU2wKoZ2MoSFmD4mZWjfxfJirtX6gsy18USMTViSESuBeT6vkaALrM8XKK7sSwfeY",
  "key34": "51peMwHFFBT7AjM6wAfm2VJw8J23SdnDmHmy4wxwjfwCRHenkCvPVgtMyq5HtfAYgifGuBF26xukyR2m5U68zx5r",
  "key35": "4dxbTLTELG2WaFaanSpFLbTg6ftTghVN9wYBed1wPcX1K411kaKncGqg8Nv2waHRvnMBdT5oNiRf5sUsR2vWfNkx"
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
