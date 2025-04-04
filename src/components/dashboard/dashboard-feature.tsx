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
    "49DNKeBirh7Sndeoixsah4YWsZqtdMtRwqyK7PNCgtgLzfn6B1qBEu2RfgPuu9ai6isV18VJtENfGDjMkqz5jMcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ez4zVwVaPi64BHhKSHiaedA7LawKJz9SC96Y4gurFXYBkmwy7nH1JxdA7H7deBX8Vqa6WgRmEvamUSYpaAoXVag",
  "key1": "fgKajjQf86mpTE2LRV62WYzYW392mdijnT8dBc2iJ6oR3RRfyQdLmrbf37uA9i4jJatrdrkR1wPLZGR7sYsBBgQ",
  "key2": "2o5t3E9gyEkxunRJoeaBQAM5K3gNNgXsEexhzW7ZmQ4T8zP4dpJccxgRtKRsMzies19dt4HpF9xZX234NB8Yf3F9",
  "key3": "554KBK6rVrssLLLMDb4U44RrdbjT5ghdrfVemDL7ETjP2Yj3VxBdK87JAq4JthaK41Ssan3s7TEzc4R66AiSzezg",
  "key4": "5xC6yeapbdFv1DMvt2pqNfU9j5xfStsoRyWrxKMFNEMY26FDEU6214RV4CZ52h6wak3mhKqu7h8C82PVB9Bxmivs",
  "key5": "GqCUULEgpuku56uFCvoeRaKsYj8Sdke9ZzR39augSZkjxs3DQHznZVDj9tRJhrXAzmtpZ2iebCbXJ5QbkSsK6HY",
  "key6": "4xyMd9qmCtihASP93vRUJgwR7kpCwmibCyHNewW9WtdYkBwDUVWb6mjcsYQR47x7tNdZuZ4FyDkMPSb7P4a3WpgE",
  "key7": "5zJKe4auXzCnQBHQQJmdPdqhaMWJawKkMHTEd9Vkieh5dgnr8ZkVTF3VFw1aheRAJ5KNtXAvywGRWXyC4VMtsBuE",
  "key8": "5Nbw9zDDyTZwmRR6qBSxxzVM4NHpedqqzNWyPxDKCGjTqHAKG3UPXfaRwGX38oZjorFLK26eaDEP4kanftYYD8ES",
  "key9": "5B76SkP7E2wVagzTEB5p2FVjTFEAhZpEuemyGbZTbT4xhuwjPVu6E9Y4Zyr3fV6JwYesED443r1zbnU3S6zqSBrc",
  "key10": "3ntB8GaRhuP9HFtaugXRDzvE3MsuCZ3kpxrBt8rYeZz1aph75TkGuesQCbCQS7CnE627LdT5xLL32v7wNKCCYVzh",
  "key11": "3oDPZgGmKAaS6e9jzmhS3Z6Dkm3FAd9QtZymic7GZNo1LQp3R9RhUs5U4x7ymPcTEJpQxkcSgAgfQJMuJj8TEWvT",
  "key12": "5pqf5BuTBfeVpMUpSpcwjJTX4X8xxvRwYYmxTWMrmkWBG2m4VnEoc2PpQUguWVZHzNncHz89nk7hdB7iuaGUtUMD",
  "key13": "tEPwGZ4pYDrpXrFzkKSW7c34ncoc4rEJqB4wRQ9JPi2LXSR3Y9zJBCb9xToRPjDw3eKmc2CyiytM4tpR8ZCSm6z",
  "key14": "5YUg86FwE4iF7zJ53KcXtj9Pm4zzicMbaBBrcDoEqwHYgwdxPsb6gRYEB88TjARtuq7Pm77x91HnBhyv5ewVdpsB",
  "key15": "66JDDYHvT8cTVqxF1WpeAnmsRx3bwBizoN3KcN8eDwQXcggvgmtDBpGyKvqo1YWQMqupuW5TA5qbrknAtfwpQDLA",
  "key16": "oSjzvko7cLxxBdfSLcqooAtjCK7da2qDNfDsYGob9RsWD3V2JV6X6wX1xMVtX5NEBTCszrChzVmmPXYhKdZyrgE",
  "key17": "5n3mrQ3ZwHxPbKad5jQYhQRvcPGgAkuCiqt3irMLWy4o6vZGxEHJfGyr2MnUtffrzgfhLiSLDHRx6M1DN8B17QVn",
  "key18": "4r6tXDaD6seAmF5CgbNDia7sJJ4audGy9kkZFwS7gXvqYf7jsX4MZcFzwCB2TcSaTU1safnBgvi1euujQw3Gx8y4",
  "key19": "3aHcGzN77x4PLgfgqN4xe5Jx4cags8923zLEJesdW9h6zb3GvxWcaYfs4bKxy2qdZ5b2272TcmpnBUHRMpERwEeH",
  "key20": "4d8PTGbULhNCRr868uqwFvfsiEhmTn4arMmvsbyJzKbyBfXeBCnbrLRWcscWp1VDr2c9yaDkC6Dvyze2WquyDd1w",
  "key21": "C5zaqJVTdNeonNdqK8bpbZa8W9nTTatgbkBYsDhQ3UKMQ2n3QBFwQ77RbRgMKVquynmnfpQEZvwDn5XP1Y9g875",
  "key22": "29DdcGEtzHur6e8n1sLPJR5EGE5qFDbFcoQukwv745vySto8xKAGrPQptnVxZeDEDYqRQAtAdcEHR6JHqRVzgicc",
  "key23": "4y3wbQhuZF7vxJWEL4sxVYpxqfsTN5Wj2JxPGuH1Lxnwj3RaBX5A1mtskXtLbNoaitjifrRDiFf7DqUx9KH5Cg4j",
  "key24": "4eFvu4aWVmkFQtz2j9ycrQAWGufpT1m28diUo8zjNRTcr8cgKwYNgBkWY4e8SiL4tX5MuamGrDgq6RsJgnr81PQC",
  "key25": "BBpMB57moNUgDAuHnEEFzWr6nE4yDWJuu4m5QsctXz7TqBgVBUv1PFwg4yQ5nYrn5bqtTxizcJfWobeAjVA9pxi"
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
