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
    "5mt1DoLKpEsTBshF5394nGVsLQRfb2Rkjk7SE6TuCwCni6qokoXSWGWhbjCZexEJJYHwaqm48XXr1iHd6MxX7NZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfCF69e7Qg1ha3Su7o2RYdC4rocDcSBFBvcao7sVTDCNit98v4GBcZYwT27npNts78snDcTd9CgLVtvqQwVvWbQ",
  "key1": "3gwTuA8HdNv8MEm7F5jmM1SkkPKE67bFnLLjtfCNJUsMmRUj5FjynFe5i3rfLh5be7bhmJDcNMTf686mS8pK5JF7",
  "key2": "WfQ8VFgZCnBnQREo45ivnkJYmfJ5YPRJdpSJpimQWbjBNdohKeo4RkKt13vAA3MTa5iwhb9HTfvTr6aRLzRBdya",
  "key3": "4w9cq6u9hKHS2tjRkVVMivSWfZuDu3wukcaN5DYvPhGoYmarRhgFVz6Do6UvAgocvS83ZPAr3bcmfew3njt3pWEr",
  "key4": "KoBdriM8iSQUXgbeeWmwSRVg8xvhv3BqsSG6iEmz1iTzcJ72zRYGYShY4nYFHggGMNajRsL9C63o9kmUqGiX3mX",
  "key5": "2EDn5732FPXWBoJwA7Nu1EyTnGH86QbFh8DLJ8Fa5qpEWojk311PewhQ591BceTjCn6pDRDYtxLaPfWWDobpCask",
  "key6": "P83iyhDUnjED2aKv4LuAJe2bhhZss4CesdKvis6eN9JFGGf4X79CTYHS2j1HRtW4AJXnZ2TXSo39q4sPzw9fypq",
  "key7": "5UvN8FjUwr9CXBxcLUdBziv9voK8jvw85tFJUbTZGTwkh2HQ3M3cXA92tTtfg6qZEHNHgKqD9UZVeXZFRdfHpc69",
  "key8": "5Ztpwk9WgAAca5rpWgk17eqtrN37d1zM1dUtdcSYCR49g25JciaKGfTG39XHqFms3CeiLtKJMdtWnGoWmDKCg5Ky",
  "key9": "31iLu2giEpdEsJAVo1N7EZsy8bxviUXiKFpK8Vbqy3bGgLJ61A94jVyzCX6YvLRz4ZVDJw6BhGTkVxejXoNmHgwv",
  "key10": "3SmGpDwLSzcqPd98pRZwb6YTpc5fMUqNsePHi6ijnMm2qcUautcoXSUsdSNSur8kZzKTP8iCvS6nqRRtXQ7Fg75U",
  "key11": "GV9nDyMzSbQGqhTJpKD8Sj3PbBLM9ctS1XB5zCfJUhF4VZNrM25wxHPt6njt7HKKxx24RnvQpym4ukMmkbMiarC",
  "key12": "TA1aysnzrHrn9xugTmfQE2kQkZSFUYFLUiPq7jHKPAadCoB4jbsD8mc92ZckbwXT1CJ1WZqB24aaaDMpEv9RtGm",
  "key13": "4GEUubHGMfMNqrQFxZpNNK1nTCUsqhdZ8BmRBDXGHUCnJybVpQxuMg9qxw1TMkRb2WgMtDb1xGro7xg5SF6rtjj",
  "key14": "32YMutb1No99CtM2X3BkLSGzRVxfRxPvQyCZQfyWQFUmNNsMTx7PGe6tsPygWpwxoXT47zzTs6h5meGo6uoWnbrP",
  "key15": "4jy6XjCzKiw1GADcL8AZnpz1styZFzbYLAFeWfxhi1Qcr8M1EQpJ6cpihPamGTEruPTC3cxQcUCtDxWpVNAFwqXJ",
  "key16": "tNHAofgCPWU8vRX1P1wiQjdNP2FMLLjNZrcQkffbwkmmrwusTjC1b9fiNrvgcpS1oqvWmgDJxeuFhgcg5Y7sBTj",
  "key17": "4EiynR5UbVPRPDrb96fmUbDU2Da7SzgASGdPchAvhQJoopkkPaRQMSca4TXrtbDWqbtfabWAPZ8uUkyNLfLwvDTf",
  "key18": "3h46geEbtNUnWYVRF5PTmtybdrpnnqDT6k7HCGv5zhMwANrTh1GJ9Eccsy5PJWqHHBAqpZPPU3Fo6yzgew3dKsEA",
  "key19": "4t5AuvUWVm6NgVBcBwVwfCfEsEXjag6VFwDaky2Dyy4KrcoNYukRNNS85S4p9NSJQrF26KRhJLXiZHD5WXPcS2Ti",
  "key20": "RXAxR2s7VsUNci2aQpVk1AZ1qtFZK58WGm8aW2tLSvJWjNcx18qy5jWcFiBP34a8RjA4EWeFtEN6ihTfU1GajL6",
  "key21": "2xbxUdoLPttBmiUaJQkn888MXHYsgGSVmQdQK7W1xbd1PLTubnvEaLDf3tkmrtapwn3uuYDTbsdk1Jq5KVySroG6",
  "key22": "34EM8Vwh2NeW9bgBcJBobRsBVeAeKgzxkXpZvV8Kzz1pEDyQxAdsiDqiumnV4Zr4fbd44cviiYm7HTG915efwNWh",
  "key23": "EmQBu4nZ6tuHcdZB8myMGztHGE4cmg8VvE2U8D7krfZfr2rTDSvXUUhKYSYV51bhfx4j5wzarcnVRbZu1ZbSiLZ",
  "key24": "6113pVWEP21dBWMbpdk5fyyZBYvKGsxwfv7kdvyYUPuwdyj5XzgUtFBmwqEda4xQeCi3SPqvKcHgMbLX84r6DsG3",
  "key25": "4Sefpf5Sd2waYr7cQ6guiWAwR2vQeYGejvzt8LK2qnzzN9GY7xcg4YX8k5TL7SLHfMaeQpMeznZP3dE62SfZAipH",
  "key26": "3LyUydFjeh8DiBdiNaoHrDcyTUqfEp54vZcQ3djVdsxMHph3HKzVAfzrv67BnofWS5WMWXzHBha3KruUM617YvjA",
  "key27": "5xrPr6qWZabRKKQ1c77emWnYJmaMHzF1cC2bbj3BCijfB2XjBNSuGvmuuPGwU8NP3bGdgWXwYC2bZDSv77w7egVo",
  "key28": "4XpqAjns25iuLQ9qH9UFgABtxrXdDARpVbxJTR7TKdnrnoSyUkcBg1pPGSdukyfr9vfhDFXJQUhmkkCZoYr8YjAr",
  "key29": "37gcPLRVJD2aFNoereWgtD467XgsV9sBnrqvCuNc3pSdEtWBdwhjG9Ar9qhmNYeaDstDinG8kc4KvgtDZrUfdbxx",
  "key30": "5eK1yVbh5nBeweGT4XZgvXK55Z16gGWBFgEdNZZjzqRy9bC4pWv8rjqDiyGcbdHG3PzFbL9RCZCnckQBayfy8sD",
  "key31": "eJAreAwjsGgayDszaie4dSTrq6RCqJgrche57CfUxmBwBwgjb9Bw3hsAfSG9FMqLGcFFkzU7XfTzKFcJRLfY26H"
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
