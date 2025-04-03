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
    "61mGCzr1yCswrFfYYmHVQAXeSNLJrTfyCFTrUNec54m1j29uqhibq81yJN69uiD1pw7rCNwi8rp2t4b9kdrN34hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gA59LyaScgFaNyMxAXd5YXXgG1i7Ro5oF8VNHWNmZvw3FaLFagtwfp5Q1fEpf35FigSmexNLYXXo3QCGNr9oP8E",
  "key1": "4SMqSqDmfQTZM2fvRCJUybiVYYkXqqmkYUeEVSRgD8JG2eX5LZhXpKqqQuVbDtKYohLhdv9MPNT5ChTf3Ywo1Xir",
  "key2": "zrfaCDNUJf7VwpVj3Dp3cbrFXX4Rkz5yanbCHFJHZC3PW8cNwKvM1BmEmVuhbNFWSiF3Efk34Y7kSsBihSc5fYx",
  "key3": "YKuknZwf2BWP7C5dfjqFiwiKtZkKtCDrDUHwXq8mvd1Zx3CMijSAu6AgfxrqvVsLvmAari1qW7nDVWGyZuJshjF",
  "key4": "3tBXRmHD5H7K2wHsrc1mS4QShKATadSJmyBmEcYi9i8cyYywyKNUmWtrqghDTWusAVq5qAkW1yz7zVrKUEqyj8SN",
  "key5": "4MFcg8dQBrt3knyp2vAYdfNRFCCkj8dQyEgJWtCDYNAuPKnHHSWRWCHnhRZqQN2Xi3bLKqxsJsPNGRxwECiamSkP",
  "key6": "5QtBPK6r7HEa3fpLTbzoAr4Bb3zGWrhDi2PXZSvXtNV9AzTEo4GVK8QuSVjH4XQ3oi5fcZZ3hBDVbNQute6aVHmV",
  "key7": "492hjcWvECo3fUtAtRVEwfL1BBdRsyTtimuKy8WJopJvrQFuhypLfNur8oWmBEPQsbB4w6Ka8SxApbbzLUTW7E83",
  "key8": "4S1FpktMjAHSxi8DB7KEzSwg913vs7RbeE7DCRakAsrgVMKDYRguNwSh8LyYpjpx8LGx1qD1g9Raw1vQPQNgrXWN",
  "key9": "9H69o4YoR45gE51DHHEGihX6xXKRSrVXqLauzmefjC4tu8zhn6qzGFiWdMaE9aiwD15jMqtcjEEnZ391tdjC1bW",
  "key10": "4wH4VVntvPHayvAAMVLodQiqL52WAjkTmk2F1uidANZqTuFZTS6qjfgA2bgCbQHcmrQp6d3G3AVB5EqVXry2s35C",
  "key11": "56nytoEsVJykVy3URsynDs6dSEdFVPBG29Ya7wWN7PJL8RQvmFhmQMkxoPy2UofMmniUkfRoSvnvfKGezG8FhV6U",
  "key12": "38H3Lp7cqJjCZpyFou3H7ZCfKWdPb9CAMN4uKwYd3xK5hn1p3tpVT7VPVXfsCGn8AUQeRzjAhnGYV8PpAzS3RmbX",
  "key13": "2q813TcjqPo2XsH5ibRAQBMiZk9saC95Umw23SsfHQHryvqJKHQTavaDteK8qtbYRcZwHC9Df6m1VJmwguJka4Ae",
  "key14": "5FGu4VExPdYe9BfWcz4xQEYK9K6uYmXnw84uYjYAnMY5x7Wiq96zgkPZNAXQPwZ6UKjJbTf5Fw8LzyBpaupp6P58",
  "key15": "yurv3FRGi8pFzsEbiPQGKDUM4GyCXGf66kvjj19Gtc3EcJ7nhWafvw4DH94EDz8Y6Jm9Gq2bcx8h9gQbrgDZ4Ln",
  "key16": "eBCTvUS4GyhdutL5kDY2FcMqTUv7fuQczHHeDiaJEQHm5CteJcSKuHJKFZ17c2MhzP93tSG92i13CfLbpjZfqwk",
  "key17": "61S5CgWeH7isoryNCS9HK7u1zsaPG7SN2ZprcxrZzKBqTr4EtLVWoPCVjQkeDicQGqbfdCXWWyrXCVEK5Z9Rfa19",
  "key18": "5nm4Q7J5528JUEpDzrgtLfpK3WfHruGo3ZxKs4b1G7p1epdHwGoQJXhdEoaNc2SnrLDpRiVnhw96p8UogkSfZQqo",
  "key19": "21Y3wS9puPswuP3x66EzqptRu3KfgXh5DHfnoDGiVvrki6ZPg3qpNNdaE5R6RqkmP3ez6eZRYsn2i6uE842w7zeH",
  "key20": "38he9uBa4Xjsg2VwTSbQUCrAtSEfNHDrckvEE3t3BkN72xhNamj3VwiBHi2yU2iJDPLSq6VJtpQv18VVS4Wk7Qve",
  "key21": "RmJQAei1S61ikGAcNC3eA6J6VfE9Mn9nGbhQVzYcv2vx8UmeGmucKjEkrAKvdDXZh1xMhEwV31GSS5o8SHpjfLU",
  "key22": "3gSbxGptSmYAf2P5FcUwZBNXJW7uisG5WfS51bEuyZ2KwZRZwjv4uhjGnn519obcKZd8gT9GBcco7DE7584mQqw6",
  "key23": "42UkEZwKmaD7Cm4LD39fSKPv78uJL23DgjW3DrTdkMg2zSnBat2LxhTZUiKsD7yaDdLvF3RndRmqQdRuBZBJdnLd",
  "key24": "W5MWujXpJwUJXshqk5iiBZ28sDHQTg2JiNTu2k2oJkNtJJovnap9pRYnYRqNbeajDNvpzE6PaWQ6d7G6XbdHYLH"
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
