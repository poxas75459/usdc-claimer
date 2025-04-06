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
    "4u937vMv71ZK45EbmqfZYK6yLzyTXNZnqzPWbSwiapYDWV8ZnMSuYfUkGY9JZ5x5H6EqvSbnsLALvYrUmYjTapoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgJD8K4fucUVzgBSLMMcrLvLeHjkLaHtP4Eh3d3QF7ZCAKM91ZzyA3cDCYTxGrMfQiFWaFAeKFFKwLG7XxvXaUM",
  "key1": "3ZVKCZ8PcfgPpP1uvd7Moo2rfWRZvg1XaeDWdrZ4YQhR1twdnKMR3YKK93P5jCJci2QS2YnXkP16c8cfZgonJsa",
  "key2": "2VjZn6ZaobumiDR6GafS9od988phWyJFnh7h15iDsT2zFPKVPKetWrZ7yNrP3L1qLWkwxTrV7Aw9a2kedoGnc7GF",
  "key3": "4GvJshYohwvaqGvKFbtsJX8Aq8FxT5h9fYrEWK5GcGb9HTRKt6XemiwPQD35Nr5v6CGc56cKZ5UDLyBmJF1LEzBx",
  "key4": "4PqJZQUYAqRqBQnZWaXHv1FwYYE5tvmuJ16TZq2hwaUi8KtqDAuujasr6BeBToW6Dg3D8mqy26ZnJnkA54P6b5H6",
  "key5": "2L6X9JyXDpyLjhAhwMJ8kpVrx4o9SVmBvUfh6z3pzQoPT9iiWRHjEXNRnfipLueaugR5vEYfpbpWAqCWtnxWcsLw",
  "key6": "2yifpNJ6PaEsszzpHgFEPWw7zQJnEppeKdDcUd68EunYsqDX4fcj1oMT3crRd3CM1pfFqZCZqdBiE9uJuJnNbADm",
  "key7": "4SBAc16anxY9yHYeittTREtaRVeX69kbnr6LxzUTg3h7MfLMxDm2H3qVdaTo1YRsJ2WW4cuYw1XjPpuEwVjpjL7b",
  "key8": "3G4AK8TMHJads5t97QkK4GSzSdHybdBvZaH9RBLimFFX2cWAT7Ts1xiCnbeZGCaoS4qdL4deaEWYtpwd3q5hvH57",
  "key9": "3uDHQfUobfmLCUceEoc6XruHgsJNvJgSMFE5rK74E28EWHTVeY7NHagEAQZY2Dm84kSGGfd2uyb8d7ToF8aFL1pq",
  "key10": "51Kaczh2A8Z4VWiJBgZX5dxKuZTosENM8RRM6T82skqBkgqctj6ScwwgQiF7X7sXvGtAGUWGHpZNjXg5rS6oMUSS",
  "key11": "JFHkve8RQNFxNYYRz5Ez7pwk7KC4Cu5eZdikGU8c2mPbWT5LxQzXMzba21hb29UPdgTXWnLSGa8GNfr1fXyzhoa",
  "key12": "3ySxgEvixydeCS1FWDZxqiPiFYHm8z2nabxmLdpbUnqzvBPBin5Vn44r2zeCod4gHTZuFxdj1RR9xyLd1ck3cu64",
  "key13": "5HKnLVhkYEScdRodraVg9YjopVAfd2UqwBhmg9moSY9qPvPCsjoMr8LAT7TUWTFC4Fq44Kf8h6yed7EwMrTyqBRb",
  "key14": "3jhjrdUjFAaPHKmN4BoY9ZRyeGXyQzChL1o5rBCgShFfytuKmRjcjABETWT5hP6aLBvPgxiMLHE8etso2M964p59",
  "key15": "39t7f3ToV7u1WpiEHmECL97kCPQpVfqaXKmkv2FvUifBgB7oPzmJHK3DBkuZP1u9mcWjC1xdP3JwLqqd5oo1tTzU",
  "key16": "4Ns6umGCodNWeu39wQjhL7oeu7xcgegxejivoawa1d11vQsqYAE66HApoGgRChUdpaudKAsf95gYdVmux2P2ZiSf",
  "key17": "5tjiMkB2e9jG4YyJT7JjMg6cpwHjFQopSDp5oryTAUqna8P23SwARGp9z2uXuTry9SbU5LzBAFhCAxw4ALDf5Bsf",
  "key18": "fdiwN1s46if88i9gof5JGG83HYqejesuvzjFCRsY8zVhdJ31qDow5xJnwjwDTj6tU1xa6oRGah5FLHsUwFyFaru",
  "key19": "42paabmGktA5htAehnyg2ijtio9g32AtNHmJZTD1fX6CYtvCLDZYW6TzUHPUHSYaY7juvEyF2AB6GNZYNspHCmop",
  "key20": "47UjdhN16cpcqEzNZet1jvbRTw3XE4xDmYLzMKECBWqEFr6Z432icnGYZofb16UGYwGktmW26z5xF2rCQozHL3Bm",
  "key21": "3HXT7sssAKpfmi6wCxXmqcjBCEwCUMbg13wFk7856EjYXF5duBVLTTcbLQvTtxzfbWYf37k8tUkdEjH2qqe336QF",
  "key22": "4EgV9rWhnJCLF9i8mRWJRXWCm2Z44FKGUjo3y8HMk64wxBoWXWKhP5gFQJfv49GAnvhgAE4JDoyRRoiVRwoxXvLw",
  "key23": "2SJTqBD3tNrWsiFX2vQdCCdTsLgDwXebrhPtKFwvsbg8tzDqP1tzze1Pk74M9vWKEEmLXK7U6xVZjZK6e5CtV4d4",
  "key24": "2HFuBX7opgD3USGcG69xYcPH7JJJBDCE8bBMoNK5QgL64nP2G4nAwVt9MdgiHqtE9XRE4yLYGoh3c6TFgxusEX3i",
  "key25": "3gybDkaDwMGSbwYPYPMw4q4SYGhZex8NdcSd73NLrbo6jKiWcXK3S1m9wRwKi3C6MQyfYcJyN8gKT3GFtxCRxhGN",
  "key26": "37ACHSBkQGVMbsqpfkq7iJmqKb1ue3Q76RYRM6LoGAPGGkDaBJtvyVkniNGWLuGb6DjnfffNtXWVVSykxTKjPRKp",
  "key27": "4RqYjBMJKeB8EBJzifxMayghTjLY1ENfZizphLUX9QGTvvVvK5JT9T4wWpLG5HouddnKbJiQeJVmCqFKq7NoBV1i",
  "key28": "wnusv543aHeD2ZMmMVsetwKJxdwP2MUjnwFfUiPYRVF7J3RiGy48dnC2vNS3Vw5i8o52Xg5xccYPyo2qE21WofE",
  "key29": "4eiEHUePc3Dww5xQrMLNv8oxrbLccWGjUvFTwri9jPjwp1tkoPUAuwzLkBEWXoRkur4aEKffNpRoCDNnbVq92HPu",
  "key30": "2XvAECkZoZ7vC9pku5pquD5hnAosYcJukD18wD9ADGTRuYb2YYuUj3V2K1LbS3C5J9NNvcJQZMzqdcZR1BMLSGRu",
  "key31": "4JoDveYpQ9di3tyo9W5hcbh68zZ8qF5GU8mDGqdVMFrcB2pmCgN5RmVMVcFxvFZaUaGnKduZWX9XgkbJ95nDNasb",
  "key32": "2UVW7jw5iSMneuovyXT6wgHjPJ8KyKwgA3aU3R6ypDJRRBUdsEhnGRfqhjxmGsGncEpuVWudN4PD5cGAXVM7R4VL",
  "key33": "5adavgrj9LcFEKHTUpg2j3s6CnVKsBtVCgZAzgXEJNX1TdHG45MiP3fTw4B2y5F2bvtaAbZ51GEFpxSEvajkJKVB",
  "key34": "4GVwDCPRnTCDrcp6fJthVWGq8LjovvZhbFizKFcWJu5JRfCZtBkkwUy7yYssSanXvafERkRbXsk8DPkQACPwQiD5",
  "key35": "49j2LV42HH87o1ekp51SvHJzM81fFrjCJrmk8WFLizxJVpRGrpbUk9E6swW6eaCfLEQLEcNZCexEeMx58Q3ocgVC",
  "key36": "64qwdnsLBEt6H5j5L6ri7jumZ9fZjxPZUsj9giTRuF1YQRbdtT74dWvzvQ2PGxt73TtE9d8JwWuofzuPVhBpQ8Cn",
  "key37": "5K7f9TZmFTTrcvvv11GP1298diaLEK93axXuAK1CUiFDRtpRU94cqoJ175eAySBpDxELP4D8sAy5t1ZcVmimWFCf",
  "key38": "2WmdqFSnheW3vHMndedVSjmhSnkeGixRJbY3YCYHN5VdrqgfXiURrpdG32oSEjoRXNicgg81PoeAM2aumwCTjta4",
  "key39": "2kmMzKfSMDCLamdCemKPBuvn2djccbPC9ezhLereCApi8uAuQm6qVnJgHCPsgsVKFBZRPwQjpf6WcC8fEVL7VE1b",
  "key40": "3Hq6zCn1ziAHHNkh5dqoKbWVbXbt2f8Naua3vyw6ANARktrdVE6xL2hpBzCt9aC9sB87UtbABVhUidjKa2P1ZnSF",
  "key41": "3x92tiN3Awsx1LwiahmF61SvQM5oDLurFFja48xnSmAJWVLwk4FH8RMSHXUfWU1EejV5CXtmNnPmKXoMguEqtq2n",
  "key42": "35uX5qKTED74e5ZJ4dBZTNmYGztSAxuUyYfUdsutYR37bf6ERmFsJk8Ga5v9UwojTrYG3YBNwsrmGEeHfkFZFjqD",
  "key43": "4PUGaZ8m8igqKN3qbCcu3JKnoQ6kjvMV5tL5K32tpMmtsYSFoX2RShmqaykhDUaFG2Kxx5iGmT6FGNe9fpuarK3o",
  "key44": "1Ep1rfSVkgxqsWrKHdgJNb8qTc13zUqapAuRzzX4zaEPyCMTQU2SHDnwkUy7Wqgwp76vfH7fWQMBfaRdvL4qYWu",
  "key45": "571cskUVuP1SAzpyRdCEqgwfBiHo64BJEUchFAdSjvqXAu5jYaLPqqDr3LsjdktTyfqGhbCMQiP7qNu8a9eqjz7L",
  "key46": "5WgxETMT4dixU1gNW1DiCbCfeQNvDxX65BPfBKtRiLqMCFLcMaCwp3pipFDV1xVU1iekJuB2yg6YHPvDmqcQnzee"
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
