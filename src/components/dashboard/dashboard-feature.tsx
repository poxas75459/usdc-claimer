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
    "HKG22jDsxpcTmDQbe364ppep2Hd81yr8ChxCpszmSvc9EDj37syYcH3f2FPdeqHPnWvSLV8B5tUcTGr8dzktMrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BovDK8ydM3EmkG9jNdZZVqZVGtk7td4bTSu6CFYHzaccWABJQJ6iMXo3b7nQ7Aw8SfoaHpMgRXwFJ1kSQGG3Zkf",
  "key1": "HTAoNLqDnqUmxvvNZgmbz3tSrcCTQCxVhTpa9pJ3c7sQDLYyXcHEGxnRnkQakndmb7e5krLjgKkshHUHb89CJ17",
  "key2": "33MdjVMMENjCFRQjfsQJ5DymcKV3Z3EwtowJvA2nxhSsvJAfTYXCk4M4vtHrqQVzk1eStAFjynDUvAyhRGEGcvxG",
  "key3": "3fNsbajnqwmA8ZP997GAUJtwUNJZgGkHyH5m8w7CESjrsCEqrMycR7yt7Czem2gXB2T1aj1ouU6EuGc78KWKUsUo",
  "key4": "4hpT5FiSDXxDQQdUxno3Yft2SDf5jLSo9JfbbvE79spsXjjQf8q6hpRjzTxmyoxyHccGqF34rDk2JccveAi2L1wZ",
  "key5": "29R59dHxzxd32wA3vtMAy5Gj7xs3sdQyvJZzLwAP6531MEeW35x7DvYhRhcwzvEMsGorNw4xvsnuGQ9subKontX1",
  "key6": "4YruQ9UMtkJz9n7dFEjjWCaAen9bkMjEspFUe8EKqX42FkRsE4ZUUTf7VRB632FdFv8dApPgoMWEbJDj5njrJEng",
  "key7": "4zQVdtDjFYTKNx8zXLYZc6p3SLwbx54j9Y2oaYq1whEsjzBxQxzcHQU74FWuHR93CLBM59MoypNUh5CqQYbHui1D",
  "key8": "4jJSXgCVidy5sfqPDjHdWUqsR8urj5Upx5a7ArMCkermWQ72nroY4XbjRP6tTKMSXSkPNoydy5n1UDSk6vY9zjee",
  "key9": "5qh13achiuPW9Mx7Lhxyc9ZWV6xAoWbmV8gLUu9DuMdAL22mUqmTXEJGycF4KGaB5CYjNy6Rt26FuQ1WJEf5R3jz",
  "key10": "4u35tuah4cU7qDrWMiT2XtzSXnu4fChJuidiQvdu4W2qtUTWK9RrFr9rHv1txjZJv8nwsKSbLX7NVLYyNcMRYdyo",
  "key11": "4zu7bjXS5WDmdG2xJVkB9zrhtuoeDBEH1xDKAye4Ac1t7xCMTwBesnsC6U1HzCkbwdXgK6WMBE5kuCs92wXJmvBh",
  "key12": "5uFb2KzBgyzMQCmZnBtkgk36uNnc2XsfFnw6EXu1ekkhoBkdKTuUGQpLLFiRFgVutqxwPRWgvuRtYXpvX8vNzvqN",
  "key13": "WRdVyzntT4eL1TUEV89Xh5ysC1VtkMFW9jw7uiruedEfS7iCgH48RYGYrueJB2koSEBvALKu1gJcQ5wfijXSjNw",
  "key14": "5NfciAXrUquhg4SzQScY3JBFUk7wbm7qi1i7okLCJgqn8HmHcaENCkWktmNDsD2vEcjgP1vczY2Nj3QBmX53VSsq",
  "key15": "9QBzXnBKSrsyiiUd6a1g55mDQdgoN9usKJucKTgJe4sZRcYzLzH2jq9x4ZU4b93UYcRD5ivtVvejf9DfM1SEkw3",
  "key16": "5ktTe45f1Jcu87a1fU9uhJJhXYW6h7oMZjpktRzv51YHzq3qhbktHfPSf7VnhmpULDfnh1QP21JavR7X4kb4xp2Z",
  "key17": "5KnetRJHM3RDy6a4zWj8EZdp2DuuvbjHA8iKQC9ZadvxfGLnNXu1xMtf1am1sxMh74WHTvwZyTNEM81g4RSVq3Kn",
  "key18": "5X7YXCGM1SppGN1CwThui3CsgRhiPQHgoAuM1YPZvkb6V3svBjGNxzcRGscwBSSGUo9CCazQtB6wwG8CXUXxU5xJ",
  "key19": "2JQqctPpXLV7Svai3saYL89qwa5uWd3JnRXcycKDyN1jmVLc3oomd1xULERL9ZHJt1WAmWhfUcHVRHVqsHpVj5VM",
  "key20": "3NVmXE6L3yjoemzqKbGyAenJhGockUXdPAnqxP6wEJeRYpEjTiCzcb6VXpbsmEFMgdfrvZtTH3LtQPB4Z4rd8eAK",
  "key21": "4Tv4t9Ue6DZedAsc9hH5ueLJBrwyBs3UESxcAGfuRsVVpUJidNq1ds2cDafuh1HkpubXeTiAsdDH3p6Lr7kyuYqS",
  "key22": "4BST2zgMJHKuYsq7hKNbZZ2Xs94JoARM7EX3QSCT5ACFL155KiJ3eNbKnq9kz45A8vvfnKZLYpo9qbvmH2akpfao",
  "key23": "32x15kdGkYVMnf5rcmktLRSJ9aspMSQGcm3whKq2e95xZxSk889cVHTEKXC8BjTdWAChWAnSwJFuao8ZJrFPY6Ed",
  "key24": "3Rxn7fBs2B5Nmo14UK7StZkchM7BwkLKGYWYCHRAwDiA8yvcVACPchkLULmGp24qrQufeKW7XqQsdnDxtgc2SHjN",
  "key25": "to3J77piAR2QfqmtTFwPXismszv5TChKftdmYwsjhEZdAhHzrjPMTvMuXVQTvt3MVGHB9osBpt4RtRKYTfMJzo5",
  "key26": "VMDoQJM38Es2TvDbyvanUUM42P5dTttXezGrCheumAhgnoPiiBELuVXhJYfpFKjc9jqZRcKoh6s1mYcAw7vC9C3",
  "key27": "5MPxmnqFEsjwMnCc7qGyaNoABmwgF7RUAvQcge4UJdUXndjzcozcKnd5VqnDurHDi7BqxxRKbf9PPhSTotwxiM8q",
  "key28": "3X4n6xSdbmcC96aiqPWnQKBk3rEtrbkxiXU8ZyHkyp9QvzQ6ihpA1MHvRVzbrYVZmK4DsGSLJUWeZi4aGoHwQs5U",
  "key29": "3rB5tzWXWMMosPGc1r2y4wpWVJu39vEpdvMsZxPtJ43u8CXNuZq3esh5d4pDeAMxbiHStsaHub2GKrhe2ZcjPGrf",
  "key30": "5V1tL4RMMnX2fU3WLX11yF6GnbYHURfiQFV5aYFY31xXG9vUVzH7yrcu9M4RNdrt1wJEdfZ8YFkt45qxWrrwZG3Y",
  "key31": "v1oh8eJugR7SXXGBadUQcMKBwKFGKaHhJPWJkzgzST9BUSC4NXejVfAAgJVLWLPSDKGuRKbEc4mW3fqbK2Rkdht",
  "key32": "3V8soNfqrUcZWQw1TQEGeuAi1xMPs9JkYEtzUGHNgYbVM59AkAAT7tqaM8EoxoMoEtdPrLycM5CvqTCxw1RyGiEM",
  "key33": "WEHgga7p83gbEvDsWo33mnG83nWZrETJhbvewCYDYLxPF71Td8QneUnmcCt44fh8TtdkMoiPNV7BPU7ghnm52NZ",
  "key34": "5BMrstiATkvYmeJNBvj6ddczW3uER5RLNMoc7uzDWPpw2Z1npDR15hoMuStiE8CCBPfUYRk3swGvJFyPgCDKXBm2",
  "key35": "5fAK9gGDAhxTfWw9GbfZ1VH2C4P2RcfnzicLq9xGJdx6apwvUWfW35WhQtoLFNxdWiEF25wto5Pw4dxsyboP4oZd",
  "key36": "jqcV4sSWAjeSHynRZcc6mG9yZkEraZUCoQNoS93GudT9i5DBunRKokx4NNfyJ5B5uT6CLZKyDoqgvCnNng5r5ip",
  "key37": "2aCvogfrB5KmMxHeERmWiNCvfpbVgJVYb76PCmkGQQnyHNjg2di3RC6g2Z58EEkyue7dNDFdmi7XQ11RjjXdxx3F"
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
