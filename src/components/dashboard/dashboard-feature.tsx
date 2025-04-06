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
    "5arMUTzwoEAWHi25rCD1TqAD7EpW4AAcTZtySaTTxQAnYTPVV5rS4v35AT8HHesoTnMzTNHK95TqxDWQZBPGKJrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osW1L2Kxs4ciEr8NczvBxdMMzbEvTDoPHiFTMviTU75svmeJ1mkxHRN4B1r6FkKPB4Apq7y3Nn6jQv3KYG9nCyt",
  "key1": "Db1gpyJjuE6fbtDSnYGYCtkJNyJeyMProM1uXTPJMmbF2qEiLDR8bh6efhWHq7Lg4x1kWsaUTWop7fZJxkRXzao",
  "key2": "3TQpifbsaYWAkpu4JJkovj1hD1VFSBdXnceXT1e5gCb5FgoUSrEgVEswP2q4dmYqnUofez4gzUVZLNfg8aGKozKN",
  "key3": "5231yezDg4HEA374HDriaguHXpHJ2dCrzcdFTH2kZVLFQj83JZ7CSzGAWE5eKNq8JpSSHvPfgoGvW4SLk3h1JgzV",
  "key4": "5HSSiGhQ4PfN1ibpkNRK2UN8Rft4S33WF4TBkXBungiKR8w3bTVNAt7XRdsRVfSjMFSyC8zKRXbYGstxY2i66wbK",
  "key5": "NN8N9Gdiyo3NnTk2ah8nKYGCTNN7jEs8Ca7b5hoAGaB45DM8KDD8KPUPPKXL9b7nEXnsejHgEhJzVvmsATsxEw1",
  "key6": "5EewjzpbLaMFG1C77zHJXTd567ShKmkiHcfsV9pDfyombwrKQYAkjbqb6ZNiGkRSnmv6kywHAPS3kG4qf97TSsxn",
  "key7": "Hqh5p6x7EtWtdaRjpxGcYGNrP4WQ3Hwe2y6QxrDHZw6naYAn1oJHEZkjarUdqSKiVppJ4ua8eSc4XcXxtRKNEUw",
  "key8": "3f3ibNwLz6sJmyS8MrdaU69DfCLVvgei674yFQKzoNSmPjp6f4RFu92D2NeRKCrkpfMyoc3gj7C8PLBPeUPHxa5K",
  "key9": "3mDzVyPhjMYz9RVqsyKbna7YigwwnWe9hR69vmYxE1k6EzeqBJ7nCMRTw5qmP59kkNJdXNHtMSUt51yfNypc5e2Z",
  "key10": "2DyUA7B2dZfSM7WiCGthxAnPJ3qot9M9B4DL59BXsSJGaBGFV6LS8dYnTo429AUwtLnQBRLQ8wLpwDZsuqjCXDbE",
  "key11": "4fa2bRF7ki97jSe9dUmKjwHP2ZvbNGMHSXxRSK8CPsGpM6sxUTc8FLLbB6wEVotEuaNbC793GyX3uFSgaAw9v7sH",
  "key12": "2xKVMx33KkiNWLP6r3tEBJKchit9SKrp6voJDYAL6hCTf6M9tq5s9ovquy3pKEQDRxAmvyE6uJLy5d4d8DoRiJpd",
  "key13": "AXYLJXVw3R4pahXd3azAj3sSLor2pLh7kQxvB754e38oxHDwPuX66gc7ExGWF4L46Y3pyn5Kd6kapdjkDrqnGrs",
  "key14": "5EsLrMaHxCa9cyTiTSCTzXZKs3C6LvBBT7nZAvJBPR6ie6Zw4gNR8UacuxsDuuGY2Qy8wnxewDWyi9ZRa1wFjV31",
  "key15": "3oNaDHHqi8P3GXJH6sAQGa5mxaYrgDAeYNy2hfAx3w4AEU5TduKawjpT4e4sNbbFZtpH9TibT9mKbkAMD9bzMWUc",
  "key16": "uP1hsgW5Z3NpypLGt5pDuLSSAiwoyWT2KKkHfs4D7AxPcqMkekUskQ5nVY8TTDfpmqufywQgS97Dr1HZ8Ab4JV4",
  "key17": "5n3yRmbKTe1UvF4EadaaeYuWaGm5sSgFDK549o3BbkGdGbh91ZoLqbpUwBq9tBjJoXVP2s8221dRVxs1XCf24Y59",
  "key18": "4TakQ3Gk6wq4vW7FEYXt7ifVGwJZWsBaJRKZ3GNRHBMD3Vjg4mTqjwfdMKPdo7FdAiDfUB7nt9p5yUDR3MR7XzHy",
  "key19": "2kZbqyyy8PMk9zG3b1Nzj5K6RHa9ySPZtuBGezscc7w9PGhUvoWiNAHLQY57PtVKmMpYySpDK2kuda9pNVpvJPT1",
  "key20": "4KQ6ZWXmFxQkWQKCc85cVLqyM4PE793KJQuTYbYgFzGj4MQTbM4k9DPbfk9up5iBEQPDwXwVYWinL5svUDqNUHmZ",
  "key21": "GqBjfp94wX8ibQXRcZL5pxsPctzErXrYAMRvyuGx94CRKegy6FHThcLv1561PtkHU56583vMbd66z5AwgZprT7j",
  "key22": "3Soipr4JkTbHUmURjRXpcufRroUYomdpfrvWfZ1Fc9wxqwEcRYxheZVq6snj9WVJNopkm74xhL3euh2tMYw6tjxw",
  "key23": "yPG1jW55KHafKuQe4pBMsNWoZxdjiq9metScSprnZXKzJxgBc1Jn42jNEfi9qf7yxChCNPJ1dR9K8ksVprQTzJY",
  "key24": "3e5sSkLTRu5JRNCMYT9t4P4LSMEPwFmKLupGeakdSjpR1YNcwS7iAjYjQg4JKZ6J2Q5yy743AuhV3kpBigby2TCc",
  "key25": "3iPnFzStNYz4j2DgK6G6VUSXkjrHqGe3ueQAinPU1y2CfGRhZr4Wqu3ZYnt9zWyETo4GteFR3CyL2RGxZFDcDDvQ",
  "key26": "5LcsYev53RSiGnuCJyoBDixU3WZLD6yVmfaG9A4CKYsMZJHZAiJb2FythpEGGhohVSaENzRQMGgmmuzJXCYjppC8",
  "key27": "C2zMB4tJevr5eEpD7PTwcTjJQ7vqAfaw2faJPGXfna8UN4W6o4FRAmejJyzPVnp4YwQ1UG5rXtFDPTNV2Cf5CJE",
  "key28": "5LQSdxuKLA2UjxTUonYdMWXFaSbTfzt8oScf2HyFoVwZ3EAhj3rLyojBeWWpCBvkbeA9H6H4JfFi2n2tGcygX8JB",
  "key29": "44wsrJeGxb9F7p5mDWTTawMjaUd7xrLaw5AUgCHTwHfxY7MhP8dJ3G4iStW9EtLaXZuPwSenryri3KyoBrvcE2F3",
  "key30": "4fodjEpMcRP32D2sNofEsBg4AP2eyMopwxqiYJ86PAboqdB8K57Wc7uJS9i5GQZdoRx8Lhf8tKsoMgRiJAeFsaj8",
  "key31": "58Uqq5zxmWcdFvF8XNRxEGoNKXanRp4TmV38xm1yJvXDjm5enhunVEVAHDuy8oUSAiE3W2LVJadBRXULPhns8yCZ",
  "key32": "3TuqAm8CXL9NcFGAZN5feNciq6ZHsJ6hz44nxKpBQnfDFWkbisFCbJqVwxj89ED6CA8Zo5MTwz33kDWGBmJVFo24",
  "key33": "Q6iFhwYRZnTHYLVjGFpiycknssDtoQVfW7zc6gJZnCrDftGFmUvDmT6X1T1aQQsnzYJwnuRN8Zm2fA3qt9mSab8",
  "key34": "4YxaN8jCSVFfpUdXJKXpK6krKwXqHSRf6xNVJiFjAkXLkYRz2eCYypdpj5qGy8q7gxWjTc1ejn71AB5CG75P7xbB",
  "key35": "UVTC6x6yNnHuVU62if99XMYZQPeHqeLxGjU3rnTfKzX6tbmQnp5KWLd8dxb8FsmDpiBbz4jiaQjxtrC42E4w2UX",
  "key36": "3CC87QTT9iusZuAt8z6Xv9ptKLG8im47TiP4f31vZ1PX2DwWYAzTQ5S9gD64BhN6VbT5x4HdvonRG34mzSjaddSB",
  "key37": "4xi8uZ8SrpJagahS9VUxyBtgyHWNBHx83wcxYTfaR2fP6xZbMEja4dazRar4RLvFqVYK12jxJNhEJeF8hoGTr7uN",
  "key38": "5icyXYZZjpyLd3UL2T8GGaM6MDMteTh846Q9BGZUgxdq9RfaHafkZmvSGXzGrchsfu5SBh5VZZ8nRWAiUAXtBSmh",
  "key39": "anYY2UXHXk9A5pzZ8boxB1cYQSBqQXFs41eA8CCvd18gBjPkMxiXNZfJBVgLdHnk1AFNCPvhxPivst92NdhTVit",
  "key40": "34rxEQ7Z2eXoauvysAYNb9SY1cEapVZNdmfzSSzK31cSqUQyawjikuPgmp2sLPrTUPQnxcpV5RMmTzzwDxV4e91p"
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
