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
    "2cskYYZ7Mf243S1DUqKcqStUbMm9Pqc2L8HPj9JkRSCNudJJyX8cLHD5qNbX5edj7SWZFon9sSbVmkRHoe5nttv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hjtqWJrABd3ggzUkFDuEfX8hhSxgQVzPmVYkuuehhZcYno8FoCpXTz5Msx2Q9U5gwMB7wdD54zV2LPcXwvNpQSk",
  "key1": "3VpE3PxRXnWVyZZgs2vDnWB8WwxiuzXgKRjn9a5jhajjBBWCFfyS6uNd8gYSV1B7oaLDbgw2q4aFfnzfc5SHrRS8",
  "key2": "QfdGK2QBcVg2js4VUqbcAGhHp7TG1FzXh3k73jnmwQ8SkwyUcxwg9dfTzsdAvkwnbtPze97msKP4tDLZTuv8U6h",
  "key3": "3rqpEFfxLb7iXAqf3VzUPAx62SGnvZYJjiNgDej8PiNy39kEHGUQxAXfoRMadQbF77zZfoKsfRfzofN2VqjQqYQY",
  "key4": "3qB7qUtE1oHs3xs6dGz5EpfiZVoniFHm71TMdKQkqrRa415J8RxvFZNBwSedGRCahCttjWQ3AVCYzXZEXXMcw9D8",
  "key5": "2XTei4f9TKwCvdNnZZSEEDatpuqgtgcxjE6CjbxVHRDMLQ8ua1Y8CCJjJJm6m9uGoZRTpUFET3xfsBQve1gn72dc",
  "key6": "5Nfhbt9iGnagsNXUMUAJ5vbZQfGL9fEqGDPsRt9grfob15u5mD9nNp2osP1iaarqPCs4MYn4qKTWj2xajPfFFjyy",
  "key7": "xYgff2nV19v897t25G7NiHwbMNAHFXVfWmAEPqKMdfW5MygPQnndin6XfeFByBfcmtYg4iW7FwGWRSFr7JjREwf",
  "key8": "4wUzQCrcepCSdZrsDheYbpvmQiZQRwhXxdteLSjh95b3b65jWPubzRLA52Hdjd2Xq3gFXLZuV6PRWDiasVrK11xm",
  "key9": "5FQ1YENCyN7C6nC2hSj19z7SMST9QGkFgvHi3YpECRJXhR4xZCaVp6HUxcEvVjBDWaWLQvDq7QfRvvtcpycH4KrZ",
  "key10": "47VvpuXsQutWVZT4fszrgV61GXvPMXVp3tDhCWuhguQuNRhAJTCTrc9RWARqrEYPSz9MVtfbYtWFLr26Ks76xwL",
  "key11": "2kj2sbqYaMuyCKwvjeFwxqfUPNRCmgsCN34NLfZyKKvmqMDJTrjGyEu8938gT22MWWSmDmXK13G7GYrnpvbcV5gA",
  "key12": "5m9Cs1xAMxXUwfLhv57f4gniJ9pFoihCh4BjAymNXCWi9Lod3D585ZHEhgpfNwGv8knLdDEaYGFGzjmL6ZHVTrNh",
  "key13": "3eEEtuhC5j1a29wThCJpR7EWFcwM6nfL4WzTaovvzvgXmwK48QANTxRxLi1NHYTL7fC86g3Dd3BibpVakWRpsr5L",
  "key14": "3yK68HbGXPxeDu4UiBfMxaR3DXL4F83BWjsAZadWMJRYzV5KBk6nUA9xkeUKD26ubFRhx9St2LqbmJkjaCc4ZDeW",
  "key15": "56DqEshir2318YPdMmSLqRZBSpgvjuEhDrR5bbnGsqP7dVYKup7XgiQEcvUVpw2j5FhHxySrLBbvMPkp9RJPnDoF",
  "key16": "3FCRB164ej8hJKPVuCmmCjeMT2EQUWGz7Auxw3HzhLpGZSTJeQVpG43G9VUwbQf9s8R1M4pnsB3L516s7929VsyW",
  "key17": "5hECyyDv6ZvzEZw4TgW2o5dH4PY9BAMeG6C1Ho5ogv8DNjDry88giWnDP9JCCE2TXxgLDYeducgbpuqJW8DHR4u7",
  "key18": "3vFUry783sURtUSnzd67ohvGEbpKJzcjzR1y4ArUQqVpskLtYn5RXK8NzUaJw9dbgEq3Gu1PQ9FeQ9Qu5K3s1K7R",
  "key19": "h9XNw2KTw7dL6VeRMBTKTMALCDZi52Dc1fd3bpq5rWHzmLurRK3zEMAJJ3Wy2CCX3YvFwwhwnyMymBTz2BonuDr",
  "key20": "3hE32AA9SywWXTmp26L876C8z264U2hEVvttvNDEY2bYxsCQ1cFtqwu3nVAFYYAyJC72xrHqTDTQ18rnT8Hpnrs2",
  "key21": "zfGz6eXGqdyaCYLMn7PVcVr32v7RsiWQUwTHDQr1Qsy9VmKXoSqrb1yE9uLcGnmEvog7tmU5TxDXBR1uigX1dGU",
  "key22": "5SZvHzR6DYcuLsWw79UyApJyXH5PmuFmXh37Xo4Gs9bwaoWmux3P4bFPP2HBC8wC7uGB3neFAird5qhNo7MBdXGV",
  "key23": "3coXYLAhP4CPm2FB8bzwWsjsn4bKAoJLdmRsTkcgW3k6a3rAdKDwxH1Qg8MpAk4R4SqiHuZooE3EKLpavJPD78Nx",
  "key24": "29ViuWwLysxyPJC9bF7wT1E8FGRApcdKBWAN8robLLf316JPKYXtUjFGispKEUfraimNnL9odTiF1o8a6Sw9Gv42",
  "key25": "gA56BK5o35bdQQrKdN7tCceexbinSLz1up8EsQSZGzyRCM6oSYNqLuj4h7kzzf9MhaBvAxMvq95321PtWQUJC8M",
  "key26": "J7kG1YrWu35Gih3dRW71nqvK4pVkeuGjaH6itQ7xbukPDwEJZ89LpGXDhBUVx2NTzk4784kvk9T2WzQb97RtG8J",
  "key27": "3LYPRFGcTbG3tz3uVHPdRKo54VTqVYLBVxUFuP8dwNSi21kt15vLKVMpnnW367ZxX3uGCjeNYUCcoQAWCxAU5aCi"
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
