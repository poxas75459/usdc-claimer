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
    "2XdgvhVpXLAfS5VVAvrARCGk7qtHBB255vnHELZuAD9H1tE7sqYnHpWjiRnMZ1uac3GgRdkrCxcMF5Rm4iTUKirR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ACrBDHXWETkHKM3j49SGq9HFbp9ei9KWuz9qK5ctavfgyAK4c4A729LKgRXWiER7ZJqEsCT17BVaHFqBeapoSq",
  "key1": "4wCBebXJjvh4aZNMaFmcBPqqRW6rfBB7Wfs9wK5D63aEwtwDh87HtoGFpwvH7fWBF114UaaD9Ah2Le595JaqgNkq",
  "key2": "571MoNew2XsHakos4okykjUEHQTyBy9BUwLkeg38MaYwNUbNBzrbW7vqtcCCTZdH5ivdNFW3xQLir7Nsv765N5Md",
  "key3": "2v9jD4adtFgMaQQ2wf6Ww6qe24pR88GpZ3EpDgEHP1VdqbLGvsFi3JLgSBby17xjXzD5HXKaWsdj8baF5Pb29z7H",
  "key4": "4j3bxRLhGzZH3CsqgXuMPu1EAWEtVdaDkt5AXJKUaTCBZTG8H3jW8X2Qcgw7spKttjDgkjNaMZFWKoke5nM4HLHE",
  "key5": "4UfMHzHwZ2dq6MMLwGCEbsooY4HLEp66MDa1rEKYPJFKKU7hiewaKSZv6BNH81RxRg2aKfS3Z9KeSmdeGPYfRxji",
  "key6": "zwnTu67Lv4sLsgWiizjsRm5YbsWBZfiJdS6TnpwNBMLYE2pjy8secL7phKYWJVuQp7Mj8DinTv1YpK3CyxLtG9P",
  "key7": "4kJjHHHyvDQWx9dq1zfWqJHChcX56ZEbW2b1QdxK4JEa7mrTnb8s9d5pAozubhA1E3j8PPPh8zFLPueqssdXyVVU",
  "key8": "3SGTzo6knNRfa3ZEd2cdFKKssQrF9sWQJCoeT8vfmUWVAo52yzSi7kgwtLBn8YS4iaQR6HvKw4s8k7Jd7W58Zs74",
  "key9": "1NR5zjNjgV7BATuKKi9pFQRKmftEbxKGEcyGZ58KAcrR8KdPBUAFPgAn9385dJpoqar6bWqCPKX89QHwcoDYSou",
  "key10": "31YuC8TAXDLD7p44upoorJx1gaC8DM2mWJucosZ6ekyve8dew8Cf1JaaEgRVdDmrfGoJmyzwbbs6WBWMtA1CPxi4",
  "key11": "t3b5aL5wNHSXHADxHv9xstbTydQRdACbhsMEKVNdM9NVK133UNhsnetudj3eD5pzB8ifU9AVWETBpzHYwaf67ug",
  "key12": "3547Sp9LmqXejydoLJfXvVyjcx6yRSFDDmJhfdYw8AfZkJptyxD1SQZJfvo6zVxFcEXRntr4rgaEYL2yS8VSoAfu",
  "key13": "3ShdqbGN1aufhjJt1TXgPB1yukjFsGwK3PM7iKcqNTLmzVhnhDeiNcXAdLryWTonYRvAezA42iVy9SVoDUfFL1W9",
  "key14": "wvY1nRZACP2uhurs8KosY6LEBWMRYFa5vM62H12Fe1WJ1Vf8x9brw7fZhz2W7xLVjzfUw1nSDDAQbgzRTmyDgE8",
  "key15": "Q9sSKQFwcw1jSDVMGdwu3FPjbS3FnWz2gs5NyGjjqGozLo7Cxm1cH9WNJhugsLdtjB8nQco6xYkPnv83rurz7o1",
  "key16": "p1JDpYDYycD6x1Mjfo8hee8mX42DhkeJ186CoKpJdqUCd5h9wdbu6KmdsZALs3rFCJCfCzTynbYmpjjbWdoXHFL",
  "key17": "eWbUCFBzQvBcpXrJQDXyaKSpgEeXTgZCqCoLAHADT4qyvj4q5yXYKQ6wNFz3Utwj5dEW6ZkvvsqX8Wk8yuc9mCd",
  "key18": "vgNHJnUm55FECHniUvTMTFM8gcC5wVxJY2qfPPYNpfKcd9nQx6fURpM7oBe9eztW8pe9LJmDaHa6i5DYAnu2vWM",
  "key19": "ZH3QM9wMPcqoeZ1btWHzBM6NonZJKgubneTL3rZkJHa74rxWo2dfPyNB9LPZhtWbUWrzbtjWDUefEyTnaUsQHDH",
  "key20": "2S6HNr1b4RgWmQ3XPBKRxYViaDCs5td6par6jUSxGjj2TzSYskYQYVxT53iLtxVHnZUTDLfwbKwstsaCWMffZ6z9",
  "key21": "3fRbMU95G6W5bMTCJWe5xvMspGfPnfJ45rUdeqcq5og31ktoyXvcPhxdEGzdt9NWXWSWSbfsyjvDZzDScBpQocJf",
  "key22": "pLMiPd6D7VByMjFvSd9yjvcKKfq2wd4nzQvXRtiTVZH7ozmqb2s7eM7qJATMUcVjL7KzmoGLuDgtS5mNWTSkQGK",
  "key23": "QmUrFfgDcGomecRGhzwTor7ez5bTWvuPMtSqg3yEfXswTCCRFA7CtuKmHuvwktXdbiJsnXUjw7XbPfJmM2Q971K",
  "key24": "3zNWnQNf7BiWWPp9iF1McW5C1cAYcFgsqGCaSSLDqjeuuuAktbnyMU1xsS9q69n2JR4SBWEzNSrWuBLD57KMEAr1",
  "key25": "5dekep4TfATvLzMXvJT8P1oCcijihzegUqRZUF5wNsTpCYgBC8Y7kxHF3XNCYgoFLAdsrtu1JXUm4NX9k1qm3ihg",
  "key26": "41WhTaLmsu7b1FEgntXdKGetug87Q8Rm4aMogd5MSWBQrM67Uo7b5pkLDzMreddpJWWJ8ZtvfYhRo2BJhrg2NL85",
  "key27": "2MUpLR3BaiFHf394teFyFSCEkkR9tREQd9rcFitSEw169KXYXsYsotQR4MGh5uvfMewTKZEz6yyTYhuW8BqHMzTY",
  "key28": "3jvxaNtXgMvAjV4qGmjtUHP89szHFw9a1T5rRsDvTiy9pZv44n4MaamuAExwjbmjqtgdCS8eEhmDRy2uBNcBj5X2",
  "key29": "66M34uVm4cJSRtZjuxAUJtaVCqc6jQ5kkG7gZFAMGGR8yBcKpjQeBYhZsxdh8twboyvGrYLrYNtRWwadkKMfLK3P",
  "key30": "33pgFndzxxMfxj8Zwm9WiePKK169pxuXp6JHN5mwihBeZR5Qav97N5n1iPQCNPDv5erJriDfKjFSfNfxP3cvRcDP"
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
