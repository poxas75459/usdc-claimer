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
    "4dMR6DAGx4tGdGW6vJgNsasfNUrbrcg19P4xzmApzyGYEEnrK5pVYmpSkoAW5rA3Gywde6CJVA1Xh6gsRmAiYSPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqz236qHU8bAq3i6YR2Qg4ZvDbKmwoH3E8iq5oRuXXpdjN9e96sKvmDx1YtwNUidgJSkQ4SSP6fAgmLCF2f6PD8",
  "key1": "YajK6gq1CaP4LNnGKLfX3Bqa5AzoQNZnadTZU89WxmjJ8iUENgBVDWs6t1RiBVNhUrXNy2cGU44v85BVVNuAdNh",
  "key2": "39oGD8rUzjm2vX7HDhceuRJzp43ypAjg9bsaivHNMhXwHwokX7H6tKZrbQxiDtg17VttRxtfhuQLSx2Q9jLbGyjR",
  "key3": "2Dks14KhH9ZzgDMioSfitUBefWfBNhZ2PQQzsmxc3eE4d9LeMbXYPnPLgoh7WAA9Co1yUZsCg4WSvEE1w9q1VH2D",
  "key4": "5Eto6oh1m2Jea9WxVXabzSrwbMoPwjfQbSRt6cRoh4cDKFnAVKH5hzfbW5zGKCKeJiBXmr7CmwtRpx4n2JzMNXba",
  "key5": "j9f6CbxqPCsN67KCHv8y9TJQ5hLSJoFxkNvssU26Y7NE4zuroBWUUe5G43t9DtFjCZbShe9Rqw27UwbLcgvBfh4",
  "key6": "4tPHrSaccoLLNxhoyDM7rVtJ9WrQT98TfPLs9Bb1RJLDVnY7yLdtAdyrYaAWHzuPa6kAuzNa2VMuDhZV54zgHvW7",
  "key7": "WJSDgeyuq9XNsPgQbpKCorpLqwv42cGPBqTbVUSTpMjGqTLD1Nvtq4uqp6qGqxPxz3hxtJaoX9mrtH7Vy2iGAhD",
  "key8": "5QdffjwsgB8kfD9HJLVVnUzbu6t5TfW1xPe2hErhdG5gfQatJFC5HV2hj9aqdJaoD8E5H5GRSteZerN8vsBckzos",
  "key9": "5BUQbawur49eQCPY68FdjZmvcpiEbwCvnDxKW1iA7xdXp9R7rhhWFA1A8QDmSJuV9zmatFKcrC2z1FCv6YhWykod",
  "key10": "qs4vYxxeu1nQw2JRqr7UDz8KWNpZGtmhEbJHD31FRnPpK5rvSokecEXEV7yduLV47bfszMwKviYwYQKiSkNrZhe",
  "key11": "3mt1JmZUDjswwB4aURyBj91ZGJXzK8NSCFqgd3pXatpBxkDLcNQiA69rzorZbscr77ird4oqudJ4au64bzKVkqou",
  "key12": "2ZvfXV4tnvKkLtovXZoGscgh2xkhRuJP1dLpRRDMzqahs4yoXFdBbQRA883usEP1m1JLfwk8cSaTMnrc3QY16f1i",
  "key13": "5Rb8P4L1pdneqrc8jbfUTaMmN1i6DUU1ccPxYdYSWEx43VksbXGA9RTPpPNyCMpBqEYwi9UnfAtKvagXV7BSt3Be",
  "key14": "25drzkAEjAEhNmkWUuVNikxYVfNmMYrZpa7jWMHTfHnQ1JWkkv5cUwZpb1ZrrJF1xHpt9soy6wrZwt4D9qeLKuad",
  "key15": "3RuagLb6KhdFW8HViJsX2VFXMkNCYLVRTJRuMaXFQV8UqUv2rNLzPurEaGLPfW6ncXFWZVcCJiTrix4igwW9nAx",
  "key16": "4VKPjYXWcSh1KnbegcGi5trqxt2hnSJRVu2fkgSK764QXYiBooWNDbDLP5Ey4neW34ybMVULksWYsjhp5MWLFwq7",
  "key17": "2em5Dg4oxQNQuogTgKyxmeVE7QDmSYN5UokAhbQz7XJUf9gUfouSgEq6a2LZVbFYcdAr46pnLSGovCVQXEb3ozvv",
  "key18": "45Q9JCuGSTrQm1AHX5tufR9ELvrBDrof23D2tnUdH44JZkBELJaYCM9YXbjBVttsFXF3ikRH2ymFHya4opXhgG8F",
  "key19": "45hV52fSnSSxmyzgDYa9dzKv8T5gsLThfTr8LypGyYpxRKG1H2UagHmzSDMvwZhMoUQ1ASjos62pPNBkFc87PsvH",
  "key20": "3WPNEj6JRFQkPsMQ1Mz7rhYTxuLGJg1MT95x6EWKxXo4RhEimLeF2BzW9V8HijNvvUcHmXHUe73ne3MbRwGFvZdf",
  "key21": "5eZS2JmdXwhHLdgZfF8vdyiGKvaEtsMjo9T1dYnpsWUvBWjvg9UhFe1TjqeLBNfUeQyrkpjufLGe5Jb5idypkbg3",
  "key22": "29wgXdtRxzS4zhqXdj9owTV8XuG54cmNKpoWZY4edgCF93sfzhEWKgRSwDkyEUieJ5aHKBoTEkUt3JgZkhn14bjf",
  "key23": "wcunU9LMdpg8Ybwt3ZPGNgg9ywz3dAvN3u1A2cJiRn5RzjaJ9mo3y3TJkkemypwFdviFmLmPSAnvYNCq2Mh1MBw",
  "key24": "2hzFzgQotiDgzGEbotDKE94DvszEeu5RAKrs3w5Unjr9bZQZzZYESrDFcyZFw4bUC151yBYxxMrYS38VuUCvG3Jc",
  "key25": "2ZoBZ1ebKBCR6tMaFUVFKcH48MiWA7vvSALEM5iec9bnzGN4oRubsRujVT2JfuSQo2YN1bGGduSuE2WLTz9L9jAz",
  "key26": "2qfuxFTKYAQxieEx7PLAQJhqY4VgMthB1HbQP8MNfwsaowZ15kMk7B2Q1CLYPUsCH719z3j8T9cVcyp9m1WiDSCZ",
  "key27": "2Kv4PH6htAshFzGwho7kKiWrFWb9u6DGLAJycTYEm5ee5DY2LDESsCzda4TM9GG3tjpTDAnmaVqUfGcJSGzmD5Sx",
  "key28": "4z4LgWbRrTjw5nzWVgBBRT48fsxduYePTvwGKn9njrDqYydVA1RQYDDHEwBqbPYpRxEBS6SNYYGc1QftXHJ2EQny",
  "key29": "37tShtZgSX4wyMks7n5PQ4KdLX47w6uqT6gA7CNcmUrVSqnuoHjhvQrMzN8JhwvCG89AcPdecCpe3U4GjJtYZWBN",
  "key30": "4a7UipZNS3bcRnAx7WnRG6RH2xa4Pqzz65eagmuqeRRWThKqfxma8nAYHeNB16sNpzsrECb4gZUqsRtgfa7ubVDD",
  "key31": "45ZLD36zeKrALzy7yVPdFymBioEb6t1EJ6e5ave7e6TWFKfxidzTnvdsoZxgrChgNtB86dz4utM3T1edGqBBmTPF"
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
