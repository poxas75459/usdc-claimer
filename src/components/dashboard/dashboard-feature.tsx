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
    "33gXztMAAdYPWP91Ai3NDKxoCfZKky2S1M5R2bV1s1vJHzU9jd5gHD2qHsfUhACxberzQGTcVSAJNcayKGJoDsYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KbDxorLY8F7Q7yQNoAfbSA67btSBETN5fPTr5FopV8pJuRG6b6k6j3evLuJmz2bSrAdL779dNFP3YBhTyYzn9J",
  "key1": "3yCooeLZoXVk1yrxF4mqS9WbcZkBYzgt7De1cRNCAWsX8nc1yhhweao3RfethEtFsQLsP7ZMLDWy5V4xh2cUVsNr",
  "key2": "4ejT4h51NMD5B1TxPVgK6Qc8moEehpxo6eYiVwfccGc5uBeGioKyzy15qaFuBJCPuMfrUgqAJzLDxx35p5Td9S81",
  "key3": "5EVZLG4BrtgrFAjKmnCu4cgicApdLmtorin1RQ4PFNog8ihn6L9itjr1yLpm3xhtLVw59oqDjmoqAd8xeAio9Jya",
  "key4": "jHJSK4Dba9KdKNUZaQ8n2zGtUvfRKSNPmW1cUgjQSEvaeyQJDTmty3rMXgF6paChK9Uwr7bLHaMPQtiLGSAPrpF",
  "key5": "52FNKQ5QtHr9wuGuHjS3eLRq5LdvEgvFPCKLMPiv6yBPph5gFVEu73keEhm41tpf94165G4vhhNJ6SgUx3ASnqJy",
  "key6": "3QycguFTUqSv9VLKdJzV6R6yzZnvJ3qYRznbDyeLzqycNre19myUDiBSL6ucGEoq3Qy9dVQNHfrqHWLaQeeZzsZC",
  "key7": "48cdCQJVV3qcakY4draQQ3kK5mK6LW3VpPScNwoJPvynm1CGkw1jcp1YxsCUkzEW7dBLbP3fJi4cNpRtpxYNxoS8",
  "key8": "4jbLH4xWrkH7ak83geMg6a7H1huBkFUbFn2Wd84LaYPZhoRo6ipzrVCNS3wcC79Xx29FT2kur8sQ6RmGMSrWH9s6",
  "key9": "a6pJUszJcJywsK8ig9MKjJvePGRdhEzSyBrQRnvcmZ1bVPzp6mBZ86zGLC9SDakhhVrkym2h6kbxzYsvvJcwMkt",
  "key10": "3JFZa45n1twBjrSZe53z5UM9MGAwRMhEc8h8XMp7tqGH4efCwt1SVwvLBjiLAs8v2kz1dKqhvRPCiJV1CSTUeGVX",
  "key11": "hDgx3MRHodDxSG12stacpbwyxXwk9cxq4YAXCbPDYhecuytaxFSAzvrxUP8YCQr5m54HrbeNZkkRaGhPMSk2MFM",
  "key12": "5JYq2gNT3VMbZFkk5Zavtit7ckZWwwoEiPcL8DZ865VKzVKUJg4QUXgYfXr75jTvzheL43UWU7vuz3xAjviv5n2B",
  "key13": "3wLMvTKxWae3UnevWm7VYHCvz3stAArr5gdNQfKEqVAYJGWsj4eYqaoEPwoNiGMFgCcwHLJqew2TQ7nGLeXVkgv7",
  "key14": "WJKSxWqw6cSby6byBQaLQhyujRkuHgDJBWixU7Ty3V91WXzRifvwnFSrSBJ9bPvLnkHr62pw9G6iUEVUmDJZQL9",
  "key15": "2Wai8hDtMTkbi3uLvRi1XCkhgfHMUGSa3GfZoD9tnCh6Eo6X38WB5LARvHBdFSMhtxrRtmEUq8SJr7v2mdrnuK56",
  "key16": "2cJNEhSRpsUxtdM16JC6BvgSDrpa6uoktpBsmc926JE1tHHakcAD2Uazkcag3wbbXgNqyCSGoyn9qyGb1cQMdyTs",
  "key17": "2w3sKZnL5Abm7VbEnNiE47ARRRx8WRRGbqUmu6XAmXiaihfM5HMBx118LUqitSSWWEiByPzcqcy8gkyZAvC1Sb4R",
  "key18": "3FCQSnFyJ1yD4NPJAKMb2swD7KPJJmvX6CKapg1hn9pC9EsKGdJybJkuxedcw85CmRgBvUePoGYrEX2sqSGp9KpU",
  "key19": "4W2cC5QtuPYzd8vVdTqZ2pVPvKtd5Zv5doJEEdEKWZUfu8TynH1NLhRJpRHikSWaSxtAf6ZrSk9VL8etp35zLdkA",
  "key20": "4gVA7d6aDwCzCMHTL36gj9HyHy4RUgk9T9CjSPYCAgFuF5CRKFmntRh57owJe4mEgXCDKd3qWHxX5RRR8sh4NTqh",
  "key21": "3EZaajbGe1BjZq11VrrdK4oMqpJe2b9FSjR7CY3ZniXrhV7iuwCoJb75BbAfiKbgfjQeRUtN1quzuXBMMmgwm5HA",
  "key22": "3bxRckEJfooAGDYCsyrDL1AwbvZQULCpFLUeyDWfUujdnFmmnLGHttiy9LPQnkf7VU3JPG66c2ZuVaY4wn1ZDswx",
  "key23": "4HPJY3E4pZZqAgBYmzfqaAR1w8uHErdhaEgXqbpq1pxayqSXwyDt7pSiQf2zKR1EPSBoCkWixPfioDEpMbFosHtX",
  "key24": "4RXqQfhxMBZEkmhEJVmSk43abXEsFDHBJGRpki49Y75ptqXTJEHvyNJiNEDXKjg1rT6zSLfEkHjbtKoYakZ287nd",
  "key25": "4dWZaBcxHe4J9N8F2MVzjtjNc9doMU2zCgvBcriSazvwrSXXSWpEnjvWPFGzqFY1EpimGrqPdGjCD4cKGai8cWTC",
  "key26": "RDhtVxH2k8t3ZBd1h8Zjmb221aiCQaB9otRLW7WvNtszSBeGbhP4wY97C2ogJ67x5nFHqiLSscQjJc9WkVyaULU",
  "key27": "2g8cwNqTDRv3MstAr5s4dufdpBwhtBee26gcPn6zAXtA4Yo1JNXfXWBDc9JrDg7d5WdabB8ciNeuB76q2g5y2b4r",
  "key28": "5kcDTeqh6gEqcnuvYheEVKrRhh8dkWee9QEwCxnMTLmphYgKcbGyZFtXsu7t9nsyKS1BkJCFfUuBwjmVrMipkiFm",
  "key29": "3C55C5PPWtJQc4giS57dvvH2jBybEZxTs9mkangBjH7fmM6Nv9UDs968tUpMQ7fkpjP8EioSHX6bPjfEHro8a1pm",
  "key30": "2uct5YKEjPR2yoD8v7a9nts8qFm3SxXiVWqJzZBHkxHVsnbYb7kGEHpjp5oi7ryzRYWiCP3Fh44pYwzHYGmZ1uZ8",
  "key31": "2mhabCGZcS3YrqSvjbYjvd1LMgFbPqBTnn9AopZUQzqrMjsNdReDnxDAmvi4sABg1qJbXsbQqSeozEjqNgSEz2gx",
  "key32": "WEZ6pwLsfGZHBMUmqaDraU9Sbcy9spjHdqAm3MH8J7xPVEzZtjCQNvLbneFKxWNz9fsbc2kbiMM2afLU7LKx25F",
  "key33": "2DBhX3QWkBfX4W6NCMsak5JfoPvTsEGLrydimWourXAFL754iC4zFrTbhSXsFmmSrqurh1CabjHnr9c7zuEoqmSJ",
  "key34": "2AiB1uYUrsf9a85jf2aHiMdbUVpf2mURSQFhhBsNjRJckn5QwcKeQgcoFH1zMwPcZC7DabqyEaP9JmwMzfF9eUdN"
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
