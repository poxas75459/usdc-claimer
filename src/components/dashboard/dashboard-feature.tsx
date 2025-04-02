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
    "eyfsG6ZR7eitkyHyf1B6z5yEs9WRZGruPHV7KoWz339fkGdjk1hygnqDuv2X2uBfJg71KHtCVoeXG8Wk1HThhmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyKB7y3ATQc3ZNR2GrTnESHgBoxBwYS4sTNzUPshXscnc2aVcLx9aVE9TsmxaFvFDtwMBzksFF7au8Pod8mq83J",
  "key1": "3dEMek2xyfamjsSNZmYoAhcYiUpCZLMqccSERdDfHZCh2xQxvnBm49CfjRcVQsC9EasLMKvFkj8feMYc49D38Smi",
  "key2": "4m8V1kAxCNTvrgWsuQc1nKdt7bkD21hH81cXJdkdCPLnT7UXZr9QYDbYJURouYCLoFSwJWku9ZS1gQFxiNni3RXh",
  "key3": "4Uxf4oLdhuC23z3r5NTihdF3nVHVP2wzya89Up78Af9FqgiXbP3XT1nGG92zyevu21KNzyGTrqszpivpeaPaFUkz",
  "key4": "UbR2Fvk5tJEAbLazmLUenS5Yk45EFkfUh7Uk7Mzjn74a6X4jn1CkTEi2m4EwxeXNEArtjbZyYgCYeh8Jxn96swE",
  "key5": "4DHgtTEsfCkGVHXzM9p9S3kXBXny46LHcv2mQX95jwoATZ1XNfmk9gCbfh9BqnpXvqta3RzzJfaCRxhUogCmQtxe",
  "key6": "2otkzrfMUaSU2zSoRKKpCzGqrQGt5f9avHwz81qttXfzJTboFQiW8bEPa1CPLreEt4zjYrJ9QcCBJuR4TSQHrrmw",
  "key7": "4xacrkKzcLaBYKHyWdhXAnywta8EhKMUu9EhEUDEAXjPT7haBjVdf2UN1CnrVkjjtWTmuNFkt65QJuZtRwR6YoFV",
  "key8": "3MiPBP21ziQH6XitnL33YwYXHtwKGoYK4fA8fJuxpBLF3DXMfPiEf4o7HWmNn3jWVtVZiQDTuAZZon2GeYwWHTGU",
  "key9": "2C7mnhdnTsB5FPkFKwMLqosAjaQPWLEpiBReZZNSAWZNZmUDdtHEXp68RnDZAZoNcue18oy9cYVZNN7Xbwevkguo",
  "key10": "4JUvjJPYKfKWBZkSGereD9Uv6GKdLMxvBmf11x321U22nhx4NnASD4vSNCxJ3J5frpZH9zHuz7aqR6GEjYw5cbSH",
  "key11": "57PFCosPhdEYVB98d8GvtoUHAwv7v7WbgfBaNJbYRaZsngdE8GPTKyv8nHxFheYTj3tPSYRMhyHuVwbz2DWGkZGN",
  "key12": "AVqL9hD2hogrsRHFiPEkdThmh7g48fjrVucnJ4tLqxSKKtCJySbRzoLefJ3yVNxfM6ta7NC3ZFuyew93GbFUY2x",
  "key13": "3VYPnra9eLgSj1Gu2eGwa8UxqjfzeDQcRANkCkoojF3QD1pM1xmqvqo7MRRR6XVLR7HdxMiSb2LTa8ihCSe5vxtv",
  "key14": "4kEtmmT1SUbrJiZsfKrYHYMT2XgYAGaHGhaVUQfiZVGrDAWNMASRqRx4zBUDV28ZYVBegCSm6kQZxYJs7vSBb8Fb",
  "key15": "3iaHEDHx36FG9UejA6GKEWDFgP5sJcpaLLzXzm4Ma6rWmuMUYHgpmJSKG51cQYEzGEwRPcEkeBBWcpWAd1FmVQye",
  "key16": "42tU7KiXRaN5YXkmBng9t4UEkfMntZrVY19mZJgj3bz7BD2R3ptJBpUx2nxSCiKSrc2Q1By95spWfxrW6Uch5UwQ",
  "key17": "2KbWuVhH85XhqL4srjgfbeqg26QCWwXLccRZg7A2e4GadDAbozMykyhBu2GvjYJoGk3iHxieTAWfFx2hUH34YK8j",
  "key18": "5NpSmDpkyE8314qWMs3LNwXEFYzhiiaFwC9AVkJxS5kKwVo9y9hHGpW6f2X6zXPjCT987DXwi2pKnyEDtGkcNdjL",
  "key19": "HoANNABZUqbGAZccjGevUPCMR6i48S1D9hdPd9fxczzbRS8qob9B6pfHWVL9VeAeNg6qowAAA4dE8nDkcKFhiEg",
  "key20": "64YeuMhURrtH1msXA4stxbCZjFD3wrLqL7vVtvMa3hLeNbiZ4CdtDDroQ9wu3NzxxmW6WrLnyXCXrpL8fq1e7kHS",
  "key21": "4V92mXZphqHLYsTo2zsfspNqTUXevTS6g9ENzVPcWS6qmzxCdTWPC3a61x83aCyK1VvrncuX8MNdwaZkPZnEM155",
  "key22": "4QdFWEhGExbRW7a7nThHPhBwThNfDGfuJLkXyRuWv8okCFf57FLeQabgWsfbZYWJ6MH1EQ9C6N9vFwbuNFMTg5fU",
  "key23": "zYpqSCNDbKCbAsMSoL8UeyfLAztNvAyyAjigdNkS2FbsXWYub9oq9x84kXdcU11QXuKNPZKkuyiDtxcHjXotP2e",
  "key24": "58TZUHQX1bY4XLRzSbTknKMBWJYQURFjLEgKEUbqgayK4dk5atnVAWsAEahegoHatRsgtq5KgRBiBfMExTynnW44",
  "key25": "4a5ePKq4M3AdRjaM2VGJt2ewVKVrpcuhsPShUdum4otzhjfEJCkyanXTHMZeC6RaHpF2PAnrc7fFTJPKWzvx2f1w",
  "key26": "2a2J29PGgrGux3mUHVWmEWqDqcuQYvTT2fcoHB5woZEw336uY1wnwqNm61YWAh1EoRRciVP6jKsns8zbbK6Z4U47",
  "key27": "2ABV3kUnxpoGWRqqbddfLk2n7875Ai2LnSCYmuJbJuhLf6BzM2JE2F1TNfTK7LQUdVJyBRaxf9tfg5KD4sPtNMbH",
  "key28": "26879VRk2H4qTDmijD7g1qhsvxTGeXUo3Vk6eQBe43qTpwDySnyz1RpNbv81JVQK8rTs1T86kgFqXg6Ts4yNmfQh",
  "key29": "3Yq7RfjNd43KPgApbBSwqt7z7C2SnESBnCNRewYwQ2TjGK6f5kJL6Zztva5Tf16BFuboEioZLPjaQ7V6sU9EEXGs",
  "key30": "4WZ3UdUHD2htNuxhb4bEWx23xtjXWNtAb2yRJ3Um7CwCNYK6r1hqNoXQNxZdW2UqZrq2tFM2o9Errb59zVbtqBmi",
  "key31": "67YwDddUhnaMDG1ZuRs5Zn2FNtkuCFQPfjXWcxV629ThaoNA4YVNabUsFxxT3Sr7UwS7LJM7287RJHekXdsR2Qqs",
  "key32": "47EAKN23ovvnPUDUvfkmuJjHYq5FT3Z6ncf2KKjpxqZLoCmVkyXkvFPaB5tBPp8rAW8X5tYsVsA1fPesFEy6ZJ2j"
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
