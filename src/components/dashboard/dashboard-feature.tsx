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
    "34Dm83PxmtYgk6VedKZ8sDsxAAyMTpN24TiyfpdkoDEFKU1hYuXFhgmkLngfibhnqPXLbpdFPr2b9fUF8sdQsy97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9pg1q5UfrH4ZwD72fSNvbSfo1xPCCtNguK1EnZpw66sf2vQ89V1JoFTxsQBWaJRhinC1pyRdcgrqxo9dZAL5no",
  "key1": "3VdN2AAQRDasWHCF3c865AmzC3ceoWZua57Fu6mCiJQjQapiPUxs5vSMVEz7sKfwTtsjf7kpQk13w5AXodV5PKKK",
  "key2": "57rZydYPBSRAyB49hLxzQJa5neeMdCRnZ1L6goL5iosMHZk6ZpKPjSgB93jBZgs3vSKzyrNwGVv1m7UivkGNWfPj",
  "key3": "2QEv7kuPP4Am7uu3LTaLWqAxkbbokgXQWUUTr4e273pE3c2pKdtGSzjoq1EiS1phxTh3Py2w7NLvh1bBox2mN6eT",
  "key4": "129ucwAPNbdhGDSF9VEnCW9G3rDKqrLoyUBmTcA71vxCmQRvvZkEGymTQEDervpkFJEVTYpctXt51RwFrXUfREr7",
  "key5": "34z3UbEHJrzcWX7exZmRmLb3tCY47FmKnBmwPvKfbDeEBK2mCBPRy3SyUrspgu7asUz635Ftz9SwzkCcMfP5oSsj",
  "key6": "5wGHgWSVb2tjHCVhU4FBWi9dmP4J9g6r6hrp3BUNoHWFP8Vwb5nyr7DWwyYZ3goX5Coxa4A2hAfdtE5TQc65cBUG",
  "key7": "4nvT2vWsmNX6BAUjxrRmkFm4fiRhMbft56knRmavR71L1jdzp4YZ2JqRrkYcTYc68hdzZf72CKArbsDdQ116a4rr",
  "key8": "21idZg2KoHmZjwqmnVuuryi6s9CtqwoVQTvE4mdnBLQqxVdkiPoApc8XUhgX6CAMSkGi1Ubj7SsmNk9YcWKeTKnF",
  "key9": "MgDiu8s922QwP9HjDMsUnMEMxam1NuTvnZkQeVuhpEdc1JhyCpaedyhHN28c6Sqj4K9G3Xw5L4sMtp8yed8CHLx",
  "key10": "5KJ7LbtpB93z2mnYKP5b5TJXVeD4qGNUniCpZ8S5LxW5rRnx1zDb64PHSmzuWSuN1TzFvSEeEnAo5XSpZWWaS39e",
  "key11": "64T8QD2BaEMETnNVGYgcPf38nEkKpp2gSisE9BaGdvHhdMZhEDBMPyzeynCkqzUeV5bj7xNAchdJ7hfr6VrndBLh",
  "key12": "D8hhftJKn2oAAznSvboUpkHnd7NMP4Sqm7ucgtiAfDgSkcazdqw8BAzDTdyfsnq8qTdThCjXn6wSJVrbrq4RRva",
  "key13": "nbVJhsuSU1YHuXRLwQ9P8ZXfLutnP7966tCu1RbRNhqKsbmx7BhUzBEykaKy3mebfoTqCHMje3ixcLCbpN4eCnN",
  "key14": "625S3gF3Uqo32y5Ktk6JmrkF3PwCUZDzrnawbHrFJjz4uVQ4J93dX7vgy51bi6DQ21CpDByGG7yT3ivVcC5NJ1jA",
  "key15": "4ocue4h4c8bGsd3MghWo31Y7PDi8eCPv8XxVXmnx47QFZQ9rkaWjg5pDV4JX7ftCteCmrFaqj2jnskB1YHLmQQKR",
  "key16": "23ztFSPNEBTZ59hzNsaaWEBd39Jb3HPqk3MmgDVNo5a5hqnPbQXSh3vCbKqp34ypqEz7BvC8agHZYW6nXznGMEtX",
  "key17": "35BPMhvHGqqBxiRhLhvX8rdDWby37V9tyj1eoK8v9e9fp91b2BjwMMuwzTtKcN7TKuCFNB9KdGwcT71HSsaqYn7n",
  "key18": "3Mz6EpMqurJjhZypWbtUxLcwhgjz4HLiLgpB2yUHbEaU51kEW8xj5BKEp7sJm9pBgtSvbk1C8DUtbqtPgyYduWBz",
  "key19": "2ddkg1upzUS2hHoNk3fwhnUAsAxtfKDVtd12d3iAcc55Cx1FaoaNDa7aGCGWQprHRnLoCTadFmGpLgiGdAZUAiEb",
  "key20": "2pxCqxyFJdQdHAqzccrziTrqKTCnaVpTDQ5p7i1YS4hqVoErZezhV2bNHpmHXe2XFjhwJ1sCNGHsGpzsCbYwvmgT",
  "key21": "AAvMTnR9WfmDXkLufnoX6wpZjEw6m78YVpKTgrJBjDBXjdB1LaaNzNNjjGYmHr6uUjzbETG946dmNdwxHCpV8c2",
  "key22": "2nKjxaRXoH3FcLUtRnS6FUgk4by2AjZzEEk3EciuJXCwjpuMKpbMGtEMwVoxsUhR6LT38qMfLkWMNCSFjJqiMoKB",
  "key23": "4CWka8QL5UEbGPXDejeEp28jvpeNttEJHoMdSd6bzGAE463i5LV2X8e9aqVNi7zSsaGbUUJxnG6MqA3WHuThapfe",
  "key24": "3b6pudUtau4XcJnKPdhuLyvxHiiJnkLrsnxMgGSTmPFNoKw5YVUzkPWUGMv8wnhCXyV6gXVYdAWoGNp6sBJYAmef",
  "key25": "2mDbj1oq6qmaqDQMzuTNZc2y3ABpW75afhtH91wD1KktRqq1PtK4aQHQAYwQ7uW8VEPuwUHD6ZKGtp7JVcrNLKMY",
  "key26": "XSKfhYyjEsNqe8LsueVZ2ZWZapJKjxx7hN6y42LB2DZukFjTDyUzLRr6jLQ8mCuzjM4X12g7kZYcc39AN8K5sY4",
  "key27": "49ohoDTG9XkWGjRDJpGnrr535cTBUTGcutXz7kvP3uGRCNfcxf9wPPrbhBTuKM57vzQid27wzZE2gmQBTH7edREn",
  "key28": "5VGueRksigw1rAcL7Cx2by6kNByJLb3a7JtsV33GP2EKcx8xFe5pQ7pN6MxnPJue7SdZWdQBi9w53kSqgL1zCepm",
  "key29": "4B9KK5cGpYzbWA75pAWG57vH6Z3cx5PLqNSw6Lk3ttSTewe3r2hJxVP6fZWpFLRD9qkWyRXkUpY2eyWK4Wbv5JyF"
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
