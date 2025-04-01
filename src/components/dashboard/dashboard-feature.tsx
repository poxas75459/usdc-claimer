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
    "5wYUFqWXz5G9ns8Xe18fy4abQWrNmL8EyLQry5XooSsrtdMADJqUKe799sYMSGxgd5mQASAVB4M6mFmXCmomrPJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUFH3tbWYwKjQQvK2PXCSpn1uTkjvAvnbVVvSPfKpZqLkJ2vsphvraDckTUBqHcqKzhaRZnZVobsyERT8cXuXga",
  "key1": "2otJbVFJzk17CfVEu7a8YjziECL6bexkhEhsKjjodPhgdG5VxUPLKXWmv32TzdZKMbXR7qBwDHP2HW7ZFAzeU2nr",
  "key2": "2m5qEMguuTutBFsDAuE8DqLdp4jikPr7Z8hhjpratXzheKkj5XHsHumDFXe9yFSt4jQ2DTK39r5D97p37NKAutkV",
  "key3": "G5MUhERLMpPQebUCd9epPfxwUkW5V3LxEGKrDyCLLgd9nmzhvSeHju3G8jeEFtSCkL4cD5WF9bk9KCxnYuLtJy1",
  "key4": "3yGcLth7R6yxAwgBum5LVKkG3fhdMiBvSmzCcN2rW7ZAGPp6XJcrywfgrfAv2Txwxq2QhUmJWM9rDibNPzPf37T8",
  "key5": "4wv2kwFQrPyRbmJ2CAqQsFtv4hvbUazLAWtKDrkKSiCCzEdtC9t2ewPFQkwg1wEUtiAmA3zMe8LgxxXmrsanEQDg",
  "key6": "3ZLPHRz9FGjFBTEv8TaWSLwb7jNvxTSNSgHX27ZMZ11RNTvaExdvzpoVptEHDbtwMy6bsGMEGPiT9JQuPfvCNDVA",
  "key7": "2jDHVY2CYaHYGhXhL27J6vWJXec5hdEWLpYsWAsk185cGd2DUqiJVJBKdNSMCRuW1rdnfxsJA8vpVKFw5UKqsvHF",
  "key8": "2ES8JtVoFfxpoStyXSx9GwCa7quBUhaqpoGTkex3F4WHwJxCHgnPE7Zj6VKFRDb4DBTEd2jNT2g8SJHgerbHggyb",
  "key9": "bwqwRSsBAxQ9v1ux3MqDMRQNKjUezJoMqeVCN4Cr2TYr9DkZX6WxyDNcejnVaheGagjKy2qG3JqLrxfueQ19jKa",
  "key10": "aUUhLEHbaShjbcY381vJcqiCzvYNTDPg7fcYuSLpziLpvxDWTAbVMwRKwLUFwLDGbyz7jq4EiCyjaGQ5tPYCeRs",
  "key11": "2UJQzg3zynJz7ugjisxYnpQGL8MurK4Ksrp176BmfRAfis4cGyHoCGfoyBmvtij8KMFKdFHajmVbG8a5jiiLsbZi",
  "key12": "799ceSFPgxkJDuZyBpgXb6CMwcY3nMT4JprmBaZg5EjEUT52UDBXEV3r2oNUGPGzPhKzkAfiftM8syw3d3FV7qg",
  "key13": "2gBvJNsCMBGH9HLuNgtekLJzzMrhxLH9tPjD3uGjXsdwTvTg4JK51oroTv5Huy6r3jaqEtNqYiq8vLk2nFKfiFec",
  "key14": "5EH9Tjyg4wBi6LT8X459KKcVxbnUBo4466ERLmn3WXbVBnNiUu6pp8RLBm3VGM3jZyLgEiyFwEA6nqtQVthCRwxT",
  "key15": "4qLwm8xQKaFu2TKvZ1v3JQcBnXKrDr8zdw4V5mP619JoxR9CxEYn9LWRkRki918UcZf5UqrEeLQTF2jkfMZPZ3Ez",
  "key16": "5jNuSdeGCoXKguVUrFiN5mRQvs4JrdfS7LMZ58WQJzLUZ6hoea3VPChPCk2KepNFi8UjYskkZVF8kvV4vUKJ86iY",
  "key17": "L2KbDHcr7r6H9QiEH2QbPArBcNTDNQyCb3id7NpkNZYgrUdmdiQvxv4DU2azVCdrGYdhqpv68EBaXmMsqKDoMD4",
  "key18": "4bJX31Pz8X22c8vZtm3BHH5X5bHfCGbPm8m6MHTRMMVYCFrDXktJcecFbq2iBTpSxCQJLQaZcEDX34atGMoYnVvb",
  "key19": "gQ5B96H2Ki8bqwGDoYkwa5p7AuHV7BEY7PsX5BMB2paPAgoD16G5DzH2CtSEcA2Fx7hgTtKVSLGR3MkcAJes5qr",
  "key20": "2iVhoasAR1qFqtAA33ueRkXYr1rrGRDrC7z7pUbyzBLHGiQFmg5SUkDzK4FxsATrjuoy5ZPmfGSyRNRHpKFi5MAp",
  "key21": "3E8pWnppvcSjDp1y6nfaxu5s4WFhtCEWQo6AYWDmUhN4myFHGS3piR3ytQQDPxhK7aPysYWx1C3YC8r9BEPC7o8z",
  "key22": "5wCMkYi7Z619RxEK1jGu2RHZoQYQ19LWaQKQPF8QLjHkYm26hfx9RHEiw4kYM2bJu4DLgbs6avM6KSFeRcS7gmz",
  "key23": "4nXqT6hvBktshi9mp6FbPrt9VF38LihfHhLDxh4FZpb8jBxmt8dU1czYQv7t5LgFZ5xUz5Xo2N5vPkwRSQfgCGjW",
  "key24": "3ZQtNdocYg4XkTenAFDMQPYCrLcErYntyq44yPxYzY7zxZjb2XAHBgqk9rkLUW9GBqtkX2aghZ25J7cUjmSExjFr",
  "key25": "3oWUn17azaeFJoV5BeTx3Dfru2PPHhLCA4FvpH5iS9UMaAHpBFaZyMG1vdvR68z5iGGMNxReiEckZkSbZhEWEmc9",
  "key26": "2BNbzb9bodnLRTgbuw1uuWWTouxxnCmzcnWGzBfQK7ctCK6nTeax8N68rnTvAf9hLnWu73efrTMnEp1NoHGBt6oD",
  "key27": "5HpbVr6v5aNWZG7uALBA2W8qYYh7RfTb4HJDjJJNuKTML2A3tJgwUnTwusob22hkBTZ1X6mG4TBJg1eTz9psM452",
  "key28": "8aCt9qPZDe4LoJ4RFU3rd8n88S7ah5CFptRNE3NPm1szyj6tw4Juz3SjPGRyB5wN2yuHg4Beb1CXHowfZJx3dD6",
  "key29": "3vrYNrcpDKjNJd6agDJHq47guQkE9SYRJpcuoNrDseZpwchZYvKHCXdCMMzhspXuZUbMZYAVRMMrYya8ME72MeDG",
  "key30": "3FQ2SB21jHCST1tjV7dSZnE2rgRuWYFttuHbCui7Gy4bigw9ZpVoQJkwMDKch7zLMgq68SaHFZD72tpQdFH3Fhf6",
  "key31": "5xWM1fyyZg487xhMMcmcckWN79upN8ggavRcv3nm2M7JjsRXZuHG6xDzQsmC6edEzd3SQdo3wQLNXVwf4zMw9E9Z",
  "key32": "3WtkJbvysovJR2YnSoTjEXmyimqLFgUM5kFMT2pepPZ7KQznmHmkDb4n8FGyde5MZkcTfUTg2VM9ttEy7YNH1Mmt",
  "key33": "pttzube1XecQRzr8aHVvsrs9gFohHV3XqmPqWdsxi3SgpReKNNEkJ4dz7crGXNvcn4YDYE5dAuksSuqd58gPgGf"
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
