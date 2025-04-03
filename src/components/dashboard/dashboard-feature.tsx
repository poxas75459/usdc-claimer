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
    "vY9fCkodmGxKGhe5hEtMjCB6jL6kXu3pgaTmnEgizeKmqz4RuujR5zvVETatNuwHhM5KdikF3Jq9fJGk63TeXDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42kgMFRiACXPeMJRZHPkzHFLkjvJwxPsLD8WEsx5hnWxSak1iTWf9PLfiqShtFL5TLaFpwTgap7hdppEgJrXcAQZ",
  "key1": "3K3mWxvpqtB6aQtCjvH5rch2PmVCXzUUrphrLVcs44odDVQHvTNzgChvWGVG77AfRgWapYU9xkQCJgizMefUSanv",
  "key2": "3dWHNnrsSGvPHDcH7yf2j5bLHstLJC37hA5gRrvcgHx49Ltx7UttR8Rje8Ag73TGgzP8KxidGWx5oYAXcWKMaV7M",
  "key3": "8MJNDUGUgG4mQ4jgxWLxyVrzG9Duq8H1aoXaeMkjrrpzZWjPaxNkpg5JkNGSaUU6nGb7SJvkSGpJqjYWBbeteZs",
  "key4": "3tdWLV1GabQzHyqLAqR8n6MdYErvHZDoXbkgv4CnHbtrzfTEautj49M3h4nuF5QPHTFvBzkRSq9xQh8mdGj2qYRZ",
  "key5": "zUH8KeyQJdEaMrV9FTWogUx5vzHj42qr4unUcRS1LLmUEvgjDiHWogaSJfRZdtYieBWfLVxKFk466at3q9FVujq",
  "key6": "JFpAVnsvbkKJw54dyRB5fkx6K6Z7n6CgXZbQea88D5unrTNK88ACqZgnWD92HRDpp2oJgJFnaJF2f4Bn9iRSX2r",
  "key7": "3qecfogyECAap6iJ2czDeYZW733GRUgD33MnSkvA8YG5eBLUfksv4rWzEekp5GcL5yCJ53atigx7shXnqrQG5pBo",
  "key8": "631XheyhfT9vLc1V9Zkn456kVLEcHnhP44bZ6EYRSUpzfQPxGQqUotkFnNeGNfExnUTLq7Y1H943BJdD4Mns7zCh",
  "key9": "21auN3kx5Knf5tNdLqCBR1ot4ijYVMYD2PGe7wS6fVqLsZBPQVpJoDGrFCirq8YpMMoySwMuXFy7LUjTrL4W6JtM",
  "key10": "4ru2u6mvoVmGi8div1Eyjm7vANEJPkXFrc5USJpYzJ9Vp49oW3o9yxyXRvKKDy4QPqtAaDKiG1cpSBcqENMmHW9v",
  "key11": "3sN41Kqoey9me4oERUfgqH9RqeRiyqxctGWrG2baEmQxDBHAfVpH2h45rv45j7LjnB6h8fLgkcUpkvpe1pe7fS2Q",
  "key12": "33uCpD1HF1vGXL9Y8dBHD9xFVYGqJdjrjcyg7jcZTdW25VzMwAmgG9Zs2dvnFhAM3i3HSincv7wnY4Y22jNm9jRL",
  "key13": "2W99Kkpo7JJLFMC93MQYXqLVXLdfNxLUALSwNAuJjYqmAtHRcYLHamjhWCofqyHo1xGUfEAUJH23z8ydAo42p3GN",
  "key14": "3q9wWiceVcH9RwNNs9cEb2YFneU5i3e3WPoE3VH64t1ufusDky2G7R9Xs9QrfZybPW6HmoMDeBph3a8RoU7mXv2B",
  "key15": "4bSinDbRehvS4CNwTfJrYsHWDMVo46LmSwgtAuTqT1s5zTE2VHp1Y9G8H1MM4p33XoZYqVq47qKUKE6T8LzP5zFz",
  "key16": "31G8wmzAwQq1XBaXQAbkaoLcZfhi3MBxBakrf3zvcnUnBVLcj1akHkYoUqjdMYZPZ55zgNUMkmjByjXVNFzyoNig",
  "key17": "4ukeMDi22gytZ85W4dmc6ojPMLZ6qVQi7oaPjsiKnZscakCHqp2jjvAeRRaWPvgryXCZH6nZGLCSFKp1c3tVt57y",
  "key18": "2GuipQ9BFpc1nLnj7GZdYRAY2TaqS7a4HugKYNkkqCkAVRRG4jArV7c8mAhfvqUFuy5Hsq5y6ZCRqKzhSzNft3yj",
  "key19": "4mVy9jCECU8JyLvNVHAXPTh3nwabtfLpdHkMizJ44eDT3PNLeFqurYAmccuWRXf5wBZLRagWvwCGXGqbaEbXuC6k",
  "key20": "58VEq5u9QwWJkmYYvWcH91kmJF9QNTWTsQHiZFxgJ3Qdfys1MMNwxPVBpTmpmdaun6qs8As4Zbih1zkjFCogseic",
  "key21": "2cjJne7hVv3eHvM3NwucGubn81kuNizpxupiGAM3N5CXD8KR5QtnBWrbS4TsdNBzzLchXDksHyfUMCnJR8bFbmrM",
  "key22": "4mbAupupTh6iWfMTxPjF4DhnxGQr4sHTwG99uwfBEdFAUu9vi3tgMyTN4LvnGiyoQtE1SE3JmtYZfFk7peo8F62b",
  "key23": "3PTSo71yiNXhawWRW71TAoCs6g6bCg6ZAtSYcimowSxaXMwHDoTCVJy9Ym8oXpm8yDrp4fPuwfVZKMtsfgYJdaEn",
  "key24": "2tyYBX5v55D2FuuVhPBCFax7rwDXbAtcBdJ3bfiXyMsm9NGcRNQA7sghrAFYVUERfeGN1VzJNaNnSiYyufg4G4x5",
  "key25": "4jgEhjC1RJGAZerSD4JEKg4pBKUVUoRdoXhcHjp4huBbqg5Xt7Pjr8bTMSjUQgjBjNjvULsMQ6DVH2a5rRVutU4h",
  "key26": "wyBj8gPUxuBaVsLLPEsGEHK41Fv33VLpjnimptmsc1iA4Uvhuj9bhPkHKqS5tpwnqGwbAta5MqVqvcQ1bdjPPGd",
  "key27": "5cDFAt7EVPv7hpzpyaYSKEJHaNRicGUeP4icBwyxYQ2WYUSSs2nLJ9SnsX7rMtv1a7P3S2bHKjSX7H5hPERTU6AY",
  "key28": "2jxzzaPDwdfVWn2CMFf3dUF3j19pwGk6aK2yatGtEmtyR4r7u1vRTsWP1CePQahU5csiyTkWUPbFHpaETRFjoRFM",
  "key29": "UJx9xeK5UEBbzMBbn4BbYJJ9HrWGyjmdKrh1vkdL2tPYzMwQe1WYx8pHWkb1JYnwRLAXkEEv4JooTsVeviHpRmA",
  "key30": "3iPswa42tj7kdVy7pCpGRd46iQhtUDrQeQG2RrtVZ9sjFqrHyJwphnoUbNaCN9rSwAvWka29NftbAtkAGu99ASjp",
  "key31": "5jaMHjoxidXyUNwoqocrzNprcQxSZYb9RCyb1MuwJXGKxDQSr9y7iR6RC724LHxmVbn9sa6B1hTMEVuX3Trj8kyN",
  "key32": "23xso2nwjC4gZHxJQnYrTUVdWvmvPz1uvpQFmGhsx6GBmaiY5uaAyUNjRtzVQr9o6HPyznErmaoCcsC3iCcvhK5D",
  "key33": "4yrNcXJchpwL1ZD7zFzzZorqJPwxQUQnVUgRxGsZemFJGEy4FF8ShQenJpmCiBJTeJirBBb1xrF55zf8pdZmLz53",
  "key34": "63CnfCRGXwQeaorGjnw8xxSy9JSk6Gv1QxQeaTDy8k2wSy2Z43nW2uzEu84aS2EtucCEkLf5XUrcZVz79NEpbey",
  "key35": "2g4zVCSVEWjcYgFPWJJagQp3sVG6xD9LA2m2daSduSxTV71gJyNTLeBkFCwotS39szv1oPruntXVLqBT24WeNPC3",
  "key36": "2irEFTSsTN38LaGJz9qvpbCJ8cJjcte3hv1cRHGYicaq7FW5oBBECpqRDFFFA4teTpMvF8HpELmCfZQHGTjtPd4r",
  "key37": "48jnLxbPtcWVhFGrczyMASyUyPG69BY7fqsif4CYyKJVyZFdgXv1vtzvzyvkqV6cCvMqRYJxk9RdfWJKnan88eVn",
  "key38": "2HZhxmRwxhHxdi8ZRj78GBvSNrQa2BwkxYn3bNAyYDDQDq28TEYGuxg9H5AsLFJ8A9qVSjTQdwQh1263c9Ky8r1w",
  "key39": "24RJzPk8QmdX4dgLHrvLfAoyp5JBGvCW2Newa5Pim5JMRmsLbRfx1tNLEuETubgPMUSadUQdUWaJurCCoVYCzW8M"
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
