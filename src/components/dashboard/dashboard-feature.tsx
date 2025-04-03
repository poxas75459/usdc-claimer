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
    "48CJJL7Gq8myr6B7YiFE6rRncPM5NJTDFkPsXaxVoUn9edZUgA42g74PstorxeZ5FQR8em1JiAT8RV4n8aDzMSJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2toriqSEdXsoitTvZHcmqEQuVpcfEHzRHoHFQFCdx3DakqfdqnmgAeTRKR754TnzXWiGYYxdXCft7UFn49NRDztR",
  "key1": "47irifMwFYd9QpSudQGx4gFFU6cHBDQF3Gn597qKPWUs7Mk5awqvHq6pp998fFE7hYHEh1GAzobLrMh4HFuAQtBb",
  "key2": "qz1ZR2NB2g7VqVxvaMQ7EHJByHhDh8NXYsfx9mS5qaH6ymuLRUKaUswULddi7FGwZMefHXtmGs1nNK4AWDmDF9M",
  "key3": "2idu3VEAWejSe8aPXkFRcyAwRXH9sewhFQp2d6zMpr1vuELRN7GTC9fzACP8iYTdoJwZvyehSrs3c1XcqatUqnpw",
  "key4": "3Qxk8uhf5KVbHGaoTdJBJnmLinWSfDAsDHotSY9sm4bS311VwWYdgohXWMXoZVcmhYfzU9Z5ig8oV1R7d8k4rEF4",
  "key5": "3jet5fKz2qsCqiS3yUwLkk6AxKFz5zUHXFr3fnKs5t4c2HFuDXnCtyWJpHT9pkQYNZUf3e2gaAHJGLRLthH3TbuF",
  "key6": "5qRxkmxRL8E2NYKVrodN5VkZHLYjFAtV5oLeWPVCvsop1eAVGpFSZvq66No6ptKkA6JHThJqqdAWAYPj6YGqwCN3",
  "key7": "5MxCja5puBi21ep428DBudkodNg21a81ZcevAq6PzdwBg936w76SJQxg5kwdDP2jPRCBeBKaw2SUiCAJXpCSzMRx",
  "key8": "5SHQVZCCFXSfLsxAZE3ihpMVvyLbEe9PsgsYXHumCXk9HBUqKYcCWPatCAYzW2b3upTk9bsGeyruJiVg4cCVLJwd",
  "key9": "5ECYDuHGLa4mGxTeBErpXjsR1RwNEAHeuV2xm85aaLQua41NoXVwYEn7EqQ5mPGWcq6nwhZinnSB5iBtuyryJoGN",
  "key10": "38NVn3iXbmFsBAk2bDfuEYHpKgJx5QiYr7V2PwLLmsG4by1Cwr57qEvVENA8wDxKABJtcdrZduwoBsu6mzP1ZsCs",
  "key11": "3QaGAKW3FAJXBy8vME6yf7puEydUu5rtPkWsxHSrwXNW5ea6eiJgjXSxcsa1QGUcDJGryJGqGjyBFtEWYTjKdnms",
  "key12": "64LKVW4Haswo81xxJzthwbVnELTDH99prqXkWXbjCsprF5CRsW6tMb8mm5CKqFNhkG33h2i6HEQHsYWperbCaX9J",
  "key13": "2N9BAax5nj9mVCSuZf23V35jPL6RbLHS7t3MUvjgD6FSmaZiLM6qYrJzSFtgXd1iZtopvMBniQYLyNmqUXEPTFta",
  "key14": "5cdLpSctFoDh2DkMDuK4SyifPYiwbSM1v1a3cRW4WXBuKkSRPHP2LBwPAs6tDcNPSrMdU35GkVGsgjLEy5GuYm6u",
  "key15": "5WATZzZ7J7e1iz9akKmFepYE9pyz3F6Y2ofKPoqR8fbUoLx6WoiV5oc7U8tLUQZRYPkAheXBZ7tbSui1d1LcuHHw",
  "key16": "5t7HhiCmgCuv1oiuotCKF4swkZYDmxXkSLTD4fhQbx2tdW1CjxBtex5FNkNr2rfxx8ZtpwHaBn98VaSDLW9WEA4Y",
  "key17": "rPbV7EXgzfnpRku8pQBTUsaa2p36wd1MWpRZcUndN7mPav1gJgPmpNXiiTPv7TcYbcnxtBTk9dFQD3PbP5sucV5",
  "key18": "XoaHGkCYKb3hDgYJgT2LLgqwKtWKPEEEUfzeW66jyK8ijFqKEThkSK6kqq56LqxEse2KaeVK8ijZK1oAxMYDiE4",
  "key19": "4fJMhubXYyAWdwfPCrE3sZC1Fc75wz5GzBw5B3iT4CgehhAgn8gQNscrDJabCtXrL5RmPdEAyddpN8FggbB8xy5e",
  "key20": "5UhhbWP4cESeT4RDRSgDp9WSgoRN5Q2JVmWkRsUM6FrySiNufXRE5vqaMDNRe6YcY5pbhKebveC1g7sQ87iZvtQ7",
  "key21": "2U6nSgii4heNXhtXJR6Xx1MdsrERhNmWthmhGhqzcrs2mpSaRxY4QCFV3toY4WmDrW5ofK4bFUvebfuMsvqJUSHy",
  "key22": "4b3MmriwPTDk7LwyFKdzosTzXqK8skEE9NdEUto3mrPqpC3VvzNv2q3yext38n8wqfrtvo7Ns9SQ9C71E12nH1pT",
  "key23": "5rLGya5hbJSwwECQvNA4t6ogmmm2DcAk2HR5gwNZ4XJVaYXnw1UjMNCFCAMrugqey38MzDsjcbmKkMbYtH9PDST",
  "key24": "2C88SzXCzmSwa37qF6M9uEbXGHCFKbxrg2nn3VFrfhWt55i7Ge2UWbPHpEF7jPKyAvbPp1yU7LRcN7thHLexWqVw",
  "key25": "ozzogLRxJRgnK8FjXtgu1L1KEtB9F7tnJR3EZEB5HBFPwY9ceqc57zNPBKXaFHq3BAtmCvEqgqpfaLUxP2FLJWt"
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
