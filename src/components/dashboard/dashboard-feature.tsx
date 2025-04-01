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
    "4MF4TWQx4MNcT5hLU6FmrMWoV8FVEhE7xudc5M9HPtCW7LD8bgo3ZEr9ahejuHsX51B1EuE7F5JpviYEv2kEmp7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7fkFs1VJeekmhXB1ghXWHF6Shxh6QybjsKnPfMUUz8B4t1PxsYimzSfjcmVt9CAsvFT1eCUtKRKskTQ4ZcSqBp",
  "key1": "3Lw4EiWuCU2XN9Pa4eE25F39STeoowpb7xsRNHQp44aUny9V9tdwYKw3hvpedS2kdZCp5WyxxsLggsx2Y7fxU3fz",
  "key2": "e5KYYRawQaMjwJauW98JqmtTkK8eETL7E6smn588ogZ4153yVfFS8CHuaGqschLdE27xLvnkAVwL6f6Y7XNHMvK",
  "key3": "5D9v5LnmQrNUDqKLJcjYBVutfpuynZbpmxtQTM5rJx8qPkFBgxB8Hfook2ZoLMEzxGmXkuc5LKpdBRnAbNUwqLF8",
  "key4": "4ux2RhWu4Jf8r3A2tyKef3MKFP6dR9FD6AsndsRncL6MC7rimgiyasoJ87WP2PHJuGH9nZY7gejhdPt6tprzTyKa",
  "key5": "24vcy4qa3KBEwVbv6Z3L7puCmkXUMzFK24AuD6sJN5ropie855hRa1S45T5v863RHNLuvv8exxCs9sNy9rugvUFt",
  "key6": "cemJFsbkF5yy66Wjmpps2KezpM1HpP5cnnmWFmSxWFSFDNUujTemimQFdPgYXFPWTDzkEY3odzc1Pfxwhzdq7U2",
  "key7": "3SQSSvXXLD8ZHqFt9jaReP6oYQLpE4Do7fGwqdVi9ahA7daooKkDz2mJSauCoKFjowmtxAMV5Yu7qQrxWvvPbcLb",
  "key8": "b4QZnz7qk8uY713kbRrEMt5hUPYnf2wyN4QEgRaTu84s1wKU4QpaqY22Egb3epgo1pS48NTynhafmv9Gu3dFLhe",
  "key9": "52WR57TrJanV4bPPN1fgMLFqoiWaiedqGCtYcf7t6UmJjchATPRxveVi2H6o7oTnjFaZ4fn9vnetGNCUBwYSEQ8F",
  "key10": "4zc37cxiPhJWTvX9vwFQaYVdCxc95J48X2Qy1PG9RXWiz2ewYMAydY2ECr6suYJ5gr45WsBGzGu1JcmVFLHZv5bv",
  "key11": "PzL6g4uSdLDjy69ndSJHbkEKqmwmCPSJiMMvcif1M6NEAkgKQaF3xpRidZ6obmwE5DV6yWnnZwMHfXHPDF9e7ec",
  "key12": "xAbiKUgjNPSq1f7cKREo7WeEgur8syLJ8Cy4AyZGxaxRMvTmGgFKbMQffNrzXRvaZT4ZpFihBBgjDRWYE2attPF",
  "key13": "4GcbmN1Gcj8W5isiVSgt6N4aBQiKmTWAQi5q1wzeDKJv17vGiyuo3L5VLpVC1mJ9ZyW2a2qzj83VsFjNw2izPREF",
  "key14": "UPdzFd7wA538LPNivaQP8AkJbgjKCTfUZoyTF91vLTNJw5fTQ9eEhhghmWCHmGmS52aDdVAe5dpqWyFqfHXx4k4",
  "key15": "2szPJzPvr6BopqPGj88wFSujxGt5PbY6d65jYSTTpMiwoJRvq8fsvMXmc7PYrmh1utrR7WGixfPqpA9XhetE8zJH",
  "key16": "3oYoQieYWkx2ix6WDFKFNZebquSnYdrGr9EYjFWRQ8G2UpY4PTXatAqK66PLcgKPAYoteRaMqWFUYVAdHJAyf6R6",
  "key17": "54engoSCHGnkbAr4Nq2R5tzRVZW8ga123ShBgkqGxbWdpaqD65XoreEpo9Dc9G8L6zmdP47dFHVYYAFH1i5dx4dd",
  "key18": "3cSoJ3ZWfhT4KaNA7Mqj48NxqEYYM4Tjnax2tuyP6DvCKYihm1Xit32F5Dh1B1aonvjvevyApScjcNo98Lr8QnVo",
  "key19": "44ubbNHBr1Y5X4Mx39L6PSn7YyvwaugDEAsLtouB9RMj9ZUuu3CjDWgDghW8XqtFK4RVGXnzvvNqG56vCW6smrPg",
  "key20": "oPLwYERUsYCrmh8NUPVPAmDYjEpw4xh6gmCSJVvQjnUVCrTiPHHxPxfwXiYzSod8GCiETEHaYicMoMUHCxg89q6",
  "key21": "48irfjgX9kf5swwhFtLeTv2HEhHsMT1EKaT88wckyQ2nRxfd9iHcv1C5xNRb5e5qXGczqNos69JFJYgUZRkWigWA",
  "key22": "4AtNRLvRKw61Vd9SkUXHzGNz94y9vAZ16Mf98gCsRLwMGrF6GRGHPjF99XukqU1USeBvqPRRd99qVoD5d8dy4Un3",
  "key23": "2Mpokd9PpcarkoMtN38tUm78fAqyU4qSiiqqS3drwD9Tc7czcJDxXRodbm7FqzJL739um9UyoqmAnroeJBX12gtF",
  "key24": "3PhF7ih8PxVUd6tFYCujHeXC6JTtYANcxuRmSmT45ZpYT1jMVCzaSY96At79TYEjn8D2c31fbAAPDgXoiiCrYj3y",
  "key25": "5gHSb3JFSMbBhKZEM7poLzUS7Xm5inQLdh5zhocNqVJKdyySkrDzrLqdGiMeix6aBjMfts6izMa92RpWcCFcUzwd",
  "key26": "3uXrWopCxAVJraFK99BNvK1JHGFf5oydPiT6J38qY9X9vJ571CUPp3RDnwLhqmk9P5pjXb6ghnvf1Nht6dXoemsF",
  "key27": "yn42FCvFDXxpT6VtTrxPwV6AE6GoLdU7P7hZK9MyqCsVSRfwvzKno8c1ue294hFoc1gVysRvNdt8NFPxWiBTp3R",
  "key28": "33QBR3epd5QWgKdTfc2igg9HXchVMJkQbgCmiNDA39bhFkb6DPWMNXx75HLLzo6yPDpNWBVy5rRKuMspAz2sUuFF",
  "key29": "4o1g1yHncdPb7X3ebBtBG1WZGu5PWGMTb8AWxAWz4HV4QhEH64YofeSBBsTRB6HqnFuF6uzVHERHYgFF95nLunEc",
  "key30": "3kPqzJbEDVPMtLjvM6x6gnkRoighSAexard8JkiMWy1b8BVU61Gp153jkiCRxwQzsph9byzV8xxEzvqm6GnWTLRG",
  "key31": "2svKWg5yTSAA3z8wYkP4d3TxeXEEr9PBoMEKM4gD2i7GRifyRmJD8CQomAzWmLaWa1HWWjkGHb9DYwjzcSCXVR6Z",
  "key32": "5Z7gV1sbbVrnHXEbd3YR5vFCZ41uhPfP9cVduyEDyppDruGzs5KVjaeML2uTZpKxEveix2DFAoqAr1pfn7yNkRuz",
  "key33": "5qJkCmaNs8Y8tRwBvBserTdW55XpADEU77u6NtaxJsUaLxksDKYrv7dKk4i15qWis25Fbg4j3xt6AkdhB7DNK5Sy",
  "key34": "3bdUwkKdimP7E5ETp6Qt3AN7ys5cjYvrLG1ajcZ9TdvXtNiR4f8wvM65DmEDG4swktZGDowJNffCjh83UNr459kk",
  "key35": "2YxrSqyjFnHQBVDBEACHYgQbGETqzcMf9m66A2fqmBmTERMidE3BPYsrk9CsrbGJaWWQRfQLUEnja5sYdyj4ywLN",
  "key36": "2iHivgQgD5SWBxvH7FQDnAxQPd6okPTLpXawDADKERY8rWZNfk69BXgS7N4EVZLtrgRY6qvFvgoqv1UFH2GubmVo",
  "key37": "2NMA1DnXLqb5h9je5Du3mQpyi1r9Hqx2VC35G3r4xH9aXfgaFEQBAjuu9C6ZwLCN1PcXAp4k8CTizNYDpfGwyDpB",
  "key38": "4kJx6GbZDUrZ9bUdH24oCoq5CLAzgjQdjkfGRPNhwrNjQZVEE2zNecTv4j7Axa24yWjfXY8g6uxRSzvTsjQDuHqx",
  "key39": "2cVwGVMV7kXTx8uU97Ev9aYNMdat8oZQBVEPfwNmvEbA1zm5rJW49QHEqzV4JMepY1osZxBne1xknXhRUhZ9fZq3",
  "key40": "2m5VSL5yNvRFjT9F7iuzXJmWNVwdJS1HsVeGSvbSPdvPKKgTPAXhu84KnD8eFREcLziRAPgR4vmmGJ6hepiZ5sNo"
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
