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
    "5xvCBpvyE6LtZnpmZagzdUXSjtDFNZwrk4FJ2pL3UgTpbVh72vk8Bvt3bbwyvhAJLP6uTdtWNxRquvXpZ4bZAkV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLKXgfPsQ6qigy2b8K1g412koXWB87W8wQ6bmYjh2f9ov1ETEMjx9psrgFy2ehnY6APEGprbDfZF2Yi2LbF5ynh",
  "key1": "5yPEjFHJYpQJwEUDyPWAhc6P3DB7h7pLVueqp582tTnptPdBf89sZ9XTKaHPSCaE92yZe6WYcY3dwAM8NJDfmoX",
  "key2": "27pyNPuVK1r6bRaAShLH2F4koXoRjPURFPXZnURYLtbgNWdvuWgYUfTTcWUspc1g5uiTrwF6CLNPEnZC1KV4fmm3",
  "key3": "JUpBNLCqqpTRcqKDUNSFHTNDwF8pz8YYpR79xDjw3bvtMVs23jV4oH73g4QAwsKo4BMEgyTVy2X5HxUZkjFzXEv",
  "key4": "61iKpA3X2a6fxhVuVnHLmixexon6PDYLkXZ7qxAFUwgispqXovVsYemTsyf91qqexJ9h49mPZYqXiDGRVxc7E3Pj",
  "key5": "36FGRnkhXgghPDng8FQSc2GWMP2cGDqqGr6Aob4jQRAwWGRjLiT8iW1suEHfozerw8DmkyQVKxy1Np8zyPEFqbjg",
  "key6": "2juzkgRqtsVohFPTx1BqxdNwTCdMqx4N6FiR7aE8nrrYYCGLnY679aAepHJDUd53RAuAUykqsTEhW8cDrvfzb6Bs",
  "key7": "4Bk1ZRg5QGcS8CumPw27VjdBkfnRB6pGh5QYM69GV22upk3czbehxfsrckFiegnSGPysZoRNYxg8zJYQze9vgPZN",
  "key8": "pjj12EDya5KTX6XBNDgv48YWSvste58F244GQxSGtYpvbPWwEvu7o4WkU8yrHriVPFTe1v39QrxFoyPHJEcnBLg",
  "key9": "5HbHqz9PA7AYHdwtS88CCD6CUZ1Aq6by5SbgEg36CKsdCz5BSJDvh4nUECL57F4GWifcbnTD6Xmo3GH4pKsHrzbR",
  "key10": "2x15n8gXrQMnp4Fb38B9TpaMLmEkVRDtY85RmrZyryh1r4h3ZT2Bin6fvjrdBxULNJduv4cdMJZnf83pmMB8A2Q3",
  "key11": "5cBKDBPZtNTD8rMKa7FRqvnN1ap439o2iaAmj58jv6pQW6MxQZVWRYcC1xCn4MCAufe8MD336262RFttCqJ9VwMx",
  "key12": "22tFyhXrFVGs5N5VRigZ6wCoPkENQhnbusNVq6AekE3HaJi6WnrZgKxXWiooZGH3AwcT1Mweck9mKQiCNLXXavMQ",
  "key13": "4qyXXp9fZ7YRcw82VhpugijjyY5xAnAtA4vXy3pq3uUpJhUuhR9Nbd425RnAc2YLQBvYsnnRfXspRKyp4qpox7Z",
  "key14": "45g6kYAsBgmq1RBGYugo2cgUahBJb3DNJVzh2aJqdFwhSHEknbeSZ51sUpgadRdMYpc34c1qvb2L3q6jGN1y9T3A",
  "key15": "2hTfRD1Bmvr3avFxBFFB8v7xbwzaMYbecZEPjPtmAtMqp9Gbq8szfGSkyDoYgT6BhQ1ayXs2skJHrN59p2mBw91K",
  "key16": "3ZjPFPsBNqLZjRqDFcyCYkLyAd4u8MnC1BU59ModdgPoaeco8JC7gcMWYxN3iaVf9TxAWDBZA2XJ2wmWdpz936Ek",
  "key17": "veLSDr12vqGqbpW6pdafjcTCxVadiVksmUEQzauFF8JpzqN9K9Kfp5WP68mA2JASzAsx1ecs8mf7bD8iSgqam94",
  "key18": "mPXtov6TGACh2zwL4iCChrUuMrYdSfPFZQTsffMUwWaWyDij4bKjkNZVCHpNEsnLKkg7zg8piPFsrE5fDveeXzw",
  "key19": "4LC2HQCejWQHBW9zvkuRGZFd8WfMNYW53UHfDhwNBMbnvsq14a74ALoUEofuC5JugS2sn7u6jWAPgfw6mcvPot5k",
  "key20": "2LVhC6skw2orEpVptRVHZEjj18avE6P3uEfpehFmBVyR7t3aW7dFVNmY9zG2WywGw3BLjphCwyvdRSMgAPie8TnL",
  "key21": "s4TjJZ3CpSZyLNK2bLeDin6dtmE133atpD4aTw8EoyMQzPmrNeLXL9uuyYVCEPZ66ndvdjioenB7iVftW8n4Muz",
  "key22": "5NjJWvzJARU3Hce1tEEynkFGK4GgRGhxZ7NLBHTwp2pa8sjhrLA739oDVXyveNmWe4J9LCHjcWxHjPN3KvaqP6FM",
  "key23": "4d3eDen2T3GsGQ2zcabGLKtMecQi7FyG4XWRHSx6kKy45x7qAe5r7o6qyQxHt6PSe8638eLtSEcJNiNZ2sMcmWpZ",
  "key24": "qQy1pHKeRrUTptzzn7Dtc1rtczLdGtcDDry5zkaph6QBapkY3EHsZcWo7D2LCKQzTpSrcikzt2uXWAKGt2HVatX",
  "key25": "2STKMkzh8XkK55rvBD63dUPSuy5Dx32wQ5yirDUx4zV3eSxF1UkbGBhPDTxZU1ZeLrstg52dUZCxyEfdoCCiH94F",
  "key26": "4VxpzwCtCKpZxJ5vJo7YtrSHYt6kG7bYgmQvvBLQNXVS1QfjFQXnyaMmpCg4fKpb757mPE4vbHaFHxqj4VGPcGCT",
  "key27": "5VYt99oTPihHFmRprXaGFWzbsY2CRQRBVETg3VLXVKYymsDK2JMBnXncGuUnUPq4wykZYvAjou2HKXAFAHjwrgZP",
  "key28": "2M7VAWUpHyLWVpnvyuankjE1oAHBN1yuL5V94W6sXeogw5dpf7iANRsQBxNFmFSuTpksZMUVC5PNAD46H55E7N55",
  "key29": "5moGK8szJsJ6Ed22dYNLnmRvU7dpD1QtpMgCHdmjwj9vrMiNGvAQKLnTTCSNUsDWCDUja2sjh8fJWmV8GRHAHZg8",
  "key30": "3SeK5XTV5xEKFa3GNBLyakHNMXkjYMYFNWGHdgfQzPGydqD8JCn9AFHniKcex26VGrBMxPXyVq6qf8HsRUfikncN",
  "key31": "3g1gFEzu71j1sJiLcFsWNGkpnDRLUU9EKEBUf9XSnXz6RMGFeHXAr5ajA6FFfyNEgyRfc6toorPr9Xw7nHkJm4LT"
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
