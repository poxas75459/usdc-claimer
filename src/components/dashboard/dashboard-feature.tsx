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
    "5LfoYdzaY9asQmLj9dYCunUVdeEaPnvcWUk5oAC31N7bAsLgsoNm9BkhzLDhRL3JoquWFx7VNwSLZHHXc3VmuACT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aD2LbDLPHne8tnhi3MAkvYAXY8d9jGG8LRyV6Hv8QffmejtMMVqj8nAjH2gqHLiAPNP1aWffo96wtQGKNEjnVF2",
  "key1": "4aFVudgvHnWywV7zfrDYvVZNjPSx8Bgyv8NdktXzFRJYUrhhuhJJvNJnpfHG9SNSvj5eBszR8SwdPeXVs7kwzTKK",
  "key2": "5txKJbrR8TDqnEWDbwL6rmmfnLyRXbxRFMNLBcVcpe5FsXXATqWrQdL9pjzcYWgJ8BEFTvRUSiaRBTc3mopcURLc",
  "key3": "2fjaphMnDqfu9BGwRPdFATTGyFHAMpatWyam6QHZWzFvH6P8yTA9sP1GGRChoQTvghn2iFKme8nYJCD97EtMwCeZ",
  "key4": "34jKmheqLcJAB3AbriFXeyq7f6rZXeo7XDfY194vw3Erp1FQz1xwKvuMDJuyiYnKLdPiJGT7R6CFD5WemXhzoBP1",
  "key5": "2BjpcwyWP61NxhB2V3JFVf3BDWdnUnQAc69JyCwHffcfHSarT6GmMwyWUVgaGDxacXhPentqWHoXQNwmKsasFc3W",
  "key6": "4QSfVgqxqBhsVg42nXVVjP89tBb8SvKTxPy5MbjV3X4HyXzxCLMoYxp1S5NQkx9Vr7gmi1r8B5uLZeUSb9cRkbt7",
  "key7": "3MNAzQabYdZTzcqFrbCQTe7hFcCnFcLpKsS24qt7eYLtVUBiV97T9F4RsbSYnpesHNiwHentSJ8ZVe6tTToLV2tx",
  "key8": "TMZXFfkgVQtvC1TxuJyfj4H7ZEJEP2isLQkz7igMRog9mqPSxW5SWHxMvFqWwQkZseu11ABdJWchPzvWrq4K3vt",
  "key9": "4vQqaxSDB6m2Q7gtqTkPBUzo3EA99GK6j9y8HSrsxsGPSobXya2Jt9j2XnYdyjwZoHQnmgLLkf4VhcGTDjJQYD3",
  "key10": "2RBk4ejetGctHVGC4UzbhhfHumRYjH6NDQNZJcqSbzwvAWnwZfH8QUNWqhxoJkgsnnEazy6ANrxdYF83mfW8BnjH",
  "key11": "29umRYVdB8N2jW9UAfq3Bnq8PCdkNnAuQuNgD1Pg77Qq2iwACuYuRukYP9QGicDpR1cDTWogvrfcGWxL8zGiWZ9r",
  "key12": "5QiTcA3MqnhmZo9sQdFwBcgAtZ6uTToz9jnfdaYNnbkrQMXtPa49tFEJoSAbcwVXo4BvGfWMQkPvn6ws2MgMMkWa",
  "key13": "LPjFUhk5NWKF7haV3vyjhvKnuebpMLvGcYsedGKXr6mbBDrJkk75WqaiBfyELAjTvTVYxZyHddf4uEjckz2th23",
  "key14": "31LyH8vzH85XwQJDo5erXk5GPZmbzfBGEj24NwmUqCbcKkHFhsCsFKyKBBK9eXiU16Rd2YvumFKQrqCyHJsECjGL",
  "key15": "3rCqJAQToMK4MQaUNMdvLEv3sVexJDq3pGf1vBSRdoohJQ9DtP7tfjJccC4zGaNjcKnxuUQUKSrSNRvBcZJPBRVV",
  "key16": "4TM3QVzbTg7JF8N9G4W3XHbK7GQc6Zt5q3buXUxT7d9PPKKF1Rco7SDmcqjpztxta7iwRYB4PhxPfehMr8BVVjvS",
  "key17": "3bGYvAWixevz7Z1tUJnMPk9v18VpSRLZTQb9cjz5gxNg3cZUfmLApCDWLiEG4MNjcCes3oAeUy2uYoXpTLSL2nxC",
  "key18": "5vTNwNKhXZFwks4pPQWso49itt9y5hhPrwmyEoN7DD4F15eLSojmHvNM5NbvhvsrcvHrGmLsbzWwpPkBeAs1tLSL",
  "key19": "2Kb6idgRNdcQxVLepFUP38q8VTmx88Y5qeCnyom7Pa8Ah4VaTrRBq8HS9WMHHUXFhDfAyr33tW1YjAQxrhjN3A1v",
  "key20": "3xaW79Q5xDe43zWdCz3MuryAPb4ru3DoJxTrg13G1uDxQ5VrQRNwpchUBnpA4AAqJDS95C7PH1PsK5wc6jvrF2kv",
  "key21": "3rQSoC9xaj9ECC43UkHzhGmERQir33wokQr1GGdb7SsfYH96727wKNX2xxcPmsNkehjkfMw2CKP2ftTXKieVDbcv",
  "key22": "3jw2R5sw4YawNRw1MA7bRzK9BLQVr2Yk8vpWMnJrRsNBRx6rtTWUevwLaA4VYSSZj52JiDs9FvNdzhSd5LXK2Qcr",
  "key23": "5BXMa1AmQTfPmM7iMP5DwH8NxLre5oiVPfzg9XATFkCQxLChMa38V1h4Qp3Qi8LvJ6dkMy1KFrwH3zXN2vFWkrka",
  "key24": "24TZGWBxKQEvxy4sGx4nHW8H5qD4dyzR8hEwd9rfcwoLbQnRY5ySSJvpJicjn4YP2b13otGzXxABBnFo6d61XRCt"
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
