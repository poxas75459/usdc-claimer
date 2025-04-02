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
    "5sapj8tjdRW8pHuGUyjv9xTNkpaokNPgFiL4VWRgKcnEcCo7K3EytKrNsTUvrf93oF574Nb97X7QhcNoKXkfFJtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDyici6YBZd7WVy9PweZTBtdVfRRNiGKVU584LVGo1SPTF98MtURL3wrRLbVJ6MhU7F58PrMP1JoizMRGkq6H9U",
  "key1": "55fajLkEuPoiGyEvYPPSFqYd2JTeVLWai8A6E1nAnDZVyyFkB7rCh7QGDwLdpQBv6T4h5kc9P7FC8zq8ajUQ1Cba",
  "key2": "UktJaeTNG2H32jppXNyYQcFjGFqQxvoDwFqtsgjrE4iupipZCpoFKXya53NA7Y8vncwds5yfC5UqeENduYRaxgo",
  "key3": "3tYePpgSF8NrdenHAaBefLct2qE2PMdkCYpXhqqiKp8XuVrhGDyzMW3ocEGf9Nw4Wg2TiexdsNBt7ww2SDe6DPHC",
  "key4": "47KYwDBCoF56xrs62Na29jWyXyBUY6tDkxcH8aZXL8ZiG5PBv7qbiH9qVJhddVePKYTBaJaEhE4nxmh9Uc6hN7sv",
  "key5": "5UEqjatg9baYZrtCUQGJxScUcCqGkN1TBkevz5dAeWQwkfJApthJT732GA95hSugvcMuMYwWWsivXiKcTUdA8Atn",
  "key6": "3GbDZ7hsRF6jdMfxwycLzXPh9ch2tqBSK6eDkDh5Ka4NSkr9QrE9CKXrugu2kEZgnFjqV2Aj8N6QBgBGLJLNJDwv",
  "key7": "yLBr3ue9BUL8ELo19yK7VaUZyWeEaAhLdKe8z8DA9PzidpsAwHQEZE36fqgHmdiayexnJZvCtjBTkzEELLTmpud",
  "key8": "5xjsiXXYwxc8bE9kcj9TVZEayEK8hhTBprfw4AWryhYFGmu7iTLQsPKVC4v43KSmefqQv3LyVnkHUCRENT8qT2hK",
  "key9": "3P6D2TiyVqpdV1SNZGaoCMjsZr5mCVnWY43pBYafptSPgF4QE5wtMcpcxByKUZ7soMw9zLEJ4EJzQqw7Ca4n2rMa",
  "key10": "26vgvmrRUJ5ZJQWsyrzfrLJXKKeEXs6hzFFN4n7QcYJ5XdBpmiLaVEbGedPmraEEepwroRggtR96notKz3dZU1Ps",
  "key11": "4kFHo6HDk8ygtzKApp78VHTPoTE3b1uDBWMVDemnpXEoNjoSkY8CeDciLhAwsrCTzpz9LBmUsPqfMWmN2FBw1Kbd",
  "key12": "24ves8gKNePEbtz7p9vtPyamm6gfksMsCsRmHF5wLuUb8qVB7eVYohP7PbtTvCnwxrRM5cA3AAaqUPiGwoN2r7RM",
  "key13": "2rjYBeos7ZpC1LfomLK8rViSWoGyTbY4HRVzt7U68QTAkT2HRfcjneJnsnLMgmQpoLnNVfbp4YWpkJePWeC1tvi7",
  "key14": "313kj8TFUbjXjztccNMHq9vDUFfwzkv7oPWwnaAoCPJCG7nXxezYdUNVvwfDzJpRZCZyABCjy9trDyK21LWcpjUX",
  "key15": "4nYMFvxpdVwvnEDByZX3rKpBX6CYSgd1z1pzDeYyTiEwWgKuupsT4Pbwsm1LvzQ8ivzmZhJd2Bok8KZmS4vgsFa2",
  "key16": "4gNy17N8hVQXvbMkAgVGKRUNGVMBZVBaX3bDDY8VDVvtVDkQH2F7yQXNybfbMqGChzDzStuxYW1MyknixSvsnVw3",
  "key17": "2GpyYPxr6QQkKq1ytUdRm141ZrwH8WXMc9E7e9Eg7VwVtzQatupE5wYWriMdjR7VjbiLB32Ugaetq9dfSAUXqFuX",
  "key18": "2kmdGk99UYrbepgXTLaf7MHyHS3nE4hoSvrBUsT1XWhXWUnWcjobFsxn1Urm8vtrJX1StdBLmLv3QF7P25Mtsdrs",
  "key19": "2FsGCefnJWURjgaeMGL1aV8tor56FNyis345jjGt2To5ubxLRJBF5YDE4zrsvH8QGVdkPxcDJWVE5kEwoA2jugd6",
  "key20": "4LBrrLzaUv1aKH8VSqc9yzdQ2gUzfeu46TMEJ5y7qzZmL4gFbktCzZn5ub7NpRtGm4BRXKapvfasBG83BCznY5PH",
  "key21": "5Ce81MZLwQkYu2ntmbo6p7hFYKGhAobUB5Stsbo4ADsj84PdGKyKvN6bbiyrmHkFCZDKvdSve6QKxqj2qdnEqvro",
  "key22": "4JtYu1Px14MRxzEbJkiAmyyB2gX24HrASXjfpVHhtdyVAKUrrhoZas4sQwNjSwE74xeYLbTUoT5Y7hSqZwNPADv2",
  "key23": "wosfTr9f22FMFrAWUkyfKeTrA63rqHb8subBmNSdPeuuL1fz8Vw5F6mUo5QphUpZ5ZWzkmkrRYhzjPBQ9PaMxQK",
  "key24": "4pWfMe1wQvcLM8EmzaYQEU5WenD9jNMLcPZRZWWev2G85JViiuLMTQPD5GwS31rVnSzLneQWkysAfKhNpndiKCvB",
  "key25": "2Y4G2R97kFqehTeDZBWLNpCKuRrGd66Ysuj27iN2AvTbQZ9UZV6uFFtCU7DzXPwnVCLiSdsaCN7GnPZND6uhG5YP",
  "key26": "2F61eaB1PDPtvPjv6p6bvgYFh67VpjTteQFymcvo7JnE471HQLuvay2xzv3Hsa85Mii4YQBF3i8vvbLxYGx2DLHU",
  "key27": "3rGcLbhGkUCPkEnRDvFdxB76Lk2baZcMJWZefaG1A5wH5aQmYWapYAVPfs2PRJrRvyadDVc5VWkEY7xYAWotwaMh",
  "key28": "4s4Dx3aQvoYaGZng5dhsqj6u1jSbSaQJFhnkfMDEh7JAUUJcZinBFTm4esADqEa47tqj5REcCyRW9nSYogPRA5TZ",
  "key29": "4NbH7c4wpWPYFVJDK8cXDtFqbTh2j3SoQzXBxPGX3tdBS6cZfLb8J8N2X5xQj2pZ7DL7paRuLoxMA5k1JHaC4vB3",
  "key30": "2PUcr1eriEntXaXZ3Zdn2Wwc3abLspvGJxGMq4YjCNuSoEoBHVyky5GDWJcHDcqQvS3weNY5Y5Fq9Mp2owb3CcG1",
  "key31": "35bdinRUP7J1rpTTv432j5EEjnqFjqWFvCXBBsKxBWP9mMzXvtrf2R6PBUEp56jBJX7NDCbcZSFXos2geAuKosdQ",
  "key32": "Wq3ZEV5ddHioTohXpjxSCkRKhecDGQ2jCHrUao7ufQNp9ketKP5ycG4PJmGCxUNJDpSruRLbTtZi4ssJXqHXcmZ"
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
