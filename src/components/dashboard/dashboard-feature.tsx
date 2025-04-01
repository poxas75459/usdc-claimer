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
    "33pAdBxoSJoMNeuMCsn6LDLRtATCnLcE7Do3t7qoF21xawZtuoW7MChxHh9swzMZafbaJaHeSi3QEKirRmwAH2nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45FABty7Zuc9NHZFruen2HHvWurgth2KLLwxdifN3TvS7G1ZeHepRakK34jPM1MvxNd1iVDKMpHRWsQdVUn6Md4Z",
  "key1": "3ZdYxWjv47RYvkwndxj7NMTaDCBbaxpr2ySMzBKHHUQ5e3PUZ6z1uYn6tKTuNZLohXQBdaQFtuLmMboo8ExM1Yfk",
  "key2": "2vCPzd95s51bHhyiyXKde5Ggd3tBaJbmcuWoDeSqFEdNU4kyXUs8E36sEo9DvScyJB67eKWSZS9XGhETedEf6UhY",
  "key3": "5ESgFpyF3WEvTD2CtXHSkwkMcySiQMXs84331G3Tbwyr6Ksvh3rJ8cinK6szjQoNkikXqcELarzLiSb6RSBZaKuF",
  "key4": "26c8Leovo3xE4j1DY2JP3BRAL23QKTRrrj8WDsvVh1MR7WYsmCUVu7sqZXtUQKgctVnFQjUTJ6CRoQKBHvZwoCko",
  "key5": "229M6VS5ZdYjZsDK3LQ8x9u34qTm4Giq576KfCWphGfEvEa2v6mmXRBRb68xAhPhpwagKPBdsyQGB5w9qXX2TW5Q",
  "key6": "4SwTHL7TtBjEXw6wjNmPemSFUQEtFEoE2QBUM4pwFNrajgCuc6zMwKv5zueZhZWA21FxzJPuZi9WygFTGVQnZN4p",
  "key7": "5qTfLyTartZbtgJfQW1zyKkHpFEpLd1T5TFWKFojS4icjJSCCUCVar74HbiPdFiEK8Cicr8CWTPusVFFBqntaUhQ",
  "key8": "2wtyTiM2JpiJsygpNLPDnGh6JfdeD43Mgyo5GZjKwjvm63rNY6VHHcxAThSMiAVnEjnnkd54efxAdzQGPLebgRLc",
  "key9": "3AyqowXSL2cQxz5NcG5eUB8LAPyqHegZB1AoVhba74xvzxoa52Nbj6FMiADfEFhiVdoHmJyjibsvVn1tGbTrPhvi",
  "key10": "3jpcbuhAc7rvzC5LExoQ74Np7iVMPVsouK4Qfs6NG9jntnAoo588SQ7MP3yq8bwqhxtADx7Xj7B3Lqxnyzczbq4a",
  "key11": "5am1VaqzN9ccrZ7xUGLo891odh59XX2eKYkinB6NyFwWX4Ddu5ifu2YqYwnNiD2Wh68fhpYBKd9ZQ63QtNPBx2Sv",
  "key12": "3BVzu5pwxCY4L5qvRAz5WrpdUEzz4XevwD6kYATxBcJPDgM7C6fThhRs7A6nxpuBQ6T5RNGvgkTgPM1mE5HayjT6",
  "key13": "5inMM8BbpPEYVTQjpy1j1DZrsYyFvYJrjt528zficp12kQqqfajwTZgZk6bEcGpeBXUp94Zf22q2WTnESTukGG16",
  "key14": "3jdWsxh6hGXyrJFqW1GE55nXTS34iN1C1qoNQqmfn2EnFGvEeRKuWgtFEjk8MHTkdKHRV8h1HcdPUGjU5j4B19Uy",
  "key15": "55mKhHmfam12antE54rM5io6ujfjv4iEmgn8YmbBLTkM45XBWBDN6yJcPRgkTXqfJ7WDXguDi7k7nmPf4Gponzyp",
  "key16": "GUuxP8iBQ93VR3wS4oqZ3ryCCc29xWPtoBPDXQ6mNp9BqJDaF9F2HHeDr3frhihPpmuRa1LekYmgdEVkwr52Eid",
  "key17": "A4bTXo4Wi3EW5MvD937B4HsXYh2UWAecbc5xJvPUW2jirqwFV9suEBpzhBHHDESSLxX3aWodTfy8kdxFb3vgPsS",
  "key18": "ZxWhWpfSaSH7m67ausaVJvZ3mcTAUgNHEHQ8RR7rpBPVV4KFUPPUduQ3oNZKGMgjXhwszeT7qRthGcGRMwDHU8q",
  "key19": "5LHpoz1d7432Bp4LETpRFJZaFwUj7ojV5Dtqevzyjxxp9nBbXh3wyG9TGgMCosB1JRr8RGqwNg9uNsa4SrbMNJT2",
  "key20": "3D7x5cZYKzpL9reYfTonWpKdsGadmzZndcZGmq6CcA2RYcVujYpWs7S7buiMKmWtpxV4egTU8o9TWbLJVDuo2uey",
  "key21": "vDhqiZ3kZ6QzhhYACA92c12ajHW2L2KSHR64jGMyqYWgykBLdEX5eRaBM1uDaxDDyB6rqL6smFFvfLKu3XfgChH",
  "key22": "4prYLvtS174gd985sPdSXiWdtGnCabfuN3QBpn2QrGrkKy7zU87ARYkwwv1wDwXRR1o6Q3oyHauvaQU45bhAJhp2",
  "key23": "E28ZCDzE16efBV6Mrfsjsg7dgSDy57uKVwCsbERp72xPzAjgFHwHkn4wH8K94RU6WA3Pb4aXx82vGMAUwwNUCKx",
  "key24": "4YoxbZEGMT4dGPM8yLE4hrzTM9MH1sgEWL7e8waDLktREWqLAqQwUd1zdd5GuDsfFWbbqCobY1U8VcxUPUwxqnrh",
  "key25": "27Whu9mkZNHmD91zmVEtJcACKDXD7Zmh7VfS2UaSDEeoVAnaDR9vuvnXteMPZKghXDADzVLZjxbggjBC4sTMWGg6",
  "key26": "5M9Kz67MyfdaLsFPsB1n7ZBaBiqnQtQ8eqqk5w5DjUSND7iy2z8EQhvaLbfL4jcNuhCKeEAwWSXVoUo8P3Stnj4o",
  "key27": "5bU5d1GFwjf4LaPagAVbjXaPEDGQzAVdX7msdRraDFRepA6m3NsNXBWeSyoofpNLScbLqcFDc7mbExK9jJj3re4v",
  "key28": "4Ayyicq8tZrs6X6EfnjuvPU18Vt3Qfvz4vnd6XgJrVzWwFtsLWGNivpbkq3KexKjAaemXVPJJQEGP7uFma4cSfSN",
  "key29": "5vJwYBKMfTfUzAGLsCG4sJcrkEyYXCktebPSjda5iUHbsSEq7Petxzhfjy9gpWiTDmyMeEwMNJYNuN8R3U1ALw9M",
  "key30": "4hoJWxns8fAXcEd9kStyBz7XeaF4rdSoScgieXBfyEdsSbdNWk5TK4L9uxx8GgRu51rTzJKZvisnXMdBKeSPeYYX",
  "key31": "pS6WQzRqZDBFeJAAbGpWkeKzz7LAc6TA44QHySqibH6tqpCruKtT242yNSFurso2UeZCrqCCykpCN4g4r9SeDJb",
  "key32": "2YgAFFCUJUUtQn9XaPvzZpgFJp6ByNRRwwHodHkVFPgEJMyPsHPQAuH5Aj1Juze8yVeSY8qv5cXo5pTZiBe59GWm",
  "key33": "4rGuoH4n1WY8FiQYt5WGpSLJDYc8CsGztgxqwGNWVbxP5U6U3j896AQWjdmKKNmi9jYpwF37RuJi8F7g7pbRLZKB",
  "key34": "m7jb1Wgud6vv7RSuEtmTRgyxG8XqP8x26nZaRmwAc6oAWNJkkVQDt7BnEe41mowzxZ8LJmHp76zuPfQb9PTAW7Q",
  "key35": "2hLF4dVDUJnAFQ94TGdkzgazDJb9pS4YZU84no1GGTT9s1Jwg5xU9CPcC1WRzAz5Jdnq9eFFcHtGx8TPK32myhXe",
  "key36": "DkGDargVZhLmHbMXvSf8bSRQSu2yxCjUZu5D65ztrmp7rc87oYGF3T6mUpuKN1dk1VmQgaaqRsaoqogoJEAM7KP",
  "key37": "5m7qo3QqMJ6JWwgv1s24KGg2njSzJMjsFRV5CXyZDDn1ks79CLtUqC8Q8VTfytCxNUvLGvBiiY3adbEUqjNGTbC3",
  "key38": "53m4XQAkx3HRTScVF1Vec6NPVp1nXNLKLQNqFnh1UcgX4q7MWEUjpNAWKagsTbTuMXBxwhVkWHWRz565qgUhvq95",
  "key39": "5zj5d6X9N1F1rK1kfATyt9faxyo9AThsn9fFmzLjXauHrxGgwEMCxqN1ymkivaYiyPwb6KYs9ZLoiq4nzpHsdoGi",
  "key40": "BhcZfEMPpXqRWbtdbdmmTR8ha3p2DR5ahUKpXcbAs5iJk2FUCiJpCyXbMg7x5MYKwskcBBnr91RR4U9zZvDcrms",
  "key41": "58kadAzJHrvM1eaXv61iRaEs48d1j6fY2Avmzy8GuVWGNuFBX1sDh6neP8nY1kbSWHB7EVKjGgzK2iW1MCGnjimx"
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
