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
    "2J2E875DyFy2w1NTk5r9sCc6ANQpUBckb7er2n5uQSBbZ86SALfiqpSyqbZFwP5vi66woeTjXqqQHfWu56ByfRgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRBw889iq5hh8t68AKEnZN9pgvTxEepzrYSU3UHKnAfZjTbYhxzijtn4bwWqFRUdKUh2vH81WrKj3Er37LedQFJ",
  "key1": "2fw7SCYcWxMubMkaJu18Wujzd9aKkNjWwYx4rTK1cAo1LSxHDtCqCxGt9YbED6RyoHQWqFJrbzQVWm5BnoYyf7jo",
  "key2": "3b4cjurFvGGn995duZeYFoLY7Qtr7zHraL15JdcLuVWFf8eHxm9ZCNirMB4koPn2UDWU2gSMxRtnhLBVuPjt1GSt",
  "key3": "4x2omf6ziKEaqgF19WD7JgtXujubSKoXyFtVdQCithAdD52NjxMFaiAkkrDWnsMo5ojDNrdwKdukBiit5wx7TrQk",
  "key4": "55mQJ4FMbEiU9qMyNmNEFuCYRGGhtsK2pjtt9t5Vsg8DEWTgg5GV7ceDdRSz6dRmzxkozEmfd4HQNNvxDu64X5pg",
  "key5": "4enWMPgMCuCaiobTTQgVutGeALX9Zuwp2sB2wt8Y61yuRgTe3KS2DMx3quR4RZxtHpp9wzSzxua5PkZ3agQhtLgm",
  "key6": "5C2scHNgF1yvyLJEVeQ6sZtckTSNwTk5r7MRnpe1gtoJRPdJ6b3ybF1vAM9duTatvVv2shfefWTSDR6viu3AFSt4",
  "key7": "4z9bKwHjmxpe6vBJzrKzWxvfCbzM5Pb3De466XAgsZCKo8YM6W8Je7AdD3gSbrYk73BRhnii3Rg1d74gMqeMwcRj",
  "key8": "5jFLZLpxQU2x2L1eNazUDghW87yHeMz9xmjLuundVj36udaGALRPG4bFff54eM7dKnga5LYKMmEE4n65voTGWqeZ",
  "key9": "DoWNGG7RpNDn4k1ycMPBAtVdvdM8szJLLLDmQwabo261qskRDGPpGYnL2yihpwKVUe3X4me6BuwjjdgXgnmCCdG",
  "key10": "26EZiR7JA1PLrgbbDaLaXyoGbvkPuJB6E4g8XDB5WBcym9Zck9trMViPFb36WjwqPLNxciFag7KS8bVQbM4TGTTe",
  "key11": "32K5G3NtvNezHV1NGk2AWZeQRf8VG3DziWjoifC3YWRYSmzDLrx4YkuhyiG82SjUy53WTF4MCh2CWVhhzMtrCdCd",
  "key12": "1FcSzeKzvy2oYFW1K5pGr52HBkRR9BDTorPvauNC5kV7cPtG6MrrLJgz7oBqGyu34ZfSgvyonjt1uKNNDeeZgUh",
  "key13": "3bCXVz1j18ZaVHkXXpCm1MYwuBrfZe3d6Ek5H84HhEVEZuuizE9E5ZDW7jCQ3pbzg2xzgK3QypLZEfYMiqGo15Fi",
  "key14": "2kBeJ9FpLdzfDck4YLm7t7ZqsU5hmMf3VPvbfr8kEcDD3SmwsB2KuvZ8Bj51Xam79wpEgY1TrwJZrS8ZTikkq6yE",
  "key15": "4xR472hh1CHg5J3gceukMDBo9uaAb71AJZ83ubRELokeyhiddhu2mMwu4Sdsf2fTApxjtk5sALXpaLzUGjXJEqh5",
  "key16": "CmWvChWodb5rqpoHboFGkxKGGmjvg83jDY4cw64Y8EcHybvmEU3TTJ2PzZfbDUXDmX4EXBFjGjDzJjQA5kakfqn",
  "key17": "3y4dmPV47LErHTV4a2kjgQFPrgYkPgXdaP33Amp76iwuQNWUVZnY8tY3QbikftgysDiP34ySPtr28pgJDhx9fLEe",
  "key18": "5tpctDVyGNhqcvmEUiCBLSAQ3rjnrzoUmgzdphE6gYUSSU14gDebKKq8atQFn7PCArtf6C9RZUZmiebdF5YRdkSz",
  "key19": "46duG9C3AiRdhmTe842sCngB2VSUfHwbT3ynF1qkovq1Z8B4FxUg4pysnzGEmDucveRVfnxXYL5PPvkPrfqwKNWY",
  "key20": "3qtW1y3sWGVpxFgzbeZ2ww4ZJCV5LadK6UpoBZU3sKvrtKzCQTG7tbWYCEEh7Uq3aeqvNfrTEogeqdKQbamuQ2L8",
  "key21": "GMgEASXaMrpYpkN3dERx7NSqU3ApiA6UqYmReZp8aa52QnXmTMi85zSpqbS5PksaeqBGZPJtyumVH1uq2u1HCAE",
  "key22": "2fcta83kwdVTPFPTbfQ6jDzefRLQigzVz8uzJWu1Ksw5LPLXdBf6PraVATZJn9TddC1R6ZVAsinVFLMdw3DsbBp5",
  "key23": "LXYEXkGrWW57vRZZDj6DSgrHCG7R8QvpAcN9qDkzTurKzxhWKHPynxbCJy9yjtRQH92ATxVjX7HrYMvB5WjyTM4",
  "key24": "2remS8p1zdW9YAqJytEVN27sdGnchUg7dykeLkMWpzkdexHenMhHRvRcdwefZ9FaTn2jPS3SoxqPryxCqHTJss22",
  "key25": "3JRZeXo7L91fRZTaimx5Zb8DHfnxYj2Nrmok4b5V1uAunSxXStuYfGM3i3d7KTFv222hhJ3GP2gVKhSGSBaPnGYW",
  "key26": "5WZsUzuk1So5Ny6DzWngwZVoPmGeHerEBPTemmbBcG9eVhgCpBGkGygfY4p2Es2V9m5nwMpjgk1mjywx6R2C3CQD",
  "key27": "3V4UzPzAMSxX8KZZB5QjfehyWT4zPsgrpGtPyRQcA9od3V95Nsg6W5xSw1msfaKZkULVbnAuk6PjpYdy8MEGcfL6",
  "key28": "41FeAFmAoN141DBGKgeVEgWWcRiciY1Mjs4Y5itJL89Ca6tJ2tuQ3J6bnfq4S8CBZeprPyEe4cCShRTyGYo6Jdo5",
  "key29": "5g4NaiTdm89sbFoZz2ds9j6QRzAN4QEDE4doXaM3vRmsK8tsNgxxeGkXcZVRayjLt84bhtEAnQYcKdZC6qbzeecP",
  "key30": "63x49DHYWaNkUJtnZsWCCHrzhwpKZPus5Ua25FkeN4tnRXkPJsgpL9RGerE6vqFtJ4htV3vXDjQtPnD1jiFpWqzR",
  "key31": "zCfnGQKZLGf28H7EHsn4HWPtGeyZ9nCYVZKxayXb1J4JudwPwjRWs2qvAgQHUqb8Kp2YJ6a2md9RKvmtoZAviwG",
  "key32": "24CbhqtbBZHsvLTeea8v26bKoh3vtTiCDJSzkosyjfYC9Wi7vNKHhzRBYovU4M7kxxJaUTQhgQGiFpJrmZiAT3YC",
  "key33": "jcXM1tfX9WgyfvXtUH5YouAdBuVtnXyzbjsXVtX33rJzhpp77CWzeADwh3qYmw8cm6wP4HLKxztExy7Ujjx8FJj",
  "key34": "4xFUbC3QTPGySQobyq7Use4C1AQiAigmcuW4uNVKJYSNMkuoJz7xnsn74Mejpzv5HBoWS5b8Bi5548zBLvWBmeto",
  "key35": "5p6fttDmgEC34ixV2SLeibXv1RYrvxBWQdqiiddXcb4RPxn4118UtY6AqF6nvLwDkdKcpCEaMbXG9dQtH1XXtB7J",
  "key36": "5KwVNxTYFjx4eHyfTTUfMx6zhnfyxZ74xkNnyc4whZGwsPgiQQqCFY6fze69y2PfD8VZhUox8rb8WQZXWPoodzir",
  "key37": "3osgA4RDEzYD2iLyNJbZiNsCqbdWtjUQx6vpAn3TzwsjXC7yCvZ4acfKorffHi8Vuo8WmVmfne29ZFqkNY9H54qQ"
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
