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
    "MbH4HW65NnKbRxitu5mnXDkkuLjz8fTe5hGzE4FTSXhfBQG8U2sPbBXbyrafVTSCHtGUpbdm2hiv43m9Td69M61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igtrZTCW3Dit7nfqACuroBSwX82uTnbhs99Z9LMAJivQN1MKBfmQPLshKmTJn8LEXPkAsAhpcik4QgTV4oqzLVs",
  "key1": "2JFBCXiL7RGQvWJmdhaxiZ1u9dEesP9zVFQy5Kh4bj1nrZ4FKMxFndD6qgpc2XdaMgak19TQ2c8zR21gwt6yEKMf",
  "key2": "2a6PE2SV7Q4QFCDb3anaPFW51a6qvre28omdmw6EULnwpUUXPU2rnwDumkaVZowfbzjFbDu3U8H7Xvzoaikpa5bz",
  "key3": "5nKE7qKf4j7qCf3MJe8BA76u3CVQjZdqp7N9v658jpPavizyMRZUjLLAi9GMoGFyB29sWL9GzUNhe4y5wvbXd1JK",
  "key4": "mj7yngLo455JtX58RP5VDzGvfkHWZPbpZbvKt4hsQsi6SjskztfJjZBDMqunen4nknHJpZkJsFmE64r6CgZ5rzW",
  "key5": "3kzp7Tn7MhLg1aEGcL7FRoYBmi7Ki76bskcBfTcfgzsAnYtiYuNHn9ZxPnmAK6Pzns2rEvJ9eS59sRtdXMnij332",
  "key6": "4JMrbnbD38pmsi53eXQG1bmN6YsMGBuQAGsEYK2KFjnGCepWxqsantiHSzRoJKQZeoa9aqbCqMCx4VnH6TUJwQHf",
  "key7": "QKQ9B3iqXdG84sppcfnA7zvyhybQ1rfiSEUQNrc2hPRYPCmLJSQFwE2ExPWeYFh1YyqrujSKx7MjhHpqcunB9n9",
  "key8": "3HeESdTCY8sh7WzzW54hqv3o2TfVZ4J4jf6z8261qr1ZD1CmaHE3ir6bo8ThXapboChshAv4rfX8UNxL8u1nJsaD",
  "key9": "4bx1UJyBLTe7CzYm2jn3DJzKnGkbmYfaLSGaqJ2DUfCbkF6AqD2FqJfJwDVpMU2Wy6hiHTF62jjyD7To3RFEwQJX",
  "key10": "4nhCRNxX5xXvDrNeXUTDvZ77NSHF6L9Dno6r4d7ccyReZT5xNXKsmr2ZLX7EfvCAMsdWFBMfTEEN3TArnWXBxzJr",
  "key11": "5bqhK1ir1DnamXkajFTGf6xF3mjwJfamBkwiYddrXaFL7jAhSZnWbW2vdvPUqKLEd8UQSpGtujpV7rCGqJ5gLznS",
  "key12": "3FRCaXgv2iCgeToSfNLHecmUSdZWETXVRnDirH1PZL5qSr8GnuvYGGS24XnXr14eTJ8RrfaA14dwJqk1KUuaT7uA",
  "key13": "3GAMQDR8nz9MT2B9hx2Nn2ESZDrsiCscwYaWmsrnZf3Ux4mFEnCaZKEr9buJNpeYLGM76C2K93ZnN3fVjzd3XubF",
  "key14": "3oGSGLhVbX4bxu4nNZ2Gpe893iSawNYULmnaNNKfHYHs5gNp31Yv4zKzb1jeisg9S8S1gcv8Ct4rMKWCjbjrYWiU",
  "key15": "4Hw2vT3y6N5ATMRV6TMv93QW2UH2pjocNc73kapEGCjEaTHsBYYSffhHn3B26yKamkTCEGsVJbttUyPnuvTouonm",
  "key16": "2j7UdzgqQVSt1faYQoLUksfMunXPtGUqhgs56yJi9HcD9buze25a1x7dbqs2u6Gr1iB39trTDsKhuKiQUJBUMjYu",
  "key17": "9hyMn1gGNtvsFrAfhfZnMcCuB4oSpfyy1gUhDzsr8QUK9r3t649hfRJ5LqDNs3GSixULjEDsKKNMCXb9uqLiwGL",
  "key18": "5gKGTC7hvuSWmqWHvbcMpVND6Wy9BqhwX1EKTfYjFiXEgUfzjV9ZtJChKRkUYWRmbxjwdLE4q7Bk3T8gEStCZhck",
  "key19": "25tafvuVsxu4gCNBrpBBPTmkMDR41rQBkBDFiz5iCZNweLimaAbCjoC46iF1e35hP5vfMnYp165UqKBXjzFbQcc8",
  "key20": "2dE2HvCegjL6t3QB5cUtKHnsoChaETvnQspEWrtWWJuLZ1rrjAtUsgydPmzT29BnPuYxV3H2NaNCnWB9pQQtnxr8",
  "key21": "3nfzACDtFTKtGTCox8uFRjSxbDB1pA7WyGaEBwK3AwEGsCoLPdcbWKjqv1VJrLuoycvhSAGSKifuBSUht5F6KaeG",
  "key22": "3z6GELkvdEuGa1HLtdQLkHVkTbWdDpinWEvqPiSoYnZePEEEVRWgSz8V9H6bsbfZzAudzdBLvLKLJhZAuaa2msrb",
  "key23": "T14bQMbxsYPG8sVgJoTMcc81wfQTErEiu5r6bQm5JNMW7tUVGG3EXQZGVuDyNuNvaDJq9xTeN3xaHCJjLNmgP3v",
  "key24": "4ivu81d4dxsRWgNpq5eopNNLjvxgA766fpoTCF5Y4iV7Ub9zKrzppJ9PBBEsDmQPGd43hKrNo6dk9ZhvrkLbqcYf",
  "key25": "2vcU42j5GnPnB7xRbinHL7DeEwWAXHxZLxCAeHY4SHVjLK5kR6yyecbpPAqGWrEWbVwbj9aYbAzL85FWqM9rQUca",
  "key26": "2yt9KwZ8AVpTkw1DXhn1ViFyHgXgK5fq43N4z8X3Uv8hm9FuhwFnEct6wQkPheoLEXwopfk6WRhqkkDfU8apwVyC",
  "key27": "au9yTmefg6Scqtu4PKGyBgNxSfJMGermsEVDwZEtjvh96u6XpuwRxEi7magbxxNwHBdmr16Fq2bocSYVikZm9oM",
  "key28": "2B7aUrueqv7MJfDQqL2hUzsC3YdZjEd1vkYxtEkiR2g62LHGkUAhattccKqmRdaJuXxzFaWPmd4oco4knNSBr2EL",
  "key29": "5nqLD9nDzpUNtHP63sdEATtaCGxvFX8SHobv35Zrcah1tiuEE8YcDTJoD2CC6ivLev1noqu5ZySwzdGr6h4BFGr6",
  "key30": "4hs3CAuopXrGRkVHV6H1J4fn2SamFTQQwdvKRrkSdqQXmUvhasSTXTMAYTYJBJPwAiNSQLWfnZwucaUgW7rKW9ra",
  "key31": "2aWf7NLeiDfLwK7qo6iUiJ8get2SKbPB2tZjSemJg6q9Y7wkbwrV4sxZfweEgWp2QsNV39SnUopZ42uMdEtnTTA8",
  "key32": "2WjFLmceSDzuKEbqQzuPKR8RCwdF8t8BLEQgKupP4tMXXnVfxehByEWmVjUeAsq3R9YdZjzj2ozQqFnK5Ay6iamm"
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
