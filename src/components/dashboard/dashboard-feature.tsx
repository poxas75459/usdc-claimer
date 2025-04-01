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
    "Yi4a5JU2fKBk43i5PrsAMEBkbENvvMiBU5VYPfcg6DeYNDF2hmrtKFeKzndkCz7NtXHPveN8s71PemMFk614nVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MiurTTA4WiNYPs2E3n4AHED5j4qNZggFj6PPJGsfyANH2BUpgqBWxpTFMGS2RkTYXJya2if1Kz8QrxSu22bvrGg",
  "key1": "5sULoRkZB79batgPYCb1Z7uRps3bXJxZJxRTSvEgdGuvAcHE7nCY8bXDXFNPVKU9wJyCLpAs5C7ps17E74jTWyzE",
  "key2": "H28BwLDYomnoW2JETVExz79esNuEKrSAfqCkeFF7aAuoXJYWoqMU9pmdX4v9MreyGRXCiShFGCCbMzu6LuXpTwX",
  "key3": "5CJXbsqiCoqaVgfj2wcHFU5psfGV1gcubPKayKn3GXTKgQr4UfTSBHcWhLptrQm6HT6EChCYaGtWfYyttgaYTQeR",
  "key4": "3WcnUfpGCrC3qKNThq7X6tHEnM1uJyTtBNhvWSCoA8DJXb96q1hzgq8cpPvnD2zXZXTD52hS59rEMzCJUJFaKMHR",
  "key5": "3CWqAMxdMcsy3SX7ph3sUzCcnCLmuyjiXSGfwgWqf3SFzSoPxwjF1WJHKhx8osHq1LvB5nWduXzA3UTns1tnajJL",
  "key6": "4sYdhEHpoqpN4hMxio6tGbf7EnXoAvCgVZ2yha5wPVWZEXjQz3davFbuvigg9Sjdjs637t7QJ89sbm6Y99TJ8Gc9",
  "key7": "5BJyDamFdY5ShfFHfGR6NbyMkiGAF89DLniuX5WpcJRR8AQdc53a4WNiAK1M7cdj1iL3R8cYvUWT59R7zZC1cyLc",
  "key8": "3ShMb8UTQo2pyNoMxDfVNyVVYN1BYjnqihujnGt9FbExQK8S9LG1akczxiFrZdbj1QgguwQfikkUUgmMdx7QvXHE",
  "key9": "5nP6aM67nShuhVJpUyNFhs3g1pkckbMtpL7oxPhRkE1Gs5vrXsu9ssvAiYp5QmnkhfJadxonDH8FcoidPtiFHGEo",
  "key10": "Jnp6hoTNbueUwrkDCgQHSLuRHTmLRhM9cL3En36osB7G7otpGcDnnTxvMtzG3qKeHZxt6C937JjJ6CDvmQTn7Jt",
  "key11": "3ijBnEYS4tCnzE4cNfKvbq7qszXyPcAVoSrhUYy5cuGQPbZaTYTPuTSqfakTeJAwN5q9c3LwxRC7fyj2pHtyawRC",
  "key12": "2Zeg9Wt2vQCVzyiu8e6ZnQqTe8c9RbkCc4BrcxxK2KfCE6K6MYmB9v7a87p6FNnmgMQZ2VkwnjE8eX8nTVWMdDQi",
  "key13": "fbQPS3WEQjmdnubpG6EmWXDmZPQyjbeorGfmwLkJ88yFRuiqhyKAPTVzoWoKs49QtmEBZMnG3xfxxia65dXA3gy",
  "key14": "5nU4ky27wQectszCq6EC52N8TEsrxdPN6agnbg7fohXFpVpmmFE6u2MszpgdKcRSiS3EeB2hsLLCreGPG6mkMqfw",
  "key15": "2smR13neVDeuHGDv2pRBZRyJh5EUjEYGwn6uwNgexn34FBJrup9X2nocSs9MxtXcc4pzPFdBmBS7zZeABQmhzEUw",
  "key16": "5uRZ15ih8XJrV21R3Ed5hpfDMtb6PPRnJMBHQEFXkyiLXf9Qmpd1ULZj7ki4HSWabjzKnD37xr9c8JyfFPVGoXhn",
  "key17": "5EgYwDPEDY96evZtAUcCpiC2UVFEL99yK2fMpWEx25CeVsUvEbQT9xyHoSz2AEUtKJh7kTPS3eNbSrVQrma8MpDp",
  "key18": "2ufdk85JBjEUQbTTuaAKPTj3JGGMeFyPhDCDNyRnHMPoTjXwKZ21WGsGiZPsiaoyGBkw9uknd1QhCCm8if9ZdPHP",
  "key19": "2Ef4SdjUvrwTTcdc93VBgQLxHUAoroCnQnsEY5f4bbmMzgjEUVzbLN6KJ6NrY85k37H2KpPu3qwrnKscQCdiW2J",
  "key20": "2yLekPdoz8NmLBPZPpN2FX1RtcJvCRoefMbNqY9jzvbv2ZdmXrXvjCXbF7nsxnszCLz3uPgAp7XBNCKhAcCLJmS7",
  "key21": "4TaZHgGQ5yKmr8RVKfqSBZhmWxDy2BjuJqmYhH4MHoFr3C7n9ZCNRuQz9ZQFYw9GwvTJwjw3xBYmFXSQzS8cBxLR",
  "key22": "2QT8bNTfuCP7grArS8FShgNeq5cTpV3rYEaVF9qgF9TZ68sqKqfFbxkiAafaKijBpGoVsDg4S72pADzcReJari8b",
  "key23": "3dGRAVrARFFvRdzM5AJF2t9pMK8Kc9wa64oBavx3zXGFi8fVdbSNLu8EY1ykU1VhH5nxHfj9M6KEPWAELBCPmyZZ",
  "key24": "3Hj4kR5YaRH2TdXst4SNokazj7xA1ZrKScmJVMM9YjVZgyWQ6c8Gf3D2R8FetgeyPaaP9y47joeLjAxT7XfyNEiN",
  "key25": "3RejeqrifajFhocJ7VqWKNmbhV8zkaVSskhsR5rtnQ8w7ZFE4TSwJirABH2iSHz5TmJLitX6Q18qsv5ATyzWjfRE",
  "key26": "2zBZgLYVycjcemEXcDHB5zH7d9crokcic4ftQUWPJXozCFVX5oBXRQFd1nE7KCrKWn7SMjUf1gQPKqDtTeLyAucN",
  "key27": "37FetdVuQcrWHAvvMR2cwxEVTUmxSmNAaqBMVGpKHKAGb2j94khSUVT2GE3w2a7mAytfcFr6iE9SzcCSJGH6hCEc",
  "key28": "6AMAGiSimMw8hsM75DRZZsWjDNdMdpdgJ46xB7cKsnaCu5aNgNKSihH36ugE3b6Zm8aXARKdnsbRmuFNGoiQN6k",
  "key29": "48gTuS8BQmMJyAngSDW8pHTd9EsP8AnuHuCX3qe3v2BeWWRDA9TWjUoDwLBxyYnohdTW1ywGmufmh1zhZfbmEidF",
  "key30": "NK5v57RWKZCnk7YLqgVWjqBj7bkURHBVWwXuUTSCFCAS8qJrZ2khiXg9VQenSnqsm2eitYyqZXadKPYvuUb2sT6",
  "key31": "3aeKVR5W63WGB3n2Z6C88TVTKDRXDYQStzN5tAMMdtvSbcyFiQpYnDUPg2MwxY1VFQ6pJGYgvVrqoi62Vsw1fC1W",
  "key32": "3K5c1vzWzk9BwMtvUiEzpGZRLsBepcyaMwgM81jUaRveLequqTbf7pY1HQah4oDAcH4MxRGbHLaQqvpv6gaHwbFo",
  "key33": "2TGN5pNo6Y2iNZTKUMMa3hYuWqxeUmr4tLvNkDXKyK1qZkvJXRckQbajuifF2EXW3599eEUzGwvgbJ8vhi1ZDyP6",
  "key34": "4ue9v2QhUMzJZR2DJcXRuW8NzbktD5qPmf88htGWYQTBkdmjhaRHHsVtjv93B9kCa5vgJ4x5xVTex5TkFBr6cf6R"
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
