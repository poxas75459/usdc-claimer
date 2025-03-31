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
    "2KPXXzbirEDdCGEJf9nykeRSJyyZ8n3J9RjgR9oC5Np2U6pDPQXjpj1jxmhvBNKbd9ZnPkiQCKzZbQQxrovmPQUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DjpKddSak3nef7jcNMhjktHWvT5P7baheBagV4fEKvtdJ7M98trxqquFqtAdFFLx7R9rjtGL2Mz99NWscDVpfP",
  "key1": "3tkSgexzwCzKBZpyJmShNnbREjBKDaa7LoP18HQE2M89HBkTG4WpP9S44QDeF7EqitRxGFFjZj3K44byABWrG1Uo",
  "key2": "3KjAT6r5TDuQFoDjHX4sqyo4Y6iqcnz6B4jorsjifWjPhiQEcGnfQNF1Gb1VMXN73uMxnRXHX17jFBDX1vFPV9a8",
  "key3": "4dzo6MBk8qRSr3fqirm2V18xCk89mNhV3EdskobcpjHUxHszuDxMYmcQnJq4RDba8A3wZMLT9Tcc8kkdAKfgJx9C",
  "key4": "3TF4RQcTHmuXxhnh144XNFSm8YTKCBmVw4DideekfBEwuePYHiLgmVnvjf3bLYWaQrptdHGCAAFfjPX3Dmo1uAGj",
  "key5": "2oDKrh4GKqEL6GSYYer55ybUhFkjkF2BynchNefMUw6fkuyiDhPJQSrMZSwTbpufztZfnpjWbLAjK3YkNKhSX2hN",
  "key6": "4vhQnPGeWsxqwaejUnmwSfk6r9gZBYnQBxQVz6gxudBYeeuHvAph1KowqMCLEy5z7LbpfZMdBr8wSa78HT8gXBNs",
  "key7": "3Y9SfaXScnr386bZpLULnp6KgDPqE7T6fxHZcXNnGDHP5iCwX5kbBe9BTWh4KRu1nmsecMVfBjYkLyWHdGWuLCKE",
  "key8": "65hWzY4B2mS3yHj5tgkFuggC7ZvMystfzmwkfVZ4AqtsksN2cnuzver9JVNMGEHuVyPQy1YXstS8gXBFqHVtcA7Z",
  "key9": "4STHB6S8CPU5Pwszr17Ec2cZZRoeW1ERocM8jd9AoEWEutWW3JTkioHUpvBabyXtBuZYMSixFHcnHjyAxoSPLvxj",
  "key10": "2ZxdjAgGn4P4MBtpanJb7TGs6hVqGKHMrdX8sNuxKrNxhru4k6GodRQC48vprAhJv9K8LRm2jBnNWaXJ9VVUz7ai",
  "key11": "3oY3MacxwJTvVdJYYW1YP1VohxkVTrTkQD4eqXAFNqY1t3Ac82zhVdbiZx4cZZac9Epu8cLvGHieMt9jU2riV4aq",
  "key12": "549B8nz1cHTDJLJJAXhgaNhbe4vbe8KCiZiCc8QDMte6QukT6FqANJyfRgRMXiauLsxw6Xb71AENU7khEwkKYFHS",
  "key13": "383VXSQtwNgGofTaquVJiM2LnTsWRf3cytFcCFRn5qdAeWHK1Fy8hXzDr45yrf681uToVrU79FHPmuniuvhfNv9f",
  "key14": "3uF461CQKgKJTQ7bXLozqWN9YTE4VaFBmja7LuNRnyxV5GWGKrF7jX7DCVhRm42D93dgDJU8AwC5m8aRizcP1DVD",
  "key15": "56MXQq737jwV5R7nzqDQsH7zWNTMLJYD4ZSbCscwtwFGCbweSicJ1RtW17WC9QAGrDkTNAZabgc3v4AFSgqEV76K",
  "key16": "2XjCFugbJpxAj6zN84oopMBW5MhdqDVTnQ7nMqgSSc8cVyDd9ZByk8yFpoZD4SVsQvBoN5h3d8AAaB2XpPN2kcB6",
  "key17": "yQGBqAPDyWGyATSxcz5cBmx363YVxFKjYw4Xjnk1FdbPxf9g25eom3ayzZ44QEbUFYeZWKGn7oiEiFGsqBfKgvv",
  "key18": "gz8AZoSDvErft1ANE1Dp4NKS41hBLtdLdFiDmys4RipxPUm66ePiE8hKMnDeDMtVr36PRXVwuSsbymvkyxai2eo",
  "key19": "5w41FkMJkKmKvY894fzkbao7FbFtPhpYZJhVfvg3x32XL2ksXQyErGezQhfRHR9JiYaaDM2wKgmMkbJ7wy5PpxdM",
  "key20": "2GXvnatb7cyZpvKSmXGQmNme2bc8CZQjLxLvgUkZ7o7CPCuup9ZLA6FmKW9ZSGgXv5sEo3fo3UUvYCxPyhxq9nMp",
  "key21": "4x6ZwBkKRAuhwiDnomTzgAykCCwfmw1ZYcMB1vUCCuHjBmi7sgNQ6njQGAsLG4TS3pGa3KvQNNhXxRLJdPqXPCYT",
  "key22": "3aCn9m71JPayLrmxk27rT3bcWHXxdxK7xv33v9JQuuc95iY69Qt7auUPcop7LCSbqfDbpMbexjU13K1evfxUsfSv",
  "key23": "5Xm3hntk4yyhKoyxWrkeCQY6aN8js7mQMb1vpYrKNxZHKyb6g8c91hh34ms9jtyUxbeyGuwGuPiaQjZxRdcATVuW",
  "key24": "4iyqnvkBjLge1LtQAKTdLgKguU6iotXtEA8DS5HgfxSzCDdqLkX7DrooTx8RrbmQQKEBJhqWGEebJxR5ZVJpAKeR",
  "key25": "3vbQrdvZ4FY5zDYi6KBPo3QufeRSXQtMyNTU6WdpnGBS7Vr7PJdJJgFauadxeaygNuVqP9fXfyuiTx1sgeLugLQV",
  "key26": "5gxU2YWkni3ew2RKq28uzvvbCYJeVmnojSRTZWjxtQC6ao8ArLyRfngDZogfd9TR1MBHhSaKtXnZ9fR3HFBVJBoZ",
  "key27": "2EPJQjfGEgMdri4tUBvBKBxrY3qKCF58xTkvZ69mBbdtgka6FeFuRQjrHE3PnedUs8isdapToRhhXcjbD4cDSd3R",
  "key28": "tCXKpjntSk6X9RK1s3rMyVN13ASnWaJnwto5pQFTekwZyECjrmHCJBu869Nc5qzhJavARPBX9t4NZ2tptferuLN",
  "key29": "2YS3fnTbpFxC1QCjjf78G4FWHdpFRWkWfbSHrRAN2mXJ95E7sAWzbAQcA4x4nKD7YkTDz4xHcNWrnDxbrznkWM8k",
  "key30": "ktyM3aTanLbAT4M6Lpm5fkmLj72TjxQXE99Nvy13kv66tVM3Cu3c9NgVmSqwme8tanmYavrmNmRLcQhax3ZgaKo",
  "key31": "2gdhBGdE2B8e14WJnWPZMSNyzeAUFupoahzkgcZjF4dsdrB8MJyMMQufwv3GZgk81oMhyEzDSgmbhtxmzLQ1UVjz",
  "key32": "3BomVwUFspsMLFMTjNAmFX4sgLPGRokX5S576zrirGbNtbrZmcVkkeWiqPG6aqXWGSdxWCT1JXkmnP2jHuQ7G15u",
  "key33": "5mG3PcQizJJL44ByNjGKpPnnoa4AkhxGfgDq2NkQ3nXw8B956svoUaeTQSrnURzdnCPxYqRJu1zsTXwvXvjhUR4n",
  "key34": "5zEVM7u2PPvMNPQkcEqLPg6CfzGRoZFnV1TcMRufxzhbRJwqYSXG3cePKqVAJHksgBWHW4xW7nmLQCKYEVHQaWyV",
  "key35": "Wei9XRUkYoUS7XWAn6uchL7WuJ1WR3Vy6eS2aZByymAuHBFP2qcAsA6BYGd8hKPyZsGdctb28mfyLDHc5eXeNXZ",
  "key36": "3ZRdkuTrSmyzn3ktt9xdhNPVYHjayzbqYMidoRWpLsLq2R48hrDDreSvYgoL9LMDVPDHfj8gFbMc1cZadAaUZJBM",
  "key37": "WVmF2uU6YviRawFa2wbhVbAbU5qgDWvbGm6qKGQMSwvQgto1ZfGGuo7ViQxmka59n337jNzg5gHG6gjk5vEtrJH",
  "key38": "2nTaJP5ACfyB7bEwrjR2gkWGZH6MGRcicWvvFnWR45kTedfRzAV2k9EWqS1qRf5a4Q24vrg1DHxm4D4wqg4ZzSL5",
  "key39": "2mnQtJ67JctDFTTpMXGHjVHhCMN6UiSeb6o1BJYM5HvKeFcrhSpTN1K8UoPGCHX4NJnCh3TUYEYtJfPPvSajwqKp",
  "key40": "2mG2bstV2n4Z6QsreEo6Fajj8ojJQ5FPZgdPZjG7wo2akPgxWrXmW6mdhRkowWPJQDEZS6sgKFuJUJfxJzYymnwS",
  "key41": "58kgTXcvDUzPJY6eQNTsHcSK8Fej1kk7LupxTkn9Y8YLiKD75PVNQyqvFEiUbdgyeKAJe3TNgsS9zwQLdhkyRngL",
  "key42": "63SingzFqpb5EHAnJxWC11KBtyJuew7MQu77Pqj2iZBsSdQgPMGUpYGLTkeCoSJpEuHMcCeAkn8dY91JtrSbFScQ",
  "key43": "2E7CzGGFSDaXiU48M1Yjd5SqypzYXmCKffSjK3eV3wfrqCS5EZ8gRFbr9PEcCHauP3YJ5giUeYwQZu2ZvoDq4bjM",
  "key44": "5TCbrHKbvX9awrGyVx4T8QAYPDexoUKGKmcszq5S8mA6VQEP5dYHUoKoPNV7tJrb2qzMvgqTRtJRCKpfD6ekVunA",
  "key45": "fvuY3T81yrhUtMfLWJfddYVYFydZ479fEmib2G3qbPJYSFX3dSVaa7y1cXLjuFo4fu3WBLmEvskLqfVgwuExdTJ",
  "key46": "2szktGxb88eice2VKroDvi66aZQ6BsQsvJ49zSWvm7VdRvCSerCExtPNf3pFdXbEtyrCAVywHxeLRUbGWmYgMFDc",
  "key47": "5JXJ95bxP551xhHLWTCvJe3RGPwycf924dJw2EQT2TaXSDhhPak8iMxeQymQA81ti5nHP76VMZ4LbHMw6S258hRf",
  "key48": "3gwvtEsp19CGNXVMoDUNePcuUB4PqSaRkqdWXjLHZ7oLtxY7kAof5r19AXodoPvuPwEeZG9B3pBJanhBNY8R62ga",
  "key49": "voGqmchmxWghDUCU9HwkV6VBwFUKKvh3PXJ4Y6PxqKZUJHn995z3iK1HSYwSw9RB2j8hkXL41vykRfonqgE9pyD"
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
